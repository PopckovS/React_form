/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

import { Plugin } from '../../core/plugin';
import { CanUndef, IJodit, Nullable } from '../../types';
import { Dom } from '../../core/dom';
import {
	INSEPARABLE_TAGS,
	INVISIBLE_SPACE,
	KEY_BACKSPACE,
	KEY_DELETE
} from '../../core/constants';
import { isVoid, call, trim } from '../../core/helpers';
import {
	getNeighbor,
	getNotSpaceSibling,
	getSibling,
	normalizeCursorPosition
} from './helpers';

export class Delete extends Plugin {
	/**
	 * Shortcut for jodit.editor
	 */
	private get root(): HTMLElement {
		return this.j.editor;
	}

	/** @override */
	protected afterInit(jodit: IJodit): void {
		jodit.e
			.on('afterCommand', (command: string) => {
				if (command === 'delete') {
					this.afterDeleteCommand();
				}
			})
			.on('keydown', (event: KeyboardEvent): false | void => {
				if (event.key === KEY_BACKSPACE || event.key === KEY_DELETE) {
					return this.onDelete(event.key === KEY_BACKSPACE);
				}
			});
	}

	/** @override */
	protected beforeDestruct(jodit: IJodit): void {
		jodit.e.off('afterCommand').off('keydown');
	}

	/**
	 * After Delete command remove extra BR
	 */
	private afterDeleteCommand(): void {
		const jodit = this.j;

		const current = jodit.s.current();

		if (current && Dom.isTag(current.firstChild, 'br')) {
			jodit.s.removeNode(current.firstChild);
		}

		if (
			!trim(jodit.editor.textContent || '') &&
			!jodit.editor.querySelector('img') &&
			(!current || !Dom.closest(current, 'table', jodit.editor))
		) {
			jodit.editor.innerHTML = '';

			const node = jodit.s.setCursorIn(jodit.editor);

			jodit.s.removeNode(node);
		}
	}

	/**
	 * Listener BackSpace or Delete button
	 * @param backspace
	 */
	private onDelete(backspace: boolean): false | void {
		const sel = this.j.selection;

		if (!sel.isFocused()) {
			sel.focus();
		}

		if (!sel.sel?.rangeCount || this.checkNotCollapsed()) {
			return false;
		}

		const jodit = this.j;

		const range = sel.range;
		const fakeNode = jodit.createInside.text(INVISIBLE_SPACE);

		try {
			range.insertNode(fakeNode);

			if (!Dom.isOrContains(jodit.editor, fakeNode)) {
				return;
			}

			normalizeCursorPosition(fakeNode, backspace);

			if (
				this.checkRemoveChar(fakeNode, backspace) ||
				this.checkRemoveInseparableElement(fakeNode, backspace) ||
				this.checkTableCell(fakeNode, backspace) ||
				this.checkRemoveEmptyParent(fakeNode, backspace) ||
				this.checkRemoveEmptyNeighbor(fakeNode, backspace) ||
				this.checkJoinNeighbors(fakeNode, backspace) ||
				this.checkRewrapListItem(fakeNode, backspace)
			) {
				return false;
			}
		} finally {
			Dom.safeRemove(fakeNode);
		}

		return false;
	}

	/**
	 * On Not collapsed selection - should only remove whole selected content
	 *
	 * @example
	 * ```html
	 * <p>first | stop</p><p>second | stop</p>
	 * ```
	 * result
	 * ```html
	 * <p>first | stop</p>
	 * ```
	 */
	private checkNotCollapsed(): void | true {
		const jodit = this.j;

		if (!jodit.s.isCollapsed()) {
			jodit.execCommand('Delete');
			return true;
		}
	}

	/**
	 * Check possibility the char can be removed
	 *
	 * @example
	 * ```html
	 * te|st
	 * ```
	 * result
	 * ```html
	 * t|st
	 * ```
	 * @param fakeNode
	 * @param backspace
	 */
	private checkRemoveChar(fakeNode: Node, backspace: boolean): void | true {
		const step = backspace ? -1 : 1;

		let sibling = getSibling(fakeNode, backspace),
			removeNeighbor: Nullable<Node> = null;

		let charRemoved: boolean = false,
			removed: CanUndef<string>;

		while (sibling && Dom.isText(sibling)) {
			if (sibling.nodeValue?.length) {
				const value = sibling.nodeValue;
				const length = value.length;

				let index = backspace ? length - 1 : 0;

				if (value[index] === INVISIBLE_SPACE) {
					while (value[index] === INVISIBLE_SPACE) {
						index += step;
					}
				}

				removed = value[index];

				if (value[index + step] === INVISIBLE_SPACE) {
					index += step;

					while (value[index] === INVISIBLE_SPACE) {
						index += step;
					}

					index += backspace ? 1 : -1;
				}

				sibling.nodeValue = value.substr(
					backspace ? 0 : index + 1,
					backspace ? index : length
				);
			}

			if (!sibling.nodeValue?.length) {
				removeNeighbor = sibling;
			}

			if (!isVoid(removed) && removed !== INVISIBLE_SPACE) {
				charRemoved = true;
				break;
			}

			sibling = getSibling(sibling, backspace);

			if (removeNeighbor) {
				Dom.safeRemove(removeNeighbor);
				removeNeighbor = null;
			}
		}

		if (charRemoved) {
			this.removeEmptyInlineParent(fakeNode);
			this.addBRInsideEmptyBlock(fakeNode);
			this.j.s.setCursorBefore(fakeNode);
		}

		return charRemoved || undefined;
	}

	/**
	 * Helper remove all empty inline parents
	 * @param node
	 */
	private removeEmptyInlineParent(node: Node): void {
		let parent = node.parentElement;

		while (parent && Dom.isInlineBlock(parent)) {
			const p = parent.parentElement;

			if (Dom.isEmpty(parent)) {
				Dom.after(parent, node);
				Dom.safeRemove(parent);
			}

			parent = p;
		}
	}

	/**
	 * Helper add BR element inside empty block element
	 * @param node
	 */
	private addBRInsideEmptyBlock(node: Node): void {
		if (
			node.parentElement !== this.root &&
			Dom.isBlock(node.parentElement, this.j.ew) &&
			Dom.each(node.parentElement, Dom.isEmptyTextNode)
		) {
			Dom.after(node, this.j.createInside.element('br'));
		}
	}

	/**
	 * Check possibility inseparable Element can be removed (img, hr etc.)
	 *
	 * @example
	 * ```html
	 * <p>first second <img>| stop</p>
	 * ```
	 * result
	 * ```html
	 * <p>first second | stop</p>
	 * ```
	 * @param fakeNode
	 * @param backspace
	 */
	private checkRemoveInseparableElement(
		fakeNode: Node,
		backspace: boolean
	): void | true {
		const neighbor = Dom.getNormalSibling(fakeNode, backspace);

		if (
			Dom.isElement(neighbor) &&
			(Dom.isTag(neighbor, INSEPARABLE_TAGS) || Dom.isEmpty(neighbor))
		) {
			Dom.safeRemove(neighbor);
			this.j.s.setCursorBefore(fakeNode);

			if (Dom.isTag(neighbor, 'br')) {
				this.checkRemoveEmptyParent(fakeNode, backspace);
			}

			return true;
		}
	}

	/**
	 * Inside the CELL table - nothing to do
	 *
	 * @example
	 * ```html
	 * <table><tr><td>|test</td></tr></table>
	 * ```
	 * result
	 * ```html
	 * <table><tr><td>|test</td></tr></table>
	 * ```
	 * @param fakeNode
	 * @param backspace
	 */
	private checkTableCell(fakeNode: Node, backspace: boolean): void | true {
		const cell = fakeNode.parentElement;

		if (Dom.isCell(cell, this.j.ew)) {
			return true;
		}
	}

	/**
	 * Check if the current empty item can be removed
	 *
	 * @example
	 * ```html
	 * <p>first stop</p><p>|<br></p>
	 * ```
	 * result
	 * ```html
	 * <p>first stop|</p>
	 * ```
	 * @param fakeNode
	 * @param backspace
	 */
	private checkRemoveEmptyParent(
		fakeNode: Node,
		backspace: boolean
	): true | void {
		let found: boolean = false;

		const { setCursorBefore, setCursorIn } = this.j.s;

		let prn: Nullable<Node> = Dom.closest(
			fakeNode,
			Dom.isElement,
			this.root
		);

		if (!prn || !Dom.isEmpty(prn)) {
			return;
		}

		const neighbor = getNeighbor(fakeNode, backspace, this.root);

		do {
			if (prn && Dom.isEmpty(prn) && !Dom.isCell(prn, this.j.ew)) {
				Dom.after(prn, fakeNode);

				const tmp: Nullable<Node> = Dom.closest(
					prn,
					n => Dom.isElement(n) && n !== prn,
					this.root
				);

				Dom.safeRemove(prn);

				found = true;

				prn = tmp;
			} else {
				break;
			}
		} while (prn);

		if (found && this.checkJoinTwoLists(fakeNode, backspace)) {
			return true;
		}

		if (neighbor) {
			setCursorIn(neighbor, !backspace);
		} else {
			setCursorBefore(fakeNode);
		}

		return found || undefined;
	}

	/**
	 * Try join two UL elements
	 *
	 * @param fakeNode
	 * @param backspace
	 * @example
	 * ```html
	 * <ul><li>one</li></ul>|<ol><li>two</li></ol>
	 * ```
	 * Result
	 * ```html
	 * <ul><li>one|</li><li>two</li></ul>
	 * ```
	 */
	private checkJoinTwoLists(fakeNode: Node, backspace: boolean): true | void {
		const next = Dom.getNormalSibling(fakeNode, backspace),
			prev = Dom.getNormalSibling(fakeNode, !backspace);

		if (
			!Dom.closest(fakeNode, Dom.isElement, this.root) &&
			Dom.isTag(next, ['ul', 'ol']) &&
			Dom.isTag(prev, ['ul', 'ol']) &&
			Dom.isTag(next.firstElementChild, 'li') &&
			Dom.isTag(prev.firstElementChild, 'li')
		) {
			const { setCursorBefore, setCursorAfter } = this.j.s;

			const target = next.firstElementChild,
				second = prev.firstElementChild;

			call(!backspace ? Dom.append : Dom.prepend, second, fakeNode);

			this.checkJoinNeighbors(fakeNode, backspace);

			call(backspace ? Dom.append : Dom.prepend, target, fakeNode);

			call(backspace ? setCursorBefore : setCursorAfter, fakeNode);

			return true;
		}
	}

	/**
	 * Check if it is possible to remove an empty adjacent element.
	 *
	 * @example
	 * ```html
	 * <p><br></p><p>|second stop</p>
	 * ```
	 * result
	 * ```html
	 * <p>|second stop</p>
	 * ```
	 * @param fakeNode
	 * @param backspace
	 */
	private checkRemoveEmptyNeighbor(
		fakeNode: Node,
		backspace: boolean
	): true | void {
		const parent = Dom.closest(fakeNode, Dom.isElement, this.root);

		if (!parent) {
			return;
		}

		const neighbor = getNotSpaceSibling(parent, backspace);

		if (neighbor && Dom.isEmpty(neighbor)) {
			Dom.safeRemove(neighbor);
			this.j.s.setCursorBefore(fakeNode);
			return true;
		}
	}

	/**
	 * Check if two separate elements can be connected
	 *
	 * @example
	 * ```html
	 * <p>a</p><p>|b</p>
	 * <ul><li>a</li></ul><ul><li>|b</li></ul>
	 * ```
	 * result
	 * ```html
	 * <p>a|b</p>
	 * <ul><li>a</li><li>|b</li></ul>
	 * ```
	 * @param fakeNode
	 * @param backspace
	 */
	private checkJoinNeighbors(
		fakeNode: Node,
		backspace: boolean
	): true | void {
		const parent = Dom.closest(fakeNode, Dom.isElement, this.root);

		if (!parent) {
			return;
		}

		const neighbor = getNotSpaceSibling(parent, backspace);

		this.j.s.setCursorBefore(fakeNode);

		if (
			parent &&
			neighbor &&
			parent.nodeName === neighbor.nodeName &&
			this.j.s.cursorInTheEdge(backspace, parent)
		) {
			Dom.moveContent(parent, neighbor, !backspace);

			let next;
			do {
				next = getSibling(neighbor, !backspace);
				Dom.safeRemove(next);
			} while (next !== parent);

			this.j.s.setCursorBefore(fakeNode);
			return true;
		}

		if (
			Dom.isTag(parent, 'li') &&
			this.j.s.cursorInTheEdge(backspace, parent)
		) {
			call(backspace ? Dom.before : Dom.after, parent, fakeNode);
			const result = this.checkJoinNeighbors(fakeNode, backspace);
			call(!backspace ? Dom.append : Dom.prepend, parent, fakeNode);
			this.j.s.setCursorBefore(fakeNode);

			return result;
		}
	}

	/**
	 * For first item in list on backspace try move his content in new P
	 *
	 * @param fakeNode
	 * @param backspace
	 * @example
	 * ```html
	 * <ul><li>|first</li><li>second</li></ul>
	 * ```
	 * Result
	 *  ```html
	 * <p>|first</p><ul><li>second</li></ul>
	 * ```
	 */
	private checkRewrapListItem(
		fakeNode: Node,
		backspace: boolean
	): true | void {
		if (backspace) {
			const li = Dom.closest(fakeNode, Dom.isElement, this.root);

			if (
				Dom.isTag(li, 'li') &&
				li?.parentElement?.firstElementChild === li &&
				this.j.s.cursorInTheEdge(true, li)
			) {
				const ul = li.parentElement;
				const p = this.j.createInside.element(this.j.o.enterBlock);

				Dom.before(ul, p);
				Dom.moveContent(li, p);
				Dom.safeRemove(li);

				if (Dom.isEmpty(ul)) {
					Dom.safeRemove(ul);
				}

				this.j.s.setCursorBefore(fakeNode);

				return true;
			}
		}
	}
}

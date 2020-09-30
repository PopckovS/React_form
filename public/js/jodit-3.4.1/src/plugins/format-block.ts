/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

import { Config } from '../config';
import { Dom } from '../modules/';
import {
	HTMLTagNames,
	IJodit,
	// markerInfo,
	IControlType,
	IDictionary
} from '../types';
import { dataBind, isVoid } from '../core/helpers';

Config.prototype.controls.paragraph = {
	command: 'formatBlock',
	update(button): boolean {
		const editor = button.j as IJodit,
			control = button.control,
			current = editor.s.current();

		if (current && editor.o.textIcons) {
			const currentBox =
					Dom.closest(
						current,
						node => Dom.isBlock(node, editor.ew),
						editor.editor
					) || editor.editor,
				currentValue = currentBox.nodeName.toLowerCase(),
				list = control.list as IDictionary;

			if (
				button &&
				control.data &&
				control.data.currentValue !== currentValue &&
				list &&
				list[currentValue]
			) {
				if (editor.o.textIcons) {
					button.state.text = currentValue;
				} else {
					button.state.icon.name = currentValue;
				}

				control.data.currentValue = currentValue;
			}
		}

		return false;
	},

	exec: (editor: IJodit, event, { control }): void | false => {
		const key = `button${control.command}`;

		const value =
			(control.args && control.args[0]) || dataBind(editor, key);

		if (isVoid(value)) {
			return false;
		}

		dataBind(editor, key, value);

		editor.execCommand(
			control.command as string,
			false,
			value || undefined
		);
	},

	data: {
		currentValue: 'left'
	},

	list: {
		p: 'Normal',
		h1: 'Heading 1',
		h2: 'Heading 2',
		h3: 'Heading 3',
		h4: 'Heading 4',
		blockquote: 'Quote'
	},

	isChildActive: (editor: IJodit, control: IControlType): boolean => {
		const current = editor.s.current();

		if (current) {
			const currentBox = Dom.closest(
				current,
				node => Dom.isBlock(node, editor.ew),
				editor.editor
			);

			return Boolean(
				currentBox &&
					currentBox !== editor.editor &&
					control.args !== undefined &&
					currentBox.nodeName.toLowerCase() === control.args[0]
			);
		}

		return false;
	},

	isActive: (editor: IJodit, control: IControlType): boolean => {
		const current = editor.s.current();

		if (current) {
			const currentBpx = Dom.closest(
				current,
				node => Dom.isBlock(node, editor.ew),
				editor.editor
			);

			return Boolean(
				currentBpx &&
					currentBpx !== editor.editor &&
					control.list !== undefined &&
					!Dom.isTag(currentBpx, 'p') &&
					((control.list as any)[
						currentBpx.nodeName.toLowerCase()
					] as any) !== undefined
			);
		}

		return false;
	},

	childTemplate: (e: IJodit, key: string, value: string) =>
		`<${key} style="margin:0;padding:0"><span>${e.i18n(
			value
		)}</span></${key}>`,

	tooltip: 'Insert format block'
} as IControlType;

/**
 * Process command - `formatblock`
 *
 * @param {Jodit} editor
 */
export function formatBlock(editor: IJodit) {
	editor.registerCommand(
		'formatblock',
		(command: string, second: string, third: string): false | void => {
			// editor.s.focus();
			// let work: boolean = false;
			//
			// editor.s.eachSelection((current: Node) => {
			// 	const selectionInfo: markerInfo[] = editor.s.save();
			// 	let currentBox: HTMLElement | false = current
			// 		? (Dom.up(
			// 				current,
			// 				node => Dom.isBlock(node, editor.ew),
			// 				editor.editor
			// 		  ) as HTMLElement)
			// 		: false;
			//
			// 	if ((!currentBox || Dom.isTag(currentBox, 'li')) && current) {
			// 		currentBox = Dom.wrapInline(
			// 			current,
			// 			editor.o.enter,
			// 			editor
			// 		);
			// 	}
			//
			// 	if (!currentBox) {
			// 		editor.s.restore(selectionInfo);
			// 		return;
			// 	}
			//
			// 	if (!currentBox.tagName.match(/TD|TH|TBODY|TABLE|THEAD/i)) {
			// 		if (
			// 			third === editor.o.enterBlock.toLowerCase() &&
			// 			Dom.isTag(currentBox.parentNode, 'li')
			// 		) {
			// 			Dom.unwrap(currentBox);
			// 		} else {
			// 			Dom.replace(
			// 				currentBox,
			// 				third as HTMLTagNames,
			// 				editor.createInside,
			// 				true,
			// 				false
			// 			);
			// 		}
			// 	} else {
			// 		if (!editor.s.isCollapsed()) {
			// 			editor.s.applyStyle(
			// 				{},
			// 				{
			// 					element: third as HTMLTagNames
			// 				}
			// 			);
			// 		} else {
			// 			Dom.wrapInline(current, third as HTMLTagNames, editor);
			// 		}
			// 	}
			//
			// 	work = true;
			// 	editor.s.restore(selectionInfo);
			// });
			//
			// if (!work) {
			// 	const br = editor.createInside.element('br');
			// 	const currentBox = editor.createInside.element(third, br);
			// 	editor.s.insertNode(currentBox, false);
			// 	editor.s.setCursorIn(currentBox);
			// }
			//

			editor.s.applyStyle(undefined, {
				element: third as HTMLTagNames
			});

			editor.setEditorValue();

			return false;
		}
	);
}

/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

import './context-menu.less';

import { IContextMenu, IContextMenuAction } from '../../types';
import { Popup } from '../../core/ui/popup';
import { Button } from '../../core/ui/button';
import { isArray } from '../../core/helpers/checker';

/**
 * Module to generate context menu
 *
 * @module ContextMenu
 * @param {Object} parent Jodit main object
 */
export class ContextMenu extends Popup implements IContextMenu {
	/**
	 * Generate and show context menu
	 *
	 * @param x Global coordinate by X
	 * @param y Global coordinate by Y
	 * @param actions Array with plain objects {icon: 'bin', title: 'Delete', exec: function () { do smth}}
	 * @example
	 * ```javascript
	 * parent.show(e.clientX, e.clientY, [{icon: 'bin', title: 'Delete', exec: function () { alert(1) }]);
	 * ```
	 */
	show(x: number, y: number, actions: Array<false | IContextMenuAction>) {
		const self = this,
			content = this.j.c.div('jodit-context-menu__actions');

		if (!isArray(actions)) {
			return;
		}

		actions.forEach(item => {
			if (!item) {
				return;
			}

			const action = Button(this.jodit, item.icon || 'empty', item.title);
			this.jodit && action.setParentView(this.jodit);

			action.setMod('context', 'menu');

			action.onAction((e: MouseEvent) => {
				item.exec?.call(self, e);
				self.close();
				return false;
			});

			content.appendChild(action.container);
		});

		super
			.setContent(content)
			.open(() => ({ left: x, top: y, width: 0, height: 0 }), true);
	}
}

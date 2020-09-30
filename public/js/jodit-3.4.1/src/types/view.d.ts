/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

import {
	Buttons,
	ButtonsOption,
	Controls,
	IProgressBar,
	IToolbarCollection
} from './toolbar';
import { IComponent, IContainer, IDictionary, Nullable } from './types';
import { Attributes, ICreate } from './create';
import { IStorage } from './storage';
import { IAsync } from './async';
import { IUIButtonState } from './ui';
import { EventsNative } from '../core/events';

interface ILanguageOptions {
	language?: string;
	debugLanguage?: boolean;
	i18n?: IDictionary<IDictionary<string>> | false;
}

interface IToolbarOptions {
	theme?: string;
	toolbar?: boolean | string | HTMLElement;
	toolbarButtonSize?: IUIButtonState['size'];
	textIcons?: boolean;

	extraButtons?: Buttons;
	removeButtons?: string[];

	buttons?: ButtonsOption;

	showTooltip?: boolean;
	showTooltipDelay?: number;
	useNativeTooltip?: boolean;

	direction?: string;
}

type NodeFunction = (elm: HTMLElement) => void;

interface IViewOptions extends ILanguageOptions, IToolbarOptions {
	basePath?: string;
	theme?: string;

	defaultTimeout?: number;

	disabled?: boolean;
	readonly?: boolean;
	iframe?: boolean;

	activeButtonsInReadOnly?: string[];

	allowTabNavigation?: boolean;

	zIndex?: number;
	fullsize?: boolean;
	globalFullSize?: boolean;

	controls?: Controls;

	createAttributes?: IDictionary<Attributes | NodeFunction>;

	shadowRoot?: Nullable<ShadowRoot>;
}

interface IViewBased<T = IViewOptions> extends IContainer, IComponent {
	isView: true;

	/**
	 * ID attribute for source element, id add {id}_editor it's editor's id
	 */
	id: string;

	basePath: string;

	isLocked: boolean;
	isLockedNotBy(name: string): boolean;
	lock(name?: string): boolean;
	unlock(): boolean;

	isFullSize: boolean;
	toggleFullSize(isFullSize?: boolean): void;

	buffer: IStorage;

	progressbar: IProgressBar;

	events: EventsNative;
	e: this['events'];

	async: IAsync;

	create: ICreate;
	c: this['create'];

	options: T;
	// alias
	o: this['options'];

	i18n: (text: string, ...params: Array<string | number>) => string;

	defaultTimeout: number;

	getVersion: () => string;

	components: Set<IComponent>;
	getInstance<T extends IComponent>(moduleName: string, options?: object): T;
}

interface IViewWithToolbar<T = IViewOptions> extends IViewBased<T> {
	toolbar: IToolbarCollection;
	toolbarContainer: HTMLElement;

	setPanel(element: HTMLElement | string): void;
}

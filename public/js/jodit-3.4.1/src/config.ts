/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

import * as consts from './core/constants';
import { Dom } from './core/dom';
import {
	$$,
	convertMediaUrlToVideoEmbed,
	defaultLanguage,
	isURL,
	trim,
	val,
	extend,
	isArray
} from './core/helpers/';
import {
	IExtraPlugin,
	IDictionary,
	IJodit,
	IViewOptions,
	NodeFunction,
	Attributes,
	ButtonsOption,
	IFileBrowserCallBackData,
	Controls,
	IControlType,
	IUIButtonState,
	Nullable
} from './types';
import { FileSelectorWidget, TabOption, TabsWidget } from './modules/widget';

/**
 * Default Editor's Configuration
 */
export class Config implements IViewOptions {
	/**
	 * When this option is enabled, the editor's content will be placed in an iframe and isolated from the rest of the page.
	 *
	 * @example
	 * ```javascript
	 * new Jodit('#editor', {
	 *    iframe = true;
	 *    iframeStyle = 'html{margin: 0px;}body{padding:10px;background:transparent;color:#000;position:relative;z-index:2;\
	 *    user-select:auto;margin:0px;overflow:hidden;}body:after{content:"";clear:both;display:block}';
	 * });
	 * ```
	 */
	iframe: boolean = false;

	commandToHotkeys!: IDictionary<string | string[]>;

	license: string = '';

	preset: string = 'custom';

	presets: IDictionary = {
		inline: {
			inline: true,
			toolbar: false,
			toolbarInline: true,
			toolbarInlineForSelection: true,
			showXPathInStatusbar: false,
			showCharsCounter: false,
			showWordsCounter: false,
			showPlaceholder: false
		}
	};

	ownerDocument: Document = (typeof document !== 'undefined'
		? document
		: null) as Document;

	ownerWindow: Window = (typeof window !== 'undefined'
		? window
		: null) as Window;

	/**
	 * Shadow root if Jodit was created in it
	 */
	shadowRoot: Nullable<ShadowRoot> = null;

	/**
	 * z-index For editor
	 */
	zIndex: number = 0;

	/**
	 * Change the read-only state of the editor
	 * @type {boolean}
	 */
	readonly: boolean = false;

	/**
	 * Change the disabled state of the editor
	 * @type {boolean}
	 */
	disabled: boolean = false;

	activeButtonsInReadOnly: string[] = [
		'source',
		'fullsize',
		'print',
		'about',
		'dots',
		'selectall'
	];

	/**
	 * Size of icons in the toolbar (can be "small", "middle", "large")
	 *
	 * @example
	 * ```javascript
	 * var editor  = new  Jodit(".dark_editor", {
	 *      toolbarButtonSize: "small"
	 * });
	 * ```
	 */
	toolbarButtonSize: IUIButtonState['size'] = 'middle';

	/**
	 * Allow navigation in the toolbar of the editor by Tab key
	 */
	allowTabNavigation: boolean = false;

	/**
	 * Inline editing mode
	 *
	 * @type {boolean}
	 */
	inline: boolean = false;

	/**
	 * Theme (can be "dark")
	 * @example
	 * ```javascript
	 * var editor  = new  Jodit(".dark_editor", {
	 *      theme: "dark"
	 * });
	 * ```
	 */
	theme: string = 'default';

	/**
	 * if set true then the current mode is saved in a cookie , and is restored after a reload of the page
	 */
	saveModeInStorage: boolean = false;

	/**
	 * if set true and height !== auto then after reload editor will be have latest height
	 */
	saveHeightInStorage: boolean = false;

	/**
	 * Options specifies whether the editor is to have its spelling and grammar checked or not
	 * @see {@link http://www.w3schools.com/tags/att_global_spellcheck.asp}
	 */
	spellcheck: boolean = true;

	/**
	 * Class name that can be appended to the editor
	 *
	 * @see {@link Jodit.defaultOptions.iframeCSSLinks|iframeCSSLinks}
	 * @see {@link Jodit.defaultOptions.iframeStyle|iframeStyle}
	 *
	 * @example
	 * ```javascript
	 * new Jodit('#editor', {
	 *    editorCssClass: 'some_my_class'
	 * });
	 * ```
	 * ```html
	 * <style>
	 * .some_my_class p{
	 *    line-height: 16px;
	 * }
	 * </style>
	 * ```
	 */
	editorCssClass: false | string = false;

	/**
	 * The font of editor
	 *
	 * @example
	 * ```javascript
	 * new Jodit('#editor', {
	 * 		style: {
	 * 		 font: '12px Arial'
	 * 		}
	 * });
	 * ```
	 */
	style: false | IDictionary = false;

	/**
	 * After all changes in editors for textarea will call change trigger
	 *
	 * @example
	 *  ```javascript
	 * var editor = new Jodit('#editor');
	 * document.getElementById('editor').addEventListener('change', function () {
	 *      console.log(this.value);
	 * })
	 * ```
	 */
	triggerChangeEvent: boolean = true;

	/**
	 * Editor's width
	 *
	 * @example
	 * ```javascript
	 * new Jodit('.editor', {
	 *    width: '100%',
	 * })
	 * ```
	 * @example
	 * ```javascript
	 * new Jodit('.editor', {
	 *    width: 600, // equivalent for '600px'
	 * })
	 * ```
	 * @example
	 * ```javascript
	 * new Jodit('.editor', {
	 *    width: 'auto', // autosize
	 * })
	 * ```
	 */

	width: number | string = 'auto';
	minWidth: number | string = '200px';
	maxWidth: number | string = '100%';

	/**
	 * Editor's height
	 *
	 * @example
	 * ```javascript
	 * new Jodit('.editor', {
	 *    height: '100%',
	 * })
	 * ```
	 * @example
	 * ```javascript
	 * new Jodit('.editor', {
	 *    height: 600, // equivalent for '600px'
	 * })
	 * ```
	 * @example
	 * ```javascript
	 * new Jodit('.editor', {
	 *    height: 'auto', // default - autosize
	 * })
	 * ```
	 */
	height: string | number = 'auto';

	/**
	 * Editor's min-height
	 *
	 * @example
	 * ```javascript
	 * new Jodit('.editor', {
	 *    minHeight: '30%' //min-height: 30%
	 * })
	 * ```
	 * @example
	 * ```javascript
	 * new Jodit('.editor', {
	 *    minHeight: 200 //min-height: 200px
	 * })
	 * ```
	 */
	minHeight: number | string = 200;

	/**
	 * The writing direction of the language which is used to create editor content. Allowed values are: ''
	 * (an empty string) – Indicates that content direction will be the same as either the editor UI direction or
	 * the page element direction. 'ltr' – Indicates a Left-To-Right text direction (like in English).
	 * 'rtl' – Indicates a Right-To-Left text direction (like in Arabic).
	 * @example
	 * ```javascript
	 * new Jodit('.editor', {
	 *    direction: 'rtl'
	 * })
	 * ```
	 */
	direction: 'rtl' | 'ltr' | '' = '';

	/**
	 * Language by default. if `auto` language set by document.documentElement.lang ||
	 * (navigator.language && navigator.language.substr(0, 2)) ||
	 * (navigator.browserLanguage && navigator.browserLanguage.substr(0, 2)) || 'en'
	 *
	 * @example
	 * ```html
	 * <!-- include in you page lang file -->
	 * <script src="jodit/lang/de.js"></script>
	 * <script>
	 * var editor = new Jodit('.editor', {
	 *    language: 'de'
	 * });
	 * </script>
	 * ```
	 */
	language: string = 'auto';

	/**
	 * if true all Lang.i18n(key) return `{key}`
	 *
	 * @example
	 * ```html
	 * <script>
	 * var editor = new Jodit('.editor', {
	 *    debugLanguage: true
	 * });
	 *
	 * console.log(editor.i18n("Test")); // {Test}
	 * </script>
	 * ```
	 */
	debugLanguage: boolean = false;

	/**
	 * Collection of language pack data {en: {'Type something': 'Type something', ...}}
	 *
	 * @example
	 * ```javascript
	 * var editor = new Jodit('#editor', {
	 *     language: 'ru',
	 *     i18n: {
	 *         ru: {
	 *            'Type something': 'Начните что-либо вводить'
	 *         }
	 *     }
	 * });
	 * console.log(editor.i18n('Type something')) //Начните что-либо вводить
	 * ```
	 */
	i18n: false = false;

	/**
	 * The tabindex global attribute is an integer indicating if the element can take
	 * input focus (is focusable), if it should participate to sequential keyboard navigation,
	 * and if so, at what position. It can take several values
	 */
	tabIndex: number = -1;

	/**
	 * Boolean, whether the toolbar should be shown.
	 * Alternatively, a valid css-selector-string to use an element as toolbar container.
	 */
	toolbar: boolean | string | HTMLElement = true;

	/**
	 * Show tooltip after mouse enter on the button
	 */
	showTooltip: boolean = true;

	/**
	 * Delay before show tooltip
	 */
	showTooltipDelay: number = 1000;

	/**
	 * Instead of create custop tooltip - use native title tooltips
	 * @type {boolean}
	 */
	useNativeTooltip: boolean = false;

	// TODO
	// autosave: false, // false or url
	// autosaveCallback: false, // function
	// interval: 60, // seconds
	// TODO

	/**
	 * Element that will be created when you press Enter
	 */
	enter: 'p' | 'div' | 'br' = consts.PARAGRAPH;

	/**
	 * Use when you need insert new block element
	 * use enter option if not set
	 */
	enterBlock: 'p' | 'div' =
		this.enter !== 'br' ? this.enter : consts.PARAGRAPH;

	/**
	 * Jodit.MODE_WYSIWYG The HTML editor allows you to write like MSWord,
	 * Jodit.MODE_AREA syntax highlighting source editor
	 * @example
	 * ```javascript
	 * var editor = new Jodit('#editor', {
	 *     defaultMode: Jodit.MODE_SPLIT
	 * });
	 * console.log(editor.getRealMode())
	 * ```
	 */
	defaultMode: number = consts.MODE_WYSIWYG;

	/**
	 * Use split mode
	 *
	 * @type {boolean}
	 */
	useSplitMode: boolean = false;

	/**
	 * The colors in HEX representation to select a color for the background and for the text in colorpicker
	 * @example
	 * ```javascript
	 *  new Jodit('#editor', {
	 *     colors: ['#ff0000', '#00ff00', '#0000ff']
	 * })
	 * ```
	 */
	colors: IDictionary<string[]> | string[] = {
		greyscale: [
			'#000000',
			'#434343',
			'#666666',
			'#999999',
			'#B7B7B7',
			'#CCCCCC',
			'#D9D9D9',
			'#EFEFEF',
			'#F3F3F3',
			'#FFFFFF'
		],
		palette: [
			'#980000',
			'#FF0000',
			'#FF9900',
			'#FFFF00',
			'#00F0F0',
			'#00FFFF',
			'#4A86E8',
			'#0000FF',
			'#9900FF',
			'#FF00FF'
		],
		full: [
			'#E6B8AF',
			'#F4CCCC',
			'#FCE5CD',
			'#FFF2CC',
			'#D9EAD3',
			'#D0E0E3',
			'#C9DAF8',
			'#CFE2F3',
			'#D9D2E9',
			'#EAD1DC',
			'#DD7E6B',
			'#EA9999',
			'#F9CB9C',
			'#FFE599',
			'#B6D7A8',
			'#A2C4C9',
			'#A4C2F4',
			'#9FC5E8',
			'#B4A7D6',
			'#D5A6BD',
			'#CC4125',
			'#E06666',
			'#F6B26B',
			'#FFD966',
			'#93C47D',
			'#76A5AF',
			'#6D9EEB',
			'#6FA8DC',
			'#8E7CC3',
			'#C27BA0',
			'#A61C00',
			'#CC0000',
			'#E69138',
			'#F1C232',
			'#6AA84F',
			'#45818E',
			'#3C78D8',
			'#3D85C6',
			'#674EA7',
			'#A64D79',
			'#85200C',
			'#990000',
			'#B45F06',
			'#BF9000',
			'#38761D',
			'#134F5C',
			'#1155CC',
			'#0B5394',
			'#351C75',
			'#733554',
			'#5B0F00',
			'#660000',
			'#783F04',
			'#7F6000',
			'#274E13',
			'#0C343D',
			'#1C4587',
			'#073763',
			'#20124D',
			'#4C1130'
		]
	};

	/**
	 * The default tab color picker
	 * @example
	 * ```javascript
	 *  new Jodit('#editor2', {
	 *     colorPickerDefaultTab: 'color'
	 * })
	 * ```
	 */
	colorPickerDefaultTab: 'background' | 'color' = 'background';

	/**
	 * Image size defaults to a larger image
	 */
	imageDefaultWidth: number = 300;

	/**
	 * Do not display these buttons that are on the list
	 * @example
	 * ```javascript
	 * new Jodit('#editor2', {
	 *     removeButtons: ['hr', 'source']
	 * });
	 * ```
	 */
	removeButtons: string[] = [];

	/**
	 * Do not init these plugins
	 * @example
	 * ```typescript
	 * var editor = new Jodit('.editor', {
	 *    disablePlugins: 'table,iframe'
	 * });
	 * //or
	 * var editor = new Jodit('.editor', {
	 *    disablePlugins: ['table', 'iframe']
	 * });
	 * ```
	 */
	disablePlugins: string[] | string = [];

	/**
	 * Init and download extra plugins
	 * @example
	 * ```typescript
	 * var editor = new Jodit('.editor', {
	 *    extraPlugins: ['emoji']
	 * });
	 * ```
	 * It will try load %SCRIPT_PATH%/plugins/emoji/emoji.js and after load will try init it
	 */
	extraPlugins: Array<string | IExtraPlugin> = [];

	/**
	 * Base path for download extra plugins
	 */
	basePath?: string;

	/**
	 * This buttons list will be added to option.buttons
	 */
	extraButtons: Array<string | IControlType> = [];

	/**
	 * Default attributes for created inside editor elements
	 */
	createAttributes: IDictionary<Attributes | NodeFunction> = {};

	/**
	 * The width of the editor, accepted as the biggest. Used to the responsive version of the editor
	 */
	sizeLG: number = 900;

	/**
	 * The width of the editor, accepted as the medium. Used to the responsive version of the editor
	 */
	sizeMD: number = 700;

	/**
	 * The width of the editor, accepted as the small. Used to the responsive version of the editor
	 */
	sizeSM: number = 400;

	/**
	 * The list of buttons that appear in the editor's toolbar on large places (≥ options.sizeLG).
	 * Note - this is not the width of the device, the width of the editor
	 * @example
	 * ```javascript
	 * new Jodit('#editor', {
	 *     buttons: ['bold', 'italic', 'source'],
	 *     buttonsMD: ['bold', 'italic'],
	 *     buttonsXS: ['bold', 'fullsize'],
	 * });
	 * ```
	 * @example
	 * ```javascript
	 * new Jodit('#editor2', {
	 *     buttons: [{
	 *         name: 'enty',
	 *         icon: 'source',
	 *         exec: function () {
	 *             var dialog = new Jodit.modules.Dialog(this),
	 *                 div = document.createElement('div'),
	 *                 text = document.createElement('textarea');
	 *             div.textContent = this.val();
	 *             dialog.setHeader('Source code');
	 *             dialog.setContent(text);
	 *             dialog.setSize(400, 300);
	 *             dom(text)
	 *                 .css({
	 *                     width: '100%',
	 *                     height: '100%'
	 *                 })
	 *                 .val(div.innerHTML.replace(/<br>/g, '\n'));
	 *             dialog.{@link module:Dialog~open|open}();
	 *         }
	 *     }]
	 * });
	 * ```
	 * @example
	 * ```javascript
	 * new Jodit('#editor2', {
	 *     buttons: Jodit.defaultOptions.buttons.concat([{
	 *        name: 'listsss',
	 *        iconURL: 'stuf/dummy.png',
	 *        list: {
	 *            h1: 'insert Header 1',
	 *            h2: 'insert Header 2',
	 *            clear: 'Empty editor',
	 *        },
	 *        exec: ({originalEvent, control, btn}) => {
	 *             var key = control.args[0],
	 *                value = control.args[1];
	 *             if (key === 'clear') {
	 *                 this.val('');
	 *                 return;
	 *             }
	 *             this.s.insertNode(this.c.element(key, ''));
	 *             this.e.fire('errorMessage', 'Was inserted ' + value);
	 *        },
	 *        template: function (key, value) {
	 *            return '<div>' + value + '</div>';
	 *        }
	 *  });
	 *  ```
	 */
	buttons: ButtonsOption = [
		'source',
		'|',
		'bold',
		'strikethrough',
		'underline',
		'italic',
		'eraser',
		'|',
		'superscript',
		'subscript',
		'|',
		'ul',
		'ol',
		'|',
		'outdent',
		'indent',
		'|',
		'font',
		'fontsize',
		'brush',
		'paragraph',
		'|',
		'image',
		'file',
		'video',
		'table',
		'link',
		'|',
		'align',
		'undo',
		'redo',
		'\n',
		'selectall',
		'cut',
		'copy',
		'paste',
		'copyformat',
		'|',
		'hr',
		'symbol',
		'fullsize',
		'print',
		'about'
	];

	/**
	 * The list of buttons that appear in the editor's toolbar on medium places (≥ options.sizeMD).
	 */
	buttonsMD: ButtonsOption = [
		'source',
		'|',
		'bold',
		'italic',
		'|',
		'ul',
		'ol',
		'eraser',
		'|',
		'font',
		'fontsize',
		'brush',
		'paragraph',
		'|',
		'image',
		'table',
		'link',
		'|',
		'align',
		'\n',
		'undo',
		'redo',
		'|',
		'hr',
		'copyformat',
		'fullsize',
		'dots'
	];

	/**
	 * The list of buttons that appear in the editor's toolbar on small places (≥ options.sizeSM).
	 */
	buttonsSM: ButtonsOption = [
		'source',
		'|',
		'bold',
		'italic',
		'|',
		'ul',
		'ol',
		'eraser',
		'|',
		'fontsize',
		'brush',
		'paragraph',
		'|',
		'image',
		'table',
		'\n',
		'link',
		'|',
		'align',
		'|',
		'undo',
		'redo',
		'|',
		'copyformat',
		'fullsize',
		'dots'
	];

	/**
	 * The list of buttons that appear in the editor's toolbar on extra small places (< options.sizeSM).
	 */
	buttonsXS: ButtonsOption = [
		'bold',
		'image',
		'|',
		'brush',
		'paragraph',
		'eraser',
		'\n',
		'align',
		'|',
		'undo',
		'redo',
		'|',
		'dots'
	];

	/**
	 * Behavior for buttons
	 */
	controls!: Controls;

	events: IDictionary<(...args: any[]) => any> = {};

	/**
	 * Buttons in toolbat without SVG - only texts
	 * @type {boolean}
	 */
	textIcons: boolean = false;

	/**
	 * shows a INPUT[type=color] to open the browser color picker, on the right bottom of widget color picker
	 * @type {boolean}
	 */
	showBrowserColorPicker: boolean = true;

	private static __defaultOptions: Config;
	static get defaultOptions(): Config {
		if (!Config.__defaultOptions) {
			Config.__defaultOptions = new Config();
		}

		return Config.__defaultOptions;
	}
}

export const OptionsDefault: any = function(
	this: any,
	options: any,
	def: any = Config.defaultOptions
) {
	const self: any = this;

	self.plainOptions = options;

	if (options !== undefined && typeof options === 'object') {
		const extendKey = (opt: object, key: string) => {
			if (key === 'preset') {
				if (def.presets[(opt as any).preset] !== undefined) {
					const preset = def.presets[(opt as any).preset];

					Object.keys(preset).forEach(extendKey.bind(this, preset));
				}
			}

			const defValue = (def as any)[key],
				isObject = typeof defValue === 'object' && defValue !== null;

			if (
				isObject &&
				!['ownerWindow', 'ownerDocument'].includes(key) &&
				!isArray(defValue)
			) {
				self[key] = extend(true, {}, defValue, (opt as any)[key]);
			} else {
				self[key] = (opt as any)[key];
			}
		};

		Object.keys(options).forEach(extendKey.bind(this, options));
	}
};

Config.prototype.controls = {
	print: {
		exec: (editor: IJodit) => {
			const mywindow: Window | null = window.open('', 'PRINT');

			if (mywindow) {
				if (editor.o.iframe) {
					/**
					 * @event generateDocumentStructure.iframe
					 * @property {Document} doc Iframe document
					 * @property {Jodit} editor
					 */
					editor.e.fire(
						'generateDocumentStructure.iframe',
						mywindow.document,
						editor
					);

					mywindow.document.body.innerHTML = editor.value;
				} else {
					mywindow.document.write(
						'<!doctype html><html lang="' +
							defaultLanguage(editor.o.language) +
							'"><head><title></title></head>' +
							'<body>' +
							editor.value +
							'</body></html>'
					);
					mywindow.document.close();
				}
				mywindow.focus();
				(mywindow as any).print();
				mywindow.close();
			}
		},
		mode: consts.MODE_SOURCE + consts.MODE_WYSIWYG,
		tooltip: 'Print'
	} as IControlType,

	hr: {
		command: 'insertHorizontalRule',
		tags: ['hr'],
		tooltip: 'Insert Horizontal Line'
	} as IControlType,

	image: {
		popup: (editor: IJodit, current, self, close) => {
			let sourceImage: HTMLImageElement | null = null;

			if (
				current &&
				!Dom.isText(current) &&
				Dom.isHTMLElement(current, editor.ew) &&
				(Dom.isTag(current, 'img') || $$('img', current).length)
			) {
				sourceImage = Dom.isTag(current, 'img')
					? current
					: $$('img', current)[0];
			}

			const selInfo = editor.s.save();

			return FileSelectorWidget(
				editor,
				{
					filebrowser: (data: IFileBrowserCallBackData) => {
						editor.s.restore(selInfo);

						data.files &&
							data.files.forEach(file =>
								editor.s.insertImage(
									data.baseurl + file,
									null,
									editor.o.imageDefaultWidth
								)
							);

						close();
					},
					upload: true,
					url: async (url: string, text: string) => {
						editor.s.restore(selInfo);

						const image: HTMLImageElement =
							sourceImage || editor.createInside.element('img');

						image.setAttribute('src', url);
						image.setAttribute('alt', text);

						if (!sourceImage) {
							await editor.s.insertImage(
								image,
								null,
								editor.o.imageDefaultWidth
							);
						}

						close();
					}
				},
				sourceImage,
				close
			);
		},
		tags: ['img'],
		tooltip: 'Insert Image'
	} as IControlType,

	file: {
		popup: (
			editor: IJodit,
			current: Node | false,
			self: IControlType,
			close
		) => {
			const insert = (url: string, title: string = '') => {
				editor.s.insertNode(
					editor.createInside.fromHTML(
						`<a href="${url}" title="${title}">${title || url}</a>`
					)
				);
			};

			let sourceAnchor: HTMLAnchorElement | null = null;

			if (
				current &&
				(Dom.isTag(current, 'a') ||
					Dom.closest(current, 'a', editor.editor))
			) {
				sourceAnchor = Dom.isTag(current, 'a')
					? current
					: (Dom.closest(
							current,
							'a',
							editor.editor
					  ) as HTMLAnchorElement);
			}

			return FileSelectorWidget(
				editor,
				{
					filebrowser: (data: IFileBrowserCallBackData) => {
						data.files &&
							data.files.forEach(file =>
								insert(data.baseurl + file)
							);

						close();
					},
					upload: true,
					url: (url: string, text: string) => {
						if (sourceAnchor) {
							sourceAnchor.setAttribute('href', url);
							sourceAnchor.setAttribute('title', text);
						} else {
							insert(url, text);
						}
						close();
					}
				},
				sourceAnchor,
				close,
				false
			);
		},
		tags: ['a'],
		tooltip: 'Insert file'
	} as IControlType,

	video: {
		popup: (editor: IJodit, current, control, close) => {
			const bylink = editor.c.fromHTML(
					`<form class="jodit-form">
					<div class="jodit jodit-form__group">
						<input class="jodit-input" required name="code" placeholder="http://" type="url"/>
						<button class="jodit-button" type="submit">${editor.i18n('Insert')}</button>
					</div>
				</form>`
				) as HTMLFormElement,
				bycode = editor.c.fromHTML(
					`<form class="jodit-form">
									<div class="jodit-form__group">
										<textarea class="jodit-textarea" required name="code" placeholder="${editor.i18n(
											'Embed code'
										)}"></textarea>
										<button class="jodit-button" type="submit">${editor.i18n('Insert')}</button>
									</div>
								</form>`
				) as HTMLFormElement,
				tabs: TabOption[] = [],
				selinfo = editor.s.save(),
				insertCode = (code: string) => {
					editor.s.restore(selinfo);
					editor.s.insertHTML(code);
					close();
				};

			tabs.push(
				{
					icon: 'link',
					name: 'Link',
					content: bylink
				},
				{
					icon: 'source',
					name: 'Code',
					content: bycode
				}
			);

			editor.e.on(bycode, 'submit', event => {
				event.preventDefault();

				if (!trim(val(bycode, 'textarea[name=code]'))) {
					(bycode.querySelector(
						'textarea[name=code]'
					) as HTMLTextAreaElement).focus();
					(bycode.querySelector(
						'textarea[name=code]'
					) as HTMLTextAreaElement).classList.add('jodit_error');
					return false;
				}

				insertCode(val(bycode, 'textarea[name=code]'));
				return false;
			});

			editor.e.on(bylink, 'submit', event => {
				event.preventDefault();

				if (!isURL(val(bylink, 'input[name=code]'))) {
					(bylink.querySelector(
						'input[name=code]'
					) as HTMLInputElement).focus();
					(bylink.querySelector(
						'input[name=code]'
					) as HTMLInputElement).classList.add('jodit_error');
					return false;
				}
				insertCode(
					convertMediaUrlToVideoEmbed(val(bylink, 'input[name=code]'))
				);
				return false;
			});

			return TabsWidget(editor, tabs);
		},

		tags: ['iframe'],
		tooltip: 'Insert youtube/vimeo video'
	} as IControlType
};

export function configFactory(options?: object): Config {
	return new OptionsDefault(options) as Config;
}

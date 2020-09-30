/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

import { Config, configFactory } from './config';
import * as consts from './core/constants';
import {
	Create,
	Dom,
	FileBrowser,
	Observer,
	Select,
	StatusBar,
	STATUSES
} from './modules/';

import {
	asArray,
	css,
	isPromise,
	normalizeKeyAliases,
	error,
	isString,
	attr,
	isFunction,
	resolveElement,
	isVoid,
	JoditArray,
	JoditObject
} from './core/helpers/';

import { Storage } from './core/storage/';

import {
	CustomCommand,
	ExecCommandCallback,
	IDictionary,
	IPluginSystem,
	IStatusBar,
	IViewOptions,
	IWorkPlace,
	markerInfo,
	Modes,
	IFileBrowser,
	IJodit,
	IUploader,
	ICreate,
	IFileBrowserCallBackData
} from './types';

import { ViewWithToolbar } from './core/view/view-with-toolbar';

import { instances, pluginSystem, modules, lang } from './core/global';
import { cache } from './core/decorators';

/**
 * Class Jodit. Main class
 */
export class Jodit extends ViewWithToolbar implements IJodit {
	/**
	 * Define if object is Jodit
	 */
	isJodit: true = true;

	/**
	 * Plain text editor's value
	 */
	get text(): string {
		if (this.editor) {
			return this.editor.innerText || '';
		}

		const div = this.createInside.div();
		div.innerHTML = this.getElementValue();

		return div.innerText || '';
	}

	/**
	 * HTML value
	 */
	get value(): string {
		return this.getEditorValue();
	}

	set value(html: string) {
		this.setEditorValue(html);
	}

	/**
	 * Return default timeout period in milliseconds for some debounce or throttle functions.
	 * By default return {observer.timeout} options
	 *
	 * @return {number}
	 */
	get defaultTimeout(): number {
		return this.options && this.o.observer
			? this.o.observer.timeout
			: Jodit.defaultOptions.observer.timeout;
	}

	/**
	 * Method wrap usual Array in Object helper for prevent deep array merging in options
	 *
	 * @param array
	 * @constructor
	 */
	static Array(array: any[]): JoditArray {
		return new JoditArray(array);
	}

	/**
	 * Method wrap usual Has Object in Object helper for prevent deep object merging in options*
	 *
	 * @param object
	 * @constructor
	 */
	static Object(object: any): JoditObject {
		return new JoditObject(object);
	}

	/**
	 * Fabric for creating Jodit instance
	 *
	 * @param element
	 * @param options
	 */
	static make(element: HTMLElement | string, options?: object): Jodit {
		return new Jodit(element, options);
	}

	static defaultOptions: Config;

	static plugins: IPluginSystem = pluginSystem;

	static modules: IDictionary<Function> = modules;
	static ns: IDictionary<Function> = modules;

	static decorators: IDictionary<Function> = {};
	static instances: IDictionary<IJodit> = instances;
	static lang: any = lang;

	private __defaultStyleDisplayKey = 'data-jodit-default-style-display';
	private __defaultClassesKey = 'data-jodit-default-classes';

	private commands: IDictionary<Array<CustomCommand<IJodit>>> = {};

	private __selectionLocked: markerInfo[] | null = null;

	private __wasReadOnly: boolean = false;

	/**
	 * Container for set/get value
	 * @type {Storage}
	 */
	readonly storage = Storage.makeStorage(true, this.id);

	readonly createInside: ICreate = new Create(
		() => this.ed,
		this.o.createAttributes
	);

	/**
	 * Editor has focus in this time
	 */
	editorIsActive: boolean = false;

	private setPlaceField(field: keyof IWorkPlace, value: any): void {
		if (!this.currentPlace) {
			this.currentPlace = {} as any;
			this.places = [this.currentPlace];
		}

		this.currentPlace[field] = value;
	}

	/**
	 * element It contains source element
	 */
	get element(): HTMLElement {
		return this.currentPlace.element;
	}

	/**
	 * editor It contains the root element editor
	 */
	get editor(): HTMLDivElement | HTMLBodyElement {
		return this.currentPlace.editor;
	}

	set editor(editor: HTMLDivElement | HTMLBodyElement) {
		this.setPlaceField('editor', editor);
	}

	/**
	 * Container for all staff
	 */
	get container(): HTMLDivElement {
		return this.currentPlace.container;
	}

	set container(container: HTMLDivElement) {
		this.setPlaceField('container', container);
	}

	/**
	 * workplace It contains source and wysiwyg editors
	 */
	get workplace(): HTMLDivElement {
		return this.currentPlace.workplace;
	}

	/**
	 * Statusbar module
	 */
	get statusbar(): IStatusBar {
		return this.currentPlace.statusbar;
	}

	/**
	 * iframe Iframe for iframe mode
	 */
	get iframe(): HTMLIFrameElement | void {
		return this.currentPlace.iframe;
	}

	set iframe(iframe: HTMLIFrameElement | void) {
		this.setPlaceField('iframe', iframe);
	}

	get observer(): Observer {
		return this.currentPlace.observer;
	}

	/**
	 * In iframe mode editor's window can be different by owner
	 */
	get editorWindow(): Window {
		return this.currentPlace.editorWindow;
	}

	set editorWindow(win: Window) {
		this.setPlaceField('editorWindow', win);
	}

	/**
	 * Alias for this.ew
	 */
	get ew(): this['editorWindow'] {
		return this.editorWindow;
	}

	/**
	 * In iframe mode editor's window can be different by owner
	 */
	get editorDocument(): Document {
		return this.currentPlace.editorWindow.document;
	}

	/**
	 * Alias for this.ew
	 */
	get ed(): this['editorDocument'] {
		return this.editorDocument;
	}

	/**
	 * options All Jodit settings default + second arguments of constructor
	 */
	get options(): Config {
		return this.currentPlace.options as Config;
	}

	set options(opt: Config) {
		this.setPlaceField('options', opt);
	}

	/**
	 * @property {Select} selection
	 */
	selection: Select;

	/**
	 * Alias for this.selection
	 */
	get s(): this['selection'] {
		return this.selection;
	}

	/**
	 * @property {Uploader} uploader
	 */
	@cache
	get uploader(): IUploader {
		return this.getInstance('Uploader', this.o.uploader);
	}

	/**
	 * @property {FileBrowser} filebrowser
	 */
	@cache
	get filebrowser(): IFileBrowser {
		const jodit = this;

		const options = {
			defaultTimeout: jodit.defaultTimeout,
			uploader: jodit.o.uploader,
			language: jodit.o.language,
			theme: jodit.o.theme,
			defaultCallback(data: IFileBrowserCallBackData): void {
				if (data.files && data.files.length) {
					data.files.forEach((file, i) => {
						const url = data.baseurl + file;
						const isImage = data.isImages
							? data.isImages[i]
							: false;

						if (isImage) {
							jodit.s.insertImage(
								url,
								null,
								jodit.o.imageDefaultWidth
							);
						} else {
							jodit.s.insertNode(
								jodit.createInside.fromHTML(
									`<a href="${url}" title="${url}">${url}</a>`
								)
							);
						}
					});
				}
			},
			...this.o.filebrowser
		};

		return jodit.getInstance<FileBrowser>('FileBrowser', options);
	}

	private __mode: Modes = consts.MODE_WYSIWYG;

	/**
	 * Editor's mode
	 */
	get mode(): Modes {
		return this.__mode;
	}

	set mode(mode: Modes) {
		this.setMode(mode);
	}

	/**
	 * Return real HTML value from WYSIWYG editor.
	 *
	 * @return {string}
	 */
	getNativeEditorValue(): string {
		let value: string;

		value = this.e.fire('beforeGetNativeEditorValue');

		if (isString(value)) {
			return value;
		}

		if (this.editor) {
			return this.editor.innerHTML;
		}

		return this.getElementValue();
	}

	/**
	 * Set value to native editor
	 * @param value
	 */
	setNativeEditorValue(value: string) {
		if (this.e.fire('beforeSetNativeEditorValue', value)) {
			return;
		}

		if (this.editor) {
			this.editor.innerHTML = value;
		}
	}

	/**
	 * Return editor value
	 */
	getEditorValue(removeSelectionMarkers: boolean = true): string {
		/**
		 * Triggered before {@link Jodit~getEditorValue|getEditorValue} executed.
		 * If returned not undefined getEditorValue will return this value
		 *
		 * @event beforeGetValueFromEditor
		 * @example
		 * ```javascript
		 * var editor = new Jodit("#redactor");
		 * editor.e.on('beforeGetValueFromEditor', function () {
		 *     return editor.editor.innerHTML.replace(/a/g, 'b');
		 * });
		 * ```
		 */
		let value: string;

		value = this.e.fire('beforeGetValueFromEditor');

		if (value !== undefined) {
			return value;
		}

		value = this.getNativeEditorValue().replace(
			consts.INVISIBLE_SPACE_REG_EXP(),
			''
		);

		if (removeSelectionMarkers) {
			value = value.replace(
				/<span[^>]+id="jodit-selection_marker_[^>]+><\/span>/g,
				''
			);
		}

		if (value === '<br>') {
			value = '';
		}

		/**
		 * Triggered after  {@link Jodit~getEditorValue|getEditorValue} got value from wysiwyg.
		 * It can change new_value.value
		 *
		 * @event afterGetValueFromEditor
		 * @param string new_value
		 * @example
		 * ```javascript
		 * var editor = new Jodit("#redactor");
		 * editor.e.on('afterGetValueFromEditor', function (new_value) {
		 *     new_value.value = new_value.value.replace('a', 'b');
		 * });
		 * ```
		 */
		const new_value: { value: string } = { value };

		this.e.fire('afterGetValueFromEditor', new_value);

		return new_value.value;
	}

	private __callChangeCount = 0;

	/**
	 * Set editor html value and if set sync fill source element value
	 * When method was called without arguments - it is simple way to synchronize editor to element
	 * @event beforeSetValueToEditor
	 * @param [value]
	 * @param [notChangeStack]
	 */
	setEditorValue(value?: string) {
		/**
		 * Triggered before  {@link Jodit~getEditorValue|setEditorValue} set value to wysiwyg.
		 *
		 * @event beforeSetValueToEditor
		 * @param string old_value
		 * @returns string | undefined | false
		 * @example
		 * ```javascript
		 * var editor = new Jodit("#redactor");
		 * editor.e.on('beforeSetValueToEditor', function (old_value) {
		 *     return old_value.value.replace('a', 'b');
		 * });
		 * editor.e.on('beforeSetValueToEditor', function () {
		 *     return false; // disable setEditorValue method
		 * });
		 * ```
		 */
		const newValue: string | undefined | false = this.e.fire(
			'beforeSetValueToEditor',
			value
		);

		if (newValue === false) {
			return;
		}

		if (isString(newValue)) {
			value = newValue;
		}

		if (!this.editor) {
			if (value !== undefined) {
				this.setElementValue(value);
			}

			return; // try change value before init or after destruct
		}

		if (!isString(value) && !isVoid(value)) {
			throw error('value must be string');
		}

		if (value !== undefined && this.getNativeEditorValue() !== value) {
			this.setNativeEditorValue(value);
		}

		this.e.fire('postProcessSetEditorValue');

		const old_value = this.getElementValue(),
			new_value = this.getEditorValue();

		if (
			old_value !== new_value &&
			this.__callChangeCount < consts.SAFE_COUNT_CHANGE_CALL
		) {
			this.setElementValue(new_value);
			this.__callChangeCount += 1;

			try {
				this.observer.upTick();
				this.e.fire('change', new_value, old_value);
				this.e.fire(this.observer, 'change', new_value, old_value);
			} finally {
				this.__callChangeCount = 0;
			}
		}
	}

	/**
	 * Return source element value
	 */
	getElementValue() {
		return (this.element as HTMLInputElement).value !== undefined
			? (this.element as HTMLInputElement).value
			: this.element.innerHTML;
	}

	/**
	 * Set source element value and if set sync fill editor value
	 * When method was called without arguments - it is simple way to synchronize element to editor
	 *
	 * @param {string} [value]
	 */
	setElementValue(value?: string) {
		if (!isString(value) && value !== undefined) {
			throw error('value must be string');
		}

		if (value !== undefined) {
			if (this.element !== this.container) {
				if ((this.element as HTMLInputElement).value !== undefined) {
					(this.element as HTMLInputElement).value = value;
				} else {
					this.element.innerHTML = value;
				}
			}
		} else {
			value = this.getElementValue();
		}

		if (value !== this.getEditorValue()) {
			this.setEditorValue(value);
		}
	}

	/**
	 * Register custom handler for command
	 *
	 * @example
	 * ```javascript
	 * var jodit = new Jodit('#editor);
	 *
	 * jodit.setEditorValue('test test test');
	 *
	 * jodit.registerCommand('replaceString', function (command, needle, replace) {
	 *      var value = this.getEditorValue();
	 *      this.setEditorValue(value.replace(needle, replace));
	 *      return false; // stop execute native command
	 * });
	 *
	 * jodit.execCommand('replaceString', 'test', 'stop');
	 *
	 * console.log(jodit.value); // stop test test
	 *
	 * // and you can add hotkeys for command
	 * jodit.registerCommand('replaceString', {
	 *    hotkeys: 'ctrl+r',
	 *    exec: function (command, needle, replace) {
	 *     var value = this.getEditorValue();
	 *     this.setEditorValue(value.replace(needle, replace));
	 *    }
	 * });
	 *
	 * ```
	 *
	 * @param {string} commandNameOriginal
	 * @param {ICommandType | Function} command
	 */
	registerCommand(
		commandNameOriginal: string,
		command: CustomCommand<IJodit>
	): IJodit {
		const commandName: string = commandNameOriginal.toLowerCase();

		if (this.commands[commandName] === undefined) {
			this.commands[commandName] = [];
		}

		this.commands[commandName].push(command);

		if (typeof command !== 'function') {
			const hotkeys: string | string[] | void =
				this.o.commandToHotkeys[commandName] ||
				this.o.commandToHotkeys[commandNameOriginal] ||
				command.hotkeys;

			if (hotkeys) {
				this.registerHotkeyToCommand(hotkeys, commandName);
			}
		}

		return this;
	}

	/**
	 * Register hotkey for command
	 *
	 * @param hotkeys
	 * @param commandName
	 */
	registerHotkeyToCommand(hotkeys: string | string[], commandName: string) {
		const shortcuts: string = asArray(hotkeys)
			.map(normalizeKeyAliases)
			.map(hotkey => hotkey + '.hotkey')
			.join(' ');

		this.e.off(shortcuts).on(shortcuts, () => {
			return this.execCommand(commandName); // because need `beforeCommand`
		});
	}

	/**
	 * Execute command editor
	 *
	 * @param  {string} command command. It supports all the
	 * {@link https://developer.mozilla.org/ru/docs/Web/API/Document/execCommand#commands} and a number of its own
	 * for example applyStyleProperty. Comand fontSize receives the second parameter px,
	 * formatBlock and can take several options
	 * @param  {boolean|string|int} showUI
	 * @param  {boolean|string|int} value
	 * @fires beforeCommand
	 * @fires afterCommand
	 * @example
	 * ```javascript
	 * this.execCommand('fontSize', 12); // sets the size of 12 px
	 * this.execCommand('underline');
	 * this.execCommand('formatBlock', 'p'); // will be inserted paragraph
	 * ```
	 */
	execCommand(
		command: string,
		showUI: any = false,
		value: null | any = null
	) {
		if (this.o.readonly && command !== 'selectall') {
			return;
		}

		let result: any;
		command = command.toLowerCase();

		/**
		 * Called before any command
		 * @event beforeCommand
		 * @param {string} command Command name in lowercase
		 * @param {string} second The second parameter for the command
		 * @param {string} third The third option is for the team
		 * @example
		 * ```javascript
		 * parent.e.on('beforeCommand', function (command) {
		 *  if (command === 'justifyCenter') {
		 *      var p = parent.c.element('p')
		 *      parent.s.insertNode(p)
		 *      parent.s.setCursorIn(p);
		 *      p.style.textAlign = 'justyfy';
		 *      return false; // break execute native command
		 *  }
		 * })
		 * ```
		 */
		result = this.e.fire('beforeCommand', command, showUI, value);

		if (result !== false) {
			result = this.execCustomCommands(command, showUI, value);
		}

		if (result !== false) {
			this.s.focus();

			if (command === 'selectall') {
				this.s.select(this.editor, true);
			} else {
				try {
					result = this.ed.execCommand(command, showUI, value);
				} catch (e) {
					if (!isProd) {
						throw e;
					}
				}
			}
		}

		/**
		 * It called after any command
		 * @event afterCommand
		 * @param {string} command name command
		 * @param {*} second The second parameter for the command
		 * @param {*} third The third option is for the team
		 */
		this.e.fire('afterCommand', command, showUI, value);

		this.setEditorValue(); // synchrony

		return result;
	}

	private execCustomCommands(
		commandName: string,
		second: any = false,
		third: null | any = null
	): false | void {
		commandName = commandName.toLowerCase();

		if (this.commands[commandName] !== undefined) {
			let result: any;

			const exec = (command: CustomCommand<Jodit>) => {
				let callback: ExecCommandCallback<Jodit>;

				if (isFunction(command)) {
					callback = command;
				} else {
					callback = command.exec;
				}

				const resultCurrent: any = (callback as any).call(
					this,
					commandName,
					second,
					third
				);

				if (resultCurrent !== undefined) {
					result = resultCurrent;
				}
			};

			for (let i = 0; i < this.commands[commandName].length; i += 1) {
				exec(this.commands[commandName][i]);
			}

			return result;
		}
	}

	/**
	 * Disable selecting
	 */
	lock(name: string = 'any') {
		if (super.lock(name)) {
			this.__selectionLocked = this.s.save();
			this.s.clear();
			this.editor.classList.add('jodit_disabled');
			this.e.fire('lock', true);
			return true;
		}

		return false;
	}

	/**
	 * Enable selecting
	 */
	unlock() {
		if (super.unlock()) {
			this.editor.classList.remove('jodit_disabled');

			if (this.__selectionLocked) {
				this.s.restore(this.__selectionLocked);
			}

			this.e.fire('lock', false);
			return true;
		}

		return false;
	}

	/**
	 * Return current editor mode: Jodit.MODE_WYSIWYG, Jodit.MODE_SOURCE or Jodit.MODE_SPLIT
	 * @return {number}
	 */
	getMode(): Modes {
		return this.mode;
	}

	isEditorMode(): boolean {
		return this.getRealMode() === consts.MODE_WYSIWYG;
	}

	/**
	 * Return current real work mode. When editor in MODE_SOURCE or MODE_WYSIWYG it will
	 * return them, but then editor in MODE_SPLIT it will return MODE_SOURCE if
	 * Textarea(CodeMirror) focused or MODE_WYSIWYG otherwise
	 *
	 * @example
	 * ```javascript
	 * var editor = new Jodit('#editor');
	 * console.log(editor.getRealMode());
	 * ```
	 */
	getRealMode(): Modes {
		if (this.getMode() !== consts.MODE_SPLIT) {
			return this.getMode();
		}

		const active: Element | null = this.od.activeElement;

		if (
			active &&
			(Dom.isOrContains(this.editor, active) ||
				Dom.isOrContains(this.toolbar.container, active))
		) {
			return consts.MODE_WYSIWYG;
		}

		return consts.MODE_SOURCE;
	}

	/**
	 * Set current mode
	 *
	 * @fired beforeSetMode
	 * @fired afterSetMode
	 */
	setMode(mode: number | string) {
		const oldmode: Modes = this.getMode();

		const data = {
				mode: parseInt(mode.toString(), 10) as Modes
			},
			modeClasses = [
				'jodit-wysiwyg_mode',
				'jodit-source__mode',
				'jodit_split_mode'
			];

		/**
		 * Triggered before {@link Jodit~setMode|setMode} executed. If returned false method stopped
		 * @event beforeSetMode
		 * @param {Object} data PlainObject {mode: {string}} In handler you can change data.mode
		 * @example
		 * ```javascript
		 * var editor = new Jodit("#redactor");
		 * editor.e.on('beforeSetMode', function (data) {
		 *     data.mode = Jodit.MODE_SOURCE; // not respond to the mode change. Always make the source code mode
		 * });
		 * ```
		 */
		if (this.e.fire('beforeSetMode', data) === false) {
			return;
		}

		this.__mode = [
			consts.MODE_SOURCE,
			consts.MODE_WYSIWYG,
			consts.MODE_SPLIT
		].includes(data.mode)
			? data.mode
			: consts.MODE_WYSIWYG;

		if (this.o.saveModeInStorage) {
			this.storage.set('jodit_default_mode', this.mode);
		}

		modeClasses.forEach(className => {
			this.container.classList.remove(className);
		});

		this.container.classList.add(modeClasses[this.mode - 1]);

		/**
		 * Triggered after {@link Jodit~setMode|setMode} executed
		 * @event afterSetMode
		 * @example
		 * ```javascript
		 * var editor = new Jodit("#redactor");
		 * editor.e.on('afterSetMode', function () {
		 *     editor.setEditorValue(''); // clear editor's value after change mode
		 * });
		 * ```
		 */
		if (oldmode !== this.getMode()) {
			this.e.fire('afterSetMode');
		}
	}

	/**
	 * Toggle editor mode WYSIWYG to TEXTAREA(CodeMirror) to SPLIT(WYSIWYG and TEXTAREA) to again WYSIWYG
	 *
	 * @example
	 * ```javascript
	 * var editor = new Jodit('#editor');
	 * editor.toggleMode();
	 * ```
	 */
	toggleMode() {
		let mode: number = this.getMode();
		if (
			[
				consts.MODE_SOURCE,
				consts.MODE_WYSIWYG,
				this.o.useSplitMode ? consts.MODE_SPLIT : 9
			].includes(mode + 1)
		) {
			mode += 1;
		} else {
			mode = consts.MODE_WYSIWYG;
		}

		this.setMode(mode);
	}

	/**
	 * Switch on/off the editor into the disabled state.
	 * When in disabled, the user is not able to change the editor content
	 * This function firing the `disabled` event.
	 *
	 * @param {boolean} isDisabled
	 */
	setDisabled(isDisabled: boolean) {
		this.o.disabled = isDisabled;

		const readOnly: boolean = this.__wasReadOnly;

		this.setReadOnly(isDisabled || readOnly);
		this.__wasReadOnly = readOnly;

		if (this.editor) {
			this.editor.setAttribute('aria-disabled', isDisabled.toString());
			this.container.classList.toggle('jodit_disabled', isDisabled);
			this.e.fire('disabled', isDisabled);
		}
	}

	/**
	 * Return true if editor in disabled mode
	 */
	getDisabled(): boolean {
		return this.o.disabled;
	}

	/**
	 * Switch on/off the editor into the read-only state.
	 * When in readonly, the user is not able to change the editor content, but can still
	 * use some editor functions (show source code, print content, or seach).
	 * This function firing the `readonly` event.
	 *
	 * @param {boolean} isReadOnly
	 */
	setReadOnly(isReadOnly: boolean) {
		if (this.__wasReadOnly === isReadOnly) {
			return;
		}

		this.__wasReadOnly = isReadOnly;
		this.o.readonly = isReadOnly;

		if (isReadOnly) {
			this.editor && this.editor.removeAttribute('contenteditable');
		} else {
			this.editor && this.editor.setAttribute('contenteditable', 'true');
		}

		this.e && this.e.fire('readonly', isReadOnly);
	}

	/**
	 * Return true if editor in read-only mode
	 */
	getReadOnly(): boolean {
		return this.o.readonly;
	}

	/**
	 * Hook before init
	 */
	beforeInitHook(): any {
		// do nothing
	}

	/**
	 * Hook after init
	 */
	afterInitHook(): any {
		// do nothing
	}

	/** @override **/
	protected initOptions(options?: object): void {
		this.options = configFactory(options);
	}

	/** @override **/
	protected initOwners(): void {
		// in iframe it can be changed
		this.editorWindow = this.o.ownerWindow;
		this.ownerWindow = this.o.ownerWindow;
	}

	/**
	 * Create instance of Jodit
	 * @constructor
	 *
	 * @param {HTMLInputElement | string} element Selector or HTMLElement
	 * @param {object} options Editor's options
	 */
	constructor(element: HTMLElement | string, options?: object) {
		super(options as IViewOptions);

		try {
			resolveElement(element, this.o.shadowRoot || this.od); // check element valid
		} catch (e) {
			this.destruct();
			throw e;
		}

		this.setStatus(STATUSES.beforeInit);

		if (this.options?.events) {
			Object.keys(this.o.events).forEach((key: string) =>
				this.e.on(key, this.o.events[key])
			);
		}

		this.e.on(this.ow, 'resize', () => {
			if (this.e) {
				this.e.fire('resize');
			}
		});

		this.selection = new Select(this);

		this.initPlugins();

		this.e.on('changePlace', () => {
			this.setReadOnly(this.o.readonly);
			this.setDisabled(this.o.disabled);
		});

		this.places.length = 0;
		const addPlaceResult = this.addPlace(element, options);

		Jodit.instances[this.id] = this;

		const init = () => {
			if (this.e) {
				this.e.fire('afterInit', this);
			}

			this.afterInitHook();

			this.setStatus(STATUSES.ready);

			this.e.fire('afterConstructor', this);
		};

		if (isPromise(addPlaceResult)) {
			addPlaceResult.finally(init);
		} else {
			init();
		}
	}

	currentPlace!: IWorkPlace;
	places!: IWorkPlace[];

	private elementToPlace: Map<HTMLElement, IWorkPlace> = new Map();

	/**
	 * Create and init current editable place
	 * @param source
	 * @param options
	 */
	addPlace(
		source: HTMLElement | string,
		options?: object
	): void | Promise<any> {
		const element = resolveElement(source, this.o.shadowRoot || this.od);

		if (!this.isReady) {
			this.id = attr(element, 'id') || new Date().getTime().toString();

			Jodit.instances[this.id] = this;
		}

		if (element.attributes) {
			Array.from(element.attributes).forEach((attr: Attr) => {
				const name: string = attr.name;
				let value: string | boolean | number = attr.value;

				if (
					(Jodit.defaultOptions as any)[name] !== undefined &&
					(!options || (options as any)[name] === undefined)
				) {
					if (['readonly', 'disabled'].indexOf(name) !== -1) {
						value = value === '' || value === 'true';
					}

					if (/^[0-9]+(\.)?([0-9]+)?$/.test(value.toString())) {
						value = Number(value);
					}

					(this.options as any)[name] = value;
				}
			});
		}

		let container = this.c.div('jodit-container');

		container.classList.add('jodit');
		container.classList.add('jodit-container');
		container.classList.add(`jodit_theme_${this.o.theme || 'default'}`);

		container.setAttribute('contenteditable', 'false');

		let buffer: null | string = null;

		if (this.o.inline) {
			if (['TEXTAREA', 'INPUT'].indexOf(element.nodeName) === -1) {
				container = element as HTMLDivElement;
				element.setAttribute(
					this.__defaultClassesKey,
					element.className.toString()
				);

				buffer = container.innerHTML;

				container.innerHTML = '';
			}

			container.classList.add('jodit_inline');
			container.classList.add('jodit-container');
		}

		// actual for inline mode
		if (element !== container) {
			// hide source element
			if (element.style.display) {
				element.setAttribute(
					this.__defaultStyleDisplayKey,
					element.style.display
				);
			}

			element.style.display = 'none';
		}

		const workplace = this.c.div('jodit-workplace', {
			contenteditable: false
		});
		container.appendChild(workplace);

		const statusbar = new StatusBar(this, container);

		if (element.parentNode && element !== container) {
			element.parentNode.insertBefore(container, element);
		}

		const editor = this.c.div('jodit-wysiwyg', {
			contenteditable: true,
			'aria-disabled': false,
			tabindex: this.o.tabIndex
		});

		workplace.appendChild(editor);

		const currentPlace = {
			editor,
			element,
			container,
			workplace,
			statusbar,
			options: this.isReady ? configFactory(options) : this.options,
			observer: new Observer(this),
			editorWindow: this.ow
		};

		this.elementToPlace.set(editor, currentPlace);

		this.setCurrentPlace(currentPlace);
		this.places.push(currentPlace);

		this.setNativeEditorValue(this.getElementValue()); // Init value

		const initResult = this.initEditor(buffer);

		const opt = this.options;

		const init = () => {
			if (
				opt.enableDragAndDropFileToEditor &&
				opt.uploader &&
				(opt.uploader.url || opt.uploader.insertImageAsBase64URI)
			) {
				this.uploader.bind(this.editor);
			}

			// in initEditor - the editor could change
			if (!this.elementToPlace.get(this.editor)) {
				this.elementToPlace.set(this.editor, currentPlace);
			}

			this.e.fire('afterAddPlace', currentPlace);
		};

		if (isPromise(initResult)) {
			return initResult.then(init);
		}

		init();
	}

	/**
	 * Set current place object
	 * @param place
	 */
	setCurrentPlace(place: IWorkPlace): void {
		if (this.currentPlace === place) {
			return;
		}

		if (!this.isEditorMode()) {
			this.setMode(consts.MODE_WYSIWYG);
		}

		this.currentPlace = place;

		this.buildToolbar();

		if (this.isReady) {
			this.e.fire('changePlace', place);
		}
	}

	private initPlugins(): void {
		this.beforeInitHook();

		this.e.fire('beforeInit', this);

		try {
			Jodit.plugins.init(this);
		} catch (e) {
			if (!isProd) {
				throw e;
			}
		}
	}

	private initEditor(buffer: null | string): void | Promise<any> {
		const result = this.createEditor();

		const init = () => {
			if (this.isInDestruct) {
				return;
			}

			// syncro
			if (this.element !== this.container) {
				this.setElementValue();
			} else {
				buffer !== null && this.setEditorValue(buffer); // inline mode
			}

			let mode = this.o.defaultMode;

			if (this.o.saveModeInStorage) {
				const localMode = this.storage.get('jodit_default_mode');

				if (typeof localMode === 'string') {
					mode = parseInt(localMode, 10);
				}
			}

			this.setMode(mode);

			if (this.o.readonly) {
				this.__wasReadOnly = false;
				this.setReadOnly(true);
			}

			if (this.o.disabled) {
				this.setDisabled(true);
			}

			// if enter plugin not installed
			try {
				this.ed.execCommand(
					'defaultParagraphSeparator',
					false,
					this.o.enter.toLowerCase()
				);
			} catch {}

			// fix for native resizing
			try {
				this.ed.execCommand('enableObjectResizing', false, 'false');
			} catch {}

			try {
				this.ed.execCommand('enableInlineTableEditing', false, 'false');
			} catch {}
		};

		if (isPromise(result)) {
			return result.then(init);
		}

		init();
	}

	/**
	 * Create main DIV element and replace source textarea
	 *
	 * @private
	 */
	private createEditor(): void | Promise<any> {
		const defaultEditorArea = this.editor;

		const stayDefault: boolean | undefined | Promise<void> = this.e.fire(
			'createEditor',
			this
		);

		const init = () => {
			if (this.isInDestruct) {
				return;
			}

			if (stayDefault === false || isPromise(stayDefault)) {
				Dom.safeRemove(defaultEditorArea);
			}

			if (this.o.editorCssClass) {
				this.editor.classList.add(this.o.editorCssClass);
			}

			if (this.o.style) {
				css(this.editor, this.o.style);
			}

			const editor = this.editor;
			// proxy events
			this.e
				.on('synchro', () => {
					this.setEditorValue();
				})
				.on('focus', () => {
					this.editorIsActive = true;
				})
				.on('blur', () => (this.editorIsActive = false))
				.on(editor, 'mousedown touchstart focus', () => {
					const place = this.elementToPlace.get(editor);
					if (place) {
						this.setCurrentPlace(place);
					}
				})
				.on(editor, 'compositionend', () => {
					this.setEditorValue();
				})
				.on(
					editor,
					'selectionchange selectionstart keydown keyup keypress dblclick mousedown mouseup ' +
						'click copy cut dragstart drop dragover paste resize touchstart touchend focus blur',
					(event: Event): false | void => {
						if (this.o.readonly) {
							return;
						}
						if (
							event instanceof KeyboardEvent &&
							event.isComposing
						) {
							return;
						}

						if (this.e && this.e.fire) {
							if (this.e.fire(event.type, event) === false) {
								return false;
							}

							this.setEditorValue();
						}
					}
				);

			if (this.o.spellcheck) {
				this.editor.setAttribute('spellcheck', 'true');
			}

			// direction
			if (this.o.direction) {
				const direction =
					this.o.direction.toLowerCase() === 'rtl' ? 'rtl' : 'ltr';

				this.editor.style.direction = direction;
				this.container.style.direction = direction;
				this.editor.setAttribute('dir', direction);
				this.container.setAttribute('dir', direction);

				this.toolbar.setDirection(direction);
			}

			if (this.o.triggerChangeEvent) {
				this.e.on(
					'change',
					this.async.debounce(() => {
						this.e && this.e.fire(this.element, 'change');
					}, this.defaultTimeout)
				);
			}
		};

		if (isPromise(stayDefault)) {
			return stayDefault.then(init);
		}

		init();
	}

	/**
	 * Jodit's Destructor. Remove editor, and return source input
	 */
	destruct() {
		if (this.isInDestruct) {
			return;
		}

		this.setStatus(STATUSES.beforeDestruct);

		this.elementToPlace.clear();

		if (!this.editor) {
			return;
		}

		const buffer = this.getEditorValue();

		this.storage.clear();

		this.buffer.clear();
		delete this.buffer;

		this.commands = {};

		delete this.selection;
		this.__selectionLocked = null;

		this.e.off(this.ow, 'resize');
		this.e.off(this.ow);
		this.e.off(this.od);
		this.e.off(this.od.body);

		this.places.forEach(
			({
				container,
				workplace,
				statusbar,
				element,
				iframe,
				editor,
				observer
			}) => {
				if (element !== container) {
					if (element.hasAttribute(this.__defaultStyleDisplayKey)) {
						const display = attr(
							element,
							this.__defaultStyleDisplayKey
						);

						if (display) {
							element.style.display = display;
							element.removeAttribute(
								this.__defaultStyleDisplayKey
							);
						}
					} else {
						element.style.display = '';
					}
				} else {
					if (element.hasAttribute(this.__defaultClassesKey)) {
						element.className =
							attr(element, this.__defaultClassesKey) || '';
						element.removeAttribute(this.__defaultClassesKey);
					}
				}

				if (element.hasAttribute('style') && !attr(element, 'style')) {
					element.removeAttribute('style');
				}

				!statusbar.isInDestruct && statusbar.destruct();

				this.e.off(container);
				this.e.off(element);
				this.e.off(editor);

				Dom.safeRemove(workplace);
				Dom.safeRemove(editor);

				if (container !== element) {
					Dom.safeRemove(container);
				}

				Dom.safeRemove(iframe);

				// inline mode
				if (container === element) {
					element.innerHTML = buffer;
				}

				!observer.isInDestruct && observer.destruct();
			}
		);

		this.places.length = 0;
		this.currentPlace = {} as any;

		delete Jodit.instances[this.id];

		super.destruct();
	}
}

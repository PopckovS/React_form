/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

import './image-editor.less';

import autobind from 'autobind-decorator';

import { Config } from '../../config';
import {
	ImageEditorActionBox,
	IJodit,
	ImageEditorOptions,
	ImageAction,
	IViewBased,
	IUIButton,
	IDictionary,
	Nullable
} from '../../types';
import { ViewComponent } from '../../core/component';
import { Alert, Dialog, Prompt } from '../dialog';
import { $$, attr, css, refs, trim } from '../../core/helpers';
import { Dom } from '../../core/dom';
import { Button } from '../../core/ui/button';
import { form } from './templates/form';

declare module '../../config' {
	interface Config {
		imageeditor: ImageEditorOptions;
	}
}

Config.prototype.imageeditor = {
	min_width: 20,
	min_height: 20,
	/**
	 * @property{boolean} imageeditor.closeAfterSave=false Close editor after save image
	 */
	closeAfterSave: false,

	/**
	 * @property{string|int} imageeditor.width=85% Default dialog width by screen
	 */
	width: '85%',

	/**
	 * @property{string|int} imageeditor.height=85% Default dialog height by screen
	 */
	height: '85%',

	/**
	 * @property{boolean} imageeditor.crop=true Show tab cropping
	 */
	crop: true,

	/**
	 * @property{boolean} imageeditor.resize=true Show tab resizing
	 */
	resize: true,

	/**
	 * @property{boolean} imageeditor.resizeUseRatio=true Keep aspect ratio on resize
	 */
	resizeUseRatio: true,

	/**
	 * @property{int} imageeditor.resizeMinWidth=20 minimal width on resize
	 */
	resizeMinWidth: 20,

	/**
	 * @property{boolean} imageeditor.resizeMinHeight=20 minimal height on resize
	 */
	resizeMinHeight: 20,

	/**
	 * @property{boolean} imageeditor.cropUseRatio=true Keep aspect ratio on crop
	 */
	cropUseRatio: true,

	/**
	 * @property{string} imageeditor.cropDefaultWidth=70% In the tab, crop the image is displayed not in real size.
	 * Boxing default size for it
	 * @property{string} imageeditor.cropDefaultHeight=70%
	 */
	cropDefaultWidth: '70%',
	cropDefaultHeight: '70%'
};
const jie = 'jodit-image-editor';

const TABS = {
	resize: 'resize' as ImageAction,
	crop: 'crop' as ImageAction
};

/**
 * The module allows you toWYSIWYG edit the image: resize or cut any part of it
 *
 */
export class ImageEditor extends ViewComponent {
	private resizeUseRatio: boolean = true;
	private cropUseRatio: boolean = true;

	private dialog: Dialog;
	private image!: HTMLImageElement;
	private cropImage!: HTMLImageElement;
	private clicked = false;
	private target!: HTMLElement;

	private start_x: number = 0;
	private start_y: number = 0;
	private top_x: number = 0;
	private top_y: number = 0;

	private width: number = 0;
	private height: number = 0;

	private activeTab: ImageAction = TABS.resize;

	private naturalWidth: number = 0;
	private naturalHeight: number = 0;

	private ratio: number = 0;
	private new_h: number = 0;
	private new_w: number = 0;
	private diff_x: number = 0;
	private diff_y: number = 0;

	private buttons: IDictionary<IUIButton>;

	private editor: HTMLElement;

	private resize_box: HTMLElement;
	private crop_box: HTMLElement;
	private sizes: HTMLElement;

	private resizeHandler: HTMLElement;
	private cropHandler: HTMLElement;

	private cropBox = {
		x: 0,
		y: 0,
		w: 0,
		h: 0
	};

	private resizeBox = {
		w: 0,
		h: 0
	};

	private calcValueByPercent = (
		value: number | string,
		percent: string | number
	): number => {
		const percentStr: string = percent.toString();
		const valueNbr: number = parseFloat(value.toString());
		let match: string[] | null;

		match = /^[\-+]?[0-9]+(px)?$/.exec(percentStr);
		if (match) {
			return parseInt(percentStr, 10);
		}

		match = /^([\-+]?[0-9.]+)%$/.exec(percentStr);

		if (match) {
			return Math.round(valueNbr * (parseFloat(match[1]) / 100));
		}

		return valueNbr || 0;
	};

	private calcCropBox = () => {
		const w = (this.crop_box.parentNode as HTMLElement).offsetWidth * 0.8,
			h = (this.crop_box.parentNode as HTMLElement).offsetHeight * 0.8;
		let wn: number = w,
			hn: number = h;

		if (w > this.naturalWidth && h > this.naturalHeight) {
			wn = this.naturalWidth;
			hn = this.naturalHeight;
		} else if (this.ratio > w / h) {
			wn = w;
			hn = this.naturalHeight * (w / this.naturalWidth);
		} else {
			wn = this.naturalWidth * (h / this.naturalHeight);
			hn = h;
		}

		css(this.crop_box, {
			width: wn,
			height: hn
		});
	};
	private showCrop = () => {
		if (!this.cropImage) {
			return;
		}

		this.calcCropBox();

		const w =
			this.cropImage.offsetWidth ||
			this.image.offsetWidth ||
			this.image.naturalWidth;

		this.new_w = this.calcValueByPercent(w, this.o.cropDefaultWidth);

		const h =
			this.cropImage.offsetHeight ||
			this.image.offsetHeight ||
			this.image.naturalHeight;

		if (this.cropUseRatio) {
			this.new_h = this.new_w / this.ratio;
		} else {
			this.new_h = this.calcValueByPercent(h, this.o.cropDefaultHeight);
		}

		css(this.cropHandler, {
			backgroundImage: 'url(' + attr(this.cropImage, 'src') + ')',
			width: this.new_w,
			height: this.new_h,
			left: w / 2 - this.new_w / 2,
			top: h / 2 - this.new_h / 2
		});

		this.j.e.fire(this.cropHandler, 'updatesize');
	};

	private updateCropBox = () => {
		if (!this.cropImage) {
			return;
		}

		const ratioX = this.cropImage.offsetWidth / this.naturalWidth,
			ratioY = this.cropImage.offsetHeight / this.naturalHeight;

		this.cropBox.x = (css(this.cropHandler, 'left') as number) / ratioX;
		this.cropBox.y = (css(this.cropHandler, 'top') as number) / ratioY;
		this.cropBox.w = this.cropHandler.offsetWidth / ratioX;
		this.cropBox.h = this.cropHandler.offsetHeight / ratioY;

		this.sizes.textContent =
			this.cropBox.w.toFixed(0) + 'x' + this.cropBox.h.toFixed(0);
	};

	private updateResizeBox = () => {
		this.resizeBox.w = this.image.offsetWidth || this.naturalWidth;
		this.resizeBox.h = this.image.offsetHeight || this.naturalHeight;
	};

	private setHandlers = () => {
		const self: ImageEditor = this;

		const { widthInput, heightInput } = refs<HTMLInputElement>(this.editor);

		self.j.e
			.on(
				[
					self.editor.querySelector('.jodit_bottomright'),
					self.cropHandler
				] as HTMLElement[],
				`mousedown.${jie}`,
				(e: MouseEvent) => {
					self.target = e.target as HTMLElement;

					e.preventDefault();
					e.stopImmediatePropagation();

					self.clicked = true;

					self.start_x = e.clientX;
					self.start_y = e.clientY;

					if (self.activeTab === TABS.crop) {
						self.top_x = css(self.cropHandler, 'left') as number;
						self.top_y = css(self.cropHandler, 'top') as number;
						self.width = self.cropHandler.offsetWidth;
						self.height = self.cropHandler.offsetHeight;
					} else {
						self.width = self.image.offsetWidth;
						self.height = self.image.offsetHeight;
					}
				}
			)
			.off(this.j.ow, `.${jie}` + self.j.id)
			.on(
				this.j.ow,
				`mousemove.${jie}` + self.j.id,

				this.j.async.throttle((e: MouseEvent) => {
					if (self.clicked) {
						self.diff_x = e.clientX - self.start_x;
						self.diff_y = e.clientY - self.start_y;

						if (
							(self.activeTab === TABS.resize &&
								self.resizeUseRatio) ||
							(self.activeTab === 'crop' && self.cropUseRatio)
						) {
							if (self.diff_x) {
								self.new_w = self.width + self.diff_x;
								self.new_h = Math.round(
									self.new_w / self.ratio
								);
							} else {
								self.new_h = self.height + self.diff_y;
								self.new_w = Math.round(
									self.new_h * self.ratio
								);
							}
						} else {
							self.new_w = self.width + self.diff_x;
							self.new_h = self.height + self.diff_y;
						}

						if (self.activeTab === TABS.resize) {
							if (self.new_w > self.o.resizeMinWidth) {
								css(self.image, 'width', self.new_w + 'px');
								widthInput.value = self.new_w.toString();
							}

							if (self.new_h > self.o.resizeMinHeight) {
								css(self.image, 'height', self.new_h + 'px');
								heightInput.value = self.new_h.toString();
							}

							this.j.e.fire(self.resizeHandler, 'updatesize');
						} else {
							if (self.target !== self.cropHandler) {
								if (
									self.top_x + self.new_w >
									self.cropImage.offsetWidth
								) {
									self.new_w =
										self.cropImage.offsetWidth - self.top_x;
								}
								if (
									self.top_y + self.new_h >
									self.cropImage.offsetHeight
								) {
									self.new_h =
										self.cropImage.offsetHeight -
										self.top_y;
								}
								css(self.cropHandler, {
									width: self.new_w,
									height: self.new_h
								});
							} else {
								if (
									self.top_x +
										self.diff_x +
										self.cropHandler.offsetWidth >
									self.cropImage.offsetWidth
								) {
									self.diff_x =
										self.cropImage.offsetWidth -
										self.top_x -
										self.cropHandler.offsetWidth;
								}
								css(
									self.cropHandler,
									'left',
									self.top_x + self.diff_x
								);
								if (
									self.top_y +
										self.diff_y +
										self.cropHandler.offsetHeight >
									self.cropImage.offsetHeight
								) {
									self.diff_y =
										self.cropImage.offsetHeight -
										self.top_y -
										self.cropHandler.offsetHeight;
								}
								css(
									self.cropHandler,
									'top',
									self.top_y + self.diff_y
								);
							}
							this.j.e.fire(self.cropHandler, 'updatesize');
						}

						e.stopImmediatePropagation();
					}
				}, 5)
			)

			.on(this.j.ow, `resize.${jie}`, () => {
				this.j.e.fire(self.resizeHandler, 'updatesize');
				self.showCrop();
				this.j.e.fire(self.cropHandler, 'updatesize');
			})

			.on(
				this.j.ow,
				`mouseup.${jie} ${self.j.id} keydown.${jie}` + self.j.id,
				(e: MouseEvent) => {
					if (self.clicked) {
						self.clicked = false;
						e.stopImmediatePropagation();
					}
				}
			);

		// btn group
		$$('.jodit-button-group', self.editor).forEach(group => {
			const input = group.querySelector('input') as HTMLInputElement;

			self.j.e.on(group, 'click', (e: MouseEvent): void => {
				input.checked = !input.checked;
				self.j.e.fire(input, 'change');
			});
		});

		self.j.e
			.on(this.editor, 'click.' + jie, (e: MouseEvent): void => {
				const title = Dom.closest(
					e.target as Node,
					(node: Nullable<Node>) =>
						Dom.isElement(node) &&
						node.classList.contains(`${jie}__slider-title`),
					self.editor
				);

				const slide = title?.parentElement;

				if (!slide) {
					return;
				}

				$$(`.${jie}__slider,.${jie}__area`, self.editor).forEach(elm =>
					elm.classList.remove(`${jie}_active`)
				);

				slide.classList.add(`${jie}_active`);
				self.activeTab =
					(attr(slide, '-area') as ImageAction) || TABS.resize;

				const tab = self.editor.querySelector(
					`.${jie}__area.${jie}__area_` + self.activeTab
				);

				if (tab) {
					tab.classList.add(`${jie}_active`);
				}

				if (self.activeTab === 'crop') {
					self.showCrop();
				}
			})
			.on(
				widthInput,
				`change.${jie} mousedown.${jie} keydown.${jie}`,
				self.j.async.debounce(() => {
					const value: number = parseInt(widthInput.value, 10);
					let another: number;
					if (value > self.o.min_width) {
						css(self.image, 'width', value + 'px');

						if (self.resizeUseRatio) {
							another = Math.round(value / self.ratio);

							if (another > self.o.min_height) {
								css(self.image, 'height', another + 'px');
								heightInput.value = another.toString();
							}
						}
					}
					this.j.e.fire(self.resizeHandler, 'updatesize');
				}, 200)
			)
			.on(
				heightInput,
				`change.${jie} mousedown.${jie} keydown.${jie}`,
				self.j.async.debounce(() => {
					if (this.isDestructed) {
						return;
					}

					const value: number = parseInt(heightInput.value, 10);
					let another: number;
					if (value > self.o.min_height) {
						css(self.image, 'height', value + 'px');

						if (self.resizeUseRatio) {
							another = Math.round(value * self.ratio);

							if (another > self.o.min_width) {
								css(self.image, 'width', another + 'px');
								widthInput.value = another.toString();
							}
						}
					}
					this.j.e.fire(self.resizeHandler, 'updatesize');
				}, 200)
			);

		const { keepAspectRatioResize, keepAspectRatioCrop } = refs<
			HTMLInputElement
		>(this.editor);

		if (keepAspectRatioResize) {
			keepAspectRatioResize.addEventListener('change', () => {
				this.resizeUseRatio = keepAspectRatioResize.checked;
			});
		}

		if (keepAspectRatioCrop) {
			keepAspectRatioCrop.addEventListener('change', () => {
				this.cropUseRatio = keepAspectRatioCrop.checked;
			});
		}

		self.j.e
			.on(self.resizeHandler, 'updatesize', () => {
				css(self.resizeHandler, {
					top: 0,
					left: 0,
					width: (self.image.offsetWidth || self.naturalWidth) + 'px',
					height:
						(self.image.offsetHeight || self.naturalHeight) + 'px'
				});

				this.updateResizeBox();
			})
			.on(self.cropHandler, 'updatesize', () => {
				if (!self.cropImage) {
					return;
				}

				let new_x = css(self.cropHandler, 'left') as number,
					new_y = css(self.cropHandler, 'top') as number,
					new_width = self.cropHandler.offsetWidth,
					new_height = self.cropHandler.offsetHeight;

				if (new_x < 0) {
					new_x = 0;
				}

				if (new_y < 0) {
					new_y = 0;
				}

				if (new_x + new_width > self.cropImage.offsetWidth) {
					new_width = self.cropImage.offsetWidth - new_x;

					if (self.cropUseRatio) {
						new_height = new_width / self.ratio;
					}
				}

				if (new_y + new_height > self.cropImage.offsetHeight) {
					new_height = self.cropImage.offsetHeight - new_y;

					if (self.cropUseRatio) {
						new_width = new_height * self.ratio;
					}
				}

				css(self.cropHandler, {
					width: new_width,
					height: new_height,
					left: new_x,
					top: new_y,
					backgroundPosition:
						-new_x - 1 + 'px ' + (-new_y - 1) + 'px',
					backgroundSize:
						self.cropImage.offsetWidth +
						'px ' +
						self.cropImage.offsetHeight +
						'px'
				});

				self.updateCropBox();
			});

		Object.values(self.buttons).forEach(button => {
			button.onAction(() => {
				const data = {
					action: self.activeTab,
					box:
						self.activeTab === 'resize'
							? self.resizeBox
							: self.cropBox
				} as ImageEditorActionBox;

				switch (button) {
					case self.buttons.saveas:
						Prompt(
							self.j.i18n('Enter new name'),
							self.j.i18n('Save in new file'),
							(name: string): false | void => {
								if (!trim(name)) {
									Alert(
										self.j.i18n(
											'The name should not be empty'
										)
									).bindDestruct(this.j);

									return false;
								}

								self.onSave(
									name,
									data,
									self.hide,
									(e: Error) => {
										Alert(e.message).bindDestruct(self.j);
									}
								);
							}
						).bindDestruct(this.j);
						break;

					case self.buttons.save:
						self.onSave(undefined, data, self.hide, (e: Error) => {
							Alert(e.message).bindDestruct(self.j);
						});
						break;

					case self.buttons.reset:
						if (self.activeTab === 'resize') {
							css(self.image, {
								width: null,
								height: null
							});

							widthInput.value = self.naturalWidth.toString();
							heightInput.value = self.naturalHeight.toString();
							self.j.e.fire(self.resizeHandler, 'updatesize');
						} else {
							self.showCrop();
						}
						break;
				}
			});
		});
	};

	options: ImageEditorOptions;
	get o(): this['options'] {
		return this.options;
	}

	onSave!: (
		name: void | string,
		data: ImageEditorActionBox,
		hide: () => void,
		failed: (e: Error) => void
	) => void;

	/**
	 * Hide image editor
	 *
	 * @method hide
	 */
	@autobind
	hide() {
		this.dialog.close();
	}

	/**
	 * Open image editor
	 *
	 * @method open
	 * @param {string} url
	 * @param {function} save
	 * @param {string} [save.name] new filename
	 * @param {object} save.data Bound box for resize and crop operation
	 * @param {string} save.data.action resize or crop
	 * @param {object} save.data.box Bound box
	 * @param {function} save.success called after success operation
	 * @param {function} save.failed called after failed operation
	 * @example
	 * ```javascript
	 * var jodit = new Jodit('.editor', {
	 *		 imageeditor: {
	 *				 crop: false,
	 *				 closeAfterSave: true,
	 *				 width: 500
	 *		 }
	 * });
	 * jodit.imageeditor.open('http://xdsoft.net/jodit/images/test.png', function (name, data, success, failed) {
	 *		 var img = jodit.node.c('img');
	 *		 img.setAttribute('src', 'http://xdsoft.net/jodit/images/test.png');
	 *		 if (box.action !== 'resize') {
	 *					return failed('Sorry it is work only in resize mode. For croping use FileBrowser');
	 *		 }
	 *		 img.style.width = data.w;
	 *		 img.style.height = data.h;
	 *		 jodit.s.insertNode(img);
	 *		 success();
	 * });
	 * ```
	 */
	@autobind
	open(
		url: string,
		save: (
			newname: string | void,
			box: ImageEditorActionBox,
			success: () => void,
			failed: (error: Error) => void
		) => void
	): Promise<Dialog> {
		return this.j.async.promise<Dialog>(resolve => {
			const timestamp = new Date().getTime();

			this.image = this.j.c.element('img');

			$$('img,.jodit-icon_loader', this.resize_box).forEach(
				Dom.safeRemove
			);

			$$('img,.jodit-icon_loader', this.crop_box).forEach(Dom.safeRemove);

			css(this.cropHandler, 'background', 'transparent');

			this.onSave = save;

			this.resize_box.appendChild(
				this.j.c.element('i', { class: 'jodit-icon_loader' })
			);

			this.crop_box.appendChild(
				this.j.c.element('i', { class: 'jodit-icon_loader' })
			);

			if (/\?/.test(url)) {
				url += '&_tst=' + timestamp;
			} else {
				url += '?_tst=' + timestamp;
			}

			this.image.setAttribute('src', url);

			this.dialog.open();

			const { widthInput, heightInput } = refs<HTMLInputElement>(
				this.editor
			);

			const onload = () => {
				if (this.isDestructed) {
					return;
				}

				this.image.removeEventListener('load', onload);
				this.naturalWidth = this.image.naturalWidth;
				this.naturalHeight = this.image.naturalHeight;

				widthInput.value = this.naturalWidth.toString();
				heightInput.value = this.naturalHeight.toString();

				this.ratio = this.naturalWidth / this.naturalHeight;

				this.resize_box.appendChild(this.image);

				this.cropImage = this.image.cloneNode(true) as HTMLImageElement;

				this.crop_box.appendChild(this.cropImage);

				$$('.jodit-icon_loader', this.editor).forEach(Dom.safeRemove);

				if (this.activeTab === 'crop') {
					this.showCrop();
				}

				this.j.e.fire(this.resizeHandler, 'updatesize');
				this.j.e.fire(this.cropHandler, 'updatesize');

				this.dialog.setPosition();

				this.j.e.fire('afterImageEditor');

				resolve(this.dialog);
			};

			this.image.addEventListener('load', onload);

			if (this.image.complete) {
				onload();
			}
		});
	}

	constructor(editor: IViewBased) {
		super(editor);

		this.options =
			editor && (editor as IJodit).o && (editor as IJodit).o.imageeditor
				? (editor as IJodit).o.imageeditor
				: Config.defaultOptions.imageeditor;

		const o = this.options;

		this.resizeUseRatio = o.resizeUseRatio;
		this.cropUseRatio = o.cropUseRatio;

		this.buttons = {
			reset: Button(this.j, 'update', 'Reset'),
			save: Button(this.j, 'save', 'Save'),
			saveas: Button(this.j, 'save', 'Save as ...')
		};

		this.activeTab = o.resize ? 'resize' : 'crop';

		this.editor = form(this.j, this.options);

		const { resizeBox, cropBox } = refs<HTMLInputElement>(this.editor);

		this.resize_box = resizeBox;
		this.crop_box = cropBox;

		this.sizes = this.editor.querySelector(
			`.${jie}__area.${jie}__area_crop .jodit-image-editor__sizes`
		) as HTMLElement;

		this.resizeHandler = this.editor.querySelector(
			`.${jie}__resizer`
		) as HTMLElement;

		this.cropHandler = this.editor.querySelector(
			`.${jie}__croper`
		) as HTMLElement;

		this.dialog = new Dialog({
			fullsize: this.j.o.fullsize,
			globalFullSize: this.j.o.globalFullSize,
			language: this.j.o.language,
			buttons: ['fullsize', 'dialog.close']
		});

		this.dialog.setContent(this.editor);

		this.dialog.setSize(this.o.width, this.o.height);
		this.dialog.setHeader([
			this.buttons.reset,
			this.buttons.save,
			this.buttons.saveas
		]);

		this.setHandlers();
	}

	destruct(): any {
		if (this.isDestructed) {
			return;
		}

		if (this.dialog) {
			this.dialog.destruct();
			delete this.dialog;
		}

		Dom.safeRemove(this.editor);

		delete this.resize_box;
		delete this.crop_box;
		delete this.sizes;
		delete this.resizeHandler;
		delete this.cropHandler;
		delete this.editor;

		if (this.j.e) {
			this.j.e.off(this.ow, `.${jie}`);
			this.j.e.off(`.${jie}`);
		}

		super.destruct();
	}
}

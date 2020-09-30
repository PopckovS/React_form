/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

declare module '*.svg' {
	const content: string;
	export default content;
}

interface HTMLElement {
	component: any;
}

declare const appVersion: string;

declare const isProd: boolean;

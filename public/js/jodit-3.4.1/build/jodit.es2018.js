/*!
 jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser
 Author: Chupurnov <chupurnov@gmail.com> (https://xdsoft.net/)
 Version: v3.4.1
 Url: https://xdsoft.net/jodit/
 License(s): MIT
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 131);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "cns", function() { return /* reexport */ utils["c" /* cns */]; });
__webpack_require__.d(__webpack_exports__, "markDeprecated", function() { return /* reexport */ utils["g" /* markDeprecated */]; });
__webpack_require__.d(__webpack_exports__, "call", function() { return /* reexport */ utils["b" /* call */]; });
__webpack_require__.d(__webpack_exports__, "attr", function() { return /* reexport */ utils["a" /* attr */]; });
__webpack_require__.d(__webpack_exports__, "markOwner", function() { return /* reexport */ utils["h" /* markOwner */]; });
__webpack_require__.d(__webpack_exports__, "get", function() { return /* reexport */ utils["d" /* get */]; });
__webpack_require__.d(__webpack_exports__, "keepNames", function() { return /* reexport */ utils["f" /* keepNames */]; });
__webpack_require__.d(__webpack_exports__, "getClassName", function() { return /* reexport */ utils["e" /* getClassName */]; });
__webpack_require__.d(__webpack_exports__, "asArray", function() { return /* reexport */ asArray; });
__webpack_require__.d(__webpack_exports__, "splitArray", function() { return /* reexport */ splitArray; });
__webpack_require__.d(__webpack_exports__, "setTimeout", function() { return /* reexport */ set_timeout_setTimeout; });
__webpack_require__.d(__webpack_exports__, "clearTimeout", function() { return /* reexport */ set_timeout_clearTimeout; });
__webpack_require__.d(__webpack_exports__, "extend", function() { return /* reexport */ extend["a" /* extend */]; });
__webpack_require__.d(__webpack_exports__, "hasBrowserColorPicker", function() { return /* reexport */ checker["a" /* hasBrowserColorPicker */]; });
__webpack_require__.d(__webpack_exports__, "isArray", function() { return /* reexport */ checker["c" /* isArray */]; });
__webpack_require__.d(__webpack_exports__, "isEqual", function() { return /* reexport */ checker["f" /* isEqual */]; });
__webpack_require__.d(__webpack_exports__, "isFastEqual", function() { return /* reexport */ checker["g" /* isFastEqual */]; });
__webpack_require__.d(__webpack_exports__, "isBoolean", function() { return /* reexport */ checker["d" /* isBoolean */]; });
__webpack_require__.d(__webpack_exports__, "isFunction", function() { return /* reexport */ checker["h" /* isFunction */]; });
__webpack_require__.d(__webpack_exports__, "isHTML", function() { return /* reexport */ checker["i" /* isHTML */]; });
__webpack_require__.d(__webpack_exports__, "isHtmlFromWord", function() { return /* reexport */ checker["j" /* isHtmlFromWord */]; });
__webpack_require__.d(__webpack_exports__, "isInitable", function() { return /* reexport */ checker["k" /* isInitable */]; });
__webpack_require__.d(__webpack_exports__, "isDestructable", function() { return /* reexport */ checker["e" /* isDestructable */]; });
__webpack_require__.d(__webpack_exports__, "hasContainer", function() { return /* reexport */ checker["b" /* hasContainer */]; });
__webpack_require__.d(__webpack_exports__, "isInt", function() { return /* reexport */ checker["l" /* isInt */]; });
__webpack_require__.d(__webpack_exports__, "isJoditObject", function() { return /* reexport */ checker["m" /* isJoditObject */]; });
__webpack_require__.d(__webpack_exports__, "isViewObject", function() { return /* reexport */ checker["v" /* isViewObject */]; });
__webpack_require__.d(__webpack_exports__, "isLicense", function() { return /* reexport */ checker["n" /* isLicense */]; });
__webpack_require__.d(__webpack_exports__, "isNumber", function() { return /* reexport */ checker["o" /* isNumber */]; });
__webpack_require__.d(__webpack_exports__, "isNumeric", function() { return /* reexport */ checker["p" /* isNumeric */]; });
__webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return /* reexport */ checker["q" /* isPlainObject */]; });
__webpack_require__.d(__webpack_exports__, "isString", function() { return /* reexport */ checker["s" /* isString */]; });
__webpack_require__.d(__webpack_exports__, "isURL", function() { return /* reexport */ checker["t" /* isURL */]; });
__webpack_require__.d(__webpack_exports__, "isValidName", function() { return /* reexport */ checker["u" /* isValidName */]; });
__webpack_require__.d(__webpack_exports__, "isVoid", function() { return /* reexport */ checker["w" /* isVoid */]; });
__webpack_require__.d(__webpack_exports__, "isWindow", function() { return /* reexport */ checker["x" /* isWindow */]; });
__webpack_require__.d(__webpack_exports__, "isPromise", function() { return /* reexport */ checker["r" /* isPromise */]; });
__webpack_require__.d(__webpack_exports__, "colorToHex", function() { return /* reexport */ color["a" /* colorToHex */]; });
__webpack_require__.d(__webpack_exports__, "applyStyles", function() { return /* reexport */ applyStyles; });
__webpack_require__.d(__webpack_exports__, "cleanFromWord", function() { return /* reexport */ cleanFromWord; });
__webpack_require__.d(__webpack_exports__, "htmlspecialchars", function() { return /* reexport */ htmlspecialchars; });
__webpack_require__.d(__webpack_exports__, "stripTags", function() { return /* reexport */ stripTags; });
__webpack_require__.d(__webpack_exports__, "nl2br", function() { return /* reexport */ nl2br; });
__webpack_require__.d(__webpack_exports__, "normalizeKeyAliases", function() { return /* reexport */ normalize["c" /* normalizeKeyAliases */]; });
__webpack_require__.d(__webpack_exports__, "normalizeLicense", function() { return /* reexport */ normalize["d" /* normalizeLicense */]; });
__webpack_require__.d(__webpack_exports__, "normalizeNode", function() { return /* reexport */ normalize["e" /* normalizeNode */]; });
__webpack_require__.d(__webpack_exports__, "normalizePath", function() { return /* reexport */ normalize["f" /* normalizePath */]; });
__webpack_require__.d(__webpack_exports__, "normalizeRelativePath", function() { return /* reexport */ normalize["g" /* normalizeRelativePath */]; });
__webpack_require__.d(__webpack_exports__, "normalizeSize", function() { return /* reexport */ normalize["h" /* normalizeSize */]; });
__webpack_require__.d(__webpack_exports__, "normalizeUrl", function() { return /* reexport */ normalize["i" /* normalizeUrl */]; });
__webpack_require__.d(__webpack_exports__, "normalizeCssValue", function() { return /* reexport */ normalize["b" /* normalizeCssValue */]; });
__webpack_require__.d(__webpack_exports__, "normalizeColor", function() { return /* reexport */ normalize["a" /* normalizeColor */]; });
__webpack_require__.d(__webpack_exports__, "getContentWidth", function() { return /* reexport */ getContentWidth; });
__webpack_require__.d(__webpack_exports__, "innerWidth", function() { return /* reexport */ inner_width_innerWidth; });
__webpack_require__.d(__webpack_exports__, "offset", function() { return /* reexport */ offset; });
__webpack_require__.d(__webpack_exports__, "position", function() { return /* reexport */ position; });
__webpack_require__.d(__webpack_exports__, "camelCase", function() { return /* reexport */ string["a" /* camelCase */]; });
__webpack_require__.d(__webpack_exports__, "stringify", function() { return /* reexport */ string["e" /* stringify */]; });
__webpack_require__.d(__webpack_exports__, "kebabCase", function() { return /* reexport */ string["c" /* kebabCase */]; });
__webpack_require__.d(__webpack_exports__, "trim", function() { return /* reexport */ string["f" /* trim */]; });
__webpack_require__.d(__webpack_exports__, "trimInv", function() { return /* reexport */ string["g" /* trimInv */]; });
__webpack_require__.d(__webpack_exports__, "ucfirst", function() { return /* reexport */ string["h" /* ucfirst */]; });
__webpack_require__.d(__webpack_exports__, "sprintf", function() { return /* reexport */ string["d" /* sprintf */]; });
__webpack_require__.d(__webpack_exports__, "i18n", function() { return /* reexport */ string["b" /* i18n */]; });
__webpack_require__.d(__webpack_exports__, "appendScript", function() { return /* reexport */ appendScript; });
__webpack_require__.d(__webpack_exports__, "appendScriptAsync", function() { return /* reexport */ appendScriptAsync; });
__webpack_require__.d(__webpack_exports__, "appendStyleAsync", function() { return /* reexport */ appendStyleAsync; });
__webpack_require__.d(__webpack_exports__, "loadNext", function() { return /* reexport */ loadNext; });
__webpack_require__.d(__webpack_exports__, "browser", function() { return /* reexport */ browser; });
__webpack_require__.d(__webpack_exports__, "convertMediaUrlToVideoEmbed", function() { return /* reexport */ convertMediaUrlToVideoEmbed; });
__webpack_require__.d(__webpack_exports__, "css", function() { return /* reexport */ css; });
__webpack_require__.d(__webpack_exports__, "clearCenterAlign", function() { return /* reexport */ clearCenterAlign; });
__webpack_require__.d(__webpack_exports__, "ctrlKey", function() { return /* reexport */ ctrlKey; });
__webpack_require__.d(__webpack_exports__, "dataBind", function() { return /* reexport */ dataBind; });
__webpack_require__.d(__webpack_exports__, "defaultLanguage", function() { return /* reexport */ default_language["a" /* defaultLanguage */]; });
__webpack_require__.d(__webpack_exports__, "each", function() { return /* reexport */ each; });
__webpack_require__.d(__webpack_exports__, "completeUrl", function() { return /* reexport */ completeUrl; });
__webpack_require__.d(__webpack_exports__, "humanSizeToBytes", function() { return /* reexport */ humanSizeToBytes; });
__webpack_require__.d(__webpack_exports__, "JoditArray", function() { return /* reexport */ jodit_array["a" /* JoditArray */]; });
__webpack_require__.d(__webpack_exports__, "JoditObject", function() { return /* reexport */ jodit_object["a" /* JoditObject */]; });
__webpack_require__.d(__webpack_exports__, "parseQuery", function() { return /* reexport */ parseQuery; });
__webpack_require__.d(__webpack_exports__, "buildQuery", function() { return /* reexport */ buildQuery; });
__webpack_require__.d(__webpack_exports__, "inView", function() { return /* reexport */ inView; });
__webpack_require__.d(__webpack_exports__, "scrollIntoView", function() { return /* reexport */ scrollIntoView; });
__webpack_require__.d(__webpack_exports__, "$$", function() { return /* reexport */ $$; });
__webpack_require__.d(__webpack_exports__, "getXPathByElement", function() { return /* reexport */ getXPathByElement; });
__webpack_require__.d(__webpack_exports__, "refs", function() { return /* reexport */ refs; });
__webpack_require__.d(__webpack_exports__, "cssPath", function() { return /* reexport */ cssPath; });
__webpack_require__.d(__webpack_exports__, "resolveElement", function() { return /* reexport */ resolveElement; });
__webpack_require__.d(__webpack_exports__, "hasOwn", function() { return /* reexport */ type["b" /* hasOwn */]; });
__webpack_require__.d(__webpack_exports__, "type", function() { return /* reexport */ type["c" /* type */]; });
__webpack_require__.d(__webpack_exports__, "error", function() { return /* reexport */ type["a" /* error */]; });
__webpack_require__.d(__webpack_exports__, "val", function() { return /* reexport */ val; });

// EXTERNAL MODULE: ./src/core/helpers/utils/index.ts + 4 modules
var utils = __webpack_require__(10);

// EXTERNAL MODULE: ./src/core/helpers/checker/index.ts + 20 modules
var checker = __webpack_require__(5);

// CONCATENATED MODULE: ./src/core/helpers/array/as-array.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const asArray = (a) => (Object(checker["c" /* isArray */])(a) ? a : [a]);

// CONCATENATED MODULE: ./src/core/helpers/array/split-array.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function splitArray(a) {
    return Object(checker["s" /* isString */])(a) ? a.split(/[,\s]+/) : a;
}

// CONCATENATED MODULE: ./src/core/helpers/array/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



// CONCATENATED MODULE: ./src/core/helpers/async/set-timeout.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function set_timeout_setTimeout(callback, timeout, ...args) {
    if (!timeout) {
        callback.call(null, ...args);
    }
    else {
        return window.setTimeout(callback, timeout, ...args);
    }
    return 0;
}
function set_timeout_clearTimeout(timer) {
    window.clearTimeout(timer);
}

// CONCATENATED MODULE: ./src/core/helpers/async/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


// EXTERNAL MODULE: ./src/core/helpers/extend.ts
var extend = __webpack_require__(26);

// EXTERNAL MODULE: ./src/core/helpers/color/index.ts + 1 modules
var color = __webpack_require__(27);

// EXTERNAL MODULE: ./src/core/dom.ts
var dom = __webpack_require__(1);

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__(2);

// EXTERNAL MODULE: ./src/core/helpers/type.ts
var type = __webpack_require__(22);

// EXTERNAL MODULE: ./src/core/helpers/string/index.ts + 6 modules
var string = __webpack_require__(11);

// CONCATENATED MODULE: ./src/core/helpers/selector.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






let temp = 1;
const $$temp = () => {
    temp++;
    return temp;
};
function $$(selector, root) {
    let result;
    if (/:scope/.test(selector) &&
        constants["IS_IE"] &&
        !(root && root.nodeType === Node.DOCUMENT_NODE)) {
        const id = root.id, temp_id = id ||
            '_selector_id_' + ('' + Math.random()).slice(2) + $$temp();
        selector = selector.replace(/:scope/g, '#' + temp_id);
        !id && root.setAttribute('id', temp_id);
        result = root.parentNode.querySelectorAll(selector);
        if (!id) {
            root.removeAttribute('id');
        }
    }
    else {
        result = root.querySelectorAll(selector);
    }
    return [].slice.call(result);
}
const getXPathByElement = (element, root) => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
        return '';
    }
    if (!element.parentNode || root === element) {
        return '';
    }
    if (element.id) {
        return "//*[@id='" + element.id + "']";
    }
    const sames = [].filter.call(element.parentNode.childNodes, (x) => x.nodeName === element.nodeName);
    return (getXPathByElement(element.parentNode, root) +
        '/' +
        element.nodeName.toLowerCase() +
        (sames.length > 1
            ? '[' + (Array.from(sames).indexOf(element) + 1) + ']'
            : ''));
};
const refs = (root) => {
    return $$('[ref],[data-ref]', root).reduce((def, child) => {
        const key = Object(utils["a" /* attr */])(child, '-ref');
        if (key && Object(checker["s" /* isString */])(key)) {
            def[Object(string["a" /* camelCase */])(key)] = child;
            def[key] = child;
        }
        return def;
    }, {});
};
const cssPath = (el) => {
    if (!dom["a" /* Dom */].isElement(el)) {
        return null;
    }
    const path = [];
    let start = el;
    while (start && start.nodeType === Node.ELEMENT_NODE) {
        let selector = start.nodeName.toLowerCase();
        if (start.id) {
            selector += '#' + start.id;
            path.unshift(selector);
            break;
        }
        else {
            let sib = start, nth = 1;
            do {
                sib = sib.previousElementSibling;
                if (sib && sib.nodeName.toLowerCase() === selector) {
                    nth++;
                }
            } while (sib);
            selector += ':nth-of-type(' + nth + ')';
        }
        path.unshift(selector);
        start = start.parentNode;
    }
    return path.join(' > ');
};
function resolveElement(element, od) {
    let resolved = element;
    if (Object(checker["s" /* isString */])(element)) {
        try {
            resolved = od.querySelector(element);
        }
        catch (_a) {
            throw Object(type["a" /* error */])('String "' + element + '" should be valid HTML selector');
        }
    }
    if (!resolved ||
        typeof resolved !== 'object' ||
        !dom["a" /* Dom */].isElement(resolved) ||
        !resolved.cloneNode) {
        throw Object(type["a" /* error */])('Element "' + element + '" should be string or HTMLElement instance');
    }
    return resolved;
}

// CONCATENATED MODULE: ./src/core/helpers/html/apply-styles.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function normalizeCSS(s) {
    return s
        .replace(/mso-[a-z\-]+:[\s]*[^;]+;/gi, '')
        .replace(/mso-[a-z\-]+:[\s]*[^";]+$/gi, '')
        .replace(/border[a-z\-]*:[\s]*[^;]+;/gi, '')
        .replace(/([0-9.]+)(pt|cm)/gi, (match, units, metrics) => {
        switch (metrics.toLowerCase()) {
            case 'pt':
                return (parseFloat(units) * 1.328).toFixed(0) + 'px';
            case 'cm':
                return (parseFloat(units) * 0.02645833).toFixed(0) + 'px';
        }
        return match;
    });
}
function applyStyles(html) {
    if (html.indexOf('<html ') === -1) {
        return html;
    }
    html = html.substring(html.indexOf('<html '), html.length);
    html = html.substring(0, html.lastIndexOf('</html>') + '</html>'.length);
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    let convertedString = '', collection = [], rules = [];
    try {
        const iframeDoc = iframe.contentDocument ||
            (iframe.contentWindow ? iframe.contentWindow.document : null);
        if (iframeDoc) {
            iframeDoc.open();
            iframeDoc.write(html);
            iframeDoc.close();
            if (iframeDoc.styleSheets.length) {
                rules = iframeDoc.styleSheets[iframeDoc.styleSheets.length - 1].cssRules;
            }
            for (let idx = 0; idx < rules.length; idx += 1) {
                if (rules[idx].selectorText === '') {
                    continue;
                }
                collection = $$(rules[idx].selectorText, iframeDoc.body);
                collection.forEach((elm) => {
                    elm.style.cssText = normalizeCSS(rules[idx].style.cssText + ';' + elm.style.cssText);
                });
            }
            dom["a" /* Dom */].each(iframeDoc.body, node => {
                if (dom["a" /* Dom */].isElement(node)) {
                    const elm = node;
                    const css = elm.style.cssText;
                    if (css) {
                        elm.style.cssText = normalizeCSS(css);
                    }
                    if (elm.hasAttribute('lang')) {
                        elm.removeAttribute('lang');
                    }
                }
            });
            convertedString = iframeDoc.firstChild
                ? Object(string["f" /* trim */])(iframeDoc.body.innerHTML)
                : '';
        }
    }
    catch (_a) {
    }
    finally {
        dom["a" /* Dom */].safeRemove(iframe);
    }
    if (convertedString) {
        html = convertedString;
    }
    return Object(string["f" /* trim */])(html
        .replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, '')
        .replace(/<!--[^>]*>/g, ''));
}

// CONCATENATED MODULE: ./src/core/helpers/html/clean-from-word.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function cleanFromWord(html) {
    if (html.indexOf('<html ') !== -1) {
        html = html.substring(html.indexOf('<html '), html.length);
        html = html.substring(0, html.lastIndexOf('</html>') + '</html>'.length);
    }
    let convertedString = '';
    try {
        const div = document.createElement('div');
        div.innerHTML = html;
        const marks = [];
        if (div.firstChild) {
            dom["a" /* Dom */].all(div, node => {
                if (!node) {
                    return;
                }
                switch (node.nodeType) {
                    case Node.ELEMENT_NODE:
                        switch (node.nodeName) {
                            case 'STYLE':
                            case 'LINK':
                            case 'META':
                                marks.push(node);
                                break;
                            case 'W:SDT':
                            case 'W:SDTPR':
                            case 'FONT':
                                dom["a" /* Dom */].unwrap(node);
                                break;
                            default:
                                Array.from(node.attributes).forEach((attr) => {
                                    if ([
                                        'src',
                                        'href',
                                        'rel',
                                        'content'
                                    ].indexOf(attr.name.toLowerCase()) ===
                                        -1) {
                                        node.removeAttribute(attr.name);
                                    }
                                });
                        }
                        break;
                    case Node.TEXT_NODE:
                        break;
                    default:
                        marks.push(node);
                }
            });
        }
        marks.forEach(dom["a" /* Dom */].safeRemove);
        convertedString = div.innerHTML;
    }
    catch (e) { }
    if (convertedString) {
        html = convertedString;
    }
    html = html
        .split(/(\n)/)
        .filter(string["f" /* trim */])
        .join('\n');
    return html
        .replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, '')
        .replace(/<!--[^>]*>/g, '');
}

// CONCATENATED MODULE: ./src/core/helpers/html/htmlspecialchars.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function htmlspecialchars(html) {
    const tmp = document.createElement('div');
    tmp.textContent = html;
    return tmp.innerHTML;
}

// CONCATENATED MODULE: ./src/core/helpers/html/strip-tags.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




function stripTags(html, doc = document) {
    const tmp = doc.createElement('div');
    if (Object(checker["s" /* isString */])(html)) {
        tmp.innerHTML = html;
    }
    else {
        tmp.appendChild(html);
    }
    $$('DIV, P, BR, H1, H2, H3, H4, H5, H6, HR', tmp).forEach(p => {
        const pr = p.parentNode;
        if (!pr) {
            return;
        }
        const nx = p.nextSibling;
        if (dom["a" /* Dom */].isText(nx) && /^\s/.test(nx.nodeValue || '')) {
            return;
        }
        if (nx) {
            pr.insertBefore(doc.createTextNode(' '), nx);
        }
    });
    return Object(string["f" /* trim */])(tmp.innerText) || '';
}

// CONCATENATED MODULE: ./src/core/helpers/html/nl2br.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function nl2br(html) {
    return html.replace(/([^>])([\n\r]+)/g, '$1<br/>$2');
}

// CONCATENATED MODULE: ./src/core/helpers/html/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






// EXTERNAL MODULE: ./src/core/helpers/normalize/index.ts + 9 modules
var normalize = __webpack_require__(21);

// CONCATENATED MODULE: ./src/core/helpers/size/get-content-width.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const getContentWidth = (element, win) => {
    const pi = (value) => parseInt(value, 10), style = win.getComputedStyle(element), width = element.offsetWidth, paddingLeft = pi(style.getPropertyValue('padding-left') || '0'), paddingRight = pi(style.getPropertyValue('padding-right') || '0');
    return width - paddingLeft - paddingRight;
};

// CONCATENATED MODULE: ./src/core/helpers/size/inner-width.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const inner_width_innerWidth = (element, win) => {
    const computedStyle = win.getComputedStyle(element);
    let elementWidth = element.clientWidth;
    elementWidth -=
        parseFloat(computedStyle.paddingLeft || '0') +
            parseFloat(computedStyle.paddingRight || '0');
    return elementWidth;
};

// CONCATENATED MODULE: ./src/core/helpers/size/offset.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const offset = (elm, jodit, doc, recurse = false) => {
    let rect;
    try {
        rect = elm.getBoundingClientRect();
    }
    catch (e) {
        rect = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        };
    }
    const body = doc.body, docElem = doc.documentElement || {
        clientTop: 0,
        clientLeft: 0,
        scrollTop: 0,
        scrollLeft: 0
    }, win = doc.defaultView || doc.parentWindow, scrollTop = win.pageYOffset || docElem.scrollTop || body.scrollTop, scrollLeft = win.pageXOffset || docElem.scrollLeft || body.scrollLeft, clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0;
    let topValue, leftValue;
    const iframe = jodit.iframe;
    if (!recurse && jodit && jodit.options && jodit.o.iframe && iframe) {
        const { top, left } = offset(iframe, jodit, jodit.od, true);
        topValue = rect.top + top;
        leftValue = rect.left + left;
    }
    else {
        topValue = rect.top + scrollTop - clientTop;
        leftValue = rect.left + scrollLeft - clientLeft;
    }
    return {
        top: Math.round(topValue),
        left: Math.round(leftValue),
        width: rect.width,
        height: rect.height
    };
};

// CONCATENATED MODULE: ./src/core/helpers/size/position.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function position(elm, jodit, recurse = false) {
    const rect = elm.getBoundingClientRect();
    let xPos = rect.left, yPos = rect.top;
    if (Object(checker["m" /* isJoditObject */])(jodit) && jodit.iframe && !recurse) {
        const { left, top } = position(jodit.iframe, jodit, true);
        xPos += left;
        yPos += top;
    }
    return {
        left: Math.round(xPos),
        top: Math.round(yPos),
        width: Math.round(elm.offsetWidth),
        height: Math.round(elm.offsetHeight)
    };
}

// CONCATENATED MODULE: ./src/core/helpers/size/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





// CONCATENATED MODULE: ./src/core/helpers/complete-url.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const completeUrl = (url) => {
    if (window.location.protocol === 'file:' && /^\/\//.test(url)) {
        url = 'https:' + url;
    }
    return url;
};

// CONCATENATED MODULE: ./src/core/helpers/append-script.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


const alreadyLoadedList = new Map();
const cacheLoaders = (loader) => {
    return async (jodit, url) => {
        if (alreadyLoadedList.has(url)) {
            return alreadyLoadedList.get(url);
        }
        const promise = loader(jodit, url);
        alreadyLoadedList.set(url, promise);
        return promise;
    };
};
const appendScript = (jodit, url, callback) => {
    const script = jodit.c.element('script');
    script.type = 'text/javascript';
    if (Object(checker["h" /* isFunction */])(callback) && !jodit.isInDestruct) {
        jodit.e.on(script, 'load', callback);
    }
    if (!script.src) {
        script.src = completeUrl(url);
    }
    jodit.od.body.appendChild(script);
    return {
        callback,
        element: script
    };
};
const appendScriptAsync = cacheLoaders((jodit, url) => {
    return new Promise((resolve, reject) => {
        const { element } = appendScript(jodit, url, resolve);
        !jodit.isInDestruct && jodit.e.on(element, 'error', reject);
    });
});
const appendStyleAsync = cacheLoaders((jodit, url) => {
    return new Promise((resolve, reject) => {
        const link = jodit.c.element('link');
        link.rel = 'stylesheet';
        link.media = 'all';
        link.crossOrigin = 'anonymous';
        const callback = () => resolve(link);
        !jodit.isInDestruct &&
            jodit.e.on(link, 'load', callback).on(link, 'error', reject);
        link.href = completeUrl(url);
        if (jodit.o.shadowRoot) {
            jodit.o.shadowRoot.appendChild(link);
        }
        else {
            jodit.od.body.appendChild(link);
        }
    });
});
const loadNext = (jodit, urls, i = 0) => {
    if (!Object(checker["s" /* isString */])(urls[i])) {
        return Promise.resolve();
    }
    return appendScriptAsync(jodit, urls[i]).then(() => loadNext(jodit, urls, i + 1));
};

// CONCATENATED MODULE: ./src/core/helpers/browser.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const browser = (browser) => {
    const ua = navigator.userAgent.toLowerCase(), match = /(firefox)[\s\/]([\w.]+)/.exec(ua) ||
        /(chrome)[\s\/]([\w.]+)/.exec(ua) ||
        /(webkit)[\s\/]([\w.]+)/.exec(ua) ||
        /(opera)(?:.*version)[\s\/]([\w.]+)/.exec(ua) ||
        /(msie)[\s]([\w.]+)/.exec(ua) ||
        /(trident)\/([\w.]+)/.exec(ua) ||
        ua.indexOf('compatible') < 0 ||
        [];
    if (browser === 'version') {
        return match[2];
    }
    if (browser === 'webkit') {
        return match[1] === 'chrome' || match[1] === 'webkit';
    }
    if (browser === 'ff') {
        return match[1] === 'firefox';
    }
    if (browser === 'msie') {
        return match[1] === 'trident' || match[1] === 'msie';
    }
    return match[1] === browser;
};

// CONCATENATED MODULE: ./src/core/helpers/parse-query.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const parseQuery = (queryString) => {
    const query = {}, a = queryString.substr(1).split('&');
    for (let i = 0; i < a.length; i += 1) {
        const keyValue = a[i].split('=');
        query[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1] || '');
    }
    return query;
};

// CONCATENATED MODULE: ./src/core/helpers/convert-media-url-to-video-embed.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


const convertMediaUrlToVideoEmbed = (url, width = 400, height = 345) => {
    if (!Object(checker["t" /* isURL */])(url)) {
        return url;
    }
    const parser = document.createElement('a'), pattern1 = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;
    parser.href = url;
    if (!width) {
        width = 400;
    }
    if (!height) {
        height = 345;
    }
    const protocol = parser.protocol || '';
    switch (parser.hostname) {
        case 'www.vimeo.com':
        case 'vimeo.com':
            return pattern1.test(url)
                ? url.replace(pattern1, '<iframe width="' +
                    width +
                    '" height="' +
                    height +
                    '" src="' +
                    protocol +
                    '//player.vimeo.com/video/$1" frameborder="0" allowfullscreen></iframe>')
                : url;
        case 'youtube.com':
        case 'www.youtube.com':
        case 'youtu.be':
        case 'www.youtu.be':
            const query = parser.search
                ? parseQuery(parser.search)
                : { v: parser.pathname.substr(1) };
            return query.v
                ? '<iframe width="' +
                    width +
                    '" height="' +
                    height +
                    '" src="' +
                    protocol +
                    '//www.youtube.com/embed/' +
                    query.v +
                    '" frameborder="0" allowfullscreen></iframe>'
                : url;
    }
    return url;
};

// CONCATENATED MODULE: ./src/core/helpers/css.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const css = (element, key, value, onlyStyleMode = false) => {
    const numberFieldsReg = /^left|top|bottom|right|width|min|max|height|margin|padding|fontsize|font-size/i;
    if (Object(checker["q" /* isPlainObject */])(key) || value !== undefined) {
        const setValue = (elm, _key, _value) => {
            if (!Object(checker["w" /* isVoid */])(_value) &&
                numberFieldsReg.test(_key) &&
                Object(checker["p" /* isNumeric */])(_value.toString())) {
                _value = parseInt(_value.toString(), 10) + 'px';
            }
            if (!Object(checker["w" /* isVoid */])(_value) &&
                css(elm, _key, undefined, true) !==
                    Object(normalize["b" /* normalizeCssValue */])(_key, _value)) {
                elm.style[_key] = _value;
            }
        };
        if (Object(checker["q" /* isPlainObject */])(key)) {
            const keys = Object.keys(key);
            for (let j = 0; j < keys.length; j += 1) {
                setValue(element, Object(string["a" /* camelCase */])(keys[j]), key[keys[j]]);
            }
        }
        else {
            setValue(element, Object(string["a" /* camelCase */])(key), value);
        }
        return '';
    }
    const key2 = Object(string["c" /* kebabCase */])(key), doc = element.ownerDocument || document, win = doc ? doc.defaultView || doc.parentWindow : false;
    const currentValue = element.style[key];
    let result = '';
    if (currentValue !== undefined && currentValue !== '') {
        result = currentValue;
    }
    else if (win && !onlyStyleMode) {
        result = win.getComputedStyle(element).getPropertyValue(key2);
    }
    if (numberFieldsReg.test(key) &&
        /^[\-+]?[0-9.]+px$/.test(result.toString())) {
        result = parseInt(result.toString(), 10);
    }
    return Object(normalize["b" /* normalizeCssValue */])(key, result);
};
const clearCenterAlign = (image) => {
    if (css(image, 'display') === 'block') {
        css(image, 'display', '');
    }
    if (image.style.marginLeft === 'auto' &&
        image.style.marginRight === 'auto') {
        image.style.marginLeft = '';
        image.style.marginRight = '';
    }
};

// CONCATENATED MODULE: ./src/core/helpers/ctrl-key.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const ctrlKey = (e) => {
    if (typeof navigator !== 'undefined' &&
        navigator.userAgent.indexOf('Mac OS X') !== -1) {
        if (e.metaKey && !e.altKey) {
            return true;
        }
    }
    else if (e.ctrlKey && !e.altKey) {
        return true;
    }
    return false;
};

// EXTERNAL MODULE: ./src/core/component/index.ts
var component = __webpack_require__(8);

// CONCATENATED MODULE: ./src/core/helpers/data-bind.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


const store = new WeakMap();
const dataBind = (elm, key, value) => {
    let itemStore = store.get(elm);
    if (!itemStore) {
        itemStore = {};
        store.set(elm, itemStore);
        let e = null;
        if (elm instanceof component["c" /* ViewComponent */]) {
            e = elm.j.e;
        }
        if (Object(checker["v" /* isViewObject */])(elm)) {
            e = elm.e;
        }
        e &&
            e.on('beforeDestruct', () => {
                store.delete(elm);
            });
    }
    if (value === undefined) {
        return itemStore[key];
    }
    itemStore[key] = value;
    return value;
};

// EXTERNAL MODULE: ./src/core/helpers/default-language.ts
var default_language = __webpack_require__(28);

// CONCATENATED MODULE: ./src/core/helpers/each.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function each(obj, callback) {
    let length, keys, i;
    if (Object(checker["c" /* isArray */])(obj)) {
        length = obj.length;
        for (i = 0; i < length; i += 1) {
            if (callback.call(obj[i], i, obj[i]) === false) {
                return false;
            }
        }
    }
    else {
        keys = Object.keys(obj);
        for (i = 0; i < keys.length; i += 1) {
            if (callback.call(obj[keys[i]], keys[i], obj[keys[i]]) === false) {
                return false;
            }
        }
    }
    return true;
}

// CONCATENATED MODULE: ./src/core/helpers/human-size-to-bytes.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const humanSizeToBytes = (human) => {
    if (/^[0-9.]+$/.test(human.toString())) {
        return parseFloat(human);
    }
    const format = human.substr(-2, 2).toUpperCase(), formats = ['KB', 'MB', 'GB', 'TB'], number = parseFloat(human.substr(0, human.length - 2));
    return formats.indexOf(format) !== -1
        ? number * Math.pow(1024, formats.indexOf(format) + 1)
        : parseInt(human, 10);
};

// EXTERNAL MODULE: ./src/core/helpers/jodit-array.ts
var jodit_array = __webpack_require__(25);

// EXTERNAL MODULE: ./src/core/helpers/jodit-object.ts
var jodit_object = __webpack_require__(29);

// CONCATENATED MODULE: ./src/core/helpers/build-query.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const buildQuery = (data, prefix) => {
    const str = [];
    const enc = encodeURIComponent;
    for (const dataKey in data) {
        if (data.hasOwnProperty(dataKey)) {
            const k = prefix ? prefix + '[' + dataKey + ']' : dataKey;
            const v = data[dataKey];
            str.push(Object(checker["q" /* isPlainObject */])(v) ? buildQuery(v, k) : enc(k) + '=' + enc(v));
        }
    }
    return str.join('&');
};

// CONCATENATED MODULE: ./src/core/helpers/scroll-into-view.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const inView = (elm, root, doc) => {
    let rect = elm.getBoundingClientRect(), el = elm;
    const top = rect.top, height = rect.height;
    do {
        if (el && el.parentNode) {
            el = el.parentNode;
            rect = el.getBoundingClientRect();
            if (!(top <= rect.bottom)) {
                return false;
            }
            if (top + height <= rect.top) {
                return false;
            }
        }
    } while (el && el !== root && el.parentNode);
    return (top <= ((doc.documentElement && doc.documentElement.clientHeight) || 0));
};
const scrollIntoView = (elm, root, doc) => {
    if (!inView(elm, root, doc)) {
        if (root.clientHeight !== root.scrollHeight) {
            root.scrollTop = elm.offsetTop;
        }
        if (!inView(elm, root, doc)) {
            elm.scrollIntoView();
        }
    }
};

// CONCATENATED MODULE: ./src/core/helpers/val.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const val = (elm, selector, value) => {
    const child = elm.querySelector(selector);
    if (!child) {
        return '';
    }
    if (value) {
        child.value = value;
    }
    return child.value;
};

// CONCATENATED MODULE: ./src/core/helpers/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






























/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dom; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _plugins_keyboard_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



class Dom {
    static detach(node) {
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
    }
    static wrapInline(current, tag, editor) {
        let tmp, first = current, last = current;
        const selInfo = editor.s.save();
        let needFindNext = false;
        do {
            needFindNext = false;
            tmp = first.previousSibling;
            if (tmp && !Dom.isBlock(tmp, editor.ew)) {
                needFindNext = true;
                first = tmp;
            }
        } while (needFindNext);
        do {
            needFindNext = false;
            tmp = last.nextSibling;
            if (tmp && !Dom.isBlock(tmp, editor.ew)) {
                needFindNext = true;
                last = tmp;
            }
        } while (needFindNext);
        const wrapper = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["isString"])(tag) ? editor.createInside.element(tag) : tag;
        if (first.parentNode) {
            first.parentNode.insertBefore(wrapper, first);
        }
        let next = first;
        while (next) {
            next = first.nextSibling;
            wrapper.appendChild(first);
            if (first === last || !next) {
                break;
            }
            first = next;
        }
        editor.s.restore(selInfo);
        return wrapper;
    }
    static wrap(current, tag, editor) {
        const selInfo = editor.s.save();
        const wrapper = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["isString"])(tag) ? editor.createInside.element(tag) : tag;
        if (!current.parentNode) {
            return null;
        }
        current.parentNode.insertBefore(wrapper, current);
        wrapper.appendChild(current);
        editor.s.restore(selInfo);
        return wrapper;
    }
    static unwrap(node) {
        const parent = node.parentNode;
        if (parent) {
            while (node.firstChild) {
                parent.insertBefore(node.firstChild, node);
            }
            Dom.safeRemove(node);
        }
    }
    static each(elm, callback) {
        let node = elm.firstChild;
        if (node) {
            while (node) {
                const next = Dom.next(node, Boolean, elm);
                if (callback(node) === false) {
                    return false;
                }
                if (node.parentNode && !Dom.each(node, callback)) {
                    return false;
                }
                node = next;
            }
        }
        return true;
    }
    static replace(elm, newTagName, create, withAttributes = false, notMoveContent = false) {
        const tag = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["isString"])(newTagName)
            ? create.element(newTagName)
            : newTagName;
        if (!notMoveContent) {
            while (elm.firstChild) {
                tag.appendChild(elm.firstChild);
            }
        }
        if (withAttributes) {
            Array.from(elm.attributes).forEach(attr => {
                tag.setAttribute(attr.name, attr.value);
            });
        }
        if (elm.parentNode) {
            elm.parentNode.replaceChild(tag, elm);
        }
        return tag;
    }
    static isEmptyTextNode(node) {
        return (Dom.isText(node) &&
            (!node.nodeValue ||
                node.nodeValue.replace(_constants__WEBPACK_IMPORTED_MODULE_0__["INVISIBLE_SPACE_REG_EXP"](), '')
                    .length === 0));
    }
    static isEmpty(node, condNoEmptyElement = /^(img|svg|canvas|input|textarea|form)$/) {
        if (!node) {
            return true;
        }
        if (Dom.isText(node)) {
            return node.nodeValue === null || Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["trim"])(node.nodeValue).length === 0;
        }
        return (!condNoEmptyElement.test(node.nodeName.toLowerCase()) &&
            Dom.each(node, (elm) => {
                if ((Dom.isText(elm) &&
                    elm.nodeValue !== null &&
                    Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["trim"])(elm.nodeValue).length !== 0) ||
                    (Dom.isElement(elm) &&
                        condNoEmptyElement.test(elm.nodeName.toLowerCase()))) {
                    return false;
                }
            }));
    }
    static isNode(object, win) {
        if (!object) {
            return false;
        }
        if (typeof win === 'object' &&
            win &&
            (typeof win.Node === 'function' ||
                typeof win.Node === 'object')) {
            return object instanceof win.Node;
        }
        return false;
    }
    static isCell(elm, win) {
        return Dom.isNode(elm, win) && /^(td|th)$/i.test(elm.nodeName);
    }
    static isImage(elm, win) {
        return (Dom.isNode(elm, win) &&
            /^(img|svg|picture|canvas)$/i.test(elm.nodeName));
    }
    static isBlock(node, win) {
        return (node &&
            typeof node === 'object' &&
            Dom.isNode(node, win) &&
            _constants__WEBPACK_IMPORTED_MODULE_0__["IS_BLOCK"].test(node.nodeName));
    }
    static isText(node) {
        return Boolean(node && node.nodeType === Node.TEXT_NODE);
    }
    static isElement(node) {
        return Boolean(node && node.nodeType === Node.ELEMENT_NODE);
    }
    static isHTMLElement(node, win) {
        return (Dom.isNode(node, win) && node instanceof win.HTMLElement);
    }
    static isInlineBlock(node) {
        return (Dom.isElement(node) &&
            !/^(BR|HR)$/i.test(node.tagName) &&
            ['inline', 'inline-block'].indexOf(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["css"])(node, 'display').toString()) !== -1);
    }
    static canSplitBlock(node, win) {
        return (node &&
            node instanceof win.HTMLElement &&
            Dom.isBlock(node, win) &&
            !/^(TD|TH|CAPTION|FORM)$/.test(node.nodeName) &&
            node.style !== undefined &&
            !/^(fixed|absolute)/i.test(node.style.position));
    }
    static prev(node, condition, root, withChild = true) {
        return Dom.find(node, condition, root, false, 'previousSibling', withChild ? 'lastChild' : false);
    }
    static next(node, condition, root, withChild = true) {
        return Dom.find(node, condition, root, undefined, undefined, withChild ? 'firstChild' : false);
    }
    static prevWithClass(node, className) {
        return Dom.prev(node, node => {
            return (Dom.isElement(node) && node.classList.contains(className));
        }, node.parentNode);
    }
    static nextWithClass(node, className) {
        return Dom.next(node, elm => Dom.isElement(elm) && elm.classList.contains(className), node.parentNode);
    }
    static find(node, condition, root, recurse = false, sibling = 'nextSibling', child = 'firstChild') {
        if (recurse && condition(node)) {
            return node;
        }
        let start = node, next;
        do {
            next = start[sibling];
            if (condition(next)) {
                return next ? next : null;
            }
            if (child && next && next[child]) {
                const nextOne = Dom.find(next[child], condition, next, true, sibling, child);
                if (nextOne) {
                    return nextOne;
                }
            }
            if (!next) {
                next = start.parentNode;
            }
            start = next;
        } while (start && start !== root);
        return null;
    }
    static findWithCurrent(node, condition, root, sibling = 'nextSibling', child = 'firstChild') {
        let next = node;
        do {
            if (condition(next)) {
                return next || null;
            }
            if (child && next && next[child]) {
                const nextOne = Dom.findWithCurrent(next[child], condition, next, sibling, child);
                if (nextOne) {
                    return nextOne;
                }
            }
            while (next && !next[sibling] && next !== root) {
                next = next.parentNode;
            }
            if (next && next[sibling] && next !== root) {
                next = next[sibling];
            }
        } while (next && next !== root);
        return null;
    }
    static getNormalSibling(node, left = true, normal = (n) => !Dom.isEmptyTextNode(n)) {
        let start = Object(_plugins_keyboard_helpers__WEBPACK_IMPORTED_MODULE_2__[/* getSibling */ "c"])(node, left);
        while (start && !normal(start)) {
            start = Object(_plugins_keyboard_helpers__WEBPACK_IMPORTED_MODULE_2__[/* getSibling */ "c"])(start, left);
        }
        return start && normal(start) ? start : null;
    }
    static up(node, condition, root, checkRoot = false) {
        let start = node;
        if (!node) {
            return null;
        }
        do {
            if (condition(start)) {
                return start;
            }
            if (start === root || !start.parentNode) {
                break;
            }
            start = start.parentNode;
        } while (start && start !== root);
        if (start === root && checkRoot && condition(start)) {
            return start;
        }
        return null;
    }
    static closest(node, tagsOrCondition, root) {
        let condition;
        if (Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(tagsOrCondition)) {
            condition = tagsOrCondition;
        }
        else if (Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["isArray"])(tagsOrCondition)) {
            condition = (tag) => tag &&
                tagsOrCondition.includes(tag.nodeName.toLowerCase());
        }
        else {
            condition = (tag) => tag && tagsOrCondition === tag.nodeName.toLowerCase();
        }
        return Dom.up(node, condition, root);
    }
    static appendChildFirst(root, newElement) {
        const child = root.firstChild;
        if (child) {
            if (child !== newElement) {
                root.insertBefore(newElement, child);
            }
        }
        else {
            root.appendChild(newElement);
        }
    }
    static after(elm, newElement) {
        const { parentNode } = elm;
        if (!parentNode) {
            return;
        }
        if (parentNode.lastChild === elm) {
            parentNode.appendChild(newElement);
        }
        else {
            parentNode.insertBefore(newElement, elm.nextSibling);
        }
    }
    static before(elm, newElement) {
        const { parentNode } = elm;
        if (!parentNode) {
            return;
        }
        parentNode.insertBefore(newElement, elm);
    }
    static prepend(root, newElement) {
        root.insertBefore(newElement, root.firstChild);
    }
    static append(root, newElement) {
        root.appendChild(newElement);
    }
    static moveContent(from, to, inStart = false) {
        const fragment = (from.ownerDocument || document).createDocumentFragment();
        Array.from(from.childNodes).forEach((node) => {
            fragment.appendChild(node);
        });
        if (!inStart || !to.firstChild) {
            to.appendChild(fragment);
        }
        else {
            to.insertBefore(fragment, to.firstChild);
        }
    }
    static all(node, condition, prev = false) {
        let nodes = node.childNodes ? Array.from(node.childNodes) : [];
        if (condition(node)) {
            return node;
        }
        if (prev) {
            nodes = nodes.reverse();
        }
        nodes.forEach(child => {
            Dom.all(child, condition, prev);
        });
        return null;
    }
    static isOrContains(root, child, onlyContains = false) {
        if (root === child) {
            return !onlyContains;
        }
        return Boolean(child && root && this.up(child, nd => nd === root, root, true));
    }
    static safeRemove(node) {
        node && node.parentNode && node.parentNode.removeChild(node);
    }
    static hide(node) {
        if (!node) {
            return;
        }
        Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["dataBind"])(node, '__old_display', node.style.display);
        node.style.display = 'none';
    }
    static show(node) {
        if (!node) {
            return;
        }
        const display = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["dataBind"])(node, '__old_display');
        if (node.style.display === 'none') {
            node.style.display = display || '';
        }
    }
    static isTag(node, tagNames) {
        const tags = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["asArray"])(tagNames).map(String);
        for (let i = 0; i < tags.length; i += 1) {
            if (this.isElement(node) &&
                node.tagName.toLowerCase() === tags[i].toLowerCase()) {
                return true;
            }
        }
        return false;
    }
}
Dom.findInline = (node, toLeft, root) => {
    let prevElement = node, nextElement = null;
    do {
        if (prevElement) {
            nextElement = toLeft
                ? prevElement.previousSibling
                : prevElement.nextSibling;
            if (!nextElement &&
                prevElement.parentNode &&
                prevElement.parentNode !== root &&
                Dom.isInlineBlock(prevElement.parentNode)) {
                prevElement = prevElement.parentNode;
            }
            else {
                break;
            }
        }
        else {
            break;
        }
    } while (!nextElement);
    while (nextElement &&
        Dom.isInlineBlock(nextElement) &&
        (!toLeft ? nextElement.firstChild : nextElement.lastChild)) {
        nextElement = !toLeft
            ? nextElement.firstChild
            : nextElement.lastChild;
    }
    return nextElement;
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVISIBLE_SPACE", function() { return INVISIBLE_SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVISIBLE_SPACE_REG_EXP", function() { return INVISIBLE_SPACE_REG_EXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVISIBLE_SPACE_REG_EXP_END", function() { return INVISIBLE_SPACE_REG_EXP_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVISIBLE_SPACE_REG_EXP_START", function() { return INVISIBLE_SPACE_REG_EXP_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE_REG_EXP", function() { return SPACE_REG_EXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE_REG_EXP_START", function() { return SPACE_REG_EXP_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE_REG_EXP_END", function() { return SPACE_REG_EXP_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_BLOCK", function() { return IS_BLOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_INLINE", function() { return IS_INLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSEPARABLE_TAGS", function() { return INSEPARABLE_TAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAY_BE_REMOVED_WITH_KEY", function() { return MAY_BE_REMOVED_WITH_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_BACKSPACE", function() { return KEY_BACKSPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_TAB", function() { return KEY_TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_ENTER", function() { return KEY_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_ESC", function() { return KEY_ESC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_LEFT", function() { return KEY_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_UP", function() { return KEY_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_RIGHT", function() { return KEY_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_DOWN", function() { return KEY_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_DELETE", function() { return KEY_DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_F3", function() { return KEY_F3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEARBY", function() { return NEARBY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCURACY", function() { return ACCURACY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND_KEYS", function() { return COMMAND_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BR", function() { return BR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARAGRAPH", function() { return PARAGRAPH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODE_WYSIWYG", function() { return MODE_WYSIWYG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODE_SOURCE", function() { return MODE_SOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODE_SPLIT", function() { return MODE_SPLIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_IE", function() { return IS_IE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_LIST", function() { return URL_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_PLAIN", function() { return TEXT_PLAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_HTML", function() { return TEXT_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARKER_CLASS", function() { return MARKER_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMULATE_DBLCLICK_TIMEOUT", function() { return EMULATE_DBLCLICK_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSERT_AS_HTML", function() { return INSERT_AS_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSERT_CLEAR_HTML", function() { return INSERT_CLEAR_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSERT_AS_TEXT", function() { return INSERT_AS_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSERT_ONLY_TEXT", function() { return INSERT_ONLY_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAFE_COUNT_CHANGE_CALL", function() { return SAFE_COUNT_CHANGE_CALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_MAC", function() { return IS_MAC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_ALIASES", function() { return KEY_ALIASES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return BASE_PATH; });
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const INVISIBLE_SPACE = '\uFEFF';
const INVISIBLE_SPACE_REG_EXP = () => /[\uFEFF]/g;
const INVISIBLE_SPACE_REG_EXP_END = () => /[\uFEFF]+$/g;
const INVISIBLE_SPACE_REG_EXP_START = () => /^[\uFEFF]+/g;
const SPACE_REG_EXP = () => /[\s\n\t\r\uFEFF\u200b]+/g;
const SPACE_REG_EXP_START = () => /^[\s\n\t\r\uFEFF\u200b]+/g;
const SPACE_REG_EXP_END = () => /[\s\n\t\r\uFEFF\u200b]+$/g;
const IS_BLOCK = /^(SCRIPT|IFRAME|JODIT|JODIT-MEDIA|PRE|DIV|P|LI|UL|OL|H[1-6]|BLOCKQUOTE|TD|TH|TABLE|BODY|HTML|FIGCAPTION|FIGURE|DT|DD)$/i;
const IS_INLINE = /^(STRONG|SPAN|I|EM|B|SUP|SUB)$/i;
const INSEPARABLE_TAGS = [
    'img',
    'br',
    'iframe',
    'script',
    'input',
    'textarea',
    'hr',
    'jodit',
    'jodit-media'
];
const MAY_BE_REMOVED_WITH_KEY = RegExp(`^${INSEPARABLE_TAGS.join('|')}$`, 'i');
const KEY_BACKSPACE = 'Backspace';
const KEY_TAB = 'Tab';
const KEY_ENTER = 'Enter';
const KEY_ESC = 'Escape';
const KEY_LEFT = 'ArrowLeft';
const KEY_UP = 'ArrowUp';
const KEY_RIGHT = 'ArrowRight';
const KEY_DOWN = 'ArrowDown';
const KEY_DELETE = 'Delete';
const KEY_F3 = 'F3';
const NEARBY = 5;
const ACCURACY = 10;
const COMMAND_KEYS = [
    KEY_BACKSPACE,
    KEY_DELETE,
    KEY_UP,
    KEY_DOWN,
    KEY_RIGHT,
    KEY_LEFT,
    KEY_ENTER,
    KEY_ESC,
    KEY_F3,
    KEY_TAB
];
const BR = 'br';
const PARAGRAPH = 'p';
const MODE_WYSIWYG = 1;
const MODE_SOURCE = 2;
const MODE_SPLIT = 3;
const IS_IE = typeof navigator !== 'undefined' &&
    (navigator.userAgent.indexOf('MSIE') !== -1 ||
        /rv:11.0/i.test(navigator.userAgent));
const URL_LIST = IS_IE ? 'url' : 'text/uri-list';
const TEXT_PLAIN = IS_IE ? 'text' : 'text/plain';
const TEXT_HTML = IS_IE ? 'text' : 'text/html';
const MARKER_CLASS = 'jodit-selection_marker';
const EMULATE_DBLCLICK_TIMEOUT = 300;
const INSERT_AS_HTML = 'insert_as_html';
const INSERT_CLEAR_HTML = 'insert_clear_html';
const INSERT_AS_TEXT = 'insert_as_text';
const INSERT_ONLY_TEXT = 'insert_only_text';
const SAFE_COUNT_CHANGE_CALL = 10;
const IS_MAC = typeof window !== 'undefined' &&
    /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
const KEY_ALIASES = {
    add: '+',
    break: 'pause',
    cmd: 'meta',
    command: 'meta',
    ctl: 'control',
    ctrl: 'control',
    del: 'delete',
    down: 'arrowdown',
    esc: 'escape',
    ins: 'insert',
    left: 'arrowleft',
    mod: IS_MAC ? 'meta' : 'control',
    opt: 'alt',
    option: 'alt',
    return: 'enter',
    right: 'arrowright',
    space: ' ',
    spacebar: ' ',
    up: 'arrowup',
    win: 'meta',
    windows: 'meta'
};
const BASE_PATH = (() => {
    if (typeof document === 'undefined') {
        return '';
    }
    const script = document.currentScript, removeScriptName = (s) => s.replace(/\/[^\/]+.js$/, '/');
    if (script) {
        return removeScriptName(script.src);
    }
    const scripts = document.querySelectorAll('script[src]');
    if (scripts && scripts.length) {
        return removeScriptName(scripts[scripts.length - 1].src);
    }
    return window.location.href;
})();


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OptionsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return configFactory; });
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _core_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _core_helpers___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _modules_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




class Config {
    constructor() {
        this.iframe = false;
        this.license = '';
        this.preset = 'custom';
        this.presets = {
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
        this.ownerDocument = (typeof document !== 'undefined'
            ? document
            : null);
        this.ownerWindow = (typeof window !== 'undefined'
            ? window
            : null);
        this.shadowRoot = null;
        this.zIndex = 0;
        this.readonly = false;
        this.disabled = false;
        this.activeButtonsInReadOnly = [
            'source',
            'fullsize',
            'print',
            'about',
            'dots',
            'selectall'
        ];
        this.toolbarButtonSize = 'middle';
        this.allowTabNavigation = false;
        this.inline = false;
        this.theme = 'default';
        this.saveModeInStorage = false;
        this.saveHeightInStorage = false;
        this.spellcheck = true;
        this.editorCssClass = false;
        this.style = false;
        this.triggerChangeEvent = true;
        this.width = 'auto';
        this.minWidth = '200px';
        this.maxWidth = '100%';
        this.height = 'auto';
        this.minHeight = 200;
        this.direction = '';
        this.language = 'auto';
        this.debugLanguage = false;
        this.i18n = false;
        this.tabIndex = -1;
        this.toolbar = true;
        this.showTooltip = true;
        this.showTooltipDelay = 1000;
        this.useNativeTooltip = false;
        this.enter = _core_constants__WEBPACK_IMPORTED_MODULE_0__["PARAGRAPH"];
        this.enterBlock = this.enter !== 'br' ? this.enter : _core_constants__WEBPACK_IMPORTED_MODULE_0__["PARAGRAPH"];
        this.defaultMode = _core_constants__WEBPACK_IMPORTED_MODULE_0__["MODE_WYSIWYG"];
        this.useSplitMode = false;
        this.colors = {
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
        this.colorPickerDefaultTab = 'background';
        this.imageDefaultWidth = 300;
        this.removeButtons = [];
        this.disablePlugins = [];
        this.extraPlugins = [];
        this.extraButtons = [];
        this.createAttributes = {};
        this.sizeLG = 900;
        this.sizeMD = 700;
        this.sizeSM = 400;
        this.buttons = [
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
        this.buttonsMD = [
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
        this.buttonsSM = [
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
        this.buttonsXS = [
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
        this.events = {};
        this.textIcons = false;
        this.showBrowserColorPicker = true;
    }
    static get defaultOptions() {
        if (!Config.__defaultOptions) {
            Config.__defaultOptions = new Config();
        }
        return Config.__defaultOptions;
    }
}
const OptionsDefault = function (options, def = Config.defaultOptions) {
    const self = this;
    self.plainOptions = options;
    if (options !== undefined && typeof options === 'object') {
        const extendKey = (opt, key) => {
            if (key === 'preset') {
                if (def.presets[opt.preset] !== undefined) {
                    const preset = def.presets[opt.preset];
                    Object.keys(preset).forEach(extendKey.bind(this, preset));
                }
            }
            const defValue = def[key], isObject = typeof defValue === 'object' && defValue !== null;
            if (isObject &&
                !['ownerWindow', 'ownerDocument'].includes(key) &&
                !Object(_core_helpers___WEBPACK_IMPORTED_MODULE_2__["isArray"])(defValue)) {
                self[key] = Object(_core_helpers___WEBPACK_IMPORTED_MODULE_2__["extend"])(true, {}, defValue, opt[key]);
            }
            else {
                self[key] = opt[key];
            }
        };
        Object.keys(options).forEach(extendKey.bind(this, options));
    }
};
Config.prototype.controls = {
    print: {
        exec: (editor) => {
            const mywindow = window.open('', 'PRINT');
            if (mywindow) {
                if (editor.o.iframe) {
                    editor.e.fire('generateDocumentStructure.iframe', mywindow.document, editor);
                    mywindow.document.body.innerHTML = editor.value;
                }
                else {
                    mywindow.document.write('<!doctype html><html lang="' +
                        Object(_core_helpers___WEBPACK_IMPORTED_MODULE_2__["defaultLanguage"])(editor.o.language) +
                        '"><head><title></title></head>' +
                        '<body>' +
                        editor.value +
                        '</body></html>');
                    mywindow.document.close();
                }
                mywindow.focus();
                mywindow.print();
                mywindow.close();
            }
        },
        mode: _core_constants__WEBPACK_IMPORTED_MODULE_0__["MODE_SOURCE"] + _core_constants__WEBPACK_IMPORTED_MODULE_0__["MODE_WYSIWYG"],
        tooltip: 'Print'
    },
    hr: {
        command: 'insertHorizontalRule',
        tags: ['hr'],
        tooltip: 'Insert Horizontal Line'
    },
    image: {
        popup: (editor, current, self, close) => {
            let sourceImage = null;
            if (current &&
                !_core_dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].isText(current) &&
                _core_dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].isHTMLElement(current, editor.ew) &&
                (_core_dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].isTag(current, 'img') || Object(_core_helpers___WEBPACK_IMPORTED_MODULE_2__["$$"])('img', current).length)) {
                sourceImage = _core_dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].isTag(current, 'img')
                    ? current
                    : Object(_core_helpers___WEBPACK_IMPORTED_MODULE_2__["$$"])('img', current)[0];
            }
            const selInfo = editor.s.save();
            return Object(_modules_widget__WEBPACK_IMPORTED_MODULE_3__[/* FileSelectorWidget */ "b"])(editor, {
                filebrowser: (data) => {
                    editor.s.restore(selInfo);
                    data.files &&
                        data.files.forEach(file => editor.s.insertImage(data.baseurl + file, null, editor.o.imageDefaultWidth));
                    close();
                },
                upload: true,
                url: async (url, text) => {
                    editor.s.restore(selInfo);
                    const image = sourceImage || editor.createInside.element('img');
                    image.setAttribute('src', url);
                    image.setAttribute('alt', text);
                    if (!sourceImage) {
                        await editor.s.insertImage(image, null, editor.o.imageDefaultWidth);
                    }
                    close();
                }
            }, sourceImage, close);
        },
        tags: ['img'],
        tooltip: 'Insert Image'
    },
    file: {
        popup: (editor, current, self, close) => {
            const insert = (url, title = '') => {
                editor.s.insertNode(editor.createInside.fromHTML(`<a href="${url}" title="${title}">${title || url}</a>`));
            };
            let sourceAnchor = null;
            if (current &&
                (_core_dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].isTag(current, 'a') ||
                    _core_dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].closest(current, 'a', editor.editor))) {
                sourceAnchor = _core_dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].isTag(current, 'a')
                    ? current
                    : _core_dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].closest(current, 'a', editor.editor);
            }
            return Object(_modules_widget__WEBPACK_IMPORTED_MODULE_3__[/* FileSelectorWidget */ "b"])(editor, {
                filebrowser: (data) => {
                    data.files &&
                        data.files.forEach(file => insert(data.baseurl + file));
                    close();
                },
                upload: true,
                url: (url, text) => {
                    if (sourceAnchor) {
                        sourceAnchor.setAttribute('href', url);
                        sourceAnchor.setAttribute('title', text);
                    }
                    else {
                        insert(url, text);
                    }
                    close();
                }
            }, sourceAnchor, close, false);
        },
        tags: ['a'],
        tooltip: 'Insert file'
    },
    video: {
        popup: (editor, current, control, close) => {
            const bylink = editor.c.fromHTML(`<form class="jodit-form">
					<div class="jodit jodit-form__group">
						<input class="jodit-input" required name="code" placeholder="http://" type="url"/>
						<button class="jodit-button" type="submit">${editor.i18n('Insert')}</button>
					</div>
				</form>`), bycode = editor.c.fromHTML(`<form class="jodit-form">
									<div class="jodit-form__group">
										<textarea class="jodit-textarea" required name="code" placeholder="${editor.i18n('Embed code')}"></textarea>
										<button class="jodit-button" type="submit">${editor.i18n('Insert')}</button>
									</div>
								</form>`), tabs = [], selinfo = editor.s.save(), insertCode = (code) => {
                editor.s.restore(selinfo);
                editor.s.insertHTML(code);
                close();
            };
            tabs.push({
                icon: 'link',
                name: 'Link',
                content: bylink
            }, {
                icon: 'source',
                name: 'Code',
                content: bycode
            });
            editor.e.on(bycode, 'submit', event => {
                event.preventDefault();
                if (!Object(_core_helpers___WEBPACK_IMPORTED_MODULE_2__["trim"])(Object(_core_helpers___WEBPACK_IMPORTED_MODULE_2__["val"])(bycode, 'textarea[name=code]'))) {
                    bycode.querySelector('textarea[name=code]').focus();
                    bycode.querySelector('textarea[name=code]').classList.add('jodit_error');
                    return false;
                }
                insertCode(Object(_core_helpers___WEBPACK_IMPORTED_MODULE_2__["val"])(bycode, 'textarea[name=code]'));
                return false;
            });
            editor.e.on(bylink, 'submit', event => {
                event.preventDefault();
                if (!Object(_core_helpers___WEBPACK_IMPORTED_MODULE_2__["isURL"])(Object(_core_helpers___WEBPACK_IMPORTED_MODULE_2__["val"])(bylink, 'input[name=code]'))) {
                    bylink.querySelector('input[name=code]').focus();
                    bylink.querySelector('input[name=code]').classList.add('jodit_error');
                    return false;
                }
                insertCode(Object(_core_helpers___WEBPACK_IMPORTED_MODULE_2__["convertMediaUrlToVideoEmbed"])(Object(_core_helpers___WEBPACK_IMPORTED_MODULE_2__["val"])(bylink, 'input[name=code]')));
                return false;
            });
            return Object(_modules_widget__WEBPACK_IMPORTED_MODULE_3__[/* TabsWidget */ "c"])(editor, tabs);
        },
        tags: ['iframe'],
        tooltip: 'Insert youtube/vimeo video'
    }
};
function configFactory(options) {
    return new OptionsDefault(options);
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __extends */
/* unused harmony export __assign */
/* unused harmony export __rest */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __decorate; });
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __createBinding */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __spreadArrays */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/* unused harmony export __classPrivateFieldGet */
/* unused harmony export __classPrivateFieldSet */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ hasBrowserColorPicker; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ isArray; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ isEqual; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ isFastEqual; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ isBoolean; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ isFunction; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ isHTML; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ isHtmlFromWord; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ isInitable; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ isDestructable; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ hasContainer; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ isInt; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ isJoditObject; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* reexport */ isViewObject; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ isLicense; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ isNumber; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ isNumeric; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ isPlainObject; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* reexport */ isString; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ isURL; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* reexport */ isValidName; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* reexport */ isVoid; });
__webpack_require__.d(__webpack_exports__, "x", function() { return /* reexport */ isWindow; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ isPromise; });

// CONCATENATED MODULE: ./src/core/helpers/checker/has-browser-color-picker.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function hasBrowserColorPicker() {
    let supportsColor = true;
    try {
        const a = document.createElement('input');
        a.type = 'color';
        supportsColor =
            a.type === 'color' && typeof a.selectionStart !== 'number';
    }
    catch (e) {
        supportsColor = false;
    }
    return supportsColor;
}

// EXTERNAL MODULE: ./src/core/helpers/jodit-array.ts
var jodit_array = __webpack_require__(25);

// CONCATENATED MODULE: ./src/core/helpers/checker/is-array.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function isArray(elm) {
    return Array.isArray(elm) || elm instanceof jodit_array["a" /* JoditArray */];
}

// EXTERNAL MODULE: ./src/core/helpers/string/index.ts + 6 modules
var string = __webpack_require__(11);

// CONCATENATED MODULE: ./src/core/helpers/checker/is-equal.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function isEqual(a, b) {
    return a === b || Object(string["e" /* stringify */])(a) === Object(string["e" /* stringify */])(b);
}
function isFastEqual(a, b) {
    return a === b;
}

// CONCATENATED MODULE: ./src/core/helpers/checker/is-boolean.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isBoolean(elm) {
    return typeof elm === 'boolean';
}

// CONCATENATED MODULE: ./src/core/helpers/checker/is-function.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isFunction(value) {
    return typeof value === 'function';
}

// CONCATENATED MODULE: ./src/core/helpers/checker/is-html.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const isHTML = (str) => /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/m.test(str);

// CONCATENATED MODULE: ./src/core/helpers/checker/is-html-from-word.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isHtmlFromWord(data) {
    return (data.search(/<meta.*?Microsoft Excel\s[\d].*?>/) !== -1 ||
        data.search(/<meta.*?Microsoft Word\s[\d].*?>/) !== -1 ||
        (data.search(/style="[^"]*mso-/) !== -1 && data.search(/<font/) !== -1));
}

// EXTERNAL MODULE: ./src/core/dom.ts
var dom = __webpack_require__(1);

// CONCATENATED MODULE: ./src/core/helpers/checker/is-imp-interface.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function isInitable(value) {
    return value && isFunction(value.init);
}
function isDestructable(value) {
    return value && isFunction(value.destruct);
}
function hasContainer(value) {
    return value && dom["a" /* Dom */].isElement(value.container);
}

// CONCATENATED MODULE: ./src/core/helpers/checker/is-string.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isString(value) {
    return typeof value === 'string';
}

// CONCATENATED MODULE: ./src/core/helpers/checker/is-numeric.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function isNumeric(value) {
    if (isString(value)) {
        if (!value.match(/^([+\-])?[0-9]+(\.?)([0-9]+)?(e[0-9]+)?$/)) {
            return false;
        }
        value = parseFloat(value);
    }
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

// CONCATENATED MODULE: ./src/core/helpers/checker/is-int.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function isInt(value) {
    if (isString(value) && isNumeric(value)) {
        value = parseFloat(value);
    }
    return typeof value === 'number' && Number.isFinite(value) && !(value % 1);
}

// CONCATENATED MODULE: ./src/core/helpers/checker/is-jodit-object.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function isJoditObject(jodit) {
    return Boolean(jodit &&
        jodit instanceof Object &&
        isFunction(jodit.constructor) &&
        (jodit instanceof Jodit || jodit.isJodit));
}
function isViewObject(jodit) {
    return Boolean(jodit &&
        jodit instanceof Object &&
        isFunction(jodit.constructor) &&
        (jodit instanceof Jodit.modules.View ||
            jodit.isView));
}

// CONCATENATED MODULE: ./src/core/helpers/checker/is-license.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const isLicense = (license) => isString(license) && license.length === 32 && /^[a-z0-9]+$/.test(license);

// CONCATENATED MODULE: ./src/core/helpers/checker/is-number.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

// CONCATENATED MODULE: ./src/core/helpers/checker/is-window.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isWindow(obj) {
    return obj !== null && obj === obj.window;
}

// EXTERNAL MODULE: ./src/core/helpers/type.ts
var type = __webpack_require__(22);

// CONCATENATED MODULE: ./src/core/helpers/checker/is-plain-object.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function isPlainObject(obj) {
    if (!obj || typeof obj !== 'object' || obj.nodeType || isWindow(obj)) {
        return false;
    }
    return !(obj.constructor &&
        !type["b" /* hasOwn */].call(obj.constructor.prototype, 'isPrototypeOf'));
}

// CONCATENATED MODULE: ./src/core/helpers/checker/is-url.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isURL(str) {
    const pattern = new RegExp('^(https?:\\/\\/)' +
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$', 'i');
    return pattern.test(str);
}

// CONCATENATED MODULE: ./src/core/helpers/checker/is-valid-name.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isValidName(name) {
    if (!name.length) {
        return false;
    }
    if (/[^0-9A-Za-zа-яА-ЯЁё\w\-_.]/.test(name)) {
        return false;
    }
    return true;
}

// CONCATENATED MODULE: ./src/core/helpers/checker/is-void.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isVoid(value) {
    return value === undefined || value === null;
}

// CONCATENATED MODULE: ./src/core/helpers/checker/is-promise.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isPromise(val) {
    return val && typeof val.then === 'function';
}

// CONCATENATED MODULE: ./src/core/helpers/checker/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






















/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export boundMethod */
/* unused harmony export boundClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return autobind; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Return a descriptor removing the value and returning a getter
 * The getter will return a .bind version of the function
 * and memoize the result against a symbol on the instance
 */
function boundMethod(target, key, descriptor) {
  var fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new TypeError("@boundMethod decorator can only be applied to methods not: ".concat(_typeof(fn)));
  } // In IE11 calling Object.defineProperty has a side-effect of evaluating the
  // getter for the property which is being replaced. This causes infinite
  // recursion and an "Out of stack space" error.


  var definingProperty = false;
  return {
    configurable: true,
    get: function get() {
      // eslint-disable-next-line no-prototype-builtins
      if (definingProperty || this === target.prototype || this.hasOwnProperty(key) || typeof fn !== 'function') {
        return fn;
      }

      var boundFn = fn.bind(this);
      definingProperty = true;
      Object.defineProperty(this, key, {
        configurable: true,
        get: function get() {
          return boundFn;
        },
        set: function set(value) {
          fn = value;
          delete this[key];
        }
      });
      definingProperty = false;
      return boundFn;
    },
    set: function set(value) {
      fn = value;
    }
  };
}
/**
 * Use boundMethod to bind all methods on the target.prototype
 */

function boundClass(target) {
  // (Using reflect to get all keys including symbols)
  var keys; // Use Reflect if exists

  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    keys = Reflect.ownKeys(target.prototype);
  } else {
    keys = Object.getOwnPropertyNames(target.prototype); // Use symbols if support is provided

    if (typeof Object.getOwnPropertySymbols === 'function') {
      keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
    }
  }

  keys.forEach(function (key) {
    // Ignore special case target method
    if (key === 'constructor') {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key); // Only methods need binding

    if (typeof descriptor.value === 'function') {
      Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
    }
  });
  return target;
}
function autobind() {
  if (arguments.length === 1) {
    return boundClass.apply(void 0, arguments);
  }

  return boundMethod.apply(void 0, arguments);
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ ui_element["a" /* UIElement */]; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ ui_button["c" /* UIButtonState */]; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ ui_button["b" /* UIButton */]; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ ui_button["a" /* Button */]; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ popup["a" /* Popup */]; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ separator_UISeparator; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ group_UIGroup; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ list_UIList; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ icon["a" /* Icon */]; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ icon["b" /* createIcon */]; });

// EXTERNAL MODULE: ./src/core/ui/element.ts
var ui_element = __webpack_require__(20);

// EXTERNAL MODULE: ./src/core/ui/button/index.ts
var ui_button = __webpack_require__(13);

// EXTERNAL MODULE: ./src/core/ui/popup/index.ts + 1 modules
var popup = __webpack_require__(19);

// CONCATENATED MODULE: ./src/core/ui/separator.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class separator_UISeparator extends ui_element["a" /* UIElement */] {
}

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(4);

// EXTERNAL MODULE: ./src/core/ui/list/group.less
var list_group = __webpack_require__(136);

// EXTERNAL MODULE: ./src/core/decorators/index.ts + 4 modules
var decorators = __webpack_require__(12);

// CONCATENATED MODULE: ./src/core/ui/list/group.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




class group_UIGroup extends ui_element["a" /* UIElement */] {
    constructor() {
        super(...arguments);
        this.elements = [];
        this.buttonSize = 'middle';
    }
    update() {
        this.elements.forEach(elm => elm.update());
        this.setMod('size', this.buttonSize);
    }
    append(elm) {
        this.elements.push(elm);
        this.container.appendChild(elm.container);
        elm.parentElement = this;
        elm.update();
    }
    clear() {
        this.elements.forEach(elm => elm.destruct());
        this.elements.length = 0;
    }
    destruct() {
        this.clear();
        return super.destruct();
    }
}
Object(tslib_es6["a" /* __decorate */])([
    Object(decorators["watch"])('buttonSize')
], group_UIGroup.prototype, "update", null);

// EXTERNAL MODULE: ./src/core/ui/list/list.less
var list = __webpack_require__(137);

// EXTERNAL MODULE: ./src/core/helpers/index.ts + 30 modules
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./src/core/ui/helpers/get-control-type.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function getControlType(button, controls) {
    let buttonControl;
    if (!Object(helpers["isString"])(button)) {
        buttonControl = { name: 'empty', ...button };
        if (controls[buttonControl.name] !== undefined) {
            buttonControl = {
                ...controls[buttonControl.name],
                ...buttonControl
            };
        }
    }
    else {
        const list = button.split(/\./);
        let store = controls;
        if (list.length > 1) {
            if (controls[list[0]] !== undefined) {
                store = controls[list[0]];
                button = list[1];
            }
        }
        if (store[button] !== undefined) {
            buttonControl = { name: button, ...store[button] };
        }
        else {
            buttonControl = {
                name: button,
                command: button,
                tooltip: button
            };
        }
    }
    return buttonControl;
}

// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(3);

// EXTERNAL MODULE: ./src/core/helpers/checker/index.ts + 20 modules
var checker = __webpack_require__(5);

// CONCATENATED MODULE: ./src/core/ui/helpers/get-strong-control-types.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function getStrongControlTypes(items, controls) {
    const elements = Object(checker["c" /* isArray */])(items)
        ? items
        : Object.keys(items).map(key => {
            const value = items[key] || {};
            return {
                name: key,
                ...value
            };
        });
    return elements.map(item => getControlType(item, controls || config["a" /* Config */].defaultOptions.controls));
}

// EXTERNAL MODULE: ./src/core/component/index.ts
var component = __webpack_require__(8);

// CONCATENATED MODULE: ./src/core/ui/list/list.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */









class list_UIList extends group_UIGroup {
    constructor(jodit) {
        super(jodit);
        this.mode = 'horizontal';
        this.removeButtons = [];
        this.onChangeMode();
        if (Object(helpers["getClassName"])(this) === Object(helpers["getClassName"])(list_UIList.prototype)) {
            this.setStatus(component["b" /* STATUSES */].ready);
        }
    }
    onChangeMode() {
        this.setMod('mode', this.mode);
    }
    addGroup() {
        const group = new group_UIGroup(this.jodit);
        this.append(group);
        return group;
    }
    get buttons() {
        const walk = (elms) => elms.reduce((res, elm) => {
            if (elm instanceof group_UIGroup) {
                return res.concat(walk(elm.elements));
            }
            if (elm instanceof ui_button["b" /* UIButton */]) {
                res.push(elm);
            }
            return res;
        }, []);
        return walk(this.elements);
    }
    getButtonsNames() {
        return this.buttons
            .map(a => (a instanceof ui_button["b" /* UIButton */] && a.state.name) || '')
            .filter(a => a !== '');
    }
    setRemoveButtons(removeButtons) {
        this.removeButtons = removeButtons || [];
        return this;
    }
    build(items, target = null) {
        this.clear();
        let lastBtnSeparator = false;
        let group = this.addGroup();
        getStrongControlTypes(items, this.j.o.controls)
            .filter(b => !this.removeButtons.includes(b.name))
            .forEach(control => {
            let elm = null;
            switch (control.name) {
                case '\n':
                    group = this.addGroup();
                    break;
                case '|':
                    if (!lastBtnSeparator) {
                        lastBtnSeparator = true;
                        elm = new separator_UISeparator(this.j);
                    }
                    break;
                default:
                    lastBtnSeparator = false;
                    elm = this.makeButton(control, target);
            }
            elm && group.append(elm);
        });
        this.update();
        return this;
    }
    makeButton(control, target) {
        return new ui_button["b" /* UIButton */](this.j);
    }
}
Object(tslib_es6["a" /* __decorate */])([
    Object(decorators["watch"])('mode')
], list_UIList.prototype, "onChangeMode", null);

// EXTERNAL MODULE: ./src/core/ui/icon.ts
var icon = __webpack_require__(24);

// CONCATENATED MODULE: ./src/core/ui/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */









/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _statuses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _statuses__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _viewComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _viewComponent__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return instances; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return uniqueUid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return pluginSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return modules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return lang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eventEmitter; });
/* harmony import */ var _plugin_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _helpers___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




const instances = {};
let counter = 1;
function uniqueUid() {
    counter += 10 * (Math.random() + 1);
    return Math.round(counter).toString(16);
}
const pluginSystem = new _plugin_system__WEBPACK_IMPORTED_MODULE_0__[/* PluginSystem */ "a"]();
const modules = {};
const lang = {};
const boxes = new WeakMap();
function getContainer(jodit, classFunc, tag = 'div', inside = false) {
    const name = Object(_helpers___WEBPACK_IMPORTED_MODULE_2__["getClassName"])(classFunc.prototype);
    const data = boxes.get(jodit) || {};
    if (!data[name]) {
        const view = Object(_helpers___WEBPACK_IMPORTED_MODULE_2__["isViewObject"])(jodit) ? jodit : jodit.j;
        let c = view.c, body = jodit.od.body;
        if (inside && Object(_helpers___WEBPACK_IMPORTED_MODULE_2__["isJoditObject"])(jodit) && jodit.od !== jodit.ed) {
            c = jodit.createInside;
            body = tag === 'style' ? jodit.ed.head : jodit.ed.body;
        }
        const box = c.element(tag, {
            className: `jodit jodit-${Object(_helpers___WEBPACK_IMPORTED_MODULE_2__["kebabCase"])(name)}-container jodit-box`
        });
        box.classList.add(`jodit_theme_${view.o.theme || 'default'}`);
        body.appendChild(box);
        data[name] = box;
        jodit.hookStatus('beforeDestruct', () => {
            _dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].safeRemove(box);
            delete data[name];
            if (Object.keys(data).length) {
                boxes.delete(jodit);
            }
        });
        boxes.set(jodit, data);
    }
    return data[name];
}
const eventEmitter = new _events__WEBPACK_IMPORTED_MODULE_3__[/* EventsNative */ "b"]();


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ cns; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ markDeprecated; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ call; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ attr; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ markOwner; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ get; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ keepNames; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ getClassName; });

// CONCATENATED MODULE: ./src/core/helpers/utils/mark-deprecated.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const cns = console;
function markDeprecated(method, names = [''], ctx = null) {
    return (...args) => {
        cns.warn(`Method "${names[0]}" deprecated.` +
            (names[1] ? ` Use "${names[1]}" instead` : ''));
        return method.call(ctx, ...args);
    };
}

// EXTERNAL MODULE: ./src/core/helpers/checker/index.ts + 20 modules
var checker = __webpack_require__(5);

// CONCATENATED MODULE: ./src/core/helpers/utils/utils.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function call(func, ...args) {
    return func(...args);
}
function attr(elm, key, value) {
    if (!elm || !Object(checker["h" /* isFunction */])(elm.getAttribute)) {
        return null;
    }
    if (/^-/.test(key)) {
        const res = attr(elm, `data${key}`);
        if (res) {
            return res;
        }
        key = key.substr(1);
    }
    if (value !== undefined) {
        if (value === null) {
            elm.hasAttribute(key) && elm.removeAttribute(key);
        }
        else {
            elm.setAttribute(key, value.toString());
            return value.toString();
        }
    }
    return elm.getAttribute(key);
}
function markOwner(jodit, elm) {
    attr(elm, 'data-editor_id', jodit.id);
    !elm.component &&
        Object.defineProperty(elm, 'jodit', {
            value: jodit
        });
}

// CONCATENATED MODULE: ./src/core/helpers/utils/get.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function get(chain, obj) {
    if (!Object(checker["s" /* isString */])(chain) || !chain.length) {
        return null;
    }
    const parts = chain.split('.');
    let result = obj;
    for (const part of parts) {
        if (Object(checker["w" /* isVoid */])(result[part])) {
            return null;
        }
        result = result[part];
    }
    if (Object(checker["w" /* isVoid */])(result)) {
        return null;
    }
    return result;
}

// CONCATENATED MODULE: ./src/core/helpers/utils/get-class-name.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const keepNames = new Map();
const getClassName = (obj) => {
    if (keepNames.has(obj.constructor)) {
        return keepNames.get(obj.constructor);
    }
    if (obj.constructor.name) {
        return obj.constructor.name;
    }
    const regex = new RegExp(/^\s*function\s*(\S*)\s*\(/);
    const res = obj.constructor.toString().match(regex);
    return res ? res[1] : '';
};

// CONCATENATED MODULE: ./src/core/helpers/utils/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ camelCase; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ stringify; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ kebabCase; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ trim; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ trimInv; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ ucfirst; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ sprintf; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ i18n; });

// CONCATENATED MODULE: ./src/core/helpers/string/camel-case.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const camelCase = (key) => {
    return key.replace(/([-_])(.)/g, (m, code, letter) => {
        return letter.toUpperCase();
    });
};

// CONCATENATED MODULE: ./src/core/helpers/string/stringify.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function stringify(value, options = {}) {
    if (typeof value !== 'object') {
        return value.toString ? value.toString() : value;
    }
    const excludeKeys = new Set(options.excludeKeys);
    const map = new WeakMap();
    const r = (k, v) => {
        if (excludeKeys.has(k)) {
            return;
        }
        if (typeof v === 'object' && v !== null) {
            if (map.get(v)) {
                return '[refObject]';
            }
            map.set(v, true);
        }
        return v;
    };
    return JSON.stringify(value, r, options.prettify);
}

// CONCATENATED MODULE: ./src/core/helpers/string/kebab-case.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const kebabCase = (key) => {
    return key
        .replace(/([A-Z])([A-Z])([a-z])/g, '$1-$2$3')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
};

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__(2);

// CONCATENATED MODULE: ./src/core/helpers/string/trim.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function trim(value) {
    return value
        .replace(Object(constants["SPACE_REG_EXP_END"])(), '')
        .replace(Object(constants["SPACE_REG_EXP_START"])(), '');
}
function trimInv(value) {
    return value
        .replace(Object(constants["INVISIBLE_SPACE_REG_EXP_END"])(), '')
        .replace(Object(constants["INVISIBLE_SPACE_REG_EXP_START"])(), '');
}

// CONCATENATED MODULE: ./src/core/helpers/string/ucfirst.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const ucfirst = (value) => {
    if (!value.length) {
        return '';
    }
    return value[0].toUpperCase() + value.substr(1);
};

// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(3);

// EXTERNAL MODULE: ./src/core/helpers/default-language.ts
var default_language = __webpack_require__(28);

// EXTERNAL MODULE: ./src/core/helpers/index.ts + 30 modules
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./src/core/global.ts
var global = __webpack_require__(9);

// CONCATENATED MODULE: ./src/core/helpers/string/i18n.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




const sprintf = (str, args) => {
    if (!args || !args.length) {
        return str;
    }
    const reg = /%([sd])/g;
    let fnd = reg.exec(str);
    let res = str, i = 0;
    while (fnd && args[i] !== undefined) {
        res = res.replace(fnd[0], args[i].toString());
        i += 1;
        fnd = reg.exec(str);
    }
    return res;
};
const i18n = (key, params, options) => {
    if (!Object(helpers["isString"])(key)) {
        throw Object(helpers["error"])('i18n: Need string in first argument');
    }
    const debug = Boolean(options !== undefined && options.debugLanguage);
    let store;
    const parse = (value) => params && params.length ? sprintf(value, params) : value, defaultLanguage = Object(default_language["a" /* defaultLanguage */])(config["a" /* Config */].defaultOptions.language, config["a" /* Config */].defaultOptions.language), language = Object(default_language["a" /* defaultLanguage */])(options === null || options === void 0 ? void 0 : options.language, defaultLanguage), tryGet = (store) => {
        if (!store) {
            return;
        }
        if (Object(helpers["isString"])(store[key])) {
            return parse(store[key]);
        }
        const lcKey = key.toLowerCase();
        if (Object(helpers["isString"])(store[lcKey])) {
            return parse(store[lcKey]);
        }
        const ucfKey = Object(helpers["ucfirst"])(key);
        if (Object(helpers["isString"])(store[ucfKey])) {
            return parse(store[ucfKey]);
        }
        return;
    };
    if (global["d" /* lang */][language] !== undefined) {
        store = global["d" /* lang */][language];
    }
    else {
        if (global["d" /* lang */][defaultLanguage] !== undefined) {
            store = global["d" /* lang */][defaultLanguage];
        }
        else {
            store = global["d" /* lang */].en;
        }
    }
    const i18nOvr = options === null || options === void 0 ? void 0 : options.i18n;
    if (i18nOvr && i18nOvr[language]) {
        const result = tryGet(i18nOvr[language]);
        if (result) {
            return result;
        }
    }
    const result = tryGet(store);
    if (result) {
        return result;
    }
    if (global["d" /* lang */].en && Object(helpers["isString"])(global["d" /* lang */].en[key]) && global["d" /* lang */].en[key]) {
        return parse(global["d" /* lang */].en[key]);
    }
    if (debug) {
        return '{' + key + '}';
    }
    if (false) {}
    return parse(key);
};

// CONCATENATED MODULE: ./src/core/helpers/string/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */








/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getPropertyDescriptor", function() { return /* reexport */ watch["b" /* getPropertyDescriptor */]; });
__webpack_require__.d(__webpack_exports__, "watch", function() { return /* reexport */ watch["c" /* watch */]; });
__webpack_require__.d(__webpack_exports__, "debounce", function() { return /* reexport */ debounce; });
__webpack_require__.d(__webpack_exports__, "cache", function() { return /* reexport */ cache; });
__webpack_require__.d(__webpack_exports__, "wait", function() { return /* reexport */ wait; });
__webpack_require__.d(__webpack_exports__, "hook", function() { return /* reexport */ hook; });

// EXTERNAL MODULE: ./src/core/decorators/watch.ts
var watch = __webpack_require__(15);

// EXTERNAL MODULE: ./src/core/helpers/index.ts + 30 modules
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./src/core/component/index.ts
var core_component = __webpack_require__(8);

// CONCATENATED MODULE: ./src/core/decorators/debounce.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function debounce(timeout) {
    return (target, propertyKey) => {
        if (!Object(helpers["isFunction"])(target[propertyKey])) {
            throw Object(helpers["error"])('Handler must be a Function');
        }
        target.hookStatus(core_component["b" /* STATUSES */].ready, (component) => {
            const view = Object(helpers["isViewObject"])(component) ? component : component.j;
            component[propertyKey] = view.async.debounce(component[propertyKey].bind(component), (Object(helpers["isFunction"])(timeout) ? timeout(component) : timeout) ||
                view.defaultTimeout);
        });
    };
}

// CONCATENATED MODULE: ./src/core/decorators/cache.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function cache(target, name, descriptor) {
    const getter = descriptor.get;
    if (!getter) {
        throw Object(helpers["error"])('Getter property descriptor expected');
    }
    descriptor.get = function () {
        const value = getter.call(this);
        Object.defineProperty(this, name, {
            configurable: descriptor.configurable,
            enumerable: descriptor.enumerable,
            writable: false,
            value
        });
        return value;
    };
}

// CONCATENATED MODULE: ./src/core/decorators/wait.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function wait(condition) {
    return (target, propertyKey) => {
        if (!Object(helpers["isFunction"])(target[propertyKey])) {
            throw Object(helpers["error"])('Handler must be a Function');
        }
        target.hookStatus(core_component["b" /* STATUSES */].ready, (component) => {
            const async = Object(helpers["isViewObject"])(component)
                ? component.async
                : component.j.async;
            const realMethod = component[propertyKey];
            let timeout = 0;
            component[propertyKey] = function callProxy(...args) {
                async.clearTimeout(timeout);
                if (condition(component)) {
                    realMethod.apply(component, args);
                }
                else {
                    timeout = async.setTimeout(() => callProxy(...args), 10);
                }
            };
        });
    };
}

// CONCATENATED MODULE: ./src/core/decorators/hook.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function hook(status) {
    return (target, propertyKey) => {
        if (!Object(helpers["isFunction"])(target[propertyKey])) {
            throw Object(helpers["error"])('Handler must be a Function');
        }
        target.hookStatus(status, (component) => {
            target[propertyKey].call(component);
        });
    };
}

// CONCATENATED MODULE: ./src/core/decorators/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ ColorPickerWidget; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ TabsWidget; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ FileSelectorWidget; });

// EXTERNAL MODULE: ./src/modules/widget/color-picker/color-picker.less
var color_picker = __webpack_require__(133);

// EXTERNAL MODULE: ./src/core/helpers/index.ts + 30 modules
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./src/core/ui/index.ts + 5 modules
var ui = __webpack_require__(7);

// EXTERNAL MODULE: ./src/core/dom.ts
var dom = __webpack_require__(1);

// CONCATENATED MODULE: ./src/modules/widget/color-picker/color-picker.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




const ColorPickerWidget = (editor, callback, coldColor) => {
    const valueHex = Object(helpers["normalizeColor"])(coldColor), form = editor.c.div('jodit-color-picker'), iconPalette = editor.o.textIcons
        ? `<span>${editor.i18n('palette')}</span>`
        : ui["b" /* Icon */].get('palette'), eachColor = (colors) => {
        const stack = [];
        if (Object(helpers["isPlainObject"])(colors)) {
            Object.keys(colors).forEach(key => {
                stack.push('<div class="jodit-color-picker__group jodit-color-picker__group-' +
                    key +
                    '">');
                stack.push(eachColor(colors[key]));
                stack.push('</div>');
            });
        }
        else if (Object(helpers["isArray"])(colors)) {
            colors.forEach(color => {
                stack.push('<a ' +
                    (valueHex === color
                        ? ' class="jodit_active" '
                        : '') +
                    ' title="' +
                    color +
                    '" style="background-color:' +
                    color +
                    '" data-color="' +
                    color +
                    '" href="javascript:void(0)"></a>');
            });
        }
        return stack.join('');
    };
    form.appendChild(editor.c.fromHTML('<div class="jodit-color-picker__groups">' +
        eachColor(editor.o.colors) +
        '</div>'));
    form.appendChild(editor.c.fromHTML('<div data-ref="extra" class="jodit-color-picker__extra"></div>'));
    const { extra } = Object(helpers["refs"])(form);
    if (editor.o.showBrowserColorPicker && Object(helpers["hasBrowserColorPicker"])()) {
        extra.appendChild(editor.c.fromHTML('<div class="jodit-color-picker__native">' +
            iconPalette +
            '<input type="color" value=""/>' +
            '</div>'));
        editor.e.on(form, 'change', (e) => {
            e.stopPropagation();
            const target = e.target;
            if (!target || !target.tagName || !dom["a" /* Dom */].isTag(target, 'input')) {
                return;
            }
            const color = target.value || '';
            if (Object(helpers["isFunction"])(callback)) {
                callback(color);
            }
            e.preventDefault();
        });
    }
    editor.e.on(form, 'mousedown touchend', (e) => {
        e.stopPropagation();
        let target = e.target;
        if ((!target ||
            !target.tagName ||
            dom["a" /* Dom */].isTag(target, 'svg') ||
            dom["a" /* Dom */].isTag(target, 'path')) &&
            target.parentNode) {
            target = dom["a" /* Dom */].closest(target.parentNode, 'a', editor.editor);
        }
        if (!dom["a" /* Dom */].isTag(target, 'a')) {
            return;
        }
        const color = Object(helpers["attr"])(target, '-color') || '';
        if (callback && typeof callback === 'function') {
            callback(color);
        }
        e.preventDefault();
    });
    editor.e.fire('afterGenerateColorPicker', form, extra);
    return form;
};

// EXTERNAL MODULE: ./src/modules/widget/tabs/tabs.less
var tabs_tabs = __webpack_require__(138);

// CONCATENATED MODULE: ./src/modules/widget/tabs/tabs.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const TabsWidget = (editor, tabs, state) => {
    const box = editor.c.div('jodit-tabs'), tabBox = editor.c.div('jodit-tabs__wrapper'), buttons = editor.c.div('jodit-tabs__buttons'), nameToTab = {}, buttonList = [];
    let firstTab = '', tabcount = 0;
    box.appendChild(buttons);
    box.appendChild(tabBox);
    tabs.forEach(({ icon, name, content }) => {
        const tab = editor.c.div('jodit-tab'), button = Object(ui["a" /* Button */])(editor, icon || name, name);
        if (!firstTab) {
            firstTab = name;
        }
        buttons.appendChild(button.container);
        buttonList.push(button);
        button.container.classList.add('jodit-tabs__button', 'jodit-tabs__button_columns_' + tabs.length);
        if (!Object(helpers["isFunction"])(content)) {
            tab.appendChild(content);
        }
        else {
            tab.appendChild(editor.c.div('jodit-tab_empty'));
        }
        tabBox.appendChild(tab);
        button.onAction(() => {
            buttonList.forEach(b => {
                b.state.activated = false;
            });
            Object(helpers["$$"])('.jodit-tab', tabBox).forEach(a => {
                a.classList.remove('jodit-tab_active');
            });
            button.state.activated = true;
            tab.classList.add('jodit-tab_active');
            if (Object(helpers["isFunction"])(content)) {
                content.call(editor);
            }
            if (state) {
                state.__activeTab = name;
            }
            return false;
        });
        nameToTab[name] = {
            button,
            tab
        };
        tabcount += 1;
    });
    if (!tabcount) {
        return box;
    }
    Object(helpers["$$"])('a', buttons).forEach(a => {
        a.style.width = (100 / tabcount).toFixed(10) + '%';
    });
    const tab = !state || !state.__activeTab || !nameToTab[state.__activeTab]
        ? firstTab
        : state.__activeTab;
    nameToTab[tab].button.state.activated = true;
    nameToTab[tab].tab.classList.add('jodit-tab_active');
    return box;
};

// CONCATENATED MODULE: ./src/modules/widget/file-selector/file-selector.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const FileSelectorWidget = (editor, callbacks, elm, close, isImage = true) => {
    let currentImage;
    const tabs = [];
    if (callbacks.upload &&
        editor.o.uploader &&
        (editor.o.uploader.url || editor.o.uploader.insertImageAsBase64URI)) {
        const dragBox = editor.c.fromHTML('<div class="jodit-drag-and-drop__file-box">' +
            `<strong>${editor.i18n(isImage ? 'Drop image' : 'Drop file')}</strong>` +
            `<span><br>${editor.i18n('or click')}</span>` +
            `<input type="file" accept="${isImage ? 'image/*' : '*'}" tabindex="-1" dir="auto" multiple=""/>` +
            '</div>');
        editor.uploader.bind(dragBox, (resp) => {
            const handler = Object(helpers["isFunction"])(callbacks.upload)
                ? callbacks.upload
                : editor.o.uploader.defaultHandlerSuccess;
            if (Object(helpers["isFunction"])(handler)) {
                handler.call(editor.uploader, resp);
            }
            editor.e.fire('closeAllPopups');
        }, (error) => {
            editor.e.fire('errorMessage', error.message);
            editor.e.fire('closeAllPopups');
        });
        tabs.push({
            icon: 'upload',
            name: 'Upload',
            content: dragBox
        });
    }
    if (callbacks.filebrowser) {
        if (editor.o.filebrowser.ajax.url || editor.o.filebrowser.items.url) {
            tabs.push({
                icon: 'folder',
                name: 'Browse',
                content: () => {
                    close && close();
                    if (callbacks.filebrowser) {
                        editor.filebrowser.open(callbacks.filebrowser, isImage);
                    }
                }
            });
        }
    }
    if (callbacks.url) {
        const form = editor.c.fromHTML(`<form onsubmit="return false;" class="jodit-form">
						<div class="jodit-form__group">
							<input class="jodit-input" type="text" required name="url" placeholder="http://"/>
						</div>
						<div class="jodit-form__group">
							<input class="jodit-input" type="text" name="text" placeholder="${editor.i18n('Alternative text')}"/>
						</div>
						<div style="text-align: right"><button class="jodit-button">${editor.i18n('Insert')}</button></div>
					</form>`), button = form.querySelector('button'), url = form.querySelector('input[name=url]');
        currentImage = null;
        if (elm &&
            !dom["a" /* Dom */].isText(elm) &&
            (dom["a" /* Dom */].isTag(elm, 'img') || Object(helpers["$$"])('img', elm).length)) {
            currentImage = elm.tagName === 'IMG' ? elm : Object(helpers["$$"])('img', elm)[0];
            Object(helpers["val"])(form, 'input[name=url]', Object(helpers["attr"])(currentImage, 'src'));
            Object(helpers["val"])(form, 'input[name=text]', Object(helpers["attr"])(currentImage, 'alt'));
            button.textContent = editor.i18n('Update');
        }
        if (elm && dom["a" /* Dom */].isTag(elm, 'a')) {
            Object(helpers["val"])(form, 'input[name=url]', Object(helpers["attr"])(elm, 'href'));
            Object(helpers["val"])(form, 'input[name=text]', Object(helpers["attr"])(elm, 'title'));
            button.textContent = editor.i18n('Update');
        }
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (!Object(helpers["val"])(form, 'input[name=url]')) {
                url.focus();
                url.classList.add('jodit_error');
                return false;
            }
            if (typeof callbacks.url === 'function') {
                callbacks.url.call(editor, Object(helpers["val"])(form, 'input[name=url]'), Object(helpers["val"])(form, 'input[name=text]'));
            }
            return false;
        }, false);
        tabs.push({
            icon: 'link',
            name: 'URL',
            content: form
        });
    }
    return TabsWidget(editor, tabs);
};

// CONCATENATED MODULE: ./src/modules/widget/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPropertyDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return watch; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/*!
 *  Jodit Editor (https://xdsoft.net/jodit/)
 *  Released under MIT see LICENSE.txt in the project root for license information.
 *  Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function getPropertyDescriptor(obj, prop) {
    let desc;
    do {
        desc = Object.getOwnPropertyDescriptor(obj, prop);
        obj = Object.getPrototypeOf(obj);
    } while (!desc && obj);
    return desc;
}
function watch(observeFields) {
    return (target, propertyKey) => {
        if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(target[propertyKey])) {
            throw Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["error"])('Handler must be a Function');
        }
        const process = (component) => {
            const callback = (key, ...args) => {
                if (!component.isInDestruct) {
                    component[propertyKey](key, ...args);
                }
            };
            Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["splitArray"])(observeFields).forEach(field => {
                const parts = field.split('.'), [key] = parts;
                let value = component[key];
                if (value instanceof _events__WEBPACK_IMPORTED_MODULE_1__[/* ObserveObject */ "c"]) {
                    value.on(`change.${field}`, callback);
                }
                else if (Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value) && parts.length > 1) {
                    component[key] = _events__WEBPACK_IMPORTED_MODULE_1__[/* ObserveObject */ "c"].create(value, [key]);
                    component[key].on(`change.${field}`, callback);
                }
                else {
                    const descriptor = getPropertyDescriptor(target, key);
                    Object.defineProperty(component, key, {
                        configurable: true,
                        set(v) {
                            const oldValue = value;
                            if (oldValue === v) {
                                return;
                            }
                            value = v;
                            if (descriptor && descriptor.set) {
                                descriptor.set.call(component, v);
                            }
                            if (Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value)) {
                                value = _events__WEBPACK_IMPORTED_MODULE_1__[/* ObserveObject */ "c"].create(value, [key]);
                                value.on('change.' + field, callback);
                            }
                            callback(key, oldValue, value);
                        },
                        get() {
                            if (descriptor && descriptor.get) {
                                return descriptor.get.call(component);
                            }
                            return value;
                        }
                    });
                }
            });
        };
        if (Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(target.hookStatus)) {
            target.hookStatus(_component__WEBPACK_IMPORTED_MODULE_2__[/* STATUSES */ "b"].ready, process);
        }
        else {
            process(target);
        }
    };
}
/* harmony default export */ __webpack_exports__["a"] = (watch);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STATUSES; });
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var STATUSES;
(function (STATUSES) {
    STATUSES["beforeInit"] = "beforeInit";
    STATUSES["ready"] = "ready";
    STATUSES["beforeDestruct"] = "beforeDestruct";
    STATUSES["destructed"] = "destructed";
})(STATUSES || (STATUSES = {}));


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNeighbor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSibling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getNotSpaceSibling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return normalizeCursorPosition; });
/* harmony import */ var _core_helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _core_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _core_helpers_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




function getNeighbor(node, backspace, root) {
    return Object(_core_helpers_utils__WEBPACK_IMPORTED_MODULE_0__[/* call */ "b"])(backspace ? _core_dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].prev : _core_dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].next, node, n => { var _a; return Boolean(n && (!_core_dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].isText(n) || ((_a = n.nodeValue) === null || _a === void 0 ? void 0 : _a.length))); }, root);
}
function getSibling(node, backspace) {
    return backspace ? node.previousSibling : node.nextSibling;
}
function getNotSpaceSibling(node, backspace) {
    return _core_dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].getNormalSibling(node, backspace, n => {
        var _a;
        return (!_core_dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].isEmptyTextNode(n) &&
            Boolean(!_core_dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].isText(n) || (((_a = n.nodeValue) === null || _a === void 0 ? void 0 : _a.length) && Object(_core_helpers_string__WEBPACK_IMPORTED_MODULE_3__[/* trim */ "f"])(n.nodeValue))));
    });
}
function normalizeCursorPosition(node, backspace) {
    let sibling = _core_dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].getNormalSibling(node, backspace), anotherSibling = _core_dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].getNormalSibling(node, !backspace);
    while (_core_dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].isElement(sibling) &&
        !_core_dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].isTag(sibling, _core_constants__WEBPACK_IMPORTED_MODULE_2__["INSEPARABLE_TAGS"]) &&
        !anotherSibling) {
        if (backspace || !sibling.firstChild) {
            sibling.appendChild(node);
        }
        else {
            _core_dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].before(sibling.firstChild, node);
        }
        sibling = getSibling(node, backspace);
        anotherSibling = getSibling(node, !backspace);
    }
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ events_native_EventsNative; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ observe_object_ObserveObject; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ defaultNameSpace; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ EventHandlersStore; });

// CONCATENATED MODULE: ./src/core/events/store.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const defaultNameSpace = 'JoditEventDefaultNamespace';
class EventHandlersStore {
    constructor() {
        this.__store = {};
    }
    get(event, namespace) {
        if (this.__store[namespace] !== undefined) {
            return this.__store[namespace][event];
        }
    }
    indexOf(event, namespace, originalCallback) {
        const blocks = this.get(event, namespace);
        if (blocks) {
            for (let i = 0; i < blocks.length; i += 1) {
                if (blocks[i].originalCallback === originalCallback) {
                    return i;
                }
            }
        }
        return false;
    }
    namespaces(withoutDefault = false) {
        const nss = Object.keys(this.__store);
        return withoutDefault ? nss.filter(ns => ns !== defaultNameSpace) : nss;
    }
    events(namespace) {
        return this.__store[namespace]
            ? Object.keys(this.__store[namespace])
            : [];
    }
    set(event, namespace, data, onTop = false) {
        if (this.__store[namespace] === undefined) {
            this.__store[namespace] = {};
        }
        if (this.__store[namespace][event] === undefined) {
            this.__store[namespace][event] = [];
        }
        if (!onTop) {
            this.__store[namespace][event].push(data);
        }
        else {
            this.__store[namespace][event].unshift(data);
        }
    }
    clear() {
        delete this.__store;
        this.__store = {};
    }
}

// EXTERNAL MODULE: ./src/core/helpers/index.ts + 30 modules
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./src/core/events/events-native.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright 2013-2020 Valeriy Chupurnov https://xdsoft.net
 */


class events_native_EventsNative {
    constructor(doc) {
        this.__key = '__JoditEventsNativeNamespaces';
        this.doc = document;
        this.__stopped = [];
        this.prepareEvent = (event) => {
            if (event.cancelBubble) {
                return;
            }
            if (event.type.match(/^touch/) &&
                event.changedTouches &&
                event.changedTouches.length) {
                ['clientX', 'clientY', 'pageX', 'pageY'].forEach((key) => {
                    Object.defineProperty(event, key, {
                        value: event.changedTouches[0][key],
                        configurable: true,
                        enumerable: true
                    });
                });
            }
            if (!event.originalEvent) {
                event.originalEvent = event;
            }
            if (event.type === 'paste' &&
                event.clipboardData === undefined &&
                this.doc.defaultView.clipboardData) {
                Object.defineProperty(event, 'clipboardData', {
                    get: () => {
                        return this.doc.defaultView.clipboardData;
                    },
                    configurable: true,
                    enumerable: true
                });
            }
        };
        this.currents = [];
        this.isDestructed = false;
        if (doc) {
            this.doc = doc;
        }
        this.__key += new Date().getTime();
    }
    eachEvent(events, callback) {
        const eventParts = events.split(/[\s,]+/);
        eventParts.forEach((eventNameSpace) => {
            const eventAndNameSpace = eventNameSpace.split('.');
            const namespace = eventAndNameSpace[1] || defaultNameSpace;
            callback.call(this, eventAndNameSpace[0], namespace);
        });
    }
    getStore(subject) {
        if (!subject) {
            throw Object(helpers["error"])('Need subject');
        }
        if (subject[this.__key] === undefined) {
            const store = new EventHandlersStore();
            Object.defineProperty(subject, this.__key, {
                enumerable: false,
                configurable: true,
                value: store
            });
        }
        return subject[this.__key];
    }
    clearStore(subject) {
        if (subject[this.__key] !== undefined) {
            delete subject[this.__key];
        }
    }
    triggerNativeEvent(element, event) {
        const evt = this.doc.createEvent('HTMLEvents');
        if (typeof event === 'string') {
            evt.initEvent(event, true, true);
        }
        else {
            evt.initEvent(event.type, event.bubbles, event.cancelable);
            [
                'screenX',
                'screenY',
                'clientX',
                'clientY',
                'target',
                'srcElement',
                'currentTarget',
                'timeStamp',
                'which',
                'keyCode'
            ].forEach(property => {
                Object.defineProperty(evt, property, {
                    value: event[property],
                    enumerable: true
                });
            });
            Object.defineProperty(evt, 'originalEvent', {
                value: event,
                enumerable: true
            });
        }
        element.dispatchEvent(evt);
    }
    removeStop(currentBlocks) {
        if (currentBlocks) {
            const index = this.__stopped.indexOf(currentBlocks);
            index !== -1 && this.__stopped.splice(index, 1);
        }
    }
    isStopped(currentBlocks) {
        return (currentBlocks !== undefined &&
            this.__stopped.indexOf(currentBlocks) !== -1);
    }
    get current() {
        return this.currents[this.currents.length - 1];
    }
    on(subjectOrEvents, eventsOrCallback, handlerOrSelector, onTop = false) {
        const subject = Object(helpers["isString"])(subjectOrEvents) ? this : subjectOrEvents;
        const events = Object(helpers["isString"])(eventsOrCallback)
            ? eventsOrCallback
            : subjectOrEvents;
        let callback = handlerOrSelector;
        if (callback === undefined && Object(helpers["isFunction"])(eventsOrCallback)) {
            callback = eventsOrCallback;
        }
        const store = this.getStore(subject);
        if (!Object(helpers["isString"])(events) || events === '') {
            throw Object(helpers["error"])('Need events names');
        }
        if (!Object(helpers["isFunction"])(callback)) {
            throw Object(helpers["error"])('Need event handler');
        }
        if (Object(helpers["isArray"])(subject)) {
            subject.forEach((subj) => {
                this.on(subj, events, callback, onTop);
            });
            return this;
        }
        const isDOMElement = Object(helpers["isFunction"])(subject.addEventListener), self = this;
        let syntheticCallback = function (event) {
            return callback && callback.apply(this, arguments);
        };
        if (isDOMElement) {
            syntheticCallback = function (event) {
                self.prepareEvent(event);
                if (callback && callback.call(this, event) === false) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    return false;
                }
                return;
            };
        }
        this.eachEvent(events, (event, namespace) => {
            if (event === '') {
                throw Object(helpers["error"])('Need event name');
            }
            if (store.indexOf(event, namespace, callback) === false) {
                const block = {
                    event,
                    originalCallback: callback,
                    syntheticCallback
                };
                store.set(event, namespace, block, onTop);
                if (isDOMElement) {
                    subject.addEventListener(event, syntheticCallback, false);
                }
            }
        });
        return this;
    }
    off(subjectOrEvents, eventsOrCallback, handler) {
        const subject = Object(helpers["isString"])(subjectOrEvents)
            ? this
            : subjectOrEvents;
        const events = Object(helpers["isString"])(eventsOrCallback)
            ? eventsOrCallback
            : subjectOrEvents;
        const store = this.getStore(subject);
        let callback = handler;
        if (!Object(helpers["isString"])(events) || !events) {
            store.namespaces().forEach((namespace) => {
                this.off(subject, '.' + namespace);
            });
            this.clearStore(subject);
            return this;
        }
        if (callback === undefined && Object(helpers["isFunction"])(eventsOrCallback)) {
            callback = eventsOrCallback;
        }
        const isDOMElement = Object(helpers["isFunction"])(subject.removeEventListener), removeEventListener = (block) => {
            if (isDOMElement) {
                subject.removeEventListener(block.event, block.syntheticCallback, false);
            }
        }, removeCallbackFromNameSpace = (event, namespace) => {
            if (event !== '') {
                const blocks = store.get(event, namespace);
                if (blocks && blocks.length) {
                    if (!Object(helpers["isFunction"])(callback)) {
                        blocks.forEach(removeEventListener);
                        blocks.length = 0;
                    }
                    else {
                        const index = store.indexOf(event, namespace, callback);
                        if (index !== false) {
                            removeEventListener(blocks[index]);
                            blocks.splice(index, 1);
                        }
                    }
                }
            }
            else {
                store.events(namespace).forEach((eventName) => {
                    if (eventName !== '') {
                        removeCallbackFromNameSpace(eventName, namespace);
                    }
                });
            }
        };
        this.eachEvent(events, (event, namespace) => {
            if (namespace === defaultNameSpace) {
                store.namespaces().forEach((name) => {
                    removeCallbackFromNameSpace(event, name);
                });
            }
            else {
                removeCallbackFromNameSpace(event, namespace);
            }
        });
        return this;
    }
    stopPropagation(subjectOrEvents, eventsList) {
        const subject = Object(helpers["isString"])(subjectOrEvents)
            ? this
            : subjectOrEvents;
        const events = Object(helpers["isString"])(subjectOrEvents)
            ? subjectOrEvents
            : eventsList;
        if (typeof events !== 'string') {
            throw Object(helpers["error"])('Need event names');
        }
        const store = this.getStore(subject);
        this.eachEvent(events, (event, namespace) => {
            const blocks = store.get(event, namespace);
            if (blocks) {
                this.__stopped.push(blocks);
            }
            if (namespace === defaultNameSpace) {
                store
                    .namespaces(true)
                    .forEach(ns => this.stopPropagation(subject, event + '.' + ns));
            }
        });
    }
    fire(subjectOrEvents, eventsList, ...args) {
        let result, result_value;
        const subject = Object(helpers["isString"])(subjectOrEvents)
            ? this
            : subjectOrEvents;
        const events = Object(helpers["isString"])(subjectOrEvents)
            ? subjectOrEvents
            : eventsList;
        const argumentsList = Object(helpers["isString"])(subjectOrEvents)
            ? [eventsList, ...args]
            : args;
        const isDOMElement = Object(helpers["isFunction"])(subject.dispatchEvent);
        if (!isDOMElement && !Object(helpers["isString"])(events)) {
            throw Object(helpers["error"])('Need events names');
        }
        const store = this.getStore(subject);
        if (!Object(helpers["isString"])(events) && isDOMElement) {
            this.triggerNativeEvent(subject, eventsList);
        }
        else {
            this.eachEvent(events, (event, namespace) => {
                if (isDOMElement) {
                    this.triggerNativeEvent(subject, event);
                }
                else {
                    const blocks = store.get(event, namespace);
                    if (blocks) {
                        try {
                            [...blocks].every((block) => {
                                if (this.isStopped(blocks)) {
                                    return false;
                                }
                                this.currents.push(event);
                                result_value = block.syntheticCallback.apply(subject, argumentsList);
                                this.currents.pop();
                                if (result_value !== undefined) {
                                    result = result_value;
                                }
                                return true;
                            });
                        }
                        catch (e) {
                            throw e;
                        }
                        finally {
                            this.removeStop(blocks);
                        }
                    }
                    if (namespace === defaultNameSpace && !isDOMElement) {
                        store
                            .namespaces()
                            .filter(ns => ns !== namespace)
                            .forEach((ns) => {
                            const result_second = this.fire.apply(this, [
                                subject,
                                event + '.' + ns,
                                ...argumentsList
                            ]);
                            if (result_second !== undefined) {
                                result = result_second;
                            }
                        });
                    }
                }
            });
        }
        return result;
    }
    destruct() {
        if (!this.isDestructed) {
            return;
        }
        this.isDestructed = true;
        this.off(this);
        this.getStore(this).clear();
        delete this[this.__key];
    }
}

// CONCATENATED MODULE: ./src/core/events/observe-object.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright 2013-2020 Valeriy Chupurnov https://xdsoft.net
 */

class observe_object_ObserveObject {
    constructor(data, prefix = [], onEvents = {}) {
        this.data = data;
        this.prefix = prefix;
        this.onEvents = onEvents;
        this.__lockEvent = {};
        Object.keys(data).forEach(key => {
            const prefix = this.prefix.concat(key).filter(a => a.length);
            Object.defineProperty(this, key, {
                set: value => {
                    const oldValue = data[key];
                    if (!Object(helpers["isFastEqual"])(oldValue, value)) {
                        this.fire([
                            'beforeChange',
                            `beforeChange.${prefix.join('.')}`
                        ], key, value);
                        if (Object(helpers["isPlainObject"])(value)) {
                            value = new observe_object_ObserveObject(value, prefix, this.onEvents);
                        }
                        data[key] = value;
                        const sum = [];
                        this.fire([
                            'change',
                            ...prefix.reduce((rs, p) => {
                                sum.push(p);
                                rs.push(`change.${sum.join('.')}`);
                                return rs;
                            }, [])
                        ], prefix.join('.'), oldValue, value.valueOf ? value.valueOf() : value);
                    }
                },
                get: () => {
                    return data[key];
                }
            });
            if (Object(helpers["isPlainObject"])(data[key])) {
                data[key] = new observe_object_ObserveObject(data[key], prefix, this.onEvents);
            }
        });
    }
    valueOf() {
        return this.data;
    }
    toString() {
        return JSON.stringify(this.valueOf());
    }
    on(event, callback) {
        if (Object(helpers["isArray"])(event)) {
            event.map(e => this.on(e, callback));
            return this;
        }
        if (!this.onEvents[event]) {
            this.onEvents[event] = [];
        }
        this.onEvents[event].push(callback);
        return this;
    }
    fire(event, ...attr) {
        if (Object(helpers["isArray"])(event)) {
            event.map(e => this.fire(e, ...attr));
            return;
        }
        try {
            if (!this.__lockEvent[event] && this.onEvents[event]) {
                this.__lockEvent[event] = true;
                this.onEvents[event].forEach(clb => clb.call(this, ...attr));
            }
        }
        catch (e) {
            throw e;
        }
        finally {
            this.__lockEvent[event] = false;
        }
    }
    static create(data, prefix = []) {
        if (data instanceof observe_object_ObserveObject) {
            return data;
        }
        return new observe_object_ObserveObject(data, prefix);
    }
}

// CONCATENATED MODULE: ./src/core/events/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ popup_Popup; });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(4);

// EXTERNAL MODULE: ./src/core/ui/popup/popup.less
var popup = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/autobind-decorator/lib/esm/index.js
var esm = __webpack_require__(6);

// EXTERNAL MODULE: ./src/core/dom.ts
var dom = __webpack_require__(1);

// EXTERNAL MODULE: ./src/core/helpers/index.ts + 30 modules
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./src/core/global.ts
var global = __webpack_require__(9);

// EXTERNAL MODULE: ./src/core/ui/index.ts + 5 modules
var ui = __webpack_require__(7);

// CONCATENATED MODULE: ./src/core/ui/popup/popup.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







class popup_Popup extends ui["f" /* UIElement */] {
    constructor(jodit) {
        super(jodit);
        this.isOpened = false;
        this.strategy = 'leftBottom';
        this.viewBound = () => ({
            left: 0,
            top: 0,
            width: this.ow.innerWidth,
            height: this.ow.innerHeight
        });
        this.childrenPopups = new Set();
        Object(helpers["attr"])(this.container, 'role', 'popup');
    }
    updateParentElement(target) {
        if (target !== this && target instanceof popup_Popup) {
            this.childrenPopups.forEach(popup => {
                if (!target.closest(popup) && popup.isOpened) {
                    popup.close();
                }
            });
            if (!this.childrenPopups.has(target)) {
                this.j.e.on(target, 'beforeClose', () => {
                    this.childrenPopups.delete(target);
                });
            }
            this.childrenPopups.add(target);
        }
        return super.updateParentElement(target);
    }
    setContent(content) {
        dom["a" /* Dom */].detach(this.container);
        const box = this.j.c.div(`${this.componentName}__content`);
        let elm;
        if (content instanceof ui["f" /* UIElement */]) {
            elm = content.container;
            content.parentElement = this;
        }
        else if (Object(helpers["isString"])(content)) {
            elm = this.j.c.fromHTML(content);
        }
        else {
            elm = content;
        }
        box.appendChild(elm);
        this.container.appendChild(box);
        this.updatePosition();
        return this;
    }
    open(getBound, keepPosition = false) {
        Object(helpers["markOwner"])(this.jodit, this.container);
        this.isOpened = true;
        this.addGlobalListeners();
        this.targetBound = !keepPosition
            ? getBound
            : this.getKeepBound(getBound);
        const parentContainer = Object(global["b" /* getContainer */])(this.jodit, popup_Popup);
        if (parentContainer !== this.container.parentElement) {
            parentContainer.appendChild(this.container);
        }
        this.updatePosition();
        this.j.e.fire(this, 'afterOpen');
        return this;
    }
    getKeepBound(getBound) {
        const oldBound = getBound();
        const elmUnderCursor = this.od.elementFromPoint(oldBound.left, oldBound.top);
        if (!elmUnderCursor) {
            return getBound;
        }
        const element = dom["a" /* Dom */].isHTMLElement(elmUnderCursor, this.ow)
            ? elmUnderCursor
            : elmUnderCursor.parentElement;
        const oldPos = Object(helpers["position"])(element, this.j);
        return () => {
            const bound = getBound();
            const newPos = Object(helpers["position"])(element, this.j);
            return {
                ...bound,
                top: bound.top + (newPos.top - oldPos.top),
                left: bound.left + (newPos.left - oldPos.left)
            };
        };
    }
    updatePosition() {
        if (!this.isOpened) {
            return this;
        }
        const [pos, strategy] = this.calculatePosition(this.targetBound(), this.viewBound(), Object(helpers["position"])(this.container, this.j));
        this.setMod('strategy', strategy);
        Object(helpers["css"])(this.container, {
            left: pos.left,
            top: pos.top
        });
        this.childrenPopups.forEach(popup => popup.updatePosition());
        return this;
    }
    calculatePosition(target, view, container, defaultStrategy = this.strategy) {
        const x = {
            left: target.left,
            right: target.left - (container.width - target.width)
        }, y = {
            bottom: target.top + target.height,
            top: target.top - container.height
        };
        const list = Object.keys(x).reduce((keys, xKey) => keys.concat(Object.keys(y).map(yKey => `${xKey}${Object(helpers["ucfirst"])(yKey)}`)), []);
        const getPointByStrategy = (strategy) => {
            const [xKey, yKey] = Object(helpers["kebabCase"])(strategy).split('-');
            return {
                left: x[xKey],
                top: y[yKey],
                width: container.width,
                height: container.height
            };
        };
        const getMatchStrategy = (inBox) => {
            let strategy = null;
            if (popup_Popup.boxInView(getPointByStrategy(defaultStrategy), inBox)) {
                strategy = defaultStrategy;
            }
            else {
                strategy =
                    list.find((key) => {
                        if (popup_Popup.boxInView(getPointByStrategy(key), inBox)) {
                            return key;
                        }
                        return;
                    }) || null;
            }
            return strategy;
        };
        let strategy = getMatchStrategy(Object(helpers["position"])(this.j.container, this.j));
        if (!strategy || !popup_Popup.boxInView(getPointByStrategy(strategy), view)) {
            strategy = getMatchStrategy(view) || strategy || defaultStrategy;
        }
        return [getPointByStrategy(strategy), strategy];
    }
    static boxInView(box, view) {
        const accuracy = 2;
        return (box.top - view.top >= -accuracy &&
            box.left - view.left >= -accuracy &&
            view.top + view.height - (box.top + box.height) >= -accuracy &&
            view.left + view.width - (box.left + box.width) >= -accuracy);
    }
    close() {
        if (!this.isOpened) {
            return this;
        }
        this.isOpened = false;
        this.childrenPopups.forEach(popup => popup.close());
        this.j.e.fire(this, 'beforeClose');
        this.removeGlobalListeners();
        dom["a" /* Dom */].safeRemove(this.container);
        return this;
    }
    closeOnOutsideClick(e) {
        if (!this.isOpened) {
            return;
        }
        if (!e.target) {
            this.close();
            return;
        }
        const box = ui["f" /* UIElement */].closestElement(e.target, popup_Popup);
        if (box && (this === box || box.closest(this))) {
            return;
        }
        this.close();
    }
    addGlobalListeners() {
        const up = this.updatePosition, ow = this.ow;
        global["a" /* eventEmitter */].on('closeAllPopups', this.close);
        this.j.e
            .on('closeAllPopups', this.close)
            .on('escape', this.close)
            .on('resize', up)
            .on(this.container, 'scroll mousewheel', up)
            .on('mousedown touchstart', this.closeOnOutsideClick)
            .on(ow, 'mousedown touchstart', this.closeOnOutsideClick)
            .on(ow, 'scroll', up)
            .on(ow, 'resize', up);
    }
    removeGlobalListeners() {
        const up = this.updatePosition, ow = this.ow;
        global["a" /* eventEmitter */].off('closeAllPopups', this.close);
        this.j.e
            .off('closeAllPopups', this.close)
            .off('escape', this.close)
            .off('resize', up)
            .off(this.container, 'scroll mousewheel', up)
            .off('mousedown touchstart', this.closeOnOutsideClick)
            .off(ow, 'mousedown touchstart', this.closeOnOutsideClick)
            .off(ow, 'scroll', up)
            .off(ow, 'resize', up);
    }
    destruct() {
        this.close();
        return super.destruct();
    }
}
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], popup_Popup.prototype, "updatePosition", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], popup_Popup.prototype, "close", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], popup_Popup.prototype, "closeOnOutsideClick", null);

// CONCATENATED MODULE: ./src/core/ui/popup/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIElement; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



class UIElement extends _component__WEBPACK_IMPORTED_MODULE_0__[/* ViewComponent */ "c"] {
    constructor(jodit) {
        super(jodit);
        this.__parentElement = null;
        this.mods = {};
        this.container = this.createContainer();
        Object.defineProperty(this.container, 'component', {
            value: this
        });
        if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[/* getClassName */ "e"])(this) === Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[/* getClassName */ "e"])(UIElement.prototype)) {
            this.setStatus(_component__WEBPACK_IMPORTED_MODULE_0__[/* STATUSES */ "b"].ready);
        }
    }
    get parentElement() {
        return this.__parentElement;
    }
    set parentElement(parentElement) {
        this.__parentElement = parentElement;
        if (parentElement) {
            parentElement.hookStatus('beforeDestruct', () => this.destruct());
        }
        this.updateParentElement(this);
    }
    updateParentElement(target) {
        var _a;
        (_a = this.__parentElement) === null || _a === void 0 ? void 0 : _a.updateParentElement(target);
        return this;
    }
    closest(type) {
        const c = typeof type === 'object'
            ? (pe) => pe === type
            : (pe) => pe instanceof type;
        let pe = this.__parentElement;
        while (pe) {
            if (c(pe)) {
                return pe;
            }
            pe = pe.parentElement;
        }
        return null;
    }
    static closestElement(node, type) {
        const elm = _dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].up(node, node => {
            if (node) {
                const { component } = node;
                return component && component instanceof type;
            }
            return false;
        });
        return elm ? elm === null || elm === void 0 ? void 0 : elm.component : null;
    }
    setMod(name, value, container = this.container) {
        name = name.toLowerCase();
        if (this.mods[name] === value) {
            return this;
        }
        const mod = `${this.componentName}_${name}`, cl = container.classList;
        Array.from(cl).forEach(className => {
            if (className.indexOf(mod) === 0) {
                cl.remove(className);
            }
        });
        value !== null &&
            value !== '' &&
            cl.add(`${mod}_${value.toString().toLowerCase()}`);
        this.mods[name] = value;
        return this;
    }
    update() {
    }
    appendTo(element) {
        element.appendChild(this.container);
        return this;
    }
    clearName(name) {
        return name.replace(/[^a-zA-Z0-9]/g, '_');
    }
    createContainer() {
        return this.j.c.div(this.componentName);
    }
    destruct() {
        _dom__WEBPACK_IMPORTED_MODULE_1__[/* Dom */ "a"].safeRemove(this.container);
        this.parentElement = null;
        return super.destruct();
    }
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ normalizeKeyAliases; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ normalizeLicense; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ normalizeNode; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ normalizePath; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ normalizeRelativePath; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ normalizeSize; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ normalizeUrl; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ normalizeCssValue; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ normalizeColor; });

// EXTERNAL MODULE: ./src/core/helpers/string/index.ts + 6 modules
var string = __webpack_require__(11);

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__(2);

// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-key-aliases.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function normalizeKeyAliases(keys) {
    const memory = {};
    return keys
        .replace(/\+\+/g, '+add')
        .split(/[\s]*\+[\s]*/)
        .map(key => Object(string["f" /* trim */])(key.toLowerCase()))
        .map(key => constants["KEY_ALIASES"][key] || key)
        .sort()
        .filter(key => !memory[key] && key !== '' && (memory[key] = true))
        .join('+');
}

// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-license.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const normalizeLicense = (license, count = 8) => {
    const parts = [];
    while (license.length) {
        parts.push(license.substr(0, count));
        license = license.substr(count);
    }
    parts[1] = parts[1].replace(/./g, '*');
    parts[2] = parts[2].replace(/./g, '*');
    return parts.join('-');
};

// EXTERNAL MODULE: ./src/core/dom.ts
var dom = __webpack_require__(1);

// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-node.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


const normalizeNode = (node) => {
    if (!node) {
        return;
    }
    if (dom["a" /* Dom */].isText(node) && node.nodeValue !== null && node.parentNode) {
        while (dom["a" /* Dom */].isText(node.nextSibling)) {
            if (node.nextSibling.nodeValue !== null) {
                node.nodeValue += node.nextSibling.nodeValue;
            }
            node.nodeValue = node.nodeValue.replace(Object(constants["INVISIBLE_SPACE_REG_EXP"])(), '');
            dom["a" /* Dom */].safeRemove(node.nextSibling);
        }
    }
    else {
        normalizeNode(node.firstChild);
    }
    normalizeNode(node.nextSibling);
};

// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-path.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const normalizePath = (...path) => {
    return path
        .filter(part => Object(string["f" /* trim */])(part).length)
        .map((part, index) => {
        part = part.replace(/([^:])[\\\/]+/g, '$1/');
        if (index) {
            part = part.replace(/^\//, '');
        }
        if (index !== path.length - 1) {
            part = part.replace(/\/$/, '');
        }
        return part;
    })
        .join('/');
};

// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-relative-path.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const normalizeRelativePath = (path) => {
    const sections = path.split('/'), builder = sections.reduce((builder, section) => {
        switch (section) {
            case '': {
                break;
            }
            case '.': {
                break;
            }
            case '..': {
                builder.pop();
                break;
            }
            default: {
                builder.push(section);
                break;
            }
        }
        return builder;
    }, []);
    return builder.join('/') + (path.endsWith('/') ? '/' : '');
};

// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-size.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const normalizeSize = (value) => {
    if (/^[0-9]+$/.test(value.toString())) {
        return value + 'px';
    }
    return value.toString();
};

// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-url.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const normalizeUrl = (...urls) => {
    return urls
        .filter(url => url.length)
        .map(url => url.replace(/\/$/, ''))
        .join('/')
        .replace(/([^:])[\\\/]+/g, '$1/');
};

// EXTERNAL MODULE: ./src/core/helpers/checker/index.ts + 20 modules
var checker = __webpack_require__(5);

// EXTERNAL MODULE: ./src/core/helpers/color/index.ts + 1 modules
var helpers_color = __webpack_require__(27);

// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-css-value.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function normalizeCssValue(key, value) {
    switch (Object(string["c" /* kebabCase */])(key)) {
        case 'font-weight':
            switch (value.toString().toLowerCase()) {
                case '700':
                case 'bold':
                    return 700;
                case '400':
                case 'normal':
                    return 400;
                case '900':
                case 'heavy':
                    return 900;
            }
            return Object(checker["p" /* isNumeric */])(value) ? +value : value;
    }
    if (/color/i.test(key)) {
        return Object(helpers_color["a" /* colorToHex */])(value.toString()) || value;
    }
    return value;
}

// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-color.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


const normalizeColor = (colorInput) => {
    const newcolor = ['#'];
    let color = Object(helpers_color["a" /* colorToHex */])(colorInput);
    if (!color) {
        return false;
    }
    color = Object(string["f" /* trim */])(color.toUpperCase());
    color = color.substr(1);
    if (color.length === 3) {
        for (let i = 0; i < 3; i += 1) {
            newcolor.push(color[i]);
            newcolor.push(color[i]);
        }
        return newcolor.join('');
    }
    if (color.length > 6) {
        color = color.substr(0, 6);
    }
    return '#' + color;
};

// CONCATENATED MODULE: ./src/core/helpers/normalize/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */











/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return error; });
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const class2type = {};
const toString = class2type.toString;
const hasOwn = class2type.hasOwnProperty;
[
    'Boolean',
    'Number',
    'String',
    'Function',
    'Array',
    'Date',
    'RegExp',
    'Object',
    'Error',
    'Symbol',
    'HTMLDocument',
    'Window',
    'HTMLElement',
    'HTMLBodyElement',
    'Text',
    'DocumentFragment',
    'DOMStringList',
    'HTMLCollection'
].forEach(name => {
    class2type['[object ' + name + ']'] = name.toLowerCase();
});
const type = (obj) => {
    if (obj === null) {
        return 'null';
    }
    return typeof obj === 'object' || typeof obj === 'function'
        ? class2type[toString.call(obj)] || 'object'
        : typeof obj;
};
function error(message) {
    return new TypeError(message);
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UIButtonState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UIButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _button_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);
/* harmony import */ var _button_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var autobind_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _core_decorators_watch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */










const UIButtonState = () => ({
    size: 'middle',
    name: '',
    status: '',
    disabled: false,
    activated: false,
    icon: {
        name: 'empty',
        fill: '',
        iconURL: ''
    },
    tooltip: '',
    text: '',
    tabIndex: -1
});
class UIButton extends _element__WEBPACK_IMPORTED_MODULE_3__[/* UIElement */ "a"] {
    constructor(jodit) {
        super(jodit);
        this.isButton = true;
        this.state = UIButtonState();
        this.actionHandlers = [];
        this.updateSize();
        this.onChangeSize();
        this.onChangeStatus();
        if (Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getClassName"])(this) === Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getClassName"])(UIButton.prototype)) {
            this.setStatus(_component__WEBPACK_IMPORTED_MODULE_5__[/* STATUSES */ "b"].ready);
        }
    }
    setState(state) {
        Object.assign(this.state, state);
        return this;
    }
    onChangeSize() {
        this.setMod('size', this.state.size);
    }
    updateSize() {
        const pe = this.closest(___WEBPACK_IMPORTED_MODULE_9__[/* UIList */ "h"]);
        if (pe) {
            this.state.size = pe.buttonSize;
            return;
        }
    }
    onChangeStatus() {
        this.setMod('status', this.state.status);
    }
    onChangeText() {
        this.text.textContent = this.jodit.i18n(this.state.text);
    }
    onChangeTextSetMode() {
        this.setMod('text-icons', Boolean(this.state.text.trim().length));
    }
    onChangeDisabled() {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["attr"])(this.container, 'disabled', this.state.disabled || null);
    }
    onChangeActivated() {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["attr"])(this.container, 'aria-pressed', this.state.activated);
    }
    onChangeName() {
        this.container.classList.add(`${this.componentName}_${this.clearName(this.state.name)}`);
    }
    onChangeTooltip() {
        if (this.get('j.o.useNativeTooltip')) {
            Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["attr"])(this.container, 'title', this.state.tooltip);
        }
        Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["attr"])(this.container, 'aria-label', this.state.tooltip);
    }
    onChangeTabIndex() {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["attr"])(this.container, 'tabIndex', this.state.tabIndex);
    }
    onChangeIcon() {
        if (this.get('j.o.textIcons')) {
            return;
        }
        _dom__WEBPACK_IMPORTED_MODULE_6__[/* Dom */ "a"].detach(this.icon);
        const { jodit, state } = this;
        let iconElement;
        if (state.icon) {
            if (state.icon.iconURL) {
                iconElement = this.j.c.span();
                Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["css"])(iconElement, 'backgroundImage', 'url(' +
                    state.icon.iconURL.replace('{basePath}', (jodit === null || jodit === void 0 ? void 0 : jodit.basePath) || '') +
                    ')');
            }
            else {
                const svg = _icon__WEBPACK_IMPORTED_MODULE_8__[/* Icon */ "a"].get(this.state.icon.name, '');
                if (svg) {
                    iconElement = this.j.c.fromHTML(svg.trim());
                    iconElement.classList.add('jodit-icon_' + this.clearName(this.state.icon.name));
                }
            }
        }
        if (iconElement) {
            iconElement.classList.add('jodit-icon');
            iconElement.style.fill = state.icon.fill;
            this.icon.appendChild(iconElement);
        }
    }
    focus() {
        this.container.focus();
    }
    isFocused() {
        const { activeElement } = this.od;
        return Boolean(activeElement && _dom__WEBPACK_IMPORTED_MODULE_6__[/* Dom */ "a"].isOrContains(this.container, activeElement));
    }
    createContainer() {
        const cn = this.componentName;
        const button = this.j.c.element('button', {
            class: cn,
            type: 'button',
            role: 'button',
            ariaPressed: false
        });
        this.icon = this.j.c.span(cn + '__icon');
        this.text = this.j.c.span(cn + '__text');
        button.appendChild(this.icon);
        button.appendChild(this.text);
        this.j.e.on(button, `click`, this.onActionFire);
        return button;
    }
    destruct() {
        this.j.e.off(this.container);
        return super.destruct();
    }
    onAction(callback) {
        this.actionHandlers.push(callback);
        return this;
    }
    onActionFire(e) {
        e.buffer = {
            actionTrigger: this
        };
        this.actionHandlers.forEach(callback => callback.call(this, e));
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "a"])([
    Object(_core_decorators_watch__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])('state.size')
], UIButton.prototype, "onChangeSize", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "a"])([
    Object(_core_decorators_watch__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])('parentElement')
], UIButton.prototype, "updateSize", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "a"])([
    Object(_core_decorators_watch__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])('state.status')
], UIButton.prototype, "onChangeStatus", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "a"])([
    Object(_core_decorators_watch__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])('state.text')
], UIButton.prototype, "onChangeText", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "a"])([
    Object(_core_decorators_watch__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])('state.text')
], UIButton.prototype, "onChangeTextSetMode", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "a"])([
    Object(_core_decorators_watch__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])('state.disabled')
], UIButton.prototype, "onChangeDisabled", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "a"])([
    Object(_core_decorators_watch__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])('state.activated')
], UIButton.prototype, "onChangeActivated", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "a"])([
    Object(_core_decorators_watch__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])('state.name')
], UIButton.prototype, "onChangeName", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "a"])([
    Object(_core_decorators_watch__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])('state.tooltip')
], UIButton.prototype, "onChangeTooltip", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "a"])([
    Object(_core_decorators_watch__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])('state.tabIndex')
], UIButton.prototype, "onChangeTabIndex", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "a"])([
    Object(_core_decorators_watch__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])('state.icon')
], UIButton.prototype, "onChangeIcon", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "a"])([
    autobind_decorator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
], UIButton.prototype, "onActionFire", null);
function Button(jodit, stateOrText, text, status) {
    const button = new UIButton(jodit);
    if (Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["isString"])(stateOrText)) {
        button.state.icon.name = stateOrText;
        button.state.name = stateOrText;
        if (status) {
            button.state.status = status;
        }
        if (text) {
            button.state.text = text;
        }
    }
    else {
        button.setState(stateOrText);
    }
    return button;
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createIcon; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class Icon {
    static getIcon(name) {
        return (Icon.icons[name] ||
            Icon.icons[name.replace(/-/g, '_')] ||
            Icon.icons[name.toLowerCase()]);
    }
    static exists(name) {
        return this.getIcon(name) !== undefined;
    }
    static get(name, defaultValue = '<span></span>') {
        return this.getIcon(name) || defaultValue;
    }
    static set(name, value) {
        this.icons[name.replace('_', '-')] = value;
    }
}
Icon.icons = {};
function createIcon(jodit, clearName, control) {
    const icon = control ? control.icon || control.name : clearName;
    let iconSVG = jodit.e.fire('getIcon', icon, control, clearName);
    let iconElement;
    if (control && control.iconURL && iconSVG === undefined) {
        iconElement = jodit.c.element('span');
        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["css"])(iconElement, 'backgroundImage', 'url(' + control.iconURL.replace('{basePath}', jodit.basePath) + ')');
    }
    else {
        if (iconSVG === undefined) {
            iconSVG = Icon.get(Icon.exists(icon) ? icon : 'empty');
        }
        iconElement = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isString"])(iconSVG)
            ? jodit.c.fromHTML(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["trim"])(iconSVG))
            : iconSVG;
    }
    iconElement.classList.add('jodit_icon', 'jodit_icon_' + clearName);
    return iconElement;
}


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoditArray; });
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class JoditArray {
    constructor(data) {
        Object(_extend__WEBPACK_IMPORTED_MODULE_0__[/* extend */ "a"])(true, this, data);
        Object.defineProperty(this, 'length', {
            value: data.length,
            enumerable: false,
            configurable: false
        });
        Object.defineProperty(this, 'toString', {
            value: () => {
                const out = [];
                for (let i = 0; i < this.length; i += 1) {
                    out[i] = this[i];
                }
                return out.toString();
            },
            enumerable: false,
            configurable: false
        });
        const proto = Array.prototype;
        [
            'map',
            'forEach',
            'reduce',
            'push',
            'pop',
            'shift',
            'unshift',
            'slice',
            'splice'
        ].forEach(method => {
            Object.defineProperty(this, method, {
                value: proto[method],
                enumerable: false,
                configurable: false
            });
        });
    }
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extend; });
/* harmony import */ var _jodit_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _jodit_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _checker___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function extend(...args) {
    const length = args.length;
    let options, name, src, copy, copyIsArray, clone, target = args[0] || {}, i = 1, j, keys, deep = false;
    if (typeof target === 'boolean') {
        deep = target;
        target = args[i] || {};
        i += 1;
    }
    if (typeof target !== 'object' && Object(_checker___WEBPACK_IMPORTED_MODULE_2__[/* isFunction */ "h"])(target)) {
        target = {};
    }
    if (i === length) {
        target = this;
        i += 1;
    }
    for (i; i < length; i += 1) {
        options = args[i];
        if (options !== null && options !== undefined) {
            keys = Object.keys(options);
            for (j = 0; j < keys.length; j += 1) {
                name = keys[j];
                src = target[name];
                copy = options[name];
                if (target === copy) {
                    continue;
                }
                if (deep &&
                    copy &&
                    ((Object(_checker___WEBPACK_IMPORTED_MODULE_2__[/* isPlainObject */ "q"])(copy) && !(copy instanceof _jodit_object__WEBPACK_IMPORTED_MODULE_0__[/* JoditObject */ "a"])) ||
                        (Array.isArray(copy) && !(copy instanceof _jodit_array__WEBPACK_IMPORTED_MODULE_1__[/* JoditArray */ "a"])))) {
                    copyIsArray = Array.isArray(copy);
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && Array.isArray(src) ? src : [];
                    }
                    else {
                        clone = src && Object(_checker___WEBPACK_IMPORTED_MODULE_2__[/* isPlainObject */ "q"])(src) ? src : {};
                    }
                    target[name] = extend(deep, clone, copy);
                }
                else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }
    return target;
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ colorToHex; });

// CONCATENATED MODULE: ./src/core/helpers/color/color-to-hex.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const colorToHex = (color) => {
    if (color === 'rgba(0, 0, 0, 0)' || color === '') {
        return false;
    }
    if (!color) {
        return '#000000';
    }
    if (color.substr(0, 1) === '#') {
        return color;
    }
    const digits = /([\s\n\t\r]*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color) ||
        /([\s\n\t\r]*?)rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/.exec(color);
    let hex, red, green, blue, rgb;
    if (!digits) {
        return '#000000';
    }
    red = parseInt(digits[2], 10);
    green = parseInt(digits[3], 10);
    blue = parseInt(digits[4], 10);
    rgb = blue | (green << 8) | (red << 16);
    hex = rgb.toString(16).toUpperCase();
    while (hex.length < 6) {
        hex = '0' + hex;
    }
    return digits[1] + '#' + hex;
};

// CONCATENATED MODULE: ./src/core/helpers/color/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultLanguage; });
/* harmony import */ var _checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const defaultLanguage = (language, defaultLanguage = 'en') => {
    if (language !== 'auto' && Object(_checker__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "s"])(language)) {
        return language;
    }
    if (document.documentElement && document.documentElement.lang) {
        return document.documentElement.lang;
    }
    if (navigator.language) {
        return navigator.language.substr(0, 2);
    }
    return defaultLanguage;
};


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoditObject; });
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class JoditObject {
    constructor(data) {
        Object(_extend__WEBPACK_IMPORTED_MODULE_0__[/* extend */ "a"])(true, this, data);
    }
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluginSystem; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class PluginSystem {
    constructor() {
        this.items = new Map();
    }
    add(name, plugin) {
        this.items.set(name.toLowerCase(), plugin);
    }
    get(name) {
        return this.items.get(name.toLowerCase());
    }
    remove(name) {
        this.items.delete(name.toLowerCase());
    }
    async init(jodit) {
        const extrasList = jodit.o.extraPlugins.map(s => {
            return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isString"])(s) ? { name: s.toLowerCase() } : s;
        }), disableList = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["splitArray"])(jodit.o.disablePlugins).map(s => s.toLowerCase()), doneList = [], promiseList = {}, plugins = [], pluginsMap = {}, makeAndInit = (plugin, name) => {
            if (disableList.includes(name) ||
                doneList.includes(name) ||
                promiseList[name]) {
                return;
            }
            const instance = PluginSystem.makePluginInstance(jodit, plugin);
            this.initOrWait(jodit, name, instance, doneList, promiseList);
            plugins.push(instance);
            pluginsMap[name] = instance;
        };
        if (extrasList && extrasList.length) {
            try {
                const needLoadExtras = extrasList.filter(extra => !this.items.has(extra.name));
                if (needLoadExtras.length) {
                    await this.load(jodit, needLoadExtras);
                }
            }
            catch (e) {
                if (false) {}
            }
        }
        if (jodit.isInDestruct) {
            return;
        }
        this.items.forEach(makeAndInit);
        this.addListenerOnBeforeDestruct(jodit, plugins);
        jodit.__plugins = pluginsMap;
    }
    static makePluginInstance(jodit, plugin) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(plugin) ? new plugin(jodit) : plugin;
    }
    initOrWait(jodit, pluginName, instance, doneList, promiseList) {
        const initPlugin = (name, plugin) => {
            if (plugin.hasStyle) {
                PluginSystem.loadStyle(jodit, name);
            }
            if (Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isInitable"])(plugin)) {
                const req = plugin.requires;
                if (!req ||
                    !req.length ||
                    req.every(name => doneList.includes(name))) {
                    plugin.init(jodit);
                    doneList.push(name);
                }
                else {
                    promiseList[name] = plugin;
                    return false;
                }
            }
            else {
                doneList.push(name);
            }
            return true;
        };
        initPlugin(pluginName, instance);
        Object.keys(promiseList).forEach(name => {
            const plugin = promiseList[name];
            if (!plugin) {
                return;
            }
            if (initPlugin(name, instance)) {
                promiseList[name] = undefined;
                delete promiseList[name];
            }
        });
    }
    addListenerOnBeforeDestruct(jodit, plugins) {
        jodit.e.on('beforeDestruct', () => {
            plugins.forEach(instance => {
                if (Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isDestructable"])(instance)) {
                    instance.destruct(jodit);
                }
            });
            plugins.length = 0;
            delete jodit.__plugins;
        });
    }
    load(jodit, pluginList) {
        const reflect = (p) => p.then((v) => ({ v, status: 'fulfilled' }), (e) => ({ e, status: 'rejected' }));
        return Promise.all(pluginList.map(extra => {
            const url = extra.url || PluginSystem.getFullUrl(jodit, name, true);
            return reflect(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["appendScriptAsync"])(jodit, url));
        }));
    }
    static loadStyle(jodit, pluginName) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["appendStyleAsync"])(jodit, PluginSystem.getFullUrl(jodit, pluginName, false));
    }
    static getFullUrl(jodit, name, js) {
        return (jodit.basePath +
            'plugins/' +
            name +
            '/' +
            name +
            '.' +
            (js ? 'js' : 'css'));
    }
}


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Component; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _statuses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



class Component {
    constructor() {
        this.ownerWindow = window;
        this.__componentStatus = _statuses__WEBPACK_IMPORTED_MODULE_2__[/* STATUSES */ "a"].beforeInit;
        this.componentName = 'jodit-' + Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["kebabCase"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getClassName"])(this));
        this.uid = 'jodit-uid-' + Object(_global__WEBPACK_IMPORTED_MODULE_1__[/* uniqueUid */ "g"])();
    }
    get ownerDocument() {
        return this.ow.document;
    }
    get od() {
        return this.ownerDocument;
    }
    get ow() {
        return this.ownerWindow;
    }
    get componentStatus() {
        return this.__componentStatus;
    }
    set componentStatus(componentStatus) {
        this.setStatus(componentStatus);
    }
    setStatus(componentStatus) {
        if (componentStatus === this.__componentStatus) {
            return;
        }
        this.__componentStatus = componentStatus;
        const cbList = this.onStatusLst && this.onStatusLst[componentStatus];
        if (cbList) {
            cbList.forEach(cb => cb(this));
        }
    }
    get(chain, obj) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["get"])(chain, obj || this);
    }
    get isReady() {
        return this.componentStatus === _statuses__WEBPACK_IMPORTED_MODULE_2__[/* STATUSES */ "a"].ready;
    }
    get isDestructed() {
        return this.componentStatus === _statuses__WEBPACK_IMPORTED_MODULE_2__[/* STATUSES */ "a"].destructed;
    }
    get isInDestruct() {
        return (_statuses__WEBPACK_IMPORTED_MODULE_2__[/* STATUSES */ "a"].beforeDestruct === this.componentStatus ||
            _statuses__WEBPACK_IMPORTED_MODULE_2__[/* STATUSES */ "a"].destructed === this.componentStatus);
    }
    bindDestruct(jodit) {
        jodit.e.on(_statuses__WEBPACK_IMPORTED_MODULE_2__[/* STATUSES */ "a"].beforeDestruct, () => {
            !this.isInDestruct && this.destruct();
        });
        return this;
    }
    destruct() {
        this.setStatus(_statuses__WEBPACK_IMPORTED_MODULE_2__[/* STATUSES */ "a"].destructed);
    }
    hookStatus(status, callback) {
        if (!this.onStatusLst) {
            this.onStatusLst = {};
        }
        if (!this.onStatusLst[status]) {
            this.onStatusLst[status] = [];
        }
        this.onStatusLst[status].push(callback);
    }
}
Component.STATUSES = _statuses__WEBPACK_IMPORTED_MODULE_2__[/* STATUSES */ "a"];


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class ViewComponent extends _component__WEBPACK_IMPORTED_MODULE_0__[/* Component */ "a"] {
    constructor(jodit) {
        super();
        this.setParentView(jodit);
    }
    get defaultTimeout() {
        return this.j.defaultTimeout;
    }
    get j() {
        return this.jodit;
    }
    setParentView(jodit) {
        this.jodit = jodit;
        jodit.components.add(this);
        return this;
    }
    destruct() {
        this.j.components.delete(this);
        return super.destruct();
    }
}


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports.default = ["Type something","About Jodit","Jodit Editor","Free Non-commercial Version","Jodit User's Guide","contains detailed help for using","For information about the license, please go to our website:","Buy full version","Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.","Anchor","Open in new tab","Open editor in fullsize","Clear Formatting","Fill color or set the text color","Redo","Undo","Bold","Italic","Insert Unordered List","Insert Ordered List","Align Center","Align Justify","Align Left","Align Right","Insert Horizontal Line","Insert Image","Insert file","Insert youtube/vimeo video","Insert link","Font size","Font family","Insert format block","Normal","Heading 1","Heading 2","Heading 3","Heading 4","Quote","Code","Insert","Insert table","Decrease Indent","Increase Indent","Select Special Character","Insert Special Character","Paint format","Change mode","Margins","top","right","bottom","left","Styles","Classes","Align","Right","Center","Left","--Not Set--","Src","Title","Alternative","Link","Open link in new tab","Image","file","Advanced","Image properties","Cancel","Ok","Your code is similar to HTML. Keep as HTML?","Paste as HTML","Keep","Clean","Insert as Text","Insert only Text","Word Paste Detected","The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?","File Browser","Error on load list","Error on load folders","Are you sure?","Enter Directory name","Create directory","type name","Drop image","Drop file","or click","Alternative text","Browse","Upload","Background","Text","Top","Middle","Bottom","Insert column before","Insert column after","Insert row above","Insert row below","Delete table","Delete row","Delete column","Empty cell","source","bold","italic","brush","link","undo","redo","table","image","eraser","paragraph","fontsize","video","font","about","print","symbol","underline","strikethrough","indent","outdent","fullsize","shrink","copyformat","hr","ul","ol","cut","selectall","Embed code","Open link","Edit link","No follow","Unlink","Eye","pencil","Update"," URL","Edit","Horizontal align","Filter","Sort by changed","Sort by name","Sort by size","Add folder","Reset","Save","Save as ...","Resize","Crop","Width","Height","Keep Aspect Ratio","Yes","No","Remove","Select","Chars: %d","Words: %d","All","Select %s","Select all","Vertical align","Split","Split vertical","Split horizontal","Merge","Add column","Add row","Delete","Border","License: %s","Strike through","Underline","superscript","subscript","Cut selection","Break","Search for","Replace with","Replace","Paste","Choose Content to Paste","You can only edit your own images. Download this image on the host?","The image has been successfully uploaded to the host!","palette","There are no files","Rename","Enter new name","preview","download","Paste from clipboard","Your browser doesn't support direct access to the clipboard.","Copy selection","copy","Border radius","Show all","Apply"]

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z\"/> </svg> "

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 18.151 18.151\" xmlns=\"http://www.w3.org/2000/svg\"> <g> <g> <path d=\"M6.237,16.546H3.649V1.604h5.916v5.728c0.474-0.122,0.968-0.194,1.479-0.194 c0.042,0,0.083,0.006,0.125,0.006V0H2.044v18.15h5.934C7.295,17.736,6.704,17.19,6.237,16.546z\"/> <path d=\"M11.169,8.275c-2.723,0-4.938,2.215-4.938,4.938s2.215,4.938,4.938,4.938s4.938-2.215,4.938-4.938 S13.892,8.275,11.169,8.275z M11.169,16.81c-1.983,0-3.598-1.612-3.598-3.598c0-1.983,1.614-3.597,3.598-3.597 s3.597,1.613,3.597,3.597C14.766,15.198,13.153,16.81,11.169,16.81z\"/> <polygon points=\"11.792,11.073 10.502,11.073 10.502,12.578 9.03,12.578 9.03,13.868 10.502,13.868 10.502,15.352 11.792,15.352 11.792,13.868 13.309,13.868 13.309,12.578 11.792,12.578 \"/> </g> </g> </svg> "

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 432 432\"> <g> <g> <polygon points=\"203.688,96 0,96 0,144 155.688,144 \"/> <polygon points=\"155.719,288 0,288 0,336 203.719,336 \"/> <rect x=\"252\" y=\"96\"/> <rect/> <rect x=\"252\" y=\"288\"/> <rect y=\"384\"/> <path d=\"M97.844,230.125c-3.701-3.703-5.856-8.906-5.856-14.141s2.154-10.438,5.856-14.141l9.844-9.844H0v48h107.719 L97.844,230.125z\"/> <polygon points=\"232,176 232,96 112,216 232,336 232,256 432,256 432,176 \"/> </g> </g> </svg> "

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z\"/> </svg> "

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z\"/> </svg> "

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z\"/> </svg> "

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z\"/> </svg> "

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1411 541l-355 355 355 355 144-144q29-31 70-14 39 17 39 59v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l144-144-355-355-355 355 144 144q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l144 144 355-355-355-355-144 144q-19 19-45 19-12 0-24-5-40-17-40-59v-448q0-26 19-45t45-19h448q42 0 59 40 17 39-14 69l-144 144 355 355 355-355-144-144q-31-30-14-69 17-40 59-40h448q26 0 45 19t19 45v448q0 42-39 59-13 5-25 5-26 0-45-19z\"/> </svg> "

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M1792 896q0 26-19 45l-256 256q-19 19-45 19t-45-19-19-45v-128h-1024v128q0 26-19 45t-45 19-45-19l-256-256q-19-19-19-45t19-45l256-256q19-19 45-19t45 19 19 45v128h1024v-128q0-26 19-45t45-19 45 19l256 256q19 19 19 45z\"/></svg> "

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M1596 1385q0 117-79 196t-196 79q-135 0-235-100l-777-776q-113-115-113-271 0-159 110-270t269-111q158 0 273 113l605 606q10 10 10 22 0 16-30.5 46.5t-46.5 30.5q-13 0-23-10l-606-607q-79-77-181-77-106 0-179 75t-73 181q0 105 76 181l776 777q63 63 145 63 64 0 106-42t42-106q0-82-63-145l-581-581q-26-24-60-24-29 0-48 19t-19 48q0 32 25 59l410 410q10 10 10 22 0 16-31 47t-47 31q-12 0-22-10l-410-410q-63-61-63-149 0-82 57-139t139-57q88 0 149 63l581 581q100 98 100 235z\"/></svg> "

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z\"/> </svg> "

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M747 1521q74 32 140 32 376 0 376-335 0-114-41-180-27-44-61.5-74t-67.5-46.5-80.5-25-84-10.5-94.5-2q-73 0-101 10 0 53-.5 159t-.5 158q0 8-1 67.5t-.5 96.5 4.5 83.5 12 66.5zm-14-746q42 7 109 7 82 0 143-13t110-44.5 74.5-89.5 25.5-142q0-70-29-122.5t-79-82-108-43.5-124-14q-50 0-130 13 0 50 4 151t4 152q0 27-.5 80t-.5 79q0 46 1 69zm-541 889l2-94q15-4 85-16t106-27q7-12 12.5-27t8.5-33.5 5.5-32.5 3-37.5.5-34v-65.5q0-982-22-1025-4-8-22-14.5t-44.5-11-49.5-7-48.5-4.5-30.5-3l-4-83q98-2 340-11.5t373-9.5q23 0 68.5.5t67.5.5q70 0 136.5 13t128.5 42 108 71 74 104.5 28 137.5q0 52-16.5 95.5t-39 72-64.5 57.5-73 45-84 40q154 35 256.5 134t102.5 248q0 100-35 179.5t-93.5 130.5-138 85.5-163.5 48.5-176 14q-44 0-132-3t-132-3q-106 0-307 11t-231 12z\"/></svg> "

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M896 1152q0-36-20-69-1-1-15.5-22.5t-25.5-38-25-44-21-50.5q-4-16-21-16t-21 16q-7 23-21 50.5t-25 44-25.5 38-15.5 22.5q-20 33-20 69 0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm512-128q0 212-150 362t-362 150-362-150-150-362q0-145 81-275 6-9 62.5-90.5t101-151 99.5-178 83-201.5q9-30 34-47t51-17 51.5 17 33.5 47q28 93 83 201.5t99.5 178 101 151 62.5 90.5q81 127 81 275z\"/></svg> "

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 14 14\" xmlns=\"http://www.w3.org/2000/svg\"> <g stroke=\"none\" stroke-width=\"1\"> <path d=\"M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z\"/> </g> </svg> "

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h896q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h640q26 0 45 19t19 45z\"/></svg> "

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M503 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z\"/></svg> "

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M1472 930v318q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-254q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24l-430-430q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z\"/></svg> "

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M813 1299l614-614q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-467 467-211-211q-19-19-45-19t-45 19l-102 102q-19 19-19 45t19 45l358 358q19 19 45 19t45-19zm851-883v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\"/></svg> "

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 10 10\"> <path d=\"M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z\"/> </svg> "

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 16 16\"> <path d=\"M16 9v-6h-3v-1c0-0.55-0.45-1-1-1h-11c-0.55 0-1 0.45-1 1v3c0 0.55 0.45 1 1 1h11c0.55 0 1-0.45 1-1v-1h2v4h-9v2h-0.5c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5h-0.5v-1h9zM12 3h-11v-1h11v1z\"/> </svg> "

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M621 1280h595v-595zm-45-45l595-595h-595v595zm1152 77v192q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-224h-864q-14 0-23-9t-9-23v-864h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224v-224q0-14 9-23t23-9h192q14 0 23 9t9 23v224h851l246-247q10-9 23-9t23 9q9 10 9 23t-9 23l-247 246v851h224q14 0 23 9t9 23z\"/> </svg> "

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M24.89,6.61H22.31V4.47A2.47,2.47,0,0,0,19.84,2H6.78A2.47,2.47,0,0,0,4.31,4.47V22.92a2.47,2.47,0,0,0,2.47,2.47H9.69V27.2a2.8,2.8,0,0,0,2.8,2.8h12.4a2.8,2.8,0,0,0,2.8-2.8V9.41A2.8,2.8,0,0,0,24.89,6.61ZM6.78,23.52a.61.61,0,0,1-.61-.6V4.47a.61.61,0,0,1,.61-.6H19.84a.61.61,0,0,1,.61.6V6.61h-8a2.8,2.8,0,0,0-2.8,2.8V23.52Zm19,3.68a.94.94,0,0,1-.94.93H12.49a.94.94,0,0,1-.94-.93V9.41a.94.94,0,0,1,.94-.93h12.4a.94.94,0,0,1,.94.93Z\"/> <path d=\"M23.49,13.53h-9.6a.94.94,0,1,0,0,1.87h9.6a.94.94,0,1,0,0-1.87Z\"/> <path d=\"M23.49,17.37h-9.6a.94.94,0,1,0,0,1.87h9.6a.94.94,0,1,0,0-1.87Z\"/> <path d=\"M23.49,21.22h-9.6a.93.93,0,1,0,0,1.86h9.6a.93.93,0,1,0,0-1.86Z\"/> </svg> "

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M960 896q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm300 64l507 398q28 20 25 56-5 35-35 51l-128 64q-13 7-29 7-17 0-31-8l-690-387-110 66q-8 4-12 5 14 49 10 97-7 77-56 147.5t-132 123.5q-132 84-277 84-136 0-222-78-90-84-79-207 7-76 56-147t131-124q132-84 278-84 83 0 151 31 9-13 22-22l122-73-122-73q-13-9-22-22-68 31-151 31-146 0-278-84-82-53-131-124t-56-147q-5-59 15.5-113t63.5-93q85-79 222-79 145 0 277 84 83 52 132 123t56 148q4 48-10 97 4 1 12 5l110 66 690-387q14-8 31-8 16 0 29 7l128 64q30 16 35 51 3 36-25 56zm-681-260q46-42 21-108t-106-117q-92-59-192-59-74 0-113 36-46 42-21 108t106 117q92 59 192 59 74 0 113-36zm-85 745q81-51 106-117t-21-108q-39-36-113-36-100 0-192 59-81 51-106 117t21 108q39 36 113 36 100 0 192-59zm178-613l96 58v-11q0-36 33-56l14-8-79-47-26 26q-3 3-10 11t-12 12q-2 2-4 3.5t-3 2.5zm224 224l96 32 736-576-128-64-768 431v113l-160 96 9 8q2 2 7 6 4 4 11 12t11 12l26 26zm704 416l128-64-520-408-177 138q-2 3-13 7z\"/> </svg> "

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z\"/> </svg> "

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 24 24\" > <circle cx=\"12\" cy=\"12\" r=\"2.2\"/> <circle cx=\"12\" cy=\"5\" r=\"2.2\"/> <circle cx=\"12\" cy=\"19\" r=\"2.2\"/> </svg> "

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 128 128\" xml:space=\"preserve\"> <g> <polygon points=\"112.4560547,23.3203125 112.4560547,75.8154297 31.4853516,75.8154297 31.4853516,61.953125 16.0131836,72.6357422 0.5410156,83.3164063 16.0131836,93.9990234 31.4853516,104.6796875 31.4853516,90.8183594 112.4560547,90.8183594 112.4560547,90.8339844 127.4589844,90.8339844 127.4589844,23.3203125 \"/> </g> </svg> "

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M832 1408l336-384h-768l-336 384h768zm1013-1077q15 34 9.5 71.5t-30.5 65.5l-896 1024q-38 44-96 44h-768q-38 0-69.5-20.5t-47.5-54.5q-15-34-9.5-71.5t30.5-65.5l896-1024q38-44 96-44h768q38 0 69.5 20.5t47.5 54.5z\"/> </svg> "

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z\"/></svg> "

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1152 512v-472q22 14 36 28l408 408q14 14 28 36h-472zm-128 32q0 40 28 68t68 28h544v1056q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h800v544z\"/> </svg> "

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z\"/> </svg> "

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M789 559l-170 450q33 0 136.5 2t160.5 2q19 0 57-2-87-253-184-452zm-725 1105l2-79q23-7 56-12.5t57-10.5 49.5-14.5 44.5-29 31-50.5l237-616 280-724h128q8 14 11 21l205 480q33 78 106 257.5t114 274.5q15 34 58 144.5t72 168.5q20 45 35 57 19 15 88 29.5t84 20.5q6 38 6 57 0 4-.5 13t-.5 13q-63 0-190-8t-191-8q-76 0-215 7t-178 8q0-43 4-78l131-28q1 0 12.5-2.5t15.5-3.5 14.5-4.5 15-6.5 11-8 9-11 2.5-14q0-16-31-96.5t-72-177.5-42-100l-450-2q-26 58-76.5 195.5t-50.5 162.5q0 22 14 37.5t43.5 24.5 48.5 13.5 57 8.5 41 4q1 19 1 58 0 9-2 27-58 0-174.5-10t-174.5-10q-8 0-26.5 4t-21.5 4q-80 14-188 14z\"/></svg> "

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M1744 1408q33 0 42 18.5t-11 44.5l-126 162q-20 26-49 26t-49-26l-126-162q-20-26-11-44.5t42-18.5h80v-1024h-80q-33 0-42-18.5t11-44.5l126-162q20-26 49-26t49 26l126 162q20 26 11 44.5t-42 18.5h-80v1024h80zm-1663-1279l54 27q12 5 211 5 44 0 132-2t132-2q36 0 107.5.5t107.5.5h293q6 0 21 .5t20.5 0 16-3 17.5-9 15-17.5l42-1q4 0 14 .5t14 .5q2 112 2 336 0 80-5 109-39 14-68 18-25-44-54-128-3-9-11-48t-14.5-73.5-7.5-35.5q-6-8-12-12.5t-15.5-6-13-2.5-18-.5-16.5.5q-17 0-66.5-.5t-74.5-.5-64 2-71 6q-9 81-8 136 0 94 2 388t2 455q0 16-2.5 71.5t0 91.5 12.5 69q40 21 124 42.5t120 37.5q5 40 5 50 0 14-3 29l-34 1q-76 2-218-8t-207-10q-50 0-151 9t-152 9q-3-51-3-52v-9q17-27 61.5-43t98.5-29 78-27q19-42 19-383 0-101-3-303t-3-303v-117q0-2 .5-15.5t.5-25-1-25.5-3-24-5-14q-11-12-162-12-33 0-93 12t-80 26q-19 13-34 72.5t-31.5 111-42.5 53.5q-42-26-56-44v-383z\"/></svg> "

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 24 24\" > <path d=\"M22,20.6L3.4,2H8V0H0v8h2V3.4L20.6,22H16v2h8v-8h-2V20.6z M16,0v2h4.7l-6.3,6.3l1.4,1.4L22,3.5V8h2V0H16z M8.3,14.3L2,20.6V16H0v8h8v-2H3.5l6.3-6.3L8.3,14.3z\"/> </svg> "

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M1600 736v192q0 40-28 68t-68 28h-1216q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h1216q40 0 68 28t28 68z\"/></svg> "

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M576 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 384v448h-1408v-192l320-320 160 160 512-512zm96-704h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zm160 32v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z\"/></svg> "

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M352 832q0 14-9 23l-288 288q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-576q0-13 9.5-22.5t22.5-9.5q14 0 23 9l288 288q9 9 9 23zm1440 480v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z\"/> </svg> "

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M1152 1376v-160q0-14-9-23t-23-9h-96v-512q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v160q0 14 9 23t23 9h96v320h-96q-14 0-23 9t-9 23v160q0 14 9 23t23 9h448q14 0 23-9t9-23zm-128-896v-160q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v160q0 14 9 23t23 9h192q14 0 23-9t9-23zm640 416q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z\"/></svg> "

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M384 1662l17-85q6-2 81.5-21.5t111.5-37.5q28-35 41-101 1-7 62-289t114-543.5 52-296.5v-25q-24-13-54.5-18.5t-69.5-8-58-5.5l19-103q33 2 120 6.5t149.5 7 120.5 2.5q48 0 98.5-2.5t121-7 98.5-6.5q-5 39-19 89-30 10-101.5 28.5t-108.5 33.5q-8 19-14 42.5t-9 40-7.5 45.5-6.5 42q-27 148-87.5 419.5t-77.5 355.5q-2 9-13 58t-20 90-16 83.5-6 57.5l1 18q17 4 185 31-3 44-16 99-11 0-32.5 1.5t-32.5 1.5q-29 0-87-10t-86-10q-138-2-206-2-51 0-143 9t-121 11z\"/></svg> "

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45z\"/></svg> "

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z\"/></svg> "

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z\"/></svg> "

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M640 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z\"/></svg> "

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z\"/></svg> "

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 312 312\"> <g transform=\"translate(0.000000,312.000000) scale(0.100000,-0.100000)\" stroke=\"none\"> <path d=\"M50 3109 c0 -7 -11 -22 -25 -35 l-25 -23 0 -961 0 -961 32 -29 32 -30 501 -2 500 -3 3 -502 2 -502 31 -30 31 -31 958 0 958 0 23 25 c13 13 30 25 37 25 9 0 12 199 12 960 0 686 -3 960 -11 960 -6 0 -24 12 -40 28 l-29 27 -503 5 -502 5 -5 502 -5 503 -28 29 c-15 16 -27 34 -27 40 0 8 -274 11 -960 11 -710 0 -960 -3 -960 -11z m1738 -698 l2 -453 -40 -40 c-22 -22 -40 -43 -40 -47 0 -4 36 -42 79 -85 88 -87 82 -87 141 -23 l26 27 455 -2 454 -3 0 -775 0 -775 -775 0 -775 0 -3 450 -2 449 47 48 47 48 -82 80 c-44 44 -84 80 -87 80 -3 0 -25 -18 -48 -40 l-41 -40 -456 2 -455 3 -3 765 c-1 421 0 771 3 778 3 10 164 12 777 10 l773 -3 3 -454z\"/> <path d=\"M607 2492 c-42 -42 -77 -82 -77 -87 0 -6 86 -96 190 -200 105 -104 190 -197 190 -205 0 -8 -41 -56 -92 -107 -65 -65 -87 -94 -77 -98 8 -3 138 -4 289 -3 l275 3 3 275 c1 151 0 281 -3 289 -4 10 -35 -14 -103 -82 -54 -53 -103 -97 -109 -97 -7 0 -99 88 -206 195 -107 107 -196 195 -198 195 -3 0 -39 -35 -82 -78z\"/> <path d=\"M1470 1639 c-47 -49 -87 -91 -89 -94 -5 -6 149 -165 160 -165 9 0 189 179 189 188 0 12 -154 162 -165 161 -6 0 -48 -41 -95 -90z\"/> <path d=\"M1797 1303 c-9 -8 -9 -568 0 -576 4 -4 50 36 103 88 54 52 101 95 106 95 5 0 95 -85 199 -190 104 -104 194 -190 200 -190 6 0 46 36 90 80 l79 79 -197 196 c-108 108 -197 199 -197 203 0 4 45 52 99 106 55 55 98 103 95 108 -6 10 -568 11 -577 1z\"/> </g> </svg> "

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 32 32\"> <path d=\"M27 4l-15 15-7-7-5 5 12 12 20-20z\"/> </svg> "

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M381 1620q0 80-54.5 126t-135.5 46q-106 0-172-66l57-88q49 45 106 45 29 0 50.5-14.5t21.5-42.5q0-64-105-56l-26-56q8-10 32.5-43.5t42.5-54 37-38.5v-1q-16 0-48.5 1t-48.5 1v53h-106v-152h333v88l-95 115q51 12 81 49t30 88zm2-627v159h-362q-6-36-6-54 0-51 23.5-93t56.5-68 66-47.5 56.5-43.5 23.5-45q0-25-14.5-38.5t-39.5-13.5q-46 0-81 58l-85-59q24-51 71.5-79.5t105.5-28.5q73 0 123 41.5t50 112.5q0 50-34 91.5t-75 64.5-75.5 50.5-35.5 52.5h127v-60h105zm1409 319v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm-1408-899v99h-335v-99h107q0-41 .5-122t.5-121v-12h-2q-8 17-50 54l-71-76 136-127h106v404h108zm1408 387v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z\"/> </svg> "

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 270 270\"> <path d=\"m240.443652,220.45085l-47.410809,0l0,-10.342138c13.89973,-8.43655 25.752896,-19.844464 34.686646,-33.469923c11.445525,-17.455846 17.496072,-37.709239 17.496072,-58.570077c0,-59.589197 -49.208516,-108.068714 -109.693558,-108.068714s-109.69263,48.479517 -109.69263,108.069628c0,20.860839 6.050547,41.113316 17.497001,58.570077c8.93375,13.625459 20.787845,25.032458 34.686646,33.469008l0,10.342138l-47.412666,0c-10.256959,0 -18.571354,8.191376 -18.571354,18.296574c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.98402,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574l0,-39.496814c0,-7.073455 -4.137698,-13.51202 -10.626529,-16.537358c-25.24497,-11.772016 -41.557118,-37.145704 -41.557118,-64.643625c0,-39.411735 32.545369,-71.476481 72.549922,-71.476481c40.004553,0 72.550851,32.064746 72.550851,71.476481c0,27.497006 -16.312149,52.87161 -41.557118,64.643625c-6.487902,3.026253 -10.6256,9.464818 -10.6256,16.537358l0,39.496814c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.982163,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574c0,-10.105198 -8.314395,-18.296574 -18.571354,-18.296574z\"/> </svg> "

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z\"/> </svg> "

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' x=\"0px\" y=\"0px\" viewBox=\"0 0 459 459\"> <g> <g> <path d=\"M229.5,0C102,0,0,102,0,229.5S102,459,229.5,459c20.4,0,38.25-17.85,38.25-38.25c0-10.2-2.55-17.85-10.2-25.5 c-5.1-7.65-10.2-15.3-10.2-25.5c0-20.4,17.851-38.25,38.25-38.25h45.9c71.4,0,127.5-56.1,127.5-127.5C459,91.8,357,0,229.5,0z M89.25,229.5c-20.4,0-38.25-17.85-38.25-38.25S68.85,153,89.25,153s38.25,17.85,38.25,38.25S109.65,229.5,89.25,229.5z M165.75,127.5c-20.4,0-38.25-17.85-38.25-38.25S145.35,51,165.75,51S204,68.85,204,89.25S186.15,127.5,165.75,127.5z M293.25,127.5c-20.4,0-38.25-17.85-38.25-38.25S272.85,51,293.25,51s38.25,17.85,38.25,38.25S313.65,127.5,293.25,127.5z M369.75,229.5c-20.4,0-38.25-17.85-38.25-38.25S349.35,153,369.75,153S408,170.85,408,191.25S390.15,229.5,369.75,229.5z\" /> </g> </g> </svg> "

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M1534 189v73q0 29-18.5 61t-42.5 32q-50 0-54 1-26 6-32 31-3 11-3 64v1152q0 25-18 43t-43 18h-108q-25 0-43-18t-18-43v-1218h-143v1218q0 25-17.5 43t-43.5 18h-108q-26 0-43.5-18t-17.5-43v-496q-147-12-245-59-126-58-192-179-64-117-64-259 0-166 88-286 88-118 209-159 111-37 417-37h479q25 0 43 18t18 43z\"/></svg> "

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10.5 20H2a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4a3 3 0 0 1 5.94 0L13 3v1h1a2 2 0 0 1 2 2v1h-2V6h-1v1H3V6H2v12h5v2h3.5zM8 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2 4h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2zm0 2v8h8v-8h-8z\"/> </svg> "

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z\"/></svg> "

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z\"/></svg> "

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M448 1536h896v-256h-896v256zm0-640h896v-384h-160q-40 0-68-28t-28-68v-160h-640v640zm1152 64q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128 0v416q0 13-9.5 22.5t-22.5 9.5h-224v160q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-224q-13 0-22.5-9.5t-9.5-22.5v-416q0-79 56.5-135.5t135.5-56.5h64v-544q0-40 28-68t68-28h672q40 0 88 20t76 48l152 152q28 28 48 76t20 88v256h64q79 0 135.5 56.5t56.5 135.5z\"/> </svg> "

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1664 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5 40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0 225-52t179-147q7-10 23-12 14 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327 72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5 156.5l130-129q29-31 70-14 39 17 39 59z\"/> </svg> "

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 24 24\" > <g> <g transform=\"translate(-251.000000, -443.000000)\"> <g transform=\"translate(215.000000, 119.000000)\"/> <path d=\"M252,448 L256,448 L256,444 L252,444 L252,448 Z M257,448 L269,448 L269,446 L257,446 L257,448 Z M257,464 L269,464 L269,462 L257,462 L257,464 Z M270,444 L270,448 L274,448 L274,444 L270,444 Z M252,462 L252,466 L256,466 L256,462 L252,462 Z M270,462 L270,466 L274,466 L274,462 L270,462 Z M254,461 L256,461 L256,449 L254,449 L254,461 Z M270,461 L272,461 L272,449 L270,449 L270,461 Z\"/> </g> </g> </svg> "

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M844 472q0 60-19 113.5t-63 92.5-105 39q-76 0-138-57.5t-92-135.5-30-151q0-60 19-113.5t63-92.5 105-39q77 0 138.5 57.5t91.5 135 30 151.5zm-342 483q0 80-42 139t-119 59q-76 0-141.5-55.5t-100.5-133.5-35-152q0-80 42-139.5t119-59.5q76 0 141.5 55.5t100.5 134 35 152.5zm394-27q118 0 255 97.5t229 237 92 254.5q0 46-17 76.5t-48.5 45-64.5 20-76 5.5q-68 0-187.5-45t-182.5-45q-66 0-192.5 44.5t-200.5 44.5q-183 0-183-146 0-86 56-191.5t139.5-192.5 187.5-146 193-59zm239-211q-61 0-105-39t-63-92.5-19-113.5q0-74 30-151.5t91.5-135 138.5-57.5q61 0 105 39t63 92.5 19 113.5q0 73-30 151t-92 135.5-138 57.5zm432-104q77 0 119 59.5t42 139.5q0 74-35 152t-100.5 133.5-141.5 55.5q-77 0-119-59t-42-139q0-74 35-152.5t100.5-134 141.5-55.5z\"/> </svg> "

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z\"/> </svg> "

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M512 1536h768v-384h-768v384zm896 0h128v-896q0-14-10-38.5t-20-34.5l-281-281q-10-10-34-20t-39-10v416q0 40-28 68t-68 28h-576q-40 0-68-28t-28-68v-416h-128v1280h128v-416q0-40 28-68t68-28h832q40 0 68 28t28 68v416zm-384-928v-320q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm640 32v928q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h928q40 0 88 20t76 48l280 280q28 28 48 76t20 88z\"/> </svg> "

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 18 18\"> <g fill-rule=\"evenodd\" stroke=\"none\" stroke-width=\"1\"> <g transform=\"translate(-381.000000, -381.000000)\"> <g transform=\"translate(381.000000, 381.000000)\"> <path d=\"M0,2 L2,2 L2,0 C0.9,0 0,0.9 0,2 L0,2 Z M0,10 L2,10 L2,8 L0,8 L0,10 L0,10 Z M4,18 L6,18 L6,16 L4,16 L4,18 L4,18 Z M0,6 L2,6 L2,4 L0,4 L0,6 L0,6 Z M10,0 L8,0 L8,2 L10,2 L10,0 L10,0 Z M16,0 L16,2 L18,2 C18,0.9 17.1,0 16,0 L16,0 Z M2,18 L2,16 L0,16 C0,17.1 0.9,18 2,18 L2,18 Z M0,14 L2,14 L2,12 L0,12 L0,14 L0,14 Z M6,0 L4,0 L4,2 L6,2 L6,0 L6,0 Z M8,18 L10,18 L10,16 L8,16 L8,18 L8,18 Z M16,10 L18,10 L18,8 L16,8 L16,10 L16,10 Z M16,18 C17.1,18 18,17.1 18,16 L16,16 L16,18 L16,18 Z M16,6 L18,6 L18,4 L16,4 L16,6 L16,6 Z M16,14 L18,14 L18,12 L16,12 L16,14 L16,14 Z M12,18 L14,18 L14,16 L12,16 L12,18 L12,18 Z M12,2 L14,2 L14,0 L12,0 L12,2 L12,2 Z M4,14 L14,14 L14,4 L4,4 L4,14 L4,14 Z M6,6 L12,6 L12,12 L6,12 L6,6 L6,6 Z\"/> </g> </g> </g> </svg> "

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M896 960v448q0 26-19 45t-45 19-45-19l-144-144-332 332q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l332-332-144-144q-19-19-19-45t19-45 45-19h448q26 0 45 19t19 45zm755-672q0 13-10 23l-332 332 144 144q19 19 19 45t-19 45-45 19h-448q-26 0-45-19t-19-45v-448q0-26 19-45t45-19 45 19l144 144 332-332q10-10 23-10t23 10l114 114q10 10 10 23z\"/> </svg> "

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M553 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z\"/> </svg> "

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 48 48\"> <path d=\"M6 42h4v-4h-4v4zm4-28h-4v4h4v-4zm-4 20h4v-4h-4v4zm8 8h4v-4h-4v4zm-4-36h-4v4h4v-4zm8 0h-4v4h4v-4zm16 0h-4v4h4v-4zm-8 8h-4v4h4v-4zm0-8h-4v4h4v-4zm12 28h4v-4h-4v4zm-16 8h4v-4h-4v4zm-16-16h36v-4h-36v4zm32-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-16 16h4v-4h-4v4zm8 8h4v-4h-4v4zm8 0h4v-4h-4v4z\"/><path d=\"M0 0h48v48h-48z\" fill=\"none\"/> </svg> "

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 48 48\"> <path d=\"M6 18h4v-4h-4v4zm0-8h4v-4h-4v4zm8 32h4v-4h-4v4zm0-16h4v-4h-4v4zm-8 0h4v-4h-4v4zm0 16h4v-4h-4v4zm0-8h4v-4h-4v4zm8-24h4v-4h-4v4zm24 24h4v-4h-4v4zm-16 8h4v-36h-4v36zm16 0h4v-4h-4v4zm0-16h4v-4h-4v4zm0-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-8-8h4v-4h-4v4zm0 32h4v-4h-4v4zm0-16h4v-4h-4v4z\"/> <path d=\"M0 0h48v48h-48z\" fill=\"none\"/> </svg> "

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1760 896q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1728q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1728zm-1277-64q-28-35-51-80-48-97-48-188 0-181 134-309 133-127 393-127 50 0 167 19 66 12 177 48 10 38 21 118 14 123 14 183 0 18-5 45l-12 3-84-6-14-2q-50-149-103-205-88-91-210-91-114 0-182 59-67 58-67 146 0 73 66 140t279 129q69 20 173 66 58 28 95 52h-743zm507 256h411q7 39 7 92 0 111-41 212-23 55-71 104-37 35-109 81-80 48-153 66-80 21-203 21-114 0-195-23l-140-40q-57-16-72-28-8-8-8-22v-13q0-108-2-156-1-30 0-68l2-37v-44l102-2q15 34 30 71t22.5 56 12.5 27q35 57 80 94 43 36 105 57 59 22 132 22 64 0 139-27 77-26 122-86 47-61 47-129 0-84-81-157-34-29-137-71z\"/> </svg> "

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm639 217v206h-514l-4-27q-3-45-3-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 80-65 188-65 110 0 178 59.5t68 158.5q0 66-34.5 118.5t-84 86-99.5 62.5-87 63-41 73h232v-80h126z\"/> </svg> "

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm637-679v206h-514l-3-27q-4-28-4-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 83-65 188-65 110 0 178 59.5t68 158.5q0 56-24.5 103t-62 76.5-81.5 58.5-82 50.5-65.5 51.5-30.5 63h232v-80h126z\"/> </svg> "

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M576 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm128-320v1088q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1344q66 0 113 47t47 113z\"/> </svg> "

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68z\"/> </svg> "

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm-1280-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68z\"/> </svg> "

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z\"/> </svg> "

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M176 223q-37-2-45-4l-3-88q13-1 40-1 60 0 112 4 132 7 166 7 86 0 168-3 116-4 146-5 56 0 86-2l-1 14 2 64v9q-60 9-124 9-60 0-79 25-13 14-13 132 0 13 .5 32.5t.5 25.5l1 229 14 280q6 124 51 202 35 59 96 92 88 47 177 47 104 0 191-28 56-18 99-51 48-36 65-64 36-56 53-114 21-73 21-229 0-79-3.5-128t-11-122.5-13.5-159.5l-4-59q-5-67-24-88-34-35-77-34l-100 2-14-3 2-86h84l205 10q76 3 196-10l18 2q6 38 6 51 0 7-4 31-45 12-84 13-73 11-79 17-15 15-15 41 0 7 1.5 27t1.5 31q8 19 22 396 6 195-15 304-15 76-41 122-38 65-112 123-75 57-182 89-109 33-255 33-167 0-284-46-119-47-179-122-61-76-83-195-16-80-16-237v-333q0-188-17-213-25-36-147-39zm1488 1409v-64q0-14-9-23t-23-9h-1472q-14 0-23 9t-9 23v64q0 14 9 23t23 9h1472q14 0 23-9t9-23z\"/> </svg> "

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z\"/> </svg> "

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M503 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z\"/> </svg> "

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1728 576v256q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45v-256q0-106-75-181t-181-75-181 75-75 181v192h96q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h672v-192q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5z\"/> </svg> "

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z\"/> </svg> "

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z\"/> </svg> "

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1216 320q0 26-19 45t-45 19h-128v1024h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-1024h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45z\"/> </svg> "

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1792 352v1088q0 42-39 59-13 5-25 5-27 0-45-19l-403-403v166q0 119-84.5 203.5t-203.5 84.5h-704q-119 0-203.5-84.5t-84.5-203.5v-704q0-119 84.5-203.5t203.5-84.5h704q119 0 203.5 84.5t84.5 203.5v165l403-402q18-19 45-19 12 0 25 5 39 17 39 59z\"/> </svg> "

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports.default = ["إبدأ في الكتابة...","حول جوديت","محرر جوديت",null,"دليل مستخدم جوديت","يحتوي على مساعدة مفصلة للاستخدام","للحصول على معلومات حول الترخيص، يرجى الذهاب لموقعنا:","شراء النسخة الكاملة","حقوق الطبع والنشر © XDSoft.net - Chupurnov Valeriy. كل الحقوق محفوظة.","مِرْساة","فتح في نافذة جديدة","فتح المحرر في الحجم الكامل","مسح التنسيق","ملء اللون أو تعيين لون النص","إعادة","تراجع","عريض","مائل","إدراج قائمة غير مرتبة","إدراج قائمة مرتبة","محاذاة للوسط","محاذاة مثبتة","محاذاة لليسار","محاذاة لليمين","إدراج خط أفقي","إدراج صورة","ادخال الملف","إدراج فيديو يوتيوب/فيميو ","إدراج رابط","حجم الخط","نوع الخط","إدراج كتلة تنسيق","عادي","عنوان 1","عنوان 2","عنوان 3","عنوان 4","إقتباس","كود","إدراج","إدراج جدول","تقليل المسافة البادئة","زيادة المسافة البادئة","تحديد أحرف خاصة","إدراج حرف خاص","تنسيق الرسم","تغيير الوضع","هوامش","أعلى","يمين","أسفل","يسار","الأنماط","الطبقات","محاذاة","اليمين","الوسط","اليسار","--غير مضبوط--","Src","العنوان","العنوان البديل","الرابط","افتح الرابط في نافذة جديدة","الصورة","ملف","متقدم","خصائص الصورة","إلغاء","حسنا","يشبه الكود الخاص بك HTML. تبقي كما HTML؟","الصق ك HTML","احتفظ",null,"إدراج كنص","إدراج النص فقط",null,null,"متصفح الملفات","حدث خطأ في تحميل القائمة ","حدث خطأ في تحميل المجلدات","هل أنت واثق؟","أدخل اسم المجلد","إنشاء مجلد","أكتب إسم","إسقاط صورة","إسقاط الملف","أو أنقر","النص البديل","تصفح","رفع","الخلفية","نص","أعلى","الوسط","الأسفل","إدراج عمود قبل","إدراج عمود بعد","إدراج صف أعلى","إدراج صف أسفل","حذف الجدول","حذف الصف","حذف العمود","خلية فارغة","مصدر","بالخط العريض","مائل","شغل","صلة","إلغاء","كرر","طاولة","صورة","نظيف","فقرة","حجم الخط","فيديو","الخط","حول المحرر","طباعة","رمز","أكد","شطب","المسافة البادئة","نتوء","ملء الشاشة","الحجم التقليدي","نسخ التنسيق","الخط","قائمة","قائمة مرقمة","قطع","اختر الكل","قانون","فتح الرابط","تعديل الرابط","سمة Nofollow","إزالة الرابط","مراجعة","لتحرير","تحديث","URL","تحرير","محاذاة أفقية","فلتر","عن طريق التغيير","بالاسم","حسب الحجم","إضافة مجلد","إعادة","احتفظ","حفظ باسم","تغيير الحجم","حجم القطع","عرض","ارتفاع","حافظ على النسب","أن","لا","حذف","تميز","%d حرف","%d كلام",null,"تميز %s","اختر الكل","محاذاة عمودية","انشق، مزق","انقسام عمودي","تقسيم أفقي","اذهب","أضف العمود","اضف سطر","حذف","الحدود","رخصة %s","اضرب من خلال","أكد","حرف فوقي","مخطوطة","قطع الاختيار","استراحة","البحث عن","استبدل ب","يحل محل","معجون","اختر محتوى للصق","يمكنك فقط تحرير صورك الخاصة. تحميل هذه الصورة على المضيف؟","تم تحميل الصورة بنجاح على الخادم!","لوحة","لا توجد ملفات في هذا الدليل.","إعادة تسمية","أدخل اسم جديد","معاينة","تحميل","لصق من الحافظة","متصفحك لا يدعم إمكانية الوصول المباشر إلى الحافظة.","نسخ التحديد","نسخ","دائرة نصف قطرها الحدود","عرض كل","تطبيق"]

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports.default = ["Napiš něco","O Jodit","Editor Jodit","Verze pro nekomerční použití","Jodit Uživatelská příručka","obsahuje detailní nápovědu","Pro informace o licenci, prosím, přejděte na naši stránku:","Koupit plnou verzi","Copyright © XDSoft.net - Chupurnov Valeriy. Všechna práva vyhrazena.","Anchor","Otevřít v nové záložce","Otevřít v celoobrazovkovém režimu","Vyčistit formátování","Barva výplně a písma","Vpřed","Zpět","Tučné","Kurzíva","Odrážky","Číslovaný seznam","Zarovnat na střed","Zarovnat do bloku","Zarovnat vlevo","Zarovnat vpravo","Vložit horizontální linku","Vložit obrázek","Vložit soubor","Vložit video (YT/Vimeo)","Vložit odkaz","Velikost písma","Typ písma","Formátovat blok","Normální text","Nadpis 1","Nadpis 2","Nadpis 3","Nadpis 4","Citát","Kód","Vložit","Vložit tabulku","Zmenšit odsazení","Zvětšit odsazení","Vybrat speciální symbol","Vložit speciální symbol","Použít formát","Změnit mód","Okraje","horní","pravý","spodní","levý","Styly","Třídy","Zarovnání","Vpravo","Na střed","Vlevo","--nenastaveno--","src","Titulek","Alternativní text (alt)","Link","Otevřít link v nové záložce","Obrázek","soubor","Rozšířené","Vlastnosti obrázku","Zpět","Ok","Váš text se podobá HTML. Vložit ho jako HTML?","Vložit jako HTML","Ponechat originál","Vyčistit","Vložit jako TEXT","Vložit pouze TEXT","Detekován fragment z Wordu nebo Excelu","Obsah, který vkládáte, je pravděpodobně z Microsoft Word / Excel. Chcete ponechat formát nebo vložit pouze text?","Prohlížeč souborů","Chyba při načítání seznamu souborů","Chyba při načítání složek","Jste si jistý(á)?","Název složky","Vytvořit složku","název","Přetáhněte sem obrázek","Přetáhněte sem soubor","nebo klikněte","Alternativní text","Server","Nahrát","Pozadí","Text","Nahoru","Na střed","Dolu","Vložit sloupec před","Vložit sloupec za","Vložit řádek nad","Vložit řádek pod","Vymazat tabulku","Vymazat řádku","Vymazat sloupec","Vyčistit buňku","HTML","tučně","kurzíva","štětec","odkaz","zpět","vpřed","tabulka","obrázek","guma","odstavec","velikost písma","video","písmo","о editoru","tisk","symbol","podtrženo","přeškrtnuto","zvětšit odsazení","zmenšit odsazení","celoobrazovkový režim","smrsknout","Kopírovat formát","Linka","Odrážka","Číslovaný seznam","Vyjmout","Označit vše","Kód","Otevřít odkaz","Upravit odkaz","Atribut no-follow","Odstranit odkaz","Zobrazit","Chcete-li upravit","Aktualizovat","URL","Editovat","Horizontální zarovnání","Filtr","Dle poslední změny","Dle názvu","Dle velikosti","Přidat složku","Reset","Uložit","Uložit jako...","Změnit rozměr","Ořezat","Šířka","Výška","Ponechat poměr","Ano","Ne","Vyjmout","Označit","Znaky: %d","Slova: %d","Vše","Označit %s","Označit vše","Vertikální zarovnání","Rozdělit","Rozdělit vertikálně","Rozdělit horizontálně","Spojit","Přidat sloupec","Přidat řádek","Vymazat","Okraj","Licence: %s","Přeškrtnuto","Podtrženo","Horní index","Dolní index","Vyjmout označené","Zalomení","Najdi","Nahradit za","Nahradit","Vložit","Vyber obsah pro vložení","Můžete upravovat pouze své obrázky. Načíst obrázek?","Obrázek byl úspěšně nahrán!","paleta","V tomto adresáři nejsou žádné soubory.","přejmenovat","Zadejte nový název","náhled","Stažení","Vložit ze schránky","Váš prohlížeč nepodporuje přímý přístup do schránky.","Kopírovat výběr","kopírování","Border radius","Zobrazit všechny","Platí"]

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports.default = ["Bitte geben Sie einen Text ein","Über Jodit","Jodit Editor",null,"Das Jodit Benutzerhandbuch","beinhaltet ausführliche Informationen wie Sie den Editor verwenden können.","Für Lizenz-Informationen, besuchen Sie bitte unsere Webseite:","Vollversion kaufen","Copyright © XDSoft.net - Chupurnov Valeriy. Alle Rechte vorbehalten.","Anker","In neuer Registerkarte öffnen","Editor in voller Größe öffnen","Formatierung löschen","Füllfarbe oder Textfarbe ändern","Wiederholen","Rückgängig machen","Fett","Kursiv","Ungeordnete Liste einfügen","Sortierte Liste einfügen","Mittig ausrichten","Blocksatz","Links ausrichten","Rechts ausrichten","Horizontale Linie einfügen","Bild einfügen","Datei einfügen","Youtube/vimeo Video einfügen","Link einfügen","Schriftgröße","Schriftfamilie","Formatblock einfügen","Normal","Überschrift 1","Überschrift 2","Überschrift 3","Überschrift 4","Zitat","Code","Einfügen","Tabelle einfügen","Einzug verkleinern","Einzug vergrößern","Sonderzeichen auswählen","Sonderzeichen einfügen","Format kopieren","Änderungsmodus","Ränder","Oben","Rechts","Unten","Links","CSS Stiel","CSS Klassen","Ausrichten","Rechts","Zentriert","Links","Keine","Pfad","Titel","Alternativer Text","Link","Link in neuem Tab öffnen","Bild","Datei","Fortgeschritten","Bildeigenschaften","Abbrechen","OK","Es scheint als dass Sie HTML-Text einfügen möchten","Als HTML einfügen?","Original speichern","Säubern","Als Text einfügen","Nur Text einfügen","In Word formatierter Text erkannt","Der Inhalt, den Sie einfügen, stammt aus einem Microsoft Word / Excel-Dokument. Möchten Sie das Format erhalten oder löschen?","Dateibrowser","Fehler beim Laden der Liste","Fehler beim Laden der Ordner","Sind Sie sicher?","Geben Sie den Verzeichnisnamen ein","Verzeichnis erstellen","Typname","Bild hier hinziehen","Datei löschen","oder hier klicken","Alternativtext","Auswählen","Hochladen","Hintergrund","Text","Oben","Mittig","Unten","Spalte einfügen vor","Spalte einfügen nach","Zeile einfügen oberhalb","Zeile unterhalb einfügen","Tabelle löschen","Zeile löschen","Spalte löschen","Leere Zelle","HTML","Fett gedruckt","kursiv","Bürste","Verknüpfung","rückgängig machen","wiederholen","Tabelle","Bild","Radiergummi","Absatz","Schriftgröße","Video","Schriftart","Über","drucken","Symbol","unterstreichen","durchgestrichen","Einzug","Aussenseiter","Vollgröße","schrumpfen","Format kopierenт","die Linie","Liste von","Nummerierte Liste","Schnitt","Wählen Sie Alle aus","Code einbetten","Link öffnen","Link bearbeiten","Nofollow-Attribut","Link entfernen","Ansehen","Bearbeiten","Aktualisieren","URL","Bearbeiten","Horizontale Ausrichtung","filter","Sortieren nach geändert","Nach Name sortieren","Nach Größe sortiert","Ordner hinzufügen","Wiederherstellen","Speichern","Speichern als","Ändern Sie die Größe","Größe anpassen","Breite","Höhe","Halten Sie Proportionen","Ja","Nein","Entfernen","Markieren","Zeichen: %d","Wörter: %d","Wählen Sie Alle aus","Markieren: %s","Wählen Sie Alle aus","Vertikale Ausrichtung","Split","Split vertikal","Split horizontally","Verschmelzen","Spalte hinzufügen","Zeile hinzufügen","Löschen","Rand",null,"Durchschlagen","Unterstreichen","hochgestellt","Index","Auswahl ausschneid","Pause","Suche nach","Ersetzen durch","Ersetzen","Einfügen","Wählen Sie Inhalt zum Einfügen","Sie können nur Ihre eigenen Bilder bearbeiten. Laden Sie dieses Bild auf dem Host herunter?","Das Bild wurde erfolgreich auf den Server hochgeladen!null","Palette","In diesem Verzeichnis befinden sich keine Dateien.","umbenennen","Geben Sie einen neuen Namen ein","Vorschau","Herunterladen","Aus der Zwischenablage einfügen","Ihr browser unterstützt kein direkter Zugriff auf die Zwischenablage.","Auswahl kopieren","kopieren","Border-radius","Alle anzeigen","Bewerben"]

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports.default = ["Escriba algo...","Acerca de Jodit","Jodit Editor",null,"Guía de usuario Jodit","contiene ayuda detallada para el uso.","Para información sobre la licencia, por favor visite nuestro sitio:","Compre la versión completa","Copyright © XDSoft.net - Chupurnov Valeriy. Todos los derechos reservados.","Anclar","Abrir en nueva pestaña","Abrir editor en pantalla completa","Limpiar formato","Color de relleno o de letra","Rehacer","Deshacer","Negrita","Cursiva","Insertar lista no ordenada","Insertar lista ordenada","Alinear Centrado","Alinear Justificado","Alinear Izquierda","Alinear Derecha","Insertar línea horizontal","Insertar imagen","Insertar archivo","Insertar video de Youtube/vimeo","Insertar vínculo","Tamaño de letra","Familia de letra","Insertar bloque","Normal","Encabezado 1","Encabezado 2","Encabezado 3","Encabezado 4","Cita","Código","Insertar","Insertar tabla","Disminuir sangría","Aumentar sangría","Seleccionar caracter especial","Insertar caracter especial","Copiar formato","Cambiar modo","Márgenes","arriba","derecha","abajo","izquierda","Estilos CSS","Clases CSS","Alinear","Derecha","Centrado","Izquierda","--No Establecido--","Fuente","Título","Texto Alternativo","Vínculo","Abrir vínculo en nueva pestaña","Imagen","Archivo","Avanzado","Propiedades de imagen","Cancelar","Aceptar","El código es similar a HTML. ¿Mantener como HTML?","Pegar como HTML?","Mantener","Limpiar","Insertar como texto","Insertar solo texto","Pegado desde Word detectado","El contenido pegado proviene de un documento de Microsoft Word/Excel. ¿Desea mantener el formato o limpiarlo?","Buscar archivo","Error al cargar la lista","Error al cargar las carpetas","¿Está seguro?","Entre nombre de carpeta","Crear carpeta","Entre el nombre","Soltar imagen","Soltar archivo","o click","Texto alternativo","Buscar","Subir","Fondo","Texto","Arriba","Centro","Abajo","Insertar columna antes","Interar columna después","Insertar fila arriba","Insertar fila debajo","Borrar tabla","Borrar fila","Borrar columna","Vaciar celda","HTML","negrita","cursiva","Brocha","Vínculo","deshacer","rehacer","Tabla","Imagen","Borrar","Párrafo","Tamaño de letra","Video","Letra","Acerca de","Imprimir","Símbolo","subrayar","tachar","sangría","quitar sangría","Tamaño completo","encoger","Copiar formato","línea horizontal","lista sin ordenar","lista ordenada","Cortar","Seleccionar todo","Incluir código","Abrir vínculo","Editar vínculo","No seguir","Desvincular","Ver","Para editar","Actualizar","URL","Editar","Alineación horizontal","filtrar","Ordenar por fecha modificación","Ordenar por nombre","Ordenar por tamaño","Agregar carpeta","Resetear","Guardar","Guardar como...","Redimensionar","Recortar","Ancho","Alto","Mantener relación de aspecto","Si","No","Quitar","Seleccionar","Caracteres: %d","Palabras: %d","Todo","Seleccionar: %s","Seleccionar todo","Alineación vertical","Dividir","Dividir vertical","Dividir horizontal","Mezclar","Agregar columna","Agregar fila","Borrar","Borde",null,"Tachado","Subrayado","superíndice","subíndice","Cortar selección","Pausa","Buscar","Reemplazar con","Reemplazar","Pegar","Seleccionar contenido para pegar","Solo puedes editar tus propias imágenes. ¿Descargar esta imagen en el servidor?","¡La imagen se ha subido correctamente al servidor!","paleta","No hay archivos en este directorio.","renombrar","Ingresa un nuevo nombre","avance","Descargar","Pegar desde el portapapeles","Su navegador no soporta el acceso directo en el portapapeles.","Selección de copia","copia","Radio frontera","Mostrar todos los","Aplicar"]

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports.default = ["Ecrivez ici","A propos de Jodit","Editeur Jodit",null,"Guide de l'utilisateur","Aide détaillée à l'utilisation","Consulter la licence sur notre site web:","Acheter la version complète","Copyright © XDSoft.net - Chupurnov Valeriy. Tous droits réservés.","Ancre","Ouvrir dans un nouvel onglet","Ouvrir l'éditeur en pleine page","Supprimer le formattage","Modifier la couleur du fond ou du texte","Refaire","Défaire","Gras","Italique","Liste non ordonnée","Liste ordonnée","Centrer","Justifier","Aligner à gauche ","Aligner à droite","Insérer une ligne horizontale","Insérer une image","Insérer un fichier","Insérer une vidéo","Insérer un lien","Taille des caractères","Famille des caractères","Bloc formatté","Normal","Titre 1","Titre 2","Titre 3","Titre 4","Citation","Code","Insérer","Insérer un tableau","Diminuer le retrait","Retrait plus","Sélectionnez un caractère spécial","Insérer un caractère spécial","Cloner le format","Mode wysiwyg <-> code html","Marges","haut","droite","Bas","gauche","Styles","Classes","Alignement","Droite","Centre","Gauche","--Non disponible--","Source","Titre","Alternative","Lien","Ouvrir le lien dans un nouvel onglet","Image","fichier","Avancé","Propriétés de l'image","Effacer","OK","Votre texte que vous essayez de coller est similaire au HTML. Collez-le en HTML?","Coller en HTML?","Sauvegarder l'original","Nettoyer","Coller en tant que texte","Coller le texte seulement","C'est peut-être un fragment de Word ou Excel","Le contenu que vous insérez provient d'un document Microsoft Word / Excel. Voulez-vous enregistrer le format ou l'effacer?","Explorateur de fichiers","Erreur de liste de chargement","Erreur de dossier de chargement","Etes-vous sûrs ?","Entrer le non de dossier","Créer un dossier","type de fichier","Coller une image","Déposer un fichier","ou cliquer","Texte de remplacemement","Chercher","Charger","Arrière-plan","Texte","Haut","Milieu","Bas","Insérer une colonne avant","Insérer une colonne après","Insérer une ligne en dessus","Insérer une ligne en dessous","Supprimer le tableau","Supprimer la ligne","Supprimer la colonne","Vider la cellule","la source","graisseux","italique","verser","lien","abolir","prêt","graphique","Image","la gommen","clause","taille de police","Video","police","à propos de l'éditeur","impression","caractère","souligné","barré","indentation","indifférent","taille réelle","taille conventionnelle","Format de copie","la ligne","Liste des","Liste numérotée","Couper","Sélectionner tout",null,"Ouvrir le lien","Modifier le lien","Attribut Nofollow","Supprimer le lien","Voir","Pour éditer","Mettre à jour","URL",null,"Alignement horizontal","Filtre","Trier par modifié","Trier par nom","Classer par taille","Ajouter le dossier","Restaurer","Sauvegarder","Enregistrer sous","Changer la taille","Taille de garniture","Largeur","Hauteur","Garder les proportions","Oui","Non","Supprimer","Mettre en évidence","Symboles: %d","Mots: %d",null,"Mettre en évidence: %s","Tout sélectionner","Alignement vertical","Split","Split vertical","Split horizontal","aller","Ajouter une colonne","Ajouter une rangée","Effacer",null,null,"Frapper à travers","Souligner","exposant","indice","Couper la sélection","Pause","Rechercher","Remplacer par","Remplacer","Coller","Choisissez le contenu à coller","Vous ne pouvez éditer que vos propres images. Téléchargez cette image sur l'hôte?","L'image a été téléchargée avec succès sur le serveur!null","Palette","Il n'y a aucun fichier dans ce répertoire.","renommer","Entrez un nouveau nom","Aperçu","Télécharger","Coller à partir du presse-papiers","Votre navigateur ne prend pas en charge l'accès direct à la presse-papiers.","Copier la sélection","copie","Rayon des frontières","Afficher tous les","Appliquer"]

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports.default = ["הקלד משהו...","About Jodit","Jodit Editor",null,"Jodit User's Guide","contains detailed help for using.","For information about the license, please go to our website:","Buy full version","Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.","מקום עיגון","פתח בכרטיסיה חדשה","פתח את העורך בחלון חדש","נקה עיצוב","שנה צבע טקסט או רקע","בצע שוב","בטל","מודגש","נטוי","הכנס רשימת תבליטים","הכנס רשימה ממוספרת","מרכז","ישר ","ישר לשמאל","ישר לימין","הכנס קו אופקי","הכנס תמונה","הכנס קובץ","הכנס סרטון וידאו מYouTube/Vimeo","הכנס קישור","גודל גופן","גופן","מעוצב מראש","רגיל","כותרת 1","כותרת 2","כותרת 3","כותרת 4","ציטוט","קוד","הכנס","הכנס טבלה","הקטן כניסה","הגדל כניסה","בחר תו מיוחד","הכנס תו מיוחד","העתק עיצוב","החלף מצב","ריווח","עליון","ימין","תחתון","שמאל","עיצוב CSS","מחלקת CSS","יישור","ימין","מרכז","שמאל","--לא נקבע--","מקור","כותרת","כיתוב חלופי","קישור","פתח בכרטיסיה חדשה","תמונה","קובץ","מתקדם","מאפייני תמונה","ביטול","אישור","הקוד דומה לHTML, האם להשאיר כHTML","הדבק כHTML","השאר","נקה","הכנס כטקסט","הכנס טקסט בלבד","זוהתה הדבקה מ\"וורד\"","התוכן המודבק מגיע ממסמך וורד/אקסל. האם ברצונך להשאיר את העיצוב או לנקותו","סייר הקבצים","שגיאה  בזמן טעינת רשימה","שגיאה בזמן טעינת תקיות","האם אתה בטוח?","הכנס שם תקיה","צור תקיה","סוג הקובץ","הסר תמונה","הסר קובץ","או לחץ","כיתוב חלופי","סייר","העלה","רקע","טקסט","עליון","מרכז","תחתון","הכנס עמודה לפני","הכנס עמודה אחרי","הכנס שורה מעל","הכנס שורה מתחת","מחק טבלה","מחק שורה","מחק עמודה","רוקן תא","HTML","מודגש","נטוי","מברשת","קישור","בטל","בצע שוב","טבלה","תמונה","מחק","פסקה","גודל גופן","וידאו","גופן","עלינו","הדפס","תו מיוחד","קו תחתון","קו חוצה","הגדל כניסה","הקטן כניסה","גודל מלא","כווץ","העתק עיצוב","קו אופקי","רשימת תבליטים","רשימה ממוספרת","חתוך","בחר הכל","הוסף קוד","פתח קישור","ערוך קישור","ללא מעקב","בטל קישור","הצג","כדי לערוך","עדכן","כתובת","ערוך","יישור אופקי","סנן","מין לפי שינוי","מיין לפי שם","מיין לפי גודל","הוסף תקייה","אפס","שמור","שמור בשם...","שנה גודל","חתוך","רוחב","גובה","שמור יחס","כן","לא","הסר","בחר","תווים: %d","מילים: %d","הכל","נבחר: %s","בחר הכל","יישור אנכי","פיצול","פיצול אנכי","פיצול אופקי","מזג","הוסף עמודה","הוסף שורה","מחק","מסגרת",null,"קו חוצה","קו תחתון","superscript","subscript","גזור בחירה","שבירת שורה","חפש","החלף ב","החלף","הדבק","בחר תוכן להדבקה","רק קבצים המשוייכים שלך ניתנים לעריכה. האם להוריד את הקובץ?","התמונה עלתה בהצלחה!","לוח","אין קבצים בספריה זו.","הונגרית","הזן שם חדש","תצוגה מקדימה","הורד","להדביק מהלוח","הדפדפן שלך לא תומך גישה ישירה ללוח.","העתק בחירה","העתק","רדיוס הגבול","הצג את כל","החל"]

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports.default = ["Írjon be valamit","Joditról","Jodit Editor","Ingyenes változat","Jodit útmutató","további segítséget tartalmaz","További licence információkért látogassa meg a weboldalunkat:","Teljes verzió megvásárlása","Copyright © XDSoft.net - Chupurnov Valeriy. Minden jog fenntartva.","Horgony","Megnyitás új lapon","Megnyitás teljes méretben","Formázás törlése","Háttér/szöveg szín","Újra","Visszavon","Félkövér","Dőlt","Pontozott lista","Számozott lista","Középre zárt","Sorkizárt","Balra zárt","Jobbra zárt","Vízszintes vonal beszúrása","Kép beszúrás","Fájl beszúrás","Youtube videó beszúrása","Link beszúrás","Betűméret","Betűtípus","Formázott blokk beszúrása","Normál","Fejléc 1","Fejléc 2","Fejléc 3","Fejléc 4","Idézet","Kód","Beszúr","Táblázat beszúrása","Behúzás csökkentése","Behúzás növelése","Speciális karakter kiválasztása","Speciális karakter beszúrása","Kép formázása","Nézet váltása","Szegélyek","felső","jobb","alsó","bal","CSS stílusok","CSS osztályok","Igazítás","Jobbra","Középre","Balra","Nincs","Forrás","Cím","Helyettesítő szöveg","Link","Link megnyitása új lapon","Kép","Fájl","Haladó","Kép tulajdonságai","Mégsem","OK","A beillesztett szöveg HTML-nek tűnik. Megtartsuk HTML-ként?","Beszúrás HTML-ként","Megtartás","Elvetés","Beszúrás szövegként","Csak szöveg beillesztése","Word-ből másolt szöveg","A beillesztett tartalom Microsoft Word/Excel dokumentumból származik. Meg szeretné tartani a formátumát?","Fájl tallózó","Hiba a lista betöltése közben","Hiba a mappák betöltése közben","Biztosan ezt szeretné?","Írjon be egy mappanevet","Mappa létrehozása","írjon be bevet","Húzza ide a képet","Húzza ide a fájlt","vagy kattintson","Helyettesítő szöveg","Tallóz","Feltölt","Háttér","Szöveg","Fent","Középen","Lent","Oszlop beszúrás elé","Oszlop beszúrás utána","Sor beszúrás fölé","Sor beszúrás alá","Táblázat törlése","Sor törlése","Oszlop törlése","Cella tartalmának törlése","HTML","Félkövér","Dőlt","Ecset","Link","Visszavon","Újra","Táblázat","Kép","Törlés","Paragráfus","Betűméret","Videó","Betű","Rólunk","Nyomtat","Szimbólum","Aláhúzott","Áthúzott","Behúzás","Aussenseiter","Teljes méret","Összenyom","Formátum másolás","Egyenes vonal","Lista","Számozott lista","Kivág","Összes kijelölése","Beágyazott kód","Link megnyitása","Link szerkesztése","Nincs követés","Link leválasztása","felülvizsgálat","Szerkesztés","Frissít","URL","Szerkeszt","Vízszintes igazítás","Szűrő","Rendezés módosítás szerint","Rendezés név szerint","Rendezés méret szerint","Mappa hozzáadás","Visszaállít","Mentés","Mentés másként...","Átméretezés","Kivág","Szélesség","Magasság","Képarány megtartása","Igen","Nem","Eltávolít","Kijelöl","Karakterek száma: %d","Szavak száma: %d","Összes","Kijelöl: %s","Összes kijelölése","Függőleges igazítás","Felosztás","Függőleges felosztás","Vízszintes felosztás","Összevonás","Oszlop hozzáadás","Sor hozzáadás","Törlés","Szegély",null,"Áthúzott","Aláhúzott","Felső index","Alsó index","Kivágás","Szünet","Keresés","Csere erre","Csere","Beillesztés","Válasszon tartalmat a beillesztéshez","Csak a saját képeit tudja szerkeszteni. Letölti ezt a képet?","Kép sikeresen feltöltve!","Palette","Er zijn geen bestanden in deze map.","átnevezés","Adja meg az új nevet","előnézet","Letöltés","Illessze be a vágólap","A böngésző nem támogatja a közvetlen hozzáférést biztosít a vágólapra.","Másolás kiválasztása","másolás","Határ sugár","Összes","Alkalmazni"]

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports.default = ["Ketik sesuatu","Tentang Jodit","Editor Jodit","Versi Bebas Non-komersil","Panduan Pengguna Jodit","mencakup detail bantuan penggunaan","Untuk informasi tentang lisensi, silakan kunjungi website:","Beli versi lengkap","Hak Cipta © XDSoft.net - Chupurnov Valeriy. Hak cipta dilindungi undang-undang.","Tautan","Buka di tab baru","Buka editor dalam ukuran penuh","Hapus Pemformatan","Isi warna atau atur warna teks","Ulangi","Batalkan","Tebal","Miring","Sisipkan Daftar Tidak Berurut","Sisipkan Daftar Berurut","Tengah","Penuh","Kiri","Kanan","Sisipkan Garis Horizontal","Sisipkan Gambar","Sisipkan Berkas","Sisipkan video youtube/vimeo","Sisipkan tautan","Ukuran font","Keluarga font","Sisipkan blok format","Normal","Heading 1","Heading 2","Heading 3","Heading 4","Kutip","Kode","Sisipkan","Sisipkan tabel","Kurangi Indentasi","Tambah Indentasi","Pilih Karakter Spesial","Sisipkan Karakter Spesial","Formar warna","Ubah mode","Batas","atas","kanan","bawah","kiri","Gaya","Class","Rata","Kanan","Tengah","Kiri","--Tidak diset--","Src","Judul","Teks alternatif","Tautan","Buka tautan di tab baru","Gambar","berkas","Lanjutan","Properti gambar","Batal","Ya","Kode Anda cenderung ke HTML. Biarkan sebagai HTML?","Paste sebagai HTML","Jaga","Bersih","Sisipkan sebagai teks","Sisipkan hanya teks","Terdeteksi paste dari Word","Konten dipaste dari dokumen Microsoft Word/Excel. Apakah Anda ingin tetap menjaga format atau membersihkannya?","Penjelajah Berkas","Error ketika memuat list","Error ketika memuat folder","Apakah Anda yakin?","Masukkan nama Direktori","Buat direktori","ketik nama","Letakkan gambar","Letakkan berkas","atau klik","Teks alternatif","Jelajahi","Unggah","Latar Belakang","Teks","Atas","Tengah","Bawah","Sisipkan kolom sebelumnya","Sisipkan kolom setelahnya","Sisipkan baris di atasnya","Sisipkan baris di bawahnya","Hapus tabel","Hapus baris","Hapus kolom","Kosongkan cell","sumber","tebal","miring","sikat","tautan","batalkan","ulangi","tabel","gambar","penghapus","paragraf","ukuran font","video","font","tentang","cetak","simbol","garis bawah","coret","menjorok ke dalam","menjorok ke luar","ukuran penuh","menyusut","salin format","hr","ul","ol","potong","Pilih semua","Kode embed","Buka tautan","Edit tautan","No follow","Hapus tautan","Mata","pensil","Perbarui","URL","Edit","Perataan horizontal","Filter","Urutkan berdasarkan perubahan","Urutkan berdasarkan nama","Urutkan berdasarkan ukuran","Tambah folder","Reset","Simpan","Simpan sebagai...","Ubah ukuran","Crop","Lebar","Tinggi","Jaga aspek rasio","Ya","Tidak","Copot","Pilih","Karakter: %d","Kata: %d","Semua","Pilih %s","Pilih semua","Rata vertikal","Bagi","Bagi secara vertikal","Bagi secara horizontal","Gabungkan","Tambah kolom","tambah baris","Hapus","Bingkai","Lisensi: %s","Coret","Garis Bawah","Superskrip","Subskrip","Potong pilihan","Berhenti","Mencari","Ganti dengan","Ganti","Paste","Pilih konten untuk dipaste","Anda hanya dapat mengedit gambar Anda sendiri. Unduh gambar ini di host?","Gambar telah sukses diunggah ke host!","palet","Tidak ada berkas","ganti nama","Masukkan nama baru","pratinjau","Unduh","Paste dari clipboard","Browser anda tidak mendukung akses langsung ke clipboard.","Copy seleksi","copy","Border radius","Tampilkan semua","Menerapkan"]

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports.default = ["Scrivi qualcosa...","A proposito di Jodit","Jodit Editor",null,"Guida utente di Jodit","contiene una guida dettagliata per l'uso.","Per informazioni sulla licenza, si prega di visitare il nostro sito:","Acquista la versione completa","Copyright © XDSoft.net - Chupurnov Valeriy. Alle Rechte vorbehalten.","Ancora","Apri in una nuova scheda","Apri l'editor a schermo intero","Formato chiaro","Riempi colore o lettera","Ripristina","Annulla","Grassetto","Corsivo","Inserisci lista non ordinata","Inserisci l'elenco ordinato","Allinea Centra","Allineare Giustificato","Allinea a Sinistra","Allinea a Destra","Inserisci la linea orizzontale","Inserisci immagine","Inserisci un file","Inserisci video Youtube/Vimeo","Inserisci il link","Dimensione del carattere","Tipo di font","Inserisci blocco","Normale","Heading 1","Heading 2","Heading 3","Heading 4","Citazione","Codice","Inserisci","Inserisci tabella","Riduci il rientro","Aumenta il rientro","Seleziona una funzione speciale","Inserisci un carattere speciale","Copia formato","Cambia modo","Margini","su","destra","giù","sinistra","Stili CSS","Classi CSS","Allinea","Destra","Centro","Sinistra","--Non Impostato--","Fonte","Titolo","Testo Alternativo","Link","Apri il link in una nuova scheda","Immagine","Archivio","Avanzato","Proprietà dell'immagine","Annulla","Accetta","Il codice è simile all'HTML. Mantieni come HTML?","Incolla come HTML?","Mantieni","Pulisci","Inserisci come testo","Inserisci solo il testo","Incollato da Word rilevato","Il contenuto incollato proviene da un documento Microsoft Word / Excel. Vuoi mantenere il formato o pulirlo?","Cerca il file","Errore durante il caricamento dell'elenco","Errore durante il caricamento delle cartelle","Sei sicuro?","Inserisci il nome della cartella","Crea cartella","Entre el nombre","Rilascia l'immagine","Rilascia file","o click","Testo alternativo","Sfoglia","Carica","Sfondo","Testo","Su","Centro","Sotto","Inserisci prima la colonna","Inserisci colonna dopo","Inserisci la riga sopra","Inserisci la riga sotto","Elimina tabella","Elimina riga","Elimina colonna","Cella vuota","HTML","Grassetto","Corsivo","Pennello","Link","Annulla","Ripristina","Tabella","Immagine","Gomma","Paragrafo","Dimensione del carattere","Video","Font","Approposito di","Stampa","Simbolo","Sottolineato","Barrato","trattino","annulla rientro","A grandezza normale","comprimere","Copia il formato","linea orizzontale","lista non ordinata","lista ordinata","Taglia","Seleziona tutto","Includi codice","Apri link","Modifica link","Non seguire","Togli link","Recensione","Per modificare","Aggiornare"," URL","Modifica","Allineamento orizzontale","Filtro","Ordina per data di modifica","Ordina per nome","Ordina per dimensione","Aggiungi cartella","Reset","Salva","Salva con nome...","Ridimensiona","Tagliare","Larghezza","Altezza","Mantenere le proporzioni","Si","No","Rimuovere","Seleziona","Caratteri: %d","Parole: %d","Tutto","Seleziona: %s","Seleziona tutto","Allineamento verticala","Dividere","Dividere verticalmente","Diviso orizzontale","Fondi","Aggiungi colonna","Aggiungi riga","Cancella","Bordo",null,"Barrato","Sottolineato","indice","deponente","Taglia la selezione","Pausa","Cerca","Sostituisci con","Sostituisci","Incolla","Seleziona il contenuto da incollare","Puoi modificare solo le tue immagini. Scarica questa immagine sul server?","L'immagine è stata caricata con successo sul server!","tavolozza","Non ci sono file in questa directory.","ungherese","Inserisci un nuovo nome","anteprima","Scaricare","Incolla dagli appunti","Il tuo browser non supporta l'accesso diretto agli appunti.","Selezione di copia","copia","Border radius","Mostra tutti","Applicare"]

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports.default = ["なにかタイプしてください","Joditについて","Jodit Editor",null,"Jodit ユーザーズ・ガイド","詳しい使い方","ライセンス詳細についてはJodit Webサイトを確認ください：","フルバージョンを購入","Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.","Anchor","新しいタブで開く","エディターのサイズ（フル/ノーマル）","書式をクリア","テキストの色","やり直し","元に戻す","太字","斜体","箇条書き","番号付きリスト","中央揃え","両端揃え","左揃え","右揃え","区切り線を挿入","画像を挿入","ファイルを挿入","Youtube/Vimeo 動画","リンクを挿入","フォントサイズ","フォント","テキストのスタイル","指定なし","タイトル1","タイトル2","タイトル3","タイトル4","引用","コード","挿入","表を挿入","インデント減","インデント増","特殊文字を選択","特殊文字を挿入","書式を貼付け","編集モード切替え","マージン","上","右","下","左","スタイル","クラス","配置","右寄せ","中央寄せ","左寄せ","指定なし","ソース","タイトル","代替テキスト","リンク","新しいタブで開く","画像","ファイル","高度な設定","画像のプロパティー","キャンセル","確定","HTMLコードを保持しますか？","HTMLで貼付け","HTMLを保持","Clean","HTMLをテキストにする","テキストだけ","Word Paste Detected","The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?","File Browser","Error on load list","Error on load folders","Are you sure?","Enter Directory name","Create directory","type name","ここに画像をドロップ","ここにファイルをドロップ","or クリック","代替テキスト","ブラウズ","アップロード","背景","文字","上","中央","下","左に列を挿入","右に列を挿入","上に行を挿入","下に行を挿入","表を削除","行を削除","列を削除","セルを空にする","source","bold","italic","brush","link","undo","redo","table","image","eraser","paragraph","fontsize","video","font","about","print","symbol","underline","strikethrough","indent","outdent","fullsize","shrink","copyformat","分割線","箇条書き","番号付きリスト","切り取り","すべて選択","埋め込みコード","リンクを開く","リンクを編集","No follow","リンク解除","サイトを確認","鉛筆","更新","URL","編集","水平方向の配置","Filter","Sort by changed","Sort by name","Sort by size","Add folder","リセット","保存","Save as ...","リサイズ","Crop","幅","高さ","縦横比を保持","はい","いいえ","移除","選択","文字数: %d","単語数: %d","全部","選択: %s","すべて選択","垂直方向の配置","分割","セルの分割（垂直方向）","セルの分割（水平方向）","セルの結合","列を追加","行を追加","削除","境界線",null,"取り消し線","下線","上付き文字","下付き文字","切り取り","Pause","検索","置換","置換","貼付け","選択した内容を貼付け","You can only edit your own images. Download this image on the host?","The image has been successfully uploaded to the host!","パレット","There are no files","Rename","Enter new name","プレビュー","ダウンロード","貼り付け","お使いのブラウザはクリップボードを使用できません","コピー","copy","角の丸み","全て表示","適用"]

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports.default = ["무엇이든 입력하세요","Jodit에 대하여","Jodit Editor",null,"Jodit 사용자 안내서","자세한 도움말이 들어있어요","라이센스에 관해서는 Jodit 웹 사이트를 방문해주세요：","풀 버전 구입하기","© XDSoft.net - Chupurnov Valeriy. 에게 저작권과 모든 권리가 있습니다.","Anchor","새 탭에서 열기","전체 크기로 보기","서식 지우기","글씨 색상","재실행","실행 취소","굵게","기울임","글머리 목록","번호 목록","가운데 정렬","양쪽 정렬","왼쪽 정렬","오른쪽 정렬","수평 구분선 넣기","이미지 넣기","파일 넣기","Youtube/Vimeo 동영상","링크 넣기","글꼴 크기","글꼴","블록 요소 넣기","일반 텍스트","제목 1","제목 2","제목 3","제목 4","인용","코드","붙여 넣기","테이블","들여쓰기 감소","들여쓰기 증가","특수문자 선택","특수문자 입력","페인트 형식","편집모드 변경","마진","위","오른쪽","아래","왼쪽","스타일","클래스","정렬","오른쪽으로","가운데로","왼쪽으로","--지정 안 함--","경로(src)","제목","대체 텍스트(alt)","링크","새 탭에서 열기",null,"파일","고급","이미지 속성","취소","확인","HTML 코드로 감지했어요. 코드인채로 붙여넣을까요?","HTML로 붙여넣기","원본 유지","지우기","텍스트로 넣기","텍스트만 넣기","Word 붙여넣기 감지","Microsoft Word/Excel 문서로 감지했어요. 서식을 유지한채로 붙여넣을까요?","파일 탐색기","목록 불러오기 에러","폴더 불러오기","정말 진행할까요?","디렉토리 이름 입력","디렉토리 생성","이름 입력","이미지 드래그","파일 드래그","혹은 클릭","대체 텍스트","탐색","업로드","배경","텍스트","위","중앙","아래","이전 열에 삽입","다음 열에 삽입","위 행에 삽입","아래 행에 삽입","테이블 삭제","행 삭제","열 삭제","빈 셀","HTML 소스","볼드","이탤릭","브러시","링크","실행 취소","재실행","테이블","이미지","지우개","문단","글꼴 크기","비디오","글꼴","편집기 정보","프린트","기호","밑줄","취소선","들여쓰기","내어쓰기","전체 화면","일반 화면","복사 형식","구분선","글머리 목록","번호 목록","잘라내기","모두 선택","Embed 코드","링크 열기","링크 편집","No follow","링크 제거","사이트 확인","연필","갱신","URL","편집","수평 정렬","필터","변경일 정렬","이름 정렬","크기 정렬","새 폴더","초기화","저장","새로 저장하기 ...","리사이즈","크롭","가로 길이","세로 높이","비율 유지하기","네","아니오","제거","선택","문자수: %d","단어수: %d","모두","선택: %s","모두 선택","수직 정렬","분할","세로 셀 분할","가로 셀 분할","셀 병합","열 추가","행 추가","삭제","외곽선","라이센스: %s","취소선","밑줄","윗첨자","아래첨자","선택 잘라내기","구분자","검색","대체하기","대체","붙여넣기","붙여넣을 내용 선택","외부 이미지는 편집할 수 없어요. 외부 이미지를 다운로드 할까요?","이미지를 무사히 업로드 했어요!","팔레트","파일이 없어요","이름 변경","새 이름 입력","리미보기","다운로드","클립보드 붙여넣기","사용중인 브라우저가 클립보드 접근을 지원하지 않아요.","선택 복사","복사","둥근 테두리","모두 보기","적용"]

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports.default = ["Begin met typen..","Over Jodit","Jodit Editor","Gratis niet-commerciële versie","Jodit gebruikershandleiding","bevat gedetailleerde informatie voor gebruik.","Voor informatie over de licentie, ga naar onze website:","Volledige versie kopen","Copyright © XDSoft.net - Chupurnov Valeriy. Alle rechten voorbehouden.","Anker","Open in nieuwe tab","Editor in volledig scherm openen","Opmaak verwijderen","Vulkleur of tekstkleur aanpassen","Opnieuw","Ongedaan maken","Vet","Cursief","Geordende list invoegen","Ongeordende lijst invoegen","Centreren","Uitlijnen op volledige breedte","Links uitlijnen","Rechts uitlijnen","Horizontale lijn invoegen","Afbeelding invoegen","Bestand invoegen","Youtube/Vimeo video invoegen","Link toevoegen","Tekstgrootte","Lettertype","Format blok invoegen","Normaal","Koptekst 1","Koptekst 2","Koptekst 3","Koptekst 4","Citaat","Code","Invoegen","Tabel invoegen","Inspringing verkleinen","Inspringing vergroten","Symbool selecteren","Symbool invoegen","Opmaak kopieren","Modus veranderen","Marges","Boven","Rechts","Onder","Links","CSS styles","CSS classes","Uitlijning","Rechts","Gecentreerd","Links","--Leeg--","Src","Titel","Alternatieve tekst","Link","Link in nieuwe tab openen","Afbeelding","Bestand","Geavanceerd","Afbeeldingseigenschappen","Annuleren","OK","Deze code lijkt op HTML. Als HTML behouden?","Invoegen als HTML","Origineel behouden","Opschonen","Als tekst invoegen","Als onopgemaakte tekst invoegen","Word-tekst gedetecteerd","De geplakte tekst is afkomstig van een Microsoft Word/Excel document. Wil je de opmaak behouden of opschonen?","Bestandsbrowser","Fout bij het laden van de lijst","Fout bij het laden van de mappenlijst","Weet je het zeker?","Geef de map een naam","Map aanmaken","Type naam","Sleep hier een afbeelding naartoe","Sleep hier een bestand naartoe","of klik","Alternatieve tekst","Bladeren","Uploaden","Achtergrond","Tekst","Boven","Midden","Onder","Kolom invoegen (voor)","Kolom invoegen (na)","Rij invoegen (boven)","Rij invoegen (onder)","Tabel verwijderen","Rij verwijderen","Kolom verwijderen","Cel leegmaken","Broncode","vet","cursief","kwast","link","ongedaan maken","opnieuw","tabel","afbeelding","gum","paragraaf","lettergrootte","video","lettertype","over","afdrukken","symbool","onderstreept","doorgestreept","inspringen","minder inspringen","volledige grootte","kleiner maken","opmaak kopiëren","horizontale lijn","lijst","genummerde lijst","knip","alles selecteren","Embed code","link openen","link aanpassen","niet volgen","link verwijderen","Recensie","Om te bewerken","Updaten"," URL","Bewerken","Horizontaal uitlijnen","Filteren","Sorteren op wijzigingsdatum","Sorteren op naam","Sorteren op grootte","Map toevoegen","Herstellen","Opslaan","Opslaan als ...","Grootte aanpassen","Bijknippen","Breedte","Hoogte","Verhouding behouden","Ja","Nee","Verwijderen","Selecteren","Tekens: %d","Woorden: %d","Alles","Selecteer: %s","Selecteer alles","Verticaal uitlijnen","Splitsen","Verticaal splitsen","Horizontaal splitsen","Samenvoegen","Kolom toevoegen","Rij toevoegen","Verwijderen","Rand",null,"Doorstrepen","Onderstrepen","Superscript","Subscript","Selectie knippen","Enter","Zoek naar","Vervangen door","Vervangen","Plakken","Kies content om te plakken","Je kunt alleen je eigen afbeeldingen aanpassen. Deze afbeelding downloaden?","De afbeelding is succesvol geüploadet!","Palette","Er zijn geen bestanden in deze map.","Hongaars","Voer een nieuwe naam in","voorvertoning","Download","Plakken van klembord","Uw browser ondersteunt geen directe toegang tot het klembord.","Selectie kopiëren","kopiëren","Border radius","Toon alle","Toepassing"]

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports.default = ["Napisz coś","O Jodit","Edytor Jodit",null,"Instrukcja Jodit","zawiera szczegółowe informacje dotyczące użytkowania.","Odwiedź naszą stronę, aby uzyskać więcej informacji na temat licencji:","Zakup pełnej wersji","Copyright © XDSoft.net - Chupurnov Valeriy. Wszystkie prawa zastrzeżone.","Kotwica","Otwórz w nowej zakładce","Otwórz edytor w pełnym rozmiarze","Wyczyść formatowanie","Kolor wypełnienia lub ustaw kolor tekstu","Ponów","Cofnij","Pogrubienie","Kursywa","Wstaw listę wypunktowaną","Wstaw listę numeryczną","Wyśrodkuj","Wyjustuj","Wyrównaj do lewej","Wyrównaj do prawej","Wstaw linię poziomą","Wstaw grafikę","Wstaw plik","Wstaw film Youtube/vimeo","Wstaw link","Rozmiar tekstu","Krój czcionki","Wstaw formatowanie","Normalne","Nagłówek 1","Nagłówek 2","Nagłówek 3","Nagłówek 4","Cytat","Kod","Wstaw","Wstaw tabelę","Zmniejsz wcięcie","Zwiększ wcięcie","Wybierz znak specjalny","Wstaw znak specjalny","Malarz formatów","Zmień tryb","Marginesy","Górny","Prawy","Dolny","Levy","Style CSS","Klasy CSS","Wyrównanie","Prawa","środek","Lewa","brak","Źródło","Tytuł","Tekst alternatywny","Link","Otwórz w nowej zakładce","Grafika","Plik","Zaawansowane","Właściwości grafiki","Anuluj","OK","Twój kod wygląda jak HTML. Zachować HTML?","Wkleić jako HTML?","Oryginalny tekst","Wyczyść","Wstaw jako tekst","Wstaw tylko treść","Wykryto tekst w formacie Word","Wklejany tekst pochodzi z dokumentu Microsoft Word/Excel. Chcesz zachować ten format czy wyczyścić go? ","Przeglądarka plików","Błąd ładowania listy plików","Błąd ładowania folderów","Czy jesteś pewien?","Wprowadź nazwę folderu","Utwórz folder","wprowadź nazwę","Upuść plik graficzny","Upuść plik","lub kliknij tu","Tekst alternatywny","Przeglądaj","Wczytaj","Tło","Treść","Góra","Środek","Dół","Wstaw kolumnę przed","Wstaw kolumnę po","Wstaw wiersz przed","Wstaw wiersz po","Usuń tabelę","Usuń wiersz","Usuń kolumnę","Wyczyść komórkę","HTML","pogrubienie","kursywa","pędzel","link","cofnij","ponów","tabela","grafika","wyczyść","akapit","rozmiar czcionki","wideo","czcionka","O programie","drukuj","symbol","podkreślenie","przekreślenie","wcięcie","wycięcie","pełen rozmiar","przytnij","format kopii","linia pozioma","lista","lista numerowana","wytnij","zaznacz wszystko","Wstaw kod","otwórz link","edytuj link","Atrybut no-follow","Usuń link","szukaj","edytuj","Aktualizuj","URL","Edytuj","Wyrównywanie w poziomie","Filtruj","Sortuj wg zmiany","Sortuj wg nazwy","Sortuj wg rozmiaru","Dodaj folder","wyczyść","zapisz","zapisz jako","Zmień rozmiar","Przytnij","Szerokość","Wysokość","Zachowaj proporcje","Tak","Nie","Usuń","Wybierz","Znaki: %d","Słowa: %d","Wszystko","Wybierz: %s","Wybierz wszystko","Wyrównywanie w pionie","Podziel","Podziel w pionie","Podziel w poziomie","Scal","Dodaj kolumnę","Dodaj wiersz","Usuń","Obramowanie",null,"Przekreślenie","Podkreślenie","indeks górny","index dolny","Wytnij zaznaczenie","Przerwa","Szukaj","Zamień na","Zamień","Wklej","Wybierz zawartość do wklejenia","Możesz edytować tylko swoje grafiki. Czy chcesz pobrać tą grafikę?","Grafika została pomyślnienie dodana na serwer","Paleta","Brak plików.","zmień nazwę","Wprowadź nową nazwę","podgląd","pobierz","Wklej ze schowka","Twoja przeglądarka nie obsługuje schowka","Kopiuj zaznaczenie","kopiuj","Zaokrąglenie krawędzi","Pokaż wszystkie","Zastosuj"]

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports.default = ["Escreva algo...","Sobre o Jodit","Editor Jodit",null,"Guia de usuário Jodit","contém ajuda detalhada para o uso.","Para informação sobre a licença, por favor visite nosso site:","Compre a versão completa","Copyright © XDSoft.net - Chupurnov Valeriy. Todos os direitos reservados.","Link","Abrir em nova aba","Abrir editor em tela cheia","Limpar formatação","Cor de preenchimento ou cor do texto","Refazer","Desfazer","Negrito","Itálico","Inserir lista não ordenada","Inserir lista ordenada","Centralizar","Justificar","Alinhar à Esquerda","Alinhar à Direita","Inserir linha horizontal","Inserir imagem","Inserir arquivo","Inserir vídeo do Youtube/vimeo","Inserir link","Tamanho da letra","Fonte","Inserir bloco","Normal","Cabeçalho 1","Cabeçalho 2","Cabeçalho 3","Cabeçalho 4","Citação","Código","Inserir","Inserir tabela","Diminuir recuo","Aumentar recuo","Selecionar caractere especial","Inserir caractere especial","Copiar formato","Mudar modo","Margens","cima","direta","baixo","esquerda","Estilos CSS","Classes CSS","Alinhamento","Direita","Centro","Esquerda","--Não Estabelecido--","Fonte","Título","Texto Alternativo","Link","Abrir link em nova aba","Imagem","Arquivo","Avançado","Propriedades da imagem","Cancelar","Ok","Seu código é similar ao HTML. Manter como HTML?","Colar como HTML?","Manter","Limpar","Inserir como Texto","Inserir somente o Texto","Colado do Word Detectado","O conteúdo colado veio de um documento Microsoft Word/Excel. Você deseja manter o formato ou limpa-lo?","Procurar arquivo","Erro ao carregar a lista","Erro ao carregar as pastas","Você tem certeza?","Escreva o nome da pasta","Criar pasta","Escreva seu nome","Soltar imagem","Soltar arquivo","ou clique","Texto alternativo","Explorar","Upload","Fundo","Texto","Cima","Meio","Baixo","Inserir coluna antes","Inserir coluna depois","Inserir linha acima","Inserir linha abaixo","Excluir tabela","Excluir linha","Excluir coluna","Limpar célula","HTML","negrito","itálico","pincel","link","desfazer","refazer","tabela","imagem","apagar","parágrafo","tamanho da letra","vídeo","fonte","Sobre de","Imprimir","Símbolo","sublinhar","tachado","recuar","diminuir recuo","Tamanho completo","diminuir","Copiar formato","linha horizontal","lista não ordenada","lista ordenada","Cortar","Selecionar tudo","Incluir código","Abrir link","Editar link","Não siga","Remover link","Visualizar","Editar","Atualizar","URL","Editar","Alinhamento horizontal","filtrar","Ordenar por modificação","Ordenar por nome","Ordenar por tamanho","Adicionar pasta","Resetar","Salvar","Salvar como...","Redimensionar","Recortar","Largura","Altura","Manter a proporção","Sim","Não","Remover","Selecionar","Caracteres: %d","Palavras: %d","Tudo","Selecionar: %s","Selecionar tudo","Alinhamento vertical","Dividir","Dividir vertical","Dividir horizontal","Mesclar","Adicionar coluna","Adicionar linha","Excluir","Borda",null,"Tachado","Sublinhar","sobrescrito","subscrito","Cortar seleção","Pausa","Procurar por","Substituir com","Substituir","Colar","Escolher conteúdo para colar","Você só pode editar suas próprias imagens. Baixar essa imagem pro servidor?","A imagem foi enviada com sucesso para o servidor!","Palette","Não há arquivos nesse diretório.","Húngara","Digite um novo nome","preview","Baixar","Colar da área de transferência","O seu navegador não oferece suporte a acesso direto para a área de transferência.","Selecção de cópia","cópia","Border radius","Mostrar todos os","Aplicar"]

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports.default = ["Напишите что-либо","О Jodit","Редактор Jodit",null,"Jodit Руководство пользователя","содержит детальную информацию по использованию","Для получения сведений о лицензии , пожалуйста, перейдите на наш сайт:","Купить полную версию","Авторские права © XDSoft.net - Чупурнов Валерий. Все права защищены.","Анкор","Открывать ссылку в новой вкладке","Открыть редактор в полном размере","Очистить форматирование","Цвет заливки или цвет текста","Повтор","Отмена","Жирный","Наклонный","Вставка маркированного списка","Вставить нумерованный список","Выровнять по центру","Выровнять по ширине","Выровнять по левому краю","Выровнять по правому краю","Вставить горизонтальную линию","Вставить изображение","Вставить файл","Вставьте видео","Вставить ссылку","Размер шрифта","Шрифт","Вставить блочный элемент","Нормальный текст","Заголовок 1","Заголовок 2","Заголовок 3","Заголовок 4","Цитата","Код","Вставить","Вставить таблицу","Уменьшить отступ","Увеличить отступ","Выберите специальный символ","Вставить специальный символ","Формат краски","Источник","Отступы","сверху","справа","снизу","слева","Стили","Классы","Выравнивание","По правому краю","По центру","По левому краю","--не устанавливать--","src","Заголовок","Альтернативный текст (alt)","Ссылка","Открывать ссылку в новом окне",null,"Файл","Расширенные","Свойства изображения","Отмена","Ок","Ваш текст, который вы пытаетесь вставить похож на HTML. Вставить его как HTML?","Вставить как HTML?","Сохранить оригинал","Почистить","Вставить как текст","Вставить только текст","Возможно это фрагмент Word или Excel","Контент который вы вставляете поступает из документа Microsoft Word / Excel. Вы хотите сохранить формат или очистить его?","Браузер файлов","Ошибка при загрузке списка изображений","Ошибка при загрузке списка директорий","Вы уверены?","Введите название директории","Создать директорию","введите название","Перетащите сюда изображение","Перетащите сюда файл","или нажмите","Альтернативный текст","Сервер","Загрузка","Фон","Текст"," К верху","По середине","К низу","Вставить столбец до","Вставить столбец после","Вставить ряд выше","Вставить ряд ниже","Удалить таблицу","Удалять ряд","Удалить столбец","Очистить ячейку","HTML","жирный","курсив","заливка","ссылка","отменить","повторить","таблица","Изображение","очистить","параграф","размер шрифта","видео","шрифт","о редакторе","печать","символ","подчеркнутый","перечеркнутый","отступ","выступ","во весь экран","обычный размер","Копировать формат","линия","Список","Нумерованный список","Вырезать","Выделить все","Код","Открыть ссылку","Редактировать ссылку","Атрибут nofollow","Убрать ссылку","Просмотр","Редактировать","Обновить","URL","Редактировать","Горизонтальное выравнивание","Фильтр","По изменению","По имени","По размеру","Добавить папку","Восстановить","Сохранить","Сохранить как","Изменить размер","Обрезать размер","Ширина","Высота","Сохранять пропорции","Да","Нет","Удалить","Выделить","Символов: %d","Слов: %d","Выделить все","Выделить: %s","Выделить все","Вертикальное выравнивание","Разделить","Разделить по вертикали","Разделить по горизонтали","Объединить в одну","Добавить столбец","Добавить строку","Удалить","Рамка","Лицензия: %s","Перечеркнуть","Подчеркивание","верхний индекс","индекс","Вырезать","Разделитель","Найти","Заменить на","Заменить","Вставить","Выбрать контент для вставки","Вы можете редактировать только свои собственные изображения. Загрузить это изображение на ваш сервер?","Изображение успешно загружено на сервер!","палитра","В данном каталоге нет файлов","Переименовать","Введите новое имя","Предпросмотр","Скачать","Вставить из буфера обмена","Ваш браузер не поддерживает прямой доступ к буферу обмена.","Скопировать выделенное","копия","Радиус границы","Показать все","Применить"]

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports.default = ["Bir şey yazın.","Jodit Hakkında","Jodit Editor",null,"Jodit Kullanım Kılavuzu","kullanım için detaylı bilgiler içerir","Lisans hakkında bilgi için lütfen web sitemize gidin:","Tam versiyon satın al","Copyright © XDSoft.net - Chupurnov Valeriy. Tüm Hakları Saklıdır","Bağlantı","Yeni sekmede aç","Tam ekran editör","Stili temizle","Dolgu ve yazı rengi seç","İleri Al","Geri Al","Kalın","İtalik","Sırasız Liste Ekle","Sıralı Liste Ekle","Ortala","Kenarlara Yasla","Sola Yasla","Sağa Yasla","Yatay Çizgi Ekle","Resim Ekle","Dosya Ekle","Youtube/vimeo Videosu Ekle","Bağlantı Ekle","Font Boyutu","Font Ailesi","Blok Ekle","Normal","Başlık 1","Başlık 2","Başlık 3","Başlık 4","Alıntı","Code","Ekle","Tablo Ekle","Girintiyi Azalt","Girintiyi Arttır","Özel Karakter Seç","Özel Karakter Ekle","Resim Biçimi","Mod Değiştir","MEsafeler","Üst","Sağ","Alt","Sol","CSS Stilleri","CSS Sınıfları","Hizalama","Sağ","Ortalı","Sol","Belirlenmedi","Kaynak","Başlık","Alternatif Yazı","Link","Bağlantıyı yeni sekmede aç","Resim","Dosya","Gelişmiş","Resim özellikleri","İptal","Tamam","Kodunuz HTML koduna benziyor. HTML olarak devam etmek ister misiniz?","HTML olarak yapıştır","Sakla","Temizle","Yazı olarak ekle","Nur Text einfügen","Word biçiminde yapıştırma algılandı","Der Inhalt, den Sie einfügen, stammt aus einem Microsoft Word / Excel-Dokument. Möchten Sie das Format erhalten oder löschen?","Dosya Gezgini","Liste yüklenirken hata oluştu","Klasörler yüklenirken hata oluştur","Emin misiniz?","Dizin yolu giriniz","Dizin oluştur","Typname","Resim bırak","Dosya bırak","veya tıkla","Alternatif yazı","Ekle","Yükle","Arka plan","Yazı","Üst","Orta","Aşağı","Öncesine kolon ekle","Sonrasına kolon ekle","Üstüne satır ekle","Altına satır ekle","Tabloyu sil","Satır sil","Kolon sil","Hücreyi boşalt","Kaynak","Kalın","italik","Fırça","Bağlantı","Geri al","İleri al","Tablo","Resim","Silgi","Paragraf","Font boyutu","Video","Font","Hakkında","Yazdır","Sembol","Alt çizgi","Üstü çizili","Girinti","Çıkıntı","Tam ekran","Küçült","Kopyalama Biçimi","Ayraç","Sırasız liste","Sıralı liste","Kes","Tümünü seç","Kod ekle","Bağlantıyı aç","Bağlantıyı düzenle","Nofollow özelliği","Bağlantıyı kaldır","Yorumu","Düzenlemek için","Güncelle","URL","Düzenle","Yatay hizalama","Filtre","Değişime göre sırala","İsme göre sırala","Boyuta göre sırala","Klasör ekle","Sıfırla","Kaydet","Farklı kaydet","Boyutlandır","Kırp","Genişlik","Yükseklik","En boy oranını koru","Evet","Hayır","Sil","Seç","Harfler: %d","Kelimeler: %d","Tümü","Seç: %s","Tümünü seç","Dikey hizalama","Ayır","Dikey ayır","Yatay ayır","Birleştir","Kolon ekle","Satır ekle","Sil","Kenarlık",null,"Durchschlagen","Alt çizgi","Üst yazı","Alt yazı","Seçilimi kes","Durdur","Ara","Şununla değiştir","Değiştir","Yapıştır","Yapıştırılacak içerik seç","Sadece kendi resimlerinizi düzenleyebilirsiniz. Bu görseli kendi hostunuza indirmek ister misiniz?","Görsel başarıyla hostunuza yüklendi","Palette","Bu dizinde dosya yok.","Macarca","Yeni isim girin","Ön izleme","İndir","Panodan yapıştır ","Tarayıcınız pano doğrudan erişim desteklemiyor.","Kopya seçimi","kopya","Sınır yarıçapı","Tümünü Göster ","Uygula"]

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports.default = ["输入一些内容","关于Jodit","Jodit Editor","Free Non-commercial Version","开发者指南","使用帮助","有关许可证的信息，请访问我们的网站：","购买完整版本","Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.","Anchor","在新窗口打开","全屏编辑","清除样式","颜色","重做","撤销","粗体","斜体","符号列表","编号","居中","对齐文本","左对齐","右对齐","分割线","图片","文件","youtube/vimeo 视频","链接","字号","字体","格式块","文本","标题1","标题2","标题3","标题4","引用","代码","插入","表格","减少缩进","增加缩进","选择特殊符号","特殊符号","格式复制","改变模式","外边距（Margins）","top","right","bottom","left","样式","Classes","对齐方式","居右","居中","居左","无","Src","Title","Alternative","Link","在新窗口打开链接","图片","file","高级","图片属性","取消","确定","你粘贴的文本是一段html代码，是否保留源格式","html粘贴","保留源格式","匹配目标格式","把html代码视为普通文本","只保留文本","文本粘贴","正在粘贴 Word/Excel 的文本，是否保留源格式？","文件管理","加载list错误","加载folders错误","你确定吗？","输入路径","创建路径","type name","拖动图片到此","拖动文件到此","或点击","Alternative text","浏览","上传","背景色","文字","顶部","中间","底部","在之前插入列","在之后插入列","在之前插入行","在之后插入行","删除表格","删除行","删除列","清除内容","源码","粗体","斜体","颜色","链接","撤销","重做","表格","图片","橡皮擦","段落","字号","视频","字体","关于","打印","符号","下划线","上出现","增加缩进","减少缩进","全屏","收缩","复制格式","分割线","无序列表","顺序列表","剪切","全选","嵌入代码","打开链接","编辑链接","No follow","Unlink","回顧","铅笔","更新","URL",null,"水平对齐","筛选","修改时间排序","名称排序","大小排序","新建文件夹","重置","保存","保存为","调整大小","Crop","宽","高","保存长宽比","是","不","移除","选择","字符数: %d","单词数: %d","全部","选择: %s","全选","垂直对齐","拆分","垂直拆分","水平拆分","合并","添加列","添加行","删除","边框",null,"删除线","下划线","上标","下标","剪切","Pause","查找","替换为","替换","粘贴","选择内容并粘贴","你只能编辑你自己的图片。Download this image on the host?","图片上传成功","调色板","此目录中沒有文件。","重命名","输入新名称","预览","下载","粘贴从剪贴板","你浏览器不支持直接访问的剪贴板。","复制的选择","复制","边界半径","显示所有","适用"]

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports.default = ["輸入一些內容","關於Jodit","Jodit Editor",null,"開發者指南","使用幫助","有關許可證的信息，請訪問我們的網站：","購買完整版本","Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.","Anchor","在新窗口打開","全屏編輯","清除樣式","顏色","重做","撤銷","粗體","斜體","符號列表","編號","居中","對齊文本","左對齊","右對齊","分割線","圖片","文件","youtube/vimeo 影片","鏈接","字號","字體","格式塊","文本","標題1","標題2","標題3","標題4","引用","代碼","插入","表格","減少縮進","增加縮進","選擇特殊符號","特殊符號","格式複製","改變模式","外邊距（Margins）","top","right","bottom","left","樣式","Classes","對齊方式","居右","居中","居左","無","Src","Title","Alternative","Link","在新窗口打開鏈接","圖片","file","高級","圖片屬性","取消","確定","你黏貼的文本是一段html代碼，是否保留源格式","html黏貼","保留源格式","匹配目標格式","把html代碼視為普通文本","只保留文本","文本黏貼","正在黏貼 Word/Excel 的文本，是否保留源格式？","文件管理","加載list錯誤","加載folders錯誤","你確定嗎？","輸入路徑","創建路徑","type name","拖動圖片到此","拖動文件到此","或點擊","Alternative text","瀏覽","上傳","背景色","文字","頂部","中間","底部","在之前插入列","在之後插入列","在之前插入行","在之後插入行","刪除表格","刪除行","刪除列","清除內容","源碼","粗體","斜體","顏色","鏈接","撤銷","重做","表格","圖片","橡皮擦","段落","字號","影片","字體","關於","打印","符號","下劃線","上出現","增加縮進","減少縮進","全屏","收縮","複製格式","分割線","無序列表","順序列表","剪切","全選","嵌入代碼","打開鏈接","編輯鏈接","No follow","Unlink","回顧","鉛筆","更新","URL",null,"水平對齊","篩選","修改時間排序","名稱排序","大小排序","新建文件夾","重置","保存","保存為","調整大小","Crop","寬","高","保存長寬比","是","不","移除","選擇","字符數: %d","單詞數: %d","全部","選擇: %s","全選","垂直對齊","拆分","垂直拆分","水平拆分","合併","添加列","添加行","刪除","邊框",null,"刪除線","下劃線","上標","下標","剪切","Pause","查找","替換為","替換","黏貼","選擇內容並黏貼","妳只能編輯妳自己的圖片。Download this image on the host?","圖片上傳成功","調色板","此目錄中沒有文件。","重命名","輸入新名稱","預覽","下載","วางจากคลิปบอร์ด","ของเบราว์เซอร์ไม่สนับสนุนโดยตรงเข้าไปยังคลิปบอร์ด","คัดลอกส่วนที่เลือก","คัดลอก","เส้นขอบรัศมี","แสดงทั้งหมด","ปรับใช้"]

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(170);


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

/* harmony default export */ __webpack_exports__["default"] = ([
    {
        name: 'eye',
        tooltip: 'Open link',
        exec: (editor, current) => {
            const href = Object(_core_helpers_utils__WEBPACK_IMPORTED_MODULE_0__[/* attr */ "a"])(current, 'href');
            if (current && href) {
                editor.ow.open(href);
            }
        }
    },
    {
        name: 'link',
        tooltip: 'Edit link',
        icon: 'pencil'
    },
    'unlink',
    'brush',
    'file'
]);


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _core_helpers_checker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _core_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



/* harmony default export */ __webpack_exports__["default"] = ([
    {
        name: 'delete',
        icon: 'bin',
        tooltip: 'Delete',
        exec: (editor, image) => {
            image && editor.s.removeNode(image);
        }
    },
    {
        name: 'pencil',
        exec(editor, current) {
            const tagName = current.tagName.toLowerCase();
            if (tagName === 'img') {
                editor.e.fire('openImageProperties', current);
            }
        },
        tooltip: 'Edit'
    },
    {
        name: 'valign',
        list: ['Top', 'Middle', 'Bottom', 'Normal'],
        tooltip: 'Vertical align',
        exec: (editor, image, { control }) => {
            if (!_core_dom__WEBPACK_IMPORTED_MODULE_0__[/* Dom */ "a"].isTag(image, 'img')) {
                return;
            }
            const command = control.args && Object(_core_helpers_checker__WEBPACK_IMPORTED_MODULE_1__[/* isString */ "s"])(control.args[0])
                ? control.args[0].toLowerCase()
                : '';
            if (!command) {
                return false;
            }
            Object(_core_helpers__WEBPACK_IMPORTED_MODULE_2__["css"])(image, 'vertical-align', command === 'normal' ? '' : command);
            editor.e.fire('recalcPositionPopup');
        }
    },
    {
        name: 'left',
        childTemplate: (_, __, value) => value,
        list: ['Left', 'Right', 'Center', 'Normal'],
        exec: (editor, image, { control }) => {
            if (!_core_dom__WEBPACK_IMPORTED_MODULE_0__[/* Dom */ "a"].isTag(image, 'img')) {
                return;
            }
            const command = control.args && Object(_core_helpers_checker__WEBPACK_IMPORTED_MODULE_1__[/* isString */ "s"])(control.args[0])
                ? control.args[0].toLowerCase()
                : '';
            if (!command) {
                return false;
            }
            if (command !== 'normal') {
                if (['right', 'left'].indexOf(command) !== -1) {
                    Object(_core_helpers__WEBPACK_IMPORTED_MODULE_2__["css"])(image, 'float', command);
                    Object(_core_helpers__WEBPACK_IMPORTED_MODULE_2__["clearCenterAlign"])(image);
                }
                else {
                    Object(_core_helpers__WEBPACK_IMPORTED_MODULE_2__["css"])(image, 'float', '');
                    Object(_core_helpers__WEBPACK_IMPORTED_MODULE_2__["css"])(image, {
                        display: 'block',
                        'margin-left': 'auto',
                        'margin-right': 'auto'
                    });
                }
            }
            else {
                if (Object(_core_helpers__WEBPACK_IMPORTED_MODULE_2__["css"])(image, 'float') &&
                    ['right', 'left'].indexOf(Object(_core_helpers__WEBPACK_IMPORTED_MODULE_2__["css"])(image, 'float').toLowerCase()) !== -1) {
                    Object(_core_helpers__WEBPACK_IMPORTED_MODULE_2__["css"])(image, 'float', '');
                }
                Object(_core_helpers__WEBPACK_IMPORTED_MODULE_2__["clearCenterAlign"])(image);
            }
            editor.setEditorValue();
            editor.e.fire('recalcPositionPopup');
        },
        tooltip: 'Horizontal align'
    }
]);


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_helpers_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _core_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _modules_widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const cmd = (control) => control.args && Object(_core_helpers_checker__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "s"])(control.args[0])
    ? control.args[0].toLowerCase()
    : '';
/* harmony default export */ __webpack_exports__["default"] = ([
    {
        name: 'brush',
        popup: editor => {
            if (!Object(_core_helpers_checker__WEBPACK_IMPORTED_MODULE_0__[/* isJoditObject */ "m"])(editor)) {
                return;
            }
            const selected = editor
                .getInstance('Table', editor.o)
                .getAllSelectedCells();
            let $bg, $cl, $br, $tab, color, br_color, bg_color;
            if (!selected.length) {
                return false;
            }
            color = Object(_core_helpers__WEBPACK_IMPORTED_MODULE_1__["css"])(selected[0], 'color');
            bg_color = Object(_core_helpers__WEBPACK_IMPORTED_MODULE_1__["css"])(selected[0], 'background-color');
            br_color = Object(_core_helpers__WEBPACK_IMPORTED_MODULE_1__["css"])(selected[0], 'border-color');
            $bg = Object(_modules_widget__WEBPACK_IMPORTED_MODULE_2__[/* ColorPickerWidget */ "a"])(editor, (value) => {
                selected.forEach((cell) => {
                    Object(_core_helpers__WEBPACK_IMPORTED_MODULE_1__["css"])(cell, 'background-color', value);
                });
                editor.setEditorValue();
            }, bg_color);
            $cl = Object(_modules_widget__WEBPACK_IMPORTED_MODULE_2__[/* ColorPickerWidget */ "a"])(editor, (value) => {
                selected.forEach((cell) => {
                    Object(_core_helpers__WEBPACK_IMPORTED_MODULE_1__["css"])(cell, 'color', value);
                });
                editor.setEditorValue();
            }, color);
            $br = Object(_modules_widget__WEBPACK_IMPORTED_MODULE_2__[/* ColorPickerWidget */ "a"])(editor, (value) => {
                selected.forEach((cell) => {
                    Object(_core_helpers__WEBPACK_IMPORTED_MODULE_1__["css"])(cell, 'border-color', value);
                });
                editor.setEditorValue();
            }, br_color);
            $tab = Object(_modules_widget__WEBPACK_IMPORTED_MODULE_2__[/* TabsWidget */ "c"])(editor, [
                { name: 'Background', content: $bg },
                { name: 'Text', content: $cl },
                { name: 'Border', content: $br }
            ]);
            return $tab;
        },
        tooltip: 'Background'
    },
    {
        name: 'valign',
        list: ['Top', 'Middle', 'Bottom', 'Normal'],
        childTemplate: (_, __, value) => value,
        exec: (editor, table, { control }) => {
            const command = cmd(control);
            editor
                .getInstance('Table', editor.o)
                .getAllSelectedCells()
                .forEach((cell) => {
                Object(_core_helpers__WEBPACK_IMPORTED_MODULE_1__["css"])(cell, 'vertical-align', command === 'normal' ? '' : command);
            });
        },
        tooltip: 'Vertical align'
    },
    {
        name: 'splitv',
        list: {
            tablesplitv: 'Split vertical',
            tablesplitg: 'Split horizontal'
        },
        tooltip: 'Split'
    },
    {
        name: 'align',
        icon: 'left'
    },
    '\n',
    {
        name: 'merge',
        command: 'tablemerge',
        tooltip: 'Merge'
    },
    {
        name: 'addcolumn',
        list: {
            tableaddcolumnbefore: 'Insert column before',
            tableaddcolumnafter: 'Insert column after'
        },
        exec: (editor, table, { control }) => {
            if (!Object(_core_helpers_checker__WEBPACK_IMPORTED_MODULE_0__[/* isJoditObject */ "m"])(editor)) {
                return;
            }
            const command = cmd(control);
            editor.execCommand(command, false, table);
        },
        tooltip: 'Add column'
    },
    {
        name: 'addrow',
        list: {
            tableaddrowbefore: 'Insert row above',
            tableaddrowafter: 'Insert row below'
        },
        exec: (editor, table, { control }) => {
            if (!Object(_core_helpers_checker__WEBPACK_IMPORTED_MODULE_0__[/* isJoditObject */ "m"])(editor)) {
                return;
            }
            const command = cmd(control);
            editor.execCommand(command, false, table);
        },
        tooltip: 'Add row'
    },
    {
        name: 'delete',
        icon: 'bin',
        list: {
            tablebin: 'Delete table',
            tablebinrow: 'Delete row',
            tablebincolumn: 'Delete column',
            tableempty: 'Empty cell'
        },
        exec: (editor, table, { control }) => {
            if (!Object(_core_helpers_checker__WEBPACK_IMPORTED_MODULE_0__[/* isJoditObject */ "m"])(editor)) {
                return;
            }
            const command = cmd(control);
            editor.execCommand(command, false, table);
            editor.e.fire('hidePopup');
        },
        tooltip: 'Delete'
    }
]);


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Jodit", function() { return /* binding */ src_Jodit; });

// NAMESPACE OBJECT: ./src/modules/index.ts
var modules_namespaceObject = {};
__webpack_require__.r(modules_namespaceObject);
__webpack_require__.d(modules_namespaceObject, "EventsNative", function() { return events["b" /* EventsNative */]; });
__webpack_require__.d(modules_namespaceObject, "ObserveObject", function() { return events["c" /* ObserveObject */]; });
__webpack_require__.d(modules_namespaceObject, "defaultNameSpace", function() { return events["d" /* defaultNameSpace */]; });
__webpack_require__.d(modules_namespaceObject, "EventHandlersStore", function() { return events["a" /* EventHandlersStore */]; });
__webpack_require__.d(modules_namespaceObject, "Ajax", function() { return ajax_Ajax; });
__webpack_require__.d(modules_namespaceObject, "Component", function() { return core_component["a" /* Component */]; });
__webpack_require__.d(modules_namespaceObject, "ViewComponent", function() { return core_component["c" /* ViewComponent */]; });
__webpack_require__.d(modules_namespaceObject, "STATUSES", function() { return core_component["b" /* STATUSES */]; });
__webpack_require__.d(modules_namespaceObject, "ContextMenu", function() { return context_menu_ContextMenu; });
__webpack_require__.d(modules_namespaceObject, "Alert", function() { return Alert; });
__webpack_require__.d(modules_namespaceObject, "Confirm", function() { return Confirm; });
__webpack_require__.d(modules_namespaceObject, "Prompt", function() { return Prompt; });
__webpack_require__.d(modules_namespaceObject, "Dialog", function() { return dialog_Dialog; });
__webpack_require__.d(modules_namespaceObject, "Dom", function() { return dom["a" /* Dom */]; });
__webpack_require__.d(modules_namespaceObject, "Plugin", function() { return plugin_Plugin; });
__webpack_require__.d(modules_namespaceObject, "Create", function() { return create_Create; });
__webpack_require__.d(modules_namespaceObject, "UIElement", function() { return ui["f" /* UIElement */]; });
__webpack_require__.d(modules_namespaceObject, "UIButtonState", function() { return ui["e" /* UIButtonState */]; });
__webpack_require__.d(modules_namespaceObject, "UIButton", function() { return ui["d" /* UIButton */]; });
__webpack_require__.d(modules_namespaceObject, "Button", function() { return ui["a" /* Button */]; });
__webpack_require__.d(modules_namespaceObject, "Popup", function() { return ui["c" /* Popup */]; });
__webpack_require__.d(modules_namespaceObject, "UISeparator", function() { return ui["i" /* UISeparator */]; });
__webpack_require__.d(modules_namespaceObject, "UIGroup", function() { return ui["g" /* UIGroup */]; });
__webpack_require__.d(modules_namespaceObject, "UIList", function() { return ui["h" /* UIList */]; });
__webpack_require__.d(modules_namespaceObject, "createIcon", function() { return ui["j" /* createIcon */]; });
__webpack_require__.d(modules_namespaceObject, "View", function() { return view_View; });
__webpack_require__.d(modules_namespaceObject, "ViewWithToolbar", function() { return view_with_toolbar_ViewWithToolbar; });
__webpack_require__.d(modules_namespaceObject, "FileBrowser", function() { return file_browser_FileBrowser; });
__webpack_require__.d(modules_namespaceObject, "Helpers", function() { return helpers; });
__webpack_require__.d(modules_namespaceObject, "ImageEditor", function() { return image_editor_ImageEditor; });
__webpack_require__.d(modules_namespaceObject, "Observer", function() { return observer_Observer; });
__webpack_require__.d(modules_namespaceObject, "ProgressBar", function() { return progress_bar_ProgressBar; });
__webpack_require__.d(modules_namespaceObject, "Select", function() { return select_Select; });
__webpack_require__.d(modules_namespaceObject, "Style", function() { return style_Style; });
__webpack_require__.d(modules_namespaceObject, "Snapshot", function() { return snapshot_Snapshot; });
__webpack_require__.d(modules_namespaceObject, "StatusBar", function() { return status_bar_StatusBar; });
__webpack_require__.d(modules_namespaceObject, "Table", function() { return table_Table; });
__webpack_require__.d(modules_namespaceObject, "Icon", function() { return icon["a" /* Icon */]; });
__webpack_require__.d(modules_namespaceObject, "ToolbarEditorCollection", function() { return editor_collection_ToolbarEditorCollection; });
__webpack_require__.d(modules_namespaceObject, "ToolbarCollection", function() { return collection_ToolbarCollection; });
__webpack_require__.d(modules_namespaceObject, "ToolbarButton", function() { return button_ToolbarButton; });
__webpack_require__.d(modules_namespaceObject, "ToolbarContent", function() { return content_ToolbarContent; });
__webpack_require__.d(modules_namespaceObject, "Uploader", function() { return uploader_Uploader; });
__webpack_require__.d(modules_namespaceObject, "PluginSystem", function() { return plugin_system["a" /* PluginSystem */]; });

// NAMESPACE OBJECT: ./src/plugins/index.ts
var plugins_namespaceObject = {};
__webpack_require__.r(plugins_namespaceObject);
__webpack_require__.d(plugins_namespaceObject, "addNewLine", function() { return add_new_line_addNewLine; });
__webpack_require__.d(plugins_namespaceObject, "about", function() { return about_about; });
__webpack_require__.d(plugins_namespaceObject, "autofocus", function() { return autofocus; });
__webpack_require__.d(plugins_namespaceObject, "Delete", function() { return delete_Delete; });
__webpack_require__.d(plugins_namespaceObject, "bold", function() { return bold; });
__webpack_require__.d(plugins_namespaceObject, "cleanHtml", function() { return clean_html_cleanHtml; });
__webpack_require__.d(plugins_namespaceObject, "WrapTextNodes", function() { return wrap_text_nodes_WrapTextNodes; });
__webpack_require__.d(plugins_namespaceObject, "clipboard", function() { return cut_clipboard; });
__webpack_require__.d(plugins_namespaceObject, "paste", function() { return paste; });
__webpack_require__.d(plugins_namespaceObject, "pasteStorage", function() { return paste_storage_pasteStorage; });
__webpack_require__.d(plugins_namespaceObject, "color", function() { return color_color; });
__webpack_require__.d(plugins_namespaceObject, "DragAndDrop", function() { return drag_and_drop_DragAndDrop; });
__webpack_require__.d(plugins_namespaceObject, "DragAndDropElement", function() { return drag_and_drop_element_DragAndDropElement; });
__webpack_require__.d(plugins_namespaceObject, "enter", function() { return enter_enter; });
__webpack_require__.d(plugins_namespaceObject, "errorMessages", function() { return errorMessages; });
__webpack_require__.d(plugins_namespaceObject, "font", function() { return font_font; });
__webpack_require__.d(plugins_namespaceObject, "formatBlock", function() { return formatBlock; });
__webpack_require__.d(plugins_namespaceObject, "fullsize", function() { return fullsize_fullsize; });
__webpack_require__.d(plugins_namespaceObject, "hotkeys", function() { return hotkeys_hotkeys; });
__webpack_require__.d(plugins_namespaceObject, "iframe", function() { return iframe_iframe; });
__webpack_require__.d(plugins_namespaceObject, "imageProperties", function() { return image_properties_imageProperties; });
__webpack_require__.d(plugins_namespaceObject, "imageProcessor", function() { return imageProcessor; });
__webpack_require__.d(plugins_namespaceObject, "indent", function() { return indent; });
__webpack_require__.d(plugins_namespaceObject, "inlinePopup", function() { return inline_popup_inlinePopup; });
__webpack_require__.d(plugins_namespaceObject, "justify", function() { return justify; });
__webpack_require__.d(plugins_namespaceObject, "limit", function() { return limit; });
__webpack_require__.d(plugins_namespaceObject, "link", function() { return link_link; });
__webpack_require__.d(plugins_namespaceObject, "media", function() { return media; });
__webpack_require__.d(plugins_namespaceObject, "mobile", function() { return mobile; });
__webpack_require__.d(plugins_namespaceObject, "orderedList", function() { return orderedList; });
__webpack_require__.d(plugins_namespaceObject, "placeholder", function() { return placeholder_placeholder_placeholder; });
__webpack_require__.d(plugins_namespaceObject, "redoUndo", function() { return redo_undo_redoUndo; });
__webpack_require__.d(plugins_namespaceObject, "resizer", function() { return resizer_resizer_resizer; });
__webpack_require__.d(plugins_namespaceObject, "search", function() { return search_search_search; });
__webpack_require__.d(plugins_namespaceObject, "size", function() { return size_size; });
__webpack_require__.d(plugins_namespaceObject, "source", function() { return source_source_source; });
__webpack_require__.d(plugins_namespaceObject, "stat", function() { return stat_stat; });
__webpack_require__.d(plugins_namespaceObject, "sticky", function() { return sticky_sticky_sticky; });
__webpack_require__.d(plugins_namespaceObject, "symbols", function() { return symbols_symbols_symbols; });
__webpack_require__.d(plugins_namespaceObject, "resizeCells", function() { return resize_cells_resizeCells; });
__webpack_require__.d(plugins_namespaceObject, "selectCells", function() { return select_cells_selectCells; });
__webpack_require__.d(plugins_namespaceObject, "tableKeyboardNavigation", function() { return tableKeyboardNavigation; });
__webpack_require__.d(plugins_namespaceObject, "tooltip", function() { return tooltip_tooltip_tooltip; });
__webpack_require__.d(plugins_namespaceObject, "xpath", function() { return xpath_xpath_xpath; });

// NAMESPACE OBJECT: ./src/styles/icons/index.ts
var icons_namespaceObject = {};
__webpack_require__.r(icons_namespaceObject);
__webpack_require__.d(icons_namespaceObject, "about", function() { return icons_about; });
__webpack_require__.d(icons_namespaceObject, "addcolumn", function() { return addcolumn; });
__webpack_require__.d(icons_namespaceObject, "addrow", function() { return addrow; });
__webpack_require__.d(icons_namespaceObject, "angle_down", function() { return angle_down; });
__webpack_require__.d(icons_namespaceObject, "angle_left", function() { return angle_left; });
__webpack_require__.d(icons_namespaceObject, "angle_right", function() { return angle_right; });
__webpack_require__.d(icons_namespaceObject, "angle_up", function() { return angle_up; });
__webpack_require__.d(icons_namespaceObject, "arrows_alt", function() { return arrows_alt; });
__webpack_require__.d(icons_namespaceObject, "arrows_h", function() { return arrows_h; });
__webpack_require__.d(icons_namespaceObject, "attachment", function() { return attachment; });
__webpack_require__.d(icons_namespaceObject, "bin", function() { return bin; });
__webpack_require__.d(icons_namespaceObject, "bold", function() { return icons_bold; });
__webpack_require__.d(icons_namespaceObject, "brush", function() { return brush; });
__webpack_require__.d(icons_namespaceObject, "cancel", function() { return icons_cancel; });
__webpack_require__.d(icons_namespaceObject, "center", function() { return center; });
__webpack_require__.d(icons_namespaceObject, "chain_broken", function() { return chain_broken; });
__webpack_require__.d(icons_namespaceObject, "check", function() { return icons_check; });
__webpack_require__.d(icons_namespaceObject, "check_square", function() { return check_square; });
__webpack_require__.d(icons_namespaceObject, "copyformat", function() { return copyformat; });
__webpack_require__.d(icons_namespaceObject, "copy", function() { return copy; });
__webpack_require__.d(icons_namespaceObject, "crop", function() { return crop; });
__webpack_require__.d(icons_namespaceObject, "cut", function() { return cut; });
__webpack_require__.d(icons_namespaceObject, "dedent", function() { return dedent; });
__webpack_require__.d(icons_namespaceObject, "dots", function() { return dots; });
__webpack_require__.d(icons_namespaceObject, "chevron", function() { return chevron; });
__webpack_require__.d(icons_namespaceObject, "enter", function() { return icons_enter; });
__webpack_require__.d(icons_namespaceObject, "eraser", function() { return eraser; });
__webpack_require__.d(icons_namespaceObject, "eye", function() { return eye; });
__webpack_require__.d(icons_namespaceObject, "file", function() { return icons_file; });
__webpack_require__.d(icons_namespaceObject, "folder", function() { return icons_folder; });
__webpack_require__.d(icons_namespaceObject, "font", function() { return icons_font; });
__webpack_require__.d(icons_namespaceObject, "fontsize", function() { return fontsize; });
__webpack_require__.d(icons_namespaceObject, "fullsize", function() { return icons_fullsize; });
__webpack_require__.d(icons_namespaceObject, "hr", function() { return icons_hr; });
__webpack_require__.d(icons_namespaceObject, "image", function() { return icons_image; });
__webpack_require__.d(icons_namespaceObject, "indent", function() { return icons_indent; });
__webpack_require__.d(icons_namespaceObject, "info_circle", function() { return info_circle; });
__webpack_require__.d(icons_namespaceObject, "italic", function() { return italic; });
__webpack_require__.d(icons_namespaceObject, "justify", function() { return icons_justify; });
__webpack_require__.d(icons_namespaceObject, "left", function() { return icons_left; });
__webpack_require__.d(icons_namespaceObject, "link", function() { return icons_link; });
__webpack_require__.d(icons_namespaceObject, "lock", function() { return lock; });
__webpack_require__.d(icons_namespaceObject, "menu", function() { return icons_menu; });
__webpack_require__.d(icons_namespaceObject, "merge", function() { return merge; });
__webpack_require__.d(icons_namespaceObject, "ok", function() { return ok; });
__webpack_require__.d(icons_namespaceObject, "ol", function() { return ol; });
__webpack_require__.d(icons_namespaceObject, "omega", function() { return omega; });
__webpack_require__.d(icons_namespaceObject, "outdent", function() { return outdent; });
__webpack_require__.d(icons_namespaceObject, "palette", function() { return palette; });
__webpack_require__.d(icons_namespaceObject, "paragraph", function() { return paragraph; });
__webpack_require__.d(icons_namespaceObject, "paste", function() { return icons_paste; });
__webpack_require__.d(icons_namespaceObject, "pencil", function() { return pencil; });
__webpack_require__.d(icons_namespaceObject, "plus", function() { return plus; });
__webpack_require__.d(icons_namespaceObject, "print", function() { return print; });
__webpack_require__.d(icons_namespaceObject, "redo", function() { return redo; });
__webpack_require__.d(icons_namespaceObject, "resize", function() { return icons_resize; });
__webpack_require__.d(icons_namespaceObject, "resizer", function() { return icons_resizer; });
__webpack_require__.d(icons_namespaceObject, "right", function() { return icons_right; });
__webpack_require__.d(icons_namespaceObject, "save", function() { return icons_save; });
__webpack_require__.d(icons_namespaceObject, "select_all", function() { return select_all; });
__webpack_require__.d(icons_namespaceObject, "shrink", function() { return shrink; });
__webpack_require__.d(icons_namespaceObject, "source", function() { return icons_source; });
__webpack_require__.d(icons_namespaceObject, "splitg", function() { return splitg; });
__webpack_require__.d(icons_namespaceObject, "splitv", function() { return splitv; });
__webpack_require__.d(icons_namespaceObject, "strikethrough", function() { return strikethrough; });
__webpack_require__.d(icons_namespaceObject, "subscript", function() { return subscript; });
__webpack_require__.d(icons_namespaceObject, "superscript", function() { return superscript; });
__webpack_require__.d(icons_namespaceObject, "table", function() { return icons_table; });
__webpack_require__.d(icons_namespaceObject, "th", function() { return th; });
__webpack_require__.d(icons_namespaceObject, "th_list", function() { return th_list; });
__webpack_require__.d(icons_namespaceObject, "ul", function() { return icons_ul; });
__webpack_require__.d(icons_namespaceObject, "underline", function() { return underline; });
__webpack_require__.d(icons_namespaceObject, "undo", function() { return undo; });
__webpack_require__.d(icons_namespaceObject, "unlink", function() { return icons_unlink; });
__webpack_require__.d(icons_namespaceObject, "unlock", function() { return unlock; });
__webpack_require__.d(icons_namespaceObject, "update", function() { return icons_update; });
__webpack_require__.d(icons_namespaceObject, "upload", function() { return upload; });
__webpack_require__.d(icons_namespaceObject, "valign", function() { return valign; });
__webpack_require__.d(icons_namespaceObject, "video", function() { return video; });

// EXTERNAL MODULE: ./src/styles/index.less
var src_styles = __webpack_require__(132);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(4);

// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(3);

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__(2);

// EXTERNAL MODULE: ./src/core/events/index.ts + 3 modules
var events = __webpack_require__(18);

// EXTERNAL MODULE: ./src/core/helpers/index.ts + 30 modules
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./src/core/ajax.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


config["a" /* Config */].prototype.defaultAjaxOptions = {
    dataType: 'json',
    method: 'GET',
    url: '',
    data: null,
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    headers: {
        'X-REQUESTED-WITH': 'XMLHttpRequest'
    },
    withCredentials: false,
    xhr() {
        return new XMLHttpRequest();
    }
};
class ajax_Ajax {
    constructor(jodit, options) {
        this.jodit = jodit;
        this.success_response_codes = [200, 201, 202];
        this.resolved = false;
        this.activated = false;
        this.options = Object(helpers["extend"])(true, {}, config["a" /* Config */].prototype.defaultAjaxOptions, options);
        if (this.o.xhr) {
            this.xhr = this.o.xhr();
        }
        jodit &&
            jodit.events &&
            jodit.e.on('beforeDestruct', () => {
                this.abort();
            });
    }
    __buildParams(obj, prefix) {
        if (Object(helpers["isFunction"])(this.o.queryBuild)) {
            return this.o.queryBuild.call(this, obj, prefix);
        }
        if (Object(helpers["isString"])(obj) ||
            (this.j.ow.FormData &&
                obj instanceof this.j.ow.FormData)) {
            return obj;
        }
        return Object(helpers["buildQuery"])(obj);
    }
    get o() {
        return this.options;
    }
    get j() {
        return this.jodit;
    }
    abort() {
        try {
            this.xhr.abort();
        }
        catch (_a) { }
        return this;
    }
    send() {
        this.activated = true;
        return new Promise((resolve, reject) => {
            const __parse = (resp) => {
                let result = null;
                if (this.o.dataType === 'json') {
                    result = JSON.parse(resp);
                }
                if (!result) {
                    throw Object(helpers["error"])('No JSON format');
                }
                return result;
            };
            this.xhr.onabort = () => {
                reject(Object(helpers["error"])(this.xhr.statusText));
            };
            this.xhr.onerror = () => {
                reject(Object(helpers["error"])(this.xhr.statusText));
            };
            this.xhr.ontimeout = () => {
                reject(Object(helpers["error"])(this.xhr.statusText));
            };
            this.xhr.onload = () => {
                this.response = this.xhr.responseText;
                this.status = this.xhr.status;
                this.resolved = true;
                resolve.call(this.xhr, __parse(this.response) || {});
            };
            this.xhr.onreadystatechange = () => {
                if (this.xhr.readyState === XMLHttpRequest.DONE) {
                    const resp = this.xhr.responseText;
                    this.response = resp;
                    this.status = this.xhr.status;
                    this.resolved = true;
                    if (this.success_response_codes.indexOf(this.xhr.status) > -1) {
                        resolve.call(this.xhr, __parse(resp));
                    }
                    else {
                        reject.call(this.xhr, Object(helpers["error"])(this.xhr.statusText ||
                            this.j.i18n('Connection error!')));
                    }
                }
            };
            this.xhr.withCredentials = this.o.withCredentials || false;
            const { url, data, method } = this.prepareRequest();
            this.xhr.open(method, url, true);
            if (this.o.contentType && this.xhr.setRequestHeader) {
                this.xhr.setRequestHeader('Content-type', this.o.contentType);
            }
            if (this.o.headers && this.xhr.setRequestHeader) {
                Object(helpers["each"])(this.o.headers, (key, value) => {
                    this.xhr.setRequestHeader(key, value);
                });
            }
            setTimeout(() => {
                this.xhr.send(data ? this.__buildParams(data) : undefined);
            }, 0);
        });
    }
    prepareRequest() {
        if (!this.o.url) {
            throw Object(helpers["error"])('Need URL for AJAX request');
        }
        let url = this.o.url;
        const data = this.o.data;
        const method = (this.o.method || 'get').toLowerCase();
        if (method === 'get' && data && Object(helpers["isPlainObject"])(data)) {
            const qIndex = url.indexOf('?');
            if (qIndex !== -1) {
                const urlData = Object(helpers["parseQuery"])(url);
                url =
                    url.substr(0, qIndex) +
                        '?' +
                        Object(helpers["buildQuery"])({ ...urlData, ...data });
            }
            else {
                url += '?' + Object(helpers["buildQuery"])(this.o.data);
            }
        }
        const request = {
            url,
            method,
            data
        };
        ajax_Ajax.log.splice(100);
        ajax_Ajax.log.push(request);
        return request;
    }
    destruct() {
        if (this.activated && !this.resolved) {
            this.abort();
            this.resolved = true;
        }
    }
}
ajax_Ajax.log = [];

// EXTERNAL MODULE: ./src/core/component/index.ts
var core_component = __webpack_require__(8);

// EXTERNAL MODULE: ./src/modules/context-menu/context-menu.less
var context_menu = __webpack_require__(139);

// EXTERNAL MODULE: ./src/core/ui/popup/index.ts + 1 modules
var ui_popup = __webpack_require__(19);

// EXTERNAL MODULE: ./src/core/ui/button/index.ts
var ui_button = __webpack_require__(13);

// EXTERNAL MODULE: ./src/core/helpers/checker/index.ts + 20 modules
var checker = __webpack_require__(5);

// CONCATENATED MODULE: ./src/modules/context-menu/context-menu.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




class context_menu_ContextMenu extends ui_popup["a" /* Popup */] {
    show(x, y, actions) {
        const self = this, content = this.j.c.div('jodit-context-menu__actions');
        if (!Object(checker["c" /* isArray */])(actions)) {
            return;
        }
        actions.forEach(item => {
            if (!item) {
                return;
            }
            const action = Object(ui_button["a" /* Button */])(this.jodit, item.icon || 'empty', item.title);
            this.jodit && action.setParentView(this.jodit);
            action.setMod('context', 'menu');
            action.onAction((e) => {
                var _a;
                (_a = item.exec) === null || _a === void 0 ? void 0 : _a.call(self, e);
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

// EXTERNAL MODULE: ./src/modules/dialog/dialog.less
var dialog_dialog = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/autobind-decorator/lib/esm/index.js
var esm = __webpack_require__(6);

// EXTERNAL MODULE: ./src/core/view/view-with-toolbar.less
var view_with_toolbar = __webpack_require__(141);

// CONCATENATED MODULE: ./src/core/storage/engines/memory-storage-provider.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class MemoryStorageProvider {
    constructor() {
        this.data = new Map();
    }
    set(key, value) {
        this.data.set(key, value);
    }
    delete(key) {
        this.data.delete(key);
    }
    get(key) {
        return this.data.get(key);
    }
    exists(key) {
        return this.data.has(key);
    }
    clear() {
        this.data.clear();
    }
}

// CONCATENATED MODULE: ./src/core/storage/engines/local-storage-provider.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const canUsePersistentStorage = (() => {
    const canUse = () => {
        const tmpKey = '___Jodit___' + Math.random().toString();
        try {
            localStorage.setItem(tmpKey, '1');
            const result = localStorage.getItem(tmpKey) === '1';
            localStorage.removeItem(tmpKey);
            return result;
        }
        catch (_a) { }
        return false;
    };
    let result;
    return () => {
        if (result === undefined) {
            result = canUse();
        }
        return result;
    };
})();
class LocalStorageProvider {
    constructor(rootKey) {
        this.rootKey = rootKey;
    }
    set(key, value) {
        try {
            const buffer = localStorage.getItem(this.rootKey);
            const json = buffer ? JSON.parse(buffer) : {};
            json[key] = value;
            localStorage.setItem(this.rootKey, JSON.stringify(json));
        }
        catch (_a) { }
    }
    delete(key) {
        try {
            localStorage.removeItem(this.rootKey);
        }
        catch (_a) { }
    }
    get(key) {
        try {
            const buffer = localStorage.getItem(this.rootKey);
            const json = buffer ? JSON.parse(buffer) : {};
            return json[key] !== undefined ? json[key] : null;
        }
        catch (_a) { }
    }
    exists(key) {
        return this.get(key) !== null;
    }
    clear() {
        try {
            localStorage.removeItem(this.rootKey);
        }
        catch (_a) { }
    }
}

// CONCATENATED MODULE: ./src/core/storage/storage.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const StorageKey = 'Jodit_';
class storage_Storage {
    constructor(provider, suffix) {
        this.provider = provider;
        this.prefix = StorageKey;
        if (suffix) {
            this.prefix += suffix;
        }
    }
    set(key, value) {
        this.provider.set(Object(helpers["camelCase"])(this.prefix + key), value);
    }
    delete(key) {
        this.provider.delete(Object(helpers["camelCase"])(this.prefix + key));
    }
    get(key) {
        return this.provider.get(Object(helpers["camelCase"])(this.prefix + key));
    }
    exists(key) {
        return this.provider.exists(Object(helpers["camelCase"])(this.prefix + key));
    }
    clear() {
        return this.provider.clear();
    }
    static makeStorage(persistent = false, suffix) {
        let provider;
        if (persistent && canUsePersistentStorage()) {
            provider = new LocalStorageProvider(StorageKey + suffix);
        }
        if (!provider) {
            provider = new MemoryStorageProvider();
        }
        return new storage_Storage(provider, suffix);
    }
}

// CONCATENATED MODULE: ./src/core/storage/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




// CONCATENATED MODULE: ./src/core/async.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class async_Async {
    constructor() {
        this.timers = new Map();
        this.promisesRejections = new Set();
        this.isDestructed = false;
    }
    setTimeout(callback, timeout, ...args) {
        if (this.isDestructed) {
            return 0;
        }
        let options = {};
        if (typeof timeout !== 'number') {
            options = timeout;
            timeout = options.timeout || 0;
        }
        if (options.label && this.timers.has(options.label)) {
            Object(helpers["clearTimeout"])(this.timers.get(options.label));
            this.timers.delete(options.label);
        }
        const timer = Object(helpers["setTimeout"])(callback, timeout, ...args), key = options.label || timer;
        this.timers.set(key, timer);
        return timer;
    }
    clearTimeout(timer) {
        Object(helpers["clearTimeout"])(timer);
        this.timers.delete(timer);
    }
    debounce(fn, timeout) {
        let timer = 0, lastArgs;
        return (...args) => {
            lastArgs = args;
            if (!timeout) {
                fn(...lastArgs);
            }
            else {
                Object(helpers["clearTimeout"])(timer);
                timer = this.setTimeout(() => fn(...lastArgs), timeout);
                this.timers.set(fn, timer);
            }
        };
    }
    throttle(fn, timeout) {
        let timer = null, needInvoke, callee, lastArgs;
        return (...args) => {
            needInvoke = true;
            lastArgs = args;
            if (!timeout) {
                fn(...lastArgs);
                return;
            }
            if (!timer) {
                callee = () => {
                    if (needInvoke) {
                        fn(...lastArgs);
                        needInvoke = false;
                        timer = this.setTimeout(callee, timeout);
                        this.timers.set(callee, timer);
                    }
                    else {
                        timer = null;
                    }
                };
                callee();
            }
        };
    }
    promise(executor) {
        let rejectCallback = () => { };
        const promise = new Promise((resolve, reject) => {
            this.promisesRejections.add(reject);
            rejectCallback = reject;
            return executor(resolve, reject);
        });
        promise.finally(() => {
            this.promisesRejections.delete(rejectCallback);
        });
        return promise;
    }
    promiseState(p) {
        if (p.status) {
            return p.status;
        }
        if (!Promise.race) {
            return new Promise(resolve => {
                p.then(v => {
                    resolve('fulfilled');
                    return v;
                }, e => {
                    resolve('rejected');
                    throw e;
                });
                this.setTimeout(() => {
                    resolve('pending');
                }, 100);
            });
        }
        const t = {};
        return Promise.race([p, t]).then(v => (v === t ? 'pending' : 'fulfilled'), () => 'rejected');
    }
    clear() {
        this.timers.forEach(key => {
            Object(helpers["clearTimeout"])(this.timers.get(key));
        });
        this.timers.clear();
        this.promisesRejections.forEach(reject => {
            reject();
        });
        this.promisesRejections.clear();
    }
    destruct() {
        this.clear();
        this.isDestructed = true;
    }
}

// EXTERNAL MODULE: ./src/core/global.ts
var global = __webpack_require__(9);

// EXTERNAL MODULE: ./src/core/decorators/index.ts + 4 modules
var decorators = __webpack_require__(12);

// CONCATENATED MODULE: ./src/core/view/view.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */








class view_View extends core_component["a" /* Component */] {
    constructor(options) {
        super();
        this.isView = true;
        this.components = new Set();
        this.version = "3.4.1";
        this.async = new async_Async();
        this.buffer = storage_Storage.makeStorage();
        this.__isFullSize = false;
        this.__whoLocked = '';
        this.isLockedNotBy = (name) => this.isLocked && this.__whoLocked !== name;
        this.__modulesInstances = new Map();
        this.id = new Date().getTime().toString();
        this.buffer = storage_Storage.makeStorage();
        this.initOptions(options);
        this.initOwners();
        this.events = new events["b" /* EventsNative */](this.od);
        this.create = new create_Create(this.od);
        this.container = this.c.div();
        this.container.classList.add('jodit');
        this.progressbar = new progress_bar_ProgressBar(this);
    }
    get basePath() {
        if (this.o.basePath) {
            return this.o.basePath;
        }
        return constants["BASE_PATH"];
    }
    get defaultTimeout() {
        return Object(helpers["isVoid"])(this.o.defaultTimeout) ? 100 : this.o.defaultTimeout;
    }
    get c() {
        return this.create;
    }
    get e() {
        return this.events;
    }
    get o() {
        return this.options;
    }
    i18n(text, ...params) {
        return Object(helpers["i18n"])(text, params, this.options);
    }
    toggleFullSize(isFullSize) {
        if (isFullSize === undefined) {
            isFullSize = !this.__isFullSize;
        }
        if (isFullSize === this.__isFullSize) {
            return;
        }
        this.__isFullSize = isFullSize;
        if (this.events) {
            this.e.fire('toggleFullSize', isFullSize);
        }
    }
    get isLocked() {
        return this.__whoLocked !== '';
    }
    lock(name = 'any') {
        if (!this.isLocked) {
            this.__whoLocked = name;
            return true;
        }
        return false;
    }
    unlock() {
        if (this.isLocked) {
            this.__whoLocked = '';
            return true;
        }
        return false;
    }
    get isFullSize() {
        return this.__isFullSize;
    }
    getVersion() {
        return this.version;
    }
    initOptions(options) {
        this.options = {
            ...(this.options || {}),
            ...view_View.defaultOptions,
            ...options
        };
    }
    initOwners() { }
    getInstance(moduleName, options) {
        const module = global["e" /* modules */][moduleName], mi = this.__modulesInstances;
        if (!Object(helpers["isFunction"])(module)) {
            throw Object(helpers["error"])('Need real module name');
        }
        if (!mi.has(moduleName)) {
            const instance = module.prototype instanceof core_component["c" /* ViewComponent */]
                ? new module(this, options)
                : new module(options);
            this.components.add(instance);
            mi.set(moduleName, instance);
        }
        return mi.get(moduleName);
    }
    beforeDestruct() {
        this.e.fire(core_component["b" /* STATUSES */].beforeDestruct);
        this.components.forEach(component => {
            if (Object(helpers["isDestructable"])(component) && !component.isInDestruct) {
                component.destruct();
            }
        });
        this.components.clear();
    }
    destruct() {
        if (this.isDestructed) {
            return;
        }
        if (this.async) {
            this.async.destruct();
            delete this.async;
        }
        if (this.events) {
            this.e.destruct();
            delete this.events;
        }
        if (this.buffer) {
            this.buffer.clear();
            delete this.buffer;
        }
        dom["a" /* Dom */].safeRemove(this.container);
        super.destruct();
    }
}
Object(tslib_es6["a" /* __decorate */])([
    Object(decorators["hook"])(core_component["b" /* STATUSES */].beforeDestruct)
], view_View.prototype, "beforeDestruct", null);
view_View.defaultOptions = {
    extraButtons: [],
    textIcons: false,
    removeButtons: [],
    zIndex: 100002,
    defaultTimeout: 100,
    fullsize: false,
    showTooltip: true,
    useNativeTooltip: false,
    buttons: [],
    globalFullSize: true
};

// EXTERNAL MODULE: ./src/core/dom.ts
var dom = __webpack_require__(1);

// EXTERNAL MODULE: ./src/modules/toolbar/collection/collection.less
var collection_collection = __webpack_require__(142);

// EXTERNAL MODULE: ./src/core/ui/index.ts + 5 modules
var ui = __webpack_require__(7);

// CONCATENATED MODULE: ./src/modules/toolbar/collection/collection.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







class collection_ToolbarCollection extends ui["h" /* UIList */] {
    constructor(jodit) {
        super(jodit);
        this.listenEvents = 'changeStack mousedown mouseup keydown change afterInit readonly afterResize ' +
            'selectionchange changeSelection focus afterSetMode touchstart focus blur';
        this.update = this.j.async.debounce(this.immediateUpdate, this.j.defaultTimeout);
        this.initEvents();
        this.setStatus(core_component["b" /* STATUSES */].ready);
    }
    get firstButton() {
        const [button] = this.buttons;
        return button || null;
    }
    makeButton(control, target = null) {
        return makeButton(this.j, control, target);
    }
    shouldBeActive(button) {
        if (Object(helpers["isJoditObject"])(this.j) && !this.j.editorIsActive) {
            return false;
        }
        if (Object(helpers["isFunction"])(button.control.isActive)) {
            return button.control.isActive(this.j, button.control, button);
        }
        return undefined;
    }
    shouldBeDisabled(button) {
        if (this.j.o.disabled) {
            return true;
        }
        if (this.j.o.readonly &&
            (!this.j.o.activeButtonsInReadOnly ||
                !this.j.o.activeButtonsInReadOnly.includes(button.control.name))) {
            return true;
        }
        let isDisabled;
        if (Object(helpers["isFunction"])(button.control.isDisabled)) {
            isDisabled = button.control.isDisabled(this.j, button.control, button);
        }
        return isDisabled;
    }
    getTarget(button) {
        return button.target || null;
    }
    immediateUpdate() {
        if (this.isDestructed || this.j.isLocked) {
            return;
        }
        super.update();
        this.j.e.fire('updateToolbar');
    }
    setDirection(direction) {
        this.container.style.direction = direction;
        this.container.setAttribute('dir', direction);
    }
    initEvents() {
        this.j.e
            .on(this.listenEvents, this.update)
            .on('afterSetMode focus', this.immediateUpdate);
    }
    destruct() {
        if (this.isDestructed) {
            return;
        }
        this.j.e
            .off(this.listenEvents, this.update)
            .off('afterSetMode focus', this.immediateUpdate);
        super.destruct();
    }
}
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], collection_ToolbarCollection.prototype, "immediateUpdate", null);

// CONCATENATED MODULE: ./src/modules/toolbar/collection/editor-collection.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




class editor_collection_ToolbarEditorCollection extends collection_ToolbarCollection {
    constructor() {
        super(...arguments);
        this.checkActiveStatus = (cssObject, node) => {
            let matches = 0, total = 0;
            Object.keys(cssObject).forEach((cssProperty) => {
                const cssValue = cssObject[cssProperty];
                if (Object(helpers["isFunction"])(cssValue)) {
                    if (cssValue(this.j, Object(helpers["css"])(node, cssProperty).toString())) {
                        matches += 1;
                    }
                }
                else {
                    if (cssValue.indexOf(Object(helpers["css"])(node, cssProperty).toString()) !== -1) {
                        matches += 1;
                    }
                }
                total += 1;
            });
            return total === matches;
        };
    }
    shouldBeDisabled(button) {
        const disabled = super.shouldBeDisabled(button);
        if (disabled !== undefined) {
            return disabled;
        }
        const mode = button.control.mode === undefined
            ? constants["MODE_WYSIWYG"]
            : button.control.mode;
        return !(mode === constants["MODE_SPLIT"] || mode === this.j.getRealMode());
    }
    shouldBeActive(button) {
        const active = super.shouldBeActive(button);
        if (active !== undefined) {
            return active;
        }
        const element = this.j.selection ? this.j.s.current() : null;
        if (!element) {
            return false;
        }
        let elm;
        if (button.control.tags) {
            const tags = button.control.tags;
            elm = element;
            if (dom["a" /* Dom */].up(elm, (node) => {
                if (node &&
                    tags.indexOf(node.nodeName.toLowerCase()) !== -1) {
                    return true;
                }
            }, this.j.editor)) {
                return true;
            }
        }
        if (button.control.css) {
            const css = button.control.css;
            elm = element;
            if (dom["a" /* Dom */].up(elm, (node) => {
                if (node && !dom["a" /* Dom */].isText(node)) {
                    return this.checkActiveStatus(css, node);
                }
            }, this.j.editor)) {
                return true;
            }
        }
        return false;
    }
    getTarget(button) {
        return button.target || this.j.s.current() || null;
    }
}

// EXTERNAL MODULE: ./src/modules/toolbar/button/button.less
var button_button = __webpack_require__(143);

// CONCATENATED MODULE: ./src/modules/toolbar/button/button.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */









class button_ToolbarButton extends ui_button["b" /* UIButton */] {
    constructor(jodit, control, target = null) {
        super(jodit);
        this.control = control;
        this.target = target;
        this.state = {
            ...Object(ui_button["c" /* UIButtonState */])(),
            theme: 'toolbar',
            currentValue: '',
            hasTrigger: false
        };
        this.setParentView(jodit);
        jodit.e.on([this.button, this.trigger], 'mousedown', (e) => e.preventDefault());
        this.onAction(this.onClick);
        this.setStatus(core_component["b" /* STATUSES */].ready);
        this.initFromControl();
        this.initTooltip();
        this.update();
    }
    get toolbar() {
        return this.closest(collection_ToolbarCollection);
    }
    get button() {
        return this.container.querySelector(`button.${this.componentName}__button`);
    }
    update() {
        const { control, state } = this, tc = this.closest(collection_ToolbarCollection);
        if (tc) {
            state.disabled = Boolean(tc.shouldBeDisabled(this));
            state.activated = Boolean(tc.shouldBeActive(this));
        }
        if (Object(helpers["isFunction"])(control.update)) {
            control.update(this);
        }
        super.update();
    }
    onChangeActivated() {
        Object(helpers["attr"])(this.button, 'aria-pressed', this.state.activated);
        super.onChangeActivated();
    }
    onChangeText() {
        if (Object(helpers["isFunction"])(this.control.template)) {
            this.text.innerHTML = this.control.template(this.j, this.control.name, this.j.i18n(this.state.text));
        }
        else {
            super.onChangeText();
        }
        this.setMod('text-icons', Boolean(this.text.innerText.trim().length));
    }
    createContainer() {
        const cn = this.componentName;
        const container = this.j.c.span(cn), button = super.createContainer();
        Object(helpers["attr"])(container, 'role', 'listitem');
        button.classList.remove(cn);
        button.classList.add(cn + '__button');
        Object.defineProperty(button, 'component', {
            value: this
        });
        container.appendChild(button);
        this.trigger = this.j.c.fromHTML(`<span role="trigger" class="${cn}__trigger">${icon["a" /* Icon */].get('chevron')}</span>`);
        this.j.e.on(this.trigger, `click`, this.onTriggerClick.bind(this));
        return container;
    }
    focus() {
        var _a;
        (_a = this.container.querySelector('button')) === null || _a === void 0 ? void 0 : _a.focus();
    }
    onChangeHasTrigger() {
        if (this.state.hasTrigger) {
            this.container.appendChild(this.trigger);
        }
        else {
            dom["a" /* Dom */].safeRemove(this.trigger);
        }
        this.setMod('with-trigger', this.state.hasTrigger || null);
    }
    onChangeDisabled() {
        const dsb = this.state.disabled ? 'disabled' : null;
        Object(helpers["attr"])(this.trigger, 'disabled', dsb);
        Object(helpers["attr"])(this.button, 'disabled', dsb);
        Object(helpers["attr"])(this.container, 'disabled', dsb);
    }
    initTooltip() {
        if (!this.j.o.textIcons &&
            this.j.o.showTooltip &&
            !this.j.o.useNativeTooltip) {
            const to = this.j.o.showTooltipDelay || this.j.defaultTimeout;
            let timeout = 0;
            this.j.e
                .off(this.container, 'mouseenter mouseleave')
                .on(this.container, 'mouseenter', () => {
                if (!this.state.tooltip) {
                    return;
                }
                timeout = this.j.async.setTimeout(() => !this.state.disabled &&
                    this.j.e.fire('showTooltip', this.container, this.state.tooltip), {
                    timeout: to,
                    label: 'tooltip'
                });
            })
                .on(this.container, 'mouseleave', () => {
                this.j.async.clearTimeout(timeout);
                this.j.e.fire('hideTooltip');
            });
        }
    }
    initFromControl() {
        const { control, state } = this;
        this.updateSize();
        state.name = control.name;
        if (this.j.o.textIcons || control.template) {
            state.icon = Object(ui_button["c" /* UIButtonState */])().icon;
            state.text = control.text || control.name;
        }
        else {
            if (control.iconURL) {
                state.icon.iconURL = control.iconURL;
            }
            else {
                const name = control.icon || control.name;
                state.icon.name = icon["a" /* Icon */].exists(name) ? name : '';
            }
            if (!control.iconURL && !state.icon.name) {
                state.text = control.text || control.name;
            }
        }
        if (control.tooltip) {
            state.tooltip = this.j.i18n(control.tooltip);
        }
        state.hasTrigger = Boolean(control.list || (control.popup && control.exec));
    }
    onTriggerClick(e) {
        const { control } = this;
        e.buffer = {
            actionTrigger: this
        };
        if (control.list) {
            return this.openControlList(control);
        }
        if (Object(helpers["isFunction"])(control.popup)) {
            const popup = new ui_popup["a" /* Popup */](this.j);
            popup.parentElement = this;
            if (this.j.e.fire(Object(helpers["camelCase"])(`before-${control.name}-open-popup`), this.target, control, popup) !== false) {
                const target = (this.toolbar
                    ? this.toolbar.getTarget(this)
                    : this.target) || null;
                const popupElm = control.popup(this.j, target, control, popup.close, this);
                if (popupElm) {
                    popup
                        .setContent(Object(helpers["isString"])(popupElm)
                        ? this.j.c.fromHTML(popupElm)
                        : popupElm)
                        .open(() => Object(helpers["position"])(this.container));
                }
            }
            this.j.e.fire(Object(helpers["camelCase"])(`after-${control.name}-open-popup`), popup.container);
        }
    }
    openControlList(control) {
        const controls = this.jodit.options.controls, getControl = (key) => controls && controls[key];
        const list = control.list, menu = new ui_popup["a" /* Popup */](this.j), toolbar = makeCollection(this.j);
        menu.parentElement = this;
        toolbar.parentElement = menu;
        toolbar.mode = 'vertical';
        const getButton = (key, value) => {
            if (Object(helpers["isString"])(value) && getControl(value)) {
                return {
                    name: value.toString(),
                    ...getControl(value)
                };
            }
            if (Object(helpers["isString"])(key) && getControl(key)) {
                return {
                    name: key.toString(),
                    ...getControl(key),
                    ...(typeof value === 'object' ? value : {})
                };
            }
            const childControl = {
                name: key.toString(),
                template: control.childTemplate,
                exec: control.exec,
                data: control.data,
                command: control.command,
                isActive: control.isChildActive,
                isDisabled: control.isChildDisabled,
                mode: control.mode,
                args: [...(control.args ? control.args : []), key, value]
            };
            if (Object(helpers["isString"])(value)) {
                childControl.text = value;
            }
            return childControl;
        };
        toolbar.build(Object(helpers["isArray"])(list)
            ? list.map(getButton)
            : Object.keys(list).map(key => getButton(key, list[key])), this.target);
        menu.setContent(toolbar.container).open(() => Object(helpers["position"])(this.container));
        this.state.activated = true;
        this.j.e.on(menu, 'afterClose', () => {
            this.state.activated = false;
        });
    }
    onClick(originalEvent) {
        var _a, _b, _c, _d;
        const { control } = this;
        if (Object(helpers["isFunction"])(control.exec)) {
            const target = (this.toolbar ? this.toolbar.getTarget(this) : this.target) ||
                null;
            const result = control.exec(this.j, target, {
                control,
                originalEvent,
                button: this
            });
            if (result !== false) {
                (_b = (_a = this.j) === null || _a === void 0 ? void 0 : _a.e) === null || _b === void 0 ? void 0 : _b.fire('synchro');
                if (this.parentElement) {
                    this.parentElement.update();
                }
                (_d = (_c = this.j) === null || _c === void 0 ? void 0 : _c.e) === null || _d === void 0 ? void 0 : _d.fire('closeAllPopups afterExec');
                return;
            }
        }
        if (control.list) {
            return this.openControlList(control);
        }
        if (Object(helpers["isFunction"])(control.popup)) {
            return this.onTriggerClick(originalEvent);
        }
        if (control.command || control.name) {
            Object(helpers["call"])(Object(helpers["isJoditObject"])(this.j)
                ? this.j.execCommand.bind(this.j)
                : this.j.od.execCommand.bind(this.j.od), control.command || control.name, false, control.args && control.args[0]);
            this.j.e.fire('closeAllPopups');
        }
    }
}
Object(tslib_es6["a" /* __decorate */])([
    Object(decorators["watch"])('state.hasTrigger')
], button_ToolbarButton.prototype, "onChangeHasTrigger", null);

// EXTERNAL MODULE: ./src/modules/toolbar/button/content.less
var button_content = __webpack_require__(144);

// EXTERNAL MODULE: ./src/core/helpers/utils/index.ts + 4 modules
var utils = __webpack_require__(10);

// CONCATENATED MODULE: ./src/modules/toolbar/button/content.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





class content_ToolbarContent extends ui_button["b" /* UIButton */] {
    constructor(jodit, control, target = null) {
        super(jodit);
        this.control = control;
        this.target = target;
        this.container.classList.add(`${this.componentName}_${this.clearName(control.name)}`);
        Object(utils["a" /* attr */])(this.container, 'role', 'content');
    }
    update() {
        const content = this.control.getContent(this.j, this.control, this);
        if (Object(checker["s" /* isString */])(content) || content.parentNode !== this.container) {
            dom["a" /* Dom */].detach(this.container);
            this.container.appendChild(Object(checker["s" /* isString */])(content) ? this.j.create.fromHTML(content) : content);
        }
        super.update();
    }
    createContainer() {
        return this.j.c.span(this.componentName);
    }
}

// CONCATENATED MODULE: ./src/modules/toolbar/factory.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





function makeCollection(jodit, parentElement) {
    const collection = Object(helpers["isJoditObject"])(jodit)
        ? new editor_collection_ToolbarEditorCollection(jodit)
        : new collection_ToolbarCollection(jodit);
    if (jodit.o.textIcons) {
        collection.container.classList.add('jodit_text_icons');
    }
    if (parentElement) {
        collection.parentElement = parentElement;
    }
    if (jodit.o.toolbarButtonSize) {
        collection.buttonSize = jodit.o.toolbarButtonSize;
    }
    return collection;
}
function makeButton(jodit, control, target = null) {
    if (Object(helpers["isFunction"])(control.getContent)) {
        return new content_ToolbarContent(jodit, control, target);
    }
    return new button_ToolbarButton(jodit, control, target);
}

// CONCATENATED MODULE: ./src/core/view/view-with-toolbar.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






class view_with_toolbar_ViewWithToolbar extends view_View {
    constructor() {
        super(...arguments);
        this.toolbar = makeCollection(this);
        this.defaultToolbarContainer = this.c.div('jodit-toolbar__box');
    }
    get toolbarContainer() {
        if (!this.o.fullsize &&
            (Object(helpers["isString"])(this.o.toolbar) ||
                dom["a" /* Dom */].isHTMLElement(this.o.toolbar, this.ow))) {
            return Object(helpers["resolveElement"])(this.o.toolbar, this.o.shadowRoot || this.od);
        }
        this.o.toolbar &&
            dom["a" /* Dom */].appendChildFirst(this.container, this.defaultToolbarContainer);
        return this.defaultToolbarContainer;
    }
    setPanel(element) {
        this.o.toolbar = element;
        this.buildToolbar();
    }
    buildToolbar() {
        if (!this.o.toolbar) {
            return;
        }
        const buttons = this.o.buttons
            ? Object(helpers["splitArray"])(this.o.buttons)
            : [];
        this.toolbar
            .setRemoveButtons(this.o.removeButtons)
            .build(buttons.concat(this.o.extraButtons || []))
            .appendTo(this.toolbarContainer);
    }
    destruct() {
        if (this.isDestructed) {
            return;
        }
        this.setStatus(core_component["b" /* STATUSES */].beforeDestruct);
        this.toolbar.destruct();
        delete this.toolbar;
        super.destruct();
    }
}

// CONCATENATED MODULE: ./src/modules/dialog/dialog.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */










config["a" /* Config */].prototype.dialog = {
    extraButtons: [],
    resizable: true,
    draggable: true,
    buttons: ['dialog.close'],
    removeButtons: []
};
config["a" /* Config */].prototype.controls.dialog = {
    close: {
        icon: 'cancel',
        exec: dialog => {
            dialog.close();
        }
    }
};
class dialog_Dialog extends view_with_toolbar_ViewWithToolbar {
    constructor(options) {
        super(options);
        this.destination = document.body;
        this.destroyAfterClose = false;
        this.moved = false;
        this.iSetMaximization = false;
        this.resizable = false;
        this.draggable = false;
        this.startX = 0;
        this.startY = 0;
        this.startPoint = { x: 0, y: 0, w: 0, h: 0 };
        this.lockSelect = () => {
            this.container.classList.add('jodit-dialog__box-moved');
        };
        this.unlockSelect = () => {
            this.container.classList.remove('jodit-dialog__box-moved');
        };
        this.onResize = () => {
            if (this.options &&
                this.o.resizable &&
                !this.moved &&
                this.isOpened &&
                !this.offsetX &&
                !this.offsetY) {
                this.setPosition();
            }
        };
        this.isOpened = false;
        const self = this;
        self.options = new config["b" /* OptionsDefault */](Object(helpers["extend"])(true, {
            toolbarButtonSize: 'middle'
        }, config["a" /* Config */].prototype.dialog, options));
        dom["a" /* Dom */].safeRemove(self.container);
        self.container = this.c.fromHTML('<div style="z-index:' +
            self.o.zIndex +
            '" class="jodit jodit-dialog__box">' +
            '<div class="jodit-dialog__overlay"></div>' +
            '<div class="jodit-dialog">' +
            '<div class="jodit-dialog__header non-selected">' +
            '<div class="jodit-dialog__header-title"></div>' +
            '<div class="jodit-dialog__header-toolbar"></div>' +
            '</div>' +
            '<div class="jodit-dialog__content"></div>' +
            '<div class="jodit-dialog__footer"></div>' +
            (self.o.resizable
                ? '<div class="jodit-dialog__resizer"></div>'
                : '') +
            '</div>' +
            '</div>');
        Object(helpers["attr"])(self.container, 'role', 'dialog');
        Object.defineProperty(self.container, 'component', {
            value: this
        });
        self.container.classList.add(`jodit_theme_${this.o.theme || 'default'}`);
        self.dialog = self.container.querySelector('.jodit-dialog');
        self.resizer = self.container.querySelector('.jodit-dialog__resizer');
        self.dialogbox_header = self.container.querySelector('.jodit-dialog__header>.jodit-dialog__header-title');
        self.dialogbox_content = self.container.querySelector('.jodit-dialog__content');
        self.dialogbox_footer = self.container.querySelector('.jodit-dialog__footer');
        self.dialogbox_toolbar = self.container.querySelector('.jodit-dialog__header>.jodit-dialog__header-toolbar');
        self.o.buttons &&
            self.toolbar
                .build(Object(helpers["splitArray"])(self.o.buttons))
                .appendTo(self.dialogbox_toolbar);
        const headerBox = self.container.querySelector('.jodit-dialog__header');
        headerBox && self.e.on(headerBox, 'mousedown', self.onHeaderMouseDown);
        if (self.o.resizable) {
            self.e.on(self.resizer, 'mousedown', self.onResizerMouseDown);
        }
        const fullSize = Jodit.plugins.get('fullsize');
        Object(helpers["isFunction"])(fullSize) && fullSize(self);
        self.setStatus(core_component["b" /* STATUSES */].ready);
        this.e
            .on(this.ow, 'keydown', this.onEsc)
            .on(this.ow, 'resize', this.onResize);
    }
    setElements(root, elements) {
        const elements_list = [];
        Object(helpers["asArray"])(elements).forEach((elm) => {
            if (Object(helpers["isArray"])(elm)) {
                const div = this.c.div('jodit-dialog__column');
                elements_list.push(div);
                root.appendChild(div);
                return this.setElements(div, elm);
            }
            let element;
            if (Object(helpers["isString"])(elm)) {
                element = this.c.fromHTML(elm);
            }
            else {
                element = Object(helpers["hasContainer"])(elm) ? elm.container : elm;
            }
            elements_list.push(element);
            if (element.parentNode !== root) {
                root.appendChild(element);
            }
        });
        Array.from(root.childNodes).forEach((elm) => {
            if (elements_list.indexOf(elm) === -1) {
                root.removeChild(elm);
            }
        });
    }
    onMouseUp() {
        if (this.draggable || this.resizable) {
            this.e.off(this.ow, 'mousemove', this.onMouseMove);
            this.draggable = false;
            this.resizable = false;
            this.unlockSelect();
            if (this.e) {
                this.removeGlobalListeners();
                this.e.fire(this, 'endResize endMove');
            }
        }
    }
    onHeaderMouseDown(e) {
        const target = e.target;
        if (!this.o.draggable ||
            (target && target.nodeName.match(/^(INPUT|SELECT)$/))) {
            return;
        }
        this.draggable = true;
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.startPoint.x = Object(helpers["css"])(this.dialog, 'left');
        this.startPoint.y = Object(helpers["css"])(this.dialog, 'top');
        this.setMaxZIndex();
        e.preventDefault();
        this.lockSelect();
        this.addGlobalListeners();
        if (this.e) {
            this.e.fire(this, 'startMove');
        }
    }
    onMouseMove(e) {
        if (this.draggable && this.o.draggable) {
            this.setPosition(this.startPoint.x + e.clientX - this.startX, this.startPoint.y + e.clientY - this.startY);
            if (this.e) {
                this.e.fire(this, 'move', e.clientX - this.startX, e.clientY - this.startY);
            }
            e.stopImmediatePropagation();
            e.preventDefault();
        }
        if (this.resizable && this.o.resizable) {
            this.setSize(this.startPoint.w + e.clientX - this.startX, this.startPoint.h + e.clientY - this.startY);
            if (this.e) {
                this.e.fire(this, 'resizeDialog', e.clientX - this.startX, e.clientY - this.startY);
            }
            e.stopImmediatePropagation();
            e.preventDefault();
        }
    }
    onEsc(e) {
        if (this.isOpened && e.key === constants["KEY_ESC"]) {
            const me = this.getMaxZIndexDialog();
            if (me) {
                me.close();
            }
            else {
                this.close();
            }
            e.stopImmediatePropagation();
        }
    }
    onResizerMouseDown(e) {
        this.resizable = true;
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.startPoint.w = this.dialog.offsetWidth;
        this.startPoint.h = this.dialog.offsetHeight;
        this.lockSelect();
        this.addGlobalListeners();
        if (this.e) {
            this.e.fire(this, 'startResize');
        }
    }
    addGlobalListeners() {
        const self = this;
        self.e
            .on(self.ow, 'mousemove', self.onMouseMove)
            .on(self.container, 'close_dialog', self.close)
            .on(self.ow, 'mouseup', self.onMouseUp);
    }
    removeGlobalListeners() {
        const self = this;
        self.e
            .off(self.ow, 'mousemove', self.onMouseMove)
            .off(self.container, 'close_dialog', self.close)
            .off(self.ow, 'mouseup', self.onMouseUp);
    }
    setSize(w, h) {
        if (w) {
            Object(helpers["css"])(this.dialog, 'width', w);
        }
        if (h) {
            Object(helpers["css"])(this.dialog, 'height', h);
        }
        return this;
    }
    setPosition(x, y) {
        const w = this.ow.innerWidth, h = this.ow.innerHeight;
        let left = w / 2 - this.dialog.offsetWidth / 2, top = h / 2 - this.dialog.offsetHeight / 2;
        if (left < 0) {
            left = 0;
        }
        if (top < 0) {
            top = 0;
        }
        if (x !== undefined && y !== undefined) {
            this.offsetX = x;
            this.offsetY = y;
            this.moved = Math.abs(x - left) > 100 || Math.abs(y - top) > 100;
        }
        this.dialog.style.left = (x || left) + 'px';
        this.dialog.style.top = (y || top) + 'px';
        return this;
    }
    setHeader(content) {
        this.setElements(this.dialogbox_header, content);
        return this;
    }
    setContent(content) {
        this.setElements(this.dialogbox_content, content);
        return this;
    }
    setFooter(content) {
        this.setElements(this.dialogbox_footer, content);
        this.dialog.classList.toggle('jodit-dialog_footer_true', !!content);
        return this;
    }
    getMaxZIndexDialog() {
        let maxZi = 0, dlg, zIndex, res = this;
        Object(helpers["$$"])('.jodit-dialog__box', this.destination).forEach((dialog) => {
            dlg = dialog.component;
            zIndex = parseInt(Object(helpers["css"])(dialog, 'zIndex'), 10);
            if (dlg.isOpened && !isNaN(zIndex) && zIndex > maxZi) {
                res = dlg;
                maxZi = zIndex;
            }
        });
        return res;
    }
    setMaxZIndex() {
        let maxzi = 0, zIndex = 0;
        Object(helpers["$$"])('.jodit-dialog__box', this.destination).forEach(dialog => {
            zIndex = parseInt(Object(helpers["css"])(dialog, 'zIndex'), 10);
            maxzi = Math.max(isNaN(zIndex) ? 0 : zIndex, maxzi);
        });
        this.container.style.zIndex = (maxzi + 1).toString();
    }
    maximization(condition) {
        if (typeof condition !== 'boolean') {
            condition = !this.container.classList.contains('jodit-dialog__box_fullsize');
        }
        this.container.classList.toggle('jodit-dialog__box_fullsize', condition);
        [this.destination, this.destination.parentNode].forEach((box) => {
            box &&
                box.classList &&
                box.classList.toggle('jodit-fullsize_box', condition);
        });
        this.iSetMaximization = condition;
        return condition;
    }
    open(contentOrClose, titleOrModal, destroyAfterClose, modal) {
        global["a" /* eventEmitter */].fire('closeAllPopups hideHelpers');
        if (this.e.fire(this, 'beforeOpen') === false) {
            return this;
        }
        if (Object(helpers["isBoolean"])(contentOrClose)) {
            destroyAfterClose = contentOrClose;
        }
        if (Object(helpers["isBoolean"])(titleOrModal)) {
            modal = titleOrModal;
        }
        this.destroyAfterClose = destroyAfterClose === true;
        const content = Object(helpers["isBoolean"])(contentOrClose) ? undefined : contentOrClose;
        const title = Object(helpers["isBoolean"])(titleOrModal) ? undefined : titleOrModal;
        if (title !== undefined) {
            this.setHeader(title);
        }
        if (content) {
            this.setContent(content);
        }
        this.container.classList.add('jodit-dialog_active');
        this.isOpened = true;
        this.setModal(modal);
        this.destination.appendChild(this.container);
        this.setPosition(this.offsetX, this.offsetY);
        this.setMaxZIndex();
        if (this.o.fullsize) {
            this.maximization(true);
        }
        this.e.fire('afterOpen', this);
        return this;
    }
    setModal(modal) {
        this.container.classList.toggle('jodit-modal', Boolean(modal));
        return this;
    }
    close(e) {
        var _a, _b, _c;
        if (this.isDestructed || !this.isOpened) {
            return this;
        }
        if (e) {
            e.stopImmediatePropagation();
            e.preventDefault();
        }
        if (this.e) {
            this.e.fire('beforeClose', this);
        }
        dom["a" /* Dom */].safeRemove(this.container);
        (_a = this === null || this === void 0 ? void 0 : this.container) === null || _a === void 0 ? void 0 : _a.classList.remove('jodit-dialog_active');
        this.isOpened = false;
        if (this.iSetMaximization) {
            this.maximization(false);
        }
        this.removeGlobalListeners();
        if (this.destroyAfterClose) {
            this.destruct();
        }
        (_b = this.e) === null || _b === void 0 ? void 0 : _b.fire(this, 'afterClose');
        (_c = this.e) === null || _c === void 0 ? void 0 : _c.fire(this.ow, 'joditCloseDialog');
        return this;
    }
    destruct() {
        if (this.isInDestruct) {
            return;
        }
        this.setStatus(core_component["b" /* STATUSES */].beforeDestruct);
        if (this.isOpened) {
            this.close();
        }
        if (this.events) {
            this.removeGlobalListeners();
            this.events
                .on(this.ow, 'keydown', this.onEsc)
                .on(this.ow, 'resize', this.onResize);
        }
        super.destruct();
    }
}
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], dialog_Dialog.prototype, "onMouseUp", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], dialog_Dialog.prototype, "onHeaderMouseDown", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], dialog_Dialog.prototype, "onMouseMove", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], dialog_Dialog.prototype, "onEsc", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], dialog_Dialog.prototype, "onResizerMouseDown", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], dialog_Dialog.prototype, "close", null);

// CONCATENATED MODULE: ./src/modules/dialog/alert.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




const Alert = (msg, title, callback, className = 'jodit-dialog_alert') => {
    if (Object(helpers["isFunction"])(title)) {
        callback = title;
        title = undefined;
    }
    const dialog = new dialog_Dialog(), container = dialog.c.div(className), okButton = Object(ui["a" /* Button */])(dialog, 'ok', 'Ok');
    Object(helpers["asArray"])(msg).forEach(oneMessage => {
        container.appendChild(dom["a" /* Dom */].isNode(oneMessage, dialog.ow)
            ? oneMessage
            : dialog.c.fromHTML(oneMessage));
    });
    okButton.onAction(() => {
        if (!callback || !Object(helpers["isFunction"])(callback) || callback(dialog) !== false) {
            dialog.close();
        }
    });
    dialog.setFooter([okButton]);
    dialog.open(container, title || '&nbsp;', true, true);
    okButton.focus();
    return dialog;
};

// CONCATENATED MODULE: ./src/modules/dialog/prompt.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const Prompt = (msg, title, callback, placeholder, defaultValue) => {
    const dialog = new dialog_Dialog(), cancelButton = Object(ui["a" /* Button */])(dialog, 'cancel', 'Cancel'), okButton = Object(ui["a" /* Button */])(dialog, 'ok', 'Ok'), form = dialog.c.element('form', {
        class: 'jodit-dialog_prompt'
    }), inputElement = dialog.c.element('input', {
        autofocus: true,
        class: 'jodit-input'
    }), labelElement = dialog.c.element('label');
    if (Object(helpers["isFunction"])(title)) {
        callback = title;
        title = undefined;
    }
    if (placeholder) {
        Object(helpers["attr"])(inputElement, 'placeholder', placeholder);
    }
    labelElement.appendChild(dialog.c.text(msg));
    form.appendChild(labelElement);
    form.appendChild(inputElement);
    cancelButton.onAction(dialog.close);
    const onclick = () => {
        if (!callback ||
            !Object(helpers["isFunction"])(callback) ||
            callback(inputElement.value) !== false) {
            dialog.close();
        }
    };
    okButton.onAction(onclick);
    dialog.e.on(form, 'submit', () => {
        onclick();
        return false;
    });
    dialog.setFooter([okButton, cancelButton]);
    dialog.open(form, title || '&nbsp;', true, true);
    inputElement.focus();
    if (defaultValue !== undefined && defaultValue.length) {
        inputElement.value = defaultValue;
        inputElement.select();
    }
    return dialog;
};

// CONCATENATED MODULE: ./src/modules/dialog/confirm.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const Confirm = (msg, title, callback) => {
    const dialog = new dialog_Dialog(), $div = dialog.c.fromHTML('<form class="jodit-dialog_prompt"></form>'), $label = dialog.c.element('label');
    if (Object(helpers["isFunction"])(title)) {
        callback = title;
        title = undefined;
    }
    $label.appendChild(dialog.c.fromHTML(msg));
    $div.appendChild($label);
    const $cancel = Object(ui["a" /* Button */])(dialog, 'cancel', 'Cancel');
    $cancel.onAction(() => {
        if (callback) {
            callback(false);
        }
        dialog.close();
    });
    const onok = () => {
        if (callback) {
            callback(true);
        }
        dialog.close();
    };
    const $ok = Object(ui["a" /* Button */])(dialog, 'ok', 'Yes');
    $ok.onAction(onok);
    dialog.e.on($div, 'submit', () => {
        onok();
        return false;
    });
    dialog.setFooter([$ok, $cancel]);
    dialog.open($div, title || '&nbsp;', true, true);
    $ok.focus();
    return dialog;
};

// CONCATENATED MODULE: ./src/modules/dialog/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





// CONCATENATED MODULE: ./src/core/plugin.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



class plugin_Plugin extends core_component["c" /* ViewComponent */] {
    constructor(jodit) {
        super(jodit);
        jodit.e
            .on('afterInit', this.afterInit.bind(this, jodit))
            .on('beforeDestruct', this.destruct);
        this.setStatus(core_component["b" /* STATUSES */].ready);
    }
    init(jodit) {
    }
    destruct() {
        var _a, _b;
        if (!this.isInDestruct) {
            this.setStatus(core_component["b" /* STATUSES */].beforeDestruct);
            (_b = (_a = this.j) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.off('beforeDestruct', this.destruct);
            this.beforeDestruct(this.j);
            super.destruct();
        }
    }
}
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], plugin_Plugin.prototype, "destruct", null);

// CONCATENATED MODULE: ./src/core/create.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


class create_Create {
    constructor(document, createAttributes) {
        this.document = document;
        this.createAttributes = createAttributes;
        this.applyAttributes = (elm, attrs) => {
            Object(helpers["each"])(attrs, (key, value) => {
                if (Object(helpers["isPlainObject"])(value) && key === 'style') {
                    Object(helpers["css"])(elm, value);
                }
                else {
                    if (key === 'className') {
                        key = 'class';
                    }
                    elm.setAttribute(Object(helpers["kebabCase"])(key), value.toString());
                }
            });
        };
    }
    get doc() {
        return Object(helpers["isFunction"])(this.document) ? this.document() : this.document;
    }
    element(tagName, childrenOrAttributes, children) {
        const elm = this.doc.createElement(tagName.toLowerCase());
        if (this.createAttributes) {
            const ca = this.createAttributes;
            if (ca && ca[tagName.toLowerCase()]) {
                const attrs = ca[tagName.toLowerCase()];
                if (Object(helpers["isFunction"])(attrs)) {
                    attrs(elm);
                }
                else if (Object(helpers["isPlainObject"])(attrs)) {
                    this.applyAttributes(elm, attrs);
                }
            }
        }
        if (childrenOrAttributes) {
            if (Object(helpers["isPlainObject"])(childrenOrAttributes)) {
                this.applyAttributes(elm, childrenOrAttributes);
            }
            else {
                children = childrenOrAttributes;
            }
        }
        if (children) {
            Object(helpers["asArray"])(children).forEach((child) => elm.appendChild(typeof child === 'string' ? this.fromHTML(child) : child));
        }
        return elm;
    }
    div(className, childrenOrAttributes, children) {
        const div = this.element('div', childrenOrAttributes, children);
        if (className) {
            div.className = className;
        }
        return div;
    }
    span(className, childrenOrAttributes, children) {
        const span = this.element('span', childrenOrAttributes, children);
        if (className) {
            span.className = className;
        }
        return span;
    }
    a(className, childrenOrAttributes, children) {
        const a = this.element('a', childrenOrAttributes, children);
        if (className) {
            a.className = className;
        }
        return a;
    }
    text(value) {
        return this.doc.createTextNode(value);
    }
    fragment() {
        return this.doc.createDocumentFragment();
    }
    fromHTML(html, refsToggleElement) {
        const div = this.div();
        div.innerHTML = html.toString();
        const child = div.firstChild !== div.lastChild || !div.firstChild
            ? div
            : div.firstChild;
        dom["a" /* Dom */].safeRemove(child);
        if (refsToggleElement) {
            const refElements = Object(helpers["refs"])(child);
            Object.keys(refsToggleElement).forEach(key => {
                const elm = refElements[key];
                if (elm && refsToggleElement[key] === false) {
                    dom["a" /* Dom */].hide(elm);
                }
            });
        }
        return child;
    }
}

// EXTERNAL MODULE: ./src/modules/file-browser/styles/index.less
var file_browser_styles = __webpack_require__(145);

// CONCATENATED MODULE: ./src/modules/file-browser/consts.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const F_CLASS = 'jodit-filebrowser';
const ITEM_CLASS = F_CLASS + '__files-item';
const ICON_LOADER = '<i class="jodit-icon_loader"></i>';

// CONCATENATED MODULE: ./src/modules/file-browser/config.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config["a" /* Config */].prototype.filebrowser = {
    extraButtons: [],
    filter(item, search) {
        search = search.toLowerCase();
        if (Object(helpers["isString"])(item)) {
            return item.toLowerCase().indexOf(search) !== -1;
        }
        if (Object(helpers["isString"])(item.name)) {
            return item.name.toLowerCase().indexOf(search) !== -1;
        }
        if (Object(helpers["isString"])(item.file)) {
            return item.file.toLowerCase().indexOf(search) !== -1;
        }
        return true;
    },
    sortBy: 'changed-desc',
    sort(a, b, sortBy) {
        const [sortAttr, arrow] = sortBy.toLowerCase().split('-'), asc = arrow === 'asc';
        const compareStr = (f, s) => {
            if (f < s) {
                return asc ? -1 : 1;
            }
            if (f > s) {
                return asc ? 1 : -1;
            }
            return 0;
        };
        if (Object(helpers["isString"])(a)) {
            return compareStr(a.toLowerCase(), b.toLowerCase());
        }
        if (a[sortAttr] === undefined || sortAttr === 'name') {
            if (Object(helpers["isString"])(a.name)) {
                return compareStr(a.name.toLowerCase(), b.name.toLowerCase());
            }
            if (Object(helpers["isString"])(a.file)) {
                return compareStr(a.file.toLowerCase(), b.file.toLowerCase());
            }
            return 0;
        }
        switch (sortAttr) {
            case 'changed': {
                const f = new Date(a.changed).getTime(), s = new Date(b.changed).getTime();
                return asc ? f - s : s - f;
            }
            case 'size': {
                const f = Object(helpers["humanSizeToBytes"])(a.size), s = Object(helpers["humanSizeToBytes"])(b.size);
                return asc ? f - s : s - f;
            }
        }
        return 0;
    },
    editImage: true,
    preview: true,
    showPreviewNavigation: true,
    showSelectButtonInPreview: true,
    contextMenu: true,
    howLongShowMsg: 3000,
    createNewFolder: true,
    deleteFolder: true,
    moveFolder: true,
    moveFile: true,
    showFoldersPanel: true,
    width: 859,
    height: 400,
    buttons: [
        'filebrowser.upload',
        'filebrowser.remove',
        'filebrowser.update',
        'filebrowser.select',
        'filebrowser.edit',
        '|',
        'filebrowser.tiles',
        'filebrowser.list',
        '|',
        'filebrowser.filter',
        '|',
        'filebrowser.sort'
    ],
    removeButtons: [],
    fullsize: false,
    showTooltip: true,
    view: null,
    isSuccess(resp) {
        return resp.success;
    },
    getMessage(resp) {
        return resp.data.messages !== undefined && Object(helpers["isArray"])(resp.data.messages)
            ? resp.data.messages.join(' ')
            : '';
    },
    showFileName: true,
    showFileSize: true,
    showFileChangeTime: true,
    saveStateInStorage: true,
    getThumbTemplate(item, source, source_name) {
        const opt = this.options, showName = opt.showFileName, showSize = opt.showFileSize && item.size, showTime = opt.showFileChangeTime && item.time;
        let name = '', info;
        if (item.file !== undefined) {
            name = item.file;
        }
        info = `<div class="${ITEM_CLASS}-info">${showName ? `<span class="${ITEM_CLASS}-info-filename">${name}</span>` : ''}${showSize
            ? `<span class="${ITEM_CLASS}-info-filesize">${item.size}</span>`
            : ''}${showTime
            ? `<span class="${ITEM_CLASS}-info-filechanged">${showTime}</span>`
            : ''}</div>`;
        return `<a
			data-jodit-filebrowser-item="true"
			data-is-file="${item.isImage ? 0 : 1}"
			draggable="true"
			class="${ITEM_CLASS}"
			href="${item.fileURL}"
			data-source="${source_name}"
			data-path="${item.path}"
			data-name="${name}"
			title="${name}"
			data-url="${item.fileURL}">
				<img
					data-is-file="${item.isImage ? 0 : 1}"
					data-src="${item.fileURL}"
					src="${item.imageURL}"
					alt="${name}"
					loading="lazy"
				/>
				${showName || showSize || showTime ? info : ''}
			</a>`;
    },
    ajax: {
        url: '',
        async: true,
        data: {},
        cache: true,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        method: 'POST',
        processData: true,
        dataType: 'json',
        headers: {},
        prepareData(data) {
            return data;
        },
        process(resp) {
            return resp;
        }
    },
    create: {
        data: { action: 'folderCreate' }
    },
    getLocalFileByUrl: {
        data: { action: 'getLocalFileByUrl' }
    },
    resize: {
        data: { action: 'imageResize' }
    },
    crop: {
        data: { action: 'imageCrop' }
    },
    fileMove: {
        data: { action: 'fileMove' }
    },
    folderMove: {
        data: { action: 'folderMove' }
    },
    fileRename: {
        data: { action: 'fileRename' }
    },
    folderRename: {
        data: { action: 'folderRename' }
    },
    fileRemove: {
        data: { action: 'fileRemove' }
    },
    folderRemove: {
        data: { action: 'folderRemove' }
    },
    items: {
        data: { action: 'files' }
    },
    folder: {
        data: { action: 'folders' }
    },
    permissions: {
        data: { action: 'permissions' }
    }
};
config["a" /* Config */].prototype.controls.filebrowser = {
    upload: {
        icon: 'plus',
        isInput: true,
        isDisabled: (browser) => !browser.dataProvider.canI('FileUpload'),
        getContent: (filebrowser, control) => {
            const btn = filebrowser.c
                .fromHTML(`<span class="jodit-ui-button jodit__upload-button">
						${ui["b" /* Icon */].get('plus')}
						<input
							type="file"
							accept="${filebrowser.state.onlyImages ? 'image/*' : '*'}"
							tabindex="-1"
							dir="auto"
							multiple=""
							${control.isDisabled &&
                control.isDisabled(filebrowser, control)
                ? 'disabled="disabled"'
                : ''}
						/>
						</span>`);
            filebrowser.e.fire('bindUploader.filebrowser', btn);
            return btn;
        }
    },
    remove: {
        icon: 'bin',
        isDisabled: (browser) => {
            return (!browser.state.activeElements.length ||
                !browser.dataProvider.canI('FileRemove'));
        },
        exec: (editor) => {
            editor.e.fire('fileRemove.filebrowser');
        }
    },
    update: {
        exec: (editor) => {
            editor.e.fire('update.filebrowser');
        }
    },
    select: {
        icon: 'check',
        isDisabled: (browser) => !browser.state.activeElements.length,
        exec: (editor) => {
            editor.e.fire('select.filebrowser');
        }
    },
    edit: {
        icon: 'pencil',
        isDisabled: (browser) => {
            const selected = browser.state.activeElements;
            return (selected.length !== 1 ||
                !selected[0].isImage ||
                !(browser.dataProvider.canI('ImageCrop') ||
                    browser.dataProvider.canI('ImageResize')));
        },
        exec: editor => {
            editor.e.fire('edit.filebrowser');
        }
    },
    tiles: {
        icon: 'th',
        isActive: (filebrowser) => filebrowser.state.view === 'tiles',
        exec: (filebrowser) => {
            filebrowser.e.fire('view.filebrowser', 'tiles');
        }
    },
    list: {
        icon: 'th-list',
        isActive: (filebrowser) => filebrowser.state.view === 'list',
        exec: (filebrowser) => {
            filebrowser.e.fire('view.filebrowser', 'list');
        }
    },
    filter: {
        isInput: true,
        getContent: (filebrowser, _, b) => {
            const oldInput = b.container.querySelector('.jodit-input');
            if (oldInput) {
                return oldInput;
            }
            const input = filebrowser.c.element('input', {
                class: 'jodit-input',
                placeholder: filebrowser.i18n('Filter')
            });
            input.value = filebrowser.state.filterWord;
            filebrowser.e.on(input, 'keydown mousedown', filebrowser.async.debounce(() => {
                filebrowser.e.fire('filter.filebrowser', input.value);
            }, filebrowser.defaultTimeout));
            return input;
        }
    },
    sort: {
        isInput: true,
        getContent: (fb) => {
            const select = fb.c.fromHTML('<select class="jodit-input jodit-select">' +
                `<option value="changed-asc">${fb.i18n('Sort by changed')} (⬆)</option>` +
                `<option value="changed-desc">${fb.i18n('Sort by changed')} (⬇)</option>` +
                `<option value="name-asc">${fb.i18n('Sort by name')} (⬆)</option>` +
                `<option value="name-desc">${fb.i18n('Sort by name')} (⬇)</option>` +
                `<option value="size-asc">${fb.i18n('Sort by size')} (⬆)</option>` +
                `<option value="size-desc">${fb.i18n('Sort by size')} (⬇)</option>` +
                '</select>');
            select.value = fb.state.sortBy;
            fb.e
                .on('sort.filebrowser', (value) => {
                if (select.value !== value) {
                    select.value = value;
                }
            })
                .on(select, 'change', () => {
                fb.e.fire('sort.filebrowser', select.value);
            });
            return select;
        }
    }
};

// CONCATENATED MODULE: ./src/modules/file-browser/builders/item.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class item_FileBrowserItem {
    constructor(data) {
        this.data = data;
        Object(helpers["extend"])(this, data);
    }
    static create(data) {
        return new item_FileBrowserItem(data);
    }
    get path() {
        return Object(helpers["normalizePath"])(this.data.source.path ? this.data.source.path + '/' : '/');
    }
    get imageURL() {
        const timestamp = new Date().getTime().toString(), { thumbIsAbsolute, source, thumb, file } = this.data, path = thumb || file;
        return thumbIsAbsolute && path
            ? path
            : Object(helpers["normalizeUrl"])(source.baseurl, source.path, path || '') +
                '?_tmst=' +
                timestamp;
    }
    get fileURL() {
        let { name } = this.data;
        const { file, fileIsAbsolute, source } = this.data;
        if (file !== undefined) {
            name = file;
        }
        return fileIsAbsolute && name
            ? name
            : Object(helpers["normalizeUrl"])(source.baseurl, source.path, name || '');
    }
    get time() {
        const { changed } = this.data;
        return ((changed &&
            (typeof changed === 'number'
                ? new Date(changed).toLocaleString()
                : changed)) ||
            '');
    }
    get uniqueHashKey() {
        const data = this.data;
        let key = [
            data.sourceName,
            data.name,
            data.file,
            this.time,
            data.thumb
        ].join('_');
        key = key.toLowerCase().replace(/[^0-9a-z\-.]/g, '-');
        return key;
    }
}

// CONCATENATED MODULE: ./src/modules/file-browser/data-provider.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


const DEFAULT_SOURCE_NAME = 'default';
const possibleRules = [
    'allowFiles',
    'allowFileMove',
    'allowFileUpload',
    'allowFileUploadRemote',
    'allowFileRemove',
    'allowFileRename',
    'allowFolders',
    'allowFolderMove',
    'allowFolderCreate',
    'allowFolderRemove',
    'allowFolderRename',
    'allowImageResize',
    'allowImageCrop'
];
class data_provider_DataProvider {
    constructor(parent, options) {
        this.parent = parent;
        this.options = options;
        this.__currentPermissions = null;
        this.currentPath = '';
        this.currentSource = DEFAULT_SOURCE_NAME;
        this.currentBaseUrl = '';
        this.ajaxInstances = [];
        this.getPathByUrl = (url, success, onFailed) => {
            const action = 'getLocalFileByUrl';
            this.options[action].data.url = url;
            return this.get(action, (resp) => {
                if (this.o.isSuccess(resp)) {
                    success(resp.data.path, resp.data.name, resp.data.source);
                }
                else {
                    onFailed(Object(helpers["error"])(this.o.getMessage(resp)));
                }
            }, onFailed);
        };
    }
    canI(action) {
        const rule = 'allow' + action;
        if (false) {}
        return (this.__currentPermissions === null ||
            this.__currentPermissions[rule] === undefined ||
            this.__currentPermissions[rule]);
    }
    get o() {
        return this.options;
    }
    get(name, success, error) {
        const opts = Object(helpers["extend"])(true, {}, this.o.ajax, this.options[name] !== undefined ? this.options[name] : this.o.ajax);
        if (opts.prepareData) {
            opts.data = opts.prepareData.call(this, opts.data);
        }
        const ajax = new ajax_Ajax(this.parent, opts);
        const promise = ajax.send();
        this.ajaxInstances.push(ajax);
        if (success) {
            promise.then(success);
        }
        if (error) {
            promise.catch(error);
        }
        return promise;
    }
    async permissions(path = this.currentPath, source = this.currentSource) {
        if (!this.o.permissions) {
            return Promise.resolve();
        }
        this.o.permissions.data.path = path;
        this.o.permissions.data.source = source;
        if (this.o.permissions.url) {
            return this.get('permissions').then(resp => {
                let process = this.o.permissions.process;
                if (!process) {
                    process = this.o.ajax.process;
                }
                if (process) {
                    const respData = process.call(self, resp);
                    if (respData.data.permissions) {
                        this.__currentPermissions = respData.data.permissions;
                    }
                }
            });
        }
        return Promise.resolve();
    }
    async items(path = this.currentPath, source = this.currentSource) {
        const opt = this.options;
        if (!opt.items) {
            return Promise.reject('Set Items api options');
        }
        opt.items.data.path = path;
        opt.items.data.source = source;
        return this.get('items');
    }
    async tree(path = this.currentPath, source = this.currentSource) {
        path = Object(helpers["normalizeRelativePath"])(path);
        await this.permissions(path, source);
        if (!this.o.folder) {
            return Promise.reject('Set Folder Api options');
        }
        this.o.folder.data.path = path;
        this.o.folder.data.source = source;
        return this.get('folder');
    }
    createFolder(name, path, source) {
        if (!this.o.c) {
            return Promise.reject('Set Create api options');
        }
        this.o.c.data.source = source;
        this.o.c.data.path = path;
        this.o.c.data.name = name;
        return this.get('create').then(resp => {
            this.currentPath = path;
            this.currentSource = source;
            return resp;
        });
    }
    move(filepath, path, source, isFile) {
        const mode = isFile
            ? 'fileMove'
            : 'folderMove';
        const option = this.options[mode];
        if (!option) {
            return Promise.reject('Set Move api options');
        }
        option.data.from = filepath;
        option.data.path = path;
        option.data.source = source;
        return this.get(mode);
    }
    fileRemove(path, file, source) {
        if (!this.o.fileRemove) {
            return Promise.reject('Set fileRemove api options');
        }
        this.o.fileRemove.data.path = path;
        this.o.fileRemove.data.name = file;
        this.o.fileRemove.data.source = source;
        return this.get('fileRemove');
    }
    folderRemove(path, file, source) {
        if (!this.o.folderRemove) {
            return Promise.reject('Set folderRemove api options');
        }
        this.o.folderRemove.data.path = path;
        this.o.folderRemove.data.name = file;
        this.o.folderRemove.data.source = source;
        return this.get('folderRemove');
    }
    folderRename(path, name, newname, source) {
        if (!this.o.folderRename) {
            return Promise.reject('Set folderRename api options');
        }
        this.o.folderRename.data.path = path;
        this.o.folderRename.data.name = name;
        this.o.folderRename.data.newname = newname;
        this.o.folderRename.data.source = source;
        return this.get('folderRename');
    }
    fileRename(path, name, newname, source) {
        if (!this.o.fileRename) {
            return Promise.reject('Set fileRename api options');
        }
        this.o.fileRename.data.path = path;
        this.o.fileRename.data.name = name;
        this.o.fileRename.data.newname = newname;
        this.o.fileRename.data.source = source;
        return this.get('fileRename');
    }
    crop(path, source, name, newname, box) {
        if (!this.o.crop) {
            this.o.crop = {
                data: {}
            };
        }
        if (this.o.crop.data === undefined) {
            this.o.crop.data = {
                action: 'crop'
            };
        }
        this.o.crop.data.newname = newname || name;
        if (box) {
            this.o.crop.data.box = box;
        }
        this.o.crop.data.path = path;
        this.o.crop.data.name = name;
        this.o.crop.data.source = source;
        return this.get('crop');
    }
    resize(path, source, name, newname, box) {
        if (!this.o.resize) {
            this.o.resize = {
                data: {}
            };
        }
        if (this.o.resize.data === undefined) {
            this.o.resize.data = {
                action: 'resize'
            };
        }
        this.o.resize.data.newname = newname || name;
        if (box) {
            this.o.resize.data.box = box;
        }
        this.o.resize.data.path = path;
        this.o.resize.data.name = name;
        this.o.resize.data.source = source;
        return this.get('resize');
    }
    destruct() {
        this.ajaxInstances.forEach(a => a.destruct());
        this.ajaxInstances.length = 0;
    }
}

// CONCATENATED MODULE: ./src/modules/file-browser/factories.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function makeDataProvider(parent, options) {
    return new data_provider_DataProvider(parent, options);
}
function makeContextMenu(parent) {
    return new context_menu_ContextMenu(parent);
}

// EXTERNAL MODULE: ./src/core/helpers/normalize/index.ts + 9 modules
var helpers_normalize = __webpack_require__(21);

// CONCATENATED MODULE: ./src/modules/file-browser/listeners/state-listeners.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




const state_listeners_DEFAULT_SOURCE_NAME = 'default', ITEM_ACTIVE_CLASS = ITEM_CLASS + '_active_true';
function stateListeners() {
    const { state, files, create, options } = this, getDomElement = (item) => {
        const key = item.uniqueHashKey;
        if (this.elementsMap[key]) {
            return this.elementsMap[key].elm;
        }
        const elm = create.fromHTML(options.getThumbTemplate.call(this, item, item.source, item.sourceName.toString()));
        elm.dataset.key = key;
        this.elementsMap[key] = {
            item,
            elm
        };
        return this.elementsMap[key].elm;
    };
    state
        .on('beforeChange.activeElements', () => {
        state.activeElements.forEach(item => {
            const key = item.uniqueHashKey, { elm } = this.elementsMap[key];
            elm && elm.classList.remove(ITEM_ACTIVE_CLASS);
        });
    })
        .on('change.activeElements', () => {
        this.e.fire('changeSelection');
        state.activeElements.forEach(item => {
            const key = item.uniqueHashKey, { elm } = this.elementsMap[key];
            elm && elm.classList.add(ITEM_ACTIVE_CLASS);
        });
    })
        .on('change.view', () => {
        files.classList.remove(F_CLASS + '__files_view_tiles');
        files.classList.remove(F_CLASS + '__files_view_list');
        files.classList.add(F_CLASS + '__files_view_' + state.view);
        this.storage.set(F_CLASS + '_view', state.view);
    })
        .on('change.sortBy', () => {
        this.storage.set(F_CLASS + '_sortby', state.sortBy);
    })
        .on('change.elements', this.async.debounce(() => {
        dom["a" /* Dom */].detach(files);
        if (state.elements.length) {
            state.elements.forEach(item => {
                this.files.appendChild(getDomElement(item));
            });
        }
        else {
            files.appendChild(create.div(F_CLASS + '_no_files', this.i18n('There are no files')));
        }
    }, this.defaultTimeout))
        .on('change.folders', this.async.debounce(() => {
        dom["a" /* Dom */].detach(this.tree);
        let lastSource = state_listeners_DEFAULT_SOURCE_NAME, lastSource2 = null;
        const appendCreateButton = (source, sourceName, force = false) => {
            if (source &&
                lastSource2 &&
                (source !== lastSource2 || force) &&
                options.createNewFolder &&
                this.dataProvider.canI('FolderCreate')) {
                this.tree.appendChild(create.a('jodit-button jodit-filebrowser__addfolder', {
                    href: 'javascript:void(0)',
                    'data-path': Object(helpers_normalize["f" /* normalizePath */])(source.path + '/'),
                    'data-source': sourceName
                }, ui["b" /* Icon */].get('plus') + ' ' + this.i18n('Add folder')));
                lastSource2 = source;
            }
        };
        state.folders.forEach(folder => {
            const { name, source, sourceName } = folder;
            if (sourceName && sourceName !== lastSource) {
                this.tree.appendChild(create.div(F_CLASS + '__source-title', sourceName));
                lastSource = sourceName;
            }
            const folderElm = create.a(F_CLASS + '__tree-item', {
                draggable: 'draggable',
                href: 'javascript:void(0)',
                'data-path': Object(helpers_normalize["f" /* normalizePath */])(source.path, name + '/'),
                'data-name': name,
                'data-source': sourceName,
                'data-source-path': source.path
            }, create.span(F_CLASS + '__tree-item-title', name));
            appendCreateButton(source, sourceName);
            lastSource2 = source;
            this.tree.appendChild(folderElm);
            if (name === '..' || name === '.') {
                return;
            }
            if (options.deleteFolder &&
                this.dataProvider.canI('FolderRename')) {
                folderElm.appendChild(create.element('i', {
                    class: 'jodit-icon_folder jodit-icon_folder_rename',
                    title: this.i18n('Rename')
                }, ui["b" /* Icon */].get('pencil')));
            }
            if (options.deleteFolder &&
                this.dataProvider.canI('FolderRemove')) {
                folderElm.appendChild(create.element('i', {
                    class: 'jodit-icon_folder jodit-icon_folder_remove',
                    title: this.i18n('Delete')
                }, ui["b" /* Icon */].get('cancel')));
            }
        });
        appendCreateButton(lastSource2, lastSource, true);
    }, this.defaultTimeout));
}

// CONCATENATED MODULE: ./src/modules/file-browser/builders/context-menu.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







const CLASS_PREVIEW = F_CLASS + '_preview_', preview_tpl_next = (next = 'next', right = 'right') => `<a href="javascript:void(0)" class="${CLASS_PREVIEW}navigation ${CLASS_PREVIEW}navigation-${next}">` +
    '' +
    ui["b" /* Icon */].get('angle-' + right) +
    '</a>';
/* harmony default export */ var builders_context_menu = ((self) => {
    if (!self.o.contextMenu) {
        return () => { };
    }
    const contextmenu = makeContextMenu(self);
    return (e) => {
        const a = getItem(e.target, self.dialog.container);
        if (!a) {
            return;
        }
        let item = a;
        const opt = self.options, ga = (key) => Object(helpers["attr"])(item, key) || '';
        self.async.setTimeout(() => {
            contextmenu.show(e.clientX, e.clientY, [
                ga('data-is-file') !== '1' &&
                    opt.editImage &&
                    (self.dataProvider.canI('ImageResize') ||
                        self.dataProvider.canI('ImageCrop'))
                    ? {
                        icon: 'pencil',
                        title: 'Edit',
                        exec: () => {
                            self.openImageEditor(ga('href'), ga('data-name'), ga('data-path'), ga('data-source'));
                        }
                    }
                    : false,
                self.dataProvider.canI('FileRename')
                    ? {
                        icon: 'italic',
                        title: 'Rename',
                        exec: async () => {
                            self.e.fire('fileRename.filebrowser', ga('data-name'), ga('data-path'), ga('data-source'));
                        }
                    }
                    : false,
                self.dataProvider.canI('FileRemove')
                    ? {
                        icon: 'bin',
                        title: 'Delete',
                        exec: async () => {
                            await self.deleteFile(ga('data-name'), ga('data-source'));
                            self.state.activeElements = [];
                            await self.loadTree();
                        }
                    }
                    : false,
                opt.preview
                    ? {
                        icon: 'eye',
                        title: 'Preview',
                        exec: () => {
                            const preview = new dialog_Dialog({
                                fullsize: self.o.fullsize,
                                language: self.o.language,
                                buttons: ['fullsize', 'dialog.close']
                            }), temp_content = self.c.div(F_CLASS + '_preview', ICON_LOADER), preview_box = self.c.div(F_CLASS + '_preview_box'), next = self.c.fromHTML(preview_tpl_next()), prev = self.c.fromHTML(preview_tpl_next('prev', 'left')), addLoadHandler = (src) => {
                                const image = self.c.element('img');
                                image.setAttribute('src', src);
                                const onload = () => {
                                    var _a;
                                    if (self.isInDestruct) {
                                        return;
                                    }
                                    self.e.off(image, 'load');
                                    dom["a" /* Dom */].detach(temp_content);
                                    if (opt.showPreviewNavigation) {
                                        if (dom["a" /* Dom */].prevWithClass(item, ITEM_CLASS)) {
                                            temp_content.appendChild(prev);
                                        }
                                        if (dom["a" /* Dom */].nextWithClass(item, ITEM_CLASS)) {
                                            temp_content.appendChild(next);
                                        }
                                    }
                                    temp_content.appendChild(preview_box);
                                    preview_box.appendChild(image);
                                    preview.setPosition();
                                    (_a = self === null || self === void 0 ? void 0 : self.events) === null || _a === void 0 ? void 0 : _a.fire('previewOpenedAndLoaded');
                                };
                                self.e.on(image, 'load', onload);
                                if (image.complete) {
                                    onload();
                                }
                            };
                            self.e.on([next, prev], 'click', function () {
                                if (this.classList.contains(CLASS_PREVIEW + 'navigation-next')) {
                                    item = dom["a" /* Dom */].nextWithClass(item, ITEM_CLASS);
                                }
                                else {
                                    item = dom["a" /* Dom */].prevWithClass(item, ITEM_CLASS);
                                }
                                if (!item) {
                                    throw Object(helpers["error"])('Need element');
                                }
                                dom["a" /* Dom */].detach(temp_content);
                                dom["a" /* Dom */].detach(preview_box);
                                temp_content.innerHTML = ICON_LOADER;
                                addLoadHandler(ga('href'));
                            });
                            self.e.on('beforeDestruct', () => {
                                preview.destruct();
                            });
                            preview.container.classList.add(F_CLASS + '_preview_dialog');
                            preview.setContent(temp_content);
                            preview.setPosition();
                            preview.open();
                            addLoadHandler(ga('href'));
                            self.events
                                .on('beforeDestruct', () => {
                                preview.destruct();
                            })
                                .fire('previewOpened');
                        }
                    }
                    : false,
                {
                    icon: 'upload',
                    title: 'Download',
                    exec: () => {
                        const url = ga('href');
                        if (url) {
                            self.ow.open(url);
                        }
                    }
                }
            ]);
        }, self.defaultTimeout);
        self === null || self === void 0 ? void 0 : self.e.on('beforeDestruct', () => {
            contextmenu.destruct();
        });
        e.stopPropagation();
        e.preventDefault();
        return false;
    };
});

// CONCATENATED MODULE: ./src/modules/file-browser/listeners/native-listeners.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





const getItem = (node, root, tag = 'a') => dom["a" /* Dom */].closest(node, elm => dom["a" /* Dom */].isElement(elm) && dom["a" /* Dom */].isTag(elm, tag), root);
function nativeListeners() {
    let dragElement = false;
    const self = this;
    const elementToItem = (elm) => {
        const { key } = elm.dataset, { item } = self.elementsMap[key || ''];
        return item;
    };
    self.e
        .on(self.tree, 'click', (e) => {
        const a = getItem(e.target, self.dialog.container, 'i');
        if (!a || !a.classList.contains('jodit-icon_folder_remove')) {
            return;
        }
        const path = Object(helpers["attr"])(a, '-path') || '';
        Confirm(self.i18n('Are you sure?'), self.i18n('Delete'), (yes) => {
            if (yes) {
                self.dataProvider
                    .folderRemove(path, Object(helpers["attr"])(a, '-name') || '', Object(helpers["attr"])(a, '-source') || '')
                    .then(resp => {
                    if (self.o.folderRemove &&
                        self.o.folderRemove.process) {
                        resp = self.o.folderRemove.process.call(self, resp);
                    }
                    if (!self.o.isSuccess(resp)) {
                        throw Object(helpers["error"])(self.o.getMessage(resp));
                    }
                    else {
                        self.state.activeElements = [];
                        self.status(self.o.getMessage(resp), true);
                    }
                    self.loadTree();
                })
                    .catch(self.status);
            }
        }).bindDestruct(self);
        e.stopImmediatePropagation();
        return false;
    })
        .on(self.tree, 'click', (e) => {
        const a = getItem(e.target, self.dialog.container, 'i');
        if (!a || !a.classList.contains('jodit-icon_folder_rename')) {
            return;
        }
        const name = Object(helpers["attr"])(a, '-name') || '', path = Object(helpers["attr"])(a, '-source-path') || '';
        Prompt(self.i18n('Enter new name'), self.i18n('Rename'), (newName) => {
            if (!Object(helpers["isValidName"])(newName)) {
                self.status(self.i18n('Enter new name'));
                return false;
            }
            self.dataProvider
                .folderRename(path, Object(helpers["attr"])(a, '-name') || '', newName, Object(helpers["attr"])(a, '-source') || '')
                .then(resp => {
                if (self.o.folderRename &&
                    self.o.folderRename.process) {
                    resp = self.o.folderRename.process.call(self, resp);
                }
                if (!self.o.isSuccess(resp)) {
                    throw Object(helpers["error"])(self.o.getMessage(resp));
                }
                else {
                    self.state.activeElements = [];
                    self.status(self.o.getMessage(resp), true);
                }
                self.loadTree();
            })
                .catch(self.status);
            return;
        }, self.i18n('type name'), name).bindDestruct(self);
        e.stopImmediatePropagation();
        return false;
    })
        .on(self.tree, 'click', (e) => {
        const a = getItem(e.target, self.dialog.container);
        if (!a) {
            return;
        }
        if (a.classList.contains('jodit-filebrowser__addfolder')) {
            Prompt(self.i18n('Enter Directory name'), self.i18n('Create directory'), (name) => {
                self.dataProvider
                    .createFolder(name, Object(helpers["attr"])(a, '-path') || '', Object(helpers["attr"])(a, '-source') || '')
                    .then(resp => {
                    if (self.o.isSuccess(resp)) {
                        self.loadTree();
                    }
                    else {
                        self.status(self.o.getMessage(resp));
                    }
                    return resp;
                }, self.status);
            }, self.i18n('type name')).bindDestruct(self);
        }
        else {
            self.dataProvider.currentPath = Object(helpers["attr"])(a, '-path') || '';
            self.dataProvider.currentSource = Object(helpers["attr"])(a, '-source') || '';
            self.loadTree();
        }
    })
        .on(self.tree, 'dragstart', (e) => {
        const a = getItem(e.target, self.dialog.container);
        if (!a) {
            return;
        }
        if (self.o.moveFolder) {
            dragElement = a;
        }
    })
        .on(self.tree, 'drop', (e) => {
        if ((self.o.moveFile || self.o.moveFolder) && dragElement) {
            let path = Object(helpers["attr"])(dragElement, '-path') || '';
            if (!self.o.moveFolder &&
                dragElement.classList.contains(F_CLASS + '__tree-item')) {
                return false;
            }
            if (dragElement.classList.contains(ITEM_CLASS)) {
                path += Object(helpers["attr"])(dragElement, '-name');
                if (!self.o.moveFile) {
                    return false;
                }
            }
            const a = getItem(e.target, self.dialog.container);
            if (!a) {
                return;
            }
            self.dataProvider
                .move(path, Object(helpers["attr"])(a, '-path') || '', Object(helpers["attr"])(a, '-source') || '', dragElement.classList.contains(ITEM_CLASS))
                .then(resp => {
                if (self.o.isSuccess(resp)) {
                    self.loadTree();
                }
                else {
                    self.status(self.o.getMessage(resp));
                }
            }, self.status);
            dragElement = false;
        }
    })
        .on(self.files, 'contextmenu', builders_context_menu(self))
        .on(self.files, 'click', (e) => {
        if (!Object(helpers["ctrlKey"])(e)) {
            this.state.activeElements = [];
        }
    })
        .on(self.files, 'click', (e) => {
        const a = getItem(e.target, self.dialog.container);
        if (!a) {
            return;
        }
        const item = elementToItem(a);
        if (!item) {
            return;
        }
        if (!Object(helpers["ctrlKey"])(e)) {
            self.state.activeElements = [item];
        }
        else {
            self.state.activeElements = [
                ...self.state.activeElements,
                item
            ];
        }
        e.stopPropagation();
        return false;
    })
        .on(self.files, 'dragstart', (e) => {
        if (self.o.moveFile) {
            const a = getItem(e.target, self.dialog.container);
            if (!a) {
                return;
            }
            dragElement = a;
        }
    })
        .on(self.dialog.container, 'drop', (e) => e.preventDefault());
}

// CONCATENATED MODULE: ./src/modules/file-browser/listeners/self-listeners.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function selfListeners() {
    const state = this.state, self = this;
    self.e
        .on('view.filebrowser', (view) => {
        if (view !== state.view) {
            state.view = view;
        }
    })
        .on('sort.filebrowser', (value) => {
        if (value !== state.sortBy) {
            state.sortBy = value;
            self.loadItems();
        }
    })
        .on('filter.filebrowser', (value) => {
        if (value !== state.filterWord) {
            state.filterWord = value;
            self.loadItems();
        }
    })
        .on('fileRemove.filebrowser', () => {
        if (self.state.activeElements.length) {
            Confirm(self.i18n('Are you sure?'), '', (yes) => {
                if (yes) {
                    const promises = [];
                    self.state.activeElements.forEach(item => {
                        promises.push(self.deleteFile(item.file || item.name || '', item.sourceName));
                    });
                    self.state.activeElements = [];
                    Promise.all(promises).then(() => {
                        return self.loadTree();
                    });
                }
            }).bindDestruct(self);
        }
    })
        .on('edit.filebrowser', () => {
        if (self.state.activeElements.length === 1) {
            const [file] = this.state.activeElements;
            self.openImageEditor(file.fileURL, file.file || '', file.path, file.sourceName);
        }
    })
        .on('fileRename.filebrowser', (name, path, source) => {
        if (self.state.activeElements.length === 1) {
            Prompt(self.i18n('Enter new name'), self.i18n('Rename'), (newName) => {
                if (!Object(checker["u" /* isValidName */])(newName)) {
                    self.status(self.i18n('Enter new name'));
                    return false;
                }
                self.dataProvider
                    .fileRename(path, name, newName, source)
                    .then(resp => {
                    if (self.o.fileRename &&
                        self.o.fileRename.process) {
                        resp = self.o.fileRename.process.call(self, resp);
                    }
                    if (!self.o.isSuccess(resp)) {
                        throw Object(helpers["error"])(self.o.getMessage(resp));
                    }
                    else {
                        self.state.activeElements = [];
                        self.status(self.o.getMessage(resp), true);
                    }
                    self.loadItems();
                })
                    .catch(self.status);
                return;
            }, self.i18n('type name'), name).bindDestruct(this);
        }
    })
        .on('update.filebrowser', () => {
        self.loadTree();
    });
}

// CONCATENATED MODULE: ./src/modules/file-browser/file-browser.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


















class file_browser_FileBrowser extends view_with_toolbar_ViewWithToolbar {
    constructor(options) {
        super(options);
        this.loader = this.c.div(F_CLASS + '__loader', ICON_LOADER);
        this.browser = this.c.div(F_CLASS + ' non-selected');
        this.status_line = this.c.div(F_CLASS + '__status');
        this.tree = this.c.div(F_CLASS + '__tree');
        this.files = this.c.div(F_CLASS + '__files');
        this.state = events["c" /* ObserveObject */].create({
            activeElements: [],
            elements: [],
            folders: [],
            view: 'tiles',
            sortBy: 'changed-desc',
            filterWord: '',
            onlyImages: false
        });
        this.errorHandler = (resp) => {
            if (resp instanceof Error) {
                this.status(this.i18n(resp.message));
            }
            else {
                this.status(this.o.getMessage(resp));
            }
        };
        this.close = () => {
            this.dialog.close();
        };
        this.openImageEditor = (href, name, path, source, onSuccess, onFailed) => {
            return this.getInstance('ImageEditor', this.o).open(href, (newname, box, success, failed) => {
                let promise;
                if (box.action === 'resize') {
                    promise = this.dataProvider.resize(path, source, name, newname, box.box);
                }
                else {
                    promise = this.dataProvider.crop(path, source, name, newname, box.box);
                }
                promise
                    .then(resp => {
                    if (this.o.isSuccess(resp)) {
                        this.loadTree().then(() => {
                            success();
                            if (onSuccess) {
                                onSuccess();
                            }
                        });
                    }
                    else {
                        failed(Object(helpers["error"])(this.o.getMessage(resp)));
                        if (onFailed) {
                            onFailed(Object(helpers["error"])(this.o.getMessage(resp)));
                        }
                    }
                })
                    .catch(error => {
                    failed(error);
                    if (onFailed) {
                        onFailed(error);
                    }
                });
            });
        };
        this.elementsMap = {};
        const self = this;
        self.options = new config["b" /* OptionsDefault */](Object(helpers["extend"])(true, {}, self.options, config["a" /* Config */].defaultOptions.filebrowser, options));
        self.storage = storage_Storage.makeStorage(this.o.filebrowser.saveStateInStorage);
        self.dataProvider = makeDataProvider(self, self.options);
        self.dialog = new dialog_Dialog({
            fullsize: self.o.fullsize,
            theme: self.o.theme,
            globalFullSize: self.o.globalFullSize,
            language: this.o.language,
            buttons: ['fullsize', 'dialog.close']
        });
        if (self.o.showFoldersPanel) {
            self.browser.appendChild(self.tree);
        }
        self.browser.appendChild(self.files);
        self.browser.appendChild(self.status_line);
        selfListeners.call(self);
        nativeListeners.call(self);
        stateListeners.call(self);
        self.dialog.setSize(self.o.width, self.o.height);
        [
            'getLocalFileByUrl',
            'crop',
            'resize',
            'create',
            'fileMove',
            'folderMove',
            'fileRename',
            'folderRename',
            'fileRemove',
            'folderRemove',
            'folder',
            'items',
            'permissions'
        ].forEach(key => {
            if (this.options[key] !== null) {
                this.options[key] = Object(helpers["extend"])(true, {}, this.o.ajax, this.options[key]);
            }
        });
        const view = this.storage.get(F_CLASS + '_view');
        if (view && this.o.view === null) {
            self.state.view = view === 'list' ? 'list' : 'tiles';
        }
        else {
            self.state.view = self.o.view === 'list' ? 'list' : 'tiles';
        }
        this.state.fire('change.view');
        const sortBy = self.storage.get(F_CLASS + '_sortby');
        if (sortBy) {
            const parts = sortBy.split('-');
            self.state.sortBy = ['changed', 'name', 'size'].includes(parts[0])
                ? sortBy
                : 'changed-desc';
        }
        else {
            self.state.sortBy = self.o.sortBy || 'changed-desc';
        }
        self.initUploader(self);
    }
    async loadItems(path = this.dataProvider.currentPath, source = this.dataProvider.currentSource) {
        this.files.classList.add('jodit-filebrowser_active');
        this.files.appendChild(this.loader.cloneNode(true));
        return this.dataProvider
            .items(path, source)
            .then(resp => {
            let process = this.o.items.process;
            if (!process) {
                process = this.o.ajax.process;
            }
            if (process) {
                const respData = process.call(self, resp);
                this.generateItemsList(respData.data.sources);
                this.state.activeElements = [];
            }
        })
            .catch((error) => {
            Alert(error.message).bindDestruct(this);
            this.errorHandler(error);
        });
    }
    async loadTree() {
        const path = this.dataProvider.currentPath, source = this.dataProvider.currentSource, errorUni = (e) => {
            throw e instanceof Error ? e : Object(helpers["error"])(e);
        };
        if (this.uploader) {
            this.uploader.setPath(path);
            this.uploader.setSource(source);
        }
        this.tree.classList.add('jodit-filebrowser_active');
        dom["a" /* Dom */].detach(this.tree);
        this.tree.appendChild(this.loader.cloneNode(true));
        if (this.o.showFoldersPanel) {
            const tree = this.dataProvider
                .tree(path, source)
                .then(resp => {
                let process = this.o.folder.process;
                if (!process) {
                    process = this.o.ajax.process;
                }
                if (process) {
                    const respData = process.call(self, resp);
                    this.generateFolderTree(respData.data.sources);
                }
            })
                .catch(e => {
                this.errorHandler(errorUni(this.i18n('Error on load folders')));
                errorUni(e);
            });
            const items = this.loadItems(path, source);
            return Promise.all([tree, items]).catch(helpers["error"]);
        }
        else {
            this.tree.classList.remove('jodit-filebrowser_active');
        }
    }
    async deleteFile(name, source) {
        return this.dataProvider
            .fileRemove(this.dataProvider.currentPath, name, source)
            .then(resp => {
            if (this.o.remove && this.o.remove.process) {
                resp = this.o.remove.process.call(this, resp);
            }
            if (!this.o.isSuccess(resp)) {
                throw Object(helpers["error"])(this.o.getMessage(resp));
            }
            else {
                this.status(this.o.getMessage(resp) ||
                    this.i18n('File "%s" was deleted', name), true);
            }
        })
            .catch(this.status);
    }
    generateFolderTree(sources) {
        const folders = [];
        Object(helpers["each"])(sources, (source_name, source) => {
            source.folders.forEach((name) => {
                folders.push({
                    name,
                    source,
                    sourceName: source_name
                });
            });
        });
        this.state.folders = folders;
    }
    generateItemsList(sources) {
        const elements = [];
        const state = this.state, canBeFile = (item) => !this.state.onlyImages ||
            item.isImage === undefined ||
            item.isImage, inFilter = (item) => !state.filterWord.length ||
            this.o.filter === undefined ||
            this.o.filter(item, state.filterWord);
        Object(helpers["each"])(sources, (source_name, source) => {
            if (source.files && source.files.length) {
                if (typeof this.o.sort === 'function') {
                    source.files.sort((a, b) => this.o.sort(a, b, state.sortBy));
                }
                source.files.forEach((item) => {
                    if (inFilter(item) && canBeFile(item)) {
                        elements.push(item_FileBrowserItem.create({
                            ...item,
                            sourceName: source_name,
                            source
                        }));
                    }
                });
            }
        });
        this.state.elements = elements;
    }
    onSelect(callback) {
        return () => {
            if (this.state.activeElements.length) {
                const files = [];
                const isImages = [];
                this.state.activeElements.forEach(elm => {
                    const url = elm.fileURL;
                    if (url) {
                        files.push(url);
                        isImages.push(elm.isImage || false);
                    }
                });
                this.close();
                const data = {
                    baseurl: '',
                    files,
                    isImages
                };
                if (Object(helpers["isFunction"])(callback)) {
                    callback(data);
                }
                this.close();
            }
            return false;
        };
    }
    isOpened() {
        return this.dialog.isOpened && this.browser.style.display !== 'none';
    }
    status(message, success) {
        if (!Object(helpers["isString"])(message)) {
            message = message.message;
        }
        this.status_line.classList.remove('jodit-filebrowser_success');
        this.status_line.classList.add('jodit-filebrowser_active');
        const messageBox = this.c.div();
        messageBox.textContent = message;
        this.status_line.appendChild(messageBox);
        if (success) {
            this.status_line.classList.add('jodit-filebrowser_success');
        }
        this.async.setTimeout(() => {
            this.status_line.classList.remove('jodit-filebrowser_active');
            dom["a" /* Dom */].detach(this.status_line);
        }, {
            timeout: this.o.howLongShowMsg,
            label: 'fileBrowser.status'
        });
    }
    open(callback = this.o
        .defaultCallback, onlyImages = false) {
        this.state.onlyImages = onlyImages;
        return this.async.promise((resolve, reject) => {
            if (!this.o.items || !this.o.items.url) {
                throw Object(helpers["error"])('Need set options.filebrowser.ajax.url');
            }
            let localTimeout = 0;
            this.e
                .off(this.files, 'dblclick')
                .on(this.files, 'dblclick', this.onSelect(callback))
                .on(this.files, 'touchstart', () => {
                const now = new Date().getTime();
                if (now - localTimeout < constants["EMULATE_DBLCLICK_TIMEOUT"]) {
                    this.onSelect(callback)();
                }
                localTimeout = now;
            })
                .off('select.filebrowser')
                .on('select.filebrowser', this.onSelect(callback));
            const header = this.c.div();
            this.toolbar.build(this.o.buttons).appendTo(header);
            this.dialog.open(this.browser, header);
            this.e.fire('sort.filebrowser', this.state.sortBy);
            this.loadTree().then(resolve, reject);
        });
    }
    initUploader(editor) {
        var _a;
        const self = this, uploaderOptions = Object(helpers["extend"])(true, {}, config["a" /* Config */].defaultOptions.uploader, self.o.uploader, {
            ...(_a = editor === null || editor === void 0 ? void 0 : editor.options) === null || _a === void 0 ? void 0 : _a.uploader
        });
        const uploadHandler = () => {
            this.loadItems();
        };
        self.uploader = self.getInstance('Uploader', uploaderOptions);
        self.uploader.setPath(self.dataProvider.currentPath);
        self.uploader.setSource(self.dataProvider.currentSource);
        self.uploader.bind(self.browser, uploadHandler, self.errorHandler);
        self.e.on('bindUploader.filebrowser', (button) => {
            self.uploader.bind(button, uploadHandler, self.errorHandler);
        });
    }
    destruct() {
        if (this.isInDestruct) {
            return;
        }
        this.dialog.destruct();
        delete this.dialog;
        this.events && this.e.off('.filebrowser');
        this.uploader && this.uploader.destruct();
        delete this.uploader;
        super.destruct();
    }
}
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], file_browser_FileBrowser.prototype, "status", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], file_browser_FileBrowser.prototype, "open", null);

// EXTERNAL MODULE: ./src/modules/image-editor/image-editor.less
var image_editor = __webpack_require__(146);

// CONCATENATED MODULE: ./src/modules/image-editor/templates/form.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const jie = 'jodit-image-editor';
const form_gi = ui["b" /* Icon */].get.bind(ui["b" /* Icon */]);
const act = (el, className = 'jodti-image-editor_active') => el ? className : '';
const form_form = (editor, o) => {
    const i = editor.i18n.bind(editor);
    const switcher = (label, ref, active = true) => `<div class="jodit-form__group">
		<label>${i(label)}</label>
		<div class="jodit-button-group jodit-button_radio_group">
			<input ${act(active, 'checked')} data-ref="${ref}" type="checkbox" class="jodit-input"/>

			<button type="button" data-yes="1" class="jodit-ui-button jodit-ui-button_status_success">${i('Yes')}</button>

			<button type="button" class="jodit-ui-button jodit-ui-button_status_danger">${i('No')}</button>
		</div>
	</div>`;
    return editor.create.fromHTML(`<form class="${jie} jodit-properties">
		<div class="jodit-grid jodit-grid_xs-column">
			<div class="jodit_col-lg-3-4 jodit_col-sm-5-5">
			${o.resize
        ? `<div class="${jie}__area ${jie}__area_resize ${jie}_active">
							<div data-ref="resizeBox" class="${jie}__box"></div>
							<div class="${jie}__resizer">
								<i class="jodit_bottomright"></i>
							</div>
						</div>`
        : ''}
			${o.crop
        ? `<div class="${jie}__area ${jie}__area_crop ${act(!o.resize)}">
							<div data-ref="cropBox" class="${jie}__box">
								<div class="${jie}__croper">
									<i class="jodit_bottomright"></i>
									<i class="${jie}__sizes"></i>
								</div>
							</div>
						</div>`
        : ''}
			</div>
			<div class="jodit_col-lg-1-4 jodit_col-sm-5-5">
			${o.resize
        ? `<div data-area="resize" class="${jie}__slider ${jie}_active">
							<div class="${jie}__slider-title">
								${form_gi('resize')}
								${i('Resize')}
							</div>
							<div class="${jie}__slider-content">
								<div class="jodit-form__group">
									<label>
										${i('Width')}
									</label>
									<input type="number" data-ref="widthInput" class="jodit-input"/>
								</div>
								<div class="jodit-form__group">
									<label>
										${i('Height')}
									</label>
									<input type="number" data-ref="heightInput" class="jodit-input"/>
								</div>
								${switcher('Keep Aspect Ratio', 'keepAspectRatioResize')}
							</div>
						</div>`
        : ''}
			${o.crop
        ? `<div data-area="crop" class="${jie}__slider ${act(!o.resize)}'">
							<div class="${jie}__slider-title">
								${form_gi('crop')}
								${i('Crop')}
							</div>
							<div class="${jie}__slider-content">
								${switcher('Keep Aspect Ratio', 'keepAspectRatioCrop')}
							</div>
						</div>`
        : ''}
			</div>
		</div>
	</form>`);
};

// CONCATENATED MODULE: ./src/modules/image-editor/image-editor.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */










config["a" /* Config */].prototype.imageeditor = {
    min_width: 20,
    min_height: 20,
    closeAfterSave: false,
    width: '85%',
    height: '85%',
    crop: true,
    resize: true,
    resizeUseRatio: true,
    resizeMinWidth: 20,
    resizeMinHeight: 20,
    cropUseRatio: true,
    cropDefaultWidth: '70%',
    cropDefaultHeight: '70%'
};
const image_editor_jie = 'jodit-image-editor';
const TABS = {
    resize: 'resize',
    crop: 'crop'
};
class image_editor_ImageEditor extends core_component["c" /* ViewComponent */] {
    constructor(editor) {
        super(editor);
        this.resizeUseRatio = true;
        this.cropUseRatio = true;
        this.clicked = false;
        this.start_x = 0;
        this.start_y = 0;
        this.top_x = 0;
        this.top_y = 0;
        this.width = 0;
        this.height = 0;
        this.activeTab = TABS.resize;
        this.naturalWidth = 0;
        this.naturalHeight = 0;
        this.ratio = 0;
        this.new_h = 0;
        this.new_w = 0;
        this.diff_x = 0;
        this.diff_y = 0;
        this.cropBox = {
            x: 0,
            y: 0,
            w: 0,
            h: 0
        };
        this.resizeBox = {
            w: 0,
            h: 0
        };
        this.calcValueByPercent = (value, percent) => {
            const percentStr = percent.toString();
            const valueNbr = parseFloat(value.toString());
            let match;
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
        this.calcCropBox = () => {
            const w = this.crop_box.parentNode.offsetWidth * 0.8, h = this.crop_box.parentNode.offsetHeight * 0.8;
            let wn = w, hn = h;
            if (w > this.naturalWidth && h > this.naturalHeight) {
                wn = this.naturalWidth;
                hn = this.naturalHeight;
            }
            else if (this.ratio > w / h) {
                wn = w;
                hn = this.naturalHeight * (w / this.naturalWidth);
            }
            else {
                wn = this.naturalWidth * (h / this.naturalHeight);
                hn = h;
            }
            Object(helpers["css"])(this.crop_box, {
                width: wn,
                height: hn
            });
        };
        this.showCrop = () => {
            if (!this.cropImage) {
                return;
            }
            this.calcCropBox();
            const w = this.cropImage.offsetWidth ||
                this.image.offsetWidth ||
                this.image.naturalWidth;
            this.new_w = this.calcValueByPercent(w, this.o.cropDefaultWidth);
            const h = this.cropImage.offsetHeight ||
                this.image.offsetHeight ||
                this.image.naturalHeight;
            if (this.cropUseRatio) {
                this.new_h = this.new_w / this.ratio;
            }
            else {
                this.new_h = this.calcValueByPercent(h, this.o.cropDefaultHeight);
            }
            Object(helpers["css"])(this.cropHandler, {
                backgroundImage: 'url(' + Object(helpers["attr"])(this.cropImage, 'src') + ')',
                width: this.new_w,
                height: this.new_h,
                left: w / 2 - this.new_w / 2,
                top: h / 2 - this.new_h / 2
            });
            this.j.e.fire(this.cropHandler, 'updatesize');
        };
        this.updateCropBox = () => {
            if (!this.cropImage) {
                return;
            }
            const ratioX = this.cropImage.offsetWidth / this.naturalWidth, ratioY = this.cropImage.offsetHeight / this.naturalHeight;
            this.cropBox.x = Object(helpers["css"])(this.cropHandler, 'left') / ratioX;
            this.cropBox.y = Object(helpers["css"])(this.cropHandler, 'top') / ratioY;
            this.cropBox.w = this.cropHandler.offsetWidth / ratioX;
            this.cropBox.h = this.cropHandler.offsetHeight / ratioY;
            this.sizes.textContent =
                this.cropBox.w.toFixed(0) + 'x' + this.cropBox.h.toFixed(0);
        };
        this.updateResizeBox = () => {
            this.resizeBox.w = this.image.offsetWidth || this.naturalWidth;
            this.resizeBox.h = this.image.offsetHeight || this.naturalHeight;
        };
        this.setHandlers = () => {
            const self = this;
            const { widthInput, heightInput } = Object(helpers["refs"])(this.editor);
            self.j.e
                .on([
                self.editor.querySelector('.jodit_bottomright'),
                self.cropHandler
            ], `mousedown.${image_editor_jie}`, (e) => {
                self.target = e.target;
                e.preventDefault();
                e.stopImmediatePropagation();
                self.clicked = true;
                self.start_x = e.clientX;
                self.start_y = e.clientY;
                if (self.activeTab === TABS.crop) {
                    self.top_x = Object(helpers["css"])(self.cropHandler, 'left');
                    self.top_y = Object(helpers["css"])(self.cropHandler, 'top');
                    self.width = self.cropHandler.offsetWidth;
                    self.height = self.cropHandler.offsetHeight;
                }
                else {
                    self.width = self.image.offsetWidth;
                    self.height = self.image.offsetHeight;
                }
            })
                .off(this.j.ow, `.${image_editor_jie}` + self.j.id)
                .on(this.j.ow, `mousemove.${image_editor_jie}` + self.j.id, this.j.async.throttle((e) => {
                if (self.clicked) {
                    self.diff_x = e.clientX - self.start_x;
                    self.diff_y = e.clientY - self.start_y;
                    if ((self.activeTab === TABS.resize &&
                        self.resizeUseRatio) ||
                        (self.activeTab === 'crop' && self.cropUseRatio)) {
                        if (self.diff_x) {
                            self.new_w = self.width + self.diff_x;
                            self.new_h = Math.round(self.new_w / self.ratio);
                        }
                        else {
                            self.new_h = self.height + self.diff_y;
                            self.new_w = Math.round(self.new_h * self.ratio);
                        }
                    }
                    else {
                        self.new_w = self.width + self.diff_x;
                        self.new_h = self.height + self.diff_y;
                    }
                    if (self.activeTab === TABS.resize) {
                        if (self.new_w > self.o.resizeMinWidth) {
                            Object(helpers["css"])(self.image, 'width', self.new_w + 'px');
                            widthInput.value = self.new_w.toString();
                        }
                        if (self.new_h > self.o.resizeMinHeight) {
                            Object(helpers["css"])(self.image, 'height', self.new_h + 'px');
                            heightInput.value = self.new_h.toString();
                        }
                        this.j.e.fire(self.resizeHandler, 'updatesize');
                    }
                    else {
                        if (self.target !== self.cropHandler) {
                            if (self.top_x + self.new_w >
                                self.cropImage.offsetWidth) {
                                self.new_w =
                                    self.cropImage.offsetWidth - self.top_x;
                            }
                            if (self.top_y + self.new_h >
                                self.cropImage.offsetHeight) {
                                self.new_h =
                                    self.cropImage.offsetHeight -
                                        self.top_y;
                            }
                            Object(helpers["css"])(self.cropHandler, {
                                width: self.new_w,
                                height: self.new_h
                            });
                        }
                        else {
                            if (self.top_x +
                                self.diff_x +
                                self.cropHandler.offsetWidth >
                                self.cropImage.offsetWidth) {
                                self.diff_x =
                                    self.cropImage.offsetWidth -
                                        self.top_x -
                                        self.cropHandler.offsetWidth;
                            }
                            Object(helpers["css"])(self.cropHandler, 'left', self.top_x + self.diff_x);
                            if (self.top_y +
                                self.diff_y +
                                self.cropHandler.offsetHeight >
                                self.cropImage.offsetHeight) {
                                self.diff_y =
                                    self.cropImage.offsetHeight -
                                        self.top_y -
                                        self.cropHandler.offsetHeight;
                            }
                            Object(helpers["css"])(self.cropHandler, 'top', self.top_y + self.diff_y);
                        }
                        this.j.e.fire(self.cropHandler, 'updatesize');
                    }
                    e.stopImmediatePropagation();
                }
            }, 5))
                .on(this.j.ow, `resize.${image_editor_jie}`, () => {
                this.j.e.fire(self.resizeHandler, 'updatesize');
                self.showCrop();
                this.j.e.fire(self.cropHandler, 'updatesize');
            })
                .on(this.j.ow, `mouseup.${image_editor_jie} ${self.j.id} keydown.${image_editor_jie}` + self.j.id, (e) => {
                if (self.clicked) {
                    self.clicked = false;
                    e.stopImmediatePropagation();
                }
            });
            Object(helpers["$$"])('.jodit-button-group', self.editor).forEach(group => {
                const input = group.querySelector('input');
                self.j.e.on(group, 'click', (e) => {
                    input.checked = !input.checked;
                    self.j.e.fire(input, 'change');
                });
            });
            self.j.e
                .on(this.editor, 'click.' + image_editor_jie, (e) => {
                const title = dom["a" /* Dom */].closest(e.target, (node) => dom["a" /* Dom */].isElement(node) &&
                    node.classList.contains(`${image_editor_jie}__slider-title`), self.editor);
                const slide = title === null || title === void 0 ? void 0 : title.parentElement;
                if (!slide) {
                    return;
                }
                Object(helpers["$$"])(`.${image_editor_jie}__slider,.${image_editor_jie}__area`, self.editor).forEach(elm => elm.classList.remove(`${image_editor_jie}_active`));
                slide.classList.add(`${image_editor_jie}_active`);
                self.activeTab =
                    Object(helpers["attr"])(slide, '-area') || TABS.resize;
                const tab = self.editor.querySelector(`.${image_editor_jie}__area.${image_editor_jie}__area_` + self.activeTab);
                if (tab) {
                    tab.classList.add(`${image_editor_jie}_active`);
                }
                if (self.activeTab === 'crop') {
                    self.showCrop();
                }
            })
                .on(widthInput, `change.${image_editor_jie} mousedown.${image_editor_jie} keydown.${image_editor_jie}`, self.j.async.debounce(() => {
                const value = parseInt(widthInput.value, 10);
                let another;
                if (value > self.o.min_width) {
                    Object(helpers["css"])(self.image, 'width', value + 'px');
                    if (self.resizeUseRatio) {
                        another = Math.round(value / self.ratio);
                        if (another > self.o.min_height) {
                            Object(helpers["css"])(self.image, 'height', another + 'px');
                            heightInput.value = another.toString();
                        }
                    }
                }
                this.j.e.fire(self.resizeHandler, 'updatesize');
            }, 200))
                .on(heightInput, `change.${image_editor_jie} mousedown.${image_editor_jie} keydown.${image_editor_jie}`, self.j.async.debounce(() => {
                if (this.isDestructed) {
                    return;
                }
                const value = parseInt(heightInput.value, 10);
                let another;
                if (value > self.o.min_height) {
                    Object(helpers["css"])(self.image, 'height', value + 'px');
                    if (self.resizeUseRatio) {
                        another = Math.round(value * self.ratio);
                        if (another > self.o.min_width) {
                            Object(helpers["css"])(self.image, 'width', another + 'px');
                            widthInput.value = another.toString();
                        }
                    }
                }
                this.j.e.fire(self.resizeHandler, 'updatesize');
            }, 200));
            const { keepAspectRatioResize, keepAspectRatioCrop } = Object(helpers["refs"])(this.editor);
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
                Object(helpers["css"])(self.resizeHandler, {
                    top: 0,
                    left: 0,
                    width: (self.image.offsetWidth || self.naturalWidth) + 'px',
                    height: (self.image.offsetHeight || self.naturalHeight) + 'px'
                });
                this.updateResizeBox();
            })
                .on(self.cropHandler, 'updatesize', () => {
                if (!self.cropImage) {
                    return;
                }
                let new_x = Object(helpers["css"])(self.cropHandler, 'left'), new_y = Object(helpers["css"])(self.cropHandler, 'top'), new_width = self.cropHandler.offsetWidth, new_height = self.cropHandler.offsetHeight;
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
                Object(helpers["css"])(self.cropHandler, {
                    width: new_width,
                    height: new_height,
                    left: new_x,
                    top: new_y,
                    backgroundPosition: -new_x - 1 + 'px ' + (-new_y - 1) + 'px',
                    backgroundSize: self.cropImage.offsetWidth +
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
                        box: self.activeTab === 'resize'
                            ? self.resizeBox
                            : self.cropBox
                    };
                    switch (button) {
                        case self.buttons.saveas:
                            Prompt(self.j.i18n('Enter new name'), self.j.i18n('Save in new file'), (name) => {
                                if (!Object(helpers["trim"])(name)) {
                                    Alert(self.j.i18n('The name should not be empty')).bindDestruct(this.j);
                                    return false;
                                }
                                self.onSave(name, data, self.hide, (e) => {
                                    Alert(e.message).bindDestruct(self.j);
                                });
                            }).bindDestruct(this.j);
                            break;
                        case self.buttons.save:
                            self.onSave(undefined, data, self.hide, (e) => {
                                Alert(e.message).bindDestruct(self.j);
                            });
                            break;
                        case self.buttons.reset:
                            if (self.activeTab === 'resize') {
                                Object(helpers["css"])(self.image, {
                                    width: null,
                                    height: null
                                });
                                widthInput.value = self.naturalWidth.toString();
                                heightInput.value = self.naturalHeight.toString();
                                self.j.e.fire(self.resizeHandler, 'updatesize');
                            }
                            else {
                                self.showCrop();
                            }
                            break;
                    }
                });
            });
        };
        this.options =
            editor && editor.o && editor.o.imageeditor
                ? editor.o.imageeditor
                : config["a" /* Config */].defaultOptions.imageeditor;
        const o = this.options;
        this.resizeUseRatio = o.resizeUseRatio;
        this.cropUseRatio = o.cropUseRatio;
        this.buttons = {
            reset: Object(ui_button["a" /* Button */])(this.j, 'update', 'Reset'),
            save: Object(ui_button["a" /* Button */])(this.j, 'save', 'Save'),
            saveas: Object(ui_button["a" /* Button */])(this.j, 'save', 'Save as ...')
        };
        this.activeTab = o.resize ? 'resize' : 'crop';
        this.editor = form_form(this.j, this.options);
        const { resizeBox, cropBox } = Object(helpers["refs"])(this.editor);
        this.resize_box = resizeBox;
        this.crop_box = cropBox;
        this.sizes = this.editor.querySelector(`.${image_editor_jie}__area.${image_editor_jie}__area_crop .jodit-image-editor__sizes`);
        this.resizeHandler = this.editor.querySelector(`.${image_editor_jie}__resizer`);
        this.cropHandler = this.editor.querySelector(`.${image_editor_jie}__croper`);
        this.dialog = new dialog_Dialog({
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
    get o() {
        return this.options;
    }
    hide() {
        this.dialog.close();
    }
    open(url, save) {
        return this.j.async.promise(resolve => {
            const timestamp = new Date().getTime();
            this.image = this.j.c.element('img');
            Object(helpers["$$"])('img,.jodit-icon_loader', this.resize_box).forEach(dom["a" /* Dom */].safeRemove);
            Object(helpers["$$"])('img,.jodit-icon_loader', this.crop_box).forEach(dom["a" /* Dom */].safeRemove);
            Object(helpers["css"])(this.cropHandler, 'background', 'transparent');
            this.onSave = save;
            this.resize_box.appendChild(this.j.c.element('i', { class: 'jodit-icon_loader' }));
            this.crop_box.appendChild(this.j.c.element('i', { class: 'jodit-icon_loader' }));
            if (/\?/.test(url)) {
                url += '&_tst=' + timestamp;
            }
            else {
                url += '?_tst=' + timestamp;
            }
            this.image.setAttribute('src', url);
            this.dialog.open();
            const { widthInput, heightInput } = Object(helpers["refs"])(this.editor);
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
                this.cropImage = this.image.cloneNode(true);
                this.crop_box.appendChild(this.cropImage);
                Object(helpers["$$"])('.jodit-icon_loader', this.editor).forEach(dom["a" /* Dom */].safeRemove);
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
    destruct() {
        if (this.isDestructed) {
            return;
        }
        if (this.dialog) {
            this.dialog.destruct();
            delete this.dialog;
        }
        dom["a" /* Dom */].safeRemove(this.editor);
        delete this.resize_box;
        delete this.crop_box;
        delete this.sizes;
        delete this.resizeHandler;
        delete this.cropHandler;
        delete this.editor;
        if (this.j.e) {
            this.j.e.off(this.ow, `.${image_editor_jie}`);
            this.j.e.off(`.${image_editor_jie}`);
        }
        super.destruct();
    }
}
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], image_editor_ImageEditor.prototype, "hide", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], image_editor_ImageEditor.prototype, "open", null);

// CONCATENATED MODULE: ./src/modules/observer/snapshot.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


class snapshot_Snapshot extends core_component["c" /* ViewComponent */] {
    constructor() {
        super(...arguments);
        this.isBlocked = false;
    }
    static equal(first, second) {
        return (first.html === second.html &&
            JSON.stringify(first.range) === JSON.stringify(second.range));
    }
    static countNodesBeforeInParent(elm) {
        if (!elm.parentNode) {
            return 0;
        }
        const elms = elm.parentNode.childNodes;
        let count = 0, last = null, j;
        for (j = 0; j < elms.length; j += 1) {
            if (last &&
                !(dom["a" /* Dom */].isText(elms[j]) && elms[j].textContent === '') &&
                !(dom["a" /* Dom */].isText(last) && dom["a" /* Dom */].isText(elms[j]))) {
                count += 1;
            }
            if (elms[j] === elm) {
                return count;
            }
            last = elms[j];
        }
        return 0;
    }
    static strokeOffset(elm, offset) {
        while (dom["a" /* Dom */].isText(elm)) {
            elm = elm.previousSibling;
            if (dom["a" /* Dom */].isText(elm) && elm.textContent !== null) {
                offset += elm.textContent.length;
            }
        }
        return offset;
    }
    calcHierarchyLadder(elm) {
        const counts = [];
        if (!elm || !elm.parentNode || !dom["a" /* Dom */].isOrContains(this.j.editor, elm)) {
            return [];
        }
        while (elm && elm !== this.j.editor) {
            if (elm) {
                counts.push(snapshot_Snapshot.countNodesBeforeInParent(elm));
            }
            elm = elm.parentNode;
        }
        return counts.reverse();
    }
    getElementByLadder(ladder) {
        let n = this.j.editor, i;
        for (i = 0; n && i < ladder.length; i += 1) {
            n = n.childNodes[ladder[i]];
        }
        return n;
    }
    make() {
        const snapshot = {
            html: '',
            range: {
                startContainer: [],
                startOffset: 0,
                endContainer: [],
                endOffset: 0
            }
        };
        snapshot.html = this.j.getNativeEditorValue();
        const sel = this.j.s.sel;
        if (sel && sel.rangeCount) {
            const range = sel.getRangeAt(0), startContainer = this.calcHierarchyLadder(range.startContainer), endContainer = this.calcHierarchyLadder(range.endContainer);
            let startOffset = snapshot_Snapshot.strokeOffset(range.startContainer, range.startOffset), endOffset = snapshot_Snapshot.strokeOffset(range.endContainer, range.endOffset);
            if (!startContainer.length &&
                range.startContainer !== this.j.editor) {
                startOffset = 0;
            }
            if (!endContainer.length && range.endContainer !== this.j.editor) {
                endOffset = 0;
            }
            snapshot.range = {
                startContainer,
                startOffset,
                endContainer,
                endOffset
            };
        }
        return snapshot;
    }
    restore(snapshot) {
        this.isBlocked = true;
        const value = this.j.getNativeEditorValue();
        if (value !== snapshot.html) {
            this.j.setEditorValue(snapshot.html);
        }
        this.restoreOnlySelection(snapshot);
        this.isBlocked = false;
    }
    restoreOnlySelection(snapshot) {
        try {
            if (snapshot.range) {
                const range = this.j.ed.createRange();
                range.setStart(this.getElementByLadder(snapshot.range.startContainer), snapshot.range.startOffset);
                range.setEnd(this.getElementByLadder(snapshot.range.endContainer), snapshot.range.endOffset);
                this.j.s.selectRange(range);
            }
        }
        catch (__ignore) {
            this.j.editor.lastChild &&
                this.j.s.setCursorAfter(this.j.editor.lastChild);
            if (false) {}
        }
    }
    destruct() {
        this.isBlocked = false;
        super.destruct();
    }
}

// CONCATENATED MODULE: ./src/modules/observer/stack.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class Stack {
    constructor() {
        this.commands = [];
        this.stackPosition = -1;
    }
    get length() {
        return this.commands.length;
    }
    clearRedo() {
        this.commands.length = this.stackPosition + 1;
    }
    clear() {
        this.commands.length = 0;
        this.stackPosition = -1;
    }
    push(command) {
        this.clearRedo();
        this.commands.push(command);
        this.stackPosition += 1;
    }
    replace(command) {
        this.commands[this.stackPosition] = command;
    }
    current() {
        return this.commands[this.stackPosition];
    }
    undo() {
        if (this.canUndo()) {
            if (this.commands[this.stackPosition]) {
                this.commands[this.stackPosition].undo();
            }
            this.stackPosition -= 1;
            return true;
        }
        return false;
    }
    redo() {
        if (this.canRedo()) {
            this.stackPosition += 1;
            if (this.commands[this.stackPosition]) {
                this.commands[this.stackPosition].redo();
            }
            return true;
        }
        return false;
    }
    canUndo() {
        return this.stackPosition >= 0;
    }
    canRedo() {
        return this.stackPosition < this.commands.length - 1;
    }
}

// CONCATENATED MODULE: ./src/modules/observer/command.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class Command {
    constructor(oldValue, newValue, observer, tick) {
        this.oldValue = oldValue;
        this.newValue = newValue;
        this.observer = observer;
        this.tick = tick;
    }
    undo() {
        this.observer.snapshot.restore(this.oldValue);
    }
    redo() {
        this.observer.snapshot.restore(this.newValue);
    }
}

// CONCATENATED MODULE: ./src/modules/observer/observer.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







config["a" /* Config */].prototype.observer = {
    timeout: 100
};
class observer_Observer extends core_component["c" /* ViewComponent */] {
    constructor(editor) {
        super(editor);
        this.stack = new Stack();
        this.snapshot = new snapshot_Snapshot(this.j);
        this.updateTick = 0;
        editor.e.on('afterAddPlace.observer', () => {
            if (this.isInDestruct) {
                return;
            }
            this.startValue = this.snapshot.make();
            editor.events
                .on('internalChange', () => {
                this.startValue = this.snapshot.make();
            })
                .on(editor.editor, [
                'changeSelection',
                'selectionstart',
                'selectionchange',
                'mousedown',
                'mouseup',
                'keydown',
                'keyup'
            ]
                .map(f => f + '.observer')
                .join(' '), () => {
                if (this.startValue.html ===
                    this.j.getNativeEditorValue()) {
                    this.startValue = this.snapshot.make();
                }
            })
                .on(this, 'change.observer', this.onChange);
        });
    }
    get startValue() {
        return this.__startValue;
    }
    set startValue(value) {
        this.__startValue = value;
    }
    upTick() {
        this.updateTick += 1;
    }
    onChange() {
        if (this.snapshot.isBlocked) {
            return;
        }
        this.updateStack();
    }
    updateStack(replace = false) {
        const newValue = this.snapshot.make();
        if (!snapshot_Snapshot.equal(newValue, this.startValue)) {
            const newCommand = new Command(this.startValue, newValue, this, this.updateTick);
            if (replace) {
                const command = this.stack.current();
                if (command && this.updateTick === command.tick) {
                    this.stack.replace(newCommand);
                }
            }
            else {
                this.stack.push(newCommand);
            }
            this.startValue = newValue;
            this.fireChangeStack();
        }
    }
    redo() {
        if (this.stack.redo()) {
            this.startValue = this.snapshot.make();
            this.fireChangeStack();
        }
    }
    undo() {
        if (this.stack.undo()) {
            this.startValue = this.snapshot.make();
            this.fireChangeStack();
        }
    }
    clear() {
        this.startValue = this.snapshot.make();
        this.stack.clear();
        this.fireChangeStack();
    }
    replaceSnapshot() {
        this.updateStack(true);
    }
    fireChangeStack() {
        var _a;
        this.j && !this.j.isInDestruct && ((_a = this.j.events) === null || _a === void 0 ? void 0 : _a.fire('changeStack'));
    }
    destruct() {
        if (this.j.events) {
            this.j.e.off('.observer');
        }
        this.snapshot.destruct();
        delete this.snapshot;
        delete this.stack;
        delete this.startValue;
        super.destruct();
    }
}
Object(tslib_es6["a" /* __decorate */])([
    Object(decorators["debounce"])()
], observer_Observer.prototype, "onChange", null);

// EXTERNAL MODULE: ./src/modules/progress-bar/progress-bar.less
var progress_bar = __webpack_require__(147);

// CONCATENATED MODULE: ./src/modules/progress-bar/progress-bar.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



class progress_bar_ProgressBar extends core_component["c" /* ViewComponent */] {
    constructor() {
        super(...arguments);
        this.progressBar = this.j.c.div('jodit-progressbar', this.j.c.div());
    }
    show() {
        const container = this.j.workplace || this.j.container;
        container.appendChild(this.progressBar);
        return this;
    }
    hide() {
        dom["a" /* Dom */].safeRemove(this.progressBar);
        return this;
    }
    progress(percentage) {
        this.progressBar.style.width = percentage.toFixed(2) + '%';
        return this;
    }
    destruct() {
        this.hide();
        return super.destruct();
    }
}

// CONCATENATED MODULE: ./src/core/selection/style/apply-style.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





var apply_style_mode;
(function (mode) {
    mode["UNWRAP"] = "UNWRAP";
    mode["WRAP"] = "WRAP";
})(apply_style_mode || (apply_style_mode = {}));
class apply_style_ApplyStyle {
    constructor(jodit, style) {
        this.jodit = jodit;
        this.style = style;
    }
    apply() {
        const sel = this.jodit.selection;
        let selInfo = [];
        const isCollapsed = sel.isCollapsed();
        if (isCollapsed) {
            const font = this.jodit.createInside.element('font');
            sel.insertNode(font, false, false);
            sel.setCursorIn(font);
            selInfo = sel.save();
            this.applyToElement(font);
            dom["a" /* Dom */].unwrap(font);
        }
        else {
            selInfo = sel.save();
            Object(helpers["normalizeNode"])(sel.area.firstChild);
            sel.wrapInTag(this.applyToElement);
        }
        sel.restore(selInfo);
    }
    applyToElement(font) {
        const { area } = this.jodit.selection;
        if (this.checkSuitableParent(font) ||
            this.checkSuitableChild(font) ||
            this.checkClosestWrapper(font) ||
            this.unwrapChildren(font)) {
            return;
        }
        if (!this.mode) {
            this.mode = apply_style_mode.WRAP;
        }
        if (this.mode !== apply_style_mode.WRAP) {
            return;
        }
        let wrapper = font;
        if (this.style.elementIsBlock) {
            const ulReg = /^(ul|ol|li|td|th|tr|tbody|table)$/i;
            const box = dom["a" /* Dom */].up(font, node => {
                if (node && dom["a" /* Dom */].isBlock(node, this.jodit.s.win)) {
                    if (ulReg.test(this.style.element) ||
                        !ulReg.test(node.nodeName)) {
                        return true;
                    }
                }
                return false;
            }, area);
            if (box) {
                wrapper = box;
            }
            else {
                wrapper = this.wrapUnwrappedText(font);
            }
        }
        const newWrapper = dom["a" /* Dom */].replace(wrapper, this.style.element, this.jodit.createInside);
        if (this.style.elementIsBlock) {
            this.postProcessListElement(newWrapper);
        }
        if (this.style.options.style && this.style.elementIsDefault) {
            Object(helpers["css"])(newWrapper, this.style.options.style);
        }
    }
    checkSuitableParent(font) {
        const { parentNode } = font;
        if (parentNode &&
            !dom["a" /* Dom */].next(font, this.isNormalNode, parentNode) &&
            !dom["a" /* Dom */].prev(font, this.isNormalNode, parentNode) &&
            this.isSuitableElement(parentNode, false) &&
            parentNode !== this.jodit.s.area &&
            (!dom["a" /* Dom */].isBlock(parentNode, this.jodit.ew) ||
                this.style.elementIsBlock)) {
            this.toggleStyles(parentNode);
            return true;
        }
        return false;
    }
    checkSuitableChild(font) {
        let { firstChild } = font;
        if (firstChild && this.jodit.s.isMarker(firstChild)) {
            firstChild = firstChild.nextSibling;
        }
        if (firstChild &&
            !dom["a" /* Dom */].next(firstChild, this.isNormalNode, font) &&
            !dom["a" /* Dom */].prev(firstChild, this.isNormalNode, font) &&
            this.isSuitableElement(firstChild, false)) {
            this.toggleStyles(firstChild);
            return true;
        }
        return false;
    }
    checkClosestWrapper(font) {
        const wrapper = dom["a" /* Dom */].closest(font, this.isSuitableElement, this.jodit.editor);
        if (wrapper) {
            if (this.style.elementIsBlock) {
                this.toggleStyles(wrapper);
                return true;
            }
            const leftRange = this.jodit.s.createRange();
            leftRange.setStartBefore(wrapper);
            leftRange.setEndBefore(font);
            const leftFragment = leftRange.extractContents();
            if ((!leftFragment.textContent ||
                !Object(helpers["trim"])(leftFragment.textContent).length) &&
                leftFragment.firstChild) {
                dom["a" /* Dom */].unwrap(leftFragment.firstChild);
            }
            if (wrapper.parentNode) {
                wrapper.parentNode.insertBefore(leftFragment, wrapper);
            }
            leftRange.setStartAfter(font);
            leftRange.setEndAfter(wrapper);
            const rightFragment = leftRange.extractContents();
            if ((!rightFragment.textContent ||
                !Object(helpers["trim"])(rightFragment.textContent).length) &&
                rightFragment.firstChild) {
                dom["a" /* Dom */].unwrap(rightFragment.firstChild);
            }
            dom["a" /* Dom */].after(wrapper, rightFragment);
            this.toggleStyles(wrapper);
            return true;
        }
        return false;
    }
    elementHasSameStyle(elm, rules) {
        return Boolean(Object(checker["q" /* isPlainObject */])(rules) &&
            !dom["a" /* Dom */].isTag(elm, 'font') &&
            dom["a" /* Dom */].isHTMLElement(elm, this.jodit.ew) &&
            Object(helpers["each"])(rules, (property, checkValue) => {
                const value = Object(helpers["css"])(elm, property, undefined, true);
                return (!Object(checker["w" /* isVoid */])(value) &&
                    value !== '' &&
                    !Object(checker["w" /* isVoid */])(checkValue) &&
                    Object(helpers["normalizeCssValue"])(property, checkValue)
                        .toString()
                        .toLowerCase() === value.toString().toLowerCase());
            }));
    }
    isSuitableElement(elm, strict = true) {
        if (!elm) {
            return false;
        }
        const { element, elementIsDefault, options } = this.style;
        const elmHasSameStyle = this.elementHasSameStyle(elm, options.style);
        const elmIsSame = elm.nodeName.toLowerCase() === element;
        return (((!elementIsDefault || !strict) && elmIsSame) ||
            (elmHasSameStyle && this.isNormalNode(elm)));
    }
    isNormalNode(elm) {
        return Boolean(elm !== null &&
            !dom["a" /* Dom */].isEmptyTextNode(elm) &&
            !this.jodit.s.isMarker(elm));
    }
    toggleStyles(elm) {
        const { style } = this.style.options;
        if (style && elm.nodeName.toLowerCase() === this.style.defaultTag) {
            Object.keys(style).forEach(rule => {
                if (this.mode === apply_style_mode.UNWRAP ||
                    Object(helpers["css"])(elm, rule) ===
                        Object(helpers["normalizeCssValue"])(rule, style[rule])) {
                    Object(helpers["css"])(elm, rule, '');
                    if (this.mode === undefined) {
                        this.mode = apply_style_mode.UNWRAP;
                    }
                }
                else {
                    Object(helpers["css"])(elm, rule, style[rule]);
                    if (this.mode === undefined) {
                        this.mode = apply_style_mode.WRAP;
                    }
                }
            });
        }
        const isBlock = dom["a" /* Dom */].isBlock(elm, this.jodit.ew);
        const isSuitableInline = !isBlock &&
            (!Object(helpers["attr"])(elm, 'style') ||
                elm.nodeName.toLowerCase() !== this.style.defaultTag);
        const isSuitableBlock = !isSuitableInline &&
            isBlock &&
            elm.nodeName.toLowerCase() === this.style.element;
        if (isSuitableInline || isSuitableBlock) {
            dom["a" /* Dom */].unwrap(elm);
            if (this.mode === undefined) {
                this.mode = apply_style_mode.UNWRAP;
            }
        }
    }
    unwrapChildren(font) {
        const needUnwrap = [];
        let firstElementSuit;
        if (font.firstChild) {
            dom["a" /* Dom */].find(font.firstChild, (elm) => {
                if (elm && this.isSuitableElement(elm)) {
                    if (firstElementSuit === undefined) {
                        firstElementSuit = true;
                    }
                    needUnwrap.push(elm);
                }
                else {
                    if (firstElementSuit === undefined) {
                        firstElementSuit = false;
                    }
                }
                return false;
            }, font, true);
        }
        needUnwrap.forEach(dom["a" /* Dom */].unwrap);
        return Boolean(firstElementSuit);
    }
    wrapUnwrappedText(elm) {
        const { area, win } = this.jodit.selection;
        const edge = (n, key = 'previousSibling') => {
            let edgeNode = n, node = n;
            while (node) {
                edgeNode = node;
                if (node[key]) {
                    node = node[key];
                }
                else {
                    node =
                        node.parentNode &&
                            !dom["a" /* Dom */].isBlock(node.parentNode, win) &&
                            node.parentNode !== area
                            ? node.parentNode
                            : null;
                }
                if (dom["a" /* Dom */].isBlock(node, win)) {
                    break;
                }
            }
            return edgeNode;
        };
        const start = edge(elm), end = edge(elm, 'nextSibling');
        const range = this.jodit.s.createRange();
        range.setStartBefore(start);
        range.setEndAfter(end);
        const fragment = range.extractContents();
        const wrapper = this.jodit.createInside.element(this.style.element);
        wrapper.appendChild(fragment);
        range.insertNode(wrapper);
        if (this.style.elementIsBlock) {
            this.postProcessListElement(wrapper);
            if (dom["a" /* Dom */].isEmpty(wrapper) &&
                !dom["a" /* Dom */].isTag(wrapper.firstElementChild, 'br')) {
                wrapper.appendChild(this.jodit.createInside.element('br'));
            }
        }
        return wrapper;
    }
    postProcessListElement(wrapper) {
        if (/^(OL|UL)$/i.test(this.style.element) &&
            !dom["a" /* Dom */].isTag(wrapper.firstElementChild, 'li')) {
            const li = dom["a" /* Dom */].replace(wrapper, 'li', this.jodit.createInside);
            const ul = dom["a" /* Dom */].wrap(li, this.style.element, this.jodit);
            if (ul) {
                wrapper = ul;
            }
        }
    }
}
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], apply_style_ApplyStyle.prototype, "applyToElement", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], apply_style_ApplyStyle.prototype, "isSuitableElement", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], apply_style_ApplyStyle.prototype, "isNormalNode", null);

// CONCATENATED MODULE: ./src/core/selection/style/style.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


class style_Style {
    constructor(options) {
        this.options = options;
    }
    get element() {
        return this.options.element || this.defaultTag;
    }
    get elementIsBlock() {
        return Boolean(this.options.element && constants["IS_BLOCK"].test(this.options.element));
    }
    get defaultTag() {
        if (this.options.defaultTag) {
            return this.options.defaultTag;
        }
        return this.elementIsBlock ? 'p' : 'span';
    }
    get elementIsDefault() {
        return this.element === this.defaultTag;
    }
    apply(jodit) {
        const applyStyle = new apply_style_ApplyStyle(jodit, this);
        applyStyle.apply();
    }
}

// CONCATENATED MODULE: ./src/core/selection/select.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







class select_Select {
    constructor(jodit) {
        this.jodit = jodit;
        this.isMarker = (elm) => dom["a" /* Dom */].isNode(elm, this.win) &&
            dom["a" /* Dom */].isElement(elm) &&
            dom["a" /* Dom */].isTag(elm, 'span') &&
            elm.hasAttribute('data-' + constants["MARKER_CLASS"]);
        this.eachSelection = (callback) => {
            const sel = this.sel;
            if (sel && sel.rangeCount) {
                const range = sel.getRangeAt(0);
                const nodes = [], startOffset = range.startOffset, length = this.area.childNodes.length, elementOffset = startOffset < length ? startOffset : length - 1, start = range.startContainer === this.area
                    ? this.area.childNodes[elementOffset]
                    : range.startContainer, end = range.endContainer === this.area
                    ? this.area.childNodes[range.endOffset - 1]
                    : range.endContainer;
                dom["a" /* Dom */].find(start, (node) => {
                    if (node &&
                        node !== this.area &&
                        !dom["a" /* Dom */].isEmptyTextNode(node) &&
                        !this.isMarker(node)) {
                        nodes.push(node);
                    }
                    return (node === end ||
                        (node && node.contains && node.contains(end)));
                }, this.area, true, 'nextSibling', false);
                const forEvery = (current) => {
                    if (!dom["a" /* Dom */].isOrContains(this.j.editor, current, true)) {
                        return;
                    }
                    if (current.nodeName.match(/^(UL|OL)$/)) {
                        return Array.from(current.childNodes).forEach(forEvery);
                    }
                    if (dom["a" /* Dom */].isTag(current, 'li')) {
                        if (current.firstChild) {
                            current = current.firstChild;
                        }
                        else {
                            const currentB = this.j.createInside.text(constants["INVISIBLE_SPACE"]);
                            current.appendChild(currentB);
                            current = currentB;
                        }
                    }
                    callback(current);
                };
                if (nodes.length === 0 && dom["a" /* Dom */].isEmptyTextNode(start)) {
                    nodes.push(start);
                }
                nodes.forEach(forEvery);
            }
        };
        jodit.e.on('removeMarkers', () => {
            this.removeMarkers();
        });
    }
    get j() {
        return this.jodit;
    }
    errorNode(node) {
        if (!dom["a" /* Dom */].isNode(node, this.win)) {
            throw Object(helpers["error"])('Parameter node must be instance of Node');
        }
    }
    get area() {
        return this.j.editor;
    }
    get win() {
        return this.j.ew;
    }
    get doc() {
        return this.j.ed;
    }
    get sel() {
        if (this.j.o.shadowRoot) {
            return this.j.o.shadowRoot.getSelection();
        }
        return this.win.getSelection();
    }
    get range() {
        const sel = this.sel;
        return sel && sel.rangeCount ? sel.getRangeAt(0) : this.createRange();
    }
    createRange(select = false) {
        const range = this.doc.createRange();
        if (select) {
            this.selectRange(range);
        }
        return range;
    }
    remove() {
        const sel = this.sel, current = this.current();
        if (sel && current) {
            for (let i = 0; i < sel.rangeCount; i += 1) {
                sel.getRangeAt(i).deleteContents();
                sel.getRangeAt(i).collapse(true);
            }
        }
    }
    clear() {
        var _a, _b;
        if ((_a = this.sel) === null || _a === void 0 ? void 0 : _a.rangeCount) {
            (_b = this.sel) === null || _b === void 0 ? void 0 : _b.removeAllRanges();
        }
    }
    removeNode(node) {
        if (!dom["a" /* Dom */].isOrContains(this.j.editor, node, true)) {
            throw Object(helpers["error"])("Selection.removeNode can remove only editor's children");
        }
        dom["a" /* Dom */].safeRemove(node);
        this.j.e.fire('afterRemoveNode', node);
    }
    insertCursorAtPoint(x, y) {
        this.removeMarkers();
        try {
            const rng = this.createRange();
            (() => {
                if (this.doc.caretPositionFromPoint) {
                    const caret = this.doc.caretPositionFromPoint(x, y);
                    if (caret) {
                        rng.setStart(caret.offsetNode, caret.offset);
                        return;
                    }
                }
                if (this.doc.caretRangeFromPoint) {
                    const caret = this.doc.caretRangeFromPoint(x, y);
                    rng.setStart(caret.startContainer, caret.startOffset);
                }
            })();
            rng.collapse(true);
            this.selectRange(rng);
            return true;
        }
        catch (_a) { }
        return false;
    }
    removeMarkers() {
        Object(helpers["$$"])('span[data-' + constants["MARKER_CLASS"] + ']', this.area).forEach(dom["a" /* Dom */].safeRemove);
    }
    marker(atStart = false, range) {
        let newRange = null;
        if (range) {
            newRange = range.cloneRange();
            newRange.collapse(atStart);
        }
        const marker = this.j.createInside.span();
        marker.id =
            constants["MARKER_CLASS"] +
                '_' +
                +new Date() +
                '_' +
                ('' + Math.random()).slice(2);
        marker.style.lineHeight = '0';
        marker.style.display = 'none';
        marker.setAttribute('data-' + constants["MARKER_CLASS"], atStart ? 'start' : 'end');
        marker.appendChild(this.j.createInside.text(constants["INVISIBLE_SPACE"]));
        if (newRange) {
            if (dom["a" /* Dom */].isOrContains(this.area, atStart ? newRange.startContainer : newRange.endContainer)) {
                newRange.insertNode(marker);
            }
        }
        return marker;
    }
    restore(selectionInfo = []) {
        if (Object(helpers["isArray"])(selectionInfo)) {
            let range = false;
            selectionInfo.forEach((selection) => {
                const end = this.area.querySelector('#' + selection.endId), start = this.area.querySelector('#' + selection.startId);
                if (!start) {
                    return;
                }
                range = this.createRange();
                if (selection.collapsed || !end) {
                    const previousNode = start.previousSibling;
                    if (dom["a" /* Dom */].isText(previousNode)) {
                        range.setStart(previousNode, previousNode.nodeValue
                            ? previousNode.nodeValue.length
                            : 0);
                    }
                    else {
                        range.setStartBefore(start);
                    }
                    dom["a" /* Dom */].safeRemove(start);
                    range.collapse(true);
                }
                else {
                    range.setStartAfter(start);
                    dom["a" /* Dom */].safeRemove(start);
                    range.setEndBefore(end);
                    dom["a" /* Dom */].safeRemove(end);
                }
            });
            if (range) {
                this.selectRange(range);
            }
        }
    }
    save() {
        const sel = this.sel;
        if (!sel || !sel.rangeCount) {
            return [];
        }
        const info = [], length = sel.rangeCount, ranges = [];
        let i, start, end;
        for (i = 0; i < length; i += 1) {
            ranges[i] = sel.getRangeAt(i);
            if (ranges[i].collapsed) {
                start = this.marker(true, ranges[i]);
                info[i] = {
                    startId: start.id,
                    collapsed: true,
                    startMarker: start.outerHTML
                };
            }
            else {
                start = this.marker(true, ranges[i]);
                end = this.marker(false, ranges[i]);
                info[i] = {
                    startId: start.id,
                    endId: end.id,
                    collapsed: false,
                    startMarker: start.outerHTML,
                    endMarker: end.outerHTML
                };
            }
        }
        sel.removeAllRanges();
        for (i = length - 1; i >= 0; --i) {
            const startElm = this.doc.getElementById(info[i].startId);
            if (startElm) {
                if (info[i].collapsed) {
                    ranges[i].setStartAfter(startElm);
                    ranges[i].collapse(true);
                }
                else {
                    ranges[i].setStartBefore(startElm);
                    if (info[i].endId) {
                        const endElm = this.doc.getElementById(info[i].endId);
                        if (endElm) {
                            ranges[i].setEndAfter(endElm);
                        }
                    }
                }
            }
            try {
                sel.addRange(ranges[i].cloneRange());
            }
            catch (_a) { }
        }
        return info;
    }
    focus() {
        var _a, _b;
        if (!this.isFocused()) {
            if (this.j.iframe) {
                if (this.doc.readyState === 'complete') {
                    this.j.iframe.focus();
                }
            }
            this.win.focus();
            this.area.focus();
            const sel = this.sel, range = (sel === null || sel === void 0 ? void 0 : sel.rangeCount) ? sel === null || sel === void 0 ? void 0 : sel.getRangeAt(0) : null;
            if (!range || !dom["a" /* Dom */].isOrContains(this.area, range.startContainer)) {
                const range = this.createRange();
                range.setStart(this.area, 0);
                range.collapse(true);
                this.selectRange(range, false);
            }
            if (!this.j.editorIsActive) {
                (_b = (_a = this.j) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.fire('focus');
            }
            return true;
        }
        return false;
    }
    isCollapsed() {
        const sel = this.sel;
        for (let r = 0; sel && r < sel.rangeCount; r += 1) {
            if (!sel.getRangeAt(r).collapsed) {
                return false;
            }
        }
        return true;
    }
    isFocused() {
        return (this.doc.hasFocus &&
            this.doc.hasFocus() &&
            this.area === this.doc.activeElement);
    }
    current(checkChild = true) {
        if (this.j.getRealMode() === constants["MODE_WYSIWYG"]) {
            const sel = this.sel;
            if (!sel || sel.rangeCount === 0) {
                return null;
            }
            const range = sel.getRangeAt(0);
            let node = range.startContainer, rightMode = false;
            const child = (nd) => rightMode ? nd.lastChild : nd.firstChild;
            if (dom["a" /* Dom */].isTag(node, 'br') && sel.isCollapsed) {
                return node;
            }
            if (!dom["a" /* Dom */].isText(node)) {
                node = range.startContainer.childNodes[range.startOffset];
                if (!node) {
                    node =
                        range.startContainer.childNodes[range.startOffset - 1];
                    rightMode = true;
                }
                if (node && sel.isCollapsed && !dom["a" /* Dom */].isText(node)) {
                    if (!rightMode && dom["a" /* Dom */].isText(node.previousSibling)) {
                        node = node.previousSibling;
                    }
                    else if (checkChild) {
                        let current = child(node);
                        while (current) {
                            if (current && dom["a" /* Dom */].isText(current)) {
                                node = current;
                                break;
                            }
                            current = child(current);
                        }
                    }
                }
                if (node && !sel.isCollapsed && !dom["a" /* Dom */].isText(node)) {
                    let leftChild = node, rightChild = node;
                    do {
                        leftChild = leftChild.firstChild;
                        rightChild = rightChild.lastChild;
                    } while (leftChild && rightChild && !dom["a" /* Dom */].isText(leftChild));
                    if (leftChild === rightChild &&
                        leftChild &&
                        dom["a" /* Dom */].isText(leftChild)) {
                        node = leftChild;
                    }
                }
            }
            if (node && dom["a" /* Dom */].isOrContains(this.area, node)) {
                return node;
            }
        }
        return null;
    }
    insertNode(node, insertCursorAfter = true, fireChange = true) {
        var _a;
        this.errorNode(node);
        if (!this.isFocused() && this.j.isEditorMode()) {
            this.focus();
        }
        const sel = this.sel;
        if (!this.isCollapsed()) {
            this.j.execCommand('Delete');
        }
        if (sel && sel.rangeCount) {
            const range = sel.getRangeAt(0);
            if (dom["a" /* Dom */].isOrContains(this.area, range.commonAncestorContainer)) {
                if (/^(BR|HR|IMG|VIDEO)$/i.test(range.startContainer.nodeName) &&
                    range.collapsed) {
                    (_a = range.startContainer.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(node, range.startContainer);
                }
                else {
                    range.deleteContents();
                    range.insertNode(node);
                }
            }
            else {
                this.area.appendChild(node);
            }
        }
        else {
            this.area.appendChild(node);
        }
        if (insertCursorAfter) {
            if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                node.lastChild && this.setCursorAfter(node.lastChild);
            }
            else {
                this.setCursorAfter(node);
            }
        }
        if (fireChange && this.j.events) {
            this.j.e.fire('synchro');
        }
        if (this.j.events) {
            this.j.e.fire('afterInsertNode', node);
        }
    }
    insertHTML(html) {
        if (html === '') {
            return;
        }
        const node = this.j.createInside.div(), fragment = this.j.createInside.fragment();
        let lastChild, lastEditorElement;
        if (!this.isFocused() && this.j.isEditorMode()) {
            this.focus();
        }
        if (!dom["a" /* Dom */].isNode(html, this.win)) {
            node.innerHTML = html.toString();
        }
        else {
            node.appendChild(html);
        }
        if (!this.j.isEditorMode() &&
            this.j.e.fire('insertHTML', node.innerHTML) === false) {
            return;
        }
        lastChild = node.lastChild;
        if (!lastChild) {
            return;
        }
        while (node.firstChild) {
            lastChild = node.firstChild;
            fragment.appendChild(node.firstChild);
        }
        this.insertNode(fragment, false);
        if (lastChild) {
            this.setCursorAfter(lastChild);
        }
        else {
            this.setCursorIn(fragment);
        }
        lastEditorElement = this.area.lastChild;
        while (dom["a" /* Dom */].isText(lastEditorElement) &&
            lastEditorElement.previousSibling &&
            lastEditorElement.nodeValue &&
            /^\s*$/.test(lastEditorElement.nodeValue)) {
            lastEditorElement = lastEditorElement.previousSibling;
        }
        if (lastChild) {
            if (lastEditorElement &&
                lastChild === lastEditorElement &&
                dom["a" /* Dom */].isElement(lastChild)) {
                this.area.appendChild(this.j.createInside.element('br'));
            }
            this.setCursorAfter(lastChild);
        }
    }
    insertImage(url, styles, defaultWidth) {
        const image = Object(helpers["isString"])(url) ? this.j.createInside.element('img') : url;
        if (Object(helpers["isString"])(url)) {
            image.setAttribute('src', url);
        }
        if (defaultWidth !== null) {
            let dw = defaultWidth.toString();
            if (dw &&
                'auto' !== dw &&
                String(dw).indexOf('px') < 0 &&
                String(dw).indexOf('%') < 0) {
                dw += 'px';
            }
            Object(helpers["css"])(image, 'width', dw);
        }
        if (styles && typeof styles === 'object') {
            Object(helpers["css"])(image, styles);
        }
        const onload = () => {
            if (image.naturalHeight < image.offsetHeight ||
                image.naturalWidth < image.offsetWidth) {
                image.style.width = '';
                image.style.height = '';
            }
            image.removeEventListener('load', onload);
        };
        this.j.e.on(image, 'load', onload);
        if (image.complete) {
            onload();
        }
        const result = this.insertNode(image);
        this.j.e.fire('afterInsertImage', image);
        return result;
    }
    setCursorAfter(node) {
        this.errorNode(node);
        if (!dom["a" /* Dom */].up(node, elm => elm === this.area || (elm && elm.parentNode === this.area), this.area)) {
            throw Object(helpers["error"])('Node element must be in editor');
        }
        const range = this.createRange();
        let fakeNode = null;
        if (!dom["a" /* Dom */].isText(node)) {
            fakeNode = this.j.createInside.text(constants["INVISIBLE_SPACE"]);
            range.setStartAfter(node);
            range.insertNode(fakeNode);
            range.selectNode(fakeNode);
        }
        else {
            range.setEnd(node, node.nodeValue !== null ? node.nodeValue.length : 0);
        }
        range.collapse(false);
        this.selectRange(range);
        return fakeNode;
    }
    cursorInTheEdge(start, parentBlock) {
        var _a, _b;
        const end = !start, range = (_a = this.sel) === null || _a === void 0 ? void 0 : _a.getRangeAt(0), current = this.current(false);
        if (!range ||
            !current ||
            !dom["a" /* Dom */].isOrContains(parentBlock, current, true)) {
            return null;
        }
        const container = start ? range.startContainer : range.endContainer;
        const offset = start ? range.startOffset : range.endOffset;
        const check = (elm) => elm && !dom["a" /* Dom */].isTag(elm, 'br') && !dom["a" /* Dom */].isEmptyTextNode(elm);
        if (dom["a" /* Dom */].isText(container)) {
            const text = ((_b = container.nodeValue) === null || _b === void 0 ? void 0 : _b.length) ? container.nodeValue : '';
            if (end && text.replace(Object(constants["INVISIBLE_SPACE_REG_EXP_END"])(), '').length > offset) {
                return false;
            }
            const inv = Object(constants["INVISIBLE_SPACE_REG_EXP_START"])().exec(text);
            if (start &&
                ((inv && inv[0].length < offset) || (!inv && offset > 0))) {
                return false;
            }
        }
        else {
            const children = Array.from(container.childNodes);
            if (end) {
                if (children.slice(offset).some(check)) {
                    return false;
                }
            }
            else {
                if (children.slice(0, offset).some(check)) {
                    return false;
                }
            }
        }
        return !Object(helpers["call"])(start ? dom["a" /* Dom */].prev : dom["a" /* Dom */].next, current, check, parentBlock);
    }
    cursorOnTheLeft(parentBlock) {
        return this.cursorInTheEdge(true, parentBlock);
    }
    cursorOnTheRight(parentBlock) {
        return this.cursorInTheEdge(false, parentBlock);
    }
    setCursorBefore(node) {
        this.errorNode(node);
        if (!dom["a" /* Dom */].up(node, (elm) => elm === this.area || (elm && elm.parentNode === this.area), this.area)) {
            throw Object(helpers["error"])('Node element must be in editor');
        }
        const range = this.createRange();
        let fakeNode = null;
        if (!dom["a" /* Dom */].isText(node)) {
            fakeNode = this.j.createInside.text(constants["INVISIBLE_SPACE"]);
            range.setStartBefore(node);
            range.collapse(true);
            range.insertNode(fakeNode);
            range.selectNode(fakeNode);
        }
        else {
            range.setStart(node, node.nodeValue !== null ? node.nodeValue.length : 0);
        }
        range.collapse(true);
        this.selectRange(range);
        return fakeNode;
    }
    setCursorIn(node, inStart = false) {
        this.errorNode(node);
        if (!dom["a" /* Dom */].up(node, (elm) => elm === this.area || (elm && elm.parentNode === this.area), this.area)) {
            throw Object(helpers["error"])('Node element must be in editor');
        }
        const range = this.createRange();
        let start = node, last = node;
        do {
            if (dom["a" /* Dom */].isText(start)) {
                break;
            }
            last = start;
            start = inStart ? start.firstChild : start.lastChild;
        } while (start);
        if (!start) {
            const fakeNode = this.j.createInside.text(constants["INVISIBLE_SPACE"]);
            if (!/^(img|br|input)$/i.test(last.nodeName)) {
                last.appendChild(fakeNode);
                last = fakeNode;
            }
            else {
                start = last;
            }
        }
        range.selectNodeContents(start || last);
        range.collapse(inStart);
        this.selectRange(range);
        return last;
    }
    selectRange(range, focus = true) {
        const sel = this.sel;
        if (focus && !this.isFocused()) {
            this.focus();
        }
        if (sel) {
            sel.removeAllRanges();
            sel.addRange(range);
        }
        this.j.e.fire('changeSelection');
    }
    select(node, inward = false) {
        this.errorNode(node);
        if (!dom["a" /* Dom */].up(node, (elm) => elm === this.area || (elm && elm.parentNode === this.area), this.area)) {
            throw Object(helpers["error"])('Node element must be in editor');
        }
        const range = this.createRange();
        range[inward ? 'selectNodeContents' : 'selectNode'](node);
        this.selectRange(range);
    }
    get html() {
        const sel = this.sel;
        if (sel && sel.rangeCount > 0) {
            const range = sel.getRangeAt(0);
            const clonedSelection = range.cloneContents();
            const div = this.j.createInside.div();
            div.appendChild(clonedSelection);
            return div.innerHTML;
        }
        return '';
    }
    wrapInTag(tagOrCallback) {
        Object(helpers["$$"])('*[style*=font-size]', this.area).forEach((elm) => {
            elm.style &&
                elm.style.fontSize &&
                elm.setAttribute('data-font-size', elm.style.fontSize.toString());
        });
        if (!this.isCollapsed()) {
            this.doc.execCommand('fontsize', false, '7');
        }
        else {
            const font = this.j.createInside.element('font');
            Object(helpers["attr"])(font, 'size', 7);
            this.insertNode(font, false, false);
        }
        Object(helpers["$$"])('*[data-font-size]', this.area).forEach((elm) => {
            const fontSize = Object(helpers["attr"])(elm, 'data-font-size');
            if (elm.style && fontSize) {
                elm.style.fontSize = fontSize;
                elm.removeAttribute('data-font-size');
            }
        });
        const result = [];
        Object(helpers["$$"])('font[size="7"]', this.area).forEach((font) => {
            try {
                if (font.firstChild &&
                    font.firstChild === font.lastChild &&
                    this.isMarker(font.firstChild)) {
                    return;
                }
                if (Object(helpers["isFunction"])(tagOrCallback)) {
                    tagOrCallback(font);
                }
                else {
                    result.push(dom["a" /* Dom */].replace(font, tagOrCallback, this.j.createInside));
                }
            }
            finally {
                if (font.parentNode) {
                    dom["a" /* Dom */].unwrap(font);
                }
            }
        });
        return result;
    }
    applyStyle(style, options = {}) {
        const styleElm = new style_Style({
            style,
            element: options.element,
            defaultTag: options.defaultTag
        });
        styleElm.apply(this.j);
    }
    splitSelection(currentBox) {
        if (!this.isCollapsed()) {
            return null;
        }
        const leftRange = this.createRange();
        const range = this.range;
        leftRange.setStartBefore(currentBox);
        const cursorOnTheRight = this.cursorOnTheRight(currentBox);
        const cursorOnTheLeft = this.cursorOnTheLeft(currentBox);
        let br = null;
        if (cursorOnTheRight || cursorOnTheLeft) {
            br = this.j.createInside.element('br');
            range.insertNode(br);
            const clearBR = (start, getNext) => {
                let next = getNext(start);
                while (next) {
                    const nextSib = getNext(next);
                    if (next &&
                        (dom["a" /* Dom */].isTag(next, 'br') || dom["a" /* Dom */].isEmptyTextNode(next))) {
                        dom["a" /* Dom */].safeRemove(next);
                    }
                    else {
                        break;
                    }
                    next = nextSib;
                }
            };
            clearBR(br, (n) => n.nextSibling);
            clearBR(br, (n) => n.previousSibling);
            if (cursorOnTheRight) {
                leftRange.setEndBefore(br);
                range.setEndBefore(br);
            }
            else {
                leftRange.setEndAfter(br);
                range.setEndAfter(br);
            }
        }
        else {
            leftRange.setEnd(range.startContainer, range.startOffset);
        }
        const fragment = leftRange.extractContents();
        if (currentBox.parentNode) {
            try {
                currentBox.parentNode.insertBefore(fragment, currentBox);
                if (cursorOnTheRight && br && br.parentNode) {
                    const range = this.createRange();
                    range.setStartBefore(br);
                    this.selectRange(range);
                }
            }
            catch (e) {
                if (false) {}
            }
        }
        return currentBox.previousElementSibling;
    }
}
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], select_Select.prototype, "focus", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], select_Select.prototype, "setCursorAfter", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], select_Select.prototype, "setCursorBefore", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], select_Select.prototype, "setCursorIn", null);

// CONCATENATED MODULE: ./src/core/selection/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



// EXTERNAL MODULE: ./src/modules/status-bar/status-bar.less
var status_bar = __webpack_require__(148);

// CONCATENATED MODULE: ./src/modules/status-bar/status-bar.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



class status_bar_StatusBar extends core_component["c" /* ViewComponent */] {
    constructor(jodit, target) {
        super(jodit);
        this.target = target;
        this.container = jodit.c.div('jodit-status-bar');
        target.appendChild(this.container);
        this.hide();
    }
    hide() {
        this.container && this.container.classList.add('jodit_hidden');
    }
    show() {
        this.container && this.container.classList.remove('jodit_hidden');
    }
    getHeight() {
        return this.container.offsetHeight;
    }
    findEmpty(inTheRight = false) {
        const items = this.container.querySelectorAll('.jodit-status-bar__item' +
            (inTheRight ? '.jodit-status-bar__item-right' : ''));
        for (let i = 0; i < items.length; i += 1) {
            if (!items[i].innerHTML.trim().length) {
                return items[i];
            }
        }
    }
    append(child, inTheRight = false) {
        const wrapper = this.findEmpty(inTheRight) ||
            this.j.c.div('jodit-status-bar__item');
        if (inTheRight) {
            wrapper.classList.add('jodit-status-bar__item-right');
        }
        wrapper.appendChild(child);
        this.container.appendChild(wrapper);
        this.show();
        this.j.e.fire('resize');
    }
    destruct() {
        this.setStatus(core_component["b" /* STATUSES */].beforeDestruct);
        dom["a" /* Dom */].safeRemove(this.container);
        delete this.container;
        super.destruct();
    }
}

// EXTERNAL MODULE: ./src/core/component/viewComponent.ts
var viewComponent = __webpack_require__(32);

// CONCATENATED MODULE: ./src/modules/table.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







class table_Table extends viewComponent["a" /* ViewComponent */] {
    constructor() {
        super(...arguments);
        this.selected = new Set();
    }
    recalculateStyles() {
        const style = Object(global["b" /* getContainer */])(this.j, table_Table, 'style', true);
        const selectors = [];
        this.selected.forEach(td => {
            const selector = Object(helpers["cssPath"])(td);
            selector && selectors.push(selector);
        });
        style.innerHTML = selectors.length
            ? selectors.join(',') + `{${this.j.o.table.selectionCellStyle}}`
            : '';
    }
    addSelection(td) {
        this.selected.add(td);
        this.recalculateStyles();
        const table = dom["a" /* Dom */].closest(td, 'table', this.j.editor);
        if (table) {
            const cells = table_Table.selectedByTable.get(table) || new Set();
            cells.add(td);
            table_Table.selectedByTable.set(table, cells);
        }
    }
    removeSelection(td) {
        this.selected.delete(td);
        this.recalculateStyles();
        const table = dom["a" /* Dom */].closest(td, 'table', this.j.editor);
        if (table) {
            const cells = table_Table.selectedByTable.get(table);
            if (cells) {
                cells.delete(td);
                if (!cells.size) {
                    table_Table.selectedByTable.delete(table);
                }
            }
        }
    }
    getAllSelectedCells() {
        return Array.from(this.selected);
    }
    static getSelectedCellsByTable(table) {
        const cells = table_Table.selectedByTable.get(table);
        return cells ? Array.from(cells) : [];
    }
    destruct() {
        this.selected.clear();
        return super.destruct();
    }
    static getRowsCount(table) {
        return table.rows.length;
    }
    static getColumnsCount(table) {
        const matrix = table_Table.formalMatrix(table);
        return matrix.reduce((max_count, cells) => {
            return Math.max(max_count, cells.length);
        }, 0);
    }
    static formalMatrix(table, callback) {
        const matrix = [[]];
        const rows = Array.from(table.rows);
        const setCell = (cell, i) => {
            if (matrix[i] === undefined) {
                matrix[i] = [];
            }
            const colSpan = cell.colSpan, rowSpan = cell.rowSpan;
            let column, row, currentColumn = 0;
            while (matrix[i][currentColumn]) {
                currentColumn += 1;
            }
            for (row = 0; row < rowSpan; row += 1) {
                for (column = 0; column < colSpan; column += 1) {
                    if (matrix[i + row] === undefined) {
                        matrix[i + row] = [];
                    }
                    if (callback &&
                        callback(cell, i + row, currentColumn + column, colSpan, rowSpan) === false) {
                        return false;
                    }
                    matrix[i + row][currentColumn + column] = cell;
                }
            }
        };
        for (let i = 0; i < rows.length; i += 1) {
            const cells = Array.from(rows[i].cells);
            for (let j = 0; j < cells.length; j += 1) {
                if (setCell(cells[j], i) === false) {
                    return matrix;
                }
            }
        }
        return matrix;
    }
    static formalCoordinate(table, cell, max = false) {
        let i = 0, j = 0, width = 1, height = 1;
        table_Table.formalMatrix(table, (td, ii, jj, colSpan, rowSpan) => {
            if (cell === td) {
                i = ii;
                j = jj;
                width = colSpan || 1;
                height = rowSpan || 1;
                if (max) {
                    j += (colSpan || 1) - 1;
                    i += (rowSpan || 1) - 1;
                }
                return false;
            }
        });
        return [i, j, width, height];
    }
    static appendRow(table, line, after, create) {
        let row;
        if (!line) {
            const columnsCount = table_Table.getColumnsCount(table);
            row = create.element('tr');
            for (let j = 0; j < columnsCount; j += 1) {
                row.appendChild(create.element('td'));
            }
        }
        else {
            row = line.cloneNode(true);
            Object(helpers["$$"])('td,th', line).forEach(cell => {
                const rowspan = Object(helpers["attr"])(cell, 'rowspan');
                if (rowspan && parseInt(rowspan, 10) > 1) {
                    const newRowSpan = parseInt(rowspan, 10) - 1;
                    Object(helpers["attr"])(cell, 'rowspan', newRowSpan > 1 ? newRowSpan : null);
                }
            });
            Object(helpers["$$"])('td,th', row).forEach(cell => {
                cell.innerHTML = '';
            });
        }
        if (after && line && line.nextSibling) {
            line.parentNode &&
                line.parentNode.insertBefore(row, line.nextSibling);
        }
        else if (!after && line) {
            line.parentNode && line.parentNode.insertBefore(row, line);
        }
        else {
            (Object(helpers["$$"])(':scope>tbody', table)[0] || table).appendChild(row);
        }
    }
    static removeRow(table, rowIndex) {
        const box = table_Table.formalMatrix(table);
        let dec;
        const row = table.rows[rowIndex];
        Object(helpers["each"])(box[rowIndex], (j, cell) => {
            dec = false;
            if (rowIndex - 1 >= 0 && box[rowIndex - 1][j] === cell) {
                dec = true;
            }
            else if (box[rowIndex + 1] && box[rowIndex + 1][j] === cell) {
                if (cell.parentNode === row &&
                    cell.parentNode.nextSibling) {
                    dec = true;
                    let nextCell = j + 1;
                    while (box[rowIndex + 1][nextCell] === cell) {
                        nextCell += 1;
                    }
                    const nextRow = dom["a" /* Dom */].next(cell.parentNode, (elm) => dom["a" /* Dom */].isTag(elm, 'tr'), table);
                    if (box[rowIndex + 1][nextCell]) {
                        nextRow.insertBefore(cell, box[rowIndex + 1][nextCell]);
                    }
                    else {
                        nextRow.appendChild(cell);
                    }
                }
            }
            else {
                dom["a" /* Dom */].safeRemove(cell);
            }
            if (dec &&
                (cell.parentNode === row || cell !== box[rowIndex][j - 1])) {
                const rowSpan = cell.rowSpan;
                Object(helpers["attr"])(cell, 'rowspan', rowSpan - 1 > 1 ? (rowSpan - 1).toString() : null);
            }
        });
        dom["a" /* Dom */].safeRemove(row);
    }
    static appendColumn(table, j, after, create) {
        const box = table_Table.formalMatrix(table);
        let i;
        if (j === undefined || j < 0) {
            j = table_Table.getColumnsCount(table) - 1;
        }
        for (i = 0; i < box.length; i += 1) {
            const cell = create.element('td');
            const td = box[i][j];
            let added = false;
            if (after) {
                if ((box[i] && td && j + 1 >= box[i].length) ||
                    td !== box[i][j + 1]) {
                    if (td.nextSibling) {
                        td.parentNode &&
                            td.parentNode.insertBefore(cell, td.nextSibling);
                    }
                    else {
                        td.parentNode && td.parentNode.appendChild(cell);
                    }
                    added = true;
                }
            }
            else {
                if (j - 1 < 0 ||
                    (box[i][j] !== box[i][j - 1] && box[i][j].parentNode)) {
                    td.parentNode &&
                        td.parentNode.insertBefore(cell, box[i][j]);
                    added = true;
                }
            }
            if (!added) {
                box[i][j].setAttribute('colspan', (parseInt(Object(helpers["attr"])(box[i][j], 'colspan') || '1', 10) + 1).toString());
            }
        }
    }
    static removeColumn(table, j) {
        const box = table_Table.formalMatrix(table);
        let dec;
        Object(helpers["each"])(box, (i, cells) => {
            const td = cells[j];
            dec = false;
            if (j - 1 >= 0 && box[i][j - 1] === td) {
                dec = true;
            }
            else if (j + 1 < cells.length && box[i][j + 1] === td) {
                dec = true;
            }
            else {
                dom["a" /* Dom */].safeRemove(td);
            }
            if (dec && (i - 1 < 0 || td !== box[i - 1][j])) {
                const colSpan = td.colSpan;
                Object(helpers["attr"])(td, 'colspan', colSpan - 1 > 1 ? (colSpan - 1).toString() : null);
            }
        });
    }
    static getSelectedBound(table, selectedCells) {
        const bound = [
            [Infinity, Infinity],
            [0, 0]
        ];
        const box = table_Table.formalMatrix(table);
        let i, j, k;
        for (i = 0; i < box.length; i += 1) {
            for (j = 0; box[i] && j < box[i].length; j += 1) {
                if (selectedCells.includes(box[i][j])) {
                    bound[0][0] = Math.min(i, bound[0][0]);
                    bound[0][1] = Math.min(j, bound[0][1]);
                    bound[1][0] = Math.max(i, bound[1][0]);
                    bound[1][1] = Math.max(j, bound[1][1]);
                }
            }
        }
        for (i = bound[0][0]; i <= bound[1][0]; i += 1) {
            for (k = 1, j = bound[0][1]; j <= bound[1][1]; j += 1) {
                while (box[i] && box[i][j - k] && box[i][j] === box[i][j - k]) {
                    bound[0][1] = Math.min(j - k, bound[0][1]);
                    bound[1][1] = Math.max(j - k, bound[1][1]);
                    k += 1;
                }
                k = 1;
                while (box[i] && box[i][j + k] && box[i][j] === box[i][j + k]) {
                    bound[0][1] = Math.min(j + k, bound[0][1]);
                    bound[1][1] = Math.max(j + k, bound[1][1]);
                    k += 1;
                }
                k = 1;
                while (box[i - k] && box[i][j] === box[i - k][j]) {
                    bound[0][0] = Math.min(i - k, bound[0][0]);
                    bound[1][0] = Math.max(i - k, bound[1][0]);
                    k += 1;
                }
                k = 1;
                while (box[i + k] && box[i][j] === box[i + k][j]) {
                    bound[0][0] = Math.min(i + k, bound[0][0]);
                    bound[1][0] = Math.max(i + k, bound[1][0]);
                    k += 1;
                }
            }
        }
        return bound;
    }
    static normalizeTable(table) {
        let i, j, min, not;
        const __marked = [], box = table_Table.formalMatrix(table);
        for (j = 0; j < box[0].length; j += 1) {
            min = 1000000;
            not = false;
            for (i = 0; i < box.length; i += 1) {
                if (box[i][j] === undefined) {
                    continue;
                }
                if (box[i][j].colSpan < 2) {
                    not = true;
                    break;
                }
                min = Math.min(min, box[i][j].colSpan);
            }
            if (!not) {
                for (i = 0; i < box.length; i += 1) {
                    if (box[i][j] === undefined) {
                        continue;
                    }
                    table_Table.__mark(box[i][j], 'colspan', box[i][j].colSpan - min + 1, __marked);
                }
            }
        }
        for (i = 0; i < box.length; i += 1) {
            min = 1000000;
            not = false;
            for (j = 0; j < box[i].length; j += 1) {
                if (box[i][j] === undefined) {
                    continue;
                }
                if (box[i][j].rowSpan < 2) {
                    not = true;
                    break;
                }
                min = Math.min(min, box[i][j].rowSpan);
            }
            if (!not) {
                for (j = 0; j < box[i].length; j += 1) {
                    if (box[i][j] === undefined) {
                        continue;
                    }
                    table_Table.__mark(box[i][j], 'rowspan', box[i][j].rowSpan - min + 1, __marked);
                }
            }
        }
        for (i = 0; i < box.length; i += 1) {
            for (j = 0; j < box[i].length; j += 1) {
                if (box[i][j] === undefined) {
                    continue;
                }
                if (box[i][j].hasAttribute('rowspan') &&
                    box[i][j].rowSpan === 1) {
                    box[i][j].removeAttribute('rowspan');
                }
                if (box[i][j].hasAttribute('colspan') &&
                    box[i][j].colSpan === 1) {
                    box[i][j].removeAttribute('colspan');
                }
                if (box[i][j].hasAttribute('class') &&
                    !Object(helpers["attr"])(box[i][j], 'class')) {
                    box[i][j].removeAttribute('class');
                }
            }
        }
        table_Table.__unmark(__marked);
    }
    static mergeSelected(table, jodit) {
        const html = [], bound = table_Table.getSelectedBound(table, table_Table.getSelectedCellsByTable(table));
        let w = 0, first = null, first_j = 0, td, cols = 0, rows = 0;
        const __marked = [];
        if (bound && (bound[0][0] - bound[1][0] || bound[0][1] - bound[1][1])) {
            table_Table.formalMatrix(table, (cell, i, j, cs, rs) => {
                if (i >= bound[0][0] && i <= bound[1][0]) {
                    if (j >= bound[0][1] && j <= bound[1][1]) {
                        td = cell;
                        if (td.__i_am_already_was) {
                            return;
                        }
                        td.__i_am_already_was = true;
                        if (i === bound[0][0] && td.style.width) {
                            w += td.offsetWidth;
                        }
                        if (Object(helpers["trim"])(cell.innerHTML.replace(/<br(\/)?>/g, '')) !== '') {
                            html.push(cell.innerHTML);
                        }
                        if (cs > 1) {
                            cols += cs - 1;
                        }
                        if (rs > 1) {
                            rows += rs - 1;
                        }
                        if (!first) {
                            first = cell;
                            first_j = j;
                        }
                        else {
                            table_Table.__mark(td, 'remove', 1, __marked);
                            table_instance(jodit).removeSelection(td);
                        }
                    }
                }
            });
            cols = bound[1][1] - bound[0][1] + 1;
            rows = bound[1][0] - bound[0][0] + 1;
            if (first) {
                if (cols > 1) {
                    table_Table.__mark(first, 'colspan', cols, __marked);
                }
                if (rows > 1) {
                    table_Table.__mark(first, 'rowspan', rows, __marked);
                }
                if (w) {
                    table_Table.__mark(first, 'width', ((w / table.offsetWidth) * 100).toFixed(constants["ACCURACY"]) + '%', __marked);
                    if (first_j) {
                        table_Table.setColumnWidthByDelta(table, first_j, 0, true, __marked);
                    }
                }
                first.innerHTML = html.join('<br/>');
                table_instance(jodit).addSelection(first);
                delete first.__i_am_already_was;
                table_Table.__unmark(__marked);
                table_Table.normalizeTable(table);
                Object(helpers["each"])(Array.from(table.rows), (index, tr) => {
                    if (!tr.cells.length) {
                        dom["a" /* Dom */].safeRemove(tr);
                    }
                });
            }
        }
    }
    static splitHorizontal(table, jodit) {
        let coord, td, tr, parent, after;
        const __marked = [];
        table_Table.getSelectedCellsByTable(table).forEach((cell) => {
            td = jodit.createInside.element('td');
            td.appendChild(jodit.createInside.element('br'));
            tr = jodit.createInside.element('tr');
            coord = table_Table.formalCoordinate(table, cell);
            if (cell.rowSpan < 2) {
                table_Table.formalMatrix(table, (tdElm, i, j) => {
                    if (coord[0] === i &&
                        coord[1] !== j &&
                        tdElm !== cell) {
                        table_Table.__mark(tdElm, 'rowspan', tdElm.rowSpan + 1, __marked);
                    }
                });
                dom["a" /* Dom */].after(dom["a" /* Dom */].closest(cell, 'tr', table), tr);
                tr.appendChild(td);
            }
            else {
                table_Table.__mark(cell, 'rowspan', cell.rowSpan - 1, __marked);
                table_Table.formalMatrix(table, (tdElm, i, j) => {
                    if (i > coord[0] &&
                        i < coord[0] + cell.rowSpan &&
                        coord[1] > j &&
                        tdElm.parentNode
                            .rowIndex === i) {
                        after = tdElm;
                    }
                    if (coord[0] < i && tdElm === cell) {
                        parent = table.rows[i];
                    }
                });
                if (after) {
                    dom["a" /* Dom */].after(after, td);
                }
                else {
                    parent.insertBefore(td, parent.firstChild);
                }
            }
            if (cell.colSpan > 1) {
                table_Table.__mark(td, 'colspan', cell.colSpan, __marked);
            }
            table_Table.__unmark(__marked);
            table_instance(jodit).removeSelection(cell);
        });
        this.normalizeTable(table);
    }
    static splitVertical(table, jodit) {
        let coord, td, percentage;
        const __marked = [];
        table_Table.getSelectedCellsByTable(table).forEach((cell) => {
            coord = table_Table.formalCoordinate(table, cell);
            if (cell.colSpan < 2) {
                table_Table.formalMatrix(table, (tdElm, i, j) => {
                    if (coord[1] === j &&
                        coord[0] !== i &&
                        tdElm !== cell) {
                        table_Table.__mark(tdElm, 'colspan', tdElm.colSpan + 1, __marked);
                    }
                });
            }
            else {
                table_Table.__mark(cell, 'colspan', cell.colSpan - 1, __marked);
            }
            td = jodit.createInside.element('td');
            td.appendChild(jodit.createInside.element('br'));
            if (cell.rowSpan > 1) {
                table_Table.__mark(td, 'rowspan', cell.rowSpan, __marked);
            }
            const oldWidth = cell.offsetWidth;
            dom["a" /* Dom */].after(cell, td);
            percentage = oldWidth / table.offsetWidth / 2;
            table_Table.__mark(cell, 'width', (percentage * 100).toFixed(constants["ACCURACY"]) + '%', __marked);
            table_Table.__mark(td, 'width', (percentage * 100).toFixed(constants["ACCURACY"]) + '%', __marked);
            table_Table.__unmark(__marked);
            table_instance(jodit).removeSelection(cell);
        });
        table_Table.normalizeTable(table);
    }
    static setColumnWidthByDelta(table, j, delta, noUnmark, marked) {
        const box = table_Table.formalMatrix(table);
        let i, w, percent;
        for (i = 0; i < box.length; i += 1) {
            w = box[i][j].offsetWidth;
            percent = ((w + delta) / table.offsetWidth) * 100;
            table_Table.__mark(box[i][j], 'width', percent.toFixed(constants["ACCURACY"]) + '%', marked);
        }
        if (!noUnmark) {
            table_Table.__unmark(marked);
        }
    }
    static __mark(cell, key, value, marked) {
        marked.push(cell);
        if (!cell.__marked_value) {
            cell.__marked_value = {};
        }
        cell.__marked_value[key] = value === undefined ? 1 : value;
    }
    static __unmark(marked) {
        marked.forEach(cell => {
            if (cell.__marked_value) {
                Object(helpers["each"])(cell.__marked_value, (key, value) => {
                    switch (key) {
                        case 'remove':
                            dom["a" /* Dom */].safeRemove(cell);
                            break;
                        case 'rowspan':
                            if (value > 1) {
                                cell.setAttribute('rowspan', value.toString());
                            }
                            else {
                                cell.removeAttribute('rowspan');
                            }
                            break;
                        case 'colspan':
                            if (value > 1) {
                                cell.setAttribute('colspan', value.toString());
                            }
                            else {
                                cell.removeAttribute('colspan');
                            }
                            break;
                        case 'width':
                            cell.style.width = value.toString();
                            break;
                    }
                    delete cell.__marked_value[key];
                });
                delete cell.__marked_value;
            }
        });
    }
}
table_Table.selectedByTable = new WeakMap();
Object(tslib_es6["a" /* __decorate */])([
    Object(decorators["debounce"])()
], table_Table.prototype, "recalculateStyles", null);
const table_instance = (j) => j.getInstance('Table', j.o);

// EXTERNAL MODULE: ./src/core/ui/icon.ts
var icon = __webpack_require__(24);

// CONCATENATED MODULE: ./src/modules/toolbar/button/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



// EXTERNAL MODULE: ./src/modules/uploader/uploader.less
var uploader_uploader = __webpack_require__(149);

// CONCATENATED MODULE: ./src/modules/uploader/uploader.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */








config["a" /* Config */].prototype.enableDragAndDropFileToEditor = true;
config["a" /* Config */].prototype.uploader = {
    url: '',
    insertImageAsBase64URI: false,
    imagesExtensions: ['jpg', 'png', 'jpeg', 'gif'],
    headers: null,
    data: null,
    filesVariableName(i) {
        return `files[${i}]`;
    },
    withCredentials: false,
    pathVariableName: 'path',
    format: 'json',
    method: 'POST',
    prepareData(formData) {
        return formData;
    },
    isSuccess(resp) {
        return resp.success;
    },
    getMessage(resp) {
        return resp.data.messages !== undefined && Object(helpers["isArray"])(resp.data.messages)
            ? resp.data.messages.join(' ')
            : '';
    },
    process(resp) {
        return resp.data;
    },
    error(e) {
        this.j.e.fire('errorMessage', e.message, 'error', 4000);
    },
    defaultHandlerSuccess(resp) {
        const j = this.j;
        if (!Object(helpers["isJoditObject"])(j)) {
            return;
        }
        if (resp.files && resp.files.length) {
            resp.files.forEach((filename, index) => {
                const [tagName, attr] = resp.isImages && resp.isImages[index]
                    ? ['img', 'src']
                    : ['a', 'href'];
                const elm = j.createInside.element(tagName);
                elm.setAttribute(attr, resp.baseurl + filename);
                if (tagName === 'a') {
                    elm.textContent = resp.baseurl + filename;
                }
                if (Object(helpers["isJoditObject"])(this.j)) {
                    if (tagName === 'img') {
                        this.j.s.insertImage(elm, null, this.j.o.imageDefaultWidth);
                    }
                    else {
                        this.j.s.insertNode(elm);
                    }
                }
            });
        }
    },
    defaultHandlerError(e) {
        this.j.e.fire('errorMessage', e.message);
    },
    contentType(requestData) {
        return this.j.ow.FormData !== undefined &&
            typeof requestData !== 'string'
            ? false
            : 'application/x-www-form-urlencoded; charset=UTF-8';
    }
};
class uploader_Uploader extends core_component["c" /* ViewComponent */] {
    constructor(editor, options) {
        super(editor);
        this.path = '';
        this.source = 'default';
        this.ajaxInstances = [];
        this.options = Object(helpers["extend"])(true, {}, config["a" /* Config */].defaultOptions.uploader, Object(helpers["isJoditObject"])(editor) ? editor.o.uploader : null, options);
    }
    static dataURItoBlob(dataURI) {
        const byteString = atob(dataURI.split(',')[1]), mimeString = dataURI
            .split(',')[0]
            .split(':')[1]
            .split(';')[0], ab = new ArrayBuffer(byteString.length), ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i += 1) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: mimeString });
    }
    get o() {
        return this.options;
    }
    buildData(data) {
        if (this.o.buildData && typeof this.o.buildData === 'function') {
            return this.o.buildData.call(this, data);
        }
        const FD = this.j.ow.FormData;
        if (FD !== undefined) {
            if (data instanceof FD) {
                return data;
            }
            if (typeof data === 'string') {
                return data;
            }
            const newdata = new FD();
            Object.keys(data).forEach(key => {
                newdata.append(key, data[key]);
            });
            return newdata;
        }
        return data;
    }
    send(data, success) {
        const requestData = this.buildData(data), sendData = (request) => {
            const ajax = new ajax_Ajax(this.j || this, {
                xhr: () => {
                    const xhr = new XMLHttpRequest();
                    if (this.j.ow.FormData !== undefined &&
                        xhr.upload) {
                        xhr.upload.addEventListener('progress', evt => {
                            if (evt.lengthComputable) {
                                let percentComplete = evt.loaded / evt.total;
                                percentComplete *= 100;
                                this.j.progressbar
                                    .show()
                                    .progress(percentComplete);
                                if (percentComplete >= 100) {
                                    this.j.progressbar.hide();
                                }
                            }
                        }, false);
                    }
                    else {
                        this.j.progressbar.hide();
                    }
                    return xhr;
                },
                method: this.o.method || 'POST',
                data: request,
                url: this.o.url,
                headers: this.o.headers,
                queryBuild: this.o.queryBuild,
                contentType: this.o.contentType.call(this, request),
                dataType: this.o.format || 'json',
                withCredentials: this.o.withCredentials || false
            });
            this.ajaxInstances.push(ajax);
            const removeAjaxInstanceFromList = () => {
                const index = this.ajaxInstances.indexOf(ajax);
                if (index !== -1) {
                    this.ajaxInstances.splice(index, 1);
                }
            };
            return ajax
                .send()
                .then(resp => {
                removeAjaxInstanceFromList();
                success.call(this, resp);
            })
                .catch(error => {
                removeAjaxInstanceFromList();
                this.o.error.call(this, error);
            });
        };
        if (requestData instanceof Promise) {
            return requestData.then(sendData).catch(error => {
                this.o.error.call(this, error);
            });
        }
        else {
            return sendData(requestData);
        }
    }
    sendFiles(files, handlerSuccess, handlerError, process) {
        if (!files) {
            return Promise.reject(Object(helpers["error"])('Need files'));
        }
        const uploader = this;
        let fileList = Array.from(files);
        if (!fileList.length) {
            return Promise.reject(Object(helpers["error"])('Need files'));
        }
        const promises = [];
        if (this.o.insertImageAsBase64URI) {
            let file, i;
            for (i = 0; i < fileList.length; i += 1) {
                file = fileList[i];
                if (file && file.type) {
                    const mime = file.type.match(/\/([a-z0-9]+)/i);
                    const extension = mime[1]
                        ? mime[1].toLowerCase()
                        : '';
                    if (this.o.imagesExtensions.includes(extension)) {
                        const reader = new FileReader();
                        promises.push(new Promise((resolve, reject) => {
                            reader.onerror = reject;
                            reader.onloadend = () => {
                                const resp = {
                                    baseurl: '',
                                    files: [reader.result],
                                    isImages: [true]
                                };
                                if (typeof (handlerSuccess ||
                                    uploader.options
                                        .defaultHandlerSuccess) === 'function') {
                                    (handlerSuccess ||
                                        uploader.options
                                            .defaultHandlerSuccess).call(uploader, resp);
                                }
                                resolve(resp);
                            };
                            reader.readAsDataURL(file);
                        }));
                        fileList[i] = null;
                    }
                }
            }
        }
        fileList = fileList.filter(a => a);
        if (fileList.length) {
            const form = new FormData();
            form.append(this.o.pathVariableName, uploader.path);
            form.append('source', uploader.source);
            let file;
            for (let i = 0; i < fileList.length; i += 1) {
                file = fileList[i];
                if (file) {
                    const mime = file.type.match(/\/([a-z0-9]+)/i);
                    const extension = mime && mime[1] ? mime[1].toLowerCase() : '';
                    let newName = fileList[i].name ||
                        Math.random()
                            .toString()
                            .replace('.', '');
                    if (extension) {
                        let extForReg = extension;
                        if (['jpeg', 'jpg'].includes(extForReg)) {
                            extForReg = 'jpeg|jpg';
                        }
                        const reEnd = new RegExp('.(' + extForReg + ')$', 'i');
                        if (!reEnd.test(newName)) {
                            newName += '.' + extension;
                        }
                    }
                    form.append(this.o.filesVariableName(i), fileList[i], newName);
                }
            }
            if (process) {
                process(form);
            }
            if (uploader.o.data && Object(helpers["isPlainObject"])(uploader.o.data)) {
                Object.keys(uploader.o.data).forEach((key) => {
                    form.append(key, uploader.o.data[key]);
                });
            }
            uploader.o.prepareData.call(this, form);
            promises.push(uploader
                .send(form, (resp) => {
                if (this.o.isSuccess.call(uploader, resp)) {
                    if (typeof (handlerSuccess ||
                        uploader.o.defaultHandlerSuccess) === 'function') {
                        (handlerSuccess ||
                            uploader.options
                                .defaultHandlerSuccess).call(uploader, uploader.o.process.call(uploader, resp));
                    }
                }
                else {
                    if (typeof (handlerError ||
                        uploader.o.defaultHandlerError)) {
                        (handlerError ||
                            uploader.options
                                .defaultHandlerError).call(uploader, Object(helpers["error"])(uploader.o.getMessage.call(uploader, resp)));
                        return;
                    }
                }
            })
                .then(() => {
                this.j.events && this.j.e.fire('filesWereUploaded');
            }));
        }
        return Promise.all(promises);
    }
    setPath(path) {
        this.path = path;
    }
    setSource(source) {
        this.source = source;
    }
    bind(form, handlerSuccess, handlerError) {
        const self = this, onPaste = (e) => {
            let i, file, extension;
            const cData = e.clipboardData;
            const process = (formdata) => {
                if (file) {
                    formdata.append('extension', extension);
                    formdata.append('mimetype', file.type);
                }
            };
            if (cData && cData.files && cData.files.length) {
                this.sendFiles(cData.files, handlerSuccess, handlerError);
                return false;
            }
            if (constants["IS_IE"]) {
                if (cData &&
                    (!cData.types.length || cData.types[0] !== constants["TEXT_PLAIN"])) {
                    const div = this.j.c.div('', {
                        tabindex: -1,
                        style: 'left: -9999px; top: 0; width: 0; height: 100%;line-height: 140%; ' +
                            'overflow: hidden; position: fixed; z-index: 2147483647; word-break: break-all;',
                        contenteditable: true
                    });
                    Object(global["b" /* getContainer */])(this.j, uploader_Uploader).appendChild(div);
                    const selection = Object(helpers["isJoditObject"])(this.j)
                        ? this.j.s.save()
                        : null, restore = () => selection &&
                        Object(helpers["isJoditObject"])(this.j) &&
                        this.j.s.restore(selection);
                    div.focus();
                    this.j.async.setTimeout(() => {
                        const child = div.firstChild;
                        dom["a" /* Dom */].safeRemove(div);
                        if (child && child.hasAttribute('src')) {
                            const src = Object(helpers["attr"])(child, 'src') || '';
                            restore();
                            self.sendFiles([uploader_Uploader.dataURItoBlob(src)], handlerSuccess, handlerError);
                        }
                    }, this.j.defaultTimeout);
                }
                return;
            }
            if (cData && cData.items && cData.items.length) {
                const items = cData.items;
                for (i = 0; i < items.length; i += 1) {
                    if (items[i].kind === 'file' &&
                        items[i].type === 'image/png') {
                        file = items[i].getAsFile();
                        if (file) {
                            const mime = file.type.match(/\/([a-z0-9]+)/i);
                            extension = mime[1]
                                ? mime[1].toLowerCase()
                                : '';
                            this.sendFiles([file], handlerSuccess, handlerError, process);
                        }
                        e.preventDefault();
                        break;
                    }
                }
            }
        };
        if (this.j && this.j.editor !== form) {
            self.j.e.on(form, 'paste', onPaste);
        }
        else {
            self.j.e.on('beforePaste', onPaste);
        }
        const hasFiles = (event) => Boolean(event.dataTransfer &&
            event.dataTransfer.files &&
            event.dataTransfer.files.length !== 0);
        self.j.e
            .on(form, 'dragend dragover dragenter dragleave drop', (e) => {
            e.preventDefault();
        })
            .on(form, 'dragover', (event) => {
            if (hasFiles(event)) {
                form.classList.contains('jodit_draghover') ||
                    form.classList.add('jodit_draghover');
                event.preventDefault();
            }
        })
            .on(form, 'dragend', (event) => {
            if (hasFiles(event)) {
                form.classList.contains('jodit_draghover') &&
                    form.classList.remove('jodit_draghover');
                event.preventDefault();
            }
        })
            .on(form, 'drop', (event) => {
            form.classList.remove('jodit_draghover');
            if (hasFiles(event) &&
                event.dataTransfer &&
                event.dataTransfer.files) {
                event.preventDefault();
                event.stopImmediatePropagation();
                this.sendFiles(event.dataTransfer.files, handlerSuccess, handlerError);
            }
        });
        const inputFile = form.querySelector('input[type=file]');
        if (inputFile) {
            self.j.e.on(inputFile, 'change', function () {
                self.sendFiles(this.files, handlerSuccess, handlerError).then(() => {
                    inputFile.value = '';
                    if (!/safari/i.test(navigator.userAgent)) {
                        inputFile.type = '';
                        inputFile.type = 'file';
                    }
                });
            });
        }
    }
    uploadRemoteImage(url, handlerSuccess, handlerError) {
        const uploader = this;
        uploader.send({
            action: 'fileUploadRemote',
            url
        }, (resp) => {
            if (uploader.o.isSuccess.call(uploader, resp)) {
                if (typeof handlerSuccess === 'function') {
                    handlerSuccess.call(uploader, this.o.process.call(this, resp));
                }
                else {
                    this.o.defaultHandlerSuccess.call(uploader, this.o.process.call(this, resp));
                }
            }
            else {
                if (typeof (handlerError || uploader.o.defaultHandlerError) === 'function') {
                    (handlerError || this.o.defaultHandlerError).call(uploader, Object(helpers["error"])(uploader.o.getMessage.call(this, resp)));
                    return;
                }
            }
        });
    }
    destruct() {
        this.setStatus(core_component["b" /* STATUSES */].beforeDestruct);
        this.ajaxInstances.forEach(ajax => {
            try {
                ajax.destruct();
            }
            catch (_a) { }
        });
        delete this.options;
        super.destruct();
    }
}

// EXTERNAL MODULE: ./src/core/plugin-system.ts
var plugin_system = __webpack_require__(30);

// CONCATENATED MODULE: ./src/modules/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




























// CONCATENATED MODULE: ./src/jodit.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */









class jodit_Jodit extends view_with_toolbar_ViewWithToolbar {
    constructor(element, options) {
        var _a;
        super(options);
        this.isJodit = true;
        this.__defaultStyleDisplayKey = 'data-jodit-default-style-display';
        this.__defaultClassesKey = 'data-jodit-default-classes';
        this.commands = {};
        this.__selectionLocked = null;
        this.__wasReadOnly = false;
        this.storage = storage_Storage.makeStorage(true, this.id);
        this.createInside = new create_Create(() => this.ed, this.o.createAttributes);
        this.editorIsActive = false;
        this.__mode = constants["MODE_WYSIWYG"];
        this.__callChangeCount = 0;
        this.elementToPlace = new Map();
        try {
            Object(helpers["resolveElement"])(element, this.o.shadowRoot || this.od);
        }
        catch (e) {
            this.destruct();
            throw e;
        }
        this.setStatus(core_component["b" /* STATUSES */].beforeInit);
        if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.events) {
            Object.keys(this.o.events).forEach((key) => this.e.on(key, this.o.events[key]));
        }
        this.e.on(this.ow, 'resize', () => {
            if (this.e) {
                this.e.fire('resize');
            }
        });
        this.selection = new select_Select(this);
        this.initPlugins();
        this.e.on('changePlace', () => {
            this.setReadOnly(this.o.readonly);
            this.setDisabled(this.o.disabled);
        });
        this.places.length = 0;
        const addPlaceResult = this.addPlace(element, options);
        jodit_Jodit.instances[this.id] = this;
        const init = () => {
            if (this.e) {
                this.e.fire('afterInit', this);
            }
            this.afterInitHook();
            this.setStatus(core_component["b" /* STATUSES */].ready);
            this.e.fire('afterConstructor', this);
        };
        if (Object(helpers["isPromise"])(addPlaceResult)) {
            addPlaceResult.finally(init);
        }
        else {
            init();
        }
    }
    get text() {
        if (this.editor) {
            return this.editor.innerText || '';
        }
        const div = this.createInside.div();
        div.innerHTML = this.getElementValue();
        return div.innerText || '';
    }
    get value() {
        return this.getEditorValue();
    }
    set value(html) {
        this.setEditorValue(html);
    }
    get defaultTimeout() {
        return this.options && this.o.observer
            ? this.o.observer.timeout
            : jodit_Jodit.defaultOptions.observer.timeout;
    }
    static Array(array) {
        return new helpers["JoditArray"](array);
    }
    static Object(object) {
        return new helpers["JoditObject"](object);
    }
    static make(element, options) {
        return new jodit_Jodit(element, options);
    }
    setPlaceField(field, value) {
        if (!this.currentPlace) {
            this.currentPlace = {};
            this.places = [this.currentPlace];
        }
        this.currentPlace[field] = value;
    }
    get element() {
        return this.currentPlace.element;
    }
    get editor() {
        return this.currentPlace.editor;
    }
    set editor(editor) {
        this.setPlaceField('editor', editor);
    }
    get container() {
        return this.currentPlace.container;
    }
    set container(container) {
        this.setPlaceField('container', container);
    }
    get workplace() {
        return this.currentPlace.workplace;
    }
    get statusbar() {
        return this.currentPlace.statusbar;
    }
    get iframe() {
        return this.currentPlace.iframe;
    }
    set iframe(iframe) {
        this.setPlaceField('iframe', iframe);
    }
    get observer() {
        return this.currentPlace.observer;
    }
    get editorWindow() {
        return this.currentPlace.editorWindow;
    }
    set editorWindow(win) {
        this.setPlaceField('editorWindow', win);
    }
    get ew() {
        return this.editorWindow;
    }
    get editorDocument() {
        return this.currentPlace.editorWindow.document;
    }
    get ed() {
        return this.editorDocument;
    }
    get options() {
        return this.currentPlace.options;
    }
    set options(opt) {
        this.setPlaceField('options', opt);
    }
    get s() {
        return this.selection;
    }
    get uploader() {
        return this.getInstance('Uploader', this.o.uploader);
    }
    get filebrowser() {
        const jodit = this;
        const options = {
            defaultTimeout: jodit.defaultTimeout,
            uploader: jodit.o.uploader,
            language: jodit.o.language,
            theme: jodit.o.theme,
            defaultCallback(data) {
                if (data.files && data.files.length) {
                    data.files.forEach((file, i) => {
                        const url = data.baseurl + file;
                        const isImage = data.isImages
                            ? data.isImages[i]
                            : false;
                        if (isImage) {
                            jodit.s.insertImage(url, null, jodit.o.imageDefaultWidth);
                        }
                        else {
                            jodit.s.insertNode(jodit.createInside.fromHTML(`<a href="${url}" title="${url}">${url}</a>`));
                        }
                    });
                }
            },
            ...this.o.filebrowser
        };
        return jodit.getInstance('FileBrowser', options);
    }
    get mode() {
        return this.__mode;
    }
    set mode(mode) {
        this.setMode(mode);
    }
    getNativeEditorValue() {
        let value;
        value = this.e.fire('beforeGetNativeEditorValue');
        if (Object(helpers["isString"])(value)) {
            return value;
        }
        if (this.editor) {
            return this.editor.innerHTML;
        }
        return this.getElementValue();
    }
    setNativeEditorValue(value) {
        if (this.e.fire('beforeSetNativeEditorValue', value)) {
            return;
        }
        if (this.editor) {
            this.editor.innerHTML = value;
        }
    }
    getEditorValue(removeSelectionMarkers = true) {
        let value;
        value = this.e.fire('beforeGetValueFromEditor');
        if (value !== undefined) {
            return value;
        }
        value = this.getNativeEditorValue().replace(constants["INVISIBLE_SPACE_REG_EXP"](), '');
        if (removeSelectionMarkers) {
            value = value.replace(/<span[^>]+id="jodit-selection_marker_[^>]+><\/span>/g, '');
        }
        if (value === '<br>') {
            value = '';
        }
        const new_value = { value };
        this.e.fire('afterGetValueFromEditor', new_value);
        return new_value.value;
    }
    setEditorValue(value) {
        const newValue = this.e.fire('beforeSetValueToEditor', value);
        if (newValue === false) {
            return;
        }
        if (Object(helpers["isString"])(newValue)) {
            value = newValue;
        }
        if (!this.editor) {
            if (value !== undefined) {
                this.setElementValue(value);
            }
            return;
        }
        if (!Object(helpers["isString"])(value) && !Object(helpers["isVoid"])(value)) {
            throw Object(helpers["error"])('value must be string');
        }
        if (value !== undefined && this.getNativeEditorValue() !== value) {
            this.setNativeEditorValue(value);
        }
        this.e.fire('postProcessSetEditorValue');
        const old_value = this.getElementValue(), new_value = this.getEditorValue();
        if (old_value !== new_value &&
            this.__callChangeCount < constants["SAFE_COUNT_CHANGE_CALL"]) {
            this.setElementValue(new_value);
            this.__callChangeCount += 1;
            try {
                this.observer.upTick();
                this.e.fire('change', new_value, old_value);
                this.e.fire(this.observer, 'change', new_value, old_value);
            }
            finally {
                this.__callChangeCount = 0;
            }
        }
    }
    getElementValue() {
        return this.element.value !== undefined
            ? this.element.value
            : this.element.innerHTML;
    }
    setElementValue(value) {
        if (!Object(helpers["isString"])(value) && value !== undefined) {
            throw Object(helpers["error"])('value must be string');
        }
        if (value !== undefined) {
            if (this.element !== this.container) {
                if (this.element.value !== undefined) {
                    this.element.value = value;
                }
                else {
                    this.element.innerHTML = value;
                }
            }
        }
        else {
            value = this.getElementValue();
        }
        if (value !== this.getEditorValue()) {
            this.setEditorValue(value);
        }
    }
    registerCommand(commandNameOriginal, command) {
        const commandName = commandNameOriginal.toLowerCase();
        if (this.commands[commandName] === undefined) {
            this.commands[commandName] = [];
        }
        this.commands[commandName].push(command);
        if (typeof command !== 'function') {
            const hotkeys = this.o.commandToHotkeys[commandName] ||
                this.o.commandToHotkeys[commandNameOriginal] ||
                command.hotkeys;
            if (hotkeys) {
                this.registerHotkeyToCommand(hotkeys, commandName);
            }
        }
        return this;
    }
    registerHotkeyToCommand(hotkeys, commandName) {
        const shortcuts = Object(helpers["asArray"])(hotkeys)
            .map(helpers["normalizeKeyAliases"])
            .map(hotkey => hotkey + '.hotkey')
            .join(' ');
        this.e.off(shortcuts).on(shortcuts, () => {
            return this.execCommand(commandName);
        });
    }
    execCommand(command, showUI = false, value = null) {
        if (this.o.readonly && command !== 'selectall') {
            return;
        }
        let result;
        command = command.toLowerCase();
        result = this.e.fire('beforeCommand', command, showUI, value);
        if (result !== false) {
            result = this.execCustomCommands(command, showUI, value);
        }
        if (result !== false) {
            this.s.focus();
            if (command === 'selectall') {
                this.s.select(this.editor, true);
            }
            else {
                try {
                    result = this.ed.execCommand(command, showUI, value);
                }
                catch (e) {
                    if (false) {}
                }
            }
        }
        this.e.fire('afterCommand', command, showUI, value);
        this.setEditorValue();
        return result;
    }
    execCustomCommands(commandName, second = false, third = null) {
        commandName = commandName.toLowerCase();
        if (this.commands[commandName] !== undefined) {
            let result;
            const exec = (command) => {
                let callback;
                if (Object(helpers["isFunction"])(command)) {
                    callback = command;
                }
                else {
                    callback = command.exec;
                }
                const resultCurrent = callback.call(this, commandName, second, third);
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
    lock(name = 'any') {
        if (super.lock(name)) {
            this.__selectionLocked = this.s.save();
            this.s.clear();
            this.editor.classList.add('jodit_disabled');
            this.e.fire('lock', true);
            return true;
        }
        return false;
    }
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
    getMode() {
        return this.mode;
    }
    isEditorMode() {
        return this.getRealMode() === constants["MODE_WYSIWYG"];
    }
    getRealMode() {
        if (this.getMode() !== constants["MODE_SPLIT"]) {
            return this.getMode();
        }
        const active = this.od.activeElement;
        if (active &&
            (dom["a" /* Dom */].isOrContains(this.editor, active) ||
                dom["a" /* Dom */].isOrContains(this.toolbar.container, active))) {
            return constants["MODE_WYSIWYG"];
        }
        return constants["MODE_SOURCE"];
    }
    setMode(mode) {
        const oldmode = this.getMode();
        const data = {
            mode: parseInt(mode.toString(), 10)
        }, modeClasses = [
            'jodit-wysiwyg_mode',
            'jodit-source__mode',
            'jodit_split_mode'
        ];
        if (this.e.fire('beforeSetMode', data) === false) {
            return;
        }
        this.__mode = [
            constants["MODE_SOURCE"],
            constants["MODE_WYSIWYG"],
            constants["MODE_SPLIT"]
        ].includes(data.mode)
            ? data.mode
            : constants["MODE_WYSIWYG"];
        if (this.o.saveModeInStorage) {
            this.storage.set('jodit_default_mode', this.mode);
        }
        modeClasses.forEach(className => {
            this.container.classList.remove(className);
        });
        this.container.classList.add(modeClasses[this.mode - 1]);
        if (oldmode !== this.getMode()) {
            this.e.fire('afterSetMode');
        }
    }
    toggleMode() {
        let mode = this.getMode();
        if ([
            constants["MODE_SOURCE"],
            constants["MODE_WYSIWYG"],
            this.o.useSplitMode ? constants["MODE_SPLIT"] : 9
        ].includes(mode + 1)) {
            mode += 1;
        }
        else {
            mode = constants["MODE_WYSIWYG"];
        }
        this.setMode(mode);
    }
    setDisabled(isDisabled) {
        this.o.disabled = isDisabled;
        const readOnly = this.__wasReadOnly;
        this.setReadOnly(isDisabled || readOnly);
        this.__wasReadOnly = readOnly;
        if (this.editor) {
            this.editor.setAttribute('aria-disabled', isDisabled.toString());
            this.container.classList.toggle('jodit_disabled', isDisabled);
            this.e.fire('disabled', isDisabled);
        }
    }
    getDisabled() {
        return this.o.disabled;
    }
    setReadOnly(isReadOnly) {
        if (this.__wasReadOnly === isReadOnly) {
            return;
        }
        this.__wasReadOnly = isReadOnly;
        this.o.readonly = isReadOnly;
        if (isReadOnly) {
            this.editor && this.editor.removeAttribute('contenteditable');
        }
        else {
            this.editor && this.editor.setAttribute('contenteditable', 'true');
        }
        this.e && this.e.fire('readonly', isReadOnly);
    }
    getReadOnly() {
        return this.o.readonly;
    }
    beforeInitHook() {
    }
    afterInitHook() {
    }
    initOptions(options) {
        this.options = Object(config["c" /* configFactory */])(options);
    }
    initOwners() {
        this.editorWindow = this.o.ownerWindow;
        this.ownerWindow = this.o.ownerWindow;
    }
    addPlace(source, options) {
        const element = Object(helpers["resolveElement"])(source, this.o.shadowRoot || this.od);
        if (!this.isReady) {
            this.id = Object(helpers["attr"])(element, 'id') || new Date().getTime().toString();
            jodit_Jodit.instances[this.id] = this;
        }
        if (element.attributes) {
            Array.from(element.attributes).forEach((attr) => {
                const name = attr.name;
                let value = attr.value;
                if (jodit_Jodit.defaultOptions[name] !== undefined &&
                    (!options || options[name] === undefined)) {
                    if (['readonly', 'disabled'].indexOf(name) !== -1) {
                        value = value === '' || value === 'true';
                    }
                    if (/^[0-9]+(\.)?([0-9]+)?$/.test(value.toString())) {
                        value = Number(value);
                    }
                    this.options[name] = value;
                }
            });
        }
        let container = this.c.div('jodit-container');
        container.classList.add('jodit');
        container.classList.add('jodit-container');
        container.classList.add(`jodit_theme_${this.o.theme || 'default'}`);
        container.setAttribute('contenteditable', 'false');
        let buffer = null;
        if (this.o.inline) {
            if (['TEXTAREA', 'INPUT'].indexOf(element.nodeName) === -1) {
                container = element;
                element.setAttribute(this.__defaultClassesKey, element.className.toString());
                buffer = container.innerHTML;
                container.innerHTML = '';
            }
            container.classList.add('jodit_inline');
            container.classList.add('jodit-container');
        }
        if (element !== container) {
            if (element.style.display) {
                element.setAttribute(this.__defaultStyleDisplayKey, element.style.display);
            }
            element.style.display = 'none';
        }
        const workplace = this.c.div('jodit-workplace', {
            contenteditable: false
        });
        container.appendChild(workplace);
        const statusbar = new status_bar_StatusBar(this, container);
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
            options: this.isReady ? Object(config["c" /* configFactory */])(options) : this.options,
            observer: new observer_Observer(this),
            editorWindow: this.ow
        };
        this.elementToPlace.set(editor, currentPlace);
        this.setCurrentPlace(currentPlace);
        this.places.push(currentPlace);
        this.setNativeEditorValue(this.getElementValue());
        const initResult = this.initEditor(buffer);
        const opt = this.options;
        const init = () => {
            if (opt.enableDragAndDropFileToEditor &&
                opt.uploader &&
                (opt.uploader.url || opt.uploader.insertImageAsBase64URI)) {
                this.uploader.bind(this.editor);
            }
            if (!this.elementToPlace.get(this.editor)) {
                this.elementToPlace.set(this.editor, currentPlace);
            }
            this.e.fire('afterAddPlace', currentPlace);
        };
        if (Object(helpers["isPromise"])(initResult)) {
            return initResult.then(init);
        }
        init();
    }
    setCurrentPlace(place) {
        if (this.currentPlace === place) {
            return;
        }
        if (!this.isEditorMode()) {
            this.setMode(constants["MODE_WYSIWYG"]);
        }
        this.currentPlace = place;
        this.buildToolbar();
        if (this.isReady) {
            this.e.fire('changePlace', place);
        }
    }
    initPlugins() {
        this.beforeInitHook();
        this.e.fire('beforeInit', this);
        try {
            jodit_Jodit.plugins.init(this);
        }
        catch (e) {
            if (false) {}
        }
    }
    initEditor(buffer) {
        const result = this.createEditor();
        const init = () => {
            if (this.isInDestruct) {
                return;
            }
            if (this.element !== this.container) {
                this.setElementValue();
            }
            else {
                buffer !== null && this.setEditorValue(buffer);
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
            try {
                this.ed.execCommand('defaultParagraphSeparator', false, this.o.enter.toLowerCase());
            }
            catch (_a) { }
            try {
                this.ed.execCommand('enableObjectResizing', false, 'false');
            }
            catch (_b) { }
            try {
                this.ed.execCommand('enableInlineTableEditing', false, 'false');
            }
            catch (_c) { }
        };
        if (Object(helpers["isPromise"])(result)) {
            return result.then(init);
        }
        init();
    }
    createEditor() {
        const defaultEditorArea = this.editor;
        const stayDefault = this.e.fire('createEditor', this);
        const init = () => {
            if (this.isInDestruct) {
                return;
            }
            if (stayDefault === false || Object(helpers["isPromise"])(stayDefault)) {
                dom["a" /* Dom */].safeRemove(defaultEditorArea);
            }
            if (this.o.editorCssClass) {
                this.editor.classList.add(this.o.editorCssClass);
            }
            if (this.o.style) {
                Object(helpers["css"])(this.editor, this.o.style);
            }
            const editor = this.editor;
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
                .on(editor, 'selectionchange selectionstart keydown keyup keypress dblclick mousedown mouseup ' +
                'click copy cut dragstart drop dragover paste resize touchstart touchend focus blur', (event) => {
                if (this.o.readonly) {
                    return;
                }
                if (event instanceof KeyboardEvent &&
                    event.isComposing) {
                    return;
                }
                if (this.e && this.e.fire) {
                    if (this.e.fire(event.type, event) === false) {
                        return false;
                    }
                    this.setEditorValue();
                }
            });
            if (this.o.spellcheck) {
                this.editor.setAttribute('spellcheck', 'true');
            }
            if (this.o.direction) {
                const direction = this.o.direction.toLowerCase() === 'rtl' ? 'rtl' : 'ltr';
                this.editor.style.direction = direction;
                this.container.style.direction = direction;
                this.editor.setAttribute('dir', direction);
                this.container.setAttribute('dir', direction);
                this.toolbar.setDirection(direction);
            }
            if (this.o.triggerChangeEvent) {
                this.e.on('change', this.async.debounce(() => {
                    this.e && this.e.fire(this.element, 'change');
                }, this.defaultTimeout));
            }
        };
        if (Object(helpers["isPromise"])(stayDefault)) {
            return stayDefault.then(init);
        }
        init();
    }
    destruct() {
        if (this.isInDestruct) {
            return;
        }
        this.setStatus(core_component["b" /* STATUSES */].beforeDestruct);
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
        this.places.forEach(({ container, workplace, statusbar, element, iframe, editor, observer }) => {
            if (element !== container) {
                if (element.hasAttribute(this.__defaultStyleDisplayKey)) {
                    const display = Object(helpers["attr"])(element, this.__defaultStyleDisplayKey);
                    if (display) {
                        element.style.display = display;
                        element.removeAttribute(this.__defaultStyleDisplayKey);
                    }
                }
                else {
                    element.style.display = '';
                }
            }
            else {
                if (element.hasAttribute(this.__defaultClassesKey)) {
                    element.className =
                        Object(helpers["attr"])(element, this.__defaultClassesKey) || '';
                    element.removeAttribute(this.__defaultClassesKey);
                }
            }
            if (element.hasAttribute('style') && !Object(helpers["attr"])(element, 'style')) {
                element.removeAttribute('style');
            }
            !statusbar.isInDestruct && statusbar.destruct();
            this.e.off(container);
            this.e.off(element);
            this.e.off(editor);
            dom["a" /* Dom */].safeRemove(workplace);
            dom["a" /* Dom */].safeRemove(editor);
            if (container !== element) {
                dom["a" /* Dom */].safeRemove(container);
            }
            dom["a" /* Dom */].safeRemove(iframe);
            if (container === element) {
                element.innerHTML = buffer;
            }
            !observer.isInDestruct && observer.destruct();
        });
        this.places.length = 0;
        this.currentPlace = {};
        delete jodit_Jodit.instances[this.id];
        super.destruct();
    }
}
jodit_Jodit.plugins = global["f" /* pluginSystem */];
jodit_Jodit.modules = global["e" /* modules */];
jodit_Jodit.ns = global["e" /* modules */];
jodit_Jodit.decorators = {};
jodit_Jodit.instances = global["c" /* instances */];
jodit_Jodit.lang = global["d" /* lang */];
Object(tslib_es6["a" /* __decorate */])([
    decorators["cache"]
], jodit_Jodit.prototype, "uploader", null);
Object(tslib_es6["a" /* __decorate */])([
    decorators["cache"]
], jodit_Jodit.prototype, "filebrowser", null);

// EXTERNAL MODULE: ./src/langs/ar.ts
var ar = __webpack_require__(113);
var ar_default = /*#__PURE__*/__webpack_require__.n(ar);

// EXTERNAL MODULE: ./src/langs/cs_cz.ts
var cs_cz = __webpack_require__(114);
var cs_cz_default = /*#__PURE__*/__webpack_require__.n(cs_cz);

// EXTERNAL MODULE: ./src/langs/de.ts
var de = __webpack_require__(115);
var de_default = /*#__PURE__*/__webpack_require__.n(de);

// EXTERNAL MODULE: ./src/langs/en.ts
var en = __webpack_require__(33);
var en_default = /*#__PURE__*/__webpack_require__.n(en);

// EXTERNAL MODULE: ./src/langs/es.ts
var es = __webpack_require__(116);
var es_default = /*#__PURE__*/__webpack_require__.n(es);

// EXTERNAL MODULE: ./src/langs/fr.ts
var fr = __webpack_require__(117);
var fr_default = /*#__PURE__*/__webpack_require__.n(fr);

// EXTERNAL MODULE: ./src/langs/he.ts
var he = __webpack_require__(118);
var he_default = /*#__PURE__*/__webpack_require__.n(he);

// EXTERNAL MODULE: ./src/langs/hu.ts
var hu = __webpack_require__(119);
var hu_default = /*#__PURE__*/__webpack_require__.n(hu);

// EXTERNAL MODULE: ./src/langs/id.ts
var langs_id = __webpack_require__(120);
var id_default = /*#__PURE__*/__webpack_require__.n(langs_id);

// EXTERNAL MODULE: ./src/langs/it.ts
var it = __webpack_require__(121);
var it_default = /*#__PURE__*/__webpack_require__.n(it);

// EXTERNAL MODULE: ./src/langs/ja.ts
var ja = __webpack_require__(122);
var ja_default = /*#__PURE__*/__webpack_require__.n(ja);

// EXTERNAL MODULE: ./src/langs/ko.ts
var ko = __webpack_require__(123);
var ko_default = /*#__PURE__*/__webpack_require__.n(ko);

// EXTERNAL MODULE: ./src/langs/nl.ts
var nl = __webpack_require__(124);
var nl_default = /*#__PURE__*/__webpack_require__.n(nl);

// EXTERNAL MODULE: ./src/langs/pl.ts
var pl = __webpack_require__(125);
var pl_default = /*#__PURE__*/__webpack_require__.n(pl);

// EXTERNAL MODULE: ./src/langs/pt_br.ts
var pt_br = __webpack_require__(126);
var pt_br_default = /*#__PURE__*/__webpack_require__.n(pt_br);

// EXTERNAL MODULE: ./src/langs/ru.ts
var ru = __webpack_require__(127);
var ru_default = /*#__PURE__*/__webpack_require__.n(ru);

// EXTERNAL MODULE: ./src/langs/tr.ts
var langs_tr = __webpack_require__(128);
var tr_default = /*#__PURE__*/__webpack_require__.n(langs_tr);

// EXTERNAL MODULE: ./src/langs/zh_cn.ts
var zh_cn = __webpack_require__(129);
var zh_cn_default = /*#__PURE__*/__webpack_require__.n(zh_cn);

// EXTERNAL MODULE: ./src/langs/zh_tw.ts
var zh_tw = __webpack_require__(130);
var zh_tw_default = /*#__PURE__*/__webpack_require__.n(zh_tw);

// CONCATENATED MODULE: ./src/langs/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




















const exp = {
    ar: ar_default.a,
    cs_cz: cs_cz_default.a,
    de: de_default.a,
    en: en_default.a,
    es: es_default.a,
    fr: fr_default.a,
    he: he_default.a,
    hu: hu_default.a,
    id: id_default.a,
    it: it_default.a,
    ja: ja_default.a,
    ko: ko_default.a,
    nl: nl_default.a,
    pl: pl_default.a,
    pt_br: pt_br_default.a,
    ru: ru_default.a,
    tr: tr_default.a,
    zh_cn: zh_cn_default.a,
    zh_tw: zh_tw_default.a
};
const get = (value) => value.default || value, hashLang = {};
if (Object(checker["c" /* isArray */])(get(en_default.a))) {
    get(en_default.a).forEach((key, index) => {
        hashLang[index] = key;
    });
}
Object.keys(exp).forEach((lang) => {
    const list = get(exp[lang]);
    if (Object(checker["c" /* isArray */])(list)) {
        exp[lang] = {};
        list.forEach((value, index) => {
            exp[lang][hashLang[index]] = value;
        });
    }
});
/* harmony default export */ var langs = (exp);

// EXTERNAL MODULE: ./src/plugins/add-new-line/add-new-line.less
var add_new_line = __webpack_require__(150);

// CONCATENATED MODULE: ./src/plugins/add-new-line/add-new-line.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config["a" /* Config */].prototype.addNewLine = true;
config["a" /* Config */].prototype.addNewLineOnDBLClick = true;
config["a" /* Config */].prototype.addNewLineTagsTriggers = [
    'table',
    'iframe',
    'img',
    'hr',
    'jodit'
];
config["a" /* Config */].prototype.addNewLineDeltaShow = 20;
const ns = 'addnewline';
class add_new_line_addNewLine extends plugin_Plugin {
    constructor() {
        super(...arguments);
        this.line = this.j.c.fromHTML(`<div role="button" tabIndex="-1" title="${this.j.i18n('Break')}" class="jodit-add-new-line"><span>${icon["a" /* Icon */].get('enter')}</span></div>`);
        this.isMatchedTag = (node) => Boolean(node &&
            this.j.o.addNewLineTagsTriggers.includes(node.nodeName.toLowerCase()));
        this.preview = false;
        this.lineInFocus = false;
        this.isShown = false;
        this.hideForce = () => {
            if (!this.isShown) {
                return;
            }
            this.isShown = false;
            this.j.async.clearTimeout(this.timeout);
            this.lineInFocus = false;
            dom["a" /* Dom */].safeRemove(this.line);
        };
        this.hide = () => {
            if (!this.isShown || this.lineInFocus) {
                return;
            }
            this.timeout = this.j.async.setTimeout(this.hideForce, {
                timeout: 500,
                label: 'add-new-line-hide'
            });
        };
        this.canGetFocus = (elm) => {
            return (elm !== null &&
                dom["a" /* Dom */].isBlock(elm, this.j.ew) &&
                !/^(img|table|iframe|hr)$/i.test(elm.nodeName));
        };
        this.onClickLine = (e) => {
            const editor = this.j;
            const p = editor.createInside.element(editor.o.enter);
            if (this.preview && this.current && this.current.parentNode) {
                this.current.parentNode.insertBefore(p, this.current);
            }
            else {
                editor.editor.appendChild(p);
            }
            editor.s.setCursorIn(p);
            Object(helpers["scrollIntoView"])(p, editor.editor, editor.ed);
            editor.e.fire('synchro');
            this.hideForce();
            e.preventDefault();
        };
        this.onDblClickEditor = (e) => {
            const editor = this.j;
            if (!editor.o.readonly &&
                editor.o.addNewLineOnDBLClick &&
                e.target === editor.editor &&
                editor.s.isCollapsed()) {
                const editorBound = Object(helpers["offset"])(editor.editor, editor, editor.ed);
                const top = e.pageY - editor.ew.pageYOffset;
                const p = editor.createInside.element(editor.o.enter);
                if (Math.abs(top - editorBound.top) <
                    Math.abs(top - (editorBound.height + editorBound.top)) &&
                    editor.editor.firstChild) {
                    editor.editor.insertBefore(p, editor.editor.firstChild);
                }
                else {
                    editor.editor.appendChild(p);
                }
                editor.s.setCursorIn(p);
                editor.setEditorValue();
                this.hideForce();
                e.preventDefault();
            }
        };
        this.onMouseMove = (e) => {
            const editor = this.j;
            let currentElement = editor.ed.elementFromPoint(e.clientX, e.clientY);
            if (!dom["a" /* Dom */].isHTMLElement(currentElement, editor.ew) ||
                dom["a" /* Dom */].isOrContains(this.line, currentElement)) {
                return;
            }
            if (!dom["a" /* Dom */].isOrContains(editor.editor, currentElement)) {
                return;
            }
            if (!this.isMatchedTag(currentElement)) {
                currentElement = dom["a" /* Dom */].closest(currentElement, this.isMatchedTag, editor.editor);
            }
            if (!currentElement) {
                this.hide();
                return;
            }
            if (this.isMatchedTag(currentElement)) {
                const parentBox = dom["a" /* Dom */].up(currentElement, node => dom["a" /* Dom */].isBlock(node, editor.ew), editor.editor);
                if (parentBox && parentBox !== editor.editor) {
                    currentElement = parentBox;
                }
            }
            const pos = Object(helpers["position"])(currentElement, this.j);
            let top = false;
            let { clientY } = e;
            if (this.j.iframe) {
                const { top } = Object(helpers["position"])(this.j.iframe, this.j, true);
                clientY += top;
            }
            const delta = this.j.o.addNewLineDeltaShow;
            if (Math.abs(clientY - pos.top) <= delta) {
                top = pos.top;
                this.preview = true;
            }
            if (Math.abs(clientY - (pos.top + pos.height)) <= delta) {
                top = pos.top + pos.height;
                this.preview = false;
            }
            if (top !== false &&
                !Object(helpers["call"])(this.preview ? dom["a" /* Dom */].prev : dom["a" /* Dom */].next, currentElement, this.canGetFocus, editor.editor)) {
                this.line.style.top = top + 'px';
                this.current = currentElement;
                this.show();
            }
            else {
                this.current = false;
                this.hide();
            }
        };
    }
    show() {
        if (this.isShown || this.j.o.readonly || this.j.isLocked) {
            return;
        }
        this.isShown = true;
        this.j.async.clearTimeout(this.timeout);
        this.line.classList.toggle('jodit-add-new-line_after', !this.preview);
        this.j.container.appendChild(this.line);
        this.line.style.width = this.j.editor.clientWidth + 'px';
    }
    afterInit(editor) {
        if (!editor.o.addNewLine) {
            return;
        }
        editor.e
            .on(this.line, 'mousemove', (e) => {
            e.stopPropagation();
        })
            .on(this.line, 'mousedown touchstart', this.onClickLine)
            .on('change', this.hideForce)
            .on(this.line, 'mouseenter', () => {
            this.j.async.clearTimeout(this.timeout);
            this.lineInFocus = true;
        })
            .on(this.line, 'mouseleave', () => {
            this.lineInFocus = false;
        })
            .on('changePlace', this.addEventListeners.bind(this));
        this.addEventListeners();
    }
    addEventListeners() {
        const editor = this.j;
        editor.e
            .off(editor.editor, '.' + ns)
            .off(editor.container, '.' + ns)
            .on([editor.ow, editor.ew, editor.editor], `scroll` + '.' + ns, this.hideForce)
            .on(editor.editor, 'dblclick' + '.' + ns, this.onDblClickEditor)
            .on(editor.editor, 'click' + '.' + ns, this.hide)
            .on(editor.container, 'mouseleave' + '.' + ns, this.hide)
            .on(editor.editor, 'mousemove' + '.' + ns, editor.async.debounce(this.onMouseMove, editor.defaultTimeout * 3));
    }
    beforeDestruct() {
        this.j.async.clearTimeout(this.timeout);
        this.j.e.off(this.line);
        this.j.e.off('changePlace', this.addEventListeners);
        dom["a" /* Dom */].safeRemove(this.line);
        this.j.e
            .off([this.j.ow, this.j.ew, this.j.editor], '.' + ns)
            .off(this.j.container, '.' + ns);
    }
}

// EXTERNAL MODULE: ./src/plugins/about/about.less
var about = __webpack_require__(151);

// CONCATENATED MODULE: ./src/plugins/about/about.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





config["a" /* Config */].prototype.controls.about = {
    exec: (editor) => {
        const dialog = new dialog_Dialog({
            language: editor.o.language
        }), i18n = editor.i18n.bind(editor);
        dialog.setHeader(i18n('About Jodit'));
        dialog.setContent(`<div class="jodit-about">
					<div>${i18n('Jodit Editor')} v.${editor.getVersion()}</div>
					<div>${i18n('License: %s', !Object(helpers["isLicense"])(editor.o.license)
            ? 'MIT'
            : Object(helpers["normalizeLicense"])(editor.o.license))}</div>
					<div>
						<a href="https://xdsoft.net/jodit/" target="_blank">http://xdsoft.net/jodit/</a>
					</div>
					<div>
						<a href="https://xdsoft.net/jodit/doc/" target="_blank">${i18n("Jodit User's Guide")}</a>
						${i18n('contains detailed help for using')}
					</div>
					<div>${i18n('Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.')}</div>
				</div>`);
        dialog.open(true);
        dialog.bindDestruct(editor);
    },
    tooltip: 'About Jodit',
    mode: constants["MODE_SOURCE"] + constants["MODE_WYSIWYG"]
};
function about_about() {
}

// CONCATENATED MODULE: ./src/plugins/autofocus.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


config["a" /* Config */].prototype.autofocus = false;
function autofocus(editor) {
    editor.e.on('afterInit', () => {
        if (editor.o.autofocus) {
            if (editor.defaultTimeout) {
                editor.async.setTimeout(editor.s.focus, 300);
            }
            else {
                editor.s.focus();
            }
        }
    });
    editor.e.on('afterInit afterAddPlace', () => {
        editor.e
            .off(editor.editor, 'mousedown.autofocus')
            .on(editor.editor, 'mousedown.autofocus', (e) => {
            if (editor.isEditorMode() &&
                e.target &&
                dom["a" /* Dom */].isBlock(e.target, editor.ew) &&
                !e.target.childNodes.length) {
                if (editor.editor === e.target) {
                    editor.s.focus();
                }
                else {
                    editor.s.setCursorIn(e.target);
                }
            }
        });
    });
}

// EXTERNAL MODULE: ./src/plugins/keyboard/helpers.ts
var keyboard_helpers = __webpack_require__(17);

// CONCATENATED MODULE: ./src/plugins/keyboard/delete.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





class delete_Delete extends plugin_Plugin {
    get root() {
        return this.j.editor;
    }
    afterInit(jodit) {
        jodit.e
            .on('afterCommand', (command) => {
            if (command === 'delete') {
                this.afterDeleteCommand();
            }
        })
            .on('keydown', (event) => {
            if (event.key === constants["KEY_BACKSPACE"] || event.key === constants["KEY_DELETE"]) {
                return this.onDelete(event.key === constants["KEY_BACKSPACE"]);
            }
        });
    }
    beforeDestruct(jodit) {
        jodit.e.off('afterCommand').off('keydown');
    }
    afterDeleteCommand() {
        const jodit = this.j;
        const current = jodit.s.current();
        if (current && dom["a" /* Dom */].isTag(current.firstChild, 'br')) {
            jodit.s.removeNode(current.firstChild);
        }
        if (!Object(helpers["trim"])(jodit.editor.textContent || '') &&
            !jodit.editor.querySelector('img') &&
            (!current || !dom["a" /* Dom */].closest(current, 'table', jodit.editor))) {
            jodit.editor.innerHTML = '';
            const node = jodit.s.setCursorIn(jodit.editor);
            jodit.s.removeNode(node);
        }
    }
    onDelete(backspace) {
        var _a;
        const sel = this.j.selection;
        if (!sel.isFocused()) {
            sel.focus();
        }
        if (!((_a = sel.sel) === null || _a === void 0 ? void 0 : _a.rangeCount) || this.checkNotCollapsed()) {
            return false;
        }
        const jodit = this.j;
        const range = sel.range;
        const fakeNode = jodit.createInside.text(constants["INVISIBLE_SPACE"]);
        try {
            range.insertNode(fakeNode);
            if (!dom["a" /* Dom */].isOrContains(jodit.editor, fakeNode)) {
                return;
            }
            Object(keyboard_helpers["d" /* normalizeCursorPosition */])(fakeNode, backspace);
            if (this.checkRemoveChar(fakeNode, backspace) ||
                this.checkRemoveInseparableElement(fakeNode, backspace) ||
                this.checkTableCell(fakeNode, backspace) ||
                this.checkRemoveEmptyParent(fakeNode, backspace) ||
                this.checkRemoveEmptyNeighbor(fakeNode, backspace) ||
                this.checkJoinNeighbors(fakeNode, backspace) ||
                this.checkRewrapListItem(fakeNode, backspace)) {
                return false;
            }
        }
        finally {
            dom["a" /* Dom */].safeRemove(fakeNode);
        }
        return false;
    }
    checkNotCollapsed() {
        const jodit = this.j;
        if (!jodit.s.isCollapsed()) {
            jodit.execCommand('Delete');
            return true;
        }
    }
    checkRemoveChar(fakeNode, backspace) {
        var _a, _b;
        const step = backspace ? -1 : 1;
        let sibling = Object(keyboard_helpers["c" /* getSibling */])(fakeNode, backspace), removeNeighbor = null;
        let charRemoved = false, removed;
        while (sibling && dom["a" /* Dom */].isText(sibling)) {
            if ((_a = sibling.nodeValue) === null || _a === void 0 ? void 0 : _a.length) {
                const value = sibling.nodeValue;
                const length = value.length;
                let index = backspace ? length - 1 : 0;
                if (value[index] === constants["INVISIBLE_SPACE"]) {
                    while (value[index] === constants["INVISIBLE_SPACE"]) {
                        index += step;
                    }
                }
                removed = value[index];
                if (value[index + step] === constants["INVISIBLE_SPACE"]) {
                    index += step;
                    while (value[index] === constants["INVISIBLE_SPACE"]) {
                        index += step;
                    }
                    index += backspace ? 1 : -1;
                }
                sibling.nodeValue = value.substr(backspace ? 0 : index + 1, backspace ? index : length);
            }
            if (!((_b = sibling.nodeValue) === null || _b === void 0 ? void 0 : _b.length)) {
                removeNeighbor = sibling;
            }
            if (!Object(helpers["isVoid"])(removed) && removed !== constants["INVISIBLE_SPACE"]) {
                charRemoved = true;
                break;
            }
            sibling = Object(keyboard_helpers["c" /* getSibling */])(sibling, backspace);
            if (removeNeighbor) {
                dom["a" /* Dom */].safeRemove(removeNeighbor);
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
    removeEmptyInlineParent(node) {
        let parent = node.parentElement;
        while (parent && dom["a" /* Dom */].isInlineBlock(parent)) {
            const p = parent.parentElement;
            if (dom["a" /* Dom */].isEmpty(parent)) {
                dom["a" /* Dom */].after(parent, node);
                dom["a" /* Dom */].safeRemove(parent);
            }
            parent = p;
        }
    }
    addBRInsideEmptyBlock(node) {
        if (node.parentElement !== this.root &&
            dom["a" /* Dom */].isBlock(node.parentElement, this.j.ew) &&
            dom["a" /* Dom */].each(node.parentElement, dom["a" /* Dom */].isEmptyTextNode)) {
            dom["a" /* Dom */].after(node, this.j.createInside.element('br'));
        }
    }
    checkRemoveInseparableElement(fakeNode, backspace) {
        const neighbor = dom["a" /* Dom */].getNormalSibling(fakeNode, backspace);
        if (dom["a" /* Dom */].isElement(neighbor) &&
            (dom["a" /* Dom */].isTag(neighbor, constants["INSEPARABLE_TAGS"]) || dom["a" /* Dom */].isEmpty(neighbor))) {
            dom["a" /* Dom */].safeRemove(neighbor);
            this.j.s.setCursorBefore(fakeNode);
            if (dom["a" /* Dom */].isTag(neighbor, 'br')) {
                this.checkRemoveEmptyParent(fakeNode, backspace);
            }
            return true;
        }
    }
    checkTableCell(fakeNode, backspace) {
        const cell = fakeNode.parentElement;
        if (dom["a" /* Dom */].isCell(cell, this.j.ew)) {
            return true;
        }
    }
    checkRemoveEmptyParent(fakeNode, backspace) {
        let found = false;
        const { setCursorBefore, setCursorIn } = this.j.s;
        let prn = dom["a" /* Dom */].closest(fakeNode, dom["a" /* Dom */].isElement, this.root);
        if (!prn || !dom["a" /* Dom */].isEmpty(prn)) {
            return;
        }
        const neighbor = Object(keyboard_helpers["a" /* getNeighbor */])(fakeNode, backspace, this.root);
        do {
            if (prn && dom["a" /* Dom */].isEmpty(prn) && !dom["a" /* Dom */].isCell(prn, this.j.ew)) {
                dom["a" /* Dom */].after(prn, fakeNode);
                const tmp = dom["a" /* Dom */].closest(prn, n => dom["a" /* Dom */].isElement(n) && n !== prn, this.root);
                dom["a" /* Dom */].safeRemove(prn);
                found = true;
                prn = tmp;
            }
            else {
                break;
            }
        } while (prn);
        if (found && this.checkJoinTwoLists(fakeNode, backspace)) {
            return true;
        }
        if (neighbor) {
            setCursorIn(neighbor, !backspace);
        }
        else {
            setCursorBefore(fakeNode);
        }
        return found || undefined;
    }
    checkJoinTwoLists(fakeNode, backspace) {
        const next = dom["a" /* Dom */].getNormalSibling(fakeNode, backspace), prev = dom["a" /* Dom */].getNormalSibling(fakeNode, !backspace);
        if (!dom["a" /* Dom */].closest(fakeNode, dom["a" /* Dom */].isElement, this.root) &&
            dom["a" /* Dom */].isTag(next, ['ul', 'ol']) &&
            dom["a" /* Dom */].isTag(prev, ['ul', 'ol']) &&
            dom["a" /* Dom */].isTag(next.firstElementChild, 'li') &&
            dom["a" /* Dom */].isTag(prev.firstElementChild, 'li')) {
            const { setCursorBefore, setCursorAfter } = this.j.s;
            const target = next.firstElementChild, second = prev.firstElementChild;
            Object(helpers["call"])(!backspace ? dom["a" /* Dom */].append : dom["a" /* Dom */].prepend, second, fakeNode);
            this.checkJoinNeighbors(fakeNode, backspace);
            Object(helpers["call"])(backspace ? dom["a" /* Dom */].append : dom["a" /* Dom */].prepend, target, fakeNode);
            Object(helpers["call"])(backspace ? setCursorBefore : setCursorAfter, fakeNode);
            return true;
        }
    }
    checkRemoveEmptyNeighbor(fakeNode, backspace) {
        const parent = dom["a" /* Dom */].closest(fakeNode, dom["a" /* Dom */].isElement, this.root);
        if (!parent) {
            return;
        }
        const neighbor = Object(keyboard_helpers["b" /* getNotSpaceSibling */])(parent, backspace);
        if (neighbor && dom["a" /* Dom */].isEmpty(neighbor)) {
            dom["a" /* Dom */].safeRemove(neighbor);
            this.j.s.setCursorBefore(fakeNode);
            return true;
        }
    }
    checkJoinNeighbors(fakeNode, backspace) {
        const parent = dom["a" /* Dom */].closest(fakeNode, dom["a" /* Dom */].isElement, this.root);
        if (!parent) {
            return;
        }
        const neighbor = Object(keyboard_helpers["b" /* getNotSpaceSibling */])(parent, backspace);
        this.j.s.setCursorBefore(fakeNode);
        if (parent &&
            neighbor &&
            parent.nodeName === neighbor.nodeName &&
            this.j.s.cursorInTheEdge(backspace, parent)) {
            dom["a" /* Dom */].moveContent(parent, neighbor, !backspace);
            let next;
            do {
                next = Object(keyboard_helpers["c" /* getSibling */])(neighbor, !backspace);
                dom["a" /* Dom */].safeRemove(next);
            } while (next !== parent);
            this.j.s.setCursorBefore(fakeNode);
            return true;
        }
        if (dom["a" /* Dom */].isTag(parent, 'li') &&
            this.j.s.cursorInTheEdge(backspace, parent)) {
            Object(helpers["call"])(backspace ? dom["a" /* Dom */].before : dom["a" /* Dom */].after, parent, fakeNode);
            const result = this.checkJoinNeighbors(fakeNode, backspace);
            Object(helpers["call"])(!backspace ? dom["a" /* Dom */].append : dom["a" /* Dom */].prepend, parent, fakeNode);
            this.j.s.setCursorBefore(fakeNode);
            return result;
        }
    }
    checkRewrapListItem(fakeNode, backspace) {
        var _a;
        if (backspace) {
            const li = dom["a" /* Dom */].closest(fakeNode, dom["a" /* Dom */].isElement, this.root);
            if (dom["a" /* Dom */].isTag(li, 'li') &&
                ((_a = li === null || li === void 0 ? void 0 : li.parentElement) === null || _a === void 0 ? void 0 : _a.firstElementChild) === li &&
                this.j.s.cursorInTheEdge(true, li)) {
                const ul = li.parentElement;
                const p = this.j.createInside.element(this.j.o.enterBlock);
                dom["a" /* Dom */].before(ul, p);
                dom["a" /* Dom */].moveContent(li, p);
                dom["a" /* Dom */].safeRemove(li);
                if (dom["a" /* Dom */].isEmpty(ul)) {
                    dom["a" /* Dom */].safeRemove(ul);
                }
                this.j.s.setCursorBefore(fakeNode);
                return true;
            }
        }
    }
}

// CONCATENATED MODULE: ./src/plugins/bold.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


config["a" /* Config */].prototype.controls.subscript = {
    tags: ['sub'],
    tooltip: 'subscript'
};
config["a" /* Config */].prototype.controls.superscript = {
    tags: ['sup'],
    tooltip: 'superscript'
};
config["a" /* Config */].prototype.controls.bold = {
    tagRegExp: /^(strong|b)$/i,
    tags: ['strong', 'b'],
    css: {
        'font-weight': ['bold', '700']
    },
    tooltip: 'Bold'
};
config["a" /* Config */].prototype.controls.italic = {
    tagRegExp: /^(em|i)$/i,
    tags: ['em', 'i'],
    css: {
        'font-style': 'italic'
    },
    tooltip: 'Italic'
};
config["a" /* Config */].prototype.controls.underline = {
    tagRegExp: /^(u)$/i,
    tags: ['u'],
    css: {
        'text-decoration': 'underline'
    },
    tooltip: 'Underline'
};
config["a" /* Config */].prototype.controls.strikethrough = {
    tagRegExp: /^(s)$/i,
    tags: ['s'],
    css: {
        'text-decoration': 'line-through'
    },
    tooltip: 'Strike through'
};
function bold(editor) {
    const callBack = (command) => {
        const control = config["a" /* Config */].defaultOptions.controls[command], cssOptions = {
            ...control.css
        }, cssRules = {};
        Object.keys(cssOptions).forEach((key) => {
            cssRules[key] = Object(helpers["isArray"])(cssOptions[key])
                ? cssOptions[key][0]
                : cssOptions[key];
        });
        editor.s.applyStyle(cssRules, {
            element: control.tags ? control.tags[0] : undefined
        });
        editor.e.fire('synchro');
        return false;
    };
    editor
        .registerCommand('bold', {
        exec: callBack,
        hotkeys: ['ctrl+b', 'cmd+b']
    })
        .registerCommand('italic', {
        exec: callBack,
        hotkeys: ['ctrl+i', 'cmd+i']
    })
        .registerCommand('underline', {
        exec: callBack,
        hotkeys: ['ctrl+u', 'cmd+u']
    })
        .registerCommand('strikethrough', {
        exec: callBack
    });
}

// CONCATENATED MODULE: ./src/plugins/fix/clean-html.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





config["a" /* Config */].prototype.cleanHTML = {
    timeout: 300,
    removeEmptyElements: true,
    fillEmptyParagraph: true,
    replaceNBSP: true,
    replaceOldTags: {
        i: 'em',
        b: 'strong'
    },
    allowTags: false,
    denyTags: false
};
config["a" /* Config */].prototype.controls.eraser = {
    command: 'removeFormat',
    tooltip: 'Clear Formatting'
};
class clean_html_cleanHtml extends plugin_Plugin {
    constructor() {
        super(...arguments);
        this.onChange = () => {
            if (!this.allowEdit()) {
                return;
            }
            const editor = this.j;
            const current = editor.s.current();
            const replaceOldTags = editor.o.cleanHTML.replaceOldTags;
            if (replaceOldTags && current) {
                const tags = Object.keys(replaceOldTags);
                if (editor.s.isCollapsed()) {
                    const oldParent = dom["a" /* Dom */].closest(current, tags, editor.editor);
                    if (oldParent) {
                        const selInfo = editor.s.save(), tagName = replaceOldTags[oldParent.nodeName.toLowerCase()] ||
                            replaceOldTags[oldParent.nodeName];
                        dom["a" /* Dom */].replace(oldParent, tagName, editor.createInside, true, false);
                        editor.s.restore(selInfo);
                    }
                }
            }
            let node = null;
            if (editor.editor.firstChild) {
                node = editor.editor.firstChild;
            }
            const remove = [];
            const work = this.checkNode(node, current, remove);
            remove.forEach(dom["a" /* Dom */].safeRemove);
            if (remove.length || work) {
                editor.events && editor.e.fire('syncho');
            }
        };
        this.checkNode = (nodeElm, current, remove) => {
            let work = false;
            if (!nodeElm) {
                return work;
            }
            if (this.isRemovableNode(nodeElm, current)) {
                remove.push(nodeElm);
                return this.checkNode(nodeElm.nextSibling, current, remove);
            }
            if (this.j.o.cleanHTML.fillEmptyParagraph &&
                dom["a" /* Dom */].isBlock(nodeElm, this.j.ew) &&
                dom["a" /* Dom */].isEmpty(nodeElm, /^(img|svg|canvas|input|textarea|form|br)$/)) {
                const br = this.j.createInside.element('br');
                nodeElm.appendChild(br);
                work = true;
            }
            const allow = this.allowTagsHash;
            if (allow && allow[nodeElm.nodeName] !== true) {
                const attrs = nodeElm.attributes;
                if (attrs && attrs.length) {
                    const removeAttrs = [];
                    for (let i = 0; i < attrs.length; i += 1) {
                        const attr = allow[nodeElm.nodeName][attrs[i].name];
                        if (!attr || (attr !== true && attr !== attrs[i].value)) {
                            removeAttrs.push(attrs[i].name);
                        }
                    }
                    if (removeAttrs.length) {
                        work = true;
                    }
                    removeAttrs.forEach(attr => {
                        nodeElm.removeAttribute(attr);
                    });
                }
            }
            work = this.checkNode(nodeElm.firstChild, current, remove) || work;
            work = this.checkNode(nodeElm.nextSibling, current, remove) || work;
            return work;
        };
        this.allowTagsHash = clean_html_cleanHtml.getHash(this.j.o.cleanHTML.allowTags);
        this.denyTagsHash = clean_html_cleanHtml.getHash(this.j.o.cleanHTML.denyTags);
        this.onKeyUpCleanUp = () => {
            const editor = this.j;
            if (!this.allowEdit()) {
                return;
            }
            const currentNode = editor.s.current();
            if (currentNode) {
                const currentParagraph = dom["a" /* Dom */].up(currentNode, node => dom["a" /* Dom */].isBlock(node, editor.ew), editor.editor);
                if (currentParagraph) {
                    dom["a" /* Dom */].all(currentParagraph, node => {
                        if (node && dom["a" /* Dom */].isText(node)) {
                            if (node.nodeValue !== null &&
                                Object(constants["INVISIBLE_SPACE_REG_EXP"])().test(node.nodeValue) &&
                                node.nodeValue.replace(Object(constants["INVISIBLE_SPACE_REG_EXP"])(), '').length !== 0) {
                                node.nodeValue = node.nodeValue.replace(Object(constants["INVISIBLE_SPACE_REG_EXP"])(), '');
                                if (node === currentNode &&
                                    editor.s.isCollapsed()) {
                                    editor.s.setCursorAfter(node);
                                }
                            }
                        }
                    });
                }
            }
        };
        this.beforeCommand = (command) => {
            if (command.toLowerCase() === 'removeformat') {
                this.onRemoveFormat();
                return false;
            }
        };
        this.afterCommand = (command) => {
            if (command.toLowerCase() === 'inserthorizontalrule') {
                this.onInsertHorizontalLine();
                return;
            }
        };
        this.cleanNode = (elm, onlyRemoveFont = false) => {
            switch (elm.nodeType) {
                case Node.ELEMENT_NODE:
                    dom["a" /* Dom */].each(elm, child => {
                        this.cleanNode(child, onlyRemoveFont);
                    });
                    if (dom["a" /* Dom */].isTag(elm, 'font')) {
                        dom["a" /* Dom */].unwrap(elm);
                    }
                    else if (!onlyRemoveFont) {
                        Array.from(elm.attributes).forEach((attr) => {
                            if (['src', 'href', 'rel', 'content'].indexOf(attr.name.toLowerCase()) === -1) {
                                elm.removeAttribute(attr.name);
                            }
                        });
                        Object(helpers["normalizeNode"])(elm);
                    }
                    break;
                case Node.TEXT_NODE:
                    if (!onlyRemoveFont &&
                        this.j.o.cleanHTML.replaceNBSP &&
                        dom["a" /* Dom */].isText(elm) &&
                        elm.nodeValue !== null &&
                        elm.nodeValue.match(Object(constants["SPACE_REG_EXP"])())) {
                        elm.nodeValue = elm.nodeValue
                            .replace(Object(constants["INVISIBLE_SPACE_REG_EXP"])(), '')
                            .replace(Object(constants["SPACE_REG_EXP"])(), ' ');
                    }
                    break;
                default:
                    dom["a" /* Dom */].safeRemove(elm);
            }
        };
    }
    afterInit(jodit) {
        jodit.e
            .off('.cleanHtml')
            .on('change.cleanHtml afterSetMode.cleanHtml afterInit.cleanHtml mousedown.cleanHtml keydown.cleanHtml', jodit.async.debounce(this.onChange, jodit.o.cleanHTML.timeout))
            .on('keyup.cleanHtml', this.onKeyUpCleanUp)
            .on('beforeCommand.cleanHtml', this.beforeCommand)
            .on('afterCommand.cleanHtml', this.afterCommand);
    }
    allowEdit() {
        return !(this.j.isInDestruct ||
            !this.j.isEditorMode() ||
            this.j.getReadOnly());
    }
    static getHash(tags) {
        const attributesReg = /([^\[]*)\[([^\]]+)]/;
        const seperator = /[\s]*,[\s]*/, attrReg = /^(.*)[\s]*=[\s]*(.*)$/;
        const tagsHash = {};
        if (Object(helpers["isString"])(tags)) {
            tags.split(seperator).map((elm) => {
                elm = Object(helpers["trim"])(elm);
                const attr = attributesReg.exec(elm), allowAttributes = {}, attributeMap = (attrName) => {
                    attrName = Object(helpers["trim"])(attrName);
                    const val = attrReg.exec(attrName);
                    if (val) {
                        allowAttributes[val[1]] = val[2];
                    }
                    else {
                        allowAttributes[attrName] = true;
                    }
                };
                if (attr) {
                    const attr2 = attr[2].split(seperator);
                    if (attr[1]) {
                        attr2.forEach(attributeMap);
                        tagsHash[attr[1].toUpperCase()] = allowAttributes;
                    }
                }
                else {
                    tagsHash[elm.toUpperCase()] = true;
                }
            });
            return tagsHash;
        }
        if (tags) {
            Object.keys(tags).forEach(tagName => {
                tagsHash[tagName.toUpperCase()] = tags[tagName];
            });
            return tagsHash;
        }
        return false;
    }
    onInsertHorizontalLine() {
        const hr = this.j.editor.querySelector('hr[id=null]');
        if (hr) {
            let node = dom["a" /* Dom */].next(hr, node => dom["a" /* Dom */].isBlock(node, this.j.ew), this.j.editor, false);
            if (!node) {
                node = this.j.createInside.element(this.j.o.enter);
                if (node) {
                    dom["a" /* Dom */].after(hr, node);
                }
            }
            this.j.s.setCursorIn(node);
        }
    }
    onRemoveFormat() {
        const sel = this.j.selection;
        const current = sel.current();
        if (!current) {
            return;
        }
        const up = (node) => node && dom["a" /* Dom */].up(node, dom["a" /* Dom */].isInlineBlock, this.j.editor);
        let parentNode = up(current), anotherParent = parentNode;
        while (anotherParent) {
            anotherParent = up(anotherParent.parentNode);
            if (anotherParent) {
                parentNode = anotherParent;
            }
        }
        const collapsed = sel.isCollapsed();
        const range = sel.range;
        let fragment = null;
        if (!collapsed) {
            fragment = range.extractContents();
        }
        if (parentNode) {
            const tmp = this.j.createInside.text(constants["INVISIBLE_SPACE"]);
            range.insertNode(tmp);
            const insideParent = dom["a" /* Dom */].isOrContains(parentNode, tmp, true);
            dom["a" /* Dom */].safeRemove(tmp);
            range.collapse(true);
            if (insideParent &&
                parentNode.parentNode &&
                parentNode.parentNode !== fragment) {
                const second = this.j.s.splitSelection(parentNode);
                this.j.s.setCursorAfter(second || parentNode);
                if (dom["a" /* Dom */].isEmpty(parentNode)) {
                    dom["a" /* Dom */].safeRemove(parentNode);
                }
            }
        }
        if (fragment) {
            sel.insertNode(this.cleanFragment(fragment));
        }
    }
    cleanFragment(fragment) {
        dom["a" /* Dom */].each(fragment, node => {
            if (dom["a" /* Dom */].isElement(node) && constants["IS_INLINE"].test(node.nodeName)) {
                this.cleanFragment(node);
                dom["a" /* Dom */].unwrap(node);
            }
        });
        return fragment;
    }
    isRemovableNode(node, current) {
        const allow = this.allowTagsHash;
        if (!dom["a" /* Dom */].isText(node) &&
            ((allow && !allow[node.nodeName]) ||
                (this.denyTagsHash && this.denyTagsHash[node.nodeName]))) {
            return true;
        }
        if (current &&
            dom["a" /* Dom */].isTag(node, 'br') &&
            clean_html_cleanHtml.hasNotEmptyTextSibling(node) &&
            !clean_html_cleanHtml.hasNotEmptyTextSibling(node, true) &&
            dom["a" /* Dom */].up(node, node => dom["a" /* Dom */].isBlock(node, this.j.ew), this.j.editor) !==
                dom["a" /* Dom */].up(current, node => dom["a" /* Dom */].isBlock(node, this.j.ew), this.j.editor)) {
            return true;
        }
        return (this.j.o.cleanHTML.removeEmptyElements &&
            current !== null &&
            dom["a" /* Dom */].isElement(node) &&
            node.nodeName.match(constants["IS_INLINE"]) !== null &&
            !this.j.s.isMarker(node) &&
            Object(helpers["trim"])(node.innerHTML).length === 0 &&
            !dom["a" /* Dom */].isOrContains(node, current));
    }
    static hasNotEmptyTextSibling(node, next = false) {
        let prev = next ? node.nextSibling : node.previousSibling;
        while (prev) {
            if (dom["a" /* Dom */].isElement(prev) || !dom["a" /* Dom */].isEmptyTextNode(prev)) {
                return true;
            }
            prev = next ? prev.nextSibling : prev.previousSibling;
        }
        return false;
    }
    beforeDestruct(jodit) {
        this.j.e.off('.cleanHtml');
    }
}

// CONCATENATED MODULE: ./src/plugins/fix/wrap-text-nodes.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



class wrap_text_nodes_WrapTextNodes extends plugin_Plugin {
    afterInit(jodit) {
        if (jodit.o.enter.toLowerCase() === 'br') {
            return;
        }
        jodit.e.on('afterInit.wtn postProcessSetEditorValue.wtn', () => {
            if (!jodit.isEditorMode()) {
                return;
            }
            let child = jodit.editor.firstChild, isChanged = false;
            const isNotClosed = (n) => dom["a" /* Dom */].isElement(n) &&
                !(dom["a" /* Dom */].isBlock(n, jodit.ew) || dom["a" /* Dom */].isTag(n, ['hr'])), isSuitableStart = (n) => (dom["a" /* Dom */].isText(n) &&
                Object(checker["s" /* isString */])(n.nodeValue) &&
                /[^\s]/.test(n.nodeValue)) ||
                isNotClosed(n);
            const isSuitable = (n) => dom["a" /* Dom */].isText(n) || isNotClosed(n);
            let selInfo = null;
            while (child) {
                if (isSuitableStart(child)) {
                    if (!isChanged) {
                        selInfo = jodit.s.save();
                    }
                    isChanged = true;
                    const box = jodit.createInside.element(jodit.o.enter);
                    dom["a" /* Dom */].before(child, box);
                    while (child && isSuitable(child)) {
                        const next = child.nextSibling;
                        box.appendChild(child);
                        child = next;
                    }
                    box.normalize();
                }
                child = child && child.nextSibling;
            }
            if (isChanged) {
                jodit.s.restore(selInfo);
                if (jodit.e.current === 'afterInit') {
                    jodit.e.fire('internalChange');
                }
            }
        });
    }
    beforeDestruct(jodit) {
        jodit.e.off('.wtn');
    }
}

// EXTERNAL MODULE: ./src/core/ui/button/button.ts
var ui_button_button = __webpack_require__(23);

// CONCATENATED MODULE: ./src/plugins/clipboard/paste.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */








config["a" /* Config */].prototype.askBeforePasteHTML = true;
config["a" /* Config */].prototype.processPasteHTML = true;
config["a" /* Config */].prototype.askBeforePasteFromWord = true;
config["a" /* Config */].prototype.processPasteFromWord = true;
config["a" /* Config */].prototype.nl2brInPlainText = true;
config["a" /* Config */].prototype.defaultActionOnPaste = constants["INSERT_AS_HTML"];
const getDataTransfer = (event) => {
    if (event.clipboardData) {
        return event.clipboardData;
    }
    try {
        return event.dataTransfer || new DataTransfer();
    }
    catch (_a) {
        return null;
    }
};
config["a" /* Config */].prototype.controls.paste = {
    tooltip: 'Paste from clipboard',
    async exec(editor) {
        editor.s.focus();
        let text = '', error = true;
        if (error) {
            text = editor.buffer.get(pluginKey) || '';
            error = text.length === 0;
        }
        if (error && navigator.clipboard) {
            try {
                const items = await navigator.clipboard.read();
                if (items && items.length) {
                    const textBlob = await items[0].getType('text/plain');
                    text = await new Response(textBlob).text();
                }
            }
            catch (_a) { }
            if (error) {
                try {
                    text = await navigator.clipboard.readText();
                    error = false;
                }
                catch (_b) { }
            }
        }
        if (error) {
            const value = editor.value;
            editor.ed.execCommand('paste');
            error = value !== editor.value;
        }
        if (text) {
            editor.s.insertHTML(text);
        }
        else {
            if (error) {
                Alert(editor.i18n("Your browser doesn't support direct access to the clipboard."), () => {
                    editor.s.focus();
                }).bindDestruct(editor);
            }
        }
    }
};
function paste(editor) {
    const opt = editor.options, clearOrKeep = (msg, title, callback, clearButton = 'Clean', clear2Button = 'Insert only Text') => {
        var _a;
        if (editor.events &&
            editor.e.fire('beforeOpenPasteDialog', msg, title, callback, clearButton, clear2Button) === false) {
            return;
        }
        const dialog = Confirm(`<div style="word-break: normal; white-space: normal">${msg}</div>`, title, callback);
        dialog.bindDestruct(editor);
        Object(helpers["markOwner"])(editor, dialog.container);
        const keep = Object(ui_button_button["a" /* Button */])(editor, '', 'Keep');
        const clear = Object(ui_button_button["a" /* Button */])(editor, '', clearButton);
        const clear2 = Object(ui_button_button["a" /* Button */])(editor, '', clear2Button);
        const cancel = Object(ui_button_button["a" /* Button */])(editor, '', 'Cancel');
        keep.onAction(() => {
            dialog.close();
            callback && callback(true);
        });
        clear.onAction(() => {
            dialog.close();
            callback && callback(false);
        });
        clear2.onAction(() => {
            dialog.close();
            callback && callback(0);
        });
        cancel.onAction(() => {
            dialog.close();
        });
        dialog.setFooter([keep, clear, clear2Button ? clear2 : '', cancel]);
        (_a = editor.events) === null || _a === void 0 ? void 0 : _a.fire('afterOpenPasteDialog', dialog, msg, title, callback, clearButton, clear2Button);
        return dialog;
    };
    const insertByType = (html, subtype) => {
        if (Object(helpers["isString"])(html)) {
            switch (subtype) {
                case constants["INSERT_CLEAR_HTML"]:
                    html = Object(helpers["cleanFromWord"])(html);
                    break;
                case constants["INSERT_ONLY_TEXT"]:
                    html = Object(helpers["stripTags"])(html);
                    break;
                case constants["INSERT_AS_TEXT"]:
                    html = Object(helpers["htmlspecialchars"])(html);
                    break;
                default:
            }
        }
        if (editor.isInDestruct) {
            return;
        }
        if (Object(helpers["isString"])(html)) {
            editor.buffer.set(pluginKey, html);
        }
        editor.s.insertHTML(html);
    };
    const insertHTML = (html, event) => {
        const buffer = editor.buffer.get(pluginKey);
        if (Object(helpers["isHTML"])(html) && buffer !== trimFragment(html)) {
            html = trimFragment(html);
            const pasteHTMLByType = (insertType) => {
                if (event.type === 'drop') {
                    editor.s.insertCursorAtPoint(event.clientX, event.clientY);
                }
                insertByType(html, insertType);
                editor.setEditorValue();
            };
            if (opt.askBeforePasteHTML) {
                clearOrKeep(editor.i18n('Your code is similar to HTML. Keep as HTML?'), editor.i18n('Paste as HTML'), (agree) => {
                    let insertType = constants["INSERT_AS_HTML"];
                    if (agree === false) {
                        insertType = constants["INSERT_AS_TEXT"];
                    }
                    if (agree === 0) {
                        insertType = constants["INSERT_ONLY_TEXT"];
                    }
                    pasteHTMLByType(insertType);
                }, 'Insert as Text');
            }
            else {
                pasteHTMLByType(opt.defaultActionOnPaste);
            }
            return false;
        }
    };
    const trimFragment = (html) => {
        const start = html.search(/<!--StartFragment-->/i);
        if (start !== -1) {
            html = html.substr(start + 20);
        }
        const end = html.search(/<!--EndFragment-->/i);
        if (end !== -1) {
            html = html.substr(0, end);
        }
        return html;
    };
    const beforePaste = (event) => {
        const dt = getDataTransfer(event);
        if (!dt || !event || !dt.getData) {
            return;
        }
        if (dt.getData(constants["TEXT_HTML"])) {
            const processHTMLData = (html) => {
                const buffer = editor.buffer.get(pluginKey);
                if (opt.processPasteHTML &&
                    Object(helpers["isHTML"])(html) &&
                    buffer !== trimFragment(html)) {
                    if (opt.processPasteFromWord && Object(helpers["isHtmlFromWord"])(html)) {
                        const pasteFromWordByType = (method) => {
                            var _a;
                            if (method === constants["INSERT_AS_HTML"]) {
                                html = Object(helpers["applyStyles"])(html);
                                if (opt.beautifyHTML) {
                                    const value = (_a = editor.events) === null || _a === void 0 ? void 0 : _a.fire('beautifyHTML', html);
                                    if (Object(helpers["isString"])(value)) {
                                        html = value;
                                    }
                                }
                            }
                            if (method === constants["INSERT_AS_TEXT"]) {
                                html = Object(helpers["cleanFromWord"])(html);
                            }
                            if (method === constants["INSERT_ONLY_TEXT"]) {
                                html = Object(helpers["stripTags"])(Object(helpers["cleanFromWord"])(html));
                            }
                            editor.s.insertHTML(html);
                            editor.setEditorValue();
                        };
                        if (opt.askBeforePasteFromWord) {
                            clearOrKeep(editor.i18n('The pasted content is coming from a Microsoft Word/Excel document. ' +
                                'Do you want to keep the format or clean it up?'), editor.i18n('Word Paste Detected'), (agree) => {
                                let insertType = constants["INSERT_AS_HTML"];
                                if (agree === false) {
                                    insertType = constants["INSERT_AS_TEXT"];
                                }
                                if (agree === 0) {
                                    insertType = constants["INSERT_ONLY_TEXT"];
                                }
                                pasteFromWordByType(insertType);
                            });
                        }
                        else {
                            pasteFromWordByType(opt.defaultActionOnPaste);
                        }
                    }
                    else {
                        insertHTML(html, event);
                    }
                    return false;
                }
            };
            if (dt.types && Array.from(dt.types).includes(constants["TEXT_HTML"])) {
                return processHTMLData(dt.getData(constants["TEXT_HTML"]));
            }
            if (event.type !== 'drop') {
                const div = editor.c.div('', {
                    tabindex: -1,
                    contenteditable: true,
                    style: {
                        left: -9999,
                        top: 0,
                        width: 0,
                        height: '100%',
                        lineHeight: '140%',
                        overflow: 'hidden',
                        position: 'fixed',
                        zIndex: 2147483647,
                        wordBreak: 'break-all'
                    }
                });
                editor.container.appendChild(div);
                const selData = editor.s.save();
                div.focus();
                let tick = 0;
                const removeFakeFocus = () => {
                    dom["a" /* Dom */].safeRemove(div);
                    editor.selection && editor.s.restore(selData);
                };
                const waitData = () => {
                    tick += 1;
                    if (div.childNodes && div.childNodes.length > 0) {
                        const pastedData = div.innerHTML;
                        removeFakeFocus();
                        if (processHTMLData(pastedData) !== false) {
                            editor.s.insertHTML(pastedData);
                        }
                        return;
                    }
                    if (tick < 5) {
                        editor.async.setTimeout(waitData, 20);
                    }
                    else {
                        removeFakeFocus();
                    }
                };
                waitData();
            }
        }
        if (dt.getData(constants["TEXT_PLAIN"])) {
            return insertHTML(dt.getData(constants["TEXT_PLAIN"]), event);
        }
    };
    editor.e
        .off('paste.paste')
        .on('paste.paste', (event) => {
        if (beforePaste(event) === false ||
            editor.e.fire('beforePaste', event) === false) {
            event.preventDefault();
            return false;
        }
        const dt = getDataTransfer(event);
        if (event && dt) {
            const types = dt.types;
            let types_str = '';
            if (Object(helpers["isArray"])(types) || Object(helpers["type"])(types) === 'domstringlist') {
                for (let i = 0; i < types.length; i += 1) {
                    types_str += types[i] + ';';
                }
            }
            else {
                types_str = (types || constants["TEXT_PLAIN"]).toString() + ';';
            }
            const getText = () => {
                if (/text\/html/i.test(types_str)) {
                    return dt.getData('text/html');
                }
                if (/text\/rtf/i.test(types_str) && Object(helpers["browser"])('safari')) {
                    return dt.getData('text/rtf');
                }
                if (/text\/plain/i.test(types_str) && !Object(helpers["browser"])('mozilla')) {
                    return dt.getData(constants["TEXT_PLAIN"]);
                }
                if (/text/i.test(types_str) && constants["IS_IE"]) {
                    return dt.getData(constants["TEXT_PLAIN"]);
                }
                return null;
            };
            let clipboard_html = getText();
            if (dom["a" /* Dom */].isNode(clipboard_html, editor.ew) ||
                (clipboard_html && Object(helpers["trim"])(clipboard_html) !== '')) {
                clipboard_html = trimFragment(clipboard_html);
                const buffer = editor.buffer.get(pluginKey);
                if (buffer !== clipboard_html) {
                    const result = editor.e.fire('processPaste', event, clipboard_html, types_str);
                    if (result !== undefined) {
                        clipboard_html = result;
                    }
                }
                if (Object(helpers["isString"])(clipboard_html) ||
                    dom["a" /* Dom */].isNode(clipboard_html, editor.ew)) {
                    if (event.type === 'drop') {
                        editor.s.insertCursorAtPoint(event.clientX, event.clientY);
                    }
                    insertByType(clipboard_html, opt.defaultActionOnPaste);
                }
                event.preventDefault();
                event.stopPropagation();
            }
        }
        if (editor.e.fire('afterPaste', event) === false) {
            return false;
        }
    });
    if (opt.nl2brInPlainText) {
        editor.e
            .off('processPaste.paste')
            .on('processPaste.paste', (event, text, type) => {
            if (type === constants["TEXT_PLAIN"] + ';' && !Object(helpers["isHTML"])(text)) {
                return Object(helpers["nl2br"])(text);
            }
        });
    }
}

// CONCATENATED MODULE: ./src/plugins/clipboard/cut.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config["a" /* Config */].prototype.controls.cut = {
    command: 'cut',
    isDisabled: (editor) => editor.s.isCollapsed(),
    tooltip: 'Cut selection'
};
config["a" /* Config */].prototype.controls.copy = {
    command: 'copy',
    isDisabled: (editor) => editor.s.isCollapsed(),
    tooltip: 'Copy selection'
};
const pluginKey = 'clipboard';
class cut_clipboard {
    init(editor) {
        editor.e
            .off(`copy.${pluginKey} cut.${pluginKey}`)
            .on(`copy.${pluginKey} cut.${pluginKey}`, (event) => {
            var _a;
            const selectedText = editor.s.html;
            const clipboardData = getDataTransfer(event) ||
                getDataTransfer(editor.ew) ||
                getDataTransfer(event.originalEvent);
            if (clipboardData) {
                clipboardData.setData(constants["TEXT_PLAIN"], Object(helpers["stripTags"])(selectedText));
                clipboardData.setData(constants["TEXT_HTML"], selectedText);
            }
            editor.buffer.set(pluginKey, selectedText);
            if (event.type === 'cut') {
                editor.s.remove();
                editor.s.focus();
            }
            event.preventDefault();
            (_a = editor === null || editor === void 0 ? void 0 : editor.events) === null || _a === void 0 ? void 0 : _a.fire('afterCopy', selectedText);
        });
    }
    destruct(editor) {
        var _a, _b;
        (_a = editor === null || editor === void 0 ? void 0 : editor.buffer) === null || _a === void 0 ? void 0 : _a.set(pluginKey, '');
        (_b = editor === null || editor === void 0 ? void 0 : editor.events) === null || _b === void 0 ? void 0 : _b.off('.' + pluginKey);
    }
}

// EXTERNAL MODULE: ./src/plugins/clipboard/paste-storage/paste-storage.less
var paste_storage = __webpack_require__(152);

// CONCATENATED MODULE: ./src/plugins/clipboard/paste-storage/paste-storage.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






class paste_storage_pasteStorage extends plugin_Plugin {
    constructor() {
        super(...arguments);
        this.currentIndex = 0;
        this.list = [];
        this.container = null;
        this.listBox = null;
        this.previewBox = null;
        this.dialog = null;
        this.paste = () => {
            this.j.s.focus();
            this.j.s.insertHTML(this.list[this.currentIndex]);
            if (this.currentIndex !== 0) {
                const buffer = this.list[0];
                this.list[0] = this.list[this.currentIndex];
                this.list[this.currentIndex] = buffer;
            }
            this.dialog && this.dialog.close();
            this.j.setEditorValue();
        };
        this.onKeyDown = (e) => {
            let index = this.currentIndex;
            if ([constants["KEY_UP"], constants["KEY_DOWN"], constants["KEY_ENTER"]].indexOf(e.key) === -1) {
                return;
            }
            if (e.key === constants["KEY_UP"]) {
                if (index === 0) {
                    index = this.list.length - 1;
                }
                else {
                    index -= 1;
                }
            }
            if (e.key === constants["KEY_DOWN"]) {
                if (index === this.list.length - 1) {
                    index = 0;
                }
                else {
                    index += 1;
                }
            }
            if (e.key === constants["KEY_ENTER"]) {
                this.paste();
                return;
            }
            if (index !== this.currentIndex) {
                this.selectIndex(index);
            }
            e.stopImmediatePropagation();
            e.preventDefault();
        };
        this.selectIndex = (index) => {
            if (this.listBox) {
                Array.from(this.listBox.childNodes).forEach((a, i) => {
                    a.classList.remove('jodit_active');
                    if (index === i && this.previewBox) {
                        a.classList.add('jodit_active');
                        this.previewBox.innerHTML = this.list[index];
                        a.focus();
                    }
                });
            }
            this.currentIndex = index;
        };
        this.showDialog = () => {
            if (this.list.length < 2) {
                return;
            }
            this.dialog || this.createDialog();
            if (this.listBox) {
                this.listBox.innerHTML = '';
            }
            if (this.previewBox) {
                this.previewBox.innerHTML = '';
            }
            this.list.forEach((html, index) => {
                const a = this.j.c.element('a');
                a.textContent =
                    index + 1 + '. ' + html.replace(Object(constants["SPACE_REG_EXP"])(), '');
                this.j.e.on(a, 'keydown', this.onKeyDown);
                Object(helpers["attr"])(a, 'href', 'javascript:void(0)');
                Object(helpers["attr"])(a, 'data-index', index.toString());
                Object(helpers["attr"])(a, 'tab-index', '-1');
                this.listBox && this.listBox.appendChild(a);
            });
            this.dialog && this.dialog.open();
            this.j.async.setTimeout(() => {
                this.selectIndex(0);
            }, 100);
        };
    }
    createDialog() {
        this.dialog = new dialog_Dialog({
            language: this.j.o.language
        });
        const pasteButton = this.j.c.fromHTML('<a href="javascript:void(0)" style="float:right;" class="jodit-button">' +
            '<span>' +
            this.j.i18n('Paste') +
            '</span>' +
            '</a>');
        this.j.e.on(pasteButton, 'click', this.paste);
        const cancelButton = this.j.c.fromHTML('<a href="javascript:void(0)" style="float:right; margin-right: 10px;" class="jodit-button">' +
            '<span>' +
            this.j.i18n('Cancel') +
            '</span>' +
            '</a>');
        this.j.e.on(cancelButton, 'click', this.dialog.close);
        this.container = this.j.c.div();
        this.container.classList.add('jodit-paste-storage');
        this.listBox = this.j.c.div();
        this.previewBox = this.j.c.div();
        this.container.appendChild(this.listBox);
        this.container.appendChild(this.previewBox);
        this.dialog.setHeader(this.j.i18n('Choose Content to Paste'));
        this.dialog.setContent(this.container);
        this.dialog.setFooter([pasteButton, cancelButton]);
        this.j.e.on(this.listBox, 'click dblclick', (e) => {
            const a = e.target;
            if (dom["a" /* Dom */].isTag(a, 'a') && a.hasAttribute('data-index')) {
                this.selectIndex(parseInt(Object(helpers["attr"])(a, '-index') || '0', 10));
            }
            if (e.type === 'dblclick') {
                this.paste();
            }
            return false;
        });
    }
    afterInit() {
        this.j.e
            .off('afterCopy.paste-storage')
            .on('afterCopy.paste-storage', (html) => {
            if (this.list.indexOf(html) !== -1) {
                this.list.splice(this.list.indexOf(html), 1);
            }
            this.list.unshift(html);
            if (this.list.length > 5) {
                this.list.length = 5;
            }
        });
        this.j.registerCommand('showPasteStorage', {
            exec: this.showDialog,
            hotkeys: ['ctrl+shift+v', 'cmd+shift+v']
        });
    }
    beforeDestruct() {
        this.dialog && this.dialog.destruct();
        dom["a" /* Dom */].safeRemove(this.previewBox);
        dom["a" /* Dom */].safeRemove(this.listBox);
        dom["a" /* Dom */].safeRemove(this.container);
        this.container = null;
        this.listBox = null;
        this.previewBox = null;
        this.dialog = null;
        this.list = [];
    }
}

// CONCATENATED MODULE: ./src/plugins/clipboard/copy-format.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const copy_format_pluginKey = 'copyformat';
const copyStyles = [
    'fontWeight',
    'fontStyle',
    'fontSize',
    'color',
    'margin',
    'padding',
    'borderWidth',
    'borderStyle',
    'borderColor',
    'borderRadius',
    'backgroundColor',
    'textDecorationLine',
    'fontFamily'
];
const getStyle = (editor, key, box, defaultStyles) => {
    let result = Object(helpers["css"])(box, key);
    if (result === defaultStyles[key]) {
        if (box.parentNode &&
            box !== editor.editor &&
            box.parentNode !== editor.editor) {
            result = getStyle(editor, key, box.parentNode, defaultStyles);
        }
        else {
            result = undefined;
        }
    }
    return result;
};
const getStyles = (editor, box, defaultStyles) => {
    const result = {};
    if (box) {
        copyStyles.forEach((key) => {
            result[key] = getStyle(editor, key, box, defaultStyles);
            if (key.match(/border(Style|Color)/) && !result.borderWidth) {
                result[key] = undefined;
            }
        });
    }
    return result;
};
config["a" /* Config */].prototype.controls.copyformat = {
    exec: (editor, current, { button }) => {
        if (!current) {
            return;
        }
        if (editor.buffer.exists(copy_format_pluginKey)) {
            editor.buffer.delete(copy_format_pluginKey);
            editor.e.off(editor.editor, 'mouseup.' + copy_format_pluginKey);
        }
        else {
            const defaultStyles = {}, box = dom["a" /* Dom */].up(current, (elm) => elm && !dom["a" /* Dom */].isText(elm), editor.editor) || editor.editor;
            const ideal = editor.createInside.span();
            editor.editor.appendChild(ideal);
            copyStyles.forEach((key) => {
                defaultStyles[key] = Object(helpers["css"])(ideal, key);
            });
            if (ideal !== editor.editor) {
                dom["a" /* Dom */].safeRemove(ideal);
            }
            const format = getStyles(editor, box, defaultStyles);
            const onMouseUp = () => {
                editor.buffer.delete(copy_format_pluginKey);
                const currentNode = editor.s.current();
                if (currentNode) {
                    if (dom["a" /* Dom */].isTag(currentNode, 'img')) {
                        Object(helpers["css"])(currentNode, format);
                    }
                    else {
                        editor.s.applyStyle(format);
                    }
                }
                editor.e.off(editor.editor, 'mouseup.' + copy_format_pluginKey);
            };
            editor.e.on(editor.editor, 'mouseup.' + copy_format_pluginKey, onMouseUp);
            editor.buffer.set(copy_format_pluginKey, true);
        }
        button.update();
    },
    isActive: (editor) => editor.buffer.exists(copy_format_pluginKey),
    tooltip: 'Paint format'
};

// CONCATENATED MODULE: ./src/plugins/clipboard/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





// EXTERNAL MODULE: ./src/modules/widget/index.ts + 3 modules
var widget = __webpack_require__(14);

// CONCATENATED MODULE: ./src/plugins/color.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config["a" /* Config */].prototype.controls.brush = {
    update(button) {
        const color = Object(helpers["dataBind"])(button, 'color');
        const editor = button.j;
        const update = (key, value) => {
            if (value && value !== Object(helpers["css"])(editor.editor, key).toString()) {
                button.state.icon.fill = value;
                return;
            }
        };
        if (color) {
            const mode = Object(helpers["dataBind"])(button, 'color');
            update(mode === 'color' ? mode : 'background-color', color);
            return;
        }
        const current = editor.s.current();
        if (current && !button.state.disabled) {
            const currentBpx = dom["a" /* Dom */].closest(current, elm => {
                return (dom["a" /* Dom */].isBlock(elm, editor.ew) ||
                    (elm && dom["a" /* Dom */].isElement(elm)));
            }, editor.editor) || editor.editor;
            update('color', Object(helpers["css"])(currentBpx, 'color').toString());
            update('background-color', Object(helpers["css"])(currentBpx, 'background-color').toString());
        }
        button.state.icon.fill = '';
        button.state.activated = false;
    },
    popup: (editor, current, self, close, button) => {
        let colorHEX = '', bg_color = '', tabs = [], currentElement = null;
        if (current &&
            current !== editor.editor &&
            dom["a" /* Dom */].isNode(current, editor.ew)) {
            if (dom["a" /* Dom */].isElement(current)) {
                currentElement = current;
            }
            dom["a" /* Dom */].up(current, (node) => {
                if (dom["a" /* Dom */].isHTMLElement(node, editor.ew)) {
                    const color = Object(helpers["css"])(node, 'color', undefined, true), background = Object(helpers["css"])(node, 'background-color', undefined, true);
                    if (color) {
                        colorHEX = color.toString();
                        return true;
                    }
                    if (background) {
                        bg_color = background.toString();
                        return true;
                    }
                }
            }, editor.editor);
        }
        const backgroundTag = Object(widget["a" /* ColorPickerWidget */])(editor, (value) => {
            if (!currentElement) {
                editor.execCommand('background', false, value);
            }
            else {
                currentElement.style.backgroundColor = value;
            }
            Object(helpers["dataBind"])(button, 'color', value);
            Object(helpers["dataBind"])(button, 'color-mode', 'background');
            close();
        }, bg_color);
        const colorTab = Object(widget["a" /* ColorPickerWidget */])(editor, (value) => {
            if (!currentElement) {
                editor.execCommand('forecolor', false, value);
            }
            else {
                currentElement.style.color = value;
            }
            Object(helpers["dataBind"])(button, 'color', value);
            Object(helpers["dataBind"])(button, 'color-mode', 'color');
            close();
        }, colorHEX);
        tabs = [
            {
                name: 'Background',
                content: backgroundTag
            },
            {
                name: 'Text',
                content: colorTab
            }
        ];
        if (editor.o.colorPickerDefaultTab !== 'background') {
            tabs = tabs.reverse();
        }
        return Object(widget["c" /* TabsWidget */])(editor, tabs, currentElement);
    },
    exec(jodit, current, { button }) {
        const mode = Object(helpers["dataBind"])(button, 'color-mode'), color = Object(helpers["dataBind"])(button, 'color');
        if (!mode) {
            return false;
        }
        if (current &&
            current !== jodit.editor &&
            dom["a" /* Dom */].isNode(current, jodit.ew) &&
            dom["a" /* Dom */].isElement(current)) {
            switch (mode) {
                case 'color':
                    current.style.color = color;
                    break;
                    current.style.backgroundColor = color;
                    break;
            }
        }
        else {
            jodit.execCommand(mode === 'background' ? mode : 'forecolor', false, color);
        }
    },
    tooltip: 'Fill color or set the text color'
};
function color_color(editor) {
    const callback = (command, second, third) => {
        const colorHEX = Object(helpers["normalizeColor"])(third);
        switch (command) {
            case 'background':
                editor.s.applyStyle({
                    backgroundColor: !colorHEX ? '' : colorHEX
                });
                break;
            case 'forecolor':
                editor.s.applyStyle({
                    color: !colorHEX ? '' : colorHEX
                });
                break;
        }
        editor.setEditorValue();
        return false;
    };
    editor
        .registerCommand('forecolor', callback)
        .registerCommand('background', callback);
}

// CONCATENATED MODULE: ./src/plugins/clipboard/drag-and-drop.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






class drag_and_drop_DragAndDrop extends plugin_Plugin {
    constructor() {
        super(...arguments);
        this.isFragmentFromEditor = false;
        this.isCopyMode = false;
        this.startDragPoint = { x: 0, y: 0 };
        this.draggable = null;
        this.bufferRange = null;
        this.onDragEnd = () => {
            if (this.draggable) {
                dom["a" /* Dom */].safeRemove(this.draggable);
                this.draggable = null;
            }
            this.isCopyMode = false;
        };
        this.onDrag = (event) => {
            if (this.draggable) {
                if (!this.draggable.parentNode) {
                    Object(global["b" /* getContainer */])(this.j, drag_and_drop_DragAndDrop).appendChild(this.draggable);
                }
                this.j.e.fire('hidePopup');
                Object(helpers["css"])(this.draggable, {
                    left: event.clientX + 20,
                    top: event.clientY + 20
                });
                this.j.s.insertCursorAtPoint(event.clientX, event.clientY);
                event.preventDefault();
                event.stopPropagation();
            }
        };
        this.onDrop = (event) => {
            if (!event.dataTransfer ||
                !event.dataTransfer.files ||
                !event.dataTransfer.files.length) {
                if (!this.isFragmentFromEditor && !this.draggable) {
                    this.j.e.fire('paste', event);
                    event.preventDefault();
                    event.stopPropagation();
                    return false;
                }
                const sel = this.j.s.sel;
                const range = this.bufferRange ||
                    (sel && sel.rangeCount ? sel.getRangeAt(0) : null);
                let fragment = null;
                if (!this.draggable && range) {
                    fragment = this.isCopyMode
                        ? range.cloneContents()
                        : range.extractContents();
                }
                else if (this.draggable) {
                    if (this.isCopyMode) {
                        const [tagName, field] = Object(helpers["attr"])(this.draggable, '-is-file') === '1'
                            ? ['a', 'href']
                            : ['img', 'src'];
                        fragment = this.j.createInside.element(tagName);
                        fragment.setAttribute(field, Object(helpers["attr"])(this.draggable, 'data-src') ||
                            Object(helpers["attr"])(this.draggable, 'src') ||
                            '');
                        if (tagName === 'a') {
                            fragment.textContent = Object(helpers["attr"])(fragment, field) || '';
                        }
                    }
                    else {
                        fragment = Object(helpers["dataBind"])(this.draggable, 'target');
                    }
                }
                else if (this.getText(event)) {
                    fragment = this.j.createInside.fromHTML(this.getText(event));
                }
                sel && sel.removeAllRanges();
                this.j.s.insertCursorAtPoint(event.clientX, event.clientY);
                if (fragment) {
                    this.j.s.insertNode(fragment, false, false);
                    if (range && fragment.firstChild && fragment.lastChild) {
                        range.setStartBefore(fragment.firstChild);
                        range.setEndAfter(fragment.lastChild);
                        this.j.s.selectRange(range);
                        this.j.e.fire('synchro');
                    }
                    if (dom["a" /* Dom */].isTag(fragment, 'img') && this.j.events) {
                        this.j.e.fire('afterInsertImage', fragment);
                    }
                }
                event.preventDefault();
                event.stopPropagation();
            }
            this.isFragmentFromEditor = false;
        };
        this.onDragStart = (event) => {
            let target = event.target;
            this.onDragEnd();
            this.isFragmentFromEditor = dom["a" /* Dom */].isOrContains(this.j.editor, target, true);
            this.isCopyMode = this.isFragmentFromEditor ? Object(helpers["ctrlKey"])(event) : true;
            if (this.isFragmentFromEditor) {
                const sel = this.j.s.sel;
                const range = sel && sel.rangeCount ? sel.getRangeAt(0) : null;
                if (range) {
                    this.bufferRange = range.cloneRange();
                }
            }
            else {
                this.bufferRange = null;
            }
            this.startDragPoint.x = event.clientX;
            this.startDragPoint.y = event.clientY;
            if (dom["a" /* Dom */].isElement(target) &&
                target.classList.contains('jodit-filebrowser__files-item')) {
                target = target.querySelector('img');
            }
            if (dom["a" /* Dom */].isTag(target, 'img')) {
                this.draggable = target.cloneNode(true);
                Object(helpers["dataBind"])(this.draggable, 'target', target);
                Object(helpers["css"])(this.draggable, {
                    'z-index': 100000000000000,
                    'pointer-events': 'none',
                    position: 'fixed',
                    display: 'inlin-block',
                    left: this.startDragPoint.x,
                    top: this.startDragPoint.y,
                    width: target.offsetWidth,
                    height: target.offsetHeight
                });
            }
        };
        this.getText = (event) => {
            const dt = getDataTransfer(event);
            return dt ? dt.getData(constants["TEXT_HTML"]) || dt.getData(constants["TEXT_PLAIN"]) : null;
        };
    }
    afterInit() {
        this.j.e
            .off(window, '.DragAndDrop')
            .off('.DragAndDrop')
            .off([window, this.j.ed, this.j.editor], 'dragstart.DragAndDrop', this.onDragStart)
            .on(window, 'dragover.DragAndDrop', this.onDrag)
            .on([window, this.j.ed, this.j.editor], 'dragstart.DragAndDrop', this.onDragStart)
            .on('drop.DragAndDrop', this.onDrop)
            .on(window, 'dragend.DragAndDrop drop.DragAndDrop mouseup.DragAndDrop', this.onDragEnd);
    }
    beforeDestruct() {
        this.onDragEnd();
        this.j.e
            .off(window, '.DragAndDrop')
            .off('.DragAndDrop')
            .off([window, this.j.ed, this.j.editor], 'dragstart.DragAndDrop', this.onDragStart);
    }
}

// CONCATENATED MODULE: ./src/plugins/clipboard/drag-and-drop-element.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





config["a" /* Config */].prototype.draggableTags = ['img', 'a', 'jodit-media', 'jodit'];
class drag_and_drop_element_DragAndDropElement extends plugin_Plugin {
    constructor() {
        super(...arguments);
        this.dragList = [];
        this.isCopyMode = false;
        this.draggable = null;
        this.wasMoved = false;
        this.diffStep = 10;
        this.startX = 0;
        this.startY = 0;
        this.onDragStart = (event) => {
            let target = event.target, last = null;
            if (!this.dragList.length) {
                return;
            }
            do {
                if (this.dragList.includes(target.nodeName.toLowerCase())) {
                    if (!last ||
                        (target.firstChild === last && target.lastChild === last)) {
                        last = target;
                    }
                }
                target = target.parentNode;
            } while (target && target !== this.j.editor);
            if (!last) {
                return;
            }
            this.startX = event.clientX;
            this.startY = event.clientY;
            this.isCopyMode = Object(helpers["ctrlKey"])(event);
            this.onDragEnd();
            this.draggable = last.cloneNode(true);
            Object(helpers["dataBind"])(this.draggable, 'target', last);
            this.j.e.on(this.j.editor, 'mousemove touchmove', this.onDrag);
        };
        this.onDrag = this.j.async.throttle((event) => {
            if (!this.draggable) {
                return;
            }
            const x = event.clientX, y = event.clientY;
            if (Math.sqrt(Math.pow(x - this.startX, 2) + Math.pow(y - this.startY, 2)) < this.diffStep) {
                return;
            }
            this.wasMoved = true;
            this.j.e.fire('hidePopup hideResizer');
            if (!this.draggable.parentNode) {
                Object(helpers["css"])(this.draggable, {
                    zIndex: 10000000000000,
                    pointerEvents: 'none',
                    position: 'fixed',
                    display: 'inline-block',
                    left: event.clientX,
                    top: event.clientY,
                    width: this.draggable.offsetWidth,
                    height: this.draggable.offsetHeight
                });
                Object(global["b" /* getContainer */])(this.j, drag_and_drop_element_DragAndDropElement).appendChild(this.draggable);
            }
            Object(helpers["css"])(this.draggable, {
                left: event.clientX,
                top: event.clientY
            });
            this.j.s.insertCursorAtPoint(event.clientX, event.clientY);
        }, this.j.defaultTimeout);
        this.onDragEnd = () => {
            if (this.isInDestruct) {
                return;
            }
            if (this.draggable) {
                dom["a" /* Dom */].safeRemove(this.draggable);
                this.draggable = null;
                this.wasMoved = false;
                this.j.e.off(this.j.editor, 'mousemove touchmove', this.onDrag);
            }
        };
        this.onDrop = () => {
            if (!this.draggable || !this.wasMoved) {
                this.onDragEnd();
                return;
            }
            let fragment = Object(helpers["dataBind"])(this.draggable, 'target');
            this.onDragEnd();
            if (this.isCopyMode) {
                fragment = fragment.cloneNode(true);
            }
            const { parentElement } = fragment;
            this.j.s.insertNode(fragment, true, false);
            if (parentElement && dom["a" /* Dom */].isEmpty(parentElement)) {
                dom["a" /* Dom */].safeRemove(parentElement);
            }
            if (dom["a" /* Dom */].isTag(fragment, 'img') && this.j.e) {
                this.j.e.fire('afterInsertImage', fragment);
            }
            this.j.e.fire('synchro');
        };
    }
    afterInit() {
        this.dragList = this.j.o.draggableTags
            ? Object(helpers["splitArray"])(this.j.o.draggableTags)
                .filter(item => item)
                .map((item) => item.toLowerCase())
            : [];
        if (!this.dragList.length) {
            return;
        }
        this.j.e
            .on(this.j.editor, 'mousedown touchstart dragstart', this.onDragStart)
            .on('mouseup touchend', this.onDrop)
            .on([this.j.ew, this.ow], 'mouseup touchend', this.onDragEnd);
    }
    beforeDestruct() {
        this.onDragEnd();
        this.j.e
            .off(this.j.editor, 'mousemove touchmove', this.onDrag)
            .off(this.j.editor, 'mousedown touchstart dragstart', this.onDragStart)
            .off('mouseup touchend', this.onDrop)
            .off(window, 'mouseup touchend', this.onDragEnd);
    }
}

// CONCATENATED MODULE: ./src/plugins/keyboard/enter.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





const insertParagraph = (editor, fake, wrapperTag, style) => {
    var _a;
    const p = editor.createInside.element(wrapperTag), helper_node = editor.createInside.element('br');
    p.appendChild(helper_node);
    if (style && style.cssText) {
        p.setAttribute('style', style.cssText);
    }
    editor.s.insertNode(p, false, false);
    editor.s.setCursorBefore(helper_node);
    const range = editor.s.createRange();
    range.setStartBefore(wrapperTag.toLowerCase() !== 'br' ? helper_node : p);
    range.collapse(true);
    editor.s.selectRange(range);
    dom["a" /* Dom */].safeRemove(fake);
    Object(helpers["scrollIntoView"])(p, editor.editor, editor.ed);
    (_a = editor.events) === null || _a === void 0 ? void 0 : _a.fire('synchro');
    return p;
};
class enter_enter extends plugin_Plugin {
    constructor() {
        super(...arguments);
        this.brMode = false;
        this.defaultTag = constants["PARAGRAPH"];
        this.checkWrapper = () => {
            if (!this.j.isEditorMode() || true) {
                return;
            }
            const current = this.j.s.current(false);
            const currentBox = this.getBlockWrapper(current);
            if (!currentBox) {
                this.wrapText(current);
            }
        };
    }
    afterInit(editor) {
        this.defaultTag = editor.o.enter.toLowerCase();
        this.brMode = this.defaultTag === constants["BR"].toLowerCase();
        if (!editor.o.enterBlock) {
            editor.o.enterBlock = this.brMode
                ? constants["PARAGRAPH"]
                : this.defaultTag;
        }
        editor.e
            .off('.enter')
            .on('change.enter', this.checkWrapper)
            .on('keydown.enter', (event) => {
            if (event.key === constants["KEY_ENTER"]) {
                const beforeEnter = editor.e.fire('beforeEnter', event);
                if (beforeEnter !== undefined) {
                    return beforeEnter;
                }
                if (!editor.s.isCollapsed()) {
                    editor.execCommand('Delete');
                }
                editor.s.focus();
                this.onEnter(event);
                return false;
            }
        });
    }
    onEnter(event) {
        const editor = this.j, sel = editor.selection, defaultTag = this.defaultTag;
        let current = sel.current(false);
        if (!current || current === editor.editor) {
            current = editor.createInside.text(constants["INVISIBLE_SPACE"]);
            sel.insertNode(current);
            sel.select(current);
        }
        let currentBox = this.getBlockWrapper(current);
        const isLi = dom["a" /* Dom */].isTag(currentBox, 'li');
        if (!isLi && !this.checkBR(current, event.shiftKey)) {
            return false;
        }
        if (!currentBox && !this.hasPreviousBlock(current)) {
            currentBox = this.wrapText(current);
        }
        if (!currentBox || currentBox === current) {
            insertParagraph(editor, null, isLi ? 'li' : defaultTag);
            return false;
        }
        if (!this.checkUnsplittableBox(currentBox)) {
            return false;
        }
        if (isLi && dom["a" /* Dom */].isEmpty(currentBox)) {
            this.enterInsideEmptyLIelement(currentBox);
            return false;
        }
        const canSplit = currentBox.tagName.toLowerCase() === this.defaultTag || isLi;
        const cursorOnTheRight = sel.cursorOnTheRight(currentBox);
        const cursorOnTheLeft = sel.cursorOnTheLeft(currentBox);
        if ((!canSplit || dom["a" /* Dom */].isEmpty(currentBox)) &&
            (cursorOnTheRight || cursorOnTheLeft)) {
            let fake = null;
            if (cursorOnTheRight) {
                fake = sel.setCursorAfter(currentBox);
            }
            else {
                fake = sel.setCursorBefore(currentBox);
            }
            insertParagraph(editor, fake, this.defaultTag);
            if (cursorOnTheLeft && !cursorOnTheRight) {
                sel.setCursorIn(currentBox, true);
            }
            return;
        }
        sel.splitSelection(currentBox);
    }
    getBlockWrapper(current, tagReg = constants["IS_BLOCK"]) {
        let node = current;
        const root = this.j.editor;
        do {
            if (!node || node === root) {
                break;
            }
            if (tagReg.test(node.nodeName)) {
                if (dom["a" /* Dom */].isTag(node, 'li')) {
                    return node;
                }
                return (this.getBlockWrapper(node.parentNode, /^li$/i) ||
                    node);
            }
            node = node.parentNode;
        } while (node && node !== root);
        return null;
    }
    checkBR(current, shiftKeyPressed) {
        const isMultyLineBlock = dom["a" /* Dom */].closest(current, ['pre', 'blockquote'], this.j.editor);
        if (this.brMode ||
            (shiftKeyPressed && !isMultyLineBlock) ||
            (!shiftKeyPressed && isMultyLineBlock)) {
            const br = this.j.createInside.element('br');
            this.j.s.insertNode(br, true);
            Object(helpers["scrollIntoView"])(br, this.j.editor, this.j.ed);
            return false;
        }
        return true;
    }
    wrapText(current) {
        let needWrap = current;
        dom["a" /* Dom */].up(needWrap, node => {
            if (node && node.hasChildNodes() && node !== this.j.editor) {
                needWrap = node;
            }
        }, this.j.editor);
        const currentBox = dom["a" /* Dom */].wrapInline(needWrap, this.j.o.enter, this.j);
        if (dom["a" /* Dom */].isEmpty(currentBox)) {
            const helper_node = this.j.createInside.element('br');
            currentBox.appendChild(helper_node);
            this.j.s.setCursorBefore(helper_node);
        }
        return currentBox;
    }
    hasPreviousBlock(current) {
        const editor = this.j;
        return Boolean(dom["a" /* Dom */].prev(current, (elm) => dom["a" /* Dom */].isBlock(elm, editor.ew) || dom["a" /* Dom */].isImage(elm, editor.ew), editor.editor));
    }
    checkUnsplittableBox(currentBox) {
        const editor = this.j, sel = editor.selection;
        if (!dom["a" /* Dom */].canSplitBlock(currentBox, editor.ew)) {
            const br = editor.createInside.element('br');
            sel.insertNode(br, false);
            sel.setCursorAfter(br);
            return false;
        }
        return true;
    }
    enterInsideEmptyLIelement(currentBox) {
        let fakeTextNode = null;
        const ul = dom["a" /* Dom */].closest(currentBox, ['ol', 'ul'], this.j.editor);
        if (!ul) {
            return;
        }
        if (!dom["a" /* Dom */].prev(currentBox, (elm) => dom["a" /* Dom */].isTag(elm, 'li'), ul)) {
            fakeTextNode = this.j.s.setCursorBefore(ul);
        }
        else if (!dom["a" /* Dom */].next(currentBox, (elm) => dom["a" /* Dom */].isTag(elm, 'li'), ul)) {
            fakeTextNode = this.j.s.setCursorAfter(ul);
        }
        else {
            const leftRange = this.j.s.createRange();
            leftRange.setStartBefore(ul);
            leftRange.setEndAfter(currentBox);
            const fragment = leftRange.extractContents();
            if (ul.parentNode) {
                ul.parentNode.insertBefore(fragment, ul);
            }
            fakeTextNode = this.j.s.setCursorBefore(ul);
        }
        dom["a" /* Dom */].safeRemove(currentBox);
        insertParagraph(this.j, fakeTextNode, this.defaultTag);
        if (!Object(helpers["$$"])('li', ul).length) {
            dom["a" /* Dom */].safeRemove(ul);
        }
    }
    beforeDestruct(editor) {
        editor.e.off('keydown.enter');
    }
}

// EXTERNAL MODULE: ./src/plugins/error-messages/errors-messages.less
var errors_messages = __webpack_require__(153);

// CONCATENATED MODULE: ./src/plugins/error-messages/error-messages.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config["a" /* Config */].prototype.showMessageErrors = true;
config["a" /* Config */].prototype.showMessageErrorTime = 3000;
config["a" /* Config */].prototype.showMessageErrorOffsetPx = 3;
function errorMessages(editor) {
    if (editor.o.showMessageErrors) {
        let height;
        const messagesBox = editor.c.div('jodit_error_box_for_messages'), recalcOffsets = () => {
            height = 5;
            Array.from(messagesBox.childNodes).forEach((elm) => {
                Object(helpers["css"])(messagesBox, 'bottom', height + 'px');
                height +=
                    elm.offsetWidth + editor.o.showMessageErrorOffsetPx;
            });
        };
        editor.e
            .on('beforeDestruct', () => {
            dom["a" /* Dom */].safeRemove(messagesBox);
        })
            .on('errorMessage', (message, className, timeout) => {
            editor.workplace.appendChild(messagesBox);
            const newmessage = editor.c.div('active ' + (className || ''), message);
            messagesBox.appendChild(newmessage);
            recalcOffsets();
            editor.async.setTimeout(() => {
                newmessage.classList.remove('active');
                editor.async.setTimeout(() => {
                    dom["a" /* Dom */].safeRemove(newmessage);
                    recalcOffsets();
                }, 300);
            }, timeout || editor.o.showMessageErrorTime);
        });
    }
}

// CONCATENATED MODULE: ./src/plugins/font.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



config["a" /* Config */].prototype.controls.fontsize = {
    command: 'fontSize',
    data: {
        cssRule: 'font-size',
        normalize: (v) => v
    },
    list: [
        '8',
        '9',
        '10',
        '11',
        '12',
        '14',
        '16',
        '18',
        '24',
        '30',
        '36',
        '48',
        '60',
        '72',
        '96'
    ],
    exec: (editor, event, { control, button }) => {
        const key = `button${control.command}`;
        const value = (control.args && control.args[0]) || Object(helpers["dataBind"])(editor, key);
        if (Object(helpers["isVoid"])(value)) {
            return false;
        }
        Object(helpers["dataBind"])(editor, key, value);
        editor.execCommand(control.command, false, value || undefined);
    },
    childTemplate: (editor, key, value) => value,
    tooltip: 'Font size',
    isChildActive: (editor, control) => {
        var _a, _b;
        const current = editor.s.current(), cssKey = ((_a = control.data) === null || _a === void 0 ? void 0 : _a.cssRule) || 'font-size', normalize = ((_b = control.data) === null || _b === void 0 ? void 0 : _b.normalize) || ((v) => v);
        if (current) {
            const currentBpx = dom["a" /* Dom */].closest(current, elm => {
                return (dom["a" /* Dom */].isBlock(elm, editor.ew) ||
                    (elm && dom["a" /* Dom */].isElement(elm)));
            }, editor.editor) || editor.editor;
            const value = Object(helpers["css"])(currentBpx, cssKey);
            return Boolean(value &&
                control.args &&
                normalize(control.args[0].toString()) ===
                    normalize(value.toString()));
        }
        return false;
    }
};
config["a" /* Config */].prototype.controls.font = {
    ...config["a" /* Config */].prototype.controls.fontsize,
    command: 'fontname',
    list: {
        '': 'Default',
        'Helvetica,sans-serif': 'Helvetica',
        'Arial,Helvetica,sans-serif': 'Arial',
        'Georgia,serif': 'Georgia',
        'Impact,Charcoal,sans-serif': 'Impact',
        'Tahoma,Geneva,sans-serif': 'Tahoma',
        "'Times New Roman',Times,serif": 'Times New Roman',
        'Verdana,Geneva,sans-serif': 'Verdana'
    },
    childTemplate: (editor, key, value) => {
        return `<span style="font-family: ${key}!important;">${value}</span>`;
    },
    data: {
        cssRule: 'font-family',
        normalize: (v) => {
            return v
                .toLowerCase()
                .replace(/['"]+/g, '')
                .replace(/[^a-z0-9]+/g, ',');
        }
    },
    tooltip: 'Font family'
};
function font_font(editor) {
    const callback = (command, second, third) => {
        switch (command) {
            case 'fontsize':
                editor.s.applyStyle({
                    fontSize: Object(helpers["normalizeSize"])(third)
                });
                break;
            case 'fontname':
                editor.s.applyStyle({
                    fontFamily: third
                });
                break;
        }
        editor.e.fire('synchro');
        return false;
    };
    editor
        .registerCommand('fontsize', callback)
        .registerCommand('fontname', callback);
}

// CONCATENATED MODULE: ./src/plugins/format-block.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



config["a" /* Config */].prototype.controls.paragraph = {
    command: 'formatBlock',
    update(button) {
        const editor = button.j, control = button.control, current = editor.s.current();
        if (current && editor.o.textIcons) {
            const currentBox = dom["a" /* Dom */].closest(current, node => dom["a" /* Dom */].isBlock(node, editor.ew), editor.editor) || editor.editor, currentValue = currentBox.nodeName.toLowerCase(), list = control.list;
            if (button &&
                control.data &&
                control.data.currentValue !== currentValue &&
                list &&
                list[currentValue]) {
                if (editor.o.textIcons) {
                    button.state.text = currentValue;
                }
                else {
                    button.state.icon.name = currentValue;
                }
                control.data.currentValue = currentValue;
            }
        }
        return false;
    },
    exec: (editor, event, { control }) => {
        const key = `button${control.command}`;
        const value = (control.args && control.args[0]) || Object(helpers["dataBind"])(editor, key);
        if (Object(helpers["isVoid"])(value)) {
            return false;
        }
        Object(helpers["dataBind"])(editor, key, value);
        editor.execCommand(control.command, false, value || undefined);
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
    isChildActive: (editor, control) => {
        const current = editor.s.current();
        if (current) {
            const currentBox = dom["a" /* Dom */].closest(current, node => dom["a" /* Dom */].isBlock(node, editor.ew), editor.editor);
            return Boolean(currentBox &&
                currentBox !== editor.editor &&
                control.args !== undefined &&
                currentBox.nodeName.toLowerCase() === control.args[0]);
        }
        return false;
    },
    isActive: (editor, control) => {
        const current = editor.s.current();
        if (current) {
            const currentBpx = dom["a" /* Dom */].closest(current, node => dom["a" /* Dom */].isBlock(node, editor.ew), editor.editor);
            return Boolean(currentBpx &&
                currentBpx !== editor.editor &&
                control.list !== undefined &&
                !dom["a" /* Dom */].isTag(currentBpx, 'p') &&
                control.list[currentBpx.nodeName.toLowerCase()] !== undefined);
        }
        return false;
    },
    childTemplate: (e, key, value) => `<${key} style="margin:0;padding:0"><span>${e.i18n(value)}</span></${key}>`,
    tooltip: 'Insert format block'
};
function formatBlock(editor) {
    editor.registerCommand('formatblock', (command, second, third) => {
        editor.s.applyStyle(undefined, {
            element: third
        });
        editor.setEditorValue();
        return false;
    });
}

// EXTERNAL MODULE: ./src/plugins/fullsize/fullsize.less
var fullsize = __webpack_require__(154);

// CONCATENATED MODULE: ./src/plugins/fullsize/fullsize.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config["a" /* Config */].prototype.fullsize = false;
config["a" /* Config */].prototype.globalFullSize = true;
config["a" /* Config */].prototype.controls.fullsize = {
    exec: (editor) => {
        editor.toggleFullSize();
    },
    update(button) {
        const editor = button.j, mode = editor.isFullSize ? 'shrink' : 'fullsize';
        button.state.activated = editor.isFullSize;
        if (editor.o.textIcons) {
            button.state.text = mode;
        }
        else {
            button.state.icon.name = mode;
        }
    },
    tooltip: 'Open editor in fullsize',
    mode: constants["MODE_SOURCE"] + constants["MODE_WYSIWYG"]
};
function fullsize_fullsize(editor) {
    let shown = false, oldHeight = 0, oldWidth = 0, wasToggled = false;
    const resize = () => {
        if (editor.events) {
            if (shown) {
                oldHeight = Object(helpers["css"])(editor.container, 'height');
                oldWidth = Object(helpers["css"])(editor.container, 'width');
                Object(helpers["css"])(editor.container, {
                    height: editor.ow.innerHeight,
                    width: editor.ow.innerWidth
                });
                wasToggled = true;
            }
            else if (wasToggled) {
                Object(helpers["css"])(editor.container, {
                    height: oldHeight || 'auto',
                    width: oldWidth || 'auto'
                });
            }
        }
    }, toggle = (enable) => {
        var _a;
        if (!editor.container) {
            return;
        }
        if (enable === undefined) {
            enable = !editor.container.classList.contains('jodit_fullsize');
        }
        editor.o.fullsize = enable;
        shown = enable;
        editor.container.classList.toggle('jodit_fullsize', enable);
        if (editor.toolbar) {
            Object(helpers["isJoditObject"])(editor) &&
                editor.toolbarContainer.appendChild(editor.toolbar.container);
            Object(helpers["css"])(editor.toolbar.container, 'width', 'auto');
        }
        if (editor.o.globalFullSize) {
            let node = editor.container.parentNode;
            while (node && node.nodeType !== Node.DOCUMENT_NODE) {
                node.classList.toggle('jodit-fullsize_box', enable);
                node = node.parentNode;
            }
            resize();
        }
        (_a = editor.events) === null || _a === void 0 ? void 0 : _a.fire('afterResize');
    };
    if (editor.o.globalFullSize) {
        editor.e.on(editor.ow, 'resize', resize);
    }
    editor.e
        .on('afterInit afterOpen', () => {
        var _a;
        editor.toggleFullSize((_a = editor === null || editor === void 0 ? void 0 : editor.options) === null || _a === void 0 ? void 0 : _a.fullsize);
    })
        .on('toggleFullSize', toggle)
        .on('beforeDestruct beforeClose', () => {
        toggle(false);
    })
        .on('beforeDestruct', () => {
        editor.events && editor.e.off(editor.ow, 'resize', resize);
    });
}

// CONCATENATED MODULE: ./src/plugins/keyboard/hotkeys.ts




config["a" /* Config */].prototype.commandToHotkeys = {
    removeFormat: ['ctrl+shift+m', 'cmd+shift+m'],
    insertOrderedList: ['ctrl+shift+7', 'cmd+shift+7'],
    insertUnorderedList: ['ctrl+shift+8, cmd+shift+8'],
    selectall: ['ctrl+a', 'cmd+a']
};
class hotkeys_hotkeys extends plugin_Plugin {
    constructor() {
        super(...arguments);
        this.onKeyPress = (event) => {
            const special = this.specialKeys[event.which], character = (event.key || String.fromCharCode(event.which)).toLowerCase();
            const modif = [special || character];
            ['alt', 'ctrl', 'shift', 'meta'].forEach(specialKey => {
                if (event[specialKey + 'Key'] && special !== specialKey) {
                    modif.push(specialKey);
                }
            });
            return Object(helpers["normalizeKeyAliases"])(modif.join('+'));
        };
        this.specialKeys = {
            8: 'backspace',
            9: 'tab',
            10: 'return',
            13: 'return',
            16: 'shift',
            17: 'ctrl',
            18: 'alt',
            19: 'pause',
            20: 'capslock',
            27: 'esc',
            32: 'space',
            33: 'pageup',
            34: 'pagedown',
            35: 'end',
            36: 'home',
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down',
            45: 'insert',
            46: 'del',
            59: ';',
            61: '=',
            91: 'meta',
            96: '0',
            97: '1',
            98: '2',
            99: '3',
            100: '4',
            101: '5',
            102: '6',
            103: '7',
            104: '8',
            105: '9',
            106: '*',
            107: '+',
            109: '-',
            110: '.',
            111: '/',
            112: 'f1',
            113: 'f2',
            114: 'f3',
            115: 'f4',
            116: 'f5',
            117: 'f6',
            118: 'f7',
            119: 'f8',
            120: 'f9',
            121: 'f10',
            122: 'f11',
            123: 'f12',
            144: 'numlock',
            145: 'scroll',
            173: '-',
            186: ';',
            187: '=',
            188: ',',
            189: '-',
            190: '.',
            191: '/',
            192: '`',
            219: '[',
            220: '\\',
            221: ']',
            222: "'"
        };
    }
    afterInit(editor) {
        const commands = Object.keys(editor.o.commandToHotkeys);
        commands.forEach((commandName) => {
            const shortcuts = editor.o.commandToHotkeys[commandName];
            if (shortcuts) {
                editor.registerHotkeyToCommand(shortcuts, commandName);
            }
        });
        let itIsHotkey = false;
        editor.e
            .off('.hotkeys')
            .on([editor.ow, editor.ew], 'keydown.hotkeys', (e) => {
            if (e.key === constants["KEY_ESC"]) {
                return this.j.e.fire('escape', e);
            }
        })
            .on('keydown.hotkeys', (event) => {
            const shortcut = this.onKeyPress(event);
            const resultOfFire = this.j.e.fire(shortcut + '.hotkey', event.type);
            if (resultOfFire === false) {
                itIsHotkey = true;
                editor.e.stopPropagation('keydown');
                return false;
            }
        }, undefined, true)
            .on('keyup.hotkeys', () => {
            if (itIsHotkey) {
                itIsHotkey = false;
                editor.e.stopPropagation('keyup');
                return false;
            }
        }, undefined, true);
    }
    beforeDestruct(jodit) {
        if (jodit.events) {
            jodit.e.off('.hotkeys');
        }
    }
}

// CONCATENATED MODULE: ./src/plugins/iframe.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config["a" /* Config */].prototype.iframeBaseUrl = '';
config["a" /* Config */].prototype.iframeTitle = 'Jodit Editor';
config["a" /* Config */].prototype.iframeDoctype = '<!DOCTYPE html>';
config["a" /* Config */].prototype.iframeDefaultSrc = 'about:blank';
config["a" /* Config */].prototype.iframeStyle =
    'html{' +
        'margin:0;' +
        'padding:0;' +
        'min-height: 100%;' +
        '}' +
        'body{' +
        'box-sizing:border-box;' +
        'font-size:13px;' +
        'line-height:1.6;' +
        'padding:10px;' +
        'margin:0;' +
        'background:transparent;' +
        'color:#000;' +
        'position:' +
        'relative;' +
        'z-index:2;' +
        'user-select:auto;' +
        'margin:0px;' +
        'overflow:auto;' +
        'outline:none;' +
        '}' +
        'table{' +
        'width:100%;' +
        'border:none;' +
        'border-collapse:collapse;' +
        'empty-cells: show;' +
        'max-width: 100%;' +
        '}' +
        'th,td{' +
        'padding: 2px 5px;' +
        'border:1px solid #ccc;' +
        '-webkit-user-select:text;' +
        '-moz-user-select:text;' +
        '-ms-user-select:text;' +
        'user-select:text' +
        '}' +
        'p{' +
        'margin-top:0;' +
        '}' +
        '.jodit_editor .jodit_iframe_wrapper{' +
        'display: block;' +
        'clear: both;' +
        'user-select: none;' +
        'position: relative;' +
        '}' +
        '.jodit_editor .jodit_iframe_wrapper:after {' +
        'position:absolute;' +
        'content:"";' +
        'z-index:1;' +
        'top:0;' +
        'left:0;' +
        'right: 0;' +
        'bottom: 0;' +
        'cursor: pointer;' +
        'display: block;' +
        'background: rgba(0, 0, 0, 0);' +
        '} ' +
        '.jodit_disabled{' +
        'user-select: none;' +
        '-o-user-select: none;' +
        '-moz-user-select: none;' +
        '-khtml-user-select: none;' +
        '-webkit-user-select: none;' +
        '-ms-user-select: none' +
        '}';
config["a" /* Config */].prototype.iframeCSSLinks = [];
config["a" /* Config */].prototype.editHTMLDocumentMode = false;
function iframe_iframe(editor) {
    const opt = editor.options;
    editor.e
        .on('afterSetMode', () => {
        if (editor.isEditorMode()) {
            editor.s.focus();
        }
    })
        .on('generateDocumentStructure.iframe', (__doc, jodit) => {
        const doc = __doc ||
            jodit.iframe
                .contentWindow.document;
        doc.open();
        doc.write(opt.iframeDoctype +
            `<html dir="${opt.direction}" class="jodit" lang="${Object(helpers["defaultLanguage"])(opt.language)}">` +
            '<head>' +
            `<title>${opt.iframeTitle}</title>` +
            (opt.iframeBaseUrl
                ? `<base href="${opt.iframeBaseUrl}"/>`
                : '') +
            '</head>' +
            '<body class="jodit-wysiwyg"></body>' +
            '</html>');
        doc.close();
        if (opt.iframeCSSLinks) {
            opt.iframeCSSLinks.forEach(href => {
                const link = doc.createElement('link');
                link.setAttribute('rel', 'stylesheet');
                link.setAttribute('href', href);
                doc.head && doc.head.appendChild(link);
            });
        }
        if (opt.iframeStyle) {
            const style = doc.createElement('style');
            style.innerHTML = opt.iframeStyle;
            doc.head && doc.head.appendChild(style);
        }
    })
        .on('createEditor', () => {
        if (!opt.iframe) {
            return;
        }
        const iframe = editor.c.element('iframe');
        iframe.style.display = 'block';
        iframe.src = 'about:blank';
        iframe.className = 'jodit-wysiwyg_iframe';
        iframe.setAttribute('allowtransparency', 'true');
        iframe.setAttribute('tabindex', opt.tabIndex.toString());
        iframe.setAttribute('frameborder', '0');
        editor.workplace.appendChild(iframe);
        editor.iframe = iframe;
        const result = editor.e.fire('generateDocumentStructure.iframe', null, editor);
        const init = () => {
            if (!editor.iframe) {
                return;
            }
            const doc = editor.iframe.contentWindow.document;
            editor.editorWindow = editor.iframe.contentWindow;
            const docMode = opt.editHTMLDocumentMode;
            const toggleEditable = () => {
                Object(helpers["attr"])(doc.body, 'contenteditable', (editor.getMode() !== constants["MODE_SOURCE"] &&
                    !editor.getReadOnly()) ||
                    null);
            };
            const clearMarkers = (html) => {
                const bodyReg = /<body.*<\/body>/im, bodyMarker = '{%%BODY%%}', body = bodyReg.exec(html);
                if (body) {
                    html = html
                        .replace(bodyReg, bodyMarker)
                        .replace(/<span([^>]*?)>(.*?)<\/span>/gim, '')
                        .replace(/&lt;span([^&]*?)&gt;(.*?)&lt;\/span&gt;/gim, '')
                        .replace(bodyMarker, body[0]
                        .replace(/(<body[^>]+?)min-height["'\s]*:[\s"']*[0-9]+(px|%)/im, '$1')
                        .replace(/(<body[^>]+?)([\s]*["'])?contenteditable["'\s]*=[\s"']*true["']?/im, '$1')
                        .replace(/<(style|script|span)[^>]+jodit[^>]+>.*?<\/\1>/g, ''))
                        .replace(/(class\s*=\s*)(['"])([^"']*)(jodit-wysiwyg|jodit)([^"']*\2)/g, '$1$2$3$5')
                        .replace(/(<[^<]+?)\sclass="[\s]*"/gim, '$1')
                        .replace(/(<[^<]+?)\sstyle="[\s;]*"/gim, '$1')
                        .replace(/(<[^<]+?)\sdir="[\s]*"/gim, '$1');
                }
                return html;
            };
            if (docMode) {
                const tag = editor.element.tagName;
                if (tag !== 'TEXTAREA' && tag !== 'INPUT') {
                    throw Object(helpers["error"])('If enable `editHTMLDocumentMode` - source element should be INPUT or TEXTAREA');
                }
                editor.e
                    .on('beforeGetNativeEditorValue', () => clearMarkers(editor.o.iframeDoctype +
                    doc.documentElement.outerHTML))
                    .on('beforeSetNativeEditorValue', (value) => {
                    if (editor.isLocked) {
                        return false;
                    }
                    if (/<(html|body)/i.test(value)) {
                        const old = doc.documentElement.outerHTML;
                        if (clearMarkers(old) !==
                            clearMarkers(value)) {
                            doc.open();
                            doc.write(editor.o.iframeDoctype +
                                clearMarkers(value));
                            doc.close();
                            editor.editor = doc.body;
                            toggleEditable();
                        }
                    }
                    else {
                        doc.body.innerHTML = value;
                    }
                    return true;
                });
            }
            editor.editor = doc.body;
            editor.e.on('afterSetMode afterInit afterAddPlace', toggleEditable);
            if (opt.height === 'auto') {
                doc.documentElement &&
                    (doc.documentElement.style.overflowY = 'hidden');
                const resizeIframe = editor.async.throttle(() => {
                    if (editor.editor &&
                        editor.iframe &&
                        opt.height === 'auto') {
                        Object(helpers["css"])(editor.iframe, 'height', editor.editor.offsetHeight);
                    }
                }, editor.defaultTimeout / 2);
                editor.e
                    .on('change afterInit afterSetMode resize', resizeIframe)
                    .on([editor.iframe, editor.ew, doc.documentElement], 'load', resizeIframe)
                    .on(doc, 'readystatechange DOMContentLoaded', resizeIframe);
            }
            if (doc.documentElement) {
                editor.e
                    .on(doc.documentElement, 'mousedown touchend', () => {
                    if (!editor.s.isFocused()) {
                        editor.s.focus();
                        if (editor.editor === doc.body) {
                            editor.s.setCursorIn(doc.body);
                        }
                    }
                })
                    .on(editor.ew, 'mousedown touchstart keydown keyup touchend click mouseup mousemove scroll', (e) => {
                    var _a;
                    (_a = editor.events) === null || _a === void 0 ? void 0 : _a.fire(editor.ow, e);
                });
            }
        };
        if (Object(helpers["isPromise"])(result)) {
            return result.then(init);
        }
        init();
        return false;
    });
}

// EXTERNAL MODULE: ./src/plugins/image/image-properties/image-properties.less
var image_properties = __webpack_require__(155);

// CONCATENATED MODULE: ./src/plugins/image/image-properties/templates/form.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function templates_form_form(editor) {
    const { showPreview, editSize } = editor.o.image, gi = ui["b" /* Icon */].get.bind(ui["b" /* Icon */]);
    return editor.c.fromHTML(`<form class="jodit-properties">
		<div class="jodit-grid jodit-grid_xs-column">
			<div class="jodit_col-lg-2-5 jodit_col-xs-5-5">
				<div class="jodit-properties_view_box">
					<div style="${!showPreview ? 'display:none' : ''}" class="jodit-properties_image_view">
						<img data-ref="imageViewSrc" src="" alt=""/>
					</div>
					<div style="${!editSize ? 'display:none' : ''}" class="jodit-form__group jodit-properties_image_sizes">
						<input data-ref="imageWidth" type="number" class="jodit-input"/>
						<a data-ref="lockSize" class="jodit-properties__lock">${gi('lock')}</a>
						<input data-ref="imageHeight" type="number" class="imageHeight jodit-input"/>
					</div>
				</div>
			</div>
			<div data-ref="tabsBox" class="jodit_col-lg-3-5 jodit_col-xs-5-5"></div>
		</div>
	</form>`);
}

// CONCATENATED MODULE: ./src/plugins/image/image-properties/templates/mainTab.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function mainTab(editor) {
    const opt = editor.o, i18n = editor.i18n.bind(editor), gi = ui["b" /* Icon */].get.bind(ui["b" /* Icon */]), hasFbUrl = opt.filebrowser.ajax.url || opt.uploader.url, hasEditor = opt.image.useImageEditor;
    return editor.c.fromHTML(`<div style="${!opt.image.editSrc ? 'display:none' : ''}" class="jodit-form__group">
			<label>${i18n('Src')}</label>
			<div class="jodit-input_group">
				<input data-ref="imageSrc" class="jodit-input" type="text"/>
				<div
					class="jodit-input_group-buttons"
					style="${hasFbUrl ? '' : 'display: none'}"
				>
						<a
							data-ref="changeImage"
							class="jodit-button"
						>${gi('image')}</a>
						<a
							data-ref="editImage"
							class="jodit-button"
							style="${hasEditor ? '' : 'display: none'}"
						>${gi('crop')}</a>
				</div>
			</div>
		</div>
		<div style="${!opt.image.editTitle ? 'display:none' : ''}" class="jodit-form__group">
			<label>${i18n('Title')}</label>
			<input data-ref="imageTitle" type="text" class="jodit-input"/>
		</div>
		<div style="${!opt.image.editAlt ? 'display:none' : ''}" class="jodit-form__group">
			<label>${i18n('Alternative')}</label>
			<input data-ref="imageAlt" type="text" class="jodit-input"/>
		</div>
		<div style="${!opt.image.editLink ? 'display:none' : ''}" class="jodit-form__group">
			<label>${i18n('Link')}</label>
			<input data-ref="imageLink" type="text" class="jodit-input"/>
		</div>
		<div style="${!opt.image.editLink ? 'display:none' : ''}" class="jodit-form__group">
			<label class="jodit_vertical_middle">
				<input data-ref="imageLinkOpenInNewTab" type="checkbox" class="jodit-checkbox"/>
				<span>${i18n('Open link in new tab')}</span>
			</label>
		</div>`);
}

// CONCATENATED MODULE: ./src/plugins/image/image-properties/templates/positionTab.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function positionTab(editor) {
    const opt = editor.o, i18n = editor.i18n.bind(editor), gi = ui["b" /* Icon */].get.bind(ui["b" /* Icon */]);
    return editor.c.fromHTML(`<div style="${!opt.image.editMargins ? 'display:none' : ''}" class="jodit-form__group">
			<label>${i18n('Margins')}</label>
			<div class="jodit-grid jodit_vertical_middle">
				<input class="jodit_col-lg-1-5 jodit-input" data-ref="marginTop" type="text" placeholder="${i18n('top')}"/>
				<a style="text-align: center;" data-ref="lockMargin" class="jodit-properties__lock jodit_col-lg-1-5">${gi('lock')}</a>
				<input disabled="true" class="jodit_col-lg-1-5 jodit-input" data-ref="marginRight" type="text" placeholder="${i18n('right')}"/>
				<input disabled="true" class="jodit_col-lg-1-5 jodit-input" data-ref="marginBottom" type="text" placeholder="${i18n('bottom')}"/>
				<input disabled="true" class="jodit_col-lg-1-5 jodit-input" data-ref="marginLeft" type="text" placeholder="${i18n('left')}"/>
			</div>
		</div>
		<div style="${!opt.image.editStyle ? 'display:none' : ''}" class="jodit-form__group">
			<label>${i18n('Styles')}</label>
			<input data-ref="style" type="text" class="jodit-input"/>
		</div>
		<div style="${!opt.image.editClass ? 'display:none' : ''}" class="jodit-form__group">
			<label>${i18n('Classes')}</label>
			<input data-ref="classes" type="text" class="jodit-input"/>
		</div>
		<div style="${!opt.image.editId ? 'display:none' : ''}" class="jodit-form__group">
			<label>Id</label>
			<input data-ref="id" type="text" class="jodit-input"/>
		</div>
		<div
			style="${!opt.image.editBorderRadius ? 'display:none' : ''}"
			class="jodit-form__group"
		>
			<label>${i18n('Border radius')}</label>
				<input data-ref="borderRadius" type="number" class="jodit-input"/>
		</div>
		<div
			style="${!opt.image.editAlign ? 'display:none' : ''}"
			class="jodit-form__group"
		>
			<label>${i18n('Align')}</label>
			<select data-ref="align" class="jodit-select">
				<option value="">${i18n('--Not Set--')}</option>
				<option value="left">${i18n('Left')}</option>
				<option value="center">${i18n('Center')}</option>
				<option value="right">${i18n('Right')}</option>
			</select>
		</div>`);
}

// CONCATENATED MODULE: ./src/plugins/image/image-properties/templates/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




// CONCATENATED MODULE: ./src/plugins/image/image-properties/image-properties.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */










config["a" /* Config */].prototype.image = {
    dialogWidth: 600,
    openOnDblClick: true,
    editSrc: true,
    useImageEditor: true,
    editTitle: true,
    editAlt: true,
    editLink: true,
    editSize: true,
    editBorderRadius: true,
    editMargins: true,
    editClass: true,
    editStyle: true,
    editId: true,
    editAlign: true,
    showPreview: true,
    selectImageAfterClose: true
};
class image_properties_imageProperties extends plugin_Plugin {
    constructor() {
        super(...arguments);
        this.state = {
            image: new Image(),
            get ratio() {
                return this.image.naturalWidth / this.image.naturalHeight || 1;
            },
            sizeIsLocked: true,
            marginIsLocked: true
        };
    }
    onChangeMarginIsLocked() {
        if (!this.form) {
            return;
        }
        const { marginRight, marginBottom, marginLeft, lockMargin } = Object(helpers["refs"])(this.form);
        [marginRight, marginBottom, marginLeft].forEach(elm => {
            Object(helpers["attr"])(elm, 'disabled', this.state.marginIsLocked || null);
        });
        lockMargin.innerHTML = icon["a" /* Icon */].get(this.state.marginIsLocked ? 'lock' : 'unlock');
    }
    open() {
        this.makeForm();
        this.j.e.fire('hidePopup');
        Object(helpers["markOwner"])(this.j, this.dialog.container);
        this.state.marginIsLocked = true;
        this.state.sizeIsLocked = true;
        this.updateValues();
        this.dialog
            .open()
            .setModal(true)
            .setPosition();
        return false;
    }
    makeForm() {
        if (this.dialog) {
            return;
        }
        this.dialog = new dialog_Dialog({
            fullsize: this.j.o.fullsize,
            globalFullSize: this.j.o.globalFullSize,
            language: this.j.o.language,
            buttons: ['fullsize', 'dialog.close']
        });
        const editor = this.j, opt = editor.o, i18n = editor.i18n.bind(editor), buttons = {
            check: Object(ui_button["a" /* Button */])(editor, 'ok', 'Apply'),
            remove: Object(ui_button["a" /* Button */])(editor, 'bin', 'Delete')
        };
        editor.e.on(this.dialog, 'afterClose', () => {
            if (this.state.image.parentNode &&
                opt.image.selectImageAfterClose) {
                editor.s.select(this.state.image);
            }
        });
        buttons.remove.onAction(() => {
            editor.s.removeNode(this.state.image);
            this.dialog.close();
        });
        const { dialog } = this;
        dialog.setHeader(i18n('Image properties'));
        const mainForm = templates_form_form(editor);
        this.form = mainForm;
        dialog.setContent(mainForm);
        const { tabsBox } = Object(helpers["refs"])(this.form);
        if (tabsBox) {
            tabsBox.appendChild(Object(widget["c" /* TabsWidget */])(editor, [
                { name: 'Image', content: mainTab(editor) },
                { name: 'Advanced', content: positionTab(editor) }
            ]));
        }
        buttons.check.onAction(this.onApply);
        const { changeImage, editImage } = Object(helpers["refs"])(this.form);
        editor.e.on(changeImage, 'click', this.openImagePopup);
        if (opt.image.useImageEditor) {
            editor.e.on(editImage, 'click', this.openImageEditor);
        }
        const { lockSize, lockMargin, imageWidth, imageHeight } = Object(helpers["refs"])(mainForm);
        if (lockSize) {
            editor.e.on(lockSize, 'click', () => {
                this.state.sizeIsLocked = !this.state.sizeIsLocked;
                lockSize.innerHTML = icon["a" /* Icon */].get(this.state.sizeIsLocked ? 'lock' : 'unlock');
                editor.e.fire(imageWidth, 'change');
            });
        }
        editor.e.on(lockMargin, 'click', () => {
            this.state.marginIsLocked = !this.state.marginIsLocked;
        });
        const changeSizes = (event) => {
            const w = parseInt(imageWidth.value, 10), h = parseInt(imageHeight.value, 10);
            if (event.target === imageWidth) {
                imageHeight.value = Math.round(w / this.state.ratio).toString();
            }
            else {
                imageWidth.value = Math.round(h * this.state.ratio).toString();
            }
        };
        editor.e.on([imageWidth, imageHeight], 'change keydown mousedown paste', (event) => {
            if (!this.state.sizeIsLocked) {
                return;
            }
            editor.async.setTimeout(changeSizes.bind(this, event), {
                timeout: editor.defaultTimeout,
                label: 'image-properties-changeSize'
            });
        });
        dialog.setFooter([buttons.remove, buttons.check]);
        dialog.setSize(this.j.o.image.dialogWidth);
    }
    updateValues() {
        const opt = this.j.o;
        const { image } = this.state;
        const { marginTop, marginRight, marginBottom, marginLeft, lockMargin, imageSrc, id, classes, align, style, imageTitle, imageAlt, borderRadius, imageLink, imageWidth, imageHeight, imageLinkOpenInNewTab, imageViewSrc, lockSize } = Object(helpers["refs"])(this.form);
        const updateLock = () => {
            lockMargin.checked = this.state.marginIsLocked;
            lockSize.checked = this.state.sizeIsLocked;
        }, updateAlign = () => {
            if (image.style.cssFloat &&
                ['left', 'right'].indexOf(image.style.cssFloat.toLowerCase()) !== -1) {
                align.value = Object(helpers["css"])(image, 'float');
            }
            else {
                if (Object(helpers["css"])(image, 'display') === 'block' &&
                    image.style.marginLeft === 'auto' &&
                    image.style.marginRight === 'auto') {
                    align.value = 'center';
                }
            }
        }, updateBorderRadius = () => {
            borderRadius.value = (parseInt(image.style.borderRadius || '0', 10) || '0').toString();
        }, updateId = () => {
            id.value = Object(helpers["attr"])(image, 'id') || '';
        }, updateStyle = () => {
            style.value = Object(helpers["attr"])(image, 'style') || '';
        }, updateClasses = () => {
            classes.value = (Object(helpers["attr"])(image, 'class') || '').replace(/jodit_focused_image[\s]*/, '');
        }, updateMargins = () => {
            if (!opt.image.editMargins) {
                return;
            }
            let equal = true, wasEmptyField = false;
            [marginTop, marginRight, marginBottom, marginLeft].forEach(elm => {
                const id = Object(helpers["attr"])(elm, 'data-ref') || '';
                let value = image.style.getPropertyValue(Object(helpers["kebabCase"])(id));
                if (!value) {
                    wasEmptyField = true;
                    elm.value = '';
                    return;
                }
                if (/^[0-9]+(px)?$/.test(value)) {
                    value = parseInt(value, 10);
                }
                elm.value = value.toString() || '';
                if ((wasEmptyField && elm.value) ||
                    (equal &&
                        id !== 'marginTop' &&
                        elm.value !== marginTop.value)) {
                    equal = false;
                }
            });
            this.state.marginIsLocked = equal;
        }, updateSizes = () => {
            imageWidth.value = image.offsetWidth.toString();
            imageHeight.value = image.offsetHeight.toString();
        }, updateText = () => {
            if (image.hasAttribute('title')) {
                imageTitle.value = Object(helpers["attr"])(image, 'title') || '';
            }
            if (image.hasAttribute('alt')) {
                imageAlt.value = Object(helpers["attr"])(image, 'alt') || '';
            }
            const a = dom["a" /* Dom */].closest(image, 'a', this.j.editor);
            if (a) {
                imageLink.value = Object(helpers["attr"])(a, 'href') || '';
                imageLinkOpenInNewTab.checked =
                    Object(helpers["attr"])(a, 'target') === '_blank';
            }
        }, updateSrc = () => {
            imageSrc.value = Object(helpers["attr"])(image, 'src') || '';
            if (imageViewSrc) {
                Object(helpers["attr"])(imageViewSrc, 'src', Object(helpers["attr"])(image, 'src') || '');
            }
        };
        updateLock();
        updateSrc();
        updateText();
        updateSizes();
        updateMargins();
        updateClasses();
        updateId();
        updateBorderRadius();
        updateAlign();
        updateStyle();
    }
    onApply() {
        const { style, imageSrc, borderRadius, imageTitle, imageAlt, imageLink, imageWidth, imageHeight, marginTop, marginRight, marginBottom, marginLeft, imageLinkOpenInNewTab, align, classes, id } = Object(helpers["refs"])(this.form);
        const opt = this.j.o;
        const { image } = this.state;
        if (opt.image.editStyle) {
            Object(helpers["attr"])(image, 'style', style.value || null);
        }
        if (imageSrc.value) {
            Object(helpers["attr"])(image, 'src', imageSrc.value);
        }
        else {
            dom["a" /* Dom */].safeRemove(image);
            this.dialog.close();
            return;
        }
        if (borderRadius.value !== '0' && /^[0-9]+$/.test(borderRadius.value)) {
            image.style.borderRadius = borderRadius.value + 'px';
        }
        else {
            image.style.borderRadius = '';
        }
        Object(helpers["attr"])(image, 'title', imageTitle.value || null);
        Object(helpers["attr"])(image, 'alt', imageAlt.value || null);
        let link = dom["a" /* Dom */].closest(image, 'a', this.j.editor);
        if (imageLink.value) {
            if (!link) {
                link = dom["a" /* Dom */].wrap(image, 'a', this.j);
            }
            Object(helpers["attr"])(link, 'href', imageLink.value);
            Object(helpers["attr"])(link, 'target', imageLinkOpenInNewTab.checked ? '_blank' : null);
        }
        else {
            if (link && link.parentNode) {
                link.parentNode.replaceChild(image, link);
            }
        }
        const normalSize = (value) => {
            value = Object(helpers["trim"])(value);
            return /^[0-9]+$/.test(value) ? value + 'px' : value;
        };
        if (imageWidth.value !== image.offsetWidth.toString() ||
            imageHeight.value !== image.offsetHeight.toString()) {
            Object(helpers["css"])(image, {
                width: Object(helpers["trim"])(imageWidth.value)
                    ? normalSize(imageWidth.value)
                    : null,
                height: Object(helpers["trim"])(imageHeight.value)
                    ? normalSize(imageHeight.value)
                    : null
            });
        }
        const margins = [marginTop, marginRight, marginBottom, marginLeft];
        if (opt.image.editMargins) {
            if (!this.state.marginIsLocked) {
                margins.forEach((margin) => {
                    const side = Object(helpers["attr"])(margin, 'data-ref') || '';
                    Object(helpers["css"])(image, side, normalSize(margin.value));
                });
            }
            else {
                Object(helpers["css"])(image, 'margin', normalSize(marginTop.value));
            }
        }
        if (opt.image.editClass) {
            Object(helpers["attr"])(image, 'class', classes.value || null);
        }
        if (opt.image.editId) {
            Object(helpers["attr"])(image, 'id', id.value || null);
        }
        if (opt.image.editAlign) {
            if (align.value) {
                if (['right', 'left'].includes(align.value.toLowerCase())) {
                    Object(helpers["css"])(image, 'float', align.value);
                    Object(helpers["clearCenterAlign"])(image);
                }
                else {
                    Object(helpers["css"])(image, {
                        float: '',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    });
                }
            }
            else {
                if (Object(helpers["css"])(image, 'float') &&
                    ['right', 'left'].indexOf(Object(helpers["css"])(image, 'float')
                        .toString()
                        .toLowerCase()) !== -1) {
                    Object(helpers["css"])(image, 'float', '');
                }
                Object(helpers["clearCenterAlign"])(image);
            }
        }
        this.j.setEditorValue();
        this.dialog.close();
    }
    openImageEditor() {
        const url = Object(helpers["attr"])(this.state.image, 'src') || '', a = this.j.c.element('a'), loadExternal = () => {
            if (a.host !== location.host) {
                Confirm(this.j.i18n('You can only edit your own images. Download this image on the host?'), (yes) => {
                    if (yes && this.j.uploader) {
                        this.j.uploader.uploadRemoteImage(a.href.toString(), (resp) => {
                            Alert(this.j.i18n('The image has been successfully uploaded to the host!'), () => {
                                if (Object(helpers["isString"])(resp.newfilename)) {
                                    Object(helpers["attr"])(this.state.image, 'src', resp.baseurl +
                                        resp.newfilename);
                                    this.updateValues();
                                }
                            }).bindDestruct(this.j);
                        }, (error) => {
                            Alert(this.j.i18n('There was an error loading %s', error.message)).bindDestruct(this.j);
                        });
                    }
                }).bindDestruct(this.j);
                return;
            }
        };
        a.href = url;
        this.j.filebrowser.dataProvider.getPathByUrl(a.href.toString(), (path, name, source) => {
            this.j.filebrowser.openImageEditor(a.href, name, path, source, () => {
                const timestamp = new Date().getTime();
                Object(helpers["attr"])(this.state.image, 'src', url +
                    (url.indexOf('?') !== -1 ? '' : '?') +
                    '&_tmp=' +
                    timestamp.toString());
                this.updateValues();
            }, (error) => {
                Alert(error.message).bindDestruct(this.j);
            });
        }, (error) => {
            Alert(error.message, loadExternal).bindDestruct(this.j);
        });
    }
    openImagePopup(event) {
        const popup = new ui["c" /* Popup */](this.j), { changeImage } = Object(helpers["refs"])(this.form);
        popup
            .setContent(Object(widget["b" /* FileSelectorWidget */])(this.j, {
            upload: (data) => {
                if (data.files && data.files.length) {
                    Object(helpers["attr"])(this.state.image, 'src', data.baseurl + data.files[0]);
                }
                this.updateValues();
                popup.close();
            },
            filebrowser: (data) => {
                if (data &&
                    Object(helpers["isArray"])(data.files) &&
                    data.files.length) {
                    Object(helpers["attr"])(this.state.image, 'src', data.files[0]);
                    popup.close();
                    this.updateValues();
                }
            }
        }, this.state.image, popup.close))
            .open(() => Object(helpers["position"])(changeImage));
        event.stopPropagation();
    }
    afterInit(editor) {
        const self = this;
        editor.e
            .on('afterConstructor changePlace', () => {
            editor.e
                .off(editor.editor, '.imageproperties')
                .on(editor.editor, 'dblclick.imageproperties', (e) => {
                const image = e.target;
                if (!dom["a" /* Dom */].isTag(image, 'img')) {
                    return;
                }
                if (editor.o.image.openOnDblClick) {
                    self.state.image = image;
                    if (!editor.o.readonly) {
                        e.stopImmediatePropagation();
                        e.preventDefault();
                        self.open();
                    }
                }
                else {
                    e.stopImmediatePropagation();
                    editor.s.select(image);
                }
            });
        })
            .on('openImageProperties.imageproperties', (image) => {
            this.state.image = image;
            this.open();
        });
    }
    beforeDestruct(editor) {
        this.dialog && this.dialog.destruct();
        editor.e.off(editor.editor, '.imageproperties').off('.imageproperties');
    }
}
Object(tslib_es6["a" /* __decorate */])([
    Object(decorators["watch"])('state.marginIsLocked')
], image_properties_imageProperties.prototype, "onChangeMarginIsLocked", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], image_properties_imageProperties.prototype, "onApply", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], image_properties_imageProperties.prototype, "openImageEditor", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], image_properties_imageProperties.prototype, "openImagePopup", null);

// CONCATENATED MODULE: ./src/plugins/image/image-processor.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const JODIT_IMAGE_PROCESSOR_BINDED = '__jodit_imageprocessor_binded';
function imageProcessor(editor) {
    editor.e.on('change afterInit changePlace', editor.async.debounce(() => {
        if (editor.editor) {
            Object(helpers["$$"])('img', editor.editor).forEach((elm) => {
                if (!elm[JODIT_IMAGE_PROCESSOR_BINDED]) {
                    elm[JODIT_IMAGE_PROCESSOR_BINDED] = true;
                    if (!elm.complete) {
                        elm.addEventListener('load', function ElementOnLoad() {
                            editor.events &&
                                editor.e.fire &&
                                editor.e.fire('resize');
                            elm.removeEventListener('load', ElementOnLoad);
                        });
                    }
                    editor.e.on(elm, 'mousedown touchstart', () => {
                        editor.s.select(elm);
                    });
                }
            });
        }
    }, editor.defaultTimeout));
}

// CONCATENATED MODULE: ./src/plugins/image/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



// CONCATENATED MODULE: ./src/plugins/indent.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config["a" /* Config */].prototype.controls.indent = {
    tooltip: 'Increase Indent'
};
const getKey = (direction) => direction === 'rtl' ? 'marginRight' : 'marginLeft';
config["a" /* Config */].prototype.controls.outdent = {
    isDisabled: (editor) => {
        const current = editor.s.current();
        if (current) {
            const currentBox = dom["a" /* Dom */].closest(current, node => dom["a" /* Dom */].isBlock(node, editor.ew), editor.editor);
            const key = getKey(editor.o.direction);
            if (currentBox && currentBox.style && currentBox.style[key]) {
                return parseInt(currentBox.style[key], 10) <= 0;
            }
        }
        return true;
    },
    tooltip: 'Decrease Indent'
};
config["a" /* Config */].prototype.indentMargin = 10;
function indent(editor) {
    const key = getKey(editor.o.direction);
    const callback = (command) => {
        const indentedBoxes = [];
        editor.s.eachSelection((current) => {
            const selectionInfo = editor.s.save();
            let currentBox = current
                ? dom["a" /* Dom */].up(current, node => dom["a" /* Dom */].isBlock(node, editor.ew), editor.editor)
                : false;
            const enter = editor.o.enter;
            if (!currentBox && current) {
                currentBox = dom["a" /* Dom */].wrapInline(current, enter !== constants["BR"] ? enter : constants["PARAGRAPH"], editor);
            }
            if (!currentBox) {
                editor.s.restore(selectionInfo);
                return false;
            }
            const alreadyIndented = indentedBoxes.indexOf(currentBox) !== -1;
            if (currentBox && currentBox.style && !alreadyIndented) {
                indentedBoxes.push(currentBox);
                let value = currentBox.style[key]
                    ? parseInt(currentBox.style[key], 10)
                    : 0;
                value +=
                    editor.o.indentMargin * (command === 'outdent' ? -1 : 1);
                currentBox.style[key] = value > 0 ? value + 'px' : '';
                if (!Object(helpers["attr"])(currentBox, 'style')) {
                    currentBox.removeAttribute('style');
                }
            }
            editor.s.restore(selectionInfo);
        });
        editor.setEditorValue();
        return false;
    };
    editor.registerCommand('indent', {
        exec: callback,
        hotkeys: ['ctrl+]', 'cmd+]']
    });
    editor.registerCommand('outdent', {
        exec: callback,
        hotkeys: ['ctrl+[', 'cmd+[']
    });
}

// EXTERNAL MODULE: ./src/plugins/inline-popup/inline-popup.less
var inline_popup = __webpack_require__(156);

// CONCATENATED MODULE: ./src/plugins/inline-popup/config/config.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

config["a" /* Config */].prototype.toolbarInline = true;
config["a" /* Config */].prototype.toolbarInlineForSelection = false;
config["a" /* Config */].prototype.toolbarInlineDisableFor = [];
config["a" /* Config */].prototype.popup = {
    a: __webpack_require__(157).default,
    img: __webpack_require__(158).default,
    cells: __webpack_require__(159).default,
    jodit: [
        {
            name: 'bin',
            tooltip: 'Delete',
            exec: (editor, image) => {
                image && editor.s.removeNode(image);
            }
        }
    ],
    'jodit-media': [
        {
            name: 'bin',
            tooltip: 'Delete',
            exec: (editor, image) => {
                image && editor.s.removeNode(image);
            }
        }
    ],
    selection: [
        'bold',
        'underline',
        'italic',
        'ul',
        'ol',
        '\n',
        'outdent',
        'indent',
        'fontsize',
        'brush',
        'cut',
        '\n',
        'paragraph',
        'link',
        'align',
        'dots'
    ]
};

// CONCATENATED MODULE: ./src/plugins/inline-popup/inline-popup.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */










class inline_popup_inlinePopup extends plugin_Plugin {
    constructor() {
        super(...arguments);
        this.type = null;
        this.popup = new ui_popup["a" /* Popup */](this.jodit);
        this.toolbar = makeCollection(this.jodit, this.popup);
    }
    onClick(e) {
        const node = e.target, elements = Object.keys(this.j.o.popup), target = dom["a" /* Dom */].isTag(node, 'img')
            ? node
            : dom["a" /* Dom */].closest(node, elements, this.j.editor);
        if (target && this.canShowPopupForType(target.nodeName.toLowerCase())) {
            this.showPopup(() => Object(helpers["position"])(target, this.j), target.nodeName.toLowerCase(), target);
        }
    }
    onSelectionChange() {
        if (!this.j.o.toolbarInlineForSelection) {
            return;
        }
        const type = 'selection', sel = this.j.s.sel, range = this.j.s.range;
        if (sel === null || sel === void 0 ? void 0 : sel.isCollapsed) {
            if (this.type === type && this.popup.isOpened) {
                this.hidePopup();
            }
            return;
        }
        const node = this.j.s.current();
        if (!node) {
            return;
        }
        this.showPopup(() => range.getBoundingClientRect(), type);
    }
    showPopup(rect, type, target) {
        type = type.toLowerCase();
        if (!this.canShowPopupForType(type)) {
            return false;
        }
        if (this.type !== type) {
            const data = this.j.o.popup[type];
            this.toolbar.buttonSize = this.j.o.toolbarButtonSize;
            this.toolbar.build(data, target);
            this.popup.setContent(this.toolbar.container);
            this.type = type;
        }
        this.popup.open(rect);
        return true;
    }
    hidePopup() {
        this.popup.close();
    }
    canShowPopupForType(type) {
        const data = this.j.o.popup[type.toLowerCase()];
        if (this.j.o.readonly || !this.j.o.toolbarInline || !data) {
            return false;
        }
        return !this.isExcludedTarget(type);
    }
    isExcludedTarget(type) {
        return Object(helpers["splitArray"])(this.j.o.toolbarInlineDisableFor)
            .map(a => a.toLowerCase())
            .includes(type.toLowerCase());
    }
    afterInit(jodit) {
        this.j.e
            .on('getDiffButtons.mobile', (toolbar) => {
            if (this.toolbar === toolbar) {
                return Object(helpers["splitArray"])(jodit.o.buttons).filter(item => {
                    const name = Object(helpers["isString"])(item) ? item : item.name;
                    return (name &&
                        name !== '|' &&
                        name !== '\n' &&
                        !this.toolbar.getButtonsNames().includes(name));
                });
            }
        })
            .on('hidePopup', this.hidePopup)
            .on('showPopup', (elm, rect, type) => {
            this.showPopup(rect, type || (Object(helpers["isString"])(elm) ? elm : elm.nodeName), Object(helpers["isString"])(elm) ? undefined : elm);
        })
            .on('click', this.onClick)
            .on(this.j.ed, 'selectionchange', this.onSelectionChange);
    }
    beforeDestruct(jodit) {
        this.j.e
            .off('showPopup')
            .off('click', this.onClick)
            .off(this.j.ed, 'selectionchange', this.onSelectionChange);
    }
}
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], inline_popup_inlinePopup.prototype, "onClick", null);
Object(tslib_es6["a" /* __decorate */])([
    Object(decorators["debounce"])(ctx => ctx.defaultTimeout * 5)
], inline_popup_inlinePopup.prototype, "onSelectionChange", null);
Object(tslib_es6["a" /* __decorate */])([
    Object(decorators["wait"])((ctx) => !ctx.j.isLocked)
], inline_popup_inlinePopup.prototype, "showPopup", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], inline_popup_inlinePopup.prototype, "hidePopup", null);

// CONCATENATED MODULE: ./src/plugins/justify.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



config["a" /* Config */].prototype.controls.align = {
    name: 'left',
    tooltip: 'Align',
    update(button) {
        const editor = button.j, control = button.control, current = editor.s.current();
        if (current) {
            const currentBox = dom["a" /* Dom */].closest(current, node => dom["a" /* Dom */].isBlock(node, editor.ew), editor.editor) || editor.editor;
            let currentValue = Object(helpers["css"])(currentBox, 'text-align').toString();
            if (control.defaultValue &&
                control.defaultValue.indexOf(currentValue) !== -1) {
                currentValue = 'left';
            }
            if (control.data &&
                control.data.currentValue !== currentValue &&
                control.list &&
                control.list.indexOf(currentValue) !== -1) {
                if (editor.o.textIcons) {
                    button.state.text = currentValue;
                }
                else {
                    button.state.icon.name = currentValue;
                }
                control.data.currentValue = currentValue;
            }
        }
    },
    isActive: (editor, btn) => {
        const current = editor.s.current();
        if (current && btn.defaultValue) {
            const currentBox = dom["a" /* Dom */].closest(current, node => dom["a" /* Dom */].isBlock(node, editor.ew), editor.editor) || editor.editor;
            return (btn.defaultValue.indexOf(Object(helpers["css"])(currentBox, 'text-align').toString()) === -1);
        }
        return false;
    },
    defaultValue: ['left', 'start', 'inherit'],
    data: {
        currentValue: 'left'
    },
    list: ['center', 'left', 'right', 'justify']
};
config["a" /* Config */].prototype.controls.center = {
    command: 'justifyCenter',
    css: {
        'text-align': 'center'
    },
    tooltip: 'Align Center'
};
config["a" /* Config */].prototype.controls.justify = {
    command: 'justifyFull',
    css: {
        'text-align': 'justify'
    },
    tooltip: 'Align Justify'
};
config["a" /* Config */].prototype.controls.left = {
    command: 'justifyLeft',
    css: {
        'text-align': 'left'
    },
    tooltip: 'Align Left'
};
config["a" /* Config */].prototype.controls.right = {
    command: 'justifyRight',
    css: {
        'text-align': 'right'
    },
    tooltip: 'Align Right'
};
const clearAlign = (node, editor) => {
    dom["a" /* Dom */].each(node, elm => {
        if (dom["a" /* Dom */].isHTMLElement(elm, editor.ew)) {
            if (elm.style.textAlign) {
                elm.style.textAlign = '';
                if (!elm.style.cssText.trim().length) {
                    elm.removeAttribute('style');
                }
            }
        }
    });
};
const alignElement = (command, box, editor) => {
    if (dom["a" /* Dom */].isNode(box, editor.ew) && dom["a" /* Dom */].isElement(box)) {
        clearAlign(box, editor);
        switch (command.toLowerCase()) {
            case 'justifyfull':
                box.style.textAlign = 'justify';
                break;
            case 'justifyright':
                box.style.textAlign = 'right';
                break;
            case 'justifyleft':
                box.style.textAlign = 'left';
                break;
            case 'justifycenter':
                box.style.textAlign = 'center';
                break;
        }
    }
};
function justify(editor) {
    const callback = (command) => {
        editor.s.focus();
        editor.s.eachSelection((current) => {
            if (!current) {
                return;
            }
            let currentBox = dom["a" /* Dom */].up(current, node => dom["a" /* Dom */].isBlock(node, editor.ew), editor.editor);
            if (!currentBox) {
                currentBox = dom["a" /* Dom */].wrapInline(current, editor.o.enterBlock, editor);
            }
            alignElement(command, currentBox, editor);
        });
        return false;
    };
    editor.registerCommand('justifyfull', callback);
    editor.registerCommand('justifyright', callback);
    editor.registerCommand('justifyleft', callback);
    editor.registerCommand('justifycenter', callback);
}

// CONCATENATED MODULE: ./src/plugins/limit.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



config["a" /* Config */].prototype.limitWords = false;
config["a" /* Config */].prototype.limitChars = false;
config["a" /* Config */].prototype.limitHTML = false;
function limit(jodit) {
    if (jodit && (jodit.o.limitWords || jodit.o.limitChars)) {
        const callback = (event, inputText = '') => {
            const text = inputText || (jodit.o.limitHTML ? jodit.value : jodit.text);
            const words = text
                .replace(Object(constants["INVISIBLE_SPACE_REG_EXP"])(), '')
                .split(Object(constants["SPACE_REG_EXP"])())
                .filter((e) => e.length);
            if (event && constants["COMMAND_KEYS"].includes(event.key)) {
                return;
            }
            if (jodit.o.limitWords && jodit.o.limitWords <= words.length) {
                return jodit.o.limitWords === words.length;
            }
            if (jodit.o.limitChars &&
                jodit.o.limitChars <= words.join('').length) {
                return jodit.o.limitChars === words.join('').length;
            }
            return;
        };
        let snapshot = null;
        jodit.e
            .off('.limit')
            .on('beforePaste.limit', () => {
            snapshot = jodit.observer.snapshot.make();
        })
            .on('keydown.limit keyup.limit beforeEnter.limit beforePaste.limit', (event) => {
            if (callback(event) !== undefined) {
                return false;
            }
        })
            .on('change.limit', jodit.async.debounce((newValue, oldValue) => {
            if (callback(null, jodit.o.limitHTML ? newValue : Object(helpers["stripTags"])(newValue)) === false) {
                jodit.value = oldValue;
            }
        }, jodit.defaultTimeout))
            .on('afterPaste.limit', () => {
            if (callback(null) === false && snapshot) {
                jodit.observer.snapshot.restore(snapshot);
                return false;
            }
        });
    }
}

// CONCATENATED MODULE: ./src/plugins/link/template.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const template_formTemplate = (editor) => `<form class="jodit-form">
		<div class="jodit-form__group">
			<input ref="url_input" class="jodit-input" required type="text" name="url" placeholder="http://" type="text"/>
		</div>
		<div ref="content_input_box" class="jodit-form__group">
			<input ref="content_input" class="jodit-input" name="text" placeholder="${editor.i18n('Text')}" type="text"/>
		</div>
		<label ref="target_checkbox_box">
			<input ref="target_checkbox" class="jodit-checkbox" name="target" type="checkbox"/>
			<span>${editor.i18n('Open in new tab')}</span>
		</label>
		<label ref="nofollow_checkbox_box">
			<input ref="nofollow_checkbox" class="jodit-checkbox" name="nofollow" type="checkbox"/>
			<span>${editor.i18n('No follow')}</span>
		</label>
		<div class="jodit-buttons">
			<button ref="unlink" class="jodit-button" type="button">${editor.i18n('Unlink')}</button>
			<button ref="insert" class="jodit-button" type="submit">${editor.i18n('Insert')}</button>
		</div>
	<form/>`;

// CONCATENATED MODULE: ./src/plugins/link/link.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config["a" /* Config */].prototype.link = {
    formTemplate: template_formTemplate,
    followOnDblClick: false,
    processVideoLink: true,
    processPastedLink: true,
    removeLinkAfterFormat: true,
    noFollowCheckbox: true,
    openInNewTabCheckbox: true
};
config["a" /* Config */].prototype.controls.unlink = {
    exec: (editor, current) => {
        const anchor = dom["a" /* Dom */].closest(current, 'a', editor.editor);
        if (anchor) {
            dom["a" /* Dom */].unwrap(anchor);
        }
        editor.setEditorValue();
        editor.e.fire('hidePopup');
    },
    tooltip: 'Unlink'
};
config["a" /* Config */].prototype.controls.link = {
    isActive: (editor) => {
        const current = editor.s.current();
        return Boolean(current && dom["a" /* Dom */].closest(current, 'a', editor.editor));
    },
    popup: (editor, current, self, close) => {
        const i18n = editor.i18n.bind(editor), { openInNewTabCheckbox, noFollowCheckbox, formTemplate, formClassName } = editor.o.link, form = editor.c.fromHTML(formTemplate(editor), {
            target_checkbox_box: openInNewTabCheckbox,
            nofollow_checkbox_box: noFollowCheckbox
        });
        const elements = Object(helpers["refs"])(form), { insert, unlink, content_input_box } = elements, { target_checkbox, nofollow_checkbox, url_input } = elements, currentElement = current, isImageContent = dom["a" /* Dom */].isImage(currentElement, editor.ew);
        let { content_input } = elements;
        if (!content_input) {
            content_input = editor.c.element('input', {
                type: 'hidden',
                ref: 'content_input'
            });
        }
        if (formClassName) {
            form.classList.add(formClassName);
        }
        if (isImageContent) {
            dom["a" /* Dom */].hide(content_input_box);
        }
        let link;
        const getSelectionText = () => link
            ? link.innerText
            : Object(helpers["stripTags"])(editor.s.range.cloneContents(), editor.ed);
        if (current && dom["a" /* Dom */].closest(current, 'a', editor.editor)) {
            link = dom["a" /* Dom */].closest(current, 'a', editor.editor);
        }
        else {
            link = false;
        }
        if (!isImageContent && current) {
            content_input.value = getSelectionText();
        }
        if (link) {
            url_input.value = Object(helpers["attr"])(link, 'href') || '';
            if (openInNewTabCheckbox && target_checkbox) {
                target_checkbox.checked = Object(helpers["attr"])(link, 'target') === '_blank';
            }
            if (noFollowCheckbox && nofollow_checkbox) {
                nofollow_checkbox.checked = Object(helpers["attr"])(link, 'rel') === 'nofollow';
            }
            insert.textContent = i18n('Update');
        }
        else {
            dom["a" /* Dom */].hide(unlink);
        }
        const snapshot = editor.observer.snapshot.make();
        if (unlink) {
            editor.e.on(unlink, 'click', (e) => {
                editor.observer.snapshot.restore(snapshot);
                if (link) {
                    dom["a" /* Dom */].unwrap(link);
                }
                editor.setEditorValue();
                close();
                e.preventDefault();
            });
        }
        editor.e.on(form, 'submit', (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();
            if (!url_input.value.trim().length) {
                url_input.focus();
                url_input.classList.add('jodit_error');
                return false;
            }
            let links;
            editor.observer.snapshot.restore(snapshot);
            const textWasChanged = getSelectionText() !== content_input.value.trim();
            if (!link) {
                if (!editor.s.isCollapsed()) {
                    links = editor.s.wrapInTag('a');
                }
                else {
                    const a = editor.createInside.element('a');
                    editor.s.insertNode(a);
                    links = [a];
                }
            }
            else {
                links = [link];
            }
            links.forEach(a => {
                a.setAttribute('href', url_input.value);
                if (!isImageContent) {
                    if (content_input.value.trim().length) {
                        if (textWasChanged) {
                            a.textContent = content_input.value;
                        }
                    }
                    else {
                        a.textContent = url_input.value;
                    }
                }
                if (openInNewTabCheckbox && target_checkbox) {
                    if (target_checkbox.checked) {
                        a.setAttribute('target', '_blank');
                    }
                    else {
                        a.removeAttribute('target');
                    }
                }
                if (noFollowCheckbox && nofollow_checkbox) {
                    if (nofollow_checkbox.checked) {
                        a.setAttribute('rel', 'nofollow');
                    }
                    else {
                        a.removeAttribute('rel');
                    }
                }
            });
            editor.setEditorValue();
            close();
            return false;
        });
        return form;
    },
    tags: ['a'],
    tooltip: 'Insert link'
};
function link_link(jodit) {
    if (jodit.o.link.followOnDblClick) {
        jodit.e.on('afterInit changePlace', () => {
            jodit.e
                .off('dblclick.link')
                .on(jodit.editor, 'dblclick.link', (e) => {
                if (!dom["a" /* Dom */].isTag(e.target, 'a')) {
                    return;
                }
                const href = Object(helpers["attr"])(e.target, 'href');
                if (href) {
                    location.href = href;
                    e.preventDefault();
                }
            });
        });
    }
    if (jodit.o.link.processPastedLink) {
        jodit.e.on('processPaste.link', (event, html) => {
            if (Object(helpers["isURL"])(html)) {
                if (jodit.o.link.processVideoLink) {
                    const embed = Object(helpers["convertMediaUrlToVideoEmbed"])(html);
                    if (embed !== html) {
                        return jodit.createInside.fromHTML(embed);
                    }
                }
                const a = jodit.createInside.element('a');
                a.setAttribute('href', html);
                a.textContent = html;
                return a;
            }
        });
    }
    if (jodit.o.link.removeLinkAfterFormat) {
        jodit.e.on('afterCommand.link', (command) => {
            const sel = jodit.selection;
            let newtag, node;
            if (command === 'removeFormat') {
                node = sel.current();
                if (node && !dom["a" /* Dom */].isTag(node, 'a')) {
                    node = dom["a" /* Dom */].closest(node, 'a', jodit.editor);
                }
                if (dom["a" /* Dom */].isTag(node, 'a')) {
                    if (node.innerHTML === node.textContent) {
                        newtag = jodit.createInside.text(node.innerHTML);
                    }
                    else {
                        newtag = jodit.createInside.element('span');
                        newtag.innerHTML = node.innerHTML;
                    }
                    if (node.parentNode) {
                        node.parentNode.replaceChild(newtag, node);
                        jodit.s.setCursorIn(newtag, true);
                    }
                }
            }
        });
    }
}

// CONCATENATED MODULE: ./src/plugins/media.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



config["a" /* Config */].prototype.mediaFakeTag = 'jodit-media';
config["a" /* Config */].prototype.mediaInFakeBlock = true;
config["a" /* Config */].prototype.mediaBlocks = ['video', 'audio'];
function media(editor) {
    const keyFake = 'jodit_fake_wrapper';
    const { mediaFakeTag, mediaBlocks, mediaInFakeBlock } = editor.options;
    const wrap = (element) => {
        if (element.parentNode &&
            Object(helpers["attr"])(element.parentNode, 'data-jodit_iframe_wrapper')) {
            element = element.parentNode;
        }
        else {
            let wrapper;
            wrapper = editor.createInside.fromHTML(`<${mediaFakeTag} data-jodit-temp="1" contenteditable="false" draggable="true" data-${keyFake}="1"></${mediaFakeTag}>`);
            wrapper.style.display =
                element.style.display === 'inline-block'
                    ? 'inline-block'
                    : 'block';
            wrapper.style.width = element.offsetWidth + 'px';
            wrapper.style.height = element.offsetHeight + 'px';
            if (element.parentNode) {
                element.parentNode.insertBefore(wrapper, element);
            }
            wrapper.appendChild(element);
            element = wrapper;
        }
        editor.e
            .off(element, 'mousedown.select touchstart.select')
            .on(element, 'mousedown.select touchstart.select', () => {
            editor.s.setCursorAfter(element);
        });
    };
    if (mediaInFakeBlock) {
        editor.e
            .on('afterGetValueFromEditor', (data) => {
            const rxp = new RegExp(`<${mediaFakeTag}[^>]+data-${keyFake}[^>]+>(.+?)</${mediaFakeTag}>`, 'ig');
            if (rxp.test(data.value)) {
                data.value = data.value.replace(rxp, '$1');
            }
        })
            .on('change afterInit afterSetMode changePlace', editor.async.debounce(() => {
            if (!editor.isDestructed &&
                editor.getMode() !== constants["MODE_SOURCE"]) {
                Object(helpers["$$"])(mediaBlocks.join(','), editor.editor).forEach((elm) => {
                    if (!elm['__' + keyFake]) {
                        elm['__' + keyFake] = true;
                        wrap(elm);
                    }
                });
            }
        }, editor.defaultTimeout));
    }
}

// CONCATENATED MODULE: ./src/plugins/mobile.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





config["a" /* Config */].prototype.mobileTapTimeout = 300;
config["a" /* Config */].prototype.toolbarAdaptive = true;
config["a" /* Config */].prototype.controls.dots = {
    mode: constants["MODE_SOURCE"] + constants["MODE_WYSIWYG"],
    popup: (editor, current, control, close, button) => {
        let store = control.data;
        if (store === undefined) {
            store = {
                toolbar: makeCollection(editor),
                rebuild: () => {
                    var _a;
                    if (button) {
                        const buttons = editor.e.fire('getDiffButtons.mobile', button.closest(ui["h" /* UIList */]));
                        if (buttons && store) {
                            store.toolbar.build(Object(helpers["splitArray"])(buttons));
                            const w = ((_a = editor.toolbar.firstButton) === null || _a === void 0 ? void 0 : _a.container.offsetWidth) || 36;
                            store.toolbar.container.style.width =
                                (w + 4) * 3 + 'px';
                        }
                    }
                }
            };
            control.data = store;
        }
        store.rebuild();
        return store.toolbar;
    },
    tooltip: 'Show all'
};
function mobile(editor) {
    let timeout = 0, store = Object(helpers["splitArray"])(editor.o.buttons);
    editor.e
        .on('touchend', (e) => {
        if (e.changedTouches && e.changedTouches.length) {
            const now = new Date().getTime();
            if (now - timeout > editor.o.mobileTapTimeout) {
                timeout = now;
                editor.s.insertCursorAtPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
            }
        }
    })
        .on('getDiffButtons.mobile', (toolbar) => {
        if (toolbar === editor.toolbar) {
            return Object(helpers["splitArray"])(editor.o.buttons).filter(i => !store.includes(i));
        }
    });
    if (editor.o.toolbarAdaptive) {
        editor.e
            .on('resize afterInit recalcAdaptive changePlace afterAddPlace', () => {
            if (!editor.o.toolbar) {
                return;
            }
            const width = editor.container.offsetWidth;
            const newStore = (() => {
                if (width >= editor.o.sizeLG) {
                    return Object(helpers["splitArray"])(editor.o.buttons);
                }
                if (width >= editor.o.sizeMD) {
                    return Object(helpers["splitArray"])(editor.o.buttonsMD);
                }
                if (width >= editor.o.sizeSM) {
                    return Object(helpers["splitArray"])(editor.o.buttonsSM);
                }
                return Object(helpers["splitArray"])(editor.o.buttonsXS);
            })();
            if (newStore.toString() !== store.toString()) {
                store = newStore;
                editor.e.fire('closeAllPopups');
                editor.toolbar
                    .setRemoveButtons(editor.o.removeButtons)
                    .build(store.concat(editor.o.extraButtons));
            }
        })
            .on(editor.ow, 'load', () => editor.e.fire('recalcAdaptive'));
    }
}

// CONCATENATED MODULE: ./src/plugins/ordered-list.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const ordered_list_exec = (jodit, _, { control }) => {
    const key = `button${control.command}`;
    const value = (control.args && control.args[0]) || Object(helpers["dataBind"])(jodit, key);
    Object(helpers["dataBind"])(jodit, key, value);
    jodit.execCommand(control.command, false, value);
};
config["a" /* Config */].prototype.controls.ul = {
    command: 'insertUnorderedList',
    tags: ['ul'],
    tooltip: 'Insert Unordered List',
    list: {
        default: 'Default',
        circle: 'Circle',
        disc: 'Disc',
        square: 'Square'
    },
    exec: ordered_list_exec
};
config["a" /* Config */].prototype.controls.ol = {
    command: 'insertOrderedList',
    tags: ['ol'],
    tooltip: 'Insert Ordered List',
    list: {
        default: 'Default',
        'lower-alpha': 'Lower Alpha',
        'lower-greek': 'Lower Greek',
        'lower-roman': 'Lower Roman',
        'upper-alpha': 'Upper Alpha',
        'upper-roman': 'Upper Roman'
    },
    exec: ordered_list_exec
};
function orderedList(editor) {
    const isOurCommand = (command) => /insert(un)?orderedlist/i.test(command), getListWrapper = () => dom["a" /* Dom */].up(editor.s.current(), (tag) => tag && /^UL|OL$/i.test(tag.nodeName), editor.editor), listStyleTypeEqual = (el, listStyleType) => {
        const value = el.style.listStyleType;
        return (value === listStyleType ||
            (!value && listStyleType === 'default'));
    }, setListStyleType = (el, value) => {
        if (value === 'default' || !value) {
            el.style.removeProperty('list-style-type');
        }
        else {
            el.style.setProperty('list-style-type', value);
        }
    };
    editor.e
        .on('beforeCommand', (command, _, listStyleType) => {
        if (isOurCommand(command) && listStyleType) {
            const ul = getListWrapper();
            if (ul && !listStyleTypeEqual(ul, listStyleType)) {
                if ((dom["a" /* Dom */].isTag(ul, 'ul') && /unordered/i.test(command)) ||
                    (dom["a" /* Dom */].isTag(ul, 'ol') && !/unordered/i.test(command))) {
                    setListStyleType(ul, listStyleType);
                    return false;
                }
            }
        }
    })
        .on('afterCommand', (command, _, listStyleType) => {
        if (isOurCommand(command)) {
            const ul = getListWrapper();
            if (ul) {
                setListStyleType(ul, listStyleType);
            }
            if (ul && dom["a" /* Dom */].isTag(ul.parentNode, 'p')) {
                const selection = editor.s.save();
                dom["a" /* Dom */].unwrap(ul.parentNode);
                Array.from(ul.childNodes).forEach((li) => {
                    if (dom["a" /* Dom */].isTag(li.lastChild, 'br')) {
                        dom["a" /* Dom */].safeRemove(li.lastChild);
                    }
                });
                editor.s.restore(selection);
            }
            editor.setEditorValue();
        }
    });
}

// EXTERNAL MODULE: ./src/plugins/placeholder/placeholder.less
var placeholder_placeholder = __webpack_require__(160);

// CONCATENATED MODULE: ./src/plugins/placeholder/placeholder.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







config["a" /* Config */].prototype.showPlaceholder = true;
config["a" /* Config */].prototype.useInputsPlaceholder = true;
config["a" /* Config */].prototype.placeholder = 'Type something';
class placeholder_placeholder_placeholder extends plugin_Plugin {
    constructor() {
        super(...arguments);
        this.addEvents = () => {
            const editor = this.j;
            if (editor.o.useInputsPlaceholder &&
                editor.element.hasAttribute('placeholder')) {
                this.placeholderElm.innerHTML =
                    Object(helpers["attr"])(editor.element, 'placeholder') || '';
            }
            editor.e.fire('placeholder', this.placeholderElm.innerHTML);
            editor.e
                .off('.placeholder')
                .on('change.placeholder focus.placeholder keyup.placeholder mouseup.placeholder keydown.placeholder ' +
                'mousedown.placeholder afterSetMode.placeholder changePlace.placeholder', this.toggle)
                .on(window, 'load', this.toggle);
            this.toggle();
        };
    }
    afterInit(editor) {
        if (!editor.o.showPlaceholder) {
            return;
        }
        this.toggle = editor.async.debounce(this.toggle.bind(this), this.j.defaultTimeout / 10);
        this.placeholderElm = editor.c.fromHTML(`<span data-ref="placeholder" style="display: none;" class="jodit-placeholder">${editor.i18n(editor.o.placeholder)}</span>`);
        if (editor.o.direction === 'rtl') {
            this.placeholderElm.style.right = '0px';
            this.placeholderElm.style.direction = 'rtl';
        }
        editor.e
            .on('readonly', (isReadOnly) => {
            if (isReadOnly) {
                this.hide();
            }
            else {
                this.toggle();
            }
        })
            .on('changePlace', this.init);
        this.addEvents();
    }
    show() {
        const editor = this.j;
        if (editor.o.readonly) {
            return;
        }
        let marginTop = 0, marginLeft = 0;
        const current = editor.s.current(), wrapper = (current &&
            dom["a" /* Dom */].closest(current, n => dom["a" /* Dom */].isBlock(n, editor.ew), editor.editor)) ||
            editor.editor;
        const style = editor.ew.getComputedStyle(wrapper);
        editor.workplace.appendChild(this.placeholderElm);
        if (dom["a" /* Dom */].isElement(editor.editor.firstChild)) {
            const style2 = editor.ew.getComputedStyle(editor.editor.firstChild);
            marginTop = parseInt(style2.getPropertyValue('margin-top'), 10);
            marginLeft = parseInt(style2.getPropertyValue('margin-left'), 10);
            this.placeholderElm.style.fontSize =
                parseInt(style2.getPropertyValue('font-size'), 10) + 'px';
            this.placeholderElm.style.lineHeight = style2.getPropertyValue('line-height');
        }
        else {
            this.placeholderElm.style.fontSize =
                parseInt(style.getPropertyValue('font-size'), 10) + 'px';
            this.placeholderElm.style.lineHeight = style.getPropertyValue('line-height');
        }
        Object(helpers["css"])(this.placeholderElm, {
            display: 'block',
            textAlign: style.getPropertyValue('text-align'),
            marginTop: Math.max(parseInt(style.getPropertyValue('margin-top'), 10), marginTop),
            marginLeft: Math.max(parseInt(style.getPropertyValue('margin-left'), 10), marginLeft)
        });
    }
    hide() {
        dom["a" /* Dom */].safeRemove(this.placeholderElm);
    }
    toggle() {
        const editor = this.j;
        if (!editor.editor || editor.isInDestruct) {
            return;
        }
        if (editor.getRealMode() !== constants["MODE_WYSIWYG"]) {
            this.hide();
            return;
        }
        if (!this.isEmpty(editor.editor)) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    isEmpty(root) {
        if (!root.firstChild) {
            return true;
        }
        const first = root.firstChild;
        if (constants["MAY_BE_REMOVED_WITH_KEY"].test(first.nodeName) ||
            /^(TABLE)$/i.test(first.nodeName)) {
            return false;
        }
        const next = dom["a" /* Dom */].next(first, node => node && !dom["a" /* Dom */].isEmptyTextNode(node), root);
        if (dom["a" /* Dom */].isText(first) && !next) {
            return dom["a" /* Dom */].isEmptyTextNode(first);
        }
        if (!next &&
            dom["a" /* Dom */].each(first, elm => !dom["a" /* Dom */].isTag(elm, ['ul', 'li', 'ol']) &&
                (dom["a" /* Dom */].isEmpty(elm) || dom["a" /* Dom */].isTag(elm, 'br')))) {
            return true;
        }
        return false;
    }
    beforeDestruct(jodit) {
        this.hide();
        this.j.e.off('.placeholder').off(window, 'load', this.toggle);
    }
}

// CONCATENATED MODULE: ./src/plugins/redo-undo.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



config["a" /* Config */].prototype.controls.redo = {
    mode: constants["MODE_SPLIT"],
    isDisabled: (editor) => !editor.observer.stack.canRedo(),
    tooltip: 'Redo'
};
config["a" /* Config */].prototype.controls.undo = {
    mode: constants["MODE_SPLIT"],
    isDisabled: (editor) => !editor.observer.stack.canUndo(),
    tooltip: 'Undo'
};
class redo_undo_redoUndo extends plugin_Plugin {
    beforeDestruct() {
    }
    afterInit(editor) {
        const callback = (command) => {
            editor.observer[command]();
            return false;
        };
        editor.registerCommand('redo', {
            exec: callback,
            hotkeys: ['ctrl+y', 'ctrl+shift+z', 'cmd+y', 'cmd+shift+z']
        });
        editor.registerCommand('undo', {
            exec: callback,
            hotkeys: ['ctrl+z', 'cmd+z']
        });
    }
}

// EXTERNAL MODULE: ./src/plugins/resizer/resizer.less
var resizer_resizer = __webpack_require__(161);

// CONCATENATED MODULE: ./src/plugins/resizer/resizer.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */










config["a" /* Config */].prototype.useIframeResizer = true;
config["a" /* Config */].prototype.useTableResizer = true;
config["a" /* Config */].prototype.useImageResizer = true;
config["a" /* Config */].prototype.resizer = {
    showSize: true,
    hideSizeTimeout: 1000,
    min_width: 10,
    min_height: 10
};
const keyBInd = '__jodit-resizer_binded';
class resizer_resizer_resizer extends plugin_Plugin {
    constructor() {
        super(...arguments);
        this.LOCK_KEY = 'resizer';
        this.element = null;
        this.isResized = false;
        this.isShown = false;
        this.start_x = 0;
        this.start_y = 0;
        this.width = 0;
        this.height = 0;
        this.ratio = 0;
        this.rect = this.j.c.fromHTML(`<div class="jodit-resizer">
				<i class="jodit-resizer-topleft"></i>
				<i class="jodit-resizer-topright"></i>
				<i class="jodit-resizer-bottomright"></i>
				<i class="jodit-resizer-bottomleft"></i>
				<span>100x100</span>
			</div>`);
        this.sizeViewer = this.rect.getElementsByTagName('span')[0];
        this.onResize = (e) => {
            if (this.isResized) {
                const diff_x = e.clientX - this.start_x, diff_y = e.clientY - this.start_y;
                if (!this.element) {
                    return;
                }
                const className = this.handle.className;
                let new_w = 0, new_h = 0;
                if (dom["a" /* Dom */].isTag(this.element, 'img')) {
                    if (diff_x) {
                        new_w =
                            this.width +
                                (className.match(/left/) ? -1 : 1) * diff_x;
                        new_h = Math.round(new_w / this.ratio);
                    }
                    else {
                        new_h =
                            this.height +
                                (className.match(/top/) ? -1 : 1) * diff_y;
                        new_w = Math.round(new_h * this.ratio);
                    }
                    if (new_w > Object(helpers["innerWidth"])(this.j.editor, this.j.ow)) {
                        new_w = Object(helpers["innerWidth"])(this.j.editor, this.j.ow);
                        new_h = Math.round(new_w / this.ratio);
                    }
                }
                else {
                    new_w =
                        this.width + (className.match(/left/) ? -1 : 1) * diff_x;
                    new_h =
                        this.height + (className.match(/top/) ? -1 : 1) * diff_y;
                }
                if (new_w > this.j.o.resizer.min_width) {
                    if (new_w < this.rect.parentNode.offsetWidth) {
                        Object(helpers["css"])(this.element, 'width', new_w);
                    }
                    else {
                        Object(helpers["css"])(this.element, 'width', '100%');
                    }
                }
                if (new_h > this.j.o.resizer.min_height) {
                    Object(helpers["css"])(this.element, 'height', new_h);
                }
                this.updateSize();
                this.showSizeViewer(this.element.offsetWidth, this.element.offsetHeight);
                e.stopImmediatePropagation();
            }
        };
        this.onClickOutside = (e) => {
            if (this.isShown) {
                if (this.isResized) {
                    this.j.unlock();
                    this.isResized = false;
                    this.j.setEditorValue();
                    e.stopImmediatePropagation();
                    this.j.e.off(this.j.ow, 'mousemove.resizer touchmove.resizer', this.onResize);
                }
                else {
                    this.hide();
                }
            }
        };
        this.onClickElement = (element) => {
            if (this.element !== element || !this.isShown) {
                this.element = element;
                this.show();
                if (dom["a" /* Dom */].isTag(this.element, 'img') && !this.element.complete) {
                    this.j.e.on(this.element, 'load', this.updateSize);
                }
            }
        };
        this.updateSize = () => {
            if (this.isInDestruct || !this.isShown) {
                return;
            }
            if (this.element && this.rect) {
                const workplacePosition = Object(helpers["offset"])((this.rect.parentNode ||
                    this.j.od.documentElement), this.j, this.j.od, true), pos = Object(helpers["offset"])(this.element, this.j, this.j.ed), left = parseInt(this.rect.style.left || '0', 10), top = parseInt(this.rect.style.top || '0', 10), w = this.rect.offsetWidth, h = this.rect.offsetHeight;
                const newTop = pos.top - 1 - workplacePosition.top, newLeft = pos.left - 1 - workplacePosition.left;
                if (top !== newTop ||
                    left !== newLeft ||
                    w !== this.element.offsetWidth ||
                    h !== this.element.offsetHeight) {
                    Object(helpers["css"])(this.rect, {
                        top: newTop,
                        left: newLeft,
                        width: this.element.offsetWidth,
                        height: this.element.offsetHeight
                    });
                    if (this.j.events) {
                        this.j.e.fire(this.element, 'changesize');
                        if (!isNaN(left)) {
                            this.j.e.fire('resize');
                        }
                    }
                }
            }
        };
        this.hideSizeViewer = () => {
            this.sizeViewer.style.opacity = '0';
        };
    }
    afterInit(editor) {
        Object(helpers["$$"])('i', this.rect).forEach((resizeHandle) => {
            editor.e.on(resizeHandle, 'mousedown.resizer touchstart.resizer', this.onClickHandle.bind(this, resizeHandle));
        });
        global["a" /* eventEmitter */].on('hideHelpers', this.hide);
        editor.e
            .on('readonly', (isReadOnly) => {
            if (isReadOnly) {
                this.hide();
            }
        })
            .on('afterInit changePlace', this.addEventListeners.bind(this))
            .on('afterGetValueFromEditor.resizer', (data) => {
            const rgx = /<jodit[^>]+data-jodit_iframe_wrapper[^>]+>(.*?<iframe[^>]+>[\s\n\r]*<\/iframe>.*?)<\/jodit>/gi;
            if (rgx.test(data.value)) {
                data.value = data.value.replace(rgx, '$1');
            }
        })
            .on('hideResizer', this.hide)
            .on('change afterInit afterSetMode', editor.async.debounce(this.onChangeEditor.bind(this), editor.defaultTimeout));
        this.addEventListeners();
        this.onChangeEditor();
    }
    addEventListeners() {
        const editor = this.j;
        editor.e
            .off(editor.editor, '.resizer')
            .off(editor.ow, '.resizer')
            .on(editor.editor, 'keydown.resizer', (e) => {
            if (this.isShown &&
                e.key === constants["KEY_DELETE"] &&
                this.element &&
                !dom["a" /* Dom */].isTag(this.element, 'table')) {
                this.onDelete(e);
            }
        })
            .on(editor.ow, 'resize.resizer', this.updateSize)
            .on(editor.ow, 'mouseup.resizer keydown.resizer touchend.resizer', this.onClickOutside)
            .on([editor.ow, editor.editor], 'scroll.resizer', () => {
            if (this.isShown && !this.isResized) {
                this.hide();
            }
        });
    }
    onClickHandle(resizeHandle, e) {
        if (!this.element || !this.element.parentNode) {
            this.hide();
            return false;
        }
        this.handle = resizeHandle;
        e.preventDefault();
        e.stopImmediatePropagation();
        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
        this.ratio = this.width / this.height;
        this.isResized = true;
        this.start_x = e.clientX;
        this.start_y = e.clientY;
        this.j.e.fire('hidePopup');
        this.j.lock(this.LOCK_KEY);
        this.j.e.on(this.j.ow, 'mousemove.resizer touchmove.resizer', this.onResize);
    }
    onDelete(e) {
        if (!this.element) {
            return;
        }
        if (this.element.tagName !== 'JODIT') {
            this.j.s.select(this.element);
        }
        else {
            dom["a" /* Dom */].safeRemove(this.element);
            this.hide();
            e.preventDefault();
        }
    }
    onChangeEditor() {
        const editor = this.j;
        if (this.isShown) {
            if (!this.element || !this.element.parentNode) {
                this.hide();
            }
            else {
                this.updateSize();
            }
        }
        if (!editor.isDestructed) {
            Object(helpers["$$"])('img, table, iframe', editor.editor).forEach((elm) => {
                if (editor.getMode() === constants["MODE_SOURCE"]) {
                    return;
                }
                if (!elm[keyBInd] &&
                    ((dom["a" /* Dom */].isTag(elm, 'iframe') &&
                        editor.o.useIframeResizer) ||
                        (dom["a" /* Dom */].isTag(elm, 'img') &&
                            editor.o.useImageResizer) ||
                        (dom["a" /* Dom */].isTag(elm, 'table') &&
                            editor.o.useTableResizer))) {
                    elm[keyBInd] = true;
                    this.bind(elm);
                }
            });
        }
    }
    bind(element) {
        let wrapper;
        if (dom["a" /* Dom */].isTag(element, 'iframe')) {
            const iframe = element;
            if (Object(helpers["attr"])(element.parentNode, '-jodit_iframe_wrapper')) {
                element = element.parentNode;
            }
            else {
                wrapper = this.j.createInside.fromHTML('<jodit ' +
                    'data-jodit-temp="1" ' +
                    'contenteditable="false" ' +
                    'draggable="true" ' +
                    'data-jodit_iframe_wrapper="1"' +
                    '></jodit>');
                Object(helpers["css"])(wrapper, {
                    display: element.style.display === 'inline-block'
                        ? 'inline-block'
                        : 'block',
                    width: element.offsetWidth,
                    height: element.offsetHeight
                });
                if (element.parentNode) {
                    element.parentNode.insertBefore(wrapper, element);
                }
                wrapper.appendChild(element);
                element = wrapper;
            }
            this.j.e
                .off(element, 'mousedown.select touchstart.select')
                .on(element, 'mousedown.select touchstart.select', () => {
                this.j.s.select(element);
            })
                .off(element, 'changesize')
                .on(element, 'changesize', () => {
                iframe.setAttribute('width', element.offsetWidth + 'px');
                iframe.setAttribute('height', element.offsetHeight + 'px');
            });
        }
        this.j.e
            .on(element, 'dragstart', this.hide)
            .on(element, 'mousedown', (event) => {
            if (constants["IS_IE"] && dom["a" /* Dom */].isTag(element, 'img')) {
                event.preventDefault();
            }
        })
            .on(element, 'click', () => this.onClickElement(element));
    }
    showSizeViewer(w, h) {
        if (!this.j.o.resizer.showSize) {
            return;
        }
        if (w < this.sizeViewer.offsetWidth ||
            h < this.sizeViewer.offsetHeight) {
            this.hideSizeViewer();
            return;
        }
        this.sizeViewer.style.opacity = '1';
        this.sizeViewer.textContent = `${w} x ${h}`;
        this.j.async.setTimeout(this.hideSizeViewer, {
            timeout: this.j.o.resizer.hideSizeTimeout,
            label: 'hideSizeViewer'
        });
    }
    show() {
        if (this.j.o.readonly || this.isShown) {
            return;
        }
        this.isShown = true;
        if (!this.rect.parentNode) {
            Object(helpers["markOwner"])(this.j, this.rect);
            this.j.workplace.appendChild(this.rect);
        }
        if (this.j.isFullSize) {
            this.rect.style.zIndex = Object(helpers["css"])(this.j.container, 'zIndex').toString();
        }
        this.updateSize();
    }
    hide() {
        this.isResized = false;
        this.isShown = false;
        this.element = null;
        dom["a" /* Dom */].safeRemove(this.rect);
    }
    beforeDestruct(jodit) {
        this.hide();
        global["a" /* eventEmitter */].off('hideHelpers', this.hide);
        this.j.e.off(this.j.ow, '.resizer').off('.resizer');
    }
}
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], resizer_resizer_resizer.prototype, "hide", null);

// EXTERNAL MODULE: ./src/plugins/search/search.less
var search_search = __webpack_require__(162);

// CONCATENATED MODULE: ./src/plugins/search/search.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */








config["a" /* Config */].prototype.useSearch = true;
class search_search_search extends plugin_Plugin {
    constructor() {
        super(...arguments);
        this.template = `<div class="jodit-search">
			<div class="jodit-search__box">
				<div class="jodit-search__inputs">
					<input data-ref="query" tabindex="0" placeholder="${this.j.i18n('Search for')}" type="text"/>
					<input data-ref="replace" tabindex="0" placeholder="${this.j.i18n('Replace with')}" type="text"/>
				</div>
				<div class="jodit-search__counts">
					<span data-ref="counter-box">0/0</span>
				</div>
				<div class="jodit-search__buttons">
					<button data-ref="next" tabindex="0" type="button">${ui["b" /* Icon */].get('angle-down')}</button>
					<button data-ref="prev" tabindex="0" type="button">${ui["b" /* Icon */].get('angle-up')}</button>
					<button data-ref="cancel" tabindex="0" type="button">${ui["b" /* Icon */].get('cancel')}</button>
					<button data-ref="replace-btn" tabindex="0" type="button" class="jodit-ui-button">${this.j.i18n('Replace')}</button>
				</div>
			</div>
		</div>`;
        this.isOpened = false;
        this.selInfo = null;
        this.current = null;
        this.eachMap = (node, callback, next) => {
            dom["a" /* Dom */].findWithCurrent(node, (child) => {
                return !!child && callback(child);
            }, this.j.editor, next ? 'nextSibling' : 'previousSibling', next ? 'firstChild' : 'lastChild');
        };
        this.updateCounters = () => {
            if (!this.isOpened) {
                return;
            }
            this.counterBox.style.display = this.queryInput.value.length
                ? 'inline-block'
                : 'none';
            const range = this.j.s.range, counts = this.calcCounts(this.queryInput.value, range);
            this.counterBox.textContent = counts.join('/');
        };
        this.calcCounts = (query, current = false) => {
            const bounds = [];
            let currentIndex = 0, count = 0, bound = false, start = this.j.editor.firstChild;
            while (start && query.length) {
                bound = this.find(start, query, true, 0, bound || this.j.ed.createRange());
                if (bound) {
                    if (this.boundAlreadyWas(bound, bounds)) {
                        break;
                    }
                    bounds.push(bound);
                    start = bound.startContainer;
                    count += 1;
                    if (current && this.boundAlreadyWas(current, [bound])) {
                        currentIndex = count;
                    }
                }
                else {
                    start = null;
                }
            }
            return [currentIndex, count];
        };
        this.findAndReplace = (start, query) => {
            const range = this.j.s.range, bound = this.find(start, query, true, 0, range);
            if (bound && bound.startContainer && bound.endContainer) {
                const rng = this.j.ed.createRange();
                try {
                    if (bound && bound.startContainer && bound.endContainer) {
                        rng.setStart(bound.startContainer, bound.startOffset);
                        rng.setEnd(bound.endContainer, bound.endOffset);
                        rng.deleteContents();
                        const textNode = this.j.createInside.text(this.replaceInput.value);
                        rng.insertNode(textNode);
                        this.j.s.select(textNode);
                        this.tryScrollToElement(textNode);
                    }
                }
                catch (_a) { }
                return true;
            }
            return false;
        };
        this.findAndSelect = (start, query, next) => {
            const range = this.j.s.range, bound = this.find(start, query, next, 0, range);
            if (bound && bound.startContainer && bound.endContainer) {
                const rng = this.j.ed.createRange();
                try {
                    rng.setStart(bound.startContainer, bound.startOffset);
                    rng.setEnd(bound.endContainer, bound.endOffset);
                    this.j.s.selectRange(rng);
                }
                catch (e) { }
                this.tryScrollToElement(bound.startContainer);
                this.current = bound.startContainer;
                this.updateCounters();
                return true;
            }
            return false;
        };
        this.find = (start, query, next, deep, range) => {
            if (start && query.length) {
                let sentence = '', bound = {
                    startContainer: null,
                    startOffset: null,
                    endContainer: null,
                    endOffset: null
                };
                this.eachMap(start, (elm) => {
                    if (dom["a" /* Dom */].isText(elm) &&
                        elm.nodeValue !== null &&
                        elm.nodeValue.length) {
                        let value = elm.nodeValue;
                        if (!next && elm === range.startContainer) {
                            value = !deep
                                ? value.substr(0, range.startOffset)
                                : value.substr(range.endOffset);
                        }
                        else if (next && elm === range.endContainer) {
                            value = !deep
                                ? value.substr(range.endOffset)
                                : value.substr(0, range.startOffset);
                        }
                        const tmpSentence = next
                            ? sentence + value
                            : value + sentence;
                        const part = search_search_search.findSomePartOfString(query, tmpSentence, next);
                        if (part !== false) {
                            let currentPart = search_search_search.findSomePartOfString(query, value, next);
                            if (currentPart === true) {
                                currentPart = Object(helpers["trim"])(query);
                            }
                            else if (currentPart === false) {
                                currentPart = search_search_search.findSomePartOfString(value, query, next);
                                if (currentPart === true) {
                                    currentPart = Object(helpers["trim"])(value);
                                }
                            }
                            let currentPartIndex = search_search_search.getSomePartOfStringIndex(query, value, next) || 0;
                            if (((next && !deep) || (!next && deep)) &&
                                elm.nodeValue.length - value.length > 0) {
                                currentPartIndex +=
                                    elm.nodeValue.length - value.length;
                            }
                            if (bound.startContainer === null) {
                                bound.startContainer = elm;
                                bound.startOffset = currentPartIndex;
                            }
                            if (part !== true) {
                                sentence = tmpSentence;
                            }
                            else {
                                bound.endContainer = elm;
                                bound.endOffset = currentPartIndex;
                                bound.endOffset += currentPart.length;
                                return true;
                            }
                        }
                        else {
                            sentence = '';
                            bound = {
                                startContainer: null,
                                startOffset: null,
                                endContainer: null,
                                endOffset: null
                            };
                        }
                    }
                    else if (dom["a" /* Dom */].isBlock(elm, this.j.ew) && sentence !== '') {
                        sentence = next ? sentence + ' ' : ' ' + sentence;
                    }
                    return false;
                }, next);
                if (bound.startContainer && bound.endContainer) {
                    return bound;
                }
                if (!deep) {
                    this.current = next
                        ? this.j.editor.firstChild
                        : this.j.editor.lastChild;
                    return this.find(this.current, query, next, deep + 1, range);
                }
            }
            return false;
        };
        this.open = (searchAndReplace = false) => {
            if (!this.isOpened) {
                this.searchBox.classList.add('jodit-search_active');
                this.isOpened = true;
            }
            this.j.e.fire('hidePopup');
            this.searchBox.classList.toggle('jodit-search_replace', searchAndReplace);
            this.current = this.j.s.current();
            this.selInfo = this.j.s.save();
            const selStr = (this.j.s.sel || '').toString();
            if (selStr) {
                this.queryInput.value = selStr;
            }
            this.updateCounters();
            if (selStr) {
                this.queryInput.select();
            }
            else {
                this.queryInput.focus();
            }
        };
        this.close = () => {
            if (!this.isOpened) {
                return;
            }
            if (this.selInfo) {
                this.j.s.restore(this.selInfo);
                this.selInfo = null;
            }
            this.searchBox.classList.remove('jodit-search_active');
            this.isOpened = false;
        };
    }
    static getSomePartOfStringIndex(needle, haystack, start = true) {
        return this.findSomePartOfString(needle, haystack, start, true);
    }
    static findSomePartOfString(needle, haystack, start = true, getIndex = false) {
        needle = Object(helpers["trim"])(needle.toLowerCase().replace(constants["SPACE_REG_EXP"](), ' '));
        haystack = haystack.toLowerCase();
        let i = start ? 0 : haystack.length - 1, needleStart = start ? 0 : needle.length - 1, tmpEqualLength = 0, startAtIndex = null;
        const inc = start ? 1 : -1, tmp = [];
        for (; haystack[i] !== undefined; i += inc) {
            const some = needle[needleStart] === haystack[i];
            if (some ||
                (startAtIndex !== null &&
                    constants["SPACE_REG_EXP"]().test(haystack[i]))) {
                if (startAtIndex === null || !start) {
                    startAtIndex = i;
                }
                tmp.push(haystack[i]);
                if (some) {
                    tmpEqualLength += 1;
                    needleStart += inc;
                }
            }
            else {
                startAtIndex = null;
                tmp.length = 0;
                tmpEqualLength = 0;
                needleStart = start ? 0 : needle.length - 1;
            }
            if (tmpEqualLength === needle.length) {
                return getIndex ? startAtIndex : true;
            }
        }
        if (getIndex) {
            return startAtIndex !== null && startAtIndex !== void 0 ? startAtIndex : false;
        }
        if (tmp.length) {
            return start ? tmp.join('') : tmp.reverse().join('');
        }
        return false;
    }
    boundAlreadyWas(current, bounds) {
        return bounds.some((bound) => {
            return (bound.startContainer === current.startContainer &&
                bound.endContainer === current.endContainer &&
                bound.startOffset === current.startOffset &&
                bound.endOffset === current.endOffset);
        }, false);
    }
    tryScrollToElement(startContainer) {
        let parentBox = dom["a" /* Dom */].closest(startContainer, dom["a" /* Dom */].isElement, this.j.editor);
        if (!parentBox) {
            parentBox = dom["a" /* Dom */].prev(startContainer, dom["a" /* Dom */].isElement, this.j.editor);
        }
        parentBox && parentBox !== this.j.editor && parentBox.scrollIntoView();
    }
    afterInit(editor) {
        if (editor.o.useSearch) {
            const self = this;
            self.searchBox = editor.c.fromHTML(self.template);
            const { query, replace, cancel, next, prev, replaceBtn, counterBox } = Object(helpers["refs"])(self.searchBox);
            self.queryInput = query;
            self.replaceInput = replace;
            self.closeButton = cancel;
            self.nextButton = next;
            self.prevButton = prev;
            self.replaceButton = replaceBtn;
            self.counterBox = counterBox;
            const onInit = () => {
                editor.workplace.appendChild(this.searchBox);
                editor.e
                    .off(this.j.container, 'keydown.search')
                    .on(this.j.container, 'keydown.search', (e) => {
                    if (editor.getRealMode() !== constants["MODE_WYSIWYG"]) {
                        return;
                    }
                    switch (e.key) {
                        case constants["KEY_ESC"]:
                            this.close();
                            break;
                        case constants["KEY_F3"]:
                            if (self.queryInput.value) {
                                editor.e.fire(!e.shiftKey
                                    ? 'searchNext'
                                    : 'searchPrevious');
                                e.preventDefault();
                            }
                            break;
                    }
                });
            };
            onInit();
            editor.e
                .on('changePlace', onInit)
                .on(self.closeButton, 'click', this.close)
                .on(self.queryInput, 'mousedown', () => {
                if (editor.s.isFocused()) {
                    editor.s.removeMarkers();
                    self.selInfo = editor.s.save();
                }
            })
                .on(self.replaceButton, 'click', (e) => {
                self.findAndReplace(editor.s.current() || editor.editor.firstChild, self.queryInput.value);
                this.updateCounters();
                e.preventDefault();
                e.stopImmediatePropagation();
            })
                .on([self.nextButton, self.prevButton], 'click', function (e) {
                editor.e.fire(self.nextButton === this
                    ? 'searchNext'
                    : 'searchPrevious');
                e.preventDefault();
                e.stopImmediatePropagation();
            })
                .on(this.queryInput, 'keydown', this.j.async.debounce((e) => {
                switch (e.key) {
                    case constants["KEY_ENTER"]:
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        if (editor.e.fire('searchNext')) {
                            this.close();
                        }
                        break;
                    default:
                        this.updateCounters();
                        break;
                }
            }, this.j.defaultTimeout))
                .on('beforeSetMode.search', () => {
                this.close();
            })
                .on('keydown.search mousedown.search', () => {
                if (this.selInfo) {
                    editor.s.removeMarkers();
                    this.selInfo = null;
                }
                if (this.isOpened) {
                    this.current = this.j.s.current();
                    this.updateCounters();
                }
            })
                .on('searchNext.search searchPrevious.search', () => {
                return self.findAndSelect(editor.s.current() || editor.editor.firstChild, self.queryInput.value, editor.e.current === 'searchNext');
            })
                .on('search.search', (value, next = true) => {
                editor.execCommand('search', value, next);
            });
            editor.registerCommand('search', {
                exec: (command, value, next = true) => {
                    self.findAndSelect(editor.s.current() || editor.editor.firstChild, value || '', next);
                    return false;
                }
            });
            editor.registerCommand('openSearchDialog', {
                exec: () => {
                    self.open();
                    return false;
                },
                hotkeys: ['ctrl+f', 'cmd+f']
            });
            editor.registerCommand('openReplaceDialog', {
                exec: () => {
                    if (!editor.o.readonly) {
                        self.open(true);
                    }
                    return false;
                },
                hotkeys: ['ctrl+h', 'cmd+h']
            });
        }
    }
    beforeDestruct(jodit) {
        var _a;
        dom["a" /* Dom */].safeRemove(this.searchBox);
        (_a = jodit.events) === null || _a === void 0 ? void 0 : _a.off('.search');
    }
}

// EXTERNAL MODULE: ./src/plugins/size/size.less
var size = __webpack_require__(163);

// CONCATENATED MODULE: ./src/plugins/size/size.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



config["a" /* Config */].prototype.allowResizeX = false;
config["a" /* Config */].prototype.allowResizeY = true;
function size_size(editor) {
    const setHeight = (height) => {
        Object(helpers["css"])(editor.container, 'height', height);
        if (editor.o.saveHeightInStorage) {
            editor.storage.set('height', height);
        }
    };
    const setWidth = (width) => Object(helpers["css"])(editor.container, 'width', width);
    const setHeightWorkPlace = (height) => Object(helpers["css"])(editor.workplace, 'height', height);
    if (editor.o.height !== 'auto' &&
        (editor.o.allowResizeX || editor.o.allowResizeY)) {
        const handle = editor.c.div('jodit-editor__resize', '<a tabindex="-1" href="javascript:void(0)"></a>'), start = {
            x: 0,
            y: 0,
            w: 0,
            h: 0
        };
        let isResized = false;
        const onMouseMove = editor.async.throttle((e) => {
            if (!isResized) {
                return;
            }
            if (editor.o.allowResizeY) {
                setHeight(start.h + e.clientY - start.y);
            }
            if (editor.o.allowResizeX) {
                setWidth(start.w + e.clientX - start.x);
            }
            resizeWorkspaceImd();
            editor.e.fire('resize');
        }, editor.defaultTimeout / 10);
        editor.e
            .on(handle, 'mousedown touchstart', (e) => {
            isResized = true;
            start.x = e.clientX;
            start.y = e.clientY;
            start.w = editor.container.offsetWidth;
            start.h = editor.container.offsetHeight;
            editor.lock();
            editor.e.on(editor.ow, 'mousemove touchmove', onMouseMove);
            e.preventDefault();
        })
            .on(editor.ow, 'mouseup touchsend', () => {
            if (isResized) {
                isResized = false;
                editor.e.off(editor.ow, 'mousemove touchmove', onMouseMove);
                editor.unlock();
            }
        })
            .on('afterInit', () => {
            editor.container.appendChild(handle);
        })
            .on('toggleFullSize', (fullSize) => {
            handle.style.display = fullSize ? 'none' : 'block';
        });
    }
    const getNotWorkHeight = () => (editor.o.toolbar ? editor.toolbar.container.offsetHeight : 0) +
        (editor.statusbar ? editor.statusbar.getHeight() : 0);
    const calcMinHeightWorkspace = () => {
        if (!editor.container || !editor.container.parentNode) {
            return;
        }
        const minHeight = Object(helpers["css"])(editor.container, 'minHeight') - getNotWorkHeight();
        [editor.workplace, editor.iframe, editor.editor].map(elm => {
            const minHeightD = elm === editor.editor ? minHeight - 2 : minHeight;
            elm && Object(helpers["css"])(elm, 'minHeight', minHeightD);
            editor.e.fire('setMinHeight', minHeightD);
        });
    };
    const resizeWorkspaceImd = () => {
        if (!editor ||
            editor.isDestructed ||
            !editor.options ||
            editor.o.inline) {
            return;
        }
        calcMinHeightWorkspace();
        if (editor.container &&
            (editor.o.height !== 'auto' || editor.isFullSize)) {
            setHeightWorkPlace(editor.container.offsetHeight - getNotWorkHeight());
        }
    };
    const resizeWorkspace = editor.async.debounce(resizeWorkspaceImd, editor.defaultTimeout);
    editor.e
        .on('toggleFullSize', (fullsize) => {
        if (!fullsize && editor.o.height === 'auto') {
            setHeightWorkPlace('auto');
            calcMinHeightWorkspace();
        }
    })
        .on('afterInit changePlace', () => {
        if (!editor.o.inline) {
            Object(helpers["css"])(editor.editor, {
                minHeight: '100%'
            });
            Object(helpers["css"])(editor.container, {
                minHeight: editor.o.minHeight,
                minWidth: editor.o.minWidth,
                maxWidth: editor.o.maxWidth
            });
        }
        let height = editor.o.height;
        if (editor.o.saveHeightInStorage && height !== 'auto') {
            const localHeight = editor.storage.get('height');
            if (localHeight) {
                height = localHeight;
            }
        }
        if (!editor.o.inline) {
            setHeight(height);
            setWidth(editor.o.width);
        }
        resizeWorkspaceImd();
    }, undefined, true)
        .on(window, 'load', resizeWorkspace)
        .on('afterInit resize updateToolbar scroll afterResize', resizeWorkspace);
}

// CONCATENATED MODULE: ./src/plugins/source/config.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



config["a" /* Config */].prototype.beautifyHTML = !constants["IS_IE"];
config["a" /* Config */].prototype.useAceEditor = true;
config["a" /* Config */].prototype.sourceEditor = 'ace';
config["a" /* Config */].prototype.sourceEditorNativeOptions = {
    showGutter: true,
    theme: 'ace/theme/idle_fingers',
    mode: 'ace/mode/html',
    wrap: true,
    highlightActiveLine: true
};
config["a" /* Config */].prototype.sourceEditorCDNUrlsJS = [
    'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.10/ace.js'
];
config["a" /* Config */].prototype.beautifyHTMLCDNUrlsJS = [
    'https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.11.0/beautify.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.11.0/beautify-html.min.js'
];
config["a" /* Config */].prototype.controls.source = {
    mode: constants["MODE_SPLIT"],
    exec: (editor) => {
        editor.toggleMode();
    },
    isActive: (editor) => {
        return editor.getRealMode() === constants["MODE_SOURCE"];
    },
    tooltip: 'Change mode'
};

// EXTERNAL MODULE: ./src/plugins/source/source.less
var source_source = __webpack_require__(164);

// CONCATENATED MODULE: ./src/plugins/source/editor/sourceEditor.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class SourceEditor {
    constructor(jodit, container, toWYSIWYG, fromWYSIWYG) {
        this.jodit = jodit;
        this.container = container;
        this.toWYSIWYG = toWYSIWYG;
        this.fromWYSIWYG = fromWYSIWYG;
        this.className = '';
        this.isReady = false;
    }
    get j() {
        return this.jodit;
    }
    onReady() {
        this.replaceUndoManager();
        this.isReady = true;
        this.j.e.fire(this, 'ready');
    }
    onReadyAlways(onReady) {
        var _a;
        if (!this.isReady) {
            (_a = this.j.events) === null || _a === void 0 ? void 0 : _a.on(this, 'ready', onReady);
        }
        else {
            onReady();
        }
    }
}

// CONCATENATED MODULE: ./src/plugins/source/editor/engines/area.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



class area_TextAreaEditor extends SourceEditor {
    constructor() {
        super(...arguments);
        this.autosize = this.j.async.debounce(() => {
            this.instance.style.height = 'auto';
            this.instance.style.height = this.instance.scrollHeight + 'px';
        }, this.j.defaultTimeout);
    }
    init(editor) {
        this.instance = editor.c.element('textarea', {
            class: 'jodit-source__mirror'
        });
        this.container.appendChild(this.instance);
        editor.e
            .on(this.instance, 'mousedown keydown touchstart input', editor.async.debounce(this.toWYSIWYG, editor.defaultTimeout))
            .on('setMinHeight.source', (minHeightD) => {
            Object(helpers["css"])(this.instance, 'minHeight', minHeightD);
        })
            .on(this.instance, 'change keydown mousedown touchstart input', this.autosize)
            .on('afterSetMode.source', this.autosize)
            .on(this.instance, 'mousedown focus', (e) => {
            editor.e.fire(e.type, e);
        });
        this.autosize();
        this.onReady();
    }
    destruct() {
        dom["a" /* Dom */].safeRemove(this.instance);
    }
    getValue() {
        return this.instance.value;
    }
    setValue(raw) {
        this.instance.value = raw;
    }
    insertRaw(raw) {
        const value = this.getValue();
        if (this.getSelectionStart() >= 0) {
            const startPos = this.getSelectionStart(), endPos = this.getSelectionEnd();
            this.setValue(value.substring(0, startPos) +
                raw +
                value.substring(endPos, value.length));
        }
        else {
            this.setValue(value + raw);
        }
    }
    getSelectionStart() {
        return this.instance.selectionStart;
    }
    getSelectionEnd() {
        return this.instance.selectionEnd;
    }
    setSelectionRange(start, end = start) {
        this.instance.setSelectionRange(start, end);
    }
    focus() {
        this.instance.focus();
    }
    setPlaceHolder(title) {
        this.instance.setAttribute('placeholder', title);
    }
    setReadOnly(isReadOnly) {
        if (isReadOnly) {
            this.instance.setAttribute('readonly', 'true');
        }
        else {
            this.instance.removeAttribute('readonly');
        }
    }
    selectAll() {
        this.instance.select();
    }
    replaceUndoManager() {
        const { observer } = this.jodit;
        this.j.e.on(this.instance, 'keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
                if (e.shiftKey) {
                    observer.redo();
                }
                else {
                    observer.undo();
                }
                this.setSelectionRange(this.getValue().length);
                return false;
            }
        });
    }
}

// CONCATENATED MODULE: ./src/plugins/source/editor/engines/ace.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



class ace_AceEditor extends SourceEditor {
    constructor() {
        super(...arguments);
        this.className = 'jodit_ace_editor';
        this.proxyOnFocus = (e) => {
            this.j.e.fire('focus', e);
        };
        this.proxyOnMouseDown = (e) => {
            this.j.e.fire('mousedown', e);
        };
    }
    aceExists() {
        return this.j.ow.ace !== undefined;
    }
    getLastColumnIndex(row) {
        return this.instance.session.getLine(row).length;
    }
    getLastColumnIndices() {
        const rows = this.instance.session.getLength();
        const lastColumnIndices = [];
        let lastColIndex = 0;
        for (let i = 0; i < rows; i++) {
            lastColIndex += this.getLastColumnIndex(i);
            if (i > 0) {
                lastColIndex += 1;
            }
            lastColumnIndices[i] = lastColIndex;
        }
        return lastColumnIndices;
    }
    getRowColumnIndices(characterIndex) {
        const lastColumnIndices = this.getLastColumnIndices();
        if (characterIndex <= lastColumnIndices[0]) {
            return { row: 0, column: characterIndex };
        }
        let row = 1;
        for (let i = 1; i < lastColumnIndices.length; i++) {
            if (characterIndex > lastColumnIndices[i]) {
                row = i + 1;
            }
        }
        const column = characterIndex - lastColumnIndices[row - 1] - 1;
        return { row, column };
    }
    setSelectionRangeIndices(start, end) {
        const startRowColumn = this.getRowColumnIndices(start);
        const endRowColumn = this.getRowColumnIndices(end);
        this.instance.getSelection().setSelectionRange({
            start: startRowColumn,
            end: endRowColumn
        });
    }
    getIndexByRowColumn(row, column) {
        const lastColumnIndices = this.getLastColumnIndices();
        return lastColumnIndices[row] - this.getLastColumnIndex(row) + column;
    }
    init(editor) {
        const tryInitAceEditor = () => {
            if (this.instance !== undefined || !this.aceExists()) {
                return;
            }
            const fakeMirror = this.j.c.div('jodit-source__mirror-fake');
            this.container.appendChild(fakeMirror);
            const ace = editor.ow.ace;
            this.instance = ace.edit(fakeMirror);
            this.instance.setTheme(editor.o.sourceEditorNativeOptions.theme);
            this.instance.renderer.setShowGutter(editor.o.sourceEditorNativeOptions.showGutter);
            this.instance
                .getSession()
                .setMode(editor.o.sourceEditorNativeOptions.mode);
            this.instance.setHighlightActiveLine(editor.o.sourceEditorNativeOptions.highlightActiveLine);
            this.instance.getSession().setUseWrapMode(true);
            this.instance.setOption('indentedSoftWrap', false);
            this.instance.setOption('wrap', editor.o.sourceEditorNativeOptions.wrap);
            this.instance.getSession().setUseWorker(false);
            this.instance.$blockScrolling = Infinity;
            this.instance.on('change', this.toWYSIWYG);
            this.instance.on('focus', this.proxyOnFocus);
            this.instance.on('mousedown', this.proxyOnMouseDown);
            if (editor.getRealMode() !== constants["MODE_WYSIWYG"]) {
                this.setValue(this.getValue());
            }
            const onResize = this.j.async.debounce(() => {
                if (editor.isInDestruct) {
                    return;
                }
                if (editor.o.height !== 'auto') {
                    this.instance.setOption('maxLines', editor.workplace.offsetHeight /
                        this.instance.renderer.lineHeight);
                }
                else {
                    this.instance.setOption('maxLines', Infinity);
                }
                this.instance.resize();
            }, this.j.defaultTimeout * 2);
            editor.e.on('afterResize afterSetMode', onResize);
            onResize();
            this.onReady();
        };
        editor.e.on('afterSetMode', () => {
            if (editor.getRealMode() !== constants["MODE_SOURCE"] &&
                editor.getMode() !== constants["MODE_SPLIT"]) {
                return;
            }
            this.fromWYSIWYG();
            tryInitAceEditor();
        });
        tryInitAceEditor();
        if (!this.aceExists()) {
            Object(helpers["loadNext"])(editor, editor.o.sourceEditorCDNUrlsJS).then(() => {
                if (!editor.isInDestruct) {
                    tryInitAceEditor();
                }
            });
        }
    }
    destruct() {
        var _a, _b;
        this.instance.off('change', this.toWYSIWYG);
        this.instance.off('focus', this.proxyOnFocus);
        this.instance.off('mousedown', this.proxyOnMouseDown);
        this.instance.destroy();
        (_b = (_a = this.j) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.off('aceInited.source');
    }
    setValue(value) {
        if (this.j.o.beautifyHTML) {
            const html = this.j.e.fire('beautifyHTML', value);
            if (Object(helpers["isString"])(html)) {
                value = html;
            }
        }
        this.instance.setValue(value);
        this.instance.clearSelection();
    }
    getValue() {
        return this.instance.getValue();
    }
    setReadOnly(isReadOnly) {
        this.instance.setReadOnly(isReadOnly);
    }
    focus() {
        this.instance.focus();
    }
    getSelectionStart() {
        const range = this.instance.selection.getRange();
        return this.getIndexByRowColumn(range.start.row, range.start.column);
    }
    getSelectionEnd() {
        const range = this.instance.selection.getRange();
        return this.getIndexByRowColumn(range.end.row, range.end.column);
    }
    selectAll() {
        this.instance.selection.selectAll();
    }
    insertRaw(html) {
        const start = this.instance.selection.getCursor(), end = this.instance.session.insert(start, html);
        this.instance.selection.setRange({
            start,
            end
        }, false);
    }
    setSelectionRange(start, end) {
        this.setSelectionRangeIndices(start, end);
    }
    setPlaceHolder(title) {
    }
    replaceUndoManager() {
        const { observer } = this.jodit;
        this.instance.commands.addCommand({
            name: 'Undo',
            bindKey: { win: 'Ctrl-Z', mac: 'Command-Z' },
            exec: () => {
                observer.undo();
            }
        });
        this.instance.commands.addCommand({
            name: 'Redo',
            bindKey: { win: 'Ctrl-Shift-Z', mac: 'Command-Shift-Z' },
            exec: () => {
                observer.redo();
            }
        });
    }
}

// CONCATENATED MODULE: ./src/plugins/source/editor/engines/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



// CONCATENATED MODULE: ./src/plugins/source/editor/factory.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function createSourceEditor(type, editor, container, toWYSIWYG, fromWYSIWYG) {
    let sourceEditor;
    switch (type) {
        case 'ace':
            if (!editor.o.shadowRoot) {
                sourceEditor = new ace_AceEditor(editor, container, toWYSIWYG, fromWYSIWYG);
                break;
            }
        default:
            sourceEditor = new area_TextAreaEditor(editor, container, toWYSIWYG, fromWYSIWYG);
    }
    sourceEditor.init(editor);
    sourceEditor.onReadyAlways(() => {
        sourceEditor.setReadOnly(editor.o.readonly);
    });
    return sourceEditor;
}

// CONCATENATED MODULE: ./src/plugins/source/source.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







class source_source_source extends plugin_Plugin {
    constructor() {
        super(...arguments);
        this.__lock = false;
        this.__oldMirrorValue = '';
        this.tempMarkerStart = '{start-jodit-selection}';
        this.tempMarkerStartReg = /{start-jodit-selection}/g;
        this.tempMarkerEnd = '{end-jodit-selection}';
        this.tempMarkerEndReg = /{end-jodit-selection}/g;
        this.selInfo = [];
        this.insertHTML = (html) => {
            this.sourceEditor.insertRaw(html);
            this.toWYSIWYG();
        };
        this.fromWYSIWYG = (force = false) => {
            if (!this.__lock || force === true) {
                this.__lock = true;
                const new_value = this.j.getEditorValue(false);
                if (new_value !== this.getMirrorValue()) {
                    this.setMirrorValue(new_value);
                }
                this.__lock = false;
            }
        };
        this.toWYSIWYG = () => {
            if (this.__lock) {
                return;
            }
            const value = this.getMirrorValue();
            if (value === this.__oldMirrorValue) {
                return;
            }
            this.__lock = true;
            this.j.setEditorValue(value);
            this.__lock = false;
            this.__oldMirrorValue = value;
        };
        this.getNormalPosition = (pos, str) => {
            let start = pos;
            while (start > 0) {
                start--;
                if (str[start] === '<' &&
                    str[start + 1] !== undefined &&
                    str[start + 1].match(/[\w\/]+/i)) {
                    return start;
                }
                if (str[start] === '>') {
                    return pos;
                }
            }
            return pos;
        };
        this.__clear = (str) => str.replace(constants["INVISIBLE_SPACE_REG_EXP"](), '');
        this.selectAll = () => {
            this.sourceEditor.selectAll();
        };
        this.onSelectAll = (command) => {
            if (command.toLowerCase() === 'selectall' &&
                this.j.getRealMode() === constants["MODE_SOURCE"]) {
                this.selectAll();
                return false;
            }
        };
        this.getSelectionStart = () => {
            return this.sourceEditor.getSelectionStart();
        };
        this.getSelectionEnd = () => {
            return this.sourceEditor.getSelectionEnd();
        };
        this.saveSelection = () => {
            if (this.j.getRealMode() === constants["MODE_WYSIWYG"]) {
                this.selInfo = this.j.s.save() || [];
                this.j.setEditorValue();
                this.fromWYSIWYG(true);
            }
            else {
                this.selInfo.length = 0;
                const value = this.getMirrorValue();
                if (this.getSelectionStart() === this.getSelectionEnd()) {
                    const marker = this.j.s.marker(true);
                    this.selInfo[0] = {
                        startId: marker.id,
                        collapsed: true,
                        startMarker: marker.outerHTML
                    };
                    const selectionStart = this.getNormalPosition(this.getSelectionStart(), this.getMirrorValue());
                    this.setMirrorValue(value.substr(0, selectionStart) +
                        this.__clear(this.selInfo[0].startMarker) +
                        value.substr(selectionStart));
                }
                else {
                    const markerStart = this.j.s.marker(true);
                    const markerEnd = this.j.s.marker(false);
                    this.selInfo[0] = {
                        startId: markerStart.id,
                        endId: markerEnd.id,
                        collapsed: false,
                        startMarker: this.__clear(markerStart.outerHTML),
                        endMarker: this.__clear(markerEnd.outerHTML)
                    };
                    const selectionStart = this.getNormalPosition(this.getSelectionStart(), value);
                    const selectionEnd = this.getNormalPosition(this.getSelectionEnd(), value);
                    this.setMirrorValue(value.substr(0, selectionStart) +
                        this.selInfo[0].startMarker +
                        value.substr(selectionStart, selectionEnd - selectionStart) +
                        this.selInfo[0].endMarker +
                        value.substr(selectionEnd));
                }
                this.toWYSIWYG();
            }
        };
        this.removeSelection = () => {
            if (!this.selInfo.length) {
                return;
            }
            if (this.j.getRealMode() === constants["MODE_WYSIWYG"]) {
                this.__lock = true;
                this.j.s.restore(this.selInfo);
                this.__lock = false;
                return;
            }
            let value = this.getMirrorValue();
            let selectionStart = 0, selectionEnd = 0;
            try {
                if (this.selInfo[0].startMarker) {
                    value = value.replace(/<span[^>]+data-jodit-selection_marker="start"[^>]*>[<>]*?<\/span>/gim, this.tempMarkerStart);
                }
                if (this.selInfo[0].endMarker) {
                    value = value.replace(/<span[^>]+data-jodit-selection_marker="end"[^>]*>[<>]*?<\/span>/gim, this.tempMarkerEnd);
                }
                if (this.j.o.beautifyHTML) {
                    const html = this.j.e.fire('beautifyHTML', value);
                    if (Object(helpers["isString"])(html)) {
                        value = html;
                    }
                }
                selectionStart = value.indexOf(this.tempMarkerStart);
                selectionEnd = selectionStart;
                value = value.replace(this.tempMarkerStartReg, '');
                if (!this.selInfo[0].collapsed || selectionStart === -1) {
                    selectionEnd = value.indexOf(this.tempMarkerEnd);
                    if (selectionStart === -1) {
                        selectionStart = selectionEnd;
                    }
                }
                value = value.replace(this.tempMarkerEndReg, '');
            }
            finally {
                value = value
                    .replace(this.tempMarkerEndReg, '')
                    .replace(this.tempMarkerStartReg, '');
            }
            this.setMirrorValue(value);
            this.setMirrorSelectionRange(selectionStart, selectionEnd);
            this.toWYSIWYG();
            this.setFocusToMirror();
        };
        this.setMirrorSelectionRange = (start, end) => {
            this.sourceEditor.setSelectionRange(start, end);
        };
        this.onReadonlyReact = () => {
            this.sourceEditor.setReadOnly(this.j.o.readonly);
        };
    }
    getMirrorValue() {
        return this.sourceEditor.getValue();
    }
    setMirrorValue(value) {
        this.sourceEditor.setValue(value);
    }
    setFocusToMirror() {
        this.sourceEditor.focus();
    }
    initSourceEditor(editor) {
        if (editor.o.sourceEditor !== 'area') {
            const sourceEditor = createSourceEditor(editor.o.sourceEditor, editor, this.mirrorContainer, this.toWYSIWYG, this.fromWYSIWYG);
            sourceEditor.onReadyAlways(() => {
                var _a, _b;
                (_a = this.sourceEditor) === null || _a === void 0 ? void 0 : _a.destruct();
                this.sourceEditor = sourceEditor;
                (_b = editor.events) === null || _b === void 0 ? void 0 : _b.fire('sourceEditorReady', editor);
            });
        }
        else {
            this.sourceEditor.onReadyAlways(() => {
                var _a;
                (_a = editor.events) === null || _a === void 0 ? void 0 : _a.fire('sourceEditorReady', editor);
            });
        }
    }
    afterInit(editor) {
        this.mirrorContainer = editor.c.div('jodit-source');
        editor.workplace.appendChild(this.mirrorContainer);
        editor.e.on('afterAddPlace changePlace afterInit', () => {
            editor.workplace.appendChild(this.mirrorContainer);
        });
        this.sourceEditor = createSourceEditor('area', editor, this.mirrorContainer, this.toWYSIWYG, this.fromWYSIWYG);
        const addListeners = () => {
            editor.e
                .off('beforeSetMode.source afterSetMode.source')
                .on('beforeSetMode.source', this.saveSelection)
                .on('afterSetMode.source', this.removeSelection);
        };
        addListeners();
        this.onReadonlyReact();
        editor.e
            .on('insertHTML.source', (html) => {
            if (!editor.o.readonly && !this.j.isEditorMode()) {
                this.insertHTML(html);
                return false;
            }
        })
            .on('readonly.source', this.onReadonlyReact)
            .on('placeholder.source', (text) => {
            this.sourceEditor.setPlaceHolder(text);
        })
            .on('beforeCommand.source', this.onSelectAll)
            .on('change.source', this.fromWYSIWYG);
        editor.e.on('beautifyHTML', html => html);
        if (editor.o.beautifyHTML) {
            const addEventListener = () => {
                var _a, _b;
                const html_beautify = editor.ow.html_beautify;
                if (html_beautify && !editor.isInDestruct) {
                    (_b = (_a = editor.events) === null || _a === void 0 ? void 0 : _a.off('beautifyHTML')) === null || _b === void 0 ? void 0 : _b.on('beautifyHTML', html => html_beautify(html));
                    return true;
                }
                return false;
            };
            if (!addEventListener()) {
                Object(helpers["loadNext"])(editor, editor.o.beautifyHTMLCDNUrlsJS).then(addEventListener);
            }
        }
        this.fromWYSIWYG();
        this.initSourceEditor(editor);
    }
    beforeDestruct(jodit) {
        if (this.sourceEditor) {
            this.sourceEditor.destruct();
            delete this.sourceEditor;
        }
        dom["a" /* Dom */].safeRemove(this.mirrorContainer);
    }
}

// CONCATENATED MODULE: ./src/plugins/source/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



// CONCATENATED MODULE: ./src/plugins/stat.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config["a" /* Config */].prototype.showCharsCounter = true;
config["a" /* Config */].prototype.showWordsCounter = true;
class stat_stat extends plugin_Plugin {
    constructor() {
        super(...arguments);
        this.reInit = () => {
            if (this.j.o.showCharsCounter) {
                this.j.statusbar.append(this.charCounter, true);
            }
            if (this.j.o.showWordsCounter) {
                this.j.statusbar.append(this.wordCounter, true);
            }
            this.j.e.off('change keyup', this.calc).on('change keyup', this.calc);
            this.calc();
        };
        this.calc = this.j.async.throttle(() => {
            const text = this.j.text;
            if (this.j.o.showCharsCounter) {
                this.charCounter.textContent = this.j.i18n('Chars: %d', text.replace(Object(constants["SPACE_REG_EXP"])(), '').length);
            }
            if (this.j.o.showWordsCounter) {
                this.wordCounter.textContent = this.j.i18n('Words: %d', text
                    .replace(Object(constants["INVISIBLE_SPACE_REG_EXP"])(), '')
                    .split(Object(constants["SPACE_REG_EXP"])())
                    .filter((e) => e.length).length);
            }
        }, this.j.defaultTimeout);
    }
    afterInit() {
        this.charCounter = this.j.c.span();
        this.wordCounter = this.j.c.span();
        this.j.e.on('afterInit changePlace afterAddPlace', this.reInit);
        this.reInit();
    }
    beforeDestruct() {
        dom["a" /* Dom */].safeRemove(this.charCounter);
        dom["a" /* Dom */].safeRemove(this.wordCounter);
        this.j.e.off('afterInit changePlace afterAddPlace', this.reInit);
        delete this.charCounter;
        delete this.wordCounter;
    }
}

// EXTERNAL MODULE: ./src/plugins/sticky/sticky.less
var sticky_sticky = __webpack_require__(165);

// CONCATENATED MODULE: ./src/plugins/sticky/sticky.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





config["a" /* Config */].prototype.toolbarSticky = true;
config["a" /* Config */].prototype.toolbarDisableStickyForMobile = true;
config["a" /* Config */].prototype.toolbarStickyOffset = 0;
class sticky_sticky_sticky extends plugin_Plugin {
    constructor() {
        super(...arguments);
        this.isToolbarSticked = false;
        this.createDummy = (toolbar) => {
            if (constants["IS_IE"] && !this.dummyBox) {
                this.dummyBox = this.j.c.div();
                this.dummyBox.classList.add('jodit_sticky-dummy_toolbar');
                this.j.container.insertBefore(this.dummyBox, toolbar);
            }
        };
        this.addSticky = (toolbar) => {
            if (!this.isToolbarSticked) {
                this.createDummy(toolbar);
                this.j.container.classList.add('jodit_sticky');
                this.isToolbarSticked = true;
            }
            Object(helpers["css"])(toolbar, {
                top: this.j.o.toolbarStickyOffset,
                width: this.j.container.offsetWidth - 2
            });
            if (constants["IS_IE"] && this.dummyBox) {
                Object(helpers["css"])(this.dummyBox, {
                    height: toolbar.offsetHeight
                });
            }
        };
        this.removeSticky = (toolbar) => {
            if (this.isToolbarSticked) {
                Object(helpers["css"])(toolbar, {
                    width: '',
                    top: ''
                });
                this.j.container.classList.remove('jodit_sticky');
                this.isToolbarSticked = false;
            }
        };
    }
    isMobile() {
        return (this.j &&
            this.j.options &&
            this.j.container &&
            this.j.o.sizeSM >= this.j.container.offsetWidth);
    }
    afterInit(jodit) {
        jodit.e.on(jodit.ow, 'scroll wheel mousewheel resize', () => {
            const scrollWindowTop = jodit.ow.pageYOffset ||
                (jodit.od.documentElement &&
                    jodit.od.documentElement.scrollTop) ||
                0, offsetEditor = Object(helpers["offset"])(jodit.container, jodit, jodit.od, true), doSticky = jodit.getMode() === constants["MODE_WYSIWYG"] &&
                scrollWindowTop + jodit.o.toolbarStickyOffset >
                    offsetEditor.top &&
                scrollWindowTop + jodit.o.toolbarStickyOffset <
                    offsetEditor.top + offsetEditor.height &&
                !(jodit.o.toolbarDisableStickyForMobile && this.isMobile());
            if (jodit.o.toolbarSticky && jodit.o.toolbar === true) {
                const container = jodit.toolbarContainer;
                if (container) {
                    doSticky
                        ? this.addSticky(container)
                        : this.removeSticky(container);
                }
            }
            jodit.e.fire('toggleSticky', doSticky);
        });
    }
    beforeDestruct(jodit) {
        this.dummyBox && dom["a" /* Dom */].safeRemove(this.dummyBox);
    }
}

// EXTERNAL MODULE: ./src/plugins/symbols/symbols.less
var symbols_symbols = __webpack_require__(166);

// CONCATENATED MODULE: ./src/plugins/symbols/config.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


config["a" /* Config */].prototype.usePopupForSpecialCharacters = false;
config["a" /* Config */].prototype.specialCharacters = [
    '!',
    '&quot;',
    '#',
    '$',
    '%',
    '&amp;',
    "'",
    '(',
    ')',
    '*',
    '+',
    '-',
    '.',
    '/',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    ':',
    ';',
    '&lt;',
    '=',
    '&gt;',
    '?',
    '@',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '[',
    ']',
    '^',
    '_',
    '`',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '{',
    '|',
    '}',
    '~',
    '&euro;',
    '&lsquo;',
    '&rsquo;',
    '&ldquo;',
    '&rdquo;',
    '&ndash;',
    '&mdash;',
    '&iexcl;',
    '&cent;',
    '&pound;',
    '&curren;',
    '&yen;',
    '&brvbar;',
    '&sect;',
    '&uml;',
    '&copy;',
    '&ordf;',
    '&laquo;',
    '&raquo;',
    '&not;',
    '&reg;',
    '&macr;',
    '&deg;',
    '&sup2;',
    '&sup3;',
    '&acute;',
    '&micro;',
    '&para;',
    '&middot;',
    '&cedil;',
    '&sup1;',
    '&ordm;',
    '&frac14;',
    '&frac12;',
    '&frac34;',
    '&iquest;',
    '&Agrave;',
    '&Aacute;',
    '&Acirc;',
    '&Atilde;',
    '&Auml;',
    '&Aring;',
    '&AElig;',
    '&Ccedil;',
    '&Egrave;',
    '&Eacute;',
    '&Ecirc;',
    '&Euml;',
    '&Igrave;',
    '&Iacute;',
    '&Icirc;',
    '&Iuml;',
    '&ETH;',
    '&Ntilde;',
    '&Ograve;',
    '&Oacute;',
    '&Ocirc;',
    '&Otilde;',
    '&Ouml;',
    '&times;',
    '&Oslash;',
    '&Ugrave;',
    '&Uacute;',
    '&Ucirc;',
    '&Uuml;',
    '&Yacute;',
    '&THORN;',
    '&szlig;',
    '&agrave;',
    '&aacute;',
    '&acirc;',
    '&atilde;',
    '&auml;',
    '&aring;',
    '&aelig;',
    '&ccedil;',
    '&egrave;',
    '&eacute;',
    '&ecirc;',
    '&euml;',
    '&igrave;',
    '&iacute;',
    '&icirc;',
    '&iuml;',
    '&eth;',
    '&ntilde;',
    '&ograve;',
    '&oacute;',
    '&ocirc;',
    '&otilde;',
    '&ouml;',
    '&divide;',
    '&oslash;',
    '&ugrave;',
    '&uacute;',
    '&ucirc;',
    '&uuml;',
    '&yacute;',
    '&thorn;',
    '&yuml;',
    '&OElig;',
    '&oelig;',
    '&#372;',
    '&#374',
    '&#373',
    '&#375;',
    '&sbquo;',
    '&#8219;',
    '&bdquo;',
    '&hellip;',
    '&trade;',
    '&#9658;',
    '&bull;',
    '&rarr;',
    '&rArr;',
    '&hArr;',
    '&diams;',
    '&asymp;'
];
config["a" /* Config */].prototype.controls.symbol = {
    icon: 'omega',
    hotkeys: ['ctrl+shift+i', 'cmd+shift+i'],
    tooltip: 'Insert Special Character',
    popup: (editor, current, control, close) => {
        const container = editor.e.fire('generateSpecialCharactersTable.symbols');
        if (container) {
            if (editor.o.usePopupForSpecialCharacters) {
                const box = editor.c.div();
                box.classList.add('jodit-symbols');
                box.appendChild(container);
                editor.e.on(container, 'close_dialog', close);
                return box;
            }
            else {
                Alert(container, editor.i18n('Select Special Character'), undefined, 'jodit-symbols').bindDestruct(editor);
                const a = container.querySelector('a');
                a && a.focus();
            }
        }
    }
};

// CONCATENATED MODULE: ./src/plugins/symbols/symbols.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





class symbols_symbols_symbols extends plugin_Plugin {
    constructor() {
        super(...arguments);
        this.countInRow = 17;
    }
    afterInit(jodit) {
        jodit.e.on('generateSpecialCharactersTable.symbols', () => {
            const container = jodit.c.fromHTML('<div class="jodit-symbols__container">' +
                '<div class="jodit-symbols__container_table"><table><tbody></tbody></table></div>' +
                '<div class="jodit-symbols__container_preview"><div class="jodit-symbols__preview"></div></div>' +
                '</div>'), preview = container.querySelector('.jodit-symbols__preview'), table = container.querySelector('table'), body = table.tBodies[0], chars = [];
            for (let i = 0; i < jodit.o.specialCharacters.length;) {
                const tr = jodit.c.element('tr');
                for (let j = 0; j < this.countInRow && i < jodit.o.specialCharacters.length; j += 1, i += 1) {
                    const td = jodit.c.element('td'), a = jodit.c.fromHTML(`<a
									data-index="${i}"
									data-index-j="${j}"
									href="javascript:void(0)"
									role="option"
									tabindex="-1"
							>${jodit.o.specialCharacters[i]}</a>`);
                    chars.push(a);
                    td.appendChild(a);
                    tr.appendChild(td);
                }
                body.appendChild(tr);
            }
            const self = this;
            jodit.e
                .on(chars, 'focus', function () {
                preview.innerHTML = this.innerHTML;
            })
                .on(chars, 'mousedown', function (e) {
                if (dom["a" /* Dom */].isTag(this, 'a')) {
                    jodit.s.focus();
                    jodit.s.insertHTML(this.innerHTML);
                    jodit.e.fire(this, 'close_dialog');
                    e && e.preventDefault();
                    e && e.stopImmediatePropagation();
                }
            })
                .on(chars, 'mouseenter', function () {
                if (dom["a" /* Dom */].isTag(this, 'a')) {
                    this.focus();
                }
            })
                .on(chars, 'keydown', (e) => {
                const target = e.target;
                if (dom["a" /* Dom */].isTag(target, 'a')) {
                    const index = parseInt(Object(utils["a" /* attr */])(target, '-index') || '0', 10), jIndex = parseInt(Object(utils["a" /* attr */])(target, 'data-index-j') || '0', 10);
                    let newIndex;
                    switch (e.key) {
                        case constants["KEY_UP"]:
                        case constants["KEY_DOWN"]:
                            newIndex =
                                e.key === constants["KEY_UP"]
                                    ? index - self.countInRow
                                    : index + self.countInRow;
                            if (chars[newIndex] === undefined) {
                                newIndex =
                                    e.key === constants["KEY_UP"]
                                        ? Math.floor(chars.length /
                                            self.countInRow) *
                                            self.countInRow +
                                            jIndex
                                        : jIndex;
                                if (newIndex > chars.length - 1) {
                                    newIndex -= self.countInRow;
                                }
                            }
                            chars[newIndex] && chars[newIndex].focus();
                            break;
                        case constants["KEY_RIGHT"]:
                        case constants["KEY_LEFT"]:
                            newIndex =
                                e.key === constants["KEY_LEFT"] ? index - 1 : index + 1;
                            if (chars[newIndex] === undefined) {
                                newIndex =
                                    e.key === constants["KEY_LEFT"]
                                        ? chars.length - 1
                                        : 0;
                            }
                            chars[newIndex] && chars[newIndex].focus();
                            break;
                        case constants["KEY_ENTER"]:
                            jodit.e.fire(target, 'mousedown');
                            e.stopImmediatePropagation();
                            e.preventDefault();
                            break;
                    }
                }
            });
            return container;
        });
    }
    beforeDestruct(jodit) {
        jodit.e.off('generateSpecialCharactersTable.symbols');
    }
}

// CONCATENATED MODULE: ./src/plugins/table/config.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config["a" /* Config */].prototype.table = {
    allowCellSelection: true,
    selectionCellStyle: 'border: 1px double #1e88e5 !important;',
    allowCellResize: true,
    useExtraClassesOptions: false
};
config["a" /* Config */].prototype.controls.table = {
    data: {
        cols: 10,
        rows: 10,
        classList: {
            'table table-bordered': 'Bootstrap Bordered',
            'table table-striped': 'Bootstrap Striped',
            'table table-dark': 'Bootstrap Dark'
        }
    },
    popup: (editor, current, control, close, button) => {
        const default_rows_count = control.data && control.data.rows ? control.data.rows : 10, default_cols_count = control.data && control.data.cols ? control.data.cols : 10;
        const generateExtraClasses = () => {
            if (!editor.o.table.useExtraClassesOptions) {
                return '';
            }
            const out = [];
            if (control.data) {
                const classList = control.data.classList;
                Object.keys(classList).forEach((classes) => {
                    out.push(`<label class="jodit_vertical_middle"><input class="jodit-checkbox" value="${classes}" type="checkbox"/>${classList[classes]}</label>`);
                });
            }
            return out.join('');
        };
        const form = editor.c.fromHTML('<form class="jodit-form jodit-form__inserter">' +
            '<div class="jodit-form__table-creator-box">' +
            '<div class="jodit-form__container"></div>' +
            '<div class="jodit-form__options">' +
            generateExtraClasses() +
            '</div>' +
            '</div>' +
            '<label class="jodit-form__center">' +
            '<span>1</span> &times; <span>1</span>' +
            '</label>' +
            '</form>'), rows = form.querySelectorAll('span')[0], cols = form.querySelectorAll('span')[1], blocksContainer = form.querySelector('.jodit-form__container'), options = form.querySelector('.jodit-form__options'), cells = [];
        const cnt = default_rows_count * default_cols_count;
        for (let i = 0; i < cnt; i += 1) {
            if (!cells[i]) {
                cells.push(editor.c.element('span', {
                    dataIndex: i
                }));
            }
        }
        const mouseenter = (e, index) => {
            const dv = e.target;
            if (!dom["a" /* Dom */].isTag(dv, 'span')) {
                return;
            }
            const k = index === undefined || isNaN(index)
                ? parseInt(Object(utils["a" /* attr */])(dv, '-index') || '0', 10)
                : index || 0;
            const rows_count = Math.ceil((k + 1) / default_cols_count), cols_count = (k % default_cols_count) + 1;
            for (let i = 0; i < cells.length; i += 1) {
                if (cols_count >= (i % default_cols_count) + 1 &&
                    rows_count >= Math.ceil((i + 1) / default_cols_count)) {
                    cells[i].className = 'jodit_hovered';
                }
                else {
                    cells[i].className = '';
                }
            }
            cols.textContent = cols_count.toString();
            rows.textContent = rows_count.toString();
        };
        editor.e
            .on(blocksContainer, 'mousemove', mouseenter)
            .on(blocksContainer, 'touchstart mousedown', (e) => {
            const dv = e.target;
            e.preventDefault();
            e.stopImmediatePropagation();
            if (!dom["a" /* Dom */].isTag(dv, 'span')) {
                return;
            }
            const k = parseInt(Object(utils["a" /* attr */])(dv, '-index') || '0', 10);
            const rows_count = Math.ceil((k + 1) / default_cols_count), cols_count = (k % default_cols_count) + 1;
            const crt = editor.createInside, tbody = crt.element('tbody'), table = crt.element('table');
            table.appendChild(tbody);
            table.style.width = '100%';
            let first_td = null, tr, td;
            for (let i = 1; i <= rows_count; i += 1) {
                tr = crt.element('tr');
                for (let j = 1; j <= cols_count; j += 1) {
                    td = crt.element('td');
                    if (!first_td) {
                        first_td = td;
                    }
                    td.appendChild(crt.element('br'));
                    tr.appendChild(crt.text('\n'));
                    tr.appendChild(crt.text('\t'));
                    tr.appendChild(td);
                }
                tbody.appendChild(crt.text('\n'));
                tbody.appendChild(tr);
            }
            const crnt = editor.s.current();
            if (crnt && editor.s.isCollapsed()) {
                const block = dom["a" /* Dom */].closest(crnt, node => dom["a" /* Dom */].isBlock(node, editor.ew), editor.editor);
                if (block &&
                    block !== editor.editor &&
                    !block.nodeName.match(/^TD|TH|TBODY|TABLE|THEADER|TFOOTER$/)) {
                    editor.s.setCursorAfter(block);
                }
            }
            Object(helpers["$$"])('input[type=checkbox]:checked', options).forEach((input) => {
                input.value
                    .split(/[\s]+/)
                    .forEach((className) => {
                    table.classList.add(className);
                });
            });
            editor.s.insertNode(crt.text('\n'));
            editor.s.insertNode(table, false);
            if (first_td) {
                editor.s.setCursorIn(first_td);
                Object(helpers["scrollIntoView"])(first_td, editor.editor, editor.ed);
            }
            close();
        });
        if (button && button.parentElement) {
            for (let i = 0; i < default_rows_count; i += 1) {
                const row = editor.c.div();
                for (let j = 0; j < default_cols_count; j += 1) {
                    row.appendChild(cells[i * default_cols_count + j]);
                }
                blocksContainer.appendChild(row);
            }
            if (cells[0]) {
                cells[0].className = 'hovered';
            }
        }
        return form;
    },
    tooltip: 'Insert table'
};

// EXTERNAL MODULE: ./src/plugins/table/table.less
var table_table = __webpack_require__(167);

// CONCATENATED MODULE: ./src/plugins/table/resize-cells.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






const resize_cells_key = 'table_processor_observer-resize';
class resize_cells_resizeCells extends plugin_Plugin {
    constructor() {
        super(...arguments);
        this.selectMode = false;
        this.resizeDelta = 0;
        this.createResizeHandle = () => {
            if (!this.resizeHandler) {
                this.resizeHandler = this.j.c.div('jodit-table-resizer');
                this.j.e
                    .on(this.resizeHandler, 'mousedown.table touchstart.table', this.onHandleMouseDown)
                    .on(this.resizeHandler, 'mouseenter.table', () => {
                    this.j.async.clearTimeout(this.hideTimeout);
                });
            }
        };
        this.hideTimeout = 0;
        this.drag = false;
        this.minX = 0;
        this.maxX = 0;
        this.startX = 0;
    }
    get module() {
        return this.j.getInstance('Table', this.j.o);
    }
    get isRTL() {
        return this.j.o.direction === 'rtl';
    }
    showResizeHandle() {
        this.j.async.clearTimeout(this.hideTimeout);
        this.j.workplace.appendChild(this.resizeHandler);
    }
    hideResizeHandle() {
        this.hideTimeout = this.j.async.setTimeout(() => {
            dom["a" /* Dom */].safeRemove(this.resizeHandler);
        }, {
            timeout: this.j.defaultTimeout,
            label: 'hideResizer'
        });
    }
    onHandleMouseDown(event) {
        if (this.j.isLocked) {
            return;
        }
        this.drag = true;
        this.j.e.on(this.j.ew, 'mousemove.table touchmove.table', this.onMouseMove);
        this.startX = event.clientX;
        this.j.lock(resize_cells_key);
        this.resizeHandler.classList.add('jodit-table-resizer_moved');
        let box, tableBox = this.workTable.getBoundingClientRect();
        this.minX = 0;
        this.maxX = 1000000;
        if (this.wholeTable !== null) {
            tableBox = this.workTable
                .parentNode.getBoundingClientRect();
            this.minX = tableBox.left;
            this.maxX = this.minX + tableBox.width;
        }
        else {
            const coordinate = table_Table.formalCoordinate(this.workTable, this.workCell, true);
            table_Table.formalMatrix(this.workTable, (td, i, j) => {
                if (coordinate[1] === j) {
                    box = td.getBoundingClientRect();
                    this.minX = Math.max(box.left + constants["NEARBY"] / 2, this.minX);
                }
                if (coordinate[1] + (this.isRTL ? -1 : 1) === j) {
                    box = td.getBoundingClientRect();
                    this.maxX = Math.min(box.left + box.width - constants["NEARBY"] / 2, this.maxX);
                }
            });
        }
        return false;
    }
    onMouseMove(event) {
        if (!this.drag) {
            return;
        }
        this.j.e.fire('closeAllPopups');
        let x = event.clientX;
        const workplacePosition = Object(helpers["offset"])((this.resizeHandler.parentNode ||
            this.j.od.documentElement), this.j, this.j.od, true);
        if (x < this.minX) {
            x = this.minX;
        }
        if (x > this.maxX) {
            x = this.maxX;
        }
        this.resizeDelta =
            x - this.startX + (!this.j.o.iframe ? 0 : workplacePosition.left);
        this.resizeHandler.style.left =
            x - (this.j.o.iframe ? 0 : workplacePosition.left) + 'px';
        const sel = this.j.s.sel;
        sel && sel.removeAllRanges();
        if (event.preventDefault) {
            event.preventDefault();
        }
    }
    onMouseUp(e) {
        if (this.selectMode || this.drag) {
            this.selectMode = false;
            this.j.unlock();
        }
        if (!this.resizeHandler || !this.drag) {
            return;
        }
        this.drag = false;
        this.j.e.off(this.j.ew, 'mousemove.table touchmove.table', this.onMouseMove);
        this.resizeHandler.classList.remove('jodit-table-resizer_moved');
        if (this.startX !== e.clientX) {
            if (this.wholeTable === null) {
                this.resizeColumns();
            }
            else {
                this.resizeTable();
            }
        }
        this.j.setEditorValue();
        this.j.s.focus();
    }
    resizeColumns() {
        const delta = this.resizeDelta;
        const marked = [];
        table_Table.setColumnWidthByDelta(this.workTable, table_Table.formalCoordinate(this.workTable, this.workCell, true)[1], delta, true, marked);
        const nextTD = Object(helpers["call"])(this.isRTL ? dom["a" /* Dom */].prev : dom["a" /* Dom */].next, this.workCell, elm => dom["a" /* Dom */].isCell(elm, this.j.ew), this.workCell.parentNode);
        table_Table.setColumnWidthByDelta(this.workTable, table_Table.formalCoordinate(this.workTable, nextTD)[1], -delta, false, marked);
    }
    resizeTable() {
        const delta = this.resizeDelta * (this.isRTL ? -1 : 1);
        const width = this.workTable.offsetWidth, parentWidth = Object(helpers["getContentWidth"])(this.workTable.parentNode, this.j.ew);
        const rightSide = !this.wholeTable;
        const needChangeWidth = this.isRTL ? !rightSide : rightSide;
        if (needChangeWidth) {
            this.workTable.style.width =
                ((width + delta) / parentWidth) * 100 + '%';
        }
        else {
            const side = this.isRTL ? 'marginRight' : 'marginLeft';
            const margin = parseInt(this.j.ew.getComputedStyle(this.workTable)[side] || '0', 10);
            this.workTable.style.width =
                ((width - delta) / parentWidth) * 100 + '%';
            this.workTable.style[side] =
                ((margin + delta) / parentWidth) * 100 + '%';
        }
    }
    setWorkCell(cell, wholeTable = null) {
        this.wholeTable = wholeTable;
        this.workCell = cell;
        this.workTable = dom["a" /* Dom */].up(cell, (elm) => dom["a" /* Dom */].isTag(elm, 'table'), this.j.editor);
    }
    calcHandlePosition(table, cell, offsetX = 0, delta = 0) {
        const box = Object(helpers["offset"])(cell, this.j, this.j.ed);
        if (offsetX > constants["NEARBY"] && offsetX < box.width - constants["NEARBY"]) {
            this.hideResizeHandle();
            return;
        }
        const workplacePosition = Object(helpers["offset"])(this.j.workplace, this.j, this.j.od, true), parentBox = Object(helpers["offset"])(table, this.j, this.j.ed);
        this.resizeHandler.style.left =
            (offsetX <= constants["NEARBY"] ? box.left : box.left + box.width) -
                workplacePosition.left +
                delta +
                'px';
        Object.assign(this.resizeHandler.style, {
            height: parentBox.height + 'px',
            top: parentBox.top - workplacePosition.top + 'px'
        });
        this.showResizeHandle();
        if (offsetX <= constants["NEARBY"]) {
            const prevTD = Object(helpers["call"])(this.isRTL ? dom["a" /* Dom */].next : dom["a" /* Dom */].prev, cell, elm => dom["a" /* Dom */].isCell(elm, this.j.ew), cell.parentNode);
            this.setWorkCell(prevTD || cell, prevTD ? null : true);
        }
        else {
            const nextTD = Object(helpers["call"])(!this.isRTL ? dom["a" /* Dom */].next : dom["a" /* Dom */].prev, cell, elm => dom["a" /* Dom */].isCell(elm, this.j.ew), cell.parentNode);
            this.setWorkCell(cell, !nextTD ? false : null);
        }
    }
    afterInit(editor) {
        if (!editor.o.table.allowCellResize) {
            return;
        }
        editor.e
            .off(this.j.ow, '.resize-cells')
            .off('.resize-cells')
            .on('change.resize-cells afterCommand.resize-cells afterSetMode.resize-cells', () => {
            Object(helpers["$$"])('table', editor.editor).forEach(this.observe);
        })
            .on(this.j.ow, 'mouseup.resize-cells touchend.resize-cells', this.onMouseUp)
            .on(this.j.ow, 'scroll.resize-cells', () => {
            if (!this.drag) {
                return;
            }
            const parent = dom["a" /* Dom */].up(this.workCell, (elm) => dom["a" /* Dom */].isTag(elm, 'table'), editor.editor);
            if (parent) {
                const parentBox = parent.getBoundingClientRect();
                this.resizeHandler.style.top = parentBox.top + 'px';
            }
        })
            .on('beforeSetMode.resize-cells', () => {
            this.module.getAllSelectedCells().forEach(td => {
                this.module.removeSelection(td);
                table_Table.normalizeTable(dom["a" /* Dom */].closest(td, 'table', editor.editor));
            });
        });
    }
    observe(table) {
        if (Object(helpers["dataBind"])(table, resize_cells_key)) {
            return;
        }
        Object(helpers["dataBind"])(table, resize_cells_key, true);
        this.j.e
            .on(table, 'mouseleave.resize-cells', (e) => {
            if (this.resizeHandler &&
                this.resizeHandler !== e.relatedTarget) {
                this.hideResizeHandle();
            }
        })
            .on(table, 'mousemove.resize-cells touchmove.resize-cells', (event) => {
            if (this.j.isLocked) {
                return;
            }
            const cell = dom["a" /* Dom */].up(event.target, elm => dom["a" /* Dom */].isCell(elm, this.j.ew), table);
            if (!cell) {
                return;
            }
            this.calcHandlePosition(table, cell, event.offsetX);
        });
        this.createResizeHandle();
    }
    beforeDestruct(jodit) {
        if (jodit.events) {
            jodit.e.off(this.j.ow, '.resize-cells');
            jodit.e.off('.resize-cells');
        }
    }
}
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], resize_cells_resizeCells.prototype, "onHandleMouseDown", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], resize_cells_resizeCells.prototype, "onMouseMove", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], resize_cells_resizeCells.prototype, "onMouseUp", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], resize_cells_resizeCells.prototype, "observe", null);

// CONCATENATED MODULE: ./src/plugins/table/select-cells.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







const select_cells_key = 'table_processor_observer';
class select_cells_selectCells extends plugin_Plugin {
    constructor() {
        super(...arguments);
        this.selectedCell = null;
    }
    get module() {
        return this.j.getInstance('Table', this.j.o);
    }
    afterInit(jodit) {
        if (!jodit.o.table.allowCellSelection) {
            return;
        }
        jodit.e
            .on(this.j.ow, 'click.select-cells', this.onRemoveSelection)
            .on('keydown.select-cells', (event) => {
            if (event.key === constants["KEY_TAB"]) {
                this.unselectCells();
            }
        })
            .on('beforeCommand.select-cells', this.onExecCommand)
            .on('afterCommand.select-cells', this.onAfterCommand)
            .on('change afterCommand afterSetMode click'
            .split(' ')
            .map(e => e + '.select-cells')
            .join(' '), () => {
            Object(helpers["$$"])('table', jodit.editor).forEach(this.observe);
        });
    }
    observe(table) {
        if (Object(helpers["dataBind"])(table, select_cells_key)) {
            return;
        }
        this.onRemoveSelection();
        Object(helpers["dataBind"])(table, select_cells_key, true);
        this.j.e
            .on(table, 'mousedown.select-cells touchstart.select-cells', this.onStartSelection.bind(this, table))
            .on(table, 'mouseup.select-cells touchend.select-cells', this.onStopSelection.bind(this, table));
    }
    onStartSelection(table, e) {
        if (this.j.o.readonly) {
            return;
        }
        this.unselectCells();
        const cell = dom["a" /* Dom */].closest(e.target, ['td', 'th'], table);
        if (!cell) {
            return;
        }
        if (!cell.firstChild) {
            cell.appendChild(this.j.createInside.element('br'));
        }
        this.selectedCell = cell;
        this.module.addSelection(cell);
        this.j.e.on(table, 'mousemove.select-cells touchmove.select-cells', this.onMove.bind(this, table));
        this.j.e.fire('showPopup', table, () => Object(helpers["position"])(cell, this.j), 'cells');
    }
    onMove(table, e) {
        if (this.j.o.readonly) {
            return;
        }
        if (this.j.isLockedNotBy(select_cells_key)) {
            return;
        }
        const node = this.j.ed.elementFromPoint(e.clientX, e.clientY);
        if (!node) {
            return;
        }
        const cell = dom["a" /* Dom */].closest(node, ['td', 'th'], table);
        if (!cell || !this.selectedCell) {
            return;
        }
        if (cell !== this.selectedCell) {
            this.j.lock(select_cells_key);
            if (e.preventDefault) {
                e.preventDefault();
            }
        }
        this.unselectCells(table);
        const bound = table_Table.getSelectedBound(table, [cell, this.selectedCell]), box = table_Table.formalMatrix(table);
        for (let i = bound[0][0]; i <= bound[1][0]; i += 1) {
            for (let j = bound[0][1]; j <= bound[1][1]; j += 1) {
                this.module.addSelection(box[i][j]);
            }
        }
        this.j.e.fire('hidePopup');
        e.stopPropagation();
        (() => {
            const n = this.j.createInside.fromHTML('<div style="color:rgba(0,0,0,0.01);width:0;height:0">&nbsp;</div>');
            cell.appendChild(n);
            this.j.async.setTimeout(() => {
                var _a;
                (_a = n.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(n);
            }, this.j.defaultTimeout / 5);
        })();
    }
    onRemoveSelection(e) {
        var _a;
        if (!((_a = e === null || e === void 0 ? void 0 : e.buffer) === null || _a === void 0 ? void 0 : _a.actionTrigger) &&
            !this.selectedCell &&
            this.module.getAllSelectedCells().length) {
            this.j.unlock();
            this.unselectCells();
            this.j.e.fire('hidePopup');
            return;
        }
        this.selectedCell = null;
    }
    onStopSelection(table, e) {
        if (!this.selectedCell) {
            return;
        }
        this.j.unlock();
        const node = this.j.ed.elementFromPoint(e.clientX, e.clientY);
        if (!node) {
            return;
        }
        const cell = dom["a" /* Dom */].closest(node, ['td', 'th'], table);
        if (!cell) {
            return;
        }
        const ownTable = dom["a" /* Dom */].closest(cell, 'table', table);
        if (ownTable && ownTable !== table) {
            return;
        }
        const bound = table_Table.getSelectedBound(table, [cell, this.selectedCell]), box = table_Table.formalMatrix(table);
        const max = box[bound[1][0]][bound[1][1]], min = box[bound[0][0]][bound[0][1]];
        this.j.e.fire('showPopup', table, () => {
            const minOffset = Object(helpers["position"])(min, this.j), maxOffset = Object(helpers["position"])(max, this.j);
            return {
                left: minOffset.left,
                top: minOffset.top,
                width: maxOffset.left - minOffset.left + maxOffset.width,
                height: maxOffset.top - minOffset.top + maxOffset.height
            };
        }, 'cells');
        Object(helpers["$$"])('table', this.j.editor).forEach(table => {
            this.j.e.off(table, 'mousemove.select-cells touchmove.select-cells');
        });
    }
    unselectCells(table, currentCell) {
        const module = this.module;
        const cells = module.getAllSelectedCells();
        if (cells.length) {
            cells.forEach(cell => {
                if (!currentCell || currentCell !== cell) {
                    module.removeSelection(cell);
                }
            });
        }
    }
    onExecCommand(command) {
        if (/table(splitv|splitg|merge|empty|bin|binrow|bincolumn|addcolumn|addrow)/.test(command)) {
            command = command.replace('table', '');
            const cells = this.module.getAllSelectedCells();
            if (cells.length) {
                const cell = cells.shift();
                if (!cell) {
                    return;
                }
                const table = dom["a" /* Dom */].closest(cell, 'table', this.j.editor);
                if (!table) {
                    return;
                }
                switch (command) {
                    case 'splitv':
                        table_Table.splitVertical(table, this.j);
                        break;
                    case 'splitg':
                        table_Table.splitHorizontal(table, this.j);
                        break;
                    case 'merge':
                        table_Table.mergeSelected(table, this.j);
                        break;
                    case 'empty':
                        cells.forEach(td => (td.innerHTML = ''));
                        break;
                    case 'bin':
                        dom["a" /* Dom */].safeRemove(table);
                        break;
                    case 'binrow':
                        table_Table.removeRow(table, cell.parentNode.rowIndex);
                        break;
                    case 'bincolumn':
                        table_Table.removeColumn(table, cell.cellIndex);
                        break;
                    case 'addcolumnafter':
                    case 'addcolumnbefore':
                        table_Table.appendColumn(table, cell.cellIndex, command === 'addcolumnafter', this.j.createInside);
                        break;
                    case 'addrowafter':
                    case 'addrowbefore':
                        table_Table.appendRow(table, cell.parentNode, command === 'addrowafter', this.j.createInside);
                        break;
                }
            }
            return false;
        }
    }
    onAfterCommand(command) {
        if (/^justify/.test(command)) {
            this.module
                .getAllSelectedCells()
                .forEach(elm => alignElement(command, elm, this.j));
        }
    }
    beforeDestruct(jodit) {
        this.onRemoveSelection();
        jodit.e.off('.select-cells');
    }
}
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], select_cells_selectCells.prototype, "observe", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], select_cells_selectCells.prototype, "onRemoveSelection", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], select_cells_selectCells.prototype, "onStopSelection", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], select_cells_selectCells.prototype, "onExecCommand", null);
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], select_cells_selectCells.prototype, "onAfterCommand", null);

// CONCATENATED MODULE: ./src/plugins/table/table-keyboard-navigation.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function tableKeyboardNavigation(editor) {
    editor.e
        .off('.tableKeyboardNavigation')
        .on('keydown.tableKeyboardNavigation', (event) => {
        let current, block;
        if (event.key === constants["KEY_TAB"] ||
            event.key === constants["KEY_LEFT"] ||
            event.key === constants["KEY_RIGHT"] ||
            event.key === constants["KEY_UP"] ||
            event.key === constants["KEY_DOWN"]) {
            current = editor.s.current();
            block = dom["a" /* Dom */].up(current, (elm) => elm && elm.nodeName && /^td|th$/i.test(elm.nodeName), editor.editor);
            if (!block) {
                return;
            }
            const range = editor.s.range;
            if (event.key !== constants["KEY_TAB"] && current !== block) {
                if (((event.key === constants["KEY_LEFT"] ||
                    event.key === constants["KEY_UP"]) &&
                    (dom["a" /* Dom */].prev(current, (elm) => event.key === constants["KEY_UP"]
                        ? dom["a" /* Dom */].isTag(elm, 'br')
                        : !!elm, block) ||
                        (event.key !== constants["KEY_UP"] &&
                            dom["a" /* Dom */].isText(current) &&
                            range.startOffset !== 0))) ||
                    ((event.key === constants["KEY_RIGHT"] ||
                        event.key === constants["KEY_DOWN"]) &&
                        (dom["a" /* Dom */].next(current, (elm) => event.key === constants["KEY_DOWN"]
                            ? dom["a" /* Dom */].isTag(elm, 'br')
                            : !!elm, block) ||
                            (event.key !== constants["KEY_DOWN"] &&
                                dom["a" /* Dom */].isText(current) &&
                                current.nodeValue &&
                                range.startOffset !==
                                    current.nodeValue.length)))) {
                    return;
                }
            }
        }
        else {
            return;
        }
        const table = dom["a" /* Dom */].up(block, (elm) => elm && /^table$/i.test(elm.nodeName), editor.editor);
        let next = null;
        switch (event.key) {
            case constants["KEY_TAB"]:
            case constants["KEY_LEFT"]:
                const sibling = event.key === constants["KEY_LEFT"] || event.shiftKey
                    ? 'prev'
                    : 'next';
                next = dom["a" /* Dom */][sibling](block, (elm) => elm &&
                    /^td|th$/i.test(elm.tagName), table);
                if (!next) {
                    table_Table.appendRow(table, sibling === 'next'
                        ? false
                        : table.querySelector('tr'), sibling === 'next', editor.createInside);
                    next = dom["a" /* Dom */][sibling](block, (elm) => elm && dom["a" /* Dom */].isCell(elm, editor.ew), table);
                }
                break;
            case constants["KEY_UP"]:
            case constants["KEY_DOWN"]:
                {
                    let i = 0, j = 0;
                    const matrix = table_Table.formalMatrix(table, (elm, _i, _j) => {
                        if (elm === block) {
                            i = _i;
                            j = _j;
                        }
                    });
                    if (event.key === constants["KEY_UP"]) {
                        if (matrix[i - 1] !== undefined) {
                            next = matrix[i - 1][j];
                        }
                    }
                    else {
                        if (matrix[i + 1] !== undefined) {
                            next = matrix[i + 1][j];
                        }
                    }
                }
                break;
        }
        if (next) {
            if (!next.firstChild) {
                const first = editor.createInside.element('br');
                next.appendChild(first);
                editor.s.setCursorBefore(first);
            }
            else {
                if (event.key === constants["KEY_TAB"]) {
                    editor.s.select(next, true);
                }
                else {
                    editor.s.setCursorIn(next, event.key === constants["KEY_RIGHT"] ||
                        event.key === constants["KEY_DOWN"]);
                }
            }
            return false;
        }
    });
}

// CONCATENATED MODULE: ./src/plugins/table/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





// EXTERNAL MODULE: ./src/plugins/tooltip/tooltip.less
var tooltip_tooltip = __webpack_require__(168);

// CONCATENATED MODULE: ./src/plugins/tooltip/tooltip.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







class tooltip_tooltip_tooltip extends plugin_Plugin {
    constructor() {
        super(...arguments);
        this.isOpened = false;
    }
    afterInit(jodit) {
        this.container = jodit.c.div('jodit-tooltip');
        Object(global["b" /* getContainer */])(this.j, tooltip_tooltip_tooltip).appendChild(this.container);
        let timeout = 0;
        jodit.e
            .off('.tooltip')
            .on('showTooltip.tooltip', (target, content) => {
            jodit.async.clearTimeout(timeout);
            this.open(target, content);
        })
            .on('escape.tooltip', this.close)
            .on('hideTooltip.tooltip change.tooltip updateToolbar.tooltip scroll.tooltip changePlace.tooltip hidePopup.tooltip closeAllPopups.tooltip', () => {
            timeout = jodit.async.setTimeout(() => this.close(), this.j.defaultTimeout);
        });
    }
    beforeDestruct(jodit) {
        jodit === null || jodit === void 0 ? void 0 : jodit.e.off('.tooltip');
        this.close();
        dom["a" /* Dom */].safeRemove(this.container);
    }
    open(target, content) {
        if (!dom["a" /* Dom */].up(target, elm => elm && elm.nodeName === 'BODY')) {
            return;
        }
        this.container.classList.add('jodit-tooltip_visible');
        this.container.innerHTML = content;
        this.isOpened = true;
        this.calcPosition(target);
    }
    calcPosition(target) {
        const bound = Object(helpers["offset"])(target, this.j, this.j.od, true);
        Object(helpers["css"])(this.container, {
            left: bound.left - this.container.offsetWidth / 2 + bound.width / 2,
            top: bound.top + bound.height,
            position: null
        });
    }
    close() {
        if (this.isOpened) {
            this.isOpened = false;
            this.container.classList.remove('jodit-tooltip_visible');
            Object(helpers["css"])(this.container, {
                left: -5000,
                position: 'fixed'
            });
        }
    }
}
Object(tslib_es6["a" /* __decorate */])([
    esm["a" /* default */]
], tooltip_tooltip_tooltip.prototype, "close", null);

// EXTERNAL MODULE: ./src/plugins/xpath/xpath.less
var xpath_xpath = __webpack_require__(169);

// CONCATENATED MODULE: ./src/plugins/xpath/xpath.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */








config["a" /* Config */].prototype.controls.selectall = {
    icon: 'select-all',
    command: 'selectall',
    tooltip: 'Select all'
};
config["a" /* Config */].prototype.showXPathInStatusbar = true;
class xpath_xpath_xpath extends plugin_Plugin {
    constructor() {
        super(...arguments);
        this.onContext = (bindElement, event) => {
            if (!this.menu) {
                this.menu = new context_menu_ContextMenu(this.j);
            }
            this.menu.show(event.clientX, event.clientY, [
                {
                    icon: 'bin',
                    title: bindElement === this.j.editor ? 'Clear' : 'Remove',
                    exec: () => {
                        if (bindElement !== this.j.editor) {
                            dom["a" /* Dom */].safeRemove(bindElement);
                        }
                        else {
                            this.j.value = '';
                        }
                        this.j.setEditorValue();
                    }
                },
                {
                    icon: 'select-all',
                    title: 'Select',
                    exec: () => {
                        this.j.s.select(bindElement);
                    }
                }
            ]);
            return false;
        };
        this.onSelectPath = (bindElement, event) => {
            this.j.s.focus();
            const path = Object(helpers["attr"])(event.target, '-path') || '/';
            if (path === '/') {
                this.j.execCommand('selectall');
                return false;
            }
            try {
                const elm = this.j.ed
                    .evaluate(path, this.j.editor, null, XPathResult.ANY_TYPE, null)
                    .iterateNext();
                if (elm) {
                    this.j.s.select(elm);
                    return false;
                }
            }
            catch (_a) { }
            this.j.s.select(bindElement);
            return false;
        };
        this.tpl = (bindElement, path, name, title) => {
            const item = this.j.c.fromHTML(`<span class="jodit-xpath__item"><a role="button" data-path="${path}" href="javascript:void(0)" title="${title}" tabindex="-1"'>${Object(helpers["trim"])(name)}</a></span>`);
            const a = item.firstChild;
            this.j.e
                .on(a, 'click', this.onSelectPath.bind(this, bindElement))
                .on(a, 'contextmenu', this.onContext.bind(this, bindElement));
            return item;
        };
        this.removeSelectAll = () => {
            if (this.selectAllButton) {
                this.selectAllButton.destruct();
                delete this.selectAllButton;
            }
        };
        this.appendSelectAll = () => {
            this.removeSelectAll();
            this.selectAllButton = makeButton(this.j, {
                name: 'selectall',
                ...this.j.o.controls.selectall
            });
            this.selectAllButton.state.size = 'tiny';
            this.container &&
                this.container.insertBefore(this.selectAllButton.container, this.container.firstChild);
        };
        this.calcPathImd = () => {
            if (this.isDestructed) {
                return;
            }
            const current = this.j.s.current();
            if (this.container) {
                this.container.innerHTML = constants["INVISIBLE_SPACE"];
            }
            if (current) {
                let name, xpth, li;
                dom["a" /* Dom */].up(current, (elm) => {
                    if (elm && this.j.editor !== elm && !dom["a" /* Dom */].isText(elm)) {
                        name = elm.nodeName.toLowerCase();
                        xpth = Object(helpers["getXPathByElement"])(elm, this.j.editor).replace(/^\//, '');
                        li = this.tpl(elm, xpth, name, this.j.i18n('Select %s', name));
                        this.container &&
                            this.container.insertBefore(li, this.container.firstChild);
                    }
                }, this.j.editor);
            }
            this.appendSelectAll();
        };
        this.calcPath = this.j.async.debounce(this.calcPathImd, this.j.defaultTimeout * 2);
        this.menu = null;
    }
    afterInit() {
        if (this.j.o.showXPathInStatusbar) {
            this.container = this.j.c.div('jodit-xpath');
            this.j.e
                .off('.xpath')
                .on('mouseup.xpath change.xpath keydown.xpath changeSelection.xpath', this.calcPath)
                .on('afterSetMode.xpath afterInit.xpath changePlace.xpath', () => {
                if (!this.j.o.showXPathInStatusbar) {
                    return;
                }
                this.j.statusbar.append(this.container);
                if (this.j.getRealMode() === constants["MODE_WYSIWYG"]) {
                    this.calcPath();
                }
                else {
                    if (this.container) {
                        this.container.innerHTML = constants["INVISIBLE_SPACE"];
                    }
                    this.appendSelectAll();
                }
            });
            this.calcPath();
        }
    }
    beforeDestruct() {
        if (this.j && this.j.events) {
            this.j.e.off('.xpath');
        }
        this.removeSelectAll();
        this.menu && this.menu.destruct();
        dom["a" /* Dom */].safeRemove(this.container);
        delete this.menu;
        delete this.container;
    }
}

// CONCATENATED MODULE: ./src/plugins/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */








































// EXTERNAL MODULE: ./src/styles/icons/about.svg
var icons_about = __webpack_require__(34);

// EXTERNAL MODULE: ./src/styles/icons/addcolumn.svg
var addcolumn = __webpack_require__(35);

// EXTERNAL MODULE: ./src/styles/icons/addrow.svg
var addrow = __webpack_require__(36);

// EXTERNAL MODULE: ./src/styles/icons/angle-down.svg
var angle_down = __webpack_require__(37);

// EXTERNAL MODULE: ./src/styles/icons/angle-left.svg
var angle_left = __webpack_require__(38);

// EXTERNAL MODULE: ./src/styles/icons/angle-right.svg
var angle_right = __webpack_require__(39);

// EXTERNAL MODULE: ./src/styles/icons/angle-up.svg
var angle_up = __webpack_require__(40);

// EXTERNAL MODULE: ./src/styles/icons/arrows-alt.svg
var arrows_alt = __webpack_require__(41);

// EXTERNAL MODULE: ./src/styles/icons/arrows-h.svg
var arrows_h = __webpack_require__(42);

// EXTERNAL MODULE: ./src/styles/icons/attachment.svg
var attachment = __webpack_require__(43);

// EXTERNAL MODULE: ./src/styles/icons/bin.svg
var bin = __webpack_require__(44);

// EXTERNAL MODULE: ./src/styles/icons/bold.svg
var icons_bold = __webpack_require__(45);

// EXTERNAL MODULE: ./src/styles/icons/brush.svg
var brush = __webpack_require__(46);

// EXTERNAL MODULE: ./src/styles/icons/cancel.svg
var icons_cancel = __webpack_require__(47);

// EXTERNAL MODULE: ./src/styles/icons/center.svg
var center = __webpack_require__(48);

// EXTERNAL MODULE: ./src/styles/icons/chain-broken.svg
var chain_broken = __webpack_require__(49);

// EXTERNAL MODULE: ./src/styles/icons/check.svg
var icons_check = __webpack_require__(50);

// EXTERNAL MODULE: ./src/styles/icons/check-square.svg
var check_square = __webpack_require__(51);

// EXTERNAL MODULE: ./src/styles/icons/chevron.svg
var chevron = __webpack_require__(52);

// EXTERNAL MODULE: ./src/styles/icons/copyformat.svg
var copyformat = __webpack_require__(53);

// EXTERNAL MODULE: ./src/styles/icons/crop.svg
var crop = __webpack_require__(54);

// EXTERNAL MODULE: ./src/styles/icons/copy.svg
var copy = __webpack_require__(55);

// EXTERNAL MODULE: ./src/styles/icons/cut.svg
var cut = __webpack_require__(56);

// EXTERNAL MODULE: ./src/styles/icons/dedent.svg
var dedent = __webpack_require__(57);

// EXTERNAL MODULE: ./src/styles/icons/dots.svg
var dots = __webpack_require__(58);

// EXTERNAL MODULE: ./src/styles/icons/enter.svg
var icons_enter = __webpack_require__(59);

// EXTERNAL MODULE: ./src/styles/icons/eraser.svg
var eraser = __webpack_require__(60);

// EXTERNAL MODULE: ./src/styles/icons/eye.svg
var eye = __webpack_require__(61);

// EXTERNAL MODULE: ./src/styles/icons/file.svg
var icons_file = __webpack_require__(62);

// EXTERNAL MODULE: ./src/styles/icons/folder.svg
var icons_folder = __webpack_require__(63);

// EXTERNAL MODULE: ./src/styles/icons/font.svg
var icons_font = __webpack_require__(64);

// EXTERNAL MODULE: ./src/styles/icons/fontsize.svg
var fontsize = __webpack_require__(65);

// EXTERNAL MODULE: ./src/styles/icons/fullsize.svg
var icons_fullsize = __webpack_require__(66);

// EXTERNAL MODULE: ./src/styles/icons/hr.svg
var icons_hr = __webpack_require__(67);

// EXTERNAL MODULE: ./src/styles/icons/image.svg
var icons_image = __webpack_require__(68);

// EXTERNAL MODULE: ./src/styles/icons/indent.svg
var icons_indent = __webpack_require__(69);

// EXTERNAL MODULE: ./src/styles/icons/info-circle.svg
var info_circle = __webpack_require__(70);

// EXTERNAL MODULE: ./src/styles/icons/italic.svg
var italic = __webpack_require__(71);

// EXTERNAL MODULE: ./src/styles/icons/justify.svg
var icons_justify = __webpack_require__(72);

// EXTERNAL MODULE: ./src/styles/icons/left.svg
var icons_left = __webpack_require__(73);

// EXTERNAL MODULE: ./src/styles/icons/link.svg
var icons_link = __webpack_require__(74);

// EXTERNAL MODULE: ./src/styles/icons/lock.svg
var lock = __webpack_require__(75);

// EXTERNAL MODULE: ./src/styles/icons/menu.svg
var icons_menu = __webpack_require__(76);

// EXTERNAL MODULE: ./src/styles/icons/merge.svg
var merge = __webpack_require__(77);

// EXTERNAL MODULE: ./src/styles/icons/ok.svg
var ok = __webpack_require__(78);

// EXTERNAL MODULE: ./src/styles/icons/ol.svg
var ol = __webpack_require__(79);

// EXTERNAL MODULE: ./src/styles/icons/omega.svg
var omega = __webpack_require__(80);

// EXTERNAL MODULE: ./src/styles/icons/outdent.svg
var outdent = __webpack_require__(81);

// EXTERNAL MODULE: ./src/styles/icons/palette.svg
var palette = __webpack_require__(82);

// EXTERNAL MODULE: ./src/styles/icons/paragraph.svg
var paragraph = __webpack_require__(83);

// EXTERNAL MODULE: ./src/styles/icons/paste.svg
var icons_paste = __webpack_require__(84);

// EXTERNAL MODULE: ./src/styles/icons/pencil.svg
var pencil = __webpack_require__(85);

// EXTERNAL MODULE: ./src/styles/icons/plus.svg
var plus = __webpack_require__(86);

// EXTERNAL MODULE: ./src/styles/icons/print.svg
var print = __webpack_require__(87);

// EXTERNAL MODULE: ./src/styles/icons/redo.svg
var redo = __webpack_require__(88);

// EXTERNAL MODULE: ./src/styles/icons/resize.svg
var icons_resize = __webpack_require__(89);

// EXTERNAL MODULE: ./src/styles/icons/resizer.svg
var icons_resizer = __webpack_require__(90);

// EXTERNAL MODULE: ./src/styles/icons/right.svg
var icons_right = __webpack_require__(91);

// EXTERNAL MODULE: ./src/styles/icons/save.svg
var icons_save = __webpack_require__(92);

// EXTERNAL MODULE: ./src/styles/icons/select-all.svg
var select_all = __webpack_require__(93);

// EXTERNAL MODULE: ./src/styles/icons/shrink.svg
var shrink = __webpack_require__(94);

// EXTERNAL MODULE: ./src/styles/icons/source.svg
var icons_source = __webpack_require__(95);

// EXTERNAL MODULE: ./src/styles/icons/splitg.svg
var splitg = __webpack_require__(96);

// EXTERNAL MODULE: ./src/styles/icons/splitv.svg
var splitv = __webpack_require__(97);

// EXTERNAL MODULE: ./src/styles/icons/strikethrough.svg
var strikethrough = __webpack_require__(98);

// EXTERNAL MODULE: ./src/styles/icons/subscript.svg
var subscript = __webpack_require__(99);

// EXTERNAL MODULE: ./src/styles/icons/superscript.svg
var superscript = __webpack_require__(100);

// EXTERNAL MODULE: ./src/styles/icons/table.svg
var icons_table = __webpack_require__(101);

// EXTERNAL MODULE: ./src/styles/icons/th.svg
var th = __webpack_require__(102);

// EXTERNAL MODULE: ./src/styles/icons/th-list.svg
var th_list = __webpack_require__(103);

// EXTERNAL MODULE: ./src/styles/icons/ul.svg
var icons_ul = __webpack_require__(104);

// EXTERNAL MODULE: ./src/styles/icons/underline.svg
var underline = __webpack_require__(105);

// EXTERNAL MODULE: ./src/styles/icons/undo.svg
var undo = __webpack_require__(106);

// EXTERNAL MODULE: ./src/styles/icons/unlink.svg
var icons_unlink = __webpack_require__(107);

// EXTERNAL MODULE: ./src/styles/icons/unlock.svg
var unlock = __webpack_require__(108);

// EXTERNAL MODULE: ./src/styles/icons/update.svg
var icons_update = __webpack_require__(109);

// EXTERNAL MODULE: ./src/styles/icons/upload.svg
var upload = __webpack_require__(110);

// EXTERNAL MODULE: ./src/styles/icons/valign.svg
var valign = __webpack_require__(111);

// EXTERNAL MODULE: ./src/styles/icons/video.svg
var video = __webpack_require__(112);

// CONCATENATED MODULE: ./src/styles/icons/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

















































































// CONCATENATED MODULE: ./src/keep-names.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function keepModuleNames(modules) {
    utils["f" /* keepNames */].set(modules.UIButton, 'UIButton');
    utils["f" /* keepNames */].set(modules.UIElement, 'UIElement');
    utils["f" /* keepNames */].set(modules.UISeparator, 'UISeparator');
    utils["f" /* keepNames */].set(modules.UIList, 'UIList');
    utils["f" /* keepNames */].set(modules.UIGroup, 'UIGroup');
    utils["f" /* keepNames */].set(modules.Popup, 'Popup');
    utils["f" /* keepNames */].set(modules.ToolbarButton, 'ToolbarButton');
    utils["f" /* keepNames */].set(modules.ToolbarContent, 'ToolbarContent');
    utils["f" /* keepNames */].set(modules.ToolbarCollection, 'ToolbarCollection');
    utils["f" /* keepNames */].set(modules.ToolbarEditorCollection, 'ToolbarEditorCollection');
    utils["f" /* keepNames */].set(modules.Component, 'Component');
    utils["f" /* keepNames */].set(modules.Table, 'Table');
    utils["f" /* keepNames */].set(modules.Uploader, 'Uploader');
    utils["f" /* keepNames */].set(modules.FileBrowser, 'FileBrowser');
}

// CONCATENATED MODULE: ./src/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

if (false) {}









Object.keys(constants).forEach((key) => {
    jodit_Jodit[key] = constants[key];
});
const esFilter = (key) => key !== '__esModule';
Object.keys(icons_namespaceObject)
    .filter(esFilter)
    .forEach((key) => {
    icon["a" /* Icon */].set(key.replace('_', '-'), icons_namespaceObject[key]);
});
Object.keys(modules_namespaceObject)
    .filter(esFilter)
    .forEach((key) => {
    jodit_Jodit.modules[key] = modules_namespaceObject[key];
});
keepModuleNames(jodit_Jodit.modules);
Object.keys(decorators)
    .filter(esFilter)
    .forEach((key) => {
    jodit_Jodit.decorators[key] = decorators[key];
});
['Confirm', 'Alert', 'Prompt'].forEach((key) => {
    jodit_Jodit[key] = modules_namespaceObject[key];
});
Object.keys(plugins_namespaceObject)
    .filter(esFilter)
    .forEach((key) => {
    jodit_Jodit.plugins.add(key, plugins_namespaceObject[key]);
});
Object.keys(langs)
    .filter(esFilter)
    .forEach((key) => {
    jodit_Jodit.lang[key] = langs[key];
});
jodit_Jodit.defaultOptions = config["a" /* Config */].defaultOptions;
config["b" /* OptionsDefault */].prototype = jodit_Jodit.defaultOptions;
const src_Jodit = jodit_Jodit;


/***/ })
/******/ ]);
});
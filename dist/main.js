/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/pizza.jpg */ \"./src/assets/pizza.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml,\\nbody {\\n  box-sizing: inherit;\\n  font-family: \\\"Lato\\\", sans-serif;\\n  font-size: 16px;\\n  background-color: rgb(109, 24, 24);\\n  color: #eee;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\n.show {\\n  display: block;\\n}\\n\\n.hide {\\n  display: none;\\n}\\n\\n#content {\\n  max-width: 1200px;\\n  margin: 0 auto;\\n  position: relative;\\n}\\n\\n/* header styles */\\nheader {\\n  background-color: rgb(109, 24, 24);\\n  position: sticky;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  z-index: 4;\\n}\\n\\n.header-nav-list {\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  gap: 1px;\\n}\\n\\n.header-nav-item {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 20px 0;\\n  font-size: 1.4rem;\\n  background-color: rgba(0, 0, 0, 0.2);\\n  width: 100%;\\n}\\n\\n.header-nav-item.active {\\n  background-color: rgb(0, 0, 0);\\n}\\n\\n/* homepage styles */\\n#hero {\\n  margin: 20px;\\n}\\n\\n.hero-title {\\n  font-size: 2rem;\\n}\\n\\n.hero-img-container {\\n  width: 100%;\\n  height: 350px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  background-position: 50% 50%;\\n  border-radius: 8px;\\n  margin: 20px 0;\\n}\\n\\n.hero-about {\\n  font-size: 1.2rem;\\n  line-height: 1.3;\\n  background-color: rgba(0, 0, 0, 0.2);\\n  padding: 20px;\\n  border-radius: 8px;\\n}\\n\\n/* menu page styles */\\n#menu > h1 {\\n  margin: 20px;\\n  font-size: 2rem;\\n}\\n\\n.menu-item-img-container {\\n  width: 150px;\\n  height: 100px;\\n}\\n\\n.menu-item-img-container > img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n  border-radius: 10px;\\n}\\n\\n.menu-item {\\n  background-color: rgba(0, 0, 0, 0.2);\\n  border-radius: 10px;\\n  display: grid;\\n  grid-template-columns: auto 1fr;\\n  margin: 8px 10px;\\n  padding: 10px;\\n}\\n\\n.menu-item-content {\\n  justify-self: end;\\n  text-align: right;\\n}\\n\\n.menu-item-title {\\n  margin-bottom: 10px;\\n}\\n\\n.menu-item-price {\\n  opacity: 0.6;\\n}\\n\\n.meal-title {\\n  background-color: #eee;\\n  padding: 4px;\\n  color: #333;\\n  position: sticky;\\n  top: 67px;\\n  left: 0;\\n  width: 100%;\\n  z-index: 2;\\n  font-size: 1.4rem;\\n}\\n\\n/* contact section */\\n#contact {\\n  margin: 20px;\\n}\\n\\n.contact-header {\\n  font-size: 2rem;\\n}\\n\\n.contact-info-div {\\n  margin: 20px 0;\\n  background-color: rgba(0, 0, 0, 0.2);\\n  border-radius: 10px;\\n  padding: 20px;\\n}\\n\\n.contact-info-header {\\n  margin-bottom: 10px;\\n}\\n\\n.contact-phone {\\n  opacity: 0.6;\\n}\\n\\n.contact-info-paragraph {\\n  font-size: 1.1rem;\\n  line-height: 1.3;\\n  margin-top: 10px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page-setup/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page-setup/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page-setup/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page-setup/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page-setup/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page-setup/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page-setup/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page-setup/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page-setup/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page-setup/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page-setup/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n  // cache div with id content\n  const content = document.getElementById(\"content\");\n\n  // create new DOM elements\n  const contactSection = document.createElement(\"section\");\n  const contactH1 = document.createElement(\"h1\");\n  const contactInfoDiv = document.createElement(\"div\");\n  const contactInfoHeader = document.createElement(\"h2\");\n  const contactPhone = document.createElement(\"span\");\n  const contactInfoP = document.createElement(\"p\");\n\n  // give DOM elements classes/IDs\n  contactSection.setAttribute(\"id\", \"contact\");\n  contactSection.classList.add(\"contact-section\", \"show\", \"hide\");\n  contactH1.classList.add(\"contact-header\");\n  contactInfoDiv.classList.add(\"contact-info-div\");\n  contactInfoHeader.classList.add(\"contact-info-header\");\n  contactPhone.classList.add(\"contact-phone\");\n  contactInfoP.classList.add(\"contact-info-paragraph\");\n\n  // add content to DOM elements\n  contactH1.textContent = \"Contact\";\n  contactInfoHeader.textContent = \"Italian Creation's Info\";\n  contactPhone.textContent = \"800-333-6666\";\n  contactInfoP.textContent =\n    \"Welcome to Italian Creation, the restaurant where culinary magic happens! Our chefs have been trained in the art of Italian cooking, bringing the traditional flavors of Italy to your plate with a modern twist. From the rich aromas of garlic and basil to the creamy textures of handmade pasta, every dish is a work of art that will transport your taste buds straight to the streets of Rome. Our menu is filled with classic Italian dishes, such as our signature spaghetti alla carbonara, made with perfectly cooked pasta, crispy pancetta, and freshly grated parmesan cheese. Or try our mouth-watering margherita pizza, topped with the finest Italian tomatoes, buffalo mozzarella, and fragrant basil. But we don't stop at the classics. So come join us at Italian Creation, and experience the best of Italian cuisine in a warm and welcoming atmosphere. Buon appetito!\";\n\n  // add DOM elemets to content section\n  contactInfoDiv.appendChild(contactInfoHeader);\n  contactInfoDiv.appendChild(contactPhone);\n  contactInfoDiv.appendChild(contactInfoP);\n  contactSection.appendChild(contactH1);\n  contactSection.appendChild(contactInfoDiv);\n  content.appendChild(contactSection);\n}\n\n\n//# sourceURL=webpack://restaurant-page-setup/./src/contact.js?");

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\nfunction homePage() {\n  // cach DOM element\n  const homeContent = document.getElementById(\"content\");\n\n  // create new DOM elements\n  const homeHeroMain = document.createElement(\"main\");\n  const homeHeroSection = document.createElement(\"section\");\n  const homeHeroH1 = document.createElement(\"h1\");\n  const homeHeroImgContainer = document.createElement(\"div\");\n  const homeHeroDiv = document.createElement(\"div\");\n\n  // give new DOM elements classes/IDs\n  homeHeroMain.setAttribute(\"id\", \"home\");\n  homeHeroMain.classList.add(\"home-section\", \"show\", \"hide\");\n  homeHeroSection.setAttribute(\"id\", \"hero\");\n  homeHeroH1.classList.add(\"hero-title\");\n  homeHeroImgContainer.classList.add(\"hero-img-container\");\n  homeHeroDiv.classList.add(\"hero-about\");\n\n  // add content to new DOM elements\n  homeHeroH1.textContent = \"Italian Creations\";\n  homeHeroDiv.textContent =\n    \"Our restaurant is the place where you can savor the flavors of Italy. Our menu is inspired by the rich culinary traditions of Italy, and our chefs use only the freshest and most authentic ingredients to create dishes that will transport you to the heart of Rome. So come on down to Italian Creations, where every meal is a masterpiece and every guest is treated like family. We can't wait to share our passion for Italian cuisine with you!\";\n\n  // append all create DOM elements to the DOM\n  homeHeroSection.appendChild(homeHeroH1);\n  homeHeroSection.appendChild(homeHeroImgContainer);\n  homeHeroSection.appendChild(homeHeroDiv);\n  homeHeroMain.appendChild(homeHeroSection);\n  homeContent.appendChild(homeHeroMain);\n}\n\n\n//# sourceURL=webpack://restaurant-page-setup/./src/home-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page */ \"./src/home-page.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n\n\n\n\n\n// cache DOM elements\nconst content = document.getElementById(\"content\");\n\n// create header elements for DOM\nconst header = document.createElement(\"header\");\nconst nav = document.createElement(\"nav\");\nconst navUl = document.createElement(\"ul\");\nconst navLiHome = document.createElement(\"li\");\nconst navLiMenu = document.createElement(\"li\");\nconst navLiContact = document.createElement(\"li\");\n\nconst navLinks = [navLiHome, navLiMenu, navLiContact];\n\n// give header DOM elements classes/IDs/hrefs\nnavUl.classList.add(\"header-nav-list\");\nnavLiHome.classList.add(\"header-nav-item\", \"active\");\nnavLiMenu.classList.add(\"header-nav-item\");\nnavLiContact.classList.add(\"header-nav-item\");\n\n// add content to header DOM elements\nnavLiHome.textContent = \"Home\";\nnavLiMenu.textContent = \"Menu\";\nnavLiContact.textContent = \"Contact\";\n\n// add header elements to DOM\nnavUl.appendChild(navLiHome);\nnavUl.appendChild(navLiMenu);\nnavUl.appendChild(navLiContact);\nnav.appendChild(navUl);\nheader.appendChild(nav);\ncontent.appendChild(header);\n\nconst checkForActive = () => {\n  navLinks.forEach((link) => {\n    if (\n      link.textContent.toLowerCase() === \"home\" &&\n      link.classList.contains(\"active\")\n    ) {\n      homeSection.classList.remove(\"hide\");\n      menuSection.classList.add(\"hide\");\n      contactSection.classList.add(\"hide\");\n    } else if (\n      link.textContent.toLowerCase() === \"menu\" &&\n      link.classList.contains(\"active\")\n    ) {\n      homeSection.classList.add(\"hide\");\n      contactSection.classList.add(\"hide\");\n      menuSection.classList.remove(\"hide\");\n    } else if (\n      link.textContent.toLowerCase() === \"contact\" &&\n      link.classList.contains(\"active\")\n    ) {\n      homeSection.classList.add(\"hide\");\n      menuSection.classList.add(\"hide\");\n      contactSection.classList.remove(\"hide\");\n    }\n  });\n};\n\n(0,_home_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst homeSection = document.querySelector(\"#home\");\nconst menuSection = document.querySelector(\"#menu\");\nconst contactSection = document.querySelector(\"#contact\");\n\ncheckForActive();\n\n// update nav active class\nfunction makeActive(e) {\n  if (e.target.classList.contains(\"active\")) return;\n  navLinks.forEach((link) => {\n    if (\n      link.classList.contains(\"active\") &&\n      link.textContent !== e.target.textContent\n    ) {\n      link.classList.remove(\"active\");\n    }\n  });\n  e.target.classList.add(\"active\");\n  checkForActive();\n}\n\n// give nav items event listeners.\nfor (let i = 0; i < navLinks.length; i++) {\n  navLinks[i].addEventListener(\"click\", makeActive);\n}\n\n\n//# sourceURL=webpack://restaurant-page-setup/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _assets_bread_sticks_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/bread-sticks.jpg */ \"./src/assets/bread-sticks.jpg\");\n/* harmony import */ var _assets_bruschetta_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/bruschetta.jpg */ \"./src/assets/bruschetta.jpg\");\n/* harmony import */ var _assets_canoli_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/canoli.jpg */ \"./src/assets/canoli.jpg\");\n/* harmony import */ var _assets_caprese_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/caprese.jpg */ \"./src/assets/caprese.jpg\");\n/* harmony import */ var _assets_lasagna_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/lasagna.jpg */ \"./src/assets/lasagna.jpg\");\n/* harmony import */ var _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/pizza.jpg */ \"./src/assets/pizza.jpg\");\n/* harmony import */ var _assets_ravioli_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/ravioli.jpg */ \"./src/assets/ravioli.jpg\");\n/* harmony import */ var _assets_short_rib_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/short-rib.jpeg */ \"./src/assets/short-rib.jpeg\");\n/* harmony import */ var _assets_tiramisu_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/tiramisu.jpg */ \"./src/assets/tiramisu.jpg\");\n\n\n\n\n\n\n\n\n\n\nfunction menu() {\n  // cache DOM element(s)\n  const content = document.getElementById(\"content\");\n\n  // create array with menu item objects\n  const menuItems = [\n    {\n      dish: \"Pizza\",\n      cost: \"12.99\",\n      imgSrc: _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_5__,\n      meal: \"entre\",\n    },\n    {\n      dish: \"Ravioli\",\n      cost: \"18.50\",\n      imgSrc: _assets_ravioli_jpg__WEBPACK_IMPORTED_MODULE_6__,\n      meal: \"entre\",\n    },\n    {\n      dish: \"Lasagna\",\n      cost: \"24.99\",\n      imgSrc: _assets_lasagna_jpg__WEBPACK_IMPORTED_MODULE_4__,\n      meal: \"entre\",\n    },\n    {\n      dish: \"Braised Short Rib\",\n      cost: \"48.99\",\n      imgSrc: _assets_short_rib_jpeg__WEBPACK_IMPORTED_MODULE_7__,\n      meal: \"entre\",\n    },\n    {\n      dish: \"Bread Sticks\",\n      cost: \"4.99\",\n      imgSrc: _assets_bread_sticks_jpg__WEBPACK_IMPORTED_MODULE_0__,\n      meal: \"appetizer\",\n    },\n    {\n      dish: \"Bruschetta\",\n      cost: \"14.99\",\n      imgSrc: _assets_bruschetta_jpg__WEBPACK_IMPORTED_MODULE_1__,\n      meal: \"appetizer\",\n    },\n    {\n      dish: \"Caprese Salad\",\n      cost: \"13.49\",\n      imgSrc: _assets_caprese_jpg__WEBPACK_IMPORTED_MODULE_3__,\n      meal: \"appetizer\",\n    },\n    {\n      dish: \"Canoli's\",\n      cost: \"10.49\",\n      imgSrc: _assets_canoli_jpg__WEBPACK_IMPORTED_MODULE_2__,\n      meal: \"dessert\",\n    },\n    {\n      dish: \"Tiramisu\",\n      cost: 12.99,\n      imgSrc: _assets_tiramisu_jpg__WEBPACK_IMPORTED_MODULE_8__,\n      meal: \"dessert\",\n    },\n  ];\n\n  // create new DOM elements\n  const menuSection = document.createElement(\"section\");\n  const menuH1 = document.createElement(\"h1\");\n  const menuItemsContainer = document.createElement(\"div\");\n  const appetizers = document.createElement(\"div\");\n  const entres = document.createElement(\"div\");\n  const desserts = document.createElement(\"div\");\n  const appetizerTitle = document.createElement(\"h2\");\n  const entreTitle = document.createElement(\"h2\");\n  const dessertTitle = document.createElement(\"h2\");\n\n  menuH1.textContent = \"Menu\";\n  appetizerTitle.textContent = \"Appetizers\";\n  entreTitle.textContent = \"Entres\";\n  dessertTitle.textContent = \"Desserts\";\n\n  appetizers.appendChild(appetizerTitle);\n  entres.appendChild(entreTitle);\n  desserts.appendChild(dessertTitle);\n\n  // loop through menu items and create/append them in correct div category\n  for (let menuItem of menuItems) {\n    const item = document.createElement(\"div\");\n    const menuContentContainer = document.createElement(\"div\");\n    const itemTitle = document.createElement(\"h3\");\n    const itemImgContainer = document.createElement(\"div\");\n    const itemImg = document.createElement(\"img\");\n    const itemPrice = document.createElement(\"span\");\n\n    item.classList.add(\"menu-item\");\n    menuContentContainer.classList.add(\"menu-item-content\");\n    itemTitle.classList.add(\"menu-item-title\");\n    itemImgContainer.classList.add(\"menu-item-img-container\");\n    itemPrice.classList.add(\"menu-item-price\");\n\n    itemTitle.textContent = menuItem.dish;\n    itemImg.src = menuItem.imgSrc;\n    itemImg.alt = menuItem.dish;\n    itemPrice.textContent = menuItem.cost;\n\n    itemImgContainer.appendChild(itemImg);\n    menuContentContainer.appendChild(itemTitle);\n    menuContentContainer.appendChild(itemPrice);\n    item.appendChild(itemImgContainer);\n    item.appendChild(menuContentContainer);\n\n    if (menuItem.meal === \"appetizer\") {\n      appetizers.appendChild(item);\n    } else if (menuItem.meal === \"entre\") {\n      entres.appendChild(item);\n    } else if (menuItem.meal === \"dessert\") {\n      desserts.appendChild(item);\n    } else {\n      return;\n    }\n  }\n\n  // add classes/IDs to DOM elements\n  menuSection.setAttribute(\"id\", \"menu\");\n  menuSection.classList.add(\"menu-section\", \"show\", \"hide\");\n  menuH1.classList.add(\"menu-title\");\n  menuItemsContainer.classList.add(\"menu-items-container\");\n  appetizers.classList.add(\"menu-list\", \"appetizers\");\n  entres.classList.add(\"menu-list\", \"entres\");\n  desserts.classList.add(\"menu-list\", \"desserts\");\n  appetizerTitle.classList.add(\"meal-title\");\n  entreTitle.classList.add(\"meal-title\");\n  dessertTitle.classList.add(\"meal-title\");\n\n  // append DOM elements\n  menuItemsContainer.appendChild(appetizers);\n  menuItemsContainer.appendChild(entres);\n  menuItemsContainer.appendChild(desserts);\n  menuSection.appendChild(menuH1);\n  menuSection.appendChild(menuItemsContainer);\n  content.appendChild(menuSection);\n}\n\n\n//# sourceURL=webpack://restaurant-page-setup/./src/menu.js?");

/***/ }),

/***/ "./src/assets/bread-sticks.jpg":
/*!*************************************!*\
  !*** ./src/assets/bread-sticks.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"097ffb135c216b532a11.jpg\";\n\n//# sourceURL=webpack://restaurant-page-setup/./src/assets/bread-sticks.jpg?");

/***/ }),

/***/ "./src/assets/bruschetta.jpg":
/*!***********************************!*\
  !*** ./src/assets/bruschetta.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"404ff347678f2d9614ce.jpg\";\n\n//# sourceURL=webpack://restaurant-page-setup/./src/assets/bruschetta.jpg?");

/***/ }),

/***/ "./src/assets/canoli.jpg":
/*!*******************************!*\
  !*** ./src/assets/canoli.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"73fa29db10eff1a25c5d.jpg\";\n\n//# sourceURL=webpack://restaurant-page-setup/./src/assets/canoli.jpg?");

/***/ }),

/***/ "./src/assets/caprese.jpg":
/*!********************************!*\
  !*** ./src/assets/caprese.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a855c8040246207d81e8.jpg\";\n\n//# sourceURL=webpack://restaurant-page-setup/./src/assets/caprese.jpg?");

/***/ }),

/***/ "./src/assets/lasagna.jpg":
/*!********************************!*\
  !*** ./src/assets/lasagna.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f90b780fc26be4e5938a.jpg\";\n\n//# sourceURL=webpack://restaurant-page-setup/./src/assets/lasagna.jpg?");

/***/ }),

/***/ "./src/assets/pizza.jpg":
/*!******************************!*\
  !*** ./src/assets/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"328bc99bff6e8f23b0f7.jpg\";\n\n//# sourceURL=webpack://restaurant-page-setup/./src/assets/pizza.jpg?");

/***/ }),

/***/ "./src/assets/ravioli.jpg":
/*!********************************!*\
  !*** ./src/assets/ravioli.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1bb12b008c8192381d00.jpg\";\n\n//# sourceURL=webpack://restaurant-page-setup/./src/assets/ravioli.jpg?");

/***/ }),

/***/ "./src/assets/short-rib.jpeg":
/*!***********************************!*\
  !*** ./src/assets/short-rib.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8f21bbc7b59f670813e8.jpeg\";\n\n//# sourceURL=webpack://restaurant-page-setup/./src/assets/short-rib.jpeg?");

/***/ }),

/***/ "./src/assets/tiramisu.jpg":
/*!*********************************!*\
  !*** ./src/assets/tiramisu.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8981d96240962fb88671.jpg\";\n\n//# sourceURL=webpack://restaurant-page-setup/./src/assets/tiramisu.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/pizza.jpg */ \"./src/assets/pizza.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n  box-sizing: inherit;\\r\\n  font-family: \\\"Lato\\\", sans-serif;\\r\\n  font-size: 16px;\\r\\n  background-color: rgb(109, 24, 24);\\r\\n  color: #eee;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#content {\\r\\n  max-width: 1000px;\\r\\n  margin: 0 auto;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n/* header styles */\\r\\nheader {\\r\\n  background-color: rgb(109, 24, 24);\\r\\n  position: sticky;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  z-index: 4;\\r\\n}\\r\\n\\r\\n.header-nav-list {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  gap: 1px;\\r\\n}\\r\\n\\r\\n.header-nav-item {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  padding: 20px 0;\\r\\n  font-size: 1.4rem;\\r\\n  background-color: rgba(0, 0, 0, 0.2);\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.header-nav-item:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.header-nav-item.active {\\r\\n  background-color: rgb(0, 0, 0);\\r\\n}\\r\\n\\r\\n/* homepage styles */\\r\\n#hero {\\r\\n  margin: 20px;\\r\\n}\\r\\n\\r\\n.hero-title {\\r\\n  font-size: 2rem;\\r\\n}\\r\\n\\r\\n.hero-img-container {\\r\\n  width: 100%;\\r\\n  height: 350px;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-size: cover;\\r\\n  background-repeat: no-repeat;\\r\\n  background-position: 50% 50%;\\r\\n  border-radius: 8px;\\r\\n  margin: 20px 0;\\r\\n}\\r\\n\\r\\n.hero-about {\\r\\n  font-size: 1.2rem;\\r\\n  line-height: 1.3;\\r\\n  background-color: rgba(0, 0, 0, 0.2);\\r\\n  padding: 20px;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\n/* menu page styles */\\r\\n#menu > h1 {\\r\\n  margin: 20px;\\r\\n  font-size: 2rem;\\r\\n}\\r\\n\\r\\n.menu-item-img-container {\\r\\n  width: 150px;\\r\\n  height: 100px;\\r\\n}\\r\\n\\r\\n.menu-item-img-container > img {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  object-fit: cover;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.menu-item {\\r\\n  background-color: rgba(0, 0, 0, 0.2);\\r\\n  border-radius: 10px;\\r\\n  display: grid;\\r\\n  grid-template-columns: auto 1fr;\\r\\n  margin: 8px 10px;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.menu-item-content {\\r\\n  justify-self: end;\\r\\n  text-align: right;\\r\\n}\\r\\n\\r\\n.menu-item-title {\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.menu-item-price {\\r\\n  opacity: 0.6;\\r\\n}\\r\\n\\r\\n.meal-title {\\r\\n  background-color: #eee;\\r\\n  padding: 4px;\\r\\n  color: #333;\\r\\n  position: sticky;\\r\\n  top: 67px;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  z-index: 2;\\r\\n  font-size: 1.4rem;\\r\\n}\\r\\n\\r\\n/* contact section */\\r\\n#contact {\\r\\n  margin: 20px;\\r\\n}\\r\\n\\r\\n.contact-header {\\r\\n  font-size: 2rem;\\r\\n}\\r\\n\\r\\n.contact-info-div {\\r\\n  margin: 20px 0;\\r\\n  background-color: rgba(0, 0, 0, 0.2);\\r\\n  border-radius: 10px;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.contact-info-header {\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.contact-phone {\\r\\n  opacity: 0.6;\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.contact-info-paragraph {\\r\\n  font-size: 1.1rem;\\r\\n  line-height: 1.3;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page-setup/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\r\n  // cache div with id content\r\n  const content = document.getElementById(\"content\");\r\n\r\n  // create new DOM elements\r\n  const contactSection = document.createElement(\"section\");\r\n  const contactH1 = document.createElement(\"h1\");\r\n  const contactInfoDiv = document.createElement(\"div\");\r\n  const contactInfoHeader = document.createElement(\"h2\");\r\n  const contactPhone = document.createElement(\"span\");\r\n  const contactInfoP = document.createElement(\"p\");\r\n\r\n  // give DOM elements classes/IDs\r\n  contactSection.setAttribute(\"id\", \"contact\");\r\n  contactSection.classList.add(\"contact-section\", \"show\", \"hide\");\r\n  contactH1.classList.add(\"contact-header\");\r\n  contactInfoDiv.classList.add(\"contact-info-div\");\r\n  contactInfoHeader.classList.add(\"contact-info-header\");\r\n  contactPhone.classList.add(\"contact-phone\");\r\n  contactInfoP.classList.add(\"contact-info-paragraph\");\r\n\r\n  // add content to DOM elements\r\n  contactH1.textContent = \"Contact\";\r\n  contactInfoHeader.textContent = \"Italian Creation's Info\";\r\n  contactPhone.textContent = \"800-333-6666\";\r\n  contactInfoP.textContent =\r\n    \"Welcome to Italian Creation, the restaurant where culinary magic happens! Our chefs have been trained in the art of Italian cooking, bringing the traditional flavors of Italy to your plate with a modern twist. From the rich aromas of garlic and basil to the creamy textures of handmade pasta, every dish is a work of art that will transport your taste buds straight to the streets of Rome. Our menu is filled with classic Italian dishes, such as our signature spaghetti alla carbonara, made with perfectly cooked pasta, crispy pancetta, and freshly grated parmesan cheese. Or try our mouth-watering margherita pizza, topped with the finest Italian tomatoes, buffalo mozzarella, and fragrant basil. But we don't stop at the classics. So come join us at Italian Creation, and experience the best of Italian cuisine in a warm and welcoming atmosphere. Buon appetito!\";\r\n\r\n  // add DOM elemets to content section\r\n  contactInfoDiv.appendChild(contactInfoHeader);\r\n  contactInfoDiv.appendChild(contactPhone);\r\n  contactInfoDiv.appendChild(contactInfoP);\r\n  contactSection.appendChild(contactH1);\r\n  contactSection.appendChild(contactInfoDiv);\r\n  content.appendChild(contactSection);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page-setup/./src/contact.js?");

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\nfunction homePage() {\r\n  // cach DOM element\r\n  const homeContent = document.getElementById(\"content\");\r\n\r\n  // create new DOM elements\r\n  const homeHeroMain = document.createElement(\"main\");\r\n  const homeHeroSection = document.createElement(\"section\");\r\n  const homeHeroH1 = document.createElement(\"h1\");\r\n  const homeHeroImgContainer = document.createElement(\"div\");\r\n  const homeHeroDiv = document.createElement(\"div\");\r\n\r\n  // give new DOM elements classes/IDs\r\n  homeHeroMain.setAttribute(\"id\", \"home\");\r\n  homeHeroMain.classList.add(\"home-section\", \"show\", \"hide\");\r\n  homeHeroSection.setAttribute(\"id\", \"hero\");\r\n  homeHeroH1.classList.add(\"hero-title\");\r\n  homeHeroImgContainer.classList.add(\"hero-img-container\");\r\n  homeHeroDiv.classList.add(\"hero-about\");\r\n\r\n  // add content to new DOM elements\r\n  homeHeroH1.textContent = \"Italian Creations\";\r\n  homeHeroDiv.textContent =\r\n    \"Our restaurant is the place where you can savor the flavors of Italy. Our menu is inspired by the rich culinary traditions of Italy, and our chefs use only the freshest and most authentic ingredients to create dishes that will transport you to the heart of Rome. So come on down to Italian Creations, where every meal is a masterpiece and every guest is treated like family. We can't wait to share our passion for Italian cuisine with you!\";\r\n\r\n  // append all create DOM elements to the DOM\r\n  homeHeroSection.appendChild(homeHeroH1);\r\n  homeHeroSection.appendChild(homeHeroImgContainer);\r\n  homeHeroSection.appendChild(homeHeroDiv);\r\n  homeHeroMain.appendChild(homeHeroSection);\r\n  homeContent.appendChild(homeHeroMain);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page-setup/./src/home-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page */ \"./src/home-page.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n\r\n\r\n\r\n\r\n\r\n// cache DOM elements\r\nconst content = document.getElementById(\"content\");\r\n\r\n// create header elements for DOM\r\nconst header = document.createElement(\"header\");\r\nconst nav = document.createElement(\"nav\");\r\nconst navUl = document.createElement(\"ul\");\r\nconst navLiHome = document.createElement(\"li\");\r\nconst navLiMenu = document.createElement(\"li\");\r\nconst navLiContact = document.createElement(\"li\");\r\n\r\nconst navLinks = [navLiHome, navLiMenu, navLiContact];\r\n\r\n// give header DOM elements classes/IDs/hrefs\r\nnavUl.classList.add(\"header-nav-list\");\r\nnavLiHome.classList.add(\"header-nav-item\", \"active\");\r\nnavLiMenu.classList.add(\"header-nav-item\");\r\nnavLiContact.classList.add(\"header-nav-item\");\r\n\r\n// add content to header DOM elements\r\nnavLiHome.textContent = \"Home\";\r\nnavLiMenu.textContent = \"Menu\";\r\nnavLiContact.textContent = \"Contact\";\r\n\r\n// add header elements to DOM\r\nnavUl.appendChild(navLiHome);\r\nnavUl.appendChild(navLiMenu);\r\nnavUl.appendChild(navLiContact);\r\nnav.appendChild(navUl);\r\nheader.appendChild(nav);\r\ncontent.appendChild(header);\r\n\r\nconst checkForActive = () => {\r\n  navLinks.forEach((link) => {\r\n    if (\r\n      link.textContent.toLowerCase() === \"home\" &&\r\n      link.classList.contains(\"active\")\r\n    ) {\r\n      homeSection.classList.remove(\"hide\");\r\n      menuSection.classList.add(\"hide\");\r\n      contactSection.classList.add(\"hide\");\r\n    } else if (\r\n      link.textContent.toLowerCase() === \"menu\" &&\r\n      link.classList.contains(\"active\")\r\n    ) {\r\n      homeSection.classList.add(\"hide\");\r\n      contactSection.classList.add(\"hide\");\r\n      menuSection.classList.remove(\"hide\");\r\n    } else if (\r\n      link.textContent.toLowerCase() === \"contact\" &&\r\n      link.classList.contains(\"active\")\r\n    ) {\r\n      homeSection.classList.add(\"hide\");\r\n      menuSection.classList.add(\"hide\");\r\n      contactSection.classList.remove(\"hide\");\r\n    }\r\n  });\r\n};\r\n\r\n(0,_home_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nconst homeSection = document.querySelector(\"#home\");\r\nconst menuSection = document.querySelector(\"#menu\");\r\nconst contactSection = document.querySelector(\"#contact\");\r\n\r\ncheckForActive();\r\n\r\n// update nav active class\r\nfunction makeActive(e) {\r\n  if (e.target.classList.contains(\"active\")) return;\r\n  navLinks.forEach((link) => {\r\n    if (\r\n      link.classList.contains(\"active\") &&\r\n      link.textContent !== e.target.textContent\r\n    ) {\r\n      link.classList.remove(\"active\");\r\n    }\r\n  });\r\n  e.target.classList.add(\"active\");\r\n  checkForActive();\r\n}\r\n\r\n// give nav items event listeners.\r\nfor (let i = 0; i < navLinks.length; i++) {\r\n  navLinks[i].addEventListener(\"click\", makeActive);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page-setup/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _assets_bread_sticks_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/bread-sticks.jpg */ \"./src/assets/bread-sticks.jpg\");\n/* harmony import */ var _assets_bruschetta_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/bruschetta.jpg */ \"./src/assets/bruschetta.jpg\");\n/* harmony import */ var _assets_canoli_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/canoli.jpg */ \"./src/assets/canoli.jpg\");\n/* harmony import */ var _assets_caprese_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/caprese.jpg */ \"./src/assets/caprese.jpg\");\n/* harmony import */ var _assets_lasagna_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/lasagna.jpg */ \"./src/assets/lasagna.jpg\");\n/* harmony import */ var _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/pizza.jpg */ \"./src/assets/pizza.jpg\");\n/* harmony import */ var _assets_ravioli_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/ravioli.jpg */ \"./src/assets/ravioli.jpg\");\n/* harmony import */ var _assets_short_rib_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/short-rib.jpeg */ \"./src/assets/short-rib.jpeg\");\n/* harmony import */ var _assets_tiramisu_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/tiramisu.jpg */ \"./src/assets/tiramisu.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction menu() {\r\n  // cache DOM element(s)\r\n  const content = document.getElementById(\"content\");\r\n\r\n  // create array with menu item objects\r\n  const menuItems = [\r\n    {\r\n      dish: \"Pizza\",\r\n      cost: \"12.99\",\r\n      imgSrc: _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_5__,\r\n      meal: \"entre\",\r\n    },\r\n    {\r\n      dish: \"Ravioli\",\r\n      cost: \"18.50\",\r\n      imgSrc: _assets_ravioli_jpg__WEBPACK_IMPORTED_MODULE_6__,\r\n      meal: \"entre\",\r\n    },\r\n    {\r\n      dish: \"Lasagna\",\r\n      cost: \"24.99\",\r\n      imgSrc: _assets_lasagna_jpg__WEBPACK_IMPORTED_MODULE_4__,\r\n      meal: \"entre\",\r\n    },\r\n    {\r\n      dish: \"Braised Short Rib\",\r\n      cost: \"48.99\",\r\n      imgSrc: _assets_short_rib_jpeg__WEBPACK_IMPORTED_MODULE_7__,\r\n      meal: \"entre\",\r\n    },\r\n    {\r\n      dish: \"Bread Sticks\",\r\n      cost: \"4.99\",\r\n      imgSrc: _assets_bread_sticks_jpg__WEBPACK_IMPORTED_MODULE_0__,\r\n      meal: \"appetizer\",\r\n    },\r\n    {\r\n      dish: \"Bruschetta\",\r\n      cost: \"14.99\",\r\n      imgSrc: _assets_bruschetta_jpg__WEBPACK_IMPORTED_MODULE_1__,\r\n      meal: \"appetizer\",\r\n    },\r\n    {\r\n      dish: \"Caprese Salad\",\r\n      cost: \"13.49\",\r\n      imgSrc: _assets_caprese_jpg__WEBPACK_IMPORTED_MODULE_3__,\r\n      meal: \"appetizer\",\r\n    },\r\n    {\r\n      dish: \"Canoli's\",\r\n      cost: \"10.49\",\r\n      imgSrc: _assets_canoli_jpg__WEBPACK_IMPORTED_MODULE_2__,\r\n      meal: \"dessert\",\r\n    },\r\n    {\r\n      dish: \"Tiramisu\",\r\n      cost: 12.99,\r\n      imgSrc: _assets_tiramisu_jpg__WEBPACK_IMPORTED_MODULE_8__,\r\n      meal: \"dessert\",\r\n    },\r\n  ];\r\n\r\n  // create new DOM elements\r\n  const menuSection = document.createElement(\"section\");\r\n  const menuH1 = document.createElement(\"h1\");\r\n  const menuItemsContainer = document.createElement(\"div\");\r\n  const appetizers = document.createElement(\"div\");\r\n  const entres = document.createElement(\"div\");\r\n  const desserts = document.createElement(\"div\");\r\n  const appetizerTitle = document.createElement(\"h2\");\r\n  const entreTitle = document.createElement(\"h2\");\r\n  const dessertTitle = document.createElement(\"h2\");\r\n\r\n  menuH1.textContent = \"Menu\";\r\n  appetizerTitle.textContent = \"Appetizers\";\r\n  entreTitle.textContent = \"Entres\";\r\n  dessertTitle.textContent = \"Desserts\";\r\n\r\n  appetizers.appendChild(appetizerTitle);\r\n  entres.appendChild(entreTitle);\r\n  desserts.appendChild(dessertTitle);\r\n\r\n  // loop through menu items and create/append them in correct div category\r\n  for (let menuItem of menuItems) {\r\n    const item = document.createElement(\"div\");\r\n    const menuContentContainer = document.createElement(\"div\");\r\n    const itemTitle = document.createElement(\"h3\");\r\n    const itemImgContainer = document.createElement(\"div\");\r\n    const itemImg = document.createElement(\"img\");\r\n    const itemPrice = document.createElement(\"span\");\r\n\r\n    item.classList.add(\"menu-item\");\r\n    menuContentContainer.classList.add(\"menu-item-content\");\r\n    itemTitle.classList.add(\"menu-item-title\");\r\n    itemImgContainer.classList.add(\"menu-item-img-container\");\r\n    itemPrice.classList.add(\"menu-item-price\");\r\n\r\n    itemTitle.textContent = menuItem.dish;\r\n    itemImg.src = menuItem.imgSrc;\r\n    itemImg.alt = menuItem.dish;\r\n    itemPrice.textContent = menuItem.cost;\r\n\r\n    itemImgContainer.appendChild(itemImg);\r\n    menuContentContainer.appendChild(itemTitle);\r\n    menuContentContainer.appendChild(itemPrice);\r\n    item.appendChild(itemImgContainer);\r\n    item.appendChild(menuContentContainer);\r\n\r\n    if (menuItem.meal === \"appetizer\") {\r\n      appetizers.appendChild(item);\r\n    } else if (menuItem.meal === \"entre\") {\r\n      entres.appendChild(item);\r\n    } else if (menuItem.meal === \"dessert\") {\r\n      desserts.appendChild(item);\r\n    } else {\r\n      return;\r\n    }\r\n  }\r\n\r\n  // add classes/IDs to DOM elements\r\n  menuSection.setAttribute(\"id\", \"menu\");\r\n  menuSection.classList.add(\"menu-section\", \"show\", \"hide\");\r\n  menuH1.classList.add(\"menu-title\");\r\n  menuItemsContainer.classList.add(\"menu-items-container\");\r\n  appetizers.classList.add(\"menu-list\", \"appetizers\");\r\n  entres.classList.add(\"menu-list\", \"entres\");\r\n  desserts.classList.add(\"menu-list\", \"desserts\");\r\n  appetizerTitle.classList.add(\"meal-title\");\r\n  entreTitle.classList.add(\"meal-title\");\r\n  dessertTitle.classList.add(\"meal-title\");\r\n\r\n  // append DOM elements\r\n  menuItemsContainer.appendChild(appetizers);\r\n  menuItemsContainer.appendChild(entres);\r\n  menuItemsContainer.appendChild(desserts);\r\n  menuSection.appendChild(menuH1);\r\n  menuSection.appendChild(menuItemsContainer);\r\n  content.appendChild(menuSection);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page-setup/./src/menu.js?");

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
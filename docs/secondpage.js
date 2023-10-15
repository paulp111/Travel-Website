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

/***/ "./node_modules/css-loader/docs/cjs.js!./src/styles/secondpage.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/docs/cjs.js!./src/styles/secondpage.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_docs_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/docs/runtime/noSourceMaps.js */ \"./node_modules/css-loader/docs/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_docs_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_docs_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_docs_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/docs/runtime/api.js */ \"./node_modules/css-loader/docs/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_docs_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_docs_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_docs_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/docs/runtime/getUrl.js */ \"./node_modules/css-loader/docs/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_docs_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_docs_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../media/cape-town.png */ \"./src/media/cape-town.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_docs_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_docs_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_docs_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n/* Header */\r\nheader {\r\n    background-color: transparent;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 10px 20px;\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\n.header-left {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.logo {\r\n    width: 64px;\r\n    height: 64px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.travel-text {\r\n    color: #f2f3f4;\r\n    font-family: 'Futura Condensed', sans-serif;\r\n    font-weight: bold;\r\n}\r\n\r\n/* Header-Menu */\r\n.header-right ul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.header-right li {\r\n    margin-right: 20px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.header-right a {\r\n    text-decoration: none;\r\n    color: #f2f3f4;\r\n}\r\n\r\n.framed-menu-item {\r\n    border: 2px solid #f2f3f4;\r\n    padding: 5px 10px;\r\n    border-radius: 5px;\r\n    line-height: 1;\r\n}\r\n\r\n/* Background video*/\r\n#hero-video {\r\n    display: none;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    width: auto;\r\n    height: auto;\r\n    z-index: -1;\r\n    object-fit: cover;\r\n    transition: opacity 0.5s;\r\n    filter: brightness(0.7);\r\n}\r\n\r\n/* Hero BG */\r\n.background {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -2;\r\n    background-size: cover;\r\n    filter: brightness(0.7);\r\n    transition: opacity 0.5s;\r\n}\r\n\r\n#hero-background1 {\r\n    opacity: 1;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n}\r\n\r\n#hero-background2 {\r\n    opacity: 0;\r\n}\r\n\r\n\r\n.playButton {\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    border: none;\r\n    position: absolute;\r\n    right: 8%;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    cursor: pointer;\r\n    color: white;\r\n    font-size: 24px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    left: unset;\r\n}\r\n\r\n.switchBackgroundButton {\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    border: none;\r\n    position: absolute;\r\n    right: 65px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    cursor: pointer;\r\n    color: white;\r\n    font-size: 24px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    left: unset;\r\n}\r\n\r\n\r\n/* Main Content */\r\n#content {\r\n    font-family: 'Futura Condensed', sans-serif;\r\n    position: absolute;\r\n    top: 20%;\r\n    transform: translate(0, -50%);\r\n    color: #f2f3f4;\r\n    max-width: 800px;\r\n    margin-left: 20px;\r\n    text-align: left;\r\n    padding-top: 100px;\r\n    z-index: 1;\r\n    font-size: 18px;\r\n}\r\n\r\n#content .main-content-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: left;\r\n    padding: 20px;\r\n}\r\n\r\n#content p {\r\n    width: 100%;\r\n}\r\n\r\n/* Main Content Textstile */\r\n.small-text {\r\n    font-size: 24px;\r\n    letter-spacing: 0.5px;\r\n    margin-bottom: -50px;\r\n    font-weight: 500;\r\n}\r\n\r\n.large-text {\r\n    font-size: 64px;\r\n    letter-spacing: 1px;\r\n    margin-left: 2%;\r\n    margin-bottom: 0px;\r\n    font-weight: bold;\r\n}\r\n\r\n/* Suchmenü und Validierung */\r\n#search-menu {\r\n    width: 90%;\r\n    margin: 0 auto;\r\n    padding: 20px;\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    border-radius: 4px;\r\n    font-size: 12px;\r\n    position: absolute;\r\n    bottom: 18%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    z-index: 3;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\r\n    align-items: center;\r\n}\r\n\r\n#search-menu label {\r\n    color: #333;\r\n    margin: 0;\r\n    width: 100%;\r\n    flex: 1;\r\n}\r\n\r\n#search-menu h1 {\r\n    color: #333;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n#search-menu button {\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    color: white;\r\n    background-color: rgb(252, 70, 100);\r\n    border: none;\r\n    border-radius: 4px;\r\n    transition: background-color 0.3s ease-in-out;\r\n    cursor: pointer;\r\n    margin-left: auto;\r\n}\r\n\r\n#search-menu button:hover {\r\n    background-color: #ff0000;\r\n}\r\n\r\n#search-menu select {\r\n    border: 2px solid #f0f0f0;\r\n    border-radius: 4px;\r\n    display: block;\r\n    font-size: 12px;\r\n    padding: 10px;\r\n    width: 100%;\r\n    margin-top: 10px;\r\n}\r\n\r\n#search-menu select:focus {\r\n    outline: 0;\r\n}\r\n\r\n#search-menu select.error {\r\n    border-color: #ff3860;\r\n}\r\n\r\n.input-control {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 10px;\r\n}\r\n\r\n.input-control input {\r\n    border: 2px solid #f2f3f4;\r\n    border-radius: 4px;\r\n    display: block;\r\n    font-size: 12px;\r\n    padding: 10px;\r\n    width: calc(50% - 5px);\r\n}\r\n\r\n.input-control.success input {\r\n    border-color: #09c372;\r\n}\r\n\r\n.input-control.error input {\r\n    border-color: #ff3860;\r\n}\r\n\r\n.input-control .error {\r\n    color: #ff3860;\r\n    font-size: 10px;\r\n    margin-top: 5px;\r\n}\r\n\r\nbutton {\r\n    position: fixed;\r\n    bottom: 35px;\r\n    left: 95%;\r\n    transform: translateX(-50%);\r\n    padding: 10px 20px;\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    border: none;\r\n    cursor: pointer;\r\n    z-index: 10;\r\n}\r\n\r\n\r\n\r\n/*Confirmation Message*/\r\n.confirmation-message {\r\n    position: absolute;\r\n    top: 45%;\r\n    left: 50%;\r\n    transform: translate(-50%);\r\n    background-color: rgba(76, 175, 80, 0.6);\r\n    color: #fff;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    width: 300px;\r\n    opacity: 0;\r\n    transition: opacity 0.5s;\r\n}\r\n\r\n\r\n.confirmation-message.already-sent {\r\n    background-color: rgba(255, 165, 0, 0.6);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://travel/./src/styles/secondpage.css?./node_modules/css-loader/docs/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/docs/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/docs/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://travel/./node_modules/css-loader/docs/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/docs/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/docs/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://travel/./node_modules/css-loader/docs/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/docs/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/docs/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://travel/./node_modules/css-loader/docs/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/secondpage.css":
/*!***********************************!*\
  !*** ./src/styles/secondpage.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_docs_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/docs/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/docs/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_docs_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_docs_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_docs_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/docs/runtime/styleDomAPI.js */ \"./node_modules/style-loader/docs/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_docs_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_docs_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_docs_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/docs/runtime/insertBySelector.js */ \"./node_modules/style-loader/docs/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_docs_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_docs_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_docs_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/docs/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/docs/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_docs_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_docs_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_docs_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/docs/runtime/insertStyleElement.js */ \"./node_modules/style-loader/docs/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_docs_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_docs_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_docs_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/docs/runtime/styleTagTransform.js */ \"./node_modules/style-loader/docs/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_docs_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_docs_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_docs_cjs_js_secondpage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/docs/cjs.js!./secondpage.css */ \"./node_modules/css-loader/docs/cjs.js!./src/styles/secondpage.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_docs_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_docs_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_docs_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_docs_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_docs_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_docs_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_docs_cjs_js_secondpage_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_docs_cjs_js_secondpage_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_docs_cjs_js_secondpage_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_docs_cjs_js_secondpage_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://travel/./src/styles/secondpage.css?");

/***/ }),

/***/ "./node_modules/style-loader/docs/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/docs/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://travel/./node_modules/style-loader/docs/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/docs/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/docs/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://travel/./node_modules/style-loader/docs/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/docs/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/docs/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://travel/./node_modules/style-loader/docs/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/docs/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/docs/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://travel/./node_modules/style-loader/docs/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/docs/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/docs/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://travel/./node_modules/style-loader/docs/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/docs/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/docs/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://travel/./node_modules/style-loader/docs/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/secondpage.js":
/*!***************************!*\
  !*** ./src/secondpage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_secondpage_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/secondpage.css */ \"./src/styles/secondpage.css\");\n\r\n\r\nlet confirmationShown = false;\r\n\r\n// Error Function\r\nfunction setError(element, message) {\r\n    const inputControl = element.parentElement;\r\n    const errorDisplay = inputControl.querySelector('.error');\r\n\r\n    errorDisplay.innerText = message;\r\n    inputControl.classList.add('error');\r\n    inputControl.classList.remove('success');\r\n}\r\n\r\n// Success Function\r\nfunction setSuccess(element) {\r\n    const inputControl = element.parentElement;\r\n    const errorDisplay = inputControl.querySelector('.error');\r\n\r\n    errorDisplay.innerText = '';\r\n    inputControl.classList.add('success');\r\n    inputControl.classList.remove('error');\r\n}\r\n\r\n// Confirm Function\r\nfunction showConfirmationMessage(email) {\r\n    const contentDiv = document.querySelector(\"#content-msg\");\r\n    let existingMessage = contentDiv.querySelector(\".confirmation-message\");\r\n    if (existingMessage) {\r\n        contentDiv.removeChild(existingMessage);\r\n    }\r\n\r\n    let confirmationMessage = document.createElement(\"p\");\r\n    if (!confirmationShown) {\r\n        confirmationShown = true;\r\n        confirmationMessage.textContent = \"An E-Mail has been sent to \" + email;\r\n    } else {\r\n        confirmationMessage.textContent = \"A confirmation e-mail has already been sent\";\r\n        confirmationMessage.classList.add(\"already-sent\");\r\n    }\r\n\r\n    confirmationMessage.classList.add(\"confirmation-message\");\r\n    confirmationMessage.style.opacity = \"0\";\r\n\r\n    contentDiv.appendChild(confirmationMessage);\r\n\r\n    let opacity = 0;\r\n    const fadeInInterval = setInterval(() => {\r\n        opacity += 0.1;\r\n        confirmationMessage.style.opacity = opacity;\r\n        if (opacity >= 1) {\r\n            clearInterval(fadeInInterval);\r\n        }\r\n    }, 100);\r\n\r\n    setTimeout(() => {\r\n        let opacity = 1;\r\n        const fadeOutInterval = setInterval(() => {\r\n            opacity -= 0.1;\r\n            confirmationMessage.style.opacity = opacity;\r\n            if (opacity <= 0) {\r\n                clearInterval(fadeOutInterval);\r\n                contentDiv.removeChild(confirmationMessage);\r\n            }\r\n        }, 100);\r\n    }, 5000);\r\n}\r\n\r\n// Validate E-Mail Function\r\nfunction isValidEmail(email) {\r\n    const re = /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\r\n    return re.test(String(email).toLowerCase());\r\n}\r\n\r\n// Validate Search Function\r\nfunction validateSearchInputs(email) {\r\n    const country = document.getElementById('country');\r\n    const time = document.getElementById('time');\r\n    const emailInput = document.getElementById('email');\r\n    const phone = document.getElementById('phone');\r\n    const arrivalDate = document.getElementById('arrival-date');\r\n\r\n    const countryValue = country.value.trim();\r\n    const timeValue = time.value.trim();\r\n    const emailValue = emailInput.value.trim();\r\n    const phoneValue = phone.value.trim();\r\n    const arrivalDateValue = arrivalDate.value.trim();\r\n\r\n    let isValid = true;\r\n\r\n    if (countryValue === '') {\r\n        setError(country, 'Country is required');\r\n        isValid = false;\r\n    } else {\r\n        setSuccess(country);\r\n    }\r\n\r\n    if (timeValue === '') {\r\n        setError(time, 'Arrival is required');\r\n        isValid = false;\r\n    } else if (!/^\\d+$/.test(timeValue)) {\r\n        setError(time, 'Arrival must contain only numbers');\r\n        isValid = false;\r\n    } else {\r\n        setSuccess(time);\r\n    }\r\n\r\n    if (emailValue === '') {\r\n        setError(emailInput, 'Email is required');\r\n        isValid = false;\r\n    } else if (!isValidEmail(emailValue)) {\r\n        setError(emailInput, 'Provide a valid email address');\r\n        isValid = false;\r\n    } else {\r\n        setSuccess(emailInput);\r\n    }\r\n\r\n    if (phoneValue === '') {\r\n        setError(phone, 'Phone is required');\r\n        isValid = false;\r\n    } else if (!/^\\d+$/.test(phoneValue)) {\r\n        setError(phone, 'Phone must contain only numbers');\r\n        isValid = false;\r\n    } else {\r\n        setSuccess(phone);\r\n    }\r\n\r\n    if (arrivalDateValue === '') {\r\n        setError(arrivalDate, 'Arrival date is required');\r\n        isValid = false;\r\n    } else {\r\n        setSuccess(arrivalDate);\r\n    }\r\n    if (isValid) {\r\n        showConfirmationMessage(email);\r\n    }\r\n}\r\n\r\n\r\n// Function Header\r\nfunction createHeader() {\r\n    const header = document.createElement(\"header\");\r\n\r\n    const headerLeft = document.createElement(\"div\");\r\n    headerLeft.classList.add(\"header-left\");\r\n\r\n    const logoLink = document.createElement(\"a\");\r\n    logoLink.href = \"index.html\";\r\n\r\n    const logoImg = document.createElement(\"img\");\r\n    logoImg.src = \"../src/media/logo1.png\";\r\n    logoImg.alt = \"Logo\";\r\n    logoImg.classList.add(\"logo\");\r\n\r\n    logoLink.appendChild(logoImg);\r\n    headerLeft.appendChild(logoLink);\r\n\r\n    const travelTextLink = document.createElement(\"a\");\r\n    travelTextLink.href = \"index.html\";\r\n\r\n    const travelText = document.createElement(\"h1\");\r\n    travelText.textContent = \"TRAVEL\";\r\n    travelText.classList.add(\"travel-text\");\r\n\r\n    travelTextLink.style.textDecoration = \"none\";\r\n\r\n    travelTextLink.appendChild(travelText);\r\n    headerLeft.appendChild(travelTextLink);\r\n\r\n    // Header rechts\r\n    const headerRight = document.createElement(\"nav\");\r\n    headerRight.classList.add(\"header-right\");\r\n\r\n    const ul = document.createElement(\"ul\");\r\n\r\n    const menuItems = [\"FAQ\", \"Legal Disclosure\", \"Booking\"];\r\n\r\n    for (const menuItemText of menuItems) {\r\n        const li = document.createElement(\"li\");\r\n        const a = document.createElement(\"a\");\r\n        a.href = \"#\";\r\n        a.textContent = menuItemText;\r\n\r\n        if (menuItemText === \"Booking\") {\r\n            li.classList.add(\"framed-menu-item\");\r\n        }\r\n\r\n        li.appendChild(a);\r\n        ul.appendChild(li);\r\n    }\r\n\r\n    headerRight.appendChild(ul);\r\n\r\n    header.appendChild(headerLeft);\r\n    header.appendChild(headerRight);\r\n\r\n    document.body.prepend(header);\r\n}\r\n\r\n//Funcion Main \r\nfunction createPage() {\r\n    const contentDiv = document.querySelector(\"#content\");\r\n\r\n    const mainContentContainer = document.createElement(\"div\");\r\n    mainContentContainer.classList.add(\"main-content-container\");\r\n\r\n    const paragraph1 = document.createElement(\"p\");\r\n    paragraph1.textContent = \"Landscapes of mountains, coastline and rolling hills\";\r\n    paragraph1.classList.add(\"main-content-text\", \"small-text\");\r\n\r\n    const paragraph2 = document.createElement(\"p\");\r\n    paragraph2.textContent = \"SOUTH AFRICA\";\r\n    paragraph2.classList.add(\"main-content-text\", \"large-text\");\r\n\r\n    const paragraph3 = document.createElement(\"p\");\r\n    paragraph3.textContent = \"At its heart lies the stunning, beautiful Cape Town\";\r\n    paragraph3.classList.add(\"main-content-text\", \"small-text\");\r\n\r\n    mainContentContainer.appendChild(paragraph1);\r\n    mainContentContainer.appendChild(paragraph2);\r\n    mainContentContainer.appendChild(paragraph3);\r\n\r\n    contentDiv.appendChild(mainContentContainer);\r\n}\r\n\r\n//Footer\r\nfunction createFooter() {\r\n    var ul = document.createElement('ul');\r\n    ul.style.position = 'absolute';\r\n    ul.style.top = '50%';\r\n    ul.style.left = '50%';\r\n    ul.style.transform = 'translate(-50%, -50%)';\r\n    ul.style.margin = '0';\r\n    ul.style.padding = '0';\r\n    ul.style.display = 'flex';\r\n\r\n    // Social Media Classes\r\n    var socialNetworks = [\r\n        { class: 'facebook', iconClass: 'fa fa-facebook' },\r\n        { class: 'twitter', iconClass: 'fa fa-twitter' },\r\n        { class: 'instagram', iconClass: 'fa fa-instagram' },\r\n        { class: 'google', iconClass: 'fa fa-google-plus' }\r\n    ];\r\n\r\n    socialNetworks.forEach(function (network) {\r\n        var li = document.createElement('li');\r\n        li.style.listStyle = 'none';\r\n\r\n        var a = document.createElement('a');\r\n        a.className = network.class;\r\n        a.href = '#';\r\n        a.style.display = 'block';\r\n        a.style.position = 'relative';\r\n        a.style.width = '70px';\r\n        a.style.height = '70px';\r\n        a.style.lineHeight = '70px';\r\n        a.style.fontSize = '40px';\r\n        a.style.textAlign = 'center';\r\n        a.style.textDecoration = 'none';\r\n        a.style.color = '#242526';\r\n        a.style.margin = '0 20px';\r\n        a.style.transition = '.5s';\r\n        ul.style.top = '94%';\r\n        ul.style.left = '50%';\r\n        ul.style.transform = 'translate(-50%, -50%)';\r\n\r\n        a.addEventListener('mouseenter', function () {\r\n            a.style.color = getHoverColor(network.class);\r\n        });\r\n\r\n        a.addEventListener('mouseleave', function () {\r\n            a.style.color = '#242526';\r\n        });\r\n\r\n        var i = document.createElement('i');\r\n        i.className = network.iconClass;\r\n        i.setAttribute('aria-hidden', 'true');\r\n        a.appendChild(i);\r\n\r\n        li.appendChild(a);\r\n        ul.appendChild(li);\r\n    });\r\n\r\n    document.body.appendChild(ul);\r\n}\r\n\r\nfunction getHoverColor(className) {\r\n    switch (className) {\r\n        case 'facebook':\r\n            return '#3b5998';\r\n        case 'twitter':\r\n            return '#1da1f2';\r\n        case 'instagram':\r\n            return '#c32aa3';\r\n        case 'google':\r\n            return '#dd4b39';\r\n        default:\r\n            return '#242526';\r\n    }\r\n}\r\n\r\n\r\n// Create\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    createHeader();\r\n    createPage();\r\n    createFooter();\r\n\r\n    const searchForm = document.getElementById('search-menu');\r\n    searchForm.addEventListener('submit', e => {\r\n        e.preventDefault();\r\n        const emailInput = document.getElementById('email');\r\n        const emailValue = emailInput.value;\r\n        validateSearchInputs(emailValue);\r\n    });\r\n\r\n    // Hintergrundbild und Video Button\r\n    const background = document.getElementById(\"hero-background\");\r\n    const video = document.getElementById(\"hero-video\");\r\n\r\n    const playButton = document.createElement(\"button\");\r\n    playButton.textContent = \"▶\";\r\n    playButton.className = \"playButton\";\r\n    document.body.appendChild(playButton);\r\n\r\n    playButton.addEventListener(\"click\", function () {\r\n        video.style.opacity = \"1\";\r\n        video.style.display = \"block\";\r\n        video.play();\r\n        background.style.display = \"none\";\r\n        playButton.style.display = \"none\";\r\n        switchButton.style.display = \"none\";  // Button verstecken\r\n    });\r\n    video.addEventListener(\"play\", function () {\r\n        playButton.style.display = \"none\";\r\n        switchButton.style.display = \"none\";\r\n    });\r\n\r\n    video.addEventListener(\"ended\", function () {\r\n        video.style.opacity = \"0\";\r\n\r\n        setTimeout(function () {\r\n            video.style.display = \"none\";\r\n            const heroBackground1 = document.getElementById(\"hero-background1\");\r\n            heroBackground1.style.display = \"block\";\r\n            heroBackground1.style.opacity = \"0\";\r\n\r\n            setTimeout(function () {\r\n                heroBackground1.style.transition = \"opacity 0.5s ease-in-out\";\r\n                heroBackground1.style.opacity = \"1\";\r\n                playButton.style.display = \"block\";\r\n                switchButton.style.display = \"block\";  //Button anzeigen\r\n            }, 50);\r\n        }, 500);\r\n    });\r\n\r\n\r\n\r\n    //pic button\r\n    const switchButton = document.createElement('button');\r\n    switchButton.textContent = '➔';\r\n    switchButton.className = \"switchBackgroundButton\";\r\n    document.body.appendChild(switchButton);\r\n\r\n    switchButton.addEventListener('click', switchBackground);\r\n\r\n\r\n    // Bg change\r\n    setInterval(() => {\r\n        if (video.style.display !== \"block\") {\r\n            switchBackground();\r\n        }\r\n    }, 5000);\r\n\r\n});\r\n\r\nconst backgroundImages = [\r\n    '../src/media/cape-town.png',\r\n    '../src/media/capetown1.jpg',\r\n    '../src/media/capetow4.jpg'\r\n];\r\n\r\nlet currentBackgroundIndex = 0;\r\nconst backgroundElement1 = document.getElementById(\"hero-background1\");\r\nconst backgroundElement2 = document.getElementById(\"hero-background2\");\r\nlet usingFirstBackground = true;\r\n\r\nfunction setBackground() {\r\n    if (usingFirstBackground) {\r\n        backgroundElement2.style.backgroundImage = `url('${backgroundImages[currentBackgroundIndex]}')`;\r\n    } else {\r\n        backgroundElement1.style.backgroundImage = `url('${backgroundImages[currentBackgroundIndex]}')`;\r\n    }\r\n}\r\n\r\nfunction switchBackground() {\r\n    if (usingFirstBackground) {\r\n        backgroundElement2.style.opacity = '1';\r\n        backgroundElement1.style.opacity = '0';\r\n    } else {\r\n        backgroundElement1.style.opacity = '1';\r\n        backgroundElement2.style.opacity = '0';\r\n    }\r\n    usingFirstBackground = !usingFirstBackground;\r\n    setTimeout(() => {\r\n        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;\r\n        setBackground();\r\n    }, 500);\r\n}\r\n\r\nsetBackground();\r\n\n\n//# sourceURL=webpack://travel/./src/secondpage.js?");

/***/ }),

/***/ "./src/media/cape-town.png":
/*!*********************************!*\
  !*** ./src/media/cape-town.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"abdd5943e0802c48239f.png\";\n\n//# sourceURL=webpack://travel/./src/media/cape-town.png?");

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
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 			"secondpage": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/secondpage.js");
/******/ 	
/******/ })()
;
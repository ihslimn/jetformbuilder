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

/***/ "./frontend/calculated.field/functions.js":
/*!************************************************!*\
  !*** ./frontend/calculated.field/functions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isCalculated\": () => (/* binding */ isCalculated)\n/* harmony export */ });\n/**\r\n * @param node {HTMLElement}\r\n * @returns {boolean}\r\n */\nfunction isCalculated(node) {\n  var _node$parentElement$d, _node$parentElement$d2, _node$parentElement$d3;\n\n  return !!((_node$parentElement$d = (_node$parentElement$d2 = node.parentElement.dataset) === null || _node$parentElement$d2 === void 0 ? void 0 : (_node$parentElement$d3 = _node$parentElement$d2.formula) === null || _node$parentElement$d3 === void 0 ? void 0 : _node$parentElement$d3.length) !== null && _node$parentElement$d !== void 0 ? _node$parentElement$d : '');\n}\n\n\n\n//# sourceURL=webpack:///./frontend/calculated.field/functions.js?");

/***/ }),

/***/ "./frontend/calculated.field/input.js":
/*!********************************************!*\
  !*** ./frontend/calculated.field/input.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./frontend/calculated.field/functions.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nvar InputData = window.JetFormBuilderAbstract.InputData;\n\nfunction CalculatedData() {\n  InputData.call(this);\n  this.listenTo = [];\n  this.formula = '';\n  this.precision = 0;\n  this.sepDecimal = '';\n  this.sepThousands = '';\n  this.visibleValNode = null;\n  this.regexp = /%([\\w\\-]+)%/g;\n\n  this.isSupported = function (node) {\n    return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.isCalculated)(node);\n  };\n\n  this.setValue = function () {\n    this.setListenTo();\n    this.reCalculate();\n    this.addWatchers();\n  };\n\n  this.makeReactive = function () {\n    InputData.prototype.makeReactive.call(this); // run signals\n\n    this.value.notify();\n  };\n\n  this.setNode = function (node) {\n    InputData.prototype.setNode.call(this, node);\n    var _node$parentElement$d = node.parentElement.dataset,\n        formula = _node$parentElement$d.formula,\n        precision = _node$parentElement$d.precision,\n        sepDecimal = _node$parentElement$d.sepDecimal;\n    this.formula = formula;\n    this.precision = +precision;\n    this.sepDecimal = sepDecimal;\n    this.visibleValNode = node.nextElementSibling;\n  };\n\n  this.reCalculate = function () {\n    this.value.current = this.calculate().toFixed(this.precision);\n  };\n\n  this.calculate = function () {\n    var _this = this;\n\n    var formula = this.formula.replace(this.regexp, function (match1, match2) {\n      if (!_this.listenTo.includes(match2)) {\n        return 0;\n      }\n\n      return _this.root.getInput(match2).calcValue;\n    });\n    return new Function('return ' + formula)();\n  };\n\n  this.setListenTo = function () {\n    var _iterator = _createForOfIteratorHelper(this.formula.matchAll(this.regexp)),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var _step$value = _slicedToArray(_step.value, 2),\n            fieldName = _step$value[1];\n\n        var input = this.root.getInput(fieldName);\n\n        if (!input) {\n          continue;\n        }\n\n        this.listenTo.push(input.getName());\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    this.listenTo = _toConsumableArray(new Set(this.listenTo));\n  };\n\n  this.addWatchers = function () {\n    var _this2 = this;\n\n    var _iterator2 = _createForOfIteratorHelper(this.listenTo),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var fieldName = _step2.value;\n        var input = this.root.getInput(fieldName);\n        input.watch(function () {\n          return _this2.reCalculate();\n        });\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n  };\n\n  this.addListeners = function () {// silence is golden\n  };\n}\n\nCalculatedData.prototype = Object.create(InputData.prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculatedData);\n\n//# sourceURL=webpack:///./frontend/calculated.field/input.js?");

/***/ }),

/***/ "./frontend/calculated.field/main.js":
/*!*******************************************!*\
  !*** ./frontend/calculated.field/main.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./frontend/calculated.field/input.js\");\n/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signal */ \"./frontend/calculated.field/signal.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar addFilter = wp.hooks.addFilter;\naddFilter('jet.fb.inputs', 'jet-form-builder/calculated-field', function (inputs) {\n  inputs = [_input__WEBPACK_IMPORTED_MODULE_0__[\"default\"]].concat(_toConsumableArray(inputs));\n  return inputs;\n});\naddFilter('jet.fb.signals', 'jet-form-builder/calculated-field', function (signals) {\n  signals = [_signal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]].concat(_toConsumableArray(signals));\n  return signals;\n});\n\n//# sourceURL=webpack:///./frontend/calculated.field/main.js?");

/***/ }),

/***/ "./frontend/calculated.field/signal.js":
/*!*********************************************!*\
  !*** ./frontend/calculated.field/signal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./frontend/calculated.field/functions.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar BaseSignal = window.JetFormBuilderAbstract.BaseSignal;\n/**\r\n * @property {CalculatedData} input\r\n */\n\nfunction SignalCalculated() {\n  BaseSignal.call(this);\n\n  this.isSupported = function (node, inputData) {\n    return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.isCalculated)(node);\n  };\n\n  this.runSignal = function () {\n    var _this$input$nodes = _slicedToArray(this.input.nodes, 1),\n        node = _this$input$nodes[0];\n\n    node.value = this.input.value.current;\n    this.input.visibleValNode.textContent = this.convertValue();\n  };\n\n  this.convertValue = function () {\n    var _this$input = this.input,\n        value = _this$input.value,\n        sepThousands = _this$input.sepThousands,\n        sepDecimal = _this$input.sepDecimal;\n    var parts = value.current.toString().split('.');\n    parts[0] = parts[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, sepThousands);\n    return parts.join(sepDecimal);\n  };\n}\n\nSignalCalculated.prototype = Object.create(BaseSignal.prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignalCalculated);\n\n//# sourceURL=webpack:///./frontend/calculated.field/signal.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/calculated.field/main.js");
/******/ 	
/******/ })()
;
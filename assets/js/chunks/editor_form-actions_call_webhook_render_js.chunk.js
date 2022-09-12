"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["editor_form-actions_call_webhook_render_js"],{

/***/ "./editor/form-actions/call.webhook/render.js":
/*!****************************************************!*\
  !*** ./editor/form-actions/call.webhook/render.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar _JetFBActions = JetFBActions,\n    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;\n/**\r\n * Internal dependencies\r\n */\n\nvar TextControl = wp.components.TextControl;\n\nvar CallWebHookRender = /*#__PURE__*/function (_wp$element$Component) {\n  _inherits(CallWebHookRender, _wp$element$Component);\n\n  var _super = _createSuper(CallWebHookRender);\n\n  function CallWebHookRender(props) {\n    var _this;\n\n    _classCallCheck(this, CallWebHookRender);\n\n    _this = _super.call(this, props);\n    _this.fields = getFormFieldsBlocks();\n    return _this;\n  }\n\n  _createClass(CallWebHookRender, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          settings = _this$props.settings,\n          label = _this$props.label,\n          onChangeSetting = _this$props.onChangeSetting;\n      /* eslint-disable jsx-a11y/no-onchange */\n\n      return wp.element.createElement(TextControl, {\n        key: \"webhook_url\",\n        label: label('webhook_url'),\n        value: settings.webhook_url,\n        onChange: function onChange(newVal) {\n          return onChangeSetting(newVal, 'webhook_url');\n        }\n      });\n      /* eslint-enable jsx-a11y/no-onchange */\n    }\n  }]);\n\n  return CallWebHookRender;\n}(wp.element.Component);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallWebHookRender);\n\n//# sourceURL=webpack:///./editor/form-actions/call.webhook/render.js?");

/***/ })

}]);
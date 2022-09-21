"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["editor_form-actions_update_options_render_js"],{

/***/ "./editor/form-actions/update.options/render.js":
/*!******************************************************!*\
  !*** ./editor/form-actions/update.options/render.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar _JetFBActions = JetFBActions,\n    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;\n/**\r\n * Internal dependencies\r\n */\n\nvar _wp$components = wp.components,\n    TextControl = _wp$components.TextControl,\n    SelectControl = _wp$components.SelectControl,\n    BaseControl = _wp$components.BaseControl;\n\nvar UpdateOptionsRender = /*#__PURE__*/function (_wp$element$Component) {\n  _inherits(UpdateOptionsRender, _wp$element$Component);\n\n  var _super = _createSuper(UpdateOptionsRender);\n\n  function UpdateOptionsRender(props) {\n    var _this;\n\n    _classCallCheck(this, UpdateOptionsRender);\n\n    _this = _super.call(this, props);\n    _this.fields = getFormFieldsBlocks();\n    return _this;\n  }\n\n  _createClass(UpdateOptionsRender, [{\n    key: \"getFieldByName\",\n    value: function getFieldByName(_ref) {\n      var source = _ref.source,\n          name = _ref.name;\n      var settings = this.props.settings;\n\n      if (settings[source] && settings[source][name]) {\n        return settings[source][name];\n      }\n\n      return '';\n    }\n  }, {\n    key: \"getFieldMeta\",\n    value: function getFieldMeta(name) {\n      return this.getFieldByName({\n        source: 'meta_fields_map',\n        name: name\n      });\n    }\n  }, {\n    key: \"changeFieldsMap\",\n    value: function changeFieldsMap(_ref2) {\n      var source = _ref2.source,\n          nameField = _ref2.nameField,\n          value = _ref2.value;\n      var fieldsMap = Object.assign({}, this.props.settings[source]);\n      fieldsMap[nameField] = value;\n      this.props.onChange(_objectSpread(_objectSpread({}, this.props.settings), {}, _defineProperty({}, source, fieldsMap)));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$props = this.props,\n          settings = _this$props.settings,\n          onChange = _this$props.onChange,\n          source = _this$props.source,\n          label = _this$props.label,\n          help = _this$props.help;\n\n      var onChangeMetaFieldMap = function onChangeMetaFieldMap(value, nameField) {\n        var source = 'meta_fields_map';\n\n        _this2.changeFieldsMap({\n          value: value,\n          nameField: nameField,\n          source: source\n        });\n      };\n\n      var onChangeSetting = function onChangeSetting(value, key) {\n        onChange(_objectSpread(_objectSpread({}, settings), {}, _defineProperty({}, key, value)));\n      };\n      /* eslint-disable jsx-a11y/no-onchange */\n\n\n      return wp.element.createElement(\"div\", {\n        key: \"register_user\"\n      }, wp.element.createElement(SelectControl, {\n        key: \"options_page_list\",\n        className: \"full-width\",\n        label: label('options_page'),\n        labelPosition: \"side\",\n        value: settings.options_page,\n        options: source.optionsPages,\n        onChange: function onChange(newValue) {\n          onChangeSetting(newValue, 'options_page');\n        }\n      }), wp.element.createElement(BaseControl, {\n        label: label('options_map'),\n        key: \"options_meta_list\"\n      }, wp.element.createElement(\"div\", {\n        className: \"jet-user-fields-map__list\"\n      }, this.fields.map(function (_ref3, index) {\n        var name = _ref3.name;\n        return wp.element.createElement(\"div\", {\n          className: \"jet-user-meta__row\",\n          key: 'options_meta_' + name + index\n        }, wp.element.createElement(TextControl, {\n          label: name,\n          value: _this2.getFieldMeta(name),\n          onChange: function onChange(newVal) {\n            return onChangeMetaFieldMap(newVal, name);\n          }\n        }));\n      }))));\n      /* eslint-enable jsx-a11y/no-onchange */\n    }\n  }]);\n\n  return UpdateOptionsRender;\n}(wp.element.Component);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateOptionsRender);\n\n//# sourceURL=webpack:///./editor/form-actions/update.options/render.js?");

/***/ })

}]);
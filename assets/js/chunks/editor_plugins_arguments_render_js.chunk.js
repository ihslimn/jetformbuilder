"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["editor_plugins_arguments_render_js"],{

/***/ "./editor/plugins/arguments/render.js":
/*!********************************************!*\
  !*** ./editor/plugins/arguments/render.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PluginArgs)\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar _JetFBHooks = JetFBHooks,\n    useMetaState = _JetFBHooks.useMetaState;\nvar _wp$components = wp.components,\n    TextControl = _wp$components.TextControl,\n    SelectControl = _wp$components.SelectControl,\n    ToggleControl = _wp$components.ToggleControl;\nvar __ = wp.i18n.__;\nvar source = window.JetFormEditorData.argumentsSource || {};\nfunction PluginArgs() {\n  var _useMetaState = useMetaState('_jf_args'),\n      _useMetaState2 = _slicedToArray(_useMetaState, 2),\n      args = _useMetaState2[0],\n      setArgs = _useMetaState2[1];\n\n  return wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {\n    label: __('Fields Layout', 'jet-form-builder'),\n    value: args.fields_layout,\n    options: source.fields_layout,\n    onChange: function onChange(newVal) {\n      setArgs(function (prevArgs) {\n        return _objectSpread(_objectSpread({}, prevArgs), {}, {\n          fields_layout: newVal\n        });\n      });\n    }\n  }), wp.element.createElement(TextControl, {\n    label: __('Required Mark', 'jet-form-builder'),\n    value: args.required_mark,\n    onChange: function onChange(newVal) {\n      setArgs(function (prevArgs) {\n        return _objectSpread(_objectSpread({}, prevArgs), {}, {\n          required_mark: newVal\n        });\n      });\n    }\n  }), wp.element.createElement(SelectControl, {\n    label: __('Fields label HTML tag', 'jet-form-builder'),\n    value: args.fields_label_tag,\n    options: source.fields_label_tag,\n    onChange: function onChange(newVal) {\n      setArgs(function (prevArgs) {\n        return _objectSpread(_objectSpread({}, prevArgs), {}, {\n          fields_label_tag: newVal\n        });\n      });\n    }\n  }), wp.element.createElement(SelectControl, {\n    label: __('Submit Type', 'jet-form-builder'),\n    value: args.submit_type,\n    options: source.submit_type,\n    onChange: function onChange(newVal) {\n      setArgs(function (prevArgs) {\n        return _objectSpread(_objectSpread({}, prevArgs), {}, {\n          submit_type: newVal\n        });\n      });\n    }\n  }), wp.element.createElement(ToggleControl, {\n    key: 'enable_progress',\n    label: __('Enable form pages progress', 'jet-from-builder'),\n    checked: args.enable_progress,\n    help: __('Displays the progress of a multi-page form', 'jet-form-builder'),\n    onChange: function onChange() {\n      setArgs(function (prev) {\n        var enable_progress = !Boolean(prev.enable_progress);\n        return _objectSpread(_objectSpread({}, prev), {}, {\n          enable_progress: enable_progress\n        });\n      });\n    }\n  }));\n}\n\n//# sourceURL=webpack:///./editor/plugins/arguments/render.js?");

/***/ })

}]);
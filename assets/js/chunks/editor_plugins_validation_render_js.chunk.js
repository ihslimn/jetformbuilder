"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["editor_plugins_validation_render_js"],{

/***/ "./editor/plugins/validation/modal.js":
/*!********************************************!*\
  !*** ./editor/plugins/validation/modal.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar _JetFBComponents = JetFBComponents,\n    ActionModalContext = _JetFBComponents.ActionModalContext,\n    ValidationMetaMessage = _JetFBComponents.ValidationMetaMessage;\nvar _JetFBHooks = JetFBHooks,\n    useMetaState = _JetFBHooks.useMetaState,\n    useGroupedValidationMessages = _JetFBHooks.useGroupedValidationMessages;\nvar _wp$element = wp.element,\n    useEffect = _wp$element.useEffect,\n    useState = _wp$element.useState,\n    useContext = _wp$element.useContext;\nvar _wp$components = wp.components,\n    Card = _wp$components.Card,\n    CardBody = _wp$components.CardBody,\n    CardHeader = _wp$components.CardHeader;\nvar __ = wp.i18n.__;\n\nfunction ValidationModal() {\n  var _useMetaState = useMetaState('_jf_validation', '{}', []),\n      _useMetaState2 = _slicedToArray(_useMetaState, 2),\n      args = _useMetaState2[0],\n      setArgs = _useMetaState2[1];\n\n  var messages = useGroupedValidationMessages();\n\n  var _useState = useState(function () {\n    var _args$messages;\n\n    return (_args$messages = args.messages) !== null && _args$messages !== void 0 ? _args$messages : {};\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      current = _useState2[0],\n      setCurrent = _useState2[1];\n\n  var _useContext = useContext(ActionModalContext),\n      actionClick = _useContext.actionClick,\n      onRequestClose = _useContext.onRequestClose;\n\n  useEffect(function () {\n    if (actionClick) {\n      setArgs(function (prev) {\n        return _objectSpread(_objectSpread({}, prev), {}, {\n          messages: current\n        });\n      });\n    }\n\n    if (null !== actionClick) {\n      onRequestClose();\n    }\n  }, [actionClick]);\n  return wp.element.createElement(React.Fragment, null, wp.element.createElement(\"div\", {\n    className: \"jet-fb-validation-messages\"\n  }, messages.map(function (message) {\n    return wp.element.createElement(Card, {\n      key: 'message_item' + message.id,\n      size: 'extraSmall',\n      className: \"jet-fb-validation-messages-item\",\n      elevation: 2\n    }, !!message.blocks.length && wp.element.createElement(CardHeader, {\n      className: \"jet-fb-validation-messages-item-heading\"\n    }, __('Used by the following blocks:', 'jet-form-builder'), message.blocks.map(function (block) {\n      return wp.element.createElement(\"span\", {\n        key: 'message_block_item' + block.title,\n        className: \"jet-fb-validation-messages-item-heading-pair\"\n      }, wp.element.createElement(\"span\", {\n        className: \"jet-fb-validation-messages-item-heading-pair__icon\"\n      }, block.icon), wp.element.createElement(\"span\", {\n        className: \"jet-fb-validation-messages-item-heading-pair__title\"\n      }, block.title));\n    })), wp.element.createElement(CardBody, null, wp.element.createElement(ValidationMetaMessage, {\n      name: message.id,\n      messages: current,\n      update: setCurrent\n    })));\n  })));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationModal);\n\n//# sourceURL=webpack:///./editor/plugins/validation/modal.js?");

/***/ }),

/***/ "./editor/plugins/validation/render.js":
/*!*********************************************!*\
  !*** ./editor/plugins/validation/render.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./editor/plugins/validation/modal.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    ToggleControl = _wp$components.ToggleControl,\n    ToggleGroupControl = _wp$components.__experimentalToggleGroupControl,\n    ToggleGroupControlOption = _wp$components.__experimentalToggleGroupControlOption;\nvar __ = wp.i18n.__;\nvar useState = wp.element.useState;\nvar _JetFBHooks = JetFBHooks,\n    useMetaState = _JetFBHooks.useMetaState;\nvar _JetFBComponents = JetFBComponents,\n    ActionModal = _JetFBComponents.ActionModal;\nvar formats = window.jetFormValidation.formats;\n\nfunction ValidationPlugin() {\n  var _args$load_nonce, _validation$type;\n\n  var _useMetaState = useMetaState('_jf_validation'),\n      _useMetaState2 = _slicedToArray(_useMetaState, 2),\n      validation = _useMetaState2[0],\n      setValidation = _useMetaState2[1];\n\n  var _useMetaState3 = useMetaState('_jf_args'),\n      _useMetaState4 = _slicedToArray(_useMetaState3, 2),\n      args = _useMetaState4[0],\n      setArgs = _useMetaState4[1];\n\n  var _useState = useState(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      isEditValidation = _useState2[0],\n      setEditValidation = _useState2[1];\n\n  var _useState3 = useState('render' === ((_args$load_nonce = args === null || args === void 0 ? void 0 : args.load_nonce) !== null && _args$load_nonce !== void 0 ? _args$load_nonce : 'render')),\n      _useState4 = _slicedToArray(_useState3, 2),\n      isLoadNonce = _useState4[0],\n      setLoadNonce = _useState4[1];\n\n  return wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {\n    key: 'load_nonce',\n    label: __('Enable form safety', 'jet-form-builder'),\n    checked: isLoadNonce,\n    help: __(\"Protects the form with a WordPress nonce. Toggle this option off if the form's page's caching can't be disabled\", 'jet-form-builder'),\n    onChange: function onChange() {\n      setLoadNonce(function (prev) {\n        return !prev;\n      });\n      setArgs(function (prev) {\n        var load_nonce = !isLoadNonce ? 'hide' : 'render';\n        return _objectSpread(_objectSpread({}, prev), {}, {\n          load_nonce: load_nonce\n        });\n      });\n    }\n  }), wp.element.createElement(ToggleControl, {\n    key: 'use_csrf',\n    label: __('Enable csrf protection', 'jet-form-builder'),\n    checked: args.use_csrf,\n    onChange: function onChange() {\n      setArgs(function (prev) {\n        var use_csrf = !Boolean(prev.use_csrf);\n        return _objectSpread(_objectSpread({}, prev), {}, {\n          use_csrf: use_csrf\n        });\n      });\n    }\n  }), wp.element.createElement(ToggleGroupControl, {\n    onChange: function onChange(type) {\n      return setValidation(function (prev) {\n        return _objectSpread(_objectSpread({}, prev), {}, {\n          type: type\n        });\n      });\n    },\n    value: (_validation$type = validation.type) !== null && _validation$type !== void 0 ? _validation$type : 'browser',\n    label: __('Validation type', 'jet-form-builder'),\n    isBlock: true,\n    isAdaptiveWidth: false\n  }, formats.map(function (current) {\n    return wp.element.createElement(ToggleGroupControlOption, {\n      key: current.value + '_key',\n      label: current.label,\n      value: current.value,\n      \"aria-label\": current.title,\n      showTooltip: true\n    });\n  })), 'advanced' === validation.type && wp.element.createElement(Button, {\n    isTertiary: true,\n    isSmall: true,\n    icon: 'edit',\n    onClick: function onClick() {\n      return setEditValidation(true);\n    }\n  }), isEditValidation && wp.element.createElement(ActionModal, {\n    title: 'Edit Manual Options',\n    onRequestClose: function onRequestClose() {\n      return setEditValidation(false);\n    },\n    classNames: ['width-60']\n  }, wp.element.createElement(_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null)));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationPlugin);\n\n//# sourceURL=webpack:///./editor/plugins/validation/render.js?");

/***/ })

}]);
(()=>{"use strict";var e="jetFBSanitizeValue",t="sanitizeValue";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=JetFBActions.getSupport;const a="jet-forms/sanitizers",u="REGISTER",c="UNREGISTER";function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===s(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m={getTypeIndex:function(e,t){return e.types.findIndex((function(e){return e.value===t}))},getTypes:function(e){return e.types},getType:function(e,t){var r=m.getTypeIndex(e,t);return e.types[r]}};const v=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},m);var b;function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===g(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}const j=(w(b={},u,(function(e,t){Array.isArray(t.items)||(t.items=[t.items]);var r,n,o=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){a=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(a)throw i}}}}(t.items);try{for(o.s();!(r=o.n()).done;){var i=r.value;if((i="object"===g(n=i)?n:"string"==typeof n?{value:n,label:n}:n).hasOwnProperty("value")){var l=v.getTypeIndex(e,i.value);-1===l?e.types.push(d({},i)):e.types[l]=d(d({},e.types[l]),i)}}}catch(e){o.e(e)}finally{o.f()}return e})),w(b,c,(function(e,t){var r=t.types;return e.types=e.types.filter((function(e){var t=e.value;return!r.includes(t)})),e})),b);var O={types:[]};const S={register:function(e){return{type:u,items:e}},unRegister:function(e){return{type:c,types:e}}},E=(0,wp.data.createReduxStore)(a,{reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,r=j[null==t?void 0:t.type];return r?r(e,t):e},actions:S,selectors:v});var P=wp.primitives,x=P.SVG,C=P.Path;const _=wp.element.createElement(x,{style:{fill:"currentColor",outline:"none"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},wp.element.createElement(C,{"fill-rule":"evenodd",d:"M17.375 15.656A6.47 6.47 0 0018.5 12a6.47 6.47 0 00-.943-3.374l-1.262.813c.448.749.705 1.625.705 2.561a4.977 4.977 0 01-.887 2.844l1.262.813zm-1.951 1.87l-.813-1.261A4.976 4.976 0 0112 17c-.958 0-1.852-.27-2.613-.736l-.812 1.261A6.47 6.47 0 0012 18.5a6.47 6.47 0 003.424-.974zm-8.8-1.87A6.47 6.47 0 015.5 12c0-1.235.344-2.39.943-3.373l1.261.812A4.977 4.977 0 007 12c0 1.056.328 2.036.887 2.843l-1.262.813zm2.581-7.803A4.977 4.977 0 0112 7c1.035 0 1.996.314 2.794.853l.812-1.262A6.47 6.47 0 0012 5.5a6.47 6.47 0 00-3.607 1.092l.812 1.261zM12 20a8 8 0 100-16 8 8 0 000 16zm0-4.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z","clip-rule":"evenodd"}));var z=wp.data.useSelect;const B=(0,wp.element.createContext)({control:{},current:!1,addNew:function(){},remove:function(){},edit:function(){},onClose:function(){}});var k=wp.element.useContext;const A=function(){return k(B)};var T=JetFBActions.isEmpty,M=wp.components.Button;const D=function(){var e=A(),t=e.control,r=e.remove,n=e.current,o=e.addNew,i=!T(n);return wp.element.createElement(M,{onClick:function(e){e.stopPropagation(),i?r():o()},className:["components-dropdown-menu__menu-item","has-text",i?"is-active":""].join(" "),icon:t.icon,"aria-checked":i,role:"menuitemcheckbox",shortcut:t.help||""},t.label)};function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function R(e){return function(e){if(Array.isArray(e))return J(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||N(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){V(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function V(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==F(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==F(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===F(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(e,t){if(e){if("string"==typeof e)return J(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?J(e,t):void 0}}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var L=wp.i18n.__,Z=wp.components,$=Z.ToolbarDropdownMenu,U=Z.Button,G=(Z.Flex,JetFBHooks.useBlockAttributes),K=JetFBComponents.BaseHelp,q=function(e){var t=e.onClose,r=e.control,n=e.current,o=e.addNew,i=e.remove,l=e.edit,a="function"==typeof r.render?r.render:null;return wp.element.createElement(B.Provider,{value:{control:r,current:n,addNew:o,remove:i,edit:l,onClose:t}},a?wp.element.createElement(a,null):wp.element.createElement(D,null))};const Q=function(){var e,r,n=(e=G(),r=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,l,a=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(e,r)||N(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1],l=o[t],u=function(e){return null!=l&&l.length?l.findIndex((function(t){return"string"==typeof t?t===e:t.value===e})):-1},c=z((function(e){return e(a).getTypes()}),[]).map((function(e){return e.icon=e.icon||_,e}));return wp.element.createElement($,{icon:_,label:L("Sanitize value","jet-form-builder")},(function(e){var r=e.onClose;return wp.element.createElement(React.Fragment,null,wp.element.createElement(K,null,L("Select method to clean user input before process form","jet-form-builder")),c.map((function(e,n){return wp.element.createElement(q,{key:n,control:e,onClose:r,current:null==l?void 0:l[u(e.value)],addNew:function(){return r=e.value,i((function(e){return I(I({},e),{},V({},t,[].concat(R(e[t]||[]),[r])))}));var r},remove:function(){return r=e.value,i((function(e){return I(I({},e),{},V({},t,e[t].filter((function(e){var t;return(null!==(t=null==e?void 0:e.value)&&void 0!==t?t:e)!==r}))))}));var r},edit:function(r){return function(e,r){return i((function(n){var o=JSON.parse(JSON.stringify(n[t]||[])),i=u(e);return-1===i&&(i=o.push({value:e})-1),"string"==typeof o[i]&&(o[i]={value:e}),o[i]=I(I({},o[i]),r),I(I({},n),{},V({},t,R(o)))}))}(e.value,r)}})})),wp.element.createElement(U,{onClick:function(e){e.stopPropagation(),r(),i((function(e){return I(I({},e),{},V({},t,void 0))}))},className:["components-dropdown-menu__menu-item","has-separator"].join(" "),role:"menuitem",disabled:!(null!=l&&l.length)},L("Reset all","jet-form-builder")))}))};var W=wp.compose.createHigherOrderComponent,X=wp.blockEditor.BlockControls,Y=wp.data.useSelect;const ee=W((function(t){return function(r){var n=r.name,o=Y((function(t){return t("core/blocks").getBlockSupport(n,e)}));return wp.element.createElement(React.Fragment,null,wp.element.createElement(t,r),Boolean(o)&&wp.element.createElement(X,{group:"other"},wp.element.createElement(Q,null)))}}),"withBlockToolbarControls");var te=wp.components,re=te.TextControl,ne=(te.Flex,te.Tooltip,te.Button),oe=(JetFBActions.isEmpty,JetFBHooks.useSuccessNotice),ie=wp.i18n.__,le=wp.compose.useCopyToClipboard,ae="jet_fb_sv_",ue=new RegExp("^".concat(ae));var ce=wp.i18n.__;const se={value:"custom",label:ce("Custom transform","jet-form-builder"),render:function(){var e,t,r=A(),n=r.edit,o=r.remove,i=r.current,l=oe(ie("Paste the copied snippet into your theme's functions.php.","jet-form-builder")),a=le((t=null==i?void 0:i.callback,"function jet_fb_sv_".concat(t,"( \\JFB_Modules\\Block_Parsers\\Field_Data_Parser $parser ) {\n\t$value = $parser->get_value();\n\n\t// do something with $value...\n\n\t$parser->set_value( $value );\n}")),(function(){return l(!0)}));return wp.element.createElement(React.Fragment,null,wp.element.createElement(D,null),Boolean(i)&&wp.element.createElement("div",{style:{padding:"6px 12px 6px 8px"}},wp.element.createElement(re,{value:null!==(e=null==i?void 0:i.callback)&&void 0!==e?e:"",onChange:function(e){e=function(e){var t;return null!==(t=e)&&void 0!==t&&t.length&&ae!==e?(e=e.replace(/[^\w]/gi,"")).replace(ue,""):""}(e),Boolean(e)?n({callback:e}):o()}}),Boolean(null==i?void 0:i.callback)&&wp.element.createElement(ne,{isLink:!0,ref:a},ie("Copy the snippet","jet-form-builder"))))},help:ce("Specify the name of the PHP function that will process the value","jet-form-builder"),icon:wp.element.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{d:"M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"}))};var pe=wp.i18n.__;const fe={value:"email",label:pe("Sanitize email","jet-form-builder"),help:pe("Strips out all characters that are not allowable in an email","jet-form-builder"),icon:wp.element.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{d:"M12.5939 21C14.1472 21 16.1269 20.5701 17.0711 20.1975L16.6447 18.879C16.0964 19.051 14.3299 19.6242 12.6548 19.6242C7.4467 19.6242 4.67513 16.8726 4.67513 12C4.67513 7.21338 7.50762 4.34713 12.2893 4.34713C17.132 4.34713 19.4162 7.55732 19.4162 10.7675C19.4162 14.035 19.0508 15.4968 17.4975 15.4968C16.5838 15.4968 16.0964 14.7803 16.0964 13.9777V7.5H14.4822V8.30255H14.3909C14.1777 7.67198 12.9898 7.12739 11.467 7.2707C9.18274 7.5 7.4467 9.27707 7.4467 11.8567C7.4467 14.5796 8.81726 16.672 11.467 16.758C13.203 16.8153 14.1168 16.0127 14.4822 15.1815H14.5736C14.7563 16.414 16.401 16.8439 17.467 16.8439C20.6954 16.8439 21 13.5764 21 10.7962C21 6.86943 18.0761 3 12.3807 3C6.50254 3 3 6.3535 3 11.9427C3 17.7325 6.38071 21 12.5939 21ZM11.7107 15.2962C9.73096 15.2962 9.03046 13.6051 9.03046 11.7707C9.03046 10.1083 10.0355 8.67516 11.7716 8.67516C13.599 8.67516 14.5736 9.36306 14.5736 11.7707C14.5736 14.1497 13.7513 15.2962 11.7107 15.2962Z"}))};var me=wp.i18n.__;const ve={value:"key",label:me("Sanitize key","jet-form-builder"),help:me("Keys are used as internal identifiers. Lowercase \nalphanumeric characters, dashes, and underscores are allowed.","jet-form-builder"),icon:wp.element.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{d:"M9 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9 16a4.002 4.002 0 003.8-2.75H15V16h2.5v-2.75H19v-2.5h-6.2A4.002 4.002 0 005 12a4 4 0 004 4z",fillRule:"evenodd",clipRule:"evenodd"}))};var be=wp.i18n.__;const ye={value:"text",label:be("Sanitize text","jet-form-builder"),help:be("Checks for invalid UTF-8, converts single `<` characters \nto entities, strips all tags, removes line breaks, tabs, and extra whitespace, \nstrips percent-encoded characters","jet-form-builder"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{d:"M12.9 6h-2l-4 11h1.9l1.1-3h4.2l1.1 3h1.9L12.9 6zm-2.5 6.5l1.5-4.9 1.7 4.9h-3.2z"}))};var de=wp.i18n.__;const we={value:"textarea",label:de("Sanitize textarea","jet-form-builder"),help:de('The function is like "Sanitize text", but preserves \nnew lines (\\n) and other whitespace, which are legitimate \ninput in textarea elements',"jet-form-builder"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{d:"M7.1 6.8L3.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H7.1zm-.8 6.8L8 8.9l1.7 4.7H6.3zm14.5-1.5c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2 .1.8-.2 1.4-.6 2z"}))};var he=wp.i18n.__;const ge={value:"title",label:he("Sanitize title","jet-form-builder"),help:he("Sanitizes a string into a slug, which can be used in \nURLs or HTML attributes","jet-form-builder"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{d:"M17.6 7c-.6.9-1.5 1.7-2.6 2v1h2v7h2V7h-1.4zM11 11H7V7H5v10h2v-4h4v4h2V7h-2v4z"}))};var je=wp.i18n.__;const Oe={value:"url",label:je("Sanitize url","jet-form-builder"),help:je("Sanitizes a URL for database or redirect usage","jet-form-builder"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))};var Se=wp.i18n.__;const Ee={value:"user",label:Se("Sanitize user name","jet-form-builder"),help:Se("Sanitizes a username, stripping out unsafe characters","jet-form-builder"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{fillRule:"evenodd",d:"M7.25 16.437a6.5 6.5 0 1 1 9.5 0V16A2.75 2.75 0 0 0 14 13.25h-4A2.75 2.75 0 0 0 7.25 16v.437Zm1.5 1.193a6.47 6.47 0 0 0 3.25.87 6.47 6.47 0 0 0 3.25-.87V16c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.63ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",clipRule:"evenodd"}))};var Pe=wp.data,xe=Pe.register,Ce=Pe.dispatch,_e=wp.hooks.addFilter;wp.i18n.__,_e("blocks.registerBlockType","jet-form-builder/sanitize-value-support",(function(r,n){return l(r,e)?(r.attributes=o(o({},r.attributes),{},i({},t,{type:"array",default:[]})),r):r})),_e("editor.BlockEdit","jet-form-builder/sanitize-value-controls",ee),xe(E);var ze=window.JetFBValueSanitizers;Ce(a).register(ze),Ce(a).register([fe,ve,ye,we,ge,Oe,Ee,se])})();
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[819],{2819:(e,t,r)=>{function n(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(e){i=!0,o=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.r(t),r.d(t,{default:()=>k});var i=JetFBActions,c=(i.Tools,i.addAction,i.getFormFieldsBlocks),u=JetFBComponents,s=u.FieldWithPreset,d=u.DynamicPreset,p=wp.components,f=p.TextControl,m=(p.ToggleControl,p.SelectControl),_=p.BaseControl,y=p.CheckboxControl,h=(wp.i18n.__,wp.element),g=h.useState,b=h.useEffect,v=JetFBHooks.withRequestFields,w=wp.data.withSelect,C=wp.hooks.applyFilters;const k=w(v)((function(e){var t=e.source,r=e.label,a=e.settings,l=(e.onChangeSetting,e.onChangeSettingObj),i=e.requestFields,u=o(g(t.redirect_types),2),p=u[0],h=u[1],v=o(g([]),2),w=v[0],k=v[1];b((function(){-1===i.findIndex((function(e){return"inserted_post_id"===e.value}))&&h((function(e){return e.filter((function(e){return"inserted_post"!==e.value}))}));var t=C("jet.fb.redirect_to_page.types",[],e);t.length&&h((function(e){return[].concat(n(e),n(t))})),k([].concat(n(c()),n(i)))}),[]);var S=function(e){var t=Array.from(a.redirect_args||[]);return Boolean(t.includes(e))};return wp.element.createElement("div",{key:"redirect_to_page"},wp.element.createElement(m,{className:"full-width",key:"redirect_type",label:r("redirect_type"),labelPosition:"side",value:a.redirect_type,options:p,onChange:function(e){return l({redirect_type:e})}}),"static_page"===a.redirect_type&&wp.element.createElement(m,{key:"redirect_type_page",className:"full-width",label:r("redirect_page"),labelPosition:"side",value:a.redirect_page,options:t.pages,onChange:function(e){return l({redirect_page:e})}}),"custom_url"===a.redirect_type&&wp.element.createElement(s,{key:"custom_url-FieldWithPreset",ModalEditor:function(e){var t=e.actionClick,r=e.onRequestClose;return wp.element.createElement(d,{value:a.redirect_url,isSaveAction:t,onSavePreset:function(e){return l({redirect_url:e})},onUnMount:r,excludeSources:["query_var"]})},triggerClasses:["trigger__text-control"]},wp.element.createElement(f,{key:"redirect_url_control",label:r("redirect_url"),value:a.redirect_url,className:"jet-control-with-dynamic",onChange:function(e){return l({redirect_url:e})}})),wp.element.createElement(_,{label:r("redirect_args"),key:"redirect_args_control"},wp.element.createElement("div",{className:"jet-user-fields-map__list"},w.map((function(e,t){var r=e.name;return wp.element.createElement(y,{key:"checkbox_args_".concat(r,"_").concat(t),label:r,checked:S(r),onChange:function(e){return function(e,t){var r=Array.from(a.redirect_args||[]);if(e)r.push(t);else{var n=r.indexOf(t);r.splice(n,1)}l({redirect_args:r})}(e,r)}})})))),wp.element.createElement(f,{key:"redirect_hash_control",label:r("redirect_hash"),value:a.redirect_hash,onChange:function(e){return l({redirect_hash:e})}}))}))}}]);
(()=>{"use strict";function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,o,a,i=[],m=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;m=!1}else for(;!(m=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);m=!0);}catch(e){c=!0,l=e}finally{try{if(!m&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw l}}return i}}(e,r)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var r=wp.components,n=r.Modal,l=r.TextareaControl,o=r.Button,a=r.Notice,i=r.ExternalLink,m=r.Flex,c=wp.element.useState,u=wp.i18n,p=u.__,s=u.sprintf,f=wp.apiFetch,d=JetFormBuilderParser,w=d.parseHTMLtoBlocks,h=d.getFormInnerFields,b=["Registration form with minimum inputs","Opt-in form with gender selector like radio","Quiz form with 5 questions with choices about math"];const y=function(t){var r=t.setShowModal,u=t.footer,d=void 0===u?function(){return"Here may be buttons"}:u,y=e(c(""),2),L=y[0],g=y[1],v=e(c(""),2),E=v[0],j=v[1],S=e(c(!1),2),k=S[0],C=S[1],M=e(c(""),2),A=M[0],I=M[1],x=e(c(0),2),F=x[0],B=x[1],O=e(c(0),2),T=O[0],P=O[1];return wp.element.createElement(n,{style:{width:"60vw"},onRequestClose:function(){return r(!1)},title:wp.element.createElement(m,null,p("Generate Form with AI","jet-form-builder"),wp.element.createElement("span",{className:"badge"},p("Beta. Limited 10 requests per month","jet-form-builder"))),className:"jfb-ai-modal"},A&&wp.element.createElement(a,{status:"error",onRemove:function(){return I("")}},wp.element.createElement(m,{direction:"column"},A,wp.element.createElement(i,{href:"https://support.crocoblock.com/support/home/"},p("Contact Crocoblock support","jet-form-builder")))),Boolean(E.length)?wp.element.createElement(React.Fragment,null,wp.element.createElement("div",{dangerouslySetInnerHTML:{__html:E},style:{padding:"2em 1em",backgroundColor:"#f6f7f7",marginBottom:"1em"}}),wp.element.createElement(d,{clearHTML:function(){return j("")},formHTML:E,prompt:L},wp.element.createElement("span",{style:{flex:"1",textAlign:"end",color:"rgb( 117, 117, 117 )"}},s(p("Requests used: %d/%d","jet-form-builder"),F,T)))):wp.element.createElement(React.Fragment,null,wp.element.createElement(l,{label:p("Describe the form you want","jet-form-builder"),value:L,onChange:g,help:p("Prompt example: Simple contact form","jet-form-builder")}),Boolean(L.length)&&wp.element.createElement(o,{variant:"primary",isBusy:k,disabled:k,onClick:function(){C(!0),f({path:"/jet-form-builder/v1/ai/generate",method:"POST",data:{prompt:L}}).then((function(e){I(""),j(h(e.form)),console.group(p("JFB: Parsed blocks from generated HTML","jet-form-builder")),console.log(w(e.form)),console.groupEnd(),B(e.usage),P(e.limit)})).catch((function(e){var t;I(null!==(t=null==e?void 0:e.message)&&void 0!==t?t:p("Undefined error.","jet-form-builder"))})).finally((function(){C(!1)}))}},p("Generate","jet-form-builder")),wp.element.createElement("h4",null,p("Tips to write good prompt:","jet-form-builder")),wp.element.createElement("ul",{style:{listStyle:"disc",paddingInlineStart:"1em"}},wp.element.createElement("li",null,p("Start with the main purpose of the form.","jet-form-builder")),wp.element.createElement("li",null,p("If you need some specific fields - describe \nthem also in prompt.","jet-form-builder")),wp.element.createElement("li",null,p("Better to use English language for \nthe prompt - AI understand it better than other","jet-form-builder"))),wp.element.createElement("h4",null,p("Examples of the good prompts:","jet-form-builder")),wp.element.createElement("ul",{style:{listStyle:"disc",paddingInlineStart:"1em"}},b.map((function(e){return wp.element.createElement("li",{key:e},wp.element.createElement(o,{onClick:function(){return g(e)},variant:"link"},e))})))))};function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},L.apply(this,arguments)}var g=wp.i18n.__,v=JetFormBuilderParser.parseHTMLtoBlocks,E=wp.components,j=E.Button,S=E.Flex,k=E.Popover,C=JetFBHooks,M=C.useTriggerPopover,A=C.usePattern;const I=function(e){var t=e.clearHTML,r=e.formHTML,n=e.children,l=void 0===n?null:n,o=M(),a=o.showPopover,i=o.setShowPopover,m=o.ref,c=o.popoverProps,u=A({name:"ai"}),p=u.insert,s=u.append,f=u.blocks;return wp.element.createElement(S,{justify:"flex-start"},wp.element.createElement(j,{ref:m,variant:"primary",onClick:function(){return f.length?i((function(e){return!e})):p({blocks:v(r)})}},g("Use this form","jet-form-builder")),wp.element.createElement(j,{variant:"secondary",onClick:t},g("Change generation prompt","jet-form-builder")),a&&wp.element.createElement(k,L({position:"top-start",noArrow:!1},c),wp.element.createElement("div",{style:{padding:"0.5em",width:"max-content"}},wp.element.createElement("span",null,g("I want to","jet-form-builder"))," ",wp.element.createElement(j,{isLink:!0,isDestructive:!0,onClick:function(){return p({blocks:v(r)})}},g("replace","jet-form-builder"))," / ",wp.element.createElement(j,{isLink:!0,onClick:function(){return s({blocks:v(r)})}},g("append","jet-form-builder"))," ",wp.element.createElement("span",null,g("form settings and blocks","jet-form-builder")))),l)};function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var F=wp.components.Button,B=wp.element.useState,O=wp.i18n.__;function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var P=JetFBComponents.PatternInserterButton,_=wp.element.useState,R=wp.components,H=R.FlexItem,Z=(R.Flex,wp.i18n.__);var q=wp.element.createRoot,N=wp.data,J=N.subscribe,U=N.dispatch,G=document.createElement("div");G.classList.add("jfb-generate-form-ai-wrapper"),q(G).render(wp.element.createElement((function(){var e,t,r=(e=B(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,o,a,i=[],m=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;m=!1}else for(;!(m=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);m=!0);}catch(e){c=!0,l=e}finally{try{if(!m&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw l}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=r[0],l=r[1];return wp.element.createElement(React.Fragment,null,wp.element.createElement(F,{variant:"tertiary",iconSize:"16",icon:wp.element.createElement("svg",{width:"16",height:"16",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:"M7.5 3.6L10 5L8.6 2.5L10 0L7.5 1.4L5 0L6.4 2.5L5 5L7.5 3.6ZM19.5 13.4L17 12L18.4 14.5L17 17L19.5 15.6L22 17L20.6 14.5L22 12L19.5 13.4ZM22 0L19.5 1.4L17 0L18.4 2.5L17 5L19.5 3.6L22 5L20.6 2.5L22 0ZM14.37 5.29C13.98 4.9 13.35 4.9 12.96 5.29L1.29 16.96C0.899998 17.35 0.899998 17.98 1.29 18.37L3.63 20.71C4.02 21.1 4.65 21.1 5.04 20.71L16.7 9.05C17.09 8.66 17.09 8.03 16.7 7.64L14.37 5.29ZM13.34 10.78L11.22 8.66L13.66 6.22L15.78 8.34L13.34 10.78Z",fill:"currentColor"})),onClick:function(){return l((function(e){return!e}))}},O("Generate Form with AI","jet-form-builder")),n&&wp.element.createElement(React.Fragment,null,wp.element.createElement(y,{setShowModal:l,footer:I})))}),null));var z=function(){var e=document.querySelector(".edit-post-header-toolbar");return!e||e.querySelector(".jfb-generate-form-ai-wrapper")||e.appendChild(G),null};wp.domReady((function(){J((function(){setTimeout(z,0)}))})),U("jet-forms/patterns").register({name:"ai",title:"Generate via AI",view:function(e){var t,r,n=e.pattern,l=(t=_(!1),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,o,a,i=[],m=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;m=!1}else for(;!(m=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);m=!0);}catch(e){c=!0,l=e}finally{try{if(!m&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw l}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=l[0],a=l[1];return wp.element.createElement(React.Fragment,null,wp.element.createElement(H,{style:{height:"calc( 32px + 3em )",margin:"0.6em",alignSelf:"center"}},Z("or","jet-form-builder")),wp.element.createElement("li",null,wp.element.createElement(P,{patternName:"ai",variant:"secondary",withPatternIcon:!0,iconSize:32,className:"block-editor-block-variation-picker__variation",onClick:function(){return a(!0)}}),wp.element.createElement("span",{className:"block-editor-block-variation-picker__variation-label"},n.title)),o&&wp.element.createElement(React.Fragment,null,wp.element.createElement(y,{setShowModal:a,footer:I})))},icon:wp.element.createElement("svg",{width:"16",height:"16",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:"M7.5 3.6L10 5L8.6 2.5L10 0L7.5 1.4L5 0L6.4 2.5L5 5L7.5 3.6ZM19.5 13.4L17 12L18.4 14.5L17 17L19.5 15.6L22 17L20.6 14.5L22 12L19.5 13.4ZM22 0L19.5 1.4L17 0L18.4 2.5L17 5L19.5 3.6L22 5L20.6 2.5L22 0ZM14.37 5.29C13.98 4.9 13.35 4.9 12.96 5.29L1.29 16.96C0.899998 17.35 0.899998 17.98 1.29 18.37L3.63 20.71C4.02 21.1 4.65 21.1 5.04 20.71L16.7 9.05C17.09 8.66 17.09 8.03 16.7 7.64L14.37 5.29ZM13.34 10.78L11.22 8.66L13.66 6.22L15.78 8.34L13.34 10.78Z",fill:"currentColor"}))})})();
(()=>{"use strict";function t(t){return t.parentElement.classList.contains("jet-fb-map-field")}let e=!1;function i(){return!1===e&&(e=new window.JetEngineMapsProvider),e}const{InputData:n}=JetFormBuilderAbstract;function s(){n.call(this),this.isSupported=function(e){return t(e)},this.setNode=function(t){n.prototype.setNode.call(this,t);const e=t.parentElement;this.nodes.push(e.querySelector('[data-map-field="hash"]'),e.querySelector('[data-map-field="lat"]'),e.querySelector('[data-map-field="lng"]')),this.fieldSettings={...this.fieldSettings,...JSON.parse(t.dataset.settings)},this.fieldSettings.zoom=+this.fieldSettings.zoom,this.inputType="map"},this.setValue=function(){const[t]=this.nodes;if(!t.value)return;const e=t=>{const e=t.split(","),i=Number(e[0]),n=Number(e[1]);return 2!==e.length||Number.isNaN(i)||Number.isNaN(n)?{}:{lat:i,lng:n}};switch(this.fieldSettings.format){case"location_string":this.value.current=e(t.value);break;case"location_address":const[i,n,s,r]=this.nodes;if(!s?.value||!r?.value)return!1;this.value.current={lat:Number(s.value),lng:Number(r?.value)};break;case"location_array":try{this.value.current=JSON.parse(t.value)}catch(i){this.value.current=e(t.value)}}},this.makeReactive=function(){n.prototype.makeReactive.call(this),this.reporting.makeInvalid=()=>{},this.reporting.makeValid=()=>{},new IntersectionObserver(((t,e)=>{t.forEach((t=>{t.isIntersecting&&(this.callable.render(),this.silenceNotify(),e.unobserve(t.target))}))})).observe(this.nodes[0].parentElement)},this.hasAutoScroll=function(){return!1}}s.prototype=Object.create(n.prototype),s.prototype.fieldSettings={height:"300",format:"location_string",field_prefix:!1,zoom:14};const r=s,{BaseSignal:a}=JetFormBuilderAbstract,{toHTML:o}=JetFormBuilderFunctions;function l(){a.call(this),this.lock.current=!0,this.map=null,this.marker=null,this.mapFrame=null,this.position=null,this.preview=null,this.markerDefaults={...l.prototype.markerDefaults},this.isSupported=function(e,i){return t(e)},this.runSignal=function(){let t;const{current:e}=this.input.value;if(!e||!Object.keys(e).length)return void this.removeMarker();const[i,n,s,r]=this.input.nodes;this.setPreview(JetMapFieldsSettings.i18n.loading);const a=()=>{this.input.reporting.valuePrev=null,this.input.report(),this.input.loading.end()};switch(this.input.loading.start(),this.input.fieldSettings.format){case"location_string":t=e.lat+","+e.lng,this.updateHashFieldPromise(t).then((()=>{i.value=t,this.setPreview(e)})).finally(a);break;case"location_array":t=JSON.stringify(e),this.updateHashFieldPromise(t).then((()=>{i.value=t,this.setPreview(e)})).finally(a);break;case"location_address":wp.apiFetch({method:"get",path:JetMapFieldsSettings.api+"?lat="+e.lat+"&lng="+e.lng,headers:{nonce:JetMapFieldsSettings.nonce}}).then((t=>{t.success?t.data?this.updateHashFieldPromise(t.data).then((()=>{i.value=t.data,this.setPreview(t.data)})).finally(a):(i.value=null,this.setPreview(JetMapFieldsSettings.i18n.notFound),a()):(i.value=null,this.setPreview(t.html),a())})).catch((function(t){console.log(t)}))}s&&(s.value=e.lat),r&&(r.value=e.lng)}}l.prototype=Object.create(a.prototype),l.prototype.map=null,l.prototype.marker=null,l.prototype.preview=null,l.prototype.position=null,l.prototype.mapFrame=null,l.prototype.mapDefaults={center:{lat:41,lng:71},zoom:1},l.prototype.markerDefaults={content:'<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" fill="#C92C2C"/></svg>',shadow:!1},l.prototype.removeMarker=function(){const[t,e,n,s]=this.input.nodes;this.marker&&i().removeMarker(this.marker),this.setPreview(null),t.value=null,n&&(n.value=null),s&&(s.value=null),e&&(e.value=null)},l.prototype.setPreview=function(t){let e;e=t&&t.lat&&t.lng?'<span title="Lat">'+t.lat+'</span>, <span title="Lng">'+t.lng+"</span>":t,this.position.innerHTML=e,this.preview.style.display=t?"flex":"none"},l.prototype.updateHashFieldPromise=function(t){const[e,i]=this.input.nodes;return i?wp.apiFetch({method:"get",path:JetMapFieldsSettings.apiHash+"?loc="+t,headers:{nonce:JetMapFieldsSettings.nonce}}).then((t=>{t.success&&(i.value=t.data)})).catch((function(t){console.log(t)})):new Promise((function(t){t()}))},l.prototype.render=function(){let t='<div class="jet-engine-map-field__preview" style="display: none; justify-content: space-between; padding: 0 0 5px; align-items: center;"><address class="jet-engine-map-field__position"></address><div class="jet-engine-map-field__reset" role="button" style="cursor: pointer; color: #c92c2c; font-weight: 500; flex-shrink: 0;">× '+JetMapFieldsSettings.i18n.resetBtn+'</div></div><div class="jet-engine-map-field__frame" style="height: '+this.input.fieldSettings.height+'px; width: 100%;"></div>';this.input.root.parent&&(t+='<div class="jet-engine-map-field__description"><p style="margin-bottom: 0;"><strong>'+JetMapFieldsSettings.i18n.descTitle+":</strong> <i>"+this.input.fieldSettings.field_prefix+"_lat, "+this.input.fieldSettings.field_prefix+"_lng</i></p></div>");const e=this.input.nodes[0].parentElement;e.append(o(t)),this.preview=e.querySelector(".jet-engine-map-field__preview"),this.position=e.querySelector(".jet-engine-map-field__position"),this.mapFrame=e.querySelector(".jet-engine-map-field__frame");const n=i();null!==this.input.value.current&&(this.mapDefaults={...this.mapDefaults,center:this.input.value.current,zoom:this.input.fieldSettings.zoom}),this.map=n.initMap(this.mapFrame,this.mapDefaults),null!==this.input.value.current&&(this.marker=n.addMarker({...this.markerDefaults,position:this.input.value.current,map:this.map})),n.markerOnClick(this.map,this.markerDefaults,(t=>{this.marker&&n.removeMarker(this.marker),this.marker=t,this.input.value.current=n.getMarkerPosition(t,!0)})),e.querySelector(".jet-engine-map-field__reset").addEventListener("click",(()=>{this.input.value.current=null})),this.lock.current=!1};const p=l,{NotEmptyRestriction:u=function(){}}=JetFormBuilderAbstract,{isEmpty:c}=JetFormBuilderFunctions;function h(){u.call(this)}h.prototype=Object.create(u.prototype),h.prototype.isSupported=function(t,e){return u.prototype?.isSupported?.call?.(this,t,e)&&"map"===e.input.inputType},h.prototype.validate=function(){const[t]=this.reporting.input.nodes;return u.prototype.validate.call(this)&&!c(t.value)};const d=h,{RequiredRestriction:m}=JetFormBuilderAbstract,{isEmpty:f}=JetFormBuilderFunctions;function g(){m.call(this)}g.prototype=Object.create(m.prototype),g.prototype.isSupported=function(t,e){return m.prototype.isSupported.call(this,t,e)&&"map"===e.input.inputType},g.prototype.validate=function(){const[t]=this.reporting.input.nodes;return m.prototype.validate.call(this)&&!f(t.value)};const v=g,{addFilter:y}=JetPlugins.hooks;y("jet.fb.inputs","jet-form-builder/map-field",(function(t){return[r,...t]})),y("jet.fb.signals","jet-form-builder/map-field",(function(t){return[p,...t]})),y("jet.fb.restrictions","jet-form-builder/map-field",(function(t){return t.push(d),t})),y("jet.fb.restrictions.default","jet-form-builder/map-field",(function(t){return t.push(v),t}))})();
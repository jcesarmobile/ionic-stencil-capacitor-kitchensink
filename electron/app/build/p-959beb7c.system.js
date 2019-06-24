var __awaiter=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))(function(i,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function u(e){try{s(r["throw"](e))}catch(e){o(e)}}function s(e){e.done?i(e.value):new t(function(n){n(e.value)}).then(a,u)}s((r=r.apply(e,n||[])).next())})};var __generator=this&&this.__generator||function(e,n){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(e){return function(n){return s([e,n])}}function s(a){if(r)throw new TypeError("Generator is already executing.");while(t)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:t.label++;return{value:a[1],done:false};case 5:t.label++;i=a[1];a=[0];continue;case 7:a=t.ops.pop();t.trys.pop();continue;default:if(!(o=t.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){t.label=a[1];break}if(a[0]===6&&t.label<o[1]){t.label=o[1];o=a;break}if(o&&t.label<o[2]){t.label=o[2];t.ops.push(a);break}if(o[2])t.ops.pop();t.trys.pop();continue}a=n.call(e,t)}catch(e){a=[6,e];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register([],function(e,n){"use strict";return{execute:function(){e({a:f,c:s,d:m,e:y,g:d,i:w,p:v});var t=0;var r=function(e){return{create:function(n){return s(e,n)},dismiss:function(n,t,r){return f(document,n,t,e,r)},getTop:function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(n){return[2,d(document,e)]})})}}};var i=e("j",r("ion-alert"));var o=e("h",r("ion-action-sheet"));var a=e("b",r("ion-picker"));var u=e("f",r("ion-popover"));function s(e,n){return customElements.whenDefined(e).then(function(){var r=document;var i=r.createElement(e);c(r);Object.assign(i,n);i.classList.add("overlay-hidden");var o=t++;i.overlayIndex=o;if(!i.hasAttribute("id")){i.id="ion-overlay-"+o}p(r).appendChild(i);return i.componentOnReady()})}function c(e){if(t===0){t=1;e.addEventListener("focusin",function(n){var t=d(e);if(t&&t.backdropDismiss&&!_(t,n.target)){var r=t.querySelector("input,button");if(r){r.focus()}}});e.addEventListener("ionBackButton",function(n){var t=d(e);if(t&&t.backdropDismiss){n.detail.register(100,function(){return t.dismiss(undefined,g)})}});e.addEventListener("keyup",function(n){if(n.key==="Escape"){var t=d(e);if(t&&t.backdropDismiss){t.dismiss(undefined,g)}}})}}function f(e,n,t,r,i){var o=d(e,r,i);if(!o){return Promise.reject("overlay does not exist")}return o.dismiss(n,t)}function l(e,n){var t=Array.from(p(e).children).filter(function(e){return e.overlayIndex>0});if(n===undefined){return t}n=n.toUpperCase();return t.filter(function(e){return e.tagName===n})}function d(e,n,t){var r=l(e,n);return t===undefined?r[r.length-1]:r.find(function(e){return e.id===t})}function v(e,n,t,r,i){return __awaiter(this,void 0,void 0,function(){var o,a;return __generator(this,function(u){switch(u.label){case 0:if(e.presented){return[2]}e.presented=true;e.willPresent.emit();o=e.enterAnimation?e.enterAnimation:e.config.get(n,e.mode==="ios"?t:r);return[4,h(e,o,e.el,i)];case 1:a=u.sent();if(a){e.didPresent.emit()}return[2]}})})}function m(e,n,t,r,i,o,a){return __awaiter(this,void 0,void 0,function(){var u,s;return __generator(this,function(c){switch(c.label){case 0:if(!e.presented){return[2,false]}e.presented=false;c.label=1;case 1:c.trys.push([1,3,,4]);e.willDismiss.emit({data:n,role:t});u=e.leaveAnimation?e.leaveAnimation:e.config.get(r,e.mode==="ios"?i:o);return[4,h(e,u,e.el,a)];case 2:c.sent();e.didDismiss.emit({data:n,role:t});return[3,4];case 3:s=c.sent();console.error(s);return[3,4];case 4:e.el.remove();return[2,true]}})})}function p(e){return e.querySelector("ion-app")||e.body}function h(e,t,r,i){return __awaiter(this,void 0,void 0,function(){var o,a,u;return __generator(this,function(s){switch(s.label){case 0:if(e.animation){e.animation.destroy();e.animation=undefined;return[2,false]}r.classList.remove("overlay-hidden");o=r.shadowRoot||e.el;return[4,n.import("./p-08437444.system.js").then(function(e){return e.create(t,o,i)})];case 1:a=s.sent();e.animation=a;if(!e.animated||!e.config.getBoolean("animated",true)){a.duration(0)}if(e.keyboardClose){a.beforeAddWrite(function(){var e=r.ownerDocument.activeElement;if(e&&e.matches("input, ion-input, ion-textarea")){e.blur()}})}return[4,a.playAsync()];case 2:s.sent();u=a.hasCompleted;a.destroy();e.animation=undefined;return[2,u]}})})}function y(e,n){var t;var r=new Promise(function(e){return t=e});b(e,n,function(e){t(e.detail)});return r}function b(e,n,t){var r=function(i){e.removeEventListener(n,r);t(i)};e.addEventListener(n,r)}function w(e){return e==="cancel"||e===g}function _(e,n){while(n){if(n===e){return true}n=n.parentElement}return false}var g=e("B","backdrop")}}});
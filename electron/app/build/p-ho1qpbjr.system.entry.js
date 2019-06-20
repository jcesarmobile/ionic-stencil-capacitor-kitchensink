var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function u(e){try{s(r.next(e))}catch(e){o(e)}}function a(e){try{s(r["throw"](e))}catch(e){o(e)}}function s(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(u,a)}s((r=r.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(e){return function(t){return s([e,t])}}function s(u){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=u[0]&2?i["return"]:u[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;if(i=0,o)u=[u[0]&2,o.value];switch(u[0]){case 0:case 1:o=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;i=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1];o=u;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(u);break}if(o[2])n.ops.pop();n.trys.pop();continue}u=t.call(e,n)}catch(e){u=[6,e];i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-9da861f6.system.js"],function(e){"use strict";var t,n,r,i,o;return{setters:[function(e){t=e.r;n=e.c;r=e.d;i=e.h;o=e.H}],execute:function(){var u=function(){function e(e){t(this,e);this.visible=false;this.autoHide=true;this.doc=n(this,"document")}e.prototype.componentDidLoad=function(){return this.updateVisibility()};e.prototype.onClick=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return[4,a(document)];case 1:e=n.sent();if(!e)return[3,3];return[4,e.get(this.menu)];case 2:t=n.sent();if(t){e.toggle(this.menu)}n.label=3;case 3:return[2]}})})};e.prototype.updateVisibility=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n;return __generator(this,function(r){switch(r.label){case 0:return[4,a(document)];case 1:e=r.sent();if(!e)return[3,5];return[4,e.get(this.menu)];case 2:t=r.sent();n=t;if(!n)return[3,4];return[4,t.isActive()];case 3:n=r.sent();r.label=4;case 4:if(n){this.visible=true;return[2]}r.label=5;case 5:this.visible=false;return[2]}})})};e.prototype.hostData=function(){var e;var t=r(this);var n=this.autoHide&&!this.visible;return{"aria-hidden":n?"true":null,class:(e={},e[""+t]=true,e["menu-toggle-hidden"]=n,e)}};e.prototype.__stencil_render=function(){return i("slot",null)};e.prototype.render=function(){return i(o,this.hostData(),this.__stencil_render())};Object.defineProperty(e,"style",{get:function(){return":host(.menu-toggle-hidden){display:none}"},enumerable:true,configurable:true});return e}();e("ion_menu_toggle",u);function a(e){var t=e.querySelector("ion-menu-controller");if(!t){return Promise.resolve(undefined)}return t.componentOnReady()}}}});
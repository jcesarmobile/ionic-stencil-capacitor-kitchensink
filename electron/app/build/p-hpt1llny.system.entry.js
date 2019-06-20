var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r["throw"](e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,a)}c((r=r.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(e){return function(t){return c([e,t])}}function c(u){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=u[0]&2?o["return"]:u[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;if(o=0,i)u=[u[0]&2,i.value];switch(u[0]){case 0:case 1:i=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;o=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1];i=u;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(u);break}if(i[2])n.ops.pop();n.trys.pop();continue}u=t.call(e,n)}catch(e){u=[6,e];o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-9da861f6.system.js"],function(e){"use strict";var t,n,r,o,i,u;return{setters:[function(e){t=e.r;n=e.c;r=e.d;o=e.e;i=e.h;u=e.H}],execute:function(){var a=function(){function e(e){t(this,e);this.type="bounded";this.queue=n(this,"queue");this.win=n(this,"window")}e.prototype.addRipple=function(e,t){return __awaiter(this,void 0,void 0,function(){var n=this;return __generator(this,function(r){return[2,new Promise(function(r){n.queue.read(function(){var o=n.el.getBoundingClientRect();var i=o.width;var u=o.height;var a=Math.sqrt(i*i+u*u);var f=Math.max(u,i);var p=n.unbounded?f:a+s;var h=Math.floor(f*l);var d=p/h;var v=e-o.left;var b=t-o.top;if(n.unbounded){v=i*.5;b=u*.5}var y=v-h*.5;var w=b-h*.5;var g=i*.5-v;var _=u*.5-b;n.queue.write(function(){var e=n.win.document.createElement("div");e.classList.add("ripple-effect");var t=e.style;t.top=w+"px";t.left=y+"px";t.width=t.height=h+"px";t.setProperty("--final-scale",""+d);t.setProperty("--translate-end",g+"px, "+_+"px");var o=n.el.shadowRoot||n.el;o.appendChild(e);setTimeout(function(){r(function(){c(e)})},225+100)})})})]})})};Object.defineProperty(e.prototype,"unbounded",{get:function(){return this.type==="unbounded"},enumerable:true,configurable:true});e.prototype.hostData=function(){var e;var t=r(this);return{role:"presentation",class:(e={},e[""+t]=true,e["unbounded"]=this.unbounded,e)}};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});e.prototype.render=function(){return i(u,this.hostData())};Object.defineProperty(e,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}\@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}\@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"},enumerable:true,configurable:true});return e}();e("ion_ripple_effect",a);function c(e){e.classList.add("fade-out");setTimeout(function(){e.remove()},200)}var s=10;var l=.5}}});
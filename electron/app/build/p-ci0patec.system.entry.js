var __awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r["throw"](t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,a)}u((r=r.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return u([t,e])}}function u(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=s[0]&2?i["return"]:s[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;if(i=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;i=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(t){s=[6,t];i=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-9da861f6.system.js","./p-9b657104.system.js","./p-ea56b243.system.js","./p-a0431ad9.system.js"],function(t,e){"use strict";var n,r,i,o,s,a,u,f,h,c,l,p,v,d,g,m,w,y;return{setters:[function(t){n=t.r;r=t.h;i=t.c;o=t.d;s=t.e;a=t.H;u=t.i;f=t.f},function(t){h=t.r;c=t.a;l=t.d},function(t){p=t.l;v=t.t;d=t.s;g=t.L;m=t.a;w=t.b},function(t){y=t.a}],execute:function(){var b=function(){function t(t){n(this,t)}t.prototype.render=function(){return r("ion-app",null,r("ion-router",{useHash:false},r("ion-route",{url:"/",component:"app-home"}),r("ion-route",{url:"/profile/:name",component:"app-profile"})),r("ion-nav",null))};Object.defineProperty(t,"style",{get:function(){return""},enumerable:true,configurable:true});return t}();t("app_root",b);var _=function(){function t(t){n(this,t);this.win=i(this,"window");this.config=i(this,"config")}t.prototype.componentDidLoad=function(){var t=this;h(function(){var e=t,n=e.win,r=e.config;if(!r.getBoolean("_testing")){P(n,r)}T(n,r);C(n,r);S(n,r);R(n)})};t.prototype.hostData=function(){var t;var e=o(this);return{class:(t={},t[""+e]=true,t["ion-page"]=true,t["force-statusbar-padding"]=this.config.getBoolean("_forceStatusbarPadding"),t)}};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});t.prototype.render=function(){return r(a,this.hostData())};Object.defineProperty(t,"style",{get:function(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"},enumerable:true,configurable:true});return t}();t("ion_app",_);function S(t,n){var r=n.getBoolean("hardwareBackButton",u(t,"hybrid"));if(r){e.import("./p-ccb48b82.system.js").then(function(e){return e.startHardwareBackButton(t)})}}function C(t,n){var r=n.getBoolean("statusTap",u(t,"hybrid"));if(r){e.import("./p-78307fe2.system.js").then(function(e){return e.startStatusTap(t)})}}function R(t){e.import("./p-39147dcd.system.js").then(function(e){return e.startFocusVisible(t.document)})}function P(t,n){e.import("./p-0a9e324f.system.js").then(function(e){return e.startTapClick(t.document,n)})}function T(t,n){var r=n.getBoolean("inputShims",E(t));if(r){e.import("./p-71cbfcbc.system.js").then(function(e){return e.startInputShims(t.document,n)})}}function E(t){return u(t,"ios")&&u(t,"mobile")}var k=1;var V=2;var j=3;var L=function(){function t(t,e){this.component=t;this.params=e;this.state=k}t.prototype.init=function(t){return __awaiter(this,void 0,void 0,function(){var e,n;return __generator(this,function(r){switch(r.label){case 0:this.state=V;if(!!this.element)return[3,2];e=this.component;n=this;return[4,y(this.delegate,t,e,["ion-page","ion-page-invisible"],this.params)];case 1:n.element=r.sent();r.label=2;case 2:return[2]}})})};t.prototype._destroy=function(){c(this.state!==j,"view state must be ATTACHED");var t=this.element;if(t){if(this.delegate){this.delegate.removeViewFromDom(t.parentElement,t)}else{t.remove()}}this.nav=undefined;this.state=j};return t}();function O(t,e,n){if(!t){return false}if(t.component!==e){return false}var r=t.params;if(r===n){return true}if(!r&&!n){return true}if(!r||!n){return false}var i=Object.keys(r);var o=Object.keys(n);if(i.length!==o.length){return false}for(var s=0,a=i;s<a.length;s++){var u=a[s];if(r[u]!==n[u]){return false}}return true}function D(t,e){if(!t){return null}if(t instanceof L){return t}return new L(t,e)}function A(t){return t.map(function(t){if(t instanceof L){return t}if("page"in t){return D(t.page,t.params)}return D(t,undefined)}).filter(function(t){return t!==null})}var q=function(){function t(t){n(this,t);this.transInstr=[];this.useRouter=false;this.isTransitioning=false;this.destroyed=false;this.views=[];this.animated=true;this.ionNavWillLoad=f(this,"ionNavWillLoad",7);this.ionNavWillChange=f(this,"ionNavWillChange",3);this.ionNavDidChange=f(this,"ionNavDidChange",3);this.queue=i(this,"queue");this.config=i(this,"config");this.win=i(this,"window")}t.prototype.swipeGestureChanged=function(){if(this.gesture){this.gesture.setDisabled(this.swipeGesture!==true)}};t.prototype.rootChanged=function(){if(this.root!==undefined){if(!this.useRouter){this.setRoot(this.root,this.rootParams)}}};t.prototype.componentWillLoad=function(){this.useRouter=!!this.win.document.querySelector("ion-router")&&!this.el.closest("[no-router]");if(this.swipeGesture===undefined){var t=o(this);this.swipeGesture=this.config.getBoolean("swipeBackEnabled",t==="ios")}this.ionNavWillLoad.emit()};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:this.rootChanged();t=this;return[4,e.import("./p-60491d90.system.js")];case 1:t.gesture=n.sent().createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this));this.swipeGestureChanged();return[2]}})})};t.prototype.componentDidUnload=function(){for(var t=0,e=this.views;t<e.length;t++){var n=e[t];p(n.element,g);n._destroy()}if(this.gesture){this.gesture.destroy();this.gesture=undefined}this.transInstr.length=this.views.length=0;this.destroyed=true};t.prototype.push=function(t,e,n,r){return this.queueTrns({insertStart:-1,insertViews:[{page:t,params:e}],opts:n},r)};t.prototype.insert=function(t,e,n,r,i){return this.queueTrns({insertStart:t,insertViews:[{page:e,params:n}],opts:r},i)};t.prototype.insertPages=function(t,e,n,r){return this.queueTrns({insertStart:t,insertViews:e,opts:n},r)};t.prototype.pop=function(t,e){return this.queueTrns({removeStart:-1,removeCount:1,opts:t},e)};t.prototype.popTo=function(t,e,n){var r={removeStart:-1,removeCount:-1,opts:e};if(typeof t==="object"&&t.component){r.removeView=t;r.removeStart=1}else if(typeof t==="number"){r.removeStart=t+1}return this.queueTrns(r,n)};t.prototype.popToRoot=function(t,e){return this.queueTrns({removeStart:1,removeCount:-1,opts:t},e)};t.prototype.removeIndex=function(t,e,n,r){if(e===void 0){e=1}return this.queueTrns({removeStart:t,removeCount:e,opts:n},r)};t.prototype.setRoot=function(t,e,n,r){return this.setPages([{page:t,params:e}],n,r)};t.prototype.setPages=function(t,e,n){if(e==null){e={}}if(e.animated!==true){e.animated=false}return this.queueTrns({insertStart:0,insertViews:t,removeStart:0,removeCount:-1,opts:e},n)};t.prototype.setRouteId=function(t,e,n){var r=this;var i=this.getActiveSync();if(O(i,t,e)){return Promise.resolve({changed:false,element:i.element})}var o;var s=new Promise(function(t){return o=t});var a;var u={updateURL:false,viewIsReady:function(t){var e;var n=new Promise(function(t){return e=t});o({changed:true,element:t,markVisible:function(){return __awaiter(r,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:e();return[4,a];case 1:t.sent();return[2]}})})}});return n}};if(n==="root"){a=this.setRoot(t,e,u)}else{var f=this.views.find(function(n){return O(n,t,e)});if(f){a=this.popTo(f,Object.assign({},u,{direction:"back"}))}else if(n==="forward"){a=this.push(t,e,u)}else if(n==="back"){a=this.setRoot(t,e,Object.assign({},u,{direction:"back",animated:true}))}}return s};t.prototype.getRouteId=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){t=this.getActiveSync();return[2,t?{id:t.element.tagName,params:t.params,element:t.element}:undefined]})})};t.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())};t.prototype.getByIndex=function(t){return Promise.resolve(this.views[t])};t.prototype.canGoBack=function(t){return Promise.resolve(this.canGoBackSync(t))};t.prototype.getPrevious=function(t){return Promise.resolve(this.getPreviousSync(t))};t.prototype.getLength=function(){return this.views.length};t.prototype.getActiveSync=function(){return this.views[this.views.length-1]};t.prototype.canGoBackSync=function(t){if(t===void 0){t=this.getActiveSync()}return!!(t&&this.getPreviousSync(t))};t.prototype.getPreviousSync=function(t){if(t===void 0){t=this.getActiveSync()}if(!t){return undefined}var e=this.views;var n=e.indexOf(t);return n>0?e[n-1]:undefined};t.prototype.queueTrns=function(t,e){if(this.isTransitioning&&t.opts!=null&&t.opts.skipIfBusy){return Promise.resolve(false)}var n=new Promise(function(e,n){t.resolve=e;t.reject=n});t.done=e;if(t.insertViews&&t.insertViews.length===0){t.insertViews=undefined}this.transInstr.push(t);this.nextTrns();return n};t.prototype.success=function(t,e){if(this.destroyed){this.fireError("nav controller was destroyed",e);return}if(e.done){e.done(t.hasCompleted,t.requiresTransition,t.enteringView,t.leavingView,t.direction)}e.resolve(t.hasCompleted);if(e.opts.updateURL!==false&&this.useRouter){var n=this.win.document.querySelector("ion-router");if(n){var r=t.direction==="back"?"back":"forward";n.navChanged(r)}}};t.prototype.failed=function(t,e){if(this.destroyed){this.fireError("nav controller was destroyed",e);return}this.transInstr.length=0;this.fireError(t,e)};t.prototype.fireError=function(t,e){if(e.done){e.done(false,false,t)}if(e.reject&&!this.destroyed){e.reject(t)}else{e.resolve(false)}};t.prototype.nextTrns=function(){if(this.isTransitioning){return false}var t=this.transInstr.shift();if(!t){return false}this.runTransition(t);return true};t.prototype.runTransition=function(t){return __awaiter(this,void 0,void 0,function(){var e,n,r,i,o,s;return __generator(this,function(a){switch(a.label){case 0:a.trys.push([0,6,,7]);this.ionNavWillChange.emit();this.isTransitioning=true;this.prepareTI(t);e=this.getActiveSync();n=this.getEnteringView(t,e);if(!e&&!n){throw new Error("no views in the stack to be removed")}if(!(n&&n.state===k))return[3,2];return[4,n.init(this.el)];case 1:a.sent();a.label=2;case 2:this.postViewInit(n,e,t);r=(t.enteringRequiresTransition||t.leavingRequiresTransition)&&n!==e;if(!r)return[3,4];return[4,this.transition(n,e,t)];case 3:o=a.sent();return[3,5];case 4:o={hasCompleted:true,requiresTransition:false};a.label=5;case 5:i=o;this.success(i,t);this.ionNavDidChange.emit();return[3,7];case 6:s=a.sent();this.failed(s,t);return[3,7];case 7:this.isTransitioning=false;this.nextTrns();return[2]}})})};t.prototype.prepareTI=function(t){var e=this.views.length;t.opts=t.opts||{};if(t.opts.delegate===undefined){t.opts.delegate=this.delegate}if(t.removeView!==undefined){c(t.removeStart!==undefined,"removeView needs removeStart");c(t.removeCount!==undefined,"removeView needs removeCount");var n=this.views.indexOf(t.removeView);if(n<0){throw new Error("removeView was not found")}t.removeStart+=n}if(t.removeStart!==undefined){if(t.removeStart<0){t.removeStart=e-1}if(t.removeCount<0){t.removeCount=e-t.removeStart}t.leavingRequiresTransition=t.removeCount>0&&t.removeStart+t.removeCount===e}if(t.insertViews){if(t.insertStart<0||t.insertStart>e){t.insertStart=e}t.enteringRequiresTransition=t.insertStart===e}var r=t.insertViews;if(!r){return}c(r.length>0,"length can not be zero");var i=A(r);if(i.length===0){throw new Error("invalid views to insert")}for(var o=0,s=i;o<s.length;o++){var a=s[o];a.delegate=t.opts.delegate;var u=a.nav;if(u&&u!==this){throw new Error("inserted view was already inserted")}if(a.state===j){throw new Error("inserted view was already destroyed")}}t.insertViews=i};t.prototype.getEnteringView=function(t,e){var n=t.insertViews;if(n!==undefined){return n[n.length-1]}var r=t.removeStart;if(r!==undefined){var i=this.views;var o=r+t.removeCount;for(var s=i.length-1;s>=0;s--){var a=i[s];if((s<r||s>=o)&&a!==e){return a}}}return undefined};t.prototype.postViewInit=function(t,e,n){c(e||t,"Both leavingView and enteringView are null");c(n.resolve,"resolve must be valid");c(n.reject,"reject must be valid");var r=n.opts;var i=n.insertViews;var o=n.removeStart;var s=n.removeCount;var a;if(o!==undefined&&s!==undefined){c(o>=0,"removeStart can not be negative");c(s>=0,"removeCount can not be negative");a=[];for(var u=0;u<s;u++){var f=this.views[u+o];if(f&&f!==t&&f!==e){a.push(f)}}r.direction=r.direction||"back"}var h=this.views.length+(i!==undefined?i.length:0)-(s!==undefined?s:0);c(h>=0,"final balance can not be negative");if(h===0){console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el);throw new Error("navigation stack needs at least one root page")}if(i){var l=n.insertStart;for(var v=0,d=i;v<d.length;v++){var f=d[v];this.insertViewAt(f,l);l++}if(n.enteringRequiresTransition){r.direction=r.direction||"forward"}}if(a&&a.length>0){for(var y=0,b=a;y<b.length;y++){var f=b[y];p(f.element,m);p(f.element,w);p(f.element,g)}for(var _=0,S=a;_<S.length;_++){var f=S[_];this.destroyView(f)}}};t.prototype.transition=function(t,e,n){return __awaiter(this,void 0,void 0,function(){var r,i,s,a,u,f,h;var c=this;return __generator(this,function(l){switch(l.label){case 0:r=n.opts;i=r.progressAnimation?function(t){return c.sbAni=t}:undefined;s=o(this);a=t.element;u=e&&e.element;f=Object.assign({mode:s,showGoBack:this.canGoBackSync(t),window:this.win,baseEl:this.el,animationBuilder:this.animation||r.animationBuilder||this.config.get("navAnimation"),progressCallback:i,animated:this.animated&&this.config.getBoolean("animated",true),enteringEl:a,leavingEl:u},r);return[4,v(f)];case 1:h=l.sent().hasCompleted;return[2,this.transitionFinish(h,t,e,r)]}})})};t.prototype.transitionFinish=function(t,e,n,r){var i=t?e:n;if(i){this.cleanup(i)}return{hasCompleted:t,requiresTransition:true,enteringView:e,leavingView:n,direction:r.direction}};t.prototype.insertViewAt=function(t,e){var n=this.views;var r=n.indexOf(t);if(r>-1){c(t.nav===this,"view is not part of the nav");n.splice(e,0,n.splice(r,1)[0])}else{c(!t.nav,"nav is used");t.nav=this;n.splice(e,0,t)}};t.prototype.removeView=function(t){c(t.state===V||t.state===j,"view state should be loaded or destroyed");var e=this.views;var n=e.indexOf(t);c(n>-1,"view must be part of the stack");if(n>=0){e.splice(n,1)}};t.prototype.destroyView=function(t){t._destroy();this.removeView(t)};t.prototype.cleanup=function(t){if(this.destroyed){return}var e=this.views;var n=e.indexOf(t);for(var r=e.length-1;r>=0;r--){var i=e[r];var o=i.element;if(r>n){p(o,g);this.destroyView(i)}else if(r<n){d(o,true)}}};t.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&this.transInstr.length===0&&this.canGoBackSync()};t.prototype.onStart=function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:true}},undefined)};t.prototype.onMove=function(t){if(this.sbAni){this.sbAni.progressStep(t)}};t.prototype.onEnd=function(t,e,n){if(this.sbAni){this.sbAni.progressEnd(t,e,n)}};t.prototype.render=function(){return r("slot",null)};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"},enumerable:true,configurable:true});return t}();t("ion_nav",q);var B=function(){function t(t){n(this,t);this.url="";this.ionRouteDataChanged=f(this,"ionRouteDataChanged",7)}t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)};t.prototype.onComponentProps=function(t,e){if(t===e){return}var n=t?Object.keys(t):[];var r=e?Object.keys(e):[];if(n.length!==r.length){this.onUpdate(t);return}for(var i=0,o=n;i<o.length;i++){var s=o[i];if(t[s]!==e[s]){this.onUpdate(t);return}}};t.prototype.componentDidLoad=function(){this.ionRouteDataChanged.emit()};t.prototype.componentDidUnload=function(){this.ionRouteDataChanged.emit()};Object.defineProperty(t,"watchers",{get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:true,configurable:true});return t}();t("ion_route",B);var N="root";var I="forward";var x="back";function U(t){var e=t.filter(function(t){return t.length>0}).join("/");return"/"+e}function G(t){var e=[];for(var n=0,r=t;n<r.length;n++){var i=r[n];for(var o=0,s=i.path;o<s.length;o++){var a=s[o];if(a[0]===":"){var u=i.params&&i.params[a.slice(1)];if(!u){return null}e.push(u)}else if(a!==""){e.push(a)}}}return e}function W(t,e,n,r,i,o){var s=U(M(e).concat(r));if(n){s="#"+s}if(i===I){t.pushState(o,"",s)}else{t.replaceState(o,"",s)}}function H(t,e){if(t.length>e.length){return null}if(t.length<=1&&t[0]===""){return e}for(var n=0;n<t.length;n++){if(t[n].length>0&&t[n]!==e[n]){return null}}if(e.length===t.length){return[""]}return e.slice(t.length)}function F(t,e,n){var r=t.pathname;if(n){var i=t.hash;r=i[0]==="#"?i.slice(1):""}var o=M(e);var s=M(r);return H(o,s)}function M(t){if(t==null){return[""]}var e=t.split("/").map(function(t){return t.trim()}).filter(function(t){return t.length>0});if(e.length===0){return[""]}else{return e}}function Y(t){console.group("[ion-core] ROUTES["+t.length+"]");var e=function(t){var e=[];t.forEach(function(t){return e.push.apply(e,t.path)});var n=t.map(function(t){return t.id});console.debug("%c "+U(e),"font-weight: bold; padding-left: 20px","=>\t","("+n.join(", ")+")")};for(var n=0,r=t;n<r.length;n++){var i=r[n];e(i)}console.groupEnd()}function X(t){console.group("[ion-core] REDIRECTS["+t.length+"]");for(var e=0,n=t;e<n.length;e++){var r=n[e];if(r.to){console.debug("FROM: ","$c "+U(r.from),"font-weight: bold"," TO: ","$c "+U(r.to),"font-weight: bold")}}console.groupEnd()}function $(t,e,n,r,i){if(i===void 0){i=false}return __awaiter(this,void 0,void 0,function(){var o,s,a,u;return __generator(this,function(f){switch(f.label){case 0:f.trys.push([0,6,,7]);o=Q(t);if(r>=e.length||!o){return[2,i]}return[4,o.componentOnReady()];case 1:f.sent();s=e[r];return[4,o.setRouteId(s.id,s.params,n)];case 2:a=f.sent();if(a.changed){n=N;i=true}return[4,$(a.element,e,n,r+1,i)];case 3:i=f.sent();if(!a.markVisible)return[3,5];return[4,a.markVisible()];case 4:f.sent();f.label=5;case 5:return[2,i];case 6:u=f.sent();console.error(u);return[2,false];case 7:return[2]}})})}function z(t){return __awaiter(this,void 0,void 0,function(){var e,n,r,i;return __generator(this,function(o){switch(o.label){case 0:e=[];r=t;o.label=1;case 1:if(!true)return[3,5];n=Q(r);if(!n)return[3,3];return[4,n.getRouteId()];case 2:i=o.sent();if(i){r=i.element;i.element=undefined;e.push(i)}else{return[3,5]}return[3,4];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:e,outlet:n}]}})})}function J(t){if(Q(t.document.body)){return Promise.resolve()}return new Promise(function(e){t.addEventListener("ionNavWillLoad",e,{once:true})})}var K=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";function Q(t){if(!t){return undefined}if(t.matches(K)){return t}var e=t.querySelector(K);return e?e:undefined}function Z(t,e){var n=e.from,r=e.to;if(r===undefined){return false}if(n.length>t.length){return false}for(var i=0;i<n.length;i++){var o=n[i];if(o==="*"){return true}if(o!==t[i]){return false}}return n.length===t.length}function tt(t,e){return e.find(function(e){return Z(t,e)})}function et(t,e){var n=Math.min(t.length,e.length);var r=0;for(;r<n;r++){if(t[r].toLowerCase()!==e[r].id){break}}return r}function nt(t,e){var n=new at(t);var r=false;var i;for(var o=0;o<e.length;o++){var s=e[o].path;if(s[0]===""){r=true}else{for(var a=0,u=s;a<u.length;a++){var f=u[a];var h=n.next();if(f[0]===":"){if(h===""){return null}i=i||[];var c=i[o]||(i[o]={});c[f.slice(1)]=h}else if(h!==f){return null}}r=false}}var l=r?r===(n.next()===""):true;if(!l){return null}if(i){return e.map(function(t,e){return{id:t.id,path:t.path,params:rt(t.params,i[e])}})}return e}function rt(t,e){if(!t&&e){return e}else if(t&&!e){return t}else if(t&&e){return Object.assign({},t,e)}return undefined}function it(t,e){var n=null;var r=0;var i=t.map(function(t){return t.id});for(var o=0,s=e;o<s.length;o++){var a=s[o];var u=et(i,a);if(u>r){n=a;r=u}}if(n){return n.map(function(e,n){return{id:e.id,path:e.path,params:rt(e.params,t[n]&&t[n].params)}})}return null}function ot(t,e){var n=null;var r=0;for(var i=0,o=e;i<o.length;i++){var s=o[i];var a=nt(t,s);if(a!==null){var u=st(a);if(u>r){r=u;n=a}}}return n}function st(t){var e=1;var n=1;for(var r=0,i=t;r<i.length;r++){var o=i[r];for(var s=0,a=o.path;s<a.length;s++){var u=a[s];if(u[0]===":"){e+=Math.pow(1,n)}else if(u!==""){e+=Math.pow(2,n)}n++}}return e}var at=function(){function t(t){this.path=t.slice()}t.prototype.next=function(){if(this.path.length>0){return this.path.shift()}return""};return t}();function ut(t){return Array.from(t.children).filter(function(t){return t.tagName==="ION-ROUTE-REDIRECT"}).map(function(t){var e=ct(t,"to");return{from:M(ct(t,"from")),to:e==null?undefined:M(e)}})}function ft(t){return lt(ht(t))}function ht(t,e){if(e===void 0){e=t}return Array.from(e.children).filter(function(t){return t.tagName==="ION-ROUTE"&&t.component}).map(function(e){var n=ct(e,"component");if(n==null){throw new Error("component missing in ion-route")}return{path:M(ct(e,"url")),id:n.toLowerCase(),params:e.componentProps,children:ht(t,e)}})}function ct(t,e){if(e in t){return t[e]}if(t.hasAttribute(e)){return t.getAttribute(e)}return null}function lt(t){var e=[];for(var n=0,r=t;n<r.length;n++){var i=r[n];pt([],e,i)}return e}function pt(t,e,n){var r=t.slice();r.push({id:n.id,path:n.path,params:n.params});if(n.children.length===0){e.push(r);return}for(var i=0,o=n.children;i<o.length;i++){var s=o[i];pt(r,e,s)}}var vt=function(){function t(t){n(this,t);this.previousPath=null;this.busy=false;this.state=0;this.lastState=0;this.root="/";this.useHash=true;this.ionRouteWillChange=f(this,"ionRouteWillChange",7);this.ionRouteDidChange=f(this,"ionRouteDidChange",7);this.config=i(this,"config");this.queue=i(this,"queue");this.win=i(this,"window")}t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:console.debug("[ion-router] router will load");return[4,J(this.win)];case 1:t.sent();console.debug("[ion-router] found nav");return[4,this.onRoutesChanged()];case 2:t.sent();return[2]}})})};t.prototype.componentDidLoad=function(){this.win.addEventListener("ionRouteRedirectChanged",l(this.onRedirectChanged.bind(this),10));this.win.addEventListener("ionRouteDataChanged",l(this.onRoutesChanged.bind(this),100))};t.prototype.onPopState=function(){var t=this.historyDirection();var e=this.getPath();console.debug("[ion-router] URL changed -> update nav",e,t);return this.writeNavStateRoot(e,t)};t.prototype.onBackButton=function(t){var e=this;t.detail.register(0,function(){return e.back()})};t.prototype.push=function(t,e){if(e===void 0){e="forward"}if(t.startsWith(".")){t=new URL(t,this.win.location.href).pathname}console.debug("[ion-router] URL pushed -> updating nav",t,e);var n=M(t);this.setPath(n,e);return this.writeNavStateRoot(n,e)};t.prototype.back=function(){this.win.history.back();return Promise.resolve(this.waitPromise)};t.prototype.printDebug=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){console.debug("CURRENT PATH",this.getPath());console.debug("PREVIOUS PATH",this.previousPath);Y(ft(this.el));X(ut(this.el));return[2]})})};t.prototype.navChanged=function(t){return __awaiter(this,void 0,void 0,function(){var e,n,r,i,o,s;return __generator(this,function(a){switch(a.label){case 0:if(this.busy){console.warn("[ion-router] router is busy, navChanged was cancelled");return[2,false]}return[4,z(this.win.document.body)];case 1:e=a.sent(),n=e.ids,r=e.outlet;i=ft(this.el);o=it(n,i);if(!o){console.warn("[ion-router] no matching URL for ",n.map(function(t){return t.id}));return[2,false]}s=G(o);if(!s){console.warn("[ion-router] router could not match path because some required param is missing");return[2,false]}console.debug("[ion-router] nav changed -> update URL",n,s);this.setPath(s,t);return[4,this.safeWriteNavState(r,o,N,s,null,n.length)];case 2:a.sent();return[2,true]}})})};t.prototype.onRedirectChanged=function(){var t=this.getPath();if(t&&tt(t,ut(this.el))){this.writeNavStateRoot(t,N)}};t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),N)};t.prototype.historyDirection=function(){var t=this.win;if(t.history.state===null){this.state++;t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href)}var e=t.history.state;var n=this.lastState;this.lastState=e;if(e>n){return I}else if(e<n){return x}else{return N}};t.prototype.writeNavStateRoot=function(t,e){return __awaiter(this,void 0,void 0,function(){var n,r,i,o,s;return __generator(this,function(a){if(!t){console.error("[ion-router] URL is not part of the routing set");return[2,false]}n=ut(this.el);r=tt(t,n);i=null;if(r){this.setPath(r.to,e);i=r.from;t=r.to}o=ft(this.el);s=ot(t,o);if(!s){console.error("[ion-router] the path does not match any route");return[2,false]}return[2,this.safeWriteNavState(this.win.document.body,s,e,t,i)]})})};t.prototype.safeWriteNavState=function(t,e,n,r,i,o){if(o===void 0){o=0}return __awaiter(this,void 0,void 0,function(){var s,a,u;return __generator(this,function(f){switch(f.label){case 0:return[4,this.lock()];case 1:s=f.sent();a=false;f.label=2;case 2:f.trys.push([2,4,,5]);return[4,this.writeNavState(t,e,n,r,i,o)];case 3:a=f.sent();return[3,5];case 4:u=f.sent();console.error(u);return[3,5];case 5:s();return[2,a]}})})};t.prototype.lock=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:t=this.waitPromise;this.waitPromise=new Promise(function(t){return e=t});if(!(t!==undefined))return[3,2];return[4,t];case 1:n.sent();n.label=2;case 2:return[2,e]}})})};t.prototype.writeNavState=function(t,e,n,r,i,o){if(o===void 0){o=0}return __awaiter(this,void 0,void 0,function(){var s,a;return __generator(this,function(u){switch(u.label){case 0:if(this.busy){console.warn("[ion-router] router is busy, transition was cancelled");return[2,false]}this.busy=true;s=this.routeChangeEvent(r,i);if(s){this.ionRouteWillChange.emit(s)}return[4,$(t,e,n,o)];case 1:a=u.sent();this.busy=false;if(a){console.debug("[ion-router] route changed",r)}if(s){this.ionRouteDidChange.emit(s)}return[2,a]}})})};t.prototype.setPath=function(t,e){this.state++;W(this.win.history,this.root,this.useHash,t,e,this.state)};t.prototype.getPath=function(){return F(this.win.location,this.root,this.useHash)};t.prototype.routeChangeEvent=function(t,e){var n=this.previousPath;var r=U(t);this.previousPath=r;if(r===n){return null}var i=e?U(e):null;return{from:n,redirectedFrom:i,to:r}};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});return t}();t("ion_router",vt)}}});
import{w as n}from"./p-09b7a6d1.js";const i="ionViewWillEnter",e="ionViewDidEnter",a="ionViewWillLeave",t="ionViewDidLeave",o="ionViewWillUnload",s=()=>__sc_import_app("./p-e115fe4c.js"),l=()=>__sc_import_app("./p-7a03ebcf.js");function r(i){return new Promise((e,a)=>{n(()=>{!function(n){const i=n.enteringEl,e=n.leavingEl;(function(i,e){void 0!==i&&(i.style.zIndex="back"===n.direction?"99":"101"),void 0!==e&&(e.style.zIndex="100")})(i,e),n.showGoBack?i.classList.add("can-go-back"):i.classList.remove("can-go-back"),f(i,!1),e&&f(e,!1)}(i),async function(n){const i=await async function(n){if(n.leavingEl&&n.animated&&0!==n.duration)return n.animationBuilder?n.animationBuilder:"ios"===n.mode?(await s()).iosTransitionAnimation:(await l()).mdTransitionAnimation}(n);return i?async function(n,i){await d(i,!0);const e=await __sc_import_app("./p-d072b193.js").then(e=>e.create(n,i.baseEl,i));return m(i.enteringEl,i.leavingEl),await function(n,i){const e=i.progressCallback,a=new Promise(i=>n.onFinish(i));return e?(n.progressStart(),e(n)):n.play(),a}(e,i),i.progressCallback&&i.progressCallback(void 0),e.hasCompleted&&p(i.enteringEl,i.leavingEl),{hasCompleted:e.hasCompleted,animation:e}}(i,n):async function(n){const i=n.enteringEl,e=n.leavingEl;return await d(n,!1),m(i,e),p(i,e),{hasCompleted:!0}}(n)}(i).then(n=>{n.animation&&n.animation.destroy(),c(i),e(n)},n=>{c(i),a(n)})})})}function c(n){const i=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==i&&i.classList.remove("ion-page-invisible")}async function d(n,i){const e=(void 0!==n.deepWait?n.deepWait:i)?[v(n.enteringEl),v(n.leavingEl)]:[g(n.enteringEl),g(n.leavingEl)];await Promise.all(e),await async function(n,i){n&&await n(i)}(n.viewIsReady,n.enteringEl)}function m(n,e){u(e,a),u(n,i)}function p(n,i){u(n,e),u(i,t)}function u(n,i){if(n){const e=new CustomEvent(i,{bubbles:!1,cancelable:!1});n.dispatchEvent(e)}}function g(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()}async function v(n){const i=n;if(i){if(null!=i.componentOnReady&&null!=await i.componentOnReady())return;await Promise.all(Array.from(i.children).map(v))}}function f(n,i){i?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))}export{o as L,a,t as b,v as d,u as l,f as s,r as t};
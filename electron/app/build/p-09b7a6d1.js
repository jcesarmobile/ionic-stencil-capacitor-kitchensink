const t=window,e=document,n={t:0,o:"",raf:t=>requestAnimationFrame(t),ael:(t,e,n,o)=>t.addEventListener(e,n,o),rel:(t,e,n,o)=>t.removeEventListener(e,n,o)},o=!!e.documentElement.attachShadow,s=(()=>{let t=!1;try{e.addEventListener("e",null,Object.defineProperty({},"passive",{get(){t=!0}}))}catch(t){}return t})(),i=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),r={},l=new WeakMap,c=t=>l.get(t),a=(t,e)=>l.set(e.s=t,e),f=(t,e)=>e in t,u=t=>console.error(t),d=new Map,p=t.__stencil_cssshim;let m=0,h=!1;const $=[],w=[],y=[],b=t=>e=>{t.push(e),h||(h=!0,n.raf(v))},g=(t,e)=>{let n=0,o=0;for(;n<t.length&&(o=performance.now())<e;)try{t[n++](o)}catch(t){u(t)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},v=()=>{m++,(t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){u(t)}t.length=0})($);const t=2==(6&n.t)?performance.now()+7*Math.ceil(m*(1/22)):1/0;g(w,t),g(y,t),w.length>0&&(y.push(...w),w.length=0),(h=$.length+w.length+y.length>0)?n.raf(v):m=0},_=t=>Promise.resolve().then(t),j=b($),k=b(w),O={},S=t=>null!=t,M=t=>t.toLowerCase(),R=t=>["object","function"].includes(typeof t),U=()=>t.CSS&&t.CSS.supports&&t.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_app("./p-f7ddb189.js"),C=async()=>{{const n=Array.from(e.querySelectorAll("script")).find(t=>t.src.includes("/app.esm.js")||"app"===t.getAttribute("data-namespace")),o=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,t.location.href));return P(o.href),window.customElements||await __sc_import_app("./p-a0c82e31.js"),o.href}},P=n=>{const o=`__sc_import_${"app".replace(/\s|-/g,"_")}`;try{t[o]=new Function("w","return import(w);")}catch(s){const i=new Map;t[o]=s=>{const r=new URL(s,n).href;let l=i.get(r);if(!l){const n=e.createElement("script");n.type="module",n.src=URL.createObjectURL(new Blob([`import * as m from '${r}'; window.${o}.m = m;`],{type:"application/javascript"})),l=new Promise(e=>{n.onload=()=>{e(t[o].m),n.remove()}}),i.set(r,l),e.head.appendChild(n)}return l}}},N="http://www.w3.org/1999/xlink",L=new WeakMap,x=(t,e)=>"sc-"+(e?t+"-"+e:t),E=(t,e,...n)=>{let o,s,i=null,r=!1,l=!1,c=[];const a=e=>{for(let n=0;n<e.length;n++)i=e[n],Array.isArray(i)?a(i):null!=i&&"boolean"!=typeof i&&((r="function"!=typeof t&&!R(i))&&(i=String(i)),r&&l?c[c.length-1].i+=i:c.push(r?{t:0,i}:i),l=r)};if(a(n),e){o=e.key||void 0,s=e.name;{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}if("function"==typeof t)return t(e,c,I);const f={t:0,l:t,u:c.length>0?c:null,p:void 0,h:e};return f.$=o,f.g=s,f},F={},I={forEach:(t,e)=>t.map(T).forEach(e),map:(t,e)=>t.map(T).map(e).map(W)},T=t=>({vattrs:t.h,vchildren:t.u,vkey:t.$,vname:t.g,vtag:t.l,vtext:t.i}),W=t=>({t:0,h:t.vattrs,u:t.vchildren,$:t.vkey,g:t.vname,l:t.vtag,i:t.vtext}),A=(t,e,o,s,i,r)=>{if(o!==s)if("class"!==e||i)if("style"===e){for(const e in o)s&&null!=s[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in s)o&&s[e]===o[e]||(e.includes("-")?t.style.setProperty(e,s[e]):t.style[e]=s[e])}else if("key"===e);else if("ref"===e)s&&s(t);else if(e.startsWith("on")&&!f(t,e))e=f(t,M(e))?M(e.substring(2)):M(e[2])+e.substring(3),o&&n.rel(t,e,o,!1),s&&n.ael(t,e,s,!1);else{const n=f(t,e),o=R(s);if((n||o&&null!==s)&&!i)try{t[e]=null==s&&-1===t.tagName.indexOf("-")?"":s}catch(t){}const l=!(!i||e===(e=e.replace(/^xlink\:?/,"")));null==s||!1===s?l?t.removeAttributeNS(N,M(e)):t.removeAttribute(e):(!n||4&r||i)&&!o&&(s=!0===s?"":s.toString(),l?t.setAttributeNS(N,M(e),s):t.setAttribute(e,s))}else{const e=D(o),n=D(t.className).filter(t=>!e.includes(t));t.className=n.concat(D(s).filter(t=>!n.includes(t))).join(" ")}},D=t=>t?t.split(" "):[],q=(t,e,n,o)=>{const s=11===e.p.nodeType&&e.p.host?e.p.host:e.p,i=t&&t.h||O,r=e.h||O;for(o in i)null==r[o]&&null!=i[o]&&A(s,o,i[o],void 0,n,e.t);for(o in r)A(s,o,i[o],r[o],n,e.t)};let B,H,J,V=!1,z=!1,G=!1,K=!1;const Q=(t,n,o,s)=>{let i,r,l,c=n.u[o],a=0;if(V||(G=!0,"slot"===c.l&&(B&&s.classList.add(B+"-s"),c.t|=c.u?2:1)),S(c.i))c.p=e.createTextNode(c.i);else if(1&c.t)c.p=e.createTextNode("");else{if(i=c.p=K||"svg"===c.l?e.createElementNS("http://www.w3.org/2000/svg",c.l):e.createElement(2&c.t?"slot-fb":c.l),q(null,c,K="svg"===c.l||"foreignObject"!==c.l&&K),S(B)&&i["s-si"]!==B&&i.classList.add(i["s-si"]=B),c.u)for(a=0;a<c.u.length;++a)(r=Q(t,c,a,i))&&i.appendChild(r);"svg"===c.l&&(K=!1)}return c.p["s-hn"]=J,3&c.t&&(c.p["s-sr"]=!0,c.p["s-cr"]=H,c.p["s-sn"]=c.g||"",(l=t&&t.u&&t.u[o])&&l.l===c.l&&t.p&&X(t.p,!1)),c.p},X=(t,e)=>{n.t|=1;const o=t.childNodes;for(let t=o.length-1;t>=0;t--){const n=o[t];n["s-hn"]!==J&&n["s-ol"]&&(nt(n).insertBefore(n,et(n)),n["s-ol"].remove(),n["s-ol"]=void 0,G=!0),e&&X(n,e)}n.t&=-2},Y=(t,e,n,o,s,i)=>{let r,l=t["s-cr"]&&t["s-cr"].parentNode||t;for(l.shadowRoot&&M(l.tagName)===J&&(l=l.shadowRoot);s<=i;++s)o[s]&&(r=Q(null,n,s,t))&&(o[s].p=r,l.insertBefore(r,et(e)))},Z=(t,e,n,o)=>{for(;e<=n;++e)S(t[e])&&(o=t[e].p,lt(t[e],!0),z=!0,o["s-ol"]?o["s-ol"].remove():X(o,!0),o.remove())},tt=(t,e)=>t.l===e.l&&("slot"===t.l?t.g===e.g:t.$===e.$),et=t=>t&&t["s-ol"]||t,nt=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,ot=(t,e)=>{const n=e.p=t.p,o=t.u,s=e.u;let i;K=n&&S(n.parentNode)&&void 0!==n.ownerSVGElement,K="svg"===e.l||"foreignObject"!==e.l&&K,S(e.i)?(i=n["s-cr"])?i.parentNode.textContent=e.i:t.i!==e.i&&(n.textContent=e.i):("slot"===e.l||q(t,e,K),S(o)&&S(s)?((t,e,n,o)=>{let s,i,r=0,l=0,c=0,a=0,f=e.length-1,u=e[0],d=e[f],p=o.length-1,m=o[0],h=o[p];for(;r<=f&&l<=p;)if(null==u)u=e[++r];else if(null==d)d=e[--f];else if(null==m)m=o[++l];else if(null==h)h=o[--p];else if(tt(u,m))ot(u,m),u=e[++r],m=o[++l];else if(tt(d,h))ot(d,h),d=e[--f],h=o[--p];else if(tt(u,h))"slot"!==u.l&&"slot"!==h.l||X(u.p.parentNode,!1),ot(u,h),t.insertBefore(u.p,d.p.nextSibling),u=e[++r],h=o[--p];else if(tt(d,m))"slot"!==u.l&&"slot"!==h.l||X(d.p.parentNode,!1),ot(d,m),t.insertBefore(d.p,u.p),d=e[--f],m=o[++l];else{for(c=-1,a=r;a<=f;++a)if(e[a]&&S(e[a].$)&&e[a].$===m.$){c=a;break}c>=0?((i=e[c]).l!==m.l?s=Q(e&&e[l],n,c,t):(ot(i,m),e[c]=void 0,s=i.p),m=o[++l]):(s=Q(e&&e[l],n,l,t),m=o[++l]),s&&nt(u.p).insertBefore(s,et(u.p))}r>f?Y(t,null==o[p+1]?null:o[p+1].p,n,o,l,p):l>p&&Z(e,r,f)})(n,o,e,s):S(s)?(S(t.i)&&(n.textContent=""),Y(n,null,e,s,0,s.length-1)):S(o)&&Z(o,0,o.length-1)),K&&"svg"===e.l&&(K=!1)},st=(t,e,n,o,s,i,r,l)=>{for(o=0,s=(n=t.childNodes).length;o<s;o++)if(1===(e=n[o]).nodeType){if(e["s-sr"])for(r=e["s-sn"],e.hidden=!1,i=0;i<s;i++)if(n[i]["s-hn"]!==e["s-hn"])if(l=n[i].nodeType,""!==r){if(1===l&&r===n[i].getAttribute("slot")){e.hidden=!0;break}}else if(1===l||3===l&&""!==n[i].textContent.trim()){e.hidden=!0;break}st(e)}},it=[],rt=t=>{let e,n,o,s,i=t.childNodes,r=i.length,l=0,c=0,a=0;for(r=i.length;l<r;l++){if((e=i[l])["s-sr"]&&(n=e["s-cr"]))for(s=e["s-sn"],c=(o=n.parentNode.childNodes).length-1;c>=0;c--)(n=o[c])["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||((3===(a=n.nodeType)||8===a)&&""===s||1===a&&null===n.getAttribute("slot")&&""===s||1===a&&n.getAttribute("slot")===s)&&(it.some(t=>t.nodeToRelocate===n)||(z=!0,n["s-sn"]=s,it.push({slotRefNode:e,nodeToRelocate:n})));1===e.nodeType&&rt(e)}},lt=(t,e)=>{t&&(t.h&&t.h.ref&&t.h.ref(e?null:t.p),t.u&&t.u.forEach(t=>{lt(t,e)}))},ct=async(t,e)=>{if(t&&t[e])try{await t[e]()}catch(t){u(t)}},at=async(t,e,n,o)=>{e.t|=16;const s=e.s;o?await ct(s,"componentWillLoad"):await ct(s,"componentWillUpdate"),k(()=>ft(t,e,n,s,o))},ft=(t,s,i,r,l)=>{s.t&=-17,t["s-lr"]=!1,l&&((t,n,s)=>{const i=((t,n,o,s)=>{let i=x(n,o),r=d.get(i);if(t=11===t.nodeType?t:e,r||(i=x(n),r=d.get(i)),r)if("string"==typeof r){let n,o=L.get(t=t.head||t);if(o||L.set(t,o=new Set),!o.has(i)){if(p){const t=(n=p.createHostStyle(s,i,r))["s-sc"];t&&(i=t,o=null)}else(n=e.createElement("style")).innerHTML=r;t.insertBefore(n,t.querySelector("link")),o&&o.add(i)}}else t.adoptedStyleSheets.includes(r)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,r]);return i})(o&&t.shadowRoot?t.shadowRoot:t.getRootNode(),n.v,s,t);10&n.t&&(t["s-sc"]=i,t.classList.add(i+"-h"),2&n.t&&t.classList.add(i+"-s"))})(t,i,s._),s.t|=4;try{((t,s,i,r)=>{const l=s.j||{t:0};if(J=M(t.tagName),(t=>t&&t.l===F)(r)?r.l=null:r=E(null,null,r),i.k&&(r.h=r.h||{},i.k.forEach(([e,n])=>r.h[n]=t[e])),r.t|=4,s.j=r,r.p=l.p=t.shadowRoot||t,B=t["s-sc"],H=t["s-cr"],V=o&&0!=(1&i.t),G=z=!1,ot(l,r),G){rt(r.p);for(let t=0;t<it.length;t++){const n=it[t];if(!n.nodeToRelocate["s-ol"]){const t=e.createTextNode("");t["s-nr"]=n.nodeToRelocate,n.nodeToRelocate.parentNode.insertBefore(n.nodeToRelocate["s-ol"]=t,n.nodeToRelocate)}}n.t|=1;for(let t=0;t<it.length;t++){const e=it[t],n=e.slotRefNode.parentNode;let o=e.slotRefNode.nextSibling,s=e.nodeToRelocate["s-ol"];for(;s=s.previousSibling;){let t=s["s-nr"];if(t&&t&&t["s-sn"]===e.nodeToRelocate["s-sn"]&&n===t.parentNode&&(t=t.nextSibling)&&t&&!t["s-nr"]){o=t;break}}(!o&&n!==e.nodeToRelocate.parentNode||e.nodeToRelocate.nextSibling!==o)&&e.nodeToRelocate!==o&&n.insertBefore(e.nodeToRelocate,o)}n.t&=-2}z&&st(r.p),it.length=0})(t,s,i,r.render&&r.render())}catch(t){u(t)}s.t&=-5,p&&p.updateHost(t),t["s-lr"]=!0,s.t|=2,t["s-rc"].length>0&&(t["s-rc"].forEach(t=>t()),t["s-rc"].length=0),ut(t,s)},ut=(t,o,s)=>{if(!t["s-al"]){const i=o.s,r=o.O;512&o.t?ct(i,"componentDidUpdate"):(o.t|=512,t.classList.add("hydrated"),ct(i,"componentDidLoad"),o.S(t),r||(e.documentElement.classList.add("hydrated"),setTimeout(()=>n.t|=2,999))),r&&((s=r["s-al"])&&(s.delete(t),0===s.size&&(r["s-al"]=void 0,r["s-init"]())),o.O=void 0)}},dt=(t,e,n)=>{if(e.M){t.watchers&&(e.R=t.watchers);const o=Object.entries(e.M),s=t.prototype;if(o.forEach(([t,[o]])=>{31&o||2&n&&32&o?Object.defineProperty(s,t,{get(){return((t,e)=>c(t).U.get(e))(this,t)},set(n){((t,e,n,o)=>{const s=c(this),i=s.C,r=s.U.get(e),l=s.t;if(!((n=((t,e)=>null==t||R(t)?t:4&e?"false"!==t&&(""===t||!!t):2&e?parseFloat(t):1&e?String(t):t)(n,o.M[e][0]))===r||8&l&&void 0!==r)&&(s.U.set(e,n),s.s)){if(o.R&&1==(9&l)){const t=o.R[e];t&&t.forEach(t=>{try{s.s[t].call(s.s,n,r,e)}catch(t){u(t)}})}2==(22&l)&&at(i,s,o,!1)}})(0,t,n,e)},configurable:!0,enumerable:!0}):1&n&&64&o&&Object.defineProperty(s,t,{value(...e){const n=c(this);return n.P.then(()=>n.s[t](...e))}})}),1&n){const n=new Map;s.attributeChangedCallback=function(t,e,o){const s=n.get(t);this[s]=(null!==o||"boolean"!=typeof this[s])&&o},t.observedAttributes=o.filter(([t,e])=>15&e[0]).map(([t,o])=>{const s=o[1]||t;return n.set(s,t),512&o[0]&&e.k.push([t,s]),s})}}return t},pt=[],mt=t=>pt.push(t),ht=t=>c(t)._,$t=async(t,e,n,o,s)=>{if(0==(256&e.t)){e.t|=256,null==e._&&(e._="string"!=typeof n.N?(t=>pt.map(e=>e(t)).find(t=>!!t))(t):""),(s=await((t,e)=>__sc_import_app(`./${"string"!=typeof t.N?t.N[e._]:t.N}.entry.js`).then(e=>e[t.v.replace(/-/g,"_")],u))(n,e)).isProxied||(n.R=s.watchers,dt(s,n,2),s.isProxied=!0),e.t|=8;try{new s(e)}catch(t){u(t)}if(e.t&=-9,wt(e.s),!s.isStyleRegistered&&s.style){let t=s.style,o=x(n.v,e._);8&n.t&&(t=await __sc_import_app("./p-549b16dd.js").then(e=>e.scopeCss(t,o,!1))),((t,e,n)=>{let o=d.get(t);i&&n?(o=o||new CSSStyleSheet).replace(e):o=e,d.set(t,o)})(o,t,!!(1&n.t)),s.isStyleRegistered=!0}}const r=e.O;r&&!r["s-lr"]&&r["s-rc"]?r["s-rc"].push(()=>$t(t,e,n)):at(t,e,n,!0)},wt=t=>{ct(t,"connectedCallback")},yt=(i,r={})=>{const a=[],f=r.exclude||[],d=e.head,m=t.customElements,h=d.querySelector("meta[charset]"),$=e.createElement("style");Object.assign(n,r),n.o=new URL(r.resourcesUrl||"/",t.location.href).href,r.syncQueue&&(n.t|=4),i.forEach(i=>i[1].forEach(r=>{const d={t:r[0],v:r[1],M:r[2],L:r[3],k:[],R:{}};!o&&1&d.t&&(d.t|=8);const h=d.v;d.N=i[0],f.includes(h)||m.get(h)||(a.push(h),m.define(h,dt(class extends HTMLElement{constructor(t){super(t),t=this,this["s-lr"]=!1,this["s-rc"]=[],(t=>{{const e={t:0,C:t,U:new Map};e.P=new Promise(t=>e.S=t),l.set(t,e)}})(t),1&d.t&&(o?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){((o,i)=>{if(0==(1&n.t)){const r=c(o);if(i.L&&(r.F=((o,r)=>{const l=i.L.map(([i,l,c])=>{const a=((n,o)=>4&o?e:8&o?t:32&o?e.body:16&o?n.parentElement:n)(o,i),f=((t,e)=>n=>t.s?t.s[e](n):t.P.then(()=>t.s[e](n)).catch(u))(r,c),d=(t=>s?{passive:0!=(1&t),capture:0!=(2&t)}:0!=(2&t))(i);return n.ael(a,l,f,d),()=>n.rel(a,l,f,d)});return()=>l.forEach(t=>t())})(o,r)),!(1&r.t)){let t;r.t|=1,t||(4&i.t||8&i.t)&&((t,n)=>{let o;o="",(n=t["s-cr"]=e.createComment(""))["s-cn"]=!0,t.insertBefore(n,t.firstChild)})(o);{let t=o;for(;t=t.parentNode||t.host;)if(t["s-init"]&&!t["s-lr"]){r.O=t,(t["s-al"]=t["s-al"]||new Set).add(o);break}}i.M&&Object.entries(i.M).forEach(([t,[e]])=>{if(31&e&&o.hasOwnProperty(t)){const e=o[t];delete o[t],o[t]=e}}),_(()=>$t(o,r,i))}wt(r.s)}})(this,d)}disconnectedCallback(){(t=>{if(0==(1&n.t)){const e=c(t);e.F&&(e.F(),e.F=void 0),p&&p.removeHost(t);const n=e.s;ct(n,"disconnectedCallback"),ct(n,"componentDidUnload")}})(this)}"s-init"(){const t=c(this);t.s&&ut(this,t)}"s-hmr"(t){}forceUpdate(){at(this,c(this),d,!1)}componentOnReady(){return c(this).P}},d,1)))})),$.innerHTML=a+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),d.insertBefore($,h?h.nextSibling:d.firstChild)},bt=(t,e,n)=>{const o=jt(t);return{emit:t=>o.dispatchEvent(new CustomEvent(e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t}))}},gt=e=>{const o=new URL(e,n.o);return o.origin!==t.location.origin?o.href:o.pathname},vt=(t,n)=>{function o(){let t=e.querySelector(n);return t||(t=e.createElement(n),e.body.appendChild(t)),"function"==typeof t.componentOnReady?t.componentOnReady():Promise.resolve(t)}return{create:function(...t){return o().then(e=>e.create(...t))},componentOnReady:o}},_t=(n,o)=>o in r?r[o]:"window"===o?t:"document"===o?e:"isServer"!==o&&"isPrerender"!==o&&("isClient"===o||("resourcesUrl"===o||"publicPath"===o?gt("."):"queue"===o?{write:k,read:j,tick:{then:t=>_(t)}}:void 0)),jt=t=>c(t).C,kt=(t,e)=>(t=>Ot(t))(t).indexOf(e)>-1,Ot=t=>{t.Ionic=t.Ionic||{};let e=t.Ionic.platforms;return null==e&&(e=t.Ionic.platforms=St(t)).forEach(e=>t.document.documentElement.classList.add(`plt-${e}`)),e},St=t=>Object.keys(Et).filter(e=>Et[e](t)),Mt=t=>Lt(t,/iPad/i),Rt=t=>Lt(t,/android|sink/i),Ut=t=>xt(t,"(any-pointer:coarse)"),Ct=t=>Pt(t)||Nt(t),Pt=t=>!!(t.cordova||t.phonegap||t.PhoneGap),Nt=t=>{const e=t.Capacitor;return!(!e||!e.isNative)},Lt=(t,e)=>!(!t.navigator||!t.navigator.userAgent)&&e.test(t.navigator.userAgent),xt=(t,e)=>!!t.matchMedia&&t.matchMedia(e).matches,Et={ipad:Mt,iphone:t=>Lt(t,/iPhone/i),ios:t=>Lt(t,/iPad|iPhone|iPod/i),android:Rt,phablet:t=>{const e=t.innerWidth,n=t.innerHeight,o=Math.min(e,n),s=Math.max(e,n);return o>390&&o<520&&s>620&&s<800},tablet:t=>{const e=t.innerWidth,n=t.innerHeight,o=Math.min(e,n),s=Math.max(e,n);return Mt(t)||(t=>Rt(t)&&!Lt(t,/mobile/i))(t)||o>460&&o<820&&s>780&&s<1400},cordova:Pt,capacitor:Nt,electron:t=>Lt(t,/electron/),pwa:t=>!!t.matchMedia&&(t.matchMedia("(display-mode: standalone)").matches||t.navigator.standalone),mobile:Ut,mobileweb:t=>Ut(t)&&!Ct(t),desktop:t=>!Ut(t),hybrid:Ct},Ft="ionic:",It="ionic-persist-config",Tt=r.config=new class{constructor(){this.m=new Map}reset(t){this.m=new Map(Object.entries(t))}get(t,e){const n=this.m.get(t);return void 0!==n?n:e}getBoolean(t,e=!1){const n=this.m.get(t);return void 0===n?e:"string"==typeof n?"true"===n:!!n}getNumber(t,e){const n=parseFloat(this.m.get(t));return isNaN(n)?void 0!==e?e:NaN:n}set(t,e){this.m.set(t,e)}};let Wt;function At(t){return t&&ht(t)||Wt}function Dt(){!function(){const t=document,e=window,n=e.Ionic=e.Ionic||{};Ot(e);const o=Object.assign({},function(t){try{const e=t.sessionStorage.getItem(It);return null!==e?JSON.parse(e):{}}catch(t){return{}}}(e),{persistConfig:!1},n.config,function(t){const e={};return t.location.search.slice(1).split("&").map(t=>t.split("=")).map(([t,e])=>[decodeURIComponent(t),decodeURIComponent(e)]).filter(([t])=>(function(e,n){return t.substr(0,n.length)===n})(0,Ft)).map(([t,e])=>[t.slice(Ft.length),e]).forEach(([t,n])=>{e[t]=n}),e}(e));Tt.reset(o),Tt.getBoolean("persistConfig")&&function(t,e){try{t.sessionStorage.setItem(It,JSON.stringify(e))}catch(t){return}}(e,o),n.config=Tt,n.mode=Wt=Tt.get("mode",t.documentElement.getAttribute("mode")||(kt(e,"ios")?"ios":"md")),Tt.set("mode",Wt),t.documentElement.setAttribute("mode",Wt),t.documentElement.classList.add(Wt),Tt.getBoolean("_testing")&&Tt.set("animated",!1),mt(t=>t.mode||t.getAttribute("mode")||Wt)}()}mt(t=>"ION-ICON"===t.tagName?t.mode||t.getAttribute("mode"):null);export{F as H,U as a,yt as b,_t as c,At as d,jt as e,bt as f,Dt as g,E as h,kt as i,j,vt as k,Tt as l,ht as m,gt as n,C as p,a as r,k as w};
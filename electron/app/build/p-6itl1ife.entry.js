import{r as e,m as t,h as i,H as s,e as o,n}from"./p-09b7a6d1.js";let r;const l=(e,t,i,s)=>(t="ios"===(t=(t||"md").toLowerCase())?"ios":"md",i&&"ios"===t?e=i.toLowerCase():s&&"md"===t?e=s.toLowerCase():e&&(e=e.toLowerCase(),/^md-|^ios-|^logo-/.test(e)||(e=`${t}-${e}`)),"string"!=typeof e||""===e.trim()?null:""!==e.replace(/[a-z]|-|\d/gi,"")?null:e),c=e=>"string"==typeof e&&(e=e.trim(),a(e))?e:null,a=e=>e.length>0&&/(\/|\.)/.test(e),h=e=>{if(1===e.nodeType){if("script"===e.nodeName.toLowerCase())return!1;for(let t=0;t<e.attributes.length;t++){const i=e.attributes[t].value;if("string"==typeof i&&0===i.toLowerCase().indexOf("on"))return!1}for(let t=0;t<e.childNodes.length;t++)if(!h(e.childNodes[t]))return!1}return!0};class d{constructor(t){e(this,t),this.mode=m(this),this.isVisible=!1,this.lazy=!1}connectedCallback(){this.waitUntilVisible(this.el,"50px",()=>{this.isVisible=!0,this.loadIcon()})}disconnectedCallback(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(e,t,i){if(this.lazy&&"undefined"!=typeof window&&window.IntersectionObserver){const s=this.io=new window.IntersectionObserver(e=>{e[0].isIntersecting&&(s.disconnect(),this.io=void 0,i())},{rootMargin:t});s.observe(e)}else i()}loadIcon(){if(this.isVisible){const e=this.getUrl();e?f(this.el.ownerDocument,e,"s-ion-icon").then(e=>this.svgContent=e):console.error("icon was not resolved")}if(!this.ariaLabel){const e=l(this.getName(),this.mode,this.ios,this.md);e&&(this.ariaLabel=e.replace("ios-","").replace("md-","").replace(/\-/g," "))}}getName(){return void 0!==this.name?this.name:this.icon&&!a(this.icon)?this.icon:void 0}getUrl(){let e=c(this.src);return e||((e=l(this.getName(),this.mode,this.ios,this.md))?g(e):(e=c(this.icon))||null)}render(){const e=this.mode||"md",t=this.flipRtl||this.ariaLabel&&this.ariaLabel.indexOf("arrow")>-1&&!1!==this.flipRtl;return i(s,{role:"img",class:Object.assign({[`${e}`]:!0},v(this.color),{[`icon-${this.size}`]:!!this.size,"flip-rtl":!!t&&"rtl"===this.el.ownerDocument.dir})},i("div",this.svgContent?{class:"icon-inner",innerHTML:this.svgContent}:{class:"icon-inner"}))}static get assetsDirs(){return["svg"]}get el(){return o(this)}static get watchers(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}}static get style(){return":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.icon-inner,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px!important}:host(.icon-large){font-size:32px!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary,#3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary,#0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary,#f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success,#10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning,#ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger,#f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light,#f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium,#989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark,#222428)}"}}const m=e=>t(e)||document.documentElement.getAttribute("mode")||"md",g=e=>{return(()=>{if(!r){const e=window;e.Ionicons=e.Ionicons||{},r=e.Ionicons.map=e.Ionicons.map||new Map}return r})().get(e)||n(`svg/${e}.svg`)},u=new Map,f=(e,t,i)=>{let s=u.get(t);return s||(s=fetch(t,{cache:"force-cache"}).then(e=>w(e.status)?e.text():Promise.resolve(null)).then(t=>p(e,t,i)),u.set(t,s)),s},w=e=>e<=299,p=(e,t,i)=>{if(t){const s=e.createDocumentFragment(),o=e.createElement("div");o.innerHTML=t,s.appendChild(o);for(let e=o.childNodes.length-1;e>=0;e--)"svg"!==o.childNodes[e].nodeName.toLowerCase()&&o.removeChild(o.childNodes[e]);const n=o.firstElementChild;if(n&&"svg"===n.nodeName.toLowerCase()&&(i&&n.setAttribute("class",i),h(n)))return o.innerHTML}return""},v=e=>e?{"ion-color":!0,[`ion-color-${e}`]:!0}:null;export{d as ion_icon};
import{r as t,h as e,e as a,H as s}from"./p-09b7a6d1.js";import{a as r}from"./p-a88b8db5.js";class i{constructor(e){t(this,e),this.loaded=!1,this.active=!1}componentWillLoad(){}async setActive(){await this.prepareLazyLoaded(),this.active=!0}async prepareLazyLoaded(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return r(this.delegate,this.el,this.component,["ion-page"])}catch(t){console.error(t)}}}hostData(){const{tab:t,active:e,component:a}=this;return{role:"tabpanel","aria-hidden":e?null:"true","aria-labelledby":`tab-button-${t}`,class:{"ion-page":void 0===a,"tab-hidden":!e}}}__stencil_render(){return e("slot",null)}get el(){return a(this)}render(){return e(s,this.hostData(),this.__stencil_render())}static get style(){return":host(.tab-hidden){display:none!important}"}}export{i as ion_tab};
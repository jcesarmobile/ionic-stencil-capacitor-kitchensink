import{r as t,c as s,d as e,h as i,H as n}from"./p-09b7a6d1.js";import{c as o}from"./p-abd3a723.js";class a{constructor(e){t(this,e),this.disabled=!1,this.autoHide=!0,this.type="button",this.config=s(this,"config")}hostData(){const t=e(this),{color:s,disabled:i}=this;return{"aria-disabled":i?"true":null,class:Object.assign({},o(s),{[`${t}`]:!0,button:!0,"menu-button-disabled":i,"ion-activatable":!0,"ion-focusable":!0})}}__stencil_render(){const t=e(this),s=this.config.get("menuIcon","menu");return i("ion-menu-toggle",{menu:this.menu,autoHide:this.autoHide},i("button",Object.assign({},{type:this.type},{disabled:this.disabled,class:"button-native"}),i("slot",null,i("ion-icon",{icon:s,mode:t,lazy:!1})),"md"===t&&i("ion-ripple-effect",{type:"unbounded"})))}render(){return i(n,this.hostData(),this.__stencil_render())}static get style(){return":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}\@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--padding-start:5px;--padding-end:5px;height:32px}:host(.activated){opacity:.4}\@media (any-hover:hover){:host(:hover){opacity:.6}}ion-icon{font-size:31px}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.1)}"}}export{a as ion_menu_button};
import{r as t,f as i,d as o,e,h as n,H as s}from"./p-09b7a6d1.js";class d{constructor(o){t(this,o),this.inputId=`ion-selopt-${a++}`,this.disabled=!1,this.selected=!1,this.ionSelectOptionDidLoad=i(this,"ionSelectOptionDidLoad",7),this.ionSelectOptionDidUnload=i(this,"ionSelectOptionDidUnload",7)}componentWillLoad(){void 0===this.value&&(this.value=this.el.textContent||"")}componentDidLoad(){this.ionSelectOptionDidLoad.emit()}componentDidUnload(){this.ionSelectOptionDidUnload.emit()}hostData(){const t=o(this);return{role:"option",id:this.inputId,class:{[`${t}`]:!0}}}get el(){return e(this)}render(){return n(s,this.hostData())}static get style(){return":host{display:none}"}}let a=0;export{d as ion_select_option};
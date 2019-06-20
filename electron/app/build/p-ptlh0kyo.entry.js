import{r as t,f as e,c as i,d as s,h as o,e as h,H as a}from"./p-09b7a6d1.js";import{e as n}from"./p-627b3a9c.js";import{a as r}from"./p-8818d44d.js";class l{constructor(s){t(this,s),this.optHeight=0,this.rotateFactor=0,this.scaleFactor=1,this.velocity=0,this.y=0,this.noAnimate=!0,this.ionPickerColChange=e(this,"ionPickerColChange",7),this.queue=i(this,"queue")}colChanged(){this.refresh()}componentWillLoad(){let t=0,e=.81;"ios"===s(this)&&(t=-.46,e=1),this.rotateFactor=t,this.scaleFactor=e}async componentDidLoad(){const t=this.optsEl;t&&(this.optHeight=t.firstElementChild?t.firstElementChild.clientHeight:0),this.refresh(),this.gesture=(await __sc_import_app("./p-cf4dbdf8.js")).createGesture({el:this.el,gestureName:"picker-swipe",gesturePriority:100,threshold:0,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gesture.setDisabled(!1),this.tmrId=setTimeout(()=>{this.noAnimate=!1,this.refresh(!0)},250)}componentDidUnload(){cancelAnimationFrame(this.rafId),clearTimeout(this.tmrId),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}emitColChange(){this.ionPickerColChange.emit(this.col)}setSelected(t,e){const i=t>-1?-t*this.optHeight:0;this.velocity=0,cancelAnimationFrame(this.rafId),this.update(i,e,!0),this.emitColChange()}update(t,e,i){if(!this.optsEl)return;let s=0,o=0;const{col:h,rotateFactor:a}=this,n=h.selectedIndex=this.indexForY(-t),l=0===e?"":e+"ms",d=`scale(${this.scaleFactor})`,p=this.optsEl.children;for(let i=0;i<p.length;i++){const r=p[i],m=h.options[i],u=i*this.optHeight+t;let f="";if(0!==a){const t=u*a;Math.abs(t)<=90?(s=0,o=90,f=`rotateX(${t}deg) `):s=-9999}else o=0,s=u;const g=n===i;f+=`translate3d(0px,${s}px,${o}px) `,1===this.scaleFactor||g||(f+=d),this.noAnimate?(m.duration=0,r.style.transitionDuration=""):e!==m.duration&&(m.duration=e,r.style.transitionDuration=l),f!==m.transform&&(m.transform=f,r.style.transform=f),g!==m.selected&&(m.selected=g,g?r.classList.add(c):r.classList.remove(c))}this.col.prevSelected=n,i&&(this.y=t),this.lastIndex!==n&&(r(),this.lastIndex=n)}decelerate(){if(0!==this.velocity){this.velocity*=d,this.velocity=this.velocity>0?Math.max(this.velocity,1):Math.min(this.velocity,-1);let t=this.y+this.velocity;t>this.minY?(t=this.minY,this.velocity=0):t<this.maxY&&(t=this.maxY,this.velocity=0),this.update(t,0,!0),Math.round(t)%this.optHeight!=0||Math.abs(this.velocity)>1?this.rafId=requestAnimationFrame(()=>this.decelerate()):(this.velocity=0,this.emitColChange())}else if(this.y%this.optHeight!=0){const t=Math.abs(this.y%this.optHeight);this.velocity=t>this.optHeight/2?1:-1,this.decelerate()}}indexForY(t){return Math.min(Math.max(Math.abs(Math.round(t/this.optHeight)),0),this.col.options.length-1)}onStart(t){t.event.preventDefault(),t.event.stopPropagation(),cancelAnimationFrame(this.rafId);const e=this.col.options;let i=e.length-1,s=0;for(let t=0;t<e.length;t++)e[t].disabled||(i=Math.min(i,t),s=Math.max(s,t));this.minY=-i*this.optHeight,this.maxY=-s*this.optHeight}onMove(t){t.event.preventDefault(),t.event.stopPropagation();let e=this.y+t.deltaY;e>this.minY?(e=Math.pow(e,.8),this.bounceFrom=e):e<this.maxY?(e+=Math.pow(this.maxY-e,.9),this.bounceFrom=e):this.bounceFrom=0,this.update(e,0,!1)}onEnd(t){if(this.bounceFrom>0)return this.update(this.minY,100,!0),void this.emitColChange();if(this.bounceFrom<0)return this.update(this.maxY,100,!0),void this.emitColChange();if(this.velocity=n(-p,23*t.velocityY,p),0===this.velocity&&0===t.deltaY){const e=t.event.target.closest(".picker-opt");e&&e.hasAttribute("opt-index")&&this.setSelected(parseInt(e.getAttribute("opt-index"),10),m)}else this.y+=t.deltaY,this.decelerate()}refresh(t){let e=this.col.options.length-1,i=0;const s=this.col.options;for(let t=0;t<s.length;t++)s[t].disabled||(e=Math.min(e,t),i=Math.max(i,t));if(0!==this.velocity)return;const o=n(e,this.col.selectedIndex||0,i);if(this.col.prevSelected!==o||t){const t=o*this.optHeight*-1;this.velocity=0,this.update(t,m,!0)}}hostData(){return{class:{[`${s(this)}`]:!0,"picker-col":!0,"picker-opts-left":"left"===this.col.align,"picker-opts-right":"right"===this.col.align},style:{"max-width":this.col.columnWidth}}}__stencil_render(){const t=this.col;return[t.prefix&&o("div",{class:"picker-prefix",style:{width:t.prefixWidth}},t.prefix),o("div",{class:"picker-opts",style:{maxWidth:t.optionsWidth},ref:t=>this.optsEl=t},t.options.map((t,e)=>o("button",{type:"button",class:{"picker-opt":!0,"picker-opt-disabled":!!t.disabled},"opt-index":e},t.text))),t.suffix&&o("div",{class:"picker-suffix",style:{width:t.suffixWidth}},t.suffix)]}get el(){return h(this)}static get watchers(){return{col:["colChanged"]}}render(){return o(a,this.hostData(),this.__stencil_render())}static get style(){return".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}:host-context([dir=rtl]) .picker-opt,[dir=rtl] .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{text-align:end}.picker-prefix,.picker-suffix{position:relative;-ms-flex:1;flex:1;white-space:nowrap}.picker-suffix{text-align:start}.picker-col{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.picker-opts,.picker-prefix,.picker-suffix{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-opt.picker-opt-selected,.picker-prefix,.picker-suffix{color:var(--ion-color-primary,#3880ff)}"}}const c="picker-opt-selected",d=.97,p=90,m=150;export{l as ion_picker_column};
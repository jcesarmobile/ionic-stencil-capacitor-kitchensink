import{r as t,c as e,d as s,e as i,h as n,H as o}from"./p-09b7a6d1.js";class r{constructor(s){t(this,s),this.type="bounded",this.queue=e(this,"queue"),this.win=e(this,"window")}async addRipple(t,e){return new Promise(s=>{this.queue.read(()=>{const i=this.el.getBoundingClientRect(),n=i.width,o=i.height,r=Math.sqrt(n*n+o*o),u=Math.max(o,n),h=this.unbounded?u:r+d,l=Math.floor(u*a),p=h/l;let c=t-i.left,f=e-i.top;this.unbounded&&(c=.5*n,f=.5*o);const m=c-.5*l,w=f-.5*l,b=.5*n-c,g=.5*o-f;this.queue.write(()=>{const t=this.win.document.createElement("div");t.classList.add("ripple-effect");const e=t.style;e.top=w+"px",e.left=m+"px",e.width=e.height=l+"px",e.setProperty("--final-scale",`${p}`),e.setProperty("--translate-end",`${b}px, ${g}px`),(this.el.shadowRoot||this.el).appendChild(t),setTimeout(()=>{s(()=>{!function(t){t.classList.add("fade-out"),setTimeout(()=>{t.remove()},200)}(t)})},325)})})})}get unbounded(){return"unbounded"===this.type}hostData(){return{role:"presentation",class:{[`${s(this)}`]:!0,unbounded:this.unbounded}}}get el(){return i(this)}render(){return n(o,this.hostData())}static get style(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}\@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}\@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"}}const d=10,a=.5;export{r as ion_ripple_effect};
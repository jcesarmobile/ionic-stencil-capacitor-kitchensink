System.register([],function(t){"use strict";return{execute:function(){t("startFocusVisible",i);var e="ion-focused";var n="ion-focusable";var r=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"];function i(t){var i=[];var o=true;function s(t){i.forEach(function(t){return t.classList.remove(e)});t.forEach(function(t){return t.classList.add(e)});i=t}t.addEventListener("keydown",function(t){o=r.includes(t.key);if(!o){s([])}});var c=function(){o=false;s([])};t.addEventListener("focusin",function(t){if(o&&t.composedPath){var e=t.composedPath().filter(function(t){if(t.classList){return t.classList.contains(n)}return false});s(e)}});t.addEventListener("focusout",function(){if(t.activeElement===t.body){s([])}});t.addEventListener("touchstart",c);t.addEventListener("mousedown",c)}}}});
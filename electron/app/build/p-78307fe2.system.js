System.register(["./p-9da861f6.system.js"],function(t){"use strict";var n,e;return{setters:[function(t){n=t.j;e=t.w}],execute:function(){t("startStatusTap",r);function r(t){t.addEventListener("statusTap",function(){n(function(){var n=t.innerWidth;var r=t.innerHeight;var i=t.document.elementFromPoint(n/2,r/2);if(!i){return}var o=i.closest("ion-content");if(o){o.componentOnReady().then(function(){e(function(){return o.scrollToTop(300)})})}})})}}}});
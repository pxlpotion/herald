!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.herald=n():t.herald=n()}(this,function(){return function(t){function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n,e){"use strict";var i={options:{delay:3e3,container_id:"heraldContainer"},$container:null,init:function(){var t=document.createElement("div");t.setAttribute("id",this.options.container_id),document.body.appendChild(t),this.$container=t,this.$container.addEventListener("click",function(t){if("button"===t.target.tagName.toLowerCase()){var n=t.target.parentNode.parentNode;this.close(n)}}.bind(this));var n=document.createElement("style");n.textContent=o,document.body.appendChild(n)},notify:function(t,n,e){null===this.$container&&this.init();var i=n?'<p class="lead">'+n+"</p> ":"",o='\n\t\t\t<div class="alert alert-dismissible alert-'+e+' herald-notification">\n\t\t\t\t<button type="button" class="close">&times;</button>\n\t\t\t\t'+i+"\n\t\t\t\t<p>"+t+"</p>\n\t\t\t</div>\n\t\t",r=document.createElement("div");r.innerHTML=o,this.$container.appendChild(r),this.delayedClose(r)},close:function(t){this.$container.removeChild(t)},delayedClose:function(t){setTimeout(function(){this.close(t)}.bind(this),this.options.delay)},success:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.notify(t,n,"success")},error:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.notify(t,n,"danger")},warning:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.notify(t,n,"warning")},info:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.notify(t,n,"info")}};t.exports=i;var o="\n\t.herald-notification {\n\t\tz-index: 100;\n\t\tposition: fixed;\n\t\twidth: 80%;\n\t\tleft: 10%;\n\t\tbottom: 0;\n\t\t-webkit-animation-duration: 0.5s;\n\t\tanimation-duration: 0.5s;\n\t\t-webkit-animation-fill-mode: both;\n\t\tanimation-fill-mode: both;\n\t\t-webkit-animation-name: slideInUp;\n\t\tanimation-name: slideInUp;\n\t}\n\t.herald-notification > p + p {\n\t\tmargin-top: 0;\n\t}\n\t@-webkit-keyframes slideInUp {\n\t\t0% {\n\t\t\t-webkit-transform: translate3d(0,100%,0);\n\t\t\ttransform: translate3d(0,100%,0);\n\t\t\tvisibility: visible\n\t\t}\n\n\t\t100% {\n\t\t\t-webkit-transform: translate3d(0,0,0);\n\t\t\ttransform: translate3d(0,0,0)\n\t\t}\n\t}\n\t@keyframes slideInUp {\n\t\t0% {\n\t\t\t-webkit-transform: translate3d(0,100%,0);\n\t\t\ttransform: translate3d(0,100%,0);\n\t\t\tvisibility: visible\n\t\t}\n\n\t\t100% {\n\t\t\t-webkit-transform: translate3d(0,0,0);\n\t\t\ttransform: translate3d(0,0,0)\n\t\t}\n\t}\n"}])});

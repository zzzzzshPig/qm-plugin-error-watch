!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["qm-rollup-template"]={})}(this,(function(e){"use strict";function t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function o(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}}function r(e,t,r,c){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?i(a(e),(function(a){var c=encodeURIComponent(o(a))+r;return n(e[a])?i(e[a],(function(e){return c+encodeURIComponent(o(e))})).join(t):c+encodeURIComponent(o(e[a]))})).join(t):c?encodeURIComponent(o(c))+r+encodeURIComponent(o(e)):""}function i(e,t){if(e.map)return e.map(t);for(var n=[],o=0;o<e.length;o++)n.push(t(e[o],o));return n}var a=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t};function c(e,o,r,i){o=o||"&",r=r||"=";var a={};if("string"!=typeof e||0===e.length)return a;var c=/\+/g;e=e.split(o);var u=1e3;i&&"number"==typeof i.maxKeys&&(u=i.maxKeys);var s=e.length;u>0&&s>u&&(s=u);for(var l=0;l<s;++l){var p,f,d,m,h=e[l].replace(c,"%20"),y=h.indexOf(r);y>=0?(p=h.substr(0,y),f=h.substr(y+1)):(p=h,f=""),d=decodeURIComponent(p),m=decodeURIComponent(f),t(a,d)?n(a[d])?a[d].push(m):a[d]=[a[d],m]:a[d]=m}return a}var u={encode:r,stringify:r,decode:c,parse:c};var s=function(){function e(){this.target="",this.title="",this.env="",this.tokenKey=""}return e.prototype.init=function(e){var t=void 0===e?{}:e,n=t.tokenKey,o=void 0===n?"qm_token":n,r=t.target,i=void 0===r?"_self":r,a=t.title,c=void 0===a?"登录":a,s=t.env,l=void 0===s?"development":s;this.env=l,this.target=i,this.title=c,this.tokenKey=o;var p=u.parse(location.search.slice(1)).qm_token;p?(localStorage.setItem(o,JSON.stringify(p)),history.pushState({},"",location.href.replace(/&?qm_token=[^&]*/,""))):localStorage.getItem(o)||this.login()},e.prototype.login=function(){!function(e,t){var n=document.createElement("a"),o="___false_click";n.setAttribute("href",e),n.setAttribute("target",t),n.setAttribute("id",o),document.getElementById(o)||document.body.appendChild(n),n.click()}(("production"===this.env?"https://admin.91xiangju.com/frontend-platform/login":"http://192.168.1.66/frontend-platform-dev/login")+"?"+("qm_from="+encodeURIComponent(location.href))+("&title="+encodeURIComponent(this.title)),this.target)},e.prototype.logout=function(){this.login()},e}(),l=new s;window&&(window.qmLogin=l),e.Login=s,e.default=l,Object.defineProperty(e,"__esModule",{value:!0})}));

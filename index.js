!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("jfweb-vue-ui",[],t):"object"==typeof exports?exports["jfweb-vue-ui"]=t():e["jfweb-vue-ui"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.a={name:"JfMenu",props:{list:{type:Array,default:function(){return[]}}},data:function(){return{defaultOpened:!1,li:[]}},mounted:function(){var e=this;this.li=this.list.map(function(t){return r({},t,{opened:t.opened?t.opened:e.defaultOpened})})},methods:{clickItem:function(e){var t=e.item,n=e.key;this.li[n].opened=!this.li[n].opened,this.$emit("click",{item:t,key:n})},clickSubItem:function(e){var t=e.item,n=e.it,r=e.key;this.$emit("click",{item:t,it:n,key:r})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);r.a.install=function(e){return e.component(r.a.name,r.a)},t.default={JfMenu:r.a}},function(e,t,n){"use strict";function r(e){n(3)}var o=n(0),i=n(9),a=n(8),s=r,u=a(o.a,i.a,!1,s,"data-v-0c6b1851",null);t.a=u.exports},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(6)("01cf6542",r,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,".jf-menu[data-v-0c6b1851]{width:150px}.jf-menu .item[data-v-0c6b1851]{border-bottom:1px solid #fff}.jf-menu .item.closed .sub-item[data-v-0c6b1851]{height:0;overflow:hidden}.jf-menu .item.opened .sub-item[data-v-0c6b1851]{height:auto;overflow:hidden}.jf-menu .item .name[data-v-0c6b1851]{padding:5px 10px;color:#333}.jf-menu .item .name[data-v-0c6b1851]:hover{color:#000;cursor:pointer}.jf-menu .item .sub-item .sub-name[data-v-0c6b1851]{padding:5px 0 5px 20px;color:#333}.jf-menu .item .sub-item .sub-name[data-v-0c6b1851]:hover{color:#000;cursor:pointer}",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=f[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));f[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,r=document.querySelector("style["+b+'~="'+e.id+'"]');if(r){if(v)return m;r.parentNode.removeChild(r)}if(y){var i=p++;r=l||(l=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),h.ssrId&&e.setAttribute(b,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(7),f={},d=u&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,v=!1,m=function(){},h=null,b="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,o){v=n,h=o||{};var i=c(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=f[a.id];s.refs--,n.push(s)}t?(i=c(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete f[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],u=i[2],c=i[3],f={id:e+":"+o,css:s,media:u,sourceMap:c};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}},function(e,t){e.exports=function(e,t,n,r,o,i){var a,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(a=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var f;if(i?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=f):r&&(f=r),f){var d=c.functional,l=d?c.render:c.beforeCreate;d?(c._injectStyles=f,c.render=function(e,t){return f.call(t),l(e,t)}):c.beforeCreate=l?[].concat(l,f):[f]}return{esModule:a,exports:s,options:c}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jf-menu"},e._l(e.li,function(t,r){return n("div",{key:r,staticClass:"item",class:{opened:e.defaultOpened||t.opened,closed:!e.defaultOpened}},[n("div",{staticClass:"name",on:{click:function(n){return e.clickItem({item:t,key:r})}}},[e._v(e._s(t.name))]),e._v(" "),e._l(t.children,function(r,o){return n("div",{key:o,staticClass:"sub-item",on:{click:function(n){return e.clickSubItem({item:t,it:r,key:o})}}},[n("div",{staticClass:"sub-name"},[e._v(e._s(r.name))])])})],2)}),0)},o=[],i={render:r,staticRenderFns:o};t.a=i}])});
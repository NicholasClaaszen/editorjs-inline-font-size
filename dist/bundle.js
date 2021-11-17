!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.FontSizeTool=e():t.FontSizeTool=e()}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function o(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n(1).toString();var a=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,"isDropDownOpen",!1),s(this,"togglingCallback",null),s(this,"emptyString","&nbsp;&nbsp"),s(this,"fontSizeDropDown","font-size-dropdown"),s(this,"commandName","fontSize"),s(this,"CSS",{button:"ce-inline-tool",buttonActive:"ce-font-size-tool--active",buttonModifier:"ce-inline-tool--font"}),s(this,"nodes",{button:void 0}),s(this,"selectedFontSize",null),s(this,"selectionList",void 0),s(this,"buttonWrapperText",void 0),s(this,"createSvg",void 0),s(this,"toggleFontSizeSelector",(function(t){e.selectedFontSize=t.target.id,e.toggle()})),s(this,"toggleDropDown",(function(t){t.target.id!==e.fontSizeDropDown&&"fontSizeBtn"!==t.target.parentNode.id&&"fontSizeBtn"!==t.target.id||e.toggle((function(t){t&&(e.isDropDownOpen=!0)}))}))}var e,n,r;return e=t,r=[{key:"sanitize",get:function(){return{font:{size:!0,face:!0}}}},{key:"isInline",get:function(){return!0}}],(n=[{key:"make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=document.createElement(t);return Array.isArray(n)?(e=r.classList).add.apply(e,o(n)):n&&r.classList.add(n),r}},{key:"createButton",value:function(){this.nodes.button=this.make("button",[this.CSS.button,this.CSS.buttonModifier]),this.nodes.button.type="button",this.nodes.button.setAttribute("id","fontSizeBtn"),this.getFontSizeForButton(),this.createSvg=this.svg("toggler-down",13,13),this.nodes.button.appendChild(this.createSvg)}},{key:"getFontSizeForButton",value:function(){this.buttonWrapperText=this.make("div","button-wrapper-text");var t=this.make("div");t.setAttribute("id",this.fontSizeDropDown),t.innerHTML=this.emptyString,this.buttonWrapperText.append(t),this.nodes.button.append(this.buttonWrapperText)}},{key:"addFontSizeOptions",value:function(){var t=this;this.selectionList=this.make("div","selectionList");for(var e=this.make("div","selection-list-wrapper"),n=0,o=[{label:"3",value:"1"},{label:"13",value:"2"},{label:"16",value:"3"},{label:"18",value:"4"},{label:"24",value:"5"},{label:"32",value:"6"},{label:"72",value:"7"}];n<o.length;n++){var r=o[n],i=this.make("div");i.setAttribute("value",r.value),i.setAttribute("id",r.value),i.classList.add("selection-list-option"),document.getElementById(this.fontSizeDropDown).innerHTML!==r.label&&this.selectedFontSize!==r.value||i.classList.add("selection-list-option-active"),i.innerHTML=r.label,e.append(i)}this.selectionList.append(e),this.nodes.button.append(this.selectionList),this.selectionList.addEventListener("click",this.toggleFontSizeSelector),setTimeout((function(){"function"==typeof t.togglingCallback&&t.togglingCallback(!0)}),50)}},{key:"removeFontSizeOptions",value:function(){this.selectionList&&(this.isDropDownOpen=!1,this.selectionList=this.selectionList.remove()),"function"==typeof this.togglingCallback&&this.togglingCallback(!1)}},{key:"render",value:function(){return this.createButton(),this.nodes.button.addEventListener("click",this.toggleDropDown),this.nodes.button}},{key:"toggle",value:function(t){!this.isDropDownOpen&&t?this.addFontSizeOptions():this.removeFontSizeOptions(),"function"==typeof t&&(this.togglingCallback=t)}},{key:"surround",value:function(t){this.selectedFontSize&&document.execCommand("fontSize",!1,this.selectedFontSize)}},{key:"getComputedFontStyle",value:function(t){return window.getComputedStyle(t.parentElement,null).getPropertyValue("font-size")}},{key:"checkState",value:function(t){var e=document.queryCommandState("fontSize"),n=this.getComputedFontStyle(t.anchorNode);if(n===this.getComputedFontStyle(t.focusNode))-1!==(n=n.slice(0,n.indexOf("p"))).indexOf(".")&&(n=n.slice(0,n.indexOf("."))),this.replaceFontSizeInWrapper(n);else{var o=this.emptyString;this.replaceFontSizeInWrapper(o)}return e}},{key:"replaceFontSizeInWrapper",value:function(t){document.getElementById(this.fontSizeDropDown).innerHTML=t}},{key:"clear",value:function(){this.toggle(),this.selectedFontSize=null}},{key:"svg",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:14,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:14,o=document.createElementNS("http://www.w3.org/2000/svg","svg");return o.classList.add("icon","icon--"+t),o.setAttribute("width",e+"px"),o.setAttribute("height",n+"px"),o.innerHTML='<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'.concat(t,'"></use>'),o}}])&&i(e.prototype,n),r&&i(e,r),t}();s(a,"title","Font Size"),t.exports=a},function(t,e,n){var o=n(2);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".ce-inline-tool.ce-inline-tool--font {\r\n        display: flex;\r\n        flex-direction: row;\r\n        position: relative;\r\n    }\r\n    .ce-inline-tool .button-wrapper-text {\r\n        width: 30px;\r\n    }\r\n    .ce-inline-tool .selectionList {\r\n        position: absolute;\r\n        top: 35px;\r\n        left: 0; \r\n    }\r\n    .ce-inline-tool .selectionList .selection-list-wrapper {\r\n            width: 50px;\r\n            background: #fff;\r\n            border: 1px solid #eaeaea;\r\n        }\r\n    .ce-inline-tool .selectionList .selection-list-wrapper .selection-list-option {\r\n                padding-top: 5px;\r\n                padding-bottom: 5px;\r\n                border-bottom: 1px solid #eaeaea;\r\n            }\r\n    .ce-inline-tool .selectionList .selection-list-wrapper .selection-list-option-active {\r\n                  background-color: #eff2f5;\r\n                }\r\n    .ce-inline-tool .selectionList .selection-list-wrapper .selection-list-option:hover {\r\n                background-color: #eff2f5;\r\n            }\r\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=o.sources.map((function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"}));return[n].concat(i).concat([r]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var o,r,i={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),a=function(t){return document.querySelector(t)},l=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=a.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),u=null,c=0,f=[],p=n(5);function d(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](o.parts[s]);for(;s<o.parts.length;s++)r.parts.push(m(o.parts[s],e))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(m(o.parts[s],e));i[o.id]={id:o.id,refs:1,parts:a}}}}function h(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(a):n.push(o[s]={id:s,parts:[a]})}return n}function v(t,e){var n=l(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=f[f.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=l(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,r)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function g(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),y(e,t.attrs),v(t,e),e}function y(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function m(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var s=c++;n=u||(u=g(e)),o=x.bind(null,n,s,!1),r=x.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),v(t,e),e}(e),o=L.bind(null,n,e),r=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),o=k.bind(null,n),r=function(){b(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return d(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var s=n[r];(a=i[s.id]).refs--,o.push(a)}t&&d(h(t,e),e);for(r=0;r<o.length;r++){var a;if(0===(a=o[r]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete i[a.id]}}}};var S,w=(S=[],function(t,e){return S[t]=e,S.filter(Boolean).join("\n")});function x(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(e,r);else{var i=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function k(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function L(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=p(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}}])}));
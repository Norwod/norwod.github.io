(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{KdaB:function(t,e,n){"use strict";n.r(e),n.d(e,"Root",(function(){return D}));var o=n("cDcd"),i=n.n(o),a=n("weFX");!function(){if("navigate"in window)return;const t={37:"left",38:"up",39:"right",40:"down"};let e=null,n=null,o={element:null,rect:null},i=null;function a(){window.addEventListener("keydown",(o=>{const i=parent&&parent.__spatialNavigation__&&parent.__spatialNavigation__.keyMode||window.__spatialNavigation__&&window.__spatialNavigation__.keyMode,a=document.activeElement,l=t[o.keyCode];if(9===o.keyCode&&(n=null),!(!i||"NONE"===i||"SHIFTARROW"===i&&!o.shiftKey||"ARROW"===i&&o.shiftKey||o.ctrlKey||o.metaKey||o.altKey)&&!o.defaultPrevented){let i={left:!0,up:!0,right:!0,down:!0};"INPUT"!==a.nodeName&&"TEXTAREA"!==a.nodeName||(i=function(e){const n=["email","date","month","number","time","week"],o=["password","text","search","tel","url",null],i=document.activeElement,a=i.selectionStart,r=i.selectionEnd,l={left:!1,up:!1,right:!1,down:!1},c=t[e.keyCode];if(void 0===c)return l;(!n.includes(i.getAttribute("type"))||"up"!==c&&"down"!==c)&&(o.includes(i.getAttribute("type"))||"TEXTAREA"===i.nodeName)?a===r&&(0===a&&(l.left=!0,l.up=!0),r===i.value.length&&(l.right=!0,l.down=!0)):l[c]=!0;return l}(o)),i[l]&&(o.preventDefault(),e=new Map,r(l),e=null,n=null)}})),document.addEventListener("mouseup",(t=>{n={x:t.clientX,y:t.clientY}})),window.addEventListener("focusin",(t=>{t.target!==window&&(o.element=t.target,o.rect=t.target.getBoundingClientRect())}))}function r(t){const e=function(){let t=document.activeElement;if(!t||t===document.body&&!document.querySelector(":focus")){if(o.element&&t!==o.element){const e=window.getComputedStyle(o.element,null),n=["hidden","collapse"];if(o.element.disabled||n.includes(e.getPropertyValue("visibility")))return t=o.element,t}t=document.documentElement}!o.element||0!==z(o.element).height&&0!==z(o.element).width||(n=(o.left+o.right)/2,o.top,o.bottom);if(!B(t)){const e=h(t);if(e&&e===window)return e}return t}();let i=e,a=null;n&&(a=document.elementFromPoint(n.x,n.y),null===a&&(a=document.body),_(a)&&!E(a)?n=null:i=E(a)?a:a.getSpatialNavigationContainer()),i!==window&&i!==document&&i!==document.documentElement||(i=document.body||document.documentElement);let r=null;if((E(i)||"BODY"===i.nodeName)&&"INPUT"!==i.nodeName){"IFRAME"===i.nodeName&&(i=i.contentDocument.documentElement),r=r===window?document.body:i;let n=null;if(document.activeElement===e||document.activeElement===document.body&&e===document.documentElement){if(n=i.spatialNavigationSearch(t,{container:i,candidates:u(i,{mode:"all"})}),l(n,t))return}else r=r.getSpatialNavigationContainer()}r=i.getSpatialNavigationContainer();let c=r.parentElement?r.getSpatialNavigationContainer():null;c||window.location===window.parent.location||(c=window.parent.document.documentElement),v(i,r,c,t,"all")}function l(t,e){if(t){if(!b("beforefocus",t,null,e))return!0;const o=t.getSpatialNavigationContainer();return o!==window?t.focus():t.focus({preventScroll:!0}),n=null,!0}return!1}function c(t,e){return O(t,e)&&!S(t,e)?(x(t,e),!0):!t.parentElement&&!T(t,e)&&(x(t.ownerDocument.documentElement,e),!0)}function u(t,e={mode:"visible"}){let n=[];if(t.childElementCount>0){t.parentElement||(t=t.getElementsByTagName("body")[0]||document.body);const e=t.children;for(const t of e)C(t)?n.push(t):_(t)?(n.push(t),!E(t)&&t.childElementCount&&(n=n.concat(u(t,{mode:"all"})))):t.childElementCount&&(n=n.concat(u(t,{mode:"all"})))}return"all"===e.mode?n:n.filter(M)}function d(t,e,n,o){const i=t;return o=o||i.getSpatialNavigationContainer(),m(i,n=!n||n.length<=0?u(o):n,e,o)}function s(t,e){const o=this;let i,a=[],r=[],l=function(t){const e=t.getSpatialNavigationContainer().focusableAreas(),n=[];return e.forEach((e=>{t!==e&&k(e,t)&&n.push(e)})),n}(o);e||(e={});const c=o.getSpatialNavigationContainer();let s=u(c);const m=e.container||c;e.container&&c.contains(e.container)&&(s=s.concat(u(m)));const p=e.candidates&&e.candidates.length>0?e.candidates.filter((t=>m.contains(t))):s.filter((t=>m.contains(t)&&m!==t));if(p&&p.length>0){p.forEach((t=>{t!==o&&(o.contains(t)&&o!==t?a:r).push(t)}));let e=l.filter((t=>!a.includes(t))),c=p.filter((t=>E(t)&&k(o,t))).map((t=>t.focusableAreas())).flat().filter((t=>t!==o));if(a=a.concat(e).filter((t=>m.contains(t))),r=r.concat(c).filter((t=>m.contains(t))),r.length>0&&(r=d(o,t,r,m)),a&&a.length>0&&"INPUT"!==o.nodeName&&(i=function(t,e,o){return g(t,e,o,n?F:H)}(o,a,t)),i=i||f(o,r,t),i&&C(i)){const e=u(i,{mode:"all"}),n=e.length>0?o.spatialNavigationSearch(t,{candidates:e,container:i}):null;n?i=n:_(i)||(p.splice(p.indexOf(i),1),i=p.length?o.spatialNavigationSearch(t,{candidates:p,container:m}):null)}return i}return null}function m(t,e,n,o){const i=t.getSpatialNavigationContainer();let a;return void 0===n?e:(a=i.parentElement&&o!==i&&!M(t)?z(i):z(t),!E(t)&&"BODY"!==t.nodeName||"INPUT"===t.nodeName?e.filter((e=>{const i=z(e),r="IFRAME"===e.nodeName?e.contentDocument.body:null;return o.contains(e)&&e!==t&&r!==t&&D(i,a,n)&&!A(a,i)})):e.filter((e=>{const i=z(e);return o.contains(e)&&(t.contains(e)&&A(a,i)&&e!==t||D(i,a,n))})))}function f(t,e,n){const o=t.getSpatialNavigationContainer(),i=getComputedStyle(o).getPropertyValue("--spatial-navigation-function"),a=z(t);let r,l;switch(i){case"grid":l=e.filter((t=>L(a,z(t),n))),l.length>0&&(e=l),r=K;break;default:r=V}return g(t,e,n,r)}function g(t,e,n,o){let i=null;window.location===window.parent.location||"BODY"!==t.nodeName&&"HTML"!==t.nodeName?i=t.getBoundingClientRect():(i=window.frameElement.getBoundingClientRect(),i.x=0,i.y=0);let a=Number.POSITIVE_INFINITY,r=[];if(e)for(let l=0;l<e.length;l++){const t=o(i,z(e[l]),n);t<a?(a=t,r=[e[l]]):t===a&&r.push(e[l])}return 0===r.length?null:r.length>1&&o===K?g(t,r,n,W):r[0]}function p(){let t=this;do{if(!t.parentElement){t=window.location!==window.parent.location?window.parent.document.documentElement:window.document.documentElement;break}t=t.parentElement}while(!E(t));return t}function h(t){let e=t;do{if(!e.parentElement){e=window.location!==window.parent.location?window.parent.document.documentElement:window.document.documentElement;break}e=e.parentElement}while(!N(e)||!M(e));return e!==document&&e!==document.documentElement||(e=window),e}function w(t={mode:"visible"}){const e=this.parentElement?this:document.body,n=Array.prototype.filter.call(e.getElementsByTagName("*"),_);return"all"===t.mode?n:n.filter(M)}function b(t,e,n,o){if(["beforefocus","notarget"].includes(t)){const i=new CustomEvent("nav"+t,{bubbles:!0,cancelable:!0,detail:{causedTarget:n,dir:o}});return e.dispatchEvent(i)}}function y(t,e){return getComputedStyle(t).getPropertyValue(`--${e}`).trim()}function v(t,e,n,o,i){let a={candidates:u(e,{mode:i}),container:e};for(;n;){if(l(t.spatialNavigationSearch(o,a),o))return;if("visible"===i&&c(e,o))return;{if(!b("notarget",e,t,o))return;e===document||e===document.documentElement?window.location!==window.parent.location&&(e=(t=window.frameElement).ownerDocument.documentElement):e=n,a={candidates:u(e,{mode:i}),container:e};let r=e.getSpatialNavigationContainer();n=r!==e?r:null}}a={candidates:u(e,{mode:i}),container:e},!n&&e&&l(t.spatialNavigationSearch(o,a),o)||b("notarget",a.container,t,o)}function x(t,e,n=0){if(t)switch(e){case"left":t.scrollLeft-=40+n;break;case"right":t.scrollLeft+=40+n;break;case"up":t.scrollTop-=40+n;break;case"down":t.scrollTop+=40+n}}function E(t){return!t.parentElement||"IFRAME"===t.nodeName||N(t)||function(t){return"contain"===y(t,"spatial-navigation-contain")}(t)}function C(t){return"delegable"===y(t,"spatial-navigation-contain")}function N(t){const e=window.getComputedStyle(t,null),n=e.getPropertyValue("overflow-x"),o=e.getPropertyValue("overflow-y");return!!("visible"!==n&&"clip"!==n&&P(t,"left")||"visible"!==o&&"clip"!==o&&P(t,"down"))}function O(t,e){if(t&&"object"===typeof t){if(e&&"string"===typeof e){if(P(t,e)){const n=window.getComputedStyle(t,null),o=n.getPropertyValue("overflow-x"),i=n.getPropertyValue("overflow-y");switch(e){case"left":case"right":return"visible"!==o&&"clip"!==o&&"hidden"!==o;case"up":case"down":return"visible"!==i&&"clip"!==i&&"hidden"!==i}}return!1}return"HTML"===t.nodeName||"BODY"===t.nodeName||N(t)&&P(t)}}function P(t,e){if(t&&"object"===typeof t){if(!e||"string"!==typeof e)return t.scrollWidth>t.clientWidth||t.scrollHeight>t.clientHeight;switch(e){case"left":case"right":return t.scrollWidth>t.clientWidth;case"up":case"down":return t.scrollHeight>t.clientHeight}return!1}}function T(t,e){let n=!1;switch(e){case"left":n=0===t.scrollLeft;break;case"right":n=t.scrollWidth-t.scrollLeft-t.clientWidth===0;break;case"up":n=0===t.scrollTop;break;case"down":n=t.scrollHeight-t.scrollTop-t.clientHeight===0}return n}function S(t,e){if(O(t,e)){const n=t.scrollTop,o=t.scrollLeft,i=t.scrollHeight-t.clientHeight,a=t.scrollWidth-t.clientWidth;switch(e){case"left":return 0===o;case"right":return Math.abs(o-a)<=1;case"up":return 0===n;case"down":return Math.abs(n-i)<=1}}return!1}function B(t){const e=t.getBoundingClientRect();let n=h(t),o=null;return o=n!==window?z(n):new DOMRect(0,0,window.innerWidth,window.innerHeight),!(!A(o,e)||!A(o,e))}function _(t){return!(t.tabIndex<0||function(t){return"A"===t.tagName&&null===t.getAttribute("href")&&null===t.getAttribute("tabIndex")}(t)||function(t){return!!["BUTTON","INPUT","SELECT","TEXTAREA","OPTGROUP","OPTION","FIELDSET"].includes(t.tagName)&&t.disabled}(t)||function(t){return t.inert&&!t.ownerDocument.documentElement.inert}(t)||!function(t){return!!j(t.parentElement)&&!(!j(t)||"0"===t.style.opacity||"0px"===window.getComputedStyle(t).height||"0px"===window.getComputedStyle(t).width)}(t))&&(!!(!t.parentElement||O(t)&&P(t)||t.tabIndex>=0)||void 0)}function M(t){return!t.parentElement||j(t)&&function(t){const e=z(t);if("IFRAME"!==t.nodeName&&(e.top<0||e.left<0||e.top>t.ownerDocument.documentElement.clientHeight||e.left>t.ownerDocument.documentElement.clientWidth))return!1;let n=parseInt(t.offsetWidth)/10,o=parseInt(t.offsetHeight)/10;n=isNaN(n)?1:n,o=isNaN(o)?1:o;const i={middle:[(e.left+e.right)/2,(e.top+e.bottom)/2],leftTop:[e.left+n,e.top+o],rightBottom:[e.right-n,e.bottom-o]};for(const a in i){const e=t.ownerDocument.elementFromPoint(...i[a]);if(t===e||t.contains(e))return!0}return!1}(t)}function k(t,e){const n=z(t),o=z(e||t.getSpatialNavigationContainer());return!(n.left<o.left||n.right>o.right||n.top<o.top||n.bottom>o.bottom)}function j(t){const e=window.getComputedStyle(t,null),n=e.getPropertyValue("visibility");return"none"!==e.getPropertyValue("display")&&!["hidden","collapse"].includes(n)}function A(t,e){const n=t.left<e.right&&t.right>=e.right,o=t.left<=e.left&&t.right>e.left,i=t.top<=e.top&&t.bottom>e.top,a=t.top<e.bottom&&t.bottom>=e.bottom;return(n||o)&&(i||a)}function D(t,e,n){switch(n){case"left":return R(e,t);case"right":return R(t,e);case"up":return I(e,t);case"down":return I(t,e);default:return!1}}function R(t,e){return t.left>=e.right||t.left>=e.left&&t.right>e.right&&t.bottom>e.top&&t.top<e.bottom}function I(t,e){return t.top>=e.bottom||t.top>=e.top&&t.bottom>e.bottom&&t.left<e.right&&t.right>e.left}function L(t,e,n){switch(n){case"left":case"right":return t.bottom>e.top&&t.top<e.bottom;case"up":case"down":return t.right>e.left&&t.left<e.right;default:return!1}}function F(t,e,o){const i=U(o,n,e),a=Math.abs(i.entryPoint.x-i.exitPoint.x),r=Math.abs(i.entryPoint.y-i.exitPoint.y);return Math.sqrt(Math.pow(a,2)+Math.pow(r,2))}function H(t,e,n){const o={left:"right",right:"left",up:"bottom",down:"top"}[n];return Math.abs(t[o]-e[o])}function V(t,e,n){let o=0,i=0;const a=U(n,t,e),r=Math.abs(a.entryPoint.x-a.exitPoint.x),l=Math.abs(a.entryPoint.y-a.exitPoint.y),c=Math.sqrt(Math.pow(r,2)+Math.pow(l,2));let u,d;const s=function(t,e){const n={width:0,height:0,area:0},o=[Math.max(t.left,e.left),Math.max(t.top,e.top)],i=[Math.min(t.right,e.right),Math.min(t.bottom,e.bottom)];n.width=Math.abs(o[0]-i[0]),n.height=Math.abs(o[1]-i[1]),o[0]>=i[0]||o[1]>=i[1]||(n.area=Math.sqrt(n.width*n.height));return n}(t,e),m=s.area;switch(n){case"left":case"right":L(t,e,n)?i=Math.min(s.height/t.height,1):o=t.height/2,u=30*(l+o),d=5*i;break;case"up":case"down":L(t,e,n)?i=Math.min(s.width/t.width,1):o=t.width/2,u=2*(r+o),d=5*i;break;default:u=0,d=0}return c+u-d-m}function W(t,e,n){const o=U(n,t,e),i=Math.abs(o.entryPoint.x-o.exitPoint.x),a=Math.abs(o.entryPoint.y-o.exitPoint.y);return Math.sqrt(Math.pow(i,2)+Math.pow(a,2))}function K(t,e,n){const o=U(n,t,e);return"left"===n||"right"===n?Math.abs(o.entryPoint.x-o.exitPoint.x):Math.abs(o.entryPoint.y-o.exitPoint.y)}function U(t="down",e,o){const i={entryPoint:{x:0,y:0},exitPoint:{x:0,y:0}};if(n){switch(i.exitPoint=e,t){case"left":i.entryPoint.x=o.right;break;case"up":i.entryPoint.y=o.bottom;break;case"right":i.entryPoint.x=o.left;break;case"down":i.entryPoint.y=o.top}switch(t){case"left":case"right":n.y<=o.top?i.entryPoint.y=o.top:n.y<o.bottom?i.entryPoint.y=n.y:i.entryPoint.y=o.bottom;break;case"up":case"down":n.x<=o.left?i.entryPoint.x=o.left:n.x<o.right?i.entryPoint.x=n.x:i.entryPoint.x=o.right}}else{switch(t){case"left":i.exitPoint.x=e.left,i.entryPoint.x=o.right<e.left?o.right:e.left;break;case"up":i.exitPoint.y=e.top,i.entryPoint.y=o.bottom<e.top?o.bottom:e.top;break;case"right":i.exitPoint.x=e.right,i.entryPoint.x=o.left>e.right?o.left:e.right;break;case"down":i.exitPoint.y=e.bottom,i.entryPoint.y=o.top>e.bottom?o.top:e.bottom}switch(t){case"left":case"right":I(e,o)?(i.exitPoint.y=e.top,i.entryPoint.y=o.bottom<e.top?o.bottom:e.top):I(o,e)?(i.exitPoint.y=e.bottom,i.entryPoint.y=o.top>e.bottom?o.top:e.bottom):(i.exitPoint.y=Math.max(e.top,o.top),i.entryPoint.y=i.exitPoint.y);break;case"up":case"down":R(e,o)?(i.exitPoint.x=e.left,i.entryPoint.x=o.right<e.left?o.right:e.left):R(o,e)?(i.exitPoint.x=e.right,i.entryPoint.x=o.left>e.right?o.left:e.right):(i.exitPoint.x=Math.max(e.left,o.left),i.entryPoint.x=i.exitPoint.x)}}return i}function z(t){let n=e&&e.get(t);if(!n){const o=t.getBoundingClientRect();n={top:Number(o.top.toFixed(2)),right:Number(o.right.toFixed(2)),bottom:Number(o.bottom.toFixed(2)),left:Number(o.left.toFixed(2)),width:Number(o.width.toFixed(2)),height:Number(o.height.toFixed(2))},e&&e.set(t,n)}return n}function G(t){const e=window.__spatialNavigation__&&window.__spatialNavigation__.keyMode;window.__spatialNavigation__=!1===t?Y():Object.assign(Y(),function(){function t(t,e){return O(t,e)&&!S(t,e)||!t.parentElement&&!T(t,e)}function e(e,n,o,i){let a=n,r=null;if(a!==document&&a!==document.documentElement||(a=document.body||document.documentElement),(E(a)||"BODY"===a.nodeName)&&"INPUT"!==a.nodeName){"IFRAME"===a.nodeName&&(a=a.contentDocument.body);const n=u(a,i);if(Array.isArray(n)&&n.length>0)return e?d(a,o,n):a.spatialNavigationSearch(o,{candidates:n});if(t(a,o))return e?[]:a}let l=a.getSpatialNavigationContainer(),c=l.parentElement?l.getSpatialNavigationContainer():null;for(c||window.location===window.parent.location||(c=window.parent.document.documentElement);c;){const n=m(a,u(l,i),o,l);if(Array.isArray(n)&&n.length>0){if(r=a.spatialNavigationSearch(o,{candidates:n,container:l}),r)return e?n:r}else{if(t(l,o))return e?[]:a;if(l===document||l===document.documentElement){if(l=window.document.documentElement,window.location!==window.parent.location){if(a=window.frameElement,l=window.parent.document.documentElement,!l.parentElement){c=null;break}c=l.getSpatialNavigationContainer()}}else{if(_(l)&&(a=l),l=c,!l.parentElement){c=null;break}c=l.getSpatialNavigationContainer()}}}if(!c&&l){const t=m(a,u(l,i),o,l);if(Array.isArray(t)&&t.length>0&&(r=a.spatialNavigationSearch(o,{candidates:t,container:l}),r))return e?t:r}if(t(l,o))return r=a,r}return{isContainer:E,isScrollContainer:N,isVisibleInScroller:B,findCandidates:e.bind(null,!0),findNextTarget:e.bind(null,!1),getDistanceFromTarget:(t,e,n)=>(E(t)||"BODY"===t.nodeName)&&"INPUT"!==t.nodeName&&u(t).includes(e)?H(z(t),z(e),n):V(z(t),z(e),n)}}()),window.__spatialNavigation__.keyMode=e,Object.seal(window.__spatialNavigation__)}function Y(){return{enableExperimentalAPIs:G,get keyMode(){return this._keymode?this._keymode:"ARROW"},set keyMode(t){this._keymode=["SHIFTARROW","ARROW","NONE"].includes(t)?t:"ARROW"},setStartingPoint:function(t,e){n=t&&e?{x:t,y:e}:null}}}window.__getSpatNavState=()=>({mapOfBoundRect:e,startingPoint:n,savedSearchOrigin:o,searchOriginRect:i}),window.navigate=r,window.Element.prototype.spatialNavigationSearch=s,window.Element.prototype.focusableAreas=w,window.Element.prototype.getSpatialNavigationContainer=p,window.CSS&&CSS.registerProperty&&(""===window.getComputedStyle(document.documentElement).getPropertyValue("--spatial-navigation-contain")&&CSS.registerProperty({name:"--spatial-navigation-contain",syntax:"auto | contain",inherits:!1,initialValue:"auto"}),""===window.getComputedStyle(document.documentElement).getPropertyValue("--spatial-navigation-action")&&CSS.registerProperty({name:"--spatial-navigation-action",syntax:"auto | focus | scroll",inherits:!1,initialValue:"auto"}),""===window.getComputedStyle(document.documentElement).getPropertyValue("--spatial-navigation-function")&&CSS.registerProperty({name:"--spatial-navigation-function",syntax:"normal | grid",inherits:!1,initialValue:"normal"})),G(!0),window.addEventListener("load",(()=>{a()}))}();document.addEventListener("keyup",(t=>{13===t.keyCode&&(t.preventDefault(),document.activeElement&&document.activeElement.click())}));var r=n("NbAz"),l=n("20a2"),c=n.n(l),u=n("//ZD"),d=function(t){var e,n,o={goto_catalog:u.a.INDEX,goto_mohito:u.a.MOHITO,goto_tropical:u.a.TROPICAL,goto_orangelemonade:u.a.ORANGE_LEMONADE,goto_mintmilk:u.a.MINT_MILK,goto_iceberg:u.a.ICEBERG,goto_chokomilk:u.a.CHOKOMILK,goto_slad:u.a.SLAD,goto_champ:u.a.CHAMP,goto_ale:u.a.ALE,goto_klement:u.a.KLEMENT,goto_prostuda:u.a.PROSTUDA,goto_gogol:u.a.GOGOL}[null===t||void 0===t||null===(e=t.action)||void 0===e?void 0:e.type];o&&(null===(n=c.a.router)||void 0===n||n.push(o))},s=function(){Object(o.useEffect)((function(){(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return{}};return Object(r.createAssistant)({getState:t})})().on("data",d)}),[])},m=n("jT3O"),f=n("Gv25"),g=n("UloT"),p=n("YFqc"),h=n.n(p),w=n("vOnD"),b=n("HALo"),y=i.a.createElement;function v(){var t=Object(m.a)(["\n    background: url(",") no-repeat center center;\n    background-size: cover;\n    width: ",";\n    height: ",";\n"]);return v=function(){return t},t}var x=w.default.div(v(),(function(t){return t.src}),(function(t){var e=t.width;return e?"".concat(e,"px"):"100%"}),(function(t){var e=t.height;return e?"".concat(e,"px"):"100%"})),E=function(t){var e=Object(b.a)({},t);return y(x,e)},C=n("YAxo"),N=i.a.createElement;function O(){var t=Object(m.a)(["\n    padding-left: ","px;\n"]);return O=function(){return t},t}function P(){var t=Object(m.a)(["\n    margin-top: 20px;\n"]);return P=function(){return t},t}function T(){var t=Object(m.a)(["\n    width: ",";\n    display: ",";\n"]);return T=function(){return t},t}function S(){var t=Object(m.a)(["\n    color: rgba(255, 255, 255, 0.56);\n    margin-top: 8px;\n    margin-bottom: 2px;\n    width: ",";\n    display: ",";\n"]);return S=function(){return t},t}function B(){var t=Object(m.a)(["\n    margin-bottom: ","px;\n\n    height: ","px;\n"]);return B=function(){return t},t}var _=Object(w.default)(f.Card)(B(),"mobile"===Object(a.detectDevice)()?8:32,{sberPortal:247,sberBox:336,mobile:165}[Object(a.detectDevice)()]),M=(Object(w.default)(f.Body1)(S(),Object(a.isSberPortal)()?"100px":"100%",Object(a.isSberPortal)()?"inline-block":"block"),Object(w.default)(f.Body3)(T(),Object(a.isSberPortal)()?"calc(100% - 100px)":"100%",Object(a.isSberPortal)()?"inline-block":"block"),w.default.div(P()),Object(w.default)(f.Col)(O(),{sberPortal:12,sberBox:52,mobile:0}[Object(a.detectDevice)()]),function(t){var e=t.children;return N(f.Col,{sizeS:4,sizeM:3,sizeL:4,sizeXL:6},e)}),k=function(){var t,e=Object(o.useRef)(),n=Object(o.useRef)();return Object(o.useEffect)((function(){var t;n.current=(t=function(){return e.current},Object(r.createAssistant)({getState:t})),n.current.on("data",(function(t){t.action}))}),[]),N(i.a.Fragment,null,N(C.a,{label:"\u0411\u0435\u0437\u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u044b\u0435 \u043a\u043e\u043a\u0442\u0435\u0439\u043b\u0438",onBack:null===(t=window.AssistantHost)||void 0===t?void 0:t.close}),N("div",{style:{marginLeft:"auto",marginRight:"auto"}},N(f.Container,null,N(g.Row,null,N(f.Col,{sizeS:4,sizeM:4,sizeL:8,sizeXL:8},N(g.Row,null,N(M,null,N(h.a,{href:u.a.MOHITO},N(_,{outlined:!0,scaleOnFocus:!0,onChange:function(){var t;return null===(t=n.current)||void 0===t?void 0:t.sendData({action:{type:"MOHITO"}})}},N(f.CardBody,null,N(E,{src:(Object(a.detectDevice)(),"/mohito.jpg")}),N(f.CardContent,{cover:!0},N(f.TextBox,null,N(f.TextBoxBigTitle,null,"\u041c\u043e\u0445\u0438\u0442\u043e"))))))),N(M,null,N(h.a,{href:u.a.TROPICAL},N(_,{outlined:!0,scaleOnFocus:!0},N(f.CardBody,null,N(E,{src:(Object(a.detectDevice)(),"/tropical.jpeg")}),N(f.CardContent,{cover:!0},N(f.TextBox,null,N(f.TextBoxBigTitle,null,"\u0422\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u0438\u0439"))))))),N(M,null,N(h.a,{href:u.a.ORANGE_LEMONADE},N(_,{outlined:!0,scaleOnFocus:!0},N(f.CardBody,null,N(E,{src:(Object(a.detectDevice)(),"/orange_lemonade.jpeg")}),N(f.CardContent,{cover:!0},N(f.TextBox,null,N(f.TextBoxBigTitle,null,"\u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u043e\u0432\u044b\u0439 \u043b\u0438\u043c\u043e\u043d\u0430\u0434"))))))),N(M,null,N(h.a,{href:u.a.MINT_MILK},N(_,{outlined:!0,scaleOnFocus:!0},N(f.CardBody,null,N(E,{src:(Object(a.detectDevice)(),"/myatnoe_moloko_1.jpeg")}),N(f.CardContent,{cover:!0},N(f.TextBox,null,N(f.TextBoxBigTitle,null,"\u041c\u044f\u0442\u043d\u043e\u0435 \u043c\u043e\u043b\u043e\u043a\u043e")))))))),N(g.Row,null,N(M,null,N(h.a,{href:u.a.ICEBERG},N(_,{outlined:!0,scaleOnFocus:!0},N(f.CardBody,null,N(E,{src:(Object(a.detectDevice)(),"/iceverg.jpeg")}),N(f.CardContent,{cover:!0},N(f.TextBox,null,N(f.TextBoxBigTitle,null,"\u0410\u0439\u0441\u0431\u0435\u0440\u0433 \u0432 \u043e\u043a\u0435\u0430\u043d\u0435"))))))),N(M,null,N(h.a,{href:u.a.CHOKOMILK},N(_,{outlined:!0,scaleOnFocus:!0},N(f.CardBody,null,N(E,{src:(Object(a.detectDevice)(),"/chokomilk.jpeg")}),N(f.CardContent,{cover:!0},N(f.TextBox,null,N(f.TextBoxBigTitle,null,"\u041c\u043e\u043b\u043e\u0447\u043d\u043e-\u0448\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u044b\u0439 \u043a\u043e\u043a\u0442\u0435\u0439\u043b\u044c"))))))),N(M,null,N(h.a,{href:u.a.SLAD},N(_,{outlined:!0,scaleOnFocus:!0},N(f.CardBody,null,N(E,{src:(Object(a.detectDevice)(),"/slad.png")}),N(f.CardContent,{cover:!0},N(f.TextBox,null,N(f.TextBoxBigTitle,null,"\u0421\u043b\u0430\u0434\u043a\u043e\u0435\u0436\u043a\u0430"))))))),N(M,null,N(h.a,{href:u.a.CHAMP},N(_,{outlined:!0,scaleOnFocus:!0},N(f.CardBody,null,N(E,{src:(Object(a.detectDevice)(),"/champ.jpeg")}),N(f.CardContent,{cover:!0},N(f.TextBox,null,N(f.TextBoxBigTitle,null,"\u0424\u0430\u043b\u044c\u0448\u0438\u0432\u043e\u0435 \u0448\u0430\u043c\u043f\u0430\u043d\u0441\u043a\u043e\u0435")))))))),N(g.Row,null,N(M,null,N(h.a,{href:u.a.ALE},N(_,{outlined:!0,scaleOnFocus:!0},N(f.CardBody,null,N(E,{src:(Object(a.detectDevice)(),"/ale.jpeg")}),N(f.CardContent,{cover:!0},N(f.TextBox,null,N(f.TextBoxBigTitle,null,"\u0418\u043c\u0431\u0438\u0440\u043d\u044b\u0439 \u044d\u043b\u044c"))))))),N(M,null,N(h.a,{href:u.a.KLEMENT},N(_,{outlined:!0,scaleOnFocus:!0},N(f.CardBody,null,N(E,{src:(Object(a.detectDevice)(),"/klement.jpeg")}),N(f.CardContent,{cover:!0},N(f.TextBox,null,N(f.TextBoxBigTitle,null,"\u0421\u0435\u043d\u0442-\u041a\u043b\u0435\u043c\u0435\u043d\u0442"))))))),N(M,null,N(h.a,{href:u.a.PROSTUDA},N(_,{outlined:!0,scaleOnFocus:!0},N(f.CardBody,null,N(E,{src:(Object(a.detectDevice)(),"/prostuda.jpeg")}),N(f.CardContent,{cover:!0},N(f.TextBox,null,N(f.TextBoxBigTitle,null,"\u0423\u0434\u0430\u0440 \u043f\u043e \u043f\u0440\u043e\u0441\u0442\u0443\u0434\u0435"))))))),N(M,null,N(h.a,{href:u.a.GOGOL},N(_,{outlined:!0,scaleOnFocus:!0},N(f.CardBody,null,N(E,{src:(Object(a.detectDevice)(),"/gogol.jpeg")}),N(f.CardContent,{cover:!0},N(f.TextBox,null,N(f.TextBoxBigTitle,null,"\u0413\u043e\u0433\u043e\u043b\u044c-\u043c\u043e\u0433\u043e\u043b\u044c")))))))))))))},j=n("soUV"),A=i.a.createElement,D=function(){return s(),A(j.a,{noPadding:Object(a.isSberPortal)()},A(k,null))};e.default=D}}]);
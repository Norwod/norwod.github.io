_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"4R1y":function(n,t,e){"use strict";var r=e("jT3O"),a=e("cDcd"),o=e.n(a),u=e("Gv25"),i=e("vOnD"),c=o.a.createElement;function l(){var n=Object(r.a)(["\n    margin: 26px 0;\n    overflow-y: auto;\n\n    /* stylelint-disable */\n    &::after {\n        content: '';\n        display: block;\n        min-width: 1px;\n        height: 100%;\n    }\n\n    li::before {\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n    }\n\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    /* stylelint-enable */\n"]);return l=function(){return n},n}var s=Object(i.default)(u.Tabs)(l());t.a=function(n){var t=n.children;return c(s,{size:"s",view:"secondary",stretch:!0,scaleOnPress:!0,tabIndex:-1},t)}},"5W5Q":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/schedule",function(){return e("YFi/")}])},"YFi/":function(n,t,e){"use strict";e.r(t);var r=e("xvhg"),a=e("cDcd"),o=e.n(a),u=e("Gv25"),i=e("4R1y"),c=e("YAxo"),l=e("jT3O"),s=e("vOnD"),f=e("HALo"),d=e("dhJC"),b=e("K6/a"),p=e("weFX"),v=o.a.createElement;function y(){var n=Object(l.a)(["\n        margin-left: -24px;\n        padding-left: 24px;\n        width: calc(100% + 48px);\n        ",";\n    "]);return y=function(){return n},n}function h(){var n=Object(l.a)(["\n    outline: none;\n    ","\n\n    &::before {\n        ","\n    }\n"]);return h=function(){return n},n}var m=s.default.div(h(),Object(p.isSberBox)()&&Object(s.css)(y(),b.addFocus),b.applyRoundness),j=function(n){var t=n.children,e=Object(d.a)(n,["children"]);return v(m,Object(f.a)({tabIndex:0,roundness:16},e),t)},O=o.a.createElement;function w(){var n=Object(l.a)(["\n    color: rgba(255, 255, 255, 0.56);\n    margin-top: 16px;\n"]);return w=function(){return n},n}function g(){var n=Object(l.a)(["\n    margin-top: 16px;\n"]);return g=function(){return n},n}var x={padding:"24px 0"},E=Object(s.default)(u.Body2)(g()),_=Object(s.default)(u.Footnote1)(w()),S=function(n){var t=n.title,e=n.subTitle,r=n.time,a=n.place;return O(j,null,O("div",{style:x},O(u.Body3,null,r),O(E,null,t),O(_,null,null!==e&&void 0!==e?e:null),O(_,null,a)))},A=e("soUV"),T=o.a.createElement,I=function(n){var t=n.day;return T(o.a.Fragment,null,t.map((function(n){return T(S,{time:n.time,title:n.rus.label,subTitle:n.rus.speaker,place:n.rus.hall})})))};t.default=function(){var n=o.a.useState(0),t=Object(r.a)(n,2),e=t[0],l=t[1],s=Object(a.useState)([]),f=s[0],d=s[1];return Object(a.useEffect)((function(){fetch("https://534526.selcdn.ru/Sber%20on%20SPIEF%202021/sessions.json").then((function(n){return n.json()})).then((function(n){return n.programme[0]})).then(Object.values).then(d)}),[]),T(A.b,null,T(c.a,{label:"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),T(u.Container,null,T(i.a,null,f.map((function(n,t){return T(u.TabItem,{key:"item:".concat(t),isActive:t===e,onClick:function(){l(t)},tabIndex:0},"".concat(t+2," \u0418\u044e\u043d\u044f"))}))),f[e]&&T(I,{day:f[e]})))}},cDcd:function(n,t){n.exports=React},xvhg:function(n,t,e){"use strict";function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function a(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var e=[],r=!0,a=!1,o=void 0;try{for(var u,i=n[Symbol.iterator]();!(r=(u=i.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return e}}(n,t)||function(n,t){if(n){if("string"===typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(t,"a",(function(){return a}))}},[["5W5Q",1,0,2]]]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"//ZD":function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.INDEX="/",e.MOHITO="/mohito",e.TROPICAL="/tropical",e.ORANGE_LEMONADE="/orange_lemonade",e.MINT_MILK="/mint_milk",e.ICEBERG="/iceberg",e.CHOKOMILK="/chokomilk",e.SLAD="/slad",e.CHAMP="/champ",e.ALE="/ale",e.KLEMENT="/klement",e.PROSTUDA="/prostuda",e.GOGOL="/gogol"}(r||(r={}))},DCTi:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mint_milk",function(){return n("ex+C")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cDcd:function(e,t){e.exports=React},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var a=o(n("cDcd")),i=n("elyg"),l=n("nOHt"),c=n("vNVm"),u={};function s(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,l.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],l=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):l||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,m=e.replace,y=e.shallow,h=e.scroll,g=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var b=a.Children.only(v),E=b&&"object"===typeof b&&b.ref,L=(0,c.useIntersection)({rootMargin:"200px"}),C=r(L,2),w=C[0],_=C[1],M=a.default.useCallback((function(e){w(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[E,w]);(0,a.useEffect)((function(){var e=_&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof g?g:n&&n.locale,o=u[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(n,d,p,{locale:r})}),[p,d,_,g,t,n]);var O={ref:M,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,l,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==l&&(l=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:l}))}(e,n,d,p,m,y,h,g)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),s(n,d,p,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var I="undefined"!==typeof g?g:n&&n.locale,A=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(p,I,n&&n.locales,n&&n.domainLocales);O.href=A||(0,i.addBasePath)((0,i.addLocale)(p,I,n&&n.defaultLocale))}return a.default.cloneElement(b,O)};t.default=f},"ex+C":function(e,t,n){"use strict";n.r(t);var r=n("xvhg"),o=n("cDcd"),a=n.n(o),i=n("Gv25"),l=n("UloT"),c=n("YFqc"),u=n.n(c),s=n("YAxo"),f=n("soUV"),d=n("//ZD"),p=a.a.createElement;t.default=function(){var e=a.a.useState(0),t=Object(r.a)(e,2);t[0],t[1];return p(f.b,null,p(s.a,{label:"\u041c\u044f\u0442\u043d\u043e\u0435 \u043c\u043e\u043b\u043e\u043a\u043e"}),p(i.Container,null,p(i.Col,{sizeS:4,sizeM:5,sizeL:6,sizeXL:8,style:{marginLeft:"auto",marginRight:"auto"}},p(i.Card,{style:{width:"100%",margin:"2%",marginLeft:"5%"},tabIndex:-1,outlined:!0,scaleOnFocus:!1},p(i.CardBody,null,p(i.CardMedia,{src:"/myatnoe_moloko.jpeg",ratio:"2/1"}),p(i.CardContent,{cover:!1},p(l.Row,{style:{marginLeft:"1%"}},"\u041c\u044f\u0442\u043d\u043e\u0435 \u043c\u043e\u043b\u043e\u043a\u043e"),p(i.TextBoxSubTitle,{style:{color:"#E9967A"}},p("ul",null,p("li",null,"\u041c\u043e\u043b\u043e\u043a\u043e - 500 \u043c\u043b"),p("li",null,"\u0421\u0430\u0445\u0430\u0440 - 2 \u0441\u0442.\u043b"),p("li",null,"\u041c\u044f\u0442\u0430 - 2-3 \u0432\u0435\u0442\u043e\u0447\u043a\u0438"))),p(l.Row,{style:{marginLeft:"1%"}},"\u041f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u0435:",p("p",null,"\u0412 \u043a\u0430\u0441\u0442\u0440\u044e\u043b\u044e \u0432\u043b\u0438\u0442\u044c \u043c\u043e\u043b\u043e\u043a\u043e, \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0430\u0445\u0430\u0440. \u041c\u044f\u0442\u0443 \u043f\u043e\u043c\u044b\u0442\u044c \u0438 \u0441\u043b\u0435\u0433\u043a\u0430 \u043f\u0435\u0440\u0435\u0442\u0435\u0440\u0435\u0442\u044c \u0432 \u0440\u0443\u043a\u0430\u0445. \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u044f\u0442\u0443 \u0432 \u043c\u043e\u043b\u043e\u043a\u043e \u0438 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0441\u0442\u0440\u044e\u043b\u044e \u043d\u0430 \u043e\u0433\u043e\u043d\u044c. \u0414\u043e\u0432\u0435\u0441\u0442\u0438 \u043c\u043e\u043b\u043e\u043a\u043e \u0441 \u043c\u044f\u0442\u043e\u0439 \u0434\u043e \u043a\u0438\u043f\u0435\u043d\u0438\u044f, \u043f\u0440\u043e\u043a\u0438\u043f\u044f\u0442\u0438\u0442\u044c 2 \u043c\u0438\u043d\u0443\u0442\u044b \u043d\u0430 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e\u043c \u043e\u0433\u043d\u0435. \u0412\u0430\u0436\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u043c\u043e\u043b\u043e\u043a\u043e \u043d\u0435 \u0443\u0431\u0435\u0436\u0430\u043b\u043e. \u0421\u043d\u044f\u0442\u044c \u043c\u043e\u043b\u043e\u043a\u043e \u0441 \u043e\u0433\u043d\u044f \u0438 \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0441\u0442\u044b\u0432\u0430\u0442\u044c \u043d\u0430 30 \u043c\u0438\u043d\u0443\u0442. \u0417\u0430\u0442\u0435\u043c \u043f\u0440\u043e\u0446\u0435\u0434\u0438\u0442\u044c \u043c\u043e\u043b\u043e\u043a\u043e \u0438 \u0443\u0431\u0440\u0430\u0442\u044c \u0435\u0433\u043e \u0432 \u0445\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0438\u043a. \u041f\u043e\u043a\u0430 \u043c\u043e\u043b\u043e\u043a\u043e \u043e\u0445\u043b\u0430\u0436\u0434\u0430\u0435\u0442\u0441\u044f, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0441\u0442\u0430\u043a\u0430\u043d\u0447\u0438\u043a\u0438 \u0434\u043b\u044f \u043f\u043e\u0434\u0430\u0447\u0438. \u041d\u0430 \u0432\u043e\u0434\u044f\u043d\u043e\u0439 \u0431\u0430\u043d\u0435 \u0440\u0430\u0441\u0442\u043e\u043f\u0438\u0442\u044c \u043f\u0430\u0440\u0443 \u0434\u043e\u043b\u0435\u043a \u0448\u043e\u043a\u043e\u043b\u0430\u0434\u0430. \u041d\u0430 \u043f\u043b\u043e\u0441\u043a\u0443\u044e \u0442\u0430\u0440\u0435\u043b\u043a\u0443 \u0432\u044b\u0441\u044b\u043f\u0430\u0442\u044c \u0446\u0432\u0435\u0442\u043d\u0443\u044e \u043f\u043e\u0441\u044b\u043f\u043a\u0443. \u041e\u0431\u043c\u0430\u043a\u043d\u0443\u0442\u044c \u043a\u0440\u0430\u0439 \u0441\u0442\u0430\u043a\u0430\u043d\u0447\u0438\u043a\u043e\u0432 \u0432 \u0440\u0430\u0441\u0442\u043e\u043f\u043b\u0435\u043d\u043d\u044b\u0439 \u0448\u043e\u043a\u043e\u043b\u0430\u0434, \u0430 \u0437\u0430\u0442\u0435\u043c \u043e\u0431\u043c\u0430\u043a\u043d\u0443\u0442\u044c \u0432 \u0446\u0432\u0435\u0442\u043d\u0443\u044e \u043f\u043e\u0441\u044b\u043f\u043a\u0443. \u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0430\u043a\u0430\u043d\u0447\u0438\u043a\u0438 \u0432 \u0445\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0438\u043a \u043d\u0430 \u043f\u0430\u0440\u0443 \u043c\u0438\u043d\u0443\u0442. \u0420\u0430\u0437\u043b\u0438\u0442\u044c \u043e\u0445\u043b\u0430\u0436\u0434\u0451\u043d\u043d\u043e\u0435 \u043c\u044f\u0442\u043d\u043e\u0435 \u043c\u043e\u043b\u043e\u043a\u043e \u043f\u043e \u0441\u0442\u0430\u043a\u0430\u043d\u0447\u0438\u043a\u0430\u043c, \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u0430\u0440\u0448\u043c\u0435\u043b\u043b\u043e\u0443 \u0438 \u043f\u043e\u0434\u0430\u0442\u044c \u0441 \u0442\u0440\u0443\u0431\u043e\u0447\u043a\u043e\u0439. \u041f\u0440\u0438\u044f\u0442\u043d\u043e\u0433\u043e \u0430\u043f\u043f\u0435\u0442\u0438\u0442\u0430!")),p(u.a,{href:d.a.INDEX},p(i.Button,{text:"C\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043a\u0442\u0435\u0439\u043b\u0435\u0439",view:"primary",size:"s",scaleOnInteraction:!1,outlined:!0,stretch:!0,style:{marginTop:"1em"}}))))))))}},vNVm:function(e,t,n){"use strict";var r=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=(0,o.useRef)(),u=(0,o.useState)(!1),s=r(u,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n("cDcd"),a=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var l=new Map},xvhg:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return o}))}},[["DCTi",1,0,2]]]);
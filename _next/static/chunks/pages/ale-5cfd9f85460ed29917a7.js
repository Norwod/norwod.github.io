_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"//ZD":function(e,n,t){"use strict";var o;t.d(n,"a",(function(){return o})),function(e){e.INDEX="/",e.MOHITO="/mohito",e.TROPICAL="/tropical",e.ORANGE_LEMONADE="/orange_lemonade",e.MINT_MILK="/mint_milk",e.ICEBERG="/iceberg",e.CHOKOMILK="/chokomilk",e.SLAD="/slad",e.CHAMP="/champ",e.ALE="/ale",e.KLEMENT="/klement",e.PROSTUDA="/prostuda",e.GOGOL="/gogol"}(o||(o={}))},YFqc:function(e,n,t){e.exports=t("cTJO")},ai1V:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ale",function(){return t("oc8e")}])},cDcd:function(e,n){e.exports=React},cTJO:function(e,n,t){"use strict";var o=t("zoAU"),r=t("7KCV");n.__esModule=!0,n.default=void 0;var a=r(t("cDcd")),l=t("elyg"),c=t("nOHt"),i=t("vNVm"),u={};function s(e,n,t,o){if(e&&(0,l.isLocalURL)(n)){e.prefetch(n,t,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;u[n+"%"+t+(r?"%"+r:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,c.useRouter)(),r=t&&t.pathname||"/",f=a.default.useMemo((function(){var n=(0,l.resolveHref)(r,e.href,!0),t=o(n,2),a=t[0],c=t[1];return{href:a,as:e.as?(0,l.resolveHref)(r,e.as):c||a}}),[r,e.href,e.as]),d=f.href,p=f.as,v=e.children,m=e.replace,h=e.shallow,g=e.scroll,L=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var E=a.Children.only(v),y=E&&"object"===typeof E&&E.ref,M=(0,i.useIntersection)({rootMargin:"200px"}),_=o(M,2),C=_[0],O=_[1],b=a.default.useCallback((function(e){C(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,C]);(0,a.useEffect)((function(){var e=O&&n&&(0,l.isLocalURL)(d),o="undefined"!==typeof L?L:t&&t.locale,r=u[d+"%"+p+(o?"%"+o:"")];e&&!r&&s(t,d,p,{locale:o})}),[p,d,O,L,n,t]);var w={ref:b,onClick:function(e){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,n,t,o,r,a,c,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(t))&&(e.preventDefault(),null==c&&(c=o.indexOf("#")<0),n[r?"replace":"push"](t,o,{shallow:a,locale:i,scroll:c}))}(e,t,d,p,m,h,g,L)},onMouseEnter:function(e){(0,l.isLocalURL)(d)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),s(t,d,p,{priority:!0}))}};if(e.passHref||"a"===E.type&&!("href"in E.props)){var I="undefined"!==typeof L?L:t&&t.locale,R=t&&t.isLocaleDomain&&(0,l.getDomainLocale)(p,I,t&&t.locales,t&&t.domainLocales);w.href=R||(0,l.addBasePath)((0,l.addLocale)(p,I,t&&t.defaultLocale))}return a.default.cloneElement(E,w)};n.default=f},oc8e:function(e,n,t){"use strict";t.r(n);var o=t("cDcd"),r=t.n(o),a=t("Gv25"),l=t("UloT"),c=t("//ZD"),i=t("YAxo"),u=t("soUV"),s=t("YFqc"),f=t.n(s),d=r.a.createElement;n.default=function(){return d(u.a,null,d(i.a,{label:"\u0411\u0435\u0437\u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u044b\u0439 \u0438\u043c\u0431\u0438\u0440\u043d\u044b\u0439 \u044d\u043b\u044c"}),d(a.Col,{sizeS:4,sizeM:4,sizeL:6,sizeXL:8,style:{marginLeft:"auto",marginRight:"auto"}},d(a.Card,{tabIndex:-1,outlined:!0,scaleOnFocus:!1},d(a.CardBody,null,d(a.CardMedia,{src:"/ale.jpeg",ratio:"2/1"}),d(a.CardContent,{cover:!1},d(l.Row,{style:{marginLeft:"1%"}},"\u0411\u0435\u0437\u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u044b\u0439 \u0438\u043c\u0431\u0438\u0440\u043d\u044b\u0439 \u044d\u043b\u044c"),d(a.TextBoxSubTitle,{style:{color:"#E9967A"}},d("ul",null,d("li",null,"\u0418\u043c\u0431\u0438\u0440\u044c \u0441\u0432\u0435\u0436\u0438\u0439 \u2014 150 \u0433"),d("li",null,"\u0412\u043e\u0434\u0430 \u043f\u0438\u0442\u044c\u0435\u0432\u0430\u044f \u2014 250 \u043c\u043b"),d("li",null,"\u0421\u0430\u0445\u0430\u0440 \u2014 100 \u0433"),d("li",null,"\u0412\u043e\u0434\u0430 \u0433\u0430\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u2014 0,5 \u043b"),d("li",null,"\u041b\u0430\u0439\u043c \u2014 80 \u0433 (1 \u0448\u0442.)"),d("li",null,"\u041b\u0438\u0441\u0442\u044c\u044f \u043c\u044f\u0442\u044b - \u043f\u043e \u0432\u043a\u0443\u0441\u0443"))),d(l.Row,{style:{marginLeft:"1%"}},"\u041f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u0435:",d("p",null," \u0412\u0441\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043e\u0445\u043b\u0430\u0434\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u0434 \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u0435\u043c. \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0438 \u043d\u0430\u0440\u0435\u0437\u0430\u0442\u044c \u0442\u043e\u043d\u043a\u0438\u043c\u0438 \u043f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430\u043c\u0438 \u043a\u043e\u0440\u0435\u043d\u044c \u0438\u043c\u0431\u0438\u0440\u044f. \u041d\u0430\u0440\u0435\u0437\u0430\u043d\u043d\u044b\u0439 \u0438\u043c\u0431\u0438\u0440\u044c \u0437\u0430\u043b\u0438\u0442\u044c \u0441\u0442\u0430\u043a\u0430\u043d\u043e\u043c \u0432\u043e\u0434\u044b \u0438 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u0441\u0440\u0435\u0434\u043d\u0438\u0439 \u043e\u0433\u043e\u043d\u044c. \u0414\u043e\u0432\u0435\u0441\u0442\u0438 \u0434\u043e \u043a\u0438\u043f\u0435\u043d\u0438\u044f. \u041a\u0438\u043f\u044f\u0442\u0438\u0442\u044c \u043d\u0430 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e\u043c \u043e\u0433\u043d\u0435 5 \u043c\u0438\u043d\u0443\u0442, \u0437\u0430\u0442\u0435\u043c \u0441\u043d\u044f\u0442\u044c \u0441 \u043e\u0433\u043d\u044f, \u043d\u0430\u043a\u0440\u044b\u0442\u044c \u0438 \u0434\u0430\u0442\u044c \u043d\u0430\u0441\u0442\u043e\u044f\u0442\u044c\u0441\u044f \u043e\u043a\u043e\u043b\u043e 1 \u0447\u0430\u0441\u0430. \u041f\u0440\u043e\u0446\u0435\u0434\u0438\u0442\u044c \u0436\u0438\u0434\u043a\u043e\u0441\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u0441\u0438\u0442\u043e. \u0412\u0430\u0440\u0435\u043d\u044b\u0439 \u0438\u043c\u0431\u0438\u0440\u044c \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u043e\u0441\u0438\u0442\u044c. \u0416\u0438\u0434\u043a\u043e\u0441\u0442\u044c \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0432 \u043a\u0430\u0441\u0442\u0440\u044e\u043b\u044e, \u0437\u0430\u0441\u044b\u043f\u0430\u0442\u044c \u0441\u0430\u0445\u0430\u0440\u043e\u043c \u0438 \u043d\u0430\u0433\u0440\u0435\u0442\u044c \u0434\u043e \u043f\u043e\u043b\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u044f \u0441\u0430\u0445\u0430\u0440\u0430. \u0421\u043d\u044f\u0442\u044c \u0441 \u043e\u0433\u043d\u044f \u0441\u0438\u0440\u043e\u043f \u0438 \u043e\u0445\u043b\u0430\u0434\u0438\u0442\u044c. \u041f\u0435\u0440\u0435\u043b\u0438\u0442\u044c \u0432 \u0431\u0430\u043d\u043e\u0447\u043a\u0443 \u0438\u043b\u0438 \u0431\u0443\u0442\u044b\u043b\u043e\u0447\u043a\u0443 \u0441 \u043a\u0440\u044b\u0448\u043a\u043e\u0439 \u0438 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432 \u0445\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0438\u043a\u0435. \u0414\u043b\u044f \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u043c\u0431\u0438\u0440\u043d\u043e\u0433\u043e \u044d\u043b\u044f \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u0432 \u0441\u0442\u0430\u043a\u0430\u043d \u043b\u0435\u0434 \u0438 \u043b\u0438\u0441\u0442\u044c\u044f \u043c\u044f\u0442\u044b (\u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e 3-4 \u043b\u0438\u0441\u0442\u0438\u043a\u0430 \u0432 \u043a\u0430\u0436\u0434\u044b\u0439 \u0441\u0442\u0430\u043a\u0430\u043d). \u0412\u044b\u0434\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043a \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u043a\u0438 \u043b\u0430\u0439\u043c\u0430. \u0417\u0430\u0442\u0435\u043c \u043d\u0430\u043b\u0438\u0442\u044c \u0432 \u0431\u043e\u043a\u0430\u043b \u0438\u043c\u0431\u0438\u0440\u043d\u044b\u0439 \u0441\u0438\u0440\u043e\u043f \u0438 \u0433\u0430\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0443\u044e \u0432\u043e\u0434\u0443 \u0432 \u0442\u0430\u043a\u043e\u043c \u0441\u043e\u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0438: 1 \u0447\u0430\u0441\u0442\u044c \u0441\u043e\u043a\u0430 \u043b\u0430\u0439\u043c\u0430, 2 \u0447\u0430\u0441\u0442\u0438 \u0438\u043c\u0431\u0438\u0440\u043d\u043e\u0433\u043e \u0441\u0438\u0440\u043e\u043f\u0430 \u0438 3 \u0447\u0430\u0441\u0442\u0438 \u0441\u0438\u043b\u044c\u043d\u043e \u0433\u0430\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0432\u043e\u0434\u044b. \u0423\u043a\u0440\u0430\u0441\u0438\u0442\u044c \u0438\u043c\u0431\u0438\u0440\u043d\u044b\u0439 \u044d\u043b\u044c \u043b\u0438\u0441\u0442\u044c\u044f\u043c\u0438 \u043c\u044f\u0442\u044b \u0438 \u043f\u043e\u0434\u0430\u0432\u0430\u0439\u0442\u0435. \u041e\u0441\u0432\u0435\u0436\u0430\u044e\u0449\u0438\u0439 \u0431\u0435\u0437\u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u044b\u0439 \u0438\u043c\u0431\u0438\u0440\u043d\u044b\u0439 \u044d\u043b\u044c \u043d\u0430 \u043c\u0438\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0439 \u0432\u043e\u0434\u0435 \u0433\u043e\u0442\u043e\u0432.")),d(f.a,{href:c.a.GOGOL},d(a.Button,{text:"C\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043a\u0442\u0435\u0439\u043b\u0435\u0439",view:"primary",size:"s",scaleOnInteraction:!1,outlined:!0,stretch:!0,style:{marginTop:"1em"}})))))))}},vNVm:function(e,n,t){"use strict";var o=t("zoAU");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!l,i=(0,r.useRef)(),u=(0,r.useState)(!1),s=o(u,2),f=s[0],d=s[1],p=(0,r.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||f||e&&e.tagName&&(i.current=function(e,n,t){var o=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var o=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:r,elements:o}),t}(t),r=o.id,a=o.observer,l=o.elements;return l.set(e,n),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),c.delete(r))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,r.useEffect)((function(){if(!l&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var r=t("cDcd"),a=t("0G5g"),l="undefined"!==typeof IntersectionObserver;var c=new Map}},[["ai1V",1,0,2]]]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"//ZD":function(e,n,t){"use strict";var r;t.d(n,"a",(function(){return r})),function(e){e.INDEX="/",e.MOHITO="/mohito",e.TROPICAL="/tropical",e.ORANGE_LEMONADE="/orange_lemonade",e.MINT_MILK="/mint_milk",e.ICEBERG="/iceberg",e.CHOKOMILK="/chokomilk",e.SLAD="/slad",e.CHAMP="/champ",e.ALE="/ale",e.KLEMENT="/klement",e.PROSTUDA="/prostuda",e.GOGOL="/gogol"}(r||(r={}))},YFqc:function(e,n,t){e.exports=t("cTJO")},ai1V:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ale",function(){return t("oc8e")}])},cDcd:function(e,n){e.exports=React},cTJO:function(e,n,t){"use strict";var r=t("zoAU"),o=t("7KCV");n.__esModule=!0,n.default=void 0;var a=o(t("cDcd")),l=t("elyg"),i=t("nOHt"),c=t("vNVm"),u={};function s(e,n,t,r){if(e&&(0,l.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),o=t&&t.pathname||"/",f=a.default.useMemo((function(){var n=(0,l.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?(0,l.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,m=e.replace,g=e.shallow,h=e.scroll,L=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var y=a.Children.only(v),E=y&&"object"===typeof y&&y.ref,C=(0,c.useIntersection)({rootMargin:"200px"}),M=r(C,2),_=M[0],b=M[1],w=a.default.useCallback((function(e){_(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[E,_]);(0,a.useEffect)((function(){var e=b&&n&&(0,l.isLocalURL)(d),r="undefined"!==typeof L?L:t&&t.locale,o=u[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(t,d,p,{locale:r})}),[p,d,b,L,n,t]);var O={ref:w,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:c,scroll:i}))}(e,t,d,p,m,g,h,L)},onMouseEnter:function(e){(0,l.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),s(t,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var I="undefined"!==typeof L?L:t&&t.locale,R=t&&t.isLocaleDomain&&(0,l.getDomainLocale)(p,I,t&&t.locales,t&&t.domainLocales);O.href=R||(0,l.addBasePath)((0,l.addLocale)(p,I,t&&t.defaultLocale))}return a.default.cloneElement(y,O)};n.default=f},oc8e:function(e,n,t){"use strict";t.r(n);var r=t("cDcd"),o=t.n(r),a=t("Gv25"),l=t("UloT"),i=t("//ZD"),c=t("YAxo"),u=t("soUV"),s=t("YFqc"),f=t.n(s),d=o.a.createElement;n.default=function(){return d(u.b,null,d(c.a,{label:"\u0411\u0435\u0437\u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u044b\u0439 \u0438\u043c\u0431\u0438\u0440\u043d\u044b\u0439 \u044d\u043b\u044c1"}),d(a.Container,null,d(a.Col,{sizeS:4,sizeM:5,sizeL:6,sizeXL:8,style:{marginLeft:"auto",marginRight:"auto"}},d(a.Card,{style:{width:"100%",margin:"2%",marginLeft:"5%"},tabIndex:-1,outlined:!0,scaleOnFocus:!1},d(a.CardBody,null,d(a.CardMedia,{src:"/ale.jpeg",ratio:"2/1"}),d(a.CardContent,{cover:!1},d(l.Row,{style:{marginLeft:"1%"}},"\u0411\u0435\u0437\u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u044b\u0439 \u0438\u043c\u0431\u0438\u0440\u043d\u044b\u0439 \u044d\u043b\u044c"),d(a.TextBoxSubTitle,{style:{color:"#E9967A"}},d("ul",null,d("li",null,"\u0418\u043c\u0431\u0438\u0440\u044c \u0441\u0432\u0435\u0436\u0438\u0439 \u2014 150 \u0433"),d("li",null,"\u0412\u043e\u0434\u0430 \u043f\u0438\u0442\u044c\u0435\u0432\u0430\u044f \u2014 250 \u043c\u043b"),d("li",null,"\u0421\u0430\u0445\u0430\u0440 \u2014 100 \u0433"),d("li",null,"\u0412\u043e\u0434\u0430 \u0433\u0430\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u2014 0,5 \u043b"),d("li",null,"\u041b\u0430\u0439\u043c \u2014 80 \u0433 (1 \u0448\u0442.)"),d("li",null,"\u041b\u0438\u0441\u0442\u044c\u044f \u043c\u044f\u0442\u044b - \u043f\u043e \u0432\u043a\u0443\u0441\u0443"))),d(l.Row,{style:{marginLeft:"1%"}},"\u041f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u0435:",d("p",null," \u0412\u0441\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043e\u0445\u043b\u0430\u0434\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u0434 \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u0435\u043c. \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0438 \u043d\u0430\u0440\u0435\u0437\u0430\u0442\u044c \u0442\u043e\u043d\u043a\u0438\u043c\u0438 \u043f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430\u043c\u0438 \u043a\u043e\u0440\u0435\u043d\u044c \u0438\u043c\u0431\u0438\u0440\u044f. \u041d\u0430\u0440\u0435\u0437\u0430\u043d\u043d\u044b\u0439 \u0438\u043c\u0431\u0438\u0440\u044c \u0437\u0430\u043b\u0438\u0442\u044c \u0441\u0442\u0430\u043a\u0430\u043d\u043e\u043c \u0432\u043e\u0434\u044b \u0438 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u0441\u0440\u0435\u0434\u043d\u0438\u0439 \u043e\u0433\u043e\u043d\u044c. \u0414\u043e\u0432\u0435\u0441\u0442\u0438 \u0434\u043e \u043a\u0438\u043f\u0435\u043d\u0438\u044f. \u041a\u0438\u043f\u044f\u0442\u0438\u0442\u044c \u043d\u0430 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e\u043c \u043e\u0433\u043d\u0435 5 \u043c\u0438\u043d\u0443\u0442, \u0437\u0430\u0442\u0435\u043c \u0441\u043d\u044f\u0442\u044c \u0441 \u043e\u0433\u043d\u044f, \u043d\u0430\u043a\u0440\u044b\u0442\u044c \u0438 \u0434\u0430\u0442\u044c \u043d\u0430\u0441\u0442\u043e\u044f\u0442\u044c\u0441\u044f \u043e\u043a\u043e\u043b\u043e 1 \u0447\u0430\u0441\u0430. \u041f\u0440\u043e\u0446\u0435\u0434\u0438\u0442\u044c \u0436\u0438\u0434\u043a\u043e\u0441\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u0441\u0438\u0442\u043e. \u0412\u0430\u0440\u0435\u043d\u044b\u0439 \u0438\u043c\u0431\u0438\u0440\u044c \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u043e\u0441\u0438\u0442\u044c. \u0416\u0438\u0434\u043a\u043e\u0441\u0442\u044c \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0432 \u043a\u0430\u0441\u0442\u0440\u044e\u043b\u044e, \u0437\u0430\u0441\u044b\u043f\u0430\u0442\u044c \u0441\u0430\u0445\u0430\u0440\u043e\u043c \u0438 \u043d\u0430\u0433\u0440\u0435\u0442\u044c \u0434\u043e \u043f\u043e\u043b\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u044f \u0441\u0430\u0445\u0430\u0440\u0430. \u0421\u043d\u044f\u0442\u044c \u0441 \u043e\u0433\u043d\u044f \u0441\u0438\u0440\u043e\u043f \u0438 \u043e\u0445\u043b\u0430\u0434\u0438\u0442\u044c. \u041f\u0435\u0440\u0435\u043b\u0438\u0442\u044c \u0432 \u0431\u0430\u043d\u043e\u0447\u043a\u0443 \u0438\u043b\u0438 \u0431\u0443\u0442\u044b\u043b\u043e\u0447\u043a\u0443 \u0441 \u043a\u0440\u044b\u0448\u043a\u043e\u0439 \u0438 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432 \u0445\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0438\u043a\u0435. \u0414\u043b\u044f \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u043c\u0431\u0438\u0440\u043d\u043e\u0433\u043e \u044d\u043b\u044f \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u0432 \u0441\u0442\u0430\u043a\u0430\u043d \u043b\u0435\u0434 \u0438 \u043b\u0438\u0441\u0442\u044c\u044f \u043c\u044f\u0442\u044b (\u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e 3-4 \u043b\u0438\u0441\u0442\u0438\u043a\u0430 \u0432 \u043a\u0430\u0436\u0434\u044b\u0439 \u0441\u0442\u0430\u043a\u0430\u043d). \u0412\u044b\u0434\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043a \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u043a\u0438 \u043b\u0430\u0439\u043c\u0430. \u0417\u0430\u0442\u0435\u043c \u043d\u0430\u043b\u0438\u0442\u044c \u0432 \u0431\u043e\u043a\u0430\u043b \u0438\u043c\u0431\u0438\u0440\u043d\u044b\u0439 \u0441\u0438\u0440\u043e\u043f \u0438 \u0433\u0430\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0443\u044e \u0432\u043e\u0434\u0443 \u0432 \u0442\u0430\u043a\u043e\u043c \u0441\u043e\u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0438: 1 \u0447\u0430\u0441\u0442\u044c \u0441\u043e\u043a\u0430 \u043b\u0430\u0439\u043c\u0430, 2 \u0447\u0430\u0441\u0442\u0438 \u0438\u043c\u0431\u0438\u0440\u043d\u043e\u0433\u043e \u0441\u0438\u0440\u043e\u043f\u0430 \u0438 3 \u0447\u0430\u0441\u0442\u0438 \u0441\u0438\u043b\u044c\u043d\u043e \u0433\u0430\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0432\u043e\u0434\u044b. \u0423\u043a\u0440\u0430\u0441\u0438\u0442\u044c \u0438\u043c\u0431\u0438\u0440\u043d\u044b\u0439 \u044d\u043b\u044c \u043b\u0438\u0441\u0442\u044c\u044f\u043c\u0438 \u043c\u044f\u0442\u044b \u0438 \u043f\u043e\u0434\u0430\u0432\u0430\u0439\u0442\u0435. \u041e\u0441\u0432\u0435\u0436\u0430\u044e\u0449\u0438\u0439 \u0431\u0435\u0437\u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u044b\u0439 \u0438\u043c\u0431\u0438\u0440\u043d\u044b\u0439 \u044d\u043b\u044c \u043d\u0430 \u043c\u0438\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0439 \u0432\u043e\u0434\u0435 \u0433\u043e\u0442\u043e\u0432.")),d(f.a,{href:i.a.GOGOL},d(a.Button,{text:"C\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043a\u0442\u0435\u0439\u043b\u0435\u0439",view:"primary",size:"s",scaleOnInteraction:!1,outlined:!0,stretch:!0,style:{marginTop:"1em"}}))))))))}},vNVm:function(e,n,t){"use strict";var r=t("zoAU");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!l,c=(0,o.useRef)(),u=(0,o.useState)(!1),s=r(u,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),t||f||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,l=r.elements;return l.set(e,n),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!l&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t("cDcd"),a=t("0G5g"),l="undefined"!==typeof IntersectionObserver;var i=new Map}},[["ai1V",1,0,2]]]);
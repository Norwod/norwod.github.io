(this["webpackJsonpsalute-demo-app"]=this["webpackJsonpsalute-demo-app"]||[]).push([[0],{32:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(0),i=n.n(r),o=n(8),a=n.n(o),u=(n(32),n(4)),s=n(25),d=(n(68),n(26)),b=n(5),j=function(e,t){switch(t.type){case"add_note":return Object(b.a)(Object(b.a)({},e),{},{notes:[].concat(Object(d.a)(e.notes),[{id:Math.random().toString(36).substring(7),title:t.note,completed:!1}])});case"done_note":return Object(b.a)(Object(b.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.id?Object(b.a)(Object(b.a)({},e),{},{completed:!e.completed}):e}))});case"delete_note":return Object(b.a)(Object(b.a)({},e),{},{notes:e.notes.filter((function(e){return e.id!==t.id}))});default:throw new Error}};function l(){var e,t,n=document.getElementById("result"),c=(e=1,t=17,e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e);1==c&&(n.innerHTML="\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: \u0414\u0443\u0448\u043d\u044b\u0439"),2==c&&(n.innerHTML="\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: \u0412\u0435\u0441\u0435\u043b\u044b\u0439"),3==c&&(n.innerHTML="\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: \u0422\u043e\u043a\u0441\u0438\u0447\u043d\u044b\u0439"),4==c&&(n.innerHTML="\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: \u0413\u043e\u0448\u0430"),5==c&&(n.innerHTML="\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: \u0413\u0440\u0443\u0441\u0442\u043d\u044b\u0439"),6==c&&(n.innerHTML="\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: \u0421\u044f\u0432\u0430"),7==c&&(n.innerHTML="\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: \u041b\u0430\u0434\u0430 \u0413\u0440\u0430\u043d\u0442\u0430"),8==c&&(n.innerHTML="\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: \u0414\u0440\u044e\u0441"),9==c&&(n.innerHTML="\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: \u0424\u0435\u0435\u0447\u043a\u0430 \u0412\u0438\u043d\u043a\u0441"),10==c&&(n.innerHTML="\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: \u0415\u0433\u043e\u0440 \u0438 \u0410\u043d\u0434\u0440\u0435\u0439"),11==c&&(n.innerHTML="\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: \u0427\u0451\u0440\u0442 \u043e\u0431\u044b\u0447\u043d\u044b\u0439"),12==c&&(n.innerHTML="\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: \u0422\u043e\u0445\u0430"),13==c&&(n.innerHTML="\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: \u041f\u043e\u0434\u0431\u043e\u043b\u043e\u0442\u043d\u044b\u0439 \u0432\u043e\u0434\u043e\u043b\u0430\u0437"),14==c&&(n.innerHTML="\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: \u041f\u043e\u0434\u0431\u043e\u043b\u043e\u0442\u043d\u044b\u0439 \u0432\u043e\u0434\u043e\u043b\u0430\u0437"),15==c&&(n.innerHTML="\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: \u0411\u0435\u0441"),16==c&&(n.innerHTML="\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: \u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u0447\u0451\u0440\u0442")}var f=Object(r.memo)((function(){var e=Object(r.useReducer)(j,{notes:[]}),t=Object(u.a)(e,2),n=t[0],i=t[1],o=Object(r.useState)(""),a=Object(u.a)(o,2),d=(a[0],a[1],Object(r.useRef)()),b=Object(r.useRef)();return Object(r.useEffect)((function(){var e;b.current=(e=function(){return d.current},Object(s.a)({getState:e})),b.current.on("data",(function(e){var t=e.action;t&&i(t)}))}),[]),Object(r.useEffect)((function(){d.current={item_selector:{items:n.notes.map((function(e,t){return{number:t+1,id:e.id,title:e.title}}))}}}),[n]),Object(c.jsxs)("main",{className:"container",children:[Object(c.jsx)("h1",{id:"text",children:"\u041a\u0430\u043afz"}),Object(c.jsx)("h2",{id:"result",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: "}),Object(c.jsx)("button",{onClick:l,children:"Push me"})]})})),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),O()}},[[69,1,2]]]);
//# sourceMappingURL=main.60ac9511.chunk.js.map
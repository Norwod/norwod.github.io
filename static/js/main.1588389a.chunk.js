(this["webpackJsonpsalute-demo-app"]=this["webpackJsonpsalute-demo-app"]||[]).push([[0],{56:function(e,t,a){},92:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(4),l=a(0),r=a.n(l),c=a(14),s=a.n(c),i=(a(56),a(8)),o=a(48),u=(a(92),a(118)),d=a(15),b=a(16),j=function(e,t){switch(t.type){case"add_note":return Object(b.a)(Object(b.a)({},e),{},{notes:[].concat(Object(d.a)(e.notes),[{id:Math.random().toString(36).substring(7),title:t.note,completed:!1}])});case"done_note":return Object(b.a)(Object(b.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.id?Object(b.a)(Object(b.a)({},e),{},{completed:!e.completed}):e}))});case"delete_note":return Object(b.a)(Object(b.a)({},e),{},{notes:e.notes.filter((function(e){return e.id!==t.id}))});default:throw new Error}},m=a(116),O=a(117),p=a(114),f=Object(p.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}})),h=[{value:1,label:"\u041d\u0435 \u0433\u043e\u043b\u043e\u0434\u0435\u043d"},{value:2,label:"\u041f\u0440\u043e\u0433\u043e\u043b\u043e\u0434\u0430\u043b\u0441\u044f"},{value:3,label:"\u0413\u043e\u0448\u0430"}],v=[{value:1,label:"\u041d\u0430 \u043f\u043e\u043b \u0437\u0443\u0431\u0438\u043a\u0430"},{value:2,label:"\u041d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e \u043f\u043e\u043e\u0431\u0449\u0430\u0442\u044c\u0441\u044f"},{value:3,label:"\u041f\u043e \u043a\u0430\u0439\u0444\u0443!"}],x=[{value:1,label:"\u0412 \u0441\u043e\u043b\u044f\u043d\u043d\u043e\u0433\u043e"},{value:10,label:"\u0413\u0440\u0443\u043f\u043f\u0430"},{value:20,label:"\u0422\u043e\u043b\u043f\u0430"}],g=10,y=2,B=2,C=Object(l.memo)((function(){var e=Object(l.useReducer)(j,{notes:[]}),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(l.useRef)(),d=Object(l.useRef)();Object(l.useEffect)((function(){var e;d.current=(e=function(){return s.current},Object(o.a)({getState:e})),d.current.on("data",(function(e){var t=e.action;t&&c(t)}))}),[]),Object(l.useEffect)((function(){s.current={item_selector:{items:a.notes.map((function(e,t){return{number:t+1,id:e.id,title:e.title}}))}}}),[a]);var b=f(),p=r.a.useState(30),C=Object(i.a)(p,2),L=(C[0],C[1]);function k(){var e,t=0,a=0;1===y&&(t=.3),2===y&&(t=.4),3===y&&(t=.5),1===B&&(a=0),2===B&&(a=.1),3===B&&(a=.2),e=g*(t+a),document.getElementById("result").innerHTML="\u0412\u0430\u043c \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f: "+e+"\u043a\u0433 \u0448\u0430\u0448\u043b\u044b\u043d\u0434\u043e\u0441\u0430."}return Object(n.jsxs)("main",{className:"container",children:[Object(n.jsx)("h1",{id:"text",children:"\u0428\u0430\u0448\u043b\u044b\u0447\u043d\u044b\u0439 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"}),Object(n.jsx)(m.a,{id:"discrete-slider-small-steps",gutterBottom:!0,children:"1. \u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u0441 \u043b\u044e\u0434\u0435\u0439 \u0432 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),Object(n.jsx)(u.a,{defaultValue:10,"aria-labelledby":"discrete-slider-small-steps",step:1,marks:x,onChange:function(e,t){L(t),g=t,k()},min:1,max:20,valueLabelDisplay:"auto"}),Object(n.jsx)(m.a,{id:"discrete-slider-small-steps",gutterBottom:!0,children:"2. \u041a\u0430\u043a\u043e\u0435 \u043c\u044f\u0441\u043e \u0436\u0430\u0440\u0438\u043c"}),Object(n.jsxs)("div",{className:b.root,children:[Object(n.jsx)(O.a,{variant:"outlined",color:"primary",children:"\u0421\u0432\u0438\u043d\u0438\u043d\u0430"}),Object(n.jsx)(O.a,{variant:"outlined",color:"primary",children:"\u0413\u043e\u0432\u044f\u0434\u0438\u043d\u0430"}),Object(n.jsx)(O.a,{variant:"outlined",color:"primary",children:"\u0411\u0430\u0440\u0430\u043d\u0438\u043d\u0430"}),Object(n.jsx)(O.a,{variant:"outlined",color:"primary",children:"\u041a\u0443\u0440\u0438\u0446\u0430"})]}),Object(n.jsx)(m.a,{id:"discrete-slider-small-steps",gutterBottom:!0,children:"3. \u041d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0438\u043b\u044c\u043d\u043e \u0433\u043e\u043b\u043e\u0434\u043d\u044b"}),Object(n.jsx)(u.a,{defaultValue:2,"aria-labelledby":"discrete-slider-small-steps",step:1,onChange:function(e,t){L(t),y=t,k()},marks:h,min:1,max:3,valueLabelDisplay:"auto"}),Object(n.jsx)(m.a,{id:"discrete-slider-small-steps",gutterBottom:!0,children:"4. \u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u043c \u0431\u0430\u043b\u0434\u0435\u0442\u044c?"}),Object(n.jsx)(u.a,{defaultValue:2,"aria-labelledby":"discrete-slider-small-steps",step:1,marks:v,onChange:function(e,t){L(t),B=t,k()},min:1,max:3,valueLabelDisplay:"auto"}),Object(n.jsx)(m.a,{id:"discrete-slider-small-steps",gutterBottom:!0,children:"\u0412\u0430\u0448 \u0440\u0435\u0446\u0435\u043f\u0442 \u0448\u0430\u0448\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0431\u0430\u043b\u0434\u0435\u0436\u0430"}),Object(n.jsx)(m.a,{id:"result",gutterBottom:!0})]})})),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,120)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),L()}},[[97,1,2]]]);
//# sourceMappingURL=main.1588389a.chunk.js.map
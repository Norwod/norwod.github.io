(this["webpackJsonpsalute-demo-app"]=this["webpackJsonpsalute-demo-app"]||[]).push([[0],{32:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(0),r=n.n(o),a=n(8),i=n.n(a),s=(n(32),n(4)),u=n(25),d=(n(68),n(26)),l=n(5),j=function(e,t){switch(t.type){case"add_note":return Object(l.a)(Object(l.a)({},e),{},{notes:[].concat(Object(d.a)(e.notes),[{id:Math.random().toString(36).substring(7),title:t.note,completed:!1}])});case"done_note":return Object(l.a)(Object(l.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.id?Object(l.a)(Object(l.a)({},e),{},{completed:!e.completed}):e}))});case"delete_note":return Object(l.a)(Object(l.a)({},e),{},{notes:e.notes.filter((function(e){return e.id!==t.id}))});default:throw new Error}},b=Object(o.memo)((function(){var e=Object(o.useReducer)(j,{notes:[]}),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(o.useState)(""),i=Object(s.a)(a,2),d=i[0],l=i[1],b=Object(o.useRef)(),f=Object(o.useRef)();return Object(o.useEffect)((function(){var e;f.current=(e=function(){return b.current},Object(u.a)({getState:e})),f.current.on("data",(function(e){var t=e.action;t&&r(t)}))}),[]),Object(o.useEffect)((function(){b.current={item_selector:{items:n.notes.map((function(e,t){return{number:t+1,id:e.id,title:e.title}}))}}}),[n]),Object(c.jsxs)("main",{className:"container",children:[Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),r({type:"add_note",note:d}),l("")},children:Object(c.jsx)("input",{className:"add-note",type:"text",placeholder:"Add Note",value:d,onChange:function(e){var t=e.target.value;return l(t)},required:!0,autoFocus:!0})}),Object(c.jsx)("ul",{className:"notes",children:n.notes.map((function(e,t){return Object(c.jsxs)("li",{className:"note",children:[Object(c.jsxs)("span",{children:[Object(c.jsxs)("span",{style:{fontWeight:"bold"},children:[t+1,". "]}),Object(c.jsx)("span",{style:{textDecorationLine:e.completed?"line-through":"none"},children:e.title})]}),Object(c.jsx)("input",{className:"done-note",type:"checkbox",checked:e.completed,onChange:function(){return r({type:"done_note",id:e.id})}})]},e.id)}))})]})})),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),f()}},[[69,1,2]]]);
//# sourceMappingURL=main.0c5309bd.chunk.js.map
(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(11),o=n.n(s),i=(n(17),n(4)),l=n(5),r=(n(18),n(3)),j=(n(19),n(20),n(21),n(1)),b=function(e){var t="card-default "+e.className;return Object(j.jsx)("div",{className:t,children:e.children})},d=n(10),x=function(e){var t,n=e.cardTitle,a=e.value;return"number"===typeof a?t=a.toLocaleString("en-AU"):console.log("card value is not a number"),Object(j.jsxs)(b,{className:"total-card",children:[Object(j.jsxs)("div",{className:"total-card__content",children:[Object(j.jsx)("h3",{className:"total-card__title",children:n}),Object(j.jsx)("p",{className:"total-card__value",children:t})]}),Object(j.jsxs)("div",{className:"total-card__graph",children:[a>=3e5&&Object(j.jsx)(d.b,{style:{"--arrow-color":"green"}}),a<=3e5&&Object(j.jsx)(d.a,{style:{"--arrow-color":"red"}})]})]})},u=(n(23),function(e){var t=Object(r.a)({},e.total),n=Object.keys(t);return Object(j.jsx)("section",{className:"total-section",children:n.map((function(e,n){return Object(j.jsx)(x,{cardTitle:e,value:t[e]},n)}))})}),m=(n(24),function(e){var t;return e.checkbox_id?t=e.checkbox_id:console.log("checkbox needs an id to be linked with label"),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{type:"checkbox",id:t}),Object(j.jsx)("label",{htmlFor:t,className:"checkbox__box"})]})}),O=(n(25),n(26),n(7)),h=function(e){var t=e.name,n=new Date(e.date).toLocaleDateString("en-AU",{day:"2-digit",month:"short",year:"2-digit"}),a=e.amount,c=e.checkbox_id.toString();return console.log(t),console.log(n),console.log(a),Object(j.jsxs)("tr",{className:"expenseTable-item",children:[Object(j.jsx)("td",{children:Object(j.jsx)(m,{checkbox_id:c})}),Object(j.jsx)("td",{className:"expenseTable-item__name",children:t}),Object(j.jsx)("td",{className:"expenseTable-item__date",children:n}),Object(j.jsx)("td",{className:"expenseTable-item__amount",children:a}),Object(j.jsx)("td",{className:"expenseTable-item__actions-wrapper",children:Object(j.jsxs)("div",{className:"expenseTable-item__actions",children:[Object(j.jsx)("button",{className:"btn btn--icon",children:Object(j.jsx)(O.c,{})}),Object(j.jsx)("button",{className:"btn btn--icon",children:Object(j.jsx)(O.b,{})})]})})]})},p=function(e){var t=Object(i.a)(e.expenses);return Object(j.jsx)("table",{className:"expense-table",children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{className:"expense-table__header-row",children:[Object(j.jsx)("th",{children:Object(j.jsx)(m,{checkbox_id:"name-filter"})}),Object(j.jsxs)("th",{children:["name",Object(j.jsxs)("select",{name:"name-sequence",className:"dropdown",children:[Object(j.jsx)("option",{value:""}),Object(j.jsx)("option",{value:"a-z",children:"A-Z"}),Object(j.jsx)("option",{value:"z-a",children:"Z-A"})]})]}),Object(j.jsx)("th",{children:"date"}),Object(j.jsx)("th",{children:"amount"})]}),t.map((function(e,t){return Object(j.jsx)(h,{name:e.name,date:e.date,amount:e.amount,checkbox_id:t},t)}))]})})},f=(n(27),function(e){var t=Object(i.a)(e.expenses);return Object(j.jsxs)("section",{className:"expense-section",children:[Object(j.jsxs)("div",{className:"expense-section__nav",children:[Object(j.jsx)("h2",{className:"expense-section__title",children:"Expenses"}),Object(j.jsx)("button",{className:"btn btn--dots expense-section__btn",children:"..."})]}),Object(j.jsx)(p,{expenses:t})]})}),v=(n(28),n(29),n(12)),N=function(e){var t=Object(v.useState)({name:"",date:"2021-01-02",amount:0}),n=Object(l.a)(t,2),a=n[0],c=n[1],s=function(e){"name"===e.target.name&&c((function(t){return Object(r.a)(Object(r.a)({},t),{},{name:e.target.value})})),"date"===e.target.name&&c((function(t){return Object(r.a)(Object(r.a)({},t),{},{date:e.target.value})})),"amount"===e.target.name&&c((function(t){return Object(r.a)(Object(r.a)({},t),{},{amount:e.target.value})}))};console.log("low"),console.log(e.newExpense);return Object(j.jsx)(b,{className:"new-expense",children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onSaveNewExpense(Object(r.a)({},a)),c({name:"",date:"2021-01-01",amount:0})},children:[Object(j.jsx)("label",{htmlFor:"new-expense-name",children:"Name"}),Object(j.jsx)("input",{type:"text",id:"new-expense-name",className:"input--expense",placeholder:"Please enter a name",onChange:s,name:"name",value:a.name}),Object(j.jsx)("label",{htmlFor:"new-expense-date",children:"Date"}),Object(j.jsx)("input",{type:"date",id:"new-expense-date",className:"input--expense",onChange:s,name:"date",value:a.date}),Object(j.jsx)("label",{htmlFor:"new-expense-amount",children:"Amount"}),Object(j.jsx)("input",{type:"number",id:"new-expense-amount",className:"input--expense",min:"0.01",step:"0.01",placeholder:"Please enter an amount",name:"amount",onChange:s,value:a.amount}),Object(j.jsx)("div",{className:"new-expense__actions",children:Object(j.jsx)("button",{className:"btn btn--add",children:Object(j.jsx)(O.a,{})})})]})})},_=function(e){return Object(j.jsx)("section",{className:"addexpense-section",children:Object(j.jsx)(N,{onSaveNewExpense:e.onSaveNewExpense,newExpense:e.newExpense})})},g=function(e){var t=Object(r.a)({},e.total),n=Object(i.a)(e.expenses);return Object(j.jsx)("div",{className:"dashboard-page",children:Object(j.jsxs)("main",{children:[Object(j.jsx)(u,{total:t}),Object(j.jsx)("h1",{className:"dashboard-page__main-heading",children:"Dashboard"}),Object(j.jsx)(_,{onSaveNewExpense:e.onSaveNewExpense,newExpense:e.newExpense}),Object(j.jsx)(f,{expenses:n})]})})},w={income:402184,expense:205382},S=[{date:"2021-09-06",name:"Woolworths Shopping",amount:199.67},{date:"2021-09-07",name:"Adobe Subscription",amount:14.29},{date:"2021-09-08",name:"Water Bill",amount:1050.2},{date:"2021-09-08",name:"Cat Petting Tax",amount:2.99}];var E=function(){var e=Object(a.useState)({income:void 0,expense:void 0}),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),o=Object(l.a)(s,2),r=o[0],b=o[1],d=Object(a.useState)({}),x=Object(l.a)(d,2),u=x[0],m=x[1];return Object(a.useEffect)((function(){c(w),b(S)}),[]),Object(a.useEffect)((function(){b((function(e){return[].concat(Object(i.a)(e),[u])}))}),[u]),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(g,{total:n,expenses:r,onSaveNewExpense:function(e){m(e)},newExpense:u})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(E,{})}),document.getElementById("root")),k()}],[[30,1,2]]]);
//# sourceMappingURL=main.7831effa.chunk.js.map
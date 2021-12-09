(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{4965:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/expenses",function(){return n(2393)}])},2393:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return p}});var t=n(5893),i=n(7294),r=n(2537),o=n(3877);function a(e){var s=(0,i.useState)(""),n=s[0],r=s[1],o=(0,i.useState)(0),a=o[0],u=o[1];return(0,t.jsxs)("form",{onSubmit:function(s){s.preventDefault(),e.onSubmit({name:n,budget:a}),r(""),u("")},className:"flex-col flex",children:[(0,t.jsxs)("label",{className:"pb-1.5",children:["Name:",(0,t.jsx)("input",{type:"text",value:n,onChange:function(e){return r(e.target.value)}})]}),(0,t.jsxs)("label",{className:"pb-1.5",children:["Budget:",(0,t.jsx)("input",{type:"number",value:a,onChange:function(e){return u(e.target.value)}})]}),(0,t.jsx)("button",{type:"submit",className:"bg-indigo-600 text-white",children:"Submit"})]})}function u(e){var s=(0,i.useState)(e.value),n=s[0],r=s[1];return(0,t.jsxs)("form",{onSubmit:function(s){s.preventDefault(),e.onSubmit(n),r(0)},className:"flex-rowl flex",children:[(0,t.jsxs)("label",{className:"",children:["Used:",(0,t.jsx)("input",{type:"number",value:n,onChange:function(e){return r(e.target.value)}})]}),(0,t.jsx)("button",{type:"submit",className:"bg-indigo-600 text-white",children:(0,t.jsx)("img",{src:"/images/icons8-save-32.png",width:"16px",height:"16px"})})]})}function l(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function c(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(s){l(e,s,n[s])}))}return e}function d(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var n=[],t=!0,i=!1,r=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done)&&(n.push(o.value),!s||n.length!==s);t=!0);}catch(u){i=!0,r=u}finally{try{t||null==a.return||a.return()}finally{if(i)throw r}}return n}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(e){return function(e){if(Array.isArray(e)){for(var s=0,n=new Array(e.length);s<e.length;s++)n[s]=e[s];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function x(){var e=d(i.useState(!1),2),s=e[0],n=e[1],x=(0,r.k)(),p=i.useMemo((function(){return{myExpenses:{transportation:{used:o.z.format(x.expenses.transportation.used),budget:o.z.format(x.expenses.transportation.budget)},housing:{used:o.z.format(x.expenses.housing.used),budget:o.z.format(x.expenses.housing.budget)},food:{used:o.z.format(x.expenses.food.used),budget:o.z.format(x.expenses.food.budget)},amenities:{used:o.z.format(x.expenses.amenities.used),budget:o.z.format(x.expenses.amenities.budget)}}}}),[x.expenses,x.customExpenses]),f=function(e,s){x.setExpenses(c({},x.expenses,l({},e,c({},x.expenses[e],{used:s}))))},g=[];return x.customExpenses.forEach((function(e){g.push((0,t.jsxs)("div",{className:"flex flex-col bg-green-300 rounded-md p-2 m-2 border-2 border-indigo-600",children:[(0,t.jsxs)("h5",{className:"text-lg font-semibold",children:[e.name," (",(e.used/e.budget*100).toFixed(),"%)"]}),s!==e.name?(0,t.jsxs)("span",{className:"flex",children:["Used: ",o.z.format(e.used)," ",(0,t.jsx)("img",{onClick:function(){return n(e.name)},className:"ml-1",src:"/images/icons8-pencil-64.png",height:"16",width:"16"})]}):(0,t.jsx)(u,{value:e.used,onSubmit:function(s){n(""),function(e,s){var n=x.customExpenses.find((function(s){return s.name===e}));x.setCustomExpenses(m(x.customExpenses.filter((function(s){return s.name!==e}))).concat([c({},n,{used:s})]))}(e.name,s)}}),(0,t.jsxs)("span",{children:["Budget: ",o.z.format(e.budget)]})]}))})),(0,t.jsxs)("div",{className:"flex flex-row flex-wrap p-7",children:[(0,t.jsxs)("div",{className:"flex flex-col bg-green-300 rounded-md p-2 m-2",children:[(0,t.jsxs)("h5",{className:"text-lg font-semibold",children:["Transportation"," ",(0,t.jsxs)("span",{className:x.expenses.transportation.used>x.expenses.transportation.budget?"text-red-600":"",children:["(",(x.expenses.transportation.used/x.expenses.transportation.budget*100).toFixed(2),"%)"]})]}),"transportation"!==s?(0,t.jsxs)("span",{className:"flex",children:["Used: ",p.myExpenses.transportation.used," ",(0,t.jsx)("img",{onClick:function(){return n("transportation")},className:"ml-1",src:"/images/icons8-pencil-64.png",height:"16",width:"16"})]}):(0,t.jsx)(u,{value:x.expenses.transportation.used,onSubmit:function(e){n(""),f("transportation",e)}}),(0,t.jsxs)("span",{children:["Budget: ",p.myExpenses.transportation.budget]})]}),(0,t.jsxs)("div",{className:"flex flex-col bg-green-300 rounded-md p-2 m-2",children:[(0,t.jsxs)("h5",{className:"text-lg font-semibold",children:["Housing"," ",(0,t.jsxs)("span",{className:x.expenses.housing.used>x.expenses.housing.budget?"text-red-600":"",children:["(",(x.expenses.housing.used/x.expenses.housing.budget*100).toFixed(),"%)"]})]}),"housing"!==s?(0,t.jsxs)("span",{className:"flex",children:["Used: ",p.myExpenses.housing.used," ",(0,t.jsx)("img",{onClick:function(){return n("housing")},className:"ml-1",src:"/images/icons8-pencil-64.png",height:"16",width:"16"})]}):(0,t.jsx)(u,{value:x.expenses.housing.used,onSubmit:function(e){n(""),f("housing",e)}}),(0,t.jsxs)("span",{children:["Budget: ",p.myExpenses.housing.budget]})]}),(0,t.jsxs)("div",{className:"flex flex-col bg-green-300 rounded-md p-2 m-2",children:[(0,t.jsxs)("h5",{className:"text-lg font-semibold",children:["Food"," ",(0,t.jsxs)("span",{className:x.expenses.food.used>x.expenses.food.budget?"text-red-600":"",children:["(",(x.expenses.food.used/x.expenses.food.budget*100).toFixed(),"%)"]})]}),"food"!==s?(0,t.jsxs)("span",{className:"flex",children:["Used: ",p.myExpenses.food.used," ",(0,t.jsx)("img",{onClick:function(){return n("food")},className:"ml-1",src:"/images/icons8-pencil-64.png",height:"16",width:"16"})]}):(0,t.jsx)(u,{value:x.expenses.food.used,onSubmit:function(e){n(""),f("food",e)}}),(0,t.jsxs)("span",{children:["Budget: ",p.myExpenses.food.budget]})]}),(0,t.jsxs)("div",{className:"flex flex-col bg-green-300 rounded-md p-2 m-2",children:[(0,t.jsxs)("h5",{className:"text-lg font-semibold",children:["Amenities"," ",(0,t.jsxs)("span",{className:x.expenses.amenities.used>x.expenses.amenities.budget?"text-red-600":"",children:["(",(x.expenses.amenities.used/x.expenses.amenities.budget*100).toFixed(),"%)"]})]}),"amenities"!==s?(0,t.jsxs)("span",{className:"flex",children:["Used: ",p.myExpenses.amenities.used," ",(0,t.jsx)("img",{onClick:function(){return n("amenities")},className:"ml-1",src:"/images/icons8-pencil-64.png",height:"16",width:"16"})]}):(0,t.jsx)(u,{value:x.expenses.amenities.used,onSubmit:function(e){n(""),f("amenities",e)}}),(0,t.jsxs)("span",{children:["Budget: ",p.myExpenses.amenities.budget]})]}),g,(0,t.jsxs)("div",{className:"flex flex-col bg-green-300 rounded-md p-2 m-2",children:[(0,t.jsx)("h5",{className:"text-lg text-blue-500 font-semibold",children:"+ Add Expense"}),(0,t.jsx)(a,{onSubmit:function(e){return s=e,void x.setCustomExpenses(m(x.customExpenses).concat([c({},s,{used:0})]));var s}})]})]})}function p(){return(0,t.jsx)(x,{})}},3877:function(e,s,n){"use strict";n.d(s,{z:function(){return t}});var t=new Intl.NumberFormat("pt-PT",{style:"currency",currency:"EUR",minimumFractionDigits:2})}},function(e){e.O(0,[774,888,179],(function(){return s=4965,e(e.s=s);var s}));var s=e.O();_N_E=s}]);
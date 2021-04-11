(this["webpackJsonpgeri-react"]=this["webpackJsonpgeri-react"]||[]).push([[16],{128:function(t,e,n){t.exports={label:"Contacts_label__3d4ym",input:"Contacts_input__1fFRq",contactList:"Contacts_contactList__GYV3h",contactItem:"Contacts_contactItem__1mUhD",button:"Contacts_button__3H7sC"}},148:function(t,e,n){t.exports={form:"Form_form__2dSmv",label:"Form_label__GZsO7",input:"Form_input__374Yv",button:"Form_button__e8zJx"}},149:function(t,e,n){t.exports={label:"Filter_label__2inYS",input:"Filter_input__7wkDU"}},150:function(t,e,n){t.exports={wrapper:"App_wrapper__RlUJl",title:"App_title__10cIR",subtitle:"App_subtitle__o4L9Z"}},226:function(t,e,n){"use strict";n.r(e);var r,a=n(0),c=n(34),o=n(26),u=new Uint8Array(16);function i(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(u)}var s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var l=function(t){return"string"===typeof t&&s.test(t)},b=[],p=0;p<256;++p)b.push((p+256).toString(16).substr(1));var m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(b[t[e+0]]+b[t[e+1]]+b[t[e+2]]+b[t[e+3]]+"-"+b[t[e+4]]+b[t[e+5]]+"-"+b[t[e+6]]+b[t[e+7]]+"-"+b[t[e+8]]+b[t[e+9]]+"-"+b[t[e+10]]+b[t[e+11]]+b[t[e+12]]+b[t[e+13]]+b[t[e+14]]+b[t[e+15]]).toLowerCase();if(!l(n))throw TypeError("Stringified UUID is invalid");return n};var d=function(t,e,n){var r=(t=t||{}).random||(t.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var a=0;a<16;++a)e[n+a]=r[a];return e}return m(r)},f=function(t){return{type:o.b,payload:t}},j=function(t){return{type:o.c,payload:t}},h=n(33),_=n(148),x=n(3),O=function(t){var e=t.onSubmit,n=Object(a.useState)(""),r=Object(h.a)(n,2),c=r[0],o=r[1],u=Object(a.useState)(""),i=Object(h.a)(u,2),s=i[0],l=i[1],b=function(t){var e=t.target,n=e.name,r=e.value;"name"===n?o(r):l(r)};return Object(x.jsxs)("form",{className:_.form,children:[Object(x.jsxs)("label",{className:_.label,children:["Name",Object(x.jsx)("input",{className:_.input,name:"name",value:c,onChange:b})]}),Object(x.jsxs)("label",{className:_.label,children:["Number",Object(x.jsx)("input",{className:_.input,name:"number",value:s,onChange:b})]}),Object(x.jsx)("button",{className:_.button,tupe:"submit",onClick:function(t){t.preventDefault(),e({name:c,number:s}),o(""),l("")},children:"Add contact"})]})},v=n(128),C=function(t){var e=t.contact,n=e.id,r=e.name,a=e.number,c=t.onDeleteContact;return Object(x.jsxs)("li",{className:v.contactItem,children:[Object(x.jsxs)("span",{children:[r,": ",a]}),Object(x.jsx)("button",{className:v.button,onClick:function(){return c(n)},children:"Delete"})]})},g=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},y=Object(c.b)((function(t){var e=t.contacts,n=e.items,r=e.filter;return{contacts:g(n,r)}}),(function(t){return{onDeleteContact:function(e){return t(f(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(x.jsx)("ul",{className:v.contactList,children:e.map((function(t){return Object(x.jsx)(C,{contact:t,onDeleteContact:n},t.id)}))})})),N=n(149),w=Object(c.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(j(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(x.jsxs)("label",{className:N.label,children:["Find contacts by name",Object(x.jsx)("input",{className:N.input,value:e,onChange:n})]})})),R=n(150);function F(t){var e=t.handleSubmit,n=t.handleInputFilter;return Object(x.jsxs)("div",{className:R.wrapper,children:[Object(x.jsx)("h1",{className:R.title,children:"Phonebook"}),Object(x.jsx)(O,{onInputChange:n,onSubmit:e}),Object(x.jsx)("h2",{className:R.subtitle,children:"Contacts"}),Object(x.jsx)(w,{}),Object(x.jsx)(y,{})]})}F.defaultProps={initialValue:[]};var S=Object(c.b)((function(t){return t}),(function(t){return{handleSubmit:function(e){return t(function(t){return{type:o.a,payload:{id:d(),name:t.name,number:t.number}}}(e))},handleDeleteContact:function(){return t(f())},handleInputFilter:function(){return t(j())}}}))(F);e.default=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:"Phonebook Redux"}),Object(x.jsx)(S,{}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"use Redux"}),Object(x.jsx)("li",{children:"use React-Redux"}),Object(x.jsx)("li",{children:"use redux-devtools-extension"}),Object(x.jsx)("li",{children:"use uuid"})]})]})}}}]);
//# sourceMappingURL=PhonebookRedux.98d16cdb.chunk.js.map
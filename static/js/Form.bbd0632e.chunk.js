(this["webpackJsonpgeri-react"]=this["webpackJsonpgeri-react"]||[]).push([[9],{214:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(65),c=n(71),a=n(58),i=n(17),s=n(60),l=n(59),u=n(4),f="male",b="female",d={login:"",email:"",password:"",agreed:!1,gender:null,age:""},p=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state=Object(c.a)({},d),e.handleChange=function(t){var n=t.target,r=n.name,c=n.value,a=n.type,i=n.checked;e.setState(Object(o.a)({},r,"checkbox"===a?i:c))},e.handleSubmit=function(t){t.preventDefaul();var n=e.state,r=n.login,o=n.email,a=n.password,i=n.agreed;console.log("\n      Login: ".concat(r," \n      Email: ").concat(o," \n      Password: ").concat(a,"\n      Agreed: ").concat(i,"\n    ")),e.props.onSubmit(Object(c.a)({},e.state)),e.reset()},e.reset=function(){e.setState(Object(c.a)({},d))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.login,n=e.email,r=e.password,o=e.agreed,c=e.gender,a=e.age,i=this.props.s,s=i.form,l=i.formLabel,d=i.formInput,p=i.formButton,j=i.formButtonDisabled,h=this.handleChange;return Object(u.jsxs)("form",{className:s,onSubmit:h,children:[Object(u.jsxs)("label",{className:l,children:["Name:",Object(u.jsx)("input",{className:d,type:"text",placeholder:"Enter login",name:"login",value:t,onChange:h})]}),Object(u.jsxs)("label",{className:l,children:["Email:",Object(u.jsx)("input",{className:d,type:"email",placeholder:"Enter email",name:"email",value:n,onChange:h})]}),Object(u.jsxs)("label",{className:l,children:["Password:",Object(u.jsx)("input",{className:d,type:"password",placeholder:"Enter password",name:"password",value:r,onChange:h})]}),Object(u.jsxs)("label",{children:["Agree to terms",Object(u.jsx)("input",{type:"checkbox",name:"agreed",checked:o,onChange:h})]}),Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:"Choose your gender"}),Object(u.jsxs)("label",{children:["Male",Object(u.jsx)("input",{type:"radio",checked:c===f,name:"gender",value:f,onChange:h})]}),Object(u.jsxs)("label",{children:["Female",Object(u.jsx)("input",{type:"radio",checked:c===b,name:"gender",value:b,onChange:h})]})]}),Object(u.jsxs)("label",{children:["Choose your age",Object(u.jsxs)("select",{name:"age",value:a,onChange:h,children:[Object(u.jsx)("option",{value:"",disabled:!0,children:"..."}),Object(u.jsx)("option",{value:"18-25",children:"18-25"}),Object(u.jsx)("option",{value:"26-35",children:"26-35"}),Object(u.jsx)("option",{value:"36+",children:"36+"})]})]}),Object(u.jsxs)("button",{className:o?p:"".concat(p," ").concat(j),type:"submit",disabled:!o,children:["Sign up as ",t]})]})}}]),n}(r.Component),j=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={value:""},e.handleChange=function(t){e.setState({value:t.target.value})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.value,t=this.props.s,n=t.input,o=t.values;return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)("input",{className:n,type:"text",value:e,onChange:this.handleChange}),Object(u.jsx)("span",{className:o,children:e})]})}}]),n}(r.Component),h=n(13),m=Object(h.a)({values:{margin:30},form:{padding:20,margin:{top:30,bottom:30},border:[[1,"solid","#ccc"]],backgroundColor:"#ffffff",borderRadius:7},formLabel:{position:"relative",display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:600,color:"teal","&:not(:nth-child(3))":{marginBottom:10},"&:nth-child(3)":{marginBottom:20}},formInput:{padding:{top:10,left:10,right:10,bottom:10},margin:{left:20},width:260,height:40,fontSize:16,border:[[1,"solid","#ccc"]],borderRadius:4,outline:"none","&:focus":{border:[[3,"solid","skyblue"]],padding:{left:8}}},formButton:{padding:{top:10,left:20,right:20,bottom:10},width:"100%",fontSize:16,textTransform:"uppercase",cursor:"pointer",color:"white",backgroundColor:"teal",border:"none",borderRadius:4,outline:"none","&:hover":{backgroundColor:"tomato"}},formButtonDisabled:{backgroundColor:"#f1f1f1",color:"white",cursor:"auto","&:hover":{backgroundColor:"#f1f1f1",color:"white"}},input:{padding:{left:10,right:10},margin:{top:20,bottom:20},width:260,height:40,fontSize:16,border:[[2,"solid","#ccc"]],borderRadius:4,outline:"none","&:focus":{border:[[2,"solid","skyblue"]]}}}),g=function(){var e=m();return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)(p,{s:e}),Object(u.jsx)("hr",{}),Object(u.jsx)(j,{s:e}),Object(u.jsx)("hr",{})]})};t.default=function(){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)("h1",{children:"Forms"}),Object(u.jsx)(g,{})]})}},58:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},59:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return i}));var o=n(62),c=n(19);function a(e,t){return!t||"object"!==Object(o.a)(t)&&"function"!==typeof t?Object(c.a)(e):t}function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=r(e);if(t){var c=r(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return a(this,n)}}},60:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},62:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return r}))},65:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(65);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=Form.bbd0632e.chunk.js.map
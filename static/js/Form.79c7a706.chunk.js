(this["webpackJsonpgeri-react"]=this["webpackJsonpgeri-react"]||[]).push([[13],{237:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(35),a=n(12),c=n(77),s=n(22),i=n(76),l=n(75),u=n(3),f="male",b="female",d={login:"",email:"",password:"",agreed:!1,gender:null,age:""},p=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state=Object(a.a)({},d),e.handleChange=function(t){var n=t.target,o=n.name,a=n.value,c=n.type,s=n.checked;e.setState(Object(r.a)({},o,"checkbox"===c?s:a))},e.handleSubmit=function(t){t.preventDefaul();var n=e.state,o=n.login,r=n.email,c=n.password,s=n.agreed;console.log("\n      Login: ".concat(o," \n      Email: ").concat(r," \n      Password: ").concat(c,"\n      Agreed: ").concat(s,"\n    ")),e.props.onSubmit(Object(a.a)({},e.state)),e.reset()},e.reset=function(){e.setState(Object(a.a)({},d))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.login,n=e.email,o=e.password,r=e.agreed,a=e.gender,c=e.age,s=this.props.s,i=s.form,l=s.formLabel,d=s.formInput,p=s.formButton,h=s.formButtonDisabled,j=this.handleChange;return Object(u.jsxs)("form",{className:i,onSubmit:j,children:[Object(u.jsxs)("label",{className:l,children:["Name:",Object(u.jsx)("input",{className:d,type:"text",placeholder:"Enter login",name:"login",value:t,onChange:j})]}),Object(u.jsxs)("label",{className:l,children:["Email:",Object(u.jsx)("input",{className:d,type:"email",placeholder:"Enter email",name:"email",value:n,onChange:j})]}),Object(u.jsxs)("label",{className:l,children:["Password:",Object(u.jsx)("input",{className:d,type:"password",placeholder:"Enter password",name:"password",value:o,onChange:j})]}),Object(u.jsxs)("label",{children:["Agree to terms",Object(u.jsx)("input",{type:"checkbox",name:"agreed",checked:r,onChange:j})]}),Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:"Choose your gender"}),Object(u.jsxs)("label",{children:["Male",Object(u.jsx)("input",{type:"radio",checked:a===f,name:"gender",value:f,onChange:j})]}),Object(u.jsxs)("label",{children:["Female",Object(u.jsx)("input",{type:"radio",checked:a===b,name:"gender",value:b,onChange:j})]})]}),Object(u.jsxs)("label",{children:["Choose your age",Object(u.jsxs)("select",{name:"age",value:c,onChange:j,children:[Object(u.jsx)("option",{value:"",disabled:!0,children:"..."}),Object(u.jsx)("option",{value:"18-25",children:"18-25"}),Object(u.jsx)("option",{value:"26-35",children:"26-35"}),Object(u.jsx)("option",{value:"36+",children:"36+"})]})]}),Object(u.jsxs)("button",{className:r?p:"".concat(p," ").concat(h),type:"submit",disabled:!r,children:["Sign up as ",t]})]})}}]),n}(o.Component),h=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){e.setState({value:t.target.value})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.value,t=this.props.s,n=t.input,r=t.values;return Object(u.jsxs)(o.Fragment,{children:[Object(u.jsx)("input",{className:n,type:"text",value:e,onChange:this.handleChange}),Object(u.jsx)("span",{className:r,children:e})]})}}]),n}(o.Component),j=n(18),m=Object(j.a)({values:{margin:30},form:{padding:20,margin:{top:30,bottom:30},border:[[1,"solid","#ccc"]],backgroundColor:"#ffffff",borderRadius:7},formLabel:{position:"relative",display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:600,color:"teal","&:not(:nth-child(3))":{marginBottom:10},"&:nth-child(3)":{marginBottom:20}},formInput:{padding:{top:10,left:10,right:10,bottom:10},margin:{left:20},width:260,height:40,fontSize:16,border:[[1,"solid","#ccc"]],borderRadius:4,outline:"none","&:focus":{border:[[3,"solid","skyblue"]],padding:{left:8}}},formButton:{padding:{top:10,left:20,right:20,bottom:10},width:"100%",fontSize:16,textTransform:"uppercase",cursor:"pointer",color:"white",backgroundColor:"teal",border:"none",borderRadius:4,outline:"none","&:hover":{backgroundColor:"tomato"}},formButtonDisabled:{backgroundColor:"#f1f1f1",color:"white",cursor:"auto","&:hover":{backgroundColor:"#f1f1f1",color:"white"}},input:{padding:{left:10,right:10},margin:{top:20,bottom:20},width:260,height:40,fontSize:16,border:[[2,"solid","#ccc"]],borderRadius:4,outline:"none","&:focus":{border:[[2,"solid","skyblue"]]}}}),g=function(){var e=m();return Object(u.jsxs)(o.Fragment,{children:[Object(u.jsx)(p,{s:e}),Object(u.jsx)("hr",{}),Object(u.jsx)(h,{s:e}),Object(u.jsx)("hr",{})]})};t.default=function(){return Object(u.jsxs)(o.Fragment,{children:[Object(u.jsx)("h1",{children:"Forms"}),Object(u.jsx)(g,{})]})}},75:function(e,t,n){"use strict";function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return s}));var r=n(79),a=n(27);function c(e,t){return!t||"object"!==Object(r.a)(t)&&"function"!==typeof t?Object(a.a)(e):t}function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var a=o(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}},76:function(e,t,n){"use strict";function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}n.d(t,"a",(function(){return r}))},77:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return o}))},79:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return o}))}}]);
//# sourceMappingURL=Form.79c7a706.chunk.js.map
(this["webpackJsonpgeri-react"]=this["webpackJsonpgeri-react"]||[]).push([[13],{225:function(t,e,o){"use strict";o.r(e);var n=o(73),r=o(20),c=o(72),a=o(71),s=o(0),i=o(15),l=o(3),u=document.querySelector("#modalClass-root"),p=function(t){Object(c.a)(o,t);var e=Object(a.a)(o);function o(){var t;Object(n.a)(this,o);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).handleKeyDown=function(e){"Escape"===e.code&&t.props.onCloseModalClass()},t.handleBackdropClick=function(e){e.currentTarget===e.target&&t.props.onCloseModalClass()},t}return Object(r.a)(o,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var t=this.props.s,e=t.modalClass__backdrop,o=t.modalClass__content;return Object(i.createPortal)(Object(l.jsx)("div",{className:e,onClick:this.handleBackdropClick,children:Object(l.jsx)("div",{className:o,children:this.props.children})}),u)}}]),o}(s.Component),f=function(t){Object(c.a)(o,t);var e=Object(a.a)(o);function o(){return Object(n.a)(this,o),e.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){var t=this.props.s.modalClassBtn;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Hi from Modal children"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),Object(l.jsx)("button",{className:t,type:"button",onClick:this.props.onCloseModalClass,children:"Close Modal"})]})}}]),o}(s.Component),d=o(25),b=o(16),h=Object(b.a)({modalClass__backdrop:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.5)"},modalClass__content:{position:"absolute",top:"50%",left:"50%",padding:12,minHeight:300,minWidth:600,transform:"translate(-50%, -50%)",backgroundColor:"#fff",borderRadius:3,boxShadow:"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)"},modalClassBtn:{padding:{top:10,left:20,right:20,bottom:10},margin:30,fontSize:16,textTransform:"uppercase",cursor:"pointer",color:"white",backgroundColor:"teal",border:"none",borderRadius:4,outline:"none","&:hover":{backgroundColor:"tomato"}}}),j=function(t){return function(e){var o=h();return Object(l.jsx)(t,Object(d.a)(Object(d.a)({},e),{},{s:o}))}},y=function(t){Object(c.a)(o,t);var e=Object(a.a)(o);function o(){var t;Object(n.a)(this,o);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={showModalClass:!1},t.toggleModal=function(){t.setState((function(t){return{showModalClass:!t.showModalClass}}))},t}return Object(r.a)(o,[{key:"render",value:function(){var t=this.state.showModalClass,e=this.props.s.modalClassBtn;return Object(l.jsxs)(s.Fragment,{children:[Object(l.jsx)("h1",{children:"Modal (Class)"}),Object(l.jsx)("button",{className:e,type:"button",onClick:this.toggleModal,children:"Open Modal"}),t&&Object(l.jsx)(p,{s:this.props.s,onCloseModalClass:this.toggleModal,children:Object(l.jsx)(f,{s:this.props.s,onCloseModalClass:this.toggleModal})})]})}}]),o}(s.Component);e.default=j(y)},71:function(t,e,o){"use strict";function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}o.d(e,"a",(function(){return s}));var r=o(75),c=o(24);function a(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!==typeof e?Object(c.a)(t):e}function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,r=n(t);if(e){var c=n(this).constructor;o=Reflect.construct(r,arguments,c)}else o=r.apply(this,arguments);return a(this,o)}}},72:function(t,e,o){"use strict";function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}o.d(e,"a",(function(){return r}))},73:function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}o.d(e,"a",(function(){return n}))},75:function(t,e,o){"use strict";function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}o.d(e,"a",(function(){return n}))}}]);
//# sourceMappingURL=ModalClass.a252bfd9.chunk.js.map
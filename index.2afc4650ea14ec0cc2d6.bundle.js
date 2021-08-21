(()=>{"use strict";var e,t={176:(e,t,n)=>{var r=n(804),o=n.n(r);const a=ReactDOM;var c=n.n(a);const l=antd;var i=n(727),u=n(977),s=n(351),f=n(629);const p="src-components-header__header--QPVBI",m="src-components-header__trigger--5qMIx";var y=l.Layout.Header;const d=function(e){var t=e.collapsed,n=e.onToggle;return o().createElement(y,{className:p},o().createElement(t?s.Z:f.Z,{className:m,onClick:n}))};var h=n(345),b=n(894),v=n(485);const g="src-components-side__logo--jFOUp";function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var w=l.Layout.Sider,O="popular",S="battle";function j(e){var t=e.collapsed,n=E((0,r.useState)("#/"===window.location.hash?O:window.location.hash.replace("#/","")),2),a=n[0],c=n[1];return o().createElement(w,{trigger:null,collapsible:!0,collapsed:t},o().createElement("div",{className:g},o().createElement(h.Z,{style:{fontSize:20}})),o().createElement(l.Menu,{theme:"dark",mode:"inline",selectedKeys:[a],onClick:function(e){c(e.key)},defaultSelectedKeys:[O]},o().createElement(l.Menu.Item,{key:O,icon:o().createElement(b.Z,null)},o().createElement(i.rU,{to:"/".concat(O)},"Popular")),o().createElement(l.Menu.Item,{key:S,icon:o().createElement(v.Z,null)},o().createElement(i.rU,{to:"/".concat(S)},"Battle"))))}const k=axios;var R=n.n(k),C=n(625),x=n(24);const P="src-components-style__item--3amSn",T="src-components-style__text--1mas0";var N=l.Card.Meta,I={gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:3};const A=function(e){var t=e.data;return o().createElement(l.List,{grid:I,dataSource:t,renderItem:function(e){return o().createElement(l.List.Item,null,o().createElement(l.Card,{hoverable:!0,cover:o().createElement(l.Image,{alt:e.name,src:e.owner.avatar_url,placeholder:!0,preview:!1})},o().createElement(N,{title:e.name,description:o().createElement("div",null,o().createElement("div",{className:P},o().createElement(C.G,{icon:x.T}),o().createElement("span",{className:T},e.stargazers_count)),o().createElement("div",{className:P},o().createElement(C.G,{icon:x.tF}),o().createElement("span",{className:T},e.forks_count)),o().createElement("div",{className:P},o().createElement(C.G,{icon:x._1}),o().createElement("span",{className:T},e.open_issues_count)))})))}})},B="src-hot__app--hh5yS",M="src-hot__items-content--2k9bE";function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Z(e);if(t){var o=Z(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return F(this,n)}}function F(e,t){if(t&&("object"===G(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return W(e)}function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(c,e);var t,n,r,a=L(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).state={data:[],target:0,loading:!0},t.map=[{language:"All",url:"https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories"},{language:"Javascript",url:"https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories"},{language:"Ruby",url:"https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories"},{language:"Java",url:"https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories"},{language:"CSS",url:"https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories"}],t.getGithubData=t.getGithubData.bind(W(t)),t.source=null,t}return t=c,(n=[{key:"componentDidMount",value:function(){this.getGithubData(0)}},{key:"componentWillUnmount",value:function(){this.source&&this.source.cancel("Component will unmount, request will be canceled.")}},{key:"handleButtonClick",value:function(e){var t=this.props,n=t.target,r=t.loading;n===e||r||(this.getGithubData(e),this.setState({target:e}))}},{key:"getGithubData",value:function(e){var t=this;this.setState({loading:!0});var n=R().CancelToken;this.source=n.source(),R().get(this.map[e].url,{cancelToken:this.source.token}).then((function(e){var n=e.data.items;t.setState({loading:!1,data:n}),t.source=null})).catch((function(e){R().isCancel(e)&&console.log("Request canceled",e.message),t.source=null}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.loading,r=t.data,a=t.target;return o().createElement("div",{className:B},o().createElement(l.Spin,{size:"large",spinning:n}),o().createElement("div",null,this.map.map((function(t,r){var c=t.language;return o().createElement(l.Button,{key:c,loading:a===r&&n,type:a===r?"link":"text",onClick:e.handleButtonClick.bind(e,r)},c)}))),o().createElement("div",{className:M},o().createElement(A,{data:r})))}}])&&q(t.prototype,n),r&&q(t,r),c}(o().Component),z=n(623),K=n(613);const X="src-components-intro__intro--V-Tsk",J="src-components-intro__title--qG4QX",Q="src-components-intro__intro-item--1Yyj7",V="src-components-intro__icon--2sycR";function $(){return o().createElement("div",{className:X},o().createElement("h1",{className:J},"Instroction"),o().createElement(l.Row,{justify:"center"},o().createElement(l.Col,{span:5},o().createElement("div",{className:Q},o().createElement("h3",null,"Enter two Github"),o().createElement(z.Z,{className:V}))),o().createElement(l.Col,{span:5},o().createElement("div",{className:Q},o().createElement("h3",null,"Battle"),o().createElement(v.Z,{className:V}))),o().createElement(l.Col,{span:5},o().createElement("div",{className:Q},o().createElement("h3",null,"Winner"),o().createElement(K.Z,{className:V})))))}const H=function(e){var t=e.onSubmit;return o().createElement(l.Form,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:function(e){t(e)}},o().createElement(l.Form.Item,{label:"One",name:"One",rules:[{required:!0,message:"Please input Github name!"}]},o().createElement(l.Input,null)),o().createElement(l.Form.Item,{label:"Two",name:"Two",rules:[{required:!0,message:"Please input Github name!"}]},o().createElement(l.Input,null)),o().createElement(l.Form.Item,{wrapperCol:{offset:8,span:16}},o().createElement(l.Button,{type:"primary",htmlType:"submit"},"battle ?")))};const Y=function(e){var t=e.one,n=e.two,r=e.onReset;return o().createElement("div",null,o().createElement(l.Row,{justify:"center"},o().createElement(l.Col,{span:4,offset:-1},o().createElement("div",{style:{textAlign:"center"}},o().createElement("h2",null,"Winner"),o().createElement("h1",null,t.name),o().createElement("div",null,o().createElement(l.Image,{alt:"Winner",src:t.avatar_url,preview:!1})),o().createElement("div",null,"Repos:"," ",t.public_repos))),o().createElement(l.Col,{span:4,offset:1},o().createElement("div",{style:{textAlign:"center"}},o().createElement("h2",null,"Loser"),o().createElement("h1",null,n.name),o().createElement("div",null,o().createElement(l.Image,{alt:"Loser",src:n.avatar_url,preview:!1})),o().createElement("div",null,"Repos:"," ",t.public_repos)))),o().createElement("div",{style:{textAlign:"center"}},o().createElement(l.Button,{onClick:r},"Reset")))},ee="src-battle__battle--2wLDE";function te(e){return(te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ne(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return re(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ae(e,t){return(ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ce(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ue(e);if(t){var o=ue(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return le(this,n)}}function le(e,t){if(t&&("object"===te(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ie(e)}function ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ue(e){return(ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var se=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}(c,e);var t,n,r,a=ce(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).state={loading:!1,mode:"1",one:{},two:{}},t.submit=t.submit.bind(ie(t)),t.reset=t.reset.bind(ie(t)),t}return t=c,(n=[{key:"submit",value:function(e){var t=this;this.setState({loading:!0}),Promise.all(Object.keys(e).map((function(t){return n=e[t],R().get("https://api.github.com/users/".concat(n));var n}))).then((function(e){var n=ne(e,2),r=n[0],o=n[1];t.setState({loading:!1,mode:"2",one:r.data,two:o.data})}))}},{key:"reset",value:function(){this.setState({mode:"1"})}},{key:"render",value:function(){var e=this.state,t=e.mode,n=e.one,r=e.two,a=e.loading;return"1"===t?o().createElement("div",{className:ee},o().createElement(l.Spin,{size:"large",spinning:a}),o().createElement($,null),o().createElement(l.Row,{justify:"center"},o().createElement(l.Col,{span:10},o().createElement(H,{onSubmit:this.submit})))):o().createElement(Y,{one:n,two:r,onReset:this.reset})}}])&&oe(t.prototype,n),r&&oe(t,r),c}(r.Component);const fe={app:"src-app__app--2vXbK","items-content":"src-app__items-content--BWEp-",container:"src-app__container--2-jk-",trigger:"src-app__trigger--2Cb_M",logo:"src-app__logo--3FCLS","site-layout-background":"src-app__site-layout-background--3-MM5",content:"src-app__content--2rrCX"};function pe(e){return(pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function me(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ye(e,t){return(ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function de(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ve(e);if(t){var o=ve(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return he(this,n)}}function he(e,t){if(t&&("object"===pe(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return be(e)}function be(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ve(e){return(ve=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ge=l.Layout.Content,Ee=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ye(e,t)}(c,e);var t,n,r,a=de(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).state={collapsed:!1},t.toggle=t.toggle.bind(be(t)),t}return t=c,(n=[{key:"toggle",value:function(){var e=this.state.collapsed;this.setState({collapsed:!e})}},{key:"render",value:function(){var e=this.state.collapsed;return o().createElement(i.UT,null,o().createElement(l.Layout,{className:fe.container},o().createElement(j,{collapsed:e}),o().createElement(l.Layout,{className:fe["site-layout"]},o().createElement(d,{collapsed:this.state.collapsed,onToggle:this.toggle}),o().createElement(ge,{className:"".concat(fe["site-layout-background"]," ").concat(fe.content)},o().createElement(u.rs,null,o().createElement(u.AW,{exact:!0,path:"/"},o().createElement(U,null)),o().createElement(u.AW,{path:"/".concat(O)},o().createElement(U,null)),o().createElement(u.AW,{path:"/".concat(S)},o().createElement(se,null)))))))}}])&&me(t.prototype,n),r&&me(t,r),c}(o().Component);c().render(o().createElement(Ee,null),document.getElementById("app"))},517:e=>{e.exports=PropTypes},804:e=>{e.exports=React}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var c=1/0;for(s=0;s<e.length;s++){for(var[n,o,a]=e[s],l=!0,i=0;i<n.length;i++)(!1&a||c>=a)&&Object.keys(r.O).every((e=>r.O[e](n[i])))?n.splice(i--,1):(l=!1,a<c&&(c=a));if(l){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[n,o,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[c,l,i]=n,u=0;for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(i)var s=i(r);for(t&&t(n);u<c.length;u++)a=c[u],r.o(e,a)&&e[a]&&e[a][0](),e[c[u]]=0;return r.O(s)},n=self.webpackChunkhot_pro=self.webpackChunkhot_pro||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[569],(()=>r(176)));o=r.O(o)})();
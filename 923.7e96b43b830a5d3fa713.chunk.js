"use strict";(self.webpackChunkhot_pro=self.webpackChunkhot_pro||[]).push([[923],{923:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(804),o=n.n(r),l=n(953),a=n(727),u=n(376),c=n.n(u),i=n(839);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,l=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(f,e);var t,n,r,u=d(f);function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=u.call(this,e)).state={winner:null,loser:null,loading:!1},t}return t=f,(n=[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0});var t=s((0,i.e)(),2)[1];Promise.all(t.map((function(e){return t=e.value,c().get("https://api.github.com/users/".concat(t));var t}))).then((function(t){var n=s(t,2),r=n[0],o=n[1];r.data.public_repos>o.data.public_repos?e.setState({winner:r.data,loser:o.data,loading:!1}):e.setState({winner:o.data,loser:r.data,loading:!1})})).catch((function(e){l.message.error(e.response.data.message,3)}))}},{key:"render",value:function(){var e=this.state,t=e.winner,n=e.loser;return e.loading?o().createElement(l.Spin,null):t&&n?o().createElement("div",null,o().createElement(l.Row,{justify:"center"},o().createElement(l.Col,{span:4,offset:-1},o().createElement("div",{style:{textAlign:"center"}},o().createElement("h2",null,"Winner"),o().createElement("h1",null,t.name),o().createElement("div",null,o().createElement(l.Image,{alt:"Winner",src:t.avatar_url,preview:!1})),o().createElement("div",null,"Repos:"," ",t.public_repos))),o().createElement(l.Col,{span:4,offset:1},o().createElement("div",{style:{textAlign:"center"}},o().createElement("h2",null,"Loser"),o().createElement("h1",null,n.name),o().createElement("div",null,o().createElement(l.Image,{alt:"Loser",src:n.avatar_url,preview:!1})),o().createElement("div",null,"Repos:"," ",n.public_repos)))),o().createElement("div",{style:{textAlign:"center"}},o().createElement(l.Button,null,o().createElement(a.rU,{to:"/battle"},"Reset")))):null}}])&&y(t.prototype,n),r&&y(t,r),f}(r.Component)}}]);
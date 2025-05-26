/*! For license information please see 8b3209e659d14f9cbeb9.chunk.js.LICENSE.txt */
(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[452],{10752:(e,t,n)=>{var i=n(21078),r=n(87740);e.exports=function(e,t){return i(r(e,t),1/0)}},27678:(e,t,n)=>{"use strict";function i(e){var t=e.getBoundingClientRect(),n=document.documentElement;return{left:t.left+(window.pageXOffset||n.scrollLeft)-(n.clientLeft||document.body.clientLeft||0),top:t.top+(window.pageYOffset||n.scrollTop)-(n.clientTop||document.body.clientTop||0)}}n.d(t,{os:()=>i})},9238:(e,t,n)=>{"use strict";n.d(t,{DragLayer:()=>X,DragSource:()=>P,DropTarget:()=>V});var i=n(28195);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e){return"function"==typeof e}function a(){}function s(e){if(!function(e){return"object"===r(e)&&null!==e}(e))return!1;if(null===Object.getPrototypeOf(e))return!0;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function l(e){var t=e.current;return null==t?null:t.decoratedRef?t.decoratedRef.current:t}function d(e){return(t=e)&&t.prototype&&"function"==typeof t.prototype.render||function(e){var t;return"Symbol(react.forward_ref)"===(null==e||null===(t=e.$$typeof)||void 0===t?void 0:t.toString())}(e);var t}var c=n(67294),h=n(15047),u=n(8679),p=n.n(u),m=n(82514);function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function v(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}var b=function(){var e=function(){function e(t){g(this,e),this.isDisposed=!1,this.action=o(t)?t:a}return v(e,[{key:"dispose",value:function(){this.isDisposed||(this.action(),this.isDisposed=!0)}}],[{key:"isDisposable",value:function(e){return Boolean(e&&o(e.dispose))}},{key:"_fixup",value:function(t){return e.isDisposable(t)?t:e.empty}},{key:"create",value:function(t){return new e(t)}}]),e}();return e.empty={dispose:a},e}(),y=function(){function e(){g(this,e),this.isDisposed=!1;for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.disposables=n}return v(e,[{key:"add",value:function(e){this.isDisposed?e.dispose():this.disposables.push(e)}},{key:"remove",value:function(e){var t=!1;if(!this.isDisposed){var n=this.disposables.indexOf(e);-1!==n&&(t=!0,this.disposables.splice(n,1),e.dispose())}return t}},{key:"clear",value:function(){if(!this.isDisposed){for(var e=this.disposables.length,t=new Array(e),n=0;n<e;n++)t[n]=this.disposables[n];this.disposables=[];for(var i=0;i<e;i++)t[i].dispose()}}},{key:"dispose",value:function(){if(!this.isDisposed){this.isDisposed=!0;for(var e=this.disposables.length,t=new Array(e),n=0;n<e;n++)t[n]=this.disposables[n];this.disposables=[];for(var i=0;i<e;i++)t[i].dispose()}}}]),e}(),x=function(){function e(){g(this,e),this.isDisposed=!1}return v(e,[{key:"getDisposable",value:function(){return this.current}},{key:"setDisposable",value:function(e){var t=this.isDisposed;if(!t){var n=this.current;this.current=e,n&&n.dispose()}t&&e&&e.dispose()}},{key:"dispose",value:function(){if(!this.isDisposed){this.isDisposed=!0;var e=this.current;this.current=void 0,e&&e.dispose()}}}]),e}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function w(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Z(e,t){return Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Z(e,t)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}function R(e){var t=e.DecoratedComponent,n=e.createHandler,r=e.createMonitor,o=e.createConnector,a=e.registerHandler,s=e.containerDisplayName,l=e.getType,u=e.collect,g=e.options.arePropsEqual,f=void 0===g?h.w:g,v=t,R=t.displayName||t.name||"Component",$=function(){var e=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(T,e);var t,s,p,g,$=(p=T,g=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t,n,i=k(p);if(g){var r=k(this).constructor;e=Reflect.construct(i,arguments,r)}else e=i.apply(this,arguments);return t=this,!(n=e)||"object"!==C(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t):n});function T(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,T),(t=$.call(this,e)).decoratedRef=c.createRef(),t.handleChange=function(){var e=t.getCurrentState();(0,h.w)(e,t.state)||t.setState(e)},t.disposable=new x,t.receiveProps(e),t.dispose(),t}return t=T,(s=[{key:"getHandlerId",value:function(){return this.handlerId}},{key:"getDecoratedComponentInstance",value:function(){return(0,i.k)(this.decoratedRef.current,"In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"),this.decoratedRef.current}},{key:"shouldComponentUpdate",value:function(e,t){return!f(e,this.props)||!(0,h.w)(t,this.state)}},{key:"componentDidMount",value:function(){this.disposable=new x,this.currentType=void 0,this.receiveProps(this.props),this.handleChange()}},{key:"componentDidUpdate",value:function(e){f(this.props,e)||(this.receiveProps(this.props),this.handleChange())}},{key:"componentWillUnmount",value:function(){this.dispose()}},{key:"receiveProps",value:function(e){this.handler&&(this.handler.receiveProps(e),this.receiveType(l(e)))}},{key:"receiveType",value:function(e){if(this.handlerMonitor&&this.manager&&this.handlerConnector&&e!==this.currentType){this.currentType=e;var t=(o=a(e,this.handler,this.manager),s=2,function(e){if(Array.isArray(e))return e}(o)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}}(o,s)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}(o,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=t[0],i=t[1];this.handlerId=n,this.handlerMonitor.receiveHandlerId(n),this.handlerConnector.receiveHandlerId(n);var r=this.manager.getMonitor().subscribeToStateChange(this.handleChange,{handlerIds:[n]});this.disposable.setDisposable(new y(new b(r),new b(i)))}var o,s}},{key:"dispose",value:function(){this.disposable.dispose(),this.handlerConnector&&this.handlerConnector.receiveHandlerId(null)}},{key:"getCurrentState",value:function(){return this.handlerConnector?u(this.handlerConnector.hooks,this.handlerMonitor,this.props):{}}},{key:"render",value:function(){var e=this;return c.createElement(m.L.Consumer,null,(function(t){var n=t.dragDropManager;return e.receiveDragDropManager(n),"undefined"!=typeof requestAnimationFrame&&requestAnimationFrame((function(){var t;return null===(t=e.handlerConnector)||void 0===t?void 0:t.reconnect()})),c.createElement(v,Object.assign({},e.props,e.getCurrentState(),{ref:d(v)?e.decoratedRef:null}))}))}},{key:"receiveDragDropManager",value:function(e){void 0===this.manager&&((0,i.k)(void 0!==e,"Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",R,R),void 0!==e&&(this.manager=e,this.handlerMonitor=r(e),this.handlerConnector=o(e.getBackend()),this.handler=n(this.handlerMonitor,this.decoratedRef)))}}])&&w(t.prototype,s),T}(c.Component);return e.DecoratedComponent=t,e.displayName="".concat(s,"(").concat(R,")"),e}();return p()($,t)}var $=n(33273),T=n(60938),D=n(8556);function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function I(e,t){return"string"==typeof e||"symbol"===M(e)||!!t&&Array.isArray(e)&&e.every((function(e){return I(e,!1)}))}function F(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var E=["canDrag","beginDrag","isDragging","endDrag"],_=["beginDrag"],z=function(){function e(t,n,i){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.props=null,this.beginDrag=function(){if(r.props)return r.spec.beginDrag(r.props,r.monitor,r.ref.current)},this.spec=t,this.monitor=n,this.ref=i}var t,n;return t=e,(n=[{key:"receiveProps",value:function(e){this.props=e}},{key:"canDrag",value:function(){return!!this.props&&(!this.spec.canDrag||this.spec.canDrag(this.props,this.monitor))}},{key:"isDragging",value:function(e,t){return!!this.props&&(this.spec.isDragging?this.spec.isDragging(this.props,this.monitor):t===e.getSourceId())}},{key:"endDrag",value:function(){this.props&&this.spec.endDrag&&this.spec.endDrag(this.props,this.monitor,l(this.ref))}}])&&F(t.prototype,n),e}();function P(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=e;"function"!=typeof e&&((0,i.k)(I(e),'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',e),o=function(){return e}),(0,i.k)(s(t),'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',t);var a=function(e){return Object.keys(e).forEach((function(t){(0,i.k)(E.indexOf(t)>-1,'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',E.join(", "),t),(0,i.k)("function"==typeof e[t],"Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",t,t,e[t])})),_.forEach((function(t){(0,i.k)("function"==typeof e[t],"Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",t,t,e[t])})),function(t,n){return new z(e,t,n)}}(t);return(0,i.k)("function"==typeof n,'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',n),(0,i.k)(s(r),'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',n),function(e){return R({containerDisplayName:"DragSource",createHandler:a,registerHandler:$.w,createConnector:function(e){return new D.x(e)},createMonitor:function(e){return new T.p(e)},DecoratedComponent:e,getType:o,collect:n,options:r})}}var U=n(89026),O=n(56941);function B(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var N=["canDrop","hover","drop"],q=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.props=null,this.spec=t,this.monitor=n,this.ref=i}var t,n;return t=e,(n=[{key:"receiveProps",value:function(e){this.props=e}},{key:"receiveMonitor",value:function(e){this.monitor=e}},{key:"canDrop",value:function(){return!this.spec.canDrop||this.spec.canDrop(this.props,this.monitor)}},{key:"hover",value:function(){this.spec.hover&&this.props&&this.spec.hover(this.props,this.monitor,l(this.ref))}},{key:"drop",value:function(){if(this.spec.drop)return this.spec.drop(this.props,this.monitor,this.ref.current)}}])&&B(t.prototype,n),e}();function V(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=e;"function"!=typeof e&&((0,i.k)(I(e,!0),'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',e),o=function(){return e}),(0,i.k)(s(t),'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',t);var a=function(e){return Object.keys(e).forEach((function(t){(0,i.k)(N.indexOf(t)>-1,'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',N.join(", "),t),(0,i.k)("function"==typeof e[t],"Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target",t,t,e[t])})),function(t,n){return new q(e,t,n)}}(t);return(0,i.k)("function"==typeof n,'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',n),(0,i.k)(s(r),'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',n),function(e){return R({containerDisplayName:"DropTarget",createHandler:a,registerHandler:$.n,createMonitor:function(e){return new O.H(e)},createConnector:function(e){return new U.Y(e)},DecoratedComponent:e,getType:o,collect:n,options:r})}}function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function K(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}function X(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,i.k)("function"==typeof e,'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ',"Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer",e),(0,i.k)(s(t),'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer',t),function(n){var r=n,o=t.arePropsEqual,a=void 0===o?h.w:o,s=r.displayName||r.name||"Component",l=function(){var t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(g,t);var n,o,l,u,p=(l=g,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t,n,i=L(l);if(u){var r=L(this).constructor;e=Reflect.construct(i,arguments,r)}else e=i.apply(this,arguments);return t=this,!(n=e)||"object"!==A(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t):n});function g(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,g),(e=p.apply(this,arguments)).isCurrentlyMounted=!1,e.ref=c.createRef(),e.handleChange=function(){if(e.isCurrentlyMounted){var t=e.getCurrentState();(0,h.w)(t,e.state)||e.setState(t)}},e}return n=g,(o=[{key:"getDecoratedComponentInstance",value:function(){return(0,i.k)(this.ref.current,"In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"),this.ref.current}},{key:"shouldComponentUpdate",value:function(e,t){return!a(e,this.props)||!(0,h.w)(t,this.state)}},{key:"componentDidMount",value:function(){this.isCurrentlyMounted=!0,this.handleChange()}},{key:"componentWillUnmount",value:function(){this.isCurrentlyMounted=!1,this.unsubscribeFromOffsetChange&&(this.unsubscribeFromOffsetChange(),this.unsubscribeFromOffsetChange=void 0),this.unsubscribeFromStateChange&&(this.unsubscribeFromStateChange(),this.unsubscribeFromStateChange=void 0)}},{key:"render",value:function(){var e=this;return c.createElement(m.L.Consumer,null,(function(t){var n=t.dragDropManager;return void 0===n?null:(e.receiveDragDropManager(n),e.isCurrentlyMounted?c.createElement(r,Object.assign({},e.props,e.state,{ref:d(r)?e.ref:null})):null)}))}},{key:"receiveDragDropManager",value:function(e){if(void 0===this.manager){this.manager=e,(0,i.k)("object"===A(e),"Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",s,s);var t=this.manager.getMonitor();this.unsubscribeFromOffsetChange=t.subscribeToOffsetChange(this.handleChange),this.unsubscribeFromStateChange=t.subscribeToStateChange(this.handleChange)}}},{key:"getCurrentState",value:function(){if(!this.manager)return{};var t=this.manager.getMonitor();return e(t,this.props)}}])&&K(n.prototype,o),g}(c.Component);return t.displayName="DragLayer(".concat(s,")"),t.DecoratedComponent=n,t}();return p()(l,n)}}},84785:(e,t,n)=>{"use strict";n.d(t,{DragLayer:()=>r.DragLayer,DragSource:()=>r.DragSource,DropTarget:()=>r.DropTarget});var i=n(31388);n.o(i,"DragLayer")&&n.d(t,{DragLayer:function(){return i.DragLayer}}),n.o(i,"DragSource")&&n.d(t,{DragSource:function(){return i.DragSource}}),n.o(i,"DropTarget")&&n.d(t,{DropTarget:function(){return i.DropTarget}});var r=n(9238)},54238:()=>{},53279:()=>{},31388:(e,t,n)=>{"use strict";var i=n(75253);n.o(i,"DragLayer")&&n.d(t,{DragLayer:function(){return i.DragLayer}}),n.o(i,"DragSource")&&n.d(t,{DragSource:function(){return i.DragSource}}),n.o(i,"DropTarget")&&n.d(t,{DropTarget:function(){return i.DropTarget}});var r=n(53279);n.o(r,"DragLayer")&&n.d(t,{DragLayer:function(){return r.DragLayer}}),n.o(r,"DragSource")&&n.d(t,{DragSource:function(){return r.DragSource}}),n.o(r,"DropTarget")&&n.d(t,{DropTarget:function(){return r.DropTarget}});var o=n(72105);n.o(o,"DragLayer")&&n.d(t,{DragLayer:function(){return o.DragLayer}}),n.o(o,"DragSource")&&n.d(t,{DragSource:function(){return o.DragSource}}),n.o(o,"DropTarget")&&n.d(t,{DropTarget:function(){return o.DropTarget}});var a=n(54238);n.o(a,"DragLayer")&&n.d(t,{DragLayer:function(){return a.DragLayer}}),n.o(a,"DragSource")&&n.d(t,{DragSource:function(){return a.DragSource}}),n.o(a,"DropTarget")&&n.d(t,{DropTarget:function(){return a.DropTarget}})},75253:()=>{},72105:()=>{},24903:(e,t,n)=>{"use strict";t.cj=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(67294),o=l(r),a=l(n(45697)),s=n(76597);function l(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={searchTerm:n.props.value||""},n.updateSearch=n.updateSearch.bind(n),n.filter=n.filter.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentWillReceiveProps",value:function(e){if(void 0!==e.value&&e.value!==this.props.value){var t={target:{value:e.value}};this.updateSearch(t)}}},{key:"render",value:function(){var e=this.props,t=e.className,n=(e.onChange,e.caseSensitive,e.sortResults,e.throttle,e.filterKeys,e.value,e.fuzzy,e.inputClassName),i=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(e,["className","onChange","caseSensitive","sortResults","throttle","filterKeys","value","fuzzy","inputClassName"]);return i.type=i.type||"search",i.value=this.state.searchTerm,i.onChange=this.updateSearch,i.className=n,i.placeholder=i.placeholder||"Search",o.default.createElement("div",{className:t},o.default.createElement("input",i))}},{key:"updateSearch",value:function(e){var t=this,n=e.target.value;this.setState({searchTerm:n},(function(){t._throttleTimeout&&clearTimeout(t._throttleTimeout),t._throttleTimeout=setTimeout((function(){return t.props.onChange(n)}),t.props.throttle)}))}},{key:"filter",value:function(e){var t=this.props,n=t.filterKeys,i=t.caseSensitive,r=t.fuzzy,o=t.sortResults;return(0,s.createFilter)(this.state.searchTerm,e||n,{caseSensitive:i,fuzzy:r,sortResults:o})}}]),t}(r.Component);d.defaultProps={className:"",onChange:function(){},caseSensitive:!1,fuzzy:!1,throttle:200},d.propTypes={className:a.default.string,inputClassName:a.default.string,onChange:a.default.func,caseSensitive:a.default.bool,sortResults:a.default.bool,fuzzy:a.default.bool,throttle:a.default.number,filterKeys:a.default.oneOf([a.default.string,a.default.arrayOf(a.default.string)]),value:a.default.string},t.cj=s.createFilter},76597:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getValuesForKey=a,t.searchStrings=s,t.createFilter=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(i){if(""===e)return!0;n.caseSensitive||(e=e.toLowerCase());var r=e.split(" ");return t?("string"==typeof t&&(t=[t]),r.every((function(e){var r=void 0;if(-1!==e.indexOf(":")){var o=e.split(":")[0];e=e.split(":")[1],r=t.filter((function(e){return e.toLowerCase().indexOf(o)>-1}))}else r=t;return r.some((function(t){return s(a(t,i),e,n)}))}))):r.every((function(e){return s([i],e,n)}))}};var i,r=(i=n(69021))&&i.__esModule?i:{default:i};function o(e){return e.reduce((function(e,t){return e.concat(Array.isArray(t)?o(t):t)}),[])}function a(e,t){var n=e.split("."),i=[t];return n.forEach((function(e){var t=[];i.forEach((function(n){if(n)if(n instanceof Array){var i=parseInt(e,10);if(!isNaN(i))return t.push(n[i]);n.forEach((function(n){t.push(n[e])}))}else n&&"function"==typeof n.get?t.push(n.get(e)):t.push(n[e])})),i=t})),(i=o(i=i.map((function(e){return e&&e.push&&e.toArray?e.toArray():e})))).filter((function(e){return"string"==typeof e||"number"==typeof e}))}function s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.caseSensitive,o=n.fuzzy,a=n.sortResults,s=n.exactMatch;e=e.map((function(e){return e.toString()}));try{return o?("function"==typeof e.toJS&&(e=e.toJS()),new r.default(e.map((function(e){return{id:e}})),{keys:["id"],id:"id",caseSensitive:i,shouldSort:a}).search(t).length):e.some((function(e){try{return i||(e=e.toLowerCase()),s&&(t=new RegExp("^"+t+"$","i")),!(!e||-1===e.search(t))}catch(e){return!1}}))}catch(e){return!1}}},69021:function(e){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=n(1),a=n(7),s=a.get,l=(a.deepValue,a.isArray),d=function(){function e(t,n){var i=n.location,r=void 0===i?0:i,o=n.distance,a=void 0===o?100:o,l=n.threshold,d=void 0===l?.6:l,c=n.maxPatternLength,h=void 0===c?32:c,u=n.caseSensitive,p=void 0!==u&&u,m=n.tokenSeparator,g=void 0===m?/ +/g:m,f=n.findAllMatches,v=void 0!==f&&f,b=n.minMatchCharLength,y=void 0===b?1:b,x=n.id,C=void 0===x?null:x,S=n.keys,w=void 0===S?[]:S,Z=n.shouldSort,k=void 0===Z||Z,R=n.getFn,$=void 0===R?s:R,T=n.sortFn,D=void 0===T?function(e,t){return e.score-t.score}:T,M=n.tokenize,I=void 0!==M&&M,F=n.matchAllTokens,E=void 0!==F&&F,_=n.includeMatches,z=void 0!==_&&_,P=n.includeScore,U=void 0!==P&&P,O=n.verbose,B=void 0!==O&&O;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:a,threshold:d,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:g,findAllMatches:v,minMatchCharLength:y,id:C,keys:w,includeMatches:z,includeScore:U,shouldSort:k,getFn:$,sortFn:D,verbose:B,tokenize:I,matchAllTokens:E},this.setCollection(t),this._processKeys(w)}var t,n;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,n=e.length;t<n;t+=1){var i=e[t];this._keyWeights[i]=1,this._keyNames.push(i)}else{for(var r=null,o=null,a=0,s=0,l=e.length;s<l;s+=1){var d=e[s];if(!d.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var c=d.name;if(this._keyNames.push(c),!d.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var h=d.weight;if(h<0||h>1)throw new Error('"weight" property in key must bein the range of [0, 1)');o=null==o?h:Math.max(o,h),r=null==r?h:Math.min(r,h),this._keyWeights[c]=h,a+=h}if(a>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),i=n.tokenSearchers,r=n.fullSearcher,o=this._search(i,r);return this._computeScore(o),this.options.shouldSort&&this._sort(o),t.limit&&"number"==typeof t.limit&&(o=o.slice(0,t.limit)),this._format(o)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),i=0,r=n.length;i<r;i+=1)t.push(new o(n[i],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,i={},r=[];if("string"==typeof n[0]){for(var o=0,a=n.length;o<a;o+=1)this._analyze({key:"",value:n[o],record:o,index:o},{resultMap:i,results:r,tokenSearchers:e,fullSearcher:t});return r}for(var s=0,l=n.length;s<l;s+=1)for(var d=n[s],c=0,h=this._keyNames.length;c<h;c+=1){var u=this._keyNames[c];this._analyze({key:u,value:this.options.getFn(d,u),record:d,index:s},{resultMap:i,results:r,tokenSearchers:e,fullSearcher:t})}return r}},{key:"_analyze",value:function(e,t){var n=this,i=e.key,r=e.arrayIndex,o=void 0===r?-1:r,a=e.value,s=e.record,d=e.index,c=t.tokenSearchers,h=void 0===c?[]:c,u=t.fullSearcher,p=t.resultMap,m=void 0===p?{}:p,g=t.results,f=void 0===g?[]:g;!function e(t,r,o,a){if(null!=r)if("string"==typeof r){var s=!1,d=-1,c=0;n._log("\nKey: ".concat(""===i?"--":i));var p=u.search(r);if(n._log('Full text: "'.concat(r,'", score: ').concat(p.score)),n.options.tokenize){for(var g=r.split(n.options.tokenSeparator),v=g.length,b=[],y=0,x=h.length;y<x;y+=1){var C=h[y];n._log('\nPattern: "'.concat(C.pattern,'"'));for(var S=!1,w=0;w<v;w+=1){var Z=g[w],k=C.search(Z),R={};k.isMatch?(R[Z]=k.score,s=!0,S=!0,b.push(k.score)):(R[Z]=1,n.options.matchAllTokens||b.push(1)),n._log('Token: "'.concat(Z,'", score: ').concat(R[Z]))}S&&(c+=1)}d=b[0];for(var $=b.length,T=1;T<$;T+=1)d+=b[T];d/=$,n._log("Token score average:",d)}var D=p.score;d>-1&&(D=(D+d)/2),n._log("Score average:",D);var M=!n.options.tokenize||!n.options.matchAllTokens||c>=h.length;if(n._log("\nCheck Matches: ".concat(M)),(s||p.isMatch)&&M){var I={key:i,arrayIndex:t,value:r,score:D};n.options.includeMatches&&(I.matchedIndices=p.matchedIndices);var F=m[a];F?F.output.push(I):(m[a]={item:o,output:[I]},f.push(m[a]))}}else if(l(r))for(var E=0,_=r.length;E<_;E+=1)e(E,r[E],o,a)}(o,a,s,d)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,n=!!Object.keys(t).length,i=0,r=e.length;i<r;i+=1){for(var o=e[i],a=o.output,s=a.length,l=1,d=0;d<s;d+=1){var c=a[d],h=c.key,u=n?t[h]:1,p=0===c.score&&t&&t[h]>0?Number.EPSILON:c.score;l*=Math.pow(p,u)}o.score=l,this._log(o)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===i(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t}),2)),n=null}var r=[];this.options.includeMatches&&r.push((function(e,t){var n=e.output;t.matches=[];for(var i=0,r=n.length;i<r;i+=1){var o=n[i];if(0!==o.matchedIndices.length){var a={indices:o.matchedIndices,value:o.value};o.key&&(a.key=o.key),o.hasOwnProperty("arrayIndex")&&o.arrayIndex>-1&&(a.arrayIndex=o.arrayIndex),t.matches.push(a)}}})),this.options.includeScore&&r.push((function(e,t){t.score=e.score}));for(var o=0,a=e.length;o<a;o+=1){var s=e[o];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),r.length){for(var l={item:s.item},d=0,c=r.length;d<c;d+=1)r[d](s,l);t.push(l)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&r(t.prototype,n),e}();e.exports=d},function(e,t,n){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=n(2),o=n(3),a=n(6),s=function(){function e(t,n){var i=n.location,r=void 0===i?0:i,o=n.distance,s=void 0===o?100:o,l=n.threshold,d=void 0===l?.6:l,c=n.maxPatternLength,h=void 0===c?32:c,u=n.isCaseSensitive,p=void 0!==u&&u,m=n.tokenSeparator,g=void 0===m?/ +/g:m,f=n.findAllMatches,v=void 0!==f&&f,b=n.minMatchCharLength,y=void 0===b?1:b,x=n.includeMatches,C=void 0!==x&&x;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:s,threshold:d,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:g,findAllMatches:v,includeMatches:C,minMatchCharLength:y},this.pattern=p?t:t.toLowerCase(),this.pattern.length<=h&&(this.patternAlphabet=a(this.pattern))}var t,n;return t=e,(n=[{key:"search",value:function(e){var t=this.options,n=t.isCaseSensitive,i=t.includeMatches;if(n||(e=e.toLowerCase()),this.pattern===e){var a={isMatch:!0,score:0};return i&&(a.matchedIndices=[[0,e.length-1]]),a}var s=this.options,l=s.maxPatternLength,d=s.tokenSeparator;if(this.pattern.length>l)return r(e,this.pattern,d);var c=this.options,h=c.location,u=c.distance,p=c.threshold,m=c.findAllMatches,g=c.minMatchCharLength;return o(e,this.pattern,this.patternAlphabet,{location:h,distance:u,threshold:p,findAllMatches:m,minMatchCharLength:g,includeMatches:i})}}])&&i(t.prototype,n),e}();e.exports=s},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,r=new RegExp(t.replace(n,"\\$&").replace(i,"|")),o=e.match(r),a=!!o,s=[];if(a)for(var l=0,d=o.length;l<d;l+=1){var c=o[l];s.push([e.indexOf(c),c.length-1])}return{score:a?.5:1,isMatch:a,matchedIndices:s}}},function(e,t,n){var i=n(4),r=n(5);e.exports=function(e,t,n,o){for(var a=o.location,s=void 0===a?0:a,l=o.distance,d=void 0===l?100:l,c=o.threshold,h=void 0===c?.6:c,u=o.findAllMatches,p=void 0!==u&&u,m=o.minMatchCharLength,g=void 0===m?1:m,f=o.includeMatches,v=void 0!==f&&f,b=s,y=e.length,x=h,C=e.indexOf(t,b),S=t.length,w=[],Z=0;Z<y;Z+=1)w[Z]=0;if(-1!==C){var k=i(t,{errors:0,currentLocation:C,expectedLocation:b,distance:d});if(x=Math.min(k,x),-1!==(C=e.lastIndexOf(t,b+S))){var R=i(t,{errors:0,currentLocation:C,expectedLocation:b,distance:d});x=Math.min(R,x)}}C=-1;for(var $=[],T=1,D=S+y,M=1<<(S<=31?S-1:30),I=0;I<S;I+=1){for(var F=0,E=D;F<E;)i(t,{errors:I,currentLocation:b+E,expectedLocation:b,distance:d})<=x?F=E:D=E,E=Math.floor((D-F)/2+F);D=E;var _=Math.max(1,b-E+1),z=p?y:Math.min(b+E,y)+S,P=Array(z+2);P[z+1]=(1<<I)-1;for(var U=z;U>=_;U-=1){var O=U-1,B=n[e.charAt(O)];if(B&&(w[O]=1),P[U]=(P[U+1]<<1|1)&B,0!==I&&(P[U]|=($[U+1]|$[U])<<1|1|$[U+1]),P[U]&M&&(T=i(t,{errors:I,currentLocation:O,expectedLocation:b,distance:d}))<=x){if(x=T,(C=O)<=b)break;_=Math.max(1,2*b-C)}}if(i(t,{errors:I+1,currentLocation:b,expectedLocation:b,distance:d})>x)break;$=P}var N={isMatch:C>=0,score:0===T?.001:T};return v&&(N.matchedIndices=r(w,g)),N}},function(e,t){e.exports=function(e,t){var n=t.errors,i=void 0===n?0:n,r=t.currentLocation,o=void 0===r?0:r,a=t.expectedLocation,s=void 0===a?0:a,l=t.distance,d=void 0===l?100:l,c=i/e.length,h=Math.abs(s-o);return d?c+h/d:h?1:c}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],i=-1,r=-1,o=0,a=e.length;o<a;o+=1){var s=e[o];s&&-1===i?i=o:s||-1===i||((r=o-1)-i+1>=t&&n.push([i,r]),i=-1)}return e[o-1]&&o-i>=t&&n.push([i,o-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,i=0;i<n;i+=1)t[e.charAt(i)]=0;for(var r=0;r<n;r+=1)t[e.charAt(r)]|=1<<n-r-1;return t}},function(e,t){var n=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},i=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},r=function(e){return"string"==typeof e},o=function(e){return"number"==typeof e};e.exports={get:function(e,t){var a=[];return function e(t,s){if(s){var l=s.indexOf("."),d=s,c=null;-1!==l&&(d=s.slice(0,l),c=s.slice(l+1));var h=t[d];if(null!=h)if(c||!r(h)&&!o(h))if(n(h))for(var u=0,p=h.length;u<p;u+=1)e(h[u],c);else c&&e(h,c);else a.push(i(h))}else a.push(t)}(e,t),a},isArray:n,isString:r,isNum:o,toString:i}}])},15208:(e,t,n)=>{"use strict";n.d(t,{d:()=>r});var i=n(67294);const r=(e,t)=>{const n=(0,i.useRef)(!1);(0,i.useEffect)((()=>{n.current?e():n.current=!0}),[...t||[e]])}},78243:(e,t,n)=>{"use strict";n.d(t,{W:()=>r});var i=n(67294);function r(e){const t=(0,i.useRef)(null),[n,r]=(0,i.useState)(!1),o=e=>{const[t]=e;r(t.intersectionRatio<1)};return(0,i.useEffect)((()=>{const n=new IntersectionObserver(o,e),i=t.current;return i&&n.observe(i),()=>{i&&n.unobserve(i)}}),[t,e]),[t,n]}},51794:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(67294);const r=()=>{const[e,t]=(0,i.useState)(0),[n,r]=(0,i.useState)(!1),o=(0,i.useRef)(null),a=(0,i.useRef)(null);return(0,i.useLayoutEffect)((()=>{var e;const n=()=>{const e=o.current;if(!e)return;const n=a.current,{scrollWidth:i,clientWidth:s,childNodes:l}=e;if(i>s){const e=6,i=(null==n?void 0:n.offsetWidth)||0,o=s-e,a=l.length;let d=0,c=0;for(let e=0;e<a;e+=1)o-d-i<=0&&(c+=1),d+=l[e].offsetWidth;a>1&&c?(r(!0),t(c)):(r(!1),t(1))}else r(!1),t(0)},i=new ResizeObserver(n),s=null==(e=o.current)?void 0:e.parentElement;return s&&i.observe(s),n(),()=>{i.disconnect()}}),[a.current]),[o,a,e,n]}},82607:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(51995),r=n(78573),o=n(35944);const a=(0,i.iK)((e=>(0,o.tZ)(r.Z,{...e})))`
  ${({theme:e,color:t,count:n})=>`\n    & > sup,\n    & > sup.antd5-badge-count {\n      ${void 0!==n?`background: ${t||e.colors.primary.base};`:""}\n    }\n  `}
`},42074:(e,t,n)=>{"use strict";n.d(t,{P:()=>d});var i=n(21804),r=n.n(i),o=n(4715),a=n(51995),s=n(35944);const l=a.iK.div`
  .ant-btn-group {
    button.ant-btn {
      background-color: ${({theme:e})=>e.colors.primary.dark1};
      border-color: transparent;
      color: ${({theme:e})=>e.colors.grayscale.light5};
      font-size: 12px;
      line-height: 13px;
      outline: none;
      text-transform: uppercase;
      &:first-of-type {
        border-radius: ${({theme:e})=>`${e.gridUnit}px 0 0 ${e.gridUnit}px`};
        margin: 0;
        width: 120px;
      }

      &:disabled {
        background-color: ${({theme:e})=>e.colors.grayscale.light2};
        color: ${({theme:e})=>e.colors.grayscale.base};
      }
      &:nth-of-type(2) {
        margin: 0;
        border-radius: ${({theme:e})=>`0 ${e.gridUnit}px ${e.gridUnit}px 0`};
        width: ${({theme:e})=>9*e.gridUnit}px;
        &:before,
        &:hover:before {
          border-left: 1px solid ${({theme:e})=>e.colors.grayscale.light5};
          content: '';
          display: block;
          height: ${({theme:e})=>8*e.gridUnit}px;
          margin: 0;
          position: absolute;
          width: ${({theme:e})=>.25*e.gridUnit}px;
        }

        &:disabled:before {
          border-left: 1px solid ${({theme:e})=>e.colors.grayscale.base};
        }
      }
    }
  }
`,d=({overlay:e,tooltip:t,placement:n,...i})=>{const a=(t={})=>(0,s.tZ)(l,{children:(0,s.tZ)(o.Gj.Button,{overlay:e,...i,...t})});return t?a({buttonsRender:([e,i])=>[(0,s.tZ)(o._e,{placement:n,id:`${r()(t)}-tooltip`,title:t,children:e}),i]}):a()}},38270:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var i=n(67294),r=n(73727),o=n(93967),a=n.n(o),s=n(51995),l=n(61988),d=n(11965),c=n(58593),h=n(79789),u=n(35944);const p=(0,s.iK)(h.Z)`
  vertical-align: middle;
`;function m({canEdit:e=!1,editing:t=!1,extraClasses:n,multiLine:o=!1,noPermitTooltip:s,onSaveTitle:h,showTooltip:m=!0,style:g,title:f="",defaultTitle:v="",placeholder:b="",certifiedBy:y,certificationDetails:x,url:C,...S}){const[w,Z]=(0,i.useState)(t),[k,R]=(0,i.useState)(f),[$,T]=(0,i.useState)(f),[D,M]=(0,i.useState)(null),I=(0,i.useRef)();function F(){if(!e||w)return;const t=I.current?I.current.getBoundingClientRect():null;Z(!0),M(t)}function E(){const t=k.trim();e&&(Z(!1),t.length?($!==t&&T(t),f!==t&&h(t)):R($))}function _(e){" "===e.key&&e.stopPropagation(),"Enter"===e.key&&(e.preventDefault(),E())}function z(t){e&&R(t.target.value)}function P(e){"Enter"===e.key&&(e.preventDefault(),E())}let U;(0,i.useEffect)((()=>{f!==k&&(T(k),R(f))}),[f]),(0,i.useEffect)((()=>{if(w&&(I.current.focus(),I.current.setSelectionRange)){const{length:e}=I.current.value;I.current.setSelectionRange(e,e),I.current.scrollLeft=I.current.scrollWidth,I.current.scrollTop=I.current.scrollHeight}}),[w]),U=k,w||k||(U=v||f);const O=w&&D?{height:`${D.height}px`}:void 0;let B=o&&w?(0,u.tZ)("textarea",{ref:I,value:U,className:f?void 0:"text-muted",onKeyDown:_,onChange:z,onBlur:E,onClick:F,onKeyPress:P,placeholder:b,style:O}):(0,u.tZ)("input",{ref:I,type:w?"text":"button",value:U,className:f?void 0:"text-muted",onKeyDown:_,onChange:z,onBlur:E,onClick:F,onKeyPress:P,placeholder:b});return m&&!w&&(B=(0,u.tZ)(c.u,{id:"title-tooltip",title:e?(0,l.t)("Click to edit"):s||(0,l.t)("You don't have the rights to alter this title."),children:B})),e||(B=C?(0,u.tZ)(r.rU,{to:C,css:e=>d.iv`
          color: ${e.colors.grayscale.dark1};
          text-decoration: none;
          :hover {
            text-decoration: underline;
          }
          display: inline-block;
        `,children:U}):(0,u.tZ)("span",{children:U})),(0,u.BX)("span",{className:a()("editable-title",n,e&&"editable-title--editable",w&&"editable-title--editing"),style:g,...S,children:[y&&(0,u.BX)(u.HY,{children:[(0,u.tZ)(p,{certifiedBy:y,details:x,size:"xl"})," "]}),B]})}},80663:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var i=n(29119),r=n(51995),o=n(67294),a=n(61337),s=n(35944);const l=r.iK.div`
  position: absolute;
  height: 100%;

  :hover .sidebar-resizer::after {
    background-color: ${({theme:e})=>e.colors.primary.base};
  }

  .sidebar-resizer {
    // @z-index-above-sticky-header (100) + 1 = 101
    z-index: 101;
  }

  .sidebar-resizer::after {
    display: block;
    content: '';
    width: 1px;
    height: 100%;
    margin: 0 auto;
  }
`,d=({id:e,initialWidth:t,minWidth:n,maxWidth:r,enable:d,children:c})=>{const[h,u]=function(e,t){const n=(0,o.useRef)(),[i,r]=(0,o.useState)(t);return(0,o.useEffect)((()=>{var t;n.current=null!=(t=n.current)?t:(0,a.rV)(a.dR.CommonResizableSidebarWidths,{}),n.current[e]&&r(n.current[e])}),[e]),[i,function(t){r(t),(0,a.LS)(a.dR.CommonResizableSidebarWidths,{...n.current,[e]:t})}]}(e,t);return(0,s.BX)(s.HY,{children:[(0,s.tZ)(l,{children:(0,s.tZ)(i.e,{enable:{right:d},handleClasses:{right:"sidebar-resizer"},size:{width:h,height:"100%"},minWidth:n,maxWidth:r,onResizeStop:(e,t,n,i)=>u(h+i.width)})}),c(h)]})}},90108:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>vu});var i=n(93967),r=n.n(i),o=n(67294),a=n(51995),s=n(11965),l=n(25130),d=n(93185),c=n(78243),h=n(61988),u=n(28216),p=n(57368),m=n(49484),g=n(71262),f=n(14890),v=n(38523),b=n(35937),y=n.n(b),x=n(23279),C=n.n(x),S=n(45697),w=n.n(S),Z=n(39142),k=n(74061),R=n(24903),$=n(9875),T=n(4715),D=n(38703),M=n(35932),I=n(13322),F=n(61337),E=n(81255),_=n(80621),z=n(2275),P=n(87253),U=n(9882),O=n(4144),B=n(14278),N=n(58593),q=n(85931),V=n(35944);const A=({children:e,tooltipText:t,...n})=>{const[i,r]=(0,o.useState)(!1),a=(0,o.useRef)(null);(0,o.useEffect)((()=>{r(!!a.current&&a.current.scrollWidth>a.current.clientWidth)}),[e]);const l=(0,V.tZ)("div",{...n,ref:a,css:s.iv`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
      `,children:e});return i?(0,V.tZ)(N.u,{title:t||e,children:l}):l},K=({label:e,value:t,tooltipText:n})=>(0,V.BX)("div",{css:e=>s.iv`
      font-size: ${e.typography.sizes.s}px;
      display: flex;
      justify-content: space-between;

      &:not(:last-child) {
        margin-bottom: ${e.gridUnit}px;
      }
    `,children:[(0,V.tZ)("span",{css:e=>s.iv`
        margin-right: ${4*e.gridUnit}px;
        color: ${e.colors.grayscale.base};
      `,children:e}),(0,V.tZ)("span",{css:s.iv`
        min-width: 0;
      `,children:(0,V.tZ)(A,{tooltipText:n,children:t})})]}),j=({showThumbnails:e,placeholderRef:t})=>(0,V.tZ)("div",{ref:t,css:t=>s.iv`
      /* Display styles */
      border: 1px solid ${t.colors.primary.dark1};
      border-radius: ${t.gridUnit}px;
      color: ${t.colors.primary.dark1};
      font-size: ${t.typography.sizes.xs}px;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      padding: ${t.gridUnit/2}px ${2*t.gridUnit}px;
      margin-left: ${4*t.gridUnit}px;
      pointer-events: none;

      /* Position styles */
      visibility: hidden;
      position: ${e?"absolute":"unset"};
      top: ${e?"72px":"unset"};
      left: ${e?"84px":"unset"};
    `,children:(0,h.t)("Added")}),L=({placeholder:e})=>(0,V.tZ)("div",{css:t=>s.iv`
      /* Display styles */
      border: 1px solid ${t.colors.primary.dark1};
      border-radius: ${t.gridUnit}px;
      color: ${t.colors.primary.dark1};
      font-size: ${t.typography.sizes.xs}px;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      padding: ${t.gridUnit/2}px ${2*t.gridUnit}px;
      margin-left: ${4*t.gridUnit}px;
      pointer-events: none;

      /* Position styles */
      display: ${e?"unset":"none"};
      position: absolute;
      top: ${e?`${e.offsetTop}px`:"unset"};
      left: ${e?e.offsetLeft-2+"px":"unset"};
    `,children:(0,h.t)("Added")}),X=({datasourceUrl:e,datasourceName:t="-",innerRef:n,isSelected:i=!1,lastModified:r,sliceName:a,style:l={},thumbnailUrl:c,visType:u})=>{const p=(0,d.cr)(d.TT.Thumbnails),[m,g]=(0,o.useState)(),{mountedPluginMetadata:f}=(0,B.gp)(),v=(0,o.useMemo)((()=>{var e;return(null==(e=f[u])?void 0:e.name)||(0,h.t)("Unknown type")}),[f,u]);return(0,V.BX)("div",{ref:n,style:l,children:[(0,V.tZ)("div",{css:e=>s.iv`
          border: 1px solid ${e.colors.grayscale.light2};
          border-radius: ${e.gridUnit}px;
          background: ${e.colors.grayscale.light5};
          padding: ${4*e.gridUnit}px;
          margin: 0 ${3*e.gridUnit}px ${3*e.gridUnit}px
            ${3*e.gridUnit}px;
          position: relative;
          cursor: ${i?"not-allowed":"move"};
          white-space: nowrap;
          overflow: hidden;
          line-height: 1.3;
          color: ${e.colors.grayscale.dark1};

          &:hover {
            background: ${e.colors.grayscale.light4};
          }

          opacity: ${i?.4:"unset"};
        `,children:(0,V.BX)("div",{css:s.iv`
            display: flex;
          `,children:[p?(0,V.BX)("div",{css:s.iv`
                width: 146px;
                height: 82px;
                flex-shrink: 0;
                margin-right: 16px;
              `,children:[(0,V.tZ)(O.Z,{src:c||"",fallback:"/static/assets/images/chart-card-fallback.svg",position:"top"}),i&&p?(0,V.tZ)(j,{placeholderRef:g,showThumbnails:p}):null]}):null,(0,V.BX)("div",{css:s.iv`
              flex-grow: 1;
              min-width: 0;
            `,children:[(0,V.BX)("div",{css:e=>s.iv`
                margin-bottom: ${2*e.gridUnit}px;
                font-weight: ${e.typography.weights.bold};
                display: flex;
                justify-content: space-between;
                align-items: center;
              `,children:[(0,V.tZ)(A,{children:a}),i&&!p?(0,V.tZ)(j,{placeholderRef:g}):null]}),(0,V.BX)("div",{css:s.iv`
                display: flex;
                flex-direction: column;
              `,children:[(0,V.tZ)(K,{label:(0,h.t)("Viz type"),value:v}),(0,V.tZ)(K,{label:(0,h.t)("Dataset"),value:e?(0,V.tZ)(q.m,{to:e,children:t}):t,tooltipText:t}),(0,V.tZ)(K,{label:(0,h.t)("Modified"),value:r})]})]})]})}),(0,V.tZ)(L,{placeholder:m})]})};var H=n(84785);const W={position:"fixed",pointerEvents:"none",top:0,left:0,zIndex:101,width:344},Y={dragItem:w().shape({index:w().number.isRequired}),slices:w().arrayOf(z.Rw),isDragging:w().bool.isRequired,currentOffset:w().shape({x:w().number.isRequired,y:w().number.isRequired})};function G({dragItem:e,slices:t,isDragging:n,currentOffset:i}){if(!(n&&i&&e&&t))return null;const r=t[e.index];return r&&e.parentType===E.F0&&e.type===E.dW?(0,V.tZ)(X,{style:{...W,transform:`translate(${i.x}px, ${i.y}px)`},sliceName:r.slice_name,lastModified:r.changed_on_humanized,visType:r.viz_type,datasourceUrl:r.datasource_url,datasourceName:r.datasource_name}):null}G.propTypes=Y,G.defaultProps={currentOffset:null,dragItem:null,slices:null};const J=(0,H.DragLayer)((e=>({dragItem:e.getItem(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()})))(G);var Q,ee=n(23493),te=n.n(ee);const ne=_.Mu+1,ie=_.Mu+3,re=_.Mu+4,oe=_.Mu+5,ae={[E.U0]:{[E.yR]:_.Mu,[E.BG]:_.Mu},[E.BG]:{[E.dW]:ne,[E.t]:ne,[E.xh]:ne,[E.BA]:ne,[E.hE]:ne,[E.Nc]:ne,[E.Os]:ne,[E.yR]:ne},[E.Os]:{[E.dW]:re,[E.t]:re,[E.xh]:re,[E.BA]:re},[E.yR]:{[E.gn]:ie},[E.gn]:{[E.dW]:oe,[E.t]:oe,[E.xh]:oe,[E.BA]:ie,[E.hE]:oe,[E.Nc]:oe,[E.Os]:ie,[E.yR]:ie},[E.BA]:{[E.dW]:oe,[E.Nc]:oe,[E.xh]:oe,[E.Os]:ie,[E.hE]:ie,[E.yR]:ie},[E.dW]:{},[E.t]:{},[E.hE]:{},[E.Nc]:{},[E.xh]:{}};function se(e){var t;const{parentType:n,childType:i,parentDepth:r}=e;if(!n||!i||"number"!=typeof r)return!1;const o=null==(t=ae[n])?void 0:t[i];return"number"==typeof o&&r<=o}const le="DROP_TOP",de="DROP_RIGHT",ce="DROP_BOTTOM",he="DROP_LEFT",ue="DROP_FORBIDDEN",pe=20,me=20;let ge,fe={};function ve(e,t){const{depth:n,parentComponent:i,component:r,orientation:o,isDraggingOverShallow:a}=t.props,s=e.getItem();if(!s||s.id===r.id)return null;const l=se({parentType:r.type,parentDepth:n,childType:s.type}),d=i&&i.type,c=se({parentType:d,parentDepth:n+(d===E.gn||d===E.yR?0:-1),childType:s.type});if(!l&&!c)return ue;const h=(r.children||[]).length>0,u="row"===o?"vertical":"horizontal",p="row"===o?"horizontal":"vertical";if(l&&!c)return"vertical"===u?h?de:he:h?ce:le;const m=t.ref.getBoundingClientRect(),g=e.getClientOffset()||fe[r.id];if(!g||!m)return null;fe[r.id]=g;const f=Math.abs(g.y-m.top),v=Math.abs(g.y-m.bottom),b=Math.abs(g.x-m.left),y=Math.abs(g.x-m.right);if(!a&&[f,v,b,y].every((e=>e>me)))return null;if(c&&!l){if("vertical"===p){const e=m.left+(m.right-m.left)/2;return g.x<e?he:de}const e=m.top+(m.bottom-m.top)/2;return g.y<e?le:ce}if(c&&l){if("vertical"===p){if(b<pe)return he;if(y<pe)return de}else{if(f<pe)return le;if(v<pe)return ce}return"vertical"===u?h?de:he:h?ce:le}return null}const be=te()((function(e,t,n){var i,r,o;if(!n.mounted)return;const a=ve(t,n);!function(e){const t="SCROLL_TOP"===e&&!ge&&0!==document.documentElement.scrollTop,n=ge&&("SCROLL_TOP"!==e||0===document.documentElement.scrollTop);t?ge=setInterval((()=>{if(0===document.documentElement.scrollTop)return clearInterval(ge),void(ge=null);let e=document.documentElement.scrollTop-120;e<0&&(e=0),window.scroll({top:e,behavior:"smooth"})}),50):n&&(clearInterval(ge),ge=null)}((null==n||null==(i=n.props)||null==(r=i.component)?void 0:r.type)===E.U0?"SCROLL_TOP":null),a?(null==n||null==(o=n.props)||o.onHover(),n.setState((()=>({dropIndicator:a})))):n.setState((()=>({dropIndicator:null})))}),100);const ye="DRAG_DROPPABLE",xe=[ye,{canDrag:e=>!e.disableDragDrop,beginDrag(e){const{component:t,index:n,parentComponent:i={}}=e;return{type:t.type,id:t.id,meta:t.meta,index:n,parentId:i.id,parentType:i.type}}},function(e,t){return{dragSourceRef:e.dragSource(),dragPreviewRef:e.dragPreview(),isDragging:t.isDragging()}}],Ce=[ye,{canDrop:e=>!e.disableDragDrop,hover(e,t,n){n&&n.mounted&&be(e,t,n)},drop(e,t,n){const i=t.getDropResult();if((!i||!i.destination)&&n.mounted)return function(e,t,n){if(!n.mounted)return;n.setState((()=>({dropIndicator:null})));const i=ve(t,n);if(!i||i===ue)return;const{parentComponent:r,component:o,index:a,onDrop:s,dropToChild:l}=n.props,d=t.getItem(),c={source:{id:d.parentId,type:d.parentType,index:d.index},dragging:{id:d.id,type:d.type,meta:d.meta}};if("function"==typeof l?l(d):l)c.destination={id:o.id,type:o.type,index:o.children.length};else if(r){const e=r&&d.parentId===r.id&&d.index<a&&d.type!==o.type?a-1:a;c.destination={id:r.id,type:r.type,index:e}}else c.destination={id:o.id,type:o.type,index:a};return s(c),fe={},c}(0,t,n)}},function(e,t){return{droppableRef:e.dropTarget(),isDraggingOver:t.isOver(),isDraggingOverShallow:t.isOver({shallow:!0})}}],Se={children:w().func,className:w().string,component:z.cP,parentComponent:z.cP,depth:w().number.isRequired,disableDragDrop:w().bool,dropToChild:w().bool,orientation:w().oneOf(["row","column"]),index:w().number.isRequired,style:w().object,onDrop:w().func,onHover:w().func,editMode:w().bool,useEmptyDragPreview:w().bool,isDragging:w().bool,isDraggingOver:w().bool,isDraggingOverShallow:w().bool,droppableRef:w().func,dragSourceRef:w().func,dragPreviewRef:w().func},we={className:null,style:null,parentComponent:null,disableDragDrop:!1,dropToChild:!1,children(){},onDrop(){},onHover(){},orientation:"row",useEmptyDragPreview:!1,isDragging:!1,isDraggingOver:!1,isDraggingOverShallow:!1,droppableRef(){},dragSourceRef(){},dragPreviewRef(){}},Ze=a.iK.div`
  ${({theme:e})=>s.iv`
    position: relative;
    /*
      Next line is a workaround for a bug in react-dnd where the drag
      preview expands outside of the bounds of the drag source card, see:
      https://github.com/react-dnd/react-dnd/issues/832#issuecomment-442071628
    */
    &.dragdroppable--edit-mode {
      transform: translate3d(0, 0, 0);
    }

    &.dragdroppable--dragging {
      opacity: 0.2;
    }

    &.dragdroppable-row {
      width: 100%;
    }

    &.dragdroppable-column .resizable-container span div {
      z-index: 10;
    }

    & {
      .drop-indicator {
        display: block;
        background-color: ${e.colors.primary.base};
        position: absolute;
        z-index: 10;
        opacity: 0.3;
        width: 100%;
        height: 100%;
        &.drop-indicator--forbidden {
          background-color: ${e.colors.error.light1};
        }
      }
    }
  `};
`;class ke extends o.PureComponent{constructor(e){super(e),this.state={dropIndicator:null},this.setRef=this.setRef.bind(this)}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}setRef(e){var t,n;this.ref=e,this.props.useEmptyDragPreview?this.props.dragPreviewRef((Q||((Q=new Image).src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),Q),{captureDraggingState:!0}):this.props.dragPreviewRef(e),null==(t=(n=this.props).droppableRef)||t.call(n,e)}render(){const{children:e,className:t,orientation:n,dragSourceRef:i,disableDragDrop:o,isDragging:a,isDraggingOver:s,style:l,editMode:d}=this.props,{dropIndicator:c}=this.state,h=s&&c&&!o?{className:r()("drop-indicator",c===ue&&"drop-indicator--forbidden")}:null,u=d?{dragSourceRef:i,dropIndicatorProps:h}:{};return(0,V.tZ)(Ze,{style:l,ref:this.setRef,className:r()("dragdroppable",d&&"dragdroppable--edit-mode","row"===n&&"dragdroppable-row","column"===n&&"dragdroppable-column",a&&"dragdroppable--dragging",t),children:e(u)})}}ke.propTypes=Se,ke.defaultProps=we;const Re=(0,H.DragSource)(...xe)(ke),$e=(0,H.DropTarget)(...Ce)(ke),Te=(0,H.DragSource)(...xe)((0,H.DropTarget)(...Ce)(ke)),De={fetchSlices:w().func.isRequired,updateSlices:w().func.isRequired,isLoading:w().bool.isRequired,slices:w().objectOf(z.Rw).isRequired,lastUpdated:w().number.isRequired,errorMessage:w().string,userId:w().number.isRequired,selectedSliceIds:w().arrayOf(w().number),editMode:w().bool,dashboardId:w().number},Me=["slice_name","viz_type","datasource_name"],Ie={slice_name:(0,h.t)("name"),viz_type:(0,h.t)("viz type"),datasource_name:(0,h.t)("dataset"),changed_on:(0,h.t)("recent")},Fe=a.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    flex-direction: row;\n    padding:\n      ${4*e.gridUnit}px\n      ${3*e.gridUnit}px\n      ${4*e.gridUnit}px\n      ${3*e.gridUnit}px;\n  `}
`,Ee=(0,a.iK)(T.Ph)`
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
  min-width: 150px;
`,_e=a.iK.div`
  ${({theme:e})=>s.iv`
    display: flex;
    justify-content: flex-end;
    padding-right: ${2*e.gridUnit}px;
  `}
`,ze=(0,a.iK)(M.Z)`
  ${({theme:e})=>s.iv`
    height: auto;
    & > .anticon + span {
      margin-left: 0;
    }
    & > [role='img']:first-of-type {
      margin-right: ${e.gridUnit}px;
      padding-bottom: 1px;
      line-height: 0;
    }
  `}
`,Pe=a.iK.div`
  flex-grow: 1;
  min-height: 0;
`;class Ue extends o.Component{static sortByComparator(e){const t="changed_on"===e?-1:1;return(n,i)=>n[e]<i[e]?-1*t:n[e]>i[e]?1*t:0}constructor(e){super(e),this.handleChange=C()((e=>{this.searchUpdated(e),this.slicesRequest=this.props.fetchSlices(this.userIdForFetch(),e,this.state.sortBy)}),300),this.state={filteredSlices:[],searchTerm:"",sortBy:"changed_on",selectedSliceIdsSet:new Set(e.selectedSliceIds),showOnlyMyCharts:(0,F.rV)(F.dR.DashboardEditorShowOnlyMyCharts,!0)},this.rowRenderer=this.rowRenderer.bind(this),this.searchUpdated=this.searchUpdated.bind(this),this.handleSelect=this.handleSelect.bind(this),this.userIdForFetch=this.userIdForFetch.bind(this),this.onShowOnlyMyCharts=this.onShowOnlyMyCharts.bind(this)}userIdForFetch(){return this.state.showOnlyMyCharts?this.props.userId:void 0}componentDidMount(){this.slicesRequest=this.props.fetchSlices(this.userIdForFetch())}UNSAFE_componentWillReceiveProps(e){const t={};e.lastUpdated!==this.props.lastUpdated&&(t.filteredSlices=this.getFilteredSortedSlices(e.slices,this.state.searchTerm,this.state.sortBy,this.state.showOnlyMyCharts)),e.selectedSliceIds!==this.props.selectedSliceIds&&(t.selectedSliceIdsSet=new Set(e.selectedSliceIds)),Object.keys(t).length&&this.setState(t)}componentWillUnmount(){const e=y()(this.props.slices,(e=>this.state.selectedSliceIdsSet.has(e.slice_id)));this.props.updateSlices(e),this.slicesRequest&&this.slicesRequest.abort&&this.slicesRequest.abort()}getFilteredSortedSlices(e,t,n,i){return Object.values(e).filter((e=>!i||e.owners&&e.owners.find((e=>e.id===this.props.userId))||e.created_by&&e.created_by.id===this.props.userId)).filter((0,R.cj)(t,Me)).sort(Ue.sortByComparator(n))}searchUpdated(e){this.setState((t=>({searchTerm:e,filteredSlices:this.getFilteredSortedSlices(this.props.slices,e,t.sortBy,t.showOnlyMyCharts)})))}handleSelect(e){this.setState((t=>({sortBy:e,filteredSlices:this.getFilteredSortedSlices(this.props.slices,t.searchTerm,e,t.showOnlyMyCharts)}))),this.slicesRequest=this.props.fetchSlices(this.userIdForFetch(),this.state.searchTerm,e)}rowRenderer({key:e,index:t,style:n}){const{filteredSlices:i,selectedSliceIdsSet:r}=this.state,o=i[t],a=r.has(o.slice_id),s=E.dW,l=_.Jd,d={chartId:o.slice_id,sliceName:o.slice_name};return(0,V.tZ)(Te,{component:{type:s,id:l,meta:d},parentComponent:{id:_.D0,type:E.F0},index:t,depth:0,disableDragDrop:a,editMode:this.props.editMode,useEmptyDragPreview:!0,style:{},children:({dragSourceRef:e})=>(0,V.tZ)(X,{innerRef:e,style:n,sliceName:o.slice_name,lastModified:o.changed_on_humanized,visType:o.viz_type,datasourceUrl:o.datasource_url,datasourceName:o.datasource_name,thumbnailUrl:o.thumbnail_url,isSelected:a})},e)}onShowOnlyMyCharts(e){e||(this.slicesRequest=this.props.fetchSlices(void 0,this.state.searchTerm,this.state.sortBy)),this.setState((t=>({showOnlyMyCharts:e,filteredSlices:this.getFilteredSortedSlices(this.props.slices,t.searchTerm,t.sortBy,e)}))),(0,F.LS)(F.dR.DashboardEditorShowOnlyMyCharts,e)}render(){return(0,V.BX)("div",{css:s.iv`
          height: 100%;
          display: flex;
          flex-direction: column;
        `,children:[(0,V.tZ)(_e,{children:(0,V.BX)(ze,{buttonStyle:"link",buttonSize:"xsmall",onClick:()=>window.open(`/chart/add?dashboard_id=${this.props.dashboardId}`,"_blank","noopener noreferrer"),children:[(0,V.tZ)(I.Z.PlusSmall,{}),(0,h.t)("Create new chart")]})}),(0,V.BX)(Fe,{children:[(0,V.tZ)($.II,{placeholder:this.state.showOnlyMyCharts?(0,h.t)("Filter your charts"):(0,h.t)("Filter charts"),className:"search-input",onChange:e=>this.handleChange(e.target.value)}),(0,V.tZ)(Ee,{id:"slice-adder-sortby",value:this.state.sortBy,onChange:this.handleSelect,options:Object.entries(Ie).map((([e,t])=>({label:(0,h.t)("Sort by %s",t),value:e}))),placeholder:(0,h.t)("Sort by")})]}),(0,V.BX)("div",{css:e=>s.iv`
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: ${e.gridUnit}px;
            padding: 0 ${3*e.gridUnit}px ${4*e.gridUnit}px
              ${3*e.gridUnit}px;
          `,children:[(0,V.tZ)(P.ZP,{onChange:this.onShowOnlyMyCharts,checked:this.state.showOnlyMyCharts}),(0,h.t)("Show only my charts"),(0,V.tZ)(U.V,{placement:"top",tooltip:(0,h.t)("You can choose to display all charts that you have access to or only the ones you own.\n              Your filter selection will be saved and remain active until you choose to change it.")})]}),this.props.isLoading&&(0,V.tZ)(D.Z,{}),!this.props.isLoading&&this.state.filteredSlices.length>0&&(0,V.tZ)(Pe,{children:(0,V.tZ)(Z.ZP,{children:({height:e,width:t})=>(0,V.tZ)(k.t7,{width:t,height:e,itemCount:this.state.filteredSlices.length,itemSize:128,searchTerm:this.state.searchTerm,sortBy:this.state.sortBy,selectedSliceIds:this.props.selectedSliceIds,children:this.rowRenderer})})}),this.props.errorMessage&&(0,V.tZ)("div",{css:s.iv`
              padding: 16px;
            `,children:this.props.errorMessage}),(0,V.tZ)(J,{slices:this.state.filteredSlices})]})}}Ue.propTypes=De,Ue.defaultProps={selectedSliceIds:[],editMode:!1,errorMessage:""};const Oe=Ue,Be=(0,u.$j)((function({sliceEntities:e,dashboardInfo:t,dashboardState:n},i){return{height:i.height,userId:+t.userId,dashboardId:t.id,selectedSliceIds:n.sliceIds,slices:e.slices,isLoading:e.isLoading,errorMessage:e.errorMessage,lastUpdated:e.lastUpdated,editMode:n.editMode}}),(function(e){return(0,f.DE)({fetchSlices:v.ex,updateSlices:v.Ff},e)}))(Oe),Ne=({registryKeys:e,registry:t})=>()=>e.map((e=>t[e])),qe=({registryKeys:e,registry:t})=>n=>{e=e.filter((e=>e!==n)),delete t[n]},Ve=({registry:e})=>t=>e[t],Ae=((e=[])=>{const t={registry:{},registryKeys:[]},n=(({registryKeys:e,registry:t})=>(n,i)=>{e.push(n),t[n]={key:n,metadata:i.metadata,Component:(0,o.lazy)(i.loadComponent)}})(t);return e.forEach((({key:e,item:t})=>{n(e,t)})),{set:n,get:Ve(t),delete:qe(t),getAll:Ne(t)}})([]),Ke={id:w().string.isRequired,type:w().string.isRequired,label:w().string.isRequired,className:w().string},je=a.iK.div`
  ${({theme:e})=>s.iv`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding: ${4*e.gridUnit}px;
    background: ${e.colors.grayscale.light5};
    cursor: move;

    &:not(.static):hover {
      background: ${e.colors.grayscale.light4};
    }
  `}
`,Le=a.iK.div`
  ${({theme:e})=>s.iv`
    position: relative;
    background: ${e.colors.grayscale.light4};
    width: ${10*e.gridUnit}px;
    height: ${10*e.gridUnit}px;
    margin-right: ${4*e.gridUnit}px;
    border: 1px solid ${e.colors.grayscale.light5};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${e.colors.text.label};
    font-size: ${e.typography.sizes.xxl}px;

    &.fa-window-restore {
      font-size: ${e.typography.sizes.l}px;
    }

    &.fa-area-chart {
      font-size: ${e.typography.sizes.xl}px;
    }

    &.divider-placeholder:after {
      content: '';
      height: 2px;
      width: 100%;
      background-color: ${e.colors.grayscale.light2};
    }
  `}
`;class Xe extends o.PureComponent{render(){const{label:e,id:t,type:n,className:i,meta:o}=this.props;return(0,V.tZ)(Te,{component:{type:n,id:t,meta:o},parentComponent:{id:_.D0,type:E.F0},index:0,depth:0,editMode:!0,children:({dragSourceRef:t})=>(0,V.BX)(je,{ref:t,children:[(0,V.tZ)(Le,{className:r()("new-component-placeholder",i)}),e]})})}}function He(){return(0,V.tZ)(Xe,{id:_.Nb,type:E.BA,label:(0,h.t)("Column"),className:"fa fa-long-arrow-down"})}function We(){return(0,V.tZ)(Xe,{id:_.ES,type:E.hE,label:(0,h.t)("Divider"),className:"divider-placeholder"})}function Ye(){return(0,V.tZ)(Xe,{id:_.Z1,type:E.Nc,label:(0,h.t)("Header"),className:"fa fa-header"})}function Ge(){return(0,V.tZ)(Xe,{id:_.vD,type:E.Os,label:(0,h.t)("Row"),className:"fa fa-long-arrow-right"})}function Je(){return(0,V.tZ)(Xe,{id:_.NN,type:E.yR,label:(0,h.t)("Tabs"),className:"fa fa-window-restore"})}function Qe(){return(0,V.tZ)(Xe,{id:_.C3,type:E.xh,label:(0,h.t)("Text / Markdown"),className:"fa fa-font"})}Xe.propTypes=Ke,Xe.defaultProps={className:null};const et=({componentKey:e,metadata:t})=>(0,V.tZ)(Xe,{id:_.gR,type:E.t,label:t.name,meta:{metadata:t,componentKey:e},className:`fa fa-${t.iconName}`}),tt=({topOffset:e=0})=>(0,V.tZ)("div",{css:s.iv`
      position: sticky;
      right: 0;
      top: ${e}px;
      height: calc(100vh - ${e}px);
      width: ${374}px;
    `,children:(0,V.tZ)("div",{css:e=>s.iv`
        position: absolute;
        height: 100%;
        width: ${374}px;
        box-shadow: -4px 0 4px 0 ${(0,m.rgba)(e.colors.grayscale.dark2,.1)};
        background-color: ${e.colors.grayscale.light5};
      `,children:(0,V.BX)(g.ZP,{id:"tabs",css:e=>s.iv`
          line-height: inherit;
          margin-top: ${2*e.gridUnit}px;
          height: 100%;

          & .ant-tabs-content-holder {
            height: 100%;
            & .ant-tabs-content {
              height: 100%;
            }
          }
        `,children:[(0,V.tZ)(g.ZP.TabPane,{tab:(0,h.t)("Charts"),css:s.iv`
            height: 100%;
          `,children:(0,V.tZ)(Be,{})},1),(0,V.BX)(g.ZP.TabPane,{tab:(0,h.t)("Layout elements"),children:[(0,V.tZ)(Je,{}),(0,V.tZ)(Ge,{}),(0,V.tZ)(He,{}),(0,V.tZ)(Ye,{}),(0,V.tZ)(Qe,{}),(0,V.tZ)(We,{}),Ae.getAll().map((({key:e,metadata:t})=>(0,V.tZ)(et,{metadata:t,componentKey:e})))]},2)]})})});var nt=n(74599),it=n(30381),rt=n.n(it),ot=n(75049),at=n(3741),st=n(12617),lt=n(9679),dt=n(41609),ct=n.n(dt),ht=n(83862),ut=n(27600),pt=n(10222),mt=n(68492),gt=n(23525),ft=n(52004);const vt=e=>{const{copyMenuItemTitle:t,emailMenuItemTitle:n,emailSubject:i,emailBody:r,addDangerToast:o,addSuccessToast:a,dashboardId:s,dashboardComponentId:l,copyMenuItemRef:d,shareByEmailMenuItemRef:c,selectedKeys:p,...m}=e,{dataMask:g,activeTabs:f}=(0,u.v9)((e=>({dataMask:e.dataMask,activeTabs:e.dashboardState.activeTabs})));async function v(){return(0,gt.Nm)({dashboardId:s,dataMask:g,activeTabs:f,anchor:l})}return(0,V.BX)(ht.Menu,{selectable:!1,selectedKeys:p,onClick:e=>e.key===ft.bu.CopyLink?async function(){try{await(0,pt.Z)(v),a((0,h.t)("Copied to clipboard!"))}catch(e){mt.Z.error(e),o((0,h.t)("Sorry, something went wrong. Try again later."))}}():async function(){try{const e=encodeURIComponent(`${r}${await v()}`),t=encodeURIComponent(i);window.location.href=`mailto:?Subject=${t}%20&Body=${e}`}catch(e){mt.Z.error(e),o((0,h.t)("Sorry, something went wrong. Try again later."))}}(),children:[(0,V.tZ)(ht.Menu.Item,{ref:d,...m,children:(0,V.tZ)("div",{role:"button",tabIndex:0,children:t})},ft.bu.CopyLink),(0,V.tZ)(ht.Menu.Item,{ref:c,...m,children:(0,V.tZ)("div",{role:"button",tabIndex:0,children:n})},ft.bu.ShareByEmail)]})};var bt;!function(e){e.PDF="pdf",e.PNG="png",e.EXCEL="xls"}(bt||(bt={}));var yt=n(10928),xt=n.n(yt),Ct=n(31069),St=n(12515);function wt({text:e,logEvent:t,dashboardId:n,format:i,...r}){const o=(0,u.v9)((e=>xt()(e.dashboardState.activeTabs)||void 0)),a=(0,u.v9)((e=>e.charts||{})),s=(0,u.v9)((e=>{var t;return(null==(t=e.dashboardLayout)?void 0:t.present)||{}}));return(0,V.tZ)(ht.Menu.Item,{...r,children:(0,V.tZ)("div",{onClick:()=>{const e={},t=new Set((e=>{if(!e)return Object.keys(a);const t=[],n=[e];for(;n.length;){var i;const e=n.pop(),r=s[e];r&&("CHART"===r.type&&null!=(null==(i=r.meta)?void 0:i.chartId)&&t.push(String(r.meta.chartId)),Array.isArray(r.children)&&r.children.length&&n.push(...r.children))}return t})(o));for(const n of t){var i;const t=null==(i=a[n])?void 0:i.latestQueryFormData;if(!t)continue;const r=t.viz_type;"table"!==r&&"pivot_table_v2"!==r||"string"!=typeof t.datasource||!t.datasource.includes("__")||(e[n]=(0,St.u)({formData:t,resultFormat:"xlsx",resultType:"pivot_table_v2"===r?"post_processed":"full",force:!1,ownState:{},setDataMask:{}}))}0!==Object.keys(e).length&&Ct.Z.postForm(`/api/v1/dashboard/${n}/export_dashboard_excel`,{form_data:(0,lt.o)({charts:e,layout:s,anchor:o})})},role:"button",tabIndex:0,children:e})},i)}const Zt=e=>{const{excelMenuItemTitle:t,logEvent:n,dashboardId:i,...r}=e;return(0,V.tZ)(ht.Menu,{selectable:!1,children:(0,V.tZ)(wt,{text:t,dashboardId:i,logEvent:n,format:bt.EXCEL,...r})})};var kt=n(1304),Rt=n(10689);const $t=a.iK.div`
  ${({theme:e})=>`\n    .css-editor-header {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      margin-bottom: ${2*e.gridUnit}px;\n\n      h5 {\n        margin-top: ${e.gridUnit}px;\n      }\n    }\n    .css-editor {\n      border: 1px solid ${e.colors.grayscale.light1};\n    }\n  `}
`;class Tt extends o.PureComponent{constructor(e){super(e),this.state={css:e.initialCss},this.changeCss=this.changeCss.bind(this),this.changeCssTemplate=this.changeCssTemplate.bind(this)}componentDidMount(){Rt.ry.preload(),Ct.Z.get({endpoint:"/csstemplateasyncmodelview/api/read"}).then((({json:e})=>{const t=e.result.map((e=>({value:e.template_name,css:e.css,label:e.template_name})));this.setState({templates:t})})).catch((()=>{this.props.addDangerToast((0,h.t)("An error occurred while fetching available CSS templates"))}))}changeCss(e){this.setState({css:e},(()=>{this.props.onChange(e)}))}changeCssTemplate(e){const t=String(e.key);this.changeCss(t)}renderTemplateSelector(){if(this.state.templates){const e=(0,V.tZ)(ht.Menu,{onClick:this.changeCssTemplate,children:this.state.templates.map((e=>(0,V.tZ)(ht.Menu.Item,{children:e.label},e.css)))});return(0,V.tZ)(T.Gj,{overlay:e,placement:"bottomRight",children:(0,V.tZ)(M.Z,{children:(0,h.t)("Load a CSS template")})})}return null}render(){return(0,V.tZ)(kt.Z,{triggerNode:this.props.triggerNode,modalTitle:(0,h.t)("CSS"),modalBody:(0,V.BX)($t,{children:[(0,V.BX)("div",{className:"css-editor-header",children:[(0,V.tZ)("h5",{children:(0,h.t)("Live CSS editor")}),this.renderTemplateSelector()]}),(0,V.tZ)(Rt.ry,{className:"css-editor",minLines:12,maxLines:30,onChange:this.changeCss,height:"200px",width:"100%",editorProps:{$blockScrolling:!0},enableLiveAutocompletion:!0,value:this.state.css||""})]})})}}Tt.defaultProps={initialCss:"",onChange:()=>{}};const Dt=Tt;var Mt=n(81315),It=n(29487),Ft=n(49238),Et=n(85633);const _t=(0,a.iK)(kt.Z)`
  .ant-modal-body {
    overflow: visible;
  }
`,zt=a.iK.div`
  margin-top: ${({theme:e})=>6*e.gridUnit}px;
`,Pt=a.iK.div`
  display: flex;
  margin-top: ${({theme:e})=>3*e.gridUnit}px;
`,Ut=a.iK.div`
  width: 30%;
  margin: auto;
`;class Ot extends o.PureComponent{constructor(e){super(e),this.modalRef=void 0,this.modalRef=(0,o.createRef)(),this.state={refreshFrequency:e.refreshFrequency,custom_hour:0,custom_min:0,custom_sec:0,custom_block:!1},this.handleFrequencyChange=this.handleFrequencyChange.bind(this),this.onSave=this.onSave.bind(this),this.onCancel=this.onCancel.bind(this)}onSave(){var e,t;this.props.onChange(this.state.refreshFrequency,this.props.editMode),null==(e=this.modalRef)||null==(t=e.current)||t.close(),this.props.addSuccessToast((0,h.t)("Refresh interval saved"))}onCancel(){var e,t;this.setState({refreshFrequency:this.props.refreshFrequency}),null==(e=this.modalRef)||null==(t=e.current)||t.close()}handleFrequencyChange(e){const{refreshIntervalOptions:t}=this.props;this.setState({refreshFrequency:e||t[0][0]}),this.setState({custom_block:-1===e}),-1===e&&this.setState({custom_hour:0,custom_min:0,custom_sec:0})}onSaveValue(e){var t,n;this.props.onChange(e,this.props.editMode),null==(t=this.modalRef)||null==(n=t.current)||n.close(),this.props.addSuccessToast((0,h.t)("Refresh interval saved"))}createIntervalOptions(e){const t=[];return t.push({value:-1,label:(0,h.t)("Custom interval")}),t.push(...e.map((e=>({value:e[0],label:(0,h.t)(e[1])})))),t}min_sec_options(e){return Array.from({length:60},((t,n)=>({value:n,label:`${n} ${e}`})))}refresh_custom_val(e,t,n,i){if(!0===e){const e=t,r=n,o=i;(e<0||r<0||o<0||r>=60||o>=60)&&this.props.addSuccessToast((0,h.t)("Put positive values and valid minute and second value less than 60"));const a=60*e*60+60*r+o;if(0===a)return void this.props.addSuccessToast((0,h.t)("Put some positive value greater than 0"));this.handleFrequencyChange(a),this.onSaveValue(a)}else this.onSave()}render(){const{refreshLimit:e=0,refreshWarning:t,editMode:n,refreshIntervalOptions:i}=this.props,{refreshFrequency:r=0,custom_hour:o=0,custom_min:a=0,custom_sec:s=0,custom_block:l=!1}=this.state,d=!!r&&!!t&&r<e;return(0,V.tZ)(_t,{ref:this.modalRef,triggerNode:this.props.triggerNode,modalTitle:(0,h.t)("Refresh interval"),modalBody:(0,V.BX)("div",{children:[(0,V.BX)("div",{id:"refresh_from_dropdown",children:[(0,V.tZ)(Ft.lX,{children:(0,V.tZ)("b",{children:(0,h.t)("Refresh frequency")})}),(0,V.tZ)(Mt.Z,{ariaLabel:(0,h.t)("Refresh interval"),options:this.createIntervalOptions(i),value:r,onChange:this.handleFrequencyChange,sortComparator:(0,Et.mj)("value")})]}),l&&(0,V.BX)(Pt,{children:[(0,V.BX)(Ut,{children:[(0,V.tZ)(Ft.lX,{children:(0,V.tZ)("b",{children:(0,h.t)("HOUR")})})," ",(0,V.tZ)("br",{}),(0,V.tZ)($.II,{type:"number",min:"0",className:"form-control input-sm",placeholder:(0,h.t)("Type a number"),onChange:e=>{this.setState({custom_hour:Number(e.target.value)})},value:o})]}),(0,V.BX)(Ut,{children:[(0,V.tZ)(Ft.lX,{children:(0,V.tZ)("b",{children:(0,h.t)("MINUTE")})})," ",(0,V.tZ)("br",{}),(0,V.tZ)(Mt.Z,{ariaLabel:(0,h.t)("Minutes value"),options:this.min_sec_options("minutes"),value:a,onChange:e=>{this.setState({custom_min:e})},sortComparator:(0,Et.mj)("value")})]}),(0,V.BX)(Ut,{children:[(0,V.tZ)(Ft.lX,{children:(0,V.tZ)("b",{children:(0,h.t)("SECOND")})})," ",(0,V.tZ)("br",{}),(0,V.tZ)(Mt.Z,{ariaLabel:(0,h.t)("Seconds value"),options:this.min_sec_options("seconds"),value:s,onChange:e=>{this.setState({custom_sec:e})},sortComparator:(0,Et.mj)("value")})]})]}),d&&(0,V.tZ)(zt,{children:(0,V.tZ)(It.Z,{type:"warning",message:(0,V.BX)(V.HY,{children:[(0,V.tZ)("div",{children:t}),(0,V.tZ)("br",{}),(0,V.tZ)("strong",{children:(0,h.t)("Are you sure you want to proceed?")})]})})})]}),modalFooter:(0,V.BX)(V.HY,{children:[(0,V.tZ)(M.Z,{onClick:this.onCancel,buttonSize:"small",children:(0,h.t)("Cancel")}),(0,V.tZ)(M.Z,{buttonStyle:"primary",buttonSize:"small",onClick:()=>this.refresh_custom_val(l,o,a,s),children:n?(0,h.t)("Save"):(0,h.t)("Save for this session")})]})})}}Ot.defaultProps={refreshLimit:0,refreshWarning:null};const Bt=Ot;var Nt=n(87183);const qt={saveType:_.TN,colorNamespace:void 0,colorScheme:void 0,shouldPersistRefreshFrequency:!1};class Vt extends o.PureComponent{constructor(e){super(e),this.modal=void 0,this.onSave=void 0,this.state={saveType:e.saveType,newDashName:`${e.dashboardTitle} ${(0,h.t)("[copy]")}`,duplicateSlices:!1},this.handleSaveTypeChange=this.handleSaveTypeChange.bind(this),this.handleNameChange=this.handleNameChange.bind(this),this.saveDashboard=this.saveDashboard.bind(this),this.toggleDuplicateSlices=this.toggleDuplicateSlices.bind(this),this.onSave=this.props.onSave.bind(this),this.modal=(0,o.createRef)()}toggleDuplicateSlices(){this.setState((e=>({duplicateSlices:!e.duplicateSlices})))}handleSaveTypeChange(e){this.setState({saveType:e.target.value})}handleNameChange(e){this.setState({newDashName:e,saveType:_.kS})}saveDashboard(){var e;const{saveType:t,newDashName:n}=this.state,{dashboardTitle:i,dashboardInfo:r,layout:o,customCss:a,dashboardId:s,refreshFrequency:l,shouldPersistRefreshFrequency:d,lastModifiedTime:c}=this.props,u=d?l:null==(e=r.metadata)?void 0:e.refresh_frequency,p={certified_by:r.certified_by,certification_details:r.certification_details,css:a,dashboard_title:t===_.kS?n:i,duplicate_slices:this.state.duplicateSlices,last_modified_time:c,owners:r.owners,roles:r.roles,metadata:{...null==r?void 0:r.metadata,positions:o,refresh_frequency:u}};var m,g;t!==_.kS||n?(this.onSave(p,s,t).then((e=>{var n,i;t===_.kS&&null!=(n=e.json)&&null!=(i=n.result)&&i.id&&(window.location.href=`/superset/dashboard/${e.json.result.id}/`)})),null==(m=this.modal)||null==(g=m.current)||null==g.close||g.close()):this.props.addDangerToast((0,h.t)("You must pick a name for the new dashboard"))}render(){return(0,V.tZ)(kt.Z,{ref:this.modal,triggerNode:this.props.triggerNode,modalTitle:(0,h.t)("Save dashboard"),modalBody:(0,V.BX)("div",{children:[(0,V.tZ)(Nt.Y,{value:_.TN,onChange:this.handleSaveTypeChange,checked:this.state.saveType===_.TN,disabled:!this.props.canOverwrite,children:(0,h.t)("Overwrite Dashboard [%s]",this.props.dashboardTitle)}),(0,V.tZ)("hr",{}),(0,V.tZ)(Nt.Y,{value:_.kS,onChange:this.handleSaveTypeChange,checked:this.state.saveType===_.kS,children:(0,h.t)("Save as:")}),(0,V.tZ)($.II,{type:"text",placeholder:(0,h.t)("[dashboard name]"),value:this.state.newDashName,onFocus:e=>this.handleNameChange(e.target.value),onChange:e=>this.handleNameChange(e.target.value)}),(0,V.BX)("div",{className:"m-l-25 m-t-5",children:[(0,V.tZ)(P.ZP,{checked:this.state.duplicateSlices,onChange:()=>this.toggleDuplicateSlices()}),(0,V.tZ)("span",{className:"m-l-5",children:(0,h.t)("also copy (duplicate) charts")})]})]}),modalFooter:(0,V.tZ)("div",{children:(0,V.tZ)(M.Z,{buttonStyle:"primary",onClick:this.saveDashboard,children:(0,h.t)("Save")})})})}}Vt.defaultProps=qt;const At=Vt;var Kt=n(21312),jt=n(14505),Lt=n(87999),Xt=n(11370);function Ht({pathname:e,filters:t={},hash:n="",standalone:i}){const r=new URLSearchParams(window.location.search);ct()(t)||r.set(ut.KD.preselectFilters.name,JSON.stringify((0,Xt.Z)(t))),i?r.set(ut.KD.standalone.name,i.toString()):r.delete(ut.KD.standalone.name);const o=(0,gt.eY)(ut.KD.nativeFiltersKey);o&&r.set(ut.KD.nativeFiltersKey.name,o);const a=n?`#${n}`:"";return`${e}?${r.toString()}${a}`}var Wt=n(43399);const Yt={addSuccessToast:w().func.isRequired,addDangerToast:w().func.isRequired,dashboardInfo:w().object.isRequired,dashboardId:w().number,dashboardTitle:w().string,dataMask:w().object.isRequired,customCss:w().string,colorNamespace:w().string,colorScheme:w().string,directPathToChild:w().array,onChange:w().func.isRequired,updateCss:w().func.isRequired,forceRefreshAllCharts:w().func.isRequired,refreshFrequency:w().number,shouldPersistRefreshFrequency:w().bool.isRequired,setRefreshFrequency:w().func.isRequired,startPeriodicRender:w().func.isRequired,editMode:w().bool.isRequired,userCanEdit:w().bool,userCanShare:w().bool,userCanSave:w().bool,userCanCurate:w().bool.isRequired,isLoading:w().bool.isRequired,layout:w().object.isRequired,expandedSlices:w().object,onSave:w().func.isRequired,showPropertiesModal:w().func.isRequired,manageEmbedded:w().func.isRequired,logEvent:w().func,refreshLimit:w().number,refreshWarning:w().string,lastModifiedTime:w().number.isRequired};class Gt extends o.PureComponent{static discardChanges(){window.location.reload()}constructor(e){super(e),this.state={css:e.customCss,showReportSubMenu:null},this.changeCss=this.changeCss.bind(this),this.changeRefreshInterval=this.changeRefreshInterval.bind(this),this.handleMenuClick=this.handleMenuClick.bind(this),this.setShowReportSubMenu=this.setShowReportSubMenu.bind(this)}UNSAFE_componentWillReceiveProps(e){this.props.customCss!==e.customCss&&this.setState({css:e.customCss},(()=>{(0,jt.Z)(e.customCss)}))}setShowReportSubMenu(e){this.setState({showReportSubMenu:e})}changeCss(e){this.props.onChange(),this.props.updateCss(e)}changeRefreshInterval(e,t){this.props.setRefreshFrequency(e,t),this.props.startPeriodicRender(1e3*e)}handleMenuClick({key:e}){switch(e){case ft.bu.RefreshDashboard:this.props.forceRefreshAllCharts(),this.props.addSuccessToast((0,h.t)("Refreshing charts"));break;case ft.bu.EditProperties:this.props.showPropertiesModal();break;case ft.bu.ToggleFullscreen:{const e=Ht({pathname:window.location.pathname,filters:(0,Wt.De)(),hash:window.location.hash,standalone:!(0,gt.eY)(ut.KD.standalone)});window.location.replace(e);break}case ft.bu.ManageEmbedded:this.props.manageEmbedded()}}render(){var e,t,n;const{dashboardTitle:i,dashboardId:r,dashboardInfo:o,refreshFrequency:a,shouldPersistRefreshFrequency:s,editMode:l,customCss:d,colorNamespace:c,colorScheme:u,layout:p,expandedSlices:m,onSave:g,userCanEdit:f,userCanShare:v,userCanSave:b,userCanCurate:y,isLoading:x,refreshLimit:C,refreshWarning:S,lastModifiedTime:w,addSuccessToast:Z,addDangerToast:k,setIsDropdownVisible:R,isDropdownVisible:$,directPathToChild:T,...D}=this.props,M=`${(0,h.t)("Superset dashboard")} ${i}`,I=(0,h.t)("Check out this dashboard: "),F=!(null!=o&&o.userId),E=Ht({pathname:window.location.pathname,filters:(0,Wt.De)(),hash:window.location.hash}),z=null==(e=o.common)||null==(t=e.conf)?void 0:t.DASHBOARD_AUTO_REFRESH_INTERVALS,P=[...T||[]].pop();return(0,V.BX)(ht.Menu,{selectable:!1,...D,children:[!l&&(0,V.tZ)(ht.Menu.Item,{disabled:x,onClick:this.handleMenuClick,children:(0,h.t)("Refresh dashboard")},ft.bu.RefreshDashboard),!l&&!F&&(0,V.tZ)(ht.Menu.Item,{onClick:this.handleMenuClick,children:(0,gt.eY)(ut.KD.standalone)?(0,h.t)("Exit fullscreen"):(0,h.t)("Enter fullscreen")},ft.bu.ToggleFullscreen),l&&(0,V.tZ)(ht.Menu.Item,{onClick:this.handleMenuClick,children:(0,h.t)("Edit properties")},ft.bu.EditProperties),l&&(0,V.tZ)(ht.Menu.Item,{children:(0,V.tZ)(Dt,{triggerNode:(0,V.tZ)("span",{children:(0,h.t)("Edit CSS")}),initialCss:this.state.css,onChange:this.changeCss,addDangerToast:k})},ft.bu.EditCss),(0,V.tZ)(ht.Menu.Divider,{}),b&&(0,V.tZ)(ht.Menu.Item,{children:(0,V.tZ)(At,{addSuccessToast:this.props.addSuccessToast,addDangerToast:this.props.addDangerToast,dashboardId:r,dashboardTitle:i,dashboardInfo:o,saveType:_.kS,layout:p,expandedSlices:m,refreshFrequency:a,shouldPersistRefreshFrequency:s,lastModifiedTime:w,customCss:d,colorNamespace:c,colorScheme:u,onSave:g,triggerNode:(0,V.tZ)("span",{children:(0,h.t)("Save as")}),canOverwrite:f})},ft.bu.SaveModal),(0,V.tZ)(ht.Menu.SubMenu,{disabled:x,title:(0,h.t)("Download"),logEvent:this.props.logEvent,children:(0,V.tZ)(Zt,{excelMenuItemTitle:(0,h.t)("Export to Excel"),dashboardTitle:i,dashboardId:r})},ft.bu.Download),v&&(0,V.tZ)(ht.Menu.SubMenu,{disabled:x,title:(0,h.t)("Share"),children:(0,V.tZ)(vt,{url:E,copyMenuItemTitle:(0,h.t)("Copy permalink to clipboard"),emailMenuItemTitle:(0,h.t)("Share permalink by email"),emailSubject:M,emailBody:I,addSuccessToast:Z,addDangerToast:k,dashboardId:r,dashboardComponentId:P})},ft.bu.Share),!l&&y&&(0,V.tZ)(ht.Menu.Item,{onClick:this.handleMenuClick,children:(0,h.t)("Embed dashboard")},ft.bu.ManageEmbedded),(0,V.tZ)(ht.Menu.Divider,{}),l?null:this.state.showReportSubMenu?(0,V.BX)(V.HY,{children:[(0,V.tZ)(ht.Menu.SubMenu,{title:(0,h.t)("Manage email report"),children:(0,V.tZ)(Kt.Z,{dashboardId:o.id,setShowReportSubMenu:this.setShowReportSubMenu,showReportSubMenu:this.state.showReportSubMenu,setIsDropdownVisible:R,isDropdownVisible:$,useTextMenu:!0})}),(0,V.tZ)(ht.Menu.Divider,{})]}):(0,V.tZ)(ht.Menu,{children:(0,V.tZ)(Kt.Z,{dashboardId:o.id,setShowReportSubMenu:this.setShowReportSubMenu,setIsDropdownVisible:R,isDropdownVisible:$,useTextMenu:!0})}),l&&!ct()(null==o||null==(n=o.metadata)?void 0:n.filter_scopes)&&(0,V.tZ)(ht.Menu.Item,{children:(0,V.tZ)(Lt.Z,{className:"m-r-5",triggerNode:(0,h.t)("Set filter mapping")})},ft.bu.SetFilterMapping),(0,V.tZ)(ht.Menu.Item,{children:(0,V.tZ)(Bt,{addSuccessToast:this.props.addSuccessToast,refreshFrequency:a,refreshLimit:C,refreshWarning:S,onChange:this.changeRefreshInterval,editMode:l,refreshIntervalOptions:z,triggerNode:(0,V.tZ)("span",{children:(0,h.t)("Set auto-refresh interval")})})},ft.bu.AutorefreshModal)]})}}Gt.propTypes=Yt,Gt.defaultProps={colorNamespace:void 0,colorScheme:void 0,refreshLimit:0,refreshWarning:null};const Jt=(0,u.$j)((e=>({directPathToChild:e.dashboardState.directPathToChild})))(Gt);var Qt=n(37921);const en={dashboardId:w().number,isPublished:w().bool.isRequired,savePublished:w().func.isRequired,canEdit:w().bool,canSave:w().bool},tn=(0,h.t)("This dashboard is not published, it will not show up in the list of dashboards. Click here to publish this dashboard."),nn=(0,h.t)("This dashboard is not published which means it will not show up in the list of dashboards. Favorite it to see it there or access it by using the URL directly."),rn=(0,h.t)("This dashboard is published. Click to make it a draft.");class on extends o.Component{componentDidMount(){this.togglePublished=this.togglePublished.bind(this)}togglePublished(){this.props.savePublished(this.props.dashboardId,!this.props.isPublished)}render(){return this.props.isPublished?this.props.canEdit&&this.props.canSave?(0,V.tZ)(N.u,{id:"published-dashboard-tooltip",placement:"bottom",title:rn,children:(0,V.tZ)(Qt.Z,{onClick:()=>{this.togglePublished()},children:(0,h.t)("Published")})}):null:this.props.canEdit&&this.props.canSave?(0,V.tZ)(N.u,{id:"unpublished-dashboard-tooltip",placement:"bottom",title:tn,children:(0,V.tZ)(Qt.Z,{onClick:()=>{this.togglePublished()},children:(0,h.t)("Draft")})}):(0,V.tZ)(N.u,{id:"unpublished-dashboard-tooltip",placement:"bottom",title:nn,children:(0,V.tZ)(Qt.Z,{children:(0,h.t)("Draft")})})}}on.propTypes=en;const an={onUndo:w().func.isRequired,onRedo:w().func.isRequired};class sn extends o.PureComponent{constructor(e){super(e),this.handleKeydown=this.handleKeydown.bind(this)}componentDidMount(){document.addEventListener("keydown",this.handleKeydown)}componentWillUnmount(){document.removeEventListener("keydown",this.handleKeydown)}handleKeydown(e){if(e.ctrlKey||e.metaKey){const t="z"===e.key||90===e.keyCode,n="y"===e.key||89===e.keyCode,i=document&&document.querySelector(".dashboard-markdown--editing"),r=document&&document.querySelector(".editable-title--editing");i||r||!t&&!n||(e.preventDefault(),(t?this.props.onUndo:this.props.onRedo)())}}render(){return null}}sn.propTypes=an;const ln=sn;var dn=n(20818),cn=n(83379);const hn=e=>{e&&clearInterval(e)};var un=n(52564),pn=n(67697),mn=n(22102),gn=n(74069),fn=n(14114);const vn=(0,ot.I)(),bn=e=>e.split(/(?:\s|,)+/).filter((e=>e)),yn=a.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`,xn=({dashboardId:e,onHide:t})=>{var n;const{addInfoToast:i,addDangerToast:r}=(0,fn.e1)(),[a,s]=(0,o.useState)(!0),[l,d]=(0,o.useState)(!1),[c,u]=(0,o.useState)(null),[p,m]=(0,o.useState)(""),g=`/api/v1/dashboard/${e}/embedded`,f=!c||bn(p).join()!==c.allowed_domains.join(),v=(0,o.useCallback)((()=>{d(!0),(0,mn.Z)({method:"POST",endpoint:g})({allowed_domains:bn(p)}).then((({result:e})=>{u(e),m(e.allowed_domains.join(", ")),i((0,h.t)("Changes saved."))}),(e=>{console.error(e),r((0,h.t)((0,h.t)("Sorry, something went wrong. The changes could not be saved.")))})).finally((()=>{d(!1)}))}),[g,p]),b=(0,o.useCallback)((()=>{gn.default.confirm({title:(0,h.t)("Disable embedding?"),content:(0,h.t)("This will remove your current embed configuration."),okType:"danger",onOk:()=>{d(!0),(0,mn.Z)({method:"DELETE",endpoint:g})({}).then((()=>{u(null),m(""),i((0,h.t)("Embedding deactivated.")),t()}),(e=>{console.error(e),r((0,h.t)("Sorry, something went wrong. Embedding could not be deactivated."))})).finally((()=>{d(!1)}))}})}),[g]);if((0,o.useEffect)((()=>{s(!1),(0,mn.Z)({method:"GET",endpoint:g})({}).catch((e=>{if(404===e.status)return{result:null};throw r((0,h.t)("Sorry, something went wrong. Please try again.")),e})).then((({result:e})=>{s(!0),u(e),m(e?e.allowed_domains.join(", "):"")}))}),[e]),!a)return(0,V.tZ)(D.Z,{});const y=vn.get("embedded.documentation.configuration_details"),x=vn.get("embedded.documentation.description"),C=null!=(n=vn.get("embedded.documentation.url"))?n:"https://www.npmjs.com/package/@superset-ui/embedded-sdk";return(0,V.BX)(V.HY,{children:[c?y?(0,V.tZ)(y,{embeddedId:c.uuid}):(0,V.BX)("p",{children:[(0,h.t)("This dashboard is ready to embed. In your application, pass the following id to the SDK:"),(0,V.tZ)("br",{}),(0,V.tZ)("code",{children:c.uuid})]}):(0,V.tZ)("p",{children:(0,h.t)("Configure this dashboard to embed it into an external web application.")}),(0,V.BX)("p",{children:[(0,h.t)("For further instructions, consult the")," ",(0,V.tZ)("a",{href:C,target:"_blank",rel:"noreferrer",children:x?x():(0,h.t)("Superset Embedded SDK documentation.")})]}),(0,V.tZ)("h3",{children:(0,h.t)("Settings")}),(0,V.BX)(Ft.xJ,{children:[(0,V.BX)("label",{htmlFor:"allowed-domains",children:[(0,h.t)("Allowed Domains (comma separated)")," ",(0,V.tZ)(U.V,{tooltip:(0,h.t)("A list of domain names that can embed this dashboard. Leaving this field empty will allow embedding from any domain.")})]}),(0,V.tZ)($.II,{name:"allowed-domains",id:"allowed-domains",value:p,placeholder:"superset.example.com",onChange:e=>m(e.target.value)})]}),(0,V.tZ)(yn,{children:c?(0,V.BX)(V.HY,{children:[(0,V.tZ)(M.Z,{onClick:b,buttonStyle:"secondary",loading:l,children:(0,h.t)("Deactivate")}),(0,V.tZ)(M.Z,{onClick:v,buttonStyle:"primary",disabled:!f,loading:l,children:(0,h.t)("Save changes")})]}):(0,V.tZ)(M.Z,{onClick:v,buttonStyle:"primary",loading:l,children:(0,h.t)("Enable embedding")})})]})},Cn=e=>{const{show:t,onHide:n}=e,i=vn.get("embedded.modal");return i?(0,V.tZ)(i,{...e}):(0,V.tZ)(gn.default,{show:t,onHide:n,title:(0,h.t)("Embed"),hideFooter:!0,children:(0,V.tZ)(xn,{...e})})},Sn=(0,n(67913).Z)((()=>n.e(9043).then(n.bind(n,49043)))),wn=()=>{const e=(0,u.v9)((({dashboardState:e})=>e.overwriteConfirmMetadata));return(0,V.tZ)(V.HY,{children:e&&(0,V.tZ)(Sn,{overwriteConfirmMetadata:e})})},Zn=(0,ot.I)(),kn={addSuccessToast:w().func.isRequired,addDangerToast:w().func.isRequired,addWarningToast:w().func.isRequired,user:w().object,dashboardInfo:w().object.isRequired,dashboardTitle:w().string,dataMask:w().object.isRequired,charts:w().objectOf(z.$6).isRequired,layout:w().object.isRequired,expandedSlices:w().object,customCss:w().string,colorNamespace:w().string,colorScheme:w().string,setColorScheme:w().func.isRequired,setUnsavedChanges:w().func.isRequired,isStarred:w().bool.isRequired,isPublished:w().bool.isRequired,isLoading:w().bool.isRequired,onSave:w().func.isRequired,onChange:w().func.isRequired,fetchFaveStar:w().func.isRequired,fetchCharts:w().func.isRequired,saveFaveStar:w().func.isRequired,savePublished:w().func.isRequired,updateDashboardTitle:w().func.isRequired,editMode:w().bool.isRequired,setEditMode:w().func.isRequired,showBuilderPane:w().func.isRequired,updateCss:w().func.isRequired,logEvent:w().func.isRequired,hasUnsavedChanges:w().bool.isRequired,maxUndoHistoryExceeded:w().bool.isRequired,lastModifiedTime:w().number.isRequired,onRefresh:w().func.isRequired,onUndo:w().func.isRequired,onRedo:w().func.isRequired,undoLength:w().number.isRequired,redoLength:w().number.isRequired,setMaxUndoHistoryExceeded:w().func.isRequired,maxUndoHistoryToast:w().func.isRequired,refreshFrequency:w().number,shouldPersistRefreshFrequency:w().bool.isRequired,setRefreshFrequency:w().func.isRequired,dashboardInfoChanged:w().func.isRequired,dashboardTitleChanged:w().func.isRequired},Rn=e=>s.iv`
  border-bottom: 1px solid ${e.colors.grayscale.light2};
`,$n=e=>s.iv`
  color: ${e.colors.primary.dark2};
`,Tn=e=>s.iv`
  display: flex;
  align-items: center;

  .action-schedule-report {
    margin-left: ${2*e.gridUnit}px;
  }

  .undoRedo {
    display: flex;
    margin-right: ${2*e.gridUnit}px;
  }
`,Dn=(0,a.iK)(T.C0)`
  padding: 0;
  &:hover {
    background: transparent;
  }
`,Mn=e=>s.iv`
  color: ${e.colors.grayscale.light1};
  &:hover {
    color: ${e.colors.grayscale.base};
  }
`,In=e=>s.iv`
  color: ${e.colors.grayscale.base};
`,Fn=e=>s.iv`
  color: ${e.colors.grayscale.light2};
`,En=e=>s.iv`
  min-width: ${17*e.gridUnit}px;
  height: ${8*e.gridUnit}px;
`,_n=e=>s.iv`
  min-width: ${22*e.gridUnit}px;
  height: ${8*e.gridUnit}px;
`;class zn extends o.PureComponent{static discardChanges(){const e=new URL(window.location.href);e.searchParams.delete("edit"),window.location.assign(e)}constructor(e){super(e),this.showEmbedModal=()=>{this.setState({showingEmbedModal:!0})},this.hideEmbedModal=()=>{this.setState({showingEmbedModal:!1})},this.getMetadataItems=()=>{const{dashboardInfo:e}=this.props;return[{type:pn.pG.LastModified,value:e.changed_on_delta_humanized,modifiedBy:(0,cn.Z)(e.changed_by)||(0,h.t)("Not available")},{type:pn.pG.Owner,createdBy:(0,cn.Z)(e.created_by)||(0,h.t)("Not available"),owners:e.owners.length>0?e.owners.map(cn.Z):(0,h.t)("None"),createdOn:e.created_on_delta_humanized}]},this.state={didNotifyMaxUndoHistoryToast:!1,emphasizeUndo:!1,emphasizeRedo:!1,showingPropertiesModal:!1,isDropdownVisible:!1},this.handleChangeText=this.handleChangeText.bind(this),this.handleCtrlZ=this.handleCtrlZ.bind(this),this.handleCtrlY=this.handleCtrlY.bind(this),this.toggleEditMode=this.toggleEditMode.bind(this),this.forceRefresh=this.forceRefresh.bind(this),this.startPeriodicRender=this.startPeriodicRender.bind(this),this.overwriteDashboard=this.overwriteDashboard.bind(this),this.showPropertiesModal=this.showPropertiesModal.bind(this),this.hidePropertiesModal=this.hidePropertiesModal.bind(this),this.setIsDropdownVisible=this.setIsDropdownVisible.bind(this)}componentDidMount(){const{refreshFrequency:e}=this.props;this.startPeriodicRender(1e3*e)}componentDidUpdate(e){if(this.props.refreshFrequency!==e.refreshFrequency){const{refreshFrequency:e}=this.props;this.startPeriodicRender(1e3*e)}}UNSAFE_componentWillReceiveProps(e){_.Q9-e.undoLength<=0&&!this.state.didNotifyMaxUndoHistoryToast&&(this.setState((()=>({didNotifyMaxUndoHistoryToast:!0}))),this.props.maxUndoHistoryToast()),e.undoLength>_.Q9&&!this.props.maxUndoHistoryExceeded&&this.props.setMaxUndoHistoryExceeded()}componentWillUnmount(){hn(this.refreshTimer),this.props.setRefreshFrequency(0),clearTimeout(this.ctrlYTimeout),clearTimeout(this.ctrlZTimeout)}handleChangeText(e){const{updateDashboardTitle:t,onChange:n}=this.props;e&&this.props.dashboardTitle!==e&&(t(e),n())}setIsDropdownVisible(e){this.setState({isDropdownVisible:e})}handleCtrlY(){this.props.onRedo(),this.setState({emphasizeRedo:!0},(()=>{this.ctrlYTimeout&&clearTimeout(this.ctrlYTimeout),this.ctrlYTimeout=setTimeout((()=>{this.setState({emphasizeRedo:!1})}),100)}))}handleCtrlZ(){this.props.onUndo(),this.setState({emphasizeUndo:!0},(()=>{this.ctrlZTimeout&&clearTimeout(this.ctrlZTimeout),this.ctrlZTimeout=setTimeout((()=>{this.setState({emphasizeUndo:!1})}),100)}))}forceRefresh(){if(!this.props.isLoading){const e=Object.keys(this.props.charts);return this.props.logEvent(at.H3,{force:!0,interval:0,chartCount:e.length}),this.props.onRefresh(e,!0,0,this.props.dashboardInfo.id)}return!1}startPeriodicRender(e){let t;if(e){var n,i;const{dashboardInfo:r}=this.props,o=(null==(n=r.common)||null==(i=n.conf)?void 0:i.DASHBOARD_AUTO_REFRESH_INTERVALS).find((t=>Number(t[0])===e/1e3));t=o?(0,h.t)(o[1]):rt().duration(e,"millisecond").humanize()}this.refreshTimer=function({interval:e=0,periodicRender:t,refreshTimer:n}){return hn(n),e>0?setInterval(t,e):0}({interval:e,periodicRender:()=>{const{fetchCharts:n,logEvent:i,charts:r,dashboardInfo:o}=this.props,{metadata:a}=o,s=a.timed_refresh_immune_slices||[],l=Object.values(r).filter((e=>-1===s.indexOf(e.id))).map((e=>e.id));return i(at.S,{interval:e,chartCount:l.length}),this.props.addWarningToast((0,h.t)("This dashboard is currently auto refreshing; the next auto refresh will be in %s.",t)),"fetch"===o.common.conf.DASHBOARD_AUTO_REFRESH_MODE?n(l,!1,.2*e,o.id):n(l,!0,.2*e,o.id)},refreshTimer:this.refreshTimer})}toggleEditMode(){this.props.logEvent(at.vH,{edit_mode:!this.props.editMode}),this.props.setEditMode(!this.props.editMode)}overwriteDashboard(){var e,t,n;const{dashboardTitle:i,layout:r,colorScheme:o,colorNamespace:a,customCss:s,dashboardInfo:l,refreshFrequency:d,shouldPersistRefreshFrequency:c,lastModifiedTime:u,slug:p}=this.props,m=c?d:null==(e=l.metadata)?void 0:e.refresh_frequency,g=(null==l||null==(t=l.metadata)?void 0:t.color_namespace)||a,f=(null==l||null==(n=l.metadata)?void 0:n.color_scheme)||o,v={certified_by:l.certified_by,certification_details:l.certification_details,css:s,dashboard_title:i,last_modified_time:u,owners:l.owners,roles:l.roles,slug:p,metadata:{...null==l?void 0:l.metadata,color_namespace:g,color_scheme:f,positions:r,refresh_frequency:m}},b=(0,lt.o)(r).length,y=l.common.conf.SUPERSET_DASHBOARD_POSITION_DATA_LIMIT||_.Bu;b>=y?this.props.addDangerToast((0,h.t)("Your dashboard is too large. Please reduce its size before saving it.")):(b>=.9*y&&this.props.addWarningToast("Your dashboard is near the size limit."),this.props.onSave(v,l.id,_.TN))}showPropertiesModal(){this.setState({showingPropertiesModal:!0})}hidePropertiesModal(){this.setState({showingPropertiesModal:!1})}render(){var e,t,n,i;const{dashboardTitle:r,layout:o,expandedSlices:a,customCss:l,colorNamespace:c,dataMask:u,setColorScheme:p,setUnsavedChanges:m,colorScheme:g,onUndo:f,onRedo:v,undoLength:b,redoLength:y,onChange:x,onSave:C,updateCss:S,editMode:w,isPublished:Z,user:k,dashboardInfo:R,hasUnsavedChanges:$,isLoading:T,refreshFrequency:D,shouldPersistRefreshFrequency:F,setRefreshFrequency:E,lastModifiedTime:_,logEvent:z}=this.props,P=R.dash_edit_perm&&!R.is_managed_externally,U=R.dash_share_perm,O=R.dash_save_perm,B=(0,d.cr)(d.TT.EmbeddedSuperset)&&(0,st.R)("can_set_embedded","Dashboard",k.roles),q=null==(e=R.common)||null==(t=e.conf)?void 0:t.SUPERSET_DASHBOARD_PERIODICAL_REFRESH_LIMIT,A=null==(n=R.common)||null==(i=n.conf)?void 0:i.SUPERSET_DASHBOARD_PERIODICAL_REFRESH_WARNING_MESSAGE,K=Zn.get("dashboard.nav.right");return(0,V.BX)("div",{css:Rn,"data-test-id":R.id,className:"dashboard-header-container",children:[(0,V.tZ)(un.u,{editableTitleProps:{title:r,canEdit:P&&w,onSave:this.handleChangeText,placeholder:(0,h.t)("Add the name of the dashboard"),label:(0,h.t)("Dashboard title"),showTooltip:!1},certificatiedBadgeProps:{certifiedBy:R.certified_by,details:R.certification_details},faveStarProps:{itemId:R.id,fetchFaveStar:this.props.fetchFaveStar,saveFaveStar:this.props.saveFaveStar,isStarred:this.props.isStarred,showTooltip:!0},titlePanelAdditionalItems:[!w&&(0,V.tZ)(on,{dashboardId:R.id,isPublished:Z,savePublished:this.props.savePublished,canEdit:P,canSave:O,visible:!w}),!w&&(0,V.tZ)(pn.ZP,{items:this.getMetadataItems(),tooltipPlacement:"bottom"})],rightPanelAdditionalItems:(0,V.BX)("div",{className:"button-container",children:[O&&(0,V.tZ)("div",{className:"button-container",children:w&&(0,V.BX)("div",{css:Tn,children:[(0,V.BX)("div",{className:"undoRedo",children:[(0,V.tZ)(N.u,{id:"dashboard-undo-tooltip",title:(0,h.t)("Undo the action"),children:(0,V.tZ)(Dn,{type:"text",disabled:b<1,onClick:b&&f,children:(0,V.tZ)(I.Z.Undo,{css:[Mn,this.state.emphasizeUndo&&In,b<1&&Fn,"",""],iconSize:"xl"})})}),(0,V.tZ)(N.u,{id:"dashboard-redo-tooltip",title:(0,h.t)("Redo the action"),children:(0,V.tZ)(Dn,{type:"text",disabled:y<1,onClick:y&&v,children:(0,V.tZ)(I.Z.Redo,{css:[Mn,this.state.emphasizeRedo&&In,y<1&&Fn,"",""],iconSize:"xl"})})})]}),(0,V.tZ)(M.Z,{css:_n,buttonSize:"small",onClick:this.constructor.discardChanges,buttonStyle:"default","aria-label":(0,h.t)("Discard"),children:(0,h.t)("Discard")}),(0,V.tZ)(M.Z,{css:En,buttonSize:"small",disabled:!$,buttonStyle:"primary",onClick:this.overwriteDashboard,"aria-label":(0,h.t)("Save"),children:(0,h.t)("Save")})]})}),w?(0,V.tZ)(ln,{onUndo:this.handleCtrlZ,onRedo:this.handleCtrlY}):(0,V.BX)("div",{css:Tn,children:[K&&(0,V.tZ)(K,{}),P&&(0,V.tZ)(M.Z,{buttonStyle:"secondary",onClick:this.toggleEditMode,className:"action-button",css:$n,"aria-label":(0,h.t)("Edit dashboard"),children:(0,h.t)("Edit dashboard")})]})]}),menuDropdownProps:{getPopupContainer:e=>e.closest(".header-with-actions"),visible:this.state.isDropdownVisible,onVisibleChange:this.setIsDropdownVisible},additionalActionsMenu:(0,V.tZ)(Jt,{addSuccessToast:this.props.addSuccessToast,addDangerToast:this.props.addDangerToast,dashboardId:R.id,dashboardTitle:r,dashboardInfo:R,dataMask:u,layout:o,expandedSlices:a,customCss:l,colorNamespace:c,colorScheme:g,onSave:C,onChange:x,forceRefreshAllCharts:this.forceRefresh,startPeriodicRender:this.startPeriodicRender,refreshFrequency:D,shouldPersistRefreshFrequency:F,setRefreshFrequency:E,updateCss:S,editMode:w,hasUnsavedChanges:$,userCanEdit:P,userCanShare:U,userCanSave:O,userCanCurate:B,isLoading:T,showPropertiesModal:this.showPropertiesModal,manageEmbedded:this.showEmbedModal,refreshLimit:q,refreshWarning:A,lastModifiedTime:_,isDropdownVisible:this.state.isDropdownVisible,setIsDropdownVisible:this.setIsDropdownVisible,logEvent:z}),showFaveStar:(null==k?void 0:k.userId)&&(null==R?void 0:R.id),showTitlePanelItems:!0}),this.state.showingPropertiesModal&&(0,V.tZ)(dn.Z,{dashboardId:R.id,dashboardInfo:R,dashboardTitle:r,show:this.state.showingPropertiesModal,onHide:this.hidePropertiesModal,colorScheme:this.props.colorScheme,onSubmit:e=>{const{dashboardInfoChanged:t,dashboardTitleChanged:n}=this.props;p(e.colorScheme),t({slug:e.slug,metadata:JSON.parse(e.jsonMetadata||"{}"),certified_by:e.certifiedBy,certification_details:e.certificationDetails,owners:e.owners,roles:e.roles}),m(!0),n(e.title)},onlyApply:!0}),(0,V.tZ)(wn,{}),B&&(0,V.tZ)(Cn,{show:this.state.showingEmbedModal,onHide:this.hideEmbedModal,dashboardId:R.id}),(0,V.tZ)(s.xB,{styles:s.iv`
            .ant-menu-vertical {
              border-right: none;
            }
          `})]})}}zn.propTypes=kn,zn.defaultProps={colorNamespace:void 0,colorScheme:void 0};const Pn=zn;function Un(e){return Object.values(e).some((e=>e.chartUpdateStartTime>(e.chartUpdateEndTime||0)))}var On=n(41295),Bn=n(9467),Nn=n(12885),qn=n(72570),Vn=n(97381);const An=(0,u.$j)((function({dashboardLayout:e,dashboardState:t,reports:n,dashboardInfo:i,charts:r,dataMask:o,user:a}){return{dashboardInfo:i,undoLength:e.past.length,redoLength:e.future.length,layout:e.present,dashboardTitle:((e.present[_.M2]||{}).meta||{}).text,expandedSlices:t.expandedSlices,refreshFrequency:t.refreshFrequency,shouldPersistRefreshFrequency:!!t.shouldPersistRefreshFrequency,customCss:t.css,colorNamespace:t.colorNamespace,colorScheme:t.colorScheme,charts:r,dataMask:o,user:a,isStarred:!!t.isStarred,isPublished:!!t.isPublished,isLoading:Un(r),hasUnsavedChanges:!!t.hasUnsavedChanges,maxUndoHistoryExceeded:!!t.maxUndoHistoryExceeded,lastModifiedTime:Math.max(t.lastModifiedTime,i.last_modified_time),editMode:!!t.editMode,slug:i.slug,metadata:i.metadata,reports:n}}),(function(e){return(0,f.DE)({addSuccessToast:qn.ws,addDangerToast:qn.Gb,addWarningToast:qn.Dz,onUndo:Nn.Ou,onRedo:Nn.az,setEditMode:Bn.Mb,showBuilderPane:Bn.O8,setColorScheme:Bn.uW,setUnsavedChanges:Bn.if,fetchFaveStar:Bn.Lb,saveFaveStar:Bn.TN,savePublished:Bn.dr,fetchCharts:Bn.Mn,updateDashboardTitle:Nn.A7,updateCss:Bn.Sn,onChange:Bn.z2,onSave:Bn.M8,setMaxUndoHistoryExceeded:Bn.uN,maxUndoHistoryToast:Bn.Qt,logEvent:Vn.logEvent,setRefreshFrequency:Bn.fE,onRefresh:Bn.Yy,dashboardInfoChanged:On.a8,dashboardTitleChanged:Nn.Ww,updateDataMask:nt.eG},e)}))(Pn),Kn=a.iK.div`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.colors.grayscale.base};
  &:hover {
    color: ${({theme:e})=>e.colors.primary.base};
  }
`,jn=a.iK.span`
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
`,Ln=({icon:e,label:t,onClick:n})=>(0,V.BX)(Kn,{tabIndex:0,role:"button",onClick:e=>{e.preventDefault(),n(e)},children:[e,t&&(0,V.tZ)(jn,{children:t})]});var Xn=n(44818),Hn=n(99075),Wn=n(43617);function Yn({dashboardId:e,anchorLinkId:t,placement:n="right",emailContent:i="",emailSubject:r=""}){const[a,s]=(0,o.useState)(""),{addDangerToast:l}=(0,fn.e1)(),{dataMask:d,activeTabs:c}=(0,u.v9)((e=>({dataMask:e.dataMask,activeTabs:e.dashboardState.activeTabs}))),p=`mailto:?Subject=${r}%20&Body=${i}${a||""}`;return(0,V.tZ)(Hn.J,{trigger:"click",placement:n,content:(0,V.BX)("div",{id:"shorturl-popover",onClick:e=>{e.stopPropagation()},children:[(0,V.tZ)(Wn.Z,{text:a,copyNode:(0,V.tZ)("i",{className:"fa fa-clipboard",title:(0,h.t)("Copy to clipboard")})}),"  ",(0,V.tZ)("a",{href:p,children:(0,V.tZ)("i",{className:"fa fa-envelope"})})]}),children:(0,V.BX)("span",{className:"short-link-trigger btn btn-default btn-sm",tabIndex:-1,role:"button",onClick:n=>{n.stopPropagation(),(async()=>{try{const n=await(0,gt.Nm)({dashboardId:e,dataMask:d,activeTabs:c,anchor:t});s(n)}catch(e){e&&l((await(0,Xn.O$)(e)).error||(0,h.t)("Something went wrong."))}})()},children:[(0,V.tZ)("i",{className:"short-link-trigger fa fa-link"})," "]})})}var Gn=n(56967);function Jn({id:e,dashboardId:t,placement:n="right",scrollIntoView:i=!1,showShortLinkButton:r=!0}){const a=e=>{const t=document.getElementById(e);t&&t.scrollIntoView({block:"center",behavior:"smooth"})},s=(0,Gn.Z)();return(0,o.useEffect)((()=>{s&&e===s&&a(e)}),[s,e]),(0,o.useEffect)((()=>{i&&a(e)}),[e,i]),(0,V.tZ)("span",{className:"anchor-link-container",id:e,children:r&&t&&(0,V.tZ)(Yn,{anchorLinkId:e,dashboardId:t,emailSubject:(0,h.t)("Superset chart"),emailContent:(0,h.t)("Check out this chart in dashboard:"),placement:n})})}var Qn=n(81395),ei=n(52256),ti=n(91914),ni=n(18446),ii=n.n(ni),ri=n(16550),oi=n(40730),ai=n(99543),si=n(40219),li=n(29147),di=n(38270),ci=n(39228),hi=n(11382),ui=n(71230),pi=n(15746),mi=n(36795),gi=n(9676),fi=n(61654),vi=n(55786),bi=n(11064),yi=n(16355),xi=n(88694),Ci=n(56727),Si=n(54076);const wi=e=>{const t="MacOS"===(0,Si.fV)(),n=e?(0,h.t)("Click to edit %s.",e):(0,h.t)("Click to edit chart."),i=(0,h.t)("Use %s to open in a new tab.",t?(0,h.t)("⌘ + click"):(0,h.t)("ctrl + click"));return(0,V.BX)(V.HY,{children:[(0,V.tZ)("div",{children:n}),(0,V.tZ)("div",{children:i})]})};var Zi=n(15423),ki=n(21496),Ri=n(41814),$i=n(37731),Ti=n(32873);const Di=(0,n(22222).P1)((e=>e.charts),(e=>Object.values(e).map((e=>e.id)))),Mi=()=>((e,t)=>{const n=(0,o.useRef)(),i=n.current,r=((e,t)=>e===t||ii()(e,t))(i,e);return(0,o.useEffect)((()=>{r||(n.current=e)})),(0,$i.Z)(i)&&r?i:e})((0,u.v9)(Di));var Ii=n(9531);const Fi=({type:e})=>e===E.gn||e===E.dW||e===E.U0,Ei=(e,t,n,i,r,o,a)=>{var s;let l=t;if(e&&t&&Fi(e)&&e.type!==E.U0&&null!=r&&null!=r.includes&&r.includes(e.id)){var d;const n=a((e=>{var t,n,i,r,o,a,s,l,d,c;return null!=(t=null!=(n=null!=(i=null!=(r=null!=(o=null==e||null==(a=e.meta)?void 0:a.sliceNameOverride)?o:null==e||null==(s=e.meta)?void 0:s.sliceName)?r:null==e||null==(l=e.meta)?void 0:l.text)?i:null==e||null==(d=e.meta)?void 0:d.defaultText)?n:null==e||null==(c=e.id)||null==c.toString?void 0:c.toString())?t:""})(e),null==o||null==o.includes?void 0:o.includes(null==(d=e.meta)?void 0:d.chartId),(0,h.t)("This chart might be incompatible with the filter (datasets don't match)")),i={key:e.id,title:n,children:[]};t.children.push(i),l=i}null==e||null==(s=e.children)||null==s.forEach||s.forEach((e=>{const t=null==n?void 0:n[e];t?Ei(t,l,n,i,r,o,a):mt.Z.warn(`Unable to find item with id: ${e} in the dashboard layout. This may indicate you have invalid references in your dashboard and the references to id: ${e} should be removed.`)}))},_i=(e,t,n,i)=>{n.forEach((n=>{var r,o;_i(e,t,((e,t)=>{var n;return[...(null==(n=e[t])?void 0:n.children)||[],...Object.values(e).filter((n=>n.parents&&n.parents[n.parents.length-1]===t&&!Fi(e[n.parents[n.parents.length-1]]))).map((({id:e})=>e))]})(t,n),i),(null==(r=t[n])?void 0:r.type)!==E.dW||i.includes(null==(o=t[n])?void 0:o.meta.chartId)||e.push(n)}))},zi=(e,t=[])=>({rootPath:[_._4],excluded:e?[e,...t]:t}),Pi=(e,t)=>!e||e.rootPath[0]===_._4&&!e.excluded.filter((e=>e!==t)).length,Ui=(e,t,n)=>{let i=(0,V.tZ)("span",{children:e});return t&&(i=(0,V.BX)(V.HY,{children:[i," ",(0,V.tZ)(N.u,{title:n,children:(0,V.tZ)(I.Z.Info,{iconSize:"m"})})]})),i},Oi=({formScope:e,initialScope:t,forceUpdate:n,updateFormValues:i,chartId:r,initiallyExcludedCharts:a=[],title:s})=>{const[l,d]=(0,o.useState)([_._4]),{treeData:c,layout:p}=function(e,t=[],n=(e=>e),i=(0,h.t)("All panels")){const r=(0,u.v9)((({dashboardLayout:{present:e}})=>e)),a=(0,u.v9)((({charts:e})=>e)),s={children:[],key:_._4,type:E.U0,title:i},l=(0,o.useMemo)((()=>Object.values(r).reduce(((t,n)=>{const{id:i,parents:r=[],type:o,meta:a}=n;return o===E.dW&&e!==(null==a?void 0:a.chartId)?[...new Set([...t,...r,i])]:t}),[])),[r,e]);return(0,o.useMemo)((()=>{Ei(r[_._4],s,r,a,l,t,n)}),[r,s,a,t,n]),{treeData:[s],layout:r}}(r,a,Ui,s),[m,g]=(0,o.useState)(!0),f=(0,o.useMemo)((()=>((e,t)=>{const n=[];return _i(n,t,[...e.rootPath],[...e.excluded]),[...new Set(n)]})({...e||t},p)),[e,t,p]);return(0,V.tZ)(T.mp,{checkable:!0,selectable:!1,onExpand:e=>{d(e),g(!1)},expandedKeys:l,autoExpandParent:m,onCheck:e=>{n();const t=((e,t)=>{if(!e.length)return{rootPath:[],excluded:[]};const n=e.filter((e=>{var n;return(null==(n=t[e])?void 0:n.type)===E.dW})).map((e=>{var n;return[_._4,...(null==(n=t[e])?void 0:n.parents)||[]].filter((e=>Fi(t[e])))}));n.sort(((e,t)=>e.length-t.length));const i=n.map((e=>e[n[0].length-1])),r=[];return Object.entries(t).forEach((([t,n])=>{var o;const a=n.parents||[];n.type===E.dW&&null!=(o=[_._4,...a])&&o.find((n=>((t,n)=>i.includes(t)&&!e.includes(n))(n,t)))&&r.push(n.meta.chartId)})),{rootPath:[...new Set(i)],excluded:r}})(e,p);void 0!==r&&(t.excluded=[...new Set([...t.excluded,r])]),i({scope:t})},checkedKeys:f,treeData:c})},Bi=(0,o.memo)(Oi),Ni=-1,qi=a.iK.div`
  ${({theme:e})=>s.iv`
    font-size: ${e.typography.sizes.s}px;
    color: ${e.colors.grayscale.base};
    margin-bottom: ${7*e.gridUnit}px;
  `}
`,Vi=({value:e,onSelectChange:t,chartConfigs:n})=>{const i=(0,a.Fg)(),r=(0,u.v9)((e=>e.dashboardLayout.present)),l=(0,o.useMemo)((()=>{const t=Object.values(r).filter((e=>e.type===E.dW));return Object.values(n).filter((t=>(0,ft._6)(t.crossFilters.scope)||t.id===e&&e!==Ni)).map((e=>{const n=t.find((t=>t.meta.chartId===Number(e.id)));return{value:Number(e.id),label:(null==n?void 0:n.meta.sliceNameOverride)||(null==n?void 0:n.meta.sliceName)||""}}))}),[n,r,e]);return(0,V.BX)("div",{css:s.iv`
        margin-bottom: ${6*i.gridUnit}px;
      `,children:[(0,V.BX)("div",{css:s.iv`
          display: flex;
          align-items: center;
          margin-bottom: ${i.gridUnit}px;
        `,children:[(0,V.tZ)(qi,{css:s.iv`
            color: ${i.colors.grayscale.dark1};
            margin-right: ${i.gridUnit}px;
            margin-bottom: 0;
          `,children:`${(0,h.t)("Chart")} *`}),(0,V.tZ)(N.u,{title:(0,h.t)("Tooltip"),placement:"top",children:(0,V.tZ)(I.Z.InfoCircleOutlined,{iconSize:"xs",iconColor:i.colors.grayscale.base,css:s.iv`
              & > span {
                line-height: 0;
              }
            `})})]}),(0,V.tZ)(T.Ph,{ariaLabel:(0,h.t)("Select chart"),options:l,value:e&&e===Ni?void 0:e,onChange:e=>{t(Number(e))}})]})},Ai=({onScopeUpdate:e,currentScope:t,chartId:n,onSelectChange:i,chartConfigs:r})=>{const o=(0,a.Fg)(),l=(0,u.v9)((({dashboardInfo:e})=>e.crossFiltersEnabled));return(0,V.BX)("div",{css:s.iv`
        flex: 1;
      `,children:[!l&&(0,V.tZ)(It.Z,{message:(0,V.tZ)("span",{css:s.iv`
                font-weight: ${o.typography.weights.bold};
              `,children:(0,h.t)("Cross-filtering is not enabled in this dashboard")}),type:"info",closable:!1,css:s.iv`
            margin-bottom: ${6*o.gridUnit}px;
          `}),(0,$i.Z)(n)&&(0,V.tZ)(Vi,{value:n,onSelectChange:i,chartConfigs:r}),(0,V.tZ)(qi,{children:(0,$i.Z)(n)?(0,h.t)('Select the charts to which you want to apply cross-filters when interacting with this chart. You can select "All charts" to apply filters to all charts that use the same dataset or contain the same column name in the dashboard.'):(0,h.t)('Select the charts to which you want to apply cross-filters in this dashboard. Deselecting a chart will exclude it from being filtered when applying cross-filters from any chart on the dashboard. You can select "All charts" to apply cross-filters to all charts that use the same dataset or contain the same column name in the dashboard.')}),(0,V.tZ)(Bi,{updateFormValues:e,initialScope:t,forceUpdate:Si.EI,chartId:n,title:(0,h.t)("All charts")})]})};var Ki=n(27034),ji=n(22068);const Li="FILTER",Xi=a.iK.div`
  ${({isDragging:e,theme:t})=>`\n    opacity: ${e?.3:1};\n    cursor: ${e?"grabbing":"pointer"};\n    width: 100%;\n    display: flex;\n    padding:  ${t.gridUnit}px;\n  `}
`,Hi=(0,a.iK)(I.Z.Drag,{shouldForwardProp:e=>"isDragging"!==e})`
  ${({isDragging:e,theme:t})=>`\n    font-size: ${t.typography.sizes.m}px;\n    margin-top: 15px;\n    cursor: ${e?"grabbing":"grab"};\n    padding-left: ${t.gridUnit}px;\n  `}
`;var Wi={name:"82a6rk",styles:"flex:1"};const Yi=({index:e,onRearrange:t,filterIds:n,children:i})=>{const r=(0,o.useRef)(null),[{isDragging:a},s]=(0,Ki.c)({item:{filterIds:n,type:Li,index:e},collect:e=>({isDragging:e.isDragging()})}),[,l]=(0,ji.L)({accept:Li,hover:(n,i)=>{var o;if(!r.current)return;const a=n.index,s=e;if(a===s)return;const l=null==(o=r.current)?void 0:o.getBoundingClientRect(),d=(l.bottom-l.top)/2,c=i.getClientOffset().y-l.top;a<s&&c<d||a>s&&c>d||(t(a,s),n.index=s)}});return s(l(r)),(0,V.BX)(Xi,{ref:r,isDragging:a,children:[(0,V.tZ)(Hi,{isDragging:a,alt:"Move icon",className:"dragIcon",viewBox:"4 4 16 16"}),(0,V.tZ)("div",{css:Wi,children:i})]})},Gi=a.iK.div`
  ${({theme:e})=>`\n      display: flex;\n      align-items: center;\n      padding: ${2*e.gridUnit}px;\n      width: 100%;\n      border-radius: ${e.borderRadius}px;\n      cursor: pointer;\n      &.active {\n        color: ${e.colors.grayscale.dark1};\n        border-radius: ${e.borderRadius}px;\n        background-color: ${e.colors.secondary.light4};\n        span, .anticon {\n          color: ${e.colors.grayscale.dark1};\n        }\n      }\n      &:hover {\n        color: ${e.colors.primary.light1};\n        span, .anticon {\n          color: ${e.colors.primary.light1};\n        }\n      }\n      &.errored div, &.errored .warning {\n        color: ${e.colors.error.base};\n      }\n  `}
`,Ji=(0,a.iK)(I.Z.Trash)`
  color: ${({theme:e})=>e.colors.grayscale.light3};
`,Qi=(0,a.iK)(I.Z.Warning)`
  color: ${({theme:e})=>e.colors.error.base};
  &.anticon {
    margin-left: auto;
  }
`,er=a.iK.div`
  height: 100%;
  overflow-y: auto;
`;var tr={name:"7whenc",styles:"display:flex;width:100%"},nr={name:"1abjxqb",styles:"align-items:center;display:flex;word-break:break-all"},ir={name:"1je5tt7",styles:"align-self:flex-end;margin-left:auto"},rr={name:"an0ls6",styles:"align-self:flex-start;margin-left:auto"};const or=(0,o.forwardRef)((({getFilterTitle:e,onChange:t,onRemove:n,restoreFilter:i,onRearrange:r,currentFilterId:o,removedFilters:a,filters:s,erroredFilters:l=[]},d)=>{const c=r=>{const s=!!a[r],d=l.includes(r),c=o===r,u=[];return d&&u.push("errored"),c&&u.push("active"),(0,V.BX)(Gi,{role:"tab",onClick:()=>t(r),className:u.join(" "),children:[(0,V.BX)("div",{css:tr,children:[(0,V.tZ)("div",{css:nr,children:s?(0,h.t)("(Removed)"):e(r)}),!a[r]&&d&&(0,V.tZ)(Qi,{className:"warning"}),s&&(0,V.tZ)("span",{css:ir,role:"button",tabIndex:0,onClick:e=>{e.preventDefault(),i(r)},children:(0,h.t)("Undo?")})]}),(0,V.tZ)("div",{css:rr,children:s?null:(0,V.tZ)(Ji,{onClick:e=>{e.stopPropagation(),n(r)},alt:"RemoveFilter"})})]},`filter-title-tab-${r}`)};return(0,V.tZ)(er,{ref:d,children:(()=>{const e=[];return s.forEach(((t,n)=>{e.push((0,V.tZ)(Yi,{onRearrange:r,index:n,filterIds:[t],children:c(t)},n))})),e})()})})),ar=a.iK.div`
  ${({theme:e})=>s.iv`
    margin-top: ${2*e.gridUnit}px;

    & button > [role='img']:first-of-type {
      margin-right: ${e.gridUnit}px;
      line-height: 0;
    }

    span[role='img'] {
      padding-bottom: 1px;
    }

    .ant-btn > .anticon + span {
      margin-left: 0;
    }
  `}
`,sr=({isActive:e,onClick:t,id:n,label:i,onRemove:r})=>{const o=(0,a.Fg)();return(0,V.BX)(Gi,{className:e?"active":"",onClick:()=>t(n),children:[i,(0,V.tZ)(I.Z.Trash,{iconColor:o.colors.grayscale.light3,onClick:e=>{e.stopPropagation(),r(n)},css:s.iv`
          margin-left: auto;
        `})]})},lr=({activeChartId:e,chartConfigs:t,setCurrentChartId:n,removeCustomScope:i,addNewCustomScope:r})=>{const l=(0,a.Fg)(),d=(0,u.v9)((e=>e.dashboardLayout.present)),c=(0,o.useMemo)((()=>{const e=Object.values(d).filter((e=>e.type===E.dW));return Object.values(t).filter((e=>!(0,ft._6)(e.crossFilters.scope)&&e.id!==Ni)).map((t=>{const n=e.find((e=>e.meta.chartId===t.id));return{id:t.id,label:(null==n?void 0:n.meta.sliceNameOverride)||(null==n?void 0:n.meta.sliceName)||""}}))}),[t,d]),p=t[-1];return(0,V.BX)(V.HY,{children:[(0,V.tZ)(ar,{children:(0,V.BX)(M.Z,{buttonStyle:"link",buttonSize:"xsmall",onClick:r,children:[(0,V.tZ)(I.Z.PlusSmall,{})," ",(0,h.t)("Add custom scoping")]})}),(0,V.tZ)(Gi,{role:"button",onClick:()=>n(void 0),className:void 0===e?"active":"",children:(0,h.t)("All charts/global scoping")}),(0,V.tZ)("div",{css:s.iv`
          width: 100%;
          height: 1px;
          background-color: ${l.colors.grayscale.light3};
          margin: ${3*l.gridUnit}px 0;
        `}),c.map((t=>(0,V.tZ)(sr,{id:t.id,onClick:n,onRemove:i,isActive:e===t.id,label:t.label},t.id))),p&&(0,V.tZ)(sr,{id:p.id,onClick:n,onRemove:i,isActive:e===p.id,label:`[${(0,h.t)("new custom scoping")}]`})]})},dr=a.iK.div`
  ${({theme:e})=>s.iv`
    display: flex;
    height: 100%;
    & > div {
      padding: ${4*e.gridUnit}px;
    }
  `}
`,cr=({chartId:e,currentScope:t,onScopeUpdate:n,onSelectChange:i,chartConfigs:r,setCurrentChartId:o,removeCustomScope:l,addNewCustomScope:d})=>{const c=(0,a.Fg)();return(0,V.BX)(dr,{children:[(0,V.tZ)("div",{css:s.iv`
          width: 35%;
          border-right: 1px solid ${c.colors.grayscale.light2};
        `,children:(0,V.tZ)(lr,{setCurrentChartId:o,activeChartId:e,chartConfigs:r,removeCustomScope:l,addNewCustomScope:d})}),(0,V.tZ)(Ai,{chartId:e,currentScope:t,onScopeUpdate:n,onSelectChange:i,chartConfigs:r})]})},hr=(e,t)=>({rootPath:t.rootPath,excluded:t.excluded.filter((t=>t!==e))}),ur=({initialChartId:e,isVisible:t,closeModal:n})=>{const i=(0,u.I0)(),r=(0,u.v9)((e=>e.dashboardLayout.present)),a=Mi(),[s,l]=(0,o.useState)(e),d=(0,u.v9)((e=>{var t;return(null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration)||{}})),c=(0,o.useMemo)((()=>({scope:Ii.eV,chartsInScope:a})),[a]),p=(0,u.v9)((e=>{var t;return(null==(t=e.dashboardInfo.metadata)?void 0:t.global_chart_configuration)||c})),[m,g]=(0,o.useState)((0,$i.Z)(e)&&(0,ft._6)(null==(f=d[e])?void 0:f.crossFilters.scope)?{...d,[e]:{id:e,crossFilters:{scope:hr(e,p.scope),chartsInScope:null==(v=d[e])?void 0:v.crossFilters.chartsInScope}}}:d);var f,v;const[b,y]=(0,o.useState)(p),x=(0,o.useCallback)((()=>{const e={...m};e[-1]&&delete e[-1],i((0,On.Mi)({chartConfiguration:e,globalChartConfiguration:b})),n()}),[m,n,i,b]),C=(0,o.useCallback)((({scope:e})=>{if((0,$i.Z)(s))g((t=>({...t,[s]:{id:s,crossFilters:{scope:e,chartsInScope:(0,Ti.Q)(e,a,r)}}})));else{const t=(0,Ti.Q)(e,a,r);y({scope:e,chartsInScope:t}),g((e=>((e,t)=>Object.entries(e).reduce(((e,[n,i])=>((0,ft._6)(i.crossFilters.scope)?e[n]={id:Number(i.id),crossFilters:{scope:ft.$,chartsInScope:t.filter((e=>e!==Number(i.id)))}}:e[n]=i,e)),{}))(e,t)))}}),[s,a,r]),S=(0,o.useCallback)((e=>{g((t=>{const n={...t};return e===Ni?delete n[-1]:n[e]={id:e,crossFilters:{scope:ft.$,chartsInScope:b.chartsInScope.filter((t=>t!==e))}},n})),s===e&&l(void 0)}),[s,b.chartsInScope]),w=(0,o.useCallback)((()=>{l(Ni),m[-1]||g((e=>({...e,[Ni]:{id:Ni,crossFilters:{scope:b.scope,chartsInScope:b.chartsInScope}}})))}),[m,b.chartsInScope,b.scope]),Z=(0,o.useCallback)((e=>{if((0,$i.Z)(s)){var t;const n=(0,ft._6)(null==(t=m[s])?void 0:t.crossFilters.scope)?b.scope:m[s].crossFilters.scope,i={rootPath:n.rootPath,excluded:[...n.excluded.filter((e=>e!==s)),e]},o={id:e,crossFilters:{scope:i,chartsInScope:(0,Ti.Q)(i,a,r)}};g((t=>{const n={...t,[e]:o};return s===Ni?delete n[-1]:n[s]={id:s,crossFilters:{scope:ft.$,chartsInScope:b.chartsInScope.filter((e=>e!==s))}},n})),l(e)}}),[m,a,s,b.chartsInScope,b.scope,r]),k=(0,o.useMemo)((()=>{var e,t,n,i;const r=b.scope;return(0,$i.Z)(s)?(0,ft._6)(null==(e=m[s])||null==(t=e.crossFilters)?void 0:t.scope)?hr(s,r):null==(n=m[s])||null==(i=n.crossFilters)?void 0:i.scope:r}),[m,s,b.scope]);return(0,V.tZ)(gn.default,{onHide:n,show:t,title:(0,h.t)("Cross-filtering scoping"),onHandledPrimaryAction:x,primaryButtonName:(0,h.t)("Save"),responsive:!0,destroyOnClose:!0,bodyStyle:{padding:0,height:700},children:(0,V.tZ)(cr,{chartConfigs:m,currentScope:k,onScopeUpdate:C,chartId:s,setCurrentChartId:l,onSelectChange:Z,removeCustomScope:S,addNewCustomScope:w})})},pr=e=>{const[t,n]=(0,o.useState)(!1),i=(0,o.useCallback)((()=>n(!0)),[]),r=(0,o.useCallback)((()=>n(!1)),[]);return[i,t?(0,V.tZ)(ur,{initialChartId:e,closeModal:r,isVisible:t}):null]},mr="Enter",gr="Spacebar",fr=" ",vr="Tab",br="Escape",yr="ArrowUp",xr="ArrowDown",Cr=a.iK.div`
  padding: ${({theme:e})=>e.gridUnit/4}px
    ${({theme:e})=>1.5*e.gridUnit}px;

  .dot {
    display: block;
    height: ${({theme:e})=>e.gridUnit}px;
    width: ${({theme:e})=>e.gridUnit}px;
    border-radius: 50%;
    margin: ${({theme:e})=>e.gridUnit/2}px 0;
    background-color: ${({theme:e})=>e.colors.text.label};
  }

  &:hover {
    cursor: pointer;
  }
`,Sr=a.iK.div`
  height: auto;
  margin: ${({theme:e})=>e.gridUnit}px 0;
  color: ${({theme:e})=>e.colors.grayscale.base};
  line-height: 21px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`,wr=s.iv`
  /* İlk içteki ikon span/svg hizalamasını düzeltir */
  &&.anticon > .anticon:first-child {
    margin-right: 0;
    vertical-align: 0;
  }
`,Zr=()=>(0,V.BX)(Cr,{children:[(0,V.tZ)("span",{className:"dot"}),(0,V.tZ)("span",{className:"dot"}),(0,V.tZ)("span",{className:"dot"})]});function kr(e){const t=null==e?void 0:e.props;return t?Object.values(t).filter((e=>(0,ht.av)(e))):[]}function Rr(e,t){const n=t||[];return(0,vi.Z)(e).forEach((e=>{var t;const i=(0,ht.xI)(e),r=kr(e);if(i){const{key:t}=e;t&&n.push({key:t})}if(r.length&&n.push(...r.map((e=>({key:e.current.props.eventKey,ref:e})))),null!=e&&null!=(t=e.props)&&t.children){const t=Rr(e.props.children,n);n.push(...t)}})),n}function $r(e){const t={};return(0,vi.Z)(e).forEach((e=>{var n;const i=(0,ht.xI)(e),r=(0,ht.ef)(e),o=kr(e);if(i||r){const n=null==e?void 0:e.key;n&&(t[n]={},t[n].type=r?ht.fH.SubMenu:ht.fH.MenuItem)}var a;(o.length&&o.forEach((n=>{const i=n.current.props.eventKey;t[i]={},t[i].type=r?ht.fH.SubMenu:ht.fH.MenuItem,t[i].parent=e.key,t[i].ref=n})),null!=e&&null!=(n=e.props)&&n.children)&&Rr(null==e||null==(a=e.props)?void 0:a.children).forEach((n=>{const i=n.key;t[i]={},t[i].type=ht.fH.SubMenuItem,t[i].parent=e.key,n.ref&&(t[i].ref=n.ref)}))})),t}function Tr(e,t,n,i="up"){var r;const o="up"===i?-1:1,a="up"===i?-2:2,s="up"===i?0:e.length,l="up"===i?Math.max:Math.min;let d,c=e[l(n+o,s)];if(!c)return{selectedKey:e[0],openKey:void 0};if((null==(r=t[c])?void 0:r.type)===ht.fH.SubMenu&&(c=e[l(n+a,s)]),(0,ht.PI)(t[c].type)){const e=t[c].parent;e&&(d=e)}else d=void 0;return{selectedKey:c,openKey:d}}const Dr=({canExplore:e,exploreUrl:t,triggerNode:n,modalTitle:i,modalBody:r,showModal:l,setShowModal:d})=>{const c=(0,ri.k6)(),u=(0,a.Fg)(),p=(0,o.useCallback)((()=>d(!0)),[]),m=(0,o.useCallback)((()=>d(!1)),[]);return(0,V.BX)(V.HY,{children:[(0,V.tZ)("span",{onClick:p,role:"button",tabIndex:0,children:n}),(0,V.tZ)(gn.default,{css:s.iv`
          .ant-modal-body {
            display: flex;
            flex-direction: column;
          }
        `,show:l,onHide:m,closable:!0,title:i,footer:(0,V.BX)(V.HY,{children:[(0,V.tZ)(M.Z,{buttonStyle:"secondary",buttonSize:"small",onClick:()=>c.push(t),disabled:!e,tooltip:e?void 0:(0,h.t)("You do not have sufficient permissions to edit the chart"),children:(0,h.t)("Edit chart")}),(0,V.tZ)(M.Z,{buttonStyle:"primary",buttonSize:"small",onClick:m,css:s.iv`
                margin-left: ${2*u.gridUnit}px;
              `,children:(0,h.t)("Close")})]}),responsive:!0,resizable:!0,resizableConfig:{minHeight:128*u.gridUnit,minWidth:128*u.gridUnit,defaultSize:{width:"auto",height:"75vh"}},draggable:!0,destroyOnClose:!0,children:r})]})},Mr=(0,ri.EN)((function(e){var t,n;const{slice:i,componentId:r,dashboardId:a,chartStatus:l,isCached:c=[],cachedDttm:p=[],updatedDttm:m=null,isFullSize:g,isDescriptionExpanded:f,formData:v,exploreUrl:b,supersetCanShare:y=!1,supersetCanCSV:x=!1,addDangerToast:C,addSuccessToast:S,forceRefresh:w,toggleExpandSlice:Z,logExploreChart:k,logEvent:R,handleToggleFullSize:$,exportCSV:T,exportPivotCSV:D,exportFullCSV:F,exportFullXLSX:E,exportXLSX:_,supersetCanExplore:z,crossFiltersEnabled:P}=e,[U,O]=(0,o.useState)(!1),[B,q]=(0,o.useState)(!1),[A,K]=(0,o.useState)(!1),[j,L]=(0,o.useState)(!1),[X,H]=(0,o.useState)([]),[W,Y]=(0,o.useState)([]),[G,J]=(0,o.useState)(!1),[Q,ee]=(0,o.useState)(1e3),[te,ne]=(0,o.useState)([]),[ie,re]=(0,o.useState)(void 0),[oe,ae]=pr(i.slice_id),se=(0,ri.k6)(),le=(0,o.useRef)(null),de=(0,o.useRef)(null),ce=(0,o.useRef)(null),he=(0,o.useRef)(null),ue=(0,o.useRef)(null),pe=(0,u.v9)((({dashboardInfo:e})=>e.dash_edit_perm))&&(0,d.cr)(d.TT.DashboardCrossFilters)&&(null==(t=(0,bi.Z)().get(i.viz_type))||null==(n=t.behaviors)?void 0:n.includes(yi.cg.InteractiveChart)),me=z,ge=(0,u.v9)((e=>{var t;return(0,st.R)("can_samples","Datasource",null==(t=e.user)?void 0:t.roles)})),fe=(0,u.v9)((e=>{var t;return(0,st.R)("can_drill","Dashboard",null==(t=e.user)?void 0:t.roles)})),ve=(me||fe)&&ge,be=(0,u.v9)((e=>{var t;return(0,st.R)("can_view_query","Dashboard",null==(t=e.user)?void 0:t.roles)})),ye=(0,u.v9)((e=>{var t;return(0,st.R)("can_view_chart_as_table","Dashboard",null==(t=e.user)?void 0:t.roles)})),xe=({close:e}={})=>{O(!(e||U)),ne([])};(0,o.useEffect)((()=>{var e,t;if(!j)return;const n=null!=(e=null!=(t=null==v?void 0:v.datasource)?t:i.datasource)?e:"",r=n.includes("__")?n.split("__")[0]:n;J(!0),Ct.Z.get({endpoint:`/api/v1/dataset/${r}`}).then((({json:e})=>{var t;const n=((null==e||null==(t=e.result)?void 0:t.columns)||[]).map((e=>e.column_name));H(n),Y(n)})).catch((e=>{console.error("Failed to load dataset columns",e),C((0,h.t)("Could not load dataset columns for export."))})).finally((()=>J(!1)))}),[j]);const Ce=()=>{L(!1),Y([]),ee(1e3)},Se=(p||[]).map((e=>rt().utc(e).fromNow())),we=m?rt().utc(m).fromNow():"",Ze=[...new Set(c.map((e=>e?(0,h.t)("Cached %s",Se):we?(0,h.t)("Fetched %s",we):""))||"")],ke=Ze.map(((e,t)=>(0,V.tZ)("div",{children:Ze.length>1?(0,h.t)("Query %s: %s",t+1,e):e},`tooltip-${t}`))),Re=g?(0,h.t)("Exit fullscreen"):(0,h.t)("Enter fullscreen"),$e=(0,V.BX)(ht.Menu,{onClick:({key:e,domEvent:t})=>{switch(xe({close:!0}),e){case ft.bu.ForceRefresh:m&&w(i.slice_id,a),S((0,h.t)("Data refreshed"));break;case ft.bu.ToggleChartDescription:null==Z||Z(i.slice_id);break;case ft.bu.ExploreChart:null==k||k(i.slice_id),t.metaKey||t.ctrlKey?(t.preventDefault(),window.open(b,"_blank")):se.push(b);break;case ft.bu.ExportCsv:null==T||T(i.slice_id);break;case ft.bu.ExportPivotCsv:null==D||D(i.slice_id);break;case ft.bu.Fullscreen:$();break;case ft.bu.ExportFullCsv:null==F||F(i.slice_id);break;case ft.bu.ExportFullXlsx:null==E||E(i.slice_id);break;case ft.bu.ExportXlsx:null==_||_(i.slice_id);break;case ft.bu.FullDataExportCsv:L(!0);break;case ft.bu.DownloadAsImage:{const e=document.querySelector(".ant-dropdown:not(.ant-dropdown-hidden)");e&&(e.style.visibility="hidden"),(0,Ci.Z)((n=i.slice_id,`.dashboard-chart-id-${n}`),i.slice_name,!0)(t).then((()=>{e&&(e.style.visibility="visible")})),null==R||R(at.xE,{chartId:i.slice_id});break}case ft.bu.CrossFilterScoping:oe();break;case ft.bu.ViewResults:B||q(!0);break;case ft.bu.DrillToDetail:K(!A);break;case ft.bu.ViewQuery:de.current&&!de.current.showModal&&de.current.open(t)}var n},selectable:!1,selectedKeys:te,id:`slice_${i.slice_id}-menu`,ref:le,forceSubMenuRender:!0,...ie?{openKeys:ie}:{},children:[(0,V.BX)(ht.Menu.Item,{disabled:"loading"===l,style:{height:"auto",lineHeight:"initial"},children:[(0,h.t)("Force refresh"),(0,V.tZ)(Sr,{children:ke})]},ft.bu.ForceRefresh),(0,V.tZ)(ht.Menu.Item,{children:Re},ft.bu.Fullscreen),(0,V.tZ)(ht.Menu.Divider,{}),i.description&&(0,V.tZ)(ht.Menu.Item,{children:f?(0,h.t)("Hide chart description"):(0,h.t)("Show chart description")},ft.bu.ToggleChartDescription),me&&(0,V.tZ)(ht.Menu.Item,{children:(0,V.tZ)(N.u,{title:wi(i.slice_name),children:(0,h.t)("Edit chart")})},ft.bu.ExploreChart),pe&&(0,V.tZ)(ht.Menu.Item,{children:(0,h.t)("Cross-filtering scoping")},ft.bu.CrossFilterScoping),(me||pe)&&(0,V.tZ)(ht.Menu.Divider,{}),(me||be)&&(0,V.tZ)(ht.Menu.Item,{children:(0,V.tZ)(kt.Z,{triggerNode:(0,V.tZ)("span",{children:(0,h.t)("View query")}),modalTitle:(0,h.t)("View query"),modalBody:(0,V.tZ)(Zi.Z,{latestQueryFormData:v}),draggable:!0,resizable:!0,responsive:!0,ref:de})},ft.bu.ViewQuery),(me||ye)&&(0,V.tZ)(ht.Menu.Item,{children:(0,V.tZ)(Dr,{canExplore:z,exploreUrl:b,triggerNode:(0,V.tZ)("span",{children:(0,h.t)("View as table")}),setShowModal:q,showModal:B,modalTitle:(0,h.t)("Chart Data: %s",i.slice_name),modalBody:(0,V.tZ)(ki.Tg,{queryFormData:v,queryForce:!1,dataSize:20,isRequest:!0,isVisible:!0,canDownload:!!x})})},ft.bu.ViewResults),(0,d.cr)(d.TT.DrillToDetail)&&ve&&(0,V.tZ)(Ri.p,{chartId:i.slice_id,formData:v,showModal:A,setShowModal:K,drillToDetailMenuRef:ue},ft.bu.DrillToDetail),(i.description||me)&&(0,V.tZ)(ht.Menu.Divider,{}),y&&(0,V.tZ)(ht.Menu.SubMenu,{title:(0,h.t)("Share"),onTitleMouseEnter:()=>re(void 0),children:(0,V.tZ)(vt,{dashboardId:a,dashboardComponentId:r,copyMenuItemTitle:(0,h.t)("Copy permalink to clipboard"),emailMenuItemTitle:(0,h.t)("Share chart by email"),emailSubject:(0,h.t)("Superset chart"),emailBody:(0,h.t)("Check out this chart: "),addSuccessToast:S,addDangerToast:C,copyMenuItemRef:ce,shareByEmailMenuItemRef:he,selectedKeys:te.filter((e=>e===ft.bu.CopyLink||e===ft.bu.ShareByEmail))})},ft.bu.Share),x&&(0,V.BX)(ht.Menu.SubMenu,{title:(0,h.t)("Download"),onTitleMouseEnter:()=>re(void 0),children:[(0,V.tZ)(ht.Menu.Item,{icon:(0,V.tZ)(I.Z.FileOutlined,{css:wr}),children:(0,h.t)("Export to .CSV")},ft.bu.ExportCsv),"pivot_table_v2"===i.viz_type&&(0,V.tZ)(ht.Menu.Item,{icon:(0,V.tZ)(I.Z.FileOutlined,{css:wr}),children:(0,h.t)("Export to Pivoted .CSV")},ft.bu.ExportPivotCsv),(0,V.tZ)(ht.Menu.Item,{icon:(0,V.tZ)(I.Z.FileOutlined,{css:wr}),children:(0,h.t)("Export to Excel")},ft.bu.ExportXlsx),(0,d.cr)(d.TT.AllowFullCsvExport)&&"table"===i.viz_type&&(0,V.BX)(V.HY,{children:[(0,V.tZ)(ht.Menu.Item,{icon:(0,V.tZ)(I.Z.FileOutlined,{css:wr}),children:(0,h.t)("Export to full .CSV")},ft.bu.ExportFullCsv),(0,V.tZ)(ht.Menu.Item,{icon:(0,V.tZ)(I.Z.FileOutlined,{css:wr}),children:(0,h.t)("Export to full Excel")},ft.bu.ExportFullXlsx)]}),(0,V.tZ)(ht.Menu.Item,{icon:(0,V.tZ)(I.Z.FileImageOutlined,{css:wr}),children:(0,h.t)("Download as image")},ft.bu.DownloadAsImage),(0,V.tZ)(ht.Menu.Item,{icon:(0,V.tZ)(I.Z.FileOutlined,{css:wr}),children:(0,h.t)("Full Data Export CSV")},ft.bu.FullDataExportCsv)]},ft.bu.Download)]});return(0,V.BX)(V.HY,{children:[g&&(0,V.tZ)(I.Z.FullscreenExitOutlined,{style:{fontSize:22},onClick:()=>$()}),(0,V.tZ)(xi.$i,{overlay:$e,overlayStyle:{zIndex:g?101:99,animationDuration:"0s"},trigger:["click"],placement:"bottomRight",visible:U,onVisibleChange:e=>xe({close:!e}),onKeyDown:e=>function(e,t,n,i,r,o){if(e.key===vr&&!t)return;const a=n.props||{},s=$r(a.children),l=Object.keys(s),{selectedKeys:d=[]}=a,c=l.indexOf(d[0]);switch(e.key){case mr:case gr:case fr:if(d.length){const t=d[0],n=s[d];if(null==a.onClick||a.onClick({key:t,domEvent:e}),null!=n&&n.ref){const i=n.ref.current.props;null==i.onClick||i.onClick({key:t,domEvent:e})}r([]),o([]),e.currentTarget.focus()}i();break;case xr:case vr&&!e.shiftKey:{const{selectedKey:e,openKey:t}=Tr(l,s,c,"down");r([e]),o(t?[t]:[]);break}case yr:case vr&&e.shiftKey:{const{selectedKey:e,openKey:t}=Tr(l,s,c,"up");r([e]),o(t?[t]:[]);break}case br:i()}}(e,U,$e,xe,ne,re),children:(0,V.tZ)("span",{css:s.iv`
            display: flex;
            align-items: center;
          `,id:`slice_${i.slice_id}-controls`,role:"button","aria-label":"More Options","aria-haspopup":"true",tabIndex:0,children:(0,V.tZ)(Zr,{})})}),pe&&P&&ae,(0,V.tZ)(gn.default,{show:j,onHide:Ce,title:(0,h.t)("Full Data Export"),closable:!0,destroyOnClose:!0,footer:(0,V.BX)(V.HY,{children:[(0,V.tZ)(M.Z,{buttonStyle:"primary",onClick:()=>{0===W.length||Q<=0||(async function(e,t,n,i){const r=ci.ZP.loading((0,h.t)("Preparing your data..."),0);try{const i="pivot_table_v2"===e.viz_type,r=i?{...e,query_mode:"raw",row_limit:n,all_columns:t,groupby:[],columns:[],metrics:[]}:{...e,query_mode:"raw",row_limit:n,columns:t},o={...(0,fi.Z)(r,(e=>[{...e,is_timeseries:!1,...i?{}:{columns:t}}])),result_format:"csv",result_type:"full"},a="\ufeff",{text:s}=await Ct.Z.post({endpoint:"/api/v1/chart/data",headers:{"Content-Type":"application/json",Accept:"text/csv"},body:JSON.stringify(o),parseMethod:"text"}),l=new Blob([a+s],{type:"text/csv;charset=utf-8;"}),d=URL.createObjectURL(l),c=document.createElement("a");c.href=d,c.download="export.csv",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(d)}catch(e){console.error(e),i((0,h.t)("An error occurred while generating CSV."))}finally{r()}}(v,W,Q,C),L(!1),Y([]),ee(1e3))},disabled:0===W.length||Q<=0,children:(0,h.t)("Download CSV")}),(0,V.tZ)(M.Z,{buttonStyle:"link",onClick:Ce,css:s.iv`
                margin-left: 16px;
              `,children:(0,h.t)("Cancel")})]}),children:G?(0,V.tZ)(hi.Z,{}):(0,V.BX)(V.HY,{children:[(0,V.tZ)(ui.Z,{style:{marginBottom:16},children:(0,V.BX)(pi.Z,{span:12,children:[(0,V.BX)("label",{htmlFor:"limitInput",children:[(0,h.t)("Row limit"),":"]}),(0,V.tZ)(mi.Z,{id:"limitInput",style:{marginLeft:8},min:1,max:1e6,value:Q,onChange:e=>{e&&ee(e)}})]})}),(0,V.tZ)(ui.Z,{style:{marginBottom:8},children:(0,V.tZ)(pi.Z,{span:24,children:(0,V.tZ)(gi.Z,{indeterminate:W.length>0&&W.length<X.length,onChange:e=>{e.target.checked?Y(X):Y([])},checked:W.length===X.length&&X.length>0,children:(0,h.t)("Select all")})})}),(0,V.tZ)(gi.Z.Group,{style:{width:"100%"},value:W,onChange:e=>Y(e),children:(0,V.tZ)(ui.Z,{children:X.map((e=>(0,V.tZ)(pi.Z,{span:12,style:{marginBottom:4},children:(0,V.tZ)(gi.Z,{value:e,children:e})},e)))})})]})}),B&&(0,V.tZ)(Dr,{canExplore:z,exploreUrl:b,triggerNode:(0,V.tZ)(V.HY,{}),modalTitle:(0,h.t)("Chart Data: %s",i.slice_name),modalBody:(0,V.tZ)(ki.Tg,{queryFormData:v,queryForce:!1,dataSize:20,isRequest:!0,isVisible:!0,canDownload:!!x}),showModal:B,setShowModal:q})]})}));var Ir=n(87185),Fr=n.n(Ir),Er=n(85716),_r=n(82607);a.iK.div`
  ${({theme:e})=>s.iv`
    display: flex;
    color: ${e.colors.grayscale.light5};
    background: ${e.colors.grayscale.base};
    border-radius: 1em;
    vertical-align: text-top;
    padding: ${e.gridUnit}px ${2*e.gridUnit}px;
    font-size: ${e.typography.sizes.m}px;
    font-weight: ${e.typography.weights.bold};
    min-width: 1em;
    min-height: 1em;
    line-height: 1em;
    vertical-align: middle;
    white-space: nowrap;

    svg {
      position: relative;
      color: ${e.colors.grayscale.light5};
      width: 1em;
      height: 1em;
      display: inline-block;
      vertical-align: middle;
    }

    &:hover {
      cursor: pointer;
      background: ${e.colors.grayscale.dark1};
    }

    &.has-cross-filters {
      background: ${e.colors.primary.base};
      &:hover {
        background: ${e.colors.primary.dark1};
      }
    }
  `}
`;const zr=a.iK.span`
  ${({theme:e})=>s.iv`
    font-weight: ${e.typography.weights.bold};
  `}
`,Pr=a.iK.span`
  ${({theme:e})=>s.iv`
    padding-right: ${e.gridUnit}px;
    font-style: italic;
    & > * {
      margin-right: ${e.gridUnit}px;
    }
  `}
`,Ur=a.iK.button`
  ${({theme:e})=>s.iv`
    cursor: pointer;
    display: flex;
    text-align: left;
    padding: 0;
    border: none;
    background: none;
    outline: none;
    width: 100%;

    &::-moz-focus-inner {
      border: 0;
    }

    & i svg {
      opacity: ${e.opacity.mediumLight};
      margin-right: ${e.gridUnit}px;
      transition: opacity ease-in-out ${e.transitionTiming};
    }

    &:hover i svg,
    &:focus-visible i svg {
      opacity: 1;
    }
  `}
`,Or=a.iK.div`
  ${({theme:e})=>s.iv`
    margin-top: ${e.gridUnit}px;
    &:not(:last-child) {
      padding-bottom: ${3*e.gridUnit}px;
    }
  `}
`,Br=a.iK.div`
  ${({theme:e})=>s.iv`
    min-width: 200px;
    max-width: 300px;
    overflow-x: hidden;

    color: ${e.colors.grayscale.light5};
  `}
`,Nr=a.iK.span`
  max-width: 100%;
  flex-grow: 1;
  overflow: auto;
`,qr=a.iK.div`
  ${({theme:e})=>s.iv`
    width: 100%;
    height: 1px;
    background-color: ${e.colors.grayscale.light1};
    margin: ${4*e.gridUnit}px 0;
  `}
`;var Vr=n(1510);const Ar=(0,o.forwardRef)((({indicator:{column:e,name:t,value:n,path:i=[]},onClick:r},o)=>{const a=(0,Vr.GW)(n);return(0,V.BX)(Ur,{ref:o,onClick:r?()=>r([...i,`LABEL-${e}`]):void 0,tabIndex:-1,children:[r&&(0,V.tZ)("i",{children:(0,V.tZ)(I.Z.SearchOutlined,{iconSize:"m",css:s.iv`
                span {
                  vertical-align: 0;
                }
              `})}),(0,V.BX)("div",{children:[(0,V.BX)(Pr,{children:[t,a?": ":""]}),(0,V.tZ)(Nr,{children:a})]})]})})),Kr=({appliedCrossFilterIndicators:e=[],appliedIndicators:t=[],onHighlightFilterSource:n,children:i,popoverVisible:r,popoverContentRef:a,popoverTriggerRef:l,setPopoverVisible:d})=>{const c=(0,u.v9)((e=>{var t;return null==(t=e.dashboardState)?void 0:t.activeTabs})),p=(0,o.useRef)([]);(0,o.useEffect)((()=>{r&&window.addEventListener("resize",(()=>d(!1)),{once:!0})}),[r]),(0,o.useEffect)((()=>{d(!1)}),[c]);const m=e=>`${e.column} - ${e.name}`,g=(0,V.BX)(Br,{ref:a,tabIndex:-1,onMouseLeave:()=>d(!1),onKeyDown:e=>{switch(e.key){case"Escape":case"Enter":setTimeout((()=>{var e;null==l||null==(e=l.current)||e.focus(),d(!1)}));break;case"ArrowDown":case"ArrowUp":{var t;e.preventDefault();const n=p.current.findIndex((e=>e===document.activeElement)),i=p.current.length-1;let r=0;"ArrowDown"===e.key?r=n>=i?0:n+1:"ArrowUp"===e.key&&(r=n<=0?i:n-1),null==(t=p.current[r])||t.focus();break}case"Tab":e.preventDefault()}},role:"menu",children:[(0,V.tZ)(s.xB,{styles:e=>(0,s.iv)(".filterStatusPopover{.ant-popover-inner{background-color:",e.colors.grayscale.dark2,"cc;.ant-popover-inner-content{padding:",2*e.gridUnit,"px;}}&.ant-popover-placement-bottom,&.ant-popover-placement-bottomLeft,&.ant-popover-placement-bottomRight{&>.ant-popover-content>.ant-popover-arrow{border-top-color:",e.colors.grayscale.dark2,"cc;border-left-color:",e.colors.grayscale.dark2,"cc;}}&.ant-popover-placement-top,&.ant-popover-placement-topLeft,&.ant-popover-placement-topRight{&>.ant-popover-content>.ant-popover-arrow{border-bottom-color:",e.colors.grayscale.dark2,"cc;border-right-color:",e.colors.grayscale.dark2,"cc;}}&.ant-popover-placement-left,&.ant-popover-placement-leftTop,&.ant-popover-placement-leftBottom{&>.ant-popover-content>.ant-popover-arrow{border-top-color:",e.colors.grayscale.dark2,"cc;border-right-color:",e.colors.grayscale.dark2,"cc;}}&.ant-popover-placement-right,&.ant-popover-placement-rightTop,&.ant-popover-placement-rightBottom{&>.ant-popover-content>.ant-popover-arrow{border-bottom-color:",e.colors.grayscale.dark2,"cc;border-left-color:",e.colors.grayscale.dark2,"cc;}}&.ant-popover{color:",e.colors.grayscale.light4,";z-index:99;}}","")}),(0,V.BX)("div",{children:[e.length?(0,V.BX)("div",{children:[(0,V.tZ)(zr,{children:(0,h.t)("Applied cross-filters (%d)",e.length)}),(0,V.tZ)(Or,{children:e.map((e=>(0,V.tZ)(Ar,{ref:e=>p.current.push(e),indicator:e,onClick:n},m(e))))})]}):null,e.length&&t.length?(0,V.tZ)(qr,{}):null,t.length?(0,V.BX)("div",{children:[(0,V.tZ)(zr,{children:(0,h.t)("Applied filters (%d)",t.length)}),(0,V.tZ)(Or,{children:t.map((e=>(0,V.tZ)(Ar,{ref:e=>p.current.push(e),indicator:e,onClick:n},m(e))))})]}):null]})]});return(0,V.tZ)(Hn.J,{overlayClassName:"filterStatusPopover",content:g,visible:r,onVisibleChange:e=>{d(e)},placement:"bottomRight",trigger:["hover"],children:i})};var jr,Lr=n(5364),Xr=n(10581),Hr=n(10916),Wr=n(69856);!function(e){e.Unset="UNSET",e.Applied="APPLIED",e.Incompatible="INCOMPATIBLE",e.CrossFilterApplied="CROSS_FILTER_APPLIED"}(jr||(jr={}));const Yr=new Set(Object.values(Wr.i2)),Gr=e=>{var t;return null==e||!e.label||null!=e&&null!=(t=e.label)&&t.includes(void 0)?null!=e&&e.value?(0,vi.Z)(null==e?void 0:e.value).join(", "):null:e.label},Jr=(e,t,n)=>{const i=t.columns[e],r=Array.isArray(i)?i:[i];if(null==i||t.isDateFilter&&i===Lr.vM||0===r.length)return[];if(t.isDateFilter&&Yr.has(e)){const t=((e===Wr.i2.time_grain_sqla?n.time_grain_sqla:n.granularity)||[]).reduce(((e,[t,n])=>({...e,[t]:n})),{});return r.map((e=>t[e]||e))}return r},Qr=e=>{var t,n;return new Set(((null==e||null==(t=e.queriesResponse)||null==(n=t[0])?void 0:n.applied_filters)||[]).map((e=>e.column)))},eo=e=>{var t,n;return new Set(((null==e||null==(t=e.queriesResponse)||null==(n=t[0])?void 0:n.rejected_filters)||[]).map((e=>(0,Xr.Z)(e.column))))},to=(e,t,n)=>{var i,r,o,a,s;const l=null==t?void 0:t.filterState,d=null==t||null==(i=t.extraFormData)?void 0:i.filters,c=Gr(l),h=null==l?void 0:l.filters,u=(null==d||null==(r=d[0])?void 0:r.col)||h&&Object.keys(h)[0],p=Object.values(n).find((t=>{var n;return(null==t||null==(n=t.meta)?void 0:n.chartId)===e}));return{column:u,name:(null==p||null==(o=p.meta)?void 0:o.sliceNameOverride)||(null==p||null==(a=p.meta)?void 0:a.sliceName)||"",path:[...null!=(s=null==p?void 0:p.parents)?s:[],(null==p?void 0:p.id)||""],value:c}},no={},io={},ro=({label:e,column:t,type:n=Hr.gT.NativeFilters,rejectedColumns:i,appliedColumns:r})=>{const o=null!==e,a=n===Hr.gT.CrossFilters?jr.CrossFilterApplied:jr.Applied;return!t&&o?a:t&&null!=i&&i.has(t)?jr.Incompatible:t&&null!=r&&r.has(t)&&o?a:jr.Unset},oo={},ao={},so={},lo=a.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    cursor: pointer;\n    margin-right: ${e.gridUnit}px;\n    padding-left: ${2*e.gridUnit}px;\n    padding-right: ${2*e.gridUnit}px;\n    background: ${e.colors.grayscale.light4};\n    border-radius: 4px;\n    height: 100%;\n    .anticon {\n      vertical-align: middle;\n      color: ${e.colors.grayscale.base};\n      &:hover {\n        color: ${e.colors.grayscale.light1};\n      }\n    }\n\n    .incompatible-count {\n      font-size: ${e.typography.sizes.s}px;\n    }\n    &:focus-visible {\n      outline: 2px solid ${e.colors.primary.dark2};\n    }\n  `}
`,co=(0,a.iK)(_r.Z)`
  ${({theme:e})=>`\n    margin-left: ${2*e.gridUnit}px;\n    &>sup.antd5-badge-count {\n      padding: 0 ${e.gridUnit}px;\n      min-width: ${4*e.gridUnit}px;\n      height: ${4*e.gridUnit}px;\n      line-height: 1.5;\n      font-weight: ${e.typography.weights.medium};\n      font-size: ${e.typography.sizes.s-1}px;\n      box-shadow: none;\n      padding: 0 ${e.gridUnit}px;\n    }\n  `}
`,ho=[],uo=({chartId:e})=>{const t=(0,u.I0)(),n=(0,u.v9)((e=>e.datasources)),i=(0,u.v9)((e=>e.dashboardFilters)),a=(0,u.v9)((e=>{var t;return null==(t=e.nativeFilters)?void 0:t.filters})),s=(0,u.v9)((e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration})),l=(0,u.v9)((t=>t.charts[e])),c=(0,u.v9)((e=>e.dashboardLayout.present)),p=(0,u.v9)((e=>e.dataMask)),[m,g]=(0,o.useState)(ho),[f,v]=(0,o.useState)(ho),[b,y]=(0,o.useState)(!1),x=(0,o.useRef)(null),C=(0,o.useRef)(null),S=(0,o.useCallback)((e=>{t((0,Bn.E2)(e))}),[t]),w=(0,Er.D)(l),Z=null==w?void 0:w.chartStatus,k=(0,Er.D)(i),R=(0,Er.D)(n),$=(null==l?void 0:l.chartStatus)&&["rendered","success"].includes(l.chartStatus);(0,o.useEffect)((()=>{b&&setTimeout((()=>{var e;null==x||null==(e=x.current)||e.focus({preventScroll:!0})}))}),[b]),(0,o.useEffect)((()=>{if(!$&&f.length>0)v(ho);else if("success"!==Z){var t,r,o,a,s,d,c,h;(null==l||null==(t=l.queriesResponse)||null==(r=t[0])?void 0:r.rejected_filters)===(null==w||null==(o=w.queriesResponse)||null==(a=o[0])?void 0:a.rejected_filters)&&(null==l||null==(s=l.queriesResponse)||null==(d=s[0])?void 0:d.applied_filters)===(null==w||null==(c=w.queriesResponse)||null==(h=c[0])?void 0:h.applied_filters)&&i===k&&n===R||v(((e,t,n,i)=>{const r=Qr(i),o=eo(i),a=Object.values(t).filter((t=>t.chartId!==e)),s=Object.entries(n).filter((([e])=>a.find((t=>t.datasourceId===e)))).map((([,e])=>e)),l=io[e];if(no[e]&&(0,ai.JB)(null==l?void 0:l.appliedColumns,r)&&(0,ai.JB)(null==l?void 0:l.rejectedColumns,o)&&(0,ai.JB)(null==l?void 0:l.matchingFilters,a)&&(0,ai.JB)(null==l?void 0:l.matchingDatasources,s))return no[e];const d=a.reduce(((t,i)=>t.concat(((e,t,n,i,r)=>{const o=(e,t)=>i.has(e)&&t.columns[e]?jr.Applied:r.has(e)?jr.Incompatible:jr.Unset;return Object.keys(t.columns).filter((n=>(0,Wt.Q1)({filterScope:t.scopes[n]}).includes(e))).map((e=>({column:e,name:t.labels[e]||e,value:Jr(e,t,n),status:o(e,t),path:t.directPathToFilter})))})(e,i,n[i.datasourceId]||{},r,o))),[]);return d.sort(((e,t)=>e.name.localeCompare(t.name))),no[e]=d,io[e]={appliedColumns:r,rejectedColumns:o,matchingFilters:a,matchingDatasources:s},d})(e,i,n,l))}}),[l,e,i,f.length,n,null==w?void 0:w.queriesResponse,Z,k,R,$]);const T=(0,Er.D)(a),D=(0,Er.D)(c),M=(0,Er.D)(p),F=(0,Er.D)(s);(0,o.useEffect)((()=>{if(!$&&m.length>0)g(ho);else if("success"!==Z){var t,n,i,r,o,h,u,f;(null==l||null==(t=l.queriesResponse)||null==(n=t[0])?void 0:n.rejected_filters)===(null==w||null==(i=w.queriesResponse)||null==(r=i[0])?void 0:r.rejected_filters)&&(null==l||null==(o=l.queriesResponse)||null==(h=o[0])?void 0:h.applied_filters)===(null==w||null==(u=w.queriesResponse)||null==(f=u[0])?void 0:f.applied_filters)&&a===T&&c===D&&p===M&&F===s||g(((e,t,n,i,r,o=oo)=>{const a=Qr(i),s=eo(i),l=so[n];if(ao[n]&&(0,ai.JB)(null==l?void 0:l.appliedColumns,a)&&(0,ai.JB)(null==l?void 0:l.rejectedColumns,s)&&(null==l?void 0:l.nativeFilters)===e&&(null==l?void 0:l.dashboardLayout)===r&&(null==l?void 0:l.chartConfiguration)===o&&(null==l?void 0:l.dataMask)===t)return ao[n];const c=e&&Object.values(e).filter((e=>{var t;return e.type===Hr.BE.NativeFilter&&(null==(t=e.chartsInScope)?void 0:t.includes(n))})).map((e=>{var n,i,r,o;const l=null==(n=e.targets)||null==(i=n[0])||null==(r=i.column)?void 0:r.name,d=null==(o=t[e.id])?void 0:o.filterState,c=Gr(d);return{column:l,name:e.name,path:[e.id],status:ro({label:c,column:l,rejectedColumns:s,appliedColumns:a}),value:c}}));let h=[];(0,d.cr)(d.TT.DashboardCrossFilters)&&(h=((e,t,n,i=oo,r,o,a=!1)=>{let s=[];return(0,d.cr)(d.TT.DashboardCrossFilters)&&(s=Object.values(i).filter((e=>{var n,i;const r=null==(n=e.crossFilters)||null==(i=n.chartsInScope)?void 0:i.includes(t);return!(a||!r)||!(!a||r)})).map((t=>{const i=to(Number(t.id),e[t.id],n),a=ro({label:i.value,column:i.column?(0,Xr.Z)(i.column):void 0,type:Hr.gT.CrossFilters,appliedColumns:r,rejectedColumns:o});return{...i,status:a}})).filter((e=>e.status===jr.CrossFilterApplied))),s})(t,n,r,o,a,s));const u=h.concat(c);return ao[n]=u,so[n]={nativeFilters:e,dashboardLayout:r,chartConfiguration:o,dataMask:t,appliedColumns:a,rejectedColumns:s},u})(a,p,e,l,c,s))}}),[l,e,s,p,a,m.length,c,null==w?void 0:w.queriesResponse,F,Z,D,M,T,$]);const E=(0,o.useMemo)((()=>Fr()((e=>{const t=[jr.Applied,jr.Unset,jr.Incompatible];return e.sort(((e,n)=>t.indexOf(e.status)-t.indexOf(n.status)))})([...f,...m]),((e,t)=>e.column===t.column&&e.name===t.name&&(e.status!==jr.Applied||t.status!==jr.Applied)))),[f,m]),_=(0,o.useMemo)((()=>E.filter((e=>e.status===jr.CrossFilterApplied))),[E]),z=(0,o.useMemo)((()=>E.filter((e=>e.status===jr.Applied))),[E]),P=z.length+_.length;return _.length||z.length?(0,V.tZ)(Kr,{appliedCrossFilterIndicators:_,appliedIndicators:z,onHighlightFilterSource:S,setPopoverVisible:y,popoverVisible:b,popoverContentRef:x,popoverTriggerRef:C,children:(0,V.BX)(lo,{"aria-label":(0,h.t)("Applied filters (%s)",P),"aria-haspopup":"true",role:"button",ref:C,className:r()("filter-counts",!!_.length&&"has-cross-filters"),tabIndex:0,onKeyDown:e=>{"Enter"===e.key&&y(!0)},children:[(0,V.tZ)(I.Z.Filter,{iconSize:"m"}),(0,V.tZ)(co,{className:"applied-count",count:P,showZero:!0})]})}):null},po=(0,o.memo)(uo);var mo=n(57001);const go=(0,ot.I)(),fo=(0,h.t)("Annotation layers are still loading."),vo=(0,h.t)("One ore more annotation layers failed loading."),bo=(0,a.iK)(I.Z.ApartmentOutlined)`
  ${({theme:e})=>`\n    cursor: default;\n    color: ${e.colors.primary.base};\n    line-height: 1.8;\n  `}
`,yo=a.iK.div`
  ${({theme:e})=>s.iv`
    font-size: ${e.typography.sizes.l}px;
    font-weight: ${e.typography.weights.bold};
    margin-bottom: ${e.gridUnit}px;
    display: flex;
    max-width: 100%;
    align-items: flex-start;
    min-height: 0;

    & > .header-title {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      flex-grow: 1;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      & > span.ant-tooltip-open {
        display: inline;
      }
    }

    & > .header-controls {
      display: flex;
      align-items: center;
      height: 24px;

      & > * {
        margin-left: ${2*e.gridUnit}px;
      }
    }

    .dropdown.btn-group {
      pointer-events: none;
      vertical-align: top;
      & > * {
        pointer-events: auto;
      }
    }

    .dropdown-toggle.btn.btn-default {
      background: none;
      border: none;
      box-shadow: none;
    }

    .dropdown-menu.dropdown-menu-right {
      top: ${5*e.gridUnit}px;
    }

    .divider {
      margin: ${e.gridUnit}px 0;
    }

    .refresh-tooltip {
      display: block;
      height: ${4*e.gridUnit}px;
      margin: ${e.gridUnit}px 0;
      color: ${e.colors.text.label};
    }
  `}
`,xo=({innerRef:e=null,forceRefresh:t=(()=>({})),updateSliceName:n=(()=>({})),toggleExpandSlice:i=(()=>({})),logExploreChart:r=(()=>({})),logEvent:a,exportCSV:s=(()=>({})),exportXLSX:l=(()=>({})),editMode:d=!1,annotationQuery:c={},annotationError:p={},cachedDttm:m=null,updatedDttm:g=null,isCached:f=[],isExpanded:v=!1,sliceName:b="",supersetCanExplore:y=!1,supersetCanShare:x=!1,supersetCanCSV:C=!1,exportPivotCSV:S,exportFullCSV:w,exportFullXLSX:Z,slice:k,componentId:R,dashboardId:$,addSuccessToast:T,addDangerToast:D,handleToggleFullSize:M,isFullSize:I,chartStatus:F,formData:E,width:_,height:z})=>{const P=go.get("dashboard.slice.header"),U=(0,li.fG)(),O=(0,o.useContext)(mo.DashboardPageIdContext),[B,q]=(0,o.useState)(null),A=(0,o.useRef)(null),K=(0,u.v9)((e=>{var t,n;return null==(t=e.dataMask[null==k?void 0:k.slice_id])||null==(n=t.filterState)?void 0:n.value})),j=(0,u.v9)((({dashboardInfo:e})=>e.crossFiltersEnabled)),L=!d&&y;(0,o.useEffect)((()=>{const e=A.current;L?q(wi(b)):e&&(e.scrollWidth>e.offsetWidth||e.scrollHeight>e.offsetHeight)?q(null!=b?b:null):q(null)}),[b,_,z,L]);const X=`/explore/?dashboard_page_id=${O}&slice_id=${k.slice_id}`;return(0,V.BX)(yo,{ref:e,children:[(0,V.BX)("div",{className:"header-title",ref:A,children:[(0,V.tZ)(N.u,{title:B,children:(0,V.tZ)(di.Z,{title:b||(d?"---":""),canEdit:d,onSaveTitle:n,showTooltip:!1,url:L?X:void 0})}),!!Object.values(c).length&&(0,V.tZ)(N.u,{id:"annotations-loading-tooltip",placement:"top",title:fo,children:(0,V.tZ)("i",{role:"img","aria-label":fo,className:"fa fa-refresh warning"})}),!!Object.values(p).length&&(0,V.tZ)(N.u,{id:"annotation-errors-tooltip",placement:"top",title:vo,children:(0,V.tZ)("i",{role:"img","aria-label":vo,className:"fa fa-exclamation-circle danger"})})]}),(0,V.tZ)("div",{className:"header-controls",children:!d&&(0,V.BX)(V.HY,{children:[P&&(0,V.tZ)(P,{sliceId:k.slice_id,dashboardId:$}),K&&(0,V.tZ)(N.u,{placement:"top",title:(0,h.t)("This chart applies cross-filters to charts whose datasets contain columns with the same name."),children:(0,V.tZ)(bo,{iconSize:"m"})}),!U.hideChartControls&&(0,V.tZ)(po,{chartId:k.slice_id}),!U.hideChartControls&&(0,V.tZ)(Mr,{slice:k,isCached:f,isExpanded:v,cachedDttm:m,updatedDttm:g,toggleExpandSlice:i,forceRefresh:t,logExploreChart:r,logEvent:a,exportCSV:s,exportPivotCSV:S,exportFullCSV:w,exportXLSX:l,exportFullXLSX:Z,supersetCanExplore:y,supersetCanShare:x,supersetCanCSV:C,componentId:R,dashboardId:$,addSuccessToast:T,addDangerToast:D,handleToggleFullSize:M,isFullSize:I,isDescriptionExpanded:v,chartStatus:F,formData:E,exploreUrl:X,crossFiltersEnabled:j})]})})]})},Co={height:w().number.isRequired};function So({height:e}){return(0,V.tZ)("div",{className:"missing-chart-container",style:{height:e+20},children:(0,V.BX)("div",{className:"missing-chart-body",children:[(0,h.t)("There is no chart definition associated with this component, could it have been deleted?"),(0,V.tZ)("br",{}),(0,V.tZ)("br",{}),(0,h.t)("Delete this container and save to remove this message.")]})})}So.propTypes=Co;const wo={id:w().number.isRequired,componentId:w().string.isRequired,dashboardId:w().number.isRequired,width:w().number.isRequired,height:w().number.isRequired,updateSliceName:w().func.isRequired,isComponentVisible:w().bool,handleToggleFullSize:w().func.isRequired,setControlValue:w().func,chart:z.$6.isRequired,formData:w().object.isRequired,labelsColor:w().object,labelsColorMap:w().object,datasource:w().object,slice:z.Rw.isRequired,sliceName:w().string.isRequired,timeout:w().number.isRequired,maxRows:w().number.isRequired,filters:w().object.isRequired,refreshChart:w().func.isRequired,logEvent:w().func.isRequired,toggleExpandSlice:w().func.isRequired,changeFilter:w().func.isRequired,setFocusedFilterField:w().func.isRequired,unsetFocusedFilterField:w().func.isRequired,editMode:w().bool.isRequired,isExpanded:w().bool.isRequired,isCached:w().bool,supersetCanExplore:w().bool.isRequired,supersetCanShare:w().bool.isRequired,supersetCanCSV:w().bool.isRequired,addSuccessToast:w().func.isRequired,addDangerToast:w().func.isRequired,ownState:w().object,filterState:w().object,postTransformProps:w().func,datasetsStatus:w().oneOf(["loading","error","complete"]),isInView:w().bool,emitCrossFilters:w().bool},Zo=Object.keys(wo).filter((e=>"width"!==e&&"height"!==e&&"isComponentVisible"!==e)),ko=a.iK.div`
  overflow: hidden;
  position: relative;

  &.dashboard-chart--overflowable {
    overflow: visible;
  }
`,Ro=a.iK.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`,$o=a.iK.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;class To extends o.Component{constructor(e){super(e),this.logExploreChart=()=>{this.props.logEvent(at.oK,{slice_id:this.props.slice.slice_id,is_cached:this.props.isCached})},this.onExploreChart=async e=>{const t=e.shiftKey||e.ctrlKey||e.metaKey;try{const e=window.localStorage.getItem("last_tab_id"),n=e?String(Number.parseInt(e,10)+1):void 0,i=await(0,si.nv)(this.props.datasource.id,this.props.datasource.type,this.props.formData,this.props.slice.slice_id,n),r=(0,St.y8)(null,{[ut.KD.formDataKey.name]:i,[ut.KD.sliceId.name]:this.props.slice.slice_id});t?window.open(r,"_blank","noreferrer"):this.props.history.push(r)}catch(e){mt.Z.error(e),this.props.addDangerToast((0,h.t)("An error occurred while opening Explore"))}},this.state={width:e.width,height:e.height,descriptionHeight:0},this.changeFilter=this.changeFilter.bind(this),this.handleFilterMenuOpen=this.handleFilterMenuOpen.bind(this),this.handleFilterMenuClose=this.handleFilterMenuClose.bind(this),this.exportCSV=this.exportCSV.bind(this),this.exportPivotCSV=this.exportPivotCSV.bind(this),this.exportFullCSV=this.exportFullCSV.bind(this),this.exportXLSX=this.exportXLSX.bind(this),this.exportFullXLSX=this.exportFullXLSX.bind(this),this.forceRefresh=this.forceRefresh.bind(this),this.resize=C()(this.resize.bind(this),500),this.setDescriptionRef=this.setDescriptionRef.bind(this),this.setHeaderRef=this.setHeaderRef.bind(this),this.getChartHeight=this.getChartHeight.bind(this),this.getDescriptionHeight=this.getDescriptionHeight.bind(this)}shouldComponentUpdate(e,t){var n,i,r,o,a,s,l,d,c;if(t.width!==this.state.width||t.height!==this.state.height||t.descriptionHeight!==this.state.descriptionHeight||!ii()(e.datasource,this.props.datasource))return!0;if((null==(n=this.props)||null==(i=n.chart)?void 0:i.chartStatus)!==(null==e||null==(r=e.chart)?void 0:r.chartStatus)&&"loading"===(null==(o=this.props)||null==(a=o.chart)?void 0:a.chartStatus))return!0;if(e.isComponentVisible){if(e.chart.triggerQuery)return!0;if(e.isFullSize!==this.props.isFullSize)return this.resize(),!1;e.width===this.props.width&&e.height===this.props.height&&e.width===this.state.width&&e.height===this.state.height||this.resize();for(let t=0;t<Zo.length;t+=1){const n=Zo[t];if(!(0,ai.JB)(e[n],this.props[n]))return!0}}else if((null==(s=e.formData)?void 0:s.color_scheme)!==(null==(l=this.props.formData)?void 0:l.color_scheme)||!(0,ai.JB)(null==(d=e.formData)?void 0:d.label_colors,null==(c=this.props.formData)?void 0:c.label_colors))return!0;return this.props.cacheBusterProp!==e.cacheBusterProp}componentDidMount(){if(this.props.isExpanded){const e=this.getDescriptionHeight();this.setState({descriptionHeight:e})}}componentWillUnmount(){this.resize.cancel()}componentDidUpdate(e){if(this.props.isExpanded!==e.isExpanded){const e=this.getDescriptionHeight();this.setState({descriptionHeight:e})}}getDescriptionHeight(){return this.props.isExpanded&&this.descriptionRef?this.descriptionRef.offsetHeight:0}getChartHeight(){const e=this.getHeaderHeight();return Math.max(this.state.height-e-this.state.descriptionHeight,20)}getHeaderHeight(){if(this.headerRef){const e=getComputedStyle(this.headerRef).getPropertyValue("margin-bottom"),t=parseInt(e,10)||0;return this.headerRef.offsetHeight+t}return 22}setDescriptionRef(e){this.descriptionRef=e}setHeaderRef(e){this.headerRef=e}resize(){const{width:e,height:t}=this.props;this.setState((()=>({width:e,height:t})))}changeFilter(e={}){this.props.logEvent(at.Qg,{id:this.props.chart.id,columns:Object.keys(e).filter((t=>null!==e[t]))}),this.props.changeFilter(this.props.chart.id,e)}handleFilterMenuOpen(e,t){this.props.setFocusedFilterField(e,t)}handleFilterMenuClose(e,t){this.props.unsetFocusedFilterField(e,t)}exportFullCSV(){this.exportCSV(!0)}exportCSV(e=!1){this.exportTable("csv",e)}exportPivotCSV(){this.exportTable("csv",!1,!0)}exportXLSX(){this.exportTable("xlsx",!1)}exportFullXLSX(){this.exportTable("xlsx",!0)}exportTable(e,t,n=!1){const i="csv"===e?at.PC:at.br;this.props.logEvent(i,{slice_id:this.props.slice.slice_id,is_cached:this.props.isCached}),(0,St.pe)({formData:t?{...this.props.formData,row_limit:this.props.maxRows}:this.props.formData,resultType:n?"post_processed":"full",resultFormat:e,force:!0,ownState:this.props.ownState})}forceRefresh(){return this.props.logEvent(at.TD,{slice_id:this.props.slice.slice_id,is_cached:this.props.isCached}),this.props.refreshChart(this.props.chart.id,!0,this.props.dashboardId)}render(){const{id:e,componentId:t,dashboardId:n,chart:i,slice:o,datasource:a,isExpanded:s,editMode:l,filters:d,formData:c,labelsColor:h,labelsColorMap:u,updateSliceName:p,sliceName:m,toggleExpandSlice:g,timeout:f,supersetCanExplore:v,supersetCanShare:b,supersetCanCSV:y,addSuccessToast:x,addDangerToast:C,ownState:S,filterState:w,handleToggleFullSize:Z,isFullSize:k,setControlValue:R,postTransformProps:$,datasetsStatus:T,isInView:D,emitCrossFilters:M,logEvent:I}=this.props,{width:F}=this.state;if(!i||!o)return(0,V.tZ)(So,{height:this.getChartHeight()});const{queriesResponse:E,chartUpdateEndTime:_,chartStatus:z}=i,P="loading"===z,U=(null==E?void 0:E.map((({is_cached:e})=>e)))||[],O=(null==E?void 0:E.map((({cached_dttm:e})=>e)))||[];return(0,V.BX)($o,{className:"chart-slice","data-test-chart-id":e,"data-test-viz-type":o.viz_type,"data-test-chart-name":o.slice_name,children:[(0,V.tZ)(xo,{innerRef:this.setHeaderRef,slice:o,isExpanded:s,isCached:U,cachedDttm:O,updatedDttm:_,toggleExpandSlice:g,forceRefresh:this.forceRefresh,editMode:l,annotationQuery:i.annotationQuery,logExploreChart:this.logExploreChart,logEvent:I,onExploreChart:this.onExploreChart,exportCSV:this.exportCSV,exportPivotCSV:this.exportPivotCSV,exportXLSX:this.exportXLSX,exportFullCSV:this.exportFullCSV,exportFullXLSX:this.exportFullXLSX,updateSliceName:p,sliceName:m,supersetCanExplore:v,supersetCanShare:b,supersetCanCSV:y,componentId:t,dashboardId:n,filters:d,addSuccessToast:x,addDangerToast:C,handleToggleFullSize:Z,isFullSize:k,chartStatus:i.chartStatus,formData:c,width:F,height:this.getHeaderHeight()}),s&&o.description_markeddown&&(0,V.tZ)("div",{className:"slice_description bs-callout bs-callout-default",ref:this.setDescriptionRef,dangerouslySetInnerHTML:{__html:o.description_markeddown},role:"complementary"}),(0,V.BX)(ko,{className:r()("dashboard-chart"),"aria-label":o.description,children:[P&&(0,V.tZ)(Ro,{style:{width:F,height:this.getChartHeight()}}),(0,V.tZ)(oi.Z,{width:F,height:this.getChartHeight(),addFilter:this.changeFilter,onFilterMenuOpen:this.handleFilterMenuOpen,onFilterMenuClose:this.handleFilterMenuClose,annotationData:i.annotationData,chartAlert:i.chartAlert,chartId:e,chartStatus:z,datasource:a,dashboardId:n,initialValues:{},formData:c,labelsColor:h,labelsColorMap:u,ownState:S,filterState:w,queriesResponse:i.queriesResponse,timeout:f,triggerQuery:i.triggerQuery,vizType:o.viz_type,setControlValue:R,postTransformProps:$,datasetsStatus:T,isInView:D,emitCrossFilters:M})]})]})}}To.propTypes=wo,To.defaultProps={isCached:!1,isComponentVisible:!0};const Do=(0,ri.EN)(To),Mo={},Io=(0,u.$j)((function({charts:e,dashboardInfo:t,dashboardState:n,dataMask:i,datasources:r,sliceEntities:o,nativeFilters:a,common:s},l){var d,c,h,u,p;const{id:m,extraControls:g,setControlValue:f}=l,v=e[m]||Mo,b=v&&v.form_data&&r[v.form_data.datasource]||Ii.tw,{colorScheme:y,colorNamespace:x,datasetsStatus:C}=n,S=(null==t||null==(d=t.metadata)?void 0:d.label_colors)||{},w=(null==t||null==(c=t.metadata)?void 0:c.shared_label_colors)||{},Z=(0,ti.Z)({chart:v,chartConfiguration:null==(h=t.metadata)?void 0:h.chart_configuration,charts:e,filters:(0,Wt._f)(m),colorScheme:y,colorNamespace:x,sliceId:m,nativeFilters:null==a?void 0:a.filters,allSliceIds:n.sliceIds,dataMask:i,extraControls:g,labelsColor:S,labelsColorMap:w});return Z.dashboardId=t.id,{chart:v,datasource:b,labelsColor:S,labelsColorMap:w,slice:o.slices[m],timeout:t.common.conf.SUPERSET_WEBSERVER_TIMEOUT,filters:(0,Wt.De)()||Mo,formData:Z,editMode:n.editMode,isExpanded:!!n.expandedSlices[m],supersetCanExplore:!!t.superset_can_explore,supersetCanShare:!!t.superset_can_share,supersetCanCSV:!!t.superset_can_csv,ownState:null==(u=i[m])?void 0:u.ownState,filterState:null==(p=i[m])?void 0:p.filterState,maxRows:s.conf.SQL_MAX_ROW,setControlValue:f,datasetsStatus:C,emitCrossFilters:!!t.crossFiltersEnabled}}),(function(e){return(0,f.DE)({updateComponents:Nn.WZ,addSuccessToast:qn.ws,addDangerToast:qn.Gb,toggleExpandSlice:Bn.WL,changeFilter:Qn.M6,setFocusedFilterField:Bn.GH,unsetFocusedFilterField:Bn.oY,refreshChart:ei.refreshChart,logEvent:Vn.logEvent},e)}))(Do),Fo=({onDelete:e})=>(0,V.tZ)(Ln,{onClick:e,icon:(0,V.tZ)(I.Z.Trash,{iconSize:"xl"})}),Eo=a.iK.div`
  .hover-menu {
    opacity: 0;
    position: absolute;
    z-index: 11; // one more than DragDroppable
    font-size: ${({theme:e})=>e.typography.sizes.m};
  }

  .hover-menu--left {
    width: ${({theme:e})=>6*e.gridUnit}px;
    top: 50%;
    transform: translate(0, -50%);
    left: ${({theme:e})=>-7*e.gridUnit}px;
    padding: ${({theme:e})=>2*e.gridUnit}px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hover-menu--left > :nth-child(n):not(:only-child):not(:last-child) {
    margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  }

  .hover-menu--top {
    height: ${({theme:e})=>6*e.gridUnit}px;
    top: ${({theme:e})=>-6*e.gridUnit}px;
    left: 50%;
    transform: translate(-50%);
    padding: 0 ${({theme:e})=>2*e.gridUnit}px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;class _o extends o.PureComponent{constructor(...e){super(...e),this.handleMouseEnter=()=>{const{onHover:e}=this.props;e&&e({isHovered:!0})},this.handleMouseLeave=()=>{const{onHover:e}=this.props;e&&e({isHovered:!1})}}render(){const{innerRef:e,position:t,children:n}=this.props;return(0,V.tZ)(Eo,{className:"hover-menu-container",children:(0,V.tZ)("div",{ref:e,className:r()("hover-menu","left"===t&&"hover-menu--left","top"===t&&"hover-menu--top"),onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,children:n})})}}_o.defaultProps={position:"left",innerRef:null,children:null};var zo=n(29119);const Po={right:function(){return(0,V.tZ)("div",{className:"resize-handle resize-handle--right"})},bottom:function(){return(0,V.tZ)("div",{className:"resize-handle resize-handle--bottom"})},bottomRight:function(){return(0,V.tZ)("div",{className:"resize-handle resize-handle--bottom-right"})}},Uo={top:!1,right:!0,bottom:!0,left:!1,topRight:!1,bottomRight:!0,bottomLeft:!1,topLeft:!1},Oo={widthAndHeight:Uo,widthOnly:{...Uo,bottomRight:!1,bottom:!1},heightOnly:{...Uo,bottomRight:!1,right:!1},notAdjustable:{...Uo,bottomRight:!1,bottom:!1,right:!1}},Bo=Number.MAX_VALUE,No={id:w().string.isRequired,children:w().node,adjustableWidth:w().bool,adjustableHeight:w().bool,gutterWidth:w().number,widthStep:w().number,heightStep:w().number,widthMultiple:w().number,heightMultiple:w().number,minWidthMultiple:w().number,maxWidthMultiple:w().number,minHeightMultiple:w().number,maxHeightMultiple:w().number,staticHeight:w().number,staticHeightMultiple:w().number,staticWidth:w().number,staticWidthMultiple:w().number,onResizeStop:w().func,onResize:w().func,onResizeStart:w().func,editMode:w().bool.isRequired},qo={children:null,adjustableWidth:!0,adjustableHeight:!0,gutterWidth:_.es,widthStep:_.cd,heightStep:_.cd,widthMultiple:null,heightMultiple:null,minWidthMultiple:1,maxWidthMultiple:Bo,minHeightMultiple:1,maxHeightMultiple:Bo,staticHeight:null,staticHeightMultiple:null,staticWidth:null,staticWidthMultiple:null,onResizeStop:null,onResize:null,onResizeStart:null},Vo=[_.cd,_.cd],Ao={right:"resizable-container-handle--right",bottom:"resizable-container-handle--bottom"},Ko=(0,a.iK)(zo.e)`
  ${({theme:e})=>s.iv`
    &.resizable-container {
      background-color: transparent;
      position: relative;

      /* re-resizable sets an empty div to 100% width and height, which doesn't
      play well with many 100% height containers we need */

      & ~ div {
        width: auto !important;
        height: auto !important;
      }
    }

    &.resizable-container--resizing {
      /* after ensures border visibility on top of any children */

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: inset 0 0 0 2px ${e.colors.primary.base};
      }

      & > span .resize-handle {
        border-color: ${e.colors.primary.base};
      }
    }

    .resize-handle {
      opacity: 0;
      z-index: 10;

      &--bottom-right {
        position: absolute;
        border-right: 1px solid ${e.colors.text.label};
        border-bottom: 1px solid ${e.colors.text.label};
        right: ${4*e.gridUnit}px;
        bottom: ${4*e.gridUnit}px;
        width: ${2*e.gridUnit}px;
        height: ${2*e.gridUnit}px;
      }

      &--right {
        width: ${e.gridUnit/2}px;
        height: ${5*e.gridUnit}px;
        right: ${e.gridUnit}px;
        top: 50%;
        transform: translate(0, -50%);
        position: absolute;
        border-left: 1px solid ${e.colors.text.label};
        border-right: 1px solid ${e.colors.text.label};
      }

      &--bottom {
        height: ${e.gridUnit/2}px;
        width: ${5*e.gridUnit}px;
        bottom: ${e.gridUnit}px;
        left: 50%;
        transform: translate(-50%);
        position: absolute;
        border-top: 1px solid ${e.colors.text.label};
        border-bottom: 1px solid ${e.colors.text.label};
      }
    }
  `}

  &.resizable-container:hover .resize-handle,
  &.resizable-container--resizing .resize-handle {
    opacity: 1;
  }

  .dragdroppable-column & .resizable-container-handle--right {
    /* override the default because the inner column's handle's mouse target is very small */
    right: 0 !important;
  }

  & .resizable-container-handle--bottom {
    bottom: 0 !important;
  }
`;class jo extends o.PureComponent{constructor(e){super(e),this.state={isResizing:!1},this.handleResizeStart=this.handleResizeStart.bind(this),this.handleResize=this.handleResize.bind(this),this.handleResizeStop=this.handleResizeStop.bind(this)}handleResizeStart(e,t,n){const{id:i,onResizeStart:r}=this.props;r&&r({id:i,direction:t,ref:n}),this.setState((()=>({isResizing:!0})))}handleResize(e,t,n){const{onResize:i,id:r}=this.props;i&&i({id:r,direction:t,ref:n})}handleResizeStop(e,t,n,i){const{id:r,onResizeStop:o,widthStep:a,heightStep:s,widthMultiple:l,heightMultiple:d,adjustableHeight:c,adjustableWidth:h,gutterWidth:u}=this.props;if(o){const e=l+Math.round(i.width/(a+u)),t=d+Math.round(i.height/s);o({id:r,widthMultiple:h?e:null,heightMultiple:c?t:null}),this.setState((()=>({isResizing:!1})))}}render(){const{children:e,adjustableWidth:t,adjustableHeight:n,widthStep:i,heightStep:o,widthMultiple:a,heightMultiple:s,staticHeight:l,staticHeightMultiple:d,staticWidth:c,staticWidthMultiple:h,minWidthMultiple:u,maxWidthMultiple:p,minHeightMultiple:m,maxHeightMultiple:g,gutterWidth:f,editMode:v}=this.props,b={width:t?(i+f)*a-f:h&&h*i||c||void 0,height:n?o*s:d&&d*o||l||void 0};let y=Oo.notAdjustable;v&&t&&n?y=Oo.widthAndHeight:v&&t?y=Oo.widthOnly:v&&n&&(y=Oo.heightOnly);const{isResizing:x}=this.state;return(0,V.tZ)(Ko,{enable:y,grid:Vo,minWidth:t?u*(i+f)-f:void 0,minHeight:n?m*o:void 0,maxWidth:t?Math.max(b.width,Math.min(Bo,p*(i+f)-f)):void 0,maxHeight:n?Math.max(b.height,Math.min(Bo,g*o)):void 0,size:b,onResizeStart:this.handleResizeStart,onResize:this.handleResize,onResizeStop:this.handleResizeStop,handleComponent:Po,className:r()("resizable-container",x&&"resizable-container--resizing"),handleClasses:Ao,children:e})}}jo.propTypes=No,jo.defaultProps=qo;const Lo=jo;function Xo(e){const t={};if(e.length>0){const n=e.slice();for(;n.length;){const e=n.pop(),i=e.split("-")[0];if(t[i.toLowerCase()]=e,!_.Ep.includes(i))break}}return t}const Ho=s.iv`
  && {
    position: fixed;
    z-index: 3000;
    left: 0;
    top: 0;
  }
`;var Wo=n(78186);const Yo=(0,a.iK)(ht.Menu.Item)`
  &.ant-menu-item {
    height: auto;
    line-height: 1.4;

    padding-top: ${({theme:e})=>e.gridUnit}px;
    padding-bottom: ${({theme:e})=>e.gridUnit}px;

    margin-top: 0;
    margin-bottom: 0;

    &:not(:last-child) {
      margin-bottom: 0;
    }

    &:hover {
      background: ${({theme:e})=>e.colors.grayscale.light3};
    }

    &.active {
      font-weight: ${({theme:e})=>e.typography.weights.bold};
      background: ${({theme:e})=>e.colors.grayscale.light2};
    }
  }

  &.ant-menu-item-selected {
    color: unset;
  }
`;var Go={name:"s5xdrg",styles:"display:flex;align-items:center"};const Jo=e=>{const{value:t,options:n,onChange:i,renderButton:o=(e=>e.label),renderOption:l=(e=>(0,V.tZ)("div",{className:e.className,children:e.label}))}=e,d=(0,a.Fg)(),c=n.find((e=>e.value===t));return(0,V.tZ)(T.Gj,{trigger:["click"],overlayStyle:{zIndex:d.zIndex.max},overlay:(0,V.tZ)(ht.Menu,{onClick:({key:e})=>i(e),children:n.map((e=>(0,V.tZ)(Yo,{id:"menu-item",className:r()("dropdown-item",{active:e.value===t}),children:l(e)},e.value)))}),children:(0,V.BX)("div",{role:"button",css:Go,children:[c&&o(c),(0,V.tZ)(I.Z.CaretDown,{iconColor:d.colors.grayscale.base,css:(0,s.iv)({marginTop:.5*d.gridUnit},"","")})]})})},Qo=[{value:"edit",label:(0,h.t)("Edit")},{value:"preview",label:(0,h.t)("Preview")}];class ea extends o.PureComponent{render(){const{id:e,value:t,onChange:n}=this.props;return(0,V.tZ)(Jo,{id:e,options:Qo,value:t,onChange:n})}}const ta=a.iK.div`
  ${({theme:e})=>s.iv`
    position: relative;
    outline: none;

    &.with-popover-menu--focused:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid ${e.colors.primary.base};
      pointer-events: none;
    }

    .dashboard-component-tabs li &.with-popover-menu--focused:after {
      top: ${-3*e.gridUnit}px;
      left: ${-2*e.gridUnit}px;
      width: calc(100% + ${4*e.gridUnit}px);
      height: calc(100% + ${7*e.gridUnit}px);
    }
  `}
`,na=a.iK.div`
  ${({theme:e})=>s.iv`
    position: absolute;
    flex-wrap: nowrap;
    left: 1px;
    top: -42px;
    height: ${10*e.gridUnit}px;
    padding: 0 ${4*e.gridUnit}px;
    background: ${e.colors.grayscale.light5};
    box-shadow: 0 1px 2px 1px
      ${(0,l.Zf)(e.colors.grayscale.dark2,parseFloat(e.opacity.mediumLight)/100)};
    font-size: ${e.typography.sizes.m}px;
    cursor: default;
    z-index: 3000;

    &,
    .menu-item {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    /* vertical spacer after each menu item */
    .menu-item:not(:last-child):after {
      content: '';
      width: 1px;
      height: 100%;
      background: ${e.colors.grayscale.light2};
      margin: 0 ${4*e.gridUnit}px;
    }
  `}
`;class ia extends o.PureComponent{constructor(e){super(e),this.container=void 0,this.state={isFocused:e.isFocused},this.setRef=this.setRef.bind(this),this.handleClick=this.handleClick.bind(this)}UNSAFE_componentWillReceiveProps(e){e.editMode&&e.isFocused&&!this.state.isFocused?(document.addEventListener("click",this.handleClick),document.addEventListener("drag",this.handleClick),this.setState({isFocused:!0})):this.state.isFocused&&!e.editMode&&(document.removeEventListener("click",this.handleClick),document.removeEventListener("drag",this.handleClick),this.setState({isFocused:!1}))}componentWillUnmount(){document.removeEventListener("click",this.handleClick),document.removeEventListener("drag",this.handleClick)}setRef(e){this.container=e}handleClick(e){if(!this.props.editMode)return;const{onChangeFocus:t,shouldFocus:n,disableClick:i}=this.props,r=n(e,this.container);i||!r||this.state.isFocused?!r&&this.state.isFocused&&(document.removeEventListener("click",this.handleClick),document.removeEventListener("drag",this.handleClick),this.setState((()=>({isFocused:!1}))),t&&t(!1)):(document.addEventListener("click",this.handleClick),document.addEventListener("drag",this.handleClick),this.setState((()=>({isFocused:!0}))),t&&t(!0))}render(){var e;const{children:t,menuItems:n,editMode:i,style:o}=this.props,{isFocused:a}=this.state;return(0,V.BX)(ta,{ref:this.setRef,onClick:this.handleClick,role:"none",className:r()("with-popover-menu",i&&a&&"with-popover-menu--focused"),style:o,children:[t,i&&a&&(null!=(e=null==n?void 0:n.length)?e:0)>0&&(0,V.tZ)(na,{children:n.map(((e,t)=>(0,V.tZ)("div",{className:"menu-item",children:e},`menu-item-${t}`)))})]})}}ia.defaultProps={children:null,disableClick:!1,onChangeFocus:null,menuItems:[],isFocused:!1,shouldFocus:(e,t)=>{var n;return(null==t?void 0:t.contains(e.target))||"menu-item"===e.target.id||"menu-item"===(null==(n=e.target.parentNode)?void 0:n.id)},style:null};const ra={id:w().string.isRequired,parentId:w().string.isRequired,component:z.cP.isRequired,parentComponent:z.cP.isRequired,index:w().number.isRequired,depth:w().number.isRequired,editMode:w().bool.isRequired,logEvent:w().func.isRequired,addDangerToast:w().func.isRequired,undoLength:w().number.isRequired,redoLength:w().number.isRequired,availableColumnCount:w().number.isRequired,columnWidth:w().number.isRequired,onResizeStart:w().func.isRequired,onResize:w().func.isRequired,onResizeStop:w().func.isRequired,deleteComponent:w().func.isRequired,handleComponentDrop:w().func.isRequired,updateComponents:w().func.isRequired,htmlSanitization:w().bool,htmlSchemaOverrides:w().object},oa="# ✨Header 1\n## ✨Header 2\n### ✨Header 3\n\n<br />\n\nClick here to learn more about [markdown formatting](https://bit.ly/1dQOfRK)",aa=(0,h.t)("This markdown component has an error."),sa=a.iK.div`
  ${({theme:e})=>s.iv`
    &.dashboard-markdown {
      overflow: hidden;

      h4,
      h5,
      h6 {
        font-weight: ${e.typography.weights.normal};
      }

      h5 {
        color: ${e.colors.grayscale.base};
      }

      h6 {
        font-size: ${e.typography.sizes.s}px;
      }

      .dashboard-component-chart-holder {
        overflow-y: auto;
        overflow-x: hidden;
      }

      .dashboard--editing & {
        cursor: move;
      }
    }
  `}
`;class la extends o.PureComponent{constructor(e){super(e),this.state={isFocused:!1,markdownSource:e.component.meta.code,editor:null,editorMode:"preview",undoLength:e.undoLength,redoLength:e.redoLength},this.renderStartTime=at.Yd.getTimestamp(),this.handleChangeFocus=this.handleChangeFocus.bind(this),this.handleChangeEditorMode=this.handleChangeEditorMode.bind(this),this.handleMarkdownChange=this.handleMarkdownChange.bind(this),this.handleDeleteComponent=this.handleDeleteComponent.bind(this),this.handleResizeStart=this.handleResizeStart.bind(this),this.setEditor=this.setEditor.bind(this)}componentDidMount(){this.props.logEvent(at.aD,{viz_type:"markdown",start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:at.Yd.getTimestamp()-this.renderStartTime})}static getDerivedStateFromProps(e,t){const{hasError:n,editorMode:i,markdownSource:r,undoLength:o,redoLength:a}=t,{component:s,undoLength:l,redoLength:d}=e;return l!==o||d!==a?{...t,undoLength:l,redoLength:d,markdownSource:s.meta.code,hasError:!1}:n||"preview"!==i||s.meta.code===r?t:{...t,markdownSource:s.meta.code}}static getDerivedStateFromError(){return{hasError:!0}}componentDidUpdate(e){!this.state.editor||e.component.meta.width===this.props.component.meta.width&&e.columnWidth===this.props.columnWidth||this.state.editor.resize(!0),this.props.editMode&&Rt.cE.preload()}componentDidCatch(){this.state.editor&&"preview"===this.state.editorMode&&this.props.addDangerToast((0,h.t)("This markdown component has an error. Please revert your recent changes."))}setEditor(e){e.getSession().setUseWrapMode(!0),this.setState({editor:e})}handleChangeFocus(e){const t=!!e,n=t?"edit":"preview";this.setState((()=>({isFocused:t}))),this.handleChangeEditorMode(n)}handleChangeEditorMode(e){const t={...this.state,editorMode:e};"preview"===e&&(this.updateMarkdownContent(),t.hasError=!1),this.setState(t)}updateMarkdownContent(){const{updateComponents:e,component:t}=this.props;t.meta.code!==this.state.markdownSource&&e({[t.id]:{...t,meta:{...t.meta,code:this.state.markdownSource}}})}handleMarkdownChange(e){this.setState({markdownSource:e})}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:n}=this.props;e(t,n)}handleResizeStart(e){const{editorMode:t}=this.state,{editMode:n,onResizeStart:i}=this.props,r="edit"===t;i(e),n&&r&&this.updateMarkdownContent()}renderEditMode(){return(0,V.tZ)(Rt.cE,{onChange:this.handleMarkdownChange,width:"100%",height:"100%",showGutter:!1,editorProps:{$blockScrolling:!0},value:"string"==typeof this.state.markdownSource?this.state.markdownSource:oa,readOnly:!1,onLoad:this.setEditor})}renderPreviewMode(){const{hasError:e}=this.state;return(0,V.tZ)(Wo.Z,{source:e?aa:this.state.markdownSource||oa,htmlSanitization:this.props.htmlSanitization,htmlSchemaOverrides:this.props.htmlSchemaOverrides})}render(){const{isFocused:e,editorMode:t}=this.state,{component:n,parentComponent:i,index:o,depth:a,availableColumnCount:s,columnWidth:l,onResize:d,onResizeStop:c,handleComponentDrop:h,editMode:u}=this.props,p=i.type===E.BA?i.meta.width||_.cx:n.meta.width||_.cx,m="edit"===t;return(0,V.tZ)(Re,{component:n,parentComponent:i,orientation:i.type===E.Os?"column":"row",index:o,depth:a,onDrop:h,disableDragDrop:e,editMode:u,children:({dragSourceRef:t})=>(0,V.tZ)(ia,{onChangeFocus:this.handleChangeFocus,menuItems:[(0,V.tZ)(ea,{id:`${n.id}-mode`,value:this.state.editorMode,onChange:this.handleChangeEditorMode})],editMode:u,children:(0,V.tZ)(sa,{className:r()("dashboard-markdown",m&&"dashboard-markdown--editing"),id:n.id,children:(0,V.tZ)(Lo,{id:n.id,adjustableWidth:i.type===E.Os,adjustableHeight:!0,widthStep:l,widthMultiple:p,heightStep:_.cd,heightMultiple:n.meta.height,minWidthMultiple:_.cx,minHeightMultiple:_.AA,maxWidthMultiple:s+p,onResizeStart:this.handleResizeStart,onResize:d,onResizeStop:c,editMode:!e&&u,children:(0,V.BX)("div",{ref:t,className:"dashboard-component dashboard-component-chart-holder",children:[u&&(0,V.tZ)(_o,{position:"top",children:(0,V.tZ)(Fo,{onDelete:this.handleDeleteComponent})}),u&&m?this.renderEditMode():this.renderPreviewMode()]})})})})})}}la.propTypes=ra,la.defaultProps={};const da=(0,u.$j)((function(e){return{undoLength:e.dashboardLayout.past.length,redoLength:e.dashboardLayout.future.length,htmlSanitization:e.common.conf.HTML_SANITIZATION,htmlSchemaOverrides:e.common.conf.HTML_SANITIZATION_SCHEMA_EXTENSIONS}}))(la),ca=a.iK.div`
  ${({theme:e,position:t})=>s.iv`
    height: ${5*e.gridUnit}px;
    overflow: hidden;
    cursor: move;
    ${"top"===t&&s.iv`
      transform: rotate(90deg);
    `}
    & path {
      fill: ${e.colors.grayscale.base};
    }
  `}
`;function ha({position:e="left",innerRef:t=null}){return(0,V.tZ)(ca,{ref:t,position:e,children:(0,V.tZ)(I.Z.Drag,{})})}var ua=n(713);const pa=a.iK.div`
  ${({theme:e})=>s.iv`
    display: inline-block;

    &:before {
      content: '';
      width: 1em;
      height: 1em;
      margin-right: ${2*e.gridUnit}px;
      display: inline-block;
      vertical-align: middle;
    }

    &.background--white {
      padding-left: 0;
      background: transparent;

      &:before {
        background: ${e.colors.grayscale.light5};
        border: 1px solid ${e.colors.grayscale.light2};
      }
    }

    /* Create the transparent rect icon */
    &.background--transparent:before {
      background-image: linear-gradient(
          45deg,
          ${e.colors.text.label} 25%,
          transparent 25%
        ),
        linear-gradient(-45deg, ${e.colors.text.label} 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, ${e.colors.text.label} 75%),
        linear-gradient(-45deg, transparent 75%, ${e.colors.text.label} 75%);
      background-size: ${2*e.gridUnit}px ${2*e.gridUnit}px;
      background-position:
        0 0,
        0 ${e.gridUnit}px,
        ${e.gridUnit}px ${-e.gridUnit}px,
        ${-e.gridUnit}px 0px;
    }
  `}
`;function ma(e){const t=(0,h.t)("background");return(0,V.tZ)(pa,{className:r()("background-style-option",e.className),children:`${e.label} ${t}`})}function ga(e){return(0,V.tZ)(pa,{className:r()("background-style-option",e.className),children:e.label})}class fa extends o.PureComponent{render(){const{id:e,value:t,onChange:n}=this.props;return(0,V.tZ)(Jo,{id:e,options:ua.Z,value:t,onChange:n,renderButton:ma,renderOption:ga})}}const va={id:w().string.isRequired,parentId:w().string.isRequired,component:z.cP.isRequired,parentComponent:z.cP.isRequired,index:w().number.isRequired,depth:w().number.isRequired,editMode:w().bool.isRequired,availableColumnCount:w().number.isRequired,columnWidth:w().number.isRequired,minColumnWidth:w().number.isRequired,onResizeStart:w().func.isRequired,onResize:w().func.isRequired,onResizeStop:w().func.isRequired,deleteComponent:w().func.isRequired,handleComponentDrop:w().func.isRequired,updateComponents:w().func.isRequired},ba=a.iK.div`
  ${({theme:e,editMode:t})=>s.iv`
    &.grid-column {
      width: 100%;
      position: relative;

      & > :not(.hover-menu):not(:last-child) {
        ${!t&&`margin-bottom: ${4*e.gridUnit}px;`}
      }
    }

    .dashboard--editing &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      pointer-events: none;
      border: 1px dashed ${e.colors.grayscale.light2};
    }
    .dashboard--editing .resizable-container--resizing:hover > &:after,
    .dashboard--editing .hover-menu:hover + &:after {
      border: 1px dashed ${e.colors.primary.base};
      z-index: 2;
    }

    & .empty-droptarget {
      &.droptarget-edge {
        position: absolute;
        z-index: ${Ii.oB};
        &:first-child {
          inset-block-start: 0;
        }
      }
      &:first-child:not(.droptarget-edge) {
        position: absolute;
        z-index: ${Ii.oB};
        width: 100%;
        height: 100%;
      }
    }
  `}
`,ya=e=>s.iv`
  min-height: ${25*e.gridUnit}px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e.colors.text.label};
`;class xa extends o.PureComponent{constructor(e){super(e),this.state={isFocused:!1},this.handleChangeBackground=this.handleUpdateMeta.bind(this,"background"),this.handleChangeFocus=this.handleChangeFocus.bind(this),this.handleDeleteComponent=this.handleDeleteComponent.bind(this)}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:n}=this.props;e(t,n)}handleChangeFocus(e){this.setState((()=>({isFocused:Boolean(e)})))}handleUpdateMeta(e,t){const{updateComponents:n,component:i}=this.props;t&&i.meta[e]!==t&&n({[i.id]:{...i,meta:{...i.meta,[e]:t}}})}render(){const{component:e,parentComponent:t,index:n,availableColumnCount:i,columnWidth:a,minColumnWidth:s,depth:l,onResizeStart:d,onResize:c,onResizeStop:u,handleComponentDrop:p,editMode:m,onChangeTab:g,isComponentVisible:f}=this.props,v=e.children||[],b=ua.Z.find((t=>t.value===(e.meta.background||_.HE)));return(0,V.tZ)(Re,{component:e,parentComponent:t,orientation:"column",index:n,depth:l,onDrop:p,editMode:m,children:({dragSourceRef:t})=>(0,V.tZ)(Lo,{id:e.id,adjustableWidth:!0,adjustableHeight:!1,widthStep:a,widthMultiple:e.meta.width,minWidthMultiple:s,maxWidthMultiple:i+(e.meta.width||0),onResizeStart:d,onResize:c,onResizeStop:u,editMode:m,children:(0,V.BX)(ia,{isFocused:this.state.isFocused,onChangeFocus:this.handleChangeFocus,disableClick:!0,menuItems:[(0,V.tZ)(fa,{id:`${e.id}-background`,value:e.meta.background,onChange:this.handleChangeBackground})],editMode:m,children:[m&&(0,V.BX)(_o,{innerRef:t,position:"top",children:[(0,V.tZ)(ha,{position:"top"}),(0,V.tZ)(Fo,{onDelete:this.handleDeleteComponent}),(0,V.tZ)(Ln,{onClick:this.handleChangeFocus,icon:(0,V.tZ)(I.Z.Cog,{iconSize:"xl"})})]}),(0,V.BX)(ba,{className:r()("grid-column",b.className),editMode:m,children:[m&&(0,V.tZ)($e,{component:e,parentComponent:e,...0===v.length?{dropToChild:!0}:{component:v[0]},depth:l,index:0,orientation:"column",onDrop:p,className:r()("empty-droptarget",v.length>0&&"droptarget-edge"),editMode:!0,children:({dropIndicatorProps:e})=>e&&(0,V.tZ)("div",{...e})}),0===v.length?(0,V.tZ)("div",{css:ya,children:(0,h.t)("Empty column")}):v.map(((t,n)=>(0,V.BX)(o.Fragment,{children:[(0,V.tZ)(os,{id:t,parentId:e.id,depth:l+1,index:n,availableColumnCount:e.meta.width,columnWidth:a,onResizeStart:d,onResize:c,onResizeStop:u,isComponentVisible:f,onChangeTab:g}),m&&(0,V.tZ)($e,{component:v,parentComponent:e,depth:l,index:n+1,orientation:"column",onDrop:p,className:r()("empty-droptarget",n===v.length-1&&"droptarget-edge"),editMode:!0,children:({dropIndicatorProps:e})=>e&&(0,V.tZ)("div",{...e})})]},t)))]})]})})})}}xa.propTypes=va,xa.defaultProps={};const Ca=xa,Sa={id:w().string.isRequired,parentId:w().string.isRequired,component:z.cP.isRequired,depth:w().number.isRequired,parentComponent:z.cP.isRequired,index:w().number.isRequired,editMode:w().bool.isRequired,handleComponentDrop:w().func.isRequired,deleteComponent:w().func.isRequired},wa=a.iK.div`
  ${({theme:e})=>s.iv`
    width: 100%;
    padding: ${2*e.gridUnit}px 0; /* this is padding not margin to enable a larger mouse target */
    background-color: transparent;

    &:after {
      content: '';
      height: 1px;
      width: 100%;
      background-color: ${e.colors.grayscale.light2};
      display: block;
    }

    div[draggable='true'] & {
      cursor: move;
    }

    .dashboard-component-tabs & {
      padding-left: ${4*e.gridUnit}px;
      padding-right: ${4*e.gridUnit}px;
    }
  `}
`;class Za extends o.PureComponent{constructor(e){super(e),this.handleDeleteComponent=this.handleDeleteComponent.bind(this)}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:n}=this.props;e(t,n)}render(){const{component:e,depth:t,parentComponent:n,index:i,handleComponentDrop:r,editMode:o}=this.props;return(0,V.tZ)(Re,{component:e,parentComponent:n,orientation:"row",index:i,depth:t,onDrop:r,editMode:o,children:({dragSourceRef:e})=>(0,V.BX)("div",{ref:e,children:[o&&(0,V.tZ)(_o,{position:"left",children:(0,V.tZ)(Fo,{onDelete:this.handleDeleteComponent})}),(0,V.tZ)(wa,{className:"dashboard-component dashboard-component-divider"})]})})}}Za.propTypes=Sa;const ka=Za;var Ra=n(79271);const $a={id:w().string.isRequired,dashboardId:w().string.isRequired,parentId:w().string.isRequired,component:z.cP.isRequired,depth:w().number.isRequired,parentComponent:z.cP.isRequired,index:w().number.isRequired,editMode:w().bool.isRequired,handleComponentDrop:w().func.isRequired,deleteComponent:w().func.isRequired,updateComponents:w().func.isRequired},Ta=a.iK.div`
  ${({theme:e})=>s.iv`
    font-weight: ${e.typography.weights.bold};
    width: 100%;
    padding: ${4*e.gridUnit}px 0;

    &.header-small {
      font-size: ${e.typography.sizes.l}px;
    }

    &.header-medium {
      font-size: ${e.typography.sizes.xl}px;
    }

    &.header-large {
      font-size: ${e.typography.sizes.xxl}px;
    }

    .dashboard--editing .dashboard-grid & {
      &:after {
        border: 1px dashed transparent;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        pointer-events: none;
      }

      &:hover:after {
        border: 1px dashed ${e.colors.primary.base};
        z-index: 2;
      }
    }

    .dashboard--editing .dragdroppable-row & {
      cursor: move;
    }

    /**
   * grids add margin between items, so don't double pad within columns
   * we'll not worry about double padding on top as it can serve as a visual separator
   */
    .grid-column > :not(:last-child) & {
      margin-bottom: ${-4*e.gridUnit}px;
    }

    .background--white &,
    &.background--white,
    .dashboard-component-tabs & {
      padding-left: ${4*e.gridUnit}px;
      padding-right: ${4*e.gridUnit}px;
    }
  `}
`;class Da extends o.PureComponent{constructor(e){super(e),this.state={isFocused:!1},this.handleDeleteComponent=this.handleDeleteComponent.bind(this),this.handleChangeFocus=this.handleChangeFocus.bind(this),this.handleUpdateMeta=this.handleUpdateMeta.bind(this),this.handleChangeSize=this.handleUpdateMeta.bind(this,"headerSize"),this.handleChangeBackground=this.handleUpdateMeta.bind(this,"background"),this.handleChangeText=this.handleUpdateMeta.bind(this,"text")}handleChangeFocus(e){this.setState((()=>({isFocused:e})))}handleUpdateMeta(e,t){const{updateComponents:n,component:i}=this.props;t&&i.meta[e]!==t&&n({[i.id]:{...i,meta:{...i.meta,[e]:t}}})}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:n}=this.props;e(t,n)}render(){const{isFocused:e}=this.state,{dashboardId:t,component:n,depth:i,parentComponent:o,index:a,handleComponentDrop:s,editMode:l}=this.props,d=Ra.Z.find((e=>e.value===(n.meta.headerSize||_.u_))),c=ua.Z.find((e=>e.value===(n.meta.background||_.HE)));return(0,V.tZ)(Re,{component:n,parentComponent:o,orientation:"row",index:a,depth:i,onDrop:s,disableDragDrop:e,editMode:l,children:({dragSourceRef:e})=>(0,V.BX)("div",{ref:e,children:[l&&i<=2&&(0,V.tZ)(_o,{position:"left",children:(0,V.tZ)(ha,{position:"left"})}),(0,V.tZ)(ia,{onChangeFocus:this.handleChangeFocus,menuItems:[(0,V.tZ)(Jo,{id:`${n.id}-header-style`,options:Ra.Z,value:n.meta.headerSize,onChange:this.handleChangeSize}),(0,V.tZ)(fa,{id:`${n.id}-background`,value:n.meta.background,onChange:this.handleChangeBackground})],editMode:l,children:(0,V.BX)(Ta,{className:r()("dashboard-component","dashboard-component-header",d.className,c.className),children:[l&&(0,V.tZ)(_o,{position:"top",children:(0,V.tZ)(Fo,{onDelete:this.handleDeleteComponent})}),(0,V.tZ)(di.Z,{title:n.meta.text,canEdit:l,onSaveTitle:this.handleChangeText,showTooltip:!1}),!l&&(0,V.tZ)(Jn,{id:n.id,dashboardId:t})]})})]})})}}Da.propTypes=$a,Da.defaultProps={};const Ma=Da;var Ia=n(68122),Fa=n(71894);const Ea={id:w().string.isRequired,parentId:w().string.isRequired,component:z.cP.isRequired,parentComponent:z.cP.isRequired,index:w().number.isRequired,depth:w().number.isRequired,editMode:w().bool.isRequired,availableColumnCount:w().number.isRequired,columnWidth:w().number.isRequired,occupiedColumnCount:w().number.isRequired,onResizeStart:w().func.isRequired,onResize:w().func.isRequired,onResizeStop:w().func.isRequired,maxChildrenHeight:w().number.isRequired,handleComponentDrop:w().func.isRequired,deleteComponent:w().func.isRequired,updateComponents:w().func.isRequired},_a=a.iK.div`
  ${({theme:e,editMode:t})=>s.iv`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    width: 100%;
    height: fit-content;

    & > :not(:last-child):not(.hover-menu) {
      ${!t&&`margin-right: ${4*e.gridUnit}px;`}
    }

    & .empty-droptarget {
      position: relative;
      align-self: center;
      &.empty-droptarget--vertical {
        min-width: ${4*e.gridUnit}px;
        &:not(:last-child) {
          width: ${4*e.gridUnit}px;
        }
        &:first-child:not(.droptarget-side) {
          z-index: ${Ii.oB};
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
      &.droptarget-side {
        z-index: ${Ii.oB};
        position: absolute;
        width: ${4*e.gridUnit}px;
        &:first-child {
          inset-inline-start: 0;
        }
      }
    }

    &.grid-row--empty {
      min-height: ${25*e.gridUnit}px;
    }
  `}
`,za=e=>s.iv`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e.colors.text.label};
`;class Pa extends o.PureComponent{constructor(e){super(e),this.handleMenuHover=e=>{const{isHovered:t}=e;this.setState((()=>({hoverMenuHovered:t})))},this.state={isFocused:!1,isInView:!1,hoverMenuHovered:!1},this.handleDeleteComponent=this.handleDeleteComponent.bind(this),this.handleUpdateMeta=this.handleUpdateMeta.bind(this),this.handleChangeBackground=this.handleUpdateMeta.bind(this,"background"),this.handleChangeFocus=this.handleChangeFocus.bind(this),this.handleMenuHover=this.handleMenuHover.bind(this),this.setVerticalEmptyContainerHeight=C()(this.setVerticalEmptyContainerHeight.bind(this),Ia.o),this.containerRef=(0,o.createRef)(),this.observerEnabler=null,this.observerDisabler=null}componentDidMount(){if((0,d.cr)(d.TT.DashboardVirtualization)&&!(0,Fa.b)()){this.observerEnabler=new IntersectionObserver((([e])=>{e.isIntersecting&&!this.state.isInView&&this.setState({isInView:!0})}),{rootMargin:"100% 0px"}),this.observerDisabler=new IntersectionObserver((([e])=>{!e.isIntersecting&&this.state.isInView&&this.setState({isInView:!1})}),{rootMargin:"400% 0px"});const e=this.containerRef.current;e&&(this.observerEnabler.observe(e),this.observerDisabler.observe(e),this.setVerticalEmptyContainerHeight())}}componentDidUpdate(){this.setVerticalEmptyContainerHeight()}setVerticalEmptyContainerHeight(){var e;const{containerHeight:t}=this.state,{editMode:n}=this.props,i=null==(e=this.containerRef.current)?void 0:e.clientHeight;n&&this.containerRef.current&&i!==t&&this.setState({containerHeight:i})}componentWillUnmount(){var e,t;null==(e=this.observerEnabler)||e.disconnect(),null==(t=this.observerDisabler)||t.disconnect()}handleChangeFocus(e){this.setState((()=>({isFocused:Boolean(e)})))}handleUpdateMeta(e,t){const{updateComponents:n,component:i}=this.props;t&&i.meta[e]!==t&&n({[i.id]:{...i,meta:{...i.meta,[e]:t}}})}handleDeleteComponent(){const{deleteComponent:e,component:t,parentId:n}=this.props;e(t.id,n)}render(){const{component:e,parentComponent:t,index:n,availableColumnCount:i,columnWidth:a,occupiedColumnCount:s,depth:l,onResizeStart:d,onResize:c,onResizeStop:u,handleComponentDrop:p,editMode:m,onChangeTab:g,isComponentVisible:f}=this.props,{containerHeight:v,hoverMenuHovered:b}=this.state,y=e.children||[],x=ua.Z.find((t=>t.value===(e.meta.background||_.HE))),C=i-s;return(0,V.tZ)(Re,{component:e,parentComponent:t,orientation:"row",index:n,depth:l,onDrop:p,editMode:m,children:({dragSourceRef:t})=>(0,V.BX)(ia,{isFocused:this.state.isFocused,onChangeFocus:this.handleChangeFocus,disableClick:!0,menuItems:[(0,V.tZ)(fa,{id:`${e.id}-background`,value:x.value,onChange:this.handleChangeBackground})],editMode:m,children:[m&&(0,V.BX)(_o,{onHover:this.handleMenuHover,innerRef:t,position:"left",children:[(0,V.tZ)(ha,{position:"left"}),(0,V.tZ)(Fo,{onDelete:this.handleDeleteComponent}),(0,V.tZ)(Ln,{onClick:this.handleChangeFocus,icon:(0,V.tZ)(I.Z.Cog,{iconSize:"xl"})})]}),(0,V.BX)(_a,{className:r()("grid-row",0===y.length&&"grid-row--empty",b&&"grid-row--hovered",x.className),ref:this.containerRef,editMode:m,children:[m&&(0,V.tZ)($e,{...0===y.length?{component:e,parentComponent:e,dropToChild:!0}:{component:y[0],parentComponent:e},depth:l,index:0,orientation:"row",onDrop:p,className:r()("empty-droptarget","empty-droptarget--vertical",y.length>0&&"droptarget-side"),editMode:!0,style:{height:y.length>0?v:"100%",...y.length>0&&{width:16}},children:({dropIndicatorProps:e})=>e&&(0,V.tZ)("div",{...e})}),0===y.length&&(0,V.tZ)("div",{css:za,children:(0,h.t)("Empty row")}),y.length>0&&y.map(((t,n)=>(0,V.BX)(o.Fragment,{children:[(0,V.tZ)(os,{id:t,parentId:e.id,depth:l+1,index:n,availableColumnCount:C,columnWidth:a,onResizeStart:d,onResize:c,onResizeStop:u,isComponentVisible:f,onChangeTab:g,isInView:this.state.isInView},t),m&&(0,V.tZ)($e,{component:y,parentComponent:e,depth:l,index:n+1,orientation:"row",onDrop:p,className:r()("empty-droptarget","empty-droptarget--vertical",0===C&&n===y.length-1&&"droptarget-side"),editMode:!0,style:{height:v,...0===C&&n===y.length-1&&{width:16}},children:({dropIndicatorProps:e})=>e&&(0,V.tZ)("div",{...e})})]},t)))]})]})})}}Pa.propTypes=Ea;const Ua=Pa;var Oa=n(94301);const Ba="RENDER_TAB",Na="RENDER_TAB_CONTENT",qa={dashboardId:w().number.isRequired,id:w().string.isRequired,parentId:w().string.isRequired,component:z.cP.isRequired,parentComponent:z.cP.isRequired,index:w().number.isRequired,depth:w().number.isRequired,renderType:w().oneOf([Ba,Na]).isRequired,onDropOnTab:w().func,onHoverTab:w().func,editMode:w().bool.isRequired,canEdit:w().bool.isRequired,availableColumnCount:w().number,columnWidth:w().number,onResizeStart:w().func,onResize:w().func,onResizeStop:w().func,handleComponentDrop:w().func.isRequired,updateComponents:w().func.isRequired,setDirectPathToChild:w().func.isRequired,setEditMode:w().func.isRequired},Va={availableColumnCount:0,columnWidth:0,onDropOnTab(){},onHoverTab(){},onResizeStart(){},onResize(){},onResizeStop(){}},Aa=a.iK.div`
  ${({isHighlighted:e,theme:{gridUnit:t,colors:n}})=>`\n    padding: ${t}px ${2*t}px;\n    margin: ${-t}px ${-2*t}px;\n    transition: box-shadow 0.2s ease-in-out;\n    ${e&&`box-shadow: 0 0 ${t}px ${n.primary.light1};`}\n  `}
`,Ka=e=>e.dropIndicatorProps&&(0,V.tZ)("div",{...e.dropIndicatorProps});class ja extends o.PureComponent{constructor(e){super(e),this.handleChangeText=this.handleChangeText.bind(this),this.handleDrop=this.handleDrop.bind(this),this.handleOnHover=this.handleOnHover.bind(this),this.handleTopDropTargetDrop=this.handleTopDropTargetDrop.bind(this),this.handleChangeTab=this.handleChangeTab.bind(this)}handleChangeTab({pathToTabIndex:e}){this.props.setDirectPathToChild(e)}handleChangeText(e){const{updateComponents:t,component:n}=this.props;e&&e!==n.meta.text&&t({[n.id]:{...n,meta:{...n.meta,text:e}}})}handleDrop(e){this.props.handleComponentDrop(e),this.props.onDropOnTab(e)}handleOnHover(){this.props.onHoverTab()}handleTopDropTargetDrop(e){e&&this.props.handleComponentDrop({...e,destination:{...e.destination,index:0}})}shouldDropToChild(e){return e.type!==E.gn}renderTabContent(){const{component:e,depth:t,availableColumnCount:n,columnWidth:i,onResizeStart:a,onResize:s,onResizeStop:l,editMode:d,isComponentVisible:c,canEdit:u,setEditMode:p,dashboardId:m}=this.props,g=0===e.children.length;return(0,V.BX)("div",{className:"dashboard-component-tabs-content",children:[d&&(0,V.tZ)($e,{component:e,orientation:"column",index:0,depth:t,onDrop:0===e.children.length?this.handleTopDropTargetDrop:this.handleDrop,editMode:!0,className:r()({"empty-droptarget":!0,"empty-droptarget--full":0===e.children.length}),dropToChild:0===e.children.length,children:Ka}),g&&(0,V.tZ)(Oa.x3,{title:d?(0,h.t)("Drag and drop components to this tab"):(0,h.t)("There are no components added to this tab"),description:u&&(d?(0,V.BX)("span",{children:[(0,h.t)("You can")," ",(0,V.tZ)("a",{href:`/chart/add?dashboard_id=${m}`,rel:"noopener noreferrer",target:"_blank",children:(0,h.t)("create a new chart")})," ",(0,h.t)("or use existing ones from the panel on the right")]}):(0,V.BX)("span",{children:[(0,h.t)("You can add the components in the")," ",(0,V.tZ)("span",{role:"button",tabIndex:0,onClick:()=>p(!0),children:(0,h.t)("edit mode")})]})),image:"chart.svg"}),e.children.map(((r,h)=>(0,V.BX)(o.Fragment,{children:[(0,V.tZ)(os,{id:r,parentId:e.id,depth:t,index:h,onDrop:this.handleDrop,onHover:this.handleOnHover,availableColumnCount:n,columnWidth:i,onResizeStart:a,onResize:s,onResizeStop:l,isComponentVisible:c,onChangeTab:this.handleChangeTab}),d&&(0,V.tZ)($e,{component:e,orientation:"column",index:h+1,depth:t,onDrop:this.handleDrop,editMode:!0,className:"empty-droptarget",children:Ka})]},r)))]})}renderTab(){const{component:e,parentComponent:t,index:n,depth:i,editMode:r,isFocused:o,isHighlighted:a}=this.props;return(0,V.tZ)(Te,{component:e,parentComponent:t,orientation:"column",index:n,depth:i,onDrop:this.handleDrop,onHover:this.handleOnHover,editMode:r,dropToChild:this.shouldDropToChild,children:({dropIndicatorProps:t,dragSourceRef:i})=>(0,V.BX)(Aa,{isHighlighted:a,className:"dragdroppable-tab",ref:i,children:[(0,V.tZ)(di.Z,{title:e.meta.text,defaultTitle:e.meta.defaultText,placeholder:e.meta.placeholder,canEdit:r&&o,onSaveTitle:this.handleChangeText,showTooltip:!1,editing:r&&o}),!r&&(0,V.tZ)(Jn,{id:e.id,dashboardId:this.props.dashboardId,placement:n>=5?"left":"right"}),t&&(0,V.tZ)("div",{...t})]})})}render(){const{renderType:e}=this.props;return e===Ba?this.renderTab():this.renderTabContent()}}ja.propTypes=qa,ja.defaultProps=Va;const La=(0,u.$j)((function(e){return{canEdit:e.dashboardInfo.dash_edit_perm}}),(function(e){return(0,f.DE)({setEditMode:Bn.Mb},e)}))(ja);function Xa({currentComponent:e,directPathToChild:t=[]}){if(!e||0===t.length||-1===t.indexOf(e.id))return-1;const n=t.findIndex((t=>t===e.id)),i=t[n+1];return e.children.indexOf(i)>=0?e.children.findIndex((e=>e===i)):-1}function Ha(e,t){const n=(e.parents||[]).slice();return n.push(e.id),n.push(e.children[t]),n}function Wa(e=[]){if(e.length>0){const t=e.slice();for(;t.length;){const e=t.pop(),n=e&&e.split("-")[0];if(!_.Ep.includes(n))return e}}return null}const Ya={id:w().string.isRequired,parentId:w().string.isRequired,component:z.cP.isRequired,parentComponent:z.cP.isRequired,index:w().number.isRequired,depth:w().number.isRequired,renderTabContent:w().bool,editMode:w().bool.isRequired,renderHoverMenu:w().bool,directPathToChild:w().arrayOf(w().string),activeTabs:w().arrayOf(w().string),logEvent:w().func.isRequired,setActiveTab:w().func,availableColumnCount:w().number,columnWidth:w().number,onResizeStart:w().func,onResize:w().func,onResizeStop:w().func,createComponent:w().func.isRequired,handleComponentDrop:w().func.isRequired,onChangeTab:w().func.isRequired,deleteComponent:w().func.isRequired,updateComponents:w().func.isRequired},Ga={renderTabContent:!0,renderHoverMenu:!0,availableColumnCount:0,columnWidth:0,activeTabs:[],directPathToChild:[],setActiveTab(){},onResizeStart(){},onResize(){},onResizeStop(){}},Ja=a.iK.div`
  width: 100%;
  background-color: ${({theme:e})=>e.colors.grayscale.light5};

  .dashboard-component-tabs-content {
    min-height: ${({theme:e})=>12*e.gridUnit}px;
    margin-top: ${({theme:e})=>e.gridUnit/4}px;
    position: relative;
  }

  .ant-tabs {
    overflow: visible;

    .ant-tabs-nav-wrap {
      min-height: ${({theme:e})=>12.5*e.gridUnit}px;
    }

    .ant-tabs-content-holder {
      overflow: visible;
    }
  }

  div .ant-tabs-tab-btn {
    text-transform: none;
  }
`;class Qa extends o.PureComponent{constructor(e){super(e),this.getTabInfo=e=>{var t;let n=Math.max(0,Xa({currentComponent:e.component,directPathToChild:e.directPathToChild}));0===n&&null!=(t=e.activeTabs)&&t.length&&e.component.children.forEach(((t,i)=>{0===n&&e.activeTabs.includes(t)&&(n=i)}));const{children:i}=e.component,r=i[n];return{tabIndex:n,activeKey:r}},this.showDeleteConfirmModal=e=>{const{component:t,deleteComponent:n}=this.props;T.xT.confirm({title:(0,h.t)("Delete dashboard tab?"),content:(0,V.BX)("span",{children:[(0,h.t)("Deleting a tab will remove all content within it. You may still reverse this action with the")," ",(0,V.tZ)("b",{children:(0,h.t)("undo")})," ",(0,h.t)("button (cmd + z) until you save your changes.")]}),onOk:()=>{n(e,t.id);const i=t.children.indexOf(e);this.handleDeleteTab(i)},okType:"danger",okText:(0,h.t)("DELETE"),cancelText:(0,h.t)("CANCEL"),icon:null})},this.handleEdit=(e,t)=>{const{component:n,createComponent:i}=this.props;"add"===t?(null==e||null==e.stopPropagation||e.stopPropagation(),i({destination:{id:n.id,type:n.type,index:n.children.length},dragging:{id:_.Xk,type:E.gn}})):"remove"===t&&this.showDeleteConfirmModal(e)};const{tabIndex:t,activeKey:n}=this.getTabInfo(e);this.state={tabIndex:t,activeKey:n},this.handleClickTab=this.handleClickTab.bind(this),this.handleDeleteComponent=this.handleDeleteComponent.bind(this),this.handleDeleteTab=this.handleDeleteTab.bind(this),this.handleDropOnTab=this.handleDropOnTab.bind(this),this.handleDrop=this.handleDrop.bind(this)}componentDidMount(){this.props.setActiveTab(this.state.activeKey)}componentDidUpdate(e,t){t.activeKey!==this.state.activeKey&&this.props.setActiveTab(this.state.activeKey,t.activeKey)}UNSAFE_componentWillReceiveProps(e){const t=Math.max(0,e.component.children.length-1),n=this.props.component.children,i=e.component.children;if(this.state.tabIndex>t&&this.setState((()=>({tabIndex:t}))),e.dashboardId!==this.props.dashboardId){const{tabIndex:t,activeKey:n}=this.getTabInfo(e);this.setState((()=>({tabIndex:t,activeKey:n})))}if(e.isComponentVisible){const t=Wa(e.directPathToChild),r=Wa(this.props.directPathToChild);if(t!==r||t===r&&n!==i){const t=Xa({currentComponent:e.component,directPathToChild:e.directPathToChild});t>-1&&t!==this.state.tabIndex&&this.setState((()=>({tabIndex:t,activeKey:i[t]})))}}}handleClickTab(e){const{component:t}=this.props,{children:n}=t;if(e!==this.state.tabIndex){const n=Ha(t,e),i=n[n.length-1];this.props.logEvent(at.Iq,{target_id:i,index:e}),this.props.onChangeTab({pathToTabIndex:n})}this.setState((()=>({activeKey:n[e]})))}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:n}=this.props;e(t,n)}handleDeleteTab(e){this.state.tabIndex===e&&this.handleClickTab(Math.max(0,e-1))}handleDropOnTab(e){const{component:t}=this.props,{destination:n}=e;if(n){const e=n.id===t.id?n.index:t.children.indexOf(n.id);e>-1&&setTimeout((()=>{this.handleClickTab(e)}),30)}}handleDrop(e){e.dragging.type!==E.yR&&this.props.handleComponentDrop(e)}render(){const{depth:e,component:t,parentComponent:n,index:i,availableColumnCount:r,columnWidth:o,onResizeStart:a,onResize:s,onResizeStop:l,renderTabContent:d,renderHoverMenu:c,isComponentVisible:h,editMode:u,nativeFilters:p}=this.props,{children:m}=t,{tabIndex:f,activeKey:v}=this.state;let b;const y=(null==p?void 0:p.focusedFilterId)||(null==p?void 0:p.hoveredFilterId);var x;return y&&(b=null==(x=p.filters[y])?void 0:x.tabsInScope),(0,V.tZ)(Re,{component:t,parentComponent:n,orientation:"row",index:i,depth:e,onDrop:this.handleDrop,editMode:u,children:({dragSourceRef:n})=>(0,V.BX)(Ja,{className:"dashboard-component dashboard-component-tabs",children:[u&&c&&(0,V.BX)(_o,{innerRef:n,position:"left",children:[(0,V.tZ)(ha,{position:"left"}),(0,V.tZ)(Fo,{onDelete:this.handleDeleteComponent})]}),(0,V.tZ)(g.cl,{id:t.id,activeKey:v,onChange:e=>{this.handleClickTab(m.indexOf(e))},onEdit:this.handleEdit,type:u?"editable-card":"card",children:m.map(((n,i)=>{var c;return(0,V.tZ)(g.cl.TabPane,{tab:(0,V.tZ)(os,{id:n,parentId:t.id,depth:e,index:i,renderType:Ba,availableColumnCount:r,columnWidth:o,onDropOnTab:this.handleDropOnTab,onHoverTab:()=>this.handleClickTab(i),isFocused:v===n,isHighlighted:v!==n&&(null==(c=b)?void 0:c.includes(n))}),children:d&&(0,V.tZ)(os,{id:n,parentId:t.id,depth:e,index:i,renderType:Na,availableColumnCount:r,columnWidth:o,onResizeStart:a,onResize:s,onResizeStop:l,onDropOnTab:this.handleDropOnTab,isComponentVisible:f===i&&h})},n)}))})]})})}}Qa.propTypes=Ya,Qa.defaultProps=Ga;const es=(0,u.$j)((function(e){return{nativeFilters:e.nativeFilters,activeTabs:e.dashboardState.activeTabs,directPathToChild:e.dashboardState.directPathToChild}}))(Qa),ts={[E.dW]:({id:e,parentId:t,component:n,parentComponent:i,index:s,depth:l,availableColumnCount:d,columnWidth:c,onResizeStart:h,onResize:p,onResizeStop:m,editMode:g,isComponentVisible:f,dashboardId:v,fullSizeChartId:b,getComponentById:y=(()=>{}),deleteComponent:x,updateComponents:C,handleComponentDrop:S,setFullSizeChartId:w,isInView:Z})=>{const{chartId:k}=n.meta,R=b===k,$=(e=>{const t=(0,a.Fg)(),n=(0,u.v9)((e=>e.nativeFilters)),i=((e,t)=>{if(!e.focusedFilterField)return null;const{chartId:n,column:i}=e.focusedFilterField;return{chartId:n,scope:t[n].scopes[i]}})((0,u.v9)((e=>e.dashboardState)),(0,u.v9)((e=>e.dashboardFilters))),r=(null==n?void 0:n.focusedFilterId)||(null==n?void 0:n.hoveredFilterId);if(!i&&!r)return{};const o={borderColor:t.colors.primary.light2,opacity:1,boxShadow:`0px 0px ${2*t.gridUnit}px ${t.colors.primary.base}`,pointerEvents:"auto"};var s,l;if(r){if(null!=(s=n.filters[r])&&null!=(l=s.chartsInScope)&&l.includes(e))return o}else if(e===(null==i?void 0:i.chartId)||(0,Wt.Q1)({filterScope:null==i?void 0:i.scope}).includes(e))return o;return{opacity:.3,pointerEvents:"none"}})(k),T=(0,u.v9)((e=>e.dashboardState)),[D,M]=(0,o.useState)({}),[I,F]=(0,o.useState)(),[z,P]=(0,o.useState)(),[U,O]=(0,o.useState)(0),B=(0,o.useMemo)((()=>{var e;return null!=(e=null==T?void 0:T.directPathToChild)?e:[]}),[T]),N=(0,o.useMemo)((()=>{var e;return null!=(e=null==T?void 0:T.directPathLastUpdated)?e:0}),[T]),q=(0,o.useMemo)((()=>Xo(B)),[B]);(0,o.useEffect)((()=>{const{label:e,chart:t}=q;N!==U&&n.id===t&&(O(N),F(n.id),P(e))}),[n,U,N,q]),(0,o.useEffect)((()=>{let e;return I&&(e=setTimeout((()=>{F(void 0),P(void 0)}),2e3)),()=>{e&&clearTimeout(e)}}),[I]);const A=(0,o.useMemo)((()=>{var e,t,r;const o=null==(e=y(null==(r=i.parents)?void 0:r.find((e=>e.startsWith(E.BA)))))||null==(t=e.meta)?void 0:t.width;let a=n.meta.width||_.cx;return i.type===E.BA?a=i.meta.width||_.cx:o&&a>o&&(a=o),a}),[n,y,i.meta.width,i.parents,i.type]),{chartWidth:K,chartHeight:j}=(0,o.useMemo)((()=>{let e=0,t=0;return R?(e=window.innerWidth-32,t=window.innerHeight-32):(e=Math.floor(A*c+(A-1)*_.es-32),t=Math.floor(n.meta.height*_.cd-32)),{chartWidth:e,chartHeight:t}}),[c,n,R,A]),L=(0,o.useCallback)((()=>{x(e,t)}),[x,e,t]),X=(0,o.useCallback)((e=>{C({[n.id]:{...n,meta:{...n.meta,sliceNameOverride:e}}})}),[n,C]),H=(0,o.useCallback)((()=>{w(R?null:k)}),[k,R,w]),W=(0,o.useCallback)(((e,t)=>{M((n=>({...n,[e]:t})))}),[]);return(0,V.tZ)(Re,{component:n,parentComponent:i,orientation:i.type===E.Os?"column":"row",index:s,depth:l,onDrop:S,disableDragDrop:!1,editMode:g,children:({dragSourceRef:e})=>(0,V.tZ)(Lo,{id:n.id,adjustableWidth:i.type===E.Os,adjustableHeight:!0,widthStep:c,widthMultiple:A,heightStep:_.cd,heightMultiple:n.meta.height,minWidthMultiple:_.cx,minHeightMultiple:_.AA,maxWidthMultiple:d+A,onResizeStart:h,onResize:p,onResizeStop:m,editMode:g,children:(0,V.BX)("div",{ref:e,style:$,css:R?Ho:void 0,className:r()("dashboard-component","dashboard-component-chart-holder",`dashboard-chart-id-${k}`,I?"fade-in":"fade-out"),children:[!g&&(0,V.tZ)(Jn,{id:n.id,scrollIntoView:I===n.id}),!!I&&(0,V.tZ)("style",{children:`label[for=${z}] + .Select .Select__control {\n                    border-color: #00736a;\n                    transition: border-color 1s ease-in-out;\n                  }`}),(0,V.tZ)(Io,{componentId:n.id,id:n.meta.chartId,dashboardId:v,width:K,height:j,sliceName:n.meta.sliceNameOverride||n.meta.sliceName||"",updateSliceName:X,isComponentVisible:f,handleToggleFullSize:H,isFullSize:R,setControlValue:W,extraControls:D,isInView:Z}),g&&(0,V.tZ)(_o,{position:"top",children:(0,V.tZ)("div",{children:(0,V.tZ)(Fo,{onDelete:L})})})]})})})},[E.xh]:da,[E.BA]:Ca,[E.hE]:ka,[E.Nc]:Ma,[E.Os]:Ua,[E.gn]:La,[E.yR]:es,[E.t]:({component:e,parentComponent:t,index:n,depth:i,handleComponentDrop:a,editMode:s,columnWidth:l,availableColumnCount:d,onResizeStart:c,onResizeStop:p,onResize:m,deleteComponent:g,parentId:f,updateComponents:v,id:b})=>{const y=t.type===E.BA?t.meta.width||_.cx:e.meta.width||_.cx,x=()=>{g(b,f)},C=ua.Z.find((t=>t.value===(e.meta.background||_.HE))),{Component:S}=Ae.get(e.meta.componentKey),w=(0,u.v9)((({nativeFilters:e,dataMask:t})=>({nativeFilters:e,dataMask:t})));return(0,V.tZ)(Re,{component:e,parentComponent:t,orientation:t.type===E.Os?"column":"row",index:n,depth:i,onDrop:a,editMode:s,children:({dragSourceRef:n})=>(0,V.tZ)(ia,{menuItems:[(0,V.tZ)(fa,{id:`${e.id}-background`,value:e.meta.background,onChange:t=>{return"background",n=t,void v({[e.id]:{...e,meta:{...e.meta,background:n}}});var n}})],editMode:s,children:(0,V.tZ)("div",{className:r()("dashboard-component",`dashboard-${e.componentKey}`,null==C?void 0:C.className),id:e.id,children:(0,V.tZ)(Lo,{id:e.id,adjustableWidth:t.type===E.Os,widthStep:l,widthMultiple:y,heightStep:_.cd,adjustableHeight:!1,heightMultiple:e.meta.height,minWidthMultiple:_.cx,minHeightMultiple:_.cx,maxWidthMultiple:d+y,onResizeStart:c,onResize:m,onResizeStop:p,children:(0,V.BX)("div",{ref:n,className:"dashboard-component",children:[s&&(0,V.tZ)(_o,{position:"top",children:(0,V.tZ)(Fo,{onDelete:x})}),(0,V.tZ)(o.Suspense,{fallback:(0,V.tZ)("div",{children:(0,h.t)("Loading...")}),children:(0,V.tZ)(S,{dashboardData:w})})]})})})})})}};var ns=n(72673);const is={id:w().string,parentId:w().string,depth:w().number,index:w().number,renderHoverMenu:w().bool,renderTabContent:w().bool,onChangeTab:w().func,component:z.cP.isRequired,parentComponent:z.cP.isRequired,createComponent:w().func.isRequired,deleteComponent:w().func.isRequired,updateComponents:w().func.isRequired,handleComponentDrop:w().func.isRequired,logEvent:w().func.isRequired,directPathToChild:w().arrayOf(w().string),directPathLastUpdated:w().number,dashboardId:w().number.isRequired,isComponentVisible:w().bool};class rs extends o.PureComponent{render(){const{component:e}=this.props,t=e?ts[e.type]:null;return t?(0,V.tZ)(t,{...this.props}):null}}rs.propTypes=is,rs.defaultProps={isComponentVisible:!0};const os=(0,u.$j)((function({dashboardLayout:e,dashboardState:t,dashboardInfo:n},i){const r=e.present,{id:o,parentId:a}=i,s=r[o],l={component:s,getComponentById:e=>r[e],parentComponent:r[a],editMode:t.editMode,filters:(0,Wt.De)(),dashboardId:n.id,dashboardInfo:n,fullSizeChartId:t.fullSizeChartId};if(s){const e=s.type;if(e===E.Os||e===E.BA){const{occupiedWidth:t,minimumWidth:n}=(0,ns.Z)({id:o,components:r});e===E.Os&&(l.occupiedColumnCount=t),e===E.BA&&(l.minColumnWidth=n)}}return l}),(function(e){return(0,f.DE)({addDangerToast:qn.Gb,createComponent:Nn.LM,deleteComponent:Nn.v7,updateComponents:Nn.WZ,handleComponentDrop:Nn._p,setDirectPathToChild:Bn.E2,setFullSizeChartId:Bn.zL,setActiveTab:Bn.r7,logEvent:Vn.logEvent},e)}))(rs);var as=n(90057),ss=n(8868),ls=n(6954);const ds=(e,t=!1)=>(n,i=!1)=>{const r=i||t;return!n&&e?r?e:{}:n&&!e?r?n:{}:n||e?r?`${e}__${n}`:{}:(console.warn('testWithId function has missed "prefix" and "id" params'),r?"":{})},cs=e=>Object.values(e).reduce(((e,t)=>({...e,[t.id]:t.extraFormData})),{}),hs=(e,t)=>{var n;const i=null==t?void 0:t.value;return(null==(n=e.controlValues)?void 0:n.enableEmptyFilter)&&null==i},us=()=>(0,u.v9)((e=>{const{charts:t,datasources:n}=e;return Object.keys(e.charts).reduce(((e,i)=>{var r,o;const a=n[null==(r=t[i])||null==(o=r.form_data)?void 0:o.datasource];return{...e,[i]:a?a.verbose_map:{}}}),{})})),ps=ds("filter-bar");var ms=n(92242);const gs=()=>{const e=(0,u.v9)((e=>{var t;return null==(t=e.dashboardState)?void 0:t.preselectNativeFilters})),t=(0,u.v9)((e=>e.nativeFilters.filters));return(0,o.useMemo)((()=>Object.entries(t).reduce(((t,[n,i])=>({...t,[n]:{...i,preselect:null==e?void 0:e[n]}})),{})),[t,e])},fs=()=>{const e=(0,u.v9)((e=>e.dataMask));return(0,o.useMemo)((()=>Object.values(e).filter((e=>String(e.id).startsWith(ms.rW))).reduce(((e,t)=>({...e,[t.id]:t})),{})),[e])};var vs=n(81788);const bs=e=>s.iv`
  display: flex;

  && > .filter-clear-all-button {
    color: ${e.colors.grayscale.base};
    margin-left: 0;
    &:hover {
      color: ${e.colors.primary.dark1};
    }

    &[disabled],
    &[disabled]:hover {
      color: ${e.colors.grayscale.light1};
    }
  }
`,ys=(e,t)=>s.iv`
  flex-direction: column;
  align-items: center;
  pointer-events: none;
  position: fixed;
  z-index: 100;

  // filter bar width minus 1px for border
  width: ${t-1}px;
  bottom: 0;

  padding: ${4*e.gridUnit}px;
  padding-top: ${6*e.gridUnit}px;

  background: linear-gradient(
    ${(0,m.rgba)(e.colors.grayscale.light5,0)},
    ${e.colors.grayscale.light5} ${e.opacity.mediumLight}
  );

  & > button {
    pointer-events: auto;
  }

  & > .filter-apply-button {
    margin-bottom: ${3*e.gridUnit}px;
  }
`,xs=e=>s.iv`
  align-items: center;
  margin-left: auto;
  && > .filter-clear-all-button {
    text-transform: capitalize;
    font-weight: ${e.typography.weights.normal};
  }
  & > .filter-apply-button {
    &[disabled],
    &[disabled]:hover {
      color: ${e.colors.grayscale.light1};
      background: ${e.colors.grayscale.light3};
    }
  }
`,Cs=({width:e=Ii.I6,onApply:t,onClearAll:n,dataMaskApplied:i,dataMaskSelected:r,isApplyDisabled:a,filterBarOrientation:s=ft.Bp.Vertical})=>{const l=(0,o.useMemo)((()=>Object.values(i).some((e=>{var t,n,i;return(0,$i.Z)(null==(t=r[e.id])||null==(n=t.filterState)?void 0:n.value)||!r[e.id]&&(0,$i.Z)(null==(i=e.filterState)?void 0:i.value)}))),[i,r]),d=s===ft.Bp.Vertical;return(0,V.BX)("div",{css:t=>[bs(t),d?ys(t,e):xs(t)],children:[(0,V.tZ)(M.Z,{disabled:a,buttonStyle:"primary",htmlType:"submit",className:"filter-apply-button",onClick:t,...ps("apply-button"),children:d?(0,h.t)("Apply filters"):(0,h.t)("Apply")}),(0,V.tZ)(M.Z,{disabled:!l,buttonStyle:"link",buttonSize:"small",className:"filter-clear-all-button",onClick:n,...ps("clear-button"),children:(0,h.t)("Clear all")})]})};var Ss,ws=n(90731),Zs=(Ss=function(e,t){return Ss=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},Ss(e,t)},function(e,t){function n(){this.constructor=e}Ss(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),ks="html",Rs="svg",$s=function(e,t){var n,i,r,o={};if(e===ks)r=document.createElement("div");else{if(e!==Rs)throw new Error('Invalid element type "'+e+'" for createPortalNode: must be "html" or "svg".');r=document.createElementNS("http://www.w3.org/2000/svg","g")}if(t&&"object"==typeof t)for(var a=0,s=Object.entries(t.attributes);a<s.length;a++){var l=s[a],d=l[0],c=l[1];r.setAttribute(d,c)}var h={element:r,elementType:e,setPortalProps:function(e){o=e},getInitialPortalProps:function(){return o},mount:function(t,r){if(r!==i){if(h.unmount(),t!==n&&!function(e,t){if(t===ks)return e instanceof HTMLElement;if(t===Rs)return e instanceof SVGElement;throw new Error('Unrecognized element type "'+t+'" for validateElementType.')}(t,e))throw new Error('Invalid element type for portal: "'+e+'" portalNodes must be used with '+e+" elements, but OutPortal is within <"+t.tagName+">.");t.replaceChild(h.element,r),n=t,i=r}},unmount:function(e){e&&e!==i||n&&i&&(n.replaceChild(i,h.element),n=void 0,i=void 0)}};return h},Ts=function(e){function t(t){var n=e.call(this,t)||this;return n.addPropsChannel=function(){Object.assign(n.props.node,{setPortalProps:function(e){n.setState({nodeProps:e})}})},n.state={nodeProps:n.props.node.getInitialPortalProps()},n}return Zs(t,e),t.prototype.componentDidMount=function(){this.addPropsChannel()},t.prototype.componentDidUpdate=function(){this.addPropsChannel()},t.prototype.render=function(){var e=this,t=this.props,n=t.children,i=t.node;return ws.createPortal(o.Children.map(n,(function(t){return o.isValidElement(t)?o.cloneElement(t,e.state.nodeProps):t})),i.element)},t}(o.PureComponent),Ds=function(e){function t(t){var n=e.call(this,t)||this;return n.placeholderNode=o.createRef(),n.passPropsThroughPortal(),n}return Zs(t,e),t.prototype.passPropsThroughPortal=function(){var e=Object.assign({},this.props,{node:void 0});this.props.node.setPortalProps(e)},t.prototype.componentDidMount=function(){var e=this.props.node;this.currentPortalNode=e;var t=this.placeholderNode.current,n=t.parentNode;e.mount(n,t),this.passPropsThroughPortal()},t.prototype.componentDidUpdate=function(){var e=this.props.node;this.currentPortalNode&&e!==this.currentPortalNode&&(this.currentPortalNode.unmount(this.placeholderNode.current),this.currentPortalNode.setPortalProps({}),this.currentPortalNode=e);var t=this.placeholderNode.current,n=t.parentNode;e.mount(n,t),this.passPropsThroughPortal()},t.prototype.componentWillUnmount=function(){var e=this.props.node;e.unmount(this.placeholderNode.current),e.setPortalProps({})},t.prototype.render=function(){return o.createElement("div",{ref:this.placeholderNode})},t}(o.PureComponent),Ms=$s.bind(null,ks);$s.bind(null,Rs);const Is=[];function Fs(){return(0,u.v9)((e=>{var t,n;return(null==(t=e.dashboardInfo)||null==(n=t.metadata)?void 0:n.native_filter_configuration)||Is}))}function Es(){return(0,u.v9)((e=>{var t;return null==(t=e.dashboardLayout)?void 0:t.present}))}function _s(){const e=Es();return(0,o.useMemo)((()=>Object.values(e).some((e=>e.type===E.gn))),[e])}function zs(){const e=(0,u.v9)((e=>{var t;return null==(t=e.dashboardState)?void 0:t.activeTabs})),t=function(){const e=Es();return t=>{const n=Object.values(e).find((e=>{var n;return(null==(n=e.meta)?void 0:n.chartId)===t}));return null==n?void 0:n.parents.filter((t=>e[t].type===E.gn))}}();return n=>{var i;return(0,Hr.nY)(n)||"chartsInScope"in n&&(null==(i=n.chartsInScope)?void 0:i.some((n=>{const i=t(n);return 0===(null==i?void 0:i.length)||(null==i?void 0:i.every((t=>e.includes(t))))})))}}function Ps(e){const t=_s(),n=zs();return(0,o.useMemo)((()=>{let i=[];const r=[];return t?e.forEach((e=>{n(e)?i.push(e):r.push(e)})):i=e,[i,r]}),[e,t,n])}var Us=n(99612);const Os=(0,o.forwardRef)((({items:e,onOverflowingStateChange:t,dropdownContent:n,dropdownRef:i,dropdownStyle:r={},dropdownTriggerCount:l,dropdownTriggerIcon:d,dropdownTriggerText:c=(0,h.t)("More"),dropdownTriggerTooltip:u=null,forceRender:p,style:m},g)=>{const f=(0,a.Fg)(),{ref:v,width:b=0}=(0,Us.NB)(),y=(0,Er.D)(b)||0,{current:x}=v,[C,S]=(0,o.useState)([]),[w,Z]=(0,o.useState)(!1),[k,R]=(0,o.useState)(-1);let $=(0,o.useRef)(null);i&&($=i);const[T,D]=(0,o.useState)(!1),F=e=>e.reduce((([e,t],n)=>(e.push({id:n.id,element:(0,o.cloneElement)(n.element,{key:n.id})}),t.push(n.id),[e,t])),[[],[]]),[E,_]=(0,o.useMemo)((()=>F(e.slice(0,-1!==k?k:e.length))),[e,k]),[z,P]=(0,o.useMemo)((()=>-1!==k?F(e.slice(k)):[[],[]]),[e,k]);(0,o.useLayoutEffect)((()=>{const t=null==x?void 0:x.children.item(0);if(t){const{children:n}=t,i=Array.from(n);if(C.length!==e.length){if(i.length!==e.length)return void R(-1);S(i.map((e=>e.getBoundingClientRect().width)))}const r=i.findIndex((e=>e.getBoundingClientRect().right>t.getBoundingClientRect().right+1));let o=-1===r&&z.length>0?e.length-z.length:r;if(b>y){const t=null==x?void 0:x.children.item(1),n=(null==t?void 0:t.getBoundingClientRect().right)||0,r=((null==x?void 0:x.getBoundingClientRect().right)||0)-n;let a=0;for(let t=i.length;t<e.length&&(a+=C[t],a<=r);t+=1)o=t+1}R(o)}}),[x,e.length,C,z.length,y,b]),(0,o.useEffect)((()=>{t&&t({notOverflowed:_,overflowed:P})}),[_,t,P]);const U=-1!==k?e.length-k:0,O=(0,o.useMemo)((()=>n||U?(0,V.tZ)("div",{css:s.iv`
              display: flex;
              flex-direction: column;
              gap: ${4*f.gridUnit}px;
            `,style:r,ref:$,children:n?n(z):z.map((e=>e.element))}):null),[n,U,f.gridUnit,r,z]);return(0,o.useLayoutEffect)((()=>{w&&setTimeout((()=>{$.current&&D($.current.scrollHeight>500)}),100)}),[w]),(0,o.useImperativeHandle)(g,(()=>({...v.current,open:()=>Z(!0)})),[v]),(0,o.useEffect)((()=>(document.onscroll=w?()=>Z(!1):null,()=>{document.onscroll=null})),[w]),(0,V.BX)("div",{ref:v,css:s.iv`
          display: flex;
          align-items: center;
        `,children:[(0,V.tZ)("div",{css:s.iv`
            display: flex;
            align-items: center;
            gap: ${4*f.gridUnit}px;
            margin-right: ${4*f.gridUnit}px;
            min-width: 0px;
          `,style:m,children:E.map((e=>e.element))}),O&&(0,V.BX)(V.HY,{children:[(0,V.tZ)(s.xB,{styles:s.iv`
                .ant-popover-inner-content {
                  max-height: ${500}px;
                  overflow: ${T?"auto":"visible"};
                  padding: ${3*f.gridUnit}px ${4*f.gridUnit}px;

                  // Some OS versions only show the scroll when hovering.
                  // These settings will make the scroll always visible.
                  ::-webkit-scrollbar {
                    -webkit-appearance: none;
                    width: 14px;
                  }
                  ::-webkit-scrollbar-thumb {
                    border-radius: 9px;
                    background-color: ${f.colors.grayscale.light1};
                    border: 3px solid transparent;
                    background-clip: content-box;
                  }
                  ::-webkit-scrollbar-track {
                    background-color: ${f.colors.grayscale.light4};
                    border-left: 1px solid ${f.colors.grayscale.light2};
                  }
                }
              `}),(0,V.tZ)(Hn.J,{content:O,trigger:"click",visible:w,onVisibleChange:e=>Z(e),placement:"bottom",forceRender:p,children:(0,V.tZ)(N.u,{title:u,children:(0,V.BX)(M.Z,{buttonStyle:"secondary",children:[d,c,(0,V.tZ)(_r.Z,{count:null!=l?l:U,color:(null!=l?l:U)>0?f.colors.primary.base:f.colors.grayscale.light1,showZero:!0,css:s.iv`
                      margin-left: ${2*f.gridUnit}px;
                    `}),(0,V.tZ)(I.Z.DownOutlined,{iconSize:"m",iconColor:f.colors.grayscale.light1,css:s.iv`
                      .anticon {
                        display: flex;
                      }
                    `})]})})})]})]})})),Bs=({filtersOutOfScope:e,renderer:t,hasTopMargin:n,horizontalOverflow:i,forceRender:r=!1})=>(0,V.tZ)(T.Ol,{ghost:!0,bordered:!0,expandIconPosition:"right",collapsible:0===e.length?"disabled":void 0,css:e=>i?(0,s.iv)("&.ant-collapse>.ant-collapse-item{&>.ant-collapse-header{padding:0;&>.ant-collapse-arrow{right:0;padding:0;}}& .ant-collapse-content-box{padding:",4*e.gridUnit,"px 0 0;margin-bottom:",-4*e.gridUnit,"px;}}",""):(0,s.iv)("&.ant-collapse{margin-top:",n?6*e.gridUnit:0,"px;&>.ant-collapse-item{&>.ant-collapse-header{padding-left:0;padding-bottom:",2*e.gridUnit,"px;&>.ant-collapse-arrow{right:",e.gridUnit,"px;}}& .ant-collapse-content-box{padding:",4*e.gridUnit,"px 0 0;}}}",""),children:(0,V.tZ)(T.Ol.Panel,{forceRender:r,header:(0,V.tZ)("span",{css:e=>(0,s.iv)("font-size:",e.typography.sizes.s,"px;",""),children:(0,h.t)("Filters out of scope (%d)",e.length)}),children:e.map(t)},"1")});var Ns=n(3297),qs=n(28368),Vs=n.n(qs),As=n(88274);const Ks=a.iK.div`
  display: flex;
  flex-direction: row;
  background-color: ${({level:e,theme:t})=>t.colors[e].light2};
  border-radius: ${({theme:e})=>e.borderRadius}px;
  border: 1px solid ${({level:e,theme:t})=>t.colors[e].base};
  color: ${({level:e,theme:t})=>t.colors[e].dark2};
  padding: ${({theme:e})=>2*e.gridUnit}px;
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
  width: 100%;
`,js=a.iK.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
  overflow: hidden;
`,Ls=a.iK.span`
  font-weight: ${({theme:e})=>e.typography.weights.bold};
`;function Xs({body:e,level:t="error",title:n}){const i=(0,a.Fg)().colors[t].base;return(0,V.BX)(Ks,{level:t,role:"alert",children:["error"===t?(0,V.tZ)(I.Z.ErrorSolid,{iconColor:i}):(0,V.tZ)(I.Z.WarningSolid,{iconColor:i}),(0,V.BX)(js,{children:[(0,V.tZ)(Ls,{children:n}),(0,V.tZ)("p",{children:e})]})]})}var Hs=n(72875),Ws=n(77997),Ys=n(74448),Gs=n(52794);const Js=C()(((e,t)=>{e(t?(0,Gs.qN)(t):(0,Gs.DU)())}),ut.oP),Qs=C()(((e,t)=>{e(t?(0,Gs.$7)(t):(0,Gs.Up)())}),ut.oP),el=()=>(0,u.v9)((e=>{var t;return{outlinedFilterId:null==(t=Xo(e.dashboardState.directPathToChild||[]))?void 0:t.native_filter,lastUpdated:e.dashboardState.directPathLastUpdated}})),tl=a.iK.div`
  & > div {
    height: auto !important;
    min-height: ${32}px;
  }
`,nl=[{data:[{}]}],il=[yi.cg.NativeFilter],rl=({dataMaskSelected:e,filter:t,onFilterSelectionChange:n,inView:i=!0,showOverflow:r,parentRef:a,setFilterActive:s,orientation:l=ft.Bp.Vertical,overflow:c=!1,validateStatus:p})=>{var m,g;const{id:f,targets:v,filterType:b,adhoc_filters:y,time_range:x}=t,C=(0,bi.Z)().get(b),S=function(e,t){const n=(0,u.v9)((t=>{var n;return null==(n=t.nativeFilters.filters[e])?void 0:n.cascadeParentIds}),u.wU);return(0,o.useMemo)((()=>{let e={};return(0,vi.Z)(n).forEach((n=>{const i=null==t?void 0:t[n];e=(0,Vr.on)(e,null==i?void 0:i.extraFormData)})),e}),[t,n])}(f,e),w=(()=>{const e=(0,u.v9)((e=>e.dashboardState.isRefreshing)),t=(0,u.v9)((e=>e.dashboardState.isFiltersRefreshing));return!e&&t})(),[Z,k]=(0,o.useState)([]),R=(0,u.v9)((e=>e.dashboardInfo.id)),[$,T]=(0,o.useState)(),[M,I]=(0,o.useState)({inView:!1}),[F,E]=(0,o.useState)({}),[_,z]=(0,o.useState)(i),P=(0,o.useRef)(null),[U]=v,{datasetId:O,column:B={}}=U,{name:N}=B,q=!!O,[A,K]=(0,o.useState)(q),[j,L]=(0,o.useState)(!1),X=(0,u.I0)(),{outlinedFilterId:H,lastUpdated:W}=el(),Y=(0,o.useCallback)((()=>{L(!1),K(!1),w&&X((0,Bn.YC)())}),[X,w]);(0,o.useEffect)((()=>{!_&&i&&z(!0)}),[i,_,z]),(0,o.useEffect)((()=>{var e;if(!_)return;const n=(0,Vr.zi)({...t,datasetId:O,dependencies:S,groupby:N,adhoc_filters:y,time_range:x,dashboardId:R}),i=(null==(e=t.dataMask)?void 0:e.ownState)||{};if(!j&&(!Vs()(M,n,((e,t,n)=>"url_params"===n||void 0))||!ii()(F,i)||w)){if(I(n),E(i),!q)return;L(!0),(0,ei.getChartDataRequest)({formData:n,force:w,ownState:i}).then((({response:e,json:t})=>{if((0,d.cr)(d.TT.GlobalAsyncQueries)){const n="result"in t?t.result[0]:t;if(200===e.status)k([n]),Y();else{if(202!==e.status)throw new Error(`Received unexpected response status (${e.status}) while fetching chart data`);(0,Ws.YJ)(n).then((e=>{k(e),Y()})).catch((e=>{(0,Xn.O$)(e).then((e=>{T(e),Y()}))}))}}else k(t.result),T(void 0),Y()})).catch((e=>{(0,Xn.O$)(e).then((e=>{T(e),Y()}))}))}}),[_,S,O,N,Y,JSON.stringify(t),q,j,w]),(0,o.useEffect)((()=>{H&&H===t.id&&setTimeout((()=>{var e;null==P||null==(e=P.current)||e.focus()}),c?ut.oP:0)}),[P,H,W,t.id,c]);const G=(0,o.useCallback)((e=>n(t,e)),[t,n]),J=(0,o.useCallback)((()=>{H!==f&&Qs(X,f)}),[X,f,H]),Q=(0,o.useCallback)((()=>{Qs(X),H===f&&X((0,Bn.E2)([]))}),[X,f,H]),ee=(0,o.useCallback)((()=>Js(X,f)),[X,f]),te=(0,o.useCallback)((()=>Js(X)),[X]),ne=(0,o.useMemo)((()=>({setDataMask:G,setHoveredFilter:ee,unsetHoveredFilter:te,setFocusedFilter:J,unsetFocusedFilter:Q,setFilterActive:s})),[G,s,ee,te,J,Q]),ie=(0,o.useMemo)((()=>{var e;return{...null==(e=t.dataMask)?void 0:e.filterState,validateStatus:p}}),[null==(m=t.dataMask)?void 0:m.filterState,p]),re=(0,o.useMemo)((()=>({filterBarOrientation:l,isOverflowingFilterBar:c})),[l,c]);var oe;return $?(0,V.tZ)(Hs.Z,{error:null==(oe=$.errors)?void 0:oe[0],fallback:(0,V.tZ)(Xs,{title:(0,h.t)("Cannot load filter"),body:$.error,level:"error"})}):(0,V.tZ)(tl,{children:A?(0,V.tZ)(D.Z,{position:"inline-centered"}):(0,V.tZ)(As.Z,{height:32,width:Ys.h2,showOverflow:r,formData:M,displaySettings:re,parentRef:a,inputRef:P,queriesData:q?Z:nl,chartType:b,behaviors:il,filterState:ie,ownState:null==(g=t.dataMask)?void 0:g.ownState,enableNoResults:null==C?void 0:C.enableNoResults,isRefreshing:j,hooks:ne})})},ol=(0,o.memo)(rl);var al=n(51794);const sl=e=>{var t,n;return(null==e||null==(t=e.meta)?void 0:t.text)||(null==e||null==(n=e.meta)?void 0:n.defaultText)||""},ll=e=>{var t,n;return(null==e||null==(t=e.meta)?void 0:t.sliceNameOverride)||(null==e||null==(n=e.meta)?void 0:n.sliceName)||(null==e?void 0:e.id)||""},dl=a.iK.div`
  ${({theme:e})=>s.iv`
    display: flex;
    align-items: center;
    margin: ${e.gridUnit}px 0;
    font-size: ${e.typography.sizes.s}px;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    & .ant-tooltip-open {
      display: inline-flex;
    }
  `};
`,cl=a.iK.span`
  ${({theme:e})=>s.iv`
    color: ${e.colors.grayscale.base};
    padding-right: ${4*e.gridUnit}px;
    margin-right: auto;
    text-transform: uppercase;
    white-space: nowrap;
  `};
`,hl=a.iK.div`
  ${({theme:e})=>s.iv`
    color: ${e.colors.grayscale.dark1};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline;
  `};
`,ul=a.iK.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,pl=a.iK.span`
  text-decoration: underline;
  cursor: pointer;
`,ml=a.iK.span`
  ${({theme:e})=>s.iv`
    color: ${e.colors.primary.base};
  `}
`,gl=a.iK.ul`
  ${({theme:e})=>s.iv`
    padding-left: ${3*e.gridUnit}px;
    margin-bottom: 0;
  `};
`,fl=a.iK.span`
  font-weight: ${({theme:e})=>e.typography.weights.bold};
`,vl=a.iK.div`
  min-width: 0;
  display: inline-flex;
  white-space: nowrap;
`,bl=a.iK.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`,yl=({title:e,children:t,...n})=>(0,V.tZ)(N.u,{title:e,placement:"bottom",overlayClassName:"filter-card-tooltip",...n,children:(0,V.tZ)(vl,{children:t})}),xl=(e,t)=>Array.isArray(e)&&e.length>0?(0,V.BX)(V.HY,{children:[(0,V.BX)(fl,{children:[t,":"]}),(0,V.tZ)(gl,{children:e.map((e=>(0,V.tZ)("li",{children:e})))})]}):null,Cl=(0,o.memo)((({filter:e})=>{const t=(e=>{const t=(0,u.v9)((e=>e.dashboardLayout.present)),n=Mi();return(0,o.useMemo)((()=>{var i;let r;const o=t[_._4].children[0];if(o.startsWith("TABS-")&&(r=t[o].children),0===e.scope.rootPath.length)return;if(0===e.scope.excluded.length&&(e.scope.rootPath[0]===_._4||null!=(i=r)&&i.every((t=>e.scope.rootPath.includes(t)))))return{all:[(0,h.t)("All charts")]};if(0===e.scope.excluded.length&&r)return{tabs:e.scope.rootPath.map((e=>sl(t[e]))).filter(Boolean)};const a=Object.values(t).filter((e=>e.type===E.dW));if(e.scope.rootPath[0]===_._4)return{charts:n.filter((t=>!e.scope.excluded.includes(t))).map((e=>{const t=a.find((t=>t.meta.chartId===e));return ll(t)})).filter(Boolean)};if(r){const i=[...e.scope.rootPath],r=a.filter((e=>e.parents.some((e=>i.includes(e)))));e.scope.excluded.forEach((e=>{const t=i.findIndex((t=>{var n;return null==(n=r.find((t=>t.meta.chartId===e)))?void 0:n.parents.includes(t)}));t>-1&&i.splice(t,1)}));const o=n.filter((t=>!e.scope.excluded.includes(t))).reduce(((e,t)=>{const n=r.find((e=>e.meta.chartId===t&&e.parents.every((e=>!i.includes(e)))));return n&&e.push(n),e}),[]);return{tabs:i.map((e=>sl(t[e]))).filter(Boolean),charts:o.map(ll).filter(Boolean)}}}),[n,e.scope.excluded,e.scope.rootPath,t])})(e),[n,i,r,a]=(0,al.Z)(),s=(0,o.useMemo)((()=>0!==r&&t?t.all?(0,V.tZ)("span",{children:(0,h.t)("All charts")}):(0,V.BX)("div",{children:[xl(t.tabs,(0,h.t)("Tabs")),xl(t.charts,(0,h.t)("Charts"))]}):null),[r,t]);return(0,V.BX)(dl,{children:[(0,V.tZ)(cl,{children:(0,h.t)("Scope")}),(0,V.BX)(yl,{title:s,children:[(0,V.tZ)(hl,{ref:n,children:t?Object.values(t).flat().map(((e,t)=>(0,V.tZ)("span",{children:0===t?e:`, ${e}`},e))):(0,h.t)("None")}),a&&(0,V.BX)(ml,{ref:i,children:["+",r]})]})]})})),Sl=({dependency:e,hasSeparator:t})=>{const n=(0,u.I0)(),i=(0,o.useCallback)((()=>{n((0,Bn.E2)([e.id]))}),[e.id,n]);return(0,V.BX)("span",{children:[t&&(0,V.tZ)("span",{children:", "}),(0,V.tZ)(pl,{role:"button",onClick:i,tabIndex:0,children:e.name})]})},wl=(0,o.memo)((({filter:e})=>{const t=(e=>{const t=(0,vi.Z)(e.cascadeParentIds);return(0,u.v9)((e=>0===t.length?[]:t.reduce(((t,n)=>(t.push(e.nativeFilters.filters[n]),t)),[])))})(e),[n,i,r,l]=(0,al.Z)(),d=(0,a.Fg)(),c=(0,o.useMemo)((()=>r>0&&t?(0,V.tZ)(gl,{children:t.map((e=>(0,V.tZ)("li",{children:(0,V.tZ)(Sl,{dependency:e})})))}):null),[r,t]);return Array.isArray(t)&&0!==t.length?(0,V.BX)(dl,{children:[(0,V.BX)(cl,{css:s.iv`
          display: inline-flex;
          align-items: center;
        `,children:[(0,h.t)("Dependent on")," ",(0,V.tZ)(yl,{title:(0,h.t)("Filter only displays values relevant to selections made in other filters."),children:(0,V.tZ)(I.Z.Info,{iconSize:"m",iconColor:d.colors.grayscale.light1,css:s.iv`
              margin-left: ${d.gridUnit}px;
            `})})]}),(0,V.BX)(yl,{title:c,children:[(0,V.tZ)(hl,{ref:n,children:t.map(((e,t)=>(0,V.tZ)(Sl,{dependency:e,hasSeparator:0!==t},e.id)))}),l&&(0,V.BX)(ml,{ref:i,children:["+",r]})]})]}):null}));var Zl=n(89734),kl=n.n(Zl),Rl=n(44908),$l=n.n(Rl),Tl=n(38325);const Dl=a.iK.div`
  ${({theme:e})=>`\n  cursor: pointer;\n  margin: ${4*e.gridUnit}px;\n  color: ${e.colors.primary.base};\n  &:hover {\n    color: ${e.colors.primary.dark1};\n  }\n`}
`,Ml=a.iK.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`,Il=[{label:(0,h.t)("Filter"),type:Hr.BE.NativeFilter},{label:(0,h.t)("Divider"),type:Hr.BE.Divider}],Fl=({getFilterTitle:e,onChange:t,onAdd:n,onRemove:i,onRearrange:r,restoreFilter:l,currentFilterId:d,filters:c,removedFilters:u,erroredFilters:p})=>{const m=(0,o.useRef)(null),g=(0,a.Fg)(),f=(0,V.tZ)(ht.MainNav,{mode:"horizontal",children:Il.map((e=>(0,V.tZ)(ht.MainNav.Item,{onClick:()=>{return t=e.type,n(t),void setTimeout((()=>{var e;const t=document.getElementById("native-filters-tabs");if(t){const e=t.getElementsByClassName("ant-tabs-nav-list")[0];e.scrollTop=e.scrollHeight}null==m||null==(e=m.current)||null==e.scroll||e.scroll({top:m.current.scrollHeight,behavior:"smooth"})}),0);var t},children:e.label})))});return(0,V.BX)(Ml,{children:[(0,V.tZ)(T.Gj,{overlay:f,arrow:!0,placement:"topLeft",trigger:["hover"],children:(0,V.BX)(Dl,{children:[(0,V.tZ)("div",{className:"fa fa-plus"})," ",(0,V.tZ)("span",{children:(0,h.t)("Add filters and dividers")})]})}),(0,V.tZ)("div",{css:(0,s.iv)({height:"100%",overflowY:"auto",marginLeft:3*g.gridUnit},"",""),children:(0,V.tZ)(or,{ref:m,filters:c,currentFilterId:d,removedFilters:u,getFilterTitle:e,erroredFilters:p,onChange:t,onRemove:i,onRearrange:r,restoreFilter:l})})]})},El=a.iK.div`
  display: flex;
  height: 100%;
`,_l=a.iK.div`
  flex-grow: 3;
  margin-left: ${({theme:e})=>-1*e.gridUnit-1};
`,zl=a.iK.div`
  min-width: 300px;
  max-width: 300px;
  border-right: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
`,Pl=({getFilterTitle:e,onChange:t,onRemove:n,onRearrange:i,restoreFilter:r,onAdd:o,erroredFilters:a,children:s,currentFilterId:l,filters:d,removedFilters:c})=>(0,V.BX)(El,{children:[(0,V.tZ)(zl,{children:(0,V.tZ)(Fl,{currentFilterId:l,filters:d,removedFilters:c,erroredFilters:a,getFilterTitle:e,onChange:t,onAdd:e=>o(e),onRearrange:i,onRemove:e=>n(e),restoreFilter:r})}),(0,V.tZ)(_l,{children:s})]});var Ul=n(88889),Ol=n(15926),Bl=n.n(Ol),Nl=n(43700),ql=n(6412),Vl=n(1090),Al=n(61890),Kl=n(78676),jl=n(78423);const Ll=a.iK.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: ${({theme:e})=>10*e.gridUnit}px;
  padding-top: ${({theme:e})=>2*e.gridUnit+2}px;

  .checkbox {
    margin-bottom: ${({theme:e,checked:t})=>t?e.gridUnit:0}px;
  }

  & > div {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }
`,Xl=a.iK.div`
  margin-left: ${({theme:e})=>6*e.gridUnit}px;
`,Hl=e=>{const{checked:t,disabled:n,title:i,tooltip:r,children:a,onChange:s=(()=>{}),initialValue:l=!1}=e,[d,c]=(0,o.useState)(l);return(0,o.useEffect)((()=>{void 0!==t&&c(t)}),[t]),(0,V.BX)(Ll,{checked:d,children:[(0,V.tZ)(T.r4,{className:"checkbox",checked:d,disabled:n,onChange:e=>{const n=e.target.checked;void 0===t&&c(n),s(n)},children:(0,V.BX)(V.HY,{children:[i," ",r&&(0,V.tZ)(U.V,{placement:"top",tooltip:r})]})}),d&&(0,V.tZ)(Xl,{children:a})]})};var Wl=n(28291);function Yl({allowClear:e=!1,filterValues:t=(()=>!0),form:n,formField:i="column",filterId:r,datasetId:a,value:s,onChange:l,mode:d}){var c;const[u,p]=(0,o.useState)(),[m,g]=(0,o.useState)(!1),{addDangerToast:f}=(0,fn.e1)(),v=(0,o.useCallback)((()=>{n.setFields([{name:["filters",r,i],touched:!1,value:null}])}),[n,r,i]),b=(0,o.useMemo)((()=>(0,vi.Z)(u).filter(t).map((e=>e.column_name)).map((e=>({label:e,value:e})))),[u,t]),y=null==(c=n.getFieldValue("filters"))?void 0:c[r].filterType,x=(0,o.useMemo)((()=>null==u?void 0:u.find((e=>e.column_name===s))),[u,s]);return(0,o.useEffect)((()=>{x&&!t(x)&&v()}),[x,y,v]),(0,Wl.S)(a,(e=>{null!=e&&(p([]),v()),null!=a&&(g(!0),(0,ql.e)({endpoint:`/api/v1/dataset/${a}?q=${Bl().encode({columns:["columns.column_name","columns.is_dttm","columns.type_generic"]})}`}).then((({json:{result:e}})=>{const t=Array.isArray(s)?s:[s];e.columns.some((e=>null==t?void 0:t.includes(e.column_name)))||v(),p(e.columns)}),(async e=>{const{error:t,message:n}=await(0,Xn.O$)(e);let i=n||t||(0,h.t)("An error has occurred");"Forbidden"===n&&(i=(0,h.t)("You do not have permission to edit this dashboard")),f(i)})).finally((()=>g(!1))))})),(0,V.tZ)(T.Ph,{mode:d,value:"multiple"===d?s||[]:s,ariaLabel:(0,h.t)("Column select"),loading:m,onChange:l,options:b,placeholder:(0,h.t)("Select a column"),notFoundContent:(0,h.t)("No compatible columns found"),showSearch:!0,allowClear:e})}const Gl=({onChange:e,value:t})=>{const n=(0,o.useCallback)((({error:e,message:t})=>{let n=t||e||(0,h.t)("An error has occurred");return"Forbidden"===t&&(n=(0,h.t)("You do not have permission to edit this dashboard")),n}),[]);return(0,V.tZ)(T.qb,{ariaLabel:(0,h.t)("Dataset"),value:t,options:async(e,t,i)=>{const r=Bl().encode({columns:["id","table_name","database.database_name","schema"],filters:[{col:"table_name",opr:"ct",value:e}],page:t,page_size:i,order_column:"table_name",order_direction:"asc"});return(0,ql.e)({endpoint:`/api/v1/dataset/?q=${r}`}).then((e=>({data:e.json.result.map((e=>({customLabel:(0,jl.V)(e),label:e.table_name,value:e.id}))),totalCount:e.json.count}))).catch((async e=>{const t=n(await(0,Xn.O$)(e));throw new Error(t)}))},onChange:e,notFoundContent:(0,h.t)("No compatible datasets found"),placeholder:(0,h.t)("Select a dataset")})},Jl=e=>(0,o.useMemo)((()=>(0,V.tZ)(Gl,{...e})),[]),Ql={filter_time:[Ul.Z.Temporal],filter_timegrain:[Ul.Z.Temporal],filter_timecolumn:[Ul.Z.Temporal],filter_select:[Ul.Z.Boolean,Ul.Z.String,Ul.Z.Numeric,Ul.Z.Temporal],filter_range:[Ul.Z.Numeric]},ed=({hasDefaultValue:e,filterId:t,hasDataset:n,form:i,setDataMask:r,formData:o,enableNoResults:a})=>{var s,l,d,c;const u=null==(s=i.getFieldValue("filters"))?void 0:s[t],p=null==u?void 0:u.defaultValueQueriesData,m=n&&null===p,g=null==u||null==(l=u.defaultDataMask)||null==(d=l.filterState)?void 0:d.value,f=e&&null==g;return m?(0,V.tZ)(D.Z,{position:"inline-centered"}):(0,V.tZ)(As.Z,{height:32,width:"filter_time"===(null==u?void 0:u.filterType)?350:270,appSection:yi.Tr.FilterConfigModal,behaviors:[yi.cg.NativeFilter],formData:o,queriesData:n?null==u?void 0:u.defaultValueQueriesData:[{data:[{}]}],chartType:null==u?void 0:u.filterType,hooks:{setDataMask:r},enableNoResults:a,filterState:{...null==u||null==(c=u.defaultDataMask)?void 0:c.filterState,validateMessage:f&&(0,h.t)("Value is required"),validateStatus:f&&"error"}})};var td,nd=n(15208);!function(e){e[e.All=0]="All",e[e.Specific=1]="Specific"}(td||(td={}));const id=a.iK.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: ${({theme:e})=>e.gridUnit}px;
  }
  padding: 0px ${({theme:e})=>4*e.gridUnit}px;
`,rd=(0,a.iK)(T.qz.Item)`
  margin-bottom: 0;
`,od=({pathToFormValue:e=[],formScopingType:t,formFilterScope:n,forceUpdate:i,filterScope:r,updateFormValues:a,chartId:s,initiallyExcludedCharts:l})=>{const[d]=(0,o.useState)(r||zi(s,l)),c=(0,o.useRef)(d),[u]=(0,o.useState)(Pi(d,s)?td.All:td.Specific),[p,m]=(0,o.useState)(!!r),g=(0,o.useCallback)((e=>{t===td.Specific&&(c.current=e.scope),a(e),m(!0)}),[t,a]),f=(0,o.useCallback)((()=>{if(r||p)return;const e=zi(s,l);a({scope:e,scoping:Pi(e,s)?td.All:td.Specific})}),[s,r,p,l,a]);return(0,nd.d)(f),(0,V.BX)(id,{children:[(0,V.tZ)(rd,{name:[...e,"scoping"],initialValue:u,children:(0,V.BX)(Nt.Y.Group,{onChange:({target:{value:e}})=>{const t=e===td.All?zi(s):c.current;a({scope:t}),m(!0),i()},children:[(0,V.tZ)(Nt.Y,{value:td.All,children:(0,h.t)("Apply to all panels")}),(0,V.tZ)(Nt.Y,{value:td.Specific,children:(0,h.t)("Apply to specific panels")})]})}),(0,V.tZ)(T.ZT.Text,{type:"secondary",children:(null!=t?t:u)===td.Specific?(0,h.t)("Only selected panels will be affected by this filter"):(0,h.t)("All panels with this column will be affected by this filter")}),(null!=t?t:u)===td.Specific&&(0,V.tZ)(Bi,{updateFormValues:g,initialScope:d,formScope:n,forceUpdate:i,chartId:s,initiallyExcludedCharts:l}),(0,V.tZ)(rd,{name:[...e,"scope"],hidden:!0,initialValue:d})]})};var ad=n(37687),sd=n(10752),ld=n.n(sd);const dd="filters",cd=(e=!0)=>{const[,t]=(0,o.useState)({});return(0,o.useCallback)((()=>{e&&t({})}),[e])},hd=(e,t,n)=>{const i=e.getFieldValue(dd)||{};e.setFields([{name:dd,value:{...i,[t]:{...i[t],...n}}}])},ud=e=>{const t=(0,vi.Z)(null==e?void 0:e.column_types);return 0===t.length||t.includes(Ul.Z.Temporal)},pd=(0,a.iK)(Ft.xJ)`
  margin-bottom: 0;
`;const md=a.iK.div`
  display: flex;
  flex-direction: column;
  height: 400px; // arbitrary
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.colors.grayscale.base};
`,gd=({onClick:e})=>(0,V.BX)(md,{children:[(0,V.tZ)("p",{children:(0,h.t)("You have removed this filter.")}),(0,V.tZ)("div",{children:(0,V.tZ)(M.Z,{buttonStyle:"primary",onClick:e,children:(0,h.t)("Restore Filter")})})]}),fd=a.iK.div`
  display: flex;
  flex-direction: column;
`,vd=a.iK.div`
  ${({theme:e})=>`\n    display: inline-flex;\n    flex-direction: row;\n    align-items: center;\n    cursor: pointer;\n    color: ${e.colors.primary.base};\n    &:hover {\n      color: ${e.colors.primary.dark1};\n    }\n  `}
`,bd=(0,a.iK)(I.Z.Trash)`
  ${({theme:e})=>`\n    cursor: pointer;\n    margin-left: ${2*e.gridUnit}px;\n    color: ${e.colors.grayscale.base};\n    &:hover {\n      color: ${e.colors.grayscale.dark1};\n    }\n  `}
`,yd=a.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-bottom: ${e.gridUnit}px;\n\n    & > div {\n      width: 270px;\n    }\n  `}
`,xd=a.iK.div`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
`,Cd=({availableFilters:e,selection:t,onChange:n,onDelete:i})=>{let r=e.find((e=>e.value===t)),o=e;return r||(r={label:(0,h.t)("(deleted or invalid type)"),value:t},o=[r,...o]),(0,V.BX)(yd,{children:[(0,V.tZ)(T.Ph,{ariaLabel:(0,h.t)("Limit type"),labelInValue:!0,options:o,onChange:e=>n(t,e.value),value:r}),(0,V.tZ)(bd,{iconSize:"xl",onClick:()=>i(t)})]})},Sd=({availableFilters:e=[],dependencies:t=[],onDependenciesChange:n})=>{const[i,r]=(0,o.useState)(t),a=e=>{r(e),n(e)},s=(e,t)=>{const n=i.findIndex((t=>t===e)),r=[...i];r[n]=t,a(r)},l=e=>{const t=[...i];t.splice(i.indexOf(e),1),a(t)};return 0===e.length?(0,V.tZ)("span",{children:(0,h.t)("No available filters.")}):(0,V.BX)(V.HY,{children:[i.map((t=>(0,V.tZ)(Cd,{selection:t,availableFilters:e.filter((e=>e.value===t||!i.includes(e.value))),onChange:s,onDelete:l},t))),e.length>i.length&&(0,V.BX)(vd,{role:"button",onClick:()=>{const t=e.find((e=>!i.includes(e.value)));if(t){const e=[...i];e.push(t.value),a(e)}},children:[(0,V.tZ)(I.Z.PlusSmall,{}),(0,h.t)("Add filter")]})]})},wd=({availableFilters:e=[],dependencies:t=[],onDependenciesChange:n,getDependencySuggestion:i,children:r})=>{const o=e.length>0,a=t.length>0;return(0,V.tZ)(fd,{children:(0,V.BX)(Hl,{title:(0,h.t)("Values are dependent on other filters"),initialValue:a,onChange:e=>{const t=[];e&&!a&&o&&t.push(i()),n(t)},tooltip:(0,h.t)("Values selected in other filters will affect the filter options to only show relevant values"),children:[a&&(0,V.tZ)(xd,{children:(0,h.t)("Values dependent on")}),(0,V.tZ)(Sd,{availableFilters:e,dependencies:t,onDependenciesChange:n,getDependencySuggestion:i}),r]})})},Zd=(0,a.iK)(g.ZP.TabPane)`
  padding: ${({theme:e})=>4*e.gridUnit}px 0px;
`,kd=a.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    padding: 0px ${4*e.gridUnit}px;\n  `}
`,Rd=a.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0px ${({theme:e})=>4*e.gridUnit}px;
`,$d=["enableEmptyFilter","defaultToFirstItem","multiSelect","searchAllOptions","inverseSelection"],Td=(0,a.iK)(Ft.xJ)`
  width: ${({expanded:e})=>e?"49%":"260px"};
  margin-bottom: ${({theme:e})=>4*e.gridUnit}px;

  & .ant-form-item-label {
    padding-bottom: 0;
  }

  & .ant-form-item-control-input {
    min-height: ${({theme:e})=>10*e.gridUnit}px;
  }
`,Dd=(0,a.iK)(Ft.xJ)`
  margin-bottom: 0;
  padding-bottom: 0;
  min-width: ${({expanded:e})=>e?"50%":"260px"};

  & .ant-form-item-label {
    padding-bottom: 0;
  }

  .ant-form-item-control-input-content > div > div {
    height: auto;
  }

  & .ant-form-item-control-input {
    min-height: ${({theme:e})=>10*e.gridUnit}px;
  }
`,Md=(0,a.iK)(Ft.xJ)`
  min-width: ${({expanded:e})=>e?"50%":"260px"};

  & .ant-form-item-label {
    padding-bottom: 0;
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  .ant-form-item-control-input-content > div > div {
    height: auto;
  }

  .ant-form-item-extra {
    display: none;
  }

  & .ant-form-item-control-input {
    height: auto;
  }
`,Id=a.iK.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  text-transform: uppercase;
`,Fd=(0,a.iK)(Ft.xJ)`
  margin-bottom: 0;
`,Ed=a.iK.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,_d=(0,a.iK)(I.Z.Refresh)`
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
  color: ${({theme:e})=>e.colors.primary.base};
`,zd=(0,a.iK)(Nl.Z)`
  border-left: 0;
  border-top: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  border-radius: 0;

  .ant-collapse-header {
    border-bottom: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-top: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    margin-top: -1px;
    border-radius: 0;
  }

  .ant-collapse-content {
    border: 0;
  }

  .ant-collapse-content-box {
    padding-top: ${({theme:e})=>2*e.gridUnit}px;
  }

  &.ant-collapse > .ant-collapse-item {
    border: 0;
    border-radius: 0;
  }
`,Pd=(0,a.iK)(g.ZP)`
  .ant-tabs-nav {
    position: sticky;
    top: 0;
    background: ${({theme:e})=>e.colors.grayscale.light5};
    z-index: 1;
  }

  .ant-tabs-nav-list {
    padding: 0;
  }

  .ant-form-item-label {
    padding-bottom: 0;
  }
`,Ud=a.iK.span`
  color: ${({theme:e})=>e.colors.error.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin-left: ${({theme:e})=>e.gridUnit-1}px;
  &:before {
    content: '*';
  }
`,Od=a.iK.div`
  ${({theme:e,expanded:t})=>`\n    width: ${t?"49%":"260px"};\n    font-size: ${e.typography.sizes.s}px;\n    color: ${e.colors.grayscale.light1};\n    margin:\n      ${2*-e.gridUnit}px\n      0px\n      ${4*e.gridUnit}px\n      ${4*e.gridUnit}px;\n  `}
`,Bd={configuration:{key:"configuration",name:(0,h.t)("Settings")},scoping:{key:"scoping",name:(0,h.t)("Scoping")}},Nd={configuration:{key:"configuration",name:(0,h.t)("Filter Configuration")},settings:{key:"settings",name:(0,h.t)("Filter Settings")}},qd=["filter_select","filter_range"],Vd={[(0,h.t)("Select filter")]:(0,h.t)("Value"),[(0,h.t)("Range filter")]:(0,h.t)("Numerical range"),[(0,h.t)("Time filter")]:(0,h.t)("Time range"),[(0,h.t)("Time column")]:(0,h.t)("Time column"),[(0,h.t)("Time grain")]:(0,h.t)("Time grain"),[(0,h.t)("Group By")]:(0,h.t)("Group by")},Ad=({expanded:e,filterId:t,filterToEdit:n,removedFilters:i,form:r,getAvailableFilters:a,activeFilterPanelKeys:l,restoreFilter:c,handleActiveFilterPanelChange:p,setErroredFilters:m,validateDependencies:g,getDependencySuggestion:f,isActive:v},b)=>{var y,x,C,S,w,Z,k,R,M,I,F,E,_,z,P,O,B,q,A,K,j,L,X,H,W;const Y=!!i[t],[G,J]=(0,o.useState)(),[Q,ee]=(0,o.useState)([]),[te,ne]=(0,o.useState)(Bd.configuration.key),ie=(0,u.v9)((e=>e.dashboardInfo.id)),[re,oe]=(0,o.useState)(null),ae=cd(v),[se,le]=(0,o.useState)(),de=(0,o.useMemo)((()=>({})),[]),ce=r.getFieldValue("filters"),he=null==ce?void 0:ce[t],ue=he||re||de,pe=(null==ue?void 0:ue.dependencies)||(null==n?void 0:n.cascadeParentIds)||[],me=(0,bi.Z)().items,ge=Object.entries(me).filter((([,{value:e}])=>{var t;return null==(t=e.behaviors)?void 0:t.includes(yi.cg.NativeFilter)})).map((([e])=>e)),fe=(0,u.v9)((({datasources:e})=>e)),ve=(0,u.v9)((({charts:e})=>e)),be=(0,o.useMemo)((()=>Object.values(fe).some((e=>ud(e)))),[fe]),ye=(0,o.useMemo)((()=>{const e=Object.values(fe).find((e=>{var t;return e.id===(null==ue||null==(t=ue.dataset)?void 0:t.value)}));return!e||ud(e)}),[null==ue||null==(y=ue.dataset)?void 0:y.value,fe]),xe=!(null==(x=me[null==ue?void 0:ue.filterType])||null==(C=x.value)||!C.datasourceCount),Ce=null!=(S=null!=(w=null==ue||null==(Z=ue.dataset)?void 0:Z.value)?w:null==n||null==(k=n.targets[0])?void 0:k.datasetId)?S:((e,t)=>{var n;const i=new Map;let r="",o=0;return Object.values(t).forEach((e=>{const{form_data:t}=e;if(t){const{datasource:e}=t,n=(i.get(e)||0)+1;i.set(e,n),n>o&&(o=n,r=e)}})),null==(n=e[r])?void 0:n.id})(fe,ve),{controlItems:Se={},mainControlItems:we={}}=ue?function({expanded:e,datasetId:t,disabled:n,forceUpdate:i,form:r,filterId:o,filterType:a,filterToEdit:s,formFilter:l,removed:d}){var c;const u=null!=(c=((e={})=>{var t,n;return null!=(t=null==(n=ld()(e.controlPanelSections))?void 0:n.reduce(((e,{controlSetRows:t=[]})=>[...e,...ld()(t)]),[]))?t:[]})((0,ad.Z)().get(a)))?c:[],p={},m={};return u.filter((e=>"groupby"===(null==e?void 0:e.name))).forEach((n=>{var a,c,u,p,g,f,v,b,y;const x=null!=(a=null==s||null==(c=s.controlValues)?void 0:c[n.name])?a:null==n||null==(u=n.config)?void 0:u.default,C=null==s||null==(p=s.targets[0])||null==(g=p.column)?void 0:g.name,S=(0,V.BX)(V.HY,{children:[(0,V.tZ)(pd,{name:["filters",o,"requiredFirst",n.name],hidden:!0,initialValue:(null==n||null==(f=n.config)?void 0:f.requiredFirst)&&(null==s?void 0:s.requiredFirst)}),(0,V.tZ)(Td,{expanded:e,name:["filters",o,"column"],initialValue:C,label:(0,V.tZ)(Id,{children:(null==(v=n.config)?void 0:v.label)||(0,h.t)("Column")}),rules:[{required:(null==(b=n.config)?void 0:b.required)&&!d,message:(0,h.t)("Column is required")}],children:(0,V.tZ)(Yl,{mode:(null==(y=n.config)?void 0:y.multiple)&&"multiple",form:r,filterId:o,datasetId:t,filterValues:e=>((e,t)=>{var n;return!t.type_generic||!(e in Ql)||(null==(n=Ql[e])?void 0:n.includes(t.type_generic))})((null==l?void 0:l.filterType)||"",e),onChange:()=>{hd(r,o,{defaultDataMask:null}),i()}})})]});m[n.name]={element:S,checked:x}})),u.filter((e=>{var t;return(null==e||null==(t=e.config)?void 0:t.renderTrigger)&&"sortAscending"!==e.name&&"enableSingleValue"!==e.name})).forEach((t=>{var a,d,c,u;const m=null!=(a=null==s||null==(d=s.controlValues)?void 0:d[t.name])?a:null==t||null==(c=t.config)?void 0:c.default,g=(0,V.BX)(V.HY,{children:[(0,V.tZ)(pd,{name:["filters",o,"requiredFirst",t.name],hidden:!0,initialValue:(null==t||null==(u=t.config)?void 0:u.requiredFirst)&&(null==s?void 0:s.requiredFirst)}),(0,V.tZ)(N.u,{placement:"left",title:t.config.affectsDataMask&&n&&(0,h.t)('Populate "Default value" to enable this control'),children:(0,V.tZ)(Dd,{expanded:e,name:["filters",o,"controlValues",t.name],initialValue:m,valuePropName:"checked",colon:!1,children:(0,V.BX)(T.r4,{disabled:t.config.affectsDataMask&&n,onChange:({target:{checked:e}})=>{t.config.requiredFirst&&hd(r,o,{requiredFirst:{...null==l?void 0:l.requiredFirst,[t.name]:e}}),t.config.resetConfig&&hd(r,o,{defaultDataMask:null}),i()},children:[t.config.label," ",t.config.description&&(0,V.tZ)(U.V,{placement:"top",label:t.config.name,tooltip:t.config.description})]})},t.name)},t.name)]});p[t.name]={element:g,checked:m}})),{controlItems:p,mainControlItems:m}}({expanded:e,datasetId:Ce,disabled:!1,forceUpdate:ae,form:r,filterId:t,filterType:null==ue?void 0:ue.filterType,filterToEdit:n,formFilter:ue,removed:Y}):{},Ze=!!we.groupby,ke=!(null==(M=(null!=(R=me[null==ue?void 0:ue.filterType])?R:{}).value)||!M.enableNoResults),Re=Ze&&!!Q.length,$e=!xe||Ce&&((null==ue?void 0:ue.column)||!Ze),Te=qd.includes(null==ue?void 0:ue.filterType),De=nc.includes(null==ue?void 0:ue.filterType),Me=null==(I=null==ue?void 0:ue.isDataDirty)||I,Ie=e=>{hd(r,t,e),J(void 0),ae()};let Fe={};pe&&pe.length>0&&ce&&pe.forEach((e=>{var t,n;const i=null==(t=ce[e])||null==(n=t.defaultDataMask)?void 0:n.extraFormData;Fe=(0,Vr.on)(Fe,i)}));const Ee=JSON.stringify(Fe),_e=(0,o.useCallback)(((e=!1)=>{var n,i;if(!xe||null==ue||null==(n=ue.dataset)||!n.value)return void ae();const o=(0,Vr.zi)({datasetId:null==ue||null==(i=ue.dataset)?void 0:i.value,dashboardId:ie,groupby:null==ue?void 0:ue.column,...ue});o.extra_form_data=Fe,Ie({defaultValueQueriesData:null,isDataDirty:!1}),(0,ei.getChartDataRequest)({formData:o,force:e}).then((({response:e,json:n})=>{if((0,d.cr)(d.TT.GlobalAsyncQueries)){const i="result"in n?n.result[0]:n;if(200===e.status)Ie({defaultValueQueriesData:[i]});else{if(202!==e.status)throw new Error(`Received unexpected response status (${e.status}) while fetching chart data`);(0,Ws.YJ)(i).then((e=>{Ie({defaultValueQueriesData:e})})).catch((e=>{(0,Xn.O$)(e).then((e=>{(e=>{hd(r,t,{defaultValueQueriesData:null}),J(e),ae()})(e)}))}))}}else Ie({defaultValueQueriesData:n.result})})).catch((e=>{(0,Xn.O$)(e).then((e=>{J(e)}))}))}),[t,ae,r,ue,xe,Ee]);(0,o.useEffect)((()=>_e()),[Ee]);const ze=(0,Vr.zi)({datasetId:Ce,groupby:Ze?null==ue?void 0:ue.column:void 0,...ue});ze.extra_form_data=Fe;const[Pe,Ue,Oe,Be]=((e,t)=>{var n,i;const r=!(null==e||null==(n=e.controlValues)||!n.enableEmptyFilter),a=!(null==e||null==(i=e.controlValues)||!i.defaultToFirstItem),[s,l]=(0,o.useState)(!1),[d,c]=(0,o.useState)(r),[u,p]=(0,o.useState)(""),m=(e=!1)=>{const t=r&&!a;c(t),l(!!t||e)};return(0,o.useEffect)((()=>{var t,n;m(!a&&!(null==e||null==(t=e.defaultDataMask)||null==(n=t.filterState)||!n.value))}),[a,r]),(0,o.useEffect)((()=>{var e,n;m(!a&&!(null==t||null==(e=t.defaultDataMask)||null==(n=e.filterState)||!n.value))}),[]),(0,o.useEffect)((()=>{let e="";a?e=(0,h.t)('Default value set automatically when "Select first filter value by default" is checked'):d?e=(0,h.t)('Default value must be set when "Filter value is required" is checked'):s&&(e=(0,h.t)('Default value must be set when "Filter has default value" is checked')),p(e)}),[s,d,a]),[s,d,u,m]})(ue,n),Ne=!Ce||se||(null==ue||null==(F=ue.dataset)?void 0:F.label),qe=(0,o.useCallback)((()=>{r.setFields([{name:"changed",value:!0}])}),[r]),Ve=(0,o.useCallback)((e=>{hd(r,t,e),qe()}),[t,r,qe]),Ae=!!(null!=ue&&ue.adhoc_filters||null!=ue&&ue.time_range||null!=n&&null!=(E=n.adhoc_filters)&&E.length||null!=n&&n.time_range),Ke=void 0!==(null==ue||null==(_=ue.controlValues)?void 0:_.enableSingleValue)||void 0!==(null==n||null==(z=n.controlValues)?void 0:z.enableSingleValue);let je=null==n||null==(P=n.controlValues)?void 0:P.enableSingleValue;void 0!==(null==ue||null==(O=ue.controlValues)?void 0:O.enableSingleMaxValue)&&({enableSingleValue:je}=ue.controlValues);const Le="boolean"==typeof(null==ue||null==(B=ue.controlValues)?void 0:B.sortAscending)||"boolean"==typeof(null==n||null==(q=n.controlValues)?void 0:q.sortAscending);let Xe=null==n||null==(A=n.controlValues)?void 0:A.sortAscending;"boolean"==typeof(null==ue||null==(K=ue.controlValues)?void 0:K.sortAscending)&&(Xe=ue.controlValues.sortAscending);const He=!xe||!Me&&$e||!we.groupby,We=e=>{var n;const i=null==(n=r.getFieldValue("filters"))?void 0:n[t].controlValues;hd(r,t,{controlValues:{...i,sortAscending:e}}),ae()},Ye=e=>{var n;const i=null==(n=r.getFieldValue("filters"))?void 0:n[t].controlValues;hd(r,t,{controlValues:{...i,enableSingleValue:e}}),ae()},Ge=()=>setTimeout((()=>r.validateFields([["filters",t,"adhoc_filters"],["filters",t,"time_range"]])),0),Je=(null==ue?void 0:ue.time_range)&&"No filter"!==ue.time_range,Qe=(null==ue||null==(j=ue.adhoc_filters)?void 0:j.length)>0,et=null==ue||null==(L=ue.controlValues)?void 0:L.defaultToFirstItem,tt=(null==ue?void 0:ue.filterType)===(null==n?void 0:n.filterType)?null==n?void 0:n.defaultDataMask:null,nt=()=>Je||Qe?Promise.resolve():Promise.reject(new Error((0,h.t)("Pre-filter is required"))),it=a(t),rt=it.length>0,ot=it.filter((e=>"filter_time"===e.type)).some((e=>null==pe?void 0:pe.includes(e.value)));(0,o.useEffect)((()=>{Ce&&(0,ql.e)({endpoint:`/api/v1/dataset/${Ce}?q=${Bl().encode({columns:["columns.column_name","columns.expression","columns.filterable","columns.is_dttm","columns.type","columns.verbose_name","database.id","database.database_name","datasource_type","filter_select_enabled","id","is_sqllab_view","main_dttm_col","metrics.metric_name","metrics.verbose_name","schema","sql","table_name"]})}`}).then((e=>{var t,n,i;ee(null==(t=e.json)||null==(n=t.result)?void 0:n.metrics);const r=null==(i=e.json)?void 0:i.result;r.type=r.datasource_type,r.filter_select=!0,le(r)})).catch((e=>{(0,qn.Gb)(e.message)}))}),[Ce]),(0,o.useImperativeHandle)(b,(()=>({changeTab(e){ne(e)}}))),((e,t)=>{var n,i;const r=cd(),a=null==(n=e.getFieldValue("filters"))?void 0:n[t];(0,o.useEffect)((()=>{hd(e,t,{isDataDirty:!0,defaultValueQueriesData:null}),r()}),[e,null==a?void 0:a.filterType,null==a?void 0:a.column,null==a||null==(i=a.dataset)?void 0:i.value,JSON.stringify(null==a?void 0:a.adhoc_filters),null==a?void 0:a.time_range,r,t])})(r,t),(0,o.useEffect)((()=>{xe&&$e&&Pe&&Me&&_e()}),[xe,$e,Pe,Me,_e,Ne]);const at=(0,o.useMemo)((()=>{var e;const t=[];return void 0===(null==ue||null==(e=ue.dataset)?void 0:e.value)?[]:(Object.values(ve).forEach((e=>{var n,i,r;const o=null==(n=e.form_data)?void 0:n.datasource;void 0!==o&&(null==(i=fe[o])?void 0:i.id)!==(null==ue||null==(r=ue.dataset)?void 0:r.value)&&t.push(e.id)})),t)}),[JSON.stringify(ve),null==ue||null==(X=ue.dataset)?void 0:X.value,JSON.stringify(fe)]);if((0,o.useEffect)((()=>{Y&&oe(he)}),[Y]),(0,o.useEffect)((()=>{re&&!Y&&(hd(r,t,re),oe(null))}),[he,t,r,Y,re]),Y)return(0,V.tZ)(gd,{onClick:()=>c(t)});const st=(0,V.tZ)(Dd,{expanded:e,name:["filters",t,"granularity_sqla"],label:(0,V.BX)(V.HY,{children:[(0,V.tZ)(Id,{children:(0,h.t)("Time column")})," ",(0,V.tZ)(U.V,{placement:"top",tooltip:ot?(0,h.t)("Time column to apply dependent temporal filter to"):(0,h.t)("Time column to apply time range to")})]}),initialValue:null==n?void 0:n.granularity_sqla,children:(0,V.tZ)(Yl,{allowClear:!0,form:r,formField:"granularity_sqla",filterId:t,filterValues:e=>!!e.is_dttm,datasetId:Ce,onChange:e=>{hd(r,t,{granularity_sqla:e}),ae()}})});return(0,V.BX)(Pd,{activeKey:te,onChange:e=>ne(e),centered:!0,children:[(0,V.BX)(Zd,{tab:Bd.configuration.name,forceRender:!0,children:[(0,V.BX)(kd,{children:[(0,V.tZ)(Td,{expanded:e,name:["filters",t,"type"],hidden:!0,initialValue:Hr.BE.NativeFilter,children:(0,V.tZ)($.II,{})}),(0,V.tZ)(Td,{expanded:e,name:["filters",t,"name"],label:(0,V.tZ)(Id,{children:(0,h.t)("Filter name")}),initialValue:null==n?void 0:n.name,rules:[{required:!Y,message:(0,h.t)("Name is required")}],children:(0,V.tZ)($.II,{...tc("name-input")})}),(0,V.tZ)(Td,{expanded:e,name:["filters",t,"filterType"],rules:[{required:!Y,message:(0,h.t)("Name is required")}],initialValue:(null==n?void 0:n.filterType)||"filter_select",label:(0,V.tZ)(Id,{children:(0,h.t)("Filter Type")}),...tc("filter-type"),children:(0,V.tZ)(T.Ph,{ariaLabel:(0,h.t)("Filter type"),options:ge.map((e=>{var t,n,i;const r=null==(t=me[e])?void 0:t.value.name,o=r?Vd[r]:void 0,a=1===(null==(n=Ql[e])?void 0:n.length)&&(null==(i=Ql[e])?void 0:i.includes(Ul.Z.Temporal))&&!be;return{value:e,label:o||r,customLabel:a?(0,V.tZ)(N.u,{title:(0,h.t)("Datasets do not contain a temporal column"),children:o||r}):void 0,disabled:a}})),onChange:e=>{hd(r,t,{filterType:e,defaultDataMask:null,column:null}),ae()}})})]}),"filter_time"===(null==ue?void 0:ue.filterType)&&(0,V.tZ)(Od,{expanded:e,children:(0,h.t)("Dashboard time range filters apply to temporal columns defined in\n          the filter section of each chart. Add temporal columns to the chart\n          filters to have this dashboard filter impact those charts.")}),xe&&(0,V.BX)(Rd,{children:[Ne?(0,V.tZ)(Td,{expanded:e,name:["filters",t,"dataset"],label:(0,V.tZ)(Id,{children:(0,h.t)("Dataset")}),initialValue:se?{label:(0,jl.V)({id:se.id,table_name:se.table_name,schema:se.schema,database:{database_name:se.database.database_name}}),value:se.id}:void 0,rules:[{required:!Y,message:(0,h.t)("Dataset is required")}],...tc("datasource-input"),children:(0,V.tZ)(Jl,{onChange:e=>{e.value!==Ce&&hd(r,t,{dataset:e,defaultDataMask:null,column:null}),ae()}})}):(0,V.tZ)(Td,{expanded:e,label:(0,V.tZ)(Id,{children:(0,h.t)("Dataset")}),children:(0,V.tZ)(D.Z,{position:"inline-centered"})}),xe&&Object.keys(we).map((e=>we[e].element))]}),(0,V.BX)(zd,{defaultActiveKey:l,onChange:e=>{p(e)},expandIconPosition:"right",children:["filter_time"!==(null==ue?void 0:ue.filterType)&&(0,V.BX)(Nl.Z.Panel,{forceRender:!0,header:Nd.configuration.name,children:[De&&rt&&(0,V.tZ)(Dd,{expanded:e,name:["filters",t,"dependencies"],initialValue:pe,children:(0,V.tZ)(wd,{availableFilters:it,dependencies:pe,onDependenciesChange:e=>{hd(r,t,{dependencies:e}),ae(),g(),qe()},getDependencySuggestion:()=>f(t),children:ot?st:void 0})}),xe&&Te&&(0,V.tZ)(Fd,{name:["filters",t,"preFilter"],children:(0,V.BX)(Hl,{initialValue:Ae,title:(0,h.t)("Pre-filter available values"),tooltip:(0,h.t)("Add filter clauses to control the filter's source query,\n                    though only in the context of the autocomplete i.e., these conditions\n                    do not impact how the filter is applied to the dashboard. This is useful\n                    when you want to improve the query's performance by only scanning a subset\n                    of the underlying data or limit the available values displayed in the filter."),onChange:e=>{qe(),e&&Ge()},children:[(0,V.tZ)(Md,{expanded:e,name:["filters",t,"adhoc_filters"],css:(0,s.iv)({width:270},"",""),initialValue:null==n?void 0:n.adhoc_filters,required:!0,rules:[{validator:nt}],children:(0,V.tZ)(Al.Z,{columns:(null==se||null==(H=se.columns)?void 0:H.filter((e=>e.filterable)))||[],savedMetrics:(null==se?void 0:se.metrics)||[],datasource:se,onChange:e=>{hd(r,t,{adhoc_filters:e}),ae(),Ge()},label:(0,V.BX)("span",{children:[(0,V.tZ)(Id,{children:(0,h.t)("Pre-filter")}),!Je&&(0,V.tZ)(Ud,{})]})})}),ye&&(0,V.tZ)(Dd,{expanded:e,name:["filters",t,"time_range"],label:(0,V.tZ)(Id,{children:(0,h.t)("Time range")}),initialValue:(null==n?void 0:n.time_range)||(0,h.t)("No filter"),required:!Qe,rules:[{validator:nt}],children:(0,V.tZ)(Vl.ZP,{name:"time_range",onChange:e=>{hd(r,t,{time_range:e}),ae(),Ge()}})}),Je&&!ot?st:void 0]})}),"filter_range"!==(null==ue?void 0:ue.filterType)?(0,V.tZ)(Fd,{name:["filters",t,"sortFilter"],children:(0,V.BX)(Hl,{initialValue:Le,title:(0,h.t)("Sort filter values"),onChange:e=>{We(e||void 0),qe()},children:[(0,V.tZ)(Dd,{expanded:e,name:["filters",t,"controlValues","sortAscending"],initialValue:Xe,label:(0,V.tZ)(Id,{children:(0,h.t)("Sort type")}),children:(0,V.BX)(Nt.Y.Group,{onChange:e=>{We(e.target.value)},children:[(0,V.tZ)(Nt.Y,{value:!0,children:(0,h.t)("Sort ascending")}),(0,V.tZ)(Nt.Y,{value:!1,children:(0,h.t)("Sort descending")})]})}),Re&&(0,V.tZ)(Md,{expanded:e,name:["filters",t,"sortMetric"],initialValue:null==n?void 0:n.sortMetric,label:(0,V.BX)(V.HY,{children:[(0,V.tZ)(Id,{children:(0,h.t)("Sort Metric")})," ",(0,V.tZ)(U.V,{placement:"top",tooltip:(0,h.t)("If a metric is specified, sorting will be done based on the metric value")})]}),children:(0,V.tZ)(T.Ph,{allowClear:!0,ariaLabel:(0,h.t)("Sort metric"),name:"sortMetric",options:Q.map((e=>{var t;return{value:e.metric_name,label:null!=(t=e.verbose_name)?t:e.metric_name}})),onChange:e=>{void 0!==e&&(hd(r,t,{sortMetric:e}),ae())}})})]})}):(0,V.tZ)(Fd,{name:["filters",t,"rangeFilter"],children:(0,V.tZ)(Hl,{initialValue:Ke,title:(0,h.t)("Single Value"),onChange:e=>{Ye(e?Kl.c.Exact:void 0),qe()},children:(0,V.tZ)(Dd,{expanded:e,name:["filters",t,"controlValues","enableSingleValue"],initialValue:je,label:(0,V.tZ)(Id,{children:(0,h.t)("Single value type")}),children:(0,V.BX)(Nt.Y.Group,{onChange:e=>Ye(e.target.value),children:[(0,V.tZ)(Nt.Y,{value:Kl.c.Minimum,children:(0,h.t)("Minimum")}),(0,V.tZ)(Nt.Y,{value:Kl.c.Exact,children:(0,h.t)("Exact")}),(0,V.tZ)(Nt.Y,{value:Kl.c.Maximum,children:(0,h.t)("Maximum")})]})})})})]},`${t}-${Nd.configuration.key}`),(0,V.BX)(Nl.Z.Panel,{forceRender:!0,header:Nd.settings.name,children:[(0,V.tZ)(Td,{expanded:e,name:["filters",t,"description"],initialValue:null==n?void 0:n.description,label:(0,V.tZ)(Id,{children:(0,h.t)("Description")}),children:(0,V.tZ)($.Kx,{})}),(0,V.tZ)(Fd,{name:["filters",t,"defaultValueQueriesData"],hidden:!0,initialValue:null}),(0,V.tZ)(Fd,{name:["filters",t,"defaultValue"],children:(0,V.tZ)(Hl,{checked:Pe,disabled:Ue||et,initialValue:Pe,title:(0,h.t)("Filter has default value"),tooltip:Oe,onChange:e=>{Be(e),e||hd(r,t,{defaultDataMask:null}),qe()},children:!Y&&(0,V.tZ)(Md,{expanded:e,name:["filters",t,"defaultDataMask"],initialValue:tt,label:(0,V.tZ)(Id,{children:(0,h.t)("Default Value")}),required:Pe,rules:[{validator:()=>{var e,n;if(null!=ue&&null!=(e=ue.defaultDataMask)&&null!=(n=e.filterState)&&n.value){const e=r.getFieldsError();return m((t=>t.length&&!e.find((e=>e.errors.length>0))?[]:t)),Promise.resolve()}return m((e=>e.includes(t)?e:[...e,t])),Promise.reject(new Error((0,h.t)("Default value is required")))}}],children:G||He?(0,V.BX)(Ed,{children:[G?(0,V.tZ)(Hs.Z,{error:null==(W=G.errors)?void 0:W[0],fallback:(0,V.tZ)(Xs,{title:(0,h.t)("Cannot load filter"),body:G.error,level:"error"})}):(0,V.tZ)(ed,{setDataMask:e=>{var n,i;ii()(null==tt||null==(n=tt.filterState)?void 0:n.value,null==e||null==(i=e.filterState)?void 0:i.value)||qe(),hd(r,t,{defaultDataMask:e}),r.validateFields([["filters",t,"defaultDataMask"]]),ae()},hasDefaultValue:Pe,filterId:t,hasDataset:xe,form:r,formData:ze,enableNoResults:ke}),xe&&Ce&&(0,V.tZ)(N.u,{title:(0,h.t)("Refresh the default values"),children:(0,V.tZ)(_d,{onClick:()=>_e(!0)})})]}):(0,h.t)('Fill all required fields to enable "Default Value"')})})}),Object.keys(Se).sort(((e,t)=>$d.indexOf(e)-$d.indexOf(t))).map((e=>Se[e].element))]},`${t}-${Nd.settings.key}`)]},`native-filter-config-${t}`)]},Bd.configuration.key),(0,V.tZ)(Zd,{tab:Bd.scoping.name,forceRender:!0,children:(0,V.tZ)(od,{updateFormValues:Ve,pathToFormValue:["filters",t],forceUpdate:ae,filterScope:null==n?void 0:n.scope,formFilterScope:null==ue?void 0:ue.scope,formScopingType:null==ue?void 0:ue.scoping,initiallyExcludedCharts:at})},Bd.scoping.key)]})},Kd=(0,o.memo)((0,o.forwardRef)(Ad));var jd={name:"1216n71",styles:"text-align:left;flex:1;& .ant-alert-action{align-self:center;}"},Ld={name:"zjik7",styles:"display:flex"};function Xd({title:e,onConfirm:t,onDismiss:n,children:i}){return(0,V.tZ)(It.Z,{closable:!1,type:"warning",message:e,css:jd,description:i,action:(0,V.BX)("div",{css:Ld,children:[(0,V.tZ)(M.Z,{buttonSize:"small",buttonStyle:"secondary",onClick:n,children:(0,h.t)("Keep editing")},"cancel"),(0,V.tZ)(M.Z,{buttonSize:"small",buttonStyle:"primary",onClick:t,children:(0,h.t)("Yes, cancel")},"submit")]})},"alert")}const Hd=({canSave:e=!0,onCancel:t,handleSave:n,onDismiss:i,onConfirmCancel:r,saveAlertVisible:o})=>o?(0,V.tZ)(Xd,{title:(0,h.t)("There are unsaved changes."),onConfirm:r,onDismiss:i,children:(0,h.t)("Are you sure you want to cancel?")},"cancel-confirm"):(0,V.BX)(V.HY,{children:[(0,V.tZ)(M.Z,{buttonStyle:"secondary",onClick:t,children:(0,h.t)("Cancel")},"cancel"),(0,V.tZ)(M.Z,{disabled:!e,buttonStyle:"primary",onClick:n,children:(0,h.t)("Save")},"submit")]}),Wd=a.iK.div`
  ${({theme:e})=>`\n    padding: ${4*e.gridUnit}px;\n  `}
`,Yd=({componentId:e,divider:t})=>(0,V.BX)(Wd,{children:[(0,V.tZ)(Ft.xJ,{initialValue:t?t.title:"",label:(0,h.t)("Title"),name:["filters",e,"title"],rules:[{required:!0,message:(0,h.t)("Title is required"),whitespace:!0}],children:(0,V.tZ)($.II,{})}),(0,V.tZ)(Ft.xJ,{initialValue:t?t.description:"",label:(0,h.t)("Description"),name:["filters",e,"description"],children:(0,V.tZ)($.Kx,{rows:4})}),(0,V.tZ)(Ft.xJ,{hidden:!0,name:["filters",e,"type"],initialValue:Hr.BE.Divider})]}),Gd=(0,a.iK)(gn.o)`
  min-width: ${880}px;
  width: ${({expanded:e})=>e?"100%":880} !important;

  @media (max-width: ${912}px) {
    width: 100% !important;
    min-width: auto;
  }

  .ant-modal-body {
    padding: 0px;
  }

  ${({expanded:e})=>e&&s.iv`
      height: 100%;

      .ant-modal-body {
        flex: 1 1 auto;
      }
      .ant-modal-content {
        height: 100%;
      }
    `}
`,Jd=a.iK.div`
  display: flex;
  height: ${({expanded:e})=>e?"100%":"700px"};
  flex-direction: row;
  flex: 1;
  .filters-list {
    width: ${({theme:e})=>50*e.gridUnit}px;
    overflow: auto;
  }
`,Qd=(0,a.iK)(T.qz)`
  width: 100%;
`,ec=a.iK.div`
  margin-left: ${({theme:e})=>4*e.gridUnit}px;
`,tc=ds("filters-config-modal"),nc=["filter_range","filter_select","filter_time"],ic=[],rc={},oc={filters:{}};function ac({isOpen:e,initialFilterId:t,createNewOnOpen:n,onSave:i,onCancel:r}){const l=(0,u.I0)(),d=(0,a.Fg)(),[c]=T.qz.useForm(),m=(0,o.useRef)(),g=Fs(),f=function(){const e=Fs();return(0,o.useMemo)((()=>e.reduce(((e,t)=>(e[t.id]=t,e)),{})),[e])}(),[v,b]=(0,o.useState)(ic),[y,x]=(0,o.useState)(rc),[S,w]=(0,o.useState)(!1),Z=(0,o.useMemo)((()=>$l()([...(0,ms.QN)(g),...v]).filter((e=>{var t;return!y[e]||(null==(t=y[e])?void 0:t.isPending)}))),[g,v,y]),k=null!=t?t:Z[0],[R,$]=(0,o.useState)(k),[D,M]=(0,o.useState)(ic),[F,E]=(0,o.useState)(oc),_=v.filter((e=>!y[e])),z=(0,o.useCallback)((e=>{const t=y[e];null!=t&&t.isPending&&clearTimeout(t.timerId),x((t=>({...t,[e]:null})))}),[y]),P=(0,o.useMemo)((()=>Object.keys(f)),[f]),[U,O]=(0,o.useState)(P),[B,N]=(0,o.useState)([k]),q=e=>[`${e}-${Nd.configuration.key}`,`${e}-${Nd.settings.key}`],[A,K]=(0,o.useState)(q(k)),j=(0,o.useCallback)((e=>{const t=(0,ms.W6)(e);b([...v,t]),$(t),w(!1),O([...U,t]),K(q(t))}),[v,U,$,O,b]);((e,t,n)=>{const i=(0,Er.D)(e);(0,o.useEffect)((()=>{n&&e&&!i&&t(Hr.BE.NativeFilter)}),[n,e,i,t])})(e,j,n),((e,t,n,i)=>{(0,o.useEffect)((()=>{const r=e[t];if(r&&!r.isPending){const r=n.flat().find((n=>!e[n]&&n!==t));r&&i(r)}}),[t,e,n,i])})(y,R,U,$);const L=(0,ms.EJ)(x,O,w),X=(e=!1)=>{b(ic),$(k),x(rc),w(!1),E(oc),M(ic),Z.length>0&&K(q(Z[0])),e||O(P),N([k]),c.resetFields(["filters"]),c.setFieldsValue({changed:!1})},H=(0,o.useCallback)((e=>{const t=F.filters[e],n=f[e];return t&&"name"in t&&t.name||t&&"title"in t&&t.title||n&&"name"in n&&n.name||n&&"title"in n&&n.title||(0,h.t)("[untitled]")}),[f,F.filters]),W=(0,o.useCallback)((e=>{var t;if(y[e])return!1;const n=(null==(t=c.getFieldValue("filters"))?void 0:t[e])||f[e];return n&&"filterType"in n&&nc.includes(n.filterType)}),[f,c,y]),Y=(0,o.useCallback)((e=>Z.filter((t=>t!==e)).filter((e=>W(e))).map((e=>{var t;return{label:H(e),value:e,type:null==(t=f[e])?void 0:t.filterType}}))),[W,Z,H]),G=(0,o.useCallback)((()=>{const e=c.getFieldsError(),t=[];e.forEach((e=>{const n=e.name[1];e.errors.length>0&&!t.includes(n)&&t.push(n)})),!t.length&&D.length>0?M(ic):t.length>0&&!ii()(kl()(D),kl()(t))&&M(t)}),[c,D]),J=async()=>{const e=await(0,ms.G$)(c,R,$);if(G(),e){const t=(e=>{const t=Object.keys(f).reduce(((e,t)=>{var n;const i=f[t],r=null==(n=i.cascadeParentIds)?void 0:n.filter((e=>W(e)));return r&&l((0,Gs.rF)(t,r)),{...e,[t]:{...i,cascadeParentIds:r}}}),{}),n=null==e?void 0:e.filters;return n&&Object.keys(n).forEach((e=>{const t=n[e];if(!("dependencies"in t))return;const{dependencies:i}=t;i&&(t.dependencies=i.filter((e=>W(e))))})),t})(e);(0,ms.GA)(t,U,y,i,e)(),X(!0)}else{var t;null==(t=m.current)||null==t.changeTab||t.changeTab("configuration")}},Q=()=>{X(),r()},ee=()=>{const e=c.getFieldValue("changed"),t=U.length!==P.length||U.some(((e,t)=>e!==P[t]));_.length>0||c.isFieldsTouched()||e||t?w(!0):Q()},te=(0,o.useCallback)((()=>{const e=new Map,t=c.getFieldValue("filters");return t&&Object.keys(t).forEach((n=>{const i=t[n],r=f[n];let o=[];i&&"dependencies"in i?o=[...i.dependencies]:null!=r&&r.cascadeParentIds&&(o=[...r.cascadeParentIds]),e.set(n,o)})),e}),[f,c]),ne=(0,o.useCallback)((()=>{const e=te();Z.filter((e=>!y[e])).forEach((t=>{const n={name:["filters",t,"dependencies"],errors:(0,ms.uh)(e,t)?[(0,h.t)("Cyclic dependency detected")]:[]};c.setFields([n])})),G()}),[te,Z,c,G,y]),ie=(0,o.useCallback)((e=>{const t=te(),n=U.filter((t=>t!==e&&W(t)));return n.find((n=>{const i=t.get(e)||[];return i.push(n),!(0,ms.uh)(t,e)||(i.pop(),!1)}))||n[0]}),[te,W,U]),[re,oe]=(0,o.useState)(!1),ae=(0,Tl.Z)((()=>{oe(!re)})),se=re?I.Z.FullscreenExitOutlined:I.Z.FullscreenOutlined,le=(0,o.useMemo)((()=>C()(((e,t)=>{const n=e.filters&&Object.values(e.filters).some((e=>e.name&&null!==e.name)),i=e.filters&&Object.values(e.filters).some((e=>e.title&&null!==e.title));(n||i)&&E(t),w(!1),G()}),Ia.M)),[G]);(0,o.useEffect)((()=>{ct()(y)||M((e=>e.filter((e=>!y[e]))))}),[y]),(0,o.useEffect)((()=>{B.includes(R)||N([...B,R])}),[R]);const de=(0,o.useCallback)((e=>K(e)),[K]),ce=(0,o.useMemo)((()=>U.map((e=>{if(!B.includes(e))return null;const t=e.startsWith(ms.Ky),n=R===e;return(0,V.tZ)("div",{style:{height:"100%",overflowY:"auto",display:n?"":"none"},children:t?(0,V.tZ)(Yd,{componentId:e,divider:f[e]}):(0,V.tZ)(Kd,{expanded:re,ref:m,form:c,filterId:e,filterToEdit:f[e],removedFilters:y,restoreFilter:z,getAvailableFilters:Y,activeFilterPanelKeys:A,handleActiveFilterPanelChange:de,isActive:n,setErroredFilters:M,validateDependencies:ne,getDependencySuggestion:ie},e)},e)}))),[B,U,R,f,c,y,z,Y,A,ne,ie,de,re]);return(0,V.tZ)(Gd,{visible:e,maskClosable:!1,title:(0,h.t)("Add and edit filters"),expanded:re,destroyOnClose:!0,onCancel:ee,onOk:J,centered:!0,footer:(0,V.BX)("div",{css:s.iv`
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
          `,children:[(0,V.tZ)(Hd,{onDismiss:()=>w(!1),onCancel:ee,handleSave:J,canSave:!D.length,saveAlertVisible:S,onConfirmCancel:Q}),(0,V.tZ)(ec,{children:(0,V.tZ)(se,{iconSize:"l",iconColor:d.colors.grayscale.dark2,onClick:ae})})]}),children:(0,V.tZ)(p.Z,{children:(0,V.tZ)(Jd,{expanded:re,children:(0,V.tZ)(Qd,{form:c,onValuesChange:le,layout:"vertical",children:(0,V.tZ)(Pl,{erroredFilters:D,onRemove:L,onAdd:j,onChange:e=>{$(e),K(q(e))},getFilterTitle:H,currentFilterId:R,removedFilters:y,restoreFilter:z,onRearrange:(e,t)=>{const n=[...U],i=n.splice(e,1)[0];n.splice(t,0,i),O(n)},filters:U,children:ce})})})})})}const sc=(0,o.memo)(ac),lc=(0,a.iK)(M.Z)`
  padding: 0;
`,dc=({createNewOnOpen:e,dashboardId:t,initialFilterId:n,onClick:i,children:r})=>{const a=(0,u.I0)(),[s,l]=(0,o.useState)(!1),d=(0,o.useCallback)((()=>{l(!1)}),[l]),c=(0,o.useCallback)((async e=>{a(await(0,Gs.RY)(e)),d()}),[a,d]),h=(0,o.useCallback)((()=>{l(!0),i&&i()}),[l,i]);return(0,V.BX)(V.HY,{children:[(0,V.tZ)(lc,{...ps("create-filter"),buttonStyle:"link",buttonSize:"xsmall",onClick:h,children:r}),(0,V.tZ)(sc,{isOpen:s,onSave:c,onCancel:d,initialFilterId:n,createNewOnOpen:e},`filters-for-${t}`)]})},cc=(0,o.memo)(dc),hc=({filter:e,hidePopover:t})=>{const n=(0,a.Fg)(),[i,,r]=(0,al.Z)(),o=(0,u.v9)((({dashboardInfo:e})=>e.id)),l=(0,u.v9)((({dashboardInfo:e})=>e.dash_edit_perm));return(0,V.BX)(dl,{css:e=>s.iv`
        margin-bottom: ${3*e.gridUnit}px;
        justify-content: space-between;
      `,children:[(0,V.BX)(bl,{children:[(0,V.tZ)(I.Z.FilterSmall,{css:e=>s.iv`
            margin-right: ${e.gridUnit}px;
          `}),(0,V.tZ)(yl,{title:r?e.name:null,children:(0,V.tZ)(ul,{ref:i,children:e.name})})]}),l&&(0,V.tZ)(dc,{dashboardId:o,onClick:t,initialFilterId:e.id,children:(0,V.tZ)(I.Z.Edit,{iconSize:"l",iconColor:n.colors.grayscale.light1})})]})},uc=({filter:e})=>{const t=(0,o.useMemo)((()=>(0,bi.Z)().get(e.filterType)),[e.filterType]);return(0,V.BX)(dl,{children:[(0,V.tZ)(cl,{children:(0,h.t)("Filter type")}),(0,V.tZ)(hl,{children:null==t?void 0:t.name})]})},pc=({filter:e,hidePopover:t})=>(0,V.BX)("div",{children:[(0,V.tZ)(hc,{filter:e,hidePopover:t}),(0,V.tZ)(uc,{filter:e}),(0,V.tZ)(Cl,{filter:e}),(0,V.tZ)(wl,{filter:e})]}),mc=({children:e,filter:t,getPopupContainer:n,isVisible:i=!0,placement:r})=>{const[a,s]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{i||s(!1)}),[i]),(0,V.tZ)(Hn.J,{placement:r,overlayClassName:"filter-card-popover",mouseEnterDelay:.2,mouseLeaveDelay:.2,onVisibleChange:e=>{s(i&&e)},visible:i&&a,content:(0,V.tZ)(pc,{filter:t,hidePopover:()=>{s(!1)}}),getPopupContainer:null!=n?n:()=>document.body,children:e})};var gc=n(42074);const{SubMenu:fc}=ht.Menu,vc=(0,a.iK)(gc.P)`
  button.ant-btn:first-of-type {
    display: none;
  }
  > button.ant-btn:nth-of-type(2) {
    display: inline-flex;
    background-color: transparent !important;
    height: unset;
    padding: 0;
    border: none;
    width: auto !important;

    .anticon {
      line-height: 0;
    }
    &:after {
      box-shadow: none !important;
    }
  }
`,bc=(0,a.iK)(ht.Menu)`
  ${({theme:e})=>`\n    .info {\n      font-size: ${e.typography.sizes.s}px;\n      color: ${e.colors.grayscale.base};\n      padding: ${e.gridUnit}px ${3*e.gridUnit}px ${e.gridUnit}px ${3*e.gridUnit}px;\n    }\n    .ant-dropdown-menu-item-selected {\n      color: ${e.colors.grayscale.dark1};\n      background-color: ${e.colors.primary.light5};\n    }\n  `}
`,yc=(0,a.iK)(ht.Menu.Item)`
  display: flex;
  justify-content: space-between;
  > span {
    width: 100%;
  }
  border-bottom: ${({divider:e,theme:t})=>e?`1px solid ${t.colors.grayscale.light3};`:"none;"};
`,xc=a.iK.div`
  display: flex;
  justify-content: space-between;
  > span {
    width: 100%;
  }
`,Cc=e=>{const t=(0,a.Fg)(),{icon:n,info:i,menuItems:r,selectedKeys:s,onSelect:l}=e,d=(0,o.useMemo)((()=>(e,n,i)=>(0,V.tZ)(yc,{divider:i,children:(0,V.BX)(xc,{children:[(0,V.tZ)("span",{children:e}),(null==s?void 0:s.includes(n))&&(0,V.tZ)(I.Z.Check,{iconColor:t.colors.primary.base,className:"tick-menu-item",iconSize:"xl"})]})},n)),[s,t.colors.primary.base]),c=(0,o.useMemo)((()=>(0,V.BX)(bc,{selectedKeys:s,onSelect:l,selectable:!0,children:[i&&(0,V.tZ)("div",{className:"info",children:i}),r.map((e=>{var t;return null!=(t=e.children)&&t.length?(0,V.tZ)(fc,{title:e.label,children:e.children.map((e=>d(e.label,e.key)))},e.key):d(e.label,e.key,e.divider)}))]})),[s,l,i,r,d]);return(0,V.tZ)(vc,{overlay:c,trigger:["click"],icon:n})},Sc=a.iK.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .enable-cross-filters-text {
    padding-left: ${({theme:e})=>2*e.gridUnit+"px"};
  }
`,wc=(0,a.iK)(P.ZP)`
  ${({theme:e})=>`\n  &,\n  svg {\n    display: inline-block;\n    width: ${4*e.gridUnit}px;\n    height: ${4*e.gridUnit}px;\n  }\n`}
`,Zc="cross-filters-menu-key",kc="cross-filters-scoping-menu-key",Rc=()=>{const e=(0,u.I0)(),t=(0,a.Fg)(),n=(0,u.v9)((({dashboardInfo:e})=>e.crossFiltersEnabled)),i=(0,u.v9)((({dashboardInfo:e})=>e.filterBarOrientation)),[r,s]=(0,o.useState)(i),l=(0,d.cr)(d.TT.DashboardCrossFilters),c=n&&l,[p,m]=(0,o.useState)(c),g=(0,u.v9)((({dashboardInfo:e})=>e.dash_edit_perm)),f=g&&(0,d.cr)(d.TT.HorizontalFilterBar),[v,b]=pr(),y=(0,o.useCallback)((async t=>{t||e((0,nt.sh)()),await e((0,On.C6)(t))}),[e]),x=(0,o.useCallback)((()=>{m(!p),y(!p)}),[p,y]),C=(0,o.useCallback)((async t=>{if(t!==i){s(t);try{await e((0,On.Mn)(t))}catch{s(i)}}}),[e,i]),S=(0,o.useCallback)((e=>{const t=e.key;var n;t===Zc?x():(n=t)===ft.Bp.Vertical||n===ft.Bp.Horizontal?C(t):t===kc&&v()}),[v,x,C]),w=(0,o.useMemo)((()=>(0,V.BX)(Sc,{children:[(0,V.tZ)(wc,{className:"enable-cross-filters",checked:p,onChange:e=>m(e||!1)})," ",(0,V.tZ)("span",{className:"enable-cross-filters-text",children:(0,h.t)("Enable cross-filtering")})]})),[p]),Z=(0,o.useMemo)((()=>{const e=[];return l&&g&&(e.push({key:Zc,label:w}),e.push({key:kc,label:(0,h.t)("Cross-filtering scoping"),divider:f})),f&&e.push({key:"placement",label:(0,h.t)("Orientation of filter bar"),children:[{key:ft.Bp.Vertical,label:(0,h.t)("Vertical (Left)")},{key:ft.Bp.Horizontal,label:(0,h.t)("Horizontal (Top)")}]}),e}),[g,f,w,l]);return Z.length?(0,V.BX)(V.HY,{children:[(0,V.tZ)(Cc,{onSelect:S,icon:(0,V.tZ)(I.Z.Gear,{name:"gear",iconColor:t.colors.grayscale.base}),menuItems:Z,selectedKeys:[r]}),b]}):null},$c=a.iK.div`
  ${({theme:e})=>s.iv`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding: 0 ${2*e.gridUnit}px ${2*e.gridUnit}px;

    & > span {
      font-size: ${e.typography.sizes.l}px;
      flex-grow: 1;
      font-weight: ${e.typography.weights.bold};
    }

    & > div:first-of-type {
      line-height: 0;
    }

    & > button > span.anticon {
      line-height: 0;
    }
  `}
`,Tc=(0,a.iK)(M.Z)`
  padding: 0;
`,Dc=a.iK.div`
  ${({theme:e})=>`\n    padding: ${3*e.gridUnit}px ${2*e.gridUnit}px ${e.gridUnit}px;\n\n    .ant-dropdown-trigger span {\n      padding-right: ${2*e.gridUnit}px;\n    }\n  `}
`,Mc=a.iK.div`
  ${({theme:e})=>s.iv`
    margin-top: ${2*e.gridUnit}px;

    & button > [role='img']:first-of-type {
      margin-right: ${e.gridUnit}px;
      line-height: 0;
    }

    span[role='img'] {
      padding-bottom: 1px;
    }

    .ant-btn > .anticon + span {
      margin-left: 0;
    }
  `}
`,Ic=({toggleFiltersBar:e})=>{const t=(0,a.Fg)(),n=gs(),i=(0,o.useMemo)((()=>Object.values(n)),[n]),r=(0,u.v9)((({dashboardInfo:e})=>e.dash_edit_perm)),s=(0,u.v9)((({dashboardInfo:e})=>e.id));return(0,V.BX)(Dc,{children:[(0,V.BX)($c,{children:[(0,V.tZ)("span",{children:(0,h.t)("Filters")}),(0,V.tZ)(Rc,{}),(0,V.tZ)(Tc,{...ps("collapse-button"),buttonStyle:"link",buttonSize:"xsmall",onClick:()=>e(!1),children:(0,V.tZ)(I.Z.Expand,{iconColor:t.colors.grayscale.base})})]}),r&&(0,V.tZ)(Mc,{children:(0,V.BX)(cc,{dashboardId:s,createNewOnOpen:0===i.length,children:[(0,V.tZ)(I.Z.PlusSmall,{})," ",(0,h.t)("Add/Edit Filters")]})})]})},Fc=(0,o.memo)(Ic),Ec=e=>{const{dataMask:t,chartConfiguration:n,dashboardLayout:i,verboseMaps:r}=e;return Object.keys(n).map((e=>{const n=Number(e),o=to(n,t[n],i);if((0,$i.Z)(o.column)&&(0,$i.Z)(o.value)){var a;const e=(null==(a=r[n])?void 0:a[(0,Xr.Z)(o.column)])||o.column;return{...o,column:e,emitterId:n}}return null})).filter(Boolean)};var _c=n(8420);const zc=s.iv`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: middle;
`,Pc=a.iK.b`
  ${({theme:e})=>`\n    max-width: ${25*e.gridUnit}px;\n  `}
  ${zc}
`,Uc=(0,a.iK)("span")`
  ${({theme:e})=>`\n    max-width: ${25*e.gridUnit}px;\n    padding-right: ${e.gridUnit}px;\n  `}
  ${zc}
`,Oc=(0,a.iK)(T.Vp)`
  ${({theme:e})=>`\n    border: 1px solid ${e.colors.grayscale.light3};\n    border-radius: 2px;\n    .anticon-close {\n      vertical-align: middle;\n    }\n  `}
`,Bc=e=>{var t;const{filter:n,orientation:i,removeCrossFilter:r}=e,o=(0,a.Fg)(),[l,d]=(0,Ns.Z)(),[c,h]=(0,Ns.Z)(),u=(0,Xr.Z)(null!=(t=n.column)?t:"");return(0,V.BX)(Oc,{css:s.iv`
        ${i===ft.Bp.Vertical?`\n            margin-top: ${2*o.gridUnit}px;\n          `:`\n            margin-left: ${2*o.gridUnit}px;\n          `}
      `,closable:!0,onClose:()=>r(n.emitterId),closeIcon:_c.H,children:[(0,V.tZ)(N.u,{title:d?u:null,children:(0,V.tZ)(Uc,{ref:l,children:u})}),(0,V.tZ)(N.u,{title:h?n.value:null,children:(0,V.tZ)(Pc,{ref:c,children:n.value})})]})},Nc=a.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    font-size: ${e.typography.sizes.s}px;\n    color: ${e.colors.grayscale.base};\n    vertical-align: middle;\n    align-items: center;\n  `}
`,qc=(0,a.iK)(I.Z.SearchOutlined)`
  ${({theme:e})=>`\n    & > span.anticon.anticon-search {\n      color: ${e.colors.grayscale.light1};\n      margin-left: ${e.gridUnit}px;\n      transition: 0.3s;\n      vertical-align: middle;\n      line-height: 0;\n      &:hover {\n        color: ${e.colors.grayscale.base};\n      }\n    }\n  `}
`,Vc=e=>{const{title:t,orientation:n,onHighlightFilterSource:i}=e,[r,o]=(0,Ns.Z)(),l=(0,a.Fg)();return(0,V.BX)(Nc,{children:[(0,V.tZ)(N.u,{title:o?t:null,children:(0,V.tZ)("span",{css:s.iv`
            max-width: ${n===ft.Bp.Vertical?45*l.gridUnit+"px":15*l.gridUnit+"px"};
            line-height: 1.4;
            ${zc}
          `,ref:r,children:t})}),(0,V.tZ)(N.u,{title:(0,h.t)("Locate the chart"),children:(0,V.tZ)(qc,{iconSize:"s",role:"button",tabIndex:0,onClick:i})})]})},Ac=e=>{const{filter:t,orientation:n,last:i}=e,r=(0,a.Fg)(),l=(0,u.I0)(),d=(0,o.useCallback)((e=>{e&&l((0,Bn.E2)(e))}),[l]);return(0,V.BX)("div",{css:s.iv`
        ${n===ft.Bp.Vertical?`\n            display: block;\n            margin-bottom: ${4*r.gridUnit}px;\n          `:"\n            display: flex;\n          "}
      `,children:[(0,V.tZ)(Vc,{title:t.name,orientation:n||ft.Bp.Horizontal,onHighlightFilterSource:()=>d(t.path)}),(t.column||t.value)&&(0,V.tZ)(Bc,{filter:t,orientation:n,removeCrossFilter:e=>{l((0,nt.eG)(e,{extraFormData:{filters:[]},filterState:{value:null,selectedValues:null}}))}}),i&&(0,V.tZ)("span",{css:s.iv`
            ${n===ft.Bp.Horizontal?`\n                width: 1px;\n                height: 22px;\n                margin-left: ${4*r.gridUnit}px;\n                margin-right: ${r.gridUnit}px;\n              `:`\n                width: 100%;\n                height: 1px;\n                display: block;\n                margin-bottom: ${4*r.gridUnit}px;\n                margin-top: ${4*r.gridUnit}px;\n            `}
            background: ${r.colors.grayscale.light2};
          `})]},`${t.name}${t.emitterId}`)},Kc=(0,a.iK)(Nl.Z)`
  ${({theme:e})=>`\n    .ant-collapse-header {\n      margin-bottom: ${4*e.gridUnit}px;\n    }\n    .ant-collapse-item > .ant-collapse-header {\n      padding-bottom: 0;\n    }\n    .ant-collapse-item > .ant-collapse-header > .ant-collapse-arrow {\n      font-size: ${e.typography.sizes.xs}px;\n      padding-top: ${3*e.gridUnit}px;\n    }\n    .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box {\n      padding-top: 0;\n    }\n  `}
`,jc=a.iK.span`
  ${({theme:e})=>`\n    font-size: ${e.typography.sizes.s}px;\n  `}
`,Lc=e=>{const{crossFilters:t}=e,n=(0,a.Fg)(),i=(0,o.useMemo)((()=>t.map((e=>(0,V.tZ)(Ac,{filter:e,orientation:ft.Bp.Vertical},e.emitterId)))),[t]);return t.length?(0,V.tZ)(Kc,{ghost:!0,defaultActiveKey:"crossFilters",expandIconPosition:"right",children:(0,V.BX)(Nl.Z.Panel,{header:(0,V.tZ)(jc,{children:(0,h.t)("Cross-filters")}),children:[i,(0,V.tZ)("span",{css:s.iv`
            width: 100%;
            height: 1px;
            display: block;
            background: ${n.colors.grayscale.light3};
            margin: ${8*n.gridUnit}px auto 0 auto;
          `})]},"crossFilters")}):null},Xc=()=>{const e=(0,u.v9)((e=>e.dataMask)),t=(0,u.v9)((e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration})),n=(0,u.v9)((e=>e.dashboardLayout.present)),i=us(),r=Ec({dataMask:e,chartConfiguration:t,dashboardLayout:n,verboseMaps:i});return(0,V.tZ)(Lc,{crossFilters:r})},Hc=a.iK.div`
  width: ${({theme:e})=>8*e.gridUnit}px;

  & .ant-tabs-top > .ant-tabs-nav {
    margin: 0;
  }
  &.open {
    width: ${({width:e})=>e}px; // arbitrary...
  }
`,Wc=a.iK.div`
  ${({theme:e,width:t})=>`\n    & .ant-typography-edit-content {\n      left: 0;\n      margin-top: 0;\n      width: 100%;\n    }\n    position: absolute;\n    top: 0;\n    left: 0;\n    flex-direction: column;\n    flex-grow: 1;\n    width: ${t}px;\n    background: ${e.colors.grayscale.light5};\n    border-right: 1px solid ${e.colors.grayscale.light2};\n    border-bottom: 1px solid ${e.colors.grayscale.light2};\n    min-height: 100%;\n    display: none;\n    &.open {\n      display: flex;\n    }\n  `}
`,Yc=a.iK.div`
  ${({theme:e,offset:t})=>`\n    position: absolute;\n    top: ${t}px;\n    left: 0;\n    height: 100%;\n    width: ${8*e.gridUnit}px;\n    padding-top: ${2*e.gridUnit}px;\n    display: none;\n    text-align: center;\n    &.open {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      padding: ${2*e.gridUnit}px;\n    }\n    svg {\n      cursor: pointer;\n    }\n  `}
`,Gc=(0,a.iK)(I.Z.Collapse)`
  ${({theme:e})=>`\n    color: ${e.colors.primary.base};\n    margin-bottom: ${3*e.gridUnit}px;\n  `}
`,Jc=(0,a.iK)(I.Z.Filter)`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,Qc=a.iK.div`
  margin-top: ${({theme:e})=>8*e.gridUnit}px;
`,eh=a.iK.div`
  padding: ${({theme:e})=>4*e.gridUnit}px;
  // 108px padding to make room for buttons with position: absolute
  padding-bottom: ${({theme:e})=>27*e.gridUnit}px;
`,th=(0,o.createContext)(!1),nh=({actions:e,canEdit:t,dataMaskSelected:n,filtersOpen:i,filterValues:a,height:l,isInitialized:c,offset:u,onSelectionChange:p,toggleFiltersBar:m,width:g})=>{const[f,v]=(0,o.useState)(!1),b=(0,o.useRef)(),y=(0,o.useCallback)((()=>m(!0)),[m]),x=(0,o.useMemo)((()=>te()((()=>{clearTimeout(b.current),v(!0),b.current=setTimeout((()=>{v(!1)}),300)}),200)),[]);(0,o.useEffect)((()=>(document.onscroll=x,()=>{document.onscroll=null})),[x]);const C=(0,o.useMemo)((()=>({overflow:"auto",height:l,overscrollBehavior:"contain"})),[l]),S=(0,o.useMemo)((()=>0===a.length?(0,V.tZ)(Qc,{children:(0,V.tZ)(Oa.Tc,{title:(0,h.t)("No global filters are currently added"),image:"filter.svg",description:t&&(0,h.t)('Click on "+Add/Edit Filters" button to create new dashboard filters')})}):(0,V.tZ)(eh,{children:(0,V.tZ)(Dh,{dataMaskSelected:n,onFilterSelectionChange:p})})),[t,n,a.length,p]),w=(0,o.useMemo)((()=>(0,d.cr)(d.TT.DashboardCrossFilters)?(0,V.tZ)(Xc,{}):null),[]);return(0,V.tZ)(th.Provider,{value:f,children:(0,V.BX)(Hc,{...ps(),className:r()({open:i}),width:g,children:[(0,V.BX)(Yc,{...ps("collapsable"),className:r()({open:!i}),onClick:y,role:"button",offset:u,children:[(0,V.tZ)(Gc,{...ps("expand-button"),iconSize:"l"}),(0,V.tZ)(Jc,{...ps("filter-icon"),iconSize:"l"})]}),(0,V.BX)(Wc,{className:r()({open:i}),width:g,children:[(0,V.tZ)(Fc,{toggleFiltersBar:m}),c?(0,V.tZ)("div",{css:C,onScroll:x,children:(0,V.BX)(V.HY,{children:[w,S]})}):(0,V.tZ)("div",{css:(0,s.iv)({height:l},"",""),children:(0,V.tZ)(D.Z,{})}),e]})]})})},ih=(0,o.memo)(nh);var rh;!function(e){e.Right="right",e.Bottom="bottom",e.Left="left"}(rh||(rh={}));const oh=a.iK.div`
  position: absolute;
  right: 0;
`,ah=a.iK.h4`
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  margin: 0;
  overflow-wrap: anywhere;
`,sh=(0,a.iK)(ah)`
  font-weight: ${({theme:e})=>e.typography.weights.normal};
  color: ${({theme:e})=>e.colors.grayscale.base};
  ${Ns.B};
`,lh=(0,a.iK)(sh)`
  max-width: none;
`,dh=a.iK.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
`,ch=(0,a.iK)(dh)`
  margin-bottom: unset;
`,hh=(0,a.iK)(dh)`
  width: 100%;
`,uh=(0,a.iK)(Ft.l0)`
  width: 100%;
  && .ant-form-item-label > label {
    text-transform: none;
    width: 100%;
    padding-right: ${({theme:e})=>11*e.gridUnit}px;
  }
  .ant-form-item-tooltip {
    margin-bottom: ${({theme:e})=>e.gridUnit}px;
  }
`,ph=(0,a.iK)(Ft.l0)`
  && .ant-form-item-label > label {
    margin-bottom: 0;
    text-transform: none;
  }
  .ant-form-item-tooltip {
    margin-bottom: ${({theme:e})=>e.gridUnit}px;
  }
`,mh=(0,a.iK)(uh)`
  && .ant-form-item-label {
    line-height: 1;
    & > label {
      padding-right: unset;
    }
  }
`,gh=(0,a.iK)(Ft.xJ)`
  .ant-form-item-label {
    overflow: visible;
    label.ant-form-item-required:not(.ant-form-item-required-mark-optional) {
      &::after {
        display: none;
      }
    }
  }
`,fh=(0,a.iK)(Ft.xJ)`
  && {
    margin-bottom: 0;
    align-items: center;
  }

  .ant-form-item-label {
    overflow: visible;
    padding-bottom: 0;
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
    label.ant-form-item-required:not(.ant-form-item-required-mark-optional) {
      &::after {
        display: none;
      }
    }

    & > label::after {
      display: none;
    }
  }

  .ant-form-item-control {
    width: ${({theme:e})=>41*e.gridUnit}px;
  }
`,vh=gh,bh=a.iK.div`
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
  display: flex;
`,yh=()=>(0,V.tZ)("span",{css:e=>({color:e.colors.error.base,fontSize:`${e.typography.sizes.s}px`,paddingLeft:"1px"}),children:"*"}),xh=({description:e})=>(0,V.tZ)(bh,{children:(0,V.tZ)(N.u,{title:e,placement:"right",overlayInnerStyle:{display:"-webkit-box",WebkitLineClamp:10,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"normal"},getPopupContainer:e=>e.parentElement,children:(0,V.tZ)("i",{className:"fa fa-info-circle text-muted",css:e=>({paddingLeft:`${e.gridUnit}px`,cursor:"pointer"})})})}),Ch=({dataMaskSelected:e,filter:t,icon:n,onFilterSelectionChange:i,inView:r,showOverflow:a,parentRef:s,orientation:l=ft.Bp.Vertical,overflow:d=!1})=>{var c,h,u;const p=(0,o.useMemo)((()=>Ms()),[]),[m,g]=(0,o.useState)(!1),{name:f="<undefined>"}=t,v=zs()(t)&&hs(t,null==(c=t.dataMask)?void 0:c.filterState)?"error":void 0,b=!(null==(h=t.controlValues)||!h.enableEmptyFilter),{FilterControlContainer:y,FormItem:x,FilterControlTitleBox:C,FilterControlTitle:S}=((e,t)=>(0,o.useMemo)((()=>e===ft.Bp.Horizontal?t?{FilterControlContainer:mh,FormItem:vh,FilterControlTitleBox:hh,FilterControlTitle:lh}:{FilterControlContainer:ph,FormItem:fh,FilterControlTitleBox:ch,FilterControlTitle:sh}:{FilterControlContainer:uh,FormItem:gh,FilterControlTitleBox:dh,FilterControlTitle:ah}),[e,t]))(l,d),w=(0,o.useMemo)((()=>{var e;return(0,V.BX)(C,{children:[(0,V.tZ)(S,{children:f}),b&&(0,V.tZ)(yh,{}),(null==(e=t.description)?void 0:e.trim())&&(0,V.tZ)(xh,{description:t.description}),(0,V.tZ)(oh,{children:n})]})}),[C,S,f,b,t.description,n]),Z=(0,o.useContext)(th),k=(0,o.useMemo)((()=>l===ft.Bp.Horizontal?d?rh.Left:rh.Bottom:rh.Right),[l,d]);return(0,V.BX)(V.HY,{children:[(0,V.tZ)(Ts,{node:p,children:(0,V.tZ)(ol,{dataMaskSelected:e,filter:t,showOverflow:a,onFilterSelectionChange:i,inView:r,parentRef:s,setFilterActive:g,orientation:l,overflow:d,validateStatus:v})}),(0,V.tZ)(y,{layout:l!==ft.Bp.Horizontal||d?"vertical":"horizontal",children:(0,V.tZ)(mc,{filter:t,isVisible:!m&&!Z,placement:k,children:(0,V.tZ)("div",{children:(0,V.tZ)(x,{label:w,"aria-label":f,required:null==t||null==(u=t.controlValues)?void 0:u.enableEmptyFilter,validateStatus:v,children:(0,V.tZ)(Ds,{node:p})})})})})]})},Sh=(0,o.memo)(Ch),wh=({title:e,description:t})=>(0,V.BX)("div",{children:[(0,V.tZ)("h3",{children:e}),t?(0,V.tZ)("p",{children:t}):null]}),Zh=({title:e,description:t})=>{const n=(0,a.Fg)(),[i,r]=(0,Ns.Z)();return(0,V.BX)("div",{css:s.iv`
        display: flex;
        align-items: center;
        height: ${6*n.gridUnit}px;
        border-left: 1px solid ${n.colors.grayscale.light2};
        padding-left: ${4*n.gridUnit}px;

        .filter-item-wrapper:first-child & {
          border-left: none;
          padding-left: 0;
        }
      `,children:[(0,V.tZ)(N.u,{overlay:r?e:null,children:(0,V.tZ)("h3",{ref:i,css:s.iv`
            ${Ns.B};
            max-width: ${32.5*n.gridUnit}px;
            font-size: ${n.typography.sizes.m}px;
            font-weight: ${n.typography.weights.normal};
            margin: 0;
            color: ${n.colors.grayscale.dark1};
          `,children:e})}),t?(0,V.tZ)(N.u,{overlay:t,children:(0,V.tZ)(I.Z.BookOutlined,{iconSize:"l",iconColor:n.colors.grayscale.base,css:s.iv`
              margin: 0 ${1.5*n.gridUnit}px;
              vertical-align: unset;
              line-height: unset;
            `})}):null]})},kh=({title:e,description:t})=>{const n=(0,a.Fg)(),[i,r]=(0,Ns.Z)(),[o,l]=(0,Ns.Z)();return(0,V.BX)("div",{css:s.iv`
        border-top: 1px solid ${n.colors.grayscale.light2};
        padding-top: ${4*n.gridUnit}px;
        margin-bottom: ${4*n.gridUnit}px;
      `,children:[(0,V.tZ)(N.u,{overlay:r?(0,V.tZ)("strong",{children:e}):null,children:(0,V.tZ)("h3",{ref:i,css:s.iv`
            ${Ns.B};
            display: block;
            color: ${n.colors.grayscale.dark1};
            font-weight: ${n.typography.weights.normal};
            font-size: ${n.typography.sizes.m}px;
            margin: 0 0 ${n.gridUnit}px 0;
          `,children:e})}),t?(0,V.tZ)(N.u,{overlay:l?t:null,children:(0,V.tZ)("p",{ref:o,css:s.iv`
              ${Ns.B};
              display: block;
              font-size: ${n.typography.sizes.s}px;
              color: ${n.colors.grayscale.base};
              margin: ${n.gridUnit}px 0 0 0;
            `,children:t})}):null]})},Rh=({title:e,description:t,orientation:n=ft.Bp.Vertical,overflow:i=!1})=>n===ft.Bp.Horizontal?i?(0,V.tZ)(kh,{title:e,description:t}):(0,V.tZ)(Zh,{title:e,description:t}):(0,V.tZ)(wh,{title:e,description:t}),$h=({overflowedCrossFilters:e,filtersInScope:t,filtersOutOfScope:n,renderer:i,rendererCrossFilter:r,showCollapsePanel:o,forceRenderOutOfScope:a})=>(0,V.BX)("div",{css:e=>s.iv`
      width: ${56*e.gridUnit}px;
      padding: ${e.gridUnit}px 0;
    `,children:[e.map((t=>r(t,ft.Bp.Vertical,e.at(-1)))),t.map(i),o&&(0,V.tZ)(Bs,{filtersOutOfScope:n,renderer:i,forceRender:a,horizontalOverflow:!0})]}),Th=({dataMaskSelected:e,onFilterSelectionChange:t})=>{const n=(0,u.v9)((({dashboardInfo:e})=>(0,d.cr)(d.TT.HorizontalFilterBar)?e.filterBarOrientation:ft.Bp.Vertical)),{outlinedFilterId:i,lastUpdated:r}=el(),[a,l]=(0,o.useState)([]),c=(0,o.useRef)(null),p=(0,u.v9)((e=>e.dataMask)),m=(0,u.v9)((e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration})),g=(0,u.v9)((e=>e.dashboardLayout.present)),f=us(),v=(0,d.cr)(d.TT.DashboardCrossFilters),b=(0,o.useMemo)((()=>v?Ec({dataMask:p,chartConfiguration:m,dashboardLayout:g,verboseMaps:f}):[]),[m,g,p,v]),{filterControlFactory:y,filtersWithValues:x}=((e,t)=>{const n=gs(),i=(0,o.useMemo)((()=>Object.values(n)),[n]),r=(0,o.useMemo)((()=>i.map((t=>({...t,dataMask:e[t.id]})))),[i,e]);return{filterControlFactory:(0,o.useCallback)(((n,i,o)=>{const a=r[n];return(0,Hr.nY)(a)?(0,V.tZ)(Rh,{title:a.title,description:a.description,orientation:i,overflow:o}):(0,V.tZ)(Sh,{dataMaskSelected:e,filter:a,onFilterSelectionChange:t,inView:!1,orientation:i,overflow:o})}),[r,e,t]),filtersWithValues:r}})(e,t),C=(0,o.useMemo)((()=>{const e=new Array(x.length);for(let t=0;t<x.length;t+=1)e[t]=Ms();return e}),[x.length]),S=new Set(x.map((e=>e.id))),[w,Z]=Ps(x),k=(0,o.useMemo)((()=>x.some((e=>e.requiredFirst))),[x]),R=_s()&&x.length>0,$=(0,o.useCallback)((({id:e},t)=>{const n=x.findIndex((t=>t.id===e)),i=null!=t?t:e;return(0,V.BX)(o.Fragment,{children:["",(0,V.tZ)(Ds,{node:C[n],inView:!0})]},i)}),[x,C]),T=(0,o.useMemo)((()=>w.filter((({id:e})=>null==a?void 0:a.includes(e)))),[w,a]),D=(0,o.useMemo)((()=>b.filter((({emitterId:e,name:t})=>null==a?void 0:a.includes(`${t}${e}`)))),[a,b]),M=(0,o.useMemo)((()=>[...T.filter((e=>(0,Hr.S0)(e))),...D]),[D,T]),F=(0,o.useCallback)(((e,t,n)=>(0,V.tZ)(Ac,{filter:e,orientation:t,last:w.length>0&&`${n.name}${n.emitterId}`==`${e.name}${e.emitterId}`})),[w.length]),E=(0,o.useMemo)((()=>[...b.map((e=>({id:`${e.name}${e.emitterId}`,element:F(e,ft.Bp.Horizontal,b.at(-1))}))),...w.map(((e,t)=>({id:e.id,element:(0,V.tZ)("div",{className:"filter-item-wrapper",css:s.iv`
            flex-shrink: 0;
          `,children:$(e,t)})})))]),[w,$,F,b]),_=(0,o.useMemo)((()=>{const e=new Set(Z.map((({id:e})=>e))),t=new Set(T.map((({id:e})=>e)));return x.map((n=>e.has(n.id)||t.has(n.id)))}),[Z,x,T]);return(0,o.useEffect)((()=>{var e;i&&a.includes(i)&&(null==c||null==(e=c.current)||e.open())}),[i,r,c,a]),(0,V.BX)(V.HY,{children:[C.filter(((e,t)=>S.has(x[t].id))).map(((e,t)=>(0,V.tZ)(Ts,{node:e,children:y(t,n,_[t])},x[t].id))),n===ft.Bp.Vertical&&(0,V.BX)(V.HY,{children:[w.map($),R&&(0,V.tZ)(Bs,{filtersOutOfScope:Z,forceRender:k,hasTopMargin:w.length>0,renderer:$})]}),n===ft.Bp.Horizontal&&(0,V.tZ)("div",{css:e=>s.iv`
        padding: 0 ${4*e.gridUnit}px;
        min-width: 0;
        flex: 1;
      `,children:(0,V.tZ)(Os,{items:E,dropdownTriggerIcon:(0,V.tZ)(I.Z.FilterSmall,{css:s.iv`
              && {
                margin-right: -4px;
                display: flex;
              }
            `}),dropdownTriggerText:(0,h.t)("More filters"),dropdownTriggerCount:M.length,dropdownTriggerTooltip:0===M.length?(0,h.t)("No applied filters"):(0,h.t)("Applied filters: %s",M.map((e=>e.name)).join(", ")),dropdownContent:T.length||D.length||Z.length&&R?()=>(0,V.tZ)($h,{overflowedCrossFilters:D,filtersInScope:T,filtersOutOfScope:Z,renderer:$,rendererCrossFilter:F,showCollapsePanel:R,forceRenderOutOfScope:k}):void 0,forceRender:k,ref:c,onOverflowingStateChange:({overflowed:e})=>{(e.length!==a.length||a.reduce(((t,n,i)=>t||n!==e[i]),!1))&&l(e)}})})]})},Dh=(0,o.memo)(Th),Mh=a.iK.div`
  ${({theme:e})=>`\n    padding: ${3*e.gridUnit}px ${2*e.gridUnit}px ${3*e.gridUnit}px ${4*e.gridUnit}px;\n    background: ${e.colors.grayscale.light5};\n    box-shadow: inset 0px -2px 2px -1px ${e.colors.grayscale.light2};\n  `}
`,Ih=a.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: center;\n    justify-content: flex-start;\n    line-height: 0;\n\n    .loading {\n      margin: ${2*e.gridUnit}px auto ${2*e.gridUnit}px;\n      padding: 0;\n    }\n  `}
`,Fh=a.iK.div`
  ${({theme:e})=>`\n    font-weight: ${e.typography.weights.bold};\n    color: ${e.colors.grayscale.base};\n    font-size: ${e.typography.sizes.s}px;\n  `}
`,Eh=a.iK.div`
  ${({theme:e,hasFilters:t})=>`\n    height: 24px;\n    display: flex;\n    align-items: center;\n    padding: 0 ${4*e.gridUnit}px 0 ${4*e.gridUnit}px;\n    border-right: ${t?`1px solid ${e.colors.grayscale.light2}`:0};\n\n    button {\n      display: flex;\n      align-items: center;\n      > .anticon {\n        height: 24px;\n        padding-right: ${e.gridUnit}px;\n      }\n      > .anticon + span, > .anticon {\n          margin-right: 0;\n          margin-left: 0;\n        }\n    }\n  `}
`,_h=({actions:e,canEdit:t,dashboardId:n,dataMaskSelected:i,filterValues:r,isInitialized:o,onSelectionChange:a})=>{const s=(0,u.v9)((e=>e.dataMask)),l=(0,u.v9)((e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration})),c=(0,u.v9)((e=>e.dashboardLayout.present)),p=(0,d.cr)(d.TT.DashboardCrossFilters),m=us(),g=p?Ec({dataMask:s,chartConfiguration:l,dashboardLayout:c,verboseMaps:m}):[],f=r.length>0||g.length>0;return(0,V.tZ)(Mh,{...ps(),children:(0,V.tZ)(Ih,{children:o?(0,V.BX)(V.HY,{children:[(0,V.tZ)(Rc,{}),t&&(0,V.tZ)(Eh,{hasFilters:f,children:(0,V.BX)(cc,{dashboardId:n,createNewOnOpen:0===r.length,children:[(0,V.tZ)(I.Z.PlusSmall,{})," ",(0,h.t)("Add/Edit Filters")]})}),!f&&(0,V.tZ)(Fh,{children:(0,h.t)("No filters are currently added to this dashboard.")}),f&&(0,V.tZ)(Dh,{dataMaskSelected:i,onFilterSelectionChange:a}),e]}):(0,V.tZ)(D.Z,{position:"inline-centered"})})})},zh=(0,o.memo)(_h),Ph=a.iK.div`
  display: none;
`,Uh=[ut.KD.nativeFilters.name,ut.KD.permalinkKey.name],Oh=C()((async(e,t,n,i,r)=>{const{location:o}=e,{search:a}=o,s=new URLSearchParams(a),l=new URLSearchParams;let d;s.forEach(((e,t)=>{Uh.includes(t)||l.append(t,e)}));const c=(0,gt.eY)(ut.KD.nativeFiltersKey),h=JSON.stringify(i);d=n&&c&&await(0,vs.TZ)(t,h,c,r)?c:await(0,vs.u7)(t,h,r),d&&l.set(ut.KD.nativeFiltersKey.name,d),window.location.pathname.includes("/superset/dashboard")&&(e.location.pathname=window.location.pathname,e.replace({search:l.toString()}))}),Ia.M),Bh=({orientation:e=ft.Bp.Vertical,verticalConfig:t,hidden:n=!1})=>{const i=(0,ri.k6)(),r=fs(),[a,s]=(0,as.x)(r),l=(0,u.I0)(),[d,c]=(0,o.useState)(0),h=(0,ls.z)(),p=gs(),m=(0,Er.D)(p),g=Object.values(p),f=g.filter(Hr.kI),v=(0,u.v9)((({dashboardInfo:e})=>null==e?void 0:e.id)),b=(0,Er.D)(v),y=(0,u.v9)((({dashboardInfo:e})=>e.dash_edit_perm)),x=(0,u.v9)((e=>e.user)),[C]=Ps(f),S=(0,o.useRef)(a);S.current=a;const w=(0,o.useCallback)(((e,t)=>{s((n=>{var i,r,o;void 0!==(null==(i=t.filterState)?void 0:i.value)&&void 0===(null==(r=S.current[e.id])||null==(o=r.filterState)?void 0:o.value)&&e.requiredFirst&&l((0,nt.eG)(e.id,t)),n[e.id]={...(0,ss.H)(e.id),...t}}))}),[l,s]);(0,o.useEffect)((()=>{if(m&&v===b){const e={};Object.values(p).forEach((t=>{const n=null==m?void 0:m[t.id];if(!n)return;const i=t.filterType,r=t.targets,o=t.defaultDataMask,a=null==n?void 0:n.filterType,s=null==n?void 0:n.targets,l=null==n?void 0:n.defaultDataMask,d=i!==a,c=!ii()(r,s),h=!ii()(o,l);(d||c||h)&&(e[t.id]=(0,ss.H)(t.id))})),ct()(e)||(s((t=>({...t,...e}))),Object.keys(e).forEach((e=>l((0,nt.ze)(e)))))}}),[JSON.stringify(p),JSON.stringify(m),b]);const Z=JSON.stringify(r);(0,o.useEffect)((()=>{s((()=>r))}),[Z,s]),(0,o.useEffect)((()=>{null!=x&&x.userId&&Oh(i,v,d,r,h)}),[v,Z,i,d,h]);const k=(0,o.useCallback)((()=>{l((0,Vn.logEvent)(at.Qg,{}));const e=Object.keys(a);c(1),e.forEach((e=>{a[e]&&l((0,nt.eG)(e,a[e]))}))}),[a,l]),R=(0,o.useCallback)((()=>{const e=[];let t=!1;C.filter(Hr.kI).forEach((n=>{const{id:i}=n;var r;a[i]&&(null!=(r=n.controlValues)&&r.enableEmptyFilter&&(t=!1),e.push(i),s((e=>{var t;void 0!==(null==(t=e[i].filterState)?void 0:t.value)&&(e[i].filterState.value=void 0)})))})),t&&e.forEach((e=>l((0,nt.ze)(e))))}),[a,l,C,s]);((e,t)=>{const n=gs(),i=fs();(0,o.useEffect)((()=>{Object.keys(e).forEach((e=>{n[e]||t((t=>{delete t[e]}))}))}),[i,e,n,t])})(a,s);const $=((e,t,n)=>{const i=Object.values(e),r=Object.values(t);return(0,ai.JB)(cs(e),cs(t),{ignoreUndefined:!0})||i.length!==r.length||n.some((t=>{var n;return hs(t,null==e||null==(n=e[null==t?void 0:t.id])?void 0:n.filterState)}))})(a,r,C.filter(Hr.kI)),T=(()=>{const[e,t]=(0,o.useState)(!1),n=gs(),i=(0,u.v9)((e=>e.charts));let r=0;return e||(r=document.querySelectorAll('[data-ui-anchor="chart"]').length),(0,o.useEffect)((()=>{if(e)return;if(Object.values(n).find((({requiredFirst:e})=>e)))return void t(!0);let o;0===r&&(o=setTimeout((()=>{t(!0)}),1e3)),r>0&&void 0!==o&&clearTimeout(o);const a=Object.values(i).filter((({chartStatus:e})=>"loading"!==e)).length;r>0&&a>=r&&t(!0)}),[i,e,r]),e})(),D=(0,V.tZ)(Cs,{filterBarOrientation:e,width:null==t?void 0:t.width,onApply:k,onClearAll:R,dataMaskSelected:a,dataMaskApplied:r,isApplyDisabled:$}),M=e===ft.Bp.Horizontal?(0,V.tZ)(zh,{actions:D,canEdit:y,dashboardId:v,dataMaskSelected:a,filterValues:g,isInitialized:T,onSelectionChange:w}):t?(0,V.tZ)(ih,{actions:D,canEdit:y,dataMaskSelected:a,filtersOpen:t.filtersOpen,filterValues:g,isInitialized:T,height:t.height,offset:t.offset,onSelectionChange:w,toggleFiltersBar:t.toggleFiltersBar,width:t.width}):null;return n?(0,V.tZ)(Ph,{children:M}):M},Nh=(0,o.memo)(Bh);var qh=n(80663);const Vh=e=>{const t=e[_._4],n=null==t?void 0:t.children[0];return n===_.PV?e[_._4]:e[n]},Ah=(e,t)=>"ant-tabs-nav-wrap"===e.target.className||t.contains(e.target);var Kh=n(78718),jh=n.n(Kh),Lh=n(77205),Xh=["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall","resizeObserverPolyfill"];function Hh(){return Hh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Hh.apply(this,arguments)}var Wh=[],Yh={width:"100%",height:"100%"};function Gh(e){var t=e.className,n=e.children,i=e.debounceTime,r=void 0===i?300:i,a=e.ignoreDimensions,s=void 0===a?Wh:a,l=e.parentSizeStyles,d=void 0===l?Yh:l,c=e.enableDebounceLeadingCall,h=void 0===c||c,u=e.resizeObserverPolyfill,p=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,Xh),m=(0,o.useRef)(null),g=(0,o.useRef)(0),f=(0,o.useState)({width:0,height:0,top:0,left:0}),v=f[0],b=f[1],y=(0,o.useMemo)((function(){var e=Array.isArray(s)?s:[s];return C()((function(t){b((function(n){return Object.keys(n).filter((function(e){return n[e]!==t[e]})).every((function(t){return e.includes(t)}))?n:t}))}),r,{leading:h})}),[r,h,s]);return(0,o.useEffect)((function(){var e=new(u||window.ResizeObserver)((function(e){e.forEach((function(e){var t,n=null!=(t=null==e?void 0:e.contentRect)?t:{},i=n.left,r=n.top,o=n.width,a=n.height;g.current=window.requestAnimationFrame((function(){y({width:o,height:a,top:r,left:i})}))}))}));return m.current&&e.observe(m.current),function(){window.cancelAnimationFrame(g.current),e.disconnect(),y.cancel()}}),[y,u]),o.createElement("div",Hh({style:d,ref:m,className:t},p),n(Hh({},v,{ref:m.current,resize:y})))}Gh.propTypes={className:w().string,debounceTime:w().number,enableDebounceLeadingCall:w().bool,ignoreDimensions:w().oneOfType([w().any,w().arrayOf(w().any)]),children:w().func.isRequired};const Jh={depth:w().number.isRequired,editMode:w().bool,gridComponent:z.cP,handleComponentDrop:w().func.isRequired,isComponentVisible:w().bool.isRequired,resizeComponent:w().func.isRequired,setDirectPathToChild:w().func.isRequired,width:w().number.isRequired,dashboardId:w().number},Qh=e=>e.dropIndicatorProps&&(0,V.tZ)("div",{...e.dropIndicatorProps}),eu=a.iK.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,tu=a.iK.div`
  ${({theme:e,editMode:t})=>s.iv`
    display: flex;
    flex-direction: column;

    /* gutters between rows */
    & > div:not(:last-child):not(.empty-droptarget) {
      ${!t&&`margin-bottom: ${4*e.gridUnit}px`};
    }

    .empty-droptarget {
      width: 100%;
      height: ${4*e.gridUnit}px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: ${e.gridUnit}px;
      overflow: hidden;

      &:before {
        content: '';
        display: block;
        width: calc(100% - ${2*e.gridUnit}px);
        height: calc(100% - ${2*e.gridUnit}px);
        border: 1px dashed transparent;
        border-radius: ${e.gridUnit}px;
        opacity: 0.5;
      }
    }

    & > .empty-droptarget:first-child {
      height: ${4*e.gridUnit}px;
      margin-top: ${-4*e.gridUnit}px;
    }

    & > .empty-droptarget:last-child {
      height: ${24*e.gridUnit}px;
    }

    & > .empty-droptarget.empty-droptarget--full:only-child {
      height: 80vh;
    }
  `}
`,nu=a.iK.div`
  ${({theme:e})=>s.iv`
    // /* Editing guides */
    &.grid-column-guide {
      position: absolute;
      top: 0;
      min-height: 100%;
      background-color: ${(0,l.Zf)(e.colors.primary.base,parseFloat(e.opacity.light)/100)};
      pointer-events: none;
      box-shadow: inset 0 0 0 1px
        ${(0,l.Zf)(e.colors.primary.base,parseFloat(e.opacity.mediumHeavy)/100)};
    }
  `};
`;class iu extends o.PureComponent{constructor(e){super(e),this.state={isResizing:!1},this.handleResizeStart=this.handleResizeStart.bind(this),this.handleResizeStop=this.handleResizeStop.bind(this),this.handleTopDropTargetDrop=this.handleTopDropTargetDrop.bind(this),this.getRowGuidePosition=this.getRowGuidePosition.bind(this),this.setGridRef=this.setGridRef.bind(this),this.handleChangeTab=this.handleChangeTab.bind(this)}getRowGuidePosition(e){return e&&this.grid?e.getBoundingClientRect().bottom-this.grid.getBoundingClientRect().top-2:null}setGridRef(e){this.grid=e}handleResizeStart(){this.setState((()=>({isResizing:!0})))}handleResizeStop({id:e,widthMultiple:t,heightMultiple:n}){this.props.resizeComponent({id:e,width:t,height:n}),this.setState((()=>({isResizing:!1})))}handleTopDropTargetDrop(e){e&&this.props.handleComponentDrop({...e,destination:{...e.destination,index:0}})}handleChangeTab({pathToTabIndex:e}){this.props.setDirectPathToChild(e)}render(){var e,t,n,i;const{gridComponent:a,handleComponentDrop:s,depth:l,width:d,isComponentVisible:c,editMode:u,canEdit:p,setEditMode:m,dashboardId:g}=this.props,f=(d+_.es)/_.cz-_.es,{isResizing:v}=this.state,b=0===(null==a||null==(e=a.children)?void 0:e.length),y=b&&a.type===E.gn,x=u&&(0,V.tZ)(Oa.XJ,{title:(0,h.t)("Drag and drop components and charts to the dashboard"),description:(0,h.t)("You can create a new chart or use existing ones from the panel on the right"),buttonText:(0,V.BX)(V.HY,{children:[(0,V.tZ)("i",{className:"fa fa-plus"}),(0,h.t)("Create a new chart")]}),buttonAction:()=>{window.open(`/chart/add?dashboard_id=${g}`,"_blank","noopener noreferrer")},image:"chart.svg"}),C=u?(0,V.tZ)(Oa.XJ,{title:(0,h.t)("Drag and drop components to this tab"),description:(0,h.t)("You can create a new chart or use existing ones from the panel on the right"),buttonText:(0,V.BX)(V.HY,{children:[(0,V.tZ)("i",{className:"fa fa-plus"}),(0,h.t)("Create a new chart")]}),buttonAction:()=>{window.open(`/chart/add?dashboard_id=${g}`,"_blank","noopener noreferrer")},image:"chart.svg"}):(0,V.tZ)(Oa.XJ,{title:(0,h.t)("There are no components added to this tab"),description:p&&(0,h.t)("You can add the components in the edit mode."),buttonText:p&&(0,h.t)("Edit the dashboard"),buttonAction:p&&(()=>{m(!0)}),image:"chart.svg"});return d<100?null:(0,V.BX)(V.HY,{children:[b&&(0,V.tZ)(eu,{children:y?C:x}),(0,V.tZ)("div",{className:"dashboard-grid",ref:this.setGridRef,children:(0,V.BX)(tu,{className:"grid-content",editMode:u,children:[u&&(0,V.tZ)($e,{component:a,depth:l,parentComponent:null,index:0,orientation:"column",onDrop:this.handleTopDropTargetDrop,className:r()({"empty-droptarget":!0,"empty-droptarget--full":0===(null==a||null==(t=a.children)?void 0:t.length)}),editMode:!0,dropToChild:0===(null==a||null==(n=a.children)?void 0:n.length),children:Qh}),null==a||null==(i=a.children)?void 0:i.map(((e,t)=>(0,V.BX)(o.Fragment,{children:[(0,V.tZ)(os,{id:e,parentId:a.id,depth:l+1,index:t,availableColumnCount:_.cz,columnWidth:f,isComponentVisible:c,onResizeStart:this.handleResizeStart,onResize:this.handleResize,onResizeStop:this.handleResizeStop,onChangeTab:this.handleChangeTab}),u&&(0,V.tZ)($e,{component:a,depth:l,parentComponent:null,index:t+1,orientation:"column",onDrop:s,className:"empty-droptarget",editMode:!0,children:Qh})]},e))),v&&Array(_.cz).fill(null).map(((e,t)=>(0,V.tZ)(nu,{className:"grid-column-guide",style:{left:t*_.es+t*f,width:f}},`grid-column-${t}`)))]})})]})}}iu.propTypes=Jh,iu.defaultProps={};const ru=iu,ou=(0,u.$j)((function({dashboardState:e,dashboardInfo:t}){return{editMode:e.editMode,canEdit:t.dash_edit_perm,dashboardId:t.id}}),(function(e){return(0,f.DE)({handleComponentDrop:Nn._p,resizeComponent:Nn.iO,setDirectPathToChild:Bn.E2,setEditMode:Bn.Mb},e)}))(ru);var au=n(99547);const su=({topLevelTabs:e})=>{const t=(()=>{const e=(0,u.v9)((e=>{var t;return null==(t=e.nativeFilters)?void 0:t.filters}));return(0,o.useMemo)((()=>e?Object.values(e).map((e=>jh()(e,["id","scope","type"]))):[]),[JSON.stringify(e)])})(),n=(0,u.I0)(),i=(0,u.v9)((e=>e.dashboardLayout.present)),r=(0,u.v9)((e=>e.dashboardInfo)),a=(0,u.v9)((e=>e.dashboardState.directPathToChild)),s=(0,u.v9)((e=>Object.values(e.charts).map((e=>e.id)))),l=(0,o.useRef)(),d=(0,o.useMemo)((()=>{const e=Xa({currentComponent:Vh(i),directPathToChild:a});var t;return-1===e?null!=(t=l.current)?t:0:(l.current=e,e)}),[i,a]);(0,o.useEffect)((()=>{if(0===t.length)return;const e=t.map((e=>{if(e.id.startsWith(ms.Ky))return{filterId:e.id,tabsInScope:[],chartsInScope:[]};const t=(0,Ti.Q)(e.scope,s,i),n=(0,Vr.Rz)(i,t);return{filterId:e.id,tabsInScope:Array.from(n),chartsInScope:t}}));n((0,Gs.xk)(e))}),[t,i,n]);const c=e?e.children:[_.PV],h=Math.min(d,c.length-1),p=0===h?_.PV:h.toString();return(0,o.useEffect)((()=>{setTimeout((()=>{n((0,Bn.hZ)())}),500)}),[a,n]),(0,o.useEffect)((()=>{var e;const t=(0,Lh.ZP)(),n=(0,au.UY)(null==r||null==(e=r.metadata)?void 0:e.color_namespace);return t.source=Lh.Fx.Dashboard,(0,au.$C)(r.metadata),()=>{(0,au.$w)((0,au.UY)(n))}}),[r.id,n]),(0,V.tZ)("div",{className:"grid-container",children:(0,V.tZ)(Gh,{children:({width:e})=>(0,V.tZ)(g.ZP,{id:_.PV,activeKey:p,renderTabBar:()=>(0,V.tZ)(V.HY,{}),fullWidth:!1,animated:!1,allowOverflow:!0,onFocus:e=>{e.target.classList.contains("ant-tabs-tabpane")&&window.scrollY<220&&window.scrollTo(window.scrollX,0)},children:c.map(((t,n)=>(0,V.tZ)(g.ZP.TabPane,{children:(0,V.tZ)(ou,{gridComponent:i[t],depth:_.Mu+1,width:e,isComponentVisible:n===d})},0===n?_.PV:n.toString())))})})})};var lu=n(40917);const du=a.iK.div`
  ${({theme:e})=>s.iv`
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    flex: 1;
    /* Special cases */

    &.dragdroppable--dragging {
      &
        .dashboard-component-tabs-content
        > .empty-droptarget.empty-droptarget--full {
        height: 100%;
      }
      & .empty-droptarget:before {
        display: block;
        border-color: ${e.colors.primary.light1};
        background-color: ${e.colors.primary.light3};
      }
      & .grid-row:after {
        border-style: hidden;
      }
      & .droptarget-side:last-child {
        inset-inline-end: 0;
      }
      & .droptarget-edge:last-child {
        inset-block-end: 0;
      }
    }

    /* A row within a column has inset hover menu */
    .dragdroppable-column .dragdroppable-row .hover-menu--left {
      left: ${-3*e.gridUnit}px;
      background: ${e.colors.grayscale.light5};
      border: 1px solid ${e.colors.grayscale.light2};
    }

    .dashboard-component-tabs {
      position: relative;
    }

    /* A column within a column or tabs has inset hover menu */
    .dragdroppable-column .dragdroppable-column .hover-menu--top,
    .dashboard-component-tabs .dragdroppable-column .hover-menu--top {
      top: ${-3*e.gridUnit}px;
      background: ${e.colors.grayscale.light5};
      border: 1px solid ${e.colors.grayscale.light2};
    }

    /* move Tabs hover menu to top near actual Tabs */
    .dashboard-component-tabs > .hover-menu-container > .hover-menu--left {
      top: 0;
      transform: unset;
      background: transparent;
    }

    /* push Chart actions to upper right */
    .dragdroppable-column .dashboard-component-chart-holder .hover-menu--top,
    .dragdroppable .dashboard-component-header .hover-menu--top {
      right: ${2*e.gridUnit}px;
      top: ${2*e.gridUnit}px;
      background: transparent;
      border: none;
      transform: unset;
      left: unset;
    }
    div:hover > .hover-menu-container .hover-menu,
    .hover-menu-container .hover-menu:hover {
      opacity: 1;
    }

    p {
      margin: 0 0 ${2*e.gridUnit}px 0;
    }

    i.danger {
      color: ${e.colors.error.base};
    }

    i.warning {
      color: ${e.colors.alert.base};
    }
  `}
`,cu=({children:e})=>{const t=(0,u.v9)((e=>e.dashboardState.editMode)),n=(0,lu.N)(),[i,a]=(0,o.useState)(n.getMonitor().isDragging());return(0,o.useEffect)((()=>{const e=n.getMonitor(),t=C()(a,Ia.o),i=e.subscribeToStateChange((()=>{e.isDragging()?t(!0):(t.cancel(),a(!1))}));return()=>{i(),t.cancel()}}),[n]),(0,V.tZ)(du,{className:r()({"dragdroppable--dragging":t&&i}),children:e})},hu=a.iK.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  z-index: 11;
  width: ${({width:e})=>e}px;
  ${({hidden:e})=>e&&"display: none;"}
`,uu=a.iK.div`
  position: sticky;
  top: -1px;
  width: ${({width:e})=>e}px;
  flex: 0 0 ${({width:e})=>e}px;
`,pu=a.iK.div`
  ${({theme:e})=>s.iv`
    grid-column: 2;
    grid-row: 1;
    position: sticky;
    top: 0;
    z-index: 100;
    max-width: 100vw;

    .empty-droptarget:before {
      position: absolute;
      content: '';
      display: none;
      width: calc(100% - ${2*e.gridUnit}px);
      height: calc(100% - ${2*e.gridUnit}px);
      left: ${e.gridUnit}px;
      top: ${e.gridUnit}px;
      border: 1px dashed transparent;
      border-radius: ${e.gridUnit}px;
      opacity: 0.5;
    }
  `}
`,mu=a.iK.div`
  grid-column: 2;
  grid-row: 2;
  // @z-index-above-dashboard-header (100) + 1 = 101
  ${({fullSizeChartId:e})=>e&&"z-index: 101;"}
`,gu=a.iK.div`
  ${({theme:e})=>s.iv`
    &.dashboard {
      position: relative;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      height: 100%;

      /* drop shadow for top-level tabs only */
      & .dashboard-component-tabs {
        box-shadow: 0 ${e.gridUnit}px ${e.gridUnit}px 0
          ${(0,l.Zf)(e.colors.grayscale.dark2,parseFloat(e.opacity.light)/100)};
        padding-left: ${2*e.gridUnit}px; /* note this is added to tab-level padding, to match header */
      }

      .dropdown-toggle.btn.btn-primary .caret {
        color: ${e.colors.grayscale.light5};
      }

      .background--transparent {
        background-color: transparent;
      }

      .background--white {
        background-color: ${e.colors.grayscale.light5};
      }
    }
    &.dashboard--editing {
      .grid-row:after,
      .dashboard-component-tabs > .hover-menu:hover + div:after {
        border: 1px dashed transparent;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        pointer-events: none;
      }

      .grid-row.grid-row--hovered:after,
      .dashboard-component-tabs > .grid-row--hovered:after {
        border: 2px dashed ${e.colors.primary.base};
      }

      .resizable-container {
        & .dashboard-component-chart-holder {
          .dashboard-chart {
            .chart-container {
              cursor: move;
              opacity: 0.2;
            }

            .slice_container {
              /* disable chart interactions in edit mode */
              pointer-events: none;
            }
          }

          &:hover .dashboard-chart .chart-container {
            opacity: 0.7;
          }
        }

        &:hover,
        &.resizable-container--resizing:hover {
          & > .dashboard-component-chart-holder:after {
            border: 1px dashed ${e.colors.primary.base};
          }
        }
      }

      .resizable-container--resizing:hover > .grid-row:after,
      .hover-menu:hover + .grid-row:after,
      .dashboard-component-tabs > .hover-menu:hover + div:after {
        border: 1px dashed ${e.colors.primary.base};
        z-index: 2;
      }

      .grid-row:after,
      .dashboard-component-tabs > .hover-menu + div:after {
        border: 1px dashed ${e.colors.grayscale.light2};
      }

      /* provide hit area in case row contents is edge to edge */
      .dashboard-component-tabs-content {
        > .dragdroppable-row {
          padding-top: ${4*e.gridUnit}px;
        }
      }

      .dashboard-component-chart-holder {
        &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1;
          pointer-events: none;
          border: 1px solid transparent;
        }

        &:hover:after {
          border: 1px dashed ${e.colors.primary.base};
          z-index: 2;
        }
      }

      .contract-trigger:before {
        display: none;
      }
    }

    & .dashboard-component-tabs-content {
      & > div:not(:last-child):not(.empty-droptarget) {
        margin-bottom: ${4*e.gridUnit}px;
      }

      & > .empty-droptarget {
        z-index: ${Ii.oB};
        position: absolute;
        width: 100%;
      }

      & > .empty-droptarget:first-child:not(.empty-droptarget--full) {
        height: ${4*e.gridUnit}px;
        top: 0;
      }

      & > .empty-droptarget:last-child {
        height: ${4*e.gridUnit}px;
        bottom: ${4*-e.gridUnit}px;
      }
    }
  `}
`,fu=a.iK.div`
  ${({theme:e,editMode:t,marginLeft:n})=>s.iv`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: auto;
    flex: 1;

    .grid-container .dashboard-component-tabs {
      box-shadow: none;
      padding-left: 0;
    }

    .grid-container {
      /* without this, the grid will not get smaller upon toggling the builder panel on */
      width: 0;
      flex: 1;
      position: relative;
      margin-top: ${6*e.gridUnit}px;
      margin-right: ${8*e.gridUnit}px;
      margin-bottom: ${6*e.gridUnit}px;
      margin-left: ${n}px;

      ${t&&`\n      max-width: calc(100% - ${Ii.XX+16*e.gridUnit}px);\n    `}

      /* this is the ParentSize wrapper */
    & > div:first-child {
        height: inherit !important;
      }
    }

    .dashboard-builder-sidepane {
      width: ${Ii.XX}px;
      z-index: 1;
    }

    .dashboard-component-chart-holder {
      width: 100%;
      height: 100%;
      background-color: ${e.colors.grayscale.light5};
      position: relative;
      padding: ${4*e.gridUnit}px;
      overflow-y: visible;

      // transitionable traits to show filter relevance
      transition:
        opacity ${e.transitionTiming}s ease-in-out,
        border-color ${e.transitionTiming}s ease-in-out,
        box-shadow ${e.transitionTiming}s ease-in-out;

      &.fade-in {
        border-radius: ${e.borderRadius}px;
        box-shadow:
          inset 0 0 0 2px ${e.colors.primary.base},
          0 0 0 3px
            ${(0,l.Zf)(e.colors.primary.base,parseFloat(e.opacity.light)/100)};
      }

      &.fade-out {
        border-radius: ${e.borderRadius}px;
        box-shadow: none;
      }

      & .missing-chart-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        justify-content: center;

        .missing-chart-body {
          font-size: ${e.typography.sizes.s}px;
          position: relative;
          display: flex;
        }
      }
    }
  `}
`,vu=()=>{var e,t;const i=(0,u.I0)(),l=(0,li.fG)(),m=(0,a.Fg)(),g=(0,u.v9)((({dashboardInfo:e})=>`${e.id}`)),f=(0,u.v9)((e=>e.dashboardLayout.present)),v=(0,u.v9)((e=>e.dashboardState.editMode)),b=(0,u.v9)((({dashboardInfo:e})=>e.dash_edit_perm)),y=(0,u.v9)((({dashboardState:e})=>e.dashboardIsSaving)),x=(0,u.v9)((e=>e.dashboardState.fullSizeChartId)),C=(0,d.cr)(d.TT.DashboardCrossFilters),S=(0,u.v9)((({dashboardInfo:e})=>(0,d.cr)(d.TT.HorizontalFilterBar)?e.filterBarOrientation:ft.Bp.Vertical)),w=(0,o.useCallback)((({pathToTabIndex:e})=>{i((0,Bn.E2)(e)),window.scrollTo(0,0)}),[i]),Z=(0,o.useCallback)((()=>{i((0,Nn.g3)());const e=Ha(Vh(f),0);i((0,Bn.E2)(e))}),[f,i]),k=(0,o.useCallback)((e=>i((0,Nn._p)(e))),[i]),R=(0,o.useRef)(null),$=f[_._4],T=null==$?void 0:$.children[0],M=T!==_.PV?f[T]:void 0,F=(0,gt.eY)(ut.KD.standalone),E=F===_._B.Report,z=l.hideTitle||F===_._B.HideNavAndTitle||E,[P,U]=(0,o.useState)(0);(0,o.useEffect)((()=>{var e,t;let i;return U((null==(e=R.current)||null==(t=e.getBoundingClientRect())?void 0:t.height)||0),n.g.hasOwnProperty("ResizeObserver")&&R.current&&(i=new ResizeObserver((e=>{U((t=>{var n,i;return(null==e||null==(n=e[0])||null==(i=n.contentRect)?void 0:i.height)||t}))})),i.observe(R.current)),()=>{var e;null==(e=i)||e.disconnect()}}),[]);const{showDashboard:O,missingInitialFilters:B,dashboardFiltersOpen:N,toggleDashboardFiltersOpen:q,nativeFiltersEnabled:A}=(()=>{const[e,t]=(0,o.useState)(!1),n=(0,u.v9)((({dashboardInfo:e})=>e.dash_edit_perm)),i=gs(),r=Object.values(i),a=(0,gt.eY)(ut.KD.expandFilters),[s,l]=(0,o.useState)(null!=a?a:!!r.length),d=n||!n&&0!==r.length,c=r.filter((e=>e.requiredFirst)),h=fs(),p=c.filter((({id:e})=>{var t,n;return void 0===(null==(t=h[e])||null==(n=t.filterState)?void 0:n.value)})).map((({name:e})=>e)),m=e||!d||0===p.length,g=(0,o.useCallback)((e=>{l(null!=e?e:!s)}),[s]);return(0,o.useEffect)((()=>{!1===a||0===r.length&&d?g(!1):g(!0)}),[r.length]),(0,o.useEffect)((()=>{m&&t(!0)}),[m]),{showDashboard:m,missingInitialFilters:p,dashboardFiltersOpen:s,toggleDashboardFiltersOpen:g,nativeFiltersEnabled:d}})(),[K,j]=(0,c.W)({threshold:[1]}),L=(C||A)&&!v,X=`calc(100vh - ${Ii.UN+(j||F?0:Ii.Ky)}px)`,H=N?0:P+20,W=(0,o.useMemo)((()=>({marginLeft:N||v||!A||S===ft.Bp.Horizontal?0:-32})),[N,v,S,A]),Y=(0,o.useRef)(M);(0,o.useEffect)((()=>{var e,t,n;const r=null==(e=Y.current)||null==(t=e.children)?void 0:t.length,o=null==M||null==(n=M.children)?void 0:n.length;if(void 0!==r&&void 0!==o&&o>r){const e=Ha(Vh(f),o-1);i((0,Bn.E2)(e))}Y.current=M}),[M]);const G=(0,o.useCallback)((({dropIndicatorProps:e})=>(0,V.BX)("div",{children:[!z&&(0,V.tZ)(An,{}),L&&S===ft.Bp.Horizontal&&(0,V.tZ)(Nh,{orientation:ft.Bp.Horizontal,hidden:E}),e&&(0,V.tZ)("div",{...e}),!E&&M&&!l.hideNav&&(0,V.tZ)(ia,{shouldFocus:Ah,menuItems:[(0,V.tZ)(Ln,{icon:(0,V.tZ)(I.Z.FallOutlined,{iconSize:"xl"}),label:(0,h.t)("Collapse tab content"),onClick:Z})],editMode:v,children:(0,V.tZ)(os,{id:null==M?void 0:M.id,parentId:_._4,depth:_.Mu+1,index:0,renderTabContent:!1,renderHoverMenu:!1,onChangeTab:w})})]})),[A,S,v,w,Z,z,E,M,l.hideNav]),J=N||v||!A||S===ft.Bp.Horizontal?8*m.gridUnit:0;return(0,V.BX)(cu,{children:[L&&S===ft.Bp.Vertical&&(0,V.tZ)(V.HY,{children:(0,V.tZ)(qh.Z,{id:`dashboard:${g}`,enable:N,minWidth:Ii.I6,maxWidth:Ii.aF,initialWidth:Ii.I6,children:e=>{const t=N?e:Ii.gz;return(0,V.tZ)(hu,{width:t,hidden:E,children:(0,V.tZ)(uu,{ref:K,width:t,children:(0,V.tZ)(p.Z,{children:(0,V.tZ)(Nh,{orientation:ft.Bp.Vertical,verticalConfig:{filtersOpen:N,toggleFiltersBar:q,width:t,height:X,offset:H}})})})})}})}),(0,V.tZ)(pu,{ref:R,children:(0,V.tZ)($e,{className:r()(!M&&v&&"empty-droptarget"),component:$,parentComponent:null,depth:_.Mu,index:0,orientation:"column",onDrop:k,editMode:v,disableDragDrop:!!M,style:W,children:G})}),(0,V.BX)(mu,{fullSizeChartId:x,children:[(0,V.tZ)(s.xB,{styles:s.iv`
            // @z-index-above-dashboard-header (100) + 1 = 101
            ${x&&"div > .filterStatusPopover.ant-popover{z-index: 101}"}
          `}),!v&&!M&&0===(null==(e=f[_.PV])||null==(t=e.children)?void 0:t.length)&&(0,V.tZ)(Oa.XJ,{title:(0,h.t)("There are no charts added to this dashboard"),description:b&&(0,h.t)("Go to the edit mode to configure the dashboard and add charts"),buttonText:b&&(0,h.t)("Edit the dashboard"),buttonAction:()=>i((0,Bn.Mb)(!0)),image:"dashboard.svg"}),(0,V.tZ)(gu,{className:r()("dashboard",v&&"dashboard--editing"),children:(0,V.BX)(fu,{className:"dashboard-content",editMode:v,marginLeft:J,children:[O?B.length>0?(0,V.tZ)("div",{css:s.iv`
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    flex: 1;
                    & div {
                      width: 500px;
                    }
                  `,children:(0,V.tZ)(Xs,{title:(0,h.t)("Unable to load dashboard"),body:(0,h.t)("The following filters have the 'Select first filter value by default'\n                    option checked and could not be loaded, which is preventing the dashboard\n                    from rendering: %s",B.join(", "))})}):(0,V.tZ)(su,{topLevelTabs:M}):(0,V.tZ)(D.Z,{}),v&&(0,V.tZ)(tt,{topOffset:P})]})})]}),y&&(0,V.tZ)(D.Z,{css:s.iv`
            && {
              position: fixed;
            }
          `})]})}},78423:(e,t,n)=>{"use strict";n.d(t,{V:()=>p});var i=n(58593),r=n(51995),o=n(61988),a=n(35944);const s=r.iK.div`
  ${({theme:e})=>`\n    .tooltip-header {\n      font-size: ${e.typography.sizes.m}px;\n      font-weight: ${e.typography.weights.bold};\n    }\n\n    .tooltip-description {\n      margin-top: ${2*e.gridUnit}px;\n      display: -webkit-box;\n      -webkit-line-clamp: 20;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  `}
`,l=r.iK.div`
  ${({theme:e})=>`\n    left: ${3*e.gridUnit}px;\n    right: ${3*e.gridUnit}px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n  `}
`,d=r.iK.span`
  ${({theme:e})=>`\n    left: ${3*e.gridUnit}px;\n    right: ${3*e.gridUnit}px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n  `}
`,c=r.iK.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  width: 100%;
`,h=r.iK.span`
  ${({theme:{typography:{sizes:e,weights:t}}})=>`\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: ${e.s}px;\n    font-weight: ${t.light};\n    line-height: 1.6;\n  `}
`,u=e=>!["null","none"].includes(e.toLowerCase())&&""!==e.trim(),p=e=>(0,a.tZ)(i.u,{mouseEnterDelay:.2,placement:"right",title:(0,a.BX)(s,{children:[(0,a.tZ)("div",{className:"tooltip-header",children:e.table_name&&u(e.table_name)?e.table_name:(0,o.t)("Not defined")}),(0,a.BX)("div",{className:"tooltip-description",children:[(0,a.BX)("div",{children:[(0,o.t)("Database"),": ",e.database.database_name]}),(0,a.BX)("div",{children:[(0,o.t)("Schema"),":"," ",e.schema&&u(e.schema)?e.schema:(0,o.t)("Not defined")]})]})]}),children:(0,a.BX)(l,{children:[(0,a.tZ)(d,{children:e.table_name&&u(e.table_name)?e.table_name:e.database.database_name}),(0,a.BX)(c,{children:[(0,a.tZ)(h,{children:e.database.database_name}),e.schema&&u(e.schema)&&(0,a.BX)(h,{children:[" - ",e.schema]})]})]})})},74448:(e,t,n)=>{"use strict";n.d(t,{Am:()=>l,h2:()=>o,jp:()=>s,un:()=>a});var i=n(51995),r=n(4591);const o=0,a=i.iK.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>e===o?"100%":`${e}px`};
`,s=(0,i.iK)(r.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,l=i.iK.div`
  color: ${({theme:e,status:t="error"})=>{var n;return null==(n=e.colors[t])?void 0:n.base}};
`},83379:(e,t,n)=>{"use strict";function i(e){return e?`${e.first_name} ${e.last_name}`:""}n.d(t,{Z:()=>i})},90057:(e,t,n)=>{"use strict";n.d(t,{C:()=>a,x:()=>o});var i=n(12902),r=n(67294);function o(e){var t=(0,r.useState)((function(){return(0,i.vV)("function"==typeof e?e():e,!0)})),n=t[1];return[t[0],(0,r.useCallback)((function(e){n("function"==typeof e?(0,i.Uy)(e):(0,i.vV)(e))}),[])]}function a(e,t,n){var o=(0,r.useMemo)((function(){return(0,i.Uy)(e)}),[e]);return(0,r.useReducer)(o,t,n)}}}]);
//# sourceMappingURL=8b3209e659d14f9cbeb9.chunk.js.map
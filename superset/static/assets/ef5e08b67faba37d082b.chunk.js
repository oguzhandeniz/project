/*! For license information please see ef5e08b67faba37d082b.chunk.js.LICENSE.txt */
(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[452],{10752:(e,t,i)=>{var n=i(21078),r=i(87740);e.exports=function(e,t){return n(r(e,t),1/0)}},9238:(e,t,i)=>{"use strict";i.d(t,{DragLayer:()=>X,DragSource:()=>z,DropTarget:()=>V});var n=i(28195);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e){return"function"==typeof e}function a(){}function s(e){if(!function(e){return"object"===r(e)&&null!==e}(e))return!1;if(null===Object.getPrototypeOf(e))return!0;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function l(e){var t=e.current;return null==t?null:t.decoratedRef?t.decoratedRef.current:t}function d(e){return(t=e)&&t.prototype&&"function"==typeof t.prototype.render||function(e){var t;return"Symbol(react.forward_ref)"===(null==e||null===(t=e.$$typeof)||void 0===t?void 0:t.toString())}(e);var t}var c=i(67294),h=i(15047),u=i(8679),p=i.n(u),m=i(82514);function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t,i){return t&&f(e.prototype,t),i&&f(e,i),e}var b=function(){var e=function(){function e(t){g(this,e),this.isDisposed=!1,this.action=o(t)?t:a}return v(e,[{key:"dispose",value:function(){this.isDisposed||(this.action(),this.isDisposed=!0)}}],[{key:"isDisposable",value:function(e){return Boolean(e&&o(e.dispose))}},{key:"_fixup",value:function(t){return e.isDisposable(t)?t:e.empty}},{key:"create",value:function(t){return new e(t)}}]),e}();return e.empty={dispose:a},e}(),y=function(){function e(){g(this,e),this.isDisposed=!1;for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];this.disposables=i}return v(e,[{key:"add",value:function(e){this.isDisposed?e.dispose():this.disposables.push(e)}},{key:"remove",value:function(e){var t=!1;if(!this.isDisposed){var i=this.disposables.indexOf(e);-1!==i&&(t=!0,this.disposables.splice(i,1),e.dispose())}return t}},{key:"clear",value:function(){if(!this.isDisposed){for(var e=this.disposables.length,t=new Array(e),i=0;i<e;i++)t[i]=this.disposables[i];this.disposables=[];for(var n=0;n<e;n++)t[n].dispose()}}},{key:"dispose",value:function(){if(!this.isDisposed){this.isDisposed=!0;for(var e=this.disposables.length,t=new Array(e),i=0;i<e;i++)t[i]=this.disposables[i];this.disposables=[];for(var n=0;n<e;n++)t[n].dispose()}}}]),e}(),x=function(){function e(){g(this,e),this.isDisposed=!1}return v(e,[{key:"getDisposable",value:function(){return this.current}},{key:"setDisposable",value:function(e){var t=this.isDisposed;if(!t){var i=this.current;this.current=e,i&&i.dispose()}t&&e&&e.dispose()}},{key:"dispose",value:function(){if(!this.isDisposed){this.isDisposed=!0;var e=this.current;this.current=void 0,e&&e.dispose()}}}]),e}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function w(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Z(e,t){return Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Z(e,t)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}function k(e){var t=e.DecoratedComponent,i=e.createHandler,r=e.createMonitor,o=e.createConnector,a=e.registerHandler,s=e.containerDisplayName,l=e.getType,u=e.collect,g=e.options.arePropsEqual,f=void 0===g?h.w:g,v=t,k=t.displayName||t.name||"Component",$=function(){var e=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(T,e);var t,s,p,g,$=(p=T,g=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t,i,n=R(p);if(g){var r=R(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return t=this,!(i=e)||"object"!==C(i)&&"function"!=typeof i?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t):i});function T(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,T),(t=$.call(this,e)).decoratedRef=c.createRef(),t.handleChange=function(){var e=t.getCurrentState();(0,h.w)(e,t.state)||t.setState(e)},t.disposable=new x,t.receiveProps(e),t.dispose(),t}return t=T,(s=[{key:"getHandlerId",value:function(){return this.handlerId}},{key:"getDecoratedComponentInstance",value:function(){return(0,n.k)(this.decoratedRef.current,"In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"),this.decoratedRef.current}},{key:"shouldComponentUpdate",value:function(e,t){return!f(e,this.props)||!(0,h.w)(t,this.state)}},{key:"componentDidMount",value:function(){this.disposable=new x,this.currentType=void 0,this.receiveProps(this.props),this.handleChange()}},{key:"componentDidUpdate",value:function(e){f(this.props,e)||(this.receiveProps(this.props),this.handleChange())}},{key:"componentWillUnmount",value:function(){this.dispose()}},{key:"receiveProps",value:function(e){this.handler&&(this.handler.receiveProps(e),this.receiveType(l(e)))}},{key:"receiveType",value:function(e){if(this.handlerMonitor&&this.manager&&this.handlerConnector&&e!==this.currentType){this.currentType=e;var t=(o=a(e,this.handler,this.manager),s=2,function(e){if(Array.isArray(e))return e}(o)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var i=[],n=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}return i}}(o,s)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?S(e,t):void 0}}(o,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=t[0],n=t[1];this.handlerId=i,this.handlerMonitor.receiveHandlerId(i),this.handlerConnector.receiveHandlerId(i);var r=this.manager.getMonitor().subscribeToStateChange(this.handleChange,{handlerIds:[i]});this.disposable.setDisposable(new y(new b(r),new b(n)))}var o,s}},{key:"dispose",value:function(){this.disposable.dispose(),this.handlerConnector&&this.handlerConnector.receiveHandlerId(null)}},{key:"getCurrentState",value:function(){return this.handlerConnector?u(this.handlerConnector.hooks,this.handlerMonitor,this.props):{}}},{key:"render",value:function(){var e=this;return c.createElement(m.L.Consumer,null,(function(t){var i=t.dragDropManager;return e.receiveDragDropManager(i),"undefined"!=typeof requestAnimationFrame&&requestAnimationFrame((function(){var t;return null===(t=e.handlerConnector)||void 0===t?void 0:t.reconnect()})),c.createElement(v,Object.assign({},e.props,e.getCurrentState(),{ref:d(v)?e.decoratedRef:null}))}))}},{key:"receiveDragDropManager",value:function(e){void 0===this.manager&&((0,n.k)(void 0!==e,"Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",k,k),void 0!==e&&(this.manager=e,this.handlerMonitor=r(e),this.handlerConnector=o(e.getBackend()),this.handler=i(this.handlerMonitor,this.decoratedRef)))}}])&&w(t.prototype,s),T}(c.Component);return e.DecoratedComponent=t,e.displayName="".concat(s,"(").concat(k,")"),e}();return p()($,t)}var $=i(33273),T=i(60938),D=i(8556);function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function I(e,t){return"string"==typeof e||"symbol"===M(e)||!!t&&Array.isArray(e)&&e.every((function(e){return I(e,!1)}))}function F(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var E=["canDrag","beginDrag","isDragging","endDrag"],_=["beginDrag"],P=function(){function e(t,i,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.props=null,this.beginDrag=function(){if(r.props)return r.spec.beginDrag(r.props,r.monitor,r.ref.current)},this.spec=t,this.monitor=i,this.ref=n}var t,i;return t=e,(i=[{key:"receiveProps",value:function(e){this.props=e}},{key:"canDrag",value:function(){return!!this.props&&(!this.spec.canDrag||this.spec.canDrag(this.props,this.monitor))}},{key:"isDragging",value:function(e,t){return!!this.props&&(this.spec.isDragging?this.spec.isDragging(this.props,this.monitor):t===e.getSourceId())}},{key:"endDrag",value:function(){this.props&&this.spec.endDrag&&this.spec.endDrag(this.props,this.monitor,l(this.ref))}}])&&F(t.prototype,i),e}();function z(e,t,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=e;"function"!=typeof e&&((0,n.k)(I(e),'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',e),o=function(){return e}),(0,n.k)(s(t),'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',t);var a=function(e){return Object.keys(e).forEach((function(t){(0,n.k)(E.indexOf(t)>-1,'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',E.join(", "),t),(0,n.k)("function"==typeof e[t],"Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",t,t,e[t])})),_.forEach((function(t){(0,n.k)("function"==typeof e[t],"Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",t,t,e[t])})),function(t,i){return new P(e,t,i)}}(t);return(0,n.k)("function"==typeof i,'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',i),(0,n.k)(s(r),'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',i),function(e){return k({containerDisplayName:"DragSource",createHandler:a,registerHandler:$.w,createConnector:function(e){return new D.x(e)},createMonitor:function(e){return new T.p(e)},DecoratedComponent:e,getType:o,collect:i,options:r})}}var U=i(89026),O=i(56941);function B(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var N=["canDrop","hover","drop"],q=function(){function e(t,i,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.props=null,this.spec=t,this.monitor=i,this.ref=n}var t,i;return t=e,(i=[{key:"receiveProps",value:function(e){this.props=e}},{key:"receiveMonitor",value:function(e){this.monitor=e}},{key:"canDrop",value:function(){return!this.spec.canDrop||this.spec.canDrop(this.props,this.monitor)}},{key:"hover",value:function(){this.spec.hover&&this.props&&this.spec.hover(this.props,this.monitor,l(this.ref))}},{key:"drop",value:function(){if(this.spec.drop)return this.spec.drop(this.props,this.monitor,this.ref.current)}}])&&B(t.prototype,i),e}();function V(e,t,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=e;"function"!=typeof e&&((0,n.k)(I(e,!0),'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',e),o=function(){return e}),(0,n.k)(s(t),'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',t);var a=function(e){return Object.keys(e).forEach((function(t){(0,n.k)(N.indexOf(t)>-1,'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',N.join(", "),t),(0,n.k)("function"==typeof e[t],"Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target",t,t,e[t])})),function(t,i){return new q(e,t,i)}}(t);return(0,n.k)("function"==typeof i,'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',i),(0,n.k)(s(r),'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',i),function(e){return k({containerDisplayName:"DropTarget",createHandler:a,registerHandler:$.n,createMonitor:function(e){return new O.H(e)},createConnector:function(e){return new U.Y(e)},DecoratedComponent:e,getType:o,collect:i,options:r})}}function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function K(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}function X(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,n.k)("function"==typeof e,'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ',"Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer",e),(0,n.k)(s(t),'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer',t),function(i){var r=i,o=t.arePropsEqual,a=void 0===o?h.w:o,s=r.displayName||r.name||"Component",l=function(){var t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(g,t);var i,o,l,u,p=(l=g,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t,i,n=L(l);if(u){var r=L(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return t=this,!(i=e)||"object"!==A(i)&&"function"!=typeof i?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t):i});function g(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,g),(e=p.apply(this,arguments)).isCurrentlyMounted=!1,e.ref=c.createRef(),e.handleChange=function(){if(e.isCurrentlyMounted){var t=e.getCurrentState();(0,h.w)(t,e.state)||e.setState(t)}},e}return i=g,(o=[{key:"getDecoratedComponentInstance",value:function(){return(0,n.k)(this.ref.current,"In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"),this.ref.current}},{key:"shouldComponentUpdate",value:function(e,t){return!a(e,this.props)||!(0,h.w)(t,this.state)}},{key:"componentDidMount",value:function(){this.isCurrentlyMounted=!0,this.handleChange()}},{key:"componentWillUnmount",value:function(){this.isCurrentlyMounted=!1,this.unsubscribeFromOffsetChange&&(this.unsubscribeFromOffsetChange(),this.unsubscribeFromOffsetChange=void 0),this.unsubscribeFromStateChange&&(this.unsubscribeFromStateChange(),this.unsubscribeFromStateChange=void 0)}},{key:"render",value:function(){var e=this;return c.createElement(m.L.Consumer,null,(function(t){var i=t.dragDropManager;return void 0===i?null:(e.receiveDragDropManager(i),e.isCurrentlyMounted?c.createElement(r,Object.assign({},e.props,e.state,{ref:d(r)?e.ref:null})):null)}))}},{key:"receiveDragDropManager",value:function(e){if(void 0===this.manager){this.manager=e,(0,n.k)("object"===A(e),"Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",s,s);var t=this.manager.getMonitor();this.unsubscribeFromOffsetChange=t.subscribeToOffsetChange(this.handleChange),this.unsubscribeFromStateChange=t.subscribeToStateChange(this.handleChange)}}},{key:"getCurrentState",value:function(){if(!this.manager)return{};var t=this.manager.getMonitor();return e(t,this.props)}}])&&K(i.prototype,o),g}(c.Component);return t.displayName="DragLayer(".concat(s,")"),t.DecoratedComponent=i,t}();return p()(l,i)}}},84785:(e,t,i)=>{"use strict";i.d(t,{DragLayer:()=>r.DragLayer,DragSource:()=>r.DragSource,DropTarget:()=>r.DropTarget});var n=i(31388);i.o(n,"DragLayer")&&i.d(t,{DragLayer:function(){return n.DragLayer}}),i.o(n,"DragSource")&&i.d(t,{DragSource:function(){return n.DragSource}}),i.o(n,"DropTarget")&&i.d(t,{DropTarget:function(){return n.DropTarget}});var r=i(9238)},54238:()=>{},53279:()=>{},31388:(e,t,i)=>{"use strict";var n=i(75253);i.o(n,"DragLayer")&&i.d(t,{DragLayer:function(){return n.DragLayer}}),i.o(n,"DragSource")&&i.d(t,{DragSource:function(){return n.DragSource}}),i.o(n,"DropTarget")&&i.d(t,{DropTarget:function(){return n.DropTarget}});var r=i(53279);i.o(r,"DragLayer")&&i.d(t,{DragLayer:function(){return r.DragLayer}}),i.o(r,"DragSource")&&i.d(t,{DragSource:function(){return r.DragSource}}),i.o(r,"DropTarget")&&i.d(t,{DropTarget:function(){return r.DropTarget}});var o=i(72105);i.o(o,"DragLayer")&&i.d(t,{DragLayer:function(){return o.DragLayer}}),i.o(o,"DragSource")&&i.d(t,{DragSource:function(){return o.DragSource}}),i.o(o,"DropTarget")&&i.d(t,{DropTarget:function(){return o.DropTarget}});var a=i(54238);i.o(a,"DragLayer")&&i.d(t,{DragLayer:function(){return a.DragLayer}}),i.o(a,"DragSource")&&i.d(t,{DragSource:function(){return a.DragSource}}),i.o(a,"DropTarget")&&i.d(t,{DropTarget:function(){return a.DropTarget}})},75253:()=>{},72105:()=>{},24903:(e,t,i)=>{"use strict";t.cj=void 0;var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=i(67294),o=l(r),a=l(i(45697)),s=i(76597);function l(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.state={searchTerm:i.props.value||""},i.updateSearch=i.updateSearch.bind(i),i.filter=i.filter.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentWillReceiveProps",value:function(e){if(void 0!==e.value&&e.value!==this.props.value){var t={target:{value:e.value}};this.updateSearch(t)}}},{key:"render",value:function(){var e=this.props,t=e.className,i=(e.onChange,e.caseSensitive,e.sortResults,e.throttle,e.filterKeys,e.value,e.fuzzy,e.inputClassName),n=function(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}(e,["className","onChange","caseSensitive","sortResults","throttle","filterKeys","value","fuzzy","inputClassName"]);return n.type=n.type||"search",n.value=this.state.searchTerm,n.onChange=this.updateSearch,n.className=i,n.placeholder=n.placeholder||"Search",o.default.createElement("div",{className:t},o.default.createElement("input",n))}},{key:"updateSearch",value:function(e){var t=this,i=e.target.value;this.setState({searchTerm:i},(function(){t._throttleTimeout&&clearTimeout(t._throttleTimeout),t._throttleTimeout=setTimeout((function(){return t.props.onChange(i)}),t.props.throttle)}))}},{key:"filter",value:function(e){var t=this.props,i=t.filterKeys,n=t.caseSensitive,r=t.fuzzy,o=t.sortResults;return(0,s.createFilter)(this.state.searchTerm,e||i,{caseSensitive:n,fuzzy:r,sortResults:o})}}]),t}(r.Component);d.defaultProps={className:"",onChange:function(){},caseSensitive:!1,fuzzy:!1,throttle:200},d.propTypes={className:a.default.string,inputClassName:a.default.string,onChange:a.default.func,caseSensitive:a.default.bool,sortResults:a.default.bool,fuzzy:a.default.bool,throttle:a.default.number,filterKeys:a.default.oneOf([a.default.string,a.default.arrayOf(a.default.string)]),value:a.default.string},t.cj=s.createFilter},76597:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getValuesForKey=a,t.searchStrings=s,t.createFilter=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(n){if(""===e)return!0;i.caseSensitive||(e=e.toLowerCase());var r=e.split(" ");return t?("string"==typeof t&&(t=[t]),r.every((function(e){var r=void 0;if(-1!==e.indexOf(":")){var o=e.split(":")[0];e=e.split(":")[1],r=t.filter((function(e){return e.toLowerCase().indexOf(o)>-1}))}else r=t;return r.some((function(t){return s(a(t,n),e,i)}))}))):r.every((function(e){return s([n],e,i)}))}};var n,r=(n=i(69021))&&n.__esModule?n:{default:n};function o(e){return e.reduce((function(e,t){return e.concat(Array.isArray(t)?o(t):t)}),[])}function a(e,t){var i=e.split("."),n=[t];return i.forEach((function(e){var t=[];n.forEach((function(i){if(i)if(i instanceof Array){var n=parseInt(e,10);if(!isNaN(n))return t.push(i[n]);i.forEach((function(i){t.push(i[e])}))}else i&&"function"==typeof i.get?t.push(i.get(e)):t.push(i[e])})),n=t})),(n=o(n=n.map((function(e){return e&&e.push&&e.toArray?e.toArray():e})))).filter((function(e){return"string"==typeof e||"number"==typeof e}))}function s(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=i.caseSensitive,o=i.fuzzy,a=i.sortResults,s=i.exactMatch;e=e.map((function(e){return e.toString()}));try{return o?("function"==typeof e.toJS&&(e=e.toJS()),new r.default(e.map((function(e){return{id:e}})),{keys:["id"],id:"id",caseSensitive:n,shouldSort:a}).search(t).length):e.some((function(e){try{return n||(e=e.toLowerCase()),s&&(t=new RegExp("^"+t+"$","i")),!(!e||-1===e.search(t))}catch(e){return!1}}))}catch(e){return!1}}},69021:function(e){e.exports=function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=i(1),a=i(7),s=a.get,l=(a.deepValue,a.isArray),d=function(){function e(t,i){var n=i.location,r=void 0===n?0:n,o=i.distance,a=void 0===o?100:o,l=i.threshold,d=void 0===l?.6:l,c=i.maxPatternLength,h=void 0===c?32:c,u=i.caseSensitive,p=void 0!==u&&u,m=i.tokenSeparator,g=void 0===m?/ +/g:m,f=i.findAllMatches,v=void 0!==f&&f,b=i.minMatchCharLength,y=void 0===b?1:b,x=i.id,C=void 0===x?null:x,S=i.keys,w=void 0===S?[]:S,Z=i.shouldSort,R=void 0===Z||Z,k=i.getFn,$=void 0===k?s:k,T=i.sortFn,D=void 0===T?function(e,t){return e.score-t.score}:T,M=i.tokenize,I=void 0!==M&&M,F=i.matchAllTokens,E=void 0!==F&&F,_=i.includeMatches,P=void 0!==_&&_,z=i.includeScore,U=void 0!==z&&z,O=i.verbose,B=void 0!==O&&O;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:a,threshold:d,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:g,findAllMatches:v,minMatchCharLength:y,id:C,keys:w,includeMatches:P,includeScore:U,shouldSort:R,getFn:$,sortFn:D,verbose:B,tokenize:I,matchAllTokens:E},this.setCollection(t),this._processKeys(w)}var t,i;return t=e,(i=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,i=e.length;t<i;t+=1){var n=e[t];this._keyWeights[n]=1,this._keyNames.push(n)}else{for(var r=null,o=null,a=0,s=0,l=e.length;s<l;s+=1){var d=e[s];if(!d.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var c=d.name;if(this._keyNames.push(c),!d.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var h=d.weight;if(h<0||h>1)throw new Error('"weight" property in key must bein the range of [0, 1)');o=null==o?h:Math.max(o,h),r=null==r?h:Math.min(r,h),this._keyWeights[c]=h,a+=h}if(a>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var i=this._prepareSearchers(e),n=i.tokenSearchers,r=i.fullSearcher,o=this._search(n,r);return this._computeScore(o),this.options.shouldSort&&this._sort(o),t.limit&&"number"==typeof t.limit&&(o=o.slice(0,t.limit)),this._format(o)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var i=e.split(this.options.tokenSeparator),n=0,r=i.length;n<r;n+=1)t.push(new o(i[n],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,i=this.list,n={},r=[];if("string"==typeof i[0]){for(var o=0,a=i.length;o<a;o+=1)this._analyze({key:"",value:i[o],record:o,index:o},{resultMap:n,results:r,tokenSearchers:e,fullSearcher:t});return r}for(var s=0,l=i.length;s<l;s+=1)for(var d=i[s],c=0,h=this._keyNames.length;c<h;c+=1){var u=this._keyNames[c];this._analyze({key:u,value:this.options.getFn(d,u),record:d,index:s},{resultMap:n,results:r,tokenSearchers:e,fullSearcher:t})}return r}},{key:"_analyze",value:function(e,t){var i=this,n=e.key,r=e.arrayIndex,o=void 0===r?-1:r,a=e.value,s=e.record,d=e.index,c=t.tokenSearchers,h=void 0===c?[]:c,u=t.fullSearcher,p=t.resultMap,m=void 0===p?{}:p,g=t.results,f=void 0===g?[]:g;!function e(t,r,o,a){if(null!=r)if("string"==typeof r){var s=!1,d=-1,c=0;i._log("\nKey: ".concat(""===n?"--":n));var p=u.search(r);if(i._log('Full text: "'.concat(r,'", score: ').concat(p.score)),i.options.tokenize){for(var g=r.split(i.options.tokenSeparator),v=g.length,b=[],y=0,x=h.length;y<x;y+=1){var C=h[y];i._log('\nPattern: "'.concat(C.pattern,'"'));for(var S=!1,w=0;w<v;w+=1){var Z=g[w],R=C.search(Z),k={};R.isMatch?(k[Z]=R.score,s=!0,S=!0,b.push(R.score)):(k[Z]=1,i.options.matchAllTokens||b.push(1)),i._log('Token: "'.concat(Z,'", score: ').concat(k[Z]))}S&&(c+=1)}d=b[0];for(var $=b.length,T=1;T<$;T+=1)d+=b[T];d/=$,i._log("Token score average:",d)}var D=p.score;d>-1&&(D=(D+d)/2),i._log("Score average:",D);var M=!i.options.tokenize||!i.options.matchAllTokens||c>=h.length;if(i._log("\nCheck Matches: ".concat(M)),(s||p.isMatch)&&M){var I={key:n,arrayIndex:t,value:r,score:D};i.options.includeMatches&&(I.matchedIndices=p.matchedIndices);var F=m[a];F?F.output.push(I):(m[a]={item:o,output:[I]},f.push(m[a]))}}else if(l(r))for(var E=0,_=r.length;E<_;E+=1)e(E,r[E],o,a)}(o,a,s,d)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,i=!!Object.keys(t).length,n=0,r=e.length;n<r;n+=1){for(var o=e[n],a=o.output,s=a.length,l=1,d=0;d<s;d+=1){var c=a[d],h=c.key,u=i?t[h]:1,p=0===c.score&&t&&t[h]>0?Number.EPSILON:c.score;l*=Math.pow(p,u)}o.score=l,this._log(o)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var i=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===n(t)&&null!==t){if(-1!==i.indexOf(t))return;i.push(t)}return t}),2)),i=null}var r=[];this.options.includeMatches&&r.push((function(e,t){var i=e.output;t.matches=[];for(var n=0,r=i.length;n<r;n+=1){var o=i[n];if(0!==o.matchedIndices.length){var a={indices:o.matchedIndices,value:o.value};o.key&&(a.key=o.key),o.hasOwnProperty("arrayIndex")&&o.arrayIndex>-1&&(a.arrayIndex=o.arrayIndex),t.matches.push(a)}}})),this.options.includeScore&&r.push((function(e,t){t.score=e.score}));for(var o=0,a=e.length;o<a;o+=1){var s=e[o];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),r.length){for(var l={item:s.item},d=0,c=r.length;d<c;d+=1)r[d](s,l);t.push(l)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&r(t.prototype,i),e}();e.exports=d},function(e,t,i){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=i(2),o=i(3),a=i(6),s=function(){function e(t,i){var n=i.location,r=void 0===n?0:n,o=i.distance,s=void 0===o?100:o,l=i.threshold,d=void 0===l?.6:l,c=i.maxPatternLength,h=void 0===c?32:c,u=i.isCaseSensitive,p=void 0!==u&&u,m=i.tokenSeparator,g=void 0===m?/ +/g:m,f=i.findAllMatches,v=void 0!==f&&f,b=i.minMatchCharLength,y=void 0===b?1:b,x=i.includeMatches,C=void 0!==x&&x;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:s,threshold:d,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:g,findAllMatches:v,includeMatches:C,minMatchCharLength:y},this.pattern=p?t:t.toLowerCase(),this.pattern.length<=h&&(this.patternAlphabet=a(this.pattern))}var t,i;return t=e,(i=[{key:"search",value:function(e){var t=this.options,i=t.isCaseSensitive,n=t.includeMatches;if(i||(e=e.toLowerCase()),this.pattern===e){var a={isMatch:!0,score:0};return n&&(a.matchedIndices=[[0,e.length-1]]),a}var s=this.options,l=s.maxPatternLength,d=s.tokenSeparator;if(this.pattern.length>l)return r(e,this.pattern,d);var c=this.options,h=c.location,u=c.distance,p=c.threshold,m=c.findAllMatches,g=c.minMatchCharLength;return o(e,this.pattern,this.patternAlphabet,{location:h,distance:u,threshold:p,findAllMatches:m,minMatchCharLength:g,includeMatches:n})}}])&&n(t.prototype,i),e}();e.exports=s},function(e,t){var i=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,r=new RegExp(t.replace(i,"\\$&").replace(n,"|")),o=e.match(r),a=!!o,s=[];if(a)for(var l=0,d=o.length;l<d;l+=1){var c=o[l];s.push([e.indexOf(c),c.length-1])}return{score:a?.5:1,isMatch:a,matchedIndices:s}}},function(e,t,i){var n=i(4),r=i(5);e.exports=function(e,t,i,o){for(var a=o.location,s=void 0===a?0:a,l=o.distance,d=void 0===l?100:l,c=o.threshold,h=void 0===c?.6:c,u=o.findAllMatches,p=void 0!==u&&u,m=o.minMatchCharLength,g=void 0===m?1:m,f=o.includeMatches,v=void 0!==f&&f,b=s,y=e.length,x=h,C=e.indexOf(t,b),S=t.length,w=[],Z=0;Z<y;Z+=1)w[Z]=0;if(-1!==C){var R=n(t,{errors:0,currentLocation:C,expectedLocation:b,distance:d});if(x=Math.min(R,x),-1!==(C=e.lastIndexOf(t,b+S))){var k=n(t,{errors:0,currentLocation:C,expectedLocation:b,distance:d});x=Math.min(k,x)}}C=-1;for(var $=[],T=1,D=S+y,M=1<<(S<=31?S-1:30),I=0;I<S;I+=1){for(var F=0,E=D;F<E;)n(t,{errors:I,currentLocation:b+E,expectedLocation:b,distance:d})<=x?F=E:D=E,E=Math.floor((D-F)/2+F);D=E;var _=Math.max(1,b-E+1),P=p?y:Math.min(b+E,y)+S,z=Array(P+2);z[P+1]=(1<<I)-1;for(var U=P;U>=_;U-=1){var O=U-1,B=i[e.charAt(O)];if(B&&(w[O]=1),z[U]=(z[U+1]<<1|1)&B,0!==I&&(z[U]|=($[U+1]|$[U])<<1|1|$[U+1]),z[U]&M&&(T=n(t,{errors:I,currentLocation:O,expectedLocation:b,distance:d}))<=x){if(x=T,(C=O)<=b)break;_=Math.max(1,2*b-C)}}if(n(t,{errors:I+1,currentLocation:b,expectedLocation:b,distance:d})>x)break;$=z}var N={isMatch:C>=0,score:0===T?.001:T};return v&&(N.matchedIndices=r(w,g)),N}},function(e,t){e.exports=function(e,t){var i=t.errors,n=void 0===i?0:i,r=t.currentLocation,o=void 0===r?0:r,a=t.expectedLocation,s=void 0===a?0:a,l=t.distance,d=void 0===l?100:l,c=n/e.length,h=Math.abs(s-o);return d?c+h/d:h?1:c}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=[],n=-1,r=-1,o=0,a=e.length;o<a;o+=1){var s=e[o];s&&-1===n?n=o:s||-1===n||((r=o-1)-n+1>=t&&i.push([n,r]),n=-1)}return e[o-1]&&o-n>=t&&i.push([n,o-1]),i}},function(e,t){e.exports=function(e){for(var t={},i=e.length,n=0;n<i;n+=1)t[e.charAt(n)]=0;for(var r=0;r<i;r+=1)t[e.charAt(r)]|=1<<i-r-1;return t}},function(e,t){var i=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},n=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},r=function(e){return"string"==typeof e},o=function(e){return"number"==typeof e};e.exports={get:function(e,t){var a=[];return function e(t,s){if(s){var l=s.indexOf("."),d=s,c=null;-1!==l&&(d=s.slice(0,l),c=s.slice(l+1));var h=t[d];if(null!=h)if(c||!r(h)&&!o(h))if(i(h))for(var u=0,p=h.length;u<p;u+=1)e(h[u],c);else c&&e(h,c);else a.push(n(h))}else a.push(t)}(e,t),a},isArray:i,isString:r,isNum:o,toString:n}}])},15208:(e,t,i)=>{"use strict";i.d(t,{d:()=>r});var n=i(67294);const r=(e,t)=>{const i=(0,n.useRef)(!1);(0,n.useEffect)((()=>{i.current?e():i.current=!0}),[...t||[e]])}},78243:(e,t,i)=>{"use strict";i.d(t,{W:()=>r});var n=i(67294);function r(e){const t=(0,n.useRef)(null),[i,r]=(0,n.useState)(!1),o=e=>{const[t]=e;r(t.intersectionRatio<1)};return(0,n.useEffect)((()=>{const i=new IntersectionObserver(o,e),n=t.current;return n&&i.observe(n),()=>{n&&i.unobserve(n)}}),[t,e]),[t,i]}},51794:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var n=i(67294);const r=()=>{const[e,t]=(0,n.useState)(0),[i,r]=(0,n.useState)(!1),o=(0,n.useRef)(null),a=(0,n.useRef)(null);return(0,n.useLayoutEffect)((()=>{var e;const i=()=>{const e=o.current;if(!e)return;const i=a.current,{scrollWidth:n,clientWidth:s,childNodes:l}=e;if(n>s){const e=6,n=(null==i?void 0:i.offsetWidth)||0,o=s-e,a=l.length;let d=0,c=0;for(let e=0;e<a;e+=1)o-d-n<=0&&(c+=1),d+=l[e].offsetWidth;a>1&&c?(r(!0),t(c)):(r(!1),t(1))}else r(!1),t(0)},n=new ResizeObserver(i),s=null==(e=o.current)?void 0:e.parentElement;return s&&n.observe(s),i(),()=>{n.disconnect()}}),[a.current]),[o,a,e,i]}},82607:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var n=i(51995),r=i(78573),o=i(35944);const a=(0,n.iK)((e=>(0,o.tZ)(r.Z,{...e})))`
  ${({theme:e,color:t,count:i})=>`\n    & > sup,\n    & > sup.antd5-badge-count {\n      ${void 0!==i?`background: ${t||e.colors.primary.base};`:""}\n    }\n  `}
`},42074:(e,t,i)=>{"use strict";i.d(t,{P:()=>d});var n=i(21804),r=i.n(n),o=i(4715),a=i(51995),s=i(35944);const l=a.iK.div`
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
`,d=({overlay:e,tooltip:t,placement:i,...n})=>{const a=(t={})=>(0,s.tZ)(l,{children:(0,s.tZ)(o.Gj.Button,{overlay:e,...n,...t})});return t?a({buttonsRender:([e,n])=>[(0,s.tZ)(o._e,{placement:i,id:`${r()(t)}-tooltip`,title:t,children:e}),n]}):a()}},38270:(e,t,i)=>{"use strict";i.d(t,{Z:()=>m});var n=i(67294),r=i(73727),o=i(93967),a=i.n(o),s=i(51995),l=i(61988),d=i(11965),c=i(58593),h=i(79789),u=i(35944);const p=(0,s.iK)(h.Z)`
  vertical-align: middle;
`;function m({canEdit:e=!1,editing:t=!1,extraClasses:i,multiLine:o=!1,noPermitTooltip:s,onSaveTitle:h,showTooltip:m=!0,style:g,title:f="",defaultTitle:v="",placeholder:b="",certifiedBy:y,certificationDetails:x,url:C,...S}){const[w,Z]=(0,n.useState)(t),[R,k]=(0,n.useState)(f),[$,T]=(0,n.useState)(f),[D,M]=(0,n.useState)(null),I=(0,n.useRef)();function F(){if(!e||w)return;const t=I.current?I.current.getBoundingClientRect():null;Z(!0),M(t)}function E(){const t=R.trim();e&&(Z(!1),t.length?($!==t&&T(t),f!==t&&h(t)):k($))}function _(e){" "===e.key&&e.stopPropagation(),"Enter"===e.key&&(e.preventDefault(),E())}function P(t){e&&k(t.target.value)}function z(e){"Enter"===e.key&&(e.preventDefault(),E())}let U;(0,n.useEffect)((()=>{f!==R&&(T(R),k(f))}),[f]),(0,n.useEffect)((()=>{if(w&&(I.current.focus(),I.current.setSelectionRange)){const{length:e}=I.current.value;I.current.setSelectionRange(e,e),I.current.scrollLeft=I.current.scrollWidth,I.current.scrollTop=I.current.scrollHeight}}),[w]),U=R,w||R||(U=v||f);const O=w&&D?{height:`${D.height}px`}:void 0;let B=o&&w?(0,u.tZ)("textarea",{ref:I,value:U,className:f?void 0:"text-muted",onKeyDown:_,onChange:P,onBlur:E,onClick:F,onKeyPress:z,placeholder:b,style:O}):(0,u.tZ)("input",{ref:I,type:w?"text":"button",value:U,className:f?void 0:"text-muted",onKeyDown:_,onChange:P,onBlur:E,onClick:F,onKeyPress:z,placeholder:b});return m&&!w&&(B=(0,u.tZ)(c.u,{id:"title-tooltip",title:e?(0,l.t)("Click to edit"):s||(0,l.t)("You don't have the rights to alter this title."),children:B})),e||(B=C?(0,u.tZ)(r.rU,{to:C,css:e=>d.iv`
          color: ${e.colors.grayscale.dark1};
          text-decoration: none;
          :hover {
            text-decoration: underline;
          }
          display: inline-block;
        `,children:U}):(0,u.tZ)("span",{children:U})),(0,u.BX)("span",{className:a()("editable-title",i,e&&"editable-title--editable",w&&"editable-title--editing"),style:g,...S,children:[y&&(0,u.BX)(u.HY,{children:[(0,u.tZ)(p,{certifiedBy:y,details:x,size:"xl"})," "]}),B]})}},80663:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var n=i(29119),r=i(51995),o=i(67294),a=i(61337),s=i(35944);const l=r.iK.div`
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
`,d=({id:e,initialWidth:t,minWidth:i,maxWidth:r,enable:d,children:c})=>{const[h,u]=function(e,t){const i=(0,o.useRef)(),[n,r]=(0,o.useState)(t);return(0,o.useEffect)((()=>{var t;i.current=null!=(t=i.current)?t:(0,a.rV)(a.dR.CommonResizableSidebarWidths,{}),i.current[e]&&r(i.current[e])}),[e]),[n,function(t){r(t),(0,a.LS)(a.dR.CommonResizableSidebarWidths,{...i.current,[e]:t})}]}(e,t);return(0,s.BX)(s.HY,{children:[(0,s.tZ)(l,{children:(0,s.tZ)(n.e,{enable:{right:d},handleClasses:{right:"sidebar-resizer"},size:{width:h,height:"100%"},minWidth:i,maxWidth:r,onResizeStop:(e,t,i,n)=>u(h+n.width)})}),c(h)]})}},24705:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>ru});var n=i(93967),r=i.n(n),o=i(67294),a=i(51995),s=i(11965),l=i(25130),d=i(93185),c=i(78243),h=i(61988),u=i(28216),p=i(57368),m=i(49484),g=i(71262),f=i(14890),v=i(38523),b=i(35937),y=i.n(b),x=i(23279),C=i.n(x),S=i(45697),w=i.n(S),Z=i(39142),R=i(74061),k=i(24903),$=i(9875),T=i(4715),D=i(38703),M=i(35932),I=i(13322),F=i(61337),E=i(81255),_=i(80621),P=i(2275),z=i(87253),U=i(9882),O=i(4144),B=i(14278),N=i(58593),q=i(85931),V=i(35944);const A=({children:e,tooltipText:t,...i})=>{const[n,r]=(0,o.useState)(!1),a=(0,o.useRef)(null);(0,o.useEffect)((()=>{r(!!a.current&&a.current.scrollWidth>a.current.clientWidth)}),[e]);const l=(0,V.tZ)("div",{...i,ref:a,css:s.iv`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
      `,children:e});return n?(0,V.tZ)(N.u,{title:t||e,children:l}):l},K=({label:e,value:t,tooltipText:i})=>(0,V.BX)("div",{css:e=>s.iv`
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
      `,children:(0,V.tZ)(A,{tooltipText:i,children:t})})]}),j=({showThumbnails:e,placeholderRef:t})=>(0,V.tZ)("div",{ref:t,css:t=>s.iv`
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
    `,children:(0,h.t)("Added")}),X=({datasourceUrl:e,datasourceName:t="-",innerRef:i,isSelected:n=!1,lastModified:r,sliceName:a,style:l={},thumbnailUrl:c,visType:u})=>{const p=(0,d.cr)(d.TT.Thumbnails),[m,g]=(0,o.useState)(),{mountedPluginMetadata:f}=(0,B.gp)(),v=(0,o.useMemo)((()=>{var e;return(null==(e=f[u])?void 0:e.name)||(0,h.t)("Unknown type")}),[f,u]);return(0,V.BX)("div",{ref:i,style:l,children:[(0,V.tZ)("div",{css:e=>s.iv`
          border: 1px solid ${e.colors.grayscale.light2};
          border-radius: ${e.gridUnit}px;
          background: ${e.colors.grayscale.light5};
          padding: ${4*e.gridUnit}px;
          margin: 0 ${3*e.gridUnit}px ${3*e.gridUnit}px
            ${3*e.gridUnit}px;
          position: relative;
          cursor: ${n?"not-allowed":"move"};
          white-space: nowrap;
          overflow: hidden;
          line-height: 1.3;
          color: ${e.colors.grayscale.dark1};

          &:hover {
            background: ${e.colors.grayscale.light4};
          }

          opacity: ${n?.4:"unset"};
        `,children:(0,V.BX)("div",{css:s.iv`
            display: flex;
          `,children:[p?(0,V.BX)("div",{css:s.iv`
                width: 146px;
                height: 82px;
                flex-shrink: 0;
                margin-right: 16px;
              `,children:[(0,V.tZ)(O.Z,{src:c||"",fallback:"/static/assets/images/chart-card-fallback.svg",position:"top"}),n&&p?(0,V.tZ)(j,{placeholderRef:g,showThumbnails:p}):null]}):null,(0,V.BX)("div",{css:s.iv`
              flex-grow: 1;
              min-width: 0;
            `,children:[(0,V.BX)("div",{css:e=>s.iv`
                margin-bottom: ${2*e.gridUnit}px;
                font-weight: ${e.typography.weights.bold};
                display: flex;
                justify-content: space-between;
                align-items: center;
              `,children:[(0,V.tZ)(A,{children:a}),n&&!p?(0,V.tZ)(j,{placeholderRef:g}):null]}),(0,V.BX)("div",{css:s.iv`
                display: flex;
                flex-direction: column;
              `,children:[(0,V.tZ)(K,{label:(0,h.t)("Viz type"),value:v}),(0,V.tZ)(K,{label:(0,h.t)("Dataset"),value:e?(0,V.tZ)(q.m,{to:e,children:t}):t,tooltipText:t}),(0,V.tZ)(K,{label:(0,h.t)("Modified"),value:r})]})]})]})}),(0,V.tZ)(L,{placeholder:m})]})};var H=i(84785);const W={position:"fixed",pointerEvents:"none",top:0,left:0,zIndex:101,width:344},Y={dragItem:w().shape({index:w().number.isRequired}),slices:w().arrayOf(P.Rw),isDragging:w().bool.isRequired,currentOffset:w().shape({x:w().number.isRequired,y:w().number.isRequired})};function G({dragItem:e,slices:t,isDragging:i,currentOffset:n}){if(!(i&&n&&e&&t))return null;const r=t[e.index];return r&&e.parentType===E.F0&&e.type===E.dW?(0,V.tZ)(X,{style:{...W,transform:`translate(${n.x}px, ${n.y}px)`},sliceName:r.slice_name,lastModified:r.changed_on_humanized,visType:r.viz_type,datasourceUrl:r.datasource_url,datasourceName:r.datasource_name}):null}G.propTypes=Y,G.defaultProps={currentOffset:null,dragItem:null,slices:null};const J=(0,H.DragLayer)((e=>({dragItem:e.getItem(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()})))(G);var Q,ee=i(23493),te=i.n(ee);const ie=_.Mu+1,ne=_.Mu+3,re=_.Mu+4,oe=_.Mu+5,ae={[E.U0]:{[E.yR]:_.Mu,[E.BG]:_.Mu},[E.BG]:{[E.dW]:ie,[E.t]:ie,[E.xh]:ie,[E.BA]:ie,[E.hE]:ie,[E.Nc]:ie,[E.Os]:ie,[E.yR]:ie},[E.Os]:{[E.dW]:re,[E.t]:re,[E.xh]:re,[E.BA]:re},[E.yR]:{[E.gn]:ne},[E.gn]:{[E.dW]:oe,[E.t]:oe,[E.xh]:oe,[E.BA]:ne,[E.hE]:oe,[E.Nc]:oe,[E.Os]:ne,[E.yR]:ne},[E.BA]:{[E.dW]:oe,[E.Nc]:oe,[E.xh]:oe,[E.Os]:ne,[E.hE]:ne,[E.yR]:ne},[E.dW]:{},[E.t]:{},[E.hE]:{},[E.Nc]:{},[E.xh]:{}};function se(e){var t;const{parentType:i,childType:n,parentDepth:r}=e;if(!i||!n||"number"!=typeof r)return!1;const o=null==(t=ae[i])?void 0:t[n];return"number"==typeof o&&r<=o}const le="DROP_TOP",de="DROP_RIGHT",ce="DROP_BOTTOM",he="DROP_LEFT",ue="DROP_FORBIDDEN",pe=20,me=20;let ge,fe={};function ve(e,t){const{depth:i,parentComponent:n,component:r,orientation:o,isDraggingOverShallow:a}=t.props,s=e.getItem();if(!s||s.id===r.id)return null;const l=se({parentType:r.type,parentDepth:i,childType:s.type}),d=n&&n.type,c=se({parentType:d,parentDepth:i+(d===E.gn||d===E.yR?0:-1),childType:s.type});if(!l&&!c)return ue;const h=(r.children||[]).length>0,u="row"===o?"vertical":"horizontal",p="row"===o?"horizontal":"vertical";if(l&&!c)return"vertical"===u?h?de:he:h?ce:le;const m=t.ref.getBoundingClientRect(),g=e.getClientOffset()||fe[r.id];if(!g||!m)return null;fe[r.id]=g;const f=Math.abs(g.y-m.top),v=Math.abs(g.y-m.bottom),b=Math.abs(g.x-m.left),y=Math.abs(g.x-m.right);if(!a&&[f,v,b,y].every((e=>e>me)))return null;if(c&&!l){if("vertical"===p){const e=m.left+(m.right-m.left)/2;return g.x<e?he:de}const e=m.top+(m.bottom-m.top)/2;return g.y<e?le:ce}if(c&&l){if("vertical"===p){if(b<pe)return he;if(y<pe)return de}else{if(f<pe)return le;if(v<pe)return ce}return"vertical"===u?h?de:he:h?ce:le}return null}const be=te()((function(e,t,i){var n,r,o;if(!i.mounted)return;const a=ve(t,i);!function(e){const t="SCROLL_TOP"===e&&!ge&&0!==document.documentElement.scrollTop,i=ge&&("SCROLL_TOP"!==e||0===document.documentElement.scrollTop);t?ge=setInterval((()=>{if(0===document.documentElement.scrollTop)return clearInterval(ge),void(ge=null);let e=document.documentElement.scrollTop-120;e<0&&(e=0),window.scroll({top:e,behavior:"smooth"})}),50):i&&(clearInterval(ge),ge=null)}((null==i||null==(n=i.props)||null==(r=n.component)?void 0:r.type)===E.U0?"SCROLL_TOP":null),a?(null==i||null==(o=i.props)||o.onHover(),i.setState((()=>({dropIndicator:a})))):i.setState((()=>({dropIndicator:null})))}),100);const ye="DRAG_DROPPABLE",xe=[ye,{canDrag:e=>!e.disableDragDrop,beginDrag(e){const{component:t,index:i,parentComponent:n={}}=e;return{type:t.type,id:t.id,meta:t.meta,index:i,parentId:n.id,parentType:n.type}}},function(e,t){return{dragSourceRef:e.dragSource(),dragPreviewRef:e.dragPreview(),isDragging:t.isDragging()}}],Ce=[ye,{canDrop:e=>!e.disableDragDrop,hover(e,t,i){i&&i.mounted&&be(e,t,i)},drop(e,t,i){const n=t.getDropResult();if((!n||!n.destination)&&i.mounted)return function(e,t,i){if(!i.mounted)return;i.setState((()=>({dropIndicator:null})));const n=ve(t,i);if(!n||n===ue)return;const{parentComponent:r,component:o,index:a,onDrop:s,dropToChild:l}=i.props,d=t.getItem(),c={source:{id:d.parentId,type:d.parentType,index:d.index},dragging:{id:d.id,type:d.type,meta:d.meta}};if("function"==typeof l?l(d):l)c.destination={id:o.id,type:o.type,index:o.children.length};else if(r){const e=r&&d.parentId===r.id&&d.index<a&&d.type!==o.type?a-1:a;c.destination={id:r.id,type:r.type,index:e}}else c.destination={id:o.id,type:o.type,index:a};return s(c),fe={},c}(0,t,i)}},function(e,t){return{droppableRef:e.dropTarget(),isDraggingOver:t.isOver(),isDraggingOverShallow:t.isOver({shallow:!0})}}],Se={children:w().func,className:w().string,component:P.cP,parentComponent:P.cP,depth:w().number.isRequired,disableDragDrop:w().bool,dropToChild:w().bool,orientation:w().oneOf(["row","column"]),index:w().number.isRequired,style:w().object,onDrop:w().func,onHover:w().func,editMode:w().bool,useEmptyDragPreview:w().bool,isDragging:w().bool,isDraggingOver:w().bool,isDraggingOverShallow:w().bool,droppableRef:w().func,dragSourceRef:w().func,dragPreviewRef:w().func},we={className:null,style:null,parentComponent:null,disableDragDrop:!1,dropToChild:!1,children(){},onDrop(){},onHover(){},orientation:"row",useEmptyDragPreview:!1,isDragging:!1,isDraggingOver:!1,isDraggingOverShallow:!1,droppableRef(){},dragSourceRef(){},dragPreviewRef(){}},Ze=a.iK.div`
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
`;class Re extends o.PureComponent{constructor(e){super(e),this.state={dropIndicator:null},this.setRef=this.setRef.bind(this)}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}setRef(e){var t,i;this.ref=e,this.props.useEmptyDragPreview?this.props.dragPreviewRef((Q||((Q=new Image).src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),Q),{captureDraggingState:!0}):this.props.dragPreviewRef(e),null==(t=(i=this.props).droppableRef)||t.call(i,e)}render(){const{children:e,className:t,orientation:i,dragSourceRef:n,disableDragDrop:o,isDragging:a,isDraggingOver:s,style:l,editMode:d}=this.props,{dropIndicator:c}=this.state,h=s&&c&&!o?{className:r()("drop-indicator",c===ue&&"drop-indicator--forbidden")}:null,u=d?{dragSourceRef:n,dropIndicatorProps:h}:{};return(0,V.tZ)(Ze,{style:l,ref:this.setRef,className:r()("dragdroppable",d&&"dragdroppable--edit-mode","row"===i&&"dragdroppable-row","column"===i&&"dragdroppable-column",a&&"dragdroppable--dragging",t),children:e(u)})}}Re.propTypes=Se,Re.defaultProps=we;const ke=(0,H.DragSource)(...xe)(Re),$e=(0,H.DropTarget)(...Ce)(Re),Te=(0,H.DragSource)(...xe)((0,H.DropTarget)(...Ce)(Re)),De={fetchSlices:w().func.isRequired,updateSlices:w().func.isRequired,isLoading:w().bool.isRequired,slices:w().objectOf(P.Rw).isRequired,lastUpdated:w().number.isRequired,errorMessage:w().string,userId:w().number.isRequired,selectedSliceIds:w().arrayOf(w().number),editMode:w().bool,dashboardId:w().number},Me=["slice_name","viz_type","datasource_name"],Ie={slice_name:(0,h.t)("name"),viz_type:(0,h.t)("viz type"),datasource_name:(0,h.t)("dataset"),changed_on:(0,h.t)("recent")},Fe=a.iK.div`
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
`,Pe=(0,a.iK)(M.Z)`
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
`,ze=a.iK.div`
  flex-grow: 1;
  min-height: 0;
`;class Ue extends o.Component{static sortByComparator(e){const t="changed_on"===e?-1:1;return(i,n)=>i[e]<n[e]?-1*t:i[e]>n[e]?1*t:0}constructor(e){super(e),this.handleChange=C()((e=>{this.searchUpdated(e),this.slicesRequest=this.props.fetchSlices(this.userIdForFetch(),e,this.state.sortBy)}),300),this.state={filteredSlices:[],searchTerm:"",sortBy:"changed_on",selectedSliceIdsSet:new Set(e.selectedSliceIds),showOnlyMyCharts:(0,F.rV)(F.dR.DashboardEditorShowOnlyMyCharts,!0)},this.rowRenderer=this.rowRenderer.bind(this),this.searchUpdated=this.searchUpdated.bind(this),this.handleSelect=this.handleSelect.bind(this),this.userIdForFetch=this.userIdForFetch.bind(this),this.onShowOnlyMyCharts=this.onShowOnlyMyCharts.bind(this)}userIdForFetch(){return this.state.showOnlyMyCharts?this.props.userId:void 0}componentDidMount(){this.slicesRequest=this.props.fetchSlices(this.userIdForFetch())}UNSAFE_componentWillReceiveProps(e){const t={};e.lastUpdated!==this.props.lastUpdated&&(t.filteredSlices=this.getFilteredSortedSlices(e.slices,this.state.searchTerm,this.state.sortBy,this.state.showOnlyMyCharts)),e.selectedSliceIds!==this.props.selectedSliceIds&&(t.selectedSliceIdsSet=new Set(e.selectedSliceIds)),Object.keys(t).length&&this.setState(t)}componentWillUnmount(){const e=y()(this.props.slices,(e=>this.state.selectedSliceIdsSet.has(e.slice_id)));this.props.updateSlices(e),this.slicesRequest&&this.slicesRequest.abort&&this.slicesRequest.abort()}getFilteredSortedSlices(e,t,i,n){return Object.values(e).filter((e=>!n||e.owners&&e.owners.find((e=>e.id===this.props.userId))||e.created_by&&e.created_by.id===this.props.userId)).filter((0,k.cj)(t,Me)).sort(Ue.sortByComparator(i))}searchUpdated(e){this.setState((t=>({searchTerm:e,filteredSlices:this.getFilteredSortedSlices(this.props.slices,e,t.sortBy,t.showOnlyMyCharts)})))}handleSelect(e){this.setState((t=>({sortBy:e,filteredSlices:this.getFilteredSortedSlices(this.props.slices,t.searchTerm,e,t.showOnlyMyCharts)}))),this.slicesRequest=this.props.fetchSlices(this.userIdForFetch(),this.state.searchTerm,e)}rowRenderer({key:e,index:t,style:i}){const{filteredSlices:n,selectedSliceIdsSet:r}=this.state,o=n[t],a=r.has(o.slice_id),s=E.dW,l=_.Jd,d={chartId:o.slice_id,sliceName:o.slice_name};return(0,V.tZ)(Te,{component:{type:s,id:l,meta:d},parentComponent:{id:_.D0,type:E.F0},index:t,depth:0,disableDragDrop:a,editMode:this.props.editMode,useEmptyDragPreview:!0,style:{},children:({dragSourceRef:e})=>(0,V.tZ)(X,{innerRef:e,style:i,sliceName:o.slice_name,lastModified:o.changed_on_humanized,visType:o.viz_type,datasourceUrl:o.datasource_url,datasourceName:o.datasource_name,thumbnailUrl:o.thumbnail_url,isSelected:a})},e)}onShowOnlyMyCharts(e){e||(this.slicesRequest=this.props.fetchSlices(void 0,this.state.searchTerm,this.state.sortBy)),this.setState((t=>({showOnlyMyCharts:e,filteredSlices:this.getFilteredSortedSlices(this.props.slices,t.searchTerm,t.sortBy,e)}))),(0,F.LS)(F.dR.DashboardEditorShowOnlyMyCharts,e)}render(){return(0,V.BX)("div",{css:s.iv`
          height: 100%;
          display: flex;
          flex-direction: column;
        `,children:[(0,V.tZ)(_e,{children:(0,V.BX)(Pe,{buttonStyle:"link",buttonSize:"xsmall",onClick:()=>window.open(`/chart/add?dashboard_id=${this.props.dashboardId}`,"_blank","noopener noreferrer"),children:[(0,V.tZ)(I.Z.PlusSmall,{}),(0,h.t)("Create new chart")]})}),(0,V.BX)(Fe,{children:[(0,V.tZ)($.II,{placeholder:this.state.showOnlyMyCharts?(0,h.t)("Filter your charts"):(0,h.t)("Filter charts"),className:"search-input",onChange:e=>this.handleChange(e.target.value)}),(0,V.tZ)(Ee,{id:"slice-adder-sortby",value:this.state.sortBy,onChange:this.handleSelect,options:Object.entries(Ie).map((([e,t])=>({label:(0,h.t)("Sort by %s",t),value:e}))),placeholder:(0,h.t)("Sort by")})]}),(0,V.BX)("div",{css:e=>s.iv`
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: ${e.gridUnit}px;
            padding: 0 ${3*e.gridUnit}px ${4*e.gridUnit}px
              ${3*e.gridUnit}px;
          `,children:[(0,V.tZ)(z.ZP,{onChange:this.onShowOnlyMyCharts,checked:this.state.showOnlyMyCharts}),(0,h.t)("Show only my charts"),(0,V.tZ)(U.V,{placement:"top",tooltip:(0,h.t)("You can choose to display all charts that you have access to or only the ones you own.\n              Your filter selection will be saved and remain active until you choose to change it.")})]}),this.props.isLoading&&(0,V.tZ)(D.Z,{}),!this.props.isLoading&&this.state.filteredSlices.length>0&&(0,V.tZ)(ze,{children:(0,V.tZ)(Z.ZP,{children:({height:e,width:t})=>(0,V.tZ)(R.t7,{width:t,height:e,itemCount:this.state.filteredSlices.length,itemSize:128,searchTerm:this.state.searchTerm,sortBy:this.state.sortBy,selectedSliceIds:this.props.selectedSliceIds,children:this.rowRenderer})})}),this.props.errorMessage&&(0,V.tZ)("div",{css:s.iv`
              padding: 16px;
            `,children:this.props.errorMessage}),(0,V.tZ)(J,{slices:this.state.filteredSlices})]})}}Ue.propTypes=De,Ue.defaultProps={selectedSliceIds:[],editMode:!1,errorMessage:""};const Oe=Ue,Be=(0,u.$j)((function({sliceEntities:e,dashboardInfo:t,dashboardState:i},n){return{height:n.height,userId:+t.userId,dashboardId:t.id,selectedSliceIds:i.sliceIds,slices:e.slices,isLoading:e.isLoading,errorMessage:e.errorMessage,lastUpdated:e.lastUpdated,editMode:i.editMode}}),(function(e){return(0,f.DE)({fetchSlices:v.ex,updateSlices:v.Ff},e)}))(Oe),Ne=({registryKeys:e,registry:t})=>()=>e.map((e=>t[e])),qe=({registryKeys:e,registry:t})=>i=>{e=e.filter((e=>e!==i)),delete t[i]},Ve=({registry:e})=>t=>e[t],Ae=((e=[])=>{const t={registry:{},registryKeys:[]},i=(({registryKeys:e,registry:t})=>(i,n)=>{e.push(i),t[i]={key:i,metadata:n.metadata,Component:(0,o.lazy)(n.loadComponent)}})(t);return e.forEach((({key:e,item:t})=>{i(e,t)})),{set:i,get:Ve(t),delete:qe(t),getAll:Ne(t)}})([]),Ke={id:w().string.isRequired,type:w().string.isRequired,label:w().string.isRequired,className:w().string},je=a.iK.div`
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
`;class Xe extends o.PureComponent{render(){const{label:e,id:t,type:i,className:n,meta:o}=this.props;return(0,V.tZ)(Te,{component:{type:i,id:t,meta:o},parentComponent:{id:_.D0,type:E.F0},index:0,depth:0,editMode:!0,children:({dragSourceRef:t})=>(0,V.BX)(je,{ref:t,children:[(0,V.tZ)(Le,{className:r()("new-component-placeholder",n)}),e]})})}}function He(){return(0,V.tZ)(Xe,{id:_.Nb,type:E.BA,label:(0,h.t)("Column"),className:"fa fa-long-arrow-down"})}function We(){return(0,V.tZ)(Xe,{id:_.ES,type:E.hE,label:(0,h.t)("Divider"),className:"divider-placeholder"})}function Ye(){return(0,V.tZ)(Xe,{id:_.Z1,type:E.Nc,label:(0,h.t)("Header"),className:"fa fa-header"})}function Ge(){return(0,V.tZ)(Xe,{id:_.vD,type:E.Os,label:(0,h.t)("Row"),className:"fa fa-long-arrow-right"})}function Je(){return(0,V.tZ)(Xe,{id:_.NN,type:E.yR,label:(0,h.t)("Tabs"),className:"fa fa-window-restore"})}function Qe(){return(0,V.tZ)(Xe,{id:_.C3,type:E.xh,label:(0,h.t)("Text / Markdown"),className:"fa fa-font"})}Xe.propTypes=Ke,Xe.defaultProps={className:null};const et=({componentKey:e,metadata:t})=>(0,V.tZ)(Xe,{id:_.gR,type:E.t,label:t.name,meta:{metadata:t,componentKey:e},className:`fa fa-${t.iconName}`}),tt=({topOffset:e=0})=>(0,V.tZ)("div",{css:s.iv`
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
          `,children:(0,V.tZ)(Be,{})},1),(0,V.BX)(g.ZP.TabPane,{tab:(0,h.t)("Layout elements"),children:[(0,V.tZ)(Je,{}),(0,V.tZ)(Ge,{}),(0,V.tZ)(He,{}),(0,V.tZ)(Ye,{}),(0,V.tZ)(Qe,{}),(0,V.tZ)(We,{}),Ae.getAll().map((({key:e,metadata:t})=>(0,V.tZ)(et,{metadata:t,componentKey:e})))]},2)]})})});var it=i(74599),nt=i(30381),rt=i.n(nt),ot=i(75049),at=i(3741),st=i(12617),lt=i(9679),dt=i(41609),ct=i.n(dt),ht=i(83862),ut=i(27600),pt=i(10222),mt=i(68492),gt=i(23525),ft=i(52004);const vt=e=>{const{copyMenuItemTitle:t,emailMenuItemTitle:i,emailSubject:n,emailBody:r,addDangerToast:o,addSuccessToast:a,dashboardId:s,dashboardComponentId:l,copyMenuItemRef:d,shareByEmailMenuItemRef:c,selectedKeys:p,...m}=e,{dataMask:g,activeTabs:f}=(0,u.v9)((e=>({dataMask:e.dataMask,activeTabs:e.dashboardState.activeTabs})));async function v(){return(0,gt.Nm)({dashboardId:s,dataMask:g,activeTabs:f,anchor:l})}return(0,V.BX)(ht.Menu,{selectable:!1,selectedKeys:p,onClick:e=>e.key===ft.bu.CopyLink?async function(){try{await(0,pt.Z)(v),a((0,h.t)("Copied to clipboard!"))}catch(e){mt.Z.error(e),o((0,h.t)("Sorry, something went wrong. Try again later."))}}():async function(){try{const e=encodeURIComponent(`${r}${await v()}`),t=encodeURIComponent(n);window.location.href=`mailto:?Subject=${t}%20&Body=${e}`}catch(e){mt.Z.error(e),o((0,h.t)("Sorry, something went wrong. Try again later."))}}(),children:[(0,V.tZ)(ht.Menu.Item,{ref:d,...m,children:(0,V.tZ)("div",{role:"button",tabIndex:0,children:t})},ft.bu.CopyLink),(0,V.tZ)(ht.Menu.Item,{ref:c,...m,children:(0,V.tZ)("div",{role:"button",tabIndex:0,children:i})},ft.bu.ShareByEmail)]})};var bt,yt=i(10928),xt=i.n(yt),Ct=i(31069),St=i(14114);function wt({text:e,logEvent:t,dashboardId:i,format:n,...r}){const o=(0,u.v9)((e=>xt()(e.dashboardState.activeTabs)||void 0)),{addDangerToast:a,addSuccessToast:s,addInfoToast:l}=(0,St.e1)();return(0,V.tZ)(ht.Menu.Item,{...r,children:(0,V.tZ)("div",{onClick:()=>{let e=0;const r=t=>{(e=>fetch(`${e}?download_format=${n}`).then((e=>{if(404===e.status)throw new Error("Image not ready");return e.blob()})).then((e=>{const t=window.URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=`screenshot.${n}`,document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(t)})))(t).then((()=>{s((0,h.t)("The screenshot is now being downloaded."))})).catch((i=>{e<30?(e+=1,l((0,h.t)("The screenshot is being generated. Please, do not leave the page."),{noDuplicate:!0}),setTimeout((()=>r(t)),3e3)):(a((0,h.t)("The screenshot could not be downloaded. Please, try again later.")),mt.Z.error(i))}))};Ct.Z.post({endpoint:`/api/v1/dashboard/${i}/cache_dashboard_screenshot`,jsonPayload:{anchor:o}}).then((({json:e})=>{const t=null==e?void 0:e.image_url;if(!t)throw new Error("No image URL in response");l((0,h.t)("The screenshot is being generated. Please, do not leave the page.")),r(t)})).catch((e=>{mt.Z.error(e),a((0,h.t)("The screenshot could not be downloaded. Please, try again later."))})).finally((()=>{null==t||t(n===bt.PNG?at.n2:at.Kr)}))},role:"button",tabIndex:0,children:e})},n)}!function(e){e.PDF="pdf",e.PNG="png",e.EXCEL="xls"}(bt||(bt={}));var Zt=i(12515);function Rt({text:e,logEvent:t,dashboardId:i,format:n,...r}){const o=(0,u.v9)((e=>xt()(e.dashboardState.activeTabs)||void 0)),a=(0,u.v9)((e=>e.charts||void 0)),s=(0,u.v9)((e=>{var t;return(null==(t=e.dashboardLayout)?void 0:t.present)||void 0}));return(0,V.tZ)(ht.Menu.Item,{...r,children:(0,V.tZ)("div",{onClick:()=>{const e={};for(const i in a){var t;const n=null==(t=a[i].form_data)?void 0:t.viz_type;"table"!==n&&"pivot_table_v2"!==n||(e[i]=(0,Zt.u)({formData:a[i].latestQueryFormData,resultFormat:"xlsx",resultType:"pivot_table_v2"===n?"post_processed":"full",force:!1,ownState:{},setDataMask:{}}))}Ct.Z.postForm(`/api/v1/dashboard/${i}/export_dashboard_excel`,{form_data:(0,lt.o)({charts:e,layout:s,anchor:o})})},role:"button",tabIndex:0,children:e})},n)}const kt=e=>{const{pdfMenuItemTitle:t,imageMenuItemTitle:i,excelMenuItemTitle:n,logEvent:r,dashboardId:o,...a}=e;return(0,V.BX)(ht.Menu,{selectable:!1,children:[(0,V.tZ)(wt,{text:t,dashboardId:o,logEvent:r,format:bt.PDF,...a}),(0,V.tZ)(wt,{text:i,dashboardId:o,logEvent:r,format:bt.PNG,...a}),(0,V.tZ)(Rt,{text:n,dashboardId:o,logEvent:r,format:bt.EXCEL,...a})]})};var $t=i(1304),Tt=i(94670);const Dt=a.iK.div`
  ${({theme:e})=>`\n    .css-editor-header {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      margin-bottom: ${2*e.gridUnit}px;\n\n      h5 {\n        margin-top: ${e.gridUnit}px;\n      }\n    }\n    .css-editor {\n      border: 1px solid ${e.colors.grayscale.light1};\n    }\n  `}
`;class Mt extends o.PureComponent{constructor(e){super(e),this.state={css:e.initialCss},this.changeCss=this.changeCss.bind(this),this.changeCssTemplate=this.changeCssTemplate.bind(this)}componentDidMount(){Tt.ry.preload(),Ct.Z.get({endpoint:"/csstemplateasyncmodelview/api/read"}).then((({json:e})=>{const t=e.result.map((e=>({value:e.template_name,css:e.css,label:e.template_name})));this.setState({templates:t})})).catch((()=>{this.props.addDangerToast((0,h.t)("An error occurred while fetching available CSS templates"))}))}changeCss(e){this.setState({css:e},(()=>{this.props.onChange(e)}))}changeCssTemplate(e){const t=String(e.key);this.changeCss(t)}renderTemplateSelector(){if(this.state.templates){const e=(0,V.tZ)(ht.Menu,{onClick:this.changeCssTemplate,children:this.state.templates.map((e=>(0,V.tZ)(ht.Menu.Item,{children:e.label},e.css)))});return(0,V.tZ)(T.Gj,{overlay:e,placement:"bottomRight",children:(0,V.tZ)(M.Z,{children:(0,h.t)("Load a CSS template")})})}return null}render(){return(0,V.tZ)($t.Z,{triggerNode:this.props.triggerNode,modalTitle:(0,h.t)("CSS"),modalBody:(0,V.BX)(Dt,{children:[(0,V.BX)("div",{className:"css-editor-header",children:[(0,V.tZ)("h5",{children:(0,h.t)("Live CSS editor")}),this.renderTemplateSelector()]}),(0,V.tZ)(Tt.ry,{className:"css-editor",minLines:12,maxLines:30,onChange:this.changeCss,height:"200px",width:"100%",editorProps:{$blockScrolling:!0},enableLiveAutocompletion:!0,value:this.state.css||""})]})})}}Mt.defaultProps={initialCss:"",onChange:()=>{}};const It=Mt;var Ft=i(81315),Et=i(29487),_t=i(49238),Pt=i(85633);const zt=(0,a.iK)($t.Z)`
  .ant-modal-body {
    overflow: visible;
  }
`,Ut=a.iK.div`
  margin-top: ${({theme:e})=>6*e.gridUnit}px;
`,Ot=a.iK.div`
  display: flex;
  margin-top: ${({theme:e})=>3*e.gridUnit}px;
`,Bt=a.iK.div`
  width: 30%;
  margin: auto;
`;class Nt extends o.PureComponent{constructor(e){super(e),this.modalRef=void 0,this.modalRef=(0,o.createRef)(),this.state={refreshFrequency:e.refreshFrequency,custom_hour:0,custom_min:0,custom_sec:0,custom_block:!1},this.handleFrequencyChange=this.handleFrequencyChange.bind(this),this.onSave=this.onSave.bind(this),this.onCancel=this.onCancel.bind(this)}onSave(){var e,t;this.props.onChange(this.state.refreshFrequency,this.props.editMode),null==(e=this.modalRef)||null==(t=e.current)||t.close(),this.props.addSuccessToast((0,h.t)("Refresh interval saved"))}onCancel(){var e,t;this.setState({refreshFrequency:this.props.refreshFrequency}),null==(e=this.modalRef)||null==(t=e.current)||t.close()}handleFrequencyChange(e){const{refreshIntervalOptions:t}=this.props;this.setState({refreshFrequency:e||t[0][0]}),this.setState({custom_block:-1===e}),-1===e&&this.setState({custom_hour:0,custom_min:0,custom_sec:0})}onSaveValue(e){var t,i;this.props.onChange(e,this.props.editMode),null==(t=this.modalRef)||null==(i=t.current)||i.close(),this.props.addSuccessToast((0,h.t)("Refresh interval saved"))}createIntervalOptions(e){const t=[];return t.push({value:-1,label:(0,h.t)("Custom interval")}),t.push(...e.map((e=>({value:e[0],label:(0,h.t)(e[1])})))),t}min_sec_options(e){return Array.from({length:60},((t,i)=>({value:i,label:`${i} ${e}`})))}refresh_custom_val(e,t,i,n){if(!0===e){const e=t,r=i,o=n;(e<0||r<0||o<0||r>=60||o>=60)&&this.props.addSuccessToast((0,h.t)("Put positive values and valid minute and second value less than 60"));const a=60*e*60+60*r+o;if(0===a)return void this.props.addSuccessToast((0,h.t)("Put some positive value greater than 0"));this.handleFrequencyChange(a),this.onSaveValue(a)}else this.onSave()}render(){const{refreshLimit:e=0,refreshWarning:t,editMode:i,refreshIntervalOptions:n}=this.props,{refreshFrequency:r=0,custom_hour:o=0,custom_min:a=0,custom_sec:s=0,custom_block:l=!1}=this.state,d=!!r&&!!t&&r<e;return(0,V.tZ)(zt,{ref:this.modalRef,triggerNode:this.props.triggerNode,modalTitle:(0,h.t)("Refresh interval"),modalBody:(0,V.BX)("div",{children:[(0,V.BX)("div",{id:"refresh_from_dropdown",children:[(0,V.tZ)(_t.lX,{children:(0,V.tZ)("b",{children:(0,h.t)("Refresh frequency")})}),(0,V.tZ)(Ft.Z,{ariaLabel:(0,h.t)("Refresh interval"),options:this.createIntervalOptions(n),value:r,onChange:this.handleFrequencyChange,sortComparator:(0,Pt.mj)("value")})]}),l&&(0,V.BX)(Ot,{children:[(0,V.BX)(Bt,{children:[(0,V.tZ)(_t.lX,{children:(0,V.tZ)("b",{children:(0,h.t)("HOUR")})})," ",(0,V.tZ)("br",{}),(0,V.tZ)($.II,{type:"number",min:"0",className:"form-control input-sm",placeholder:(0,h.t)("Type a number"),onChange:e=>{this.setState({custom_hour:Number(e.target.value)})},value:o})]}),(0,V.BX)(Bt,{children:[(0,V.tZ)(_t.lX,{children:(0,V.tZ)("b",{children:(0,h.t)("MINUTE")})})," ",(0,V.tZ)("br",{}),(0,V.tZ)(Ft.Z,{ariaLabel:(0,h.t)("Minutes value"),options:this.min_sec_options("minutes"),value:a,onChange:e=>{this.setState({custom_min:e})},sortComparator:(0,Pt.mj)("value")})]}),(0,V.BX)(Bt,{children:[(0,V.tZ)(_t.lX,{children:(0,V.tZ)("b",{children:(0,h.t)("SECOND")})})," ",(0,V.tZ)("br",{}),(0,V.tZ)(Ft.Z,{ariaLabel:(0,h.t)("Seconds value"),options:this.min_sec_options("seconds"),value:s,onChange:e=>{this.setState({custom_sec:e})},sortComparator:(0,Pt.mj)("value")})]})]}),d&&(0,V.tZ)(Ut,{children:(0,V.tZ)(Et.Z,{type:"warning",message:(0,V.BX)(V.HY,{children:[(0,V.tZ)("div",{children:t}),(0,V.tZ)("br",{}),(0,V.tZ)("strong",{children:(0,h.t)("Are you sure you want to proceed?")})]})})})]}),modalFooter:(0,V.BX)(V.HY,{children:[(0,V.tZ)(M.Z,{onClick:this.onCancel,buttonSize:"small",children:(0,h.t)("Cancel")}),(0,V.tZ)(M.Z,{buttonStyle:"primary",buttonSize:"small",onClick:()=>this.refresh_custom_val(l,o,a,s),children:i?(0,h.t)("Save"):(0,h.t)("Save for this session")})]})})}}Nt.defaultProps={refreshLimit:0,refreshWarning:null};const qt=Nt;var Vt=i(87183);const At={saveType:_.TN,colorNamespace:void 0,colorScheme:void 0,shouldPersistRefreshFrequency:!1};class Kt extends o.PureComponent{constructor(e){super(e),this.modal=void 0,this.onSave=void 0,this.state={saveType:e.saveType,newDashName:`${e.dashboardTitle} ${(0,h.t)("[copy]")}`,duplicateSlices:!1},this.handleSaveTypeChange=this.handleSaveTypeChange.bind(this),this.handleNameChange=this.handleNameChange.bind(this),this.saveDashboard=this.saveDashboard.bind(this),this.toggleDuplicateSlices=this.toggleDuplicateSlices.bind(this),this.onSave=this.props.onSave.bind(this),this.modal=(0,o.createRef)()}toggleDuplicateSlices(){this.setState((e=>({duplicateSlices:!e.duplicateSlices})))}handleSaveTypeChange(e){this.setState({saveType:e.target.value})}handleNameChange(e){this.setState({newDashName:e,saveType:_.kS})}saveDashboard(){var e;const{saveType:t,newDashName:i}=this.state,{dashboardTitle:n,dashboardInfo:r,layout:o,customCss:a,dashboardId:s,refreshFrequency:l,shouldPersistRefreshFrequency:d,lastModifiedTime:c}=this.props,u=d?l:null==(e=r.metadata)?void 0:e.refresh_frequency,p={certified_by:r.certified_by,certification_details:r.certification_details,css:a,dashboard_title:t===_.kS?i:n,duplicate_slices:this.state.duplicateSlices,last_modified_time:c,owners:r.owners,roles:r.roles,metadata:{...null==r?void 0:r.metadata,positions:o,refresh_frequency:u}};var m,g;t!==_.kS||i?(this.onSave(p,s,t).then((e=>{var i,n;t===_.kS&&null!=(i=e.json)&&null!=(n=i.result)&&n.id&&(window.location.href=`/superset/dashboard/${e.json.result.id}/`)})),null==(m=this.modal)||null==(g=m.current)||null==g.close||g.close()):this.props.addDangerToast((0,h.t)("You must pick a name for the new dashboard"))}render(){return(0,V.tZ)($t.Z,{ref:this.modal,triggerNode:this.props.triggerNode,modalTitle:(0,h.t)("Save dashboard"),modalBody:(0,V.BX)("div",{children:[(0,V.tZ)(Vt.Y,{value:_.TN,onChange:this.handleSaveTypeChange,checked:this.state.saveType===_.TN,disabled:!this.props.canOverwrite,children:(0,h.t)("Overwrite Dashboard [%s]",this.props.dashboardTitle)}),(0,V.tZ)("hr",{}),(0,V.tZ)(Vt.Y,{value:_.kS,onChange:this.handleSaveTypeChange,checked:this.state.saveType===_.kS,children:(0,h.t)("Save as:")}),(0,V.tZ)($.II,{type:"text",placeholder:(0,h.t)("[dashboard name]"),value:this.state.newDashName,onFocus:e=>this.handleNameChange(e.target.value),onChange:e=>this.handleNameChange(e.target.value)}),(0,V.BX)("div",{className:"m-l-25 m-t-5",children:[(0,V.tZ)(z.ZP,{checked:this.state.duplicateSlices,onChange:()=>this.toggleDuplicateSlices()}),(0,V.tZ)("span",{className:"m-l-5",children:(0,h.t)("also copy (duplicate) charts")})]})]}),modalFooter:(0,V.tZ)("div",{children:(0,V.tZ)(M.Z,{buttonStyle:"primary",onClick:this.saveDashboard,children:(0,h.t)("Save")})})})}}Kt.defaultProps=At;const jt=Kt;var Lt=i(21312),Xt=i(14505),Ht=i(87999),Wt=i(11370);function Yt({pathname:e,filters:t={},hash:i="",standalone:n}){const r=new URLSearchParams(window.location.search);ct()(t)||r.set(ut.KD.preselectFilters.name,JSON.stringify((0,Wt.Z)(t))),n?r.set(ut.KD.standalone.name,n.toString()):r.delete(ut.KD.standalone.name);const o=(0,gt.eY)(ut.KD.nativeFiltersKey);o&&r.set(ut.KD.nativeFiltersKey.name,o);const a=i?`#${i}`:"";return`${e}?${r.toString()}${a}`}var Gt=i(43399);const Jt={addSuccessToast:w().func.isRequired,addDangerToast:w().func.isRequired,dashboardInfo:w().object.isRequired,dashboardId:w().number,dashboardTitle:w().string,dataMask:w().object.isRequired,customCss:w().string,colorNamespace:w().string,colorScheme:w().string,directPathToChild:w().array,onChange:w().func.isRequired,updateCss:w().func.isRequired,forceRefreshAllCharts:w().func.isRequired,refreshFrequency:w().number,shouldPersistRefreshFrequency:w().bool.isRequired,setRefreshFrequency:w().func.isRequired,startPeriodicRender:w().func.isRequired,editMode:w().bool.isRequired,userCanEdit:w().bool,userCanShare:w().bool,userCanSave:w().bool,userCanCurate:w().bool.isRequired,isLoading:w().bool.isRequired,layout:w().object.isRequired,expandedSlices:w().object,onSave:w().func.isRequired,showPropertiesModal:w().func.isRequired,manageEmbedded:w().func.isRequired,logEvent:w().func,refreshLimit:w().number,refreshWarning:w().string,lastModifiedTime:w().number.isRequired};class Qt extends o.PureComponent{static discardChanges(){window.location.reload()}constructor(e){super(e),this.state={css:e.customCss,showReportSubMenu:null},this.changeCss=this.changeCss.bind(this),this.changeRefreshInterval=this.changeRefreshInterval.bind(this),this.handleMenuClick=this.handleMenuClick.bind(this),this.setShowReportSubMenu=this.setShowReportSubMenu.bind(this)}UNSAFE_componentWillReceiveProps(e){this.props.customCss!==e.customCss&&this.setState({css:e.customCss},(()=>{(0,Xt.Z)(e.customCss)}))}setShowReportSubMenu(e){this.setState({showReportSubMenu:e})}changeCss(e){this.props.onChange(),this.props.updateCss(e)}changeRefreshInterval(e,t){this.props.setRefreshFrequency(e,t),this.props.startPeriodicRender(1e3*e)}handleMenuClick({key:e}){switch(e){case ft.bu.RefreshDashboard:this.props.forceRefreshAllCharts(),this.props.addSuccessToast((0,h.t)("Refreshing charts"));break;case ft.bu.EditProperties:this.props.showPropertiesModal();break;case ft.bu.ToggleFullscreen:{const e=Yt({pathname:window.location.pathname,filters:(0,Gt.De)(),hash:window.location.hash,standalone:!(0,gt.eY)(ut.KD.standalone)});window.location.replace(e);break}case ft.bu.ManageEmbedded:this.props.manageEmbedded()}}render(){var e,t,i;const{dashboardTitle:n,dashboardId:r,dashboardInfo:o,refreshFrequency:a,shouldPersistRefreshFrequency:s,editMode:l,customCss:d,colorNamespace:c,colorScheme:u,layout:p,expandedSlices:m,onSave:g,userCanEdit:f,userCanShare:v,userCanSave:b,userCanCurate:y,isLoading:x,refreshLimit:C,refreshWarning:S,lastModifiedTime:w,addSuccessToast:Z,addDangerToast:R,setIsDropdownVisible:k,isDropdownVisible:$,directPathToChild:T,...D}=this.props,M=`${(0,h.t)("Superset dashboard")} ${n}`,I=(0,h.t)("Check out this dashboard: "),F=!(null!=o&&o.userId),E=Yt({pathname:window.location.pathname,filters:(0,Gt.De)(),hash:window.location.hash}),P=null==(e=o.common)||null==(t=e.conf)?void 0:t.DASHBOARD_AUTO_REFRESH_INTERVALS,z=[...T||[]].pop();return(0,V.BX)(ht.Menu,{selectable:!1,...D,children:[!l&&(0,V.tZ)(ht.Menu.Item,{disabled:x,onClick:this.handleMenuClick,children:(0,h.t)("Refresh dashboard")},ft.bu.RefreshDashboard),!l&&!F&&(0,V.tZ)(ht.Menu.Item,{onClick:this.handleMenuClick,children:(0,gt.eY)(ut.KD.standalone)?(0,h.t)("Exit fullscreen"):(0,h.t)("Enter fullscreen")},ft.bu.ToggleFullscreen),l&&(0,V.tZ)(ht.Menu.Item,{onClick:this.handleMenuClick,children:(0,h.t)("Edit properties")},ft.bu.EditProperties),l&&(0,V.tZ)(ht.Menu.Item,{children:(0,V.tZ)(It,{triggerNode:(0,V.tZ)("span",{children:(0,h.t)("Edit CSS")}),initialCss:this.state.css,onChange:this.changeCss,addDangerToast:R})},ft.bu.EditCss),(0,V.tZ)(ht.Menu.Divider,{}),b&&(0,V.tZ)(ht.Menu.Item,{children:(0,V.tZ)(jt,{addSuccessToast:this.props.addSuccessToast,addDangerToast:this.props.addDangerToast,dashboardId:r,dashboardTitle:n,dashboardInfo:o,saveType:_.kS,layout:p,expandedSlices:m,refreshFrequency:a,shouldPersistRefreshFrequency:s,lastModifiedTime:w,customCss:d,colorNamespace:c,colorScheme:u,onSave:g,triggerNode:(0,V.tZ)("span",{children:(0,h.t)("Save as")}),canOverwrite:f})},ft.bu.SaveModal),(0,V.tZ)(ht.Menu.SubMenu,{disabled:x,title:(0,h.t)("Download"),logEvent:this.props.logEvent,children:(0,V.tZ)(kt,{pdfMenuItemTitle:(0,h.t)("Export to PDF"),imageMenuItemTitle:(0,h.t)("Download as Image"),excelMenuItemTitle:(0,h.t)("Export to Excel"),dashboardTitle:n,dashboardId:r})},ft.bu.Download),v&&(0,V.tZ)(ht.Menu.SubMenu,{disabled:x,title:(0,h.t)("Share"),children:(0,V.tZ)(vt,{url:E,copyMenuItemTitle:(0,h.t)("Copy permalink to clipboard"),emailMenuItemTitle:(0,h.t)("Share permalink by email"),emailSubject:M,emailBody:I,addSuccessToast:Z,addDangerToast:R,dashboardId:r,dashboardComponentId:z})},ft.bu.Share),!l&&y&&(0,V.tZ)(ht.Menu.Item,{onClick:this.handleMenuClick,children:(0,h.t)("Embed dashboard")},ft.bu.ManageEmbedded),(0,V.tZ)(ht.Menu.Divider,{}),l?null:this.state.showReportSubMenu?(0,V.BX)(V.HY,{children:[(0,V.tZ)(ht.Menu.SubMenu,{title:(0,h.t)("Manage email report"),children:(0,V.tZ)(Lt.Z,{dashboardId:o.id,setShowReportSubMenu:this.setShowReportSubMenu,showReportSubMenu:this.state.showReportSubMenu,setIsDropdownVisible:k,isDropdownVisible:$,useTextMenu:!0})}),(0,V.tZ)(ht.Menu.Divider,{})]}):(0,V.tZ)(ht.Menu,{children:(0,V.tZ)(Lt.Z,{dashboardId:o.id,setShowReportSubMenu:this.setShowReportSubMenu,setIsDropdownVisible:k,isDropdownVisible:$,useTextMenu:!0})}),l&&!ct()(null==o||null==(i=o.metadata)?void 0:i.filter_scopes)&&(0,V.tZ)(ht.Menu.Item,{children:(0,V.tZ)(Ht.Z,{className:"m-r-5",triggerNode:(0,h.t)("Set filter mapping")})},ft.bu.SetFilterMapping),(0,V.tZ)(ht.Menu.Item,{children:(0,V.tZ)(qt,{addSuccessToast:this.props.addSuccessToast,refreshFrequency:a,refreshLimit:C,refreshWarning:S,onChange:this.changeRefreshInterval,editMode:l,refreshIntervalOptions:P,triggerNode:(0,V.tZ)("span",{children:(0,h.t)("Set auto-refresh interval")})})},ft.bu.AutorefreshModal)]})}}Qt.propTypes=Jt,Qt.defaultProps={colorNamespace:void 0,colorScheme:void 0,refreshLimit:0,refreshWarning:null};const ei=(0,u.$j)((e=>({directPathToChild:e.dashboardState.directPathToChild})))(Qt);var ti=i(37921);const ii={dashboardId:w().number,isPublished:w().bool.isRequired,savePublished:w().func.isRequired,canEdit:w().bool,canSave:w().bool},ni=(0,h.t)("This dashboard is not published, it will not show up in the list of dashboards. Click here to publish this dashboard."),ri=(0,h.t)("This dashboard is not published which means it will not show up in the list of dashboards. Favorite it to see it there or access it by using the URL directly."),oi=(0,h.t)("This dashboard is published. Click to make it a draft.");class ai extends o.Component{componentDidMount(){this.togglePublished=this.togglePublished.bind(this)}togglePublished(){this.props.savePublished(this.props.dashboardId,!this.props.isPublished)}render(){return this.props.isPublished?this.props.canEdit&&this.props.canSave?(0,V.tZ)(N.u,{id:"published-dashboard-tooltip",placement:"bottom",title:oi,children:(0,V.tZ)(ti.Z,{onClick:()=>{this.togglePublished()},children:(0,h.t)("Published")})}):null:this.props.canEdit&&this.props.canSave?(0,V.tZ)(N.u,{id:"unpublished-dashboard-tooltip",placement:"bottom",title:ni,children:(0,V.tZ)(ti.Z,{onClick:()=>{this.togglePublished()},children:(0,h.t)("Draft")})}):(0,V.tZ)(N.u,{id:"unpublished-dashboard-tooltip",placement:"bottom",title:ri,children:(0,V.tZ)(ti.Z,{children:(0,h.t)("Draft")})})}}ai.propTypes=ii;const si={onUndo:w().func.isRequired,onRedo:w().func.isRequired};class li extends o.PureComponent{constructor(e){super(e),this.handleKeydown=this.handleKeydown.bind(this)}componentDidMount(){document.addEventListener("keydown",this.handleKeydown)}componentWillUnmount(){document.removeEventListener("keydown",this.handleKeydown)}handleKeydown(e){if(e.ctrlKey||e.metaKey){const t="z"===e.key||90===e.keyCode,i="y"===e.key||89===e.keyCode,n=document&&document.querySelector(".dashboard-markdown--editing"),r=document&&document.querySelector(".editable-title--editing");n||r||!t&&!i||(e.preventDefault(),(t?this.props.onUndo:this.props.onRedo)())}}render(){return null}}li.propTypes=si;const di=li;var ci=i(20818),hi=i(83379);const ui=e=>{e&&clearInterval(e)};var pi=i(52564),mi=i(67697),gi=i(22102),fi=i(74069);const vi=(0,ot.I)(),bi=e=>e.split(/(?:\s|,)+/).filter((e=>e)),yi=a.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`,xi=({dashboardId:e,onHide:t})=>{var i;const{addInfoToast:n,addDangerToast:r}=(0,St.e1)(),[a,s]=(0,o.useState)(!0),[l,d]=(0,o.useState)(!1),[c,u]=(0,o.useState)(null),[p,m]=(0,o.useState)(""),g=`/api/v1/dashboard/${e}/embedded`,f=!c||bi(p).join()!==c.allowed_domains.join(),v=(0,o.useCallback)((()=>{d(!0),(0,gi.Z)({method:"POST",endpoint:g})({allowed_domains:bi(p)}).then((({result:e})=>{u(e),m(e.allowed_domains.join(", ")),n((0,h.t)("Changes saved."))}),(e=>{console.error(e),r((0,h.t)((0,h.t)("Sorry, something went wrong. The changes could not be saved.")))})).finally((()=>{d(!1)}))}),[g,p]),b=(0,o.useCallback)((()=>{fi.default.confirm({title:(0,h.t)("Disable embedding?"),content:(0,h.t)("This will remove your current embed configuration."),okType:"danger",onOk:()=>{d(!0),(0,gi.Z)({method:"DELETE",endpoint:g})({}).then((()=>{u(null),m(""),n((0,h.t)("Embedding deactivated.")),t()}),(e=>{console.error(e),r((0,h.t)("Sorry, something went wrong. Embedding could not be deactivated."))})).finally((()=>{d(!1)}))}})}),[g]);if((0,o.useEffect)((()=>{s(!1),(0,gi.Z)({method:"GET",endpoint:g})({}).catch((e=>{if(404===e.status)return{result:null};throw r((0,h.t)("Sorry, something went wrong. Please try again.")),e})).then((({result:e})=>{s(!0),u(e),m(e?e.allowed_domains.join(", "):"")}))}),[e]),!a)return(0,V.tZ)(D.Z,{});const y=vi.get("embedded.documentation.configuration_details"),x=vi.get("embedded.documentation.description"),C=null!=(i=vi.get("embedded.documentation.url"))?i:"https://www.npmjs.com/package/@superset-ui/embedded-sdk";return(0,V.BX)(V.HY,{children:[c?y?(0,V.tZ)(y,{embeddedId:c.uuid}):(0,V.BX)("p",{children:[(0,h.t)("This dashboard is ready to embed. In your application, pass the following id to the SDK:"),(0,V.tZ)("br",{}),(0,V.tZ)("code",{children:c.uuid})]}):(0,V.tZ)("p",{children:(0,h.t)("Configure this dashboard to embed it into an external web application.")}),(0,V.BX)("p",{children:[(0,h.t)("For further instructions, consult the")," ",(0,V.tZ)("a",{href:C,target:"_blank",rel:"noreferrer",children:x?x():(0,h.t)("Superset Embedded SDK documentation.")})]}),(0,V.tZ)("h3",{children:(0,h.t)("Settings")}),(0,V.BX)(_t.xJ,{children:[(0,V.BX)("label",{htmlFor:"allowed-domains",children:[(0,h.t)("Allowed Domains (comma separated)")," ",(0,V.tZ)(U.V,{tooltip:(0,h.t)("A list of domain names that can embed this dashboard. Leaving this field empty will allow embedding from any domain.")})]}),(0,V.tZ)($.II,{name:"allowed-domains",id:"allowed-domains",value:p,placeholder:"superset.example.com",onChange:e=>m(e.target.value)})]}),(0,V.tZ)(yi,{children:c?(0,V.BX)(V.HY,{children:[(0,V.tZ)(M.Z,{onClick:b,buttonStyle:"secondary",loading:l,children:(0,h.t)("Deactivate")}),(0,V.tZ)(M.Z,{onClick:v,buttonStyle:"primary",disabled:!f,loading:l,children:(0,h.t)("Save changes")})]}):(0,V.tZ)(M.Z,{onClick:v,buttonStyle:"primary",loading:l,children:(0,h.t)("Enable embedding")})})]})},Ci=e=>{const{show:t,onHide:i}=e,n=vi.get("embedded.modal");return n?(0,V.tZ)(n,{...e}):(0,V.tZ)(fi.default,{show:t,onHide:i,title:(0,h.t)("Embed"),hideFooter:!0,children:(0,V.tZ)(xi,{...e})})},Si=(0,i(67913).Z)((()=>i.e(9043).then(i.bind(i,49043)))),wi=()=>{const e=(0,u.v9)((({dashboardState:e})=>e.overwriteConfirmMetadata));return(0,V.tZ)(V.HY,{children:e&&(0,V.tZ)(Si,{overwriteConfirmMetadata:e})})},Zi=(0,ot.I)(),Ri={addSuccessToast:w().func.isRequired,addDangerToast:w().func.isRequired,addWarningToast:w().func.isRequired,user:w().object,dashboardInfo:w().object.isRequired,dashboardTitle:w().string,dataMask:w().object.isRequired,charts:w().objectOf(P.$6).isRequired,layout:w().object.isRequired,expandedSlices:w().object,customCss:w().string,colorNamespace:w().string,colorScheme:w().string,setColorScheme:w().func.isRequired,setUnsavedChanges:w().func.isRequired,isStarred:w().bool.isRequired,isPublished:w().bool.isRequired,isLoading:w().bool.isRequired,onSave:w().func.isRequired,onChange:w().func.isRequired,fetchFaveStar:w().func.isRequired,fetchCharts:w().func.isRequired,saveFaveStar:w().func.isRequired,savePublished:w().func.isRequired,updateDashboardTitle:w().func.isRequired,editMode:w().bool.isRequired,setEditMode:w().func.isRequired,showBuilderPane:w().func.isRequired,updateCss:w().func.isRequired,logEvent:w().func.isRequired,hasUnsavedChanges:w().bool.isRequired,maxUndoHistoryExceeded:w().bool.isRequired,lastModifiedTime:w().number.isRequired,onRefresh:w().func.isRequired,onUndo:w().func.isRequired,onRedo:w().func.isRequired,undoLength:w().number.isRequired,redoLength:w().number.isRequired,setMaxUndoHistoryExceeded:w().func.isRequired,maxUndoHistoryToast:w().func.isRequired,refreshFrequency:w().number,shouldPersistRefreshFrequency:w().bool.isRequired,setRefreshFrequency:w().func.isRequired,dashboardInfoChanged:w().func.isRequired,dashboardTitleChanged:w().func.isRequired},ki=e=>s.iv`
  border-bottom: 1px solid ${e.colors.grayscale.light2};
`,$i=e=>s.iv`
  color: ${e.colors.primary.dark2};
`,Ti=e=>s.iv`
  display: flex;
  align-items: center;

  .action-schedule-report {
    margin-left: ${2*e.gridUnit}px;
  }

  .undoRedo {
    display: flex;
    margin-right: ${2*e.gridUnit}px;
  }
`,Di=(0,a.iK)(T.C0)`
  padding: 0;
  &:hover {
    background: transparent;
  }
`,Mi=e=>s.iv`
  color: ${e.colors.grayscale.light1};
  &:hover {
    color: ${e.colors.grayscale.base};
  }
`,Ii=e=>s.iv`
  color: ${e.colors.grayscale.base};
`,Fi=e=>s.iv`
  color: ${e.colors.grayscale.light2};
`,Ei=e=>s.iv`
  min-width: ${17*e.gridUnit}px;
  height: ${8*e.gridUnit}px;
`,_i=e=>s.iv`
  min-width: ${22*e.gridUnit}px;
  height: ${8*e.gridUnit}px;
`;class Pi extends o.PureComponent{static discardChanges(){const e=new URL(window.location.href);e.searchParams.delete("edit"),window.location.assign(e)}constructor(e){super(e),this.showEmbedModal=()=>{this.setState({showingEmbedModal:!0})},this.hideEmbedModal=()=>{this.setState({showingEmbedModal:!1})},this.getMetadataItems=()=>{const{dashboardInfo:e}=this.props;return[{type:mi.pG.LastModified,value:e.changed_on_delta_humanized,modifiedBy:(0,hi.Z)(e.changed_by)||(0,h.t)("Not available")},{type:mi.pG.Owner,createdBy:(0,hi.Z)(e.created_by)||(0,h.t)("Not available"),owners:e.owners.length>0?e.owners.map(hi.Z):(0,h.t)("None"),createdOn:e.created_on_delta_humanized}]},this.state={didNotifyMaxUndoHistoryToast:!1,emphasizeUndo:!1,emphasizeRedo:!1,showingPropertiesModal:!1,isDropdownVisible:!1},this.handleChangeText=this.handleChangeText.bind(this),this.handleCtrlZ=this.handleCtrlZ.bind(this),this.handleCtrlY=this.handleCtrlY.bind(this),this.toggleEditMode=this.toggleEditMode.bind(this),this.forceRefresh=this.forceRefresh.bind(this),this.startPeriodicRender=this.startPeriodicRender.bind(this),this.overwriteDashboard=this.overwriteDashboard.bind(this),this.showPropertiesModal=this.showPropertiesModal.bind(this),this.hidePropertiesModal=this.hidePropertiesModal.bind(this),this.setIsDropdownVisible=this.setIsDropdownVisible.bind(this)}componentDidMount(){const{refreshFrequency:e}=this.props;this.startPeriodicRender(1e3*e)}componentDidUpdate(e){if(this.props.refreshFrequency!==e.refreshFrequency){const{refreshFrequency:e}=this.props;this.startPeriodicRender(1e3*e)}}UNSAFE_componentWillReceiveProps(e){_.Q9-e.undoLength<=0&&!this.state.didNotifyMaxUndoHistoryToast&&(this.setState((()=>({didNotifyMaxUndoHistoryToast:!0}))),this.props.maxUndoHistoryToast()),e.undoLength>_.Q9&&!this.props.maxUndoHistoryExceeded&&this.props.setMaxUndoHistoryExceeded()}componentWillUnmount(){ui(this.refreshTimer),this.props.setRefreshFrequency(0),clearTimeout(this.ctrlYTimeout),clearTimeout(this.ctrlZTimeout)}handleChangeText(e){const{updateDashboardTitle:t,onChange:i}=this.props;e&&this.props.dashboardTitle!==e&&(t(e),i())}setIsDropdownVisible(e){this.setState({isDropdownVisible:e})}handleCtrlY(){this.props.onRedo(),this.setState({emphasizeRedo:!0},(()=>{this.ctrlYTimeout&&clearTimeout(this.ctrlYTimeout),this.ctrlYTimeout=setTimeout((()=>{this.setState({emphasizeRedo:!1})}),100)}))}handleCtrlZ(){this.props.onUndo(),this.setState({emphasizeUndo:!0},(()=>{this.ctrlZTimeout&&clearTimeout(this.ctrlZTimeout),this.ctrlZTimeout=setTimeout((()=>{this.setState({emphasizeUndo:!1})}),100)}))}forceRefresh(){if(!this.props.isLoading){const e=Object.keys(this.props.charts);return this.props.logEvent(at.H3,{force:!0,interval:0,chartCount:e.length}),this.props.onRefresh(e,!0,0,this.props.dashboardInfo.id)}return!1}startPeriodicRender(e){let t;if(e){var i,n;const{dashboardInfo:r}=this.props,o=(null==(i=r.common)||null==(n=i.conf)?void 0:n.DASHBOARD_AUTO_REFRESH_INTERVALS).find((t=>Number(t[0])===e/1e3));t=o?(0,h.t)(o[1]):rt().duration(e,"millisecond").humanize()}this.refreshTimer=function({interval:e=0,periodicRender:t,refreshTimer:i}){return ui(i),e>0?setInterval(t,e):0}({interval:e,periodicRender:()=>{const{fetchCharts:i,logEvent:n,charts:r,dashboardInfo:o}=this.props,{metadata:a}=o,s=a.timed_refresh_immune_slices||[],l=Object.values(r).filter((e=>-1===s.indexOf(e.id))).map((e=>e.id));return n(at.S,{interval:e,chartCount:l.length}),this.props.addWarningToast((0,h.t)("This dashboard is currently auto refreshing; the next auto refresh will be in %s.",t)),"fetch"===o.common.conf.DASHBOARD_AUTO_REFRESH_MODE?i(l,!1,.2*e,o.id):i(l,!0,.2*e,o.id)},refreshTimer:this.refreshTimer})}toggleEditMode(){this.props.logEvent(at.vH,{edit_mode:!this.props.editMode}),this.props.setEditMode(!this.props.editMode)}overwriteDashboard(){var e,t,i;const{dashboardTitle:n,layout:r,colorScheme:o,colorNamespace:a,customCss:s,dashboardInfo:l,refreshFrequency:d,shouldPersistRefreshFrequency:c,lastModifiedTime:u,slug:p}=this.props,m=c?d:null==(e=l.metadata)?void 0:e.refresh_frequency,g=(null==l||null==(t=l.metadata)?void 0:t.color_namespace)||a,f=(null==l||null==(i=l.metadata)?void 0:i.color_scheme)||o,v={certified_by:l.certified_by,certification_details:l.certification_details,css:s,dashboard_title:n,last_modified_time:u,owners:l.owners,roles:l.roles,slug:p,metadata:{...null==l?void 0:l.metadata,color_namespace:g,color_scheme:f,positions:r,refresh_frequency:m}},b=(0,lt.o)(r).length,y=l.common.conf.SUPERSET_DASHBOARD_POSITION_DATA_LIMIT||_.Bu;b>=y?this.props.addDangerToast((0,h.t)("Your dashboard is too large. Please reduce its size before saving it.")):(b>=.9*y&&this.props.addWarningToast("Your dashboard is near the size limit."),this.props.onSave(v,l.id,_.TN))}showPropertiesModal(){this.setState({showingPropertiesModal:!0})}hidePropertiesModal(){this.setState({showingPropertiesModal:!1})}render(){var e,t,i,n;const{dashboardTitle:r,layout:o,expandedSlices:a,customCss:l,colorNamespace:c,dataMask:u,setColorScheme:p,setUnsavedChanges:m,colorScheme:g,onUndo:f,onRedo:v,undoLength:b,redoLength:y,onChange:x,onSave:C,updateCss:S,editMode:w,isPublished:Z,user:R,dashboardInfo:k,hasUnsavedChanges:$,isLoading:T,refreshFrequency:D,shouldPersistRefreshFrequency:F,setRefreshFrequency:E,lastModifiedTime:_,logEvent:P}=this.props,z=k.dash_edit_perm&&!k.is_managed_externally,U=k.dash_share_perm,O=k.dash_save_perm,B=(0,d.cr)(d.TT.EmbeddedSuperset)&&(0,st.R)("can_set_embedded","Dashboard",R.roles),q=null==(e=k.common)||null==(t=e.conf)?void 0:t.SUPERSET_DASHBOARD_PERIODICAL_REFRESH_LIMIT,A=null==(i=k.common)||null==(n=i.conf)?void 0:n.SUPERSET_DASHBOARD_PERIODICAL_REFRESH_WARNING_MESSAGE,K=Zi.get("dashboard.nav.right");return(0,V.BX)("div",{css:ki,"data-test-id":k.id,className:"dashboard-header-container",children:[(0,V.tZ)(pi.u,{editableTitleProps:{title:r,canEdit:z&&w,onSave:this.handleChangeText,placeholder:(0,h.t)("Add the name of the dashboard"),label:(0,h.t)("Dashboard title"),showTooltip:!1},certificatiedBadgeProps:{certifiedBy:k.certified_by,details:k.certification_details},faveStarProps:{itemId:k.id,fetchFaveStar:this.props.fetchFaveStar,saveFaveStar:this.props.saveFaveStar,isStarred:this.props.isStarred,showTooltip:!0},titlePanelAdditionalItems:[!w&&(0,V.tZ)(ai,{dashboardId:k.id,isPublished:Z,savePublished:this.props.savePublished,canEdit:z,canSave:O,visible:!w}),!w&&(0,V.tZ)(mi.ZP,{items:this.getMetadataItems(),tooltipPlacement:"bottom"})],rightPanelAdditionalItems:(0,V.BX)("div",{className:"button-container",children:[O&&(0,V.tZ)("div",{className:"button-container",children:w&&(0,V.BX)("div",{css:Ti,children:[(0,V.BX)("div",{className:"undoRedo",children:[(0,V.tZ)(N.u,{id:"dashboard-undo-tooltip",title:(0,h.t)("Undo the action"),children:(0,V.tZ)(Di,{type:"text",disabled:b<1,onClick:b&&f,children:(0,V.tZ)(I.Z.Undo,{css:[Mi,this.state.emphasizeUndo&&Ii,b<1&&Fi,"",""],iconSize:"xl"})})}),(0,V.tZ)(N.u,{id:"dashboard-redo-tooltip",title:(0,h.t)("Redo the action"),children:(0,V.tZ)(Di,{type:"text",disabled:y<1,onClick:y&&v,children:(0,V.tZ)(I.Z.Redo,{css:[Mi,this.state.emphasizeRedo&&Ii,y<1&&Fi,"",""],iconSize:"xl"})})})]}),(0,V.tZ)(M.Z,{css:_i,buttonSize:"small",onClick:this.constructor.discardChanges,buttonStyle:"default","aria-label":(0,h.t)("Discard"),children:(0,h.t)("Discard")}),(0,V.tZ)(M.Z,{css:Ei,buttonSize:"small",disabled:!$,buttonStyle:"primary",onClick:this.overwriteDashboard,"aria-label":(0,h.t)("Save"),children:(0,h.t)("Save")})]})}),w?(0,V.tZ)(di,{onUndo:this.handleCtrlZ,onRedo:this.handleCtrlY}):(0,V.BX)("div",{css:Ti,children:[K&&(0,V.tZ)(K,{}),z&&(0,V.tZ)(M.Z,{buttonStyle:"secondary",onClick:this.toggleEditMode,className:"action-button",css:$i,"aria-label":(0,h.t)("Edit dashboard"),children:(0,h.t)("Edit dashboard")})]})]}),menuDropdownProps:{getPopupContainer:e=>e.closest(".header-with-actions"),visible:this.state.isDropdownVisible,onVisibleChange:this.setIsDropdownVisible},additionalActionsMenu:(0,V.tZ)(ei,{addSuccessToast:this.props.addSuccessToast,addDangerToast:this.props.addDangerToast,dashboardId:k.id,dashboardTitle:r,dashboardInfo:k,dataMask:u,layout:o,expandedSlices:a,customCss:l,colorNamespace:c,colorScheme:g,onSave:C,onChange:x,forceRefreshAllCharts:this.forceRefresh,startPeriodicRender:this.startPeriodicRender,refreshFrequency:D,shouldPersistRefreshFrequency:F,setRefreshFrequency:E,updateCss:S,editMode:w,hasUnsavedChanges:$,userCanEdit:z,userCanShare:U,userCanSave:O,userCanCurate:B,isLoading:T,showPropertiesModal:this.showPropertiesModal,manageEmbedded:this.showEmbedModal,refreshLimit:q,refreshWarning:A,lastModifiedTime:_,isDropdownVisible:this.state.isDropdownVisible,setIsDropdownVisible:this.setIsDropdownVisible,logEvent:P}),showFaveStar:(null==R?void 0:R.userId)&&(null==k?void 0:k.id),showTitlePanelItems:!0}),this.state.showingPropertiesModal&&(0,V.tZ)(ci.Z,{dashboardId:k.id,dashboardInfo:k,dashboardTitle:r,show:this.state.showingPropertiesModal,onHide:this.hidePropertiesModal,colorScheme:this.props.colorScheme,onSubmit:e=>{const{dashboardInfoChanged:t,dashboardTitleChanged:i}=this.props;p(e.colorScheme),t({slug:e.slug,metadata:JSON.parse(e.jsonMetadata||"{}"),certified_by:e.certifiedBy,certification_details:e.certificationDetails,owners:e.owners,roles:e.roles}),m(!0),i(e.title)},onlyApply:!0}),(0,V.tZ)(wi,{}),B&&(0,V.tZ)(Ci,{show:this.state.showingEmbedModal,onHide:this.hideEmbedModal,dashboardId:k.id}),(0,V.tZ)(s.xB,{styles:s.iv`
            .ant-menu-vertical {
              border-right: none;
            }
          `})]})}}Pi.propTypes=Ri,Pi.defaultProps={colorNamespace:void 0,colorScheme:void 0};const zi=Pi;function Ui(e){return Object.values(e).some((e=>e.chartUpdateStartTime>(e.chartUpdateEndTime||0)))}var Oi=i(41295),Bi=i(9467),Ni=i(12885),qi=i(72570),Vi=i(97381);const Ai=(0,u.$j)((function({dashboardLayout:e,dashboardState:t,reports:i,dashboardInfo:n,charts:r,dataMask:o,user:a}){return{dashboardInfo:n,undoLength:e.past.length,redoLength:e.future.length,layout:e.present,dashboardTitle:((e.present[_.M2]||{}).meta||{}).text,expandedSlices:t.expandedSlices,refreshFrequency:t.refreshFrequency,shouldPersistRefreshFrequency:!!t.shouldPersistRefreshFrequency,customCss:t.css,colorNamespace:t.colorNamespace,colorScheme:t.colorScheme,charts:r,dataMask:o,user:a,isStarred:!!t.isStarred,isPublished:!!t.isPublished,isLoading:Ui(r),hasUnsavedChanges:!!t.hasUnsavedChanges,maxUndoHistoryExceeded:!!t.maxUndoHistoryExceeded,lastModifiedTime:Math.max(t.lastModifiedTime,n.last_modified_time),editMode:!!t.editMode,slug:n.slug,metadata:n.metadata,reports:i}}),(function(e){return(0,f.DE)({addSuccessToast:qi.ws,addDangerToast:qi.Gb,addWarningToast:qi.Dz,onUndo:Ni.Ou,onRedo:Ni.az,setEditMode:Bi.Mb,showBuilderPane:Bi.O8,setColorScheme:Bi.uW,setUnsavedChanges:Bi.if,fetchFaveStar:Bi.Lb,saveFaveStar:Bi.TN,savePublished:Bi.dr,fetchCharts:Bi.Mn,updateDashboardTitle:Ni.A7,updateCss:Bi.Sn,onChange:Bi.z2,onSave:Bi.M8,setMaxUndoHistoryExceeded:Bi.uN,maxUndoHistoryToast:Bi.Qt,logEvent:Vi.logEvent,setRefreshFrequency:Bi.fE,onRefresh:Bi.Yy,dashboardInfoChanged:Oi.a8,dashboardTitleChanged:Ni.Ww,updateDataMask:it.eG},e)}))(zi),Ki=a.iK.div`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.colors.grayscale.base};
  &:hover {
    color: ${({theme:e})=>e.colors.primary.base};
  }
`,ji=a.iK.span`
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
`,Li=({icon:e,label:t,onClick:i})=>(0,V.BX)(Ki,{tabIndex:0,role:"button",onClick:e=>{e.preventDefault(),i(e)},children:[e,t&&(0,V.tZ)(ji,{children:t})]});var Xi=i(44818),Hi=i(99075),Wi=i(43617);function Yi({dashboardId:e,anchorLinkId:t,placement:i="right",emailContent:n="",emailSubject:r=""}){const[a,s]=(0,o.useState)(""),{addDangerToast:l}=(0,St.e1)(),{dataMask:d,activeTabs:c}=(0,u.v9)((e=>({dataMask:e.dataMask,activeTabs:e.dashboardState.activeTabs}))),p=`mailto:?Subject=${r}%20&Body=${n}${a||""}`;return(0,V.tZ)(Hi.J,{trigger:"click",placement:i,content:(0,V.BX)("div",{id:"shorturl-popover",onClick:e=>{e.stopPropagation()},children:[(0,V.tZ)(Wi.Z,{text:a,copyNode:(0,V.tZ)("i",{className:"fa fa-clipboard",title:(0,h.t)("Copy to clipboard")})}),"  ",(0,V.tZ)("a",{href:p,children:(0,V.tZ)("i",{className:"fa fa-envelope"})})]}),children:(0,V.BX)("span",{className:"short-link-trigger btn btn-default btn-sm",tabIndex:-1,role:"button",onClick:i=>{i.stopPropagation(),(async()=>{try{const i=await(0,gt.Nm)({dashboardId:e,dataMask:d,activeTabs:c,anchor:t});s(i)}catch(e){e&&l((await(0,Xi.O$)(e)).error||(0,h.t)("Something went wrong."))}})()},children:[(0,V.tZ)("i",{className:"short-link-trigger fa fa-link"})," "]})})}var Gi=i(56967);function Ji({id:e,dashboardId:t,placement:i="right",scrollIntoView:n=!1,showShortLinkButton:r=!0}){const a=e=>{const t=document.getElementById(e);t&&t.scrollIntoView({block:"center",behavior:"smooth"})},s=(0,Gi.Z)();return(0,o.useEffect)((()=>{s&&e===s&&a(e)}),[s,e]),(0,o.useEffect)((()=>{n&&a(e)}),[e,n]),(0,V.tZ)("span",{className:"anchor-link-container",id:e,children:r&&t&&(0,V.tZ)(Yi,{anchorLinkId:e,dashboardId:t,emailSubject:(0,h.t)("Superset chart"),emailContent:(0,h.t)("Check out this chart in dashboard:"),placement:i})})}var Qi=i(81395),en=i(52256),tn=i(91914),nn=i(18446),rn=i.n(nn),on=i(16550),an=i(40730),sn=i(99543),ln=i(40219),dn=i(29147),cn=i(38270),hn=i(55786),un=i(11064),pn=i(16355),mn=i(88694),gn=i(56727),fn=i(54076);const vn=e=>{const t="MacOS"===(0,fn.fV)(),i=e?(0,h.t)("Click to edit %s.",e):(0,h.t)("Click to edit chart."),n=(0,h.t)("Use %s to open in a new tab.",t?(0,h.t)("⌘ + click"):(0,h.t)("ctrl + click"));return(0,V.BX)(V.HY,{children:[(0,V.tZ)("div",{children:i}),(0,V.tZ)("div",{children:n})]})};var bn=i(15423),yn=i(21496),xn=i(41814),Cn=i(37731),Sn=i(32873);const wn=(0,i(22222).P1)((e=>e.charts),(e=>Object.values(e).map((e=>e.id)))),Zn=()=>((e,t)=>{const i=(0,o.useRef)(),n=i.current,r=((e,t)=>e===t||rn()(e,t))(n,e);return(0,o.useEffect)((()=>{r||(i.current=e)})),(0,Cn.Z)(n)&&r?n:e})((0,u.v9)(wn));var Rn=i(9531);const kn=({type:e})=>e===E.gn||e===E.dW||e===E.U0,$n=(e,t,i,n,r,o,a)=>{var s;let l=t;if(e&&t&&kn(e)&&e.type!==E.U0&&null!=r&&null!=r.includes&&r.includes(e.id)){var d;const i=a((e=>{var t,i,n,r,o,a,s,l,d,c;return null!=(t=null!=(i=null!=(n=null!=(r=null!=(o=null==e||null==(a=e.meta)?void 0:a.sliceNameOverride)?o:null==e||null==(s=e.meta)?void 0:s.sliceName)?r:null==e||null==(l=e.meta)?void 0:l.text)?n:null==e||null==(d=e.meta)?void 0:d.defaultText)?i:null==e||null==(c=e.id)||null==c.toString?void 0:c.toString())?t:""})(e),null==o||null==o.includes?void 0:o.includes(null==(d=e.meta)?void 0:d.chartId),(0,h.t)("This chart might be incompatible with the filter (datasets don't match)")),n={key:e.id,title:i,children:[]};t.children.push(n),l=n}null==e||null==(s=e.children)||null==s.forEach||s.forEach((e=>{const t=null==i?void 0:i[e];t?$n(t,l,i,n,r,o,a):mt.Z.warn(`Unable to find item with id: ${e} in the dashboard layout. This may indicate you have invalid references in your dashboard and the references to id: ${e} should be removed.`)}))},Tn=(e,t,i,n)=>{i.forEach((i=>{var r,o;Tn(e,t,((e,t)=>{var i;return[...(null==(i=e[t])?void 0:i.children)||[],...Object.values(e).filter((i=>i.parents&&i.parents[i.parents.length-1]===t&&!kn(e[i.parents[i.parents.length-1]]))).map((({id:e})=>e))]})(t,i),n),(null==(r=t[i])?void 0:r.type)!==E.dW||n.includes(null==(o=t[i])?void 0:o.meta.chartId)||e.push(i)}))},Dn=(e,t=[])=>({rootPath:[_._4],excluded:e?[e,...t]:t}),Mn=(e,t)=>!e||e.rootPath[0]===_._4&&!e.excluded.filter((e=>e!==t)).length,In=(e,t,i)=>{let n=(0,V.tZ)("span",{children:e});return t&&(n=(0,V.BX)(V.HY,{children:[n," ",(0,V.tZ)(N.u,{title:i,children:(0,V.tZ)(I.Z.Info,{iconSize:"m"})})]})),n},Fn=({formScope:e,initialScope:t,forceUpdate:i,updateFormValues:n,chartId:r,initiallyExcludedCharts:a=[],title:s})=>{const[l,d]=(0,o.useState)([_._4]),{treeData:c,layout:p}=function(e,t=[],i=(e=>e),n=(0,h.t)("All panels")){const r=(0,u.v9)((({dashboardLayout:{present:e}})=>e)),a=(0,u.v9)((({charts:e})=>e)),s={children:[],key:_._4,type:E.U0,title:n},l=(0,o.useMemo)((()=>Object.values(r).reduce(((t,i)=>{const{id:n,parents:r=[],type:o,meta:a}=i;return o===E.dW&&e!==(null==a?void 0:a.chartId)?[...new Set([...t,...r,n])]:t}),[])),[r,e]);return(0,o.useMemo)((()=>{$n(r[_._4],s,r,a,l,t,i)}),[r,s,a,t,i]),{treeData:[s],layout:r}}(r,a,In,s),[m,g]=(0,o.useState)(!0),f=(0,o.useMemo)((()=>((e,t)=>{const i=[];return Tn(i,t,[...e.rootPath],[...e.excluded]),[...new Set(i)]})({...e||t},p)),[e,t,p]);return(0,V.tZ)(T.mp,{checkable:!0,selectable:!1,onExpand:e=>{d(e),g(!1)},expandedKeys:l,autoExpandParent:m,onCheck:e=>{i();const t=((e,t)=>{if(!e.length)return{rootPath:[],excluded:[]};const i=e.filter((e=>{var i;return(null==(i=t[e])?void 0:i.type)===E.dW})).map((e=>{var i;return[_._4,...(null==(i=t[e])?void 0:i.parents)||[]].filter((e=>kn(t[e])))}));i.sort(((e,t)=>e.length-t.length));const n=i.map((e=>e[i[0].length-1])),r=[];return Object.entries(t).forEach((([t,i])=>{var o;const a=i.parents||[];i.type===E.dW&&null!=(o=[_._4,...a])&&o.find((i=>((t,i)=>n.includes(t)&&!e.includes(i))(i,t)))&&r.push(i.meta.chartId)})),{rootPath:[...new Set(n)],excluded:r}})(e,p);void 0!==r&&(t.excluded=[...new Set([...t.excluded,r])]),n({scope:t})},checkedKeys:f,treeData:c})},En=(0,o.memo)(Fn),_n=-1,Pn=a.iK.div`
  ${({theme:e})=>s.iv`
    font-size: ${e.typography.sizes.s}px;
    color: ${e.colors.grayscale.base};
    margin-bottom: ${7*e.gridUnit}px;
  `}
`,zn=({value:e,onSelectChange:t,chartConfigs:i})=>{const n=(0,a.Fg)(),r=(0,u.v9)((e=>e.dashboardLayout.present)),l=(0,o.useMemo)((()=>{const t=Object.values(r).filter((e=>e.type===E.dW));return Object.values(i).filter((t=>(0,ft._6)(t.crossFilters.scope)||t.id===e&&e!==_n)).map((e=>{const i=t.find((t=>t.meta.chartId===Number(e.id)));return{value:Number(e.id),label:(null==i?void 0:i.meta.sliceNameOverride)||(null==i?void 0:i.meta.sliceName)||""}}))}),[i,r,e]);return(0,V.BX)("div",{css:s.iv`
        margin-bottom: ${6*n.gridUnit}px;
      `,children:[(0,V.BX)("div",{css:s.iv`
          display: flex;
          align-items: center;
          margin-bottom: ${n.gridUnit}px;
        `,children:[(0,V.tZ)(Pn,{css:s.iv`
            color: ${n.colors.grayscale.dark1};
            margin-right: ${n.gridUnit}px;
            margin-bottom: 0;
          `,children:`${(0,h.t)("Chart")} *`}),(0,V.tZ)(N.u,{title:(0,h.t)("Tooltip"),placement:"top",children:(0,V.tZ)(I.Z.InfoCircleOutlined,{iconSize:"xs",iconColor:n.colors.grayscale.base,css:s.iv`
              & > span {
                line-height: 0;
              }
            `})})]}),(0,V.tZ)(T.Ph,{ariaLabel:(0,h.t)("Select chart"),options:l,value:e&&e===_n?void 0:e,onChange:e=>{t(Number(e))}})]})},Un=({onScopeUpdate:e,currentScope:t,chartId:i,onSelectChange:n,chartConfigs:r})=>{const o=(0,a.Fg)(),l=(0,u.v9)((({dashboardInfo:e})=>e.crossFiltersEnabled));return(0,V.BX)("div",{css:s.iv`
        flex: 1;
      `,children:[!l&&(0,V.tZ)(Et.Z,{message:(0,V.tZ)("span",{css:s.iv`
                font-weight: ${o.typography.weights.bold};
              `,children:(0,h.t)("Cross-filtering is not enabled in this dashboard")}),type:"info",closable:!1,css:s.iv`
            margin-bottom: ${6*o.gridUnit}px;
          `}),(0,Cn.Z)(i)&&(0,V.tZ)(zn,{value:i,onSelectChange:n,chartConfigs:r}),(0,V.tZ)(Pn,{children:(0,Cn.Z)(i)?(0,h.t)('Select the charts to which you want to apply cross-filters when interacting with this chart. You can select "All charts" to apply filters to all charts that use the same dataset or contain the same column name in the dashboard.'):(0,h.t)('Select the charts to which you want to apply cross-filters in this dashboard. Deselecting a chart will exclude it from being filtered when applying cross-filters from any chart on the dashboard. You can select "All charts" to apply cross-filters to all charts that use the same dataset or contain the same column name in the dashboard.')}),(0,V.tZ)(En,{updateFormValues:e,initialScope:t,forceUpdate:fn.EI,chartId:i,title:(0,h.t)("All charts")})]})};var On=i(27034),Bn=i(22068);const Nn="FILTER",qn=a.iK.div`
  ${({isDragging:e,theme:t})=>`\n    opacity: ${e?.3:1};\n    cursor: ${e?"grabbing":"pointer"};\n    width: 100%;\n    display: flex;\n    padding:  ${t.gridUnit}px;\n  `}
`,Vn=(0,a.iK)(I.Z.Drag,{shouldForwardProp:e=>"isDragging"!==e})`
  ${({isDragging:e,theme:t})=>`\n    font-size: ${t.typography.sizes.m}px;\n    margin-top: 15px;\n    cursor: ${e?"grabbing":"grab"};\n    padding-left: ${t.gridUnit}px;\n  `}
`;var An={name:"82a6rk",styles:"flex:1"};const Kn=({index:e,onRearrange:t,filterIds:i,children:n})=>{const r=(0,o.useRef)(null),[{isDragging:a},s]=(0,On.c)({item:{filterIds:i,type:Nn,index:e},collect:e=>({isDragging:e.isDragging()})}),[,l]=(0,Bn.L)({accept:Nn,hover:(i,n)=>{var o;if(!r.current)return;const a=i.index,s=e;if(a===s)return;const l=null==(o=r.current)?void 0:o.getBoundingClientRect(),d=(l.bottom-l.top)/2,c=n.getClientOffset().y-l.top;a<s&&c<d||a>s&&c>d||(t(a,s),i.index=s)}});return s(l(r)),(0,V.BX)(qn,{ref:r,isDragging:a,children:[(0,V.tZ)(Vn,{isDragging:a,alt:"Move icon",className:"dragIcon",viewBox:"4 4 16 16"}),(0,V.tZ)("div",{css:An,children:n})]})},jn=a.iK.div`
  ${({theme:e})=>`\n      display: flex;\n      align-items: center;\n      padding: ${2*e.gridUnit}px;\n      width: 100%;\n      border-radius: ${e.borderRadius}px;\n      cursor: pointer;\n      &.active {\n        color: ${e.colors.grayscale.dark1};\n        border-radius: ${e.borderRadius}px;\n        background-color: ${e.colors.secondary.light4};\n        span, .anticon {\n          color: ${e.colors.grayscale.dark1};\n        }\n      }\n      &:hover {\n        color: ${e.colors.primary.light1};\n        span, .anticon {\n          color: ${e.colors.primary.light1};\n        }\n      }\n      &.errored div, &.errored .warning {\n        color: ${e.colors.error.base};\n      }\n  `}
`,Ln=(0,a.iK)(I.Z.Trash)`
  color: ${({theme:e})=>e.colors.grayscale.light3};
`,Xn=(0,a.iK)(I.Z.Warning)`
  color: ${({theme:e})=>e.colors.error.base};
  &.anticon {
    margin-left: auto;
  }
`,Hn=a.iK.div`
  height: 100%;
  overflow-y: auto;
`;var Wn={name:"7whenc",styles:"display:flex;width:100%"},Yn={name:"1abjxqb",styles:"align-items:center;display:flex;word-break:break-all"},Gn={name:"1je5tt7",styles:"align-self:flex-end;margin-left:auto"},Jn={name:"an0ls6",styles:"align-self:flex-start;margin-left:auto"};const Qn=(0,o.forwardRef)((({getFilterTitle:e,onChange:t,onRemove:i,restoreFilter:n,onRearrange:r,currentFilterId:o,removedFilters:a,filters:s,erroredFilters:l=[]},d)=>{const c=r=>{const s=!!a[r],d=l.includes(r),c=o===r,u=[];return d&&u.push("errored"),c&&u.push("active"),(0,V.BX)(jn,{role:"tab",onClick:()=>t(r),className:u.join(" "),children:[(0,V.BX)("div",{css:Wn,children:[(0,V.tZ)("div",{css:Yn,children:s?(0,h.t)("(Removed)"):e(r)}),!a[r]&&d&&(0,V.tZ)(Xn,{className:"warning"}),s&&(0,V.tZ)("span",{css:Gn,role:"button",tabIndex:0,onClick:e=>{e.preventDefault(),n(r)},children:(0,h.t)("Undo?")})]}),(0,V.tZ)("div",{css:Jn,children:s?null:(0,V.tZ)(Ln,{onClick:e=>{e.stopPropagation(),i(r)},alt:"RemoveFilter"})})]},`filter-title-tab-${r}`)};return(0,V.tZ)(Hn,{ref:d,children:(()=>{const e=[];return s.forEach(((t,i)=>{e.push((0,V.tZ)(Kn,{onRearrange:r,index:i,filterIds:[t],children:c(t)},i))})),e})()})})),er=a.iK.div`
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
`,tr=({isActive:e,onClick:t,id:i,label:n,onRemove:r})=>{const o=(0,a.Fg)();return(0,V.BX)(jn,{className:e?"active":"",onClick:()=>t(i),children:[n,(0,V.tZ)(I.Z.Trash,{iconColor:o.colors.grayscale.light3,onClick:e=>{e.stopPropagation(),r(i)},css:s.iv`
          margin-left: auto;
        `})]})},ir=({activeChartId:e,chartConfigs:t,setCurrentChartId:i,removeCustomScope:n,addNewCustomScope:r})=>{const l=(0,a.Fg)(),d=(0,u.v9)((e=>e.dashboardLayout.present)),c=(0,o.useMemo)((()=>{const e=Object.values(d).filter((e=>e.type===E.dW));return Object.values(t).filter((e=>!(0,ft._6)(e.crossFilters.scope)&&e.id!==_n)).map((t=>{const i=e.find((e=>e.meta.chartId===t.id));return{id:t.id,label:(null==i?void 0:i.meta.sliceNameOverride)||(null==i?void 0:i.meta.sliceName)||""}}))}),[t,d]),p=t[-1];return(0,V.BX)(V.HY,{children:[(0,V.tZ)(er,{children:(0,V.BX)(M.Z,{buttonStyle:"link",buttonSize:"xsmall",onClick:r,children:[(0,V.tZ)(I.Z.PlusSmall,{})," ",(0,h.t)("Add custom scoping")]})}),(0,V.tZ)(jn,{role:"button",onClick:()=>i(void 0),className:void 0===e?"active":"",children:(0,h.t)("All charts/global scoping")}),(0,V.tZ)("div",{css:s.iv`
          width: 100%;
          height: 1px;
          background-color: ${l.colors.grayscale.light3};
          margin: ${3*l.gridUnit}px 0;
        `}),c.map((t=>(0,V.tZ)(tr,{id:t.id,onClick:i,onRemove:n,isActive:e===t.id,label:t.label},t.id))),p&&(0,V.tZ)(tr,{id:p.id,onClick:i,onRemove:n,isActive:e===p.id,label:`[${(0,h.t)("new custom scoping")}]`})]})},nr=a.iK.div`
  ${({theme:e})=>s.iv`
    display: flex;
    height: 100%;
    & > div {
      padding: ${4*e.gridUnit}px;
    }
  `}
`,rr=({chartId:e,currentScope:t,onScopeUpdate:i,onSelectChange:n,chartConfigs:r,setCurrentChartId:o,removeCustomScope:l,addNewCustomScope:d})=>{const c=(0,a.Fg)();return(0,V.BX)(nr,{children:[(0,V.tZ)("div",{css:s.iv`
          width: 35%;
          border-right: 1px solid ${c.colors.grayscale.light2};
        `,children:(0,V.tZ)(ir,{setCurrentChartId:o,activeChartId:e,chartConfigs:r,removeCustomScope:l,addNewCustomScope:d})}),(0,V.tZ)(Un,{chartId:e,currentScope:t,onScopeUpdate:i,onSelectChange:n,chartConfigs:r})]})},or=(e,t)=>({rootPath:t.rootPath,excluded:t.excluded.filter((t=>t!==e))}),ar=({initialChartId:e,isVisible:t,closeModal:i})=>{const n=(0,u.I0)(),r=(0,u.v9)((e=>e.dashboardLayout.present)),a=Zn(),[s,l]=(0,o.useState)(e),d=(0,u.v9)((e=>{var t;return(null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration)||{}})),c=(0,o.useMemo)((()=>({scope:Rn.eV,chartsInScope:a})),[a]),p=(0,u.v9)((e=>{var t;return(null==(t=e.dashboardInfo.metadata)?void 0:t.global_chart_configuration)||c})),[m,g]=(0,o.useState)((0,Cn.Z)(e)&&(0,ft._6)(null==(f=d[e])?void 0:f.crossFilters.scope)?{...d,[e]:{id:e,crossFilters:{scope:or(e,p.scope),chartsInScope:null==(v=d[e])?void 0:v.crossFilters.chartsInScope}}}:d);var f,v;const[b,y]=(0,o.useState)(p),x=(0,o.useCallback)((()=>{const e={...m};e[-1]&&delete e[-1],n((0,Oi.Mi)({chartConfiguration:e,globalChartConfiguration:b})),i()}),[m,i,n,b]),C=(0,o.useCallback)((({scope:e})=>{if((0,Cn.Z)(s))g((t=>({...t,[s]:{id:s,crossFilters:{scope:e,chartsInScope:(0,Sn.Q)(e,a,r)}}})));else{const t=(0,Sn.Q)(e,a,r);y({scope:e,chartsInScope:t}),g((e=>((e,t)=>Object.entries(e).reduce(((e,[i,n])=>((0,ft._6)(n.crossFilters.scope)?e[i]={id:Number(n.id),crossFilters:{scope:ft.$,chartsInScope:t.filter((e=>e!==Number(n.id)))}}:e[i]=n,e)),{}))(e,t)))}}),[s,a,r]),S=(0,o.useCallback)((e=>{g((t=>{const i={...t};return e===_n?delete i[-1]:i[e]={id:e,crossFilters:{scope:ft.$,chartsInScope:b.chartsInScope.filter((t=>t!==e))}},i})),s===e&&l(void 0)}),[s,b.chartsInScope]),w=(0,o.useCallback)((()=>{l(_n),m[-1]||g((e=>({...e,[_n]:{id:_n,crossFilters:{scope:b.scope,chartsInScope:b.chartsInScope}}})))}),[m,b.chartsInScope,b.scope]),Z=(0,o.useCallback)((e=>{if((0,Cn.Z)(s)){var t;const i=(0,ft._6)(null==(t=m[s])?void 0:t.crossFilters.scope)?b.scope:m[s].crossFilters.scope,n={rootPath:i.rootPath,excluded:[...i.excluded.filter((e=>e!==s)),e]},o={id:e,crossFilters:{scope:n,chartsInScope:(0,Sn.Q)(n,a,r)}};g((t=>{const i={...t,[e]:o};return s===_n?delete i[-1]:i[s]={id:s,crossFilters:{scope:ft.$,chartsInScope:b.chartsInScope.filter((e=>e!==s))}},i})),l(e)}}),[m,a,s,b.chartsInScope,b.scope,r]),R=(0,o.useMemo)((()=>{var e,t,i,n;const r=b.scope;return(0,Cn.Z)(s)?(0,ft._6)(null==(e=m[s])||null==(t=e.crossFilters)?void 0:t.scope)?or(s,r):null==(i=m[s])||null==(n=i.crossFilters)?void 0:n.scope:r}),[m,s,b.scope]);return(0,V.tZ)(fi.default,{onHide:i,show:t,title:(0,h.t)("Cross-filtering scoping"),onHandledPrimaryAction:x,primaryButtonName:(0,h.t)("Save"),responsive:!0,destroyOnClose:!0,bodyStyle:{padding:0,height:700},children:(0,V.tZ)(rr,{chartConfigs:m,currentScope:R,onScopeUpdate:C,chartId:s,setCurrentChartId:l,onSelectChange:Z,removeCustomScope:S,addNewCustomScope:w})})},sr=e=>{const[t,i]=(0,o.useState)(!1),n=(0,o.useCallback)((()=>i(!0)),[]),r=(0,o.useCallback)((()=>i(!1)),[]);return[n,t?(0,V.tZ)(ar,{initialChartId:e,closeModal:r,isVisible:t}):null]},lr="Tab",dr=a.iK.div`
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
`,cr=a.iK.div`
  height: auto;
  margin: ${({theme:e})=>e.gridUnit}px 0;
  color: ${({theme:e})=>e.colors.grayscale.base};
  line-height: 21px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`,hr=()=>(0,V.BX)(dr,{children:[(0,V.tZ)("span",{className:"dot"}),(0,V.tZ)("span",{className:"dot"}),(0,V.tZ)("span",{className:"dot"})]}),ur=s.iv`
  &&.anticon > .anticon:first-child {
    margin-right: 0;
    vertical-align: 0;
  }
`,pr=e=>{const t=null==e?void 0:e.props;return t?Object.values(t).filter((e=>(0,ht.av)(e))):[]},mr=(e,t)=>{const i=t||[];return(0,hn.Z)(e).forEach((e=>{var t;const n=(0,ht.xI)(e),r=pr(e);if(n){const{key:t}=e;t&&i.push({key:t})}if(r.length&&i.push(...r.map((e=>({key:e.current.props.eventKey,ref:e})))),null!=e&&null!=(t=e.props)&&t.children){const t=mr(e.props.children,i);i.push(...t)}})),i},gr=(e,t,i,n="up")=>{var r;const o="up"===n?-1:1,a="up"===n?-2:2,s="up"===n?0:e.length,l="up"===n?Math.max:Math.min;let d,c=e[l(i+o,s)];if(!c)return{selectedKey:e[0],openKey:void 0};if((null==(r=t[c])?void 0:r.type)===ht.fH.SubMenu&&(c=e[l(i+a,s)]),(0,ht.PI)(t[c].type)){const e=t[c].parent;e&&(d=e)}else d=void 0;return{selectedKey:c,openKey:d}},fr=({canExplore:e,exploreUrl:t,triggerNode:i,modalTitle:n,modalBody:r,showModal:l=!1,setShowModal:d})=>{const c=(0,on.k6)(),u=(0,a.Fg)(),p=(0,o.useCallback)((()=>d(!0)),[]),m=(0,o.useCallback)((()=>d(!1)),[]);return(0,V.BX)(V.HY,{children:[(0,V.tZ)("span",{onClick:p,role:"button",tabIndex:0,children:i}),(0,V.tZ)(fi.default,{css:s.iv`
            .ant-modal-body {
              display: flex;
              flex-direction: column;
            }
          `,show:l,onHide:m,closable:!0,title:n,footer:(0,V.BX)(V.HY,{children:[(0,V.tZ)(M.Z,{buttonStyle:"secondary",buttonSize:"small",onClick:()=>c.push(t),disabled:!e,tooltip:e?void 0:(0,h.t)("You do not have sufficient permissions to edit the chart"),children:(0,h.t)("Edit chart")}),(0,V.tZ)(M.Z,{buttonStyle:"primary",buttonSize:"small",onClick:m,css:s.iv`
                  margin-left: ${2*u.gridUnit}px;
                `,children:(0,h.t)("Close")})]}),responsive:!0,resizable:!0,resizableConfig:{minHeight:128*u.gridUnit,minWidth:128*u.gridUnit,defaultSize:{width:"auto",height:"75vh"}},draggable:!0,destroyOnClose:!0,children:r})]})},vr=(0,on.EN)((e=>{var t,i;const[n,r]=(0,o.useState)(!1),[a,l]=(0,o.useState)(!1),[c,p]=(0,o.useState)(!1),[m,g]=(0,o.useState)([]),[f,v]=(0,o.useState)(void 0),[b,y]=sr(e.slice.slice_id),x=(0,on.k6)(),C=(0,o.useRef)(null),S=(0,o.useRef)(null),w=(0,o.useRef)(null),Z=(0,o.useRef)(null),R=(0,o.useRef)(null),k=({close:e}={})=>{r(!(e||n)),g([])},$=(0,u.v9)((({dashboardInfo:e})=>e.dash_edit_perm))&&(0,d.cr)(d.TT.DashboardCrossFilters)&&(null==(t=(0,un.Z)().get(e.slice.viz_type))||null==(i=t.behaviors)?void 0:i.includes(pn.cg.InteractiveChart)),T=e.supersetCanExplore,D=(0,u.v9)((e=>{var t;return(0,st.R)("can_samples","Datasource",null==(t=e.user)?void 0:t.roles)})),M=(0,u.v9)((e=>{var t;return(0,st.R)("can_drill","Dashboard",null==(t=e.user)?void 0:t.roles)})),F=(T||M)&&D,E=(0,u.v9)((e=>{var t;return(0,st.R)("can_view_query","Dashboard",null==(t=e.user)?void 0:t.roles)})),_=(0,u.v9)((e=>{var t;return(0,st.R)("can_view_chart_as_table","Dashboard",null==(t=e.user)?void 0:t.roles)})),{componentId:P,dashboardId:z,slice:U,isFullSize:O,cachedDttm:B=[],updatedDttm:q=null,addSuccessToast:A=(()=>{}),addDangerToast:K=(()=>{}),supersetCanShare:j=!1,isCached:L=[]}=e,X="table"===U.viz_type,H="pivot_table_v2"===U.viz_type,W=(B||[]).map((e=>rt().utc(e).fromNow())),Y=q?rt().utc(q).fromNow():"",G=[...new Set(L.map((e=>e?(0,h.t)("Cached %s",W):Y?(0,h.t)("Fetched %s",Y):""))||"")],J=G.map(((e,t)=>(0,V.tZ)("div",{children:G.length>1?(0,h.t)("Query %s: %s",t+1,e):e},`tooltip-${t}`))),Q=O?(0,h.t)("Exit fullscreen"):(0,h.t)("Enter fullscreen"),ee={zIndex:O?101:99,animationDuration:"0s"},te={};f&&(te.openKeys=f);const ie=(0,V.BX)(ht.Menu,{onClick:({key:t,domEvent:i})=>{switch(k({close:!0}),t){case ft.bu.ForceRefresh:e.updatedDttm&&e.forceRefresh(e.slice.slice_id,e.dashboardId),e.addSuccessToast((0,h.t)("Data refreshed"));break;case ft.bu.ToggleChartDescription:null==e.toggleExpandSlice||e.toggleExpandSlice(e.slice.slice_id);break;case ft.bu.ExploreChart:null==e.logExploreChart||e.logExploreChart(e.slice.slice_id),i.metaKey||i.ctrlKey?(i.preventDefault(),window.open(e.exploreUrl,"_blank")):x.push(e.exploreUrl);break;case ft.bu.ExportCsv:null==e.exportCSV||e.exportCSV(e.slice.slice_id);break;case ft.bu.ExportPivotCsv:null==e.exportPivotCSV||e.exportPivotCSV(e.slice.slice_id);break;case ft.bu.Fullscreen:e.handleToggleFullSize();break;case ft.bu.ExportFullCsv:null==e.exportFullCSV||e.exportFullCSV(e.slice.slice_id);break;case ft.bu.ExportFullXlsx:null==e.exportFullXLSX||e.exportFullXLSX(e.slice.slice_id);break;case ft.bu.ExportXlsx:null==e.exportXLSX||e.exportXLSX(e.slice.slice_id);break;case ft.bu.DownloadAsImage:{const t=document.querySelector(".ant-dropdown:not(.ant-dropdown-hidden)");t&&(t.style.visibility="hidden"),(0,gn.Z)((n=e.slice.slice_id,`.dashboard-chart-id-${n}`),e.slice.slice_name,!0)(i).then((()=>{t&&(t.style.visibility="visible")})),null==e.logEvent||e.logEvent(at.xE,{chartId:e.slice.slice_id});break}case ft.bu.CrossFilterScoping:b();break;case ft.bu.ViewResults:a||l(!0);break;case ft.bu.DrillToDetail:p(!c);break;case ft.bu.ViewQuery:C.current&&!C.current.showModal&&C.current.open(i)}var n},selectable:!1,selectedKeys:m,id:`slice_${U.slice_id}-menu`,ref:S,forceSubMenuRender:!0,...te,children:[(0,V.BX)(ht.Menu.Item,{disabled:"loading"===e.chartStatus,style:{height:"auto",lineHeight:"initial"},children:[(0,h.t)("Force refresh"),(0,V.tZ)(cr,{children:J})]},ft.bu.ForceRefresh),(0,V.tZ)(ht.Menu.Item,{children:Q},ft.bu.Fullscreen),(0,V.tZ)(ht.Menu.Divider,{}),U.description&&(0,V.tZ)(ht.Menu.Item,{children:e.isDescriptionExpanded?(0,h.t)("Hide chart description"):(0,h.t)("Show chart description")},ft.bu.ToggleChartDescription),T&&(0,V.tZ)(ht.Menu.Item,{children:(0,V.tZ)(N.u,{title:vn(e.slice.slice_name),children:(0,h.t)("Edit chart")})},ft.bu.ExploreChart),$&&(0,V.tZ)(ht.Menu.Item,{children:(0,h.t)("Cross-filtering scoping")},ft.bu.CrossFilterScoping),(T||$)&&(0,V.tZ)(ht.Menu.Divider,{}),(T||E)&&(0,V.tZ)(ht.Menu.Item,{children:(0,V.tZ)($t.Z,{triggerNode:(0,V.tZ)("span",{children:(0,h.t)("View query")}),modalTitle:(0,h.t)("View query"),modalBody:(0,V.tZ)(bn.Z,{latestQueryFormData:e.formData}),draggable:!0,resizable:!0,responsive:!0,ref:C})},ft.bu.ViewQuery),(T||_)&&(0,V.tZ)(ht.Menu.Item,{children:(0,V.tZ)(fr,{canExplore:e.supersetCanExplore,exploreUrl:e.exploreUrl,triggerNode:(0,V.tZ)("span",{children:(0,h.t)("View as table")}),setShowModal:l,showModal:a,modalTitle:(0,h.t)("Chart Data: %s",U.slice_name),modalBody:(0,V.tZ)(yn.Tg,{queryFormData:e.formData,queryForce:!1,dataSize:20,isRequest:!0,isVisible:!0,canDownload:!!e.supersetCanCSV})})},ft.bu.ViewResults),(0,d.cr)(d.TT.DrillToDetail)&&F&&(0,V.tZ)(xn.p,{chartId:U.slice_id,formData:e.formData,showModal:c,setShowModal:p,drillToDetailMenuRef:R},ft.bu.DrillToDetail),(U.description||T)&&(0,V.tZ)(ht.Menu.Divider,{}),j&&(0,V.tZ)(ht.Menu.SubMenu,{title:(0,h.t)("Share"),onTitleMouseEnter:()=>v(void 0),children:(0,V.tZ)(vt,{dashboardId:z,dashboardComponentId:P,copyMenuItemTitle:(0,h.t)("Copy permalink to clipboard"),emailMenuItemTitle:(0,h.t)("Share chart by email"),emailSubject:(0,h.t)("Superset chart"),emailBody:(0,h.t)("Check out this chart: "),addSuccessToast:A,addDangerToast:K,copyMenuItemRef:w,shareByEmailMenuItemRef:Z,selectedKeys:m.filter((e=>e===ft.bu.CopyLink||e===ft.bu.ShareByEmail))})},ft.bu.Share),e.supersetCanCSV&&(0,V.BX)(ht.Menu.SubMenu,{title:(0,h.t)("Download"),onTitleMouseEnter:()=>v(void 0),children:[(0,V.tZ)(ht.Menu.Item,{icon:(0,V.tZ)(I.Z.FileOutlined,{css:ur}),children:(0,h.t)("Export to .CSV")},ft.bu.ExportCsv),H&&(0,V.tZ)(ht.Menu.Item,{icon:(0,V.tZ)(I.Z.FileOutlined,{css:ur}),children:(0,h.t)("Export to Pivoted .CSV")},ft.bu.ExportPivotCsv),(0,V.tZ)(ht.Menu.Item,{icon:(0,V.tZ)(I.Z.FileOutlined,{css:ur}),children:(0,h.t)("Export to Excel")},ft.bu.ExportXlsx),(0,d.cr)(d.TT.AllowFullCsvExport)&&e.supersetCanCSV&&X&&(0,V.BX)(V.HY,{children:[(0,V.tZ)(ht.Menu.Item,{icon:(0,V.tZ)(I.Z.FileOutlined,{css:ur}),children:(0,h.t)("Export to full .CSV")},ft.bu.ExportFullCsv),(0,V.tZ)(ht.Menu.Item,{icon:(0,V.tZ)(I.Z.FileOutlined,{css:ur}),children:(0,h.t)("Export to full Excel")},ft.bu.ExportFullXlsx)]}),(0,V.tZ)(ht.Menu.Item,{icon:(0,V.tZ)(I.Z.FileImageOutlined,{css:ur}),children:(0,h.t)("Download as image")},ft.bu.DownloadAsImage)]},ft.bu.Download)]});return(0,V.BX)(V.HY,{children:[O&&(0,V.tZ)(I.Z.FullscreenExitOutlined,{style:{fontSize:22},onClick:()=>{e.handleToggleFullSize()}}),(0,V.tZ)(mn.$i,{overlay:ie,overlayStyle:ee,trigger:["click"],placement:"bottomRight",visible:n,onVisibleChange:e=>k({close:!e}),onKeyDown:e=>((e,t,i,n,r,o)=>{if(e.key===lr&&!t)return;const a=i.props||{},s=(e=>{const t={};return(0,hn.Z)(e).forEach((e=>{var i;const n=(0,ht.xI)(e),r=(0,ht.ef)(e),o=pr(e);if(n||r){const i=null==e?void 0:e.key;i&&(t[i]={},t[i].type=r?ht.fH.SubMenu:ht.fH.MenuItem)}if(o.length&&o.forEach((i=>{const n=i.current.props.eventKey;t[n]={},t[n].type=r?ht.fH.SubMenu:ht.fH.MenuItem,t[n].parent=e.key,t[n].ref=i})),null!=e&&null!=(i=e.props)&&i.children){var a;const i=null==e||null==(a=e.props)?void 0:a.children;mr(i).forEach((i=>{const n=i.key;t[n]={},t[n].type=ht.fH.SubMenuItem,t[n].parent=e.key,i.ref&&(t[n].ref=i.ref)}))}})),t})(a.children),l=Object.keys(s),{selectedKeys:d=[]}=a,c=l.indexOf(d[0]);switch(e.key){case"Enter":case"Spacebar":case" ":if(d.length){const t=d[0],i=s[d];if(null==a.onClick||a.onClick({key:t,domEvent:e}),null!=i&&i.ref){const n=i.ref.current.props;null==n.onClick||n.onClick({key:t,domEvent:e})}r([]),o([]),e.currentTarget.focus()}n();break;case"ArrowDown":case lr&&!e.shiftKey:{const{selectedKey:e,openKey:t}=gr(l,s,c,"down");r([e]),o(t?[t]:[]);break}case"ArrowUp":case lr&&e.shiftKey:{const{selectedKey:e,openKey:t}=gr(l,s,c,"up");r([e]),o(t?[t]:[]);break}case"Escape":n()}})(e,n,ie,k,g,v),children:(0,V.tZ)("span",{css:()=>s.iv`
            display: flex;
            align-items: center;
          `,id:`slice_${U.slice_id}-controls`,role:"button","aria-label":"More Options","aria-haspopup":"true",tabIndex:0,children:(0,V.tZ)(hr,{})})}),$&&y]})}));var br=i(87185),yr=i.n(br),xr=i(85716),Cr=i(82607);a.iK.div`
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
`;const Sr=a.iK.span`
  ${({theme:e})=>s.iv`
    font-weight: ${e.typography.weights.bold};
  `}
`,wr=a.iK.span`
  ${({theme:e})=>s.iv`
    padding-right: ${e.gridUnit}px;
    font-style: italic;
    & > * {
      margin-right: ${e.gridUnit}px;
    }
  `}
`,Zr=a.iK.button`
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
`,Rr=a.iK.div`
  ${({theme:e})=>s.iv`
    margin-top: ${e.gridUnit}px;
    &:not(:last-child) {
      padding-bottom: ${3*e.gridUnit}px;
    }
  `}
`,kr=a.iK.div`
  ${({theme:e})=>s.iv`
    min-width: 200px;
    max-width: 300px;
    overflow-x: hidden;

    color: ${e.colors.grayscale.light5};
  `}
`,$r=a.iK.span`
  max-width: 100%;
  flex-grow: 1;
  overflow: auto;
`,Tr=a.iK.div`
  ${({theme:e})=>s.iv`
    width: 100%;
    height: 1px;
    background-color: ${e.colors.grayscale.light1};
    margin: ${4*e.gridUnit}px 0;
  `}
`;var Dr=i(1510);const Mr=(0,o.forwardRef)((({indicator:{column:e,name:t,value:i,path:n=[]},onClick:r},o)=>{const a=(0,Dr.GW)(i);return(0,V.BX)(Zr,{ref:o,onClick:r?()=>r([...n,`LABEL-${e}`]):void 0,tabIndex:-1,children:[r&&(0,V.tZ)("i",{children:(0,V.tZ)(I.Z.SearchOutlined,{iconSize:"m",css:s.iv`
                span {
                  vertical-align: 0;
                }
              `})}),(0,V.BX)("div",{children:[(0,V.BX)(wr,{children:[t,a?": ":""]}),(0,V.tZ)($r,{children:a})]})]})})),Ir=({appliedCrossFilterIndicators:e=[],appliedIndicators:t=[],onHighlightFilterSource:i,children:n,popoverVisible:r,popoverContentRef:a,popoverTriggerRef:l,setPopoverVisible:d})=>{const c=(0,u.v9)((e=>{var t;return null==(t=e.dashboardState)?void 0:t.activeTabs})),p=(0,o.useRef)([]);(0,o.useEffect)((()=>{r&&window.addEventListener("resize",(()=>d(!1)),{once:!0})}),[r]),(0,o.useEffect)((()=>{d(!1)}),[c]);const m=e=>`${e.column} - ${e.name}`,g=(0,V.BX)(kr,{ref:a,tabIndex:-1,onMouseLeave:()=>d(!1),onKeyDown:e=>{switch(e.key){case"Escape":case"Enter":setTimeout((()=>{var e;null==l||null==(e=l.current)||e.focus(),d(!1)}));break;case"ArrowDown":case"ArrowUp":{var t;e.preventDefault();const i=p.current.findIndex((e=>e===document.activeElement)),n=p.current.length-1;let r=0;"ArrowDown"===e.key?r=i>=n?0:i+1:"ArrowUp"===e.key&&(r=i<=0?n:i-1),null==(t=p.current[r])||t.focus();break}case"Tab":e.preventDefault()}},role:"menu",children:[(0,V.tZ)(s.xB,{styles:e=>(0,s.iv)(".filterStatusPopover{.ant-popover-inner{background-color:",e.colors.grayscale.dark2,"cc;.ant-popover-inner-content{padding:",2*e.gridUnit,"px;}}&.ant-popover-placement-bottom,&.ant-popover-placement-bottomLeft,&.ant-popover-placement-bottomRight{&>.ant-popover-content>.ant-popover-arrow{border-top-color:",e.colors.grayscale.dark2,"cc;border-left-color:",e.colors.grayscale.dark2,"cc;}}&.ant-popover-placement-top,&.ant-popover-placement-topLeft,&.ant-popover-placement-topRight{&>.ant-popover-content>.ant-popover-arrow{border-bottom-color:",e.colors.grayscale.dark2,"cc;border-right-color:",e.colors.grayscale.dark2,"cc;}}&.ant-popover-placement-left,&.ant-popover-placement-leftTop,&.ant-popover-placement-leftBottom{&>.ant-popover-content>.ant-popover-arrow{border-top-color:",e.colors.grayscale.dark2,"cc;border-right-color:",e.colors.grayscale.dark2,"cc;}}&.ant-popover-placement-right,&.ant-popover-placement-rightTop,&.ant-popover-placement-rightBottom{&>.ant-popover-content>.ant-popover-arrow{border-bottom-color:",e.colors.grayscale.dark2,"cc;border-left-color:",e.colors.grayscale.dark2,"cc;}}&.ant-popover{color:",e.colors.grayscale.light4,";z-index:99;}}","")}),(0,V.BX)("div",{children:[e.length?(0,V.BX)("div",{children:[(0,V.tZ)(Sr,{children:(0,h.t)("Applied cross-filters (%d)",e.length)}),(0,V.tZ)(Rr,{children:e.map((e=>(0,V.tZ)(Mr,{ref:e=>p.current.push(e),indicator:e,onClick:i},m(e))))})]}):null,e.length&&t.length?(0,V.tZ)(Tr,{}):null,t.length?(0,V.BX)("div",{children:[(0,V.tZ)(Sr,{children:(0,h.t)("Applied filters (%d)",t.length)}),(0,V.tZ)(Rr,{children:t.map((e=>(0,V.tZ)(Mr,{ref:e=>p.current.push(e),indicator:e,onClick:i},m(e))))})]}):null]})]});return(0,V.tZ)(Hi.J,{overlayClassName:"filterStatusPopover",content:g,visible:r,onVisibleChange:e=>{d(e)},placement:"bottomRight",trigger:["hover"],children:n})};var Fr,Er=i(5364),_r=i(10581),Pr=i(10916),zr=i(69856);!function(e){e.Unset="UNSET",e.Applied="APPLIED",e.Incompatible="INCOMPATIBLE",e.CrossFilterApplied="CROSS_FILTER_APPLIED"}(Fr||(Fr={}));const Ur=new Set(Object.values(zr.i2)),Or=e=>{var t;return null==e||!e.label||null!=e&&null!=(t=e.label)&&t.includes(void 0)?null!=e&&e.value?(0,hn.Z)(null==e?void 0:e.value).join(", "):null:e.label},Br=(e,t,i)=>{const n=t.columns[e],r=Array.isArray(n)?n:[n];if(null==n||t.isDateFilter&&n===Er.vM||0===r.length)return[];if(t.isDateFilter&&Ur.has(e)){const t=((e===zr.i2.time_grain_sqla?i.time_grain_sqla:i.granularity)||[]).reduce(((e,[t,i])=>({...e,[t]:i})),{});return r.map((e=>t[e]||e))}return r},Nr=e=>{var t,i;return new Set(((null==e||null==(t=e.queriesResponse)||null==(i=t[0])?void 0:i.applied_filters)||[]).map((e=>e.column)))},qr=e=>{var t,i;return new Set(((null==e||null==(t=e.queriesResponse)||null==(i=t[0])?void 0:i.rejected_filters)||[]).map((e=>(0,_r.Z)(e.column))))},Vr=(e,t,i)=>{var n,r,o,a,s;const l=null==t?void 0:t.filterState,d=null==t||null==(n=t.extraFormData)?void 0:n.filters,c=Or(l),h=null==l?void 0:l.filters,u=(null==d||null==(r=d[0])?void 0:r.col)||h&&Object.keys(h)[0],p=Object.values(i).find((t=>{var i;return(null==t||null==(i=t.meta)?void 0:i.chartId)===e}));return{column:u,name:(null==p||null==(o=p.meta)?void 0:o.sliceNameOverride)||(null==p||null==(a=p.meta)?void 0:a.sliceName)||"",path:[...null!=(s=null==p?void 0:p.parents)?s:[],(null==p?void 0:p.id)||""],value:c}},Ar={},Kr={},jr=({label:e,column:t,type:i=Pr.gT.NativeFilters,rejectedColumns:n,appliedColumns:r})=>{const o=null!==e,a=i===Pr.gT.CrossFilters?Fr.CrossFilterApplied:Fr.Applied;return!t&&o?a:t&&null!=n&&n.has(t)?Fr.Incompatible:t&&null!=r&&r.has(t)&&o?a:Fr.Unset},Lr={},Xr={},Hr={},Wr=a.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    cursor: pointer;\n    margin-right: ${e.gridUnit}px;\n    padding-left: ${2*e.gridUnit}px;\n    padding-right: ${2*e.gridUnit}px;\n    background: ${e.colors.grayscale.light4};\n    border-radius: 4px;\n    height: 100%;\n    .anticon {\n      vertical-align: middle;\n      color: ${e.colors.grayscale.base};\n      &:hover {\n        color: ${e.colors.grayscale.light1};\n      }\n    }\n\n    .incompatible-count {\n      font-size: ${e.typography.sizes.s}px;\n    }\n    &:focus-visible {\n      outline: 2px solid ${e.colors.primary.dark2};\n    }\n  `}
`,Yr=(0,a.iK)(Cr.Z)`
  ${({theme:e})=>`\n    margin-left: ${2*e.gridUnit}px;\n    &>sup.antd5-badge-count {\n      padding: 0 ${e.gridUnit}px;\n      min-width: ${4*e.gridUnit}px;\n      height: ${4*e.gridUnit}px;\n      line-height: 1.5;\n      font-weight: ${e.typography.weights.medium};\n      font-size: ${e.typography.sizes.s-1}px;\n      box-shadow: none;\n      padding: 0 ${e.gridUnit}px;\n    }\n  `}
`,Gr=[],Jr=({chartId:e})=>{const t=(0,u.I0)(),i=(0,u.v9)((e=>e.datasources)),n=(0,u.v9)((e=>e.dashboardFilters)),a=(0,u.v9)((e=>{var t;return null==(t=e.nativeFilters)?void 0:t.filters})),s=(0,u.v9)((e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration})),l=(0,u.v9)((t=>t.charts[e])),c=(0,u.v9)((e=>e.dashboardLayout.present)),p=(0,u.v9)((e=>e.dataMask)),[m,g]=(0,o.useState)(Gr),[f,v]=(0,o.useState)(Gr),[b,y]=(0,o.useState)(!1),x=(0,o.useRef)(null),C=(0,o.useRef)(null),S=(0,o.useCallback)((e=>{t((0,Bi.E2)(e))}),[t]),w=(0,xr.D)(l),Z=null==w?void 0:w.chartStatus,R=(0,xr.D)(n),k=(0,xr.D)(i),$=(null==l?void 0:l.chartStatus)&&["rendered","success"].includes(l.chartStatus);(0,o.useEffect)((()=>{b&&setTimeout((()=>{var e;null==x||null==(e=x.current)||e.focus({preventScroll:!0})}))}),[b]),(0,o.useEffect)((()=>{if(!$&&f.length>0)v(Gr);else if("success"!==Z){var t,r,o,a,s,d,c,h;(null==l||null==(t=l.queriesResponse)||null==(r=t[0])?void 0:r.rejected_filters)===(null==w||null==(o=w.queriesResponse)||null==(a=o[0])?void 0:a.rejected_filters)&&(null==l||null==(s=l.queriesResponse)||null==(d=s[0])?void 0:d.applied_filters)===(null==w||null==(c=w.queriesResponse)||null==(h=c[0])?void 0:h.applied_filters)&&n===R&&i===k||v(((e,t,i,n)=>{const r=Nr(n),o=qr(n),a=Object.values(t).filter((t=>t.chartId!==e)),s=Object.entries(i).filter((([e])=>a.find((t=>t.datasourceId===e)))).map((([,e])=>e)),l=Kr[e];if(Ar[e]&&(0,sn.JB)(null==l?void 0:l.appliedColumns,r)&&(0,sn.JB)(null==l?void 0:l.rejectedColumns,o)&&(0,sn.JB)(null==l?void 0:l.matchingFilters,a)&&(0,sn.JB)(null==l?void 0:l.matchingDatasources,s))return Ar[e];const d=a.reduce(((t,n)=>t.concat(((e,t,i,n,r)=>{const o=(e,t)=>n.has(e)&&t.columns[e]?Fr.Applied:r.has(e)?Fr.Incompatible:Fr.Unset;return Object.keys(t.columns).filter((i=>(0,Gt.Q1)({filterScope:t.scopes[i]}).includes(e))).map((e=>({column:e,name:t.labels[e]||e,value:Br(e,t,i),status:o(e,t),path:t.directPathToFilter})))})(e,n,i[n.datasourceId]||{},r,o))),[]);return d.sort(((e,t)=>e.name.localeCompare(t.name))),Ar[e]=d,Kr[e]={appliedColumns:r,rejectedColumns:o,matchingFilters:a,matchingDatasources:s},d})(e,n,i,l))}}),[l,e,n,f.length,i,null==w?void 0:w.queriesResponse,Z,R,k,$]);const T=(0,xr.D)(a),D=(0,xr.D)(c),M=(0,xr.D)(p),F=(0,xr.D)(s);(0,o.useEffect)((()=>{if(!$&&m.length>0)g(Gr);else if("success"!==Z){var t,i,n,r,o,h,u,f;(null==l||null==(t=l.queriesResponse)||null==(i=t[0])?void 0:i.rejected_filters)===(null==w||null==(n=w.queriesResponse)||null==(r=n[0])?void 0:r.rejected_filters)&&(null==l||null==(o=l.queriesResponse)||null==(h=o[0])?void 0:h.applied_filters)===(null==w||null==(u=w.queriesResponse)||null==(f=u[0])?void 0:f.applied_filters)&&a===T&&c===D&&p===M&&F===s||g(((e,t,i,n,r,o=Lr)=>{const a=Nr(n),s=qr(n),l=Hr[i];if(Xr[i]&&(0,sn.JB)(null==l?void 0:l.appliedColumns,a)&&(0,sn.JB)(null==l?void 0:l.rejectedColumns,s)&&(null==l?void 0:l.nativeFilters)===e&&(null==l?void 0:l.dashboardLayout)===r&&(null==l?void 0:l.chartConfiguration)===o&&(null==l?void 0:l.dataMask)===t)return Xr[i];const c=e&&Object.values(e).filter((e=>{var t;return e.type===Pr.BE.NativeFilter&&(null==(t=e.chartsInScope)?void 0:t.includes(i))})).map((e=>{var i,n,r,o;const l=null==(i=e.targets)||null==(n=i[0])||null==(r=n.column)?void 0:r.name,d=null==(o=t[e.id])?void 0:o.filterState,c=Or(d);return{column:l,name:e.name,path:[e.id],status:jr({label:c,column:l,rejectedColumns:s,appliedColumns:a}),value:c}}));let h=[];(0,d.cr)(d.TT.DashboardCrossFilters)&&(h=((e,t,i,n=Lr,r,o,a=!1)=>{let s=[];return(0,d.cr)(d.TT.DashboardCrossFilters)&&(s=Object.values(n).filter((e=>{var i,n;const r=null==(i=e.crossFilters)||null==(n=i.chartsInScope)?void 0:n.includes(t);return!(a||!r)||!(!a||r)})).map((t=>{const n=Vr(Number(t.id),e[t.id],i),a=jr({label:n.value,column:n.column?(0,_r.Z)(n.column):void 0,type:Pr.gT.CrossFilters,appliedColumns:r,rejectedColumns:o});return{...n,status:a}})).filter((e=>e.status===Fr.CrossFilterApplied))),s})(t,i,r,o,a,s));const u=h.concat(c);return Xr[i]=u,Hr[i]={nativeFilters:e,dashboardLayout:r,chartConfiguration:o,dataMask:t,appliedColumns:a,rejectedColumns:s},u})(a,p,e,l,c,s))}}),[l,e,s,p,a,m.length,c,null==w?void 0:w.queriesResponse,F,Z,D,M,T,$]);const E=(0,o.useMemo)((()=>yr()((e=>{const t=[Fr.Applied,Fr.Unset,Fr.Incompatible];return e.sort(((e,i)=>t.indexOf(e.status)-t.indexOf(i.status)))})([...f,...m]),((e,t)=>e.column===t.column&&e.name===t.name&&(e.status!==Fr.Applied||t.status!==Fr.Applied)))),[f,m]),_=(0,o.useMemo)((()=>E.filter((e=>e.status===Fr.CrossFilterApplied))),[E]),P=(0,o.useMemo)((()=>E.filter((e=>e.status===Fr.Applied))),[E]),z=P.length+_.length;return _.length||P.length?(0,V.tZ)(Ir,{appliedCrossFilterIndicators:_,appliedIndicators:P,onHighlightFilterSource:S,setPopoverVisible:y,popoverVisible:b,popoverContentRef:x,popoverTriggerRef:C,children:(0,V.BX)(Wr,{"aria-label":(0,h.t)("Applied filters (%s)",z),"aria-haspopup":"true",role:"button",ref:C,className:r()("filter-counts",!!_.length&&"has-cross-filters"),tabIndex:0,onKeyDown:e=>{"Enter"===e.key&&y(!0)},children:[(0,V.tZ)(I.Z.Filter,{iconSize:"m"}),(0,V.tZ)(Yr,{className:"applied-count",count:z,showZero:!0})]})}):null},Qr=(0,o.memo)(Jr);var eo=i(57001);const to=(0,ot.I)(),io=(0,h.t)("Annotation layers are still loading."),no=(0,h.t)("One ore more annotation layers failed loading."),ro=(0,a.iK)(I.Z.ApartmentOutlined)`
  ${({theme:e})=>`\n    cursor: default;\n    color: ${e.colors.primary.base};\n    line-height: 1.8;\n  `}
`,oo=a.iK.div`
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
`,ao=({innerRef:e=null,forceRefresh:t=(()=>({})),updateSliceName:i=(()=>({})),toggleExpandSlice:n=(()=>({})),logExploreChart:r=(()=>({})),logEvent:a,exportCSV:s=(()=>({})),exportXLSX:l=(()=>({})),editMode:d=!1,annotationQuery:c={},annotationError:p={},cachedDttm:m=null,updatedDttm:g=null,isCached:f=[],isExpanded:v=!1,sliceName:b="",supersetCanExplore:y=!1,supersetCanShare:x=!1,supersetCanCSV:C=!1,exportPivotCSV:S,exportFullCSV:w,exportFullXLSX:Z,slice:R,componentId:k,dashboardId:$,addSuccessToast:T,addDangerToast:D,handleToggleFullSize:M,isFullSize:I,chartStatus:F,formData:E,width:_,height:P})=>{const z=to.get("dashboard.slice.header"),U=(0,dn.fG)(),O=(0,o.useContext)(eo.DashboardPageIdContext),[B,q]=(0,o.useState)(null),A=(0,o.useRef)(null),K=(0,u.v9)((e=>{var t,i;return null==(t=e.dataMask[null==R?void 0:R.slice_id])||null==(i=t.filterState)?void 0:i.value})),j=(0,u.v9)((({dashboardInfo:e})=>e.crossFiltersEnabled)),L=!d&&y;(0,o.useEffect)((()=>{const e=A.current;L?q(vn(b)):e&&(e.scrollWidth>e.offsetWidth||e.scrollHeight>e.offsetHeight)?q(null!=b?b:null):q(null)}),[b,_,P,L]);const X=`/explore/?dashboard_page_id=${O}&slice_id=${R.slice_id}`;return(0,V.BX)(oo,{ref:e,children:[(0,V.BX)("div",{className:"header-title",ref:A,children:[(0,V.tZ)(N.u,{title:B,children:(0,V.tZ)(cn.Z,{title:b||(d?"---":""),canEdit:d,onSaveTitle:i,showTooltip:!1,url:L?X:void 0})}),!!Object.values(c).length&&(0,V.tZ)(N.u,{id:"annotations-loading-tooltip",placement:"top",title:io,children:(0,V.tZ)("i",{role:"img","aria-label":io,className:"fa fa-refresh warning"})}),!!Object.values(p).length&&(0,V.tZ)(N.u,{id:"annotation-errors-tooltip",placement:"top",title:no,children:(0,V.tZ)("i",{role:"img","aria-label":no,className:"fa fa-exclamation-circle danger"})})]}),(0,V.tZ)("div",{className:"header-controls",children:!d&&(0,V.BX)(V.HY,{children:[z&&(0,V.tZ)(z,{sliceId:R.slice_id,dashboardId:$}),K&&(0,V.tZ)(N.u,{placement:"top",title:(0,h.t)("This chart applies cross-filters to charts whose datasets contain columns with the same name."),children:(0,V.tZ)(ro,{iconSize:"m"})}),!U.hideChartControls&&(0,V.tZ)(Qr,{chartId:R.slice_id}),!U.hideChartControls&&(0,V.tZ)(vr,{slice:R,isCached:f,isExpanded:v,cachedDttm:m,updatedDttm:g,toggleExpandSlice:n,forceRefresh:t,logExploreChart:r,logEvent:a,exportCSV:s,exportPivotCSV:S,exportFullCSV:w,exportXLSX:l,exportFullXLSX:Z,supersetCanExplore:y,supersetCanShare:x,supersetCanCSV:C,componentId:k,dashboardId:$,addSuccessToast:T,addDangerToast:D,handleToggleFullSize:M,isFullSize:I,isDescriptionExpanded:v,chartStatus:F,formData:E,exploreUrl:X,crossFiltersEnabled:j})]})})]})},so={height:w().number.isRequired};function lo({height:e}){return(0,V.tZ)("div",{className:"missing-chart-container",style:{height:e+20},children:(0,V.BX)("div",{className:"missing-chart-body",children:[(0,h.t)("There is no chart definition associated with this component, could it have been deleted?"),(0,V.tZ)("br",{}),(0,V.tZ)("br",{}),(0,h.t)("Delete this container and save to remove this message.")]})})}lo.propTypes=so;const co={id:w().number.isRequired,componentId:w().string.isRequired,dashboardId:w().number.isRequired,width:w().number.isRequired,height:w().number.isRequired,updateSliceName:w().func.isRequired,isComponentVisible:w().bool,handleToggleFullSize:w().func.isRequired,setControlValue:w().func,chart:P.$6.isRequired,formData:w().object.isRequired,labelsColor:w().object,labelsColorMap:w().object,datasource:w().object,slice:P.Rw.isRequired,sliceName:w().string.isRequired,timeout:w().number.isRequired,maxRows:w().number.isRequired,filters:w().object.isRequired,refreshChart:w().func.isRequired,logEvent:w().func.isRequired,toggleExpandSlice:w().func.isRequired,changeFilter:w().func.isRequired,setFocusedFilterField:w().func.isRequired,unsetFocusedFilterField:w().func.isRequired,editMode:w().bool.isRequired,isExpanded:w().bool.isRequired,isCached:w().bool,supersetCanExplore:w().bool.isRequired,supersetCanShare:w().bool.isRequired,supersetCanCSV:w().bool.isRequired,addSuccessToast:w().func.isRequired,addDangerToast:w().func.isRequired,ownState:w().object,filterState:w().object,postTransformProps:w().func,datasetsStatus:w().oneOf(["loading","error","complete"]),isInView:w().bool,emitCrossFilters:w().bool},ho=Object.keys(co).filter((e=>"width"!==e&&"height"!==e&&"isComponentVisible"!==e)),uo=a.iK.div`
  overflow: hidden;
  position: relative;

  &.dashboard-chart--overflowable {
    overflow: visible;
  }
`,po=a.iK.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`,mo=a.iK.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;class go extends o.Component{constructor(e){super(e),this.logExploreChart=()=>{this.props.logEvent(at.oK,{slice_id:this.props.slice.slice_id,is_cached:this.props.isCached})},this.onExploreChart=async e=>{const t=e.shiftKey||e.ctrlKey||e.metaKey;try{const e=window.localStorage.getItem("last_tab_id"),i=e?String(Number.parseInt(e,10)+1):void 0,n=await(0,ln.nv)(this.props.datasource.id,this.props.datasource.type,this.props.formData,this.props.slice.slice_id,i),r=(0,Zt.y8)(null,{[ut.KD.formDataKey.name]:n,[ut.KD.sliceId.name]:this.props.slice.slice_id});t?window.open(r,"_blank","noreferrer"):this.props.history.push(r)}catch(e){mt.Z.error(e),this.props.addDangerToast((0,h.t)("An error occurred while opening Explore"))}},this.state={width:e.width,height:e.height,descriptionHeight:0},this.changeFilter=this.changeFilter.bind(this),this.handleFilterMenuOpen=this.handleFilterMenuOpen.bind(this),this.handleFilterMenuClose=this.handleFilterMenuClose.bind(this),this.exportCSV=this.exportCSV.bind(this),this.exportPivotCSV=this.exportPivotCSV.bind(this),this.exportFullCSV=this.exportFullCSV.bind(this),this.exportXLSX=this.exportXLSX.bind(this),this.exportFullXLSX=this.exportFullXLSX.bind(this),this.forceRefresh=this.forceRefresh.bind(this),this.resize=C()(this.resize.bind(this),500),this.setDescriptionRef=this.setDescriptionRef.bind(this),this.setHeaderRef=this.setHeaderRef.bind(this),this.getChartHeight=this.getChartHeight.bind(this),this.getDescriptionHeight=this.getDescriptionHeight.bind(this)}shouldComponentUpdate(e,t){var i,n,r,o,a,s,l,d,c;if(t.width!==this.state.width||t.height!==this.state.height||t.descriptionHeight!==this.state.descriptionHeight||!rn()(e.datasource,this.props.datasource))return!0;if((null==(i=this.props)||null==(n=i.chart)?void 0:n.chartStatus)!==(null==e||null==(r=e.chart)?void 0:r.chartStatus)&&"loading"===(null==(o=this.props)||null==(a=o.chart)?void 0:a.chartStatus))return!0;if(e.isComponentVisible){if(e.chart.triggerQuery)return!0;if(e.isFullSize!==this.props.isFullSize)return this.resize(),!1;e.width===this.props.width&&e.height===this.props.height&&e.width===this.state.width&&e.height===this.state.height||this.resize();for(let t=0;t<ho.length;t+=1){const i=ho[t];if(!(0,sn.JB)(e[i],this.props[i]))return!0}}else if((null==(s=e.formData)?void 0:s.color_scheme)!==(null==(l=this.props.formData)?void 0:l.color_scheme)||!(0,sn.JB)(null==(d=e.formData)?void 0:d.label_colors,null==(c=this.props.formData)?void 0:c.label_colors))return!0;return this.props.cacheBusterProp!==e.cacheBusterProp}componentDidMount(){if(this.props.isExpanded){const e=this.getDescriptionHeight();this.setState({descriptionHeight:e})}}componentWillUnmount(){this.resize.cancel()}componentDidUpdate(e){if(this.props.isExpanded!==e.isExpanded){const e=this.getDescriptionHeight();this.setState({descriptionHeight:e})}}getDescriptionHeight(){return this.props.isExpanded&&this.descriptionRef?this.descriptionRef.offsetHeight:0}getChartHeight(){const e=this.getHeaderHeight();return Math.max(this.state.height-e-this.state.descriptionHeight,20)}getHeaderHeight(){if(this.headerRef){const e=getComputedStyle(this.headerRef).getPropertyValue("margin-bottom"),t=parseInt(e,10)||0;return this.headerRef.offsetHeight+t}return 22}setDescriptionRef(e){this.descriptionRef=e}setHeaderRef(e){this.headerRef=e}resize(){const{width:e,height:t}=this.props;this.setState((()=>({width:e,height:t})))}changeFilter(e={}){this.props.logEvent(at.Qg,{id:this.props.chart.id,columns:Object.keys(e).filter((t=>null!==e[t]))}),this.props.changeFilter(this.props.chart.id,e)}handleFilterMenuOpen(e,t){this.props.setFocusedFilterField(e,t)}handleFilterMenuClose(e,t){this.props.unsetFocusedFilterField(e,t)}exportFullCSV(){this.exportCSV(!0)}exportCSV(e=!1){this.exportTable("csv",e)}exportPivotCSV(){this.exportTable("csv",!1,!0)}exportXLSX(){this.exportTable("xlsx",!1)}exportFullXLSX(){this.exportTable("xlsx",!0)}exportTable(e,t,i=!1){const n="csv"===e?at.PC:at.br;this.props.logEvent(n,{slice_id:this.props.slice.slice_id,is_cached:this.props.isCached}),(0,Zt.pe)({formData:t?{...this.props.formData,row_limit:this.props.maxRows}:this.props.formData,resultType:i?"post_processed":"full",resultFormat:e,force:!0,ownState:this.props.ownState})}forceRefresh(){return this.props.logEvent(at.TD,{slice_id:this.props.slice.slice_id,is_cached:this.props.isCached}),this.props.refreshChart(this.props.chart.id,!0,this.props.dashboardId)}render(){const{id:e,componentId:t,dashboardId:i,chart:n,slice:o,datasource:a,isExpanded:s,editMode:l,filters:d,formData:c,labelsColor:h,labelsColorMap:u,updateSliceName:p,sliceName:m,toggleExpandSlice:g,timeout:f,supersetCanExplore:v,supersetCanShare:b,supersetCanCSV:y,addSuccessToast:x,addDangerToast:C,ownState:S,filterState:w,handleToggleFullSize:Z,isFullSize:R,setControlValue:k,postTransformProps:$,datasetsStatus:T,isInView:D,emitCrossFilters:M,logEvent:I}=this.props,{width:F}=this.state;if(!n||!o)return(0,V.tZ)(lo,{height:this.getChartHeight()});const{queriesResponse:E,chartUpdateEndTime:_,chartStatus:P}=n,z="loading"===P,U=(null==E?void 0:E.map((({is_cached:e})=>e)))||[],O=(null==E?void 0:E.map((({cached_dttm:e})=>e)))||[];return(0,V.BX)(mo,{className:"chart-slice","data-test-chart-id":e,"data-test-viz-type":o.viz_type,"data-test-chart-name":o.slice_name,children:[(0,V.tZ)(ao,{innerRef:this.setHeaderRef,slice:o,isExpanded:s,isCached:U,cachedDttm:O,updatedDttm:_,toggleExpandSlice:g,forceRefresh:this.forceRefresh,editMode:l,annotationQuery:n.annotationQuery,logExploreChart:this.logExploreChart,logEvent:I,onExploreChart:this.onExploreChart,exportCSV:this.exportCSV,exportPivotCSV:this.exportPivotCSV,exportXLSX:this.exportXLSX,exportFullCSV:this.exportFullCSV,exportFullXLSX:this.exportFullXLSX,updateSliceName:p,sliceName:m,supersetCanExplore:v,supersetCanShare:b,supersetCanCSV:y,componentId:t,dashboardId:i,filters:d,addSuccessToast:x,addDangerToast:C,handleToggleFullSize:Z,isFullSize:R,chartStatus:n.chartStatus,formData:c,width:F,height:this.getHeaderHeight()}),s&&o.description_markeddown&&(0,V.tZ)("div",{className:"slice_description bs-callout bs-callout-default",ref:this.setDescriptionRef,dangerouslySetInnerHTML:{__html:o.description_markeddown},role:"complementary"}),(0,V.BX)(uo,{className:r()("dashboard-chart"),"aria-label":o.description,children:[z&&(0,V.tZ)(po,{style:{width:F,height:this.getChartHeight()}}),(0,V.tZ)(an.Z,{width:F,height:this.getChartHeight(),addFilter:this.changeFilter,onFilterMenuOpen:this.handleFilterMenuOpen,onFilterMenuClose:this.handleFilterMenuClose,annotationData:n.annotationData,chartAlert:n.chartAlert,chartId:e,chartStatus:P,datasource:a,dashboardId:i,initialValues:{},formData:c,labelsColor:h,labelsColorMap:u,ownState:S,filterState:w,queriesResponse:n.queriesResponse,timeout:f,triggerQuery:n.triggerQuery,vizType:o.viz_type,setControlValue:k,postTransformProps:$,datasetsStatus:T,isInView:D,emitCrossFilters:M})]})]})}}go.propTypes=co,go.defaultProps={isCached:!1,isComponentVisible:!0};const fo=(0,on.EN)(go),vo={},bo=(0,u.$j)((function({charts:e,dashboardInfo:t,dashboardState:i,dataMask:n,datasources:r,sliceEntities:o,nativeFilters:a,common:s},l){var d,c,h,u,p;const{id:m,extraControls:g,setControlValue:f}=l,v=e[m]||vo,b=v&&v.form_data&&r[v.form_data.datasource]||Rn.tw,{colorScheme:y,colorNamespace:x,datasetsStatus:C}=i,S=(null==t||null==(d=t.metadata)?void 0:d.label_colors)||{},w=(null==t||null==(c=t.metadata)?void 0:c.shared_label_colors)||{},Z=(0,tn.Z)({chart:v,chartConfiguration:null==(h=t.metadata)?void 0:h.chart_configuration,charts:e,filters:(0,Gt._f)(m),colorScheme:y,colorNamespace:x,sliceId:m,nativeFilters:null==a?void 0:a.filters,allSliceIds:i.sliceIds,dataMask:n,extraControls:g,labelsColor:S,labelsColorMap:w});return Z.dashboardId=t.id,{chart:v,datasource:b,labelsColor:S,labelsColorMap:w,slice:o.slices[m],timeout:t.common.conf.SUPERSET_WEBSERVER_TIMEOUT,filters:(0,Gt.De)()||vo,formData:Z,editMode:i.editMode,isExpanded:!!i.expandedSlices[m],supersetCanExplore:!!t.superset_can_explore,supersetCanShare:!!t.superset_can_share,supersetCanCSV:!!t.superset_can_csv,ownState:null==(u=n[m])?void 0:u.ownState,filterState:null==(p=n[m])?void 0:p.filterState,maxRows:s.conf.SQL_MAX_ROW,setControlValue:f,datasetsStatus:C,emitCrossFilters:!!t.crossFiltersEnabled}}),(function(e){return(0,f.DE)({updateComponents:Ni.WZ,addSuccessToast:qi.ws,addDangerToast:qi.Gb,toggleExpandSlice:Bi.WL,changeFilter:Qi.M6,setFocusedFilterField:Bi.GH,unsetFocusedFilterField:Bi.oY,refreshChart:en.refreshChart,logEvent:Vi.logEvent},e)}))(fo),yo=({onDelete:e})=>(0,V.tZ)(Li,{onClick:e,icon:(0,V.tZ)(I.Z.Trash,{iconSize:"xl"})}),xo=a.iK.div`
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
`;class Co extends o.PureComponent{constructor(...e){super(...e),this.handleMouseEnter=()=>{const{onHover:e}=this.props;e&&e({isHovered:!0})},this.handleMouseLeave=()=>{const{onHover:e}=this.props;e&&e({isHovered:!1})}}render(){const{innerRef:e,position:t,children:i}=this.props;return(0,V.tZ)(xo,{className:"hover-menu-container",children:(0,V.tZ)("div",{ref:e,className:r()("hover-menu","left"===t&&"hover-menu--left","top"===t&&"hover-menu--top"),onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,children:i})})}}Co.defaultProps={position:"left",innerRef:null,children:null};var So=i(29119);const wo={right:function(){return(0,V.tZ)("div",{className:"resize-handle resize-handle--right"})},bottom:function(){return(0,V.tZ)("div",{className:"resize-handle resize-handle--bottom"})},bottomRight:function(){return(0,V.tZ)("div",{className:"resize-handle resize-handle--bottom-right"})}},Zo={top:!1,right:!0,bottom:!0,left:!1,topRight:!1,bottomRight:!0,bottomLeft:!1,topLeft:!1},Ro={widthAndHeight:Zo,widthOnly:{...Zo,bottomRight:!1,bottom:!1},heightOnly:{...Zo,bottomRight:!1,right:!1},notAdjustable:{...Zo,bottomRight:!1,bottom:!1,right:!1}},ko=Number.MAX_VALUE,$o={id:w().string.isRequired,children:w().node,adjustableWidth:w().bool,adjustableHeight:w().bool,gutterWidth:w().number,widthStep:w().number,heightStep:w().number,widthMultiple:w().number,heightMultiple:w().number,minWidthMultiple:w().number,maxWidthMultiple:w().number,minHeightMultiple:w().number,maxHeightMultiple:w().number,staticHeight:w().number,staticHeightMultiple:w().number,staticWidth:w().number,staticWidthMultiple:w().number,onResizeStop:w().func,onResize:w().func,onResizeStart:w().func,editMode:w().bool.isRequired},To={children:null,adjustableWidth:!0,adjustableHeight:!0,gutterWidth:_.es,widthStep:_.cd,heightStep:_.cd,widthMultiple:null,heightMultiple:null,minWidthMultiple:1,maxWidthMultiple:ko,minHeightMultiple:1,maxHeightMultiple:ko,staticHeight:null,staticHeightMultiple:null,staticWidth:null,staticWidthMultiple:null,onResizeStop:null,onResize:null,onResizeStart:null},Do=[_.cd,_.cd],Mo={right:"resizable-container-handle--right",bottom:"resizable-container-handle--bottom"},Io=(0,a.iK)(So.e)`
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
`;class Fo extends o.PureComponent{constructor(e){super(e),this.state={isResizing:!1},this.handleResizeStart=this.handleResizeStart.bind(this),this.handleResize=this.handleResize.bind(this),this.handleResizeStop=this.handleResizeStop.bind(this)}handleResizeStart(e,t,i){const{id:n,onResizeStart:r}=this.props;r&&r({id:n,direction:t,ref:i}),this.setState((()=>({isResizing:!0})))}handleResize(e,t,i){const{onResize:n,id:r}=this.props;n&&n({id:r,direction:t,ref:i})}handleResizeStop(e,t,i,n){const{id:r,onResizeStop:o,widthStep:a,heightStep:s,widthMultiple:l,heightMultiple:d,adjustableHeight:c,adjustableWidth:h,gutterWidth:u}=this.props;if(o){const e=l+Math.round(n.width/(a+u)),t=d+Math.round(n.height/s);o({id:r,widthMultiple:h?e:null,heightMultiple:c?t:null}),this.setState((()=>({isResizing:!1})))}}render(){const{children:e,adjustableWidth:t,adjustableHeight:i,widthStep:n,heightStep:o,widthMultiple:a,heightMultiple:s,staticHeight:l,staticHeightMultiple:d,staticWidth:c,staticWidthMultiple:h,minWidthMultiple:u,maxWidthMultiple:p,minHeightMultiple:m,maxHeightMultiple:g,gutterWidth:f,editMode:v}=this.props,b={width:t?(n+f)*a-f:h&&h*n||c||void 0,height:i?o*s:d&&d*o||l||void 0};let y=Ro.notAdjustable;v&&t&&i?y=Ro.widthAndHeight:v&&t?y=Ro.widthOnly:v&&i&&(y=Ro.heightOnly);const{isResizing:x}=this.state;return(0,V.tZ)(Io,{enable:y,grid:Do,minWidth:t?u*(n+f)-f:void 0,minHeight:i?m*o:void 0,maxWidth:t?Math.max(b.width,Math.min(ko,p*(n+f)-f)):void 0,maxHeight:i?Math.max(b.height,Math.min(ko,g*o)):void 0,size:b,onResizeStart:this.handleResizeStart,onResize:this.handleResize,onResizeStop:this.handleResizeStop,handleComponent:wo,className:r()("resizable-container",x&&"resizable-container--resizing"),handleClasses:Mo,children:e})}}Fo.propTypes=$o,Fo.defaultProps=To;const Eo=Fo;function _o(e){const t={};if(e.length>0){const i=e.slice();for(;i.length;){const e=i.pop(),n=e.split("-")[0];if(t[n.toLowerCase()]=e,!_.Ep.includes(n))break}}return t}const Po=s.iv`
  && {
    position: fixed;
    z-index: 3000;
    left: 0;
    top: 0;
  }
`;var zo=i(78186);const Uo=(0,a.iK)(ht.Menu.Item)`
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
`;var Oo={name:"s5xdrg",styles:"display:flex;align-items:center"};const Bo=e=>{const{value:t,options:i,onChange:n,renderButton:o=(e=>e.label),renderOption:l=(e=>(0,V.tZ)("div",{className:e.className,children:e.label}))}=e,d=(0,a.Fg)(),c=i.find((e=>e.value===t));return(0,V.tZ)(T.Gj,{trigger:["click"],overlayStyle:{zIndex:d.zIndex.max},overlay:(0,V.tZ)(ht.Menu,{onClick:({key:e})=>n(e),children:i.map((e=>(0,V.tZ)(Uo,{id:"menu-item",className:r()("dropdown-item",{active:e.value===t}),children:l(e)},e.value)))}),children:(0,V.BX)("div",{role:"button",css:Oo,children:[c&&o(c),(0,V.tZ)(I.Z.CaretDown,{iconColor:d.colors.grayscale.base,css:(0,s.iv)({marginTop:.5*d.gridUnit},"","")})]})})},No=[{value:"edit",label:(0,h.t)("Edit")},{value:"preview",label:(0,h.t)("Preview")}];class qo extends o.PureComponent{render(){const{id:e,value:t,onChange:i}=this.props;return(0,V.tZ)(Bo,{id:e,options:No,value:t,onChange:i})}}const Vo=a.iK.div`
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
`,Ao=a.iK.div`
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
`;class Ko extends o.PureComponent{constructor(e){super(e),this.container=void 0,this.state={isFocused:e.isFocused},this.setRef=this.setRef.bind(this),this.handleClick=this.handleClick.bind(this)}UNSAFE_componentWillReceiveProps(e){e.editMode&&e.isFocused&&!this.state.isFocused?(document.addEventListener("click",this.handleClick),document.addEventListener("drag",this.handleClick),this.setState({isFocused:!0})):this.state.isFocused&&!e.editMode&&(document.removeEventListener("click",this.handleClick),document.removeEventListener("drag",this.handleClick),this.setState({isFocused:!1}))}componentWillUnmount(){document.removeEventListener("click",this.handleClick),document.removeEventListener("drag",this.handleClick)}setRef(e){this.container=e}handleClick(e){if(!this.props.editMode)return;const{onChangeFocus:t,shouldFocus:i,disableClick:n}=this.props,r=i(e,this.container);n||!r||this.state.isFocused?!r&&this.state.isFocused&&(document.removeEventListener("click",this.handleClick),document.removeEventListener("drag",this.handleClick),this.setState((()=>({isFocused:!1}))),t&&t(!1)):(document.addEventListener("click",this.handleClick),document.addEventListener("drag",this.handleClick),this.setState((()=>({isFocused:!0}))),t&&t(!0))}render(){var e;const{children:t,menuItems:i,editMode:n,style:o}=this.props,{isFocused:a}=this.state;return(0,V.BX)(Vo,{ref:this.setRef,onClick:this.handleClick,role:"none",className:r()("with-popover-menu",n&&a&&"with-popover-menu--focused"),style:o,children:[t,n&&a&&(null!=(e=null==i?void 0:i.length)?e:0)>0&&(0,V.tZ)(Ao,{children:i.map(((e,t)=>(0,V.tZ)("div",{className:"menu-item",children:e},`menu-item-${t}`)))})]})}}Ko.defaultProps={children:null,disableClick:!1,onChangeFocus:null,menuItems:[],isFocused:!1,shouldFocus:(e,t)=>{var i;return(null==t?void 0:t.contains(e.target))||"menu-item"===e.target.id||"menu-item"===(null==(i=e.target.parentNode)?void 0:i.id)},style:null};const jo={id:w().string.isRequired,parentId:w().string.isRequired,component:P.cP.isRequired,parentComponent:P.cP.isRequired,index:w().number.isRequired,depth:w().number.isRequired,editMode:w().bool.isRequired,logEvent:w().func.isRequired,addDangerToast:w().func.isRequired,undoLength:w().number.isRequired,redoLength:w().number.isRequired,availableColumnCount:w().number.isRequired,columnWidth:w().number.isRequired,onResizeStart:w().func.isRequired,onResize:w().func.isRequired,onResizeStop:w().func.isRequired,deleteComponent:w().func.isRequired,handleComponentDrop:w().func.isRequired,updateComponents:w().func.isRequired,htmlSanitization:w().bool,htmlSchemaOverrides:w().object},Lo="# ✨Header 1\n## ✨Header 2\n### ✨Header 3\n\n<br />\n\nClick here to learn more about [markdown formatting](https://bit.ly/1dQOfRK)",Xo=(0,h.t)("This markdown component has an error."),Ho=a.iK.div`
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
`;class Wo extends o.PureComponent{constructor(e){super(e),this.state={isFocused:!1,markdownSource:e.component.meta.code,editor:null,editorMode:"preview",undoLength:e.undoLength,redoLength:e.redoLength},this.renderStartTime=at.Yd.getTimestamp(),this.handleChangeFocus=this.handleChangeFocus.bind(this),this.handleChangeEditorMode=this.handleChangeEditorMode.bind(this),this.handleMarkdownChange=this.handleMarkdownChange.bind(this),this.handleDeleteComponent=this.handleDeleteComponent.bind(this),this.handleResizeStart=this.handleResizeStart.bind(this),this.setEditor=this.setEditor.bind(this)}componentDidMount(){this.props.logEvent(at.aD,{viz_type:"markdown",start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:at.Yd.getTimestamp()-this.renderStartTime})}static getDerivedStateFromProps(e,t){const{hasError:i,editorMode:n,markdownSource:r,undoLength:o,redoLength:a}=t,{component:s,undoLength:l,redoLength:d}=e;return l!==o||d!==a?{...t,undoLength:l,redoLength:d,markdownSource:s.meta.code,hasError:!1}:i||"preview"!==n||s.meta.code===r?t:{...t,markdownSource:s.meta.code}}static getDerivedStateFromError(){return{hasError:!0}}componentDidUpdate(e){!this.state.editor||e.component.meta.width===this.props.component.meta.width&&e.columnWidth===this.props.columnWidth||this.state.editor.resize(!0),this.props.editMode&&Tt.cE.preload()}componentDidCatch(){this.state.editor&&"preview"===this.state.editorMode&&this.props.addDangerToast((0,h.t)("This markdown component has an error. Please revert your recent changes."))}setEditor(e){e.getSession().setUseWrapMode(!0),this.setState({editor:e})}handleChangeFocus(e){const t=!!e,i=t?"edit":"preview";this.setState((()=>({isFocused:t}))),this.handleChangeEditorMode(i)}handleChangeEditorMode(e){const t={...this.state,editorMode:e};"preview"===e&&(this.updateMarkdownContent(),t.hasError=!1),this.setState(t)}updateMarkdownContent(){const{updateComponents:e,component:t}=this.props;t.meta.code!==this.state.markdownSource&&e({[t.id]:{...t,meta:{...t.meta,code:this.state.markdownSource}}})}handleMarkdownChange(e){this.setState({markdownSource:e})}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:i}=this.props;e(t,i)}handleResizeStart(e){const{editorMode:t}=this.state,{editMode:i,onResizeStart:n}=this.props,r="edit"===t;n(e),i&&r&&this.updateMarkdownContent()}renderEditMode(){return(0,V.tZ)(Tt.cE,{onChange:this.handleMarkdownChange,width:"100%",height:"100%",showGutter:!1,editorProps:{$blockScrolling:!0},value:"string"==typeof this.state.markdownSource?this.state.markdownSource:Lo,readOnly:!1,onLoad:this.setEditor})}renderPreviewMode(){const{hasError:e}=this.state;return(0,V.tZ)(zo.Z,{source:e?Xo:this.state.markdownSource||Lo,htmlSanitization:this.props.htmlSanitization,htmlSchemaOverrides:this.props.htmlSchemaOverrides})}render(){const{isFocused:e,editorMode:t}=this.state,{component:i,parentComponent:n,index:o,depth:a,availableColumnCount:s,columnWidth:l,onResize:d,onResizeStop:c,handleComponentDrop:h,editMode:u}=this.props,p=n.type===E.BA?n.meta.width||_.cx:i.meta.width||_.cx,m="edit"===t;return(0,V.tZ)(ke,{component:i,parentComponent:n,orientation:n.type===E.Os?"column":"row",index:o,depth:a,onDrop:h,disableDragDrop:e,editMode:u,children:({dragSourceRef:t})=>(0,V.tZ)(Ko,{onChangeFocus:this.handleChangeFocus,menuItems:[(0,V.tZ)(qo,{id:`${i.id}-mode`,value:this.state.editorMode,onChange:this.handleChangeEditorMode})],editMode:u,children:(0,V.tZ)(Ho,{className:r()("dashboard-markdown",m&&"dashboard-markdown--editing"),id:i.id,children:(0,V.tZ)(Eo,{id:i.id,adjustableWidth:n.type===E.Os,adjustableHeight:!0,widthStep:l,widthMultiple:p,heightStep:_.cd,heightMultiple:i.meta.height,minWidthMultiple:_.cx,minHeightMultiple:_.AA,maxWidthMultiple:s+p,onResizeStart:this.handleResizeStart,onResize:d,onResizeStop:c,editMode:!e&&u,children:(0,V.BX)("div",{ref:t,className:"dashboard-component dashboard-component-chart-holder",children:[u&&(0,V.tZ)(Co,{position:"top",children:(0,V.tZ)(yo,{onDelete:this.handleDeleteComponent})}),u&&m?this.renderEditMode():this.renderPreviewMode()]})})})})})}}Wo.propTypes=jo,Wo.defaultProps={};const Yo=(0,u.$j)((function(e){return{undoLength:e.dashboardLayout.past.length,redoLength:e.dashboardLayout.future.length,htmlSanitization:e.common.conf.HTML_SANITIZATION,htmlSchemaOverrides:e.common.conf.HTML_SANITIZATION_SCHEMA_EXTENSIONS}}))(Wo),Go=a.iK.div`
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
`;function Jo({position:e="left",innerRef:t=null}){return(0,V.tZ)(Go,{ref:t,position:e,children:(0,V.tZ)(I.Z.Drag,{})})}var Qo=i(713);const ea=a.iK.div`
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
`;function ta(e){const t=(0,h.t)("background");return(0,V.tZ)(ea,{className:r()("background-style-option",e.className),children:`${e.label} ${t}`})}function ia(e){return(0,V.tZ)(ea,{className:r()("background-style-option",e.className),children:e.label})}class na extends o.PureComponent{render(){const{id:e,value:t,onChange:i}=this.props;return(0,V.tZ)(Bo,{id:e,options:Qo.Z,value:t,onChange:i,renderButton:ta,renderOption:ia})}}const ra={id:w().string.isRequired,parentId:w().string.isRequired,component:P.cP.isRequired,parentComponent:P.cP.isRequired,index:w().number.isRequired,depth:w().number.isRequired,editMode:w().bool.isRequired,availableColumnCount:w().number.isRequired,columnWidth:w().number.isRequired,minColumnWidth:w().number.isRequired,onResizeStart:w().func.isRequired,onResize:w().func.isRequired,onResizeStop:w().func.isRequired,deleteComponent:w().func.isRequired,handleComponentDrop:w().func.isRequired,updateComponents:w().func.isRequired},oa=a.iK.div`
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
        z-index: ${Rn.oB};
        &:first-child {
          inset-block-start: 0;
        }
      }
      &:first-child:not(.droptarget-edge) {
        position: absolute;
        z-index: ${Rn.oB};
        width: 100%;
        height: 100%;
      }
    }
  `}
`,aa=e=>s.iv`
  min-height: ${25*e.gridUnit}px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e.colors.text.label};
`;class sa extends o.PureComponent{constructor(e){super(e),this.state={isFocused:!1},this.handleChangeBackground=this.handleUpdateMeta.bind(this,"background"),this.handleChangeFocus=this.handleChangeFocus.bind(this),this.handleDeleteComponent=this.handleDeleteComponent.bind(this)}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:i}=this.props;e(t,i)}handleChangeFocus(e){this.setState((()=>({isFocused:Boolean(e)})))}handleUpdateMeta(e,t){const{updateComponents:i,component:n}=this.props;t&&n.meta[e]!==t&&i({[n.id]:{...n,meta:{...n.meta,[e]:t}}})}render(){const{component:e,parentComponent:t,index:i,availableColumnCount:n,columnWidth:a,minColumnWidth:s,depth:l,onResizeStart:d,onResize:c,onResizeStop:u,handleComponentDrop:p,editMode:m,onChangeTab:g,isComponentVisible:f}=this.props,v=e.children||[],b=Qo.Z.find((t=>t.value===(e.meta.background||_.HE)));return(0,V.tZ)(ke,{component:e,parentComponent:t,orientation:"column",index:i,depth:l,onDrop:p,editMode:m,children:({dragSourceRef:t})=>(0,V.tZ)(Eo,{id:e.id,adjustableWidth:!0,adjustableHeight:!1,widthStep:a,widthMultiple:e.meta.width,minWidthMultiple:s,maxWidthMultiple:n+(e.meta.width||0),onResizeStart:d,onResize:c,onResizeStop:u,editMode:m,children:(0,V.BX)(Ko,{isFocused:this.state.isFocused,onChangeFocus:this.handleChangeFocus,disableClick:!0,menuItems:[(0,V.tZ)(na,{id:`${e.id}-background`,value:e.meta.background,onChange:this.handleChangeBackground})],editMode:m,children:[m&&(0,V.BX)(Co,{innerRef:t,position:"top",children:[(0,V.tZ)(Jo,{position:"top"}),(0,V.tZ)(yo,{onDelete:this.handleDeleteComponent}),(0,V.tZ)(Li,{onClick:this.handleChangeFocus,icon:(0,V.tZ)(I.Z.Cog,{iconSize:"xl"})})]}),(0,V.BX)(oa,{className:r()("grid-column",b.className),editMode:m,children:[m&&(0,V.tZ)($e,{component:e,parentComponent:e,...0===v.length?{dropToChild:!0}:{component:v[0]},depth:l,index:0,orientation:"column",onDrop:p,className:r()("empty-droptarget",v.length>0&&"droptarget-edge"),editMode:!0,children:({dropIndicatorProps:e})=>e&&(0,V.tZ)("div",{...e})}),0===v.length?(0,V.tZ)("div",{css:aa,children:(0,h.t)("Empty column")}):v.map(((t,i)=>(0,V.BX)(o.Fragment,{children:[(0,V.tZ)(La,{id:t,parentId:e.id,depth:l+1,index:i,availableColumnCount:e.meta.width,columnWidth:a,onResizeStart:d,onResize:c,onResizeStop:u,isComponentVisible:f,onChangeTab:g}),m&&(0,V.tZ)($e,{component:v,parentComponent:e,depth:l,index:i+1,orientation:"column",onDrop:p,className:r()("empty-droptarget",i===v.length-1&&"droptarget-edge"),editMode:!0,children:({dropIndicatorProps:e})=>e&&(0,V.tZ)("div",{...e})})]},t)))]})]})})})}}sa.propTypes=ra,sa.defaultProps={};const la=sa,da={id:w().string.isRequired,parentId:w().string.isRequired,component:P.cP.isRequired,depth:w().number.isRequired,parentComponent:P.cP.isRequired,index:w().number.isRequired,editMode:w().bool.isRequired,handleComponentDrop:w().func.isRequired,deleteComponent:w().func.isRequired},ca=a.iK.div`
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
`;class ha extends o.PureComponent{constructor(e){super(e),this.handleDeleteComponent=this.handleDeleteComponent.bind(this)}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:i}=this.props;e(t,i)}render(){const{component:e,depth:t,parentComponent:i,index:n,handleComponentDrop:r,editMode:o}=this.props;return(0,V.tZ)(ke,{component:e,parentComponent:i,orientation:"row",index:n,depth:t,onDrop:r,editMode:o,children:({dragSourceRef:e})=>(0,V.BX)("div",{ref:e,children:[o&&(0,V.tZ)(Co,{position:"left",children:(0,V.tZ)(yo,{onDelete:this.handleDeleteComponent})}),(0,V.tZ)(ca,{className:"dashboard-component dashboard-component-divider"})]})})}}ha.propTypes=da;const ua=ha;var pa=i(79271);const ma={id:w().string.isRequired,dashboardId:w().string.isRequired,parentId:w().string.isRequired,component:P.cP.isRequired,depth:w().number.isRequired,parentComponent:P.cP.isRequired,index:w().number.isRequired,editMode:w().bool.isRequired,handleComponentDrop:w().func.isRequired,deleteComponent:w().func.isRequired,updateComponents:w().func.isRequired},ga=a.iK.div`
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
`;class fa extends o.PureComponent{constructor(e){super(e),this.state={isFocused:!1},this.handleDeleteComponent=this.handleDeleteComponent.bind(this),this.handleChangeFocus=this.handleChangeFocus.bind(this),this.handleUpdateMeta=this.handleUpdateMeta.bind(this),this.handleChangeSize=this.handleUpdateMeta.bind(this,"headerSize"),this.handleChangeBackground=this.handleUpdateMeta.bind(this,"background"),this.handleChangeText=this.handleUpdateMeta.bind(this,"text")}handleChangeFocus(e){this.setState((()=>({isFocused:e})))}handleUpdateMeta(e,t){const{updateComponents:i,component:n}=this.props;t&&n.meta[e]!==t&&i({[n.id]:{...n,meta:{...n.meta,[e]:t}}})}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:i}=this.props;e(t,i)}render(){const{isFocused:e}=this.state,{dashboardId:t,component:i,depth:n,parentComponent:o,index:a,handleComponentDrop:s,editMode:l}=this.props,d=pa.Z.find((e=>e.value===(i.meta.headerSize||_.u_))),c=Qo.Z.find((e=>e.value===(i.meta.background||_.HE)));return(0,V.tZ)(ke,{component:i,parentComponent:o,orientation:"row",index:a,depth:n,onDrop:s,disableDragDrop:e,editMode:l,children:({dragSourceRef:e})=>(0,V.BX)("div",{ref:e,children:[l&&n<=2&&(0,V.tZ)(Co,{position:"left",children:(0,V.tZ)(Jo,{position:"left"})}),(0,V.tZ)(Ko,{onChangeFocus:this.handleChangeFocus,menuItems:[(0,V.tZ)(Bo,{id:`${i.id}-header-style`,options:pa.Z,value:i.meta.headerSize,onChange:this.handleChangeSize}),(0,V.tZ)(na,{id:`${i.id}-background`,value:i.meta.background,onChange:this.handleChangeBackground})],editMode:l,children:(0,V.BX)(ga,{className:r()("dashboard-component","dashboard-component-header",d.className,c.className),children:[l&&(0,V.tZ)(Co,{position:"top",children:(0,V.tZ)(yo,{onDelete:this.handleDeleteComponent})}),(0,V.tZ)(cn.Z,{title:i.meta.text,canEdit:l,onSaveTitle:this.handleChangeText,showTooltip:!1}),!l&&(0,V.tZ)(Ji,{id:i.id,dashboardId:t})]})})]})})}}fa.propTypes=ma,fa.defaultProps={};const va=fa;var ba=i(68122),ya=i(71894);const xa={id:w().string.isRequired,parentId:w().string.isRequired,component:P.cP.isRequired,parentComponent:P.cP.isRequired,index:w().number.isRequired,depth:w().number.isRequired,editMode:w().bool.isRequired,availableColumnCount:w().number.isRequired,columnWidth:w().number.isRequired,occupiedColumnCount:w().number.isRequired,onResizeStart:w().func.isRequired,onResize:w().func.isRequired,onResizeStop:w().func.isRequired,maxChildrenHeight:w().number.isRequired,handleComponentDrop:w().func.isRequired,deleteComponent:w().func.isRequired,updateComponents:w().func.isRequired},Ca=a.iK.div`
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
          z-index: ${Rn.oB};
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
      &.droptarget-side {
        z-index: ${Rn.oB};
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
`,Sa=e=>s.iv`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e.colors.text.label};
`;class wa extends o.PureComponent{constructor(e){super(e),this.handleMenuHover=e=>{const{isHovered:t}=e;this.setState((()=>({hoverMenuHovered:t})))},this.state={isFocused:!1,isInView:!1,hoverMenuHovered:!1},this.handleDeleteComponent=this.handleDeleteComponent.bind(this),this.handleUpdateMeta=this.handleUpdateMeta.bind(this),this.handleChangeBackground=this.handleUpdateMeta.bind(this,"background"),this.handleChangeFocus=this.handleChangeFocus.bind(this),this.handleMenuHover=this.handleMenuHover.bind(this),this.setVerticalEmptyContainerHeight=C()(this.setVerticalEmptyContainerHeight.bind(this),ba.o),this.containerRef=(0,o.createRef)(),this.observerEnabler=null,this.observerDisabler=null}componentDidMount(){if((0,d.cr)(d.TT.DashboardVirtualization)&&!(0,ya.b)()){this.observerEnabler=new IntersectionObserver((([e])=>{e.isIntersecting&&!this.state.isInView&&this.setState({isInView:!0})}),{rootMargin:"100% 0px"}),this.observerDisabler=new IntersectionObserver((([e])=>{!e.isIntersecting&&this.state.isInView&&this.setState({isInView:!1})}),{rootMargin:"400% 0px"});const e=this.containerRef.current;e&&(this.observerEnabler.observe(e),this.observerDisabler.observe(e),this.setVerticalEmptyContainerHeight())}}componentDidUpdate(){this.setVerticalEmptyContainerHeight()}setVerticalEmptyContainerHeight(){var e;const{containerHeight:t}=this.state,{editMode:i}=this.props,n=null==(e=this.containerRef.current)?void 0:e.clientHeight;i&&this.containerRef.current&&n!==t&&this.setState({containerHeight:n})}componentWillUnmount(){var e,t;null==(e=this.observerEnabler)||e.disconnect(),null==(t=this.observerDisabler)||t.disconnect()}handleChangeFocus(e){this.setState((()=>({isFocused:Boolean(e)})))}handleUpdateMeta(e,t){const{updateComponents:i,component:n}=this.props;t&&n.meta[e]!==t&&i({[n.id]:{...n,meta:{...n.meta,[e]:t}}})}handleDeleteComponent(){const{deleteComponent:e,component:t,parentId:i}=this.props;e(t.id,i)}render(){const{component:e,parentComponent:t,index:i,availableColumnCount:n,columnWidth:a,occupiedColumnCount:s,depth:l,onResizeStart:d,onResize:c,onResizeStop:u,handleComponentDrop:p,editMode:m,onChangeTab:g,isComponentVisible:f}=this.props,{containerHeight:v,hoverMenuHovered:b}=this.state,y=e.children||[],x=Qo.Z.find((t=>t.value===(e.meta.background||_.HE))),C=n-s;return(0,V.tZ)(ke,{component:e,parentComponent:t,orientation:"row",index:i,depth:l,onDrop:p,editMode:m,children:({dragSourceRef:t})=>(0,V.BX)(Ko,{isFocused:this.state.isFocused,onChangeFocus:this.handleChangeFocus,disableClick:!0,menuItems:[(0,V.tZ)(na,{id:`${e.id}-background`,value:x.value,onChange:this.handleChangeBackground})],editMode:m,children:[m&&(0,V.BX)(Co,{onHover:this.handleMenuHover,innerRef:t,position:"left",children:[(0,V.tZ)(Jo,{position:"left"}),(0,V.tZ)(yo,{onDelete:this.handleDeleteComponent}),(0,V.tZ)(Li,{onClick:this.handleChangeFocus,icon:(0,V.tZ)(I.Z.Cog,{iconSize:"xl"})})]}),(0,V.BX)(Ca,{className:r()("grid-row",0===y.length&&"grid-row--empty",b&&"grid-row--hovered",x.className),ref:this.containerRef,editMode:m,children:[m&&(0,V.tZ)($e,{...0===y.length?{component:e,parentComponent:e,dropToChild:!0}:{component:y[0],parentComponent:e},depth:l,index:0,orientation:"row",onDrop:p,className:r()("empty-droptarget","empty-droptarget--vertical",y.length>0&&"droptarget-side"),editMode:!0,style:{height:y.length>0?v:"100%",...y.length>0&&{width:16}},children:({dropIndicatorProps:e})=>e&&(0,V.tZ)("div",{...e})}),0===y.length&&(0,V.tZ)("div",{css:Sa,children:(0,h.t)("Empty row")}),y.length>0&&y.map(((t,i)=>(0,V.BX)(o.Fragment,{children:[(0,V.tZ)(La,{id:t,parentId:e.id,depth:l+1,index:i,availableColumnCount:C,columnWidth:a,onResizeStart:d,onResize:c,onResizeStop:u,isComponentVisible:f,onChangeTab:g,isInView:this.state.isInView},t),m&&(0,V.tZ)($e,{component:y,parentComponent:e,depth:l,index:i+1,orientation:"row",onDrop:p,className:r()("empty-droptarget","empty-droptarget--vertical",0===C&&i===y.length-1&&"droptarget-side"),editMode:!0,style:{height:v,...0===C&&i===y.length-1&&{width:16}},children:({dropIndicatorProps:e})=>e&&(0,V.tZ)("div",{...e})})]},t)))]})]})})}}wa.propTypes=xa;const Za=wa;var Ra=i(94301);const ka="RENDER_TAB",$a="RENDER_TAB_CONTENT",Ta={dashboardId:w().number.isRequired,id:w().string.isRequired,parentId:w().string.isRequired,component:P.cP.isRequired,parentComponent:P.cP.isRequired,index:w().number.isRequired,depth:w().number.isRequired,renderType:w().oneOf([ka,$a]).isRequired,onDropOnTab:w().func,onHoverTab:w().func,editMode:w().bool.isRequired,canEdit:w().bool.isRequired,availableColumnCount:w().number,columnWidth:w().number,onResizeStart:w().func,onResize:w().func,onResizeStop:w().func,handleComponentDrop:w().func.isRequired,updateComponents:w().func.isRequired,setDirectPathToChild:w().func.isRequired,setEditMode:w().func.isRequired},Da={availableColumnCount:0,columnWidth:0,onDropOnTab(){},onHoverTab(){},onResizeStart(){},onResize(){},onResizeStop(){}},Ma=a.iK.div`
  ${({isHighlighted:e,theme:{gridUnit:t,colors:i}})=>`\n    padding: ${t}px ${2*t}px;\n    margin: ${-t}px ${-2*t}px;\n    transition: box-shadow 0.2s ease-in-out;\n    ${e&&`box-shadow: 0 0 ${t}px ${i.primary.light1};`}\n  `}
`,Ia=e=>e.dropIndicatorProps&&(0,V.tZ)("div",{...e.dropIndicatorProps});class Fa extends o.PureComponent{constructor(e){super(e),this.handleChangeText=this.handleChangeText.bind(this),this.handleDrop=this.handleDrop.bind(this),this.handleOnHover=this.handleOnHover.bind(this),this.handleTopDropTargetDrop=this.handleTopDropTargetDrop.bind(this),this.handleChangeTab=this.handleChangeTab.bind(this)}handleChangeTab({pathToTabIndex:e}){this.props.setDirectPathToChild(e)}handleChangeText(e){const{updateComponents:t,component:i}=this.props;e&&e!==i.meta.text&&t({[i.id]:{...i,meta:{...i.meta,text:e}}})}handleDrop(e){this.props.handleComponentDrop(e),this.props.onDropOnTab(e)}handleOnHover(){this.props.onHoverTab()}handleTopDropTargetDrop(e){e&&this.props.handleComponentDrop({...e,destination:{...e.destination,index:0}})}shouldDropToChild(e){return e.type!==E.gn}renderTabContent(){const{component:e,depth:t,availableColumnCount:i,columnWidth:n,onResizeStart:a,onResize:s,onResizeStop:l,editMode:d,isComponentVisible:c,canEdit:u,setEditMode:p,dashboardId:m}=this.props,g=0===e.children.length;return(0,V.BX)("div",{className:"dashboard-component-tabs-content",children:[d&&(0,V.tZ)($e,{component:e,orientation:"column",index:0,depth:t,onDrop:0===e.children.length?this.handleTopDropTargetDrop:this.handleDrop,editMode:!0,className:r()({"empty-droptarget":!0,"empty-droptarget--full":0===e.children.length}),dropToChild:0===e.children.length,children:Ia}),g&&(0,V.tZ)(Ra.x3,{title:d?(0,h.t)("Drag and drop components to this tab"):(0,h.t)("There are no components added to this tab"),description:u&&(d?(0,V.BX)("span",{children:[(0,h.t)("You can")," ",(0,V.tZ)("a",{href:`/chart/add?dashboard_id=${m}`,rel:"noopener noreferrer",target:"_blank",children:(0,h.t)("create a new chart")})," ",(0,h.t)("or use existing ones from the panel on the right")]}):(0,V.BX)("span",{children:[(0,h.t)("You can add the components in the")," ",(0,V.tZ)("span",{role:"button",tabIndex:0,onClick:()=>p(!0),children:(0,h.t)("edit mode")})]})),image:"chart.svg"}),e.children.map(((r,h)=>(0,V.BX)(o.Fragment,{children:[(0,V.tZ)(La,{id:r,parentId:e.id,depth:t,index:h,onDrop:this.handleDrop,onHover:this.handleOnHover,availableColumnCount:i,columnWidth:n,onResizeStart:a,onResize:s,onResizeStop:l,isComponentVisible:c,onChangeTab:this.handleChangeTab}),d&&(0,V.tZ)($e,{component:e,orientation:"column",index:h+1,depth:t,onDrop:this.handleDrop,editMode:!0,className:"empty-droptarget",children:Ia})]},r)))]})}renderTab(){const{component:e,parentComponent:t,index:i,depth:n,editMode:r,isFocused:o,isHighlighted:a}=this.props;return(0,V.tZ)(Te,{component:e,parentComponent:t,orientation:"column",index:i,depth:n,onDrop:this.handleDrop,onHover:this.handleOnHover,editMode:r,dropToChild:this.shouldDropToChild,children:({dropIndicatorProps:t,dragSourceRef:n})=>(0,V.BX)(Ma,{isHighlighted:a,className:"dragdroppable-tab",ref:n,children:[(0,V.tZ)(cn.Z,{title:e.meta.text,defaultTitle:e.meta.defaultText,placeholder:e.meta.placeholder,canEdit:r&&o,onSaveTitle:this.handleChangeText,showTooltip:!1,editing:r&&o}),!r&&(0,V.tZ)(Ji,{id:e.id,dashboardId:this.props.dashboardId,placement:i>=5?"left":"right"}),t&&(0,V.tZ)("div",{...t})]})})}render(){const{renderType:e}=this.props;return e===ka?this.renderTab():this.renderTabContent()}}Fa.propTypes=Ta,Fa.defaultProps=Da;const Ea=(0,u.$j)((function(e){return{canEdit:e.dashboardInfo.dash_edit_perm}}),(function(e){return(0,f.DE)({setEditMode:Bi.Mb},e)}))(Fa);function _a({currentComponent:e,directPathToChild:t=[]}){if(!e||0===t.length||-1===t.indexOf(e.id))return-1;const i=t.findIndex((t=>t===e.id)),n=t[i+1];return e.children.indexOf(n)>=0?e.children.findIndex((e=>e===n)):-1}function Pa(e,t){const i=(e.parents||[]).slice();return i.push(e.id),i.push(e.children[t]),i}function za(e=[]){if(e.length>0){const t=e.slice();for(;t.length;){const e=t.pop(),i=e&&e.split("-")[0];if(!_.Ep.includes(i))return e}}return null}const Ua={id:w().string.isRequired,parentId:w().string.isRequired,component:P.cP.isRequired,parentComponent:P.cP.isRequired,index:w().number.isRequired,depth:w().number.isRequired,renderTabContent:w().bool,editMode:w().bool.isRequired,renderHoverMenu:w().bool,directPathToChild:w().arrayOf(w().string),activeTabs:w().arrayOf(w().string),logEvent:w().func.isRequired,setActiveTab:w().func,availableColumnCount:w().number,columnWidth:w().number,onResizeStart:w().func,onResize:w().func,onResizeStop:w().func,createComponent:w().func.isRequired,handleComponentDrop:w().func.isRequired,onChangeTab:w().func.isRequired,deleteComponent:w().func.isRequired,updateComponents:w().func.isRequired},Oa={renderTabContent:!0,renderHoverMenu:!0,availableColumnCount:0,columnWidth:0,activeTabs:[],directPathToChild:[],setActiveTab(){},onResizeStart(){},onResize(){},onResizeStop(){}},Ba=a.iK.div`
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
`;class Na extends o.PureComponent{constructor(e){super(e),this.getTabInfo=e=>{var t;let i=Math.max(0,_a({currentComponent:e.component,directPathToChild:e.directPathToChild}));0===i&&null!=(t=e.activeTabs)&&t.length&&e.component.children.forEach(((t,n)=>{0===i&&e.activeTabs.includes(t)&&(i=n)}));const{children:n}=e.component,r=n[i];return{tabIndex:i,activeKey:r}},this.showDeleteConfirmModal=e=>{const{component:t,deleteComponent:i}=this.props;T.xT.confirm({title:(0,h.t)("Delete dashboard tab?"),content:(0,V.BX)("span",{children:[(0,h.t)("Deleting a tab will remove all content within it. You may still reverse this action with the")," ",(0,V.tZ)("b",{children:(0,h.t)("undo")})," ",(0,h.t)("button (cmd + z) until you save your changes.")]}),onOk:()=>{i(e,t.id);const n=t.children.indexOf(e);this.handleDeleteTab(n)},okType:"danger",okText:(0,h.t)("DELETE"),cancelText:(0,h.t)("CANCEL"),icon:null})},this.handleEdit=(e,t)=>{const{component:i,createComponent:n}=this.props;"add"===t?(null==e||null==e.stopPropagation||e.stopPropagation(),n({destination:{id:i.id,type:i.type,index:i.children.length},dragging:{id:_.Xk,type:E.gn}})):"remove"===t&&this.showDeleteConfirmModal(e)};const{tabIndex:t,activeKey:i}=this.getTabInfo(e);this.state={tabIndex:t,activeKey:i},this.handleClickTab=this.handleClickTab.bind(this),this.handleDeleteComponent=this.handleDeleteComponent.bind(this),this.handleDeleteTab=this.handleDeleteTab.bind(this),this.handleDropOnTab=this.handleDropOnTab.bind(this),this.handleDrop=this.handleDrop.bind(this)}componentDidMount(){this.props.setActiveTab(this.state.activeKey)}componentDidUpdate(e,t){t.activeKey!==this.state.activeKey&&this.props.setActiveTab(this.state.activeKey,t.activeKey)}UNSAFE_componentWillReceiveProps(e){const t=Math.max(0,e.component.children.length-1),i=this.props.component.children,n=e.component.children;if(this.state.tabIndex>t&&this.setState((()=>({tabIndex:t}))),e.dashboardId!==this.props.dashboardId){const{tabIndex:t,activeKey:i}=this.getTabInfo(e);this.setState((()=>({tabIndex:t,activeKey:i})))}if(e.isComponentVisible){const t=za(e.directPathToChild),r=za(this.props.directPathToChild);if(t!==r||t===r&&i!==n){const t=_a({currentComponent:e.component,directPathToChild:e.directPathToChild});t>-1&&t!==this.state.tabIndex&&this.setState((()=>({tabIndex:t,activeKey:n[t]})))}}}handleClickTab(e){const{component:t}=this.props,{children:i}=t;if(e!==this.state.tabIndex){const i=Pa(t,e),n=i[i.length-1];this.props.logEvent(at.Iq,{target_id:n,index:e}),this.props.onChangeTab({pathToTabIndex:i})}this.setState((()=>({activeKey:i[e]})))}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:i}=this.props;e(t,i)}handleDeleteTab(e){this.state.tabIndex===e&&this.handleClickTab(Math.max(0,e-1))}handleDropOnTab(e){const{component:t}=this.props,{destination:i}=e;if(i){const e=i.id===t.id?i.index:t.children.indexOf(i.id);e>-1&&setTimeout((()=>{this.handleClickTab(e)}),30)}}handleDrop(e){e.dragging.type!==E.yR&&this.props.handleComponentDrop(e)}render(){const{depth:e,component:t,parentComponent:i,index:n,availableColumnCount:r,columnWidth:o,onResizeStart:a,onResize:s,onResizeStop:l,renderTabContent:d,renderHoverMenu:c,isComponentVisible:h,editMode:u,nativeFilters:p}=this.props,{children:m}=t,{tabIndex:f,activeKey:v}=this.state;let b;const y=(null==p?void 0:p.focusedFilterId)||(null==p?void 0:p.hoveredFilterId);var x;return y&&(b=null==(x=p.filters[y])?void 0:x.tabsInScope),(0,V.tZ)(ke,{component:t,parentComponent:i,orientation:"row",index:n,depth:e,onDrop:this.handleDrop,editMode:u,children:({dragSourceRef:i})=>(0,V.BX)(Ba,{className:"dashboard-component dashboard-component-tabs",children:[u&&c&&(0,V.BX)(Co,{innerRef:i,position:"left",children:[(0,V.tZ)(Jo,{position:"left"}),(0,V.tZ)(yo,{onDelete:this.handleDeleteComponent})]}),(0,V.tZ)(g.cl,{id:t.id,activeKey:v,onChange:e=>{this.handleClickTab(m.indexOf(e))},onEdit:this.handleEdit,type:u?"editable-card":"card",children:m.map(((i,n)=>{var c;return(0,V.tZ)(g.cl.TabPane,{tab:(0,V.tZ)(La,{id:i,parentId:t.id,depth:e,index:n,renderType:ka,availableColumnCount:r,columnWidth:o,onDropOnTab:this.handleDropOnTab,onHoverTab:()=>this.handleClickTab(n),isFocused:v===i,isHighlighted:v!==i&&(null==(c=b)?void 0:c.includes(i))}),children:d&&(0,V.tZ)(La,{id:i,parentId:t.id,depth:e,index:n,renderType:$a,availableColumnCount:r,columnWidth:o,onResizeStart:a,onResize:s,onResizeStop:l,onDropOnTab:this.handleDropOnTab,isComponentVisible:f===n&&h})},i)}))})]})})}}Na.propTypes=Ua,Na.defaultProps=Oa;const qa=(0,u.$j)((function(e){return{nativeFilters:e.nativeFilters,activeTabs:e.dashboardState.activeTabs,directPathToChild:e.dashboardState.directPathToChild}}))(Na),Va={[E.dW]:({id:e,parentId:t,component:i,parentComponent:n,index:s,depth:l,availableColumnCount:d,columnWidth:c,onResizeStart:h,onResize:p,onResizeStop:m,editMode:g,isComponentVisible:f,dashboardId:v,fullSizeChartId:b,getComponentById:y=(()=>{}),deleteComponent:x,updateComponents:C,handleComponentDrop:S,setFullSizeChartId:w,isInView:Z})=>{const{chartId:R}=i.meta,k=b===R,$=(e=>{const t=(0,a.Fg)(),i=(0,u.v9)((e=>e.nativeFilters)),n=((e,t)=>{if(!e.focusedFilterField)return null;const{chartId:i,column:n}=e.focusedFilterField;return{chartId:i,scope:t[i].scopes[n]}})((0,u.v9)((e=>e.dashboardState)),(0,u.v9)((e=>e.dashboardFilters))),r=(null==i?void 0:i.focusedFilterId)||(null==i?void 0:i.hoveredFilterId);if(!n&&!r)return{};const o={borderColor:t.colors.primary.light2,opacity:1,boxShadow:`0px 0px ${2*t.gridUnit}px ${t.colors.primary.base}`,pointerEvents:"auto"};var s,l;if(r){if(null!=(s=i.filters[r])&&null!=(l=s.chartsInScope)&&l.includes(e))return o}else if(e===(null==n?void 0:n.chartId)||(0,Gt.Q1)({filterScope:null==n?void 0:n.scope}).includes(e))return o;return{opacity:.3,pointerEvents:"none"}})(R),T=(0,u.v9)((e=>e.dashboardState)),[D,M]=(0,o.useState)({}),[I,F]=(0,o.useState)(),[P,z]=(0,o.useState)(),[U,O]=(0,o.useState)(0),B=(0,o.useMemo)((()=>{var e;return null!=(e=null==T?void 0:T.directPathToChild)?e:[]}),[T]),N=(0,o.useMemo)((()=>{var e;return null!=(e=null==T?void 0:T.directPathLastUpdated)?e:0}),[T]),q=(0,o.useMemo)((()=>_o(B)),[B]);(0,o.useEffect)((()=>{const{label:e,chart:t}=q;N!==U&&i.id===t&&(O(N),F(i.id),z(e))}),[i,U,N,q]),(0,o.useEffect)((()=>{let e;return I&&(e=setTimeout((()=>{F(void 0),z(void 0)}),2e3)),()=>{e&&clearTimeout(e)}}),[I]);const A=(0,o.useMemo)((()=>{var e,t,r;const o=null==(e=y(null==(r=n.parents)?void 0:r.find((e=>e.startsWith(E.BA)))))||null==(t=e.meta)?void 0:t.width;let a=i.meta.width||_.cx;return n.type===E.BA?a=n.meta.width||_.cx:o&&a>o&&(a=o),a}),[i,y,n.meta.width,n.parents,n.type]),{chartWidth:K,chartHeight:j}=(0,o.useMemo)((()=>{let e=0,t=0;return k?(e=window.innerWidth-32,t=window.innerHeight-32):(e=Math.floor(A*c+(A-1)*_.es-32),t=Math.floor(i.meta.height*_.cd-32)),{chartWidth:e,chartHeight:t}}),[c,i,k,A]),L=(0,o.useCallback)((()=>{x(e,t)}),[x,e,t]),X=(0,o.useCallback)((e=>{C({[i.id]:{...i,meta:{...i.meta,sliceNameOverride:e}}})}),[i,C]),H=(0,o.useCallback)((()=>{w(k?null:R)}),[R,k,w]),W=(0,o.useCallback)(((e,t)=>{M((i=>({...i,[e]:t})))}),[]);return(0,V.tZ)(ke,{component:i,parentComponent:n,orientation:n.type===E.Os?"column":"row",index:s,depth:l,onDrop:S,disableDragDrop:!1,editMode:g,children:({dragSourceRef:e})=>(0,V.tZ)(Eo,{id:i.id,adjustableWidth:n.type===E.Os,adjustableHeight:!0,widthStep:c,widthMultiple:A,heightStep:_.cd,heightMultiple:i.meta.height,minWidthMultiple:_.cx,minHeightMultiple:_.AA,maxWidthMultiple:d+A,onResizeStart:h,onResize:p,onResizeStop:m,editMode:g,children:(0,V.BX)("div",{ref:e,style:$,css:k?Po:void 0,className:r()("dashboard-component","dashboard-component-chart-holder",`dashboard-chart-id-${R}`,I?"fade-in":"fade-out"),children:[!g&&(0,V.tZ)(Ji,{id:i.id,scrollIntoView:I===i.id}),!!I&&(0,V.tZ)("style",{children:`label[for=${P}] + .Select .Select__control {\n                    border-color: #00736a;\n                    transition: border-color 1s ease-in-out;\n                  }`}),(0,V.tZ)(bo,{componentId:i.id,id:i.meta.chartId,dashboardId:v,width:K,height:j,sliceName:i.meta.sliceNameOverride||i.meta.sliceName||"",updateSliceName:X,isComponentVisible:f,handleToggleFullSize:H,isFullSize:k,setControlValue:W,extraControls:D,isInView:Z}),g&&(0,V.tZ)(Co,{position:"top",children:(0,V.tZ)("div",{children:(0,V.tZ)(yo,{onDelete:L})})})]})})})},[E.xh]:Yo,[E.BA]:la,[E.hE]:ua,[E.Nc]:va,[E.Os]:Za,[E.gn]:Ea,[E.yR]:qa,[E.t]:({component:e,parentComponent:t,index:i,depth:n,handleComponentDrop:a,editMode:s,columnWidth:l,availableColumnCount:d,onResizeStart:c,onResizeStop:p,onResize:m,deleteComponent:g,parentId:f,updateComponents:v,id:b})=>{const y=t.type===E.BA?t.meta.width||_.cx:e.meta.width||_.cx,x=()=>{g(b,f)},C=Qo.Z.find((t=>t.value===(e.meta.background||_.HE))),{Component:S}=Ae.get(e.meta.componentKey),w=(0,u.v9)((({nativeFilters:e,dataMask:t})=>({nativeFilters:e,dataMask:t})));return(0,V.tZ)(ke,{component:e,parentComponent:t,orientation:t.type===E.Os?"column":"row",index:i,depth:n,onDrop:a,editMode:s,children:({dragSourceRef:i})=>(0,V.tZ)(Ko,{menuItems:[(0,V.tZ)(na,{id:`${e.id}-background`,value:e.meta.background,onChange:t=>{return"background",i=t,void v({[e.id]:{...e,meta:{...e.meta,background:i}}});var i}})],editMode:s,children:(0,V.tZ)("div",{className:r()("dashboard-component",`dashboard-${e.componentKey}`,null==C?void 0:C.className),id:e.id,children:(0,V.tZ)(Eo,{id:e.id,adjustableWidth:t.type===E.Os,widthStep:l,widthMultiple:y,heightStep:_.cd,adjustableHeight:!1,heightMultiple:e.meta.height,minWidthMultiple:_.cx,minHeightMultiple:_.cx,maxWidthMultiple:d+y,onResizeStart:c,onResize:m,onResizeStop:p,children:(0,V.BX)("div",{ref:i,className:"dashboard-component",children:[s&&(0,V.tZ)(Co,{position:"top",children:(0,V.tZ)(yo,{onDelete:x})}),(0,V.tZ)(o.Suspense,{fallback:(0,V.tZ)("div",{children:(0,h.t)("Loading...")}),children:(0,V.tZ)(S,{dashboardData:w})})]})})})})})}};var Aa=i(72673);const Ka={id:w().string,parentId:w().string,depth:w().number,index:w().number,renderHoverMenu:w().bool,renderTabContent:w().bool,onChangeTab:w().func,component:P.cP.isRequired,parentComponent:P.cP.isRequired,createComponent:w().func.isRequired,deleteComponent:w().func.isRequired,updateComponents:w().func.isRequired,handleComponentDrop:w().func.isRequired,logEvent:w().func.isRequired,directPathToChild:w().arrayOf(w().string),directPathLastUpdated:w().number,dashboardId:w().number.isRequired,isComponentVisible:w().bool};class ja extends o.PureComponent{render(){const{component:e}=this.props,t=e?Va[e.type]:null;return t?(0,V.tZ)(t,{...this.props}):null}}ja.propTypes=Ka,ja.defaultProps={isComponentVisible:!0};const La=(0,u.$j)((function({dashboardLayout:e,dashboardState:t,dashboardInfo:i},n){const r=e.present,{id:o,parentId:a}=n,s=r[o],l={component:s,getComponentById:e=>r[e],parentComponent:r[a],editMode:t.editMode,filters:(0,Gt.De)(),dashboardId:i.id,dashboardInfo:i,fullSizeChartId:t.fullSizeChartId};if(s){const e=s.type;if(e===E.Os||e===E.BA){const{occupiedWidth:t,minimumWidth:i}=(0,Aa.Z)({id:o,components:r});e===E.Os&&(l.occupiedColumnCount=t),e===E.BA&&(l.minColumnWidth=i)}}return l}),(function(e){return(0,f.DE)({addDangerToast:qi.Gb,createComponent:Ni.LM,deleteComponent:Ni.v7,updateComponents:Ni.WZ,handleComponentDrop:Ni._p,setDirectPathToChild:Bi.E2,setFullSizeChartId:Bi.zL,setActiveTab:Bi.r7,logEvent:Vi.logEvent},e)}))(ja);var Xa=i(90057),Ha=i(8868),Wa=i(6954);const Ya=(e,t=!1)=>(i,n=!1)=>{const r=n||t;return!i&&e?r?e:{}:i&&!e?r?i:{}:i||e?r?`${e}__${i}`:{}:(console.warn('testWithId function has missed "prefix" and "id" params'),r?"":{})},Ga=e=>Object.values(e).reduce(((e,t)=>({...e,[t.id]:t.extraFormData})),{}),Ja=(e,t)=>{var i;const n=null==t?void 0:t.value;return(null==(i=e.controlValues)?void 0:i.enableEmptyFilter)&&null==n},Qa=()=>(0,u.v9)((e=>{const{charts:t,datasources:i}=e;return Object.keys(e.charts).reduce(((e,n)=>{var r,o;const a=i[null==(r=t[n])||null==(o=r.form_data)?void 0:o.datasource];return{...e,[n]:a?a.verbose_map:{}}}),{})})),es=Ya("filter-bar");var ts=i(92242);const is=()=>{const e=(0,u.v9)((e=>{var t;return null==(t=e.dashboardState)?void 0:t.preselectNativeFilters})),t=(0,u.v9)((e=>e.nativeFilters.filters));return(0,o.useMemo)((()=>Object.entries(t).reduce(((t,[i,n])=>({...t,[i]:{...n,preselect:null==e?void 0:e[i]}})),{})),[t,e])},ns=()=>{const e=(0,u.v9)((e=>e.dataMask));return(0,o.useMemo)((()=>Object.values(e).filter((e=>String(e.id).startsWith(ts.rW))).reduce(((e,t)=>({...e,[t.id]:t})),{})),[e])};var rs=i(81788);const os=e=>s.iv`
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
`,as=(e,t)=>s.iv`
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
`,ss=e=>s.iv`
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
`,ls=({width:e=Rn.I6,onApply:t,onClearAll:i,dataMaskApplied:n,dataMaskSelected:r,isApplyDisabled:a,filterBarOrientation:s=ft.Bp.Vertical})=>{const l=(0,o.useMemo)((()=>Object.values(n).some((e=>{var t,i,n;return(0,Cn.Z)(null==(t=r[e.id])||null==(i=t.filterState)?void 0:i.value)||!r[e.id]&&(0,Cn.Z)(null==(n=e.filterState)?void 0:n.value)}))),[n,r]),d=s===ft.Bp.Vertical;return(0,V.BX)("div",{css:t=>[os(t),d?as(t,e):ss(t)],children:[(0,V.tZ)(M.Z,{disabled:a,buttonStyle:"primary",htmlType:"submit",className:"filter-apply-button",onClick:t,...es("apply-button"),children:d?(0,h.t)("Apply filters"):(0,h.t)("Apply")}),(0,V.tZ)(M.Z,{disabled:!l,buttonStyle:"link",buttonSize:"small",className:"filter-clear-all-button",onClick:i,...es("clear-button"),children:(0,h.t)("Clear all")})]})};var ds,cs=i(90731),hs=(ds=function(e,t){return ds=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])},ds(e,t)},function(e,t){function i(){this.constructor=e}ds(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),us="html",ps="svg",ms=function(e,t){var i,n,r,o={};if(e===us)r=document.createElement("div");else{if(e!==ps)throw new Error('Invalid element type "'+e+'" for createPortalNode: must be "html" or "svg".');r=document.createElementNS("http://www.w3.org/2000/svg","g")}if(t&&"object"==typeof t)for(var a=0,s=Object.entries(t.attributes);a<s.length;a++){var l=s[a],d=l[0],c=l[1];r.setAttribute(d,c)}var h={element:r,elementType:e,setPortalProps:function(e){o=e},getInitialPortalProps:function(){return o},mount:function(t,r){if(r!==n){if(h.unmount(),t!==i&&!function(e,t){if(t===us)return e instanceof HTMLElement;if(t===ps)return e instanceof SVGElement;throw new Error('Unrecognized element type "'+t+'" for validateElementType.')}(t,e))throw new Error('Invalid element type for portal: "'+e+'" portalNodes must be used with '+e+" elements, but OutPortal is within <"+t.tagName+">.");t.replaceChild(h.element,r),i=t,n=r}},unmount:function(e){e&&e!==n||i&&n&&(i.replaceChild(n,h.element),i=void 0,n=void 0)}};return h},gs=function(e){function t(t){var i=e.call(this,t)||this;return i.addPropsChannel=function(){Object.assign(i.props.node,{setPortalProps:function(e){i.setState({nodeProps:e})}})},i.state={nodeProps:i.props.node.getInitialPortalProps()},i}return hs(t,e),t.prototype.componentDidMount=function(){this.addPropsChannel()},t.prototype.componentDidUpdate=function(){this.addPropsChannel()},t.prototype.render=function(){var e=this,t=this.props,i=t.children,n=t.node;return cs.createPortal(o.Children.map(i,(function(t){return o.isValidElement(t)?o.cloneElement(t,e.state.nodeProps):t})),n.element)},t}(o.PureComponent),fs=function(e){function t(t){var i=e.call(this,t)||this;return i.placeholderNode=o.createRef(),i.passPropsThroughPortal(),i}return hs(t,e),t.prototype.passPropsThroughPortal=function(){var e=Object.assign({},this.props,{node:void 0});this.props.node.setPortalProps(e)},t.prototype.componentDidMount=function(){var e=this.props.node;this.currentPortalNode=e;var t=this.placeholderNode.current,i=t.parentNode;e.mount(i,t),this.passPropsThroughPortal()},t.prototype.componentDidUpdate=function(){var e=this.props.node;this.currentPortalNode&&e!==this.currentPortalNode&&(this.currentPortalNode.unmount(this.placeholderNode.current),this.currentPortalNode.setPortalProps({}),this.currentPortalNode=e);var t=this.placeholderNode.current,i=t.parentNode;e.mount(i,t),this.passPropsThroughPortal()},t.prototype.componentWillUnmount=function(){var e=this.props.node;e.unmount(this.placeholderNode.current),e.setPortalProps({})},t.prototype.render=function(){return o.createElement("div",{ref:this.placeholderNode})},t}(o.PureComponent),vs=ms.bind(null,us);ms.bind(null,ps);const bs=[];function ys(){return(0,u.v9)((e=>{var t,i;return(null==(t=e.dashboardInfo)||null==(i=t.metadata)?void 0:i.native_filter_configuration)||bs}))}function xs(){return(0,u.v9)((e=>{var t;return null==(t=e.dashboardLayout)?void 0:t.present}))}function Cs(){const e=xs();return(0,o.useMemo)((()=>Object.values(e).some((e=>e.type===E.gn))),[e])}function Ss(){const e=(0,u.v9)((e=>{var t;return null==(t=e.dashboardState)?void 0:t.activeTabs})),t=function(){const e=xs();return t=>{const i=Object.values(e).find((e=>{var i;return(null==(i=e.meta)?void 0:i.chartId)===t}));return null==i?void 0:i.parents.filter((t=>e[t].type===E.gn))}}();return i=>{var n;return(0,Pr.nY)(i)||"chartsInScope"in i&&(null==(n=i.chartsInScope)?void 0:n.some((i=>{const n=t(i);return 0===(null==n?void 0:n.length)||(null==n?void 0:n.every((t=>e.includes(t))))})))}}function ws(e){const t=Cs(),i=Ss();return(0,o.useMemo)((()=>{let n=[];const r=[];return t?e.forEach((e=>{i(e)?n.push(e):r.push(e)})):n=e,[n,r]}),[e,t,i])}var Zs=i(99612);const Rs=(0,o.forwardRef)((({items:e,onOverflowingStateChange:t,dropdownContent:i,dropdownRef:n,dropdownStyle:r={},dropdownTriggerCount:l,dropdownTriggerIcon:d,dropdownTriggerText:c=(0,h.t)("More"),dropdownTriggerTooltip:u=null,forceRender:p,style:m},g)=>{const f=(0,a.Fg)(),{ref:v,width:b=0}=(0,Zs.NB)(),y=(0,xr.D)(b)||0,{current:x}=v,[C,S]=(0,o.useState)([]),[w,Z]=(0,o.useState)(!1),[R,k]=(0,o.useState)(-1);let $=(0,o.useRef)(null);n&&($=n);const[T,D]=(0,o.useState)(!1),F=e=>e.reduce((([e,t],i)=>(e.push({id:i.id,element:(0,o.cloneElement)(i.element,{key:i.id})}),t.push(i.id),[e,t])),[[],[]]),[E,_]=(0,o.useMemo)((()=>F(e.slice(0,-1!==R?R:e.length))),[e,R]),[P,z]=(0,o.useMemo)((()=>-1!==R?F(e.slice(R)):[[],[]]),[e,R]);(0,o.useLayoutEffect)((()=>{const t=null==x?void 0:x.children.item(0);if(t){const{children:i}=t,n=Array.from(i);if(C.length!==e.length){if(n.length!==e.length)return void k(-1);S(n.map((e=>e.getBoundingClientRect().width)))}const r=n.findIndex((e=>e.getBoundingClientRect().right>t.getBoundingClientRect().right+1));let o=-1===r&&P.length>0?e.length-P.length:r;if(b>y){const t=null==x?void 0:x.children.item(1),i=(null==t?void 0:t.getBoundingClientRect().right)||0,r=((null==x?void 0:x.getBoundingClientRect().right)||0)-i;let a=0;for(let t=n.length;t<e.length&&(a+=C[t],a<=r);t+=1)o=t+1}k(o)}}),[x,e.length,C,P.length,y,b]),(0,o.useEffect)((()=>{t&&t({notOverflowed:_,overflowed:z})}),[_,t,z]);const U=-1!==R?e.length-R:0,O=(0,o.useMemo)((()=>i||U?(0,V.tZ)("div",{css:s.iv`
              display: flex;
              flex-direction: column;
              gap: ${4*f.gridUnit}px;
            `,style:r,ref:$,children:i?i(P):P.map((e=>e.element))}):null),[i,U,f.gridUnit,r,P]);return(0,o.useLayoutEffect)((()=>{w&&setTimeout((()=>{$.current&&D($.current.scrollHeight>500)}),100)}),[w]),(0,o.useImperativeHandle)(g,(()=>({...v.current,open:()=>Z(!0)})),[v]),(0,o.useEffect)((()=>(document.onscroll=w?()=>Z(!1):null,()=>{document.onscroll=null})),[w]),(0,V.BX)("div",{ref:v,css:s.iv`
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
              `}),(0,V.tZ)(Hi.J,{content:O,trigger:"click",visible:w,onVisibleChange:e=>Z(e),placement:"bottom",forceRender:p,children:(0,V.tZ)(N.u,{title:u,children:(0,V.BX)(M.Z,{buttonStyle:"secondary",children:[d,c,(0,V.tZ)(Cr.Z,{count:null!=l?l:U,color:(null!=l?l:U)>0?f.colors.primary.base:f.colors.grayscale.light1,showZero:!0,css:s.iv`
                      margin-left: ${2*f.gridUnit}px;
                    `}),(0,V.tZ)(I.Z.DownOutlined,{iconSize:"m",iconColor:f.colors.grayscale.light1,css:s.iv`
                      .anticon {
                        display: flex;
                      }
                    `})]})})})]})]})})),ks=({filtersOutOfScope:e,renderer:t,hasTopMargin:i,horizontalOverflow:n,forceRender:r=!1})=>(0,V.tZ)(T.Ol,{ghost:!0,bordered:!0,expandIconPosition:"right",collapsible:0===e.length?"disabled":void 0,css:e=>n?(0,s.iv)("&.ant-collapse>.ant-collapse-item{&>.ant-collapse-header{padding:0;&>.ant-collapse-arrow{right:0;padding:0;}}& .ant-collapse-content-box{padding:",4*e.gridUnit,"px 0 0;margin-bottom:",-4*e.gridUnit,"px;}}",""):(0,s.iv)("&.ant-collapse{margin-top:",i?6*e.gridUnit:0,"px;&>.ant-collapse-item{&>.ant-collapse-header{padding-left:0;padding-bottom:",2*e.gridUnit,"px;&>.ant-collapse-arrow{right:",e.gridUnit,"px;}}& .ant-collapse-content-box{padding:",4*e.gridUnit,"px 0 0;}}}",""),children:(0,V.tZ)(T.Ol.Panel,{forceRender:r,header:(0,V.tZ)("span",{css:e=>(0,s.iv)("font-size:",e.typography.sizes.s,"px;",""),children:(0,h.t)("Filters out of scope (%d)",e.length)}),children:e.map(t)},"1")});var $s=i(3297),Ts=i(28368),Ds=i.n(Ts),Ms=i(88274);const Is=a.iK.div`
  display: flex;
  flex-direction: row;
  background-color: ${({level:e,theme:t})=>t.colors[e].light2};
  border-radius: ${({theme:e})=>e.borderRadius}px;
  border: 1px solid ${({level:e,theme:t})=>t.colors[e].base};
  color: ${({level:e,theme:t})=>t.colors[e].dark2};
  padding: ${({theme:e})=>2*e.gridUnit}px;
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
  width: 100%;
`,Fs=a.iK.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
  overflow: hidden;
`,Es=a.iK.span`
  font-weight: ${({theme:e})=>e.typography.weights.bold};
`;function _s({body:e,level:t="error",title:i}){const n=(0,a.Fg)().colors[t].base;return(0,V.BX)(Is,{level:t,role:"alert",children:["error"===t?(0,V.tZ)(I.Z.ErrorSolid,{iconColor:n}):(0,V.tZ)(I.Z.WarningSolid,{iconColor:n}),(0,V.BX)(Fs,{children:[(0,V.tZ)(Es,{children:i}),(0,V.tZ)("p",{children:e})]})]})}var Ps=i(72875),zs=i(77997),Us=i(74448),Os=i(52794);const Bs=C()(((e,t)=>{e(t?(0,Os.qN)(t):(0,Os.DU)())}),ut.oP),Ns=C()(((e,t)=>{e(t?(0,Os.$7)(t):(0,Os.Up)())}),ut.oP),qs=()=>(0,u.v9)((e=>{var t;return{outlinedFilterId:null==(t=_o(e.dashboardState.directPathToChild||[]))?void 0:t.native_filter,lastUpdated:e.dashboardState.directPathLastUpdated}})),Vs=a.iK.div`
  & > div {
    height: auto !important;
    min-height: ${32}px;
  }
`,As=[{data:[{}]}],Ks=[pn.cg.NativeFilter],js=({dataMaskSelected:e,filter:t,onFilterSelectionChange:i,inView:n=!0,showOverflow:r,parentRef:a,setFilterActive:s,orientation:l=ft.Bp.Vertical,overflow:c=!1,validateStatus:p})=>{var m,g;const{id:f,targets:v,filterType:b,adhoc_filters:y,time_range:x}=t,C=(0,un.Z)().get(b),S=function(e,t){const i=(0,u.v9)((t=>{var i;return null==(i=t.nativeFilters.filters[e])?void 0:i.cascadeParentIds}),u.wU);return(0,o.useMemo)((()=>{let e={};return(0,hn.Z)(i).forEach((i=>{const n=null==t?void 0:t[i];e=(0,Dr.on)(e,null==n?void 0:n.extraFormData)})),e}),[t,i])}(f,e),w=(()=>{const e=(0,u.v9)((e=>e.dashboardState.isRefreshing)),t=(0,u.v9)((e=>e.dashboardState.isFiltersRefreshing));return!e&&t})(),[Z,R]=(0,o.useState)([]),k=(0,u.v9)((e=>e.dashboardInfo.id)),[$,T]=(0,o.useState)(),[M,I]=(0,o.useState)({inView:!1}),[F,E]=(0,o.useState)({}),[_,P]=(0,o.useState)(n),z=(0,o.useRef)(null),[U]=v,{datasetId:O,column:B={}}=U,{name:N}=B,q=!!O,[A,K]=(0,o.useState)(q),[j,L]=(0,o.useState)(!1),X=(0,u.I0)(),{outlinedFilterId:H,lastUpdated:W}=qs(),Y=(0,o.useCallback)((()=>{L(!1),K(!1),w&&X((0,Bi.YC)())}),[X,w]);(0,o.useEffect)((()=>{!_&&n&&P(!0)}),[n,_,P]),(0,o.useEffect)((()=>{var e;if(!_)return;const i=(0,Dr.zi)({...t,datasetId:O,dependencies:S,groupby:N,adhoc_filters:y,time_range:x,dashboardId:k}),n=(null==(e=t.dataMask)?void 0:e.ownState)||{};if(!j&&(!Ds()(M,i,((e,t,i)=>"url_params"===i||void 0))||!rn()(F,n)||w)){if(I(i),E(n),!q)return;L(!0),(0,en.getChartDataRequest)({formData:i,force:w,ownState:n}).then((({response:e,json:t})=>{if((0,d.cr)(d.TT.GlobalAsyncQueries)){const i="result"in t?t.result[0]:t;if(200===e.status)R([i]),Y();else{if(202!==e.status)throw new Error(`Received unexpected response status (${e.status}) while fetching chart data`);(0,zs.YJ)(i).then((e=>{R(e),Y()})).catch((e=>{(0,Xi.O$)(e).then((e=>{T(e),Y()}))}))}}else R(t.result),T(void 0),Y()})).catch((e=>{(0,Xi.O$)(e).then((e=>{T(e),Y()}))}))}}),[_,S,O,N,Y,JSON.stringify(t),q,j,w]),(0,o.useEffect)((()=>{H&&H===t.id&&setTimeout((()=>{var e;null==z||null==(e=z.current)||e.focus()}),c?ut.oP:0)}),[z,H,W,t.id,c]);const G=(0,o.useCallback)((e=>i(t,e)),[t,i]),J=(0,o.useCallback)((()=>{H!==f&&Ns(X,f)}),[X,f,H]),Q=(0,o.useCallback)((()=>{Ns(X),H===f&&X((0,Bi.E2)([]))}),[X,f,H]),ee=(0,o.useCallback)((()=>Bs(X,f)),[X,f]),te=(0,o.useCallback)((()=>Bs(X)),[X]),ie=(0,o.useMemo)((()=>({setDataMask:G,setHoveredFilter:ee,unsetHoveredFilter:te,setFocusedFilter:J,unsetFocusedFilter:Q,setFilterActive:s})),[G,s,ee,te,J,Q]),ne=(0,o.useMemo)((()=>{var e;return{...null==(e=t.dataMask)?void 0:e.filterState,validateStatus:p}}),[null==(m=t.dataMask)?void 0:m.filterState,p]),re=(0,o.useMemo)((()=>({filterBarOrientation:l,isOverflowingFilterBar:c})),[l,c]);var oe;return $?(0,V.tZ)(Ps.Z,{error:null==(oe=$.errors)?void 0:oe[0],fallback:(0,V.tZ)(_s,{title:(0,h.t)("Cannot load filter"),body:$.error,level:"error"})}):(0,V.tZ)(Vs,{children:A?(0,V.tZ)(D.Z,{position:"inline-centered"}):(0,V.tZ)(Ms.Z,{height:32,width:Us.h2,showOverflow:r,formData:M,displaySettings:re,parentRef:a,inputRef:z,queriesData:q?Z:As,chartType:b,behaviors:Ks,filterState:ne,ownState:null==(g=t.dataMask)?void 0:g.ownState,enableNoResults:null==C?void 0:C.enableNoResults,isRefreshing:j,hooks:ie})})},Ls=(0,o.memo)(js);var Xs=i(51794);const Hs=e=>{var t,i;return(null==e||null==(t=e.meta)?void 0:t.text)||(null==e||null==(i=e.meta)?void 0:i.defaultText)||""},Ws=e=>{var t,i;return(null==e||null==(t=e.meta)?void 0:t.sliceNameOverride)||(null==e||null==(i=e.meta)?void 0:i.sliceName)||(null==e?void 0:e.id)||""},Ys=a.iK.div`
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
`,Gs=a.iK.span`
  ${({theme:e})=>s.iv`
    color: ${e.colors.grayscale.base};
    padding-right: ${4*e.gridUnit}px;
    margin-right: auto;
    text-transform: uppercase;
    white-space: nowrap;
  `};
`,Js=a.iK.div`
  ${({theme:e})=>s.iv`
    color: ${e.colors.grayscale.dark1};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline;
  `};
`,Qs=a.iK.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,el=a.iK.span`
  text-decoration: underline;
  cursor: pointer;
`,tl=a.iK.span`
  ${({theme:e})=>s.iv`
    color: ${e.colors.primary.base};
  `}
`,il=a.iK.ul`
  ${({theme:e})=>s.iv`
    padding-left: ${3*e.gridUnit}px;
    margin-bottom: 0;
  `};
`,nl=a.iK.span`
  font-weight: ${({theme:e})=>e.typography.weights.bold};
`,rl=a.iK.div`
  min-width: 0;
  display: inline-flex;
  white-space: nowrap;
`,ol=a.iK.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`,al=({title:e,children:t,...i})=>(0,V.tZ)(N.u,{title:e,placement:"bottom",overlayClassName:"filter-card-tooltip",...i,children:(0,V.tZ)(rl,{children:t})}),sl=(e,t)=>Array.isArray(e)&&e.length>0?(0,V.BX)(V.HY,{children:[(0,V.BX)(nl,{children:[t,":"]}),(0,V.tZ)(il,{children:e.map((e=>(0,V.tZ)("li",{children:e})))})]}):null,ll=(0,o.memo)((({filter:e})=>{const t=(e=>{const t=(0,u.v9)((e=>e.dashboardLayout.present)),i=Zn();return(0,o.useMemo)((()=>{var n;let r;const o=t[_._4].children[0];if(o.startsWith("TABS-")&&(r=t[o].children),0===e.scope.rootPath.length)return;if(0===e.scope.excluded.length&&(e.scope.rootPath[0]===_._4||null!=(n=r)&&n.every((t=>e.scope.rootPath.includes(t)))))return{all:[(0,h.t)("All charts")]};if(0===e.scope.excluded.length&&r)return{tabs:e.scope.rootPath.map((e=>Hs(t[e]))).filter(Boolean)};const a=Object.values(t).filter((e=>e.type===E.dW));if(e.scope.rootPath[0]===_._4)return{charts:i.filter((t=>!e.scope.excluded.includes(t))).map((e=>{const t=a.find((t=>t.meta.chartId===e));return Ws(t)})).filter(Boolean)};if(r){const n=[...e.scope.rootPath],r=a.filter((e=>e.parents.some((e=>n.includes(e)))));e.scope.excluded.forEach((e=>{const t=n.findIndex((t=>{var i;return null==(i=r.find((t=>t.meta.chartId===e)))?void 0:i.parents.includes(t)}));t>-1&&n.splice(t,1)}));const o=i.filter((t=>!e.scope.excluded.includes(t))).reduce(((e,t)=>{const i=r.find((e=>e.meta.chartId===t&&e.parents.every((e=>!n.includes(e)))));return i&&e.push(i),e}),[]);return{tabs:n.map((e=>Hs(t[e]))).filter(Boolean),charts:o.map(Ws).filter(Boolean)}}}),[i,e.scope.excluded,e.scope.rootPath,t])})(e),[i,n,r,a]=(0,Xs.Z)(),s=(0,o.useMemo)((()=>0!==r&&t?t.all?(0,V.tZ)("span",{children:(0,h.t)("All charts")}):(0,V.BX)("div",{children:[sl(t.tabs,(0,h.t)("Tabs")),sl(t.charts,(0,h.t)("Charts"))]}):null),[r,t]);return(0,V.BX)(Ys,{children:[(0,V.tZ)(Gs,{children:(0,h.t)("Scope")}),(0,V.BX)(al,{title:s,children:[(0,V.tZ)(Js,{ref:i,children:t?Object.values(t).flat().map(((e,t)=>(0,V.tZ)("span",{children:0===t?e:`, ${e}`},e))):(0,h.t)("None")}),a&&(0,V.BX)(tl,{ref:n,children:["+",r]})]})]})})),dl=({dependency:e,hasSeparator:t})=>{const i=(0,u.I0)(),n=(0,o.useCallback)((()=>{i((0,Bi.E2)([e.id]))}),[e.id,i]);return(0,V.BX)("span",{children:[t&&(0,V.tZ)("span",{children:", "}),(0,V.tZ)(el,{role:"button",onClick:n,tabIndex:0,children:e.name})]})},cl=(0,o.memo)((({filter:e})=>{const t=(e=>{const t=(0,hn.Z)(e.cascadeParentIds);return(0,u.v9)((e=>0===t.length?[]:t.reduce(((t,i)=>(t.push(e.nativeFilters.filters[i]),t)),[])))})(e),[i,n,r,l]=(0,Xs.Z)(),d=(0,a.Fg)(),c=(0,o.useMemo)((()=>r>0&&t?(0,V.tZ)(il,{children:t.map((e=>(0,V.tZ)("li",{children:(0,V.tZ)(dl,{dependency:e})})))}):null),[r,t]);return Array.isArray(t)&&0!==t.length?(0,V.BX)(Ys,{children:[(0,V.BX)(Gs,{css:s.iv`
          display: inline-flex;
          align-items: center;
        `,children:[(0,h.t)("Dependent on")," ",(0,V.tZ)(al,{title:(0,h.t)("Filter only displays values relevant to selections made in other filters."),children:(0,V.tZ)(I.Z.Info,{iconSize:"m",iconColor:d.colors.grayscale.light1,css:s.iv`
              margin-left: ${d.gridUnit}px;
            `})})]}),(0,V.BX)(al,{title:c,children:[(0,V.tZ)(Js,{ref:i,children:t.map(((e,t)=>(0,V.tZ)(dl,{dependency:e,hasSeparator:0!==t},e.id)))}),l&&(0,V.BX)(tl,{ref:n,children:["+",r]})]})]}):null}));var hl=i(89734),ul=i.n(hl),pl=i(44908),ml=i.n(pl),gl=i(38325);const fl=a.iK.div`
  ${({theme:e})=>`\n  cursor: pointer;\n  margin: ${4*e.gridUnit}px;\n  color: ${e.colors.primary.base};\n  &:hover {\n    color: ${e.colors.primary.dark1};\n  }\n`}
`,vl=a.iK.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`,bl=[{label:(0,h.t)("Filter"),type:Pr.BE.NativeFilter},{label:(0,h.t)("Divider"),type:Pr.BE.Divider}],yl=({getFilterTitle:e,onChange:t,onAdd:i,onRemove:n,onRearrange:r,restoreFilter:l,currentFilterId:d,filters:c,removedFilters:u,erroredFilters:p})=>{const m=(0,o.useRef)(null),g=(0,a.Fg)(),f=(0,V.tZ)(ht.MainNav,{mode:"horizontal",children:bl.map((e=>(0,V.tZ)(ht.MainNav.Item,{onClick:()=>{return t=e.type,i(t),void setTimeout((()=>{var e;const t=document.getElementById("native-filters-tabs");if(t){const e=t.getElementsByClassName("ant-tabs-nav-list")[0];e.scrollTop=e.scrollHeight}null==m||null==(e=m.current)||null==e.scroll||e.scroll({top:m.current.scrollHeight,behavior:"smooth"})}),0);var t},children:e.label})))});return(0,V.BX)(vl,{children:[(0,V.tZ)(T.Gj,{overlay:f,arrow:!0,placement:"topLeft",trigger:["hover"],children:(0,V.BX)(fl,{children:[(0,V.tZ)("div",{className:"fa fa-plus"})," ",(0,V.tZ)("span",{children:(0,h.t)("Add filters and dividers")})]})}),(0,V.tZ)("div",{css:(0,s.iv)({height:"100%",overflowY:"auto",marginLeft:3*g.gridUnit},"",""),children:(0,V.tZ)(Qn,{ref:m,filters:c,currentFilterId:d,removedFilters:u,getFilterTitle:e,erroredFilters:p,onChange:t,onRemove:n,onRearrange:r,restoreFilter:l})})]})},xl=a.iK.div`
  display: flex;
  height: 100%;
`,Cl=a.iK.div`
  flex-grow: 3;
  margin-left: ${({theme:e})=>-1*e.gridUnit-1};
`,Sl=a.iK.div`
  min-width: 300px;
  max-width: 300px;
  border-right: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
`,wl=({getFilterTitle:e,onChange:t,onRemove:i,onRearrange:n,restoreFilter:r,onAdd:o,erroredFilters:a,children:s,currentFilterId:l,filters:d,removedFilters:c})=>(0,V.BX)(xl,{children:[(0,V.tZ)(Sl,{children:(0,V.tZ)(yl,{currentFilterId:l,filters:d,removedFilters:c,erroredFilters:a,getFilterTitle:e,onChange:t,onAdd:e=>o(e),onRearrange:n,onRemove:e=>i(e),restoreFilter:r})}),(0,V.tZ)(Cl,{children:s})]});var Zl=i(88889),Rl=i(15926),kl=i.n(Rl),$l=i(43700),Tl=i(6412),Dl=i(1090),Ml=i(61890),Il=i(78676),Fl=i(78423);const El=a.iK.div`
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
`,_l=a.iK.div`
  margin-left: ${({theme:e})=>6*e.gridUnit}px;
`,Pl=e=>{const{checked:t,disabled:i,title:n,tooltip:r,children:a,onChange:s=(()=>{}),initialValue:l=!1}=e,[d,c]=(0,o.useState)(l);return(0,o.useEffect)((()=>{void 0!==t&&c(t)}),[t]),(0,V.BX)(El,{checked:d,children:[(0,V.tZ)(T.r4,{className:"checkbox",checked:d,disabled:i,onChange:e=>{const i=e.target.checked;void 0===t&&c(i),s(i)},children:(0,V.BX)(V.HY,{children:[n," ",r&&(0,V.tZ)(U.V,{placement:"top",tooltip:r})]})}),d&&(0,V.tZ)(_l,{children:a})]})};var zl=i(28291);function Ul({allowClear:e=!1,filterValues:t=(()=>!0),form:i,formField:n="column",filterId:r,datasetId:a,value:s,onChange:l,mode:d}){var c;const[u,p]=(0,o.useState)(),[m,g]=(0,o.useState)(!1),{addDangerToast:f}=(0,St.e1)(),v=(0,o.useCallback)((()=>{i.setFields([{name:["filters",r,n],touched:!1,value:null}])}),[i,r,n]),b=(0,o.useMemo)((()=>(0,hn.Z)(u).filter(t).map((e=>e.column_name)).map((e=>({label:e,value:e})))),[u,t]),y=null==(c=i.getFieldValue("filters"))?void 0:c[r].filterType,x=(0,o.useMemo)((()=>null==u?void 0:u.find((e=>e.column_name===s))),[u,s]);return(0,o.useEffect)((()=>{x&&!t(x)&&v()}),[x,y,v]),(0,zl.S)(a,(e=>{null!=e&&(p([]),v()),null!=a&&(g(!0),(0,Tl.e)({endpoint:`/api/v1/dataset/${a}?q=${kl().encode({columns:["columns.column_name","columns.is_dttm","columns.type_generic"]})}`}).then((({json:{result:e}})=>{const t=Array.isArray(s)?s:[s];e.columns.some((e=>null==t?void 0:t.includes(e.column_name)))||v(),p(e.columns)}),(async e=>{const{error:t,message:i}=await(0,Xi.O$)(e);let n=i||t||(0,h.t)("An error has occurred");"Forbidden"===i&&(n=(0,h.t)("You do not have permission to edit this dashboard")),f(n)})).finally((()=>g(!1))))})),(0,V.tZ)(T.Ph,{mode:d,value:"multiple"===d?s||[]:s,ariaLabel:(0,h.t)("Column select"),loading:m,onChange:l,options:b,placeholder:(0,h.t)("Select a column"),notFoundContent:(0,h.t)("No compatible columns found"),showSearch:!0,allowClear:e})}const Ol=({onChange:e,value:t})=>{const i=(0,o.useCallback)((({error:e,message:t})=>{let i=t||e||(0,h.t)("An error has occurred");return"Forbidden"===t&&(i=(0,h.t)("You do not have permission to edit this dashboard")),i}),[]);return(0,V.tZ)(T.qb,{ariaLabel:(0,h.t)("Dataset"),value:t,options:async(e,t,n)=>{const r=kl().encode({columns:["id","table_name","database.database_name","schema"],filters:[{col:"table_name",opr:"ct",value:e}],page:t,page_size:n,order_column:"table_name",order_direction:"asc"});return(0,Tl.e)({endpoint:`/api/v1/dataset/?q=${r}`}).then((e=>({data:e.json.result.map((e=>({customLabel:(0,Fl.V)(e),label:e.table_name,value:e.id}))),totalCount:e.json.count}))).catch((async e=>{const t=i(await(0,Xi.O$)(e));throw new Error(t)}))},onChange:e,notFoundContent:(0,h.t)("No compatible datasets found"),placeholder:(0,h.t)("Select a dataset")})},Bl=e=>(0,o.useMemo)((()=>(0,V.tZ)(Ol,{...e})),[]),Nl={filter_time:[Zl.Z.Temporal],filter_timegrain:[Zl.Z.Temporal],filter_timecolumn:[Zl.Z.Temporal],filter_select:[Zl.Z.Boolean,Zl.Z.String,Zl.Z.Numeric,Zl.Z.Temporal],filter_range:[Zl.Z.Numeric]},ql=({hasDefaultValue:e,filterId:t,hasDataset:i,form:n,setDataMask:r,formData:o,enableNoResults:a})=>{var s,l,d,c;const u=null==(s=n.getFieldValue("filters"))?void 0:s[t],p=null==u?void 0:u.defaultValueQueriesData,m=i&&null===p,g=null==u||null==(l=u.defaultDataMask)||null==(d=l.filterState)?void 0:d.value,f=e&&null==g;return m?(0,V.tZ)(D.Z,{position:"inline-centered"}):(0,V.tZ)(Ms.Z,{height:32,width:"filter_time"===(null==u?void 0:u.filterType)?350:270,appSection:pn.Tr.FilterConfigModal,behaviors:[pn.cg.NativeFilter],formData:o,queriesData:i?null==u?void 0:u.defaultValueQueriesData:[{data:[{}]}],chartType:null==u?void 0:u.filterType,hooks:{setDataMask:r},enableNoResults:a,filterState:{...null==u||null==(c=u.defaultDataMask)?void 0:c.filterState,validateMessage:f&&(0,h.t)("Value is required"),validateStatus:f&&"error"}})};var Vl,Al=i(15208);!function(e){e[e.All=0]="All",e[e.Specific=1]="Specific"}(Vl||(Vl={}));const Kl=a.iK.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: ${({theme:e})=>e.gridUnit}px;
  }
  padding: 0px ${({theme:e})=>4*e.gridUnit}px;
`,jl=(0,a.iK)(T.qz.Item)`
  margin-bottom: 0;
`,Ll=({pathToFormValue:e=[],formScopingType:t,formFilterScope:i,forceUpdate:n,filterScope:r,updateFormValues:a,chartId:s,initiallyExcludedCharts:l})=>{const[d]=(0,o.useState)(r||Dn(s,l)),c=(0,o.useRef)(d),[u]=(0,o.useState)(Mn(d,s)?Vl.All:Vl.Specific),[p,m]=(0,o.useState)(!!r),g=(0,o.useCallback)((e=>{t===Vl.Specific&&(c.current=e.scope),a(e),m(!0)}),[t,a]),f=(0,o.useCallback)((()=>{if(r||p)return;const e=Dn(s,l);a({scope:e,scoping:Mn(e,s)?Vl.All:Vl.Specific})}),[s,r,p,l,a]);return(0,Al.d)(f),(0,V.BX)(Kl,{children:[(0,V.tZ)(jl,{name:[...e,"scoping"],initialValue:u,children:(0,V.BX)(Vt.Y.Group,{onChange:({target:{value:e}})=>{const t=e===Vl.All?Dn(s):c.current;a({scope:t}),m(!0),n()},children:[(0,V.tZ)(Vt.Y,{value:Vl.All,children:(0,h.t)("Apply to all panels")}),(0,V.tZ)(Vt.Y,{value:Vl.Specific,children:(0,h.t)("Apply to specific panels")})]})}),(0,V.tZ)(T.ZT.Text,{type:"secondary",children:(null!=t?t:u)===Vl.Specific?(0,h.t)("Only selected panels will be affected by this filter"):(0,h.t)("All panels with this column will be affected by this filter")}),(null!=t?t:u)===Vl.Specific&&(0,V.tZ)(En,{updateFormValues:g,initialScope:d,formScope:i,forceUpdate:n,chartId:s,initiallyExcludedCharts:l}),(0,V.tZ)(jl,{name:[...e,"scope"],hidden:!0,initialValue:d})]})};var Xl=i(37687),Hl=i(10752),Wl=i.n(Hl);const Yl="filters",Gl=(e=!0)=>{const[,t]=(0,o.useState)({});return(0,o.useCallback)((()=>{e&&t({})}),[e])},Jl=(e,t,i)=>{const n=e.getFieldValue(Yl)||{};e.setFields([{name:Yl,value:{...n,[t]:{...n[t],...i}}}])},Ql=e=>{const t=(0,hn.Z)(null==e?void 0:e.column_types);return 0===t.length||t.includes(Zl.Z.Temporal)},ed=(0,a.iK)(_t.xJ)`
  margin-bottom: 0;
`;const td=a.iK.div`
  display: flex;
  flex-direction: column;
  height: 400px; // arbitrary
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.colors.grayscale.base};
`,id=({onClick:e})=>(0,V.BX)(td,{children:[(0,V.tZ)("p",{children:(0,h.t)("You have removed this filter.")}),(0,V.tZ)("div",{children:(0,V.tZ)(M.Z,{buttonStyle:"primary",onClick:e,children:(0,h.t)("Restore Filter")})})]}),nd=a.iK.div`
  display: flex;
  flex-direction: column;
`,rd=a.iK.div`
  ${({theme:e})=>`\n    display: inline-flex;\n    flex-direction: row;\n    align-items: center;\n    cursor: pointer;\n    color: ${e.colors.primary.base};\n    &:hover {\n      color: ${e.colors.primary.dark1};\n    }\n  `}
`,od=(0,a.iK)(I.Z.Trash)`
  ${({theme:e})=>`\n    cursor: pointer;\n    margin-left: ${2*e.gridUnit}px;\n    color: ${e.colors.grayscale.base};\n    &:hover {\n      color: ${e.colors.grayscale.dark1};\n    }\n  `}
`,ad=a.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-bottom: ${e.gridUnit}px;\n\n    & > div {\n      width: 270px;\n    }\n  `}
`,sd=a.iK.div`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
`,ld=({availableFilters:e,selection:t,onChange:i,onDelete:n})=>{let r=e.find((e=>e.value===t)),o=e;return r||(r={label:(0,h.t)("(deleted or invalid type)"),value:t},o=[r,...o]),(0,V.BX)(ad,{children:[(0,V.tZ)(T.Ph,{ariaLabel:(0,h.t)("Limit type"),labelInValue:!0,options:o,onChange:e=>i(t,e.value),value:r}),(0,V.tZ)(od,{iconSize:"xl",onClick:()=>n(t)})]})},dd=({availableFilters:e=[],dependencies:t=[],onDependenciesChange:i})=>{const[n,r]=(0,o.useState)(t),a=e=>{r(e),i(e)},s=(e,t)=>{const i=n.findIndex((t=>t===e)),r=[...n];r[i]=t,a(r)},l=e=>{const t=[...n];t.splice(n.indexOf(e),1),a(t)};return 0===e.length?(0,V.tZ)("span",{children:(0,h.t)("No available filters.")}):(0,V.BX)(V.HY,{children:[n.map((t=>(0,V.tZ)(ld,{selection:t,availableFilters:e.filter((e=>e.value===t||!n.includes(e.value))),onChange:s,onDelete:l},t))),e.length>n.length&&(0,V.BX)(rd,{role:"button",onClick:()=>{const t=e.find((e=>!n.includes(e.value)));if(t){const e=[...n];e.push(t.value),a(e)}},children:[(0,V.tZ)(I.Z.PlusSmall,{}),(0,h.t)("Add filter")]})]})},cd=({availableFilters:e=[],dependencies:t=[],onDependenciesChange:i,getDependencySuggestion:n,children:r})=>{const o=e.length>0,a=t.length>0;return(0,V.tZ)(nd,{children:(0,V.BX)(Pl,{title:(0,h.t)("Values are dependent on other filters"),initialValue:a,onChange:e=>{const t=[];e&&!a&&o&&t.push(n()),i(t)},tooltip:(0,h.t)("Values selected in other filters will affect the filter options to only show relevant values"),children:[a&&(0,V.tZ)(sd,{children:(0,h.t)("Values dependent on")}),(0,V.tZ)(dd,{availableFilters:e,dependencies:t,onDependenciesChange:i,getDependencySuggestion:n}),r]})})},hd=(0,a.iK)(g.ZP.TabPane)`
  padding: ${({theme:e})=>4*e.gridUnit}px 0px;
`,ud=a.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    padding: 0px ${4*e.gridUnit}px;\n  `}
`,pd=a.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0px ${({theme:e})=>4*e.gridUnit}px;
`,md=["enableEmptyFilter","defaultToFirstItem","multiSelect","searchAllOptions","inverseSelection"],gd=(0,a.iK)(_t.xJ)`
  width: ${({expanded:e})=>e?"49%":"260px"};
  margin-bottom: ${({theme:e})=>4*e.gridUnit}px;

  & .ant-form-item-label {
    padding-bottom: 0;
  }

  & .ant-form-item-control-input {
    min-height: ${({theme:e})=>10*e.gridUnit}px;
  }
`,fd=(0,a.iK)(_t.xJ)`
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
`,vd=(0,a.iK)(_t.xJ)`
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
`,bd=a.iK.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  text-transform: uppercase;
`,yd=(0,a.iK)(_t.xJ)`
  margin-bottom: 0;
`,xd=a.iK.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Cd=(0,a.iK)(I.Z.Refresh)`
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
  color: ${({theme:e})=>e.colors.primary.base};
`,Sd=(0,a.iK)($l.Z)`
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
`,wd=(0,a.iK)(g.ZP)`
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
`,Zd=a.iK.span`
  color: ${({theme:e})=>e.colors.error.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin-left: ${({theme:e})=>e.gridUnit-1}px;
  &:before {
    content: '*';
  }
`,Rd=a.iK.div`
  ${({theme:e,expanded:t})=>`\n    width: ${t?"49%":"260px"};\n    font-size: ${e.typography.sizes.s}px;\n    color: ${e.colors.grayscale.light1};\n    margin:\n      ${2*-e.gridUnit}px\n      0px\n      ${4*e.gridUnit}px\n      ${4*e.gridUnit}px;\n  `}
`,kd={configuration:{key:"configuration",name:(0,h.t)("Settings")},scoping:{key:"scoping",name:(0,h.t)("Scoping")}},$d={configuration:{key:"configuration",name:(0,h.t)("Filter Configuration")},settings:{key:"settings",name:(0,h.t)("Filter Settings")}},Td=["filter_select","filter_range"],Dd={[(0,h.t)("Select filter")]:(0,h.t)("Value"),[(0,h.t)("Range filter")]:(0,h.t)("Numerical range"),[(0,h.t)("Time filter")]:(0,h.t)("Time range"),[(0,h.t)("Time column")]:(0,h.t)("Time column"),[(0,h.t)("Time grain")]:(0,h.t)("Time grain"),[(0,h.t)("Group By")]:(0,h.t)("Group by")},Md=({expanded:e,filterId:t,filterToEdit:i,removedFilters:n,form:r,getAvailableFilters:a,activeFilterPanelKeys:l,restoreFilter:c,handleActiveFilterPanelChange:p,setErroredFilters:m,validateDependencies:g,getDependencySuggestion:f,isActive:v},b)=>{var y,x,C,S,w,Z,R,k,M,I,F,E,_,P,z,O,B,q,A,K,j,L,X,H,W;const Y=!!n[t],[G,J]=(0,o.useState)(),[Q,ee]=(0,o.useState)([]),[te,ie]=(0,o.useState)(kd.configuration.key),ne=(0,u.v9)((e=>e.dashboardInfo.id)),[re,oe]=(0,o.useState)(null),ae=Gl(v),[se,le]=(0,o.useState)(),de=(0,o.useMemo)((()=>({})),[]),ce=r.getFieldValue("filters"),he=null==ce?void 0:ce[t],ue=he||re||de,pe=(null==ue?void 0:ue.dependencies)||(null==i?void 0:i.cascadeParentIds)||[],me=(0,un.Z)().items,ge=Object.entries(me).filter((([,{value:e}])=>{var t;return null==(t=e.behaviors)?void 0:t.includes(pn.cg.NativeFilter)})).map((([e])=>e)),fe=(0,u.v9)((({datasources:e})=>e)),ve=(0,u.v9)((({charts:e})=>e)),be=(0,o.useMemo)((()=>Object.values(fe).some((e=>Ql(e)))),[fe]),ye=(0,o.useMemo)((()=>{const e=Object.values(fe).find((e=>{var t;return e.id===(null==ue||null==(t=ue.dataset)?void 0:t.value)}));return!e||Ql(e)}),[null==ue||null==(y=ue.dataset)?void 0:y.value,fe]),xe=!(null==(x=me[null==ue?void 0:ue.filterType])||null==(C=x.value)||!C.datasourceCount),Ce=null!=(S=null!=(w=null==ue||null==(Z=ue.dataset)?void 0:Z.value)?w:null==i||null==(R=i.targets[0])?void 0:R.datasetId)?S:((e,t)=>{var i;const n=new Map;let r="",o=0;return Object.values(t).forEach((e=>{const{form_data:t}=e;if(t){const{datasource:e}=t,i=(n.get(e)||0)+1;n.set(e,i),i>o&&(o=i,r=e)}})),null==(i=e[r])?void 0:i.id})(fe,ve),{controlItems:Se={},mainControlItems:we={}}=ue?function({expanded:e,datasetId:t,disabled:i,forceUpdate:n,form:r,filterId:o,filterType:a,filterToEdit:s,formFilter:l,removed:d}){var c;const u=null!=(c=((e={})=>{var t,i;return null!=(t=null==(i=Wl()(e.controlPanelSections))?void 0:i.reduce(((e,{controlSetRows:t=[]})=>[...e,...Wl()(t)]),[]))?t:[]})((0,Xl.Z)().get(a)))?c:[],p={},m={};return u.filter((e=>"groupby"===(null==e?void 0:e.name))).forEach((i=>{var a,c,u,p,g,f,v,b,y;const x=null!=(a=null==s||null==(c=s.controlValues)?void 0:c[i.name])?a:null==i||null==(u=i.config)?void 0:u.default,C=null==s||null==(p=s.targets[0])||null==(g=p.column)?void 0:g.name,S=(0,V.BX)(V.HY,{children:[(0,V.tZ)(ed,{name:["filters",o,"requiredFirst",i.name],hidden:!0,initialValue:(null==i||null==(f=i.config)?void 0:f.requiredFirst)&&(null==s?void 0:s.requiredFirst)}),(0,V.tZ)(gd,{expanded:e,name:["filters",o,"column"],initialValue:C,label:(0,V.tZ)(bd,{children:(null==(v=i.config)?void 0:v.label)||(0,h.t)("Column")}),rules:[{required:(null==(b=i.config)?void 0:b.required)&&!d,message:(0,h.t)("Column is required")}],children:(0,V.tZ)(Ul,{mode:(null==(y=i.config)?void 0:y.multiple)&&"multiple",form:r,filterId:o,datasetId:t,filterValues:e=>((e,t)=>{var i;return!t.type_generic||!(e in Nl)||(null==(i=Nl[e])?void 0:i.includes(t.type_generic))})((null==l?void 0:l.filterType)||"",e),onChange:()=>{Jl(r,o,{defaultDataMask:null}),n()}})})]});m[i.name]={element:S,checked:x}})),u.filter((e=>{var t;return(null==e||null==(t=e.config)?void 0:t.renderTrigger)&&"sortAscending"!==e.name&&"enableSingleValue"!==e.name})).forEach((t=>{var a,d,c,u;const m=null!=(a=null==s||null==(d=s.controlValues)?void 0:d[t.name])?a:null==t||null==(c=t.config)?void 0:c.default,g=(0,V.BX)(V.HY,{children:[(0,V.tZ)(ed,{name:["filters",o,"requiredFirst",t.name],hidden:!0,initialValue:(null==t||null==(u=t.config)?void 0:u.requiredFirst)&&(null==s?void 0:s.requiredFirst)}),(0,V.tZ)(N.u,{placement:"left",title:t.config.affectsDataMask&&i&&(0,h.t)('Populate "Default value" to enable this control'),children:(0,V.tZ)(fd,{expanded:e,name:["filters",o,"controlValues",t.name],initialValue:m,valuePropName:"checked",colon:!1,children:(0,V.BX)(T.r4,{disabled:t.config.affectsDataMask&&i,onChange:({target:{checked:e}})=>{t.config.requiredFirst&&Jl(r,o,{requiredFirst:{...null==l?void 0:l.requiredFirst,[t.name]:e}}),t.config.resetConfig&&Jl(r,o,{defaultDataMask:null}),n()},children:[t.config.label," ",t.config.description&&(0,V.tZ)(U.V,{placement:"top",label:t.config.name,tooltip:t.config.description})]})},t.name)},t.name)]});p[t.name]={element:g,checked:m}})),{controlItems:p,mainControlItems:m}}({expanded:e,datasetId:Ce,disabled:!1,forceUpdate:ae,form:r,filterId:t,filterType:null==ue?void 0:ue.filterType,filterToEdit:i,formFilter:ue,removed:Y}):{},Ze=!!we.groupby,Re=!(null==(M=(null!=(k=me[null==ue?void 0:ue.filterType])?k:{}).value)||!M.enableNoResults),ke=Ze&&!!Q.length,$e=!xe||Ce&&((null==ue?void 0:ue.column)||!Ze),Te=Td.includes(null==ue?void 0:ue.filterType),De=Ad.includes(null==ue?void 0:ue.filterType),Me=null==(I=null==ue?void 0:ue.isDataDirty)||I,Ie=e=>{Jl(r,t,e),J(void 0),ae()};let Fe={};pe&&pe.length>0&&ce&&pe.forEach((e=>{var t,i;const n=null==(t=ce[e])||null==(i=t.defaultDataMask)?void 0:i.extraFormData;Fe=(0,Dr.on)(Fe,n)}));const Ee=JSON.stringify(Fe),_e=(0,o.useCallback)(((e=!1)=>{var i,n;if(!xe||null==ue||null==(i=ue.dataset)||!i.value)return void ae();const o=(0,Dr.zi)({datasetId:null==ue||null==(n=ue.dataset)?void 0:n.value,dashboardId:ne,groupby:null==ue?void 0:ue.column,...ue});o.extra_form_data=Fe,Ie({defaultValueQueriesData:null,isDataDirty:!1}),(0,en.getChartDataRequest)({formData:o,force:e}).then((({response:e,json:i})=>{if((0,d.cr)(d.TT.GlobalAsyncQueries)){const n="result"in i?i.result[0]:i;if(200===e.status)Ie({defaultValueQueriesData:[n]});else{if(202!==e.status)throw new Error(`Received unexpected response status (${e.status}) while fetching chart data`);(0,zs.YJ)(n).then((e=>{Ie({defaultValueQueriesData:e})})).catch((e=>{(0,Xi.O$)(e).then((e=>{(e=>{Jl(r,t,{defaultValueQueriesData:null}),J(e),ae()})(e)}))}))}}else Ie({defaultValueQueriesData:i.result})})).catch((e=>{(0,Xi.O$)(e).then((e=>{J(e)}))}))}),[t,ae,r,ue,xe,Ee]);(0,o.useEffect)((()=>_e()),[Ee]);const Pe=(0,Dr.zi)({datasetId:Ce,groupby:Ze?null==ue?void 0:ue.column:void 0,...ue});Pe.extra_form_data=Fe;const[ze,Ue,Oe,Be]=((e,t)=>{var i,n;const r=!(null==e||null==(i=e.controlValues)||!i.enableEmptyFilter),a=!(null==e||null==(n=e.controlValues)||!n.defaultToFirstItem),[s,l]=(0,o.useState)(!1),[d,c]=(0,o.useState)(r),[u,p]=(0,o.useState)(""),m=(e=!1)=>{const t=r&&!a;c(t),l(!!t||e)};return(0,o.useEffect)((()=>{var t,i;m(!a&&!(null==e||null==(t=e.defaultDataMask)||null==(i=t.filterState)||!i.value))}),[a,r]),(0,o.useEffect)((()=>{var e,i;m(!a&&!(null==t||null==(e=t.defaultDataMask)||null==(i=e.filterState)||!i.value))}),[]),(0,o.useEffect)((()=>{let e="";a?e=(0,h.t)('Default value set automatically when "Select first filter value by default" is checked'):d?e=(0,h.t)('Default value must be set when "Filter value is required" is checked'):s&&(e=(0,h.t)('Default value must be set when "Filter has default value" is checked')),p(e)}),[s,d,a]),[s,d,u,m]})(ue,i),Ne=!Ce||se||(null==ue||null==(F=ue.dataset)?void 0:F.label),qe=(0,o.useCallback)((()=>{r.setFields([{name:"changed",value:!0}])}),[r]),Ve=(0,o.useCallback)((e=>{Jl(r,t,e),qe()}),[t,r,qe]),Ae=!!(null!=ue&&ue.adhoc_filters||null!=ue&&ue.time_range||null!=i&&null!=(E=i.adhoc_filters)&&E.length||null!=i&&i.time_range),Ke=void 0!==(null==ue||null==(_=ue.controlValues)?void 0:_.enableSingleValue)||void 0!==(null==i||null==(P=i.controlValues)?void 0:P.enableSingleValue);let je=null==i||null==(z=i.controlValues)?void 0:z.enableSingleValue;void 0!==(null==ue||null==(O=ue.controlValues)?void 0:O.enableSingleMaxValue)&&({enableSingleValue:je}=ue.controlValues);const Le="boolean"==typeof(null==ue||null==(B=ue.controlValues)?void 0:B.sortAscending)||"boolean"==typeof(null==i||null==(q=i.controlValues)?void 0:q.sortAscending);let Xe=null==i||null==(A=i.controlValues)?void 0:A.sortAscending;"boolean"==typeof(null==ue||null==(K=ue.controlValues)?void 0:K.sortAscending)&&(Xe=ue.controlValues.sortAscending);const He=!xe||!Me&&$e||!we.groupby,We=e=>{var i;const n=null==(i=r.getFieldValue("filters"))?void 0:i[t].controlValues;Jl(r,t,{controlValues:{...n,sortAscending:e}}),ae()},Ye=e=>{var i;const n=null==(i=r.getFieldValue("filters"))?void 0:i[t].controlValues;Jl(r,t,{controlValues:{...n,enableSingleValue:e}}),ae()},Ge=()=>setTimeout((()=>r.validateFields([["filters",t,"adhoc_filters"],["filters",t,"time_range"]])),0),Je=(null==ue?void 0:ue.time_range)&&"No filter"!==ue.time_range,Qe=(null==ue||null==(j=ue.adhoc_filters)?void 0:j.length)>0,et=null==ue||null==(L=ue.controlValues)?void 0:L.defaultToFirstItem,tt=(null==ue?void 0:ue.filterType)===(null==i?void 0:i.filterType)?null==i?void 0:i.defaultDataMask:null,it=()=>Je||Qe?Promise.resolve():Promise.reject(new Error((0,h.t)("Pre-filter is required"))),nt=a(t),rt=nt.length>0,ot=nt.filter((e=>"filter_time"===e.type)).some((e=>null==pe?void 0:pe.includes(e.value)));(0,o.useEffect)((()=>{Ce&&(0,Tl.e)({endpoint:`/api/v1/dataset/${Ce}?q=${kl().encode({columns:["columns.column_name","columns.expression","columns.filterable","columns.is_dttm","columns.type","columns.verbose_name","database.id","database.database_name","datasource_type","filter_select_enabled","id","is_sqllab_view","main_dttm_col","metrics.metric_name","metrics.verbose_name","schema","sql","table_name"]})}`}).then((e=>{var t,i,n;ee(null==(t=e.json)||null==(i=t.result)?void 0:i.metrics);const r=null==(n=e.json)?void 0:n.result;r.type=r.datasource_type,r.filter_select=!0,le(r)})).catch((e=>{(0,qi.Gb)(e.message)}))}),[Ce]),(0,o.useImperativeHandle)(b,(()=>({changeTab(e){ie(e)}}))),((e,t)=>{var i,n;const r=Gl(),a=null==(i=e.getFieldValue("filters"))?void 0:i[t];(0,o.useEffect)((()=>{Jl(e,t,{isDataDirty:!0,defaultValueQueriesData:null}),r()}),[e,null==a?void 0:a.filterType,null==a?void 0:a.column,null==a||null==(n=a.dataset)?void 0:n.value,JSON.stringify(null==a?void 0:a.adhoc_filters),null==a?void 0:a.time_range,r,t])})(r,t),(0,o.useEffect)((()=>{xe&&$e&&ze&&Me&&_e()}),[xe,$e,ze,Me,_e,Ne]);const at=(0,o.useMemo)((()=>{var e;const t=[];return void 0===(null==ue||null==(e=ue.dataset)?void 0:e.value)?[]:(Object.values(ve).forEach((e=>{var i,n,r;const o=null==(i=e.form_data)?void 0:i.datasource;void 0!==o&&(null==(n=fe[o])?void 0:n.id)!==(null==ue||null==(r=ue.dataset)?void 0:r.value)&&t.push(e.id)})),t)}),[JSON.stringify(ve),null==ue||null==(X=ue.dataset)?void 0:X.value,JSON.stringify(fe)]);if((0,o.useEffect)((()=>{Y&&oe(he)}),[Y]),(0,o.useEffect)((()=>{re&&!Y&&(Jl(r,t,re),oe(null))}),[he,t,r,Y,re]),Y)return(0,V.tZ)(id,{onClick:()=>c(t)});const st=(0,V.tZ)(fd,{expanded:e,name:["filters",t,"granularity_sqla"],label:(0,V.BX)(V.HY,{children:[(0,V.tZ)(bd,{children:(0,h.t)("Time column")})," ",(0,V.tZ)(U.V,{placement:"top",tooltip:ot?(0,h.t)("Time column to apply dependent temporal filter to"):(0,h.t)("Time column to apply time range to")})]}),initialValue:null==i?void 0:i.granularity_sqla,children:(0,V.tZ)(Ul,{allowClear:!0,form:r,formField:"granularity_sqla",filterId:t,filterValues:e=>!!e.is_dttm,datasetId:Ce,onChange:e=>{Jl(r,t,{granularity_sqla:e}),ae()}})});return(0,V.BX)(wd,{activeKey:te,onChange:e=>ie(e),centered:!0,children:[(0,V.BX)(hd,{tab:kd.configuration.name,forceRender:!0,children:[(0,V.BX)(ud,{children:[(0,V.tZ)(gd,{expanded:e,name:["filters",t,"type"],hidden:!0,initialValue:Pr.BE.NativeFilter,children:(0,V.tZ)($.II,{})}),(0,V.tZ)(gd,{expanded:e,name:["filters",t,"name"],label:(0,V.tZ)(bd,{children:(0,h.t)("Filter name")}),initialValue:null==i?void 0:i.name,rules:[{required:!Y,message:(0,h.t)("Name is required")}],children:(0,V.tZ)($.II,{...Vd("name-input")})}),(0,V.tZ)(gd,{expanded:e,name:["filters",t,"filterType"],rules:[{required:!Y,message:(0,h.t)("Name is required")}],initialValue:(null==i?void 0:i.filterType)||"filter_select",label:(0,V.tZ)(bd,{children:(0,h.t)("Filter Type")}),...Vd("filter-type"),children:(0,V.tZ)(T.Ph,{ariaLabel:(0,h.t)("Filter type"),options:ge.map((e=>{var t,i,n;const r=null==(t=me[e])?void 0:t.value.name,o=r?Dd[r]:void 0,a=1===(null==(i=Nl[e])?void 0:i.length)&&(null==(n=Nl[e])?void 0:n.includes(Zl.Z.Temporal))&&!be;return{value:e,label:o||r,customLabel:a?(0,V.tZ)(N.u,{title:(0,h.t)("Datasets do not contain a temporal column"),children:o||r}):void 0,disabled:a}})),onChange:e=>{Jl(r,t,{filterType:e,defaultDataMask:null,column:null}),ae()}})})]}),"filter_time"===(null==ue?void 0:ue.filterType)&&(0,V.tZ)(Rd,{expanded:e,children:(0,h.t)("Dashboard time range filters apply to temporal columns defined in\n          the filter section of each chart. Add temporal columns to the chart\n          filters to have this dashboard filter impact those charts.")}),xe&&(0,V.BX)(pd,{children:[Ne?(0,V.tZ)(gd,{expanded:e,name:["filters",t,"dataset"],label:(0,V.tZ)(bd,{children:(0,h.t)("Dataset")}),initialValue:se?{label:(0,Fl.V)({id:se.id,table_name:se.table_name,schema:se.schema,database:{database_name:se.database.database_name}}),value:se.id}:void 0,rules:[{required:!Y,message:(0,h.t)("Dataset is required")}],...Vd("datasource-input"),children:(0,V.tZ)(Bl,{onChange:e=>{e.value!==Ce&&Jl(r,t,{dataset:e,defaultDataMask:null,column:null}),ae()}})}):(0,V.tZ)(gd,{expanded:e,label:(0,V.tZ)(bd,{children:(0,h.t)("Dataset")}),children:(0,V.tZ)(D.Z,{position:"inline-centered"})}),xe&&Object.keys(we).map((e=>we[e].element))]}),(0,V.BX)(Sd,{defaultActiveKey:l,onChange:e=>{p(e)},expandIconPosition:"right",children:["filter_time"!==(null==ue?void 0:ue.filterType)&&(0,V.BX)($l.Z.Panel,{forceRender:!0,header:$d.configuration.name,children:[De&&rt&&(0,V.tZ)(fd,{expanded:e,name:["filters",t,"dependencies"],initialValue:pe,children:(0,V.tZ)(cd,{availableFilters:nt,dependencies:pe,onDependenciesChange:e=>{Jl(r,t,{dependencies:e}),ae(),g(),qe()},getDependencySuggestion:()=>f(t),children:ot?st:void 0})}),xe&&Te&&(0,V.tZ)(yd,{name:["filters",t,"preFilter"],children:(0,V.BX)(Pl,{initialValue:Ae,title:(0,h.t)("Pre-filter available values"),tooltip:(0,h.t)("Add filter clauses to control the filter's source query,\n                    though only in the context of the autocomplete i.e., these conditions\n                    do not impact how the filter is applied to the dashboard. This is useful\n                    when you want to improve the query's performance by only scanning a subset\n                    of the underlying data or limit the available values displayed in the filter."),onChange:e=>{qe(),e&&Ge()},children:[(0,V.tZ)(vd,{expanded:e,name:["filters",t,"adhoc_filters"],css:(0,s.iv)({width:270},"",""),initialValue:null==i?void 0:i.adhoc_filters,required:!0,rules:[{validator:it}],children:(0,V.tZ)(Ml.Z,{columns:(null==se||null==(H=se.columns)?void 0:H.filter((e=>e.filterable)))||[],savedMetrics:(null==se?void 0:se.metrics)||[],datasource:se,onChange:e=>{Jl(r,t,{adhoc_filters:e}),ae(),Ge()},label:(0,V.BX)("span",{children:[(0,V.tZ)(bd,{children:(0,h.t)("Pre-filter")}),!Je&&(0,V.tZ)(Zd,{})]})})}),ye&&(0,V.tZ)(fd,{expanded:e,name:["filters",t,"time_range"],label:(0,V.tZ)(bd,{children:(0,h.t)("Time range")}),initialValue:(null==i?void 0:i.time_range)||(0,h.t)("No filter"),required:!Qe,rules:[{validator:it}],children:(0,V.tZ)(Dl.ZP,{name:"time_range",onChange:e=>{Jl(r,t,{time_range:e}),ae(),Ge()}})}),Je&&!ot?st:void 0]})}),"filter_range"!==(null==ue?void 0:ue.filterType)?(0,V.tZ)(yd,{name:["filters",t,"sortFilter"],children:(0,V.BX)(Pl,{initialValue:Le,title:(0,h.t)("Sort filter values"),onChange:e=>{We(e||void 0),qe()},children:[(0,V.tZ)(fd,{expanded:e,name:["filters",t,"controlValues","sortAscending"],initialValue:Xe,label:(0,V.tZ)(bd,{children:(0,h.t)("Sort type")}),children:(0,V.BX)(Vt.Y.Group,{onChange:e=>{We(e.target.value)},children:[(0,V.tZ)(Vt.Y,{value:!0,children:(0,h.t)("Sort ascending")}),(0,V.tZ)(Vt.Y,{value:!1,children:(0,h.t)("Sort descending")})]})}),ke&&(0,V.tZ)(vd,{expanded:e,name:["filters",t,"sortMetric"],initialValue:null==i?void 0:i.sortMetric,label:(0,V.BX)(V.HY,{children:[(0,V.tZ)(bd,{children:(0,h.t)("Sort Metric")})," ",(0,V.tZ)(U.V,{placement:"top",tooltip:(0,h.t)("If a metric is specified, sorting will be done based on the metric value")})]}),children:(0,V.tZ)(T.Ph,{allowClear:!0,ariaLabel:(0,h.t)("Sort metric"),name:"sortMetric",options:Q.map((e=>{var t;return{value:e.metric_name,label:null!=(t=e.verbose_name)?t:e.metric_name}})),onChange:e=>{void 0!==e&&(Jl(r,t,{sortMetric:e}),ae())}})})]})}):(0,V.tZ)(yd,{name:["filters",t,"rangeFilter"],children:(0,V.tZ)(Pl,{initialValue:Ke,title:(0,h.t)("Single Value"),onChange:e=>{Ye(e?Il.c.Exact:void 0),qe()},children:(0,V.tZ)(fd,{expanded:e,name:["filters",t,"controlValues","enableSingleValue"],initialValue:je,label:(0,V.tZ)(bd,{children:(0,h.t)("Single value type")}),children:(0,V.BX)(Vt.Y.Group,{onChange:e=>Ye(e.target.value),children:[(0,V.tZ)(Vt.Y,{value:Il.c.Minimum,children:(0,h.t)("Minimum")}),(0,V.tZ)(Vt.Y,{value:Il.c.Exact,children:(0,h.t)("Exact")}),(0,V.tZ)(Vt.Y,{value:Il.c.Maximum,children:(0,h.t)("Maximum")})]})})})})]},`${t}-${$d.configuration.key}`),(0,V.BX)($l.Z.Panel,{forceRender:!0,header:$d.settings.name,children:[(0,V.tZ)(gd,{expanded:e,name:["filters",t,"description"],initialValue:null==i?void 0:i.description,label:(0,V.tZ)(bd,{children:(0,h.t)("Description")}),children:(0,V.tZ)($.Kx,{})}),(0,V.tZ)(yd,{name:["filters",t,"defaultValueQueriesData"],hidden:!0,initialValue:null}),(0,V.tZ)(yd,{name:["filters",t,"defaultValue"],children:(0,V.tZ)(Pl,{checked:ze,disabled:Ue||et,initialValue:ze,title:(0,h.t)("Filter has default value"),tooltip:Oe,onChange:e=>{Be(e),e||Jl(r,t,{defaultDataMask:null}),qe()},children:!Y&&(0,V.tZ)(vd,{expanded:e,name:["filters",t,"defaultDataMask"],initialValue:tt,label:(0,V.tZ)(bd,{children:(0,h.t)("Default Value")}),required:ze,rules:[{validator:()=>{var e,i;if(null!=ue&&null!=(e=ue.defaultDataMask)&&null!=(i=e.filterState)&&i.value){const e=r.getFieldsError();return m((t=>t.length&&!e.find((e=>e.errors.length>0))?[]:t)),Promise.resolve()}return m((e=>e.includes(t)?e:[...e,t])),Promise.reject(new Error((0,h.t)("Default value is required")))}}],children:G||He?(0,V.BX)(xd,{children:[G?(0,V.tZ)(Ps.Z,{error:null==(W=G.errors)?void 0:W[0],fallback:(0,V.tZ)(_s,{title:(0,h.t)("Cannot load filter"),body:G.error,level:"error"})}):(0,V.tZ)(ql,{setDataMask:e=>{var i,n;rn()(null==tt||null==(i=tt.filterState)?void 0:i.value,null==e||null==(n=e.filterState)?void 0:n.value)||qe(),Jl(r,t,{defaultDataMask:e}),r.validateFields([["filters",t,"defaultDataMask"]]),ae()},hasDefaultValue:ze,filterId:t,hasDataset:xe,form:r,formData:Pe,enableNoResults:Re}),xe&&Ce&&(0,V.tZ)(N.u,{title:(0,h.t)("Refresh the default values"),children:(0,V.tZ)(Cd,{onClick:()=>_e(!0)})})]}):(0,h.t)('Fill all required fields to enable "Default Value"')})})}),Object.keys(Se).sort(((e,t)=>md.indexOf(e)-md.indexOf(t))).map((e=>Se[e].element))]},`${t}-${$d.settings.key}`)]},`native-filter-config-${t}`)]},kd.configuration.key),(0,V.tZ)(hd,{tab:kd.scoping.name,forceRender:!0,children:(0,V.tZ)(Ll,{updateFormValues:Ve,pathToFormValue:["filters",t],forceUpdate:ae,filterScope:null==i?void 0:i.scope,formFilterScope:null==ue?void 0:ue.scope,formScopingType:null==ue?void 0:ue.scoping,initiallyExcludedCharts:at})},kd.scoping.key)]})},Id=(0,o.memo)((0,o.forwardRef)(Md));var Fd={name:"1216n71",styles:"text-align:left;flex:1;& .ant-alert-action{align-self:center;}"},Ed={name:"zjik7",styles:"display:flex"};function _d({title:e,onConfirm:t,onDismiss:i,children:n}){return(0,V.tZ)(Et.Z,{closable:!1,type:"warning",message:e,css:Fd,description:n,action:(0,V.BX)("div",{css:Ed,children:[(0,V.tZ)(M.Z,{buttonSize:"small",buttonStyle:"secondary",onClick:i,children:(0,h.t)("Keep editing")},"cancel"),(0,V.tZ)(M.Z,{buttonSize:"small",buttonStyle:"primary",onClick:t,children:(0,h.t)("Yes, cancel")},"submit")]})},"alert")}const Pd=({canSave:e=!0,onCancel:t,handleSave:i,onDismiss:n,onConfirmCancel:r,saveAlertVisible:o})=>o?(0,V.tZ)(_d,{title:(0,h.t)("There are unsaved changes."),onConfirm:r,onDismiss:n,children:(0,h.t)("Are you sure you want to cancel?")},"cancel-confirm"):(0,V.BX)(V.HY,{children:[(0,V.tZ)(M.Z,{buttonStyle:"secondary",onClick:t,children:(0,h.t)("Cancel")},"cancel"),(0,V.tZ)(M.Z,{disabled:!e,buttonStyle:"primary",onClick:i,children:(0,h.t)("Save")},"submit")]}),zd=a.iK.div`
  ${({theme:e})=>`\n    padding: ${4*e.gridUnit}px;\n  `}
`,Ud=({componentId:e,divider:t})=>(0,V.BX)(zd,{children:[(0,V.tZ)(_t.xJ,{initialValue:t?t.title:"",label:(0,h.t)("Title"),name:["filters",e,"title"],rules:[{required:!0,message:(0,h.t)("Title is required"),whitespace:!0}],children:(0,V.tZ)($.II,{})}),(0,V.tZ)(_t.xJ,{initialValue:t?t.description:"",label:(0,h.t)("Description"),name:["filters",e,"description"],children:(0,V.tZ)($.Kx,{rows:4})}),(0,V.tZ)(_t.xJ,{hidden:!0,name:["filters",e,"type"],initialValue:Pr.BE.Divider})]}),Od=(0,a.iK)(fi.o)`
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
`,Bd=a.iK.div`
  display: flex;
  height: ${({expanded:e})=>e?"100%":"700px"};
  flex-direction: row;
  flex: 1;
  .filters-list {
    width: ${({theme:e})=>50*e.gridUnit}px;
    overflow: auto;
  }
`,Nd=(0,a.iK)(T.qz)`
  width: 100%;
`,qd=a.iK.div`
  margin-left: ${({theme:e})=>4*e.gridUnit}px;
`,Vd=Ya("filters-config-modal"),Ad=["filter_range","filter_select","filter_time"],Kd=[],jd={},Ld={filters:{}};function Xd({isOpen:e,initialFilterId:t,createNewOnOpen:i,onSave:n,onCancel:r}){const l=(0,u.I0)(),d=(0,a.Fg)(),[c]=T.qz.useForm(),m=(0,o.useRef)(),g=ys(),f=function(){const e=ys();return(0,o.useMemo)((()=>e.reduce(((e,t)=>(e[t.id]=t,e)),{})),[e])}(),[v,b]=(0,o.useState)(Kd),[y,x]=(0,o.useState)(jd),[S,w]=(0,o.useState)(!1),Z=(0,o.useMemo)((()=>ml()([...(0,ts.QN)(g),...v]).filter((e=>{var t;return!y[e]||(null==(t=y[e])?void 0:t.isPending)}))),[g,v,y]),R=null!=t?t:Z[0],[k,$]=(0,o.useState)(R),[D,M]=(0,o.useState)(Kd),[F,E]=(0,o.useState)(Ld),_=v.filter((e=>!y[e])),P=(0,o.useCallback)((e=>{const t=y[e];null!=t&&t.isPending&&clearTimeout(t.timerId),x((t=>({...t,[e]:null})))}),[y]),z=(0,o.useMemo)((()=>Object.keys(f)),[f]),[U,O]=(0,o.useState)(z),[B,N]=(0,o.useState)([R]),q=e=>[`${e}-${$d.configuration.key}`,`${e}-${$d.settings.key}`],[A,K]=(0,o.useState)(q(R)),j=(0,o.useCallback)((e=>{const t=(0,ts.W6)(e);b([...v,t]),$(t),w(!1),O([...U,t]),K(q(t))}),[v,U,$,O,b]);((e,t,i)=>{const n=(0,xr.D)(e);(0,o.useEffect)((()=>{i&&e&&!n&&t(Pr.BE.NativeFilter)}),[i,e,n,t])})(e,j,i),((e,t,i,n)=>{(0,o.useEffect)((()=>{const r=e[t];if(r&&!r.isPending){const r=i.flat().find((i=>!e[i]&&i!==t));r&&n(r)}}),[t,e,i,n])})(y,k,U,$);const L=(0,ts.EJ)(x,O,w),X=(e=!1)=>{b(Kd),$(R),x(jd),w(!1),E(Ld),M(Kd),Z.length>0&&K(q(Z[0])),e||O(z),N([R]),c.resetFields(["filters"]),c.setFieldsValue({changed:!1})},H=(0,o.useCallback)((e=>{const t=F.filters[e],i=f[e];return t&&"name"in t&&t.name||t&&"title"in t&&t.title||i&&"name"in i&&i.name||i&&"title"in i&&i.title||(0,h.t)("[untitled]")}),[f,F.filters]),W=(0,o.useCallback)((e=>{var t;if(y[e])return!1;const i=(null==(t=c.getFieldValue("filters"))?void 0:t[e])||f[e];return i&&"filterType"in i&&Ad.includes(i.filterType)}),[f,c,y]),Y=(0,o.useCallback)((e=>Z.filter((t=>t!==e)).filter((e=>W(e))).map((e=>{var t;return{label:H(e),value:e,type:null==(t=f[e])?void 0:t.filterType}}))),[W,Z,H]),G=(0,o.useCallback)((()=>{const e=c.getFieldsError(),t=[];e.forEach((e=>{const i=e.name[1];e.errors.length>0&&!t.includes(i)&&t.push(i)})),!t.length&&D.length>0?M(Kd):t.length>0&&!rn()(ul()(D),ul()(t))&&M(t)}),[c,D]),J=async()=>{const e=await(0,ts.G$)(c,k,$);if(G(),e){const t=(e=>{const t=Object.keys(f).reduce(((e,t)=>{var i;const n=f[t],r=null==(i=n.cascadeParentIds)?void 0:i.filter((e=>W(e)));return r&&l((0,Os.rF)(t,r)),{...e,[t]:{...n,cascadeParentIds:r}}}),{}),i=null==e?void 0:e.filters;return i&&Object.keys(i).forEach((e=>{const t=i[e];if(!("dependencies"in t))return;const{dependencies:n}=t;n&&(t.dependencies=n.filter((e=>W(e))))})),t})(e);(0,ts.GA)(t,U,y,n,e)(),X(!0)}else{var t;null==(t=m.current)||null==t.changeTab||t.changeTab("configuration")}},Q=()=>{X(),r()},ee=()=>{const e=c.getFieldValue("changed"),t=U.length!==z.length||U.some(((e,t)=>e!==z[t]));_.length>0||c.isFieldsTouched()||e||t?w(!0):Q()},te=(0,o.useCallback)((()=>{const e=new Map,t=c.getFieldValue("filters");return t&&Object.keys(t).forEach((i=>{const n=t[i],r=f[i];let o=[];n&&"dependencies"in n?o=[...n.dependencies]:null!=r&&r.cascadeParentIds&&(o=[...r.cascadeParentIds]),e.set(i,o)})),e}),[f,c]),ie=(0,o.useCallback)((()=>{const e=te();Z.filter((e=>!y[e])).forEach((t=>{const i={name:["filters",t,"dependencies"],errors:(0,ts.uh)(e,t)?[(0,h.t)("Cyclic dependency detected")]:[]};c.setFields([i])})),G()}),[te,Z,c,G,y]),ne=(0,o.useCallback)((e=>{const t=te(),i=U.filter((t=>t!==e&&W(t)));return i.find((i=>{const n=t.get(e)||[];return n.push(i),!(0,ts.uh)(t,e)||(n.pop(),!1)}))||i[0]}),[te,W,U]),[re,oe]=(0,o.useState)(!1),ae=(0,gl.Z)((()=>{oe(!re)})),se=re?I.Z.FullscreenExitOutlined:I.Z.FullscreenOutlined,le=(0,o.useMemo)((()=>C()(((e,t)=>{const i=e.filters&&Object.values(e.filters).some((e=>e.name&&null!==e.name)),n=e.filters&&Object.values(e.filters).some((e=>e.title&&null!==e.title));(i||n)&&E(t),w(!1),G()}),ba.M)),[G]);(0,o.useEffect)((()=>{ct()(y)||M((e=>e.filter((e=>!y[e]))))}),[y]),(0,o.useEffect)((()=>{B.includes(k)||N([...B,k])}),[k]);const de=(0,o.useCallback)((e=>K(e)),[K]),ce=(0,o.useMemo)((()=>U.map((e=>{if(!B.includes(e))return null;const t=e.startsWith(ts.Ky),i=k===e;return(0,V.tZ)("div",{style:{height:"100%",overflowY:"auto",display:i?"":"none"},children:t?(0,V.tZ)(Ud,{componentId:e,divider:f[e]}):(0,V.tZ)(Id,{expanded:re,ref:m,form:c,filterId:e,filterToEdit:f[e],removedFilters:y,restoreFilter:P,getAvailableFilters:Y,activeFilterPanelKeys:A,handleActiveFilterPanelChange:de,isActive:i,setErroredFilters:M,validateDependencies:ie,getDependencySuggestion:ne},e)},e)}))),[B,U,k,f,c,y,P,Y,A,ie,ne,de,re]);return(0,V.tZ)(Od,{visible:e,maskClosable:!1,title:(0,h.t)("Add and edit filters"),expanded:re,destroyOnClose:!0,onCancel:ee,onOk:J,centered:!0,footer:(0,V.BX)("div",{css:s.iv`
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
          `,children:[(0,V.tZ)(Pd,{onDismiss:()=>w(!1),onCancel:ee,handleSave:J,canSave:!D.length,saveAlertVisible:S,onConfirmCancel:Q}),(0,V.tZ)(qd,{children:(0,V.tZ)(se,{iconSize:"l",iconColor:d.colors.grayscale.dark2,onClick:ae})})]}),children:(0,V.tZ)(p.Z,{children:(0,V.tZ)(Bd,{expanded:re,children:(0,V.tZ)(Nd,{form:c,onValuesChange:le,layout:"vertical",children:(0,V.tZ)(wl,{erroredFilters:D,onRemove:L,onAdd:j,onChange:e=>{$(e),K(q(e))},getFilterTitle:H,currentFilterId:k,removedFilters:y,restoreFilter:P,onRearrange:(e,t)=>{const i=[...U],n=i.splice(e,1)[0];i.splice(t,0,n),O(i)},filters:U,children:ce})})})})})}const Hd=(0,o.memo)(Xd),Wd=(0,a.iK)(M.Z)`
  padding: 0;
`,Yd=({createNewOnOpen:e,dashboardId:t,initialFilterId:i,onClick:n,children:r})=>{const a=(0,u.I0)(),[s,l]=(0,o.useState)(!1),d=(0,o.useCallback)((()=>{l(!1)}),[l]),c=(0,o.useCallback)((async e=>{a(await(0,Os.RY)(e)),d()}),[a,d]),h=(0,o.useCallback)((()=>{l(!0),n&&n()}),[l,n]);return(0,V.BX)(V.HY,{children:[(0,V.tZ)(Wd,{...es("create-filter"),buttonStyle:"link",buttonSize:"xsmall",onClick:h,children:r}),(0,V.tZ)(Hd,{isOpen:s,onSave:c,onCancel:d,initialFilterId:i,createNewOnOpen:e},`filters-for-${t}`)]})},Gd=(0,o.memo)(Yd),Jd=({filter:e,hidePopover:t})=>{const i=(0,a.Fg)(),[n,,r]=(0,Xs.Z)(),o=(0,u.v9)((({dashboardInfo:e})=>e.id)),l=(0,u.v9)((({dashboardInfo:e})=>e.dash_edit_perm));return(0,V.BX)(Ys,{css:e=>s.iv`
        margin-bottom: ${3*e.gridUnit}px;
        justify-content: space-between;
      `,children:[(0,V.BX)(ol,{children:[(0,V.tZ)(I.Z.FilterSmall,{css:e=>s.iv`
            margin-right: ${e.gridUnit}px;
          `}),(0,V.tZ)(al,{title:r?e.name:null,children:(0,V.tZ)(Qs,{ref:n,children:e.name})})]}),l&&(0,V.tZ)(Yd,{dashboardId:o,onClick:t,initialFilterId:e.id,children:(0,V.tZ)(I.Z.Edit,{iconSize:"l",iconColor:i.colors.grayscale.light1})})]})},Qd=({filter:e})=>{const t=(0,o.useMemo)((()=>(0,un.Z)().get(e.filterType)),[e.filterType]);return(0,V.BX)(Ys,{children:[(0,V.tZ)(Gs,{children:(0,h.t)("Filter type")}),(0,V.tZ)(Js,{children:null==t?void 0:t.name})]})},ec=({filter:e,hidePopover:t})=>(0,V.BX)("div",{children:[(0,V.tZ)(Jd,{filter:e,hidePopover:t}),(0,V.tZ)(Qd,{filter:e}),(0,V.tZ)(ll,{filter:e}),(0,V.tZ)(cl,{filter:e})]}),tc=({children:e,filter:t,getPopupContainer:i,isVisible:n=!0,placement:r})=>{const[a,s]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{n||s(!1)}),[n]),(0,V.tZ)(Hi.J,{placement:r,overlayClassName:"filter-card-popover",mouseEnterDelay:.2,mouseLeaveDelay:.2,onVisibleChange:e=>{s(n&&e)},visible:n&&a,content:(0,V.tZ)(ec,{filter:t,hidePopover:()=>{s(!1)}}),getPopupContainer:null!=i?i:()=>document.body,children:e})};var ic=i(42074);const{SubMenu:nc}=ht.Menu,rc=(0,a.iK)(ic.P)`
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
`,oc=(0,a.iK)(ht.Menu)`
  ${({theme:e})=>`\n    .info {\n      font-size: ${e.typography.sizes.s}px;\n      color: ${e.colors.grayscale.base};\n      padding: ${e.gridUnit}px ${3*e.gridUnit}px ${e.gridUnit}px ${3*e.gridUnit}px;\n    }\n    .ant-dropdown-menu-item-selected {\n      color: ${e.colors.grayscale.dark1};\n      background-color: ${e.colors.primary.light5};\n    }\n  `}
`,ac=(0,a.iK)(ht.Menu.Item)`
  display: flex;
  justify-content: space-between;
  > span {
    width: 100%;
  }
  border-bottom: ${({divider:e,theme:t})=>e?`1px solid ${t.colors.grayscale.light3};`:"none;"};
`,sc=a.iK.div`
  display: flex;
  justify-content: space-between;
  > span {
    width: 100%;
  }
`,lc=e=>{const t=(0,a.Fg)(),{icon:i,info:n,menuItems:r,selectedKeys:s,onSelect:l}=e,d=(0,o.useMemo)((()=>(e,i,n)=>(0,V.tZ)(ac,{divider:n,children:(0,V.BX)(sc,{children:[(0,V.tZ)("span",{children:e}),(null==s?void 0:s.includes(i))&&(0,V.tZ)(I.Z.Check,{iconColor:t.colors.primary.base,className:"tick-menu-item",iconSize:"xl"})]})},i)),[s,t.colors.primary.base]),c=(0,o.useMemo)((()=>(0,V.BX)(oc,{selectedKeys:s,onSelect:l,selectable:!0,children:[n&&(0,V.tZ)("div",{className:"info",children:n}),r.map((e=>{var t;return null!=(t=e.children)&&t.length?(0,V.tZ)(nc,{title:e.label,children:e.children.map((e=>d(e.label,e.key)))},e.key):d(e.label,e.key,e.divider)}))]})),[s,l,n,r,d]);return(0,V.tZ)(rc,{overlay:c,trigger:["click"],icon:i})},dc=a.iK.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .enable-cross-filters-text {
    padding-left: ${({theme:e})=>2*e.gridUnit+"px"};
  }
`,cc=(0,a.iK)(z.ZP)`
  ${({theme:e})=>`\n  &,\n  svg {\n    display: inline-block;\n    width: ${4*e.gridUnit}px;\n    height: ${4*e.gridUnit}px;\n  }\n`}
`,hc="cross-filters-menu-key",uc="cross-filters-scoping-menu-key",pc=()=>{const e=(0,u.I0)(),t=(0,a.Fg)(),i=(0,u.v9)((({dashboardInfo:e})=>e.crossFiltersEnabled)),n=(0,u.v9)((({dashboardInfo:e})=>e.filterBarOrientation)),[r,s]=(0,o.useState)(n),l=(0,d.cr)(d.TT.DashboardCrossFilters),c=i&&l,[p,m]=(0,o.useState)(c),g=(0,u.v9)((({dashboardInfo:e})=>e.dash_edit_perm)),f=g&&(0,d.cr)(d.TT.HorizontalFilterBar),[v,b]=sr(),y=(0,o.useCallback)((async t=>{t||e((0,it.sh)()),await e((0,Oi.C6)(t))}),[e]),x=(0,o.useCallback)((()=>{m(!p),y(!p)}),[p,y]),C=(0,o.useCallback)((async t=>{if(t!==n){s(t);try{await e((0,Oi.Mn)(t))}catch{s(n)}}}),[e,n]),S=(0,o.useCallback)((e=>{const t=e.key;var i;t===hc?x():(i=t)===ft.Bp.Vertical||i===ft.Bp.Horizontal?C(t):t===uc&&v()}),[v,x,C]),w=(0,o.useMemo)((()=>(0,V.BX)(dc,{children:[(0,V.tZ)(cc,{className:"enable-cross-filters",checked:p,onChange:e=>m(e||!1)})," ",(0,V.tZ)("span",{className:"enable-cross-filters-text",children:(0,h.t)("Enable cross-filtering")})]})),[p]),Z=(0,o.useMemo)((()=>{const e=[];return l&&g&&(e.push({key:hc,label:w}),e.push({key:uc,label:(0,h.t)("Cross-filtering scoping"),divider:f})),f&&e.push({key:"placement",label:(0,h.t)("Orientation of filter bar"),children:[{key:ft.Bp.Vertical,label:(0,h.t)("Vertical (Left)")},{key:ft.Bp.Horizontal,label:(0,h.t)("Horizontal (Top)")}]}),e}),[g,f,w,l]);return Z.length?(0,V.BX)(V.HY,{children:[(0,V.tZ)(lc,{onSelect:S,icon:(0,V.tZ)(I.Z.Gear,{name:"gear",iconColor:t.colors.grayscale.base}),menuItems:Z,selectedKeys:[r]}),b]}):null},mc=a.iK.div`
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
`,gc=(0,a.iK)(M.Z)`
  padding: 0;
`,fc=a.iK.div`
  ${({theme:e})=>`\n    padding: ${3*e.gridUnit}px ${2*e.gridUnit}px ${e.gridUnit}px;\n\n    .ant-dropdown-trigger span {\n      padding-right: ${2*e.gridUnit}px;\n    }\n  `}
`,vc=a.iK.div`
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
`,bc=({toggleFiltersBar:e})=>{const t=(0,a.Fg)(),i=is(),n=(0,o.useMemo)((()=>Object.values(i)),[i]),r=(0,u.v9)((({dashboardInfo:e})=>e.dash_edit_perm)),s=(0,u.v9)((({dashboardInfo:e})=>e.id));return(0,V.BX)(fc,{children:[(0,V.BX)(mc,{children:[(0,V.tZ)("span",{children:(0,h.t)("Filters")}),(0,V.tZ)(pc,{}),(0,V.tZ)(gc,{...es("collapse-button"),buttonStyle:"link",buttonSize:"xsmall",onClick:()=>e(!1),children:(0,V.tZ)(I.Z.Expand,{iconColor:t.colors.grayscale.base})})]}),r&&(0,V.tZ)(vc,{children:(0,V.BX)(Gd,{dashboardId:s,createNewOnOpen:0===n.length,children:[(0,V.tZ)(I.Z.PlusSmall,{})," ",(0,h.t)("Add/Edit Filters")]})})]})},yc=(0,o.memo)(bc),xc=e=>{const{dataMask:t,chartConfiguration:i,dashboardLayout:n,verboseMaps:r}=e;return Object.keys(i).map((e=>{const i=Number(e),o=Vr(i,t[i],n);if((0,Cn.Z)(o.column)&&(0,Cn.Z)(o.value)){var a;const e=(null==(a=r[i])?void 0:a[(0,_r.Z)(o.column)])||o.column;return{...o,column:e,emitterId:i}}return null})).filter(Boolean)};var Cc=i(8420);const Sc=s.iv`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: middle;
`,wc=a.iK.b`
  ${({theme:e})=>`\n    max-width: ${25*e.gridUnit}px;\n  `}
  ${Sc}
`,Zc=(0,a.iK)("span")`
  ${({theme:e})=>`\n    max-width: ${25*e.gridUnit}px;\n    padding-right: ${e.gridUnit}px;\n  `}
  ${Sc}
`,Rc=(0,a.iK)(T.Vp)`
  ${({theme:e})=>`\n    border: 1px solid ${e.colors.grayscale.light3};\n    border-radius: 2px;\n    .anticon-close {\n      vertical-align: middle;\n    }\n  `}
`,kc=e=>{var t;const{filter:i,orientation:n,removeCrossFilter:r}=e,o=(0,a.Fg)(),[l,d]=(0,$s.Z)(),[c,h]=(0,$s.Z)(),u=(0,_r.Z)(null!=(t=i.column)?t:"");return(0,V.BX)(Rc,{css:s.iv`
        ${n===ft.Bp.Vertical?`\n            margin-top: ${2*o.gridUnit}px;\n          `:`\n            margin-left: ${2*o.gridUnit}px;\n          `}
      `,closable:!0,onClose:()=>r(i.emitterId),closeIcon:Cc.H,children:[(0,V.tZ)(N.u,{title:d?u:null,children:(0,V.tZ)(Zc,{ref:l,children:u})}),(0,V.tZ)(N.u,{title:h?i.value:null,children:(0,V.tZ)(wc,{ref:c,children:i.value})})]})},$c=a.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    font-size: ${e.typography.sizes.s}px;\n    color: ${e.colors.grayscale.base};\n    vertical-align: middle;\n    align-items: center;\n  `}
`,Tc=(0,a.iK)(I.Z.SearchOutlined)`
  ${({theme:e})=>`\n    & > span.anticon.anticon-search {\n      color: ${e.colors.grayscale.light1};\n      margin-left: ${e.gridUnit}px;\n      transition: 0.3s;\n      vertical-align: middle;\n      line-height: 0;\n      &:hover {\n        color: ${e.colors.grayscale.base};\n      }\n    }\n  `}
`,Dc=e=>{const{title:t,orientation:i,onHighlightFilterSource:n}=e,[r,o]=(0,$s.Z)(),l=(0,a.Fg)();return(0,V.BX)($c,{children:[(0,V.tZ)(N.u,{title:o?t:null,children:(0,V.tZ)("span",{css:s.iv`
            max-width: ${i===ft.Bp.Vertical?45*l.gridUnit+"px":15*l.gridUnit+"px"};
            line-height: 1.4;
            ${Sc}
          `,ref:r,children:t})}),(0,V.tZ)(N.u,{title:(0,h.t)("Locate the chart"),children:(0,V.tZ)(Tc,{iconSize:"s",role:"button",tabIndex:0,onClick:n})})]})},Mc=e=>{const{filter:t,orientation:i,last:n}=e,r=(0,a.Fg)(),l=(0,u.I0)(),d=(0,o.useCallback)((e=>{e&&l((0,Bi.E2)(e))}),[l]);return(0,V.BX)("div",{css:s.iv`
        ${i===ft.Bp.Vertical?`\n            display: block;\n            margin-bottom: ${4*r.gridUnit}px;\n          `:"\n            display: flex;\n          "}
      `,children:[(0,V.tZ)(Dc,{title:t.name,orientation:i||ft.Bp.Horizontal,onHighlightFilterSource:()=>d(t.path)}),(t.column||t.value)&&(0,V.tZ)(kc,{filter:t,orientation:i,removeCrossFilter:e=>{l((0,it.eG)(e,{extraFormData:{filters:[]},filterState:{value:null,selectedValues:null}}))}}),n&&(0,V.tZ)("span",{css:s.iv`
            ${i===ft.Bp.Horizontal?`\n                width: 1px;\n                height: 22px;\n                margin-left: ${4*r.gridUnit}px;\n                margin-right: ${r.gridUnit}px;\n              `:`\n                width: 100%;\n                height: 1px;\n                display: block;\n                margin-bottom: ${4*r.gridUnit}px;\n                margin-top: ${4*r.gridUnit}px;\n            `}
            background: ${r.colors.grayscale.light2};
          `})]},`${t.name}${t.emitterId}`)},Ic=(0,a.iK)($l.Z)`
  ${({theme:e})=>`\n    .ant-collapse-header {\n      margin-bottom: ${4*e.gridUnit}px;\n    }\n    .ant-collapse-item > .ant-collapse-header {\n      padding-bottom: 0;\n    }\n    .ant-collapse-item > .ant-collapse-header > .ant-collapse-arrow {\n      font-size: ${e.typography.sizes.xs}px;\n      padding-top: ${3*e.gridUnit}px;\n    }\n    .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box {\n      padding-top: 0;\n    }\n  `}
`,Fc=a.iK.span`
  ${({theme:e})=>`\n    font-size: ${e.typography.sizes.s}px;\n  `}
`,Ec=e=>{const{crossFilters:t}=e,i=(0,a.Fg)(),n=(0,o.useMemo)((()=>t.map((e=>(0,V.tZ)(Mc,{filter:e,orientation:ft.Bp.Vertical},e.emitterId)))),[t]);return t.length?(0,V.tZ)(Ic,{ghost:!0,defaultActiveKey:"crossFilters",expandIconPosition:"right",children:(0,V.BX)($l.Z.Panel,{header:(0,V.tZ)(Fc,{children:(0,h.t)("Cross-filters")}),children:[n,(0,V.tZ)("span",{css:s.iv`
            width: 100%;
            height: 1px;
            display: block;
            background: ${i.colors.grayscale.light3};
            margin: ${8*i.gridUnit}px auto 0 auto;
          `})]},"crossFilters")}):null},_c=()=>{const e=(0,u.v9)((e=>e.dataMask)),t=(0,u.v9)((e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration})),i=(0,u.v9)((e=>e.dashboardLayout.present)),n=Qa(),r=xc({dataMask:e,chartConfiguration:t,dashboardLayout:i,verboseMaps:n});return(0,V.tZ)(Ec,{crossFilters:r})},Pc=a.iK.div`
  width: ${({theme:e})=>8*e.gridUnit}px;

  & .ant-tabs-top > .ant-tabs-nav {
    margin: 0;
  }
  &.open {
    width: ${({width:e})=>e}px; // arbitrary...
  }
`,zc=a.iK.div`
  ${({theme:e,width:t})=>`\n    & .ant-typography-edit-content {\n      left: 0;\n      margin-top: 0;\n      width: 100%;\n    }\n    position: absolute;\n    top: 0;\n    left: 0;\n    flex-direction: column;\n    flex-grow: 1;\n    width: ${t}px;\n    background: ${e.colors.grayscale.light5};\n    border-right: 1px solid ${e.colors.grayscale.light2};\n    border-bottom: 1px solid ${e.colors.grayscale.light2};\n    min-height: 100%;\n    display: none;\n    &.open {\n      display: flex;\n    }\n  `}
`,Uc=a.iK.div`
  ${({theme:e,offset:t})=>`\n    position: absolute;\n    top: ${t}px;\n    left: 0;\n    height: 100%;\n    width: ${8*e.gridUnit}px;\n    padding-top: ${2*e.gridUnit}px;\n    display: none;\n    text-align: center;\n    &.open {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      padding: ${2*e.gridUnit}px;\n    }\n    svg {\n      cursor: pointer;\n    }\n  `}
`,Oc=(0,a.iK)(I.Z.Collapse)`
  ${({theme:e})=>`\n    color: ${e.colors.primary.base};\n    margin-bottom: ${3*e.gridUnit}px;\n  `}
`,Bc=(0,a.iK)(I.Z.Filter)`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,Nc=a.iK.div`
  margin-top: ${({theme:e})=>8*e.gridUnit}px;
`,qc=a.iK.div`
  padding: ${({theme:e})=>4*e.gridUnit}px;
  // 108px padding to make room for buttons with position: absolute
  padding-bottom: ${({theme:e})=>27*e.gridUnit}px;
`,Vc=(0,o.createContext)(!1),Ac=({actions:e,canEdit:t,dataMaskSelected:i,filtersOpen:n,filterValues:a,height:l,isInitialized:c,offset:u,onSelectionChange:p,toggleFiltersBar:m,width:g})=>{const[f,v]=(0,o.useState)(!1),b=(0,o.useRef)(),y=(0,o.useCallback)((()=>m(!0)),[m]),x=(0,o.useMemo)((()=>te()((()=>{clearTimeout(b.current),v(!0),b.current=setTimeout((()=>{v(!1)}),300)}),200)),[]);(0,o.useEffect)((()=>(document.onscroll=x,()=>{document.onscroll=null})),[x]);const C=(0,o.useMemo)((()=>({overflow:"auto",height:l,overscrollBehavior:"contain"})),[l]),S=(0,o.useMemo)((()=>0===a.length?(0,V.tZ)(Nc,{children:(0,V.tZ)(Ra.Tc,{title:(0,h.t)("No global filters are currently added"),image:"filter.svg",description:t&&(0,h.t)('Click on "+Add/Edit Filters" button to create new dashboard filters')})}):(0,V.tZ)(qc,{children:(0,V.tZ)(fh,{dataMaskSelected:i,onFilterSelectionChange:p})})),[t,i,a.length,p]),w=(0,o.useMemo)((()=>(0,d.cr)(d.TT.DashboardCrossFilters)?(0,V.tZ)(_c,{}):null),[]);return(0,V.tZ)(Vc.Provider,{value:f,children:(0,V.BX)(Pc,{...es(),className:r()({open:n}),width:g,children:[(0,V.BX)(Uc,{...es("collapsable"),className:r()({open:!n}),onClick:y,role:"button",offset:u,children:[(0,V.tZ)(Oc,{...es("expand-button"),iconSize:"l"}),(0,V.tZ)(Bc,{...es("filter-icon"),iconSize:"l"})]}),(0,V.BX)(zc,{className:r()({open:n}),width:g,children:[(0,V.tZ)(yc,{toggleFiltersBar:m}),c?(0,V.tZ)("div",{css:C,onScroll:x,children:(0,V.BX)(V.HY,{children:[w,S]})}):(0,V.tZ)("div",{css:(0,s.iv)({height:l},"",""),children:(0,V.tZ)(D.Z,{})}),e]})]})})},Kc=(0,o.memo)(Ac);var jc;!function(e){e.Right="right",e.Bottom="bottom",e.Left="left"}(jc||(jc={}));const Lc=a.iK.div`
  position: absolute;
  right: 0;
`,Xc=a.iK.h4`
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  margin: 0;
  overflow-wrap: anywhere;
`,Hc=(0,a.iK)(Xc)`
  font-weight: ${({theme:e})=>e.typography.weights.normal};
  color: ${({theme:e})=>e.colors.grayscale.base};
  ${$s.B};
`,Wc=(0,a.iK)(Hc)`
  max-width: none;
`,Yc=a.iK.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
`,Gc=(0,a.iK)(Yc)`
  margin-bottom: unset;
`,Jc=(0,a.iK)(Yc)`
  width: 100%;
`,Qc=(0,a.iK)(_t.l0)`
  width: 100%;
  && .ant-form-item-label > label {
    text-transform: none;
    width: 100%;
    padding-right: ${({theme:e})=>11*e.gridUnit}px;
  }
  .ant-form-item-tooltip {
    margin-bottom: ${({theme:e})=>e.gridUnit}px;
  }
`,eh=(0,a.iK)(_t.l0)`
  && .ant-form-item-label > label {
    margin-bottom: 0;
    text-transform: none;
  }
  .ant-form-item-tooltip {
    margin-bottom: ${({theme:e})=>e.gridUnit}px;
  }
`,th=(0,a.iK)(Qc)`
  && .ant-form-item-label {
    line-height: 1;
    & > label {
      padding-right: unset;
    }
  }
`,ih=(0,a.iK)(_t.xJ)`
  .ant-form-item-label {
    overflow: visible;
    label.ant-form-item-required:not(.ant-form-item-required-mark-optional) {
      &::after {
        display: none;
      }
    }
  }
`,nh=(0,a.iK)(_t.xJ)`
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
`,rh=ih,oh=a.iK.div`
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
  display: flex;
`,ah=()=>(0,V.tZ)("span",{css:e=>({color:e.colors.error.base,fontSize:`${e.typography.sizes.s}px`,paddingLeft:"1px"}),children:"*"}),sh=({description:e})=>(0,V.tZ)(oh,{children:(0,V.tZ)(N.u,{title:e,placement:"right",overlayInnerStyle:{display:"-webkit-box",WebkitLineClamp:10,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"normal"},getPopupContainer:e=>e.parentElement,children:(0,V.tZ)("i",{className:"fa fa-info-circle text-muted",css:e=>({paddingLeft:`${e.gridUnit}px`,cursor:"pointer"})})})}),lh=({dataMaskSelected:e,filter:t,icon:i,onFilterSelectionChange:n,inView:r,showOverflow:a,parentRef:s,orientation:l=ft.Bp.Vertical,overflow:d=!1})=>{var c,h,u;const p=(0,o.useMemo)((()=>vs()),[]),[m,g]=(0,o.useState)(!1),{name:f="<undefined>"}=t,v=Ss()(t)&&Ja(t,null==(c=t.dataMask)?void 0:c.filterState)?"error":void 0,b=!(null==(h=t.controlValues)||!h.enableEmptyFilter),{FilterControlContainer:y,FormItem:x,FilterControlTitleBox:C,FilterControlTitle:S}=((e,t)=>(0,o.useMemo)((()=>e===ft.Bp.Horizontal?t?{FilterControlContainer:th,FormItem:rh,FilterControlTitleBox:Jc,FilterControlTitle:Wc}:{FilterControlContainer:eh,FormItem:nh,FilterControlTitleBox:Gc,FilterControlTitle:Hc}:{FilterControlContainer:Qc,FormItem:ih,FilterControlTitleBox:Yc,FilterControlTitle:Xc}),[e,t]))(l,d),w=(0,o.useMemo)((()=>{var e;return(0,V.BX)(C,{children:[(0,V.tZ)(S,{children:f}),b&&(0,V.tZ)(ah,{}),(null==(e=t.description)?void 0:e.trim())&&(0,V.tZ)(sh,{description:t.description}),(0,V.tZ)(Lc,{children:i})]})}),[C,S,f,b,t.description,i]),Z=(0,o.useContext)(Vc),R=(0,o.useMemo)((()=>l===ft.Bp.Horizontal?d?jc.Left:jc.Bottom:jc.Right),[l,d]);return(0,V.BX)(V.HY,{children:[(0,V.tZ)(gs,{node:p,children:(0,V.tZ)(Ls,{dataMaskSelected:e,filter:t,showOverflow:a,onFilterSelectionChange:n,inView:r,parentRef:s,setFilterActive:g,orientation:l,overflow:d,validateStatus:v})}),(0,V.tZ)(y,{layout:l!==ft.Bp.Horizontal||d?"vertical":"horizontal",children:(0,V.tZ)(tc,{filter:t,isVisible:!m&&!Z,placement:R,children:(0,V.tZ)("div",{children:(0,V.tZ)(x,{label:w,"aria-label":f,required:null==t||null==(u=t.controlValues)?void 0:u.enableEmptyFilter,validateStatus:v,children:(0,V.tZ)(fs,{node:p})})})})})]})},dh=(0,o.memo)(lh),ch=({title:e,description:t})=>(0,V.BX)("div",{children:[(0,V.tZ)("h3",{children:e}),t?(0,V.tZ)("p",{children:t}):null]}),hh=({title:e,description:t})=>{const i=(0,a.Fg)(),[n,r]=(0,$s.Z)();return(0,V.BX)("div",{css:s.iv`
        display: flex;
        align-items: center;
        height: ${6*i.gridUnit}px;
        border-left: 1px solid ${i.colors.grayscale.light2};
        padding-left: ${4*i.gridUnit}px;

        .filter-item-wrapper:first-child & {
          border-left: none;
          padding-left: 0;
        }
      `,children:[(0,V.tZ)(N.u,{overlay:r?e:null,children:(0,V.tZ)("h3",{ref:n,css:s.iv`
            ${$s.B};
            max-width: ${32.5*i.gridUnit}px;
            font-size: ${i.typography.sizes.m}px;
            font-weight: ${i.typography.weights.normal};
            margin: 0;
            color: ${i.colors.grayscale.dark1};
          `,children:e})}),t?(0,V.tZ)(N.u,{overlay:t,children:(0,V.tZ)(I.Z.BookOutlined,{iconSize:"l",iconColor:i.colors.grayscale.base,css:s.iv`
              margin: 0 ${1.5*i.gridUnit}px;
              vertical-align: unset;
              line-height: unset;
            `})}):null]})},uh=({title:e,description:t})=>{const i=(0,a.Fg)(),[n,r]=(0,$s.Z)(),[o,l]=(0,$s.Z)();return(0,V.BX)("div",{css:s.iv`
        border-top: 1px solid ${i.colors.grayscale.light2};
        padding-top: ${4*i.gridUnit}px;
        margin-bottom: ${4*i.gridUnit}px;
      `,children:[(0,V.tZ)(N.u,{overlay:r?(0,V.tZ)("strong",{children:e}):null,children:(0,V.tZ)("h3",{ref:n,css:s.iv`
            ${$s.B};
            display: block;
            color: ${i.colors.grayscale.dark1};
            font-weight: ${i.typography.weights.normal};
            font-size: ${i.typography.sizes.m}px;
            margin: 0 0 ${i.gridUnit}px 0;
          `,children:e})}),t?(0,V.tZ)(N.u,{overlay:l?t:null,children:(0,V.tZ)("p",{ref:o,css:s.iv`
              ${$s.B};
              display: block;
              font-size: ${i.typography.sizes.s}px;
              color: ${i.colors.grayscale.base};
              margin: ${i.gridUnit}px 0 0 0;
            `,children:t})}):null]})},ph=({title:e,description:t,orientation:i=ft.Bp.Vertical,overflow:n=!1})=>i===ft.Bp.Horizontal?n?(0,V.tZ)(uh,{title:e,description:t}):(0,V.tZ)(hh,{title:e,description:t}):(0,V.tZ)(ch,{title:e,description:t}),mh=({overflowedCrossFilters:e,filtersInScope:t,filtersOutOfScope:i,renderer:n,rendererCrossFilter:r,showCollapsePanel:o,forceRenderOutOfScope:a})=>(0,V.BX)("div",{css:e=>s.iv`
      width: ${56*e.gridUnit}px;
      padding: ${e.gridUnit}px 0;
    `,children:[e.map((t=>r(t,ft.Bp.Vertical,e.at(-1)))),t.map(n),o&&(0,V.tZ)(ks,{filtersOutOfScope:i,renderer:n,forceRender:a,horizontalOverflow:!0})]}),gh=({dataMaskSelected:e,onFilterSelectionChange:t})=>{const i=(0,u.v9)((({dashboardInfo:e})=>(0,d.cr)(d.TT.HorizontalFilterBar)?e.filterBarOrientation:ft.Bp.Vertical)),{outlinedFilterId:n,lastUpdated:r}=qs(),[a,l]=(0,o.useState)([]),c=(0,o.useRef)(null),p=(0,u.v9)((e=>e.dataMask)),m=(0,u.v9)((e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration})),g=(0,u.v9)((e=>e.dashboardLayout.present)),f=Qa(),v=(0,d.cr)(d.TT.DashboardCrossFilters),b=(0,o.useMemo)((()=>v?xc({dataMask:p,chartConfiguration:m,dashboardLayout:g,verboseMaps:f}):[]),[m,g,p,v]),{filterControlFactory:y,filtersWithValues:x}=((e,t)=>{const i=is(),n=(0,o.useMemo)((()=>Object.values(i)),[i]),r=(0,o.useMemo)((()=>n.map((t=>({...t,dataMask:e[t.id]})))),[n,e]);return{filterControlFactory:(0,o.useCallback)(((i,n,o)=>{const a=r[i];return(0,Pr.nY)(a)?(0,V.tZ)(ph,{title:a.title,description:a.description,orientation:n,overflow:o}):(0,V.tZ)(dh,{dataMaskSelected:e,filter:a,onFilterSelectionChange:t,inView:!1,orientation:n,overflow:o})}),[r,e,t]),filtersWithValues:r}})(e,t),C=(0,o.useMemo)((()=>{const e=new Array(x.length);for(let t=0;t<x.length;t+=1)e[t]=vs();return e}),[x.length]),S=new Set(x.map((e=>e.id))),[w,Z]=ws(x),R=(0,o.useMemo)((()=>x.some((e=>e.requiredFirst))),[x]),k=Cs()&&x.length>0,$=(0,o.useCallback)((({id:e},t)=>{const i=x.findIndex((t=>t.id===e)),n=null!=t?t:e;return(0,V.BX)(o.Fragment,{children:["",(0,V.tZ)(fs,{node:C[i],inView:!0})]},n)}),[x,C]),T=(0,o.useMemo)((()=>w.filter((({id:e})=>null==a?void 0:a.includes(e)))),[w,a]),D=(0,o.useMemo)((()=>b.filter((({emitterId:e,name:t})=>null==a?void 0:a.includes(`${t}${e}`)))),[a,b]),M=(0,o.useMemo)((()=>[...T.filter((e=>(0,Pr.S0)(e))),...D]),[D,T]),F=(0,o.useCallback)(((e,t,i)=>(0,V.tZ)(Mc,{filter:e,orientation:t,last:w.length>0&&`${i.name}${i.emitterId}`==`${e.name}${e.emitterId}`})),[w.length]),E=(0,o.useMemo)((()=>[...b.map((e=>({id:`${e.name}${e.emitterId}`,element:F(e,ft.Bp.Horizontal,b.at(-1))}))),...w.map(((e,t)=>({id:e.id,element:(0,V.tZ)("div",{className:"filter-item-wrapper",css:s.iv`
            flex-shrink: 0;
          `,children:$(e,t)})})))]),[w,$,F,b]),_=(0,o.useMemo)((()=>{const e=new Set(Z.map((({id:e})=>e))),t=new Set(T.map((({id:e})=>e)));return x.map((i=>e.has(i.id)||t.has(i.id)))}),[Z,x,T]);return(0,o.useEffect)((()=>{var e;n&&a.includes(n)&&(null==c||null==(e=c.current)||e.open())}),[n,r,c,a]),(0,V.BX)(V.HY,{children:[C.filter(((e,t)=>S.has(x[t].id))).map(((e,t)=>(0,V.tZ)(gs,{node:e,children:y(t,i,_[t])},x[t].id))),i===ft.Bp.Vertical&&(0,V.BX)(V.HY,{children:[w.map($),k&&(0,V.tZ)(ks,{filtersOutOfScope:Z,forceRender:R,hasTopMargin:w.length>0,renderer:$})]}),i===ft.Bp.Horizontal&&(0,V.tZ)("div",{css:e=>s.iv`
        padding: 0 ${4*e.gridUnit}px;
        min-width: 0;
        flex: 1;
      `,children:(0,V.tZ)(Rs,{items:E,dropdownTriggerIcon:(0,V.tZ)(I.Z.FilterSmall,{css:s.iv`
              && {
                margin-right: -4px;
                display: flex;
              }
            `}),dropdownTriggerText:(0,h.t)("More filters"),dropdownTriggerCount:M.length,dropdownTriggerTooltip:0===M.length?(0,h.t)("No applied filters"):(0,h.t)("Applied filters: %s",M.map((e=>e.name)).join(", ")),dropdownContent:T.length||D.length||Z.length&&k?()=>(0,V.tZ)(mh,{overflowedCrossFilters:D,filtersInScope:T,filtersOutOfScope:Z,renderer:$,rendererCrossFilter:F,showCollapsePanel:k,forceRenderOutOfScope:R}):void 0,forceRender:R,ref:c,onOverflowingStateChange:({overflowed:e})=>{(e.length!==a.length||a.reduce(((t,i,n)=>t||i!==e[n]),!1))&&l(e)}})})]})},fh=(0,o.memo)(gh),vh=a.iK.div`
  ${({theme:e})=>`\n    padding: ${3*e.gridUnit}px ${2*e.gridUnit}px ${3*e.gridUnit}px ${4*e.gridUnit}px;\n    background: ${e.colors.grayscale.light5};\n    box-shadow: inset 0px -2px 2px -1px ${e.colors.grayscale.light2};\n  `}
`,bh=a.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: center;\n    justify-content: flex-start;\n    line-height: 0;\n\n    .loading {\n      margin: ${2*e.gridUnit}px auto ${2*e.gridUnit}px;\n      padding: 0;\n    }\n  `}
`,yh=a.iK.div`
  ${({theme:e})=>`\n    font-weight: ${e.typography.weights.bold};\n    color: ${e.colors.grayscale.base};\n    font-size: ${e.typography.sizes.s}px;\n  `}
`,xh=a.iK.div`
  ${({theme:e,hasFilters:t})=>`\n    height: 24px;\n    display: flex;\n    align-items: center;\n    padding: 0 ${4*e.gridUnit}px 0 ${4*e.gridUnit}px;\n    border-right: ${t?`1px solid ${e.colors.grayscale.light2}`:0};\n\n    button {\n      display: flex;\n      align-items: center;\n      > .anticon {\n        height: 24px;\n        padding-right: ${e.gridUnit}px;\n      }\n      > .anticon + span, > .anticon {\n          margin-right: 0;\n          margin-left: 0;\n        }\n    }\n  `}
`,Ch=({actions:e,canEdit:t,dashboardId:i,dataMaskSelected:n,filterValues:r,isInitialized:o,onSelectionChange:a})=>{const s=(0,u.v9)((e=>e.dataMask)),l=(0,u.v9)((e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration})),c=(0,u.v9)((e=>e.dashboardLayout.present)),p=(0,d.cr)(d.TT.DashboardCrossFilters),m=Qa(),g=p?xc({dataMask:s,chartConfiguration:l,dashboardLayout:c,verboseMaps:m}):[],f=r.length>0||g.length>0;return(0,V.tZ)(vh,{...es(),children:(0,V.tZ)(bh,{children:o?(0,V.BX)(V.HY,{children:[(0,V.tZ)(pc,{}),t&&(0,V.tZ)(xh,{hasFilters:f,children:(0,V.BX)(Gd,{dashboardId:i,createNewOnOpen:0===r.length,children:[(0,V.tZ)(I.Z.PlusSmall,{})," ",(0,h.t)("Add/Edit Filters")]})}),!f&&(0,V.tZ)(yh,{children:(0,h.t)("No filters are currently added to this dashboard.")}),f&&(0,V.tZ)(fh,{dataMaskSelected:n,onFilterSelectionChange:a}),e]}):(0,V.tZ)(D.Z,{position:"inline-centered"})})})},Sh=(0,o.memo)(Ch),wh=a.iK.div`
  display: none;
`,Zh=[ut.KD.nativeFilters.name,ut.KD.permalinkKey.name],Rh=C()((async(e,t,i,n,r)=>{const{location:o}=e,{search:a}=o,s=new URLSearchParams(a),l=new URLSearchParams;let d;s.forEach(((e,t)=>{Zh.includes(t)||l.append(t,e)}));const c=(0,gt.eY)(ut.KD.nativeFiltersKey),h=JSON.stringify(n);d=i&&c&&await(0,rs.TZ)(t,h,c,r)?c:await(0,rs.u7)(t,h,r),d&&l.set(ut.KD.nativeFiltersKey.name,d),window.location.pathname.includes("/superset/dashboard")&&(e.location.pathname=window.location.pathname,e.replace({search:l.toString()}))}),ba.M),kh=({orientation:e=ft.Bp.Vertical,verticalConfig:t,hidden:i=!1})=>{const n=(0,on.k6)(),r=ns(),[a,s]=(0,Xa.x)(r),l=(0,u.I0)(),[d,c]=(0,o.useState)(0),h=(0,Wa.z)(),p=is(),m=(0,xr.D)(p),g=Object.values(p),f=g.filter(Pr.kI),v=(0,u.v9)((({dashboardInfo:e})=>null==e?void 0:e.id)),b=(0,xr.D)(v),y=(0,u.v9)((({dashboardInfo:e})=>e.dash_edit_perm)),x=(0,u.v9)((e=>e.user)),[C]=ws(f),S=(0,o.useRef)(a);S.current=a;const w=(0,o.useCallback)(((e,t)=>{s((i=>{var n,r,o;void 0!==(null==(n=t.filterState)?void 0:n.value)&&void 0===(null==(r=S.current[e.id])||null==(o=r.filterState)?void 0:o.value)&&e.requiredFirst&&l((0,it.eG)(e.id,t)),i[e.id]={...(0,Ha.H)(e.id),...t}}))}),[l,s]);(0,o.useEffect)((()=>{if(m&&v===b){const e={};Object.values(p).forEach((t=>{const i=null==m?void 0:m[t.id];if(!i)return;const n=t.filterType,r=t.targets,o=t.defaultDataMask,a=null==i?void 0:i.filterType,s=null==i?void 0:i.targets,l=null==i?void 0:i.defaultDataMask,d=n!==a,c=!rn()(r,s),h=!rn()(o,l);(d||c||h)&&(e[t.id]=(0,Ha.H)(t.id))})),ct()(e)||(s((t=>({...t,...e}))),Object.keys(e).forEach((e=>l((0,it.ze)(e)))))}}),[JSON.stringify(p),JSON.stringify(m),b]);const Z=JSON.stringify(r);(0,o.useEffect)((()=>{s((()=>r))}),[Z,s]),(0,o.useEffect)((()=>{null!=x&&x.userId&&Rh(n,v,d,r,h)}),[v,Z,n,d,h]);const R=(0,o.useCallback)((()=>{l((0,Vi.logEvent)(at.Qg,{}));const e=Object.keys(a);c(1),e.forEach((e=>{a[e]&&l((0,it.eG)(e,a[e]))}))}),[a,l]),k=(0,o.useCallback)((()=>{const e=[];let t=!1;C.filter(Pr.kI).forEach((i=>{const{id:n}=i;var r;a[n]&&(null!=(r=i.controlValues)&&r.enableEmptyFilter&&(t=!1),e.push(n),s((e=>{var t;void 0!==(null==(t=e[n].filterState)?void 0:t.value)&&(e[n].filterState.value=void 0)})))})),t&&e.forEach((e=>l((0,it.ze)(e))))}),[a,l,C,s]);((e,t)=>{const i=is(),n=ns();(0,o.useEffect)((()=>{Object.keys(e).forEach((e=>{i[e]||t((t=>{delete t[e]}))}))}),[n,e,i,t])})(a,s);const $=((e,t,i)=>{const n=Object.values(e),r=Object.values(t);return(0,sn.JB)(Ga(e),Ga(t),{ignoreUndefined:!0})||n.length!==r.length||i.some((t=>{var i;return Ja(t,null==e||null==(i=e[null==t?void 0:t.id])?void 0:i.filterState)}))})(a,r,C.filter(Pr.kI)),T=(()=>{const[e,t]=(0,o.useState)(!1),i=is(),n=(0,u.v9)((e=>e.charts));let r=0;return e||(r=document.querySelectorAll('[data-ui-anchor="chart"]').length),(0,o.useEffect)((()=>{if(e)return;if(Object.values(i).find((({requiredFirst:e})=>e)))return void t(!0);let o;0===r&&(o=setTimeout((()=>{t(!0)}),1e3)),r>0&&void 0!==o&&clearTimeout(o);const a=Object.values(n).filter((({chartStatus:e})=>"loading"!==e)).length;r>0&&a>=r&&t(!0)}),[n,e,r]),e})(),D=(0,V.tZ)(ls,{filterBarOrientation:e,width:null==t?void 0:t.width,onApply:R,onClearAll:k,dataMaskSelected:a,dataMaskApplied:r,isApplyDisabled:$}),M=e===ft.Bp.Horizontal?(0,V.tZ)(Sh,{actions:D,canEdit:y,dashboardId:v,dataMaskSelected:a,filterValues:g,isInitialized:T,onSelectionChange:w}):t?(0,V.tZ)(Kc,{actions:D,canEdit:y,dataMaskSelected:a,filtersOpen:t.filtersOpen,filterValues:g,isInitialized:T,height:t.height,offset:t.offset,onSelectionChange:w,toggleFiltersBar:t.toggleFiltersBar,width:t.width}):null;return i?(0,V.tZ)(wh,{children:M}):M},$h=(0,o.memo)(kh);var Th=i(80663);const Dh=e=>{const t=e[_._4],i=null==t?void 0:t.children[0];return i===_.PV?e[_._4]:e[i]},Mh=(e,t)=>"ant-tabs-nav-wrap"===e.target.className||t.contains(e.target);var Ih=i(78718),Fh=i.n(Ih),Eh=i(77205),_h=["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall","resizeObserverPolyfill"];function Ph(){return Ph=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},Ph.apply(this,arguments)}var zh=[],Uh={width:"100%",height:"100%"};function Oh(e){var t=e.className,i=e.children,n=e.debounceTime,r=void 0===n?300:n,a=e.ignoreDimensions,s=void 0===a?zh:a,l=e.parentSizeStyles,d=void 0===l?Uh:l,c=e.enableDebounceLeadingCall,h=void 0===c||c,u=e.resizeObserverPolyfill,p=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,_h),m=(0,o.useRef)(null),g=(0,o.useRef)(0),f=(0,o.useState)({width:0,height:0,top:0,left:0}),v=f[0],b=f[1],y=(0,o.useMemo)((function(){var e=Array.isArray(s)?s:[s];return C()((function(t){b((function(i){return Object.keys(i).filter((function(e){return i[e]!==t[e]})).every((function(t){return e.includes(t)}))?i:t}))}),r,{leading:h})}),[r,h,s]);return(0,o.useEffect)((function(){var e=new(u||window.ResizeObserver)((function(e){e.forEach((function(e){var t,i=null!=(t=null==e?void 0:e.contentRect)?t:{},n=i.left,r=i.top,o=i.width,a=i.height;g.current=window.requestAnimationFrame((function(){y({width:o,height:a,top:r,left:n})}))}))}));return m.current&&e.observe(m.current),function(){window.cancelAnimationFrame(g.current),e.disconnect(),y.cancel()}}),[y,u]),o.createElement("div",Ph({style:d,ref:m,className:t},p),i(Ph({},v,{ref:m.current,resize:y})))}Oh.propTypes={className:w().string,debounceTime:w().number,enableDebounceLeadingCall:w().bool,ignoreDimensions:w().oneOfType([w().any,w().arrayOf(w().any)]),children:w().func.isRequired};const Bh={depth:w().number.isRequired,editMode:w().bool,gridComponent:P.cP,handleComponentDrop:w().func.isRequired,isComponentVisible:w().bool.isRequired,resizeComponent:w().func.isRequired,setDirectPathToChild:w().func.isRequired,width:w().number.isRequired,dashboardId:w().number},Nh=e=>e.dropIndicatorProps&&(0,V.tZ)("div",{...e.dropIndicatorProps}),qh=a.iK.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,Vh=a.iK.div`
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
`,Ah=a.iK.div`
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
`;class Kh extends o.PureComponent{constructor(e){super(e),this.state={isResizing:!1},this.handleResizeStart=this.handleResizeStart.bind(this),this.handleResizeStop=this.handleResizeStop.bind(this),this.handleTopDropTargetDrop=this.handleTopDropTargetDrop.bind(this),this.getRowGuidePosition=this.getRowGuidePosition.bind(this),this.setGridRef=this.setGridRef.bind(this),this.handleChangeTab=this.handleChangeTab.bind(this)}getRowGuidePosition(e){return e&&this.grid?e.getBoundingClientRect().bottom-this.grid.getBoundingClientRect().top-2:null}setGridRef(e){this.grid=e}handleResizeStart(){this.setState((()=>({isResizing:!0})))}handleResizeStop({id:e,widthMultiple:t,heightMultiple:i}){this.props.resizeComponent({id:e,width:t,height:i}),this.setState((()=>({isResizing:!1})))}handleTopDropTargetDrop(e){e&&this.props.handleComponentDrop({...e,destination:{...e.destination,index:0}})}handleChangeTab({pathToTabIndex:e}){this.props.setDirectPathToChild(e)}render(){var e,t,i,n;const{gridComponent:a,handleComponentDrop:s,depth:l,width:d,isComponentVisible:c,editMode:u,canEdit:p,setEditMode:m,dashboardId:g}=this.props,f=(d+_.es)/_.cz-_.es,{isResizing:v}=this.state,b=0===(null==a||null==(e=a.children)?void 0:e.length),y=b&&a.type===E.gn,x=u&&(0,V.tZ)(Ra.XJ,{title:(0,h.t)("Drag and drop components and charts to the dashboard"),description:(0,h.t)("You can create a new chart or use existing ones from the panel on the right"),buttonText:(0,V.BX)(V.HY,{children:[(0,V.tZ)("i",{className:"fa fa-plus"}),(0,h.t)("Create a new chart")]}),buttonAction:()=>{window.open(`/chart/add?dashboard_id=${g}`,"_blank","noopener noreferrer")},image:"chart.svg"}),C=u?(0,V.tZ)(Ra.XJ,{title:(0,h.t)("Drag and drop components to this tab"),description:(0,h.t)("You can create a new chart or use existing ones from the panel on the right"),buttonText:(0,V.BX)(V.HY,{children:[(0,V.tZ)("i",{className:"fa fa-plus"}),(0,h.t)("Create a new chart")]}),buttonAction:()=>{window.open(`/chart/add?dashboard_id=${g}`,"_blank","noopener noreferrer")},image:"chart.svg"}):(0,V.tZ)(Ra.XJ,{title:(0,h.t)("There are no components added to this tab"),description:p&&(0,h.t)("You can add the components in the edit mode."),buttonText:p&&(0,h.t)("Edit the dashboard"),buttonAction:p&&(()=>{m(!0)}),image:"chart.svg"});return d<100?null:(0,V.BX)(V.HY,{children:[b&&(0,V.tZ)(qh,{children:y?C:x}),(0,V.tZ)("div",{className:"dashboard-grid",ref:this.setGridRef,children:(0,V.BX)(Vh,{className:"grid-content",editMode:u,children:[u&&(0,V.tZ)($e,{component:a,depth:l,parentComponent:null,index:0,orientation:"column",onDrop:this.handleTopDropTargetDrop,className:r()({"empty-droptarget":!0,"empty-droptarget--full":0===(null==a||null==(t=a.children)?void 0:t.length)}),editMode:!0,dropToChild:0===(null==a||null==(i=a.children)?void 0:i.length),children:Nh}),null==a||null==(n=a.children)?void 0:n.map(((e,t)=>(0,V.BX)(o.Fragment,{children:[(0,V.tZ)(La,{id:e,parentId:a.id,depth:l+1,index:t,availableColumnCount:_.cz,columnWidth:f,isComponentVisible:c,onResizeStart:this.handleResizeStart,onResize:this.handleResize,onResizeStop:this.handleResizeStop,onChangeTab:this.handleChangeTab}),u&&(0,V.tZ)($e,{component:a,depth:l,parentComponent:null,index:t+1,orientation:"column",onDrop:s,className:"empty-droptarget",editMode:!0,children:Nh})]},e))),v&&Array(_.cz).fill(null).map(((e,t)=>(0,V.tZ)(Ah,{className:"grid-column-guide",style:{left:t*_.es+t*f,width:f}},`grid-column-${t}`)))]})})]})}}Kh.propTypes=Bh,Kh.defaultProps={};const jh=Kh,Lh=(0,u.$j)((function({dashboardState:e,dashboardInfo:t}){return{editMode:e.editMode,canEdit:t.dash_edit_perm,dashboardId:t.id}}),(function(e){return(0,f.DE)({handleComponentDrop:Ni._p,resizeComponent:Ni.iO,setDirectPathToChild:Bi.E2,setEditMode:Bi.Mb},e)}))(jh);var Xh=i(99547);const Hh=({topLevelTabs:e})=>{const t=(()=>{const e=(0,u.v9)((e=>{var t;return null==(t=e.nativeFilters)?void 0:t.filters}));return(0,o.useMemo)((()=>e?Object.values(e).map((e=>Fh()(e,["id","scope","type"]))):[]),[JSON.stringify(e)])})(),i=(0,u.I0)(),n=(0,u.v9)((e=>e.dashboardLayout.present)),r=(0,u.v9)((e=>e.dashboardInfo)),a=(0,u.v9)((e=>e.dashboardState.directPathToChild)),s=(0,u.v9)((e=>Object.values(e.charts).map((e=>e.id)))),l=(0,o.useRef)(),d=(0,o.useMemo)((()=>{const e=_a({currentComponent:Dh(n),directPathToChild:a});var t;return-1===e?null!=(t=l.current)?t:0:(l.current=e,e)}),[n,a]);(0,o.useEffect)((()=>{if(0===t.length)return;const e=t.map((e=>{if(e.id.startsWith(ts.Ky))return{filterId:e.id,tabsInScope:[],chartsInScope:[]};const t=(0,Sn.Q)(e.scope,s,n),i=(0,Dr.Rz)(n,t);return{filterId:e.id,tabsInScope:Array.from(i),chartsInScope:t}}));i((0,Os.xk)(e))}),[t,n,i]);const c=e?e.children:[_.PV],h=Math.min(d,c.length-1),p=0===h?_.PV:h.toString();return(0,o.useEffect)((()=>{setTimeout((()=>{i((0,Bi.hZ)())}),500)}),[a,i]),(0,o.useEffect)((()=>{var e;const t=(0,Eh.ZP)(),i=(0,Xh.UY)(null==r||null==(e=r.metadata)?void 0:e.color_namespace);return t.source=Eh.Fx.Dashboard,(0,Xh.$C)(r.metadata),()=>{(0,Xh.$w)((0,Xh.UY)(i))}}),[r.id,i]),(0,V.tZ)("div",{className:"grid-container",children:(0,V.tZ)(Oh,{children:({width:e})=>(0,V.tZ)(g.ZP,{id:_.PV,activeKey:p,renderTabBar:()=>(0,V.tZ)(V.HY,{}),fullWidth:!1,animated:!1,allowOverflow:!0,onFocus:e=>{e.target.classList.contains("ant-tabs-tabpane")&&window.scrollY<220&&window.scrollTo(window.scrollX,0)},children:c.map(((t,i)=>(0,V.tZ)(g.ZP.TabPane,{children:(0,V.tZ)(Lh,{gridComponent:n[t],depth:_.Mu+1,width:e,isComponentVisible:i===d})},0===i?_.PV:i.toString())))})})})};var Wh=i(40917);const Yh=a.iK.div`
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
`,Gh=({children:e})=>{const t=(0,u.v9)((e=>e.dashboardState.editMode)),i=(0,Wh.N)(),[n,a]=(0,o.useState)(i.getMonitor().isDragging());return(0,o.useEffect)((()=>{const e=i.getMonitor(),t=C()(a,ba.o),n=e.subscribeToStateChange((()=>{e.isDragging()?t(!0):(t.cancel(),a(!1))}));return()=>{n(),t.cancel()}}),[i]),(0,V.tZ)(Yh,{className:r()({"dragdroppable--dragging":t&&n}),children:e})},Jh=a.iK.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  z-index: 11;
  width: ${({width:e})=>e}px;
  ${({hidden:e})=>e&&"display: none;"}
`,Qh=a.iK.div`
  position: sticky;
  top: -1px;
  width: ${({width:e})=>e}px;
  flex: 0 0 ${({width:e})=>e}px;
`,eu=a.iK.div`
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
`,tu=a.iK.div`
  grid-column: 2;
  grid-row: 2;
  // @z-index-above-dashboard-header (100) + 1 = 101
  ${({fullSizeChartId:e})=>e&&"z-index: 101;"}
`,iu=a.iK.div`
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
        z-index: ${Rn.oB};
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
`,nu=a.iK.div`
  ${({theme:e,editMode:t,marginLeft:i})=>s.iv`
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
      margin-left: ${i}px;

      ${t&&`\n      max-width: calc(100% - ${Rn.XX+16*e.gridUnit}px);\n    `}

      /* this is the ParentSize wrapper */
    & > div:first-child {
        height: inherit !important;
      }
    }

    .dashboard-builder-sidepane {
      width: ${Rn.XX}px;
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
`,ru=()=>{var e,t;const n=(0,u.I0)(),l=(0,dn.fG)(),m=(0,a.Fg)(),g=(0,u.v9)((({dashboardInfo:e})=>`${e.id}`)),f=(0,u.v9)((e=>e.dashboardLayout.present)),v=(0,u.v9)((e=>e.dashboardState.editMode)),b=(0,u.v9)((({dashboardInfo:e})=>e.dash_edit_perm)),y=(0,u.v9)((({dashboardState:e})=>e.dashboardIsSaving)),x=(0,u.v9)((e=>e.dashboardState.fullSizeChartId)),C=(0,d.cr)(d.TT.DashboardCrossFilters),S=(0,u.v9)((({dashboardInfo:e})=>(0,d.cr)(d.TT.HorizontalFilterBar)?e.filterBarOrientation:ft.Bp.Vertical)),w=(0,o.useCallback)((({pathToTabIndex:e})=>{n((0,Bi.E2)(e)),window.scrollTo(0,0)}),[n]),Z=(0,o.useCallback)((()=>{n((0,Ni.g3)());const e=Pa(Dh(f),0);n((0,Bi.E2)(e))}),[f,n]),R=(0,o.useCallback)((e=>n((0,Ni._p)(e))),[n]),k=(0,o.useRef)(null),$=f[_._4],T=null==$?void 0:$.children[0],M=T!==_.PV?f[T]:void 0,F=(0,gt.eY)(ut.KD.standalone),E=F===_._B.Report,P=l.hideTitle||F===_._B.HideNavAndTitle||E,[z,U]=(0,o.useState)(0);(0,o.useEffect)((()=>{var e,t;let n;return U((null==(e=k.current)||null==(t=e.getBoundingClientRect())?void 0:t.height)||0),i.g.hasOwnProperty("ResizeObserver")&&k.current&&(n=new ResizeObserver((e=>{U((t=>{var i,n;return(null==e||null==(i=e[0])||null==(n=i.contentRect)?void 0:n.height)||t}))})),n.observe(k.current)),()=>{var e;null==(e=n)||e.disconnect()}}),[]);const{showDashboard:O,missingInitialFilters:B,dashboardFiltersOpen:N,toggleDashboardFiltersOpen:q,nativeFiltersEnabled:A}=(()=>{const[e,t]=(0,o.useState)(!1),i=(0,u.v9)((({dashboardInfo:e})=>e.dash_edit_perm)),n=is(),r=Object.values(n),a=(0,gt.eY)(ut.KD.expandFilters),[s,l]=(0,o.useState)(null!=a?a:!!r.length),d=i||!i&&0!==r.length,c=r.filter((e=>e.requiredFirst)),h=ns(),p=c.filter((({id:e})=>{var t,i;return void 0===(null==(t=h[e])||null==(i=t.filterState)?void 0:i.value)})).map((({name:e})=>e)),m=e||!d||0===p.length,g=(0,o.useCallback)((e=>{l(null!=e?e:!s)}),[s]);return(0,o.useEffect)((()=>{!1===a||0===r.length&&d?g(!1):g(!0)}),[r.length]),(0,o.useEffect)((()=>{m&&t(!0)}),[m]),{showDashboard:m,missingInitialFilters:p,dashboardFiltersOpen:s,toggleDashboardFiltersOpen:g,nativeFiltersEnabled:d}})(),[K,j]=(0,c.W)({threshold:[1]}),L=(C||A)&&!v,X=`calc(100vh - ${Rn.UN+(j||F?0:Rn.Ky)}px)`,H=N?0:z+20,W=(0,o.useMemo)((()=>({marginLeft:N||v||!A||S===ft.Bp.Horizontal?0:-32})),[N,v,S,A]),Y=(0,o.useRef)(M);(0,o.useEffect)((()=>{var e,t,i;const r=null==(e=Y.current)||null==(t=e.children)?void 0:t.length,o=null==M||null==(i=M.children)?void 0:i.length;if(void 0!==r&&void 0!==o&&o>r){const e=Pa(Dh(f),o-1);n((0,Bi.E2)(e))}Y.current=M}),[M]);const G=(0,o.useCallback)((({dropIndicatorProps:e})=>(0,V.BX)("div",{children:[!P&&(0,V.tZ)(Ai,{}),L&&S===ft.Bp.Horizontal&&(0,V.tZ)($h,{orientation:ft.Bp.Horizontal,hidden:E}),e&&(0,V.tZ)("div",{...e}),!E&&M&&!l.hideNav&&(0,V.tZ)(Ko,{shouldFocus:Mh,menuItems:[(0,V.tZ)(Li,{icon:(0,V.tZ)(I.Z.FallOutlined,{iconSize:"xl"}),label:(0,h.t)("Collapse tab content"),onClick:Z})],editMode:v,children:(0,V.tZ)(La,{id:null==M?void 0:M.id,parentId:_._4,depth:_.Mu+1,index:0,renderTabContent:!1,renderHoverMenu:!1,onChangeTab:w})})]})),[A,S,v,w,Z,P,E,M,l.hideNav]),J=N||v||!A||S===ft.Bp.Horizontal?8*m.gridUnit:0;return(0,V.BX)(Gh,{children:[L&&S===ft.Bp.Vertical&&(0,V.tZ)(V.HY,{children:(0,V.tZ)(Th.Z,{id:`dashboard:${g}`,enable:N,minWidth:Rn.I6,maxWidth:Rn.aF,initialWidth:Rn.I6,children:e=>{const t=N?e:Rn.gz;return(0,V.tZ)(Jh,{width:t,hidden:E,children:(0,V.tZ)(Qh,{ref:K,width:t,children:(0,V.tZ)(p.Z,{children:(0,V.tZ)($h,{orientation:ft.Bp.Vertical,verticalConfig:{filtersOpen:N,toggleFiltersBar:q,width:t,height:X,offset:H}})})})})}})}),(0,V.tZ)(eu,{ref:k,children:(0,V.tZ)($e,{className:r()(!M&&v&&"empty-droptarget"),component:$,parentComponent:null,depth:_.Mu,index:0,orientation:"column",onDrop:R,editMode:v,disableDragDrop:!!M,style:W,children:G})}),(0,V.BX)(tu,{fullSizeChartId:x,children:[(0,V.tZ)(s.xB,{styles:s.iv`
            // @z-index-above-dashboard-header (100) + 1 = 101
            ${x&&"div > .filterStatusPopover.ant-popover{z-index: 101}"}
          `}),!v&&!M&&0===(null==(e=f[_.PV])||null==(t=e.children)?void 0:t.length)&&(0,V.tZ)(Ra.XJ,{title:(0,h.t)("There are no charts added to this dashboard"),description:b&&(0,h.t)("Go to the edit mode to configure the dashboard and add charts"),buttonText:b&&(0,h.t)("Edit the dashboard"),buttonAction:()=>n((0,Bi.Mb)(!0)),image:"dashboard.svg"}),(0,V.tZ)(iu,{className:r()("dashboard",v&&"dashboard--editing"),children:(0,V.BX)(nu,{className:"dashboard-content",editMode:v,marginLeft:J,children:[O?B.length>0?(0,V.tZ)("div",{css:s.iv`
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    flex: 1;
                    & div {
                      width: 500px;
                    }
                  `,children:(0,V.tZ)(_s,{title:(0,h.t)("Unable to load dashboard"),body:(0,h.t)("The following filters have the 'Select first filter value by default'\n                    option checked and could not be loaded, which is preventing the dashboard\n                    from rendering: %s",B.join(", "))})}):(0,V.tZ)(Hh,{topLevelTabs:M}):(0,V.tZ)(D.Z,{}),v&&(0,V.tZ)(tt,{topOffset:z})]})})]}),y&&(0,V.tZ)(D.Z,{css:s.iv`
            && {
              position: fixed;
            }
          `})]})}},78423:(e,t,i)=>{"use strict";i.d(t,{V:()=>p});var n=i(58593),r=i(51995),o=i(61988),a=i(35944);const s=r.iK.div`
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
`,u=e=>!["null","none"].includes(e.toLowerCase())&&""!==e.trim(),p=e=>(0,a.tZ)(n.u,{mouseEnterDelay:.2,placement:"right",title:(0,a.BX)(s,{children:[(0,a.tZ)("div",{className:"tooltip-header",children:e.table_name&&u(e.table_name)?e.table_name:(0,o.t)("Not defined")}),(0,a.BX)("div",{className:"tooltip-description",children:[(0,a.BX)("div",{children:[(0,o.t)("Database"),": ",e.database.database_name]}),(0,a.BX)("div",{children:[(0,o.t)("Schema"),":"," ",e.schema&&u(e.schema)?e.schema:(0,o.t)("Not defined")]})]})]}),children:(0,a.BX)(l,{children:[(0,a.tZ)(d,{children:e.table_name&&u(e.table_name)?e.table_name:e.database.database_name}),(0,a.BX)(c,{children:[(0,a.tZ)(h,{children:e.database.database_name}),e.schema&&u(e.schema)&&(0,a.BX)(h,{children:[" - ",e.schema]})]})]})})},74448:(e,t,i)=>{"use strict";i.d(t,{Am:()=>l,h2:()=>o,jp:()=>s,un:()=>a});var n=i(51995),r=i(4591);const o=0,a=n.iK.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>e===o?"100%":`${e}px`};
`,s=(0,n.iK)(r.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,l=n.iK.div`
  color: ${({theme:e,status:t="error"})=>{var i;return null==(i=e.colors[t])?void 0:i.base}};
`},83379:(e,t,i)=>{"use strict";function n(e){return e?`${e.first_name} ${e.last_name}`:""}i.d(t,{Z:()=>n})},90057:(e,t,i)=>{"use strict";i.d(t,{C:()=>a,x:()=>o});var n=i(12902),r=i(67294);function o(e){var t=(0,r.useState)((function(){return(0,n.vV)("function"==typeof e?e():e,!0)})),i=t[1];return[t[0],(0,r.useCallback)((function(e){i("function"==typeof e?(0,n.Uy)(e):(0,n.vV)(e))}),[])]}function a(e,t,i){var o=(0,r.useMemo)((function(){return(0,n.Uy)(e)}),[e]);return(0,r.useReducer)(o,t,i)}}}]);
//# sourceMappingURL=ef5e08b67faba37d082b.chunk.js.map
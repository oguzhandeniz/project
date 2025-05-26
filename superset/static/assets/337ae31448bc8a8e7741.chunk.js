"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7001],{2275:(e,t,a)=>{a.d(t,{$6:()=>l,$X:()=>h,DZ:()=>p,Er:()=>u,Rw:()=>c,cP:()=>d,ck:()=>f});var s=a(45697),r=a.n(s),i=a(81255),n=a(713),o=a(79271);const d=r().shape({id:r().string.isRequired,type:r().oneOf(Object.values(i.ZP)).isRequired,parents:r().arrayOf(r().string),children:r().arrayOf(r().string),meta:r().shape({width:r().number,height:r().number,headerSize:r().oneOf(o.Z.map((e=>e.value))),background:r().oneOf(n.Z.map((e=>e.value))),chartId:r().number})}),l=r().shape({id:r().number.isRequired,chartAlert:r().string,chartStatus:r().string,chartUpdateEndTime:r().number,chartUpdateStartTime:r().number,latestQueryFormData:r().object,queryController:r().shape({abort:r().func}),queriesResponse:r().arrayOf(r().object),triggerQuery:r().bool,lastRendered:r().number}),c=r().shape({slice_id:r().number.isRequired,slice_url:r().string.isRequired,slice_name:r().string.isRequired,datasource:r().string,datasource_name:r().string,datasource_link:r().string,changed_on:r().number.isRequired,modified:r().string,viz_type:r().string.isRequired,description:r().string,description_markeddown:r().string,owners:r().arrayOf(r().string)}),u=r().shape({chartId:r().number.isRequired,componentId:r().string.isRequired,filterName:r().string.isRequired,datasourceId:r().string.isRequired,directPathToFilter:r().arrayOf(r().string).isRequired,isDateFilter:r().bool.isRequired,isInstantFilter:r().bool.isRequired,columns:r().object,labels:r().object,scopes:r().object}),p=r().shape({sliceIds:r().arrayOf(r().number),expandedSlices:r().object,editMode:r().bool,isPublished:r().bool,colorNamespace:r().string,colorScheme:r().string,updatedColorScheme:r().bool,hasUnsavedChanges:r().bool}),h=r().shape({id:r().number,metadata:r().object,slug:r().string,dash_edit_perm:r().bool,dash_save_perm:r().bool,common:r().object,userId:r().string}),b=r().shape({value:r().oneOfType([r().number,r().string]).isRequired,label:r().string.isRequired}),g={value:r().oneOfType([r().number,r().string]).isRequired,label:r().string.isRequired,children:r().arrayOf(r().oneOfType([r().shape((m=()=>g,()=>m().apply(void 0,arguments))),b]))};var m;const f=r().oneOfType([r().shape(g),b])},81788:(e,t,a)=>{a.d(t,{B8:()=>d,TZ:()=>n,mf:()=>l,u7:()=>o});var s=a(31069),r=a(68492);const i=(e,t,a)=>{let s=`api/v1/dashboard/${e}/filter_state`;return t&&(s=s.concat(`/${t}`)),a&&(s=s.concat(`?tab_id=${a}`)),s},n=(e,t,a,n)=>s.Z.put({endpoint:i(e,a,n),jsonPayload:{value:t}}).then((e=>e.json.message)).catch((e=>(r.Z.error(e),null))),o=(e,t,a)=>s.Z.post({endpoint:i(e,void 0,a),jsonPayload:{value:t}}).then((e=>e.json.key)).catch((e=>(r.Z.error(e),null))),d=(e,t)=>s.Z.get({endpoint:i(e,t)}).then((({json:e})=>JSON.parse(e.value))).catch((e=>(r.Z.error(e),null))),l=e=>s.Z.get({endpoint:`/api/v1/dashboard/permalink/${e}`}).then((({json:e})=>e)).catch((e=>(r.Z.error(e),null)))},57001:(e,t,a)=>{a.r(t),a.d(t,{DashboardPage:()=>ie,DashboardPageIdContext:()=>ae,default:()=>ne});var s=a(67294),r=a(11965),i=a(16550),n=a(51995),o=a(61988),d=a(28216),l=a(14114),c=a(38703),u=a(8743),p=a(4305),h=a(50810),b=a(14505),g=a(61337),m=a(27600),f=a(23525),v=a(9467),y=a(81788),w=a(14890),x=a(45697),E=a.n(x),S=a(93185),R=a(14278),_=a(20292),C=a(81255);function D(e){return Object.values(e).reduce(((e,t)=>(t&&t.type===C.dW&&t.meta&&t.meta.chartId&&e.push(t.meta.chartId),e)),[])}var q=a(2275),O=a(3741),I=a(99543),j=a(56967);const $=[C.dW,C.xh,C.t];function T(e){return!Object.values(e).some((({type:e})=>e&&$.includes(e)))}var U=a(35944);const k={actions:E().shape({addSliceToDashboard:E().func.isRequired,removeSliceFromDashboard:E().func.isRequired,triggerQuery:E().func.isRequired,logEvent:E().func.isRequired,clearDataMaskState:E().func.isRequired}).isRequired,dashboardInfo:q.$X.isRequired,dashboardState:q.DZ.isRequired,slices:E().objectOf(q.Rw).isRequired,activeFilters:E().object.isRequired,chartConfiguration:E().object,datasources:E().object.isRequired,ownDataCharts:E().object.isRequired,layout:E().object.isRequired,impressionId:E().string.isRequired,timeout:E().number,userId:E().string};class F extends s.PureComponent{static onBeforeUnload(e){e?window.addEventListener("beforeunload",F.unload):window.removeEventListener("beforeunload",F.unload)}static unload(){const e=(0,o.t)("You have unsaved changes.");return window.event.returnValue=e,e}constructor(e){var t,a;super(e),this.appliedFilters=null!=(t=e.activeFilters)?t:{},this.appliedOwnDataCharts=null!=(a=e.ownDataCharts)?a:{},this.onVisibilityChange=this.onVisibilityChange.bind(this)}componentDidMount(){const e=(0,_.Z)(),{dashboardState:t,layout:a}=this.props,s={is_soft_navigation:O.Yd.timeOriginOffset>0,is_edit_mode:t.editMode,mount_duration:O.Yd.getTimestamp(),is_empty:T(a),is_published:t.isPublished,bootstrap_data_length:e.length},r=(0,j.Z)();r&&(s.target_id=r),this.props.actions.logEvent(O.Wl,s),"hidden"===document.visibilityState&&(this.visibilityEventData={start_offset:O.Yd.getTimestamp(),ts:(new Date).getTime()}),window.addEventListener("visibilitychange",this.onVisibilityChange),this.applyCharts()}componentDidUpdate(){this.applyCharts()}UNSAFE_componentWillReceiveProps(e){const t=D(this.props.layout),a=D(e.layout);this.props.dashboardInfo.id===e.dashboardInfo.id&&(t.length<a.length?a.filter((e=>-1===t.indexOf(e))).forEach((t=>{return this.props.actions.addSliceToDashboard(t,(a=e.layout,s=t,Object.values(a).find((e=>e&&e.type===C.dW&&e.meta&&e.meta.chartId===s))));var a,s})):t.length>a.length&&t.filter((e=>-1===a.indexOf(e))).forEach((e=>this.props.actions.removeSliceFromDashboard(e))))}applyCharts(){const{hasUnsavedChanges:e,editMode:t}=this.props.dashboardState,{appliedFilters:a,appliedOwnDataCharts:s}=this,{activeFilters:r,ownDataCharts:i,chartConfiguration:n}=this.props;(0,S.cr)(S.TT.DashboardCrossFilters)&&!n||(t||(0,I.JB)(s,i,{ignoreUndefined:!0})&&(0,I.JB)(a,r,{ignoreUndefined:!0})||this.applyFilters(),e?F.onBeforeUnload(!0):F.onBeforeUnload(!1))}componentWillUnmount(){window.removeEventListener("visibilitychange",this.onVisibilityChange),this.props.actions.clearDataMaskState()}onVisibilityChange(){if("hidden"===document.visibilityState)this.visibilityEventData={start_offset:O.Yd.getTimestamp(),ts:(new Date).getTime()};else if("visible"===document.visibilityState){const e=this.visibilityEventData.start_offset;this.props.actions.logEvent(O.Ev,{...this.visibilityEventData,duration:O.Yd.getTimestamp()-e})}}applyFilters(){const{appliedFilters:e}=this,{activeFilters:t,ownDataCharts:a}=this.props,s=Object.keys(t),r=Object.keys(e),i=new Set(s.concat(r)),n=((e,t)=>{const a=Object.keys(e),s=Object.keys(t),r=(i=a,n=s,[...i.filter((e=>!n.includes(e))),...n.filter((e=>!i.includes(e)))]).filter((a=>e[a]||t[a]));var i,n;return new Set([...a,...s]).forEach((a=>{(0,I.JB)(e[a],t[a])||r.push(a)})),[...new Set(r)]})(a,this.appliedOwnDataCharts);[...i].forEach((a=>{if(!s.includes(a)&&r.includes(a))n.push(...e[a].scope);else if(r.includes(a)){if((0,I.JB)(e[a].values,t[a].values,{ignoreUndefined:!0})||n.push(...t[a].scope),!(0,I.JB)(e[a].scope,t[a].scope)){const s=(t[a].scope||[]).concat(e[a].scope||[]);n.push(...s)}}else n.push(...t[a].scope)})),this.refreshCharts([...new Set(n)]),this.appliedFilters=t,this.appliedOwnDataCharts=a}refreshCharts(e){e.forEach((e=>{this.props.actions.triggerQuery(!0,e)}))}render(){return this.context.loading?(0,U.tZ)(c.Z,{}):this.props.children}}F.contextType=R.Zn,F.propTypes=k,F.defaultProps={timeout:60,userId:""};const Z=F;var P=a(52256),M=a(97381),L=a(43399),N=a(87915),B=a(74599);const Q=(0,d.$j)((function(e){var t,a,s,r;const{datasources:i,sliceEntities:n,dataMask:o,dashboardInfo:d,dashboardState:l,dashboardLayout:c,impressionId:u,nativeFilters:p}=e;return{timeout:null==(t=d.common)||null==(a=t.conf)?void 0:a.SUPERSET_WEBSERVER_TIMEOUT,userId:d.userId,dashboardInfo:d,dashboardState:l,datasources:i,activeFilters:{...(0,L.De)(),...(0,N.g)({chartConfiguration:null==(s=d.metadata)?void 0:s.chart_configuration,nativeFilters:p.filters,dataMask:o,allSliceIds:l.sliceIds})},chartConfiguration:null==(r=d.metadata)?void 0:r.chart_configuration,ownDataCharts:(0,N.U)(o,"ownState"),slices:n.slices,layout:c.present,impressionId:u}}),(function(e){return{actions:(0,w.DE)({setDatasources:h.Fy,clearDataMaskState:B.sh,addSliceToDashboard:v.Pi,removeSliceFromDashboard:v.rL,triggerQuery:P.triggerQuery,logEvent:M.logEvent},e)}}))(Z);var J=a(64296);const z=e=>r.iv`
  body {
    h1 {
      font-weight: ${e.typography.weights.bold};
      line-height: 1.4;
      font-size: ${e.typography.sizes.xxl}px;
      letter-spacing: -0.2px;
      margin-top: ${3*e.gridUnit}px;
      margin-bottom: ${3*e.gridUnit}px;
    }

    h2 {
      font-weight: ${e.typography.weights.bold};
      line-height: 1.4;
      font-size: ${e.typography.sizes.xl}px;
      margin-top: ${3*e.gridUnit}px;
      margin-bottom: ${2*e.gridUnit}px;
    }

    h3,
    h4,
    h5,
    h6 {
      font-weight: ${e.typography.weights.bold};
      line-height: 1.4;
      font-size: ${e.typography.sizes.l}px;
      letter-spacing: 0.2px;
      margin-top: ${2*e.gridUnit}px;
      margin-bottom: ${e.gridUnit}px;
    }
  }
`,Y=e=>r.iv`
  .header-title a {
    margin: ${e.gridUnit/2}px;
    padding: ${e.gridUnit/2}px;
  }
  .header-controls {
    &,
    &:hover {
      margin-top: ${e.gridUnit}px;
    }
  }
`,V=e=>r.iv`
  .filter-card-popover {
    width: 240px;
    padding: 0;
    border-radius: 4px;

    &.ant-popover-placement-bottom {
      padding-top: ${e.gridUnit}px;
    }

    &.ant-popover-placement-left {
      padding-right: ${3*e.gridUnit}px;
    }

    .ant-popover-inner {
      box-shadow: 0 0 8px rgb(0 0 0 / 10%);
    }

    .ant-popover-inner-content {
      padding: ${4*e.gridUnit}px;
    }

    .ant-popover-arrow {
      display: none;
    }
  }

  .filter-card-tooltip {
    &.ant-tooltip-placement-bottom {
      padding-top: 0;
      & .ant-tooltip-arrow {
        top: -13px;
      }
    }
  }
`,W=e=>r.iv`
  .ant-dropdown-menu.chart-context-menu {
    min-width: ${43*e.gridUnit}px;
  }
  .ant-dropdown-menu-submenu.chart-context-submenu {
    max-width: ${60*e.gridUnit}px;
    min-width: ${40*e.gridUnit}px;
  }
`,A=e=>r.iv`
  a,
  .ant-tabs-tabpane,
  .ant-tabs-tab-btn,
  .superset-button,
  .superset-button.ant-dropdown-trigger,
  .header-controls span {
    &:focus-visible {
      box-shadow: 0 0 0 2px ${e.colors.primary.dark1};
      border-radius: ${e.gridUnit/2}px;
      outline: none;
      text-decoration: none;
    }
    &:not(
        .superset-button,
        .ant-menu-item,
        a,
        .fave-unfave-icon,
        .ant-tabs-tabpane,
        .header-controls span
      ) {
      &:focus-visible {
        padding: ${e.gridUnit/2}px;
      }
    }
  }
`;var K=a(78718),X=a.n(K);const H={},G=()=>{const e=(0,g.rV)(g.dR.DashboardExploreContext,{});return Object.fromEntries(Object.entries(e).filter((([,e])=>!e.isRedundant)))},ee=(e,t)=>{const a=G();(0,g.LS)(g.dR.DashboardExploreContext,{...a,[e]:t})},te=({dashboardPageId:e})=>{const t=(0,d.v9)((({dashboardInfo:t,dashboardState:a,nativeFilters:s,dataMask:r})=>{var i,n,o;return{labelsColor:(null==(i=t.metadata)?void 0:i.label_colors)||H,labelsColorMap:(null==(n=t.metadata)?void 0:n.shared_label_colors)||H,colorScheme:null==a?void 0:a.colorScheme,chartConfiguration:(null==(o=t.metadata)?void 0:o.chart_configuration)||H,nativeFilters:Object.entries(s.filters).reduce(((e,[t,a])=>({...e,[t]:X()(a,["chartsInScope"])})),{}),dataMask:r,dashboardId:t.id,filterBoxFilters:(0,L.De)(),dashboardPageId:e}}),d.wU);return(0,s.useEffect)((()=>(ee(e,t),()=>{ee(e,{...t,isRedundant:!0})})),[t,e]),null},ae=(0,s.createContext)(""),se=(0,s.lazy)((()=>Promise.all([a.e(1216),a.e(8253),a.e(9612),a.e(223),a.e(7802),a.e(8573),a.e(876),a.e(981),a.e(9484),a.e(1108),a.e(5640),a.e(9820),a.e(4231),a.e(2639),a.e(2290),a.e(1090),a.e(3279),a.e(868),a.e(577),a.e(6205),a.e(452)]).then(a.bind(a,90108)))),re=document.title,ie=({idOrSlug:e})=>{const t=(0,n.Fg)(),a=(0,d.I0)(),w=(0,i.k6)(),x=(0,s.useMemo)((()=>(0,J.x0)()),[]),E=(0,d.v9)((({dashboardInfo:e})=>e&&Object.keys(e).length>0)),{addDangerToast:S}=(0,l.e1)(),{result:R,error:_}=(0,u.QU)(e),{result:C,error:D}=(0,u.Es)(e),{result:q,error:O,status:I}=(0,u.JL)(e),j=(0,s.useRef)(!1),$=_||D,T=Boolean(R&&C),{dashboard_title:k,css:F,id:Z=0}=R||{};if((0,s.useEffect)((()=>{const e=()=>{const e=G();(0,g.LS)(g.dR.DashboardExploreContext,{...e,[x]:{...e[x],isRedundant:!0}})};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[x]),(0,s.useEffect)((()=>{a((0,v.sL)(I))}),[a,I]),(0,s.useEffect)((()=>{Z&&async function(){const e=(0,f.eY)(m.KD.permalinkKey),t=(0,f.eY)(m.KD.nativeFiltersKey),s=(0,f.eY)(m.KD.nativeFilters);let r,i=t||{};if(e){const t=await(0,y.mf)(e);t&&({dataMask:i,activeTabs:r}=t.state)}else t&&(i=await(0,y.B8)(Z,t));s&&(i=s),T&&(j.current||(j.current=!0),a((0,p.Y)({history:w,dashboard:R,charts:C,activeTabs:r,dataMask:i})))}()}),[T]),(0,s.useEffect)((()=>(k&&(document.title=k),()=>{document.title=re})),[k]),(0,s.useEffect)((()=>"string"==typeof F?(0,b.Z)(F):()=>{}),[F]),(0,s.useEffect)((()=>{O?S((0,o.t)("Error loading chart datasources. Filters may not work correctly.")):a((0,h.Fy)(q))}),[S,q,O,a]),$)throw $;return T&&E?(0,U.BX)(U.HY,{children:[(0,U.tZ)(r.xB,{styles:[V(t),z(t),W(t),A(t),Y(t),"",""]}),(0,U.tZ)(te,{dashboardPageId:x}),(0,U.tZ)(ae.Provider,{value:x,children:(0,U.tZ)(Q,{children:(0,U.tZ)(se,{})})})]}):(0,U.tZ)(c.Z,{})},ne=ie},87915:(e,t,a)=>{a.d(t,{U:()=>s,g:()=>r});const s=(e,t)=>Object.values(e).filter((e=>e[t])).reduce(((e,a)=>({...e,[a.id]:t?a[t]:a})),{}),r=({chartConfiguration:e,nativeFilters:t,dataMask:a,allSliceIds:s})=>{const r={};return Object.values(a).forEach((({id:a,extraFormData:i})=>{var n,o,d,l,c,u;const p=null!=(n=null!=(o=null!=(d=null==t||null==(l=t[a])?void 0:l.chartsInScope)?d:null==e||null==(c=e[a])||null==(u=c.crossFilters)?void 0:u.chartsInScope)?o:s)?n:[];r[a]={scope:p,values:i}})),r}},713:(e,t,a)=>{a.d(t,{Z:()=>i});var s=a(61988),r=a(80621);const i=[{value:r.HE,label:(0,s.t)("Transparent"),className:"background--transparent"},{value:r.b5,label:(0,s.t)("White"),className:"background--white"}]},79271:(e,t,a)=>{a.d(t,{Z:()=>i});var s=a(61988),r=a(80621);const i=[{value:r.u_,label:(0,s.t)("Small"),className:"header-style-option header-small"},{value:r.OE,label:(0,s.t)("Medium"),className:"header-style-option header-medium"},{value:r.pQ,label:(0,s.t)("Large"),className:"header-style-option header-large"}]},14505:(e,t,a)=>{function s(e){const t="CssEditor-css",a=document.head||document.getElementsByTagName("head")[0],s=document.querySelector(`.${t}`)||function(e){const t=document.createElement("style");return t.className=e,t.type="text/css",t}(t);return"styleSheet"in s?s.styleSheet.cssText=e:s.innerHTML=e,a.appendChild(s),function(){s.remove()}}a.d(t,{Z:()=>s})},8743:(e,t,a)=>{a.d(t,{schemaEndpoints:()=>S.Kt,CN:()=>s.CN,tableEndpoints:()=>E.QD,$O:()=>b,hb:()=>v,QU:()=>y,Es:()=>w,JL:()=>x,L8:()=>_,Xx:()=>S.Xx,SJ:()=>E.SJ,uY:()=>E.uY,zA:()=>E.zA});var s=a(45673),r=a(42190),i=a(67294),n=a(38325),o=a(10362);const d=o.h.injectEndpoints({endpoints:e=>({catalogs:e.query({providesTags:[{type:"Catalogs",id:"LIST"}],query:({dbId:e,forceRefresh:t})=>({endpoint:`/api/v1/database/${e}/catalogs/`,urlParams:{force:t},transformResponse:({json:e})=>e.result.sort().map((e=>({value:e,label:e,title:e})))}),serializeQueryArgs:({queryArgs:{dbId:e}})=>({dbId:e})})})}),{useLazyCatalogsQuery:l,useCatalogsQuery:c,endpoints:u,util:p}=d,h=[];function b(e){const{dbId:t,onSuccess:a,onError:s}=e||{},[r]=l(),o=c({dbId:t,forceRefresh:!1},{skip:!t}),d=(0,n.Z)(((e,t=!1)=>{!e||o.currentData&&!t||r({dbId:e,forceRefresh:t}).then((({isSuccess:e,isError:r,data:i})=>{e&&(null==a||a(i||h,t)),r&&(null==s||s())}))})),u=(0,i.useCallback)((()=>{d(t,!0)}),[t,d]);return(0,i.useEffect)((()=>{d(t,!1)}),[t,d]),{...o,refetch:u}}var g=a(15926);function m({owners:e}){return e?e.map((e=>`${e.first_name} ${e.last_name}`)):null}const f=a.n(g)().encode({columns:["owners.first_name","owners.last_name"],keys:["none"]});function v(e){return(0,r.l6)((0,r.s_)(`/api/v1/chart/${e}?q=${f}`),m)}const y=e=>(0,r.l6)((0,r.s_)(`/api/v1/dashboard/${e}`),(e=>({...e,metadata:e.json_metadata&&JSON.parse(e.json_metadata)||{},position_data:e.position_json&&JSON.parse(e.position_json),owners:e.owners||[]}))),w=e=>(0,r.s_)(`/api/v1/dashboard/${e}/charts`),x=e=>(0,r.s_)(`/api/v1/dashboard/${e}/datasets`);var E=a(23936),S=a(69279);const R=o.h.injectEndpoints({endpoints:e=>({queryValidations:e.query({providesTags:["QueryValidations"],query:({dbId:e,catalog:t,schema:a,sql:s,templateParams:r})=>{let i=r;try{i=JSON.parse(r||"")}catch(e){i=void 0}const n={catalog:t,schema:a,sql:s,...i&&{template_params:i}};return{method:"post",endpoint:`/api/v1/database/${e}/validate_sql/`,headers:{"Content-Type":"application/json"},body:JSON.stringify(n),transformResponse:({json:e})=>e.result}}})})}),{useQueryValidationsQuery:_}=R}}]);
//# sourceMappingURL=337ae31448bc8a8e7741.chunk.js.map
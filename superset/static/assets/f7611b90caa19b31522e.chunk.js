"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[577],{40730:(e,t,n)=>{n.d(t,{Z:()=>Ye});var i,r=n(28216),a=n(14890),o=n(52256),s=n(97381),l=n(45697),d=n.n(l),c=n(67294),u=n(61988),h=n(51995),p=n(68492),m=n(93185),g=n(55786),v=n(9531),b=n(38703),f=n(94301),y=n(57368),x=n(3741),Z=n(27600),C=n(23525),S=n(71894);!function(e){e.Explore="explore",e.Dashboard="dashboard"}(i||(i={}));var T,w=n(42190),_=n(50361),M=n.n(_),$=n(18446),E=n.n($),I=n(11865),F=n.n(I),D=n(16355),R=n(11064),N=n(88274),O=n(11965),k=n(90731),U=n(12617),q=n(83862),L=n(4715),B=n(74599),A=n(41814),z=n(69175),j=n(15856),P=n(23279),H=n.n(P),X=n(75049),V=n(68122),K=n(15926),Y=n.n(K),W=n(74061),G=n(13322),Q=n(9875),J=n(14114),ee=n(6412),te=n(37731),ne=n(73727),ie=n(74069),re=n(35932),ae=n(57001),oe=n(40219),se=n(99232),le=n(53579),de=n(29487),ce=n(12515);!function(e){e[e.Chart=0]="Chart",e[e.Table=1]="Table"}(T||(T={}));var ue=n(35944);function he({formData:e,result:t,dataset:n,onContextMenu:i,inContextMenu:r}){const a=(0,c.useMemo)((()=>({onContextMenu:i})),[i]);return(0,ue.tZ)("div",{css:O.iv`
        width: 100%;
        height: 100%;
        min-height: 0;
      `,children:(0,ue.tZ)(N.Z,{disableErrorBoundary:!0,chartType:e.viz_type,enableNoResults:!0,datasource:n,formData:e,queriesData:t,hooks:a,inContextMenu:r,height:"100%",width:"100%"})})}var pe=n(87183),me=n(54076);const ge=(0,h.iK)(L.O5.Item)`
  ${({theme:e,isClickable:t,isHidden:n})=>O.iv`
    cursor: ${t?"pointer":"auto"};
    color: ${e.colors.grayscale.light1};
    transition: color ease-in ${e.transitionTiming}s;
    .ant-breadcrumb > span:last-child > & {
      color: ${e.colors.grayscale.dark1};
    }
    &:hover {
      color: ${t?e.colors.grayscale.dark1:"inherit"};
    }
    visibility: ${n?"hidden":"visible"};
  `}
`;var ve=n(5462),be=n(71262);const fe=h.iK.div`
  ${({theme:e})=>O.iv`
    & .pagination-container {
      bottom: ${4*-e.gridUnit}px;
    }
  `}
`,ye="adhoc_filters",xe=({formData:e,closeModal:t})=>{const n=(0,r.I0)(),{addDangerToast:i}=(0,J.e1)(),a=(0,h.Fg)(),[o,l]=(0,c.useState)(""),d=(0,c.useContext)(ae.DashboardPageIdContext),p=(0,c.useCallback)((()=>{n((0,s.logEvent)(x.qL,{slice_id:e.slice_id}))}),[n,e.slice_id]),m=(0,r.v9)((e=>{var t;return(0,U.R)("can_explore","Superset",null==(t=e.user)?void 0:t.roles)})),[g,v]=e.datasource.split("__");(0,c.useEffect)((()=>{(0,oe.nv)(Number(g),v,e,0).then((e=>{l(`/explore/?form_data_key=${e}&dashboard_page_id=${d}`)})).catch((()=>{i((0,u.t)("Failed to generate chart edit URL"))}))}),[i,d,g,v,e]);const b=!o||!m;return(0,ue.BX)(ue.HY,{children:[(0,ue.tZ)(re.Z,{buttonStyle:"secondary",buttonSize:"small",onClick:p,disabled:b,tooltip:b?(0,u.t)("You do not have sufficient permissions to edit the chart"):void 0,children:(0,ue.tZ)(ne.rU,{css:O.iv`
            &:hover {
              text-decoration: none;
            }
          `,to:o,children:(0,u.t)("Edit chart")})}),(0,ue.tZ)(re.Z,{buttonStyle:"primary",buttonSize:"small",onClick:t,css:O.iv`
          margin-left: ${2*a.gridUnit}px;
        `,children:(0,u.t)("Close")})]})};function Ze({column:e,dataset:t,drillByConfig:n,formData:i,onHideModal:a,canDownload:l}){const d=(0,r.I0)(),p=(0,h.Fg)(),{addDangerToast:m}=(0,J.e1)(),[v,f]=(0,c.useState)(!0),[y,Z]=(0,c.useState)([{...n,column:e}]);(0,c.useEffect)((()=>{d((0,s.logEvent)(x.zf,{slice_id:i.slice_id}))}),[d,i.slice_id]);const{column:C,groupbyFieldName:S=n.groupbyFieldName}=y[y.length-1]||{},w=(0,c.useMemo)((()=>(0,g.Z)(i[S]).map((e=>{var n;return null==(n=t.columns)?void 0:n.find((t=>t.column_name===e))})).filter(te.Z)),[t.columns,i,S]),{displayModeToggle:_,drillByDisplayMode:M}=(()=>{const[e,t]=(0,c.useState)(T.Chart);return{displayModeToggle:(0,c.useMemo)((()=>(0,ue.tZ)("div",{css:e=>O.iv`
          margin-bottom: ${6*e.gridUnit}px;
          .ant-radio-button-wrapper-checked:not(
              .ant-radio-button-wrapper-disabled
            ):focus-within {
            box-shadow: none;
          }
        `,children:(0,ue.BX)(pe.Y.Group,{onChange:({target:{value:e}})=>{t(e)},defaultValue:T.Chart,children:[(0,ue.tZ)(pe.Y.Button,{value:T.Chart,children:(0,u.t)("Chart")}),(0,ue.tZ)(pe.Y.Button,{value:T.Table,children:(0,u.t)("Table")})]})})),[]),drillByDisplayMode:e}})(),[$,E]=(0,c.useState)(),I=((e,t,n)=>(0,te.Z)(e)?1===e.length?(0,ue.tZ)(fe,{children:(0,ue.tZ)(ve.T,{colnames:e[0].colnames,coltypes:e[0].coltypes,rowcount:e[0].sql_rowcount,data:e[0].data,dataSize:15,datasourceId:t,isVisible:!0,canDownload:n})}):(0,ue.tZ)(be.ZP,{fullWidth:!1,children:e.map(((e,i)=>(0,ue.tZ)(be.ZP.TabPane,{tab:(0,u.t)("Results %s",i+1),children:(0,ue.tZ)(fe,{children:(0,ue.tZ)(ve.T,{colnames:e.colnames,coltypes:e.coltypes,data:e.data,rowcount:e.sql_rowcount,dataSize:15,datasourceId:t,isVisible:!0,canDownload:n})})},i)))}):(0,ue.tZ)("div",{}))($,i.datasource,l),[F,D]=(0,c.useState)(i),[R,N]=(0,c.useState)([...w,e].filter(te.Z)),[k,U]=(0,c.useState)([{groupby:w,filters:n.filters},{groupby:e||[]}]),q=(0,c.useCallback)(((e,t=S)=>Array.isArray(i[t])?[e.column_name]:e.column_name),[i,S]),B=(0,c.useCallback)((e=>e.reduce(((e,t)=>{null!=t&&t.groupbyFieldName&&t.column&&(e.formData[t.groupbyFieldName]=q(t.column,t.groupbyFieldName),e.overridenGroupbyFields.add(t.groupbyFieldName));const n=(null==t?void 0:t.adhocFilterFieldName)||ye;return e.formData[n]=[...(0,g.Z)(e[n]),...(0,g.Z)(t.filters).map((e=>(0,se.f)(e)))],e.overridenAdhocFilterFields.add(n),e}),{formData:{},overridenGroupbyFields:new Set,overridenAdhocFilterFields:new Set})),[q]),A=(0,c.useCallback)((()=>y.reduce(((e,t)=>{const n=t.adhocFilterFieldName||ye;return e[n]=[...e[n]||[],...t.filters.map((e=>(0,se.f)(e)))],e}),{})),[y]),z=((e,t=me.EI)=>(0,c.useMemo)((()=>{const n=t=>t<e.length-1,i=e=>`${(0,g.Z)(e.groupby).map((e=>e.verbose_name||e.column_name)).join(", ")} ${e.filters?`(${e.filters.map((e=>e.formattedVal||e.val)).join(", ")})`:""}`;return(0,ue.tZ)(L.O5,{css:e=>O.iv`
          margin: ${2*e.gridUnit}px 0 ${4*e.gridUnit}px;
        `,children:e.map(((e,r)=>{return(0,ue.tZ)(ge,{isClickable:n(r),isHidden:(a=e,0===(0,g.Z)(a.groupby).length&&0===(0,g.Z)(a.filters).length),onClick:n(r)?()=>t(e,r):me.EI,children:i(e)},r);var a})).filter((e=>!1===e.props.isHidden))})}),[e,t]))(k,(0,c.useCallback)(((e,t)=>{d((0,s.logEvent)(x.TG,{slice_id:i.slice_id})),Z((e=>e.slice(0,t))),U((e=>{const n=e.slice(0,t+1);return delete n[n.length-1].filters,n})),N((e=>e.slice(0,t))),D((()=>{if(0===t)return i;const{formData:e,overridenAdhocFilterFields:n}=B(y.slice(0,t)),r={...i,...e};return n.forEach((t=>({...r,[t]:[...i[t],...e[t]]}))),r}))}),[d,y,i,B])),j=(0,c.useMemo)((()=>{let e={...F};C&&S&&(e[S]=q(C));const t=A();return Object.keys(t).forEach((n=>{e={...e,[n]:[...(0,g.Z)(i[n]),...t[n]]}})),e.slice_id=0,delete e.slice_name,delete e.dashboards,e}),[F,C,S,A,q,i]);(0,c.useEffect)((()=>{N((e=>!C||e.some((e=>e.column_name===C.column_name))?e:[...e,C]))}),[C]);const P=(0,c.useCallback)(((e,t)=>{d((0,s.logEvent)(x.g3,{drill_depth:y.length+1,slice_id:i.slice_id})),D(j),Z((n=>[...n,{...t,column:e}])),U((n=>{const i=[...n,{groupby:e}];return i[i.length-2].filters=t.filters,i}))}),[d,y.length,j,i.slice_id]),H=(0,c.useMemo)((()=>({drillBy:{excludedColumns:R,openNewModal:!1}})),[R]),{contextMenu:X,inContextMenu:V,onContextMenu:K}=((e,t,n,i,r)=>{const a=(0,c.useRef)(null),[o,s]=(0,c.useState)(!1),l=(0,c.useCallback)(((...e)=>{s(!1),null==n||n(...e)}),[n]),d=(0,c.useCallback)((()=>{s(!1)}),[]);return{contextMenu:(0,c.useMemo)((()=>(0,ue.tZ)($e,{ref:a,id:0,formData:t,onSelection:l,onClose:d,displayedItems:i,additionalConfig:r})),[r,0,i,t,d,l]),inContextMenu:o,onContextMenu:(e,t,n)=>{var i;null==(i=a.current)||i.open(e,t,n),s(!0)}}})(0,F,P,_e.DrillBy,H),Y=(0,r.v9)((e=>{const t=Object.values(e.dashboardLayout.present).find((e=>{var t;return(null==(t=e.meta)?void 0:t.chartId)===i.slice_id}));return(null==t?void 0:t.meta.sliceNameOverride)||(null==t?void 0:t.meta.sliceName)}));(0,c.useEffect)((()=>{if(j){const[e]=(0,ce.hz)(j);f(!0),E(void 0),(0,o.getChartDataRequest)({formData:j}).then((({response:t,json:n})=>(0,o.handleChartDataResponse)(t,n,e))).then((e=>{E(e)})).catch((()=>{m((0,u.t)("Failed to load chart data."))})).finally((()=>{f(!1)}))}}),[m,j]);const{metadataBar:W}=(0,le.S)({dataset:t});return(0,ue.tZ)(ie.default,{css:O.iv`
        .ant-modal-footer {
          border-top: none;
        }
      `,show:!0,onHide:null!=a?a:()=>null,title:(0,u.t)("Drill by: %s",Y),footer:(0,ue.tZ)(xe,{formData:j}),responsive:!0,resizable:!0,resizableConfig:{minHeight:128*p.gridUnit,minWidth:128*p.gridUnit,defaultSize:{width:"auto",height:"80vh"}},draggable:!0,destroyOnClose:!0,maskClosable:!1,children:(0,ue.BX)("div",{css:O.iv`
          display: flex;
          flex-direction: column;
          height: 100%;
        `,children:[W,z,_,v&&(0,ue.tZ)(b.Z,{}),!v&&!$&&(0,ue.tZ)(de.Z,{type:"error",message:(0,u.t)("There was an error loading the chart data")}),M===T.Chart&&$&&(0,ue.tZ)(he,{dataset:t,formData:j,result:$,onContextMenu:K,inContextMenu:V}),M===T.Table&&$&&I,X]})})}var Ce=n(46219);const Se=(0,X.I)().get("load.drillby.options"),Te=Y().encode({columns:["table_name","owners.first_name","owners.last_name","created_by.first_name","created_by.last_name","created_on_humanized","changed_by.first_name","changed_by.last_name","changed_on_humanized","columns.column_name","columns.verbose_name","columns.groupby"]}),we=({drillByConfig:e,formData:t,contextMenuY:n=0,submenuIndex:i=0,onSelection:r=(()=>{}),onClick:a=(()=>{}),excludedColumns:o,openNewModal:s=!0,canDownload:l,open:d,...m})=>{const v=(0,h.Fg)(),{addDangerToast:f}=(0,J.e1)(),[y,x]=(0,c.useState)(!0),[Z,C]=(0,c.useState)(""),[S,T]=(0,c.useState)(),[w,_]=(0,c.useState)([]),[M,$]=(0,c.useState)(!1),[E,I]=(0,c.useState)(),F=(0,c.useRef)(null),N=Se||w.length>10,k=(0,c.useCallback)(((t,n)=>{a(t),r(n,e),I(n),s&&$(!0)}),[e,a,r,s]),U=(0,c.useCallback)((()=>{$(!1)}),[]);(0,c.useEffect)((()=>{var e,t;d?null==(e=F.current)||e.input.focus():(null==(t=F.current)||t.setValue(""),C(""))}),[d]);const L=null==e?void 0:e.groupbyFieldName,B=(0,c.useMemo)((()=>{var e;return null==(e=(0,R.Z)().get(t.viz_type))?void 0:e.behaviors.find((e=>e===D.cg.DrillBy))}),[t.viz_type]),A=(e=>{const t={};return(0,g.Z)(null==e?void 0:e.columns).forEach((e=>{t[e.column_name]=e.verbose_name||e.column_name})),(0,g.Z)(null==e?void 0:e.metrics).forEach((e=>{t[e.metric_name]=e.verbose_name||e.metric_name})),t})(S);(0,c.useEffect)((()=>{B&&L&&async function(){const n=Number(t.datasource.split("__")[0]);try{let i;x(!0),i=Se?await Se(n,t):await(0,ee.e)({endpoint:`/api/v1/dataset/${n}?q=${Te}`});const{json:r}=i,{result:a}=r;T(a),_((0,g.Z)(a.columns).filter((e=>e.groupby)).filter((n=>{var i,r;return!(0,g.Z)(t[null!=(i=null==e?void 0:e.groupbyFieldName)?i:""]).includes(n.column_name)&&n.column_name!==t.x_axis&&(null==(r=(0,g.Z)(o))?void 0:r.every((e=>e.column_name!==n.column_name)))})))}catch(e){p.Z.error(e),ee.f.delete(`/api/v1/dataset/${n}`),f((0,u.t)("Failed to load dimensions for drill by"))}finally{x(!1)}}()}),[f,null==e?void 0:e.groupbyFieldName,o,t,B,L]);const P=H()((e=>C(e)),V.o),X=(0,c.useMemo)((()=>w.filter((e=>(e.verbose_name||e.column_name).toLowerCase().includes(Z.toLowerCase())))),[w,Z]),K=(0,c.useMemo)((()=>(0,z.th)(n,X.length||1,i,200,N?48:0)),[n,X.length,i,N]);let Y;return B?L||(Y=(0,u.t)("Drill by is not available for this data point")):Y=(0,u.t)("Drill by is not yet supported for this chart type"),B&&L?(0,ue.BX)(ue.HY,{children:[(0,ue.tZ)(q.Menu.SubMenu,{title:(0,u.t)("Drill by"),popupClassName:"chart-context-submenu",popupOffset:[0,K],...m,children:(0,ue.BX)("div",{children:[N&&(0,ue.tZ)(Q.II,{ref:F,prefix:(0,ue.tZ)(G.Z.Search,{iconSize:"l",iconColor:v.colors.grayscale.light1}),onChange:e=>{e.stopPropagation(),P(e.target.value)},placeholder:(0,u.t)("Search columns"),onClick:e=>{e.nativeEvent.stopImmediatePropagation()},allowClear:!0,css:O.iv`
                width: auto;
                max-width: 100%;
                margin: ${2*v.gridUnit}px ${3*v.gridUnit}px;
                box-shadow: none;
              `}),y?(0,ue.tZ)("div",{css:O.iv`
                padding: ${3*v.gridUnit}px 0;
              `,children:(0,ue.tZ)(b.Z,{position:"inline-centered"})}):X.length?(0,ue.tZ)(W.t7,{width:"100%",height:200,itemSize:35,itemCount:X.length,itemData:{columns:X,...m},overscanCount:20,children:({index:e,data:t,style:n})=>{const{columns:i,...r}=t,a=i[e];return(0,ue.tZ)(Ce.i,{tooltipText:a.verbose_name||a.column_name,...r,onClick:e=>k(e,a),style:n,children:a.verbose_name||a.column_name},`drill-by-item-${a.column_name}`)}}):(0,ue.tZ)(q.Menu.Item,{disabled:!0,...m,children:(0,u.t)("No columns found")},"no-drill-by-columns-found")]})}),M&&(0,ue.tZ)(Ze,{column:E,drillByConfig:e,formData:t,onHideModal:U,dataset:{...S,verbose_map:A},canDownload:l})]}):(0,ue.tZ)(q.Menu.Item,{disabled:!0,...m,children:(0,ue.BX)("div",{children:[(0,u.t)("Drill by"),(0,ue.tZ)(j.j,{title:Y})]})},"drill-by-disabled")};var _e;!function(e){e[e.CrossFilter=0]="CrossFilter",e[e.DrillToDetail=1]="DrillToDetail",e[e.DrillBy=2]="DrillBy",e[e.All=3]="All"}(_e||(_e={}));const Me=({id:e,formData:t,onSelection:n,onClose:i,displayedItems:a=_e.All,additionalConfig:o},s)=>{var l,d;const p=(0,h.Fg)(),v=(0,r.I0)(),b=(0,r.v9)((e=>{var t;return(0,U.R)("can_explore","Superset",null==(t=e.user)?void 0:t.roles)})),f=(0,r.v9)((e=>{var t;return(0,U.R)("can_write","ExploreFormDataRestApi",null==(t=e.user)?void 0:t.roles)})),y=(0,r.v9)((e=>{var t;return(0,U.R)("can_samples","Datasource",null==(t=e.user)?void 0:t.roles)})),x=(0,r.v9)((e=>{var t;return(0,U.R)("can_csv","Superset",null==(t=e.user)?void 0:t.roles)})),Z=(0,r.v9)((e=>{var t;return(0,U.R)("can_drill","Dashboard",null==(t=e.user)?void 0:t.roles)})),C=(b||Z)&&f,S=(b||Z)&&y,T=(0,r.v9)((({dashboardInfo:e})=>e.crossFiltersEnabled)),[w,_]=(0,c.useState)([]),M=e=>a===_e.All||(0,g.Z)(a).includes(e),[{filters:$,clientX:E,clientY:I},F]=(0,c.useState)({clientX:0,clientY:0}),[N,P]=(0,c.useState)(!1),H=[],X=(0,m.cr)(m.TT.DrillToDetail)&&S&&M(_e.DrillToDetail),V=(0,m.cr)(m.TT.DrillBy)&&C&&M(_e.DrillBy),K=(0,m.cr)(m.TT.DashboardCrossFilters)&&M(_e.CrossFilter),Y=null==(l=(0,R.Z)().get(t.viz_type))||null==(d=l.behaviors)?void 0:d.includes(D.cg.InteractiveChart);let W=0;if(K&&(W+=1),X&&(W+=2),V&&(W+=1),0===W&&(W=1),K){var G;const t=!Y||!T||!(null!=$&&$.crossFilter);let n=null;t?T?Y?null!=$&&$.crossFilter||(n=(0,ue.tZ)(ue.HY,{children:(0,ue.tZ)("div",{children:(0,u.t)("You can't apply cross-filter on this data point.")})})):n=(0,ue.tZ)(ue.HY,{children:(0,ue.tZ)("div",{children:(0,u.t)("This visualization type does not support cross-filtering.")})}):n=(0,ue.tZ)(ue.HY,{children:(0,ue.tZ)("div",{children:(0,u.t)("Cross-filtering is not enabled for this dashboard.")})}):n=(0,ue.BX)(ue.HY,{children:[(0,ue.tZ)("div",{children:(0,u.t)("Cross-filter will be applied to all of the charts that use this dataset.")}),(0,ue.tZ)("div",{children:(0,u.t)("You can also just click on the chart to apply cross-filter.")})]}),H.push((0,ue.BX)(ue.HY,{children:[(0,ue.tZ)(q.Menu.Item,{disabled:t,onClick:()=>{null!=$&&$.crossFilter&&v((0,B.eG)(e,$.crossFilter.dataMask))},children:null!=$&&null!=(G=$.crossFilter)&&G.isCurrentValueSelected?(0,u.t)("Remove cross-filter"):(0,ue.BX)("div",{children:[(0,u.t)("Add cross-filter"),(0,ue.tZ)(j.j,{title:n,color:t?void 0:p.colors.grayscale.base})]})},"cross-filtering-menu-item"),W>1&&(0,ue.tZ)(q.Menu.Divider,{})]}))}if(X&&H.push((0,ue.tZ)(A.p,{chartId:e,formData:t,filters:null==$?void 0:$.drillToDetail,isContextMenu:!0,contextMenuY:I,onSelection:n,submenuIndex:K?2:1,showModal:N,setShowModal:P,...(null==o?void 0:o.drillToDetail)||{}})),V){let e=0;K&&(e+=1),X&&(e+=2),H.push((0,ue.tZ)(we,{drillByConfig:null==$?void 0:$.drillBy,onSelection:n,formData:t,contextMenuY:I,submenuIndex:e,canDownload:x,open:w.includes("drill-by-submenu"),...(null==o?void 0:o.drillBy)||{}},"drill-by-submenu"))}const Q=(0,c.useCallback)(((t,n,i)=>{var r;const a=(0,z.$t)(n,W);F({clientX:t,clientY:a,filters:i}),null==(r=document.getElementById(`hidden-span-${e}`))||r.click()}),[e,W]);return(0,c.useImperativeHandle)(s,(()=>({open:Q})),[Q]),k.createPortal((0,ue.tZ)(L.Gj,{overlay:(0,ue.tZ)(q.Menu,{className:"chart-context-menu",onOpenChange:e=>{_(e)},children:H.length?H:(0,ue.tZ)(q.Menu.Item,{disabled:!0,children:"No actions"})}),trigger:["click"],onVisibleChange:e=>!e&&i(),children:(0,ue.tZ)("span",{id:`hidden-span-${e}`,css:(0,O.iv)({visibility:"hidden",position:"fixed",top:I,left:E,width:1,height:1},"","")})}),document.body)},$e=(0,c.forwardRef)(Me),Ee={annotationData:d().object,actions:d().object,chartId:d().number.isRequired,datasource:d().object,initialValues:d().object,formData:d().object.isRequired,latestQueryFormData:d().object,labelsColor:d().object,labelsColorMap:d().object,height:d().number,width:d().number,setControlValue:d().func,vizType:d().string.isRequired,triggerRender:d().bool,chartAlert:d().string,chartStatus:d().string,queriesResponse:d().arrayOf(d().object),triggerQuery:d().bool,chartIsStale:d().bool,addFilter:d().func,setDataMask:d().func,onFilterMenuOpen:d().func,onFilterMenuClose:d().func,ownState:d().object,postTransformProps:d().func,source:d().oneOf([i.Dashboard,i.Explore]),emitCrossFilters:d().bool},Ie={},Fe=[D.cg.InteractiveChart],De={addFilter:()=>Ie,onFilterMenuOpen:()=>Ie,onFilterMenuClose:()=>Ie,initialValues:Ie,setControlValue(){},triggerRender:!1};class Re extends c.Component{constructor(e){super(e),this.state={showContextMenu:e.source===i.Dashboard&&((0,m.cr)(m.TT.DrillToDetail)||(0,m.cr)(m.TT.DashboardCrossFilters)),inContextMenu:!1,legendState:void 0},this.hasQueryResponseChange=!1,this.contextMenuRef=(0,c.createRef)(),this.handleAddFilter=this.handleAddFilter.bind(this),this.handleRenderSuccess=this.handleRenderSuccess.bind(this),this.handleRenderFailure=this.handleRenderFailure.bind(this),this.handleSetControlValue=this.handleSetControlValue.bind(this),this.handleOnContextMenu=this.handleOnContextMenu.bind(this),this.handleContextMenuSelected=this.handleContextMenuSelected.bind(this),this.handleContextMenuClosed=this.handleContextMenuClosed.bind(this),this.handleLegendStateChanged=this.handleLegendStateChanged.bind(this),this.onContextMenuFallback=this.onContextMenuFallback.bind(this),this.hooks={onAddFilter:this.handleAddFilter,onContextMenu:this.state.showContextMenu?this.handleOnContextMenu:void 0,onError:this.handleRenderFailure,setControlValue:this.handleSetControlValue,onFilterMenuOpen:this.props.onFilterMenuOpen,onFilterMenuClose:this.props.onFilterMenuClose,onLegendStateChanged:this.handleLegendStateChanged,setDataMask:e=>{var t;null==(t=this.props.actions)||t.updateDataMask(this.props.chartId,e)}},this.mutableQueriesResponse=M()(this.props.queriesResponse)}shouldComponentUpdate(e,t){var n,i;return!(!(e.queriesResponse&&["success","rendered"].indexOf(e.chartStatus)>-1)||null!=(n=e.queriesResponse)&&null!=(i=n[0])&&i.error)&&(!E()(this.state,t)||(this.hasQueryResponseChange=e.queriesResponse!==this.props.queriesResponse,this.hasQueryResponseChange&&(this.mutableQueriesResponse=M()(e.queriesResponse)),this.hasQueryResponseChange||!E()(e.datasource,this.props.datasource)||e.annotationData!==this.props.annotationData||e.ownState!==this.props.ownState||e.filterState!==this.props.filterState||e.height!==this.props.height||e.width!==this.props.width||e.triggerRender||e.labelsColor!==this.props.labelsColor||e.labelsColorMap!==this.props.labelsColorMap||e.formData.color_scheme!==this.props.formData.color_scheme||e.formData.stack!==this.props.formData.stack||e.cacheBusterProp!==this.props.cacheBusterProp||e.emitCrossFilters!==this.props.emitCrossFilters))}handleAddFilter(e,t,n=!0,i=!0){this.props.addFilter(e,t,n,i)}handleRenderSuccess(){const{actions:e,chartStatus:t,chartId:n,vizType:i}=this.props;["loading","rendered"].indexOf(t)<0&&e.chartRenderingSucceeded(n),this.hasQueryResponseChange&&e.logEvent(x.aD,{slice_id:n,viz_type:i,start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:x.Yd.getTimestamp()-this.renderStartTime})}handleRenderFailure(e,t){const{actions:n,chartId:i}=this.props;p.Z.warn(e),n.chartRenderingFailed(e.toString(),i,t?t.componentStack:null),this.hasQueryResponseChange&&n.logEvent(x.aD,{slice_id:i,has_err:!0,error_details:e.toString(),start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:x.Yd.getTimestamp()-this.renderStartTime})}handleSetControlValue(...e){const{setControlValue:t}=this.props;t&&t(...e)}handleOnContextMenu(e,t,n){this.contextMenuRef.current.open(e,t,n),this.setState({inContextMenu:!0})}handleContextMenuSelected(){this.setState({inContextMenu:!1})}handleContextMenuClosed(){this.setState({inContextMenu:!1})}handleLegendStateChanged(e){this.setState({legendState:e})}onContextMenuFallback(e){this.state.inContextMenu||(e.preventDefault(),this.handleOnContextMenu(e.clientX,e.clientY))}render(){var e,t;const{chartAlert:n,chartStatus:r,chartId:a,emitCrossFilters:o}=this.props;if("loading"===r||n||null===r)return null;this.renderStartTime=x.Yd.getTimestamp();const{width:s,height:l,datasource:d,annotationData:c,initialValues:h,ownState:p,filterState:m,chartIsStale:g,formData:v,latestQueryFormData:b,postTransformProps:y}=this.props,Z=g&&b?b:v,C=Z.viz_type||this.props.vizType,S=F()(C),T="table"===C?`superset-chart-${S}`:S;let w;const _=(0,u.t)("No results were returned for this query"),M=this.props.source===i.Explore?(0,u.t)("Make sure that the controls are configured properly and the datasource contains data for the selected time range"):void 0,$="chart.svg";w=s>300&&l>220?(0,ue.tZ)(f.XJ,{title:_,description:M,image:$}):(0,ue.tZ)(f.Tc,{title:_,image:$});const E=null!=(e=(0,R.Z)().get(v.viz_type))&&e.behaviors.find((e=>e===D.cg.DrillToDetail))?{inContextMenu:this.state.inContextMenu}:{},I=!(null!=v&&v.server_pagination&&((null==p||null==(t=p.searchText)?void 0:t.length)||0)>0);return(0,ue.BX)(ue.HY,{children:[this.state.showContextMenu&&(0,ue.tZ)($e,{ref:this.contextMenuRef,id:a,formData:Z,onSelection:this.handleContextMenuSelected,onClose:this.handleContextMenuClosed}),(0,ue.tZ)("div",{onContextMenu:this.state.showContextMenu?this.onContextMenuFallback:void 0,children:(0,ue.tZ)(N.Z,{disableErrorBoundary:!0,id:`chart-id-${a}`,className:T,chartType:C,width:s,height:l,annotationData:c,datasource:d,initialValues:h,formData:Z,ownState:p,filterState:m,hooks:this.hooks,behaviors:Fe,queriesData:this.mutableQueriesResponse,onRenderSuccess:this.handleRenderSuccess,onRenderFailure:this.handleRenderFailure,noResults:w,postTransformProps:y,emitCrossFilters:o,legendState:this.state.legendState,enableNoResults:I,...E},`${a}`)})]})}}Re.propTypes=Ee,Re.defaultProps=De;const Ne=Re;var Oe=n(8743),ke=n(72875);const Ue=({chartId:e,error:t,...n})=>{const{result:i}=(0,Oe.hb)(e),r=t&&{...t,extra:{...t.extra,owners:i}};return(0,ue.tZ)(ke.Z,{...n,error:r})};var qe=n(75701);const Le={annotationData:d().object,actions:d().object,chartId:d().number.isRequired,datasource:d().object,dashboardId:d().number,initialValues:d().object,formData:d().object.isRequired,labelsColor:d().object,labelsColorMap:d().object,width:d().number,height:d().number,setControlValue:d().func,timeout:d().number,vizType:d().string.isRequired,triggerRender:d().bool,force:d().bool,isFiltersInitialized:d().bool,chartAlert:d().string,chartStatus:d().string,chartStackTrace:d().string,queriesResponse:d().arrayOf(d().object),triggerQuery:d().bool,chartIsStale:d().bool,errorMessage:d().node,addFilter:d().func,onQuery:d().func,onFilterMenuOpen:d().func,onFilterMenuClose:d().func,ownState:d().object,postTransformProps:d().func,datasetsStatus:d().oneOf(["loading","error","complete"]),isInView:d().bool,emitCrossFilters:d().bool},Be={},Ae=(0,u.t)("The dataset associated with this chart no longer exists"),ze={addFilter:()=>Be,onFilterMenuOpen:()=>Be,onFilterMenuClose:()=>Be,initialValues:Be,setControlValue(){},triggerRender:!1,dashboardId:null,chartStackTrace:null,force:!1,isInView:!0},je=h.iK.div`
  min-height: ${e=>e.height}px;
  position: relative;
  text-align: center;

  .chart-tooltip {
    opacity: 0.75;
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
  }

  .slice_container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: ${e=>e.height}px;

    .pivot_table tbody tr {
      font-feature-settings: 'tnum' 1;
    }

    .alert {
      margin: ${({theme:e})=>2*e.gridUnit}px;
    }
  }
`,Pe=h.iK.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80%;
  transform: translate(-50%, -50%);
`,He=h.iK.span`
  display: block;
  margin: ${({theme:e})=>4*e.gridUnit}px auto;
  width: fit-content;
  color: ${({theme:e})=>e.colors.grayscale.base};
`,Xe=h.iK.div`
  font-family: ${({theme:e})=>e.typography.families.monospace};
  word-break: break-word;
  overflow-x: auto;
  white-space: pre-wrap;
`;class Ve extends c.PureComponent{constructor(e){super(e),this.handleRenderContainerFailure=this.handleRenderContainerFailure.bind(this)}componentDidMount(){this.props.triggerQuery&&this.runQuery()}componentDidUpdate(){this.props.triggerQuery&&this.runQuery()}runQuery(){this.props.actions.postChartFormData(this.props.formData,Boolean(this.props.force||(0,C.eY)(Z.KD.force)),this.props.timeout,this.props.chartId,this.props.dashboardId,this.props.ownState)}handleRenderContainerFailure(e,t){const{actions:n,chartId:i}=this.props;p.Z.warn(e),n.chartRenderingFailed(e.toString(),i,t?t.componentStack:null),n.logEvent(x.aD,{slice_id:i,has_err:!0,error_details:e.toString(),start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:x.Yd.getTimestamp()-this.renderStartTime})}renderErrorMessage(e){var t;const{chartId:n,chartAlert:r,chartStackTrace:a,datasource:o,dashboardId:s,height:l,datasetsStatus:d}=this.props,c=null==e||null==(t=e.errors)?void 0:t[0],u=r||(null==e?void 0:e.message);return void 0!==r&&r!==Ae&&o===v.tw&&d!==w.ni.Error?(0,ue.tZ)(je,{"data-ui-anchor":"chart",className:"chart-container",height:l,children:(0,ue.tZ)(b.Z,{})},n):(0,ue.tZ)(Ue,{chartId:n,error:c,subtitle:(0,ue.tZ)(Xe,{children:u}),copyText:u,link:e?e.link:null,source:s?i.Dashboard:i.Explore,stackTrace:a},n)}renderSpinner(e){const t=e?(0,u.t)("Waiting on %s",e):(0,u.t)("Waiting on database...");return(0,ue.BX)(Pe,{children:[(0,ue.tZ)(b.Z,{position:"inline-centered"}),(0,ue.tZ)(He,{children:t})]})}renderChartContainer(){return(0,ue.tZ)("div",{className:"slice_container",children:this.props.isInView||!(0,m.cr)(m.TT.DashboardVirtualization)||(0,S.b)()?(0,ue.tZ)(Ne,{...this.props,source:this.props.dashboardId?"dashboard":"explore"}):(0,ue.tZ)(b.Z,{})})}render(){var e;const{height:t,chartAlert:n,chartStatus:i,datasource:r,errorMessage:a,chartIsStale:o,queriesResponse:s=[],width:l}=this.props,d=null==r||null==(e=r.database)?void 0:e.name,c="loading"===i;return this.renderContainerStartTime=x.Yd.getTimestamp(),"failed"===i?s.map((e=>this.renderErrorMessage(e))):a&&0===(0,g.Z)(s).length?(0,ue.tZ)(f.XJ,{title:(0,u.t)("Add required control values to preview chart"),description:(0,qe.J)(!0),image:"chart.svg"}):c||n||a||!o||0!==(0,g.Z)(s).length?(0,ue.tZ)(y.Z,{onError:this.handleRenderContainerFailure,showMessage:!1,children:(0,ue.tZ)(je,{"data-ui-anchor":"chart",className:"chart-container",height:t,width:l,children:c?this.renderSpinner(d):this.renderChartContainer()})}):(0,ue.tZ)(f.XJ,{title:(0,u.t)("Your chart is ready to go!"),description:(0,ue.BX)("span",{children:[(0,u.t)('Click on "Create chart" button in the control panel on the left to preview a visualization or')," ",(0,ue.tZ)("span",{role:"button",tabIndex:0,onClick:this.props.onQuery,children:(0,u.t)("click here")}),"."]}),image:"chart.svg"})}}Ve.propTypes=Le,Ve.defaultProps=ze;const Ke=Ve,Ye=(0,r.$j)(null,(function(e){return{actions:(0,a.DE)({...o,updateDataMask:B.eG,logEvent:s.logEvent},e)}}))(Ke)},28543:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(69856),r=n(56565),a=n(68424);const o=[...i.qB].map((e=>i.LT[e].operation));class s{constructor(e){var t;this.expressionType=e.expressionType||a.p.Simple,this.expressionType===a.p.Simple?(this.subject=e.subject,this.operator=null==(t=e.operator)?void 0:t.toUpperCase(),this.operatorId=e.operatorId,this.comparator=e.comparator,[i.d.IsTrue,i.d.IsFalse].indexOf(e.operatorId)>=0&&(this.comparator=e.operatorId===i.d.IsTrue),[i.d.IsNull,i.d.IsNotNull].indexOf(e.operatorId)>=0&&(this.comparator=null),this.clause=e.clause||a.N.Where,this.sqlExpression=null):this.expressionType===a.p.Sql&&(this.sqlExpression="string"==typeof e.sqlExpression?e.sqlExpression:(0,r.c)(e,{useSimple:!0}),this.clause=e.clause,e.operator&&o.indexOf(e.operator)>=0?(this.subject=e.subject,this.operator=e.operator,this.operatorId=e.operatorId):(this.subject=null,this.operator=null),this.comparator=null),this.isExtra=!!e.isExtra,this.isNew=!!e.isNew,this.datasourceWarning=!!e.datasourceWarning,this.filterOptionName=e.filterOptionName||`filter_${Math.random().toString(36).substring(2,15)}_${Math.random().toString(36).substring(2,15)}`}duplicateWith(e){return new s({...this,isNew:!1,...e})}equals(e){return e.clause===this.clause&&e.expressionType===this.expressionType&&e.sqlExpression===this.sqlExpression&&e.operator===this.operator&&e.operatorId===this.operatorId&&e.comparator===this.comparator&&e.subject===this.subject}isValid(){const e=[i.d.IsNotNull,i.d.IsNull].map((e=>i.LT[e].operation)),t=[i.d.IsTrue,i.d.IsFalse].map((e=>i.LT[e].operation));if(this.expressionType===a.p.Simple){if(e.indexOf(this.operator)>=0)return!(!this.operator||!this.subject);if(t.indexOf(this.operator)>=0)return!(!this.subject||null===this.comparator);if(this.operator&&this.subject&&this.clause)if(Array.isArray(this.comparator)){if(this.comparator.length>0)return!0}else if(null!==this.comparator)return!0}else if(this.expressionType===a.p.Sql)return!(!this.sqlExpression||!this.clause);return!1}getDefaultLabel(){const e=this.translateToSql();return e.length<43?e:`${e.substring(0,40)}...`}getTooltipTitle(){return this.translateToSql()}translateToSql(){return(0,r.c)(this)}}},61890:(e,t,n)=>{n.d(t,{Z:()=>O});var i=n(67294),r=n(45697),a=n.n(r),o=n(31069),s=n(68492),l=n(61988),d=n(55786),c=n(68135),u=n(82342),h=n(17536),p=n(27130),m=n(19113),g=n(69856),v=n(40266),b=n(33334),f=n(13322),y=n(74069),x=n(96055),Z=n(42753),C=n(7848),S=n(35944);function T({adhocFilter:e,options:t,datasource:n,onFilterEdit:i,onRemoveFilter:r,partitionColumn:a,onMoveLabel:o,onDropLabel:s,index:l,sections:d,operators:c}){const{actualTimeRange:u,title:h}=(0,C.w)(e);return(0,S.tZ)(x.Z,{sections:d,operators:c,adhocFilter:e,options:t,datasource:n,onFilterEdit:i,partitionColumn:a,children:(0,S.tZ)(b.yz,{label:null!=u?u:e.getDefaultLabel(),tooltipTitle:null!=h?h:e.getTooltipTitle(),onRemove:r,onMoveLabel:o,onDropLabel:s,index:l,type:Z.g.FilterOption,withCaret:!0,isExtra:e.isExtra})})}var w=n(28543),_=n(68424);const M=a().oneOfType([a().shape({expressionType:a().oneOf([_.p.Simple]).isRequired,clause:a().oneOf([_.N.Having,_.N.Where]).isRequired,subject:a().string.isRequired,comparator:a().oneOfType([a().string,a().arrayOf(a().string)]).isRequired}),a().shape({expressionType:a().oneOf([_.p.Sql]).isRequired,clause:a().oneOf([_.N.Where,_.N.Having]).isRequired,sqlExpression:a().string.isRequired})]);var $=n(72201),E=n(23525);const{warning:I}=y.default,F=a().oneOfType([a().string,h.Z]),D={label:a().oneOfType([a().object,a().string]),name:a().string,sections:a().arrayOf(a().string),operators:a().arrayOf(a().string),onChange:a().func,value:a().arrayOf(M),datasource:a().object,columns:a().arrayOf($.Z),savedMetrics:a().arrayOf(p.Z),selectedMetrics:a().oneOfType([F,a().arrayOf(F)]),isLoading:a().bool,canDelete:a().func};function R(e){return e&&!(e instanceof w.Z)&&e.expressionType}class N extends i.Component{constructor(e){super(e),this.optionsForSelect=this.optionsForSelect.bind(this),this.onRemoveFilter=this.onRemoveFilter.bind(this),this.onNewFilter=this.onNewFilter.bind(this),this.onFilterEdit=this.onFilterEdit.bind(this),this.moveLabel=this.moveLabel.bind(this),this.onChange=this.onChange.bind(this),this.mapOption=this.mapOption.bind(this),this.getMetricExpression=this.getMetricExpression.bind(this),this.removeFilter=this.removeFilter.bind(this);const t=(this.props.value||[]).map((e=>R(e)?new w.Z(e):e));this.optionRenderer=e=>(0,S.tZ)(v.Z,{option:e}),this.valueRenderer=(e,t)=>(0,S.tZ)(T,{index:t,adhocFilter:e,onFilterEdit:this.onFilterEdit,options:this.state.options,sections:this.props.sections,operators:this.props.operators,datasource:this.props.datasource,onRemoveFilter:e=>{e.stopPropagation(),this.onRemoveFilter(t)},onMoveLabel:this.moveLabel,onDropLabel:()=>this.props.onChange(this.state.values),partitionColumn:this.state.partitionColumn},t),this.state={values:t,options:this.optionsForSelect(this.props),partitionColumn:null}}componentDidMount(){const{datasource:e}=this.props;if(e&&"table"===e.type){var t;const n=null==(t=e.database)?void 0:t.id,{datasource_name:i,catalog:r,schema:a,is_sqllab_view:l}=e;!l&&n&&i&&a&&o.Z.get({endpoint:`/api/v1/database/${n}/table_metadata/extra/${(0,E.UK)({name:i,catalog:r,schema:a})}`}).then((({json:e})=>{if(e&&e.partitions){const{partitions:t}=e;t&&t.cols&&1===Object.keys(t.cols).length&&this.setState({partitionColumn:t.cols[0]})}})).catch((e=>{s.Z.error("fetch extra_table_metadata:",e.statusText)}))}}UNSAFE_componentWillReceiveProps(e){this.props.columns!==e.columns&&this.setState({options:this.optionsForSelect(e)}),this.props.value!==e.value&&this.setState({values:(e.value||[]).map((e=>R(e)?new w.Z(e):e))})}removeFilter(e){const t=[...this.state.values];t.splice(e,1),this.setState((e=>({...e,values:t}))),this.props.onChange(t)}onRemoveFilter(e){const{canDelete:t}=this.props,{values:n}=this.state,i=null==t?void 0:t(n[e],n);"string"!=typeof i?this.removeFilter(e):I({title:(0,l.t)("Warning"),content:i})}onNewFilter(e){const t=this.mapOption(e);t&&this.setState((e=>({...e,values:[...e.values,t]})),(()=>{this.props.onChange(this.state.values)}))}onFilterEdit(e){this.props.onChange(this.state.values.map((t=>t.filterOptionName===e.filterOptionName?e:t)))}onChange(e){const t=(e||[]).map((e=>this.mapOption(e))).filter((e=>e));this.props.onChange(t)}getMetricExpression(e){return this.props.savedMetrics.find((t=>t.metric_name===e)).expression}moveLabel(e,t){const{values:n}=this.state,i=[...n];[i[t],i[e]]=[i[e],i[t]],this.setState({values:i})}mapOption(e){return e instanceof w.Z?e:e.saved_metric_name?new w.Z({expressionType:_.p.Sql,subject:this.getMetricExpression(e.saved_metric_name),operator:g.LT[g.d.GreaterThan].operation,comparator:0,clause:_.N.Having}):e.label?new w.Z({expressionType:_.p.Sql,subject:new m.Z(e).translateToSql(),operator:g.LT[g.d.GreaterThan].operation,comparator:0,clause:_.N.Having}):e.column_name?new w.Z({expressionType:_.p.Simple,subject:e.column_name,operator:g.LT[g.d.Equals].operation,comparator:"",clause:_.N.Where,isNew:!0}):null}optionsForSelect(e){return[...e.columns,...(0,d.Z)(e.selectedMetrics).map((e=>e&&("string"==typeof e?{saved_metric_name:e}:new m.Z(e))))].filter((e=>e)).reduce(((e,t)=>(t.saved_metric_name?e.push({...t,filterOptionName:t.saved_metric_name}):t.column_name?e.push({...t,filterOptionName:`_col_${t.column_name}`}):t instanceof m.Z&&e.push({...t,filterOptionName:`_adhocmetric_${t.label}`}),e)),[]).sort(((e,t)=>(e.saved_metric_name||e.column_name||e.label).localeCompare(t.saved_metric_name||t.column_name||t.label)))}addNewFilterPopoverTrigger(e){return(0,S.tZ)(x.Z,{operators:this.props.operators,sections:this.props.sections,adhocFilter:new w.Z({}),datasource:this.props.datasource,options:this.state.options,onFilterEdit:this.onNewFilter,partitionColumn:this.state.partitionColumn,children:e})}render(){const{theme:e}=this.props;return(0,S.BX)("div",{className:"metrics-select",children:[(0,S.BX)(b.gM,{children:[(0,S.tZ)(u.Z,{...this.props}),this.addNewFilterPopoverTrigger((0,S.tZ)(b.IG,{children:(0,S.tZ)(f.Z.PlusLarge,{iconSize:"s",iconColor:e.colors.grayscale.light5})}))]}),(0,S.tZ)(b.yj,{children:this.state.values.length>0?this.state.values.map(((e,t)=>this.valueRenderer(e,t))):this.addNewFilterPopoverTrigger((0,S.BX)(b.SW,{children:[(0,S.tZ)(f.Z.PlusSmall,{iconColor:e.colors.grayscale.light1}),(0,l.t)("Add filter")]}))})]})}}N.propTypes=D,N.defaultProps={name:"",onChange:()=>{},columns:[],savedMetrics:[],selectedMetrics:[]};const O=(0,c.b)(N)},72201:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(45697),r=n.n(i);const a=r().shape({column_name:r().string.isRequired,type:r().string})},19113:(e,t,n)=>{n.d(t,{Z:()=>s,v:()=>r});var i=n(69856);const r={SIMPLE:"SIMPLE",SQL:"SQL"};function a(e){if(e.sqlExpression&&i.Q_.test(e.sqlExpression)){const t=e.sqlExpression.indexOf(")"),n=e.sqlExpression.substring(0,t).lastIndexOf("(");if(t>0&&n>0)return e.sqlExpression.substring(n+1,t)}return null}function o(e){if(e.sqlExpression&&i.Q_.test(e.sqlExpression)){const t=e.sqlExpression.indexOf("(");if(t>0)return e.sqlExpression.substring(0,t)}return null}class s{constructor(e){if(this.expressionType=e.expressionType||r.SIMPLE,this.expressionType===r.SIMPLE){const t=a(e);this.column=e.column||t&&{column_name:t},this.aggregate=e.aggregate||o(e),this.sqlExpression=null}else this.expressionType===r.SQL&&(this.sqlExpression=e.sqlExpression,this.column=null,this.aggregate=null);this.datasourceWarning=!!e.datasourceWarning,this.hasCustomLabel=!(!e.hasCustomLabel||!e.label),this.label=this.hasCustomLabel?e.label:this.getDefaultLabel(),this.optionName=e.optionName||`metric_${Math.random().toString(36).substring(2,15)}_${Math.random().toString(36).substring(2,15)}`}getDefaultLabel(){return this.translateToSql({useVerboseName:!0})}translateToSql(e={useVerboseName:!1,transformCountDistinct:!1}){if(this.expressionType===r.SIMPLE){var t,n;const r=this.aggregate||"",a=e.useVerboseName&&null!=(t=this.column)&&t.verbose_name?`(${this.column.verbose_name})`:null!=(n=this.column)&&n.column_name?`(${this.column.column_name})`:"";return e.transformCountDistinct&&r===i.YY.COUNT_DISTINCT&&/^\(.*\)$/.test(a)?`COUNT(DISTINCT ${a.slice(1,-1)})`:r+a}return this.expressionType===r.SQL?this.sqlExpression:""}duplicateWith(e){return new s({...this,...e})}equals(e){return e.label===this.label&&e.expressionType===this.expressionType&&e.sqlExpression===this.sqlExpression&&e.aggregate===this.aggregate&&(e.column&&e.column.column_name)===(this.column&&this.column.column_name)}isValid(){return this.expressionType===r.SIMPLE?!(!this.column||!this.aggregate):this.expressionType===r.SQL&&!!this.sqlExpression}inferSqlExpressionAggregate(){return o(this)}inferSqlExpressionColumn(){return a(this)}}},40266:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(45697),r=n.n(i),a=n(34087),o=n(17536),s=n(99963),l=n(35944);const d={option:r().oneOfType([a.Z,r().shape({saved_metric_name:r().string.isRequired}),o.Z]).isRequired};function c({option:e}){return e.saved_metric_name?(0,l.tZ)(s.l,{column:{column_name:e.saved_metric_name,type:"expression"},showType:!0}):e.column_name?(0,l.tZ)(s.l,{column:e,showType:!0}):e.label?(0,l.tZ)(s.l,{column:{column_name:e.label,type:"expression"},showType:!0}):null}c.propTypes=d},17536:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(45697),r=n.n(i),a=n(69856),o=n(34087),s=n(19113);const l=r().oneOfType([r().shape({expressionType:r().oneOf([s.v.SIMPLE]).isRequired,column:o.Z.isRequired,aggregate:r().oneOf(Object.keys(a.YY)).isRequired,label:r().string.isRequired}),r().shape({expressionType:r().oneOf([s.v.SQL]).isRequired,sqlExpression:r().string.isRequired,label:r().string.isRequired})])},34087:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(45697),r=n.n(i);const a=r().shape({column_name:r().string.isRequired,type:r().string})},27130:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(45697),r=n.n(i);const a=r().shape({metric_name:r().string,verbose_name:r().string,expression:r().string})},96022:(e,t,n)=>{n.d(t,{ZN:()=>j,gT:()=>H});var i=n(67294),r=n(28216),a=n(51995),o=n(11965),s=n(61988),l=n(93185),d=n(13322),c=n(83862),u=n(1304),h=n(35932),p=n(14114),m=n(12515),g=n(56727),v=n(23525),b=n(10222),f=n(21312),y=n(97381),x=n(3741),Z=n(15423),C=n(9875),S=n(43617),T=n(27600),w=n(50909),_=n(35944);const M=(0,a.iK)(w.qi)`
  && {
    margin: 0 0 ${({theme:e})=>e.gridUnit}px;
  }
`,$=({formData:e,addDangerToast:t})=>{const[n,r]=(0,i.useState)("400"),[a,l]=(0,i.useState)("600"),[d,c]=(0,i.useState)(""),[u,h]=(0,i.useState)(""),p=(0,i.useCallback)((e=>{const{value:t,name:n}=e.currentTarget;"width"===n&&l(t),"height"===n&&r(t)}),[]),m=(0,i.useCallback)((()=>{c(""),(0,v.YE)(e).then((e=>{c(e),h("")})).catch((()=>{h((0,s.t)("Error")),t((0,s.t)("Sorry, something went wrong. Try again later."))}))}),[t,e]);(0,i.useEffect)((()=>{m()}),[]);const g=(0,i.useMemo)((()=>{if(!d)return"";const e=`${d}?${T.KD.standalone.name}=1&height=${n}`;return`<iframe\n  width="${a}"\n  height="${n}"\n  seamless\n  frameBorder="0"\n  scrolling="no"\n  src="${e}"\n>\n</iframe>`}),[n,d,a]),b=u||g||(0,s.t)("Generating link, please wait..");return(0,_.BX)("div",{id:"embed-code-popover",children:[(0,_.BX)("div",{css:o.iv`
          display: flex;
          flex-direction: column;
        `,children:[(0,_.tZ)(S.Z,{shouldShowText:!1,text:g,copyNode:(0,_.tZ)(M,{buttonSize:"xsmall",children:(0,_.tZ)("i",{className:"fa fa-clipboard"})})}),(0,_.tZ)(C.Kx,{name:"embedCode",disabled:!g,value:b,rows:"4",readOnly:!0,css:e=>o.iv`
            resize: vertical;
            padding: ${2*e.gridUnit}px;
            font-size: ${e.typography.sizes.s}px;
            border-radius: 4px;
            background-color: ${e.colors.secondary.light5};
          `})]}),(0,_.BX)("div",{css:e=>o.iv`
          display: flex;
          margin-top: ${4*e.gridUnit}px;
          & > div {
            margin-right: ${2*e.gridUnit}px;
          }
          & > div:last-of-type {
            margin-right: 0;
            margin-left: ${2*e.gridUnit}px;
          }
        `,children:[(0,_.BX)("div",{children:[(0,_.tZ)("label",{htmlFor:"embed-height",children:(0,s.t)("Chart height")}),(0,_.tZ)(C.II,{type:"text",defaultValue:n,name:"height",onChange:p})]}),(0,_.BX)("div",{children:[(0,_.tZ)("label",{htmlFor:"embed-width",children:(0,s.t)("Chart width")}),(0,_.tZ)(C.II,{type:"text",defaultValue:a,name:"width",onChange:p,id:"embed-width"})]})]})]})};var E=n(73727);const I=({chartId:e,dashboards:t=[],...n})=>{const r=(0,a.Fg)(),[l,u]=(0,i.useState)(),[h,p]=(0,i.useState)(),m=t.length>10,g=t.filter((e=>!l||e.dashboard_title.toLowerCase().includes(l.toLowerCase()))),v=0===t.length,b=l&&0===g.length,f=e?`?focused_chart=${e}`:"";return(0,_.BX)(_.HY,{children:[m&&(0,_.tZ)(C.II,{allowClear:!0,placeholder:(0,s.t)("Search"),prefix:(0,_.tZ)(d.Z.Search,{iconSize:"l"}),css:o.iv`
            width: ${220}px;
            margin: ${2*r.gridUnit}px ${3*r.gridUnit}px;
          `,value:l,onChange:e=>u(e.currentTarget.value)}),(0,_.BX)("div",{css:o.iv`
          max-height: ${300}px;
          overflow: auto;
        `,children:[g.map((e=>(0,_.tZ)(c.Menu.Item,{onMouseEnter:()=>p(e.id),onMouseLeave:()=>{h===e.id&&p(null)},...n,children:(0,_.tZ)(E.rU,{target:"_blank",rel:"noreferer noopener",to:`/superset/dashboard/${e.id}${f}`,children:(0,_.BX)("div",{css:o.iv`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  max-width: ${220}px;
                `,children:[(0,_.tZ)("div",{css:o.iv`
                    white-space: normal;
                  `,children:e.dashboard_title}),(0,_.tZ)(d.Z.Full,{iconSize:"l",iconColor:r.colors.grayscale.base,css:o.iv`
                    margin-left: ${2*r.gridUnit}px;
                    visibility: ${h===e.id?"visible":"hidden"};
                  `})]})})},String(e.id)))),b&&(0,_.tZ)("div",{css:o.iv`
              margin-left: ${3*r.gridUnit}px;
              margin-bottom: ${r.gridUnit}px;
            `,children:(0,s.t)("No results found")}),v&&(0,_.tZ)(c.Menu.Item,{disabled:!0,css:o.iv`
              min-width: ${220}px;
            `,...n,children:(0,s.t)("None")})]})]})},F="edit_properties",D="export_to_csv",R="export_to_csv_pivoted",N="export_to_json",O="export_to_xlsx",k="download_as_image",U="copy_permalink",q="embed_code",L="share_by_email",B="view_query",A="run_in_sql_lab",z=["pivot_table_v2"],j=a.iK.div`
  ${({theme:e})=>o.iv`
    display: flex;
    align-items: center;

    & svg {
      width: ${3*e.gridUnit}px;
      height: ${3*e.gridUnit}px;
    }

    & span[role='checkbox'] {
      display: inline-flex;
      margin-right: ${e.gridUnit}px;
    }
  `}
`,P=((0,a.iK)(h.Z)`
  ${({theme:e})=>o.iv`
    width: ${8*e.gridUnit}px;
    height: ${8*e.gridUnit}px;
    padding: 0;
    border: 1px solid ${e.colors.primary.dark2};

    &.ant-btn > span.anticon {
      line-height: 0;
      transition: inherit;
    }

    &:hover:not(:focus) > span.anticon {
      color: ${e.colors.primary.light1};
    }
  `}
`,o.iv`
  .ant-dropdown-menu-item > & > .anticon:first-child {
    margin-right: 0;
    vertical-align: 0;
  }
`),H=(e,t,n,o,h,C,S,...T)=>{const w=(0,a.Fg)(),{addDangerToast:M,addSuccessToast:E}=(0,p.e1)(),j=(0,r.I0)(),[H,X]=(0,i.useState)(null),[V,K]=(0,i.useState)(!1),Y=(0,r.v9)((e=>{var t;return null==(t=e.charts)?void 0:t[(0,m.Jp)(e.explore)]})),{datasource:W}=e,G=(0,i.useCallback)((async()=>{try{const t=(0,s.t)("Superset Chart"),n=await(0,v.YE)(e),i=encodeURIComponent((0,s.t)("%s%s","Check out this chart: ",n));window.location.href=`mailto:?Subject=${t}%20&Body=${i}`}catch(e){M((0,s.t)("Sorry, something went wrong. Try again later."))}}),[M,e]),Q=(0,i.useCallback)((()=>t?(0,m.pe)({formData:e,ownState:C,resultType:"full",resultFormat:"csv"}):null),[t,e]),J=(0,i.useCallback)((()=>t?(0,m.pe)({formData:e,resultType:"post_processed",resultFormat:"csv"}):null),[t,e]),ee=(0,i.useCallback)((()=>t?(0,m.pe)({formData:e,resultType:"results",resultFormat:"json"}):null),[t,e]),te=(0,i.useCallback)((()=>t?(0,m.pe)({formData:e,resultType:"results",resultFormat:"xlsx"}):null),[t,e]),ne=(0,i.useCallback)((async()=>{try{if(!e)throw new Error;await(0,b.Z)((()=>(0,v.YE)(e))),E((0,s.t)("Copied to clipboard!"))}catch(e){M((0,s.t)("Sorry, something went wrong. Try again later."))}}),[M,E,e]),ie=(0,i.useCallback)((({key:t,domEvent:i})=>{var r;switch(t){case F:h(),K(!1);break;case D:Q(),K(!1),j((0,y.logEvent)(x.F8,{chartId:null==n?void 0:n.slice_id,chartName:null==n?void 0:n.slice_name}));break;case R:J(),K(!1),j((0,y.logEvent)(x.t4,{chartId:null==n?void 0:n.slice_id,chartName:null==n?void 0:n.slice_name}));break;case N:ee(),K(!1),j((0,y.logEvent)(x.Tl,{chartId:null==n?void 0:n.slice_id,chartName:null==n?void 0:n.slice_name}));break;case O:te(),K(!1),j((0,y.logEvent)(x.BL,{chartId:null==n?void 0:n.slice_id,chartName:null==n?void 0:n.slice_name}));break;case k:(0,g.Z)(".panel-body .chart-container",null!=(r=null==n?void 0:n.slice_name)?r:(0,s.t)("New chart"),!0)(i),K(!1),j((0,y.logEvent)(x.xE,{chartId:null==n?void 0:n.slice_id,chartName:null==n?void 0:n.slice_name}));break;case U:ne(),K(!1);break;case q:K(!1);break;case L:G(),K(!1);break;case B:K(!1);break;case A:o(e,i.metaKey),K(!1)}}),[ne,Q,J,ee,e,o,h,G,null==n?void 0:n.slice_name]);return[(0,i.useMemo)((()=>(0,_.BX)(c.Menu,{onClick:ie,selectable:!1,...T,children:[(0,_.BX)(_.HY,{children:[n&&(0,_.tZ)(c.Menu.Item,{children:(0,s.t)("Edit chart properties")},F),(0,_.tZ)(c.Menu.SubMenu,{title:(0,s.t)("On dashboards"),children:(0,_.tZ)(I,{chartId:null==n?void 0:n.slice_id,dashboards:S})},"dashboards_added_to"),(0,_.tZ)(c.Menu.Divider,{})]}),(0,_.BX)(c.Menu.SubMenu,{title:(0,s.t)("Download"),children:[z.includes(e.viz_type)?(0,_.BX)(_.HY,{children:[(0,_.tZ)(c.Menu.Item,{icon:(0,_.tZ)(d.Z.FileOutlined,{css:P}),disabled:!t,children:(0,s.t)("Export to original .CSV")},D),(0,_.tZ)(c.Menu.Item,{icon:(0,_.tZ)(d.Z.FileOutlined,{css:P}),disabled:!t,children:(0,s.t)("Export to pivoted .CSV")},R)]}):(0,_.tZ)(c.Menu.Item,{icon:(0,_.tZ)(d.Z.FileOutlined,{css:P}),disabled:!t,children:(0,s.t)("Export to .CSV")},D),(0,_.tZ)(c.Menu.Item,{icon:(0,_.tZ)(d.Z.FileOutlined,{css:P}),disabled:!t,children:(0,s.t)("Export to .JSON")},N),(0,_.tZ)(c.Menu.Item,{icon:(0,_.tZ)(d.Z.FileImageOutlined,{css:P}),children:(0,s.t)("Download as image")},k),(0,_.tZ)(c.Menu.Item,{icon:(0,_.tZ)(d.Z.FileOutlined,{css:P}),disabled:!t,children:(0,s.t)("Export to Excel")},O)]},"download_submenu"),(0,_.BX)(c.Menu.SubMenu,{title:(0,s.t)("Share"),children:[(0,_.tZ)(c.Menu.Item,{children:(0,s.t)("Copy permalink to clipboard")},U),(0,_.tZ)(c.Menu.Item,{children:(0,s.t)("Share chart by email")},L),(0,l.cr)(l.TT.EmbeddableCharts)?(0,_.tZ)(c.Menu.Item,{children:(0,_.tZ)(u.Z,{triggerNode:(0,_.tZ)("span",{children:(0,s.t)("Embed code")}),modalTitle:(0,s.t)("Embed code"),modalBody:(0,_.tZ)($,{formData:e,addDangerToast:M}),maxWidth:100*w.gridUnit+"px",destroyOnClose:!0,responsive:!0})},q):null]},"share_submenu"),(0,_.tZ)(c.Menu.Divider,{}),H?(0,_.BX)(_.HY,{children:[(0,_.tZ)(c.Menu.SubMenu,{title:(0,s.t)("Manage email report"),children:(0,_.tZ)(f.Z,{chart:Y,setShowReportSubMenu:X,showReportSubMenu:H,setIsDropdownVisible:K,isDropdownVisible:V,useTextMenu:!0})}),(0,_.tZ)(c.Menu.Divider,{})]}):(0,_.tZ)(c.Menu,{children:(0,_.tZ)(f.Z,{chart:Y,setShowReportSubMenu:X,setIsDropdownVisible:K,isDropdownVisible:V,useTextMenu:!0})}),(0,_.tZ)(c.Menu.Item,{children:(0,_.tZ)(u.Z,{triggerNode:(0,_.tZ)("span",{children:(0,s.t)("View query")}),modalTitle:(0,s.t)("View query"),modalBody:(0,_.tZ)(Z.Z,{latestQueryFormData:e}),draggable:!0,resizable:!0,responsive:!0})},B),W&&(0,_.tZ)(c.Menu.Item,{children:(0,s.t)("Run in SQL Lab")},A)]})),[M,t,Y,S,ie,V,e,H,n,w.gridUnit]),V,K]}},33313:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(44904);const r=["AND","AS","ASC","AVG","BY","CASE","COUNT","CREATE","CROSS","DATABASE","DEFAULT","DELETE","DESC","DISTINCT","DROP","ELSE","END","FOREIGN","FROM","GRANT","GROUP","HAVING","IF","INNER","INSERT","JOIN","KEY","LEFT","LIMIT","MAX","MIN","NATURAL","NOT","NULL","OFFSET","ON","OR","ORDER","OUTER","PRIMARY","REFERENCES","RIGHT","SELECT","SUM","TABLE","THEN","TYPE","UNION","UPDATE","WHEN","WHERE"].concat(["BIGINT","BINARY","BIT","CHAR","DATE","DECIMAL","DOUBLE","FLOAT","INT","INTEGER","MONEY","NUMBER","NUMERIC","REAL","SET","TEXT","TIMESTAMP","VARCHAR"]).map((e=>({meta:"sql",name:e,score:i.Yn,value:e})))},15856:(e,t,n)=>{n.d(t,{j:()=>s});var i=n(11965),r=n(13322),a=n(58593),o=n(35944);const s=({title:e,color:t})=>(0,o.tZ)(a.u,{title:e,placement:"top",children:(0,o.tZ)(r.Z.InfoCircleOutlined,{css:e=>i.iv`
        color: ${t||e.colors.text.label};
        margin-left: ${2*e.gridUnit}px;
        &.anticon {
          font-size: unset;
          .anticon {
            line-height: unset;
            vertical-align: unset;
          }
        }
      `})})},41814:(e,t,n)=>{n.d(t,{p:()=>de});var i=n(41609),r=n.n(i),a=n(67294),o=n(61988),s=n(11965),l=n(32103),d=n(51995),c=n(11064),u=n(16355),h=n(69363),p=n(28216),m=n(83862),g=n(16550),v=n(74069),b=n(35932),f=n(57001),y=n(12617),x=n(88889),Z=n(55786),C=n(99612),S=n(38703),T=n(27600),w=n(35944);const _=function({value:e}){return(0,w.tZ)("span",{children:e?T.Ly:T.gz})},M=function(){return(0,w.tZ)("span",{css:e=>s.iv`
        color: ${e.colors.grayscale.light1};
      `,children:T.Wq})};var $=n(42846),E=n(51115);const I=function({format:e=$.default.DATABASE_DATETIME,value:t}){return t?(0,w.tZ)("span",{children:(0,E.bt)(e).format(t)}):(0,w.tZ)(M,{})};var F=n(94301),D=n(52256),R=n(93197),N=n(87183),O=n(4715),k=n(13322),U=n(99075);const q=function(e){const{headerTitle:t,groupTitle:n,groupOptions:i,value:r,onChange:o}=e,l=(0,d.Fg)(),[c,u]=(0,a.useState)(!1);return(0,w.BX)("div",{css:s.iv`
        display: flex;
        align-items: center;
      `,children:[(0,w.tZ)(U.J,{trigger:"click",visible:c,content:(0,w.BX)("div",{children:[(0,w.tZ)("div",{css:s.iv`
                font-weight: ${l.typography.weights.bold};
                margin-bottom: ${l.gridUnit}px;
              `,children:n}),(0,w.tZ)(N.Y.Group,{value:r,onChange:e=>{o(e.target.value),u(!1)},children:(0,w.tZ)(O.T,{direction:"vertical",children:i.map((e=>(0,w.tZ)(N.Y,{value:e.value,children:e.label},e.value)))})})]}),placement:"bottomLeft",arrowPointAtCenter:!0,children:(0,w.tZ)(k.Z.SettingOutlined,{iconSize:"m",iconColor:l.colors.grayscale.light1,css:s.iv`
            margin-top: 3px; // we need exactly 3px to align the icon
            margin-right: ${l.gridUnit}px;
          `,onClick:()=>u(!0)})}),t]})};var L=n(42190),B=n(53579),A=n(60331),z=n(72813),j=n(89555);function P({filters:e,setFilters:t,totalCount:n,loading:i,onReload:r}){const l=(0,d.Fg)(),c=(0,a.useMemo)((()=>Object.assign({},...e.map((e=>({[(0,z.GA)(e.col)?e.col.label:e.col]:e}))))),[e]),u=(0,a.useCallback)((e=>{const n={...c};delete n[e],t([...Object.values(n)])}),[c,t]),h=(0,a.useMemo)((()=>Object.entries(c).map((([e,{val:t,formattedVal:n}])=>({colName:e,val:null!=n?n:t}))).sort(((e,t)=>e.colName.localeCompare(t.colName)))),[c]);return(0,w.BX)("div",{css:s.iv`
        display: flex;
        justify-content: space-between;
        padding: ${l.gridUnit/2}px 0;
        margin-bottom: ${2*l.gridUnit}px;
      `,children:[(0,w.tZ)("div",{css:s.iv`
          display: flex;
          flex-wrap: wrap;
          margin-bottom: -${4*l.gridUnit}px;
        `,children:h.map((({colName:e,val:t})=>(0,w.BX)(A.Z,{closable:!0,onClose:u.bind(null,e),css:s.iv`
              height: ${6*l.gridUnit}px;
              display: flex;
              align-items: center;
              padding: ${l.gridUnit/2}px ${2*l.gridUnit}px;
              margin-right: ${4*l.gridUnit}px;
              margin-bottom: ${4*l.gridUnit}px;
              line-height: 1.2;
            `,children:[(0,w.tZ)("span",{css:s.iv`
                margin-right: ${l.gridUnit}px;
              `,children:e}),(0,w.tZ)("strong",{children:t})]},e)))}),(0,w.BX)("div",{css:s.iv`
          display: flex;
          align-items: center;
          height: min-content;
        `,children:[(0,w.tZ)(j.Z,{loading:i&&!n,rowcount:n}),(0,w.tZ)(k.Z.ReloadOutlined,{iconColor:l.colors.grayscale.light1,iconSize:"l","aria-label":(0,o.t)("Reload"),role:"button",onClick:r})]})]})}var H=n(57557),X=n.n(H),V=n(65946);const K=50;var Y,W={name:"82a6rk",styles:"flex:1"};function G({children:e}){const{ref:t,height:n}=(0,C.NB)();return(0,w.tZ)("div",{ref:t,css:W,children:(0,a.cloneElement)(e,{height:n})})}function Q({formData:e,initialFilters:t}){var n;const i=(0,d.Fg)(),[r,l]=(0,a.useState)(0),c=(0,a.useRef)(r),[u,h]=(0,a.useState)(t),[m,g]=(0,a.useState)(!1),[v,b]=(0,a.useState)(""),[f,y]=(0,a.useState)(new Map),[C,T]=(0,a.useState)({}),$=(0,p.v9)((e=>e.common.conf.SAMPLES_ROW_LIMIT)),[E,N]=(0,a.useMemo)((()=>e.datasource.split("__")),[e.datasource]),{metadataBar:O,status:k}=(0,B.S)({datasetId:E}),U=(0,a.useMemo)((()=>{const e=f.get(r);return e?(c.current=r,e):f.get(c.current)}),[r,f]),A=(0,a.useMemo)((()=>(null==U?void 0:U.colNames.map(((e,t)=>({key:e,dataIndex:e,title:(null==U?void 0:U.colTypes[t])===x.Z.Temporal?(0,w.tZ)(q,{headerTitle:e,groupTitle:(0,o.t)("Formatting"),groupOptions:[{label:(0,o.t)("Original value"),value:Y.Original},{label:(0,o.t)("Formatted value"),value:Y.Formatted}],value:C[e]===Y.Original?Y.Original:Y.Formatted,onChange:t=>T((n=>({...n,[e]:t})))}):e,render:n=>!0===n||!1===n?(0,w.tZ)(_,{value:n}):null===n?(0,w.tZ)(M,{}):(null==U?void 0:U.colTypes[t])===x.Z.Temporal&&C[e]!==Y.Original&&("number"==typeof n||n instanceof Date)?(0,w.tZ)(I,{value:n}):String(n),width:150}))))||[]),[null==U?void 0:U.colNames,null==U?void 0:U.colTypes,C]),z=(0,a.useMemo)((()=>(null==U?void 0:U.data.map(((e,t)=>null==U?void 0:U.colNames.reduce(((t,n)=>({...t,[n]:e[n]})),{key:t}))))||[]),[null==U?void 0:U.colNames,null==U?void 0:U.data]),j=(0,a.useCallback)((()=>{b(""),y(new Map),l(0)}),[]);(0,a.useEffect)((()=>{b(""),y(new Map),l(0)}),[u]),(0,a.useEffect)((()=>{if(f.has(r)&&[...f.keys()].at(-1)!==r){const e=new Map(f);e.delete(r),y(e.set(r,f.get(r)))}}),[r,f]),(0,a.useEffect)((()=>{if(!v&&!m&&!f.has(r)){var t;g(!0);const n=null!=(t=function(e,t){if(!e)return;const n=(0,V.Z)(e),i=X()(n.extras,"having"),r=[...(0,Z.Z)(n.filters),...(0,Z.Z)(t).map((e=>X()(e,"formattedVal")))];return{granularity:n.granularity,time_range:n.time_range,filters:r,extras:i}}(e,u))?t:{},i=Math.ceil($/K);(0,D.getDatasourceSamples)(N,E,!1,n,K,r+1).then((e=>{y(new Map([...[...f.entries()].slice(1-i),[r,{total:e.total_count,data:e.data,colNames:(0,Z.Z)(e.colnames),colTypes:(0,Z.Z)(e.coltypes)}]])),b("")})).catch((e=>{b(`${e.name}: ${e.message}`)})).finally((()=>{g(!1)}))}}),[$,E,N,u,e,m,r,v,f]);const H=!v&&!f.size||k===L.ni.Loading,W=null==(n=e.allow_render_html)||n;let Q=null;if(v)Q=(0,w.tZ)("pre",{css:s.iv`
          margin-top: ${4*i.gridUnit}px;
        `,children:v});else if(H)Q=(0,w.tZ)(S.Z,{});else if(0===(null==U?void 0:U.total)){const e=(0,o.t)("No rows were returned for this dataset");Q=(0,w.tZ)(F.x3,{image:"document.svg",title:e})}else Q=(0,w.tZ)(G,{children:(0,w.tZ)(R.ZP,{data:z,columns:A,size:R.ex.Small,defaultPageSize:K,recordCount:null==U?void 0:U.total,usePagination:!0,loading:m,onChange:e=>l(e.current?e.current-1:0),resizable:!0,virtualize:!0,allowHTML:W})});return(0,w.BX)(w.HY,{children:[!H&&O,!H&&(0,w.tZ)(P,{filters:u,setFilters:h,totalCount:null==U?void 0:U.total,loading:m,onReload:j}),Q]})}!function(e){e[e.Original=0]="Original",e[e.Formatted=1]="Formatted"}(Y||(Y={}));const J=({canExplore:e,closeModal:t,exploreChart:n})=>{const i=(0,d.Fg)();return(0,w.BX)(w.HY,{children:[(0,w.tZ)(b.Z,{buttonStyle:"secondary",buttonSize:"small",onClick:n,disabled:!e,tooltip:e?void 0:(0,o.t)("You do not have sufficient permissions to edit the chart"),children:(0,o.t)("Edit chart")}),(0,w.tZ)(b.Z,{buttonStyle:"primary",buttonSize:"small",onClick:t,css:s.iv`
          margin-left: ${2*i.gridUnit}px;
        `,children:(0,o.t)("Close")})]})};function ee({chartId:e,formData:t,initialFilters:n,showModal:i,onHideModal:r}){const l=(0,d.Fg)(),c=(0,g.k6)(),u=(0,a.useContext)(f.DashboardPageIdContext),{slice_name:h}=(0,p.v9)((t=>t.sliceEntities.slices[e])),m=(0,p.v9)((e=>{var t;return(0,y.R)("can_explore","Superset",null==(t=e.user)?void 0:t.roles)})),b=(0,a.useMemo)((()=>`/explore/?dashboard_page_id=${u}&slice_id=${e}`),[e,u]),x=(0,a.useCallback)((()=>{c.push(b)}),[b,c]);return(0,w.tZ)(v.default,{show:i,onHide:null!=r?r:()=>null,css:s.iv`
        .ant-modal-body {
          display: flex;
          flex-direction: column;
        }
      `,title:(0,o.t)("Drill to detail: %s",h),footer:(0,w.tZ)(J,{exploreChart:x,canExplore:m}),responsive:!0,resizable:!0,resizableConfig:{minHeight:128*l.gridUnit,minWidth:128*l.gridUnit,defaultSize:{width:"auto",height:"75vh"}},draggable:!0,destroyOnClose:!0,maskClosable:!1,children:(0,w.tZ)(Q,{formData:t,initialFilters:n})})}var te=n(69175),ne=n(15856),ie=n(46219);const re=(0,o.t)("Drill to detail"),ae=(0,o.t)("Drill to detail by"),oe={DATABASE:(0,o.t)("Drill to detail is disabled for this database. Change the database settings to enable it."),NO_AGGREGATIONS:(0,o.t)("Drill to detail is disabled because this chart does not group data by dimension value."),NO_FILTERS:(0,o.t)("Right-click on a dimension value to drill to detail by that value."),NOT_SUPPORTED:(0,o.t)("Drill to detail by value is not yet supported for this chart type.")},se=({children:e,...t})=>(0,w.tZ)(m.Menu.Item,{disabled:!0,...t,children:(0,w.tZ)("div",{css:s.iv`
        white-space: normal;
        max-width: 160px;
      `,children:e})}),le=(0,d.iK)((({children:e,stripHTML:t=!1})=>{const n=t&&"string"==typeof e?(0,l.ZU)(e):e;return(0,w.tZ)("span",{children:n})}))`
  ${({theme:e})=>`\n     font-weight: ${e.typography.weights.bold};\n     color: ${e.colors.primary.base};\n   `}
`,de=({chartId:e,formData:t,filters:n=[],isContextMenu:i=!1,contextMenuY:l=0,onSelection:d=(()=>null),onClick:g=(()=>null),submenuIndex:v=0,showModal:b,setShowModal:f,drillToDetailMenuRef:y,...x})=>{const Z=(0,p.v9)((({datasources:e})=>{var n,i;return null==(n=e[t.datasource])||null==(i=n.database)?void 0:i.disable_drill_to_detail})),[C,S]=(0,a.useState)([]),T=(0,a.useCallback)(((e,t)=>{g(t),d(),S(e),f(!0)}),[g,d]),_=(0,a.useCallback)((()=>{f(!1)}),[]),M=(0,a.useMemo)((()=>{var e;return null==(e=(0,c.Z)().get(t.viz_type))?void 0:e.behaviors.find((e=>e===u.cg.DrillToDetail))}),[t.viz_type]),$=(0,a.useMemo)((()=>{const{metrics:e}=(0,h.Z)(t);return r()(e)}),[t]),E=(0,a.useMemo)((()=>(0,te.th)(l,n.length>1?n.length+1:n.length,v)),[l,n.length,v]);let I,F;Z?(I=oe.DATABASE,F=oe.DATABASE):M?$?(I=oe.NO_AGGREGATIONS,F=oe.NO_AGGREGATIONS):null!=n&&n.length||(F=oe.NO_FILTERS):F=oe.NOT_SUPPORTED;const D=I?(0,s.az)(se,{...x,key:"drill-to-detail-disabled"},re,(0,w.tZ)(ne.j,{title:I})):(0,s.az)(m.Menu.Item,{...x,key:"drill-to-detail",onClick:T.bind(null,[]),ref:y},re),R=F?(0,s.az)(se,{...x,key:"drill-to-detail-by-disabled"},ae,(0,w.tZ)(ne.j,{title:F})):(0,w.tZ)(m.Menu.SubMenu,{...x,popupOffset:[0,E],popupClassName:"chart-context-submenu",title:ae,children:(0,w.BX)("div",{children:[n.map(((e,t)=>(0,s.az)(ie.i,{...x,tooltipText:`${ae} ${e.formattedVal}`,key:`drill-detail-filter-${t}`,onClick:T.bind(null,[e])},`${ae} `,(0,w.tZ)(le,{stripHTML:!0,children:e.formattedVal})))),n.length>1&&(0,s.az)(m.Menu.Item,{...x,key:"drill-detail-filter-all",onClick:T.bind(null,n)},(0,w.BX)("div",{children:[`${ae} `,(0,w.tZ)(le,{stripHTML:!1,children:(0,o.t)("all")})]}))]})});return(0,w.BX)(w.HY,{children:[D,i&&R,(0,w.tZ)(ee,{chartId:e,formData:t,initialFilters:C,showModal:b,onHideModal:_})]})}},46219:(e,t,n)=>{n.d(t,{i:()=>l});var i=n(3297),r=n(11965),a=n(83862),o=n(58593),s=n(35944);const l=({tooltipText:e,children:t,...n})=>{const[l,d]=(0,i.Z)();return(0,s.tZ)(a.Menu.Item,{css:r.iv`
        display: flex;
      `,...n,children:(0,s.tZ)(o.u,{title:d?e:null,children:(0,s.tZ)("div",{ref:l,css:r.iv`
            max-width: 100%;
            ${i.B};
          `,children:t})})})}},69175:(e,t,n)=>{n.d(t,{$t:()=>i,th:()=>r});const i=(e,t,n=Number.MAX_SAFE_INTEGER,i=0)=>{const r=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),a=Math.min(32*t,n)+32+i;return r-e<a?r-a:e},r=(e,t,n=0,r=Number.MAX_SAFE_INTEGER,a=0)=>{const o=e+4+32*n+4;return i(o,t,r,a)-o}},13842:(e,t,n)=>{n.d(t,{dc:()=>o,lU:()=>a,zq:()=>s});var i=n(51995),r=n(35944);const a=()=>{const e=(0,i.Fg)();return(0,r.BX)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.tZ)("path",{d:"M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0Z",fill:e.colors.primary.base}),(0,r.tZ)("path",{d:"M7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z",fill:"white"})]})},o=()=>{const e=(0,i.Fg)();return(0,r.BX)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.tZ)("path",{d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z",fill:e.colors.grayscale.light1}),(0,r.tZ)("path",{d:"M14 10H4V8H14V10Z",fill:"white"})]})},s=()=>{const e=(0,i.Fg)();return(0,r.BX)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.tZ)("path",{d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z",fill:e.colors.grayscale.light2}),(0,r.tZ)("path",{d:"M16 2V16H2V2H16V2Z",fill:"white"})]})}},87253:(e,t,n)=>{n.d(t,{lU:()=>s.lU,zq:()=>s.zq,ZP:()=>o});var i=n(51995),r=n(35944);const a=i.iK.span`
  &,
  & svg {
    vertical-align: top;
  }
`;function o({checked:e,onChange:t,style:n,className:i}){return(0,r.tZ)(a,{style:n,onClick:()=>{t(!e)},role:"checkbox",tabIndex:0,"aria-checked":e,"aria-label":"Checkbox",className:i||"",children:e?(0,r.tZ)(s.lU,{}):(0,r.tZ)(s.zq,{})})}var s=n(13842)},88694:(e,t,n)=>{n.d(t,{$i:()=>p,Lt:()=>h});var i=n(67294),r=n(4715),a=n(51995),o=n(13322),s=n(35944);const l=a.iK.div`
  width: ${({theme:e})=>.75*e.gridUnit}px;
  height: ${({theme:e})=>.75*e.gridUnit}px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.grayscale.light1};

  font-weight: ${({theme:e})=>e.typography.weights.normal};
  display: inline-flex;
  position: relative;

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary.base};

    &::before,
    &::after {
      background-color: ${({theme:e})=>e.colors.primary.base};
    }
  }

  &::before,
  &::after {
    position: absolute;
    content: ' ';
    width: ${({theme:e})=>.75*e.gridUnit}px;
    height: ${({theme:e})=>.75*e.gridUnit}px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.grayscale.light1};
  }

  &::before {
    top: ${({theme:e})=>e.gridUnit}px;
  }

  &::after {
    bottom: ${({theme:e})=>e.gridUnit}px;
  }
`,d=a.iK.div`
  display: flex;
  align-items: center;
  padding: ${({theme:e})=>2*e.gridUnit}px;
  padding-left: ${({theme:e})=>e.gridUnit}px;
`;var c;!function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(c||(c={}));const u=(e=c.Vertical)=>e===c.Horizontal?(0,s.tZ)(o.Z.MoreHoriz,{iconSize:"xl"}):(0,s.tZ)(l,{}),h=({overlay:e,iconOrientation:t=c.Vertical,...n})=>(0,s.tZ)(r.Gj,{overlay:e,...n,children:(0,s.tZ)(d,{children:u(t)})}),p=e=>{const{children:t,onBlur:n,onKeyDown:a,...o}=e,l=(0,i.cloneElement)(t,{onBlur:n,onKeyDown:a});return(0,s.tZ)(r.Gj,{overlayStyle:e.overlayStyle,...o,children:l})}},60718:(e,t,n)=>{n.d(t,{m:()=>h});var i=n(31069),r=n(61988),a=n(44818),o=n(15926),s=n.n(o),l=n(65108);const d=new Map,c=(0,l.g)(i.Z.get,d,(({endpoint:e})=>e||"")),u=e=>({value:e.id,label:e.name,key:e.id}),h=async(e,t,n)=>{const i="name",o=s().encode({filters:[{col:i,opr:"ct",value:e},{col:"type",opr:"custom_tag",value:!0}],page:t,page_size:n,order_column:i,order_direction:"asc"});return c({endpoint:`/api/v1/tag/?q=${o}`}).then((e=>({data:e.json.result.map(u),totalCount:e.json.count}))).catch((async e=>{const t=(({error:e,message:t})=>{let n=t||e||(0,r.t)("An error has occurred");return"Forbidden"===t&&(n=(0,r.t)("You do not have permission to read tags")),n})(await(0,a.O$)(e));throw new Error(t)}))}},1510:(e,t,n)=>{n.d(t,{GW:()=>y,Rz:()=>f,X3:()=>g,on:()=>p,vk:()=>m,zi:()=>h});var i=n(5364),r=n(16355),a=n(93185),o=n(61988),s=n(70400),l=n(81255),d=n(80621),c=n(20292);const u=()=>{var e,t;const n=(0,c.Z)();return(null==n||null==(e=n.common)||null==(t=e.conf)?void 0:t.NATIVE_FILTER_DEFAULT_ROW_LIMIT)||1e3},h=({datasetId:e,dependencies:t={},groupby:n,defaultDataMask:i,controlValues:r,filterType:a,sortMetric:o,adhoc_filters:l,time_range:d,granularity_sqla:c,type:h,dashboardId:p,id:m})=>{var g;const v={};return e&&(v.datasource=`${e}__table`),n&&(v.groupby=[n]),o&&(v.sortMetric=o),{...r,...v,adhoc_filters:null!=l?l:[],extra_filters:[],extra_form_data:t,granularity_sqla:c,metrics:["count"],row_limit:u(),showSearch:!0,defaultValue:null==i||null==(g=i.filterState)?void 0:g.value,time_range:d,url_params:(0,s.Z)("regular"),inView:!0,viz_type:a,type:h,dashboardId:p,native_filter_id:m}};function p(e={},t={}){const n={};return i.Ci.forEach((i=>{const r=[...e[i]||[],...t[i]||[]];r.length&&(n[i]=r)})),i.Ay.forEach((i=>{const r=e[i];void 0!==r&&(n[i]=r);const a=t[i];void 0!==a&&(n[i]=a)})),n}function m(e,t){let n={};return t.forEach((t=>{var i,r;n=p(n,null!=(i=null==(r=e[t])?void 0:r.extraFormData)?i:{})})),n}function g(e){return!e.includes(r.cg.NativeFilter)||(0,a.cr)(a.TT.DashboardCrossFilters)&&e.includes(r.cg.InteractiveChart)}const v=(e,t)=>{var n;return(null==e||null==(n=e[t])?void 0:n.type)===l.gn},b=(e,t,n,i,r,a)=>{var o,s,d,c,u,h;a.has(n)||(a.add(n),(null==e||null==(o=e[n])?void 0:o.type)===l.dW&&t.includes(null==(s=e[n])||null==(d=s.meta)?void 0:d.chartId)&&i.forEach(r.add,r),0===(null==e||null==(c=e[n])||null==(u=c.children)?void 0:u.length)||v(e,n)&&r.has(n)||null==(h=e[n])||h.children.forEach((n=>b(e,t,n,v(e,n)?[...i,n]:i,r,a))))},f=(e,t)=>{const n=e[d._4].children[0],i=n!==d.PV,r=new Set,a=new Set;var o,s;return i?null==(o=e[n])||null==(s=o.children)||s.forEach((n=>b(e,t,n,[n],r,a))):Object.values(e).filter((e=>(null==e?void 0:e.type)===l.gn)).forEach((n=>b(e,t,n.id,[n.id],r,a))),r},y=e=>null==e?"":"string"==typeof e||"number"==typeof e?`${e}`:Array.isArray(e)?e.join(", "):"object"==typeof e?JSON.stringify(e):(0,o.t)("Unknown value")},91914:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(1510),r=n(99543);function a(e){return Object.entries(e).map((([e,t])=>({col:e,op:Array.isArray(t)?"IN":"==",val:t}))).filter((e=>null!==e.val))}var o=n(87915);const s={},l={};function d({chart:e,filters:t,nativeFilters:n,chartConfiguration:d,colorScheme:c,colorNamespace:u,sliceId:h,dataMask:p,extraControls:m,labelsColor:g,labelsColorMap:v,allSliceIds:b}){const f=l[h];if(s[h]===t&&(0,r.JB)(null==f?void 0:f.color_scheme,c,{ignoreUndefined:!0})&&(0,r.JB)(null==f?void 0:f.color_namespace,u,{ignoreUndefined:!0})&&(0,r.JB)(null==f?void 0:f.label_colors,g,{ignoreUndefined:!0})&&(0,r.JB)(null==f?void 0:f.shared_label_colors,v,{ignoreUndefined:!0})&&f&&(0,r.JB)(null==f?void 0:f.dataMask,p,{ignoreUndefined:!0})&&(0,r.JB)(null==f?void 0:f.extraControls,m,{ignoreUndefined:!0}))return f;let y={};const x=(0,o.g)({chartConfiguration:d,dataMask:p,nativeFilters:n,allSliceIds:b}),Z=Object.entries(x).filter((([,{scope:t}])=>t.includes(e.id))).map((([e])=>e));Z.length&&(y={extra_form_data:(0,i.vk)(p,Z)});const C={...e.form_data,label_colors:g,shared_label_colors:v,...c&&{color_scheme:c},extra_filters:a(t),...y,...m};return s[h]=t,l[h]={...C,dataMask:p,extraControls:m},C}},50909:(e,t,n)=>{n.d(t,{C4:()=>R,HS:()=>M,_q:()=>O,m:()=>_,qi:()=>w});var i=n(11965),r=n(23279),a=n.n(r),o=n(67294),s=n(51995),l=n(61988),d=n(51115),c=n(42846),u=n(88889),h=n(32103),p=n(4715),m=n(9875),g=n(27600),v=n(87183),b=n(13322),f=n(35932),y=n(99075),x=n(54076),Z=n(43617),C=n(61587),S=n(35944);const T=(0,s.iK)("span")`
  color: ${({theme:e})=>e.colors.grayscale.light1};
`,w=(0,s.iK)(f.Z)`
  font-size: ${({theme:e})=>e.typography.sizes.s}px;

  // needed to override button's first-of-type margin: 0
  && {
    margin: 0 ${({theme:e})=>2*e.gridUnit}px;
  }

  i {
    padding: 0 ${({theme:e})=>e.gridUnit}px;
  }
`,_=({data:e,columns:t})=>{const n=(0,s.Fg)();return(0,S.tZ)(Z.Z,{text:e&&t?(0,x.Mv)(e,t):"",wrapped:!1,copyNode:(0,S.tZ)(b.Z.CopyOutlined,{iconColor:n.colors.grayscale.base,iconSize:"l","aria-label":(0,l.t)("Copy"),role:"button",css:i.iv`
            &.anticon > * {
              line-height: 0;
            }
          `})})},M=({onChangeHandler:e,shouldFocus:t=!1})=>{const n=(0,o.useRef)(null);(0,o.useEffect)((()=>{n.current&&t&&n.current.focus()}),[]);const r=(0,s.Fg)(),d=a()(e,g.M$);return(0,S.tZ)(m.II,{prefix:(0,S.tZ)(b.Z.Search,{iconColor:r.colors.grayscale.base}),placeholder:(0,l.t)("Search"),onChange:e=>{const t=e.target.value;d(t)},css:i.iv`
        width: 200px;
        margin-right: ${2*r.gridUnit}px;
      `,ref:n})};var $;!function(e){e.Formatted="formatted",e.Original="original"}($||($={}));const E=({onChange:e,value:t})=>(0,S.tZ)(v.Y.Group,{value:t,onChange:e,children:(0,S.BX)(p.T,{direction:"vertical",children:[(0,S.tZ)(v.Y,{value:$.Formatted,children:(0,l.t)("Formatted date")}),(0,S.tZ)(v.Y,{value:$.Original,children:(0,l.t)("Original value")})]})}),I=s.iK.div`
  display: flex;
  flex-direction: column;

  padding: ${({theme:e})=>4*e.gridUnit+"px"};
`,F=s.iK.span`
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  text-transform: uppercase;
`,D=({columnName:e,onTimeColumnChange:t,datasourceId:n,isOriginalTimeColumn:r})=>{const a=(0,s.Fg)(),d=n=>{t(e,n.target.value)},c=(0,o.useMemo)((()=>n?(0,S.BX)(I,{onClick:e=>e.stopPropagation(),children:[(0,S.tZ)(i.xB,{styles:i.iv`
              .column-formatting-popover .ant-popover-inner-content {
                padding: 0;
              }
            `}),(0,S.tZ)(F,{children:(0,l.t)("Column Formatting")}),(0,S.tZ)(E,{onChange:d,value:r?$.Original:$.Formatted})]}):null),[n,r]);return n?(0,S.BX)("span",{children:[(0,S.tZ)(y.J,{overlayClassName:"column-formatting-popover",trigger:"click",content:c,placement:"bottomLeft",arrowPointAtCenter:!0,children:(0,S.tZ)(b.Z.SettingOutlined,{iconSize:"m",iconColor:a.colors.grayscale.light1,css:(0,i.iv)({marginRight:`${a.gridUnit}px`},"",""),onClick:e=>e.stopPropagation()})}),e]}):(0,S.tZ)("span",{children:e})},R=(e,t)=>{const n=(0,o.useMemo)((()=>{var e;return null!=(e=null==t?void 0:t.map((e=>Object.values(e).map((e=>e?e.toString().toLowerCase():(0,l.t)("N/A"))))))?e:[]}),[t]);return(0,o.useMemo)((()=>null!=t&&t.length?t.filter(((t,i)=>n[i].some((t=>null==t?void 0:t.includes(e.toLowerCase()))))):[]),[t,e,n])},N=(0,d.bt)(c.default.DATABASE_DATETIME),O=(e,t,n,i,r,a,s)=>{const[l,d]=(0,o.useState)((0,C.W)(i)),c=(e,t)=>{if(i)if(t!==$.Original||l.includes(e)){if(t===$.Formatted&&l.includes(e)){const t=(0,C.W)(i);t.splice(t.indexOf(e),1),(0,C.e)(i,t),d(t)}}else{const t=(0,C.W)(i);t.push(e),(0,C.e)(i,t),d(t)}};return(0,o.useEffect)((()=>{r&&d((0,C.W)(i))}),[i,r]),(0,o.useMemo)((()=>e&&null!=n&&n.length?e.filter((e=>Object.keys(n[0]).includes(e))).map(((e,r)=>{const o=null==t?void 0:t[r],d=n[0][e],p=o===u.Z.Temporal?l.indexOf(e):-1,m=l.includes(e);return{id:e||r,accessor:t=>t[e],Header:o===u.Z.Temporal&&"string"!=typeof d?(0,S.tZ)(D,{columnName:e,datasourceId:i,onTimeColumnChange:c,isOriginalTimeColumn:m}):e,Cell:({value:e})=>!0===e?g.Ly:!1===e?g.gz:null===e?(0,S.tZ)(T,{children:g.Wq}):o===u.Z.Temporal&&-1===p&&"number"==typeof e?N(e):"string"==typeof e&&s?(0,h.Ul)(e):String(e),...null==a?void 0:a[e]}})):[]),[e,n,t,i,a,l])}},61587:(e,t,n)=>{n.d(t,{W:()=>a,e:()=>o});var i=n(55786),r=n(61337);const a=e=>{const t=(0,r.rV)(r.dR.ExploreDataTableOriginalFormattedTimeColumns,{});return void 0===e?[]:(0,i.Z)(t[e])},o=(e,t)=>{const n=(0,r.rV)(r.dR.ExploreDataTableOriginalFormattedTimeColumns,{});(0,r.LS)(r.dR.ExploreDataTableOriginalFormattedTimeColumns,{...n,[e]:t})}},66124:(e,t,n)=>{n.d(t,{X:()=>m,c:()=>g});var i=n(4788),r=n.n(i),a=n(67294),o=n(51995),s=n(88889),l=n(11965),d=n(50909),c=n(54076),u=n(61587),h=n(89555),p=n(35944);const m=o.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: ${2*e.gridUnit}px;\n\n    span {\n      flex-shrink: 0;\n    }\n  `}
`,g=({data:e,datasourceId:t,onInputChange:n,columnNames:i,columnTypes:o,rowcount:g,isLoading:v,canDownload:b})=>{const f=(0,u.W)(t),y=r()(i,o).filter((([e,t])=>t===s.Z.Temporal&&e&&!f.includes(e))).map((([e])=>e)),x=(0,a.useMemo)((()=>(0,c.cD)(e,y)),[e,y]);return(0,p.BX)(m,{children:[(0,p.tZ)(d.HS,{onChangeHandler:n,shouldFocus:!0}),(0,p.BX)("div",{css:l.iv`
          display: flex;
          align-items: center;
        `,children:[(0,p.tZ)(h.Z,{rowcount:g,loading:v}),b&&(0,p.tZ)(d.m,{data:x,columns:i})]})]})}},5462:(e,t,n)=>{n.d(t,{T:()=>d});var i=n(67294),r=n(61988),a=n(76962),o=n(50909),s=n(66124),l=n(35944);const d=({data:e,colnames:t,coltypes:n,rowcount:d,datasourceId:c,dataSize:u=50,isVisible:h,canDownload:p})=>{const[m,g]=(0,i.useState)(""),v=(0,o._q)(t,n,e,c,h,{},!0),b=(0,o.C4)(m,e);return(0,l.BX)(l.HY,{children:[(0,l.tZ)(s.c,{data:b,columnNames:t,columnTypes:n,rowcount:d,datasourceId:c,onInputChange:e=>g(e),isLoading:!1,canDownload:p}),(0,l.tZ)(a.Z,{columns:v,data:b,pageSize:u,noDataText:(0,r.t)("No results"),emptyWrapperType:a.u.Small,className:"table-condensed",isPaginationSticky:!0,showRowCount:!1,small:!0})]})}},21496:(e,t,n)=>{n.d(t,{c9:()=>F,Tg:()=>T});var i,r=n(67294),a=n(51995),o=n(93185),s=n(61988),l=n(13322),d=n(71262),c=n(61337);!function(e){e.Results="results",e.Samples="samples"}(i||(i={}));var u=n(11064),h=n(55786),p=n(44818),m=n(38703),g=n(94301),v=n(52256),b=n(5462),f=n(66124),y=n(35944);const x=a.iK.pre`
  margin-top: ${({theme:e})=>4*e.gridUnit+"px"};
`,Z=new WeakMap,C=({isRequest:e,queryFormData:t,queryForce:n,ownState:i,errorMessage:a,actions:o,isVisible:l,dataSize:d=50,canDownload:c})=>{var C;const S=(0,u.Z)().get((null==t?void 0:t.viz_type)||(null==t?void 0:t.vizType)),[T,w]=(0,r.useState)([]),[_,M]=(0,r.useState)(!0),[$,E]=(0,r.useState)(""),I=null!=(C=null==S?void 0:S.queryObjectCount)?C:1;if((0,r.useEffect)((()=>{a||(e&&Z.has(t)&&(w((0,h.Z)(Z.get(t))),E(""),n&&o&&o.setForceQuery(!1),M(!1)),e&&!Z.has(t)&&(M(!0),(0,v.getChartDataRequest)({formData:t,force:n,resultFormat:"json",resultType:"results",ownState:i}).then((({json:e})=>{w((0,h.Z)(e.result)),E(""),Z.set(t,e.result),n&&o&&o.setForceQuery(!1)})).catch((e=>{(0,p.O$)(e).then((({error:e,message:t})=>{E(e||t||(0,s.t)("Sorry, an error occurred"))}))})).finally((()=>{M(!1)}))))}),[t,e]),(0,r.useEffect)((()=>{a&&M(!1)}),[a]),_)return Array(I).fill((0,y.tZ)(m.Z,{}));if(a){const e=(0,s.t)("Run a query to display results");return Array(I).fill((0,y.tZ)(g.x3,{image:"document.svg",title:e}))}if($){const e=(0,y.BX)(y.HY,{children:[(0,y.tZ)(f.c,{data:[],columnNames:[],columnTypes:[],rowcount:0,datasourceId:t.datasource,onInputChange:()=>{},isLoading:!1,canDownload:c}),(0,y.tZ)(x,{children:$})]});return Array(I).fill(e)}if(0===T.length){const e=(0,s.t)("No results were returned for this query");return Array(I).fill((0,y.tZ)(g.x3,{image:"document.svg",title:e}))}return T.slice(0,I).map(((e,n)=>(0,y.tZ)(b.T,{data:e.data,colnames:e.colnames,coltypes:e.coltypes,rowcount:e.rowcount,dataSize:d,datasourceId:t.datasource,isVisible:l,canDownload:c},n)))},S=a.iK.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .ant-tabs {
    height: 100%;
  }

  .ant-tabs-content {
    height: 100%;
  }

  .ant-tabs-tabpane {
    display: flex;
    flex-direction: column;
  }

  .table-condensed {
    overflow: auto;
  }
`,T=({isRequest:e,queryFormData:t,queryForce:n,ownState:r,errorMessage:a,actions:o,isVisible:l,dataSize:c=50,canDownload:u})=>{const h=C({errorMessage:a,queryFormData:t,queryForce:n,ownState:r,isRequest:e,actions:o,dataSize:c,isVisible:l,canDownload:u});if(1===h.length)return(0,y.tZ)(S,{children:h[0]});const p=h.map(((e,t)=>0===t?(0,y.tZ)(d.ZP.TabPane,{tab:(0,s.t)("Results"),children:e},i.Results):(0,y.tZ)(d.ZP.TabPane,{tab:(0,s.t)("Results %s",t+1),children:e},`${i.Results} ${t+1}`)));return(0,y.tZ)(S,{children:(0,y.tZ)(d.ZP,{fullWidth:!1,children:p})})};var w=n(76962),_=n(50909);const M=a.iK.pre`
  margin-top: ${({theme:e})=>4*e.gridUnit+"px"};
`,$=new WeakSet,E=({isRequest:e,datasource:t,queryForce:n,actions:i,dataSize:a=50,isVisible:o,canDownload:l})=>{const[d,c]=(0,r.useState)(""),[u,p]=(0,r.useState)([]),[b,x]=(0,r.useState)([]),[Z,C]=(0,r.useState)([]),[S,T]=(0,r.useState)(!1),[E,I]=(0,r.useState)(0),[F,D]=(0,r.useState)(""),R=(0,r.useMemo)((()=>`${t.id}__${t.type}`),[t]);(0,r.useEffect)((()=>{e&&n&&$.delete(t),e&&!$.has(t)&&(T(!0),(0,v.getDatasourceSamples)(t.type,t.id,n,{}).then((e=>{p((0,h.Z)(e.data)),x((0,h.Z)(e.colnames)),C((0,h.Z)(e.coltypes)),I(e.rowcount),D(""),$.add(t),n&&i&&i.setForceQuery(!1)})).catch((e=>{p([]),x([]),C([]),D(`${e.name}: ${e.message}`)})).finally((()=>{T(!1)})))}),[t,e,n]);const N=(0,_._q)(b,Z,u,R,o,{},!0),O=(0,_.C4)(d,u);if(S)return(0,y.tZ)(m.Z,{});if(F)return(0,y.BX)(y.HY,{children:[(0,y.tZ)(f.c,{data:O,columnNames:b,columnTypes:Z,rowcount:E,datasourceId:R,onInputChange:e=>c(e),isLoading:S,canDownload:l}),(0,y.tZ)(M,{children:F})]});if(0===u.length){const e=(0,s.t)("No samples were returned for this dataset");return(0,y.tZ)(g.x3,{image:"document.svg",title:e})}return(0,y.BX)(y.HY,{children:[(0,y.tZ)(f.c,{data:O,columnNames:b,columnTypes:Z,rowcount:E,datasourceId:R,onInputChange:e=>c(e),isLoading:S,canDownload:l}),(0,y.tZ)(w.Z,{columns:N,data:O,pageSize:a,noDataText:(0,s.t)("No results"),emptyWrapperType:w.u.Small,className:"table-condensed",isPaginationSticky:!0,showRowCount:!1,small:!0})]})},I=a.iK.div`
  ${({theme:e})=>`\n    position: relative;\n    background-color: ${e.colors.grayscale.light5};\n    z-index: 5;\n    overflow: hidden;\n\n    .ant-tabs {\n      height: 100%;\n    }\n\n    .ant-tabs-content-holder {\n      height: 100%;\n    }\n\n    .ant-tabs-content {\n      height: 100%;\n    }\n\n    .ant-tabs-tabpane {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n\n      .table-condensed {\n        height: 100%;\n        overflow: auto;\n        margin-bottom: ${4*e.gridUnit}px;\n\n        .table {\n          margin-bottom: ${2*e.gridUnit}px;\n        }\n      }\n\n      .pagination-container > ul[role='navigation'] {\n        margin-top: 0;\n      }\n    }\n  `}
`,F=({queryFormData:e,datasource:t,queryForce:n,onCollapseChange:u,chartStatus:h,ownState:p,errorMessage:m,actions:g,canDownload:v})=>{const b=(0,a.Fg)(),[x,Z]=(0,r.useState)(i.Results),[S,T]=(0,r.useState)({results:!1,samples:!1}),[w,_]=(0,r.useState)(!(0,o.cr)(o.TT.DatapanelClosedByDefault)&&(0,c.rV)(c.dR.IsDatapanelOpen,!1));(0,r.useEffect)((()=>{(0,o.cr)(o.TT.DatapanelClosedByDefault)||(0,c.LS)(c.dR.IsDatapanelOpen,w)}),[w]),(0,r.useEffect)((()=>{w||T({results:!1,samples:!1}),w&&x.startsWith(i.Results)&&h&&"loading"!==h&&T({results:!0,samples:!1}),w&&x===i.Samples&&T({results:!1,samples:!0})}),[w,x,h]);const M=(0,r.useCallback)((e=>{u(e),_(e)}),[u]),$=(0,r.useCallback)(((e,t)=>{w?e===x&&(t.preventDefault(),M(!1)):M(!0),Z(e)}),[x,M,w]),F=(0,r.useMemo)((()=>{const e=w?(0,y.tZ)(l.Z.CaretUp,{iconColor:b.colors.grayscale.base,"aria-label":(0,s.t)("Collapse data panel")}):(0,y.tZ)(l.Z.CaretDown,{iconColor:b.colors.grayscale.base,"aria-label":(0,s.t)("Expand data panel")});return(0,y.tZ)(f.X,{children:w?(0,y.tZ)("span",{role:"button",tabIndex:0,onClick:()=>M(!1),children:e}):(0,y.tZ)("span",{role:"button",tabIndex:0,onClick:()=>M(!0),children:e})})}),[M,w,b.colors.grayscale.base]),D=C({errorMessage:m,queryFormData:e,queryForce:n,ownState:p,isRequest:S.results,actions:g,isVisible:i.Results===x,canDownload:v}).map(((e,t)=>0===t?(0,y.tZ)(d.ZP.TabPane,{tab:(0,s.t)("Results"),children:e},i.Results):t>0?(0,y.tZ)(d.ZP.TabPane,{tab:(0,s.t)("Results %s",t+1),children:e},`${i.Results} ${t+1}`):null));return(0,y.tZ)(I,{children:(0,y.BX)(d.ZP,{fullWidth:!1,tabBarExtraContent:F,activeKey:w?x:"",onTabClick:$,children:[D,(0,y.tZ)(d.ZP.TabPane,{tab:(0,s.t)("Samples"),children:(0,y.tZ)(E,{datasource:t,queryForce:n,isRequest:S.samples,actions:g,isVisible:i.Samples===x,canDownload:v})},i.Samples)]})})}},42753:(e,t,n)=>{var i;n.d(t,{g:()=>i}),function(e){e.Column="column",e.ColumnOption="columnOption",e.AdhocColumnOption="adhocColumn",e.Metric="metric",e.MetricOption="metricOption",e.AdhocMetricOption="adhocMetric",e.FilterOption="filterOption"}(i||(i={}))},63325:(e,t,n)=>{n.d(t,{b:()=>i});const i=n(51995).iK.div`
  .edit-popover-resize {
    transform: scaleX(-1);
    float: right;
    margin-top: ${({theme:e})=>4*e.gridUnit}px;
    margin-right: ${({theme:e})=>-2*e.gridUnit}px;
    cursor: nwse-resize;
  }
  .filter-sql-editor {
    border: ${({theme:e})=>e.colors.grayscale.light2} solid thin;
  }
`},89555:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(61988),r=n(67190),a=n(37921),o=n(58593),s=n(35944);const l=(0,i.t)("The row limit set for the chart was reached. The chart may show partial data.");function d(e){const{rowcount:t=0,limit:n=null,loading:d}=e,c=n&&t>=n,u=c||0===t&&!d?"danger":"default",h=(0,r.JB)()(t),p=(0,s.tZ)(a.Z,{type:u,children:d?(0,i.t)("Loading..."):(0,s.tZ)("span",{children:(0,i.tn)("%s row","%s rows",t,h)})});return c?(0,s.tZ)(o.u,{id:"tt-rowcount-tooltip",title:(0,s.tZ)("span",{children:l}),children:p}):p}},76787:(e,t,n)=>{n.d(t,{Z:()=>_});var i=n(89734),r=n.n(i),a=n(23560),o=n.n(a),s=n(67294),l=n(51995),d=n(61988),c=n(85671),u=n(11965),h=n(64749),p=n(82342),m=n(58593),g=n(13322),v=n(47767),b=n(85633),f=n(35944);function y(e){const{id:t,label:n,colors:i}=e,[r,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),l=(0,s.useRef)(null),d=()=>i.map(((e,n)=>(0,f.tZ)("span",{css:t=>u.iv`
          padding-left: ${t.gridUnit/2}px;
          :before {
            content: '';
            display: inline-block;
            background-color: ${e};
            border: 1px solid ${"white"===e?"black":e};
            width: 9px;
            height: 10px;
          }
        `},`${t}-${n}`)));return(0,f.tZ)(m.u,{"data-testid":"tooltip",overlayClassName:"color-scheme-tooltip",title:()=>(0,f.BX)(f.HY,{children:[(0,f.tZ)("span",{children:n}),(0,f.tZ)("div",{children:d()})]}),visible:r,children:(0,f.BX)("span",{className:"color-scheme-option",onMouseEnter:()=>{const e=o.current,t=l.current;e&&t&&(e.scrollWidth>e.offsetWidth||e.scrollHeight>e.offsetHeight||t.scrollWidth>t.offsetWidth||t.scrollHeight>t.offsetHeight)&&a(!0)},onMouseLeave:()=>{a(!1)},css:u.iv`
          display: flex;
          align-items: center;
          justify-content: flex-start;
        `,children:[(0,f.tZ)("span",{className:"color-scheme-label",ref:o,css:e=>u.iv`
            min-width: 125px;
            padding-right: ${2*e.gridUnit}px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          `,children:n}),(0,f.tZ)("span",{ref:l,css:e=>u.iv`
            flex: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            padding-right: ${e.gridUnit}px;
          `,children:d()})]})},t)}const{Option:x,OptGroup:Z}=h.default,C=(0,l.iK)(g.Z.AlertSolid)`
  color: ${({theme:e})=>e.colors.alert.base};
`,S=(0,d.t)("This color scheme is being overridden by custom label colors.\n    Check the JSON metadata in the Advanced settings"),T=(0,d.t)("The color scheme is determined by the related dashboard.\n        Edit the color scheme in the dashboard properties."),w=({label:e,hasCustomLabelsColor:t,dashboardId:n})=>{if(t||n){const n=t?S:T;return(0,f.BX)(f.HY,{children:[e," ",(0,f.tZ)(m.u,{title:n,children:(0,f.tZ)(C,{iconSize:"s"})})]})}return(0,f.tZ)(f.HY,{children:e})},_=({hasCustomLabelsColor:e=!1,dashboardId:t,label:n=(0,d.t)("Color scheme"),onChange:i=(()=>{}),value:a,clearable:h=!1,defaultScheme:g,choices:C=[],schemes:S={},isLinear:_,...M})=>{const $=(0,l.Fg)(),E=(0,s.useMemo)((()=>{if(t)return"dashboard";let e=a||g;if("SUPERSET_DEFAULT"===e){var n;const t=o()(S)?S():S;e=null==t||null==(n=t.SUPERSET_DEFAULT)?void 0:n.id}return e}),[t,g,S,a]),I=(0,s.useMemo)((()=>{if(t)return[(0,f.tZ)(x,{value:"dashboard",label:(0,d.t)("dashboard"),children:(0,f.tZ)(m.u,{title:T,children:(0,d.t)("Dashboard scheme")})},"dashboard")];const e=o()(S)?S():S,n=o()(C)?C():C,i=[],a=n.filter((e=>{const t=e[0],n="SUPERSET_DEFAULT"!==t&&!i.includes(t);return i.push(t),n})).reduce(((t,[n])=>{var i,r;const a=e[n];let o=[];a&&(o=_?a.getColors(10):a.colors);const s={customLabel:(0,f.tZ)(y,{id:a.id,label:a.label,colors:o}),label:(null==e||null==(i=e[n])?void 0:i.label)||n,value:n};return t[null!=(r=a.group)?r:c.I.Other].options.push(s),t}),{[c.I.Custom]:{title:c.I.Custom,label:(0,d.t)("Custom color palettes"),options:[]},[c.I.Featured]:{title:c.I.Featured,label:(0,d.t)("Featured color palettes"),options:[]},[c.I.Other]:{title:c.I.Other,label:(0,d.t)("Other color palettes"),options:[]}}),s=Object.values(a).filter((e=>e.options.length>0)).map((e=>({...e,options:r()(e.options,(e=>e.label))})));return 1===s.length&&s[0].title===c.I.Other?s[0].options.map(((e,t)=>(0,f.tZ)(x,{value:e.value,label:e.label,children:e.customLabel},t))):s.map(((e,t)=>(0,f.tZ)(Z,{label:e.label,children:e.options.map(((e,n)=>(0,f.tZ)(x,{value:e.value,label:e.label,children:e.customLabel},`${t}-${n}`)))},t)))}),[C,t,_,S]);return(0,f.BX)(f.HY,{children:[(0,f.tZ)(p.Z,{...M,label:(0,f.tZ)(w,{label:n,hasCustomLabelsColor:e,dashboardId:t})}),(0,f.tZ)(v.Qr,{css:u.iv`
          width: 100%;
          & .ant-select-item.ant-select-item-group {
            padding-left: ${$.gridUnit}px;
            font-size: ${$.typography.sizes.m}px;
          }
          & .ant-select-item-option-grouped {
            padding-left: ${3*$.gridUnit}px;
          }
        `,"aria-label":(0,d.t)("Select color scheme"),allowClear:h,disabled:!!t,onChange:e=>i(e),placeholder:(0,d.t)("Select scheme"),value:E,getPopupContainer:e=>e.parentNode,showSearch:!0,filterOption:(e,t)=>(0,b.Dz)(e,t,["label","value"],!0),children:I})]})}},96055:(e,t,n)=>{n.d(t,{Z:()=>G});var i=n(67294),r=n(45697),a=n.n(r),o=n(35932),s=n(51995),l=n(61988),d=n(57368),c=n(71262),u=n(17536),h=n(28543),p=n(4591),m=n(4715),g=n(37731),v=n(31069),b=n(93185),f=n(69856),y=n(40266),x=n(58593),Z=n(9875),C=n(54076),S=n(45211),T=n(23279),w=n.n(T),_=n(55786),M=n(15926),$=n.n(M);const E={parsedAdvancedDataType:"",advancedDataTypeOperatorList:[],errorMessage:""};var I=n(7848),F=n(61314),D=n(68424),R=n(35944);const N=(0,s.iK)(Z.II)`
  margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
`,O=((0,s.iK)(p.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,(0,s.iK)(m.Ph)`
  .ant-select-selector::after {
    content: ${({labelText:e})=>e||"\\A0"};
    display: inline-block;
    white-space: nowrap;
    color: ${({theme:e})=>e.colors.grayscale.light1};
    width: max-content;
  }
`),k=e=>{var t,n;const{onSubjectChange:r,onOperatorChange:a,isOperatorRelevant:o,onComparatorChange:s,onDatePickerChange:d}=(e=>{const t=(0,F.Ct)(),n=(t,n)=>{var i;const r=null==(i=e.datasource.columns)?void 0:i.find((e=>e.column_name===n)),a=!!r&&("BOOL"===r.type||"BOOLEAN"===r.type),o=!!r&&("INT"===r.type||"INTEGER"===r.type),s=!!r&&!!r.expression;if(t&&t===f.d.LatestPartition){const{partitionColumn:t}=e;return t&&n&&n===t}return(!t||t!==f.d.TemporalRange)&&(t===f.d.IsTrue||t===f.d.IsFalse?a||o||s:a?t===f.d.IsNull||t===f.d.IsNotNull:e.adhocFilter.clause!==D.N.Having||-1!==f.Ak.indexOf(t))};return{onSubjectChange:i=>{const r=e.options.find((e=>"column_name"in e&&e.column_name===i||"optionName"in e&&e.optionName===i));let a,o="";r&&"column_name"in r?(o=r.column_name,a=D.N.Where):r&&"saved_metric_name"in r?(o=r.saved_metric_name,a=D.N.Having):null!=r&&r.label&&(o=r.label,a=D.N.Having);let{operator:s,operatorId:l,comparator:d}=e.adhocFilter;s=s&&l&&n(l,o)?f.LT[l].operation:null,(0,g.Z)(s)||(s=f.d.In,l=f.d.In,d=void 0),(0,S.x)(i,e.datasource)&&(o=i,s=f.d.TemporalRange,l=f.d.TemporalRange,d=t),e.onChange(e.adhocFilter.duplicateWith({subject:o,clause:a,operator:s,expressionType:D.p.Simple,operatorId:l,comparator:d}))},onOperatorChange:t=>{const n=e.adhocFilter.comparator;let i;i=f.qK.has(t)?Array.isArray(n)?n:[n].filter((e=>e)):Array.isArray(n)?n[0]:n,t!==f.d.IsTrue&&t!==f.d.IsFalse||(i=f.d.IsTrue===t),t&&f.qB.has(t)?e.onChange(e.adhocFilter.duplicateWith({subject:e.adhocFilter.subject,clause:D.N.Where,operatorId:t,operator:f.LT[t].operation,expressionType:D.p.Sql,datasource:e.datasource})):e.onChange(e.adhocFilter.duplicateWith({operatorId:t,operator:f.LT[t].operation,comparator:i,expressionType:D.p.Simple}))},onComparatorChange:t=>{e.onChange(e.adhocFilter.duplicateWith({comparator:t,expressionType:D.p.Simple}))},isOperatorRelevant:n,clearOperator:()=>{e.onChange(e.adhocFilter.duplicateWith({operatorId:void 0,operator:void 0}))},onDatePickerChange:(t,n)=>{e.onChange(e.adhocFilter.duplicateWith({subject:t,operator:f.d.TemporalRange,comparator:n,expressionType:D.p.Simple}))}}})(e),[c,u]=(0,i.useState)([]),[h,p]=(0,i.useState)(e.adhocFilter.comparator),[Z,T]=(0,i.useState)(!1),{advancedDataTypesState:M,subjectAdvancedDataType:k,fetchAdvancedDataTypeValueCallback:U,fetchSubjectAdvancedDataType:q}=(e=>{const[t,n]=(0,i.useState)(E),[r,a]=(0,i.useState)(),o=(0,i.useCallback)(((t,i,r)=>{const a=(0,_.Z)(t);r?w()((()=>{const t=`/api/v1/advanced_data_type/convert?q=${$().encode({type:r,values:a})}`;v.Z.get({endpoint:t}).then((({json:t})=>{n({parsedAdvancedDataType:t.result.display_value,advancedDataTypeOperatorList:t.result.valid_filter_operators,errorMessage:t.result.error_message}),e(!t.result.error_message)})).catch((()=>{n({parsedAdvancedDataType:"",advancedDataTypeOperatorList:i.advancedDataTypeOperatorList,errorMessage:(0,l.t)("Failed to retrieve advanced type")}),e(!1)}))}),600)():n(E)}),[e]);return{advancedDataTypesState:t,subjectAdvancedDataType:r,setAdvancedDataTypesState:n,fetchAdvancedDataTypeValueCallback:o,fetchSubjectAdvancedDataType:e=>{const t=e.options.find((t=>"column_name"in t&&t.column_name===e.adhocFilter.subject||"optionName"in t&&t.optionName===e.adhocFilter.subject));t&&"advanced_data_type"in t?a(t.advanced_data_type):e.validHandler(!0)}}})(e.validHandler),L=(e,t)=>k?o(e,t)&&M.advancedDataTypeOperatorList.includes(e):o(e,t),B=()=>{const e=(()=>{var e;const t=Array.isArray(h)?h.filter((e=>c.includes(e))).length:0;return null!=(e=(null==c?void 0:c.length)-t)?e:0})(),t=(0,l.t)("%s option(s)",e);return e?t:""};let A=e.options;const{subject:z,operator:j,operatorId:P}=e.adhocFilter,H={ariaLabel:(0,l.t)("Select subject"),value:null!=z?z:void 0,onChange:e=>{p(void 0),r(e)},notFoundContent:(0,l.t)("No such column found. To filter on a metric, try the Custom SQL tab."),autoFocus:!z,placeholder:""};H.placeholder=e.adhocFilter.clause===D.N.Where?(0,l.t)("%s column(s)",A.length):(0,l.t)("To filter on a metric, use Custom SQL tab."),A=e.options.filter((e=>"column_name"in e&&e.column_name));const X={placeholder:(0,l.t)("%s operator(s)",(null!=(t=e.operators)?t:f.GS).filter((e=>L(e,z))).length),value:P,onChange:a,autoFocus:!!H.value&&!j,ariaLabel:(0,l.t)("Select operator")},V=!!H.value&&!!X.value,K={allowClear:!0,allowNewOptions:!0,ariaLabel:(0,l.t)("Comparator option"),mode:f.qK.has(P)?"multiple":"single",loading:Z,value:h,onChange:s,notFoundContent:(0,l.t)("Type a value here"),disabled:f.yi.includes(P),placeholder:B(),autoFocus:V},Y=h&&h.length>0&&B(),W=(0,I.v)({columnName:e.adhocFilter.subject,timeRange:e.adhocFilter.operator===f.d.TemporalRange?e.adhocFilter.comparator:void 0,datasource:e.datasource,onChange:d});(0,i.useEffect)((()=>{W||(()=>{const{datasource:t}=e,n=e.adhocFilter.subject,i=e.adhocFilter.clause===D.N.Having;if(n&&t&&t.filter_select&&!i){const e=new AbortController,{signal:i}=e;Z&&e.abort(),T(!0),v.Z.get({signal:i,endpoint:`/api/v1/datasource/${t.type}/${t.id}/column/${n}/values/`}).then((({json:e})=>{u(e.result.map((e=>({value:e,label:(0,C.lo)(e)})))),T(!1)})).catch((()=>{u([]),T(!1)}))}})()}),[e.adhocFilter.subject]),(0,i.useEffect)((()=>{(0,b.cr)(b.TT.EnableAdvancedDataTypes)&&q(e)}),[e.adhocFilter.subject]),(0,i.useEffect)((()=>{(0,b.cr)(b.TT.EnableAdvancedDataTypes)&&U(void 0===h?"":h,M,k)}),[h,k,U]),(0,i.useEffect)((()=>{(0,b.cr)(b.TT.EnableAdvancedDataTypes)&&p(e.adhocFilter.comparator)}),[e.adhocFilter.comparator]);const G=(0,R.tZ)(m.Ph,{css:e=>({marginTop:4*e.gridUnit,marginBottom:4*e.gridUnit}),options:A.map((e=>{return{value:"column_name"in e&&e.column_name||"optionName"in e&&e.optionName||"",label:"saved_metric_name"in e&&e.saved_metric_name||"column_name"in e&&e.column_name||"label"in e&&e.label,key:"id"in e&&e.id||"optionName"in e&&e.optionName||void 0,customLabel:(t=e,(0,R.tZ)(y.Z,{option:t}))};var t})),...H}),Q=(0,R.BX)(R.HY,{children:[(0,R.tZ)(m.Ph,{css:e=>({marginBottom:4*e.gridUnit}),options:(null!=(n=e.operators)?n:f.GS).filter((e=>L(e,z))).map(((e,t)=>({value:e,label:f.LT[e].display,key:e,order:t}))),...X}),f.qK.has(P)||c.length>0?(0,R.tZ)(x.u,{title:M.errorMessage||M.parsedAdvancedDataType,children:(0,R.tZ)(O,{labelText:Y,options:c,...K})}):(0,R.tZ)(x.u,{title:M.errorMessage||M.parsedAdvancedDataType,children:(0,R.tZ)(N,{name:"filter-value",ref:e=>{e&&V&&e.focus()},onChange:e=>{const{value:t}=e.target;p(t),s(t)},value:h,placeholder:(0,l.t)("Filter value (case sensitive)"),disabled:f.yi.includes(P)})})]});return(0,R.BX)(R.HY,{children:[G,null!=W?W:Q]})};var U=n(10689),q=n(33313),L=n(72201);const B={adhocFilter:a().instanceOf(h.Z).isRequired,onChange:a().func.isRequired,options:a().arrayOf(a().oneOfType([L.Z,a().shape({saved_metric_name:a().string.isRequired}),u.Z])).isRequired,height:a().number.isRequired},A=(0,s.iK)(m.Ph)`
  ${({theme:e})=>`\n    width: ${30*e.gridUnit}px;\n    marginRight: ${e.gridUnit}px;\n  `}
`;class z extends i.Component{constructor(e){super(e),this.onSqlExpressionChange=this.onSqlExpressionChange.bind(this),this.onSqlExpressionClauseChange=this.onSqlExpressionClauseChange.bind(this),this.handleAceEditorRef=this.handleAceEditorRef.bind(this)}componentDidUpdate(){this.aceEditorRef&&this.aceEditorRef.editor.resize()}onSqlExpressionClauseChange(e){this.props.onChange(this.props.adhocFilter.duplicateWith({clause:e,expressionType:D.p.Sql}))}onSqlExpressionChange(e){this.props.onChange(this.props.adhocFilter.duplicateWith({sqlExpression:e,expressionType:D.p.Sql}))}handleAceEditorRef(e){e&&(this.aceEditorRef=e)}render(){const{adhocFilter:e,height:t,options:n}=this.props,i=q.Z.concat(n.map((e=>e.column_name?{name:e.column_name,value:e.column_name,score:50,meta:"option"}:null)).filter(Boolean)),r=Object.values(D.N).map((e=>({label:e,value:e})));return(0,R.BX)("span",{children:[(0,R.BX)("div",{className:"filter-edit-clause-section",children:[(0,R.tZ)("div",{children:(0,R.tZ)(A,{options:r,ariaLabel:(0,l.t)("Select column"),placeholder:(0,l.t)("choose WHERE or HAVING..."),value:e.clause,onChange:this.onSqlExpressionClauseChange})}),(0,R.BX)("span",{className:"filter-edit-clause-info",children:[(0,R.tZ)("strong",{children:"WHERE"})," ",(0,l.t)("Filters by columns"),(0,R.tZ)("br",{}),(0,R.tZ)("strong",{children:"HAVING"})," ",(0,l.t)("Filters by metrics")]})]}),(0,R.tZ)("div",{css:e=>({marginTop:4*e.gridUnit}),children:(0,R.tZ)(U.iO,{ref:this.handleAceEditorRef,keywords:i,height:t-130+"px",onChange:this.onSqlExpressionChange,width:"100%",showGutter:!1,value:e.sqlExpression||e.translateToSql(),editorProps:{$blockScrolling:!0},enableLiveAutocompletion:!0,className:"filter-sql-editor",wrapEnabled:!0})})]})}}z.propTypes=B;const j={adhocFilter:a().instanceOf(h.Z).isRequired,onChange:a().func.isRequired,onClose:a().func.isRequired,onResize:a().func.isRequired,options:a().arrayOf(a().oneOfType([L.Z,a().shape({saved_metric_name:a().string.isRequired}),u.Z])).isRequired,datasource:a().object,partitionColumn:a().string,theme:a().object,sections:a().arrayOf(a().string),operators:a().arrayOf(a().string),requireSave:a().bool},P=s.iK.i`
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
`,H=s.iK.div`
  .adhoc-filter-edit-tabs > .nav-tabs {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;

    & > li > a {
      padding: ${({theme:e})=>e.gridUnit}px;
    }
  }

  #filter-edit-popover {
    max-width: none;
  }

  .filter-edit-clause-info {
    font-size: ${({theme:e})=>e.typography.sizes.xs}px;
  }

  .filter-edit-clause-section {
    display: flex;
    flex-direction: row;
    gap: ${({theme:e})=>5*e.gridUnit}px;
  }

  .adhoc-filter-simple-column-dropdown {
    margin-top: ${({theme:e})=>5*e.gridUnit}px;
  }
`,X=s.iK.div`
  margin-top: ${({theme:e})=>2*e.gridUnit}px;
`;class V extends i.Component{constructor(e){var t,n;super(e),this.onSave=this.onSave.bind(this),this.onDragDown=this.onDragDown.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onAdhocFilterChange=this.onAdhocFilterChange.bind(this),this.setSimpleTabIsValid=this.setSimpleTabIsValid.bind(this),this.adjustHeight=this.adjustHeight.bind(this),this.onTabChange=this.onTabChange.bind(this),this.state={adhocFilter:this.props.adhocFilter,width:f.kc,height:f.H7,activeKey:(null==(t=this.props)||null==(n=t.adhocFilter)?void 0:n.expressionType)||"SIMPLE",isSimpleTabValid:!0},this.popoverContentRef=(0,i.createRef)()}componentDidMount(){document.addEventListener("mouseup",this.onMouseUp)}componentWillUnmount(){document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("mousemove",this.onMouseMove)}onAdhocFilterChange(e){this.setState({adhocFilter:e})}setSimpleTabIsValid(e){this.setState({isSimpleTabValid:e})}onSave(){this.props.onChange(this.state.adhocFilter),this.props.onClose()}onDragDown(e){this.dragStartX=e.clientX,this.dragStartY=e.clientY,this.dragStartWidth=this.state.width,this.dragStartHeight=this.state.height,document.addEventListener("mousemove",this.onMouseMove)}onMouseMove(e){this.props.onResize(),this.setState({width:Math.max(this.dragStartWidth+(e.clientX-this.dragStartX),f.kc),height:Math.max(this.dragStartHeight+(e.clientY-this.dragStartY),f.H7)})}onMouseUp(){document.removeEventListener("mousemove",this.onMouseMove)}onTabChange(e){this.setState({activeKey:e})}adjustHeight(e){this.setState((t=>({height:t.height+e})))}render(){const{adhocFilter:e,options:t,onChange:n,onClose:i,onResize:r,datasource:a,partitionColumn:s,theme:u,operators:h,requireSave:p,...m}=this.props,{adhocFilter:g}=this.state,v=g.isValid(),b=p||!g.equals(e);return(0,R.BX)(H,{id:"filter-edit-popover",...m,ref:this.popoverContentRef,children:[(0,R.BX)(c.ZP,{id:"adhoc-filter-edit-tabs",defaultActiveKey:g.expressionType,className:"adhoc-filter-edit-tabs",style:{minHeight:this.state.height,width:this.state.width},allowOverflow:!0,onChange:this.onTabChange,children:[(0,R.tZ)(c.ZP.TabPane,{className:"adhoc-filter-edit-tab",tab:(0,l.t)("Simple"),children:(0,R.tZ)(d.Z,{children:(0,R.tZ)(k,{operators:h,adhocFilter:this.state.adhocFilter,onChange:this.onAdhocFilterChange,options:t,datasource:a,onHeightChange:this.adjustHeight,partitionColumn:s,popoverRef:this.popoverContentRef.current,validHandler:this.setSimpleTabIsValid})})},D.p.Simple),(0,R.tZ)(c.ZP.TabPane,{className:"adhoc-filter-edit-tab",tab:(0,l.t)("Custom SQL"),children:(0,R.tZ)(d.Z,{children:(0,R.tZ)(z,{adhocFilter:this.state.adhocFilter,onChange:this.onAdhocFilterChange,options:this.props.options,height:this.state.height,activeKey:this.state.activeKey})})},D.p.Sql)]}),(0,R.BX)(X,{children:[(0,R.tZ)(o.Z,{buttonSize:"small",onClick:this.props.onClose,cta:!0,children:(0,l.t)("Close")}),(0,R.tZ)(o.Z,{disabled:!v||!this.state.isSimpleTabValid||!b,buttonStyle:"primary",buttonSize:"small",className:"m-r-5",onClick:this.onSave,cta:!0,children:(0,l.t)("Save")}),(0,R.tZ)(P,{role:"button","aria-label":"Resize",tabIndex:0,onMouseDown:this.onDragDown,className:"fa fa-expand edit-popover-resize text-muted"})]})]})}}V.propTypes=j;var K=n(63325),Y=n(27845);class W extends i.PureComponent{constructor(e){super(e),this.onPopoverResize=this.onPopoverResize.bind(this),this.closePopover=this.closePopover.bind(this),this.togglePopover=this.togglePopover.bind(this),this.state={popoverVisible:!1}}onPopoverResize(){this.forceUpdate()}closePopover(){this.togglePopover(!1)}togglePopover(e){this.setState({popoverVisible:e})}render(){const{adhocFilter:e,isControlledComponent:t}=this.props,{visible:n,togglePopover:i,closePopover:r}=t?{visible:this.props.visible,togglePopover:this.props.togglePopover,closePopover:this.props.closePopover}:{visible:this.state.popoverVisible,togglePopover:this.togglePopover,closePopover:this.closePopover},a=(0,R.tZ)(K.b,{children:(0,R.tZ)(V,{adhocFilter:e,options:this.props.options,datasource:this.props.datasource,partitionColumn:this.props.partitionColumn,onResize:this.onPopoverResize,onClose:r,sections:this.props.sections,operators:this.props.operators,onChange:this.props.onFilterEdit,requireSave:this.props.requireSave})});return(0,R.tZ)(Y.Z,{trigger:"click",content:a,defaultVisible:n,visible:n,onVisibleChange:i,destroyTooltipOnHide:!0,children:this.props.children})}}const G=W},68424:(e,t,n)=>{var i,r;n.d(t,{N:()=>r,p:()=>i}),function(e){e.Simple="SIMPLE",e.Sql="SQL"}(i||(i={})),function(e){e.Having="HAVING",e.Where="WHERE"}(r||(r={}))},7848:(e,t,n)=>{n.d(t,{v:()=>m,w:()=>l});var i=n(67294),r=n(5364),a=n(6882),o=n(69856),s=n(68424);const l=e=>{const[t,n]=(0,i.useState)({});return(0,i.useEffect)((()=>{e.operator===o.d.TemporalRange&&e.expressionType===s.p.Simple||n({}),e.operator===o.d.TemporalRange&&e.comparator===r.vM&&n({actualTimeRange:`${e.subject} (${r.vM})`,title:r.vM}),e.operator===o.d.TemporalRange&&e.expressionType===s.p.Simple&&e.comparator!==r.vM&&t.title!==e.comparator&&(0,a.z1)(e.comparator,e.subject).then((({value:t,error:i})=>{n(i?{actualTimeRange:`${e.subject} (${e.comparator})`,title:i}:{actualTimeRange:null!=t?t:"",title:e.comparator})}))}),[e]),t};var d=n(61988),c=n(45211),u=n(51137),h=n(82342),p=n(35944);const m=({columnName:e,timeRange:t,datasource:n,onChange:i})=>(0,c.x)(e,n)?(0,p.BX)(p.HY,{children:[(0,p.tZ)(h.Z,{label:(0,d.t)("Time Range")}),(0,p.tZ)(u.Z,{value:t,name:"time_range",onChange:t=>i(e,t),overlayStyle:"Modal"})]}):void 0},56565:(e,t,n)=>{n.d(t,{c:()=>s});var i=n(46306),r=n(69856),a=n(12515);const o={"==":"=","!=":"<>",">":">","<":"<",">=":">=","<=":"<=",IN:"IN","NOT IN":"NOT IN",LIKE:"LIKE",ILIKE:"ILIKE",REGEX:"REGEX","IS NOT NULL":"IS NOT NULL","IS NULL":"IS NULL","IS TRUE":"IS TRUE","IS FALSE":"IS FALSE","LATEST PARTITION":({datasource:e})=>`= '{{ presto.latest_partition('${e.schema}.${e.datasource_name}') }}'`},s=(e,{useSimple:t}={useSimple:!1})=>{if((0,i.Ki)(e)||t){const{subject:t,operator:n}=e,i="comparator"in e?e.comparator:void 0,s=n&&n===r.LT[r.d.LatestPartition].operation?o[n](e):o[n];return(0,a.CB)(t,s,i)}return(0,i.jz)(e)?e.sqlExpression:""}},33334:(e,t,n)=>{n.d(t,{EQ:()=>g,H$:()=>T,IG:()=>_,Ne:()=>f,SW:()=>w,__:()=>v,a7:()=>m,gM:()=>Z,gu:()=>y,yj:()=>C,yz:()=>M});var i=n(67294),r=n(22068),a=n(27034),o=n(51995),s=n(11965),l=n(61988),d=n(9882),c=n(58593),u=n(13322),h=n(99963),p=n(35944);const m=o.iK.div`
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
  :last-child {
    margin-bottom: 0;
  }
`,g=o.iK.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  height: ${({theme:e})=>6*e.gridUnit}px;
  background-color: ${({theme:e})=>e.colors.grayscale.light3};
  border-radius: 3px;
  cursor: ${({withCaret:e})=>e?"pointer":"default"};
`,v=o.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    align-items: center;\n    white-space: nowrap;\n    padding-left: ${e.gridUnit}px;\n    svg {\n      margin-right: ${e.gridUnit}px;\n    }\n    .type-label {\n      margin-right: ${2*e.gridUnit}px;\n      margin-left: ${e.gridUnit}px;\n      font-weight: ${e.typography.weights.normal};\n      width: auto;\n    }\n    .option-label {\n      display: inline;\n    }\n  `}
`,b=o.iK.span`
  overflow: hidden;
  text-overflow: ellipsis;
`,f=o.iK.div`
  height: 100%;
  border-left: solid 1px ${({theme:e})=>e.colors.grayscale.dark2}0C;
  margin-left: auto;
`,y=o.iK.div`
  height: 100%;
  width: ${({theme:e})=>6*e.gridUnit}px;
  border-right: solid 1px ${({theme:e})=>e.colors.grayscale.dark2}0C;
  cursor: pointer;
`,x=(0,o.iK)(d.V)`
  margin: 0 ${({theme:e})=>e.gridUnit}px;
`,Z=o.iK.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,C=o.iK.div`
  padding: ${({theme:e})=>e.gridUnit}px;
  border: solid 1px ${({theme:e})=>e.colors.grayscale.light2};
  border-radius: ${({theme:e})=>e.gridUnit}px;
`,S=s.F4`
  0% {
    right: 100%;
  }
  50% {
    left: 4px;
  }
  90% {
    right: 4px;
  }
  100% {
    left: 100%;
  }
`,T=o.iK.div`
  ${({theme:e,isLoading:t,canDrop:n,isDragging:i,isOver:r})=>`\n  position: relative;\n  padding: ${e.gridUnit}px;\n  border: ${!t&&i?`dashed 1px ${n?e.colors.info.dark1:e.colors.error.dark1}`:`solid 1px ${t&&i?e.colors.warning.light1:e.colors.grayscale.light2}`};\n  border-radius: ${e.gridUnit}px;\n  &:before,\n  &:after {\n    content: ' ';\n    position: absolute;\n    border-radius: ${e.gridUnit}px;\n  }\n  &:before {\n    display: ${i||t?"block":"none"};\n    background-color: ${n?e.colors.primary.base:e.colors.error.light1};\n    z-index: ${e.zIndex.aboveDashboardCharts};\n    opacity: ${e.opacity.light};\n    top: 1px;\n    right: 1px;\n    bottom: 1px;\n    left: 1px;\n  }\n  &:after {\n    display: ${t||n&&r?"block":"none"};\n    background-color: ${t?e.colors.grayscale.light3:e.colors.primary.base};\n    z-index: ${e.zIndex.dropdown};\n    opacity: ${e.opacity.mediumLight};\n    top: ${-e.gridUnit}px;\n    right: ${-e.gridUnit}px;\n    bottom: ${-e.gridUnit}px;\n    left: ${-e.gridUnit}px;\n    cursor: ${t?"wait":"auto"};\n  }\n  `}

  &:before {
    ${({theme:e,isLoading:t})=>t&&s.iv`
        animation: ${S} 2s ease-in infinite;
        background: linear-gradient(currentColor 0 0) 0 100%/0% 3px no-repeat;
        background-size: 100% ${e.gridUnit/2}px;
        top: auto;
        right: ${e.gridUnit}px;
        left: ${e.gridUnit}px;
        bottom: -${e.gridUnit/2}px;
        height: ${e.gridUnit/2}px;
      `};
  }
`,w=o.iK.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({theme:e})=>6*e.gridUnit}px;
  padding-left: ${({theme:e})=>e.gridUnit}px;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.light1};
  border: dashed 1px ${({theme:e})=>e.colors.grayscale.light2};
  border-radius: ${({theme:e})=>e.gridUnit}px;
  cursor: ${({cancelHover:e})=>e?"inherit":"pointer"};

  :hover {
    background-color: ${({cancelHover:e,theme:t})=>e?"inherit":t.colors.grayscale.light4};
  }

  :active {
    background-color: ${({cancelHover:e,theme:t})=>e?"inherit":t.colors.grayscale.light3};
  }
`,_=o.iK.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({theme:e})=>4*e.gridUnit}px;
  width: ${({theme:e})=>4*e.gridUnit}px;
  padding: 0;
  background-color: ${({theme:e})=>e.colors.primary.dark1};
  border: none;
  border-radius: 2px;

  :disabled {
    cursor: not-allowed;
    background-color: ${({theme:e})=>e.colors.grayscale.light1};
  }
`,M=({label:e,savedMetric:t,adhocMetric:n,onRemove:s,onMoveLabel:d,onDropLabel:Z,withCaret:C,isFunction:S,type:T,index:w,isExtra:_,datasourceWarningMessage:M,tooltipTitle:$,multi:E=!0,...I})=>{const F=(0,o.Fg)(),D=(0,i.useRef)(null),R=(0,i.useRef)(null),N=null==t?void 0:t.metric_name,[,O]=(0,r.L)({accept:T,drop(){E&&(null==Z||Z())},hover(e,t){var n;if(!E)return;if(!D.current)return;const{dragIndex:i}=e,r=w;if(i===r)return;const a=null==(n=D.current)?void 0:n.getBoundingClientRect(),o=(a.bottom-a.top)/2,s=t.getClientOffset(),l=null!=s&&s.y?(null==s?void 0:s.y)-a.top:0;i<r&&l<o||i>r&&l>o||(null==d||d(i,r),e.dragIndex=r)}}),[{isDragging:k},U]=(0,a.c)({item:{type:T,dragIndex:w,value:null!=t&&t.metric_name?t:n},collect:e=>({isDragging:e.isDragging()})});return U(O(D)),(0,p.tZ)(m,{ref:D,children:(0,p.BX)(g,{withCaret:C,...I,children:[(0,p.tZ)(y,{role:"button",onClick:s,children:(0,p.tZ)(u.Z.XSmall,{iconColor:F.colors.grayscale.light1})}),(0,p.BX)(v,{children:[S&&(0,p.tZ)(u.Z.FieldDerived,{}),(()=>{const n=!k&&"string"==typeof e&&$&&e&&$!==e||!k&&R&&R.current&&R.current.scrollWidth>R.current.clientWidth;return t&&N?(0,p.tZ)(h.B,{metric:t,labelRef:R,shouldShowTooltip:!k}):n?(0,p.tZ)(c.u,{title:$||e,children:(0,p.tZ)(b,{ref:R,children:e})}):(0,p.tZ)(b,{ref:R,children:e})})()]}),(!!M||_)&&(0,p.tZ)(x,{icon:"exclamation-triangle",placement:"top",bsStyle:"warning",tooltip:M||(0,l.t)("\n                This filter was inherited from the dashboard's context.\n                It won't be saved when saving the chart.\n              ")}),C&&(0,p.tZ)(f,{children:(0,p.tZ)(u.Z.CaretRight,{iconColor:F.colors.grayscale.light1})})]})})}},85626:(e,t,n)=>{n.d(t,{Z:()=>v});var i=n(51995),r=n(90854),a=n(120),o=n(43617),s=n(50909),l=n(53459),d=n(49889),c=n(33743),u=n(22489),h=n(35944);const p=(0,i.iK)(s.qi)`
  && {
    margin: 0 0 ${({theme:e})=>e.gridUnit}px;
  }
`;r.Z.registerLanguage("markdown",l.Z),r.Z.registerLanguage("html",d.Z),r.Z.registerLanguage("sql",c.Z),r.Z.registerLanguage("json",u.Z);const m=i.iK.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`,g=(0,i.iK)(r.Z)`
  flex: 1;
`,v=e=>{const{sql:t,language:n="sql"}=e;return(0,h.BX)(m,{children:[(0,h.tZ)(o.Z,{text:t,shouldShowText:!1,copyNode:(0,h.tZ)(p,{buttonSize:"xsmall",children:(0,h.tZ)("i",{className:"fa fa-clipboard"})})}),(0,h.tZ)(g,{language:n,style:a.Z,children:t})]},t)}},15423:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(67294),r=n(51995),a=n(55786),o=n(44818),s=n(61988),l=n(38703),d=n(52256),c=n(85626),u=n(35944);const h=r.iK.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`,p=e=>{const[t,n]=(0,i.useState)([]),[r,p]=(0,i.useState)(!1),[m,g]=(0,i.useState)(null);return(0,i.useEffect)((()=>{p(!0),(0,d.getChartDataRequest)({formData:e.latestQueryFormData,resultFormat:"json",resultType:"query"}).then((({json:e})=>{n((0,a.Z)(e.result)),p(!1),g(null)})).catch((e=>{(0,o.O$)(e).then((({error:t,message:n})=>{g(t||n||e.statusText||(0,s.t)("Sorry, An error occurred")),p(!1)}))}))}),[JSON.stringify(e.latestQueryFormData)]),r?(0,u.tZ)(l.Z,{}):m?(0,u.tZ)("pre",{children:m}):(0,u.tZ)(h,{children:t.map((e=>e.query?(0,u.tZ)(c.Z,{sql:e.query,language:e.language||void 0}):null))})}},40219:(e,t,n)=>{n.d(t,{BR:()=>s,LW:()=>u,nv:()=>c});var i=n(57557),r=n.n(i),a=n(31069);const o=["url_params"],s=e=>r()(e,o),l=(e,t)=>{let n="api/v1/explore/form_data";return e&&(n=n.concat(`/${e}`)),t&&(n=n.concat(`?tab_id=${t}`)),n},d=(e,t,n,i)=>{const r={datasource_id:e,datasource_type:t,form_data:JSON.stringify(s(n))};return i&&(r.chart_id=i),r},c=(e,t,n,i,r)=>a.Z.post({endpoint:l(void 0,r),jsonPayload:d(e,t,n,i)}).then((e=>e.json.key)),u=(e,t,n,i,r,o)=>a.Z.put({endpoint:l(n,o),jsonPayload:d(e,t,i,r)}).then((e=>e.json.message))},53579:(e,t,n)=>{n.d(t,{S:()=>p});var i=n(67294),r=n(51995),a=n(61988),o=n(11965),s=n(29487),l=n(67697),d=n(32871),c=n(42190),u=n(6412),h=n(35944);const p=({dataset:e,datasetId:t})=>{const n=(0,r.Fg)(),[p,m]=(0,i.useState)(),[g,v]=(0,i.useState)(e?c.ni.Complete:c.ni.Loading);return(0,i.useEffect)((()=>{!e&&t&&(0,u.e)({endpoint:`/api/v1/dataset/${t}`}).then((({json:{result:e}})=>{m(e),v(c.ni.Complete)})).catch((()=>{v(c.ni.Error)}))}),[t,e]),{metadataBar:(0,i.useMemo)((()=>{const t=[],i=e||p;if(i){var r,u;const{changed_on_humanized:e,created_on_humanized:n,description:o,table_name:s,changed_by:l,created_by:c,owners:h}=i,p=(0,a.t)("Not available"),m=`${null!=(r=null==c?void 0:c.first_name)?r:""} ${null!=(u=null==c?void 0:c.last_name)?u:""}`.trim()||p,g=l?`${l.first_name} ${l.last_name}`:p,v=(null==h?void 0:h.length)>0?h.map((e=>`${e.first_name} ${e.last_name}`)):[p];t.push({type:d.p.Table,title:s}),t.push({type:d.p.LastModified,value:e,modifiedBy:g}),t.push({type:d.p.Owner,createdBy:m,owners:v,createdOn:n}),o&&t.push({type:d.p.Description,value:o})}return(0,h.BX)("div",{css:o.iv`
          display: flex;
          margin-bottom: ${4*n.gridUnit}px;
        `,children:[g===c.ni.Complete&&(0,h.tZ)(l.ZP,{items:t,tooltipPlacement:"bottom"}),g===c.ni.Error&&(0,h.tZ)(s.Z,{type:"error",message:(0,a.t)("There was an error loading the dataset metadata")})]})}),[e,p,g,n.gridUnit]),status:g}}},21312:(e,t,n)=>{n.d(t,{x:()=>oe,Z:()=>ce});var i,r,a=n(11965),o=n(41609),s=n.n(o),l=n(67294),d=n(28216),c=n(75049),u=n(51995),h=n(93185),p=n(85716),m=n(61988),g=n(13322),v=n(12441),b=n(83862),f=n(87253),y=n(54076),x=n(88694),Z=n(17198),C=n(44818),S=n(39666),T=n(29487),w=n(98978),_=n(73684),M=n(9875),$=n(14114);!function(e){e.Dashboards="dashboards",e.Charts="charts"}(i||(i={})),function(e){e.Text="TEXT",e.PNG="PNG",e.CSV="CSV"}(r||(r={}));var E=n(34858),I=n(67317),F=n(74069),D=n(35932),R=n(87183),N=n(9433);const O=(0,u.iK)(F.default)`
  .ant-modal-body {
    padding: 0;
  }
`,k=u.iK.div`
  padding: ${({theme:e})=>`${3*e.gridUnit}px ${4*e.gridUnit}px ${2*e.gridUnit}px`};
  label {
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }
`,U=u.iK.div`
  border-top: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  padding: ${({theme:e})=>`${4*e.gridUnit}px ${4*e.gridUnit}px ${6*e.gridUnit}px`};
  .ant-select {
    width: 100%;
  }
  .control-label {
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }
`,q=u.iK.span`
  span {
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
`,L=u.iK.div`
  margin-bottom: ${({theme:e})=>7*e.gridUnit}px;

  h4 {
    margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  }
`,B=(0,u.iK)(N.Bj)`
  margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  width: ${({theme:e})=>120*e.gridUnit}px;
`,A=u.iK.p`
  color: ${({theme:e})=>e.colors.error.base};
`,z=a.iv`
  margin-bottom: 0;
`,j=(0,u.iK)(D.Z)`
  width: ${({theme:e})=>40*e.gridUnit}px;
`,P=e=>a.iv`
  margin: ${3*e.gridUnit}px 0 ${2*e.gridUnit}px;
`,H=u.iK.div`
  margin: ${({theme:e})=>8*e.gridUnit}px 0
    ${({theme:e})=>4*e.gridUnit}px;
`,X=(0,u.iK)(R.Y)`
  display: block;
  line-height: ${({theme:e})=>8*e.gridUnit}px;
`,V=(0,u.iK)(R.Y.Group)`
  margin-left: ${({theme:e})=>.5*e.gridUnit}px;
`;var K=n(35944);const Y=["pivot_table_v2","table","paired_ttest"],W={crontab:"0 12 * * 1"},G={},Q=(0,$.ZP)((function({onHide:e,show:t=!1,dashboardId:n,chart:i,userId:o,userEmail:s,ccEmail:c,bccEmail:u,creationMethod:h,dashboardName:p,chartName:v}){var b;const f=null==i||null==(b=i.sliceFormData)?void 0:b.viz_type,y=!!i,x=y&&f&&Y.includes(f),Z=x?r.Text:r.PNG,$=p||v,F=(0,l.useMemo)((()=>({...W,name:$?(0,m.t)("Weekly Report for %s",$):(0,m.t)("Weekly Report")})),[$]),D=(0,l.useCallback)(((e,t)=>"reset"===t?F:{...e,...t}),[F]),[R,N]=(0,l.useReducer)(D,F),[Q,J]=(0,l.useState)(),ee=(0,d.I0)(),te=(0,d.v9)((e=>{const t=n?oe.Dashboards:oe.Charts;return(0,E._l)(e,t,n||(null==i?void 0:i.id))||G})),ne=te&&Object.keys(te).length;(0,l.useEffect)((()=>{N(ne?te:"reset")}),[ne,te]);const ie=(0,K.BX)(q,{children:[(0,K.tZ)(g.Z.Calendar,{}),(0,K.tZ)("span",{className:"text",children:ne?(0,m.t)("Edit email report"):(0,m.t)("Schedule a new email report")})]}),re=(0,K.BX)(K.HY,{children:[(0,K.tZ)(j,{onClick:e,children:(0,m.t)("Cancel")},"back"),(0,K.tZ)(j,{buttonStyle:"primary",onClick:async()=>{const t={type:"Report",active:!0,force_screenshot:!1,custom_width:R.custom_width,creation_method:h,dashboard:n,chart:null==i?void 0:i.id,owners:[o],recipients:[{recipient_config_json:{target:s,ccTarget:c,bccTarget:u},type:"Email"}],name:R.name,description:R.description,crontab:R.crontab,report_format:R.report_format||Z,timezone:R.timezone};N({isSubmitting:!0,error:void 0});try{ne?await ee((0,S.Me)(R.id,t)):await ee((0,S.cq)(t)),e()}catch(e){const{error:t}=await(0,C.O$)(e);N({error:t})}N({isSubmitting:!1})},disabled:!R.name,loading:R.isSubmitting,children:ne?(0,m.t)("Save"):(0,m.t)("Add")},"submit")]}),ae=(0,K.BX)(K.HY,{children:[(0,K.tZ)(H,{children:(0,K.tZ)("h4",{children:(0,m.t)("Message content")})}),(0,K.tZ)("div",{className:"inline-container",children:(0,K.BX)(V,{onChange:e=>{N({report_format:e.target.value})},value:R.report_format||Z,children:[x&&(0,K.tZ)(X,{value:r.Text,children:(0,m.t)("Text embedded in email")}),(0,K.tZ)(X,{value:r.PNG,children:(0,m.t)("Image (PNG) embedded in email")}),(0,K.tZ)(X,{value:r.CSV,children:(0,m.t)("Formatted CSV attached in email")})]})})]}),se=(0,K.BX)(I.j5,{children:[(0,K.tZ)("div",{className:"control-label",css:P,children:(0,m.t)("Screenshot width")}),(0,K.tZ)("div",{className:"input-container",children:(0,K.tZ)(M.II,{type:"number",name:"custom_width",value:(null==R?void 0:R.custom_width)||"",placeholder:(0,m.t)("Input custom width in pixels"),onChange:e=>{N({custom_width:parseInt(e.target.value,10)||null})}})})]});return(0,K.BX)(O,{show:t,onHide:e,title:ie,footer:re,width:"432",centered:!0,children:[(0,K.BX)(k,{children:[(0,K.tZ)(_.Z,{id:"name",name:"name",value:R.name||"",placeholder:F.name,required:!0,validationMethods:{onChange:({target:e})=>N({name:e.value})},label:(0,m.t)("Report Name")}),(0,K.tZ)(_.Z,{id:"description",name:"description",value:(null==R?void 0:R.description)||"",validationMethods:{onChange:({target:e})=>{N({description:e.value})}},label:(0,m.t)("Description"),placeholder:(0,m.t)("Include a description that will be sent with your report"),css:z})]}),(0,K.BX)(U,{children:[(0,K.BX)(L,{children:[(0,K.tZ)("h4",{css:e=>(e=>a.iv`
  margin: ${3*e.gridUnit}px 0;
`)(e),children:(0,m.t)("Schedule")}),(0,K.tZ)("p",{children:(0,m.t)("The report will be sent to your email at")})]}),(0,K.tZ)(B,{clearButton:!1,value:R.crontab||"0 12 * * 1",setValue:e=>{N({crontab:e})},onError:J}),(0,K.tZ)(A,{children:Q}),(0,K.tZ)("div",{className:"control-label",css:e=>(e=>a.iv`
  margin: ${3*e.gridUnit}px 0 ${2*e.gridUnit}px;
`)(e),children:(0,m.t)("Timezone")}),(0,K.tZ)(w.Z,{timezone:R.timezone,onTimezoneChange:e=>{N({timezone:e})}}),y&&ae,(!y||!x)&&se]}),R.error&&(0,K.tZ)(T.Z,{type:"error",css:e=>(e=>a.iv`
  border: ${e.colors.error.base} 1px solid;
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px;
  margin-top: 0;
  color: ${e.colors.error.dark2};
  .ant-alert-message {
    font-size: ${e.typography.sizes.m}px;
    font-weight: bold;
  }
  .ant-alert-description {
    font-size: ${e.typography.sizes.m}px;
    line-height: ${4*e.gridUnit}px;
    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),message:ne?(0,m.t)("Failed to update report"):(0,m.t)("Failed to create report"),description:R.error})]})}));var J=n(96022);const ee=(0,c.I)(),te=e=>a.iv`
  color: ${e.colors.error.base};
`,ne=e=>a.iv`
  & .ant-menu-item {
    padding: 5px 12px;
    margin-top: 0px;
    margin-bottom: 4px;
    :hover {
      color: ${e.colors.grayscale.dark1};
    }
  }
  :hover {
    background-color: ${e.colors.secondary.light5};
  }
`,ie=e=>a.iv`
  &:hover {
    color: ${e.colors.grayscale.dark1};
    background-color: ${e.colors.secondary.light5};
  }
`,re=u.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > *:first-child {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,ae=ee.get("report-modal.dropdown.item.icon");var oe;!function(e){e.Charts="charts",e.Dashboards="dashboards"}(oe||(oe={}));const se={};var le={name:"1e1ncky",styles:"border:none"},de={name:"833hqy",styles:"width:200px"};function ce({dashboardId:e,chart:t,useTextMenu:n=!1,setShowReportSubMenu:i,setIsDropdownVisible:r,isDropdownVisible:o,...c}){const C=(0,d.I0)(),T=(0,d.v9)((n=>{const i=e?oe.Dashboards:oe.Charts;return(0,E._l)(n,i,e||(null==t?void 0:t.id))||se})),w=(null==T?void 0:T.active)||!1,_=(0,d.v9)((e=>e.user)),M=()=>!!(0,h.cr)(h.TT.AlertReports)&&(!(null==_||!_.userId)&&(!!(e||null!=t&&t.id)&&Object.keys(_.roles||[]).map((e=>_.roles[e].filter((e=>"menu_access"===e[0]&&"Manage"===e[1])))).some((e=>e.length>0)))),[$,I]=(0,l.useState)(null),F=(0,u.Fg)(),D=(0,p.D)(e),[R,N]=(0,l.useState)(!1),O=async(e,t)=>{null!=e&&e.id&&C((0,S.M)(e,t))},k=M()&&!!(e&&D!==e||null!=t&&t.id);(0,l.useEffect)((()=>{k&&C((0,S.Aw)({userId:_.userId,filterField:e?"dashboard_id":"chart_id",creationMethod:e?"dashboards":"charts",resourceId:e||(null==t?void 0:t.id)}))}),[]);const U=T&&i&&M();(0,l.useEffect)((()=>{U?i(!0):!T&&i&&i(!1)}),[T]);const q=()=>{r&&(r(!1),N(!0))};return(0,K.tZ)(K.HY,{children:M()&&(0,K.BX)(K.HY,{children:[(0,K.tZ)(Q,{userId:_.userId,show:R,onHide:()=>N(!1),userEmail:_.email,dashboardId:e,chart:t,creationMethod:e?oe.Dashboards:oe.Charts}),n?s()(T)?(0,K.BX)(b.Menu,{selectable:!1,...c,css:ne,children:[(0,K.tZ)(b.Menu.Item,{onClick:q,children:ae?(0,K.BX)(re,{children:[(0,K.tZ)("div",{children:(0,m.t)("Set up an email report")}),(0,K.tZ)(ae,{})]}):(0,m.t)("Set up an email report")}),(0,K.tZ)(b.Menu.Divider,{})]}):o&&(0,K.BX)(b.Menu,{selectable:!1,css:le,children:[(0,K.tZ)(b.Menu.Item,{css:ie,onClick:()=>O(T,!w),children:(0,K.BX)(J.ZN,{children:[(0,K.tZ)(f.ZP,{checked:w,onChange:y.EI}),(0,m.t)("Email reports active")]})}),(0,K.tZ)(b.Menu.Item,{css:ie,onClick:q,children:(0,m.t)("Edit email report")}),(0,K.tZ)(b.Menu.Item,{css:ie,onClick:()=>{r&&(r(!1),I(T))},children:(0,m.t)("Delete email report")})]}):s()(T)?(0,K.tZ)("span",{role:"button",title:(0,m.t)("Schedule email report"),tabIndex:0,className:"action-button action-schedule-report",onClick:()=>N(!0),children:(0,K.tZ)(g.Z.Calendar,{})}):(0,K.tZ)(K.HY,{children:(0,K.tZ)(x.$i,{overlay:(0,K.BX)(b.Menu,{selectable:!1,css:de,children:[(0,K.BX)(b.Menu.Item,{children:[(0,m.t)("Email reports active"),(0,K.tZ)(v.r,{checked:w,onClick:e=>O(T,e),size:"small",css:(0,a.iv)({marginLeft:2*F.gridUnit},"","")})]}),(0,K.tZ)(b.Menu.Item,{onClick:()=>N(!0),children:(0,m.t)("Edit email report")}),(0,K.tZ)(b.Menu.Item,{onClick:()=>I(T),css:te,children:(0,m.t)("Delete email report")})]}),overlayStyle:{zIndex:99,animationDuration:"0s"},trigger:["click"],getPopupContainer:e=>e.closest(".action-button"),children:(0,K.tZ)("span",{role:"button",className:"action-button action-schedule-report",tabIndex:0,children:(0,K.tZ)(g.Z.Calendar,{})})})}),$&&(0,K.tZ)(Z.Z,{description:(0,m.t)("This action will permanently delete %s.",null==$?void 0:$.name),onConfirm:()=>{$&&(async e=>{await C((0,S.MZ)(e)),I(null)})($)},onHide:()=>I(null),open:!0,title:(0,m.t)("Delete Report?")})]})})}},6954:(e,t,n)=>{n.d(t,{z:()=>o});var i=n(67294),r=n(64296);const a=new BroadcastChannel("tab_id_channel");function o(){const[e,t]=(0,i.useState)();return(0,i.useEffect)((()=>{if(!function(){try{return window.localStorage&&window.sessionStorage}catch(e){return!1}}())return void(e||t((0,r.x0)()));const n=()=>{let e;try{e=window.localStorage.getItem("last_tab_id")}catch(e){}const n=String(e?Number.parseInt(e,10)+1:1);try{window.sessionStorage.setItem("tab_id",n),window.localStorage.setItem("last_tab_id",n)}catch(e){}t(n)};let i;try{i=window.sessionStorage.getItem("tab_id")}catch(e){}i?(a.postMessage({type:"REQUESTING_TAB_ID",tabId:i}),t(i)):n(),a.onmessage=t=>{if(t.data.tabId===e)if("REQUESTING_TAB_ID"===t.data.type){const e={type:"TAB_ID_DENIED",tabId:t.data.tabId};a.postMessage(e)}else"TAB_ID_DENIED"===t.data.type&&n()}}),[e]),e}},65108:(e,t,n)=>{n.d(t,{g:()=>i});const i=(e,t,n=((...e)=>JSON.stringify([...e])))=>(...i)=>{const r=n(...i);if(t.has(r))return t.get(r);const a=e(...i);return t.set(r,a),a}},6412:(e,t,n)=>{n.d(t,{e:()=>o,f:()=>a});var i=n(31069),r=n(65108);const a=new Map,o=(0,r.g)(i.Z.get,a,(({endpoint:e})=>e||""))},56727:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(21804),r=n.n(i),a=n(46926),o=n.n(a),s=n(61988),l=n(51995),d=n(72570);const c=(e,t=new Date)=>`${r()(e)}-${t.toISOString().replace(/[: ]/g,"-")}`;function u(e,t,n=!1){return i=>{const r=n?document.querySelector(e):i.currentTarget.closest(e);return r?o().toJpeg(r,{bgcolor:l.K6.colors.grayscale.light4,filter:e=>"string"!=typeof e.className||"mapboxgl-control-container"!==e.className&&!e.className.includes("header-controls")}).then((e=>{const n=document.createElement("a");n.download=`${c(t)}.jpg`,n.href=e,n.click()})).catch((e=>{console.error("Creating image failed",e)})):(0,d.Dz)((0,s.t)("Image download failed, please refresh and try again."))}}},75701:(e,t,n)=>{n.d(t,{J:()=>o});var i=n(61988);const r=(0,i.t)("Create chart"),a=(0,i.t)("Update chart"),o=e=>(0,i.t)("Select values in highlighted field(s) in the control panel. Then run the query by clicking on the %s button.",`"${e?r:a}"`)},99232:(e,t,n)=>{n.d(t,{f:()=>s});var i=n(72813),r=n(68424),a=n(69856),o=n(56565);const s=(e,t=r.N.Where)=>{let n;var s;return n=(0,i.GA)(e.col)?{expressionType:"SQL",clause:t,sqlExpression:(0,o.c)({expressionType:r.p.Simple,subject:`(${e.col.sqlExpression})`,operator:e.op,comparator:"val"in e?e.val:void 0})}:{expressionType:"SIMPLE",clause:t,operator:e.op,operatorId:null==(s=Object.entries(a.LT).find((t=>t[1].operation===e.op)))?void 0:s[0],subject:e.col,comparator:"val"in e?e.val:void 0},e.isExtra&&Object.assign(n,{isExtra:!0,filterOptionName:`filter_${Math.random().toString(36).substring(2,15)}_${Math.random().toString(36).substring(2,15)}`}),n}}}]);
//# sourceMappingURL=f7611b90caa19b31522e.chunk.js.map
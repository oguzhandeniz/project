"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3139],{62276:(e,t,a)=>{a.d(t,{M:()=>o,S:()=>n});var r=a(60593),l=a(51995);const i=r.Z.RangePicker,n=(0,l.iK)(i)`
  border-radius: ${({theme:e})=>e.gridUnit}px;
`,o=r.Z},93139:(e,t,a)=>{a.d(t,{p:()=>ce,Z:()=>de});var r=a(51995),l=a(61988),i=a(67294),n=a(29487),o=a(93967),s=a.n(o),d=a(35932),c=a(13322),u=a(49576),g=a(64158),p=a(97754),h=a(31069),m=a(49238),f=a(74069),v=a(84101),b=a(60718),y=a(35944);const w=r.iK.div`
  .bulk-tag-text {
    margin-bottom: ${({theme:e})=>2.5*e.gridUnit}px;
  }
`,x=({show:e,selected:t=[],onHide:a,refreshData:r,resourceName:n,addSuccessToast:o,addDangerToast:s})=>{(0,i.useEffect)((()=>{}),[]);const[c,u]=(0,i.useState)([]);return(0,y.tZ)(f.default,{title:(0,l.t)("Bulk tag"),show:e,onHide:()=>{u([]),a()},footer:(0,y.BX)("div",{children:[(0,y.tZ)(d.Z,{buttonStyle:"secondary",onClick:a,children:(0,l.t)("Cancel")}),(0,y.tZ)(d.Z,{buttonStyle:"primary",onClick:async()=>{await h.Z.post({endpoint:"/api/v1/tag/bulk_create",jsonPayload:{tags:c.map((e=>({name:e.value,objects_to_tag:t.map((e=>[n,+e.original.id]))})))}}).then((({json:e={}})=>{const t=e.result.objects_skipped,a=e.result.objects_tagged;t.length>0&&o((0,l.t)("%s items could not be tagged because you don’t have edit permissions to all selected objects.",t.length,n)),o((0,l.t)("Tagged %s %ss",a.length,n))})).catch((e=>{s((0,l.t)("Failed to tag items"))})),r(),a(),u([])},children:(0,l.t)("Save")})]}),children:(0,y.BX)(w,{children:[(0,y.tZ)("div",{className:"bulk-tag-text",children:(0,l.t)("You are adding tags to %s %ss",t.length,n)}),(0,y.tZ)(m.lX,{children:(0,l.t)("tags")}),(0,y.tZ)(v.Z,{ariaLabel:"tags",value:c,options:b.m,onHide:a,onChange:e=>u(e),placeholder:(0,l.t)("Select Tags"),mode:"multiple"})]})})},S=r.iK.div`
  ${({theme:e,showThumbnails:t})=>`\n    display: grid;\n    grid-gap: ${12*e.gridUnit}px ${4*e.gridUnit}px;\n    grid-template-columns: repeat(auto-fit, 300px);\n    margin-top: ${-6*e.gridUnit}px;\n    padding: ${t?`${8*e.gridUnit+3}px ${9*e.gridUnit}px`:`${8*e.gridUnit+1}px ${9*e.gridUnit}px`};\n  `}
`,Z=r.iK.div`
  border: 2px solid transparent;
  &.card-selected {
    border: 2px solid ${({theme:e})=>e.colors.primary.base};
  }
  &.bulk-select {
    cursor: pointer;
  }
`;function C({bulkSelectEnabled:e,loading:t,prepareRow:a,renderCard:r,rows:l,showThumbnails:i}){return r?(0,y.BX)(S,{showThumbnails:i,children:[t&&0===l.length&&[...new Array(25)].map(((e,a)=>(0,y.tZ)("div",{children:r({loading:t})},a))),l.length>0&&l.map((l=>r?(a(l),(0,y.tZ)(Z,{className:s()({"card-selected":e&&l.isSelected,"bulk-select":e}),onClick:t=>{return a=t,r=l.toggleRowSelected,void(e&&(a.preventDefault(),a.stopPropagation(),r()));var a,r},role:"none",children:r({...l.original,loading:t})},l.id)):null))]}):null}var T=a(68135),$=a(4715),_=a(18446),B=a.n(_),k=a(79521),F=a(35755),I=a(15926),N=a.n(I);const P={encode:e=>void 0===e?void 0:N().encode(e).replace(/%/g,"%25").replace(/&/g,"%26").replace(/\+/g,"%2B").replace(/#/g,"%23"),decode:e=>void 0===e||Array.isArray(e)?void 0:N().decode(e)};class R extends Error{constructor(...e){super(...e),this.name="ListViewError"}}function U(e,t){return e.map((({id:e,urlDisplay:a,operator:r})=>({id:e,urlDisplay:a,operator:r,value:t[a||e]})))}function D(e,t){const a=[],r={};return Object.keys(e).forEach((t=>{const l={id:t,value:e[t]};r[t]=l,a.push(l)})),t.forEach((e=>{const t=e.urlDisplay||e.id,a=r[t];a&&(a.operator=e.operator,a.id=e.id)})),a}var M=a(8272);const E=r.iK.div`
  width: ${200}px;
`,A=(0,r.iK)(c.Z.Search)`
  color: ${({theme:e})=>e.colors.grayscale.light1};
`,X=(0,r.iK)($.oc)`
  border-radius: ${({theme:e})=>e.gridUnit}px;
`;function H({Header:e,name:t,initialValue:a,toolTipDescription:r,onSubmit:n},o){const[s,d]=(0,i.useState)(a||""),c=()=>{s&&n(s.trim())};return(0,i.useImperativeHandle)(o,(()=>({clearFilter:()=>{d(""),n("")}}))),(0,y.BX)(E,{children:[(0,y.tZ)(m.lX,{children:e}),r&&(0,y.tZ)(M.Z,{tooltip:r,viewBox:"0 -7 28 28"}),(0,y.tZ)(X,{allowClear:!0,placeholder:(0,l.t)("Type a value"),name:t,value:s,onChange:e=>{d(e.currentTarget.value),""===e.currentTarget.value&&n("")},onPressEnter:c,onBlur:c,prefix:(0,y.tZ)(A,{iconSize:"l"})})]})}const V=(0,i.forwardRef)(H),z=r.iK.div`
  display: inline-flex;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  align-items: center;
  width: ${200}px;
`;function O({Header:e,name:t,fetchSelects:a,initialValue:r,onSelect:n,selects:o=[]},s){const[d,c]=(0,i.useState)(r),u=e=>{n(e?{label:e.label,value:e.value}:void 0),c(e)},g=()=>{n(void 0,!0),c(void 0)};(0,i.useImperativeHandle)(s,(()=>({clearFilter:()=>{g()}})));const p=(0,i.useMemo)((()=>async(e,t,r)=>{if(a){const l=await a(e,t,r);return{data:l.data,totalCount:l.totalCount}}return{data:[],totalCount:0}}),[a]);return(0,y.tZ)(z,{children:a?(0,y.tZ)(v.Z,{allowClear:!0,ariaLabel:"string"==typeof e?e:t||(0,l.t)("Filter"),header:(0,y.tZ)(m.lX,{children:e}),onChange:u,onClear:g,options:p,placeholder:(0,l.t)("Select or type a value"),showSearch:!0,value:d}):(0,y.tZ)($.Ph,{allowClear:!0,ariaLabel:"string"==typeof e?e:t||(0,l.t)("Filter"),header:(0,y.tZ)(m.lX,{children:e}),labelInValue:!0,onChange:u,onClear:g,options:o,placeholder:(0,l.t)("Select or type a value"),showSearch:!0,value:d})})}const K=(0,i.forwardRef)(O);var j=a(30381),q=a.n(j),L=a(62276);const W=r.iK.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 360px;
`;function G({Header:e,initialValue:t,onSubmit:a},r){const[n,o]=(0,i.useState)(null!=t?t:null),s=(0,i.useMemo)((()=>!n||Array.isArray(n)&&!n.length?null:[q()(n[0]),q()(n[1])]),[n]);return(0,i.useImperativeHandle)(r,(()=>({clearFilter:()=>{o(null),a([])}}))),(0,y.BX)(W,{children:[(0,y.tZ)(m.lX,{children:e}),(0,y.tZ)(L.S,{placeholder:[(0,l.t)("Start date"),(0,l.t)("End date")],showTime:!0,value:s,onChange:e=>{var t,r,l,i;if(!e)return o(null),void a([]);const n=[null!=(t=null==(r=e[0])?void 0:r.valueOf())?t:0,null!=(l=null==(i=e[1])?void 0:i.valueOf())?l:0];o(n),a(n)}})]})}const Y=(0,i.forwardRef)(G);function J({filters:e,internalFilters:t=[],updateFilterValue:a},r){const l=(0,i.useMemo)((()=>Array.from({length:e.length},(()=>(0,i.createRef)()))),[e.length]);return(0,i.useImperativeHandle)(r,(()=>({clearFilters:()=>{l.forEach((e=>{var t;null==(t=e.current)||null==t.clearFilter||t.clearFilter()}))}}))),(0,y.tZ)(y.HY,{children:e.map((({Header:e,fetchSelects:r,key:i,id:n,input:o,paginate:s,selects:d,toolTipDescription:c,onFilterUpdate:u},g)=>{var p;const h=null==t||null==(p=t[g])?void 0:p.value;return"select"===o?(0,y.tZ)(K,{ref:l[g],Header:e,fetchSelects:r,initialValue:h,name:n,onSelect:(e,t)=>{u&&(t||u(e)),a(g,e)},paginate:s,selects:d},i):"search"===o&&"string"==typeof e?(0,y.tZ)(V,{ref:l[g],Header:e,initialValue:h,name:n,toolTipDescription:c,onSubmit:e=>{u&&u(e),a(g,e)}},i):"datetime_range"===o?(0,y.tZ)(Y,{ref:l[g],Header:e,initialValue:h,name:n,onSubmit:e=>a(g,e)},i):null}))})}const Q=(0,T.b)((0,i.forwardRef)(J)),ee=r.iK.div`
  display: inline-flex;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  align-items: center;
  text-align: left;
  width: ${200}px;
`,te=({initialSort:e,onChange:t,options:a})=>{const r=e&&a.find((({id:t,desc:a})=>t===e[0].id&&a===e[0].desc))||a[0],[n,o]=(0,i.useState)({label:r.label,value:r.value}),s=(0,i.useMemo)((()=>a.map((e=>({label:e.label,value:e.value})))),[a]);return(0,y.tZ)(ee,{children:(0,y.tZ)($.Ph,{ariaLabel:(0,l.t)("Sort"),header:(0,y.tZ)(m.lX,{children:(0,l.t)("Sort")}),labelInValue:!0,onChange:e=>{o(e);const r=a.find((({value:t})=>t===e.value));if(r){const e=[{id:r.id,desc:r.desc}];t(e)}},options:s,showSearch:!0,value:n})})};var ae=a(94301);const re=r.iK.div`
  text-align: center;

  .superset-list-view {
    text-align: left;
    border-radius: 4px 0;
    margin: 0 ${({theme:e})=>4*e.gridUnit}px;

    .header {
      display: flex;
      padding-bottom: ${({theme:e})=>4*e.gridUnit}px;

      & .controls {
        display: flex;
        flex-wrap: wrap;
        column-gap: ${({theme:e})=>6*e.gridUnit}px;
        row-gap: ${({theme:e})=>4*e.gridUnit}px;
      }
    }

    .body.empty table {
      margin-bottom: 0;
    }

    .body {
      overflow-x: auto;
    }

    .ant-empty {
      .ant-empty-image {
        height: auto;
      }
    }
  }

  .pagination-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
  }

  .row-count-container {
    margin-top: ${({theme:e})=>2*e.gridUnit}px;
    color: ${({theme:e})=>e.colors.grayscale.base};
  }
`,le=(0,r.iK)(n.Z)`
  ${({theme:e})=>`\n    border-radius: 0;\n    margin-bottom: 0;\n    color: ${e.colors.grayscale.dark1};\n    background-color: ${e.colors.primary.light4};\n\n    .selectedCopy {\n      display: inline-block;\n      padding: ${2*e.gridUnit}px 0;\n    }\n\n    .deselect-all, .tag-btn {\n      color: ${e.colors.primary.base};\n      margin-left: ${4*e.gridUnit}px;\n    }\n\n    .divider {\n      margin: ${2*-e.gridUnit}px 0 ${2*-e.gridUnit}px ${4*e.gridUnit}px;\n      width: 1px;\n      height: ${8*e.gridUnit}px;\n      box-shadow: inset -1px 0px 0px ${e.colors.grayscale.light2};\n      display: inline-flex;\n      vertical-align: middle;\n      position: relative;\n    }\n\n    .ant-alert-close-icon {\n      margin-top: ${1.5*e.gridUnit}px;\n    }\n  `}
`,ie={Cell:({row:e})=>(0,y.tZ)(u.Z,{...e.getToggleRowSelectedProps(),id:e.id}),Header:({getToggleAllRowsSelectedProps:e})=>(0,y.tZ)(u.Z,{...e(),id:"header-toggle-all"}),id:"selection",size:"sm"},ne=r.iK.div`
  padding-right: ${({theme:e})=>4*e.gridUnit}px;
  margin-top: ${({theme:e})=>5*e.gridUnit+1}px;
  white-space: nowrap;
  display: inline-block;

  .toggle-button {
    display: inline-block;
    border-radius: ${({theme:e})=>e.gridUnit/2}px;
    padding: ${({theme:e})=>e.gridUnit}px;
    padding-bottom: ${({theme:e})=>.5*e.gridUnit}px;

    &:first-of-type {
      margin-right: ${({theme:e})=>2*e.gridUnit}px;
    }
  }

  .active {
    background-color: ${({theme:e})=>e.colors.grayscale.base};
    svg {
      color: ${({theme:e})=>e.colors.grayscale.light5};
    }
  }
`,oe=r.iK.div`
  padding: ${({theme:e})=>40*e.gridUnit}px 0;

  &.table {
    background: ${({theme:e})=>e.colors.grayscale.light5};
  }
`,se=({mode:e,setMode:t})=>(0,y.BX)(ne,{children:[(0,y.tZ)("div",{role:"button",tabIndex:0,onClick:e=>{e.currentTarget.blur(),t("card")},className:s()("toggle-button",{active:"card"===e}),children:(0,y.tZ)(c.Z.CardView,{})}),(0,y.tZ)("div",{role:"button",tabIndex:0,onClick:e=>{e.currentTarget.blur(),t("table")},className:s()("toggle-button",{active:"table"===e}),children:(0,y.tZ)(c.Z.ListView,{})})]}),de=function({columns:e,data:t,count:a,pageSize:r,fetchData:n,refreshData:o,loading:s,initialSort:c=[],className:u="",filters:h=[],bulkActions:m=[],bulkSelectEnabled:f=!1,disableBulkSelect:v=(()=>{}),renderBulkSelectCopy:b=(e=>(0,l.t)("%s Selected",e.length)),renderCard:w,showThumbnails:S,cardSortSelectOptions:Z,defaultViewMode:T="card",highlightRowId:$,emptyState:_,columnsForWrapText:I,enableBulkTag:N=!1,bulkTagResourceName:M,addSuccessToast:E,addDangerToast:A}){const{getTableProps:X,getTableBodyProps:H,headerGroups:V,rows:z,prepareRow:O,pageCount:K=1,gotoPage:j,applyFilterValue:q,setSortBy:L,selectedFlatRows:W,toggleAllRowsSelected:G,setViewMode:Y,state:{pageIndex:J,pageSize:ee,internalFilters:ne,sortBy:de,viewMode:ce},query:ue}=function({fetchData:e,columns:t,data:a,count:r,initialPageSize:l,initialFilters:n=[],initialSort:o=[],bulkSelectMode:s=!1,bulkSelectColumnConfig:d,renderCard:c=!1,defaultViewMode:u="card"}){const[g,p]=(0,F.Kx)({filters:P,pageIndex:F.yz,sortColumn:F.Zp,sortOrder:F.Zp,viewMode:F.Zp}),h=(0,i.useMemo)((()=>g.sortColumn&&g.sortOrder?[{id:g.sortColumn,desc:"desc"===g.sortOrder}]:o),[o,g.sortColumn,g.sortOrder]),m={filters:g.filters?D(g.filters,n):[],pageIndex:g.pageIndex||0,pageSize:l,sortBy:h},[f,v]=(0,i.useState)(g.viewMode||(c?u:"table")),b=(0,i.useMemo)((()=>{const e=t.map((e=>({...e,filter:"exact"})));return s?[d,...e]:e}),[s,t]),{getTableProps:y,getTableBodyProps:w,headerGroups:x,rows:S,prepareRow:Z,canPreviousPage:C,canNextPage:T,pageCount:$,gotoPage:_,setAllFilters:I,setSortBy:N,selectedFlatRows:R,toggleAllRowsSelected:M,state:{pageIndex:E,pageSize:A,sortBy:X,filters:H}}=(0,k.useTable)({columns:b,count:r,data:a,disableFilters:!0,disableSortRemove:!0,initialState:m,manualFilters:!0,manualPagination:!0,manualSortBy:!0,autoResetFilters:!1,pageCount:Math.ceil(r/l)},k.useFilters,k.useSortBy,k.usePagination,k.useRowState,k.useRowSelect),[V,z]=(0,i.useState)(g.filters&&n.length?U(n,g.filters):[]);return(0,i.useEffect)((()=>{n.length&&z(U(n,g.filters?g.filters:{}))}),[n]),(0,i.useEffect)((()=>{const t={};V.forEach((e=>{if(void 0!==e.value&&("string"!=typeof e.value||e.value.length>0)){const a=e.urlDisplay||e.id;t[a]=e.value}}));const a={filters:Object.keys(t).length?t:void 0,pageIndex:E};X[0]&&(a.sortColumn=X[0].id,a.sortOrder=X[0].desc?"desc":"asc"),c&&(a.viewMode=f);const r=void 0!==g.pageIndex&&a.pageIndex!==g.pageIndex?"push":"replace";p(a,r),e({pageIndex:E,pageSize:A,sortBy:X,filters:H})}),[e,E,A,X,H]),(0,i.useEffect)((()=>{B()(m.pageIndex,E)||_(m.pageIndex)}),[g]),{canNextPage:T,canPreviousPage:C,getTableBodyProps:w,getTableProps:y,gotoPage:_,headerGroups:x,pageCount:$,prepareRow:Z,rows:S,selectedFlatRows:R,setAllFilters:I,setSortBy:N,state:{pageIndex:E,pageSize:A,sortBy:X,filters:H,internalFilters:V,viewMode:f},toggleAllRowsSelected:M,applyFilterValue:(e,t)=>{z((a=>{if(a[e].value===t)return a;const r={...a[e],value:t},l=function(e,t,a){const r=e.find(((e,a)=>t===a));return[...e.slice(0,t),{...r,...a},...e.slice(t+1)]}(a,e,r);return I(l.filter((e=>!(void 0===e.value||Array.isArray(e.value)&&!e.value.length))).map((({value:e,operator:t,id:a})=>"between"===t&&Array.isArray(e)?[{value:e[0],operator:"gt",id:a},{value:e[1],operator:"lt",id:a}]:{value:e,operator:t,id:a})).flat()),_(0),l}))},setViewMode:v,query:g}}({bulkSelectColumnConfig:ie,bulkSelectMode:f&&Boolean(m.length),columns:e,count:a,data:t,fetchData:n,initialPageSize:r,initialSort:c,initialFilters:h,renderCard:Boolean(w),defaultViewMode:T}),ge=M&&N,pe=Boolean(h.length);if(pe){const t=e.reduce(((e,t)=>({...e,[t.id||t.accessor]:!0})),{});h.forEach((e=>{if(!t[e.id])throw new R(`Invalid filter config, ${e.id} is not present in columns`)}))}const he=(0,i.useRef)(null),me=(0,i.useCallback)((()=>{var e;ue.filters&&(null==(e=he.current)||e.clearFilters())}),[ue.filters]),fe=Boolean(w),[ve,be]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{f||G(!1)}),[f,G]),(0,i.useEffect)((()=>{!s&&J>K-1&&K>0&&j(0)}),[j,s,K,J]),(0,y.BX)(re,{children:[ge&&(0,y.tZ)(x,{show:ve,selected:W,refreshData:o,resourceName:M,addSuccessToast:E,addDangerToast:A,onHide:()=>be(!1)}),(0,y.BX)("div",{className:`superset-list-view ${u}`,children:[(0,y.BX)("div",{className:"header",children:[fe&&(0,y.tZ)(se,{mode:ce,setMode:Y}),(0,y.BX)("div",{className:"controls",children:[pe&&(0,y.tZ)(Q,{ref:he,filters:h,internalFilters:ne,updateFilterValue:q}),"card"===ce&&Z&&(0,y.tZ)(te,{initialSort:de,onChange:e=>L(e),options:Z})]})]}),(0,y.BX)("div",{className:"body "+(0===z.length?"empty":""),children:[f&&(0,y.tZ)(le,{type:"info",closable:!0,showIcon:!1,onClose:v,message:(0,y.BX)(y.HY,{children:[(0,y.tZ)("div",{className:"selectedCopy",children:b(W)}),Boolean(W.length)&&(0,y.BX)(y.HY,{children:[(0,y.tZ)("span",{role:"button",tabIndex:0,className:"deselect-all",onClick:()=>G(!1),children:(0,l.t)("Deselect all")}),(0,y.tZ)("div",{className:"divider"}),m.map((e=>(0,y.tZ)(d.Z,{buttonStyle:e.type,cta:!0,onClick:()=>e.onSelect(W.map((e=>e.original))),children:e.name},e.key))),N&&(0,y.tZ)("span",{role:"button",tabIndex:0,className:"tag-btn",onClick:()=>be(!0),children:(0,l.t)("Add Tag")})]})]})}),"card"===ce&&(0,y.tZ)(C,{bulkSelectEnabled:f,prepareRow:O,renderCard:w,rows:z,loading:s,showThumbnails:S}),"table"===ce&&(0,y.tZ)(p.Z,{getTableProps:X,getTableBodyProps:H,prepareRow:O,headerGroups:V,rows:z,columns:e,loading:s,highlightRowId:$,columnsForWrapText:I}),!s&&0===z.length&&(0,y.tZ)(oe,{className:ce,children:ue.filters?(0,y.tZ)(ae.XJ,{title:(0,l.t)("No results match your filter criteria"),description:(0,l.t)("Try different criteria to display results."),image:"filter-results.svg",buttonAction:()=>me(),buttonText:(0,l.t)("clear all filters")}):(0,y.tZ)(ae.XJ,{..._,title:(null==_?void 0:_.title)||(0,l.t)("No Data"),image:(null==_?void 0:_.image)||"filter-results.svg"})})]})]}),z.length>0&&(0,y.BX)("div",{className:"pagination-container",children:[(0,y.tZ)(g.Z,{totalPages:K||0,currentPage:K&&J<K?J+1:0,onChange:e=>j(e-1),hideFirstAndLastPageLinks:!0}),(0,y.tZ)("div",{className:"row-count-container",children:!s&&(0,l.t)("%s-%s of %s",ee*J+(z.length&&1),ee*J+z.length,a)})]})]})};var ce;!function(e){e.StartsWith="sw",e.EndsWith="ew",e.Contains="ct",e.Equals="eq",e.NotStartsWith="nsw",e.NotEndsWith="new",e.NotContains="nct",e.NotEquals="neq",e.GreaterThan="gt",e.LessThan="lt",e.RelationManyMany="rel_m_m",e.RelationOneMany="rel_o_m",e.TitleOrSlug="title_or_slug",e.NameOrDescription="name_or_description",e.AllText="all_text",e.ChartAllText="chart_all_text",e.DatasetIsNullOrEmpty="dataset_is_null_or_empty",e.Between="between",e.DashboardIsFav="dashboard_is_favorite",e.ChartIsFav="chart_is_favorite",e.ChartIsCertified="chart_is_certified",e.DashboardIsCertified="dashboard_is_certified",e.DatasetIsCertified="dataset_is_certified",e.DashboardHasCreatedBy="dashboard_has_created_by",e.ChartHasCreatedBy="chart_has_created_by",e.DashboardTagByName="dashboard_tags",e.DashboardTagById="dashboard_tag_id",e.ChartTagByName="chart_tags",e.ChartTagById="chart_tag_id",e.SavedQueryTagByName="saved_query_tags",e.SavedQueryTagById="saved_query_tag_id"}(ce||(ce={}))},60718:(e,t,a)=>{a.d(t,{m:()=>g});var r=a(31069),l=a(61988),i=a(44818),n=a(15926),o=a.n(n),s=a(65108);const d=new Map,c=(0,s.g)(r.Z.get,d,(({endpoint:e})=>e||"")),u=e=>({value:e.id,label:e.name,key:e.id}),g=async(e,t,a)=>{const r="name",n=o().encode({filters:[{col:r,opr:"ct",value:e},{col:"type",opr:"custom_tag",value:!0}],page:t,page_size:a,order_column:r,order_direction:"asc"});return c({endpoint:`/api/v1/tag/?q=${n}`}).then((e=>({data:e.json.result.map(u),totalCount:e.json.count}))).catch((async e=>{const t=(({error:e,message:t})=>{let a=t||e||(0,l.t)("An error has occurred");return"Forbidden"===t&&(a=(0,l.t)("You do not have permission to read tags")),a})(await(0,i.O$)(e));throw new Error(t)}))}},65108:(e,t,a)=>{a.d(t,{g:()=>r});const r=(e,t,a=((...e)=>JSON.stringify([...e])))=>(...r)=>{const l=a(...r);if(t.has(l))return t.get(l);const i=e(...r);return t.set(l,i),i}}}]);
//# sourceMappingURL=3e819db989d8bc1800ee.chunk.js.map
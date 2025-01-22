"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6284],{86074:(e,t,i)=>{i.d(t,{Z:()=>$});var r=i(23279),n=i.n(r),a=i(67294),o=i(16550),l=i(73727),s=i(51995),d=i(11965),c=i(61988),h=i(93967),u=i.n(h),m=i(58593),g=i(4715),p=i(83862),b=i(35932),v=i(13322),y=i(35944);const x=s.iK.div`
  margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
  .header {
    font-weight: ${({theme:e})=>e.typography.weights.bold};
    margin-right: ${({theme:e})=>3*e.gridUnit}px;
    text-align: left;
    font-size: 18px;
    padding: ${({theme:e})=>3*e.gridUnit}px;
    display: inline-block;
    line-height: ${({theme:e})=>9*e.gridUnit}px;
  }
  .nav-right {
    display: flex;
    align-items: center;
    padding: ${({theme:e})=>3.5*e.gridUnit}px 0;
    margin-right: ${({theme:e})=>3*e.gridUnit}px;
    float: right;
    position: absolute;
    right: 0;
    ul.ant-menu-root {
      padding: 0px;
    }
    li[role='menuitem'] {
      border: 0;
      border-bottom: none;
      &:hover {
        border-bottom: transparent;
      }
    }
  }
  .nav-right-collapse {
    display: flex;
    align-items: center;
    padding: 14px 0;
    margin-right: 0;
    float: left;
    padding-left: 10px;
  }
  .menu {
    background-color: ${({theme:e})=>e.colors.grayscale.light5};
    .ant-menu-horizontal {
      line-height: inherit;
      .ant-menu-item {
        border-bottom: none;
        &:hover {
          border-bottom: none;
          text-decoration: none;
        }
      }
    }
    .ant-menu {
      padding: ${({theme:e})=>4*e.gridUnit}px 0px;
    }
  }

  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item {
    margin: 0 ${({theme:e})=>e.gridUnit+1}px;
  }

  .menu .ant-menu-item {
    li,
    div {
      a,
      div {
        font-size: ${({theme:e})=>e.typography.sizes.s}px;
        color: ${({theme:e})=>e.colors.secondary.dark1};

        a {
          margin: 0;
          padding: ${({theme:e})=>2*e.gridUnit}px
            ${({theme:e})=>4*e.gridUnit}px;
          line-height: ${({theme:e})=>5*e.gridUnit}px;

          &:hover {
            text-decoration: none;
          }
        }
      }

      &.no-router a {
        padding: ${({theme:e})=>2*e.gridUnit}px
          ${({theme:e})=>4*e.gridUnit}px;
      }

      &.active a {
        background: ${({theme:e})=>e.colors.secondary.light4};
        border-radius: ${({theme:e})=>e.borderRadius}px;
      }
    }

    li.active > a,
    li.active > div,
    div.active > div,
    li > a:hover,
    li > a:focus,
    li > div:hover,
    div > div:hover,
    div > a:hover {
      background: ${({theme:e})=>e.colors.secondary.light4};
      border-bottom: none;
      border-radius: ${({theme:e})=>e.borderRadius}px;
      margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
      text-decoration: none;
    }
  }

  .btn-link {
    padding: 10px 0;
  }
  .ant-menu-horizontal {
    border: none;
  }
  @media (max-width: 767px) {
    .header,
    .nav-right {
      position: relative;
      margin-left: ${({theme:e})=>2*e.gridUnit}px;
    }
  }
  .ant-menu-submenu {
    span[role='img'] {
      position: absolute;
      right: ${({theme:e})=>-e.gridUnit-2}px;
      top: ${({theme:e})=>e.gridUnit+1}px !important;
    }
  }
  .dropdown-menu-links > div.ant-menu-submenu-title,
  .ant-menu-submenu-open.ant-menu-submenu-active > div.ant-menu-submenu-title {
    color: ${({theme:e})=>e.colors.primary.dark1};
  }
`,Z=e=>d.iv`
  color: ${e.colors.grayscale.light1};
  cursor: not-allowed;

  &:hover {
    color: ${e.colors.grayscale.light1};
  }

  .ant-menu-item-selected {
    background-color: ${e.colors.grayscale.light1};
  }
`,{SubMenu:f}=p.MainNav,$=e=>{var t,i,r;const[s,d]=(0,a.useState)("horizontal"),[h,$]=(0,a.useState)("nav-right");let w=!0;try{(0,o.k6)()}catch(e){w=!1}return(0,a.useEffect)((()=>{function t(){window.innerWidth<=767?d("inline"):d("horizontal"),e.buttons&&e.buttons.length>=3&&window.innerWidth>=795?$("nav-right"):e.buttons&&e.buttons.length>=3&&window.innerWidth<=795&&$("nav-right-collapse")}t();const i=n()(t,10);return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)}),[e.buttons]),(0,y.BX)(x,{children:[(0,y.BX)(g.X2,{className:"menu",role:"navigation",children:[e.name&&(0,y.tZ)("div",{className:"header",children:e.name}),(0,y.tZ)(p.Menu,{mode:s,style:{backgroundColor:"transparent"},children:null==(t=e.tabs)?void 0:t.map((t=>(e.usesRouter||w)&&t.usesRouter?(0,y.tZ)(p.Menu.Item,{children:(0,y.tZ)("div",{role:"tab",className:t.name===e.activeChild?"active":"",children:(0,y.tZ)("div",{children:(0,y.tZ)(l.rU,{to:t.url||"",children:t.label})})})},t.label):(0,y.tZ)(p.Menu.Item,{children:(0,y.tZ)("div",{className:u()("no-router",{active:t.name===e.activeChild}),role:"tab",children:(0,y.tZ)("a",{href:t.url,onClick:t.onClick,children:t.label})})},t.label)))}),(0,y.BX)("div",{className:h,children:[(0,y.tZ)(p.Menu,{mode:"horizontal",triggerSubMenuAction:"click",children:null==(i=e.dropDownLinks)?void 0:i.map(((e,t)=>{var i;return(0,y.tZ)(f,{title:e.label,icon:(0,y.tZ)(v.Z.TriangleDown,{}),popupOffset:[10,20],className:"dropdown-menu-links",children:null==(i=e.childs)?void 0:i.map((e=>"object"==typeof e?e.disable?(0,y.tZ)(p.MainNav.Item,{css:Z,disabled:!0,children:(0,y.tZ)(m.u,{placement:"top",title:(0,c.t)("Enable 'Allow file uploads to database' in any database's settings"),children:e.label})},e.label):(0,y.tZ)(p.MainNav.Item,{children:(0,y.tZ)("a",{href:e.url,onClick:e.onClick,children:e.label})},e.label):null))},t)}))}),null==(r=e.buttons)?void 0:r.map(((e,t)=>(0,y.tZ)(b.Z,{buttonStyle:e.buttonStyle,onClick:e.onClick,children:e.name},t)))]})]}),e.children]})}},36444:(e,t,i)=>{i.r(t),i.d(t,{default:()=>F});var r=i(67294),n=i(16550),a=i(73727),o=i(51995),l=i(61988),s=i(31069),d=i(43716),c=i(30381),h=i.n(c),u=i(40768),m=i(14114),g=i(34858),p=i(37921),b=i(86074),v=i(99075),y=i(33726),x=i(93139),Z=i(58593),f=i(90854),$=i(33743),w=i(120),k=i(27600),S=i(12),q=i(13322),C=i(74069),U=i(93967),T=i.n(U),z=i(35932),H=i(6189),D=i(86185),N=i(35944);const B=o.iK.div`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin-bottom: 0;
  text-transform: uppercase;
`,L=o.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
  padding: 4px 0 24px 0;
`,J=o.iK.div`
  margin: 0 0 ${({theme:e})=>6*e.gridUnit}px 0;
`,K=o.iK.div`
  display: inline;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  padding: ${({theme:e})=>2*e.gridUnit}px
    ${({theme:e})=>4*e.gridUnit}px;
  margin-right: ${({theme:e})=>4*e.gridUnit}px;
  color: ${({theme:e})=>e.colors.secondary.dark1};

  &.active,
  &:focus,
  &:hover {
    background: ${({theme:e})=>e.colors.secondary.light4};
    border-bottom: none;
    border-radius: ${({theme:e})=>e.borderRadius}px;
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  &:hover:not(.active) {
    background: ${({theme:e})=>e.colors.secondary.light5};
  }
`,M=(0,o.iK)(C.default)`
  .ant-modal-body {
    padding: ${({theme:e})=>6*e.gridUnit}px;
  }

  pre {
    font-size: ${({theme:e})=>e.typography.sizes.xs}px;
    font-weight: ${({theme:e})=>e.typography.weights.normal};
    line-height: ${({theme:e})=>e.typography.sizes.l}px;
    height: 375px;
    border: none;
  }
`,R=(0,m.ZP)((function({onHide:e,openInSqlLab:t,queries:i,query:n,fetchData:a,show:o,addDangerToast:s,addSuccessToast:d}){const{handleKeyPress:c,handleDataChange:h,disablePrevious:u,disableNext:m}=(0,D.Z)({queries:i,currentQueryId:n.id,fetchData:a}),[g,p]=(0,r.useState)("user"),{id:b,sql:v,executed_sql:y}=n;return(0,N.tZ)("div",{role:"none",onKeyUp:c,children:(0,N.BX)(M,{onHide:e,show:o,title:(0,l.t)("Query preview"),footer:(0,N.BX)(N.HY,{children:[(0,N.tZ)(z.Z,{disabled:u,onClick:()=>h(!0),children:(0,l.t)("Previous")},"previous-query"),(0,N.tZ)(z.Z,{disabled:m,onClick:()=>h(!1),children:(0,l.t)("Next")},"next-query"),(0,N.tZ)(z.Z,{buttonStyle:"primary",onClick:()=>t(b),children:(0,l.t)("Open in SQL Lab")},"open-in-sql-lab")]}),children:[(0,N.tZ)(B,{children:(0,l.t)("Tab name")}),(0,N.tZ)(L,{children:n.tab_name}),(0,N.BX)(J,{children:[(0,N.tZ)(K,{role:"button",className:T()({active:"user"===g}),onClick:()=>p("user"),children:(0,l.t)("User query")}),(0,N.tZ)(K,{role:"button",className:T()({active:"executed"===g}),onClick:()=>p("executed"),children:(0,l.t)("Executed query")})]}),(0,N.tZ)(H.Z,{addDangerToast:s,addSuccessToast:d,language:"sql",children:("user"===g?v:y)||""})]})})}));var I=i(72570),X=i(83379);const _=(0,o.iK)(x.Z)`
  table .table-cell {
    vertical-align: top;
  }
`;f.Z.registerLanguage("sql",$.Z);const A=(0,o.iK)(f.Z)`
  height: ${({theme:e})=>26*e.gridUnit}px;
  overflow: hidden !important; /* needed to override inline styles */
  text-overflow: ellipsis;
  white-space: nowrap;
`,O=o.iK.div`
  .count {
    margin-left: 5px;
    color: ${({theme:e})=>e.colors.primary.base};
    text-decoration: underline;
    cursor: pointer;
  }
`,Q=o.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
`,E=(0,o.iK)(p.Z)`
  text-align: left;
  font-family: ${({theme:e})=>e.typography.families.monospace};
`,F=(0,m.ZP)((function({addDangerToast:e}){const{state:{loading:t,resourceCount:i,resourceCollection:c},fetchData:m}=(0,g.Yi)("query",(0,l.t)("Query history"),e,!1),[p,f]=(0,r.useState)(),$=(0,o.Fg)(),C=(0,n.k6)(),U=(0,r.useCallback)((t=>{s.Z.get({endpoint:`/api/v1/query/${t}`}).then((({json:e={}})=>{f({...e.result})}),(0,u.v$)((t=>e((0,l.t)("There was an issue previewing the selected query. %s",t)))))}),[e]),T={activeChild:"Query history",...y.Y},z=[{id:S.J.StartTime,desc:!0}],H=(0,r.useMemo)((()=>[{Cell:({row:{original:{status:e}}})=>{const t={name:null,label:""};return e===d.Tb.Success?(t.name=(0,N.tZ)(q.Z.Check,{iconColor:$.colors.success.base}),t.label=(0,l.t)("Success")):e===d.Tb.Failed||e===d.Tb.Stopped?(t.name=(0,N.tZ)(q.Z.XSmall,{iconColor:e===d.Tb.Failed?$.colors.error.base:$.colors.grayscale.base}),t.label=(0,l.t)("Failed")):e===d.Tb.Running?(t.name=(0,N.tZ)(q.Z.Running,{iconColor:$.colors.primary.base}),t.label=(0,l.t)("Running")):e===d.Tb.TimedOut?(t.name=(0,N.tZ)(q.Z.Offline,{iconColor:$.colors.grayscale.light1}),t.label=(0,l.t)("Offline")):e!==d.Tb.Scheduled&&e!==d.Tb.Pending||(t.name=(0,N.tZ)(q.Z.Queued,{iconColor:$.colors.grayscale.base}),t.label=(0,l.t)("Scheduled")),(0,N.tZ)(Z.u,{title:t.label,placement:"bottom",children:(0,N.tZ)("span",{children:t.name})})},accessor:S.J.Status,size:"xs",disableSortBy:!0},{accessor:S.J.StartTime,Header:(0,l.t)("Time"),size:"xl",Cell:({row:{original:{start_time:e}}})=>{const t=h().utc(e).local().format(k.v2).split(" ");return(0,N.BX)(N.HY,{children:[t[0]," ",(0,N.tZ)("br",{}),t[1]]})}},{Header:(0,l.t)("Duration"),size:"xl",Cell:({row:{original:{status:e,start_time:t,end_time:i}}})=>{const r=e===d.Tb.Failed?"danger":e,n=i?h()(h().utc(i-t)).format(k.n2):"00:00:00.000";return(0,N.tZ)(E,{type:r,role:"timer",children:n})}},{accessor:S.J.TabName,Header:(0,l.t)("Tab name"),size:"xl"},{accessor:S.J.DatabaseName,Header:(0,l.t)("Database"),size:"xl"},{accessor:S.J.Database,hidden:!0},{accessor:S.J.Schema,Header:(0,l.t)("Schema"),size:"xl"},{Cell:({row:{original:{sql_tables:e=[]}}})=>{const t=e.map((e=>e.table)),i=t.length>0?t.shift():"";return t.length?(0,N.BX)(O,{children:[(0,N.tZ)("span",{children:i}),(0,N.tZ)(v.J,{placement:"right",title:(0,l.t)("TABLES"),trigger:"click",content:(0,N.tZ)(N.HY,{children:t.map((e=>(0,N.tZ)(Q,{children:e},e)))}),children:(0,N.BX)("span",{className:"count",children:["(+",t.length,")"]})})]}):i},accessor:S.J.SqlTables,Header:(0,l.t)("Tables"),size:"xl",disableSortBy:!0},{accessor:S.J.UserFirstName,Header:(0,l.t)("User"),size:"xl",Cell:({row:{original:{user:e}}})=>(0,X.Z)(e)},{accessor:S.J.User,hidden:!0},{accessor:S.J.Rows,Header:(0,l.t)("Rows"),size:"md"},{accessor:S.J.Sql,Header:(0,l.t)("SQL"),Cell:({row:{original:e,id:t}})=>(0,N.tZ)("div",{tabIndex:0,role:"button",onClick:()=>f(e),children:(0,N.tZ)(A,{language:"sql",style:w.Z,children:(0,u.IB)(e.sql,4)})})},{Header:(0,l.t)("Actions"),id:"actions",disableSortBy:!0,Cell:({row:{original:{id:e}}})=>(0,N.tZ)(Z.u,{title:(0,l.t)("Open query in SQL Lab"),placement:"bottom",children:(0,N.tZ)(a.rU,{to:`/sqllab?queryId=${e}`,children:(0,N.tZ)(q.Z.Full,{iconColor:$.colors.grayscale.base})})})}]),[]),D=(0,r.useMemo)((()=>[{Header:(0,l.t)("Database"),key:"database",id:"database",input:"select",operator:x.p.RelationOneMany,unfilteredLabel:(0,l.t)("All"),fetchSelects:(0,u.tm)("query","database",(0,u.v$)((t=>e((0,l.t)("An error occurred while fetching database values: %s",t))))),paginate:!0},{Header:(0,l.t)("State"),key:"state",id:"status",input:"select",operator:x.p.Equals,unfilteredLabel:"All",fetchSelects:(0,u.wk)("query","status",(0,u.v$)((t=>e((0,l.t)("An error occurred while fetching schema values: %s",t))))),paginate:!0},{Header:(0,l.t)("User"),key:"user",id:"user",input:"select",operator:x.p.RelationOneMany,unfilteredLabel:"All",fetchSelects:(0,u.tm)("query","user",(0,u.v$)((t=>e((0,l.t)("An error occurred while fetching user values: %s",t))))),paginate:!0},{Header:(0,l.t)("Time range"),key:"start_time",id:"start_time",input:"datetime_range",operator:x.p.Between},{Header:(0,l.t)("Search by query text"),key:"sql",id:"sql",input:"search",operator:x.p.Contains}]),[e]);return(0,N.BX)(N.HY,{children:[(0,N.tZ)(b.Z,{...T}),p&&(0,N.tZ)(R,{onHide:()=>f(void 0),query:p,queries:c,fetchData:U,openInSqlLab:e=>C.push(`/sqllab?queryId=${e}`),show:!0}),(0,N.tZ)(_,{className:"query-history-list-view",columns:H,count:i,data:c,fetchData:m,filters:D,initialSort:z,loading:t,pageSize:25,highlightRowId:null==p?void 0:p.id,refreshData:()=>{},addDangerToast:e,addSuccessToast:I.ws})]})}))},83379:(e,t,i)=>{function r(e){return e?`${e.first_name} ${e.last_name}`:""}i.d(t,{Z:()=>r})}}]);
//# sourceMappingURL=3fdbe184dd33634f20f9.chunk.js.map
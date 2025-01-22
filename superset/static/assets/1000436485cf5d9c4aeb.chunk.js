"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4502],{52630:(e,t,a)=>{t.iB=t.YM=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i=l(a(67294)),o=l(a(45697)),r=a(2371);function l(e){return e&&e.__esModule?e:{default:e}}t.YM=function(e){var t=e.itemTypeToComponent,a=e.WrapperComponent,l=void 0===a?"div":a,s=function(e){var a=e.currentPage,o=e.totalPages,s=e.boundaryPagesRange,d=e.siblingPagesRange,c=e.hideEllipsis,u=e.hidePreviousAndNextPageLinks,h=e.hideFirstAndLastPageLinks,g=e.onChange,p=e.disabled,b=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["currentPage","totalPages","boundaryPagesRange","siblingPagesRange","hideEllipsis","hidePreviousAndNextPageLinks","hideFirstAndLastPageLinks","onChange","disabled"]),m=(0,r.getPaginationModel)({currentPage:a,totalPages:o,boundaryPagesRange:s,siblingPagesRange:d,hideEllipsis:c,hidePreviousAndNextPageLinks:u,hideFirstAndLastPageLinks:h}),v=function(e,t,a){return function(o){var r,l,s,d=e[o.type],c=(l=(r=o).value,s=r.isDisabled,function(){!s&&a&&t!==l&&a(l)});return i.default.createElement(d,n({onClick:c},o))}}(t,a,g);return i.default.createElement(l,b,m.map((function(e){return v(n({},e,{isDisabled:!!p}))})))};return s.propTypes={currentPage:o.default.number.isRequired,totalPages:o.default.number.isRequired,boundaryPagesRange:o.default.number,siblingPagesRange:o.default.number,hideEllipsis:o.default.bool,hidePreviousAndNextPageLinks:o.default.bool,hideFirstAndLastPageLinks:o.default.bool,onChange:o.default.func,disabled:o.default.bool},s},t.iB=r.ITEM_TYPES},54070:(e,t,a)=>{a.d(t,{w:()=>l});var n=a(58593),i=a(83379),o=a(61988),r=a(35944);const l=({user:e,date:t})=>{const a=(0,r.tZ)("span",{className:"no-wrap",children:t});if(e){const t=(0,i.Z)(e),l=(0,o.t)("Modified by: %s",t);return(0,r.tZ)(n.u,{title:l,placement:"bottom",children:a})}return a}},17198:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(51995),i=a(61988),o=a(67294),r=a(9875),l=a(74069),s=a(49238),d=a(35944);const c=n.iK.div`
  padding-top: 8px;
  width: 50%;
  label {
    color: ${({theme:e})=>e.colors.grayscale.base};
    text-transform: uppercase;
  }
`,u=n.iK.div`
  line-height: ${({theme:e})=>4*e.gridUnit}px;
  padding-top: 16px;
`;function h({description:e,onConfirm:t,onHide:a,open:n,title:h}){const[g,p]=(0,o.useState)(!0),[b,m]=(0,o.useState)(""),v=()=>{m(""),t()};return(0,d.BX)(l.default,{disablePrimaryButton:g,onHide:()=>{m(""),a()},onHandledPrimaryAction:v,primaryButtonName:(0,i.t)("delete"),primaryButtonType:"danger",show:n,title:h,children:[(0,d.tZ)(u,{children:e}),(0,d.BX)(c,{children:[(0,d.tZ)(s.lX,{htmlFor:"delete",children:(0,i.t)('Type "%s" to confirm',(0,i.t)("DELETE"))}),(0,d.tZ)(r.II,{type:"text",id:"delete",autoComplete:"off",value:b,onChange:e=>{var t;const a=null!=(t=e.target.value)?t:"";p(a.toUpperCase()!==(0,i.t)("DELETE")),m(a)},onPressEnter:()=>{g||v()}})]})]})}},86074:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(23279),i=a.n(n),o=a(67294),r=a(16550),l=a(73727),s=a(51995),d=a(11965),c=a(61988),u=a(93967),h=a.n(u),g=a(58593),p=a(4715),b=a(83862),m=a(35932),v=a(13322),E=a(35944);const _=s.iK.div`
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
`,P=e=>d.iv`
  color: ${e.colors.grayscale.light1};
  cursor: not-allowed;

  &:hover {
    color: ${e.colors.grayscale.light1};
  }

  .ant-menu-item-selected {
    background-color: ${e.colors.grayscale.light1};
  }
`,{SubMenu:f}=b.MainNav,y=e=>{var t,a,n;const[s,d]=(0,o.useState)("horizontal"),[u,y]=(0,o.useState)("nav-right");let S=!0;try{(0,r.k6)()}catch(e){S=!1}return(0,o.useEffect)((()=>{function t(){window.innerWidth<=767?d("inline"):d("horizontal"),e.buttons&&e.buttons.length>=3&&window.innerWidth>=795?y("nav-right"):e.buttons&&e.buttons.length>=3&&window.innerWidth<=795&&y("nav-right-collapse")}t();const a=i()(t,10);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)}),[e.buttons]),(0,E.BX)(_,{children:[(0,E.BX)(p.X2,{className:"menu",role:"navigation",children:[e.name&&(0,E.tZ)("div",{className:"header",children:e.name}),(0,E.tZ)(b.Menu,{mode:s,style:{backgroundColor:"transparent"},children:null==(t=e.tabs)?void 0:t.map((t=>(e.usesRouter||S)&&t.usesRouter?(0,E.tZ)(b.Menu.Item,{children:(0,E.tZ)("div",{role:"tab",className:t.name===e.activeChild?"active":"",children:(0,E.tZ)("div",{children:(0,E.tZ)(l.rU,{to:t.url||"",children:t.label})})})},t.label):(0,E.tZ)(b.Menu.Item,{children:(0,E.tZ)("div",{className:h()("no-router",{active:t.name===e.activeChild}),role:"tab",children:(0,E.tZ)("a",{href:t.url,onClick:t.onClick,children:t.label})})},t.label)))}),(0,E.BX)("div",{className:u,children:[(0,E.tZ)(b.Menu,{mode:"horizontal",triggerSubMenuAction:"click",children:null==(a=e.dropDownLinks)?void 0:a.map(((e,t)=>{var a;return(0,E.tZ)(f,{title:e.label,icon:(0,E.tZ)(v.Z.TriangleDown,{}),popupOffset:[10,20],className:"dropdown-menu-links",children:null==(a=e.childs)?void 0:a.map((e=>"object"==typeof e?e.disable?(0,E.tZ)(b.MainNav.Item,{css:P,disabled:!0,children:(0,E.tZ)(g.u,{placement:"top",title:(0,c.t)("Enable 'Allow file uploads to database' in any database's settings"),children:e.label})},e.label):(0,E.tZ)(b.MainNav.Item,{children:(0,E.tZ)("a",{href:e.url,onClick:e.onClick,children:e.label})},e.label):null))},t)}))}),null==(n=e.buttons)?void 0:n.map(((e,t)=>(0,E.tZ)(m.Z,{buttonStyle:e.buttonStyle,onClick:e.onClick,children:e.name},t)))]})]}),e.children]})}},95731:(e,t,a)=>{a.r(t),a.d(t,{default:()=>U});var n=a(75049),i=a(51995),o=a(61988),r=a(31069),l=a(67294),s=a(15926),d=a.n(s),c=a(28216),u=a(35755),h=a(61337),g=a(38703),p=a(34858),b=a(40768),m=a(14114),v=a(86074),E=a(17198),_=a(23525),P=a(27600),f=a(58593),y=a(13322),S=a(22318),w=a(93139),L=a(32228),I=a(19235),Z=a(93628),N=a(54070),x=a(12),T=a(35944);const k=(0,n.I)(),A=k.get("database.delete.related"),M=k.get("databaseconnection.extraOption"),C=(0,i.iK)(y.Z.Check)`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
`,$=(0,i.iK)(y.Z.CancelX)`
  color: ${({theme:e})=>e.colors.grayscale.light1};
`,R=i.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.base};

  .action-button {
    display: inline-block;
    height: 100%;
  }
`;function K({value:e}){return e?(0,T.tZ)(C,{}):(0,T.tZ)($,{})}const U=(0,m.ZP)((function({addDangerToast:e,addSuccessToast:t,user:a}){const{state:{loading:n,resourceCount:i,resourceCollection:s},hasPerm:m,fetchData:k,refreshData:C}=(0,p.Yi)("database",(0,o.t)("database"),e),$=(0,c.v9)((e=>e.user)),U=(0,_.eY)(P.KD.showDatabaseModal),[D,Y]=(0,u.Kx)({databaseAdded:u.dJ}),[O,G]=(0,l.useState)(U||!1),[H,F]=(0,l.useState)(null),[X,z]=(0,l.useState)(null),[B,q]=(0,l.useState)(!1),[j,V]=(0,l.useState)(!1),[Q,W]=(0,l.useState)(!1),[J,ee]=(0,l.useState)(!1),te=(0,S.i5)($),ae=J||te,[ne,ie]=(0,l.useState)(!1),{roles:oe}=$,{CSV_EXTENSIONS:re,COLUMNAR_EXTENSIONS:le,EXCEL_EXTENSIONS:se,ALLOWED_EXTENSIONS:de}=(0,c.v9)((e=>e.common.conf));function ce({database:e=null,modalOpen:t=!1}={}){z(e),G(t)}(0,l.useEffect)((()=>{null!=D&&D.databaseAdded&&(Y({databaseAdded:void 0}),C())}),[D,Y,C]);const ue=m("can_write"),he=m("can_write"),ge=m("can_write"),pe=m("can_export"),{canUploadCSV:be,canUploadColumnar:me,canUploadExcel:ve}=(0,b.Mc)(oe,re,le,se,de),Ee=te&&!J,_e=[{label:(0,o.t)("Upload file to database"),childs:[{label:(0,o.t)("Upload CSV"),name:"Upload CSV file",url:"#",onClick:()=>{q(!0)},perm:be&&ae,disable:Ee},{label:(0,o.t)("Upload Excel"),name:"Upload Excel file",url:"#",onClick:()=>{V(!0)},perm:ve&&ae,disable:Ee},{label:(0,o.t)("Upload Columnar"),name:"Upload columnar file",url:"#",onClick:()=>{W(!0)},perm:me&&ae,disable:Ee}]}];(0,l.useEffect)((()=>{r.Z.get({endpoint:`/api/v1/database/?q=${d().encode({filters:[{col:"allow_file_upload",opr:"upload_is_enabled",value:!0}]})}`}).then((({json:e})=>{var t;const a=(null==e||null==(t=e.result)?void 0:t.filter((e=>{var t;return null==e||null==(t=e.engine_information)?void 0:t.supports_file_upload})))||[];ee((null==a?void 0:a.length)>=1)}))}),[O]);const Pe={activeChild:"Databases",dropDownLinks:_e.reduce(((e,t)=>(t.childs=t.childs.filter((e=>e.perm)),t.childs.length?(e.push(t),e):e)),[]),name:(0,o.t)("Databases")};ue&&(Pe.buttons=[{name:(0,T.BX)(T.HY,{children:[(0,T.tZ)("i",{className:"fa fa-plus"})," ",(0,o.t)("Database")," "]}),buttonStyle:"primary",onClick:()=>{ce({modalOpen:!0})}}]);const fe=(0,l.useMemo)((()=>[{accessor:"database_name",Header:(0,o.t)("Name")},{accessor:"backend",Header:(0,o.t)("Backend"),size:"lg",disableSortBy:!0},{accessor:"allow_run_async",Header:(0,T.tZ)(f.u,{id:"allow-run-async-header-tooltip",title:(0,o.t)("Asynchronous query execution"),placement:"top",children:(0,T.tZ)("span",{children:(0,o.t)("AQE")})}),Cell:({row:{original:{allow_run_async:e}}})=>(0,T.tZ)(K,{value:e}),size:"sm"},{accessor:"allow_dml",Header:(0,T.tZ)(f.u,{id:"allow-dml-header-tooltip",title:(0,o.t)("Allow data manipulation language"),placement:"top",children:(0,T.tZ)("span",{children:(0,o.t)("DML")})}),Cell:({row:{original:{allow_dml:e}}})=>(0,T.tZ)(K,{value:e}),size:"sm"},{accessor:"allow_file_upload",Header:(0,o.t)("File upload"),Cell:({row:{original:{allow_file_upload:e}}})=>(0,T.tZ)(K,{value:e}),size:"md"},{accessor:"expose_in_sqllab",Header:(0,o.t)("Expose in SQL Lab"),Cell:({row:{original:{expose_in_sqllab:e}}})=>(0,T.tZ)(K,{value:e}),size:"md"},{Cell:({row:{original:{changed_by:e,changed_on_delta_humanized:t}}})=>(0,T.tZ)(N.w,{date:t,user:e}),Header:(0,o.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:e}})=>he||ge||pe?(0,T.BX)(R,{className:"actions",children:[ge&&(0,T.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return t=e,r.Z.get({endpoint:`/api/v1/database/${t.id}/related_objects/`}).then((({json:e={}})=>{F({...t,chart_count:e.charts.count,dashboard_count:e.dashboards.count,sqllab_tab_count:e.sqllab_tab_states.count})})).catch((0,b.v$)((e=>(0,o.t)("An error occurred while fetching database related data: %s",e))));var t},children:(0,T.tZ)(f.u,{id:"delete-action-tooltip",title:(0,o.t)("Delete database"),placement:"bottom",children:(0,T.tZ)(y.Z.Trash,{})})}),pe&&(0,T.tZ)(f.u,{id:"export-action-tooltip",title:(0,o.t)("Export"),placement:"bottom",children:(0,T.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{var t;void 0!==(t=e).id&&((0,L.Z)("database",[t.id],(()=>{ie(!1)})),ie(!0))},children:(0,T.tZ)(y.Z.Share,{})})}),he&&(0,T.tZ)(f.u,{id:"edit-action-tooltip",title:(0,o.t)("Edit"),placement:"bottom",children:(0,T.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>ce({database:e,modalOpen:!0}),children:(0,T.tZ)(y.Z.EditAlt,{})})})]}):null,Header:(0,o.t)("Actions"),id:"actions",hidden:!he&&!ge,disableSortBy:!0},{accessor:x.J.ChangedBy,hidden:!0}]),[ge,he,pe]),ye=(0,l.useMemo)((()=>[{Header:(0,o.t)("Name"),key:"search",id:"database_name",input:"search",operator:w.p.Contains},{Header:(0,o.t)("Expose in SQL Lab"),key:"expose_in_sql_lab",id:"expose_in_sqllab",input:"select",operator:w.p.Equals,unfilteredLabel:(0,o.t)("All"),selects:[{label:(0,o.t)("Yes"),value:!0},{label:(0,o.t)("No"),value:!1}]},{Header:(0,T.tZ)(f.u,{id:"allow-run-async-filter-header-tooltip",title:(0,o.t)("Asynchronous query execution"),placement:"top",children:(0,T.tZ)("span",{children:(0,o.t)("AQE")})}),key:"allow_run_async",id:"allow_run_async",input:"select",operator:w.p.Equals,unfilteredLabel:(0,o.t)("All"),selects:[{label:(0,o.t)("Yes"),value:!0},{label:(0,o.t)("No"),value:!1}]},{Header:(0,o.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:w.p.RelationOneMany,unfilteredLabel:(0,o.t)("All"),fetchSelects:(0,b.tm)("database","changed_by",(0,b.v$)((e=>(0,o.t)("An error occurred while fetching dataset datasource values: %s",e))),a),paginate:!0}]),[]);return(0,T.BX)(T.HY,{children:[(0,T.tZ)(v.Z,{...Pe}),(0,T.tZ)(I.ZP,{databaseId:null==X?void 0:X.id,show:O,onHide:ce,onDatabaseAdd:()=>{C()}}),(0,T.tZ)(Z.Z,{addDangerToast:e,addSuccessToast:t,onHide:()=>{q(!1)},show:B,allowedExtensions:re,type:"csv"}),(0,T.tZ)(Z.Z,{addDangerToast:e,addSuccessToast:t,onHide:()=>{V(!1)},show:j,allowedExtensions:se,type:"excel"}),(0,T.tZ)(Z.Z,{addDangerToast:e,addSuccessToast:t,onHide:()=>{W(!1)},show:Q,allowedExtensions:le,type:"columnar"}),H&&(0,T.tZ)(E.Z,{description:(0,T.BX)(T.HY,{children:[(0,T.tZ)("p",{children:(0,o.t)("The database %s is linked to %s charts that appear on %s dashboards and users have %s SQL Lab tabs using this database open. Are you sure you want to continue? Deleting the database will break those objects.",H.database_name,H.chart_count,H.dashboard_count,H.sqllab_tab_count)}),A&&(0,T.tZ)(A,{database:H})]}),onConfirm:()=>{H&&function(a){const{id:n,database_name:i}=a;r.Z.delete({endpoint:`/api/v1/database/${n}`}).then((()=>{C(),t((0,o.t)("Deleted: %s",i)),null!=M&&M.onDelete&&M.onDelete(a),(0,h.LS)(h.dR.Database,null),F(null)}),(0,b.v$)((t=>e((0,o.t)("There was an issue deleting %s: %s",i,t)))))}(H)},onHide:()=>F(null),open:!0,title:(0,o.t)("Delete Database?")}),(0,T.tZ)(w.Z,{className:"database-list-view",columns:fe,count:i,data:s,fetchData:k,filters:ye,initialSort:[{id:"changed_on_delta_humanized",desc:!0}],loading:n,addDangerToast:e,addSuccessToast:t,refreshData:()=>{},pageSize:25}),ne&&(0,T.tZ)(g.Z,{})]})}))},32228:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(89816),i=a(15926),o=a.n(i),r=a(64296);function l(e,t,a,i=200){const l=(0,r.x0)(),s=`/api/v1/${e}/export/?q=${o().encode(t)}&token=${l}`,d=document.createElement("iframe");d.style.display="none",d.src=s,document.body.appendChild(d);const c=window.setInterval((()=>{"done"===(0,n.Z)()[l]&&(window.clearInterval(c),document.body.removeChild(d),a())}),i)}},83379:(e,t,a)=>{function n(e){return e?`${e.first_name} ${e.last_name}`:""}a.d(t,{Z:()=>n})},56590:(e,t)=>{t.ITEM_TYPES={PAGE:"PAGE",ELLIPSIS:"ELLIPSIS",FIRST_PAGE_LINK:"FIRST_PAGE_LINK",PREVIOUS_PAGE_LINK:"PREVIOUS_PAGE_LINK",NEXT_PAGE_LINK:"NEXT_PAGE_LINK",LAST_PAGE_LINK:"LAST_PAGE_LINK"},t.ITEM_KEYS={FIRST_ELLIPSIS:-1,SECOND_ELLIPSIS:-2,FIRST_PAGE_LINK:-3,PREVIOUS_PAGE_LINK:-4,NEXT_PAGE_LINK:-5,LAST_PAGE_LINK:-6}},53804:(e,t,a)=>{var n=a(56590);t.createFirstEllipsis=function(e){return{type:n.ITEM_TYPES.ELLIPSIS,key:n.ITEM_KEYS.FIRST_ELLIPSIS,value:e,isActive:!1}},t.createSecondEllipsis=function(e){return{type:n.ITEM_TYPES.ELLIPSIS,key:n.ITEM_KEYS.SECOND_ELLIPSIS,value:e,isActive:!1}},t.createFirstPageLink=function(e){var t=e.currentPage;return{type:n.ITEM_TYPES.FIRST_PAGE_LINK,key:n.ITEM_KEYS.FIRST_PAGE_LINK,value:1,isActive:1===t}},t.createPreviousPageLink=function(e){var t=e.currentPage;return{type:n.ITEM_TYPES.PREVIOUS_PAGE_LINK,key:n.ITEM_KEYS.PREVIOUS_PAGE_LINK,value:Math.max(1,t-1),isActive:1===t}},t.createNextPageLink=function(e){var t=e.currentPage,a=e.totalPages;return{type:n.ITEM_TYPES.NEXT_PAGE_LINK,key:n.ITEM_KEYS.NEXT_PAGE_LINK,value:Math.min(a,t+1),isActive:t===a}},t.createLastPageLink=function(e){var t=e.currentPage,a=e.totalPages;return{type:n.ITEM_TYPES.LAST_PAGE_LINK,key:n.ITEM_KEYS.LAST_PAGE_LINK,value:a,isActive:t===a}},t.createPageFunctionFactory=function(e){var t=e.currentPage;return function(e){return{type:n.ITEM_TYPES.PAGE,key:e,value:e,isActive:e===t}}}},1158:(e,t)=>{t.createRange=function(e,t){for(var a=[],n=e;n<=t;n++)a.push(n);return a}},2371:(e,t,a)=>{var n=a(1158),i=a(53804);t.getPaginationModel=function(e){if(null==e)throw new Error("getPaginationModel(): options object should be a passed");var t=Number(e.totalPages);if(isNaN(t))throw new Error("getPaginationModel(): totalPages should be a number");if(t<0)throw new Error("getPaginationModel(): totalPages shouldn't be a negative number");var a=Number(e.currentPage);if(isNaN(a))throw new Error("getPaginationModel(): currentPage should be a number");if(a<0)throw new Error("getPaginationModel(): currentPage shouldn't be a negative number");if(a>t)throw new Error("getPaginationModel(): currentPage shouldn't be greater than totalPages");var o=null==e.boundaryPagesRange?1:Number(e.boundaryPagesRange);if(isNaN(o))throw new Error("getPaginationModel(): boundaryPagesRange should be a number");if(o<0)throw new Error("getPaginationModel(): boundaryPagesRange shouldn't be a negative number");var r=null==e.siblingPagesRange?1:Number(e.siblingPagesRange);if(isNaN(r))throw new Error("getPaginationModel(): siblingPagesRange should be a number");if(r<0)throw new Error("getPaginationModel(): siblingPagesRange shouldn't be a negative number");var l=Boolean(e.hidePreviousAndNextPageLinks),s=Boolean(e.hideFirstAndLastPageLinks),d=Boolean(e.hideEllipsis),c=d?0:1,u=[],h=i.createPageFunctionFactory(e);if(s||u.push(i.createFirstPageLink(e)),l||u.push(i.createPreviousPageLink(e)),1+2*c+2*r+2*o>=t){var g=n.createRange(1,t).map(h);u.push.apply(u,g)}else{var p=o,b=n.createRange(1,p).map(h),m=t+1-o,v=t,E=n.createRange(m,v).map(h),_=Math.min(Math.max(a-r,p+c+1),m-c-2*r-1),P=_+2*r,f=n.createRange(_,P).map(h);if(u.push.apply(u,b),!d){var y=_-1,S=(y===p+1?h:i.createFirstEllipsis)(y);u.push(S)}if(u.push.apply(u,f),!d){var w=P+1,L=(w===m-1?h:i.createSecondEllipsis)(w);u.push(L)}u.push.apply(u,E)}return l||u.push(i.createNextPageLink(e)),s||u.push(i.createLastPageLink(e)),u};var o=a(56590);t.ITEM_TYPES=o.ITEM_TYPES,t.ITEM_KEYS=o.ITEM_KEYS}}]);
//# sourceMappingURL=1000436485cf5d9c4aeb.chunk.js.map
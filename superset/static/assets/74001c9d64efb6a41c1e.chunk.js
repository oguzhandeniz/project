"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1611],{52630:(e,t,n)=>{t.iB=t.YM=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=l(n(67294)),r=l(n(45697)),o=n(2371);function l(e){return e&&e.__esModule?e:{default:e}}t.YM=function(e){var t=e.itemTypeToComponent,n=e.WrapperComponent,l=void 0===n?"div":n,s=function(e){var n=e.currentPage,r=e.totalPages,s=e.boundaryPagesRange,d=e.siblingPagesRange,c=e.hideEllipsis,u=e.hidePreviousAndNextPageLinks,h=e.hideFirstAndLastPageLinks,g=e.onChange,m=e.disabled,p=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["currentPage","totalPages","boundaryPagesRange","siblingPagesRange","hideEllipsis","hidePreviousAndNextPageLinks","hideFirstAndLastPageLinks","onChange","disabled"]),b=(0,o.getPaginationModel)({currentPage:n,totalPages:r,boundaryPagesRange:s,siblingPagesRange:d,hideEllipsis:c,hidePreviousAndNextPageLinks:u,hideFirstAndLastPageLinks:h}),v=function(e,t,n){return function(r){var o,l,s,d=e[r.type],c=(l=(o=r).value,s=o.isDisabled,function(){!s&&n&&t!==l&&n(l)});return i.default.createElement(d,a({onClick:c},r))}}(t,n,g);return i.default.createElement(l,p,b.map((function(e){return v(a({},e,{isDisabled:!!m}))})))};return s.propTypes={currentPage:r.default.number.isRequired,totalPages:r.default.number.isRequired,boundaryPagesRange:r.default.number,siblingPagesRange:r.default.number,hideEllipsis:r.default.bool,hidePreviousAndNextPageLinks:r.default.bool,hideFirstAndLastPageLinks:r.default.bool,onChange:r.default.func,disabled:r.default.bool},s},t.iB=o.ITEM_TYPES},19259:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(17198),r=n(35944);function o({title:e,description:t,onConfirm:n,children:o}){const[l,s]=(0,a.useState)(!1),[d,c]=(0,a.useState)([]),u=()=>{s(!1),c([])};return(0,r.BX)(r.HY,{children:[null==o?void 0:o(((...e)=>{e.forEach((e=>{e&&("function"==typeof e.persist&&e.persist(),"function"==typeof e.preventDefault&&e.preventDefault(),"function"==typeof e.stopPropagation&&e.stopPropagation())})),s(!0),c(e)})),(0,r.tZ)(i.Z,{description:t,onConfirm:()=>{n(...d),u()},onHide:u,open:l,title:e})]})}},17198:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(51995),i=n(61988),r=n(67294),o=n(9875),l=n(74069),s=n(49238),d=n(35944);const c=a.iK.div`
  padding-top: 8px;
  width: 50%;
  label {
    color: ${({theme:e})=>e.colors.grayscale.base};
    text-transform: uppercase;
  }
`,u=a.iK.div`
  line-height: ${({theme:e})=>4*e.gridUnit}px;
  padding-top: 16px;
`;function h({description:e,onConfirm:t,onHide:n,open:a,title:h}){const[g,m]=(0,r.useState)(!0),[p,b]=(0,r.useState)(""),v=()=>{b(""),t()};return(0,d.BX)(l.default,{disablePrimaryButton:g,onHide:()=>{b(""),n()},onHandledPrimaryAction:v,primaryButtonName:(0,i.t)("delete"),primaryButtonType:"danger",show:a,title:h,children:[(0,d.tZ)(u,{children:e}),(0,d.BX)(c,{children:[(0,d.tZ)(s.lX,{htmlFor:"delete",children:(0,i.t)('Type "%s" to confirm',(0,i.t)("DELETE"))}),(0,d.tZ)(o.II,{type:"text",id:"delete",autoComplete:"off",value:p,onChange:e=>{var t;const n=null!=(t=e.target.value)?t:"";m(n.toUpperCase()!==(0,i.t)("DELETE")),b(n)},onPressEnter:()=>{g||v()}})]})]})}},29848:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(51995),i=n(58593),r=n(13322),o=n(35944);const l=a.iK.span`
  white-space: nowrap;
  min-width: 100px;
  svg,
  i {
    margin-right: 8px;

    &:hover {
      path {
        fill: ${({theme:e})=>e.colors.primary.base};
      }
    }
  }
`,s=a.iK.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;function d({actions:e}){return(0,o.tZ)(l,{className:"actions",children:e.map(((e,t)=>{const n=r.Z[e.icon];return e.tooltip?(0,o.tZ)(i.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,children:(0,o.tZ)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,children:(0,o.tZ)(n,{})})},t):(0,o.tZ)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,children:(0,o.tZ)(n,{})},t)}))})}},86074:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(23279),i=n.n(a),r=n(67294),o=n(16550),l=n(73727),s=n(51995),d=n(11965),c=n(61988),u=n(93967),h=n.n(u),g=n(58593),m=n(4715),p=n(83862),b=n(35932),v=n(13322),P=n(35944);const f=s.iK.div`
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
`,E=e=>d.iv`
  color: ${e.colors.grayscale.light1};
  cursor: not-allowed;

  &:hover {
    color: ${e.colors.grayscale.light1};
  }

  .ant-menu-item-selected {
    background-color: ${e.colors.grayscale.light1};
  }
`,{SubMenu:_}=p.MainNav,y=e=>{var t,n,a;const[s,d]=(0,r.useState)("horizontal"),[u,y]=(0,r.useState)("nav-right");let S=!0;try{(0,o.k6)()}catch(e){S=!1}return(0,r.useEffect)((()=>{function t(){window.innerWidth<=767?d("inline"):d("horizontal"),e.buttons&&e.buttons.length>=3&&window.innerWidth>=795?y("nav-right"):e.buttons&&e.buttons.length>=3&&window.innerWidth<=795&&y("nav-right-collapse")}t();const n=i()(t,10);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[e.buttons]),(0,P.BX)(f,{children:[(0,P.BX)(m.X2,{className:"menu",role:"navigation",children:[e.name&&(0,P.tZ)("div",{className:"header",children:e.name}),(0,P.tZ)(p.Menu,{mode:s,style:{backgroundColor:"transparent"},children:null==(t=e.tabs)?void 0:t.map((t=>(e.usesRouter||S)&&t.usesRouter?(0,P.tZ)(p.Menu.Item,{children:(0,P.tZ)("div",{role:"tab",className:t.name===e.activeChild?"active":"",children:(0,P.tZ)("div",{children:(0,P.tZ)(l.rU,{to:t.url||"",children:t.label})})})},t.label):(0,P.tZ)(p.Menu.Item,{children:(0,P.tZ)("div",{className:h()("no-router",{active:t.name===e.activeChild}),role:"tab",children:(0,P.tZ)("a",{href:t.url,onClick:t.onClick,children:t.label})})},t.label)))}),(0,P.BX)("div",{className:u,children:[(0,P.tZ)(p.Menu,{mode:"horizontal",triggerSubMenuAction:"click",children:null==(n=e.dropDownLinks)?void 0:n.map(((e,t)=>{var n;return(0,P.tZ)(_,{title:e.label,icon:(0,P.tZ)(v.Z.TriangleDown,{}),popupOffset:[10,20],className:"dropdown-menu-links",children:null==(n=e.childs)?void 0:n.map((e=>"object"==typeof e?e.disable?(0,P.tZ)(p.MainNav.Item,{css:E,disabled:!0,children:(0,P.tZ)(g.u,{placement:"top",title:(0,c.t)("Enable 'Allow file uploads to database' in any database's settings"),children:e.label})},e.label):(0,P.tZ)(p.MainNav.Item,{children:(0,P.tZ)("a",{href:e.url,onClick:e.onClick,children:e.label})},e.label):null))},t)}))}),null==(a=e.buttons)?void 0:a.map(((e,t)=>(0,P.tZ)(b.Z,{buttonStyle:e.buttonStyle,onClick:e.onClick,children:e.name},t)))]})]}),e.children]})}},98217:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var a=n(67294),i=n(16550),r=n(73727),o=n(51995),l=n(11965),s=n(61988),d=n(31069),c=n(44818),u=n(30381),h=n.n(u),g=n(15926),m=n.n(g),p=n(29848),b=n(19259),v=n(17198),P=n(93139),f=n(86074),E=n(14114),_=n(34858),y=n(40768),S=n(62276),x=n(13322),L=n(74069),I=n(10689),T=n(35944);const N=o.iK.div`
  margin: ${({theme:e})=>2*e.gridUnit}px auto
    ${({theme:e})=>4*e.gridUnit}px auto;
`,Z=(0,o.iK)(I.Ad)`
  border-radius: ${({theme:e})=>e.borderRadius}px;
  border: 1px solid ${({theme:e})=>e.colors.secondary.light2};
`,k=o.iK.div`
  margin-bottom: ${({theme:e})=>5*e.gridUnit}px;

  .control-label {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  .required {
    margin-left: ${({theme:e})=>e.gridUnit/2}px;
    color: ${({theme:e})=>e.colors.error.base};
  }

  textarea {
    flex: 1 1 auto;
    height: ${({theme:e})=>17*e.gridUnit}px;
    resize: none;
    width: 100%;
  }

  textarea,
  input[type='text'] {
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;
  }

  input[type='text'] {
    width: 65%;
  }
`,w=(0,E.ZP)((({addDangerToast:e,addSuccessToast:t,annotationLayerId:n,annotation:i=null,onAnnotationAdd:r,onHide:o,show:l})=>{var d,c;const[u,g]=(0,a.useState)(!0),[m,p]=(0,a.useState)(null),b=null!==i,{state:{loading:v,resource:P},fetchResource:f,createResource:E,updateResource:I}=(0,_.LE)(`annotation_layer/${n}/annotation`,(0,s.t)("annotation"),e),w=()=>{p({short_descr:"",start_dttm:"",end_dttm:"",json_metadata:"",long_descr:""})},A=()=>{b?p(P):w(),o()},$=e=>{const{target:t}=e,n={...m,end_dttm:m?m.end_dttm:"",short_descr:m?m.short_descr:"",start_dttm:m?m.start_dttm:""};n[t.name]=t.value,p(n)};return(0,a.useEffect)((()=>{if(b&&(null==m||!m.id||i&&i.id!==m.id||l)){if(null!==(null==i?void 0:i.id)&&!v){const e=i.id||0;f(e)}}else b||m&&!m.id&&!l||w()}),[i]),(0,a.useEffect)((()=>{P&&p(P)}),[P]),(0,a.useEffect)((()=>{var e,t,n;null!=m&&null!=(e=m.short_descr)&&e.length&&null!=m&&null!=(t=m.start_dttm)&&t.length&&null!=m&&null!=(n=m.end_dttm)&&n.length?g(!1):g(!0)}),[m?m.short_descr:"",m?m.start_dttm:"",m?m.end_dttm:""]),(0,T.BX)(L.default,{disablePrimaryButton:u,onHandledPrimaryAction:()=>{if(b){if(null!=m&&m.id){const e=m.id;delete m.id,delete m.created_by,delete m.changed_by,delete m.changed_on_delta_humanized,delete m.layer,I(e,m).then((e=>{e&&(r&&r(),A(),t((0,s.t)("The annotation has been updated")))}))}}else m&&E(m).then((e=>{e&&(r&&r(),A(),t((0,s.t)("The annotation has been saved")))}))},onHide:A,primaryButtonName:b?(0,s.t)("Save"):(0,s.t)("Add"),show:l,width:"55%",title:(0,T.BX)("h4",{children:[b?(0,T.tZ)(x.Z.EditAlt,{css:y.xL}):(0,T.tZ)(x.Z.PlusLarge,{css:y.xL}),b?(0,s.t)("Edit annotation"):(0,s.t)("Add annotation")]}),children:[(0,T.tZ)(N,{children:(0,T.tZ)("h4",{children:(0,s.t)("Basic information")})}),(0,T.BX)(k,{children:[(0,T.BX)("div",{className:"control-label",children:[(0,s.t)("Name"),(0,T.tZ)("span",{className:"required",children:"*"})]}),(0,T.tZ)("input",{name:"short_descr",onChange:$,type:"text",value:null==m?void 0:m.short_descr})]}),(0,T.BX)(k,{children:[(0,T.BX)("div",{className:"control-label",children:[(0,s.t)("date"),(0,T.tZ)("span",{className:"required",children:"*"})]}),(0,T.tZ)(S.S,{placeholder:[(0,s.t)("Start date"),(0,s.t)("End date")],format:"YYYY-MM-DD HH:mm",onChange:(e,t)=>{const n={...m,end_dttm:m&&t[1].length?h()(t[1]).format("YYYY-MM-DD HH:mm"):"",short_descr:m?m.short_descr:"",start_dttm:m&&t[0].length?h()(t[0]).format("YYYY-MM-DD HH:mm"):""};p(n)},showTime:{format:"hh:mm a"},use12Hours:!0,value:null!=m&&null!=(d=m.start_dttm)&&d.length||null!=m&&null!=(c=m.end_dttm)&&c.length?[h()(m.start_dttm),h()(m.end_dttm)]:null})]}),(0,T.tZ)(N,{children:(0,T.tZ)("h4",{children:(0,s.t)("Additional information")})}),(0,T.BX)(k,{children:[(0,T.tZ)("div",{className:"control-label",children:(0,s.t)("description")}),(0,T.tZ)("textarea",{name:"long_descr",value:m?m.long_descr:"",placeholder:(0,s.t)("Description (this can be seen in the list)"),onChange:$})]}),(0,T.BX)(k,{children:[(0,T.tZ)("div",{className:"control-label",children:(0,s.t)("JSON metadata")}),(0,T.tZ)(Z,{onChange:e=>{const t={...m,end_dttm:m?m.end_dttm:"",json_metadata:e,short_descr:m?m.short_descr:"",start_dttm:m?m.start_dttm:""};p(t)},value:null!=m&&m.json_metadata?m.json_metadata:"",width:"100%",height:"120px"})]})]})})),A=o.iK.div`
  ${({theme:e})=>l.iv`
    display: flex;
    flex-direction: row;

    a,
    Link {
      margin-left: ${4*e.gridUnit}px;
      font-size: ${e.typography.sizes.s}px;
      font-weight: ${e.typography.weights.normal};
      text-decoration: underline;
    }
  `}
`,$=(0,E.ZP)((function({addDangerToast:e,addSuccessToast:t}){const{annotationLayerId:n}=(0,i.UO)(),{state:{loading:o,resourceCount:l,resourceCollection:u,bulkSelectEnabled:g},fetchData:E,refreshData:S,toggleBulkSelect:x}=(0,_.Yi)(`annotation_layer/${n}/annotation`,(0,s.t)("annotation"),e,!1),[L,I]=(0,a.useState)(!1),[N,Z]=(0,a.useState)(""),[k,$]=(0,a.useState)(null),[M,C]=(0,a.useState)(null),R=e=>{$(e),I(!0)},Y=(0,a.useCallback)((async function(){try{const e=await d.Z.get({endpoint:`/api/v1/annotation_layer/${n}`});Z(e.json.result.name)}catch(t){await(0,c.O$)(t).then((({error:t})=>{e(t.error||t.statusText||t)}))}}),[n]);(0,a.useEffect)((()=>{Y()}),[Y]);const K=[{id:"short_descr",desc:!0}],U=(0,a.useMemo)((()=>[{accessor:"short_descr",Header:(0,s.t)("Name")},{accessor:"long_descr",Header:(0,s.t)("Description")},{Cell:({row:{original:{start_dttm:e}}})=>h()(new Date(e)).format("ll"),Header:(0,s.t)("Start"),accessor:"start_dttm"},{Cell:({row:{original:{end_dttm:e}}})=>h()(new Date(e)).format("ll"),Header:(0,s.t)("End"),accessor:"end_dttm"},{Cell:({row:{original:e}})=>{const t=[{label:"edit-action",tooltip:(0,s.t)("Edit annotation"),placement:"bottom",icon:"Edit",onClick:()=>R(e)},{label:"delete-action",tooltip:(0,s.t)("Delete annotation"),placement:"bottom",icon:"Trash",onClick:()=>C(e)}];return(0,T.tZ)(p.Z,{actions:t})},Header:(0,s.t)("Actions"),id:"actions",disableSortBy:!0}]),[!0,!0]),B=[];B.push({name:(0,T.BX)(T.HY,{children:[(0,T.tZ)("i",{className:"fa fa-plus"})," ",(0,s.t)("Annotation")]}),buttonStyle:"primary",onClick:()=>{R(null)}}),B.push({name:(0,s.t)("Bulk select"),onClick:x,buttonStyle:"secondary"});let D=!0;try{(0,i.k6)()}catch(e){D=!1}const H={title:(0,s.t)("No annotation yet"),image:"filter-results.svg",buttonAction:()=>{R(null)},buttonText:(0,T.BX)(T.HY,{children:[(0,T.tZ)("i",{className:"fa fa-plus"})," ",(0,s.t)("Annotation")]})};return(0,T.BX)(T.HY,{children:[(0,T.tZ)(f.Z,{name:(0,T.BX)(A,{children:[(0,T.tZ)("span",{children:(0,s.t)("Annotation Layer %s",N)}),(0,T.tZ)("span",{children:D?(0,T.tZ)(r.rU,{to:"/annotationlayer/list/",children:(0,s.t)("Back to all")}):(0,T.tZ)("a",{href:"/annotationlayer/list/",children:(0,s.t)("Back to all")})})]}),buttons:B}),(0,T.tZ)(w,{addDangerToast:e,addSuccessToast:t,annotation:k,show:L,onAnnotationAdd:()=>S(),annotationLayerId:n,onHide:()=>I(!1)}),M&&(0,T.tZ)(v.Z,{description:(0,s.t)("Are you sure you want to delete %s?",null==M?void 0:M.short_descr),onConfirm:()=>{M&&(({id:a,short_descr:i})=>{d.Z.delete({endpoint:`/api/v1/annotation_layer/${n}/annotation/${a}`}).then((()=>{S(),C(null),t((0,s.t)("Deleted: %s",i))}),(0,y.v$)((t=>e((0,s.t)("There was an issue deleting %s: %s",i,t)))))})(M)},onHide:()=>C(null),open:!0,title:(0,s.t)("Delete Annotation?")}),(0,T.tZ)(b.Z,{title:(0,s.t)("Please confirm"),description:(0,s.t)("Are you sure you want to delete the selected annotations?"),onConfirm:a=>{d.Z.delete({endpoint:`/api/v1/annotation_layer/${n}/annotation/?q=${m().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{S(),t(e.message)}),(0,y.v$)((t=>e((0,s.t)("There was an issue deleting the selected annotations: %s",t)))))},children:n=>{const a=[{key:"delete",name:(0,s.t)("Delete"),onSelect:n,type:"danger"}];return(0,T.tZ)(P.Z,{className:"annotations-list-view",bulkActions:a,bulkSelectEnabled:g,columns:U,count:l,data:u,disableBulkSelect:x,emptyState:H,fetchData:E,addDangerToast:e,addSuccessToast:t,refreshData:S,initialSort:K,loading:o,pageSize:25})}})]})}))},56590:(e,t)=>{t.ITEM_TYPES={PAGE:"PAGE",ELLIPSIS:"ELLIPSIS",FIRST_PAGE_LINK:"FIRST_PAGE_LINK",PREVIOUS_PAGE_LINK:"PREVIOUS_PAGE_LINK",NEXT_PAGE_LINK:"NEXT_PAGE_LINK",LAST_PAGE_LINK:"LAST_PAGE_LINK"},t.ITEM_KEYS={FIRST_ELLIPSIS:-1,SECOND_ELLIPSIS:-2,FIRST_PAGE_LINK:-3,PREVIOUS_PAGE_LINK:-4,NEXT_PAGE_LINK:-5,LAST_PAGE_LINK:-6}},53804:(e,t,n)=>{var a=n(56590);t.createFirstEllipsis=function(e){return{type:a.ITEM_TYPES.ELLIPSIS,key:a.ITEM_KEYS.FIRST_ELLIPSIS,value:e,isActive:!1}},t.createSecondEllipsis=function(e){return{type:a.ITEM_TYPES.ELLIPSIS,key:a.ITEM_KEYS.SECOND_ELLIPSIS,value:e,isActive:!1}},t.createFirstPageLink=function(e){var t=e.currentPage;return{type:a.ITEM_TYPES.FIRST_PAGE_LINK,key:a.ITEM_KEYS.FIRST_PAGE_LINK,value:1,isActive:1===t}},t.createPreviousPageLink=function(e){var t=e.currentPage;return{type:a.ITEM_TYPES.PREVIOUS_PAGE_LINK,key:a.ITEM_KEYS.PREVIOUS_PAGE_LINK,value:Math.max(1,t-1),isActive:1===t}},t.createNextPageLink=function(e){var t=e.currentPage,n=e.totalPages;return{type:a.ITEM_TYPES.NEXT_PAGE_LINK,key:a.ITEM_KEYS.NEXT_PAGE_LINK,value:Math.min(n,t+1),isActive:t===n}},t.createLastPageLink=function(e){var t=e.currentPage,n=e.totalPages;return{type:a.ITEM_TYPES.LAST_PAGE_LINK,key:a.ITEM_KEYS.LAST_PAGE_LINK,value:n,isActive:t===n}},t.createPageFunctionFactory=function(e){var t=e.currentPage;return function(e){return{type:a.ITEM_TYPES.PAGE,key:e,value:e,isActive:e===t}}}},1158:(e,t)=>{t.createRange=function(e,t){for(var n=[],a=e;a<=t;a++)n.push(a);return n}},2371:(e,t,n)=>{var a=n(1158),i=n(53804);t.getPaginationModel=function(e){if(null==e)throw new Error("getPaginationModel(): options object should be a passed");var t=Number(e.totalPages);if(isNaN(t))throw new Error("getPaginationModel(): totalPages should be a number");if(t<0)throw new Error("getPaginationModel(): totalPages shouldn't be a negative number");var n=Number(e.currentPage);if(isNaN(n))throw new Error("getPaginationModel(): currentPage should be a number");if(n<0)throw new Error("getPaginationModel(): currentPage shouldn't be a negative number");if(n>t)throw new Error("getPaginationModel(): currentPage shouldn't be greater than totalPages");var r=null==e.boundaryPagesRange?1:Number(e.boundaryPagesRange);if(isNaN(r))throw new Error("getPaginationModel(): boundaryPagesRange should be a number");if(r<0)throw new Error("getPaginationModel(): boundaryPagesRange shouldn't be a negative number");var o=null==e.siblingPagesRange?1:Number(e.siblingPagesRange);if(isNaN(o))throw new Error("getPaginationModel(): siblingPagesRange should be a number");if(o<0)throw new Error("getPaginationModel(): siblingPagesRange shouldn't be a negative number");var l=Boolean(e.hidePreviousAndNextPageLinks),s=Boolean(e.hideFirstAndLastPageLinks),d=Boolean(e.hideEllipsis),c=d?0:1,u=[],h=i.createPageFunctionFactory(e);if(s||u.push(i.createFirstPageLink(e)),l||u.push(i.createPreviousPageLink(e)),1+2*c+2*o+2*r>=t){var g=a.createRange(1,t).map(h);u.push.apply(u,g)}else{var m=r,p=a.createRange(1,m).map(h),b=t+1-r,v=t,P=a.createRange(b,v).map(h),f=Math.min(Math.max(n-o,m+c+1),b-c-2*o-1),E=f+2*o,_=a.createRange(f,E).map(h);if(u.push.apply(u,p),!d){var y=f-1,S=(y===m+1?h:i.createFirstEllipsis)(y);u.push(S)}if(u.push.apply(u,_),!d){var x=E+1,L=(x===b-1?h:i.createSecondEllipsis)(x);u.push(L)}u.push.apply(u,P)}return l||u.push(i.createNextPageLink(e)),s||u.push(i.createLastPageLink(e)),u};var r=n(56590);t.ITEM_TYPES=r.ITEM_TYPES,t.ITEM_KEYS=r.ITEM_KEYS}}]);
//# sourceMappingURL=74001c9d64efb6a41c1e.chunk.js.map
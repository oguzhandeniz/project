"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4085],{52630:(e,t,n)=>{t.iB=t.YM=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=l(n(67294)),r=l(n(45697)),o=n(2371);function l(e){return e&&e.__esModule?e:{default:e}}t.YM=function(e){var t=e.itemTypeToComponent,n=e.WrapperComponent,l=void 0===n?"div":n,s=function(e){var n=e.currentPage,r=e.totalPages,s=e.boundaryPagesRange,d=e.siblingPagesRange,c=e.hideEllipsis,u=e.hidePreviousAndNextPageLinks,h=e.hideFirstAndLastPageLinks,m=e.onChange,g=e.disabled,p=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["currentPage","totalPages","boundaryPagesRange","siblingPagesRange","hideEllipsis","hidePreviousAndNextPageLinks","hideFirstAndLastPageLinks","onChange","disabled"]),b=(0,o.getPaginationModel)({currentPage:n,totalPages:r,boundaryPagesRange:s,siblingPagesRange:d,hideEllipsis:c,hidePreviousAndNextPageLinks:u,hideFirstAndLastPageLinks:h}),v=function(e,t,n){return function(r){var o,l,s,d=e[r.type],c=(l=(o=r).value,s=o.isDisabled,function(){!s&&n&&t!==l&&n(l)});return i.default.createElement(d,a({onClick:c},r))}}(t,n,m);return i.default.createElement(l,p,b.map((function(e){return v(a({},e,{isDisabled:!!g}))})))};return s.propTypes={currentPage:r.default.number.isRequired,totalPages:r.default.number.isRequired,boundaryPagesRange:r.default.number,siblingPagesRange:r.default.number,hideEllipsis:r.default.bool,hidePreviousAndNextPageLinks:r.default.bool,hideFirstAndLastPageLinks:r.default.bool,onChange:r.default.func,disabled:r.default.bool},s},t.iB=o.ITEM_TYPES},54070:(e,t,n)=>{n.d(t,{w:()=>l});var a=n(58593),i=n(83379),r=n(61988),o=n(35944);const l=({user:e,date:t})=>{const n=(0,o.tZ)("span",{className:"no-wrap",children:t});if(e){const t=(0,i.Z)(e),l=(0,r.t)("Modified by: %s",t);return(0,o.tZ)(a.u,{title:l,placement:"bottom",children:n})}return n}},19259:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(17198),r=n(35944);function o({title:e,description:t,onConfirm:n,children:o}){const[l,s]=(0,a.useState)(!1),[d,c]=(0,a.useState)([]),u=()=>{s(!1),c([])};return(0,r.BX)(r.HY,{children:[null==o?void 0:o(((...e)=>{e.forEach((e=>{e&&("function"==typeof e.persist&&e.persist(),"function"==typeof e.preventDefault&&e.preventDefault(),"function"==typeof e.stopPropagation&&e.stopPropagation())})),s(!0),c(e)})),(0,r.tZ)(i.Z,{description:t,onConfirm:()=>{n(...d),u()},onHide:u,open:l,title:e})]})}},17198:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(51995),i=n(61988),r=n(67294),o=n(9875),l=n(74069),s=n(49238),d=n(35944);const c=a.iK.div`
  padding-top: 8px;
  width: 50%;
  label {
    color: ${({theme:e})=>e.colors.grayscale.base};
    text-transform: uppercase;
  }
`,u=a.iK.div`
  line-height: ${({theme:e})=>4*e.gridUnit}px;
  padding-top: 16px;
`;function h({description:e,onConfirm:t,onHide:n,open:a,title:h}){const[m,g]=(0,r.useState)(!0),[p,b]=(0,r.useState)(""),v=()=>{b(""),t()};return(0,d.BX)(l.default,{disablePrimaryButton:m,onHide:()=>{b(""),n()},onHandledPrimaryAction:v,primaryButtonName:(0,i.t)("delete"),primaryButtonType:"danger",show:a,title:h,children:[(0,d.tZ)(u,{children:e}),(0,d.BX)(c,{children:[(0,d.tZ)(s.lX,{htmlFor:"delete",children:(0,i.t)('Type "%s" to confirm',(0,i.t)("DELETE"))}),(0,d.tZ)(o.II,{type:"text",id:"delete",autoComplete:"off",value:p,onChange:e=>{var t;const n=null!=(t=e.target.value)?t:"";g(n.toUpperCase()!==(0,i.t)("DELETE")),b(n)},onPressEnter:()=>{m||v()}})]})]})}},29848:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(51995),i=n(58593),r=n(13322),o=n(35944);const l=a.iK.span`
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
`;function d({actions:e}){return(0,o.tZ)(l,{className:"actions",children:e.map(((e,t)=>{const n=r.Z[e.icon];return e.tooltip?(0,o.tZ)(i.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,children:(0,o.tZ)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,children:(0,o.tZ)(n,{})})},t):(0,o.tZ)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,children:(0,o.tZ)(n,{})},t)}))})}},86074:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(23279),i=n.n(a),r=n(67294),o=n(16550),l=n(73727),s=n(51995),d=n(11965),c=n(61988),u=n(93967),h=n.n(u),m=n(58593),g=n(4715),p=n(83862),b=n(35932),v=n(13322),P=n(35944);const f=s.iK.div`
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
`,{SubMenu:_}=p.MainNav,y=e=>{var t,n,a;const[s,d]=(0,r.useState)("horizontal"),[u,y]=(0,r.useState)("nav-right");let S=!0;try{(0,o.k6)()}catch(e){S=!1}return(0,r.useEffect)((()=>{function t(){window.innerWidth<=767?d("inline"):d("horizontal"),e.buttons&&e.buttons.length>=3&&window.innerWidth>=795?y("nav-right"):e.buttons&&e.buttons.length>=3&&window.innerWidth<=795&&y("nav-right-collapse")}t();const n=i()(t,10);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[e.buttons]),(0,P.BX)(f,{children:[(0,P.BX)(g.X2,{className:"menu",role:"navigation",children:[e.name&&(0,P.tZ)("div",{className:"header",children:e.name}),(0,P.tZ)(p.Menu,{mode:s,style:{backgroundColor:"transparent"},children:null==(t=e.tabs)?void 0:t.map((t=>(e.usesRouter||S)&&t.usesRouter?(0,P.tZ)(p.Menu.Item,{children:(0,P.tZ)("div",{role:"tab",className:t.name===e.activeChild?"active":"",children:(0,P.tZ)("div",{children:(0,P.tZ)(l.rU,{to:t.url||"",children:t.label})})})},t.label):(0,P.tZ)(p.Menu.Item,{children:(0,P.tZ)("div",{className:h()("no-router",{active:t.name===e.activeChild}),role:"tab",children:(0,P.tZ)("a",{href:t.url,onClick:t.onClick,children:t.label})})},t.label)))}),(0,P.BX)("div",{className:u,children:[(0,P.tZ)(p.Menu,{mode:"horizontal",triggerSubMenuAction:"click",children:null==(n=e.dropDownLinks)?void 0:n.map(((e,t)=>{var n;return(0,P.tZ)(_,{title:e.label,icon:(0,P.tZ)(v.Z.TriangleDown,{}),popupOffset:[10,20],className:"dropdown-menu-links",children:null==(n=e.childs)?void 0:n.map((e=>"object"==typeof e?e.disable?(0,P.tZ)(p.MainNav.Item,{css:E,disabled:!0,children:(0,P.tZ)(m.u,{placement:"top",title:(0,c.t)("Enable 'Allow file uploads to database' in any database's settings"),children:e.label})},e.label):(0,P.tZ)(p.MainNav.Item,{children:(0,P.tZ)("a",{href:e.url,onClick:e.onClick,children:e.label})},e.label):null))},t)}))}),null==(a=e.buttons)?void 0:a.map(((e,t)=>(0,P.tZ)(b.Z,{buttonStyle:e.buttonStyle,onClick:e.onClick,children:e.name},t)))]})]}),e.children]})}},36942:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var a=n(67294),i=n(61988),r=n(31069),o=n(15926),l=n.n(o),s=n(34858),d=n(40768),c=n(14114),u=n(86074),h=n(17198),m=n(19259),g=n(29848),p=n(93139),b=n(51995),v=n(13322),P=n(74069),f=n(10689),E=n(35944);const _=b.iK.div`
  margin: ${({theme:e})=>2*e.gridUnit}px auto
    ${({theme:e})=>4*e.gridUnit}px auto;
`,y=(0,b.iK)(f.ry)`
  border-radius: ${({theme:e})=>e.borderRadius}px;
  border: 1px solid ${({theme:e})=>e.colors.secondary.light2};
`,S=b.iK.div`
  margin-bottom: ${({theme:e})=>10*e.gridUnit}px;

  .control-label {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  .required {
    margin-left: ${({theme:e})=>e.gridUnit/2}px;
    color: ${({theme:e})=>e.colors.error.base};
  }

  input[type='text'] {
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;
    width: 50%;
  }
`,L=(0,c.ZP)((({addDangerToast:e,onCssTemplateAdd:t,onHide:n,show:r,cssTemplate:o=null})=>{const[l,c]=(0,a.useState)(!0),[u,h]=(0,a.useState)(null),[m,g]=(0,a.useState)(!0),p=null!==o,{state:{loading:b,resource:f},fetchResource:L,createResource:I,updateResource:T}=(0,s.LE)("css_template",(0,i.t)("css_template"),e),x=()=>{g(!0),n()};return(0,a.useEffect)((()=>{if(p&&(null==u||!u.id||o&&(null==o?void 0:o.id)!==u.id||m&&r)){if(null!==(null==o?void 0:o.id)&&!b){const e=o.id||0;L(e)}}else!p&&(!u||u.id||m&&r)&&h({template_name:"",css:""})}),[o]),(0,a.useEffect)((()=>{f&&h(f)}),[f]),(0,a.useEffect)((()=>{var e;null!=u&&u.template_name.length&&null!=u&&null!=(e=u.css)&&e.length?c(!1):c(!0)}),[u?u.template_name:"",u?u.css:""]),m&&r&&g(!1),(0,E.BX)(P.default,{disablePrimaryButton:l,onHandledPrimaryAction:()=>{if(p){if(null!=u&&u.id){const e=u.id;delete u.id,delete u.created_by,delete u.changed_by,delete u.changed_on_delta_humanized,T(e,u).then((e=>{e&&(t&&t(),x())}))}}else u&&I(u).then((e=>{e&&(t&&t(),x())}))},onHide:x,primaryButtonName:p?(0,i.t)("Save"):(0,i.t)("Add"),show:r,width:"55%",title:(0,E.BX)("h4",{children:[p?(0,E.tZ)(v.Z.EditAlt,{css:d.xL}):(0,E.tZ)(v.Z.PlusLarge,{css:d.xL}),p?(0,i.t)("Edit CSS template properties"):(0,i.t)("Add CSS template")]}),children:[(0,E.tZ)(_,{children:(0,E.tZ)("h4",{children:(0,i.t)("Basic information")})}),(0,E.BX)(S,{children:[(0,E.BX)("div",{className:"control-label",children:[(0,i.t)("Name"),(0,E.tZ)("span",{className:"required",children:"*"})]}),(0,E.tZ)("input",{name:"template_name",onChange:e=>{const{target:t}=e,n={...u,template_name:u?u.template_name:"",css:u?u.css:""};n[t.name]=t.value,h(n)},type:"text",value:null==u?void 0:u.template_name})]}),(0,E.BX)(S,{children:[(0,E.BX)("div",{className:"control-label",children:[(0,i.t)("css"),(0,E.tZ)("span",{className:"required",children:"*"})]}),(0,E.tZ)(y,{onChange:e=>{const t={...u,template_name:u?u.template_name:"",css:e};h(t)},value:null==u?void 0:u.css,width:"100%"})]})]})}));var I=n(54070),T=n(12);const x=(0,c.ZP)((function({addDangerToast:e,addSuccessToast:t,user:n}){const{state:{loading:o,resourceCount:c,resourceCollection:b,bulkSelectEnabled:v},hasPerm:P,fetchData:f,refreshData:_,toggleBulkSelect:y}=(0,s.Yi)("css_template",(0,i.t)("CSS templates"),e),[S,x]=(0,a.useState)(!1),[N,k]=(0,a.useState)(null),w=P("can_write"),Z=P("can_write"),A=P("can_write"),[M,$]=(0,a.useState)(null),C=[{id:"template_name",desc:!0}],R=(0,a.useMemo)((()=>[{accessor:"template_name",Header:(0,i.t)("Name")},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>(0,E.tZ)(I.w,{date:e,user:t}),Header:(0,i.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl",disableSortBy:!0},{Cell:({row:{original:e}})=>{const t=[Z?{label:"edit-action",tooltip:(0,i.t)("Edit template"),placement:"bottom",icon:"Edit",onClick:()=>(k(e),void x(!0))}:null,A?{label:"delete-action",tooltip:(0,i.t)("Delete template"),placement:"bottom",icon:"Trash",onClick:()=>$(e)}:null].filter((e=>!!e));return(0,E.tZ)(g.Z,{actions:t})},Header:(0,i.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!Z&&!A,size:"xl"},{accessor:T.J.ChangedBy,hidden:!0}]),[A,w]),K={name:(0,i.t)("CSS templates")},U=[];w&&U.push({name:(0,E.BX)(E.HY,{children:[(0,E.tZ)("i",{className:"fa fa-plus"})," ",(0,i.t)("CSS template")]}),buttonStyle:"primary",onClick:()=>{k(null),x(!0)}}),A&&U.push({name:(0,i.t)("Bulk select"),onClick:y,buttonStyle:"secondary"}),K.buttons=U;const B=(0,a.useMemo)((()=>[{Header:(0,i.t)("Name"),key:"search",id:"template_name",input:"search",operator:p.p.Contains},{Header:(0,i.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:p.p.RelationOneMany,unfilteredLabel:(0,i.t)("All"),fetchSelects:(0,d.tm)("css_template","changed_by",(0,d.v$)((e=>(0,i.t)("An error occurred while fetching dataset datasource values: %s",e))),n),paginate:!0}]),[]);return(0,E.BX)(E.HY,{children:[(0,E.tZ)(u.Z,{...K}),(0,E.tZ)(L,{addDangerToast:e,cssTemplate:N,onCssTemplateAdd:()=>_(),onHide:()=>x(!1),show:S}),M&&(0,E.tZ)(h.Z,{description:(0,i.t)("This action will permanently delete the template."),onConfirm:()=>{M&&(({id:n,template_name:a})=>{r.Z.delete({endpoint:`/api/v1/css_template/${n}`}).then((()=>{_(),$(null),t((0,i.t)("Deleted: %s",a))}),(0,d.v$)((t=>e((0,i.t)("There was an issue deleting %s: %s",a,t)))))})(M)},onHide:()=>$(null),open:!0,title:(0,i.t)("Delete Template?")}),(0,E.tZ)(m.Z,{title:(0,i.t)("Please confirm"),description:(0,i.t)("Are you sure you want to delete the selected templates?"),onConfirm:n=>{r.Z.delete({endpoint:`/api/v1/css_template/?q=${l().encode(n.map((({id:e})=>e)))}`}).then((({json:e={}})=>{_(),t(e.message)}),(0,d.v$)((t=>e((0,i.t)("There was an issue deleting the selected templates: %s",t)))))},children:n=>{const a=A?[{key:"delete",name:(0,i.t)("Delete"),onSelect:n,type:"danger"}]:[];return(0,E.tZ)(p.Z,{className:"css-templates-list-view",columns:R,count:c,data:b,fetchData:f,filters:B,initialSort:C,loading:o,pageSize:25,bulkActions:a,bulkSelectEnabled:v,disableBulkSelect:y,addDangerToast:e,addSuccessToast:t,refreshData:_})}})]})}))},83379:(e,t,n)=>{function a(e){return e?`${e.first_name} ${e.last_name}`:""}n.d(t,{Z:()=>a})},56590:(e,t)=>{t.ITEM_TYPES={PAGE:"PAGE",ELLIPSIS:"ELLIPSIS",FIRST_PAGE_LINK:"FIRST_PAGE_LINK",PREVIOUS_PAGE_LINK:"PREVIOUS_PAGE_LINK",NEXT_PAGE_LINK:"NEXT_PAGE_LINK",LAST_PAGE_LINK:"LAST_PAGE_LINK"},t.ITEM_KEYS={FIRST_ELLIPSIS:-1,SECOND_ELLIPSIS:-2,FIRST_PAGE_LINK:-3,PREVIOUS_PAGE_LINK:-4,NEXT_PAGE_LINK:-5,LAST_PAGE_LINK:-6}},53804:(e,t,n)=>{var a=n(56590);t.createFirstEllipsis=function(e){return{type:a.ITEM_TYPES.ELLIPSIS,key:a.ITEM_KEYS.FIRST_ELLIPSIS,value:e,isActive:!1}},t.createSecondEllipsis=function(e){return{type:a.ITEM_TYPES.ELLIPSIS,key:a.ITEM_KEYS.SECOND_ELLIPSIS,value:e,isActive:!1}},t.createFirstPageLink=function(e){var t=e.currentPage;return{type:a.ITEM_TYPES.FIRST_PAGE_LINK,key:a.ITEM_KEYS.FIRST_PAGE_LINK,value:1,isActive:1===t}},t.createPreviousPageLink=function(e){var t=e.currentPage;return{type:a.ITEM_TYPES.PREVIOUS_PAGE_LINK,key:a.ITEM_KEYS.PREVIOUS_PAGE_LINK,value:Math.max(1,t-1),isActive:1===t}},t.createNextPageLink=function(e){var t=e.currentPage,n=e.totalPages;return{type:a.ITEM_TYPES.NEXT_PAGE_LINK,key:a.ITEM_KEYS.NEXT_PAGE_LINK,value:Math.min(n,t+1),isActive:t===n}},t.createLastPageLink=function(e){var t=e.currentPage,n=e.totalPages;return{type:a.ITEM_TYPES.LAST_PAGE_LINK,key:a.ITEM_KEYS.LAST_PAGE_LINK,value:n,isActive:t===n}},t.createPageFunctionFactory=function(e){var t=e.currentPage;return function(e){return{type:a.ITEM_TYPES.PAGE,key:e,value:e,isActive:e===t}}}},1158:(e,t)=>{t.createRange=function(e,t){for(var n=[],a=e;a<=t;a++)n.push(a);return n}},2371:(e,t,n)=>{var a=n(1158),i=n(53804);t.getPaginationModel=function(e){if(null==e)throw new Error("getPaginationModel(): options object should be a passed");var t=Number(e.totalPages);if(isNaN(t))throw new Error("getPaginationModel(): totalPages should be a number");if(t<0)throw new Error("getPaginationModel(): totalPages shouldn't be a negative number");var n=Number(e.currentPage);if(isNaN(n))throw new Error("getPaginationModel(): currentPage should be a number");if(n<0)throw new Error("getPaginationModel(): currentPage shouldn't be a negative number");if(n>t)throw new Error("getPaginationModel(): currentPage shouldn't be greater than totalPages");var r=null==e.boundaryPagesRange?1:Number(e.boundaryPagesRange);if(isNaN(r))throw new Error("getPaginationModel(): boundaryPagesRange should be a number");if(r<0)throw new Error("getPaginationModel(): boundaryPagesRange shouldn't be a negative number");var o=null==e.siblingPagesRange?1:Number(e.siblingPagesRange);if(isNaN(o))throw new Error("getPaginationModel(): siblingPagesRange should be a number");if(o<0)throw new Error("getPaginationModel(): siblingPagesRange shouldn't be a negative number");var l=Boolean(e.hidePreviousAndNextPageLinks),s=Boolean(e.hideFirstAndLastPageLinks),d=Boolean(e.hideEllipsis),c=d?0:1,u=[],h=i.createPageFunctionFactory(e);if(s||u.push(i.createFirstPageLink(e)),l||u.push(i.createPreviousPageLink(e)),1+2*c+2*o+2*r>=t){var m=a.createRange(1,t).map(h);u.push.apply(u,m)}else{var g=r,p=a.createRange(1,g).map(h),b=t+1-r,v=t,P=a.createRange(b,v).map(h),f=Math.min(Math.max(n-o,g+c+1),b-c-2*o-1),E=f+2*o,_=a.createRange(f,E).map(h);if(u.push.apply(u,p),!d){var y=f-1,S=(y===g+1?h:i.createFirstEllipsis)(y);u.push(S)}if(u.push.apply(u,_),!d){var L=E+1,I=(L===b-1?h:i.createSecondEllipsis)(L);u.push(I)}u.push.apply(u,P)}return l||u.push(i.createNextPageLink(e)),s||u.push(i.createLastPageLink(e)),u};var r=n(56590);t.ITEM_TYPES=r.ITEM_TYPES,t.ITEM_KEYS=r.ITEM_KEYS}}]);
//# sourceMappingURL=60f7e52678909f199617.chunk.js.map
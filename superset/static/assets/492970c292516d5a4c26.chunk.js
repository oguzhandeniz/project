"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7177],{52630:(e,t,a)=>{t.iB=t.YM=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i=o(a(67294)),r=o(a(45697)),l=a(2371);function o(e){return e&&e.__esModule?e:{default:e}}t.YM=function(e){var t=e.itemTypeToComponent,a=e.WrapperComponent,o=void 0===a?"div":a,s=function(e){var a=e.currentPage,r=e.totalPages,s=e.boundaryPagesRange,d=e.siblingPagesRange,u=e.hideEllipsis,c=e.hidePreviousAndNextPageLinks,h=e.hideFirstAndLastPageLinks,p=e.onChange,g=e.disabled,m=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["currentPage","totalPages","boundaryPagesRange","siblingPagesRange","hideEllipsis","hidePreviousAndNextPageLinks","hideFirstAndLastPageLinks","onChange","disabled"]),b=(0,l.getPaginationModel)({currentPage:a,totalPages:r,boundaryPagesRange:s,siblingPagesRange:d,hideEllipsis:u,hidePreviousAndNextPageLinks:c,hideFirstAndLastPageLinks:h}),v=function(e,t,a){return function(r){var l,o,s,d=e[r.type],u=(o=(l=r).value,s=l.isDisabled,function(){!s&&a&&t!==o&&a(o)});return i.default.createElement(d,n({onClick:u},r))}}(t,a,p);return i.default.createElement(o,m,b.map((function(e){return v(n({},e,{isDisabled:!!g}))})))};return s.propTypes={currentPage:r.default.number.isRequired,totalPages:r.default.number.isRequired,boundaryPagesRange:r.default.number,siblingPagesRange:r.default.number,hideEllipsis:r.default.bool,hidePreviousAndNextPageLinks:r.default.bool,hideFirstAndLastPageLinks:r.default.bool,onChange:r.default.func,disabled:r.default.bool},s},t.iB=l.ITEM_TYPES},54070:(e,t,a)=>{a.d(t,{w:()=>o});var n=a(58593),i=a(83379),r=a(61988),l=a(35944);const o=({user:e,date:t})=>{const a=(0,l.tZ)("span",{className:"no-wrap",children:t});if(e){const t=(0,i.Z)(e),o=(0,r.t)("Modified by: %s",t);return(0,l.tZ)(n.u,{title:o,placement:"bottom",children:a})}return a}},19259:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),i=a(17198),r=a(35944);function l({title:e,description:t,onConfirm:a,children:l}){const[o,s]=(0,n.useState)(!1),[d,u]=(0,n.useState)([]),c=()=>{s(!1),u([])};return(0,r.BX)(r.HY,{children:[null==l?void 0:l(((...e)=>{e.forEach((e=>{e&&("function"==typeof e.persist&&e.persist(),"function"==typeof e.preventDefault&&e.preventDefault(),"function"==typeof e.stopPropagation&&e.stopPropagation())})),s(!0),u(e)})),(0,r.tZ)(i.Z,{description:t,onConfirm:()=>{a(...d),c()},onHide:c,open:o,title:e})]})}},17198:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(51995),i=a(61988),r=a(67294),l=a(9875),o=a(74069),s=a(49238),d=a(35944);const u=n.iK.div`
  padding-top: 8px;
  width: 50%;
  label {
    color: ${({theme:e})=>e.colors.grayscale.base};
    text-transform: uppercase;
  }
`,c=n.iK.div`
  line-height: ${({theme:e})=>4*e.gridUnit}px;
  padding-top: 16px;
`;function h({description:e,onConfirm:t,onHide:a,open:n,title:h}){const[p,g]=(0,r.useState)(!0),[m,b]=(0,r.useState)(""),v=()=>{b(""),t()};return(0,d.BX)(o.default,{disablePrimaryButton:p,onHide:()=>{b(""),a()},onHandledPrimaryAction:v,primaryButtonName:(0,i.t)("delete"),primaryButtonType:"danger",show:n,title:h,children:[(0,d.tZ)(c,{children:e}),(0,d.BX)(u,{children:[(0,d.tZ)(s.lX,{htmlFor:"delete",children:(0,i.t)('Type "%s" to confirm',(0,i.t)("DELETE"))}),(0,d.tZ)(l.II,{type:"text",id:"delete",autoComplete:"off",value:m,onChange:e=>{var t;const a=null!=(t=e.target.value)?t:"";g(a.toUpperCase()!==(0,i.t)("DELETE")),b(a)},onPressEnter:()=>{p||v()}})]})]})}},86074:(e,t,a)=>{a.d(t,{Z:()=>_});var n=a(23279),i=a.n(n),r=a(67294),l=a(16550),o=a(73727),s=a(51995),d=a(11965),u=a(61988),c=a(93967),h=a.n(c),p=a(58593),g=a(4715),m=a(83862),b=a(35932),v=a(13322),f=a(35944);const y=s.iK.div`
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
`,{SubMenu:E}=m.MainNav,_=e=>{var t,a,n;const[s,d]=(0,r.useState)("horizontal"),[c,_]=(0,r.useState)("nav-right");let w=!0;try{(0,l.k6)()}catch(e){w=!1}return(0,r.useEffect)((()=>{function t(){window.innerWidth<=767?d("inline"):d("horizontal"),e.buttons&&e.buttons.length>=3&&window.innerWidth>=795?_("nav-right"):e.buttons&&e.buttons.length>=3&&window.innerWidth<=795&&_("nav-right-collapse")}t();const a=i()(t,10);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)}),[e.buttons]),(0,f.BX)(y,{children:[(0,f.BX)(g.X2,{className:"menu",role:"navigation",children:[e.name&&(0,f.tZ)("div",{className:"header",children:e.name}),(0,f.tZ)(m.Menu,{mode:s,style:{backgroundColor:"transparent"},children:null==(t=e.tabs)?void 0:t.map((t=>(e.usesRouter||w)&&t.usesRouter?(0,f.tZ)(m.Menu.Item,{children:(0,f.tZ)("div",{role:"tab",className:t.name===e.activeChild?"active":"",children:(0,f.tZ)("div",{children:(0,f.tZ)(o.rU,{to:t.url||"",children:t.label})})})},t.label):(0,f.tZ)(m.Menu.Item,{children:(0,f.tZ)("div",{className:h()("no-router",{active:t.name===e.activeChild}),role:"tab",children:(0,f.tZ)("a",{href:t.url,onClick:t.onClick,children:t.label})})},t.label)))}),(0,f.BX)("div",{className:c,children:[(0,f.tZ)(m.Menu,{mode:"horizontal",triggerSubMenuAction:"click",children:null==(a=e.dropDownLinks)?void 0:a.map(((e,t)=>{var a;return(0,f.tZ)(E,{title:e.label,icon:(0,f.tZ)(v.Z.TriangleDown,{}),popupOffset:[10,20],className:"dropdown-menu-links",children:null==(a=e.childs)?void 0:a.map((e=>"object"==typeof e?e.disable?(0,f.tZ)(m.MainNav.Item,{css:P,disabled:!0,children:(0,f.tZ)(p.u,{placement:"top",title:(0,u.t)("Enable 'Allow file uploads to database' in any database's settings"),children:e.label})},e.label):(0,f.tZ)(m.MainNav.Item,{children:(0,f.tZ)("a",{href:e.url,onClick:e.onClick,children:e.label})},e.label):null))},t)}))}),null==(n=e.buttons)?void 0:n.map(((e,t)=>(0,f.tZ)(b.Z,{buttonStyle:e.buttonStyle,onClick:e.onClick,children:e.name},t)))]})]}),e.children]})}},6065:(e,t,a)=>{a.r(t),a.d(t,{default:()=>K});var n=a(51995),i=a(61988),r=a(31069),l=a(67294),o=a(19259),s=a(13322),d=a(93139),u=a(14114),c=a(58593),h=a(86074),p=a(15926),g=a.n(p),m=a(34858),b=a(11965),v=a(74069),f=a(81315),y=a(9875),P=a(84101),E=a(49238),_=a(8272);const w=[{label:(0,i.t)("Regular"),value:"Regular"},{label:(0,i.t)("Base"),value:"Base"}];var S;!function(e){e.Regular="Regular",e.Base="Base"}(S||(S={}));var Z=a(35944);const x=b.iv`
  margin: 0;

  .ant-input {
    margin: 0;
  }
`,T=(0,n.iK)(v.default)`
  max-width: 1200px;
  min-width: min-content;
  width: 100%;
  .ant-modal-footer {
    white-space: nowrap;
  }
`,k=e=>b.iv`
  margin: auto ${2*e.gridUnit}px auto 0;
  color: ${e.colors.grayscale.base};
`,N=n.iK.div`
  display: flex;
  flex-direction: column;
  padding: ${({theme:e})=>`${3*e.gridUnit}px ${4*e.gridUnit}px ${2*e.gridUnit}px`};

  label,
  .control-label {
    display: inline-block;
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    color: ${({theme:e})=>e.colors.grayscale.base};
    vertical-align: middle;
  }

  .info-solid-small {
    vertical-align: middle;
    padding-bottom: ${({theme:e})=>e.gridUnit/2}px;
  }
`,L=n.iK.div`
  display: flex;
  flex-direction: column;
  margin: ${({theme:e})=>e.gridUnit}px;
  margin-bottom: ${({theme:e})=>4*e.gridUnit}px;

  .input-container {
    display: flex;
    align-items: center;

    > div {
      width: 100%;
    }
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  .required {
    margin-left: ${({theme:e})=>e.gridUnit/2}px;
    color: ${({theme:e})=>e.colors.error.base};
  }
`,I=(0,n.iK)(y.Kx)`
  resize: none;
  margin-top: ${({theme:e})=>e.gridUnit}px;
`,R={name:"",filter_type:S.Regular,tables:[],roles:[],clause:"",group_key:"",description:""},A=function(e){const{rule:t,addDangerToast:a,addSuccessToast:n,onHide:o,show:d}=e,[u,c]=(0,l.useState)({...R}),[h,p]=(0,l.useState)(!0),b=null!==t,{state:{loading:v,resource:y,error:A},fetchResource:M,createResource:$,updateResource:C,clearError:B}=(0,m.LE)("rowlevelsecurity",(0,i.t)("rowlevelsecurity"),a),K=(e,t)=>{c((a=>({...a,[e]:t})))},U=(0,l.useCallback)((()=>{var e,t;if(!y)return null;const a=[],n=[];return null==(e=y.tables)||e.forEach((e=>{a.push({key:e.id,label:e.schema?`${e.schema}.${e.table_name}`:e.table_name,value:e.id})})),null==(t=y.roles)||t.forEach((e=>{n.push({key:e.id,label:e.name,value:e.id})})),{tables:a,roles:n}}),[null==y?void 0:y.tables,null==y?void 0:y.roles]);(0,l.useEffect)((()=>{b?null===(null==t?void 0:t.id)||v||A||M(t.id):c({...R})}),[t]),(0,l.useEffect)((()=>{if(y){c({...y,id:null==t?void 0:t.id});const e=U();K("tables",(null==e?void 0:e.tables)||[]),K("roles",(null==e?void 0:e.roles)||[])}}),[y]);const F=u||{};(0,l.useEffect)((()=>{var e;null!=u&&u.name&&null!=u&&u.clause&&null!=(e=u.tables)&&e.length?p(!1):p(!0)}),[F.name,F.clause,null==F?void 0:F.tables]);const Y=e=>{K(e.name,e.value)},X=()=>{B(),c({...R}),o()},D=(0,l.useMemo)((()=>(e="",t,a)=>{const n=g().encode({filter:e,page:t,page_size:a});return r.Z.get({endpoint:`/api/v1/rowlevelsecurity/related/tables?q=${n}`}).then((e=>({data:e.json.result.map((e=>({label:e.text,value:e.value}))),totalCount:e.json.count})))}),[]),G=(0,l.useMemo)((()=>(e="",t,a)=>{const n=g().encode({filter:e,page:t,page_size:a});return r.Z.get({endpoint:`/api/v1/rowlevelsecurity/related/roles?q=${n}`}).then((e=>({data:e.json.result.map((e=>({label:e.text,value:e.value}))),totalCount:e.json.count})))}),[]);return(0,Z.tZ)(T,{className:"no-content-padding",responsive:!0,show:d,onHide:X,primaryButtonName:b?(0,i.t)("Save"):(0,i.t)("Add"),disablePrimaryButton:h,onHandledPrimaryAction:()=>{var e,t;const a=[],r=[];null==(e=u.tables)||e.forEach((e=>a.push(e.key))),null==(t=u.roles)||t.forEach((e=>r.push(e.key)));const l={...u,tables:a,roles:r};if(b&&u.id){const e=u.id;delete l.id,C(e,l).then((e=>{e&&(n("Rule updated"),X())}))}else u&&$(l).then((e=>{e&&(n((0,i.t)("Rule added")),X())}))},width:"30%",maxWidth:"1450px",title:(0,Z.BX)("h4",{children:[b?(0,Z.tZ)(s.Z.EditAlt,{css:k}):(0,Z.tZ)(s.Z.PlusLarge,{css:k}),b?(0,i.t)("Edit Rule"):(0,i.t)("Add Rule")]}),children:(0,Z.tZ)(N,{children:(0,Z.BX)("div",{className:"main-section",children:[(0,Z.tZ)(L,{children:(0,Z.tZ)(E.QA,{id:"name",name:"name",className:"labeled-input",value:u?u.name:"",required:!0,validationMethods:{onChange:({target:e})=>Y(e)},css:x,label:(0,i.t)("Rule Name"),tooltipText:(0,i.t)("The name of the rule must be unique"),hasTooltip:!0})}),(0,Z.BX)(L,{children:[(0,Z.BX)("div",{className:"control-label",children:[(0,i.t)("Filter Type")," ",(0,Z.tZ)(_.Z,{tooltip:(0,i.t)("Regular filters add where clauses to queries if a user belongs to a role referenced in the filter, base filters apply filters to all queries except the roles defined in the filter, and can be used to define what users can see if no RLS filters within a filter group apply to them.")})]}),(0,Z.tZ)("div",{className:"input-container",children:(0,Z.tZ)(f.Z,{name:"filter_type",ariaLabel:(0,i.t)("Filter Type"),placeholder:(0,i.t)("Filter Type"),onChange:e=>{K("filter_type",e)},value:null==u?void 0:u.filter_type,options:w})})]}),(0,Z.BX)(L,{children:[(0,Z.BX)("div",{className:"control-label",children:[(0,i.t)("Datasets")," ",(0,Z.tZ)("span",{className:"required",children:"*"}),(0,Z.tZ)(_.Z,{tooltip:(0,i.t)("These are the datasets this filter will be applied to.")})]}),(0,Z.tZ)("div",{className:"input-container",children:(0,Z.tZ)(P.Z,{ariaLabel:(0,i.t)("Tables"),mode:"multiple",onChange:e=>{K("tables",e||[])},value:(null==u?void 0:u.tables)||[],options:D})})]}),(0,Z.BX)(L,{children:[(0,Z.BX)("div",{className:"control-label",children:[u.filter_type===S.Base?(0,i.t)("Excluded roles"):(0,i.t)("Roles")," ",(0,Z.tZ)(_.Z,{tooltip:(0,i.t)("For regular filters, these are the roles this filter will be applied to. For base filters, these are the roles that the filter DOES NOT apply to, e.g. Admin if admin should see all data.")})]}),(0,Z.tZ)("div",{className:"input-container",children:(0,Z.tZ)(P.Z,{ariaLabel:(0,i.t)("Roles"),mode:"multiple",onChange:e=>{K("roles",e||[])},value:(null==u?void 0:u.roles)||[],options:G})})]}),(0,Z.tZ)(L,{children:(0,Z.tZ)(E.QA,{id:"group_key",name:"group_key",value:u?u.group_key:"",validationMethods:{onChange:({target:e})=>Y(e)},css:x,label:(0,i.t)("Group Key"),hasTooltip:!0,tooltipText:(0,i.t)("Filters with the same group key will be ORed together within the group, while different filter groups will be ANDed together. Undefined group keys are treated as unique groups, i.e. are not grouped together. For example, if a table has three filters, of which two are for departments Finance and Marketing (group key = 'department'), and one refers to the region Europe (group key = 'region'), the filter clause would apply the filter (department = 'Finance' OR department = 'Marketing') AND (region = 'Europe').")})}),(0,Z.tZ)(L,{children:(0,Z.tZ)("div",{className:"control-label",children:(0,Z.tZ)(E.QA,{id:"clause",name:"clause",value:u?u.clause:"",required:!0,validationMethods:{onChange:({target:e})=>Y(e)},css:x,label:(0,i.t)("Clause"),hasTooltip:!0,tooltipText:(0,i.t)("This is the condition that will be added to the WHERE clause. For example, to only return rows for a particular client, you might define a regular filter with the clause `client_id = 9`. To display no rows unless a user belongs to a RLS filter role, a base filter can be created with the clause `1 = 0` (always false).")})})}),(0,Z.BX)(L,{children:[(0,Z.tZ)("div",{className:"control-label",children:(0,i.t)("Description")}),(0,Z.tZ)("div",{className:"input-container",children:(0,Z.tZ)(I,{rows:4,name:"description",value:u?u.description:"",onChange:e=>Y(e.target)})})]})]})})})};var M=a(40768),$=a(54070),C=a(12);const B=n.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,K=(0,u.ZP)((function(e){const{addDangerToast:t,addSuccessToast:a,user:n}=e,[u,p]=(0,l.useState)(!1),[b,v]=(0,l.useState)(null),{state:{loading:f,resourceCount:y,resourceCollection:P,bulkSelectEnabled:E},hasPerm:_,fetchData:w,refreshData:S,toggleBulkSelect:x}=(0,m.Yi)("rowlevelsecurity",(0,i.t)("Row Level Security"),t,!0,void 0,void 0,!0);function T(e){v(e),p(!0)}function k(){v(null),p(!1),S()}const N=_("can_write"),L=_("can_write"),I=_("can_export"),R=(0,l.useMemo)((()=>[{accessor:"name",Header:(0,i.t)("Name")},{accessor:"filter_type",Header:(0,i.t)("Filter Type"),size:"xl"},{accessor:"group_key",Header:(0,i.t)("Group Key"),size:"xl"},{accessor:"clause",Header:(0,i.t)("Clause")},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>(0,Z.tZ)($.w,{date:e,user:t}),Header:(0,i.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:e}})=>(0,Z.BX)(B,{className:"actions",children:[N&&(0,Z.tZ)(o.Z,{title:(0,i.t)("Please confirm"),description:(0,Z.BX)(Z.HY,{children:[(0,i.t)("Are you sure you want to delete")," ",(0,Z.tZ)("b",{children:e.name})]}),onConfirm:()=>function({id:e,name:t},a,n,l){return r.Z.delete({endpoint:`/api/v1/rowlevelsecurity/${e}`}).then((()=>{a(),n((0,i.t)("Deleted %s",t))}),(0,M.v$)((e=>l((0,i.t)("There was an issue deleting %s: %s",t,e)))))}(e,S,a,t),children:e=>(0,Z.tZ)(c.u,{id:"delete-action-tooltip",title:(0,i.t)("Delete"),placement:"bottom",children:(0,Z.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e,children:(0,Z.tZ)(s.Z.Trash,{})})})}),L&&(0,Z.tZ)(c.u,{id:"edit-action-tooltip",title:(0,i.t)("Edit"),placement:"bottom",children:(0,Z.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>T(e),children:(0,Z.tZ)(s.Z.EditAlt,{})})})]}),Header:(0,i.t)("Actions"),id:"actions",hidden:!L&&!N&&!I,disableSortBy:!0},{accessor:C.J.ChangedBy,hidden:!0}]),[n.userId,L,N,I,_,S,t,a]),K={title:(0,i.t)("No Rules yet"),image:"filter-results.svg",buttonAction:()=>T(null),buttonText:L?(0,Z.BX)(Z.HY,{children:[(0,Z.tZ)("i",{className:"fa fa-plus"})," ","Rule"," "]}):null},U=(0,l.useMemo)((()=>[{Header:(0,i.t)("Name"),key:"search",id:"name",input:"search",operator:d.p.StartsWith},{Header:(0,i.t)("Filter Type"),key:"filter_type",id:"filter_type",input:"select",operator:d.p.Equals,unfilteredLabel:(0,i.t)("Any"),selects:[{label:(0,i.t)("Regular"),value:"Regular"},{label:(0,i.t)("Base"),value:"Base"}]},{Header:(0,i.t)("Group Key"),key:"search",id:"group_key",input:"search",operator:d.p.StartsWith},{Header:(0,i.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:d.p.RelationOneMany,unfilteredLabel:(0,i.t)("All"),fetchSelects:(0,M.tm)("rowlevelsecurity","changed_by",(0,M.v$)((e=>(0,i.t)("An error occurred while fetching dataset datasource values: %s",e))),n),paginate:!0}]),[n]),F=[{id:"changed_on_delta_humanized",desc:!0}],Y=[];return N&&(Y.push({name:(0,Z.BX)(Z.HY,{children:[(0,Z.tZ)("i",{className:"fa fa-plus"})," ",(0,i.t)("Rule")]}),buttonStyle:"primary",onClick:()=>T(null)}),Y.push({name:(0,i.t)("Bulk select"),buttonStyle:"secondary",onClick:x})),(0,Z.BX)(Z.HY,{children:[(0,Z.tZ)(h.Z,{name:(0,i.t)("Row Level Security"),buttons:Y}),(0,Z.tZ)(o.Z,{title:(0,i.t)("Please confirm"),description:(0,i.t)("Are you sure you want to delete the selected rules?"),onConfirm:function(e){const n=e.map((({id:e})=>e));return r.Z.delete({endpoint:`/api/v1/rowlevelsecurity/?q=${g().encode(n)}`}).then((()=>{S(),a((0,i.t)("Deleted"))}),(0,M.v$)((e=>t((0,i.t)("There was an issue deleting rules: %s",e)))))},children:e=>{const n=[];return N&&n.push({key:"delete",name:(0,i.t)("Delete"),type:"danger",onSelect:e}),(0,Z.BX)(Z.HY,{children:[(0,Z.tZ)(A,{rule:b,addDangerToast:t,onHide:k,addSuccessToast:a,show:u}),(0,Z.tZ)(d.Z,{className:"rls-list-view",bulkActions:n,bulkSelectEnabled:E,disableBulkSelect:x,columns:R,count:y,data:P,emptyState:K,fetchData:w,filters:U,initialSort:F,loading:f,addDangerToast:t,addSuccessToast:a,refreshData:()=>{},pageSize:25})]})}})]})}))},83379:(e,t,a)=>{function n(e){return e?`${e.first_name} ${e.last_name}`:""}a.d(t,{Z:()=>n})},56590:(e,t)=>{t.ITEM_TYPES={PAGE:"PAGE",ELLIPSIS:"ELLIPSIS",FIRST_PAGE_LINK:"FIRST_PAGE_LINK",PREVIOUS_PAGE_LINK:"PREVIOUS_PAGE_LINK",NEXT_PAGE_LINK:"NEXT_PAGE_LINK",LAST_PAGE_LINK:"LAST_PAGE_LINK"},t.ITEM_KEYS={FIRST_ELLIPSIS:-1,SECOND_ELLIPSIS:-2,FIRST_PAGE_LINK:-3,PREVIOUS_PAGE_LINK:-4,NEXT_PAGE_LINK:-5,LAST_PAGE_LINK:-6}},53804:(e,t,a)=>{var n=a(56590);t.createFirstEllipsis=function(e){return{type:n.ITEM_TYPES.ELLIPSIS,key:n.ITEM_KEYS.FIRST_ELLIPSIS,value:e,isActive:!1}},t.createSecondEllipsis=function(e){return{type:n.ITEM_TYPES.ELLIPSIS,key:n.ITEM_KEYS.SECOND_ELLIPSIS,value:e,isActive:!1}},t.createFirstPageLink=function(e){var t=e.currentPage;return{type:n.ITEM_TYPES.FIRST_PAGE_LINK,key:n.ITEM_KEYS.FIRST_PAGE_LINK,value:1,isActive:1===t}},t.createPreviousPageLink=function(e){var t=e.currentPage;return{type:n.ITEM_TYPES.PREVIOUS_PAGE_LINK,key:n.ITEM_KEYS.PREVIOUS_PAGE_LINK,value:Math.max(1,t-1),isActive:1===t}},t.createNextPageLink=function(e){var t=e.currentPage,a=e.totalPages;return{type:n.ITEM_TYPES.NEXT_PAGE_LINK,key:n.ITEM_KEYS.NEXT_PAGE_LINK,value:Math.min(a,t+1),isActive:t===a}},t.createLastPageLink=function(e){var t=e.currentPage,a=e.totalPages;return{type:n.ITEM_TYPES.LAST_PAGE_LINK,key:n.ITEM_KEYS.LAST_PAGE_LINK,value:a,isActive:t===a}},t.createPageFunctionFactory=function(e){var t=e.currentPage;return function(e){return{type:n.ITEM_TYPES.PAGE,key:e,value:e,isActive:e===t}}}},1158:(e,t)=>{t.createRange=function(e,t){for(var a=[],n=e;n<=t;n++)a.push(n);return a}},2371:(e,t,a)=>{var n=a(1158),i=a(53804);t.getPaginationModel=function(e){if(null==e)throw new Error("getPaginationModel(): options object should be a passed");var t=Number(e.totalPages);if(isNaN(t))throw new Error("getPaginationModel(): totalPages should be a number");if(t<0)throw new Error("getPaginationModel(): totalPages shouldn't be a negative number");var a=Number(e.currentPage);if(isNaN(a))throw new Error("getPaginationModel(): currentPage should be a number");if(a<0)throw new Error("getPaginationModel(): currentPage shouldn't be a negative number");if(a>t)throw new Error("getPaginationModel(): currentPage shouldn't be greater than totalPages");var r=null==e.boundaryPagesRange?1:Number(e.boundaryPagesRange);if(isNaN(r))throw new Error("getPaginationModel(): boundaryPagesRange should be a number");if(r<0)throw new Error("getPaginationModel(): boundaryPagesRange shouldn't be a negative number");var l=null==e.siblingPagesRange?1:Number(e.siblingPagesRange);if(isNaN(l))throw new Error("getPaginationModel(): siblingPagesRange should be a number");if(l<0)throw new Error("getPaginationModel(): siblingPagesRange shouldn't be a negative number");var o=Boolean(e.hidePreviousAndNextPageLinks),s=Boolean(e.hideFirstAndLastPageLinks),d=Boolean(e.hideEllipsis),u=d?0:1,c=[],h=i.createPageFunctionFactory(e);if(s||c.push(i.createFirstPageLink(e)),o||c.push(i.createPreviousPageLink(e)),1+2*u+2*l+2*r>=t){var p=n.createRange(1,t).map(h);c.push.apply(c,p)}else{var g=r,m=n.createRange(1,g).map(h),b=t+1-r,v=t,f=n.createRange(b,v).map(h),y=Math.min(Math.max(a-l,g+u+1),b-u-2*l-1),P=y+2*l,E=n.createRange(y,P).map(h);if(c.push.apply(c,m),!d){var _=y-1,w=(_===g+1?h:i.createFirstEllipsis)(_);c.push(w)}if(c.push.apply(c,E),!d){var S=P+1,Z=(S===b-1?h:i.createSecondEllipsis)(S);c.push(Z)}c.push.apply(c,f)}return o||c.push(i.createNextPageLink(e)),s||c.push(i.createLastPageLink(e)),c};var r=a(56590);t.ITEM_TYPES=r.ITEM_TYPES,t.ITEM_KEYS=r.ITEM_KEYS}}]);
//# sourceMappingURL=492970c292516d5a4c26.chunk.js.map
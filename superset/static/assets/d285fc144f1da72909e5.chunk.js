"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[373],{54070:(e,t,n)=>{n.d(t,{w:()=>l});var i=n(58593),a=n(83379),o=n(61988),r=n(35944);const l=({user:e,date:t})=>{const n=(0,r.tZ)("span",{className:"no-wrap",children:t});if(e){const t=(0,a.Z)(e),l=(0,o.t)("Modified by: %s",t);return(0,r.tZ)(i.u,{title:l,placement:"bottom",children:n})}return n}},19259:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(67294),a=n(17198),o=n(35944);function r({title:e,description:t,onConfirm:n,children:r}){const[l,d]=(0,i.useState)(!1),[s,c]=(0,i.useState)([]),u=()=>{d(!1),c([])};return(0,o.BX)(o.HY,{children:[null==r?void 0:r(((...e)=>{e.forEach((e=>{e&&("function"==typeof e.persist&&e.persist(),"function"==typeof e.preventDefault&&e.preventDefault(),"function"==typeof e.stopPropagation&&e.stopPropagation())})),d(!0),c(e)})),(0,o.tZ)(a.Z,{description:t,onConfirm:()=>{n(...s),u()},onHide:u,open:l,title:e})]})}},17198:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(51995),a=n(61988),o=n(67294),r=n(9875),l=n(74069),d=n(49238),s=n(35944);const c=i.iK.div`
  padding-top: 8px;
  width: 50%;
  label {
    color: ${({theme:e})=>e.colors.grayscale.base};
    text-transform: uppercase;
  }
`,u=i.iK.div`
  line-height: ${({theme:e})=>4*e.gridUnit}px;
  padding-top: 16px;
`;function h({description:e,onConfirm:t,onHide:n,open:i,title:h}){const[m,p]=(0,o.useState)(!0),[g,b]=(0,o.useState)(""),v=()=>{b(""),t()};return(0,s.BX)(l.default,{disablePrimaryButton:m,onHide:()=>{b(""),n()},onHandledPrimaryAction:v,primaryButtonName:(0,a.t)("delete"),primaryButtonType:"danger",show:i,title:h,children:[(0,s.tZ)(u,{children:e}),(0,s.BX)(c,{children:[(0,s.tZ)(d.lX,{htmlFor:"delete",children:(0,a.t)('Type "%s" to confirm',(0,a.t)("DELETE"))}),(0,s.tZ)(r.II,{type:"text",id:"delete",autoComplete:"off",value:g,onChange:e=>{var t;const n=null!=(t=e.target.value)?t:"";p(n.toUpperCase()!==(0,a.t)("DELETE")),b(n)},onPressEnter:()=>{m||v()}})]})]})}},36674:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(67294),a=n(51995),o=n(11965),r=n(61988),l=n(58593),d=n(13322),s=n(35944);const c=a.iK.a`
  ${({theme:e})=>o.iv`
    font-size: ${e.typography.sizes.xl}px;
    display: flex;
    padding: 0 0 0 ${2*e.gridUnit}px;
  `};
`,u=({itemId:e,isStarred:t,showTooltip:n,saveFaveStar:a,fetchFaveStar:o})=>{(0,i.useEffect)((()=>{null==o||o(e)}),[o,e]);const u=(0,i.useCallback)((n=>{n.preventDefault(),a(e,!!t)}),[t,e,a]),h=(0,s.tZ)(c,{href:"#",onClick:u,className:"fave-unfave-icon",role:"button",children:t?(0,s.tZ)(d.Z.FavoriteSelected,{}):(0,s.tZ)(d.Z.FavoriteUnselected,{})});return n?(0,s.tZ)(l.u,{id:"fave-unfave-tooltip",title:(0,r.t)("Click to favorite/unfavorite"),children:h}):h}},86074:(e,t,n)=>{n.d(t,{Z:()=>w});var i=n(23279),a=n.n(i),o=n(67294),r=n(16550),l=n(73727),d=n(51995),s=n(11965),c=n(61988),u=n(93967),h=n.n(u),m=n(58593),p=n(4715),g=n(83862),b=n(35932),v=n(13322),f=n(35944);const y=d.iK.div`
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
`,Z=e=>s.iv`
  color: ${e.colors.grayscale.light1};
  cursor: not-allowed;

  &:hover {
    color: ${e.colors.grayscale.light1};
  }

  .ant-menu-item-selected {
    background-color: ${e.colors.grayscale.light1};
  }
`,{SubMenu:x}=g.MainNav,w=e=>{var t,n,i;const[d,s]=(0,o.useState)("horizontal"),[u,w]=(0,o.useState)("nav-right");let $=!0;try{(0,r.k6)()}catch(e){$=!1}return(0,o.useEffect)((()=>{function t(){window.innerWidth<=767?s("inline"):s("horizontal"),e.buttons&&e.buttons.length>=3&&window.innerWidth>=795?w("nav-right"):e.buttons&&e.buttons.length>=3&&window.innerWidth<=795&&w("nav-right-collapse")}t();const n=a()(t,10);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[e.buttons]),(0,f.BX)(y,{children:[(0,f.BX)(p.X2,{className:"menu",role:"navigation",children:[e.name&&(0,f.tZ)("div",{className:"header",children:e.name}),(0,f.tZ)(g.Menu,{mode:d,style:{backgroundColor:"transparent"},children:null==(t=e.tabs)?void 0:t.map((t=>(e.usesRouter||$)&&t.usesRouter?(0,f.tZ)(g.Menu.Item,{children:(0,f.tZ)("div",{role:"tab",className:t.name===e.activeChild?"active":"",children:(0,f.tZ)("div",{children:(0,f.tZ)(l.rU,{to:t.url||"",children:t.label})})})},t.label):(0,f.tZ)(g.Menu.Item,{children:(0,f.tZ)("div",{className:h()("no-router",{active:t.name===e.activeChild}),role:"tab",children:(0,f.tZ)("a",{href:t.url,onClick:t.onClick,children:t.label})})},t.label)))}),(0,f.BX)("div",{className:u,children:[(0,f.tZ)(g.Menu,{mode:"horizontal",triggerSubMenuAction:"click",children:null==(n=e.dropDownLinks)?void 0:n.map(((e,t)=>{var n;return(0,f.tZ)(x,{title:e.label,icon:(0,f.tZ)(v.Z.TriangleDown,{}),popupOffset:[10,20],className:"dropdown-menu-links",children:null==(n=e.childs)?void 0:n.map((e=>"object"==typeof e?e.disable?(0,f.tZ)(g.MainNav.Item,{css:Z,disabled:!0,children:(0,f.tZ)(m.u,{placement:"top",title:(0,c.t)("Enable 'Allow file uploads to database' in any database's settings"),children:e.label})},e.label):(0,f.tZ)(g.MainNav.Item,{children:(0,f.tZ)("a",{href:e.url,onClick:e.onClick,children:e.label})},e.label):null))},t)}))}),null==(i=e.buttons)?void 0:i.map(((e,t)=>(0,f.tZ)(b.Z,{buttonStyle:e.buttonStyle,onClick:e.onClick,children:e.name},t)))]})]}),e.children]})}},48273:(e,t,n)=>{n.d(t,{$3:()=>s,AN:()=>u,LS:()=>d,Qz:()=>c,g:()=>l});var i=n(31069),a=n(15926),o=n.n(a);const r=Object.freeze(["dashboard","chart","saved_query"]),l=Object.freeze({DASHBOARD:"dashboard",CHART:"chart",QUERY:"saved_query"});function d(e,t,n){i.Z.get({endpoint:`/api/v1/tag/${e}`}).then((({json:e})=>t(e.result))).catch((e=>n(e)))}function s({objectType:e,objectId:t,includeTypes:n=!1},a,o){if(void 0===e||void 0===t)throw new Error("Need to specify objectType and objectId");if(!r.includes(e))throw new Error(`objectType ${e} is invalid`);i.Z.get({endpoint:`/api/v1/${e}/${t}`}).then((({json:e})=>a(e.result.tags.filter((e=>1===e.type))))).catch((e=>o(e)))}function c(e,t,n){const a=e.map((e=>e.name));i.Z.delete({endpoint:`/api/v1/tag/?q=${o().encode(a)}`}).then((({json:e})=>e.message?t(e.message):t("Successfully Deleted Tag"))).catch((e=>{const t=e.message;return n(t||"Error Deleting Tag")}))}function u({tagIds:e=[],types:t},n,a){let o=`/api/v1/tag/get_objects/?tagIds=${e}`;t&&(o+=`&types=${t}`),i.Z.get({endpoint:o}).then((({json:e})=>n(e.result))).catch((e=>a(e)))}},65019:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var i=n(67294),a=n(61988),o=n(93185),r=n(40768),l=n(34858),d=n(19259),s=n(86074),c=n(93139),u=n(61337),h=n(14114),m=n(13322),p=n(58593),g=n(73727),b=n(48273),v=n(60331),f=n(12),y=n(51360),Z=n(36674),x=n(54070),w=n(35944);const $=(0,h.ZP)((function(e){const{addDangerToast:t,addSuccessToast:n,user:h}=e,{userId:$}=h,k=(0,i.useMemo)((()=>[{id:"type",operator:"custom_tag",value:!0}]),[]),{state:{loading:S,resourceCount:C,resourceCollection:T,bulkSelectEnabled:_},hasPerm:z,fetchData:N,toggleBulkSelect:U,refreshData:D}=(0,l.Yi)("tag",(0,a.t)("tag"),t,void 0,void 0,k),[E,B]=(0,i.useState)(!1),[H,M]=(0,i.useState)(null),A=(0,i.useMemo)((()=>T.map((e=>e.id))),[T]),[I,X]=(0,l.NE)("tag",A,t),j=(0,u.OH)(null==$?void 0:$.toString(),null),L=z("can_write"),P=z("can_write"),R=[{id:"changed_on_delta_humanized",desc:!0}];function O(e){(0,b.Qz)(e,(e=>{n(e),D()}),(e=>{t(e),D()}))}const Y={title:(0,a.t)("No Tags created"),image:"dashboard.svg",description:"Create a new tag and assign it to existing entities like charts or dashboards",buttonAction:()=>B(!0),buttonText:(0,w.BX)(w.HY,{children:[(0,w.tZ)("i",{className:"fa fa-plus"})," ","Create a new Tag"," "]})},F=(0,i.useMemo)((()=>[{Cell:({row:{original:{id:e}}})=>$&&(0,w.tZ)(Z.Z,{itemId:e,saveFaveStar:I,isStarred:X[e]}),Header:"",id:"id",disableSortBy:!0,size:"xs",hidden:!$},{Cell:({row:{original:{id:e,name:t}}})=>(0,w.tZ)(v.Z,{children:(0,w.tZ)(g.rU,{to:`/superset/all_entities/?id=${e}`,children:t})}),Header:(0,a.t)("Name"),accessor:"name"},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>(0,w.tZ)(x.w,{date:e,user:t}),Header:(0,a.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:e}})=>(0,w.BX)(r.eX,{className:"actions",children:[L&&(0,w.tZ)(d.Z,{title:(0,a.t)("Please confirm"),description:(0,w.BX)(w.HY,{children:[(0,a.t)("Are you sure you want to delete")," ",(0,w.tZ)("b",{children:e.dashboard_title}),"?"]}),onConfirm:()=>O([e]),children:e=>(0,w.tZ)(p.u,{id:"delete-action-tooltip",title:(0,a.t)("Delete"),placement:"bottom",children:(0,w.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e,children:(0,w.tZ)(m.Z.Trash,{})})})}),P&&(0,w.tZ)(p.u,{id:"edit-action-tooltip",title:(0,a.t)("Edit"),placement:"bottom",children:(0,w.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return t=e,B(!0),void M(t);var t},children:(0,w.tZ)(m.Z.EditAlt,{})})})]}),Header:(0,a.t)("Actions"),id:"actions",hidden:!L,disableSortBy:!0},{accessor:f.J.ChangedBy,hidden:!0}]),[$,L,D,n,t]),K=(0,i.useMemo)((()=>[{Header:(0,a.t)("Name"),id:"name",input:"search",operator:c.p.Contains},{Header:(0,a.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:c.p.RelationOneMany,unfilteredLabel:(0,a.t)("All"),fetchSelects:(0,r.tm)("tag","changed_by",(0,r.v$)((e=>(0,a.t)("An error occurred while fetching dataset datasource values: %s",e))),h),paginate:!0}]),[t,e.user]),q=[{desc:!1,id:"name",label:(0,a.t)("Alphabetical"),value:"alphabetical"},{desc:!0,id:"changed_on_delta_humanized",label:(0,a.t)("Recently modified"),value:"recently_modified"},{desc:!1,id:"changed_on_delta_humanized",label:(0,a.t)("Least recently modified"),value:"least_recently_modified"}],Q=[];return L&&Q.push({name:(0,a.t)("Bulk select"),buttonStyle:"secondary",onClick:U}),Q.push({name:(0,w.BX)(w.HY,{children:[(0,w.tZ)("i",{className:"fa fa-plus"})," ",(0,a.t)("Tag")]}),buttonStyle:"primary",onClick:()=>B(!0)}),(0,w.BX)(w.HY,{children:[(0,w.tZ)(y.Z,{show:E,onHide:()=>{B(!1),M(null)},editTag:H,refreshData:D,addSuccessToast:n,addDangerToast:t,clearOnHide:!0}),(0,w.tZ)(s.Z,{name:(0,a.t)("Tags"),buttons:Q}),(0,w.tZ)(d.Z,{title:(0,a.t)("Please confirm"),description:(0,a.t)("Are you sure you want to delete the selected tags?"),onConfirm:e=>O(e),children:e=>{const i=[];return L&&i.push({key:"delete",name:(0,a.t)("Delete"),type:"danger",onSelect:e}),(0,w.tZ)(w.HY,{children:(0,w.tZ)(c.Z,{bulkActions:i,bulkSelectEnabled:_,cardSortSelectOptions:q,className:"tags-list-view",columns:F,count:C,data:T,disableBulkSelect:U,refreshData:D,emptyState:Y,fetchData:N,filters:K,initialSort:R,loading:S,addDangerToast:t,addSuccessToast:n,pageSize:25,showThumbnails:j?j.thumbnails:(0,o.cr)(o.TT.Thumbnails),defaultViewMode:(0,o.cr)(o.TT.ListviewsDefaultCardView)?"card":"table"})})}})]})}))}}]);
//# sourceMappingURL=d285fc144f1da72909e5.chunk.js.map
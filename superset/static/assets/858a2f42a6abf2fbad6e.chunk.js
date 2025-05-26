"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8438],{52630:(e,t,n)=>{t.iB=t.YM=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=o(n(67294)),r=o(n(45697)),l=n(2371);function o(e){return e&&e.__esModule?e:{default:e}}t.YM=function(e){var t=e.itemTypeToComponent,n=e.WrapperComponent,o=void 0===n?"div":n,s=function(e){var n=e.currentPage,r=e.totalPages,s=e.boundaryPagesRange,d=e.siblingPagesRange,c=e.hideEllipsis,u=e.hidePreviousAndNextPageLinks,h=e.hideFirstAndLastPageLinks,g=e.onChange,p=e.disabled,m=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["currentPage","totalPages","boundaryPagesRange","siblingPagesRange","hideEllipsis","hidePreviousAndNextPageLinks","hideFirstAndLastPageLinks","onChange","disabled"]),b=(0,l.getPaginationModel)({currentPage:n,totalPages:r,boundaryPagesRange:s,siblingPagesRange:d,hideEllipsis:c,hidePreviousAndNextPageLinks:u,hideFirstAndLastPageLinks:h}),v=function(e,t,n){return function(r){var l,o,s,d=e[r.type],c=(o=(l=r).value,s=l.isDisabled,function(){!s&&n&&t!==o&&n(o)});return i.default.createElement(d,a({onClick:c},r))}}(t,n,g);return i.default.createElement(o,m,b.map((function(e){return v(a({},e,{isDisabled:!!p}))})))};return s.propTypes={currentPage:r.default.number.isRequired,totalPages:r.default.number.isRequired,boundaryPagesRange:r.default.number,siblingPagesRange:r.default.number,hideEllipsis:r.default.bool,hidePreviousAndNextPageLinks:r.default.bool,hideFirstAndLastPageLinks:r.default.bool,onChange:r.default.func,disabled:r.default.bool},s},t.iB=l.ITEM_TYPES},51794:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294);const i=()=>{const[e,t]=(0,a.useState)(0),[n,i]=(0,a.useState)(!1),r=(0,a.useRef)(null),l=(0,a.useRef)(null);return(0,a.useLayoutEffect)((()=>{var e;const n=()=>{const e=r.current;if(!e)return;const n=l.current,{scrollWidth:a,clientWidth:o,childNodes:s}=e;if(a>o){const e=6,a=(null==n?void 0:n.offsetWidth)||0,r=o-e,l=s.length;let d=0,c=0;for(let e=0;e<l;e+=1)r-d-a<=0&&(c+=1),d+=s[e].offsetWidth;l>1&&c?(i(!0),t(c)):(i(!1),t(1))}else i(!1),t(0)},a=new ResizeObserver(n),o=null==(e=r.current)?void 0:e.parentElement;return o&&a.observe(o),n(),()=>{a.disconnect()}}),[l.current]),[r,l,e,n]}},36674:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(67294),i=n(51995),r=n(11965),l=n(61988),o=n(58593),s=n(13322),d=n(35944);const c=i.iK.a`
  ${({theme:e})=>r.iv`
    font-size: ${e.typography.sizes.xl}px;
    display: flex;
    padding: 0 0 0 ${2*e.gridUnit}px;
  `};
`,u=({itemId:e,isStarred:t,showTooltip:n,saveFaveStar:i,fetchFaveStar:r})=>{(0,a.useEffect)((()=>{null==r||r(e)}),[r,e]);const u=(0,a.useCallback)((n=>{n.preventDefault(),i(e,!!t)}),[t,e,i]),h=(0,d.tZ)(c,{href:"#",onClick:u,className:"fave-unfave-icon",role:"button",children:t?(0,d.tZ)(s.Z.FavoriteSelected,{}):(0,d.tZ)(s.Z.FavoriteUnselected,{})});return n?(0,d.tZ)(o.u,{id:"fave-unfave-tooltip",title:(0,l.t)("Click to favorite/unfavorite"),children:h}):h}},52564:(e,t,n)=>{n.d(t,{u:()=>P});var a=n(11965),i=n(51995),r=n(61988),l=n(4715),o=n(67294),s=n(58593),d=n(99612),c=n(35944);const u=e=>a.iv`
  display: flex;
  font-size: ${e.typography.sizes.xl}px;
  font-weight: ${e.typography.weights.bold};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & .dynamic-title,
  & .dynamic-title-input {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & .dynamic-title {
    cursor: default;
  }
  & .dynamic-title-input {
    border: none;
    padding: 0;
    outline: none;

    &::placeholder {
      color: ${e.colors.grayscale.light1};
    }
  }

  & .input-sizer {
    position: absolute;
    left: -9999px;
    display: inline-block;
    white-space: pre;
  }
`,h=(0,o.memo)((({title:e,placeholder:t,onSave:n,canEdit:i,label:l})=>{const[h,g]=(0,o.useState)(!1),[p,m]=(0,o.useState)(e||""),b=(0,o.useRef)(null),[v,f]=(0,o.useState)(!1),{width:y,ref:x}=(0,d.NB)(),{width:P,ref:w}=(0,d.NB)({refreshMode:"debounce"});(0,o.useEffect)((()=>{m(e)}),[e]),(0,o.useEffect)((()=>{if(h&&null!=b&&b.current&&(b.current.focus(),b.current.setSelectionRange)){const{length:e}=b.current.value;b.current.setSelectionRange(e,e),b.current.scrollLeft=b.current.scrollWidth}}),[h]),(0,o.useLayoutEffect)((()=>{null!=x&&x.current&&(x.current.textContent=p||t)}),[p,t,x]),(0,o.useEffect)((()=>{b.current&&b.current.scrollWidth>b.current.clientWidth?f(!0):f(!1)}),[y,P]);const $=(0,o.useCallback)((()=>{i&&!h&&g(!0)}),[i,h]),E=(0,o.useCallback)((()=>{if(!i)return;const t=p.trim();m(t),e!==t&&n(t),g(!1)}),[i,p,n,e]),S=(0,o.useCallback)((e=>{i&&h&&m(e.target.value)}),[i,h]),_=(0,o.useCallback)((e=>{var t;i&&"Enter"===e.key&&(e.preventDefault(),null==(t=b.current)||t.blur())}),[i]);return(0,c.BX)("div",{css:u,ref:w,children:[(0,c.tZ)(s.u,{id:"title-tooltip",title:v&&p&&!h?p:null,children:i?(0,c.tZ)("input",{className:"dynamic-title-input","aria-label":null!=l?l:(0,r.t)("Title"),ref:b,onChange:S,onBlur:E,onClick:$,onKeyPress:_,placeholder:t,value:p,css:a.iv`
                cursor: ${h?"text":"pointer"};

                ${y&&y>0&&a.iv`
                  width: ${y+1}px;
                `}
              `}):(0,c.tZ)("span",{className:"dynamic-title","aria-label":null!=l?l:(0,r.t)("Title"),ref:b,children:p})}),(0,c.tZ)("span",{ref:x,className:"input-sizer","aria-hidden":!0,tabIndex:-1})]})}));var g=n(79789),p=n(36674),m=n(13322),b=n(35932);const v=e=>a.iv`
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
  &:focus-visible {
    outline: 2px solid ${e.colors.primary.dark2};
  }
`,f=e=>a.iv`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: ${e.colors.grayscale.light5};
  height: ${16*e.gridUnit}px;
  padding: 0 ${4*e.gridUnit}px;

  .editable-title {
    overflow: hidden;

    & > input[type='button'],
    & > span {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      white-space: nowrap;
    }
  }

  span[role='button'] {
    display: flex;
    height: 100%;
  }

  .title-panel {
    display: flex;
    align-items: center;
    min-width: 0;
    margin-right: ${12*e.gridUnit}px;
  }

  .right-button-panel {
    display: flex;
    align-items: center;
  }
`,y=e=>a.iv`
  display: flex;
  align-items: center;
  padding-left: ${2*e.gridUnit}px;

  & .fave-unfave-icon {
    padding: 0 ${e.gridUnit}px;

    &:first-of-type {
      padding-left: 0;
    }
  }
`,x=e=>a.iv`
  margin-left: ${2*e.gridUnit}px;
`,P=({editableTitleProps:e,showTitlePanelItems:t,certificatiedBadgeProps:n,showFaveStar:a,faveStarProps:o,titlePanelAdditionalItems:s,rightPanelAdditionalItems:d,additionalActionsMenu:u,menuDropdownProps:P,showMenuDropdown:w=!0,tooltipProps:$})=>{const E=(0,i.Fg)();return(0,c.BX)("div",{css:f,className:"header-with-actions",children:[(0,c.BX)("div",{className:"title-panel",children:[(0,c.tZ)(h,{...e}),t&&(0,c.BX)("div",{css:y,children:[(null==n?void 0:n.certifiedBy)&&(0,c.tZ)(g.Z,{...n}),a&&(0,c.tZ)(p.Z,{...o}),s]})]}),(0,c.BX)("div",{className:"right-button-panel",children:[d,(0,c.tZ)("div",{css:x,children:w&&(0,c.tZ)(l.Gj,{trigger:["click"],overlay:u,...P,children:(0,c.tZ)(b.Z,{css:v,buttonStyle:"tertiary","aria-label":(0,r.t)("Menu actions trigger"),tooltip:null==$?void 0:$.text,placement:null==$?void 0:$.placement,children:(0,c.tZ)(m.Z.MoreHoriz,{iconColor:E.colors.primary.dark2,iconSize:"l"})})})})]})]})}},80663:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(29119),i=n(51995),r=n(67294),l=n(61337),o=n(35944);const s=i.iK.div`
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
`,d=({id:e,initialWidth:t,minWidth:n,maxWidth:i,enable:d,children:c})=>{const[u,h]=function(e,t){const n=(0,r.useRef)(),[a,i]=(0,r.useState)(t);return(0,r.useEffect)((()=>{var t;n.current=null!=(t=n.current)?t:(0,l.rV)(l.dR.CommonResizableSidebarWidths,{}),n.current[e]&&i(n.current[e])}),[e]),[a,function(t){i(t),(0,l.LS)(l.dR.CommonResizableSidebarWidths,{...n.current,[e]:t})}]}(e,t);return(0,o.BX)(o.HY,{children:[(0,o.tZ)(s,{children:(0,o.tZ)(a.e,{enable:{right:d},handleClasses:{right:"sidebar-resizer"},size:{width:u,height:"100%"},minWidth:n,maxWidth:i,onResizeStop:(e,t,n,a)=>h(u+a.width)})}),c(u)]})}},86057:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(11965),i=n(51995),r=n(78186),l=n(13322),o=n(58593),s=n(35944);const d=function({warningMarkdown:e,size:t,marginRight:n}){const d=(0,i.Fg)();return(0,s.tZ)(o.u,{id:"warning-tooltip",title:(0,s.tZ)(r.Z,{source:e}),children:(0,s.tZ)(l.Z.AlertSolid,{iconColor:d.colors.alert.base,iconSize:t,css:(0,a.iv)({marginRight:null!=n?n:2*d.gridUnit},"","")})})}},3720:(e,t,n)=>{n.r(t),n.d(t,{datasetReducer:()=>ut,default:()=>gt});var a=n(67294),i=n(16550),r=n(31069),l=n(61988),o=n(68492),s=n(15926),d=n.n(s),c=n(72570);const u=(e,t)=>{const[n,i]=(0,a.useState)([]),s=t?encodeURIComponent(t):void 0,u=(0,a.useCallback)((async e=>{let t,n=[],a=0;for(;void 0===t||n.length<t;){const i=d().encode_uri({filters:e,page:a});try{const e=await r.Z.get({endpoint:`/api/v1/dataset/?q=${i}`});({count:t}=e.json);const{json:{result:l}}=e;n=[...n,...l],a+=1}catch(e){(0,c.Gb)((0,l.t)("There was an error fetching dataset")),o.Z.error((0,l.t)("There was an error fetching dataset"),e)}}i(n)}),[]);(0,a.useEffect)((()=>{const n=[{col:"database",opr:"rel_o_m",value:null==e?void 0:e.id},{col:"schema",opr:"eq",value:s},{col:"sql",opr:"dataset_is_null_or_empty",value:!0}];t&&u(n)}),[null==e?void 0:e.id,t,s,u]);const h=(0,a.useMemo)((()=>null==n?void 0:n.map((e=>e.table_name))),[n]);return{datasets:n,datasetNames:h}};var h,g=n(52564),p=n(35932),m=n(13322),b=n(83862);!function(e){e[e.SelectDatabase=0]="SelectDatabase",e[e.SelectCatalog=1]="SelectCatalog",e[e.SelectSchema=2]="SelectSchema",e[e.SelectTable=3]="SelectTable",e[e.ChangeDataset=4]="ChangeDataset"}(h||(h={}));var v=n(51995),f=n(11965);const y=v.iK.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.colors.grayscale.light5};
`,x=v.iK.div`
  width: ${({theme:e,width:t})=>null!=t?t:80*e.gridUnit}px;
  max-width: ${({theme:e,width:t})=>null!=t?t:80*e.gridUnit}px;
  flex-direction: column;
  flex: 1 0 auto;
`,P=v.iK.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,w=v.iK.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`,$=(0,v.iK)(w)`
  flex: 1 0 auto;
  position: relative;
`,E=(0,v.iK)(w)`
  flex: 1 0 auto;
  height: auto;
`,S=(0,v.iK)(w)`
  flex: 0 0 auto;
  height: ${({theme:e})=>16*e.gridUnit}px;
  z-index: 0;
`,_=v.iK.div`
  ${({theme:e})=>`\n  flex: 0 0 auto;\n  height: ${16*e.gridUnit}px;\n  border-bottom: 2px solid ${e.colors.grayscale.light2};\n\n  .header-with-actions {\n    height: ${15.5*e.gridUnit}px;\n  }\n  `}
`,Z=v.iK.div`
  ${({theme:e})=>`\n  margin: ${4*e.gridUnit}px;\n  font-size: ${e.typography.sizes.xl}px;\n  font-weight: ${e.typography.weights.bold};\n  `}
`,T=v.iK.div`
  ${({theme:e})=>`\n  height: 100%;\n  border-right: 1px solid ${e.colors.grayscale.light2};\n  `}
`,I=v.iK.div`
  width: 100%;
  position: relative;
`,U=v.iK.div`
  ${({theme:e})=>`\n  border-left: 1px solid ${e.colors.grayscale.light2};\n  color: ${e.colors.success.base};\n  `}
`,k=v.iK.div`
  ${({theme:e})=>`\n  height: ${16*e.gridUnit}px;\n  width: 100%;\n  border-top: 1px solid ${e.colors.grayscale.light2};\n  border-bottom: 1px solid ${e.colors.grayscale.light2};\n  color: ${e.colors.info.base};\n  border-top: ${e.gridUnit/4}px solid\n    ${e.colors.grayscale.light2};\n  padding: ${4*e.gridUnit}px;\n  display: flex;\n  justify-content: flex-end;\n  background-color: ${e.colors.grayscale.light5};\n  z-index: ${e.zIndex.max}\n  `}
`,L=v.iK.div`
  .ant-btn {
    span {
      margin-right: 0;
    }

    &:disabled {
      svg {
        color: ${({theme:e})=>e.colors.grayscale.light1};
      }
    }
  }
`,C=e=>f.iv`
  width: ${21.5*e.gridUnit}px;

  &:disabled {
    background-color: ${e.colors.grayscale.light3};
    color: ${e.colors.grayscale.light1};
  }
`;var z=n(35944);const N=(0,l.t)("New dataset"),M={text:(0,l.t)("Select a database table and create dataset"),placement:"bottomRight"},K=()=>(0,z.BX)(p.Z,{buttonStyle:"primary",tooltip:null==M?void 0:M.text,placement:null==M?void 0:M.placement,disabled:!0,css:C,children:[(0,z.tZ)(m.Z.Save,{iconSize:"m"}),(0,l.t)("Save")]}),A=()=>(0,z.BX)(b.Menu,{children:[(0,z.tZ)(b.Menu.Item,{children:(0,l.t)("Settings")}),(0,z.tZ)(b.Menu.Item,{children:(0,l.t)("Delete")})]});function R({setDataset:e,title:t=N,editing:n=!1}){const a={title:null!=t?t:N,placeholder:N,onSave:t=>{e({type:h.ChangeDataset,payload:{name:"dataset_name",value:t}})},canEdit:!1,label:(0,l.t)("dataset name")};return(0,z.tZ)(L,{children:n?(0,z.tZ)(g.u,{editableTitleProps:a,showTitlePanelItems:!1,showFaveStar:!1,faveStarProps:{itemId:1,saveFaveStar:()=>{}},titlePanelAdditionalItems:(0,z.tZ)(z.HY,{}),rightPanelAdditionalItems:K(),additionalActionsMenu:A(),menuDropdownProps:{disabled:!0},tooltipProps:M}):(0,z.tZ)(Z,{children:t||N})})}var B,X,D=n(82607),Y=n(71262),F=n(73727),V=n(55786),O=n(93197),G=n(94301);function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},j.apply(null,arguments)}const H=({title:e,titleId:t,...n},i)=>a.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",width:160,height:166,fill:"none",ref:i,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,B||(B=a.createElement("path",{fill:"#FAFAFA",fillRule:"evenodd",d:"M123.638 8a.5.5 0 0 0-.5.5V158h28.758V8.5a.5.5 0 0 0-.5-.5zM84.793 40.643a.5.5 0 0 1 .5-.5h27.759a.5.5 0 0 1 .5.5V158H84.793zM46.95 72.285a.5.5 0 0 0-.5.5V158h28.758V72.785a.5.5 0 0 0-.5-.5zM8.604 93.715a.5.5 0 0 0-.5.5V158h28.758V94.215a.5.5 0 0 0-.5-.5z",clipRule:"evenodd"})),X||(X=a.createElement("path",{fill:"#D9D9D9",d:"M123.138 158h-.5v.5h.5zm28.758 0v.5h.5v-.5zm-38.344 0v.5h.5v-.5zm-28.759 0h-.5v.5h.5zm-38.344-.001h-.5v.5h.5zm28.758 0v.5h.5v-.5zM8.104 158h-.5v.5h.5zm28.758 0v.5h.5v-.5zM123.639 8.5v-1a1 1 0 0 0-1 1zm0 149.5V8.5h-1V158zm28.258-.5h-28.758v1h28.758zm-.5-149V158h1V8.5zm0 0h1a1 1 0 0 0-1-1zm-27.758 0h27.758v-1h-27.758zM85.293 39.643a1 1 0 0 0-1 1h1zm27.759 0H85.293v1h27.759zm1 1a1 1 0 0 0-1-1v1zm0 117.357V40.643h-1V158zm-29.259.5h28.759v-1H84.793zm-.5-117.857V158h1V40.643zM46.95 72.785v-1a1 1 0 0 0-1 1zm0 85.214V72.785h-1V158zm28.258-.5H46.45v1h28.758zm-.5-84.714V158h1V72.785zm0 0h1a1 1 0 0 0-1-1zm-27.758 0h27.758v-1H46.95zM8.604 94.215v-1a1 1 0 0 0-1 1zm0 63.785V94.215h-1V158zm28.258-.5H8.104v1h28.758zm-.5-63.285V158h1V94.215zm0 0h1a1 1 0 0 0-1-1zm-27.758 0h27.758v-1H8.604z"}))),W=(0,a.forwardRef)(H);var q=n(14114),Q=n(34858),J=n(93139),ee=n(30381),te=n.n(ee),ne=n(51794),ae=n(58593);const ie=v.iK.div`
  & > span {
    width: 100%;
    display: flex;

    .ant-tooltip-open {
      display: inline;
    }
  }
`,re=v.iK.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
`,le=v.iK.span`
  &:not(:last-child)::after {
    content: ', ';
  }
`,oe=v.iK.div`
  .link {
    color: ${({theme:e})=>e.colors.grayscale.light5};
    display: block;
    text-decoration: underline;
  }
`,se=v.iK.span`
  ${({theme:e})=>`\n  cursor: pointer;\n  color: ${e.colors.primary.dark1};\n  font-weight: ${e.typography.weights.normal};\n  `}
`;function de({items:e,renderVisibleItem:t=(e=>e),renderTooltipItem:n=(e=>e),getKey:i=(e=>e),maxLinks:r=20}){const[o,s,d,c]=(0,ne.Z)(),u=(0,a.useMemo)((()=>e.length>r?e.length-r:void 0),[e,r]),h=(0,a.useMemo)((()=>(0,z.tZ)(re,{ref:o,children:e.map((e=>(0,z.tZ)(le,{children:t(e)},i(e))))})),[i,e,t]),g=(0,a.useMemo)((()=>e.slice(0,r).map((e=>(0,z.tZ)(oe,{children:n(e)},i(e))))),[i,e,r,n]);return(0,z.tZ)(ie,{children:(0,z.BX)(ae.u,{placement:"top",title:d?(0,z.BX)(z.HY,{children:[g,u&&(0,z.tZ)("span",{children:(0,l.t)("+ %s more",u)})]}):null,children:[h,c&&(0,z.BX)(se,{ref:s,children:["+",d]})]})})}const ce=e=>({key:e.id,to:`/superset/dashboard/${e.id}`,target:"_blank",rel:"noreferer noopener",children:e.dashboard_title}),ue=e=>f.iv`
  color: ${e.colors.grayscale.light5};
  text-decoration: underline;
  &:hover {
    color: inherit;
  }
`,he=[{key:"slice_name",title:(0,l.t)("Chart"),width:"320px",sorter:!0,render:(e,t)=>(0,z.tZ)(F.rU,{to:t.url,children:t.slice_name})},{key:"owners",title:(0,l.t)("Chart owners"),width:"242px",render:(e,t)=>{var n,a;return(0,z.tZ)(de,{items:null!=(n=null==(a=t.owners)?void 0:a.map((e=>`${e.first_name} ${e.last_name}`)))?n:[]})}},{key:"last_saved_at",title:(0,l.t)("Chart last modified"),width:"209px",sorter:!0,defaultSortOrder:"descend",render:(e,t)=>t.last_saved_at?te().utc(t.last_saved_at).fromNow():null},{key:"last_saved_by.first_name",title:(0,l.t)("Chart last modified by"),width:"216px",sorter:!0,render:(e,t)=>t.last_saved_by?`${t.last_saved_by.first_name} ${t.last_saved_by.last_name}`:null},{key:"dashboards",title:(0,l.t)("Dashboard usage"),width:"420px",render:(e,t)=>(0,z.tZ)(de,{items:t.dashboards,renderVisibleItem:e=>(0,z.tZ)(F.rU,{...ce(e)}),renderTooltipItem:e=>(0,z.tZ)(F.rU,{...ce(e),css:ue}),getKey:e=>e.id})}],ge=e=>f.iv`
  && th.ant-table-cell {
    color: ${e.colors.grayscale.light1};
  }

  .ant-table-placeholder {
    display: none;
  }
`,pe=(0,z.BX)(z.HY,{children:[(0,z.tZ)(m.Z.PlusOutlined,{iconSize:"m",css:f.iv`
        & > .anticon {
          line-height: 0;
        }
      `}),(0,l.t)("Create chart with dataset")]}),me=(0,v.iK)(G.XJ)`
  margin: ${({theme:e})=>13*e.gridUnit}px 0;
`,be=({datasetId:e})=>{const{loading:t,recordCount:n,data:i,onChange:r}=(e=>{const{addDangerToast:t}=(0,q.e1)(),n=(0,a.useMemo)((()=>[{id:"datasource_id",operator:J.p.Equals,value:e}]),[e]),{state:{loading:i,resourceCount:r,resourceCollection:o},fetchData:s}=(0,Q.Yi)("chart",(0,l.t)("chart"),t,!0,[],n),d=(0,a.useMemo)((()=>o.map((e=>({...e,key:e.id})))),[o]),c=(0,a.useCallback)(((e,t,n)=>{var a,i;const r=(null!=(a=e.current)?a:1)-1,l=null!=(i=e.pageSize)?i:0,o=(0,V.Z)(n).filter((({columnKey:e})=>"string"==typeof e)).map((({columnKey:e,order:t})=>({id:e,desc:"descend"===t})));s({pageIndex:r,pageSize:l,sortBy:o,filters:[]})}),[s]);return(0,a.useEffect)((()=>{s({pageIndex:0,pageSize:25,sortBy:[{id:"last_saved_at",desc:!0}],filters:[]})}),[s]),{loading:i,recordCount:r,data:d,onChange:c}})(e),o=(0,a.useCallback)((()=>window.open(`/explore/?dataset_type=table&dataset_id=${e}`,"_blank")),[e]);return(0,z.BX)("div",{css:i.length?null:ge,children:[(0,z.tZ)(O.ZP,{columns:he,data:i,size:O.ex.Middle,defaultPageSize:25,recordCount:n,loading:t,onChange:r}),i.length||t?null:(0,z.tZ)(me,{image:(0,z.tZ)(W,{}),title:(0,l.t)("No charts"),description:(0,l.t)("This dataset is not used to power any charts."),buttonText:pe,buttonAction:o})]})},ve=(0,v.iK)(Y.ZP)`
  ${({theme:e})=>`\n  margin-top: ${8.5*e.gridUnit}px;\n  padding-left: ${4*e.gridUnit}px;\n  padding-right: ${4*e.gridUnit}px;\n\n  .ant-tabs-top > .ant-tabs-nav::before {\n    width: ${50*e.gridUnit}px;\n  }\n  `}
`,fe=v.iK.div`
  ${({theme:e})=>`\n  .ant-badge {\n    width: ${8*e.gridUnit}px;\n    margin-left: ${2.5*e.gridUnit}px;\n  }\n  `}
`,ye={USAGE_TEXT:(0,l.t)("Usage"),COLUMNS_TEXT:(0,l.t)("Columns"),METRICS_TEXT:(0,l.t)("Metrics")},xe=({id:e})=>{const{usageCount:t}=(e=>{const[t,n]=(0,a.useState)(0),i=(0,a.useCallback)((()=>r.Z.get({endpoint:`/api/v1/dataset/${e}/related_objects`}).then((({json:e})=>{n(null==e?void 0:e.charts.count)})).catch((e=>{(0,c.Gb)((0,l.t)("There was an error fetching dataset's related objects")),o.Z.error(e)}))),[e]);return(0,a.useEffect)((()=>{e&&i()}),[e,i]),{usageCount:t}})(e),n=(0,z.BX)(fe,{children:[(0,z.tZ)("span",{children:ye.USAGE_TEXT}),t>0&&(0,z.tZ)(D.Z,{count:t})]});return(0,z.BX)(ve,{moreIcon:null,fullWidth:!1,children:[(0,z.tZ)(Y.ZP.TabPane,{tab:ye.COLUMNS_TEXT},"1"),(0,z.tZ)(Y.ZP.TabPane,{tab:ye.METRICS_TEXT},"2"),(0,z.tZ)(Y.ZP.TabPane,{tab:n,children:(0,z.tZ)(be,{datasetId:e})},"3")]})};var Pe=n(23525),we=n(29487);const $e=(e,t,n)=>{var a;return null==t||null==(a=t[e])||null==a.localeCompare?void 0:a.localeCompare(null==n?void 0:n[e])};var Ee=n(89419);const Se=v.iK.div`
  padding: ${({theme:e})=>8*e.gridUnit}px
    ${({theme:e})=>6*e.gridUnit}px;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`,_e=(0,v.iK)(G.XJ)`
  max-width: 50%;

  p {
    width: ${({theme:e})=>115*e.gridUnit}px;
  }
`,Ze=(0,l.t)("Datasets can be created from database tables or SQL queries. Select a database table to the left or "),Te=(0,l.t)("create dataset from SQL query"),Ie=(0,l.t)(" to open SQL Lab. From there you can save the query as a dataset."),Ue=(0,l.t)("Select dataset source"),ke=(0,l.t)("No table columns"),Le=(0,l.t)("This database table does not contain any data. Please select a different table."),Ce=(0,l.t)("An Error Occurred"),ze=(0,l.t)("Unable to load columns for the selected table. Please select a different table."),Ne=e=>{const{hasError:t,tableName:n,hasColumns:a}=e;let i="empty-dataset.svg",r=Ue,l=(0,z.BX)(z.HY,{children:[Ze,(0,z.tZ)(F.rU,{to:"/sqllab",children:(0,z.tZ)("span",{role:"button",tabIndex:0,children:Te})}),Ie]});return t?(r=Ce,l=(0,z.tZ)(z.HY,{children:ze}),i=void 0):n&&!a&&(i="no-columns.svg",r=ke,l=(0,z.tZ)(z.HY,{children:Le})),(0,z.tZ)(Se,{children:(0,z.tZ)(_e,{image:i,title:r,description:l})})};var Me;!function(e){e.ABSOLUTE="absolute",e.RELATIVE="relative"}(Me||(Me={}));const Ke=v.iK.div`
  ${({theme:e,position:t})=>`\n  position: ${t};\n  margin: ${4*e.gridUnit}px\n    ${3*e.gridUnit}px\n    ${3*e.gridUnit}px\n    ${6*e.gridUnit}px;\n  font-size: ${6*e.gridUnit}px;\n  font-weight: ${e.typography.weights.medium};\n  padding-bottom: ${3*e.gridUnit}px;\n\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  .anticon:first-of-type {\n    margin-right: ${4*e.gridUnit}px;\n  }\n\n  .anticon:nth-of-type(2) {\n    margin-left: ${4*e.gridUnit}px;\n  `}
`,Ae=v.iK.div`
  ${({theme:e})=>`\n  margin-left: ${6*e.gridUnit}px;\n  margin-bottom: ${3*e.gridUnit}px;\n  font-weight: ${e.typography.weights.bold};\n  `}
`,Re=v.iK.div`
  ${({theme:e})=>`\n  padding: ${8*e.gridUnit}px\n    ${6*e.gridUnit}px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  `}
`,Be=v.iK.div`
  ${({theme:e})=>`\n  max-width: 50%;\n  width: 200px;\n\n  img {\n    width: 120px;\n    margin-left: 40px;\n  }\n\n  div {\n    width: 100%;\n    margin-top: ${3*e.gridUnit}px;\n    text-align: center;\n    font-weight: ${e.typography.weights.normal};\n    font-size: ${e.typography.sizes.l}px;\n    color: ${e.colors.grayscale.light1};\n  }\n  `}
`,Xe=v.iK.div`
  ${({theme:e})=>`\n  position: relative;\n  margin: ${3*e.gridUnit}px;\n  margin-left: ${6*e.gridUnit}px;\n  height: calc(100% - ${60*e.gridUnit}px);\n  overflow: auto;\n  `}
`,De=v.iK.div`
  ${({theme:e})=>`\n  position: relative;\n  margin: ${3*e.gridUnit}px;\n  margin-left: ${6*e.gridUnit}px;\n  height: calc(100% - ${30*e.gridUnit}px);\n  overflow: auto;\n  `}
`,Ye=v.iK.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`,Fe=(0,v.iK)(we.Z)`
  ${({theme:e})=>`\n  border: 1px solid ${e.colors.info.base};\n  padding: ${4*e.gridUnit}px;\n  margin: ${6*e.gridUnit}px ${6*e.gridUnit}px\n    ${8*e.gridUnit}px;\n  .view-dataset-button {\n    position: absolute;\n    top: ${4*e.gridUnit}px;\n    right: ${4*e.gridUnit}px;\n    font-weight: ${e.typography.weights.normal};\n\n    &:hover {\n      color: ${e.colors.secondary.dark3};\n      text-decoration: underline;\n    }\n  }\n  `}
`,Ve=(0,l.t)("Refreshing columns"),Oe=(0,l.t)("Table columns"),Ge=(0,l.t)("Loading"),je=["5","10","15","25"],He=[{title:"Column Name",dataIndex:"name",key:"name",sorter:(e,t)=>$e("name",e,t)},{title:"Datatype",dataIndex:"type",key:"type",width:"100px",sorter:(e,t)=>$e("type",e,t)}],We=(0,l.t)("This table already has a dataset associated with it. You can only associate one dataset with a table.\n"),qe=(0,l.t)("View Dataset"),Qe=({tableName:e,columnList:t,loading:n,hasError:a,datasets:i})=>{var r;const o=(0,v.Fg)(),s=null!=(r=(null==t?void 0:t.length)>0)&&r,d=null==i?void 0:i.map((e=>e.table_name)),c=null==i?void 0:i.find((t=>t.table_name===e));let u,h;return n&&(h=(0,z.tZ)(Re,{children:(0,z.BX)(Be,{children:[(0,z.tZ)("img",{alt:Ge,src:Ee}),(0,z.tZ)("div",{children:Ve})]})})),n||(u=!n&&e&&s&&!a?(0,z.BX)(z.HY,{children:[(0,z.tZ)(Ae,{children:Oe}),c?(0,z.tZ)(Xe,{children:(0,z.tZ)(Ye,{children:(0,z.tZ)(O.ZP,{loading:n,size:O.ex.Small,columns:He,data:t,pageSizeOptions:je,defaultPageSize:25})})}):(0,z.tZ)(De,{children:(0,z.tZ)(Ye,{children:(0,z.tZ)(O.ZP,{loading:n,size:O.ex.Small,columns:He,data:t,pageSizeOptions:je,defaultPageSize:25})})})]}):(0,z.tZ)(Ne,{hasColumns:s,hasError:a,tableName:e})),(0,z.BX)(z.HY,{children:[e&&(0,z.BX)(z.HY,{children:[(null==d?void 0:d.includes(e))&&(g=c,(0,z.tZ)(Fe,{closable:!1,type:"info",showIcon:!0,message:(0,l.t)("This table already has a dataset"),description:(0,z.BX)(z.HY,{children:[We,(0,z.tZ)("span",{role:"button",onClick:()=>{window.open(null==g?void 0:g.explore_url,"_blank","noreferrer noopener popup=false")},tabIndex:0,className:"view-dataset-button",children:qe})]})})),(0,z.BX)(Ke,{position:!n&&s?Me.RELATIVE:Me.ABSOLUTE,title:e||"",children:[e&&(0,z.tZ)(m.Z.Table,{iconColor:o.colors.grayscale.base}),e]})]}),u,h]});var g},Je=({tableName:e,dbId:t,catalog:n,schema:i,setHasColumns:s,datasets:d})=>{const[u,h]=(0,a.useState)([]),[g,p]=(0,a.useState)(!1),[m,b]=(0,a.useState)(!1),v=(0,a.useRef)(e);return(0,a.useEffect)((()=>{v.current=e,e&&i&&t&&(async e=>{const{dbId:t,tableName:a,schema:i}=e;p(!0),null==s||s(!1);const d=`/api/v1/database/${t}/table_metadata/${(0,Pe.UK)({name:a,catalog:n,schema:i})}`;try{const e=await r.Z.get({endpoint:d});if((e=>{let t=!0;if("string"!=typeof(null==e?void 0:e.name)&&(t=!1),t&&!Array.isArray(e.columns)&&(t=!1),t&&e.columns.length>0){const n=e.columns.some(((e,t)=>{const n=(e=>{let t=!0;const n="The object provided to isITableColumn does match the interface.";return"string"!=typeof(null==e?void 0:e.name)&&(t=!1,console.error(`${n} The property 'name' is required and must be a string`)),t&&"string"!=typeof(null==e?void 0:e.type)&&(t=!1,console.error(`${n} The property 'type' is required and must be a string`)),t})(e);return n||console.error(`The provided object does not match the IDatabaseTable interface. columns[${t}] is invalid and does not match the ITableColumn interface`),!n}));t=!n}return t})(null==e?void 0:e.json)){const t=e.json;t.name===v.current&&(h(t.columns),null==s||s(t.columns.length>0),b(!1))}else h([]),null==s||s(!1),b(!0),(0,c.Gb)((0,l.t)("The API response from %s does not match the IDatabaseTable interface.",d)),o.Z.error((0,l.t)("The API response from %s does not match the IDatabaseTable interface.",d))}catch(e){h([]),null==s||s(!1),b(!0)}finally{p(!1)}})({tableName:e,dbId:t,schema:i})}),[e,t,i]),(0,z.tZ)(Qe,{columnList:u,hasError:m,loading:g,tableName:e,datasets:d})};var et=n(17982),tt=n(61337);const nt=v.iK.div`
  ${({theme:e})=>`\n    padding: ${4*e.gridUnit}px;\n    height: 100%;\n    background-color: ${e.colors.grayscale.light5};\n    position: relative;\n    .emptystate {\n      height: auto;\n      margin-top: ${17.5*e.gridUnit}px;\n    }\n    .section-title {\n      margin-top: ${5.5*e.gridUnit}px;\n      margin-bottom: ${11*e.gridUnit}px;\n      font-weight: ${e.typography.weights.bold};\n    }\n    .table-title {\n      margin-top: ${11*e.gridUnit}px;\n      margin-bottom: ${6*e.gridUnit}px;\n      font-weight: ${e.typography.weights.bold};\n    }\n    .options-list {\n      overflow: auto;\n      position: absolute;\n      bottom: 0;\n      top: ${92.25*e.gridUnit}px;\n      left: ${3.25*e.gridUnit}px;\n      right: 0;\n\n      .no-scrollbar {\n        margin-right: ${4*e.gridUnit}px;\n      }\n\n      .options {\n        cursor: pointer;\n        padding: ${1.75*e.gridUnit}px;\n        border-radius: ${e.borderRadius}px;\n        :hover {\n          background-color: ${e.colors.grayscale.light4}\n        }\n      }\n\n      .options-highlighted {\n        cursor: pointer;\n        padding: ${1.75*e.gridUnit}px;\n        border-radius: ${e.borderRadius}px;\n        background-color: ${e.colors.primary.dark1};\n        color: ${e.colors.grayscale.light5};\n      }\n\n      .options, .options-highlighted {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n      }\n    }\n    form > span[aria-label="refresh"] {\n      position: absolute;\n      top: ${69*e.gridUnit}px;\n      left: ${42.75*e.gridUnit}px;\n      font-size: ${4.25*e.gridUnit}px;\n    }\n    .table-form {\n      margin-bottom: ${8*e.gridUnit}px;\n    }\n    .loading-container {\n      position: absolute;\n      top: ${89.75*e.gridUnit}px;\n      left: 0;\n      right: 0;\n      text-align: center;\n      img {\n        width: ${20*e.gridUnit}px;\n        margin-bottom: ${2.5*e.gridUnit}px;\n      }\n      p {\n        color: ${e.colors.grayscale.light1};\n      }\n    }\n`}
`;function at({setDataset:e,dataset:t,datasetNames:n}){const{addDangerToast:i}=(0,q.e1)(),r=(0,a.useCallback)((t=>{e({type:h.SelectDatabase,payload:{db:t}})}),[e]);(0,a.useEffect)((()=>{const e=(0,tt.rV)(tt.dR.Database,null);e&&r(e)}),[r]);const o=(0,a.useCallback)((e=>(0,z.tZ)(et.ez,{table:null!=n&&n.includes(e.value)?{...e,extra:{warning_markdown:(0,l.t)("This table already has a dataset")}}:e})),[n]);return(0,z.tZ)(nt,{children:(0,z.tZ)(et.ZP,{database:null==t?void 0:t.db,handleError:i,emptyState:(0,G.UX)(!1),onDbChange:r,onCatalogChange:t=>{t&&e({type:h.SelectCatalog,payload:{name:"catalog",value:t}})},onSchemaChange:t=>{t&&e({type:h.SelectSchema,payload:{name:"schema",value:t}})},onTableSelectChange:t=>{e({type:h.SelectTable,payload:{name:"table_name",value:t}})},sqlLabMode:!1,customTableOptionLabelRenderer:o,...(null==t?void 0:t.catalog)&&{catalog:t.catalog},...(null==t?void 0:t.schema)&&{schema:t.schema}})})}var it=n(97381),rt=n(3741);const lt=["db","schema","table_name"],ot=[rt.Ph,rt.FY,rt.Eh,rt.TA],st=(0,q.ZP)((function({datasetObject:e,addDangerToast:t,hasColumns:n=!1,datasets:a}){const r=(0,i.k6)(),{createResource:o}=(0,Q.LE)("dataset",(0,l.t)("dataset"),t),s=(0,l.t)("Select a database table."),d=(0,l.t)("Create dataset and create chart"),c=!(null!=e&&e.table_name)||!n||(null==a?void 0:a.includes(null==e?void 0:e.table_name));return(0,z.BX)(z.HY,{children:[(0,z.tZ)(p.Z,{onClick:()=>{if(e){const t=(e=>{let t=0;const n=Object.keys(e).reduce(((n,a)=>(lt.includes(a)&&e[a]&&(t+=1),t)),0);return ot[n]})(e);(0,it.logEvent)(t,e)}else(0,it.logEvent)(rt.Ph,{});r.goBack()},children:(0,l.t)("Cancel")}),(0,z.tZ)(p.Z,{buttonStyle:"primary",disabled:c,tooltip:null!=e&&e.table_name?void 0:s,onClick:()=>{if(e){var t;const n={database:null==(t=e.db)?void 0:t.id,catalog:e.catalog,schema:e.schema,table_name:e.table_name};o(n).then((t=>{t&&"number"==typeof t&&((0,it.logEvent)(rt.P$,e),r.push(`/chart/add/?dataset=${e.table_name}`))}))}},children:d})]})}));var dt=n(80663);function ct({header:e,leftPanel:t,datasetPanel:n,rightPanel:a,footer:i}){const r=(0,v.Fg)();return(0,z.BX)(y,{children:[e&&(0,z.tZ)(_,{children:e}),(0,z.BX)($,{children:[t&&(0,z.tZ)(dt.Z,{id:"dataset",initialWidth:80*r.gridUnit,minWidth:80*r.gridUnit,enable:!0,children:e=>(0,z.tZ)(x,{width:e,children:(0,z.tZ)(T,{children:t})})}),(0,z.BX)(P,{children:[(0,z.BX)(E,{children:[n&&(0,z.tZ)(I,{children:n}),a&&(0,z.tZ)(U,{children:a})]}),(0,z.tZ)(S,{children:i&&(0,z.tZ)(k,{children:i})})]})]})]})}function ut(e,t){const n={...e||{}};switch(t.type){case h.SelectDatabase:return{...n,...t.payload,catalog:null,schema:null,table_name:null};case h.SelectCatalog:return{...n,[t.payload.name]:t.payload.value,schema:null,table_name:null};case h.SelectSchema:return{...n,[t.payload.name]:t.payload.value,table_name:null};case h.SelectTable:return{...n,[t.payload.name]:t.payload.value};case h.ChangeDataset:return{...n,[t.payload.name]:t.payload.value};default:return null}}const ht="/tablemodelview/list/?pageIndex=0&sortColumn=changed_on_delta_humanized&sortOrder=desc";function gt(){const[e,t]=(0,a.useReducer)(ut,null),[n,r]=(0,a.useState)(!1),[l,o]=(0,a.useState)(!1),{datasets:s,datasetNames:d}=u(null==e?void 0:e.db,null==e?void 0:e.schema),{datasetId:c}=(0,i.UO)();return(0,a.useEffect)((()=>{Number.isNaN(parseInt(c,10))||o(!0)}),[c]),(0,z.tZ)(ct,{header:(0,z.tZ)(R,{setDataset:t,title:null==e?void 0:e.table_name}),leftPanel:l?null:(0,z.tZ)(at,{setDataset:t,dataset:e,datasetNames:d}),datasetPanel:l?(0,z.tZ)(xe,{id:c}):(0,z.tZ)(Je,{tableName:null==e?void 0:e.table_name,dbId:null==e||null==(h=e.db)?void 0:h.id,catalog:null==e?void 0:e.catalog,schema:null==e?void 0:e.schema,setHasColumns:r,datasets:s}),footer:(0,z.tZ)(st,{url:ht,datasetObject:e,hasColumns:n,datasets:d})});var h}},56590:(e,t)=>{t.ITEM_TYPES={PAGE:"PAGE",ELLIPSIS:"ELLIPSIS",FIRST_PAGE_LINK:"FIRST_PAGE_LINK",PREVIOUS_PAGE_LINK:"PREVIOUS_PAGE_LINK",NEXT_PAGE_LINK:"NEXT_PAGE_LINK",LAST_PAGE_LINK:"LAST_PAGE_LINK"},t.ITEM_KEYS={FIRST_ELLIPSIS:-1,SECOND_ELLIPSIS:-2,FIRST_PAGE_LINK:-3,PREVIOUS_PAGE_LINK:-4,NEXT_PAGE_LINK:-5,LAST_PAGE_LINK:-6}},53804:(e,t,n)=>{var a=n(56590);t.createFirstEllipsis=function(e){return{type:a.ITEM_TYPES.ELLIPSIS,key:a.ITEM_KEYS.FIRST_ELLIPSIS,value:e,isActive:!1}},t.createSecondEllipsis=function(e){return{type:a.ITEM_TYPES.ELLIPSIS,key:a.ITEM_KEYS.SECOND_ELLIPSIS,value:e,isActive:!1}},t.createFirstPageLink=function(e){var t=e.currentPage;return{type:a.ITEM_TYPES.FIRST_PAGE_LINK,key:a.ITEM_KEYS.FIRST_PAGE_LINK,value:1,isActive:1===t}},t.createPreviousPageLink=function(e){var t=e.currentPage;return{type:a.ITEM_TYPES.PREVIOUS_PAGE_LINK,key:a.ITEM_KEYS.PREVIOUS_PAGE_LINK,value:Math.max(1,t-1),isActive:1===t}},t.createNextPageLink=function(e){var t=e.currentPage,n=e.totalPages;return{type:a.ITEM_TYPES.NEXT_PAGE_LINK,key:a.ITEM_KEYS.NEXT_PAGE_LINK,value:Math.min(n,t+1),isActive:t===n}},t.createLastPageLink=function(e){var t=e.currentPage,n=e.totalPages;return{type:a.ITEM_TYPES.LAST_PAGE_LINK,key:a.ITEM_KEYS.LAST_PAGE_LINK,value:n,isActive:t===n}},t.createPageFunctionFactory=function(e){var t=e.currentPage;return function(e){return{type:a.ITEM_TYPES.PAGE,key:e,value:e,isActive:e===t}}}},1158:(e,t)=>{t.createRange=function(e,t){for(var n=[],a=e;a<=t;a++)n.push(a);return n}},2371:(e,t,n)=>{var a=n(1158),i=n(53804);t.getPaginationModel=function(e){if(null==e)throw new Error("getPaginationModel(): options object should be a passed");var t=Number(e.totalPages);if(isNaN(t))throw new Error("getPaginationModel(): totalPages should be a number");if(t<0)throw new Error("getPaginationModel(): totalPages shouldn't be a negative number");var n=Number(e.currentPage);if(isNaN(n))throw new Error("getPaginationModel(): currentPage should be a number");if(n<0)throw new Error("getPaginationModel(): currentPage shouldn't be a negative number");if(n>t)throw new Error("getPaginationModel(): currentPage shouldn't be greater than totalPages");var r=null==e.boundaryPagesRange?1:Number(e.boundaryPagesRange);if(isNaN(r))throw new Error("getPaginationModel(): boundaryPagesRange should be a number");if(r<0)throw new Error("getPaginationModel(): boundaryPagesRange shouldn't be a negative number");var l=null==e.siblingPagesRange?1:Number(e.siblingPagesRange);if(isNaN(l))throw new Error("getPaginationModel(): siblingPagesRange should be a number");if(l<0)throw new Error("getPaginationModel(): siblingPagesRange shouldn't be a negative number");var o=Boolean(e.hidePreviousAndNextPageLinks),s=Boolean(e.hideFirstAndLastPageLinks),d=Boolean(e.hideEllipsis),c=d?0:1,u=[],h=i.createPageFunctionFactory(e);if(s||u.push(i.createFirstPageLink(e)),o||u.push(i.createPreviousPageLink(e)),1+2*c+2*l+2*r>=t){var g=a.createRange(1,t).map(h);u.push.apply(u,g)}else{var p=r,m=a.createRange(1,p).map(h),b=t+1-r,v=t,f=a.createRange(b,v).map(h),y=Math.min(Math.max(n-l,p+c+1),b-c-2*l-1),x=y+2*l,P=a.createRange(y,x).map(h);if(u.push.apply(u,m),!d){var w=y-1,$=(w===p+1?h:i.createFirstEllipsis)(w);u.push($)}if(u.push.apply(u,P),!d){var E=x+1,S=(E===b-1?h:i.createSecondEllipsis)(E);u.push(S)}u.push.apply(u,f)}return o||u.push(i.createNextPageLink(e)),s||u.push(i.createLastPageLink(e)),u};var r=n(56590);t.ITEM_TYPES=r.ITEM_TYPES,t.ITEM_KEYS=r.ITEM_KEYS}}]);
//# sourceMappingURL=858a2f42a6abf2fbad6e.chunk.js.map
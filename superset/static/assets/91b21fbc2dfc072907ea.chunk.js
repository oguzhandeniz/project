"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3279],{36674:(e,t,i)=>{i.d(t,{Z:()=>p});var n=i(67294),a=i(51995),l=i(11965),o=i(61988),r=i(58593),s=i(13322),c=i(35944);const d=a.iK.a`
  ${({theme:e})=>l.iv`
    font-size: ${e.typography.sizes.xl}px;
    display: flex;
    padding: 0 0 0 ${2*e.gridUnit}px;
  `};
`,p=({itemId:e,isStarred:t,showTooltip:i,saveFaveStar:a,fetchFaveStar:l})=>{(0,n.useEffect)((()=>{null==l||l(e)}),[l,e]);const p=(0,n.useCallback)((i=>{i.preventDefault(),a(e,!!t)}),[t,e,a]),u=(0,c.tZ)(d,{href:"#",onClick:p,className:"fave-unfave-icon",role:"button",children:t?(0,c.tZ)(s.Z.FavoriteSelected,{}):(0,c.tZ)(s.Z.FavoriteUnselected,{})});return i?(0,c.tZ)(r.u,{id:"fave-unfave-tooltip",title:(0,o.t)("Click to favorite/unfavorite"),children:u}):u}},32871:(e,t,i)=>{var n;i.d(t,{p:()=>n}),function(e){e.Dashboards="dashboards",e.Description="description",e.LastModified="lastModified",e.Owner="owner",e.Rows="rows",e.Sql="sql",e.Table="table",e.Tags="tags"}(n||(n={}))},67697:(e,t,i)=>{i.d(t,{pG:()=>x.p,ZP:()=>Z});var n=i(87185),a=i.n(n),l=i(67294),o=i(99612),r=i(51995),s=i(58593),c=i(55786),d=i(61988),p=i(13322),u=i(35944);const h=r.iK.div`
  font-weight: ${({theme:e})=>e.typography.weights.bold};
`,g=({text:e,header:t})=>{const i=(0,c.Z)(e);return(0,u.BX)(u.HY,{children:[t&&(0,u.tZ)(h,{children:t}),i.map((e=>(0,u.tZ)("div",{children:e},e)))]})},f=16,m={dashboards:0,table:1,sql:2,rows:3,tags:4,description:5,owner:6,lastModified:7},v=r.iK.div`
  ${({theme:e,count:t})=>`\n    display: flex;\n    align-items: center;\n    padding: 8px 12px;\n    background-color: ${e.colors.grayscale.light4};\n    color: ${e.colors.grayscale.base};\n    font-size: ${e.typography.sizes.s}px;\n    min-width: ${24+32*t-f}px;\n    border-radius: ${e.borderRadius}px;\n    line-height: 1;\n  `}
`,y=r.iK.div`
  ${({theme:e,collapsed:t,last:i,onClick:n})=>`\n    display: flex;\n    align-items: center;\n    max-width: ${174+(i?0:f)}px;\n    min-width: ${t?16+(i?0:f):94+(i?0:f)}px;\n    padding-right: ${i?0:f}px;\n    cursor: ${n?"pointer":"default"};\n    & .metadata-icon {\n      color: ${n&&t?e.colors.primary.base:e.colors.grayscale.base};\n      padding-right: ${t?0:8}px;\n      & .anticon {\n        line-height: 0;\n      }\n    }\n    & .metadata-text {\n      min-width: 70px;\n      overflow: hidden;\n      text-overflow: ${t?"unset":"ellipsis"};\n      white-space: nowrap;\n      text-decoration: ${n?"underline":"none"};\n      line-height: 1.4;\n    }\n  `}
`,b=r.iK.div`
  display: -webkit-box;
  -webkit-line-clamp: 20;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,w=({barWidth:e,contentType:t,collapsed:i,last:n=!1,tooltipPlacement:a})=>{const{icon:o,title:r,tooltip:c=r}=(e=>{const{type:t}=e;switch(t){case x.p.Dashboards:return{icon:p.Z.FundProjectionScreenOutlined,title:e.title,tooltip:e.description?(0,u.tZ)("div",{children:(0,u.tZ)(g,{header:e.title,text:e.description})}):void 0};case x.p.Description:return{icon:p.Z.BookOutlined,title:e.value};case x.p.LastModified:return{icon:p.Z.EditOutlined,title:e.value,tooltip:(0,u.BX)("div",{children:[(0,u.tZ)(g,{header:(0,d.t)("Last modified"),text:e.value}),(0,u.tZ)(g,{header:(0,d.t)("Modified by"),text:e.modifiedBy})]})};case x.p.Owner:return{icon:p.Z.UserOutlined,title:e.createdBy,tooltip:(0,u.BX)("div",{children:[(0,u.tZ)(g,{header:(0,d.t)("Created by"),text:e.createdBy}),!!e.owners&&(0,u.tZ)(g,{header:(0,d.t)("Owners"),text:e.owners}),(0,u.tZ)(g,{header:(0,d.t)("Created on"),text:e.createdOn})]})};case x.p.Rows:return{icon:p.Z.InsertRowBelowOutlined,title:e.title,tooltip:e.title};case x.p.Sql:return{icon:p.Z.ConsoleSqlOutlined,title:e.title,tooltip:e.title};case x.p.Table:return{icon:p.Z.Table,title:e.title,tooltip:e.title};case x.p.Tags:return{icon:p.Z.TagsOutlined,title:e.values.join(", "),tooltip:(0,u.tZ)("div",{children:(0,u.tZ)(g,{header:(0,d.t)("Tags"),text:e.values})})};default:throw Error(`Invalid type provided: ${t}`)}})(t),[h,f]=(0,l.useState)(!1),m=(0,l.useRef)(null),v=o,{type:w,onClick:Z}=t;(0,l.useEffect)((()=>{f(!!m.current&&m.current.scrollWidth>m.current.clientWidth)}),[e,f,t]);const $=(0,u.BX)(y,{collapsed:i,last:n,onClick:Z?()=>Z(w):void 0,role:Z?"button":void 0,children:[(0,u.tZ)(v,{iconSize:"l",className:"metadata-icon"}),!i&&(0,u.tZ)("span",{ref:m,className:"metadata-text",children:r})]});return h||i||c&&c!==r?(0,u.tZ)(s.u,{placement:a,title:(0,u.tZ)(b,{children:c}),children:$}):$};var x=i(32871);const Z=({items:e,tooltipPlacement:t="top"})=>{const[i,n]=(0,l.useState)(),[r,s]=(0,l.useState)(!1),c=a()(e,((e,t)=>e.type===t.type)).sort(((e,t)=>m[e.type]-m[t.type])),d=c.length;if(d<2)throw Error("The minimum number of items for the metadata bar is 2.");if(d>6)throw Error("The maximum number of items for the metadata bar is 6.");const p=(0,l.useCallback)((e=>{const t=110*d-f;n(e),s(Boolean(e&&e<t))}),[d]),{ref:h}=(0,o.NB)({onResize:p});return(0,u.tZ)(v,{ref:h,count:d,children:c.map(((e,n)=>(0,u.tZ)(w,{barWidth:i,contentType:e,collapsed:r,last:n===d-1,tooltipPlacement:t},n)))})}},52564:(e,t,i)=>{i.d(t,{u:()=>x});var n=i(11965),a=i(51995),l=i(61988),o=i(4715),r=i(67294),s=i(58593),c=i(99612),d=i(35944);const p=e=>n.iv`
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
`,u=(0,r.memo)((({title:e,placeholder:t,onSave:i,canEdit:a,label:o})=>{const[u,h]=(0,r.useState)(!1),[g,f]=(0,r.useState)(e||""),m=(0,r.useRef)(null),[v,y]=(0,r.useState)(!1),{width:b,ref:w}=(0,c.NB)(),{width:x,ref:Z}=(0,c.NB)({refreshMode:"debounce"});(0,r.useEffect)((()=>{f(e)}),[e]),(0,r.useEffect)((()=>{if(u&&null!=m&&m.current&&(m.current.focus(),m.current.setSelectionRange)){const{length:e}=m.current.value;m.current.setSelectionRange(e,e),m.current.scrollLeft=m.current.scrollWidth}}),[u]),(0,r.useLayoutEffect)((()=>{null!=w&&w.current&&(w.current.textContent=g||t)}),[g,t,w]),(0,r.useEffect)((()=>{m.current&&m.current.scrollWidth>m.current.clientWidth?y(!0):y(!1)}),[b,x]);const $=(0,r.useCallback)((()=>{a&&!u&&h(!0)}),[a,u]),S=(0,r.useCallback)((()=>{if(!a)return;const t=g.trim();f(t),e!==t&&i(t),h(!1)}),[a,g,i,e]),T=(0,r.useCallback)((e=>{a&&u&&f(e.target.value)}),[a,u]),k=(0,r.useCallback)((e=>{var t;a&&"Enter"===e.key&&(e.preventDefault(),null==(t=m.current)||t.blur())}),[a]);return(0,d.BX)("div",{css:p,ref:Z,children:[(0,d.tZ)(s.u,{id:"title-tooltip",title:v&&g&&!u?g:null,children:a?(0,d.tZ)("input",{className:"dynamic-title-input","aria-label":null!=o?o:(0,l.t)("Title"),ref:m,onChange:T,onBlur:S,onClick:$,onKeyPress:k,placeholder:t,value:g,css:n.iv`
                cursor: ${u?"text":"pointer"};

                ${b&&b>0&&n.iv`
                  width: ${b+1}px;
                `}
              `}):(0,d.tZ)("span",{className:"dynamic-title","aria-label":null!=o?o:(0,l.t)("Title"),ref:m,children:g})}),(0,d.tZ)("span",{ref:w,className:"input-sizer","aria-hidden":!0,tabIndex:-1})]})}));var h=i(79789),g=i(36674),f=i(13322),m=i(35932);const v=e=>n.iv`
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
`,y=e=>n.iv`
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
`,b=e=>n.iv`
  display: flex;
  align-items: center;
  padding-left: ${2*e.gridUnit}px;

  & .fave-unfave-icon {
    padding: 0 ${e.gridUnit}px;

    &:first-of-type {
      padding-left: 0;
    }
  }
`,w=e=>n.iv`
  margin-left: ${2*e.gridUnit}px;
`,x=({editableTitleProps:e,showTitlePanelItems:t,certificatiedBadgeProps:i,showFaveStar:n,faveStarProps:r,titlePanelAdditionalItems:s,rightPanelAdditionalItems:c,additionalActionsMenu:p,menuDropdownProps:x,showMenuDropdown:Z=!0,tooltipProps:$})=>{const S=(0,a.Fg)();return(0,d.BX)("div",{css:y,className:"header-with-actions",children:[(0,d.BX)("div",{className:"title-panel",children:[(0,d.tZ)(u,{...e}),t&&(0,d.BX)("div",{css:b,children:[(null==i?void 0:i.certifiedBy)&&(0,d.tZ)(h.Z,{...i}),n&&(0,d.tZ)(g.Z,{...r}),s]})]}),(0,d.BX)("div",{className:"right-button-panel",children:[c,(0,d.tZ)("div",{css:w,children:Z&&(0,d.tZ)(o.Gj,{trigger:["click"],overlay:p,...x,children:(0,d.tZ)(m.Z,{css:v,buttonStyle:"tertiary","aria-label":(0,l.t)("Menu actions trigger"),tooltip:null==$?void 0:$.text,placement:null==$?void 0:$.placement,children:(0,d.tZ)(f.Z.MoreHoriz,{iconColor:S.colors.primary.dark2,iconSize:"l"})})})})]})]})}},46977:(e,t,i)=>{i.d(t,{Z:()=>y,u:()=>n});var n,a=i(18446),l=i.n(a),o=i(67294),r=i(51995),s=i(61988),c=i(79521),d=i(4715),p=i(64158),u=i(97754),h=i(35944);!function(e){e.Default="Default",e.Small="Small"}(n||(n={}));const g=r.iK.div`
  margin: ${({theme:e})=>40*e.gridUnit}px 0;
`,f=r.iK.div`
  ${({scrollTable:e,theme:t})=>e&&`\n    flex: 1 1 auto;\n    margin-bottom: ${4*t.gridUnit}px;\n    overflow: auto;\n  `}

  .table-row {
    ${({theme:e,small:t})=>!t&&`height: ${11*e.gridUnit-1}px;`}

    .table-cell {
      ${({theme:e,small:t})=>t&&`\n        padding-top: ${e.gridUnit+1}px;\n        padding-bottom: ${e.gridUnit+1}px;\n        line-height: 1.45;\n      `}
    }
  }

  th[role='columnheader'] {
    z-index: 1;
    border-bottom: ${({theme:e})=>`${e.gridUnit-2}px solid ${e.colors.grayscale.light2}`};
    ${({small:e})=>e&&"padding-bottom: 0;"}
  }
`,m=r.iK.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.grayscale.light5};

  ${({isPaginationSticky:e})=>e&&"\n        position: sticky;\n        bottom: 0;\n        left: 0;\n    "};

  .row-count-container {
    margin-top: ${({theme:e})=>2*e.gridUnit}px;
    color: ${({theme:e})=>e.colors.grayscale.base};
  }
`,v=({columns:e,data:t,pageSize:i,totalCount:a=t.length,initialPageIndex:r,initialSortBy:v=[],loading:y=!1,withPagination:b=!0,emptyWrapperType:w=n.Default,noDataText:x,showRowCount:Z=!0,serverPagination:$=!1,columnsForWrapText:S,onServerPagination:T=(()=>{}),scrollTopOnPagination:k=!1,...P})=>{const B={pageSize:null!=i?i:10,pageIndex:null!=r?r:0,sortBy:v},{getTableProps:E,getTableBodyProps:C,headerGroups:I,page:z,rows:D,prepareRow:U,pageCount:N,gotoPage:R,state:{pageIndex:j,pageSize:M,sortBy:O}}=(0,c.useTable)({columns:e,data:t,initialState:B,manualPagination:$,manualSortBy:$,pageCount:Math.ceil(a/B.pageSize)},c.useFilters,c.useSortBy,c.usePagination),X=b?z:D;let F;switch(w){case n.Small:F=({children:e})=>(0,h.tZ)(h.HY,{children:e});break;case n.Default:default:F=({children:e})=>(0,h.tZ)(g,{children:e})}const A=!y&&0===X.length,H=N>1&&b,L=(0,o.useRef)(null);return(0,o.useEffect)((()=>{$&&j!==B.pageIndex&&T({pageIndex:j})}),[j]),(0,o.useEffect)((()=>{$&&!l()(O,B.sortBy)&&T({pageIndex:0,sortBy:O})}),[O]),(0,h.BX)(h.HY,{children:[(0,h.BX)(f,{...P,ref:L,children:[(0,h.tZ)(u.Z,{getTableProps:E,getTableBodyProps:C,prepareRow:U,headerGroups:I,rows:X,columns:e,loading:y,columnsForWrapText:S}),A&&(0,h.tZ)(F,{children:x?(0,h.tZ)(d.HY,{image:d.HY.PRESENTED_IMAGE_SIMPLE,description:x}):(0,h.tZ)(d.HY,{image:d.HY.PRESENTED_IMAGE_SIMPLE})})]}),H&&(0,h.BX)(m,{className:"pagination-container",isPaginationSticky:P.isPaginationSticky,children:[(0,h.tZ)(p.Z,{totalPages:N||0,currentPage:N?j+1:0,onChange:e=>(e=>{var t;k&&(null==L||null==(t=L.current)||t.scroll(0,0)),R(e)})(e-1),hideFirstAndLastPageLinks:!0}),Z&&(0,h.tZ)("div",{className:"row-count-container",children:!y&&(0,s.t)("%s-%s of %s",M*j+(z.length&&1),M*j+z.length,a)})]})]})},y=(0,o.memo)(v)},76962:(e,t,i)=>{i.d(t,{Z:()=>n.Z,u:()=>n.u});var n=i(46977)},48273:(e,t,i)=>{i.d(t,{$3:()=>c,AN:()=>p,LS:()=>s,Qz:()=>d,g:()=>r});var n=i(31069),a=i(15926),l=i.n(a);const o=Object.freeze(["dashboard","chart","saved_query"]),r=Object.freeze({DASHBOARD:"dashboard",CHART:"chart",QUERY:"saved_query"});function s(e,t,i){n.Z.get({endpoint:`/api/v1/tag/${e}`}).then((({json:e})=>t(e.result))).catch((e=>i(e)))}function c({objectType:e,objectId:t,includeTypes:i=!1},a,l){if(void 0===e||void 0===t)throw new Error("Need to specify objectType and objectId");if(!o.includes(e))throw new Error(`objectType ${e} is invalid`);n.Z.get({endpoint:`/api/v1/${e}/${t}`}).then((({json:e})=>a(e.result.tags.filter((e=>1===e.type))))).catch((e=>l(e)))}function d(e,t,i){const a=e.map((e=>e.name));n.Z.delete({endpoint:`/api/v1/tag/?q=${l().encode(a)}`}).then((({json:e})=>e.message?t(e.message):t("Successfully Deleted Tag"))).catch((e=>{const t=e.message;return i(t||"Error Deleting Tag")}))}function p({tagIds:e=[],types:t},i,a){let l=`/api/v1/tag/get_objects/?tagIds=${e}`;t&&(l+=`&types=${t}`),n.Z.get({endpoint:l}).then((({json:e})=>i(e.result))).catch((e=>a(e)))}}}]);
//# sourceMappingURL=91b21fbc2dfc072907ea.chunk.js.map
"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9269],{52630:(e,t,n)=>{t.iB=t.YM=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=s(n(67294)),r=s(n(45697)),o=n(2371);function s(e){return e&&e.__esModule?e:{default:e}}t.YM=function(e){var t=e.itemTypeToComponent,n=e.WrapperComponent,s=void 0===n?"div":n,l=function(e){var n=e.currentPage,r=e.totalPages,l=e.boundaryPagesRange,d=e.siblingPagesRange,c=e.hideEllipsis,u=e.hidePreviousAndNextPageLinks,g=e.hideFirstAndLastPageLinks,h=e.onChange,p=e.disabled,v=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(e,["currentPage","totalPages","boundaryPagesRange","siblingPagesRange","hideEllipsis","hidePreviousAndNextPageLinks","hideFirstAndLastPageLinks","onChange","disabled"]),P=(0,o.getPaginationModel)({currentPage:n,totalPages:r,boundaryPagesRange:l,siblingPagesRange:d,hideEllipsis:c,hidePreviousAndNextPageLinks:u,hideFirstAndLastPageLinks:g}),f=function(e,t,n){return function(r){var o,s,l,d=e[r.type],c=(s=(o=r).value,l=o.isDisabled,function(){!l&&n&&t!==s&&n(s)});return a.default.createElement(d,i({onClick:c},r))}}(t,n,h);return a.default.createElement(s,v,P.map((function(e){return f(i({},e,{isDisabled:!!p}))})))};return l.propTypes={currentPage:r.default.number.isRequired,totalPages:r.default.number.isRequired,boundaryPagesRange:r.default.number,siblingPagesRange:r.default.number,hideEllipsis:r.default.bool,hidePreviousAndNextPageLinks:r.default.bool,hideFirstAndLastPageLinks:r.default.bool,onChange:r.default.func,disabled:r.default.bool},l},t.iB=o.ITEM_TYPES},79789:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(51995),a=n(61988),r=n(13322),o=n(58593),s=n(35944);const l=function({certifiedBy:e,details:t,size:n="l"}){const l=(0,i.Fg)();return(0,s.tZ)(o.u,{id:"certified-details-tooltip",title:(0,s.BX)(s.HY,{children:[e&&(0,s.tZ)("div",{children:(0,s.tZ)("strong",{children:(0,a.t)("Certified by %s",e)})}),(0,s.tZ)("div",{children:t})]}),children:(0,s.tZ)(r.Z.Certified,{iconColor:l.colors.primary.base,iconSize:n})})}},34581:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(81545),a=n(51995),r=n(58593),o=n(4715);var s,l,d=n(35944);const c=null!=(s=null==(l=(0,i.Z)().get())?void 0:l.colors)?s:[],u=e=>{const t=8*e.gridUnit;return`\n  width: ${t}px;\n  height: ${t}px;\n  line-height: ${t}px;\n  font-size: ${e.typography.sizes.s}px;`},g=(0,a.iK)(o.qE)`
  ${({theme:e})=>u(e)}
`,h=(0,a.iK)(o.qE.Group)`
  .ant-avatar {
    ${({theme:e})=>u(e)}
  }
`;function p({users:e,maxCount:t=4}){return(0,d.tZ)(h,{maxCount:t,children:e.map((({first_name:e,last_name:t,id:n})=>{var i,a;const o=`${e} ${t}`,s=function(e,t){return e?t[function(e,t){const n=[...e].map((e=>e.charCodeAt(0))),i=n.length,a=i%(t-1)+1,r=n.reduce(((e,t)=>e+t))%t;let o=n[0]%t;return[...new Array(i)].forEach((()=>{o=(a*o+r)%t})),o}(e,t.length)]:"transparent"}(`${n}-${e}-${t}`,c),l=`/api/v1/user/${n}/avatar.png`;return(0,d.tZ)(r.u,{title:o,placement:"top",children:(0,d.BX)(g,{style:{backgroundColor:s,borderColor:s},src:l,children:[null==e||null==(i=e[0])?void 0:i.toLocaleUpperCase(),null==t||null==(a=t[0])?void 0:a.toLocaleUpperCase()]},o)},o)}))})}},36674:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(67294),a=n(51995),r=n(11965),o=n(61988),s=n(58593),l=n(13322),d=n(35944);const c=a.iK.a`
  ${({theme:e})=>r.iv`
    font-size: ${e.typography.sizes.xl}px;
    display: flex;
    padding: 0 0 0 ${2*e.gridUnit}px;
  `};
`,u=({itemId:e,isStarred:t,showTooltip:n,saveFaveStar:a,fetchFaveStar:r})=>{(0,i.useEffect)((()=>{null==r||r(e)}),[r,e]);const u=(0,i.useCallback)((n=>{n.preventDefault(),a(e,!!t)}),[t,e,a]),g=(0,d.tZ)(c,{href:"#",onClick:u,className:"fave-unfave-icon",role:"button",children:t?(0,d.tZ)(l.Z.FavoriteSelected,{}):(0,d.tZ)(l.Z.FavoriteUnselected,{})});return n?(0,d.tZ)(s.u,{id:"fave-unfave-tooltip",title:(0,o.t)("Click to favorite/unfavorite"),children:g}):g}},21742:(e,t,n)=>{n.d(t,{Z:()=>y});var i=n(11965),a=n(51995),r=n(4715),o=n(58593),s=n(4144),l=n(79789),d=n(35944);const c=a.iK.div`
  width: 64px;
  display: flex;
  justify-content: flex-end;
`,u=(0,a.iK)(r.Ak)`
  ${({theme:e})=>`\n    border: 1px solid ${e.colors.grayscale.light2};\n    border-radius: ${e.gridUnit}px;\n    overflow: hidden;\n\n    .ant-card-body {\n      padding: ${4*e.gridUnit}px\n        ${2*e.gridUnit}px;\n    }\n    .ant-card-meta-detail > div:not(:last-child) {\n      margin-bottom: 0;\n    }\n    .gradient-container {\n      position: relative;\n      height: 100%;\n    }\n    &:hover {\n      box-shadow: 8px 8px 28px 0px ${e.colors.grayscale.light1};\n      transition: box-shadow ${e.transitionTiming}s ease-in-out;\n\n      .cover-footer {\n        transform: translateY(0);\n      }\n    }\n  `}
`,g=a.iK.div`
  height: 264px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  overflow: hidden;

  .cover-footer {
    transform: translateY(${({theme:e})=>9*e.gridUnit}px);
    transition: ${({theme:e})=>e.transitionTiming}s ease-out;
  }
`,h=a.iK.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  .card-actions {
    margin-left: auto;
    align-self: flex-end;
    padding-left: ${({theme:e})=>e.gridUnit}px;
    span[role='img'] {
      display: flex;
      align-items: center;
    }
  }

  .titleRow {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
  }
`,p=a.iK.span`
  overflow: hidden;
  text-overflow: ellipsis;
  & a {
    color: ${({theme:e})=>e.colors.grayscale.dark1} !important;
  }
`,v=a.iK.span`
  position: absolute;
  right: -1px;
  bottom: ${({theme:e})=>e.gridUnit}px;
`,P=a.iK.div`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  top: -${({theme:e})=>9*e.gridUnit}px;
  padding: 0 8px;
`,f=a.iK.div`
  flex: 1;
  overflow: hidden;
`,E=a.iK.div`
  align-self: flex-end;
  margin-left: auto;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`,b=(0,a.iK)(r.Od)`
  h3 {
    margin: ${({theme:e})=>e.gridUnit}px 0;
  }

  ul {
    margin-bottom: 0;
  }
`,m={rows:1,width:150},I=({to:e,children:t})=>(0,d.tZ)("a",{href:e,children:t});function L({title:e,subtitle:t,url:n,linkComponent:c,titleRight:L,imgURL:y,imgFallbackURL:_,description:S,coverLeft:T,coverRight:x,actions:A,avatar:N,loading:w,imgPosition:R="top",cover:Z,certifiedBy:K,certificationDetails:M}){const k=n&&c?c:I,$=(0,a.Fg)();return(0,d.BX)(u,{cover:Z||(0,d.BX)(g,{children:[(0,d.tZ)(k,{to:n,children:(0,d.tZ)("div",{className:"gradient-container",children:(0,d.tZ)(s.Z,{src:y||"",fallback:_||"",isLoading:w,position:R})})}),(0,d.BX)(P,{className:"cover-footer",children:[!w&&T&&(0,d.tZ)(f,{children:T}),!w&&x&&(0,d.tZ)(E,{children:x})]})]}),children:[w&&(0,d.tZ)(r.Ak.Meta,{title:(0,d.tZ)(d.HY,{children:(0,d.BX)(h,{children:[(0,d.tZ)(r.Od.Input,{active:!0,size:"small",css:(0,i.iv)({width:Math.trunc(62.5*$.gridUnit)},"","")}),(0,d.BX)("div",{className:"card-actions",children:[(0,d.tZ)(r.Od.Button,{active:!0,shape:"circle"})," ",(0,d.tZ)(r.Od.Button,{active:!0,css:(0,i.iv)({width:10*$.gridUnit},"","")})]})]})}),description:(0,d.tZ)(b,{round:!0,active:!0,title:!1,paragraph:m})}),!w&&(0,d.tZ)(r.Ak.Meta,{title:(0,d.BX)(h,{children:[t||null,(0,d.BX)("div",{className:"titleRow",children:[(0,d.tZ)(o.u,{title:e,children:(0,d.BX)(p,{children:[K&&(0,d.BX)(d.HY,{children:[(0,d.tZ)(l.Z,{certifiedBy:K,details:M})," "]}),e]})}),L&&(0,d.tZ)(v,{children:L}),(0,d.tZ)("div",{className:"card-actions",children:A})]})]}),description:S,avatar:N||null})]})}L.Actions=c;const y=L},25772:(e,t,n)=>{n.d(t,{P:()=>i.Z});var i=n(65477);n(8420)},48273:(e,t,n)=>{n.d(t,{$3:()=>d,AN:()=>u,LS:()=>l,Qz:()=>c,g:()=>s});var i=n(31069),a=n(15926),r=n.n(a);const o=Object.freeze(["dashboard","chart","saved_query"]),s=Object.freeze({DASHBOARD:"dashboard",CHART:"chart",QUERY:"saved_query"});function l(e,t,n){i.Z.get({endpoint:`/api/v1/tag/${e}`}).then((({json:e})=>t(e.result))).catch((e=>n(e)))}function d({objectType:e,objectId:t,includeTypes:n=!1},a,r){if(void 0===e||void 0===t)throw new Error("Need to specify objectType and objectId");if(!o.includes(e))throw new Error(`objectType ${e} is invalid`);i.Z.get({endpoint:`/api/v1/${e}/${t}`}).then((({json:e})=>a(e.result.tags.filter((e=>1===e.type))))).catch((e=>r(e)))}function c(e,t,n){const a=e.map((e=>e.name));i.Z.delete({endpoint:`/api/v1/tag/?q=${r().encode(a)}`}).then((({json:e})=>e.message?t(e.message):t("Successfully Deleted Tag"))).catch((e=>{const t=e.message;return n(t||"Error Deleting Tag")}))}function u({tagIds:e=[],types:t},n,a){let r=`/api/v1/tag/get_objects/?tagIds=${e}`;t&&(r+=`&types=${t}`),i.Z.get({endpoint:r}).then((({json:e})=>n(e.result))).catch((e=>a(e)))}},56590:(e,t)=>{t.ITEM_TYPES={PAGE:"PAGE",ELLIPSIS:"ELLIPSIS",FIRST_PAGE_LINK:"FIRST_PAGE_LINK",PREVIOUS_PAGE_LINK:"PREVIOUS_PAGE_LINK",NEXT_PAGE_LINK:"NEXT_PAGE_LINK",LAST_PAGE_LINK:"LAST_PAGE_LINK"},t.ITEM_KEYS={FIRST_ELLIPSIS:-1,SECOND_ELLIPSIS:-2,FIRST_PAGE_LINK:-3,PREVIOUS_PAGE_LINK:-4,NEXT_PAGE_LINK:-5,LAST_PAGE_LINK:-6}},53804:(e,t,n)=>{var i=n(56590);t.createFirstEllipsis=function(e){return{type:i.ITEM_TYPES.ELLIPSIS,key:i.ITEM_KEYS.FIRST_ELLIPSIS,value:e,isActive:!1}},t.createSecondEllipsis=function(e){return{type:i.ITEM_TYPES.ELLIPSIS,key:i.ITEM_KEYS.SECOND_ELLIPSIS,value:e,isActive:!1}},t.createFirstPageLink=function(e){var t=e.currentPage;return{type:i.ITEM_TYPES.FIRST_PAGE_LINK,key:i.ITEM_KEYS.FIRST_PAGE_LINK,value:1,isActive:1===t}},t.createPreviousPageLink=function(e){var t=e.currentPage;return{type:i.ITEM_TYPES.PREVIOUS_PAGE_LINK,key:i.ITEM_KEYS.PREVIOUS_PAGE_LINK,value:Math.max(1,t-1),isActive:1===t}},t.createNextPageLink=function(e){var t=e.currentPage,n=e.totalPages;return{type:i.ITEM_TYPES.NEXT_PAGE_LINK,key:i.ITEM_KEYS.NEXT_PAGE_LINK,value:Math.min(n,t+1),isActive:t===n}},t.createLastPageLink=function(e){var t=e.currentPage,n=e.totalPages;return{type:i.ITEM_TYPES.LAST_PAGE_LINK,key:i.ITEM_KEYS.LAST_PAGE_LINK,value:n,isActive:t===n}},t.createPageFunctionFactory=function(e){var t=e.currentPage;return function(e){return{type:i.ITEM_TYPES.PAGE,key:e,value:e,isActive:e===t}}}},1158:(e,t)=>{t.createRange=function(e,t){for(var n=[],i=e;i<=t;i++)n.push(i);return n}},2371:(e,t,n)=>{var i=n(1158),a=n(53804);t.getPaginationModel=function(e){if(null==e)throw new Error("getPaginationModel(): options object should be a passed");var t=Number(e.totalPages);if(isNaN(t))throw new Error("getPaginationModel(): totalPages should be a number");if(t<0)throw new Error("getPaginationModel(): totalPages shouldn't be a negative number");var n=Number(e.currentPage);if(isNaN(n))throw new Error("getPaginationModel(): currentPage should be a number");if(n<0)throw new Error("getPaginationModel(): currentPage shouldn't be a negative number");if(n>t)throw new Error("getPaginationModel(): currentPage shouldn't be greater than totalPages");var r=null==e.boundaryPagesRange?1:Number(e.boundaryPagesRange);if(isNaN(r))throw new Error("getPaginationModel(): boundaryPagesRange should be a number");if(r<0)throw new Error("getPaginationModel(): boundaryPagesRange shouldn't be a negative number");var o=null==e.siblingPagesRange?1:Number(e.siblingPagesRange);if(isNaN(o))throw new Error("getPaginationModel(): siblingPagesRange should be a number");if(o<0)throw new Error("getPaginationModel(): siblingPagesRange shouldn't be a negative number");var s=Boolean(e.hidePreviousAndNextPageLinks),l=Boolean(e.hideFirstAndLastPageLinks),d=Boolean(e.hideEllipsis),c=d?0:1,u=[],g=a.createPageFunctionFactory(e);if(l||u.push(a.createFirstPageLink(e)),s||u.push(a.createPreviousPageLink(e)),1+2*c+2*o+2*r>=t){var h=i.createRange(1,t).map(g);u.push.apply(u,h)}else{var p=r,v=i.createRange(1,p).map(g),P=t+1-r,f=t,E=i.createRange(P,f).map(g),b=Math.min(Math.max(n-o,p+c+1),P-c-2*o-1),m=b+2*o,I=i.createRange(b,m).map(g);if(u.push.apply(u,v),!d){var L=b-1,y=(L===p+1?g:a.createFirstEllipsis)(L);u.push(y)}if(u.push.apply(u,I),!d){var _=m+1,S=(_===P-1?g:a.createSecondEllipsis)(_);u.push(S)}u.push.apply(u,E)}return s||u.push(a.createNextPageLink(e)),l||u.push(a.createLastPageLink(e)),u};var r=n(56590);t.ITEM_TYPES=r.ITEM_TYPES,t.ITEM_KEYS=r.ITEM_KEYS}}]);
//# sourceMappingURL=7a925b70f1712f36d953.chunk.js.map
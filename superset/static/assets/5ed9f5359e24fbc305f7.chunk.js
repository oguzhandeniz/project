"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5946],{52630:(e,t,n)=>{t.iB=t.YM=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=l(n(67294)),i=l(n(45697)),o=n(2371);function l(e){return e&&e.__esModule?e:{default:e}}t.YM=function(e){var t=e.itemTypeToComponent,n=e.WrapperComponent,l=void 0===n?"div":n,s=function(e){var n=e.currentPage,i=e.totalPages,s=e.boundaryPagesRange,u=e.siblingPagesRange,d=e.hideEllipsis,c=e.hidePreviousAndNextPageLinks,g=e.hideFirstAndLastPageLinks,h=e.onChange,b=e.disabled,p=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["currentPage","totalPages","boundaryPagesRange","siblingPagesRange","hideEllipsis","hidePreviousAndNextPageLinks","hideFirstAndLastPageLinks","onChange","disabled"]),m=(0,o.getPaginationModel)({currentPage:n,totalPages:i,boundaryPagesRange:s,siblingPagesRange:u,hideEllipsis:d,hidePreviousAndNextPageLinks:c,hideFirstAndLastPageLinks:g}),P=function(e,t,n){return function(i){var o,l,s,u=e[i.type],d=(l=(o=i).value,s=o.isDisabled,function(){!s&&n&&t!==l&&n(l)});return r.default.createElement(u,a({onClick:d},i))}}(t,n,h);return r.default.createElement(l,p,m.map((function(e){return P(a({},e,{isDisabled:!!b}))})))};return s.propTypes={currentPage:i.default.number.isRequired,totalPages:i.default.number.isRequired,boundaryPagesRange:i.default.number,siblingPagesRange:i.default.number,hideEllipsis:i.default.bool,hidePreviousAndNextPageLinks:i.default.bool,hideFirstAndLastPageLinks:i.default.bool,onChange:i.default.func,disabled:i.default.bool},s},t.iB=o.ITEM_TYPES},94222:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(51995),r=n(61988),i=n(58593),o=n(13322),l=n(90335),s=n(35944);function u(e,t,n){switch(e){case l.Z9.Working:return n.colors.primary.base;case l.Z9.Error:return n.colors.error.base;case l.Z9.Success:return t?n.colors.success.base:n.colors.alert.base;case l.Z9.Noop:return n.colors.success.base;case l.Z9.Grace:return n.colors.alert.base;default:return n.colors.grayscale.base}}function d({state:e,isReportEnabled:t=!1}){const n=(0,a.Fg)(),d={icon:o.Z.Check,label:"",status:""};switch(e){case l.Z9.Success:d.icon=t?o.Z.Check:o.Z.AlertSolidSmall,d.label=t?(0,r.t)("Report sent"):(0,r.t)("Alert triggered, notification sent"),d.status=l.Z9.Success;break;case l.Z9.Working:d.icon=o.Z.Running,d.label=t?(0,r.t)("Report sending"):(0,r.t)("Alert running"),d.status=l.Z9.Working;break;case l.Z9.Error:d.icon=o.Z.XSmall,d.label=t?(0,r.t)("Report failed"):(0,r.t)("Alert failed"),d.status=l.Z9.Error;break;case l.Z9.Noop:d.icon=o.Z.Check,d.label=(0,r.t)("Nothing triggered"),d.status=l.Z9.Noop;break;case l.Z9.Grace:d.icon=o.Z.AlertSolidSmall,d.label=(0,r.t)("Alert Triggered, In Grace Period"),d.status=l.Z9.Grace;break;default:d.icon=o.Z.Check,d.label=(0,r.t)("Nothing triggered"),d.status=l.Z9.Noop}const c=d.icon;return(0,s.tZ)(i.u,{title:d.label,placement:"bottomLeft",children:(0,s.tZ)(c,{iconColor:u(d.status,t,n)})})}},86074:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(23279),r=n.n(a),i=n(67294),o=n(16550),l=n(73727),s=n(51995),u=n(11965),d=n(61988),c=n(93967),g=n.n(c),h=n(58593),b=n(4715),p=n(83862),m=n(35932),P=n(13322),v=n(35944);const E=s.iK.div`
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
`,f=e=>u.iv`
  color: ${e.colors.grayscale.light1};
  cursor: not-allowed;

  &:hover {
    color: ${e.colors.grayscale.light1};
  }

  .ant-menu-item-selected {
    background-color: ${e.colors.grayscale.light1};
  }
`,{SubMenu:I}=p.MainNav,S=e=>{var t,n,a;const[s,u]=(0,i.useState)("horizontal"),[c,S]=(0,i.useState)("nav-right");let L=!0;try{(0,o.k6)()}catch(e){L=!1}return(0,i.useEffect)((()=>{function t(){window.innerWidth<=767?u("inline"):u("horizontal"),e.buttons&&e.buttons.length>=3&&window.innerWidth>=795?S("nav-right"):e.buttons&&e.buttons.length>=3&&window.innerWidth<=795&&S("nav-right-collapse")}t();const n=r()(t,10);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[e.buttons]),(0,v.BX)(E,{children:[(0,v.BX)(b.X2,{className:"menu",role:"navigation",children:[e.name&&(0,v.tZ)("div",{className:"header",children:e.name}),(0,v.tZ)(p.Menu,{mode:s,style:{backgroundColor:"transparent"},children:null==(t=e.tabs)?void 0:t.map((t=>(e.usesRouter||L)&&t.usesRouter?(0,v.tZ)(p.Menu.Item,{children:(0,v.tZ)("div",{role:"tab",className:t.name===e.activeChild?"active":"",children:(0,v.tZ)("div",{children:(0,v.tZ)(l.rU,{to:t.url||"",children:t.label})})})},t.label):(0,v.tZ)(p.Menu.Item,{children:(0,v.tZ)("div",{className:g()("no-router",{active:t.name===e.activeChild}),role:"tab",children:(0,v.tZ)("a",{href:t.url,onClick:t.onClick,children:t.label})})},t.label)))}),(0,v.BX)("div",{className:c,children:[(0,v.tZ)(p.Menu,{mode:"horizontal",triggerSubMenuAction:"click",children:null==(n=e.dropDownLinks)?void 0:n.map(((e,t)=>{var n;return(0,v.tZ)(I,{title:e.label,icon:(0,v.tZ)(P.Z.TriangleDown,{}),popupOffset:[10,20],className:"dropdown-menu-links",children:null==(n=e.childs)?void 0:n.map((e=>"object"==typeof e?e.disable?(0,v.tZ)(p.MainNav.Item,{css:f,disabled:!0,children:(0,v.tZ)(h.u,{placement:"top",title:(0,d.t)("Enable 'Allow file uploads to database' in any database's settings"),children:e.label})},e.label):(0,v.tZ)(p.MainNav.Item,{children:(0,v.tZ)("a",{href:e.url,onClick:e.onClick,children:e.label})},e.label):null))},t)}))}),null==(a=e.buttons)?void 0:a.map(((e,t)=>(0,v.tZ)(m.Z,{buttonStyle:e.buttonStyle,onClick:e.onClick,children:e.name},t)))]})]}),e.children]})}},56590:(e,t)=>{t.ITEM_TYPES={PAGE:"PAGE",ELLIPSIS:"ELLIPSIS",FIRST_PAGE_LINK:"FIRST_PAGE_LINK",PREVIOUS_PAGE_LINK:"PREVIOUS_PAGE_LINK",NEXT_PAGE_LINK:"NEXT_PAGE_LINK",LAST_PAGE_LINK:"LAST_PAGE_LINK"},t.ITEM_KEYS={FIRST_ELLIPSIS:-1,SECOND_ELLIPSIS:-2,FIRST_PAGE_LINK:-3,PREVIOUS_PAGE_LINK:-4,NEXT_PAGE_LINK:-5,LAST_PAGE_LINK:-6}},53804:(e,t,n)=>{var a=n(56590);t.createFirstEllipsis=function(e){return{type:a.ITEM_TYPES.ELLIPSIS,key:a.ITEM_KEYS.FIRST_ELLIPSIS,value:e,isActive:!1}},t.createSecondEllipsis=function(e){return{type:a.ITEM_TYPES.ELLIPSIS,key:a.ITEM_KEYS.SECOND_ELLIPSIS,value:e,isActive:!1}},t.createFirstPageLink=function(e){var t=e.currentPage;return{type:a.ITEM_TYPES.FIRST_PAGE_LINK,key:a.ITEM_KEYS.FIRST_PAGE_LINK,value:1,isActive:1===t}},t.createPreviousPageLink=function(e){var t=e.currentPage;return{type:a.ITEM_TYPES.PREVIOUS_PAGE_LINK,key:a.ITEM_KEYS.PREVIOUS_PAGE_LINK,value:Math.max(1,t-1),isActive:1===t}},t.createNextPageLink=function(e){var t=e.currentPage,n=e.totalPages;return{type:a.ITEM_TYPES.NEXT_PAGE_LINK,key:a.ITEM_KEYS.NEXT_PAGE_LINK,value:Math.min(n,t+1),isActive:t===n}},t.createLastPageLink=function(e){var t=e.currentPage,n=e.totalPages;return{type:a.ITEM_TYPES.LAST_PAGE_LINK,key:a.ITEM_KEYS.LAST_PAGE_LINK,value:n,isActive:t===n}},t.createPageFunctionFactory=function(e){var t=e.currentPage;return function(e){return{type:a.ITEM_TYPES.PAGE,key:e,value:e,isActive:e===t}}}},1158:(e,t)=>{t.createRange=function(e,t){for(var n=[],a=e;a<=t;a++)n.push(a);return n}},2371:(e,t,n)=>{var a=n(1158),r=n(53804);t.getPaginationModel=function(e){if(null==e)throw new Error("getPaginationModel(): options object should be a passed");var t=Number(e.totalPages);if(isNaN(t))throw new Error("getPaginationModel(): totalPages should be a number");if(t<0)throw new Error("getPaginationModel(): totalPages shouldn't be a negative number");var n=Number(e.currentPage);if(isNaN(n))throw new Error("getPaginationModel(): currentPage should be a number");if(n<0)throw new Error("getPaginationModel(): currentPage shouldn't be a negative number");if(n>t)throw new Error("getPaginationModel(): currentPage shouldn't be greater than totalPages");var i=null==e.boundaryPagesRange?1:Number(e.boundaryPagesRange);if(isNaN(i))throw new Error("getPaginationModel(): boundaryPagesRange should be a number");if(i<0)throw new Error("getPaginationModel(): boundaryPagesRange shouldn't be a negative number");var o=null==e.siblingPagesRange?1:Number(e.siblingPagesRange);if(isNaN(o))throw new Error("getPaginationModel(): siblingPagesRange should be a number");if(o<0)throw new Error("getPaginationModel(): siblingPagesRange shouldn't be a negative number");var l=Boolean(e.hidePreviousAndNextPageLinks),s=Boolean(e.hideFirstAndLastPageLinks),u=Boolean(e.hideEllipsis),d=u?0:1,c=[],g=r.createPageFunctionFactory(e);if(s||c.push(r.createFirstPageLink(e)),l||c.push(r.createPreviousPageLink(e)),1+2*d+2*o+2*i>=t){var h=a.createRange(1,t).map(g);c.push.apply(c,h)}else{var b=i,p=a.createRange(1,b).map(g),m=t+1-i,P=t,v=a.createRange(m,P).map(g),E=Math.min(Math.max(n-o,b+d+1),m-d-2*o-1),f=E+2*o,I=a.createRange(E,f).map(g);if(c.push.apply(c,p),!u){var S=E-1,L=(S===b+1?g:r.createFirstEllipsis)(S);c.push(L)}if(c.push.apply(c,I),!u){var _=f+1,k=(_===m-1?g:r.createSecondEllipsis)(_);c.push(k)}c.push.apply(c,v)}return l||c.push(r.createNextPageLink(e)),s||c.push(r.createLastPageLink(e)),c};var i=n(56590);t.ITEM_TYPES=i.ITEM_TYPES,t.ITEM_KEYS=i.ITEM_KEYS}}]);
//# sourceMappingURL=5ed9f5359e24fbc305f7.chunk.js.map
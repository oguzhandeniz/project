"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2639],{29487:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(11965),a=n(4863),o=n(51995),i=n(13322),s=n(35944);function l(e){const{type:t="info",description:n,showIcon:l=!0,closable:d=!0,roomBelow:c=!1,children:u}=e,p=(0,o.Fg)(),{colors:h,typography:m,gridUnit:g}=p,{alert:b,error:f,info:v,success:y}=h;let $=v,x=i.Z.InfoSolid;return"error"===t?($=f,x=i.Z.ErrorSolid):"warning"===t?($=b,x=i.Z.AlertSolid):"success"===t&&($=y,x=i.Z.CircleCheckSolid),(0,s.tZ)(a.default,{role:"alert",showIcon:l,icon:(0,s.tZ)(x,{"aria-label":`${t} icon`}),closeText:d&&(0,s.tZ)(i.Z.XSmall,{"aria-label":"close icon"}),css:(0,r.iv)({marginBottom:c?4*g:0,padding:`${2*g}px ${3*g}px`,alignItems:"flex-start",border:0,backgroundColor:$.light2,"& .ant-alert-icon":{marginRight:2*g},"& .ant-alert-message":{color:$.dark2,fontSize:m.sizes.m,fontWeight:n?m.weights.bold:m.weights.normal},"& .ant-alert-description":{color:$.dark2,fontSize:m.sizes.m}},"",""),...e,children:u})}},10689:(e,t,n)=>{n.d(t,{Z5:()=>f,ry:()=>g,up:()=>p,Ad:()=>b,cE:()=>h,iO:()=>u,YH:()=>m});var r=n(67294),a=n(53239),o=n(67913),i=n(38325);const s=n.p+"c53c171c1be4339a28a1.js";var l=n(35944);a.config.setModuleUrl("ace/mode/css_worker",s);const d={"mode/sql":()=>n.e(8883).then(n.t.bind(n,48883,23)),"mode/markdown":()=>Promise.all([n.e(9794),n.e(5802),n.e(4832),n.e(6061)]).then(n.t.bind(n,66061,23)),"mode/css":()=>Promise.all([n.e(5802),n.e(4972)]).then(n.t.bind(n,94972,23)),"mode/json":()=>n.e(8750).then(n.t.bind(n,58750,23)),"mode/yaml":()=>n.e(741).then(n.t.bind(n,60741,23)),"mode/html":()=>Promise.all([n.e(9794),n.e(5802),n.e(4832),n.e(1258)]).then(n.t.bind(n,71258,23)),"mode/javascript":()=>Promise.all([n.e(9794),n.e(4579)]).then(n.t.bind(n,54579,23)),"theme/textmate":()=>n.e(2089).then(n.t.bind(n,2089,23)),"theme/github":()=>n.e(440).then(n.t.bind(n,50440,23)),"ext/language_tools":()=>n.e(5335).then(n.t.bind(n,75335,23)),"ext/searchbox":()=>n.e(8656).then(n.t.bind(n,68656,23))};function c(e,{defaultMode:t,defaultTheme:s,defaultTabSize:c=2,fontFamily:u="Menlo, Consolas, Courier New, Ubuntu Mono, source-code-pro, Lucida Console, monospace",placeholder:p}={}){return(0,o.Z)((async()=>{var o,p;const{default:h}=await Promise.resolve().then(n.bind(n,74981));await Promise.all(e.map((e=>d[e]())));const m=t||(null==(o=e.find((e=>e.startsWith("mode/"))))?void 0:o.replace("mode/","")),g=s||(null==(p=e.find((e=>e.startsWith("theme/"))))?void 0:p.replace("theme/",""));return(0,r.forwardRef)((function({keywords:e,mode:t=m,theme:n=g,tabSize:o=c,defaultValue:s="",...d},p){const b=(0,a.acequire)("ace/ext/language_tools"),f=(0,i.Z)((e=>{const n={getCompletions:(n,r,a,o,i)=>{Number.isNaN(parseInt(o,10))&&r.getMode().$id===`ace/mode/${t}`&&i(null,e)}};b.setCompleters([n])}));return(0,r.useEffect)((()=>{e&&f(e)}),[e,f]),(0,l.tZ)(h,{ref:p,mode:t,theme:n,tabSize:o,defaultValue:s,setOptions:{fontFamily:u},...d})}))}),p)}const u=c(["mode/sql","theme/github","ext/language_tools","ext/searchbox"]),p=c(["mode/sql","theme/github","ext/language_tools","ext/searchbox"],{placeholder:()=>(0,l.BX)("div",{style:{height:"100%"},children:[(0,l.tZ)("div",{style:{width:41,height:"100%",background:"#e8e8e8"}}),(0,l.tZ)("div",{className:"ace_content"})]})}),h=c(["mode/markdown","theme/textmate"]),m=c(["mode/markdown","mode/sql","mode/json","mode/html","mode/javascript","theme/textmate"]),g=c(["mode/css","theme/github"]),b=c(["mode/json","theme/github"]),f=c(["mode/json","mode/yaml","theme/github"])},67913:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(38703),o=n(35944);function i({width:e,height:t,showLoadingForImport:n=!1,placeholderStyle:r}){return t&&(0,o.tZ)("div",{style:{width:e,height:t,...r},children:n&&(0,o.tZ)(a.Z,{position:"floating"})},"async-asm-placeholder")||null}function s(e,t=i){let n,a;function s(){return n||(n=e instanceof Promise?e:e()),a||n.then((e=>{a=e.default||e})),n}const l=(0,r.forwardRef)((function(e,n){const[i,l]=(0,r.useState)(void 0!==a);(0,r.useEffect)((()=>{let e=!0;return i||s().then((()=>{e&&l(!0)})),()=>{e=!1}}));const d=a||t;return d?(0,o.tZ)(d,{ref:d===a?n:null,...e}):null}));return l.preload=s,l}},43700:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(51995),a=n(46445),o=n(35944);const i=Object.assign((0,r.iK)((({light:e,bigger:t,bold:n,animateArrows:r,...i})=>(0,o.tZ)(a.Z,{...i})))`
    .ant-collapse-item {
      .ant-collapse-header {
        font-weight: ${({bold:e,theme:t})=>e?t.typography.weights.bold:t.typography.weights.normal};
        font-size: ${({bigger:e,theme:t})=>e?4*t.gridUnit+"px":"inherit"};

        .ant-collapse-arrow svg {
          transition: ${({animateArrows:e})=>e?"transform 0.24s":"none"};
        }

        ${({expandIconPosition:e})=>e&&"right"===e&&"\n            .anticon.anticon-right.ant-collapse-arrow > svg {\n              transform: rotate(90deg) !important;\n            }\n          "}

        ${({light:e,theme:t})=>e&&`\n            color: ${t.colors.grayscale.light4};\n            .ant-collapse-arrow svg {\n              color: ${t.colors.grayscale.light4};\n            }\n          `}

        ${({ghost:e,bordered:t,theme:n})=>e&&t&&`\n            border-bottom: 1px solid ${n.colors.grayscale.light3};\n          `}
      }
      .ant-collapse-content {
        .ant-collapse-content-box {
          .loading.inline {
            margin: ${({theme:e})=>12*e.gridUnit}px auto;
            display: block;
          }
        }
      }
    }
    .ant-collapse-item-active {
      .ant-collapse-header {
        ${({expandIconPosition:e})=>e&&"right"===e&&"\n            .anticon.anticon-right.ant-collapse-arrow > svg {\n              transform: rotate(-90deg) !important;\n            }\n          "}
      }
    }
  `,{Panel:a.Z.Panel})},4591:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(97538);const a=(0,n(51995).iK)(r.Z.Item)`
  ${({theme:e})=>`\n    .ant-form-item-label {\n      padding-bottom: ${e.gridUnit}px;\n      & > label {\n        text-transform: uppercase;\n        font-size: ${e.typography.sizes.s}px;\n        color: ${e.colors.grayscale.base};\n\n        &.ant-form-item-required:not(.ant-form-item-required-mark-optional) {\n          &::before {\n            display: none;\n          }\n          &::after {\n            display: inline-block;\n            color: ${e.colors.error.base};\n            font-size: ${e.typography.sizes.s}px;\n            content: '*';\n          }\n        }\n      }\n    }\n  `}
`},2857:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(51995),a=n(35944);const o=r.iK.label`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
`,i=r.iK.label`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
  &::after {
    display: inline-block;
    margin-left: ${({theme:e})=>e.gridUnit}px;
    color: ${({theme:e})=>e.colors.error.base};
    font-size: ${({theme:e})=>e.typography.sizes.m}px;
    content: '*';
  }
`;function s({children:e,htmlFor:t,required:n=!1,className:r}){const s=n?i:o;return(0,a.tZ)(s,{htmlFor:t,className:r,children:e})}},73684:(e,t,n)=>{n.d(t,{Z:()=>k});var r,a=n(77808),o=n(31097),i=n(51995),s=n(11965),l=n(61988),d=n(8272),c=n(13322),u=n(35932),p=n(67294);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(null,arguments)}const m=({title:e,titleId:t,...n},a)=>p.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",ref:a,"aria-labelledby":t},n),e?p.createElement("title",{id:t},e):null,r||(r=p.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 7a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1m0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9.71-7.44-5.27-5.27a1.05 1.05 0 0 0-.71-.29H8.27a1.05 1.05 0 0 0-.71.29L2.29 7.56a1.05 1.05 0 0 0-.29.71v7.46c.004.265.107.518.29.71l5.27 5.27c.192.183.445.286.71.29h7.46a1.05 1.05 0 0 0 .71-.29l5.27-5.27a1.05 1.05 0 0 0 .29-.71V8.27a1.05 1.05 0 0 0-.29-.71M20 15.31 15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69z",clipRule:"evenodd"}))),g=(0,p.forwardRef)(m);var b=n(4591),f=n(2857),v=n(35944);const y=(0,i.iK)(a.default)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,$=(0,i.iK)(a.default.Password)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,x=(0,i.iK)("div")`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  .ant-form-item {
    margin-bottom: 0;
  }
`,w=i.iK.div`
  display: flex;
  align-items: center;
`,_=(0,i.iK)(f.Z)`
  margin-bottom: 0;
`,Z=s.iv`
  &.anticon > * {
    line-height: 0;
  }
`,k=({label:e,validationMethods:t,errorMessage:n,helpText:r,required:a=!1,hasTooltip:i=!1,tooltipText:p,id:h,className:m,visibilityToggle:f,get_url:k,description:S,...C})=>(0,v.BX)(x,{className:m,children:[(0,v.BX)(w,{children:[(0,v.tZ)(_,{htmlFor:h,required:a,children:e}),i&&(0,v.tZ)(d.Z,{tooltip:`${p}`})]}),(0,v.BX)(b.Z,{css:e=>((e,t)=>s.iv`
  .ant-form-item-children-icon {
    display: none;
  }
  ${t&&`.ant-form-item-control-input-content {\n      position: relative;\n      &:after {\n        content: ' ';\n        display: inline-block;\n        background: ${e.colors.error.base};\n        mask: url(${g});\n        mask-size: cover;\n        width: ${4*e.gridUnit}px;\n        height: ${4*e.gridUnit}px;\n        position: absolute;\n        right: ${1.25*e.gridUnit}px;\n        top: ${2.75*e.gridUnit}px;\n      }\n    }`}
`)(e,!!n),validateTrigger:Object.keys(t),validateStatus:n?"error":"success",help:n||r,hasFeedback:!!n,children:[f||"password"===C.name?(0,v.tZ)($,{...C,...t,iconRender:e=>e?(0,v.tZ)(o.Z,{title:(0,l.t)("Hide password."),children:(0,v.tZ)(c.Z.EyeInvisibleOutlined,{iconSize:"m",css:Z})}):(0,v.tZ)(o.Z,{title:(0,l.t)("Show password."),children:(0,v.tZ)(c.Z.EyeOutlined,{iconSize:"m",css:Z})}),role:"textbox"}):(0,v.tZ)(y,{...C,...t}),k&&S?(0,v.BX)(u.Z,{type:"link",htmlType:"button",buttonStyle:"default",onClick:()=>(window.open(k),!0),children:["Get ",S]}):(0,v.tZ)("br",{})]})]})},49238:(e,t,n)=>{n.d(t,{l0:()=>s,xJ:()=>l.Z,lX:()=>d.Z,QA:()=>c.Z});var r=n(97538),a=n(51995),o=n(35944);const i=(0,a.iK)(r.Z)`
  &.ant-form label {
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
  }
  .ant-form-item {
    margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
  }
`;function s(e){return(0,o.tZ)(i,{...e})}var l=n(4591),d=n(2857),c=n(73684)},85931:(e,t,n)=>{n.d(t,{m:()=>i});var r=n(73727),a=n(23525),o=n(35944);const i=({to:e,component:t,replace:n,innerRef:i,children:s,...l})=>"string"==typeof e&&(0,a.TO)(e)?(0,o.tZ)("a",{href:(0,a.en)(e),...l,children:s}):(0,o.tZ)(r.rU,{to:e,component:t,replace:n,innerRef:i,...l,children:s})},8272:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(51995),a=n(58593),o=n(13322),i=n(35944);const s=(0,r.iK)(a.u)`
  cursor: pointer;
`,l=r.iK.span`
  display: -webkit-box;
  -webkit-line-clamp: 20;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,d={fontSize:"12px",lineHeight:"16px"},c="rgba(0,0,0,0.9)";function u({tooltip:e,iconStyle:t={},placement:n="right",trigger:a="hover",overlayStyle:u=d,bgColor:p=c,viewBox:h="0 -1 24 24"}){const m=(0,r.Fg)(),g={...t,color:t.color||m.colors.grayscale.base};return(0,i.tZ)(s,{title:(0,i.tZ)(l,{children:e}),placement:n,trigger:a,overlayStyle:u,color:p,children:(0,i.tZ)(o.Z.InfoSolidSmall,{style:g,viewBox:h})})}},9875:(e,t,n)=>{n.d(t,{II:()=>i,Kx:()=>l,Rn:()=>s});var r=n(51995),a=n(77808),o=n(36795);const i=(0,r.iK)(a.default)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,s=(0,r.iK)(o.Z)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,l=(0,r.iK)(a.default.TextArea)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`},37921:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(11965),a=n(4715),o=n(51995),i=n(35944);function s(e){const t=(0,o.Fg)(),{colors:n,transitionTiming:s}=t,{type:l="default",onClick:d,children:c,...u}=e,{alert:p,primary:h,secondary:m,grayscale:g,success:b,warning:f,error:v,info:y}=n;let $=g.light3,x=d?h.light2:g.light3,w=d?g.light2:"transparent",_=d?h.light1:"transparent",Z=g.dark1;if("default"!==l){let e;Z=g.light4,"alert"===l?(Z=g.dark1,e=p):e="success"===l?b:"warning"===l?f:"danger"===l?v:"info"===l?y:"secondary"===l?m:h,$=e.base,x=d?e.dark1:e.base,w=d?e.dark1:"transparent",_=d?e.dark2:"transparent"}return(0,i.tZ)(a.Vp,{onClick:d,role:d?"button":void 0,...u,css:(0,r.iv)({transition:`background-color ${s}s`,whiteSpace:"nowrap",cursor:d?"pointer":"default",overflow:"hidden",textOverflow:"ellipsis",backgroundColor:$,borderColor:w,borderRadius:21,padding:"0.35em 0.8em",lineHeight:1,color:Z,maxWidth:"100%","&:hover":{backgroundColor:x,borderColor:_,opacity:1}},"",""),children:c})}},83862:(e,t,n)=>{n.d(t,{MainNav:()=>m,Menu:()=>h,PI:()=>d,av:()=>i,ef:()=>l,fH:()=>r,xI:()=>s});var r,a=n(51995),o=n(99210);!function(e){e.MenuItem="menu-item",e.SubMenu="submenu",e.SubMenuItem="submenu-item"}(r||(r={}));const i=e=>{var t,n;return void 0!==(null==e||null==(t=e.current)||null==(n=t.props)?void 0:n.parentMenu)},s=e=>{var t;return"Styled(MenuItem)"===(null==e||null==(t=e.type)?void 0:t.displayName)},l=e=>{var t;return 1===(null==e||null==(t=e.type)?void 0:t.isSubMenu)},d=e=>e===r.SubMenu||e===r.SubMenuItem,c=(0,a.iK)(o.Z.Item)`
  > a {
    text-decoration: none;
  }

  &.ant-menu-item {
    height: ${({theme:e})=>8*e.gridUnit}px;
    line-height: ${({theme:e})=>8*e.gridUnit}px;
    a {
      border-bottom: none;
      transition: background-color ${({theme:e})=>e.transitionTiming}s;
      &:after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 50%;
        width: 0;
        height: 3px;
        opacity: 0;
        transform: translateX(-50%);
        transition: all ${({theme:e})=>e.transitionTiming}s;
        background-color: ${({theme:e})=>e.colors.primary.base};
      }
      &:focus {
        border-bottom: none;
        background-color: transparent;
        @media (max-width: 767px) {
          background-color: ${({theme:e})=>e.colors.primary.light5};
        }
      }
    }
  }

  &.ant-menu-item,
  &.ant-dropdown-menu-item {
    span[role='button'] {
      display: inline-block;
      width: 100%;
    }
    transition-duration: 0s;
  }
`,u=(0,a.iK)(o.Z)`
  line-height: 51px;
  border: none;

  & > .ant-menu-item,
  & > .ant-menu-submenu {
    vertical-align: inherit;
    &:hover {
      color: ${({theme:e})=>e.colors.grayscale.dark1};
    }
  }

  &:not(.ant-menu-dark) > .ant-menu-submenu,
  &:not(.ant-menu-dark) > .ant-menu-item {
    &:hover {
      border-bottom: none;
    }
  }

  &:not(.ant-menu-dark) > .ant-menu-submenu,
  &:not(.ant-menu-dark) > .ant-menu-item {
    margin: 0px;
  }

  & > .ant-menu-item > a {
    padding: ${({theme:e})=>4*e.gridUnit}px;
  }
`,p=(0,a.iK)(o.Z.SubMenu)`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  border-bottom: none;
  .ant-menu-submenu-open,
  .ant-menu-submenu-active {
    background-color: ${({theme:e})=>e.colors.primary.light5};
    .ant-menu-submenu-title {
      color: ${({theme:e})=>e.colors.grayscale.dark1};
      background-color: ${({theme:e})=>e.colors.primary.light5};
      border-bottom: none;
      margin: 0;
      &:after {
        opacity: 1;
        width: calc(100% - 1);
      }
    }
  }
  .ant-menu-submenu-title {
    position: relative;
    top: ${({theme:e})=>-e.gridUnit-3}px;
    &:after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 50%;
      width: 0;
      height: 3px;
      opacity: 0;
      transform: translateX(-50%);
      transition: all ${({theme:e})=>e.transitionTiming}s;
      background-color: ${({theme:e})=>e.colors.primary.base};
    }
  }
  .ant-menu-submenu-arrow {
    top: 67%;
  }
  & > .ant-menu-submenu-title {
    padding: 0 ${({theme:e})=>6*e.gridUnit}px 0
      ${({theme:e})=>3*e.gridUnit}px !important;
    span[role='img'] {
      position: absolute;
      right: ${({theme:e})=>-e.gridUnit-2}px;
      top: ${({theme:e})=>5.25*e.gridUnit}px;
      svg {
        font-size: ${({theme:e})=>6*e.gridUnit}px;
        color: ${({theme:e})=>e.colors.grayscale.base};
      }
    }
    & > span {
      position: relative;
      top: 7px;
    }
    &:hover {
      color: ${({theme:e})=>e.colors.primary.base};
    }
  }
`,h=Object.assign(o.Z,{Item:c}),m=Object.assign(u,{Item:c,SubMenu:p,Divider:o.Z.Divider,ItemGroup:o.Z.ItemGroup})},87183:(e,t,n)=>{n.d(t,{Y:()=>s});var r=n(51995),a=n(47933);const o=(0,r.iK)(a.ZP)`
  .ant-radio-inner {
    top: -1px;
    left: 2px;
    width: ${({theme:e})=>4*e.gridUnit}px;
    height: ${({theme:e})=>4*e.gridUnit}px;
    border-width: 2px;
    border-color: ${({theme:e})=>e.colors.grayscale.light2};
  }

  .ant-radio.ant-radio-checked {
    .ant-radio-inner {
      border-width: ${({theme:e})=>e.gridUnit+1}px;
      border-color: ${({theme:e})=>e.colors.primary.base};
    }

    .ant-radio-inner::after {
      background-color: ${({theme:e})=>e.colors.grayscale.light5};
      top: 0;
      left: 0;
      width: ${({theme:e})=>e.gridUnit+2}px;
      height: ${({theme:e})=>e.gridUnit+2}px;
    }
  }

  .ant-radio:hover,
  .ant-radio:focus {
    .ant-radio-inner {
      border-color: ${({theme:e})=>e.colors.primary.dark1};
    }
  }
`,i=(0,r.iK)(a.ZP.Group)`
  font-size: inherit;
`,s=Object.assign(o,{Group:i,Button:a.ZP.Button})},12441:(e,t,n)=>{n.d(t,{r:()=>s});var r=n(51995),a=n(40987),o=n(35944);const i=(0,r.iK)(a.Z)`
  .ant-switch-checked {
    background-color: ${({theme:e})=>e.colors.primary.base};
  }
`,s=e=>(0,o.tZ)(i,{...e})},71262:(e,t,n)=>{n.d(t,{Xv:()=>h,cl:()=>g,ZP:()=>b});var r=n(11965),a=n(51995),o=n(20838),i=n(13322),s=n(35944);const l=({animated:e=!1,fullWidth:t=!0,allowOverflow:n=!0,...a})=>(0,s.tZ)(o.Z,{animated:e,...a,css:e=>r.iv`
      overflow: ${n?"visible":"hidden"};

      .ant-tabs-content-holder {
        overflow: ${n?"visible":"auto"};
      }
      .ant-tabs-tab {
        flex: 1 1 auto;
        &.ant-tabs-tab-active .ant-tabs-tab-btn {
          color: inherit;
        }
        &:hover {
          .anchor-link-container {
            cursor: pointer;
            .fa.fa-link {
              visibility: visible;
            }
          }
        }
        .short-link-trigger.btn {
          padding: 0 ${e.gridUnit}px;
          & > .fa.fa-link {
            top: 0;
          }
        }
      }
      ${t&&r.iv`
        .ant-tabs-nav-list {
          width: 100%;
        }
      `};

      .ant-tabs-tab-btn {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        font-size: ${e.typography.sizes.s}px;
        text-align: center;
        text-transform: uppercase;
        user-select: none;
        .required {
          margin-left: ${e.gridUnit/2}px;
          color: ${e.colors.error.base};
        }
      }
      .ant-tabs-ink-bar {
        background: ${e.colors.secondary.base};
      }
    `}),d=(0,a.iK)(o.Z.TabPane)``,c=Object.assign(l,{TabPane:d}),u=(0,a.iK)(l)`
  ${({theme:e,fullWidth:t})=>`\n    .ant-tabs-content-holder {\n      background: ${e.colors.grayscale.light5};\n    }\n\n    & > .ant-tabs-nav {\n      margin-bottom: 0;\n    }\n\n    .ant-tabs-tab-remove {\n      padding-top: 0;\n      padding-bottom: 0;\n      height: ${6*e.gridUnit}px;\n    }\n\n    ${t?r.iv`
            .ant-tabs-nav-list {
              width: 100%;
            }
          `:""}\n  `}
`,p=(0,a.iK)(i.Z.CancelX)`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,h=Object.assign(u,{TabPane:d});h.defaultProps={type:"editable-card",fullWidth:!1,animated:{inkBar:!0,tabPane:!1}},h.TabPane.defaultProps={closeIcon:(0,s.tZ)(p,{role:"button",tabIndex:0})};const m=(0,a.iK)(h)`
  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
    margin: 0 ${({theme:e})=>4*e.gridUnit}px;
    padding: ${({theme:e})=>`${3*e.gridUnit}px ${e.gridUnit}px`};
    background: transparent;
    border: none;
  }

  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-ink-bar {
    visibility: visible;
  }

  .ant-tabs-tab-btn {
    font-size: ${({theme:e})=>e.typography.sizes.m}px;
  }

  .ant-tabs-tab-remove {
    margin-left: 0;
    padding-right: 0;
  }

  .ant-tabs-nav-add {
    min-width: unset !important;
    background: transparent !important;
    border: none !important;
  }
`,g=Object.assign(m,{TabPane:d}),b=c},18451:(e,t,n)=>{n.d(t,{c:()=>a});var r=n(28216);function a(){return(0,r.v9)((e=>{var t;return null==e||null==(t=e.common)?void 0:t.conf}))}},39589:(e,t,n)=>{var r,a;n.d(t,{Z:()=>a}),function(e){e.Charts="CHARTS",e.Dashboards="DASHBOARDS",e.Recents="RECENTS",e.SavedQueries="SAVED_QUERIES"}(r||(r={})),function(e){e.GoogleSheets="gsheets",e.DbConnection="dbconnection",e.DatasetCreation="datasetCreation",e.CSVUpload="csvUpload",e.ExcelUpload="excelUpload",e.ColumnarUpload="columnarUpload"}(a||(a={}))},8911:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(()=>{try{return n(Object(function(){var e=new Error("Cannot find module '../../../superset_text'");throw e.code="MODULE_NOT_FOUND",e}()))||{}}catch(e){return{}}})()},34858:(e,t,n)=>{n.d(t,{LE:()=>m,NE:()=>f,PW:()=>g,Yi:()=>h,_l:()=>S,cb:()=>_,fF:()=>v,h1:()=>k,jb:()=>$,rM:()=>y,xx:()=>w,z:()=>x});var r=n(15926),a=n.n(r),o=n(67294),i=n(31069),s=n(61988),l=n(44818),d=n(22102),c=n(40768),u=(n(10222),n(8911));const p=e=>"string"==typeof e?e:Object.entries(e).map((([e,t])=>Array.isArray(t)?`(${e}) ${t.join(", ")}`:`(${e}) ${t}`)).join("\n");function h(e,t,n,r=!0,l=[],d,u=!0,p){const[h,m]=(0,o.useState)({count:0,collection:l,loading:u,lastFetchDataConfig:null,permissions:[],bulkSelectEnabled:!1});function g(e){m((t=>({...t,...e})))}(0,o.useEffect)((()=>{r&&i.Z.get({endpoint:`/api/v1/${e}/_info?q=${a().encode({keys:["permissions"]})}`}).then((({json:e={}})=>{g({permissions:e.permissions})}),(0,c.v$)((e=>n((0,s.t)("An error occurred while fetching %s info: %s",t,e)))))}),[]);const b=(0,o.useCallback)((({pageIndex:r,pageSize:o,sortBy:l,filters:u})=>{g({lastFetchDataConfig:{filters:u,pageIndex:r,pageSize:o,sortBy:l},loading:!0});const h=(d||[]).concat(u).map((({id:e,operator:t,value:n})=>({col:e,opr:t,value:n&&"object"==typeof n&&"value"in n?n.value:n}))),m=a().encode_uri({order_column:l[0].id,order_direction:l[0].desc?"desc":"asc",page:r,page_size:o,...h.length?{filters:h}:{},...null!=p&&p.length?{select_columns:p}:{}});return i.Z.get({endpoint:`/api/v1/${e}/?q=${m}`}).then((({json:e={}})=>{g({collection:e.result,count:e.count,lastFetched:(new Date).toISOString()})}),(0,c.v$)((e=>n((0,s.t)("An error occurred while fetching %ss: %s",t,e))))).finally((()=>{g({loading:!1})}))}),[d]);return{state:{loading:h.loading,resourceCount:h.count,resourceCollection:h.collection,bulkSelectEnabled:h.bulkSelectEnabled,lastFetched:h.lastFetched},setResourceCollection:e=>g({collection:e}),hasPerm:function(e){return!!h.permissions.length&&Boolean(h.permissions.find((t=>t===e)))},fetchData:b,toggleBulkSelect:function(){g({bulkSelectEnabled:!h.bulkSelectEnabled})},refreshData:e=>h.lastFetchDataConfig?b(h.lastFetchDataConfig):e?b(e):null}}function m(e,t,n,r=""){const[a,l]=(0,o.useState)({loading:!1,resource:null,error:null});function d(e){l((t=>({...t,...e})))}return{state:a,setResource:e=>d({resource:e}),fetchResource:(0,o.useCallback)((a=>{d({loading:!0});const o=`/api/v1/${e}/${a}`,l=""!==r?`${o}/${r}`:o;return i.Z.get({endpoint:l}).then((({json:e={}})=>(d({resource:e.result,error:null}),e.result)),(0,c.v$)((e=>{n((0,s.t)("An error occurred while fetching %ss: %s",t,p(e))),d({error:e})}))).finally((()=>{d({loading:!1})}))}),[n,e,t]),createResource:(0,o.useCallback)(((r,a=!1)=>(d({loading:!0}),i.Z.post({endpoint:`/api/v1/${e}/`,body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((({json:e={}})=>(d({resource:{id:e.id,...e.result},error:null}),e.id)),(0,c.v$)((e=>{a||n((0,s.t)("An error occurred while creating %ss: %s",t,p(e))),d({error:e})}))).finally((()=>{d({loading:!1})})))),[n,e,t]),updateResource:(0,o.useCallback)(((r,a,o=!1,l=!0)=>(l&&d({loading:!0}),i.Z.put({endpoint:`/api/v1/${e}/${r}`,body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((({json:e={}})=>(d({resource:{...e.result,id:e.id},error:null}),e.result)),(0,c.v$)((e=>(o||n((0,s.t)("An error occurred while fetching %ss: %s",t,JSON.stringify(e))),d({error:e}),e)))).finally((()=>{l&&d({loading:!1})})))),[n,e,t]),clearError:()=>d({error:null})}}function g(e,t,n){const[r,a]=(0,o.useState)({loading:!1,passwordsNeeded:[],alreadyExists:[],sshPasswordNeeded:[],sshPrivateKeyNeeded:[],sshPrivateKeyPasswordNeeded:[],failed:!1});function d(e){a((t=>({...t,...e})))}return{state:r,importResource:(0,o.useCallback)(((r,a={},o={},u={},p={},h=!1)=>{d({loading:!0,failed:!1});const m=new FormData;m.append("formData",r);const g=(0,s.t)("Please re-export your file and try importing again");return a&&m.append("passwords",JSON.stringify(a)),h&&m.append("overwrite","true"),o&&m.append("ssh_tunnel_passwords",JSON.stringify(o)),u&&m.append("ssh_tunnel_private_keys",JSON.stringify(u)),p&&m.append("ssh_tunnel_private_key_passwords",JSON.stringify(p)),i.Z.post({endpoint:`/api/v1/${e}/import/`,body:m,headers:{Accept:"application/json"}}).then((()=>(d({passwordsNeeded:[],alreadyExists:[],sshPasswordNeeded:[],sshPrivateKeyNeeded:[],sshPrivateKeyPasswordNeeded:[],failed:!1}),!0))).catch((e=>(0,l.O$)(e).then((e=>(d({failed:!0}),e.errors?((0,c.Er)(e.errors)?n((0,s.t)("An error occurred while importing %s: %s",t,[...e.errors.map((e=>e.message)),g].join(".\n"))):d({passwordsNeeded:(0,c.$u)(e.errors),sshPasswordNeeded:(0,c.dK)(e.errors),sshPrivateKeyNeeded:(0,c.ru)(e.errors),sshPrivateKeyPasswordNeeded:(0,c.z9)(e.errors),alreadyExists:(0,c.cE)(e.errors)}),!1):(n((0,s.t)("An error occurred while importing %s: %s",t,e.message||e.error)),!1)))))).finally((()=>{d({loading:!1})}))}),[])}}const b={chart:(0,d.Z)({requestType:"rison",method:"GET",endpoint:"/api/v1/chart/favorite_status/"}),dashboard:(0,d.Z)({requestType:"rison",method:"GET",endpoint:"/api/v1/dashboard/favorite_status/"}),tag:(0,d.Z)({requestType:"rison",method:"GET",endpoint:"/api/v1/tag/favorite_status/"})};function f(e,t,n){const[r,a]=(0,o.useState)({}),l=e=>a((t=>({...t,...e})));return(0,o.useEffect)((()=>{t.length&&b[e](t).then((({result:e})=>{const t=e.reduce(((e,t)=>(e[t.id]=t.value,e)),{});l(t)}),(0,c.v$)((e=>n((0,s.t)("There was an error fetching the favorite status: %s",e)))))}),[t,e,n]),[(0,o.useCallback)(((t,r)=>{const a=`/api/v1/${e}/${t}/favorites/`;(r?i.Z.delete({endpoint:a}):i.Z.post({endpoint:a})).then((()=>{l({[t]:!r})}),(0,c.v$)((e=>n((0,s.t)("There was an error saving the favorite status: %s",e)))))}),[e]),r]}const v=(e,t)=>{const[n,r]=(0,o.useState)(null);return{sliceCurrentlyEditing:n,handleChartUpdated:function(n){const r=t.map((e=>e.id===n.id?{...e,...n}:e));e(r)},openChartEditModal:function(e){r({slice_id:e.id,slice_name:e.slice_name,description:e.description,cache_timeout:e.cache_timeout,certified_by:e.certified_by,certification_details:e.certification_details,is_managed_externally:e.is_managed_externally})},closeChartEditModal:function(){r(null)}}},y=()=>u.Z.DB_IMAGES,$=()=>u.Z.DB_CONNECTION_ALERTS,x=()=>u.Z.DB_CONNECTION_DOC_LINKS,w=(e,t,n)=>{i.Z.post({endpoint:"api/v1/database/test_connection/",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((()=>{n((0,s.t)("Connection looks good!"))}),(0,c.v$)((e=>{t((0,s.t)("ERROR: %s",p(e)))})))};function _(){const[e,t]=(0,o.useState)(null);return[e,(0,o.useCallback)((()=>{i.Z.get({endpoint:"/api/v1/database/available/"}).then((({json:e})=>{t(e)}))}),[t])]}const Z=e=>e&&Array.isArray(null==e?void 0:e.catalog)?{...e,catalog:Object.assign({},...e.catalog.map((e=>({[e.name]:e.value}))))}:e;function k(){const[e,t]=(0,o.useState)(null);return[e,(0,o.useCallback)(((e,n=!1)=>{var r;return null!=e&&null!=(r=e.parameters)&&r.ssh?(t(null),[]):i.Z.post({endpoint:"/api/v1/database/validate_parameters/",body:JSON.stringify(Z(e)),headers:{"Content-Type":"application/json"}}).then((()=>{t(null)})).catch((e=>{if("function"==typeof e.json)return e.json().then((({errors:e=[]})=>{const r=e.filter((e=>!["CONNECTION_MISSING_PARAMETERS_ERROR","CONNECTION_ACCESS_DENIED_ERROR"].includes(e.error_type)||n)).reduce(((e,{error_type:t,extra:n,message:r})=>{var a,o;return n.catalog?n.catalog.name?{...e,error_type:t,[n.catalog.idx]:{name:r}}:n.catalog.url?{...e,error_type:t,[n.catalog.idx]:{url:r}}:{...e,error_type:t,[n.catalog.idx]:{name:r,url:r}}:n.invalid?{...e,[n.invalid[0]]:r,error_type:t}:n.missing?{...e,error_type:t,...Object.assign({},...n.missing.map((e=>({[e]:"This is a required field"}))))}:null!=(a=n.issue_codes)&&a.length?{...e,error_type:t,description:r||(null==(o=n.issue_codes[0])?void 0:o.message)}:e}),{});return t(r),r}));console.error(e)}))}),[t]),t]}const S=(e,t,n)=>{var r;return n?null==(r=e.reports[t])?void 0:r[n]:null}},12:(e,t,n)=>{var r,a;n.d(t,{J:()=>a}),function(e){e.Favorite="Favorite",e.Mine="Mine",e.Other="Other",e.Viewed="Viewed",e.Created="Created",e.Edited="Edited"}(r||(r={})),function(e){e.Id="id",e.ChangedOn="changed_on",e.ChangedBy="changed_by",e.Database="database",e.DatabaseName="database.database_name",e.Schema="schema",e.Sql="sql",e.ExecutedSql="executed_sql",e.SqlTables="sql_tables",e.Status="status",e.TabName="tab_name",e.User="user",e.UserFirstName="user.first_name",e.StartTime="start_time",e.EndTime="end_time",e.Rows="rows",e.TmpTableName="tmp_table_name",e.TrackingUrl="tracking_url"}(a||(a={}))},40768:(e,t,n)=>{n.d(t,{$u:()=>N,Er:()=>z,Gm:()=>x,IB:()=>_,Iu:()=>w,Mc:()=>K,ZB:()=>Z,cE:()=>I,dK:()=>T,eX:()=>g,ru:()=>j,tm:()=>v,v$:()=>$,wk:()=>y,xL:()=>k,z9:()=>R});var r=n(25325),a=n.n(r),o=n(51995),i=n(31069),s=n(44818),l=n(68492),d=n(61988),c=n(11965),u=n(15926),p=n.n(u),h=n(8911),m=n(12617);n(39589),n(12),(()=>{const e=p(),t=[];for(let e=0;e<16;e+=1)for(let n=0;n<16;n+=1){if(e+n===0)continue;const r=String.fromCharCode(16*e+n);/\w|[-_./~]/.test(r)||t.push(`\\u00${e.toString(16)}${n.toString(16)}`)}e.not_idchar=t.join(""),e.not_idstart="-0123456789";const n=`[^${e.not_idstart}${e.not_idchar}][^${e.not_idchar}]*`;e.id_ok=new RegExp(`^${n}$`),e.next_id=new RegExp(n,"g")})();const g=o.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,b=e=>(t,n,r,a)=>async(r="",o,s)=>{var l;const d=`/api/v1/${t}/${e}/${n}`,c=p().encode_uri({filter:r,page:o,page_size:s}),{json:u={}}=await i.Z.get({endpoint:`${d}?q=${c}`});let h=!1;const m=a?{label:`${a.firstName} ${a.lastName}`,value:a.userId}:void 0,g=[];return null==u||null==(l=u.result)||l.filter((({text:e})=>e.trim().length>0)).forEach((({text:e,value:t})=>{m&&t===m.value&&e===m.label?h=!0:g.push({label:e,value:t})})),!m||r&&!h||g.unshift(m),{data:g,totalCount:null==u?void 0:u.count}},f=5,v=b("related"),y=b("distinct");function $(e){return async t=>{const n=await(0,s.O$)(t),r=null==n?void 0:n.errors,a=await h.Z;null!=r&&r.length&&null!=a&&a.ERRORS&&r[0].error_type in a.ERRORS&&(n.message=a.ERRORS[r[0].error_type]),l.Z.error(t),e(n.message||n.error)}}function x({id:e,slice_name:t},n,r,a,o,s){const l={pageIndex:0,pageSize:f,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:[{id:"created_by",operator:"rel_o_m",value:`${s}`}]};i.Z.delete({endpoint:`/api/v1/chart/${e}`}).then((()=>{"Mine"===o?a(l):a(),n((0,d.t)("Deleted: %s",t))}),(()=>{r((0,d.t)("There was an issue deleting: %s",t))}))}function w({id:e,dashboard_title:t},n,r,a,o,s){return i.Z.delete({endpoint:`/api/v1/dashboard/${e}`}).then((()=>{"Mine"===o?n({pageIndex:0,pageSize:f,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:[{id:"owners",operator:"rel_m_m",value:`${s}`}]}):n(),r((0,d.t)("Deleted: %s",t))}),$((e=>a((0,d.t)("There was an issue deleting %s: %s",t,e)))))}function _(e,t){let n=e.split("\n");return n.length>=t&&(n=n.slice(0,t),n.push("...")),n.join("\n")}[576,768,992,1200].map((e=>`@media (max-width: ${e}px)`)),o.iK.div`
  ${({showThumbnails:e,theme:t})=>`\n    overflow: hidden;\n    display: grid;\n    grid-gap: ${12*t.gridUnit}px ${4*t.gridUnit}px;\n    grid-template-columns: repeat(auto-fit, 300px);\n    max-height: ${e?"314":"148"}px;\n    margin-top: ${-6*t.gridUnit}px;\n    padding: ${e?`${8*t.gridUnit+3}px ${9*t.gridUnit}px`:`${8*t.gridUnit+1}px ${9*t.gridUnit}px`};\n  `}
`;const Z=o.iK.div`
  cursor: pointer;
  a {
    text-decoration: none;
  }
  .ant-card-cover > div {
    /* Height is calculated based on 300px width, to keep the same aspect ratio as the 800*450 thumbnails */
    height: 168px;
  }
`,k=e=>c.iv`
  margin: auto ${2*e.gridUnit}px auto 0;
  color: ${e.colors.grayscale.base};
`,S=e=>{var t;return"object"==typeof e&&Array.isArray(e._schema)&&!(null==(t=e._schema)||!t.find((e=>"Must provide a password for the database"===e)))},C=e=>{var t;return"object"==typeof e&&Array.isArray(e._schema)&&!(null==(t=e._schema)||!t.find((e=>"Must provide a password for the ssh tunnel"===e)))},E=e=>{var t;return"object"==typeof e&&Array.isArray(e._schema)&&!(null==(t=e._schema)||!t.find((e=>"Must provide a private key for the ssh tunnel"===e)))},U=e=>{var t;return"object"==typeof e&&Array.isArray(e._schema)&&!(null==(t=e._schema)||!t.find((e=>"Must provide a private key password for the ssh tunnel"===e)))},O=e=>"string"==typeof e&&e.includes("already exists and `overwrite=true` was not passed"),N=e=>e.map((e=>Object.entries(e.extra).filter((([,e])=>S(e))).map((([e])=>e)))).flat(),T=e=>e.map((e=>Object.entries(e.extra).filter((([,e])=>C(e))).map((([e])=>e)))).flat(),j=e=>e.map((e=>Object.entries(e.extra).filter((([,e])=>E(e))).map((([e])=>e)))).flat(),R=e=>e.map((e=>Object.entries(e.extra).filter((([,e])=>U(e))).map((([e])=>e)))).flat(),I=e=>e.map((e=>Object.entries(e.extra).filter((([,e])=>O(e))).map((([e])=>e)))).flat(),z=e=>e.some((e=>{const t=Object.entries(e.extra).filter((([e])=>"issue_codes"!==e));return 0===t.length||!t.every((([,e])=>S(e)||O(e)||C(e)||E(e)||U(e)))})),P=(e,t)=>void 0!==e&&a()(e,t).length>0,K=(e,t,n,r,a)=>{const o=(0,m.R)("can_csv_upload","Database",e)&&P(t,a),i=P(n,a)&&(0,m.R)("can_columnar_upload","Database",e),s=P(r,a)&&(0,m.R)("can_excel_upload","Database",e);return{canUploadCSV:o,canUploadColumnar:i,canUploadExcel:s,canUploadData:o||i||s}}}}]);
//# sourceMappingURL=2639.7f8f2fe160143899e154.entry.js.map
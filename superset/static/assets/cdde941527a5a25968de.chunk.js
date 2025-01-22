"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4380],{54070:(e,t,n)=>{n.d(t,{w:()=>l});var i=n(58593),r=n(83379),a=n(61988),o=n(35944);const l=({user:e,date:t})=>{const n=(0,o.tZ)("span",{className:"no-wrap",children:t});if(e){const t=(0,r.Z)(e),l=(0,a.t)("Modified by: %s",t);return(0,o.tZ)(i.u,{title:l,placement:"bottom",children:n})}return n}},19259:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(67294),r=n(17198),a=n(35944);function o({title:e,description:t,onConfirm:n,children:o}){const[l,s]=(0,i.useState)(!1),[d,c]=(0,i.useState)([]),h=()=>{s(!1),c([])};return(0,a.BX)(a.HY,{children:[null==o?void 0:o(((...e)=>{e.forEach((e=>{e&&("function"==typeof e.persist&&e.persist(),"function"==typeof e.preventDefault&&e.preventDefault(),"function"==typeof e.stopPropagation&&e.stopPropagation())})),s(!0),c(e)})),(0,a.tZ)(r.Z,{description:t,onConfirm:()=>{n(...d),h()},onHide:h,open:l,title:e})]})}},17198:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(51995),r=n(61988),a=n(67294),o=n(9875),l=n(74069),s=n(49238),d=n(35944);const c=i.iK.div`
  padding-top: 8px;
  width: 50%;
  label {
    color: ${({theme:e})=>e.colors.grayscale.base};
    text-transform: uppercase;
  }
`,h=i.iK.div`
  line-height: ${({theme:e})=>4*e.gridUnit}px;
  padding-top: 16px;
`;function u({description:e,onConfirm:t,onHide:n,open:i,title:u}){const[p,m]=(0,a.useState)(!0),[g,v]=(0,a.useState)(""),b=()=>{v(""),t()};return(0,d.BX)(l.default,{disablePrimaryButton:p,onHide:()=>{v(""),n()},onHandledPrimaryAction:b,primaryButtonName:(0,r.t)("delete"),primaryButtonType:"danger",show:i,title:u,children:[(0,d.tZ)(h,{children:e}),(0,d.BX)(c,{children:[(0,d.tZ)(s.lX,{htmlFor:"delete",children:(0,r.t)('Type "%s" to confirm',(0,r.t)("DELETE"))}),(0,d.tZ)(o.II,{type:"text",id:"delete",autoComplete:"off",value:g,onChange:e=>{var t;const n=null!=(t=e.target.value)?t:"";m(n.toUpperCase()!==(0,r.t)("DELETE")),v(n)},onPressEnter:()=>{p||b()}})]})]})}},27989:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(67294),r=n(51995),a=n(61988),o=n(35932),l=n(74069),s=n(4715),d=n(34858),c=n(60972),h=n(35944);const u=r.iK.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,p=r.iK.div`
  padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
  padding-top: ${({theme:e})=>2*e.gridUnit}px;

  & > div {
    margin: ${({theme:e})=>e.gridUnit}px 0;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .confirm-overwrite {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  .input-container {
    display: flex;
    align-items: center;

    label {
      display: flex;
      margin-right: ${({theme:e})=>2*e.gridUnit}px;
    }

    i {
      margin: 0 ${({theme:e})=>e.gridUnit}px;
    }
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border-style: none;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;

    &[name='name'] {
      flex: 0 1 auto;
      width: 40%;
    }

    &[name='sqlalchemy_uri'] {
      margin-right: ${({theme:e})=>3*e.gridUnit}px;
    }
  }
`,m=({resourceName:e,resourceLabel:t,passwordsNeededMessage:n,confirmOverwriteMessage:r,onModelImport:m,show:g,onHide:v,passwordFields:b=[],setPasswordFields:f=(()=>{}),sshTunnelPasswordFields:y=[],setSSHTunnelPasswordFields:x=(()=>{}),sshTunnelPrivateKeyFields:w=[],setSSHTunnelPrivateKeyFields:$=(()=>{}),sshTunnelPrivateKeyPasswordFields:Z=[],setSSHTunnelPrivateKeyPasswordFields:S=(()=>{})})=>{const[N,U]=(0,i.useState)(!0),[k,C]=(0,i.useState)({}),[E,_]=(0,i.useState)(!1),[P,B]=(0,i.useState)(!1),[T,X]=(0,i.useState)([]),[H,I]=(0,i.useState)(!1),[R,z]=(0,i.useState)(),[F,M]=(0,i.useState)({}),[O,K]=(0,i.useState)({}),[D,L]=(0,i.useState)({}),A=()=>{X([]),f([]),C({}),_(!1),B(!1),I(!1),z(""),x([]),$([]),S([]),M({}),K({}),L({})},{state:{alreadyExists:W,passwordsNeeded:q,sshPasswordNeeded:Y,sshPrivateKeyNeeded:j,sshPrivateKeyPasswordNeeded:V},importResource:G}=(0,d.PW)(e,t,(e=>{z(e)}));(0,i.useEffect)((()=>{f(q),q.length>0&&I(!1)}),[q,f]),(0,i.useEffect)((()=>{_(W.length>0),W.length>0&&I(!1)}),[W,_]),(0,i.useEffect)((()=>{x(Y),Y.length>0&&I(!1)}),[Y,x]),(0,i.useEffect)((()=>{$(j),j.length>0&&I(!1)}),[j,$]),(0,i.useEffect)((()=>{S(V),V.length>0&&I(!1)}),[V,S]);return N&&g&&U(!1),(0,h.BX)(l.default,{name:"model",className:"import-model-modal",disablePrimaryButton:0===T.length||E&&!P||H,onHandledPrimaryAction:()=>{var e;(null==(e=T[0])?void 0:e.originFileObj)instanceof File&&(I(!0),G(T[0].originFileObj,k,F,O,D,P).then((e=>{e&&(A(),m())})))},onHide:()=>{U(!0),v(),A()},primaryButtonName:E?(0,a.t)("Overwrite"):(0,a.t)("Import"),primaryButtonType:E?"danger":"primary",width:"750px",show:g,title:(0,h.tZ)("h4",{children:(0,a.t)("Import %s",t)}),children:[(0,h.tZ)(p,{children:(0,h.tZ)(s.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:T,onChange:e=>{X([{...e.file,status:"done"}])},onRemove:e=>(X(T.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:H,children:(0,h.tZ)(o.Z,{loading:H,children:(0,a.t)("Select file")})})}),R&&(0,h.tZ)(c.Z,{errorMessage:R,showDbInstallInstructions:b.length>0||y.length>0||w.length>0||Z.length>0}),(()=>{if(0===b.length&&0===y.length&&0===w.length&&0===Z.length)return null;const e=[...new Set([...b,...y,...w,...Z])];return(0,h.BX)(h.HY,{children:[(0,h.tZ)("h5",{children:(0,a.t)("Database passwords")}),(0,h.tZ)(u,{children:n}),e.map((e=>(0,h.BX)(h.HY,{children:[(null==b?void 0:b.indexOf(e))>=0&&(0,h.BX)(p,{children:[(0,h.BX)("div",{className:"control-label",children:[(0,a.t)("%s PASSWORD",e.slice(10)),(0,h.tZ)("span",{className:"required",children:"*"})]}),(0,h.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:k[e],onChange:t=>C({...k,[e]:t.target.value})})]},`password-for-${e}`),(null==y?void 0:y.indexOf(e))>=0&&(0,h.BX)(p,{children:[(0,h.BX)("div",{className:"control-label",children:[(0,a.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),(0,h.tZ)("span",{className:"required",children:"*"})]}),(0,h.tZ)("input",{name:`ssh_tunnel_password-${e}`,autoComplete:`ssh_tunnel_password-${e}`,type:"password",value:F[e],onChange:t=>M({...F,[e]:t.target.value})})]},`ssh_tunnel_password-for-${e}`),(null==w?void 0:w.indexOf(e))>=0&&(0,h.BX)(p,{children:[(0,h.BX)("div",{className:"control-label",children:[(0,a.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),(0,h.tZ)("span",{className:"required",children:"*"})]}),(0,h.tZ)("textarea",{name:`ssh_tunnel_private_key-${e}`,autoComplete:`ssh_tunnel_private_key-${e}`,value:O[e],onChange:t=>K({...O,[e]:t.target.value})})]},`ssh_tunnel_private_key-for-${e}`),(null==Z?void 0:Z.indexOf(e))>=0&&(0,h.BX)(p,{children:[(0,h.BX)("div",{className:"control-label",children:[(0,a.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),(0,h.tZ)("span",{className:"required",children:"*"})]}),(0,h.tZ)("input",{name:`ssh_tunnel_private_key_password-${e}`,autoComplete:`ssh_tunnel_private_key_password-${e}`,type:"password",value:D[e],onChange:t=>L({...D,[e]:t.target.value})})]},`ssh_tunnel_private_key_password-for-${e}`)]})))]})})(),E?(0,h.tZ)(h.HY,{children:(0,h.BX)(p,{children:[(0,h.tZ)("div",{className:"confirm-overwrite",children:r}),(0,h.tZ)("div",{className:"control-label",children:(0,a.t)('Type "%s" to confirm',(0,a.t)("OVERWRITE"))}),(0,h.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,n;const i=null!=(t=null==(n=e.currentTarget)?void 0:n.value)?t:"";B(i.toUpperCase()===(0,a.t)("OVERWRITE"))}})]})}):null]})}},86074:(e,t,n)=>{n.d(t,{Z:()=>$});var i=n(23279),r=n.n(i),a=n(67294),o=n(16550),l=n(73727),s=n(51995),d=n(11965),c=n(61988),h=n(93967),u=n.n(h),p=n(58593),m=n(4715),g=n(83862),v=n(35932),b=n(13322),f=n(35944);const y=s.iK.div`
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
`,x=e=>d.iv`
  color: ${e.colors.grayscale.light1};
  cursor: not-allowed;

  &:hover {
    color: ${e.colors.grayscale.light1};
  }

  .ant-menu-item-selected {
    background-color: ${e.colors.grayscale.light1};
  }
`,{SubMenu:w}=g.MainNav,$=e=>{var t,n,i;const[s,d]=(0,a.useState)("horizontal"),[h,$]=(0,a.useState)("nav-right");let Z=!0;try{(0,o.k6)()}catch(e){Z=!1}return(0,a.useEffect)((()=>{function t(){window.innerWidth<=767?d("inline"):d("horizontal"),e.buttons&&e.buttons.length>=3&&window.innerWidth>=795?$("nav-right"):e.buttons&&e.buttons.length>=3&&window.innerWidth<=795&&$("nav-right-collapse")}t();const n=r()(t,10);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[e.buttons]),(0,f.BX)(y,{children:[(0,f.BX)(m.X2,{className:"menu",role:"navigation",children:[e.name&&(0,f.tZ)("div",{className:"header",children:e.name}),(0,f.tZ)(g.Menu,{mode:s,style:{backgroundColor:"transparent"},children:null==(t=e.tabs)?void 0:t.map((t=>(e.usesRouter||Z)&&t.usesRouter?(0,f.tZ)(g.Menu.Item,{children:(0,f.tZ)("div",{role:"tab",className:t.name===e.activeChild?"active":"",children:(0,f.tZ)("div",{children:(0,f.tZ)(l.rU,{to:t.url||"",children:t.label})})})},t.label):(0,f.tZ)(g.Menu.Item,{children:(0,f.tZ)("div",{className:u()("no-router",{active:t.name===e.activeChild}),role:"tab",children:(0,f.tZ)("a",{href:t.url,onClick:t.onClick,children:t.label})})},t.label)))}),(0,f.BX)("div",{className:h,children:[(0,f.tZ)(g.Menu,{mode:"horizontal",triggerSubMenuAction:"click",children:null==(n=e.dropDownLinks)?void 0:n.map(((e,t)=>{var n;return(0,f.tZ)(w,{title:e.label,icon:(0,f.tZ)(b.Z.TriangleDown,{}),popupOffset:[10,20],className:"dropdown-menu-links",children:null==(n=e.childs)?void 0:n.map((e=>"object"==typeof e?e.disable?(0,f.tZ)(g.MainNav.Item,{css:x,disabled:!0,children:(0,f.tZ)(p.u,{placement:"top",title:(0,c.t)("Enable 'Allow file uploads to database' in any database's settings"),children:e.label})},e.label):(0,f.tZ)(g.MainNav.Item,{children:(0,f.tZ)("a",{href:e.url,onClick:e.onClick,children:e.label})},e.label):null))},t)}))}),null==(i=e.buttons)?void 0:i.map(((e,t)=>(0,f.tZ)(v.Z,{buttonStyle:e.buttonStyle,onClick:e.onClick,children:e.name},t)))]})]}),e.children]})}},32228:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(89816),r=n(15926),a=n.n(r),o=n(64296);function l(e,t,n,r=200){const l=(0,o.x0)(),s=`/api/v1/${e}/export/?q=${a().encode(t)}&token=${l}`,d=document.createElement("iframe");d.style.display="none",d.src=s,document.body.appendChild(d);const c=window.setInterval((()=>{"done"===(0,i.Z)()[l]&&(window.clearInterval(c),document.body.removeChild(d),n())}),r)}},83379:(e,t,n)=>{function i(e){return e?`${e.first_name} ${e.last_name}`:""}n.d(t,{Z:()=>i})}}]);
//# sourceMappingURL=cdde941527a5a25968de.chunk.js.map
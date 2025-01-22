"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7637],{79789:(t,e,n)=>{n.d(e,{Z:()=>l});var i=n(51995),r=n(61988),a=n(13322),o=n(58593),s=n(35944);const l=function({certifiedBy:t,details:e,size:n="l"}){const l=(0,i.Fg)();return(0,s.tZ)(o.u,{id:"certified-details-tooltip",title:(0,s.BX)(s.HY,{children:[t&&(0,s.tZ)("div",{children:(0,s.tZ)("strong",{children:(0,r.t)("Certified by %s",t)})}),(0,s.tZ)("div",{children:e})]}),children:(0,s.tZ)(a.Z.Certified,{iconColor:l.colors.primary.base,iconSize:n})})}},34581:(t,e,n)=>{n.d(e,{Z:()=>u});var i=n(81545),r=n(51995),a=n(58593),o=n(4715);var s,l,d=n(35944);const c=null!=(s=null==(l=(0,i.Z)().get())?void 0:l.colors)?s:[],g=t=>{const e=8*t.gridUnit;return`\n  width: ${e}px;\n  height: ${e}px;\n  line-height: ${e}px;\n  font-size: ${t.typography.sizes.s}px;`},h=(0,r.iK)(o.qE)`
  ${({theme:t})=>g(t)}
`,p=(0,r.iK)(o.qE.Group)`
  .ant-avatar {
    ${({theme:t})=>g(t)}
  }
`;function u({users:t,maxCount:e=4}){return(0,d.tZ)(p,{maxCount:e,children:t.map((({first_name:t,last_name:e,id:n})=>{var i,r;const o=`${t} ${e}`,s=function(t,e){return t?e[function(t,e){const n=[...t].map((t=>t.charCodeAt(0))),i=n.length,r=i%(e-1)+1,a=n.reduce(((t,e)=>t+e))%e;let o=n[0]%e;return[...new Array(i)].forEach((()=>{o=(r*o+a)%e})),o}(t,e.length)]:"transparent"}(`${n}-${t}-${e}`,c),l=`/api/v1/user/${n}/avatar.png`;return(0,d.tZ)(a.u,{title:o,placement:"top",children:(0,d.BX)(h,{style:{backgroundColor:s,borderColor:s},src:l,children:[null==t||null==(i=t[0])?void 0:i.toLocaleUpperCase(),null==e||null==(r=e[0])?void 0:r.toLocaleUpperCase()]},o)},o)}))})}},25772:(t,e,n)=>{n.d(e,{P:()=>i.Z});var i=n(65477);n(8420)},7628:(t,e,n)=>{n.r(e),n.d(e,{default:()=>z});var i=n(67294),r=n(11965),a=n(51995),o=n(61988),s=n(35755),l=n(30381),d=n.n(l),c=n(76962),g=n(25772),h=n(34581),p=n(94301),u=n(35944);const m=a.iK.div`
  text-align: left;
  border-radius: ${({theme:t})=>1*t.gridUnit}px 0;
  .table {
    table-layout: fixed;
  }
  .td {
    width: 33%;
  }
  .entity-title {
    font-family: Inter;
    font-size: ${({theme:t})=>t.typography.sizes.m}px;
    font-weight: ${({theme:t})=>t.typography.weights.medium};
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
    margin: ${({theme:t})=>4*t.gridUnit}px 0;
  }
`;function y({search:t="",setShowTagModal:e,objects:n}){const i=n.dashboard.length>0||n.chart.length>0||n.query.length>0,r=t=>{const e=n[t].map((e=>({[t]:(0,u.tZ)("a",{href:e.url,children:e.name}),modified:d().utc(e.changed_on).fromNow(),tags:e.tags,owners:e.owners})));return(0,u.tZ)(c.Z,{className:"table-condensed",emptyWrapperType:c.u.Small,data:e,pageSize:10,columns:[{accessor:t,Header:"Title"},{Cell:({row:{original:{tags:t=[]}}})=>(0,u.tZ)(g.P,{tags:t.filter((t=>"TagTypes.custom"===t.type||1===t.type)),maxTags:3}),Header:(0,o.t)("Tags"),accessor:"tags",disableSortBy:!0},{Cell:({row:{original:{owners:t=[]}}})=>(0,u.tZ)(h.Z,{users:t}),Header:(0,o.t)("Owners"),accessor:"owners",disableSortBy:!0,size:"xl"}]})};return(0,u.tZ)(m,{children:i?(0,u.BX)(u.HY,{children:[(0,u.tZ)("div",{className:"entity-title",children:(0,o.t)("Dashboards")}),r("dashboard"),(0,u.tZ)("div",{className:"entity-title",children:(0,o.t)("Charts")}),r("chart"),(0,u.tZ)("div",{className:"entity-title",children:(0,o.t)("Queries")}),r("query")]}):(0,u.tZ)(p.XJ,{image:"dashboard.svg",title:(0,o.t)("No entities have this tag currently assigned"),buttonAction:()=>e(!0),buttonText:(0,o.t)("Add tag to entities")})})}var b=n(35932),f=n(67697),v=n(52564),Z=n(51360),$=n(14114),x=n(48273),w=n(38703),T=n(83379);const U=t=>r.iv`
  display: flex;
  align-items: center;
  margin-left: ${t.gridUnit}px;
  & > span {
    margin-right: ${3*t.gridUnit}px;
  }
`,S=a.iK.div`
  ${({theme:t})=>`\n  background-color: ${t.colors.grayscale.light4};\n  .select-control {\n    margin-left: ${4*t.gridUnit}px;\n    margin-right: ${4*t.gridUnit}px;\n    margin-bottom: ${2*t.gridUnit}px;\n  }\n  .select-control-label {\n    text-transform: uppercase;\n    font-size: ${3*t.gridUnit}px;\n    color: ${t.colors.grayscale.base};\n    margin-bottom: ${1*t.gridUnit}px;\n  }\n  .entities {\n    margin: ${6*t.gridUnit}px; 0px;\n  }\n  .pagination-container {\n    background-color: transparent;\n  }\n  `}
`,C=a.iK.div`
  ${({theme:t})=>`\n  height: ${12.5*t.gridUnit}px;\n  background-color: ${t.colors.grayscale.light5};\n  margin-bottom: ${4*t.gridUnit}px;\n  .navbar-brand {\n    margin-left: ${2*t.gridUnit}px;\n    font-weight: ${t.typography.weights.bold};\n  }\n  .header {\n    font-weight: ${t.typography.weights.bold};\n    margin-right:  ${3*t.gridUnit}px;\n    text-align: left;\n    font-size: ${4.5*t.gridUnit}px;\n    padding: ${3*t.gridUnit}px;\n    display: inline-block;\n    line-height: ${9*t.gridUnit}px;\n  }\n  `};
`,z=(0,$.ZP)((function(){const[t]=(0,s.Wd)("id",s.yz),[e,n]=(0,i.useState)(null),[r,a]=(0,i.useState)(!1),{addSuccessToast:l,addDangerToast:d}=(0,$.e1)(),[c,g]=(0,i.useState)(!1),[h,p]=(0,i.useState)({dashboard:[],chart:[],query:[]}),m={title:(null==e?void 0:e.name)||"",placeholder:"testing",onSave:t=>{},canEdit:!1,label:(0,o.t)("dataset name")},z=[];if(null!=e&&e.description){const t={type:f.pG.Description,value:(null==e?void 0:e.description)||""};z.push(t)}const E={type:f.pG.Owner,createdBy:(0,T.Z)(null==e?void 0:e.created_by),createdOn:(null==e?void 0:e.created_on_delta_humanized)||""};z.push(E);const P={type:f.pG.LastModified,value:(null==e?void 0:e.changed_on_delta_humanized)||"",modifiedBy:(0,T.Z)(null==e?void 0:e.changed_by)};z.push(P);const _=()=>{g(!0),e?(0,x.AN)({tagIds:[null==e?void 0:e.id]||0,types:null},(t=>{const e={dashboard:[],chart:[],query:[]};t.forEach((function(t){const n=t.type;e[n].push(t)})),p(e),g(!1)}),(t=>{d("Error Fetching Tagged Objects"),g(!1)})):d("Error tag object is not referenced!")},k=t=>{(0,x.LS)(t,(t=>{n(t),g(!1)}),(t=>{d((0,o.t)("Error Fetching Tagged Objects")),g(!1)}))};return(0,i.useEffect)((()=>{t&&(g(!0),k(t))}),[t]),(0,i.useEffect)((()=>{e&&_()}),[e]),c?(0,u.tZ)(w.Z,{}):(0,u.BX)(S,{children:[(0,u.tZ)(Z.Z,{show:r,onHide:()=>{a(!1)},editTag:e,addSuccessToast:l,addDangerToast:d,refreshData:()=>{_(),t&&k(t)}}),(0,u.tZ)(C,{children:(0,u.tZ)(v.u,{additionalActionsMenu:(0,u.tZ)(u.HY,{}),editableTitleProps:m,faveStarProps:{itemId:1,saveFaveStar:()=>{}},showFaveStar:!1,showTitlePanelItems:!0,titlePanelAdditionalItems:(0,u.tZ)("div",{css:U,children:(0,u.tZ)(f.ZP,{items:z,tooltipPlacement:"bottom"})}),rightPanelAdditionalItems:(0,u.tZ)(u.HY,{children:(0,u.BX)(b.Z,{buttonStyle:"secondary",onClick:()=>a(!0),showMarginRight:!1,children:[(0,o.t)("Edit Tag")," "]})}),menuDropdownProps:{disabled:!0},showMenuDropdown:!1})}),(0,u.tZ)("div",{className:"entities",children:(0,u.tZ)(y,{search:(null==e?void 0:e.name)||"",setShowTagModal:a,objects:h})})]})}))}}]);
//# sourceMappingURL=19d5b8fd0dfd70d91e0b.chunk.js.map
"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6205],{4144:(e,t,i)=>{i.d(t,{Z:()=>o});var l=i(67294),r=i(51995),a=i(68492),n=i(35944);const s=r.iK.div`
  background-image: url(${({src:e})=>e});
  background-size: cover;
  background-position: center ${({position:e})=>e};
  display: inline-block;
  height: calc(100% - 1px);
  width: calc(100% - 2px);
  margin: 1px 1px 0 1px;
`;function o({src:e,fallback:t,isLoading:i,position:r,...o}){const[c,d]=(0,l.useState)(t);return(0,l.useEffect)((()=>(e&&fetch(e).then((e=>e.blob())).then((e=>{if(/image/.test(e.type)){const t=URL.createObjectURL(e);d(t)}})).catch((e=>{a.Z.error(e),d(t)})),()=>{d(t)})),[e,t]),(0,n.tZ)(s,{src:i?t:c,...o,position:r})}},20818:(e,t,i)=>{i.d(t,{Z:()=>R});var l=i(57557),r=i.n(l),a=i(67294),n=i(9875),s=i(49238),o=i(51127),c=i.n(o),d=i(35932),h=i(4715),p=i(15926),u=i.n(p),m=i(51995),g=i(61988),f=i(81545),b=i(44818),F=i(31069),x=i(55786),v=i(93185),y=i(74069),C=i(10689),k=i(45697),S=i.n(k),Z=i(76787),$=i(35944);const w={onChange:S().func,labelMargin:S().number,colorScheme:S().string,hasCustomLabelsColor:S().bool};class N extends a.PureComponent{constructor(e){super(e),this.state={hovered:!1},this.categoricalSchemeRegistry=(0,f.Z)(),this.choices=this.categoricalSchemeRegistry.keys().map((e=>[e,e])),this.schemes=this.categoricalSchemeRegistry.getMap()}setHover(e){this.setState({hovered:e})}render(){const{colorScheme:e,labelMargin:t=0,hasCustomLabelsColor:i}=this.props;return(0,$.tZ)(Z.Z,{description:(0,g.t)("Any color palette selected here will override the colors applied to this dashboard's individual charts"),labelMargin:t,name:"color_scheme",onChange:this.props.onChange,value:e,choices:this.choices,clearable:!0,schemes:this.schemes,hovered:this.state.hovered,hasCustomLabelsColor:i})}}N.propTypes=w,N.defaultProps={hasCustomLabelsColor:!1,colorScheme:void 0,onChange:()=>{}};const I=N;var U=i(87999),T=i(14114),X=i(48273),_=i(60718),O=i(99547);const E=(0,m.iK)(s.xJ)`
  margin-bottom: 0;
`,M=(0,m.iK)(C.Ad)`
  border-radius: ${({theme:e})=>e.borderRadius}px;
  border: 1px solid ${({theme:e})=>e.colors.secondary.light2};
`;var B={name:"1blj7km",styles:"margin-top:1em"};const R=(0,T.ZP)((({addSuccessToast:e,addDangerToast:t,colorScheme:i,dashboardId:l,dashboardInfo:o,dashboardTitle:p,onHide:m=(()=>{}),onlyApply:k=!1,onSubmit:S=(()=>{}),show:Z=!1})=>{const[w]=h.qz.useForm(),[N,T]=(0,a.useState)(!1),[R,j]=(0,a.useState)(!1),[q,L]=(0,a.useState)(i),[A,J]=(0,a.useState)(""),[K,z]=(0,a.useState)(),[D,P]=(0,a.useState)([]),[H,V]=(0,a.useState)([]),W=k?(0,g.t)("Apply"):(0,g.t)("Save"),[Y,G]=(0,a.useState)([]),Q=(0,f.Z)(),ee=(0,a.useMemo)((()=>Y.map((e=>({value:e.id,label:e.name})))),[Y.length]),te=async e=>{const{error:t,statusText:i,message:l}=await(0,b.O$)(e);let r=t||i||(0,g.t)("An error has occurred");"object"==typeof l&&"json_metadata"in l?r=l.json_metadata:"string"==typeof l&&(r=l,"Forbidden"===l&&(r=(0,g.t)("You do not have permission to edit this dashboard"))),y.default.error({title:(0,g.t)("Error"),content:r,okButtonProps:{danger:!0,className:"btn-danger"}})},ie=(0,a.useCallback)(((e="owners",t="",i,l)=>{const r=u().encode({filter:t,page:i,page_size:l});return F.Z.get({endpoint:`/api/v1/dashboard/related/${e}?q=${r}`}).then((e=>({data:e.json.result.filter((e=>void 0===e.extra.active||e.extra.active)).map((e=>({value:e.value,label:e.text}))),totalCount:e.json.count})))}),[]),le=(0,a.useCallback)((e=>{const{id:t,dashboard_title:i,slug:l,certified_by:a,certification_details:n,owners:s,roles:o,metadata:d,is_managed_externally:h}=e,p={id:t,title:i,slug:l||"",certifiedBy:a||"",certificationDetails:n||"",isManagedExternally:h||!1};w.setFieldsValue(p),z(p),P(s),V(o),L(d.color_scheme);const u=r()(d,["positions","shared_label_colors","color_scheme_domain"]);J(u?c()(u):"")}),[w]),re=(0,a.useCallback)((()=>{T(!0),F.Z.get({endpoint:`/api/v1/dashboard/${l}`}).then((e=>{var t;const i=e.json.result,l=null!=(t=i.json_metadata)&&t.length?JSON.parse(i.json_metadata):{};le({...i,metadata:l}),T(!1)}),te)}),[l,le]),ae=()=>{try{return null!=A&&A.length?JSON.parse(A):{}}catch(e){return{}}},ne=e=>{const t=(0,x.Z)(e).map((e=>({id:e.value,full_name:e.label})));P(t)},se=e=>{const t=(0,x.Z)(e).map((e=>({id:e.value,name:e.label})));V(t)},oe=()=>(D||[]).map((e=>({value:e.id,label:e.full_name||`${e.first_name} ${e.last_name}`}))),ce=(e="",{updateMetadata:t=!0}={})=>{const i=Q.keys(),l=ae();if(e&&!i.includes(e))throw y.default.error({title:(0,g.t)("Error"),content:(0,g.t)("A valid color scheme is required"),okButtonProps:{danger:!0,className:"btn-danger"}}),new Error("A valid color scheme is required");t&&(l.color_scheme=e,l.label_colors=l.label_colors||{},J(c()(l))),L(e)};return(0,a.useEffect)((()=>{Z&&(o?le(o):re()),C.Ad.preload()}),[o,re,le,Z]),(0,a.useEffect)((()=>{p&&K&&K.title!==p&&w.setFieldsValue({...K,title:p})}),[K,p,w]),(0,a.useEffect)((()=>{if((0,v.cr)(v.TT.TaggingSystem))try{(0,X.$3)({objectType:X.g.DASHBOARD,objectId:l,includeTypes:!1},(e=>G(e)),(e=>{t(`Error fetching tags: ${e.text}`)}))}catch(e){te(e)}}),[l]),(0,$.tZ)(y.default,{show:Z,onHide:m,title:(0,g.t)("Dashboard properties"),footer:(0,$.BX)($.HY,{children:[(0,$.tZ)(d.Z,{htmlType:"button",buttonSize:"small",onClick:m,cta:!0,children:(0,g.t)("Cancel")}),(0,$.tZ)(d.Z,{onClick:w.submit,buttonSize:"small",buttonStyle:"primary",className:"m-r-5",cta:!0,disabled:null==K?void 0:K.isManagedExternally,tooltip:null!=K&&K.isManagedExternally?(0,g.t)("This dashboard is managed externally, and can't be edited in Superset"):"",children:W})]}),responsive:!0,children:(0,$.BX)(h.qz,{form:w,onFinish:()=>{var i,r,a,n;const{title:s,slug:o,certifiedBy:d,certificationDetails:h}=w.getFieldsValue();let p,u=q,f=A;try{if(!f.startsWith("{")||!f.endsWith("}"))throw new Error;p=JSON.parse(f)}catch(e){return void t((0,g.t)("JSON metadata is invalid!"))}const b={...p},x=(0,O.UY)(null==(i=p)?void 0:i.color_namespace);u=(null==(r=p)?void 0:r.color_scheme)||q,null!=(a=p)&&a.shared_label_colors&&delete p.shared_label_colors,null!=(n=p)&&n.color_scheme_domain&&delete p.color_scheme_domain,(0,O.$C)(b,!0),f=c()(p),ce(u,{updateMetadata:!1});const y={},C={};(0,v.cr)(v.TT.DashboardRbac)&&(y.roles=H,C.roles=(H||[]).map((e=>e.id))),(0,v.cr)(v.TT.TaggingSystem)&&(C.tags=Y.map((e=>e.id)));const Z={id:l,title:s,slug:o,jsonMetadata:f,owners:D,colorScheme:u,colorNamespace:x,certifiedBy:d,certificationDetails:h,...y};k?(S(Z),m(),e((0,g.t)("Dashboard properties updated"))):F.Z.put({endpoint:`/api/v1/dashboard/${l}`,headers:{"Content-Type":"application/json"},body:JSON.stringify({dashboard_title:s,slug:o||null,json_metadata:f||null,owners:(D||[]).map((e=>e.id)),certified_by:d||null,certification_details:d&&h?h:null,...C})}).then((()=>{S(Z),m(),e((0,g.t)("The dashboard has been saved"))}),te)},layout:"vertical",initialValues:K,children:[(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{xs:24,md:24,children:(0,$.tZ)("h3",{children:(0,g.t)("Basic information")})})}),(0,$.BX)(h.X2,{gutter:16,children:[(0,$.tZ)(h.JX,{xs:24,md:12,children:(0,$.tZ)(s.xJ,{label:(0,g.t)("Name"),name:"title",children:(0,$.tZ)(n.II,{type:"text",disabled:N})})}),(0,$.BX)(h.JX,{xs:24,md:12,children:[(0,$.tZ)(E,{label:(0,g.t)("URL slug"),name:"slug",children:(0,$.tZ)(n.II,{type:"text",disabled:N})}),(0,$.tZ)("p",{className:"help-block",children:(0,g.t)("A readable URL for your dashboard")})]})]}),(0,v.cr)(v.TT.DashboardRbac)?(()=>{const e=ae(),t=!!Object.keys((null==e?void 0:e.label_colors)||{}).length;return(0,$.BX)($.HY,{children:[(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{xs:24,md:24,children:(0,$.tZ)("h3",{style:{marginTop:"1em"},children:(0,g.t)("Access")})})}),(0,$.BX)(h.X2,{gutter:16,children:[(0,$.BX)(h.JX,{xs:24,md:12,children:[(0,$.tZ)(E,{label:(0,g.t)("Owners"),children:(0,$.tZ)(h.qb,{allowClear:!0,allowNewOptions:!0,ariaLabel:(0,g.t)("Owners"),disabled:N,mode:"multiple",onChange:ne,options:(e,t,i)=>ie("owners",e,t,i),value:oe()})}),(0,$.tZ)("p",{className:"help-block",children:(0,g.t)("Owners is a list of users who can alter the dashboard. Searchable by name or username.")})]}),(0,$.BX)(h.JX,{xs:24,md:12,children:[(0,$.tZ)(E,{label:(0,g.t)("Roles"),children:(0,$.tZ)(h.qb,{allowClear:!0,ariaLabel:(0,g.t)("Roles"),disabled:N,mode:"multiple",onChange:se,options:(e,t,i)=>ie("roles",e,t,i),value:(H||[]).map((e=>({value:e.id,label:`${e.name}`})))})}),(0,$.tZ)("p",{className:"help-block",children:(0,g.t)("Roles is a list which defines access to the dashboard. Granting a role access to a dashboard will bypass dataset level checks. If no roles are defined, regular access permissions apply.")})]})]}),(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{xs:24,md:12,children:(0,$.tZ)(I,{hasCustomLabelsColor:t,onChange:ce,colorScheme:q,labelMargin:4})})})]})})():(()=>{const e=ae(),t=!!Object.keys((null==e?void 0:e.label_colors)||{}).length;return(0,$.BX)(h.X2,{gutter:16,children:[(0,$.BX)(h.JX,{xs:24,md:12,children:[(0,$.tZ)("h3",{style:{marginTop:"1em"},children:(0,g.t)("Access")}),(0,$.tZ)(E,{label:(0,g.t)("Owners"),children:(0,$.tZ)(h.qb,{allowClear:!0,ariaLabel:(0,g.t)("Owners"),disabled:N,mode:"multiple",onChange:ne,options:(e,t,i)=>ie("owners",e,t,i),value:oe()})}),(0,$.tZ)("p",{className:"help-block",children:(0,g.t)("Owners is a list of users who can alter the dashboard. Searchable by name or username.")})]}),(0,$.BX)(h.JX,{xs:24,md:12,children:[(0,$.tZ)("h3",{style:{marginTop:"1em"},children:(0,g.t)("Colors")}),(0,$.tZ)(I,{hasCustomLabelsColor:t,onChange:ce,colorScheme:q,labelMargin:4})]})]})})(),(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{xs:24,md:24,children:(0,$.tZ)("h3",{children:(0,g.t)("Certification")})})}),(0,$.BX)(h.X2,{gutter:16,children:[(0,$.BX)(h.JX,{xs:24,md:12,children:[(0,$.tZ)(E,{label:(0,g.t)("Certified by"),name:"certifiedBy",children:(0,$.tZ)(n.II,{type:"text",disabled:N})}),(0,$.tZ)("p",{className:"help-block",children:(0,g.t)("Person or group that has certified this dashboard.")})]}),(0,$.BX)(h.JX,{xs:24,md:12,children:[(0,$.tZ)(E,{label:(0,g.t)("Certification details"),name:"certificationDetails",children:(0,$.tZ)(n.II,{type:"text",disabled:N})}),(0,$.tZ)("p",{className:"help-block",children:(0,g.t)("Any additional detail to show in the certification tooltip.")})]})]}),(0,v.cr)(v.TT.TaggingSystem)?(0,$.tZ)(h.X2,{gutter:16,children:(0,$.tZ)(h.JX,{xs:24,md:12,children:(0,$.tZ)("h3",{css:B,children:(0,g.t)("Tags")})})}):null,(0,v.cr)(v.TT.TaggingSystem)?(0,$.tZ)(h.X2,{gutter:16,children:(0,$.BX)(h.JX,{xs:24,md:12,children:[(0,$.tZ)(E,{children:(0,$.tZ)(h.qb,{ariaLabel:"Tags",mode:"multiple",value:ee,options:_.m,onChange:e=>{const t=(0,x.Z)(e).map((e=>({id:e.value,name:e.label})));G(t)},allowClear:!0})}),(0,$.tZ)("p",{className:"help-block",children:(0,g.t)("A list of tags that have been applied to this chart.")})]})}):null,(0,$.tZ)(h.X2,{children:(0,$.BX)(h.JX,{xs:24,md:24,children:[(0,$.tZ)("h3",{style:{marginTop:"1em"},children:(0,$.BX)(d.Z,{buttonStyle:"link",onClick:()=>j(!R),children:[(0,$.tZ)("i",{className:"fa fa-angle-"+(R?"down":"right"),style:{minWidth:"1em"}}),(0,g.t)("Advanced")]})}),R&&(0,$.BX)($.HY,{children:[(0,$.tZ)(E,{label:(0,g.t)("JSON metadata"),children:(0,$.tZ)(M,{showLoadingForImport:!0,name:"json_metadata",value:A,onChange:J,tabSize:2,width:"100%",height:"200px",wrapEnabled:!0})}),(0,$.BX)("p",{className:"help-block",children:[(0,g.t)("This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter specific parameters."),k&&(0,$.BX)($.HY,{children:[" ",(0,g.t)('Please DO NOT overwrite the "filter_scopes" key.')," ",(0,$.tZ)(U.Z,{triggerNode:(0,$.tZ)("span",{className:"alert-link",children:(0,g.t)('Use "%(menuName)s" menu instead.',{menuName:(0,g.t)("Set filter mapping")})})})]})]})]})]})})]})})}))},87999:(e,t,i)=>{i.d(t,{Z:()=>fe});var l=i(67294),r=i(51995),a=i(1304),n=i(28216),s=i(14890),o=i(81395),c=i(9467),d=i(45697),h=i.n(d),p=i(93967),u=i.n(p),m=i(35932),g=i(11965),f=i(61988),b=i(41609),F=i.n(b),x=i(80621),v=i(81255);const y=[v.gn,v.U0];function C({currentNode:e={},components:t={},filterFields:i=[],selectedChartId:l}){if(!e)return null;const{type:r}=e;if(v.dW===r&&e&&e.meta&&e.meta.chartId)return{value:e.meta.chartId,label:e.meta.sliceName||`${r} ${e.meta.chartId}`,type:r,showCheckbox:l!==e.meta.chartId,children:[]};let a=[];if(e.children&&e.children.length&&e.children.forEach((e=>{const r=C({currentNode:t[e],components:t,filterFields:i,selectedChartId:l}),n=t[e].type;y.includes(n)?a.push(r):a=a.concat(r)})),y.includes(r)){let t=null;return t=r===v.U0?(0,f.t)("All charts"):e.meta&&e.meta.text?e.meta.text:`${r} ${e.id}`,{value:e.id,label:t,type:r,children:a}}return a}function k({components:e={},filterFields:t=[],selectedChartId:i}){return F()(e)?[]:[{...C({currentNode:e[x._4],components:e,filterFields:t,selectedChartId:i})}]}function S(e=[],t=-1){const i=[],l=(e,r)=>{e&&e.children&&(-1===t||r<t)&&(i.push(e.value),e.children.forEach((e=>l(e,r+1))))};return e.length>0&&e.forEach((e=>{l(e,0)})),i}var Z=i(9679);function $({activeFilterField:e,checkedFilterFields:t}){return(0,Z.o)(e?[e]:t)}var w=i(20194);function N({activeFilterField:e,checkedFilterFields:t}){if(e)return(0,w._)(e).chartId;if(t.length){const{chartId:e}=(0,w._)(t[0]);return t.some((t=>(0,w._)(t).chartId!==e))?null:e}return null}function I({checkedFilterFields:e=[],activeFilterField:t,filterScopeMap:i={},layout:l={}}){const r=$({checkedFilterFields:e,activeFilterField:t}),a=t?[t]:e,n=k({components:l,filterFields:a,selectedChartId:N({checkedFilterFields:e,activeFilterField:t})}),s=new Set;a.forEach((e=>{(i[e].checked||[]).forEach((t=>{s.add(`${t}:${e}`)}))}));const o=[...s],c=i[r]?i[r].expanded:S(n,1);return{[r]:{nodes:n,nodesFiltered:[...n],checked:o,expanded:c}}}var U=i(94654),T=i.n(U),X=i(83927),_=i.n(X),O=i(58809),E=i.n(O),M=i(8816),B=i.n(M);function R({tabScopes:e,parentNodeValue:t,forceAggregate:i=!1,hasChartSiblings:l=!1,tabChildren:r=[],immuneChartSiblings:a=[]}){if(i||!l&&Object.entries(e).every((([e,{scope:t}])=>t&&t.length&&e===t[0]))){const i=function({tabs:e=[],tabsInScope:t=[]}){const i=[];return e.forEach((({value:e,children:l})=>{l&&!t.includes(e)&&l.forEach((({value:e,children:l})=>{l&&!t.includes(e)&&i.push(...l.filter((({type:e})=>e===v.dW)))}))})),i.map((({value:e})=>e))}({tabs:r,tabsInScope:T()(e,(({scope:e})=>e))}),l=T()(Object.values(e),(({immune:e})=>e));return{scope:[t],immune:[...new Set([...i,...l])]}}const n=Object.values(e).filter((({scope:e})=>e&&e.length));return{scope:T()(n,(({scope:e})=>e)),immune:n.length?T()(n,(({immune:e})=>e)):T()(Object.values(e),(({immune:e})=>e)).concat(a)}}function j({currentNode:e={},filterId:t,checkedChartIds:i=[]}){if(!e)return{};const{value:l,children:r}=e,a=r.filter((({type:e})=>e===v.dW)),n=r.filter((({type:e})=>e===v.gn)),s=a.filter((({value:e})=>t!==e&&!i.includes(e))).map((({value:e})=>e)),o=B()(E()((e=>e.value)),_()((e=>j({currentNode:e,filterId:t,checkedChartIds:i}))))(n);if(!F()(a)&&a.some((({value:e})=>i.includes(e)))){if(F()(n))return{scope:[l],immune:s};const{scope:e,immune:t}=R({tabScopes:o,parentNodeValue:l,forceAggregate:!0,tabChildren:n});return{scope:e,immune:s.concat(t)}}return n.length?R({tabScopes:o,parentNodeValue:l,hasChartSiblings:!F()(a),tabChildren:n,immuneChartSiblings:s}):{scope:[],immune:s}}function q({filterKey:e,nodes:t=[],checkedChartIds:i=[]}){if(t.length){const{chartId:l}=(0,w._)(e);return j({currentNode:t[0],filterId:l,checkedChartIds:i})}return{}}var L=i(43399),A=i(2275),J=i(28388),K=i.n(J),z=i(13322),D=i(35944);const P=(0,r.iK)(z.Z.BarChartOutlined)`
  ${({theme:e})=>`\n    position: relative;\n    top: ${e.gridUnit-1}px;\n    color: ${e.colors.primary.base};\n    margin-right: ${2*e.gridUnit}px;\n  `}
`;function H({currentNode:e={},selectedChartId:t}){if(!e)return null;const{label:i,value:l,type:r,children:a}=e;if(a&&a.length){const n=a.map((e=>H({currentNode:e,selectedChartId:t})));return{...e,label:(0,D.BX)("span",{className:u()(`filter-scope-type ${r.toLowerCase()}`,{"selected-filter":t===l}),children:[r===v.dW&&(0,D.tZ)(P,{}),i]}),children:n}}return{...e,label:(0,D.tZ)("span",{className:u()(`filter-scope-type ${r.toLowerCase()}`,{"selected-filter":t===l}),children:i})}}function V({nodes:e,selectedChartId:t}){return e?e.map((e=>H({currentNode:e,selectedChartId:t}))):[]}var W=i(13842);const Y={check:(0,D.tZ)(W.lU,{}),uncheck:(0,D.tZ)(W.zq,{}),halfCheck:(0,D.tZ)(W.dc,{}),expandClose:(0,D.tZ)("span",{className:"rct-icon rct-icon-expand-close"}),expandOpen:(0,D.tZ)("span",{className:"rct-icon rct-icon-expand-open"}),expandAll:(0,D.tZ)("span",{className:"rct-icon rct-icon-expand-all",children:(0,f.t)("Expand all")}),collapseAll:(0,D.tZ)("span",{className:"rct-icon rct-icon-collapse-all",children:(0,f.t)("Collapse all")}),parentClose:(0,D.tZ)("span",{className:"rct-icon rct-icon-parent-close"}),parentOpen:(0,D.tZ)("span",{className:"rct-icon rct-icon-parent-open"}),leaf:(0,D.tZ)("span",{className:"rct-icon rct-icon-leaf"})},G={nodes:h().arrayOf(A.ck).isRequired,checked:h().arrayOf(h().oneOfType([h().number,h().string])).isRequired,expanded:h().arrayOf(h().oneOfType([h().number,h().string])).isRequired,onCheck:h().func.isRequired,onExpand:h().func.isRequired,selectedChartId:h().number},Q=()=>{};function ee({nodes:e=[],checked:t=[],expanded:i=[],onCheck:l,onExpand:r,selectedChartId:a}){return(0,D.tZ)(K(),{showExpandAll:!0,expandOnClick:!0,showNodeIcon:!1,nodes:V({nodes:e,selectedChartId:a}),checked:t,expanded:i,onCheck:l,onExpand:r,onClick:Q,icons:Y})}ee.propTypes=G,ee.defaultProps={selectedChartId:null};var te=i(49238);const ie={label:h().string.isRequired,isSelected:h().bool.isRequired};function le({label:e,isSelected:t}){return(0,D.tZ)("span",{className:u()("filter-field-item filter-container",{"is-selected":t}),children:(0,D.tZ)(te.lX,{htmlFor:e,children:e})})}function re({nodes:e,activeKey:t}){if(!e)return[];const i=e[0],l=i.children.map((e=>({...e,children:e.children.map((e=>{const{label:i,value:l}=e;return{...e,label:(0,D.tZ)(le,{isSelected:l===t,label:i})}}))})));return[{...i,label:(0,D.tZ)("span",{className:"root",children:i.label}),children:l}]}le.propTypes=ie;const ae={activeKey:h().string,nodes:h().arrayOf(A.ck).isRequired,checked:h().arrayOf(h().oneOfType([h().number,h().string])).isRequired,expanded:h().arrayOf(h().oneOfType([h().number,h().string])).isRequired,onCheck:h().func.isRequired,onExpand:h().func.isRequired,onClick:h().func.isRequired};function ne({activeKey:e,nodes:t=[],checked:i=[],expanded:l=[],onClick:r,onCheck:a,onExpand:n}){return(0,D.tZ)(K(),{showExpandAll:!0,showNodeIcon:!1,expandOnClick:!0,nodes:re({nodes:t,activeKey:e}),checked:i,expanded:l,onClick:r,onCheck:a,onExpand:n,icons:Y})}ne.propTypes=ae,ne.defaultProps={activeKey:null};const se={dashboardFilters:h().objectOf(A.Er).isRequired,layout:h().object.isRequired,updateDashboardFiltersScope:h().func.isRequired,setUnsavedChanges:h().func.isRequired,onCloseModal:h().func.isRequired},oe=r.iK.div`
  ${({theme:e})=>g.iv`
    display: flex;
    flex-direction: column;
    height: 80%;
    margin-right: ${-6*e.gridUnit}px;
    font-size: ${e.typography.sizes.m}px;

    & .nav.nav-tabs {
      border: none;
    }

    & .filter-scope-body {
      flex: 1;
      max-height: calc(100% - ${32*e.gridUnit}px);

      .filter-field-pane,
      .filter-scope-pane {
        overflow-y: auto;
      }
    }

    & .warning-message {
      padding: ${6*e.gridUnit}px;
    }
  `}
`,ce=r.iK.div`
  ${({theme:e})=>g.iv`
    &.filter-scope-body {
      flex: 1;
      max-height: calc(100% - ${32*e.gridUnit}px);

      .filter-field-pane,
      .filter-scope-pane {
        overflow-y: auto;
      }
    }
  `}
`,de=r.iK.div`
  ${({theme:e})=>g.iv`
    height: ${16*e.gridUnit}px;
    border-bottom: 1px solid ${e.colors.grayscale.light2};
    padding-left: ${6*e.gridUnit}px;
    margin-left: ${-6*e.gridUnit}px;

    h4 {
      margin-top: 0;
    }

    .selected-fields {
      margin: ${3*e.gridUnit}px 0 ${4*e.gridUnit}px;
      visibility: hidden;

      &.multi-edit-mode {
        visibility: visible;
      }

      .selected-scopes {
        padding-left: ${e.gridUnit}px;
      }
    }
  `}
`,he=r.iK.div`
  ${({theme:e})=>g.iv`
    &.filters-scope-selector {
      display: flex;
      flex-direction: row;
      position: relative;
      height: 100%;

      a,
      a:active,
      a:hover {
        color: inherit;
        text-decoration: none;
      }

      .react-checkbox-tree .rct-icon.rct-icon-expand-all,
      .react-checkbox-tree .rct-icon.rct-icon-collapse-all {
        font-family: ${e.typography.families.sansSerif};
        font-size: ${e.typography.sizes.m}px;
        color: ${e.colors.primary.base};

        &::before {
          content: '';
        }

        &:hover {
          text-decoration: underline;
        }

        &:focus {
          outline: none;
        }
      }

      .filter-field-pane {
        position: relative;
        width: 40%;
        padding: ${4*e.gridUnit}px;
        padding-left: 0;
        border-right: 1px solid ${e.colors.grayscale.light2};

        .filter-container label {
          font-weight: ${e.typography.weights.normal};
          margin: 0 0 0 ${4*e.gridUnit}px;
          word-break: break-all;
        }

        .filter-field-item {
          height: ${9*e.gridUnit}px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 ${6*e.gridUnit}px;
          margin-left: ${-6*e.gridUnit}px;

          &.is-selected {
            border: 1px solid ${e.colors.text.label};
            border-radius: ${e.borderRadius}px;
            background-color: ${e.colors.grayscale.light4};
            margin-left: ${-6*e.gridUnit}px;
          }
        }

        .react-checkbox-tree {
          .rct-title .root {
            font-weight: ${e.typography.weights.bold};
          }

          .rct-text {
            height: ${10*e.gridUnit}px;
          }
        }
      }

      .filter-scope-pane {
        position: relative;
        flex: 1;
        padding: ${4*e.gridUnit}px;
        padding-right: ${6*e.gridUnit}px;
      }

      .react-checkbox-tree {
        flex-direction: column;
        color: ${e.colors.grayscale.dark1};
        font-size: ${e.typography.sizes.m}px;

        .filter-scope-type {
          padding: ${2*e.gridUnit}px 0;
          display: flex;
          align-items: center;

          &.chart {
            font-weight: ${e.typography.weights.normal};
          }

          &.selected-filter {
            padding-left: ${7*e.gridUnit}px;
            position: relative;
            color: ${e.colors.text.label};

            &::before {
              content: ' ';
              position: absolute;
              left: 0;
              top: 50%;
              width: ${4*e.gridUnit}px;
              height: ${4*e.gridUnit}px;
              border-radius: ${e.borderRadius}px;
              margin-top: ${-2*e.gridUnit}px;
              box-shadow: inset 0 0 0 2px ${e.colors.grayscale.light2};
              background: ${e.colors.grayscale.light3};
            }
          }

          &.root {
            font-weight: ${e.typography.weights.bold};
          }
        }

        .rct-checkbox {
          svg {
            position: relative;
            top: 3px;
            width: ${4.5*e.gridUnit}px;
          }
        }

        .rct-node-leaf {
          .rct-bare-label {
            &::before {
              padding-left: ${e.gridUnit}px;
            }
          }
        }

        .rct-options {
          text-align: left;
          margin-left: 0;
          margin-bottom: ${2*e.gridUnit}px;
        }

        .rct-text {
          margin: 0;
          display: flex;
        }

        .rct-title {
          display: block;
        }

        // disable style from react-checkbox-trees.css
        .rct-node-clickable:hover,
        .rct-node-clickable:focus,
        label:hover,
        label:active {
          background: none !important;
        }
      }

      .multi-edit-mode {
        .filter-field-item {
          padding: 0 ${4*e.gridUnit}px 0 ${12*e.gridUnit}px;
          margin-left: ${-12*e.gridUnit}px;

          &.is-selected {
            margin-left: ${-13*e.gridUnit}px;
          }
        }
      }

      .scope-search {
        position: absolute;
        right: ${4*e.gridUnit}px;
        top: ${4*e.gridUnit}px;
        border-radius: ${e.borderRadius}px;
        border: 1px solid ${e.colors.grayscale.light2};
        padding: ${e.gridUnit}px ${2*e.gridUnit}px;
        font-size: ${e.typography.sizes.m}px;
        outline: none;

        &:focus {
          border: 1px solid ${e.colors.primary.base};
        }
      }
    }
  `}
`,pe=r.iK.div`
  ${({theme:e})=>`\n    height: ${16*e.gridUnit}px;\n\n    border-top: ${e.gridUnit/4}px solid ${e.colors.primary.light3};\n    padding: ${6*e.gridUnit}px;\n    margin: 0 0 0 ${6*-e.gridUnit}px;\n    text-align: right;\n\n    .btn {\n      margin-right: ${4*e.gridUnit}px;\n\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  `}
`;class ue extends l.PureComponent{constructor(e){super(e);const{dashboardFilters:t,layout:i}=e;if(Object.keys(t).length>0){const e=function({dashboardFilters:e={}}){const t=Object.values(e).map((e=>{const{chartId:t,filterName:i,columns:l,labels:r}=e,a=Object.keys(l).map((e=>({value:(0,w.w)({chartId:t,column:e}),label:r[e]||e})));return{value:t,label:i,children:a,showCheckbox:!0}}));return[{value:x.dU,type:v.U0,label:(0,f.t)("All filters"),children:t}]}({dashboardFilters:t}),l=e[0].children;this.allfilterFields=[],l.forEach((({children:e})=>{e.forEach((e=>{this.allfilterFields.push(e.value)}))})),this.defaultFilterKey=l[0].children[0].value;const r=Object.values(t).reduce(((e,{chartId:l,columns:r})=>({...e,...Object.keys(r).reduce(((e,r)=>{const a=(0,w.w)({chartId:l,column:r}),n=k({components:i,filterFields:[a],selectedChartId:l}),s=S(n,1),o=((0,L.Q1)({filterScope:t[l].scopes[r]})||[]).filter((e=>e!==l));return{...e,[a]:{nodes:n,nodesFiltered:[...n],checked:o,expanded:s}}}),{})})),{}),{chartId:a}=(0,w._)(this.defaultFilterKey),n=[],s=this.defaultFilterKey,o=[x.dU].concat(a),c=I({checkedFilterFields:n,activeFilterField:s,filterScopeMap:r,layout:i});this.state={showSelector:!0,activeFilterField:s,searchText:"",filterScopeMap:{...r,...c},filterFieldNodes:e,checkedFilterFields:n,expandedFilterIds:o}}else this.state={showSelector:!1};this.filterNodes=this.filterNodes.bind(this),this.onChangeFilterField=this.onChangeFilterField.bind(this),this.onCheckFilterScope=this.onCheckFilterScope.bind(this),this.onExpandFilterScope=this.onExpandFilterScope.bind(this),this.onSearchInputChange=this.onSearchInputChange.bind(this),this.onCheckFilterField=this.onCheckFilterField.bind(this),this.onExpandFilterField=this.onExpandFilterField.bind(this),this.onClose=this.onClose.bind(this),this.onSave=this.onSave.bind(this)}onCheckFilterScope(e=[]){const{activeFilterField:t,filterScopeMap:i,checkedFilterFields:l}=this.state,r=$({activeFilterField:t,checkedFilterFields:l}),a=t?[t]:l,n={...i[r],checked:e},s=function({checked:e=[],filterFields:t=[],filterScopeMap:i={}}){const l=e.reduce(((e,t)=>{const[i,l]=t.split(":");return{...e,[l]:(e[l]||[]).concat(parseInt(i,10))}}),{});return t.reduce(((e,t)=>({...e,[t]:{...i[t],checked:l[t]||[]}})),{})}({checked:e,filterFields:a,filterScopeMap:i});this.setState((()=>({filterScopeMap:{...i,...s,[r]:n}})))}onExpandFilterScope(e=[]){const{activeFilterField:t,checkedFilterFields:i,filterScopeMap:l}=this.state,r=$({activeFilterField:t,checkedFilterFields:i}),a={...l[r],expanded:e};this.setState((()=>({filterScopeMap:{...l,[r]:a}})))}onCheckFilterField(e=[]){const{layout:t}=this.props,{filterScopeMap:i}=this.state,l=I({checkedFilterFields:e,activeFilterField:null,filterScopeMap:i,layout:t});this.setState((()=>({activeFilterField:null,checkedFilterFields:e,filterScopeMap:{...i,...l}})))}onExpandFilterField(e=[]){this.setState((()=>({expandedFilterIds:e})))}onChangeFilterField(e={}){const{layout:t}=this.props,i=e.value,{activeFilterField:l,checkedFilterFields:r,filterScopeMap:a}=this.state;if(i===l){const e=I({checkedFilterFields:r,activeFilterField:null,filterScopeMap:a,layout:t});this.setState({activeFilterField:null,filterScopeMap:{...a,...e}})}else if(this.allfilterFields.includes(i)){const e=I({checkedFilterFields:r,activeFilterField:i,filterScopeMap:a,layout:t});this.setState({activeFilterField:i,filterScopeMap:{...a,...e}})}}onSearchInputChange(e){this.setState({searchText:e.target.value},this.filterTree)}onClose(){this.props.onCloseModal()}onSave(){const{filterScopeMap:e}=this.state,t=this.allfilterFields.reduce(((t,i)=>{const{nodes:l}=e[i];return{...t,[i]:q({filterKey:i,nodes:l,checkedChartIds:e[i].checked})}}),{});this.props.updateDashboardFiltersScope(t),this.props.setUnsavedChanges(!0),this.props.onCloseModal()}filterTree(){if(this.state.searchText){const e=e=>{const{activeFilterField:t,checkedFilterFields:i,filterScopeMap:l}=e,r=$({activeFilterField:t,checkedFilterFields:i}),a=l[r].nodes.reduce(this.filterNodes,[]),n=S([...a]),s={...l[r],nodesFiltered:a,expanded:n};return{filterScopeMap:{...l,[r]:s}}};this.setState(e)}else this.setState((e=>{const{activeFilterField:t,checkedFilterFields:i,filterScopeMap:l}=e,r=$({activeFilterField:t,checkedFilterFields:i}),a={...l[r],nodesFiltered:l[r].nodes};return{filterScopeMap:{...l,[r]:a}}}))}filterNodes(e=[],t={}){const{searchText:i}=this.state,l=(t.children||[]).reduce(this.filterNodes,[]);return(t.label.toLocaleLowerCase().indexOf(i.toLocaleLowerCase())>-1||l.length)&&e.push({...t,children:l}),e}renderFilterFieldList(){const{activeFilterField:e,filterFieldNodes:t,checkedFilterFields:i,expandedFilterIds:l}=this.state;return(0,D.tZ)(ne,{activeKey:e,nodes:t,checked:i,expanded:l,onClick:this.onChangeFilterField,onCheck:this.onCheckFilterField,onExpand:this.onExpandFilterField})}renderFilterScopeTree(){const{filterScopeMap:e,activeFilterField:t,checkedFilterFields:i,searchText:l}=this.state,r=$({activeFilterField:t,checkedFilterFields:i}),a=N({activeFilterField:t,checkedFilterFields:i});return(0,D.BX)(D.HY,{children:[(0,D.tZ)("input",{className:"filter-text scope-search multi-edit-mode",placeholder:(0,f.t)("Search..."),type:"text",value:l,onChange:this.onSearchInputChange}),(0,D.tZ)(ee,{nodes:e[r].nodesFiltered,checked:e[r].checked,expanded:e[r].expanded,onCheck:this.onCheckFilterScope,onExpand:this.onExpandFilterScope,selectedChartId:a})]})}renderEditingFiltersName(){const{dashboardFilters:e}=this.props,{activeFilterField:t,checkedFilterFields:i}=this.state,l=[].concat(t||i).map((t=>{const{chartId:i,column:l}=(0,w._)(t);return e[i].labels[l]||l}));return(0,D.BX)("div",{className:"selected-fields multi-edit-mode",children:[0===l.length&&(0,f.t)("No filter is selected."),1===l.length&&(0,f.t)("Editing 1 filter:"),l.length>1&&(0,f.t)("Batch editing %d filters:",l.length),(0,D.tZ)("span",{className:"selected-scopes",children:l.join(", ")})]})}render(){const{showSelector:e}=this.state;return(0,D.BX)(oe,{children:[(0,D.BX)(de,{children:[(0,D.tZ)("h4",{children:(0,f.t)("Configure filter scopes")}),e&&this.renderEditingFiltersName()]}),(0,D.tZ)(ce,{className:"filter-scope-body",children:e?(0,D.BX)(he,{className:"filters-scope-selector",children:[(0,D.tZ)("div",{className:u()("filter-field-pane multi-edit-mode"),children:this.renderFilterFieldList()}),(0,D.tZ)("div",{className:"filter-scope-pane multi-edit-mode",children:this.renderFilterScopeTree()})]}):(0,D.tZ)("div",{className:"warning-message",children:(0,f.t)("There are no filters in this dashboard.")})}),(0,D.BX)(pe,{children:[(0,D.tZ)(m.Z,{buttonSize:"small",onClick:this.onClose,children:(0,f.t)("Close")}),e&&(0,D.tZ)(m.Z,{buttonSize:"small",buttonStyle:"primary",onClick:this.onSave,children:(0,f.t)("Save")})]})]})}}ue.propTypes=se;const me=(0,n.$j)((function({dashboardLayout:e,dashboardFilters:t}){return{dashboardFilters:t,layout:e.present}}),(function(e){return(0,s.DE)({updateDashboardFiltersScope:o.l6,setUnsavedChanges:c.if},e)}))(ue),ge=r.iK.div((({theme:{gridUnit:e}})=>({padding:2*e,paddingBottom:3*e})));class fe extends l.PureComponent{constructor(e){super(e),this.modal=void 0,this.modal=(0,l.createRef)(),this.handleCloseModal=this.handleCloseModal.bind(this)}handleCloseModal(){var e,t;null==this||null==(e=this.modal)||null==(t=e.current)||null==t.close||t.close()}render(){const e={onCloseModal:this.handleCloseModal};return(0,D.tZ)(a.Z,{ref:this.modal,triggerNode:this.props.triggerNode,modalBody:(0,D.tZ)(ge,{children:(0,D.tZ)(me,{...e})}),width:"80%"})}}}}]);
//# sourceMappingURL=b2963f669718ccb50e86.chunk.js.map
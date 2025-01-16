"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3284],{13284:(e,t,i)=>{i.d(t,{UB:()=>Z,ZP:()=>q});var r,n=i(67294),a=i(69386),l=i(93967),o=i.n(l),s=i(61988),d=i(51995),c=i(11965),p=i(16355),g=i(4715),m=i(58593),h=i(9875),u=i(37921),b=i(14278),x=i(13322),v=i(1510),y=i(90161),f=i(35944);!function(e){e.AllCharts="ALL_CHARTS",e.Featured="FEATURED",e.Category="CATEGORY",e.Tags="TAGS"}(r||(r={}));const $=["line","big_number","big_number_total","table","pivot_table_v2","echarts_timeseries_line","echarts_area","echarts_timeseries_bar","echarts_timeseries_scatter","pie","mixed_timeseries","dist_bar","area","bar","deck_polygon","time_table","histogram","deck_scatter","deck_hex","time_pivot","deck_arc","heatmap","heatmap_v2","deck_grid","deck_screengrid","treemap_v2","box_plot","sankey","word_cloud","mapbox","kepler","cal_heatmap","rose","bubble","bubble_v2","deck_geojson","horizon","deck_multi","compare","partition","event_flow","deck_path","graph_chart","world_map","paired_ttest","para","country_map"],k=new Set($),Z=1090,U=(0,s.t)("Other"),_=(0,s.t)("All charts"),w=(0,s.t)("Featured"),C=[(0,s.t)("Popular"),(0,s.t)("ECharts"),(0,s.t)("Advanced-Analytics")],z=d.iK.div`
  ${({isSelectedVizMetadata:e})=>`\n    display: grid;\n    grid-template-rows: ${e?"auto minmax(100px, 1fr) minmax(200px, 35%)":"auto minmax(100px, 1fr)"};\n    // em is used here because the sidebar should be sized to fit the longest standard tag\n    grid-template-columns: minmax(14em, auto) 5fr;\n    grid-template-areas:\n      'sidebar search'\n      'sidebar main'\n      'details details';\n    height: 70vh;\n    overflow: auto;\n  `}
`,S=d.iK.h3`
  margin-top: 0;
  margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  font-size: ${({theme:e})=>e.typography.sizes.l}px;
  font-weight: ${({theme:e})=>e.typography.weights.bold};
  line-height: ${({theme:e})=>6*e.gridUnit}px;
`,K=d.iK.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  overflow: auto;

  .ant-collapse .ant-collapse-item {
    .ant-collapse-header {
      font-size: ${({theme:e})=>e.typography.sizes.s}px;
      color: ${({theme:e})=>e.colors.grayscale.base};
      padding-left: ${({theme:e})=>2*e.gridUnit}px;
      padding-bottom: ${({theme:e})=>e.gridUnit}px;
    }
    .ant-collapse-content .ant-collapse-content-box {
      display: flex;
      flex-direction: column;
      padding: 0 ${({theme:e})=>2*e.gridUnit}px;
    }
  }
`,M=d.iK.div`
  grid-area: main;
  overflow-y: auto;
`,A=d.iK.div`
  ${({theme:e})=>`\n    grid-area: search;\n    margin-top: ${3*e.gridUnit}px;\n    margin-bottom: ${e.gridUnit}px;\n    margin-left: ${3*e.gridUnit}px;\n    margin-right: ${3*e.gridUnit}px;\n    .ant-input-affix-wrapper {\n      padding-left: ${2*e.gridUnit}px;\n    }\n  `}
`,E=d.iK.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.colors.grayscale.base};
`,O=d.iK.button`
  ${({theme:e})=>`\n    all: unset; // remove default button styles\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    cursor: pointer;\n    margin: ${e.gridUnit}px 0;\n    padding: 0 ${e.gridUnit}px;\n    border-radius: ${e.borderRadius}px;\n    line-height: 2em;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    position: relative;\n\n    &:focus {\n      outline: initial;\n    }\n\n    &.selected {\n      background-color: ${e.colors.primary.base};\n      color: ${e.colors.primary.light5};\n\n      svg {\n        color: ${e.colors.primary.light5};\n      }\n\n      &:hover {\n        .cancel {\n          visibility: visible;\n        }\n      }\n    }\n\n    & > span[role="img"] {\n      margin-right: ${2*e.gridUnit}px;\n    }\n\n    .cancel {\n      visibility: hidden;\n    }\n  `}
`,T=d.iK.div`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    ${({theme:e})=>24*e.gridUnit}px
  );
  grid-auto-rows: max-content;
  justify-content: space-evenly;
  grid-gap: ${({theme:e})=>2*e.gridUnit}px;
  justify-items: center;
  // for some reason this padding doesn't seem to apply at the bottom of the container. Why is a mystery.
  padding: ${({theme:e})=>2*e.gridUnit}px;
`,F=e=>c.iv`
  grid-area: details;
  border-top: 1px solid ${e.colors.grayscale.light2};
`,B=e=>c.iv`
  padding: ${4*e.gridUnit}px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'viz-name examples-header'
    'viz-tags examples'
    'description examples';
`,N=d.iK.div`
  grid-area: viz-tags;
  width: ${({theme:e})=>120*e.gridUnit}px;
  padding-right: ${({theme:e})=>14*e.gridUnit}px;
  padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
`,j=d.iK.p`
  grid-area: description;
  overflow: auto;
  padding-right: ${({theme:e})=>14*e.gridUnit}px;
  margin: 0;
`,I=d.iK.div`
  grid-area: examples;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;
  gap: ${({theme:e})=>4*e.gridUnit}px;

  img {
    height: 100%;
    border-radius: ${({theme:e})=>e.gridUnit}px;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  }
`,X=e=>c.iv`
  cursor: pointer;
  width: ${24*e.gridUnit}px;
  position: relative;

  img {
    min-width: ${24*e.gridUnit}px;
    min-height: ${24*e.gridUnit}px;
    border: 1px solid ${e.colors.grayscale.light2};
    border-radius: ${e.gridUnit}px;
    transition: border-color ${e.transitionTiming};
  }

  &.selected img {
    border: 2px solid ${e.colors.primary.light2};
  }

  &:hover:not(.selected) img {
    border: 1px solid ${e.colors.grayscale.light1};
  }

  .viztype-label {
    margin-top: ${2*e.gridUnit}px;
    text-align: center;
  }
`,P=d.iK.div`
  ${({theme:e})=>`\n    border: 1px solid ${e.colors.primary.dark1};\n    box-sizing: border-box;\n    border-radius: ${e.gridUnit}px;\n    background: ${e.colors.grayscale.light5};\n    line-height: ${2.5*e.gridUnit}px;\n    color: ${e.colors.primary.dark1};\n    font-size: ${e.typography.sizes.s}px;\n    font-weight: ${e.typography.weights.bold};\n    text-align: center;\n    padding: ${.5*e.gridUnit}px ${e.gridUnit}px;\n    text-transform: uppercase;\n    cursor: pointer;\n\n    div {\n      transform: scale(0.83,0.83);\n    }\n  `}
`,V=d.iK.div`
  position: absolute;
  right: ${({theme:e})=>e.gridUnit}px;
  top: ${({theme:e})=>19*e.gridUnit}px;
`,H=d.iK.div`
  display: inline-block !important;
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
`;function R(e){return k.has(e.key)?$.indexOf(e.key):$.length}const D=({entry:e,selectedViz:t,setSelectedViz:i,onDoubleClick:r})=>{const n=(0,d.Fg)(),{key:a,value:l}=e,o=t===e.key;return(0,f.BX)("div",{role:"button",css:X(n),tabIndex:0,className:o?"selected":"",onClick:()=>i(a),onDoubleClick:r,children:[(0,f.tZ)("img",{alt:l.name,width:"100%",className:"viztype-selector "+(o?"selected":""),src:l.thumbnail}),(0,f.tZ)("div",{className:"viztype-label",children:l.name}),l.label&&(0,f.tZ)(V,{children:(0,f.tZ)(P,{children:(0,f.tZ)("div",{children:(0,s.t)(l.label)})})})]})},L=({vizEntries:e,...t})=>(0,f.tZ)(T,{children:e.map((e=>(0,f.tZ)(D,{...t,entry:e},e.key)))}),G=({selector:e,sectionId:t,icon:i,isSelected:r,onClick:a,className:l})=>{const s=(0,n.useRef)(null);return(0,n.useEffect)((()=>{r&&queueMicrotask((()=>(0,y.Z)(s.current,{behavior:"smooth",scrollMode:"if-needed"})))}),[]),(0,f.BX)(O,{ref:s,name:e,className:o()(l,r&&"selected"),onClick:()=>a(e,t),children:[i,e]},e)},Y=(e,t)=>t===e.category||t===U&&null==e.category||(e.tags||[]).indexOf(t)>-1;function q(e){var t,i;const{selectedViz:l,onChange:o,onDoubleClick:d,className:y}=e,{mountedPluginMetadata:$}=(0,b.gp)(),k=(0,n.useRef)(),[Z,O]=(0,n.useState)(""),[T,X]=(0,n.useState)(!0),V=T&&!!Z,D=l?$[l]:null,q=(0,n.useMemo)((()=>{const t=Object.entries($).map((([e,t])=>({key:e,value:t}))).filter((({key:t})=>!e.denyList.includes(t))).filter((({value:e})=>(0,v.X3)(e.behaviors||[])&&!e.deprecated));return t.sort(((e,t)=>R(e)-R(t))),t}),[$]),W=(0,n.useMemo)((()=>{const e={};return q.forEach((t=>{const i=t.value.category||U;e[i]||(e[i]=[]),e[i].push(t)})),e}),[q]),J=(0,n.useMemo)((()=>Object.keys(W).sort(((e,t)=>e===U?1:t===U?-1:e.localeCompare(t)))),[W]),Q=(0,n.useMemo)((()=>{const e={};return q.forEach((t=>{(t.value.tags||[]).forEach((i=>{e[i]||(e[i]=[]),e[i].push(t)}))})),e}),[q]),ee=(0,n.useMemo)((()=>Object.keys(Q).sort(((e,t)=>e.localeCompare(t))).filter((e=>-1===C.indexOf(e)))),[Q]),te=(0,n.useMemo)((()=>q.sort(((e,t)=>e.key.localeCompare(t.key)))),[q]),[ie,re]=(0,n.useState)((()=>(null==D?void 0:D.category)||w)),[ne,ae]=(0,n.useState)((()=>null!=D&&D.category?r.Category:r.Featured)),le=(0,n.useMemo)((()=>new a.Z(q,{ignoreLocation:!0,threshold:.3,keys:[{name:"value.name",weight:4},{name:"value.tags",weight:2},"value.description"]})),[q]),oe=(0,n.useMemo)((()=>""===Z.trim()?[]:le.search(Z).map((e=>e.item)).sort(((e,t)=>{var i,r;const n=null==(i=e.value)?void 0:i.label,a=null==(r=t.value)?void 0:r.label,l=n&&p.eH[n]?p.eH[n].weight:0;return(a&&p.eH[a]?p.eH[a].weight:0)-l}))),[Z,le]),se=(0,n.useCallback)((()=>{X(!0)}),[]),de=(0,n.useCallback)((e=>O(e.target.value)),[]),ce=(0,n.useCallback)((()=>{X(!1),O(""),k.current.blur()}),[]),pe=(0,n.useCallback)(((e,t)=>{T&&ce(),re(e),ae(t);const i=D&&Y(D,e);e===ie||i||o(null)}),[ce,T,ie,D,o]),ge=(0,n.useMemo)((()=>({[r.Category]:{title:(0,s.t)("Category"),icon:(0,f.tZ)(x.Z.Category,{iconSize:"m"}),selectors:J},[r.Tags]:{title:(0,s.t)("Tags"),icon:(0,f.tZ)(x.Z.Tags,{iconSize:"m"}),selectors:ee}})),[J,ee]);return(0,f.BX)(z,{className:y,isSelectedVizMetadata:Boolean(D),children:[(0,f.BX)(K,{children:[(0,f.tZ)(G,{css:({gridUnit:e})=>c.iv`
              margin: ${2*e}px;
              margin-bottom: 0;
            `,sectionId:r.AllCharts,selector:_,icon:(0,f.tZ)(x.Z.Ballot,{iconSize:"m"}),isSelected:!V&&_===ie&&r.AllCharts===ne,onClick:pe}),(0,f.tZ)(G,{css:({gridUnit:e})=>c.iv`
              margin: ${2*e}px;
              margin-bottom: 0;
            `,sectionId:r.Featured,selector:w,icon:(0,f.tZ)(x.Z.FireOutlined,{iconSize:"m"}),isSelected:!V&&w===ie&&r.Featured===ne,onClick:pe}),(0,f.tZ)(g.Ol,{expandIconPosition:"right",ghost:!0,defaultActiveKey:r.Category,children:Object.keys(ge).map((e=>{const t=ge[e];return(0,f.tZ)(g.Ol.Panel,{header:(0,f.tZ)("span",{className:"header",children:t.title}),children:t.selectors.map((i=>(0,f.tZ)(G,{selector:i,sectionId:e,icon:t.icon,isSelected:!V&&i===ie&&e===ne,onClick:pe},i)))},e)}))})]}),(0,f.tZ)(A,{children:(0,f.tZ)(h.II,{type:"text",ref:k,value:Z,placeholder:(0,s.t)("Search all charts"),onChange:de,onFocus:se,prefix:(0,f.tZ)(E,{children:(0,f.tZ)(x.Z.Search,{iconSize:"m"})}),suffix:(0,f.tZ)(E,{children:Z&&(0,f.tZ)(x.Z.XLarge,{iconSize:"m",onClick:ce})})})}),(0,f.tZ)(M,{children:(0,f.tZ)(L,{vizEntries:V?oe:ie===_&&ne===r.AllCharts?te:ie===w&&ne===r.Featured&&Q[(0,s.t)("Popular")]?Q[(0,s.t)("Popular")]:ne===r.Category&&W[ie]?W[ie]:ne===r.Tags&&Q[ie]?Q[ie]:[],selectedViz:l,setSelectedViz:o,onDoubleClick:d})}),D?(0,f.tZ)("div",{css:e=>[F(e),B(e)],children:(0,f.BX)(f.HY,{children:[(0,f.BX)(S,{css:c.iv`
                grid-area: viz-name;
                position: relative;
              `,children:[null==D?void 0:D.name,(null==D?void 0:D.label)&&(0,f.tZ)(m.u,{id:"viz-badge-tooltip",placement:"top",title:null!=(t=D.labelExplanation)?t:p.t$[D.label],children:(0,f.tZ)(H,{children:(0,f.tZ)(P,{children:(0,f.tZ)("div",{children:(0,s.t)(D.label)})})})})]}),(0,f.tZ)(N,{children:null==D?void 0:D.tags.map((e=>(0,f.tZ)(u.Z,{children:e},e)))}),(0,f.tZ)(j,{children:(null==D?void 0:D.description)||(0,s.t)("No description available.")}),(0,f.tZ)(S,{css:c.iv`
                grid-area: examples-header;
              `,children:(0,s.t)("Examples")}),(0,f.tZ)(I,{children:(null!=D&&null!=(i=D.exampleGallery)&&i.length?D.exampleGallery:[{url:null==D?void 0:D.thumbnail,caption:null==D?void 0:D.name}]).map((e=>(0,f.tZ)("img",{src:e.url,alt:e.caption,title:e.caption},e.url)))})]})}):null]})}}}]);
//# sourceMappingURL=6d1d520ed0fb142f38ea.chunk.js.map
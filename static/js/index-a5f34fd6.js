import{R as i}from"./react-58122654.js";import{j as r,a as w,R,C as I}from"./antd-721179d1.js";import"./rc-util-852b41a6.js";import"./@babel-ee6b9e1a.js";import"./regenerator-runtime-29be5474.js";import"./react-is-00eff3ff.js";import"./react-dom-694a72f5.js";import"./scheduler-b7750976.js";import"./classnames-d3968fd4.js";import"./rc-resize-observer-c4e3495a.js";import"./resize-observer-polyfill-f68479a8.js";import"./rc-field-form-41495d7a.js";import"./async-validator-1193b133.js";import"./rc-trigger-423e0480.js";import"./rc-motion-2d8059f1.js";import"./rc-align-e66aa9dc.js";import"./dom-align-896e8735.js";import"./lodash-646f0c06.js";import"./rc-overflow-38069078.js";import"./rc-menu-4e042477.js";import"./shallowequal-042c08c7.js";import"./@ant-design-53efdd6f.js";import"./json2mq-fba88cf1.js";import"./string-convert-9bd2a9d3.js";import"./@ctrl-c6958c89.js";import"./rc-tooltip-79db1ebe.js";import"./rc-image-7e30c3a1.js";import"./rc-dialog-abd13174.js";import"./memoize-one-99e54574.js";import"./rc-pagination-ca404d5d.js";import"./rc-picker-1d9f87aa.js";import"./rc-notification-bb2cd6d8.js";const B="_tabs_1lzgg_7",D="_isBackground_1lzgg_35",M="_isBackground2_1lzgg_39",S="_title_1lzgg_43";var c={"ProductCenter-box":"_ProductCenter-box_1lzgg_1",tabs:B,"tabs-item":"_tabs-item_1lzgg_12","tabs-item-label":"_tabs-item-label_1lzgg_21","tabs-item-span":"_tabs-item-span_1lzgg_27",isBackground:D,isBackground2:M,title:S,"h1-span":"_h1-span_1lzgg_47","productList-box":"_productList-box_1lzgg_53","productList-item":"_productList-item_1lzgg_58","productCenter-image":"_productCenter-image_1lzgg_66"};const n=[{id:1,label:"ALL",isBackground:1},{id:2,label:"Precision spare parts",isBackground:0},{id:3,label:"Round parts",isBackground:0},{id:4,label:"Stamping&Injection products",isBackground:0},{id:5,label:"Plating parts",isBackground:0},{id:6,label:"Others",isBackground:0}],l=[{id:0,label:"ALL",src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/EDM1.jpg",self.location).href,isBackground:1},{id:1,label:"EDM",src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/EDM2.jpg",self.location).href,isBackground:0,child:[{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/EDM1.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/EDM2.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/EDM3.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/EDM4.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/EDM5.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/EDM6.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/EDM7.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/EDM8.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/EDM9.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/EDM910.jpg",self.location).href}]},{id:2,label:"PG",src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/EDM3.jpg",self.location).href,isBackground:0,child:[{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/PG/PG products1.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/PG/PG products2.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/PG/PG products3.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/PG/PG products4.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/PG/PG products5.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/PG/PG products6.jpg",self.location).href}]},{id:3,label:"GR",src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/EDM4.jpg",self.location).href,isBackground:0,child:[{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/GR/GR1.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/GR/GR2.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/GR/GR3.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/GR/GR4.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/GR/GR5.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/GR/GR6.jpg",self.location).href}]},{id:4,label:"Round punch",src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/EDM5.jpg",self.location).href,isBackground:0,child:[{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/round/round1.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/round/round2.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/round/round3.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/round/round4.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/round/round5.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/round/round6.jpg",self.location).href}]},{id:8,label:"Stamping&Injection products",src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/EDM9.jpg",self.location).href,isBackground:0,child:[{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/SIP/injection1.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/SIP/injection2.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/SIP/injection3.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/SIP/injection4.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/SIP/injection5.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/SIP/injection6.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/SIP/injection7.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/SIP/injection8.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/SIP/stamping1.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/SIP/stamping1.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/SIP/stamping1.jpg",self.location).href}]},{id:6,label:"Plating",src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/EDM7.jpg",self.location).href,isBackground:0,child:[{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/Plating/Plating1.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/Plating/Plating2.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/Plating/Flash chrome.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/Plating/Nickel plating.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/Plating/QPQ.jpg",self.location).href}]},{id:7,label:"Other",src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/EDM8.jpg",self.location).href,isBackground:0,child:[{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/Other/ceramic punch.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/Other/other1.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/Other/other2.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/Other/tungsten steel.jpg",self.location).href},{src:new URL("https://jamcoltd.github.io/webL/src/assets/images/productCenterImages/Other/whole mold.jpg",self.location).href}]}],ds=C=>{const[p,d]=i.useState(n),[h,U]=i.useState([]);i.useEffect(()=>{d(n),console.log(C,"name"),g(l)},[n,l]);const[P,_]=i.useState(),E=(e,t)=>{console.log(t,"click"),n.map((o,s)=>(t===s?o.isBackground=1:o.isBackground=0,o)),console.log(n,e),e.label==="ALL"?g(l):g(l,e.label),_(new Date().getTime()),d(n)},g=(e,t)=>{let o=[];e.forEach(s=>{var u,m,b,f,L,j;t?t==="Precision spare parts"?(s.label==="EDM"||s.label==="GR"||s.label==="PG")&&((m=s==null?void 0:s.child)==null||m.forEach(a=>{o.push(a)})):t==="Round parts"?s.label==="Round punch"&&((b=s==null?void 0:s.child)==null||b.forEach(a=>{o.push(a)})):t==="Stamping&Injection products"?s.label==="Stamping&Injection products"&&((f=s==null?void 0:s.child)==null||f.forEach(a=>{o.push(a)})):t==="Plating parts"?s.label==="Plating"&&((L=s==null?void 0:s.child)==null||L.forEach(a=>{o.push(a)})):s.label==="Other"&&((j=s==null?void 0:s.child)==null||j.forEach(a=>{o.push(a)})):(u=s==null?void 0:s.child)!=null&&u.length&&s.child.forEach(a=>{o.push(a)})}),console.log(o,"list"),U(o)},G=i.useMemo(()=>r("div",{className:c.tabs,children:p.map((e,t)=>r("div",{className:c["tabs-item"],onClick:()=>E(e,t),children:r("div",{className:c["tabs-item-label"],children:r("span",{className:`${c["tabs-item-span"]} ${e.isBackground===1?c.isBackground:null}`,children:e.label},e.isBackground)},e.id)},e.id))}),[P,p]),k=i.useMemo(()=>r("div",{className:c["productList-box"],children:h.map((e,t)=>r("div",{className:c["productList-item"],children:r("img",{className:c["productCenter-image"],src:e.src},t)},t))}),[h]);return w("div",{className:c["ProductCenter-box"],children:[r(R,{children:r(I,{span:24,className:c.title,children:r("span",{className:c["h1-span"],children:"Product Center"})})}),r(R,{children:w(I,{span:24,children:[G,k]})})]})};export{ds as default};

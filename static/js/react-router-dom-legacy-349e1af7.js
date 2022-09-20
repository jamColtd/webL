System.register(["./react-legacy-700da723.js","./history-legacy-1656b0da.js","./react-router-legacy-d508623e.js"],(function(e){"use strict";var t,r,n,a,o,c,l,i;return{setters:[function(e){t=e.r},function(e){r=e.c,n=e.a},function(e){a=e.R,o=e.u,c=e.a,l=e.b,i=e.c}],execute:function(){
/**
       * React Router DOM v6.3.0
       *
       * Copyright (c) Remix Software Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */
function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}e("H",(function(e){let{basename:n,children:o,window:c}=e,l=t.exports.useRef();null==l.current&&(l.current=r({window:c}));let i=l.current,[u,s]=t.exports.useState({action:i.action,location:i.location});return t.exports.useLayoutEffect((()=>i.listen(s)),[i]),t.exports.createElement(a,{basename:n,children:o,location:u.location,navigationType:u.action,navigator:i})}));const s=["onClick","reloadDocument","replace","state","target","to"];e("L",t.exports.forwardRef((function(e,r){let{onClick:a,reloadDocument:f,replace:p=!1,state:y,target:d,to:g}=e,v=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,s),b=o(g),h=function(e,r){let{target:a,replace:o,state:u}=void 0===r?{}:r,s=c(),f=l(),p=i(e);return t.exports.useCallback((t=>{if(!(0!==t.button||a&&"_self"!==a||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t))){t.preventDefault();let r=!!o||n(f)===n(p);s(e,{replace:r,state:u})}}),[f,s,p,o,u,a,e])}(g,{replace:p,state:y,target:d});return t.exports.createElement("a",u({},v,{href:b,onClick:function(e){a&&a(e),e.defaultPrevented||f||h(e)},ref:r,target:d}))})))}}}));

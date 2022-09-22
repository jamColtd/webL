import{c as m,a as ee,d as L,_ as Te,b as ke,j as ye}from"./@babel-ee6b9e1a.js";import{r}from"./react-58122654.js";import{c as Q}from"./classnames-d3968fd4.js";import{d as Ve,n as He,b as Xe,K as We,i as ce,q as qe}from"./rc-util-7e6efee8.js";import{D as Be}from"./rc-dialog-57c0a5fb.js";function Je(f){var e=r.exports.useRef(null),c=r.exports.useState(f),n=m(c,2),g=n[0],u=n[1],a=r.exports.useRef([]),s=function(p){e.current===null&&(a.current=[],e.current=Ve(function(){u(function(P){var h=P;return a.current.forEach(function($){h=ee(ee({},h),$)}),e.current=null,h})})),a.current.push(p)};return r.exports.useEffect(function(){return function(){return e.current&&Ve.cancel(e.current)}},[]),[g,s]}function Fe(f,e,c,n){var g=e+c,u=(c-n)/2;if(c>n){if(e>0)return L({},f,u);if(e<0&&g<n)return L({},f,-u)}else if(e<0||g>n)return L({},f,e<0?u:-u);return{}}function Qe(f,e,c,n){var g=He(),u=g.width,a=g.height,s=null;return f<=u&&e<=a?s={x:0,y:0}:(f>u||e>a)&&(s=ee(ee({},Fe("x",c,f,u)),Fe("y",n,e,a))),s}var er=["visible","onVisibleChange","getContainer","current","countRender"],Ue=r.exports.createContext({previewUrls:new Map,setPreviewUrls:function(){return null},current:null,setCurrent:function(){return null},setShowPreview:function(){return null},setMousePosition:function(){return null},registerImage:function(){return function(){return null}},rootClassName:""}),rr=Ue.Provider,tr=function(e){var c=e.previewPrefixCls,n=c===void 0?"rc-image-preview":c,g=e.children,u=e.icons,a=u===void 0?{}:u,s=e.preview,x=Te(s)==="object"?s:{},p=x.visible,P=p===void 0?void 0:p,h=x.onVisibleChange,$=h===void 0?void 0:h,re=x.getContainer,te=re===void 0?void 0:re,U=x.current,ue=U===void 0?0:U,z=x.countRender,oe=z===void 0?void 0:z,ve=ke(x,er),fe=r.exports.useState(new Map),G=m(fe,2),S=G[0],N=G[1],pe=r.exports.useState(),F=m(pe,2),Y=F[0],_=F[1],de=Xe(!!P,{value:P,onChange:$}),A=m(de,2),d=A[0],v=A[1],E=r.exports.useState(null),y=m(E,2),K=y[0],O=y[1],I=P!==void 0,T=Array.from(S.keys()),M=T[ue],D=new Map(Array.from(S).filter(function(C){var i=m(C,2),w=i[1].canPreview;return!!w}).map(function(C){var i=m(C,2),w=i[0],l=i[1].url;return[w,l]})),ne=function(i,w){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,ae=function(){N(function(X){var Z=new Map(X),j=Z.delete(i);return j?Z:X})};return N(function(R){return new Map(R).set(i,{url:w,canPreview:l})}),ae},ie=function(i){i.stopPropagation(),v(!1),O(null)};return r.exports.useEffect(function(){_(M)},[M]),r.exports.useEffect(function(){!d&&I&&_(M)},[M,I,d]),r.exports.createElement(rr,{value:{isPreviewGroup:!0,previewUrls:D,setPreviewUrls:N,current:Y,setCurrent:_,setShowPreview:v,setMousePosition:O,registerImage:ne}},g,r.exports.createElement(Ze,ye({"aria-hidden":!d,visible:d,prefixCls:n,onClose:ie,mousePosition:K,src:D.get(Y),icons:a,getContainer:te,countRender:oe},ve)))},or=["prefixCls","src","alt","onClose","afterClose","visible","icons","rootClassName","countRender"],Ee=r.exports.useState,Ye=r.exports.useEffect,nr=r.exports.useCallback,Ae=r.exports.useRef,ir=r.exports.useContext,J={x:0,y:0},Ze=function(e){var c,n=e.prefixCls,g=e.src,u=e.alt,a=e.onClose;e.afterClose;var s=e.visible,x=e.icons,p=x===void 0?{}:x,P=e.rootClassName,h=e.countRender,$=ke(e,or),re=p.rotateLeft,te=p.rotateRight,U=p.zoomIn,ue=p.zoomOut,z=p.close,oe=p.left,ve=p.right,fe=Ee(1),G=m(fe,2),S=G[0],N=G[1],pe=Ee(0),F=m(pe,2),Y=F[0],_=F[1],de=Je(J),A=m(de,2),d=A[0],v=A[1],E=Ae(),y=Ae({originX:0,originY:0,deltaX:0,deltaY:0}),K=Ee(!1),O=m(K,2),I=O[0],T=O[1],M=ir(Ue),D=M.previewUrls,ne=M.current,ie=M.isPreviewGroup,C=M.setCurrent,i=D.size,w=Array.from(D.keys()),l=w.indexOf(ne),ae=ie?D.get(ne):g,R=ie&&i>1,X=Ee({wheelDirection:0}),Z=m(X,2),j=Z[0],me=Z[1],se=function(){N(1),_(0),v(J)},be=function(){N(function(t){return t+1}),v(J)},we=function(){S>1&&N(function(t){return t-1}),v(J)},_e=function(){_(function(t){return t+90})},Me=function(){_(function(t){return t-90})},H=function(t){t.preventDefault(),t.stopPropagation(),l>0&&C(w[l-1])},q=function(t){t.preventDefault(),t.stopPropagation(),l<i-1&&C(w[l+1])},ge=Q(L({},"".concat(n,"-moving"),I)),Ie="".concat(n,"-operations-operation"),De="".concat(n,"-operations-icon"),Le=[{icon:z,onClick:a,type:"close"},{icon:U,onClick:be,type:"zoomIn"},{icon:ue,onClick:we,type:"zoomOut",disabled:S===1},{icon:te,onClick:_e,type:"rotateRight"},{icon:re,onClick:Me,type:"rotateLeft"}],Ce=function(){if(s&&I){var t=E.current.offsetWidth*S,k=E.current.offsetHeight*S,W=E.current.getBoundingClientRect(),B=W.left,he=W.top,Se=Y%180!==0;T(!1);var Ne=Qe(Se?k:t,Se?t:k,B,he);Ne&&v(ee({},Ne))}},$e=function(t){t.button===0&&(t.preventDefault(),t.stopPropagation(),y.current.deltaX=t.pageX-d.x,y.current.deltaY=t.pageY-d.y,y.current.originX=d.x,y.current.originY=d.y,T(!0))},Re=function(t){s&&I&&v({x:t.pageX-y.current.deltaX,y:t.pageY-y.current.deltaY})},xe=function(t){if(!!s){t.preventDefault();var k=t.deltaY;me({wheelDirection:k})}},V=nr(function(o){!s||!R||(o.preventDefault(),o.keyCode===We.LEFT?l>0&&C(w[l-1]):o.keyCode===We.RIGHT&&l<i-1&&C(w[l+1]))},[l,i,w,C,R,s]),Pe=function(){s&&(S!==1&&N(1),(d.x!==J.x||d.y!==J.y)&&v(J))};return Ye(function(){var o=j.wheelDirection;o>0?we():o<0&&be()},[j]),Ye(function(){var o,t,k=ce(window,"mouseup",Ce,!1),W=ce(window,"mousemove",Re,!1),B=ce(window,"wheel",xe,{passive:!1}),he=ce(window,"keydown",V,!1);try{window.top!==window.self&&(o=ce(window.top,"mouseup",Ce,!1),t=ce(window.top,"mousemove",Re,!1))}catch(Se){}return function(){k.remove(),W.remove(),B.remove(),he.remove(),o&&o.remove(),t&&t.remove()}},[s,I,V]),r.exports.createElement(Be,ye({transitionName:"zoom",maskTransitionName:"fade",closable:!1,keyboard:!0,prefixCls:n,onClose:a,afterClose:se,visible:s,wrapClassName:ge,rootClassName:P},$),r.exports.createElement("ul",{className:"".concat(n,"-operations")},R&&r.exports.createElement("li",{className:"".concat(n,"-operations-progress")},(c=h==null?void 0:h(l+1,i))!==null&&c!==void 0?c:"".concat(l+1," / ").concat(i)),Le.map(function(o){var t=o.icon,k=o.onClick,W=o.type,B=o.disabled;return r.exports.createElement("li",{className:Q(Ie,L({},"".concat(n,"-operations-operation-disabled"),!!B)),onClick:k,key:W},r.exports.isValidElement(t)?r.exports.cloneElement(t,{className:De}):t)})),r.exports.createElement("div",{className:"".concat(n,"-img-wrapper"),style:{transform:"translate3d(".concat(d.x,"px, ").concat(d.y,"px, 0)")}},r.exports.createElement("img",{onMouseDown:$e,onDoubleClick:Pe,ref:E,className:"".concat(n,"-img"),src:ae,alt:u,style:{transform:"scale3d(".concat(S,", ").concat(S,", 1) rotate(").concat(Y,"deg)")}})),R&&r.exports.createElement("div",{className:Q("".concat(n,"-switch-left"),L({},"".concat(n,"-switch-left-disabled"),l===0)),onClick:H},oe),R&&r.exports.createElement("div",{className:Q("".concat(n,"-switch-right"),L({},"".concat(n,"-switch-right-disabled"),l===i-1)),onClick:q},ve))},ar=["src","alt","onPreviewClose","prefixCls","previewPrefixCls","placeholder","fallback","width","height","style","preview","className","onClick","onError","wrapperClassName","wrapperStyle","rootClassName","crossOrigin","decoding","loading","referrerPolicy","sizes","srcSet","useMap"],sr=["src","visible","onVisibleChange","getContainer","mask","maskClassName","icons"],Ke=0,je=function(e){var c=e.src,n=e.alt,g=e.onPreviewClose,u=e.prefixCls,a=u===void 0?"rc-image":u,s=e.previewPrefixCls,x=s===void 0?"".concat(a,"-preview"):s,p=e.placeholder,P=e.fallback,h=e.width,$=e.height,re=e.style,te=e.preview,U=te===void 0?!0:te,ue=e.className,z=e.onClick,oe=e.onError,ve=e.wrapperClassName,fe=e.wrapperStyle,G=e.rootClassName,S=e.crossOrigin,N=e.decoding,pe=e.loading,F=e.referrerPolicy,Y=e.sizes,_=e.srcSet,de=e.useMap,A=ke(e,ar),d=p&&p!==!0,v=Te(U)==="object"?U:{},E=v.src,y=v.visible,K=y===void 0?void 0:y,O=v.onVisibleChange,I=O===void 0?g:O,T=v.getContainer,M=T===void 0?void 0:T,D=v.mask,ne=v.maskClassName,ie=v.icons,C=ke(v,sr),i=E!=null?E:c,w=K!==void 0,l=Xe(!!K,{value:K,onChange:I}),ae=m(l,2),R=ae[0],X=ae[1],Z=r.exports.useState(d?"loading":"normal"),j=m(Z,2),me=j[0],se=j[1],be=r.exports.useState(null),we=m(be,2),_e=we[0],Me=we[1],H=me==="error",q=r.exports.useContext(Ue),ge=q.isPreviewGroup,Ie=q.setCurrent,De=q.setShowPreview,Le=q.setMousePosition,Ce=q.registerImage,$e=r.exports.useState(function(){return Ke+=1,Ke}),Re=m($e,1),xe=Re[0],V=U&&!H,Pe=r.exports.useRef(!1),o=function(){se("normal")},t=function(b){oe&&oe(b),se("error")},k=function(b){if(!w){var ze=qe(b.target),Ge=ze.left,Oe=ze.top;ge?(Ie(xe),Le({x:Ge,y:Oe})):Me({x:Ge,y:Oe})}ge?De(!0):X(!0),z&&z(b)},W=function(b){b.stopPropagation(),X(!1),w||Me(null)},B=function(b){Pe.current=!1,me==="loading"&&(b==null?void 0:b.complete)&&(b.naturalWidth||b.naturalHeight)&&(Pe.current=!0,o())};r.exports.useEffect(function(){var le=Ce(xe,i);return le},[]),r.exports.useEffect(function(){Ce(xe,i,V)},[i,V]),r.exports.useEffect(function(){H&&se("normal"),d&&!Pe.current&&se("loading")},[c]);var he=Q(a,ve,G,L({},"".concat(a,"-error"),H)),Se=H&&P?P:i,Ne={crossOrigin:S,decoding:N,loading:pe,referrerPolicy:F,sizes:Y,srcSet:_,useMap:de,alt:n,className:Q("".concat(a,"-img"),L({},"".concat(a,"-img-placeholder"),p===!0),ue),style:ee({height:$},re)};return r.exports.createElement(r.exports.Fragment,null,r.exports.createElement("div",ye({},A,{className:he,onClick:V?k:z,style:ee({width:h,height:$},fe)}),r.exports.createElement("img",ye({},Ne,{ref:B},H&&P?{src:P}:{onLoad:o,onError:t,src:c})),me==="loading"&&r.exports.createElement("div",{"aria-hidden":"true",className:"".concat(a,"-placeholder")},p),D&&V&&r.exports.createElement("div",{className:Q("".concat(a,"-mask"),ne)},D)),!ge&&V&&r.exports.createElement(Ze,ye({"aria-hidden":!R,visible:R,prefixCls:x,onClose:W,mousePosition:_e,src:Se,alt:n,getContainer:M,icons:ie,rootClassName:G},C)))};je.PreviewGroup=tr;je.displayName="Image";export{je as I};

System.register(["./@babel-legacy-55346a6e.js","./react-legacy-700da723.js","./classnames-legacy-fbfdb612.js","./rc-util-legacy-608bab30.js","./rc-dialog-legacy-a0d6a9cf.js"],(function(e){"use strict";var t,r,n,o,i,s,a,c,l,u,f,p,d,v,m;return{setters:[function(e){t=e.c,r=e.a,n=e.d,o=e._,i=e.b,s=e.j},function(e){a=e.r},function(e){c=e.c},function(e){l=e.d,u=e.n,f=e.b,p=e.K,d=e.i,v=e.q},function(e){m=e.D}],execute:function(){function g(e,t,r,o){var i=t+r,s=(r-o)/2;if(r>o){if(t>0)return n({},e,s);if(t<0&&i<o)return n({},e,-s)}else if(t<0||i>o)return n({},e,t<0?s:-s);return{}}var x=["visible","onVisibleChange","getContainer","current","countRender"],w=a.exports.createContext({previewUrls:new Map,setPreviewUrls:function(){return null},current:null,setCurrent:function(){return null},setShowPreview:function(){return null},setMousePosition:function(){return null},registerImage:function(){return function(){return null}},rootClassName:""}),C=w.Provider,h=["prefixCls","src","alt","onClose","afterClose","visible","icons","rootClassName","countRender"],y=a.exports.useState,b=a.exports.useEffect,E=a.exports.useCallback,P=a.exports.useRef,k=a.exports.useContext,N={x:0,y:0},S=function(e){var o,f=e.prefixCls,v=e.src,x=e.alt,C=e.onClose;e.afterClose;var S,R,M,D,z,j,I,Y=e.visible,X=e.icons,O=void 0===X?{}:X,G=e.rootClassName,U=e.countRender,V=i(e,h),L=O.rotateLeft,A=O.rotateRight,H=O.zoomIn,T=O.zoomOut,F=O.close,W=O.left,q=O.right,B=y(1),K=t(B,2),_=K[0],J=K[1],Q=y(0),Z=t(Q,2),$=Z[0],ee=Z[1],te=(S=N,R=a.exports.useRef(null),M=a.exports.useState(S),D=t(M,2),z=D[0],j=D[1],I=a.exports.useRef([]),a.exports.useEffect((function(){return function(){return R.current&&l.cancel(R.current)}}),[]),[z,function(e){null===R.current&&(I.current=[],R.current=l((function(){j((function(e){var t=e;return I.current.forEach((function(e){t=r(r({},t),e)})),R.current=null,t}))}))),I.current.push(e)}]),re=t(te,2),ne=re[0],oe=re[1],ie=P(),se=P({originX:0,originY:0,deltaX:0,deltaY:0}),ae=y(!1),ce=t(ae,2),le=ce[0],ue=ce[1],fe=k(w),pe=fe.previewUrls,de=fe.current,ve=fe.isPreviewGroup,me=fe.setCurrent,ge=pe.size,xe=Array.from(pe.keys()),we=xe.indexOf(de),Ce=ve?pe.get(de):v,he=ve&&ge>1,ye=y({wheelDirection:0}),be=t(ye,2),Ee=be[0],Pe=be[1],ke=function(){J((function(e){return e+1})),oe(N)},Ne=function(){_>1&&J((function(e){return e-1})),oe(N)},Se=c(n({},"".concat(f,"-moving"),le)),Re="".concat(f,"-operations-operation"),Me="".concat(f,"-operations-icon"),De=[{icon:F,onClick:C,type:"close"},{icon:H,onClick:ke,type:"zoomIn"},{icon:T,onClick:Ne,type:"zoomOut",disabled:1===_},{icon:A,onClick:function(){ee((function(e){return e+90}))},type:"rotateRight"},{icon:L,onClick:function(){ee((function(e){return e-90}))},type:"rotateLeft"}],ze=function(){if(Y&&le){var e=ie.current.offsetWidth*_,t=ie.current.offsetHeight*_,n=ie.current.getBoundingClientRect(),o=n.left,i=n.top,s=$%180!=0;ue(!1);var a=function(e,t,n,o){var i=u(),s=i.width,a=i.height,c=null;return e<=s&&t<=a?c={x:0,y:0}:(e>s||t>a)&&(c=r(r({},g("x",n,e,s)),g("y",o,t,a))),c}(s?t:e,s?e:t,o,i);a&&oe(r({},a))}},je=function(e){Y&&le&&oe({x:e.pageX-se.current.deltaX,y:e.pageY-se.current.deltaY})},Ie=function(e){if(Y){e.preventDefault();var t=e.deltaY;Pe({wheelDirection:t})}},Ye=E((function(e){Y&&he&&(e.preventDefault(),e.keyCode===p.LEFT?we>0&&me(xe[we-1]):e.keyCode===p.RIGHT&&we<ge-1&&me(xe[we+1]))}),[we,ge,xe,me,he,Y]);return b((function(){var e=Ee.wheelDirection;e>0?Ne():e<0&&ke()}),[Ee]),b((function(){var e,t,r=d(window,"mouseup",ze,!1),n=d(window,"mousemove",je,!1),o=d(window,"wheel",Ie,{passive:!1}),i=d(window,"keydown",Ye,!1);try{window.top!==window.self&&(e=d(window.top,"mouseup",ze,!1),t=d(window.top,"mousemove",je,!1))}catch(s){}return function(){r.remove(),n.remove(),o.remove(),i.remove(),e&&e.remove(),t&&t.remove()}}),[Y,le,Ye]),a.exports.createElement(m,s({transitionName:"zoom",maskTransitionName:"fade",closable:!1,keyboard:!0,prefixCls:f,onClose:C,afterClose:function(){J(1),ee(0),oe(N)},visible:Y,wrapClassName:Se,rootClassName:G},V),a.exports.createElement("ul",{className:"".concat(f,"-operations")},he&&a.exports.createElement("li",{className:"".concat(f,"-operations-progress")},null!==(o=null==U?void 0:U(we+1,ge))&&void 0!==o?o:"".concat(we+1," / ").concat(ge)),De.map((function(e){var t=e.icon,r=e.onClick,o=e.type,i=e.disabled;return a.exports.createElement("li",{className:c(Re,n({},"".concat(f,"-operations-operation-disabled"),!!i)),onClick:r,key:o},a.exports.isValidElement(t)?a.exports.cloneElement(t,{className:Me}):t)}))),a.exports.createElement("div",{className:"".concat(f,"-img-wrapper"),style:{transform:"translate3d(".concat(ne.x,"px, ").concat(ne.y,"px, 0)")}},a.exports.createElement("img",{onMouseDown:function(e){0===e.button&&(e.preventDefault(),e.stopPropagation(),se.current.deltaX=e.pageX-ne.x,se.current.deltaY=e.pageY-ne.y,se.current.originX=ne.x,se.current.originY=ne.y,ue(!0))},onDoubleClick:function(){Y&&(1!==_&&J(1),ne.x===N.x&&ne.y===N.y||oe(N))},ref:ie,className:"".concat(f,"-img"),src:Ce,alt:x,style:{transform:"scale3d(".concat(_,", ").concat(_,", 1) rotate(").concat($,"deg)")}})),he&&a.exports.createElement("div",{className:c("".concat(f,"-switch-left"),n({},"".concat(f,"-switch-left-disabled"),0===we)),onClick:function(e){e.preventDefault(),e.stopPropagation(),we>0&&me(xe[we-1])}},W),he&&a.exports.createElement("div",{className:c("".concat(f,"-switch-right"),n({},"".concat(f,"-switch-right-disabled"),we===ge-1)),onClick:function(e){e.preventDefault(),e.stopPropagation(),we<ge-1&&me(xe[we+1])}},q))},R=["src","alt","onPreviewClose","prefixCls","previewPrefixCls","placeholder","fallback","width","height","style","preview","className","onClick","onError","wrapperClassName","wrapperStyle","rootClassName","crossOrigin","decoding","loading","referrerPolicy","sizes","srcSet","useMap"],M=["src","visible","onVisibleChange","getContainer","mask","maskClassName","icons"],D=0,z=e("I",(function(e){var l=e.src,u=e.alt,p=e.onPreviewClose,d=e.prefixCls,m=void 0===d?"rc-image":d,g=e.previewPrefixCls,x=void 0===g?"".concat(m,"-preview"):g,C=e.placeholder,h=e.fallback,y=e.width,b=e.height,E=e.style,P=e.preview,k=void 0===P||P,N=e.className,z=e.onClick,j=e.onError,I=e.wrapperClassName,Y=e.wrapperStyle,X=e.rootClassName,O=e.crossOrigin,G=e.decoding,U=e.loading,V=e.referrerPolicy,L=e.sizes,A=e.srcSet,H=e.useMap,T=i(e,R),F=C&&!0!==C,W="object"===o(k)?k:{},q=W.src,B=W.visible,K=void 0===B?void 0:B,_=W.onVisibleChange,J=void 0===_?p:_,Q=W.getContainer,Z=void 0===Q?void 0:Q,$=W.mask,ee=W.maskClassName,te=W.icons,re=i(W,M),ne=null!=q?q:l,oe=void 0!==K,ie=f(!!K,{value:K,onChange:J}),se=t(ie,2),ae=se[0],ce=se[1],le=a.exports.useState(F?"loading":"normal"),ue=t(le,2),fe=ue[0],pe=ue[1],de=a.exports.useState(null),ve=t(de,2),me=ve[0],ge=ve[1],xe="error"===fe,we=a.exports.useContext(w),Ce=we.isPreviewGroup,he=we.setCurrent,ye=we.setShowPreview,be=we.setMousePosition,Ee=we.registerImage,Pe=a.exports.useState((function(){return D+=1})),ke=t(Pe,1)[0],Ne=k&&!xe,Se=a.exports.useRef(!1),Re=function(){pe("normal")};a.exports.useEffect((function(){return Ee(ke,ne)}),[]),a.exports.useEffect((function(){Ee(ke,ne,Ne)}),[ne,Ne]),a.exports.useEffect((function(){xe&&pe("normal"),F&&!Se.current&&pe("loading")}),[l]);var Me=c(m,I,X,n({},"".concat(m,"-error"),xe)),De=xe&&h?h:ne,ze={crossOrigin:O,decoding:G,loading:U,referrerPolicy:V,sizes:L,srcSet:A,useMap:H,alt:u,className:c("".concat(m,"-img"),n({},"".concat(m,"-img-placeholder"),!0===C),N),style:r({height:b},E)};return a.exports.createElement(a.exports.Fragment,null,a.exports.createElement("div",s({},T,{className:Me,onClick:Ne?function(e){if(!oe){var t=v(e.target),r=t.left,n=t.top;Ce?(he(ke),be({x:r,y:n})):ge({x:r,y:n})}Ce?ye(!0):ce(!0),z&&z(e)}:z,style:r({width:y,height:b},Y)}),a.exports.createElement("img",s({},ze,{ref:function(e){Se.current=!1,"loading"===fe&&(null==e?void 0:e.complete)&&(e.naturalWidth||e.naturalHeight)&&(Se.current=!0,Re())}},xe&&h?{src:h}:{onLoad:Re,onError:function(e){j&&j(e),pe("error")},src:l})),"loading"===fe&&a.exports.createElement("div",{"aria-hidden":"true",className:"".concat(m,"-placeholder")},C),$&&Ne&&a.exports.createElement("div",{className:c("".concat(m,"-mask"),ee)},$)),!Ce&&Ne&&a.exports.createElement(S,s({"aria-hidden":!ae,visible:ae,prefixCls:x,onClose:function(e){e.stopPropagation(),ce(!1),oe||ge(null)},mousePosition:me,src:De,alt:u,getContainer:Z,icons:te,rootClassName:X},re)))}));z.PreviewGroup=function(e){var r=e.previewPrefixCls,n=void 0===r?"rc-image-preview":r,c=e.children,l=e.icons,u=void 0===l?{}:l,p=e.preview,d="object"===o(p)?p:{},v=d.visible,m=void 0===v?void 0:v,g=d.onVisibleChange,w=void 0===g?void 0:g,h=d.getContainer,y=void 0===h?void 0:h,b=d.current,E=void 0===b?0:b,P=d.countRender,k=void 0===P?void 0:P,N=i(d,x),R=a.exports.useState(new Map),M=t(R,2),D=M[0],z=M[1],j=a.exports.useState(),I=t(j,2),Y=I[0],X=I[1],O=f(!!m,{value:m,onChange:w}),G=t(O,2),U=G[0],V=G[1],L=a.exports.useState(null),A=t(L,2),H=A[0],T=A[1],F=void 0!==m,W=Array.from(D.keys())[E],q=new Map(Array.from(D).filter((function(e){return!!t(e,2)[1].canPreview})).map((function(e){var r=t(e,2);return[r[0],r[1].url]})));return a.exports.useEffect((function(){X(W)}),[W]),a.exports.useEffect((function(){!U&&F&&X(W)}),[W,F,U]),a.exports.createElement(C,{value:{isPreviewGroup:!0,previewUrls:q,setPreviewUrls:z,current:Y,setCurrent:X,setShowPreview:V,setMousePosition:T,registerImage:function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=function(){z((function(t){var r=new Map(t);return r.delete(e)?r:t}))};return z((function(n){return new Map(n).set(e,{url:t,canPreview:r})})),n}}},c,a.exports.createElement(S,s({"aria-hidden":!U,visible:U,prefixCls:n,onClose:function(e){e.stopPropagation(),V(!1),T(null)},mousePosition:H,src:q.get(Y),icons:u,getContainer:y,countRender:k},N)))},z.displayName="Image"}}}));

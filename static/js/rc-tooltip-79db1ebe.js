import{b as W,a as X,_ as Y,j as q}from"./@babel-ee6b9e1a.js";import{r}from"./react-58122654.js";import{T as z}from"./rc-trigger-423e0480.js";var t={adjustX:1,adjustY:1},o=[0,0],F={left:{points:["cr","cl"],overflow:t,offset:[-4,0],targetOffset:o},right:{points:["cl","cr"],overflow:t,offset:[4,0],targetOffset:o},top:{points:["bc","tc"],overflow:t,offset:[0,-4],targetOffset:o},bottom:{points:["tc","bc"],overflow:t,offset:[0,4],targetOffset:o},topLeft:{points:["bl","tl"],overflow:t,offset:[0,-4],targetOffset:o},leftTop:{points:["tr","tl"],overflow:t,offset:[-4,0],targetOffset:o},topRight:{points:["br","tr"],overflow:t,offset:[0,-4],targetOffset:o},rightTop:{points:["tl","tr"],overflow:t,offset:[4,0],targetOffset:o},bottomRight:{points:["tr","br"],overflow:t,offset:[0,4],targetOffset:o},rightBottom:{points:["bl","br"],overflow:t,offset:[4,0],targetOffset:o},bottomLeft:{points:["tl","bl"],overflow:t,offset:[0,4],targetOffset:o},leftBottom:{points:["br","bl"],overflow:t,offset:[-4,0],targetOffset:o}},G=function(e){var a=e.overlay,n=e.prefixCls,l=e.id,s=e.overlayInnerStyle;return r.exports.createElement("div",{className:"".concat(n,"-inner"),id:l,role:"tooltip",style:s},typeof a=="function"?a():a)},J=function(e,a){var n=e.overlayClassName,l=e.trigger,s=l===void 0?["hover"]:l,v=e.mouseEnterDelay,O=v===void 0?0:v,m=e.mouseLeaveDelay,T=m===void 0?.1:m,V=e.overlayStyle,u=e.prefixCls,f=u===void 0?"rc-tooltip":u,_=e.children,D=e.onVisibleChange,P=e.afterVisibleChange,E=e.transitionName,S=e.animation,N=e.motion,y=e.placement,$=y===void 0?"right":y,g=e.align,j=g===void 0?{}:g,c=e.destroyTooltipOnHide,i=c===void 0?!1:c,I=e.defaultVisible,L=e.getTooltipContainer,H=e.overlayInnerStyle,R=W(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle"]),d=r.exports.useRef(null);r.exports.useImperativeHandle(a,function(){return d.current});var b=X({},R);"visible"in e&&(b.popupVisible=e.visible);var A=function(){var w=e.arrowContent,k=w===void 0?null:w,B=e.overlay,M=e.id;return[r.exports.createElement("div",{className:"".concat(f,"-arrow"),key:"arrow"},k),r.exports.createElement(G,{key:"content",prefixCls:f,id:M,overlay:B,overlayInnerStyle:H})]},p=!1,C=!1;if(typeof i=="boolean")p=i;else if(i&&Y(i)==="object"){var h=i.keepParent;p=h===!0,C=h===!1}return r.exports.createElement(z,q({popupClassName:n,prefixCls:f,popup:A,action:s,builtinPlacements:F,popupPlacement:$,ref:d,popupAlign:j,getPopupContainer:L,onPopupVisibleChange:D,afterPopupVisibleChange:P,popupTransitionName:E,popupAnimation:S,popupMotion:N,defaultPopupVisible:I,destroyPopupOnHide:p,autoDestroy:C,mouseLeaveDelay:T,popupStyle:V,mouseEnterDelay:O},b),_)},ee=r.exports.forwardRef(J);export{ee as T,F as p};

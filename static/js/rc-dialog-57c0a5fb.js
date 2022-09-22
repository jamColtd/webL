import{j as E,a as y,c as q}from"./@babel-ee6b9e1a.js";import{r as t}from"./react-58122654.js";import{k as ie,p as se,h as le,K as G,P as ce}from"./rc-util-7e6efee8.js";import{c as z}from"./classnames-d3968fd4.js";import{C as te}from"./rc-motion-7fe3a77e.js";function ue(e){var o=e.prefixCls,n=e.style,a=e.visible,r=e.maskProps,i=e.motionName;return t.exports.createElement(te,{key:"mask",visible:a,motionName:i,leavedClassName:"".concat(o,"-mask-hidden")},function(c){var f=c.className,d=c.style;return t.exports.createElement("div",E({style:y(y({},d),n),className:z("".concat(o,"-mask"),f)},r))})}function J(e,o,n){var a=o;return!a&&n&&(a="".concat(e,"-").concat(n)),a}function Q(e,o){var n=e["page".concat(o?"Y":"X","Offset")],a="scroll".concat(o?"Top":"Left");if(typeof n!="number"){var r=e.document;n=r.documentElement[a],typeof n!="number"&&(n=r.body[a])}return n}function fe(e){var o=e.getBoundingClientRect(),n={left:o.left,top:o.top},a=e.ownerDocument,r=a.defaultView||a.parentWindow;return n.left+=Q(r),n.top+=Q(r,!0),n}var me=t.exports.memo(function(e){var o=e.children;return o},function(e,o){var n=o.shouldUpdate;return!n}),Z={width:0,height:0,overflow:"hidden",outline:"none"},ne=t.exports.forwardRef(function(e,o){var n=e.closable,a=e.prefixCls,r=e.width,i=e.height,c=e.footer,f=e.title,d=e.closeIcon,R=e.style,u=e.className,b=e.visible,g=e.forceRender,O=e.bodyStyle,j=e.bodyProps,p=e.children,w=e.destroyOnClose,T=e.modalRender,B=e.motionName,$=e.ariaId,H=e.onClose,V=e.onVisibleChanged,U=e.onMouseDown,X=e.onMouseUp,P=e.mousePosition,N=t.exports.useRef(),_=t.exports.useRef(),W=t.exports.useRef();t.exports.useImperativeHandle(o,function(){return{focus:function(){var s;(s=N.current)===null||s===void 0||s.focus()},changeActive:function(s){var C=document,x=C.activeElement;s&&x===_.current?N.current.focus():!s&&x===N.current&&_.current.focus()}}});var Y=t.exports.useState(),K=q(Y,2),k=K[0],I=K[1],v={};r!==void 0&&(v.width=r),i!==void 0&&(v.height=i),k&&(v.transformOrigin=k);function L(){var m=fe(W.current);I(P?"".concat(P.x-m.left,"px ").concat(P.y-m.top,"px"):"")}var M;c&&(M=t.exports.createElement("div",{className:"".concat(a,"-footer")},c));var h;f&&(h=t.exports.createElement("div",{className:"".concat(a,"-header")},t.exports.createElement("div",{className:"".concat(a,"-title"),id:$},f)));var A;n&&(A=t.exports.createElement("button",{type:"button",onClick:H,"aria-label":"Close",className:"".concat(a,"-close")},d||t.exports.createElement("span",{className:"".concat(a,"-close-x")})));var D=t.exports.createElement("div",{className:"".concat(a,"-content")},A,h,t.exports.createElement("div",E({className:"".concat(a,"-body"),style:O},j),p),M);return t.exports.createElement(te,{visible:b,onVisibleChanged:V,onAppearPrepare:L,onEnterPrepare:L,forceRender:g,motionName:B,removeOnLeave:w,ref:W},function(m,s){var C=m.className,x=m.style;return t.exports.createElement("div",{key:"dialog-element",role:"dialog","aria-modal":"true",ref:s,style:y(y(y({},x),R),v),className:z(a,u,C),onMouseDown:U,onMouseUp:X},t.exports.createElement("div",{tabIndex:0,ref:N,style:Z,"aria-hidden":"true"}),t.exports.createElement(me,{shouldUpdate:b||g},T?T(D):D),t.exports.createElement("div",{tabIndex:0,ref:_,style:Z,"aria-hidden":"true"}))})});ne.displayName="Content";function ee(e){var o=e.prefixCls,n=o===void 0?"rc-dialog":o,a=e.zIndex,r=e.visible,i=r===void 0?!1:r,c=e.keyboard,f=c===void 0?!0:c,d=e.focusTriggerAfterClose,R=d===void 0?!0:d,u=e.scrollLocker,b=e.title,g=e.wrapStyle,O=e.wrapClassName,j=e.wrapProps,p=e.onClose,w=e.afterClose,T=e.transitionName,B=e.animation,$=e.closable,H=$===void 0?!0:$,V=e.mask,U=V===void 0?!0:V,X=e.maskTransitionName,P=e.maskAnimation,N=e.maskClosable,_=N===void 0?!0:N,W=e.maskStyle,Y=e.maskProps,K=e.rootClassName,k=t.exports.useRef(),I=t.exports.useRef(),v=t.exports.useRef(),L=t.exports.useState(i),M=q(L,2),h=M[0],A=M[1],D=ie();function m(l){if(l){if(!le(I.current,document.activeElement)){var S;k.current=document.activeElement,(S=v.current)===null||S===void 0||S.focus()}}else{if(A(!1),U&&k.current&&R){try{k.current.focus({preventScroll:!0})}catch(ve){}k.current=null}h&&(w==null||w())}}function s(l){p==null||p(l)}var C=t.exports.useRef(!1),x=t.exports.useRef(),oe=function(){clearTimeout(x.current),C.current=!0},ae=function(){x.current=setTimeout(function(){C.current=!1})},F=null;_&&(F=function(S){C.current?C.current=!1:I.current===S.target&&s(S)});function re(l){if(f&&l.keyCode===G.ESC){l.stopPropagation(),s(l);return}i&&l.keyCode===G.TAB&&v.current.changeActive(!l.shiftKey)}return t.exports.useEffect(function(){return i&&A(!0),function(){}},[i]),t.exports.useEffect(function(){return function(){clearTimeout(x.current)}},[]),t.exports.useEffect(function(){return h?(u==null||u.lock(),u==null?void 0:u.unLock):function(){}},[h,u]),t.exports.createElement("div",E({className:z("".concat(n,"-root"),K)},se(e,{data:!0})),t.exports.createElement(ue,{prefixCls:n,visible:U&&i,motionName:J(n,X,P),style:y({zIndex:a},W),maskProps:Y}),t.exports.createElement("div",E({tabIndex:-1,onKeyDown:re,className:z("".concat(n,"-wrap"),O),ref:I,onClick:F,"aria-labelledby":b?D:null,style:y(y({zIndex:a},g),{},{display:h?null:"none"})},j),t.exports.createElement(ne,E({},e,{onMouseDown:oe,onMouseUp:ae,ref:v,closable:H,ariaId:D,prefixCls:n,visible:i,onClose:s,onVisibleChanged:m,motionName:J(n,T,B)}))))}var de=function(o){var n=o.visible,a=o.getContainer,r=o.forceRender,i=o.destroyOnClose,c=i===void 0?!1:i,f=o.afterClose,d=t.exports.useState(n),R=q(d,2),u=R[0],b=R[1];return t.exports.useEffect(function(){n&&b(!0)},[n]),a===!1?t.exports.createElement(ee,E({},o,{getOpenCount:function(){return 2}})):!r&&c&&!u?null:t.exports.createElement(ce,{visible:n,forceRender:r,getContainer:a},function(g){return t.exports.createElement(ee,E({},o,{destroyOnClose:c,afterClose:function(){f==null||f(),b(!1)}},g))})};de.displayName="Dialog";export{de as D};

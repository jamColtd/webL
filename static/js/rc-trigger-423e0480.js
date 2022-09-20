import{a as x,j as D,c as y,p as ge,r as ne,b as xe,e as Ce,f as Te,g as Me,h as Pe,i as ye}from"./@babel-ee6b9e1a.js";import{r}from"./react-58122654.js";import{R as be}from"./react-dom-694a72f5.js";import{f as Se,d as w,z as se,A as ke,h as Y,y as we,i as I,s as De,e as Ne,B as Ee}from"./rc-util-852b41a6.js";import{c as F}from"./classnames-d3968fd4.js";import{C as G}from"./rc-motion-2d8059f1.js";import{R as Ae}from"./rc-align-e66aa9dc.js";function Oe(n,p,l){return l?n[0]===p[0]:n[0]===p[0]&&n[1]===p[1]}function Re(n,p,l){var c=n[p]||{};return x(x({},c),l)}function He(n,p,l,c){for(var f=l.points,s=Object.keys(n),e=0;e<s.length;e+=1){var i=s[e];if(Oe(n[i].points,f,c))return"".concat(p,"-placement-").concat(i)}return""}function ue(n){var p=n.prefixCls,l=n.motion,c=n.animation,f=n.transitionName;return l||(c?{motionName:"".concat(p,"-").concat(c)}:f?{motionName:f}:null)}function Ve(n){var p=n.prefixCls,l=n.visible,c=n.zIndex,f=n.mask,s=n.maskMotion,e=n.maskAnimation,i=n.maskTransitionName;if(!f)return null;var t={};return(s||i||e)&&(t=x({motionAppear:!0},ue({motion:s,prefixCls:p,transitionName:i,animation:e}))),r.exports.createElement(G,D({},t,{visible:l,removeOnLeave:!0}),function(o){var a=o.className;return r.exports.createElement("div",{style:{zIndex:c},className:F("".concat(p,"-mask"),a)})})}var re=["measure","alignPre","align",null,"motion"],_e=function(n,p){var l=Se(null),c=y(l,2),f=c[0],s=c[1],e=r.exports.useRef();function i(a){s(a,!0)}function t(){w.cancel(e.current)}function o(a){t(),e.current=w(function(){i(function(d){switch(f){case"align":return"motion";case"motion":return"stable"}return d}),a==null||a()})}return r.exports.useEffect(function(){i("measure")},[n]),r.exports.useEffect(function(){switch(f){case"measure":p();break}f&&(e.current=w(ge(ne.mark(function a(){var d,h;return ne.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:d=re.indexOf(f),h=re[d+1],h&&d!==-1&&i(h);case 3:case"end":return u.stop()}},a)}))))},[f]),r.exports.useEffect(function(){return function(){t()}},[]),[f,o]},Le=function(n){var p=r.exports.useState({width:0,height:0}),l=y(p,2),c=l[0],f=l[1];function s(i){f({width:i.offsetWidth,height:i.offsetHeight})}var e=r.exports.useMemo(function(){var i={};if(n){var t=c.width,o=c.height;n.indexOf("height")!==-1&&o?i.height=o:n.indexOf("minHeight")!==-1&&o&&(i.minHeight=o),n.indexOf("width")!==-1&&t?i.width=t:n.indexOf("minWidth")!==-1&&t&&(i.minWidth=t)}return i},[n,c]);return[e,s]},le=r.exports.forwardRef(function(n,p){var l=n.visible,c=n.prefixCls,f=n.className,s=n.style,e=n.children,i=n.zIndex,t=n.stretch,o=n.destroyPopupOnHide,a=n.forceRender,d=n.align,h=n.point,m=n.getRootDomNode,u=n.getClassNameFromAlign,g=n.onAlign,M=n.onMouseEnter,b=n.onMouseLeave,T=n.onMouseDown,N=n.onTouchStart,H=r.exports.useRef(),V=r.exports.useRef(),E=r.exports.useState(),_=y(E,2),L=_[0],$=_[1],z=Le(t),A=y(z,2),B=A[0],U=A[1];function W(){t&&U(m())}var S=_e(l,W),Q=y(S,2),C=Q[0],j=Q[1],fe=r.exports.useState(0),J=y(fe,2),K=J[0],Z=J[1],X=r.exports.useRef();se(function(){C==="alignPre"&&Z(0)},[C]);function de(){return h||m}function ee(){var v;(v=H.current)===null||v===void 0||v.forceAlign()}function me(v,P){var k=u(P);L!==k&&$(k),Z(function(R){return R+1}),C==="align"&&(g==null||g(v,P))}se(function(){C==="align"&&(K<2?ee():j(function(){var v;(v=X.current)===null||v===void 0||v.call(X)}))},[K]);var O=x({},ue(n));["onAppearEnd","onEnterEnd","onLeaveEnd"].forEach(function(v){var P=O[v];O[v]=function(k,R){return j(),P==null?void 0:P(k,R)}});function te(){return new Promise(function(v){X.current=v})}r.exports.useEffect(function(){!O.motionName&&C==="motion"&&j()},[O.motionName,C]),r.exports.useImperativeHandle(p,function(){return{forceAlign:ee,getElement:function(){return V.current}}});var he=x(x({},B),{},{zIndex:i,opacity:C==="motion"||C==="stable"||!l?void 0:0,pointerEvents:!l&&C!=="stable"?"none":void 0},s),oe=!0;(d==null?void 0:d.points)&&(C==="align"||C==="stable")&&(oe=!1);var ie=e;return r.exports.Children.count(e)>1&&(ie=r.exports.createElement("div",{className:"".concat(c,"-content")},e)),r.exports.createElement(G,D({visible:l,ref:V,leavedClassName:"".concat(c,"-hidden")},O,{onAppearPrepare:te,onEnterPrepare:te,removeOnLeave:o,forceRender:a}),function(v,P){var k=v.className,R=v.style,ve=F(c,f,L,k);return r.exports.createElement(Ae,{target:de(),key:"popup",ref:H,monitorWindowResize:!0,disabled:oe,align:d,onAlign:me},r.exports.createElement("div",{ref:P,className:ve,onMouseEnter:M,onMouseLeave:b,onMouseDownCapture:T,onTouchStartCapture:N,style:x(x({},R),he)},ie))})});le.displayName="PopupInner";var pe=r.exports.forwardRef(function(n,p){var l=n.prefixCls,c=n.visible,f=n.zIndex,s=n.children,e=n.mobile;e=e===void 0?{}:e;var i=e.popupClassName,t=e.popupStyle,o=e.popupMotion,a=o===void 0?{}:o,d=e.popupRender,h=r.exports.useRef();r.exports.useImperativeHandle(p,function(){return{forceAlign:function(){},getElement:function(){return h.current}}});var m=x({zIndex:f},t),u=s;return r.exports.Children.count(s)>1&&(u=r.exports.createElement("div",{className:"".concat(l,"-content")},s)),d&&(u=d(u)),r.exports.createElement(G,D({visible:c,ref:h,removeOnLeave:!0},a),function(g,M){var b=g.className,T=g.style,N=F(l,i,b);return r.exports.createElement("div",{ref:M,className:N,style:x(x({},T),m)},u)})});pe.displayName="MobilePopupInner";var Ie=["visible","mobile"],ce=r.exports.forwardRef(function(n,p){var l=n.visible,c=n.mobile,f=xe(n,Ie),s=r.exports.useState(l),e=y(s,2),i=e[0],t=e[1],o=r.exports.useState(!1),a=y(o,2),d=a[0],h=a[1],m=x(x({},f),{},{visible:i});r.exports.useEffect(function(){t(l),l&&c&&h(ke())},[l,c]);var u=d?r.exports.createElement(pe,D({},m,{mobile:c,ref:p})):r.exports.createElement(le,D({},m,{ref:p}));return r.exports.createElement("div",null,r.exports.createElement(Ve,m),u)});ce.displayName="Popup";var ae=r.exports.createContext(null);function q(){}function Fe(){return""}function $e(n){return n?n.ownerDocument:window.document}var ze=["onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur","onContextMenu"];function Be(n){var p=function(l){Ce(f,l);var c=Te(f);function f(s){var e;Me(this,f),e=c.call(this,s),e.popupRef=r.exports.createRef(),e.triggerRef=r.exports.createRef(),e.portalContainer=void 0,e.attachId=void 0,e.clickOutsideHandler=void 0,e.touchOutsideHandler=void 0,e.contextMenuOutsideHandler1=void 0,e.contextMenuOutsideHandler2=void 0,e.mouseDownTimeout=void 0,e.focusTime=void 0,e.preClickTime=void 0,e.preTouchTime=void 0,e.delayTimer=void 0,e.hasPopupMouseDown=void 0,e.onMouseEnter=function(t){var o=e.props.mouseEnterDelay;e.fireEvents("onMouseEnter",t),e.delaySetPopupVisible(!0,o,o?null:t)},e.onMouseMove=function(t){e.fireEvents("onMouseMove",t),e.setPoint(t)},e.onMouseLeave=function(t){e.fireEvents("onMouseLeave",t),e.delaySetPopupVisible(!1,e.props.mouseLeaveDelay)},e.onPopupMouseEnter=function(){e.clearDelayTimer()},e.onPopupMouseLeave=function(t){var o;t.relatedTarget&&!t.relatedTarget.setTimeout&&Y((o=e.popupRef.current)===null||o===void 0?void 0:o.getElement(),t.relatedTarget)||e.delaySetPopupVisible(!1,e.props.mouseLeaveDelay)},e.onFocus=function(t){e.fireEvents("onFocus",t),e.clearDelayTimer(),e.isFocusToShow()&&(e.focusTime=Date.now(),e.delaySetPopupVisible(!0,e.props.focusDelay))},e.onMouseDown=function(t){e.fireEvents("onMouseDown",t),e.preClickTime=Date.now()},e.onTouchStart=function(t){e.fireEvents("onTouchStart",t),e.preTouchTime=Date.now()},e.onBlur=function(t){e.fireEvents("onBlur",t),e.clearDelayTimer(),e.isBlurToHide()&&e.delaySetPopupVisible(!1,e.props.blurDelay)},e.onContextMenu=function(t){t.preventDefault(),e.fireEvents("onContextMenu",t),e.setPopupVisible(!0,t)},e.onContextMenuClose=function(){e.isContextMenuToShow()&&e.close()},e.onClick=function(t){if(e.fireEvents("onClick",t),e.focusTime){var o;if(e.preClickTime&&e.preTouchTime?o=Math.min(e.preClickTime,e.preTouchTime):e.preClickTime?o=e.preClickTime:e.preTouchTime&&(o=e.preTouchTime),Math.abs(o-e.focusTime)<20)return;e.focusTime=0}e.preClickTime=0,e.preTouchTime=0,e.isClickToShow()&&(e.isClickToHide()||e.isBlurToHide())&&t&&t.preventDefault&&t.preventDefault();var a=!e.state.popupVisible;(e.isClickToHide()&&!a||a&&e.isClickToShow())&&e.setPopupVisible(!e.state.popupVisible,t)},e.onPopupMouseDown=function(){if(e.hasPopupMouseDown=!0,clearTimeout(e.mouseDownTimeout),e.mouseDownTimeout=window.setTimeout(function(){e.hasPopupMouseDown=!1},0),e.context){var t;(t=e.context).onPopupMouseDown.apply(t,arguments)}},e.onDocumentClick=function(t){if(!(e.props.mask&&!e.props.maskClosable)){var o=t.target,a=e.getRootDomNode(),d=e.getPopupDomNode();(!Y(a,o)||e.isContextMenuOnly())&&!Y(d,o)&&!e.hasPopupMouseDown&&e.close()}},e.getRootDomNode=function(){var t=e.props.getTriggerDOMNode;if(t)return t(e.triggerRef.current);try{var o=we(e.triggerRef.current);if(o)return o}catch(a){}return be.findDOMNode(Pe(e))},e.getPopupClassNameFromAlign=function(t){var o=[],a=e.props,d=a.popupPlacement,h=a.builtinPlacements,m=a.prefixCls,u=a.alignPoint,g=a.getPopupClassNameFromAlign;return d&&h&&o.push(He(h,m,t,u)),g&&o.push(g(t)),o.join(" ")},e.getComponent=function(){var t=e.props,o=t.prefixCls,a=t.destroyPopupOnHide,d=t.popupClassName,h=t.onPopupAlign,m=t.popupMotion,u=t.popupAnimation,g=t.popupTransitionName,M=t.popupStyle,b=t.mask,T=t.maskAnimation,N=t.maskTransitionName,H=t.maskMotion,V=t.zIndex,E=t.popup,_=t.stretch,L=t.alignPoint,$=t.mobile,z=t.forceRender,A=e.state,B=A.popupVisible,U=A.point,W=e.getPopupAlign(),S={};return e.isMouseEnterToShow()&&(S.onMouseEnter=e.onPopupMouseEnter),e.isMouseLeaveToHide()&&(S.onMouseLeave=e.onPopupMouseLeave),S.onMouseDown=e.onPopupMouseDown,S.onTouchStart=e.onPopupMouseDown,r.exports.createElement(ce,D({prefixCls:o,destroyPopupOnHide:a,visible:B,point:L&&U,className:d,align:W,onAlign:h,animation:u,getClassNameFromAlign:e.getPopupClassNameFromAlign},S,{stretch:_,getRootDomNode:e.getRootDomNode,style:M,mask:b,zIndex:V,transitionName:g,maskAnimation:T,maskTransitionName:N,maskMotion:H,ref:e.popupRef,motion:m,mobile:$,forceRender:z}),typeof E=="function"?E():E)},e.attachParent=function(t){w.cancel(e.attachId);var o=e.props,a=o.getPopupContainer,d=o.getDocument,h=e.getRootDomNode(),m;a?(h||a.length===0)&&(m=a(h)):m=d(e.getRootDomNode()).body,m?m.appendChild(t):e.attachId=w(function(){e.attachParent(t)})},e.getContainer=function(){if(!e.portalContainer){var t=e.props.getDocument,o=t(e.getRootDomNode()).createElement("div");o.style.position="absolute",o.style.top="0",o.style.left="0",o.style.width="100%",e.portalContainer=o}return e.attachParent(e.portalContainer),e.portalContainer},e.setPoint=function(t){var o=e.props.alignPoint;!o||!t||e.setState({point:{pageX:t.pageX,pageY:t.pageY}})},e.handlePortalUpdate=function(){e.state.prevPopupVisible!==e.state.popupVisible&&e.props.afterPopupVisibleChange(e.state.popupVisible)},e.triggerContextValue={onPopupMouseDown:e.onPopupMouseDown};var i;return"popupVisible"in s?i=!!s.popupVisible:i=!!s.defaultPopupVisible,e.state={prevPopupVisible:i,popupVisible:i},ze.forEach(function(t){e["fire".concat(t)]=function(o){e.fireEvents(t,o)}}),e}return ye(f,[{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var e=this.props,i=this.state;if(i.popupVisible){var t;!this.clickOutsideHandler&&(this.isClickToHide()||this.isContextMenuToShow())&&(t=e.getDocument(this.getRootDomNode()),this.clickOutsideHandler=I(t,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(t=t||e.getDocument(this.getRootDomNode()),this.touchOutsideHandler=I(t,"touchstart",this.onDocumentClick)),!this.contextMenuOutsideHandler1&&this.isContextMenuToShow()&&(t=t||e.getDocument(this.getRootDomNode()),this.contextMenuOutsideHandler1=I(t,"scroll",this.onContextMenuClose)),!this.contextMenuOutsideHandler2&&this.isContextMenuToShow()&&(this.contextMenuOutsideHandler2=I(window,"blur",this.onContextMenuClose));return}this.clearOutsideHandler()}},{key:"componentWillUnmount",value:function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout),w.cancel(this.attachId)}},{key:"getPopupDomNode",value:function(){var e;return((e=this.popupRef.current)===null||e===void 0?void 0:e.getElement())||null}},{key:"getPopupAlign",value:function(){var e=this.props,i=e.popupPlacement,t=e.popupAlign,o=e.builtinPlacements;return i&&o?Re(o,i,t):t}},{key:"setPopupVisible",value:function(e,i){var t=this.props.alignPoint,o=this.state.popupVisible;this.clearDelayTimer(),o!==e&&("popupVisible"in this.props||this.setState({popupVisible:e,prevPopupVisible:o}),this.props.onPopupVisibleChange(e)),t&&i&&e&&this.setPoint(i)}},{key:"delaySetPopupVisible",value:function(e,i,t){var o=this,a=i*1e3;if(this.clearDelayTimer(),a){var d=t?{pageX:t.pageX,pageY:t.pageY}:null;this.delayTimer=window.setTimeout(function(){o.setPopupVisible(e,d),o.clearDelayTimer()},a)}else this.setPopupVisible(e,t)}},{key:"clearDelayTimer",value:function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)}},{key:"clearOutsideHandler",value:function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextMenuOutsideHandler1&&(this.contextMenuOutsideHandler1.remove(),this.contextMenuOutsideHandler1=null),this.contextMenuOutsideHandler2&&(this.contextMenuOutsideHandler2.remove(),this.contextMenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)}},{key:"createTwoChains",value:function(e){var i=this.props.children.props,t=this.props;return i[e]&&t[e]?this["fire".concat(e)]:i[e]||t[e]}},{key:"isClickToShow",value:function(){var e=this.props,i=e.action,t=e.showAction;return i.indexOf("click")!==-1||t.indexOf("click")!==-1}},{key:"isContextMenuOnly",value:function(){var e=this.props.action;return e==="contextMenu"||e.length===1&&e[0]==="contextMenu"}},{key:"isContextMenuToShow",value:function(){var e=this.props,i=e.action,t=e.showAction;return i.indexOf("contextMenu")!==-1||t.indexOf("contextMenu")!==-1}},{key:"isClickToHide",value:function(){var e=this.props,i=e.action,t=e.hideAction;return i.indexOf("click")!==-1||t.indexOf("click")!==-1}},{key:"isMouseEnterToShow",value:function(){var e=this.props,i=e.action,t=e.showAction;return i.indexOf("hover")!==-1||t.indexOf("mouseEnter")!==-1}},{key:"isMouseLeaveToHide",value:function(){var e=this.props,i=e.action,t=e.hideAction;return i.indexOf("hover")!==-1||t.indexOf("mouseLeave")!==-1}},{key:"isFocusToShow",value:function(){var e=this.props,i=e.action,t=e.showAction;return i.indexOf("focus")!==-1||t.indexOf("focus")!==-1}},{key:"isBlurToHide",value:function(){var e=this.props,i=e.action,t=e.hideAction;return i.indexOf("focus")!==-1||t.indexOf("blur")!==-1}},{key:"forcePopupAlign",value:function(){if(this.state.popupVisible){var e;(e=this.popupRef.current)===null||e===void 0||e.forceAlign()}}},{key:"fireEvents",value:function(e,i){var t=this.props.children.props[e];t&&t(i);var o=this.props[e];o&&o(i)}},{key:"close",value:function(){this.setPopupVisible(!1)}},{key:"render",value:function(){var e=this.state.popupVisible,i=this.props,t=i.children,o=i.forceRender,a=i.alignPoint,d=i.className,h=i.autoDestroy,m=r.exports.Children.only(t),u={key:"trigger"};this.isContextMenuToShow()?u.onContextMenu=this.onContextMenu:u.onContextMenu=this.createTwoChains("onContextMenu"),this.isClickToHide()||this.isClickToShow()?(u.onClick=this.onClick,u.onMouseDown=this.onMouseDown,u.onTouchStart=this.onTouchStart):(u.onClick=this.createTwoChains("onClick"),u.onMouseDown=this.createTwoChains("onMouseDown"),u.onTouchStart=this.createTwoChains("onTouchStart")),this.isMouseEnterToShow()?(u.onMouseEnter=this.onMouseEnter,a&&(u.onMouseMove=this.onMouseMove)):u.onMouseEnter=this.createTwoChains("onMouseEnter"),this.isMouseLeaveToHide()?u.onMouseLeave=this.onMouseLeave:u.onMouseLeave=this.createTwoChains("onMouseLeave"),this.isFocusToShow()||this.isBlurToHide()?(u.onFocus=this.onFocus,u.onBlur=this.onBlur):(u.onFocus=this.createTwoChains("onFocus"),u.onBlur=this.createTwoChains("onBlur"));var g=F(m&&m.props&&m.props.className,d);g&&(u.className=g);var M=x({},u);De(m)&&(M.ref=Ne(this.triggerRef,m.ref));var b=r.exports.cloneElement(m,M),T;return(e||this.popupRef.current||o)&&(T=r.exports.createElement(n,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},this.getComponent())),!e&&h&&(T=null),r.exports.createElement(ae.Provider,{value:this.triggerContextValue},b,T)}}],[{key:"getDerivedStateFromProps",value:function(e,i){var t=e.popupVisible,o={};return t!==void 0&&i.popupVisible!==t&&(o.popupVisible=t,o.prevPopupVisible=i.popupVisible),o}}]),f}(r.exports.Component);return p.contextType=ae,p.defaultProps={prefixCls:"rc-trigger-popup",getPopupClassNameFromAlign:Fe,getDocument:$e,onPopupVisibleChange:q,afterPopupVisibleChange:q,onPopupAlign:q,popupClassName:"",mouseEnterDelay:0,mouseLeaveDelay:.1,focusDelay:0,blurDelay:.15,popupStyle:{},destroyPopupOnHide:!1,popupAlign:{},defaultPopupVisible:!1,mask:!1,maskClosable:!0,action:[],showAction:[],hideAction:[],autoDestroy:!1},p}var Qe=Be(Ee);export{Qe as T};

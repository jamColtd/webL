import{e as K,f as S,g as $,i as R,j as g,d as D,c as U,k as E,a as x,b as j}from"./@babel-ee6b9e1a.js";import{r as d}from"./react-58122654.js";import{r as O,g as L}from"./rc-util-852b41a6.js";import{c as T}from"./classnames-d3968fd4.js";import{a as W}from"./rc-motion-2d8059f1.js";import{R as V}from"./react-dom-694a72f5.js";var _=function(k){K(v,k);var h=S(v);function v(){var e;$(this,v);for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return e=h.call.apply(h,[this].concat(r)),e.closeTimer=null,e.close=function(c){c&&c.stopPropagation(),e.clearCloseTimer();var l=e.props,u=l.onClose,s=l.noticeKey;u&&u(s)},e.startCloseTimer=function(){e.props.duration&&(e.closeTimer=window.setTimeout(function(){e.close()},e.props.duration*1e3))},e.clearCloseTimer=function(){e.closeTimer&&(clearTimeout(e.closeTimer),e.closeTimer=null)},e}return R(v,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(n){(this.props.duration!==n.duration||this.props.updateMark!==n.updateMark||this.props.visible!==n.visible&&this.props.visible)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var n=this,r=this.props,t=r.prefixCls,c=r.className,l=r.closable,u=r.closeIcon,s=r.style,p=r.onClick,a=r.children,i=r.holder,o="".concat(t,"-notice"),f=Object.keys(this.props).reduce(function(y,m){return(m.substr(0,5)==="data-"||m.substr(0,5)==="aria-"||m==="role")&&(y[m]=n.props[m]),y},{}),C=d.exports.createElement("div",g({className:T(o,c,D({},"".concat(o,"-closable"),l)),style:s,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:p},f),d.exports.createElement("div",{className:"".concat(o,"-content")},a),l?d.exports.createElement("a",{tabIndex:0,onClick:this.close,className:"".concat(o,"-close")},u||d.exports.createElement("span",{className:"".concat(o,"-close-x")})):null);return i?V.createPortal(C,i):C}}]),v}(d.exports.Component);_.defaultProps={onClose:function(){},duration:1.5};function F(k){var h=d.exports.useRef({}),v=d.exports.useState([]),e=U(v,2),n=e[0],r=e[1];function t(c){var l=!0;k.add(c,function(u,s){var p=s.key;if(u&&(!h.current[p]||l)){var a=d.exports.createElement(_,g({},s,{holder:u}));h.current[p]=a,r(function(i){var o=i.findIndex(function(C){return C.key===s.key});if(o===-1)return[].concat(E(i),[a]);var f=E(i);return f[o]=a,f})}l=!1})}return[t,d.exports.createElement(d.exports.Fragment,null,n)]}var q=["getContainer"],I=0,z=Date.now();function w(){var k=I;return I+=1,"rcNotification_".concat(z,"_").concat(k)}var M=function(k){K(v,k);var h=S(v);function v(){var e;$(this,v);for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return e=h.call.apply(h,[this].concat(r)),e.state={notices:[]},e.hookRefs=new Map,e.add=function(c,l){var u=c.key||w(),s=x(x({},c),{},{key:u}),p=e.props.maxCount;e.setState(function(a){var i=a.notices,o=i.map(function(C){return C.notice.key}).indexOf(u),f=i.concat();return o!==-1?f.splice(o,1,{notice:s,holderCallback:l}):(p&&i.length>=p&&(s.key=f[0].notice.key,s.updateMark=w(),s.userPassKey=u,f.shift()),f.push({notice:s,holderCallback:l})),{notices:f}})},e.remove=function(c){e.setState(function(l){var u=l.notices;return{notices:u.filter(function(s){var p=s.notice,a=p.key,i=p.userPassKey,o=i||a;return o!==c})}})},e.noticePropsMap={},e}return R(v,[{key:"getTransitionName",value:function(){var n=this.props,r=n.prefixCls,t=n.animation,c=this.props.transitionName;return!c&&t&&(c="".concat(r,"-").concat(t)),c}},{key:"render",value:function(){var n=this,r=this.state.notices,t=this.props,c=t.prefixCls,l=t.className,u=t.closeIcon,s=t.style,p=[];return r.forEach(function(a,i){var o=a.notice,f=a.holderCallback,C=i===r.length-1?o.updateMark:void 0,y=o.key,m=o.userPassKey,b=x(x(x({prefixCls:c,closeIcon:u},o),o.props),{},{key:y,noticeKey:m||y,updateMark:C,onClose:function(N){var P;n.remove(N),(P=o.onClose)===null||P===void 0||P.call(o)},onClick:o.onClick,children:o.content});p.push(y),n.noticePropsMap[y]={props:b,holderCallback:f}}),d.exports.createElement("div",{className:T(c,l),style:s},d.exports.createElement(W,{keys:p,motionName:this.getTransitionName(),onVisibleChanged:function(i,o){var f=o.key;i||delete n.noticePropsMap[f]}},function(a){var i=a.key,o=a.className,f=a.style,C=a.visible,y=n.noticePropsMap[i],m=y.props,b=y.holderCallback;return b?d.exports.createElement("div",{key:i,className:T(o,"".concat(c,"-hook-holder")),style:x({},f),ref:function(N){typeof i!="undefined"&&(N?(n.hookRefs.set(i,N),b(N,m)):n.hookRefs.delete(i))}}):d.exports.createElement(_,g({},m,{className:T(o,m==null?void 0:m.className),style:x(x({},f),m==null?void 0:m.style),visible:C}))}))}}]),v}(d.exports.Component);M.newInstance=void 0;M.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}};M.newInstance=function(h,v){var e=h||{},n=e.getContainer,r=j(e,q),t=document.createElement("div");if(n){var c=n();c.appendChild(t)}else document.body.appendChild(t);var l=!1;function u(s){l||(l=!0,v({notice:function(a){s.add(a)},removeNotice:function(a){s.remove(a)},component:s,destroy:function(){L(t),t.parentNode&&t.parentNode.removeChild(t)},useNotification:function(){return F(s)}}))}O(d.exports.createElement(M,g({},r,{ref:u})),t)};export{M as N,F as u};

System.register(["./@babel-legacy-55346a6e.js","./react-legacy-700da723.js","./rc-util-legacy-608bab30.js","./classnames-legacy-fbfdb612.js"],(function(e){"use strict";var n,t,r,o,i,a,u,c,s,f,l,v,p,d,m,y,E,h;return{setters:[function(e){n=e._,t=e.c,r=e.d,o=e.a,i=e.e,a=e.f,u=e.g,c=e.i,s=e.b,f=e.j},function(e){l=e.r},function(e){v=e.c,p=e.d,d=e.f,m=e.x,y=e.s,E=e.y},function(e){h=e.c}],execute:function(){function k(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit".concat(e)]="webkit".concat(n),t["Moz".concat(e)]="moz".concat(n),t["ms".concat(e)]="MS".concat(n),t["O".concat(e)]="o".concat(n.toLowerCase()),t}var x,b,g,L=(x=v(),b="undefined"!=typeof window?window:{},g={animationend:k("Animation","AnimationEnd"),transitionend:k("Transition","TransitionEnd")},x&&("AnimationEvent"in b||delete g.animationend.animation,"TransitionEvent"in b||delete g.transitionend.transition),g),A={};if(v()){var C=document.createElement("div");A=C.style}var S={};function w(e){if(S[e])return S[e];var n=L[e];if(n)for(var t=Object.keys(n),r=t.length,o=0;o<r;o+=1){var i=t[o];if(Object.prototype.hasOwnProperty.call(n,i)&&i in A)return S[e]=n[i],S[e]}return""}var R=w("animationend"),j=w("transitionend"),P=!(!R||!j),N=R||"animationend",O=j||"transitionend";function T(e,t){return e?"object"===n(e)?e[t.replace(/-\w/g,(function(e){return e[1].toUpperCase()}))]:"".concat(e,"-").concat(t):null}var M="none",V="appear",D="enter",z="leave",F="none",I="prepare",K="start",H="active",U="end",W=v()?l.exports.useLayoutEffect:l.exports.useEffect,_=[I,K,H,U];function q(e){return e===H||e===U}var B=function(e,n){var r=d(F),o=t(r,2),i=o[0],a=o[1],u=function(){var e=l.exports.useRef(null);function n(){p.cancel(e.current)}return l.exports.useEffect((function(){return function(){n()}}),[]),[function t(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;n();var i=p((function(){o<=1?r({isCanceled:function(){return i!==e.current}}):t(r,o-1)}));e.current=i},n]}(),c=t(u,2),s=c[0],f=c[1];return W((function(){if(i!==F&&i!==U){var e=_.indexOf(i),t=_[e+1],r=n(i);!1===r?a(t,!0):s((function(e){function n(){e.isCanceled()||a(t,!0)}!0===r?n():Promise.resolve(r).then(n)}))}}),[e,i]),l.exports.useEffect((function(){return function(){f()}}),[]),[function(){a(I,!0)},i]};function G(e,n,i,a){var u=a.motionEnter,c=void 0===u||u,s=a.motionAppear,f=void 0===s||s,v=a.motionLeave,p=void 0===v||v,m=a.motionDeadline,y=a.motionLeaveImmediately,E=a.onAppearPrepare,h=a.onEnterPrepare,k=a.onLeavePrepare,x=a.onAppearStart,b=a.onEnterStart,g=a.onLeaveStart,L=a.onAppearActive,A=a.onEnterActive,C=a.onLeaveActive,S=a.onAppearEnd,w=a.onEnterEnd,R=a.onLeaveEnd,j=a.onVisibleChanged,P=d(),T=t(P,2),F=T[0],U=T[1],_=d(M),G=t(_,2),J=G[0],Q=G[1],X=d(null),Y=t(X,2),Z=Y[0],$=Y[1],ee=l.exports.useRef(!1),ne=l.exports.useRef(null);function te(){return i()}var re=l.exports.useRef(!1);function oe(e){var n=te();if(!e||e.deadline||e.target===n){var t,r=re.current;J===V&&r?t=null==S?void 0:S(n,e):J===D&&r?t=null==w?void 0:w(n,e):J===z&&r&&(t=null==R?void 0:R(n,e)),J!==M&&r&&!1!==t&&(Q(M,!0),$(null,!0))}}var ie=function(e){var n=l.exports.useRef(),t=l.exports.useRef(e);t.current=e;var r=l.exports.useCallback((function(e){t.current(e)}),[]);function o(e){e&&(e.removeEventListener(O,r),e.removeEventListener(N,r))}return l.exports.useEffect((function(){return function(){o(n.current)}}),[]),[function(e){n.current&&n.current!==e&&o(n.current),e&&e!==n.current&&(e.addEventListener(O,r),e.addEventListener(N,r),n.current=e)},o]}(oe),ae=t(ie,1)[0],ue=l.exports.useMemo((function(){var e,n,t;switch(J){case V:return r(e={},I,E),r(e,K,x),r(e,H,L),e;case D:return r(n={},I,h),r(n,K,b),r(n,H,A),n;case z:return r(t={},I,k),r(t,K,g),r(t,H,C),t;default:return{}}}),[J]),ce=B(J,(function(e){if(e===I){var n=ue.prepare;return!!n&&n(te())}var t;return le in ue&&$((null===(t=ue[le])||void 0===t?void 0:t.call(ue,te(),null))||null),le===H&&(ae(te()),m>0&&(clearTimeout(ne.current),ne.current=setTimeout((function(){oe({deadline:!0})}),m))),!0})),se=t(ce,2),fe=se[0],le=se[1],ve=q(le);re.current=ve,W((function(){U(n);var t,r=ee.current;ee.current=!0,e&&(!r&&n&&f&&(t=V),r&&n&&c&&(t=D),(r&&!n&&p||!r&&y&&!n&&p)&&(t=z),t&&(Q(t),fe()))}),[n]),l.exports.useEffect((function(){(J===V&&!f||J===D&&!c||J===z&&!p)&&Q(M)}),[f,c,p]),l.exports.useEffect((function(){return function(){ee.current=!1,clearTimeout(ne.current)}}),[]),l.exports.useEffect((function(){void 0!==F&&J===M&&(null==j||j(F))}),[F,J]);var pe=Z;return ue.prepare&&le===K&&(pe=o({transition:"none"},pe)),[J,le,pe,null!=F?F:n]}var J=function(e){i(t,e);var n=a(t);function t(){return u(this,t),n.apply(this,arguments)}return c(t,[{key:"render",value:function(){return this.props.children}}]),t}(l.exports.Component),Q=e("C",function(e){var i=e;function a(e){return!(!e.motionName||!i)}"object"===n(e)&&(i=e.transitionSupport);var u=l.exports.forwardRef((function(e,n){var i=e.visible,u=void 0===i||i,c=e.removeOnLeave,s=void 0===c||c,f=e.forceRender,v=e.children,p=e.motionName,d=e.leavedClassName,k=e.eventProps,x=a(e),b=l.exports.useRef(),g=l.exports.useRef(),L=G(x,u,(function(){try{return b.current instanceof HTMLElement?b.current:E(g.current)}catch(e){return null}}),e),A=t(L,4),C=A[0],S=A[1],w=A[2],R=A[3],j=l.exports.useRef(R);R&&(j.current=!0);var P,N=l.exports.useCallback((function(e){b.current=e,m(n,e)}),[n]),O=o(o({},k),{},{visible:u});if(v)if(C!==M&&a(e)){var V,D;S===I?D="prepare":q(S)?D="active":S===K&&(D="start"),P=v(o(o({},O),{},{className:h(T(p,C),(V={},r(V,T(p,"".concat(C,"-").concat(D)),D),r(V,p,"string"==typeof p),V)),style:w}),N)}else P=R?v(o({},O),N):!s&&j.current?v(o(o({},O),{},{className:d}),N):f?v(o(o({},O),{},{style:{display:"none"}}),N):null;else P=null;return l.exports.isValidElement(P)&&y(P)&&(P.ref||(P=l.exports.cloneElement(P,{ref:N}))),l.exports.createElement(J,{ref:g},P)}));return u.displayName="CSSMotion",u}(P)),X="add",Y="keep",Z="remove",$="removed";function ee(e){var t;return t=e&&"object"===n(e)&&"key"in e?e:{key:e},o(o({},t),{},{key:String(t.key)})}function ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map(ee)}function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=[],r=0,i=n.length,a=ne(e),u=ne(n);a.forEach((function(e){for(var n=!1,a=r;a<i;a+=1){var c=u[a];if(c.key===e.key){r<a&&(t=t.concat(u.slice(r,a).map((function(e){return o(o({},e),{},{status:X})}))),r=a),t.push(o(o({},c),{},{status:Y})),r+=1,n=!0;break}}n||t.push(o(o({},e),{},{status:Z}))})),r<i&&(t=t.concat(u.slice(r).map((function(e){return o(o({},e),{},{status:X})}))));var c={};t.forEach((function(e){var n=e.key;c[n]=(c[n]||0)+1}));var s=Object.keys(c).filter((function(e){return c[e]>1}));return s.forEach((function(e){(t=t.filter((function(n){var t=n.key,r=n.status;return t!==e||r!==Z}))).forEach((function(n){n.key===e&&(n.status=Y)}))})),t}var re=["component","children","onVisibleChanged","onAllRemoved"],oe=["status"],ie=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];e("a",function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Q,t=function(e){i(r,e);var t=a(r);function r(){var e;u(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={keyEntities:[]},e.removeKey=function(n){var t=e.state.keyEntities.map((function(e){return e.key!==n?e:o(o({},e),{},{status:$})}));return e.setState({keyEntities:t}),t.filter((function(e){return e.status!==$})).length},e}return c(r,[{key:"render",value:function(){var e=this,t=this.state.keyEntities,r=this.props,o=r.component,i=r.children,a=r.onVisibleChanged,u=r.onAllRemoved,c=s(r,re),v=o||l.exports.Fragment,p={};return ie.forEach((function(e){p[e]=c[e],delete c[e]})),delete c.keys,l.exports.createElement(v,c,t.map((function(t){var r=t.status,o=s(t,oe),c=r===X||r===Y;return l.exports.createElement(n,f({},p,{key:o.key,visible:c,eventProps:o,onVisibleChanged:function(n){null==a||a(n,{key:o.key}),n||0===e.removeKey(o.key)&&u&&u()}}),i)})))}}],[{key:"getDerivedStateFromProps",value:function(e,n){var t=e.keys,r=n.keyEntities,o=ne(t);return{keyEntities:te(r,o).filter((function(e){var n=r.find((function(n){var t=n.key;return e.key===t}));return!n||n.status!==$||e.status!==Z}))}}}]),r}(l.exports.Component);return t.defaultProps={component:"div"},t}(P))}}}));
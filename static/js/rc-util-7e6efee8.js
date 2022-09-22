import{a as w,_ as X,n as Te,k as R,p as ve,r as M,c as Z,i as ge,g as he,e as Le,f as Ae}from"./@babel-ee6b9e1a.js";import{R as Oe,r as d,a as Ue}from"./react-58122654.js";import{R as T,a as ke}from"./react-dom-694a72f5.js";function vn(e,n){var t=w({},e);return Array.isArray(n)&&n.forEach(function(r){delete t[r]}),t}var J={exports:{}},f={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=typeof Symbol=="function"&&Symbol.for,ee=m?Symbol.for("react.element"):60103,ne=m?Symbol.for("react.portal"):60106,A=m?Symbol.for("react.fragment"):60107,O=m?Symbol.for("react.strict_mode"):60108,U=m?Symbol.for("react.profiler"):60114,k=m?Symbol.for("react.provider"):60109,P=m?Symbol.for("react.context"):60110,te=m?Symbol.for("react.async_mode"):60111,I=m?Symbol.for("react.concurrent_mode"):60111,x=m?Symbol.for("react.forward_ref"):60112,D=m?Symbol.for("react.suspense"):60113,Pe=m?Symbol.for("react.suspense_list"):60120,$=m?Symbol.for("react.memo"):60115,F=m?Symbol.for("react.lazy"):60116,Ie=m?Symbol.for("react.block"):60121,xe=m?Symbol.for("react.fundamental"):60117,De=m?Symbol.for("react.responder"):60118,$e=m?Symbol.for("react.scope"):60119;function v(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case ee:switch(e=e.type,e){case te:case I:case A:case U:case O:case D:return e;default:switch(e=e&&e.$$typeof,e){case P:case x:case F:case $:case k:return e;default:return n}}case ne:return n}}}function Ee(e){return v(e)===I}f.AsyncMode=te;f.ConcurrentMode=I;f.ContextConsumer=P;f.ContextProvider=k;f.Element=ee;f.ForwardRef=x;f.Fragment=A;f.Lazy=F;f.Memo=$;f.Portal=ne;f.Profiler=U;f.StrictMode=O;f.Suspense=D;f.isAsyncMode=function(e){return Ee(e)||v(e)===te};f.isConcurrentMode=Ee;f.isContextConsumer=function(e){return v(e)===P};f.isContextProvider=function(e){return v(e)===k};f.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ee};f.isForwardRef=function(e){return v(e)===x};f.isFragment=function(e){return v(e)===A};f.isLazy=function(e){return v(e)===F};f.isMemo=function(e){return v(e)===$};f.isPortal=function(e){return v(e)===ne};f.isProfiler=function(e){return v(e)===U};f.isStrictMode=function(e){return v(e)===O};f.isSuspense=function(e){return v(e)===D};f.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===A||e===I||e===U||e===O||e===D||e===Pe||typeof e=="object"&&e!==null&&(e.$$typeof===F||e.$$typeof===$||e.$$typeof===k||e.$$typeof===P||e.$$typeof===x||e.$$typeof===xe||e.$$typeof===De||e.$$typeof===$e||e.$$typeof===Ie)};f.typeOf=v;J.exports=f;function ie(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=[];return Oe.Children.forEach(e,function(r){r==null&&!n.keepEmpty||(Array.isArray(r)?t=t.concat(ie(r)):J.exports.isFragment(r)&&r.props?t=t.concat(ie(r.props.children,n)):t.push(r))}),t}var ce={};function Fe(e,n){}function Ke(e,n,t){!n&&!ce[t]&&(e(!1,t),ce[t]=!0)}function gn(e,n){Ke(Fe,e,n)}function hn(e,n,t){var r=d.exports.useRef({});return(!("value"in r.current)||t(r.current.condition,n))&&(r.current.value=e(),r.current.condition=n),r.current.value}function We(e,n){typeof e=="function"?e(n):X(e)==="object"&&e&&"current"in e&&(e.current=n)}function En(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n.filter(function(o){return o});return r.length<=1?r[0]:function(o){n.forEach(function(a){We(a,o)})}}function yn(e){var n,t,r=J.exports.isMemo(e)?e.type.type:e.type;return!(typeof r=="function"&&!(!((n=r.prototype)===null||n===void 0)&&n.render)||typeof e=="function"&&!(!((t=e.prototype)===null||t===void 0)&&t.render))}function Cn(e){return e instanceof HTMLElement?e:T.findDOMNode(e)}function He(e,n){for(var t=e,r=0;r<n.length;r+=1){if(t==null)return;t=t[n[r]]}return t}function ye(e,n,t,r){if(!n.length)return t;var o=Te(n),a=o[0],i=o.slice(1),u;return!e&&typeof a=="number"?u=[]:Array.isArray(e)?u=R(e):u=w({},e),r&&t===void 0&&i.length===1?delete u[a][i[0]]:u[a]=ye(u[a],i,t,r),u}function Sn(e,n,t){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return n.length&&r&&t===void 0&&!He(e,n.slice(0,-1))?e:ye(e,n,t,r)}var b=w({},ke),Be=b.version,ze=b.render,je=b.unmountComponentAtNode,K;try{var Ge=Number((Be||"").split(".")[0]);Ge>=18&&(K=b.createRoot)}catch(e){}function se(e){var n=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;n&&X(n)==="object"&&(n.usingClientEntryPoint=e)}var L="__rc_react_root__";function Ve(e,n){se(!0);var t=n[L]||K(n);se(!1),t.render(e),n[L]=t}function qe(e,n){ze(e,n)}function _n(e,n){if(K){Ve(e,n);return}qe(e,n)}function Ye(e){return V.apply(this,arguments)}function V(){return V=ve(M.mark(function e(n){return M.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Promise.resolve().then(function(){var o;(o=n[L])===null||o===void 0||o.unmount(),delete n[L]}));case 1:case"end":return r.stop()}},e)})),V.apply(this,arguments)}function Qe(e){je(e)}function wn(e){return q.apply(this,arguments)}function q(){return q=ve(M.mark(function e(n){return M.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(K===void 0){r.next=2;break}return r.abrupt("return",Ye(n));case 2:Qe(n);case 3:case"end":return r.stop()}},e)})),q.apply(this,arguments)}function W(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}function Xe(e){var n=d.exports.useRef(!1),t=d.exports.useState(e),r=Z(t,2),o=r[0],a=r[1];d.exports.useEffect(function(){return n.current=!1,function(){n.current=!0}},[]);function i(u,s){s&&n.current||a(u)}return[o,i]}var Ce=function(n){return+setTimeout(n,16)},Se=function(n){return clearTimeout(n)};typeof window!="undefined"&&"requestAnimationFrame"in window&&(Ce=function(n){return window.requestAnimationFrame(n)},Se=function(n){return window.cancelAnimationFrame(n)});var ue=0,re=new Map;function _e(e){re.delete(e)}function Y(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;ue+=1;var t=ue;function r(o){if(o===0)_e(t),e();else{var a=Ce(function(){r(o-1)});re.set(t,a)}}return r(n),t}Y.cancel=function(e){var n=re.get(e);return _e(n),Se(n)};var Ze="rc-util-key";function we(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.mark;return n?n.startsWith("data-")?n:"data-".concat(n):Ze}function oe(e){if(e.attachTo)return e.attachTo;var n=document.querySelector("head");return n||document.body}function le(e){var n,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!W())return null;var r=document.createElement("style");if(!((n=t.csp)===null||n===void 0)&&n.nonce){var o;r.nonce=(o=t.csp)===null||o===void 0?void 0:o.nonce}r.innerHTML=e;var a=oe(t),i=a.firstChild;return t.prepend&&a.prepend?a.prepend(r):t.prepend&&i?a.insertBefore(r,i):a.appendChild(r),r}var Q=new Map;function Je(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=oe(n);return Array.from(Q.get(t).children).find(function(r){return r.tagName==="STYLE"&&r.getAttribute(we(n))===e})}function bn(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=oe(t);if(!Q.has(r)){var o=le("",t),a=o.parentNode;Q.set(r,a),a.removeChild(o)}var i=Je(n,t);if(i){var u,s;if(((u=t.csp)===null||u===void 0?void 0:u.nonce)&&i.nonce!==((s=t.csp)===null||s===void 0?void 0:s.nonce)){var l;i.nonce=(l=t.csp)===null||l===void 0?void 0:l.nonce}return i.innerHTML!==e&&(i.innerHTML=e),i}var p=le(e,t);return p.setAttribute(we(t),n),p}function Nn(e,n,t,r){var o=T.unstable_batchedUpdates?function(i){T.unstable_batchedUpdates(t,i)}:t;return e.addEventListener&&e.addEventListener(n,o,r),{remove:function(){e.removeEventListener&&e.removeEventListener(n,o)}}}function Rn(e,n){var t=n||{},r=t.defaultValue,o=t.value,a=t.onChange,i=t.postState,u=Xe(function(){return o!==void 0?o:r!==void 0?typeof r=="function"?r():r:typeof e=="function"?e():e}),s=Z(u,2),l=s[0],p=s[1],h=o!==void 0?o:l;i&&(h=i(h));var y=d.exports.useRef(a);y.current=a;var Re=d.exports.useCallback(function(H,Me){p(H,Me),h!==H&&y.current&&y.current(H,h)},[h,y]),ae=d.exports.useRef(o);return d.exports.useEffect(function(){o===void 0&&o!==ae.current&&p(o),ae.current=o},[o]),[h,Re]}var c={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(n){var t=n.keyCode;if(n.altKey&&!n.ctrlKey||n.metaKey||t>=c.F1&&t<=c.F12)return!1;switch(t){case c.ALT:case c.CAPS_LOCK:case c.CONTEXT_MENU:case c.CTRL:case c.DOWN:case c.END:case c.ESC:case c.HOME:case c.INSERT:case c.LEFT:case c.MAC_FF_META:case c.META:case c.NUMLOCK:case c.NUM_CENTER:case c.PAGE_DOWN:case c.PAGE_UP:case c.PAUSE:case c.PRINT_SCREEN:case c.RIGHT:case c.SHIFT:case c.UP:case c.WIN_KEY:case c.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(n){if(n>=c.ZERO&&n<=c.NINE||n>=c.NUM_ZERO&&n<=c.NUM_MULTIPLY||n>=c.A&&n<=c.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&n===0)return!0;switch(n){case c.SPACE:case c.QUESTION_MARK:case c.NUM_PLUS:case c.NUM_MINUS:case c.NUM_PERIOD:case c.NUM_DIVISION:case c.SEMICOLON:case c.DASH:case c.EQUALS:case c.COMMA:case c.PERIOD:case c.SLASH:case c.APOSTROPHE:case c.SINGLE_QUOTE:case c.OPEN_SQUARE_BRACKET:case c.BACKSLASH:case c.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},Mn=function(){if(typeof navigator=="undefined"||typeof window=="undefined")return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return!!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e==null?void 0:e.substr(0,4)))},Tn=W()?d.exports.useLayoutEffect:d.exports.useEffect;function Ln(e,n){return e?e.contains(n):!1}var en=d.exports.forwardRef(function(e,n){var t=e.didUpdate,r=e.getContainer,o=e.children,a=d.exports.useRef(),i=d.exports.useRef();d.exports.useImperativeHandle(n,function(){return{}});var u=d.exports.useRef(!1);return!u.current&&W()&&(i.current=r(),a.current=i.current.parentNode,u.current=!0),d.exports.useEffect(function(){t==null||t(e)}),d.exports.useEffect(function(){return i.current.parentNode===null&&a.current!==null&&a.current.appendChild(i.current),function(){var s,l;(s=i.current)===null||s===void 0||(l=s.parentNode)===null||l===void 0||l.removeChild(i.current)}},[]),i.current?T.createPortal(o,i.current):null}),nn=function(e){if(!e)return!1;if(e.offsetParent)return!0;if(e.getBBox){var n=e.getBBox();if(n.width||n.height)return!0}if(e.getBoundingClientRect){var t=e.getBoundingClientRect();if(t.width||t.height)return!0}return!1},tn=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,rn=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,on="".concat(tn," ").concat(rn).split(/[\s\n]+/),an="aria-",cn="data-";function fe(e,n){return e.indexOf(n)===0}function An(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t;n===!1?t={aria:!0,data:!0,attr:!0}:n===!0?t={aria:!0}:t=w({},n);var r={};return Object.keys(e).forEach(function(o){(t.aria&&(o==="role"||fe(o,an))||t.data&&fe(o,cn)||t.attr&&on.includes(o))&&(r[o]=e[o])}),r}function de(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(nn(e)){var t=e.nodeName.toLowerCase(),r=["input","select","textarea","button"].includes(t)||e.isContentEditable||t==="a"&&!!e.getAttribute("href"),o=e.getAttribute("tabindex"),a=Number(o),i=null;return o&&!Number.isNaN(a)?i=a:r&&i===null&&(i=0),r&&e.disabled&&(i=null),i!==null&&(i>=0||n&&i<0)}return!1}function On(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=R(e.querySelectorAll("*")).filter(function(r){return de(r,n)});return de(e,n)&&t.unshift(e),t}var B;function be(e){if(typeof document=="undefined")return 0;if(e||B===void 0){var n=document.createElement("div");n.style.width="100%",n.style.height="200px";var t=document.createElement("div"),r=t.style;r.position="absolute",r.top="0",r.left="0",r.pointerEvents="none",r.visibility="hidden",r.width="200px",r.height="150px",r.overflow="hidden",t.appendChild(n),document.body.appendChild(t);var o=n.offsetWidth;t.style.overflow="scroll";var a=n.offsetWidth;o===a&&(a=t.clientWidth),document.body.removeChild(t),B=o-a}return B}function S(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!e)return{};var t=n.element,r=t===void 0?document.body:t,o={},a=Object.keys(e);return a.forEach(function(i){o[i]=r.style[i]}),a.forEach(function(i){r.style[i]=e[i]}),o}function sn(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var z={},pe=function(e){if(!(!sn()&&!e)){var n="ant-scrolling-effect",t=new RegExp("".concat(n),"g"),r=document.body.className;if(e){if(!t.test(r))return;S(z),z={},document.body.className=r.replace(t,"").trim();return}var o=be();if(o&&(z=S({position:"relative",width:"calc(100% - ".concat(o,"px)")}),!t.test(r))){var a="".concat(r," ").concat(n);document.body.className=a.trim()}}},g=[],Ne="ant-scrolling-effect",j=new RegExp("".concat(Ne),"g"),un=0,G=new Map,ln=ge(function e(n){var t=this;he(this,e),this.lockTarget=void 0,this.options=void 0,this.getContainer=function(){var r;return(r=t.options)===null||r===void 0?void 0:r.container},this.reLock=function(r){var o=g.find(function(a){var i=a.target;return i===t.lockTarget});o&&t.unLock(),t.options=r,o&&(o.options=r,t.lock())},this.lock=function(){var r;if(!g.some(function(s){var l=s.target;return l===t.lockTarget})){if(g.some(function(s){var l,p=s.options;return(p==null?void 0:p.container)===((l=t.options)===null||l===void 0?void 0:l.container)})){g=[].concat(R(g),[{target:t.lockTarget,options:t.options}]);return}var o=0,a=((r=t.options)===null||r===void 0?void 0:r.container)||document.body;(a===document.body&&window.innerWidth-document.documentElement.clientWidth>0||a.scrollHeight>a.clientHeight)&&(o=be());var i=a.className;if(g.filter(function(s){var l,p=s.options;return(p==null?void 0:p.container)===((l=t.options)===null||l===void 0?void 0:l.container)}).length===0&&G.set(a,S({width:o!==0?"calc(100% - ".concat(o,"px)"):void 0,overflow:"hidden",overflowX:"hidden",overflowY:"hidden"},{element:a})),!j.test(i)){var u="".concat(i," ").concat(Ne);a.className=u.trim()}g=[].concat(R(g),[{target:t.lockTarget,options:t.options}])}},this.unLock=function(){var r,o=g.find(function(u){var s=u.target;return s===t.lockTarget});if(g=g.filter(function(u){var s=u.target;return s!==t.lockTarget}),!(!o||g.some(function(u){var s,l=u.options;return(l==null?void 0:l.container)===((s=o.options)===null||s===void 0?void 0:s.container)}))){var a=((r=t.options)===null||r===void 0?void 0:r.container)||document.body,i=a.className;!j.test(i)||(S(G.get(a),{element:a}),G.delete(a),a.className=a.className.replace(j,"").trim())}},this.lockTarget=un++,this.options=n}),E=0,_=W(),N={},C=function(n){if(!_)return null;if(n){if(typeof n=="string")return document.querySelectorAll(n)[0];if(typeof n=="function")return n();if(X(n)==="object"&&n instanceof window.HTMLElement)return n}return document.body},Un=function(e){Le(t,e);var n=Ae(t);function t(r){var o;return he(this,t),o=n.call(this,r),o.container=void 0,o.componentRef=d.exports.createRef(),o.rafId=void 0,o.scrollLocker=void 0,o.renderComponent=void 0,o.updateScrollLocker=function(a){var i=a||{},u=i.visible,s=o.props,l=s.getContainer,p=s.visible;p&&p!==u&&_&&C(l)!==o.scrollLocker.getContainer()&&o.scrollLocker.reLock({container:C(l)})},o.updateOpenCount=function(a){var i=a||{},u=i.visible,s=i.getContainer,l=o.props,p=l.visible,h=l.getContainer;p!==u&&_&&C(h)===document.body&&(p&&!u?E+=1:a&&(E-=1));var y=typeof h=="function"&&typeof s=="function";(y?h.toString()!==s.toString():h!==s)&&o.removeCurrentContainer()},o.attachToParent=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(a||o.container&&!o.container.parentNode){var i=C(o.props.getContainer);return i?(i.appendChild(o.container),!0):!1}return!0},o.getContainer=function(){return _?(o.container||(o.container=document.createElement("div"),o.attachToParent(!0)),o.setWrapperClassName(),o.container):null},o.setWrapperClassName=function(){var a=o.props.wrapperClassName;o.container&&a&&a!==o.container.className&&(o.container.className=a)},o.removeCurrentContainer=function(){var a,i;(a=o.container)===null||a===void 0||(i=a.parentNode)===null||i===void 0||i.removeChild(o.container)},o.switchScrollingEffect=function(){E===1&&!Object.keys(N).length?(pe(),N=S({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"})):E||(S(N),N={},pe(!0))},o.scrollLocker=new ln({container:C(r.getContainer)}),o}return ge(t,[{key:"componentDidMount",value:function(){var o=this;this.updateOpenCount(),this.attachToParent()||(this.rafId=Y(function(){o.forceUpdate()}))}},{key:"componentDidUpdate",value:function(o){this.updateOpenCount(o),this.updateScrollLocker(o),this.setWrapperClassName(),this.attachToParent()}},{key:"componentWillUnmount",value:function(){var o=this.props,a=o.visible,i=o.getContainer;_&&C(i)===document.body&&(E=a&&E?E-1:E),this.removeCurrentContainer(),Y.cancel(this.rafId)}},{key:"render",value:function(){var o=this.props,a=o.children,i=o.forceRender,u=o.visible,s=null,l={getOpenCount:function(){return E},getContainer:this.getContainer,switchScrollingEffect:this.switchScrollingEffect,scrollLocker:this.scrollLocker};return(i||u||this.componentRef.current)&&(s=d.exports.createElement(en,{getContainer:this.getContainer,ref:this.componentRef},a(l))),s}}]),t}(d.exports.Component);function kn(){var e=document.documentElement.clientWidth,n=window.innerHeight||document.documentElement.clientHeight;return{width:e,height:n}}function Pn(e){var n=e.getBoundingClientRect(),t=document.documentElement;return{left:n.left+(window.pageXOffset||t.scrollLeft)-(t.clientLeft||document.body.clientLeft||0),top:n.top+(window.pageYOffset||t.scrollTop)-(t.clientTop||document.body.clientTop||0)}}function fn(){var e=w({},Ue);return e.useId}var me=0;function In(e){var n=d.exports.useState("ssr-id"),t=Z(n,2),r=t[0],o=t[1],a=fn(),i=a==null?void 0:a();return d.exports.useEffect(function(){if(!a){var u=me;me+=1,o("rc_unique_".concat(u))}},[]),e||i||r}export{Mn as A,en as B,c as K,Un as P,hn as a,Rn as b,W as c,Y as d,En as e,Xe as f,wn as g,Ln as h,Nn as i,nn as j,In as k,He as l,Sn as m,kn as n,vn as o,An as p,Pn as q,_n as r,yn as s,ie as t,bn as u,On as v,gn as w,We as x,Cn as y,Tn as z};
import{e as O,f as S,g as D,i as L,a as k,j as $}from"./@babel-ee6b9e1a.js";import{r as t}from"./react-58122654.js";import{s as j,e as A,y as H,t as F}from"./rc-util-852b41a6.js";import{i as K}from"./resize-observer-polyfill-f68479a8.js";var c=new Map;function T(e){e.forEach(function(o){var r,n=o.target;(r=c.get(n))===null||r===void 0||r.forEach(function(i){return i(n)})})}var M=new K(T);function V(e,o){c.has(e)||(c.set(e,new Set),M.observe(e)),c.get(e).add(o)}function X(e,o){c.has(e)&&(c.get(e).delete(o),c.get(e).size||(M.unobserve(e),c.delete(e)))}var Y=function(e){O(r,e);var o=S(r);function r(){return D(this,r),o.apply(this,arguments)}return L(r,[{key:"render",value:function(){return this.props.children}}]),r}(t.exports.Component),g=t.exports.createContext(null);function q(e){var o=e.children,r=e.onBatchResize,n=t.exports.useRef(0),i=t.exports.useRef([]),s=t.exports.useContext(g),l=t.exports.useCallback(function(f,u,v){n.current+=1;var d=n.current;i.current.push({size:f,element:u,data:v}),Promise.resolve().then(function(){d===n.current&&(r==null||r(i.current),i.current=[])}),s==null||s(f,u,v)},[r,s]);return t.exports.createElement(g.Provider,{value:l},o)}function G(e){var o=e.children,r=e.disabled,n=t.exports.useRef(null),i=t.exports.useRef(null),s=t.exports.useContext(g),l=typeof o=="function",f=l?o(n):o,u=t.exports.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),v=!l&&t.exports.isValidElement(f)&&j(f),d=v?f.ref:null,I=t.exports.useMemo(function(){return A(d,n)},[d,n]),m=t.exports.useRef(e);m.current=e;var C=t.exports.useCallback(function(a){var b=m.current,z=b.onResize,P=b.data,E=a.getBoundingClientRect(),R=E.width,x=E.height,h=a.offsetWidth,p=a.offsetHeight,_=Math.floor(R),y=Math.floor(x);if(u.current.width!==_||u.current.height!==y||u.current.offsetWidth!==h||u.current.offsetHeight!==p){var w={width:_,height:y,offsetWidth:h,offsetHeight:p};u.current=w;var B=h===Math.round(R)?R:h,N=p===Math.round(x)?x:p,W=k(k({},w),{},{offsetWidth:B,offsetHeight:N});s==null||s(W,a,P),z&&Promise.resolve().then(function(){z(W,a)})}},[]);return t.exports.useEffect(function(){var a=H(n.current)||H(i.current);return a&&!r&&V(a,C),function(){return X(a,C)}},[n.current,r]),t.exports.createElement(Y,{ref:i},v?t.exports.cloneElement(f,{ref:I}):f)}var J="rc-observer-key";function Q(e){var o=e.children,r=typeof o=="function"?[o]:F(o);return r.map(function(n,i){var s=(n==null?void 0:n.key)||"".concat(J,"-").concat(i);return t.exports.createElement(G,$({},e,{key:s}),n)})}Q.Collection=q;export{Q as R};

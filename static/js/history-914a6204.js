import{j as O}from"./@babel-ee6b9e1a.js";var g;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(g||(g={}));var B=function(n){return n},R="beforeunload",D="hashchange",K="popstate";function F(n){n===void 0&&(n={});var u=n,o=u.window,t=o===void 0?document.defaultView:o,c=t.history;function v(){var e=V(t.location.hash.substr(1)),r=e.pathname,a=r===void 0?"/":r,i=e.search,f=i===void 0?"":i,l=e.hash,b=l===void 0?"":l,h=c.state||{};return[h.idx,B({pathname:a,search:f,hash:b,state:h.usr||null,key:h.key||"default"})]}var s=null;function E(){if(s)d.call(s),s=null;else{var e=g.Pop,r=v(),a=r[0],i=r[1];if(d.length){if(a!=null){var f=p-a;f&&(s={action:e,location:i,retry:function(){P(f*-1)}},P(f))}}else k(e)}}t.addEventListener(K,E),t.addEventListener(D,function(){var e=v(),r=e[1];x(r)!==x(y)&&E()});var m=g.Pop,w=v(),p=w[0],y=w[1],L=U(),d=U();p==null&&(p=0,c.replaceState(O({},c.state,{idx:p}),""));function j(){var e=document.querySelector("base"),r="";if(e&&e.getAttribute("href")){var a=t.location.href,i=a.indexOf("#");r=i===-1?a:a.slice(0,i)}return r}function _(e){return j()+"#"+(typeof e=="string"?e:x(e))}function A(e,r){return r===void 0&&(r=null),B(O({pathname:y.pathname,hash:"",search:""},typeof e=="string"?V(e):e,{state:r,key:M()}))}function H(e,r){return[{usr:e.state,key:e.key,idx:r},_(e)]}function $(e,r,a){return!d.length||(d.call({action:e,location:r,retry:a}),!1)}function k(e){m=e;var r=v();p=r[0],y=r[1],L.call({action:m,location:y})}function S(e,r){var a=g.Push,i=A(e,r);function f(){S(e,r)}if($(a,i,f)){var l=H(i,p+1),b=l[0],h=l[1];try{c.pushState(b,"",h)}catch(N){t.location.assign(h)}k(a)}}function T(e,r){var a=g.Replace,i=A(e,r);function f(){T(e,r)}if($(a,i,f)){var l=H(i,p),b=l[0],h=l[1];c.replaceState(b,"",h),k(a)}}function P(e){c.go(e)}var q={get action(){return m},get location(){return y},createHref:_,push:S,replace:T,go:P,back:function(){P(-1)},forward:function(){P(1)},listen:function(r){return L.push(r)},block:function(r){var a=d.push(r);return d.length===1&&t.addEventListener(R,C),function(){a(),d.length||t.removeEventListener(R,C)}}};return q}function C(n){n.preventDefault(),n.returnValue=""}function U(){var n=[];return{get length(){return n.length},push:function(o){return n.push(o),function(){n=n.filter(function(t){return t!==o})}},call:function(o){n.forEach(function(t){return t&&t(o)})}}}function M(){return Math.random().toString(36).substr(2,8)}function x(n){var u=n.pathname,o=u===void 0?"/":u,t=n.search,c=t===void 0?"":t,v=n.hash,s=v===void 0?"":v;return c&&c!=="?"&&(o+=c.charAt(0)==="?"?c:"?"+c),s&&s!=="#"&&(o+=s.charAt(0)==="#"?s:"#"+s),o}function V(n){var u={};if(n){var o=n.indexOf("#");o>=0&&(u.hash=n.substr(o),n=n.substr(0,o));var t=n.indexOf("?");t>=0&&(u.search=n.substr(t),n=n.substr(0,t)),n&&(u.pathname=n)}return u}export{g as A,x as a,F as c,V as p};

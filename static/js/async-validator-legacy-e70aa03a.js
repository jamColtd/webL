System.register([],(function(e){"use strict";return{execute:function(){function r(){return r=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}function t(e){return t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(e)}function n(e,r){return n=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},n(e,r)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function u(e,r,t){return u=i()?Reflect.construct:function(e,r,t){var i=[null];i.push.apply(i,r);var u=new(Function.bind.apply(e,i));return t&&n(u,t.prototype),u},u.apply(null,arguments)}function a(e){var r="function"==typeof Map?new Map:void 0;return a=function(e){if(null===e||(i=e,-1===Function.toString.call(i).indexOf("[native code]")))return e;var i;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,a)}function a(){return u(e,arguments,t(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),n(a,e)},a(e)}var s=/%[sdj%]/g,o=function(){};function f(e){if(!e||!e.length)return null;var r={};return e.forEach((function(e){var t=e.field;r[t]=r[t]||[],r[t].push(e)})),r}function l(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var i=0,u=t.length;if("function"==typeof e)return e.apply(null,t);if("string"==typeof e){var a=e.replace(s,(function(e){if("%%"===e)return"%";if(i>=u)return e;switch(e){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch(r){return"[Circular]"}break;default:return e}}));return a}return e}function c(e,r){return null==e||!("array"!==r||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"date"===e||"pattern"===e}(r)||"string"!=typeof e||e)}function d(e,r,t){var n=0,i=e.length;!function u(a){if(a&&a.length)t(a);else{var s=n;n+=1,s<i?r(e[s],u):t([])}}([])}"undefined"!=typeof process&&process.env;var p=function(e){var r,t;function i(r,t){var n;return(n=e.call(this,"Async Validation Error")||this).errors=r,n.fields=t,n}return t=e,(r=i).prototype=Object.create(t.prototype),r.prototype.constructor=r,n(r,t),i}(a(Error));function y(e,r,t,n,i){if(r.first){var u=new Promise((function(r,u){var a=function(e){var r=[];return Object.keys(e).forEach((function(t){r.push.apply(r,e[t]||[])})),r}(e);d(a,t,(function(e){return n(e),e.length?u(new p(e,f(e))):r(i)}))}));return u.catch((function(e){return e})),u}var a=!0===r.firstFields?Object.keys(e):r.firstFields||[],s=Object.keys(e),o=s.length,l=0,c=[],y=new Promise((function(r,u){var y=function(e){if(c.push.apply(c,e),++l===o)return n(c),c.length?u(new p(c,f(c))):r(i)};s.length||(n(c),r(i)),s.forEach((function(r){var n=e[r];-1!==a.indexOf(r)?d(n,t,y):function(e,r,t){var n=[],i=0,u=e.length;function a(e){n.push.apply(n,e||[]),++i===u&&t(n)}e.forEach((function(e){r(e,a)}))}(n,t,y)}))}));return y.catch((function(e){return e})),y}function h(e,r){return function(t){var n,i;return n=e.fullFields?function(e,r){for(var t=e,n=0;n<r.length;n++){if(null==t)return t;t=t[r[n]]}return t}(r,e.fullFields):r[t.field||e.fullField],(i=t)&&void 0!==i.message?(t.field=t.field||e.fullField,t.fieldValue=n,t):{message:"function"==typeof t?t():t,fieldValue:n,field:t.field||e.fullField}}}function g(e,t){if(t)for(var n in t)if(t.hasOwnProperty(n)){var i=t[n];"object"==typeof i&&"object"==typeof e[n]?e[n]=r({},e[n],i):e[n]=i}return e}var m=function(e,r,t,n,i,u){!e.required||t.hasOwnProperty(e.field)&&!c(r,u||e.type)||n.push(l(i.messages.required,e.fullField))},v={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},b={integer:function(e){return b.number(e)&&parseInt(e,10)===e},float:function(e){return b.number(e)&&!b.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(r){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear&&!isNaN(e.getTime())},number:function(e){return!isNaN(e)&&"number"==typeof e},object:function(e){return"object"==typeof e&&!b.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&e.length<=320&&!!e.match(v.email)},url:function(e){return"string"==typeof e&&e.length<=2048&&!!e.match(v.url)},hex:function(e){return"string"==typeof e&&!!e.match(v.hex)}},q={required:m,whitespace:function(e,r,t,n,i){(/^\s+$/.test(r)||""===r)&&n.push(l(i.messages.whitespace,e.fullField))},type:function(e,r,t,n,i){if(e.required&&void 0===r)m(e,r,t,n,i);else{var u=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(u)>-1?b[u](r)||n.push(l(i.messages.types[u],e.fullField,e.type)):u&&typeof r!==e.type&&n.push(l(i.messages.types[u],e.fullField,e.type))}},range:function(e,r,t,n,i){var u="number"==typeof e.len,a="number"==typeof e.min,s="number"==typeof e.max,o=r,f=null,c="number"==typeof r,d="string"==typeof r,p=Array.isArray(r);if(c?f="number":d?f="string":p&&(f="array"),!f)return!1;p&&(o=r.length),d&&(o=r.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),u?o!==e.len&&n.push(l(i.messages[f].len,e.fullField,e.len)):a&&!s&&o<e.min?n.push(l(i.messages[f].min,e.fullField,e.min)):s&&!a&&o>e.max?n.push(l(i.messages[f].max,e.fullField,e.max)):a&&s&&(o<e.min||o>e.max)&&n.push(l(i.messages[f].range,e.fullField,e.min,e.max))},enum:function(e,r,t,n,i){e.enum=Array.isArray(e.enum)?e.enum:[],-1===e.enum.indexOf(r)&&n.push(l(i.messages.enum,e.fullField,e.enum.join(", ")))},pattern:function(e,r,t,n,i){e.pattern&&(e.pattern instanceof RegExp?(e.pattern.lastIndex=0,e.pattern.test(r)||n.push(l(i.messages.pattern.mismatch,e.fullField,r,e.pattern))):"string"==typeof e.pattern&&(new RegExp(e.pattern).test(r)||n.push(l(i.messages.pattern.mismatch,e.fullField,r,e.pattern))))}},F=function(e,r,t,n,i){var u=e.type,a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(c(r,u)&&!e.required)return t();q.required(e,r,n,a,i,u),c(r,u)||q.type(e,r,n,a,i)}t(a)},w={string:function(e,r,t,n,i){var u=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(c(r,"string")&&!e.required)return t();q.required(e,r,n,u,i,"string"),c(r,"string")||(q.type(e,r,n,u,i),q.range(e,r,n,u,i),q.pattern(e,r,n,u,i),!0===e.whitespace&&q.whitespace(e,r,n,u,i))}t(u)},method:function(e,r,t,n,i){var u=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(c(r)&&!e.required)return t();q.required(e,r,n,u,i),void 0!==r&&q.type(e,r,n,u,i)}t(u)},number:function(e,r,t,n,i){var u=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(""===r&&(r=void 0),c(r)&&!e.required)return t();q.required(e,r,n,u,i),void 0!==r&&(q.type(e,r,n,u,i),q.range(e,r,n,u,i))}t(u)},boolean:function(e,r,t,n,i){var u=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(c(r)&&!e.required)return t();q.required(e,r,n,u,i),void 0!==r&&q.type(e,r,n,u,i)}t(u)},regexp:function(e,r,t,n,i){var u=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(c(r)&&!e.required)return t();q.required(e,r,n,u,i),c(r)||q.type(e,r,n,u,i)}t(u)},integer:function(e,r,t,n,i){var u=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(c(r)&&!e.required)return t();q.required(e,r,n,u,i),void 0!==r&&(q.type(e,r,n,u,i),q.range(e,r,n,u,i))}t(u)},float:function(e,r,t,n,i){var u=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(c(r)&&!e.required)return t();q.required(e,r,n,u,i),void 0!==r&&(q.type(e,r,n,u,i),q.range(e,r,n,u,i))}t(u)},array:function(e,r,t,n,i){var u=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(null==r&&!e.required)return t();q.required(e,r,n,u,i,"array"),null!=r&&(q.type(e,r,n,u,i),q.range(e,r,n,u,i))}t(u)},object:function(e,r,t,n,i){var u=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(c(r)&&!e.required)return t();q.required(e,r,n,u,i),void 0!==r&&q.type(e,r,n,u,i)}t(u)},enum:function(e,r,t,n,i){var u=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(c(r)&&!e.required)return t();q.required(e,r,n,u,i),void 0!==r&&q.enum(e,r,n,u,i)}t(u)},pattern:function(e,r,t,n,i){var u=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(c(r,"string")&&!e.required)return t();q.required(e,r,n,u,i),c(r,"string")||q.pattern(e,r,n,u,i)}t(u)},date:function(e,r,t,n,i){var u=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(c(r,"date")&&!e.required)return t();var a;q.required(e,r,n,u,i),c(r,"date")||(a=r instanceof Date?r:new Date(r),q.type(e,a,n,u,i),a&&q.range(e,a.getTime(),n,u,i))}t(u)},url:F,hex:F,email:F,required:function(e,r,t,n,i){var u=[],a=Array.isArray(r)?"array":typeof r;q.required(e,r,n,u,i,a),t(u)},any:function(e,r,t,n,i){var u=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(c(r)&&!e.required)return t();q.required(e,r,n,u,i)}t(u)}};function O(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var x=O(),j=e("S",function(){function e(e){this.rules=null,this._messages=x,this.define(e)}var t=e.prototype;return t.define=function(e){var r=this;if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");this.rules={},Object.keys(e).forEach((function(t){var n=e[t];r.rules[t]=Array.isArray(n)?n:[n]}))},t.messages=function(e){return e&&(this._messages=g(O(),e)),this._messages},t.validate=function(t,n,i){var u=this;void 0===n&&(n={}),void 0===i&&(i=function(){});var a=t,s=n,o=i;if("function"==typeof s&&(o=s,s={}),!this.rules||0===Object.keys(this.rules).length)return o&&o(null,a),Promise.resolve(a);if(s.messages){var c=this.messages();c===x&&(c=O()),g(c,s.messages),s.messages=c}else s.messages=this.messages();var d={};(s.keys||Object.keys(this.rules)).forEach((function(e){var n=u.rules[e],i=a[e];n.forEach((function(n){var s=n;"function"==typeof s.transform&&(a===t&&(a=r({},a)),i=a[e]=s.transform(i)),(s="function"==typeof s?{validator:s}:r({},s)).validator=u.getValidationMethod(s),s.validator&&(s.field=e,s.fullField=s.fullField||e,s.type=u.getType(s),d[e]=d[e]||[],d[e].push({rule:s,value:i,source:a,field:e}))}))}));var p={};return y(d,s,(function(t,n){var i,u=t.rule,o=!("object"!==u.type&&"array"!==u.type||"object"!=typeof u.fields&&"object"!=typeof u.defaultField);function f(e,t){return r({},t,{fullField:u.fullField+"."+e,fullFields:u.fullFields?[].concat(u.fullFields,[e]):[e]})}function c(i){void 0===i&&(i=[]);var c=Array.isArray(i)?i:[i];!s.suppressWarning&&c.length&&e.warning("async-validator:",c),c.length&&void 0!==u.message&&(c=[].concat(u.message));var d=c.map(h(u,a));if(s.first&&d.length)return p[u.field]=1,n(d);if(o){if(u.required&&!t.value)return void 0!==u.message?d=[].concat(u.message).map(h(u,a)):s.error&&(d=[s.error(u,l(s.messages.required,u.field))]),n(d);var y={};u.defaultField&&Object.keys(t.value).map((function(e){y[e]=u.defaultField})),y=r({},y,t.rule.fields);var g={};Object.keys(y).forEach((function(e){var r=y[e],t=Array.isArray(r)?r:[r];g[e]=t.map(f.bind(null,e))}));var m=new e(g);m.messages(s.messages),t.rule.options&&(t.rule.options.messages=s.messages,t.rule.options.error=s.error),m.validate(t.value,t.rule.options||s,(function(e){var r=[];d&&d.length&&r.push.apply(r,d),e&&e.length&&r.push.apply(r,e),n(r.length?r:null)}))}else n(d)}if(o=o&&(u.required||!u.required&&t.value),u.field=t.field,u.asyncValidator)i=u.asyncValidator(u,t.value,c,t.source,s);else if(u.validator){try{i=u.validator(u,t.value,c,t.source,s)}catch(d){console.error,setTimeout((function(){throw d}),0),c(d.message)}!0===i?c():!1===i?c("function"==typeof u.message?u.message(u.fullField||u.field):u.message||(u.fullField||u.field)+" fails"):i instanceof Array?c(i):i instanceof Error&&c(i.message)}i&&i.then&&i.then((function(){return c()}),(function(e){return c(e)}))}),(function(e){!function(e){for(var r,t,n=[],i={},u=0;u<e.length;u++)r=e[u],t=void 0,Array.isArray(r)?n=(t=n).concat.apply(t,r):n.push(r);n.length?(i=f(n),o(n,i)):o(null,a)}(e)}),a)},t.getType=function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!w.hasOwnProperty(e.type))throw new Error(l("Unknown rule type %s",e.type));return e.type||"string"},t.getValidationMethod=function(e){if("function"==typeof e.validator)return e.validator;var r=Object.keys(e),t=r.indexOf("message");return-1!==t&&r.splice(t,1),1===r.length&&"required"===r[0]?w.required:w[this.getType(e)]||void 0},e}());j.register=function(e,r){if("function"!=typeof r)throw new Error("Cannot register a validator by type, validator is not a function");w[e]=r},j.warning=o,j.messages=x,j.validators=w}}}));
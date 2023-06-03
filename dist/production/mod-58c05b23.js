"use strict";exports.id=8902,exports.ids=[8902],exports.modules={6035:function(e,t,r){var n=r(9830),s=r(7811),a=r(9009),i=r(5158)("body-parser:json"),o=r(3211),c=r(273);e.exports=function(e){var t=e||{},r="number"!=typeof t.limit?n.parse(t.limit||"100kb"):t.limit,f=!1!==t.inflate,d=t.reviver,y=!1!==t.strict,v=t.type||"application/json",l=t.verify||!1;if(!1!==l&&"function"!=typeof l)throw new TypeError("option verify must be function");var m="function"!=typeof v?function(e){return function(t){return Boolean(c(t,e))}}(v):v;function h(e){if(0===e.length)return{};if(y){var t=(r=e,(n=p.exec(r))?n[1]:void 0);if("{"!==t&&"["!==t)throw i("strict violation"),function(e,t){var r=e.indexOf(t),n=-1!==r?e.substring(0,r)+"#":"";try{throw JSON.parse(n),new SyntaxError("strict violation")}catch(e){return u(e,{message:e.message.replace("#",t),stack:e.stack})}}(e,t)}var r,n;try{return i("parse json"),JSON.parse(e,d)}catch(e){throw u(e,{message:e.message,stack:e.stack})}}return function(e,t,n){if(e._body)return i("body already parsed"),void n();if(e.body=e.body||{},!c.hasBody(e))return i("skip empty body"),void n();if(i("content-type %j",e.headers["content-type"]),!m(e))return i("skip parsing"),void n();var p=function(e){try{return(s.parse(e).parameters.charset||"").toLowerCase()}catch(e){return}}(e)||"utf-8";if("utf-"!==p.slice(0,4))return i("invalid charset"),void n(a(415,'unsupported charset "'+p.toUpperCase()+'"',{charset:p,type:"charset.unsupported"}));o(e,t,n,h,i,{encoding:p,inflate:f,limit:r,verify:l})}};var p=/^[\x20\x09\x0a\x0d]*([^\x20\x09\x0a\x0d])/;function u(e,t){for(var r=Object.getOwnPropertyNames(e),n=0;n<r.length;n++){var s=r[n];"stack"!==s&&"message"!==s&&delete e[s]}return e.stack=t.stack.replace(e.message,t.message),e.message=t.message,e}}};
"use strict";exports.id=3334,exports.ids=[3334],exports.modules={4861:function(e,r,t){var i=t(9830),n=t(7811),o=t(9009),a=t(5158)("body-parser:urlencoded"),p=t(412)("body-parser"),u=t(3211),s=t(273);e.exports=function(e){var r=e||{};void 0===r.extended&&p("undefined extended: provide extended option");var t=!1!==r.extended,d=!1!==r.inflate,c="number"!=typeof r.limit?i.parse(r.limit||"100kb"):r.limit,y=r.type||"application/x-www-form-urlencoded",v=r.verify||!1;if(!1!==v&&"function"!=typeof v)throw new TypeError("option verify must be function");var l=t?function(e){var r=void 0!==e.parameterLimit?e.parameterLimit:1e3,t=f("qs");if(isNaN(r)||r<1)throw new TypeError("option parameterLimit must be a positive number");isFinite(r)&&(r|=0);return function(e){var i=m(e,r);if(void 0===i)throw a("too many parameters"),o(413,"too many parameters",{type:"parameters.too.many"});var n=Math.max(100,i);return a("parse extended urlencoding"),t(e,{allowPrototypes:!0,arrayLimit:n,depth:1/0,parameterLimit:r})}}(r):function(e){var r=void 0!==e.parameterLimit?e.parameterLimit:1e3,t=f("querystring");if(isNaN(r)||r<1)throw new TypeError("option parameterLimit must be a positive number");isFinite(r)&&(r|=0);return function(e){if(void 0===m(e,r))throw a("too many parameters"),o(413,"too many parameters",{type:"parameters.too.many"});return a("parse urlencoding"),t(e,void 0,void 0,{maxKeys:r})}}(r),b="function"!=typeof y?function(e){return function(r){return Boolean(s(r,e))}}(y):y;function h(e){return e.length?l(e):{}}return function(e,r,t){if(e._body)return a("body already parsed"),void t();if(e.body=e.body||{},!s.hasBody(e))return a("skip empty body"),void t();if(a("content-type %j",e.headers["content-type"]),!b(e))return a("skip parsing"),void t();var i=function(e){try{return(n.parse(e).parameters.charset||"").toLowerCase()}catch(e){return}}(e)||"utf-8";if("utf-8"!==i)return a("invalid charset"),void t(o(415,'unsupported charset "'+i.toUpperCase()+'"',{charset:i,type:"charset.unsupported"}));u(e,r,t,h,a,{debug:a,encoding:i,inflate:d,limit:c,verify:v})}};var d=Object.create(null);function m(e,r){for(var t=0,i=0;-1!==(i=e.indexOf("&",i));)if(i++,++t===r)return;return t}function f(e){var r=d[e];if(void 0!==r)return r.parse;switch(e){case"qs":r=t(129);break;case"querystring":r=t(3477)}return d[e]=r,r.parse}}};
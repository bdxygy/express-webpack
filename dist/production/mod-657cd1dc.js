"use strict";exports.id=7783,exports.ids=[7783],exports.modules={273:function(r,t,e){var n=e(2577),u=e(983);function i(r,t){var e,u,i=t,o=function(r){if(!r)return null;try{return function(r){var t=n.parse(r);return t.parameters=void 0,n.format(t)}(r)}catch(r){return null}}(r);if(!o)return!1;if(i&&!Array.isArray(i))for(i=new Array(arguments.length-1),e=0;e<i.length;e++)i[e]=arguments[e+1];if(!i||!i.length)return o;for(e=0;e<i.length;e++)if(a(s(u=i[e]),o))return"+"===u[0]||-1!==u.indexOf("*")?o:u;return!1}function o(r){return void 0!==r.headers["transfer-encoding"]||!isNaN(r.headers["content-length"])}function s(r){if("string"!=typeof r)return!1;switch(r){case"urlencoded":return"application/x-www-form-urlencoded";case"multipart":return"multipart/*"}return"+"===r[0]?"*/*"+r:-1===r.indexOf("/")?u.lookup(r):r}function a(r,t){if(!1===r)return!1;var e=t.split("/"),n=r.split("/");return 2===e.length&&2===n.length&&(("*"===n[0]||n[0]===e[0])&&("*+"===n[1].substr(0,2)?n[1].length<=e[1].length+1&&n[1].substr(1)===e[1].substr(1-n[1].length):"*"===n[1]||n[1]===e[1]))}r.exports=function(r,t){var e=t;if(!o(r))return null;if(arguments.length>2){e=new Array(arguments.length-1);for(var n=0;n<e.length;n++)e[n]=arguments[n+1]}return i(r.headers["content-type"],e)},r.exports.is=i,r.exports.hasBody=o,r.exports.normalize=s,r.exports.match=a}};
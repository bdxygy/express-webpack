"use strict";exports.id=3422,exports.ids=[3422],exports.modules={9268:function(e,r,t){e.exports=t(5499)},1735:function(e,r,t){var o=t(6644);r.init=function(e){return function(r,t,n){e.enabled("x-powered-by")&&t.setHeader("X-Powered-By","Express"),r.res=t,t.req=r,r.next=n,o(r,e.request),o(t,e.response),t.locals=t.locals||Object.create(null),n()}}},7667:function(e,r,t){var o=t(1322),n=t(8317),s=t(129);e.exports=function(e){var r=o({},e),t=s.parse;return"function"==typeof e&&(t=e,r=void 0),void 0!==r&&void 0===r.allowPrototypes&&(r.allowPrototypes=!0),function(e,o,s){if(!e.query){var u=n(e).query;e.query=t(u,r)}s()}}},271:function(e){function r(e){return e.socket?e.socket.remoteAddress:e.connection.remoteAddress}e.exports=function(e){if(!e)throw new TypeError("argument req is required");var t=function(e){for(var r=e.length,t=[],o=e.length,n=e.length-1;n>=0;n--)switch(e.charCodeAt(n)){case 32:o===r&&(o=r=n);break;case 44:o!==r&&t.push(e.substring(o,r)),o=r=n;break;default:o=n}o!==r&&t.push(e.substring(o,r));return t}(e.headers["x-forwarded-for"]||"");return[r(e)].concat(t)}}};
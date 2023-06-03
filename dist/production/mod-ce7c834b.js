"use strict";exports.id=4645,exports.ids=[4645],exports.modules={9483:function(r,e,t){var n=t(5369),a=t(3342),i=t(8873),s=t(1322),o=t(5158)("express:router"),u=t(412)("express"),l=t(2521),f=t(8317),c=t(6644),h=/^\[object (\S+)\]$/,p=Array.prototype.slice,m=Object.prototype.toString,v=r.exports=function(r){var e=r||{};function t(r,e,n){t.handle(r,e,n)}return c(t,v),t.params={},t._params=[],t.caseSensitive=e.caseSensitive,t.mergeParams=e.mergeParams,t.strict=e.strict,t.stack=[],t};function g(r,e){for(var t=0;t<e.length;t++){var n=e[t];-1===r.indexOf(n)&&r.push(n)}}function d(r){var e=typeof r;return"object"!==e?e:m.call(r).replace(h,"$1")}function y(r,e){try{return r.match(e)}catch(r){return r}}v.param=function(r,e){if("function"==typeof r)return u("router.param(fn): Refactor to use path params"),void this._params.push(r);var t,n=this._params,a=n.length;":"===r[0]&&(u("router.param("+JSON.stringify(r)+", fn): Use router.param("+JSON.stringify(r.slice(1))+", fn) instead"),r=r.slice(1));for(var i=0;i<a;++i)(t=n[i](r,e))&&(e=t);if("function"!=typeof e)throw new Error("invalid param() call for "+r+", got "+e);return(this.params[r]=this.params[r]||[]).push(e),this},v.handle=function(r,e,t){var n=this;o("dispatching %s %s",r.method,r.url);var a,i,u=0,l=function(r){if("string"!=typeof r||0===r.length||"/"===r[0])return;var e=r.indexOf("?"),t=-1!==e?e:r.length,n=r.slice(0,t).indexOf("://");return-1!==n?r.substring(0,r.indexOf("/",3+n)):void 0}(r.url)||"",c="",h=!1,p=0,m={},v=[],d=n.stack,w=r.params,b=r.baseUrl||"",x=function(r,e){for(var t=new Array(arguments.length-2),n=new Array(arguments.length-2),a=0;a<t.length;a++)t[a]=arguments[a+2],n[a]=e[t[a]];return function(){for(var a=0;a<t.length;a++)e[t[a]]=n[a];return r.apply(this,arguments)}}(t,r,"baseUrl","next","params");function O(t){var a="route"===t?null:t;if(h&&(r.url=r.url.slice(1),h=!1),0!==c.length&&(r.baseUrl=b,r.url=l+c+r.url.slice(l.length),c=""),"router"!==a)if(u>=d.length)setImmediate(x,a);else{if(++p>100)return setImmediate(O,t);var i,_,S,U=function(r){try{return f(r).pathname}catch(r){return}}(r);if(null==U)return x(a);for(;!0!==_&&u<d.length;)if(_=y(i=d[u++],U),S=i.route,"boolean"!=typeof _&&(a=a||_),!0===_&&S)if(a)_=!1;else{var A=r.method,j=S._handles_method(A);j||"OPTIONS"!==A||g(v,S._options()),j||"HEAD"===A||(_=!1)}if(!0!==_)return x(a);S&&(r.route=S),r.params=n.mergeParams?function(r,e){if("object"!=typeof e||!e)return r;var t=s({},e);if(!(0 in r)||!(0 in e))return s(t,r);var n=0,a=0;for(;n in r;)n++;for(;a in e;)a++;for(n--;n>=0;n--)r[n+a]=r[n],n<a&&delete r[n];return s(t,r)}(i.params,w):i.params;var k=i.path;n.process_params(i,m,r,e,(function(t){t?O(a||t):S?i.handle_request(r,e,O):function(t,n,a,i){if(0!==a.length){if(a!==i.slice(0,a.length))return void O(n);var s=i[a.length];if(s&&"/"!==s&&"."!==s)return O(n);o("trim prefix (%s) from url %s",a,r.url),c=a,r.url=l+r.url.slice(l.length+c.length),l||"/"===r.url[0]||(r.url="/"+r.url,h=!0),r.baseUrl=b+("/"===c[c.length-1]?c.substring(0,c.length-1):c)}o("%s %s : %s",t.name,a,r.originalUrl),n?t.handle_error(n,r,e,O):t.handle_request(r,e,O)}(i,a,k,U),p=0}))}else setImmediate(x,null)}r.next=O,"OPTIONS"===r.method&&(a=x,i=function(r,t){if(t||0===v.length)return r(t);!function(r,e,t){try{var n=e.join(",");r.set("Allow",n),r.send(n)}catch(r){t(r)}}(e,v,r)},x=function(){var r=new Array(arguments.length+1);r[0]=a;for(var e=0,t=arguments.length;e<t;e++)r[e+1]=arguments[e];i.apply(this,r)}),r.baseUrl=b,r.originalUrl=r.originalUrl||r.url,O()},v.process_params=function(r,e,t,n,a){var i=this.params,s=r.keys;if(!s||0===s.length)return a();var o,u,l,f,c,h=0,p=0;function m(r){return r?a(r):h>=s.length?a():(p=0,u=s[h++],o=u.name,l=t.params[o],f=i[o],c=e[o],void 0!==l&&f?c&&(c.match===l||c.error&&"route"!==c.error)?(t.params[o]=c.value,m(c.error)):(e[o]=c={error:null,match:l,value:l},void v()):m())}function v(r){var e=f[p++];if(c.value=t.params[u.name],r)return c.error=r,void m(r);if(!e)return m();try{e(t,n,v,l,u.name)}catch(r){v(r)}}m()},v.use=function(r){var e=0,t="/";if("function"!=typeof r){for(var n=r;Array.isArray(n)&&0!==n.length;)n=n[0];"function"!=typeof n&&(e=1,t=r)}var i=l(p.call(arguments,e));if(0===i.length)throw new TypeError("Router.use() requires a middleware function");for(var s=0;s<i.length;s++){if("function"!=typeof(r=i[s]))throw new TypeError("Router.use() requires a middleware function but got a "+d(r));o("use %o %s",t,r.name||"<anonymous>");var u=new a(t,{sensitive:this.caseSensitive,strict:!1,end:!1},r);u.route=void 0,this.stack.push(u)}return this},v.route=function(r){var e=new n(r),t=new a(r,{sensitive:this.caseSensitive,strict:this.strict,end:!0},e.dispatch.bind(e));return t.route=e,this.stack.push(t),e},i.concat("all").forEach((function(r){v[r]=function(e){var t=this.route(e);return t[r].apply(t,p.call(arguments,1)),this}}))}};
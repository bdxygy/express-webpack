exports.id=2378,exports.ids=[2378],exports.modules={9509:function(r,e,t){var o=t(4300),n=o.Buffer;function f(r,e){for(var t in r)e[t]=r[t]}function u(r,e,t){return n(r,e,t)}n.from&&n.alloc&&n.allocUnsafe&&n.allocUnsafeSlow?r.exports=o:(f(o,e),e.Buffer=u),u.prototype=Object.create(n.prototype),f(n,u),u.from=function(r,e,t){if("number"==typeof r)throw new TypeError("Argument must not be a number");return n(r,e,t)},u.alloc=function(r,e,t){if("number"!=typeof r)throw new TypeError("Argument must be a number");var o=n(r);return void 0!==e?"string"==typeof t?o.fill(e,t):o.fill(e):o.fill(0),o},u.allocUnsafe=function(r){if("number"!=typeof r)throw new TypeError("Argument must be a number");return n(r)},u.allocUnsafeSlow=function(r){if("number"!=typeof r)throw new TypeError("Argument must be a number");return o.SlowBuffer(r)}},6644:function(r){"use strict";r.exports=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(r,e){return r.__proto__=e,r}:function(r,e){for(var t in e)Object.prototype.hasOwnProperty.call(r,t)||(r[t]=e[t]);return r})}};
"use strict";exports.id=2303,exports.ids=[2303],exports.modules={9830:function(e){e.exports=function(e,t){if("string"==typeof e)return i(e);if("number"==typeof e)return a(e,t);return null},e.exports.format=a,e.exports.parse=i;var t=/\B(?=(\d{3})+(?!\d))/g,r=/(?:\.0*|(\.[^0]+)0+)$/,o={b:1,kb:1024,mb:1<<20,gb:1<<30,tb:Math.pow(1024,4),pb:Math.pow(1024,5)},n=/^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i;function a(e,n){if(!Number.isFinite(e))return null;var a=Math.abs(e),i=n&&n.thousandsSeparator||"",s=n&&n.unitSeparator||"",u=n&&void 0!==n.decimalPlaces?n.decimalPlaces:2,p=Boolean(n&&n.fixedDecimals),b=n&&n.unit||"";b&&o[b.toLowerCase()]||(b=a>=o.pb?"PB":a>=o.tb?"TB":a>=o.gb?"GB":a>=o.mb?"MB":a>=o.kb?"KB":"B");var l=(e/o[b.toLowerCase()]).toFixed(u);return p||(l=l.replace(r,"$1")),i&&(l=l.split(".").map((function(e,r){return 0===r?e.replace(t,i):e})).join(".")),l+s+b}function i(e){if("number"==typeof e&&!isNaN(e))return e;if("string"!=typeof e)return null;var t,r=n.exec(e),a="b";return r?(t=parseFloat(r[1]),a=r[4].toLowerCase()):(t=parseInt(e,10),a="b"),isNaN(t)?null:Math.floor(o[a]*t)}}};
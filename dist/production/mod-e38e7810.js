"use strict";exports.id=3267,exports.ids=[3267],exports.modules={6149:function(n,e,t){var o=t(2361).EventEmitter,i=t(7147).ReadStream,r=t(2781),s=t(9796);function f(){}function c(){this._binding.clear()}function a(){"number"==typeof this.fd&&this.close()}n.exports=function(n,e){!function(n){return n instanceof i}(n)?function(n){return n instanceof s.Gzip||n instanceof s.Gunzip||n instanceof s.Deflate||n instanceof s.DeflateRaw||n instanceof s.Inflate||n instanceof s.InflateRaw||n instanceof s.Unzip}(n)?function(n){"function"==typeof n.destroy?n._binding?(n.destroy(),n._processing?(n._needDrain=!0,n.once("drain",c)):n._binding.clear()):n._destroy&&n._destroy!==r.Transform.prototype._destroy?n.destroy():n._destroy&&"function"==typeof n.close?(n.destroyed=!0,n.close()):n.destroy():"function"==typeof n.close&&function(n){if(!0===n._hadError){var e=null===n._binding?"_binding":"_handle";n[e]={close:function(){this[e]=null}}}n.close()}(n)}(n):function(n){return n instanceof r&&"function"==typeof n.destroy}(n)&&n.destroy():function(n){n.destroy(),"function"==typeof n.close&&n.on("open",a)}(n);t=n,t instanceof o&&e&&(n.removeAllListeners("error"),n.addListener("error",f));var t;return n}}};
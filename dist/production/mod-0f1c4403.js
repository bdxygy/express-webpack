"use strict";exports.id=9346,exports.ids=[9346],exports.modules={1279:function(t,e,i){var o=i(2399).Buffer;function n(){}function r(){}function s(){this.overflowByte=-1}function c(t,e){this.iconv=e}function d(t,e){void 0===(t=t||{}).addBOM&&(t.addBOM=!0),this.encoder=e.iconv.getEncoder("utf-16le",t)}function h(t,e){this.decoder=null,this.initialBytes=[],this.initialBytesLen=0,this.options=t||{},this.iconv=e.iconv}function f(t,e){var i=e||"utf-16le";if(t.length>=2)if(254==t[0]&&255==t[1])i="utf-16be";else if(255==t[0]&&254==t[1])i="utf-16le";else{for(var o=0,n=0,r=Math.min(t.length-t.length%2,64),s=0;s<r;s+=2)0===t[s]&&0!==t[s+1]&&n++,0!==t[s]&&0===t[s+1]&&o++;n>o?i="utf-16be":n<o&&(i="utf-16le")}return i}e.utf16be=n,n.prototype.encoder=r,n.prototype.decoder=s,n.prototype.bomAware=!0,r.prototype.write=function(t){for(var e=o.from(t,"ucs2"),i=0;i<e.length;i+=2){var n=e[i];e[i]=e[i+1],e[i+1]=n}return e},r.prototype.end=function(){},s.prototype.write=function(t){if(0==t.length)return"";var e=o.alloc(t.length+1),i=0,n=0;for(-1!==this.overflowByte&&(e[0]=t[0],e[1]=this.overflowByte,i=1,n=2);i<t.length-1;i+=2,n+=2)e[n]=t[i+1],e[n+1]=t[i];return this.overflowByte=i==t.length-1?t[t.length-1]:-1,e.slice(0,n).toString("ucs2")},s.prototype.end=function(){},e.utf16=c,c.prototype.encoder=d,c.prototype.decoder=h,d.prototype.write=function(t){return this.encoder.write(t)},d.prototype.end=function(){return this.encoder.end()},h.prototype.write=function(t){if(!this.decoder){if(this.initialBytes.push(t),this.initialBytesLen+=t.length,this.initialBytesLen<16)return"";var e=f(t=o.concat(this.initialBytes),this.options.defaultEncoding);this.decoder=this.iconv.getDecoder(e,this.options),this.initialBytes.length=this.initialBytesLen=0}return this.decoder.write(t)},h.prototype.end=function(){if(!this.decoder){var t=o.concat(this.initialBytes),e=f(t,this.options.defaultEncoding);this.decoder=this.iconv.getDecoder(e,this.options);var i=this.decoder.write(t),n=this.decoder.end();return n?i+n:i}return this.decoder.end()}}};
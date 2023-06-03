"use strict";exports.id=3827,exports.ids=[3827],exports.modules={688:function(e,t,o){var i=o(2399).Buffer;t._dbcs=c;for(var r=-1,a=-2,d=-10,h=-1e3,n=new Array(256),s=0;s<256;s++)n[s]=r;function c(e,t){if(this.encodingName=e.encodingName,!e)throw new Error("DBCS codec is called without the data.");if(!e.table)throw new Error("Encoding '"+this.encodingName+"' has no data.");var o=e.table();this.decodeTables=[],this.decodeTables[0]=n.slice(0),this.decodeTableSeq=[];for(var i=0;i<o.length;i++)this._addDecodeChunk(o[i]);this.defaultCharUnicode=t.defaultCharUnicode,this.encodeTable=[],this.encodeTableSeq=[];var d={};if(e.encodeSkipVals)for(i=0;i<e.encodeSkipVals.length;i++){var s=e.encodeSkipVals[i];if("number"==typeof s)d[s]=!0;else for(var c=s.from;c<=s.to;c++)d[c]=!0}if(this._fillEncodeTable(0,0,d),e.encodeAdd)for(var l in e.encodeAdd)Object.prototype.hasOwnProperty.call(e.encodeAdd,l)&&this._setEncodeChar(l.charCodeAt(0),e.encodeAdd[l]);if(this.defCharSB=this.encodeTable[0][t.defaultCharSingleByte.charCodeAt(0)],this.defCharSB===r&&(this.defCharSB=this.encodeTable[0]["?"]),this.defCharSB===r&&(this.defCharSB="?".charCodeAt(0)),"function"==typeof e.gb18030){this.gb18030=e.gb18030();var f=this.decodeTables.length,u=this.decodeTables[f]=n.slice(0),b=this.decodeTables.length,g=this.decodeTables[b]=n.slice(0);for(i=129;i<=254;i++){var v=h-this.decodeTables[0][i],p=this.decodeTables[v];for(c=48;c<=57;c++)p[c]=h-f}for(i=129;i<=254;i++)u[i]=h-b;for(i=48;i<=57;i++)g[i]=a}}function l(e,t){this.leadSurrogate=-1,this.seqObj=void 0,this.encodeTable=t.encodeTable,this.encodeTableSeq=t.encodeTableSeq,this.defaultCharSingleByte=t.defCharSB,this.gb18030=t.gb18030}function f(e,t){this.nodeIdx=0,this.prevBuf=i.alloc(0),this.decodeTables=t.decodeTables,this.decodeTableSeq=t.decodeTableSeq,this.defaultCharUnicode=t.defaultCharUnicode,this.gb18030=t.gb18030}function u(e,t){if(e[0]>t)return-1;for(var o=0,i=e.length;o<i-1;){var r=o+Math.floor((i-o+1)/2);e[r]<=t?o=r:i=r}return o}c.prototype.encoder=l,c.prototype.decoder=f,c.prototype._getDecodeTrieNode=function(e){for(var t=[];e>0;e>>=8)t.push(255&e);0==t.length&&t.push(0);for(var o=this.decodeTables[0],i=t.length-1;i>0;i--){var a=o[t[i]];if(a==r)o[t[i]]=h-this.decodeTables.length,this.decodeTables.push(o=n.slice(0));else{if(!(a<=h))throw new Error("Overwrite byte in "+this.encodingName+", addr: "+e.toString(16));o=this.decodeTables[h-a]}}return o},c.prototype._addDecodeChunk=function(e){var t=parseInt(e[0],16),o=this._getDecodeTrieNode(t);t&=255;for(var i=1;i<e.length;i++){var r=e[i];if("string"==typeof r)for(var a=0;a<r.length;){var h=r.charCodeAt(a++);if(55296<=h&&h<56320){var n=r.charCodeAt(a++);if(!(56320<=n&&n<57344))throw new Error("Incorrect surrogate pair in "+this.encodingName+" at chunk "+e[0]);o[t++]=65536+1024*(h-55296)+(n-56320)}else if(4080<h&&h<=4095){for(var s=4095-h+2,c=[],l=0;l<s;l++)c.push(r.charCodeAt(a++));o[t++]=d-this.decodeTableSeq.length,this.decodeTableSeq.push(c)}else o[t++]=h}else{if("number"!=typeof r)throw new Error("Incorrect type '"+typeof r+"' given in "+this.encodingName+" at chunk "+e[0]);var f=o[t-1]+1;for(a=0;a<r;a++)o[t++]=f++}}if(t>255)throw new Error("Incorrect chunk in "+this.encodingName+" at addr "+e[0]+": too long"+t)},c.prototype._getEncodeBucket=function(e){var t=e>>8;return void 0===this.encodeTable[t]&&(this.encodeTable[t]=n.slice(0)),this.encodeTable[t]},c.prototype._setEncodeChar=function(e,t){var o=this._getEncodeBucket(e),i=255&e;o[i]<=d?this.encodeTableSeq[d-o[i]][-1]=t:o[i]==r&&(o[i]=t)},c.prototype._setEncodeSequence=function(e,t){var o,i=e[0],a=this._getEncodeBucket(i),h=255&i;a[h]<=d?o=this.encodeTableSeq[d-a[h]]:(o={},a[h]!==r&&(o[-1]=a[h]),a[h]=d-this.encodeTableSeq.length,this.encodeTableSeq.push(o));for(var n=1;n<e.length-1;n++){var s=o[i];"object"==typeof s?o=s:(o=o[i]={},void 0!==s&&(o[-1]=s))}o[i=e[e.length-1]]=t},c.prototype._fillEncodeTable=function(e,t,o){for(var i=this.decodeTables[e],r=0;r<256;r++){var a=i[r],n=t+r;o[n]||(a>=0?this._setEncodeChar(a,n):a<=h?this._fillEncodeTable(h-a,n<<8,o):a<=d&&this._setEncodeSequence(this.decodeTableSeq[d-a],n))}},l.prototype.write=function(e){for(var t=i.alloc(e.length*(this.gb18030?4:3)),o=this.leadSurrogate,a=this.seqObj,h=-1,n=0,s=0;;){if(-1===h){if(n==e.length)break;var c=e.charCodeAt(n++)}else{c=h;h=-1}if(55296<=c&&c<57344)if(c<56320){if(-1===o){o=c;continue}o=c,c=r}else-1!==o?(c=65536+1024*(o-55296)+(c-56320),o=-1):c=r;else-1!==o&&(h=c,c=r,o=-1);var l=r;if(void 0!==a&&c!=r){var f=a[c];if("object"==typeof f){a=f;continue}"number"==typeof f?l=f:null==f&&void 0!==(f=a[-1])&&(l=f,h=c),a=void 0}else if(c>=0){var b=this.encodeTable[c>>8];if(void 0!==b&&(l=b[255&c]),l<=d){a=this.encodeTableSeq[d-l];continue}if(l==r&&this.gb18030){var g=u(this.gb18030.uChars,c);if(-1!=g){l=this.gb18030.gbChars[g]+(c-this.gb18030.uChars[g]);t[s++]=129+Math.floor(l/12600),l%=12600,t[s++]=48+Math.floor(l/1260),l%=1260,t[s++]=129+Math.floor(l/10),l%=10,t[s++]=48+l;continue}}}l===r&&(l=this.defaultCharSingleByte),l<256?t[s++]=l:l<65536?(t[s++]=l>>8,t[s++]=255&l):(t[s++]=l>>16,t[s++]=l>>8&255,t[s++]=255&l)}return this.seqObj=a,this.leadSurrogate=o,t.slice(0,s)},l.prototype.end=function(){if(-1!==this.leadSurrogate||void 0!==this.seqObj){var e=i.alloc(10),t=0;if(this.seqObj){var o=this.seqObj[-1];void 0!==o&&(o<256?e[t++]=o:(e[t++]=o>>8,e[t++]=255&o)),this.seqObj=void 0}return-1!==this.leadSurrogate&&(e[t++]=this.defaultCharSingleByte,this.leadSurrogate=-1),e.slice(0,t)}},l.prototype.findIdx=u,f.prototype.write=function(e){var t=i.alloc(2*e.length),o=this.nodeIdx,n=this.prevBuf,s=this.prevBuf.length,c=-this.prevBuf.length;s>0&&(n=i.concat([n,e.slice(0,10)]));for(var l=0,f=0;l<e.length;l++){var b,g=l>=0?e[l]:n[l+s];if((b=this.decodeTables[o][g])>=0);else if(b===r)l=c,b=this.defaultCharUnicode.charCodeAt(0);else if(b===a){var v=c>=0?e.slice(c,l+1):n.slice(c+s,l+1+s),p=12600*(v[0]-129)+1260*(v[1]-48)+10*(v[2]-129)+(v[3]-48),T=u(this.gb18030.gbChars,p);b=this.gb18030.uChars[T]+p-this.gb18030.gbChars[T]}else{if(b<=h){o=h-b;continue}if(!(b<=d))throw new Error("iconv-lite internal error: invalid decoding table value "+b+" at "+o+"/"+g);for(var S=this.decodeTableSeq[d-b],C=0;C<S.length-1;C++)b=S[C],t[f++]=255&b,t[f++]=b>>8;b=S[S.length-1]}if(b>65535){b-=65536;var y=55296+Math.floor(b/1024);t[f++]=255&y,t[f++]=y>>8,b=56320+b%1024}t[f++]=255&b,t[f++]=b>>8,o=0,c=l+1}return this.nodeIdx=o,this.prevBuf=c>=0?e.slice(c):n.slice(c+s),t.slice(0,f).toString("ucs2")},f.prototype.end=function(){for(var e="";this.prevBuf.length>0;){e+=this.defaultCharUnicode;var t=this.prevBuf.slice(1);this.prevBuf=i.alloc(0),this.nodeIdx=0,t.length>0&&(e+=this.write(t))}return this.nodeIdx=0,e}}};
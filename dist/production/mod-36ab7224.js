"use strict";exports.id=1208,exports.ids=[1208],exports.modules={210:function(r,t,e){var o,n=SyntaxError,a=Function,y=TypeError,p=function(r){try{return a('"use strict"; return ('+r+").constructor;")()}catch(r){}},i=Object.getOwnPropertyDescriptor;if(i)try{i({},"")}catch(r){i=null}var f=function(){throw new y},c=i?function(){try{return f}catch(r){try{return i(arguments,"callee").get}catch(r){return f}}}():f,l=e(1405)(),u=e(8185)(),s=Object.getPrototypeOf||(u?function(r){return r.__proto__}:null),A={},d="undefined"!=typeof Uint8Array&&s?s(Uint8Array):o,P={"%AggregateError%":"undefined"==typeof AggregateError?o:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?o:ArrayBuffer,"%ArrayIteratorPrototype%":l&&s?s([][Symbol.iterator]()):o,"%AsyncFromSyncIteratorPrototype%":o,"%AsyncFunction%":A,"%AsyncGenerator%":A,"%AsyncGeneratorFunction%":A,"%AsyncIteratorPrototype%":A,"%Atomics%":"undefined"==typeof Atomics?o:Atomics,"%BigInt%":"undefined"==typeof BigInt?o:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?o:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?o:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?o:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?o:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?o:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?o:FinalizationRegistry,"%Function%":a,"%GeneratorFunction%":A,"%Int8Array%":"undefined"==typeof Int8Array?o:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?o:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?o:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":l&&s?s(s([][Symbol.iterator]())):o,"%JSON%":"object"==typeof JSON?JSON:o,"%Map%":"undefined"==typeof Map?o:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&l&&s?s((new Map)[Symbol.iterator]()):o,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?o:Promise,"%Proxy%":"undefined"==typeof Proxy?o:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?o:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?o:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&l&&s?s((new Set)[Symbol.iterator]()):o,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?o:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":l&&s?s(""[Symbol.iterator]()):o,"%Symbol%":l?Symbol:o,"%SyntaxError%":n,"%ThrowTypeError%":c,"%TypedArray%":d,"%TypeError%":y,"%Uint8Array%":"undefined"==typeof Uint8Array?o:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?o:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?o:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?o:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?o:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?o:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?o:WeakSet};if(s)try{null.error}catch(r){var g=s(s(r));P["%Error.prototype%"]=g}var m=function r(t){var e;if("%AsyncFunction%"===t)e=p("async function () {}");else if("%GeneratorFunction%"===t)e=p("function* () {}");else if("%AsyncGeneratorFunction%"===t)e=p("async function* () {}");else if("%AsyncGenerator%"===t){var o=r("%AsyncGeneratorFunction%");o&&(e=o.prototype)}else if("%AsyncIteratorPrototype%"===t){var n=r("%AsyncGenerator%");n&&s&&(e=s(n.prototype))}return P[t]=e,e},S={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},E=e(8612),I=e(7642),h=E.call(Function.call,Array.prototype.concat),F=E.call(Function.apply,Array.prototype.splice),U=E.call(Function.call,String.prototype.replace),b=E.call(Function.call,String.prototype.slice),v=E.call(Function.call,RegExp.prototype.exec),R=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,w=/\\(\\)?/g,x=function(r,t){var e,o=r;if(I(S,o)&&(o="%"+(e=S[o])[0]+"%"),I(P,o)){var a=P[o];if(a===A&&(a=m(o)),void 0===a&&!t)throw new y("intrinsic "+r+" exists, but is not available. Please file an issue!");return{alias:e,name:o,value:a}}throw new n("intrinsic "+r+" does not exist!")};r.exports=function(r,t){if("string"!=typeof r||0===r.length)throw new y("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new y('"allowMissing" argument must be a boolean');if(null===v(/^%?[^%]*%?$/,r))throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var e=function(r){var t=b(r,0,1),e=b(r,-1);if("%"===t&&"%"!==e)throw new n("invalid intrinsic syntax, expected closing `%`");if("%"===e&&"%"!==t)throw new n("invalid intrinsic syntax, expected opening `%`");var o=[];return U(r,R,(function(r,t,e,n){o[o.length]=e?U(n,w,"$1"):t||r})),o}(r),o=e.length>0?e[0]:"",a=x("%"+o+"%",t),p=a.name,f=a.value,c=!1,l=a.alias;l&&(o=l[0],F(e,h([0,1],l)));for(var u=1,s=!0;u<e.length;u+=1){var A=e[u],d=b(A,0,1),g=b(A,-1);if(('"'===d||"'"===d||"`"===d||'"'===g||"'"===g||"`"===g)&&d!==g)throw new n("property names with quotes must have matching quotes");if("constructor"!==A&&s||(c=!0),I(P,p="%"+(o+="."+A)+"%"))f=P[p];else if(null!=f){if(!(A in f)){if(!t)throw new y("base intrinsic for "+r+" exists, but the property is not available.");return}if(i&&u+1>=e.length){var m=i(f,A);f=(s=!!m)&&"get"in m&&!("originalValue"in m.get)?m.get:f[A]}else s=I(f,A),f=f[A];s&&!c&&(P[p]=f)}}return f}}};
exports.id=3189,exports.ids=[3189],exports.modules={5518:function(t,e,s){s(1017);var n=s(7147);function o(){this.types=Object.create(null),this.extensions=Object.create(null)}o.prototype.define=function(t){for(var e in t){for(var s=t[e],n=0;n<s.length;n++)process.env.DEBUG_MIME&&this.types[s[n]]&&console.warn((this._loading||"define()").replace(/.*\//,""),'changes "'+s[n]+'" extension type from '+this.types[s[n]]+" to "+e),this.types[s[n]]=e;this.extensions[e]||(this.extensions[e]=s[0])}},o.prototype.load=function(t){this._loading=t;var e={};n.readFileSync(t,"ascii").split(/[\r\n]+/).forEach((function(t){var s=t.replace(/\s*#.*|^\s*|\s*$/g,"").split(/\s+/);e[s.shift()]=s})),this.define(e),this._loading=null},o.prototype.lookup=function(t,e){var s=t.replace(/^.*[\.\/\\]/,"").toLowerCase();return this.types[s]||e||this.default_type},o.prototype.extension=function(t){var e=t.match(/^\s*([^;\s]*)(?:;|\s|$)/)[1].toLowerCase();return this.extensions[e]};var i=new o;i.define(s(5799)),i.default_type=i.lookup("bin"),i.Mime=o,i.charsets={lookup:function(t,e){return/^text\/|^application\/(javascript|json)/.test(t)?"UTF-8":e}},t.exports=i}};
exports.id=7392,exports.ids=[7392],exports.modules={7824:function(s){var e=1e3,r=60*e,n=60*r,a=24*n,t=365.25*a;function c(s,e,r){if(!(s<e))return s<1.5*e?Math.floor(s/e)+" "+r:Math.ceil(s/e)+" "+r+"s"}s.exports=function(s,i){i=i||{};var u,o=typeof s;if("string"===o&&s.length>0)return function(s){if((s=String(s)).length>100)return;var c=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(s);if(!c)return;var i=parseFloat(c[1]);switch((c[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return i*t;case"days":case"day":case"d":return i*a;case"hours":case"hour":case"hrs":case"hr":case"h":return i*n;case"minutes":case"minute":case"mins":case"min":case"m":return i*r;case"seconds":case"second":case"secs":case"sec":case"s":return i*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(s);if("number"===o&&!1===isNaN(s))return i.long?c(u=s,a,"day")||c(u,n,"hour")||c(u,r,"minute")||c(u,e,"second")||u+" ms":function(s){if(s>=a)return Math.round(s/a)+"d";if(s>=n)return Math.round(s/n)+"h";if(s>=r)return Math.round(s/r)+"m";if(s>=e)return Math.round(s/e)+"s";return s+"ms"}(s);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(s))}}};
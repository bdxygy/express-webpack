exports.id=8703,exports.ids=[8703],exports.modules={9738:function(e,t,o){const r=o(7147),n=o(1017),s=o(2037),a=o(6113),c=o(9968).version,i=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;function l(e){console.log(`[dotenv@${c}][DEBUG] ${e}`)}function p(){return process.env.DOTENV_KEY&&process.env.DOTENV_KEY.length>0?process.env.DOTENV_KEY:""}function u(e,t){let o;try{o=new URL(t)}catch(e){if("ERR_INVALID_URL"===e.code)throw new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenv.org/vault/.env.vault?environment=development");throw e}const r=o.password;if(!r)throw new Error("INVALID_DOTENV_KEY: Missing key part");const n=o.searchParams.get("environment");if(!n)throw new Error("INVALID_DOTENV_KEY: Missing environment part");const s=`DOTENV_VAULT_${n.toUpperCase()}`,a=e.parsed[s];if(!a)throw new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${s} in your .env.vault file.`);return{ciphertext:a,key:r}}function f(e){let t=n.resolve(process.cwd(),".env");return e&&e.path&&e.path.length>0&&(t=e.path),t.endsWith(".vault")?t:`${t}.vault`}const d={configDotenv:function(e){let t=n.resolve(process.cwd(),".env"),o="utf8";const a=Boolean(e&&e.debug);var c;e&&(null!=e.path&&(t="~"===(c=e.path)[0]?n.join(s.homedir(),c.slice(1)):c),null!=e.encoding&&(o=e.encoding));try{const n=d.parse(r.readFileSync(t,{encoding:o}));return d.populate(process.env,n,e),{parsed:n}}catch(e){return a&&l(`Failed to load ${t} ${e.message}`),{error:e}}},_configVault:function(e){var t;t="Loading env from encrypted .env.vault",console.log(`[dotenv@${c}][INFO] ${t}`);const o=d._parseVault(e);return d.populate(process.env,o,e),{parsed:o}},_parseVault:function(e){const t=f(e),o=d.configDotenv({path:t});if(!o.parsed)throw new Error(`MISSING_DATA: Cannot parse ${t} for an unknown reason`);const r=p().split(","),n=r.length;let s;for(let e=0;e<n;e++)try{const t=u(o,r[e].trim());s=d.decrypt(t.ciphertext,t.key);break}catch(t){if(e+1>=n)throw t}return d.parse(s)},config:function(e){const t=f(e);return 0===p().length?d.configDotenv(e):r.existsSync(t)?d._configVault(e):(o=`You set DOTENV_KEY but you are missing a .env.vault file at ${t}. Did you forget to build it?`,console.log(`[dotenv@${c}][WARN] ${o}`),d.configDotenv(e));var o},decrypt:function(e,t){const o=Buffer.from(t.slice(-64),"hex");let r=Buffer.from(e,"base64");const n=r.slice(0,12),s=r.slice(-16);r=r.slice(12,-16);try{const e=a.createDecipheriv("aes-256-gcm",o,n);return e.setAuthTag(s),`${e.update(r)}${e.final()}`}catch(e){const t=e instanceof RangeError,o="Invalid key length"===e.message,r="Unsupported state or unable to authenticate data"===e.message;if(t||o){throw new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)")}if(r){throw new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY")}throw console.error("Error: ",e.code),console.error("Error: ",e.message),e}},parse:function(e){const t={};let o,r=e.toString();for(r=r.replace(/\r\n?/gm,"\n");null!=(o=i.exec(r));){const e=o[1];let r=o[2]||"";r=r.trim();const n=r[0];r=r.replace(/^(['"`])([\s\S]*)\1$/gm,"$2"),'"'===n&&(r=r.replace(/\\n/g,"\n"),r=r.replace(/\\r/g,"\r")),t[e]=r}return t},populate:function(e,t,o={}){const r=Boolean(o&&o.debug),n=Boolean(o&&o.override);if("object"!=typeof t)throw new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");for(const o of Object.keys(t))Object.prototype.hasOwnProperty.call(e,o)?(!0===n&&(e[o]=t[o]),r&&l(!0===n?`"${o}" is already defined and WAS overwritten`:`"${o}" is already defined and was NOT overwritten`)):e[o]=t[o]}};e.exports.configDotenv=d.configDotenv,e.exports._configVault=d._configVault,e.exports._parseVault=d._parseVault,e.exports.config=d.config,e.exports.decrypt=d.decrypt,e.exports.parse=d.parse,e.exports.populate=d.populate,e.exports=d}};
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.vue-logger-plugin"],{"45ec":function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.StringifyAndParseObjectsHook=o.StringifyObjectsHook=o.useLogger=o.createLogger=o.VueLogger=void 0;var r=t("d011");Object.defineProperty(o,"VueLogger",{enumerable:!0,get:function(){return r.VueLogger}}),Object.defineProperty(o,"createLogger",{enumerable:!0,get:function(){return r.createLogger}}),Object.defineProperty(o,"useLogger",{enumerable:!0,get:function(){return r.useLogger}});var n=t("e8f8");Object.defineProperty(o,"StringifyObjectsHook",{enumerable:!0,get:function(){return n.StringifyObjectsHook}}),Object.defineProperty(o,"StringifyAndParseObjectsHook",{enumerable:!0,get:function(){return n.StringifyAndParseObjectsHook}})},d011:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.useLogger=o.createLogger=o.VueLogger=void 0;const r=t("7a23"),n=Symbol("vue-logger-plugin"),i=["debug","info","warn","error","log"],s={enabled:!0,level:"debug"};class g{constructor(e){this.apply(e),this._consoleFunctions=i.filter(e=>"function"===typeof console[e])}apply(e){const o=this._options||s;this._options={...o,...e},this.installHooks(this._options.beforeHooks),this.installHooks(this._options.afterHooks)}debug(...e){this._invoke("debug",...e)}info(...e){this._invoke("info",...e)}warn(...e){this._invoke("warn",...e)}error(...e){this._invoke("error",...e)}log(...e){this._invoke("log",...e)}_invoke(e,...o){if(this._options.enabled&&i.indexOf(e)>=i.indexOf(this._options.level)){this.invokeHooks(this._options.beforeHooks,e,o);const t=e+" | ";this._consoleFunctions.includes(e)?console[e](t,...o):console.log(t,...o),this.invokeHooks(this._options.afterHooks,e,o)}}installHooks(e){e&&e.length>0&&e.forEach(e=>{if(e.install)try{e.install(this._options)}catch(o){console.warn("LoggerHook install failure",o)}})}invokeHooks(e,o,t){if(e&&e.length>0){const r={level:o,argumentArray:t};e.forEach(e=>{try{e.run(r)}catch(o){console.warn("LoggerHook run failure",o)}})}}get enabled(){return this._options.enabled}get level(){return this._options.level}install(e){e.provide(n,this),e.config.globalProperties.$log=this,e.config.globalProperties.$logger=this}}function l(e={}){return new g(e)}function u(){const e=r.inject(n);return e||console.warn("vue-logger-plugin :: useLogger missing inject"),e}o.VueLogger=g,o.createLogger=l,o.useLogger=u},e8f8:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.StringifyAndParseObjectsHook=o.StringifyObjectsHook=void 0,o.StringifyObjectsHook={run(e){for(let o=0;o<e.argumentArray.length;o++)null!=e.argumentArray[o]&&"object"===typeof e.argumentArray[o]&&(e.argumentArray[o]=JSON.stringify(e.argumentArray[o]))}},o.StringifyAndParseObjectsHook={run(e){for(let o=0;o<e.argumentArray.length;o++)null!=e.argumentArray[o]&&"object"===typeof e.argumentArray[o]&&(e.argumentArray[o]=JSON.parse(JSON.stringify(e.argumentArray[o])))}}}}]);
//# sourceMappingURL=npm.vue-logger-plugin.e6083e75.js.map
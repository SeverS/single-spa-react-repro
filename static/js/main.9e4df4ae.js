!function(){"use strict";var t={},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.m=t,function(){var t,n=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};e.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);e.r(i);var u={};t=t||[null,n({}),n([]),n(n)];for(var a=2&o&&r;"object"==typeof a&&!~t.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(t){u[t]=function(){return r[t]}}));return u.default=function(){return r},e.d(i,u),i}}(),e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(n,r){return e.f[r](t,n),n}),[]))},e.u=function(t){return"static/js/"+t+"."+{333:"9bc93eb9",410:"199d7ca3",787:"6b850914",795:"bd7beea4",944:"c18d8089"}[t]+".chunk.js"},e.miniCssF=function(t){return"static/css/"+t+".3bb1dbd5.chunk.css"},e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(i){if("object"===typeof window)return window}}(),e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){var t={},n="single-spa-react-repro:";e.l=function(r,o,i,u){if(t[r])t[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+i){a=l;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,e.nc&&a.setAttribute("nonce",e.nc),a.setAttribute("data-webpack",n+i),a.src=r),t[r]=[o];var p=function(n,e){a.onerror=a.onload=null,clearTimeout(h);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(e)})),n)return n(e)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.p="/single-spa-react-repro/",function(){if("undefined"!==typeof document){var t=function(t){return new Promise((function(n,r){var o=e.miniCssF(t),i=e.p+o;if(function(t,n){for(var e=document.getElementsByTagName("link"),r=0;r<e.length;r++){var o=(u=e[r]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(o===t||o===n))return u}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var u;if((o=(u=i[r]).getAttribute("data-href"))===t||o===n)return u}}(o,i))return n();!function(t,n,e,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=function(e){if(i.onerror=i.onload=null,"load"===e.type)r();else{var u=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.href||n,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,i.parentNode&&i.parentNode.removeChild(i),o(c)}},i.href=n,e?e.parentNode.insertBefore(i,e.nextSibling):document.head.appendChild(i)}(t,i,null,n,r)}))},n={179:0};e.f.miniCss=function(e,r){n[e]?r.push(n[e]):0!==n[e]&&{410:1}[e]&&r.push(n[e]=t(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}}(),function(){var t={179:0};e.f.j=function(n,r){var o=e.o(t,n)?t[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(e,r){o=t[n]=[e,r]}));r.push(o[2]=i);var u=e.p+e.u(n),a=new Error;e.l(u,(function(r){if(e.o(t,n)&&(0!==(o=t[n])&&(t[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}}),"chunk-"+n,n)}};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(n){return 0!==t[n]}))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(c)c(e)}for(n&&n(r);s<u.length;s++)i=u[s],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0},r=self.webpackChunksingle_spa_react_repro=self.webpackChunksingle_spa_react_repro||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=Object.freeze({__proto__:null,get start(){return Rt},get ensureJQuerySupport(){return ht},get setBootstrapMaxTime(){return Q},get setMountMaxTime(){return V},get setUnmountMaxTime(){return z},get setUnloadMaxTime(){return X},get registerApplication(){return At},get unregisterApplication(){return Nt},get getMountedApps(){return Ot},get getAppStatus(){return Tt},get unloadApplication(){return _t},get checkActivityFunctions(){return St},get getAppNames(){return Pt},get pathToActiveWhen(){return Lt},get navigateToUrl(){return it},get triggerAppChange(){return kt},get addErrorHandler(){return f},get removeErrorHandler(){return l},get mountRootParcel(){return $},get NOT_LOADED(){return d},get LOADING_SOURCE_CODE(){return m},get NOT_BOOTSTRAPPED(){return v},get BOOTSTRAPPING(){return w},get NOT_MOUNTED(){return g},get MOUNTING(){return y},get UPDATING(){return b},get LOAD_ERROR(){return T},get MOUNTED(){return E},get UNLOADING(){return P},get UNMOUNTING(){return O},get SKIP_BECAUSE_BROKEN(){return A}});function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var u=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof e.g?e.g:"undefined"!=typeof self?self:{}).CustomEvent,a=function(){try{var t=new u("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?u:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,n){var e=document.createEvent("CustomEvent");return n?e.initCustomEvent(t,n.bubbles,n.cancelable,n.detail):e.initCustomEvent(t,!1,!1,void 0),e}:function(t,n){var e=document.createEventObject();return e.type=t,n?(e.bubbles=Boolean(n.bubbles),e.cancelable=Boolean(n.cancelable),e.detail=n.detail):(e.bubbles=!1,e.cancelable=!1,e.detail=void 0),e},c=[];function s(t,n,e){var r=h(t,n,e);c.length?c.forEach((function(t){return t(r)})):setTimeout((function(){throw r}))}function f(t){if("function"!=typeof t)throw Error(p(28,!1));c.push(t)}function l(t){if("function"!=typeof t)throw Error(p(29,!1));var n=!1;return c=c.filter((function(e){var r=e===t;return n=n||r,!r})),n}function p(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];return"single-spa minified message #".concat(t,": ").concat(n?n+" ":"","See https://single-spa.js.org/error/?code=").concat(t).concat(r.length?"&arg=".concat(r.join("&arg=")):"")}function h(t,n,e){var r,o="".concat(D(n)," '").concat(_(n),"' died in status ").concat(n.status,": ");if(t instanceof Error){try{t.message=o+t.message}catch(t){}r=t}else{console.warn(p(30,!1,n.status,_(n)));try{r=Error(o+JSON.stringify(t))}catch(n){r=t}}return r.appOrParcelName=_(n),n.status=e,r}var d="NOT_LOADED",m="LOADING_SOURCE_CODE",v="NOT_BOOTSTRAPPED",w="BOOTSTRAPPING",g="NOT_MOUNTED",y="MOUNTING",E="MOUNTED",b="UPDATING",O="UNMOUNTING",P="UNLOADING",T="LOAD_ERROR",A="SKIP_BECAUSE_BROKEN";function S(t){return t.status===E}function N(t){try{return t.activeWhen(window.location)}catch(o){return s(o,t,A),!1}}function _(t){return t.name}function j(t){return Boolean(t.unmountThisParcel)}function D(t){return j(t)?"parcel":"application"}function L(){for(var t=arguments.length-1;t>0;t--)for(var n in arguments[t])"__proto__"!==n&&(arguments[t-1][n]=arguments[t][n]);return arguments[0]}function M(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return t[e];return null}function U(t){return t&&("function"==typeof t||(n=t,Array.isArray(n)&&!M(n,(function(t){return"function"!=typeof t}))));var n}function C(t,n){var e=t[n]||[];0===(e=Array.isArray(e)?e:[e]).length&&(e=[function(){return Promise.resolve()}]);var r=D(t),o=_(t);return function(t){return e.reduce((function(e,i,u){return e.then((function(){var e=i(t);return k(e)?e:Promise.reject(p(15,!1,r,o,n,u))}))}),Promise.resolve())}}function k(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}function x(t,n){return Promise.resolve().then((function(){return t.status!==v?t:(t.status=w,t.bootstrap?Y(t,"bootstrap").then(e).catch((function(e){if(n)throw h(e,t,A);return s(e,t,A),t})):Promise.resolve().then(e))}));function e(){return t.status=g,t}}function B(t,n){return Promise.resolve().then((function(){if(t.status!==E)return t;t.status=O;var e=Object.keys(t.parcels).map((function(n){return t.parcels[n].unmountThisParcel()}));return Promise.all(e).then(r,(function(e){return r().then((function(){var r=Error(e.message);if(n)throw h(r,t,A);s(r,t,A)}))})).then((function(){return t}));function r(){return Y(t,"unmount").then((function(){t.status=g})).catch((function(e){if(n)throw h(e,t,A);s(e,t,A)}))}}))}var I=!1,R=!1;function G(t,n){return Promise.resolve().then((function(){return t.status!==g?t:(I||(window.dispatchEvent(new a("single-spa:before-first-mount")),I=!0),Y(t,"mount").then((function(){return t.status=E,R||(window.dispatchEvent(new a("single-spa:first-mount")),R=!0),t})).catch((function(e){return t.status=E,B(t,!0).then(r,r);function r(){if(n)throw h(e,t,A);return s(e,t,A),t}})))}))}var W=0,F={parcels:{}};function $(){return K.apply(F,arguments)}function K(t,n){var e=this;if(!t||"object"!==o(t)&&"function"!=typeof t)throw Error(p(2,!1));if(t.name&&"string"!=typeof t.name)throw Error(p(3,!1,o(t.name)));if("object"!==o(n))throw Error(p(4,!1,name,o(n)));if(!n.domElement)throw Error(p(5,!1,name));var r,i=W++,u="function"==typeof t,a=u?t:function(){return Promise.resolve(t)},c={id:i,parcels:{},status:u?m:v,customProps:n,parentName:_(e),unmountThisParcel:function(){return w.then((function(){if(c.status!==E)throw Error(p(6,!1,name,c.status));return B(c,!0)})).then((function(t){return c.parentName&&delete e.parcels[c.id],t})).then((function(t){return f(t),t})).catch((function(t){throw c.status=A,l(t),t}))}};e.parcels[i]=c;var s=a();if(!s||"function"!=typeof s.then)throw Error(p(7,!1));var f,l,d=(s=s.then((function(t){if(!t)throw Error(p(8,!1));var n=t.name||"parcel-".concat(i);if(Object.prototype.hasOwnProperty.call(t,"bootstrap")&&!U(t.bootstrap))throw Error(p(9,!1,n));if(!U(t.mount))throw Error(p(10,!1,n));if(!U(t.unmount))throw Error(p(11,!1,n));if(t.update&&!U(t.update))throw Error(p(12,!1,n));var e=C(t,"bootstrap"),o=C(t,"mount"),u=C(t,"unmount");c.status=v,c.name=n,c.bootstrap=e,c.mount=o,c.unmount=u,c.timeouts=Z(t.timeouts),t.update&&(c.update=C(t,"update"),r.update=function(t){return c.customProps=t,q(function(t){return Promise.resolve().then((function(){if(t.status!==E)throw Error(p(32,!1,_(t)));return t.status=b,Y(t,"update").then((function(){return t.status=E,t})).catch((function(n){throw h(n,t,A)}))}))}(c))})}))).then((function(){return x(c,!0)})),w=d.then((function(){return G(c,!0)})),y=new Promise((function(t,n){f=t,l=n}));return r={mount:function(){return q(Promise.resolve().then((function(){if(c.status!==g)throw Error(p(13,!1,name,c.status));return e.parcels[i]=c,G(c)})))},unmount:function(){return q(c.unmountThisParcel())},getStatus:function(){return c.status},loadPromise:q(s),bootstrapPromise:q(d),mountPromise:q(w),unmountPromise:q(y)}}function q(t){return t.then((function(){return null}))}function H(t){var n=_(t),e="function"==typeof t.customProps?t.customProps(n,window.location):t.customProps;("object"!==o(e)||null===e||Array.isArray(e))&&(e={},console.warn(p(40,!1),n,e));var i=L({},e,{name:n,mountParcel:K.bind(t),singleSpa:r});return j(t)&&(i.unmountSelf=t.unmountThisParcel),i}var J={bootstrap:{millis:4e3,dieOnTimeout:!1,warningMillis:1e3},mount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unmount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unload:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},update:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3}};function Q(t,n,e){if("number"!=typeof t||t<=0)throw Error(p(16,!1));J.bootstrap={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function V(t,n,e){if("number"!=typeof t||t<=0)throw Error(p(17,!1));J.mount={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function z(t,n,e){if("number"!=typeof t||t<=0)throw Error(p(18,!1));J.unmount={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function X(t,n,e){if("number"!=typeof t||t<=0)throw Error(p(19,!1));J.unload={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function Y(t,n){var e=t.timeouts[n],r=e.warningMillis,o=D(t);return new Promise((function(i,u){var a=!1,c=!1;t[n](H(t)).then((function(t){a=!0,i(t)})).catch((function(t){a=!0,u(t)})),setTimeout((function(){return f(1)}),r),setTimeout((function(){return f(!0)}),e.millis);var s=p(31,!1,n,o,_(t),e.millis);function f(t){if(!a)if(!0===t)c=!0,e.dieOnTimeout?u(Error(s)):console.error(s);else if(!c){var n=t,o=n*r;console.warn(s),o+r<e.millis&&setTimeout((function(){return f(n+1)}),r)}}}))}function Z(t){var n={};for(var e in J)n[e]=L({},J[e],t&&t[e]||{});return n}function tt(t){return Promise.resolve().then((function(){return t.loadPromise?t.loadPromise:t.status!==d&&t.status!==T?t:(t.status=m,t.loadPromise=Promise.resolve().then((function(){var r=t.loadApp(H(t));if(!k(r))throw e=!0,Error(p(33,!1,_(t)));return r.then((function(e){var r;t.loadErrorTime=null,"object"!==o(n=e)&&(r=34),Object.prototype.hasOwnProperty.call(n,"bootstrap")&&!U(n.bootstrap)&&(r=35),U(n.mount)||(r=36),U(n.unmount)||(r=37);var i=D(n);if(r){var u;try{u=JSON.stringify(n)}catch(t){}return console.error(p(r,!1,i,_(t),u),n),s(void 0,t,A),t}return n.devtools&&n.devtools.overlays&&(t.devtools.overlays=L({},t.devtools.overlays,n.devtools.overlays)),t.status=v,t.bootstrap=C(n,"bootstrap"),t.mount=C(n,"mount"),t.unmount=C(n,"unmount"),t.unload=C(n,"unload"),t.timeouts=Z(n.timeouts),delete t.loadPromise,t}))})).catch((function(n){var r;return delete t.loadPromise,e?r=A:(r=T,t.loadErrorTime=(new Date).getTime()),s(n,t,r),t})));var n,e}))}var nt,et="undefined"!=typeof window,rt={hashchange:[],popstate:[]},ot=["hashchange","popstate"];function it(t){var n;if("string"==typeof t)n=t;else if(this&&this.href)n=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error(p(14,!1));n=t.currentTarget.href,t.preventDefault()}var e=lt(window.location.href),r=lt(n);0===n.indexOf("#")?window.location.hash=r.hash:e.host!==r.host&&r.host?window.location.href=n:r.pathname===e.pathname&&r.search===e.search?window.location.hash=r.hash:window.history.pushState(null,null,n)}function ut(t){var n=this;if(t){var e=t[0].type;ot.indexOf(e)>=0&&rt[e].forEach((function(e){try{e.apply(n,t)}catch(t){setTimeout((function(){throw t}))}}))}}function at(){xt([],arguments)}function ct(t,n){return function(){var e=window.location.href,r=t.apply(this,arguments),o=window.location.href;return nt&&e===o||(Gt()?window.dispatchEvent(function(t,n){var e;try{e=new PopStateEvent("popstate",{state:t})}catch(n){(e=document.createEvent("PopStateEvent")).initPopStateEvent("popstate",!1,!1,t)}return e.singleSpa=!0,e.singleSpaTrigger=n,e}(window.history.state,n)):xt([])),r}}if(et){window.addEventListener("hashchange",at),window.addEventListener("popstate",at);var st=window.addEventListener,ft=window.removeEventListener;window.addEventListener=function(t,n){if(!("function"==typeof n&&ot.indexOf(t)>=0)||M(rt[t],(function(t){return t===n})))return st.apply(this,arguments);rt[t].push(n)},window.removeEventListener=function(t,n){if(!("function"==typeof n&&ot.indexOf(t)>=0))return ft.apply(this,arguments);rt[t]=rt[t].filter((function(t){return t!==n}))},window.history.pushState=ct(window.history.pushState,"pushState"),window.history.replaceState=ct(window.history.replaceState,"replaceState"),window.singleSpaNavigate?console.warn(p(41,!1)):window.singleSpaNavigate=it}function lt(t){var n=document.createElement("a");return n.href=t,n}var pt=!1;function ht(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!pt){var n=t.fn.on,e=t.fn.off;t.fn.on=function(t,e){return dt.call(this,n,window.addEventListener,t,e,arguments)},t.fn.off=function(t,n){return dt.call(this,e,window.removeEventListener,t,n,arguments)},pt=!0}}function dt(t,n,e,r,o){return"string"!=typeof e?t.apply(this,o):(e.split(/\s+/).forEach((function(t){ot.indexOf(t)>=0&&(n(t,r),e=e.replace(t,""))})),""===e.trim()?this:t.apply(this,o))}var mt={};function vt(t){return Promise.resolve().then((function(){var n=mt[_(t)];if(!n)return t;if(t.status===d)return wt(t,n),t;if(t.status===P)return n.promise.then((function(){return t}));if(t.status!==g&&t.status!==T)return t;var e=t.status===T?Promise.resolve():Y(t,"unload");return t.status=P,e.then((function(){return wt(t,n),t})).catch((function(e){return function(t,n,e){delete mt[_(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,s(e,t,A),n.reject(e)}(t,n,e),t}))}))}function wt(t,n){delete mt[_(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=d,n.resolve()}function gt(t,n,e,r){mt[_(t)]={app:t,resolve:e,reject:r},Object.defineProperty(mt[_(t)],"promise",{get:n})}function yt(t){return mt[t]}var Et=[];function bt(){var t=[],n=[],e=[],r=[],o=(new Date).getTime();return Et.forEach((function(i){var u=i.status!==A&&N(i);switch(i.status){case T:u&&o-i.loadErrorTime>=200&&e.push(i);break;case d:case m:u&&e.push(i);break;case v:case g:!u&&yt(_(i))?t.push(i):u&&r.push(i);break;case E:u||n.push(i)}})),{appsToUnload:t,appsToUnmount:n,appsToLoad:e,appsToMount:r}}function Ot(){return Et.filter(S).map(_)}function Pt(){return Et.map(_)}function Tt(t){var n=M(Et,(function(n){return _(n)===t}));return n?n.status:null}function At(t,n,e,r){var i=function(t,n,e,r){var i,u={name:null,loadApp:null,activeWhen:null,customProps:null};return"object"===o(t)?(function(t){if(Array.isArray(t)||null===t)throw Error(p(39,!1));var n=["name","app","activeWhen","customProps"],e=Object.keys(t).reduce((function(t,e){return n.indexOf(e)>=0?t:t.concat(e)}),[]);if(0!==e.length)throw Error(p(38,!1,n.join(", "),e.join(", ")));if("string"!=typeof t.name||0===t.name.length)throw Error(p(20,!1));if("object"!==o(t.app)&&"function"!=typeof t.app)throw Error(p(20,!1));var r=function(t){return"string"==typeof t||"function"==typeof t};if(!(r(t.activeWhen)||Array.isArray(t.activeWhen)&&t.activeWhen.every(r)))throw Error(p(24,!1));if(!Dt(t.customProps))throw Error(p(22,!1))}(t),u.name=t.name,u.loadApp=t.app,u.activeWhen=t.activeWhen,u.customProps=t.customProps):(function(t,n,e,r){if("string"!=typeof t||0===t.length)throw Error(p(20,!1));if(!n)throw Error(p(23,!1));if("function"!=typeof e)throw Error(p(24,!1));if(!Dt(r))throw Error(p(22,!1))}(t,n,e,r),u.name=t,u.loadApp=n,u.activeWhen=e,u.customProps=r),u.loadApp="function"!=typeof(i=u.loadApp)?function(){return Promise.resolve(i)}:i,u.customProps=function(t){return t||{}}(u.customProps),u.activeWhen=function(t){var n=Array.isArray(t)?t:[t];return n=n.map((function(t){return"function"==typeof t?t:Lt(t)})),function(t){return n.some((function(n){return n(t)}))}}(u.activeWhen),u}(t,n,e,r);if(-1!==Pt().indexOf(i.name))throw Error(p(21,!1,i.name));Et.push(L({loadErrorTime:null,status:d,parcels:{},devtools:{overlays:{options:{},selectors:[]}}},i)),et&&(ht(),xt())}function St(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location;return Et.filter((function(n){return n.activeWhen(t)})).map(_)}function Nt(t){if(0===Et.filter((function(n){return _(n)===t})).length)throw Error(p(25,!1,t));return _t(t).then((function(){var n=Et.map(_).indexOf(t);Et.splice(n,1)}))}function _t(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if("string"!=typeof t)throw Error(p(26,!1));var e=M(Et,(function(n){return _(n)===t}));if(!e)throw Error(p(27,!1,t));var r,o=yt(_(e));if(n&&n.waitForUnmount){if(o)return o.promise;var i=new Promise((function(t,n){gt(e,(function(){return i}),t,n)}));return i}return o?(r=o.promise,jt(e,o.resolve,o.reject)):r=new Promise((function(t,n){gt(e,(function(){return r}),t,n),jt(e,t,n)})),r}function jt(t,n,e){B(t).then(vt).then((function(){n(),setTimeout((function(){xt()}))})).catch(e)}function Dt(t){return!t||"function"==typeof t||"object"===o(t)&&null!==t&&!Array.isArray(t)}function Lt(t,n){var e=function(t,n){var e=0,r=!1,o="^";"/"!==t[0]&&(t="/"+t);for(var i=0;i<t.length;i++){var u=t[i];(!r&&":"===u||r&&"/"===u)&&a(i)}return a(t.length),new RegExp(o,"i");function a(i){var u=t.slice(e,i).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");if(o+=r?"[^/]+/?":u,i===t.length)if(r)n&&(o+="$");else{var a=n?"":".*";o="/"===o.charAt(o.length-1)?"".concat(o).concat(a,"$"):"".concat(o,"(/").concat(a,")?(#.*)?$")}r=!r,e=i}}(t,n);return function(t){var n=t.origin;n||(n="".concat(t.protocol,"//").concat(t.host));var r=t.href.replace(n,"").replace(t.search,"").split("?")[0];return e.test(r)}}var Mt=!1,Ut=[],Ct=et&&window.location.href;function kt(){return xt()}function xt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(Mt)return new Promise((function(t,e){Ut.push({resolve:t,reject:e,eventArguments:n})}));var e,r=bt(),o=r.appsToUnload,u=r.appsToUnmount,c=r.appsToLoad,s=r.appsToMount,f=!1,l=Ct,p=Ct=window.location.href;return Gt()?(Mt=!0,e=o.concat(c,u,s),Promise.resolve().then((function(){if(window.dispatchEvent(new a(0===e.length?"single-spa:before-no-app-change":"single-spa:before-app-change",w(!0))),window.dispatchEvent(new a("single-spa:before-routing-event",w(!0,{cancelNavigation:h}))),f)return window.dispatchEvent(new a("single-spa:before-mount-routing-event",w(!0))),m(),void it(l);var n=o.map(vt),r=u.map(B).map((function(t){return t.then(vt)})).concat(n),i=Promise.all(r);i.then((function(){window.dispatchEvent(new a("single-spa:before-mount-routing-event",w(!0)))}));var p=c.map((function(t){return tt(t).then((function(t){return Bt(t,i)}))})),d=s.filter((function(t){return c.indexOf(t)<0})).map((function(t){return Bt(t,i)}));return i.catch((function(t){throw v(),t})).then((function(){return v(),Promise.all(p.concat(d)).catch((function(n){throw t.forEach((function(t){return t.reject(n)})),n})).then(m)}))}))):(e=c,Promise.resolve().then((function(){var t=c.map(tt);return Promise.all(t).then(v).then((function(){return[]})).catch((function(t){throw v(),t}))})));function h(){f=!0}function m(){var n=Ot();t.forEach((function(t){return t.resolve(n)}));try{var r=0===e.length?"single-spa:no-app-change":"single-spa:app-change";window.dispatchEvent(new a(r,w())),window.dispatchEvent(new a("single-spa:routing-event",w()))}catch(t){setTimeout((function(){throw t}))}if(Mt=!1,Ut.length>0){var o=Ut;Ut=[],xt(o)}return n}function v(){t.forEach((function(t){ut(t.eventArguments)})),ut(n)}function w(){var t,r=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0,h={},m=(i(t={},E,[]),i(t,g,[]),i(t,d,[]),i(t,A,[]),t);r?(c.concat(s).forEach((function(t,n){w(t,E)})),o.forEach((function(t){w(t,d)})),u.forEach((function(t){w(t,g)}))):e.forEach((function(t){w(t)}));var v={detail:{newAppStatuses:h,appsByNewStatus:m,totalAppChanges:e.length,originalEvent:null==n?void 0:n[0],oldUrl:l,newUrl:p,navigationIsCanceled:f}};return a&&L(v.detail,a),v;function w(t,n){var e=_(t);n=n||Tt(e),h[e]=n,(m[n]=m[n]||[]).push(e)}}}function Bt(t,n){return N(t)?x(t).then((function(t){return n.then((function(){return N(t)?G(t):t}))})):n.then((function(){return t}))}var It=!1;function Rt(t){var n;It=!0,t&&t.urlRerouteOnly&&(n=t.urlRerouteOnly,nt=n),et&&xt()}function Gt(){return It}et&&setTimeout((function(){It||console.warn(p(1,!1))}),5e3);var Wt={getRawAppData:function(){return[].concat(Et)},reroute:xt,NOT_LOADED:d,toLoadPromise:tt,toBootstrapPromise:x,unregisterApplication:Nt};et&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=Wt);var Ft=function(t){t&&t instanceof Function&&e.e(787).then(e.bind(e,787)).then((function(n){var e=n.getCLS,r=n.getFID,o=n.getFCP,i=n.getLCP,u=n.getTTFB;e(t),r(t),o(t),i(t),u(t)}))};At({app:function(){return Promise.all([e.e(795),e.e(410)]).then(e.bind(e,410))},name:"demo-app",activeWhen:function(){return!0},customProps:{domElement:document.getElementById("root")}}),Rt(),Ft()}();
//# sourceMappingURL=main.9e4df4ae.js.map
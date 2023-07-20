"use strict";/**
 * @name vue3-easter-egg-trigger
 * @version 1.0.2
 * @description This packages makes it nice and easy to add Easter Egg triggers to your Vue3 site.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://github.com/webdevnerdstuff/vue3-easter-egg-trigger
 * @repository https://github.com/webdevnerdstuff/vue3-easter-egg-trigger
 * @license MIT License
 */const T=require("lodash");function at(e,n){const t=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)t[r[o]]=!0;return n?o=>!!t[o.toLowerCase()]:o=>!!t[o]}const A=process.env.NODE_ENV!=="production"?Object.freeze({}):{};process.env.NODE_ENV==="production"||Object.freeze([]);const Dn=()=>{},ut=/^on[^a-z]/,lt=e=>ut.test(e),D=Object.assign,pt=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},dt=Object.prototype.hasOwnProperty,E=(e,n)=>dt.call(e,n),y=Array.isArray,te=e=>De(e)==="[object Map]",ft=e=>De(e)==="[object Set]",N=e=>typeof e=="function",C=e=>typeof e=="string",We=e=>typeof e=="symbol",x=e=>e!==null&&typeof e=="object",ht=e=>x(e)&&N(e.then)&&N(e.catch),vt=Object.prototype.toString,De=e=>vt.call(e),$n=e=>De(e).slice(8,-1),gt=e=>De(e)==="[object Object]",Je=e=>C(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_t=(e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))})(e=>e.charAt(0).toUpperCase()+e.slice(1)),ue=(e,n)=>!Object.is(e,n),yt=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})};let an;const Te=()=>an||(an=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ke(e){if(y(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],o=C(r)?Nt(r):Ke(r);if(o)for(const s in o)n[s]=o[s]}return n}return C(e)||x(e)?e:void 0}const mt=/;(?![^(]*\))/g,wt=/:([^]+)/,Et=/\/\*[^]*?\*\//g;function Nt(e){const n={};return e.replace(Et,"").split(mt).forEach(t=>{if(t){const r=t.split(wt);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function Be(e){let n="";if(C(e))n=e;else if(y(e))for(let t=0;t<e.length;t++){const r=Be(e[t]);r&&(n+=r+" ")}else if(x(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}function un(e,...n){console.warn(`[Vue warn] ${e}`,...n)}let Rn;const le=e=>{const n=new Set(e);return n.w=0,n.n=0,n},Cn=e=>(e.w&I)>0,jn=e=>(e.n&I)>0,Fe=new WeakMap;let ie=0,I=1;const Me=30;let O;const B=Symbol(process.env.NODE_ENV!=="production"?"iterate":""),Ie=Symbol(process.env.NODE_ENV!=="production"?"Map key iterate":"");class bt{constructor(n,t=null,r){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,function(o,s=Rn){s&&s.active&&s.effects.push(o)}(this,r)}run(){if(!this.active)return this.fn();let n=O,t=L;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=O,O=this,L=!0,I=1<<++ie,ie<=Me?(({deps:r})=>{if(r.length)for(let o=0;o<r.length;o++)r[o].w|=I})(this):ln(this),this.fn()}finally{ie<=Me&&(r=>{const{deps:o}=r;if(o.length){let s=0;for(let c=0;c<o.length;c++){const a=o[c];Cn(a)&&!jn(a)?a.delete(r):o[s++]=a,a.w&=~I,a.n&=~I}o.length=s}})(this),I=1<<--ie,O=this.parent,L=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){O===this?this.deferStop=!0:this.active&&(ln(this),this.onStop&&this.onStop(),this.active=!1)}}function ln(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let L=!0;const An=[];function Pn(){An.push(L),L=!1}function Tn(){const e=An.pop();L=e===void 0||e}function S(e,n,t){if(L&&O){let r=Fe.get(e);r||Fe.set(e,r=new Map);let o=r.get(t);o||r.set(t,o=le()),Ue(o,process.env.NODE_ENV!=="production"?{effect:O,target:e,type:n,key:t}:void 0)}}function Ue(e,n){let t=!1;ie<=Me?jn(e)||(e.n|=I,t=!Cn(e)):t=!e.has(O),t&&(e.add(O),O.deps.push(e),process.env.NODE_ENV!=="production"&&O.onTrack&&O.onTrack(D({effect:O},n)))}function q(e,n,t,r,o,s){const c=Fe.get(e);if(!c)return;let a=[];if(n==="clear")a=[...c.values()];else if(t==="length"&&y(e)){const u=Number(r);c.forEach((l,i)=>{(i==="length"||i>=u)&&a.push(l)})}else switch(t!==void 0&&a.push(c.get(t)),n){case"add":y(e)?Je(t)&&a.push(c.get("length")):(a.push(c.get(B)),te(e)&&a.push(c.get(Ie)));break;case"delete":y(e)||(a.push(c.get(B)),te(e)&&a.push(c.get(Ie)));break;case"set":te(e)&&a.push(c.get(B))}const p=process.env.NODE_ENV!=="production"?{target:e,type:n,key:t,newValue:r,oldValue:o,oldTarget:s}:void 0;if(a.length===1)a[0]&&(process.env.NODE_ENV!=="production"?Z(a[0],p):Z(a[0]));else{const u=[];for(const l of a)l&&u.push(...l);process.env.NODE_ENV!=="production"?Z(le(u),p):Z(le(u))}}function Z(e,n){const t=y(e)?e:[...e];for(const r of t)r.computed&&pn(r,n);for(const r of t)r.computed||pn(r,n)}function pn(e,n){(e!==O||e.allowRecurse)&&(process.env.NODE_ENV!=="production"&&e.onTrigger&&e.onTrigger(D({effect:e},n)),e.scheduler?e.scheduler():e.run())}const Ot=at("__proto__,__v_isRef,__isVue"),Fn=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(We)),kt=Ge(),Vt=Ge(!0),xt=Ge(!0,!0),dn=St();function St(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const r=v(this);for(let s=0,c=this.length;s<c;s++)S(r,"get",s+"");const o=r[n](...t);return o===-1||o===!1?r[n](...t.map(v)):o}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){Pn();const r=v(this)[n].apply(this,t);return Tn(),r}}),e}function Dt(e){const n=v(this);return S(n,"has",e),n.hasOwnProperty(e)}function Ge(e=!1,n=!1){return function(t,r,o){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return n;if(r==="__v_raw"&&o===(e?n?Ln:zn:n?zt:Un).get(t))return t;const s=y(t);if(!e){if(s&&E(dn,r))return Reflect.get(dn,r,o);if(r==="hasOwnProperty")return Dt}const c=Reflect.get(t,r,o);return(We(r)?Fn.has(r):Ot(r))?c:(e||S(t,"get",r),n?c:V(c)?s&&Je(r)?c:c.value:x(c)?e?qn(c):J(c):c)}}function $t(e=!1){return function(n,t,r,o){let s=n[t];if(H(s)&&V(s)&&!V(r))return!1;if(!e&&(ke(r)||H(r)||(s=v(s),r=v(r)),!y(n)&&V(s)&&!V(r)))return s.value=r,!0;const c=y(n)&&Je(t)?Number(t)<n.length:E(n,t),a=Reflect.set(n,t,r,o);return n===v(o)&&(c?ue(r,s)&&q(n,"set",t,r,s):q(n,"add",t,r)),a}}const Rt={get:kt,set:$t(),deleteProperty:function(e,n){const t=E(e,n),r=e[n],o=Reflect.deleteProperty(e,n);return o&&t&&q(e,"delete",n,void 0,r),o},has:function(e,n){const t=Reflect.has(e,n);return We(n)&&Fn.has(n)||S(e,"has",n),t},ownKeys:function(e){return S(e,"iterate",y(e)?"length":B),Reflect.ownKeys(e)}},Mn={get:Vt,set:(e,n)=>(process.env.NODE_ENV!=="production"&&un(`Set operation on key "${String(n)}" failed: target is readonly.`,e),!0),deleteProperty:(e,n)=>(process.env.NODE_ENV!=="production"&&un(`Delete operation on key "${String(n)}" failed: target is readonly.`,e),!0)},Ct=D({},Mn,{get:xt}),Qe=e=>e,$e=e=>Reflect.getPrototypeOf(e);function he(e,n,t=!1,r=!1){const o=v(e=e.__v_raw),s=v(n);t||(n!==s&&S(o,"get",n),S(o,"get",s));const{has:c}=$e(o),a=r?Qe:t?Ze:pe;return c.call(o,n)?a(e.get(n)):c.call(o,s)?a(e.get(s)):void(e!==o&&e.get(n))}function ve(e,n=!1){const t=this.__v_raw,r=v(t),o=v(e);return n||(e!==o&&S(r,"has",e),S(r,"has",o)),e===o?t.has(e):t.has(e)||t.has(o)}function ge(e,n=!1){return e=e.__v_raw,!n&&S(v(e),"iterate",B),Reflect.get(e,"size",e)}function fn(e){e=v(e);const n=v(this);return $e(n).has.call(n,e)||(n.add(e),q(n,"add",e,e)),this}function hn(e,n){n=v(n);const t=v(this),{has:r,get:o}=$e(t);let s=r.call(t,e);s?process.env.NODE_ENV!=="production"&&In(t,r,e):(e=v(e),s=r.call(t,e));const c=o.call(t,e);return t.set(e,n),s?ue(n,c)&&q(t,"set",e,n,c):q(t,"add",e,n),this}function vn(e){const n=v(this),{has:t,get:r}=$e(n);let o=t.call(n,e);o?process.env.NODE_ENV!=="production"&&In(n,t,e):(e=v(e),o=t.call(n,e));const s=r?r.call(n,e):void 0,c=n.delete(e);return o&&q(n,"delete",e,void 0,s),c}function gn(){const e=v(this),n=e.size!==0,t=process.env.NODE_ENV!=="production"?te(e)?new Map(e):new Set(e):void 0,r=e.clear();return n&&q(e,"clear",void 0,void 0,t),r}function _e(e,n){return function(t,r){const o=this,s=o.__v_raw,c=v(s),a=n?Qe:e?Ze:pe;return!e&&S(c,"iterate",B),s.forEach((p,u)=>t.call(r,a(p),a(u),o))}}function ye(e,n,t){return function(...r){const o=this.__v_raw,s=v(o),c=te(s),a=e==="entries"||e===Symbol.iterator&&c,p=e==="keys"&&c,u=o[e](...r),l=t?Qe:n?Ze:pe;return!n&&S(s,"iterate",p?Ie:B),{next(){const{value:i,done:d}=u.next();return d?{value:i,done:d}:{value:a?[l(i[0]),l(i[1])]:l(i),done:d}},[Symbol.iterator](){return this}}}}function F(e){return function(...n){if(process.env.NODE_ENV!=="production"){const t=n[0]?`on key "${n[0]}" `:"";console.warn(`${_t(e)} operation ${t}failed: target is readonly.`,v(this))}return e!=="delete"&&this}}function jt(){const e={get(o){return he(this,o)},get size(){return ge(this)},has:ve,add:fn,set:hn,delete:vn,clear:gn,forEach:_e(!1,!1)},n={get(o){return he(this,o,!1,!0)},get size(){return ge(this)},has:ve,add:fn,set:hn,delete:vn,clear:gn,forEach:_e(!1,!0)},t={get(o){return he(this,o,!0)},get size(){return ge(this,!0)},has(o){return ve.call(this,o,!0)},add:F("add"),set:F("set"),delete:F("delete"),clear:F("clear"),forEach:_e(!0,!1)},r={get(o){return he(this,o,!0,!0)},get size(){return ge(this,!0)},has(o){return ve.call(this,o,!0)},add:F("add"),set:F("set"),delete:F("delete"),clear:F("clear"),forEach:_e(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=ye(o,!1,!1),t[o]=ye(o,!0,!1),n[o]=ye(o,!1,!0),r[o]=ye(o,!0,!0)}),[e,t,n,r]}const[At,Pt,Tt,Ft]=jt();function Xe(e,n){const t=n?e?Ft:Tt:e?Pt:At;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(E(t,o)&&o in r?t:r,o,s)}const Mt={get:Xe(!1,!1)},It={get:Xe(!0,!1)},Ut={get:Xe(!0,!0)};function In(e,n,t){const r=v(t);if(r!==t&&n.call(e,r)){const o=$n(e);console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Un=new WeakMap,zt=new WeakMap,zn=new WeakMap,Ln=new WeakMap;function J(e){return H(e)?e:Ye(e,!1,Rt,Mt,Un)}function qn(e){return Ye(e,!0,Mn,It,zn)}function me(e){return Ye(e,!0,Ct,Ut,Ln)}function Ye(e,n,t,r,o){if(!x(e))return process.env.NODE_ENV!=="production"&&console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&(!n||!e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const c=(a=e).__v_skip||!Object.isExtensible(a)?0:function(u){switch(u){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}($n(a));var a;if(c===0)return e;const p=new Proxy(e,c===2?r:t);return o.set(e,p),p}function G(e){return H(e)?G(e.__v_raw):!(!e||!e.__v_isReactive)}function H(e){return!(!e||!e.__v_isReadonly)}function ke(e){return!(!e||!e.__v_isShallow)}function Re(e){return G(e)||H(e)}function v(e){const n=e&&e.__v_raw;return n?v(n):e}const pe=e=>x(e)?J(e):e,Ze=e=>x(e)?qn(e):e;function V(e){return!(!e||e.__v_isRef!==!0)}function we(e){return function(n,t){return V(n)?n:new Lt(n,t)}(e,!1)}class Lt{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:v(n),this._value=t?n:pe(n)}get value(){var n;return n=this,L&&O&&(n=v(n),process.env.NODE_ENV!=="production"?Ue(n.dep||(n.dep=le()),{target:n,type:"get",key:"value"}):Ue(n.dep||(n.dep=le()))),this._value}set value(n){const t=this.__v_isShallow||ke(n)||H(n);n=t?n:v(n),ue(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:pe(n),function(r,o){const s=(r=v(r)).dep;s&&(process.env.NODE_ENV!=="production"?Z(s,{target:r,type:"set",key:"value",newValue:o}):Z(s))}(this,n))}}const qt={get:(e,n,t)=>{return V(r=Reflect.get(e,n,t))?r.value:r;var r},set:(e,n,t,r)=>{const o=e[n];return V(o)&&!V(t)?(o.value=t,!0):Reflect.set(e,n,t,r)}},K=[];function k(e,...n){if(process.env.NODE_ENV==="production")return;Pn();const t=K.length?K[K.length-1].component:null,r=t&&t.appContext.config.warnHandler,o=function(){let s=K[K.length-1];if(!s)return[];const c=[];for(;s;){const a=c[0];a&&a.vnode===s?a.recurseCount++:c.push({vnode:s,recurseCount:0});const p=s.component&&s.component.parent;s=p&&p.vnode}return c}();if(r)Q(r,t,11,[e+n.join(""),t&&t.proxy,o.map(({vnode:s})=>`at <${Sn(t,s.type)}>`).join(`
`),o]);else{const s=[`[Vue warn]: ${e}`,...n];o.length&&s.push(`
`,...function(c){const a=[];return c.forEach((p,u)=>{a.push(...u===0?[]:[`
`],...function({vnode:l,recurseCount:i}){const d=i>0?`... (${i} recursive calls)`:"",f=!!l.component&&l.component.parent==null,_=` at <${Sn(l.component,l.type,f)}`,m=">"+d;return l.props?[_,...Ht(l.props),m]:[_+m]}(p))}),a}(o)),console.warn(...s)}Tn()}function Ht(e){const n=[],t=Object.keys(e);return t.slice(0,3).forEach(r=>{n.push(...Hn(r,e[r]))}),t.length>3&&n.push(" ..."),n}function Hn(e,n,t){return C(n)?(n=JSON.stringify(n),t?n:[`${e}=${n}`]):typeof n=="number"||typeof n=="boolean"||n==null?t?n:[`${e}=${n}`]:V(n)?(n=Hn(e,v(n.value),!0),t?n:[`${e}=Ref<`,n,">"]):N(n)?[`${e}=fn${n.name?`<${n.name}>`:""}`]:(n=v(n),t?n:[`${e}=`,n])}const _n={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function Q(e,n,t,r){let o;try{o=r?e(...r):e()}catch(s){Wn(s,n,t)}return o}function ze(e,n,t,r){if(N(e)){const s=Q(e,n,t,r);return s&&ht(s)&&s.catch(c=>{Wn(c,n,t)}),s}const o=[];for(let s=0;s<e.length;s++)o.push(ze(e[s],n,t,r));return o}function Wn(e,n,t,r=!0){const o=n?n.vnode:null;if(n){let s=n.parent;const c=n.proxy,a=process.env.NODE_ENV!=="production"?_n[t]:t;for(;s;){const u=s.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](e,c,a)===!1)return}s=s.parent}const p=n.appContext.config.errorHandler;if(p)return void Q(p,null,10,[e,c,a])}(function(s,c,a,p=!0){if(process.env.NODE_ENV!=="production"){const l=_n[c];if(a&&(u=a,K.push(u)),k("Unhandled error"+(l?` during execution of ${l}`:"")),a&&K.pop(),p)throw s;console.error(s)}else console.error(s);var u})(e,t,o,r)}let Ve=!1,Le=!1;const R=[];let U=0;const ee=[];let j=null,M=0;const Jn=Promise.resolve();let en=null;const Wt=100;function Jt(e){const n=en||Jn;return e?n.then(this?e.bind(this):e):n}function nn(e){R.length&&R.includes(e,Ve&&e.allowRecurse?U+1:U)||(e.id==null?R.push(e):R.splice(function(n){let t=U+1,r=R.length;for(;t<r;){const o=t+r>>>1;de(R[o])<n?t=o+1:r=o}return t}(e.id),0,e),Kn())}function Kn(){Ve||Le||(Le=!0,en=Jn.then(Gn))}function Bn(e){y(e)?ee.push(...e):j&&j.includes(e,e.allowRecurse?M+1:M)||ee.push(e),Kn()}const de=e=>e.id==null?1/0:e.id,Kt=(e,n)=>{const t=de(e)-de(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function Gn(e){Le=!1,Ve=!0,process.env.NODE_ENV!=="production"&&(e=e||new Map),R.sort(Kt);const n=process.env.NODE_ENV!=="production"?t=>yn(e,t):Dn;try{for(U=0;U<R.length;U++){const t=R[U];if(t&&t.active!==!1){if(process.env.NODE_ENV!=="production"&&n(t))continue;Q(t,null,14)}}}finally{U=0,R.length=0,function(t){if(ee.length){const r=[...new Set(ee)];if(ee.length=0,j)return void j.push(...r);for(j=r,process.env.NODE_ENV!=="production"&&(t=t||new Map),j.sort((o,s)=>de(o)-de(s)),M=0;M<j.length;M++)process.env.NODE_ENV!=="production"&&yn(t,j[M])||j[M]();j=null,M=0}}(e),Ve=!1,en=null,(R.length||ee.length)&&Gn(e)}}function yn(e,n){if(e.has(n)){const t=e.get(n);if(t>Wt){const r=n.ownerInstance,o=r&&et(r.type);return k(`Maximum recursive updates exceeded${o?` in component <${o}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}e.set(n,t+1)}else e.set(n,1)}const re=new Set;process.env.NODE_ENV!=="production"&&(Te().__VUE_HMR_RUNTIME__={createRecord:Ce(function(e,n){return Ee.has(e)?!1:(Ee.set(e,{initialDef:se(n),instances:new Set}),!0)}),rerender:Ce(function(e,n){const t=Ee.get(e);t&&(t.initialDef.render=n,[...t.instances].forEach(r=>{n&&(r.render=n,se(r.type).render=n),r.renderCache=[],r.update()}))}),reload:Ce(function(e,n){const t=Ee.get(e);if(!t)return;n=se(n),mn(t.initialDef,n);const r=[...t.instances];for(const o of r){const s=se(o.type);re.has(s)||(s!==t.initialDef&&mn(s,n),re.add(s)),o.appContext.propsCache.delete(o.type),o.appContext.emitsCache.delete(o.type),o.appContext.optionsCache.delete(o.type),o.ceReload?(re.add(s),o.ceReload(n.styles),re.delete(s)):o.parent?nn(o.parent.update):o.appContext.reload?o.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Bn(()=>{for(const o of r)re.delete(se(o.type))})})});const Ee=new Map;function se(e){return nt(e)?e.__vccOpts:e}function mn(e,n){D(e,n);for(const t in e)t==="__file"||t in n||delete e[t]}function Ce(e){return(n,t)=>{try{return e(n,t)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let z=null,Bt=null;const Ne={};function Gt(e,n,{immediate:t,deep:r,flush:o,onTrack:s,onTrigger:c}=A){var a;process.env.NODE_ENV==="production"||n||(t!==void 0&&k('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&k('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const p=h=>{k("Invalid watch source: ",h,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=Rn===((a=oe)==null?void 0:a.scope)?oe:null;let l,i,d=!1,f=!1;if(V(e)?(l=()=>e.value,d=ke(e)):G(e)?(l=()=>e,r=!0):y(e)?(f=!0,d=e.some(h=>G(h)||ke(h)),l=()=>e.map(h=>V(h)?h.value:G(h)?ne(h):N(h)?Q(h,u,2):void(process.env.NODE_ENV!=="production"&&p(h)))):N(e)?l=n?()=>Q(e,u,2):()=>{if(!u||!u.isUnmounted)return i&&i(),ze(e,u,3,[_])}:(l=Dn,process.env.NODE_ENV!=="production"&&p(e)),n&&r){const h=l;l=()=>ne(h())}let _=h=>{i=g.onStop=()=>{Q(h,u,4)}},m=f?new Array(e.length).fill(Ne):Ne;const w=()=>{if(g.active)if(n){const h=g.run();(r||d||(f?h.some(($,P)=>ue($,m[P])):ue(h,m)))&&(i&&i(),ze(n,u,3,[h,m===Ne?void 0:f&&m[0]===Ne?[]:m,_]),m=h)}else g.run()};let W;w.allowRecurse=!!n,o==="sync"?W=w:o==="post"?W=()=>On(w,u&&u.suspense):(w.pre=!0,u&&(w.id=u.uid),W=()=>nn(w));const g=new bt(l,W);return process.env.NODE_ENV!=="production"&&(g.onTrack=s,g.onTrigger=c),n?t?w():m=g.run():o==="post"?On(g.run.bind(g),u&&u.suspense):g.run(),()=>{g.stop(),u&&u.scope&&pt(u.scope.effects,g)}}function Qt(e,n,t){const r=this.proxy,o=C(e)?e.includes(".")?function(p,u){const l=u.split(".");return()=>{let i=p;for(let d=0;d<l.length&&i;d++)i=i[l[d]];return i}}(r,e):()=>r[e]:e.bind(r,r);let s;N(n)?s=n:(s=n.handler,t=n);const c=oe;xn(this);const a=Gt(o,s.bind(r),t);return c?xn(c):ro(),a}function ne(e,n){if(!x(e)||e.__v_skip||(n=n||new Set).has(e))return e;if(n.add(e),V(e))ne(e.value,n);else if(y(e))for(let t=0;t<e.length;t++)ne(e[t],n);else if(ft(e)||te(e))e.forEach(t=>{ne(t,n)});else if(gt(e))for(const t in e)ne(e[t],n);return e}const Xt=Symbol.for("v-ndc"),qe=e=>e?4&e.vnode.shapeFlag?function(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy((r=n.exposed,yt(r,"__v_skip",!0),G(t=r)?t:new Proxy(t,qt)),{get:(o,s)=>s in o?o[s]:s in ae?ae[s](n):void 0,has:(o,s)=>s in o||s in ae}));var t,r}(e)||e.proxy:qe(e.parent):null,ae=D(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>process.env.NODE_ENV!=="production"?me(e.props):e.props,$attrs:e=>process.env.NODE_ENV!=="production"?me(e.attrs):e.attrs,$slots:e=>process.env.NODE_ENV!=="production"?me(e.slots):e.slots,$refs:e=>process.env.NODE_ENV!=="production"?me(e.refs):e.refs,$parent:e=>qe(e.parent),$root:e=>qe(e.root),$emit:e=>e.emit,$options:e=>function(n){const t=n.type,{mixins:r,extends:o}=t,{mixins:s,optionsCache:c,config:{optionMergeStrategies:a}}=n.appContext,p=c.get(t);let u;return p?u=p:s.length||r||o?(u={},s.length&&s.forEach(l=>xe(u,l,a,!0)),xe(u,t,a)):u=t,x(t)&&c.set(t,u),u}(e),$forceUpdate:e=>e.f||(e.f=()=>nn(e.update)),$nextTick:e=>e.n||(e.n=Jt.bind(e.proxy)),$watch:e=>Qt.bind(e)}),je=(e,n)=>e!==A&&!e.__isScriptSetup&&E(e,n),Yt={get({_:e},n){const{ctx:t,setupState:r,data:o,props:s,accessCache:c,type:a,appContext:p}=e;if(process.env.NODE_ENV!=="production"&&n==="__isVue")return!0;let u;if(n[0]!=="$"){const f=c[n];if(f!==void 0)switch(f){case 1:return r[n];case 2:return o[n];case 4:return t[n];case 3:return s[n]}else{if(je(r,n))return c[n]=1,r[n];if(o!==A&&E(o,n))return c[n]=2,o[n];if((u=e.propsOptions[0])&&E(u,n))return c[n]=3,s[n];if(t!==A&&E(t,n))return c[n]=4,t[n];c[n]=0}}const l=ae[n];let i,d;return l?(n==="$attrs"?(S(e,"get",n),process.env.NODE_ENV):process.env.NODE_ENV!=="production"&&n==="$slots"&&S(e,"get",n),l(e)):(i=a.__cssModules)&&(i=i[n])?i:t!==A&&E(t,n)?(c[n]=4,t[n]):(d=p.config.globalProperties,E(d,n)?d[n]:void(process.env.NODE_ENV==="production"||!z||C(n)&&n.indexOf("__v")===0||(o!==A&&(f=>f==="_"||f==="$")(n[0])&&E(o,n)?k(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===z&&k(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))))},set({_:e},n,t){const{data:r,setupState:o,ctx:s}=e;return je(o,n)?(o[n]=t,!0):process.env.NODE_ENV!=="production"&&o.__isScriptSetup&&E(o,n)?(k(`Cannot mutate <script setup> binding "${n}" from Options API.`),!1):r!==A&&E(r,n)?(r[n]=t,!0):E(e.props,n)?(process.env.NODE_ENV!=="production"&&k(`Attempting to mutate prop "${n}". Props are readonly.`),!1):n[0]==="$"&&n.slice(1)in e?(process.env.NODE_ENV!=="production"&&k(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`),!1):(process.env.NODE_ENV!=="production"&&n in e.appContext.config.globalProperties?Object.defineProperty(s,n,{enumerable:!0,configurable:!0,value:t}):s[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:o,propsOptions:s}},c){let a;return!!t[c]||e!==A&&E(e,c)||je(n,c)||(a=s[0])&&E(a,c)||E(r,c)||E(ae,c)||E(o.config.globalProperties,c)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:E(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function wn(e){return y(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}function xe(e,n,t,r=!1){const{mixins:o,extends:s}=n;s&&xe(e,s,t,!0),o&&o.forEach(c=>xe(e,c,t,!0));for(const c in n)if(r&&c==="expose")process.env.NODE_ENV!=="production"&&k('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=Zt[c]||t&&t[c];e[c]=a?a(e[c],n[c]):n[c]}return e}process.env.NODE_ENV!=="production"&&(Yt.ownKeys=e=>(k("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e)));const Zt={data:En,props:bn,emits:bn,methods:ce,computed:ce,beforeCreate:b,created:b,beforeMount:b,mounted:b,beforeUpdate:b,updated:b,beforeDestroy:b,beforeUnmount:b,destroyed:b,unmounted:b,activated:b,deactivated:b,errorCaptured:b,serverPrefetch:b,components:ce,directives:ce,watch:function(e,n){if(!e)return n;if(!n)return e;const t=D(Object.create(null),e);for(const r in n)t[r]=b(e[r],n[r]);return t},provide:En,inject:function(e,n){return ce(Nn(e),Nn(n))}};function En(e,n){return n?e?function(){return D(N(e)?e.call(this,this):e,N(n)?n.call(this,this):n)}:n:e}function Nn(e){if(y(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function b(e,n){return e?[...new Set([].concat(e,n))]:n}function ce(e,n){return e?D(Object.create(null),e,n):n}function bn(e,n){return e?y(e)&&y(n)?[...new Set([...e,...n])]:D(Object.create(null),wn(e),wn(n??{})):n}const On=function(e,n){n&&n.pendingBranch?y(e)?n.effects.push(...e):n.effects.push(e):Bn(e)},Qn=Symbol.for("v-fgt"),eo=Symbol.for("v-txt"),no=Symbol.for("v-cmt");let X=null;const Xn="__vInternal",Yn=({key:e})=>e??null,Oe=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?C(e)||V(e)||N(e)?{i:z,r:e,k:n,f:!!t}:e:null),to=process.env.NODE_ENV!=="production"?(...e)=>kn(...e):kn;function kn(e,n=null,t=null,r=0,o=null,s=!1){if(e&&e!==Xt||(process.env.NODE_ENV==="production"||e||k(`Invalid vnode type when creating vnode: ${e}.`),e=no),(c=e)&&c.__v_isVNode===!0){const p=Se(e,n,!0);return t&&He(p,t),!s&&X&&(6&p.shapeFlag?X[X.indexOf(e)]=p:X.push(p)),p.patchFlag|=-2,p}var c;if(nt(e)&&(e=e.__vccOpts),n){n=function(l){return l?Re(l)||Xn in l?D({},l):l:null}(n);let{class:p,style:u}=n;p&&!C(p)&&(n.class=Be(p)),x(u)&&(Re(u)&&!y(u)&&(u=D({},u)),n.style=Ke(u))}const a=C(e)?1:(p=>p.__isSuspense)(e)?128:(p=>p.__isTeleport)(e)?64:x(e)?4:N(e)?2:0;return process.env.NODE_ENV!=="production"&&4&a&&Re(e)&&k("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e=v(e)),function(p,u=null,l=null,i=0,d=null,f=p===Qn?0:1,_=!1,m=!1){const w={__v_isVNode:!0,__v_skip:!0,type:p,props:u,key:u&&Yn(u),ref:u&&Oe(u),scopeId:Bt,slotScopeIds:null,children:l,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:f,patchFlag:i,dynamicProps:d,dynamicChildren:null,appContext:null,ctx:z};return m?(He(w,l),128&f&&p.normalize(w)):l&&(w.shapeFlag|=C(l)?8:16),process.env.NODE_ENV!=="production"&&w.key!=w.key&&k("VNode created with invalid key (NaN). VNode type:",w.type),!_&&X&&(w.patchFlag>0||6&f)&&w.patchFlag!==32&&X.push(w),w}(e,n,t,r,o,a,s,!0)}function Se(e,n,t=!1){const{props:r,ref:o,patchFlag:s,children:c}=e,a=n?function(...p){const u={};for(let l=0;l<p.length;l++){const i=p[l];for(const d in i)if(d==="class")u.class!==i.class&&(u.class=Be([u.class,i.class]));else if(d==="style")u.style=Ke([u.style,i.style]);else if(lt(d)){const f=u[d],_=i[d];!_||f===_||y(f)&&f.includes(_)||(u[d]=f?[].concat(f,_):_)}else d!==""&&(u[d]=i[d])}return u}(r||{},n):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Yn(a),ref:n&&n.ref?t&&o?y(o)?o.concat(Oe(n)):[o,Oe(n)]:Oe(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:process.env.NODE_ENV!=="production"&&s===-1&&y(c)?c.map(Zn):c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Qn?s===-1?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Se(e.ssContent),ssFallback:e.ssFallback&&Se(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Zn(e){const n=Se(e);return y(e.children)&&(n.children=e.children.map(Zn)),n}function oo(e=" ",n=0){return to(eo,null,e,n)}function He(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(y(n))t=16;else if(typeof n=="object"){if(65&r){const o=n.default;return void(o&&(o._c&&(o._d=!1),He(e,o()),o._c&&(o._d=!0)))}{t=32;const o=n._;o||Xn in n?o===3&&z&&(z.slots._===1?n._=1:(n._=2,e.patchFlag|=1024)):n._ctx=z}}else N(n)?(n={default:n,_ctx:z},t=32):(n=String(n),64&r?(t=16,n=[oo(n)]):t=8);e.children=n,e.shapeFlag|=t}let tn,Y,oe=null,Vn="__VUE_INSTANCE_SETTERS__";(Y=Te()[Vn])||(Y=Te()[Vn]=[]),Y.push(e=>oe=e),tn=e=>{Y.length>1?Y.forEach(n=>n(e)):Y[0](e)};const xn=e=>{tn(e),e.scope.on()},ro=()=>{oe&&oe.scope.off(),tn(null)},so=/(?:^|[-_])(\w)/g,co=e=>e.replace(so,n=>n.toUpperCase()).replace(/[-_]/g,"");function et(e,n=!0){return N(e)?e.displayName||e.name:e.name||n&&e.__name}function Sn(e,n,t=!1){let r=et(n);if(!r&&n.__file){const o=n.__file.match(/([^/\\]+)\.\w+$/);o&&(r=o[1])}if(!r&&e&&e.parent){const o=s=>{for(const c in s)if(s[c]===n)return c};r=o(e.components||e.parent.type.components)||o(e.appContext.components)}return r?co(r):t?"App":"Anonymous"}function nt(e){return N(e)&&"__vccOpts"in e}function Ae(e){return!(!e||!e.__v_isShallow)}process.env.NODE_ENV!=="production"&&function(){if(process.env.NODE_ENV==="production"||typeof window>"u")return;const e={style:"color:#3ba776"},n={style:"color:#0b1bc9"},t={style:"color:#b62e24"},r={style:"color:#9d288c"},o={header:i=>x(i)?i.__isVue?["div",e,"VueInstance"]:V(i)?["div",{},["span",e,l(i)],"<",a(i.value),">"]:G(i)?["div",{},["span",e,Ae(i)?"ShallowReactive":"Reactive"],"<",a(i),">"+(H(i)?" (readonly)":"")]:H(i)?["div",{},["span",e,Ae(i)?"ShallowReadonly":"Readonly"],"<",a(i),">"]:null:null,hasBody:i=>i&&i.__isVue,body(i){if(i&&i.__isVue)return["div",{},...s(i.$)]}};function s(i){const d=[];i.type.props&&i.props&&d.push(c("props",v(i.props))),i.setupState!==A&&d.push(c("setup",i.setupState)),i.data!==A&&d.push(c("data",v(i.data)));const f=p(i,"computed");f&&d.push(c("computed",f));const _=p(i,"inject");return _&&d.push(c("injected",_)),d.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:i}]]),d}function c(i,d){return d=D({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},i],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(f=>["div",{},["span",r,f+": "],a(d[f],!1)])]]:["span",{}]}function a(i,d=!0){return typeof i=="number"?["span",n,i]:typeof i=="string"?["span",t,JSON.stringify(i)]:typeof i=="boolean"?["span",r,i]:x(i)?["object",{object:d?v(i):i}]:["span",t,String(i)]}function p(i,d){const f=i.type;if(N(f))return;const _={};for(const m in i.ctx)u(f,m,d)&&(_[m]=i.ctx[m]);return _}function u(i,d,f){const _=i[f];return!!(y(_)&&_.includes(d)||x(_)&&d in _)||!(!i.extends||!u(i.extends,d,f))||!(!i.mixins||!i.mixins.some(m=>u(m,d,f)))||void 0}function l(i){return Ae(i)?"ShallowRef":i.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(o):window.devtoolsFormatters=[o]}();var be,io;const Pe=((e,n)=>{const t=e.__vccOpts||e;for(const[r,o]of n)t[r]=o;return t})(N(be={name:"EasterEggTrigger",props:{callback:{default:null,type:Function},delay:{default:500,type:[String,Number]},pattern:{default:()=>["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],type:Array},target:{default:"body",type:String},type:{default:"keydown",type:String}},emits:["triggered"],setup(e,{emit:n}){const r=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],o="body",s="keydown",c=J(["click","dblclick","mouseup","mousedown"]);let a=J([]),p=setTimeout(()=>{}),u=J([]),l=J({nodes:[],ids:[],classNames:[]});const i=(d=e,f=([g])=>e[g]!=null,Object.fromEntries(Object.entries(d).filter(f)));var d,f;function _(){a.push(i),Object.values(a).forEach(g=>{const h=J(g);h.pattern||(h.pattern=r),h.target||(h.target=o)}),function(){const g=i.type??s;document.addEventListener(g,m,!1)}()}function m(g){const h=we("");if(p!==null&&clearTimeout(p),g.key!==void 0&&(h.value=g.key),T.includes(c,g.type)){const $=g.target;h.value=g.type,l.nodes.push($.nodeName.toLowerCase()),l.ids.push($.id),l.classNames.push($.classList.value)}return u.push(h.value),function($){Object.values(a).forEach(P=>{if(T.isEqual(P==null?void 0:P.pattern,u)){if(T.includes(c,$.type))return function(on,fe){const tt=fe.target,ot=fe.target.replace("#",""),rt=fe.target.replace(".",""),rn=T.uniq(l.nodes),sn=T.uniq(l.ids),cn=T.uniq(l.classNames),st=we(rn.length===1&&rn[0]===tt),ct=we(sn.length===1&&sn[0]===ot),it=we(cn.length===1&&T.includes(cn[0],rt));(st.value||ct.value||it.value)&&W(fe),w()}(0,P),!1;W(P)}return!1}),w()}(g),!1}function w(){let g=500;e.delay!==void 0&&(g=+e.delay),p=setTimeout(()=>{clearTimeout(p),u=[],l={nodes:[],ids:[],classNames:[]}},+g)}function W(g){if(Object.keys(a).length===1){const h=i.type??s;document.removeEventListener(h,m,!1)}else(function(h){const $=a;a=[];const P=T.findIndex($,on=>on.name===h.name);$.splice(P,1),Object.values($).forEach(()=>{_()}),a=$})(g);return g.callback&&g.callback(g),n("triggered",g),!1}return _(),{}}})?(()=>D({name:be.name},io,{setup:be}))():be,[["render",function(e,n,t,r,o,s){return null}]]);Pe.install=e=>{e.component("EasterEggTrigger",Pe)},module.exports=Pe;

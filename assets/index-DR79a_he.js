import{r as m3,a as g3,b as j,u as rf,L as ni,g as sf,R as me,c as Hc,d as vc,e as p3,H as v3,f as y3,h as Ms}from"./vendor-Du9-ZQfA.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function a(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=a(l);fetch(l.href,u)}})();var kh={exports:{}},ol={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function b3(){if(qv)return ol;qv=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(s,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:t,type:s,key:f,ref:l!==void 0?l:null,props:u}}return ol.Fragment=n,ol.jsx=a,ol.jsxs=a,ol}var Kv;function _3(){return Kv||(Kv=1,kh.exports=b3()),kh.exports}var k=_3(),xh={exports:{}},ll={},Ch={exports:{}},jh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv;function S3(){return Zv||(Zv=1,(function(t){function n(H,$){var re=H.length;H.push($);e:for(;0<re;){var ve=re-1>>>1,ye=H[ve];if(0<l(ye,$))H[ve]=$,H[re]=ye,re=ve;else break e}}function a(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var $=H[0],re=H.pop();if(re!==$){H[0]=re;e:for(var ve=0,ye=H.length,Te=ye>>>1;ve<Te;){var _e=2*(ve+1)-1,xe=H[_e],De=_e+1,at=H[De];if(0>l(xe,re))De<ye&&0>l(at,xe)?(H[ve]=at,H[De]=re,ve=De):(H[ve]=xe,H[_e]=re,ve=_e);else if(De<ye&&0>l(at,re))H[ve]=at,H[De]=re,ve=De;else break e}}return $}function l(H,$){var re=H.sortIndex-$.sortIndex;return re!==0?re:H.id-$.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();t.unstable_now=function(){return f.now()-h}}var m=[],g=[],p=1,y=null,b=3,C=!1,x=!1,T=!1,N=!1,E=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function O(H){for(var $=a(g);$!==null;){if($.callback===null)s(g);else if($.startTime<=H)s(g),$.sortIndex=$.expirationTime,n(m,$);else break;$=a(g)}}function D(H){if(T=!1,O(H),!x)if(a(m)!==null)x=!0,B||(B=!0,oe());else{var $=a(g);$!==null&&Oe(D,$.startTime-H)}}var B=!1,U=-1,F=5,Z=-1;function ie(){return N?!0:!(t.unstable_now()-Z<F)}function ae(){if(N=!1,B){var H=t.unstable_now();Z=H;var $=!0;try{e:{x=!1,T&&(T=!1,M(U),U=-1),C=!0;var re=b;try{t:{for(O(H),y=a(m);y!==null&&!(y.expirationTime>H&&ie());){var ve=y.callback;if(typeof ve=="function"){y.callback=null,b=y.priorityLevel;var ye=ve(y.expirationTime<=H);if(H=t.unstable_now(),typeof ye=="function"){y.callback=ye,O(H),$=!0;break t}y===a(m)&&s(m),O(H)}else s(m);y=a(m)}if(y!==null)$=!0;else{var Te=a(g);Te!==null&&Oe(D,Te.startTime-H),$=!1}}break e}finally{y=null,b=re,C=!1}$=void 0}}finally{$?oe():B=!1}}}var oe;if(typeof w=="function")oe=function(){w(ae)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,Ae=ce.port2;ce.port1.onmessage=ae,oe=function(){Ae.postMessage(null)}}else oe=function(){E(ae,0)};function Oe(H,$){U=E(function(){H(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(H){switch(b){case 1:case 2:case 3:var $=3;break;default:$=b}var re=b;b=$;try{return H()}finally{b=re}},t.unstable_requestPaint=function(){N=!0},t.unstable_runWithPriority=function(H,$){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var re=b;b=H;try{return $()}finally{b=re}},t.unstable_scheduleCallback=function(H,$,re){var ve=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?ve+re:ve):re=ve,H){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=re+ye,H={id:p++,callback:$,priorityLevel:H,startTime:re,expirationTime:ye,sortIndex:-1},re>ve?(H.sortIndex=re,n(g,H),a(m)===null&&H===a(g)&&(T?(M(U),U=-1):T=!0,Oe(D,re-ve))):(H.sortIndex=ye,n(m,H),x||C||(x=!0,B||(B=!0,oe()))),H},t.unstable_shouldYield=ie,t.unstable_wrapCallback=function(H){var $=b;return function(){var re=b;b=$;try{return H.apply(this,arguments)}finally{b=re}}}})(jh)),jh}var Wv;function w3(){return Wv||(Wv=1,Ch.exports=S3()),Ch.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv;function k3(){if(Qv)return ll;Qv=1;var t=w3(),n=m3(),a=g3();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function g(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var r=e,o=i;;){var c=r.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){r=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===r)return m(c),e;if(d===o)return m(c),i;d=d.sibling}throw Error(s(188))}if(r.return!==o.return)r=c,o=d;else{for(var v=!1,_=c.child;_;){if(_===r){v=!0,r=c,o=d;break}if(_===o){v=!0,o=c,r=d;break}_=_.sibling}if(!v){for(_=d.child;_;){if(_===r){v=!0,r=d,o=c;break}if(_===o){v=!0,o=d,r=c;break}_=_.sibling}if(!v)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),w=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),ie=Symbol.for("react.memo_cache_sentinel"),ae=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=ae&&e[ae]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case E:return"Profiler";case N:return"StrictMode";case D:return"Suspense";case B:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case w:return e.displayName||"Context";case M:return(e._context.displayName||"Context")+".Consumer";case O:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return i=e.displayName||null,i!==null?i:Ae(e.type)||"Memo";case F:i=e._payload,e=e._init;try{return Ae(e(i))}catch{}}return null}var Oe=Array.isArray,H=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},ve=[],ye=-1;function Te(e){return{current:e}}function _e(e){0>ye||(e.current=ve[ye],ve[ye]=null,ye--)}function xe(e,i){ye++,ve[ye]=e.current,e.current=i}var De=Te(null),at=Te(null),tt=Te(null),Ce=Te(null);function ze(e,i){switch(xe(tt,i),xe(at,e),xe(De,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?pv(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=pv(i),e=vv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_e(De),xe(De,e)}function Ve(){_e(De),_e(at),_e(tt)}function ne(e){e.memoizedState!==null&&xe(Ce,e);var i=De.current,r=vv(i,e.type);i!==r&&(xe(at,e),xe(De,r))}function X(e){at.current===e&&(_e(De),_e(at)),Ce.current===e&&(_e(Ce),il._currentValue=re)}var G,se;function le(e){if(G===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);G=i&&i[1]||"",se=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+G+e+se}var ue=!1;function Ne(e,i){if(!e||ue)return"";ue=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(Y){var I=Y}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(Y){I=Y}e.call(Q.prototype)}}else{try{throw Error()}catch(Y){I=Y}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(Y){if(Y&&I&&typeof Y.stack=="string")return[Y.stack,I.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),v=d[0],_=d[1];if(v&&_){var A=v.split(`
`),V=_.split(`
`);for(c=o=0;o<A.length&&!A[o].includes("DetermineComponentFrameRoot");)o++;for(;c<V.length&&!V[c].includes("DetermineComponentFrameRoot");)c++;if(o===A.length||c===V.length)for(o=A.length-1,c=V.length-1;1<=o&&0<=c&&A[o]!==V[c];)c--;for(;1<=o&&0<=c;o--,c--)if(A[o]!==V[c]){if(o!==1||c!==1)do if(o--,c--,0>c||A[o]!==V[c]){var q=`
`+A[o].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=o&&0<=c);break}}}finally{ue=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?le(r):""}function Ye(e,i){switch(e.tag){case 26:case 27:case 5:return le(e.type);case 16:return le("Lazy");case 13:return e.child!==i&&i!==null?le("Suspense Fallback"):le("Suspense");case 19:return le("SuspenseList");case 0:case 15:return Ne(e.type,!1);case 11:return Ne(e.type.render,!1);case 1:return Ne(e.type,!0);case 31:return le("Activity");default:return""}}function nt(e){try{var i="",r=null;do i+=Ye(e,r),r=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var rt=Object.prototype.hasOwnProperty,ct=t.unstable_scheduleCallback,At=t.unstable_cancelCallback,Gr=t.unstable_shouldYield,ua=t.unstable_requestPaint,Rt=t.unstable_now,ar=t.unstable_getCurrentPriorityLevel,Ys=t.unstable_ImmediatePriority,si=t.unstable_UserBlockingPriority,rr=t.unstable_NormalPriority,sr=t.unstable_LowPriority,Yn=t.unstable_IdlePriority,or=t.log,lr=t.unstable_setDisableYieldValue,En=null,Lt=null;function On(e){if(typeof or=="function"&&lr(e),Lt&&typeof Lt.setStrictMode=="function")try{Lt.setStrictMode(En,e)}catch{}}var Vt=Math.clz32?Math.clz32:oi,Pl=Math.log,Xs=Math.LN2;function oi(e){return e>>>=0,e===0?32:31-(Pl(e)/Xs|0)|0}var ur=256,li=262144,ui=4194304;function yn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function cr(e,i,r){var o=e.pendingLanes;if(o===0)return 0;var c=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var _=o&134217727;return _!==0?(o=_&~d,o!==0?c=yn(o):(v&=_,v!==0?c=yn(v):r||(r=_&~e,r!==0&&(c=yn(r))))):(_=o&~d,_!==0?c=yn(_):v!==0?c=yn(v):r||(r=o&~e,r!==0&&(c=yn(r)))),c===0?0:i!==0&&i!==c&&(i&d)===0&&(d=c&-c,r=i&-i,d>=r||d===32&&(r&4194048)!==0)?i:c}function ci(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function qs(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fr(){var e=ui;return ui<<=1,(ui&62914560)===0&&(ui=4194304),e}function Rl(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function ca(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xg(e,i,r,o,c,d){var v=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var _=e.entanglements,A=e.expirationTimes,V=e.hiddenUpdates;for(r=v&~r;0<r;){var q=31-Vt(r),Q=1<<q;_[q]=0,A[q]=-1;var I=V[q];if(I!==null)for(V[q]=null,q=0;q<I.length;q++){var Y=I[q];Y!==null&&(Y.lane&=-536870913)}r&=~Q}o!==0&&Ll(e,o,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function Ll(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Vt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|r&261930}function Cf(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var o=31-Vt(r),c=1<<o;c&i|e[o]&i&&(e[o]|=i),r&=~c}}function Ks(e,i){var r=i&-i;return r=(r&42)!==0?1:Vl(r),(r&(e.suspendedLanes|i))!==0?0:r}function Vl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function jf(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:Uv(e.type))}function Mn(e,i){var r=$.p;try{return $.p=e,i()}finally{$.p=r}}var Mi=Math.random().toString(36).slice(2),gt="__reactFiber$"+Mi,$t="__reactProps$"+Mi,Gt="__reactContainer$"+Mi,Ul="__reactEvents$"+Mi,Zs="__reactListeners$"+Mi,qg="__reactHandles$"+Mi,Tf="__reactResources$"+Mi,Yr="__reactMarker$"+Mi;function Il(e){delete e[gt],delete e[$t],delete e[Ul],delete e[Zs],delete e[qg]}function Dn(e){var i=e[gt];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Gt]||r[gt]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=xv(e);e!==null;){if(r=e[gt])return r;e=xv(e)}return i}e=r,r=e.parentNode}return null}function Di(e){if(e=e[gt]||e[Gt]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function fa(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function zn(e){var i=e[Tf];return i||(i=e[Tf]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function _t(e){e[Yr]=!0}var Af=new Set,Hl={};function fi(e,i){dr(e,i),dr(e+"Capture",i)}function dr(e,i){for(Hl[e]=i,e=0;e<i.length;e++)Af.add(i[e])}var Fl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ws={},Qs={};function Kg(e){return rt.call(Qs,e)?!0:rt.call(Ws,e)?!1:Fl.test(e)?Qs[e]=!0:(Ws[e]=!0,!1)}function hr(e,i,r){if(Kg(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function mr(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function ge(e,i,r,o){if(o===null)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+o)}}function sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $s(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ef(e,i,r){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,d=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return c.call(this)},set:function(v){r=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(v){r=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Js(e){if(!e._valueTracker){var i=$s(e)?"checked":"value";e._valueTracker=Ef(e,i,""+e[i])}}function Of(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),o="";return e&&(o=$s(e)?e.checked?"true":"false":e.value),e=o,e!==r?(i.setValue(e),!0):!1}function di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Zg=/[\n"\\]/g;function St(e){return e.replace(Zg,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Gl(e,i,r,o,c,d,v,_){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+sn(i)):e.value!==""+sn(i)&&(e.value=""+sn(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?Yl(e,v,sn(i)):r!=null?Yl(e,v,sn(r)):o!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.name=""+sn(_):e.removeAttribute("name")}function Dt(e,i,r,o,c,d,v,_){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Js(e);return}r=r!=null?""+sn(r):"",i=i!=null?""+sn(i):r,_||i===e.value||(e.value=i),e.defaultValue=i}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=_?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Js(e)}function Yl(e,i,r){i==="number"&&di(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Nn(e,i,r,o){if(e=e.options,i){i={};for(var c=0;c<r.length;c++)i["$"+r[c]]=!0;for(r=0;r<e.length;r++)c=i.hasOwnProperty("$"+e[r].value),e[r].selected!==c&&(e[r].selected=c),c&&o&&(e[r].defaultSelected=!0)}else{for(r=""+sn(r),i=null,c=0;c<e.length;c++){if(e[c].value===r){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}i!==null||e[c].disabled||(i=e[c])}i!==null&&(i.selected=!0)}}function da(e,i,r){if(i!=null&&(i=""+sn(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+sn(r):""}function eo(e,i,r,o){if(i==null){if(o!=null){if(r!=null)throw Error(s(92));if(Oe(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),i=r}r=sn(i),e.defaultValue=r,o=e.textContent,o===r&&o!==""&&o!==null&&(e.value=o),Js(e)}function hi(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var Jt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xr(e,i,r){var o=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,r):typeof r!="number"||r===0||Jt.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function Xl(e,i,r){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in i)o=i[c],i.hasOwnProperty(c)&&r[c]!==o&&Xr(e,c,o)}else for(var d in i)i.hasOwnProperty(d)&&Xr(e,d,i[d])}function ql(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pn=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zi(e){return gr.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function mi(){}var to=null;function Xn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pr=null,gi=null;function qr(e){var i=Di(e);if(i&&(e=i.stateNode)){var r=e[$t]||null;e:switch(e=i.stateNode,i.type){case"input":if(Gl(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+St(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var o=r[i];if(o!==e&&o.form===e.form){var c=o[$t]||null;if(!c)throw Error(s(90));Gl(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(i=0;i<r.length;i++)o=r[i],o.form===e.form&&Of(o)}break e;case"textarea":da(e,r.value,r.defaultValue);break e;case"select":i=r.value,i!=null&&Nn(e,!!r.multiple,i,!1)}}}var Kr=!1;function en(e,i,r){if(Kr)return e(i,r);Kr=!0;try{var o=e(i);return o}finally{if(Kr=!1,(pr!==null||gi!==null)&&(Zu(),pr&&(i=pr,e=gi,gi=pr=null,qr(i),e)))for(i=0;i<e.length;i++)qr(e[i])}}function ha(e,i){var r=e.stateNode;if(r===null)return null;var o=r[$t]||null;if(o===null)return null;r=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,i,typeof r));return r}var Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zr=!1;if(Et)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){Zr=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{Zr=!1}var pi=null,no=null,zt=null;function vi(){if(zt)return zt;var e,i=no,r=i.length,o,c="value"in pi?pi.value:pi.textContent,d=c.length;for(e=0;e<r&&i[e]===c[e];e++);var v=r-e;for(o=1;o<=v&&i[r-o]===c[d-o];o++);return zt=c.slice(e,1<o?1-o:void 0)}function io(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Wr(){return!0}function Mf(){return!1}function Yt(e){function i(r,o,c,d,v){this._reactName=r,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(r=e[_],this[_]=r?r(d):d[_]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Wr:Mf,this.isPropagationStopped=Mf,this}return y(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Wr)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Wr)},persist:function(){},isPersistent:Wr}),i}var yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qr=Yt(yi),$r=y({},yi,{view:0,detail:0}),Kl=Yt($r),Jr,bn,Ni,qn=y({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:so,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ni&&(Ni&&e.type==="mousemove"?(Jr=e.screenX-Ni.screenX,bn=e.screenY-Ni.screenY):bn=Jr=0,Ni=e),Jr)},movementY:function(e){return"movementY"in e?e.movementY:bn}}),es=Yt(qn),Df=y({},qn,{dataTransfer:0}),zf=Yt(Df),Nf=y({},$r,{relatedTarget:0}),Kn=Yt(Nf),Wg=y({},yi,{animationName:0,elapsedTime:0,pseudoElement:0}),ao=Yt(Wg),Zl=y({},yi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ro=Yt(Zl),Wl=y({},yi,{data:0}),Pi=Yt(Wl),Pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ql(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Rf[e])?!!i[e]:!1}function so(){return Ql}var $l=y({},$r,{key:function(e){if(e.key){var i=Pf[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=io(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:so,charCode:function(e){return e.type==="keypress"?io(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?io(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oo=Yt($l),Lf=y({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jl=Yt(Lf),Vf=y({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:so}),ga=Yt(Vf),eu=y({},yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bf=Yt(eu),Uf=y({},qn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$g=Yt(Uf),If=y({},yi,{newState:0,oldState:0}),we=Yt(If),tu=[9,13,27,32],Zn=Et&&"CompositionEvent"in window,pa=null;Et&&"documentMode"in document&&(pa=document.documentMode);var nu=Et&&"TextEvent"in window&&!pa,iu=Et&&(!Zn||pa&&8<pa&&11>=pa),Xt=" ",au=!1;function ru(e,i){switch(e){case"keyup":return tu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function su(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ri=!1;function Hf(e,i){switch(e){case"compositionend":return su(i);case"keypress":return i.which!==32?null:(au=!0,Xt);case"textInput":return e=i.data,e===Xt&&au?null:e;default:return null}}function lo(e,i){if(Ri)return e==="compositionend"||!Zn&&ru(e,i)?(e=vi(),zt=no=pi=null,Ri=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return iu&&i.locale!=="ko"?null:i.data;default:return null}}var Ff={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uo(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Ff[e.type]:i==="textarea"}function ou(e,i,r,o){pr?gi?gi.push(o):gi=[o]:pr=o,i=nc(i,"onChange"),0<i.length&&(r=new Qr("onChange","change",null,r,o),e.push({event:r,listeners:i}))}var Li=null,vr=null;function lu(e){cv(e,0)}function _n(e){var i=fa(e);if(Of(i))return e}function ts(e,i){if(e==="change")return i}var co=!1;if(Et){var va;if(Et){var fo="oninput"in document;if(!fo){var ho=document.createElement("div");ho.setAttribute("oninput","return;"),fo=typeof ho.oninput=="function"}va=fo}else va=!1;co=va&&(!document.documentMode||9<document.documentMode)}function mo(){Li&&(Li.detachEvent("onpropertychange",go),vr=Li=null)}function go(e){if(e.propertyName==="value"&&_n(vr)){var i=[];ou(i,vr,e,Xn(e)),en(lu,i)}}function qt(e,i,r){e==="focusin"?(mo(),Li=i,vr=r,Li.attachEvent("onpropertychange",go)):e==="focusout"&&mo()}function Gf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _n(vr)}function Yf(e,i){if(e==="click")return _n(i)}function Xf(e,i){if(e==="input"||e==="change")return _n(i)}function po(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Bt=typeof Object.is=="function"?Object.is:po;function Rn(e,i){if(Bt(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),o=Object.keys(i);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var c=r[o];if(!rt.call(i,c)||!Bt(e[c],i[c]))return!1}return!0}function uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vo(e,i){var r=uu(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=i&&o>=i)return{node:r,offset:i-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=uu(r)}}function bi(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?bi(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function yo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=di(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=di(e.document)}return i}function bo(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var qf=Et&&"documentMode"in document&&11>=document.documentMode,ya=null,_o=null,Vi=null,Bi=!1;function ba(e,i,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Bi||ya==null||ya!==di(o)||(o=ya,"selectionStart"in o&&bo(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Vi&&Rn(Vi,o)||(Vi=o,o=nc(_o,"onSelect"),0<o.length&&(i=new Qr("onSelect","select",null,i,r),e.push({event:i,listeners:o}),i.target=ya)))}function Ui(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var Wn={animationend:Ui("Animation","AnimationEnd"),animationiteration:Ui("Animation","AnimationIteration"),animationstart:Ui("Animation","AnimationStart"),transitionrun:Ui("Transition","TransitionRun"),transitionstart:Ui("Transition","TransitionStart"),transitioncancel:Ui("Transition","TransitionCancel"),transitionend:Ui("Transition","TransitionEnd")},So={},wo={};Et&&(wo=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function _i(e){if(So[e])return So[e];if(!Wn[e])return e;var i=Wn[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in wo)return So[e]=i[r];return e}var cu=_i("animationend"),fu=_i("animationiteration"),du=_i("animationstart"),hu=_i("transitionrun"),Kf=_i("transitionstart"),mu=_i("transitioncancel"),Ii=_i("transitionend"),gu=new Map,ko="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ko.push("scrollEnd");function Sn(e,i){gu.set(e,i),fi(i,[e])}var ns=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},on=[],_a=0,xo=0;function yr(){for(var e=_a,i=xo=_a=0;i<e;){var r=on[i];on[i++]=null;var o=on[i];on[i++]=null;var c=on[i];on[i++]=null;var d=on[i];if(on[i++]=null,o!==null&&c!==null){var v=o.pending;v===null?c.next=c:(c.next=v.next,v.next=c),o.pending=c}d!==0&&pu(r,c,d)}}function is(e,i,r,o){on[_a++]=e,on[_a++]=i,on[_a++]=r,on[_a++]=o,xo|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Co(e,i,r,o){return is(e,i,r,o),as(e)}function Hi(e,i){return is(e,null,null,i),as(e)}function pu(e,i,r){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r);for(var c=!1,d=e.return;d!==null;)d.childLanes|=r,o=d.alternate,o!==null&&(o.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&i!==null&&(c=31-Vt(r),e=d.hiddenUpdates,o=e[c],o===null?e[c]=[i]:o.push(i),i.lane=r|536870912),d):null}function as(e){if(50<Wo)throw Wo=0,qd=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Sa={};function Fi(e,i,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(e,i,r,o){return new Fi(e,i,r,o)}function jo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ft(e,i){var r=e.alternate;return r===null?(r=tn(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function vu(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function rs(e,i,r,o,c,d){var v=0;if(o=e,typeof e=="function")jo(e)&&(v=1);else if(typeof e=="string")v=n3(e,r,De.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Z:return e=tn(31,r,i,c),e.elementType=Z,e.lanes=d,e;case T:return wn(r.children,c,d,i);case N:v=8,c|=24;break;case E:return e=tn(12,r,i,c|2),e.elementType=E,e.lanes=d,e;case D:return e=tn(13,r,i,c),e.elementType=D,e.lanes=d,e;case B:return e=tn(19,r,i,c),e.elementType=B,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:v=10;break e;case M:v=9;break e;case O:v=11;break e;case U:v=14;break e;case F:v=16,o=null;break e}v=29,r=Error(s(130,e===null?"null":typeof e,"")),o=null}return i=tn(v,r,i,c),i.elementType=e,i.type=o,i.lanes=d,i}function wn(e,i,r,o){return e=tn(7,e,o,i),e.lanes=r,e}function To(e,i,r){return e=tn(6,e,null,i),e.lanes=r,e}function ss(e){var i=tn(18,null,null,0);return i.stateNode=e,i}function Ao(e,i,r){return i=tn(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var yu=new WeakMap;function ln(e,i){if(typeof e=="object"&&e!==null){var r=yu.get(e);return r!==void 0?r:(i={value:e,source:i,stack:nt(i)},yu.set(e,i),i)}return{value:e,source:i,stack:nt(i)}}var Gi=[],wa=0,os=null,ka=0,un=[],cn=0,Si=null,Ln=1,Kt="";function Qn(e,i){Gi[wa++]=ka,Gi[wa++]=os,os=e,ka=i}function Eo(e,i,r){un[cn++]=Ln,un[cn++]=Kt,un[cn++]=Si,Si=e;var o=Ln;e=Kt;var c=32-Vt(o)-1;o&=~(1<<c),r+=1;var d=32-Vt(i)+c;if(30<d){var v=c-c%5;d=(o&(1<<v)-1).toString(32),o>>=v,c-=v,Ln=1<<32-Vt(i)+c|r<<c|o,Kt=d+e}else Ln=1<<d|r<<c|o,Kt=e}function br(e){e.return!==null&&(Qn(e,1),Eo(e,1,0))}function bu(e){for(;e===os;)os=Gi[--wa],Gi[wa]=null,ka=Gi[--wa],Gi[wa]=null;for(;e===Si;)Si=un[--cn],un[cn]=null,Kt=un[--cn],un[cn]=null,Ln=un[--cn],un[cn]=null}function _u(e,i){un[cn++]=Ln,un[cn++]=Kt,un[cn++]=Si,Ln=i.id,Kt=i.overflow,Si=e}var Ot=null,Ge=null,Pe=!1,wi=null,fn=!1,Oo=Error(s(519));function ki(e){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw K(ln(i,e)),Oo}function $n(e){var i=e.stateNode,r=e.type,o=e.memoizedProps;switch(i[gt]=e,i[$t]=o,r){case"dialog":Le("cancel",i),Le("close",i);break;case"iframe":case"object":case"embed":Le("load",i);break;case"video":case"audio":for(r=0;r<$o.length;r++)Le($o[r],i);break;case"source":Le("error",i);break;case"img":case"image":case"link":Le("error",i),Le("load",i);break;case"details":Le("toggle",i);break;case"input":Le("invalid",i),Dt(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Le("invalid",i);break;case"textarea":Le("invalid",i),eo(i,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||o.suppressHydrationWarning===!0||mv(i.textContent,r)?(o.popover!=null&&(Le("beforetoggle",i),Le("toggle",i)),o.onScroll!=null&&Le("scroll",i),o.onScrollEnd!=null&&Le("scrollend",i),o.onClick!=null&&(i.onclick=mi),i=!0):i=!1,i||ki(e,!0)}function Su(e){for(Ot=e.return;Ot;)switch(Ot.tag){case 5:case 31:case 13:fn=!1;return;case 27:case 3:fn=!0;return;default:Ot=Ot.return}}function xa(e){if(e!==Ot)return!1;if(!Pe)return Su(e),Pe=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||lh(e.type,e.memoizedProps)),r=!r),r&&Ge&&ki(e),Su(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ge=kv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ge=kv(e)}else i===27?(i=Ge,Va(e.type)?(e=hh,hh=null,Ge=e):Ge=i):Ge=Ot?Un(e.stateNode.nextSibling):null;return!0}function S(){Ge=Ot=null,Pe=!1}function R(){var e=wi;return e!==null&&(gn===null?gn=e:gn.push.apply(gn,e),wi=null),e}function K(e){wi===null?wi=[e]:wi.push(e)}var ee=Te(null),de=null,je=null;function $e(e,i,r){xe(ee,i._currentValue),i._currentValue=r}function Vn(e){e._currentValue=ee.current,_e(ee)}function ls(e,i,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===r)break;e=e.return}}function us(e,i,r,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var v=c.child;d=d.firstContext;e:for(;d!==null;){var _=d;d=c;for(var A=0;A<i.length;A++)if(_.context===i[A]){d.lanes|=r,_=d.alternate,_!==null&&(_.lanes|=r),ls(d.return,r,e),o||(v=null);break e}d=_.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(s(341));v.lanes|=r,d=v.alternate,d!==null&&(d.lanes|=r),ls(v,r,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Ca(e,i,r,o){e=null;for(var c=i,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var _=c.type;Bt(c.pendingProps.value,v.value)||(e!==null?e.push(_):e=[_])}}else if(c===Ce.current){if(v=c.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(il):e=[il])}c=c.return}e!==null&&us(i,e,r,o),i.flags|=262144}function cs(e){for(e=e.firstContext;e!==null;){if(!Bt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _r(e){de=e,je=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ut(e){return Jg(de,e)}function wu(e,i){return de===null&&_r(e),Jg(e,i)}function Jg(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},je===null){if(e===null)throw Error(s(308));je=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else je=je.next=i;return r}var $_=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},J_=t.unstable_scheduleCallback,eS=t.unstable_NormalPriority,wt={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zf(){return{controller:new $_,data:new Map,refCount:0}}function Mo(e){e.refCount--,e.refCount===0&&J_(eS,function(){e.controller.abort()})}var Do=null,Wf=0,fs=0,ds=null;function tS(e,i){if(Do===null){var r=Do=[];Wf=0,fs=Jd(),ds={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Wf++,i.then(e0,e0),i}function e0(){if(--Wf===0&&Do!==null){ds!==null&&(ds.status="fulfilled");var e=Do;Do=null,fs=0,ds=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function nS(e,i){var r=[],o={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var c=0;c<r.length;c++)(0,r[c])(i)},function(c){for(o.status="rejected",o.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),o}var t0=H.S;H.S=function(e,i){Vp=Rt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&tS(e,i),t0!==null&&t0(e,i)};var Sr=Te(null);function Qf(){var e=Sr.current;return e!==null?e:Je.pooledCache}function ku(e,i){i===null?xe(Sr,Sr.current):xe(Sr,i.pool)}function n0(){var e=Qf();return e===null?null:{parent:wt._currentValue,pool:e}}var hs=Error(s(460)),$f=Error(s(474)),xu=Error(s(542)),Cu={then:function(){}};function i0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function a0(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(mi,mi),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,s0(e),e;default:if(typeof i.status=="string")i.then(mi,mi);else{if(e=Je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var c=i;c.status="fulfilled",c.value=o}},function(o){if(i.status==="pending"){var c=i;c.status="rejected",c.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,s0(e),e}throw kr=i,hs}}function wr(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(kr=r,hs):r}}var kr=null;function r0(){if(kr===null)throw Error(s(459));var e=kr;return kr=null,e}function s0(e){if(e===hs||e===xu)throw Error(s(483))}var ms=null,zo=0;function ju(e){var i=zo;return zo+=1,ms===null&&(ms=[]),a0(ms,e,i)}function No(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Tu(e,i){throw i.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function o0(e){function i(P,z){if(e){var L=P.deletions;L===null?(P.deletions=[z],P.flags|=16):L.push(z)}}function r(P,z){if(!e)return null;for(;z!==null;)i(P,z),z=z.sibling;return null}function o(P){for(var z=new Map;P!==null;)P.key!==null?z.set(P.key,P):z.set(P.index,P),P=P.sibling;return z}function c(P,z){return P=ft(P,z),P.index=0,P.sibling=null,P}function d(P,z,L){return P.index=L,e?(L=P.alternate,L!==null?(L=L.index,L<z?(P.flags|=67108866,z):L):(P.flags|=67108866,z)):(P.flags|=1048576,z)}function v(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function _(P,z,L,W){return z===null||z.tag!==6?(z=To(L,P.mode,W),z.return=P,z):(z=c(z,L),z.return=P,z)}function A(P,z,L,W){var pe=L.type;return pe===T?q(P,z,L.props.children,W,L.key):z!==null&&(z.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===F&&wr(pe)===z.type)?(z=c(z,L.props),No(z,L),z.return=P,z):(z=rs(L.type,L.key,L.props,null,P.mode,W),No(z,L),z.return=P,z)}function V(P,z,L,W){return z===null||z.tag!==4||z.stateNode.containerInfo!==L.containerInfo||z.stateNode.implementation!==L.implementation?(z=Ao(L,P.mode,W),z.return=P,z):(z=c(z,L.children||[]),z.return=P,z)}function q(P,z,L,W,pe){return z===null||z.tag!==7?(z=wn(L,P.mode,W,pe),z.return=P,z):(z=c(z,L),z.return=P,z)}function Q(P,z,L){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=To(""+z,P.mode,L),z.return=P,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case C:return L=rs(z.type,z.key,z.props,null,P.mode,L),No(L,z),L.return=P,L;case x:return z=Ao(z,P.mode,L),z.return=P,z;case F:return z=wr(z),Q(P,z,L)}if(Oe(z)||oe(z))return z=wn(z,P.mode,L,null),z.return=P,z;if(typeof z.then=="function")return Q(P,ju(z),L);if(z.$$typeof===w)return Q(P,wu(P,z),L);Tu(P,z)}return null}function I(P,z,L,W){var pe=z!==null?z.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return pe!==null?null:_(P,z,""+L,W);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case C:return L.key===pe?A(P,z,L,W):null;case x:return L.key===pe?V(P,z,L,W):null;case F:return L=wr(L),I(P,z,L,W)}if(Oe(L)||oe(L))return pe!==null?null:q(P,z,L,W,null);if(typeof L.then=="function")return I(P,z,ju(L),W);if(L.$$typeof===w)return I(P,z,wu(P,L),W);Tu(P,L)}return null}function Y(P,z,L,W,pe){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return P=P.get(L)||null,_(z,P,""+W,pe);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case C:return P=P.get(W.key===null?L:W.key)||null,A(z,P,W,pe);case x:return P=P.get(W.key===null?L:W.key)||null,V(z,P,W,pe);case F:return W=wr(W),Y(P,z,L,W,pe)}if(Oe(W)||oe(W))return P=P.get(L)||null,q(z,P,W,pe,null);if(typeof W.then=="function")return Y(P,z,L,ju(W),pe);if(W.$$typeof===w)return Y(P,z,L,wu(z,W),pe);Tu(z,W)}return null}function fe(P,z,L,W){for(var pe=null,Ie=null,he=z,Me=z=0,Ue=null;he!==null&&Me<L.length;Me++){he.index>Me?(Ue=he,he=null):Ue=he.sibling;var He=I(P,he,L[Me],W);if(He===null){he===null&&(he=Ue);break}e&&he&&He.alternate===null&&i(P,he),z=d(He,z,Me),Ie===null?pe=He:Ie.sibling=He,Ie=He,he=Ue}if(Me===L.length)return r(P,he),Pe&&Qn(P,Me),pe;if(he===null){for(;Me<L.length;Me++)he=Q(P,L[Me],W),he!==null&&(z=d(he,z,Me),Ie===null?pe=he:Ie.sibling=he,Ie=he);return Pe&&Qn(P,Me),pe}for(he=o(he);Me<L.length;Me++)Ue=Y(he,P,Me,L[Me],W),Ue!==null&&(e&&Ue.alternate!==null&&he.delete(Ue.key===null?Me:Ue.key),z=d(Ue,z,Me),Ie===null?pe=Ue:Ie.sibling=Ue,Ie=Ue);return e&&he.forEach(function(Fa){return i(P,Fa)}),Pe&&Qn(P,Me),pe}function be(P,z,L,W){if(L==null)throw Error(s(151));for(var pe=null,Ie=null,he=z,Me=z=0,Ue=null,He=L.next();he!==null&&!He.done;Me++,He=L.next()){he.index>Me?(Ue=he,he=null):Ue=he.sibling;var Fa=I(P,he,He.value,W);if(Fa===null){he===null&&(he=Ue);break}e&&he&&Fa.alternate===null&&i(P,he),z=d(Fa,z,Me),Ie===null?pe=Fa:Ie.sibling=Fa,Ie=Fa,he=Ue}if(He.done)return r(P,he),Pe&&Qn(P,Me),pe;if(he===null){for(;!He.done;Me++,He=L.next())He=Q(P,He.value,W),He!==null&&(z=d(He,z,Me),Ie===null?pe=He:Ie.sibling=He,Ie=He);return Pe&&Qn(P,Me),pe}for(he=o(he);!He.done;Me++,He=L.next())He=Y(he,P,Me,He.value,W),He!==null&&(e&&He.alternate!==null&&he.delete(He.key===null?Me:He.key),z=d(He,z,Me),Ie===null?pe=He:Ie.sibling=He,Ie=He);return e&&he.forEach(function(h3){return i(P,h3)}),Pe&&Qn(P,Me),pe}function We(P,z,L,W){if(typeof L=="object"&&L!==null&&L.type===T&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case C:e:{for(var pe=L.key;z!==null;){if(z.key===pe){if(pe=L.type,pe===T){if(z.tag===7){r(P,z.sibling),W=c(z,L.props.children),W.return=P,P=W;break e}}else if(z.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===F&&wr(pe)===z.type){r(P,z.sibling),W=c(z,L.props),No(W,L),W.return=P,P=W;break e}r(P,z);break}else i(P,z);z=z.sibling}L.type===T?(W=wn(L.props.children,P.mode,W,L.key),W.return=P,P=W):(W=rs(L.type,L.key,L.props,null,P.mode,W),No(W,L),W.return=P,P=W)}return v(P);case x:e:{for(pe=L.key;z!==null;){if(z.key===pe)if(z.tag===4&&z.stateNode.containerInfo===L.containerInfo&&z.stateNode.implementation===L.implementation){r(P,z.sibling),W=c(z,L.children||[]),W.return=P,P=W;break e}else{r(P,z);break}else i(P,z);z=z.sibling}W=Ao(L,P.mode,W),W.return=P,P=W}return v(P);case F:return L=wr(L),We(P,z,L,W)}if(Oe(L))return fe(P,z,L,W);if(oe(L)){if(pe=oe(L),typeof pe!="function")throw Error(s(150));return L=pe.call(L),be(P,z,L,W)}if(typeof L.then=="function")return We(P,z,ju(L),W);if(L.$$typeof===w)return We(P,z,wu(P,L),W);Tu(P,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,z!==null&&z.tag===6?(r(P,z.sibling),W=c(z,L),W.return=P,P=W):(r(P,z),W=To(L,P.mode,W),W.return=P,P=W),v(P)):r(P,z)}return function(P,z,L,W){try{zo=0;var pe=We(P,z,L,W);return ms=null,pe}catch(he){if(he===hs||he===xu)throw he;var Ie=tn(29,he,null,P.mode);return Ie.lanes=W,Ie.return=P,Ie}finally{}}}var xr=o0(!0),l0=o0(!1),ja=!1;function Jf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ed(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ta(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Aa(e,i,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Fe&2)!==0){var c=o.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),o.pending=i,i=as(e),pu(e,null,r),i}return is(e,o,i,r),as(e)}function Po(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,r|=o,i.lanes=r,Cf(e,r)}}function td(e,i){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var c=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var v={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?c=d=v:d=d.next=v,r=r.next}while(r!==null);d===null?c=d=i:d=d.next=i}else c=d=i;r={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var nd=!1;function Ro(){if(nd){var e=ds;if(e!==null)throw e}}function Lo(e,i,r,o){nd=!1;var c=e.updateQueue;ja=!1;var d=c.firstBaseUpdate,v=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var A=_,V=A.next;A.next=null,v===null?d=V:v.next=V,v=A;var q=e.alternate;q!==null&&(q=q.updateQueue,_=q.lastBaseUpdate,_!==v&&(_===null?q.firstBaseUpdate=V:_.next=V,q.lastBaseUpdate=A))}if(d!==null){var Q=c.baseState;v=0,q=V=A=null,_=d;do{var I=_.lane&-536870913,Y=I!==_.lane;if(Y?(Be&I)===I:(o&I)===I){I!==0&&I===fs&&(nd=!0),q!==null&&(q=q.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var fe=e,be=_;I=i;var We=r;switch(be.tag){case 1:if(fe=be.payload,typeof fe=="function"){Q=fe.call(We,Q,I);break e}Q=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=be.payload,I=typeof fe=="function"?fe.call(We,Q,I):fe,I==null)break e;Q=y({},Q,I);break e;case 2:ja=!0}}I=_.callback,I!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=c.callbacks,Y===null?c.callbacks=[I]:Y.push(I))}else Y={lane:I,tag:_.tag,payload:_.payload,callback:_.callback,next:null},q===null?(V=q=Y,A=Q):q=q.next=Y,v|=I;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;Y=_,_=Y.next,Y.next=null,c.lastBaseUpdate=Y,c.shared.pending=null}}while(!0);q===null&&(A=Q),c.baseState=A,c.firstBaseUpdate=V,c.lastBaseUpdate=q,d===null&&(c.shared.lanes=0),za|=v,e.lanes=v,e.memoizedState=Q}}function u0(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function c0(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)u0(r[e],i)}var gs=Te(null),Au=Te(0);function f0(e,i){e=Ji,xe(Au,e),xe(gs,i),Ji=e|i.baseLanes}function id(){xe(Au,Ji),xe(gs,gs.current)}function ad(){Ji=Au.current,_e(gs),_e(Au)}var kn=Te(null),Bn=null;function Ea(e){var i=e.alternate;xe(pt,pt.current&1),xe(kn,e),Bn===null&&(i===null||gs.current!==null||i.memoizedState!==null)&&(Bn=e)}function rd(e){xe(pt,pt.current),xe(kn,e),Bn===null&&(Bn=e)}function d0(e){e.tag===22?(xe(pt,pt.current),xe(kn,e),Bn===null&&(Bn=e)):Oa()}function Oa(){xe(pt,pt.current),xe(kn,kn.current)}function xn(e){_e(kn),Bn===e&&(Bn=null),_e(pt)}var pt=Te(0);function Eu(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||fh(r)||dh(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Yi=0,Ee=null,Ke=null,kt=null,Ou=!1,ps=!1,Cr=!1,Mu=0,Vo=0,vs=null,iS=0;function dt(){throw Error(s(321))}function sd(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!Bt(e[r],i[r]))return!1;return!0}function od(e,i,r,o,c,d){return Yi=d,Ee=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=e===null||e.memoizedState===null?Z0:wd,Cr=!1,d=r(o,c),Cr=!1,ps&&(d=m0(i,r,o,c)),h0(e),d}function h0(e){H.H=Io;var i=Ke!==null&&Ke.next!==null;if(Yi=0,kt=Ke=Ee=null,Ou=!1,Vo=0,vs=null,i)throw Error(s(300));e===null||xt||(e=e.dependencies,e!==null&&cs(e)&&(xt=!0))}function m0(e,i,r,o){Ee=e;var c=0;do{if(ps&&(vs=null),Vo=0,ps=!1,25<=c)throw Error(s(301));if(c+=1,kt=Ke=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}H.H=W0,d=i(r,o)}while(ps);return d}function aS(){var e=H.H,i=e.useState()[0];return i=typeof i.then=="function"?Bo(i):i,e=e.useState()[0],(Ke!==null?Ke.memoizedState:null)!==e&&(Ee.flags|=1024),i}function ld(){var e=Mu!==0;return Mu=0,e}function ud(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function cd(e){if(Ou){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Ou=!1}Yi=0,kt=Ke=Ee=null,ps=!1,Vo=Mu=0,vs=null}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?Ee.memoizedState=kt=e:kt=kt.next=e,kt}function vt(){if(Ke===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var i=kt===null?Ee.memoizedState:kt.next;if(i!==null)kt=i,Ke=e;else{if(e===null)throw Ee.alternate===null?Error(s(467)):Error(s(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},kt===null?Ee.memoizedState=kt=e:kt=kt.next=e}return kt}function Du(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bo(e){var i=Vo;return Vo+=1,vs===null&&(vs=[]),e=a0(vs,e,i),i=Ee,(kt===null?i.memoizedState:kt.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?Z0:wd),e}function zu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Bo(e);if(e.$$typeof===w)return Ut(e)}throw Error(s(438,String(e)))}function fd(e){var i=null,r=Ee.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var o=Ee.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(c){return c.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Du(),Ee.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),o=0;o<e;o++)r[o]=ie;return i.index++,r}function Xi(e,i){return typeof i=="function"?i(e):i}function Nu(e){var i=vt();return dd(i,Ke,e)}function dd(e,i,r){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var c=e.baseQueue,d=o.pending;if(d!==null){if(c!==null){var v=c.next;c.next=d.next,d.next=v}i.baseQueue=c=d,o.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{i=c.next;var _=v=null,A=null,V=i,q=!1;do{var Q=V.lane&-536870913;if(Q!==V.lane?(Be&Q)===Q:(Yi&Q)===Q){var I=V.revertLane;if(I===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),Q===fs&&(q=!0);else if((Yi&I)===I){V=V.next,I===fs&&(q=!0);continue}else Q={lane:0,revertLane:V.revertLane,gesture:null,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},A===null?(_=A=Q,v=d):A=A.next=Q,Ee.lanes|=I,za|=I;Q=V.action,Cr&&r(d,Q),d=V.hasEagerState?V.eagerState:r(d,Q)}else I={lane:Q,revertLane:V.revertLane,gesture:V.gesture,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},A===null?(_=A=I,v=d):A=A.next=I,Ee.lanes|=Q,za|=Q;V=V.next}while(V!==null&&V!==i);if(A===null?v=d:A.next=_,!Bt(d,e.memoizedState)&&(xt=!0,q&&(r=ds,r!==null)))throw r;e.memoizedState=d,e.baseState=v,e.baseQueue=A,o.lastRenderedState=d}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function hd(e){var i=vt(),r=i.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var o=r.dispatch,c=r.pending,d=i.memoizedState;if(c!==null){r.pending=null;var v=c=c.next;do d=e(d,v.action),v=v.next;while(v!==c);Bt(d,i.memoizedState)||(xt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),r.lastRenderedState=d}return[d,o]}function g0(e,i,r){var o=Ee,c=vt(),d=Pe;if(d){if(r===void 0)throw Error(s(407));r=r()}else r=i();var v=!Bt((Ke||c).memoizedState,r);if(v&&(c.memoizedState=r,xt=!0),c=c.queue,pd(y0.bind(null,o,c,e),[e]),c.getSnapshot!==i||v||kt!==null&&kt.memoizedState.tag&1){if(o.flags|=2048,ys(9,{destroy:void 0},v0.bind(null,o,c,r,i),null),Je===null)throw Error(s(349));d||(Yi&127)!==0||p0(o,i,r)}return r}function p0(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=Ee.updateQueue,i===null?(i=Du(),Ee.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function v0(e,i,r,o){i.value=r,i.getSnapshot=o,b0(i)&&_0(e)}function y0(e,i,r){return r(function(){b0(i)&&_0(e)})}function b0(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!Bt(e,r)}catch{return!0}}function _0(e){var i=Hi(e,2);i!==null&&pn(i,e,2)}function md(e){var i=nn();if(typeof e=="function"){var r=e;if(e=r(),Cr){On(!0);try{r()}finally{On(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},i}function S0(e,i,r,o){return e.baseState=r,dd(e,Ke,typeof o=="function"?o:Xi)}function rS(e,i,r,o,c){if(Lu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};H.T!==null?r(!0):d.isTransition=!1,o(d),r=i.pending,r===null?(d.next=i.pending=d,w0(i,d)):(d.next=r.next,i.pending=r.next=d)}}function w0(e,i){var r=i.action,o=i.payload,c=e.state;if(i.isTransition){var d=H.T,v={};H.T=v;try{var _=r(c,o),A=H.S;A!==null&&A(v,_),k0(e,i,_)}catch(V){gd(e,i,V)}finally{d!==null&&v.types!==null&&(d.types=v.types),H.T=d}}else try{d=r(c,o),k0(e,i,d)}catch(V){gd(e,i,V)}}function k0(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){x0(e,i,o)},function(o){return gd(e,i,o)}):x0(e,i,r)}function x0(e,i,r){i.status="fulfilled",i.value=r,C0(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,w0(e,r)))}function gd(e,i,r){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=r,C0(i),i=i.next;while(i!==o)}e.action=null}function C0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function j0(e,i){return i}function T0(e,i){if(Pe){var r=Je.formState;if(r!==null){e:{var o=Ee;if(Pe){if(Ge){t:{for(var c=Ge,d=fn;c.nodeType!==8;){if(!d){c=null;break t}if(c=Un(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Ge=Un(c.nextSibling),o=c.data==="F!";break e}}ki(o)}o=!1}o&&(i=r[0])}}return r=nn(),r.memoizedState=r.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:j0,lastRenderedState:i},r.queue=o,r=X0.bind(null,Ee,o),o.dispatch=r,o=md(!1),d=Sd.bind(null,Ee,!1,o.queue),o=nn(),c={state:i,dispatch:null,action:e,pending:null},o.queue=c,r=rS.bind(null,Ee,c,d,r),c.dispatch=r,o.memoizedState=e,[i,r,!1]}function A0(e){var i=vt();return E0(i,Ke,e)}function E0(e,i,r){if(i=dd(e,i,j0)[0],e=Nu(Xi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Bo(i)}catch(v){throw v===hs?xu:v}else o=i;i=vt();var c=i.queue,d=c.dispatch;return r!==i.memoizedState&&(Ee.flags|=2048,ys(9,{destroy:void 0},sS.bind(null,c,r),null)),[o,d,e]}function sS(e,i){e.action=i}function O0(e){var i=vt(),r=Ke;if(r!==null)return E0(i,r,e);vt(),i=i.memoizedState,r=vt();var o=r.queue.dispatch;return r.memoizedState=e,[i,o,!1]}function ys(e,i,r,o){return e={tag:e,create:r,deps:o,inst:i,next:null},i=Ee.updateQueue,i===null&&(i=Du(),Ee.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,i.lastEffect=e),e}function M0(){return vt().memoizedState}function Pu(e,i,r,o){var c=nn();Ee.flags|=e,c.memoizedState=ys(1|i,{destroy:void 0},r,o===void 0?null:o)}function Ru(e,i,r,o){var c=vt();o=o===void 0?null:o;var d=c.memoizedState.inst;Ke!==null&&o!==null&&sd(o,Ke.memoizedState.deps)?c.memoizedState=ys(i,d,r,o):(Ee.flags|=e,c.memoizedState=ys(1|i,d,r,o))}function D0(e,i){Pu(8390656,8,e,i)}function pd(e,i){Ru(2048,8,e,i)}function oS(e){Ee.flags|=4;var i=Ee.updateQueue;if(i===null)i=Du(),Ee.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function z0(e){var i=vt().memoizedState;return oS({ref:i,nextImpl:e}),function(){if((Fe&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function N0(e,i){return Ru(4,2,e,i)}function P0(e,i){return Ru(4,4,e,i)}function R0(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function L0(e,i,r){r=r!=null?r.concat([e]):null,Ru(4,4,R0.bind(null,i,e),r)}function vd(){}function V0(e,i){var r=vt();i=i===void 0?null:i;var o=r.memoizedState;return i!==null&&sd(i,o[1])?o[0]:(r.memoizedState=[e,i],e)}function B0(e,i){var r=vt();i=i===void 0?null:i;var o=r.memoizedState;if(i!==null&&sd(i,o[1]))return o[0];if(o=e(),Cr){On(!0);try{e()}finally{On(!1)}}return r.memoizedState=[o,i],o}function yd(e,i,r){return r===void 0||(Yi&1073741824)!==0&&(Be&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=Up(),Ee.lanes|=e,za|=e,r)}function U0(e,i,r,o){return Bt(r,i)?r:gs.current!==null?(e=yd(e,r,o),Bt(e,i)||(xt=!0),e):(Yi&42)===0||(Yi&1073741824)!==0&&(Be&261930)===0?(xt=!0,e.memoizedState=r):(e=Up(),Ee.lanes|=e,za|=e,i)}function I0(e,i,r,o,c){var d=$.p;$.p=d!==0&&8>d?d:8;var v=H.T,_={};H.T=_,Sd(e,!1,i,r);try{var A=c(),V=H.S;if(V!==null&&V(_,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var q=nS(A,o);Uo(e,i,q,Tn(e))}else Uo(e,i,o,Tn(e))}catch(Q){Uo(e,i,{then:function(){},status:"rejected",reason:Q},Tn())}finally{$.p=d,v!==null&&_.types!==null&&(v.types=_.types),H.T=v}}function lS(){}function bd(e,i,r,o){if(e.tag!==5)throw Error(s(476));var c=H0(e).queue;I0(e,c,i,re,r===null?lS:function(){return F0(e),r(o)})}function H0(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:re},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function F0(e){var i=H0(e);i.next===null&&(i=e.alternate.memoizedState),Uo(e,i.next.queue,{},Tn())}function _d(){return Ut(il)}function G0(){return vt().memoizedState}function Y0(){return vt().memoizedState}function uS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=Tn();e=Ta(r);var o=Aa(i,e,r);o!==null&&(pn(o,i,r),Po(o,i,r)),i={cache:Zf()},e.payload=i;return}i=i.return}}function cS(e,i,r){var o=Tn();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Lu(e)?q0(i,r):(r=Co(e,i,r,o),r!==null&&(pn(r,e,o),K0(r,i,o)))}function X0(e,i,r){var o=Tn();Uo(e,i,r,o)}function Uo(e,i,r,o){var c={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Lu(e))q0(i,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,_=d(v,r);if(c.hasEagerState=!0,c.eagerState=_,Bt(_,v))return is(e,i,c,0),Je===null&&yr(),!1}catch{}finally{}if(r=Co(e,i,c,o),r!==null)return pn(r,e,o),K0(r,i,o),!0}return!1}function Sd(e,i,r,o){if(o={lane:2,revertLane:Jd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Lu(e)){if(i)throw Error(s(479))}else i=Co(e,r,o,2),i!==null&&pn(i,e,2)}function Lu(e){var i=e.alternate;return e===Ee||i!==null&&i===Ee}function q0(e,i){ps=Ou=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function K0(e,i,r){if((r&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,r|=o,i.lanes=r,Cf(e,r)}}var Io={readContext:Ut,use:zu,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useLayoutEffect:dt,useInsertionEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useSyncExternalStore:dt,useId:dt,useHostTransitionStatus:dt,useFormState:dt,useActionState:dt,useOptimistic:dt,useMemoCache:dt,useCacheRefresh:dt};Io.useEffectEvent=dt;var Z0={readContext:Ut,use:zu,useCallback:function(e,i){return nn().memoizedState=[e,i===void 0?null:i],e},useContext:Ut,useEffect:D0,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,Pu(4194308,4,R0.bind(null,i,e),r)},useLayoutEffect:function(e,i){return Pu(4194308,4,e,i)},useInsertionEffect:function(e,i){Pu(4,2,e,i)},useMemo:function(e,i){var r=nn();i=i===void 0?null:i;var o=e();if(Cr){On(!0);try{e()}finally{On(!1)}}return r.memoizedState=[o,i],o},useReducer:function(e,i,r){var o=nn();if(r!==void 0){var c=r(i);if(Cr){On(!0);try{r(i)}finally{On(!1)}}}else c=i;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=cS.bind(null,Ee,e),[o.memoizedState,e]},useRef:function(e){var i=nn();return e={current:e},i.memoizedState=e},useState:function(e){e=md(e);var i=e.queue,r=X0.bind(null,Ee,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:vd,useDeferredValue:function(e,i){var r=nn();return yd(r,e,i)},useTransition:function(){var e=md(!1);return e=I0.bind(null,Ee,e.queue,!0,!1),nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var o=Ee,c=nn();if(Pe){if(r===void 0)throw Error(s(407));r=r()}else{if(r=i(),Je===null)throw Error(s(349));(Be&127)!==0||p0(o,i,r)}c.memoizedState=r;var d={value:r,getSnapshot:i};return c.queue=d,D0(y0.bind(null,o,d,e),[e]),o.flags|=2048,ys(9,{destroy:void 0},v0.bind(null,o,d,r,i),null),r},useId:function(){var e=nn(),i=Je.identifierPrefix;if(Pe){var r=Kt,o=Ln;r=(o&~(1<<32-Vt(o)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Mu++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=iS++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:_d,useFormState:T0,useActionState:T0,useOptimistic:function(e){var i=nn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Sd.bind(null,Ee,!0,r),r.dispatch=i,[e,i]},useMemoCache:fd,useCacheRefresh:function(){return nn().memoizedState=uS.bind(null,Ee)},useEffectEvent:function(e){var i=nn(),r={impl:e};return i.memoizedState=r,function(){if((Fe&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},wd={readContext:Ut,use:zu,useCallback:V0,useContext:Ut,useEffect:pd,useImperativeHandle:L0,useInsertionEffect:N0,useLayoutEffect:P0,useMemo:B0,useReducer:Nu,useRef:M0,useState:function(){return Nu(Xi)},useDebugValue:vd,useDeferredValue:function(e,i){var r=vt();return U0(r,Ke.memoizedState,e,i)},useTransition:function(){var e=Nu(Xi)[0],i=vt().memoizedState;return[typeof e=="boolean"?e:Bo(e),i]},useSyncExternalStore:g0,useId:G0,useHostTransitionStatus:_d,useFormState:A0,useActionState:A0,useOptimistic:function(e,i){var r=vt();return S0(r,Ke,e,i)},useMemoCache:fd,useCacheRefresh:Y0};wd.useEffectEvent=z0;var W0={readContext:Ut,use:zu,useCallback:V0,useContext:Ut,useEffect:pd,useImperativeHandle:L0,useInsertionEffect:N0,useLayoutEffect:P0,useMemo:B0,useReducer:hd,useRef:M0,useState:function(){return hd(Xi)},useDebugValue:vd,useDeferredValue:function(e,i){var r=vt();return Ke===null?yd(r,e,i):U0(r,Ke.memoizedState,e,i)},useTransition:function(){var e=hd(Xi)[0],i=vt().memoizedState;return[typeof e=="boolean"?e:Bo(e),i]},useSyncExternalStore:g0,useId:G0,useHostTransitionStatus:_d,useFormState:O0,useActionState:O0,useOptimistic:function(e,i){var r=vt();return Ke!==null?S0(r,Ke,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:fd,useCacheRefresh:Y0};W0.useEffectEvent=z0;function kd(e,i,r,o){i=e.memoizedState,r=r(o,i),r=r==null?i:y({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var xd={enqueueSetState:function(e,i,r){e=e._reactInternals;var o=Tn(),c=Ta(o);c.payload=i,r!=null&&(c.callback=r),i=Aa(e,c,o),i!==null&&(pn(i,e,o),Po(i,e,o))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var o=Tn(),c=Ta(o);c.tag=1,c.payload=i,r!=null&&(c.callback=r),i=Aa(e,c,o),i!==null&&(pn(i,e,o),Po(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=Tn(),o=Ta(r);o.tag=2,i!=null&&(o.callback=i),i=Aa(e,o,r),i!==null&&(pn(i,e,r),Po(i,e,r))}};function Q0(e,i,r,o,c,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,v):i.prototype&&i.prototype.isPureReactComponent?!Rn(r,o)||!Rn(c,d):!0}function $0(e,i,r,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,o),i.state!==e&&xd.enqueueReplaceState(i,i.state,null)}function jr(e,i){var r=i;if("ref"in i){r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}if(e=e.defaultProps){r===i&&(r=y({},r));for(var c in e)r[c]===void 0&&(r[c]=e[c])}return r}function J0(e){ns(e)}function ep(e){console.error(e)}function tp(e){ns(e)}function Vu(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function np(e,i,r){try{var o=e.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Cd(e,i,r){return r=Ta(r),r.tag=3,r.payload={element:null},r.callback=function(){Vu(e,i)},r}function ip(e){return e=Ta(e),e.tag=3,e}function ap(e,i,r,o){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;e.payload=function(){return c(d)},e.callback=function(){np(i,r,o)}}var v=r.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){np(i,r,o),typeof c!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var _=o.stack;this.componentDidCatch(o.value,{componentStack:_!==null?_:""})})}function fS(e,i,r,o,c){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=r.alternate,i!==null&&Ca(i,r,c,!0),r=kn.current,r!==null){switch(r.tag){case 31:case 13:return Bn===null?Wu():r.alternate===null&&ht===0&&(ht=3),r.flags&=-257,r.flags|=65536,r.lanes=c,o===Cu?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([o]):i.add(o),Wd(e,o,c)),!1;case 22:return r.flags|=65536,o===Cu?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([o]):r.add(o)),Wd(e,o,c)),!1}throw Error(s(435,r.tag))}return Wd(e,o,c),Wu(),!1}if(Pe)return i=kn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=c,o!==Oo&&(e=Error(s(422),{cause:o}),K(ln(e,r)))):(o!==Oo&&(i=Error(s(423),{cause:o}),K(ln(i,r))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ln(o,r),c=Cd(e.stateNode,o,c),td(e,c),ht!==4&&(ht=2)),!1;var d=Error(s(520),{cause:o});if(d=ln(d,r),Zo===null?Zo=[d]:Zo.push(d),ht!==4&&(ht=2),i===null)return!0;o=ln(o,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=c&-c,r.lanes|=e,e=Cd(r.stateNode,o,e),td(r,e),!1;case 1:if(i=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Na===null||!Na.has(d))))return r.flags|=65536,c&=-c,r.lanes|=c,c=ip(c),ap(c,e,r,o),td(r,c),!1}r=r.return}while(r!==null);return!1}var jd=Error(s(461)),xt=!1;function It(e,i,r,o){i.child=e===null?l0(i,null,r,o):xr(i,e.child,r,o)}function rp(e,i,r,o,c){r=r.render;var d=i.ref;if("ref"in o){var v={};for(var _ in o)_!=="ref"&&(v[_]=o[_])}else v=o;return _r(i),o=od(e,i,r,v,d,c),_=ld(),e!==null&&!xt?(ud(e,i,c),qi(e,i,c)):(Pe&&_&&br(i),i.flags|=1,It(e,i,o,c),i.child)}function sp(e,i,r,o,c){if(e===null){var d=r.type;return typeof d=="function"&&!jo(d)&&d.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=d,op(e,i,d,o,c)):(e=rs(r.type,null,o,i,i.mode,c),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Nd(e,c)){var v=d.memoizedProps;if(r=r.compare,r=r!==null?r:Rn,r(v,o)&&e.ref===i.ref)return qi(e,i,c)}return i.flags|=1,e=ft(d,o),e.ref=i.ref,e.return=i,i.child=e}function op(e,i,r,o,c){if(e!==null){var d=e.memoizedProps;if(Rn(d,o)&&e.ref===i.ref)if(xt=!1,i.pendingProps=o=d,Nd(e,c))(e.flags&131072)!==0&&(xt=!0);else return i.lanes=e.lanes,qi(e,i,c)}return Td(e,i,r,o,c)}function lp(e,i,r,o){var c=o.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,e!==null){for(o=i.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~d}else o=0,i.child=null;return up(e,i,d,r,o)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&ku(i,d!==null?d.cachePool:null),d!==null?f0(i,d):id(),d0(i);else return o=i.lanes=536870912,up(e,i,d!==null?d.baseLanes|r:r,r,o)}else d!==null?(ku(i,d.cachePool),f0(i,d),Oa(),i.memoizedState=null):(e!==null&&ku(i,null),id(),Oa());return It(e,i,c,r),i.child}function Ho(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function up(e,i,r,o,c){var d=Qf();return d=d===null?null:{parent:wt._currentValue,pool:d},i.memoizedState={baseLanes:r,cachePool:d},e!==null&&ku(i,null),id(),d0(i),e!==null&&Ca(e,i,o,!0),i.childLanes=c,null}function Bu(e,i){return i=Iu({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function cp(e,i,r){return xr(i,e.child,null,r),e=Bu(i,i.pendingProps),e.flags|=2,xn(i),i.memoizedState=null,e}function dS(e,i,r){var o=i.pendingProps,c=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Pe){if(o.mode==="hidden")return e=Bu(i,o),i.lanes=536870912,Ho(null,e);if(rd(i),(e=Ge)?(e=wv(e,fn),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Si!==null?{id:Ln,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},r=ss(e),r.return=i,i.child=r,Ot=i,Ge=null)):e=null,e===null)throw ki(i);return i.lanes=536870912,null}return Bu(i,o)}var d=e.memoizedState;if(d!==null){var v=d.dehydrated;if(rd(i),c)if(i.flags&256)i.flags&=-257,i=cp(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(s(558));else if(xt||Ca(e,i,r,!1),c=(r&e.childLanes)!==0,xt||c){if(o=Je,o!==null&&(v=Ks(o,r),v!==0&&v!==d.retryLane))throw d.retryLane=v,Hi(e,v),pn(o,e,v),jd;Wu(),i=cp(e,i,r)}else e=d.treeContext,Ge=Un(v.nextSibling),Ot=i,Pe=!0,wi=null,fn=!1,e!==null&&_u(i,e),i=Bu(i,o),i.flags|=4096;return i}return e=ft(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Uu(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Td(e,i,r,o,c){return _r(i),r=od(e,i,r,o,void 0,c),o=ld(),e!==null&&!xt?(ud(e,i,c),qi(e,i,c)):(Pe&&o&&br(i),i.flags|=1,It(e,i,r,c),i.child)}function fp(e,i,r,o,c,d){return _r(i),i.updateQueue=null,r=m0(i,o,r,c),h0(e),o=ld(),e!==null&&!xt?(ud(e,i,d),qi(e,i,d)):(Pe&&o&&br(i),i.flags|=1,It(e,i,r,d),i.child)}function dp(e,i,r,o,c){if(_r(i),i.stateNode===null){var d=Sa,v=r.contextType;typeof v=="object"&&v!==null&&(d=Ut(v)),d=new r(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=xd,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},Jf(i),v=r.contextType,d.context=typeof v=="object"&&v!==null?Ut(v):Sa,d.state=i.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(kd(i,r,v,o),d.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&xd.enqueueReplaceState(d,d.state,null),Lo(i,o,d,c),Ro(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var _=i.memoizedProps,A=jr(r,_);d.props=A;var V=d.context,q=r.contextType;v=Sa,typeof q=="object"&&q!==null&&(v=Ut(q));var Q=r.getDerivedStateFromProps;q=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function",_=i.pendingProps!==_,q||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_||V!==v)&&$0(i,d,o,v),ja=!1;var I=i.memoizedState;d.state=I,Lo(i,o,d,c),Ro(),V=i.memoizedState,_||I!==V||ja?(typeof Q=="function"&&(kd(i,r,Q,o),V=i.memoizedState),(A=ja||Q0(i,r,A,o,I,V,v))?(q||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=V),d.props=o,d.state=V,d.context=v,o=A):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,ed(e,i),v=i.memoizedProps,q=jr(r,v),d.props=q,Q=i.pendingProps,I=d.context,V=r.contextType,A=Sa,typeof V=="object"&&V!==null&&(A=Ut(V)),_=r.getDerivedStateFromProps,(V=typeof _=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Q||I!==A)&&$0(i,d,o,A),ja=!1,I=i.memoizedState,d.state=I,Lo(i,o,d,c),Ro();var Y=i.memoizedState;v!==Q||I!==Y||ja||e!==null&&e.dependencies!==null&&cs(e.dependencies)?(typeof _=="function"&&(kd(i,r,_,o),Y=i.memoizedState),(q=ja||Q0(i,r,q,o,I,Y,A)||e!==null&&e.dependencies!==null&&cs(e.dependencies))?(V||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,Y,A),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,Y,A)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&I===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&I===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=Y),d.props=o,d.state=Y,d.context=A,o=q):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&I===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&I===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,Uu(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=xr(i,e.child,null,c),i.child=xr(i,null,r,c)):It(e,i,r,c),i.memoizedState=d.state,e=i.child):e=qi(e,i,c),e}function hp(e,i,r,o){return S(),i.flags|=256,It(e,i,r,o),i.child}var Ad={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ed(e){return{baseLanes:e,cachePool:n0()}}function Od(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=jn),e}function mp(e,i,r){var o=i.pendingProps,c=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(pt.current&2)!==0),v&&(c=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(Pe){if(c?Ea(i):Oa(),(e=Ge)?(e=wv(e,fn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Si!==null?{id:Ln,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},r=ss(e),r.return=i,i.child=r,Ot=i,Ge=null)):e=null,e===null)throw ki(i);return dh(e)?i.lanes=32:i.lanes=536870912,null}var _=o.children;return o=o.fallback,c?(Oa(),c=i.mode,_=Iu({mode:"hidden",children:_},c),o=wn(o,c,r,null),_.return=i,o.return=i,_.sibling=o,i.child=_,o=i.child,o.memoizedState=Ed(r),o.childLanes=Od(e,v,r),i.memoizedState=Ad,Ho(null,o)):(Ea(i),Md(i,_))}var A=e.memoizedState;if(A!==null&&(_=A.dehydrated,_!==null)){if(d)i.flags&256?(Ea(i),i.flags&=-257,i=Dd(e,i,r)):i.memoizedState!==null?(Oa(),i.child=e.child,i.flags|=128,i=null):(Oa(),_=o.fallback,c=i.mode,o=Iu({mode:"visible",children:o.children},c),_=wn(_,c,r,null),_.flags|=2,o.return=i,_.return=i,o.sibling=_,i.child=o,xr(i,e.child,null,r),o=i.child,o.memoizedState=Ed(r),o.childLanes=Od(e,v,r),i.memoizedState=Ad,i=Ho(null,o));else if(Ea(i),dh(_)){if(v=_.nextSibling&&_.nextSibling.dataset,v)var V=v.dgst;v=V,o=Error(s(419)),o.stack="",o.digest=v,K({value:o,source:null,stack:null}),i=Dd(e,i,r)}else if(xt||Ca(e,i,r,!1),v=(r&e.childLanes)!==0,xt||v){if(v=Je,v!==null&&(o=Ks(v,r),o!==0&&o!==A.retryLane))throw A.retryLane=o,Hi(e,o),pn(v,e,o),jd;fh(_)||Wu(),i=Dd(e,i,r)}else fh(_)?(i.flags|=192,i.child=e.child,i=null):(e=A.treeContext,Ge=Un(_.nextSibling),Ot=i,Pe=!0,wi=null,fn=!1,e!==null&&_u(i,e),i=Md(i,o.children),i.flags|=4096);return i}return c?(Oa(),_=o.fallback,c=i.mode,A=e.child,V=A.sibling,o=ft(A,{mode:"hidden",children:o.children}),o.subtreeFlags=A.subtreeFlags&65011712,V!==null?_=ft(V,_):(_=wn(_,c,r,null),_.flags|=2),_.return=i,o.return=i,o.sibling=_,i.child=o,Ho(null,o),o=i.child,_=e.child.memoizedState,_===null?_=Ed(r):(c=_.cachePool,c!==null?(A=wt._currentValue,c=c.parent!==A?{parent:A,pool:A}:c):c=n0(),_={baseLanes:_.baseLanes|r,cachePool:c}),o.memoizedState=_,o.childLanes=Od(e,v,r),i.memoizedState=Ad,Ho(e.child,o)):(Ea(i),r=e.child,e=r.sibling,r=ft(r,{mode:"visible",children:o.children}),r.return=i,r.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=r,i.memoizedState=null,r)}function Md(e,i){return i=Iu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Iu(e,i){return e=tn(22,e,null,i),e.lanes=0,e}function Dd(e,i,r){return xr(i,e.child,null,r),e=Md(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function gp(e,i,r){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),ls(e.return,i,r)}function zd(e,i,r,o,c,d){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:c,treeForkCount:d}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=r,v.tailMode=c,v.treeForkCount=d)}function pp(e,i,r){var o=i.pendingProps,c=o.revealOrder,d=o.tail;o=o.children;var v=pt.current,_=(v&2)!==0;if(_?(v=v&1|2,i.flags|=128):v&=1,xe(pt,v),It(e,i,o,r),o=Pe?ka:0,!_&&e!==null&&(e.flags&128)!==0)e:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gp(e,r,i);else if(e.tag===19)gp(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break e;for(;e.sibling===null;){if(e.return===null||e.return===i)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(r=i.child,c=null;r!==null;)e=r.alternate,e!==null&&Eu(e)===null&&(c=r),r=r.sibling;r=c,r===null?(c=i.child,i.child=null):(c=r.sibling,r.sibling=null),zd(i,!1,c,r,d,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,c=i.child,i.child=null;c!==null;){if(e=c.alternate,e!==null&&Eu(e)===null){i.child=c;break}e=c.sibling,c.sibling=r,r=c,c=e}zd(i,!0,r,null,d,o);break;case"together":zd(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function qi(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),za|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(Ca(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,r=ft(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=ft(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Nd(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&cs(e)))}function hS(e,i,r){switch(i.tag){case 3:ze(i,i.stateNode.containerInfo),$e(i,wt,e.memoizedState.cache),S();break;case 27:case 5:ne(i);break;case 4:ze(i,i.stateNode.containerInfo);break;case 10:$e(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,rd(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Ea(i),i.flags|=128,null):(r&i.child.childLanes)!==0?mp(e,i,r):(Ea(i),e=qi(e,i,r),e!==null?e.sibling:null);Ea(i);break;case 19:var c=(e.flags&128)!==0;if(o=(r&i.childLanes)!==0,o||(Ca(e,i,r,!1),o=(r&i.childLanes)!==0),c){if(o)return pp(e,i,r);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),xe(pt,pt.current),o)break;return null;case 22:return i.lanes=0,lp(e,i,r,i.pendingProps);case 24:$e(i,wt,e.memoizedState.cache)}return qi(e,i,r)}function vp(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)xt=!0;else{if(!Nd(e,r)&&(i.flags&128)===0)return xt=!1,hS(e,i,r);xt=(e.flags&131072)!==0}else xt=!1,Pe&&(i.flags&1048576)!==0&&Eo(i,ka,i.index);switch(i.lanes=0,i.tag){case 16:e:{var o=i.pendingProps;if(e=wr(i.elementType),i.type=e,typeof e=="function")jo(e)?(o=jr(e,o),i.tag=1,i=dp(null,i,e,o,r)):(i.tag=0,i=Td(null,i,e,o,r));else{if(e!=null){var c=e.$$typeof;if(c===O){i.tag=11,i=rp(null,i,e,o,r);break e}else if(c===U){i.tag=14,i=sp(null,i,e,o,r);break e}}throw i=Ae(e)||e,Error(s(306,i,""))}}return i;case 0:return Td(e,i,i.type,i.pendingProps,r);case 1:return o=i.type,c=jr(o,i.pendingProps),dp(e,i,o,c,r);case 3:e:{if(ze(i,i.stateNode.containerInfo),e===null)throw Error(s(387));o=i.pendingProps;var d=i.memoizedState;c=d.element,ed(e,i),Lo(i,o,null,r);var v=i.memoizedState;if(o=v.cache,$e(i,wt,o),o!==d.cache&&us(i,[wt],r,!0),Ro(),o=v.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=hp(e,i,o,r);break e}else if(o!==c){c=ln(Error(s(424)),i),K(c),i=hp(e,i,o,r);break e}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ge=Un(e.firstChild),Ot=i,Pe=!0,wi=null,fn=!0,r=l0(i,null,o,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(S(),o===c){i=qi(e,i,r);break e}It(e,i,o,r)}i=i.child}return i;case 26:return Uu(e,i),e===null?(r=Av(i.type,null,i.pendingProps,null))?i.memoizedState=r:Pe||(r=i.type,e=i.pendingProps,o=ic(tt.current).createElement(r),o[gt]=i,o[$t]=e,Ht(o,r,e),_t(o),i.stateNode=o):i.memoizedState=Av(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ne(i),e===null&&Pe&&(o=i.stateNode=Cv(i.type,i.pendingProps,tt.current),Ot=i,fn=!0,c=Ge,Va(i.type)?(hh=c,Ge=Un(o.firstChild)):Ge=c),It(e,i,i.pendingProps.children,r),Uu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Pe&&((c=o=Ge)&&(o=FS(o,i.type,i.pendingProps,fn),o!==null?(i.stateNode=o,Ot=i,Ge=Un(o.firstChild),fn=!1,c=!0):c=!1),c||ki(i)),ne(i),c=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,o=d.children,lh(c,d)?o=null:v!==null&&lh(c,v)&&(i.flags|=32),i.memoizedState!==null&&(c=od(e,i,aS,null,null,r),il._currentValue=c),Uu(e,i),It(e,i,o,r),i.child;case 6:return e===null&&Pe&&((e=r=Ge)&&(r=GS(r,i.pendingProps,fn),r!==null?(i.stateNode=r,Ot=i,Ge=null,e=!0):e=!1),e||ki(i)),null;case 13:return mp(e,i,r);case 4:return ze(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=xr(i,null,o,r):It(e,i,o,r),i.child;case 11:return rp(e,i,i.type,i.pendingProps,r);case 7:return It(e,i,i.pendingProps,r),i.child;case 8:return It(e,i,i.pendingProps.children,r),i.child;case 12:return It(e,i,i.pendingProps.children,r),i.child;case 10:return o=i.pendingProps,$e(i,i.type,o.value),It(e,i,o.children,r),i.child;case 9:return c=i.type._context,o=i.pendingProps.children,_r(i),c=Ut(c),o=o(c),i.flags|=1,It(e,i,o,r),i.child;case 14:return sp(e,i,i.type,i.pendingProps,r);case 15:return op(e,i,i.type,i.pendingProps,r);case 19:return pp(e,i,r);case 31:return dS(e,i,r);case 22:return lp(e,i,r,i.pendingProps);case 24:return _r(i),o=Ut(wt),e===null?(c=Qf(),c===null&&(c=Je,d=Zf(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=r),c=d),i.memoizedState={parent:o,cache:c},Jf(i),$e(i,wt,c)):((e.lanes&r)!==0&&(ed(e,i),Lo(i,null,null,r),Ro()),c=e.memoizedState,d=i.memoizedState,c.parent!==o?(c={parent:o,cache:o},i.memoizedState=c,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=c),$e(i,wt,o)):(o=d.cache,$e(i,wt,o),o!==c.cache&&us(i,[wt],r,!0))),It(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Ki(e){e.flags|=4}function Pd(e,i,r,o,c){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Gp())e.flags|=8192;else throw kr=Cu,$f}else e.flags&=-16777217}function yp(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zv(i))if(Gp())e.flags|=8192;else throw kr=Cu,$f}function Hu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?fr():536870912,e.lanes|=i,ws|=i)}function Fo(e,i){if(!Pe)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function it(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(i)for(var c=e.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=r,i}function mS(e,i,r){var o=i.pendingProps;switch(bu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(i),null;case 1:return it(i),null;case 3:return r=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Vn(wt),Ve(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xa(i)?Ki(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,R())),it(i),null;case 26:var c=i.type,d=i.memoizedState;return e===null?(Ki(i),d!==null?(it(i),yp(i,d)):(it(i),Pd(i,c,null,o,r))):d?d!==e.memoizedState?(Ki(i),it(i),yp(i,d)):(it(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ki(i),it(i),Pd(i,c,e,o,r)),null;case 27:if(X(i),r=tt.current,c=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Ki(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return it(i),null}e=De.current,xa(i)?$n(i):(e=Cv(c,o,r),i.stateNode=e,Ki(i))}return it(i),null;case 5:if(X(i),c=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Ki(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return it(i),null}if(d=De.current,xa(i))$n(i);else{var v=ic(tt.current);switch(d){case 1:d=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:d=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":d=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":d=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":d=v.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?v.createElement(c,{is:o.is}):v.createElement(c)}}d[gt]=i,d[$t]=o;e:for(v=i.child;v!==null;){if(v.tag===5||v.tag===6)d.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===i)break e;for(;v.sibling===null;){if(v.return===null||v.return===i)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}i.stateNode=d;e:switch(Ht(d,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Ki(i)}}return it(i),Pd(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&Ki(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(e=tt.current,xa(i)){if(e=i.stateNode,r=i.memoizedProps,o=null,c=Ot,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[gt]=i,e=!!(e.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||mv(e.nodeValue,r)),e||ki(i,!0)}else e=ic(e).createTextNode(o),e[gt]=i,i.stateNode=e}return it(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(o=xa(i),r!==null){if(e===null){if(!o)throw Error(s(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[gt]=i}else S(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;it(i),e=!1}else r=R(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(xn(i),i):(xn(i),null);if((i.flags&128)!==0)throw Error(s(558))}return it(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=xa(i),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=i.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[gt]=i}else S(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;it(i),c=!1}else c=R(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return i.flags&256?(xn(i),i):(xn(i),null)}return xn(i),(i.flags&128)!==0?(i.lanes=r,i):(r=o!==null,e=e!==null&&e.memoizedState!==null,r&&(o=i.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),Hu(i,i.updateQueue),it(i),null);case 4:return Ve(),e===null&&ih(i.stateNode.containerInfo),it(i),null;case 10:return Vn(i.type),it(i),null;case 19:if(_e(pt),o=i.memoizedState,o===null)return it(i),null;if(c=(i.flags&128)!==0,d=o.rendering,d===null)if(c)Fo(o,!1);else{if(ht!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Eu(e),d!==null){for(i.flags|=128,Fo(o,!1),e=d.updateQueue,i.updateQueue=e,Hu(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)vu(r,e),r=r.sibling;return xe(pt,pt.current&1|2),Pe&&Qn(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&Rt()>qu&&(i.flags|=128,c=!0,Fo(o,!1),i.lanes=4194304)}else{if(!c)if(e=Eu(d),e!==null){if(i.flags|=128,c=!0,e=e.updateQueue,i.updateQueue=e,Hu(i,e),Fo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Pe)return it(i),null}else 2*Rt()-o.renderingStartTime>qu&&r!==536870912&&(i.flags|=128,c=!0,Fo(o,!1),i.lanes=4194304);o.isBackwards?(d.sibling=i.child,i.child=d):(e=o.last,e!==null?e.sibling=d:i.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Rt(),e.sibling=null,r=pt.current,xe(pt,c?r&1|2:r&1),Pe&&Qn(i,o.treeForkCount),e):(it(i),null);case 22:case 23:return xn(i),ad(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(r&536870912)!==0&&(i.flags&128)===0&&(it(i),i.subtreeFlags&6&&(i.flags|=8192)):it(i),r=i.updateQueue,r!==null&&Hu(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==r&&(i.flags|=2048),e!==null&&_e(Sr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Vn(wt),it(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function gS(e,i){switch(bu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Vn(wt),Ve(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return X(i),null;case 31:if(i.memoizedState!==null){if(xn(i),i.alternate===null)throw Error(s(340));S()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(xn(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));S()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return _e(pt),null;case 4:return Ve(),null;case 10:return Vn(i.type),null;case 22:case 23:return xn(i),ad(),e!==null&&_e(Sr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Vn(wt),null;case 25:return null;default:return null}}function bp(e,i){switch(bu(i),i.tag){case 3:Vn(wt),Ve();break;case 26:case 27:case 5:X(i);break;case 4:Ve();break;case 31:i.memoizedState!==null&&xn(i);break;case 13:xn(i);break;case 19:_e(pt);break;case 10:Vn(i.type);break;case 22:case 23:xn(i),ad(),e!==null&&_e(Sr);break;case 24:Vn(wt)}}function Go(e,i){try{var r=i.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&e)===e){o=void 0;var d=r.create,v=r.inst;o=d(),v.destroy=o}r=r.next}while(r!==c)}}catch(_){qe(i,i.return,_)}}function Ma(e,i,r){try{var o=i.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&e)===e){var v=o.inst,_=v.destroy;if(_!==void 0){v.destroy=void 0,c=i;var A=r,V=_;try{V()}catch(q){qe(c,A,q)}}}o=o.next}while(o!==d)}}catch(q){qe(i,i.return,q)}}function _p(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{c0(i,r)}catch(o){qe(e,e.return,o)}}}function Sp(e,i,r){r.props=jr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(o){qe(e,i,o)}}function Yo(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof r=="function"?e.refCleanup=r(o):r.current=o}}catch(c){qe(e,i,c)}}function xi(e,i){var r=e.ref,o=e.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(c){qe(e,i,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){qe(e,i,c)}else r.current=null}function wp(e){var i=e.type,r=e.memoizedProps,o=e.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(c){qe(e,e.return,c)}}function Rd(e,i,r){try{var o=e.stateNode;LS(o,e.type,r,i),o[$t]=i}catch(c){qe(e,e.return,c)}}function kp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Va(e.type)||e.tag===4}function Ld(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Va(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vd(e,i,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=mi));else if(o!==4&&(o===27&&Va(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(Vd(e,i,r),e=e.sibling;e!==null;)Vd(e,i,r),e=e.sibling}function Fu(e,i,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(o!==4&&(o===27&&Va(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Fu(e,i,r),e=e.sibling;e!==null;)Fu(e,i,r),e=e.sibling}function xp(e){var i=e.stateNode,r=e.memoizedProps;try{for(var o=e.type,c=i.attributes;c.length;)i.removeAttributeNode(c[0]);Ht(i,o,r),i[gt]=e,i[$t]=r}catch(d){qe(e,e.return,d)}}var Zi=!1,Ct=!1,Bd=!1,Cp=typeof WeakSet=="function"?WeakSet:Set,Nt=null;function pS(e,i){if(e=e.containerInfo,sh=cc,e=yo(e),bo(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var v=0,_=-1,A=-1,V=0,q=0,Q=e,I=null;t:for(;;){for(var Y;Q!==r||c!==0&&Q.nodeType!==3||(_=v+c),Q!==d||o!==0&&Q.nodeType!==3||(A=v+o),Q.nodeType===3&&(v+=Q.nodeValue.length),(Y=Q.firstChild)!==null;)I=Q,Q=Y;for(;;){if(Q===e)break t;if(I===r&&++V===c&&(_=v),I===d&&++q===o&&(A=v),(Y=Q.nextSibling)!==null)break;Q=I,I=Q.parentNode}Q=Y}r=_===-1||A===-1?null:{start:_,end:A}}else r=null}r=r||{start:0,end:0}}else r=null;for(oh={focusedElem:e,selectionRange:r},cc=!1,Nt=i;Nt!==null;)if(i=Nt,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Nt=e;else for(;Nt!==null;){switch(i=Nt,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)c=e[r],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,r=i,c=d.memoizedProps,d=d.memoizedState,o=r.stateNode;try{var fe=jr(r.type,c);e=o.getSnapshotBeforeUpdate(fe,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(be){qe(r,r.return,be)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)ch(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ch(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Nt=e;break}Nt=i.return}}function jp(e,i,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Qi(e,r),o&4&&Go(5,r);break;case 1:if(Qi(e,r),o&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(v){qe(r,r.return,v)}else{var c=jr(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(c,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){qe(r,r.return,v)}}o&64&&_p(r),o&512&&Yo(r,r.return);break;case 3:if(Qi(e,r),o&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{c0(e,i)}catch(v){qe(r,r.return,v)}}break;case 27:i===null&&o&4&&xp(r);case 26:case 5:Qi(e,r),i===null&&o&4&&wp(r),o&512&&Yo(r,r.return);break;case 12:Qi(e,r);break;case 31:Qi(e,r),o&4&&Ep(e,r);break;case 13:Qi(e,r),o&4&&Op(e,r),o&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=CS.bind(null,r),YS(e,r))));break;case 22:if(o=r.memoizedState!==null||Zi,!o){i=i!==null&&i.memoizedState!==null||Ct,c=Zi;var d=Ct;Zi=o,(Ct=i)&&!d?$i(e,r,(r.subtreeFlags&8772)!==0):Qi(e,r),Zi=c,Ct=d}break;case 30:break;default:Qi(e,r)}}function Tp(e){var i=e.alternate;i!==null&&(e.alternate=null,Tp(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Il(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var st=null,dn=!1;function Wi(e,i,r){for(r=r.child;r!==null;)Ap(e,i,r),r=r.sibling}function Ap(e,i,r){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(En,r)}catch{}switch(r.tag){case 26:Ct||xi(r,i),Wi(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Ct||xi(r,i);var o=st,c=dn;Va(r.type)&&(st=r.stateNode,dn=!1),Wi(e,i,r),el(r.stateNode),st=o,dn=c;break;case 5:Ct||xi(r,i);case 6:if(o=st,c=dn,st=null,Wi(e,i,r),st=o,dn=c,st!==null)if(dn)try{(st.nodeType===9?st.body:st.nodeName==="HTML"?st.ownerDocument.body:st).removeChild(r.stateNode)}catch(d){qe(r,i,d)}else try{st.removeChild(r.stateNode)}catch(d){qe(r,i,d)}break;case 18:st!==null&&(dn?(e=st,_v(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Os(e)):_v(st,r.stateNode));break;case 4:o=st,c=dn,st=r.stateNode.containerInfo,dn=!0,Wi(e,i,r),st=o,dn=c;break;case 0:case 11:case 14:case 15:Ma(2,r,i),Ct||Ma(4,r,i),Wi(e,i,r);break;case 1:Ct||(xi(r,i),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Sp(r,i,o)),Wi(e,i,r);break;case 21:Wi(e,i,r);break;case 22:Ct=(o=Ct)||r.memoizedState!==null,Wi(e,i,r),Ct=o;break;default:Wi(e,i,r)}}function Ep(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Os(e)}catch(r){qe(i,i.return,r)}}}function Op(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Os(e)}catch(r){qe(i,i.return,r)}}function vS(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Cp),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Cp),i;default:throw Error(s(435,e.tag))}}function Gu(e,i){var r=vS(e);i.forEach(function(o){if(!r.has(o)){r.add(o);var c=jS.bind(null,e,o);o.then(c,c)}})}function hn(e,i){var r=i.deletions;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o],d=e,v=i,_=v;e:for(;_!==null;){switch(_.tag){case 27:if(Va(_.type)){st=_.stateNode,dn=!1;break e}break;case 5:st=_.stateNode,dn=!1;break e;case 3:case 4:st=_.stateNode.containerInfo,dn=!0;break e}_=_.return}if(st===null)throw Error(s(160));Ap(d,v,c),st=null,dn=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Mp(i,e),i=i.sibling}var Jn=null;function Mp(e,i){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hn(i,e),mn(e),o&4&&(Ma(3,e,e.return),Go(3,e),Ma(5,e,e.return));break;case 1:hn(i,e),mn(e),o&512&&(Ct||r===null||xi(r,r.return)),o&64&&Zi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var c=Jn;if(hn(i,e),mn(e),o&512&&(Ct||r===null||xi(r,r.return)),o&4){var d=r!==null?r.memoizedState:null;if(o=e.memoizedState,r===null)if(o===null)if(e.stateNode===null){e:{o=e.type,r=e.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[Yr]||d[gt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),Ht(d,o,r),d[gt]=e,_t(d),o=d;break e;case"link":var v=Mv("link","href",c).get(o+(r.href||""));if(v){for(var _=0;_<v.length;_++)if(d=v[_],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){v.splice(_,1);break t}}d=c.createElement(o),Ht(d,o,r),c.head.appendChild(d);break;case"meta":if(v=Mv("meta","content",c).get(o+(r.content||""))){for(_=0;_<v.length;_++)if(d=v[_],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){v.splice(_,1);break t}}d=c.createElement(o),Ht(d,o,r),c.head.appendChild(d);break;default:throw Error(s(468,o))}d[gt]=e,_t(d),o=d}e.stateNode=o}else Dv(c,e.type,e.stateNode);else e.stateNode=Ov(c,o,e.memoizedProps);else d!==o?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,o===null?Dv(c,e.type,e.stateNode):Ov(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Rd(e,e.memoizedProps,r.memoizedProps)}break;case 27:hn(i,e),mn(e),o&512&&(Ct||r===null||xi(r,r.return)),r!==null&&o&4&&Rd(e,e.memoizedProps,r.memoizedProps);break;case 5:if(hn(i,e),mn(e),o&512&&(Ct||r===null||xi(r,r.return)),e.flags&32){c=e.stateNode;try{hi(c,"")}catch(fe){qe(e,e.return,fe)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,Rd(e,c,r!==null?r.memoizedProps:c)),o&1024&&(Bd=!0);break;case 6:if(hn(i,e),mn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,r=e.stateNode;try{r.nodeValue=o}catch(fe){qe(e,e.return,fe)}}break;case 3:if(sc=null,c=Jn,Jn=ac(i.containerInfo),hn(i,e),Jn=c,mn(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Os(i.containerInfo)}catch(fe){qe(e,e.return,fe)}Bd&&(Bd=!1,Dp(e));break;case 4:o=Jn,Jn=ac(e.stateNode.containerInfo),hn(i,e),mn(e),Jn=o;break;case 12:hn(i,e),mn(e);break;case 31:hn(i,e),mn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gu(e,o)));break;case 13:hn(i,e),mn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Xu=Rt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gu(e,o)));break;case 22:c=e.memoizedState!==null;var A=r!==null&&r.memoizedState!==null,V=Zi,q=Ct;if(Zi=V||c,Ct=q||A,hn(i,e),Ct=q,Zi=V,mn(e),o&8192)e:for(i=e.stateNode,i._visibility=c?i._visibility&-2:i._visibility|1,c&&(r===null||A||Zi||Ct||Tr(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){A=r=i;try{if(d=A.stateNode,c)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{_=A.stateNode;var Q=A.memoizedProps.style,I=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;_.style.display=I==null||typeof I=="boolean"?"":(""+I).trim()}}catch(fe){qe(A,A.return,fe)}}}else if(i.tag===6){if(r===null){A=i;try{A.stateNode.nodeValue=c?"":A.memoizedProps}catch(fe){qe(A,A.return,fe)}}}else if(i.tag===18){if(r===null){A=i;try{var Y=A.stateNode;c?Sv(Y,!0):Sv(A.stateNode,!1)}catch(fe){qe(A,A.return,fe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break e;for(;i.sibling===null;){if(i.return===null||i.return===e)break e;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,Gu(e,r))));break;case 19:hn(i,e),mn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gu(e,o)));break;case 30:break;case 21:break;default:hn(i,e),mn(e)}}function mn(e){var i=e.flags;if(i&2){try{for(var r,o=e.return;o!==null;){if(kp(o)){r=o;break}o=o.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var c=r.stateNode,d=Ld(e);Fu(e,d,c);break;case 5:var v=r.stateNode;r.flags&32&&(hi(v,""),r.flags&=-33);var _=Ld(e);Fu(e,_,v);break;case 3:case 4:var A=r.stateNode.containerInfo,V=Ld(e);Vd(e,V,A);break;default:throw Error(s(161))}}catch(q){qe(e,e.return,q)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Dp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Dp(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Qi(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)jp(e,i.alternate,i),i=i.sibling}function Tr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ma(4,i,i.return),Tr(i);break;case 1:xi(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Sp(i,i.return,r),Tr(i);break;case 27:el(i.stateNode);case 26:case 5:xi(i,i.return),Tr(i);break;case 22:i.memoizedState===null&&Tr(i);break;case 30:Tr(i);break;default:Tr(i)}e=e.sibling}}function $i(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,c=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:$i(c,d,r),Go(4,d);break;case 1:if($i(c,d,r),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(V){qe(o,o.return,V)}if(o=d,c=o.updateQueue,c!==null){var _=o.stateNode;try{var A=c.shared.hiddenCallbacks;if(A!==null)for(c.shared.hiddenCallbacks=null,c=0;c<A.length;c++)u0(A[c],_)}catch(V){qe(o,o.return,V)}}r&&v&64&&_p(d),Yo(d,d.return);break;case 27:xp(d);case 26:case 5:$i(c,d,r),r&&o===null&&v&4&&wp(d),Yo(d,d.return);break;case 12:$i(c,d,r);break;case 31:$i(c,d,r),r&&v&4&&Ep(c,d);break;case 13:$i(c,d,r),r&&v&4&&Op(c,d);break;case 22:d.memoizedState===null&&$i(c,d,r),Yo(d,d.return);break;case 30:break;default:$i(c,d,r)}i=i.sibling}}function Ud(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Mo(r))}function Id(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Mo(e))}function ei(e,i,r,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)zp(e,i,r,o),i=i.sibling}function zp(e,i,r,o){var c=i.flags;switch(i.tag){case 0:case 11:case 15:ei(e,i,r,o),c&2048&&Go(9,i);break;case 1:ei(e,i,r,o);break;case 3:ei(e,i,r,o),c&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Mo(e)));break;case 12:if(c&2048){ei(e,i,r,o),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,_=d.onPostCommit;typeof _=="function"&&_(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(A){qe(i,i.return,A)}}else ei(e,i,r,o);break;case 31:ei(e,i,r,o);break;case 13:ei(e,i,r,o);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?ei(e,i,r,o):Xo(e,i):d._visibility&2?ei(e,i,r,o):(d._visibility|=2,bs(e,i,r,o,(i.subtreeFlags&10256)!==0||!1)),c&2048&&Ud(v,i);break;case 24:ei(e,i,r,o),c&2048&&Id(i.alternate,i);break;default:ei(e,i,r,o)}}function bs(e,i,r,o,c){for(c=c&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,v=i,_=r,A=o,V=v.flags;switch(v.tag){case 0:case 11:case 15:bs(d,v,_,A,c),Go(8,v);break;case 23:break;case 22:var q=v.stateNode;v.memoizedState!==null?q._visibility&2?bs(d,v,_,A,c):Xo(d,v):(q._visibility|=2,bs(d,v,_,A,c)),c&&V&2048&&Ud(v.alternate,v);break;case 24:bs(d,v,_,A,c),c&&V&2048&&Id(v.alternate,v);break;default:bs(d,v,_,A,c)}i=i.sibling}}function Xo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,o=i,c=o.flags;switch(o.tag){case 22:Xo(r,o),c&2048&&Ud(o.alternate,o);break;case 24:Xo(r,o),c&2048&&Id(o.alternate,o);break;default:Xo(r,o)}i=i.sibling}}var qo=8192;function _s(e,i,r){if(e.subtreeFlags&qo)for(e=e.child;e!==null;)Np(e,i,r),e=e.sibling}function Np(e,i,r){switch(e.tag){case 26:_s(e,i,r),e.flags&qo&&e.memoizedState!==null&&i3(r,Jn,e.memoizedState,e.memoizedProps);break;case 5:_s(e,i,r);break;case 3:case 4:var o=Jn;Jn=ac(e.stateNode.containerInfo),_s(e,i,r),Jn=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=qo,qo=16777216,_s(e,i,r),qo=o):_s(e,i,r));break;default:_s(e,i,r)}}function Pp(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Ko(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var o=i[r];Nt=o,Lp(o,e)}Pp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rp(e),e=e.sibling}function Rp(e){switch(e.tag){case 0:case 11:case 15:Ko(e),e.flags&2048&&Ma(9,e,e.return);break;case 3:Ko(e);break;case 12:Ko(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Yu(e)):Ko(e);break;default:Ko(e)}}function Yu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var o=i[r];Nt=o,Lp(o,e)}Pp(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ma(8,i,i.return),Yu(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,Yu(i));break;default:Yu(i)}e=e.sibling}}function Lp(e,i){for(;Nt!==null;){var r=Nt;switch(r.tag){case 0:case 11:case 15:Ma(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Mo(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Nt=o;else e:for(r=e;Nt!==null;){o=Nt;var c=o.sibling,d=o.return;if(Tp(o),o===r){Nt=null;break e}if(c!==null){c.return=d,Nt=c;break e}Nt=d}}}var yS={getCacheForType:function(e){var i=Ut(wt),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return Ut(wt).controller.signal}},bS=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Je=null,Re=null,Be=0,Xe=0,Cn=null,Da=!1,Ss=!1,Hd=!1,Ji=0,ht=0,za=0,Ar=0,Fd=0,jn=0,ws=0,Zo=null,gn=null,Gd=!1,Xu=0,Vp=0,qu=1/0,Ku=null,Na=null,Mt=0,Pa=null,ks=null,ea=0,Yd=0,Xd=null,Bp=null,Wo=0,qd=null;function Tn(){return(Fe&2)!==0&&Be!==0?Be&-Be:H.T!==null?Jd():jf()}function Up(){if(jn===0)if((Be&536870912)===0||Pe){var e=li;li<<=1,(li&3932160)===0&&(li=262144),jn=e}else jn=536870912;return e=kn.current,e!==null&&(e.flags|=32),jn}function pn(e,i,r){(e===Je&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)&&(xs(e,0),Ra(e,Be,jn,!1)),ca(e,r),((Fe&2)===0||e!==Je)&&(e===Je&&((Fe&2)===0&&(Ar|=r),ht===4&&Ra(e,Be,jn,!1)),Ci(e))}function Ip(e,i,r){if((Fe&6)!==0)throw Error(s(327));var o=!r&&(i&127)===0&&(i&e.expiredLanes)===0||ci(e,i),c=o?wS(e,i):Zd(e,i,!0),d=o;do{if(c===0){Ss&&!o&&Ra(e,i,0,!1);break}else{if(r=e.current.alternate,d&&!_S(r)){c=Zd(e,i,!1),d=!1;continue}if(c===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;e:{var _=e;c=Zo;var A=_.current.memoizedState.isDehydrated;if(A&&(xs(_,v).flags|=256),v=Zd(_,v,!1),v!==2){if(Hd&&!A){_.errorRecoveryDisabledLanes|=d,Ar|=d,c=4;break e}d=gn,gn=c,d!==null&&(gn===null?gn=d:gn.push.apply(gn,d))}c=v}if(d=!1,c!==2)continue}}if(c===1){xs(e,0),Ra(e,i,0,!0);break}e:{switch(o=e,d=c,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Ra(o,i,jn,!Da);break e;case 2:gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(c=Xu+300-Rt(),10<c)){if(Ra(o,i,jn,!Da),cr(o,0,!0)!==0)break e;ea=i,o.timeoutHandle=yv(Hp.bind(null,o,r,gn,Ku,Gd,i,jn,Ar,ws,Da,d,"Throttled",-0,0),c);break e}Hp(o,r,gn,Ku,Gd,i,jn,Ar,ws,Da,d,null,-0,0)}}break}while(!0);Ci(e)}function Hp(e,i,r,o,c,d,v,_,A,V,q,Q,I,Y){if(e.timeoutHandle=-1,Q=i.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:mi},Np(i,d,Q);var fe=(d&62914560)===d?Xu-Rt():(d&4194048)===d?Vp-Rt():0;if(fe=a3(Q,fe),fe!==null){ea=d,e.cancelPendingCommit=fe(Wp.bind(null,e,i,d,r,o,c,v,_,A,q,Q,null,I,Y)),Ra(e,d,v,!V);return}}Wp(e,i,d,r,o,c,v,_,A)}function _S(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var c=r[o],d=c.getSnapshot;c=c.value;try{if(!Bt(d(),c))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ra(e,i,r,o){i&=~Fd,i&=~Ar,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var c=i;0<c;){var d=31-Vt(c),v=1<<d;o[d]=-1,c&=~v}r!==0&&Ll(e,r,i)}function Zu(){return(Fe&6)===0?(Qo(0),!1):!0}function Kd(){if(Re!==null){if(Xe===0)var e=Re.return;else e=Re,je=de=null,cd(e),ms=null,zo=0,e=Re;for(;e!==null;)bp(e.alternate,e),e=e.return;Re=null}}function xs(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,US(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),ea=0,Kd(),Je=e,Re=r=ft(e.current,null),Be=i,Xe=0,Cn=null,Da=!1,Ss=ci(e,i),Hd=!1,ws=jn=Fd=Ar=za=ht=0,gn=Zo=null,Gd=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var c=31-Vt(o),d=1<<c;i|=e[c],o&=~d}return Ji=i,yr(),r}function Fp(e,i){Ee=null,H.H=Io,i===hs||i===xu?(i=r0(),Xe=3):i===$f?(i=r0(),Xe=4):Xe=i===jd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Cn=i,Re===null&&(ht=1,Vu(e,ln(i,e.current)))}function Gp(){var e=kn.current;return e===null?!0:(Be&4194048)===Be?Bn===null:(Be&62914560)===Be||(Be&536870912)!==0?e===Bn:!1}function Yp(){var e=H.H;return H.H=Io,e===null?Io:e}function Xp(){var e=H.A;return H.A=yS,e}function Wu(){ht=4,Da||(Be&4194048)!==Be&&kn.current!==null||(Ss=!0),(za&134217727)===0&&(Ar&134217727)===0||Je===null||Ra(Je,Be,jn,!1)}function Zd(e,i,r){var o=Fe;Fe|=2;var c=Yp(),d=Xp();(Je!==e||Be!==i)&&(Ku=null,xs(e,i)),i=!1;var v=ht;e:do try{if(Xe!==0&&Re!==null){var _=Re,A=Cn;switch(Xe){case 8:Kd(),v=6;break e;case 3:case 2:case 9:case 6:kn.current===null&&(i=!0);var V=Xe;if(Xe=0,Cn=null,Cs(e,_,A,V),r&&Ss){v=0;break e}break;default:V=Xe,Xe=0,Cn=null,Cs(e,_,A,V)}}SS(),v=ht;break}catch(q){Fp(e,q)}while(!0);return i&&e.shellSuspendCounter++,je=de=null,Fe=o,H.H=c,H.A=d,Re===null&&(Je=null,Be=0,yr()),v}function SS(){for(;Re!==null;)qp(Re)}function wS(e,i){var r=Fe;Fe|=2;var o=Yp(),c=Xp();Je!==e||Be!==i?(Ku=null,qu=Rt()+500,xs(e,i)):Ss=ci(e,i);e:do try{if(Xe!==0&&Re!==null){i=Re;var d=Cn;t:switch(Xe){case 1:Xe=0,Cn=null,Cs(e,i,d,1);break;case 2:case 9:if(i0(d)){Xe=0,Cn=null,Kp(i);break}i=function(){Xe!==2&&Xe!==9||Je!==e||(Xe=7),Ci(e)},d.then(i,i);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:i0(d)?(Xe=0,Cn=null,Kp(i)):(Xe=0,Cn=null,Cs(e,i,d,7));break;case 5:var v=null;switch(Re.tag){case 26:v=Re.memoizedState;case 5:case 27:var _=Re;if(v?zv(v):_.stateNode.complete){Xe=0,Cn=null;var A=_.sibling;if(A!==null)Re=A;else{var V=_.return;V!==null?(Re=V,Qu(V)):Re=null}break t}}Xe=0,Cn=null,Cs(e,i,d,5);break;case 6:Xe=0,Cn=null,Cs(e,i,d,6);break;case 8:Kd(),ht=6;break e;default:throw Error(s(462))}}kS();break}catch(q){Fp(e,q)}while(!0);return je=de=null,H.H=o,H.A=c,Fe=r,Re!==null?0:(Je=null,Be=0,yr(),ht)}function kS(){for(;Re!==null&&!Gr();)qp(Re)}function qp(e){var i=vp(e.alternate,e,Ji);e.memoizedProps=e.pendingProps,i===null?Qu(e):Re=i}function Kp(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=fp(r,i,i.pendingProps,i.type,void 0,Be);break;case 11:i=fp(r,i,i.pendingProps,i.type.render,i.ref,Be);break;case 5:cd(i);default:bp(r,i),i=Re=vu(i,Ji),i=vp(r,i,Ji)}e.memoizedProps=e.pendingProps,i===null?Qu(e):Re=i}function Cs(e,i,r,o){je=de=null,cd(i),ms=null,zo=0;var c=i.return;try{if(fS(e,c,i,r,Be)){ht=1,Vu(e,ln(r,e.current)),Re=null;return}}catch(d){if(c!==null)throw Re=c,d;ht=1,Vu(e,ln(r,e.current)),Re=null;return}i.flags&32768?(Pe||o===1?e=!0:Ss||(Be&536870912)!==0?e=!1:(Da=e=!0,(o===2||o===9||o===3||o===6)&&(o=kn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Zp(i,e)):Qu(i)}function Qu(e){var i=e;do{if((i.flags&32768)!==0){Zp(i,Da);return}e=i.return;var r=mS(i.alternate,i,Ji);if(r!==null){Re=r;return}if(i=i.sibling,i!==null){Re=i;return}Re=i=e}while(i!==null);ht===0&&(ht=5)}function Zp(e,i){do{var r=gS(e.alternate,e);if(r!==null){r.flags&=32767,Re=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){Re=e;return}Re=e=r}while(e!==null);ht=6,Re=null}function Wp(e,i,r,o,c,d,v,_,A){e.cancelPendingCommit=null;do $u();while(Mt!==0);if((Fe&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=xo,Xg(e,r,d,v,_,A),e===Je&&(Re=Je=null,Be=0),ks=i,Pa=e,ea=r,Yd=d,Xd=c,Bp=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,TS(rr,function(){return tv(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=H.T,H.T=null,c=$.p,$.p=2,v=Fe,Fe|=4;try{pS(e,i,r)}finally{Fe=v,$.p=c,H.T=o}}Mt=1,Qp(),$p(),Jp()}}function Qp(){if(Mt===1){Mt=0;var e=Pa,i=ks,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=H.T,H.T=null;var o=$.p;$.p=2;var c=Fe;Fe|=4;try{Mp(i,e);var d=oh,v=yo(e.containerInfo),_=d.focusedElem,A=d.selectionRange;if(v!==_&&_&&_.ownerDocument&&bi(_.ownerDocument.documentElement,_)){if(A!==null&&bo(_)){var V=A.start,q=A.end;if(q===void 0&&(q=V),"selectionStart"in _)_.selectionStart=V,_.selectionEnd=Math.min(q,_.value.length);else{var Q=_.ownerDocument||document,I=Q&&Q.defaultView||window;if(I.getSelection){var Y=I.getSelection(),fe=_.textContent.length,be=Math.min(A.start,fe),We=A.end===void 0?be:Math.min(A.end,fe);!Y.extend&&be>We&&(v=We,We=be,be=v);var P=vo(_,be),z=vo(_,We);if(P&&z&&(Y.rangeCount!==1||Y.anchorNode!==P.node||Y.anchorOffset!==P.offset||Y.focusNode!==z.node||Y.focusOffset!==z.offset)){var L=Q.createRange();L.setStart(P.node,P.offset),Y.removeAllRanges(),be>We?(Y.addRange(L),Y.extend(z.node,z.offset)):(L.setEnd(z.node,z.offset),Y.addRange(L))}}}}for(Q=[],Y=_;Y=Y.parentNode;)Y.nodeType===1&&Q.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<Q.length;_++){var W=Q[_];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}cc=!!sh,oh=sh=null}finally{Fe=c,$.p=o,H.T=r}}e.current=i,Mt=2}}function $p(){if(Mt===2){Mt=0;var e=Pa,i=ks,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=H.T,H.T=null;var o=$.p;$.p=2;var c=Fe;Fe|=4;try{jp(e,i.alternate,i)}finally{Fe=c,$.p=o,H.T=r}}Mt=3}}function Jp(){if(Mt===4||Mt===3){Mt=0,ua();var e=Pa,i=ks,r=ea,o=Bp;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Mt=5:(Mt=0,ks=Pa=null,ev(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Na=null),Bl(r),i=i.stateNode,Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(En,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=H.T,c=$.p,$.p=2,H.T=null;try{for(var d=e.onRecoverableError,v=0;v<o.length;v++){var _=o[v];d(_.value,{componentStack:_.stack})}}finally{H.T=i,$.p=c}}(ea&3)!==0&&$u(),Ci(e),c=e.pendingLanes,(r&261930)!==0&&(c&42)!==0?e===qd?Wo++:(Wo=0,qd=e):Wo=0,Qo(0)}}function ev(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Mo(i)))}function $u(){return Qp(),$p(),Jp(),tv()}function tv(){if(Mt!==5)return!1;var e=Pa,i=Yd;Yd=0;var r=Bl(ea),o=H.T,c=$.p;try{$.p=32>r?32:r,H.T=null,r=Xd,Xd=null;var d=Pa,v=ea;if(Mt=0,ks=Pa=null,ea=0,(Fe&6)!==0)throw Error(s(331));var _=Fe;if(Fe|=4,Rp(d.current),zp(d,d.current,v,r),Fe=_,Qo(0,!1),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(En,d)}catch{}return!0}finally{$.p=c,H.T=o,ev(e,i)}}function nv(e,i,r){i=ln(r,i),i=Cd(e.stateNode,i,2),e=Aa(e,i,2),e!==null&&(ca(e,2),Ci(e))}function qe(e,i,r){if(e.tag===3)nv(e,e,r);else for(;i!==null;){if(i.tag===3){nv(i,e,r);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Na===null||!Na.has(o))){e=ln(r,e),r=ip(2),o=Aa(i,r,2),o!==null&&(ap(r,o,i,e),ca(o,2),Ci(o));break}}i=i.return}}function Wd(e,i,r){var o=e.pingCache;if(o===null){o=e.pingCache=new bS;var c=new Set;o.set(i,c)}else c=o.get(i),c===void 0&&(c=new Set,o.set(i,c));c.has(r)||(Hd=!0,c.add(r),e=xS.bind(null,e,i,r),i.then(e,e))}function xS(e,i,r){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Je===e&&(Be&r)===r&&(ht===4||ht===3&&(Be&62914560)===Be&&300>Rt()-Xu?(Fe&2)===0&&xs(e,0):Fd|=r,ws===Be&&(ws=0)),Ci(e)}function iv(e,i){i===0&&(i=fr()),e=Hi(e,i),e!==null&&(ca(e,i),Ci(e))}function CS(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),iv(e,r)}function jS(e,i){var r=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(r=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),iv(e,r)}function TS(e,i){return ct(e,i)}var Ju=null,js=null,Qd=!1,ec=!1,$d=!1,La=0;function Ci(e){e!==js&&e.next===null&&(js===null?Ju=js=e:js=js.next=e),ec=!0,Qd||(Qd=!0,ES())}function Qo(e,i){if(!$d&&ec){$d=!0;do for(var r=!1,o=Ju;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var v=o.suspendedLanes,_=o.pingedLanes;d=(1<<31-Vt(42|e)+1)-1,d&=c&~(v&~_),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,ov(o,d))}else d=Be,d=cr(o,o===Je?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||ci(o,d)||(r=!0,ov(o,d));o=o.next}while(r);$d=!1}}function AS(){av()}function av(){ec=Qd=!1;var e=0;La!==0&&BS()&&(e=La);for(var i=Rt(),r=null,o=Ju;o!==null;){var c=o.next,d=rv(o,i);d===0?(o.next=null,r===null?Ju=c:r.next=c,c===null&&(js=r)):(r=o,(e!==0||(d&3)!==0)&&(ec=!0)),o=c}Mt!==0&&Mt!==5||Qo(e),La!==0&&(La=0)}function rv(e,i){for(var r=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Vt(d),_=1<<v,A=c[v];A===-1?((_&r)===0||(_&o)!==0)&&(c[v]=qs(_,i)):A<=i&&(e.expiredLanes|=_),d&=~_}if(i=Je,r=Be,r=cr(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,r===0||e===i&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&At(o),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||ci(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(o!==null&&At(o),Bl(r)){case 2:case 8:r=si;break;case 32:r=rr;break;case 268435456:r=Yn;break;default:r=rr}return o=sv.bind(null,e),r=ct(r,o),e.callbackPriority=i,e.callbackNode=r,i}return o!==null&&o!==null&&At(o),e.callbackPriority=2,e.callbackNode=null,2}function sv(e,i){if(Mt!==0&&Mt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if($u()&&e.callbackNode!==r)return null;var o=Be;return o=cr(e,e===Je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Ip(e,o,i),rv(e,Rt()),e.callbackNode!=null&&e.callbackNode===r?sv.bind(null,e):null)}function ov(e,i){if($u())return null;Ip(e,i,!0)}function ES(){IS(function(){(Fe&6)!==0?ct(Ys,AS):av()})}function Jd(){if(La===0){var e=fs;e===0&&(e=ur,ur<<=1,(ur&261888)===0&&(ur=256)),La=e}return La}function lv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:zi(""+e)}function uv(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function OS(e,i,r,o,c){if(i==="submit"&&r&&r.stateNode===c){var d=lv((c[$t]||null).action),v=o.submitter;v&&(i=(i=v[$t]||null)?lv(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var _=new Qr("action","action",null,o,c);e.push({event:_,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(La!==0){var A=v?uv(c,v):new FormData(c);bd(r,{pending:!0,data:A,method:c.method,action:d},null,A)}}else typeof d=="function"&&(_.preventDefault(),A=v?uv(c,v):new FormData(c),bd(r,{pending:!0,data:A,method:c.method,action:d},d,A))},currentTarget:c}]})}}for(var eh=0;eh<ko.length;eh++){var th=ko[eh],MS=th.toLowerCase(),DS=th[0].toUpperCase()+th.slice(1);Sn(MS,"on"+DS)}Sn(cu,"onAnimationEnd"),Sn(fu,"onAnimationIteration"),Sn(du,"onAnimationStart"),Sn("dblclick","onDoubleClick"),Sn("focusin","onFocus"),Sn("focusout","onBlur"),Sn(hu,"onTransitionRun"),Sn(Kf,"onTransitionStart"),Sn(mu,"onTransitionCancel"),Sn(Ii,"onTransitionEnd"),dr("onMouseEnter",["mouseout","mouseover"]),dr("onMouseLeave",["mouseout","mouseover"]),dr("onPointerEnter",["pointerout","pointerover"]),dr("onPointerLeave",["pointerout","pointerover"]),fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fi("onBeforeInput",["compositionend","keypress","textInput","paste"]),fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($o));function cv(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],c=o.event;o=o.listeners;e:{var d=void 0;if(i)for(var v=o.length-1;0<=v;v--){var _=o[v],A=_.instance,V=_.currentTarget;if(_=_.listener,A!==d&&c.isPropagationStopped())break e;d=_,c.currentTarget=V;try{d(c)}catch(q){ns(q)}c.currentTarget=null,d=A}else for(v=0;v<o.length;v++){if(_=o[v],A=_.instance,V=_.currentTarget,_=_.listener,A!==d&&c.isPropagationStopped())break e;d=_,c.currentTarget=V;try{d(c)}catch(q){ns(q)}c.currentTarget=null,d=A}}}}function Le(e,i){var r=i[Ul];r===void 0&&(r=i[Ul]=new Set);var o=e+"__bubble";r.has(o)||(fv(i,e,2,!1),r.add(o))}function nh(e,i,r){var o=0;i&&(o|=4),fv(r,e,o,i)}var tc="_reactListening"+Math.random().toString(36).slice(2);function ih(e){if(!e[tc]){e[tc]=!0,Af.forEach(function(r){r!=="selectionchange"&&(zS.has(r)||nh(r,!1,e),nh(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[tc]||(i[tc]=!0,nh("selectionchange",!1,i))}}function fv(e,i,r,o){switch(Uv(i)){case 2:var c=o3;break;case 8:c=l3;break;default:c=yh}r=c.bind(null,i,r,e),c=void 0,!Zr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(i,r,{capture:!0,passive:c}):e.addEventListener(i,r,!0):c!==void 0?e.addEventListener(i,r,{passive:c}):e.addEventListener(i,r,!1)}function ah(e,i,r,o,c){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var _=o.stateNode.containerInfo;if(_===c)break;if(v===4)for(v=o.return;v!==null;){var A=v.tag;if((A===3||A===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;_!==null;){if(v=Dn(_),v===null)return;if(A=v.tag,A===5||A===6||A===26||A===27){o=d=v;continue e}_=_.parentNode}}o=o.return}en(function(){var V=d,q=Xn(r),Q=[];e:{var I=gu.get(e);if(I!==void 0){var Y=Qr,fe=e;switch(e){case"keypress":if(io(r)===0)break e;case"keydown":case"keyup":Y=oo;break;case"focusin":fe="focus",Y=Kn;break;case"focusout":fe="blur",Y=Kn;break;case"beforeblur":case"afterblur":Y=Kn;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=es;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=zf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=ga;break;case cu:case fu:case du:Y=ao;break;case Ii:Y=Bf;break;case"scroll":case"scrollend":Y=Kl;break;case"wheel":Y=$g;break;case"copy":case"cut":case"paste":Y=ro;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Jl;break;case"toggle":case"beforetoggle":Y=we}var be=(i&4)!==0,We=!be&&(e==="scroll"||e==="scrollend"),P=be?I!==null?I+"Capture":null:I;be=[];for(var z=V,L;z!==null;){var W=z;if(L=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||L===null||P===null||(W=ha(z,P),W!=null&&be.push(Jo(z,W,L))),We)break;z=z.return}0<be.length&&(I=new Y(I,fe,null,r,q),Q.push({event:I,listeners:be}))}}if((i&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",I&&r!==to&&(fe=r.relatedTarget||r.fromElement)&&(Dn(fe)||fe[Gt]))break e;if((Y||I)&&(I=q.window===q?q:(I=q.ownerDocument)?I.defaultView||I.parentWindow:window,Y?(fe=r.relatedTarget||r.toElement,Y=V,fe=fe?Dn(fe):null,fe!==null&&(We=u(fe),be=fe.tag,fe!==We||be!==5&&be!==27&&be!==6)&&(fe=null)):(Y=null,fe=V),Y!==fe)){if(be=es,W="onMouseLeave",P="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(be=Jl,W="onPointerLeave",P="onPointerEnter",z="pointer"),We=Y==null?I:fa(Y),L=fe==null?I:fa(fe),I=new be(W,z+"leave",Y,r,q),I.target=We,I.relatedTarget=L,W=null,Dn(q)===V&&(be=new be(P,z+"enter",fe,r,q),be.target=L,be.relatedTarget=We,W=be),We=W,Y&&fe)t:{for(be=NS,P=Y,z=fe,L=0,W=P;W;W=be(W))L++;W=0;for(var pe=z;pe;pe=be(pe))W++;for(;0<L-W;)P=be(P),L--;for(;0<W-L;)z=be(z),W--;for(;L--;){if(P===z||z!==null&&P===z.alternate){be=P;break t}P=be(P),z=be(z)}be=null}else be=null;Y!==null&&dv(Q,I,Y,be,!1),fe!==null&&We!==null&&dv(Q,We,fe,be,!0)}}e:{if(I=V?fa(V):window,Y=I.nodeName&&I.nodeName.toLowerCase(),Y==="select"||Y==="input"&&I.type==="file")var Ie=ts;else if(uo(I))if(co)Ie=Xf;else{Ie=Gf;var he=qt}else Y=I.nodeName,!Y||Y.toLowerCase()!=="input"||I.type!=="checkbox"&&I.type!=="radio"?V&&ql(V.elementType)&&(Ie=ts):Ie=Yf;if(Ie&&(Ie=Ie(e,V))){ou(Q,Ie,r,q);break e}he&&he(e,I,V),e==="focusout"&&V&&I.type==="number"&&V.memoizedProps.value!=null&&Yl(I,"number",I.value)}switch(he=V?fa(V):window,e){case"focusin":(uo(he)||he.contentEditable==="true")&&(ya=he,_o=V,Vi=null);break;case"focusout":Vi=_o=ya=null;break;case"mousedown":Bi=!0;break;case"contextmenu":case"mouseup":case"dragend":Bi=!1,ba(Q,r,q);break;case"selectionchange":if(qf)break;case"keydown":case"keyup":ba(Q,r,q)}var Me;if(Zn)e:{switch(e){case"compositionstart":var Ue="onCompositionStart";break e;case"compositionend":Ue="onCompositionEnd";break e;case"compositionupdate":Ue="onCompositionUpdate";break e}Ue=void 0}else Ri?ru(e,r)&&(Ue="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Ue="onCompositionStart");Ue&&(iu&&r.locale!=="ko"&&(Ri||Ue!=="onCompositionStart"?Ue==="onCompositionEnd"&&Ri&&(Me=vi()):(pi=q,no="value"in pi?pi.value:pi.textContent,Ri=!0)),he=nc(V,Ue),0<he.length&&(Ue=new Pi(Ue,e,null,r,q),Q.push({event:Ue,listeners:he}),Me?Ue.data=Me:(Me=su(r),Me!==null&&(Ue.data=Me)))),(Me=nu?Hf(e,r):lo(e,r))&&(Ue=nc(V,"onBeforeInput"),0<Ue.length&&(he=new Pi("onBeforeInput","beforeinput",null,r,q),Q.push({event:he,listeners:Ue}),he.data=Me)),OS(Q,e,V,r,q)}cv(Q,i)})}function Jo(e,i,r){return{instance:e,listener:i,currentTarget:r}}function nc(e,i){for(var r=i+"Capture",o=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=ha(e,r),c!=null&&o.unshift(Jo(e,c,d)),c=ha(e,i),c!=null&&o.push(Jo(e,c,d))),e.tag===3)return o;e=e.return}return[]}function NS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dv(e,i,r,o,c){for(var d=i._reactName,v=[];r!==null&&r!==o;){var _=r,A=_.alternate,V=_.stateNode;if(_=_.tag,A!==null&&A===o)break;_!==5&&_!==26&&_!==27||V===null||(A=V,c?(V=ha(r,d),V!=null&&v.unshift(Jo(r,V,A))):c||(V=ha(r,d),V!=null&&v.push(Jo(r,V,A)))),r=r.return}v.length!==0&&e.push({event:i,listeners:v})}var PS=/\r\n?/g,RS=/\u0000|\uFFFD/g;function hv(e){return(typeof e=="string"?e:""+e).replace(PS,`
`).replace(RS,"")}function mv(e,i){return i=hv(i),hv(e)===i}function Ze(e,i,r,o,c,d){switch(r){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||hi(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&hi(e,""+o);break;case"className":mr(e,"class",o);break;case"tabIndex":mr(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":mr(e,r,o);break;case"style":Xl(e,o,d);break;case"data":if(i!=="object"){mr(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=zi(""+o),e.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(i!=="input"&&Ze(e,i,"name",c.name,c,null),Ze(e,i,"formEncType",c.formEncType,c,null),Ze(e,i,"formMethod",c.formMethod,c,null),Ze(e,i,"formTarget",c.formTarget,c,null)):(Ze(e,i,"encType",c.encType,c,null),Ze(e,i,"method",c.method,c,null),Ze(e,i,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=zi(""+o),e.setAttribute(r,o);break;case"onClick":o!=null&&(e.onclick=mi);break;case"onScroll":o!=null&&Le("scroll",e);break;case"onScrollEnd":o!=null&&Le("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}r=zi(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""+o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":o===!0?e.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":Le("beforetoggle",e),Le("toggle",e),hr(e,"popover",o);break;case"xlinkActuate":ge(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ge(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ge(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ge(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ge(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ge(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ge(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ge(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ge(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":hr(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Pn.get(r)||r,hr(e,r,o))}}function rh(e,i,r,o,c,d){switch(r){case"style":Xl(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"children":typeof o=="string"?hi(e,o):(typeof o=="number"||typeof o=="bigint")&&hi(e,""+o);break;case"onScroll":o!=null&&Le("scroll",e);break;case"onScrollEnd":o!=null&&Le("scrollend",e);break;case"onClick":o!=null&&(e.onclick=mi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Hl.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),i=r.slice(2,c?r.length-7:void 0),d=e[$t]||null,d=d!=null?d[r]:null,typeof d=="function"&&e.removeEventListener(i,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,o,c);break e}r in e?e[r]=o:o===!0?e.setAttribute(r,""):hr(e,r,o)}}}function Ht(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Le("error",e),Le("load",e);var o=!1,c=!1,d;for(d in r)if(r.hasOwnProperty(d)){var v=r[d];if(v!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ze(e,i,d,v,r,null)}}c&&Ze(e,i,"srcSet",r.srcSet,r,null),o&&Ze(e,i,"src",r.src,r,null);return;case"input":Le("invalid",e);var _=d=v=c=null,A=null,V=null;for(o in r)if(r.hasOwnProperty(o)){var q=r[o];if(q!=null)switch(o){case"name":c=q;break;case"type":v=q;break;case"checked":A=q;break;case"defaultChecked":V=q;break;case"value":d=q;break;case"defaultValue":_=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,i));break;default:Ze(e,i,o,q,r,null)}}Dt(e,d,_,A,V,v,c,!1);return;case"select":Le("invalid",e),o=v=d=null;for(c in r)if(r.hasOwnProperty(c)&&(_=r[c],_!=null))switch(c){case"value":d=_;break;case"defaultValue":v=_;break;case"multiple":o=_;default:Ze(e,i,c,_,r,null)}i=d,r=v,e.multiple=!!o,i!=null?Nn(e,!!o,i,!1):r!=null&&Nn(e,!!o,r,!0);return;case"textarea":Le("invalid",e),d=c=o=null;for(v in r)if(r.hasOwnProperty(v)&&(_=r[v],_!=null))switch(v){case"value":o=_;break;case"defaultValue":c=_;break;case"children":d=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(s(91));break;default:Ze(e,i,v,_,r,null)}eo(e,o,c,d);return;case"option":for(A in r)if(r.hasOwnProperty(A)&&(o=r[A],o!=null))switch(A){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ze(e,i,A,o,r,null)}return;case"dialog":Le("beforetoggle",e),Le("toggle",e),Le("cancel",e),Le("close",e);break;case"iframe":case"object":Le("load",e);break;case"video":case"audio":for(o=0;o<$o.length;o++)Le($o[o],e);break;case"image":Le("error",e),Le("load",e);break;case"details":Le("toggle",e);break;case"embed":case"source":case"link":Le("error",e),Le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in r)if(r.hasOwnProperty(V)&&(o=r[V],o!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ze(e,i,V,o,r,null)}return;default:if(ql(i)){for(q in r)r.hasOwnProperty(q)&&(o=r[q],o!==void 0&&rh(e,i,q,o,r,void 0));return}}for(_ in r)r.hasOwnProperty(_)&&(o=r[_],o!=null&&Ze(e,i,_,o,r,null))}function LS(e,i,r,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,v=null,_=null,A=null,V=null,q=null;for(Y in r){var Q=r[Y];if(r.hasOwnProperty(Y)&&Q!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":A=Q;default:o.hasOwnProperty(Y)||Ze(e,i,Y,null,o,Q)}}for(var I in o){var Y=o[I];if(Q=r[I],o.hasOwnProperty(I)&&(Y!=null||Q!=null))switch(I){case"type":d=Y;break;case"name":c=Y;break;case"checked":V=Y;break;case"defaultChecked":q=Y;break;case"value":v=Y;break;case"defaultValue":_=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,i));break;default:Y!==Q&&Ze(e,i,I,Y,o,Q)}}Gl(e,v,_,A,V,q,d,c);return;case"select":Y=v=_=I=null;for(d in r)if(A=r[d],r.hasOwnProperty(d)&&A!=null)switch(d){case"value":break;case"multiple":Y=A;default:o.hasOwnProperty(d)||Ze(e,i,d,null,o,A)}for(c in o)if(d=o[c],A=r[c],o.hasOwnProperty(c)&&(d!=null||A!=null))switch(c){case"value":I=d;break;case"defaultValue":_=d;break;case"multiple":v=d;default:d!==A&&Ze(e,i,c,d,o,A)}i=_,r=v,o=Y,I!=null?Nn(e,!!r,I,!1):!!o!=!!r&&(i!=null?Nn(e,!!r,i,!0):Nn(e,!!r,r?[]:"",!1));return;case"textarea":Y=I=null;for(_ in r)if(c=r[_],r.hasOwnProperty(_)&&c!=null&&!o.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:Ze(e,i,_,null,o,c)}for(v in o)if(c=o[v],d=r[v],o.hasOwnProperty(v)&&(c!=null||d!=null))switch(v){case"value":I=c;break;case"defaultValue":Y=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==d&&Ze(e,i,v,c,o,d)}da(e,I,Y);return;case"option":for(var fe in r)if(I=r[fe],r.hasOwnProperty(fe)&&I!=null&&!o.hasOwnProperty(fe))switch(fe){case"selected":e.selected=!1;break;default:Ze(e,i,fe,null,o,I)}for(A in o)if(I=o[A],Y=r[A],o.hasOwnProperty(A)&&I!==Y&&(I!=null||Y!=null))switch(A){case"selected":e.selected=I&&typeof I!="function"&&typeof I!="symbol";break;default:Ze(e,i,A,I,o,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in r)I=r[be],r.hasOwnProperty(be)&&I!=null&&!o.hasOwnProperty(be)&&Ze(e,i,be,null,o,I);for(V in o)if(I=o[V],Y=r[V],o.hasOwnProperty(V)&&I!==Y&&(I!=null||Y!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(s(137,i));break;default:Ze(e,i,V,I,o,Y)}return;default:if(ql(i)){for(var We in r)I=r[We],r.hasOwnProperty(We)&&I!==void 0&&!o.hasOwnProperty(We)&&rh(e,i,We,void 0,o,I);for(q in o)I=o[q],Y=r[q],!o.hasOwnProperty(q)||I===Y||I===void 0&&Y===void 0||rh(e,i,q,I,o,Y);return}}for(var P in r)I=r[P],r.hasOwnProperty(P)&&I!=null&&!o.hasOwnProperty(P)&&Ze(e,i,P,null,o,I);for(Q in o)I=o[Q],Y=r[Q],!o.hasOwnProperty(Q)||I===Y||I==null&&Y==null||Ze(e,i,Q,I,o,Y)}function gv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function VS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var c=r[o],d=c.transferSize,v=c.initiatorType,_=c.duration;if(d&&_&&gv(v)){for(v=0,_=c.responseEnd,o+=1;o<r.length;o++){var A=r[o],V=A.startTime;if(V>_)break;var q=A.transferSize,Q=A.initiatorType;q&&gv(Q)&&(A=A.responseEnd,v+=q*(A<_?1:(_-V)/(A-V)))}if(--o,i+=8*(d+v)/(c.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sh=null,oh=null;function ic(e){return e.nodeType===9?e:e.ownerDocument}function pv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function lh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var uh=null;function BS(){var e=window.event;return e&&e.type==="popstate"?e===uh?!1:(uh=e,!0):(uh=null,!1)}var yv=typeof setTimeout=="function"?setTimeout:void 0,US=typeof clearTimeout=="function"?clearTimeout:void 0,bv=typeof Promise=="function"?Promise:void 0,IS=typeof queueMicrotask=="function"?queueMicrotask:typeof bv<"u"?function(e){return bv.resolve(null).then(e).catch(HS)}:yv;function HS(e){setTimeout(function(){throw e})}function Va(e){return e==="head"}function _v(e,i){var r=i,o=0;do{var c=r.nextSibling;if(e.removeChild(r),c&&c.nodeType===8)if(r=c.data,r==="/$"||r==="/&"){if(o===0){e.removeChild(c),Os(i);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")el(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,el(r);for(var d=r.firstChild;d;){var v=d.nextSibling,_=d.nodeName;d[Yr]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=v}}else r==="body"&&el(e.ownerDocument.body);r=c}while(r);Os(i)}function Sv(e,i){var r=e;e=0;do{var o=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=o}while(r)}function ch(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":ch(r),Il(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function FS(e,i,r,o){for(;e.nodeType===1;){var c=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Yr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Un(e.nextSibling),e===null)break}return null}function GS(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Un(e.nextSibling),e===null))return null;return e}function wv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Un(e.nextSibling),e===null))return null;return e}function fh(e){return e.data==="$?"||e.data==="$~"}function dh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function YS(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var o=function(){i(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Un(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var hh=null;function kv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return Un(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function xv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function Cv(e,i,r){switch(i=ic(r),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function el(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Il(e)}var In=new Map,jv=new Set;function ac(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=$.d;$.d={f:XS,r:qS,D:KS,C:ZS,L:WS,m:QS,X:JS,S:$S,M:e3};function XS(){var e=ta.f(),i=Zu();return e||i}function qS(e){var i=Di(e);i!==null&&i.tag===5&&i.type==="form"?F0(i):ta.r(e)}var Ts=typeof document>"u"?null:document;function Tv(e,i,r){var o=Ts;if(o&&typeof i=="string"&&i){var c=St(i);c='link[rel="'+e+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),jv.has(c)||(jv.add(c),e={rel:e,crossOrigin:r,href:i},o.querySelector(c)===null&&(i=o.createElement("link"),Ht(i,"link",e),_t(i),o.head.appendChild(i)))}}function KS(e){ta.D(e),Tv("dns-prefetch",e,null)}function ZS(e,i){ta.C(e,i),Tv("preconnect",e,i)}function WS(e,i,r){ta.L(e,i,r);var o=Ts;if(o&&e&&i){var c='link[rel="preload"][as="'+St(i)+'"]';i==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+St(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+St(r.imageSizes)+'"]')):c+='[href="'+St(e)+'"]';var d=c;switch(i){case"style":d=As(e);break;case"script":d=Es(e)}In.has(d)||(e=y({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),In.set(d,e),o.querySelector(c)!==null||i==="style"&&o.querySelector(tl(d))||i==="script"&&o.querySelector(nl(d))||(i=o.createElement("link"),Ht(i,"link",e),_t(i),o.head.appendChild(i)))}}function QS(e,i){ta.m(e,i);var r=Ts;if(r&&e){var o=i&&typeof i.as=="string"?i.as:"script",c='link[rel="modulepreload"][as="'+St(o)+'"][href="'+St(e)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Es(e)}if(!In.has(d)&&(e=y({rel:"modulepreload",href:e},i),In.set(d,e),r.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(nl(d)))return}o=r.createElement("link"),Ht(o,"link",e),_t(o),r.head.appendChild(o)}}}function $S(e,i,r){ta.S(e,i,r);var o=Ts;if(o&&e){var c=zn(o).hoistableStyles,d=As(e);i=i||"default";var v=c.get(d);if(!v){var _={loading:0,preload:null};if(v=o.querySelector(tl(d)))_.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":i},r),(r=In.get(d))&&mh(e,r);var A=v=o.createElement("link");_t(A),Ht(A,"link",e),A._p=new Promise(function(V,q){A.onload=V,A.onerror=q}),A.addEventListener("load",function(){_.loading|=1}),A.addEventListener("error",function(){_.loading|=2}),_.loading|=4,rc(v,i,o)}v={type:"stylesheet",instance:v,count:1,state:_},c.set(d,v)}}}function JS(e,i){ta.X(e,i);var r=Ts;if(r&&e){var o=zn(r).hoistableScripts,c=Es(e),d=o.get(c);d||(d=r.querySelector(nl(c)),d||(e=y({src:e,async:!0},i),(i=In.get(c))&&gh(e,i),d=r.createElement("script"),_t(d),Ht(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function e3(e,i){ta.M(e,i);var r=Ts;if(r&&e){var o=zn(r).hoistableScripts,c=Es(e),d=o.get(c);d||(d=r.querySelector(nl(c)),d||(e=y({src:e,async:!0,type:"module"},i),(i=In.get(c))&&gh(e,i),d=r.createElement("script"),_t(d),Ht(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function Av(e,i,r,o){var c=(c=tt.current)?ac(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=As(r.href),r=zn(c).hoistableStyles,o=r.get(i),o||(o={type:"style",instance:null,count:0,state:null},r.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=As(r.href);var d=zn(c).hoistableStyles,v=d.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=c.querySelector(tl(e)))&&!d._p&&(v.instance=d,v.state.loading=5),In.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},In.set(e,r),d||t3(c,e,r,v.state))),i&&o===null)throw Error(s(528,""));return v}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Es(r),r=zn(c).hoistableScripts,o=r.get(i),o||(o={type:"script",instance:null,count:0,state:null},r.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function As(e){return'href="'+St(e)+'"'}function tl(e){return'link[rel="stylesheet"]['+e+"]"}function Ev(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function t3(e,i,r,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Ht(i,"link",r),_t(i),e.head.appendChild(i))}function Es(e){return'[src="'+St(e)+'"]'}function nl(e){return"script[async]"+e}function Ov(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+St(r.href)+'"]');if(o)return i.instance=o,_t(o),o;var c=y({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),_t(o),Ht(o,"style",c),rc(o,r.precedence,e),i.instance=o;case"stylesheet":c=As(r.href);var d=e.querySelector(tl(c));if(d)return i.state.loading|=4,i.instance=d,_t(d),d;o=Ev(r),(c=In.get(c))&&mh(o,c),d=(e.ownerDocument||e).createElement("link"),_t(d);var v=d;return v._p=new Promise(function(_,A){v.onload=_,v.onerror=A}),Ht(d,"link",o),i.state.loading|=4,rc(d,r.precedence,e),i.instance=d;case"script":return d=Es(r.src),(c=e.querySelector(nl(d)))?(i.instance=c,_t(c),c):(o=r,(c=In.get(d))&&(o=y({},r),gh(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),_t(c),Ht(c,"link",o),e.head.appendChild(c),i.instance=c);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,rc(o,r.precedence,e));return i.instance}function rc(e,i,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,v=0;v<o.length;v++){var _=o[v];if(_.dataset.precedence===i)d=_;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function mh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function gh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var sc=null;function Mv(e,i,r){if(sc===null){var o=new Map,c=sc=new Map;c.set(r,o)}else c=sc,o=c.get(r),o||(o=new Map,c.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),c=0;c<r.length;c++){var d=r[c];if(!(d[Yr]||d[gt]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var _=o.get(v);_?_.push(d):o.set(v,[d])}}return o}function Dv(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function n3(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function zv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function i3(e,i,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var c=As(o.href),d=i.querySelector(tl(c));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=oc.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=d,_t(d);return}d=i.ownerDocument||i,o=Ev(o),(c=In.get(c))&&mh(o,c),d=d.createElement("link"),_t(d);var v=d;v._p=new Promise(function(_,A){v.onload=_,v.onerror=A}),Ht(d,"link",o),r.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=oc.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var ph=0;function a3(e,i){return e.stylesheets&&e.count===0&&uc(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var o=setTimeout(function(){if(e.stylesheets&&uc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&ph===0&&(ph=62500*VS());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&uc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>ph?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)uc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lc=null;function uc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lc=new Map,i.forEach(r3,e),lc=null,oc.call(e))}function r3(e,i){if(!(i.state.loading&4)){var r=lc.get(e);if(r)var o=r.get(null);else{r=new Map,lc.set(e,r);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var v=c[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(r.set(v.dataset.precedence,v),o=v)}o&&r.set(null,o)}c=i.instance,v=c.getAttribute("data-precedence"),d=r.get(v)||o,d===o&&r.set(null,c),r.set(v,c),this.count++,o=oc.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),i.state.loading|=4}}var il={$$typeof:w,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function s3(e,i,r,o,c,d,v,_,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rl(0),this.hiddenUpdates=Rl(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Nv(e,i,r,o,c,d,v,_,A,V,q,Q){return e=new s3(e,i,r,v,A,V,q,Q,_),i=1,d===!0&&(i|=24),d=tn(3,null,null,i),e.current=d,d.stateNode=e,i=Zf(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:r,cache:i},Jf(d),e}function Pv(e){return e?(e=Sa,e):Sa}function Rv(e,i,r,o,c,d){c=Pv(c),o.context===null?o.context=c:o.pendingContext=c,o=Ta(i),o.payload={element:r},d=d===void 0?null:d,d!==null&&(o.callback=d),r=Aa(e,o,i),r!==null&&(pn(r,e,i),Po(r,e,i))}function Lv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function vh(e,i){Lv(e,i),(e=e.alternate)&&Lv(e,i)}function Vv(e){if(e.tag===13||e.tag===31){var i=Hi(e,67108864);i!==null&&pn(i,e,67108864),vh(e,67108864)}}function Bv(e){if(e.tag===13||e.tag===31){var i=Tn();i=Vl(i);var r=Hi(e,i);r!==null&&pn(r,e,i),vh(e,i)}}var cc=!0;function o3(e,i,r,o){var c=H.T;H.T=null;var d=$.p;try{$.p=2,yh(e,i,r,o)}finally{$.p=d,H.T=c}}function l3(e,i,r,o){var c=H.T;H.T=null;var d=$.p;try{$.p=8,yh(e,i,r,o)}finally{$.p=d,H.T=c}}function yh(e,i,r,o){if(cc){var c=bh(o);if(c===null)ah(e,i,o,fc,r),Iv(e,o);else if(c3(c,e,i,r,o))o.stopPropagation();else if(Iv(e,o),i&4&&-1<u3.indexOf(e)){for(;c!==null;){var d=Di(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=yn(d.pendingLanes);if(v!==0){var _=d;for(_.pendingLanes|=2,_.entangledLanes|=2;v;){var A=1<<31-Vt(v);_.entanglements[1]|=A,v&=~A}Ci(d),(Fe&6)===0&&(qu=Rt()+500,Qo(0))}}break;case 31:case 13:_=Hi(d,2),_!==null&&pn(_,d,2),Zu(),vh(d,2)}if(d=bh(o),d===null&&ah(e,i,o,fc,r),d===c)break;c=d}c!==null&&o.stopPropagation()}else ah(e,i,o,null,r)}}function bh(e){return e=Xn(e),_h(e)}var fc=null;function _h(e){if(fc=null,e=Dn(e),e!==null){var i=u(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=f(i),e!==null)return e;e=null}else if(r===31){if(e=h(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return fc=e,null}function Uv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ar()){case Ys:return 2;case si:return 8;case rr:case sr:return 32;case Yn:return 268435456;default:return 32}default:return 32}}var Sh=!1,Ba=null,Ua=null,Ia=null,al=new Map,rl=new Map,Ha=[],u3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Iv(e,i){switch(e){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":al.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(i.pointerId)}}function sl(e,i,r,o,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:r,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},i!==null&&(i=Di(i),i!==null&&Vv(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),e)}function c3(e,i,r,o,c){switch(i){case"focusin":return Ba=sl(Ba,e,i,r,o,c),!0;case"dragenter":return Ua=sl(Ua,e,i,r,o,c),!0;case"mouseover":return Ia=sl(Ia,e,i,r,o,c),!0;case"pointerover":var d=c.pointerId;return al.set(d,sl(al.get(d)||null,e,i,r,o,c)),!0;case"gotpointercapture":return d=c.pointerId,rl.set(d,sl(rl.get(d)||null,e,i,r,o,c)),!0}return!1}function Hv(e){var i=Dn(e.target);if(i!==null){var r=u(i);if(r!==null){if(i=r.tag,i===13){if(i=f(r),i!==null){e.blockedOn=i,Mn(e.priority,function(){Bv(r)});return}}else if(i===31){if(i=h(r),i!==null){e.blockedOn=i,Mn(e.priority,function(){Bv(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=bh(e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);to=o,r.target.dispatchEvent(o),to=null}else return i=Di(r),i!==null&&Vv(i),e.blockedOn=r,!1;i.shift()}return!0}function Fv(e,i,r){dc(e)&&r.delete(i)}function f3(){Sh=!1,Ba!==null&&dc(Ba)&&(Ba=null),Ua!==null&&dc(Ua)&&(Ua=null),Ia!==null&&dc(Ia)&&(Ia=null),al.forEach(Fv),rl.forEach(Fv)}function hc(e,i){e.blockedOn===i&&(e.blockedOn=null,Sh||(Sh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,f3)))}var mc=null;function Gv(e){mc!==e&&(mc=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){mc===e&&(mc=null);for(var i=0;i<e.length;i+=3){var r=e[i],o=e[i+1],c=e[i+2];if(typeof o!="function"){if(_h(o||r)===null)continue;break}var d=Di(r);d!==null&&(e.splice(i,3),i-=3,bd(d,{pending:!0,data:c,method:r.method,action:o},o,c))}}))}function Os(e){function i(A){return hc(A,e)}Ba!==null&&hc(Ba,e),Ua!==null&&hc(Ua,e),Ia!==null&&hc(Ia,e),al.forEach(i),rl.forEach(i);for(var r=0;r<Ha.length;r++){var o=Ha[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ha.length&&(r=Ha[0],r.blockedOn===null);)Hv(r),r.blockedOn===null&&Ha.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var c=r[o],d=r[o+1],v=c[$t]||null;if(typeof d=="function")v||Gv(r);else if(v){var _=null;if(d&&d.hasAttribute("formAction")){if(c=d,v=d[$t]||null)_=v.formAction;else if(_h(c)!==null)continue}else _=v.action;typeof _=="function"?r[o+1]=_:(r.splice(o,3),o-=3),Gv(r)}}}function Yv(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function i(){c!==null&&(c(),c=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),c!==null&&(c(),c=null)}}}function wh(e){this._internalRoot=e}gc.prototype.render=wh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var r=i.current,o=Tn();Rv(r,o,e,i,null,null)},gc.prototype.unmount=wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Rv(e.current,2,null,e,null,null),Zu(),i[Gt]=null}};function gc(e){this._internalRoot=e}gc.prototype.unstable_scheduleHydration=function(e){if(e){var i=jf();e={blockedOn:null,target:e,priority:i};for(var r=0;r<Ha.length&&i!==0&&i<Ha[r].priority;r++);Ha.splice(r,0,e),r===0&&Hv(e)}};var Xv=n.version;if(Xv!=="19.2.0")throw Error(s(527,Xv,"19.2.0"));$.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var d3={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{En=pc.inject(d3),Lt=pc}catch{}}return ll.createRoot=function(e,i){if(!l(e))throw Error(s(299));var r=!1,o="",c=J0,d=ep,v=tp;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError)),i=Nv(e,1,!1,null,null,r,o,null,c,d,v,Yv),e[Gt]=i.current,ih(e),new wh(i)},ll.hydrateRoot=function(e,i,r){if(!l(e))throw Error(s(299));var o=!1,c="",d=J0,v=ep,_=tp,A=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(v=r.onCaughtError),r.onRecoverableError!==void 0&&(_=r.onRecoverableError),r.formState!==void 0&&(A=r.formState)),i=Nv(e,1,!0,i,r??null,o,c,A,d,v,_,Yv),i.context=Pv(null),r=i.current,o=Tn(),o=Vl(o),c=Ta(o),c.callback=null,Aa(r,c,o),r=o,i.current.lanes=r,ca(i,r),Ci(i),e[Gt]=i.current,ih(e),new gc(i)},ll.version="19.2.0",ll}var $v;function x3(){if($v)return xh.exports;$v=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),xh.exports=k3(),xh.exports}var C3=x3();const w2="/FouadSmlajiPortfolio/assets/EarthImage-Cjz34ABg.png";function j3(){const[t,n]=j.useState(),a=rf(),s={animation:"click 1s "};function l(){setTimeout(()=>{a("/tour")},700)}return k.jsx(k.Fragment,{children:k.jsx("div",{className:"homePageSection",children:k.jsxs("div",{className:"homePageContainer container",children:[k.jsxs("div",{className:"d-flex flex-row titleDiv",children:[k.jsx("h1",{className:"homePageTitle",children:"Fouad "}),k.jsx("h1",{className:"homePageTitle",children:" Smlaji"})]}),k.jsx("img",{src:w2,alt:"",style:t,className:"earthImage",loading:"eager",fetchPriority:"high",decoding:"async",onClick:()=>{n(s),l()}}),k.jsx("span",{className:"Tour",children:"CLICK FOR A TOUR"})]})})})}const T3="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.6789%2015.9759C18.6789%2014.5415%2017.4796%2013.3785%2016%2013.3785C14.5206%2013.3785%2013.3211%2014.5415%2013.3211%2015.9759C13.3211%2017.4105%2014.5206%2018.5734%2016%2018.5734C17.4796%2018.5734%2018.6789%2017.4105%2018.6789%2015.9759Z'%20fill='%2353C1DE'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.7004%2011.1537C25.2661%208.92478%2025.9772%204.79148%2023.4704%203.39016C20.9753%201.99495%2017.7284%204.66843%2016.0139%206.27318C14.3044%204.68442%2010.9663%202.02237%208.46163%203.42814C5.96751%204.82803%206.73664%208.8928%207.3149%2011.1357C4.98831%2011.7764%201%2013.1564%201%2015.9759C1%2018.7874%204.98416%2020.2888%207.29698%2020.9289C6.71658%2023.1842%205.98596%2027.1909%208.48327%2028.5877C10.9973%2029.9932%2014.325%2027.3945%2016.0554%2025.7722C17.7809%2027.3864%2020.9966%2030.0021%2023.4922%2028.6014C25.9956%2027.1963%2025.3436%2023.1184%2024.7653%2020.8625C27.0073%2020.221%2031%2018.7523%2031%2015.9759C31%2013.1835%2026.9903%2011.7923%2024.7004%2011.1537ZM24.4162%2019.667C24.0365%2018.5016%2023.524%2017.2623%2022.8971%2015.9821C23.4955%2014.7321%2023.9881%2013.5088%2024.3572%2012.3509C26.0359%2012.8228%2029.7185%2013.9013%2029.7185%2015.9759C29.7185%2018.07%2026.1846%2019.1587%2024.4162%2019.667ZM22.85%2027.526C20.988%2028.571%2018.2221%2026.0696%2016.9478%2024.8809C17.7932%2023.9844%2018.638%2022.9422%2019.4625%2021.7849C20.9129%2021.6602%2022.283%2021.4562%2023.5256%2021.1777C23.9326%2022.7734%2024.7202%2026.4763%2022.85%2027.526ZM9.12362%2027.5111C7.26143%2026.47%208.11258%2022.8946%208.53957%2021.2333C9.76834%2021.4969%2011.1286%2021.6865%2012.5824%2021.8008C13.4123%2022.9332%2014.2816%2023.9741%2015.1576%2024.8857C14.0753%2025.9008%2010.9945%2028.557%209.12362%2027.5111ZM2.28149%2015.9759C2.28149%2013.874%205.94207%2012.8033%207.65904%2012.3326C8.03451%2013.5165%208.52695%2014.7544%209.12123%2016.0062C8.51925%2017.2766%208.01977%2018.5341%207.64085%2019.732C6.00369%2019.2776%202.28149%2018.0791%202.28149%2015.9759ZM9.1037%204.50354C10.9735%203.45416%2013.8747%206.00983%2015.1159%207.16013C14.2444%208.06754%2013.3831%209.1006%2012.5603%2010.2265C11.1494%2010.3533%209.79875%2010.5569%208.55709%2010.8297C8.09125%209.02071%207.23592%205.55179%209.1037%204.50354ZM20.3793%2011.5771C21.3365%2011.6942%2022.2536%2011.85%2023.1147%2012.0406C22.8562%2012.844%2022.534%2013.6841%2022.1545%2014.5453C21.6044%2013.5333%2021.0139%2012.5416%2020.3793%2011.5771ZM16.0143%208.0481C16.6054%208.66897%2017.1974%209.3623%2017.7798%2010.1145C16.5985%2010.0603%2015.4153%2010.0601%2014.234%2010.1137C14.8169%209.36848%2015.414%208.67618%2016.0143%208.0481ZM9.8565%2014.5444C9.48329%2013.6862%209.16398%2012.8424%208.90322%2012.0275C9.75918%2011.8418%2010.672%2011.69%2011.623%2011.5748C10.9866%2012.5372%2010.3971%2013.5285%209.8565%2014.5444ZM11.6503%2020.4657C10.6679%2020.3594%209.74126%2020.2153%208.88556%2020.0347C9.15044%2019.2055%209.47678%2018.3435%209.85796%2017.4668C10.406%2018.4933%2011.0045%2019.4942%2011.6503%2020.4657ZM16.0498%2023.9915C15.4424%2023.356%2014.8365%2022.6531%2014.2448%2021.8971C15.4328%2021.9423%2016.6231%2021.9424%2017.811%2021.891C17.2268%2022.6608%2016.6369%2023.3647%2016.0498%2023.9915ZM22.1667%2017.4222C22.5677%2018.3084%2022.9057%2019.1657%2023.1742%2019.9809C22.3043%2020.1734%2021.3652%2020.3284%2020.3757%2020.4435C21.015%2019.4607%2021.6149%2018.4536%2022.1667%2017.4222ZM18.7473%2020.5941C16.9301%2020.72%2015.1016%2020.7186%2013.2838%2020.6044C12.2509%2019.1415%2011.3314%2017.603%2010.5377%2016.0058C11.3276%2014.4119%2012.2404%2012.8764%2013.2684%2011.4158C15.0875%2011.2825%2016.9178%2011.2821%2018.7369%2011.4166C19.7561%2012.8771%2020.6675%2014.4086%2021.4757%2015.9881C20.6771%2017.5812%2019.7595%2019.1198%2018.7473%2020.5941ZM22.8303%204.4666C24.7006%205.51254%2023.8681%209.22726%2023.4595%2010.8426C22.2149%2010.5641%2020.8633%2010.3569%2019.4483%2010.2281C18.6239%209.09004%2017.7698%208.05518%2016.9124%207.15949C18.1695%205.98441%2020.9781%203.43089%2022.8303%204.4666Z'%20fill='%2353C1DE'/%3e%3c/svg%3e",A3="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%204L16%2028L30%204H24.5L16%2018.5L7.5%204H2Z'%20fill='%2341B883'/%3e%3cpath%20d='M7.5%204L16%2018.5L24.5%204H19.5L16.0653%2010.0126L12.5%204H7.5Z'%20fill='%2335495E'/%3e%3c/svg%3e",E3="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.58536%2017.4132C1.80488%2016.6327%201.80488%2015.3673%202.58536%2014.5868L14.5868%202.58536C15.3673%201.80488%2016.6327%201.80488%2017.4132%202.58536L29.4146%2014.5868C30.1951%2015.3673%2030.1951%2016.6327%2029.4146%2017.4132L17.4132%2029.4146C16.6327%2030.1951%2015.3673%2030.1951%2014.5868%2029.4146L2.58536%2017.4132Z'%20fill='%23EE513B'/%3e%3cpath%20d='M12.1489%205.06152L10.9336%206.27686L14.0725%209.41577C13.9455%209.68819%2013.8746%209.99201%2013.8746%2010.3124C13.8746%2011.222%2014.4461%2011.9981%2015.2496%2012.3012V19.9798C14.4461%2020.2829%2013.8746%2021.059%2013.8746%2021.9686C13.8746%2023.1422%2014.826%2024.0936%2015.9996%2024.0936C17.1732%2024.0936%2018.1246%2023.1422%2018.1246%2021.9686C18.1246%2021.144%2017.6549%2020.429%2016.9684%2020.0768V12.3117L19.9689%2015.3122C19.8481%2015.5791%2019.7809%2015.8754%2019.7809%2016.1874C19.7809%2017.361%2020.7323%2018.3124%2021.9059%2018.3124C23.0795%2018.3124%2024.0309%2017.361%2024.0309%2016.1874C24.0309%2015.0138%2023.0795%2014.0624%2021.9059%2014.0624C21.6778%2014.0624%2021.4582%2014.0983%2021.2522%2014.1648L18.0297%2010.9423C18.0914%2010.7433%2018.1246%2010.5317%2018.1246%2010.3124C18.1246%209.13878%2017.1732%208.18738%2015.9996%208.18738C15.7803%208.18738%2015.5688%208.22061%2015.3697%208.2823L12.1489%205.06152Z'%20fill='white'/%3e%3c/svg%3e",O3="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%20baseProfile='basic'%3e%3cpath%20fill='%237c4dff'%20d='M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443%20c-0.077,2.221,0.023,5.097,0.747,7.443c0.726,2.353,1.951,3.84,3.957,4.031v2.167c-2.006,0.191-3.23,1.678-3.957,4.031%20c-0.724,2.345-0.824,5.222-0.747,7.443C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443%20c0.077-2.221-0.023-5.097-0.747-7.443c-0.726-2.353-1.954-3.84-3.96-4.031v-2.167c2.006-0.191,3.233-1.678,3.96-4.031%20C7.35,16.54,7.451,13.664,7.373,11.443z'/%3e%3cpath%20fill='%23fff'%20d='M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312%20c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783%20C31.283,25.544,29.593,23.756,27.073,23.464z%20M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565%20C27.413,21.63,26.055,22.608,23.59,22.608z%20M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953%20h-3.926V24.834z'/%3e%3c/svg%3e",M3="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3efile_type_tailwind%3c/title%3e%3cpath%20d='M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z'%20style='fill:%2344a8b3'/%3e%3c/svg%3e",D3="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20height='800px'%20width='800px'%20xmlns='http://www.w3.org/2000/svg'%20aria-label='HTML5'%20role='img'%20viewBox='0%200%20512%20512'%3e%3cpath%20fill='%23e34f26'%20d='M71%20460L30%200h451l-41%20460-185%2052'/%3e%3cpath%20fill='%23ef652a'%20d='M256%20472l149-41%2035-394H256'/%3e%3cpath%20fill='%23ebebeb'%20d='M256%20208h-75l-5-58h80V94H114l15%20171h127zm-1%20147l-63-17-4-45h-56l7%2089%20116%2032z'/%3e%3cpath%20fill='%23ffffff'%20d='M255%20208v57h70l-7%2073-63%2017v59l116-32%2016-174zm0-114v56h137l5-56z'/%3e%3c/svg%3e",z3="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3efile_type_css%3c/title%3e%3cpolygon%20points='5.902%2027.201%203.656%202%2028.344%202%2026.095%2027.197%2015.985%2030%205.902%2027.201'%20style='fill:%231572b6'/%3e%3cpolygon%20points='16%2027.858%2024.17%2025.593%2026.092%204.061%2016%204.061%2016%2027.858'%20style='fill:%2333a9dc'/%3e%3cpolygon%20points='16%2013.191%2020.09%2013.191%2020.372%2010.026%2016%2010.026%2016%206.935%2016.011%206.935%2023.75%206.935%2023.676%207.764%2022.917%2016.282%2016%2016.282%2016%2013.191'%20style='fill:%23fff'/%3e%3cpolygon%20points='16.019%2021.218%2016.005%2021.222%2012.563%2020.292%2012.343%2017.827%2010.67%2017.827%209.24%2017.827%209.673%2022.68%2016.004%2024.438%2016.019%2024.434%2016.019%2021.218'%20style='fill:%23ebebeb'/%3e%3cpolygon%20points='19.827%2016.151%2019.455%2020.29%2016.008%2021.22%2016.008%2024.436%2022.344%2022.68%2022.391%2022.158%2022.928%2016.151%2019.827%2016.151'%20style='fill:%23fff'/%3e%3cpolygon%20points='16.011%206.935%2016.011%208.855%2016.011%2010.018%2016.011%2010.026%208.555%2010.026%208.555%2010.026%208.545%2010.026%208.483%209.331%208.342%207.764%208.268%206.935%2016.011%206.935'%20style='fill:%23ebebeb'/%3e%3cpolygon%20points='16%2013.191%2016%2015.111%2016%2016.274%2016%2016.282%2012.611%2016.282%2012.611%2016.282%2012.601%2016.282%2012.539%2015.587%2012.399%2014.02%2012.325%2013.191%2016%2013.191'%20style='fill:%23ebebeb'/%3e%3c/svg%3e",N3="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%20256%20256'%20xmlns='http://www.w3.org/2000/svg'%20preserveAspectRatio='xMinYMin%20meet'%3e%3cpath%20d='M0%200h256v256H0V0z'%20fill='%23F7DF1E'/%3e%3cpath%20d='M67.312%20213.932l19.59-11.856c3.78%206.701%207.218%2012.371%2015.465%2012.371%207.905%200%2012.89-3.092%2012.89-15.12v-81.798h24.057v82.138c0%2024.917-14.606%2036.259-35.916%2036.259-19.245%200-30.416-9.967-36.087-21.996M152.381%20211.354l19.588-11.341c5.157%208.421%2011.859%2014.607%2023.715%2014.607%209.969%200%2016.325-4.984%2016.325-11.858%200-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257%200-18.044%2013.747-31.792%2035.228-31.792%2015.294%200%2026.292%205.328%2034.196%2019.247L210.29%20147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046%200-11.514%204.468-11.514%2010.31%200%207.217%204.468%2010.14%2014.778%2014.608l6.014%202.577c20.45%208.765%2031.963%2017.7%2031.963%2037.804%200%2021.654-17.012%2033.51-39.867%2033.51-22.339%200-36.774-10.654-43.819-24.574'/%3e%3c/svg%3e",P3="/FouadSmlajiPortfolio/assets/Sass-CU3MtHwk.svg",R3="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%20width='64'%20height='64'%3e%3cpath%20d='M32%2024.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365%207.257c-.613.873-1.256%201.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214%201.86-.105%202.535.88l4.765%206.435%204.8-6.4c.615-.873%201.276-1.205%202.38-.883l-2.48%203.288-3.36%204.375c-.4.5-.345.842.023%201.325L32%2024.795zM.008%2015.427l.562-2.764C2.1%207.193%208.37%204.92%2012.694%208.3c2.527%201.988%203.155%204.8%203.03%207.95H1.48c-.214%205.67%203.867%209.092%209.07%207.346%201.825-.613%202.9-2.042%203.438-3.83.273-.896.725-1.036%201.567-.78-.43%202.236-1.4%204.104-3.45%205.273-3.063%201.75-7.435%201.184-9.735-1.248C1%2021.6.434%2019.812.18%2017.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58%202.813-6.746%207.037z'/%3e%3c/svg%3e",L3="/FouadSmlajiPortfolio/assets/Postgresql_elephant-BpcazhJg.svg";function V3(){const[t,n]=j.useState(!1),a=rf(),s={animation:"slideOut 3s, rotate 25s "},l={animation:"fade 3s  "};function u(){setTimeout(()=>{a("/projects")},0)}return k.jsx("div",{className:"LandingPageSection",children:k.jsxs("div",{className:"LandingPageContainer",children:[k.jsx("img",{src:w2,alt:"",className:"EarthImage2",style:t?s:{},loading:"eager",fetchPriority:"high",decoding:"async"}),k.jsxs("div",{className:"d-flex flex-row align-items-center justify-content-between iconsDiv ",style:t?l:{},children:[k.jsx("img",{src:R3,alt:"",height:60,className:"expressIcon",loading:"lazy",decoding:"async"}),k.jsx("img",{src:L3,alt:"",height:60,loading:"lazy",decoding:"async"}),k.jsx("img",{src:T3,alt:"",height:60,loading:"lazy",decoding:"async"}),k.jsx("img",{src:A3,alt:"",height:60,loading:"lazy",decoding:"async"}),k.jsx("img",{src:E3,alt:"",height:60,loading:"lazy",decoding:"async"}),k.jsx("img",{src:O3,alt:"",height:60,loading:"lazy",decoding:"async"}),k.jsx("img",{src:M3,alt:"",height:60,loading:"lazy",decoding:"async"}),k.jsx("img",{src:P3,alt:"",height:60,loading:"lazy",decoding:"async"}),k.jsx("img",{src:D3,alt:"",height:60,loading:"lazy",decoding:"async"}),k.jsx("img",{src:z3,alt:"",height:60,loading:"lazy",decoding:"async"}),k.jsx("img",{src:N3,alt:"",height:60,loading:"lazy",decoding:"async"})]}),k.jsxs("div",{className:"d-flex flex-row align-items-center justify-content-center row w-100",style:t?l:{},children:[k.jsx("div",{className:"col-6 col-lg-6 h-100 hideDiv"}),k.jsx("div",{className:"col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center h-100",children:k.jsxs("div",{className:"pt-4",children:[k.jsx("h2",{className:"aboutTitle",children:"Full Stack Developer"}),k.jsx("p",{className:"aboutText",children:"Results-driven Software Engineer with over 3 years of experience in full-stack web development. Skilled in building responsive, scalable web applications using React.js, Vue.js, WordPress, and modern backend technologies such as Express.js. Experienced in improving website performance, enhancing SEO, and delivering high-quality client projects. Passionate about creating impactful digital experiences and optimizing development workflows."})]})})]}),k.jsx("div",{className:"proceedDiv",children:k.jsx("button",{className:"proceed",onClick:()=>{n(!0),u()},children:"Proceed →"})})]})})}const k2="/FouadSmlajiPortfolio/assets/Mars-DuBlujke.png",x2="/FouadSmlajiPortfolio/assets/Mars3-PYr_x1ml.png",C2="/FouadSmlajiPortfolio/assets/Earth-DUF-dbA0.png",j2="/FouadSmlajiPortfolio/assets/Moon-u2vU4UAk.png",T2="/FouadSmlajiPortfolio/assets/Jupiter-2qucLnLW.png",A2="/FouadSmlajiPortfolio/assets/Mercury-BCR-AAS8.png",E2="/FouadSmlajiPortfolio/assets/Neptune-DIXJiNoU.png",O2="/FouadSmlajiPortfolio/assets/Jup-CzPptdh2.png";function B3(){const[t,n]=j.useState(!1),a=rf(),s={animation:"rotate 80s infinite"},l={animation:"reverseRotate 80s infinite"};function u(){a("/tour")}return j.useEffect(()=>{const f=setTimeout(()=>{n(!0)},3500);return()=>clearTimeout(f)},[]),k.jsxs("div",{className:"projectsSection ",children:[k.jsxs("div",{className:"projectsContainer container ",style:t?s:{},children:[k.jsxs("div",{className:"d-flex flex-row justify-content-center align-items-center gap-4",children:[k.jsx("div",{className:" align-items-center justify-content-end d-flex ",style:{zIndex:"3",marginRight:"-50px"},children:k.jsxs(ni,{to:"/projects/1",className:"projectDiv",children:[k.jsx("img",{src:x2,alt:"Mars 2",className:"SunImage",loading:"lazy",decoding:"async"}),k.jsx("h2",{className:"projectName",style:t?l:{},children:"Project I"})]})}),k.jsx("div",{className:" align-items-center justify-content-center d-flex marginDiv1",style:{marginTop:"-300px",zIndex:"3"},children:k.jsxs(ni,{to:"/projects/2",className:"projectDiv",id:"project-2",children:[k.jsx("img",{src:C2,alt:"Mars 1",className:"SunImage",loading:"lazy",decoding:"async"}),k.jsx("h2",{className:"projectName",style:t?l:{},children:"Project II"})]})}),k.jsx("div",{className:" align-items-center justify-content-center d-flex marginDiv1",style:{marginTop:"-300px",zIndex:"3"},children:k.jsxs(ni,{to:"/projects/3",className:"projectDiv",id:"project-2",children:[k.jsx("img",{src:O2,alt:"Mars 1",className:"SunImage",loading:"lazy",decoding:"async"}),k.jsx("h2",{className:"projectName",style:t?l:{},children:"Project III"})]})}),k.jsx("div",{className:" align-items-center justify-content-start d-flex ",style:{zIndex:"3",marginLeft:"-50px"},children:k.jsxs(ni,{to:"/projects/4",className:"projectDiv",id:"project-3",children:[k.jsx("img",{src:k2,alt:"Mars 3",className:"SunImage",loading:"lazy",decoding:"async"}),k.jsx("h2",{className:"projectName",style:t?l:{},children:"Project IV"})]})})]}),k.jsxs("div",{className:"d-flex flex-row justify-content-center align-items-center gap-4",children:[k.jsx("div",{className:" align-items-center justify-content-end d-flex ",style:{zIndex:"3",marginRight:"-50px"},children:k.jsxs(ni,{to:"/projects/5",className:"projectDiv",id:"project-4",children:[k.jsx("img",{src:j2,alt:"Mars 3",className:"SunImage",loading:"lazy",decoding:"async"}),k.jsx("h2",{className:"projectName",style:t?l:{},children:"Project V"})]})}),k.jsx("div",{className:" align-items-center justify-content-center d-flex marginDiv2",style:{marginBottom:"-300px",zIndex:"3"},children:k.jsxs(ni,{to:"/projects/6",className:"projectDiv",id:"project-5",children:[k.jsx("img",{src:T2,alt:"Mars 1",className:"SunImage",loading:"lazy",decoding:"async"}),k.jsx("h2",{className:"projectName",style:t?l:{},children:"Project VI"})]})}),k.jsx("div",{className:" align-items-center justify-content-center d-flex marginDiv2",style:{marginBottom:"-300px",zIndex:"3"},children:k.jsxs(ni,{to:"/projects/7",className:"projectDiv",id:"project-5",children:[k.jsx("img",{src:E2,alt:"Mars 1",className:"SunImage",loading:"lazy",decoding:"async"}),k.jsx("h2",{className:"projectName",style:t?l:{},children:"Project VII"})]})}),k.jsx("div",{className:" align-items-center justify-content-start d-flex ",style:{zIndex:"3",marginLeft:"-50px"},children:k.jsxs(ni,{to:"/projects/8",className:"projectDiv",id:"project-6",children:[k.jsx("img",{src:A2,alt:"Mars 2",className:"SunImage",loading:"lazy",decoding:"async"}),k.jsx("h2",{className:"projectName",style:t?l:{},children:"Project VIII"})]})})]})]}),k.jsx("h1",{className:"ProjectsTitle",children:"Projects"}),k.jsx("div",{className:"ReturnDiv",children:k.jsx("button",{className:"proceed",onClick:()=>{u()},children:"← Return "})}),k.jsx("div",{className:"proceedDiv",children:k.jsx("button",{className:"proceed",onClick:()=>{a("/projects2")},children:"Next →"})})]})}function U3(){const[t,n]=j.useState(!1),a=rf(),s={animation:"rotate 80s infinite"},l={animation:"reverseRotate 80s infinite"};function u(){a("/projects")}return j.useEffect(()=>{const f=setTimeout(()=>{n(!0)},3500);return()=>clearTimeout(f)},[]),k.jsxs("div",{className:"projectsSection ",children:[k.jsxs("div",{className:"projectsContainer container ",style:t?s:{},children:[k.jsxs("div",{className:"d-flex flex-row justify-content-center align-items-center gap-4",children:[k.jsx("div",{className:" align-items-center justify-content-end d-flex ",style:{zIndex:"3",marginRight:"-50px"},children:k.jsxs(ni,{to:"/projects/9",className:"projectDiv",children:[k.jsx("img",{src:x2,alt:"Project IX",className:"SunImage",loading:"lazy",decoding:"async"}),k.jsx("h2",{className:"projectName",style:t?l:{},children:"Project IX"})]})}),k.jsx("div",{className:" align-items-center justify-content-center d-flex marginDiv1",style:{marginTop:"-300px",zIndex:"3"},children:k.jsxs("div",{className:"projectDiv",style:{cursor:"default"},children:[k.jsx("img",{src:C2,alt:"Mars 1",className:"SunImage",loading:"lazy",decoding:"async"}),k.jsx("h2",{className:"projectName",style:t?l:{},children:"Project X"})]})}),k.jsx("div",{className:" align-items-center justify-content-center d-flex marginDiv1",style:{marginTop:"-300px",zIndex:"3"},children:k.jsxs("div",{className:"projectDiv",style:{cursor:"default"},children:[k.jsx("img",{src:O2,alt:"Mars 1",className:"SunImage",loading:"lazy",decoding:"async"}),k.jsx("h2",{className:"projectName",style:t?l:{},children:"Project XI"})]})}),k.jsx("div",{className:" align-items-center justify-content-start d-flex ",style:{zIndex:"3",marginLeft:"-50px"},children:k.jsxs("div",{className:"projectDiv",style:{cursor:"default"},children:[k.jsx("img",{src:k2,alt:"Mars 3",className:"SunImage",loading:"lazy",decoding:"async"}),k.jsx("h2",{className:"projectName",style:t?l:{},children:"Project XII"})]})})]}),k.jsxs("div",{className:"d-flex flex-row justify-content-center align-items-center gap-4",children:[k.jsx("div",{className:" align-items-center justify-content-end d-flex ",style:{zIndex:"3",marginRight:"-50px"},children:k.jsxs("div",{className:"projectDiv",style:{cursor:"default"},children:[k.jsx("img",{src:j2,alt:"Mars 3",className:"SunImage",loading:"lazy",decoding:"async"}),k.jsx("h2",{className:"projectName",style:t?l:{},children:"Project XIII"})]})}),k.jsx("div",{className:" align-items-center justify-content-center d-flex marginDiv2",style:{marginBottom:"-300px",zIndex:"3"},children:k.jsxs("div",{className:"projectDiv",style:{cursor:"default"},children:[k.jsx("img",{src:T2,alt:"Mars 1",className:"SunImage",loading:"lazy",decoding:"async"}),k.jsx("h2",{className:"projectName",style:t?l:{},children:"Project XIV"})]})}),k.jsx("div",{className:" align-items-center justify-content-center d-flex marginDiv2",style:{marginBottom:"-300px",zIndex:"3"},children:k.jsxs("div",{className:"projectDiv",style:{cursor:"default"},children:[k.jsx("img",{src:E2,alt:"Mars 1",className:"SunImage",loading:"lazy",decoding:"async"}),k.jsx("h2",{className:"projectName",style:t?l:{},children:"Project XV"})]})}),k.jsx("div",{className:" align-items-center justify-content-start d-flex ",style:{zIndex:"3",marginLeft:"-50px"},children:k.jsxs("div",{className:"projectDiv",style:{cursor:"default"},children:[k.jsx("img",{src:A2,alt:"Mars 2",className:"SunImage",loading:"lazy",decoding:"async"}),k.jsx("h2",{className:"projectName",style:t?l:{},children:"Project XVI"})]})})]})]}),k.jsx("h1",{className:"ProjectsTitle",children:"Projects"}),k.jsx("div",{className:"ReturnDiv",children:k.jsx("button",{className:"proceed",onClick:()=>{u()},children:"← Return "})})]})}const I3=[{id:"1",title:"Project I: E-Commerce Website",path:"/projects/1",num:"I",description:"An e-commerce website featuring an admin dashboard for managing users, products, and permissions. It includes roles for admins, editors, and product managers, allowing them to create, edit, and delete products and users. The platform supports authentication, including Google login integration.",images:["/FouadSmlajiPortfolio/assets/images/EcommerceWebsite/image1.png","/FouadSmlajiPortfolio/assets/images/EcommerceWebsite/image2.png","/FouadSmlajiPortfolio/assets/images/EcommerceWebsite/image3.png","/FouadSmlajiPortfolio/assets/images/EcommerceWebsite/image4.png"],link:"https://github.com/fouadsmlaji/E-Commerce"},{id:"2",title:"Project II: Majd Alghaith Photography",path:"/projects/2",num:"II",description:"A custom-designed website created for the talented photographer Majd Algaith, showcasing his extensive portfolio and stunning artistic photography. The website is tailored to highlight his creative vision and expertise, providing a visually engaging platform for clients and visitors to explore his work. It features an elegant layout, seamless navigation, and a gallery that beautifully displays his artwork, making it an ideal space for promoting his services and artistic achievements.",images:["/FouadSmlajiPortfolio/assets/images/MajdWebsite/Image1.png","/FouadSmlajiPortfolio/assets/images/MajdWebsite/image2.png","/FouadSmlajiPortfolio/assets/images/MajdWebsite/image3.png","/FouadSmlajiPortfolio/assets/images/MajdWebsite/image4.png"],link:"https://github.com/fouadsmlaji/MA-Website"},{id:"3",title:"Project III: Tasking Dev",path:"/projects/3",num:"III",description:"A custom software development company that understands your needs and saves you money. We will build your software using AI at the cheapest cost. You will also interact with real people who understand your business requirements so you don't have to waste your time. ",images:["/FouadSmlajiPortfolio/assets/images/TaskingDevWebsite/Image1.png","/FouadSmlajiPortfolio/assets/images/TaskingDevWebsite/Image2.png","/FouadSmlajiPortfolio/assets/images/TaskingDevWebsite/Image3.png","/FouadSmlajiPortfolio/assets/images/TaskingDevWebsite/Image4.png"],link:"https://github.com/fouadsmlaji/Task.Dev-website"},{id:"4",title:"Project IV: Alessandra Parisi Sito",path:"/projects/4",num:"IV",description:"This website serves as a dynamic showcase for the renowned artist Alessandra Parisi, highlighting her diverse collection of artwork. The site features a range of her artistic creations, including stunning paintings, intricate icons, and various other art forms that demonstrate her unique creative vision and talent. With each piece, the website provides an immersive experience that allows visitors to explore the depth and beauty of Alessandra's work, offering a glimpse into her artistic journey and the passion that drives her craft.",images:["/FouadSmlajiPortfolio/assets/images/AlessandraWebsite/image1.png","/FouadSmlajiPortfolio/assets/images/AlessandraWebsite/image2.png","/FouadSmlajiPortfolio/assets/images/AlessandraWebsite/Image3.png","/FouadSmlajiPortfolio/assets/images/AlessandraWebsite/Image4.png"],link:"https://www.alessandraparisi.it"},{id:"5",title:"Project V: Foodz Restaurant",path:"/projects/5",num:"V",description:"The aim of this project is to enhance the food ordering experience by making it more appealing and convenient. By allowing customers to simply scan a QR code, they can instantly access the restaurant's website, which features an eye-catching design. This enables them to browse through the menu with ease, streamlining the entire process. **** HOSTED ON: http://anai-vlxtixa4oernwzo7uqzf.s3-website-ap-southeast-2.amazonaws.com/index.html ****.",images:["/FouadSmlajiPortfolio/assets/images/FoodzWebsite/image1.png","/FouadSmlajiPortfolio/assets/images/FoodzWebsite/image2.png","/FouadSmlajiPortfolio/assets/images/FoodzWebsite/Image3.png","/FouadSmlajiPortfolio/assets/images/FoodzWebsite/Image4.png"],link:"https://github.com/fouadsmlaji/Foodz-Restaurant"},{id:"6",title:"Project VI: My Holiday",path:"/projects/6",num:"VI",description:"A dedicated website designed for holiday apartment rentals, offering a seamless and user-friendly platform for travelers to find their ideal accommodations. The website showcases a variety of vacation apartments with detailed descriptions, high-quality images, and a list of amenities such as Wi-Fi, swimming pools, and more. It provides an intuitive search feature, allowing users to filter by location, price, and availability, ensuring a hassle-free booking experience. ",images:["/FouadSmlajiPortfolio/assets/images/MyHolidayWebsite/image1.png","/FouadSmlajiPortfolio/assets/images/MyHolidayWebsite/image2.png","/FouadSmlajiPortfolio/assets/images/MyHolidayWebsite/image3.png","/FouadSmlajiPortfolio/assets/images/MyHolidayWebsite/image4.png"],link:"https://github.com/fouadsmlaji/Holiday-Apartments"},{id:"7",title:"Project VII: Lnabni Website",path:"/projects/7",num:"VII",description:"Le Nabni is a semi-governmental media platform established to serve as an institutional bridge connecting Syrian women inside and outside the country, while enhancing their presence in the humanitarian, cultural, and professional arenas.",images:["/FouadSmlajiPortfolio/assets/images/LnabniWebsite/lenabni1.webp","/FouadSmlajiPortfolio/assets/images/LnabniWebsite/lenabni2.webp","/FouadSmlajiPortfolio/assets/images/LnabniWebsite/lenabni3.webp","/FouadSmlajiPortfolio/assets/images/LnabniWebsite/lenabni4.webp"],link:"https://lnabni.com"},{id:"8",title:"Project VIII: Minimal Digital Agency",path:"/projects/8",num:"VIII",description:"Minimal Digital Agency is a modern and streamlined platform dedicated to providing high-quality static web page creation services. Our team of skilled developers specializes in building fast, lightweight, and aesthetically pleasing websites that ensure a strong and professional online presence. We focus on efficiency, simplicity, and performance, delivering static websites that are secure, optimized, and maintenance-free. Whether you need a landing page, a business showcase, or a portfolio website, we create tailored solutions that meet your specific needs. ",images:["/FouadSmlajiPortfolio/assets/images/MidiWebsite/image1.png","/FouadSmlajiPortfolio/assets/images/MidiWebsite/image2.png","/FouadSmlajiPortfolio/assets/images/MidiWebsite/image3.png","/FouadSmlajiPortfolio/assets/images/MidiWebsite/image4.png"],link:"https://github.com/fouadsmlaji/minimal-digital-agency"},{id:"9",title:"Project IX: SRT Freight Forwarding",path:"/projects/9",num:"IX",description:"SRT is a leading logistics and freight forwarding company dedicated to delivering reliable, efficient, and professional transportation solutions across the UAE and the wider region. We specialize in a full spectrum of services, including refrigerated land freight for temperature-sensitive goods, heavy-cargo transportation using top-grade trailers, and comprehensive import and export support for businesses of all sizes.",images:["/FouadSmlajiPortfolio/assets/images/SRT/image1.png","/FouadSmlajiPortfolio/assets/images/SRT/image2.png","/FouadSmlajiPortfolio/assets/images/SRT/image3.png","/FouadSmlajiPortfolio/assets/images/SRT/image4.png"],link:"https://srtfreightforwarding.com"}];function H3(t){if(typeof Proxy>"u")return t;const n=new Map,a=(...s)=>t(...s);return new Proxy(a,{get:(s,l)=>l==="create"?t:(n.has(l)||n.set(l,t(l)),n.get(l))})}function of(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const cm=t=>Array.isArray(t);function M2(t,n){if(!Array.isArray(n))return!1;const a=n.length;if(a!==t.length)return!1;for(let s=0;s<a;s++)if(n[s]!==t[s])return!1;return!0}function wl(t){return typeof t=="string"||Array.isArray(t)}function Jv(t){const n=[{},{}];return t==null||t.values.forEach((a,s)=>{n[0][s]=a.get(),n[1][s]=a.getVelocity()}),n}function Wm(t,n,a,s){if(typeof n=="function"){const[l,u]=Jv(s);n=n(a!==void 0?a:t.custom,l,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[l,u]=Jv(s);n=n(a!==void 0?a:t.custom,l,u)}return n}function lf(t,n,a){const s=t.getProps();return Wm(s,n,a!==void 0?a:s.custom,t)}const Qm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],$m=["initial",...Qm],Ol=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Hr=new Set(Ol),ra=t=>t*1e3,sa=t=>t/1e3,F3={type:"spring",stiffness:500,damping:25,restSpeed:10},G3=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Y3={type:"keyframes",duration:.8},X3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},q3=(t,{keyframes:n})=>n.length>2?Y3:Hr.has(t)?t.startsWith("scale")?G3(n[1]):F3:X3;function Jm(t,n){return t?t[n]||t.default||t:void 0}const eg={skipAnimations:!1,useManualTiming:!1},K3=t=>t!==null;function uf(t,{repeat:n,repeatType:a="loop"},s){const l=t.filter(K3),u=n&&a!=="loop"&&n%2===1?0:l.length-1;return!u||s===void 0?l[u]:s}const Qt=t=>t;function Z3(t){let n=new Set,a=new Set,s=!1,l=!1;const u=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function h(g){u.has(g)&&(m.schedule(g),t()),g(f)}const m={schedule:(g,p=!1,y=!1)=>{const C=y&&s?n:a;return p&&u.add(g),C.has(g)||C.add(g),g},cancel:g=>{a.delete(g),u.delete(g)},process:g=>{if(f=g,s){l=!0;return}s=!0,[n,a]=[a,n],a.clear(),n.forEach(h),s=!1,l&&(l=!1,m.process(g))}};return m}const yc=["read","resolveKeyframes","update","preRender","render","postRender"],W3=40;function D2(t,n){let a=!1,s=!0;const l={delta:0,timestamp:0,isProcessing:!1},u=()=>a=!0,f=yc.reduce((E,M)=>(E[M]=Z3(u),E),{}),{read:h,resolveKeyframes:m,update:g,preRender:p,render:y,postRender:b}=f,C=()=>{const E=performance.now();a=!1,l.delta=s?1e3/60:Math.max(Math.min(E-l.timestamp,W3),1),l.timestamp=E,l.isProcessing=!0,h.process(l),m.process(l),g.process(l),p.process(l),y.process(l),b.process(l),l.isProcessing=!1,a&&n&&(s=!1,t(C))},x=()=>{a=!0,s=!0,l.isProcessing||t(C)};return{schedule:yc.reduce((E,M)=>{const w=f[M];return E[M]=(O,D=!1,B=!1)=>(a||x(),w.schedule(O,D,B)),E},{}),cancel:E=>{for(let M=0;M<yc.length;M++)f[yc[M]].cancel(E)},state:l,steps:f}}const{schedule:Qe,cancel:$a,state:Ft,steps:Th}=D2(typeof requestAnimationFrame<"u"?requestAnimationFrame:Qt,!0),z2=(t,n,a)=>(((1-3*a+3*n)*t+(3*a-6*n))*t+3*n)*t,Q3=1e-7,$3=12;function J3(t,n,a,s,l){let u,f,h=0;do f=n+(a-n)/2,u=z2(f,s,l)-t,u>0?a=f:n=f;while(Math.abs(u)>Q3&&++h<$3);return f}function Ml(t,n,a,s){if(t===n&&a===s)return Qt;const l=u=>J3(u,0,1,t,a);return u=>u===0||u===1?u:z2(l(u),n,s)}const N2=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,P2=t=>n=>1-t(1-n),R2=Ml(.33,1.53,.69,.99),tg=P2(R2),L2=N2(tg),V2=t=>(t*=2)<1?.5*tg(t):.5*(2-Math.pow(2,-10*(t-1))),ng=t=>1-Math.sin(Math.acos(t)),B2=P2(ng),U2=N2(ng),I2=t=>/^0[^.\s]+$/u.test(t);function e5(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||I2(t):!0}let H2=Qt;const F2=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),G2=t=>n=>typeof n=="string"&&n.startsWith(t),Y2=G2("--"),t5=G2("var(--"),ig=t=>t5(t)?n5.test(t.split("/*")[0].trim()):!1,n5=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,i5=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function a5(t){const n=i5.exec(t);if(!n)return[,];const[,a,s,l]=n;return[`--${a??s}`,l]}function X2(t,n,a=1){const[s,l]=a5(t);if(!s)return;const u=window.getComputedStyle(n).getPropertyValue(s);if(u){const f=u.trim();return F2(f)?parseFloat(f):f}return ig(l)?X2(l,n,a+1):l}const Ja=(t,n,a)=>a>n?n:a<t?t:a,Hs={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},kl={...Hs,transform:t=>Ja(0,1,t)},bc={...Hs,default:1},Dl=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Ga=Dl("deg"),Ti=Dl("%"),Se=Dl("px"),r5=Dl("vh"),s5=Dl("vw"),e1={...Ti,parse:t=>Ti.parse(t)/100,transform:t=>Ti.transform(t*100)},o5=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),t1=t=>t===Hs||t===Se,n1=(t,n)=>parseFloat(t.split(", ")[n]),i1=(t,n)=>(a,{transform:s})=>{if(s==="none"||!s)return 0;const l=s.match(/^matrix3d\((.+)\)$/u);if(l)return n1(l[1],n);{const u=s.match(/^matrix\((.+)\)$/u);return u?n1(u[1],t):0}},l5=new Set(["x","y","z"]),u5=Ol.filter(t=>!l5.has(t));function c5(t){const n=[];return u5.forEach(a=>{const s=t.getValue(a);s!==void 0&&(n.push([a,s.get()]),s.set(a.startsWith("scale")?1:0))}),n}const Vs={width:({x:t},{paddingLeft:n="0",paddingRight:a="0"})=>t.max-t.min-parseFloat(n)-parseFloat(a),height:({y:t},{paddingTop:n="0",paddingBottom:a="0"})=>t.max-t.min-parseFloat(n)-parseFloat(a),top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:i1(4,13),y:i1(5,14)};Vs.translateX=Vs.x;Vs.translateY=Vs.y;const q2=t=>n=>n.test(t),f5={test:t=>t==="auto",parse:t=>t},K2=[Hs,Se,Ti,Ga,s5,r5,f5],a1=t=>K2.find(q2(t)),Rr=new Set;let fm=!1,dm=!1;function Z2(){if(dm){const t=Array.from(Rr).filter(s=>s.needsMeasurement),n=new Set(t.map(s=>s.element)),a=new Map;n.forEach(s=>{const l=c5(s);l.length&&(a.set(s,l),s.render())}),t.forEach(s=>s.measureInitialState()),n.forEach(s=>{s.render();const l=a.get(s);l&&l.forEach(([u,f])=>{var h;(h=s.getValue(u))===null||h===void 0||h.set(f)})}),t.forEach(s=>s.measureEndState()),t.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}dm=!1,fm=!1,Rr.forEach(t=>t.complete()),Rr.clear()}function W2(){Rr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(dm=!0)})}function d5(){W2(),Z2()}class ag{constructor(n,a,s,l,u,f=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...n],this.onComplete=a,this.name=s,this.motionValue=l,this.element=u,this.isAsync=f}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Rr.add(this),fm||(fm=!0,Qe.read(W2),Qe.resolveKeyframes(Z2))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:a,element:s,motionValue:l}=this;for(let u=0;u<n.length;u++)if(n[u]===null)if(u===0){const f=l==null?void 0:l.get(),h=n[n.length-1];if(f!==void 0)n[0]=f;else if(s&&a){const m=s.readValue(a,h);m!=null&&(n[0]=m)}n[0]===void 0&&(n[0]=h),l&&f===void 0&&l.set(n[0])}else n[u]=n[u-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Rr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Rr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const pl=t=>Math.round(t*1e5)/1e5,rg=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function h5(t){return t==null}const m5=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,sg=(t,n)=>a=>!!(typeof a=="string"&&m5.test(a)&&a.startsWith(t)||n&&!h5(a)&&Object.prototype.hasOwnProperty.call(a,n)),Q2=(t,n,a)=>s=>{if(typeof s!="string")return s;const[l,u,f,h]=s.match(rg);return{[t]:parseFloat(l),[n]:parseFloat(u),[a]:parseFloat(f),alpha:h!==void 0?parseFloat(h):1}},g5=t=>Ja(0,255,t),Ah={...Hs,transform:t=>Math.round(g5(t))},Dr={test:sg("rgb","red"),parse:Q2("red","green","blue"),transform:({red:t,green:n,blue:a,alpha:s=1})=>"rgba("+Ah.transform(t)+", "+Ah.transform(n)+", "+Ah.transform(a)+", "+pl(kl.transform(s))+")"};function p5(t){let n="",a="",s="",l="";return t.length>5?(n=t.substring(1,3),a=t.substring(3,5),s=t.substring(5,7),l=t.substring(7,9)):(n=t.substring(1,2),a=t.substring(2,3),s=t.substring(3,4),l=t.substring(4,5),n+=n,a+=a,s+=s,l+=l),{red:parseInt(n,16),green:parseInt(a,16),blue:parseInt(s,16),alpha:l?parseInt(l,16)/255:1}}const hm={test:sg("#"),parse:p5,transform:Dr.transform},Ds={test:sg("hsl","hue"),parse:Q2("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:a,alpha:s=1})=>"hsla("+Math.round(t)+", "+Ti.transform(pl(n))+", "+Ti.transform(pl(a))+", "+pl(kl.transform(s))+")"},Zt={test:t=>Dr.test(t)||hm.test(t)||Ds.test(t),parse:t=>Dr.test(t)?Dr.parse(t):Ds.test(t)?Ds.parse(t):hm.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Dr.transform(t):Ds.transform(t)},v5=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function y5(t){var n,a;return isNaN(t)&&typeof t=="string"&&(((n=t.match(rg))===null||n===void 0?void 0:n.length)||0)+(((a=t.match(v5))===null||a===void 0?void 0:a.length)||0)>0}const $2="number",J2="color",b5="var",_5="var(",r1="${}",S5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function xl(t){const n=t.toString(),a=[],s={color:[],number:[],var:[]},l=[];let u=0;const h=n.replace(S5,m=>(Zt.test(m)?(s.color.push(u),l.push(J2),a.push(Zt.parse(m))):m.startsWith(_5)?(s.var.push(u),l.push(b5),a.push(m)):(s.number.push(u),l.push($2),a.push(parseFloat(m))),++u,r1)).split(r1);return{values:a,split:h,indexes:s,types:l}}function eb(t){return xl(t).values}function tb(t){const{split:n,types:a}=xl(t),s=n.length;return l=>{let u="";for(let f=0;f<s;f++)if(u+=n[f],l[f]!==void 0){const h=a[f];h===$2?u+=pl(l[f]):h===J2?u+=Zt.transform(l[f]):u+=l[f]}return u}}const w5=t=>typeof t=="number"?0:t;function k5(t){const n=eb(t);return tb(t)(n.map(w5))}const er={test:y5,parse:eb,createTransformer:tb,getAnimatableNone:k5},x5=new Set(["brightness","contrast","saturate","opacity"]);function C5(t){const[n,a]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[s]=a.match(rg)||[];if(!s)return t;const l=a.replace(s,"");let u=x5.has(n)?1:0;return s!==a&&(u*=100),n+"("+u+l+")"}const j5=/\b([a-z-]*)\(.*?\)/gu,mm={...er,getAnimatableNone:t=>{const n=t.match(j5);return n?n.map(C5).join(" "):t}},T5={borderWidth:Se,borderTopWidth:Se,borderRightWidth:Se,borderBottomWidth:Se,borderLeftWidth:Se,borderRadius:Se,radius:Se,borderTopLeftRadius:Se,borderTopRightRadius:Se,borderBottomRightRadius:Se,borderBottomLeftRadius:Se,width:Se,maxWidth:Se,height:Se,maxHeight:Se,top:Se,right:Se,bottom:Se,left:Se,padding:Se,paddingTop:Se,paddingRight:Se,paddingBottom:Se,paddingLeft:Se,margin:Se,marginTop:Se,marginRight:Se,marginBottom:Se,marginLeft:Se,backgroundPositionX:Se,backgroundPositionY:Se},A5={rotate:Ga,rotateX:Ga,rotateY:Ga,rotateZ:Ga,scale:bc,scaleX:bc,scaleY:bc,scaleZ:bc,skew:Ga,skewX:Ga,skewY:Ga,distance:Se,translateX:Se,translateY:Se,translateZ:Se,x:Se,y:Se,z:Se,perspective:Se,transformPerspective:Se,opacity:kl,originX:e1,originY:e1,originZ:Se},s1={...Hs,transform:Math.round},og={...T5,...A5,zIndex:s1,size:Se,fillOpacity:kl,strokeOpacity:kl,numOctaves:s1},E5={...og,color:Zt,backgroundColor:Zt,outlineColor:Zt,fill:Zt,stroke:Zt,borderColor:Zt,borderTopColor:Zt,borderRightColor:Zt,borderBottomColor:Zt,borderLeftColor:Zt,filter:mm,WebkitFilter:mm},lg=t=>E5[t];function nb(t,n){let a=lg(t);return a!==mm&&(a=er),a.getAnimatableNone?a.getAnimatableNone(n):void 0}const O5=new Set(["auto","none","0"]);function M5(t,n,a){let s=0,l;for(;s<t.length&&!l;){const u=t[s];typeof u=="string"&&!O5.has(u)&&xl(u).values.length&&(l=t[s]),s++}if(l&&a)for(const u of n)t[u]=nb(a,l)}class ib extends ag{constructor(n,a,s,l,u){super(n,a,s,l,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:a,name:s}=this;if(!a||!a.current)return;super.readKeyframes();for(let m=0;m<n.length;m++){let g=n[m];if(typeof g=="string"&&(g=g.trim(),ig(g))){const p=X2(g,a.current);p!==void 0&&(n[m]=p),m===n.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!o5.has(s)||n.length!==2)return;const[l,u]=n,f=a1(l),h=a1(u);if(f!==h)if(t1(f)&&t1(h))for(let m=0;m<n.length;m++){const g=n[m];typeof g=="string"&&(n[m]=parseFloat(g))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:a}=this,s=[];for(let l=0;l<n.length;l++)e5(n[l])&&s.push(l);s.length&&M5(n,s,a)}measureInitialState(){const{element:n,unresolvedKeyframes:a,name:s}=this;if(!n||!n.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Vs[s](n.measureViewportBox(),window.getComputedStyle(n.current)),a[0]=this.measuredOrigin;const l=a[a.length-1];l!==void 0&&n.getValue(s,l).jump(l,!1)}measureEndState(){var n;const{element:a,name:s,unresolvedKeyframes:l}=this;if(!a||!a.current)return;const u=a.getValue(s);u&&u.jump(this.measuredOrigin,!1);const f=l.length-1,h=l[f];l[f]=Vs[s](a.measureViewportBox(),window.getComputedStyle(a.current)),h!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=h),!((n=this.removedTransforms)===null||n===void 0)&&n.length&&this.removedTransforms.forEach(([m,g])=>{a.getValue(m).set(g)}),this.resolveNoneKeyframes()}}function ug(t){return typeof t=="function"}let Rc;function D5(){Rc=void 0}const Ai={now:()=>(Rc===void 0&&Ai.set(Ft.isProcessing||eg.useManualTiming?Ft.timestamp:performance.now()),Rc),set:t=>{Rc=t,queueMicrotask(D5)}},o1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(er.test(t)||t==="0")&&!t.startsWith("url("));function z5(t){const n=t[0];if(t.length===1)return!0;for(let a=0;a<t.length;a++)if(t[a]!==n)return!0}function N5(t,n,a,s){const l=t[0];if(l===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],f=o1(l,n),h=o1(u,n);return!f||!h?!1:z5(t)||(a==="spring"||ug(a))&&s}const P5=40;class ab{constructor({autoplay:n=!0,delay:a=0,type:s="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:f="loop",...h}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ai.now(),this.options={autoplay:n,delay:a,type:s,repeat:l,repeatDelay:u,repeatType:f,...h},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>P5?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&d5(),this._resolved}onKeyframesResolved(n,a){this.resolvedAt=Ai.now(),this.hasAttemptedResolve=!0;const{name:s,type:l,velocity:u,delay:f,onComplete:h,onUpdate:m,isGenerator:g}=this.options;if(!g&&!N5(n,s,l,u))if(f)this.options.duration=0;else{m==null||m(uf(n,this.options,a)),h==null||h(),this.resolveFinishedPromise();return}const p=this.initPlayback(n,a);p!==!1&&(this._resolved={keyframes:n,finalKeyframe:a,...p},this.onPostResolved())}onPostResolved(){}then(n,a){return this.currentFinishedPromise.then(n,a)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(n=>{this.resolveFinishedPromise=n})}}function rb(t,n){return n?t*(1e3/n):0}const R5=5;function sb(t,n,a){const s=Math.max(n-R5,0);return rb(a-t(s),n-s)}const Eh=.001,L5=.01,V5=10,B5=.05,U5=1;function I5({duration:t=800,bounce:n=.25,velocity:a=0,mass:s=1}){let l,u,f=1-n;f=Ja(B5,U5,f),t=Ja(L5,V5,sa(t)),f<1?(l=g=>{const p=g*f,y=p*t,b=p-a,C=gm(g,f),x=Math.exp(-y);return Eh-b/C*x},u=g=>{const y=g*f*t,b=y*a+a,C=Math.pow(f,2)*Math.pow(g,2)*t,x=Math.exp(-y),T=gm(Math.pow(g,2),f);return(-l(g)+Eh>0?-1:1)*((b-C)*x)/T}):(l=g=>{const p=Math.exp(-g*t),y=(g-a)*t+1;return-Eh+p*y},u=g=>{const p=Math.exp(-g*t),y=(a-g)*(t*t);return p*y});const h=5/t,m=F5(l,u,h);if(t=ra(t),isNaN(m))return{stiffness:100,damping:10,duration:t};{const g=Math.pow(m,2)*s;return{stiffness:g,damping:f*2*Math.sqrt(s*g),duration:t}}}const H5=12;function F5(t,n,a){let s=a;for(let l=1;l<H5;l++)s=s-t(s)/n(s);return s}function gm(t,n){return t*Math.sqrt(1-n*n)}const G5=["duration","bounce"],Y5=["stiffness","damping","mass"];function l1(t,n){return n.some(a=>t[a]!==void 0)}function X5(t){let n={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!l1(t,Y5)&&l1(t,G5)){const a=I5(t);n={...n,...a,mass:1},n.isResolvedFromDuration=!0}return n}function ob({keyframes:t,restDelta:n,restSpeed:a,...s}){const l=t[0],u=t[t.length-1],f={done:!1,value:l},{stiffness:h,damping:m,mass:g,duration:p,velocity:y,isResolvedFromDuration:b}=X5({...s,velocity:-sa(s.velocity||0)}),C=y||0,x=m/(2*Math.sqrt(h*g)),T=u-l,N=sa(Math.sqrt(h/g)),E=Math.abs(T)<5;a||(a=E?.01:2),n||(n=E?.005:.5);let M;if(x<1){const w=gm(N,x);M=O=>{const D=Math.exp(-x*N*O);return u-D*((C+x*N*T)/w*Math.sin(w*O)+T*Math.cos(w*O))}}else if(x===1)M=w=>u-Math.exp(-N*w)*(T+(C+N*T)*w);else{const w=N*Math.sqrt(x*x-1);M=O=>{const D=Math.exp(-x*N*O),B=Math.min(w*O,300);return u-D*((C+x*N*T)*Math.sinh(B)+w*T*Math.cosh(B))/w}}return{calculatedDuration:b&&p||null,next:w=>{const O=M(w);if(b)f.done=w>=p;else{let D=0;x<1&&(D=w===0?ra(C):sb(M,w,O));const B=Math.abs(D)<=a,U=Math.abs(u-O)<=n;f.done=B&&U}return f.value=f.done?u:O,f}}}function u1({keyframes:t,velocity:n=0,power:a=.8,timeConstant:s=325,bounceDamping:l=10,bounceStiffness:u=500,modifyTarget:f,min:h,max:m,restDelta:g=.5,restSpeed:p}){const y=t[0],b={done:!1,value:y},C=F=>h!==void 0&&F<h||m!==void 0&&F>m,x=F=>h===void 0?m:m===void 0||Math.abs(h-F)<Math.abs(m-F)?h:m;let T=a*n;const N=y+T,E=f===void 0?N:f(N);E!==N&&(T=E-y);const M=F=>-T*Math.exp(-F/s),w=F=>E+M(F),O=F=>{const Z=M(F),ie=w(F);b.done=Math.abs(Z)<=g,b.value=b.done?E:ie};let D,B;const U=F=>{C(b.value)&&(D=F,B=ob({keyframes:[b.value,x(b.value)],velocity:sb(w,F,b.value),damping:l,stiffness:u,restDelta:g,restSpeed:p}))};return U(0),{calculatedDuration:null,next:F=>{let Z=!1;return!B&&D===void 0&&(Z=!0,O(F),U(F)),D!==void 0&&F>=D?B.next(F-D):(!Z&&O(F),b)}}}const q5=Ml(.42,0,1,1),K5=Ml(0,0,.58,1),lb=Ml(.42,0,.58,1),Z5=t=>Array.isArray(t)&&typeof t[0]!="number",cg=t=>Array.isArray(t)&&typeof t[0]=="number",W5={linear:Qt,easeIn:q5,easeInOut:lb,easeOut:K5,circIn:ng,circInOut:U2,circOut:B2,backIn:tg,backInOut:L2,backOut:R2,anticipate:V2},c1=t=>{if(cg(t)){H2(t.length===4);const[n,a,s,l]=t;return Ml(n,a,s,l)}else if(typeof t=="string")return W5[t];return t},Q5=(t,n)=>a=>n(t(a)),oa=(...t)=>t.reduce(Q5),Bs=(t,n,a)=>{const s=n-t;return s===0?1:(a-t)/s},lt=(t,n,a)=>t+(n-t)*a;function Oh(t,n,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(n-t)*6*a:a<1/2?n:a<2/3?t+(n-t)*(2/3-a)*6:t}function $5({hue:t,saturation:n,lightness:a,alpha:s}){t/=360,n/=100,a/=100;let l=0,u=0,f=0;if(!n)l=u=f=a;else{const h=a<.5?a*(1+n):a+n-a*n,m=2*a-h;l=Oh(m,h,t+1/3),u=Oh(m,h,t),f=Oh(m,h,t-1/3)}return{red:Math.round(l*255),green:Math.round(u*255),blue:Math.round(f*255),alpha:s}}function Fc(t,n){return a=>a>0?n:t}const Mh=(t,n,a)=>{const s=t*t,l=a*(n*n-s)+s;return l<0?0:Math.sqrt(l)},J5=[hm,Dr,Ds],e7=t=>J5.find(n=>n.test(t));function f1(t){const n=e7(t);if(!n)return!1;let a=n.parse(t);return n===Ds&&(a=$5(a)),a}const d1=(t,n)=>{const a=f1(t),s=f1(n);if(!a||!s)return Fc(t,n);const l={...a};return u=>(l.red=Mh(a.red,s.red,u),l.green=Mh(a.green,s.green,u),l.blue=Mh(a.blue,s.blue,u),l.alpha=lt(a.alpha,s.alpha,u),Dr.transform(l))},pm=new Set(["none","hidden"]);function t7(t,n){return pm.has(t)?a=>a<=0?t:n:a=>a>=1?n:t}function n7(t,n){return a=>lt(t,n,a)}function fg(t){return typeof t=="number"?n7:typeof t=="string"?ig(t)?Fc:Zt.test(t)?d1:r7:Array.isArray(t)?ub:typeof t=="object"?Zt.test(t)?d1:i7:Fc}function ub(t,n){const a=[...t],s=a.length,l=t.map((u,f)=>fg(u)(u,n[f]));return u=>{for(let f=0;f<s;f++)a[f]=l[f](u);return a}}function i7(t,n){const a={...t,...n},s={};for(const l in a)t[l]!==void 0&&n[l]!==void 0&&(s[l]=fg(t[l])(t[l],n[l]));return l=>{for(const u in s)a[u]=s[u](l);return a}}function a7(t,n){var a;const s=[],l={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const f=n.types[u],h=t.indexes[f][l[f]],m=(a=t.values[h])!==null&&a!==void 0?a:0;s[u]=m,l[f]++}return s}const r7=(t,n)=>{const a=er.createTransformer(n),s=xl(t),l=xl(n);return s.indexes.var.length===l.indexes.var.length&&s.indexes.color.length===l.indexes.color.length&&s.indexes.number.length>=l.indexes.number.length?pm.has(t)&&!l.values.length||pm.has(n)&&!s.values.length?t7(t,n):oa(ub(a7(s,l),l.values),a):Fc(t,n)};function cb(t,n,a){return typeof t=="number"&&typeof n=="number"&&typeof a=="number"?lt(t,n,a):fg(t)(t,n)}function s7(t,n,a){const s=[],l=a||cb,u=t.length-1;for(let f=0;f<u;f++){let h=l(t[f],t[f+1]);if(n){const m=Array.isArray(n)?n[f]||Qt:n;h=oa(m,h)}s.push(h)}return s}function o7(t,n,{clamp:a=!0,ease:s,mixer:l}={}){const u=t.length;if(H2(u===n.length),u===1)return()=>n[0];if(u===2&&t[0]===t[1])return()=>n[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const f=s7(n,s,l),h=f.length,m=g=>{let p=0;if(h>1)for(;p<t.length-2&&!(g<t[p+1]);p++);const y=Bs(t[p],t[p+1],g);return f[p](y)};return a?g=>m(Ja(t[0],t[u-1],g)):m}function l7(t,n){const a=t[t.length-1];for(let s=1;s<=n;s++){const l=Bs(0,n,s);t.push(lt(a,1,l))}}function u7(t){const n=[0];return l7(n,t.length-1),n}function c7(t,n){return t.map(a=>a*n)}function f7(t,n){return t.map(()=>n||lb).splice(0,t.length-1)}function Gc({duration:t=300,keyframes:n,times:a,ease:s="easeInOut"}){const l=Z5(s)?s.map(c1):c1(s),u={done:!1,value:n[0]},f=c7(a&&a.length===n.length?a:u7(n),t),h=o7(f,n,{ease:Array.isArray(l)?l:f7(n,l)});return{calculatedDuration:t,next:m=>(u.value=h(m),u.done=m>=t,u)}}const h1=2e4;function d7(t){let n=0;const a=50;let s=t.next(n);for(;!s.done&&n<h1;)n+=a,s=t.next(n);return n>=h1?1/0:n}const h7=t=>{const n=({timestamp:a})=>t(a);return{start:()=>Qe.update(n,!0),stop:()=>$a(n),now:()=>Ft.isProcessing?Ft.timestamp:Ai.now()}},m7={decay:u1,inertia:u1,tween:Gc,keyframes:Gc,spring:ob},g7=t=>t/100;class dg extends ab{constructor(n){super(n),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:m}=this.options;m&&m()};const{name:a,motionValue:s,element:l,keyframes:u}=this.options,f=(l==null?void 0:l.KeyframeResolver)||ag,h=(m,g)=>this.onKeyframesResolved(m,g);this.resolver=new f(u,h,a,s,l),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(n){const{type:a="keyframes",repeat:s=0,repeatDelay:l=0,repeatType:u,velocity:f=0}=this.options,h=ug(a)?a:m7[a]||Gc;let m,g;h!==Gc&&typeof n[0]!="number"&&(m=oa(g7,cb(n[0],n[1])),n=[0,100]);const p=h({...this.options,keyframes:n});u==="mirror"&&(g=h({...this.options,keyframes:[...n].reverse(),velocity:-f})),p.calculatedDuration===null&&(p.calculatedDuration=d7(p));const{calculatedDuration:y}=p,b=y+l,C=b*(s+1)-l;return{generator:p,mirroredGenerator:g,mapPercentToKeyframes:m,calculatedDuration:y,resolvedDuration:b,totalDuration:C}}onPostResolved(){const{autoplay:n=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!n?this.pause():this.state=this.pendingPlayState}tick(n,a=!1){const{resolved:s}=this;if(!s){const{keyframes:F}=this.options;return{done:!0,value:F[F.length-1]}}const{finalKeyframe:l,generator:u,mirroredGenerator:f,mapPercentToKeyframes:h,keyframes:m,calculatedDuration:g,totalDuration:p,resolvedDuration:y}=s;if(this.startTime===null)return u.next(0);const{delay:b,repeat:C,repeatType:x,repeatDelay:T,onUpdate:N}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-p/this.speed,this.startTime)),a?this.currentTime=n:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(n-this.startTime)*this.speed;const E=this.currentTime-b*(this.speed>=0?1:-1),M=this.speed>=0?E<0:E>p;this.currentTime=Math.max(E,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=p);let w=this.currentTime,O=u;if(C){const F=Math.min(this.currentTime,p)/y;let Z=Math.floor(F),ie=F%1;!ie&&F>=1&&(ie=1),ie===1&&Z--,Z=Math.min(Z,C+1),!!(Z%2)&&(x==="reverse"?(ie=1-ie,T&&(ie-=T/y)):x==="mirror"&&(O=f)),w=Ja(0,1,ie)*y}const D=M?{done:!1,value:m[0]}:O.next(w);h&&(D.value=h(D.value));let{done:B}=D;!M&&g!==null&&(B=this.speed>=0?this.currentTime>=p:this.currentTime<=0);const U=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&B);return U&&l!==void 0&&(D.value=uf(m,this.options,l)),N&&N(D.value),U&&this.finish(),D}get duration(){const{resolved:n}=this;return n?sa(n.calculatedDuration):0}get time(){return sa(this.currentTime)}set time(n){n=ra(n),this.currentTime=n,this.holdTime!==null||this.speed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.speed)}get speed(){return this.playbackSpeed}set speed(n){const a=this.playbackSpeed!==n;this.playbackSpeed=n,a&&(this.time=sa(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:n=h7,onPlay:a,startTime:s}=this.options;this.driver||(this.driver=n(u=>this.tick(u))),a&&a();const l=this.driver.now();this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=l):this.startTime=s??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var n;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(n=this.currentTime)!==null&&n!==void 0?n:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:n}=this.options;n&&n()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}}const p7=new Set(["opacity","clipPath","filter","transform"]),v7=10,y7=(t,n)=>{let a="";const s=Math.max(Math.round(n/v7),2);for(let l=0;l<s;l++)a+=t(Bs(0,s-1,l))+", ";return`linear(${a.substring(0,a.length-2)})`};function hg(t){let n;return()=>(n===void 0&&(n=t()),n)}const b7={linearEasing:void 0};function _7(t,n){const a=hg(t);return()=>{var s;return(s=b7[n])!==null&&s!==void 0?s:a()}}const Yc=_7(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function fb(t){return!!(typeof t=="function"&&Yc()||!t||typeof t=="string"&&(t in vm||Yc())||cg(t)||Array.isArray(t)&&t.every(fb))}const hl=([t,n,a,s])=>`cubic-bezier(${t}, ${n}, ${a}, ${s})`,vm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:hl([0,.65,.55,1]),circOut:hl([.55,0,1,.45]),backIn:hl([.31,.01,.66,-.59]),backOut:hl([.33,1.53,.69,.99])};function db(t,n){if(t)return typeof t=="function"&&Yc()?y7(t,n):cg(t)?hl(t):Array.isArray(t)?t.map(a=>db(a,n)||vm.easeOut):vm[t]}function S7(t,n,a,{delay:s=0,duration:l=300,repeat:u=0,repeatType:f="loop",ease:h="easeInOut",times:m}={}){const g={[n]:a};m&&(g.offset=m);const p=db(h,l);return Array.isArray(p)&&(g.easing=p),t.animate(g,{delay:s,duration:l,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:u+1,direction:f==="reverse"?"alternate":"normal"})}function m1(t,n){t.timeline=n,t.onfinish=null}const w7=hg(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Xc=10,k7=2e4;function x7(t){return ug(t.type)||t.type==="spring"||!fb(t.ease)}function C7(t,n){const a=new dg({...n,keyframes:t,repeat:0,delay:0,isGenerator:!0});let s={done:!1,value:t[0]};const l=[];let u=0;for(;!s.done&&u<k7;)s=a.sample(u),l.push(s.value),u+=Xc;return{times:void 0,keyframes:l,duration:u-Xc,ease:"linear"}}const hb={anticipate:V2,backInOut:L2,circInOut:U2};function j7(t){return t in hb}class g1 extends ab{constructor(n){super(n);const{name:a,motionValue:s,element:l,keyframes:u}=this.options;this.resolver=new ib(u,(f,h)=>this.onKeyframesResolved(f,h),a,s,l),this.resolver.scheduleResolve()}initPlayback(n,a){var s;let{duration:l=300,times:u,ease:f,type:h,motionValue:m,name:g,startTime:p}=this.options;if(!(!((s=m.owner)===null||s===void 0)&&s.current))return!1;if(typeof f=="string"&&Yc()&&j7(f)&&(f=hb[f]),x7(this.options)){const{onComplete:b,onUpdate:C,motionValue:x,element:T,...N}=this.options,E=C7(n,N);n=E.keyframes,n.length===1&&(n[1]=n[0]),l=E.duration,u=E.times,f=E.ease,h="keyframes"}const y=S7(m.owner.current,g,n,{...this.options,duration:l,times:u,ease:f});return y.startTime=p??this.calcStartTime(),this.pendingTimeline?(m1(y,this.pendingTimeline),this.pendingTimeline=void 0):y.onfinish=()=>{const{onComplete:b}=this.options;m.set(uf(n,this.options,a)),b&&b(),this.cancel(),this.resolveFinishedPromise()},{animation:y,duration:l,times:u,type:h,ease:f,keyframes:n}}get duration(){const{resolved:n}=this;if(!n)return 0;const{duration:a}=n;return sa(a)}get time(){const{resolved:n}=this;if(!n)return 0;const{animation:a}=n;return sa(a.currentTime||0)}set time(n){const{resolved:a}=this;if(!a)return;const{animation:s}=a;s.currentTime=ra(n)}get speed(){const{resolved:n}=this;if(!n)return 1;const{animation:a}=n;return a.playbackRate}set speed(n){const{resolved:a}=this;if(!a)return;const{animation:s}=a;s.playbackRate=n}get state(){const{resolved:n}=this;if(!n)return"idle";const{animation:a}=n;return a.playState}get startTime(){const{resolved:n}=this;if(!n)return null;const{animation:a}=n;return a.startTime}attachTimeline(n){if(!this._resolved)this.pendingTimeline=n;else{const{resolved:a}=this;if(!a)return Qt;const{animation:s}=a;m1(s,n)}return Qt}play(){if(this.isStopped)return;const{resolved:n}=this;if(!n)return;const{animation:a}=n;a.playState==="finished"&&this.updateFinishedPromise(),a.play()}pause(){const{resolved:n}=this;if(!n)return;const{animation:a}=n;a.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:n}=this;if(!n)return;const{animation:a,keyframes:s,duration:l,type:u,ease:f,times:h}=n;if(a.playState==="idle"||a.playState==="finished")return;if(this.time){const{motionValue:g,onUpdate:p,onComplete:y,element:b,...C}=this.options,x=new dg({...C,keyframes:s,duration:l,type:u,ease:f,times:h,isGenerator:!0}),T=ra(this.time);g.setWithVelocity(x.sample(T-Xc).value,x.sample(T).value,Xc)}const{onStop:m}=this.options;m&&m(),this.cancel()}complete(){const{resolved:n}=this;n&&n.animation.finish()}cancel(){const{resolved:n}=this;n&&n.animation.cancel()}static supports(n){const{motionValue:a,name:s,repeatDelay:l,repeatType:u,damping:f,type:h}=n;return w7()&&s&&p7.has(s)&&a&&a.owner&&a.owner.current instanceof HTMLElement&&!a.owner.getProps().onUpdate&&!l&&u!=="mirror"&&f!==0&&h!=="inertia"}}const T7=hg(()=>window.ScrollTimeline!==void 0);class A7{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}then(n,a){return Promise.all(this.animations).then(n).catch(a)}getAll(n){return this.animations[0][n]}setAll(n,a){for(let s=0;s<this.animations.length;s++)this.animations[s][n]=a}attachTimeline(n,a){const s=this.animations.map(l=>T7()&&l.attachTimeline?l.attachTimeline(n):a(l));return()=>{s.forEach((l,u)=>{l&&l(),this.animations[u].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get startTime(){return this.getAll("startTime")}get duration(){let n=0;for(let a=0;a<this.animations.length;a++)n=Math.max(n,this.animations[a].duration);return n}runAll(n){this.animations.forEach(a=>a[n]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function E7({when:t,delay:n,delayChildren:a,staggerChildren:s,staggerDirection:l,repeat:u,repeatType:f,repeatDelay:h,from:m,elapsed:g,...p}){return!!Object.keys(p).length}const mg=(t,n,a,s={},l,u)=>f=>{const h=Jm(s,t)||{},m=h.delay||s.delay||0;let{elapsed:g=0}=s;g=g-ra(m);let p={keyframes:Array.isArray(a)?a:[null,a],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-g,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{f(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:l};E7(h)||(p={...p,...q3(t,p)}),p.duration&&(p.duration=ra(p.duration)),p.repeatDelay&&(p.repeatDelay=ra(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let y=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(p.duration=0,p.delay===0&&(y=!0)),eg.skipAnimations&&(y=!0,p.duration=0,p.delay=0),y&&!u&&n.get()!==void 0){const b=uf(p.keyframes,h);if(b!==void 0)return Qe.update(()=>{p.onUpdate(b),p.onComplete()}),new A7([])}return!u&&g1.supports(p)?new g1(p):new dg(p)},O7=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),M7=t=>cm(t)?t[t.length-1]||0:t;function gg(t,n){t.indexOf(n)===-1&&t.push(n)}function pg(t,n){const a=t.indexOf(n);a>-1&&t.splice(a,1)}class vg{constructor(){this.subscriptions=[]}add(n){return gg(this.subscriptions,n),()=>pg(this.subscriptions,n)}notify(n,a,s){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](n,a,s);else for(let u=0;u<l;u++){const f=this.subscriptions[u];f&&f(n,a,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const p1=30,D7=t=>!isNaN(parseFloat(t));class z7{constructor(n,a={}){this.version="11.11.17",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,l=!0)=>{const u=Ai.now();this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),l&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(n),this.owner=a.owner}setCurrent(n){this.current=n,this.updatedAt=Ai.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=D7(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,a){this.events[n]||(this.events[n]=new vg);const s=this.events[n].add(a);return n==="change"?()=>{s(),Qe.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,a){this.passiveEffect=n,this.stopPassiveEffect=a}set(n,a=!0){!a||!this.passiveEffect?this.updateAndNotify(n,a):this.passiveEffect(n,this.updateAndNotify)}setWithVelocity(n,a,s){this.set(a),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-s}jump(n,a=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,a&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const n=Ai.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>p1)return 0;const a=Math.min(this.updatedAt-this.prevUpdatedAt,p1);return rb(parseFloat(this.current)-parseFloat(this.prevFrameValue),a)}start(n){return this.stop(),new Promise(a=>{this.hasAnimated=!0,this.animation=n(a),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Cl(t,n){return new z7(t,n)}function N7(t,n,a){t.hasValue(n)?t.getValue(n).set(a):t.addValue(n,Cl(a))}function P7(t,n){const a=lf(t,n);let{transitionEnd:s={},transition:l={},...u}=a||{};u={...u,...s};for(const f in u){const h=M7(u[f]);N7(t,f,h)}}const yg=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),R7="framerAppearId",mb="data-"+yg(R7);function gb(t){return t.props[mb]}const Wt=t=>!!(t&&t.getVelocity);function L7(t){return!!(Wt(t)&&t.add)}function ym(t,n){const a=t.getValue("willChange");if(L7(a))return a.add(n)}function V7({protectedKeys:t,needsAnimating:n},a){const s=t.hasOwnProperty(a)&&n[a]!==!0;return n[a]=!1,s}function pb(t,n,{delay:a=0,transitionOverride:s,type:l}={}){var u;let{transition:f=t.getDefaultTransition(),transitionEnd:h,...m}=n;s&&(f=s);const g=[],p=l&&t.animationState&&t.animationState.getState()[l];for(const y in m){const b=t.getValue(y,(u=t.latestValues[y])!==null&&u!==void 0?u:null),C=m[y];if(C===void 0||p&&V7(p,y))continue;const x={delay:a,...Jm(f||{},y)};let T=!1;if(window.MotionHandoffAnimation){const E=gb(t);if(E){const M=window.MotionHandoffAnimation(E,y,Qe);M!==null&&(x.startTime=M,T=!0)}}ym(t,y),b.start(mg(y,b,C,t.shouldReduceMotion&&Hr.has(y)?{type:!1}:x,t,T));const N=b.animation;N&&g.push(N)}return h&&Promise.all(g).then(()=>{Qe.update(()=>{h&&P7(t,h)})}),g}function bm(t,n,a={}){var s;const l=lf(t,n,a.type==="exit"?(s=t.presenceContext)===null||s===void 0?void 0:s.custom:void 0);let{transition:u=t.getDefaultTransition()||{}}=l||{};a.transitionOverride&&(u=a.transitionOverride);const f=l?()=>Promise.all(pb(t,l,a)):()=>Promise.resolve(),h=t.variantChildren&&t.variantChildren.size?(g=0)=>{const{delayChildren:p=0,staggerChildren:y,staggerDirection:b}=u;return B7(t,n,p+g,y,b,a)}:()=>Promise.resolve(),{when:m}=u;if(m){const[g,p]=m==="beforeChildren"?[f,h]:[h,f];return g().then(()=>p())}else return Promise.all([f(),h(a.delay)])}function B7(t,n,a=0,s=0,l=1,u){const f=[],h=(t.variantChildren.size-1)*s,m=l===1?(g=0)=>g*s:(g=0)=>h-g*s;return Array.from(t.variantChildren).sort(U7).forEach((g,p)=>{g.notify("AnimationStart",n),f.push(bm(g,n,{...u,delay:a+m(p)}).then(()=>g.notify("AnimationComplete",n)))}),Promise.all(f)}function U7(t,n){return t.sortNodePosition(n)}function I7(t,n,a={}){t.notify("AnimationStart",n);let s;if(Array.isArray(n)){const l=n.map(u=>bm(t,u,a));s=Promise.all(l)}else if(typeof n=="string")s=bm(t,n,a);else{const l=typeof n=="function"?lf(t,n,a.custom):n;s=Promise.all(pb(t,l,a))}return s.then(()=>{t.notify("AnimationComplete",n)})}const H7=$m.length;function vb(t){if(!t)return;if(!t.isControllingVariants){const a=t.parent?vb(t.parent)||{}:{};return t.props.initial!==void 0&&(a.initial=t.props.initial),a}const n={};for(let a=0;a<H7;a++){const s=$m[a],l=t.props[s];(wl(l)||l===!1)&&(n[s]=l)}return n}const F7=[...Qm].reverse(),G7=Qm.length;function Y7(t){return n=>Promise.all(n.map(({animation:a,options:s})=>I7(t,a,s)))}function X7(t){let n=Y7(t),a=v1(),s=!0;const l=m=>(g,p)=>{var y;const b=lf(t,p,m==="exit"?(y=t.presenceContext)===null||y===void 0?void 0:y.custom:void 0);if(b){const{transition:C,transitionEnd:x,...T}=b;g={...g,...T,...x}}return g};function u(m){n=m(t)}function f(m){const{props:g}=t,p=vb(t.parent)||{},y=[],b=new Set;let C={},x=1/0;for(let N=0;N<G7;N++){const E=F7[N],M=a[E],w=g[E]!==void 0?g[E]:p[E],O=wl(w),D=E===m?M.isActive:null;D===!1&&(x=N);let B=w===p[E]&&w!==g[E]&&O;if(B&&s&&t.manuallyAnimateOnMount&&(B=!1),M.protectedKeys={...C},!M.isActive&&D===null||!w&&!M.prevProp||of(w)||typeof w=="boolean")continue;const U=q7(M.prevProp,w);let F=U||E===m&&M.isActive&&!B&&O||N>x&&O,Z=!1;const ie=Array.isArray(w)?w:[w];let ae=ie.reduce(l(E),{});D===!1&&(ae={});const{prevResolvedValues:oe={}}=M,ce={...oe,...ae},Ae=$=>{F=!0,b.has($)&&(Z=!0,b.delete($)),M.needsAnimating[$]=!0;const re=t.getValue($);re&&(re.liveStyle=!1)};for(const $ in ce){const re=ae[$],ve=oe[$];if(C.hasOwnProperty($))continue;let ye=!1;cm(re)&&cm(ve)?ye=!M2(re,ve):ye=re!==ve,ye?re!=null?Ae($):b.add($):re!==void 0&&b.has($)?Ae($):M.protectedKeys[$]=!0}M.prevProp=w,M.prevResolvedValues=ae,M.isActive&&(C={...C,...ae}),s&&t.blockInitialAnimation&&(F=!1),F&&(!(B&&U)||Z)&&y.push(...ie.map($=>({animation:$,options:{type:E}})))}if(b.size){const N={};b.forEach(E=>{const M=t.getBaseTarget(E),w=t.getValue(E);w&&(w.liveStyle=!0),N[E]=M??null}),y.push({animation:N})}let T=!!y.length;return s&&(g.initial===!1||g.initial===g.animate)&&!t.manuallyAnimateOnMount&&(T=!1),s=!1,T?n(y):Promise.resolve()}function h(m,g){var p;if(a[m].isActive===g)return Promise.resolve();(p=t.variantChildren)===null||p===void 0||p.forEach(b=>{var C;return(C=b.animationState)===null||C===void 0?void 0:C.setActive(m,g)}),a[m].isActive=g;const y=f(m);for(const b in a)a[b].protectedKeys={};return y}return{animateChanges:f,setActive:h,setAnimateFunction:u,getState:()=>a,reset:()=>{a=v1(),s=!0}}}function q7(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!M2(n,t):!1}function Er(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function v1(){return{animate:Er(!0),whileInView:Er(),whileHover:Er(),whileTap:Er(),whileDrag:Er(),whileFocus:Er(),exit:Er()}}class tr{constructor(n){this.isMounted=!1,this.node=n}update(){}}class K7 extends tr{constructor(n){super(n),n.animationState||(n.animationState=X7(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();of(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:a}=this.node.prevProps||{};n!==a&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)===null||n===void 0||n.call(this)}}let Z7=0;class W7 extends tr{constructor(){super(...arguments),this.id=Z7++}update(){if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:a}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===s)return;const l=this.node.animationState.setActive("exit",!n);a&&!n&&l.then(()=>a(this.id))}mount(){const{register:n}=this.node.presenceContext||{};n&&(this.unmount=n(this.id))}unmount(){}}const Q7={animation:{Feature:K7},exit:{Feature:W7}},yb=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function cf(t,n="page"){return{point:{x:t[`${n}X`],y:t[`${n}Y`]}}}const $7=t=>n=>yb(n)&&t(n,cf(n));function aa(t,n,a,s={passive:!0}){return t.addEventListener(n,a,s),()=>t.removeEventListener(n,a)}function la(t,n,a,s){return aa(t,n,$7(a),s)}const y1=(t,n)=>Math.abs(t-n);function J7(t,n){const a=y1(t.x,n.x),s=y1(t.y,n.y);return Math.sqrt(a**2+s**2)}class bb{constructor(n,a,{transformPagePoint:s,contextWindow:l,dragSnapToOrigin:u=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=zh(this.lastMoveEventInfo,this.history),b=this.startEvent!==null,C=J7(y.offset,{x:0,y:0})>=3;if(!b&&!C)return;const{point:x}=y,{timestamp:T}=Ft;this.history.push({...x,timestamp:T});const{onStart:N,onMove:E}=this.handlers;b||(N&&N(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),E&&E(this.lastMoveEvent,y)},this.handlePointerMove=(y,b)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=Dh(b,this.transformPagePoint),Qe.update(this.updatePoint,!0)},this.handlePointerUp=(y,b)=>{this.end();const{onEnd:C,onSessionEnd:x,resumeAnimation:T}=this.handlers;if(this.dragSnapToOrigin&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const N=zh(y.type==="pointercancel"?this.lastMoveEventInfo:Dh(b,this.transformPagePoint),this.history);this.startEvent&&C&&C(y,N),x&&x(y,N)},!yb(n))return;this.dragSnapToOrigin=u,this.handlers=a,this.transformPagePoint=s,this.contextWindow=l||window;const f=cf(n),h=Dh(f,this.transformPagePoint),{point:m}=h,{timestamp:g}=Ft;this.history=[{...m,timestamp:g}];const{onSessionStart:p}=a;p&&p(n,zh(h,this.history)),this.removeListeners=oa(la(this.contextWindow,"pointermove",this.handlePointerMove),la(this.contextWindow,"pointerup",this.handlePointerUp),la(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),$a(this.updatePoint)}}function Dh(t,n){return n?{point:n(t.point)}:t}function b1(t,n){return{x:t.x-n.x,y:t.y-n.y}}function zh({point:t},n){return{point:t,delta:b1(t,_b(n)),offset:b1(t,ew(n)),velocity:tw(n,.1)}}function ew(t){return t[0]}function _b(t){return t[t.length-1]}function tw(t,n){if(t.length<2)return{x:0,y:0};let a=t.length-1,s=null;const l=_b(t);for(;a>=0&&(s=t[a],!(l.timestamp-s.timestamp>ra(n)));)a--;if(!s)return{x:0,y:0};const u=sa(l.timestamp-s.timestamp);if(u===0)return{x:0,y:0};const f={x:(l.x-s.x)/u,y:(l.y-s.y)/u};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function Sb(t){let n=null;return()=>{const a=()=>{n=null};return n===null?(n=t,a):!1}}const _1=Sb("dragHorizontal"),S1=Sb("dragVertical");function wb(t){let n=!1;if(t==="y")n=S1();else if(t==="x")n=_1();else{const a=_1(),s=S1();a&&s?n=()=>{a(),s()}:(a&&a(),s&&s())}return n}function kb(){const t=wb(!0);return t?(t(),!1):!0}function zs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}const xb=1e-4,nw=1-xb,iw=1+xb,Cb=.01,aw=0-Cb,rw=0+Cb;function An(t){return t.max-t.min}function sw(t,n,a){return Math.abs(t-n)<=a}function w1(t,n,a,s=.5){t.origin=s,t.originPoint=lt(n.min,n.max,t.origin),t.scale=An(a)/An(n),t.translate=lt(a.min,a.max,t.origin)-t.originPoint,(t.scale>=nw&&t.scale<=iw||isNaN(t.scale))&&(t.scale=1),(t.translate>=aw&&t.translate<=rw||isNaN(t.translate))&&(t.translate=0)}function vl(t,n,a,s){w1(t.x,n.x,a.x,s?s.originX:void 0),w1(t.y,n.y,a.y,s?s.originY:void 0)}function k1(t,n,a){t.min=a.min+n.min,t.max=t.min+An(n)}function ow(t,n,a){k1(t.x,n.x,a.x),k1(t.y,n.y,a.y)}function x1(t,n,a){t.min=n.min-a.min,t.max=t.min+An(n)}function yl(t,n,a){x1(t.x,n.x,a.x),x1(t.y,n.y,a.y)}function lw(t,{min:n,max:a},s){return n!==void 0&&t<n?t=s?lt(n,t,s.min):Math.max(t,n):a!==void 0&&t>a&&(t=s?lt(a,t,s.max):Math.min(t,a)),t}function C1(t,n,a){return{min:n!==void 0?t.min+n:void 0,max:a!==void 0?t.max+a-(t.max-t.min):void 0}}function uw(t,{top:n,left:a,bottom:s,right:l}){return{x:C1(t.x,a,l),y:C1(t.y,n,s)}}function j1(t,n){let a=n.min-t.min,s=n.max-t.max;return n.max-n.min<t.max-t.min&&([a,s]=[s,a]),{min:a,max:s}}function cw(t,n){return{x:j1(t.x,n.x),y:j1(t.y,n.y)}}function fw(t,n){let a=.5;const s=An(t),l=An(n);return l>s?a=Bs(n.min,n.max-s,t.min):s>l&&(a=Bs(t.min,t.max-l,n.min)),Ja(0,1,a)}function dw(t,n){const a={};return n.min!==void 0&&(a.min=n.min-t.min),n.max!==void 0&&(a.max=n.max-t.min),a}const _m=.35;function hw(t=_m){return t===!1?t=0:t===!0&&(t=_m),{x:T1(t,"left","right"),y:T1(t,"top","bottom")}}function T1(t,n,a){return{min:A1(t,n),max:A1(t,a)}}function A1(t,n){return typeof t=="number"?t:t[n]||0}const E1=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ns=()=>({x:E1(),y:E1()}),O1=()=>({min:0,max:0}),yt=()=>({x:O1(),y:O1()});function Fn(t){return[t("x"),t("y")]}function jb({top:t,left:n,right:a,bottom:s}){return{x:{min:n,max:a},y:{min:t,max:s}}}function mw({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function gw(t,n){if(!n)return t;const a=n({x:t.left,y:t.top}),s=n({x:t.right,y:t.bottom});return{top:a.y,left:a.x,bottom:s.y,right:s.x}}function Nh(t){return t===void 0||t===1}function Sm({scale:t,scaleX:n,scaleY:a}){return!Nh(t)||!Nh(n)||!Nh(a)}function Or(t){return Sm(t)||Tb(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Tb(t){return M1(t.x)||M1(t.y)}function M1(t){return t&&t!=="0%"}function qc(t,n,a){const s=t-a,l=n*s;return a+l}function D1(t,n,a,s,l){return l!==void 0&&(t=qc(t,l,s)),qc(t,a,s)+n}function wm(t,n=0,a=1,s,l){t.min=D1(t.min,n,a,s,l),t.max=D1(t.max,n,a,s,l)}function Ab(t,{x:n,y:a}){wm(t.x,n.translate,n.scale,n.originPoint),wm(t.y,a.translate,a.scale,a.originPoint)}const z1=.999999999999,N1=1.0000000000001;function pw(t,n,a,s=!1){const l=a.length;if(!l)return;n.x=n.y=1;let u,f;for(let h=0;h<l;h++){u=a[h],f=u.projectionDelta;const{visualElement:m}=u.options;m&&m.props.style&&m.props.style.display==="contents"||(s&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Rs(t,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),f&&(n.x*=f.x.scale,n.y*=f.y.scale,Ab(t,f)),s&&Or(u.latestValues)&&Rs(t,u.latestValues))}n.x<N1&&n.x>z1&&(n.x=1),n.y<N1&&n.y>z1&&(n.y=1)}function Ps(t,n){t.min=t.min+n,t.max=t.max+n}function P1(t,n,a,s,l=.5){const u=lt(t.min,t.max,l);wm(t,n,a,u,s)}function Rs(t,n){P1(t.x,n.x,n.scaleX,n.scale,n.originX),P1(t.y,n.y,n.scaleY,n.scale,n.originY)}function Eb(t,n){return jb(gw(t.getBoundingClientRect(),n))}function vw(t,n,a){const s=Eb(t,a),{scroll:l}=n;return l&&(Ps(s.x,l.offset.x),Ps(s.y,l.offset.y)),s}const Ob=({current:t})=>t?t.ownerDocument.defaultView:null,yw=new WeakMap;class bw{constructor(n){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=yt(),this.visualElement=n}start(n,{snapToCursor:a=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const l=p=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),a&&this.snapToCursor(cf(p,"page").point)},u=(p,y)=>{const{drag:b,dragPropagation:C,onDragStart:x}=this.getProps();if(b&&!C&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=wb(b),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Fn(N=>{let E=this.getAxisMotionValue(N).get()||0;if(Ti.test(E)){const{projection:M}=this.visualElement;if(M&&M.layout){const w=M.layout.layoutBox[N];w&&(E=An(w)*(parseFloat(E)/100))}}this.originPoint[N]=E}),x&&Qe.postRender(()=>x(p,y)),ym(this.visualElement,"transform");const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},f=(p,y)=>{const{dragPropagation:b,dragDirectionLock:C,onDirectionLock:x,onDrag:T}=this.getProps();if(!b&&!this.openGlobalLock)return;const{offset:N}=y;if(C&&this.currentDirection===null){this.currentDirection=_w(N),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",y.point,N),this.updateAxis("y",y.point,N),this.visualElement.render(),T&&T(p,y)},h=(p,y)=>this.stop(p,y),m=()=>Fn(p=>{var y;return this.getAnimationState(p)==="paused"&&((y=this.getAxisMotionValue(p).animation)===null||y===void 0?void 0:y.play())}),{dragSnapToOrigin:g}=this.getProps();this.panSession=new bb(n,{onSessionStart:l,onStart:u,onMove:f,onSessionEnd:h,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,contextWindow:Ob(this.visualElement)})}stop(n,a){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:l}=a;this.startAnimation(l);const{onDragEnd:u}=this.getProps();u&&Qe.postRender(()=>u(n,a))}cancel(){this.isDragging=!1;const{projection:n,animationState:a}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),a&&a.setActive("whileDrag",!1)}updateAxis(n,a,s){const{drag:l}=this.getProps();if(!s||!_c(n,l,this.currentDirection))return;const u=this.getAxisMotionValue(n);let f=this.originPoint[n]+s[n];this.constraints&&this.constraints[n]&&(f=lw(f,this.constraints[n],this.elastic[n])),u.set(f)}resolveConstraints(){var n;const{dragConstraints:a,dragElastic:s}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(n=this.visualElement.projection)===null||n===void 0?void 0:n.layout,u=this.constraints;a&&zs(a)?this.constraints||(this.constraints=this.resolveRefConstraints()):a&&l?this.constraints=uw(l.layoutBox,a):this.constraints=!1,this.elastic=hw(s),u!==this.constraints&&l&&this.constraints&&!this.hasMutatedConstraints&&Fn(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=dw(l.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:a}=this.getProps();if(!n||!zs(n))return!1;const s=n.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const u=vw(s,l.root,this.visualElement.getTransformPagePoint());let f=cw(l.layout.layoutBox,u);if(a){const h=a(mw(f));this.hasMutatedConstraints=!!h,h&&(f=jb(h))}return f}startAnimation(n){const{drag:a,dragMomentum:s,dragElastic:l,dragTransition:u,dragSnapToOrigin:f,onDragTransitionEnd:h}=this.getProps(),m=this.constraints||{},g=Fn(p=>{if(!_c(p,a,this.currentDirection))return;let y=m&&m[p]||{};f&&(y={min:0,max:0});const b=l?200:1e6,C=l?40:1e7,x={type:"inertia",velocity:s?n[p]:0,bounceStiffness:b,bounceDamping:C,timeConstant:750,restDelta:1,restSpeed:10,...u,...y};return this.startAxisValueAnimation(p,x)});return Promise.all(g).then(h)}startAxisValueAnimation(n,a){const s=this.getAxisMotionValue(n);return ym(this.visualElement,n),s.start(mg(n,s,0,a,this.visualElement,!1))}stopAnimation(){Fn(n=>this.getAxisMotionValue(n).stop())}pauseAnimation(){Fn(n=>{var a;return(a=this.getAxisMotionValue(n).animation)===null||a===void 0?void 0:a.pause()})}getAnimationState(n){var a;return(a=this.getAxisMotionValue(n).animation)===null||a===void 0?void 0:a.state}getAxisMotionValue(n){const a=`_drag${n.toUpperCase()}`,s=this.visualElement.getProps(),l=s[a];return l||this.visualElement.getValue(n,(s.initial?s.initial[n]:void 0)||0)}snapToCursor(n){Fn(a=>{const{drag:s}=this.getProps();if(!_c(a,s,this.currentDirection))return;const{projection:l}=this.visualElement,u=this.getAxisMotionValue(a);if(l&&l.layout){const{min:f,max:h}=l.layout.layoutBox[a];u.set(n[a]-lt(f,h,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:a}=this.getProps(),{projection:s}=this.visualElement;if(!zs(a)||!s||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};Fn(f=>{const h=this.getAxisMotionValue(f);if(h&&this.constraints!==!1){const m=h.get();l[f]=fw({min:m,max:m},this.constraints[f])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),Fn(f=>{if(!_c(f,n,null))return;const h=this.getAxisMotionValue(f),{min:m,max:g}=this.constraints[f];h.set(lt(m,g,l[f]))})}addListeners(){if(!this.visualElement.current)return;yw.set(this.visualElement,this);const n=this.visualElement.current,a=la(n,"pointerdown",m=>{const{drag:g,dragListener:p=!0}=this.getProps();g&&p&&this.start(m)}),s=()=>{const{dragConstraints:m}=this.getProps();zs(m)&&m.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,u=l.addEventListener("measure",s);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),Qe.read(s);const f=aa(window,"resize",()=>this.scalePositionWithinConstraints()),h=l.addEventListener("didUpdate",(({delta:m,hasLayoutChanged:g})=>{this.isDragging&&g&&(Fn(p=>{const y=this.getAxisMotionValue(p);y&&(this.originPoint[p]+=m[p].translate,y.set(y.get()+m[p].translate))}),this.visualElement.render())}));return()=>{f(),a(),u(),h&&h()}}getProps(){const n=this.visualElement.getProps(),{drag:a=!1,dragDirectionLock:s=!1,dragPropagation:l=!1,dragConstraints:u=!1,dragElastic:f=_m,dragMomentum:h=!0}=n;return{...n,drag:a,dragDirectionLock:s,dragPropagation:l,dragConstraints:u,dragElastic:f,dragMomentum:h}}}function _c(t,n,a){return(n===!0||n===t)&&(a===null||a===t)}function _w(t,n=10){let a=null;return Math.abs(t.y)>n?a="y":Math.abs(t.x)>n&&(a="x"),a}class Sw extends tr{constructor(n){super(n),this.removeGroupControls=Qt,this.removeListeners=Qt,this.controls=new bw(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Qt}unmount(){this.removeGroupControls(),this.removeListeners()}}const R1=t=>(n,a)=>{t&&Qe.postRender(()=>t(n,a))};class ww extends tr{constructor(){super(...arguments),this.removePointerDownListener=Qt}onPointerDown(n){this.session=new bb(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ob(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:a,onPan:s,onPanEnd:l}=this.node.getProps();return{onSessionStart:R1(n),onStart:R1(a),onMove:s,onEnd:(u,f)=>{delete this.session,l&&Qe.postRender(()=>l(u,f))}}}mount(){this.removePointerDownListener=la(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ff=j.createContext(null);function kw(){const t=j.useContext(ff);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:a,register:s}=t,l=j.useId();j.useEffect(()=>s(l),[]);const u=j.useCallback(()=>a&&a(l),[l,a]);return!n&&a?[!1,u]:[!0]}const bg=j.createContext({}),Mb=j.createContext({}),Lc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function L1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const ul={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(Se.test(t))t=parseFloat(t);else return t;const a=L1(t,n.target.x),s=L1(t,n.target.y);return`${a}% ${s}%`}},xw={correct:(t,{treeScale:n,projectionDelta:a})=>{const s=t,l=er.parse(t);if(l.length>5)return s;const u=er.createTransformer(t),f=typeof l[0]!="number"?1:0,h=a.x.scale*n.x,m=a.y.scale*n.y;l[0+f]/=h,l[1+f]/=m;const g=lt(h,m,.5);return typeof l[2+f]=="number"&&(l[2+f]/=g),typeof l[3+f]=="number"&&(l[3+f]/=g),u(l)}},Kc={};function Cw(t){Object.assign(Kc,t)}const{schedule:_g}=D2(queueMicrotask,!1);class jw extends j.Component{componentDidMount(){const{visualElement:n,layoutGroup:a,switchLayoutGroup:s,layoutId:l}=this.props,{projection:u}=n;Cw(Tw),u&&(a.group&&a.group.add(u),s&&s.register&&l&&s.register(u),u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),Lc.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:a,visualElement:s,drag:l,isPresent:u}=this.props,f=s.projection;return f&&(f.isPresent=u,l||n.layoutDependency!==a||a===void 0?f.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?f.promote():f.relegate()||Qe.postRender(()=>{const h=f.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:n}=this.props.visualElement;n&&(n.root.didUpdate(),_g.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:a,switchLayoutGroup:s}=this.props,{projection:l}=n;l&&(l.scheduleCheckAfterUnmount(),a&&a.group&&a.group.remove(l),s&&s.deregister&&s.deregister(l))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function Db(t){const[n,a]=kw(),s=j.useContext(bg);return k.jsx(jw,{...t,layoutGroup:s,switchLayoutGroup:j.useContext(Mb),isPresent:n,safeToRemove:a})}const Tw={borderRadius:{...ul,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ul,borderTopRightRadius:ul,borderBottomLeftRadius:ul,borderBottomRightRadius:ul,boxShadow:xw},zb=["TopLeft","TopRight","BottomLeft","BottomRight"],Aw=zb.length,V1=t=>typeof t=="string"?parseFloat(t):t,B1=t=>typeof t=="number"||Se.test(t);function Ew(t,n,a,s,l,u){l?(t.opacity=lt(0,a.opacity!==void 0?a.opacity:1,Ow(s)),t.opacityExit=lt(n.opacity!==void 0?n.opacity:1,0,Mw(s))):u&&(t.opacity=lt(n.opacity!==void 0?n.opacity:1,a.opacity!==void 0?a.opacity:1,s));for(let f=0;f<Aw;f++){const h=`border${zb[f]}Radius`;let m=U1(n,h),g=U1(a,h);if(m===void 0&&g===void 0)continue;m||(m=0),g||(g=0),m===0||g===0||B1(m)===B1(g)?(t[h]=Math.max(lt(V1(m),V1(g),s),0),(Ti.test(g)||Ti.test(m))&&(t[h]+="%")):t[h]=g}(n.rotate||a.rotate)&&(t.rotate=lt(n.rotate||0,a.rotate||0,s))}function U1(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const Ow=Nb(0,.5,B2),Mw=Nb(.5,.95,Qt);function Nb(t,n,a){return s=>s<t?0:s>n?1:a(Bs(t,n,s))}function I1(t,n){t.min=n.min,t.max=n.max}function Hn(t,n){I1(t.x,n.x),I1(t.y,n.y)}function H1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}function F1(t,n,a,s,l){return t-=n,t=qc(t,1/a,s),l!==void 0&&(t=qc(t,1/l,s)),t}function Dw(t,n=0,a=1,s=.5,l,u=t,f=t){if(Ti.test(n)&&(n=parseFloat(n),n=lt(f.min,f.max,n/100)-f.min),typeof n!="number")return;let h=lt(u.min,u.max,s);t===u&&(h-=n),t.min=F1(t.min,n,a,h,l),t.max=F1(t.max,n,a,h,l)}function G1(t,n,[a,s,l],u,f){Dw(t,n[a],n[s],n[l],n.scale,u,f)}const zw=["x","scaleX","originX"],Nw=["y","scaleY","originY"];function Y1(t,n,a,s){G1(t.x,n,zw,a?a.x:void 0,s?s.x:void 0),G1(t.y,n,Nw,a?a.y:void 0,s?s.y:void 0)}function X1(t){return t.translate===0&&t.scale===1}function Pb(t){return X1(t.x)&&X1(t.y)}function q1(t,n){return t.min===n.min&&t.max===n.max}function Pw(t,n){return q1(t.x,n.x)&&q1(t.y,n.y)}function K1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function Rb(t,n){return K1(t.x,n.x)&&K1(t.y,n.y)}function Z1(t){return An(t.x)/An(t.y)}function W1(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}class Rw{constructor(){this.members=[]}add(n){gg(this.members,n),n.scheduleRender()}remove(n){if(pg(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const a=this.members[this.members.length-1];a&&this.promote(a)}}relegate(n){const a=this.members.findIndex(l=>n===l);if(a===0)return!1;let s;for(let l=a;l>=0;l--){const u=this.members[l];if(u.isPresent!==!1){s=u;break}}return s?(this.promote(s),!0):!1}promote(n,a){const s=this.lead;if(n!==s&&(this.prevLead=s,this.lead=n,n.show(),s)){s.instance&&s.scheduleRender(),n.scheduleRender(),n.resumeFrom=s,a&&(n.resumeFrom.preserveOpacity=!0),s.snapshot&&(n.snapshot=s.snapshot,n.snapshot.latestValues=s.animationValues||s.latestValues),n.root&&n.root.isUpdating&&(n.isLayoutDirty=!0);const{crossfade:l}=n.options;l===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(n=>{const{options:a,resumingFrom:s}=n;a.onExitComplete&&a.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(n=>{n.instance&&n.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Lw(t,n,a){let s="";const l=t.x.translate/n.x,u=t.y.translate/n.y,f=(a==null?void 0:a.z)||0;if((l||u||f)&&(s=`translate3d(${l}px, ${u}px, ${f}px) `),(n.x!==1||n.y!==1)&&(s+=`scale(${1/n.x}, ${1/n.y}) `),a){const{transformPerspective:g,rotate:p,rotateX:y,rotateY:b,skewX:C,skewY:x}=a;g&&(s=`perspective(${g}px) ${s}`),p&&(s+=`rotate(${p}deg) `),y&&(s+=`rotateX(${y}deg) `),b&&(s+=`rotateY(${b}deg) `),C&&(s+=`skewX(${C}deg) `),x&&(s+=`skewY(${x}deg) `)}const h=t.x.scale*n.x,m=t.y.scale*n.y;return(h!==1||m!==1)&&(s+=`scale(${h}, ${m})`),s||"none"}const Vw=(t,n)=>t.depth-n.depth;class Bw{constructor(){this.children=[],this.isDirty=!1}add(n){gg(this.children,n),this.isDirty=!0}remove(n){pg(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(Vw),this.isDirty=!1,this.children.forEach(n)}}function Vc(t){const n=Wt(t)?t.get():t;return O7(n)?n.toValue():n}function Uw(t,n){const a=Ai.now(),s=({timestamp:l})=>{const u=l-a;u>=n&&($a(s),t(u-n))};return Qe.read(s,!0),()=>$a(s)}function Iw(t){return t instanceof SVGElement&&t.tagName!=="svg"}function Hw(t,n,a){const s=Wt(t)?t:Cl(t);return s.start(mg("",s,n,a)),s.animation}const Mr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ml=typeof window<"u"&&window.MotionDebug!==void 0,Ph=["","X","Y","Z"],Fw={visibility:"hidden"},Q1=1e3;let Gw=0;function Rh(t,n,a,s){const{latestValues:l}=n;l[t]&&(a[t]=l[t],n.setStaticValue(t,0),s&&(s[t]=0))}function Lb(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const a=gb(n);if(window.MotionHasOptimisedAnimation(a,"transform")){const{layout:l,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(a,"transform",Qe,!(l||u))}const{parent:s}=t;s&&!s.hasCheckedOptimisedAppear&&Lb(s)}function Vb({attachResizeListener:t,defaultParent:n,measureScroll:a,checkIsScrollRoot:s,resetTransform:l}){return class{constructor(f={},h=n==null?void 0:n()){this.id=Gw++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ml&&(Mr.totalNodes=Mr.resolvedTargetDeltas=Mr.recalculatedProjection=0),this.nodes.forEach(qw),this.nodes.forEach($w),this.nodes.forEach(Jw),this.nodes.forEach(Kw),ml&&window.MotionDebug.record(Mr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new Bw)}addEventListener(f,h){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new vg),this.eventHandlers.get(f).add(h)}notifyListeners(f,...h){const m=this.eventHandlers.get(f);m&&m.notify(...h)}hasListeners(f){return this.eventHandlers.has(f)}mount(f,h=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Iw(f),this.instance=f;const{layoutId:m,layout:g,visualElement:p}=this.options;if(p&&!p.current&&p.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),h&&(g||m)&&(this.isLayoutDirty=!0),t){let y;const b=()=>this.root.updateBlockedByResize=!1;t(f,()=>{this.root.updateBlockedByResize=!0,y&&y(),y=Uw(b,250),Lc.hasAnimatedSinceResize&&(Lc.hasAnimatedSinceResize=!1,this.nodes.forEach(J1))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&p&&(m||g)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeTargetChanged:C,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||p.getDefaultTransition()||ak,{onLayoutAnimationStart:N,onLayoutAnimationComplete:E}=p.getProps(),M=!this.targetLayout||!Rb(this.targetLayout,x)||C,w=!b&&C;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||w||b&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(y,w);const O={...Jm(T,"layout"),onPlay:N,onComplete:E};(p.shouldReduceMotion||this.options.layoutRoot)&&(O.delay=0,O.type=!1),this.startAnimation(O)}else b||J1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,$a(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ek),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Lb(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const y=this.path[p];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:h,layout:m}=this.options;if(h===void 0&&!m)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach($1);return}this.isUpdating||this.nodes.forEach(Ww),this.isUpdating=!1,this.nodes.forEach(Qw),this.nodes.forEach(Yw),this.nodes.forEach(Xw),this.clearAllSnapshots();const h=Ai.now();Ft.delta=Ja(0,1e3/60,h-Ft.timestamp),Ft.timestamp=h,Ft.isProcessing=!0,Th.update.process(Ft),Th.preRender.process(Ft),Th.render.process(Ft),Ft.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,_g.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Zw),this.sharedNodes.forEach(tk)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Qe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Qe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=yt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(h=!1),h){const m=s(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:m,offset:a(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!l)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!Pb(this.projectionDelta),m=this.getTransformTemplate(),g=m?m(this.latestValues,""):void 0,p=g!==this.prevTransformTemplateValue;f&&(h||Or(this.latestValues)||p)&&(l(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const h=this.measurePageBox();let m=this.removeElementScroll(h);return f&&(m=this.removeTransform(m)),rk(m),{animationId:this.root.animationId,measuredBox:h,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){var f;const{visualElement:h}=this.options;if(!h)return yt();const m=h.measureViewportBox();if(!(((f=this.scroll)===null||f===void 0?void 0:f.wasRoot)||this.path.some(sk))){const{scroll:p}=this.root;p&&(Ps(m.x,p.offset.x),Ps(m.y,p.offset.y))}return m}removeElementScroll(f){var h;const m=yt();if(Hn(m,f),!((h=this.scroll)===null||h===void 0)&&h.wasRoot)return m;for(let g=0;g<this.path.length;g++){const p=this.path[g],{scroll:y,options:b}=p;p!==this.root&&y&&b.layoutScroll&&(y.wasRoot&&Hn(m,f),Ps(m.x,y.offset.x),Ps(m.y,y.offset.y))}return m}applyTransform(f,h=!1){const m=yt();Hn(m,f);for(let g=0;g<this.path.length;g++){const p=this.path[g];!h&&p.options.layoutScroll&&p.scroll&&p!==p.root&&Rs(m,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),Or(p.latestValues)&&Rs(m,p.latestValues)}return Or(this.latestValues)&&Rs(m,this.latestValues),m}removeTransform(f){const h=yt();Hn(h,f);for(let m=0;m<this.path.length;m++){const g=this.path[m];if(!g.instance||!Or(g.latestValues))continue;Sm(g.latestValues)&&g.updateSnapshot();const p=yt(),y=g.measurePageBox();Hn(p,y),Y1(h,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,p)}return Or(this.latestValues)&&Y1(h,this.latestValues),h}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ft.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){var h;const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const g=!!this.resumingFrom||this!==m;if(!(f||g&&this.isSharedProjectionDirty||this.isProjectionDirty||!((h=this.parent)===null||h===void 0)&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!(!this.layout||!(y||b))){if(this.resolvedRelativeTargetAt=Ft.timestamp,!this.targetDelta&&!this.relativeTarget){const C=this.getClosestProjectingParent();C&&C.layout&&this.animationProgress!==1?(this.relativeParent=C,this.forceRelativeParentToResolveTarget(),this.relativeTarget=yt(),this.relativeTargetOrigin=yt(),yl(this.relativeTargetOrigin,this.layout.layoutBox,C.layout.layoutBox),Hn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=yt(),this.targetWithTransforms=yt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ow(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Hn(this.target,this.layout.layoutBox),Ab(this.target,this.targetDelta)):Hn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const C=this.getClosestProjectingParent();C&&!!C.resumingFrom==!!this.resumingFrom&&!C.options.layoutScroll&&C.target&&this.animationProgress!==1?(this.relativeParent=C,this.forceRelativeParentToResolveTarget(),this.relativeTarget=yt(),this.relativeTargetOrigin=yt(),yl(this.relativeTargetOrigin,this.target,C.target),Hn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ml&&Mr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Sm(this.parent.latestValues)||Tb(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var f;const h=this.getLead(),m=!!this.resumingFrom||this!==h;let g=!0;if((this.isProjectionDirty||!((f=this.parent)===null||f===void 0)&&f.isProjectionDirty)&&(g=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(g=!1),this.resolvedRelativeTargetAt===Ft.timestamp&&(g=!1),g)return;const{layout:p,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||y))return;Hn(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,C=this.treeScale.y;pw(this.layoutCorrected,this.treeScale,this.path,m),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox,h.targetWithTransforms=yt());const{target:x}=h;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(H1(this.prevProjectionDelta.x,this.projectionDelta.x),H1(this.prevProjectionDelta.y,this.projectionDelta.y)),vl(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==C||!W1(this.projectionDelta.x,this.prevProjectionDelta.x)||!W1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),ml&&Mr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){var h;if((h=this.options.visualElement)===null||h===void 0||h.scheduleRender(),f){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ns(),this.projectionDelta=Ns(),this.projectionDeltaWithTransform=Ns()}setAnimationOrigin(f,h=!1){const m=this.snapshot,g=m?m.latestValues:{},p={...this.latestValues},y=Ns();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=yt(),C=m?m.source:void 0,x=this.layout?this.layout.source:void 0,T=C!==x,N=this.getStack(),E=!N||N.members.length<=1,M=!!(T&&!E&&this.options.crossfade===!0&&!this.path.some(ik));this.animationProgress=0;let w;this.mixTargetDelta=O=>{const D=O/1e3;ey(y.x,f.x,D),ey(y.y,f.y,D),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(yl(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox),nk(this.relativeTarget,this.relativeTargetOrigin,b,D),w&&Pw(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=yt()),Hn(w,this.relativeTarget)),T&&(this.animationValues=p,Ew(p,g,this.latestValues,D,M,E)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=D},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&($a(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Qe.update(()=>{Lc.hasAnimatedSinceResize=!0,this.currentAnimation=Hw(0,Q1,{...f,onUpdate:h=>{this.mixTargetDelta(h),f.onUpdate&&f.onUpdate(h)},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Q1),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:h,target:m,layout:g,latestValues:p}=f;if(!(!h||!m||!g)){if(this!==f&&this.layout&&g&&Bb(this.options.animationType,this.layout.layoutBox,g.layoutBox)){m=this.target||yt();const y=An(this.layout.layoutBox.x);m.x.min=f.target.x.min,m.x.max=m.x.min+y;const b=An(this.layout.layoutBox.y);m.y.min=f.target.y.min,m.y.max=m.y.min+b}Hn(h,m),Rs(h,p),vl(this.projectionDeltaWithTransform,this.layoutCorrected,h,p)}}registerSharedNode(f,h){this.sharedNodes.has(f)||this.sharedNodes.set(f,new Rw),this.sharedNodes.get(f).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){var f;const{layoutId:h}=this.options;return h?((f=this.getStack())===null||f===void 0?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:h}=this.options;return h?(f=this.getStack())===null||f===void 0?void 0:f.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:h,preserveFollowOpacity:m}={}){const g=this.getStack();g&&g.promote(this,m),f&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let h=!1;const{latestValues:m}=f;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(h=!0),!h)return;const g={};m.z&&Rh("z",f,g,this.animationValues);for(let p=0;p<Ph.length;p++)Rh(`rotate${Ph[p]}`,f,g,this.animationValues),Rh(`skew${Ph[p]}`,f,g,this.animationValues);f.render();for(const p in g)f.setStaticValue(p,g[p]),this.animationValues&&(this.animationValues[p]=g[p]);f.scheduleRender()}getProjectionStyles(f){var h,m;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Fw;const g={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,g.opacity="",g.pointerEvents=Vc(f==null?void 0:f.pointerEvents)||"",g.transform=p?p(this.latestValues,""):"none",g;const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){const T={};return this.options.layoutId&&(T.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,T.pointerEvents=Vc(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!Or(this.latestValues)&&(T.transform=p?p({},""):"none",this.hasProjected=!1),T}const b=y.animationValues||y.latestValues;this.applyTransformsToTarget(),g.transform=Lw(this.projectionDeltaWithTransform,this.treeScale,b),p&&(g.transform=p(b,g.transform));const{x:C,y:x}=this.projectionDelta;g.transformOrigin=`${C.origin*100}% ${x.origin*100}% 0`,y.animationValues?g.opacity=y===this?(m=(h=b.opacity)!==null&&h!==void 0?h:this.latestValues.opacity)!==null&&m!==void 0?m:1:this.preserveOpacity?this.latestValues.opacity:b.opacityExit:g.opacity=y===this?b.opacity!==void 0?b.opacity:"":b.opacityExit!==void 0?b.opacityExit:0;for(const T in Kc){if(b[T]===void 0)continue;const{correct:N,applyTo:E}=Kc[T],M=g.transform==="none"?b[T]:N(b[T],y);if(E){const w=E.length;for(let O=0;O<w;O++)g[E[O]]=M}else g[T]=M}return this.options.layoutId&&(g.pointerEvents=y===this?Vc(f==null?void 0:f.pointerEvents)||"":"none"),g}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>{var h;return(h=f.currentAnimation)===null||h===void 0?void 0:h.stop()}),this.root.nodes.forEach($1),this.root.sharedNodes.clear()}}}function Yw(t){t.updateLayout()}function Xw(t){var n;const a=((n=t.resumeFrom)===null||n===void 0?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&a&&t.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:l}=t.layout,{animationType:u}=t.options,f=a.source!==t.layout.source;u==="size"?Fn(y=>{const b=f?a.measuredBox[y]:a.layoutBox[y],C=An(b);b.min=s[y].min,b.max=b.min+C}):Bb(u,a.layoutBox,s)&&Fn(y=>{const b=f?a.measuredBox[y]:a.layoutBox[y],C=An(s[y]);b.max=b.min+C,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[y].max=t.relativeTarget[y].min+C)});const h=Ns();vl(h,s,a.layoutBox);const m=Ns();f?vl(m,t.applyTransform(l,!0),a.measuredBox):vl(m,s,a.layoutBox);const g=!Pb(h);let p=!1;if(!t.resumeFrom){const y=t.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:b,layout:C}=y;if(b&&C){const x=yt();yl(x,a.layoutBox,b.layoutBox);const T=yt();yl(T,s,C.layoutBox),Rb(x,T)||(p=!0),y.options.layoutRoot&&(t.relativeTarget=T,t.relativeTargetOrigin=x,t.relativeParent=y)}}}t.notifyListeners("didUpdate",{layout:s,snapshot:a,delta:m,layoutDelta:h,hasLayoutChanged:g,hasRelativeTargetChanged:p})}else if(t.isLead()){const{onExitComplete:s}=t.options;s&&s()}t.options.transition=void 0}function qw(t){ml&&Mr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function Kw(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function Zw(t){t.clearSnapshot()}function $1(t){t.clearMeasurements()}function Ww(t){t.isLayoutDirty=!1}function Qw(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function J1(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function $w(t){t.resolveTargetDelta()}function Jw(t){t.calcProjection()}function ek(t){t.resetSkewAndRotation()}function tk(t){t.removeLeadSnapshot()}function ey(t,n,a){t.translate=lt(n.translate,0,a),t.scale=lt(n.scale,1,a),t.origin=n.origin,t.originPoint=n.originPoint}function ty(t,n,a,s){t.min=lt(n.min,a.min,s),t.max=lt(n.max,a.max,s)}function nk(t,n,a,s){ty(t.x,n.x,a.x,s),ty(t.y,n.y,a.y,s)}function ik(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const ak={duration:.45,ease:[.4,0,.1,1]},ny=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),iy=ny("applewebkit/")&&!ny("chrome/")?Math.round:Qt;function ay(t){t.min=iy(t.min),t.max=iy(t.max)}function rk(t){ay(t.x),ay(t.y)}function Bb(t,n,a){return t==="position"||t==="preserve-aspect"&&!sw(Z1(n),Z1(a),.2)}function sk(t){var n;return t!==t.root&&((n=t.scroll)===null||n===void 0?void 0:n.wasRoot)}const ok=Vb({attachResizeListener:(t,n)=>aa(t,"resize",n),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Lh={current:void 0},Ub=Vb({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Lh.current){const t=new ok({});t.mount(window),t.setOptions({layoutScroll:!0}),Lh.current=t}return Lh.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),lk={pan:{Feature:ww},drag:{Feature:Sw,ProjectionNode:Ub,MeasureLayout:Db}};function ry(t,n){const a=n?"pointerenter":"pointerleave",s=n?"onHoverStart":"onHoverEnd",l=(u,f)=>{if(u.pointerType==="touch"||kb())return;const h=t.getProps();t.animationState&&h.whileHover&&t.animationState.setActive("whileHover",n);const m=h[s];m&&Qe.postRender(()=>m(u,f))};return la(t.current,a,l,{passive:!t.getProps()[s]})}class uk extends tr{mount(){this.unmount=oa(ry(this.node,!0),ry(this.node,!1))}unmount(){}}class ck extends tr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=oa(aa(this.node.current,"focus",()=>this.onFocus()),aa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Ib=(t,n)=>n?t===n?!0:Ib(t,n.parentElement):!1;function Vh(t,n){if(!n)return;const a=new PointerEvent("pointer"+t);n(a,cf(a))}class fk extends tr{constructor(){super(...arguments),this.removeStartListeners=Qt,this.removeEndListeners=Qt,this.removeAccessibleListeners=Qt,this.startPointerPress=(n,a)=>{if(this.isPressing)return;this.removeEndListeners();const s=this.node.getProps(),u=la(window,"pointerup",(h,m)=>{if(!this.checkPressEnd())return;const{onTap:g,onTapCancel:p,globalTapTarget:y}=this.node.getProps(),b=!y&&!Ib(this.node.current,h.target)?p:g;b&&Qe.update(()=>b(h,m))},{passive:!(s.onTap||s.onPointerUp)}),f=la(window,"pointercancel",(h,m)=>this.cancelPress(h,m),{passive:!(s.onTapCancel||s.onPointerCancel)});this.removeEndListeners=oa(u,f),this.startPress(n,a)},this.startAccessiblePress=()=>{const n=u=>{if(u.key!=="Enter"||this.isPressing)return;const f=h=>{h.key!=="Enter"||!this.checkPressEnd()||Vh("up",(m,g)=>{const{onTap:p}=this.node.getProps();p&&Qe.postRender(()=>p(m,g))})};this.removeEndListeners(),this.removeEndListeners=aa(this.node.current,"keyup",f),Vh("down",(h,m)=>{this.startPress(h,m)})},a=aa(this.node.current,"keydown",n),s=()=>{this.isPressing&&Vh("cancel",(u,f)=>this.cancelPress(u,f))},l=aa(this.node.current,"blur",s);this.removeAccessibleListeners=oa(a,l)}}startPress(n,a){this.isPressing=!0;const{onTapStart:s,whileTap:l}=this.node.getProps();l&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),s&&Qe.postRender(()=>s(n,a))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!kb()}cancelPress(n,a){if(!this.checkPressEnd())return;const{onTapCancel:s}=this.node.getProps();s&&Qe.postRender(()=>s(n,a))}mount(){const n=this.node.getProps(),a=la(n.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(n.onTapStart||n.onPointerStart)}),s=aa(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=oa(a,s)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const km=new WeakMap,Bh=new WeakMap,dk=t=>{const n=km.get(t.target);n&&n(t)},hk=t=>{t.forEach(dk)};function mk({root:t,...n}){const a=t||document;Bh.has(a)||Bh.set(a,{});const s=Bh.get(a),l=JSON.stringify(n);return s[l]||(s[l]=new IntersectionObserver(hk,{root:t,...n})),s[l]}function gk(t,n,a){const s=mk(n);return km.set(t,a),s.observe(t),()=>{km.delete(t),s.unobserve(t)}}const pk={some:0,all:1};class vk extends tr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:n={}}=this.node.getProps(),{root:a,margin:s,amount:l="some",once:u}=n,f={root:a?a.current:void 0,rootMargin:s,threshold:typeof l=="number"?l:pk[l]},h=m=>{const{isIntersecting:g}=m;if(this.isInView===g||(this.isInView=g,u&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:p,onViewportLeave:y}=this.node.getProps(),b=g?p:y;b&&b(m)};return gk(this.node.current,f,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:a}=this.node;["amount","margin","root"].some(yk(n,a))&&this.startObserver()}unmount(){}}function yk({viewport:t={}},{viewport:n={}}={}){return a=>t[a]!==n[a]}const bk={inView:{Feature:vk},tap:{Feature:fk},focus:{Feature:ck},hover:{Feature:uk}},_k={layout:{ProjectionNode:Ub,MeasureLayout:Db}},Sg=j.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),df=j.createContext({}),wg=typeof window<"u",Hb=wg?j.useLayoutEffect:j.useEffect,Fb=j.createContext({strict:!1});function Sk(t,n,a,s,l){var u,f;const{visualElement:h}=j.useContext(df),m=j.useContext(Fb),g=j.useContext(ff),p=j.useContext(Sg).reducedMotion,y=j.useRef();s=s||m.renderer,!y.current&&s&&(y.current=s(t,{visualState:n,parent:h,props:a,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:p}));const b=y.current,C=j.useContext(Mb);b&&!b.projection&&l&&(b.type==="html"||b.type==="svg")&&wk(y.current,a,l,C);const x=j.useRef(!1);j.useInsertionEffect(()=>{b&&x.current&&b.update(a,g)});const T=a[mb],N=j.useRef(!!T&&!(!((u=window.MotionHandoffIsComplete)===null||u===void 0)&&u.call(window,T))&&((f=window.MotionHasOptimisedAnimation)===null||f===void 0?void 0:f.call(window,T)));return Hb(()=>{b&&(x.current=!0,window.MotionIsMounted=!0,b.updateFeatures(),_g.render(b.render),N.current&&b.animationState&&b.animationState.animateChanges())}),j.useEffect(()=>{b&&(!N.current&&b.animationState&&b.animationState.animateChanges(),N.current&&(queueMicrotask(()=>{var E;(E=window.MotionHandoffMarkAsComplete)===null||E===void 0||E.call(window,T)}),N.current=!1))}),b}function wk(t,n,a,s){const{layoutId:l,layout:u,drag:f,dragConstraints:h,layoutScroll:m,layoutRoot:g}=n;t.projection=new a(t.latestValues,n["data-framer-portal-id"]?void 0:Gb(t.parent)),t.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!f||h&&zs(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,layoutScroll:m,layoutRoot:g})}function Gb(t){if(t)return t.options.allowProjection!==!1?t.projection:Gb(t.parent)}function kk(t,n,a){return j.useCallback(s=>{s&&t.mount&&t.mount(s),n&&(s?n.mount(s):n.unmount()),a&&(typeof a=="function"?a(s):zs(a)&&(a.current=s))},[n])}function hf(t){return of(t.animate)||$m.some(n=>wl(t[n]))}function Yb(t){return!!(hf(t)||t.variants)}function xk(t,n){if(hf(t)){const{initial:a,animate:s}=t;return{initial:a===!1||wl(a)?a:void 0,animate:wl(s)?s:void 0}}return t.inherit!==!1?n:{}}function Ck(t){const{initial:n,animate:a}=xk(t,j.useContext(df));return j.useMemo(()=>({initial:n,animate:a}),[sy(n),sy(a)])}function sy(t){return Array.isArray(t)?t.join(" "):t}const oy={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Us={};for(const t in oy)Us[t]={isEnabled:n=>oy[t].some(a=>!!n[a])};function jk(t){for(const n in t)Us[n]={...Us[n],...t[n]}}const Tk=Symbol.for("motionComponentSymbol");function Ak({preloadedFeatures:t,createVisualElement:n,useRender:a,useVisualState:s,Component:l}){t&&jk(t);function u(h,m){let g;const p={...j.useContext(Sg),...h,layoutId:Ek(h)},{isStatic:y}=p,b=Ck(h),C=s(h,y);if(!y&&wg){Ok();const x=Mk(p);g=x.MeasureLayout,b.visualElement=Sk(l,C,p,n,x.ProjectionNode)}return k.jsxs(df.Provider,{value:b,children:[g&&b.visualElement?k.jsx(g,{visualElement:b.visualElement,...p}):null,a(l,h,kk(C,b.visualElement,m),C,y,b.visualElement)]})}const f=j.forwardRef(u);return f[Tk]=l,f}function Ek({layoutId:t}){const n=j.useContext(bg).id;return n&&t!==void 0?n+"-"+t:t}function Ok(t,n){j.useContext(Fb).strict}function Mk(t){const{drag:n,layout:a}=Us;if(!n&&!a)return{};const s={...n,...a};return{MeasureLayout:n!=null&&n.isEnabled(t)||a!=null&&a.isEnabled(t)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}const Dk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function kg(t){return typeof t!="string"||t.includes("-")?!1:!!(Dk.indexOf(t)>-1||/[A-Z]/u.test(t))}function Xb(t,{style:n,vars:a},s,l){Object.assign(t.style,n,l&&l.getProjectionStyles(s));for(const u in a)t.style.setProperty(u,a[u])}const qb=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Kb(t,n,a,s){Xb(t,n,void 0,s);for(const l in n.attrs)t.setAttribute(qb.has(l)?l:yg(l),n.attrs[l])}function Zb(t,{layout:n,layoutId:a}){return Hr.has(t)||t.startsWith("origin")||(n||a!==void 0)&&(!!Kc[t]||t==="opacity")}function xg(t,n,a){var s;const{style:l}=t,u={};for(const f in l)(Wt(l[f])||n.style&&Wt(n.style[f])||Zb(f,t)||((s=a==null?void 0:a.getValue(f))===null||s===void 0?void 0:s.liveStyle)!==void 0)&&(u[f]=l[f]);return u}function Wb(t,n,a){const s=xg(t,n,a);for(const l in t)if(Wt(t[l])||Wt(n[l])){const u=Ol.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;s[u]=t[l]}return s}function Cg(t){const n=j.useRef(null);return n.current===null&&(n.current=t()),n.current}function zk({scrapeMotionValuesFromProps:t,createRenderState:n,onMount:a},s,l,u){const f={latestValues:Nk(s,l,u,t),renderState:n()};return a&&(f.mount=h=>a(s,h,f)),f}const Qb=t=>(n,a)=>{const s=j.useContext(df),l=j.useContext(ff),u=()=>zk(t,n,s,l);return a?u():Cg(u)};function Nk(t,n,a,s){const l={},u=s(t,{});for(const b in u)l[b]=Vc(u[b]);let{initial:f,animate:h}=t;const m=hf(t),g=Yb(t);n&&g&&!m&&t.inherit!==!1&&(f===void 0&&(f=n.initial),h===void 0&&(h=n.animate));let p=a?a.initial===!1:!1;p=p||f===!1;const y=p?h:f;if(y&&typeof y!="boolean"&&!of(y)){const b=Array.isArray(y)?y:[y];for(let C=0;C<b.length;C++){const x=Wm(t,b[C]);if(x){const{transitionEnd:T,transition:N,...E}=x;for(const M in E){let w=E[M];if(Array.isArray(w)){const O=p?w.length-1:0;w=w[O]}w!==null&&(l[M]=w)}for(const M in T)l[M]=T[M]}}}return l}const jg=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),$b=()=>({...jg(),attrs:{}}),Jb=(t,n)=>n&&typeof t=="number"?n.transform(t):t,Pk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Rk=Ol.length;function Lk(t,n,a){let s="",l=!0;for(let u=0;u<Rk;u++){const f=Ol[u],h=t[f];if(h===void 0)continue;let m=!0;if(typeof h=="number"?m=h===(f.startsWith("scale")?1:0):m=parseFloat(h)===0,!m||a){const g=Jb(h,og[f]);if(!m){l=!1;const p=Pk[f]||f;s+=`${p}(${g}) `}a&&(n[f]=g)}}return s=s.trim(),a?s=a(n,l?"":s):l&&(s="none"),s}function Tg(t,n,a){const{style:s,vars:l,transformOrigin:u}=t;let f=!1,h=!1;for(const m in n){const g=n[m];if(Hr.has(m)){f=!0;continue}else if(Y2(m)){l[m]=g;continue}else{const p=Jb(g,og[m]);m.startsWith("origin")?(h=!0,u[m]=p):s[m]=p}}if(n.transform||(f||a?s.transform=Lk(n,t.transform,a):s.transform&&(s.transform="none")),h){const{originX:m="50%",originY:g="50%",originZ:p=0}=u;s.transformOrigin=`${m} ${g} ${p}`}}function ly(t,n,a){return typeof t=="string"?t:Se.transform(n+a*t)}function Vk(t,n,a){const s=ly(n,t.x,t.width),l=ly(a,t.y,t.height);return`${s} ${l}`}const Bk={offset:"stroke-dashoffset",array:"stroke-dasharray"},Uk={offset:"strokeDashoffset",array:"strokeDasharray"};function Ik(t,n,a=1,s=0,l=!0){t.pathLength=1;const u=l?Bk:Uk;t[u.offset]=Se.transform(-s);const f=Se.transform(n),h=Se.transform(a);t[u.array]=`${f} ${h}`}function Ag(t,{attrX:n,attrY:a,attrScale:s,originX:l,originY:u,pathLength:f,pathSpacing:h=1,pathOffset:m=0,...g},p,y){if(Tg(t,g,y),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:b,style:C,dimensions:x}=t;b.transform&&(x&&(C.transform=b.transform),delete b.transform),x&&(l!==void 0||u!==void 0||C.transform)&&(C.transformOrigin=Vk(x,l!==void 0?l:.5,u!==void 0?u:.5)),n!==void 0&&(b.x=n),a!==void 0&&(b.y=a),s!==void 0&&(b.scale=s),f!==void 0&&Ik(b,f,h,m,!1)}const Eg=t=>typeof t=="string"&&t.toLowerCase()==="svg",Hk={useVisualState:Qb({scrapeMotionValuesFromProps:Wb,createRenderState:$b,onMount:(t,n,{renderState:a,latestValues:s})=>{Qe.read(()=>{try{a.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{a.dimensions={x:0,y:0,width:0,height:0}}}),Qe.render(()=>{Ag(a,s,Eg(n.tagName),t.transformTemplate),Kb(n,a)})}})},Fk={useVisualState:Qb({scrapeMotionValuesFromProps:xg,createRenderState:jg})};function e_(t,n,a){for(const s in n)!Wt(n[s])&&!Zb(s,a)&&(t[s]=n[s])}function Gk({transformTemplate:t},n){return j.useMemo(()=>{const a=jg();return Tg(a,n,t),Object.assign({},a.vars,a.style)},[n])}function Yk(t,n){const a=t.style||{},s={};return e_(s,a,t),Object.assign(s,Gk(t,n)),s}function Xk(t,n){const a={},s=Yk(t,n);return t.drag&&t.dragListener!==!1&&(a.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(a.tabIndex=0),a.style=s,a}const qk=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Zc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||qk.has(t)}let t_=t=>!Zc(t);function Kk(t){t&&(t_=n=>n.startsWith("on")?!Zc(n):t(n))}try{Kk(require("@emotion/is-prop-valid").default)}catch{}function Zk(t,n,a){const s={};for(const l in t)l==="values"&&typeof t.values=="object"||(t_(l)||a===!0&&Zc(l)||!n&&!Zc(l)||t.draggable&&l.startsWith("onDrag"))&&(s[l]=t[l]);return s}function Wk(t,n,a,s){const l=j.useMemo(()=>{const u=$b();return Ag(u,n,Eg(s),t.transformTemplate),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};e_(u,t.style,t),l.style={...u,...l.style}}return l}function Qk(t=!1){return(a,s,l,{latestValues:u},f)=>{const m=(kg(a)?Wk:Xk)(s,u,f,a),g=Zk(s,typeof a=="string",t),p=a!==j.Fragment?{...g,...m,ref:l}:{},{children:y}=s,b=j.useMemo(()=>Wt(y)?y.get():y,[y]);return j.createElement(a,{...p,children:b})}}function $k(t,n){return function(s,{forwardMotionProps:l}={forwardMotionProps:!1}){const f={...kg(s)?Hk:Fk,preloadedFeatures:t,useRender:Qk(l),createVisualElement:n,Component:s};return Ak(f)}}const xm={current:null},n_={current:!1};function Jk(){if(n_.current=!0,!!wg)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>xm.current=t.matches;t.addListener(n),n()}else xm.current=!1}function ex(t,n,a){for(const s in n){const l=n[s],u=a[s];if(Wt(l))t.addValue(s,l);else if(Wt(u))t.addValue(s,Cl(l,{owner:t}));else if(u!==l)if(t.hasValue(s)){const f=t.getValue(s);f.liveStyle===!0?f.jump(l):f.hasAnimated||f.set(l)}else{const f=t.getStaticValue(s);t.addValue(s,Cl(f!==void 0?f:l,{owner:t}))}}for(const s in a)n[s]===void 0&&t.removeValue(s);return n}const uy=new WeakMap,tx=[...K2,Zt,er],nx=t=>tx.find(q2(t)),cy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class ix{scrapeMotionValuesFromProps(n,a,s){return{}}constructor({parent:n,props:a,presenceContext:s,reducedMotionConfig:l,blockInitialAnimation:u,visualState:f},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=ag,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const b=Ai.now();this.renderScheduledAt<b&&(this.renderScheduledAt=b,Qe.render(this.render,!1,!0))};const{latestValues:m,renderState:g}=f;this.latestValues=m,this.baseTarget={...m},this.initialValues=a.initial?{...m}:{},this.renderState=g,this.parent=n,this.props=a,this.presenceContext=s,this.depth=n?n.depth+1:0,this.reducedMotionConfig=l,this.options=h,this.blockInitialAnimation=!!u,this.isControllingVariants=hf(a),this.isVariantNode=Yb(a),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:p,...y}=this.scrapeMotionValuesFromProps(a,{},this);for(const b in y){const C=y[b];m[b]!==void 0&&Wt(C)&&C.set(m[b],!1)}}mount(n){this.current=n,uy.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((a,s)=>this.bindToMotionValue(s,a)),n_.current||Jk(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:xm.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){uy.delete(this.current),this.projection&&this.projection.unmount(),$a(this.notifyUpdate),$a(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const a=this.features[n];a&&(a.unmount(),a.isMounted=!1)}this.current=null}bindToMotionValue(n,a){this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)();const s=Hr.has(n),l=a.on("change",h=>{this.latestValues[n]=h,this.props.onUpdate&&Qe.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),u=a.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,n,a)),this.valueSubscriptions.set(n,()=>{l(),u(),f&&f(),a.owner&&a.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Us){const a=Us[n];if(!a)continue;const{isEnabled:s,Feature:l}=a;if(!this.features[n]&&l&&s(this.props)&&(this.features[n]=new l(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):yt()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,a){this.latestValues[n]=a}update(n,a){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=a;for(let s=0;s<cy.length;s++){const l=cy[s];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const u="on"+l,f=n[u];f&&(this.propEventSubscriptions[l]=this.on(l,f))}this.prevMotionValues=ex(this,this.scrapeMotionValuesFromProps(n,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const a=this.getClosestVariantNode();if(a)return a.variantChildren&&a.variantChildren.add(n),()=>a.variantChildren.delete(n)}addValue(n,a){const s=this.values.get(n);a!==s&&(s&&this.removeValue(n),this.bindToMotionValue(n,a),this.values.set(n,a),this.latestValues[n]=a.get())}removeValue(n){this.values.delete(n);const a=this.valueSubscriptions.get(n);a&&(a(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,a){if(this.props.values&&this.props.values[n])return this.props.values[n];let s=this.values.get(n);return s===void 0&&a!==void 0&&(s=Cl(a===null?void 0:a,{owner:this}),this.addValue(n,s)),s}readValue(n,a){var s;let l=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(s=this.getBaseTargetFromProps(this.props,n))!==null&&s!==void 0?s:this.readValueFromInstance(this.current,n,this.options);return l!=null&&(typeof l=="string"&&(F2(l)||I2(l))?l=parseFloat(l):!nx(l)&&er.test(a)&&(l=nb(n,a)),this.setBaseTarget(n,Wt(l)?l.get():l)),Wt(l)?l.get():l}setBaseTarget(n,a){this.baseTarget[n]=a}getBaseTarget(n){var a;const{initial:s}=this.props;let l;if(typeof s=="string"||typeof s=="object"){const f=Wm(this.props,s,(a=this.presenceContext)===null||a===void 0?void 0:a.custom);f&&(l=f[n])}if(s&&l!==void 0)return l;const u=this.getBaseTargetFromProps(this.props,n);return u!==void 0&&!Wt(u)?u:this.initialValues[n]!==void 0&&l===void 0?void 0:this.baseTarget[n]}on(n,a){return this.events[n]||(this.events[n]=new vg),this.events[n].add(a)}notify(n,...a){this.events[n]&&this.events[n].notify(...a)}}class i_ extends ix{constructor(){super(...arguments),this.KeyframeResolver=ib}sortInstanceNodePosition(n,a){return n.compareDocumentPosition(a)&2?1:-1}getBaseTargetFromProps(n,a){return n.style?n.style[a]:void 0}removeValueFromRenderState(n,{vars:a,style:s}){delete a[n],delete s[n]}}function ax(t){return window.getComputedStyle(t)}class rx extends i_{constructor(){super(...arguments),this.type="html",this.renderInstance=Xb}readValueFromInstance(n,a){if(Hr.has(a)){const s=lg(a);return s&&s.default||0}else{const s=ax(n),l=(Y2(a)?s.getPropertyValue(a):s[a])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(n,{transformPagePoint:a}){return Eb(n,a)}build(n,a,s){Tg(n,a,s.transformTemplate)}scrapeMotionValuesFromProps(n,a,s){return xg(n,a,s)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;Wt(n)&&(this.childSubscription=n.on("change",a=>{this.current&&(this.current.textContent=`${a}`)}))}}class sx extends i_{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=yt}getBaseTargetFromProps(n,a){return n[a]}readValueFromInstance(n,a){if(Hr.has(a)){const s=lg(a);return s&&s.default||0}return a=qb.has(a)?a:yg(a),n.getAttribute(a)}scrapeMotionValuesFromProps(n,a,s){return Wb(n,a,s)}build(n,a,s){Ag(n,a,this.isSVGTag,s.transformTemplate)}renderInstance(n,a,s,l){Kb(n,a,s,l)}mount(n){this.isSVGTag=Eg(n.tagName),super.mount(n)}}const ox=(t,n)=>kg(t)?new sx(n):new rx(n,{allowProjection:t!==j.Fragment}),lx=$k({...Q7,...bk,...lk,..._k},ox),an=H3(lx);class ux extends j.Component{getSnapshotBeforeUpdate(n){const a=this.props.childRef.current;if(a&&n.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=a.offsetHeight||0,s.width=a.offsetWidth||0,s.top=a.offsetTop,s.left=a.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function cx({children:t,isPresent:n}){const a=j.useId(),s=j.useRef(null),l=j.useRef({width:0,height:0,top:0,left:0}),{nonce:u}=j.useContext(Sg);return j.useInsertionEffect(()=>{const{width:f,height:h,top:m,left:g}=l.current;if(n||!s.current||!f||!h)return;s.current.dataset.motionPopId=a;const p=document.createElement("style");return u&&(p.nonce=u),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${h}px !important;
            top: ${m}px !important;
            left: ${g}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[n]),k.jsx(ux,{isPresent:n,childRef:s,sizeRef:l,children:j.cloneElement(t,{ref:s})})}const fx=({children:t,initial:n,isPresent:a,onExitComplete:s,custom:l,presenceAffectsLayout:u,mode:f})=>{const h=Cg(dx),m=j.useId(),g=j.useCallback(y=>{h.set(y,!0);for(const b of h.values())if(!b)return;s&&s()},[h,s]),p=j.useMemo(()=>({id:m,initial:n,isPresent:a,custom:l,onExitComplete:g,register:y=>(h.set(y,!1),()=>h.delete(y))}),u?[Math.random(),g]:[a,g]);return j.useMemo(()=>{h.forEach((y,b)=>h.set(b,!1))},[a]),j.useEffect(()=>{!a&&!h.size&&s&&s()},[a]),f==="popLayout"&&(t=k.jsx(cx,{isPresent:a,children:t})),k.jsx(ff.Provider,{value:p,children:t})};function dx(){return new Map}const Sc=t=>t.key||"";function fy(t){const n=[];return j.Children.forEach(t,a=>{j.isValidElement(a)&&n.push(a)}),n}const Uh=({children:t,exitBeforeEnter:n,custom:a,initial:s=!0,onExitComplete:l,presenceAffectsLayout:u=!0,mode:f="sync"})=>{const h=j.useMemo(()=>fy(t),[t]),m=h.map(Sc),g=j.useRef(!0),p=j.useRef(h),y=Cg(()=>new Map),[b,C]=j.useState(h),[x,T]=j.useState(h);Hb(()=>{g.current=!1,p.current=h;for(let M=0;M<x.length;M++){const w=Sc(x[M]);m.includes(w)?y.delete(w):y.get(w)!==!0&&y.set(w,!1)}},[x,m.length,m.join("-")]);const N=[];if(h!==b){let M=[...h];for(let w=0;w<x.length;w++){const O=x[w],D=Sc(O);m.includes(D)||(M.splice(w,0,O),N.push(O))}f==="wait"&&N.length&&(M=N),T(fy(M)),C(h);return}const{forceRender:E}=j.useContext(bg);return k.jsx(k.Fragment,{children:x.map(M=>{const w=Sc(M),O=h===x||m.includes(w),D=()=>{if(y.has(w))y.set(w,!0);else return;let B=!0;y.forEach(U=>{U||(B=!1)}),B&&(E==null||E(),T(p.current),l&&l())};return k.jsx(fx,{isPresent:O,initial:!g.current||s?void 0:!1,custom:O?void 0:a,presenceAffectsLayout:u,mode:f,onExitComplete:O?void 0:D,children:M},w)})})};var mf=typeof self<"u"?self:global;const jl=typeof navigator<"u",hx=jl&&typeof HTMLImageElement>"u",Wc=!(typeof global>"u"||typeof process>"u"||!process.versions||!process.versions.node),gf=mf.Buffer,wc=mf.BigInt,pf=!!gf,mx=t=>t;function Qc(t,n=mx){if(Wc)try{return typeof require=="function"?Promise.resolve(n(require(t))):import(t).then(n)}catch{console.warn(`Couldn't load ${t}`)}}let Og=mf.fetch;const gx=t=>Og=t;if(!mf.fetch){const t=Qc("http",(s=>s)),n=Qc("https",(s=>s)),a=(s,{headers:l}={})=>new Promise((async(u,f)=>{let{port:h,hostname:m,pathname:g,protocol:p,search:y}=new URL(s);const b={method:"GET",hostname:m,path:encodeURI(g)+y,headers:l};h!==""&&(b.port=Number(h));const C=(p==="https:"?await n:await t).request(b,(x=>{if(x.statusCode===301||x.statusCode===302){let T=new URL(x.headers.location,s).toString();return a(T,{headers:l}).then(u).catch(f)}u({status:x.statusCode,arrayBuffer:()=>new Promise((T=>{let N=[];x.on("data",(E=>N.push(E))),x.on("end",(()=>T(Buffer.concat(N))))}))})}));C.on("error",f),C.end()}));gx(a)}function ke(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}const $c=t=>a_(t)?void 0:t,px=t=>t!==void 0;function a_(t){return t===void 0||(t instanceof Map?t.size===0:Object.values(t).filter(px).length===0)}function Tt(t){let n=new Error(t);throw delete n.stack,n}function zr(t){return(t=(function(n){for(;n.endsWith("\0");)n=n.slice(0,-1);return n})(t).trim())===""?void 0:t}function Cm(t){let n=(function(a){let s=0;return a.ifd0.enabled&&(s+=1024),a.exif.enabled&&(s+=2048),a.makerNote&&(s+=2048),a.userComment&&(s+=1024),a.gps.enabled&&(s+=512),a.interop.enabled&&(s+=100),a.ifd1.enabled&&(s+=1024),s+2048})(t);return t.jfif.enabled&&(n+=50),t.xmp.enabled&&(n+=2e4),t.iptc.enabled&&(n+=14e3),t.icc.enabled&&(n+=6e3),n}const jm=t=>String.fromCharCode.apply(null,t),dy=typeof TextDecoder<"u"?new TextDecoder("utf-8"):void 0;function r_(t){return dy?dy.decode(t):pf?Buffer.from(t).toString("utf8"):decodeURIComponent(escape(jm(t)))}class vn{static from(n,a){return n instanceof this&&n.le===a?n:new vn(n,void 0,void 0,a)}constructor(n,a=0,s,l){if(typeof l=="boolean"&&(this.le=l),Array.isArray(n)&&(n=new Uint8Array(n)),n===0)this.byteOffset=0,this.byteLength=0;else if(n instanceof ArrayBuffer){s===void 0&&(s=n.byteLength-a);let u=new DataView(n,a,s);this._swapDataView(u)}else if(n instanceof Uint8Array||n instanceof DataView||n instanceof vn){s===void 0&&(s=n.byteLength-a),(a+=n.byteOffset)+s>n.byteOffset+n.byteLength&&Tt("Creating view outside of available memory in ArrayBuffer");let u=new DataView(n.buffer,a,s);this._swapDataView(u)}else if(typeof n=="number"){let u=new DataView(new ArrayBuffer(n));this._swapDataView(u)}else Tt("Invalid input argument for BufferView: "+n)}_swapArrayBuffer(n){this._swapDataView(new DataView(n))}_swapBuffer(n){this._swapDataView(new DataView(n.buffer,n.byteOffset,n.byteLength))}_swapDataView(n){this.dataView=n,this.buffer=n.buffer,this.byteOffset=n.byteOffset,this.byteLength=n.byteLength}_lengthToEnd(n){return this.byteLength-n}set(n,a,s=vn){return n instanceof DataView||n instanceof vn?n=new Uint8Array(n.buffer,n.byteOffset,n.byteLength):n instanceof ArrayBuffer&&(n=new Uint8Array(n)),n instanceof Uint8Array||Tt("BufferView.set(): Invalid data argument."),this.toUint8().set(n,a),new s(this,a,n.byteLength)}subarray(n,a){return a=a||this._lengthToEnd(n),new vn(this,n,a)}toUint8(){return new Uint8Array(this.buffer,this.byteOffset,this.byteLength)}getUint8Array(n,a){return new Uint8Array(this.buffer,this.byteOffset+n,a)}getString(n=0,a=this.byteLength){return r_(this.getUint8Array(n,a))}getLatin1String(n=0,a=this.byteLength){let s=this.getUint8Array(n,a);return jm(s)}getUnicodeString(n=0,a=this.byteLength){const s=[];for(let l=0;l<a&&n+l<this.byteLength;l+=2)s.push(this.getUint16(n+l));return jm(s)}getInt8(n){return this.dataView.getInt8(n)}getUint8(n){return this.dataView.getUint8(n)}getInt16(n,a=this.le){return this.dataView.getInt16(n,a)}getInt32(n,a=this.le){return this.dataView.getInt32(n,a)}getUint16(n,a=this.le){return this.dataView.getUint16(n,a)}getUint32(n,a=this.le){return this.dataView.getUint32(n,a)}getFloat32(n,a=this.le){return this.dataView.getFloat32(n,a)}getFloat64(n,a=this.le){return this.dataView.getFloat64(n,a)}getFloat(n,a=this.le){return this.dataView.getFloat32(n,a)}getDouble(n,a=this.le){return this.dataView.getFloat64(n,a)}getUintBytes(n,a,s){switch(a){case 1:return this.getUint8(n,s);case 2:return this.getUint16(n,s);case 4:return this.getUint32(n,s);case 8:return this.getUint64&&this.getUint64(n,s)}}getUint(n,a,s){switch(a){case 8:return this.getUint8(n,s);case 16:return this.getUint16(n,s);case 32:return this.getUint32(n,s);case 64:return this.getUint64&&this.getUint64(n,s)}}toString(n){return this.dataView.toString(n,this.constructor.name)}ensureChunk(){}}function Tm(t,n){Tt(`${t} '${n}' was not loaded, try using full build of exifr.`)}class Mg extends Map{constructor(n){super(),this.kind=n}get(n,a){return this.has(n)||Tm(this.kind,n),a&&(n in a||(function(s,l){Tt(`Unknown ${s} '${l}'.`)})(this.kind,n),a[n].enabled||Tm(this.kind,n)),super.get(n)}keyList(){return Array.from(this.keys())}}var Ei=new Mg("file parser"),jt=new Mg("segment parser"),Oi=new Mg("file reader");function vx(t,n){return typeof t=="string"?hy(t,n):jl&&!hx&&t instanceof HTMLImageElement?hy(t.src,n):t instanceof Uint8Array||t instanceof ArrayBuffer||t instanceof DataView?new vn(t):jl&&t instanceof Blob?Am(t,n,"blob",Vr):void Tt("Invalid input argument")}function hy(t,n){return(a=t).startsWith("data:")||a.length>1e4?Em(t,n,"base64"):Wc&&t.includes("://")?Am(t,n,"url",Lr):Wc?Em(t,n,"fs"):jl?Am(t,n,"url",Lr):void Tt("Invalid input argument");var a}async function Am(t,n,a,s){return Oi.has(a)?Em(t,n,a):s?(async function(l,u){let f=await u(l);return new vn(f)})(t,s):void Tt(`Parser ${a} is not loaded`)}async function Em(t,n,a){let s=new(Oi.get(a))(t,n);return await s.read(),s}const Lr=t=>Og(t).then((n=>n.arrayBuffer())),Vr=t=>new Promise(((n,a)=>{let s=new FileReader;s.onloadend=()=>n(s.result||new ArrayBuffer),s.onerror=a,s.readAsArrayBuffer(t)}));class yx extends Map{get tagKeys(){return this.allKeys||(this.allKeys=Array.from(this.keys())),this.allKeys}get tagValues(){return this.allValues||(this.allValues=Array.from(this.values())),this.allValues}}function bt(t,n,a){let s=new yx;for(let[l,u]of a)s.set(l,u);if(Array.isArray(n))for(let l of n)t.set(l,s);else t.set(n,s);return s}function Br(t,n,a){let s,l=t.get(n);for(s of a)l.set(s[0],s[1])}const Pt=new Map,ri=new Map,Wa=new Map,Xa=["chunked","firstChunkSize","firstChunkSizeNode","firstChunkSizeBrowser","chunkSize","chunkLimit"],Fs=["jfif","xmp","icc","iptc","ihdr"],Ur=["tiff",...Fs],mt=["ifd0","ifd1","exif","gps","interop"],qa=[...Ur,...mt],Ka=["makerNote","userComment"],Gs=["translateKeys","translateValues","reviveValues","multiSegment"],Za=[...Gs,"sanitize","mergeOutput","silentErrors"];class s_{get translate(){return this.translateKeys||this.translateValues||this.reviveValues}}class cl extends s_{get needed(){return this.enabled||this.deps.size>0}constructor(n,a,s,l){if(super(),ke(this,"enabled",!1),ke(this,"skip",new Set),ke(this,"pick",new Set),ke(this,"deps",new Set),ke(this,"translateKeys",!1),ke(this,"translateValues",!1),ke(this,"reviveValues",!1),this.key=n,this.enabled=a,this.parse=this.enabled,this.applyInheritables(l),this.canBeFiltered=mt.includes(n),this.canBeFiltered&&(this.dict=Pt.get(n)),s!==void 0)if(Array.isArray(s))this.parse=this.enabled=!0,this.canBeFiltered&&s.length>0&&this.translateTagSet(s,this.pick);else if(typeof s=="object"){if(this.enabled=!0,this.parse=s.parse!==!1,this.canBeFiltered){let{pick:u,skip:f}=s;u&&u.length>0&&this.translateTagSet(u,this.pick),f&&f.length>0&&this.translateTagSet(f,this.skip)}this.applyInheritables(s)}else s===!0||s===!1?this.parse=this.enabled=s:Tt(`Invalid options argument: ${s}`)}applyInheritables(n){let a,s;for(a of Gs)s=n[a],s!==void 0&&(this[a]=s)}translateTagSet(n,a){if(this.dict){let s,l,{tagKeys:u,tagValues:f}=this.dict;for(s of n)typeof s=="string"?(l=f.indexOf(s),l===-1&&(l=u.indexOf(Number(s))),l!==-1&&a.add(Number(u[l]))):a.add(s)}else for(let s of n)a.add(s)}finalizeFilters(){!this.enabled&&this.deps.size>0?(this.enabled=!0,Jc(this.pick,this.deps)):this.enabled&&this.pick.size>0&&Jc(this.pick,this.deps)}}var rn={jfif:!1,tiff:!0,xmp:!1,icc:!1,iptc:!1,ifd0:!0,ifd1:!1,exif:!0,gps:!0,interop:!1,ihdr:void 0,makerNote:!1,userComment:!1,multiSegment:!1,skip:[],pick:[],translateKeys:!0,translateValues:!0,reviveValues:!0,sanitize:!0,mergeOutput:!0,silentErrors:!0,chunked:!0,firstChunkSize:void 0,firstChunkSizeNode:512,firstChunkSizeBrowser:65536,chunkSize:65536,chunkLimit:5},my=new Map;class Fr extends s_{static useCached(n){let a=my.get(n);return a!==void 0||(a=new this(n),my.set(n,a)),a}constructor(n){super(),n===!0?this.setupFromTrue():n===void 0?this.setupFromUndefined():Array.isArray(n)?this.setupFromArray(n):typeof n=="object"?this.setupFromObject(n):Tt(`Invalid options argument ${n}`),this.firstChunkSize===void 0&&(this.firstChunkSize=jl?this.firstChunkSizeBrowser:this.firstChunkSizeNode),this.mergeOutput&&(this.ifd1.enabled=!1),this.filterNestedSegmentTags(),this.traverseTiffDependencyTree(),this.checkLoadedPlugins()}setupFromUndefined(){let n;for(n of Xa)this[n]=rn[n];for(n of Za)this[n]=rn[n];for(n of Ka)this[n]=rn[n];for(n of qa)this[n]=new cl(n,rn[n],void 0,this)}setupFromTrue(){let n;for(n of Xa)this[n]=rn[n];for(n of Za)this[n]=rn[n];for(n of Ka)this[n]=!0;for(n of qa)this[n]=new cl(n,!0,void 0,this)}setupFromArray(n){let a;for(a of Xa)this[a]=rn[a];for(a of Za)this[a]=rn[a];for(a of Ka)this[a]=rn[a];for(a of qa)this[a]=new cl(a,!1,void 0,this);this.setupGlobalFilters(n,void 0,mt)}setupFromObject(n){let a;for(a of(mt.ifd0=mt.ifd0||mt.image,mt.ifd1=mt.ifd1||mt.thumbnail,Object.assign(this,n),Xa))this[a]=Ih(n[a],rn[a]);for(a of Za)this[a]=Ih(n[a],rn[a]);for(a of Ka)this[a]=Ih(n[a],rn[a]);for(a of Ur)this[a]=new cl(a,rn[a],n[a],this);for(a of mt)this[a]=new cl(a,rn[a],n[a],this.tiff);this.setupGlobalFilters(n.pick,n.skip,mt,qa),n.tiff===!0?this.batchEnableWithBool(mt,!0):n.tiff===!1?this.batchEnableWithUserValue(mt,n):Array.isArray(n.tiff)?this.setupGlobalFilters(n.tiff,void 0,mt):typeof n.tiff=="object"&&this.setupGlobalFilters(n.tiff.pick,n.tiff.skip,mt)}batchEnableWithBool(n,a){for(let s of n)this[s].enabled=a}batchEnableWithUserValue(n,a){for(let s of n){let l=a[s];this[s].enabled=l!==!1&&l!==void 0}}setupGlobalFilters(n,a,s,l=s){if(n&&n.length){for(let f of l)this[f].enabled=!1;let u=gy(n,s);for(let[f,h]of u)Jc(this[f].pick,h),this[f].enabled=!0}else if(a&&a.length){let u=gy(a,s);for(let[f,h]of u)Jc(this[f].skip,h)}}filterNestedSegmentTags(){let{ifd0:n,exif:a,xmp:s,iptc:l,icc:u}=this;this.makerNote?a.deps.add(37500):a.skip.add(37500),this.userComment?a.deps.add(37510):a.skip.add(37510),s.enabled||n.skip.add(700),l.enabled||n.skip.add(33723),u.enabled||n.skip.add(34675)}traverseTiffDependencyTree(){let{ifd0:n,exif:a,gps:s,interop:l}=this;l.needed&&(a.deps.add(40965),n.deps.add(40965)),a.needed&&n.deps.add(34665),s.needed&&n.deps.add(34853),this.tiff.enabled=mt.some((u=>this[u].enabled===!0))||this.makerNote||this.userComment;for(let u of mt)this[u].finalizeFilters()}get onlyTiff(){return!Fs.map((n=>this[n].enabled)).some((n=>n===!0))&&this.tiff.enabled}checkLoadedPlugins(){for(let n of Ur)this[n].enabled&&!jt.has(n)&&Tm("segment parser",n)}}function gy(t,n){let a,s,l,u,f=[];for(l of n){for(u of(a=Pt.get(l),s=[],a))(t.includes(u[0])||t.includes(u[1]))&&s.push(u[0]);s.length&&f.push([l,s])}return f}function Ih(t,n){return t!==void 0?t:n!==void 0?n:void 0}function Jc(t,n){for(let a of n)t.add(a)}ke(Fr,"default",rn);class nr{constructor(n){ke(this,"parsers",{}),ke(this,"output",{}),ke(this,"errors",[]),ke(this,"pushToErrors",(a=>this.errors.push(a))),this.options=Fr.useCached(n)}async read(n){this.file=await vx(n,this.options)}setup(){if(this.fileParser)return;let{file:n}=this,a=n.getUint16(0);for(let[s,l]of Ei)if(l.canHandle(n,a))return this.fileParser=new l(this.options,this.file,this.parsers),n[s]=!0;this.file.close&&this.file.close(),Tt("Unknown file format")}async parse(){let{output:n,errors:a}=this;return this.setup(),this.options.silentErrors?(await this.executeParsers().catch(this.pushToErrors),a.push(...this.fileParser.errors)):await this.executeParsers(),this.file.close&&this.file.close(),this.options.silentErrors&&a.length>0&&(n.errors=a),$c(n)}async executeParsers(){let{output:n}=this;await this.fileParser.parse();let a=Object.values(this.parsers).map((async s=>{let l=await s.parse();s.assignToOutput(n,l)}));this.options.silentErrors&&(a=a.map((s=>s.catch(this.pushToErrors)))),await Promise.all(a)}async extractThumbnail(){this.setup();let{options:n,file:a}=this,s=jt.get("tiff",n);var l;if(a.tiff?l={start:0,type:"tiff"}:a.jpeg&&(l=await this.fileParser.getOrFindSegment("tiff")),l===void 0)return;let u=await this.fileParser.ensureSegmentChunk(l),f=this.parsers.tiff=new s(u,n,a),h=await f.extractThumbnail();return a.close&&a.close(),h}}async function vf(t,n){let a=new nr(n);return await a.read(t),a.parse()}var bx=Object.freeze({__proto__:null,parse:vf,Exifr:nr,fileParsers:Ei,segmentParsers:jt,fileReaders:Oi,tagKeys:Pt,tagValues:ri,tagRevivers:Wa,createDictionary:bt,extendDictionary:Br,fetchUrlAsArrayBuffer:Lr,readBlobAsArrayBuffer:Vr,chunkedProps:Xa,otherSegments:Fs,segments:Ur,tiffBlocks:mt,segmentsAndBlocks:qa,tiffExtractables:Ka,inheritables:Gs,allFormatters:Za,Options:Fr});class yf{constructor(n,a,s){ke(this,"errors",[]),ke(this,"ensureSegmentChunk",(async l=>{let u=l.start,f=l.size||65536;if(this.file.chunked)if(this.file.available(u,f))l.chunk=this.file.subarray(u,f);else try{l.chunk=await this.file.readChunk(u,f)}catch(h){Tt(`Couldn't read segment: ${JSON.stringify(l)}. ${h.message}`)}else this.file.byteLength>u+f?l.chunk=this.file.subarray(u,f):l.size===void 0?l.chunk=this.file.subarray(u):Tt("Segment unreachable: "+JSON.stringify(l));return l.chunk})),this.extendOptions&&this.extendOptions(n),this.options=n,this.file=a,this.parsers=s}injectSegment(n,a){this.options[n].enabled&&this.createParser(n,a)}createParser(n,a){let s=new(jt.get(n))(a,this.options,this.file);return this.parsers[n]=s}createParsers(n){for(let a of n){let{type:s,chunk:l}=a,u=this.options[s];if(u&&u.enabled){let f=this.parsers[s];f&&f.append||f||this.createParser(s,l)}}}async readSegments(n){let a=n.map(this.ensureSegmentChunk);await Promise.all(a)}}class ii{static findPosition(n,a){let s=n.getUint16(a+2)+2,l=typeof this.headerLength=="function"?this.headerLength(n,a,s):this.headerLength,u=a+l,f=s-l;return{offset:a,length:s,headerLength:l,start:u,size:f,end:u+f}}static parse(n,a={}){return new this(n,new Fr({[this.type]:a}),n).parse()}normalizeInput(n){return n instanceof vn?n:new vn(n)}constructor(n,a={},s){ke(this,"errors",[]),ke(this,"raw",new Map),ke(this,"handleError",(l=>{if(!this.options.silentErrors)throw l;this.errors.push(l.message)})),this.chunk=this.normalizeInput(n),this.file=s,this.type=this.constructor.type,this.globalOptions=this.options=a,this.localOptions=a[this.type],this.canTranslate=this.localOptions&&this.localOptions.translate}translate(){this.canTranslate&&(this.translated=this.translateBlock(this.raw,this.type))}get output(){return this.translated?this.translated:this.raw?Object.fromEntries(this.raw):void 0}translateBlock(n,a){let s=Wa.get(a),l=ri.get(a),u=Pt.get(a),f=this.options[a],h=f.reviveValues&&!!s,m=f.translateValues&&!!l,g=f.translateKeys&&!!u,p={};for(let[y,b]of n)h&&s.has(y)?b=s.get(y)(b):m&&l.has(y)&&(b=this.translateValue(b,l.get(y))),g&&u.has(y)&&(y=u.get(y)||y),p[y]=b;return p}translateValue(n,a){return a[n]||a.DEFAULT||n}assignToOutput(n,a){this.assignObjectToOutput(n,this.constructor.type,a)}assignObjectToOutput(n,a,s){if(this.globalOptions.mergeOutput)return Object.assign(n,s);n[a]?Object.assign(n[a],s):n[a]=s}}ke(ii,"headerLength",4),ke(ii,"type",void 0),ke(ii,"multiSegment",!1),ke(ii,"canHandle",(()=>!1));function _x(t){return t===192||t===194||t===196||t===219||t===221||t===218||t===254}function Sx(t){return t>=224&&t<=239}function wx(t,n,a){for(let[s,l]of jt)if(l.canHandle(t,n,a))return s}class py extends yf{constructor(...n){super(...n),ke(this,"appSegments",[]),ke(this,"jpegSegments",[]),ke(this,"unknownSegments",[])}static canHandle(n,a){return a===65496}async parse(){await this.findAppSegments(),await this.readSegments(this.appSegments),this.mergeMultiSegments(),this.createParsers(this.mergedAppSegments||this.appSegments)}setupSegmentFinderArgs(n){n===!0?(this.findAll=!0,this.wanted=new Set(jt.keyList())):(n=n===void 0?jt.keyList().filter((a=>this.options[a].enabled)):n.filter((a=>this.options[a].enabled&&jt.has(a))),this.findAll=!1,this.remaining=new Set(n),this.wanted=new Set(n)),this.unfinishedMultiSegment=!1}async findAppSegments(n=0,a){this.setupSegmentFinderArgs(a);let{file:s,findAll:l,wanted:u,remaining:f}=this;if(!l&&this.file.chunked&&(l=Array.from(u).some((h=>{let m=jt.get(h),g=this.options[h];return m.multiSegment&&g.multiSegment})),l&&await this.file.readWhole()),n=this.findAppSegmentsInRange(n,s.byteLength),!this.options.onlyTiff&&s.chunked){let h=!1;for(;f.size>0&&!h&&(s.canReadNextChunk||this.unfinishedMultiSegment);){let{nextChunkOffset:m}=s,g=this.appSegments.some((p=>!this.file.available(p.offset||p.start,p.length||p.size)));if(h=n>m&&!g?!await s.readNextChunk(n):!await s.readNextChunk(m),(n=this.findAppSegmentsInRange(n,s.byteLength))===void 0)return}}}findAppSegmentsInRange(n,a){a-=2;let s,l,u,f,h,m,{file:g,findAll:p,wanted:y,remaining:b,options:C}=this;for(;n<a;n++)if(g.getUint8(n)===255){if(s=g.getUint8(n+1),Sx(s)){if(l=g.getUint16(n+2),u=wx(g,n,l),u&&y.has(u)&&(f=jt.get(u),h=f.findPosition(g,n),m=C[u],h.type=u,this.appSegments.push(h),!p&&(f.multiSegment&&m.multiSegment?(this.unfinishedMultiSegment=h.chunkNumber<h.chunkCount,this.unfinishedMultiSegment||b.delete(u)):b.delete(u),b.size===0)))break;C.recordUnknownSegments&&(h=ii.findPosition(g,n),h.marker=s,this.unknownSegments.push(h)),n+=l+1}else if(_x(s)){if(l=g.getUint16(n+2),s===218&&C.stopAfterSos!==!1)return;C.recordJpegSegments&&this.jpegSegments.push({offset:n,length:l,marker:s}),n+=l+1}}return n}mergeMultiSegments(){if(!this.appSegments.some((a=>a.multiSegment)))return;let n=(function(a,s){let l,u,f,h=new Map;for(let m=0;m<a.length;m++)l=a[m],u=l[s],h.has(u)?f=h.get(u):h.set(u,f=[]),f.push(l);return Array.from(h)})(this.appSegments,"type");this.mergedAppSegments=n.map((([a,s])=>{let l=jt.get(a,this.options);return l.handleMultiSegments?{type:a,chunk:l.handleMultiSegments(s)}:s[0]}))}getSegment(n){return this.appSegments.find((a=>a.type===n))}async getOrFindSegment(n){let a=this.getSegment(n);return a===void 0&&(await this.findAppSegments(0,[n]),a=this.getSegment(n)),a}}ke(py,"type","jpeg"),Ei.set("jpeg",py);const kx=[void 0,1,1,2,4,8,1,1,2,4,8,4,8,4];class xx extends ii{parseHeader(){var n=this.chunk.getUint16();n===18761?this.le=!0:n===19789&&(this.le=!1),this.chunk.le=this.le,this.headerParsed=!0}parseTags(n,a,s=new Map){let{pick:l,skip:u}=this.options[a];l=new Set(l);let f=l.size>0,h=u.size===0,m=this.chunk.getUint16(n);n+=2;for(let g=0;g<m;g++){let p=this.chunk.getUint16(n);if(f){if(l.has(p)&&(s.set(p,this.parseTag(n,p,a)),l.delete(p),l.size===0))break}else!h&&u.has(p)||s.set(p,this.parseTag(n,p,a));n+=12}return s}parseTag(n,a,s){let{chunk:l}=this,u=l.getUint16(n+2),f=l.getUint32(n+4),h=kx[u];if(h*f<=4?n+=8:n=l.getUint32(n+8),(u<1||u>13)&&Tt(`Invalid TIFF value type. block: ${s.toUpperCase()}, tag: ${a.toString(16)}, type: ${u}, offset ${n}`),n>l.byteLength&&Tt(`Invalid TIFF value offset. block: ${s.toUpperCase()}, tag: ${a.toString(16)}, type: ${u}, offset ${n} is outside of chunk size ${l.byteLength}`),u===1)return l.getUint8Array(n,f);if(u===2)return zr(l.getString(n,f));if(u===7)return l.getUint8Array(n,f);if(f===1)return this.parseTagValue(u,n);{let m=new((function(p){switch(p){case 1:return Uint8Array;case 3:return Uint16Array;case 4:return Uint32Array;case 5:return Array;case 6:return Int8Array;case 8:return Int16Array;case 9:return Int32Array;case 10:return Array;case 11:return Float32Array;case 12:return Float64Array;default:return Array}})(u))(f),g=h;for(let p=0;p<f;p++)m[p]=this.parseTagValue(u,n),n+=g;return m}}parseTagValue(n,a){let{chunk:s}=this;switch(n){case 1:return s.getUint8(a);case 3:return s.getUint16(a);case 4:return s.getUint32(a);case 5:return s.getUint32(a)/s.getUint32(a+4);case 6:return s.getInt8(a);case 8:return s.getInt16(a);case 9:return s.getInt32(a);case 10:return s.getInt32(a)/s.getInt32(a+4);case 11:return s.getFloat(a);case 12:return s.getDouble(a);case 13:return s.getUint32(a);default:Tt(`Invalid tiff type ${n}`)}}}class Hh extends xx{static canHandle(n,a){return n.getUint8(a+1)===225&&n.getUint32(a+4)===1165519206&&n.getUint16(a+8)===0}async parse(){this.parseHeader();let{options:n}=this;return n.ifd0.enabled&&await this.parseIfd0Block(),n.exif.enabled&&await this.safeParse("parseExifBlock"),n.gps.enabled&&await this.safeParse("parseGpsBlock"),n.interop.enabled&&await this.safeParse("parseInteropBlock"),n.ifd1.enabled&&await this.safeParse("parseThumbnailBlock"),this.createOutput()}safeParse(n){let a=this[n]();return a.catch!==void 0&&(a=a.catch(this.handleError)),a}findIfd0Offset(){this.ifd0Offset===void 0&&(this.ifd0Offset=this.chunk.getUint32(4))}findIfd1Offset(){if(this.ifd1Offset===void 0){this.findIfd0Offset();let n=this.chunk.getUint16(this.ifd0Offset),a=this.ifd0Offset+2+12*n;this.ifd1Offset=this.chunk.getUint32(a)}}parseBlock(n,a){let s=new Map;return this[a]=s,this.parseTags(n,a,s),s}async parseIfd0Block(){if(this.ifd0)return;let{file:n}=this;this.findIfd0Offset(),this.ifd0Offset<8&&Tt("Malformed EXIF data"),!n.chunked&&this.ifd0Offset>n.byteLength&&Tt(`IFD0 offset points to outside of file.
this.ifd0Offset: ${this.ifd0Offset}, file.byteLength: ${n.byteLength}`),n.tiff&&await n.ensureChunk(this.ifd0Offset,Cm(this.options));let a=this.parseBlock(this.ifd0Offset,"ifd0");return a.size!==0?(this.exifOffset=a.get(34665),this.interopOffset=a.get(40965),this.gpsOffset=a.get(34853),this.xmp=a.get(700),this.iptc=a.get(33723),this.icc=a.get(34675),this.options.sanitize&&(a.delete(34665),a.delete(40965),a.delete(34853),a.delete(700),a.delete(33723),a.delete(34675)),a):void 0}async parseExifBlock(){if(this.exif||(this.ifd0||await this.parseIfd0Block(),this.exifOffset===void 0))return;this.file.tiff&&await this.file.ensureChunk(this.exifOffset,Cm(this.options));let n=this.parseBlock(this.exifOffset,"exif");return this.interopOffset||(this.interopOffset=n.get(40965)),this.makerNote=n.get(37500),this.userComment=n.get(37510),this.options.sanitize&&(n.delete(40965),n.delete(37500),n.delete(37510)),this.unpack(n,41728),this.unpack(n,41729),n}unpack(n,a){let s=n.get(a);s&&s.length===1&&n.set(a,s[0])}async parseGpsBlock(){if(this.gps||(this.ifd0||await this.parseIfd0Block(),this.gpsOffset===void 0))return;let n=this.parseBlock(this.gpsOffset,"gps");return n&&n.has(2)&&n.has(4)&&(n.set("latitude",vy(...n.get(2),n.get(1))),n.set("longitude",vy(...n.get(4),n.get(3)))),n}async parseInteropBlock(){if(!this.interop&&(this.ifd0||await this.parseIfd0Block(),this.interopOffset!==void 0||this.exif||await this.parseExifBlock(),this.interopOffset!==void 0))return this.parseBlock(this.interopOffset,"interop")}async parseThumbnailBlock(n=!1){if(!this.ifd1&&!this.ifd1Parsed&&(!this.options.mergeOutput||n))return this.findIfd1Offset(),this.ifd1Offset>0&&(this.parseBlock(this.ifd1Offset,"ifd1"),this.ifd1Parsed=!0),this.ifd1}async extractThumbnail(){if(this.headerParsed||this.parseHeader(),this.ifd1Parsed||await this.parseThumbnailBlock(!0),this.ifd1===void 0)return;let n=this.ifd1.get(513),a=this.ifd1.get(514);return this.chunk.getUint8Array(n,a)}get image(){return this.ifd0}get thumbnail(){return this.ifd1}createOutput(){let n,a,s,l={};for(a of mt)if(n=this[a],!a_(n))if(s=this.canTranslate?this.translateBlock(n,a):Object.fromEntries(n),this.options.mergeOutput){if(a==="ifd1")continue;Object.assign(l,s)}else l[a]=s;return this.makerNote&&(l.makerNote=this.makerNote),this.userComment&&(l.userComment=this.userComment),l}assignToOutput(n,a){if(this.globalOptions.mergeOutput)Object.assign(n,a);else for(let[s,l]of Object.entries(a))this.assignObjectToOutput(n,s,l)}}function vy(t,n,a,s){var l=t+n/60+a/3600;return s!=="S"&&s!=="W"||(l*=-1),l}ke(Hh,"type","tiff"),ke(Hh,"headerLength",10),jt.set("tiff",Hh);var Cx=Object.freeze({__proto__:null,default:bx,Exifr:nr,fileParsers:Ei,segmentParsers:jt,fileReaders:Oi,tagKeys:Pt,tagValues:ri,tagRevivers:Wa,createDictionary:bt,extendDictionary:Br,fetchUrlAsArrayBuffer:Lr,readBlobAsArrayBuffer:Vr,chunkedProps:Xa,otherSegments:Fs,segments:Ur,tiffBlocks:mt,segmentsAndBlocks:qa,tiffExtractables:Ka,inheritables:Gs,allFormatters:Za,Options:Fr,parse:vf});const Dg={ifd0:!1,ifd1:!1,exif:!1,gps:!1,interop:!1,sanitize:!1,reviveValues:!0,translateKeys:!1,translateValues:!1,mergeOutput:!1},zg=Object.assign({},Dg,{firstChunkSize:4e4,gps:[1,2,3,4]});async function o_(t){let n=new nr(zg);await n.read(t);let a=await n.parse();if(a&&a.gps){let{latitude:s,longitude:l}=a.gps;return{latitude:s,longitude:l}}}const Ng=Object.assign({},Dg,{tiff:!1,ifd1:!0,mergeOutput:!1});async function l_(t){let n=new nr(Ng);await n.read(t);let a=await n.extractThumbnail();return a&&pf?gf.from(a):a}async function u_(t){let n=await this.thumbnail(t);if(n!==void 0){let a=new Blob([n]);return URL.createObjectURL(a)}}const Pg=Object.assign({},Dg,{firstChunkSize:4e4,ifd0:[274]});async function Rg(t){let n=new nr(Pg);await n.read(t);let a=await n.parse();if(a&&a.ifd0)return a.ifd0[274]}const Lg=Object.freeze({1:{dimensionSwapped:!1,scaleX:1,scaleY:1,deg:0,rad:0},2:{dimensionSwapped:!1,scaleX:-1,scaleY:1,deg:0,rad:0},3:{dimensionSwapped:!1,scaleX:1,scaleY:1,deg:180,rad:180*Math.PI/180},4:{dimensionSwapped:!1,scaleX:-1,scaleY:1,deg:180,rad:180*Math.PI/180},5:{dimensionSwapped:!0,scaleX:1,scaleY:-1,deg:90,rad:90*Math.PI/180},6:{dimensionSwapped:!0,scaleX:1,scaleY:1,deg:90,rad:90*Math.PI/180},7:{dimensionSwapped:!0,scaleX:1,scaleY:-1,deg:270,rad:270*Math.PI/180},8:{dimensionSwapped:!0,scaleX:1,scaleY:1,deg:270,rad:270*Math.PI/180}});let Nr=!0,Pr=!0;if(typeof navigator=="object"){let t=navigator.userAgent;if(t.includes("iPad")||t.includes("iPhone")){let n=t.match(/OS (\d+)_(\d+)/);if(n){let[,a,s]=n;Nr=Number(a)+.1*Number(s)<13.4,Pr=!1}}else if(t.includes("OS X 10")){let[,n]=t.match(/OS X 10[_.](\d+)/);Nr=Pr=Number(n)<15}if(t.includes("Chrome/")){let[,n]=t.match(/Chrome\/(\d+)/);Nr=Pr=Number(n)<81}else if(t.includes("Firefox/")){let[,n]=t.match(/Firefox\/(\d+)/);Nr=Pr=Number(n)<77}}async function c_(t){let n=await Rg(t);return Object.assign({canvas:Nr,css:Pr},Lg[n])}class jx extends vn{constructor(...n){super(...n),ke(this,"ranges",new Tx),this.byteLength!==0&&this.ranges.add(0,this.byteLength)}_tryExtend(n,a,s){if(n===0&&this.byteLength===0&&s){let l=new DataView(s.buffer||s,s.byteOffset,s.byteLength);this._swapDataView(l)}else{let l=n+a;if(l>this.byteLength){let{dataView:u}=this._extend(l);this._swapDataView(u)}}}_extend(n){let a;a=pf?gf.allocUnsafe(n):new Uint8Array(n);let s=new DataView(a.buffer,a.byteOffset,a.byteLength);return a.set(new Uint8Array(this.buffer,this.byteOffset,this.byteLength),0),{uintView:a,dataView:s}}subarray(n,a,s=!1){return a=a||this._lengthToEnd(n),s&&this._tryExtend(n,a),this.ranges.add(n,a),super.subarray(n,a)}set(n,a,s=!1){s&&this._tryExtend(a,n.byteLength,n);let l=super.set(n,a);return this.ranges.add(a,l.byteLength),l}async ensureChunk(n,a){this.chunked&&(this.ranges.available(n,a)||await this.readChunk(n,a))}available(n,a){return this.ranges.available(n,a)}}class Tx{constructor(){ke(this,"list",[])}get length(){return this.list.length}add(n,a,s=0){let l=n+a,u=this.list.filter((f=>yy(n,f.offset,l)||yy(n,f.end,l)));if(u.length>0){n=Math.min(n,...u.map((h=>h.offset))),l=Math.max(l,...u.map((h=>h.end))),a=l-n;let f=u.shift();f.offset=n,f.length=a,f.end=l,this.list=this.list.filter((h=>!u.includes(h)))}else this.list.push({offset:n,length:a,end:l})}available(n,a){let s=n+a;return this.list.some((l=>l.offset<=n&&s<=l.end))}}function yy(t,n,a){return t<=n&&n<=a}class bf extends jx{constructor(n,a){super(0),ke(this,"chunksRead",0),this.input=n,this.options=a}async readWhole(){this.chunked=!1,await this.readChunk(this.nextChunkOffset)}async readChunked(){this.chunked=!0,await this.readChunk(0,this.options.firstChunkSize)}async readNextChunk(n=this.nextChunkOffset){if(this.fullyRead)return this.chunksRead++,!1;let a=this.options.chunkSize,s=await this.readChunk(n,a);return!!s&&s.byteLength===a}async readChunk(n,a){if(this.chunksRead++,(a=this.safeWrapAddress(n,a))!==0)return this._readChunk(n,a)}safeWrapAddress(n,a){return this.size!==void 0&&n+a>this.size?Math.max(0,this.size-n):a}get nextChunkOffset(){if(this.ranges.list.length!==0)return this.ranges.list[0].length}get canReadNextChunk(){return this.chunksRead<this.options.chunkLimit}get fullyRead(){return this.size!==void 0&&this.nextChunkOffset===this.size}read(){return this.options.chunked?this.readChunked():this.readWhole()}close(){}}Oi.set("blob",class extends bf{async readWhole(){this.chunked=!1;let t=await Vr(this.input);this._swapArrayBuffer(t)}readChunked(){return this.chunked=!0,this.size=this.input.size,super.readChunked()}async _readChunk(t,n){let a=n?t+n:void 0,s=this.input.slice(t,a),l=await Vr(s);return this.set(l,t,!0)}});var Ax=Object.freeze({__proto__:null,default:Cx,Exifr:nr,fileParsers:Ei,segmentParsers:jt,fileReaders:Oi,tagKeys:Pt,tagValues:ri,tagRevivers:Wa,createDictionary:bt,extendDictionary:Br,fetchUrlAsArrayBuffer:Lr,readBlobAsArrayBuffer:Vr,chunkedProps:Xa,otherSegments:Fs,segments:Ur,tiffBlocks:mt,segmentsAndBlocks:qa,tiffExtractables:Ka,inheritables:Gs,allFormatters:Za,Options:Fr,parse:vf,gpsOnlyOptions:zg,gps:o_,thumbnailOnlyOptions:Ng,thumbnail:l_,thumbnailUrl:u_,orientationOnlyOptions:Pg,orientation:Rg,rotations:Lg,get rotateCanvas(){return Nr},get rotateCss(){return Pr},rotation:c_});Oi.set("url",class extends bf{async readWhole(){this.chunked=!1;let t=await Lr(this.input);t instanceof ArrayBuffer?this._swapArrayBuffer(t):t instanceof Uint8Array&&this._swapBuffer(t)}async _readChunk(t,n){let a=n?t+n-1:void 0,s=this.options.httpHeaders||{};(t||a)&&(s.range=`bytes=${[t,a].join("-")}`);let l=await Og(this.input,{headers:s}),u=await l.arrayBuffer(),f=u.byteLength;if(l.status!==416)return f!==n&&(this.size=t+f),this.set(u,t,!0)}});vn.prototype.getUint64=function(t){let n=this.getUint32(t),a=this.getUint32(t+4);return n<1048575?n<<32|a:typeof wc!==void 0?(console.warn("Using BigInt because of type 64uint but JS can only handle 53b numbers."),wc(n)<<wc(32)|wc(a)):void Tt("Trying to read 64b value but JS can only handle 53b numbers.")};class Ex extends yf{parseBoxes(n=0){let a=[];for(;n<this.file.byteLength-4;){let s=this.parseBoxHead(n);if(a.push(s),s.length===0)break;n+=s.length}return a}parseSubBoxes(n){n.boxes=this.parseBoxes(n.start)}findBox(n,a){return n.boxes===void 0&&this.parseSubBoxes(n),n.boxes.find((s=>s.kind===a))}parseBoxHead(n){let a=this.file.getUint32(n),s=this.file.getString(n+4,4),l=n+8;return a===1&&(a=this.file.getUint64(n+8),l+=8),{offset:n,length:a,kind:s,start:l}}parseBoxFullHead(n){if(n.version!==void 0)return;let a=this.file.getUint32(n.start);n.version=a>>24,n.start+=4}}class f_ extends Ex{static canHandle(n,a){if(a!==0)return!1;let s=n.getUint16(2);if(s>50)return!1;let l=16,u=[];for(;l<s;)u.push(n.getString(l,4)),l+=4;return u.includes(this.type)}async parse(){let n=this.file.getUint32(0),a=this.parseBoxHead(n);for(;a.kind!=="meta";)n+=a.length,await this.file.ensureChunk(n,16),a=this.parseBoxHead(n);await this.file.ensureChunk(a.offset,a.length),this.parseBoxFullHead(a),this.parseSubBoxes(a),this.options.icc.enabled&&await this.findIcc(a),this.options.tiff.enabled&&await this.findExif(a)}async registerSegment(n,a,s){await this.file.ensureChunk(a,s);let l=this.file.subarray(a,s);this.createParser(n,l)}async findIcc(n){let a=this.findBox(n,"iprp");if(a===void 0)return;let s=this.findBox(a,"ipco");if(s===void 0)return;let l=this.findBox(s,"colr");l!==void 0&&await this.registerSegment("icc",l.offset+12,l.length)}async findExif(n){let a=this.findBox(n,"iinf");if(a===void 0)return;let s=this.findBox(n,"iloc");if(s===void 0)return;let l=this.findExifLocIdInIinf(a),u=this.findExtentInIloc(s,l);if(u===void 0)return;let[f,h]=u;await this.file.ensureChunk(f,h);let m=4+this.file.getUint32(f);f+=m,h-=m,await this.registerSegment("tiff",f,h)}findExifLocIdInIinf(n){this.parseBoxFullHead(n);let a,s,l,u,f=n.start,h=this.file.getUint16(f);for(f+=2;h--;){if(a=this.parseBoxHead(f),this.parseBoxFullHead(a),s=a.start,a.version>=2&&(l=a.version===3?4:2,u=this.file.getString(s+l+2,4),u==="Exif"))return this.file.getUintBytes(s,l);f+=a.length}}get8bits(n){let a=this.file.getUint8(n);return[a>>4,15&a]}findExtentInIloc(n,a){this.parseBoxFullHead(n);let s=n.start,[l,u]=this.get8bits(s++),[f,h]=this.get8bits(s++),m=n.version===2?4:2,g=n.version===1||n.version===2?2:0,p=h+l+u,y=n.version===2?4:2,b=this.file.getUintBytes(s,y);for(s+=y;b--;){let C=this.file.getUintBytes(s,m);s+=m+g+2+f;let x=this.file.getUint16(s);if(s+=2,C===a)return x>1&&console.warn(`ILOC box has more than one extent but we're only processing one
Please create an issue at https://github.com/MikeKovarik/exifr with this file`),[this.file.getUintBytes(s+h,l),this.file.getUintBytes(s+h+l,u)];s+=x*p}}}class d_ extends f_{}ke(d_,"type","heic");class by extends f_{}ke(by,"type","avif"),Ei.set("heic",d_),Ei.set("avif",by),bt(Pt,["ifd0","ifd1"],[[256,"ImageWidth"],[257,"ImageHeight"],[258,"BitsPerSample"],[259,"Compression"],[262,"PhotometricInterpretation"],[270,"ImageDescription"],[271,"Make"],[272,"Model"],[273,"StripOffsets"],[274,"Orientation"],[277,"SamplesPerPixel"],[278,"RowsPerStrip"],[279,"StripByteCounts"],[282,"XResolution"],[283,"YResolution"],[284,"PlanarConfiguration"],[296,"ResolutionUnit"],[301,"TransferFunction"],[305,"Software"],[306,"ModifyDate"],[315,"Artist"],[316,"HostComputer"],[317,"Predictor"],[318,"WhitePoint"],[319,"PrimaryChromaticities"],[513,"ThumbnailOffset"],[514,"ThumbnailLength"],[529,"YCbCrCoefficients"],[530,"YCbCrSubSampling"],[531,"YCbCrPositioning"],[532,"ReferenceBlackWhite"],[700,"ApplicationNotes"],[33432,"Copyright"],[33723,"IPTC"],[34665,"ExifIFD"],[34675,"ICC"],[34853,"GpsIFD"],[330,"SubIFD"],[40965,"InteropIFD"],[40091,"XPTitle"],[40092,"XPComment"],[40093,"XPAuthor"],[40094,"XPKeywords"],[40095,"XPSubject"]]),bt(Pt,"exif",[[33434,"ExposureTime"],[33437,"FNumber"],[34850,"ExposureProgram"],[34852,"SpectralSensitivity"],[34855,"ISO"],[34858,"TimeZoneOffset"],[34859,"SelfTimerMode"],[34864,"SensitivityType"],[34865,"StandardOutputSensitivity"],[34866,"RecommendedExposureIndex"],[34867,"ISOSpeed"],[34868,"ISOSpeedLatitudeyyy"],[34869,"ISOSpeedLatitudezzz"],[36864,"ExifVersion"],[36867,"DateTimeOriginal"],[36868,"CreateDate"],[36873,"GooglePlusUploadCode"],[36880,"OffsetTime"],[36881,"OffsetTimeOriginal"],[36882,"OffsetTimeDigitized"],[37121,"ComponentsConfiguration"],[37122,"CompressedBitsPerPixel"],[37377,"ShutterSpeedValue"],[37378,"ApertureValue"],[37379,"BrightnessValue"],[37380,"ExposureCompensation"],[37381,"MaxApertureValue"],[37382,"SubjectDistance"],[37383,"MeteringMode"],[37384,"LightSource"],[37385,"Flash"],[37386,"FocalLength"],[37393,"ImageNumber"],[37394,"SecurityClassification"],[37395,"ImageHistory"],[37396,"SubjectArea"],[37500,"MakerNote"],[37510,"UserComment"],[37520,"SubSecTime"],[37521,"SubSecTimeOriginal"],[37522,"SubSecTimeDigitized"],[37888,"AmbientTemperature"],[37889,"Humidity"],[37890,"Pressure"],[37891,"WaterDepth"],[37892,"Acceleration"],[37893,"CameraElevationAngle"],[40960,"FlashpixVersion"],[40961,"ColorSpace"],[40962,"ExifImageWidth"],[40963,"ExifImageHeight"],[40964,"RelatedSoundFile"],[41483,"FlashEnergy"],[41486,"FocalPlaneXResolution"],[41487,"FocalPlaneYResolution"],[41488,"FocalPlaneResolutionUnit"],[41492,"SubjectLocation"],[41493,"ExposureIndex"],[41495,"SensingMethod"],[41728,"FileSource"],[41729,"SceneType"],[41730,"CFAPattern"],[41985,"CustomRendered"],[41986,"ExposureMode"],[41987,"WhiteBalance"],[41988,"DigitalZoomRatio"],[41989,"FocalLengthIn35mmFormat"],[41990,"SceneCaptureType"],[41991,"GainControl"],[41992,"Contrast"],[41993,"Saturation"],[41994,"Sharpness"],[41996,"SubjectDistanceRange"],[42016,"ImageUniqueID"],[42032,"OwnerName"],[42033,"SerialNumber"],[42034,"LensInfo"],[42035,"LensMake"],[42036,"LensModel"],[42037,"LensSerialNumber"],[42080,"CompositeImage"],[42081,"CompositeImageCount"],[42082,"CompositeImageExposureTimes"],[42240,"Gamma"],[59932,"Padding"],[59933,"OffsetSchema"],[65e3,"OwnerName"],[65001,"SerialNumber"],[65002,"Lens"],[65100,"RawFile"],[65101,"Converter"],[65102,"WhiteBalance"],[65105,"Exposure"],[65106,"Shadows"],[65107,"Brightness"],[65108,"Contrast"],[65109,"Saturation"],[65110,"Sharpness"],[65111,"Smoothness"],[65112,"MoireFilter"],[40965,"InteropIFD"]]),bt(Pt,"gps",[[0,"GPSVersionID"],[1,"GPSLatitudeRef"],[2,"GPSLatitude"],[3,"GPSLongitudeRef"],[4,"GPSLongitude"],[5,"GPSAltitudeRef"],[6,"GPSAltitude"],[7,"GPSTimeStamp"],[8,"GPSSatellites"],[9,"GPSStatus"],[10,"GPSMeasureMode"],[11,"GPSDOP"],[12,"GPSSpeedRef"],[13,"GPSSpeed"],[14,"GPSTrackRef"],[15,"GPSTrack"],[16,"GPSImgDirectionRef"],[17,"GPSImgDirection"],[18,"GPSMapDatum"],[19,"GPSDestLatitudeRef"],[20,"GPSDestLatitude"],[21,"GPSDestLongitudeRef"],[22,"GPSDestLongitude"],[23,"GPSDestBearingRef"],[24,"GPSDestBearing"],[25,"GPSDestDistanceRef"],[26,"GPSDestDistance"],[27,"GPSProcessingMethod"],[28,"GPSAreaInformation"],[29,"GPSDateStamp"],[30,"GPSDifferential"],[31,"GPSHPositioningError"]]),bt(ri,["ifd0","ifd1"],[[274,{1:"Horizontal (normal)",2:"Mirror horizontal",3:"Rotate 180",4:"Mirror vertical",5:"Mirror horizontal and rotate 270 CW",6:"Rotate 90 CW",7:"Mirror horizontal and rotate 90 CW",8:"Rotate 270 CW"}],[296,{1:"None",2:"inches",3:"cm"}]]);let bl=bt(ri,"exif",[[34850,{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"}],[37121,{0:"-",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}],[37383,{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"}],[37384,{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"}],[37385,{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"}],[41495,{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"}],[41728,{1:"Film Scanner",2:"Reflection Print Scanner",3:"Digital Camera"}],[41729,{1:"Directly photographed"}],[41985,{0:"Normal",1:"Custom",2:"HDR (no original saved)",3:"HDR (original saved)",4:"Original (for HDR)",6:"Panorama",7:"Portrait HDR",8:"Portrait"}],[41986,{0:"Auto",1:"Manual",2:"Auto bracket"}],[41987,{0:"Auto",1:"Manual"}],[41990,{0:"Standard",1:"Landscape",2:"Portrait",3:"Night",4:"Other"}],[41991,{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"}],[41996,{0:"Unknown",1:"Macro",2:"Close",3:"Distant"}],[42080,{0:"Unknown",1:"Not a Composite Image",2:"General Composite Image",3:"Composite Image Captured While Shooting"}]]);const _y={1:"No absolute unit of measurement",2:"Inch",3:"Centimeter"};bl.set(37392,_y),bl.set(41488,_y);const Fh={0:"Normal",1:"Low",2:"High"};function Sy(t){return typeof t=="object"&&t.length!==void 0?t[0]:t}function wy(t){let n=Array.from(t).slice(1);return n[1]>15&&(n=n.map((a=>String.fromCharCode(a)))),n[2]!=="0"&&n[2]!==0||n.pop(),n.join(".")}function Gh(t){if(typeof t=="string"){var[n,a,s,l,u,f]=t.trim().split(/[-: ]/g).map(Number),h=new Date(n,a-1,s);return Number.isNaN(l)||Number.isNaN(u)||Number.isNaN(f)||(h.setHours(l),h.setMinutes(u),h.setSeconds(f)),Number.isNaN(+h)?t:h}}function fl(t){if(typeof t=="string")return t;let n=[];if(t[1]===0&&t[t.length-1]===0)for(let a=0;a<t.length;a+=2)n.push(ky(t[a+1],t[a]));else for(let a=0;a<t.length;a+=2)n.push(ky(t[a],t[a+1]));return zr(String.fromCodePoint(...n))}function ky(t,n){return t<<8|n}bl.set(41992,Fh),bl.set(41993,Fh),bl.set(41994,Fh),bt(Wa,["ifd0","ifd1"],[[50827,function(t){return typeof t!="string"?r_(t):t}],[306,Gh],[40091,fl],[40092,fl],[40093,fl],[40094,fl],[40095,fl]]),bt(Wa,"exif",[[40960,wy],[36864,wy],[36867,Gh],[36868,Gh],[40962,Sy],[40963,Sy]]),bt(Wa,"gps",[[0,t=>Array.from(t).join(".")],[7,t=>Array.from(t).join(":")]]);class Yh extends ii{static canHandle(n,a){return n.getUint8(a+1)===225&&n.getUint32(a+4)===1752462448&&n.getString(a+4,20)==="http://ns.adobe.com/"}static headerLength(n,a){return n.getString(a+4,34)==="http://ns.adobe.com/xmp/extension/"?79:33}static findPosition(n,a){let s=super.findPosition(n,a);return s.multiSegment=s.extended=s.headerLength===79,s.multiSegment?(s.chunkCount=n.getUint8(a+72),s.chunkNumber=n.getUint8(a+76),n.getUint8(a+77)!==0&&s.chunkNumber++):(s.chunkCount=1/0,s.chunkNumber=-1),s}static handleMultiSegments(n){return n.map((a=>a.chunk.getString())).join("")}normalizeInput(n){return typeof n=="string"?n:vn.from(n).getString()}parse(n=this.chunk){if(!this.localOptions.parse)return n;n=(function(u){let f={},h={};for(let m of p_)f[m]=[],h[m]=0;return u.replace(zx,((m,g,p)=>{if(g==="<"){let y=++h[p];return f[p].push(y),`${m}#${y}`}return`${m}#${f[p].pop()}`}))})(n);let a=Ls.findAll(n,"rdf","Description");a.length===0&&a.push(new Ls("rdf","Description",void 0,n));let s,l={};for(let u of a)for(let f of u.properties)s=Dx(f.ns,l),h_(f,s);return(function(u){let f;for(let h in u)f=u[h]=$c(u[h]),f===void 0&&delete u[h];return $c(u)})(l)}assignToOutput(n,a){if(this.localOptions.parse)for(let[s,l]of Object.entries(a))switch(s){case"tiff":this.assignObjectToOutput(n,"ifd0",l);break;case"exif":this.assignObjectToOutput(n,"exif",l);break;case"xmlns":break;default:this.assignObjectToOutput(n,s,l)}else n.xmp=a}}ke(Yh,"type","xmp"),ke(Yh,"multiSegment",!0),jt.set("xmp",Yh);class ef{static findAll(n){return m_(n,/([a-zA-Z0-9-]+):([a-zA-Z0-9-]+)=("[^"]*"|'[^']*')/gm).map(ef.unpackMatch)}static unpackMatch(n){let a=n[1],s=n[2],l=n[3].slice(1,-1);return l=g_(l),new ef(a,s,l)}constructor(n,a,s){this.ns=n,this.name=a,this.value=s}serialize(){return this.value}}class Ls{static findAll(n,a,s){if(a!==void 0||s!==void 0){a=a||"[\\w\\d-]+",s=s||"[\\w\\d-]+";var l=new RegExp(`<(${a}):(${s})(#\\d+)?((\\s+?[\\w\\d-:]+=("[^"]*"|'[^']*'))*\\s*)(\\/>|>([\\s\\S]*?)<\\/\\1:\\2\\3>)`,"gm")}else l=/<([\w\d-]+):([\w\d-]+)(#\d+)?((\s+?[\w\d-:]+=("[^"]*"|'[^']*'))*\s*)(\/>|>([\s\S]*?)<\/\1:\2\3>)/gm;return m_(n,l).map(Ls.unpackMatch)}static unpackMatch(n){let a=n[1],s=n[2],l=n[4],u=n[8];return new Ls(a,s,l,u)}constructor(n,a,s,l){this.ns=n,this.name=a,this.attrString=s,this.innerXml=l,this.attrs=ef.findAll(s),this.children=Ls.findAll(l),this.value=this.children.length===0?g_(l):void 0,this.properties=[...this.attrs,...this.children]}get isPrimitive(){return this.value!==void 0&&this.attrs.length===0&&this.children.length===0}get isListContainer(){return this.children.length===1&&this.children[0].isList}get isList(){let{ns:n,name:a}=this;return n==="rdf"&&(a==="Seq"||a==="Bag"||a==="Alt")}get isListItem(){return this.ns==="rdf"&&this.name==="li"}serialize(){if(this.properties.length===0&&this.value===void 0)return;if(this.isPrimitive)return this.value;if(this.isListContainer)return this.children[0].serialize();if(this.isList)return Mx(this.children.map(Ox));if(this.isListItem&&this.children.length===1&&this.attrs.length===0)return this.children[0].serialize();let n={};for(let a of this.properties)h_(a,n);return this.value!==void 0&&(n.value=this.value),$c(n)}}function h_(t,n){let a=t.serialize();a!==void 0&&(n[t.name]=a)}var Ox=t=>t.serialize(),Mx=t=>t.length===1?t[0]:t,Dx=(t,n)=>n[t]?n[t]:n[t]={};function m_(t,n){let a,s=[];if(!t)return s;for(;(a=n.exec(t))!==null;)s.push(a);return s}function g_(t){if((function(s){return s==null||s==="null"||s==="undefined"||s===""||s.trim()===""})(t))return;let n=Number(t);if(!Number.isNaN(n))return n;let a=t.toLowerCase();return a==="true"||a!=="false"&&t.trim()}const p_=["rdf:li","rdf:Seq","rdf:Bag","rdf:Alt","rdf:Description"],zx=new RegExp(`(<|\\/)(${p_.join("|")})`,"g");var Nx=Object.freeze({__proto__:null,default:Ax,Exifr:nr,fileParsers:Ei,segmentParsers:jt,fileReaders:Oi,tagKeys:Pt,tagValues:ri,tagRevivers:Wa,createDictionary:bt,extendDictionary:Br,fetchUrlAsArrayBuffer:Lr,readBlobAsArrayBuffer:Vr,chunkedProps:Xa,otherSegments:Fs,segments:Ur,tiffBlocks:mt,segmentsAndBlocks:qa,tiffExtractables:Ka,inheritables:Gs,allFormatters:Za,Options:Fr,parse:vf,gpsOnlyOptions:zg,gps:o_,thumbnailOnlyOptions:Ng,thumbnail:l_,thumbnailUrl:u_,orientationOnlyOptions:Pg,orientation:Rg,rotations:Lg,get rotateCanvas(){return Nr},get rotateCss(){return Pr},rotation:c_});let xy=Qc("fs",(t=>t.promises));Oi.set("fs",class extends bf{async readWhole(){this.chunked=!1,this.fs=await xy;let t=await this.fs.readFile(this.input);this._swapBuffer(t)}async readChunked(){this.chunked=!0,this.fs=await xy,await this.open(),await this.readChunk(0,this.options.firstChunkSize)}async open(){this.fh===void 0&&(this.fh=await this.fs.open(this.input,"r"),this.size=(await this.fh.stat(this.input)).size)}async _readChunk(t,n){this.fh===void 0&&await this.open(),t+n>this.size&&(n=this.size-t);var a=this.subarray(t,n,!0);return await this.fh.read(a.dataView,0,n,t),a}async close(){if(this.fh){let t=this.fh;this.fh=void 0,await t.close()}}});Oi.set("base64",class extends bf{constructor(...t){super(...t),this.input=this.input.replace(/^data:([^;]+);base64,/gim,""),this.size=this.input.length/4*3,this.input.endsWith("==")?this.size-=2:this.input.endsWith("=")&&(this.size-=1)}async _readChunk(t,n){let a,s,l=this.input;t===void 0?(t=0,a=0,s=0):(a=4*Math.floor(t/3),s=t-a/4*3),n===void 0&&(n=this.size);let u=t+n,f=a+4*Math.ceil(u/3);l=l.slice(a,f);let h=Math.min(n,this.size-t);if(pf){let m=gf.from(l,"base64").slice(s,s+h);return this.set(m,t,!0)}{let m=this.subarray(t,h,!0),g=atob(l),p=m.toUint8();for(let y=0;y<h;y++)p[y]=g.charCodeAt(s+y);return m}}});class Cy extends yf{static canHandle(n,a){return a===18761||a===19789}extendOptions(n){let{ifd0:a,xmp:s,iptc:l,icc:u}=n;s.enabled&&a.deps.add(700),l.enabled&&a.deps.add(33723),u.enabled&&a.deps.add(34675),a.finalizeFilters()}async parse(){let{tiff:n,xmp:a,iptc:s,icc:l}=this.options;if(n.enabled||a.enabled||s.enabled||l.enabled){let u=Math.max(Cm(this.options),this.options.chunkSize);await this.file.ensureChunk(0,u),this.createParser("tiff",this.file),this.parsers.tiff.parseHeader(),await this.parsers.tiff.parseIfd0Block(),this.adaptTiffPropAsSegment("xmp"),this.adaptTiffPropAsSegment("iptc"),this.adaptTiffPropAsSegment("icc")}}adaptTiffPropAsSegment(n){if(this.parsers.tiff[n]){let a=this.parsers.tiff[n];this.injectSegment(n,a)}}}ke(Cy,"type","tiff"),Ei.set("tiff",Cy);let Px=Qc("zlib");const Rx=["ihdr","iccp","text","itxt","exif"];class jy extends yf{constructor(...n){super(...n),ke(this,"catchError",(a=>this.errors.push(a))),ke(this,"metaChunks",[]),ke(this,"unknownChunks",[])}static canHandle(n,a){return a===35152&&n.getUint32(0)===2303741511&&n.getUint32(4)===218765834}async parse(){let{file:n}=this;await this.findPngChunksInRange(8,n.byteLength),await this.readSegments(this.metaChunks),this.findIhdr(),this.parseTextChunks(),await this.findExif().catch(this.catchError),await this.findXmp().catch(this.catchError),await this.findIcc().catch(this.catchError)}async findPngChunksInRange(n,a){let{file:s}=this;for(;n<a;){let l=s.getUint32(n),u=s.getUint32(n+4),f=s.getString(n+4,4).toLowerCase(),h=l+4+4+4,m={type:f,offset:n,length:h,start:n+4+4,size:l,marker:u};Rx.includes(f)?this.metaChunks.push(m):this.unknownChunks.push(m),n+=h}}parseTextChunks(){let n=this.metaChunks.filter((a=>a.type==="text"));for(let a of n){let[s,l]=this.file.getString(a.start,a.size).split("\0");this.injectKeyValToIhdr(s,l)}}injectKeyValToIhdr(n,a){let s=this.parsers.ihdr;s&&s.raw.set(n,a)}findIhdr(){let n=this.metaChunks.find((a=>a.type==="ihdr"));n&&this.options.ihdr.enabled!==!1&&this.createParser("ihdr",n.chunk)}async findExif(){let n=this.metaChunks.find((a=>a.type==="exif"));n&&this.injectSegment("tiff",n.chunk)}async findXmp(){let n=this.metaChunks.filter((a=>a.type==="itxt"));for(let a of n)a.chunk.getString(0,17)==="XML:com.adobe.xmp"&&this.injectSegment("xmp",a.chunk)}async findIcc(){let n=this.metaChunks.find((h=>h.type==="iccp"));if(!n)return;let{chunk:a}=n,s=a.getUint8Array(0,81),l=0;for(;l<80&&s[l]!==0;)l++;let u=l+2,f=a.getString(0,l);if(this.injectKeyValToIhdr("ProfileName",f),Wc){let h=await Px,m=a.getUint8Array(u);m=h.inflateSync(m),this.injectSegment("icc",m)}}}ke(jy,"type","png"),Ei.set("png",jy),bt(Pt,"interop",[[1,"InteropIndex"],[2,"InteropVersion"],[4096,"RelatedImageFileFormat"],[4097,"RelatedImageWidth"],[4098,"RelatedImageHeight"]]),Br(Pt,"ifd0",[[11,"ProcessingSoftware"],[254,"SubfileType"],[255,"OldSubfileType"],[263,"Thresholding"],[264,"CellWidth"],[265,"CellLength"],[266,"FillOrder"],[269,"DocumentName"],[280,"MinSampleValue"],[281,"MaxSampleValue"],[285,"PageName"],[286,"XPosition"],[287,"YPosition"],[290,"GrayResponseUnit"],[297,"PageNumber"],[321,"HalftoneHints"],[322,"TileWidth"],[323,"TileLength"],[332,"InkSet"],[337,"TargetPrinter"],[18246,"Rating"],[18249,"RatingPercent"],[33550,"PixelScale"],[34264,"ModelTransform"],[34377,"PhotoshopSettings"],[50706,"DNGVersion"],[50707,"DNGBackwardVersion"],[50708,"UniqueCameraModel"],[50709,"LocalizedCameraModel"],[50736,"DNGLensInfo"],[50739,"ShadowScale"],[50740,"DNGPrivateData"],[33920,"IntergraphMatrix"],[33922,"ModelTiePoint"],[34118,"SEMInfo"],[34735,"GeoTiffDirectory"],[34736,"GeoTiffDoubleParams"],[34737,"GeoTiffAsciiParams"],[50341,"PrintIM"],[50721,"ColorMatrix1"],[50722,"ColorMatrix2"],[50723,"CameraCalibration1"],[50724,"CameraCalibration2"],[50725,"ReductionMatrix1"],[50726,"ReductionMatrix2"],[50727,"AnalogBalance"],[50728,"AsShotNeutral"],[50729,"AsShotWhiteXY"],[50730,"BaselineExposure"],[50731,"BaselineNoise"],[50732,"BaselineSharpness"],[50734,"LinearResponseLimit"],[50735,"CameraSerialNumber"],[50741,"MakerNoteSafety"],[50778,"CalibrationIlluminant1"],[50779,"CalibrationIlluminant2"],[50781,"RawDataUniqueID"],[50827,"OriginalRawFileName"],[50828,"OriginalRawFileData"],[50831,"AsShotICCProfile"],[50832,"AsShotPreProfileMatrix"],[50833,"CurrentICCProfile"],[50834,"CurrentPreProfileMatrix"],[50879,"ColorimetricReference"],[50885,"SRawType"],[50898,"PanasonicTitle"],[50899,"PanasonicTitle2"],[50931,"CameraCalibrationSig"],[50932,"ProfileCalibrationSig"],[50933,"ProfileIFD"],[50934,"AsShotProfileName"],[50936,"ProfileName"],[50937,"ProfileHueSatMapDims"],[50938,"ProfileHueSatMapData1"],[50939,"ProfileHueSatMapData2"],[50940,"ProfileToneCurve"],[50941,"ProfileEmbedPolicy"],[50942,"ProfileCopyright"],[50964,"ForwardMatrix1"],[50965,"ForwardMatrix2"],[50966,"PreviewApplicationName"],[50967,"PreviewApplicationVersion"],[50968,"PreviewSettingsName"],[50969,"PreviewSettingsDigest"],[50970,"PreviewColorSpace"],[50971,"PreviewDateTime"],[50972,"RawImageDigest"],[50973,"OriginalRawFileDigest"],[50981,"ProfileLookTableDims"],[50982,"ProfileLookTableData"],[51043,"TimeCodes"],[51044,"FrameRate"],[51058,"TStop"],[51081,"ReelName"],[51089,"OriginalDefaultFinalSize"],[51090,"OriginalBestQualitySize"],[51091,"OriginalDefaultCropSize"],[51105,"CameraLabel"],[51107,"ProfileHueSatMapEncoding"],[51108,"ProfileLookTableEncoding"],[51109,"BaselineExposureOffset"],[51110,"DefaultBlackRender"],[51111,"NewRawImageDigest"],[51112,"RawToPreviewGain"]]);let Ty=[[273,"StripOffsets"],[279,"StripByteCounts"],[288,"FreeOffsets"],[289,"FreeByteCounts"],[291,"GrayResponseCurve"],[292,"T4Options"],[293,"T6Options"],[300,"ColorResponseUnit"],[320,"ColorMap"],[324,"TileOffsets"],[325,"TileByteCounts"],[326,"BadFaxLines"],[327,"CleanFaxData"],[328,"ConsecutiveBadFaxLines"],[330,"SubIFD"],[333,"InkNames"],[334,"NumberofInks"],[336,"DotRange"],[338,"ExtraSamples"],[339,"SampleFormat"],[340,"SMinSampleValue"],[341,"SMaxSampleValue"],[342,"TransferRange"],[343,"ClipPath"],[344,"XClipPathUnits"],[345,"YClipPathUnits"],[346,"Indexed"],[347,"JPEGTables"],[351,"OPIProxy"],[400,"GlobalParametersIFD"],[401,"ProfileType"],[402,"FaxProfile"],[403,"CodingMethods"],[404,"VersionYear"],[405,"ModeNumber"],[433,"Decode"],[434,"DefaultImageColor"],[435,"T82Options"],[437,"JPEGTables"],[512,"JPEGProc"],[515,"JPEGRestartInterval"],[517,"JPEGLosslessPredictors"],[518,"JPEGPointTransforms"],[519,"JPEGQTables"],[520,"JPEGDCTables"],[521,"JPEGACTables"],[559,"StripRowCounts"],[999,"USPTOMiscellaneous"],[18247,"XP_DIP_XML"],[18248,"StitchInfo"],[28672,"SonyRawFileType"],[28688,"SonyToneCurve"],[28721,"VignettingCorrection"],[28722,"VignettingCorrParams"],[28724,"ChromaticAberrationCorrection"],[28725,"ChromaticAberrationCorrParams"],[28726,"DistortionCorrection"],[28727,"DistortionCorrParams"],[29895,"SonyCropTopLeft"],[29896,"SonyCropSize"],[32781,"ImageID"],[32931,"WangTag1"],[32932,"WangAnnotation"],[32933,"WangTag3"],[32934,"WangTag4"],[32953,"ImageReferencePoints"],[32954,"RegionXformTackPoint"],[32955,"WarpQuadrilateral"],[32956,"AffineTransformMat"],[32995,"Matteing"],[32996,"DataType"],[32997,"ImageDepth"],[32998,"TileDepth"],[33300,"ImageFullWidth"],[33301,"ImageFullHeight"],[33302,"TextureFormat"],[33303,"WrapModes"],[33304,"FovCot"],[33305,"MatrixWorldToScreen"],[33306,"MatrixWorldToCamera"],[33405,"Model2"],[33421,"CFARepeatPatternDim"],[33422,"CFAPattern2"],[33423,"BatteryLevel"],[33424,"KodakIFD"],[33445,"MDFileTag"],[33446,"MDScalePixel"],[33447,"MDColorTable"],[33448,"MDLabName"],[33449,"MDSampleInfo"],[33450,"MDPrepDate"],[33451,"MDPrepTime"],[33452,"MDFileUnits"],[33589,"AdventScale"],[33590,"AdventRevision"],[33628,"UIC1Tag"],[33629,"UIC2Tag"],[33630,"UIC3Tag"],[33631,"UIC4Tag"],[33918,"IntergraphPacketData"],[33919,"IntergraphFlagRegisters"],[33921,"INGRReserved"],[34016,"Site"],[34017,"ColorSequence"],[34018,"IT8Header"],[34019,"RasterPadding"],[34020,"BitsPerRunLength"],[34021,"BitsPerExtendedRunLength"],[34022,"ColorTable"],[34023,"ImageColorIndicator"],[34024,"BackgroundColorIndicator"],[34025,"ImageColorValue"],[34026,"BackgroundColorValue"],[34027,"PixelIntensityRange"],[34028,"TransparencyIndicator"],[34029,"ColorCharacterization"],[34030,"HCUsage"],[34031,"TrapIndicator"],[34032,"CMYKEquivalent"],[34152,"AFCP_IPTC"],[34232,"PixelMagicJBIGOptions"],[34263,"JPLCartoIFD"],[34306,"WB_GRGBLevels"],[34310,"LeafData"],[34687,"TIFF_FXExtensions"],[34688,"MultiProfiles"],[34689,"SharedData"],[34690,"T88Options"],[34732,"ImageLayer"],[34750,"JBIGOptions"],[34856,"Opto-ElectricConvFactor"],[34857,"Interlace"],[34908,"FaxRecvParams"],[34909,"FaxSubAddress"],[34910,"FaxRecvTime"],[34929,"FedexEDR"],[34954,"LeafSubIFD"],[37387,"FlashEnergy"],[37388,"SpatialFrequencyResponse"],[37389,"Noise"],[37390,"FocalPlaneXResolution"],[37391,"FocalPlaneYResolution"],[37392,"FocalPlaneResolutionUnit"],[37397,"ExposureIndex"],[37398,"TIFF-EPStandardID"],[37399,"SensingMethod"],[37434,"CIP3DataFile"],[37435,"CIP3Sheet"],[37436,"CIP3Side"],[37439,"StoNits"],[37679,"MSDocumentText"],[37680,"MSPropertySetStorage"],[37681,"MSDocumentTextPosition"],[37724,"ImageSourceData"],[40965,"InteropIFD"],[40976,"SamsungRawPointersOffset"],[40977,"SamsungRawPointersLength"],[41217,"SamsungRawByteOrder"],[41218,"SamsungRawUnknown"],[41484,"SpatialFrequencyResponse"],[41485,"Noise"],[41489,"ImageNumber"],[41490,"SecurityClassification"],[41491,"ImageHistory"],[41494,"TIFF-EPStandardID"],[41995,"DeviceSettingDescription"],[42112,"GDALMetadata"],[42113,"GDALNoData"],[44992,"ExpandSoftware"],[44993,"ExpandLens"],[44994,"ExpandFilm"],[44995,"ExpandFilterLens"],[44996,"ExpandScanner"],[44997,"ExpandFlashLamp"],[46275,"HasselbladRawImage"],[48129,"PixelFormat"],[48130,"Transformation"],[48131,"Uncompressed"],[48132,"ImageType"],[48256,"ImageWidth"],[48257,"ImageHeight"],[48258,"WidthResolution"],[48259,"HeightResolution"],[48320,"ImageOffset"],[48321,"ImageByteCount"],[48322,"AlphaOffset"],[48323,"AlphaByteCount"],[48324,"ImageDataDiscard"],[48325,"AlphaDataDiscard"],[50215,"OceScanjobDesc"],[50216,"OceApplicationSelector"],[50217,"OceIDNumber"],[50218,"OceImageLogic"],[50255,"Annotations"],[50459,"HasselbladExif"],[50547,"OriginalFileName"],[50560,"USPTOOriginalContentType"],[50656,"CR2CFAPattern"],[50710,"CFAPlaneColor"],[50711,"CFALayout"],[50712,"LinearizationTable"],[50713,"BlackLevelRepeatDim"],[50714,"BlackLevel"],[50715,"BlackLevelDeltaH"],[50716,"BlackLevelDeltaV"],[50717,"WhiteLevel"],[50718,"DefaultScale"],[50719,"DefaultCropOrigin"],[50720,"DefaultCropSize"],[50733,"BayerGreenSplit"],[50737,"ChromaBlurRadius"],[50738,"AntiAliasStrength"],[50752,"RawImageSegmentation"],[50780,"BestQualityScale"],[50784,"AliasLayerMetadata"],[50829,"ActiveArea"],[50830,"MaskedAreas"],[50935,"NoiseReductionApplied"],[50974,"SubTileBlockSize"],[50975,"RowInterleaveFactor"],[51008,"OpcodeList1"],[51009,"OpcodeList2"],[51022,"OpcodeList3"],[51041,"NoiseProfile"],[51114,"CacheVersion"],[51125,"DefaultUserCrop"],[51157,"NikonNEFInfo"],[65024,"KdcIFD"]];Br(Pt,"ifd0",Ty),Br(Pt,"exif",Ty),bt(ri,"gps",[[23,{M:"Magnetic North",T:"True North"}],[25,{K:"Kilometers",M:"Miles",N:"Nautical Miles"}]]);class Xh extends ii{static canHandle(n,a){return n.getUint8(a+1)===224&&n.getUint32(a+4)===1246120262&&n.getUint8(a+8)===0}parse(){return this.parseTags(),this.translate(),this.output}parseTags(){this.raw=new Map([[0,this.chunk.getUint16(0)],[2,this.chunk.getUint8(2)],[3,this.chunk.getUint16(3)],[5,this.chunk.getUint16(5)],[7,this.chunk.getUint8(7)],[8,this.chunk.getUint8(8)]])}}ke(Xh,"type","jfif"),ke(Xh,"headerLength",9),jt.set("jfif",Xh),bt(Pt,"jfif",[[0,"JFIFVersion"],[2,"ResolutionUnit"],[3,"XResolution"],[5,"YResolution"],[7,"ThumbnailWidth"],[8,"ThumbnailHeight"]]);class Ay extends ii{parse(){return this.parseTags(),this.translate(),this.output}parseTags(){this.raw=new Map([[0,this.chunk.getUint32(0)],[4,this.chunk.getUint32(4)],[8,this.chunk.getUint8(8)],[9,this.chunk.getUint8(9)],[10,this.chunk.getUint8(10)],[11,this.chunk.getUint8(11)],[12,this.chunk.getUint8(12)],...Array.from(this.raw)])}}ke(Ay,"type","ihdr"),jt.set("ihdr",Ay),bt(Pt,"ihdr",[[0,"ImageWidth"],[4,"ImageHeight"],[8,"BitDepth"],[9,"ColorType"],[10,"Compression"],[11,"Filter"],[12,"Interlace"]]),bt(ri,"ihdr",[[9,{0:"Grayscale",2:"RGB",3:"Palette",4:"Grayscale with Alpha",6:"RGB with Alpha",DEFAULT:"Unknown"}],[10,{0:"Deflate/Inflate",DEFAULT:"Unknown"}],[11,{0:"Adaptive",DEFAULT:"Unknown"}],[12,{0:"Noninterlaced",1:"Adam7 Interlace",DEFAULT:"Unknown"}]]);class Bc extends ii{static canHandle(n,a){return n.getUint8(a+1)===226&&n.getUint32(a+4)===1229144927}static findPosition(n,a){let s=super.findPosition(n,a);return s.chunkNumber=n.getUint8(a+16),s.chunkCount=n.getUint8(a+17),s.multiSegment=s.chunkCount>1,s}static handleMultiSegments(n){return(function(a){let s=(function(l){let u=l[0].constructor,f=0;for(let g of l)f+=g.length;let h=new u(f),m=0;for(let g of l)h.set(g,m),m+=g.length;return h})(a.map((l=>l.chunk.toUint8())));return new vn(s)})(n)}parse(){return this.raw=new Map,this.parseHeader(),this.parseTags(),this.translate(),this.output}parseHeader(){let{raw:n}=this;this.chunk.byteLength<84&&Tt("ICC header is too short");for(let[a,s]of Object.entries(Lx)){a=parseInt(a,10);let l=s(this.chunk,a);l!=="\0\0\0\0"&&n.set(a,l)}}parseTags(){let n,a,s,l,u,{raw:f}=this,h=this.chunk.getUint32(128),m=132,g=this.chunk.byteLength;for(;h--;){if(n=this.chunk.getString(m,4),a=this.chunk.getUint32(m+4),s=this.chunk.getUint32(m+8),l=this.chunk.getString(a,4),a+s>g)return void console.warn("reached the end of the first ICC chunk. Enable options.tiff.multiSegment to read all ICC segments.");u=this.parseTag(l,a,s),u!==void 0&&u!=="\0\0\0\0"&&f.set(n,u),m+=12}}parseTag(n,a,s){switch(n){case"desc":return this.parseDesc(a);case"mluc":return this.parseMluc(a);case"text":return this.parseText(a,s);case"sig ":return this.parseSig(a)}if(!(a+s>this.chunk.byteLength))return this.chunk.getUint8Array(a,s)}parseDesc(n){let a=this.chunk.getUint32(n+8)-1;return zr(this.chunk.getString(n+12,a))}parseText(n,a){return zr(this.chunk.getString(n+8,a-8))}parseSig(n){return zr(this.chunk.getString(n+8,4))}parseMluc(n){let{chunk:a}=this,s=a.getUint32(n+8),l=a.getUint32(n+12),u=n+16,f=[];for(let h=0;h<s;h++){let m=a.getString(u+0,2),g=a.getString(u+2,2),p=a.getUint32(u+4),y=a.getUint32(u+8)+n,b=zr(a.getUnicodeString(y,p));f.push({lang:m,country:g,text:b}),u+=l}return s===1?f[0].text:f}translateValue(n,a){return typeof n=="string"?a[n]||a[n.toLowerCase()]||n:a[n]||n}}ke(Bc,"type","icc"),ke(Bc,"multiSegment",!0),ke(Bc,"headerLength",18);const Lx={4:na,8:function(t,n){return[t.getUint8(n),t.getUint8(n+1)>>4,t.getUint8(n+1)%16].map((a=>a.toString(10))).join(".")},12:na,16:na,20:na,24:function(t,n){const a=t.getUint16(n),s=t.getUint16(n+2)-1,l=t.getUint16(n+4),u=t.getUint16(n+6),f=t.getUint16(n+8),h=t.getUint16(n+10);return new Date(Date.UTC(a,s,l,u,f,h))},36:na,40:na,48:na,52:na,64:(t,n)=>t.getUint32(n),80:na};function na(t,n){return zr(t.getString(n,4))}jt.set("icc",Bc),bt(Pt,"icc",[[4,"ProfileCMMType"],[8,"ProfileVersion"],[12,"ProfileClass"],[16,"ColorSpaceData"],[20,"ProfileConnectionSpace"],[24,"ProfileDateTime"],[36,"ProfileFileSignature"],[40,"PrimaryPlatform"],[44,"CMMFlags"],[48,"DeviceManufacturer"],[52,"DeviceModel"],[56,"DeviceAttributes"],[64,"RenderingIntent"],[68,"ConnectionSpaceIlluminant"],[80,"ProfileCreator"],[84,"ProfileID"],["Header","ProfileHeader"],["MS00","WCSProfiles"],["bTRC","BlueTRC"],["bXYZ","BlueMatrixColumn"],["bfd","UCRBG"],["bkpt","MediaBlackPoint"],["calt","CalibrationDateTime"],["chad","ChromaticAdaptation"],["chrm","Chromaticity"],["ciis","ColorimetricIntentImageState"],["clot","ColorantTableOut"],["clro","ColorantOrder"],["clrt","ColorantTable"],["cprt","ProfileCopyright"],["crdi","CRDInfo"],["desc","ProfileDescription"],["devs","DeviceSettings"],["dmdd","DeviceModelDesc"],["dmnd","DeviceMfgDesc"],["dscm","ProfileDescriptionML"],["fpce","FocalPlaneColorimetryEstimates"],["gTRC","GreenTRC"],["gXYZ","GreenMatrixColumn"],["gamt","Gamut"],["kTRC","GrayTRC"],["lumi","Luminance"],["meas","Measurement"],["meta","Metadata"],["mmod","MakeAndModel"],["ncl2","NamedColor2"],["ncol","NamedColor"],["ndin","NativeDisplayInfo"],["pre0","Preview0"],["pre1","Preview1"],["pre2","Preview2"],["ps2i","PS2RenderingIntent"],["ps2s","PostScript2CSA"],["psd0","PostScript2CRD0"],["psd1","PostScript2CRD1"],["psd2","PostScript2CRD2"],["psd3","PostScript2CRD3"],["pseq","ProfileSequenceDesc"],["psid","ProfileSequenceIdentifier"],["psvm","PS2CRDVMSize"],["rTRC","RedTRC"],["rXYZ","RedMatrixColumn"],["resp","OutputResponse"],["rhoc","ReflectionHardcopyOrigColorimetry"],["rig0","PerceptualRenderingIntentGamut"],["rig2","SaturationRenderingIntentGamut"],["rpoc","ReflectionPrintOutputColorimetry"],["sape","SceneAppearanceEstimates"],["scoe","SceneColorimetryEstimates"],["scrd","ScreeningDesc"],["scrn","Screening"],["targ","CharTarget"],["tech","Technology"],["vcgt","VideoCardGamma"],["view","ViewingConditions"],["vued","ViewingCondDesc"],["wtpt","MediaWhitePoint"]]);const kc={"4d2p":"Erdt Systems",AAMA:"Aamazing Technologies",ACER:"Acer",ACLT:"Acolyte Color Research",ACTI:"Actix Sytems",ADAR:"Adara Technology",ADBE:"Adobe",ADI:"ADI Systems",AGFA:"Agfa Graphics",ALMD:"Alps Electric",ALPS:"Alps Electric",ALWN:"Alwan Color Expertise",AMTI:"Amiable Technologies",AOC:"AOC International",APAG:"Apago",APPL:"Apple Computer",AST:"AST","AT&T":"AT&T",BAEL:"BARBIERI electronic",BRCO:"Barco NV",BRKP:"Breakpoint",BROT:"Brother",BULL:"Bull",BUS:"Bus Computer Systems","C-IT":"C-Itoh",CAMR:"Intel",CANO:"Canon",CARR:"Carroll Touch",CASI:"Casio",CBUS:"Colorbus PL",CEL:"Crossfield",CELx:"Crossfield",CGS:"CGS Publishing Technologies International",CHM:"Rochester Robotics",CIGL:"Colour Imaging Group, London",CITI:"Citizen",CL00:"Candela",CLIQ:"Color IQ",CMCO:"Chromaco",CMiX:"CHROMiX",COLO:"Colorgraphic Communications",COMP:"Compaq",COMp:"Compeq/Focus Technology",CONR:"Conrac Display Products",CORD:"Cordata Technologies",CPQ:"Compaq",CPRO:"ColorPro",CRN:"Cornerstone",CTX:"CTX International",CVIS:"ColorVision",CWC:"Fujitsu Laboratories",DARI:"Darius Technology",DATA:"Dataproducts",DCP:"Dry Creek Photo",DCRC:"Digital Contents Resource Center, Chung-Ang University",DELL:"Dell Computer",DIC:"Dainippon Ink and Chemicals",DICO:"Diconix",DIGI:"Digital","DL&C":"Digital Light & Color",DPLG:"Doppelganger",DS:"Dainippon Screen",DSOL:"DOOSOL",DUPN:"DuPont",EPSO:"Epson",ESKO:"Esko-Graphics",ETRI:"Electronics and Telecommunications Research Institute",EVER:"Everex Systems",EXAC:"ExactCODE",Eizo:"Eizo",FALC:"Falco Data Products",FF:"Fuji Photo Film",FFEI:"FujiFilm Electronic Imaging",FNRD:"Fnord Software",FORA:"Fora",FORE:"Forefront Technology",FP:"Fujitsu",FPA:"WayTech Development",FUJI:"Fujitsu",FX:"Fuji Xerox",GCC:"GCC Technologies",GGSL:"Global Graphics Software",GMB:"Gretagmacbeth",GMG:"GMG",GOLD:"GoldStar Technology",GOOG:"Google",GPRT:"Giantprint",GTMB:"Gretagmacbeth",GVC:"WayTech Development",GW2K:"Sony",HCI:"HCI",HDM:"Heidelberger Druckmaschinen",HERM:"Hermes",HITA:"Hitachi America",HP:"Hewlett-Packard",HTC:"Hitachi",HiTi:"HiTi Digital",IBM:"IBM",IDNT:"Scitex",IEC:"Hewlett-Packard",IIYA:"Iiyama North America",IKEG:"Ikegami Electronics",IMAG:"Image Systems",IMI:"Ingram Micro",INTC:"Intel",INTL:"N/A (INTL)",INTR:"Intra Electronics",IOCO:"Iocomm International Technology",IPS:"InfoPrint Solutions Company",IRIS:"Scitex",ISL:"Ichikawa Soft Laboratory",ITNL:"N/A (ITNL)",IVM:"IVM",IWAT:"Iwatsu Electric",Idnt:"Scitex",Inca:"Inca Digital Printers",Iris:"Scitex",JPEG:"Joint Photographic Experts Group",JSFT:"Jetsoft Development",JVC:"JVC Information Products",KART:"Scitex",KFC:"KFC Computek Components",KLH:"KLH Computers",KMHD:"Konica Minolta",KNCA:"Konica",KODA:"Kodak",KYOC:"Kyocera",Kart:"Scitex",LCAG:"Leica",LCCD:"Leeds Colour",LDAK:"Left Dakota",LEAD:"Leading Technology",LEXM:"Lexmark International",LINK:"Link Computer",LINO:"Linotronic",LITE:"Lite-On",Leaf:"Leaf",Lino:"Linotronic",MAGC:"Mag Computronic",MAGI:"MAG Innovision",MANN:"Mannesmann",MICN:"Micron Technology",MICR:"Microtek",MICV:"Microvitec",MINO:"Minolta",MITS:"Mitsubishi Electronics America",MITs:"Mitsuba",MNLT:"Minolta",MODG:"Modgraph",MONI:"Monitronix",MONS:"Monaco Systems",MORS:"Morse Technology",MOTI:"Motive Systems",MSFT:"Microsoft",MUTO:"MUTOH INDUSTRIES",Mits:"Mitsubishi Electric",NANA:"NANAO",NEC:"NEC",NEXP:"NexPress Solutions",NISS:"Nissei Sangyo America",NKON:"Nikon",NONE:"none",OCE:"Oce Technologies",OCEC:"OceColor",OKI:"Oki",OKID:"Okidata",OKIP:"Okidata",OLIV:"Olivetti",OLYM:"Olympus",ONYX:"Onyx Graphics",OPTI:"Optiquest",PACK:"Packard Bell",PANA:"Matsushita Electric Industrial",PANT:"Pantone",PBN:"Packard Bell",PFU:"PFU",PHIL:"Philips Consumer Electronics",PNTX:"HOYA",POne:"Phase One A/S",PREM:"Premier Computer Innovations",PRIN:"Princeton Graphic Systems",PRIP:"Princeton Publishing Labs",QLUX:"Hong Kong",QMS:"QMS",QPCD:"QPcard AB",QUAD:"QuadLaser",QUME:"Qume",RADI:"Radius",RDDx:"Integrated Color Solutions",RDG:"Roland DG",REDM:"REDMS Group",RELI:"Relisys",RGMS:"Rolf Gierling Multitools",RICO:"Ricoh",RNLD:"Edmund Ronald",ROYA:"Royal",RPC:"Ricoh Printing Systems",RTL:"Royal Information Electronics",SAMP:"Sampo",SAMS:"Samsung",SANT:"Jaime Santana Pomares",SCIT:"Scitex",SCRN:"Dainippon Screen",SDP:"Scitex",SEC:"Samsung",SEIK:"Seiko Instruments",SEIk:"Seikosha",SGUY:"ScanGuy.com",SHAR:"Sharp Laboratories",SICC:"International Color Consortium",SONY:"Sony",SPCL:"SpectraCal",STAR:"Star",STC:"Sampo Technology",Scit:"Scitex",Sdp:"Scitex",Sony:"Sony",TALO:"Talon Technology",TAND:"Tandy",TATU:"Tatung",TAXA:"TAXAN America",TDS:"Tokyo Denshi Sekei",TECO:"TECO Information Systems",TEGR:"Tegra",TEKT:"Tektronix",TI:"Texas Instruments",TMKR:"TypeMaker",TOSB:"Toshiba",TOSH:"Toshiba",TOTK:"TOTOKU ELECTRIC",TRIU:"Triumph",TSBT:"Toshiba",TTX:"TTX Computer Products",TVM:"TVM Professional Monitor",TW:"TW Casper",ULSX:"Ulead Systems",UNIS:"Unisys",UTZF:"Utz Fehlau & Sohn",VARI:"Varityper",VIEW:"Viewsonic",VISL:"Visual communication",VIVO:"Vivo Mobile Communication",WANG:"Wang",WLBR:"Wilbur Imaging",WTG2:"Ware To Go",WYSE:"WYSE Technology",XERX:"Xerox",XRIT:"X-Rite",ZRAN:"Zoran",Zebr:"Zebra Technologies",appl:"Apple Computer",bICC:"basICColor",berg:"bergdesign",ceyd:"Integrated Color Solutions",clsp:"MacDermid ColorSpan",ds:"Dainippon Screen",dupn:"DuPont",ffei:"FujiFilm Electronic Imaging",flux:"FluxData",iris:"Scitex",kart:"Scitex",lcms:"Little CMS",lino:"Linotronic",none:"none",ob4d:"Erdt Systems",obic:"Medigraph",quby:"Qubyx Sarl",scit:"Scitex",scrn:"Dainippon Screen",sdp:"Scitex",siwi:"SIWI GRAFIKA",yxym:"YxyMaster"},Ey={scnr:"Scanner",mntr:"Monitor",prtr:"Printer",link:"Device Link",abst:"Abstract",spac:"Color Space Conversion Profile",nmcl:"Named Color",cenc:"ColorEncodingSpace profile",mid:"MultiplexIdentification profile",mlnk:"MultiplexLink profile",mvis:"MultiplexVisualization profile",nkpf:"Nikon Input Device Profile (NON-STANDARD!)"};bt(ri,"icc",[[4,kc],[12,Ey],[40,Object.assign({},kc,Ey)],[48,kc],[80,kc],[64,{0:"Perceptual",1:"Relative Colorimetric",2:"Saturation",3:"Absolute Colorimetric"}],["tech",{amd:"Active Matrix Display",crt:"Cathode Ray Tube Display",kpcd:"Photo CD",pmd:"Passive Matrix Display",dcam:"Digital Camera",dcpj:"Digital Cinema Projector",dmpc:"Digital Motion Picture Camera",dsub:"Dye Sublimation Printer",epho:"Electrophotographic Printer",esta:"Electrostatic Printer",flex:"Flexography",fprn:"Film Writer",fscn:"Film Scanner",grav:"Gravure",ijet:"Ink Jet Printer",imgs:"Photo Image Setter",mpfr:"Motion Picture Film Recorder",mpfs:"Motion Picture Film Scanner",offs:"Offset Lithography",pjtv:"Projection Television",rpho:"Photographic Paper Printer",rscn:"Reflective Scanner",silk:"Silkscreen",twax:"Thermal Wax Printer",vidc:"Video Camera",vidm:"Video Monitor"}]]);class xc extends ii{static canHandle(n,a,s){return n.getUint8(a+1)===237&&n.getString(a+4,9)==="Photoshop"&&this.containsIptc8bim(n,a,s)!==void 0}static headerLength(n,a,s){let l,u=this.containsIptc8bim(n,a,s);if(u!==void 0)return l=n.getUint8(a+u+7),l%2!=0&&(l+=1),l===0&&(l=4),u+8+l}static containsIptc8bim(n,a,s){for(let l=0;l<s;l++)if(this.isIptcSegmentHead(n,a+l))return l}static isIptcSegmentHead(n,a){return n.getUint8(a)===56&&n.getUint32(a)===943868237&&n.getUint16(a+4)===1028}parse(){let{raw:n}=this,a=this.chunk.byteLength-1,s=!1;for(let l=0;l<a;l++)if(this.chunk.getUint8(l)===28&&this.chunk.getUint8(l+1)===2){s=!0;let u=this.chunk.getUint16(l+3),f=this.chunk.getUint8(l+2),h=this.chunk.getLatin1String(l+5,u);n.set(f,this.pluralizeValue(n.get(f),h)),l+=4+u}else if(s)break;return this.translate(),this.output}pluralizeValue(n,a){return n!==void 0?n instanceof Array?(n.push(a),n):[n,a]:a}}ke(xc,"type","iptc"),ke(xc,"translateValues",!1),ke(xc,"reviveValues",!1),jt.set("iptc",xc),bt(Pt,"iptc",[[0,"ApplicationRecordVersion"],[3,"ObjectTypeReference"],[4,"ObjectAttributeReference"],[5,"ObjectName"],[7,"EditStatus"],[8,"EditorialUpdate"],[10,"Urgency"],[12,"SubjectReference"],[15,"Category"],[20,"SupplementalCategories"],[22,"FixtureIdentifier"],[25,"Keywords"],[26,"ContentLocationCode"],[27,"ContentLocationName"],[30,"ReleaseDate"],[35,"ReleaseTime"],[37,"ExpirationDate"],[38,"ExpirationTime"],[40,"SpecialInstructions"],[42,"ActionAdvised"],[45,"ReferenceService"],[47,"ReferenceDate"],[50,"ReferenceNumber"],[55,"DateCreated"],[60,"TimeCreated"],[62,"DigitalCreationDate"],[63,"DigitalCreationTime"],[65,"OriginatingProgram"],[70,"ProgramVersion"],[75,"ObjectCycle"],[80,"Byline"],[85,"BylineTitle"],[90,"City"],[92,"Sublocation"],[95,"State"],[100,"CountryCode"],[101,"Country"],[103,"OriginalTransmissionReference"],[105,"Headline"],[110,"Credit"],[115,"Source"],[116,"CopyrightNotice"],[118,"Contact"],[120,"Caption"],[121,"LocalCaption"],[122,"Writer"],[125,"RasterizedCaption"],[130,"ImageType"],[131,"ImageOrientation"],[135,"LanguageIdentifier"],[150,"AudioType"],[151,"AudioSamplingRate"],[152,"AudioSamplingResolution"],[153,"AudioDuration"],[154,"AudioOutcue"],[184,"JobID"],[185,"MasterDocumentID"],[186,"ShortDocumentID"],[187,"UniqueDocumentID"],[188,"OwnerID"],[200,"ObjectPreviewFileFormat"],[201,"ObjectPreviewFileVersion"],[202,"ObjectPreviewData"],[221,"Prefs"],[225,"ClassifyState"],[228,"SimilarityIndex"],[230,"DocumentNotes"],[231,"DocumentHistory"],[232,"ExifCameraInfo"],[255,"CatalogSets"]]),bt(ri,"iptc",[[10,{0:"0 (reserved)",1:"1 (most urgent)",2:"2",3:"3",4:"4",5:"5 (normal urgency)",6:"6",7:"7",8:"8 (least urgent)",9:"9 (user-defined priority)"}],[75,{a:"Morning",b:"Both Morning and Evening",p:"Evening"}],[131,{L:"Landscape",P:"Portrait",S:"Square"}]]);var qh={exports:{}},Kh,Oy;function Vx(){if(Oy)return Kh;Oy=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Kh=t,Kh}var Zh,My;function Bx(){if(My)return Zh;My=1;var t=Vx();function n(){}function a(){}return a.resetWarningCache=n,Zh=function(){function s(f,h,m,g,p,y){if(y!==t){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}s.isRequired=s;function l(){return s}var u={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:l,element:s,elementType:s,instanceOf:l,node:s,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:a,resetWarningCache:n};return u.PropTypes=u,u},Zh}var Dy;function Ux(){return Dy||(Dy=1,qh.exports=Bx()()),qh.exports}var Ix=Ux();const J=sf(Ix);var Hx=["color","size","title","className"];function Om(){return Om=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var s in a)({}).hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},Om.apply(null,arguments)}function Fx(t,n){if(t==null)return{};var a,s,l=Gx(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(s=0;s<u.length;s++)a=u[s],n.indexOf(a)===-1&&{}.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}function Gx(t,n){if(t==null)return{};var a={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(n.indexOf(s)!==-1)continue;a[s]=t[s]}return a}var v_=j.forwardRef(function(t,n){var a=t.color,s=a===void 0?"currentColor":a,l=t.size,u=l===void 0?"1em":l,f=t.title,h=f===void 0?null:f,m=t.className,g=m===void 0?"":m,p=Fx(t,Hx);return me.createElement("svg",Om({ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:u,height:u,fill:s,className:["bi","bi-arrow-clockwise",g].filter(Boolean).join(" ")},p),h?me.createElement("title",null,h):null,me.createElement("path",{fillRule:"evenodd",d:"M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"}),me.createElement("path",{d:"M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"}))});v_.propTypes={color:J.string,size:J.oneOfType([J.string,J.number]),title:J.string,className:J.string};var Yx=["color","size","title","className"];function Mm(){return Mm=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var s in a)({}).hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},Mm.apply(null,arguments)}function Xx(t,n){if(t==null)return{};var a,s,l=qx(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(s=0;s<u.length;s++)a=u[s],n.indexOf(a)===-1&&{}.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}function qx(t,n){if(t==null)return{};var a={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(n.indexOf(s)!==-1)continue;a[s]=t[s]}return a}var y_=j.forwardRef(function(t,n){var a=t.color,s=a===void 0?"currentColor":a,l=t.size,u=l===void 0?"1em":l,f=t.title,h=f===void 0?null:f,m=t.className,g=m===void 0?"":m,p=Xx(t,Yx);return me.createElement("svg",Mm({ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:u,height:u,fill:s,className:["bi","bi-download",g].filter(Boolean).join(" ")},p),h?me.createElement("title",null,h):null,me.createElement("path",{d:"M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"}),me.createElement("path",{d:"M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"}))});y_.propTypes={color:J.string,size:J.oneOfType([J.string,J.number]),title:J.string,className:J.string};var Kx=["color","size","title","className"];function Dm(){return Dm=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var s in a)({}).hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},Dm.apply(null,arguments)}function Zx(t,n){if(t==null)return{};var a,s,l=Wx(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(s=0;s<u.length;s++)a=u[s],n.indexOf(a)===-1&&{}.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}function Wx(t,n){if(t==null)return{};var a={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(n.indexOf(s)!==-1)continue;a[s]=t[s]}return a}var b_=j.forwardRef(function(t,n){var a=t.color,s=a===void 0?"currentColor":a,l=t.size,u=l===void 0?"1em":l,f=t.title,h=f===void 0?null:f,m=t.className,g=m===void 0?"":m,p=Zx(t,Kx);return me.createElement("svg",Dm({ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:u,height:u,fill:s,className:["bi","bi-fullscreen-exit",g].filter(Boolean).join(" ")},p),h?me.createElement("title",null,h):null,me.createElement("path",{d:"M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z"}))});b_.propTypes={color:J.string,size:J.oneOfType([J.string,J.number]),title:J.string,className:J.string};var Qx=["color","size","title","className"];function zm(){return zm=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var s in a)({}).hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},zm.apply(null,arguments)}function $x(t,n){if(t==null)return{};var a,s,l=Jx(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(s=0;s<u.length;s++)a=u[s],n.indexOf(a)===-1&&{}.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}function Jx(t,n){if(t==null)return{};var a={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(n.indexOf(s)!==-1)continue;a[s]=t[s]}return a}var __=j.forwardRef(function(t,n){var a=t.color,s=a===void 0?"currentColor":a,l=t.size,u=l===void 0?"1em":l,f=t.title,h=f===void 0?null:f,m=t.className,g=m===void 0?"":m,p=$x(t,Qx);return me.createElement("svg",zm({ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:u,height:u,fill:s,className:["bi","bi-fullscreen",g].filter(Boolean).join(" ")},p),h?me.createElement("title",null,h):null,me.createElement("path",{d:"M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5"}))});__.propTypes={color:J.string,size:J.oneOfType([J.string,J.number]),title:J.string,className:J.string};var e4=["color","size","title","className"];function Nm(){return Nm=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var s in a)({}).hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},Nm.apply(null,arguments)}function t4(t,n){if(t==null)return{};var a,s,l=n4(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(s=0;s<u.length;s++)a=u[s],n.indexOf(a)===-1&&{}.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}function n4(t,n){if(t==null)return{};var a={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(n.indexOf(s)!==-1)continue;a[s]=t[s]}return a}var S_=j.forwardRef(function(t,n){var a=t.color,s=a===void 0?"currentColor":a,l=t.size,u=l===void 0?"1em":l,f=t.title,h=f===void 0?null:f,m=t.className,g=m===void 0?"":m,p=t4(t,e4);return me.createElement("svg",Nm({ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:u,height:u,fill:s,className:["bi","bi-grid-fill",g].filter(Boolean).join(" ")},p),h?me.createElement("title",null,h):null,me.createElement("path",{d:"M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"}))});S_.propTypes={color:J.string,size:J.oneOfType([J.string,J.number]),title:J.string,className:J.string};var i4=["color","size","title","className"];function Pm(){return Pm=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var s in a)({}).hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},Pm.apply(null,arguments)}function a4(t,n){if(t==null)return{};var a,s,l=r4(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(s=0;s<u.length;s++)a=u[s],n.indexOf(a)===-1&&{}.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}function r4(t,n){if(t==null)return{};var a={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(n.indexOf(s)!==-1)continue;a[s]=t[s]}return a}var w_=j.forwardRef(function(t,n){var a=t.color,s=a===void 0?"currentColor":a,l=t.size,u=l===void 0?"1em":l,f=t.title,h=f===void 0?null:f,m=t.className,g=m===void 0?"":m,p=a4(t,i4);return me.createElement("svg",Pm({ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:u,height:u,fill:s,className:["bi","bi-info-circle",g].filter(Boolean).join(" ")},p),h?me.createElement("title",null,h):null,me.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),me.createElement("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"}))});w_.propTypes={color:J.string,size:J.oneOfType([J.string,J.number]),title:J.string,className:J.string};var s4=["color","size","title","className"];function Rm(){return Rm=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var s in a)({}).hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},Rm.apply(null,arguments)}function o4(t,n){if(t==null)return{};var a,s,l=l4(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(s=0;s<u.length;s++)a=u[s],n.indexOf(a)===-1&&{}.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}function l4(t,n){if(t==null)return{};var a={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(n.indexOf(s)!==-1)continue;a[s]=t[s]}return a}var k_=j.forwardRef(function(t,n){var a=t.color,s=a===void 0?"currentColor":a,l=t.size,u=l===void 0?"1em":l,f=t.title,h=f===void 0?null:f,m=t.className,g=m===void 0?"":m,p=o4(t,s4);return me.createElement("svg",Rm({ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:u,height:u,fill:s,className:["bi","bi-pause-circle-fill",g].filter(Boolean).join(" ")},p),h?me.createElement("title",null,h):null,me.createElement("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"}))});k_.propTypes={color:J.string,size:J.oneOfType([J.string,J.number]),title:J.string,className:J.string};var u4=["color","size","title","className"];function Lm(){return Lm=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var s in a)({}).hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},Lm.apply(null,arguments)}function c4(t,n){if(t==null)return{};var a,s,l=f4(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(s=0;s<u.length;s++)a=u[s],n.indexOf(a)===-1&&{}.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}function f4(t,n){if(t==null)return{};var a={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(n.indexOf(s)!==-1)continue;a[s]=t[s]}return a}var x_=j.forwardRef(function(t,n){var a=t.color,s=a===void 0?"currentColor":a,l=t.size,u=l===void 0?"1em":l,f=t.title,h=f===void 0?null:f,m=t.className,g=m===void 0?"":m,p=c4(t,u4);return me.createElement("svg",Lm({ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:u,height:u,fill:s,className:["bi","bi-play-circle-fill",g].filter(Boolean).join(" ")},p),h?me.createElement("title",null,h):null,me.createElement("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"}))});x_.propTypes={color:J.string,size:J.oneOfType([J.string,J.number]),title:J.string,className:J.string};var d4=["color","size","title","className"];function Vm(){return Vm=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var s in a)({}).hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},Vm.apply(null,arguments)}function h4(t,n){if(t==null)return{};var a,s,l=m4(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(s=0;s<u.length;s++)a=u[s],n.indexOf(a)===-1&&{}.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}function m4(t,n){if(t==null)return{};var a={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(n.indexOf(s)!==-1)continue;a[s]=t[s]}return a}var C_=j.forwardRef(function(t,n){var a=t.color,s=a===void 0?"currentColor":a,l=t.size,u=l===void 0?"1em":l,f=t.title,h=f===void 0?null:f,m=t.className,g=m===void 0?"":m,p=h4(t,d4);return me.createElement("svg",Vm({ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:u,height:u,fill:s,className:["bi","bi-search",g].filter(Boolean).join(" ")},p),h?me.createElement("title",null,h):null,me.createElement("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"}))});C_.propTypes={color:J.string,size:J.oneOfType([J.string,J.number]),title:J.string,className:J.string};var g4=["color","size","title","className"];function Bm(){return Bm=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var s in a)({}).hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},Bm.apply(null,arguments)}function p4(t,n){if(t==null)return{};var a,s,l=v4(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(s=0;s<u.length;s++)a=u[s],n.indexOf(a)===-1&&{}.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}function v4(t,n){if(t==null)return{};var a={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(n.indexOf(s)!==-1)continue;a[s]=t[s]}return a}var Um=j.forwardRef(function(t,n){var a=t.color,s=a===void 0?"currentColor":a,l=t.size,u=l===void 0?"1em":l,f=t.title,h=f===void 0?null:f,m=t.className,g=m===void 0?"":m,p=p4(t,g4);return me.createElement("svg",Bm({ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:u,height:u,fill:s,className:["bi","bi-x-lg",g].filter(Boolean).join(" ")},p),h?me.createElement("title",null,h):null,me.createElement("path",{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"}))});Um.propTypes={color:J.string,size:J.oneOfType([J.string,J.number]),title:J.string,className:J.string};var y4=["color","size","title","className"];function Im(){return Im=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var s in a)({}).hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},Im.apply(null,arguments)}function b4(t,n){if(t==null)return{};var a,s,l=_4(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(s=0;s<u.length;s++)a=u[s],n.indexOf(a)===-1&&{}.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}function _4(t,n){if(t==null)return{};var a={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(n.indexOf(s)!==-1)continue;a[s]=t[s]}return a}var j_=j.forwardRef(function(t,n){var a=t.color,s=a===void 0?"currentColor":a,l=t.size,u=l===void 0?"1em":l,f=t.title,h=f===void 0?null:f,m=t.className,g=m===void 0?"":m,p=b4(t,y4);return me.createElement("svg",Im({ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:u,height:u,fill:s,className:["bi","bi-zoom-in",g].filter(Boolean).join(" ")},p),h?me.createElement("title",null,h):null,me.createElement("path",{fillRule:"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"}),me.createElement("path",{d:"M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"}),me.createElement("path",{fillRule:"evenodd",d:"M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"}))});j_.propTypes={color:J.string,size:J.oneOfType([J.string,J.number]),title:J.string,className:J.string};var S4=["color","size","title","className"];function Hm(){return Hm=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var s in a)({}).hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},Hm.apply(null,arguments)}function w4(t,n){if(t==null)return{};var a,s,l=k4(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(s=0;s<u.length;s++)a=u[s],n.indexOf(a)===-1&&{}.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}function k4(t,n){if(t==null)return{};var a={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(n.indexOf(s)!==-1)continue;a[s]=t[s]}return a}var T_=j.forwardRef(function(t,n){var a=t.color,s=a===void 0?"currentColor":a,l=t.size,u=l===void 0?"1em":l,f=t.title,h=f===void 0?null:f,m=t.className,g=m===void 0?"":m,p=w4(t,S4);return me.createElement("svg",Hm({ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:u,height:u,fill:s,className:["bi","bi-zoom-out",g].filter(Boolean).join(" ")},p),h?me.createElement("title",null,h):null,me.createElement("path",{fillRule:"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"}),me.createElement("path",{d:"M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"}),me.createElement("path",{fillRule:"evenodd",d:"M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"}))});T_.propTypes={color:J.string,size:J.oneOfType([J.string,J.number]),title:J.string,className:J.string};var x4=!!(typeof window<"u"&&window.document&&window.document.createElement),C4=(function(){function t(n,a){for(var s=0;s<a.length;s++){var l=a[s];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}return function(n,a,s){return a&&t(n.prototype,a),s&&t(n,s),n}})();function j4(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function T4(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:t}function A4(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var A_=(function(t){A4(n,t);function n(){return j4(this,n),T4(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return C4(n,[{key:"componentWillUnmount",value:function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null}},{key:"render",value:function(){return x4?(!this.props.node&&!this.defaultNode&&(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),Hc.createPortal(this.props.children,this.props.node||this.defaultNode)):null}}]),n})(me.Component);A_.propTypes={children:J.node.isRequired,node:J.any};var E4=(function(){function t(n,a){for(var s=0;s<a.length;s++){var l=a[s];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}return function(n,a,s){return a&&t(n.prototype,a),s&&t(n,s),n}})();function O4(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function M4(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:t}function D4(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var E_=(function(t){D4(n,t);function n(){return O4(this,n),M4(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return E4(n,[{key:"componentDidMount",value:function(){this.renderPortal()}},{key:"componentDidUpdate",value:function(s){this.renderPortal()}},{key:"componentWillUnmount",value:function(){Hc.unmountComponentAtNode(this.defaultNode||this.props.node),this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null,this.portal=null}},{key:"renderPortal",value:function(s){!this.props.node&&!this.defaultNode&&(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode));var l=this.props.children;typeof this.props.children.type=="function"&&(l=me.cloneElement(this.props.children)),this.portal=Hc.unstable_renderSubtreeIntoContainer(this,l,this.props.node||this.defaultNode)}},{key:"render",value:function(){return null}}]),n})(me.Component);E_.propTypes={children:J.node.isRequired,node:J.any};var Fm=void 0;Hc.createPortal?Fm=A_:Fm=E_;var Gn=function(t,n){return Number(t.toFixed(n))},z4=function(t,n){return typeof t=="number"?t:n},ot=function(t,n,a){a&&typeof a=="function"&&a(t,n)},N4=function(t){return-Math.cos(t*Math.PI)/2+.5},P4=function(t){return t},R4=function(t){return t*t},L4=function(t){return t*(2-t)},V4=function(t){return t<.5?2*t*t:-1+(4-2*t)*t},B4=function(t){return t*t*t},U4=function(t){return--t*t*t+1},I4=function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},H4=function(t){return t*t*t*t},F4=function(t){return 1- --t*t*t*t},G4=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},Y4=function(t){return t*t*t*t*t},X4=function(t){return 1+--t*t*t*t*t},q4=function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t},O_={easeOut:N4,linear:P4,easeInQuad:R4,easeOutQuad:L4,easeInOutQuad:V4,easeInCubic:B4,easeOutCubic:U4,easeInOutCubic:I4,easeInQuart:H4,easeOutQuart:F4,easeInOutQuart:G4,easeInQuint:Y4,easeOutQuint:X4,easeInOutQuint:q4},M_=function(t){typeof t=="number"&&cancelAnimationFrame(t)},ji=function(t){t.mounted&&(M_(t.animation),t.animate=!1,t.animation=null,t.velocity=null)};function D_(t,n,a,s){if(t.mounted){var l=new Date().getTime(),u=1;ji(t),t.animation=function(){if(!t.mounted)return M_(t.animation);var f=new Date().getTime()-l,h=f/a,m=O_[n],g=m(h);f>=a?(s(u),t.animation=null):t.animation&&(s(g),requestAnimationFrame(t.animation))},requestAnimationFrame(t.animation)}}function K4(t){var n=t.scale,a=t.positionX,s=t.positionY;return!(Number.isNaN(n)||Number.isNaN(a)||Number.isNaN(s))}function ir(t,n,a,s){var l=K4(n);if(!(!t.mounted||!l)){var u=t.setTransformState,f=t.transformState,h=f.scale,m=f.positionX,g=f.positionY,p=n.scale-h,y=n.positionX-m,b=n.positionY-g;a===0?u(n.scale,n.positionX,n.positionY):D_(t,s,a,function(C){var x=h+p*C,T=m+y*C,N=g+b*C;u(x,T,N)})}}function Z4(t,n,a){var s=t.offsetWidth,l=t.offsetHeight,u=n.offsetWidth,f=n.offsetHeight,h=u*a,m=f*a,g=s-h,p=l-m;return{wrapperWidth:s,wrapperHeight:l,newContentWidth:h,newDiffWidth:g,newContentHeight:m,newDiffHeight:p}}var W4=function(t,n,a,s,l,u,f){var h=t>n?a*(f?1:.5):0,m=s>l?u*(f?1:.5):0,g=t-n-h,p=h,y=s-l-m,b=m;return{minPositionX:g,maxPositionX:p,minPositionY:y,maxPositionY:b}},Vg=function(t,n){var a=t.wrapperComponent,s=t.contentComponent,l=t.setup.centerZoomedOut;if(!a||!s)throw new Error("Components are not mounted");var u=Z4(a,s,n),f=u.wrapperWidth,h=u.wrapperHeight,m=u.newContentWidth,g=u.newDiffWidth,p=u.newContentHeight,y=u.newDiffHeight,b=W4(f,m,g,h,p,y,!!l);return b},Gm=function(t,n,a,s){return s?t<n?Gn(n,2):t>a?Gn(a,2):Gn(t,2):Gn(t,2)},Is=function(t,n){var a=Vg(t,n);return t.bounds=a,a};function _f(t,n,a,s,l,u,f){var h=a.minPositionX,m=a.minPositionY,g=a.maxPositionX,p=a.maxPositionY,y=0,b=0;f&&(y=l,b=u);var C=Gm(t,h-y,g+y,s),x=Gm(n,m-b,p+b,s);return{x:C,y:x}}function Sf(t,n,a,s,l,u){var f=t.transformState,h=f.scale,m=f.positionX,g=f.positionY,p=s-h;if(typeof n!="number"||typeof a!="number")return console.error("Mouse X and Y position were not provided!"),{x:m,y:g};var y=m-n*p,b=g-a*p,C=_f(y,b,l,u,0,0,null);return C}function zl(t,n,a,s,l){var u=l?s:0,f=n-u;return!Number.isNaN(a)&&t>=a?a:!Number.isNaN(n)&&t<=f?f:t}var zy=function(t,n){var a=t.setup.panning.excluded,s=t.isInitialized,l=t.wrapperComponent,u=n.target,f=l==null?void 0:l.contains(u),h=s&&u&&f;if(!h)return!1;var m=wf(u,a);return!m},Ny=function(t){var n=t.isInitialized,a=t.isPanning,s=t.setup,l=s.panning.disabled,u=n&&a&&!l;return!!u},Q4=function(t,n){var a=t.transformState,s=a.positionX,l=a.positionY;t.isPanning=!0;var u=n.clientX,f=n.clientY;t.startCoords={x:u-s,y:f-l}},$4=function(t,n){var a=n.touches,s=t.transformState,l=s.positionX,u=s.positionY;t.isPanning=!0;var f=a.length===1;if(f){var h=a[0].clientX,m=a[0].clientY;t.startCoords={x:h-l,y:m-u}}};function J4(t){var n=t.transformState,a=n.positionX,s=n.positionY,l=n.scale,u=t.setup,f=u.disabled,h=u.limitToBounds,m=u.centerZoomedOut,g=t.wrapperComponent;if(!(f||!g||!t.bounds)){var p=t.bounds,y=p.maxPositionX,b=p.minPositionX,C=p.maxPositionY,x=p.minPositionY,T=a>y||a<b,N=s>C||s<x,E=a>y?g.offsetWidth:t.setup.minPositionX||0,M=s>C?g.offsetHeight:t.setup.minPositionY||0,w=Sf(t,E,M,l,t.bounds,h||m),O=w.x,D=w.y;return{scale:l,positionX:T?O:a,positionY:N?D:s}}}function eC(t,n,a,s,l){var u=t.setup.limitToBounds,f=t.wrapperComponent,h=t.bounds,m=t.transformState,g=m.scale,p=m.positionX,y=m.positionY;if(!(f===null||h===null||n===p&&a===y)){var b=_f(n,a,h,u,s,l,f),C=b.x,x=b.y;t.setTransformState(g,C,x)}}var tC=function(t,n,a){var s=t.startCoords,l=t.transformState,u=t.setup.panning,f=u.lockAxisX,h=u.lockAxisY,m=l.positionX,g=l.positionY;if(!s)return{x:m,y:g};var p=n-s.x,y=a-s.y,b=f?m:p,C=h?g:y;return{x:b,y:C}},tf=function(t,n){var a=t.setup,s=t.transformState,l=s.scale,u=a.minScale,f=a.disablePadding;return n>0&&l>=u&&!f?n:0},nC=function(t){var n=t.mounted,a=t.setup,s=a.disabled,l=a.velocityAnimation,u=t.transformState.scale,f=l.disabled,h=!f||u>1||!s||n;return!!h},iC=function(t){var n=t.mounted,a=t.velocity,s=t.bounds,l=t.setup,u=l.disabled,f=l.velocityAnimation,h=t.transformState.scale,m=f.disabled,g=!m||h>1||!u||n;return!(!g||!a||!s)};function aC(t,n){var a=t.setup.velocityAnimation,s=a.equalToMove,l=a.animationTime,u=a.sensitivity;return s?l*n*u:l}function Py(t,n,a,s,l,u,f,h,m,g){if(l){if(n>f&&a>f){var p=f+(t-f)*g;return p>m?m:p<f?f:p}if(n<u&&a<u){var p=u+(t-u)*g;return p<h?h:p>u?u:p}}return s?n:Gm(t,u,f,l)}function rC(t,n){var a=1;return n?Math.min(a,t.offsetWidth/window.innerWidth):a}function sC(t,n){var a=nC(t);if(a){var s=t.lastMousePosition,l=t.velocityTime,u=t.setup,f=t.wrapperComponent,h=u.velocityAnimation.equalToMove,m=Date.now();if(s&&l&&f){var g=rC(f,h),p=n.x-s.x,y=n.y-s.y,b=p/g,C=y/g,x=m-l,T=p*p+y*y,N=Math.sqrt(T)/x;t.velocity={velocityX:b,velocityY:C,total:N}}t.lastMousePosition=n,t.velocityTime=m}}function oC(t){var n=t.velocity,a=t.bounds,s=t.setup,l=t.wrapperComponent,u=iC(t);if(!(!u||!n||!a||!l)){var f=n.velocityX,h=n.velocityY,m=n.total,g=a.maxPositionX,p=a.minPositionX,y=a.maxPositionY,b=a.minPositionY,C=s.limitToBounds,x=s.alignmentAnimation,T=s.zoomAnimation,N=s.panning,E=N.lockAxisY,M=N.lockAxisX,w=T.animationType,O=x.sizeX,D=x.sizeY,B=x.velocityAlignmentTime,U=B,F=aC(t,m),Z=Math.max(F,U),ie=tf(t,O),ae=tf(t,D),oe=ie*l.offsetWidth/100,ce=ae*l.offsetHeight/100,Ae=g+oe,Oe=p-oe,H=y+ce,$=b-ce,re=t.transformState,ve=new Date().getTime();D_(t,w,Z,function(ye){var Te=t.transformState,_e=Te.scale,xe=Te.positionX,De=Te.positionY,at=new Date().getTime()-ve,tt=at/U,Ce=O_[x.animationType],ze=1-Ce(Math.min(1,tt)),Ve=1-ye,ne=xe+f*Ve,X=De+h*Ve,G=Py(ne,re.positionX,xe,M,C,p,g,Oe,Ae,ze),se=Py(X,re.positionY,De,E,C,b,y,$,H,ze);(xe!==ne||De!==X)&&t.setTransformState(_e,G,se)})}}function Ry(t,n){var a=t.transformState.scale;ji(t),Is(t,a),window.TouchEvent!==void 0&&n instanceof TouchEvent?$4(t,n):Q4(t,n)}function z_(t){var n=t.transformState.scale,a=t.setup,s=a.minScale,l=a.alignmentAnimation,u=l.disabled,f=l.sizeX,h=l.sizeY,m=l.animationTime,g=l.animationType,p=u||n<s||!f&&!h;if(!p){var y=J4(t);y&&ir(t,y,m,g)}}function Ly(t,n,a){var s=t.startCoords,l=t.setup,u=l.alignmentAnimation,f=u.sizeX,h=u.sizeY;if(s){var m=tC(t,n,a),g=m.x,p=m.y,y=tf(t,f),b=tf(t,h);sC(t,{x:g,y:p}),eC(t,g,p,y,b)}}function lC(t){if(t.isPanning){var n=t.setup.panning.velocityDisabled,a=t.velocity,s=t.wrapperComponent,l=t.contentComponent;t.isPanning=!1,t.animate=!1,t.animation=null;var u=s==null?void 0:s.getBoundingClientRect(),f=l==null?void 0:l.getBoundingClientRect(),h=(u==null?void 0:u.width)||0,m=(u==null?void 0:u.height)||0,g=(f==null?void 0:f.width)||0,p=(f==null?void 0:f.height)||0,y=h<g||m<p,b=!n&&a&&(a==null?void 0:a.total)>.1&&y;b?oC(t):z_(t)}}function Bg(t,n,a,s){var l=t.setup,u=l.minScale,f=l.maxScale,h=l.limitToBounds,m=zl(Gn(n,2),u,f,0,!1),g=Is(t,m),p=Sf(t,a,s,m,g,h),y=p.x,b=p.y;return{scale:m,positionX:y,positionY:b}}function N_(t,n,a){var s=t.transformState.scale,l=t.wrapperComponent,u=t.setup,f=u.minScale,h=u.limitToBounds,m=u.zoomAnimation,g=m.disabled,p=m.animationTime,y=m.animationType,b=g||s>=f;if((s>=1||h)&&z_(t),!(b||!l||!t.mounted)){var C=n||l.offsetWidth/2,x=a||l.offsetHeight/2,T=Bg(t,f,C,x);T&&ir(t,T,p,y)}}var Qa=function(){return Qa=Object.assign||function(n){for(var a,s=1,l=arguments.length;s<l;s++){a=arguments[s];for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(n[u]=a[u])}return n},Qa.apply(this,arguments)};function Vy(t,n,a){for(var s=0,l=n.length,u;s<l;s++)(u||!(s in n))&&(u||(u=Array.prototype.slice.call(n,0,s)),u[s]=n[s]);return t.concat(u||Array.prototype.slice.call(n))}var Cc={scale:1,positionX:0,positionY:0},dl={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,wheel:{step:.2,disabled:!1,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},P_=function(t){var n,a,s,l;return{previousScale:(n=t.initialScale)!==null&&n!==void 0?n:Cc.scale,scale:(a=t.initialScale)!==null&&a!==void 0?a:Cc.scale,positionX:(s=t.initialPositionX)!==null&&s!==void 0?s:Cc.positionX,positionY:(l=t.initialPositionY)!==null&&l!==void 0?l:Cc.positionY}},By=function(t){var n=Qa({},dl);return Object.keys(t).forEach(function(a){var s=typeof t[a]<"u",l=typeof dl[a]<"u";if(l&&s){var u=Object.prototype.toString.call(dl[a]),f=u==="[object Object]",h=u==="[object Array]";f?n[a]=Qa(Qa({},dl[a]),t[a]):h?n[a]=Vy(Vy([],dl[a],!0),t[a]):n[a]=t[a]}}),n},R_=function(t,n,a){var s=t.transformState.scale,l=t.wrapperComponent,u=t.setup,f=u.maxScale,h=u.minScale,m=u.zoomAnimation,g=m.size;if(!l)throw new Error("Wrapper is not mounted");var p=s*Math.exp(n*a),y=zl(Gn(p,3),h,f,g,!1);return y};function L_(t,n,a,s,l){var u=t.wrapperComponent,f=t.transformState,h=f.scale,m=f.positionX,g=f.positionY;if(!u)return console.error("No WrapperComponent found");var p=u.offsetWidth,y=u.offsetHeight,b=(p/2-m)/h,C=(y/2-g)/h,x=R_(t,n,a),T=Bg(t,x,b,C);if(!T)return console.error("Error during zoom event. New transformation state was not calculated.");ir(t,T,s,l)}function V_(t,n,a,s){var l=t.setup,u=t.wrapperComponent,f=l.limitToBounds,h=P_(t.props),m=t.transformState,g=m.scale,p=m.positionX,y=m.positionY;if(u){var b=Vg(t,h.scale),C=_f(h.positionX,h.positionY,b,f,0,0,u),x={scale:h.scale,positionX:C.x,positionY:C.y};g===h.scale&&p===h.positionX&&y===h.positionY||(s==null||s(),ir(t,x,n,a))}}function uC(t,n,a,s){var l=t.getBoundingClientRect(),u=n.getBoundingClientRect(),f=a.getBoundingClientRect(),h=u.x*s.scale,m=u.y*s.scale;return{x:(l.x-f.x+h)/s.scale,y:(l.y-f.y+m)/s.scale}}function cC(t,n,a){var s=t.wrapperComponent,l=t.contentComponent,u=t.transformState,f=t.setup,h=f.limitToBounds,m=f.minScale,g=f.maxScale;if(!s||!l)return u;var p=s.getBoundingClientRect(),y=n.getBoundingClientRect(),b=uC(n,s,l,u),C=b.x,x=b.y,T=y.width/u.scale,N=y.height/u.scale,E=s.offsetWidth/T,M=s.offsetHeight/N,w=zl(a||Math.min(E,M),m,g,0,!1),O=(p.width-T*w)/2,D=(p.height-N*w)/2,B=(p.left-C)*w+O,U=(p.top-x)*w+D,F=Vg(t,w),Z=_f(B,U,F,h,0,0,s),ie=Z.x,ae=Z.y;return{positionX:ie,positionY:ae,scale:w}}var fC=function(t){return function(n,a,s){n===void 0&&(n=.5),a===void 0&&(a=300),s===void 0&&(s="easeOut"),L_(t,1,n,a,s)}},dC=function(t){return function(n,a,s){n===void 0&&(n=.5),a===void 0&&(a=300),s===void 0&&(s="easeOut"),L_(t,-1,n,a,s)}},hC=function(t){return function(n,a,s,l,u){l===void 0&&(l=300),u===void 0&&(u="easeOut");var f=t.transformState,h=f.positionX,m=f.positionY,g=f.scale,p=t.wrapperComponent,y=t.contentComponent,b=t.setup.disabled;if(!(b||!p||!y)){var C={positionX:Number.isNaN(n)?h:n,positionY:Number.isNaN(a)?m:a,scale:Number.isNaN(s)?g:s};ir(t,C,l,u)}}},mC=function(t){return function(n,a){n===void 0&&(n=200),a===void 0&&(a="easeOut"),V_(t,n,a)}},gC=function(t){return function(n,a,s){a===void 0&&(a=200),s===void 0&&(s="easeOut");var l=t.transformState,u=t.wrapperComponent,f=t.contentComponent;if(u&&f){var h=B_(n||l.scale,u,f);ir(t,h,a,s)}}},pC=function(t){return function(n,a,s,l){s===void 0&&(s=600),l===void 0&&(l="easeOut"),ji(t);var u=t.wrapperComponent,f=typeof n=="string"?document.getElementById(n):n;if(u&&f&&u.contains(f)){var h=cC(t,f,a);ir(t,h,s,l)}}},et=function(t){return{instance:t,state:t.transformState,zoomIn:fC(t),zoomOut:dC(t),setTransform:hC(t),resetTransform:mC(t),centerView:gC(t),zoomToElement:pC(t)}},Wh=!1;function Qh(){try{var t={get passive(){return Wh=!0,!1}};return t}catch{return Wh=!1,Wh}}var wf=function(t,n){var a=t.tagName.toUpperCase(),s=n.find(function(u){return u.toUpperCase()===a});if(s)return!0;var l=n.find(function(u){return t.classList.contains(u)});return!!l},Ym=function(t){t&&clearTimeout(t)},vC=function(t,n,a){return"translate(".concat(t,"px, ").concat(n,"px) scale(").concat(a,")")},B_=function(t,n,a){var s=a.offsetWidth*t,l=a.offsetHeight*t,u=(n.offsetWidth-s)/2,f=(n.offsetHeight-l)/2;return{scale:t,positionX:u,positionY:f}};function yC(t){return function(n){t.forEach(function(a){typeof a=="function"?a(n):a!=null&&(a.current=n)})}}var bC=function(t,n){var a=t.setup.wheel,s=a.disabled,l=a.wheelDisabled,u=a.touchPadDisabled,f=a.excluded,h=t.isInitialized,m=t.isPanning,g=n.target,p=h&&!m&&!s&&g;if(!p||l&&!n.ctrlKey||u&&n.ctrlKey)return!1;var y=wf(g,f);return!y},_C=function(t){return t?t.deltaY<0?1:-1:0};function SC(t,n){var a=_C(t),s=z4(n,a);return s}function U_(t,n,a){var s=n.getBoundingClientRect(),l=0,u=0;if("clientX"in t)l=(t.clientX-s.left)/a,u=(t.clientY-s.top)/a;else{var f=t.touches[0];l=(f.clientX-s.left)/a,u=(f.clientY-s.top)/a}return(Number.isNaN(l)||Number.isNaN(u))&&console.error("No mouse or touch offset found"),{x:l,y:u}}var wC=function(t,n,a,s,l){var u=t.transformState.scale,f=t.wrapperComponent,h=t.setup,m=h.maxScale,g=h.minScale,p=h.zoomAnimation,y=h.disablePadding,b=p.size,C=p.disabled;if(!f)throw new Error("Wrapper is not mounted");var x=u+n*(u-u*a)*a,T=s?!1:!C,N=zl(Gn(x,3),g,m,b,T&&!y);return N},kC=function(t,n){var a=t.previousWheelEvent,s=t.transformState.scale,l=t.setup,u=l.maxScale,f=l.minScale;return a?s<u||s>f||Math.sign(a.deltaY)!==Math.sign(n.deltaY)||a.deltaY>0&&a.deltaY<n.deltaY||a.deltaY<0&&a.deltaY>n.deltaY||Math.sign(a.deltaY)!==Math.sign(n.deltaY):!1},xC=function(t,n){var a=t.setup.pinch,s=a.disabled,l=a.excluded,u=t.isInitialized,f=n.target,h=u&&!s&&f;if(!h)return!1;var m=wf(f,l);return!m},CC=function(t){var n=t.setup.pinch.disabled,a=t.isInitialized,s=t.pinchStartDistance,l=a&&!n&&s;return!!l},jC=function(t,n,a){var s=a.getBoundingClientRect(),l=t.touches,u=Gn(l[0].clientX-s.left,5),f=Gn(l[0].clientY-s.top,5),h=Gn(l[1].clientX-s.left,5),m=Gn(l[1].clientY-s.top,5);return{x:(u+h)/2/n,y:(f+m)/2/n}},I_=function(t){return Math.sqrt(Math.pow(t.touches[0].pageX-t.touches[1].pageX,2)+Math.pow(t.touches[0].pageY-t.touches[1].pageY,2))},TC=function(t,n){var a=t.pinchStartScale,s=t.pinchStartDistance,l=t.setup,u=l.maxScale,f=l.minScale,h=l.zoomAnimation,m=l.disablePadding,g=h.size,p=h.disabled;if(!a||s===null||!n)throw new Error("Pinch touches distance was not provided");if(n<0)return t.transformState.scale;var y=n/s,b=y*a;return zl(Gn(b,2),f,u,g,!p&&!m)},AC=160,EC=100,OC=function(t,n){var a=t.props,s=a.onWheelStart,l=a.onZoomStart;t.wheelStopEventTimer||(ji(t),ot(et(t),n,s),ot(et(t),n,l))},MC=function(t,n){var a=t.props,s=a.onWheel,l=a.onZoom,u=t.contentComponent,f=t.setup,h=t.transformState,m=h.scale,g=f.limitToBounds,p=f.centerZoomedOut,y=f.zoomAnimation,b=f.wheel,C=f.disablePadding,x=y.size,T=y.disabled,N=b.step;if(!u)throw new Error("Component not mounted");n.preventDefault(),n.stopPropagation();var E=SC(n,null),M=wC(t,E,N,!n.ctrlKey);if(m!==M){var w=Is(t,M),O=U_(n,u,m),D=T||x===0||p||C,B=g&&D,U=Sf(t,O.x,O.y,M,w,B),F=U.x,Z=U.y;t.previousWheelEvent=n,t.setTransformState(M,F,Z),ot(et(t),n,s),ot(et(t),n,l)}},DC=function(t,n){var a=t.props,s=a.onWheelStop,l=a.onZoomStop;Ym(t.wheelAnimationTimer),t.wheelAnimationTimer=setTimeout(function(){t.mounted&&(N_(t,n.x,n.y),t.wheelAnimationTimer=null)},EC);var u=kC(t,n);u&&(Ym(t.wheelStopEventTimer),t.wheelStopEventTimer=setTimeout(function(){t.mounted&&(t.wheelStopEventTimer=null,ot(et(t),n,s),ot(et(t),n,l))},AC))},zC=function(t,n){var a=I_(n);t.pinchStartDistance=a,t.lastDistance=a,t.pinchStartScale=t.transformState.scale,t.isPanning=!1,ji(t)},NC=function(t,n){var a=t.contentComponent,s=t.pinchStartDistance,l=t.transformState.scale,u=t.setup,f=u.limitToBounds,h=u.centerZoomedOut,m=u.zoomAnimation,g=m.disabled,p=m.size;if(!(s===null||!a)){var y=jC(n,l,a);if(!(!Number.isFinite(y.x)||!Number.isFinite(y.y))){var b=I_(n),C=TC(t,b);if(C!==l){var x=Is(t,C),T=g||p===0||h,N=f&&T,E=Sf(t,y.x,y.y,C,x,N),M=E.x,w=E.y;t.pinchMidpoint=y,t.lastDistance=b,t.setTransformState(C,M,w)}}}},PC=function(t){var n=t.pinchMidpoint;t.velocity=null,t.lastDistance=null,t.pinchMidpoint=null,t.pinchStartScale=null,t.pinchStartDistance=null,N_(t,n==null?void 0:n.x,n==null?void 0:n.y)},H_=function(t,n){var a=t.props.onZoomStop,s=t.setup.doubleClick.animationTime;Ym(t.doubleClickStopEventTimer),t.doubleClickStopEventTimer=setTimeout(function(){t.doubleClickStopEventTimer=null,ot(et(t),n,a)},s)},RC=function(t,n){var a=t.props,s=a.onZoomStart,l=a.onZoom,u=t.setup.doubleClick,f=u.animationTime,h=u.animationType;ot(et(t),n,s),V_(t,f,h,function(){return ot(et(t),n,l)}),H_(t,n)};function LC(t,n){var a=t.setup,s=t.doubleClickStopEventTimer,l=t.transformState,u=t.contentComponent,f=l.scale,h=t.props,m=h.onZoomStart,g=h.onZoom,p=a.doubleClick,y=p.disabled,b=p.mode,C=p.step,x=p.animationTime,T=p.animationType;if(!y&&!s){if(b==="reset")return RC(t,n);if(!u)return console.error("No ContentComponent found");var N=b==="zoomOut"?-1:1,E=R_(t,N,C);if(f!==E){ot(et(t),n,m);var M=U_(n,u,f),w=Bg(t,E,M.x,M.y);if(!w)return console.error("Error during zoom event. New transformation state was not calculated.");ot(et(t),n,g),ir(t,w,x,T),H_(t,n)}}}var VC=function(t,n){var a=t.isInitialized,s=t.setup,l=t.wrapperComponent,u=s.doubleClick,f=u.disabled,h=u.excluded,m=n.target,g=l==null?void 0:l.contains(m),p=a&&m&&g&&!f;if(!p)return!1;var y=wf(m,h);return!y},BC=(function(){function t(n){var a=this;this.mounted=!0,this.onChangeCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){a.initializeWindowEvents()},this.unmount=function(){a.cleanupWindowEvents()},this.update=function(s){Is(a,a.transformState.scale),a.setup=By(s)},this.initializeWindowEvents=function(){var s,l=Qh(),u=(s=a.wrapperComponent)===null||s===void 0?void 0:s.ownerDocument,f=u==null?void 0:u.defaultView;f==null||f.addEventListener("mousedown",a.onPanningStart,l),f==null||f.addEventListener("mousemove",a.onPanning,l),f==null||f.addEventListener("mouseup",a.onPanningStop,l),u==null||u.addEventListener("mouseleave",a.clearPanning,l),f==null||f.addEventListener("keyup",a.setKeyUnPressed,l),f==null||f.addEventListener("keydown",a.setKeyPressed,l)},this.cleanupWindowEvents=function(){var s,l,u=Qh(),f=(s=a.wrapperComponent)===null||s===void 0?void 0:s.ownerDocument,h=f==null?void 0:f.defaultView;h==null||h.removeEventListener("mousedown",a.onPanningStart,u),h==null||h.removeEventListener("mousemove",a.onPanning,u),h==null||h.removeEventListener("mouseup",a.onPanningStop,u),f==null||f.removeEventListener("mouseleave",a.clearPanning,u),h==null||h.removeEventListener("keyup",a.setKeyUnPressed,u),h==null||h.removeEventListener("keydown",a.setKeyPressed,u),document.removeEventListener("mouseleave",a.clearPanning,u),ji(a),(l=a.observer)===null||l===void 0||l.disconnect()},this.handleInitializeWrapperEvents=function(s){var l=Qh();s.addEventListener("wheel",a.onWheelZoom,l),s.addEventListener("dblclick",a.onDoubleClick,l),s.addEventListener("touchstart",a.onTouchPanningStart,l),s.addEventListener("touchmove",a.onTouchPanning,l),s.addEventListener("touchend",a.onTouchPanningStop,l)},this.handleInitialize=function(s){var l=a.setup.centerOnInit;a.applyTransformation(),l&&(a.setCenter(),a.observer=new ResizeObserver(function(){var u;a.setCenter(),(u=a.observer)===null||u===void 0||u.disconnect()}),a.observer.observe(s))},this.onWheelZoom=function(s){var l=a.setup.disabled;if(!l){var u=bC(a,s);if(u){var f=a.isPressingKeys(a.setup.wheel.activationKeys);f&&(OC(a,s),MC(a,s),DC(a,s))}}},this.onPanningStart=function(s){var l=a.setup.disabled,u=a.props.onPanningStart;if(!l){var f=zy(a,s);if(f){var h=a.isPressingKeys(a.setup.panning.activationKeys);h&&(s.preventDefault(),s.stopPropagation(),ji(a),Ry(a,s),ot(et(a),s,u))}}},this.onPanning=function(s){var l=a.setup.disabled,u=a.props.onPanning;if(!l){var f=Ny(a);if(f){var h=a.isPressingKeys(a.setup.panning.activationKeys);h&&(s.preventDefault(),s.stopPropagation(),Ly(a,s.clientX,s.clientY),ot(et(a),s,u))}}},this.onPanningStop=function(s){var l=a.props.onPanningStop;a.isPanning&&(lC(a),ot(et(a),s,l))},this.onPinchStart=function(s){var l=a.setup.disabled,u=a.props,f=u.onPinchingStart,h=u.onZoomStart;if(!l){var m=xC(a,s);m&&(zC(a,s),ji(a),ot(et(a),s,f),ot(et(a),s,h))}},this.onPinch=function(s){var l=a.setup.disabled,u=a.props,f=u.onPinching,h=u.onZoom;if(!l){var m=CC(a);m&&(s.preventDefault(),s.stopPropagation(),NC(a,s),ot(et(a),s,f),ot(et(a),s,h))}},this.onPinchStop=function(s){var l=a.props,u=l.onPinchingStop,f=l.onZoomStop;a.pinchStartScale&&(PC(a),ot(et(a),s,u),ot(et(a),s,f))},this.onTouchPanningStart=function(s){var l=a.setup.disabled,u=a.props.onPanningStart;if(!l){var f=zy(a,s);if(f){var h=a.lastTouch&&+new Date-a.lastTouch<200;if(h&&s.touches.length===1)a.onDoubleClick(s);else{a.lastTouch=+new Date,ji(a);var m=s.touches,g=m.length===1,p=m.length===2;g&&(ji(a),Ry(a,s),ot(et(a),s,u)),p&&a.onPinchStart(s)}}}},this.onTouchPanning=function(s){var l=a.setup.disabled,u=a.props.onPanning;if(a.isPanning&&s.touches.length===1){if(l)return;var f=Ny(a);if(!f)return;s.preventDefault(),s.stopPropagation();var h=s.touches[0];Ly(a,h.clientX,h.clientY),ot(et(a),s,u)}else s.touches.length>1&&a.onPinch(s)},this.onTouchPanningStop=function(s){a.onPanningStop(s),a.onPinchStop(s)},this.onDoubleClick=function(s){var l=a.setup.disabled;if(!l){var u=VC(a,s);u&&LC(a,s)}},this.clearPanning=function(s){a.isPanning&&a.onPanningStop(s)},this.setKeyPressed=function(s){a.pressedKeys[s.key]=!0},this.setKeyUnPressed=function(s){a.pressedKeys[s.key]=!1},this.isPressingKeys=function(s){return s.length?!!s.find(function(l){return a.pressedKeys[l]}):!0},this.setTransformState=function(s,l,u){var f=a.props.onTransformed;if(!Number.isNaN(s)&&!Number.isNaN(l)&&!Number.isNaN(u)){s!==a.transformState.scale&&(a.transformState.previousScale=a.transformState.scale,a.transformState.scale=s),a.transformState.positionX=l,a.transformState.positionY=u;var h=et(a);a.onChangeCallbacks.forEach(function(m){return m(h)}),ot(h,{scale:s,positionX:l,positionY:u},f),a.applyTransformation()}else console.error("Detected NaN set state values")},this.setCenter=function(){if(a.wrapperComponent&&a.contentComponent){var s=B_(a.transformState.scale,a.wrapperComponent,a.contentComponent);a.setTransformState(s.scale,s.positionX,s.positionY)}},this.handleTransformStyles=function(s,l,u){return a.props.customTransform?a.props.customTransform(s,l,u):vC(s,l,u)},this.applyTransformation=function(){if(!(!a.mounted||!a.contentComponent)){var s=a.transformState,l=s.scale,u=s.positionX,f=s.positionY,h=a.handleTransformStyles(u,f,l);a.contentComponent.style.transform=h}},this.getContext=function(){return et(a)},this.onChange=function(s){return a.onChangeCallbacks.has(s)||a.onChangeCallbacks.add(s),function(){a.onChangeCallbacks.delete(s)}},this.init=function(s,l){a.cleanupWindowEvents(),a.wrapperComponent=s,a.contentComponent=l,Is(a,a.transformState.scale),a.handleInitializeWrapperEvents(s),a.handleInitialize(l),a.initializeWindowEvents(),a.isInitialized=!0,ot(et(a),void 0,a.props.onInit)},this.props=n,this.setup=By(this.props),this.transformState=P_(this.props)}return t})(),Ug=me.createContext(null),UC=function(t,n){return typeof t=="function"?t(n):t},IC=me.forwardRef(function(t,n){var a=j.useState(0),s=a[1],l=t.children,u=j.useRef(new BC(t)).current,f=UC(t.children,et(u)),h=j.useCallback(function(){typeof l=="function"&&s(function(m){return m+1})},[l]);return j.useImperativeHandle(n,function(){return et(u)},[u]),j.useEffect(function(){u.update(t)},[u,t]),j.useEffect(function(){return u.onChange(h)},[u,t,h]),me.createElement(Ug.Provider,{value:u},f)});function HC(t,n){n===void 0&&(n={});var a=n.insertAt;if(!(typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",a==="top"&&s.firstChild?s.insertBefore(l,s.firstChild):s.appendChild(l),l.styleSheet?l.styleSheet.cssText=t:l.appendChild(document.createTextNode(t))}}var FC=`.transform-component-module_wrapper__7HFJe {
  position: relative;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  overflow: hidden;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  margin: 0;
  padding: 0;
}
.transform-component-module_content__uCDPE {
  display: flex;
  flex-wrap: wrap;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  margin: 0;
  padding: 0;
  transform-origin: 0% 0%;
}
.transform-component-module_content__uCDPE img {
  pointer-events: none;
}
`,Uy={wrapper:"transform-component-module_wrapper__7HFJe",content:"transform-component-module_content__uCDPE"};HC(FC);var GC=function(t){var n=t.children,a=t.wrapperClass,s=a===void 0?"":a,l=t.contentClass,u=l===void 0?"":l,f=t.wrapperStyle,h=t.contentStyle,m=t.wrapperProps,g=m===void 0?{}:m,p=t.contentProps,y=p===void 0?{}:p,b=j.useContext(Ug).init,C=j.useRef(null),x=j.useRef(null);return j.useEffect(function(){var T=C.current,N=x.current;T!==null&&N!==null&&b&&b(T,N)},[]),me.createElement("div",Qa({},g,{ref:C,className:"react-transform-wrapper ".concat(Uy.wrapper," ").concat(s),style:f}),me.createElement("div",Qa({},y,{ref:x,className:"react-transform-component ".concat(Uy.content," ").concat(u),style:h}),n))};me.forwardRef(function(t,n){var a=j.useRef(null),s=j.useContext(Ug);return j.useEffect(function(){return s.onChange(function(l){if(a.current){var u=0,f=0;a.current.style.transform=s.handleTransformStyles(u,f,1/l.state.scale)}})},[s]),me.createElement("div",Qa({},t,{ref:yC([a,n])}))});var _l=function(){return _l=Object.assign||function(t){for(var n,a=1,s=arguments.length;a<s;a++){n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},_l.apply(this,arguments)},YC=function(t,n){var a={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&n.indexOf(s)<0&&(a[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(t);l<s.length;l++)n.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(t,s[l])&&(a[s[l]]=t[s[l]]);return a},Iy=!1,F_=j.forwardRef(function(t,n){var a=t.style,s=YC(t,["style"]),l=G_();!Iy&&(a!=null&&a.height)&&(Iy=!0,console.warn("<Div100vh /> overrides the height property of the style prop"));var u=_l(_l({},a),{height:l?l+"px":"100vh"});return me.createElement("div",_l({ref:n,style:u},s))});F_.displayName="Div100vh";function G_(){var t=j.useState(Hy),n=t[0],a=t[1],s=XC();return j.useEffect(function(){if(!s)return;function l(){var u=Hy();a(u)}return window.addEventListener("resize",l),function(){return window.removeEventListener("resize",l)}},[s]),s?n:null}function Hy(){return Y_()?window.innerHeight:null}function XC(){var t=j.useState(!1),n=t[0],a=t[1];return j.useEffect(function(){Y_()&&a(!0)},[]),n}function Y_(){return typeof window<"u"&&typeof document<"u"}var $h={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/var Fy;function qC(){return Fy||(Fy=1,(function(t){(function(){var n=!!(typeof window<"u"&&window.document&&window.document.createElement),a={canUseDOM:n,canUseWorkers:typeof Worker<"u",canUseEventListeners:n&&!!(window.addEventListener||window.attachEvent),canUseViewport:n&&!!window.screen};t.exports?t.exports=a:window.ExecutionEnvironment=a})()})($h)),$h.exports}var Gy=qC(),X_="keydown",q_="keypress",Ig="keyup",KC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ZC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};function WC(t){if(!t)return!1;var n=t.tagName,a=QC(t);return n==="INPUT"||n==="TEXTAREA"||a}function QC(t){return typeof t.getAttribute!="function"?!1:!!t.getAttribute("contenteditable")}function Jh(t,n){return Array.isArray(t)?t.includes(n):t===n}function $C(t,n){var a=n.keyCode,s=n.keyValue,l=n.code;if(!em(s)){var u=JC(t);if(Jh(s,u))return!0}if(!em(l)&&Jh(l,t.code))return!0;if(!em(a)){var f=t.keyCode||t.which;if(Jh(a,f))return!0}return!1}function em(t){return t==null}function JC(t){var n=t.key,a=t.keyCode,s=t.type;if(n){var l=KC[n]||n;if(l!=="Unidentified")return l}if(s===q_){var u=ej(t);return u===13?"Enter":String.fromCharCode(u)}return s===X_||s===Ig?ZC[String(a)]||"Unidentified":""}function ej(t){var n=t.charCode,a=t.keyCode;if("charCode"in t){if(n===0&&a===13)return 13}else n=a;return n>=32||n===13?n:0}var tj=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")},Yy=(function(){function t(n,a){for(var s=0;s<a.length;s++){var l=a[s];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}return function(n,a,s){return a&&t(n.prototype,a),s&&t(n,s),n}})(),nj=function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)},ij=function(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:t},Ya=(function(t){nj(n,t),Yy(n,[{key:"shouldComponentUpdate",value:function(){return!1}}]);function n(a){tj(this,n);var s=ij(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,a));return s.handleKey=function(l){var u=s.props,f=u.keyValue,h=u.keyCode,m=u.code,g=u.onKeyHandle;if(g){var p=l.target;p instanceof window.HTMLElement&&WC(p)||$C(l,{keyValue:f,keyCode:h,code:m})&&g(l)}},a.keyCode&&console.warn("Warning: Deprecated propType: `keyCode` is deprecated in favour of `code` for `KeyHandler`."),!a.keyValue&&!a.keyCode&&!a.code&&console.error("Warning: Failed propType: Missing prop `code`, `keyValue` or `keyCode` for `KeyHandler`."),s}return Yy(n,[{key:"componentDidMount",value:function(){Gy.canUseDOM&&window.document.addEventListener(this.props.keyEventName,this.handleKey)}},{key:"componentWillUnmount",value:function(){Gy.canUseDOM&&window.document.removeEventListener(this.props.keyEventName,this.handleKey)}},{key:"render",value:function(){return null}}]),n})(me.Component);Ya.propTypes={keyValue:J.oneOfType([J.string,J.arrayOf(J.string)]),keyCode:J.oneOfType([J.number,J.arrayOf(J.number)]),code:J.oneOfType([J.string,J.arrayOf(J.string)]),keyEventName:J.oneOf([X_,q_,Ig]),onKeyHandle:J.func};Ya.defaultProps={keyEventName:Ig};var tm,Xy;function aj(){if(Xy)return tm;Xy=1;var t="Expected a function",n=NaN,a="[object Symbol]",s=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,h=parseInt,m=typeof vc=="object"&&vc&&vc.Object===Object&&vc,g=typeof self=="object"&&self&&self.Object===Object&&self,p=m||g||Function("return this")(),y=Object.prototype,b=y.toString,C=Math.max,x=Math.min,T=function(){return p.Date.now()};function N(D,B,U){var F,Z,ie,ae,oe,ce,Ae=0,Oe=!1,H=!1,$=!0;if(typeof D!="function")throw new TypeError(t);B=O(B)||0,E(U)&&(Oe=!!U.leading,H="maxWait"in U,ie=H?C(O(U.maxWait)||0,B):ie,$="trailing"in U?!!U.trailing:$);function re(Ce){var ze=F,Ve=Z;return F=Z=void 0,Ae=Ce,ae=D.apply(Ve,ze),ae}function ve(Ce){return Ae=Ce,oe=setTimeout(_e,B),Oe?re(Ce):ae}function ye(Ce){var ze=Ce-ce,Ve=Ce-Ae,ne=B-ze;return H?x(ne,ie-Ve):ne}function Te(Ce){var ze=Ce-ce,Ve=Ce-Ae;return ce===void 0||ze>=B||ze<0||H&&Ve>=ie}function _e(){var Ce=T();if(Te(Ce))return xe(Ce);oe=setTimeout(_e,ye(Ce))}function xe(Ce){return oe=void 0,$&&F?re(Ce):(F=Z=void 0,ae)}function De(){oe!==void 0&&clearTimeout(oe),Ae=0,F=ce=Z=oe=void 0}function at(){return oe===void 0?ae:xe(T())}function tt(){var Ce=T(),ze=Te(Ce);if(F=arguments,Z=this,ce=Ce,ze){if(oe===void 0)return ve(ce);if(H)return oe=setTimeout(_e,B),re(ce)}return oe===void 0&&(oe=setTimeout(_e,B)),ae}return tt.cancel=De,tt.flush=at,tt}function E(D){var B=typeof D;return!!D&&(B=="object"||B=="function")}function M(D){return!!D&&typeof D=="object"}function w(D){return typeof D=="symbol"||M(D)&&b.call(D)==a}function O(D){if(typeof D=="number")return D;if(w(D))return n;if(E(D)){var B=typeof D.valueOf=="function"?D.valueOf():D;D=E(B)?B+"":B}if(typeof D!="string")return D===0?D:+D;D=D.replace(s,"");var U=u.test(D);return U||f.test(D)?h(D.slice(2),U?2:8):l.test(D)?n:+D}return tm=N,tm}aj();var rj=typeof window<"u"?j.useLayoutEffect:j.useEffect;function sj(t,n){const a=j.useRef(t);rj(()=>{a.current=t},[t]),j.useEffect(()=>{if(n===null)return;const s=setInterval(()=>{a.current()},n);return()=>{clearInterval(s)}},[n])}function oj(t){return Object.prototype.toString.call(t)==="[object Object]"}function qy(t){return oj(t)||Array.isArray(t)}function lj(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Hg(t,n){const a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;const l=JSON.stringify(Object.keys(t.breakpoints||{})),u=JSON.stringify(Object.keys(n.breakpoints||{}));return l!==u?!1:a.every(f=>{const h=t[f],m=n[f];return typeof h=="function"?`${h}`==`${m}`:!qy(h)||!qy(m)?h===m:Hg(h,m)})}function Ky(t){return t.concat().sort((n,a)=>n.name>a.name?1:-1).map(n=>n.options)}function uj(t,n){if(t.length!==n.length)return!1;const a=Ky(t),s=Ky(n);return a.every((l,u)=>{const f=s[u];return Hg(l,f)})}function Fg(t){return typeof t=="number"}function Xm(t){return typeof t=="string"}function kf(t){return typeof t=="boolean"}function Zy(t){return Object.prototype.toString.call(t)==="[object Object]"}function ut(t){return Math.abs(t)}function Gg(t){return Math.sign(t)}function Sl(t,n){return ut(t-n)}function cj(t,n){if(t===0||n===0||ut(t)<=ut(n))return 0;const a=Sl(ut(t),ut(n));return ut(a/t)}function fj(t){return Math.round(t*100)/100}function Tl(t){return Al(t).map(Number)}function ai(t){return t[Nl(t)]}function Nl(t){return Math.max(0,t.length-1)}function Yg(t,n){return n===Nl(t)}function Wy(t,n=0){return Array.from(Array(t),(a,s)=>n+s)}function Al(t){return Object.keys(t)}function K_(t,n){return[t,n].reduce((a,s)=>(Al(s).forEach(l=>{const u=a[l],f=s[l],h=Zy(u)&&Zy(f);a[l]=h?K_(u,f):f}),a),{})}function qm(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function dj(t,n){const a={start:s,center:l,end:u};function s(){return 0}function l(m){return u(m)/2}function u(m){return n-m}function f(m,g){return Xm(t)?a[t](m):t(n,m,g)}return{measure:f}}function El(){let t=[];function n(l,u,f,h={passive:!0}){let m;if("addEventListener"in l)l.addEventListener(u,f,h),m=()=>l.removeEventListener(u,f,h);else{const g=l;g.addListener(f),m=()=>g.removeListener(f)}return t.push(m),s}function a(){t=t.filter(l=>l())}const s={add:n,clear:a};return s}function hj(t,n,a,s){const l=El(),u=1e3/60;let f=null,h=0,m=0;function g(){l.add(t,"visibilitychange",()=>{t.hidden&&x()})}function p(){C(),l.clear()}function y(N){if(!m)return;f||(f=N,a(),a());const E=N-f;for(f=N,h+=E;h>=u;)a(),h-=u;const M=h/u;s(M),m&&(m=n.requestAnimationFrame(y))}function b(){m||(m=n.requestAnimationFrame(y))}function C(){n.cancelAnimationFrame(m),f=null,h=0,m=0}function x(){f=null,h=0}return{init:g,destroy:p,start:b,stop:C,update:a,render:s}}function mj(t,n){const a=n==="rtl",s=t==="y",l=s?"y":"x",u=s?"x":"y",f=!s&&a?-1:1,h=p(),m=y();function g(x){const{height:T,width:N}=x;return s?T:N}function p(){return s?"top":a?"right":"left"}function y(){return s?"bottom":a?"left":"right"}function b(x){return x*f}return{scroll:l,cross:u,startEdge:h,endEdge:m,measureSize:g,direction:b}}function Ir(t=0,n=0){const a=ut(t-n);function s(g){return g<t}function l(g){return g>n}function u(g){return s(g)||l(g)}function f(g){return u(g)?s(g)?t:n:g}function h(g){return a?g-a*Math.ceil((g-n)/a):g}return{length:a,max:n,min:t,constrain:f,reachedAny:u,reachedMax:l,reachedMin:s,removeOffset:h}}function Z_(t,n,a){const{constrain:s}=Ir(0,t),l=t+1;let u=f(n);function f(b){return a?ut((l+b)%l):s(b)}function h(){return u}function m(b){return u=f(b),y}function g(b){return p().set(h()+b)}function p(){return Z_(t,h(),a)}const y={get:h,set:m,add:g,clone:p};return y}function gj(t,n,a,s,l,u,f,h,m,g,p,y,b,C,x,T,N,E,M){const{cross:w,direction:O}=t,D=["INPUT","SELECT","TEXTAREA"],B={passive:!1},U=El(),F=El(),Z=Ir(50,225).constrain(C.measure(20)),ie={mouse:300,touch:400},ae={mouse:500,touch:600},oe=x?43:25;let ce=!1,Ae=0,Oe=0,H=!1,$=!1,re=!1,ve=!1;function ye(G){if(!M)return;function se(ue){(kf(M)||M(G,ue))&&tt(ue)}const le=n;U.add(le,"dragstart",ue=>ue.preventDefault(),B).add(le,"touchmove",()=>{},B).add(le,"touchend",()=>{}).add(le,"touchstart",se).add(le,"mousedown",se).add(le,"touchcancel",ze).add(le,"contextmenu",ze).add(le,"click",Ve,!0)}function Te(){U.clear(),F.clear()}function _e(){const G=ve?a:n;F.add(G,"touchmove",Ce,B).add(G,"touchend",ze).add(G,"mousemove",Ce,B).add(G,"mouseup",ze)}function xe(G){const se=G.nodeName||"";return D.includes(se)}function De(){return(x?ae:ie)[ve?"mouse":"touch"]}function at(G,se){const le=y.add(Gg(G)*-1),ue=p.byDistance(G,!x).distance;return x||ut(G)<Z?ue:N&&se?ue*.5:p.byIndex(le.get(),0).distance}function tt(G){const se=qm(G,s);ve=se,re=x&&se&&!G.buttons&&ce,ce=Sl(l.get(),f.get())>=2,!(se&&G.button!==0)&&(xe(G.target)||(H=!0,u.pointerDown(G),g.useFriction(0).useDuration(0),l.set(f),_e(),Ae=u.readPoint(G),Oe=u.readPoint(G,w),b.emit("pointerDown")))}function Ce(G){if(!qm(G,s)&&G.touches.length>=2)return ze(G);const le=u.readPoint(G),ue=u.readPoint(G,w),Ne=Sl(le,Ae),Ye=Sl(ue,Oe);if(!$&&!ve&&(!G.cancelable||($=Ne>Ye,!$)))return ze(G);const nt=u.pointerMove(G);Ne>T&&(re=!0),g.useFriction(.3).useDuration(.75),h.start(),l.add(O(nt)),G.preventDefault()}function ze(G){const le=p.byDistance(0,!1).index!==y.get(),ue=u.pointerUp(G)*De(),Ne=at(O(ue),le),Ye=cj(ue,Ne),nt=oe-10*Ye,rt=E+Ye/50;$=!1,H=!1,F.clear(),g.useDuration(nt).useFriction(rt),m.distance(Ne,!x),ve=!1,b.emit("pointerUp")}function Ve(G){re&&(G.stopPropagation(),G.preventDefault(),re=!1)}function ne(){return H}return{init:ye,destroy:Te,pointerDown:ne}}function pj(t,n){let s,l;function u(y){return y.timeStamp}function f(y,b){const x=`client${(b||t.scroll)==="x"?"X":"Y"}`;return(qm(y,n)?y:y.touches[0])[x]}function h(y){return s=y,l=y,f(y)}function m(y){const b=f(y)-f(l),C=u(y)-u(s)>170;return l=y,C&&(s=y),b}function g(y){if(!s||!l)return 0;const b=f(l)-f(s),C=u(y)-u(s),x=u(y)-u(l)>170,T=b/C;return C&&!x&&ut(T)>.1?T:0}return{pointerDown:h,pointerMove:m,pointerUp:g,readPoint:f}}function vj(){function t(a){const{offsetTop:s,offsetLeft:l,offsetWidth:u,offsetHeight:f}=a;return{top:s,right:l+u,bottom:s+f,left:l,width:u,height:f}}return{measure:t}}function yj(t){function n(s){return t*(s/100)}return{measure:n}}function bj(t,n,a,s,l,u,f){const h=[t].concat(s);let m,g,p=[],y=!1;function b(N){return l.measureSize(f.measure(N))}function C(N){if(!u)return;g=b(t),p=s.map(b);function E(M){for(const w of M){if(y)return;const O=w.target===t,D=s.indexOf(w.target),B=O?g:p[D],U=b(O?t:s[D]);if(ut(U-B)>=.5){N.reInit(),n.emit("resize");break}}}m=new ResizeObserver(M=>{(kf(u)||u(N,M))&&E(M)}),a.requestAnimationFrame(()=>{h.forEach(M=>m.observe(M))})}function x(){y=!0,m&&m.disconnect()}return{init:C,destroy:x}}function _j(t,n,a,s,l,u){let f=0,h=0,m=l,g=u,p=t.get(),y=0;function b(){const B=s.get()-t.get(),U=!m;let F=0;return U?(f=0,a.set(s),t.set(s),F=B):(a.set(t),f+=B/m,f*=g,p+=f,t.add(f),F=p-y),h=Gg(F),y=p,D}function C(){const B=s.get()-n.get();return ut(B)<.001}function x(){return m}function T(){return h}function N(){return f}function E(){return w(l)}function M(){return O(u)}function w(B){return m=B,D}function O(B){return g=B,D}const D={direction:T,duration:x,velocity:N,seek:b,settled:C,useBaseFriction:M,useBaseDuration:E,useFriction:O,useDuration:w};return D}function Sj(t,n,a,s,l){const u=l.measure(10),f=l.measure(50),h=Ir(.1,.99);let m=!1;function g(){return!(m||!t.reachedAny(a.get())||!t.reachedAny(n.get()))}function p(C){if(!g())return;const x=t.reachedMin(n.get())?"min":"max",T=ut(t[x]-n.get()),N=a.get()-n.get(),E=h.constrain(T/f);a.subtract(N*E),!C&&ut(N)<u&&(a.set(t.constrain(a.get())),s.useDuration(25).useBaseFriction())}function y(C){m=!C}return{shouldConstrain:g,constrain:p,toggleActive:y}}function wj(t,n,a,s,l){const u=Ir(-n+t,0),f=y(),h=p(),m=b();function g(x,T){return Sl(x,T)<=1}function p(){const x=f[0],T=ai(f),N=f.lastIndexOf(x),E=f.indexOf(T)+1;return Ir(N,E)}function y(){return a.map((x,T)=>{const{min:N,max:E}=u,M=u.constrain(x),w=!T,O=Yg(a,T);return w?E:O||g(N,M)?N:g(E,M)?E:M}).map(x=>parseFloat(x.toFixed(3)))}function b(){if(n<=t+l)return[u.max];if(s==="keepSnaps")return f;const{min:x,max:T}=h;return f.slice(x,T)}return{snapsContained:m,scrollContainLimit:h}}function kj(t,n,a){const s=n[0],l=a?s-t:ai(n);return{limit:Ir(l,s)}}function xj(t,n,a,s){const u=n.min+.1,f=n.max+.1,{reachedMin:h,reachedMax:m}=Ir(u,f);function g(b){return b===1?m(a.get()):b===-1?h(a.get()):!1}function p(b){if(!g(b))return;const C=t*(b*-1);s.forEach(x=>x.add(C))}return{loop:p}}function Cj(t){const{max:n,length:a}=t;function s(u){const f=u-n;return a?f/-a:0}return{get:s}}function jj(t,n,a,s,l){const{startEdge:u,endEdge:f}=t,{groupSlides:h}=l,m=y().map(n.measure),g=b(),p=C();function y(){return h(s).map(T=>ai(T)[f]-T[0][u]).map(ut)}function b(){return s.map(T=>a[u]-T[u]).map(T=>-ut(T))}function C(){return h(g).map(T=>T[0]).map((T,N)=>T+m[N])}return{snaps:g,snapsAligned:p}}function Tj(t,n,a,s,l,u){const{groupSlides:f}=l,{min:h,max:m}=s,g=p();function p(){const b=f(u),C=!t||n==="keepSnaps";return a.length===1?[u]:C?b:b.slice(h,m).map((x,T,N)=>{const E=!T,M=Yg(N,T);if(E){const w=ai(N[0])+1;return Wy(w)}if(M){const w=Nl(u)-ai(N)[0]+1;return Wy(w,ai(N)[0])}return x})}return{slideRegistry:g}}function Aj(t,n,a,s,l){const{reachedAny:u,removeOffset:f,constrain:h}=s;function m(x){return x.concat().sort((T,N)=>ut(T)-ut(N))[0]}function g(x){const T=t?f(x):h(x),N=n.map((M,w)=>({diff:p(M-T,0),index:w})).sort((M,w)=>ut(M.diff)-ut(w.diff)),{index:E}=N[0];return{index:E,distance:T}}function p(x,T){const N=[x,x+a,x-a];if(!t)return x;if(!T)return m(N);const E=N.filter(M=>Gg(M)===T);return E.length?m(E):ai(N)-a}function y(x,T){const N=n[x]-l.get(),E=p(N,T);return{index:x,distance:E}}function b(x,T){const N=l.get()+x,{index:E,distance:M}=g(N),w=!t&&u(N);if(!T||w)return{index:E,distance:x};const O=n[E]-M,D=x+p(O,0);return{index:E,distance:D}}return{byDistance:b,byIndex:y,shortcut:p}}function Ej(t,n,a,s,l,u,f){function h(y){const b=y.distance,C=y.index!==n.get();u.add(b),b&&(s.duration()?t.start():(t.update(),t.render(1),t.update())),C&&(a.set(n.get()),n.set(y.index),f.emit("select"))}function m(y,b){const C=l.byDistance(y,b);h(C)}function g(y,b){const C=n.clone().set(y),x=l.byIndex(C.get(),b);h(x)}return{distance:m,index:g}}function Oj(t,n,a,s,l,u,f,h){const m={passive:!0,capture:!0};let g=0;function p(C){if(!h)return;function x(T){if(new Date().getTime()-g>10)return;f.emit("slideFocusStart"),t.scrollLeft=0;const M=a.findIndex(w=>w.includes(T));Fg(M)&&(l.useDuration(0),s.index(M,0),f.emit("slideFocus"))}u.add(document,"keydown",y,!1),n.forEach((T,N)=>{u.add(T,"focus",E=>{(kf(h)||h(C,E))&&x(N)},m)})}function y(C){C.code==="Tab"&&(g=new Date().getTime())}return{init:p}}function gl(t){let n=t;function a(){return n}function s(m){n=f(m)}function l(m){n+=f(m)}function u(m){n-=f(m)}function f(m){return Fg(m)?m:m.get()}return{get:a,set:s,add:l,subtract:u}}function W_(t,n){const a=t.scroll==="x"?f:h,s=n.style;let l=null,u=!1;function f(b){return`translate3d(${b}px,0px,0px)`}function h(b){return`translate3d(0px,${b}px,0px)`}function m(b){if(u)return;const C=fj(t.direction(b));C!==l&&(s.transform=a(C),l=C)}function g(b){u=!b}function p(){u||(s.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:p,to:m,toggleActive:g}}function Mj(t,n,a,s,l,u,f,h,m){const p=Tl(l),y=Tl(l).reverse(),b=E().concat(M());function C(U,F){return U.reduce((Z,ie)=>Z-l[ie],F)}function x(U,F){return U.reduce((Z,ie)=>C(Z,F)>0?Z.concat([ie]):Z,[])}function T(U){return u.map((F,Z)=>({start:F-s[Z]+.5+U,end:F+n-.5+U}))}function N(U,F,Z){const ie=T(F);return U.map(ae=>{const oe=Z?0:-a,ce=Z?a:0,Ae=Z?"end":"start",Oe=ie[ae][Ae];return{index:ae,loopPoint:Oe,slideLocation:gl(-1),translate:W_(t,m[ae]),target:()=>h.get()>Oe?oe:ce}})}function E(){const U=f[0],F=x(y,U);return N(F,a,!1)}function M(){const U=n-f[0]-1,F=x(p,U);return N(F,-a,!0)}function w(){return b.every(({index:U})=>{const F=p.filter(Z=>Z!==U);return C(F,n)<=.1})}function O(){b.forEach(U=>{const{target:F,translate:Z,slideLocation:ie}=U,ae=F();ae!==ie.get()&&(Z.to(ae),ie.set(ae))})}function D(){b.forEach(U=>U.translate.clear())}return{canLoop:w,clear:D,loop:O,loopPoints:b}}function Dj(t,n,a){let s,l=!1;function u(m){if(!a)return;function g(p){for(const y of p)if(y.type==="childList"){m.reInit(),n.emit("slidesChanged");break}}s=new MutationObserver(p=>{l||(kf(a)||a(m,p))&&g(p)}),s.observe(t,{childList:!0})}function f(){s&&s.disconnect(),l=!0}return{init:u,destroy:f}}function zj(t,n,a,s){const l={};let u=null,f=null,h,m=!1;function g(){h=new IntersectionObserver(x=>{m||(x.forEach(T=>{const N=n.indexOf(T.target);l[N]=T}),u=null,f=null,a.emit("slidesInView"))},{root:t.parentElement,threshold:s}),n.forEach(x=>h.observe(x))}function p(){h&&h.disconnect(),m=!0}function y(x){return Al(l).reduce((T,N)=>{const E=parseInt(N),{isIntersecting:M}=l[E];return(x&&M||!x&&!M)&&T.push(E),T},[])}function b(x=!0){if(x&&u)return u;if(!x&&f)return f;const T=y(x);return x&&(u=T),x||(f=T),T}return{init:g,destroy:p,get:b}}function Nj(t,n,a,s,l,u){const{measureSize:f,startEdge:h,endEdge:m}=t,g=a[0]&&l,p=x(),y=T(),b=a.map(f),C=N();function x(){if(!g)return 0;const M=a[0];return ut(n[h]-M[h])}function T(){if(!g)return 0;const M=u.getComputedStyle(ai(s));return parseFloat(M.getPropertyValue(`margin-${m}`))}function N(){return a.map((M,w,O)=>{const D=!w,B=Yg(O,w);return D?b[w]+p:B?b[w]+y:O[w+1][h]-M[h]}).map(ut)}return{slideSizes:b,slideSizesWithGaps:C,startGap:p,endGap:y}}function Pj(t,n,a,s,l,u,f,h,m){const{startEdge:g,endEdge:p,direction:y}=t,b=Fg(a);function C(E,M){return Tl(E).filter(w=>w%M===0).map(w=>E.slice(w,w+M))}function x(E){return E.length?Tl(E).reduce((M,w,O)=>{const D=ai(M)||0,B=D===0,U=w===Nl(E),F=l[g]-u[D][g],Z=l[g]-u[w][p],ie=!s&&B?y(f):0,ae=!s&&U?y(h):0,oe=ut(Z-ae-(F+ie));return O&&oe>n+m&&M.push(w),U&&M.push(E.length),M},[]).map((M,w,O)=>{const D=Math.max(O[w-1]||0);return E.slice(D,M)}):[]}function T(E){return b?C(E,a):x(E)}return{groupSlides:T}}function Rj(t,n,a,s,l,u,f){const{align:h,axis:m,direction:g,startIndex:p,loop:y,duration:b,dragFree:C,dragThreshold:x,inViewThreshold:T,slidesToScroll:N,skipSnaps:E,containScroll:M,watchResize:w,watchSlides:O,watchDrag:D,watchFocus:B}=u,U=2,F=vj(),Z=F.measure(n),ie=a.map(F.measure),ae=mj(m,g),oe=ae.measureSize(Z),ce=yj(oe),Ae=dj(h,oe),Oe=!y&&!!M,H=y||!!M,{slideSizes:$,slideSizesWithGaps:re,startGap:ve,endGap:ye}=Nj(ae,Z,ie,a,H,l),Te=Pj(ae,oe,N,y,Z,ie,ve,ye,U),{snaps:_e,snapsAligned:xe}=jj(ae,Ae,Z,ie,Te),De=-ai(_e)+ai(re),{snapsContained:at,scrollContainLimit:tt}=wj(oe,De,xe,M,U),Ce=Oe?at:xe,{limit:ze}=kj(De,Ce,y),Ve=Z_(Nl(Ce),p,y),ne=Ve.clone(),X=Tl(a),G=({dragHandler:Yn,scrollBody:or,scrollBounds:lr,options:{loop:En}})=>{En||lr.constrain(Yn.pointerDown()),or.seek()},se=({scrollBody:Yn,translate:or,location:lr,offsetLocation:En,previousLocation:Lt,scrollLooper:On,slideLooper:Vt,dragHandler:Pl,animation:Xs,eventHandler:oi,scrollBounds:ur,options:{loop:li}},ui)=>{const yn=Yn.settled(),cr=!ur.shouldConstrain(),ci=li?yn:yn&&cr,qs=ci&&!Pl.pointerDown();qs&&Xs.stop();const fr=lr.get()*ui+Lt.get()*(1-ui);En.set(fr),li&&(On.loop(Yn.direction()),Vt.loop()),or.to(En.get()),qs&&oi.emit("settle"),ci||oi.emit("scroll")},le=hj(s,l,()=>G(sr),Yn=>se(sr,Yn)),ue=.68,Ne=Ce[Ve.get()],Ye=gl(Ne),nt=gl(Ne),rt=gl(Ne),ct=gl(Ne),At=_j(Ye,rt,nt,ct,b,ue),Gr=Aj(y,Ce,De,ze,ct),ua=Ej(le,Ve,ne,At,Gr,ct,f),Rt=Cj(ze),ar=El(),Ys=zj(n,a,f,T),{slideRegistry:si}=Tj(Oe,M,Ce,tt,Te,X),rr=Oj(t,a,si,ua,At,ar,f,B),sr={ownerDocument:s,ownerWindow:l,eventHandler:f,containerRect:Z,slideRects:ie,animation:le,axis:ae,dragHandler:gj(ae,t,s,l,ct,pj(ae,l),Ye,le,ua,At,Gr,Ve,f,ce,C,x,E,ue,D),eventStore:ar,percentOfView:ce,index:Ve,indexPrevious:ne,limit:ze,location:Ye,offsetLocation:rt,previousLocation:nt,options:u,resizeHandler:bj(n,f,l,a,ae,w,F),scrollBody:At,scrollBounds:Sj(ze,rt,ct,At,ce),scrollLooper:xj(De,ze,rt,[Ye,rt,nt,ct]),scrollProgress:Rt,scrollSnapList:Ce.map(Rt.get),scrollSnaps:Ce,scrollTarget:Gr,scrollTo:ua,slideLooper:Mj(ae,oe,De,$,re,_e,Ce,rt,a),slideFocus:rr,slidesHandler:Dj(n,f,O),slidesInView:Ys,slideIndexes:X,slideRegistry:si,slidesToScroll:Te,target:ct,translate:W_(ae,n)};return sr}function Lj(){let t={},n;function a(g){n=g}function s(g){return t[g]||[]}function l(g){return s(g).forEach(p=>p(n,g)),m}function u(g,p){return t[g]=s(g).concat([p]),m}function f(g,p){return t[g]=s(g).filter(y=>y!==p),m}function h(){t={}}const m={init:a,emit:l,off:f,on:u,clear:h};return m}const Vj={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function Bj(t){function n(u,f){return K_(u,f||{})}function a(u){const f=u.breakpoints||{},h=Al(f).filter(m=>t.matchMedia(m).matches).map(m=>f[m]).reduce((m,g)=>n(m,g),{});return n(u,h)}function s(u){return u.map(f=>Al(f.breakpoints||{})).reduce((f,h)=>f.concat(h),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:a,optionsMediaQueries:s}}function Uj(t){let n=[];function a(u,f){return n=f.filter(({options:h})=>t.optionsAtMedia(h).active!==!1),n.forEach(h=>h.init(u,t)),f.reduce((h,m)=>Object.assign(h,{[m.name]:m}),{})}function s(){n=n.filter(u=>u.destroy())}return{init:a,destroy:s}}function nf(t,n,a){const s=t.ownerDocument,l=s.defaultView,u=Bj(l),f=Uj(u),h=El(),m=Lj(),{mergeOptions:g,optionsAtMedia:p,optionsMediaQueries:y}=u,{on:b,off:C,emit:x}=m,T=ae;let N=!1,E,M=g(Vj,nf.globalOptions),w=g(M),O=[],D,B,U;function F(){const{container:X,slides:G}=w;B=(Xm(X)?t.querySelector(X):X)||t.children[0];const le=Xm(G)?B.querySelectorAll(G):G;U=[].slice.call(le||B.children)}function Z(X){const G=Rj(t,B,U,s,l,X,m);if(X.loop&&!G.slideLooper.canLoop()){const se=Object.assign({},X,{loop:!1});return Z(se)}return G}function ie(X,G){N||(M=g(M,X),w=p(M),O=G||O,F(),E=Z(w),y([M,...O.map(({options:se})=>se)]).forEach(se=>h.add(se,"change",ae)),w.active&&(E.translate.to(E.location.get()),E.animation.init(),E.slidesInView.init(),E.slideFocus.init(ne),E.eventHandler.init(ne),E.resizeHandler.init(ne),E.slidesHandler.init(ne),E.options.loop&&E.slideLooper.loop(),B.offsetParent&&U.length&&E.dragHandler.init(ne),D=f.init(ne,O)))}function ae(X,G){const se=Te();oe(),ie(g({startIndex:se},X),G),m.emit("reInit")}function oe(){E.dragHandler.destroy(),E.eventStore.clear(),E.translate.clear(),E.slideLooper.clear(),E.resizeHandler.destroy(),E.slidesHandler.destroy(),E.slidesInView.destroy(),E.animation.destroy(),f.destroy(),h.clear()}function ce(){N||(N=!0,h.clear(),oe(),m.emit("destroy"),m.clear())}function Ae(X,G,se){!w.active||N||(E.scrollBody.useBaseFriction().useDuration(G===!0?0:w.duration),E.scrollTo.index(X,se||0))}function Oe(X){const G=E.index.add(1).get();Ae(G,X,-1)}function H(X){const G=E.index.add(-1).get();Ae(G,X,1)}function $(){return E.index.add(1).get()!==Te()}function re(){return E.index.add(-1).get()!==Te()}function ve(){return E.scrollSnapList}function ye(){return E.scrollProgress.get(E.offsetLocation.get())}function Te(){return E.index.get()}function _e(){return E.indexPrevious.get()}function xe(){return E.slidesInView.get()}function De(){return E.slidesInView.get(!1)}function at(){return D}function tt(){return E}function Ce(){return t}function ze(){return B}function Ve(){return U}const ne={canScrollNext:$,canScrollPrev:re,containerNode:ze,internalEngine:tt,destroy:ce,off:C,on:b,emit:x,plugins:at,previousScrollSnap:_e,reInit:T,rootNode:Ce,scrollNext:Oe,scrollPrev:H,scrollProgress:ye,scrollSnapList:ve,scrollTo:Ae,selectedScrollSnap:Te,slideNodes:Ve,slidesInView:xe,slidesNotInView:De};return ie(n,a),setTimeout(()=>m.emit("init"),0),ne}nf.globalOptions=void 0;function af(t={},n=[]){const a=j.useRef(t),s=j.useRef(n),[l,u]=j.useState(),[f,h]=j.useState(),m=j.useCallback(()=>{l&&l.reInit(a.current,s.current)},[l]);return j.useEffect(()=>{Hg(a.current,t)||(a.current=t,m())},[t,m]),j.useEffect(()=>{uj(s.current,n)||(s.current=n,m())},[n,m]),j.useEffect(()=>{if(lj()&&f){nf.globalOptions=af.globalOptions;const g=nf(f,a.current,s.current);return u(g),()=>g.destroy()}else u(void 0)},[f,u]),[h,l]}af.globalOptions=void 0;var nm,Qy;function Ij(){return Qy||(Qy=1,nm=function t(n,a){if(n===a)return!0;if(n&&a&&typeof n=="object"&&typeof a=="object"){if(n.constructor!==a.constructor)return!1;var s,l,u;if(Array.isArray(n)){if(s=n.length,s!=a.length)return!1;for(l=s;l--!==0;)if(!t(n[l],a[l]))return!1;return!0}if(n.constructor===RegExp)return n.source===a.source&&n.flags===a.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===a.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===a.toString();if(u=Object.keys(n),s=u.length,s!==Object.keys(a).length)return!1;for(l=s;l--!==0;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;for(l=s;l--!==0;){var f=u[l];if(!t(n[f],a[f]))return!1}return!0}return n!==n&&a!==a}),nm}var Hj=Ij();const Fj=sf(Hj);var jc={exports:{}},im,$y;function Gj(){if($y)return im;$y=1;var t;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/return t=function(){var n={},a={};return n.on=function(s,l){var u={name:s,handler:l};return a[s]=a[s]||[],a[s].unshift(u),u},n.off=function(s){var l=a[s.name].indexOf(s);l!==-1&&a[s.name].splice(l,1)},n.trigger=function(s,l){var u=a[s],f;if(u)for(f=u.length;f--;)u[f].handler(l)},n},im=t,im}var Tc={exports:{}},am,Jy;function Yj(){if(Jy)return am;Jy=1,am=function(l,u,f){var h=document.head||document.getElementsByTagName("head")[0],m=document.createElement("script");typeof u=="function"&&(f=u,u={}),u=u||{},f=f||function(){},m.type=u.type||"text/javascript",m.charset=u.charset||"utf8",m.async="async"in u?!!u.async:!0,m.src=l,u.attrs&&t(m,u.attrs),u.text&&(m.text=""+u.text);var g="onload"in m?n:a;g(m,f),m.onload||n(m,f),h.appendChild(m)};function t(s,l){for(var u in l)s.setAttribute(u,l[u])}function n(s,l){s.onload=function(){this.onerror=this.onload=null,l(null,s)},s.onerror=function(){this.onerror=this.onload=null,l(new Error("Failed to load "+this.src),s)}}function a(s,l){s.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,l(null,s))}}return am}var e2;function Xj(){return e2||(e2=1,(function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var a=Yj(),s=l(a);function l(u){return u&&u.__esModule?u:{default:u}}n.default=function(u){var f=new Promise(function(h){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){h(window.YT);return}else{var m=window.location.protocol==="http:"?"http:":"https:";(0,s.default)(m+"//www.youtube.com/iframe_api",function(p){p&&u.trigger("error",p)})}var g=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){g&&g(),h(window.YT)}});return f},t.exports=n.default})(Tc,Tc.exports)),Tc.exports}var Ac={exports:{}},Ec={exports:{}},Oc={exports:{}},rm,t2;function qj(){if(t2)return rm;t2=1;var t=1e3,n=t*60,a=n*60,s=a*24,l=s*365.25;rm=function(g,p){p=p||{};var y=typeof g;if(y==="string"&&g.length>0)return u(g);if(y==="number"&&isNaN(g)===!1)return p.long?h(g):f(g);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(g))};function u(g){if(g=String(g),!(g.length>100)){var p=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(g);if(p){var y=parseFloat(p[1]),b=(p[2]||"ms").toLowerCase();switch(b){case"years":case"year":case"yrs":case"yr":case"y":return y*l;case"days":case"day":case"d":return y*s;case"hours":case"hour":case"hrs":case"hr":case"h":return y*a;case"minutes":case"minute":case"mins":case"min":case"m":return y*n;case"seconds":case"second":case"secs":case"sec":case"s":return y*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return y;default:return}}}}function f(g){return g>=s?Math.round(g/s)+"d":g>=a?Math.round(g/a)+"h":g>=n?Math.round(g/n)+"m":g>=t?Math.round(g/t)+"s":g+"ms"}function h(g){return m(g,s,"day")||m(g,a,"hour")||m(g,n,"minute")||m(g,t,"second")||g+" ms"}function m(g,p,y){if(!(g<p))return g<p*1.5?Math.floor(g/p)+" "+y:Math.ceil(g/p)+" "+y+"s"}return rm}var n2;function Kj(){return n2||(n2=1,(function(t,n){n=t.exports=l.debug=l.default=l,n.coerce=m,n.disable=f,n.enable=u,n.enabled=h,n.humanize=qj(),n.names=[],n.skips=[],n.formatters={};var a;function s(g){var p=0,y;for(y in g)p=(p<<5)-p+g.charCodeAt(y),p|=0;return n.colors[Math.abs(p)%n.colors.length]}function l(g){function p(){if(p.enabled){var y=p,b=+new Date,C=b-(a||b);y.diff=C,y.prev=a,y.curr=b,a=b;for(var x=new Array(arguments.length),T=0;T<x.length;T++)x[T]=arguments[T];x[0]=n.coerce(x[0]),typeof x[0]!="string"&&x.unshift("%O");var N=0;x[0]=x[0].replace(/%([a-zA-Z%])/g,function(M,w){if(M==="%%")return M;N++;var O=n.formatters[w];if(typeof O=="function"){var D=x[N];M=O.call(y,D),x.splice(N,1),N--}return M}),n.formatArgs.call(y,x);var E=p.log||n.log||console.log.bind(console);E.apply(y,x)}}return p.namespace=g,p.enabled=n.enabled(g),p.useColors=n.useColors(),p.color=s(g),typeof n.init=="function"&&n.init(p),p}function u(g){n.save(g),n.names=[],n.skips=[];for(var p=(typeof g=="string"?g:"").split(/[\s,]+/),y=p.length,b=0;b<y;b++)p[b]&&(g=p[b].replace(/\*/g,".*?"),g[0]==="-"?n.skips.push(new RegExp("^"+g.substr(1)+"$")):n.names.push(new RegExp("^"+g+"$")))}function f(){n.enable("")}function h(g){var p,y;for(p=0,y=n.skips.length;p<y;p++)if(n.skips[p].test(g))return!1;for(p=0,y=n.names.length;p<y;p++)if(n.names[p].test(g))return!0;return!1}function m(g){return g instanceof Error?g.stack||g.message:g}})(Oc,Oc.exports)),Oc.exports}var i2;function Zj(){return i2||(i2=1,(function(t,n){var a={};n=t.exports=Kj(),n.log=u,n.formatArgs=l,n.save=f,n.load=h,n.useColors=s,n.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:m(),n.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function s(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}n.formatters.j=function(g){try{return JSON.stringify(g)}catch(p){return"[UnexpectedJSONParseError]: "+p.message}};function l(g){var p=this.useColors;if(g[0]=(p?"%c":"")+this.namespace+(p?" %c":" ")+g[0]+(p?"%c ":" ")+"+"+n.humanize(this.diff),!!p){var y="color: "+this.color;g.splice(1,0,y,"color: inherit");var b=0,C=0;g[0].replace(/%[a-zA-Z%]/g,function(x){x!=="%%"&&(b++,x==="%c"&&(C=b))}),g.splice(C,0,y)}}function u(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function f(g){try{g==null?n.storage.removeItem("debug"):n.storage.debug=g}catch{}}function h(){var g;try{g=n.storage.debug}catch{}return!g&&typeof process<"u"&&"env"in process&&(g=a.DEBUG),g}n.enable(h());function m(){try{return window.localStorage}catch{}}})(Ec,Ec.exports)),Ec.exports}var Mc={exports:{}},a2;function Wj(){return a2||(a2=1,(function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],t.exports=n.default})(Mc,Mc.exports)),Mc.exports}var Dc={exports:{}},r2;function Qj(){return r2||(r2=1,(function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],t.exports=n.default})(Dc,Dc.exports)),Dc.exports}var zc={exports:{}},Nc={exports:{}},s2;function $j(){return s2||(s2=1,(function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},t.exports=n.default})(Nc,Nc.exports)),Nc.exports}var o2;function Jj(){return o2||(o2=1,(function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var a=$j(),s=l(a);function l(u){return u&&u.__esModule?u:{default:u}}n.default={pauseVideo:{acceptableStates:[s.default.ENDED,s.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[s.default.ENDED,s.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[s.default.ENDED,s.default.PLAYING,s.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},t.exports=n.default})(zc,zc.exports)),zc.exports}var l2;function eT(){return l2||(l2=1,(function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var a=Zj(),s=p(a),l=Wj(),u=p(l),f=Qj(),h=p(f),m=Jj(),g=p(m);function p(C){return C&&C.__esModule?C:{default:C}}var y=(0,s.default)("youtube-player"),b={};b.proxyEvents=function(C){var x={},T=function(U){var F="on"+U.slice(0,1).toUpperCase()+U.slice(1);x[F]=function(Z){y('event "%s"',F,Z),C.trigger(U,Z)}},N=!0,E=!1,M=void 0;try{for(var w=h.default[Symbol.iterator](),O;!(N=(O=w.next()).done);N=!0){var D=O.value;T(D)}}catch(B){E=!0,M=B}finally{try{!N&&w.return&&w.return()}finally{if(E)throw M}}return x},b.promisifyPlayer=function(C){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,T={},N=function(F){x&&g.default[F]?T[F]=function(){for(var Z=arguments.length,ie=Array(Z),ae=0;ae<Z;ae++)ie[ae]=arguments[ae];return C.then(function(oe){var ce=g.default[F],Ae=oe.getPlayerState(),Oe=oe[F].apply(oe,ie);return ce.stateChangeRequired||Array.isArray(ce.acceptableStates)&&ce.acceptableStates.indexOf(Ae)===-1?new Promise(function(H){var $=function re(){var ve=oe.getPlayerState(),ye=void 0;typeof ce.timeout=="number"&&(ye=setTimeout(function(){oe.removeEventListener("onStateChange",re),H()},ce.timeout)),Array.isArray(ce.acceptableStates)&&ce.acceptableStates.indexOf(ve)!==-1&&(oe.removeEventListener("onStateChange",re),clearTimeout(ye),H())};oe.addEventListener("onStateChange",$)}).then(function(){return Oe}):Oe})}:T[F]=function(){for(var Z=arguments.length,ie=Array(Z),ae=0;ae<Z;ae++)ie[ae]=arguments[ae];return C.then(function(oe){return oe[F].apply(oe,ie)})}},E=!0,M=!1,w=void 0;try{for(var O=u.default[Symbol.iterator](),D;!(E=(D=O.next()).done);E=!0){var B=D.value;N(B)}}catch(U){M=!0,w=U}finally{try{!E&&O.return&&O.return()}finally{if(M)throw w}}return T},n.default=b,t.exports=n.default})(Ac,Ac.exports)),Ac.exports}var u2;function tT(){return u2||(u2=1,(function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},s=Gj(),l=g(s),u=Xj(),f=g(u),h=eT(),m=g(h);function g(y){return y&&y.__esModule?y:{default:y}}var p=void 0;n.default=function(y){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,x=(0,l.default)();if(p||(p=(0,f.default)(x)),b.events)throw new Error("Event handlers cannot be overwritten.");if(typeof y=="string"&&!document.getElementById(y))throw new Error('Element "'+y+'" does not exist.');b.events=m.default.proxyEvents(x);var T=new Promise(function(E){if((typeof y>"u"?"undefined":a(y))==="object"&&y.playVideo instanceof Function){var M=y;E(M)}else p.then(function(w){var O=new w.Player(y,b);return x.on("ready",function(){E(O)}),null})}),N=m.default.promisifyPlayer(T,C);return N.on=x.on,N.off=x.off,N},t.exports=n.default})(jc,jc.exports)),jc.exports}var nT=tT();const iT=sf(nT);var aT=Object.defineProperty,rT=Object.defineProperties,sT=Object.getOwnPropertyDescriptors,c2=Object.getOwnPropertySymbols,oT=Object.prototype.hasOwnProperty,lT=Object.prototype.propertyIsEnumerable,f2=(t,n,a)=>n in t?aT(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,Km=(t,n)=>{for(var a in n||(n={}))oT.call(n,a)&&f2(t,a,n[a]);if(c2)for(var a of c2(n))lT.call(n,a)&&f2(t,a,n[a]);return t},Zm=(t,n)=>rT(t,sT(n)),uT=(t,n,a)=>new Promise((s,l)=>{var u=m=>{try{h(a.next(m))}catch(g){l(g)}},f=m=>{try{h(a.throw(m))}catch(g){l(g)}},h=m=>m.done?s(m.value):Promise.resolve(m.value).then(u,f);h((a=a.apply(t,n)).next())});function cT(t,n){var a,s;if(t.videoId!==n.videoId)return!0;const l=((a=t.opts)==null?void 0:a.playerVars)||{},u=((s=n.opts)==null?void 0:s.playerVars)||{};return l.start!==u.start||l.end!==u.end}function d2(t={}){return Zm(Km({},t),{height:0,width:0,playerVars:Zm(Km({},t.playerVars),{autoplay:0,start:0,end:0})})}function fT(t,n){return t.videoId!==n.videoId||!Fj(d2(t.opts),d2(n.opts))}function dT(t,n){var a,s,l,u;return t.id!==n.id||t.className!==n.className||((a=t.opts)==null?void 0:a.width)!==((s=n.opts)==null?void 0:s.width)||((l=t.opts)==null?void 0:l.height)!==((u=n.opts)==null?void 0:u.height)||t.iframeClassName!==n.iframeClassName||t.title!==n.title}var hT={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},mT={videoId:J.string,id:J.string,className:J.string,iframeClassName:J.string,style:J.object,title:J.string,loading:J.oneOf(["lazy","eager"]),opts:J.objectOf(J.any),onReady:J.func,onError:J.func,onPlay:J.func,onPause:J.func,onEnd:J.func,onStateChange:J.func,onPlaybackRateChange:J.func,onPlaybackQualityChange:J.func},Uc=class extends me.Component{constructor(t){super(t),this.destroyPlayerPromise=void 0,this.onPlayerReady=n=>{var a,s;return(s=(a=this.props).onReady)==null?void 0:s.call(a,n)},this.onPlayerError=n=>{var a,s;return(s=(a=this.props).onError)==null?void 0:s.call(a,n)},this.onPlayerStateChange=n=>{var a,s,l,u,f,h,m,g;switch((s=(a=this.props).onStateChange)==null||s.call(a,n),n.data){case Uc.PlayerState.ENDED:(u=(l=this.props).onEnd)==null||u.call(l,n);break;case Uc.PlayerState.PLAYING:(h=(f=this.props).onPlay)==null||h.call(f,n);break;case Uc.PlayerState.PAUSED:(g=(m=this.props).onPause)==null||g.call(m,n);break}},this.onPlayerPlaybackRateChange=n=>{var a,s;return(s=(a=this.props).onPlaybackRateChange)==null?void 0:s.call(a,n)},this.onPlayerPlaybackQualityChange=n=>{var a,s;return(s=(a=this.props).onPlaybackQualityChange)==null?void 0:s.call(a,n)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}const n=Zm(Km({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=iT(this.container,n),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(a=>{this.props.title&&a.setAttribute("title",this.props.title),this.props.loading&&a.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var n;(n=this.internalPlayer)==null||n.getIframe().then(a=>{this.props.id?a.setAttribute("id",this.props.id):a.removeAttribute("id"),this.props.iframeClassName?a.setAttribute("class",this.props.iframeClassName):a.removeAttribute("class"),this.props.opts&&this.props.opts.width?a.setAttribute("width",this.props.opts.width.toString()):a.removeAttribute("width"),this.props.opts&&this.props.opts.height?a.setAttribute("height",this.props.opts.height.toString()):a.removeAttribute("height"),this.props.title?a.setAttribute("title",this.props.title):a.setAttribute("title","YouTube video player"),this.props.loading?a.setAttribute("loading",this.props.loading):a.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var n,a,s,l;if(typeof this.props.videoId>"u"||this.props.videoId===null){(n=this.internalPlayer)==null||n.stopVideo();return}let u=!1;const f={videoId:this.props.videoId};if((a=this.props.opts)!=null&&a.playerVars&&(u=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(f.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(f.endSeconds=this.props.opts.playerVars.end)),u){(s=this.internalPlayer)==null||s.loadVideoById(f);return}(l=this.internalPlayer)==null||l.cueVideoById(f)},this.refContainer=n=>{this.container=n},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(t){return uT(this,null,function*(){dT(t,this.props)&&this.updatePlayer(),fT(t,this.props)&&(yield this.resetPlayer()),cT(t,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return me.createElement("div",{className:this.props.className,style:this.props.style},me.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},xf=Uc;xf.propTypes=mT;xf.defaultProps=hT;xf.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var gT=xf;const pT=me[typeof document<"u"&&document.createElement!==void 0?"useLayoutEffect":"useEffect"],vT=t=>{const n=j.useRef(t);return j.useEffect(()=>{n.current=t}),n};function yT(){}function bT(t,n,a={}){const s=ST(a.polyfill),l=vT(n);return pT(()=>{let u=!1;const f=t&&"current"in t?t.current:t;if(!f)return yT;function h(m,g){u||l.current(m,g)}return s.subscribe(f,h),()=>{u=!0,s.unsubscribe(f,h)}},[t,s,l]),s.observer}function _T(t){let n=!1,a=[];const s=new Map,l=new(t||window.ResizeObserver)((u,f)=>{a=a.concat(u);function h(){const m=new Set;for(let g=0;g<a.length;g++){if(m.has(a[g].target))continue;m.add(a[g].target);const p=s.get(a[g].target);p==null||p.forEach(y=>y(a[g],f))}a=[],n=!1}n||window.requestAnimationFrame(h),n=!0});return{observer:l,subscribe(u,f){var h;l.observe(u);const m=(h=s.get(u))!==null&&h!==void 0?h:[];m.push(f),s.set(u,m)},unsubscribe(u,f){var h;const m=(h=s.get(u))!==null&&h!==void 0?h:[];if(m.length===1){l.unobserve(u),s.delete(u);return}const g=m.indexOf(f);g!==-1&&m.splice(g,1),s.set(u,m)}}}let sm;const ST=t=>sm||(sm=_T(t));var Ic={exports:{}},wT=Ic.exports,h2;function kT(){return h2||(h2=1,(function(t,n){(function(s,l){t.exports=l()})(wT,function(){return(function(a){var s={};function l(u){if(s[u])return s[u].exports;var f=s[u]={i:u,l:!1,exports:{}};return a[u].call(f.exports,f,f.exports,l),f.l=!0,f.exports}return l.m=a,l.c=s,l.d=function(u,f,h){l.o(u,f)||Object.defineProperty(u,f,{enumerable:!0,get:h})},l.r=function(u){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})},l.t=function(u,f){if(f&1&&(u=l(u)),f&8||f&4&&typeof u=="object"&&u&&u.__esModule)return u;var h=Object.create(null);if(l.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:u}),f&2&&typeof u!="string")for(var m in u)l.d(h,m,(function(g){return u[g]}).bind(null,m));return h},l.n=function(u){var f=u&&u.__esModule?function(){return u.default}:function(){return u};return l.d(f,"a",f),f},l.o=function(u,f){return Object.prototype.hasOwnProperty.call(u,f)},l.p="",l(l.s="./src/index.js")})({"./src/exception.js":(function(a,s,l){l.r(s),l.d(s,"DownloadException",function(){return M}),l.d(s,"downloadException",function(){return w});function u(O){"@babel/helpers - typeof";return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},u(O)}function f(O,D,B){return Object.defineProperty(O,"prototype",{writable:!1}),O}function h(O,D){if(!(O instanceof D))throw new TypeError("Cannot call a class as a function")}function m(O,D){if(typeof D!="function"&&D!==null)throw new TypeError("Super expression must either be null or a function");O.prototype=Object.create(D&&D.prototype,{constructor:{value:O,writable:!0,configurable:!0}}),Object.defineProperty(O,"prototype",{writable:!1}),D&&N(O,D)}function g(O){var D=x();return function(){var U=E(O),F;if(D){var Z=E(this).constructor;F=Reflect.construct(U,arguments,Z)}else F=U.apply(this,arguments);return p(this,F)}}function p(O,D){if(D&&(u(D)==="object"||typeof D=="function"))return D;if(D!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return y(O)}function y(O){if(O===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return O}function b(O){var D=typeof Map=="function"?new Map:void 0;return b=function(U){if(U===null||!T(U))return U;if(typeof U!="function")throw new TypeError("Super expression must either be null or a function");if(typeof D<"u"){if(D.has(U))return D.get(U);D.set(U,F)}function F(){return C(U,arguments,E(this).constructor)}return F.prototype=Object.create(U.prototype,{constructor:{value:F,enumerable:!1,writable:!0,configurable:!0}}),N(F,U)},b(O)}function C(O,D,B){return x()?C=Reflect.construct.bind():C=function(F,Z,ie){var ae=[null];ae.push.apply(ae,Z);var oe=Function.bind.apply(F,ae),ce=new oe;return ie&&N(ce,ie.prototype),ce},C.apply(null,arguments)}function x(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function T(O){return Function.toString.call(O).indexOf("[native code]")!==-1}function N(O,D){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(U,F){return U.__proto__=F,U},N(O,D)}function E(O){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(B){return B.__proto__||Object.getPrototypeOf(B)},E(O)}var M=(function(O){m(B,O);var D=g(B);function B(U,F){var Z;return h(this,B),Z=D.call(this,"Downloader error: ".concat(U)),Z.request=F,Z.name="DownloadException",Z}return f(B)})(b(Error)),w=M}),"./src/index.js":(function(a,s,l){l.r(s);var u=l("./src/exception.js"),f=l("./src/signatures.js");/*!
 * JS File Downloader v 1.1.25
 * https://github.com/AleeeKoi/js-file-downloader
 *
 * Copyright Alessandro Pellizzari
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 */function h(M){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},h(M)}function m(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */m=function(){return M};var M={},w=Object.prototype,O=w.hasOwnProperty,D=Object.defineProperty||function(ne,X,G){ne[X]=G.value},B=typeof Symbol=="function"?Symbol:{},U=B.iterator||"@@iterator",F=B.asyncIterator||"@@asyncIterator",Z=B.toStringTag||"@@toStringTag";function ie(ne,X,G){return Object.defineProperty(ne,X,{value:G,enumerable:!0,configurable:!0,writable:!0}),ne[X]}try{ie({},"")}catch{ie=function(G,se,le){return G[se]=le}}function ae(ne,X,G,se){var le=X&&X.prototype instanceof Ae?X:Ae,ue=Object.create(le.prototype),Ne=new Ce(se||[]);return D(ue,"_invoke",{value:xe(ne,G,Ne)}),ue}function oe(ne,X,G){try{return{type:"normal",arg:ne.call(X,G)}}catch(se){return{type:"throw",arg:se}}}M.wrap=ae;var ce={};function Ae(){}function Oe(){}function H(){}var $={};ie($,U,function(){return this});var re=Object.getPrototypeOf,ve=re&&re(re(ze([])));ve&&ve!==w&&O.call(ve,U)&&($=ve);var ye=H.prototype=Ae.prototype=Object.create($);function Te(ne){["next","throw","return"].forEach(function(X){ie(ne,X,function(G){return this._invoke(X,G)})})}function _e(ne,X){function G(le,ue,Ne,Ye){var nt=oe(ne[le],ne,ue);if(nt.type!=="throw"){var rt=nt.arg,ct=rt.value;return ct&&h(ct)=="object"&&O.call(ct,"__await")?X.resolve(ct.__await).then(function(At){G("next",At,Ne,Ye)},function(At){G("throw",At,Ne,Ye)}):X.resolve(ct).then(function(At){rt.value=At,Ne(rt)},function(At){return G("throw",At,Ne,Ye)})}Ye(nt.arg)}var se;D(this,"_invoke",{value:function(ue,Ne){function Ye(){return new X(function(nt,rt){G(ue,Ne,nt,rt)})}return se=se?se.then(Ye,Ye):Ye()}})}function xe(ne,X,G){var se="suspendedStart";return function(le,ue){if(se==="executing")throw new Error("Generator is already running");if(se==="completed"){if(le==="throw")throw ue;return Ve()}for(G.method=le,G.arg=ue;;){var Ne=G.delegate;if(Ne){var Ye=De(Ne,G);if(Ye){if(Ye===ce)continue;return Ye}}if(G.method==="next")G.sent=G._sent=G.arg;else if(G.method==="throw"){if(se==="suspendedStart")throw se="completed",G.arg;G.dispatchException(G.arg)}else G.method==="return"&&G.abrupt("return",G.arg);se="executing";var nt=oe(ne,X,G);if(nt.type==="normal"){if(se=G.done?"completed":"suspendedYield",nt.arg===ce)continue;return{value:nt.arg,done:G.done}}nt.type==="throw"&&(se="completed",G.method="throw",G.arg=nt.arg)}}}function De(ne,X){var G=X.method,se=ne.iterator[G];if(se===void 0)return X.delegate=null,G==="throw"&&ne.iterator.return&&(X.method="return",X.arg=void 0,De(ne,X),X.method==="throw")||G!=="return"&&(X.method="throw",X.arg=new TypeError("The iterator does not provide a '"+G+"' method")),ce;var le=oe(se,ne.iterator,X.arg);if(le.type==="throw")return X.method="throw",X.arg=le.arg,X.delegate=null,ce;var ue=le.arg;return ue?ue.done?(X[ne.resultName]=ue.value,X.next=ne.nextLoc,X.method!=="return"&&(X.method="next",X.arg=void 0),X.delegate=null,ce):ue:(X.method="throw",X.arg=new TypeError("iterator result is not an object"),X.delegate=null,ce)}function at(ne){var X={tryLoc:ne[0]};1 in ne&&(X.catchLoc=ne[1]),2 in ne&&(X.finallyLoc=ne[2],X.afterLoc=ne[3]),this.tryEntries.push(X)}function tt(ne){var X=ne.completion||{};X.type="normal",delete X.arg,ne.completion=X}function Ce(ne){this.tryEntries=[{tryLoc:"root"}],ne.forEach(at,this),this.reset(!0)}function ze(ne){if(ne){var X=ne[U];if(X)return X.call(ne);if(typeof ne.next=="function")return ne;if(!isNaN(ne.length)){var G=-1,se=function le(){for(;++G<ne.length;)if(O.call(ne,G))return le.value=ne[G],le.done=!1,le;return le.value=void 0,le.done=!0,le};return se.next=se}}return{next:Ve}}function Ve(){return{value:void 0,done:!0}}return Oe.prototype=H,D(ye,"constructor",{value:H,configurable:!0}),D(H,"constructor",{value:Oe,configurable:!0}),Oe.displayName=ie(H,Z,"GeneratorFunction"),M.isGeneratorFunction=function(ne){var X=typeof ne=="function"&&ne.constructor;return!!X&&(X===Oe||(X.displayName||X.name)==="GeneratorFunction")},M.mark=function(ne){return Object.setPrototypeOf?Object.setPrototypeOf(ne,H):(ne.__proto__=H,ie(ne,Z,"GeneratorFunction")),ne.prototype=Object.create(ye),ne},M.awrap=function(ne){return{__await:ne}},Te(_e.prototype),ie(_e.prototype,F,function(){return this}),M.AsyncIterator=_e,M.async=function(ne,X,G,se,le){le===void 0&&(le=Promise);var ue=new _e(ae(ne,X,G,se),le);return M.isGeneratorFunction(X)?ue:ue.next().then(function(Ne){return Ne.done?Ne.value:ue.next()})},Te(ye),ie(ye,Z,"Generator"),ie(ye,U,function(){return this}),ie(ye,"toString",function(){return"[object Generator]"}),M.keys=function(ne){var X=Object(ne),G=[];for(var se in X)G.push(se);return G.reverse(),function le(){for(;G.length;){var ue=G.pop();if(ue in X)return le.value=ue,le.done=!1,le}return le.done=!0,le}},M.values=ze,Ce.prototype={constructor:Ce,reset:function(X){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(tt),!X)for(var G in this)G.charAt(0)==="t"&&O.call(this,G)&&!isNaN(+G.slice(1))&&(this[G]=void 0)},stop:function(){this.done=!0;var X=this.tryEntries[0].completion;if(X.type==="throw")throw X.arg;return this.rval},dispatchException:function(X){if(this.done)throw X;var G=this;function se(rt,ct){return Ne.type="throw",Ne.arg=X,G.next=rt,ct&&(G.method="next",G.arg=void 0),!!ct}for(var le=this.tryEntries.length-1;le>=0;--le){var ue=this.tryEntries[le],Ne=ue.completion;if(ue.tryLoc==="root")return se("end");if(ue.tryLoc<=this.prev){var Ye=O.call(ue,"catchLoc"),nt=O.call(ue,"finallyLoc");if(Ye&&nt){if(this.prev<ue.catchLoc)return se(ue.catchLoc,!0);if(this.prev<ue.finallyLoc)return se(ue.finallyLoc)}else if(Ye){if(this.prev<ue.catchLoc)return se(ue.catchLoc,!0)}else{if(!nt)throw new Error("try statement without catch or finally");if(this.prev<ue.finallyLoc)return se(ue.finallyLoc)}}}},abrupt:function(X,G){for(var se=this.tryEntries.length-1;se>=0;--se){var le=this.tryEntries[se];if(le.tryLoc<=this.prev&&O.call(le,"finallyLoc")&&this.prev<le.finallyLoc){var ue=le;break}}ue&&(X==="break"||X==="continue")&&ue.tryLoc<=G&&G<=ue.finallyLoc&&(ue=null);var Ne=ue?ue.completion:{};return Ne.type=X,Ne.arg=G,ue?(this.method="next",this.next=ue.finallyLoc,ce):this.complete(Ne)},complete:function(X,G){if(X.type==="throw")throw X.arg;return X.type==="break"||X.type==="continue"?this.next=X.arg:X.type==="return"?(this.rval=this.arg=X.arg,this.method="return",this.next="end"):X.type==="normal"&&G&&(this.next=G),ce},finish:function(X){for(var G=this.tryEntries.length-1;G>=0;--G){var se=this.tryEntries[G];if(se.finallyLoc===X)return this.complete(se.completion,se.afterLoc),tt(se),ce}},catch:function(X){for(var G=this.tryEntries.length-1;G>=0;--G){var se=this.tryEntries[G];if(se.tryLoc===X){var le=se.completion;if(le.type==="throw"){var ue=le.arg;tt(se)}return ue}}throw new Error("illegal catch attempt")},delegateYield:function(X,G,se){return this.delegate={iterator:ze(X),resultName:G,nextLoc:se},this.method==="next"&&(this.arg=void 0),ce}},M}function g(M,w,O,D,B,U,F){try{var Z=M[U](F),ie=Z.value}catch(ae){O(ae);return}Z.done?w(ie):Promise.resolve(ie).then(D,B)}function p(M){return function(){var w=this,O=arguments;return new Promise(function(D,B){var U=M.apply(w,O);function F(ie){g(U,D,B,F,Z,"next",ie)}function Z(ie){g(U,D,B,F,Z,"throw",ie)}F(void 0)})}}function y(M,w){if(!(M instanceof w))throw new TypeError("Cannot call a class as a function")}function b(M,w){for(var O=0;O<w.length;O++){var D=w[O];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(M,x(D.key),D)}}function C(M,w,O){return w&&b(M.prototype,w),Object.defineProperty(M,"prototype",{writable:!1}),M}function x(M){var w=T(M,"string");return h(w)==="symbol"?w:String(w)}function T(M,w){if(h(M)!=="object"||M===null)return M;var O=M[Symbol.toPrimitive];if(O!==void 0){var D=O.call(M,w);if(h(D)!=="object")return D;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(M)}var N={timeout:4e4,headers:[],forceDesktopMode:!1,autoStart:!0,withCredentials:!1,method:"GET",nameCallback:function(w){return w},contentType:"application/x-www-form-urlencoded",body:null,nativeFallbackOnError:!1,contentTypeDetermination:!1},E=(function(){function M(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return y(this,M),this.params=Object.assign({},N,w),this.link=this.createLink(),this.request=null,this.downloadedFile=null,this.abortController=void 0,this.params.autoStart?this.downloadFile():this}return C(M,[{key:"start",value:function(){return this.downloadFile()}},{key:"abort",value:function(O){this.abortController&&this.abortController.abort(O||"Download cancelled")}},{key:"downloadFile",value:function(){var O=this;return new Promise(function(D,B){O.initDownload(D,B)})}},{key:"setAbortListner",value:function(O){this.abortController&&this.abortController.signal.addEventListener("abort",O)}},{key:"unsetAbortListner",value:function(O){this.abortController&&this.abortController.signal.removeEventListener("abort",O)}},{key:"initDownload",value:function(O,D){var B=this,U=function(){B.link.target="_blank",B.link.href=B.params.url,B.clickLink()};if(!("download"in this.link)||this.isMobile())return U(),O();this.request=this.createRequest(),this.abortController="AbortController"in window?new AbortController:null;var F=function Z(ie){var ae=ie.target;B.unsetAbortListner(Z),B.request&&B.request.abort(),D(ae.reason)};return this.setAbortListner(F),this.params.url?(this.request.onload=p(m().mark(function Z(){return m().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:if(B.unsetAbortListner(F),parseInt(B.request.status,10)===200){ae.next=3;break}return ae.abrupt("return",D(new u.DownloadException("status code [".concat(B.request.status,"]"),B.request)));case 3:return ae.next=5,B.startDownload();case 5:return ae.abrupt("return",O(B));case 6:case"end":return ae.stop()}},Z)})),this.request.ontimeout=function(){B.unsetAbortListner(F),D(new u.DownloadException("request timeout",B.request))},this.request.onerror=function(){B.unsetAbortListner(F),B.params.nativeFallbackOnError?(U(),O(B)):D(new u.DownloadException("network error",B.request))},this.request.send(this.params.body),this):D(new u.DownloadException("url param not defined!",this.request))}},{key:"isMobile",value:function(){return!this.params.forceDesktopMode&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},{key:"createRequest",value:function(){var O=new XMLHttpRequest;return O.open(this.params.method,this.params.url,!0),this.params.contentType!==!1&&O.setRequestHeader("Content-type",this.params.contentType),this.params.headers.forEach(function(D){O.setRequestHeader(D.name,D.value)}),O.responseType="arraybuffer",this.params.process&&typeof this.params.process=="function"&&O.addEventListener("progress",this.params.process),this.params.onloadstart&&typeof this.params.onloadstart=="function"&&(O.onloadstart=this.params.onloadstart),O.timeout=this.params.timeout,O.withCredentials=!!this.params.withCredentials||!!this.params.includeCredentials,O}},{key:"getFileName",value:function(){if(typeof this.params.filename=="string")return this.params.filename;var O=this.request.getResponseHeader("Content-Disposition"),D=[];O&&(D=O.replace(/["']/g,"").match(/filename\*?=([^;]+)/));var B=D&&D.length>=1?D[1]:this.params.url.split("/").pop().split("?")[0];return this.params.nameCallback(B)}},{key:"getContentTypeFromFileSignature",value:function(O){var D=Object.assign({},f.fileSignatures,this.params.customFileSignatures);return new Promise(function(B,U){var F=new FileReader,Z=O.slice(0,4);F.onloadend=function(ie){if(ie.target.readyState!==FileReader.DONE){U();return}var ae=new Uint8Array(ie.target.result),oe=[];ae.forEach(function(Ae){oe.push(Ae.toString(16))});var ce=oe.join("").toUpperCase();B(D[ce])},F.onerror=U,F.readAsArrayBuffer(Z)})}},{key:"getContentTypeFromResponseHeader",value:function(){return this.request.getResponseHeader("content-type")}},{key:"getContentType",value:function(O){var D=this;return new Promise((function(){var B=p(m().mark(function U(F){var Z,ie,ae,oe,ce,Ae,Oe,H;return m().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:if(Z=D.params.contentTypeDetermination,ie="application/octet-stream",(Z==="header"||Z==="full")&&(ae=D.getContentTypeFromResponseHeader()),!(Z==="signature"||Z==="full")){re.next=7;break}return re.next=6,D.getContentTypeFromFileSignature(new Blob([O]));case 6:oe=re.sent;case 7:F(Z==="header"?(ce=ae)!==null&&ce!==void 0?ce:ie:Z==="signature"?(Ae=oe)!==null&&Ae!==void 0?Ae:ie:Z==="full"&&(Oe=(H=oe)!==null&&H!==void 0?H:ae)!==null&&Oe!==void 0?Oe:ie);case 8:case"end":return re.stop()}},U)}));return function(U){return B.apply(this,arguments)}})())}},{key:"createLink",value:function(){var O=document.createElement("a");return O.style.display="none",O}},{key:"clickLink",value:function(){var O;try{O=new MouseEvent("click")}catch{O=document.createEvent("MouseEvent"),O.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null)}this.link.dispatchEvent(O)}},{key:"getFile",value:(function(){var w=p(m().mark(function D(B,U){var F,Z,ie;return m().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:return oe.next=2,this.getContentType(B);case 2:F=oe.sent,ie={type:F};try{Z=new File([B],U,ie)}catch{Z=new Blob([B],ie),Z.name=U,Z.lastModifiedDate=new Date}return oe.abrupt("return",Z);case 6:case"end":return oe.stop()}},D,this)}));function O(D,B){return w.apply(this,arguments)}return O})()},{key:"startDownload",value:(function(){var w=p(m().mark(function D(){var B,U;return m().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return B=this.getFileName(),Z.next=3,this.getFile(this.request.response,B);case 3:if(this.downloadedFile=Z.sent,!("msSaveOrOpenBlob"in window.navigator)){Z.next=6;break}return Z.abrupt("return",window.navigator.msSaveOrOpenBlob(this.downloadedFile,B));case 6:return U=window.URL.createObjectURL(this.downloadedFile),this.link.href=U,this.link.download=B,this.clickLink(),setTimeout(function(){(window.URL||window.webkitURL||window).revokeObjectURL(U)},4e4),Z.abrupt("return",this.downloadedFile);case 12:case"end":return Z.stop()}},D,this)}));function O(){return w.apply(this,arguments)}return O})()}]),M})();s.default=E}),"./src/signatures.js":(function(a,s,l){l.r(s),l.d(s,"fileSignatures",function(){return u});var u={"89504E47":"image/png",25504446:"application/pdf"}})}).default})})(Ic)),Ic.exports}var xT=kT();const CT=sf(xT);var m2="8e372a2462ab4d701b608162b9ccdcc90f856a8573e2c0a559f4e62bfd6f9e3e",jT=`._lightboxjs_jnkk7_1 {
  margin: 0;
  padding: 0;
}

._lightboxjs_jnkk7_1 * {
  box-sizing: border-box;
}

/* .lightboxjs img,
.lightboxjs svg,
.lightboxjs video {
  display: block;
  vertical-align: middle;
  height: auto;
  max-width: 100%;
} */

._slideshowBtn_jnkk7_37 {
  padding-bottom: 2px;
}

._closeIcon_jnkk7_45:hover,
._closeIcon_jnkk7_45:focus,
._iconsHeader_jnkk7_49 svg:hover,
._iconsHeader_jnkk7_49 svg:focus,
._prev1_jnkk7_53 span:hover,
._next1_jnkk7_55:hover,
._icon_jnkk7_49:hover {
  text-decoration: none;
  cursor: pointer;
  /* color: rgb(230, 230, 230); */
}

._prevIcon_jnkk7_69:hover,
._nextIcon_jnkk7_71:hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: rgb(230, 230, 230);
}

._show_jnkk7_81 {
  display: flex;
}

._displayHidden_jnkk7_89 {
  display: none;
}

._thumbnail_jnkk7_97 {
  opacity: 1;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
}

._next1_jnkk7_55 {
  right: 1%;
  padding-left: 2vw;
  padding-right: 3vw;
}

._prev1_jnkk7_53 {
  left: 2%;
  padding-right: 2vw;
}

._thumbnails_jnkk7_133 {
  transition: border 0.3s;
}

._thumbnail_jnkk7_97 {
  display: inline;
}

._thumbnailsWithCaption_jnkk7_149 {
  width: 90%;
}

._thumbnailsOuterContainer_jnkk7_157 {
  position: absolute;
  bottom: 4%;
  height: 5vh;
  width: 100vw;
  z-index: 10000000;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

._navigationDots_jnkk7_181 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

/* Mobile screens */
@media screen and (min-width: 20em) {
  ._imageSlide_jnkk7_197 {
    height: 67vw;
    width: 60%;
  }

  ._thumbnailsOuterContainer_jnkk7_157 {
    position: absolute;
    bottom: 7%;
    width: 100vw;
    /* width: 100%; */
  }

  ._thumbnailsAndCaption_jnkk7_221 {
    height: 23vh;
    bottom: 2%;

  }

  ._hideControlsBar_jnkk7_233 ._slideshowImg_jnkk7_233 {
    /* height: 100vh; */
  }

  ._rotateImgInnerContainer_jnkk7_241 {
    top: 8%;
  }

  ._hideControlsBar_jnkk7_233 ._slideshowInnerContainer_jnkk7_249 {
    top: 0;
  }

  ._thumbnail_jnkk7_97 {
    width: 80px;
    max-width: 80px;
    height: 7vh;
  }

  ._videoThumbnailsOuterContainer_jnkk7_269 {
    bottom: 2%;
  }

  ._imgTitleContainer_jnkk7_277 {
    padding-bottom: 16px;
    width: 100vw;
    margin-top: 0;
    margin-bottom: 0;
  }

  ._thumbnails_jnkk7_133 {
    margin-left: auto;
    margin-right: auto;
  }

  ._next1_jnkk7_55 {
    right: 0.9%;
  }

  ._prev1_jnkk7_53 {
    left: 1.5%;
  }
}

._thumbnail_jnkk7_97 {
  height: 5vh;
  border-radius: 6px;
  margin-right: 7px;
  object-fit: cover;
}



._thumbnailsOuterContainerMetadata_jnkk7_337 {
  width: 78vw;
}

._videoThumbnailsOuterContainer_jnkk7_269 {
  bottom: 5%;
}

._thumbnailsAndCaption_jnkk7_221 {
  height: 19vh;
}

._htmlVideoOuterContainer_jnkk7_361 video {
  height: 100%;
  max-height: 70vh;
  width: 100%;
}

._caption_jnkk7_373 {
  position: absolute;
  bottom: 14%;
  width: 100vw;
  z-index: 10000000;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}

._galleryImg_jnkk7_393 {
  cursor: pointer;
  margin: 0.2em;
}

._modalContainer_jnkk7_403 {
  width: 100vw;
  /* height: 100%;
  max-height: 100%; */
  direction: ltr;
  overflow: hidden;
  touch-action: none;
  padding: 0;
  overflow-y: hidden;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
}

._slideshowAnimContainer_jnkk7_441 {
  /* height: 100%;
  max-height: 100%; */
  direction: ltr;
  overflow: hidden;
  touch-action: none;
  padding: 0;
  overflow-y: hidden;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: fixed; */
  top: 0;
  left: 0;
  z-index: 1000000;
}

._fullScreenContainer_jnkk7_477 img {
  height: 100vh;
  max-width: 100%;
  /* max-height: 100vh; */
}

._imageInnerContainer_jnkk7_489 img {
  height: 80vh;
  max-width: 100%;
  max-height: 100%;
}

._imageInnerContainer_jnkk7_489 {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  z-index: 1000000;
}

._magnifyWrapper_jnkk7_527 {
  margin-bottom: 3em;
  margin-left: auto;
  margin-right: auto;
}

._slideshowInnerContainer_jnkk7_249 {
  position: fixed; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: top 0.2s ease-in-out 0s;
  top: 12%;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  z-index: 1000000;
}

._slideshowInnerVideoContainer_jnkk7_567 {
  top: 6%;
}

._slideshowInnerContainerThumbnails_jnkk7_575 {
  top: 12%;
}

._hideControlsBar_jnkk7_233  {
  top: 0;
}

._fullScreenContainer_jnkk7_477 {
  top: 0;
}

._lightboxContainer_jnkk7_599 {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

._next1_jnkk7_55,
._prev1_jnkk7_53 {
  top: calc(50% - 20px);
  position: absolute;
  display: flex;
  transition: all 0.2s;
  justify-content: center;
  align-items: center;
  padding-bottom: 2vh;
  padding-top: 2vh;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  font-size: 18px;
  z-index: 10000000;
}



._next1_jnkk7_55:hover,
._prev1_jnkk7_53:hover {
  color: rgb(230, 230, 230);
}

._slideshowAnimImg_jnkk7_671 {
  position: absolute;
  max-width: 100vw;
}

._controls_jnkk7_681 {
  display: flex;
  flex-direction: row;
  align-items: center;
}

._iconsHeader_jnkk7_49 {
  color: white;
  display: flex;
  flex-direction: row;
  /* align-items: center;
    justify-content: center; */
  cursor: pointer;
  z-index: 999999999;
  /* padding: 0.14vw; */
}

._iconHeaderDefault_jnkk7_715 {
  position: absolute;
  top: 10px;
  right: 45px;
}

._ytVideo_jnkk7_727 {
  aspect-ratio: 16 / 9;
  height: 65vh;
  width: 100%;
}

._videoOuterContainer_jnkk7_739 {
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  height: 60vh;
  max-height: 65vh;
}

._htmlVideoOuterContainer_jnkk7_361 {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

._customVideoContainer_jnkk7_767, ._customEmbedContainer_jnkk7_767 {
  margin-left: auto;
  margin-right: auto;
}

._videoIconsHeader_jnkk7_777 {
  position: fixed;
  top: 4%;
  right: 3%;
}

._lightbox_jnkk7_1 ._iconsHeader_jnkk7_49 svg {
  transition: 0.3s all;
}

._iconsHeader_jnkk7_49 svg:active {
  transform: scale(0.97);
}

._imgTitle_jnkk7_277 {
  text-align: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

._iconsHeader_jnkk7_49 svg {
  margin-left: 0.6em;
  padding: 0.2em;
  transition: all 0.1s;
  /* width: 32px;  */
  /* font-size: 18px; */
  line-height: 16px;
  vertical-align: baseline;
}

._icon_jnkk7_49 {
  /* width: 32px;  */
}

@media screen and (min-width: 6em) {
  ._iconsHeader_jnkk7_49 {
    top: 3%;
  }

  ._slideshowAnimContainer_jnkk7_441 {
    width: 100vw;
  }

  ._iconsHeader_jnkk7_49 svg {
    /* width: 34px;  */
    padding-right: 0.3em;
  }

  ._lightboxjs_jnkk7_1 img {
    cursor: pointer;
  }

  ._thumbnail_jnkk7_97 {
    height: 9vh;
    /* width: 22vw; */
  }

  ._next1_jnkk7_55 {
    top: calc(48% - 20px);
  }

  ._prev1_jnkk7_53 {
    top: calc(48% - 20px);

  }

  ._iconHeaderCenter_jnkk7_911 {
    width: 100vw; 
    display: flex;
    flex-direction: row;
    cursor: pointer;
    position: fixed;
    top: 10px;
    justify-content: center;
    left: 0;
  }

}

@media screen and (min-width: 39em) {
  ._slideshowAnimContainer_jnkk7_441 {
    width: 100vw;
  }

  ._slideshowInnerContainer_jnkk7_249 {
    /* width: 100vw;
    height: 95vh;
    position: absolute; */
  }

  ._imgTitleContainer_jnkk7_277 {
    padding-bottom: 0px;
  }
  

  ._next1_jnkk7_55 {
    right: 0.7%;
  }

  ._iconHeaderCenter_jnkk7_911 {
    width: 100%; 
    display: flex;
    flex-direction: row;
    cursor: pointer;
    position: fixed;
    top: 10px;
    justify-content: center;
    left: 0;

  
  }

  /* .thumbnailsOuterContainer {
    bottom: 10%;
  } */

  /* .hideControlsBar .slideshow_img {
    height: 70vh;

  }

  .hideControlsBar {
    top: 10%;
  } */

  ._fullScreenContainer_jnkk7_477 {
    width: 100vw;
    /* height: 100vh; */
  }

  ._fullScreenContainer_jnkk7_477 img {
    height: 100vh;
  }

  ._thumbnails_jnkk7_133 {
    margin-top: 0.6em;
  }

  ._thumbnail_jnkk7_97 {
    /* height: 8vh; */
    width: 80px;
    max-width: 80px;
  }

  ._iconsHeader_jnkk7_49 svg {
    /* width: 32px; 
      font-size: 32px; */
  }

  ._prev1_jnkk7_53 {
    left: 2.7%;
    padding-right: 2vw;
  }
}

/* Desktop screens */
@media screen and (min-width: 42em) {
  ._imageSlide_jnkk7_197 {
    height: 70vh;
    width: 80vw;
  }

  ._innerContainerWithTopCaption_jnkk7_1103 {
    top: 8%;
  }

  ._slideshowImgFullscreen_jnkk7_1111 {
    display: grid;
    width: 92vw;
    place-items: start;
    margin-left: auto;
    margin-right: auto;
    scrollbar-gutter: stable both-edges;
  }

  ._thumbnailsAndCaption_jnkk7_221 {
    bottom: 0%;
  }
  
  ._rotateImgInnerContainer_jnkk7_241 {
    top: 2%;
  }

  ._slideshowInnerContainer_jnkk7_249 img {
    margin-top: 0vh;
    /* width: 70vw; */
  }

  ._fullScreenContainer_jnkk7_477 img {
    width: 80vw;
  }

  ._slideshowInnerContainerFullScreen_jnkk7_1163 {
    top: 0%;
  }

  ._fullScreenLightboxImg_jnkk7_1171 {
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
  }

  ._slideshowInnerContainerImgMetadata_jnkk7_1183 {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  ._slideshowInnerContainerFullScreen_jnkk7_1163 {
    height: 100vh;
    width: 100vw;
    position: absolute;
  }

  ._slideshowInnerContainerFullScreen_jnkk7_1163 img {
    object-fit: contain;
  }

  ._thumbnails_jnkk7_133 {
    scrollbar-width: none;
    -ms-overflow-style: none;
    margin-top: 1.1em;
  }

  ._thumbnails_jnkk7_133::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  ._opacity-fade_jnkk7_1237 {
    transition: opacity 0.3s;
    -webkit-transition: opacity 0.3s;
    opacity: 1;
  }

  ._thumbnailsOuterContainer_jnkk7_157 {
    margin-top: 0.1em;
    padding-top: 0.3em;
    height: 5vh;
    bottom: 11%;
  }

  ._thumbnailsAndCaption_jnkk7_221 {
    bottom: 0%;
  }

  ._thumbnail_jnkk7_97,
  ._imageSliderThumbnails_jnkk7_1273 img {
    height: 10vh;
    /* width: 7em; */
  }

  ._slideshowAnimContainer_jnkk7_441 {
    width: 100vw;
  }

  /* .slideshowInnerContainer {
    width: 100vw;
    height: 95vh;
  } */

  ._hideControlsBar_jnkk7_233 {
    /* height: 100vh; */
  }

  ._fullScreenContainer_jnkk7_477 {
    width: 100vw;
    /* height: 100vh; */
  }

  ._iconsHeader_jnkk7_49 svg {
    /* width: 37px;
      font-size: 34px; */
  }

  ._prev1_jnkk7_53 {
    left: 2%;
    padding-right: 2vw;
  }

  ._next1_jnkk7_55 {
    right: 0.4%;
  }

  
  ._slideshowImgMetadata_jnkk7_1349 {
    width: 78vw;
  }

  ._prev1Metadata_jnkk7_1357 {
    left: 1%;
  }

  ._navigationDots_jnkk7_181 {
    gap: 8px;
  }

 
}

@media screen and (min-width: 53em) {
  
  ._slideshowImg_jnkk7_233 {
    display: grid;
    width: 100vw;
    height: 70vh;
    place-items: start;
    /* margin-top: 7vh; */
  }

  ._slideshowImgWithCaption_jnkk7_1399 {
    height: 68vh;
  }

  ._hideControlsBar_jnkk7_233 ._slideshowImg_jnkk7_233, ._hideControlsBarAndCaption_jnkk7_1407 ._slideshowImg_jnkk7_233  {
    padding-top: 12vh;
  }

  ._fullScreenContainer_jnkk7_477 ._slideshowImg_jnkk7_233 {
    padding-top: 0vh;
  }


  ._lightboxImg_jnkk7_1425 {
      /* height: 70vh; */
  }

  ._thumbnail_jnkk7_97 {
    width: 95px;
    max-width: 80px;
  } 

  ._slideshowImgMetadata_jnkk7_1349 {
    width: 78vw;
  }
}
  

@media screen and (min-width: 80em) {
  ._slideshowInnerContainer_jnkk7_249 img {
    /* width: 60vw; */
  }

  ._fullScreenContainer_jnkk7_477 img {
    width: 80vw;
  }
}

._lightIcon_jnkk7_1475,
._lightIcon_jnkk7_1475 svg {
  background-color: white;
  color: black;
}

._lightIcon_jnkk7_1475:hover,
._lightIcon_jnkk7_1475 svg:hover {
  background-color: white;
  color: black;
  fill: black;
}

._darkIcon_jnkk7_1501,
._darkIcon_jnkk7_1501 svg {
  background-color: transparent;
  /* background-color: #151515; */
  color: silver;
  fill: silver;
}

._darkIcon_jnkk7_1501:hover,
._darkIcon_jnkk7_1501 svg:hover {
  color: rgba(107, 107, 107, 0.8);
  fill: rgba(107, 107, 107, 0.8);
}

/* Header icons  */
._lightHeaderIcon_jnkk7_1531 svg {
  background-color: white;
  color: black;
  fill: black;
}

._lightHeaderIcon_jnkk7_1531 svg:hover {
  background-color: white;
  color: rgb(24, 24, 24, 0.8);
  fill: rgb(24, 24, 24, 0.8);

}

._darkHeaderIcon_jnkk7_1557 svg {
  background-color: transparent;
  /* background-color: #151515; */
  color: #626b77;
  fill: #626b77;
}

._darkHeaderIcon_jnkk7_1557 svg:hover {
  color: rgba(99, 99, 99, 0.8);
  fill: rgba(99, 99, 99, 0.8);
}

._magnifierImage_jnkk7_1581 {
  object-fit: contain;
}

._thumbnails_jnkk7_133 ._active_jnkk7_1589 {
  border: solid rgb(107, 133, 206) 2px;
}

._inactiveThumbnailBorder_jnkk7_1597 {
  border: solid transparent 2px;
}

._thumbnails_jnkk7_133 {
  width: 95%;
}

._emblaThumbs_jnkk7_1613 {
  --thumbs-slide-spacing: 2px; 
  /* --thumbs-slide-height: 9rem; */
  margin-top: var(--thumbs-slide-spacing);
}

@media screen and (max-width: 40em) {
  /* .innerContainerWithTopCaption {
    position: relative;
  } */


  ._imgTitleContainer_jnkk7_277 {
    /* position: absolute;
    top: 12%; */
  }

  ._slideshowImg_jnkk7_233 {
    height: 100vh;
  }
}

@media screen and (max-width: 53em) {
  ._fullScreenSlideshowImg_jnkk7_1659 {
    margin-top: auto;
    margin-bottom: auto;
  }
}

@media screen and (max-width: 44em) and (min-width: 30em) {
  /* .innerContainerWithTopCaption {
    position: relative;
  } */
  ._thumbnailsOuterContainer_jnkk7_157 {
    bottom: 11%;
  }

  ._thumbnailsAndCaption_jnkk7_221 {
    bottom: 4%;
  }
  
  ._imgTitleContainer_jnkk7_277 {
    /* position: absolute;
    top: 5%; */
  }
}

@media screen and (max-width: 46em) and (min-width: 30em) {
  /* .innerContainerWithTopCaption {
    position: relative;
  } */

  /* .imgTitleContainer {
    position: absolute;
    top: 7%;
  } */
}

@media screen and (max-width: 49em) and (min-width: 45em) {
  /* .innerContainerWithTopCaption {
    position: relative;
  } */


  /* .imgTitleContainer {
    position: absolute;
    top: 5%;
  } */
}

@media screen and (max-width: 29em) {
  ._fullScreenContainer_jnkk7_477 img {
    object-fit: cover;
  }

  ._emblaThumbs_jnkk7_1613 {
    --thumbs-slide-spacing: 3px; 
    /* --thumbs-slide-height: 9rem; */
    margin-top: var(--thumbs-slide-spacing);
  }



  ._htmlVideo_jnkk7_361 {
    margin-top: 5vh;
  }

  ._thumbnails_jnkk7_133 {
    width: 98%;
  }

  ._thumbnail_jnkk7_97 {
    width: 80px;
    max-width: 80px;
  }

  ._htmlVideoOuterContainer_jnkk7_361 video {
    max-height: 65vh;
  }

  ._videoIconsHeader_jnkk7_777 {
    position: fixed;
    top: 2%;
    right: 15px;
  }

  ._videoOuterContainer_jnkk7_739 {
    width: 88%;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    max-height: 65vh;
  }

  ._htmlVideoOuterContainer_jnkk7_361 {
    width: 94%;
    margin-left: auto;
    margin-right: auto;
  }

  ._iconHeaderDefault_jnkk7_715 {
    position: fixed;
    left: 115px;
  }

  ._slideshowInnerVideoContainer_jnkk7_567 {
    top: 3%;
  }

  ._next1_jnkk7_55,
  ._prev1_jnkk7_53 {
    padding-bottom: 2vh;
    padding-top: 2vh;
  }

  ._next1_jnkk7_55 {
    padding-left: 4vw;
  }

  ._prev1_jnkk7_53 {
    padding-right: 4vw;
  }

  ._iconsHeader_jnkk7_49 {
    /* font-size: 28px; */
  }

}

@media screen and (max-width: 53em) {
  ._slideshowImg_jnkk7_233 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100vw;
    height: 70vh;
  }

  ._slideshowImg_jnkk7_233 img {
    margin-left: auto;
    margin-right: auto;
  }

  ._slideshowInnerContainerFullScreen_jnkk7_1163 {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: top 0.2s ease-in-out 0s;
    top: 10%;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    z-index: 1000000;
  }

  ._containImg_jnkk7_1969 {
    object-fit: contain;
  }
}

._fullScreenContainer_jnkk7_477 img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

._thumbnails_jnkk7_133 {
  text-align: center;
  white-space: nowrap;
}

._reactTransformComponent_jnkk7_2001 {
  margin-left: auto;
  margin-right: auto;
}

._magnifierImage_jnkk7_1581 {
  margin-left: auto;
  margin-right: auto;
}

/* CSS loader  */
._loader_jnkk7_2023 {
  width: 44px;
  height: 44px;
  box-sizing: border-box;

  border-radius: 50%;

  display: inline-block;
  position: fixed;
  top: 35%;
  left: 50%;
  animation: _rotation_jnkk7_1 1s linear infinite;
}

@keyframes _rotation_jnkk7_1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

._dayLoader_jnkk7_2069 {
  border: 5px solid #626b77;
  border-bottom-color: transparent;
}

._nightLoader_jnkk7_2079 {
  border: 5px solid #fff;
  border-bottom-color: transparent;
}

._lightboxImg_jnkk7_1425 {
  max-height: 70vh;
  margin-left: auto;
  margin-right: auto;
}

._controls_jnkk7_681 button, ._closeButton_jnkk7_2101, ._closeButtonRounded_jnkk7_2101 {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 16px;
}

._controls_jnkk7_681 svg {
  box-sizing: border-box;
}

._closeButton_jnkk7_2101 svg, ._closeButtonRounded_jnkk7_2101 svg {
  box-sizing: border-box;
  font-size: 16px;
  padding-top: 0.5px;
}

._closeButton_jnkk7_2101 {
  padding-top: 3px;
}

._closeButtonRounded_jnkk7_2101 {
  cursor: pointer;

}

._closeButtonRounded_jnkk7_2101 svg {
  margin: 0;
  padding: 5px;
  background-color: black;
  border-color: transparent;
  border-radius: 28px;

}

._thumbnailsAndCaption_jnkk7_221 {
  height: 19vh;
  margin-top: 0em;
  width: 100vw;
}

._thumbnailsWithCaption_jnkk7_149 {
  margin-top: 0em;
}

._slideImageAndCaption_jnkk7_2193 {
  top: 9%;
}

._slideImageAndCaption_jnkk7_2193._hideControlsBar_jnkk7_233 {
  top: 0;
}

._slideshowAnimContainer_jnkk7_441 {
  -ms-overflow-style: none;
  /* scrollbar-width: none;   */
}
._thumbnails_jnkk7_133::-webkit-scrollbar {
  display: none;
}

._roundedBorder_jnkk7_2225 {
  border-radius: 20px;
}

._maxWidthFull_jnkk7_2233 {
  max-width: 100%;
}

._maxWidthWithoutMagnifier_jnkk7_2241 {
  max-width: 80%;
}

@media screen and (max-width: 880px) {
  ._iconHeaderDefault_jnkk7_715 {
    position: fixed;
    right: 5%;
  }
}

@media screen and (max-width: 480px) {
  ._iconHeaderDefault_jnkk7_715 {
    position: fixed;
    left: 180px;
  }
  
}

@media screen and (max-width: 440px) {
  ._iconHeaderDefault_jnkk7_715 {
    position: fixed;
    left: 160px;
  }
}

@media screen and (max-width: 410px) {
  ._iconHeaderDefault_jnkk7_715 {
    position: fixed;
    left: 140px;
  }
}

@media screen and (max-width: 385px) {
  ._iconHeaderDefault_jnkk7_715 {
    position: fixed;
    left: 135px;
    /* top: 24px; */
  }
}

@media screen and (max-width: 365px) {
  ._iconHeaderDefault_jnkk7_715 {
    position: fixed;
    left: 90px;
  }
}

@media screen and (max-width: 345px) {
  ._iconHeaderDefault_jnkk7_715 {
    position: fixed;
    left: 94px;
  }
}

@media screen and (max-width: 325px) {
  ._iconsHeader_jnkk7_49 {
    position: fixed;
    left: 60px;
  }
}

@media screen and (max-width: 300px) {
  ._iconsHeader_jnkk7_49 {
    position: fixed;
    left: 30px;
  }
}

._lightboxVideo_jnkk7_2379 {
  margin-left: auto;
  margin-right: auto;
}

._navigation-wrapper_jnkk7_2389 {
  position: relative;
}

._dots_jnkk7_2397 {
  display: flex;
  padding: 10px 0;
  justify-content: center;
}

._dot_jnkk7_2397 {
  border: none;
  width: 10px;
  height: 10px;
  background: #c5c5c5;
  border-radius: 50%;
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;
}

._dot_jnkk7_2397:focus {
  outline: none;
}

._dot_jnkk7_2397._active_jnkk7_1589 {
  background: #000;
}

._arrow_jnkk7_2447 {
  position: absolute;
  top: 50%;
  font-size: 24px;
  font-weight: bold;
  transition: all 0.2s;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  color: #fff;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: sans-serif;
}

._leftArrow_jnkk7_2477 {
  left: 8px;
  padding-right: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
}

._rightArrow_jnkk7_2491 {
  left: auto;
  right: 8px;
  padding-left: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
}

._arrow_jnkk7_2447:hover {
  color: rgb(230, 230, 230);
}

._arrow--disabled_jnkk7_2515,
._arrow--disabled_jnkk7_2515:hover {
  color: rgba(255, 255, 255, 0.5);
}

._navDotsMargin_jnkk7_2525 {
  margin-top: 12px;
}

._inactiveThumbnailBorderImgSlider_jnkk7_2533 {
  border: 'solid transparent 2px';
}

._ytVideoImgSlider_jnkk7_2541 {
  width: 100%;
  height: 100%;
}

._ytVideoImgSlider_jnkk7_2541 iframe {
  width: 100%;
  height: 100%;
}

._outerYTVideoImgSlider_jnkk7_2561 {
  height: 100%;
}

._lightboxjs_jnkk7_1 iframe {
  margin: none;
  padding: none;
  border: none;
}

._imgSliderArrow_jnkk7_2581 {
  z-index: 100000;
  background-color: transparent;
  border: none;
}

._thumbnails_jnkk7_133 {
  margin-left: auto;
  margin-right: auto;
}

._cursorPointer_jnkk7_2603 {
  cursor: pointer;
}

._lightboxjsIcon_jnkk7_2611 > * { color: inherit; fill: inherit }

._embla_jnkk7_1613 {
  margin-left: auto;
  margin-right: auto;
  --slide-spacing: 1rem;
  --slide-size: 100%;
  --slide-height: 19rem;
}

._emblaViewport_jnkk7_2631 {
  overflow: hidden;
  width: 100vw;
}

._emblaContainer_jnkk7_2641 {
  backface-visibility: hidden; 
  touch-action: pan-y;
  height: auto;
  margin-left: calc(var(--slide-spacing) * -1);
  display: grid;  
  grid-auto-flow: column;  
  grid-auto-columns: 100%; 
  max-width: 100vw;
  margin-left: auto;
  margin-right: auto; 
  /* width: 80%;
*/
}

._emblaContainerImgMetadata_jnkk7_2671 {
  width: 78vw;
  max-width: 78vw;
  height: 80vh;
}

._imgdrag_jnkk7_2683 ._emblaSlide_jnkk7_2683 {
  flex: 0 0 80%;
  min-width: 0;
  max-width: 100%;
  padding-left: 12px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

._emblaThumbsViewport_jnkk7_2703 {
  overflow: hidden;
}

._emblaThumbsContainer_jnkk7_2711 {
  display: flex;
  flex-direction: row;
  margin-left: calc(var(--thumbs-slide-spacing) * -1);
  width: 100%;
  /* align-items: center;
  text-align: center;
  width: fit-content; */
  /* justify-content: center; */
  
}

._emblaThumbsContainer_jnkk7_2711::before, ._emblaThumbsContainer_jnkk7_2711::after {
  content: '';  /* Insert pseudo-element */
  margin: auto; /* Make it push flex items to the center */
}


._emblaThumbsSlide_jnkk7_2747 {
  /* min-width: 0; */
  padding-left: var(--thumbs-slide-spacing);
  /* position: relative; */
  /* width: 140px; */
}

._emblaThumbsSlideImg_jnkk7_2761 {
  /* display: block; */
  height: var(--thumbs-slide-height);
  width: 100%;
  object-fit: cover;
}

._mlAuto_jnkk7_2775 {
  margin-left: auto;
}

._metadata_jnkk7_2783 {
  color: white;
}

._emblaSlideGrid_jnkk7_2791 {
  display: flex;
}

._metadata_jnkk7_2783 {
  text-align: left;
  min-width: 17vw;
  max-width: 17vw;
  padding-top: 5vw;
}

._metadataPanel_jnkk7_2813 {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

._metadataInnerContainer_jnkk7_2825 {
  padding-left: 7vw;
}

._metadataInnerContainer_jnkk7_2825 span {
  display: block;
}


._imgMetadataCloseBtn_jnkk7_2843 {
  position: absolute;
  top: 1%;
  right: 2%;
  background: none;
  color: white;
  border: none;
  cursor: pointer;
}

/* Styling from react-zoom-pan-pinch library */
._reactTransformWrapper_jnkk7_2865 {
  position: relative;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  overflow: hidden;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -khtml-user-select: none; /* Konqueror HTML */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  margin: 0;
  padding: 0;
}

._reactTransformComponent_jnkk7_2001 {
  display: flex;
  flex-wrap: wrap;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  margin: 0;
  padding: 0;
  transform-origin: 0% 0%;
}

._reactTransformComponent_jnkk7_2001 img {
  pointer-events: none;
}

._navigationDot_jnkk7_181 {
  height: 10px;
  width: 10px;
  background-color: silver;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

._navigationDotContainer_jnkk7_2949 {
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 12px;
  padding-right: 12px;
}

._imgfade_jnkk7_2963._emblaContainer_jnkk7_2641 {
  transform: none !important; /* override Embla */
  display: flex;
  /* height: 250px; */
}

._notFullScreen_jnkk7_2975 {
  top: 0;
}

._imgfade_jnkk7_2963._emblaSlide_jnkk7_2683 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  position: absolute;
  /* top: 0; */
  left: 0 !important; /* override Embla */
  right: 0 !important; /* override Embla */
  opacity: 0;
  transition: opacity 0.5s;
  counter-increment: embla;
  border-radius: 0.5rem;
}

._imgFadeWithTopCaption_jnkk7_3011 {
  top: 16%;
  position: fixed;
}

._imgfade_jnkk7_2963._emblaSlideSelected_jnkk7_3021 {
  opacity: 1;
  transition: opacity 0.3s;
  z-index: 1;
}

._imgfade_jnkk7_2963._emblaSlide_jnkk7_2683:before {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

._fullImg_jnkk7_3047 {
  height: 84vh;
  max-height: 84vh;
  object-fit: contain;
}

._rotateImg90Deg_jnkk7_3059{
transform: rotate(90deg);
transition: transform 1s linear;
}  

._rotate_img_jnkk7_3069 {
transition: transform 0.7s linear;
}

._fullScreenContainer_jnkk7_477 img {
/* max-height: 100vh; */
}

._slideshowImg_jnkk7_233 img {
height: 100%;
}

._zoomInCursor_jnkk7_3093 {
  cursor: zoom-in;
}

._zoomOutCursor_jnkk7_3101 {
  cursor: zoom-out;
}`;(function(){if(!(typeof document>"u")&&!document.getElementById(m2)){var t=document.createElement("style");t.id=m2,t.textContent=jT,document.head.appendChild(t)}})();var te={lightboxjs:"_lightboxjs_jnkk7_1",closeIcon:"_closeIcon_jnkk7_45",iconsHeader:"_iconsHeader_jnkk7_49",prev1:"_prev1_jnkk7_53",next1:"_next1_jnkk7_55",thumbnail:"_thumbnail_jnkk7_97",thumbnails:"_thumbnails_jnkk7_133",thumbnailsWithCaption:"_thumbnailsWithCaption_jnkk7_149",thumbnailsOuterContainer:"_thumbnailsOuterContainer_jnkk7_157",navigationDots:"_navigationDots_jnkk7_181",thumbnailsAndCaption:"_thumbnailsAndCaption_jnkk7_221",hideControlsBar:"_hideControlsBar_jnkk7_233",slideshowImg:"_slideshowImg_jnkk7_233",rotateImgInnerContainer:"_rotateImgInnerContainer_jnkk7_241",slideshowInnerContainer:"_slideshowInnerContainer_jnkk7_249",imgTitleContainer:"_imgTitleContainer_jnkk7_277",thumbnailsOuterContainerMetadata:"_thumbnailsOuterContainerMetadata_jnkk7_337",htmlVideoOuterContainer:"_htmlVideoOuterContainer_jnkk7_361",modalContainer:"_modalContainer_jnkk7_403",slideshowAnimContainer:"_slideshowAnimContainer_jnkk7_441",fullScreenContainer:"_fullScreenContainer_jnkk7_477",slideshowInnerContainerThumbnails:"_slideshowInnerContainerThumbnails_jnkk7_575",lightboxContainer:"_lightboxContainer_jnkk7_599",controls:"_controls_jnkk7_681",iconHeaderDefault:"_iconHeaderDefault_jnkk7_715",ytVideo:"_ytVideo_jnkk7_727",videoOuterContainer:"_videoOuterContainer_jnkk7_739",customVideoContainer:"_customVideoContainer_jnkk7_767",customEmbedContainer:"_customEmbedContainer_jnkk7_767",imgTitle:"_imgTitle_jnkk7_277",iconHeaderCenter:"_iconHeaderCenter_jnkk7_911",innerContainerWithTopCaption:"_innerContainerWithTopCaption_jnkk7_1103",slideshowInnerContainerImgMetadata:"_slideshowInnerContainerImgMetadata_jnkk7_1183",slideshowImgMetadata:"_slideshowImgMetadata_jnkk7_1349",prev1Metadata:"_prev1Metadata_jnkk7_1357",slideshowImgWithCaption:"_slideshowImgWithCaption_jnkk7_1399",lightboxImg:"_lightboxImg_jnkk7_1425",lightIcon:"_lightIcon_jnkk7_1475",darkIcon:"_darkIcon_jnkk7_1501",lightHeaderIcon:"_lightHeaderIcon_jnkk7_1531",darkHeaderIcon:"_darkHeaderIcon_jnkk7_1557",emblaThumbs:"_emblaThumbs_jnkk7_1613",fullScreenSlideshowImg:"_fullScreenSlideshowImg_jnkk7_1659",htmlVideo:"_htmlVideo_jnkk7_361",reactTransformComponent:"_reactTransformComponent_jnkk7_2001",closeButton:"_closeButton_jnkk7_2101",closeButtonRounded:"_closeButtonRounded_jnkk7_2101",slideImageAndCaption:"_slideImageAndCaption_jnkk7_2193",maxWidthFull:"_maxWidthFull_jnkk7_2233",maxWidthWithoutMagnifier:"_maxWidthWithoutMagnifier_jnkk7_2241",lightboxVideo:"_lightboxVideo_jnkk7_2379",cursorPointer:"_cursorPointer_jnkk7_2603",lightboxjsIcon:"_lightboxjsIcon_jnkk7_2611",embla:"_embla_jnkk7_1613",emblaViewport:"_emblaViewport_jnkk7_2631",emblaContainer:"_emblaContainer_jnkk7_2641",emblaContainerImgMetadata:"_emblaContainerImgMetadata_jnkk7_2671",emblaSlide:"_emblaSlide_jnkk7_2683",emblaThumbsViewport:"_emblaThumbsViewport_jnkk7_2703",emblaThumbsContainer:"_emblaThumbsContainer_jnkk7_2711",emblaThumbsSlide:"_emblaThumbsSlide_jnkk7_2747",mlAuto:"_mlAuto_jnkk7_2775",metadata:"_metadata_jnkk7_2783",emblaSlideGrid:"_emblaSlideGrid_jnkk7_2791",metadataPanel:"_metadataPanel_jnkk7_2813",metadataInnerContainer:"_metadataInnerContainer_jnkk7_2825",imgMetadataCloseBtn:"_imgMetadataCloseBtn_jnkk7_2843",reactTransformWrapper:"_reactTransformWrapper_jnkk7_2865",navigationDot:"_navigationDot_jnkk7_181",imgfade:"_imgfade_jnkk7_2963",notFullScreen:"_notFullScreen_jnkk7_2975",imgFadeWithTopCaption:"_imgFadeWithTopCaption_jnkk7_3011",emblaSlideSelected:"_emblaSlideSelected_jnkk7_3021",zoomInCursor:"_zoomInCursor_jnkk7_3093",zoomOutCursor:"_zoomOutCursor_jnkk7_3101"},g2="f607797768045ad82cf5d34f54286dabf20555838c678c4c305d10e12a771e7d",TT=`._lightboxjs_jnkk7_1 {
  margin: 0;
  padding: 0;
}

._lightboxjs_jnkk7_1 * {
  box-sizing: border-box;
}

/* .lightboxjs img,
.lightboxjs svg,
.lightboxjs video {
  display: block;
  vertical-align: middle;
  height: auto;
  max-width: 100%;
} */

._slideshowBtn_jnkk7_37 {
  padding-bottom: 2px;
}

._closeIcon_jnkk7_45:hover,
._closeIcon_jnkk7_45:focus,
._iconsHeader_jnkk7_49 svg:hover,
._iconsHeader_jnkk7_49 svg:focus,
._prev1_jnkk7_53 span:hover,
._next1_jnkk7_55:hover,
._icon_jnkk7_49:hover {
  text-decoration: none;
  cursor: pointer;
  /* color: rgb(230, 230, 230); */
}

._prevIcon_jnkk7_69:hover,
._nextIcon_jnkk7_71:hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: rgb(230, 230, 230);
}

._show_jnkk7_81 {
  display: flex;
}

._displayHidden_jnkk7_89 {
  display: none;
}

._thumbnail_jnkk7_97 {
  opacity: 1;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
}

._next1_jnkk7_55 {
  right: 1%;
  padding-left: 2vw;
  padding-right: 3vw;
}

._prev1_jnkk7_53 {
  left: 2%;
  padding-right: 2vw;
}

._thumbnails_jnkk7_133 {
  transition: border 0.3s;
}

._thumbnail_jnkk7_97 {
  display: inline;
}

._thumbnailsWithCaption_jnkk7_149 {
  width: 90%;
}

._thumbnailsOuterContainer_jnkk7_157 {
  position: absolute;
  bottom: 4%;
  height: 5vh;
  width: 100vw;
  z-index: 10000000;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

._navigationDots_jnkk7_181 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

/* Mobile screens */
@media screen and (min-width: 20em) {
  ._imageSlide_jnkk7_197 {
    height: 67vw;
    width: 60%;
  }

  ._thumbnailsOuterContainer_jnkk7_157 {
    position: absolute;
    bottom: 7%;
    width: 100vw;
    /* width: 100%; */
  }

  ._thumbnailsAndCaption_jnkk7_221 {
    height: 23vh;
    bottom: 2%;

  }

  ._hideControlsBar_jnkk7_233 ._slideshowImg_jnkk7_233 {
    /* height: 100vh; */
  }

  ._rotateImgInnerContainer_jnkk7_241 {
    top: 8%;
  }

  ._hideControlsBar_jnkk7_233 ._slideshowInnerContainer_jnkk7_249 {
    top: 0;
  }

  ._thumbnail_jnkk7_97 {
    width: 80px;
    max-width: 80px;
    height: 7vh;
  }

  ._videoThumbnailsOuterContainer_jnkk7_269 {
    bottom: 2%;
  }

  ._imgTitleContainer_jnkk7_277 {
    padding-bottom: 16px;
    width: 100vw;
    margin-top: 0;
    margin-bottom: 0;
  }

  ._thumbnails_jnkk7_133 {
    margin-left: auto;
    margin-right: auto;
  }

  ._next1_jnkk7_55 {
    right: 0.9%;
  }

  ._prev1_jnkk7_53 {
    left: 1.5%;
  }
}

._thumbnail_jnkk7_97 {
  height: 5vh;
  border-radius: 6px;
  margin-right: 7px;
  object-fit: cover;
}



._thumbnailsOuterContainerMetadata_jnkk7_337 {
  width: 78vw;
}

._videoThumbnailsOuterContainer_jnkk7_269 {
  bottom: 5%;
}

._thumbnailsAndCaption_jnkk7_221 {
  height: 19vh;
}

._htmlVideoOuterContainer_jnkk7_361 video {
  height: 100%;
  max-height: 70vh;
  width: 100%;
}

._caption_jnkk7_373 {
  position: absolute;
  bottom: 14%;
  width: 100vw;
  z-index: 10000000;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}

._galleryImg_jnkk7_393 {
  cursor: pointer;
  margin: 0.2em;
}

._modalContainer_jnkk7_403 {
  width: 100vw;
  /* height: 100%;
  max-height: 100%; */
  direction: ltr;
  overflow: hidden;
  touch-action: none;
  padding: 0;
  overflow-y: hidden;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
}

._slideshowAnimContainer_jnkk7_441 {
  /* height: 100%;
  max-height: 100%; */
  direction: ltr;
  overflow: hidden;
  touch-action: none;
  padding: 0;
  overflow-y: hidden;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: fixed; */
  top: 0;
  left: 0;
  z-index: 1000000;
}

._fullScreenContainer_jnkk7_477 img {
  height: 100vh;
  max-width: 100%;
  /* max-height: 100vh; */
}

._imageInnerContainer_jnkk7_489 img {
  height: 80vh;
  max-width: 100%;
  max-height: 100%;
}

._imageInnerContainer_jnkk7_489 {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  z-index: 1000000;
}

._magnifyWrapper_jnkk7_527 {
  margin-bottom: 3em;
  margin-left: auto;
  margin-right: auto;
}

._slideshowInnerContainer_jnkk7_249 {
  position: fixed; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: top 0.2s ease-in-out 0s;
  top: 12%;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  z-index: 1000000;
}

._slideshowInnerVideoContainer_jnkk7_567 {
  top: 6%;
}

._slideshowInnerContainerThumbnails_jnkk7_575 {
  top: 12%;
}

._hideControlsBar_jnkk7_233  {
  top: 0;
}

._fullScreenContainer_jnkk7_477 {
  top: 0;
}

._lightboxContainer_jnkk7_599 {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

._next1_jnkk7_55,
._prev1_jnkk7_53 {
  top: calc(50% - 20px);
  position: absolute;
  display: flex;
  transition: all 0.2s;
  justify-content: center;
  align-items: center;
  padding-bottom: 2vh;
  padding-top: 2vh;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  font-size: 18px;
  z-index: 10000000;
}



._next1_jnkk7_55:hover,
._prev1_jnkk7_53:hover {
  color: rgb(230, 230, 230);
}

._slideshowAnimImg_jnkk7_671 {
  position: absolute;
  max-width: 100vw;
}

._controls_jnkk7_681 {
  display: flex;
  flex-direction: row;
  align-items: center;
}

._iconsHeader_jnkk7_49 {
  color: white;
  display: flex;
  flex-direction: row;
  /* align-items: center;
    justify-content: center; */
  cursor: pointer;
  z-index: 999999999;
  /* padding: 0.14vw; */
}

._iconHeaderDefault_jnkk7_715 {
  position: absolute;
  top: 10px;
  right: 45px;
}

._ytVideo_jnkk7_727 {
  aspect-ratio: 16 / 9;
  height: 65vh;
  width: 100%;
}

._videoOuterContainer_jnkk7_739 {
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  height: 60vh;
  max-height: 65vh;
}

._htmlVideoOuterContainer_jnkk7_361 {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

._customVideoContainer_jnkk7_767, ._customEmbedContainer_jnkk7_767 {
  margin-left: auto;
  margin-right: auto;
}

._videoIconsHeader_jnkk7_777 {
  position: fixed;
  top: 4%;
  right: 3%;
}

._lightbox_jnkk7_1 ._iconsHeader_jnkk7_49 svg {
  transition: 0.3s all;
}

._iconsHeader_jnkk7_49 svg:active {
  transform: scale(0.97);
}

._imgTitle_jnkk7_277 {
  text-align: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

._iconsHeader_jnkk7_49 svg {
  margin-left: 0.6em;
  padding: 0.2em;
  transition: all 0.1s;
  /* width: 32px;  */
  /* font-size: 18px; */
  line-height: 16px;
  vertical-align: baseline;
}

._icon_jnkk7_49 {
  /* width: 32px;  */
}

@media screen and (min-width: 6em) {
  ._iconsHeader_jnkk7_49 {
    top: 3%;
  }

  ._slideshowAnimContainer_jnkk7_441 {
    width: 100vw;
  }

  ._iconsHeader_jnkk7_49 svg {
    /* width: 34px;  */
    padding-right: 0.3em;
  }

  ._lightboxjs_jnkk7_1 img {
    cursor: pointer;
  }

  ._thumbnail_jnkk7_97 {
    height: 9vh;
    /* width: 22vw; */
  }

  ._next1_jnkk7_55 {
    top: calc(48% - 20px);
  }

  ._prev1_jnkk7_53 {
    top: calc(48% - 20px);

  }

  ._iconHeaderCenter_jnkk7_911 {
    width: 100vw; 
    display: flex;
    flex-direction: row;
    cursor: pointer;
    position: fixed;
    top: 10px;
    justify-content: center;
    left: 0;
  }

}

@media screen and (min-width: 39em) {
  ._slideshowAnimContainer_jnkk7_441 {
    width: 100vw;
  }

  ._slideshowInnerContainer_jnkk7_249 {
    /* width: 100vw;
    height: 95vh;
    position: absolute; */
  }

  ._imgTitleContainer_jnkk7_277 {
    padding-bottom: 0px;
  }
  

  ._next1_jnkk7_55 {
    right: 0.7%;
  }

  ._iconHeaderCenter_jnkk7_911 {
    width: 100%; 
    display: flex;
    flex-direction: row;
    cursor: pointer;
    position: fixed;
    top: 10px;
    justify-content: center;
    left: 0;

  
  }

  /* .thumbnailsOuterContainer {
    bottom: 10%;
  } */

  /* .hideControlsBar .slideshow_img {
    height: 70vh;

  }

  .hideControlsBar {
    top: 10%;
  } */

  ._fullScreenContainer_jnkk7_477 {
    width: 100vw;
    /* height: 100vh; */
  }

  ._fullScreenContainer_jnkk7_477 img {
    height: 100vh;
  }

  ._thumbnails_jnkk7_133 {
    margin-top: 0.6em;
  }

  ._thumbnail_jnkk7_97 {
    /* height: 8vh; */
    width: 80px;
    max-width: 80px;
  }

  ._iconsHeader_jnkk7_49 svg {
    /* width: 32px; 
      font-size: 32px; */
  }

  ._prev1_jnkk7_53 {
    left: 2.7%;
    padding-right: 2vw;
  }
}

/* Desktop screens */
@media screen and (min-width: 42em) {
  ._imageSlide_jnkk7_197 {
    height: 70vh;
    width: 80vw;
  }

  ._innerContainerWithTopCaption_jnkk7_1103 {
    top: 8%;
  }

  ._slideshowImgFullscreen_jnkk7_1111 {
    display: grid;
    width: 92vw;
    place-items: start;
    margin-left: auto;
    margin-right: auto;
    scrollbar-gutter: stable both-edges;
  }

  ._thumbnailsAndCaption_jnkk7_221 {
    bottom: 0%;
  }
  
  ._rotateImgInnerContainer_jnkk7_241 {
    top: 2%;
  }

  ._slideshowInnerContainer_jnkk7_249 img {
    margin-top: 0vh;
    /* width: 70vw; */
  }

  ._fullScreenContainer_jnkk7_477 img {
    width: 80vw;
  }

  ._slideshowInnerContainerFullScreen_jnkk7_1163 {
    top: 0%;
  }

  ._fullScreenLightboxImg_jnkk7_1171 {
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
  }

  ._slideshowInnerContainerImgMetadata_jnkk7_1183 {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  ._slideshowInnerContainerFullScreen_jnkk7_1163 {
    height: 100vh;
    width: 100vw;
    position: absolute;
  }

  ._slideshowInnerContainerFullScreen_jnkk7_1163 img {
    object-fit: contain;
  }

  ._thumbnails_jnkk7_133 {
    scrollbar-width: none;
    -ms-overflow-style: none;
    margin-top: 1.1em;
  }

  ._thumbnails_jnkk7_133::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  ._opacity-fade_jnkk7_1237 {
    transition: opacity 0.3s;
    -webkit-transition: opacity 0.3s;
    opacity: 1;
  }

  ._thumbnailsOuterContainer_jnkk7_157 {
    margin-top: 0.1em;
    padding-top: 0.3em;
    height: 5vh;
    bottom: 11%;
  }

  ._thumbnailsAndCaption_jnkk7_221 {
    bottom: 0%;
  }

  ._thumbnail_jnkk7_97,
  ._imageSliderThumbnails_jnkk7_1273 img {
    height: 10vh;
    /* width: 7em; */
  }

  ._slideshowAnimContainer_jnkk7_441 {
    width: 100vw;
  }

  /* .slideshowInnerContainer {
    width: 100vw;
    height: 95vh;
  } */

  ._hideControlsBar_jnkk7_233 {
    /* height: 100vh; */
  }

  ._fullScreenContainer_jnkk7_477 {
    width: 100vw;
    /* height: 100vh; */
  }

  ._iconsHeader_jnkk7_49 svg {
    /* width: 37px;
      font-size: 34px; */
  }

  ._prev1_jnkk7_53 {
    left: 2%;
    padding-right: 2vw;
  }

  ._next1_jnkk7_55 {
    right: 0.4%;
  }

  
  ._slideshowImgMetadata_jnkk7_1349 {
    width: 78vw;
  }

  ._prev1Metadata_jnkk7_1357 {
    left: 1%;
  }

  ._navigationDots_jnkk7_181 {
    gap: 8px;
  }

 
}

@media screen and (min-width: 53em) {
  
  ._slideshowImg_jnkk7_233 {
    display: grid;
    width: 100vw;
    height: 70vh;
    place-items: start;
    /* margin-top: 7vh; */
  }

  ._slideshowImgWithCaption_jnkk7_1399 {
    height: 68vh;
  }

  ._hideControlsBar_jnkk7_233 ._slideshowImg_jnkk7_233, ._hideControlsBarAndCaption_jnkk7_1407 ._slideshowImg_jnkk7_233  {
    padding-top: 12vh;
  }

  ._fullScreenContainer_jnkk7_477 ._slideshowImg_jnkk7_233 {
    padding-top: 0vh;
  }


  ._lightboxImg_jnkk7_1425 {
      /* height: 70vh; */
  }

  ._thumbnail_jnkk7_97 {
    width: 95px;
    max-width: 80px;
  } 

  ._slideshowImgMetadata_jnkk7_1349 {
    width: 78vw;
  }
}
  

@media screen and (min-width: 80em) {
  ._slideshowInnerContainer_jnkk7_249 img {
    /* width: 60vw; */
  }

  ._fullScreenContainer_jnkk7_477 img {
    width: 80vw;
  }
}

._lightIcon_jnkk7_1475,
._lightIcon_jnkk7_1475 svg {
  background-color: white;
  color: black;
}

._lightIcon_jnkk7_1475:hover,
._lightIcon_jnkk7_1475 svg:hover {
  background-color: white;
  color: black;
  fill: black;
}

._darkIcon_jnkk7_1501,
._darkIcon_jnkk7_1501 svg {
  background-color: transparent;
  /* background-color: #151515; */
  color: silver;
  fill: silver;
}

._darkIcon_jnkk7_1501:hover,
._darkIcon_jnkk7_1501 svg:hover {
  color: rgba(107, 107, 107, 0.8);
  fill: rgba(107, 107, 107, 0.8);
}

/* Header icons  */
._lightHeaderIcon_jnkk7_1531 svg {
  background-color: white;
  color: black;
  fill: black;
}

._lightHeaderIcon_jnkk7_1531 svg:hover {
  background-color: white;
  color: rgb(24, 24, 24, 0.8);
  fill: rgb(24, 24, 24, 0.8);

}

._darkHeaderIcon_jnkk7_1557 svg {
  background-color: transparent;
  /* background-color: #151515; */
  color: #626b77;
  fill: #626b77;
}

._darkHeaderIcon_jnkk7_1557 svg:hover {
  color: rgba(99, 99, 99, 0.8);
  fill: rgba(99, 99, 99, 0.8);
}

._magnifierImage_jnkk7_1581 {
  object-fit: contain;
}

._thumbnails_jnkk7_133 ._active_jnkk7_1589 {
  border: solid rgb(107, 133, 206) 2px;
}

._inactiveThumbnailBorder_jnkk7_1597 {
  border: solid transparent 2px;
}

._thumbnails_jnkk7_133 {
  width: 95%;
}

._emblaThumbs_jnkk7_1613 {
  --thumbs-slide-spacing: 2px; 
  /* --thumbs-slide-height: 9rem; */
  margin-top: var(--thumbs-slide-spacing);
}

@media screen and (max-width: 40em) {
  /* .innerContainerWithTopCaption {
    position: relative;
  } */


  ._imgTitleContainer_jnkk7_277 {
    /* position: absolute;
    top: 12%; */
  }

  ._slideshowImg_jnkk7_233 {
    height: 100vh;
  }
}

@media screen and (max-width: 53em) {
  ._fullScreenSlideshowImg_jnkk7_1659 {
    margin-top: auto;
    margin-bottom: auto;
  }
}

@media screen and (max-width: 44em) and (min-width: 30em) {
  /* .innerContainerWithTopCaption {
    position: relative;
  } */
  ._thumbnailsOuterContainer_jnkk7_157 {
    bottom: 11%;
  }

  ._thumbnailsAndCaption_jnkk7_221 {
    bottom: 4%;
  }
  
  ._imgTitleContainer_jnkk7_277 {
    /* position: absolute;
    top: 5%; */
  }
}

@media screen and (max-width: 46em) and (min-width: 30em) {
  /* .innerContainerWithTopCaption {
    position: relative;
  } */

  /* .imgTitleContainer {
    position: absolute;
    top: 7%;
  } */
}

@media screen and (max-width: 49em) and (min-width: 45em) {
  /* .innerContainerWithTopCaption {
    position: relative;
  } */


  /* .imgTitleContainer {
    position: absolute;
    top: 5%;
  } */
}

@media screen and (max-width: 29em) {
  ._fullScreenContainer_jnkk7_477 img {
    object-fit: cover;
  }

  ._emblaThumbs_jnkk7_1613 {
    --thumbs-slide-spacing: 3px; 
    /* --thumbs-slide-height: 9rem; */
    margin-top: var(--thumbs-slide-spacing);
  }



  ._htmlVideo_jnkk7_361 {
    margin-top: 5vh;
  }

  ._thumbnails_jnkk7_133 {
    width: 98%;
  }

  ._thumbnail_jnkk7_97 {
    width: 80px;
    max-width: 80px;
  }

  ._htmlVideoOuterContainer_jnkk7_361 video {
    max-height: 65vh;
  }

  ._videoIconsHeader_jnkk7_777 {
    position: fixed;
    top: 2%;
    right: 15px;
  }

  ._videoOuterContainer_jnkk7_739 {
    width: 88%;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    max-height: 65vh;
  }

  ._htmlVideoOuterContainer_jnkk7_361 {
    width: 94%;
    margin-left: auto;
    margin-right: auto;
  }

  ._iconHeaderDefault_jnkk7_715 {
    position: fixed;
    left: 115px;
  }

  ._slideshowInnerVideoContainer_jnkk7_567 {
    top: 3%;
  }

  ._next1_jnkk7_55,
  ._prev1_jnkk7_53 {
    padding-bottom: 2vh;
    padding-top: 2vh;
  }

  ._next1_jnkk7_55 {
    padding-left: 4vw;
  }

  ._prev1_jnkk7_53 {
    padding-right: 4vw;
  }

  ._iconsHeader_jnkk7_49 {
    /* font-size: 28px; */
  }

}

@media screen and (max-width: 53em) {
  ._slideshowImg_jnkk7_233 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100vw;
    height: 70vh;
  }

  ._slideshowImg_jnkk7_233 img {
    margin-left: auto;
    margin-right: auto;
  }

  ._slideshowInnerContainerFullScreen_jnkk7_1163 {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: top 0.2s ease-in-out 0s;
    top: 10%;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    z-index: 1000000;
  }

  ._containImg_jnkk7_1969 {
    object-fit: contain;
  }
}

._fullScreenContainer_jnkk7_477 img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

._thumbnails_jnkk7_133 {
  text-align: center;
  white-space: nowrap;
}

._reactTransformComponent_jnkk7_2001 {
  margin-left: auto;
  margin-right: auto;
}

._magnifierImage_jnkk7_1581 {
  margin-left: auto;
  margin-right: auto;
}

/* CSS loader  */
._loader_jnkk7_2023 {
  width: 44px;
  height: 44px;
  box-sizing: border-box;

  border-radius: 50%;

  display: inline-block;
  position: fixed;
  top: 35%;
  left: 50%;
  animation: _rotation_jnkk7_1 1s linear infinite;
}

@keyframes _rotation_jnkk7_1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

._dayLoader_jnkk7_2069 {
  border: 5px solid #626b77;
  border-bottom-color: transparent;
}

._nightLoader_jnkk7_2079 {
  border: 5px solid #fff;
  border-bottom-color: transparent;
}

._lightboxImg_jnkk7_1425 {
  max-height: 70vh;
  margin-left: auto;
  margin-right: auto;
}

._controls_jnkk7_681 button, ._closeButton_jnkk7_2101, ._closeButtonRounded_jnkk7_2101 {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 16px;
}

._controls_jnkk7_681 svg {
  box-sizing: border-box;
}

._closeButton_jnkk7_2101 svg, ._closeButtonRounded_jnkk7_2101 svg {
  box-sizing: border-box;
  font-size: 16px;
  padding-top: 0.5px;
}

._closeButton_jnkk7_2101 {
  padding-top: 3px;
}

._closeButtonRounded_jnkk7_2101 {
  cursor: pointer;

}

._closeButtonRounded_jnkk7_2101 svg {
  margin: 0;
  padding: 5px;
  background-color: black;
  border-color: transparent;
  border-radius: 28px;

}

._thumbnailsAndCaption_jnkk7_221 {
  height: 19vh;
  margin-top: 0em;
  width: 100vw;
}

._thumbnailsWithCaption_jnkk7_149 {
  margin-top: 0em;
}

._slideImageAndCaption_jnkk7_2193 {
  top: 9%;
}

._slideImageAndCaption_jnkk7_2193._hideControlsBar_jnkk7_233 {
  top: 0;
}

._slideshowAnimContainer_jnkk7_441 {
  -ms-overflow-style: none;
  /* scrollbar-width: none;   */
}
._thumbnails_jnkk7_133::-webkit-scrollbar {
  display: none;
}

._roundedBorder_jnkk7_2225 {
  border-radius: 20px;
}

._maxWidthFull_jnkk7_2233 {
  max-width: 100%;
}

._maxWidthWithoutMagnifier_jnkk7_2241 {
  max-width: 80%;
}

@media screen and (max-width: 880px) {
  ._iconHeaderDefault_jnkk7_715 {
    position: fixed;
    right: 5%;
  }
}

@media screen and (max-width: 480px) {
  ._iconHeaderDefault_jnkk7_715 {
    position: fixed;
    left: 180px;
  }
  
}

@media screen and (max-width: 440px) {
  ._iconHeaderDefault_jnkk7_715 {
    position: fixed;
    left: 160px;
  }
}

@media screen and (max-width: 410px) {
  ._iconHeaderDefault_jnkk7_715 {
    position: fixed;
    left: 140px;
  }
}

@media screen and (max-width: 385px) {
  ._iconHeaderDefault_jnkk7_715 {
    position: fixed;
    left: 135px;
    /* top: 24px; */
  }
}

@media screen and (max-width: 365px) {
  ._iconHeaderDefault_jnkk7_715 {
    position: fixed;
    left: 90px;
  }
}

@media screen and (max-width: 345px) {
  ._iconHeaderDefault_jnkk7_715 {
    position: fixed;
    left: 94px;
  }
}

@media screen and (max-width: 325px) {
  ._iconsHeader_jnkk7_49 {
    position: fixed;
    left: 60px;
  }
}

@media screen and (max-width: 300px) {
  ._iconsHeader_jnkk7_49 {
    position: fixed;
    left: 30px;
  }
}

._lightboxVideo_jnkk7_2379 {
  margin-left: auto;
  margin-right: auto;
}

._navigation-wrapper_jnkk7_2389 {
  position: relative;
}

._dots_jnkk7_2397 {
  display: flex;
  padding: 10px 0;
  justify-content: center;
}

._dot_jnkk7_2397 {
  border: none;
  width: 10px;
  height: 10px;
  background: #c5c5c5;
  border-radius: 50%;
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;
}

._dot_jnkk7_2397:focus {
  outline: none;
}

._dot_jnkk7_2397._active_jnkk7_1589 {
  background: #000;
}

._arrow_jnkk7_2447 {
  position: absolute;
  top: 50%;
  font-size: 24px;
  font-weight: bold;
  transition: all 0.2s;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  color: #fff;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: sans-serif;
}

._leftArrow_jnkk7_2477 {
  left: 8px;
  padding-right: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
}

._rightArrow_jnkk7_2491 {
  left: auto;
  right: 8px;
  padding-left: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
}

._arrow_jnkk7_2447:hover {
  color: rgb(230, 230, 230);
}

._arrow--disabled_jnkk7_2515,
._arrow--disabled_jnkk7_2515:hover {
  color: rgba(255, 255, 255, 0.5);
}

._navDotsMargin_jnkk7_2525 {
  margin-top: 12px;
}

._inactiveThumbnailBorderImgSlider_jnkk7_2533 {
  border: 'solid transparent 2px';
}

._ytVideoImgSlider_jnkk7_2541 {
  width: 100%;
  height: 100%;
}

._ytVideoImgSlider_jnkk7_2541 iframe {
  width: 100%;
  height: 100%;
}

._outerYTVideoImgSlider_jnkk7_2561 {
  height: 100%;
}

._lightboxjs_jnkk7_1 iframe {
  margin: none;
  padding: none;
  border: none;
}

._imgSliderArrow_jnkk7_2581 {
  z-index: 100000;
  background-color: transparent;
  border: none;
}

._thumbnails_jnkk7_133 {
  margin-left: auto;
  margin-right: auto;
}

._cursorPointer_jnkk7_2603 {
  cursor: pointer;
}

._lightboxjsIcon_jnkk7_2611 > * { color: inherit; fill: inherit }

._embla_jnkk7_1613 {
  margin-left: auto;
  margin-right: auto;
  --slide-spacing: 1rem;
  --slide-size: 100%;
  --slide-height: 19rem;
}

._emblaViewport_jnkk7_2631 {
  overflow: hidden;
  width: 100vw;
}

._emblaContainer_jnkk7_2641 {
  backface-visibility: hidden; 
  touch-action: pan-y;
  height: auto;
  margin-left: calc(var(--slide-spacing) * -1);
  display: grid;  
  grid-auto-flow: column;  
  grid-auto-columns: 100%; 
  max-width: 100vw;
  margin-left: auto;
  margin-right: auto; 
  /* width: 80%;
*/
}

._emblaContainerImgMetadata_jnkk7_2671 {
  width: 78vw;
  max-width: 78vw;
  height: 80vh;
}

._imgdrag_jnkk7_2683 ._emblaSlide_jnkk7_2683 {
  flex: 0 0 80%;
  min-width: 0;
  max-width: 100%;
  padding-left: 12px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

._emblaThumbsViewport_jnkk7_2703 {
  overflow: hidden;
}

._emblaThumbsContainer_jnkk7_2711 {
  display: flex;
  flex-direction: row;
  margin-left: calc(var(--thumbs-slide-spacing) * -1);
  width: 100%;
  /* align-items: center;
  text-align: center;
  width: fit-content; */
  /* justify-content: center; */
  
}

._emblaThumbsContainer_jnkk7_2711::before, ._emblaThumbsContainer_jnkk7_2711::after {
  content: '';  /* Insert pseudo-element */
  margin: auto; /* Make it push flex items to the center */
}


._emblaThumbsSlide_jnkk7_2747 {
  /* min-width: 0; */
  padding-left: var(--thumbs-slide-spacing);
  /* position: relative; */
  /* width: 140px; */
}

._emblaThumbsSlideImg_jnkk7_2761 {
  /* display: block; */
  height: var(--thumbs-slide-height);
  width: 100%;
  object-fit: cover;
}

._mlAuto_jnkk7_2775 {
  margin-left: auto;
}

._metadata_jnkk7_2783 {
  color: white;
}

._emblaSlideGrid_jnkk7_2791 {
  display: flex;
}

._metadata_jnkk7_2783 {
  text-align: left;
  min-width: 17vw;
  max-width: 17vw;
  padding-top: 5vw;
}

._metadataPanel_jnkk7_2813 {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

._metadataInnerContainer_jnkk7_2825 {
  padding-left: 7vw;
}

._metadataInnerContainer_jnkk7_2825 span {
  display: block;
}


._imgMetadataCloseBtn_jnkk7_2843 {
  position: absolute;
  top: 1%;
  right: 2%;
  background: none;
  color: white;
  border: none;
  cursor: pointer;
}

/* Styling from react-zoom-pan-pinch library */
._reactTransformWrapper_jnkk7_2865 {
  position: relative;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  overflow: hidden;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -khtml-user-select: none; /* Konqueror HTML */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  margin: 0;
  padding: 0;
}

._reactTransformComponent_jnkk7_2001 {
  display: flex;
  flex-wrap: wrap;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  margin: 0;
  padding: 0;
  transform-origin: 0% 0%;
}

._reactTransformComponent_jnkk7_2001 img {
  pointer-events: none;
}

._navigationDot_jnkk7_181 {
  height: 10px;
  width: 10px;
  background-color: silver;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

._navigationDotContainer_jnkk7_2949 {
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 12px;
  padding-right: 12px;
}

._imgfade_jnkk7_2963._emblaContainer_jnkk7_2641 {
  transform: none !important; /* override Embla */
  display: flex;
  /* height: 250px; */
}

._notFullScreen_jnkk7_2975 {
  top: 0;
}

._imgfade_jnkk7_2963._emblaSlide_jnkk7_2683 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  position: absolute;
  /* top: 0; */
  left: 0 !important; /* override Embla */
  right: 0 !important; /* override Embla */
  opacity: 0;
  transition: opacity 0.5s;
  counter-increment: embla;
  border-radius: 0.5rem;
}

._imgFadeWithTopCaption_jnkk7_3011 {
  top: 16%;
  position: fixed;
}

._imgfade_jnkk7_2963._emblaSlideSelected_jnkk7_3021 {
  opacity: 1;
  transition: opacity 0.3s;
  z-index: 1;
}

._imgfade_jnkk7_2963._emblaSlide_jnkk7_2683:before {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

._fullImg_jnkk7_3047 {
  height: 84vh;
  max-height: 84vh;
  object-fit: contain;
}

._rotateImg90Deg_jnkk7_3059{
transform: rotate(90deg);
transition: transform 1s linear;
}  

._rotate_img_jnkk7_3069 {
transition: transform 0.7s linear;
}

._fullScreenContainer_jnkk7_477 img {
/* max-height: 100vh; */
}

._slideshowImg_jnkk7_233 img {
height: 100%;
}

._zoomInCursor_jnkk7_3093 {
  cursor: zoom-in;
}

._zoomOutCursor_jnkk7_3101 {
  cursor: zoom-out;
}`;(function(){if(!(typeof document>"u")&&!document.getElementById(g2)){var t=document.createElement("style");t.id=g2,t.textContent=TT,document.head.appendChild(t)}})();var ti={lightboxImg:"_lightboxImg_jnkk7_1425",containImg:"_containImg_jnkk7_1969",loader:"_loader_jnkk7_2023",dayLoader:"_dayLoader_jnkk7_2069",nightLoader:"_nightLoader_jnkk7_2079",maxWidthFull:"_maxWidthFull_jnkk7_2233",maxWidthWithoutMagnifier:"_maxWidthWithoutMagnifier_jnkk7_2241",fullImg:"_fullImg_jnkk7_3047",zoomInCursor:"_zoomInCursor_jnkk7_3093"};function om({props:t,imgRef:n,fullImg:a,imgStyle:s,imgSrc:l,index:u,displayImgMetadata:f,enableMagnifyingGlass:h,onUpdateImgMetadata:m}){const[g,p]=j.useState(!0),y=T=>{let N=T.split("/");return N[N.length-1]},b=(T,N)=>{t.onImgError&&t.onImgError(T,N)},C=()=>{if(t.theme){if(t.theme=="night"||t.theme=="lightbox")return ti.nightLoader;if(t.theme=="day")return ti.dayLoader}return ti.nightLoader},x=T=>{if(T){let N=T.getDate(),E=T.getMonth()+1,M=T.getFullYear(),w=T.toLocaleTimeString(metadataLocale);return""+M+"-"+(E<=9?"0"+E:E)+"-"+(N<=9?"0"+N:N)+` ${w}`}return""};return k.jsxs(k.Fragment,{children:[g?k.jsx("span",{className:`${ti.loader} ${C()}`},"loader"):null,k.jsx("img",{className:`imageModal ${a&&t.thumbnailImgAnim?ti.fullImg:!1}  
            ${t.imgElemClassname?t.imgElemClassname:""}
            ${t.isZoomCursor?ti.zoomInCursor:""}
          ${ti.lightboxImg} ${ti.rotate_img}
          ${h?ti.maxWidthFull:ti.maxWidthWithoutMagnifier}  ${ti.containImg} `,style:s,ref:n,loading:"lazy",src:l,onError:T=>{p(!1),b(T,u)},onLoad:T=>{if(p(!1),f&&T){let N=T.target,E={},M=y(N.src);E.name=M,Nx.parse(N,!0).then(w=>{if(w){let O=["isoData","createDate","height","width","shutterSpeed","fNumber"];for(let B=0;B<O.length;B++)switch(O[B]){case"isoData":w.ISO&&(E.isoData=w.ISO);break;case"createDate":w.CreateDate&&(E.createDate=x(w.CreateDate));break;case"height":w.ExifImageHeight&&(E.height=w.ExifImageHeight);break;case"width":w.ExifImageWidth&&(E.width=w.ExifImageWidth);break;case"fNumber":w.fNumber&&(E.fNumber=w.fNumber);break;case"shutterSpeed":w.ShutterSpeedValue&&(E.shutterSpeed=w.ShutterSpeedValue);break}let D=imgMetadata;D[u]=E,m(D)}})}},id:"img"})]})}var lm=(t,n,a)=>{if(t==n)return t;let s=n-t;return((a-t)%s+s)%s+t},p2=t=>t.type=="yt"&&t.autoPlay!=!0&&t.autoPlay!="true"?!1:!(t.autoPlay==!1||t.autoPlay=="false"),v2=t=>t.videoHeight?t.videoHeight:"200",y2=t=>t.videoWidth?t.videoWidth:"900",AT=(t,n)=>t<1?1:t>n?n:t,b2=t=>{t.exitFullscreen?t.exitFullscreen():t.webkitExitFullscreen?t.webkitExitFullscreen():t.msExitFullscreen&&t.msExitFullscreen()},ET=t=>{if(t)return`solid ${t} 2px`},Q_=(t,n)=>typeof t=="object"&&t!=null&&typeof n=="object"&&n!=null&&Object.keys(t).length>0?Object.keys(t).length===Object.keys(n).length&&Object.keys(t).every(a=>Q_(t[a],n[a])):t===n,_2={visible:{opacity:1,y:0},hidden:{opacity:0,y:100}},ia={day:{background:"white",iconColor:"black",thumbnailBorder:"solid transparent 2px",textColor:"black",metadataTextColor:"black"},night:{background:"#151515",iconColor:"#626b77",thumbnailBorder:"solid rgb(107, 133, 206)  2px",textColor:"silver",metadataTextColor:"white"},lightbox:{background:"rgba(12, 12, 12, 0.93)",iconColor:"#626b77",thumbnailBorder:"solid rgb(107, 133, 206) 2px",textColor:"silver",metadataTextColor:"white"}},OT="solid transparent 2px",Pc="night",MT=768,DT=1100,um=t=>{const n=j.useRef();return j.useEffect(()=>{n.current=t}),n.current},S2=j.forwardRef((t,n)=>{j.useImperativeHandle(n,()=>({reset(){br(!0,!0)}}));const[[a,s],l]=j.useState([0,0]),[u,f]=j.useState(!1),[h,m]=j.useState(t.slideDuration?t.slideDuration:25),[g,p]=j.useState(t.toggleThumbnailDisplay?t.toggleThumbnailDisplay:!1),[y,b]=j.useState(t.controlsPlacement?t.controlsPlacement:"default"),[C,x]=j.useState(!1),[T,N]=j.useState(t.iconStyle?t.iconStyle:null),[E,M]=j.useState(!1),[w,O]=j.useState([]),[D,B]=j.useState([]),U=lm(0,w.length,a),[F,Z]=j.useState({loop:!0,startIndex:0,active:!0,duration:h,dragThreshold:10,skipSnaps:!0});let ie={startIndex:0,containScroll:"keepSnaps",dragFree:!0};const[ae,oe]=j.useState(0),ce=ae<=MT,Ae=ae<=DT,[Oe,H]=j.useState(ie),[$,re]=j.useState(!1),[ve,ye]=j.useState(!1),[Te,_e]=j.useState(!1),[xe,De]=j.useState(!1),[at,tt]=j.useState(!1),[Ce,ze]=j.useState(!1),[Ve,ne]=j.useState(null),[X,G]=j.useState(!1),[se,le]=j.useState(t.lightboxWidth?t.lightboxWidth:"100vw"),[ue,Ne]=j.useState(t.lightboxHeight?t.lightboxHeight:"100vh"),[Ye,nt]=j.useState(t.magnifyingGlass?t.magnifyingGlass:!1),[rt,ct]=j.useState(t.disableImageZoom?t.disableImageZoom:!1),[At,Gr]=j.useState(t.slideshowInterval?t.slideshowInterval:1700),[ua,Rt]=j.useState(t.rightArrowStyle?t.rightArrowStyle:{}),[ar,Ys]=j.useState(t.leftArrowStyle?t.leftArrowStyle:{}),[si,rr]=j.useState(t.maxZoomScale?AT(t.maxZoomScale,24):8),[sr,Yn]=j.useState(t.roundedImages?t.roundedImages:!1),[or,lr]=j.useState(t.showControls?t.showControls:!0),[En,Lt]=j.useState(t.showFullScreenIcon?t.showFullScreenIcon:!0),[On,Vt]=j.useState(t.showThumbnailIcon?t.showThumbnailIcon:!0),[Pl,Xs]=j.useState(t.showSlideshowIcon?t.showSlideshowIcon:!0),[oi,ur]=j.useState(t.rotateIcon?t.rotateIcon:!1),[li,ui]=j.useState(t.showMagnificationIcons?t.showMagnificationIcons:!0),[yn,cr]=j.useState(t.nextArrow?t.nextArrow:null),[ci,qs]=j.useState(t.imageComponent?t.imageComponent:null),[fr,Rl]=j.useState(t.prevArrow?t.prevArrow:null),[ca,Xg]=j.useState(t.modalClose?t.modalClose:"default"),[Ll,Cf]=j.useState(t.downloadImages?t.downloadImages:!1),[Ks,Vl]=j.useState(t.showNavigationDots?t.showNavigationDots:!1),[Bl,jf]=j.useState(t.metadataTimeLocale?t.metadataTimeLocale:"en-US"),[Mn,Mi]=j.useState(t.rtl?t.rtl:!1),[gt,$t]=j.useState(t.framework?t.framework:""),[Gt,Ul]=j.useState(t.lightboxIdentifier?t.lightboxIdentifier:!1),[Zs,qg]=j.useState(t.fullScreen?t.fullScreen:!1),[Tf,Yr]=j.useState(t.licenseKey?t.licenseKey:""),[Il,Dn]=j.useState(t.showLoader?t.showLoader:!1),[Di,fa]=j.useState(!1),[zn,_t]=j.useState(1),[Af,Hl]=j.useState(t.startingSlideIndex?t.startingSlideIndex:0),[fi,dr]=j.useState(t.zoomCursor?t.zoomCursor:!1),[Fl,Ws]=j.useState("zoom-in"),[Qs,Kg]=j.useState(t.singleClickZoom?t.singleClickZoom:!1),[hr,mr]=j.useState(t.backgroundColor?t.backgroundColor:ia[Pc].background),[ge,sn]=j.useState(t.iconColor?t.iconColor:null),[$s,Ef]=j.useState(t.textColor?t.textColor:ia[Pc].textColor),[Js,Of]=j.useState(t.showControlsBar?t.showControlsBar:!0),[di,Zg]=j.useState(t.captionPlacement?t.captionPlacement:"below"),[St,Gl]=j.useState(t.useCoverMode?t.useCoverMode:!1),[Dt,Yl]=j.useState(t.displayMetadata?t.displayMetadata:!1),[Nn,da]=j.useState(!1),[eo,hi]=j.useState({}),[Jt,Xr]=j.useState(t.showThumbnails?t.showThumbnails:!1),[Xl,ql]=j.useState(t.animateThumbnails?t.animateThumbnails:!0),[Pn,gr]=j.useState(t.imgAnimation?t.imgAnimation:"imgDrag"),[zi,mi]=j.useState(t.arrowStyle?t.arrowStyle:"dark"),to=G_(),Xn=ue=="100vh"?to:ue,[pr,gi]=j.useState(!1),[qr,Kr]=j.useState(!1),[en,ha]=j.useState(!1),[Et,Zr]=j.useState(!1),[ma,pi]=j.useState(!1),no=j.useRef(null),[zt,vi]=j.useState(0),[io,Wr]=j.useState(500),[Mf,Yt]=j.useState(426),[yi,Qr]=j.useState(!1),[$r,Kl]=j.useState(0),{open:Jr}=t;um({open:Jr});const bn=j.useRef([]),Ni=j.useRef({}),qn=j.useRef([]);j.useRef(null);const[es,Df]=j.useState({}),[zf,Nf]=j.useState(!0),[Kn,Wg]=j.useState(t.noWindow?t.noWindow:!1),[ao,Zl]=j.useState(0),[ro,Wl]=j.useState(0),[Pi,Pf]=j.useState(0),[Qg,Rf]=j.useState(0),Ql=50,so=()=>{Pn=="fade"?zn<=1&&!qr?oo():$l():zn>=1&&zn<si&&!qr?oo():$l(),zn==si?Kr(!0):zn==1.08&&qr&&Kr(!1)},$l=()=>{bn.current[zt]!=null&&bn.current[zt].zoomOut(),_e(!1)},oo=()=>{bn.current[zt]!=null&&bn.current[zt].zoomIn(),_e(!0)},Lf=S=>{S.targetTouches&&S.targetTouches.length==1&&(Wl(null),Zl(S.targetTouches[0].clientX)),S.targetTouches&&S.targetTouches.length==2&&fa(!0)},Jl=S=>Wl(S.targetTouches[0].clientX),Vf=S=>{if(ao!=null&&ro!=null&&Pn=="fade"&&Te==!1&&Di==!1){const R=ao-ro;if(R!=null){const K=R>Ql,ee=R<-Ql;K?Bi():ee&&ba()}}else ao!=null&&ro!=null&&Te==!1&&Di==!1&&g&&Xr(!Jt);fa(!1),Zl(null)},ga=6,eu=S=>{Pf(S.pageX),Rf(S.pageY)},Bf=S=>{const R=Math.abs(S.pageX-Pi),K=Pi-S.pageX>ga,ee=Pi-S.pageX<-ga;R>ga?K&&Pn=="fade"&&Te==!1?Bi():ee&&Pn=="fade"&&Te==!1&&ba():g&&Xr(!Jt)},[Uf,$g]=j.useState(t.thumbnailBorder?ET(t.thumbnailBorder):ia[Pc].thumbnailBorder),[If,we]=af(F),[tu,Zn]=af(Oe),pa=j.useCallback(()=>{we&&we.scrollPrev()},[we]),nu=j.useCallback(()=>{we&&we.scrollNext()},[we]),iu={active:{opacity:1},inactive:{opacity:0}},Xt=S=>{var R;return S!=di?!1:!!(t.images&&t.images.length>0&&(R=t.images[U])!=null&&R.caption)},au=()=>{if(t.showControlsBar==!1||t.fullScreen)return{height:Xn};if(!en)return{}},ru=()=>Xt("above")?te.innerContainerWithTopCaption:oi?te.rotateImgInnerContainer:te.slideshowInnerContainerThumbnails,su=()=>Fi(U)?!1:Ll;function Ri(){Kn||oe(window.innerWidth)}const Hf=()=>Fi(U)||ce==!0||Zs==!0?!1:Ye==!0,lo=()=>{let S={};return S.objectFit="contain",Zs&&(t.fullScreenFillMode?(S.objectFit=t.fullScreenFillMode,t.fullScreenFillMode=="cover"&&(S.maxHeight="94vh",S.maxWidth="70vw",S.marginTop="auto",S.marginBottom="auto")):(S.objectFit="contain",S.height=Xn,S.maxHeight=Xn)),!Zs&&!oi&&(Xt(di)&&Jt==!1,Xt(di),t.thumbnailImgAnim&&Jt==!1?S.height="87vh":Xt(di)!=!0,t.thumbnailImgAnim&&Jt&&(S.height="67vh")),oi&&Jt?(S.width="57vw",S.marginTop="10vh"):oi&&Jt==!1&&(S.width="57vw",S.marginTop="15vh"),sr&&(S.borderRadius="20px"),ca=="clickOutside"&&(S.pointerEvents="auto"),ci&&Jt==!1&&!ce&&(S.height="85vh"),S},Ff=()=>{if(t.showSlideshowIcon!=null)return t.showSlideshowIcon;if(w){if(w.length==1)return!1}else if(t.images&&t.images.length==1)return!1;return!0},uo=S=>{ho(S),Gf(S)},ou=S=>{const R=document.getElementsByClassName("imageModal");let K=Array.from(R);for(let ee=0;ee<K.length;ee++)if(K[ee].contains(S.target))return;Rn()},Li=(S,R)=>{let K;return R==0?K=S-1:R==S-1?K=0:K=S-R-1,K},vr=()=>{if(t.theme){if(ia[t.theme])return ia[t.theme].metadataTextColor}else return ia[Pc].metadataTextColor},lu=()=>{let S=document.getElementById("slideshowAnim");Ln(S),ln()},_n=()=>{document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement?(ha(!0),Ne("100vh")):(en&&b2(document),Gi(),ha(!1),Ne(t.lightboxHeight?t.lightboxHeight:"100vh"))},ts=()=>{b2(document),Gi()},co=j.useCallback(S=>{},[]);j.useEffect(()=>{we&&we.on("slidesInView",co)},[we,co]);const va=S=>{Mn?pa():nu(),l([a+S,S]),vi(Mn?zt-1<0?w.length-1:zt-1:zt+1>=w.length?0:zt+1)},fo=()=>{if(t.showArrows==!1)return!1;if(t.images){if(t.images.length==1)return!1}else if(w.length==1)return!1;return!0},ho=S=>{t.showLoader&&t.images&&(!Fi(S)&&bi&&bi[S].loaded!=!0?Dn(!0):t.showLoader&&t.images&&bi&&bi[S].loaded&&Dn(!1))},mo=()=>t.images&&t.images.length>0?t.images[U].caption:"",go=()=>{if(zi=="dark")return te.darkIcon;if(zi=="light")return te.lightIcon},qt=()=>{if(zi=="dark")return te.darkHeaderIcon;if(zi=="light")return te.lightHeaderIcon},Gf=S=>{let R;S>a?R=1:R=-1,vi(S),l([S,R]),we&&we.scrollTo(S)},Yf=()=>{t.onOpen&&t.onOpen(U,w[U]),t.onSelect&&t.onSelect(U,w[U])},Xf=()=>{t.onClose&&t.onClose(U)},po=S=>{t.onNext&&t.onNext(S,w[S])},Bt=S=>{t.onPrev&&t.onPrev(S,w[S])},Rn=()=>{vi(0),en&&ts(),C&&x(!1),f(!1),ze(!1),re(!1),M(!1),Kl(0),Ve&&(Ve==null||Ve.focus())},uu=()=>{if(fi){if(Fl=="zoom-in")return te.zoomInCursor;if(Fl=="zoom-out")return te.zoomOutCursor}return""},vo=S=>{we&&(we.reInit(),Zn&&(Zn==null||Zn.scrollTo(we.selectedScrollSnap()))),l([S,1]),f(!0),ze(!0)};var bi;const yo=S=>{if(Dn(!1),t.images){let R;bi?R=bi:R=w;let K=R.map((ee,de)=>S===de?{...ee,loaded:!0}:ee);O(ee=>K),bi=K}},bo=()=>t.lightboxHeight&&en?"100vh":t.lightboxHeight&&!en?t.lightboxHeight:"",qf=()=>t.lightboxWidth&&!en?t.lightboxWidth:(t.lightboxWidth&&en,""),ya=S=>{du(S),ko()},_o=()=>{ce&&Nn&&da(!1)},Vi=S=>{l([S,1]);let R=lm(0,w.length,S);vi(R),ho(R),qn.current[R]&&qn.current[R].classList.add(`${te.rotate_img}`),Dt&&(_o(),eo[R]||Nf(!0))},Bi=()=>{nu(),Vi(a+1),Pn=="fade"&&po((a+1)%w.length)},ba=()=>{pa(),Vi(a-1),Pn=="fade"&&Bt((a-1)%w.length)},Ui=S=>{let R=Oe;R.startIndex=S,H(R)},Wn=S=>{let R=F;R.startIndex=S,Z(R),Ui(S),vi(S),vo(S)},So=()=>{let S;t.images.length>0?t.images[U].original?S=t.images[U].original:S=t.images[U].src:w[U].src&&(S=w[U].src),new CT({url:S,filename:"image.jpg"}).then(function(){}).catch(function(R){})},wo=()=>{Zr(!1),va(Mn?-1:1),x(!0)},_i=()=>{x(!1)},cu=(S,R)=>{if(t.images){let K=0;for(let ee=0;ee<t.images.length;ee++){let de=t.images[ee];if(de.type=="customVideoEmbed"||de.type=="yt")if(ee==S){K++;break}else K++}return K-1}},fu=S=>{if(Dt)return te.emblaSlideGrid;if(Pn=="fade"){let R="";return t.fullScreen!=!0&&(R+=`${te.notFullScreen} `),R+=` ${te.imgfade} ${te.emblaSlide} `,U==S&&(R+=`${te.emblaSlideSelected} `),R}else return te.emblaSlide},du=S=>{if(t.images){let R=t.images[S];if(R){if(R.type=="htmlVideo")Ni.current[S].pause();else if(R.type=="yt")es[S]&&es[S].target.pauseVideo();else if(R.type=="customVideoEmbed"){let K=document.getElementById("lightboxContainer"),ee=K==null?void 0:K.querySelectorAll("iframe");if(ee){let de=cu(S);if(de!=null&&de>=0){let je=ee[de],$e=je.src;je.src=$e}}}}}},hu=S=>k.jsx("button",{style:U===S?{backgroundColor:"cornflowerblue"}:{},className:`${te.navigationDot} imageModal`,onClick:()=>{uo(S)}}),Kf=()=>{let S={};return Xt("below")&&(Jt?S.height="21vh":S.height="12vh",S.backgroundColor=hr),S},mu=(S,R,K,ee)=>k.jsx("div",{className:`${te.emblaThumbsSlide}`,children:k.jsx("img",{className:`${te.thumbnail} imageModal ${ee.thumbnailImgClass?ee.thumbnailImgClass:""}  `,src:K==!0?on(S,R):Sn(S,R),alt:S.alt,onLoad:()=>pi(!0),style:U===R?{border:Uf}:{border:OT},onClick:de=>{ee.onThumbnailClick&&ee.onThumbnailClick(R,S),uo(R)}},"thumbnail_"+R)},"thumbnail_slide_"+R),Ii=(S,R)=>{t.onImgError&&t.onImgError(S,w[U],R)},gu=()=>{let S=qn.current[zt],R=S.style.transform,K=0;if(R){var ee=/rotate\(([0-9.]+)deg\)/;K=parseFloat(R.match(ee)[1])}let de=K+90;if(S.style.transform=`rotate(${de}deg)`,Kl(de),t.onRotate){let je=de;de>360&&(je=de%360),t.onRotate(je)}},ko=()=>{Et?ss():bn.current[zt]!=null&&bn.current[zt].resetTransform()},Sn=(S,R)=>t.images&&t.images.length>0&&t.images[R]&&t.images[R].thumbnailSrc?t.images[R].thumbnailSrc:Fi(R)&&S.thumbnail?S.thumbnail:S.src,ns=()=>{if(Pn=="fade")return Xt("above")?` ${te.imgfade} ${te.imgFadeWithTopCaption}`:` ${te.imgfade}`},on=(S,R)=>{if(S.thumbnailSrc)return S.thumbnailSrc;if(Fi(R))return S.thumbnail;{let K=S.src;return typeof K=="object"&&!Array.isArray(K)&&K!==null?K.src:K}},_a=()=>!!(w&&w.length==1),xo=()=>{let S="";return t.className&&(S+=`${t.className} `),_a()&&t.imgWrapperClassName&&(S+=`${t.imgWrapperClassName} `),S+=`${te.lightboxjs}`,S},yr=()=>{t.theme&&ia[t.theme]&&(mr(ia[t.theme].background),Ef(ia[t.theme].textColor)),t.fullScreen&&t.fullScreen==!0&&(gr(t.imgAnimation&&t.imgAnimation=="imgDrag"?t.imgAnimation:"fade"),Yn(!1))},is=()=>{let S=eo[U];if(S)return k.jsxs("div",{className:te.metadataPanel,children:[k.jsx("b",{children:"Filename"}),S.name?k.jsx("p",{children:S.name}):null,S.createDate?k.jsxs("div",{children:[k.jsx("b",{children:"Captured Time"}),k.jsx("p",{children:S.createDate.toString()})]}):null,S.width&&S.height?k.jsxs("div",{children:[k.jsx("b",{children:"Resolution"}),k.jsxs("p",{children:[S.width,"*",S.height]})]}):null,S.isoData||S.fNumber||S.shutterSpeed?k.jsxs("div",{children:[k.jsx("b",{children:"Image Details"}),S.isoData?k.jsxs("span",{children:["ISO ",S.isoData]}):null,S.fNumber?k.jsxs("span",{children:["f",S.fNumber]}):null,S.shutterSpeed?k.jsxs("span",{children:["Shutter speed: ",S.shutterSpeed]}):null]}):null]})},Co=S=>{var K;let R;if(!t.images)R=k.jsx(om,{onImgError:(ee,de)=>Ii(ee,de),props:t,imgStyle:lo(),imgRef:ee=>qn.current[S]=ee,imgSrc:w[S].original?w[S].original:w[S].src,displayImgMetadata:Dt,enableMagnifyingGlass:Et,index:S,onUpdateImgMetadata:ee=>hi(ee)});else if(t.images&&t.render)R=t.render.imgSlide(t.images[S]);else{let ee;t.images&&(typeof w[S].src=="object"&&!Array.isArray(w[S].src)&&w[S].src!==null?ee=(K=w[S].src)==null?void 0:K.src:(t.coverImageInLightbox==!0,ee=w[S].src)),R=k.jsx(om,{onImgError:(de,je)=>Ii(de,je),props:t,imgStyle:lo(),imgRef:de=>qn.current[S]=de,imgSrc:w[S].original?w[S].original:ee,displayImgMetadata:Dt,enableMagnifyingGlass:Et,index:S,onUpdateImgMetadata:de=>hi(de)})}return R},Hi=()=>{let S={};if(ge&&(S={color:ge}),t.closeIconBtnStyle){let R=Object.keys(t.closeIconBtnStyle);for(let K=0;K<R.length;K++){let ee=R[K],de=t.closeIconBtnStyle[ee];S[ee]=de}}return T&&(S=T),S},pu=()=>!!((ce||Ae||ve)&&Te==!1),as=S=>{if(Sa(S))return rs(S);if(Fi(S))return vu(S);if(jo(S)){let R=t.images[S].picture;return k.jsxs("picture",{className:`imageModal 
      ${te.lightboxImg} 
      ${Et?te.maxWidthFull:te.maxWidthWithoutMagnifier} `,children:[Object.keys(R).map(K=>k.jsx("source",{type:K,srcSet:R[K].srcSet},K)),k.jsx("img",{src:R.fallback,onError:K=>{Ii(K,S)}})]})}else return w&&t.render||gt=="next"?Co(S):k.jsx(om,{onImgError:(R,K)=>Ii(R,K),props:t,imgStyle:lo(),imgRef:R=>qn.current[S]=R,imgSrc:w&&w[S].original?w[S].original:w[S].src,displayImgMetadata:Dt,enableMagnifyingGlass:Et,index:S,onUpdateImgMetadata:R=>hi(R)})},Sa=S=>{if(t.images){let R=t.images[S];if(R&&R.type=="customEmbed")return!0}return!1},Fi=S=>{if(t.images){let R=t.images[S];if(R&&(R.type=="yt"||R.type=="htmlVideo"||R.type=="customVideoEmbed"))return!0}return!1},tn=()=>ce?!!Nn:Dt,jo=S=>{if(t.images){let R=t.images[S];if(R&&R.picture)return!0}return!1};j.useEffect(()=>{we&&Pn=="fade"&&we.internalEngine().translate.toggleActive(!1)},[$,we]);const ft=()=>ge?{color:ge}:T||{},vu=S=>{let R=t.images[S],K;return R.type=="yt"?K=k.jsx("div",{className:`${te.videoOuterContainer} imageModal`,children:k.jsx(gT,{videoId:R.videoID,ref:ee=>Ni.current[S]=ee,iframeClassName:`${te.ytVideo}`,title:"YouTube video player",opts:{height:v2(R),width:y2(R),playerVars:{autoplay:p2(R)?1:0}},onReady:ee=>{let de=es;de[S]=ee,Df(de),S==U&&Dn(!1),yo(S)},onPlay:ee=>{gi(!0)},onPause:ee=>{gi(!1)},onEnd:ee=>{gi(!1)},onError:ee=>{Ii(ee,S)},onStateChange:ee=>{},onPlaybackRateChange:ee=>{},onPlaybackQualityChange:ee=>{}})}):R.type=="htmlVideo"?K=k.jsx("div",{className:`${te.htmlVideo} ${te.htmlVideoOuterContainer} imageModal`,children:k.jsx("video",{className:`${te.cursorPointer} ${te.lightboxVideo}`,width:y2(R),ref:ee=>Ni.current[S]=ee,onPlay:()=>{},onError:ee=>{Ii(ee,S)},height:v2(R),autoPlay:S==a?p2(R):!1,controls:!0,children:k.jsx("source",{src:R.videoSrc,type:"video/mp4",onLoad:()=>{yo(S)}})})}):R.type=="customVideoEmbed"&&(K=k.jsx("div",{className:`${te.customVideoContainer} imageModal`,children:R.embed})),K},rs=S=>{let R=t.images[S],K;return R.type=="customEmbed"&&(K=k.jsx("div",{className:`${te.customEmbedContainer} imageModal`,children:R.embed})),K},wn=S=>{Pn=="fade"?S.state.scale<=1?_e(!1):_e(!0):S.state.scale<=1.65?_e(!1):_e(!0),fi==!0&&(S.state.scale>=si?Ws("zoom-out"):S.state.scale<=1&&Ws("zoom-in")),_t(S.state.scale)},To=Array.apply(null,Array(w.length)).map((S,R)=>k.jsx("div",{className:`${t.fullScreen?te.fullScreenContainer:null}`,style:{height:Xn},children:Et==!0?k.jsx("div",{}):k.jsx("div",{className:fu(R),onTouchStart:Lf,onTouchMove:Jl,onTouchEnd:Vf,onMouseDown:eu,onMouseUp:Bf,children:k.jsx(IC,{ref:K=>bn.current[R]=K,onWheel:(K,ee)=>{wn(K)},disabled:rt,panning:{disabled:pu()},doubleClick:{disabled:Qs==!0},onZoom:(K,ee)=>{wn(K)},onZoomStop:(K,ee)=>{wn(K)},onTransformed:(K,ee)=>{wn(K)},onPinchingStop:(K,ee)=>{wn(K)},centerZoomedOut:!0,initialScale:1,maxScale:si,alignmentAnimation:{sizeX:0,sizeY:0},children:k.jsx(GC,{wrapperClass:te.reactTransformWrapper,contentClass:te.reactTransformComponent,wrapperStyle:{maxWidth:"100vw",height:"100vh",margin:"auto"},contentStyle:{maxWidth:"100vw",height:"100vh",margin:"auto",display:"grid"},children:k.jsx("div",{onMouseDown:eu,onClick:K=>{const ee=Math.abs(K.pageX-Pi);Pi-K.pageX>ga,Pi-K.pageX<-ga,ee>ga||(K.stopPropagation(),Qs&&so())},className:`${te.slideshowImg}
                        ${t.fullScreen?te.fullScreenSlideshowImg:""}
                        ${t.lightboxImgClass?t.lightboxImgClass:""}
                      ${Dt?te.slideshowImgMetadata:""} 
                      ${uu()}

                      ${Xt(di)?te.slideshowImgWithCaption:""}
                      `,style:{width:qf(),height:bo()},children:as(R)})},R)},R)})},R)),ss=()=>{Et?gr("imgDrag"):yu(),Zr(!Et)},Ao=()=>{let S={};return ce&&Nn&&(S={height:"100vh"}),S.color=vr(),S},yu=()=>{let S;a==0||a%w.length==0?S=document.getElementById("img"):S=no.current;var R=S.naturalWidth/S.naturalHeight,K=S.height*R,ee=S.height;K>S.width&&(K=S.width,ee=S.width/R),Wr(ee),Yt(K)},ln=()=>{document.addEventListener("fullscreenchange",_n),document.addEventListener("webkitfullscreenchange",_n),document.addEventListener("MSFullscreenChange",_n),document.addEventListener("mozfullscreenchange",_n)},Gi=()=>{document.removeEventListener("fullscreenchange",_n),document.removeEventListener("webkitfullscreenchange",_n),document.removeEventListener("MSFullscreenChange",_n),document.removeEventListener("mozfullscreenchange",_n)},wa=()=>{Kt()&&!Kn&&window.addEventListener("resize",Ri)},os=()=>{Oo(),Kt()&&!Kn&&window.removeEventListener("resize",Ri)},ka=S=>{S.matches&&gr("fade")},un=()=>{let S="";return Kt()&&!Kn&&(S=window.matchMedia("(prefers-reduced-motion: reduce)"),(!S||S.matches)&&gr("fade"),S!=null&&S.addEventListener?S.addEventListener("change",ka(S)):S.addListener(ka(S))),S},cn=()=>{t.showFullScreenIcon!=null&&Lt(t.showFullScreenIcon),t.showThumbnailIcon!=null&&Vt(t.showThumbnailIcon),t.showSlideshowIcon!=null&&Xs(t.showSlideshowIcon),t.showMagnificationIcons!=null&&ui(t.showMagnificationIcons)},Si=()=>{t.showControls!=null&&(lr(t.showControls),t.showControls==!1&&ui(!1)),t.disableAnim==!0&&(eg.skipAnimations=!0),cn(),t.disableImageZoom&&ct(t.disableImageZoom),Kt()&&!Kn&&oe(window.innerWidth)};sj(()=>{va(Mn?-1:1)},C?At:null);const Ln=S=>{S.requestFullscreen?S.requestFullscreen():S.webkitRequestFullscreen?S.webkitRequestFullscreen():S.msRequestFullscreen&&S.msRequestFullscreen()},Kt=()=>Kn?!1:typeof window<"u",Qn=()=>{let S=t.images;if(S.reverse(),O(S),w.length>0){let R=w;R.reverse(),O(R)}},Eo=(S,R,K)=>{let ee;Mn?ee=Li(R.length,S):ee=S;let de=F;de.startIndex=ee,K&&Z(de),vi(ee),vo(ee)},br=(S,R)=>{if(St&&t.images)if(t.coverImageInLightbox==!1){let K=t.images.filter(ee=>ee.cover!=!0);O(K)}else O(t.images);if(R||!yi){if(Gt&&t.children)if(t.queryElems){let K=[];for(let de=0;de<t.queryElems.length;de++){let je=t.queryElems[de];document.querySelectorAll(`${je}`).forEach(Vn=>{K.push(Vn)})}let ee=[];if(K.length>0){for(let de=0;de<=K.length-1;de++){let je=K[de];je.addEventListener("click",()=>{Eo(de,K,S)},!1),je.classList.add("cursor-pointer"),je.src?ee.push({src:je.src,alt:je.alt,loaded:!1}):je.href&&ee.push({src:je.href,alt:je.alt,loaded:!1})}S&&!St&&(t.framework!="next"?O(ee):t.framework=="next"&&O(t.images))}}else{let K=document.querySelectorAll(`[data-lightboxjs=${Gt}]`),ee=!1,de=[];if(K.length>0){for(let je=0;je<=K.length-1;je++){let $e=K[je];if($e.getAttribute("data-lightboxjs")==Gt){$e.addEventListener("click",()=>{Eo(je,K,S)},!1),$e.classList.add("cursor-pointer");let ls=$e.getAttribute("data-lightboxjs-original");if(ls)de.push({src:ls,alt:$e.alt,loaded:!1}),ee=!0;else if(t.images&&t.images[je]&&t.images[je].original)de.push({src:t.images[je].original,alt:t.images[je].alt,loaded:!1});else if($e.src)de.push({src:$e.src,alt:$e.alt,loaded:!1});else if($e.tagName=="DIV"){let us=t.images[je],Ca=us.src,cs=us.alt;de.push({src:Ca,alt:cs,loaded:!1})}}}S&&!St&&(ee||t.showAllImages!=!0&&t.framework!="next"?O(de):(t.framework=="next",O(t.images)))}else t.images&&O(t.images)}else if(Gt&&t.images&&!t.children)O(t.images);else if(!Gt&&t.images&&!t.children)O(t.images);else if(t.render)S&&O(t.images);else{let K=[];Array.isArray(t.children)?K=t.children:K.push(t.children);let ee=[];for(let de=0;de<K.length;de++){let je=K[de],$e={src:je.props.src,alt:je.props.alt,loaded:!1};ee.push($e)}Mn&&ee.reverse(),S&&O(ee),B(K)}S&&Qr(!0)}},_u=(()=>{let[S,R]=j.useState(!0);return()=>R(!S)})(),Ot=(S,R)=>{t.onSelect&&(t.onSelect(S,w[S]),_u()),S==0&&R==w.length-1?po(S):S==w.length-1&&R==0?Bt(S):S>R?po(S):S<R&&Bt(S)},Ge=j.useCallback(()=>{if(!we)return;let S=we.selectedScrollSnap(),R=we.previousScrollSnap();S!=R&&(Vi(S),ya(R),Ot(S,R)),Zn&&Zn.scrollTo(we.selectedScrollSnap())},[we,Zn]),Pe=j.useCallback(()=>{we&&M(!0)},[we,E]),wi=S=>{we==null||we.reInit()},fn=(we==null?void 0:we.rootNode())||null;Kt()&&!Kn&&bT(fn,wi);const Oo=j.useCallback(()=>{we&&we.off("select",Ge)},[we,Ge]);j.useEffect(()=>{we&&(Te?we.reInit({watchDrag:!1}):we.reInit({watchDrag:!0}))},[Te]),j.useEffect(()=>{Dt&&(ae!=0&&ce?da(!1):da(!0))},[ae]),j.useEffect(()=>{we&&u&&we.reInit()},[u,we]),j.useEffect(()=>{we&&we.on("select",Ge)},[we,Ge]),j.useEffect(()=>{we&&we.on("reInit",Pe)},[we,Pe]),j.useEffect(()=>{yr(),t.iconColor&&sn(t.iconColor),t.backgroundColor&&mr(t.backgroundColor)},[t.theme,t.iconColor,t.backgroundColor]),j.useEffect(()=>{br(!0,!0)},[t.images,t.displayedImages]);const ki=um(Jr),$n=um(w),Su=S=>{if(S&&$n){if((S&&(S==null?void 0:S.length))!=($n&&($n==null?void 0:$n.length)))return!1;let R;S.length>$n?R=S:R=$n;for(let K=0;K<R.length;K++){let ee=S.slice(0),de=$n.slice(0),je=ee[K],$e=de[K];if(je.loaded&&delete je.loaded,$e.loaded&&delete $e.loaded,!Q_(je,$e))return!1}}return!0};j.useEffect(()=>{let S=0;t.startingSlideIndex&&(S=lm(0,w.length,t.startingSlideIndex),Hl(S)),t.open==!0&&Su(w)==!1&&t.startingSlideIndex?(t.images&&O(t.images),Wn(S)):t.open&&ki!=!0?(t.images&&O(t.images),De(!0),Wn(S)):t.open==!1&&(De(!1),Rn())},[t.open,t.startingSlideIndex,w]),j.useEffect(()=>{Ce==!0?Yf():Xf()},[Ce]),j.useEffect(()=>{t.render&&(t.images||console.error("Array of images must be passed to `SlideshowLightbox` (with the `images` prop) if using custom render method. "));let S=!0;if(S&&Si(),window){const K=window.navigator.userAgent.toLowerCase();let ee=/(ipad|iphone|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(K),de=/Macintosh/i.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>1;ye(ee||de)}if(St&&t.images)if(t.coverImageInLightbox==!1){let K=t.images.filter(ee=>ee.cover!=!0);O(K)}else O(t.images);S&&wa();let R=un();return Dt&&gr("fade"),yi||(br(S,!1),t.images&&Mn==!0&&Qn()),S&&yr(),()=>{S=!1,os(),R&&R.removeEventListener("change",R)}},[]);const xa=()=>{let S;return t.images&&t.children&&Gt==!1?S=t.children:t.images&&Gt==!1?S=t.images.map((R,K)=>k.jsx("img",{className:`${t.imgClassName?t.imgClassName:""} ${te.cursorPointer}`,src:Fi(K)?R.thumbnail:R.src,onClick:()=>{let ee;Mn?ee=Li(t.images.length,K):ee=K,Wn(ee)}},K)):Gt!=!1&&t.children&&St==!1?S=t.children:Gt==!1&&t.images||St==!0?St&&(S=t.children):S=D.filter(R=>R.type=="img").map((R,K)=>j.createElement("img",{...R.props,className:`${R.props.className?R.props.className:""} ${te.cursorPointer}`,onClick:()=>{let ee;Mn?ee=Li(D.length,K):ee=K,Wn(ee)},key:K})),S};return k.jsxs("div",{className:`${xo()}`,children:[xa(),k.jsx(Uh,{initial:!1,mode:"wait",children:u!==!1&&k.jsx(Fm,{children:k.jsx(F_,{children:k.jsxs("div",{style:{height:Xn},children:[k.jsxs(an.div,{className:`${te.modalContainer}`,style:{height:Xn},initial:"inactive",variants:iu,animate:u?"active":"inactive",exit:"inactive",transition:{duration:"0.3"},onAnimationComplete:()=>{var R;let S=!X;if(G(S),S==!0){let K=document.activeElement;ne(K),(R=document.getElementById("lightboxContainer"))==null||R.focus()}else Ve==null||Ve.focus();we&&we.reInit()},children:[k.jsx(an.div,{className:`${te.slideshowAnimContainer} `,id:"slideshowAnim",style:{backgroundColor:hr,width:se,height:Xn},children:k.jsxs("div",{className:`${te.lightboxContainer} `,id:"lightboxContainer",tabIndex:-1,role:"dialog",onClick:S=>{ca=="clickOutside"&&ou(S)},children:[k.jsxs("section",{className:` ${te.iconsHeader} 
                      ${y=="default"?te.iconHeaderDefault:te.iconHeaderCenter} 
                      
                      ${ge?"":qt()} imageModal`,style:{color:ge},children:[k.jsx(Ya,{keyValue:"ArrowLeft",code:"37",onKeyHandle:()=>{ba()}}),k.jsx(Ya,{keyValue:"ArrowRight",code:"39",onKeyHandle:()=>{Bi()}}),k.jsx(Ya,{keyValue:"Escape",code:"27",onKeyHandle:S=>{S.preventDefault(),S.stopPropagation(),en||Rn()}}),k.jsx(Ya,{keyValue:"Left",code:"37",onKeyHandle:()=>{ba()}}),k.jsx(Ya,{keyValue:"Right",code:"39",onKeyHandle:()=>{Bi()}}),k.jsx(Ya,{keyValue:"Esc",code:"27",onKeyHandle:S=>{S.preventDefault(),S.stopPropagation(),en||Rn()}}),or==!0&&k.jsxs("div",{className:`${te.controls}`,children:[rt||li==!1?null:k.jsx(an.div,{children:k.jsx("button",{onClick:()=>{Et&&ss(),oo()},children:t.zoomInComponent?t.zoomInComponent:k.jsx(j_,{size:24,color:ge||void 0,className:`${te.lightboxjsIcon} ${ge?"":qt()}`,style:ft()})})}),rt||li==!1?null:k.jsx(an.div,{children:k.jsx("button",{onClick:()=>{bn.current[zt].zoomOut();let S=bn.current[zt].state.scale;(S==1||S==1.65)&&_e(!1)},children:t.zoomOutComponent?t.zoomOutComponent:k.jsx(T_,{size:24,className:`${te.lightboxjsIcon} ${ge?"":qt()}`,style:ft(),color:ge||void 0})})}),su()?k.jsx("button",{onClick:()=>{So()},children:k.jsx(y_,{size:24,className:`${te.lightboxjsIcon} ${ge?"":qt()}`,style:ft(),color:ge||void 0})}):null,En?en?k.jsx(an.div,{children:k.jsx("button",{onClick:()=>{en?ts():lu()},children:k.jsx(b_,{size:24,className:`${te.lightboxjsIcon} ${ge?"":qt()}`,style:ft(),color:ge||void 0})})}):k.jsx(an.div,{children:k.jsx("button",{onClick:()=>{en?ts():lu()},children:k.jsx(__,{size:24,className:`${te.lightboxjsIcon} ${ge?"":qt()}`,style:ft(),color:ge||void 0})})}):null,ce&&Dt?k.jsx(an.div,{children:k.jsx("button",{onClick:()=>{da(!Nn),Dn(!1)},children:k.jsx(w_,{size:24,className:`${te.lightboxjsIcon} ${ge?"":qt()}`,style:ft(),color:ge||void 0})})}):null,oi?k.jsx(an.div,{children:k.jsx("button",{onClick:()=>{gu()},children:k.jsx(v_,{size:24,className:`${te.lightboxjsIcon} ${ge?"":qt()}`,style:ft(),color:ge||void 0})})}):null,On?k.jsx(an.div,{children:k.jsx("button",{onClick:()=>{Xr(!Jt),tt(!at)},children:k.jsx(S_,{size:24,className:`${te.lightboxjsIcon} ${ge?"":qt()}`,style:ft(),color:ge||void 0})})}):null,Hf()?k.jsx(an.div,{children:k.jsx("button",{onClick:()=>ss(),children:k.jsx(C_,{size:24,className:`${te.lightboxjsIcon} ${ge?"":qt()}`,style:ft(),color:ge||void 0})})}):null,Ff()?k.jsx(an.div,{className:te.slideshowPlayBtn,children:C?k.jsx("button",{onClick:()=>{C?_i():wo()},children:k.jsx(k_,{size:24,className:`${te.lightboxjsIcon} ${ge?"":qt()}`,style:ft(),color:ge||void 0})}):k.jsx("button",{onClick:()=>{C?_i():wo()},children:k.jsx(x_,{size:24,className:`${te.lightboxjsIcon} ${ge?"":qt()}`,style:ft(),color:ge||void 0})})}):null,t.controlComponent?k.jsx(an.div,{children:t.controlComponent}):null]}),t.closeComponent?k.jsx("div",{onClick:()=>{Rn()},children:t.closeComponent}):k.jsx(an.div,{className:`${te.closeIcon} ${t.showControls==!1?te.mlAuto:""}`,children:k.jsx("button",{id:"closeBtn",className:`${t.showControlsBar==!1&&t.showControls==!1?te.closeButtonRounded:te.closeButton}`,onClick:()=>{Rn()},children:k.jsx(Um,{id:"closeIcon",size:24,className:`${te.lightboxjsIcon} ${ge?"":qt()}`,color:ge||void 0,style:Hi()})})})]}),fo()?k.jsxs("div",{children:[k.jsx("div",{className:ua?`${te.next1} ${go()} imageModal`:"imageModal",style:ua,onClick:()=>{Bi()},children:yn||k.jsx("span",{className:`${t.rightArrowClassname?t.rightArrowClassname:""}`,children:"❯"})}),k.jsx("div",{className:ar?`${te.prev1} ${go()} imageModal ${Dt?te.prev1Metadata:""}`:"imageModal",style:ar,onClick:()=>{ba()},children:fr||k.jsx("span",{className:`${t.leftArrowClassname?t.leftArrowClassname:""}`,children:"❮"})})]}):null,k.jsx(Uh,{initial:!1,custom:s,children:k.jsxs("div",{className:`${ru()} ${te.embla} 
                        ${Xt("below")&&Js==!0?te.slideImageAndCaption:""} 
                          ${t.fullScreen?"":te.slideshowInnerContainer} 
                          ${t.showControlsBar==!1||t.fullScreen?te.hideControlsBar:""}
                          ${Dt?te.slideshowInnerContainerImgMetadata:""}  `,style:au(),children:[tn()?k.jsx("div",{className:te.metadata,style:Ao(),children:zf?null:k.jsxs("div",{className:te.metadataInnerContainer,children:[is(),ce&&Nn?k.jsx("button",{className:te.imgMetadataCloseBtn,onClick:()=>{da(!1)},children:k.jsx(Um,{size:24,className:`${te.lightboxjsIcon} ${ge?"":qt()}`,color:ge||void 0,style:ft()})}):null]})}):null,Xt("above")?k.jsx("div",{className:`${te.imgTitleContainer} imageModal`,children:k.jsx("p",{className:`${te.imgTitle}`,style:t.captionStyle?t.captionStyle:{color:$s},children:mo()},"imgCaption"+U)}):null,k.jsx("div",{className:`${te.emblaViewport} 
                            ${Dt?te.emblaContainerImgMetadata:""}`,style:t.fullScreen==!0?{height:ue}:{},ref:u?If:null,children:k.jsx("div",{className:`
                          ${ns()}
                          ${te.emblaContainer}
                            ${Dt?te.emblaContainerImgMetadata:""}`,children:To})})]})}),k.jsxs("div",{className:`${te.thumbnailsOuterContainer} ${Xt("below")?te.thumbnailsAndCaption:""}
                      ${Dt?te.thumbnailsOuterContainerMetadata:""} `,style:Kf(),children:[Xt("below")?k.jsx("div",{className:`${te.imgTitleContainer} imageModal`,children:k.jsx("p",{className:`${te.imgTitle}`,style:t.captionStyle?t.captionStyle:{color:$s},children:mo()},"imgCaption"+U)}):null,k.jsxs(Uh,{initial:Xl,children:[Jt!==!1&&Ks!==!0&&k.jsx(an.div,{initial:"hidden",exit:"hidden",animate:"visible",style:ma?{}:{display:"displayHidden"},transition:{type:"spring",duration:.75},variants:_2,className:`${te.thumbnails} ${Xt("below")?te.thumbnailsWithCaption:""}`,children:k.jsx("div",{className:`${te.emblaThumbs} ${te.thumbnails}`,children:k.jsx("div",{className:te.emblaThumbsViewport,ref:tu,children:k.jsx("div",{className:te.emblaThumbsContainer,children:gt=="next"&&t.images?t.images.map((S,R)=>mu(S,R,!0,t)):w.map((S,R)=>mu(S,R,!1,t))})})})}),Jt!==!0&&Ks!==!1&&k.jsx(an.div,{initial:"hidden",exit:"hidden",animate:"visible",style:ma?{}:{display:"displayHidden"},transition:{type:"spring",duration:.75},variants:_2,className:`${te.thumbnails} ${Xt("below")?te.thumbnailsWithCaption:""}`,children:k.jsx("div",{className:`${te.emblathumbs} ${te.thumbnails}`,children:k.jsx("div",{className:te.emblaThumbsViewport,ref:tu,children:k.jsx("div",{className:`${te.navigationDots} ${te.emblaThumbsContainer} imageModal
                                `,children:gt=="next"&&t.images?t.images.map((S,R)=>hu(R)):w.map((S,R)=>hu(R))})})})})]})]})]})},"slideshowAnimContainer"),t.rightSidebarComponent?t.rightSidebarComponent:null]}),t.lightboxFooterComponent?t.lightboxFooterComponent:null]})})})})]})});function zT(){const{id:t}=p3(),[n,a]=j.useState(null),[s,l]=j.useState(!1),u={animation:"typing 4s steps(30, end), blink 0.5s step-end infinite 4s, appear 6s",opacity:"0",overflow:"hidden",whitesSpace:"nowrap",display:"inline-block",borderRight:"3px solid white"},[f,h]=j.useState(!1);return j.useEffect(()=>{const m=I3.find(p=>p.id===t);a(m),h(!0);const g=setTimeout(()=>{l(!0)},6500);return()=>clearTimeout(g)},[t]),n?k.jsx("div",{className:"ProjectComponentSection",children:k.jsxs("div",{className:"ProjectComponentContainer container",children:[k.jsx("div",{className:"d-flex flex-column position-absolute",children:k.jsxs("h1",{className:"ProjectComponentTitle text-center",style:f?u:{},children:[" ",n.title]})}),k.jsxs("div",{className:" flex-row alight-items-center justify-content-center row ContainerDiv",style:{display:s?"flex":"none"},children:[k.jsxs("div",{className:"d-flex flex-column align-items-center justify-content-center col-lg-6 col-12 gap-2",children:[k.jsx(S2,{children:k.jsx("img",{src:n.images[0],alt:"",className:"mainImage",loading:"lazy",decoding:"async"})}),k.jsxs(S2,{className:"d-flex flex-row  smallImagesDiv row  ",children:[k.jsx("img",{src:n.images[1],alt:"",className:"col-4 p-0",loading:"lazy",decoding:"async"}),k.jsx("img",{src:n.images[2],alt:"",className:"col-4 p-0",loading:"lazy",decoding:"async"}),k.jsx("img",{src:n.images[3],alt:"",className:"col-4 p-0",loading:"lazy",decoding:"async"})]})]}),k.jsxs("div",{className:"d-flex  flex-column col-lg-6 col-12 descriptionDiv",children:[k.jsx("h2",{className:"text-start",children:n.title}),k.jsx("p",{children:n.description}),k.jsxs("div",{className:"d-flex flex-row align-items-center gap-2",children:[k.jsx("button",{className:"btn-primary col-6",children:k.jsx(ni,{className:"btn-primary",to:n.link,children:"Check Website"})}),k.jsx("button",{className:"btn-primary col-6",children:k.jsx(ni,{className:"btn-primary ",to:"/projects",children:"Return"})})]})]})]})]})}):k.jsx("div",{children:"Project Not Found"})}const NT=()=>k.jsx("h2",{children:"Page Not Found"});function PT(){return k.jsxs(v3,{children:[" ",k.jsxs(y3,{children:[k.jsx(Ms,{path:"/",element:k.jsx(j3,{})}),k.jsx(Ms,{path:"/tour",element:k.jsx(V3,{})}),k.jsx(Ms,{path:"/projects",element:k.jsx(B3,{})}),k.jsx(Ms,{path:"/projects2",element:k.jsx(U3,{})}),k.jsx(Ms,{path:"/projects/:id",element:k.jsx(zT,{})}),k.jsx(Ms,{path:"*",element:k.jsx(NT,{})})]})]})}C3.createRoot(document.getElementById("root")).render(k.jsx(PT,{}));

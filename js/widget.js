!function(){"use strict";var e,i,t,r,n,o,a,l,s,d,c,p,h={},u=[],m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,g=Array.isArray;function w(e,i){for(var t in i)e[t]=i[t];return e}function v(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function f(i,t,r){var n,o,a,l={};for(a in t)"key"==a?n=t[a]:"ref"==a?o=t[a]:l[a]=t[a];if(arguments.length>2&&(l.children=arguments.length>3?e.call(arguments,2):r),"function"==typeof i&&null!=i.defaultProps)for(a in i.defaultProps)void 0===l[a]&&(l[a]=i.defaultProps[a]);return x(i,l,n,o,null)}function x(e,r,n,o,a){var l={type:e,props:r,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==a?++t:a,__i:-1,__u:0};return null==a&&null!=i.vnode&&i.vnode(l),l}function b(e){return e.children}function y(e,i){this.props=e,this.context=i}function _(e,i){if(null==i)return e.__?_(e.__,e.__i+1):null;for(var t;i<e.__k.length;i++)if(null!=(t=e.__k[i])&&null!=t.__e)return t.__e;return"function"==typeof e.type?_(e):null}function $(e){if(e.__P&&e.__d){var t=e.__v,r=t.__e,n=[],o=[],a=w({},t);a.__v=t.__v+1,i.vnode&&i.vnode(a),M(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[r]:null,n,null==r?_(t):r,!!(32&t.__u),o),a.__v=t.__v,a.__.__k[a.__i]=a,P(n,a,o),t.__e=t.__=null,a.__e!=r&&S(a)}}function S(e){if(null!=(e=e.__)&&null!=e.__c)return e.__e=e.__c.base=null,e.__k.some(function(i){if(null!=i&&null!=i.__e)return e.__e=e.__c.base=i.__e}),S(e)}function k(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!C.__r++||n!=i.debounceRendering)&&((n=i.debounceRendering)||o)(C)}function C(){try{for(var e,i=1;r.length;)r.length>i&&r.sort(a),e=r.shift(),i=r.length,$(e)}finally{r.length=C.__r=0}}function N(e,i,t,r,n,o,a,l,s,d,c){var p,m,w,v,f,y,$,S=r&&r.__k||u,k=i.length;for(s=function(e,i,t,r,n){var o,a,l,s,d,c=t.length,p=c,h=0;for(e.__k=new Array(n),o=0;o<n;o++)null!=(a=i[o])&&"boolean"!=typeof a&&"function"!=typeof a?("string"==typeof a||"number"==typeof a||"bigint"==typeof a||a.constructor==String?a=e.__k[o]=x(null,a,null,null,null):g(a)?a=e.__k[o]=x(b,{children:a},null,null,null):void 0===a.constructor&&a.__b>0?a=e.__k[o]=x(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[o]=a,s=o+h,a.__=e,a.__b=e.__b+1,l=null,-1!=(d=a.__i=I(a,t,s,p))&&(p--,(l=t[d])&&(l.__u|=2)),null==l||null==l.__v?(-1==d&&(n>c?h--:n<c&&h++),"function"!=typeof a.type&&(a.__u|=4)):d!=s&&(d==s-1?h--:d==s+1?h++:(d>s?h--:h++,a.__u|=4))):e.__k[o]=null;if(p)for(o=0;o<c;o++)null!=(l=t[o])&&!(2&l.__u)&&(l.__e==r&&(r=_(l)),B(l,l));return r}(t,i,S,s,k),p=0;p<k;p++)null!=(w=t.__k[p])&&(m=-1!=w.__i&&S[w.__i]||h,w.__i=p,y=M(e,w,m,n,o,a,l,s,d,c),v=w.__e,w.ref&&m.ref!=w.ref&&(m.ref&&O(m.ref,null,w),c.push(w.ref,w.__c||v,w)),null==f&&null!=v&&(f=v),($=!!(4&w.__u))||m.__k===w.__k?s=T(w,s,e,$):"function"==typeof w.type&&void 0!==y?s=y:v&&(s=v.nextSibling),w.__u&=-7);return t.__e=f,s}function T(e,i,t,r){var n,o;if("function"==typeof e.type){for(n=e.__k,o=0;n&&o<n.length;o++)n[o]&&(n[o].__=e,i=T(n[o],i,t,r));return i}e.__e!=i&&(r&&(i&&e.type&&!i.parentNode&&(i=_(e)),t.insertBefore(e.__e,i||null)),i=e.__e);do{i=i&&i.nextSibling}while(null!=i&&8==i.nodeType);return i}function R(e,i){return i=i||[],null==e||"boolean"==typeof e||(g(e)?e.some(function(e){R(e,i)}):i.push(e)),i}function I(e,i,t,r){var n,o,a,l=e.key,s=e.type,d=i[t],c=null!=d&&!(2&d.__u);if(null===d&&null==l||c&&l==d.key&&s==d.type)return t;if(r>(c?1:0))for(n=t-1,o=t+1;n>=0||o<i.length;)if(null!=(d=i[a=n>=0?n--:o++])&&!(2&d.__u)&&l==d.key&&s==d.type)return a;return-1}function A(e,i,t){"-"==i[0]?e.setProperty(i,null==t?"":t):e[i]=null==t?"":"number"!=typeof t||m.test(i)?t:t+"px"}function L(e,i,t,r,n){var o,a;e:if("style"==i)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(i in r)t&&i in t||A(e.style,i,"");if(t)for(i in t)r&&t[i]==r[i]||A(e.style,i,t[i])}else if("o"==i[0]&&"n"==i[1])o=i!=(i=i.replace(l,"$1")),a=i.toLowerCase(),i=a in e||"onFocusOut"==i||"onFocusIn"==i?a.slice(2):i.slice(2),e.l||(e.l={}),e.l[i+o]=t,t?r?t.u=r.u:(t.u=s,e.addEventListener(i,o?c:d,o)):e.removeEventListener(i,o?c:d,o);else{if("http://www.w3.org/2000/svg"==n)i=i.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=i&&"height"!=i&&"href"!=i&&"list"!=i&&"form"!=i&&"tabIndex"!=i&&"download"!=i&&"rowSpan"!=i&&"colSpan"!=i&&"role"!=i&&"popover"!=i&&i in e)try{e[i]=null==t?"":t;break e}catch(p){}"function"==typeof t||(null==t||!1===t&&"-"!=i[4]?e.removeAttribute(i):e.setAttribute(i,"popover"==i&&1==t?"":t))}}function j(e){return function(t){if(this.l){var r=this.l[t.type+e];if(null==t.t)t.t=s++;else if(t.t<r.u)return;return r(i.event?i.event(t):t)}}}function M(t,r,n,o,a,l,s,d,c,p){var m,f,x,$,S,k,C,T,R,I,A,j,M,P,O,B=r.type;if(void 0!==r.constructor)return null;128&n.__u&&(c=!!(32&n.__u),l=[d=r.__e=n.__e]),(m=i.__b)&&m(r);e:if("function"==typeof B)try{if(T=r.props,R=B.prototype&&B.prototype.render,I=(m=B.contextType)&&o[m.__c],A=m?I?I.props.value:m.__:o,n.__c?C=(f=r.__c=n.__c).__=f.__E:(R?r.__c=f=new B(T,A):(r.__c=f=new y(T,A),f.constructor=B,f.render=U),I&&I.sub(f),f.state||(f.state={}),f.__n=o,x=f.__d=!0,f.__h=[],f._sb=[]),R&&null==f.__s&&(f.__s=f.state),R&&null!=B.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=w({},f.__s)),w(f.__s,B.getDerivedStateFromProps(T,f.__s))),$=f.props,S=f.state,f.__v=r,x)R&&null==B.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),R&&null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(R&&null==B.getDerivedStateFromProps&&T!==$&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(T,A),r.__v==n.__v||!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(T,f.__s,A)){r.__v!=n.__v&&(f.props=T,f.state=f.__s,f.__d=!1),r.__e=n.__e,r.__k=n.__k,r.__k.some(function(e){e&&(e.__=r)}),u.push.apply(f.__h,f._sb),f._sb=[],f.__h.length&&s.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(T,f.__s,A),R&&null!=f.componentDidUpdate&&f.__h.push(function(){f.componentDidUpdate($,S,k)})}if(f.context=A,f.props=T,f.__P=t,f.__e=!1,j=i.__r,M=0,R)f.state=f.__s,f.__d=!1,j&&j(r),m=f.render(f.props,f.state,f.context),u.push.apply(f.__h,f._sb),f._sb=[];else do{f.__d=!1,j&&j(r),m=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++M<25);f.state=f.__s,null!=f.getChildContext&&(o=w(w({},o),f.getChildContext())),R&&!x&&null!=f.getSnapshotBeforeUpdate&&(k=f.getSnapshotBeforeUpdate($,S)),P=null!=m&&m.type===b&&null==m.key?E(m.props.children):m,d=N(t,g(P)?P:[P],r,n,o,a,l,s,d,c,p),f.base=r.__e,r.__u&=-161,f.__h.length&&s.push(f),C&&(f.__E=f.__=null)}catch(H){if(r.__v=null,c||null!=l)if(H.then){for(r.__u|=c?160:128;d&&8==d.nodeType&&d.nextSibling;)d=d.nextSibling;l[l.indexOf(d)]=null,r.__e=d}else{for(O=l.length;O--;)v(l[O]);z(r)}else r.__e=n.__e,r.__k=n.__k,H.then||z(r);i.__e(H,r,n)}else null==l&&r.__v==n.__v?(r.__k=n.__k,r.__e=n.__e):d=r.__e=function(t,r,n,o,a,l,s,d,c){var p,u,m,w,f,x,b,y=n.props||h,$=r.props,S=r.type;if("svg"==S?a="http://www.w3.org/2000/svg":"math"==S?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),null!=l)for(p=0;p<l.length;p++)if((f=l[p])&&"setAttribute"in f==!!S&&(S?f.localName==S:3==f.nodeType)){t=f,l[p]=null;break}if(null==t){if(null==S)return document.createTextNode($);t=document.createElementNS(a,S,$.is&&$),d&&(i.__m&&i.__m(r,l),d=!1),l=null}if(null==S)y===$||d&&t.data==$||(t.data=$);else{if(l=l&&e.call(t.childNodes),!d&&null!=l)for(y={},p=0;p<t.attributes.length;p++)y[(f=t.attributes[p]).name]=f.value;for(p in y)f=y[p],"dangerouslySetInnerHTML"==p?m=f:"children"==p||p in $||"value"==p&&"defaultValue"in $||"checked"==p&&"defaultChecked"in $||L(t,p,null,f,a);for(p in $)f=$[p],"children"==p?w=f:"dangerouslySetInnerHTML"==p?u=f:"value"==p?x=f:"checked"==p?b=f:d&&"function"!=typeof f||y[p]===f||L(t,p,f,y[p],a);if(u)d||m&&(u.__html==m.__html||u.__html==t.innerHTML)||(t.innerHTML=u.__html),r.__k=[];else if(m&&(t.innerHTML=""),N("template"==r.type?t.content:t,g(w)?w:[w],r,n,o,"foreignObject"==S?"http://www.w3.org/1999/xhtml":a,l,s,l?l[0]:n.__k&&_(n,0),d,c),null!=l)for(p=l.length;p--;)v(l[p]);d||(p="value","progress"==S&&null==x?t.removeAttribute("value"):null!=x&&(x!==t[p]||"progress"==S&&!x||"option"==S&&x!=y[p])&&L(t,p,x,y[p],a),p="checked",null!=b&&b!=t[p]&&L(t,p,b,y[p],a))}return t}(n.__e,r,n,o,a,l,s,c,p);return(m=i.diffed)&&m(r),128&r.__u?void 0:d}function z(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(z))}function P(e,t,r){for(var n=0;n<r.length;n++)O(r[n],r[++n],r[++n]);i.__c&&i.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(r){i.__e(r,t.__v)}})}function E(e){return"object"!=typeof e||null==e||e.__b>0?e:g(e)?e.map(E):w({},e)}function O(e,t,r){try{if("function"==typeof e){var n="function"==typeof e.__u;n&&e.__u(),n&&null==t||(e.__u=e(t))}else e.current=t}catch(o){i.__e(o,r)}}function B(e,t,r){var n,o;if(i.unmount&&i.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||O(n,null,t)),null!=(n=e.__c)){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(a){i.__e(a,t)}n.base=n.__P=null}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&B(n[o],t,r||"function"!=typeof e.type);r||v(e.__e),e.__c=e.__=e.__e=void 0}function U(e,i,t){return this.constructor(e,t)}function H(t,r,n){var o,a,l;r==document&&(r=document.documentElement),i.__&&i.__(t,r),o=r.__k,a=[],l=[],M(r,t=r.__k=f(b,null,[t]),o||h,h,r.namespaceURI,o?null:r.firstChild?e.call(r.childNodes):null,a,o?o.__e:r.firstChild,!1,l),P(a,t,l)}function D(e){function i(e){var t,r;return this.getChildContext||(t=new Set,(r={})[i.__c]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){t=null},this.shouldComponentUpdate=function(e){this.props.value!=e.value&&t.forEach(function(e){e.__e=!0,k(e)})},this.sub=function(e){t.add(e);var i=e.componentWillUnmount;e.componentWillUnmount=function(){t&&t.delete(e),i&&i.call(e)}}),e.children}return i.__c="__cC"+p++,i.__=e,i.Provider=i.__l=(i.Consumer=function(e,i){return e.children(i)}).contextType=i,i}e=u.slice,i={__e:function(e,i,t,r){for(var n,o,a;i=i.__;)if((n=i.__c)&&!n.__)try{if((o=n.constructor)&&null!=o.getDerivedStateFromError&&(n.setState(o.getDerivedStateFromError(e)),a=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e,r||{}),a=n.__d),a)return n.__E=n}catch(l){e=l}throw e}},t=0,y.prototype.setState=function(e,i){var t;t=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=w({},this.state),"function"==typeof e&&(e=e(w({},t),this.props)),e&&w(t,e),null!=e&&this.__v&&(i&&this._sb.push(i),k(this))},y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),k(this))},y.prototype.render=b,r=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,a=function(e,i){return e.__v.__b-i.__v.__b},C.__r=0,l=/(PointerCapture)$|Capture$/i,s=0,d=j(!1),c=j(!0),p=0;var F=0;function V(e,t,r,n,o,a){t||(t={});var l,s,d=t;if("ref"in d)for(s in d={},t)"ref"==s?l=t[s]:d[s]=t[s];var c={type:e,props:d,key:r,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--F,__i:-1,__u:0,__source:o,__self:a};if("function"==typeof e&&(l=e.defaultProps))for(s in l)void 0===d[s]&&(d[s]=l[s]);return i.vnode&&i.vnode(c),c}var W,G,Z,q,K=0,X=[],Y=i,J=Y.__b,Q=Y.__r,ee=Y.diffed,ie=Y.__c,te=Y.unmount,re=Y.__;function ne(e,i){Y.__h&&Y.__h(G,e,K||i),K=0;var t=G.__H||(G.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function oe(e){return K=1,function(e,i){var t=ne(W++,2);if(t.t=e,!t.__c&&(t.__=[fe(void 0,i),function(e){var i=t.__N?t.__N[0]:t.__[0],r=t.t(i,e);i!==r&&(t.__N=[r,t.__[1]],t.__c.setState({}))}],t.__c=G,!G.__f)){var r=function(e,i,r){if(!t.__c.__H)return!0;var o=t.__c.__H.__.filter(function(e){return e.__c});if(o.every(function(e){return!e.__N}))return!n||n.call(this,e,i,r);var a=t.__c.props!==e;return o.some(function(e){if(e.__N){var i=e.__[0];e.__=e.__N,e.__N=void 0,i!==e.__[0]&&(a=!0)}}),n&&n.call(this,e,i,r)||a};G.__f=!0;var n=G.shouldComponentUpdate,o=G.componentWillUpdate;G.componentWillUpdate=function(e,i,t){if(this.__e){var a=n;n=void 0,r(e,i,t),n=a}o&&o.call(this,e,i,t)},G.shouldComponentUpdate=r}return t.__N||t.__}(fe,e)}function ae(e,i){var t=ne(W++,3);!Y.__s&&ve(t.__H,i)&&(t.__=e,t.u=i,G.__H.__h.push(t))}function le(e,i){var t=ne(W++,4);!Y.__s&&ve(t.__H,i)&&(t.__=e,t.u=i,G.__h.push(t))}function se(e){return K=5,de(function(){return{current:e}},[])}function de(e,i){var t=ne(W++,7);return ve(t.__H,i)&&(t.__=e(),t.__H=i,t.__h=e),t.__}function ce(e,i){return K=8,de(function(){return e},i)}function pe(e){var i=G.context[e.__c],t=ne(W++,9);return t.c=e,i?(null==t.__&&(t.__=!0,i.sub(G)),i.props.value):e.__}function he(){for(var e;e=X.shift();){var i=e.__H;if(e.__P&&i)try{i.__h.some(ge),i.__h.some(we),i.__h=[]}catch(t){i.__h=[],Y.__e(t,e.__v)}}}Y.__b=function(e){G=null,J&&J(e)},Y.__=function(e,i){e&&i.__k&&i.__k.__m&&(e.__m=i.__k.__m),re&&re(e,i)},Y.__r=function(e){Q&&Q(e),W=0;var i=(G=e.__c).__H;i&&(Z===G?(i.__h=[],G.__h=[],i.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(i.__h.some(ge),i.__h.some(we),i.__h=[],W=0)),Z=G},Y.diffed=function(e){ee&&ee(e);var i=e.__c;i&&i.__H&&(i.__H.__h.length&&(1!==X.push(i)&&q===Y.requestAnimationFrame||((q=Y.requestAnimationFrame)||me)(he)),i.__H.__.some(function(e){e.u&&(e.__H=e.u),e.u=void 0})),Z=G=null},Y.__c=function(e,i){i.some(function(e){try{e.__h.some(ge),e.__h=e.__h.filter(function(e){return!e.__||we(e)})}catch(t){i.some(function(e){e.__h&&(e.__h=[])}),i=[],Y.__e(t,e.__v)}}),ie&&ie(e,i)},Y.unmount=function(e){te&&te(e);var i,t=e.__c;t&&t.__H&&(t.__H.__.some(function(e){try{ge(e)}catch(t){i=t}}),t.__H=void 0,i&&Y.__e(i,t.__v))};var ue="function"==typeof requestAnimationFrame;function me(e){var i,t=function(){clearTimeout(r),ue&&cancelAnimationFrame(i),setTimeout(e)},r=setTimeout(t,35);ue&&(i=requestAnimationFrame(t))}function ge(e){var i=G,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),G=i}function we(e){var i=G;e.__c=e.__(),G=i}function ve(e,i){return!e||e.length!==i.length||i.some(function(i,t){return i!==e[t]})}function fe(e,i){return"function"==typeof i?i(e):i}function xe({timestamp:e,locale:i="en",localeFromBackend:t}){if(!e)return"";const r=1e3*e-Date.now(),n=Math.round(r/1e3),o=new Intl.RelativeTimeFormat([i,t,"en"],{numeric:"auto"}),a=[["year",31536e3],["month",2592e3],["day",86400],["hour",3600],["minute",60],["second",1]];for(const[l,s]of a){const e=Math.round(n/s);if(Math.abs(e)>=1)return o.format(e,l)}return"just now"}function be({data:e,locale:i="en",localeFromBackend:t}){return{...e,business:e.business.map(e=>({...e,reviews:e.reviews.map(e=>({...e,relativeTimeDescription:xe({timestamp:e.time,locale:i,localeFromBackend:t})}))}))}}let ye="https://grw.reputon.com";function _e(e,i=5){if(!e&&0==e)return[];const t=[];let r=e;for(let n=0;n<i;n++)n<Math.floor(Math.abs(e))||r>=.75?t.push("full"):r>=.25&&r<.75?t.push("half"):t.push("none"),r--;return t}const $e=e=>{const i=document.createElement("style");i.setAttribute("reputon-custom-css",""),i.append(e),document.querySelector("head").append(i)},Se=e=>e?.toFixed(1);function ke(e){return e.split("-")[0].toLowerCase()}const Ce=()=>{if(!Shopify?.shop)return Promise.resolve(void 0);const e=window.reputon_preview_token||"";return e.length>0?(e=>{const i=window.reputon_preview_params||"",t=i.length>0?`?${i}`:"";return fetch(`${ye}/app/api/widget/preview${t}`,{headers:{Authorization:`Bearer ${e}`,"X-Myshopify-Domain":Shopify.shop}}).then(e=>e.ok?e.json():void 0)})(e):(()=>{const e=Shopify?.locale?ke(Shopify?.locale):"",i=window.reputon_widget_google_content_response,t=e||"__default__";if(i&&t in i)return i[t];const r=Shopify.designMode?"&nocache=1":"",n=e?`&lang=${encodeURIComponent(e)}`:"",o=fetch(`${ye}/app/storefront/widget?shop=${Shopify.shop}${n}${r}`).then(e=>e.ok?e.json():void 0);return window.reputon_widget_google_content_response||(window.reputon_widget_google_content_response={}),window.reputon_widget_google_content_response[t]=o,o})()};let Ne=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Te=/\/\*[^]*?\*\/|  +/g,Re=/\n+/g,Ie=(e,i)=>{let t="",r="",n="";for(let o in e){let a=e[o];"@"==o[0]?"i"==o[1]?t=o+" "+a+";":"f"==o[1]?r+=Ie(a,o):r+=o+"{"+Ie(a,"k"==o[1]?"":i)+"}":"object"==typeof a?r+=Ie(a,i?i.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,i=>/&/.test(i)?i.replace(/&/g,e):e?e+" "+i:i)):o):null!=a&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=Ie.p?Ie.p(o,a):o+":"+a+";")}return t+(i&&n?i+"{"+n+"}":n)+r},Ae="_goober-reputon",Le={data:""},je={},Me=e=>{if("object"==typeof e){let i="";for(let t in e)i+=t+Me(e[t]);return i}return e};function ze(e){let i=this||{},t=e.call?e(i.p):e;return((e,i,t,r,n)=>{let o=Me(e),a=je[o]||(je[o]=(e=>{let i=0,t=11;for(;i<e.length;)t=101*t+e.charCodeAt(i++)>>>0;return"go"+t})(o));if(!je[a]){let i=o!==e?e:(e=>{let i,t,r=[{}];for(;i=Ne.exec(e.replace(Te,""));)i[4]?r.shift():i[3]?(t=i[3].replace(Re," ").trim(),r.unshift(r[0][t]=r[0][t]||{})):r[0][i[1]]=i[2].replace(Re," ").trim();return r[0]})(e),r=t?"":`.${a}`,l=Ie.s&&r?`div${Ie.s} ${r}`:r;je[a]=Ie(n?{[`@keyframes ${a}`]:i}:i,l)}let l=t&&je.g?je.g:null;return t&&(je.g=je[a]),((e,i,t,r)=>{r?i.data=i.data.replace(r,e):-1===i.data.indexOf(e)&&(i.data=t?e+i.data:i.data+e)})(je[a],i,r,l),a})(t.unshift?t.raw?(r=t,n=[].slice.call(arguments,1),o=i.p,r.reduce((e,i,t)=>{let r=n[t];if(r&&r.call){let e=r(o),i=(e=>{if(!e||"string"!=typeof e)return;let i=e.match(/(?:^|\s)(go\d+)(?=\s|$)/);return i&&i[1]})(e&&e.props&&e.props.className)||/^go\d+$/.test(e)&&e;r=i?`.${i}`:e&&"object"==typeof e?e.props?"":Ie(e,""):!1===e?"":e}return e+i+(null==r?"":r)},"")):t.reduce((e,t)=>Object.assign(e,t&&t.call?t(i.p):t),{}):t,(e=>{if("object"==typeof window){let i=(e?e.querySelector(`#${Ae}`):window[Ae])||Object.assign(document.createElement("style"),{innerHTML:" ",id:Ae});return i.nonce=window.__nonce__,i.parentNode||(e||document.head).appendChild(i),i.firstChild}return e||Le})(i.target),i.g,i.o,i.k);var r,n,o}let Pe,Ee,Oe,Be=ze.bind({g:1}),Ue=ze.bind({k:1});function He(e,i){let t=this||{};return function(){let r=arguments;function n(o,a){let l=Object.assign({},o),s=l.className||n.className;t.p=Object.assign({theme:Ee&&Ee()},l),t.o=/ *go\d+/.test(s),l.className=ze.apply(t,r)+(s?` ${s}`:""),i&&(l.ref=a);let d=e;return e[0]&&(d=l.as||e,delete l.as),Oe&&d[0]&&Oe(l),Pe(d,l)}return i?i(n):n}}const De=e=>{if(!e)return e;const i=e.replace("#",""),t=3===i.length?i.split("").map(e=>e+e).join(""):i;return`${parseInt(t.substring(0,2),16)}, ${parseInt(t.substring(2,4),16)}, ${parseInt(t.substring(4,6),16)}`};function Fe(e,i=10){if(!e)return e;const t=e.match(/\d+/g)?.map(Number);if(!t||t.length<3)return e;const[r,n,o]=t;let[a,l,s]=function(e,i,t){e/=255,i/=255,t/=255;const r=Math.max(e,i,t),n=Math.min(e,i,t);let o=0,a=0,l=(r+n)/2;if(r===n)o=a=0;else{const s=r-n;switch(a=l>.5?s/(2-r-n):s/(r+n),r){case e:o=(i-t)/s+(i<t?6:0);break;case i:o=(t-e)/s+2;break;case t:o=(e-i)/s+4}o/=6}return[o,a,l]}(r,n,o);s=Math.min(Math.max(s+i/100,0),1);const[d,c,p]=function(e,i,t){let r,n,o;if(0===i)r=n=o=t;else{const a=(e,i,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(i-e)*t:t<.5?i:t<2/3?e+(i-e)*(2/3-t)*6:e),l=t<.5?t*(1+i):t+i-t*i,s=2*t-l;r=a(s,l,e+1/3),n=a(s,l,e),o=a(s,l,e-1/3)}return[Math.round(255*r),Math.round(255*n),Math.round(255*o)]}(a,l,s);return function(e,i,t){const r=(e<<16|i<<8|t).toString(16);return`#${"0".repeat(6-r.length)}${r}`}(d,c,p)}const Ve=(e,i)=>{if(!i)return e;const t=e,r={cardColor:De(i.cardColor),starsColor:De(i.starsColor),textColor:De(i.textColor)};i.lighterCardColor=Fe(r.cardColor),i.lighterTextColor=Fe(r.textColor,-20),i.darkerCardColor=Fe(r.cardColor,-10);for(const n in e){const r=e[n];if("object"==typeof r)t[n]=Ve(r,i);else switch(n){case"background":case"backgroundHover":case"backgroundArrow":case"scrollTrack":t[n]=i.cardColor?i.cardColor:e[n];break;case"colorReviewStars":case"colorSellerStars":case"colorLine":case"heartsColor":t[n]=i.starsColor?i.starsColor:e[n];break;case"colorDescription":case"colorName":case"colorSellerName":case"colorArrow":case"colorLeaveReview":case"colorLoadMore":case"colorReviewsCount":case"oneLineColor":case"colorIcons":case"colorSubText":case"colorGoogleBadge":t[n]=i.textColor?i.textColor:e[n];break;case"backgroundLeaveReview":case"backgroundLoadMore":case"backgroundBody":case"backgroundModal":t[n]=i.lighterCardColor?i.lighterCardColor:e[n];break;case"colorTime":case"colorShowMore":case"colorReviewsButton":case"colorRatingText":t[n]=i.lighterTextColor?i.lighterTextColor:e[n];break;case"colorBadge":case"scrollThumb":case"dividerColor":case"solidShadow":t[n]=i.darkerCardColor?i.darkerCardColor:e[n];break;default:t[n]=r}}return t},We=(e,i)=>e.includes("rgba")?Ge(e):`rgba(${parseInt(e.slice(1,3),16)},${parseInt(e.slice(3,5),16)},${parseInt(e.slice(5,7),16)},${i})`,Ge=e=>{const[i,t,r]=e.match(/\d+/g)?.map(Number)??[];return function(e,i,t){const r=(e<<16|i<<8|t).toString(16);return`#${new Array(Math.abs(r.length-6)).join("0")}${r}`}(i,t,r)},Ze=(e,i)=>{const t=e;for(const r in e){const n=e[r];if("object"==typeof n)t[r]=Ze(n,i);else if("string"==typeof n)switch(r){case"background":case"backgroundHover":case"backgroundArrow":case"backgroundBody":case"backgroundModal":case"solidShadow":t[r]=We(n,i);break;default:t[r]=n}}return t},qe="reputon-google-reviews-widget",Ke="visibility-reputon-sticky",Xe=900,Ye=740,Je=550,Qe="grid",ei="basic",ii="basic_slide",ti="carousel",ri="carousel_static_plate",ni="standard",oi="masonry",ai="locations",li="gallery",si="carousel_extended",di="dual_row_carousel",ci="small",pi="data-theme",hi="data-show-review-photos",ui="data-write-review",mi="data-autoscroll",gi="data-show-rating",wi="data-type",vi="data-fixed-reviews-height",fi="data-position-vertical",xi="data-position-type",bi="data-sticky",yi="data-content-index",_i="data-has-shadow",$i="data-review-photos-type",Si="data-card-color",ki="data-stars-color",Ci="data-text-color",Ni="data-number-of-rows-mobile",Ti="data-number-of-rows-desktop",Ri="data-transparency",Ii="data-delay",Ai="data-font",Li="data-fluid-scrolling",ji="data-rating-type",Mi="data-emoji-type",zi="data-solid-shadow",Pi="data-variant",Ei=["default","theme"],Oi=["stars","emoji","hearts"],Bi=D({}),Ui=({contentIndex:e,business:i})=>{const t="all"===e?0:e,r=i[t]||i[0],n=de(()=>"all"===e?(e=>{const{totalReviews:i,totalRating:t,reviews:r,summary:n}=e.reduce((e,i)=>(e.totalRating+=i.rating*i.reviewsNumber,e.totalReviews+=i.reviewsNumber,e.reviews=[...e.reviews,...i.reviews],e.summary=e.summary||i.summary,e),{totalRating:0,totalReviews:0,reviews:[],summary:null});return{rating:t/i,reviewsNumber:i,reviews:r.sort((e,i)=>i.time-e.time),summary:n}})(i):i[t]||i[0],[i,e]);return{index:t,...r,...n}},Hi=({container:e})=>{e&&(e.style.container="wrapper / inline-size",e.style.width="100%")},Di=()=>{const[e,i]=oe(()=>Array(5).fill("none"));return{icons:e,handleMouseEnterIcon:e=>()=>{const t=e+1,r=5-t;i([...Array(t).fill("full"),...Array(r).fill("none")])},handleMouseLeaveIcon:()=>{i(Array(5).fill("none"))}}};function Fi(e){var i,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var n=e.length;for(i=0;i<n;i++)e[i]&&(t=Fi(e[i]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Vi(){for(var e,i,t=0,r="",n=arguments.length;t<n;t++)(e=arguments[t])&&(i=Fi(e))&&(r&&(r+=" "),r+=i);return r}const Wi=He("div")`
    display: flex;
    gap: 10px;
    align-items: center;
    width: 100%;
    max-width: 100%;
`,Gi=He("div")`
    min-width: 50px;
    width: 50px;
    height: 50px;
`,Zi=He("div")`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    overflow: hidden;
    gap: 3px;
    min-width: 0;
`,qi=He("div")`
    display: flex;
    align-items: center;
`,Ki=He("div")`
    font-size: 18px;
    font-weight: 700;
    margin-right: 8px;
    line-height: 21px;
    height: 21px;
`,Xi=He("div")`
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    height: 21px;
    min-width: 0;
    ${({$isEditable:e})=>e?"\n                  &::after {\n                      content: attr(data-content);\n                  }\n              ":"\n                  &::after {\n                      content: '';\n                      display: none;\n                  }\n              "}
`,Yi=He("div")`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
`,Ji=He("div")`
    display: flex;
    align-items: center;
    gap: 2px;
    height: 21px;
`,Qi=({children:e})=>e;Qi.Container=function({icon:e,className:i,content:t}){return V(Wi,{className:Vi(i,"reputon-info"),children:[e,t]})},Qi.Icon=({className:e,children:i})=>i?V(Gi,{className:Vi(e,"reputon-image"),children:i}):null,Qi.Content=({rating:e,reviewsText:i,className:t,name:r})=>V(Zi,{className:Vi(t,"reputon-content"),children:[r,e,i]}),Qi.Name=({className:e,children:i,content:t,isEditable:r})=>i&&V(Xi,{"data-content":t,$isEditable:r,className:Vi(e,"reputon-name"),children:!r&&i}),Qi.Rating=({className:e,children:i})=>i?V(qi,{className:Vi(e,"reputon-rating-stars"),children:i}):null,Qi.ReviewsText=({className:e,children:i})=>i&&V(Yi,{className:Vi(e,"reputon-reviews-count"),children:i}),Qi.Count=({className:e,children:i})=>i&&V(Ki,{className:Vi(e,"reputon-count-number"),children:i}),Qi.RatingIcons=({className:e,children:i})=>i&&V(Ji,{className:Vi(e,"reputon-count-text"),children:i});const et=["img/emoji/butterfly.png","img/emoji/flower.png","img/emoji/diamond.png","img/emoji/cake.png","img/emoji/smilingFace.png","img/emoji/christmasTree.png","img/emoji/fire.png","img/emoji/crown.png","img/emoji/shoe.png","img/emoji/snowflake.png","img/emoji/car.png","img/emoji/ribbon.png","img/emoji/pumpkin.png","img/emoji/heartWithArrow.png","img/emoji/rabbitFace.png"],it=He("span")`
    display: inline-block;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 19px;
    max-height: 100%;
    overflow: hidden;

    & > img {
        ${({$fill:e})=>"none"===e&&"filter: grayscale(1);"}
        ${({theme:e})=>"black"===e.theme&&"filter: grayscale(1);"}
        ${({$fill:e,theme:i})=>"none"===e&&"black"===i.theme&&"opacity: 0.2;"}
    }

    & > img:nth-child(2) {
        position: absolute;
        top: 0;
        left: 0;
    }

    ${({$fill:e,theme:i})=>"half"===e&&`\n            & > img {\n                filter: grayscale(1);\n            }\n\n            & > img:nth-child(1) {\n                ${"black"===i.theme&&"opacity: 0.2;"}\n            }\n\n            & > img:nth-child(2) {\n                filter: none;\n                ${"black"===i.theme&&"filter: grayscale(1);"}\n                clip-path: inset(0 50% 0 0);\n            }\n        `}
`,tt=He("img")`
    width: 100%;
    height: 100%;
    object-fit: contain;
`,rt=({emojiType:e,fill:i,className:t})=>V(it,"half"===i?{className:t,$fill:i,children:[V(tt,{src:`https://cdn.grw.reputon.com/${et[e]}`}),V(tt,{src:`https://cdn.grw.reputon.com/${et[e]}`})]}:{className:t,$fill:i,children:V(tt,{src:`https://cdn.grw.reputon.com/${et[e]}`})}),nt=({fill:e="full",className:i,onHover:t,onUnHover:r})=>({full:V("svg",{className:i,onMouseEnter:t,onMouseLeave:r,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:V("path",{d:"M11.1306 2C9.76798 2 8.59131 2.798 7.99998 3.962C7.40865 2.798 6.23198 2 4.86931 2C2.91598 2 1.33331 3.638 1.33331 5.654C1.33331 7.67 2.54465 9.518 4.10998 11.036C5.67531 12.554 7.99998 14 7.99998 14C7.99998 14 10.2493 12.578 11.89 11.036C13.64 9.392 14.6666 7.676 14.6666 5.654C14.6666 3.632 13.084 2 11.1306 2Z",fill:"currentColor"})}),half:V("svg",{width:"16",height:"16",className:i,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[V("path",{d:"M10.7969 2.5C12.459 2.5 13.833 3.89316 13.833 5.6543C13.8329 7.48336 12.9117 9.07693 11.2139 10.6719C10.4172 11.4206 9.46554 12.1469 8.70605 12.6895C8.32763 12.9598 7.99941 13.1829 7.7666 13.3379C7.73053 13.3619 7.69635 13.3836 7.66504 13.4043C7.63088 13.3821 7.59347 13.3582 7.55371 13.332C7.31528 13.1754 6.98024 12.9512 6.59766 12.6797C5.82874 12.134 4.88068 11.4096 4.125 10.6768C2.59649 9.19446 1.50012 7.46917 1.5 5.6543C1.5 3.89861 2.87451 2.5 4.53613 2.5C5.69549 2.50005 6.70763 3.17857 7.2207 4.18848L7.66699 5.06641L8.1123 4.18848C8.62533 3.17863 9.63763 2.50018 10.7969 2.5Z",stroke:"currentColor",fill:"none"}),V("path",{d:"M7.66667 3.962C7.07533 2.798 5.89867 2 4.536 2C2.58267 2 1 3.638 1 5.654C1 7.67 2.21133 9.518 3.77667 11.036C5.342 12.554 7.66667 14 7.66667 14V3.962Z",fill:"currentColor"})]}),none:V("svg",{className:i,onMouseEnter:t,onMouseLeave:r,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:V("path",{d:"M10.7969 2.5C12.459 2.5 13.833 3.89316 13.833 5.6543C13.8329 7.48336 12.9117 9.07693 11.2139 10.6719C10.4172 11.4206 9.46554 12.1469 8.70605 12.6895C8.32763 12.9598 7.99941 13.1829 7.7666 13.3379C7.73053 13.3619 7.69635 13.3836 7.66504 13.4043C7.63088 13.3821 7.59347 13.3582 7.55371 13.332C7.31528 13.1754 6.98024 12.9512 6.59766 12.6797C5.82874 12.134 4.88068 11.4096 4.125 10.6768C2.59649 9.19446 1.50012 7.46917 1.5 5.6543C1.5 3.89861 2.87451 2.5 4.53613 2.5C5.69549 2.50005 6.70763 3.17857 7.2207 4.18848L7.66699 5.06641L8.1123 4.18848C8.62533 3.17863 9.63763 2.50018 10.7969 2.5Z",stroke:"currentColor",fill:"none"})})}[e]),ot=({fill:e="full",className:i,onHover:t,onUnHover:r})=>({full:V("svg",{viewBox:"0 0 1792 1792",width:"17",height:"17",fill:"currentColor",className:i,onMouseEnter:t,onMouseLeave:r,children:V("g",{style:"fill: inherit",width:"17",height:"17",children:V("path",{d:"M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"})})}),half:V("svg",{viewBox:"0 0 1792 1792",width:"17",height:"17",fill:"currentColor",className:i,children:V("g",{style:"fill: inherit",width:"17",height:"17",children:V("path",{d:"M1250 957l257-250-356-52-66-10-30-60-159-322v963l59 31 318 168-60-355-12-66zm452-262l-363 354 86 500q5 33-6 51.5t-34 18.5q-17 0-40-12l-449-236-449 236q-23 12-40 12-23 0-34-18.5t-6-51.5l86-500-364-354q-32-32-23-59.5t54-34.5l502-73 225-455q20-41 49-41 28 0 49 41l225 455 502 73q45 7 54 34.5t-24 59.5z"})})}),none:V("svg",{viewBox:"0 0 1792 1792",width:"17",height:"17",fill:"#ccc",className:i,onMouseEnter:t,onMouseLeave:r,children:V("g",{style:"fill: inherit",width:"17",height:"17",children:V("path",{d:"M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"})})})}[e]),at={stars:({...e})=>V(ot,{...e}),hearts:({...e})=>V(nt,{...e}),emoji:({...e})=>V(rt,{...e})},lt=({ratingType:e,...i})=>(at[e]||at.stars)({...i}),st=He("a")`
    display: inline-block;
    max-height: 100%;
    ${e=>e.$inherit&&"\n            all: inherit;\n        "};
    &:focus-visible {
        outline: 2px auto !important;
        outline-offset: -2px;
    }
`,dt=({style:e,url:i,children:t,className:r,inherit:n=!1,label:o})=>i?V(st,{"aria-label":o,$inherit:n,className:Vi(r,"reputon-link"),style:e,href:i,target:"_blank",rel:"noopener noreferrer",children:t}):t,ct={from:"from",google_rating:"Google Reviews",show_more:"Show more",show_less:"Show less",review:"review",reviews:"reviews",verified:"Verified",by:"by",write_review:"Leave a Review",load_more:"Load more",based_on:"Based on",ai_summary:"AI Summary",be_first_review:"Be the first to write review",work_time:"Opening hours",day_off:"Closed",always_on:"Open 24 hours",closed:"Closed",open:"Open",see_all:"See all",monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday",no_reviews_yet:"Be the first to review",reviews_on:"reviews on",hide_reviews:"Hide reviews",show_reviews:"Show reviews",review_image:"Review image",business_image:"Business image",image:"image",previous_slide:"Previous slide",next_slide:"Next slide",powered_by:"Powered by"},pt={from:"desde",google_rating:"Reseñas de Google",show_more:"Mostrar más",show_less:"Muestra menos",review:"reseña",reviews:"reseñas",verified:"Verificado",by:"de",write_review:"Dejar un comentario",load_more:"Сarga más",based_on:"Basado en",ai_summary:"Resumen de IA",be_first_review:"Sé el primero en escribir una reseña",work_time:"Horario de apertura",day_off:"Cerrado",always_on:"Abierto 24 horas",closed:"Cerrado",open:"Abierto",see_all:"Ver todo",monday:"Lunes",tuesday:"Martes",wednesday:"Miércoles",thursday:"Jueves",friday:"Viernes",saturday:"Sábado",sunday:"Domingo",no_reviews_yet:"Sé el primero en escribir una reseña",reviews_on:"reseñas sobre",hide_reviews:"Ocultar reseñas",show_reviews:"Mostrar reseñas",review_image:"Imagen de reseña",business_image:"Imagen de negocio",image:"imagen",previous_slide:"Diapositiva anterior",next_slide:"Siguiente diapositiva",powered_by:"Desarrollado por"},ht={from:"de",google_rating:"Avaliações do Google",show_more:"Mostre mais",show_less:"Mostre menos",review:"avaliação",reviews:"avaliações",verified:"Verificado",by:"por",write_review:"Deixe um comentário",load_more:"Carregue mais",based_on:"Com base em",ai_summary:"Resumo de IA",be_first_review:"Seja o primeiro a escrever uma avaliação",work_time:"Horário de funcionamento",day_off:"Fechado",always_on:"Aberto 24 horas",closed:"Fechado",open:"Aberto",see_all:"Ver tudo",monday:"Segunda-feira",tuesday:"Terça-feira",wednesday:"Quarta-feira",thursday:"Quinta-feira",friday:"Sexta-feira",saturday:"Sábado",sunday:"Domingo",no_reviews_yet:"Seja o primeiro a avaliar",reviews_on:"avaliações sobre",hide_reviews:"Ocultar avaliações",show_reviews:"Mostrar avaliações",review_image:"Imagem da avaliação",business_image:"Imagem do negócio",image:"imagem",previous_slide:"Slide anterior",next_slide:"Próximo slide",powered_by:"Desenvolvido por"},ut={from:"von",google_rating:"Bewertungen auf Google",show_more:"Mehr anzeigen",show_less:"Weniger anzeigen",review:"Bewertung",reviews:"Bewertungen",verified:"Verifiziert",by:"von",write_review:"Bewertung hinterlassen",load_more:"Mehr laden",based_on:"Basierend auf",ai_summary:"KI-Zusammenfassung",be_first_review:"Schreiben Sie die erste Bewertung",work_time:"Öffnungszeiten",day_off:"Geschlossen",always_on:"24 Stunden geöffnet",closed:"Geschlossen",open:"Geöffnet",see_all:"Alle ansehen",monday:"Montag",tuesday:"Dienstag",wednesday:"Mittwoch",thursday:"Donnerstag",friday:"Freitag",saturday:"Samstag",sunday:"Sonntag",no_reviews_yet:"Schreiben Sie die erste Bewertung",reviews_on:"Bewertungen über",hide_reviews:"Bewertungen ausblenden",show_reviews:"Bewertungen anzeigen",review_image:"Bewertungsbild",business_image:"Geschäftsbild",image:"bild",previous_slide:"Vorherige Folie",next_slide:"Nächste Folie",powered_by:"Unterstützt von"},mt={from:"de",google_rating:"Avis sur Google",show_more:"Montrer plus",show_less:"Montrer moins",review:"avis",reviews:"avis",verified:"Vérifié",by:"par",write_review:"Laisser un commentaire",load_more:"Сharger plus",based_on:"Basé sur",ai_summary:"Résumé IA",be_first_review:"Soyez le premier à écrire un avis",work_time:"Heures d'ouverture",day_off:"Fermé",always_on:"Ouvert 24h/24",closed:"Fermé",open:"Ouvert",see_all:"Voir tout",monday:"Lundi",tuesday:"Mardi",wednesday:"Mercredi",thursday:"Jeudi",friday:"Vendredi",saturday:"Samedi",sunday:"Dimanche",no_reviews_yet:"Soyez le premier à donner votre avis",reviews_on:"avis sur",hide_reviews:"Masquer les avis",show_reviews:"Afficher les avis",review_image:"Image de l'avis",business_image:"Image de l'entreprise",image:"image",previous_slide:"Diapositive précédente",next_slide:"Diapositive suivante",powered_by:"Propulsé par"},gt={from:"da",google_rating:"Recensioni su Google",show_more:"Mostra di più",show_less:"Mostra meno",review:"recensione",reviews:"recensioni",verified:"Verificato",by:"di",write_review:"Lascia una recensione",load_more:"Сaricare di più",based_on:"Basato su",ai_summary:"Riepilogo IA",be_first_review:"Sii il primo a scrivere una recensione",work_time:"Orari di apertura",day_off:"Chiuso",always_on:"Aperto 24 ore",closed:"Chiuso",open:"Aperto",see_all:"Vedi tutto",monday:"Lunedì",tuesday:"Martedì",wednesday:"Mercoledì",thursday:"Giovedì",friday:"Venerdì",saturday:"Sabato",sunday:"Domenica",no_reviews_yet:"Sii il primo a recensire",reviews_on:"recensioni su",hide_reviews:"Nascondi recensioni",show_reviews:"Mostra recensioni",review_image:"Immagine della recensione",business_image:"Immagine dell'attività",image:"immagine",previous_slide:"Diapositiva precedente",next_slide:"Diapositiva successiva",powered_by:"Offerto da"},wt={from:"van",google_rating:"Google-beoordelingen",show_more:"Laat meer zien",show_less:"Laat minder zien",review:"beoordeling",reviews:"beoordelingen",verified:"Geverifieerd",by:"door",write_review:"Laat een beoordeling achter",load_more:"Meer laden",based_on:"Gebaseerd op",ai_summary:"AI-samenvatting",be_first_review:"Schrijf als eerste een review",work_time:"Openingstijden",day_off:"Gesloten",always_on:"24 uur per dag open",closed:"Gesloten",open:"Open",see_all:"Alles zien",monday:"Maandag",tuesday:"Dinsdag",wednesday:"Woensdag",thursday:"Donderdag",friday:"Vrijdag",saturday:"Zaterdag",sunday:"Zondag",no_reviews_yet:"Schrijf als eerste een review",reviews_on:"beoordelingen over",hide_reviews:"Verberg beoordelingen",show_reviews:"Toon beoordelingen",review_image:"Beoordelingsafbeelding",business_image:"Bedrijfsafbeelding",image:"afbeelding",previous_slide:"Vorige dia",next_slide:"Volgende dia",powered_by:"Mogelijk gemaakt door"},vt={from:"fra",google_rating:"Anmeldelser på Google",show_more:"Vis mere",show_less:"Vis mindre",review:"anmeldelse",reviews:"anmeldelser",verified:"Bekræftet",by:"af",write_review:"Efterlad en anmeldelse",load_more:"Indlæs mere",based_on:"Baseret på",ai_summary:"AI-resumé",be_first_review:"Vær den første til at skrive anmeldelse",work_time:"Åbningstider",day_off:"Lukket",always_on:"Altid åbent",closed:"Lukket",open:"Åben",see_all:"Se alle",monday:"Mandag",tuesday:"Tirsdag",wednesday:"Onsdag",thursday:"Torsdag",friday:"Fredag",saturday:"Lørdag",sunday:"Søndag",no_reviews_yet:"Vær den første til at anmelde",reviews_on:"anmeldelser om",hide_reviews:"Skjul anmeldelser",show_reviews:"Vis anmeldelser",review_image:"Anmeldelsesbillede",business_image:"Virksomhedsbillede",image:"billede",previous_slide:"Forrige dias",next_slide:"Næste dias",powered_by:"Drevet af"},ft={from:"från",google_rating:"Recensioner på Google",show_more:"Visa mer",show_less:"Visa mindre",review:"recension",reviews:"recensioner",verified:"Verifierad",by:"av",write_review:"Lämna en recension",load_more:"Ladda mer",based_on:"Baserat på",ai_summary:"AI-sammanfattning",be_first_review:"Bli först med att recensera",work_time:"Öppettider",day_off:"Stängt",always_on:"Öppet dygnet runt",closed:"Stängt",open:"Öppet",see_all:"Se alla",monday:"Måndag",tuesday:"Tisdag",wednesday:"Onsdag",thursday:"Torsdag",friday:"Fredag",saturday:"Lördag",sunday:"Söndag",no_reviews_yet:"Bli först med att recensera",reviews_on:"recensioner på",hide_reviews:"Dölj recensioner",show_reviews:"Visa recensioner",review_image:"Recensionsbild",business_image:"Företagsbild",image:"bild",previous_slide:"Föregående bild",next_slide:"Nästa bild",powered_by:"Drivs av"},xt={from:"fra",google_rating:"Anmeldelser på Google",show_more:"Vis mer",show_less:"Vis mindre",review:"anmeldelse",reviews:"anmeldelser",verified:"Bekreftet",by:"av",write_review:"Legg igjen en anmeldelse",load_more:"Last mer",based_on:"Basert på",ai_summary:"AI-sammendrag",be_first_review:"Bli den første til å skrive en anmeldelse",work_time:"Åpningstider",day_off:"Stengt",always_on:"Åpent 24 timer",closed:"Stengt",open:"Åpen",see_all:"Se alle",monday:"Mandag",tuesday:"Tirsdag",wednesday:"Onsdag",thursday:"Torsdag",friday:"Fredag",saturday:"Lørdag",sunday:"Søndag",no_reviews_yet:"Vær den første til å anmelde",reviews_on:"anmeldelser om",hide_reviews:"Skjul anmeldelser",show_reviews:"Vis anmeldelser",review_image:"Anmeldelsesbilde",business_image:"Bedriftsbilde",image:"bilde",previous_slide:"Forrige lysbilde",next_slide:"Neste lysbilde",powered_by:"Drevet av"},bt={from:"od",google_rating:"Recenzje w Google",show_more:"Pokaż więcej",show_less:"Pokaż mniej",review:"ocena",reviews:"opinii",verified:"Zweryfikowany",by:"od",write_review:"Zostaw recenzję",load_more:"Załaduj więcej",based_on:"Na podstawie",ai_summary:"Podsumowanie AI",be_first_review:"Bądź pierwszą osobą, która napisze recenzję",work_time:"Godziny otwarcia",day_off:"Zamknięte",always_on:"Otwarte 24 godziny",closed:"Zamknięte",open:"Otwarte",see_all:"Zobacz wszystko",monday:"Poniedziałek",tuesday:"Wtorek",wednesday:"Środa",thursday:"Czwartek",friday:"Piątek",saturday:"Sobota",sunday:"Niedziela",no_reviews_yet:"Bądź pierwszą osobą, która oceni",reviews_on:"opinie o",hide_reviews:"Ukryj recenzje",show_reviews:"Pokaż recenzje",review_image:"Obraz recenzji",business_image:"Obraz firmy",image:"obraz",previous_slide:"Poprzedni slajd",next_slide:"Następny slajd",powered_by:"Wspierane przez"},yt={from:"itibaren",google_rating:"Google Puanı",show_more:"Daha fazla göster",show_less:"Daha az göster",review:"İnceleme",reviews:"İncelemeler",verified:"Doğrulandı",by:"tarafından",write_review:"İnceleme bırak",load_more:"Daha fazla yükle",based_on:"Dayalı",ai_summary:"Yapay Zeka Özet",be_first_review:"İnceleme yazan ilk kişi siz olun",work_time:"Çalışma saatleri",day_off:"Kapalı",always_on:"24 saat açık",closed:"Kapalı",open:"Açık",see_all:"Hepsini gör",monday:"Pazartesi",tuesday:"Salı",wednesday:"Çarşamba",thursday:"Perşembe",friday:"Cuma",saturday:"Cumartesi",sunday:"Pazar",no_reviews_yet:"İlk değerlendiren siz olun",reviews_on:"hakkında incelemeler",hide_reviews:"İncelemeleri gizle",show_reviews:"İncelemeleri göster",review_image:"İnceleme görseli",business_image:"İşletme görseli",image:"görsel",previous_slide:"Önceki slayt",next_slide:"Sonraki slayt",powered_by:"Destekleyen"},_t={from:"от",google_rating:"Отзывы на Google",show_more:"Показать больше",show_less:"Показать меньше",review:"отзыв",reviews:"отзывов",verified:"Проверено",by:"от",write_review:"Оставить отзыв",load_more:"Загрузить больше",based_on:"На основе",ai_summary:"ИИ-резюме",be_first_review:"Будьте первым, кто напишет отзыв",work_time:"Часы работы",day_off:"Выходной",always_on:"Открыто 24 часа",closed:"Закрыто",open:"Открыто",see_all:"Показать всё",monday:"Понедельник",tuesday:"Вторник",wednesday:"Среда",thursday:"Четверг",friday:"Пятница",saturday:"Суббота",sunday:"Воскресенье",no_reviews_yet:"Будьте первым, кто оставит отзыв",reviews_on:"отзывы на",hide_reviews:"Скрыть отзывы",show_reviews:"Показать отзывы",review_image:"Изображение отзыва",business_image:"Изображение компании",image:"изображение",previous_slide:"Предыдущий слайд",next_slide:"Следующий слайд",powered_by:"Работает на"},$t={from:"від",google_rating:"Відгуки на Google",show_more:"Показати більше",show_less:"Показати менше",review:"відгук",reviews:"відгуків",verified:"Перевірено",by:"від",write_review:"Залишити відгук",load_more:"Завантажити більше",based_on:"На основі",ai_summary:"ШІ-огляд",be_first_review:"Будьте першим, хто залишить відгук",work_time:"Години роботи",day_off:"Зачинено",always_on:"Працюємо цілодобово",closed:"Зачинено",open:"Відчинено",see_all:"Показати все",monday:"Понеділок",tuesday:"Вівторок",wednesday:"Середа",thursday:"Четвер",friday:"П'ятниця",saturday:"Субота",sunday:"Неділя",no_reviews_yet:"Будьте першим, хто залишить відгук",reviews_on:"відгуки на",hide_reviews:"Приховати відгуки",show_reviews:"Показати відгуки",review_image:"Зображення відгуку",business_image:"Зображення компанії",image:"зображення",previous_slide:"Попередній слайд",next_slide:"Наступний слайд",powered_by:"Працює на"},St={from:"от",google_rating:"Google Ревюта",show_more:"Покажи повече",show_less:"Покажи по-малко",review:"ревю",reviews:"ревюта",verified:"Потвърдено",by:"от",write_review:"Оставете ревю",load_more:"Зареди още",based_on:"Въз основа на",ai_summary:"Обобщение от ИИ",be_first_review:"Бъдете първият, който ще напише отзив",work_time:"Работно време",day_off:"Почивен ден",always_on:"Отворено 24 часа",closed:"Затворено",open:"Отворено",see_all:"Виж всички",monday:"Понеделник",tuesday:"Вторник",wednesday:"Сряда",thursday:"Четвъртък",friday:"Петък",saturday:"Събота",sunday:"Неделя",no_reviews_yet:"Бъдете първият, който ще напише отзив",reviews_on:"ревюта за",hide_reviews:"Скрий ревюта",show_reviews:"Покажи ревюта",review_image:"Изображение на ревю",business_image:"Изображение на компания",image:"изображение",previous_slide:"Предишен слайд",next_slide:"Следващ слайд",powered_by:"Задвижвано от"},kt={from:"από",google_rating:"Αξιολόγηση Google",show_more:"Δείτε περισσότερα",show_less:"Δείξε λιγότερο",review:"κριτική",reviews:"κριτικές",verified:"Επαληθεύτηκε",by:"από τον",write_review:"Αφήστε μια κριτική",load_more:"Φόρτωσε περισσότερα",based_on:"Βασισμένο σε",ai_summary:"Περίληψη ΤΝ",be_first_review:"Γίνε ο πρώτος που θα γράψει κριτική",work_time:"Ώρες λειτουργίας",day_off:"Κλειστό",always_on:"Ανοιχτό 24 ώρες",closed:"Κλειστό",open:"Ανοιχτό",see_all:"Δείτε όλα",monday:"Δευτέρα",tuesday:"Τρίτη",wednesday:"Τετάρτη",thursday:"Πέμπτη",friday:"Παρασκευή",saturday:"Σάββατο",sunday:"Κυριακή",no_reviews_yet:"Γίνετε ο πρώτος που θα κάνει κριτική",reviews_on:"κριτικές για",hide_reviews:"Απόκρυψη κριτικών",show_reviews:"Εμφάνιση κριτικών",review_image:"Εικόνα κριτικής",business_image:"Εικόνα επιχείρησης",image:"εικόνα",previous_slide:"Προηγούμενη διαφάνεια",next_slide:"Επόμενη διαφάνεια",powered_by:"Υποστηρίζεται από"},Ct={from:"から",google_rating:"Google 評価",show_more:"もっと見せる",show_less:"表示を減らす",review:"レビュー",reviews:"レビュー一覧",verified:"確認済み",by:"によって",write_review:"レビューを残す",load_more:"もっと読み込む",based_on:"に基づく",ai_summary:"AI概要",be_first_review:"レビューを書くために最初にすること",work_time:"営業時間",day_off:"定休日",always_on:"24時間営業",closed:"閉店",open:"営業中",see_all:"すべて表示",monday:"月曜日",tuesday:"火曜日",wednesday:"水曜日",thursday:"木曜日",friday:"金曜日",saturday:"土曜日",sunday:"日曜日",no_reviews_yet:"最初のレビューを書く",reviews_on:"に関するレビュー",hide_reviews:"レビューを非表示",show_reviews:"レビューを表示",review_image:"レビュー画像",business_image:"ビジネス画像",image:"画像",previous_slide:"前のスライド",next_slide:"次のスライド",powered_by:"提供元"},Nt={from:"来自",google_rating:"谷歌评分",show_more:"显示更多",show_less:"显示更少",review:"评论",reviews:"评论列表",verified:"已验证",by:"由",write_review:"发表评论",load_more:"装载更多",based_on:"基于",ai_summary:"AI摘要",be_first_review:"成为第一个写评论的人",work_time:"营业时间",day_off:"休息日",always_on:"24小时营业",closed:"关闭",open:"开放",see_all:"查看全部",monday:"星期一",tuesday:"星期二",wednesday:"星期三",thursday:"星期四",friday:"星期五",saturday:"星期六",sunday:"星期天",no_reviews_yet:"成为第一个评价的人",reviews_on:"关于的评论",hide_reviews:"隐藏评论",show_reviews:"显示评论",review_image:"评论图片",business_image:"商家图片",image:"图片",previous_slide:"上一张幻灯片",next_slide:"下一张幻灯片",powered_by:"技术支持"},Tt={from:"od",google_rating:"Googlove ocene",show_more:"Pokaži več",show_less:"Pokaži manj",review:"pregled",reviews:"pregledi",verified:"Preverjeno",by:"od",write_review:"Pusti oceno",load_more:"Naloži več",based_on:"Temelji na",ai_summary:"Povzetek UI",be_first_review:"Bodite prvi, ki bo napisal pregled",work_time:"Odpiralni čas",day_off:"Zaprto",always_on:"Odprto 24 ur",closed:"Zaprto",open:"Odprto",see_all:"Poglej vse",monday:"Ponedeljek",tuesday:"Torek",wednesday:"Sreda",thursday:"Četrtek",friday:"Petek",saturday:"Sobota",sunday:"Nedelja",no_reviews_yet:"Bodite prvi, ki bo ocenil",reviews_on:"mnenj na",hide_reviews:"Skrij ocene",show_reviews:"Prikaži ocene",review_image:"Slika ocene",business_image:"Slika podjetja",image:"slika",previous_slide:"Prejšnji slajd",next_slide:"Naslednji slajd",powered_by:"Omogoča"},Rt={from:"من",google_rating:"مراجعات جوجل",show_more:"أظهر المزيد",show_less:"عرض أقل",review:"مراجعة",reviews:"المراجعات",verified:"تم التحقق",by:"بواسطة",write_review:"ترك التعليق",load_more:"تحميل المزيد",based_on:"مرتكز على",ai_summary:"ملخص الذكاء الاصطناعي",be_first_review:"كن أول من يكتب مراجعة",work_time:"ساعات العمل",day_off:"يوم العطلة",always_on:"مفتوح 24 ساعة",closed:"مغلق",open:"مفتوح",see_all:"عرض الكل",monday:"الإثنين",tuesday:"الثلاثاء",wednesday:"الأربعاء",thursday:"الخميس",friday:"الجمعة",saturday:"السبت",sunday:"الأحد",no_reviews_yet:"كن أول من يقيم",reviews_on:"مراجعات حول",hide_reviews:"إخفاء المراجعات",show_reviews:"إظهار المراجعات",review_image:"صورة المراجعة",business_image:"صورة العمل",image:"صورة",previous_slide:"الشريحة السابقة",next_slide:"الشريحة التالية",powered_by:"مدعوم من"},It={from:"tól",google_rating:"Google Vélemények",show_more:"Mutass többet",show_less:"Mutass kevesebbet",review:"felülvizsgálat",reviews:"vélemények",verified:"Ellenőrzött",by:"által",write_review:"Írjon véleményt",load_more:"Töltsön be többet",based_on:"Alapján",ai_summary:"MI-összefoglaló",be_first_review:"Legyen Ön az első, aki értékelést ír",work_time:"Nyitvatartási idő",day_off:"Zárva",always_on:"Non-stop nyitva",closed:"Zárva",open:"Nyitva",see_all:"Összes megtekintése",monday:"Hétfő",tuesday:"Kedd",wednesday:"Szerda",thursday:"Csütörtök",friday:"Péntek",saturday:"Szombat",sunday:"Vasárnap",no_reviews_yet:"Legyen Ön az első, aki értékelést ír",reviews_on:"vélemények itt",hide_reviews:"Vélemények elrejtése",show_reviews:"Vélemények megjelenítése",review_image:"Véleménykép",business_image:"Üzleti kép",image:"kép",previous_slide:"Előző dia",next_slide:"Következő dia",powered_by:"Működteti"},At={from:"alkaen",google_rating:"Google-arvostelut",show_more:"Näytä lisää",show_less:"Näytä vähemmän",review:"arvostelu",reviews:"arvostelut",verified:"Vahvistettu",by:"",write_review:"Jätä arvostelu",load_more:"Lataa lisää",based_on:"Perustuen",ai_summary:"Tekoäly-yhteenveto",be_first_review:"Kirjoita arvostelu ensimmäisenä",work_time:"Aukioloajat",day_off:"Suljettu",always_on:"Avoinna 24 tuntia",closed:"Suljettu",open:"Avoinna",see_all:"Näytä kaikki",monday:"Maanantai",tuesday:"Tiistai",wednesday:"Keskiviikko",thursday:"Torstai",friday:"Perjantai",saturday:"Lauantai",sunday:"Sunnuntai",no_reviews_yet:"Arvostele ensimmäisenä",reviews_on:"arvostelut täällä",hide_reviews:"Piilota arvostelut",show_reviews:"Näytä arvostelut",review_image:"Arvostelukuva",business_image:"Yrityskuva",image:"kuva",previous_slide:"Edellinen dia",next_slide:"Seuraava dia",powered_by:"Palvelun tarjoaa"},Lt={from:"nuo",google_rating:"Google atsiliepimai",show_more:"Rodyti daugiau",show_less:"Rodyti mažiau",review:"atsiliepimą",reviews:"atsiliepimai",verified:"Patvirtinta",by:"pateikė",write_review:"Palikite atsiliepimą",load_more:"Įkelti daugiau",based_on:"Remiantis",ai_summary:"Dirbtinio intelekto santrauka",be_first_review:"Būkite pirmas parašęs atsiliepimą",work_time:"Darbo valandos",day_off:"Nedirba",always_on:"Dirba visą parą",closed:"Uždaryta",open:"Atidaryta",see_all:"Žiūrėti viską",monday:"Pirmadienis",tuesday:"Antradienis",wednesday:"Trečiadienis",thursday:"Ketvirtadienis",friday:"Penktadienis",saturday:"Šeštadienis",sunday:"Sekmadienis",no_reviews_yet:"Būkite pirmas parašęs atsiliepimą",reviews_on:"atsiliepimai apie",hide_reviews:"Slėpti atsiliepimus",show_reviews:"Rodyti atsiliepimus",review_image:"Atsiliepimo nuotrauka",business_image:"Įmonės nuotrauka",image:"nuotrauka",previous_slide:"Ankstesnis skaidrė",next_slide:"Kita skaidrė",powered_by:"Sukurta naudojant"},jt={from:"frá",google_rating:"Google umsagnir",show_more:"Sýndu meira",show_less:"Sýna minna",review:"endurskoðun",reviews:"umsagnir",verified:"Staðfest",by:"af",write_review:"Skildu eftir umsögn",load_more:"Hlaða meira",based_on:"Byggt á",ai_summary:"Gervigreindaryfirlit",be_first_review:"Vertu fyrst (ur) til að skrifa umsögn",work_time:"Opiðtímar",day_off:"Lokað",always_on:"Opið allan sólarhringinn",closed:"Lokað",open:"Opið",see_all:"Sjá allt",monday:"Mánudagur",tuesday:"Þriðjudagur",wednesday:"Miðvikudagur",thursday:"Fimmtudagur",friday:"Föstudagur",saturday:"Laugardagur",sunday:"Sunnudagur",no_reviews_yet:"Vertu fyrst(ur) til að gefa umsögn",reviews_on:"umsagnir á",hide_reviews:"Fela umsagnir",show_reviews:"Sýna umsagnir",review_image:"Umsagnarmynd",business_image:"Viðskiptamynd",image:"mynd",previous_slide:"Fyrri glæra",next_slide:"Næsta glæra",powered_by:"Knúið af"},Mt={from:"מאת",google_rating:"Google ביקורות",show_more:"להראות יותר",show_less:"הראי פחות",review:"סקירה",reviews:"ביקורות",verified:"מְאוּמָת",by:"לפי",write_review:"השאירו חוות דעת",load_more:"טען עוד",based_on:"מבוסס על",ai_summary:"סיכום בינה מלאכותית",be_first_review:"היה הראשון לכתוב ביקורת",work_time:"שעות פתיחה",day_off:"יום חופשי",always_on:"פתוח 24 שעות",closed:"סגור",open:"פתוח",see_all:"הצג הכל",monday:"יום שני",tuesday:"יום שלישי",wednesday:"יום רביעי",thursday:"יום חמישי",friday:"יום שישי",saturday:"יום שבת",sunday:"יום ראשון",no_reviews_yet:"היה הראשון לכתוב ביקורת",reviews_on:"ביקורות על",hide_reviews:"הסתר ביקורות",show_reviews:"הצג ביקורות",review_image:"תמונת ביקורת",business_image:"תמונת עסק",image:"תמונה",previous_slide:"שקופית קודמת",next_slide:"שקופית הבאה",powered_by:"מופעל על ידי"},zt={from:"de la",google_rating:"Recenzii Google",show_more:"Arată mai multe",show_less:"Arată mai puțin",review:"recenzie",reviews:"recenzii",verified:"verificat",by:"de",write_review:"Lasă o recenzie",load_more:"Încărcați mai mult",based_on:"Bazat pe",ai_summary:"Rezumat AI",be_first_review:"Fii primul care scrie recenzia",work_time:"Ore de funcționare",day_off:"Închis",always_on:"Deschis 24 de ore",closed:"Închis",open:"Deschis",see_all:"Vezi tot",monday:"Luni",tuesday:"Marți",wednesday:"Miercuri",thursday:"Joi",friday:"Vineri",saturday:"Sâmbătă",sunday:"Duminică",no_reviews_yet:"Fii primul care scrie recenzia",reviews_on:"recenzii pe",hide_reviews:"Ascunde recenziile",show_reviews:"Afișează recenziile",review_image:"Imagine recenzie",business_image:"Imagine afacere",image:"imagine",previous_slide:"Slide-ul anterior",next_slide:"Slide-ul următor",powered_by:"Realizat de"},Pt={from:"od",google_rating:"Google recenze",show_more:"Zobrazit více",show_less:"Zobrazit méně",review:"recenze",reviews:"recenze",verified:"Ověřeno",by:"od",write_review:"Napsat recenzi",load_more:"Načíst více",based_on:"Na základě",ai_summary:"Shrnutí AI",be_first_review:"Buďte první, kdo napíše recenzi",work_time:"Otevírací doba",day_off:"Zavřeno",always_on:"Otevřeno 24 hodin",closed:"Zavřeno",open:"Otevřeno",see_all:"Zobrazit vše",monday:"Pondělí",tuesday:"Úterý",wednesday:"Středa",thursday:"Čtvrtek",friday:"Pátek",saturday:"Sobota",sunday:"Neděle",no_reviews_yet:"Buďte první, kdo napíše recenzi",reviews_on:"recenze na",hide_reviews:"Skrýt recenze",show_reviews:"Zobrazit recenze",review_image:"Obrázek recenze",business_image:"Obrázek firmy",image:"obrázek",previous_slide:"Předchozí snímek",next_slide:"Další snímek",powered_by:"Poháněno"},Et={from:"no",google_rating:"Google atsauksmes",show_more:"Rādīt vairāk",show_less:"Rādīt mazāk",review:"atsauksme",reviews:"atsauksmes",verified:"Pārbaudīts",by:"autors",write_review:"Atstāt atsauksmi",load_more:"Ielādēt vairāk",based_on:"Balstīts uz",ai_summary:"MI kopsavilkums",be_first_review:"Esi pirmais, kurš uzraksta atsauksmi",work_time:"Darba laiks",day_off:"Slēgts",always_on:"Atvērts visu diennakti",closed:"Slēgts",open:"Atvērts",see_all:"Skatīt visu",monday:"Pirmdiena",tuesday:"Otrdiena",wednesday:"Trešdiena",thursday:"Ceturtdiena",friday:"Piektdiena",saturday:"Sestdiena",sunday:"Svētddiena",no_reviews_yet:"Esi pirmais, kurš uzraksta atsauksmi",reviews_on:"atsauksmes par",hide_reviews:"Paslēpt atsauksmes",show_reviews:"Rādīt atsauksmes",review_image:"Atsauksmes attēls",business_image:"Uzņēmuma attēls",image:"attēls",previous_slide:"Iepriekšējā slaids",next_slide:"Nākamais slaids",powered_by:"Darbina"},Ot={from:"fra",google_rating:"Anmeldelser på Google",show_more:"Vis mer",show_less:"Vis mindre",review:"anmeldelse",reviews:"anmeldelser",verified:"Bekreftet",by:"av",write_review:"Legg igjen en anmeldelse",load_more:"Last mer",based_on:"Basert på",ai_summary:"AI-sammendrag",be_first_review:"Bli den første til å skrive en anmeldelse",work_time:"Åpningstider",day_off:"Stengt",always_on:"Åpent 24 timer",closed:"Stengt",open:"Åpen",see_all:"Se alle",monday:"Mandag",tuesday:"Tirsdag",wednesday:"Onsdag",thursday:"Torsdag",friday:"Fredag",saturday:"Lørdag",sunday:"Søndag",no_reviews_yet:"Vær den første til å anmelde",reviews_on:"anmeldelser om",hide_reviews:"Skjul anmeldelser",show_reviews:"Vis anmeldelser",review_image:"Anmeldelsesbilde",business_image:"Bedriftsbilde",image:"bilde",previous_slide:"Forrige lysbilde",next_slide:"Neste lysbilde",powered_by:"Drevet av"},Bt={from:"od",google_rating:"Google recenzije",show_more:"Prikaži više",show_less:"Prikaži manje",review:"recenzija",reviews:"recenzije",verified:"Verificirano",by:"od",write_review:"Ostavite recenziju",load_more:"Učitaj više",based_on:"Na temelju",ai_summary:"AI sažetak",be_first_review:"Budite prvi koji će napisati recenziju",work_time:"Radno vrijeme",day_off:"Zatvoreno",always_on:"Otvoreno 24 sata",closed:"Zatvoreno",open:"Otvoreno",see_all:"Pogledaj sve",monday:"Ponedjeljak",tuesday:"Utorak",wednesday:"Srijeda",thursday:"Četvrtak",friday:"Petak",saturday:"Subota",sunday:"Nedjelja",no_reviews_yet:"Budite prvi koji će ocijeniti",reviews_on:"recenzije na",hide_reviews:"Sakrij recenzije",show_reviews:"Prikaži recenzije",review_image:"Slika recenzije",business_image:"Slika tvrtke",image:"slika",previous_slide:"Prethodni slajd",next_slide:"Sljedeći slajd",powered_by:"Pokreće"},Ut={from:"од",google_rating:"Google рецензије",show_more:"Прикажи више",show_less:"Прикажи мање",review:"рецензија",reviews:"рецензије",verified:"Верификовано",by:"од",write_review:"Оставите рецензију",load_more:"Учитај више",based_on:"На основу",ai_summary:"AI резиме",be_first_review:"Будите први који ће написати рецензију",work_time:"Радно време",day_off:"Затворено",always_on:"Отворено 24 сата",closed:"Затворено",open:"Отворено",see_all:"Погледај све",monday:"Понедељак",tuesday:"Уторак",wednesday:"Среда",thursday:"Четвртак",friday:"Петак",saturday:"Субота",sunday:"Недеља",no_reviews_yet:"Будите први који ће оценити",reviews_on:"рецензије на",hide_reviews:"Сакриј рецензије",show_reviews:"Прикажи рецензије",review_image:"Слика рецензије",business_image:"Слика фирме",image:"слика",previous_slide:"Претходни слајд",next_slide:"Следећи слајд",powered_by:"Покреће"},Ht={from:"dari",google_rating:"Ulasan Google",show_more:"Tampilkan lebih banyak",show_less:"Tampilkan lebih sedikit",review:"ulasan",reviews:"ulasan",verified:"Terverifikasi",by:"oleh",write_review:"Tulis ulasan",load_more:"Muat lebih banyak",based_on:"Berdasarkan",ai_summary:"Ringkasan AI",be_first_review:"Jadilah yang pertama menulis ulasan",work_time:"Jam buka",day_off:"Tutup",always_on:"Buka 24 jam",closed:"Tutup",open:"Buka",see_all:"Lihat semua",monday:"Senin",tuesday:"Selasa",wednesday:"Rabu",thursday:"Kamis",friday:"Jumat",saturday:"Sabtu",sunday:"Minggu",no_reviews_yet:"Jadilah yang pertama mengulas",reviews_on:"ulasan tentang",hide_reviews:"Sembunyikan ulasan",show_reviews:"Tampilkan ulasan",review_image:"Gambar ulasan",business_image:"Gambar bisnis",image:"gambar",previous_slide:"Slide sebelumnya",next_slide:"Slide berikutnya",powered_by:"Didukung oleh"},Dt={from:"출처",google_rating:"Google 리뷰",show_more:"더 보기",show_less:"접기",review:"리뷰",reviews:"리뷰",verified:"인증됨",by:"작성자",write_review:"리뷰 작성",load_more:"더 불러오기",based_on:"기준",ai_summary:"AI 요약",be_first_review:"첫 번째 리뷰를 작성해 주세요",work_time:"영업시간",day_off:"휴무",always_on:"24시간 영업",closed:"영업 종료",open:"영업 중",see_all:"모두 보기",monday:"월요일",tuesday:"화요일",wednesday:"수요일",thursday:"목요일",friday:"금요일",saturday:"토요일",sunday:"일요일",no_reviews_yet:"첫 번째 리뷰를 작성해 주세요",reviews_on:"에 대한 리뷰",hide_reviews:"리뷰 숨기기",show_reviews:"리뷰 보기",review_image:"리뷰 이미지",business_image:"비즈니스 이미지",image:"이미지",previous_slide:"이전 슬라이드",next_slide:"다음 슬라이드",powered_by:"제공"},Ft={from:"จาก",google_rating:"รีวิว Google",show_more:"แสดงเพิ่มเติม",show_less:"แสดงน้อยลง",review:"รีวิว",reviews:"รีวิว",verified:"ยืนยันแล้ว",by:"โดย",write_review:"เขียนรีวิว",load_more:"โหลดเพิ่มเติม",based_on:"จากทั้งหมด",ai_summary:"สรุปโดย AI",be_first_review:"เป็นคนแรกที่เขียนรีวิว",work_time:"เวลาทำการ",day_off:"ปิดทำการ",always_on:"เปิด 24 ชั่วโมง",closed:"ปิด",open:"เปิด",see_all:"ดูทั้งหมด",monday:"วันจันทร์",tuesday:"วันอังคาร",wednesday:"วันพุธ",thursday:"วันพฤหัสบดี",friday:"วันศุกร์",saturday:"วันเสาร์",sunday:"วันอาทิตย์",no_reviews_yet:"เป็นคนแรกที่รีวิว",reviews_on:"รีวิวบน",hide_reviews:"ซ่อนรีวิว",show_reviews:"แสดงรีวิว",review_image:"รูปรีวิว",business_image:"รูปธุรกิจ",image:"รูปภาพ",previous_slide:"สไลด์ก่อนหน้า",next_slide:"สไลด์ถัดไป",powered_by:"ขับเคลื่อนโดย"},Vt={from:"từ",google_rating:"Đánh giá Google",show_more:"Xem thêm",show_less:"Thu gọn",review:"đánh giá",reviews:"đánh giá",verified:"Đã xác minh",by:"bởi",write_review:"Viết đánh giá",load_more:"Tải thêm",based_on:"Dựa trên",ai_summary:"Tóm tắt AI",be_first_review:"Hãy là người đầu tiên viết đánh giá",work_time:"Giờ mở cửa",day_off:"Đóng cửa",always_on:"Mở cửa 24 giờ",closed:"Đóng cửa",open:"Mở cửa",see_all:"Xem tất cả",monday:"Thứ Hai",tuesday:"Thứ Ba",wednesday:"Thứ Tư",thursday:"Thứ Năm",friday:"Thứ Sáu",saturday:"Thứ Bảy",sunday:"Chủ Nhật",no_reviews_yet:"Hãy là người đầu tiên đánh giá",reviews_on:"đánh giá về",hide_reviews:"Ẩn đánh giá",show_reviews:"Hiện đánh giá",review_image:"Hình ảnh đánh giá",business_image:"Hình ảnh doanh nghiệp",image:"hình ảnh",previous_slide:"Slide trước",next_slide:"Slide tiếp theo",powered_by:"Được hỗ trợ bởi"},Wt={from:"dan",google_rating:"Google sharhlari",show_more:"Ko'proq ko'rsatish",show_less:"Kamroq ko'rsatish",review:"sharh",reviews:"sharhlar",verified:"Tasdiqlangan",by:"tomonidan",write_review:"Sharh qoldiring",load_more:"Ko'proq yuklash",based_on:"Asosida",ai_summary:"AI xulosasi",be_first_review:"Birinchi bo'lib sharh yozing",work_time:"Ish vaqti",day_off:"Dam olish kuni",always_on:"24 soat ochiq",closed:"Yopiq",open:"Ochiq",see_all:"Hammasini ko'rish",monday:"Dushanba",tuesday:"Seshanba",wednesday:"Chorshanba",thursday:"Payshanba",friday:"Juma",saturday:"Shanba",sunday:"Yakshanba",no_reviews_yet:"Birinchi bo'lib baholang",reviews_on:"haqida sharhlar",hide_reviews:"Sharhlarni yashirish",show_reviews:"Sharhlarni ko'rsatish",review_image:"Sharh rasmi",business_image:"Biznes rasmi",image:"rasm",previous_slide:"Oldingi slayd",next_slide:"Keyingi slayd",powered_by:"Ishlab chiqaruvchi"},Gt={from:"alates",google_rating:"Google'i arvustused",show_more:"Näita rohkem",show_less:"Näita vähem",review:"arvustus",reviews:"arvustused",verified:"Kinnitatud",by:"autor",write_review:"Jäta arvustus",load_more:"Laadi rohkem",based_on:"Põhineb",ai_summary:"Tehisintellekti kokkuvõte",be_first_review:"Ole esimene, kes kirjutab arvustuse",work_time:"Lahtiolekuajad",day_off:"Suletud",always_on:"Avatud ööpäevaringselt",closed:"Suletud",open:"Avatud",see_all:"Vaata kõiki",monday:"Esmaspäev",tuesday:"Teisipäev",wednesday:"Kolmapäev",thursday:"Neljapäev",friday:"Reede",saturday:"Laupäev",sunday:"Pühapäev",no_reviews_yet:"Ole esimene, kes hindab",reviews_on:"arvustused kohta",hide_reviews:"Peida arvustused",show_reviews:"Näita arvustused",review_image:"Arvustuse pilt",business_image:"Ettevõtte pilt",image:"pilt",previous_slide:"Eelmine slaid",next_slide:"Järgmine slaid",powered_by:"Teenust pakub"},Zt={from:"od",google_rating:"Recenzie Google",show_more:"Zobraziť viac",show_less:"Zobraziť menej",review:"recenzia",reviews:"recenzií",verified:"Overené",by:"od",write_review:"Napísať recenziu",load_more:"Načítať viac",based_on:"Na základe",ai_summary:"Zhrnutie AI",be_first_review:"Buďte prvý, kto napíše recenziu",work_time:"Otváracie hodiny",day_off:"Zatvorené",always_on:"Otvorené 24 hodín",closed:"Zatvorené",open:"Otvorené",see_all:"Zobraziť všetko",monday:"Pondelok",tuesday:"Utorok",wednesday:"Streda",thursday:"Štvrtok",friday:"Piatok",saturday:"Sobota",sunday:"Nedeľa",no_reviews_yet:"Buďte prvý, kto napíše recenziu",reviews_on:"recenzií na",hide_reviews:"Skryť recenzie",show_reviews:"Zobraziť recenzie",review_image:"Obrázok recenzie",business_image:"Obrázok firmy",image:"obrázok",previous_slide:"Predchádzajúci snímok",next_slide:"Ďalší snímok",powered_by:"Poháňané"},qt={en:ct,es:pt,pt:ht,de:ut,fr:mt,it:gt,nl:wt,da:vt,sv:ft,no:xt,pl:bt,tr:yt,ru:_t,uk:$t,bg:St,el:kt,ja:Ct,zh:Nt,sl:Tt,ar:Rt,hu:It,fi:At,lt:Lt,is:jt,he:Mt,ro:zt,cs:Pt,lv:Et,nb:Ot,hr:Bt,sr:Ut,id:Ht,ko:Dt,th:Ft,vi:Vt,uz:Wt,et:Gt,sk:Zt},Kt=Object.freeze(Object.defineProperty({__proto__:null,ar:Rt,bg:St,cs:Pt,da:vt,de:ut,default:qt,el:kt,en:ct,es:pt,et:Gt,fi:At,fr:mt,he:Mt,hr:Bt,hu:It,id:Ht,is:jt,it:gt,ja:Ct,ko:Dt,lt:Lt,lv:Et,nb:Ot,nl:wt,no:xt,pl:bt,pt:ht,ro:zt,ru:_t,sk:Zt,sl:Tt,sr:Ut,sv:ft,th:Ft,tr:yt,uk:$t,uz:Wt,vi:Vt,zh:Nt},Symbol.toStringTag,{value:"Module"}));function Xt(){return Shopify.locale}const Yt=D(null),Jt=({children:e,defaultLocale:i="en"})=>{const t=Xt();return V(Yt.Provider,{value:{t:e=>{let r=t;if(r){const e=ke(r);r=e in Kt?e:void 0}return(Kt[r]||Kt[i])[e]??""},locale:t||i},children:e})},Qt=()=>{const e=pe(Yt);if(!e)throw new Error("useTranslation must be used within a LocalizationProvider");return e},er=He("img")`
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
    height: 100%;
`,ir=({src:e,className:i,alt:t})=>V(er,{className:i,width:"100%",height:"100%",loading:"lazy",alt:t,src:e}),tr=He("button")`
    display: flex;
    padding: 10px 15px;
    justify-content: center;
    white-space: nowrap;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    transition: 0.3s ease-out all;
    cursor: pointer;
    font-family: inherit;
    &::after {
        content: attr(data-content);
    }
    &:hover {
        opacity: 0.8;
    }
`,rr=({className:e,children:i,content:t,...r})=>V(tr,{"aria-label":t,"data-content":t,type:"button",className:e,...r,children:i}),nr=He("header")`
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
    padding: 16px;
    border-radius: 24px;
    background: ${e=>e.theme.background};
    ${e=>e.$hasSolidShadow&&`\n            border-right: 8px solid ${e.theme.solidShadow};\n            border-bottom: 8px solid ${e.theme.solidShadow};\n        `};
`,or=He("div")`
    max-width: 100%;
    min-width: 0;
`,ar=({contentHeader:e,actionButton:i,solidShadow:t,className:r})=>V(nr,{$hasSolidShadow:t,className:Vi(r,"reputon-reviews-head"),children:[V(or,{children:e}),i]}),lr=He(ar)`
    @container wrapper (max-width:${e=>e.theme.media.mobile}px) {
        margin-left: 0px;
        margin-right: 0px;
        flex-direction: column;
        align-items: start;
    }
`,sr=He(ir)`
    width: 50px;
    height: 50px;
    min-width: 50px;
    border-radius: 100px;
`,dr=He(Qi.Content)`
    gap: 2px;
`,cr=He(Qi.ReviewsText)`
    font-size: 14px;
    line-height: 19px;
    margin-top: 0;
    font-weight: 500px;
    color: ${e=>e.theme.noReviewsWidget.colorDescription};
`,pr=He(Qi.Name)`
    color: ${e=>e.theme.noReviewsWidget.colorName};
    & a:hover {
        text-decoration: underline;
    }
`,hr=He(Qi.Rating)`
    color: ${e=>e.theme.noReviewsWidget.colorIcons};
`,ur=He(rr)`
    color: ${e=>e.theme.noReviewsWidget.colorLeaveReview};
    background: ${e=>e.theme.noReviewsWidget.backgroundLeaveReview};
    align-self: center;
    @container wrapper (max-width:${e=>e.theme.media.mobile}px) {
        width: 100%;
        text-align: center;
    }
`,mr=He(dt)`
    @container wrapper (max-width:${e=>e.theme.media.mobile}px) {
        width: 100%;
    }
`,gr=He("div")`
    width: 17px;
    height: 17px;
    color: ${e=>e.theme.hoverStarsColor};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}
`,wr=He(Qi.RatingIcons)`
    gap: 4px;
    color: ${e=>e.theme.noReviewsWidget.colorIcons};
`,vr=({writeReviewUrl:e,imageUrl:i,url:t,name:r,ratingType:n,emojiType:o,solidShadow:a})=>{const{t:l}=Qt(),{handleMouseEnterIcon:s,handleMouseLeaveIcon:d,icons:c}=Di();return V(lr,{solidShadow:a,actionButton:V(mr,{url:e,label:l("write_review"),children:V(ur,{className:"reputon-bt reputon-link reputon-leave-review editable",content:l("write_review")})}),contentHeader:V(Qi,{children:V(Qi.Container,{icon:i?V(Qi.Icon,{children:V(dt,{url:t,label:`${r} ${l("reviews")}`,children:V(sr,{src:i,alt:l("business_image")})})}):void 0,content:V(dr,{name:V(pr,{children:V(dt,{inherit:!0,url:t,label:`${r} ${l("reviews")}`,children:r})}),rating:V(dt,{url:e,label:l("write_review"),children:V(hr,{children:V(wr,{children:c.map((e,i)=>V(gr,{$ratingType:n,onMouseEnter:s(i),onMouseLeave:d,children:V(lt,{ratingType:n,emojiType:o,fill:e})},i))})})}),reviewsText:V(cr,{children:l("no_reviews_yet")||"Be the first to review"})})})})})},fr=He(ar)`
    padding: 8px;
    ${e=>e.solidShadow&&`\n            border-right: 4px solid ${e.theme.solidShadow};\n            border-bottom: 4px solid ${e.theme.solidShadow};\n        `};
    @container wrapper (max-width:${e=>e.theme.media.mobile}px) {
        margin-left: 0px;
        margin-right: 0px;
        flex-direction: column;
        align-items: start;
    }
`,xr=He(Qi.Icon)`
    width: 32px;
    height: 32px;
    min-width: 32px;
`,br=He(ir)`
    border-radius: 100px;
`,yr=He(Qi.Content)`
    gap: 2px;
`,_r=He(Qi.ReviewsText)`
    font-size: 10px;
    line-height: 14px;
    margin-top: 0;
    font-weight: 500;
    color: ${e=>e.theme.noReviewsWidget.colorDescription};
`,$r=He(Qi.Name)`
    font-size: 12px;
    line-height: 16px;
    height: 16px;
    color: ${e=>e.theme.noReviewsWidget.colorName};
    & a:hover {
        text-decoration: underline;
    }
`,Sr=He(Qi.Rating)`
    color: ${e=>e.theme.noReviewsWidget.colorIcons};
`,kr=He(rr)`
    font-size: 12px;
    line-height: 16px;
    padding: 8px 16px;
    color: ${e=>e.theme.noReviewsWidget.colorLeaveReview};
    background: ${e=>e.theme.noReviewsWidget.backgroundLeaveReview};
    align-self: center;
    @container wrapper (max-width:${e=>e.theme.media.mobile}px) {
        width: 100%;
        text-align: center;
    }
`,Cr=He(dt)`
    @container wrapper (max-width:${e=>e.theme.media.mobile}px) {
        width: 100%;
    }
`,Nr=He("div")`
    color: ${e=>e.theme.hoverStarsColor};
    height: 12px;
    line-height: 12px;
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}
`,Tr=He(Qi.RatingIcons)`
    gap: 2px;
    height: 16px;
    color: ${e=>e.theme.summary.noReviewsStarsColor};
`,Rr=He(lt)`
    width: 12px;
    height: 12px;
`,Ir=({writeReviewUrl:e,imageUrl:i,url:t,name:r,ratingType:n,emojiType:o,solidShadow:a})=>{const{t:l}=Qt(),{handleMouseEnterIcon:s,handleMouseLeaveIcon:d,icons:c}=Di();return V(fr,{solidShadow:a,actionButton:V(Cr,{url:e,label:l("write_review"),children:V(kr,{className:"reputon-bt reputon-link reputon-leave-review editable",content:l("write_review")})}),contentHeader:V(Qi,{children:V(Qi.Container,{icon:i?V(dt,{url:t,label:`${r} ${l("reviews")}`,children:V(xr,{children:V(br,{src:i,alt:l("business_image")})})}):void 0,content:V(yr,{name:V($r,{children:V(dt,{inherit:!0,url:t,label:`${r} ${l("reviews")}`,children:r})}),rating:V(dt,{url:e,label:l("write_review"),children:V(Sr,{children:V(Tr,{children:c.map((e,i)=>V(Nr,{$ratingType:n,onMouseEnter:s(i),onMouseLeave:d,children:V(Rr,{ratingType:n,emojiType:o,fill:e})},i))})})}),reviewsText:V(_r,{children:l("no_reviews_yet")||"Be the first to review"})})})})})},Ar=({isCompact:e,...i})=>V(e?Ir:vr,{...i}),Lr=()=>{const{isSticky:e}=Nw(ii),[i,t]=oe(()=>"hidden"!==window.sessionStorage.getItem(Ke));return{hideWidgets:()=>{window.sessionStorage.setItem(Ke,"hidden"),t(!1)},show:!e||i}},jr=He("div")`
    --scale: 1;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    font-family: ${({theme:e})=>e.fontFamily};
    border-radius: 2px;
    margin: 0 auto;
    line-height: normal;
    padding: ${({parallax:e,$noPadding:i})=>e||i?"0px":"15px 8px"};
    transform: scale(var(--scale));
    transform-origin: ${e=>`${"right"!==e.positionX?"left":"right"} ${e.positionY}`};
    ${e=>e.parallax&&"\n        position: fixed;\n        z-index: 999;\n      "};
    ${e=>"center"===e.positionX?"left: 50%; transform: scale(var(--scale)) translate(-50%);":e.positionX?`${e.positionX}: 15px;`:""};
    ${e=>e.positionY?`${e.positionY}: 15px;`:""};
    @media (max-width: ${e=>e.theme.media.mobile}px) {
        ${e=>e.parallax&&"\n        --scale: 0.7;\n      "};
    }
`,Mr=({children:e,className:i,noPadding:t=!1})=>{const{isSticky:r,vertical:n,horizontal:o}=Nw("wrapper"),{widgetId:a}=pe(Bi),{show:l}=Lr();return(!r||l)&&V(jr,{id:a,parallax:r,positionY:r?n:void 0,positionX:r?o:void 0,className:i,$noPadding:t,children:e})},zr=5e3,Pr={TOP:"top",IN_CARD:"inCard",LEFT:"left",NONE:"none"},Er={CAROUSEL:"carousel",ROTATOR:"rotator",CAROUSEL_COMPACT:"carousel_compact"},Or="carousel-fluid",Br="carousel-fluid-with-header",Ur="carousel-fluid-with-left",Hr="carousel-fluid-with-in-card",Dr="rotator",Fr="rotator-with-header",Vr="carousel",Wr="carousel-header-in-card",Gr="carousel-header-top",Zr="carousel-header-left",qr="carousel-compact",Kr="carousel-compact-in-card",Xr="carousel-compact-top",Yr="carousel-compact-left",Jr="carousel-compact-fluid",Qr="carousel-compact-fluid-in-card",en="carousel-compact-fluid-top",tn="carousel-compact-fluid-left",rn="header",nn="inCard",on="none",an=({className:e})=>V("svg",{fill:"none",viewBox:"0 0 56 19",className:e,children:[V("g",{"clip-path":"url(#clip0_1099_1358)",children:[V("path",{d:"M23.8307 9.90631C23.8307 12.5354 21.7739 14.4728 19.2498 14.4728C16.7257 14.4728 14.6689 12.5354 14.6689 9.90631C14.6689 7.25867 16.7257 5.33984 19.2498 5.33984C21.7739 5.33984 23.8307 7.25867 23.8307 9.90631ZM21.8254 9.90631C21.8254 8.26337 20.6334 7.13926 19.2498 7.13926C17.8663 7.13926 16.6742 8.26337 16.6742 9.90631C16.6742 11.5328 17.8663 12.6734 19.2498 12.6734C20.6334 12.6734 21.8254 11.5307 21.8254 9.90631Z",fill:"#EA4335"}),V("path",{d:"M33.7125 9.90631C33.7125 12.5354 31.6558 14.4728 29.1317 14.4728C26.6075 14.4728 24.5508 12.5354 24.5508 9.90631C24.5508 7.26073 26.6075 5.33984 29.1317 5.33984C31.6558 5.33984 33.7125 7.25867 33.7125 9.90631ZM31.7073 9.90631C31.7073 8.26337 30.5152 7.13926 29.1317 7.13926C27.7481 7.13926 26.5561 8.26337 26.5561 9.90631C26.5561 11.5328 27.7481 12.6734 29.1317 12.6734C30.5152 12.6734 31.7073 11.5307 31.7073 9.90631Z",fill:"#FBBC05"}),V("path",{d:"M43.1838 5.61573V13.814C43.1838 17.1863 41.195 18.5637 38.8438 18.5637C36.6306 18.5637 35.2985 17.0834 34.7962 15.8728L36.542 15.146C36.8529 15.8893 37.6147 16.7663 38.8417 16.7663C40.3467 16.7663 41.2794 15.8378 41.2794 14.0898V13.4331H41.2094C40.7606 13.9869 39.8959 14.4707 38.8047 14.4707C36.5215 14.4707 34.4297 12.4819 34.4297 9.92278C34.4297 7.34514 36.5215 5.33984 38.8047 5.33984C39.8938 5.33984 40.7585 5.82367 41.2094 6.36102H41.2794V5.61779H43.1838V5.61573ZM41.4215 9.92278C41.4215 8.31484 40.3488 7.13926 38.9838 7.13926C37.6003 7.13926 36.4412 8.31484 36.4412 9.92278C36.4412 11.5143 37.6003 12.6734 38.9838 12.6734C40.3488 12.6734 41.4215 11.5143 41.4215 9.92278Z",fill:"#4285F4"}),V("path",{d:"M46.3231 0.8125V14.1949H44.3672V0.8125H46.3231Z",fill:"#34A853"}),V("path",{d:"M53.9457 11.4113L55.5022 12.449C54.9998 13.1922 53.7893 14.4728 51.6975 14.4728C49.1034 14.4728 47.166 12.4675 47.166 9.90631C47.166 7.19073 49.1198 5.33984 51.4731 5.33984C53.8428 5.33984 55.0019 7.22573 55.3807 8.24484L55.5887 8.76367L49.4843 11.2919C49.9516 12.2081 50.6784 12.6754 51.6975 12.6754C52.7187 12.6754 53.4269 12.1731 53.9457 11.4113ZM49.1548 9.76837L53.2354 8.07396C53.011 7.50367 52.3357 7.10631 51.541 7.10631C50.5219 7.10631 49.1034 8.00602 49.1548 9.76837Z",fill:"#EA4335"}),V("path",{d:"M7.26569 8.72179V6.78444H13.7942C13.858 7.12209 13.891 7.5215 13.891 7.95385C13.891 9.40738 13.4936 11.2047 12.213 12.4853C10.9675 13.7824 9.37598 14.4741 7.26775 14.4741C3.3601 14.4741 0.0742188 11.2912 0.0742188 7.38356C0.0742188 3.47591 3.3601 0.292969 7.26775 0.292969C9.42951 0.292969 10.9695 1.1412 12.1266 2.24679L10.7595 3.61385C9.92981 2.83562 8.80569 2.23032 7.26569 2.23032C4.41216 2.23032 2.1804 4.53003 2.1804 7.38356C2.1804 10.2371 4.41216 12.5368 7.26569 12.5368C9.11657 12.5368 10.1707 11.7936 10.846 11.1183C11.3936 10.5706 11.7539 9.78826 11.896 8.71973L7.26569 8.72179Z",fill:"#4285F4"})]}),V("defs",{children:V("clipPath",{id:"clip0_1099_1358",children:V("rect",{width:"56",height:"18.9412",fill:"white",transform:"translate(0 0.195312)"})})})]}),ln=He(an)`
    min-width: ${({$isWide:e})=>e?"56px":"27px"};
    margin-left: ${({$isWide:e})=>e&&"4px"};
    height: ${({$isWide:e})=>e?"19px":"9px"};
    max-height: 100%;
    visibility: visible;
    filter: ${e=>"black"===e.theme.theme?"brightness(100)":""};
`,sn=({value:e,locale:i})=>new Intl.NumberFormat(i,{minimumFractionDigits:0,maximumFractionDigits:0}).format(e),dn=He(ar)`
    margin: 0;
    @container wrapper (max-width:${Ye}px) {
        margin: 0px;
        flex-direction: column;
        align-items: normal;
    }
`,cn=He(ir)`
    border-radius: 100px;
`,pn=He(Qi.ReviewsText)`
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
`,hn=He(({$isEditable:e,$content:i,...t})=>V(Qi.Name,{...t,isEditable:e,content:i}))`
    color: ${e=>e.theme.widgets.carousel.colorSellerName};
    & a:hover {
        text-decoration: underline;
    }
`,un=He(Qi.Rating)`
    color: ${e=>e.theme.widgets.carousel.colorSellerStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}

    ${({$ratingType:e,theme:i})=>"emoji"===e&&`\n            color: ${i.widgets.carousel.colorSellerName};\n        `}
`,mn=He(rr)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    align-self: center;
    @container wrapper (max-width:${Ye}px) {
        width: 100%;
        text-align: center;
    }
`,gn=He(dt)`
    @container wrapper (max-width:${Ye}px) {
        width: 100%;
    }
`,wn=({imageUrl:e,url:i,name:t,rating:r,ratingIcons:n,reviewsNumber:o,writeReviewUrl:a,options:l,isEditableName:s})=>{const{t:d,locale:c}=Qt(),{hasSolidShadow:p,writeReviewEnabled:h,emojiType:u,ratingType:m}=l;return V(dn,{solidShadow:p,actionButton:h&&a&&V(gn,{label:d("write_review"),url:a,children:V(mn,{label:d("write_review"),className:"reputon-bt reputon-link reputon-leave-review editable",content:d("write_review")})}),contentHeader:V(Qi,{children:V(Qi.Container,{icon:e?V(dt,{url:i,label:`${t} ${d("reviews")}`,children:V(Qi.Icon,{children:V(cn,{src:e,alt:d("business_image")})})}):void 0,content:V(Qi.Content,{name:V(dt,{inherit:!0,url:i,label:`${t} ${d("reviews")}`,children:V(hn,{$isEditable:s,$content:t,children:t})}),rating:V(dt,{url:i,label:`${t} ${d("reviews")}`,children:V(un,{$ratingType:m,children:[V(Qi.Count,{children:Se(r)}),V(Qi.RatingIcons,{children:n?.map((e,i)=>V(lt,{ratingType:m,emojiType:u,fill:e},i))})]})}),reviewsText:V(pn,{children:[V(sn,{value:o,locale:c})," ",d("reviews_on"),V(ln,{$isWide:!0})]})})})})})},vn=He(ar)`
    margin: 0;
    padding: 8px;
    ${e=>e.solidShadow&&`\n            border-right: 4px solid ${e.theme.solidShadow};\n            border-bottom: 4px solid ${e.theme.solidShadow};\n        `};
    @container wrapper (max-width:${439}px) {
        margin: 0px;
        flex-direction: column;
        align-items: normal;
    }
`,fn=He(Qi.Icon)`
    width: 32px;
    height: 32px;
    min-width: 32px;
`,xn=He(ir)`
    border-radius: 100px;
`,bn=He(Qi.Content)`
    gap: 2px;
`,yn=He(Qi.ReviewsText)`
    font-size: 10px;
    line-height: 14px;
    font-weight: 500;
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
`,_n=He(({$isEditable:e,$content:i,...t})=>V(Qi.Name,{...t,isEditable:e,content:i}))`
    font-size: 12px;
    line-height: 16px;
    height: 16px;
    color: ${e=>e.theme.widgets.carousel.colorSellerName};
    & a:hover {
        text-decoration: underline;
    }
`,$n=He(Qi.Rating)`
    align-items: center;
    color: ${e=>e.theme.widgets.carousel.colorSellerStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}

    ${({$ratingType:e,theme:i})=>"emoji"===e&&`\n            color: ${i.widgets.carousel.colorSellerName};\n        `}
`,Sn=He(Qi.Count)`
    font-size: 14px;
    line-height: 16px;
    height: 16px;
`,kn=He(Qi.RatingIcons)`
    height: 12px;
`,Cn=He(lt)`
    width: 12px;
    height: 12px;
`,Nn=He(rr)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    align-self: center;
    font-size: 12px;
    padding: 10px 16px;
    @container wrapper (max-width: ${439}px) {
        width: 100%;
        text-align: center;
    }
`,Tn=He(dt)`
    @container wrapper (max-width:${439}px) {
        width: 100%;
    }
`,Rn=He(ln)`
    height: 16px;
    min-width: 48px;
`,In=({imageUrl:e,url:i,name:t,rating:r,ratingIcons:n,reviewsNumber:o,writeReviewUrl:a,options:l,isEditableName:s})=>{const{t:d,locale:c}=Qt(),{hasSolidShadow:p,writeReviewEnabled:h,emojiType:u,ratingType:m}=l;return V(vn,{solidShadow:p,actionButton:h&&a&&V(Tn,{label:d("write_review"),url:a,children:V(Nn,{label:d("write_review"),className:"reputon-bt reputon-link reputon-leave-review editable",content:d("write_review")})}),contentHeader:V(Qi,{children:V(Qi.Container,{icon:e?V(dt,{url:i,label:`${t} ${d("reviews")}`,children:V(fn,{children:V(xn,{src:e,alt:d("business_image")})})}):void 0,content:V(bn,{name:V(dt,{inherit:!0,url:i,label:`${t} ${d("reviews")}`,children:V(_n,{$isEditable:s,$content:t,children:t})}),rating:V(dt,{url:i,label:`${t} ${d("reviews")}`,children:V($n,{$ratingType:m,children:[V(Sn,{children:Se(r)}),V(kn,{children:n?.map((e,i)=>V(Cn,{ratingType:m,emojiType:u,fill:e},i))})]})}),reviewsText:V(yn,{children:[V(sn,{value:o,locale:c})," ",d("reviews_on"),V(Rn,{$isWide:!0})]})})})})})},An=({isCompact:e,...i})=>V(e?In:wn,{...i});function Ln({summaryCard:e,reviews:i,logoCard:t}){const r=[];return i&&0!==i.length?(t&&r.push("logoCard"),e&&r.push("summaryCard"),[...r,...i]):[]}const jn=(e,i)=>i/5*(11-e),Mn=(e,i)=>{const t=de(()=>(e=>{if(!e)return[];const i=e?.reduce((e,i)=>i?.images?[...e,...i.images]:e,[]);return i})(e),[e]),r=de(()=>(e=>{const i=[];for(;e.length>=4&&i.length<4||e.length<4&&i.length<e.length;){const t=e[Math.floor(Math.random()*e.length)];i.includes(t)||i.push(t)}return i})(t),[t]),n=de(()=>i?[...r,...t]:[...t],[r,t,i]);return{summaryImages:r,aggregatedImages:n}},zn=(e,i)=>{const[t,r]=oe(!1),[n,o]=oe(null),a=de(()=>n?.content?n?.isAi?e?.findIndex(e=>e.thumbnailUrl===n.content):e?.findLastIndex(e=>e.thumbnailUrl===n?.content):-1,[n,e]);return{open:t,setFullScreenImageOptions:(e,t=!1)=>{r(!0),i&&i(),o({content:e,isAi:t})},handleClosePopup:e=>{r(!1),e&&e()},popupContent:n,initialIndex:a}},Pn=300,En=(e,i)=>(e%i+i)%i,On=(e,i)=>"hidden"===i?e<0?-79.5:79.5:3===Math.abs(e)?61.5*Math.sign(e):2===Math.abs(e)?43.5*Math.sign(e):1===Math.abs(e)?23.5*Math.sign(e):0,Bn=D(null),Un=e=>e?.selectedSnap()??0,Hn=({children:e})=>{const i=se(void 0),t=se(0),r=se(0),[n,o]=oe(0),a=ce(({emblaApi:e})=>{if(i.current=e,!e)return;const n=Un(e);t.current=n,r.current=n,o(n);const a=()=>{const i=Un(e),n=((e,i,t)=>{if(t<=0)return i-e;const r=i-e,n=t/2;return r>n?r-t:r<-n?r+t:r})(t.current,i,(e=>e?.slideNodes().length??0)(e));t.current=i,r.current+=n,o(r.current)};return e.on("select",a),()=>{e.off("select",a),i.current===e&&(i.current=void 0)}},[]),l=ce(e=>{const t=i.current;if(t&&0!==e){t.plugins().autoplay?.stop();for(let i=0;i<Math.abs(e);i+=1)e>0?t.goToNext():t.goToPrev()}else o(i=>i+e)},[]),s=de(()=>({activeSlide:n,initSwiper:a,goByOffset:l}),[n,l,a]);return V(Bn.Provider,{value:s,children:e})},Dn=()=>{const e=pe(Bn);if(!e)throw new Error("useDotNavigation must be used within DotNavigationProvider");return e},Fn=He("button")`
    position: absolute;
    left: 50%;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${24}px;
    height: ${12}px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    opacity: ${({$visible:e})=>e?1:0};
    visibility: ${({$visible:e})=>e?"visible":"hidden"};
    pointer-events: ${({$visible:e})=>e?"auto":"none"};
    transform: translate(-50%, -50%) translateX(${({$slot:e})=>e}px);
    transition:
        transform ${Pn}ms ease,
        opacity ${Pn}ms ease,
        visibility 0s linear ${({$visible:e})=>e?0:Pn}ms;

    &:focus {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid #747474;
        outline-offset: 2px;
    }

    @media (hover: hover) and (pointer: fine) {
        &:hover > span {
            width: ${19}px;
            height: ${12}px;
            background-color: #747474;
            border-radius: 99px;
        }
    }
`,Vn=He("div")`
    position: relative;
    width: ${131}px;
    height: ${12}px;
`,Wn=({renderDotVisual:e})=>{const{activeSlide:i,goByOffset:t}=Dn(),r=En(i,13),n=Array.from({length:13},(e,i)=>({id:i}));return V(Vn,{children:n.map(i=>{const n=((e,i,t=13)=>{const r=Math.floor(t/2);return En(e-i+r,t)-r})(i.id,r),o=(e=>{const i=Math.abs(e);return 0===i?"center":3===i?"edge":i<3?"default":"hidden"})(n),a="hidden"!==o,l="center"===o;return V(Fn,{$slot:On(n,o),$visible:a,type:"button","aria-label":`Go to slide ${i.id+1}`,"aria-current":l?"true":void 0,tabIndex:a?0:-1,onClick:()=>{t(n)},children:e(o)},i.id)})})},Gn=He("span")`
    display: block;
    width: ${({$variant:e})=>{return"edge"===(i=e)?8:"center"===i?19:12;var i}}px;
    height: ${({$variant:e})=>"edge"===e?8:12}px;
    border-radius: 99px;
    background-color: #dce0e2;
    transition:
        width ${Pn}ms ease,
        opacity ${Pn}ms ease,
        background-color ${Pn}ms ease,
        border-radius ${Pn}ms ease;

    ${({$variant:e})=>"edge"===e&&"\n        background-color: #dce0e280;\n    "}

    ${({$variant:e})=>"center"===e&&"\n        background-color: #747474;\n        border-radius: 99px;\n    "}

    ${({$variant:e})=>"hidden"===e&&"\n        opacity: 0;\n    "}
`,Zn=(e=10)=>{const[i,t]=oe(!1);return ae(()=>{setTimeout(()=>{t(!0)},e)},[]),i},qn=({className:e,...i})=>V("svg",{className:e,...i,width:"12",height:"21",viewBox:"0 0 12 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:V("path",{d:"M11.3609 2.35793C11.7134 2.03208 11.7338 1.48174 11.4063 1.13071C11.081 0.781918 10.5349 0.761697 10.1846 1.08547L0 10.5L10.1846 19.9145C10.5349 20.2383 11.081 20.2181 11.4063 19.8693C11.7338 19.5183 11.7134 18.9679 11.3609 18.6421L2.553 10.5L11.3609 2.35793Z",fill:"currentColor"})}),Kn=({className:e,...i})=>V("svg",{className:e,...i,width:"12",height:"21",viewBox:"0 0 12 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:V("path",{d:"M0.639105 2.35793C0.286604 2.03208 0.266229 1.48174 0.59367 1.13071C0.919025 0.781918 1.4651 0.761697 1.81536 1.08547L12 10.5L1.81536 19.9145C1.4651 20.2383 0.919025 20.2181 0.59367 19.8693C0.266229 19.5183 0.286605 18.9679 0.639105 18.6421L9.447 10.5L0.639105 2.35793Z",fill:"currentColor"})});function Xn(e,i){for(var t in i)e[t]=i[t];return e}function Yn(e,i){for(var t in e)if("__source"!==t&&!(t in i))return!0;for(var r in i)if("__source"!==r&&e[r]!==i[r])return!0;return!1}function Jn(e,i){this.props=e,this.context=i}(Jn.prototype=new y).isPureReactComponent=!0,Jn.prototype.shouldComponentUpdate=function(e,i){return Yn(this.props,e)||Yn(this.state,i)};var Qn=i.__b;i.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Qn&&Qn(e)};var eo="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function io(e){function i(i){var t=Xn({},i);return delete t.ref,e(t,i.ref||null)}return i.$$typeof=eo,i.render=e,i.prototype.isReactComponent=i.__f=!0,i.displayName="ForwardRef("+(e.displayName||e.name)+")",i}var to=i.__e;i.__e=function(e,i,t,r){if(e.then)for(var n,o=i;o=o.__;)if((n=o.__c)&&n.__c)return null==i.__e&&(i.__e=t.__e,i.__k=t.__k),n.__c(e,i);to(e,i,t,r)};var ro=i.unmount;function no(e,i,t){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(e){"function"==typeof e.__c&&e.__c()}),e.__c.__H=null),null!=(e=Xn({},e)).__c&&(e.__c.__P===t&&(e.__c.__P=i),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(e){return no(e,i,t)})),e}function oo(e,i,t){return e&&t&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(e){return oo(e,i,t)}),e.__c&&e.__c.__P===i&&(e.__e&&t.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=t)),e}function ao(){this.__u=0,this.o=null,this.__b=null}function lo(e){var i=e.__&&e.__.__c;return i&&i.__a&&i.__a(e)}function so(){this.i=null,this.l=null}i.unmount=function(e){var i=e.__c;i&&(i.__z=!0),i&&i.__R&&i.__R(),i&&32&e.__u&&(e.type=null),ro&&ro(e)},(ao.prototype=new y).__c=function(e,i){var t=i.__c,r=this;null==r.o&&(r.o=[]),r.o.push(t);var n=lo(r.__v),o=!1,a=function(){o||r.__z||(o=!0,t.__R=null,n?n(s):s())};t.__R=a;var l=t.__P;t.__P=null;var s=function(){if(! --r.__u){if(r.state.__a){var e=r.state.__a;r.__v.__k[0]=oo(e,e.__c.__P,e.__c.__O)}var i;for(r.setState({__a:r.__b=null});i=r.o.pop();)i.__P=l,i.forceUpdate()}};r.__u++||32&i.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(a,a)},ao.prototype.componentWillUnmount=function(){this.o=[]},ao.prototype.render=function(e,i){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=no(this.__b,t,r.__O=r.__P)}this.__b=null}var n=i.__a&&f(b,null,e.fallback);return n&&(n.__u&=-33),[f(b,null,i.__a?null:e.children),n]};var co=function(e,i,t){if(++t[1]===t[0]&&e.l.delete(i),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(t=e.i;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;e.i=t=t[2]}};function po(e){return this.getChildContext=function(){return e.context},e.children}function ho(e){var i=this,t=e.h;if(i.componentWillUnmount=function(){H(null,i.v),i.v=null,i.h=null},i.h&&i.h!==t&&i.componentWillUnmount(),!i.v){for(var r=i.__v;null!==r&&!r.__m&&null!==r.__;)r=r.__;i.h=t,i.v={nodeType:1,parentNode:t,childNodes:[],__k:{__m:r.__m},contains:function(){return!0},namespaceURI:t.namespaceURI,insertBefore:function(e,t){this.childNodes.push(e),i.h.insertBefore(e,t)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),i.h.removeChild(e)}}}H(f(po,{context:i.context},e.__v),i.v)}function uo(e,i){var t=f(ho,{__v:e,h:i});return t.containerInfo=i,t}(so.prototype=new y).__a=function(e){var i=this,t=lo(i.__v),r=i.l.get(e);return r[0]++,function(n){var o=function(){i.props.revealOrder?(r.push(n),co(i,e,r)):n()};t?t(o):o()}},so.prototype.render=function(e){this.i=null,this.l=new Map;var i=R(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&i.reverse();for(var t=i.length;t--;)this.l.set(i[t],this.i=[1,0,this.i]);return e.children},so.prototype.componentDidUpdate=so.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(i,t){co(e,t,i)})};var mo="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,go=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,wo=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,vo=/[A-Z0-9]/g,fo="undefined"!=typeof document,xo=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(e)};y.prototype.isReactComponent=!0,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(y.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(i){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:i})}})});var bo=i.event;i.event=function(e){return bo&&(e=bo(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var yo={configurable:!0,get:function(){return this.class}},_o=i.vnode;i.vnode=function(e){"string"==typeof e.type&&function(e){var i=e.props,t=e.type,r={},n=-1==t.indexOf("-");for(var o in i){var a=i[o];if(!("value"===o&&"defaultValue"in i&&null==a||fo&&"children"===o&&"noscript"===t||"class"===o||"className"===o)){var l=o.toLowerCase();"defaultValue"===o&&"value"in i&&null==i.value?o="value":"download"===o&&!0===a?a="":"translate"===l&&"no"===a?a=!1:"o"===l[0]&&"n"===l[1]?"ondoubleclick"===l?o="ondblclick":"onchange"!==l||"input"!==t&&"textarea"!==t||xo(i.type)?"onfocus"===l?o="onfocusin":"onblur"===l?o="onfocusout":wo.test(o)&&(o=l):l=o="oninput":n&&go.test(o)?o=o.replace(vo,"-$&").toLowerCase():null===a&&(a=void 0),"oninput"===l&&r[o=l]&&(o="oninputCapture"),r[o]=a}}"select"==t&&(r.multiple&&Array.isArray(r.value)&&(r.value=R(i.children).forEach(function(e){e.props.selected=-1!=r.value.indexOf(e.props.value)})),null!=r.defaultValue&&(r.value=R(i.children).forEach(function(e){e.props.selected=r.multiple?-1!=r.defaultValue.indexOf(e.props.value):r.defaultValue==e.props.value}))),i.class&&!i.className?(r.class=i.class,Object.defineProperty(r,"className",yo)):i.className&&(r.class=r.className=i.className),e.props=r}(e),e.$$typeof=mo,_o&&_o(e)};var $o=i.__r;i.__r=function(e){$o&&$o(e),e.__c};var So=i.diffed;i.diffed=function(e){So&&So(e);var i=e.props,t=e.__e;null!=t&&"textarea"===e.type&&"value"in i&&i.value!==t.value&&(t.value=null==i.value?"":i.value)};const ko=({className:e})=>V("svg",{xmlns:"http://www.w3.org/2000/svg",className:e,fill:"currentColor",viewBox:"0 0 512 512",children:V("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"})}),Co=Ue`
  from {
    opacity: 0;
  }
  to {
    opacity: .7;
  }

`,No=Ue`
  0% {
    opacity: 0;
    transform: scale(0.7);
  }

  80% {
    transform: scale(0.8);
  }

  100% {
    opacity: 1;
  }
`,To=Ue`
  0% {
    opacity: 0;
    transform: scale(0.7);
  }

  80% {
    transform: scale(1);
  }

  100% {
    opacity: 1;
  }
`,Ro=He("div")``,Io=He("div")`
    position: fixed;
    display: grid;
    grid-template-columns: 100%;
    align-items: center;
    justify-content: center;
    z-index: 99999;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    font-family: ${({theme:e})=>e.fontFamily};
`,Ao=He("div")`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: 0.7;
    animation: ${Co} 0.2s forwards;
`,Lo=He("div")`
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    animation: ${To} 0.3s forwards;
    @media (max-width: 400px) {
        transform: scale(0.8);
        animation: ${No} 0.3s forwards;
    }
`,jo=He("button")`
    position: absolute;
    top: 15px;
    right: 10px;
    width: 23px;
    height: 23px;
    color: #e2e2e2;
    background: none;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s;
    &:hover {
        opacity: 1;
    }
    z-index: 2;
`,Mo=({open:e,onClose:i,children:t,className:r,removeCloseIcon:n})=>e&&uo(V(Ro,{className:r,children:V(Io,{className:"reputon-modal",children:[V(Lo,{className:"reputon-modal-content",children:[!n&&V(jo,{type:"button","aria-label":"close modal",className:"reputon-modal-close",onClick:i,children:V(ko,{})}),t]}),V(Ao,{onClick:i,className:"reputon-modal-backdrop"})]})}),document.body),zo="\n    color: gray;\n    flex-shrink: 0;\n    width: 40px;\n    height: 40px;\n    cursor: pointer;\n    background: none;\n    & svg {\n        width: 100%;\n        height: 100%;\n    }\n",Po=He("button")`
    ${zo}
`,Eo=He("button")`
    ${zo}
    order: 2;
`,Oo=He("div")`
    position: relative;
    display: flex;
    gap: 20px;
    align-items: center;
    ${e=>`\n            @media (max-width: ${e.theme.media.mobile}px) {\n                gap: 0px;\n            }\n        `};
    margin: 0 auto;
    border-radius: 4px;
`,Bo=He("img")`
    position: absolute;
    width: auto;
    max-width: 99%;
    height: auto;
    max-height: 100%;
    top: 50%;
    left: 50%;
    object-fit: contain;
    transform: translate(-50%, -50%);
`,Uo=He("div")`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,Ho=He("div",io)`
    overflow: hidden;
    --slide-spacing: ${e=>e.$gap}px;
    container: swiper-wrapper / inline-size;
    height: 100%;
    width: 100%;
`,Do=He("div",io)`
    touch-action: pan-y pinch-zoom;
    margin-left: calc(var(--slide-spacing) * -1);
    display: grid;
    height: 100%;
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    ${e=>e.$responsive}
`,Fo=He("div")`
    min-width: 0;
    height: auto;
    padding-left: var(--slide-spacing);
`,Vo=He("div",io)`
    overflow: hidden;
    width: 100%;
`,Wo=He("div")`
    display: flex;
    touch-action: pan-y pinch-zoom;
    will-change: transform;
`,Go=He("div")`
    flex: 0 0 ${({$widthPercent:e=70})=>`${e}%`};
    min-width: 0;
    padding: 0 8px;
    position: relative;
`,Zo=He("div")``,qo="--slide-size",Ko="100%",Xo=(e,i)=>{e=e??[{breakpoint:1e5,slidesPerView:1}];const t=[...e].sort((e,i)=>i.breakpoint-e.breakpoint),{slidesPerView:r}=t[0],n=Math.min(r,i?.totalSlides||1/0),o=1===n?Ko:`calc(${Ko} / ${n})`,a=t.map(({breakpoint:e,slidesPerView:t})=>{const r=Math.min(t,i?.totalSlides||1/0);return`@container swiper-wrapper (max-width: ${e}px) {\n        ${qo}: ${1===r?Ko:`calc(${Ko} / ${r} + 0.5px)`};\n    }`});return{containerCss:[`${qo}: ${o};`,...a].join("\n    ")}},Yo=({emblaApi:e})=>{ae(()=>{if(e&&!1!==e.plugins().autoplay.options.active)try{e.plugins().autoplay?.play()}catch(i){}},[e])},Jo=({emblaApi:e,totalSlides:i,bufferSize:t=2})=>{const[r,n]=oe(()=>{const e=new Set;for(let t=0;t<Math.min(7,i);t++)e.add(t);return e}),o=ce(()=>{if(!e)return;if(i<=7)return void n(e=>{if(e.size===i)return e;const t=new Set;for(let r=0;r<i;r++)t.add(r);return t});const r=e.slidesInView(),o=new Set;for(const e of r)for(let r=-t;r<=t;r++){const t=((e+r)%i+i)%i;o.add(t)}n(e=>e.size===o.size&&[...o].every(i=>e.has(i))?e:o)},[e,i,t]);return ae(()=>{if(e)return o(),e.on("slidesinview",o),e.on("reinit",o),()=>{e.off("slidesinview",o),e.off("reinit",o)}},[e,o]),{isSlideActive:ce(e=>r.has(e),[r])}},Qo=({emblaApi:e,navigation:i})=>{ae(()=>{if(!e||!i)return;const t=document.querySelectorAll(i.next),r=document.querySelectorAll(i.prev),n=()=>{e.plugins().autoplay?.stop(),e.goToNext()},o=()=>{e.plugins().autoplay?.stop(),e.goToPrev()};return t?.forEach(e=>e.addEventListener("click",n)),r?.forEach(e=>e.addEventListener("click",o)),()=>{t?.forEach(e=>e.removeEventListener("click",n)),r?.forEach(e=>e.removeEventListener("click",o))}},[e,i])},ea=({emblaApi:e,onSlideChange:i})=>{ae(()=>(e?.on("select",i||(()=>{})),()=>e?.off("select",i||(()=>{}))),[e,i])};function ia(e){return function(e){return"[object Object]"===Object.prototype.toString.call(e)}(e)||Array.isArray(e)}function ta(e,i){const t=Object.keys(e),r=Object.keys(i);return t.length===r.length&&(JSON.stringify(Object.keys(e.breakpoints||{}))===JSON.stringify(Object.keys(i.breakpoints||{}))&&t.every(t=>{const r=e[t],n=i[t];return"function"==typeof r?`${r}`==`${n}`:ia(r)&&ia(n)?ta(r,n):r===n}))}function ra(e){return e.concat().sort((e,i)=>e.name>i.name?1:-1).map(e=>e.options)}function na(e){return i=>e(oa(i)?i:i.get())}function oa(e){return"number"==typeof e}function aa(e){return"string"==typeof e}function la(e){return"[object Object]"===Object.prototype.toString.call(e)}function sa(e){return Math.abs(e)}function da(e){return Math.sign(e)}function ca(e,i){return sa(e-i)}function pa(e){return wa(e).map(Number)}function ha(e){return e[ua(e)]}function ua(e){return Math.max(0,e.length-1)}function ma(e,i){return i===ua(e)}function ga(e,i=0){return Array.from(Array(e-i+1),(e,t)=>i+t)}function wa(e){return Object.keys(e)}function va(e,i){return[e,i].reduce((e,i)=>(wa(i).forEach(t=>{const r=e[t],n=i[t],o=la(r)&&la(n);e[t]=o?va(r,n):n}),e),{})}function fa(e,i){return void 0!==i.MouseEvent&&e instanceof i.MouseEvent}function xa(){let e=[];const i={add:function(t,r,n,o={passive:!0}){let a;if("addEventListener"in t)t.addEventListener(r,n,o),a=()=>t.removeEventListener(r,n,o);else{const e=t;e.addListener(n),a=()=>e.removeListener(n)}return e.push(a),i},clear:function(){e=e.filter(e=>e())}};return i}function ba(e,i){const t="rtl"===i,r="y"===e,n=!r&&t?-1:1;return{scroll:r?"y":"x",cross:r?"x":"y",startEdge:r?"top":t?"right":"left",endEdge:r?"bottom":t?"left":"right",nativeScroll:r?"scrollTop":"scrollLeft",getSize:function(e){const{height:i,width:t}=e;return r?i:t},direction:na(function(e){return e*n})}}function ya(e=0,i=0){const t=sa(e-i);function r(i){return i<e}function n(e){return e>i}function o(e){return r(e)||n(e)}return{length:t,max:i,min:e,clamp:na(function(t){return o(t)?r(t)?e:i:t}),pastAnyBound:na(o),pastMaxBound:na(n),pastMinBound:na(r),removeOffset:na(function(e){return t?e-t*Math.ceil((e-i)/t):e})}}function _a(e,i,t){const{clamp:r}=ya(0,e),n=e+1;let o=a(i);function a(e){return t?sa((n+e)%n):r(e)}function l(){return o}function s(){return _a(e,l(),t)}const d={get:l,set:function(e){return o=a(e),d},add:function(e){return s().set(l()+e)},clone:s};return d}function $a(e,i,t,r,n,o,a,l,s,d,c,p,h,u,m,g,w){const{cross:v,direction:f}=i,x=["INPUT","SELECT","TEXTAREA"],b={passive:!1},y=xa(),_=xa(),$=ya(50,225).clamp(h.measure(20)),S={mouse:300,touch:400},k={mouse:500,touch:600},C=u?43:25;let N,T,R=!1,I=0,A=0,L=!1,j=!1,M=!1,z=!1,P=!1;function E(e){return d.byDistance(e,!u).distance}function O(e){if(!p.createEvent("pointerdown",e).emit())return;const i=fa(e,T),a=i&&0!==e.button;P=i,z=u&&i&&!e.buttons&&R,R=ca(r.get(),o.get())>=2,a||function(e){const i=e.nodeName||"";return x.includes(i)}(e.target)||(j=!0,n.pointerDown(e),s.useFriction(0).useDuration(0),r.set(o),I=n.readPoint(e),A=n.readPoint(e,v),function(){const e=P?N:t;_.add(e,"mousemove",B,b).add(e,"mouseup",U)}(),L=!0)}function B(e){if(!p.createEvent("pointermove",e).emit())return U(e);if(!fa(e,T)&&e.touches.length>=2)return U(e);const i=n.readPoint(e),t=n.readPoint(e,v),o=ca(i,I),l=ca(t,A);if(!M&&!P){if(!e.cancelable)return U(e);if(M=o>l,!M)return U(e)}const d=n.pointerMove(e);o>m&&(z=!0),s.useFriction(.3).useDuration(.75),a.start(),r.add(f(d)),e.cancelable&&e.preventDefault()}function U(e){const i=p.createEvent("pointerup",e),t=n.pointerUp(e)*(u?k:S)[P?"mouse":"touch"],r=function(e){const i=c.add(-1*da(e));return u||sa(e)<$?E(e):g&&d.byDistance(0,!1).index!==c.get()?.5*E(e):d.byIndex(i.get(),0).distance}(f(t)),o=function(e,i){if(0===e||0===i)return 0;if(sa(e)<=sa(i))return 0;const t=ca(sa(e),sa(i));return sa(t/e)}(t,r),a=C-10*o,h=w+o/50;M=!1,j=!1,L=!1,P=!1,_.clear(),s.useDuration(a).useFriction(h),l.distance(r,!u),i.emit()}function H(e){z&&(e.stopPropagation(),e.preventDefault(),z=!1)}return{init:function(i){if(!e)return;N=i.document,T=i,n.init(i);const r=t;y.add(r,"dragstart",e=>e.preventDefault(),b).add(r,"touchmove",e=>L&&B(e),b).add(r,"touchend",e=>L&&U(e)).add(r,"touchstart",O).add(r,"mousedown",O).add(r,"touchcancel",U).add(r,"contextmenu",U).add(r,"click",H,!0)},destroy:function(){y.clear(),_.clear(),L=!1},pointerDown:function(){return j}}}function Sa(e){let i,t,r;function n(e){return e.timeStamp}function o(t,r){const n="client"+("x"===(r||e.scroll)?"X":"Y");return(fa(t,i)?t:t.touches[0])[n]}return{init:function(e){i=e},pointerDown:function(e){return t=e,r=e,o(e)},pointerMove:function(e){const i=o(e)-o(r),a=n(e)-n(t)>170;return r=e,a&&(t=e),i},pointerUp:function(e){if(!t||!r)return 0;const i=o(r)-o(t),a=n(e)-n(t),l=n(e)-n(r)>170,s=i/a;return a&&!l&&sa(s)>.1?s:0},readPoint:o}}function ka(e,i,t,r,n,o){const a=[i,...r];let l,s,d=[],c=!1;function p(e){return n.getSize(o.getRect(e))}function h(e){const n=t.createEvent("resize",e);if(n.emit())for(const t of e){if(c)return;const e=t.target===i,o=r.indexOf(t.target),a=e?s:d[o];if(sa(p(e?i:r[o])-a)>=.5){n.api.reInit();break}}}return{init:function(t){e&&(s=p(i),d=r.map(p),l=new t.ResizeObserver(h),t.requestAnimationFrame(()=>{a.forEach(e=>l.observe(e))}))},destroy:function(){c=!0,l&&l.disconnect()}}}function Ca(e,i,t,r,n){const{pastAnyBound:o,pastMinBound:a,clamp:l}=e,s=n.measure(10),d=n.measure(50),c=ya(.1,.99);let p=!1;function h(){return!p&&!!o(t)&&!!o(i)}return{shouldConstrain:h,constrain:function(n){if(!h())return;const o=a(i)?"min":"max",p=sa(e[o]-i.get()),u=t.minus(i),m=c.clamp(p/d);t.subtract(u*m),!n&&sa(u)<s&&(t.set(l(t)),r.useDuration(25).useBaseFriction())},toggleActive:function(e){p=!e}}}function Na(e,i,t,r){const n=i.min+.1,o=i.max+.1,{pastMinBound:a,pastMaxBound:l}=ya(n,o);return{loop:function(i){if(!function(e){return 1===e?l(t):-1===e&&a(t)}(i))return;const n=e*(-1*i);r.forEach(e=>e.add(n))}}}function Ta(e){let i=e||0;function t(e){i+=e}function r(e){return i+e}return{get:function(){return i},set:na(function(e){i=e}),add:na(t),subtract:na(function(e){t(-e)}),plus:na(r),minus:na(function(e){return r(-e)})}}function Ra(e,i,t){let r,n=!1;function o(e){const i=t.createEvent("slideschanged",e);if(i.emit())for(const t of e){if(n)return;if("childList"===t.type){i.api.reInit();break}}}return{init:function(t){e&&(r=new t.MutationObserver(o),r.observe(i,{childList:!0}))},destroy:function(){r&&r.disconnect(),n=!0}}}function Ia(e,i,t="px"){const r="x"===e.scroll?function(e){return`translate3d(${e}${t},0px,0px)`}:function(e){return`translate3d(0px,${e}${t},0px)`};let n=null,o=!1,a=!1;function l(e){n!==e&&(n=e,i.style.transform=e)}function s(e){a||o!==e&&(o=e,l(e?r(0):""))}return{set:l,clear:function(){l(""),i.getAttribute("style")||i.removeAttribute("style")},to:na(function(i){if(a)return;o||s(!0);const t=function(e){return Math.round(100*e)/100}(e.direction(i));l(r(t))}),get:na(r),toggleActive:function(e){a=!e},setIsScrolling:s}}function Aa(e,i,t,r,n,o,a,l,s,d,c,p){const h=n?[0,i,-i]:[0],u=r.reduce((e,i,t)=>Object.assign(Object.assign({},e),{[t]:x(t,i)}),{}),m=_a(r.length-1,0,n);let g=s.get(),w=y(),v=w,f=[];function x(i,r){return h.map(n=>({start:r-t[i]-200+n,end:r+e- -200+n}))}function b(e,i,t,o){const a=e.length>0,l=a?e[0]:i,s=m.clone().set(l),d=()=>s.add(t).get();for(s.set(d());s.get()!==l;){const i=s.get(),l=o(i);if(!l&&a)break;l&&e.push(i);const c=d();if(s.set(c),n)continue;const p=!c,h=ma(r,c);if(p&&-1===t)break;if(h&&1===t)break}}function y(){const e=[],i=a.slidesBySnap[o.get()];if(!i)return e;if(!r.length)return e;const t=l.get(),n=s.get(),d=i[Math.floor(i.length/2)],c=(p=Math.max(t,n),h=Math.min(t,n),e=>u[e].some(({start:e,end:i})=>e<p&&i>h));var p,h;return c(d)&&e.push(d),b(e,d,1,c),b(e,d,-1,c),e}function _(e,i){i.forEach(i=>{const t=d[i],r=c.loopPoints[i];n&&r&&r.target()||t.setIsScrolling(e)})}return{optimize:function(e){const i=s.get();(e||i!==g)&&(function(e){w=y(),f=function(e,i){const t=new Set(i);return e.filter(e=>!t.has(e))}(v,w),v=w,g=e}(i),!p.createEvent("scrolloptimize",{slidesInView:w,slidesLeftView:f}).emit()||(_(!0,w),_(!1,f)))}}}function La(e,i,t,r,n,o,a,l){const{align:s,axis:d,direction:c,startSnap:p,loop:h,duration:u,dragFree:m,dragThreshold:g,inViewThreshold:w,inViewMargin:v,slidesToScroll:f,skipSnaps:x,containScroll:b,draggable:y,resize:_,slideChanges:$,focus:S}=r,k=l?0:2,C=ba(d,c),{containerRect:N,slideRects:T}=a,R=C.getSize(N),I=function(e){return{measure:function(i){return e*(i/100)}}}(R),A=function(e,i){const t={start:function(){return 0},center:function(e){return r(e)/2},end:r};function r(e){return i-e}return{measure:function(r,n){return aa(e)?t[e](r):e(i,r,n)}}}(s,R),L=!h&&!!b,j=h||!!b,{slideSizes:M,slideSizesWithGaps:z,startGap:P,endGap:E}=function(e,i,t,r,n,o){const{ownerWindow:a}=o,{getSize:l,startEdge:s,endEdge:d}=e,c=t[0]&&n&&a,p=function(){if(!c)return 0;const e=t[0];return sa(i[s]-e[s])}(),h=function(){if(!c)return 0;const e=a.getComputedStyle(ha(r));return parseFloat(e.getPropertyValue(`margin-${d}`))}(),u=t.map(l),m=t.map((e,i,t)=>{const r=!i,n=ma(t,i);return r?u[i]+p:n?u[i]+h:t[i+1][s]-e[s]}).map(sa);return{slideSizes:u,slideSizesWithGaps:m,startGap:p,endGap:h}}(C,N,T,t,j,n),O=function(e,i,t,r,n,o,a,l,s){const{startEdge:d,endEdge:c,direction:p}=e,h=oa(t);return{groupSlides:function(e){return h?function(e,i){return pa(e).filter(e=>e%i===0).map(t=>e.slice(t,t+i))}(e,t):function(e){return e.length?pa(e).reduce((t,h,u)=>{const m=ha(t)||0,g=0===m,w=h===ua(e),v=n[d]-o[m][d],f=n[d]-o[h][c],x=!r&&g?p(a):0,b=sa(f-(!r&&w?p(l):0)-(v+x));return u&&b>i+s&&t.push(h),w&&t.push(e.length),t},[]).map((i,t,r)=>{const n=Math.max(r[t-1]||0);return e.slice(n,i)}):[]}(e)}}}(C,R,f,h,N,T,P,E,k),{snaps:B,snapsAligned:U}=function(e,i,t,r,n){const{startEdge:o,endEdge:a}=e,{groupSlides:l}=n,s=l(r).map(e=>ha(e)[a]-e[0][o]).map(sa).map(i.measure),d=r.map(e=>t[o]-e[o]).map(e=>-sa(e));return{snaps:d,snapsAligned:l(d).map(e=>e[0]).map((e,i)=>e+s[i])}}(C,A,N,T,O),H=-ha(B)+ha(z),{snapsContained:D,scrollContainLimit:F}=function(e,i,t,r,n){const o=ya(-i+e,0),a=t.map((e,i)=>{const{min:r,max:n}=o,a=o.clamp(e),l=!i,d=ma(t,i);return l?n:d||s(r,a)?r:s(n,a)?n:a}).map(e=>parseFloat(e.toFixed(3))),l=function(){const e=a[0],i=ha(a);return ya(a.lastIndexOf(e),a.indexOf(i)+1)}();function s(e,i){return!!n&&ca(e,i)<=1}return{snapsContained:function(){if(i<=e+n)return[o.max];if("keepSnaps"===r)return a;const{min:t,max:s}=l;return a.slice(t,s)}(),scrollContainLimit:l}}(R,H,U,b,k),V=L?D:U,{limit:W}=function(e,i,t){const r=i[0];return{limit:ya(t?r-e:ha(i),r)}}(H,V,h),G=_a(ua(V),p,h),Z=G.clone(),q=pa(t),K=function(e){const{dragHandler:i,scrollBody:t,scrollBounds:r,options:{loop:n}}=e;n||r.constrain(i.pointerDown()),t.seek()},X=function(e,i){const{scrollBody:t,translate:r,location:n,offsetLocation:o,previousLocation:a,scrollLooper:l,slideLooper:s,dragHandler:d,animation:c,eventHandler:p,scrollBounds:h,scrollOptimizer:u,options:{loop:m}}=e,g=t.settled(),w=!h.shouldConstrain(),v=d.pointerDown(),f=g&&(m||w),x=!f,b=x&&v,y=f&&!v;y&&(u.optimize(y),c.stop());const _=n.get()*i+a.get()*(1-i);o.set(_),m&&(l.loop(t.direction()),s.loop()),r.to(o),u.optimize(),y&&p.createEvent("settle",null).emit(),x&&p.createEvent("scroll",{isDragging:b}).emit()},Y=function(e,i){const t=xa(),r=1e3/60;let n,o=null,a=0,l=0;function s(t){if(!l)return;o||(o=t,e(),e());const d=t-o;for(o=t,a+=d;a>=r;)e(),a-=r;i(a/r),l&&(l=n.requestAnimationFrame(s))}function d(){l&&(n.cancelAnimationFrame(l),o=null,a=0,l=0)}return{init:function(e){const i=e.document;n=e,t.add(i,"visibilitychange",()=>{i.hidden&&(o=null,a=0)})},destroy:function(){d(),t.clear()},start:function(){l||(l=n.requestAnimationFrame(s))},stop:d,update:e,render:i}}(()=>K(ge),e=>X(ge,e)),J=V[G.get()],Q=Ta(J),ee=Ta(J),ie=Ta(J),te=Ta(J),re=Ia(C,i),ne=t.map(e=>Ia(C,e)),oe=function(e){const{max:i,length:t}=e;return{get:na(function(e){return t?(e-i)/-t:0})}}(W),ae=function(e,i,t,r,n){let o=0,a=0,l=n,s=.68,d=e.get(),c=0;function p(e){return l=e,u}function h(e){return s=e,u}const u={direction:function(){return a},duration:function(){return l},velocity:function(){return o},seek:function(){const i=r.minus(e);let n=0;return l?(t.set(e),o+=i/l,o*=s,d+=o,e.add(o),n=d-c):(o=0,t.set(r),e.set(r),n=i),a=da(n),c=d,u},settled:function(){return sa(r.minus(i))<.001},useBaseFriction:function(){return h(.68)},useBaseDuration:function(){return p(n)},useFriction:h,useDuration:p};return u}(Q,ie,ee,te,u),le=function(e,i,t,r,n,o,a){const{groupSlides:l}=n,{min:s,max:d}=r,c=function(){const r=l(o),n=!e||"keepSnaps"===i;return 1===t.length?[o]:n?r:r.slice(s,d).map((e,i,t)=>{const r=!i,n=ma(t,i);return r?ga(ha(e)):n?ga(ua(o),e[0]):e})}(),p=function(){const e={};return c.forEach((i,t)=>{i.forEach(i=>{e[i]=t})}),e}(),h=t.map(a.get),u=t.length;return{slidesBySnap:c,snapBySlide:p,progressBySnap:h,length:u}}(L,b,V,F,O,q,oe),se=function(e,i,t,r,n,o,a,l){const s=pa(r),d=pa(r).reverse(),c=function(){const e=o[0];return u(h(d,e),i,!1)}().concat(function(){const t=e-o[0]-1;return u(h(s,t),-i,!0)}());function p(e,i){return e.reduce((e,i)=>e-r[i],i)}function h(e,i){return e.reduce((e,t)=>p(e,i)>0?[...e,t]:e,[])}function u(r,o,s){const d=function(i){return n.map((r,n)=>({start:r-t[n]+.5+i,end:r+e-.5+i}))}(o);return r.map(e=>{const t=s?0:-i,r=s?i:0,n=s?"end":"start",o=d[e][n];return{index:e,loopPoint:o,slideLocation:Ta(-1),translate:l[e],target:()=>a.get()>o?t:r}})}return{canLoop:function(){return c.every(({index:i})=>p(s.filter(e=>e!==i),e)<=.1)},loop:function(){c.forEach(e=>{const{target:i,translate:t,slideLocation:r}=e,n=i();n!==r.get()&&(t.to(n),r.set(n))})},loopPoints:c}}(R,H,M,z,B,V,ie,ne),de=Aa(R,H,z,B,h,G,le,ie,te,ne,se,o),ce=function(e,i,t,r,n){const{pastAnyBound:o,removeOffset:a,clamp:l}=r;function s(e){return e.sort((e,i)=>sa(e)-sa(i))[0]}function d(i,r){if(!e)return i;const n=[i,i+t,i-t];if(!r)return s(n);const o=n.filter(e=>da(e)===r);return o.length?s(o):ha(n)-t}return{byDistance:function(t,r){const s=n.plus(t),{index:c,distance:p}=function(t){const r=e?a(t):l(t),{index:n}=i.reduce((e,i,t)=>{const n=sa(d(i-r,0));return n>=e.smallestDisplacement?e:{smallestDisplacement:n,index:t}},{smallestDisplacement:1/0,index:0});return{index:n,distance:r}}(s),h=!e&&o(s);return!r||h?{index:c,distance:t}:{index:c,distance:t+d(i[c]-p,0)}},byIndex:function(e,t){return{index:e,distance:d(i[e]-n.get(),t)}},shortcut:d}}(h,V,H,W,te),pe=function(e,i,t,r,n,o,a){function l(n){const{index:l,distance:s}=n,d=i.get(),c=l!==d;s&&(o.add(s),r.duration()?e.start():(e.update(),e.render(1),e.update())),c&&(t.set(d),i.set(l),a.createEvent("select",{targetSnap:l,sourceSnap:d}).emit())}return{distance:function(e,i){l(n.byDistance(e,i))},index:function(e,t){const r=i.clone().set(e).get();l(n.byIndex(r,function(e){return e?oa(e)?e:"forward"===e?-1:1:0}(t)))}}}(Y,G,Z,ae,ce,te,o),he=xa(),ue=function(e,i,t,r,n){const o=new Set;let a,l=!1;function s(e){const r=[],n=[];for(const t of e){if(l)return;const e=i.indexOf(t.target);t.isIntersecting?(o.add(e),r.push(e)):(o.delete(e),n.push(e))}t.createEvent("slidesinview",{slidesInView:d(),slidesLeftView:n,slidesEnterView:r}).emit()}function d(){return[...o]}return{init:function(t){a=new t.IntersectionObserver(s,{root:e.parentElement,threshold:r,rootMargin:n}),i.forEach(e=>a.observe(e))},destroy:function(){a&&a.disconnect(),l=!0},get:d}}(i,t,o,w,v),me=function(e,i,t,r,n,o,a,l,s){const d={passive:!0,capture:!0};let c=0;function p(e){"Tab"===e.code&&(c=(new Date).getTime())}return{init:function(h){i&&(l.add(h.document,"keydown",p,!1),r.forEach((i,r)=>{l.add(i,"focus",i=>function(i,r){if((new Date).getTime()-c>10)return;if(!s.createEvent("slidefocus",i).emit())return;t[e.nativeScroll]=0;const l=n.snapBySlide[r];oa(l)&&(a.useDuration(0),o.index(l,0))}(i,r),d)}))}}}(C,S,e,t,le,pe,ae,he,o),ge={eventHandler:o,containerRect:N,contentSize:H,slideRects:T,nodeHandler:n,animation:Y,slideSizes:M,isSsr:l,axis:C,dragHandler:$a(y,C,e,te,Sa(C),Q,Y,pe,ae,ce,G,o,I,m,g,x,.68),eventStore:he,percentOfView:I,indexCurrent:G,indexPrevious:Z,limit:W,location:Q,offsetLocation:ie,previousLocation:ee,options:r,resizeHandler:ka(_,i,o,t,C,n),scrollBody:ae,scrollBounds:Ca(W,ie,te,ae,I),scrollLooper:Na(H,W,ie,[Q,ie,ee,te]),scrollProgress:oe,scrollSnaps:V,scrollTarget:ce,scrollTo:pe,slideLooper:se,slideFocus:me,slidesHandler:Ra($,i,o),slidesInView:ue,slideIndexes:q,slidesToScroll:O,slideTranslates:ne,scrollSnapList:le,scrollOptimizer:de,translate:re,target:te};return ge}const ja={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,inViewMargin:"0px",breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startSnap:0,active:!0,draggable:!0,resize:!0,focus:!0,slideChanges:!0,ssr:[]};function Ma(){let e;function i(e,i){return va(e,i||{})}return{init:function(i){i&&(e=i)},mergeOptions:i,optionsAtMedia:function(t){if(!e)return t;const r=t.breakpoints||{},n=wa(r).filter(i=>e.matchMedia(i).matches).map(e=>r[e]).reduce((e,t)=>i(e,t),{});return i(t,n)},optionsMediaQueries:function(i){return e?i.map(e=>wa(e.breakpoints||{})).reduce((e,i)=>e.concat(i),[]).map(e.matchMedia):[]}}}function za(e,i,t){const r=!e,n=Ma(),o=function(e){let i=[];return{init:function(t,r){return i=r,r.reduce((i,r)=>(r.init(t,e),Object.assign(Object.assign({},i),{[r.name]:r})),{})},destroy:function(){i=i.filter(e=>e.destroy())}}}(n),a=xa(),l=function(){let e,i={};function t(e){return i[e]||[]}function r(e,r){return i=Object.assign(Object.assign({},i),{[e]:r(t(e))}),n}const n={init:function(i){e=i},clear:function(){i={}},createEvent:function(i,r){return{api:e,emit:()=>function(i,r){const n=function(i,t){return{api:e,type:i,detail:t}}(i,r);return t(i).every(i=>!1!==i(e,n))}(i,r)}},on:function(e,i){return r(e,e=>e.includes(i)?e:[...e,i]),n},off:function(e,i){return r(e,e=>e.filter(e=>e!==i)),n}};return n}(),{mergeOptions:s,optionsAtMedia:d,optionsMediaQueries:c}=n,{on:p,off:h,createEvent:u}=l,m=T;let g,w,v,f,x,b,y=!1,_=s(ja,za.globalOptions),$=s(_),S=[],k={};function C(e,i,t,n){const o=s(e,r?{direction:"ltr"}:{}),a=w.getRects(i,t,n),d=La(f,i,t,o,w,l,a,r);return e.loop&&!d.slideLooper.canLoop()?C(s(e,{loop:!1}),i,t,!0):d}function N(i,t){if(y)return;w=function(e){const i=e?e.ownerDocument:null;let t;function r(e){const{offsetTop:i,offsetLeft:t,offsetWidth:r,offsetHeight:n}=e;return{top:i,right:t+r,bottom:i+n,left:t,width:r,height:n}}function n(e,i,t,r){return{offsetLeft:e,offsetTop:i,offsetWidth:t,offsetHeight:r}}return{ownerDocument:i,ownerWindow:i?i.defaultView:null,getNodes:function(i){return e?function(i){const{container:t,slides:r}=i,n=(aa(t)?e.querySelector(t):t)||e.children[0],o=aa(r)?n.querySelectorAll(r):r,a=Array.from(o||n.children);return{root:e,container:n,slides:a}}(i):function(e){const i=n(0,0,100,100);let t=0;return{root:i,container:i,slides:e.ssr.map(e=>{const i=n(t,t,e,e);return t+=e,i})}}(i)},getRect:r,getRects:function(i,n,o){if(o&&t)return t;const a=e?i.style:{transform:""},l=a.transform;a.transform="none";const s=r(i),d=n.map(r);return a.transform=l,t={containerRect:s,slideRects:d},t}}}(e);const{ownerWindow:l}=w;n.init(l),_=s(_,i),$=d(_),S=t||S;const p=w.getNodes($);f=p.root,x=p.container,b=p.slides,g=C($,x,b),v=function(e,i,t,r,n,o){const a=Ia(i,e,"%");function l(e,i,r){const{direction:n}=ba(e.axis,e.direction),{slides:l,container:s}=t.getNodes(e),{location:d,slideLooper:c,contentSize:p}=o(e,s,l),h=e.loop?c.loopPoints:[],u=n(d),m=a.get(u);return`${i}{transform:${m};}`+h.reduce((t,o)=>{const{index:l}=o,s=da(o.target()),d=e.ssr[l];if(!s||!d)return t;const c=n(p/d*100*s),h=a.get(c);return t+`${i} ${r}:nth-child(${l+1}){transform:${h};}`},"")}return{getStyles:function(e,i="> *"){if(!r.ssr.length)return"";const t=r.breakpoints||{};return l(r,e,i)+Object.keys(t).reduce((o,a)=>o+`@media ${a}{${l(n(r,t[a]),e,i)}}`,"")}}}(x,g.axis,w,_,s,C),c([_,...S.map(({options:e})=>e)]).forEach(e=>a.add(e,"change",T)),$.active&&(!r&&l&&(g.translate.to(g.location),g.scrollOptimizer.optimize(!0),g.options.loop&&g.slideLooper.loop(),g.animation.init(l),g.resizeHandler.init(l),g.slidesInView.init(l),g.slidesHandler.init(l),g.slideFocus.init(l),g.eventHandler.init(j),x.offsetParent&&b.length&&g.dragHandler.init(l)),k=o.init(j,S))}function T(e,i){const t=l.createEvent("reinit",null),r=L();R(),N(s({startSnap:r},e),i),t.emit()}function R(){g.dragHandler.destroy(),g.resizeHandler.destroy(),g.slidesHandler.destroy(),g.slidesInView.destroy(),g.animation.destroy(),o.destroy(),g.eventStore.clear(),a.clear(),g.translate.clear(),g.slideTranslates.forEach(e=>e.clear())}function I(e,i,t){y||r||$.active&&(g.scrollBody.useBaseFriction().useDuration(!0===i?0:$.duration),g.scrollTo.index(e,t))}function A(e){return g.indexCurrent.add(e).get()}function L(){return A(0)}const j={canGoToNext:function(){return A(1)!==L()},canGoToPrev:function(){return A(-1)!==L()},cloneEngine:function(e){return C(s($,e),x,b,!0)},containerNode:function(){return x},createEvent:u,internalEngine:function(){return g},destroy:function(){if(y)return;if(r)return;const e=l.createEvent("destroy",null);y=!0,a.clear(),R(),e.emit(),l.clear()},on:p,off:h,plugins:function(){return k},previousSnap:function(){return g.indexPrevious.get()},reInit:m,rootNode:function(){return f},goToNext:function(e){I(A(1),e,-1)},goToPrev:function(e){I(A(-1),e,1)},scrollProgress:function(){return g.scrollProgress.get(g.offsetLocation)},goTo:I,selectedSnap:L,slideNodes:function(){return b},slidesInView:function(){return g.slidesInView.get()},snapIndex:A,snapList:function(){return g.scrollSnapList.progressBySnap},ssrStyles:function(e,i){return r?v.getStyles(e,i):""}};return N(i||{},t||[]),j}function Pa(e={},i=[]){za.globalOptions=Pa.globalOptions;const t=se(e),r=se(i),n=se(za(null,e,i)),[o,a]=oe(),[l,s]=oe(),d=ce(()=>{o&&o.reInit(t.current,r.current)},[o]);return ae(()=>{ta(t.current,e)||(t.current=e,d())},[e,d]),ae(()=>{(function(e,i){if(e.length!==i.length)return!1;const t=ra(e),r=ra(i);return t.every((e,i)=>ta(e,r[i]))})(r.current,i)||(r.current=i,d())},[i,d]),ae(()=>{if(l){za.globalOptions=Pa.globalOptions;const e=za(l,t.current,r.current);return a(e),()=>e.destroy()}a(void 0)},[l]),[s,o,n.current]}za.globalOptions=void 0,Pa.globalOptions=void 0;const Ea=(e,i)=>{const{direction:t}=(()=>{const e=document.documentElement;return{direction:getComputedStyle(e).direction??"ltr"}})();return Pa({...e??{},direction:t},i)},Oa=He("div")`
    width: 80vw;
    height: 80dvh;
`;function Ba({items:e,renderItem:i,options:t}){const{loop:r,navigation:n,allowTouchMove:o}=t,[a,l]=Ea({align:"start",loop:r,draggable:o}),{isSlideActive:s}=Jo({emblaApi:l,totalSlides:e.length}),{containerCss:d}=Xo();return Qo({emblaApi:l,navigation:n}),Zn()&&V(Oa,{children:V(Ho,{$gap:10,ref:a,children:V(Do,{$responsive:d,children:e.map((e,t)=>V(Fo,{children:s(t)?i({item:e}):null},t))})})})}const Ua=({open:e,onClose:i,images:t,initialIndex:r})=>{const{t:n}=Qt(),o=r,a=(e=>{if(e.length>=6)return e;const i=[...e];for(;i.length<6;)i.push(...e);return i})([t[o],...t.slice(o+1,t.length),...t.slice(0,o)]),l=Zn(),s=window.innerWidth<600,d=e=>e.stopPropagation();return V(Mo,{className:qe,open:e,onClose:i,children:l&&V(Oo,{className:"reputon-swiper-container",onClick:i,children:[V(Po,{type:"button","aria-label":n("previous_slide"),className:"reputon-swiper-button-prev",onClick:d,children:V(qn,{})}),V(Eo,{type:"button","aria-label":n("next_slide"),className:"reputon-swiper-button-next",onClick:d,children:V(Kn,{})}),V(Ba,{options:{loop:!0,navigation:{prev:".reputon-google-reviews-widget .reputon-modal .reputon-swiper-button-prev",next:".reputon-google-reviews-widget .reputon-modal .reputon-swiper-button-next"},allowTouchMove:s},items:a,renderItem:({item:e})=>V(Uo,{children:V(Bo,{$isMobile:s,onClick:d,src:e,alt:n("review_image"),className:"reputon-swiper-image"})})})]})})},Ha=He("svg")`
    color: ${e=>e.theme.summary.colorAiIcon};
`,Da=({className:e})=>V(Ha,{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:Vi("reputon-ai-stars",e),children:[V("g",{clipPath:"url(#clip0_58_2936)",children:[V("path",{d:"M16.334 0L18.5967 5.73726L24.334 8L18.5967 10.2627L16.334 16L14.0712 10.2627L8.33398 8L14.0712 5.73726L16.334 0Z",fill:"currentColor"}),V("path",{d:"M6.33398 12L8.03104 16.3029L12.334 18L8.03104 19.6971L6.33398 24L4.63693 19.6971L0.333984 18L4.63693 16.3029L6.33398 12Z",fill:"currentColor"})]}),V("defs",{children:V("clipPath",{id:"clip0_58_2936",children:V("rect",{width:"24",height:"24",fill:"white",transform:"translate(0.666992)"})})})]}),Fa=He("div")`
    display: grid;
    width: 100%;
    gap: 4px;

    ${({$isLong:e,$count:i})=>{let t="";switch(i){case 1:t="\n                    \n            grid-auto-rows: 1fr;\n            grid-auto-flow: row;\n            grid-template-columns: 1fr;\n        ;\n                ";break;case 2:case 3:case 4:t="\n                    \n            grid-auto-rows: 1fr;\n            grid-auto-flow: row;\n            grid-template-columns: 1fr 1fr;\n        ;\n                "}return e?"\n            grid-auto-rows: 1fr;\n            grid-auto-flow: column;\n            grid-template-columns: repeat(4, minmax(auto, 100px));\n        ":t}}
`,Va=He("div")`
    height: 100%;
    position: relative;
    ${({$isLong:e,$count:i})=>{let t="";switch(i){case 1:case 4:t="";break;case 2:t=e?"":"\n                          & .reputon-grid-images-inner {\n                              padding-top: calc(200% + 4px);\n                          }\n                      ";break;case 3:t=e?"":"\n                          &:nth-child(1) {\n                              grid-row: span 2;\n                              & .reputon-grid-images-inner {\n                                  padding-top: calc(200% + 4px);\n                              }\n                          }\n                      "}return t}}
`,Wa=He("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    width: 100%;
    border-radius: 16px;
    padding-top: 100%;
`,Ga=He("div")`
    position: absolute;
    inset: 0px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`,Za=He("div")`
    width: 100%;
    height: 100%;
    display: flex;
    -webkit-box-flex: 1;
    flex-grow: 1;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    & img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:before {
        ${e=>e.$hideImageCount&&e.$hideImageCount>0&&`\n            content: '+${e.$hideImageCount}';\n        `};
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        font-weight: bold;
        color: white;
        background: #11111171;
        width: 100%;
        height: 100%;
    }
`,qa=({images:e,className:i,callbackAfterImageClick:t,isAi:r,imageCount:n=4})=>{const{t:o}=Qt(),a=se(null),l=e?.slice(0,n),s=!1,d=l?.length;return l&&l.length>0&&V(Fa,{className:Vi("reputon-grid-review-images",i),$count:d,$isLong:s,ref:a,children:l.map((i,a)=>V(Va,{className:"reputon-grid-images-container",$isLong:s,$count:d,children:V(Wa,{className:"reputon-grid-images-inner",children:V(Ga,{className:"reputon-grid-images-media",onClick:()=>{t?.(i,r)},tabIndex:0,role:"button","aria-label":o("review_image"),onKeyPress:()=>{t?.(i,r)},children:V(Za,{className:"reputon-grid-images-image-container",$hideImageCount:l.length===a+1&&e&&e.length>n?e.length-n+1:void 0,children:V("img",{className:"reputon-grid-images-image",loading:"lazy",alt:"review image",src:i})})})})},a))})},Ka=D({isOpen:!1,handleShowMore:()=>{},ref:{},showButton:!1}),Xa=Ue`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Ya="reputon-logo-text",Ja="reputon-logo-icon",Qa=He("div")`
    display: flex;
    align-items: ${e=>e.$fixedReviewsHeight?"stretch":"flex-start"};
    height: ${e=>e.$fixedReviewsHeight?"100%":"auto"};
    gap: 20px;
    width: 100%;
    animation: ${e=>e.$animation?`\n                  ${Xa} .5s linear forwards\n              `:"none"};
`,el=He("div")`
    display: flex;
    flex-direction: column;
    position: relative;
    flex-grow: 1;
    gap: 12px;
    background: ${e=>e.theme.background};
    padding: 24px;
    border-radius: 24px;
    color: #777777;
    line-height: 1.45;
    ${e=>{const i=e.theme.solidShadow;return e.$hasSolidShadow&&`\n            border-right: 8px solid ${i};\n            border-bottom: 8px solid ${i};\n        `}};
    &:after {
        content: '';
        display: none;
        position: absolute;
        width: 20px;
        height: 20px;
        z-index: -1;
        transform: skewY(-45deg) translateY(-11px);
        top: 100%;
        left: 50px;
        background: ${e=>e.theme.background};
    }
`,il=He("div")`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`,tl=He("div")`
    max-width: 100%;
    display: flex;
    gap: 10px;
    justify-content: space-between;
`,rl=He("div")`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    gap: 2px;
    align-items: center;
    white-space: nowrap;
    font-size: 9px;
    width: auto;
    opacity: 0;
    visibility: hidden;
    transition:
        opacity 0.2s ease,
        visibility 0.2s ease;
    z-index: 1;
`,nl=He("span")``,ol=He("div")`
    display: flex;
    justify-content: flex-end;
    position: relative;
    filter: ${e=>"black"===e.theme.theme?"brightness(100)":"none"};
    min-width: 30px;
    height: fit-content;
    span {
        color: ${e=>e.theme.colorGoogleBadge};
        transition:
            opacity 0.2s ease,
            visibility 0.2s ease;
    }
    ${e=>e.$disableHover?"":`\n            @media (hover: hover) and (pointer: fine) {\n                &:hover {\n                    .${Ya} {\n                        opacity: 1;\n                        visibility: visible;\n                    }\n                    .${Ja} {\n                        opacity: 0;\n                        visibility: visible;\n                    }\n                }\n            }\n        `}
`,al=He("div")`
    display: flex;
    position: relative;
    min-width: ${e=>14*(e.$imagesPreviewCount-1)+70}px;
    min-height: 80px;
    margin-top: auto;
    gap: 1%;
`,ll=He("div")`
    min-width: max(33%, 70px);
    padding-top: calc(80 * max(33%, 70px) / 72);
    position: ${e=>e.$isOpen?"relative":"absolute"};
    border-radius: 16px;
    border: 2px solid ${e=>e.theme.background};
    right: 0;
    top: 0;
    overflow: hidden;
    cursor: pointer;
    &:nth-child(1n) {
        z-index: calc(4 - var(--n));
        right: ${e=>e.$isOpen?"0":"calc((var(--n) - 2) * 14px)"};
    }

    &:nth-child(1) {
        --n: 2;
        &::after {
            ${({$isOpen:e,$hideImageCount:i})=>!e&&`\n                    content: ${i?`'+${i}'`:""};\n                    position: absolute;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    color: white;\n                    left: 0;\n                    top: 0;\n                    width: 100%;\n                    height: 100%;\n                    font-size: 26px;\n                    font-weight: 700;\n                    background: rgba(0, 0, 0, 30%);\n                `}
        }
    }
    &:nth-child(2) {
        --n: 3;
    }
    &:nth-child(3) {
        --n: 4;
        &::after {
            ${({$isOpen:e,$hideImageCount:i})=>e&&`\n                    content: ${i?`'+${i}'`:""};\n                    position: absolute;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    color: white;\n                    left: 0;\n                    top: 0;\n                    width: 100%;\n                    height: 100%;\n                    font-size: 26px;\n                    font-weight: 700;\n                    background: rgba(0, 0, 0, 30%);\n                `}
        }
    }
`,sl=He("div")`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
`,dl=He("div")`
    font-weight: 600;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
`,cl=He("div")`
    display: flex;
    flex-direction: column;
    line-height: 1.45;
    overflow: hidden;
`,pl=He("div")`
    min-width: 40px;
    width: 40px;
    height: 40px;
`,hl=He("div")`
    display: flex;
    gap: 10px;
    overflow: hidden;
`,ul=He("div")`
    display: inline-block;
    width: fit-content;
    font-size: 14px;
    margin-top: -8px;
    & span {
        cursor: pointer;
        color: inherit;
        font-size: 14px;
        line-height: 1.34;
        text-decoration: underline;
    }
    & span:hover {
        text-decoration: none;
    }
`,ml=He("div")`
    display: flex;
    position: relative;
    justify-content: space-between;
    gap: 16px;
    ${e=>e.$isOpen?"\n                  flex-direction: column;\n              ":""};
`,gl=He("div",io)`
    overflow: hidden;
    position: relative;
    display: -webkit-box;
    text-align: left;
    color: ${e=>e.theme.widgets.grid.colorDescription};
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${({$openRows:e})=>e||4};
    ${({$isOpen:e,$hasShowMore:i,$openRows:t})=>i?e?"\n                  cursor: pointer;\n                  -webkit-line-clamp: unset;\n              ":`\n                  cursor: pointer;\n                  -webkit-line-clamp: ${t||4};\n              `:e?"\n            -webkit-line-clamp: unset;\n        ":void 0};
`,wl=He("div")`
    display: flex;
    gap: 4px;
`,vl=He("img")`
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`,fl=({header:e,hiddenContainer:i,imagesBlock:t,actionButton:r,info:n,rating:o,mediumImagesBlock:a,solidShadow:l,allClosed:s,alwaysOpen:d,animation:c,isAICard:p,fixedReviewsHeight:h,className:u,...m})=>{const[g,w]=oe(()=>d),[v,f]=oe(!1),x=se(null);return ae(()=>{d||x.current&&setTimeout(()=>{const e=x.current?.clientHeight,i=x.current?.scrollHeight;e&&i&&f(i>e)},150)},[]),ae(()=>{s&&(d||w(!1))},[s]),V(Ka.Provider,{value:{isOpen:g??!1,handleShowMore:()=>{d||w(e=>!e)},ref:x,showButton:v},children:V(Qa,{$fixedReviewsHeight:h??!1,className:Vi(u,"reputon-single-review","reputon-card"),$animation:c,...m,children:V(il,{className:"reputon-container",children:[V(el,{$hasSolidShadow:l,className:"reputon-top-part",children:[e,o,i,v&&r,a,t]}),n]})})})};fl.Header=function({className:e,info:i,logoApp:t}){return V(tl,{className:Vi(e,"reputon-review-header"),children:[i,t]})},fl.RatingIcons=function({className:e,children:i}){return i&&V(wl,{className:Vi(e,"reputon-rating-stars"),children:i})},fl.Logo=function({className:e,children:i,disableHover:t}){return i&&V(ol,{className:Vi(e,"reputon-review-logo"),$disableHover:t,children:[!t&&V(rl,{className:Ya,children:[V("span",{children:"Powered by"}),V(ln,{})]}),V(nl,{className:Ja,children:i})]})},fl.HiddenContainer=function({imagesContainer:e,textContainer:i,className:t}){const{isOpen:r}=pe(Ka);return V(ml,{$isOpen:r,className:Vi(t,"reputon-text-holder"),children:[i,e]})},fl.TextContainer=function({children:e,className:i,onClick:t,openRows:r=4}){const{isOpen:n,ref:o,handleShowMore:a,showButton:l}=pe(Ka);return V(gl,{$openRows:r,$isOpen:n,$hasShowMore:l,ref:o,className:Vi(i,"reputon-text"),onClick:()=>{t?.(),l&&a()},children:e})},fl.Images=function({images:e,className:i,callbackAfterImageClick:t,isAi:r}){const{isOpen:n}=pe(Ka),{t:o}=Qt();return e&&e.length>0&&V(al,{className:Vi(i,"reputon-review-images"),$isOpen:n,$imagesPreviewCount:e?.slice(0,3).length,children:e?.slice(0,3).map((i,a)=>V(ll,{className:"reputon-small-images-container",onClick:()=>t?.(i,r),$hideImageCount:e.length>3?e.length-2:void 0,$isOpen:n,tabIndex:0,role:"button","aria-label":o("review_image"),onKeyPress:()=>{t?.(i,r)},children:V(vl,{src:i,alt:"review image",loading:"lazy",className:"reputon-small-images-media"})},a))})},fl.MediumImages=function({images:e,className:i,callbackAfterImageClick:t,isAi:r}){const{isOpen:n}=pe(Ka),{t:o}=Qt();return n?V(qa,{images:e,callbackAfterImageClick:t}):e&&e.length>0&&V(al,{$imagesPreviewCount:3,className:Vi(i,"reputon-review-images"),$isOpen:!0,children:e?.slice(0,3).map((i,n)=>V(ll,{className:"reputon-medium-images-container",onClick:()=>t?.(i,r),$hideImageCount:e.length>3?e.length-2:void 0,$isOpen:!0,tabIndex:0,role:"button","aria-label":o("review_image"),onKeyPress:()=>{t?.(i,r)},children:V(vl,{src:i,alt:"review image",loading:"lazy",className:"reputon-medium-images-media"})},n))})},fl.ShowMoreBtn=function({children:e,className:i}){const{handleShowMore:t,isOpen:r}=pe(Ka),{t:n}=Qt();return V(ul,{role:"button",tabIndex:0,"aria-label":n(r?"show_less":"show_more"),onKeyPress:t,className:Vi(i,"reputon-show-more"),onClick:t,children:e?.(r)})},fl.InfoTop=function({className:e,icon:i,attributes:t}){return V(hl,{className:Vi(e,"reputon-reviewer-info"),children:[i,t]})},fl.Info=function({className:e,icon:i,attributes:t,style:r}){return V(hl,{style:r,className:Vi(e,"reputon-bottom-part"),children:[i,t]})},fl.Icon=function({className:e,children:i}){return i&&V(pl,{className:Vi(e,"reputon-image"),children:i})},fl.Attributes=function({name:e,time:i,className:t}){return V(cl,{className:Vi(t,"reputon-attributes"),children:[e,i]})},fl.Name=function({children:e,className:i}){return e&&V(dl,{className:Vi(i,"reputon-name"),children:e})},fl.Time=function({children:e,className:i}){return e&&V(sl,{className:Vi(i,"reputon-date"),children:e})};const xl=({className:e,style:i})=>V("svg",{viewBox:"0 0 12 10",width:"12",height:"10",fill:"currentColor",className:e,style:i,children:V("g",{children:V("path",{fill:"currentColor","fill-rule":"evenodd",d:"M10.043.554a1 1 0 011.497 1.32l-.083.095-6.272 6.899a1 1 0 01-1.32.083l-.095-.083-3.227-3.5a1 1 0 011.32-1.498l.094.083 2.52 2.793L10.043.554z","clip-rule":"evenodd"})})}),bl=He("div")`
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    background: linear-gradient(
        90deg,
        ${e=>e.theme.summary.colorLogoGradient1},
        ${e=>e.theme.summary.colorLogoGradient2}
    );

    &:before {
        content: 'AI';
        color: ${e=>e.theme.summary.colorLogoText};
        position: absolute;
        white-space: nowrap;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-size: 20px;
        font-weight: 500;
    }
`,yl=He(fl.TextContainer)``,_l=He("p")`
    color: ${e=>e.theme.summary.colorDescription};

    &:last-of-type {
        margin-bottom: 0;
    }
`,$l=He(fl.ShowMoreBtn)`
    color: ${e=>e.theme.summary.colorShowMore};
`,Sl=He(fl.Name)`
    color: ${e=>e.theme.summary.colorName};
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    background-color: ${e=>e.theme.summary.colorBadge};
    padding: 2px 8px;
    margin-bottom: 2px;
    border-radius: 99px;
    width: fit-content;
`,kl=He(fl.Time)`
    color: ${e=>e.theme.summary.colorTime};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`,Cl=He(xl)`
    margin-right: 6px;
    display: inline-block;
`,Nl=He(qa)`
    margin-top: auto;
`,Tl=He(fl.Header)``,Rl=He(fl.RatingIcons)`
    margin-top: -8px;
    opacity: 0;
`,Il=({allClosed:e,alwaysOpen:i,reviewsNumber:t,items:r,onChangeShowMoreState:n,options:o,onImageClick:a,images:l})=>{const{t:s,locale:d}=Qt(),{reviewPhotosType:c,hasShadow:p,fixedReviewsHeight:h}=o??{},u=V(Rl,{children:["full"].map((e,i)=>V(lt,{ratingType:"stars",emojiType:1,fill:"full"},i))});return V(fl,{className:"reputon-summary-review",alwaysOpen:i,allClosed:e,isAICard:!0,fixedReviewsHeight:h,solidShadow:p,header:V(Tl,{logoApp:V(fl.Logo,{disableHover:!0,children:V(Da,{})}),info:V(fl.InfoTop,{icon:V(fl.Icon,{children:V(bl,{children:" "})}),attributes:V(fl.Attributes,{name:V(Sl,{children:s("ai_summary")}),time:V(kl,{children:[`${s("based_on")}`," ",V(sn,{value:t,locale:d})," ",`${s("reviews")}`]})})})}),rating:u,hiddenContainer:V(fl.HiddenContainer,{imagesContainer:"small"===c?V(fl.Images,{images:l?.map(({thumbnailUrl:e})=>e),callbackAfterImageClick:(e,i)=>a?.(e,i),isAi:!0}):null,textContainer:V(yl,{onClick:n,children:r?.map((e,i)=>V(_l,{children:[V(Cl,{}),`${e}`]},i))})}),actionButton:V($l,{children:e=>V("span",e?{children:s("show_less")}:{onClick:n,children:s("show_more")})}),info:V(fl.Info,{style:{display:"none"},icon:V(fl.Icon,{children:V(bl,{children:" "})}),attributes:V(fl.Attributes,{name:V(Sl,{children:s("ai_summary")}),time:V(kl,{children:`${s("based_on")} ${t} ${s("reviews")}`})})}),mediumImagesBlock:"medium"===c?V(fl.MediumImages,{callbackAfterImageClick:(e,i)=>a?.(e,i),images:l?.map(({thumbnailUrl:e})=>e),isAi:!0}):null,imagesBlock:"large"===c?V(Nl,{callbackAfterImageClick:(e,i)=>a?.(e,i),images:l?.map(({thumbnailUrl:e})=>e),isAi:!0,imageCount:i?1:4}):null})},Al=e=>{switch(e){case"large":return"large";case"medium":return"medium";case"compact":return"compact";default:return"small"}},Ll=He("div")`
    display: none;
    order: 2;
    justify-content: center;
    gap: 16px;

    @container wrapper (max-width:${Ye}px) {
        display: flex;
        & button {
            display: flex;
        }
    }
`,jl=()=>"\n    position: absolute;\n    top: 50%;\n    z-index: 10;\n\n    flex-shrink: 0;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 1000px;\n    display: flex;\n    align-items: center !important;\n    justify-content: center !important;\n    cursor: pointer;\n    @container wrapper (max-width:740px) {\n        display: none;\n        top: 0;\n        position: relative;\n        transform: none;\n    }\n",Ml=He("button")`
    transform: translate(-50%, -50%);
    left: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${jl}
`,zl=He("button")`
    order: 2;
    transform: translate(50%, -50%);
    right: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${jl}
`,Pl=({className:e})=>{const{t:i}=Qt();return V(Ll,{className:Vi(e,"reputon-bottom-navigation-btns"),children:[V(Ml,{type:"button","aria-label":i("previous_slide"),className:"reputon-swiper-button-prev",children:V(qn,{})}),V(zl,{type:"button","aria-label":i("next_slide"),className:"reputon-swiper-button-next",children:V(Kn,{})})]})},El=He("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-grow: 1;
    gap: 8px;
    background: ${e=>e.theme.background};
    padding: 8px;
    border-radius: 16px;
    ${e=>e.$hasSolidShadow&&`\n            border-right: 4px solid ${e.theme.solidShadow};\n            border-bottom: 4px solid ${e.theme.solidShadow};\n        `};
`,Ol=He("div")`
    display: flex;
    gap: 4px;
    align-items: center;
    max-width: 100%;
    flex-direction: column;
`,Bl=He("div")`
    min-width: 32px;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 50%;
`,Ul=He("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    min-width: 0;
`,Hl=He(ir)``,Dl=He("span")`
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: ${e=>e.theme.widgets.carousel.colorSellerName};
`,Fl=He("div")`
    display: flex;
    gap: 4px;
    align-items: center;
    color: ${e=>e.theme.widgets.carousel.colorSellerStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}

    ${({$ratingType:e,theme:i})=>"emoji"===e&&`\n            color: ${i.widgets.carousel.colorSellerName};\n        `}
`,Vl=He("span")`
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
`,Wl=He("div")`
    display: flex;
    gap: 2px;
    align-items: center;
`,Gl=He(lt)`
    width: 12px;
    height: 12px;
`,Zl=He("span")`
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
    display: flex;
    align-items: flex-end;
    gap: 4px;
    line-height: 14px;
    font-weight: 500;
    font-size: 10px;
`,ql=He(ln)`
    min-width: 35px;
    height: 12px;
    margin-left: 0;
`,Kl=He(dt)`
    width: 100%;
`,Xl=He(rr)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    width: 100%;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    padding-inline: 8px;
`,Yl=He("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-grow: 1;
    gap: 32px;
    background: ${e=>e.theme.background};
    padding: 12px 24px;
    border-radius: 24px;
    ${e=>e.$hasSolidShadow&&`\n            border-right: 8px solid ${e.theme.solidShadow};\n            border-bottom: 8px solid ${e.theme.solidShadow};\n        `};

    @container wrapper (max-width:${Ye}px) {
        padding: 12px 16px;
    }
`,Jl=He("div")`
    min-width: 160px;
    width: 160px;
    height: 160px;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 50%;
    @container wrapper (max-width:${Ye}px) {
        min-width: 120px;
        width: 120px;
        height: 120px;
    }
`,Ql=He("div")`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    max-width: 100%;
`,es=He(ir)``,is=He("span")`
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    color: ${e=>e.theme.widgets.carousel.colorSellerName};
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    @container wrapper (max-width:${Ye}px) {
        font-size: 20px;
        line-height: 27px;
    }
`,ts=He("div")`
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${e=>e.theme.widgets.carousel.colorSellerStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}

    ${({$ratingType:e,theme:i})=>"emoji"===e&&`\n            color: ${i.widgets.carousel.colorSellerName};\n        `}
`,rs=He("span")`
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    @container wrapper (max-width:${Ye}px) {
        font-size: 22px;
        line-height: 25px;
    }
`,ns=He("div")`
    display: flex;
    gap: 4px;
    align-items: center;
`,os=He(lt)`
    width: 24px;
    height: 24px;
    @container wrapper (max-width:${Ye}px) {
        width: 20px;
        height: 20px;
    }
`,as=He("span")`
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
    display: flex;
    align-items: center;
    gap: 8px;
    line-height: 26px;
    font-weight: 400;
    font-size: 22px;
    @container wrapper (max-width:${Ye}px) {
        font-size: 20px;
        line-height: 24px;
    }
    @container wrapper (max-width:${Je}px) {
        font-size: 14px;
        line-height: 20px;
    }
`,ls=He(ln)`
    width: 75px;
    height: 26px;
    @container wrapper (max-width:${Ye}px) {
        width: 69px;
        height: 23px;
    }
`,ss=He(dt)`
    width: 100%;
`,ds=He(rr)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    width: 100%;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    padding-inline: 20px;
    @container wrapper (max-width:${Ye}px) {
        font-size: 18px;
        line-height: 25px;
        padding-inline: 16px;
    }
`,cs=He("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-grow: 1;
    gap: 24px;
    background: ${e=>e.theme.background};
    padding: 12px 24px;
    border-radius: 24px;
    ${e=>e.$hasSolidShadow&&`\n            border-right: 8px solid ${e.theme.solidShadow};\n            border-bottom: 8px solid ${e.theme.solidShadow};\n        `};
`,ps=He("div")`
    min-width: 96px;
    width: 96px;
    height: 96px;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 50%;
`,hs=He("div")`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    max-width: 100%;
`,us=He(ir)``,ms=He("span")`
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    color: ${e=>e.theme.widgets.carousel.colorSellerName};
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    @container wrapper (max-width:${Ye}px) {
        font-size: 20px;
        line-height: 27px;
    }
`,gs=He("div")`
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${e=>e.theme.widgets.carousel.colorSellerStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}

    ${({$ratingType:e,theme:i})=>"emoji"===e&&`\n            color: ${i.widgets.carousel.colorSellerName};\n        `}
`,ws=He("span")`
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
`,vs=He("div")`
    display: flex;
    gap: 4px;
    align-items: center;
`,fs=He(lt)`
    width: 24px;
    height: 24px;
`,xs=He("span")`
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
    display: flex;
    align-items: center;
    gap: 8px;
    line-height: 26px;
    font-weight: 400;
    font-size: 22px;
    @container wrapper (max-width:${Ye}px) {
        font-size: 20px;
        line-height: 24px;
    }
    @container wrapper (max-width:${Je}px) {
        font-size: 16px;
        line-height: 21px;
    }
`,bs=He(ln)`
    width: 75px;
    height: 26px;
`,ys=He(dt)`
    width: 100%;
`,_s=He(rr)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    width: 100%;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    padding-inline: 16px;
    @container wrapper (max-width:${Ye}px) {
        font-size: 18px;
        line-height: 25px;
    }
`,$s=He("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-grow: 1;
    gap: 24px;
    background: ${e=>e.theme.background};
    padding: 12px 24px;
    border-radius: 24px;
    ${e=>e.$hasSolidShadow&&`\n            border-right: 8px solid ${e.theme.solidShadow};\n            border-bottom: 8px solid ${e.theme.solidShadow};\n        `};

    @container wrapper (max-width:${Ye}px) {
        padding: 12px 8px;
        gap: 8px;
    }
`,Ss=He("div")`
    display: flex;
    gap: 8px;
    align-items: center;
    max-width: 100%;
`,ks=He("div")`
    min-width: 48px;
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 50%;
`,Cs=He("div")`
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
`,Ns=He(ir)``,Ts=He("span")`
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: ${e=>e.theme.widgets.carousel.colorSellerName};
`,Rs=He("div")`
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${e=>e.theme.widgets.carousel.colorSellerStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}

    ${({$ratingType:e,theme:i})=>"emoji"===e&&`\n            color: ${i.widgets.carousel.colorSellerName};\n        `}
`,Is=He("span")`
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    @container wrapper (max-width:${Ye}px) {
        font-size: 22px;
        line-height: 25px;
    }
`,As=He("div")`
    display: flex;
    gap: 2px;
    align-items: center;
`,Ls=He(lt)`
    width: 16px;
    height: 16px;
`,js=He("span")`
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
    display: flex;
    align-items: center;
    gap: 3px;
    line-height: 17px;
    font-weight: 400;
    font-size: 14px;
`,Ms=He(ln)`
    width: 46px;
    height: 16px;
`,zs=He(dt)`
    width: 100%;
`,Ps=He(rr)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    width: 100%;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    padding-inline: 10px;
`,Es=He("div")`
    display: flex;
    align-items: stretch;
    /* align-items: ${e=>e.$fixedReviewsHeight?"stretch":"flex-start"}; */
    gap: 20px;
    width: 100%;
    height: 100%;
`,Os=He("div")`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`,Bs={large:({options:{isNameEditable:e,ratingType:i,emojiType:t,writeReviewEnabled:r,hasSolidShadow:n},data:{name:o,imageUrl:a,url:l,rating:s,ratingIcons:d,reviewsNumber:c,writeReviewUrl:p}})=>{const{t:h,locale:u}=Qt();return V(Yl,{className:"reputon-top-part reputon-reviews-head",$hasSolidShadow:n,children:[V(dt,{url:l,label:`${o} ${h("reviews")}`,children:V(Jl,{className:"reputon-image",children:V(es,{className:"reputon-logo",src:a,alt:h("business_image")})})}),V(Ql,{className:"reputon-content",children:[V(dt,{inherit:!0,url:l,label:`${o} ${h("reviews")}`,children:V(is,{className:"reputon-name",$isEditable:e,content:o,children:o})}),V(dt,{url:l,label:`${o} ${h("reviews")}`,children:V(ts,{$ratingType:i,className:"reputon-rating-stars",children:[V(rs,{className:"reputon-count-number",children:Se(s)}),V(ns,{className:"reputon-count-text",children:d?.map((e,r)=>V(os,{ratingType:i,emojiType:t,fill:e},r))})]})}),V(as,{className:"reputon-reviews-count",children:[V(sn,{value:c,locale:u})," ",h("reviews_on"),V(ls,{className:"reputon-reviews-logo",$isWide:!0})]})]}),r&&p&&V(ss,{label:h("write_review"),url:p,children:V(ds,{label:h("write_review"),className:"reputon-bt reputon-link reputon-leave-review editable",content:h("write_review")})})]})},medium:({options:{isNameEditable:e,ratingType:i,emojiType:t,writeReviewEnabled:r,hasSolidShadow:n},data:{name:o,imageUrl:a,url:l,rating:s,ratingIcons:d,reviewsNumber:c,writeReviewUrl:p}})=>{const{t:h,locale:u}=Qt();return V(cs,{className:"reputon-top-part reputon-reviews-head",$hasSolidShadow:n,children:[V(dt,{url:l,label:`${o} ${h("reviews")}`,children:V(ps,{className:"reputon-image",children:V(us,{className:"reputon-logo",src:a,alt:h("business_image")})})}),V(hs,{className:"reputon-content",children:[V(dt,{inherit:!0,url:l,label:`${o} ${h("reviews")}`,children:V(ms,{className:"reputon-name",$isEditable:e,content:o,children:o})}),V(dt,{url:l,label:`${o} ${h("reviews")}`,children:V(gs,{$ratingType:i,className:"reputon-rating-stars",children:[V(ws,{className:"reputon-count-number",children:Se(s)}),V(vs,{className:"reputon-count-text",children:d?.map((e,r)=>V(fs,{ratingType:i,emojiType:t,fill:e},r))})]})}),V(xs,{className:"reputon-reviews-count",children:[V(sn,{value:c,locale:u})," ",h("reviews_on"),V(bs,{className:"reputon-reviews-logo",$isWide:!0})]})]}),r&&p&&V(ys,{label:h("write_review"),url:p,children:V(_s,{label:h("write_review"),className:"reputon-bt reputon-link reputon-leave-review editable",content:h("write_review")})})]})},small:({options:{isNameEditable:e,ratingType:i,emojiType:t,writeReviewEnabled:r,hasSolidShadow:n},data:{name:o,imageUrl:a,url:l,rating:s,ratingIcons:d,reviewsNumber:c,writeReviewUrl:p}})=>{const{t:h,locale:u}=Qt();return V($s,{className:"reputon-top-part reputon-reviews-head",$hasSolidShadow:n,children:[V(Ss,{className:"reputon-info",children:[V(dt,{url:l,label:`${o} ${h("reviews")}`,children:V(ks,{className:"reputon-image",children:V(Ns,{className:"reputon-logo",src:a,alt:h("business_image")})})}),V(Cs,{className:"reputon-content",children:[V(zs,{inherit:!0,url:l,label:`${o} ${h("reviews")}`,children:V(Ts,{className:"reputon-name",$isEditable:e,content:o,children:o})}),V(dt,{url:l,label:`${o} ${h("reviews")}`,children:V(Rs,{$ratingType:i,className:"reputon-rating-stars",children:[V(Is,{className:"reputon-count-number",children:Se(s)}),V(As,{className:"reputon-count-text",children:d?.map((e,r)=>V(Ls,{ratingType:i,emojiType:t,fill:e},r))})]})}),V(js,{className:"reputon-reviews-count",children:[V(sn,{value:c,locale:u})," ",h("reviews_on"),V(Ms,{className:"reputon-reviews-logo",$isWide:!0})]})]})]}),r&&p&&V(zs,{label:h("write_review"),url:p,children:V(Ps,{label:h("write_review"),className:"reputon-bt reputon-link reputon-leave-review editable",content:h("write_review")})})]})},compact:({options:{isNameEditable:e,ratingType:i,emojiType:t,writeReviewEnabled:r,hasSolidShadow:n},data:{name:o,imageUrl:a,url:l,rating:s,ratingIcons:d,reviewsNumber:c,writeReviewUrl:p}})=>{const{t:h,locale:u}=Qt();return V(El,{className:"reputon-top-part reputon-reviews-head",$hasSolidShadow:n,children:[V(Ol,{className:"reputon-info",children:[V(dt,{url:l,label:`${o} ${h("reviews")}`,children:V(Bl,{className:"reputon-image",children:V(Hl,{className:"reputon-logo",src:a,alt:h("business_image")})})}),V(Ul,{className:"reputon-content",children:[V(Kl,{inherit:!0,url:l,label:`${o} ${h("reviews")}`,children:V(Dl,{className:"reputon-name",$isEditable:e,content:o,children:o})}),V(dt,{url:l,label:`${o} ${h("reviews")}`,children:V(Fl,{$ratingType:i,className:"reputon-rating-stars",children:[V(Vl,{className:"reputon-count-number",children:Se(s)}),V(Wl,{className:"reputon-count-text",children:d?.map((e,r)=>V(Gl,{ratingType:i,emojiType:t,fill:e},r))})]})}),V(Zl,{className:"reputon-reviews-count",children:[V(sn,{value:c,locale:u})," ",h("reviews_on"),V(ql,{className:"reputon-reviews-logo",$isWide:!0})]})]})]}),r&&p&&V(Kl,{label:h("write_review"),url:p,children:V(Xl,{label:h("write_review"),className:"reputon-bt reputon-link reputon-leave-review editable",content:h("write_review")})})]})}},Us=({className:e,options:i,...t})=>{const r=Bs[i.cardType];return V(Es,{className:Vi(e,"reputon-single-review","reputon-card"),$fixedReviewsHeight:i.fixedReviewsHeight,children:V(Os,{className:"reputon-container",children:V(r,{...t,options:i})})})},Hs=He("svg")`
    filter: ${e=>"black"===e.theme.theme?"brightness(100)":"none"};
`,Ds=({className:e})=>V(Hs,{viewBox:"0 0 512 512",width:"100%",className:e,children:V("g",{style:"fill: none",height:"100%",width:"100%",fill:"none","fill-rule":"evenodd",children:[V("path",{d:"M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z",fill:"#4285f4"}),V("path",{d:"M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z",fill:"#34a853"}),V("path",{d:"M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z",fill:"#fbbc05"}),V("path",{d:"M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z",fill:"#ea4335"}),V("path",{d:"M20 20h472v472H20V20z"})]})}),Fs=He(({className:e})=>V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 585.86 585.7",className:e,children:V("g",{children:[V("path",{d:"M292.91,0c35.61,0,89.68,76.34,89.68,76.34S474.9,60.5,500.05,85.53C525.23,110.87,509.42,203,509.42,203s76.44,54.17,76.44,89.65c0,35.8-76.44,89.65-76.44,89.65s15.81,92.49-9.37,117.52c-25.15,25.34-117.46,9.5-117.46,9.5s-54.07,76.34-89.68,76.34-89.67-76.34-89.67-76.34S111,525.2,85.78,499.86c-25.15-25-9.38-117.52-9.38-117.52S0,328.49,0,292.69C0,257.21,76.4,203,76.4,203S60.63,110.87,85.78,85.53c25.18-25,117.46-9.19,117.46-9.19S257.34,0,292.91,0Z",style:"fill: currentColor;fill-rule: evenodd"}),V("path",{d:"M289.15,296.22l91-91.34a17.36,17.36,0,0,1,24.55,0l24.54,24.66a17.48,17.48,0,0,1,0,24.65L307.88,375.81a7.18,7.18,0,0,1-1.13,1.33l-24.56,24.65a17.38,17.38,0,0,1-24.66,0L233,377.14a6.78,6.78,0,0,1-1.12-1.33l-63.52-63.7a17.29,17.29,0,0,1,0-24.49L192.89,263a17.37,17.37,0,0,1,24.56,0l48.1,48.16h0l.1.16,4.23,4.3,0-.16,49.17,48.81Z",style:"fill:currentColor;  fill-rule: evenodd"})]})}))`
    color: ${e=>"black"===e.theme.theme?"#ffffff":"#518EF8"};
    width: 100%;
    height: 100%;
    & path:last-child {
        color: ${e=>"black"===e.theme.theme?"#000000":"#ffffff"};
    }
`,Vs=He("div")`
    display: inline-block;
    position: absolute;
    width: max-content;
    left: 100%;
    top: -2.5px;
    padding: 0px 10px;
    color: white;
    font-size: 11px;
    line-height: 22px;
    border-radius: 5px;
    background: #3b404b;
    transform: translateX(15px);
    transition: ${e=>e.theme.transition};
    opacity: 0;
    visibility: hidden;
    &::before {
        content: '';
        position: absolute;
        display: block;
        left: -3px;
        top: 50%;
        width: 8px;
        height: 8px;
        background: #3b404b;
        transform-origin: center center;
        transform: translateY(-4px) rotate(45deg);
    }
`,Ws=He("div")`
    position: relative;
    width: 17px;
    height: 17px;
    &:hover .reputon-verified-label {
        opacity: 1;
        visibility: visible;
        transform: translateX(7px);
    }
`,Gs=({className:e,verified:i})=>V(Ws,{className:Vi("reputon-verified",e),children:[V(Fs,{className:Vi("reputon-verified-icon")}),V(Vs,{className:"reputon-verified-label",children:i})]}),Zs=He(Ds)`
    width: 17px;
    height: 17px;
`,qs=He(fl.RatingIcons)`
    color: ${e=>e.theme.widgets.carousel.colorReviewStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}
`,Ks=He(fl.TextContainer)`
    color: ${e=>e.theme.widgets.carousel.colorDescription};
`,Xs=He(fl.ShowMoreBtn)`
    color: ${e=>e.theme.widgets.carousel.colorShowMore};
`,Ys=He(fl.Time)`
    color: ${e=>e.theme.widgets.carousel.colorTime};
`,Js=He(fl.Name)`
    color: ${e=>e.theme.widgets.carousel.colorName};
`,Qs=He(Gs)`
    margin-left: 7px;
`,ed=He(qa)`
    margin-top: auto;
`,id=({review:e,allClosed:i,options:t,verified:r,onChangeShowMoreState:n,onImageClick:o})=>{const{t:a}=Qt(),{authorUrl:l,rating:s,text:d,profilePhotoUrl:c,authorName:p,relativeTimeDescription:h,images:u}=e,{fixedReviewsHeight:m,hasSolidShadow:g,ratingType:w,emojiType:v,reviewPhotosType:f}=t,x=_e(s),b=s?V(qs,{$ratingType:w,children:[x?.map((e,i)=>V(lt,{ratingType:w,emojiType:v,fill:e},i)),r&&V(Qs,{verified:a("verified")})]}):null;return V(fl,{allClosed:i,fixedReviewsHeight:m,solidShadow:g,header:V(fl.Header,{logoApp:V(fl.Logo,{children:V(Zs,{})}),info:V(fl.InfoTop,{icon:V(fl.Icon,{children:V(dt,{url:l,label:`${p} ${a("review")}`,children:V(ir,{src:c,alt:`${p} ${a("image")}`})})}),attributes:V(fl.Attributes,{name:V(Js,{children:V(dt,{inherit:!0,url:l,label:`${p} ${a("review")}`,children:p})}),time:V(Ys,{children:h})})})}),rating:b,hiddenContainer:V(fl.HiddenContainer,{textContainer:V(Ks,{onClick:n,children:d}),imagesContainer:"small"===f?V(fl.Images,{images:u?.map(({thumbnailUrl:e})=>e),callbackAfterImageClick:o}):null}),actionButton:V(Xs,{children:e=>V("span",e?{children:a("show_less")}:{onClick:n,children:a("show_more")})}),mediumImagesBlock:"medium"===f?V(fl.MediumImages,{images:u?.map(({thumbnailUrl:e})=>e),callbackAfterImageClick:o}):null,imagesBlock:"large"===f?V(ed,{callbackAfterImageClick:o,images:u?.map(({thumbnailUrl:e})=>e)}):null,info:V(fl.Info,{style:{display:"none"},icon:V(fl.Icon,{children:V(dt,{url:l,label:`${p} ${a("review")}`,children:V(ir,{src:c,alt:`${p} ${a("image")}`})})}),attributes:V(fl.Attributes,{name:V(Js,{children:V(dt,{url:l,label:`${p} ${a("review")}`,children:p})}),time:V(Ys,{children:h})})})})},td=He(Gn)`
    background-color: ${({theme:e})=>e.widgets.carousel.dotted.default};
    ${({$variant:e,theme:i})=>"edge"===e&&`\n        background-color: ${i.widgets.carousel.dotted.edge};\n    `}

    ${({$variant:e,theme:i})=>"center"===e&&`\n        background-color: ${i.widgets.carousel.dotted.center};\n    `}
`,rd=He(rr)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    align-self: center;
`,nd=({url:e})=>{const{t:i}=Qt();return V(dt,{className:"reputon-buttons-holder",url:e,style:{alignSelf:"center",display:"none"},label:i("write_review"),children:V(rd,{className:"reputon-bt reputon-link reputon-leave-review editable",content:i("write_review")})})},od=He("div")`
    display: flex;
    flex-direction: column;
    gap: ${e=>e.$gap}px;
    mask-image: ${({$hasShadow:e})=>e&&"linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 5%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0.2) 95%, rgba(0, 0, 0, 0) 100%)"};
    margin: 0 ${e=>e.$inlineMargin}px;
    @container wrapper (max-width:${Ye}px) {
        margin: 0;
    }
`,ad=({hasShadow:e,carousel:i,deprecatedLeaveReviewButton:t,header:r,gap:n=8,bottomNavigationButtons:o,inlineMargin:a=32,dottedNavigation:l})=>V(od,{$inlineMargin:a,$gap:n,$hasShadow:e,className:"reputon-carousel-container",children:[r,i,t,o,l&&V(ld,{children:l})]}),ld=He("div")`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,sd=()=>{const[e,i]=oe(!0),t=se(null),r=se(void 0),n=se(void 0),o=!window.matchMedia("(hover: hover)").matches,a=()=>{void 0!==r.current&&(clearInterval(r.current),r.current=void 0)},l=()=>{void 0!==n.current&&(clearInterval(n.current),n.current=void 0)};ae(()=>{t.current&&(e?d():s())},[e]),ae(()=>()=>{a(),l()},[]);const s=()=>{const e=t.current?.getAnimations()[0];if(!e)return;a(),l();let i=e.playbackRate||1;r.current=setInterval(()=>{if(i-=.1,i<=0)return i=0,e.playbackRate=i,e.pause(),void a();e.playbackRate=i},50)},d=()=>{const e=t.current?.getAnimations()[0];if(!e)return;l(),a();let i=e.playbackRate||0;"paused"===e.playState&&e.play(),n.current=setInterval(()=>{i+=.2,i>.9&&(i=1,l()),e.playbackRate=i},50)};return{sliderRef:t,slowDownAnimation:s,slowUpAnimation:d,stopAnimation:()=>{const e=t.current?.getAnimations()[0];e&&e.pause()},startAnimation:()=>{const e=t.current?.getAnimations()[0];e&&e.play()},handleMouseEnter:()=>{!o&&s()},handleMouseLeave:()=>{!o&&d()},handleTouchMobileSwiper:e=>{t.current&&!t.current.contains(e?.target)?i(!0):i(e=>!e)}}},dd=He("div")`
    display: flex;
    width: 100%;
    overflow: hidden;
    mask-image: ${({$hasShadow:e})=>e&&"linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 5%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0.2) 95%, rgba(0, 0, 0, 0) 100%)"};
    @container wrapper (max-width:${Ye}px) {
        gap: 0;
    }

    @container wrapper (max-width:${Ye}px) {
        mask-image: ${({$hasShadow:e})=>e&&"linear-gradient(90deg,\n          rgba(0, 0, 0, 0) 0%,\n          rgba(0, 0, 0, 0.1) 1%,\n          rgba(0, 0, 0, 1) 6%,\n          rgba(0, 0, 0, 1) 94%,\n          rgba(0, 0, 0, 0.1) 99%,\n          rgba(0, 0, 0, 0) 100%\n        );"};
    }
`,cd=Ue`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`,pd=He("div",io)`
    display: flex;
    animation: ${cd} ${e=>e.$animationDuration}s linear infinite;
`,hd=He("div")`
    display: flex;
    gap: ${e=>e.$gap}px;
    margin-right: ${e=>e.$gap}px;
`,ud=He("div")`
    display: flex;
    height: auto;
    transition: 0.2s;
    flex-shrink: 0;
    width: ${({$width:e})=>e}px;
`,md=({className:e,reviews:i,renderCardItem:t,swiperOptions:r,isPopupOpen:n,gap:o=20,slideWidth:a=350})=>{const{sliderRef:l,startAnimation:s,stopAnimation:d,handleMouseEnter:c,handleMouseLeave:p,handleTouchMobileSwiper:h}=sd(),{speed:u,hasShadow:m}=r;return ae(()=>{n?d():s()},[n]),ae(()=>(window.addEventListener("touchstart",h),()=>{window.removeEventListener("touchstart",h)}),[]),V(dd,{className:e,$hasShadow:m,children:V(pd,{ref:l,onMouseEnter:c,onMouseLeave:p,className:"reputon-slider",$animationDuration:u*i.length/2,children:Array(2).fill(0).map((e,r)=>V(hd,{$gap:o,children:i?.map((e,i)=>V(ud,{$width:a,className:"reputon-slide",children:t({review:e,stopSwiper:d})},i))},r))})})},gd={active:!0,breakpoints:{},delay:4e3,instant:!1,defaultInteraction:!0,stopOnLastSnap:!1,rootNode:null};function wd(e={}){let i,t,r,n=!1,o=!1,a=null,l=null,s=0,d=!1,c=!1,p=!1,h=!1,u=!1,m=b;function g(){return!n&&!o&&i.active}function w(){g()&&(x()?c=!0:(d||t.createEvent("autoplay:play",null).emit(),function(){const{ownerWindow:e}=t.internalEngine().nodeHandler;if(!e)return;const i=(new Date).getTime(),r=t.createEvent("autoplay:timerset",{startTime:i});e.clearTimeout(s),s=e.setTimeout(_,$()),l=i,r.emit()}(),d=!0))}function v(){g()&&(d&&t.createEvent("autoplay:stop",null).emit(),function(){const{ownerWindow:e}=t.internalEngine().nodeHandler;if(!e)return;const i=(new Date).getTime(),r=t.createEvent("autoplay:timerstopped",{stopTime:i});e.clearTimeout(s),s=0,l=null,r.emit()}(),d=!1)}function f(){if(x())return c=d,v();c&&w()}function x(){const{ownerDocument:e}=t.internalEngine().nodeHandler;return!!e&&"hidden"===e.visibilityState}function b(e,i,t){const r=i.type,n=t||r;"slidefocus"===n&&v(),"pointerdown"===n&&v()}function y(e,i,r){const n=i.type,o=r||n;"mouseenter"===o&&(h=!0),"mouseleave"===o&&(h=!1),"pointerdown"===o&&(u=!0),"pointerup"===o&&(u=!1),t.createEvent("autoplay:interaction",{interaction:o,originalEvent:i,isMouseOver:h,isPointerDown:u}).emit()}function _(){const{indexCurrent:e}=t.internalEngine(),r=e.clone().add(1).get(),n=t.snapList().length-1,o=i.stopOnLastSnap&&r===n,l=t.createEvent("autoplay:select",{targetSnap:t.canGoToNext()?r:0,sourceSnap:e.get()});if(t.canGoToNext()?t.goToNext(p):t.goTo(0,p),l.emit(),a=null,o)return v();w()}function $(){return a||r[t.selectedSnap()]}function S(){if(!g())return null;if(!l)return null;const e=(new Date).getTime()-l;return $()-e}return{name:"autoplay",options:e,init:function(a,l){t=a;const{mergeOptions:s,optionsAtMedia:d}=l,c=s(gd,wd.globalOptions),h=s(c,e);if(o=!1,i=d(h),n=t.internalEngine().isSsr,!g())return;if(t.snapList().length<=1)return;p=i.instant,r=function(e,i){const t=e.snapList();return"number"==typeof i?t.map(()=>i):i(t,e)}(t,i.delay),m=i.defaultInteraction?b:y;const{eventStore:u,nodeHandler:w}=t.internalEngine(),{ownerDocument:v}=w,x=function(e,i){const t=e.rootNode();return i&&i(t)||t}(t,i.rootNode);v&&u.add(v,"visibilitychange",f),t.on("pointerdown",m),t.on("pointerup",m),t.on("slidefocus",m),u.add(x,"mouseenter",e=>m(t,e,e.type)),u.add(x,"mouseleave",e=>m(t,e,e.type)),u.add(t.containerNode(),"focusout",e=>m(t,e,"slidefocusout"))},destroy:function(){g()&&(t.off("pointerdown",m).off("pointerup",m).off("slidefocus",m),v(),o=!0,d=!1)},play:function(e){p=null!=e?e:p,w()},stop:function(){d&&v()},reset:function(){d&&w()},pause:function(){d&&(a=S(),v())},isPlaying:function(){return d},timeUntilNext:S}}wd.globalOptions=void 0;const vd=He("div")`
    position: relative;
    display: flex;
    width: 100%;
    min-width: 10%;
    align-items: center;
    mask-image: ${({$hasShadow:e})=>e&&"linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 5%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0.2) 95%, rgba(0, 0, 0, 0) 100%)"};
    @container wrapper (max-width:${Ye}px) {
        gap: 0px;
        padding: 0;
    }
`,fd=()=>"\n    position: absolute;\n    top: 50%;\n    z-index: 10;\n\n    flex-shrink: 0;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center !important;\n    justify-content: center !important;\n    border-radius: 1000px;\n    cursor: pointer;\n    @container wrapper (max-width:740px) {\n        display: none;\n        top: 0;\n        position: relative;\n        transform: none;\n    }\n",xd=He("button")`
    transform: translate(-50%, -50%);
    left: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${fd}
`,bd=He("button")`
    order: 2;
    transform: translate(50%, -50%);
    right: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${fd}
`,yd=[{breakpoint:1700,slidesPerView:4},{breakpoint:1320,slidesPerView:3},{breakpoint:935,slidesPerView:2},{breakpoint:550,slidesPerView:1}],_d=({className:e,reviews:i,renderCardItem:t,swiperOptions:r,widgetId:n,gap:o=16,breakpoints:a=yd,onSlidesPerViewChange:l,hasNavigation:s})=>{const{t:d}=Qt(),{initSwiper:c}=Dn(),[p,h]=oe(!0),{containerCss:u}=Xo(a,{totalSlides:i.length}),{autoscroll:m,speed:g,hasShadow:w}=r,[v,f]=Ea({align:"start",loop:!0,duration:50},[wd({delay:g,active:m})]),{isSlideActive:x}=Jo({emblaApi:f,totalSlides:i.length});Yo({emblaApi:f}),(({emblaApi:e,onSlidesCountChange:i})=>{ae(()=>{if(!e)return;const t=()=>{requestAnimationFrame(()=>{const t=e.rootNode()?.firstElementChild;if(!t)return;const r=getComputedStyle(t).getPropertyValue(qo),n=function(e){const i=e.match(/\/\s*([\d.]+)/);return i?parseFloat(i[1]):null}(r)??1;i(r==Ko?1:n)})};return t(),e.on("resize",t),()=>{e.off("resize",t)}},[e])})({emblaApi:f,onSlidesCountChange:l}),Qo({emblaApi:f,navigation:{prev:`#${n} .reputon-swiper-button-prev`,next:`#${n} .reputon-swiper-button-next`}}),ea({emblaApi:f,onSlideChange:()=>{h(!0)}}),ae(()=>c({emblaApi:f}),[f,c,i.length]);const b=()=>{h(!1)};return V(vd,{$hasShadow:w,className:e,children:[s&&V(xd,{type:"button","aria-label":d("previous_slide"),className:"reputon-swiper-button-prev",children:V(qn,{})}),s&&V(bd,{type:"button","aria-label":d("next_slide"),className:"reputon-swiper-button-next",children:V(Kn,{})}),V(Ho,{$gap:o,ref:v,className:"swiper-horizontal",children:V(Do,{$responsive:u,children:i.map((e,i)=>V(Fo,{children:x(i)?t({review:e,allClosed:p,stopSwiper:b}):null},i))})})]})},$d=({ratingLogoPlace:e,isFluid:i=!1})=>{const[t,r]=oe(!1),{data:n,widgetId:o}=pe(Bi),{contentIndex:a,hasShadow:l,writeReviewEnabled:s,emojiType:d,hasSolidShadow:c,autoscroll:p,ratingType:h,reviewPhotosType:u,fixedReviewsHeight:m,delay:g,navigationType:w}=Nw(ti),{business:v,verified:f}=n,{writeReviewUrl:x,summary:y,imageUrl:_,url:$,name:S,rating:k,reviewsNumber:C,reviews:N,icon:T}=Ui({contentIndex:a,business:v}),{aggregatedImages:R,summaryImages:I}=Mn(N,!!y),{setFullScreenImageOptions:A,handleClosePopup:L,open:j,popupContent:M,initialIndex:z}=zn(R),P=s&&!!x,E=Ln({summaryCard:Boolean(y),reviews:N,logoCard:e===nn}),O=Al(u),B=jn(+g,10),U=jn(+g,zr),H=V(md,{className:"reputon-carousel-holder",reviews:E,isPopupOpen:j,swiperOptions:{speed:B,hasShadow:l},gap:20,renderCardItem:({review:e,stopSwiper:i})=>"logoCard"===e?V(Us,{data:{imageUrl:T,url:$??"",name:S,rating:k,ratingIcons:_e(k),reviewsNumber:C,writeReviewUrl:x},options:{isNameEditable:"all"===a,ratingType:h,emojiType:d,cardType:O,writeReviewEnabled:s,hasSolidShadow:c,fixedReviewsHeight:m}}):"summaryCard"===e?y&&V(Il,{items:y?.items,onImageClick:A,options:{reviewPhotosType:u,fixedReviewsHeight:m,hasShadow:c},onChangeShowMoreState:i,reviewsNumber:C,images:I},"summaryReview"):V(id,{review:e,options:{fixedReviewsHeight:m,hasSolidShadow:c,reviewPhotosType:u,ratingType:h,emojiType:d},verified:f,onChangeShowMoreState:i,onImageClick:(e,i)=>A(e,i)})}),D=V(_d,{className:"reputon-carousel-holder",onSlidesPerViewChange:e=>{r(e<E.length&&!l)},hasNavigation:t&&"arrows"===w,widgetId:o,reviews:E,swiperOptions:{autoscroll:p,speed:U,hasShadow:l},gap:20,renderCardItem:({review:e,allClosed:i,stopSwiper:t})=>"logoCard"===e?V(Us,{data:{imageUrl:T,url:$??"",name:S,rating:k,ratingIcons:_e(k),reviewsNumber:C,writeReviewUrl:x},options:{isNameEditable:"all"===a,ratingType:h,emojiType:d,cardType:O,writeReviewEnabled:s,hasSolidShadow:c,fixedReviewsHeight:m}}):"summaryCard"===e?y&&V(Il,{allClosed:i,items:y?.items,onImageClick:A,options:{reviewPhotosType:u,fixedReviewsHeight:m,hasShadow:c},onChangeShowMoreState:t,reviewsNumber:C,images:I},"summaryReview"):V(id,{review:e,allClosed:i,options:{fixedReviewsHeight:m,hasSolidShadow:c,reviewPhotosType:u,ratingType:h,emojiType:d},verified:f,onChangeShowMoreState:t,onImageClick:(e,i)=>A(e,i)})});return V(b,{children:[V(Hn,{children:V(ad,{gap:16,hasShadow:l,header:e===rn&&V(An,{writeReviewUrl:x,imageUrl:_,isEditableName:"all"===a,url:$,name:S,rating:k,ratingIcons:_e(k),reviewsNumber:C,options:{emojiType:d,hasSolidShadow:c,ratingType:h,writeReviewEnabled:s}}),carousel:i?H:D,deprecatedLeaveReviewButton:P&&V(nd,{url:x}),bottomNavigationButtons:t&&"arrows"===w&&V(Pl,{}),dottedNavigation:t&&"dotted"===w&&V(Wn,{renderDotVisual:e=>V(td,{$variant:e})})})}),M&&V(Ua,{initialIndex:z,images:R?.map(e=>e.url),open:j,onClose:()=>L()})]})},Sd=Ue`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,kd="reputon-logo-text",Cd="reputon-logo-icon",Nd=He("div")`
    display: flex;
    align-items: ${e=>e.$fixedReviewsHeight?"stretch":"flex-start"};
    height: ${e=>e.$fixedReviewsHeight?"100%":"auto"};
    gap: 20px;
    width: 100%;
    animation: ${e=>e.$animation?`\n                  ${Sd} .5s linear forwards\n              `:"none"};
`,Td=He("div")`
    display: flex;
    flex-direction: column;
    position: relative;
    flex-grow: 1;
    gap: 4px;
    background: ${e=>e.theme.background};
    padding: 12px;
    border-radius: 16px;
    color: #777777;
    line-height: 1.45;
    ${e=>{const i=e.theme.solidShadow;return e.$hasSolidShadow&&`\n            border-right: 4px solid ${i};\n            border-bottom: 4px solid ${i};\n        `}};
    &:after {
        content: '';
        display: none;
        position: absolute;
        width: 20px;
        height: 20px;
        z-index: -1;
        transform: skewY(-45deg) translateY(-11px);
        top: 100%;
        left: 50px;
        background: ${e=>e.theme.background};
    }
`,Rd=He("div")`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`,Id=He("div")`
    max-width: 100%;
    display: flex;
    gap: 8px;
    justify-content: space-between;
`,Ad=He("div")`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    gap: 2px;
    align-items: center;
    white-space: nowrap;
    font-size: 9px;
    width: auto;
    opacity: 0;
    visibility: hidden;
    transition:
        opacity 0.2s ease,
        visibility 0.2s ease;
    z-index: 1;
`,Ld=He("span")``,jd=He("div")`
    display: flex;
    justify-content: flex-end;
    position: relative;
    filter: ${e=>"black"===e.theme.theme?"brightness(100)":"none"};
    min-width: 30px;
    height: fit-content;
    span {
        color: ${e=>e.theme.colorGoogleBadge};
        transition:
            opacity 0.2s ease,
            visibility 0.2s ease;
    }
    ${e=>e.$disableHover?"":`\n            @media (hover: hover) and (pointer: fine) {\n                &:hover {\n                    .${kd} {\n                        opacity: 1;\n                        visibility: visible;\n                    }\n                    .${Cd} {\n                        opacity: 0;\n                        visibility: visible;\n                    }\n                }\n            }\n        `}
`,Md=He("div")`
    display: flex;
    align-self: center;
    gap: 4px;
    position: relative;
    min-width: 40px;
    min-height: 50px;
    ${({$isOpen:e})=>e&&"width: 100%;"}
`,zd=He("div")`
    min-width: ${({$isOpen:e})=>e?"auto":"40px"};
    flex: 1;
    padding-top: ${({$isOpen:e})=>e?"calc(33% * 1.25)":"50px"};
    position: ${e=>e.$isOpen?"relative":"absolute"};
    border-radius: 8px;
    right: 0;
    top: 0;
    overflow: hidden;
    cursor: pointer;
    &:nth-child(1n) {
    }

    &:nth-child(1) {
        --n: 2;
        &::after {
            ${({$isOpen:e,$hideImageCount:i})=>!e&&`\n                    content: ${i?`'+${i}'`:""};\n                    position: absolute;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    color: white;\n                    left: 0;\n                    top: 0;\n                    width: 100%;\n                    height: 100%;\n                    font-size: 16px;\n                    font-weight: 700;\n                    background: rgba(0, 0, 0, 30%);\n                `}
        }
    }
    &:nth-child(2) {
        --n: 3;
        display: ${({$isOpen:e})=>e?"block":"none"};
    }
    &:nth-child(3) {
        display: ${({$isOpen:e})=>e?"block":"none"};
        --n: 4;
        &::after {
            ${({$isOpen:e,$hideImageCount:i})=>e&&`\n                    content: ${i?`'+${i-2}'`:""};\n                    position: absolute;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    color: white;\n                    left: 0;\n                    top: 0;\n                    width: 100%;\n                    height: 100%;\n                    font-size: 16px;\n                    font-weight: 700;\n                    background: rgba(0, 0, 0, 30%);\n                `}
        }
    }
`;He("div")`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
`;const Pd=He("div")`
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 12px;
    line-height: 16px;
    min-width: 0;
    overflow: hidden;
`,Ed=He("div")`
    display: flex;
    flex-direction: column;
    gap: 4px;
    line-height: 1.45;
    min-width: 0;
`,Od=He("div")`
    min-width: 32px;
    width: 32px;
    height: 32px;
`,Bd=He("div")`
    display: flex;
    gap: 8px;
    min-width: 0;
`,Ud=He("span")`
    display: inline-block;
    width: fit-content;
    font-size: 14px;
    ${({isOpen:e})=>e&&"position: absolute; bottom: 0; right: 0; z-index: 1;"}
    color: inherit;
    & span {
        cursor: pointer;
        font-size: 12px;
        line-height: 16px;
        text-decoration: underline;
    }
    & span:hover {
        text-decoration: none;
    }
`,Hd=He("div")`
    display: flex;
    position: relative;
    justify-content: space-between;
    gap: 4px;
    ${e=>e.$isOpen?"\n                  flex-direction: column;\n              ":""};
`,Dd=He("div",io)`
    line-height: 17px;
    font-size: 12px;
    overflow: hidden;
    position: relative;
    display: -webkit-box;
    text-align: left;
    color: ${e=>e.theme.widgets.grid.colorDescription};
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${({$openRows:e})=>e||4};
    ${({$isOpen:e,$hasShowMore:i,$openRows:t})=>i?e?"\n                  cursor: pointer;\n                  -webkit-line-clamp: unset;\n              ":`\n                  cursor: pointer;\n                  -webkit-line-clamp: ${t||4};\n              `:e?"\n            -webkit-line-clamp: unset;\n        ":void 0};
`,Fd=He("div")`
    display: flex;
    gap: 2px;
`,Vd=He("img")`
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`,Wd=D({isOpen:!1,handleShowMore:()=>{},ref:{},showButton:!1}),Gd=({header:e,hiddenContainer:i,actionButton:t,rating:r,solidShadow:n,allClosed:o,alwaysOpen:a,animation:l,isAICard:s,fixedReviewsHeight:d,className:c,closeButton:p,...h})=>{const[u,m]=oe(()=>a),[g,w]=oe(!1),v=se(null);return ae(()=>{a||v.current&&setTimeout(()=>{const e=v.current?.clientHeight,i=v.current?.scrollHeight;e&&i&&w(i>e)},150)},[]),ae(()=>{o&&(a||m(!1))},[o]),V(Wd.Provider,{value:{isOpen:u??!1,handleShowMore:()=>{a||m(e=>!e)},ref:v,showButton:g},children:V(Nd,{$fixedReviewsHeight:d??!1,className:Vi(c,"reputon-single-review","reputon-card"),$animation:l,...h,children:V(Rd,{className:"reputon-container",children:V(Td,{$hasSolidShadow:n,className:"reputon-top-part",children:[e,i,g&&u&&p]})})})})};Gd.Header=function({className:e,info:i,logoApp:t}){return V(Id,{className:Vi(e,"reputon-review-header"),children:[i,t]})},Gd.RatingIcons=function({className:e,children:i}){return i&&V(Fd,{className:Vi(e,"reputon-rating-stars"),children:i})},Gd.Logo=function({className:e,children:i,disableHover:t}){const{t:r}=Qt();return i&&V(jd,{className:Vi(e,"reputon-review-logo"),$disableHover:t,children:[!t&&V(Ad,{className:kd,children:[V("span",{children:r("powered_by")}),V(ln,{})]}),V(Ld,{className:Cd,children:i})]})},Gd.HiddenContainer=function({imagesContainer:e,textContainer:i,className:t}){const{isOpen:r}=pe(Wd);return V(Hd,{$isOpen:r,className:Vi(t,"reputon-text-holder"),children:[i,e]})},Gd.TextContainer=function({children:e,className:i,onClick:t,openRows:r=4,openBtn:n}){const{isOpen:o,ref:a,handleShowMore:l,showButton:s}=pe(Wd),{btnRef:d,position:c}=(({openRows:e,ref:i,showButton:t})=>{const r=se(null),[n,o]=oe(null);return ae(()=>{if(!t)return;const n=i.current;if(!n)return;const a=document.createRange();a.selectNode(n);const l=Array.from(a.getClientRects());if(l.length<=e&&o(null),!r.current)return;const s=r.current.offsetWidth,d=l[e],c=n.getBoundingClientRect(),p=c.width-s,h=d.right-c.left;o(h>p?p:h)},[e,i,t]),{btnRef:r,position:n}})({openRows:r,ref:a,showButton:s});return V(Dd,{$openRows:r,$isOpen:o,$hasShowMore:s,ref:a,className:Vi(i,"reputon-text"),onClick:()=>{t?.(),s&&l()},children:[e,s&&!o&&n?.(d,c)]})},Gd.Images=function({images:e,className:i,callbackAfterImageClick:t,isAi:r}){const{isOpen:n}=pe(Wd),{t:o}=Qt();return e&&e.length>0&&V(Md,{className:Vi(i,"reputon-review-images"),$isOpen:n,$imagesPreviewCount:e?.slice(0,3).length,children:e?.slice(0,3).map((i,a)=>V(zd,{className:"reputon-small-images-container",onClick:()=>t?.(i,r),$hideImageCount:e.length>1?e.length:void 0,$isOpen:n,tabIndex:0,role:"button","aria-label":o("review_image"),onKeyPress:()=>{t?.(i,r)},children:V(Vd,{src:i,alt:"review image",loading:"lazy",className:"reputon-small-images-media"})},a))})},Gd.ShowMoreBtn=function({children:e,className:i,onClick:t}){const{handleShowMore:r,isOpen:n}=pe(Wd),{t:o}=Qt();return V(Ud,{$isOpen:n,role:"button",tabIndex:0,"aria-label":o(n?"show_less":"show_more"),onKeyPress:e=>{e.stopPropagation(),r(),t?.()},className:Vi(i,"reputon-show-more"),onClick:e=>{e.stopPropagation(),r(),t?.()},children:e})},Gd.InfoTop=function({className:e,icon:i,attributes:t}){return V(Bd,{className:Vi(e,"reputon-reviewer-info"),children:[i,t]})},Gd.Icon=function({className:e,children:i}){return i&&V(Od,{className:Vi(e,"reputon-image"),children:i})},Gd.Attributes=function({name:e,rating:i,className:t}){return V(Ed,{className:Vi(t,"reputon-attributes"),children:[e,i]})},Gd.Name=function({children:e,className:i}){return e&&V(Pd,{className:Vi(i,"reputon-name"),children:e})};const Zd=He(Ds)`
    width: 16px;
    height: 16px;
`,qd=He(Gd.RatingIcons)`
    color: ${e=>e.theme.widgets.carousel.colorReviewStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}
`,Kd=He(Gd.TextContainer)`
    color: ${e=>e.theme.widgets.carousel.compactReview.colorDescription};
`,Xd=He(Gd.ShowMoreBtn)`
    & span {
        color: ${e=>e.theme.widgets.carousel.compactReview.colorShowMore};
    }
`,Yd=He(Gd.Name)`
    color: ${e=>e.theme.widgets.carousel.compactReview.colorName};
`,Jd=He(lt)`
    width: 12px;
    height: 12px;
`,Qd=He(Gs)`
    margin-left: 2px;
    width: 12px;
    height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    & svg {
        ${({$ratingType:e,theme:i})=>"hearts"===e&&`color: ${i.widgets.carousel.compactReview.verifiedColor};`}
    }
    & .reputon-verified-label {
        font-size: 9px;
        line-height: 18px;
        & ::before {
            width: 7px;
            height: 7px;
            transform: translateY(-3px) rotate(45deg);
        }
    }
`;He(qa)`
    margin-top: auto;
`;const ec=He("span",io)`
    color: inherit;
    position: absolute;
    bottom: 0;
    inset-inline-start: ${({$position:e})=>e||0}px;
    background: ${e=>e.theme.background};
`,ic=({review:e,allClosed:i,options:t,verified:r,onChangeShowMoreState:n,onImageClick:o})=>{const{t:a}=Qt(),{authorUrl:l,rating:s,text:d,profilePhotoUrl:c,authorName:p,images:h}=e,{fixedReviewsHeight:u,hasSolidShadow:m,ratingType:g,emojiType:w,reviewPhotosType:v}=t,f=_e(s),x=s?V(qd,{$ratingType:g,children:[f?.map((e,i)=>V(Jd,{ratingType:g,emojiType:w,fill:e},i)),r&&V(Qd,{$ratingType:g,verified:a("verified")})]}):void 0;return V(Gd,{allClosed:i,fixedReviewsHeight:u,solidShadow:m,header:V(Gd.Header,{logoApp:V(Gd.Logo,{children:V(Zd,{})}),info:V(Gd.InfoTop,{icon:V(Gd.Icon,{children:V(dt,{url:l,label:`${p} ${a("review")}`,children:V(ir,{src:c,alt:`${p} ${a("image")}`})})}),attributes:V(Gd.Attributes,{name:V(Yd,{children:V(dt,{inherit:!0,url:l,label:`${p} ${a("review")}`,children:p})}),rating:x})})}),hiddenContainer:V(Gd.HiddenContainer,{textContainer:V(Kd,{onClick:n,openBtn:(e,i)=>V(ec,{ref:e,$position:i,className:"reputon-show-more",children:["..."," ",V(Xd,{onClick:n,children:V("span",{children:a("show_more")})})]}),children:d}),imagesContainer:"small"===v?V(Gd.Images,{images:h?.map(({thumbnailUrl:e})=>e),callbackAfterImageClick:o}):null}),closeButton:V(Xd,{children:V("span",{children:a("show_less")})})})},tc=He("div")`
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    background: linear-gradient(
        90deg,
        ${e=>e.theme.summary.colorLogoGradient1},
        ${e=>e.theme.summary.colorLogoGradient2}
    );

    &:before {
        content: 'AI';
        color: ${e=>e.theme.summary.colorLogoText};
        position: absolute;
        white-space: nowrap;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-size: 14px;
        line-height: 16px;
        font-weight: 500;
    }
`,rc=He(Gd.TextContainer)`
    line-height: 16px;
`,nc=He("p")`
    text-indent: -20px;
    margin-left: 20px;

    color: ${e=>e.theme.summary.compact.colorDescription};

    &:last-of-type {
        margin-bottom: 0;
    }
`,oc=He(Gd.Attributes)`
    gap: 2px;
`,ac=He(Da)`
    width: 16px;
    height: 16px;
`,lc=He(Gd.Name)`
    color: ${e=>e.theme.summary.compact.colorName};
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    background-color: ${e=>e.theme.summary.colorBadge};
    padding: 0px 4px;
    border-radius: 99px;
    width: fit-content;
`,sc=He(Gd.RatingIcons)`
    color: ${e=>e.theme.summary.colorTime};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 10px;
    line-height: 14px;
`,dc=He(xl)`
    margin-right: 6px;
    display: inline-block;
`,cc=He("span",io)`
    color: inherit;
    position: absolute;
    inset-inline-start: ${({$position:e})=>e||0}px;
    background: ${e=>e.theme.background};
    inset-block-end: 0;
`,pc=He(Gd.ShowMoreBtn)`
    & span {
        color: ${e=>e.theme.summary.compact.colorShowMore};
    }
`,hc=({allClosed:e,alwaysOpen:i,reviewsNumber:t,items:r,onChangeShowMoreState:n,options:o,onImageClick:a,images:l})=>{const{t:s,locale:d}=Qt(),{reviewPhotosType:c,hasShadow:p,fixedReviewsHeight:h}=o??{};return V(Gd,{alwaysOpen:i,allClosed:e,fixedReviewsHeight:h,solidShadow:p,header:V(Gd.Header,{logoApp:V(Gd.Logo,{disableHover:!0,children:V(ac,{})}),info:V(Gd.InfoTop,{icon:V(Gd.Icon,{children:V(tc,{children:" "})}),attributes:V(oc,{name:V(lc,{children:s("ai_summary")}),rating:V(sc,{children:[`${s("based_on")}`," ",V(sn,{value:t,locale:d})," ",`${s("reviews")}`]})})})}),hiddenContainer:V(Gd.HiddenContainer,{textContainer:V(rc,{onClick:n,openBtn:(e,i)=>V(cc,{ref:e,$position:i,className:"reputon-show-more",children:["..."," ",V(pc,{onClick:n,children:V("span",{children:s("show_more")})})]}),children:r?.map((e,i)=>V(nc,{children:[V(dc,{}),`${e}`]},i))}),imagesContainer:"small"===c?V(Gd.Images,{images:l?.map(({thumbnailUrl:e})=>e),callbackAfterImageClick:(e,i)=>a?.(e,i),isAi:!0}):null}),closeButton:V(pc,{children:V("span",{children:s("show_less")})})})},uc=He(Pl)`
    display: flex;
    gap: 12px;
    & button {
        width: 32px;
        height: 32px;
        position: static;
        transform: none;
        & svg {
            width: 10px;
            height: 16px;
        }
    }
`,mc=[{breakpoint:2400,slidesPerView:4},{breakpoint:1100,slidesPerView:3},{breakpoint:768,slidesPerView:2},{breakpoint:440,slidesPerView:1}],gc=({ratingLogoPlace:e,isFluid:i=!1})=>{const[t,r]=oe(!1),{data:n,widgetId:o}=pe(Bi),{contentIndex:a,hasShadow:l,writeReviewEnabled:s,emojiType:d,hasSolidShadow:c,autoscroll:p,ratingType:h,reviewPhotosType:u,fixedReviewsHeight:m,delay:g,navigationType:w}=Nw(ti),{business:v,verified:f}=n,{writeReviewUrl:x,summary:y,imageUrl:_,url:$,name:S,rating:k,reviewsNumber:C,reviews:N,icon:T}=Ui({contentIndex:a,business:v}),{aggregatedImages:R,summaryImages:I}=Mn(N,!!y),{setFullScreenImageOptions:A,handleClosePopup:L,open:j,popupContent:M,initialIndex:z}=zn(R),P=s&&!!x,E=Ln({summaryCard:Boolean(y),reviews:N,logoCard:e===nn}),O=Al("compact"),B=jn(+g,10),U=jn(+g,zr),H=V(md,{slideWidth:214,className:"reputon-carousel-holder",reviews:E,isPopupOpen:j,swiperOptions:{speed:B,hasShadow:l},gap:12,renderCardItem:({review:e,stopSwiper:i})=>"logoCard"===e?V(Us,{data:{imageUrl:T,url:$??"",name:S,rating:k,ratingIcons:_e(k),reviewsNumber:C,writeReviewUrl:x},options:{isNameEditable:"all"===a,ratingType:h,emojiType:d,cardType:O,writeReviewEnabled:s,hasSolidShadow:c,fixedReviewsHeight:m}}):"summaryCard"===e?y&&V(hc,{items:y?.items,onImageClick:A,options:{reviewPhotosType:u,fixedReviewsHeight:m,hasShadow:c},onChangeShowMoreState:i,reviewsNumber:C,images:I},"summaryReview"):V(ic,{review:e,options:{fixedReviewsHeight:m,hasSolidShadow:c,reviewPhotosType:u,ratingType:h,emojiType:d},verified:f,onChangeShowMoreState:i,onImageClick:(e,i)=>A(e,i)})}),D=V(_d,{className:"reputon-carousel-holder",onSlidesPerViewChange:e=>{r(e<E.length&&!l)},hasNavigation:!1,widgetId:o,reviews:E,swiperOptions:{autoscroll:p,speed:U,hasShadow:l},gap:12,breakpoints:mc,renderCardItem:({review:e,allClosed:i,stopSwiper:t})=>"logoCard"===e?V(Us,{data:{imageUrl:T,url:$??"",name:S,rating:k,ratingIcons:_e(k),reviewsNumber:C,writeReviewUrl:x},options:{isNameEditable:"all"===a,ratingType:h,emojiType:d,cardType:O,writeReviewEnabled:s,hasSolidShadow:c,fixedReviewsHeight:m}}):"summaryCard"===e?y&&V(hc,{allClosed:i,items:y?.items,onImageClick:A,options:{reviewPhotosType:u,fixedReviewsHeight:m,hasShadow:c},onChangeShowMoreState:t,reviewsNumber:C,images:I},"summaryReview"):V(ic,{review:e,allClosed:i,options:{fixedReviewsHeight:m,hasSolidShadow:c,reviewPhotosType:u,ratingType:h,emojiType:d},verified:f,onChangeShowMoreState:t,onImageClick:(e,i)=>A(e,i)})});return V(b,{children:[V(Hn,{children:V(ad,{inlineMargin:0,gap:12,hasShadow:l,bottomNavigationButtons:t&&"arrows"===w&&V(uc,{}),dottedNavigation:t&&"dotted"===w&&V(Wn,{renderDotVisual:e=>V(td,{$variant:e})}),header:e===rn&&V(An,{isCompact:!0,writeReviewUrl:x,imageUrl:_,isEditableName:"all"===a,url:$,name:S,rating:k,ratingIcons:_e(k),reviewsNumber:C,options:{emojiType:d,hasSolidShadow:c,ratingType:h,writeReviewEnabled:s}}),carousel:i?H:D,deprecatedLeaveReviewButton:P&&V(nd,{url:x})})}),M&&V(Ua,{initialIndex:z,images:R?.map(e=>e.url),open:j,onClose:()=>L()})]})},wc=D({isOpen:!1,handleShowMore:()=>{},ref:{},showButton:!1}),vc=Ue`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,fc="reputon-text-logo",xc="reputon-icon-logo",bc=He("div",io)`
    display: flex;
    align-items: stretch;
    align-items: ${e=>e.$fixedReviewsHeight?"stretch":"flex-start"};
    gap: 20px;
    width: 100%;
    animation: ${e=>e.$animation?`\n                  ${vc} .5s linear forwards\n              `:"none"};
`,yc=He("div")`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    flex-grow: 1;
    padding: 48px;
    gap: 16px;
    background: ${e=>e.theme.background};
    border-radius: 24px;
    color: #777777;
    line-height: 1.45;
    min-height: 387px;

    ${e=>e.$hasSolidShadow&&`\n            border-right: 8px solid ${e.theme.solidShadow};\n            border-bottom: 8px solid ${e.theme.solidShadow};\n        `};
    @container wrapper (max-width:${Xe}px) {
        padding: 16px;
        gap: 12px;
        min-height: 269px;
    }
    @container wrapper (max-width:${Je}px) {
        min-height: 267px;
    }
    &:after {
        content: '';
        display: none;
        position: absolute;
        width: 20px;
        height: 20px;
        z-index: -1;
        transform: skewY(-45deg) translateY(-11px);
        top: 100%;
        left: 50px;
        background: ${e=>e.theme.background};
    }
`,_c=He("div")`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`,$c=He("div")`
    max-width: 100%;
    display: flex;
    gap: 10px;
    justify-content: space-between;
`,Sc=He("div")`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    gap: 2px;
    align-items: center;
    white-space: nowrap;
    font-size: 14px;
    width: auto;
    opacity: 0;
    align-items: center;
    visibility: hidden;
    transition:
        opacity 0.2s ease,
        visibility 0.2s ease;
    z-index: 1;
`,kc=He("span")``,Cc=He("div")`
    display: flex;
    justify-content: flex-end;
    position: relative;
    filter: ${e=>"black"===e.theme.theme?"brightness(100)":"none"};
    min-width: 30px;
    height: fit-content;
    span {
        color: ${e=>e.theme.colorGoogleBadge};
        transition:
            opacity 0.2s ease,
            visibility 0.2s ease;
    }
    ${e=>e.$disableHover?"":`\n                @media (hover: hover) and (pointer: fine) {\n                    &:hover {\n                        .${fc} {\n                            opacity: 1;\n                            visibility: visible;\n                        }\n                        .${xc} {\n                            opacity: 0;\n                            visibility: visible;\n                        }\n                    }\n                }\n            `}
`,Nc=He("div")`
    display: flex;
    position: relative;
    min-width: ${e=>20*(e.$imagesPreviewCount-1)+140}px;
    min-height: 156px;
    gap: 1%;
    @container wrapper (max-width:${Xe}px) {
        min-width: ${e=>10*(e.$imagesPreviewCount-1)+66}px;
        min-height: 77px;
    }
`,Tc=He("div")`
    min-width: max(33%, 140px);
    padding-top: calc(80 * max(33%, 140px) / 72);
    position: ${e=>e.$isOpen?"relative":"absolute"};
    border-radius: 20px;
    border: 4px solid ${e=>e.theme.background};
    right: 0;
    top: 0;
    overflow: hidden;
    cursor: pointer;
    @container wrapper (max-width:${Xe}px) {
        min-width: max(33%, 66px);
        padding-top: calc(80 * max(33%, 66px) / 72);
        border: 2px solid ${e=>e.theme.background};
    }
    &:nth-child(1n) {
        z-index: calc(4 - var(--n));
        right: ${e=>e.$isOpen?"0":"calc((var(--n) - 2) * 20px)"};
        @container wrapper (max-width:${Xe}px) {
            right: ${e=>e.$isOpen?"0":"calc((var(--n) - 2) * 10px)"};
        }
    }

    &:nth-child(1) {
        --n: 2;
        &::after {
            ${({$isOpen:e,$hideImageCount:i})=>!e&&`\n                    content: ${i?`'+${i}'`:""};\n                    position: absolute;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    color: white;\n                    left: 0;\n                    top: 0;\n                    width: 100%;\n                    height: 100%;\n                    font-size: 40px;\n                    font-weight: 700;\n                    background: rgba(0, 0, 0, 30%);\n                    @container wrapper (max-width:900px) {\n                        font-size: 26px;\n                    }\n                `}
        }
    }
    &:nth-child(2) {
        --n: 3;
    }
    &:nth-child(3) {
        --n: 4;
        &::after {
            ${({$isOpen:e,$hideImageCount:i})=>e&&`\n                    content: ${i?`'+${i}'`:""};\n                    position: absolute;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    color: white;\n                    left: 0;\n                    top: 0;\n                    width: 100%;\n                    height: 100%;\n                    font-size: 40px;\n                    font-weight: 700;\n                    background: rgba(0, 0, 0, 30%);\n                    @container wrapper (max-width:900px) {\n                        font-size: 26px;\n                    }\n                `}
        }
    }
`,Rc=He("div")`
    color: ${e=>e.theme.widgets.carousel.colorTime};
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
    @container wrapper (max-width:${Xe}px) {
        font-size: 12px;
    }
`,Ic=He("div")`
    font-weight: 600;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
    white-space: nowrap;
    width: 100%;
    @container wrapper (max-width:${Xe}px) {
        font-size: 12px;
    }
`,Ac=He("div")`
    display: flex;
    flex-direction: column;
    line-height: 1.45;
    gap: 4px;
    overflow: hidden;
    @container wrapper (max-width:${Je}px) {
        min-width: 32px;
        gap: 2px;
    }
`,Lc=He("div")`
    min-width: 48px;
    width: 48px;
    height: 48px;
    @container wrapper (max-width:${Xe}px) {
        min-width: 32px;
        width: 32px;
        height: 32px;
    }
`,jc=He("div")`
    display: flex;
    gap: 12px;
    overflow: hidden;
    align-items: center;
`,Mc=He("div")`
    color: ${e=>e.theme.widgets.carousel.colorShowMore};
    display: inline-block;
    width: fit-content;
    margin-top: -12px;
    @container wrapper (max-width:${Xe}px) {
        margin-top: -8px;
    }
    & span {
        cursor: pointer;
        color: inherit;
        font-size: 18px;
        line-height: 1.15;
        text-decoration: underline;
        @container wrapper (max-width:${Xe}px) {
            font-size: 16px;
        }
    }
    & span:hover {
        text-decoration: none;
    }
`,zc=He("div")`
    display: flex;
    position: relative;
    justify-content: space-between;
    gap: 24px;
    ${e=>e.$isOpen?"\n                  flex-direction: column;\n              ":""};
    @container wrapper (max-width:${Xe}px) {
        gap: 12px;
    }
`,Pc=He("div",io)`
    overflow: hidden;
    position: relative;
    display: -webkit-box;
    text-align: left;
    color: ${e=>e.theme.widgets.grid.colorDescription};
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${({$openRows:e})=>e||4};
    font-size: 19px;
    line-height: 1.35;
    ${({$isOpen:e,$hasShowMore:i,$openRows:t})=>i?e?"\n                      cursor: pointer;\n                      -webkit-line-clamp: unset;\n                  ":`\n                      cursor: pointer;\n                      -webkit-line-clamp: ${t||4};\n                      /* mask-image: linear-gradient(180deg, black 0%, black 40%, transparent 95%); */\n                  `:e?"\n                -webkit-line-clamp: unset;\n            ":void 0};
    @container wrapper (max-width:${Xe}px) {
        font-size: 16px;
    }
`,Ec=He("div")`
    display: flex;
    gap: 4px;
    align-items: center;
`,Oc=He("img")`
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`,Bc=He(ln)``,Uc=({header:e,hiddenContainer:i,imagesBlock:t,actionButton:r,info:n,rating:o,mediumImagesBlock:a,hasSolidShadow:l,allClosed:s,alwaysOpen:d,animation:c,isAICard:p,fixedReviewsHeight:h,className:u,...m})=>{const[g,w]=oe(()=>d),[v,f]=oe(!1),x=se(null),b=se(null);return ae(()=>{d||x.current&&setTimeout(()=>{if(!x.current)return;const e=x.current.clientHeight,i=x.current.scrollHeight;f(i>e)},150)},[]),ae(()=>{s&&w(!1)},[s]),V(wc.Provider,{value:{isOpen:g??!1,handleShowMore:()=>{d||w(e=>!e)},ref:x,showButton:v},children:V(bc,{$isOpen:g,ref:b,$fixedReviewsHeight:h,className:Vi(u,"reputon-single-review","reputon-card"),$animation:c,...m,children:V(_c,{className:"reputon-container",children:[V(yc,{$isAICard:p,$hasSolidShadow:l,className:"reputon-top-part",children:[e,o,i,v&&r,a,t]}),n]})})})};Uc.Header=function({className:e,info:i,logoApp:t}){return V($c,{className:Vi(e,"reputon-review-header"),children:[i,t]})},Uc.RatingIcons=function({className:e,children:i}){return i&&V(Ec,{className:Vi(e,"reputon-rating-stars"),children:i})},Uc.Logo=function({className:e,children:i,disableHover:t}){return i&&V(Cc,{className:Vi(e,"reputon-review-logo"),$disableHover:t,children:[!t&&V(Sc,{className:Vi(fc),children:[V("span",{children:"Powered by"}),V(Bc,{$isWide:!0})]}),V(kc,{className:Vi(xc),children:i})]})},Uc.HiddenContainer=function({imagesContainer:e,textContainer:i,className:t}){const{isOpen:r}=pe(wc);return V(zc,{$isOpen:r,className:Vi(t,"reputon-text-holder"),children:[i,e]})},Uc.TextContainer=function({children:e,className:i,onClick:t}){const{isOpen:r,ref:n,handleShowMore:o,showButton:a}=pe(wc);return V(Pc,{$openRows:6,$isOpen:r,$hasShowMore:a,ref:n,className:Vi(i,"reputon-text"),onClick:()=>{t?.(),a&&o()},children:e})},Uc.Images=function({images:e,className:i,callbackAfterImageClick:t,isAi:r}){const{isOpen:n}=pe(wc),{t:o}=Qt();return e&&e.length>0&&V(Nc,{className:Vi(i,"reputon-review-images"),$isOpen:n,$imagesPreviewCount:e?.slice(0,3).length,children:e?.slice(0,3).map((i,a)=>V(Tc,{className:"reputon-small-images-container",onClick:()=>t?.(i,r),$hideImageCount:e.length>3?e.length-2:null,$isOpen:n,tabIndex:0,role:"button","aria-label":o("review_image"),onKeyPress:()=>{t?.(i,r)},children:V(Oc,{src:i,alt:"review image",loading:"lazy",className:"reputon-small-images-media"})},a))})},Uc.ShowMoreBtn=function({children:e,className:i}){const{handleShowMore:t,isOpen:r}=pe(wc),{t:n}=Qt();return V(Mc,{role:"button",tabIndex:0,"aria-label":n(r?"show_less":"show_more"),onKeyPress:t,className:Vi(i,"reputon-show-more"),onClick:t,children:e?.(r)})},Uc.InfoTop=function({className:e,icon:i,attributes:t}){return V(jc,{className:Vi(e,"reputon-reviewer-info"),children:[i,t]})},Uc.Icon=function({className:e,children:i}){return i&&V(Lc,{className:Vi(e,"reputon-image"),children:i})},Uc.Attributes=function({name:e,time:i,className:t}){return V(Ac,{className:Vi(t,"reputon-attributes"),children:[e,i]})},Uc.Name=function({children:e,className:i}){return e&&V(Ic,{className:Vi(i,"reputon-name"),children:e})},Uc.Time=function({children:e,className:i}){return e&&V(Rc,{className:Vi(i,"reputon-date"),children:e})};const Hc=He(Ds)`
    width: 32px;
    height: 32px;
    @container wrapper (max-width:${Ye}px) {
        width: 20px;
        height: 20px;
    }
`,Dc=He(Uc.RatingIcons)`
    color: ${e=>e.theme.widgets.carousel.colorReviewStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}
`,Fc=He(Uc.TextContainer)`
    color: ${e=>e.theme.widgets.carousel.colorDescription};
`,Vc=He(Uc.ShowMoreBtn)`
    color: ${e=>e.theme.widgets.carousel.colorShowMore};
`,Wc=He(Uc.Time)`
    color: ${e=>e.theme.widgets.carousel.colorTime};
`,Gc=He(lt)`
    width: 24px;
    height: 24px;
    @container wrapper (max-width:${Ye}px) {
        width: 20px;
        height: 20px;
    }
`,Zc=He(Uc.Name)`
    color: ${e=>e.theme.widgets.carousel.colorName};
`,qc=He(Gs)`
    width: 24px;
    height: 24px;
    margin-left: 12px;
    @container wrapper (max-width:${Ye}px) {
        width: 20px;
        height: 20px;
    }
`,Kc=({allClosed:e,review:i,options:t,onChangeShowMoreState:r,onImageClick:n})=>{const{t:o}=Qt(),{emojiType:a,hasSolidShadow:l,ratingType:s,verified:d,reviewPhotosType:c}=t,{authorUrl:p,rating:h,text:u,profilePhotoUrl:m,authorName:g,relativeTimeDescription:w,images:v}=i,f=_e(h),x=h?V(Dc,{$ratingType:s,children:[f?.map((e,i)=>V(Gc,{ratingType:s,emojiType:a,fill:e},i)),d&&V(qc,{verified:o("verified")})]}):null;return V(Uc,{allClosed:e,fixedReviewsHeight:!1,hasSolidShadow:l,header:V(Uc.Header,{logoApp:V(Uc.Logo,{children:V(Hc,{})}),info:V(Uc.InfoTop,{icon:V(dt,{url:p,label:`${g} ${o("review")}`,children:V(Uc.Icon,{children:V(ir,{src:m,alt:`${g} ${o("image")}`})})}),attributes:V(Uc.Attributes,{name:V(Zc,{children:V(dt,{inherit:!0,url:p,label:`${g} ${o("review")}`,children:g})}),time:V(Wc,{children:w})})})}),rating:x,hiddenContainer:V(Uc.HiddenContainer,{textContainer:V(Fc,{onClick:r,children:u}),imagesContainer:"small"===c?V(Uc.Images,{images:v?.map(({thumbnailUrl:e})=>e),callbackAfterImageClick:n}):null}),actionButton:V(Vc,{children:e=>V("span",e?{children:o("show_less")}:{onClick:r,children:o("show_more")})})})},Xc=He("div")`
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    background: linear-gradient(
        90deg,
        ${e=>e.theme.summary.colorLogoGradient1},
        ${e=>e.theme.summary.colorLogoGradient2}
    );

    &:before {
        content: 'AI';
        color: ${e=>e.theme.summary.colorLogoText};
        position: absolute;
        white-space: nowrap;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-size: 20px;
        font-weight: 500;
    }
`,Yc=He(Uc.TextContainer)``,Jc=He("p")`
    color: ${e=>e.theme.summary.colorDescription};
`,Qc=He(Uc.ShowMoreBtn)`
    color: ${e=>e.theme.summary.colorShowMore};
`,ep=He(Uc.Name)`
    color: ${e=>e.theme.summary.colorName};
    font-weight: 700;
    line-height: 22px;
    background-color: ${e=>e.theme.summary.colorBadge};
    padding: 2px 8px;
    border-radius: 99px;
    width: fit-content;
`,ip=He(Uc.Time)`
    color: ${e=>e.theme.summary.colorTime};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`,tp=He(xl)`
    margin-right: 6px;
    display: inline-block;
    height: 14px;
    width: 17px;
    @container wrapper (max-width:${Ye}px) {
        height: 11px;
        width: 15px;
    }
`;He(lt)`
    width: 24px;
    height: 24px;
    @container wrapper (max-width:${Ye}px) {
        width: 20px;
        height: 20px;
    }
`;const rp=({allClosed:e,alwaysOpen:i,options:t,onImageClick:r,images:n,onChangeShowMoreState:o,items:a,reviewsNumber:l})=>{const{t:s,locale:d}=Qt(),{hasSolidShadow:c,reviewPhotosType:p}=t;return V(Uc,{className:"reputon-summary-review",alwaysOpen:i,allClosed:e,isAICard:!0,hasSolidShadow:c,header:V(Uc.Header,{logoApp:V(Uc.Logo,{disableHover:!0,children:V(Da,{})}),info:V(Uc.InfoTop,{icon:V(Uc.Icon,{children:V(Xc,{children:" "})}),attributes:V(Uc.Attributes,{name:V(ep,{children:s("ai_summary")}),time:V(ip,{children:[`${s("based_on")}`," ",V(sn,{value:l,locale:d})," ",`${s("reviews")}`]})})})}),hiddenContainer:V(Uc.HiddenContainer,{imagesContainer:"small"===p?V(Uc.Images,{images:n?.map(({thumbnailUrl:e})=>e),callbackAfterImageClick:r,isAi:!0}):null,textContainer:V(Yc,{onClick:o,children:a.map((e,i)=>V(Jc,{children:[V(tp,{}),`${e}`]},i))})}),actionButton:V(Qc,{children:e=>V("span",e?{children:s("show_less")}:{onClick:o,children:s("show_more")})})})},np=()=>{const e=se(null),[i,t]=oe(!1);return le(()=>{const i=()=>{if(e.current){const i=e.current?.offsetWidth;t(i<=740)}};let r;return i(),e.current&&(r=new ResizeObserver(()=>{window.requestAnimationFrame(i)}),r.observe(e.current)),()=>{r&&e.current&&r.unobserve(e.current),r?.disconnect()}},[e?.current]),{isNarrow:i,containerRef:e}},op=He(Wo)`
    @container wrapper (max-width: ${Xe}px) {
        padding-block: 16px;
    }
    @container wrapper (max-width: ${Je}px) {
        padding-block: 8px;
    }
`,ap=He(Vo,io)`
    padding-block: 40px;
    @container wrapper (max-width: ${Xe}px) {
        padding-block: 30px;
    }
    @container wrapper (max-width: ${Je}px) {
        padding-block: 20px;
    }
`;He("div")`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;const lp=He("div",io)`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    min-width: 10%;
`,sp=He("div")`
    width: 100%;
    box-shadow: none;
    transition:
        filter 0.3s ease,
        transform 0.3s ease;
    & .reputon-top-part {
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.07);
        transition:
            box-shadow 0.3s ease,
            opacity 0.3s ease;
    }

    & .reputon-card {
        ${({$disableEvents:e})=>e&&"pointer-events: none"};
    }

    ${({$isActive:e})=>e&&"\n            opacity: 1;\n            z-index: 10;\n            & .reputon-top-part {\n                box-shadow: 0 0 40px rgba(0, 0, 0, 0.15);\n                @container wrapper (max-width:900px) {\n                    box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);\n                }\n                @container wrapper (max-width:550px) {\n                    box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);\n                }\n            }\n        "}
`;He("img")`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;const dp=()=>"\n    top: 50%;\n    z-index: 10;\n\n    flex-shrink: 0;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    position: absolute;\n    justify-content: center;\n    border-radius: 1000px;\n    display: flex;\n    align-items: center !important;\n    justify-content: center !important;\n    cursor: pointer;\n    @container wrapper (max-width:740px) {\n        display: none;\n        top: 0;\n        position: relative;\n        transform: none;\n    }\n",cp=He("button")`
    transform: translate(-50%, -50%);
    left: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${dp}
`,pp=He("button")`
    order: 2;
    transform: translate(50%, -50%);
    right: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${dp}
`;He(rr)`
    align-self: center;
`;const hp=({className:e,showNavigationButtons:i,reviews:t,renderCardItem:r,swiperOptions:n,widgetId:o})=>{const{t:a}=Qt(),{containerRef:l,isNarrow:s}=np(),{initSwiper:d}=Dn(),[c,p]=oe(!1),h=1===t.length;let u=s?90:70;u=h?100:u;const[m,g]=Ea({align:"center",loop:!0,duration:15,containScroll:!1},[wd({delay:n.speed,active:n.autoscroll,stopOnLastSnap:!1})]);(function({emblaApi:e,options:i}){const t=se(0),r=se([]),n=se([]),{tweenFactorBase:o,scaleMin:a,scaleMax:l,slideWidth:s}={tweenFactorBase:.52,scaleMin:.85,scaleMax:1,slideWidth:70,...i},d=ce(()=>{e&&(r.current=e.slideNodes().map(e=>e.firstElementChild))},[e]),c=ce(()=>{e&&(t.current=o*e.snapList().length)},[e]),p=ce(()=>{if(!e)return;const i=e.internalEngine(),o=e.scrollProgress();e.snapList().forEach((e,d)=>{let c=e-o;i.options.loop&&i.slideLooper.loopPoints.forEach(e=>{const i=e.target();if(d===e.index&&0!==i){const e=Math.sign(i);-1===e&&c>.5&&(c-=1),1===e&&c<-.5&&(c+=1)}});const p=(h=1-Math.abs(c*t.current),Math.min(Math.max(h,0),1));var h;const u=a+p*(l-a),m=-Math.sign(c)*(1-p)*(g=s,Math.round(-.04*g*g+8.1*g-225));var g;const w=r.current[d];if(w){w.style.transform=`translateX(${m.toFixed(1)}%) scale(${u})`,w.style.opacity=p.toString();const e=Math.round(10*p);n.current[d]!==e&&(w.parentElement.style.zIndex=e.toString(),n.current[d]=e)}})},[e,s,a,l]);ae(()=>{if(e)return d(),c(),p(),e.on("reinit",d).on("reinit",c).on("reinit",p).on("scroll",p).on("slidefocus",p),()=>{e.off("reinit",d).off("reinit",c).off("reinit",p).off("scroll",p).off("slidefocus",p)}},[e,d,c,p])})({emblaApi:g,options:{slideWidth:u}}),Yo({emblaApi:g});const{activeIndex:w}=function({emblaApi:e,widgetId:i,navigation:t}){const[r,n]=oe(0);return ea({emblaApi:e,onSlideChange:ce(()=>{e&&n(e.selectedSnap())},[e])}),ae(()=>{if(!e)return;const i=i=>{e.plugins().autoplay?.stop(),"next"===i?e.goToNext():e.goToPrev()},r=()=>i("next"),n=()=>i("prev"),o=document.querySelectorAll(t.next),a=document.querySelectorAll(t.prev);return o.forEach(e=>e.addEventListener("click",r)),a.forEach(e=>e.addEventListener("click",n)),()=>{o.forEach(e=>e.removeEventListener("click",r)),a.forEach(e=>e.removeEventListener("click",n))}},[e,i]),{activeIndex:r}}({emblaApi:g,widgetId:o,navigation:{prev:`#${o} .reputon-swiper-button-prev`,next:`#${o} .reputon-swiper-button-next`}});ea({emblaApi:g,onSlideChange:ce(()=>{p(!0)},[])}),ae(()=>d({emblaApi:g}),[g,d,t.length]);const v=ce(()=>{p(!1),g?.plugins().autoplay?.stop()},[g]);return V(lp,{ref:l,className:`${e}`,children:[t.length>1&&i&&V(cp,{type:"button","aria-label":a("previous_slide"),className:"reputon-swiper-button-prev",children:V(qn,{})}),t.length>1&&i&&V(pp,{type:"button","aria-label":a("next_slide"),className:"reputon-swiper-button-next",children:V(Kn,{})}),V(ap,{ref:m,children:V(op,{children:t.map((e,i)=>V(Go,{$widthPercent:u,children:V(Zo,{className:"embla-rotator-inner",children:V(sp,{$disableEvents:i!==w,$isActive:!h&&i===w,children:r({review:e,allClosed:c,stopSwiper:v})})})},i))})})]})},up=({ratingLogoPlace:e="none"})=>{const{data:i,widgetId:t}=pe(Bi),{contentIndex:r,hasShadow:n,writeReviewEnabled:o,emojiType:a,hasSolidShadow:l,autoscroll:s,ratingType:d,reviewPhotosType:c,delay:p,navigationType:h}=Nw(ti),{business:u,verified:m}=i,{writeReviewUrl:g,summary:w,imageUrl:v,url:f,name:x,rating:y,reviewsNumber:_,reviews:$}=Ui({contentIndex:r,business:u}),{aggregatedImages:S,summaryImages:k}=Mn($,!!w),{setFullScreenImageOptions:C,handleClosePopup:N,open:T,popupContent:R,initialIndex:I}=zn(S),A=o&&!!g,L=((e,i=40)=>{const t=[...e];if(t.length<=1)return t;for(;t.length<i;)t.push(...e);return t})(Ln({summaryCard:Boolean(w),reviews:$}),4),j=1===L.length||n,M=jn(+p,zr);return V(b,{children:[V(Hn,{children:V(ad,{gap:8,hasShadow:n,header:e===rn?V(An,{writeReviewUrl:g,imageUrl:v,isEditableName:"all"===r,url:f,name:x,rating:y,ratingIcons:_e(y),reviewsNumber:_,options:{emojiType:a,hasSolidShadow:l,ratingType:d,writeReviewEnabled:o}}):null,carousel:V(hp,{className:"reputon-carousel-holder",widgetId:t,reviews:L,showNavigationButtons:!j&&"arrows"==h,swiperOptions:{autoscroll:s,speed:M},renderCardItem:({review:e,allClosed:i,stopSwiper:t})=>"summaryCard"===e?w&&V(rp,{allClosed:i,items:w?.items,onImageClick:C,options:{reviewPhotosType:c,hasSolidShadow:l,emojiType:a,ratingType:d},onChangeShowMoreState:t,reviewsNumber:_,images:k},"summaryReview"):V(Kc,{review:e,allClosed:i,options:{verified:m,hasSolidShadow:l,reviewPhotosType:c,ratingType:d,emojiType:a},onChangeShowMoreState:t,onImageClick:(e,i)=>C(e,i)})}),deprecatedLeaveReviewButton:A?V(nd,{url:g}):null,dottedNavigation:!j&&"dotted"==h&&V(Wn,{renderDotVisual:e=>V(td,{$variant:e})}),bottomNavigationButtons:!j&&"arrows"==h&&V(Pl,{})})}),R&&V(Ua,{initialIndex:I,images:S?.map(e=>e.url),open:T,onClose:()=>N()})]})},mp=He(ir)`
    border-radius: 100px;
`,gp=He("div")`
    background: ${e=>e.theme.background};
    border-radius: 16px;
    padding: 12px;
    display: flex;
    width: fit-content;
    max-width: 280px;
    align-self: center;
    flex-direction: column;
    gap: 12px;
    ${e=>e.$hasSolidShadow&&`\n            border-right: 8px solid ${e.theme.solidShadow};\n            border-bottom: 8px solid ${e.theme.solidShadow};\n        `};
    @container wrapper (max-width:${Ye}px) {
        max-width: none;
        align-self: flex-start;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    @container wrapper (max-width:${Je}px) {
        flex-direction: column;
        align-items: normal;
    }
`,wp=He(({$isEditable:e,$content:i,...t})=>V(Qi.Name,{...t,isEditable:e,content:i}))`
    min-width: 0;
    color: ${e=>e.theme.widgets.carousel.colorSellerName};
    &:hover {
        text-decoration: ${e=>e.theme.hasLink?"underline":"none"};
    }
`,vp=He(Qi.ReviewsText)`
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
    width: max-content;
`,fp=He(Qi.Rating)`
    color: ${e=>e.theme.widgets.carousel.colorSellerStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}

    ${({$ratingType:e,theme:i})=>"emoji"===e&&`\n            color: ${i.widgets.carousel.colorSellerName};\n        `}
`,xp=He(Qi.Container)`
    display: flex;
    min-width: 100px;
    width: auto;
    gap: 8px;
    flex-shrink: 1;
    min-width: 0;
`;He("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
    margin-top: 4px;
    font-size: 11px;
    @container wrapper (max-width:${Ye}px) {
        justify-content: center;
    }
`;const bp=He(rr)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    align-self: center;
    width: 100%;
`,yp=({className:e,isEditableName:i,writeReviewUrl:t,reviewsNumber:r,url:n,rating:o,iconSrc:a,name:l,options:s})=>{const{t:d,locale:c}=Qt(),{writeReviewEnabled:p,emojiType:h,ratingType:u,hasSolidShadow:m}=s,g=_e(o);return V(gp,{$hasSolidShadow:m,className:e,children:[V(Qi,{children:V(xp,{icon:V(dt,{url:n,label:`${l} ${d("reviews")}`,children:V(Qi.Icon,{children:V(mp,{src:a,alt:d("business_image")})})}),content:V(Qi.Content,{name:V(dt,{inherit:!0,url:n,label:`${l} ${d("reviews")}`,children:V(wp,{$isEditable:i,$content:l,children:l})}),rating:V(dt,{url:n,label:`${l} ${d("reviews")}`,children:V(fp,{$ratingType:u,children:[V(Qi.Count,{children:Se(o)}),V(Qi.RatingIcons,{children:g.map((e,i)=>V(lt,{ratingType:u,emojiType:h,fill:e},i))})]})}),reviewsText:V(vp,{children:[V(sn,{value:r,locale:c})," ",d("reviews_on"),V(ln,{$isWide:!0})]})})})}),p&&t&&V(dt,{className:"reputon-buttons-holder",url:t,label:d("write_review"),children:V(bp,{className:"reputon-bt reputon-link reputon-leave-review editable",content:d("write_review")})})]})},_p=He("div")`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 32px;
    @container wrapper (max-width:${Ye}px) {
        margin: 0;
    }
`,$p=He("div")`
    display: flex;
    min-width: 10%;
    gap: 48px;
    @container wrapper (max-width: ${Ye}px) {
        gap: 16px;
        flex-direction: column;
    }
`;He(rr)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    align-self: center;
    width: 100%;
`,He("div")`
    display: none;
    order: 2;
    @container wrapper (max-width:${Ye}px) {
        justify-content: center;
        display: flex;
        gap: 16px;
        & button {
            display: flex;
        }
    }
`;const Sp=()=>"\n    position: absolute;\n    top: 50%;\n    z-index: 10;\n\n    flex-shrink: 0;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center !important;\n    justify-content: center !important;\n    border-radius: 1000px;\n    cursor: pointer;\n    @container wrapper (max-width:740px) {\n        display: none;\n        top: 0;\n        position: relative;\n        transform: none;\n    }\n";He("button")`
    transform: translate(-50%, -50%);
    left: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${Sp}
`,He("button")`
    order: 2;
    transform: translate(50%, -50%);
    right: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${Sp}
`;const kp=({infoSeller:e,bottomNavigationButtons:i,carousel:t,dottedNavigation:r,deprecatedLeaveReviewButton:n})=>V(_p,{className:"reputon-carousel-static-plate-container",children:V($p,{className:"reputon-static-plate-container",children:[e,n,V(Np,{className:"reputon-static-plate-navigation-wrapper",children:[t,r&&V(Cp,{className:"reputon-static-plate-navigation-container",children:r})]}),i]})}),Cp=He("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`,Np=He("div")`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`,Tp=({isFluid:e=!1})=>{const[i,t]=oe(!1),{data:r,widgetId:n}=pe(Bi),{contentIndex:o,hasShadow:a,writeReviewEnabled:l,emojiType:s,hasSolidShadow:d,autoscroll:c,ratingType:p,reviewPhotosType:h,fixedReviewsHeight:u,delay:m,navigationType:g}=Nw(ti),{business:w,verified:v}=r,{writeReviewUrl:f,summary:x,url:y,name:_,rating:$,reviewsNumber:S,reviews:k,icon:C}=Ui({contentIndex:o,business:w}),{aggregatedImages:N,summaryImages:T}=Mn(k,!!x),{setFullScreenImageOptions:R,handleClosePopup:I,open:A,popupContent:L,initialIndex:j}=zn(N),M=l&&!!f,z=Ln({summaryCard:Boolean(x),reviews:k}),P=jn(+m,10),E=jn(+m,zr),O=V(md,{className:"reputon-carousel-holder",reviews:z,isPopupOpen:A,swiperOptions:{speed:P,hasShadow:a},gap:20,renderCardItem:({review:e,stopSwiper:i})=>"summaryCard"===e?x&&V(Il,{items:x?.items,onImageClick:R,options:{reviewPhotosType:h,fixedReviewsHeight:u,hasShadow:d},onChangeShowMoreState:i,reviewsNumber:S,images:T},"summaryReview"):V(id,{review:e,options:{fixedReviewsHeight:u,hasSolidShadow:d,reviewPhotosType:h,ratingType:p,emojiType:s},verified:v,onChangeShowMoreState:i,onImageClick:(e,i)=>R(e,i)})}),B=V(_d,{className:"reputon-carousel-holder",onSlidesPerViewChange:e=>{t(e<z.length&&!a)},hasNavigation:i&&"arrows"==g,widgetId:n,reviews:z,swiperOptions:{autoscroll:c,speed:E,hasShadow:a},gap:20,renderCardItem:({review:e,allClosed:i,stopSwiper:t})=>"summaryCard"===e?x&&V(Il,{allClosed:i,items:x?.items,onImageClick:R,options:{reviewPhotosType:h,fixedReviewsHeight:u,hasShadow:d},onChangeShowMoreState:t,reviewsNumber:S,images:T},"summaryReview"):V(id,{review:e,allClosed:i,options:{fixedReviewsHeight:u,hasSolidShadow:d,reviewPhotosType:h,ratingType:p,emojiType:s},verified:v,onChangeShowMoreState:t,onImageClick:(e,i)=>R(e,i)})});return V(b,{children:[V(Hn,{children:V(kp,{bottomNavigationButtons:i&&"arrows"===g&&V(Pl,{}),dottedNavigation:i&&"dotted"===g&&V(Wn,{renderDotVisual:e=>V(td,{$variant:e})}),infoSeller:V(yp,{reviewsNumber:S,iconSrc:C,name:_,rating:$,url:y,writeReviewUrl:f,options:{emojiType:s,ratingType:p,hasSolidShadow:d,writeReviewEnabled:l},isEditableName:"all"===o,className:"reputon-static-plate"}),carousel:e?O:B,deprecatedLeaveReviewButton:M&&V(nd,{url:f})})}),L&&V(Ua,{initialIndex:j,images:N?.map(e=>e.url),open:A,onClose:()=>I()})]})},Rp=He(Qi.Icon)`
    min-width: 32px;
    width: 32px;
    height: 32px;
`,Ip=He(ir)`
    border-radius: 100px;
`,Ap=He("div")`
    background: ${e=>e.theme.background};
    border-radius: 16px;
    padding: 8px;
    display: flex;
    width: fit-content;
    width: 220px;
    align-self: center;
    flex-direction: column;
    gap: 8px;
    flex-shrink: 0;
    ${e=>e.$hasSolidShadow&&`\n            border-right: 4px solid ${e.theme.solidShadow};\n            border-bottom: 4px solid ${e.theme.solidShadow};\n        `};
    @container wrapper (max-width:${439}px) {
        max-width: none;
        align-self: flex-start;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    @container wrapper (max-width:${439}px) {
        flex-direction: column;
        align-items: normal;
    }
`,Lp=He(({$isEditable:e,$content:i,...t})=>V(Qi.Name,{...t,isEditable:e,content:i}))`
    min-width: 0;
    line-height: 16px;
    font-size: 12px;
    color: ${e=>e.theme.widgets.carousel.colorSellerName};
    &:hover {
        text-decoration: ${e=>e.theme.hasLink?"underline":"none"};
    }
`,jp=He(Qi.ReviewsText)`
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
    width: max-content;
    font-size: 10px;
    line-height: 14px;
`,Mp=He(Qi.Rating)`
    color: ${e=>e.theme.widgets.carousel.colorSellerStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}

    ${({$ratingType:e,theme:i})=>"emoji"===e&&`\n            color: ${i.widgets.carousel.colorSellerName};\n        `}
`,zp=He(Qi.Count)`
    font-size: 14px;
    line-height: 16px;
    height: 16px;
`,Pp=He(Qi.RatingIcons)`
    height: 16px;
`,Ep=He(lt)`
    width: 12px;
    height: 12px;
`,Op=He(ln)`
    min-width: 48px;
    height: 16px;
`,Bp=He(Qi.Container)`
    min-width: 100px;
    width: auto;
    flex-shrink: 1;
    min-width: 0;
`,Up=He(Qi.Content)`
    gap: 2px;
`;He("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
    margin-top: 4px;
    font-size: 11px;
    @container wrapper (max-width:${Ye}px) {
        justify-content: center;
    }
`;const Hp=He(rr)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    align-self: center;
    width: 100%;
    padding: 8px 10px;
    font-size: 12px;
    line-height: 16px;
`,Dp=({className:e,isEditableName:i,writeReviewUrl:t,reviewsNumber:r,url:n,rating:o,iconSrc:a,name:l,options:s})=>{const{t:d,locale:c}=Qt(),{writeReviewEnabled:p,emojiType:h,ratingType:u,hasSolidShadow:m}=s,g=_e(o);return V(Ap,{$hasSolidShadow:m,className:e,children:[V(Qi,{children:V(Bp,{icon:V(dt,{url:n,label:`${l} ${d("reviews")}`,children:V(Rp,{children:V(Ip,{src:a,alt:d("business_image")})})}),content:V(Up,{name:V(dt,{inherit:!0,url:n,label:`${l} ${d("reviews")}`,children:V(Lp,{$isEditable:i,$content:l,children:l})}),rating:V(dt,{url:n,label:`${l} ${d("reviews")}`,children:V(Mp,{$ratingType:u,children:[V(zp,{children:Se(o)}),V(Pp,{children:g.map((e,i)=>V(Ep,{ratingType:u,emojiType:h,fill:e},i))})]})}),reviewsText:V(jp,{children:[V(sn,{value:r,locale:c})," ",d("reviews_on"),V(Op,{$isWide:!0})]})})})}),p&&t&&V(dt,{className:"reputon-buttons-holder",url:t,label:d("write_review"),children:V(Hp,{className:"reputon-bt reputon-link reputon-leave-review editable",content:d("write_review")})})]})},Fp=He("div")`
    display: flex;
    flex-direction: column;
    margin: 0;
    gap: 12px;
    padding-bottom: ${e=>e.$hasExtraPadding?"24px":"0"};
`,Vp=He("div")`
    display: flex;
    min-width: 10%;
    gap: 12px;
    @container wrapper (max-width: ${439}px) {
        gap: 16px;
        flex-direction: column;
    }
`;He(rr)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    align-self: center;
    width: 100%;
`,He("div")`
    display: none;
    order: 2;
    @container wrapper (max-width:${Ye}px) {
        justify-content: center;
        display: flex;
        gap: 16px;
        & button {
            display: flex;
        }
    }
`;const Wp=()=>"\n    position: absolute;\n    top: 50%;\n    z-index: 10;\n\n    flex-shrink: 0;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center !important;\n    justify-content: center !important;\n    border-radius: 1000px;\n    cursor: pointer;\n    @container wrapper (max-width:740px) {\n        display: none;\n        top: 0;\n        position: relative;\n        transform: none;\n    }\n";He("button")`
    transform: translate(-50%, -50%);
    left: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${Wp}
`,He("button")`
    order: 2;
    transform: translate(50%, -50%);
    right: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${Wp}
`;const Gp=He("div")`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(24px);
    display: flex;
    align-items: center;
    justify-content: center;
`,Zp=He("div")`
    position: relative;
    width: 100%;
`,qp=({infoSeller:e,bottomNavigationButtons:i,carousel:t,dottedNavigation:r})=>V(Fp,{$hasExtraPadding:!!r,className:"reputon-carousel-static-plate-container",children:[V(Vp,{className:"reputon-static-plate-container",children:[e,V(Zp,{children:[t,r&&V(Gp,{children:r})]})]}),i]}),Kp=[{breakpoint:2400,slidesPerView:4},{breakpoint:1100,slidesPerView:3},{breakpoint:768,slidesPerView:2},{breakpoint:440,slidesPerView:1}],Xp=({isFluid:e=!1})=>{const[i,t]=oe(!1),{data:r,widgetId:n}=pe(Bi),{contentIndex:o,hasShadow:a,writeReviewEnabled:l,emojiType:s,hasSolidShadow:d,autoscroll:c,ratingType:p,reviewPhotosType:h,fixedReviewsHeight:u,delay:m,navigationType:g}=Nw(ti),{business:w,verified:v}=r,{writeReviewUrl:f,summary:x,url:y,name:_,rating:$,reviewsNumber:S,reviews:k,icon:C}=Ui({contentIndex:o,business:w}),{aggregatedImages:N,summaryImages:T}=Mn(k,!!x),{setFullScreenImageOptions:R,handleClosePopup:I,open:A,popupContent:L,initialIndex:j}=zn(N),M=l&&!!f,z=Ln({summaryCard:Boolean(x),reviews:k}),P=jn(+m,10),E=jn(+m,zr),O=V(md,{className:"reputon-carousel-holder",reviews:z,isPopupOpen:A,swiperOptions:{speed:P,hasShadow:a},gap:12,slideWidth:214,renderCardItem:({review:e,stopSwiper:i})=>"summaryCard"===e?x&&V(hc,{items:x?.items,onImageClick:R,options:{reviewPhotosType:h,fixedReviewsHeight:u,hasShadow:d},onChangeShowMoreState:i,reviewsNumber:S,images:T},"summaryReview"):V(ic,{review:e,options:{fixedReviewsHeight:u,hasSolidShadow:d,reviewPhotosType:h,ratingType:p,emojiType:s},verified:v,onChangeShowMoreState:i,onImageClick:(e,i)=>R(e,i)})}),B=V(_d,{className:"reputon-carousel-holder",onSlidesPerViewChange:e=>{t(e<z.length&&!a)},hasNavigation:!1,widgetId:n,reviews:z,swiperOptions:{autoscroll:c,speed:E,hasShadow:a},gap:12,breakpoints:Kp,renderCardItem:({review:e,allClosed:i,stopSwiper:t})=>"summaryCard"===e?x&&V(hc,{allClosed:i,items:x?.items,onImageClick:R,options:{reviewPhotosType:h,fixedReviewsHeight:u,hasShadow:d},onChangeShowMoreState:t,reviewsNumber:S,images:T},"summaryReview"):V(ic,{review:e,allClosed:i,options:{fixedReviewsHeight:u,hasSolidShadow:d,reviewPhotosType:h,ratingType:p,emojiType:s},verified:v,onChangeShowMoreState:t,onImageClick:(e,i)=>R(e,i)})});return V(b,{children:[V(Hn,{children:V(qp,{infoSeller:V(Dp,{reviewsNumber:S,iconSrc:C,name:_,rating:$,url:y,writeReviewUrl:f,options:{emojiType:s,ratingType:p,hasSolidShadow:d,writeReviewEnabled:l},isEditableName:"all"===o,className:"reputon-static-plate"}),carousel:e?O:B,bottomNavigationButtons:i&&"arrows"===g&&V(uc,{}),dottedNavigation:i&&"dotted"===g&&V(Wn,{renderDotVisual:e=>V(td,{$variant:e})}),deprecatedLeaveReviewButton:M&&V(nd,{url:f})})}),L&&V(Ua,{initialIndex:j,images:N?.map(e=>e.url),open:A,onClose:()=>I()})]})},Yp=()=>{const{data:e,container:i}=pe(Bi);Hi({container:i});const{contentIndex:t,ratingType:r,emojiType:n,hasSolidShadow:o,variant:a,UIWidgetType:l,writeReviewEnabled:s}=Nw(ti),{business:d}=e,{reviews:c,writeReviewUrl:p,imageUrl:h,url:u,name:m,reviewsNumber:g,rating:w}=Ui({contentIndex:t,business:d}),v={[Vr]:V($d,{ratingLogoPlace:on}),[Gr]:V($d,{ratingLogoPlace:rn}),[Wr]:V($d,{ratingLogoPlace:nn}),[Zr]:V(Tp,{}),[Or]:V($d,{ratingLogoPlace:"none",isFluid:!0}),[Br]:V($d,{isFluid:!0,ratingLogoPlace:"header"}),[Hr]:V($d,{ratingLogoPlace:"inCard",isFluid:!0}),[Ur]:V(Tp,{isFluid:!0}),[Dr]:V(up,{ratingLogoPlace:on}),[Fr]:V(up,{ratingLogoPlace:rn}),[qr]:V(gc,{ratingLogoPlace:on}),[Kr]:V(gc,{ratingLogoPlace:nn}),[Xr]:V(gc,{ratingLogoPlace:rn}),[Yr]:V(Xp,{}),[Jr]:V(gc,{ratingLogoPlace:on,isFluid:!0}),[Qr]:V(gc,{ratingLogoPlace:nn,isFluid:!0}),[en]:V(gc,{ratingLogoPlace:rn,isFluid:!0}),[tn]:V(Xp,{isFluid:!0})},f=!c?.length,x=f&&!!w,b=[Er.CAROUSEL_COMPACT];return V(Mr,f&&!w?{className:`reputon-reviews-holder reputon-${a}`,children:V(Ar,{isCompact:a===Er.CAROUSEL_COMPACT,emojiType:n,ratingType:r,writeReviewUrl:p,imageUrl:h,url:u??"",name:m??"",solidShadow:o})}:x?{className:`reputon-reviews-holder reputon-${a}`,children:V(An,{isCompact:a===Er.CAROUSEL_COMPACT,writeReviewUrl:p,imageUrl:h,isEditableName:"all"===t,url:u,name:m,rating:w,ratingIcons:_e(w),reviewsNumber:g,options:{emojiType:n,hasSolidShadow:o,ratingType:r,writeReviewEnabled:s}})}:{noPadding:b.includes(a),className:`reputon-reviews-holder reputon-${a}`,children:v[l]})},Jp=Er.CAROUSEL,Qp=Pr.NONE,eh=({container:e,legacyOptions:i})=>{const t=(e=>{const i="true"===e?.getAttribute(gi),t="true"===e?.getAttribute(hi),r=e?.getAttribute(wi)===si,n=e?.getAttribute(Ai),o=e?.getAttribute(pi),a=e?.getAttribute(yi),l=e?.getAttribute($i),s=e?.getAttribute("data-header-type"),d=e?.getAttribute(ji),c=e?.getAttribute(Pi),p=e?.getAttribute(Ii),h=e?.getAttribute(Ri),u=e?.getAttribute(Mi),m=e?.getAttribute("data-navigation-type"),g="true"===e?.getAttribute(ui),w="true"===e?.getAttribute(mi),v="false"!==e?.getAttribute(vi),f="true"===e?.getAttribute(_i),x="true"===e?.getAttribute(Li);return{showRating:i,showReviewPhoto:t,carouselExtended:r,font:n,theme:o,photoType:l,headerType:s,variant:c,emojiTypeNumber:u,contentIndex:a,hasSolidShadow:"true"===e?.getAttribute(zi),writeReviewEnabled:g,autoscroll:w,fixedReviewsHeight:v,cardColor:e?.getAttribute(Si)||"",starsColor:e?.getAttribute(ki)||"",textColor:e?.getAttribute(Ci)||"",transparency:h,delay:p,hasShadow:f,fluidScrolling:x,ratingType:d,navigationType:m}})(e),r=(e=>{if(!e)return;const i=e.properties.showRating||"carousel_extended"===e.type,t=e.properties.showReviewPhotos;return{theme:e.theme,writeReviewEnabled:e.properties.writeReviewEnabled,autoscroll:e.properties.autoscroll,delay:e.properties.delay||"5",headerType:i?"top":"none",photoType:t?"large":"none"}})(i),n=r?{...t,...r}:t,{autoscroll:o,fluidScrolling:a,headerType:l,variant:s,theme:d,cardColor:c,contentIndex:p,delay:h,emojiTypeNumber:u,fixedReviewsHeight:m,font:g,hasShadow:w,hasSolidShadow:v,photoType:f,ratingType:x,starsColor:b,textColor:y,transparency:_,writeReviewEnabled:$,navigationType:S}=n,k=o&&a,C=Object.values(Pr).includes(l)?l:Qp;return{type:ti,theme:d,UIWidgetType:s===Er.ROTATOR?C===Pr.TOP?Fr:Dr:s===Er.CAROUSEL_COMPACT&&k?C===Pr.TOP?en:C===Pr.LEFT?tn:C===Pr.IN_CARD?Qr:Jr:s===Er.CAROUSEL_COMPACT?C===Pr.TOP?Xr:C===Pr.LEFT?Yr:C===Pr.IN_CARD?Kr:qr:k?C===Pr.TOP?Br:C===Pr.LEFT?Ur:C===Pr.IN_CARD?Hr:Or:C===Pr.TOP?Gr:C===Pr.LEFT?Zr:C===Pr.IN_CARD?Wr:Vr,contentIndex:"all"===p?"all":Number(p)-1,reviewPhotosType:f,writeReviewEnabled:$,autoscroll:o,variant:Object.values(Er).includes(s)?s:Jp,headerType:C,fixedReviewsHeight:m,customColors:{cardColor:c,starsColor:b,textColor:y},transparency:_?Number(_):1,delay:h??"5",font:Ei.includes(g)?g:"default",hasShadow:w,fluidScrolling:a,ratingType:Oi.includes(x)?x:"stars",emojiType:u&&Number(u)||0,hasSolidShadow:v,navigationType:S??"arrows"}},ih=He("div")`
    position: absolute;
    z-index: 2;
    top: ${e=>e.$isSmall||e.$hasSolidShadow?"-2px":"6px"};
    right: ${e=>e.$isSmall||e.$hasSolidShadow?"-2px":"0"};
    width: 20px;
    height: 20px;
    text-align: center;
    transition: ${e=>e.theme.transition};
`,th=He("button")`
    color: ${e=>e.theme.closeStickyIcon};
    background: transparent;
    font-size: ${e=>e.$isSmall?"10px":"12px"};
    opacity: ${e=>e.$isSmall?"0.5":"1"};
`,rh=He("div")`
    display: ${e=>e.$hidden?"none":"flex"};
    position: relative;
    justify-content: center;
    flex-direction: column;
    width: fit-content;
    height: auto;
    box-shadow: ${e=>e.theme.shadow};
    border-radius: ${({isSmall:e})=>e?"8px":"12px"};
    transition: background 0.3s;
    overflow: hidden;
    transform-origin: left center;

    ${e=>e.$hasSolidShadow&&`\n            border-right: 4px solid ${e.theme.widgets.compact.solidShadow};\n            border-bottom: 4px solid ${e.theme.widgets.compact.solidShadow};\n        `};

    /* @media (max-width: ${e=>e.theme.media.mobile}px) {
        transform: scale(0.9);
    } */

    &::before {
        content: '';
        display: ${e=>e.isSmall||e.$hasSolidShadow?"none":"block"};
        width: 100%;
        height: 6px;
        background: ${e=>e.theme.widgets.compact.colorLine};
    }
`,nh=({showCloseButton:e,variant:i="default",hasSolidShadow:t,isShow:r=!0,className:n,children:o,onClick:a,...l})=>{const{show:s,hideWidgets:d}=Lr();return s&&V(rh,{onClick:a,isSmall:"small"===i,$hasSolidShadow:t,$hidden:!s||!r,className:Vi("reputon-badge",n),...l,children:[e&&V(ih,{$isSmall:"small"===i,$hasSolidShadow:t,className:"reputon-bt-close",children:V(th,{$isSmall:"small"===i,onClick:e=>{e.preventDefault(),e.stopPropagation(),d()},type:"button",children:"✕"})}),o]})},oh=He("div")`
    width: ${e=>e.theme.compactWidth}px;
    min-width: 205px;
    transition: ${e=>e.theme.transition};
`,ah=({content:e,className:i})=>V(oh,{className:Vi("reputon-container",i),children:e}),lh=He(Ds)`
    width: 100%;
`,sh=He(Qi.Container)`
    padding: 5px 25px 5px 10px;
`,dh=He(ah)`
    background: ${e=>e.theme.widgets.compact.background};
    &:hover {
        background: ${e=>e.theme.hasLink&&e.theme.widgets.compact.backgroundHover};
    }
`,ch=He(Qi.Rating)`
    color: ${e=>e.theme.widgets.compact.colorSellerStars};
`,ph=He("div")`
    height: 17px;
`,hh=He(Qi.RatingIcons)`
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}
    gap: 2px;
`,uh=He(Qi.Name)`
    color: ${e=>e.theme.widgets.compact.colorSellerName};
`,mh=He(Qi.ReviewsText)`
    color: ${e=>e.theme.widgets.compact.colorReviewsCount};
`,gh=({options:e,name:i,showCloseButton:t})=>{const{t:r}=Qt(),{handleMouseEnterIcon:n,handleMouseLeaveIcon:o,icons:a}=Di(),{emojiType:l,hasSolidShadow:s,ratingType:d}=e;return V(nh,{showCloseButton:t,hasSolidShadow:s,children:V(dh,{content:V(Qi,{children:V(sh,{icon:V(Qi.Icon,{children:V(lh,{})}),content:V(Qi.Content,{name:V(uh,{children:i}),rating:V(ch,{children:V(hh,{$ratingType:d,children:a.map((e,i)=>V(ph,{onMouseEnter:n(i),onMouseLeave:o,children:V(lt,{ratingType:d,emojiType:l,fill:e},i)},i))})}),reviewsText:V(mh,{children:r("no_reviews_yet")||"Be the first to review"})})})})})})},wh=He("div")`
    display: flex;
    padding: 4px 8px;
    gap: 8px;
    align-items: center;
    transition: ${e=>e.theme.transition};
    background: ${e=>e.theme.widgets.compact.background};
    &:hover {
        background: ${e=>e.theme.hasLink&&e.theme.widgets.compact.backgroundHover};
    }
`,vh=He("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
`,fh=He("div")`
    display: flex;
    align-items: center;
    justify-content: center;
`,xh=He("div")`
    color: ${e=>e.theme.widgets.compact.colorSellerStars};
    font-size: 32px;
    font-weight: 900;
    line-height: 37px;
    align-self: center;
`,bh=He("div")`
    color: ${e=>e.theme.widgets.compact.colorSellerStars};
    display: flex;
    gap: 2px;
    height: 10px;
`,yh=He("div")`
    color: ${e=>e.theme.widgets.compact.colorReviewsCount};
    font-size: 9px;
    font-weight: 400;
    line-height: 10px;
    display: flex;
`;He("div")`
    margin: 0px 0px 0px 2px;
`,He("div")`
    display: flex;
`;const _h=({className:e,icon:i,content:t})=>V(wh,{className:Vi(e,"reputon-container"),children:[i,t]});_h.Content=function({rating:e,ratingIcons:i,reviewsText:t,className:r}){return V(vh,{className:Vi(r,"reputon-content"),children:[e,i,t]})},_h.Rating=function({children:e,className:i}){return e?V(xh,{className:Vi(i,"reputon-rating-count"),children:e}):null},_h.RatingIcons=function({className:e,children:i}){return i?V(bh,{className:Vi(e,"reputon-rating-stars"),children:i}):null},_h.Text=function({className:e,children:i}){return i?V(yh,{className:Vi(e,"reputon-reviews-count"),children:i}):null},_h.Icon=function({className:e,children:i}){return i?V(fh,{className:Vi(e,"reputon-image"),children:i}):null};const $h=He(Ds)`
    width: 40px;
    height: 40px;
`,Sh=He(lt)`
    width: 9px;
    height: 9px;
`,kh=He(Qi.RatingIcons)`
    color: ${e=>e.theme.widgets.compact.colorSellerStars};
    gap: 2px;
    height: 9px;
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}
`,Ch=He(_h)`
    padding: 13px 8px;
`,Nh=He(_h.Content)`
    gap: 2px;
`,Th=({emojiType:e,ratingType:i,hasSolidShadow:t,showCloseButton:r})=>{const{t:n}=Qt(),{handleMouseEnterIcon:o,handleMouseLeaveIcon:a,icons:l}=Di();return V(nh,{variant:"small",showCloseButton:r,hasSolidShadow:t,className:"reputon-review-badge",children:V(Ch,{icon:V(_h.Icon,{children:V($h,{})}),content:V(Nh,{ratingIcons:V(kh,{$ratingType:i,children:l.map((t,r)=>V("div",{className:"reputon-star-container",onMouseEnter:o(r),onMouseLeave:a,children:V(Sh,{fill:t,ratingType:i,emojiType:e})},r))}),reviewsText:V(_h.Text,{children:n("no_reviews_yet")||"Be the first to review"})})})})},Rh=({variant:e,url:i,options:t,showCloseButton:r,name:n})=>{const{t:o}=Qt(),{emojiType:a,hasSolidShadow:l,ratingType:s}=t;return V(Mr,{className:Vi("reputon-reviews-holder","reputon-basic"),children:V(dt,{url:i,label:o("write_review"),children:"small"===e?V(Th,{showCloseButton:r,emojiType:a,hasSolidShadow:l,ratingType:s}):V(gh,{showCloseButton:r,name:n,options:t})})})},Ih="basic",Ah="small",Lh="star-rating",jh="trust-bar",Mh="basic-slide",zh="inline",Ph="inline-reviews",Eh=["true","star","inline","inline-reviews"],Oh=He(Ds)`
    width: 100%;
`,Bh=He(Qi.Container)`
    padding: 10px;
`,Uh=He(ah)`
    background: ${e=>e.theme.widgets.compact.background};
    &:hover {
        background: ${e=>e.theme.hasLink&&e.theme.widgets.compact.backgroundHover};
    }
`,Hh=He(Qi.Rating)`
    color: ${e=>e.theme.widgets.compact.colorSellerStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}

    ${({$ratingType:e,theme:i})=>"emoji"===e&&`\n            color: ${i.widgets.compact.colorSellerName};\n        `}
`,Dh=Qi.Name,Fh=He(({isEditable:e,content:i,...t})=>V(Dh,{...t,isEditable:e,content:i}))`
    color: ${e=>e.theme.widgets.compact.colorSellerName};
`,Vh=He(Qi.ReviewsText)`
    color: ${e=>e.theme.widgets.compact.colorReviewsCount};
    font-weight: 600;
`,Wh=({isSticky:e,options:i,isEditableName:t,name:r,rating:n,icons:o,reviewsNumber:a,url:l})=>{const{ratingType:s,emojiType:d,hasSolidShadow:c}=i,{locale:p,t:h}=Qt();return V(dt,{url:l,label:`${r} ${h("reviews")}`,children:V(nh,{showCloseButton:e,hasSolidShadow:c,children:V(Uh,{content:V(Qi,{children:V(Bh,{icon:V(Qi.Icon,{children:V(Oh,{})}),content:V(Qi.Content,{name:V(Fh,{isEditable:t,content:r,children:r}),rating:V(Hh,{$ratingType:s,children:[V(Qi.Count,{children:Se(n)}),V(Qi.RatingIcons,{children:o.map((e,i)=>V(lt,{ratingType:s,emojiType:d,fill:e},i))})]}),reviewsText:V(Vh,{children:[V(sn,{value:a,locale:p})," ",`${h("reviews")}`]})})})})})})})},Gh=He("div")`
    display: flex;
    align-items: center;
`,Zh=He("div")`
    width: ${28}px;
    height: ${28}px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid ${({theme:e})=>e.widgets.inline.avatarBorder};

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: ${({$index:e})=>0===e?0:-10}px;
    z-index: ${({$index:e})=>90+e};
    ${({theme:e})=>"black"===e.theme&&"filter: grayscale(1);"}

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        width: ${20}px;
        height: ${20}px;
        margin-left: ${({$index:e})=>0===e?0:-8}px;
    }
`,qh=He("div")`
    width: ${28}px;
    height: ${28}px;
    border-radius: 50%;

    background: ${({theme:e})=>e.widgets.inline.avatarBackground};
    color: ${({theme:e})=>e.widgets.inline.avatarText};

    display: flex;
    align-items: center;
    justify-content: center;

    border: 2px solid ${({theme:e})=>e.widgets.inline.avatarBorder};
    margin-left: ${-10}px;

    font-size: 7px;
    font-weight: 600;
    z-index: 100;

    ${({theme:e})=>"black"===e.theme&&"filter: grayscale(1);"}

    @media (max-width: 768px) {
        font-size: 6px;
        width: ${20}px;
        height: ${20}px;
        margin-left: ${-8}px;
    }
`,Kh=({avatars:e,className:i,reviewsNumber:t})=>{const{t:r}=Qt(),n=e.length>=4,o=n?e.slice(0,3):e,a=t-3;return V(Gh,{className:Vi(i,"reputon-avatars"),children:[o.map((e,i)=>V(Zh,{className:"reputon-avatar",$index:i,children:V("img",{src:e,alt:r("image")})},i)),n&&V(qh,{className:"reputon-avatars-counter reputon-avatar",children:["+",(l=a,l>=1e6?`${Math.round(l/1e6)}M`:l>=1e3?`${Math.round(l/1e3)}K`:l)]})]});var l},Xh=He("div")`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;
    row-gap: 10px;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 99px;
    color: ${({theme:e})=>e.widgets.inline.colorReviewsCount};
    background: ${({theme:e})=>e.widgets.inline.background};
    padding: ${({$hasSmallPaddings:e})=>e?"8":"12"}px 5px;
    ${e=>e.$hasSolidShadow&&`\n            border-bottom: 4px solid ${e.theme.widgets.inline.solidShadow};\n            border-right: 4px solid ${e.theme.widgets.inline.solidShadow};\n        `};

    @media (max-width: 768px) {
        padding: 8px 5px;
        row-gap: 4px;
    }
`,Yh=He("div")`
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        gap: 4px;
    }
`,Jh=({icon:e,rating:i,reviewsNumber:t,subText:r,avatars:n,className:o,hasSolidShadow:a,hasSmallPaddings:l})=>V(Xh,{className:Vi(o,"reputon-wrapper"),$hasSolidShadow:a,$hasSmallPaddings:l,children:[e,V(Yh,{className:"reputon-info",children:[i,r,t]}),n]}),Qh=He("div")`
    display: flex;
    gap: 2px;
    align-items: center;
`,eu=He(lt)`
    width: 20px;
    height: 20px;
    @media (max-width: 768px) {
        width: 10px;
        height: 10px;
    }
`,iu=He("div")`
    font-weight: 700;
    font-size: 20px;
    line-height: 1.35;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`,tu=He("div")`
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${({theme:e})=>e.widgets.inline.colorReviewStars};
    ${({$hasMargin:e})=>e&&"margin-right: 8px;"}

    @media (max-width: 768px) {
        margin-right: 0;
        gap: 4px;
    }
`,ru=He("div")`
    color: ${({theme:e})=>e.widgets.inline.colorReviewsCount};
    font-size: 16px;
    line-height: 127%;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 3px;
    @media (max-width: 768px) {
        font-size: 11px;
    }
`,nu=He("span")`
    color: ${({theme:e})=>e.widgets.inline.colorReviewsCount};
    font-size: 16px;
    line-height: 127%;
    font-weight: 600;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        font-size: 11px;
    }
`,ou=He("span")`
    text-decoration: underline;

    color: ${({theme:e})=>e.widgets.inline.colorReviewsCount};
    font-size: 16px;
    line-height: 127%;
    font-weight: 600;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        font-size: 11px;
    }
`,au=He(Ds)`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    @media (max-width: 768px) {
        width: 16px;
        height: 16px;
    }
`,lu=He("div")`
    display: flex;
    align-items: center;
`,su=He(dt)`
    padding: 0px;
`,du=He(Mr)`
    width: 100%;
`,cu=({options:e,rating:i,icons:t,reviewsNumber:r,url:n,name:o,className:a,avatars:l})=>{const{ratingType:s,emojiType:d,hasSolidShadow:c,hasAvatarsAndSubtext:p}=e,{locale:h,t:u}=Qt(),m=r>0,g=i>0,w=l&&l.length>0&&p;return V(su,{inherit:!0,url:n,label:`${o} ${u("reviews")}`,children:V(Jh,{hasSmallPaddings:p,hasSolidShadow:c,className:a,icon:V(au,{className:"reputon-logo"}),rating:V(tu,{className:"reputon-rating",$hasMargin:!p,children:[g&&V(iu,{className:"reputon-rating-count",children:Se(i)}),V(Qh,{$ratingType:s,className:"reputon-rating-stars",children:m&&t.map((e,i)=>V(eu,{fill:e,ratingType:s,emojiType:d},i))})]}),subText:p&&V(nu,{className:"reputon-reviews-subtext",children:u("from")}),reviewsNumber:V(ou,{className:"reputon-reviews-text",children:[V(sn,{value:r,locale:h})," ",u("reviews")]}),avatars:w&&V(Kh,{avatars:l,reviewsNumber:r})})})},pu=({options:e,url:i,name:t,className:r})=>{const{ratingType:n,emojiType:o,hasSolidShadow:a}=e,{handleMouseEnterIcon:l,handleMouseLeaveIcon:s,icons:d}=Di(),{t:c}=Qt();return V(du,{className:Vi("reputon-reviews-holder","reputon-inline"),children:V(dt,{inherit:!0,url:i,label:`${t} ${c("reviews")}`,children:V(Jh,{hasSolidShadow:a,className:r,icon:V(au,{className:"reputon-logo"}),rating:V(tu,{className:"reputon-rating",children:V(Qh,{$ratingType:n,className:"reputon-rating-stars",children:d.map((e,i)=>V(lu,{onMouseEnter:l(i),onMouseLeave:s,children:V(eu,{ratingType:n,emojiType:o,fill:e},i)},i))})}),reviewsNumber:V(ru,{className:"reputon-reviews-count",children:c("no_reviews_yet")})})})})},hu=He(Ds)`
    width: 40px;
    height: 40px;
`,uu=He(lt)`
    width: 8px;
    height: 8px;
`,mu=He(_h.Rating)`
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}

    ${({$ratingType:e,theme:i})=>"emoji"===e&&`\n            color: ${i.widgets.grid.colorSellerName};\n        `}
`,gu=He(_h.RatingIcons)`
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}

    ${({$ratingType:e,theme:i})=>"emoji"===e&&`\n            color: ${i.widgets.grid.colorSellerName};\n        `}
`,wu=({isSticky:e,options:i,icons:t,rating:r,reviewsNumber:n,url:o,name:a})=>{const{t:l,locale:s}=Qt(),{hasSolidShadow:d,ratingType:c,emojiType:p}=i;return V(dt,{url:o,label:`${a} ${l("reviews")}`,children:V(nh,{showCloseButton:e,hasSolidShadow:d,variant:"small",className:"reputon-review-badge",children:V(_h,{icon:V(_h.Icon,{children:V(hu,{})}),content:V(_h.Content,{rating:V(mu,{$ratingType:c,children:Se(r)}),ratingIcons:V(gu,{$ratingType:c,children:t.map((e,i)=>V(uu,{ratingType:c,emojiType:p,fill:e},i))}),reviewsText:V(_h.Text,{children:[V(sn,{value:n,locale:s})," ",`${l("reviews")}`]})})})})})},vu=He("div")`
    display: flex;
    gap: 8px;
    align-items: center;
`,fu=He("div")`
    display: flex;
    gap: 2px;
    align-items: center;
    color: ${({theme:e})=>e.widgets.compact.colorLine};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}
`,xu=He(lt)`
    width: 16px;
    height: 16px;
`,bu=He("div")`
    display: flex;
    gap: 4px;
    align-items: center;
`,yu=He("div")`
    color: ${({theme:e})=>e.widgets.compact.oneLineColor};
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
`,_u=He("div")`
    color: ${({theme:e})=>e.widgets.compact.oneLineColor};
    text-decoration: none;
    font-size: 14px;
    line-height: 19px;
    font-weight: 600;
`,$u=He(Ds)`
    width: 20px;
    height: 20px;
    flex-shrink: 0;
`,Su=He("div")`
    display: flex;
    align-items: center;
`,ku=({options:e,rating:i,icons:t,reviewsNumber:r,url:n,name:o})=>{const{ratingType:a,emojiType:l}=e,{handleMouseEnterIcon:s,handleMouseLeaveIcon:d,icons:c}=Di(),{locale:p,t:h}=Qt();return V(dt,{url:n,label:`${o} ${h("reviews")}`,children:V(vu,{className:"reputon-review-badge",children:[V($u,{className:"reputon-logo"}),V(bu,{className:"reputon-rating",children:[i>0&&V(yu,{className:"reputon-rating-count",children:Se(i)}),V(fu,r>0?{$ratingType:a,className:"reputon-rating-stars",children:t.map((e,i)=>V(xu,{fill:e,ratingType:a,emojiType:l},i))}:{$ratingType:a,className:"reputon-rating-stars",children:c.map((e,i)=>V(Su,{onMouseEnter:s(i),onMouseLeave:d,children:V(xu,{ratingType:a,emojiType:l,fill:e},i)},i))})]}),V(_u,{className:"reputon-reviews-count",children:["(",r?V(sn,{value:r,locale:p}):h("no_reviews_yet"),")"]})]})})},Cu=({className:e})=>V("svg",{className:e,viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:V("path",{d:"M13.9697 15.0303C14.2626 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2626 15.0303 13.9697L11.0607 10L15.0303 6.03033C15.3232 5.73744 15.3232 5.26256 15.0303 4.96967C14.7374 4.67678 14.2626 4.67678 13.9697 4.96967L10 8.93934L6.03033 4.96967C5.73744 4.67678 5.26256 4.67678 4.96967 4.96967C4.67678 5.26256 4.67678 5.73744 4.96967 6.03033L8.93934 10L4.96967 13.9697C4.67678 14.2626 4.67678 14.7374 4.96967 15.0303C5.26256 15.3232 5.73744 15.3232 6.03033 15.0303L10 11.0607L13.9697 15.0303Z",fill:"currentColor"})}),Nu=He("div")`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: ${({theme:e})=>e.widgets["trust-bar"].colorReviewsCount};
    font-family: ${({theme:e})=>e.fontFamily};
    background: ${({theme:e})=>e.widgets["trust-bar"].background};
    padding: 12px 25px;
    ${e=>e.$hasSolidShadow&&`\n            border-bottom: 4px solid ${e.theme.widgets["trust-bar"].solidShadow};\n        `};
`,Tu=He("div")`
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
`,Ru=He("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2px;
    margin-left: 4px;
`,Iu=He("div")`
    margin-right: 8px;
`,Au=He("button")`
    position: absolute;
    right: 25px;
    top: 12px;
    padding: 3px;
    width: 26px;
    height: 26px;
`,Lu=He("div")``,ju=({icon:e,text:i,rating:t,reviewsNumber:r,className:n,onClose:o,hasSolidShadow:a})=>V(Nu,{className:n,$hasSolidShadow:a,children:[V(Lu,{children:i}),V(Tu,{children:[V(Ru,{children:e}),V(Iu,{children:t}),r]}),V(Au,{type:"button",onClick:e=>{e.preventDefault(),e.stopPropagation(),o?.()},children:V(Cu,{})})]}),Mu=He("div")`
    position: fixed;
    width: 100%;
    z-index: 9999;
    ${({$position:e})=>"top"===e?"top: 0;":"bottom: 0;"}
    left: 0;
`,zu=He("div")`
    display: flex;
    gap: 2px;
    align-items: center;
    color: ${({theme:e})=>e.widgets["trust-bar"].colorReviewStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}
`,Pu=He(lt)`
    color: ${({theme:e})=>e.widgets["trust-bar"].colorReviewStars};
    width: 20px;
    height: 20px;
    @media (max-width: 768px) {
        width: 16px;
        height: 16px;
    }
`,Eu=He("div")`
    display: flex;
    gap: 8px;
    align-items: center;
`,Ou=He("div")`
    color: ${({theme:e})=>e.widgets["trust-bar"].colorReviewStars};
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`,Bu=He("div")`
    color: ${({theme:e})=>e.widgets["trust-bar"].colorReviewsCount};
    text-decoration: underline;
    font-size: 16px;
    line-height: 19px;
    font-weight: 600;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`,Uu=He(Ds)`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    @media (max-width: 768px) {
        width: 20px;
        height: 20px;
    }
`,Hu=He("div")`
    display: flex;
    align-items: center;
`,Du=He("div")`
    color: ${({theme:e})=>e.widgets["trust-bar"].colorReviewsCount};
    font-size: 16px;
    line-height: 19px;
    font-weight: 600;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`,Fu=({options:e,rating:i,icons:t,reviewsNumber:r,url:n,name:o,className:a,onClose:l})=>{const{ratingType:s,emojiType:d,text:c,position:p,hasSolidShadow:h}=e,{handleMouseEnterIcon:u,handleMouseLeaveIcon:m,icons:g}=Di(),{locale:w,t:v}=Qt(),f=r>0,x=i>0;return V(Mu,{$position:p,children:V(dt,{inherit:!0,url:n,label:`${o} ${v("reviews")}`,children:V(ju,{hasSolidShadow:h,className:a,onClose:l,text:V(Du,{children:c}),icon:V(Uu,{className:"reputon-logo"}),rating:V(Eu,{className:"reputon-rating",children:[x&&V(Ou,{className:"reputon-rating-count",children:Se(i)}),V(zu,{$ratingType:s,className:"reputon-rating-stars",children:[f&&t.map((e,i)=>V(Pu,{fill:e,ratingType:s,emojiType:d},i)),!f&&g.map((e,i)=>V(Hu,{onMouseEnter:u(i),onMouseLeave:m,children:V(Pu,{ratingType:s,emojiType:d,fill:e},i)},i))]})]}),reviewsNumber:V(Bu,{className:"reputon-reviews-count",children:r?V(b,{children:[V(sn,{value:r,locale:w})," ",v("reviews")]}):v("no_reviews_yet")})})})})},Vu=({options:e,url:i,name:t,className:r,onClose:n})=>{const{ratingType:o,emojiType:a,text:l,position:s,hasSolidShadow:d}=e,{handleMouseEnterIcon:c,handleMouseLeaveIcon:p,icons:h}=Di(),{t:u}=Qt();return V(Mu,{$position:s,children:V(dt,{inherit:!0,url:i,label:`${t} ${u("reviews")}`,children:V(ju,{hasSolidShadow:d,className:r,onClose:n,text:V(Du,{children:l}),icon:V(Uu,{className:"reputon-logo"}),rating:V(Eu,{className:"reputon-rating",children:V(zu,{$ratingType:o,className:"reputon-rating-stars",children:h.map((e,i)=>V(Hu,{onMouseEnter:c(i),onMouseLeave:p,children:V(Pu,{ratingType:o,emojiType:a,fill:e},i)},i))})}),reviewsNumber:u("no_reviews_yet")})})})},Wu=He(Qi.Container)`
    padding: 5px 25px 5px 10px;
    height: 100%;
`,Gu=He(Ds)`
    width: 100%;
`,Zu=He(Qi.Rating)`
    color: ${e=>e.theme.widgets.stickySlide.colorReviewStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}

    ${({$ratingType:e,theme:i})=>"emoji"===e&&`\n            color: ${i.widgets.stickySlide.colorName};\n        `}
`,qu=He(Qi.Name)`
    color: ${e=>e.theme.widgets.stickySlide.colorName};
`,Ku=He(Qi.ReviewsText)`
    color: ${e=>e.theme.widgets.stickySlide.colorSubText};
    font-weight: 600;
`,Xu=({name:e,options:i,rating:t,isEditableName:r,reviewsNumber:n})=>{const{emojiType:o,ratingType:a}=i,{t:l,locale:s}=Qt(),d=_e(t);return V(Qi,{children:V(Wu,{icon:V(Qi.Icon,{children:V(Gu,{})}),content:V(Qi.Content,{name:V(qu,{$isEditable:r,content:e,children:e}),rating:V(Zu,{$ratingType:a,children:[V(Qi.Count,{children:Se(t)}),V(Qi.RatingIcons,{children:d.map((e,i)=>V(lt,{ratingType:a,emojiType:o,fill:e},i))})]}),reviewsText:V(Ku,{children:[V(sn,{value:n,locale:s})," ",`${l("reviews")}`]})})})})},Yu=He("div")`
    display: flex;
    padding: 10px 20px 10px 10px;
    height: 100%;
    overflow-x: hidden;
    transition: ${e=>e.theme.transition};
`,Ju=He("div")`
    min-width: 50px;
    width: 50px;
`,Qu=He("div")`
    width: calc(100% - 60px);
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    gap: 2px;
    margin-left: 10px;
`,em=He("div")`
    color: ${e=>e.theme.widgets.stickySlide.colorReviewStars};
    display: flex;
    gap: 4px;
`,im=He("div")`
    color: ${e=>e.theme.widgets.stickySlide.colorName};
    max-width: 100%;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 13px;
    font-weight: 600;
`,tm=He("span")`
    font-weight: 800;
    margin-right: 3px;
`,rm=He("div")`
    color: ${e=>e.theme.widgets.stickySlide.colorSubText};
    font-weight: 400;
    font-size: 12px;
`,nm=({className:e,image:i,content:t})=>V(Yu,{className:Vi(e,"reputon-single-review"),children:[i,t]});nm.Image=({className:e,children:i})=>i&&V(Ju,{className:Vi(e,"reputon-image"),children:i}),nm.Content=({className:e,rating:i,byName:t,date:r})=>V(Qu,{className:Vi(e,"reputon-content"),children:[i,t,r]}),nm.RatingIcons=({className:e,children:i})=>i&&V(em,{className:Vi(e,"reputon-rating-stars"),children:i}),nm.ByName=({className:e,children:i})=>i&&V(im,{className:Vi(e,"reputon-rating-text"),children:i}),nm.ReviewHeadline=({className:e,children:i})=>i&&V(tm,{className:Vi(e,"reputon-text-headline"),children:i}),nm.Date=({className:e,children:i})=>i&&V(rm,{className:Vi(e,"reputon-date"),children:i});const om=He(nm.RatingIcons)`
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}
`,am=({profilePhotoUrl:e,authorName:i,time:t,rating:r,options:n})=>{const{emojiType:o,ratingType:a}=n,{t:l}=Qt(),s=_e(r);return V(nm,{image:V(nm.Image,{children:V("img",{loading:"lazy",width:"100%",src:e,alt:`${i?.slice(0,3)} photo`})}),content:V(nm.Content,{rating:V(om,{$ratingType:a,children:s.map((e,i)=>V(lt,{ratingType:a,emojiType:o,fill:e},i))}),byName:V(nm.ByName,{children:[l("by")," ",i]}),date:V(nm.Date,{children:t})})})},lm=({className:e,...i})=>V("svg",{className:e,...i,fill:"currentColor",width:"100%",height:"100%",viewBox:"0 0 16 16",children:V("path",{"fill-rule":"evenodd",d:"m3.426 2.024.094.083L8 6.586l4.48-4.479a1 1 0 0 1 1.497 1.32l-.083.095L9.414 8l4.48 4.478a1 1 0 0 1-1.32 1.498l-.094-.083L8 9.413l-4.48 4.48a1 1 0 0 1-1.497-1.32l.083-.095L6.585 8 2.106 3.522a1 1 0 0 1 1.32-1.498Z"})}),sm=He(fl)`
    .reputon-top-part {
        border-radius: 14px;
    }
`,dm=He(fl.RatingIcons)`
    color: ${({theme:e})=>e.widgets.stickySlide.colorReviewStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}
`,cm=He(Gs)`
    margin-left: 7px;
`,pm=He(Ds)`
    width: 17px;
    height: 17px;
`,hm=He(fl.Name)`
    color: ${({theme:e})=>e.widgets.stickySlide.colorName};
`,um=He(fl.Time)`
    color: ${({theme:e})=>e.widgets.stickySlide.colorTime};
`,mm=He(fl.TextContainer)`
    color: ${({theme:e})=>e.widgets.stickySlide.colorDescription};
`,gm=He(fl.ShowMoreBtn)`
    color: ${({theme:e})=>e.widgets.stickySlide.colorShowMore};
`,wm=({user:e,options:i,verified:t,rating:r,text:n})=>{const{t:o}=Qt(),{ratingType:a,emojiType:l}=i,{name:s,photoUrl:d,date:c,url:p}=e,h=_e(r),u=r?V(dm,{$ratingType:a,children:[h?.map((e,i)=>V(lt,{ratingType:a,emojiType:l,fill:e},i)),t&&V(cm,{verified:o("verified")})]}):null;return V(sm,{header:V(fl.Header,{logoApp:V(fl.Logo,{children:V(pm,{})}),info:V(fl.InfoTop,{icon:V(fl.Icon,{children:V(dt,{url:p,label:`${s} ${o("review")}`,children:V(ir,{src:d,alt:`${s} ${o("image")}`})})}),attributes:V(fl.Attributes,{name:V(hm,{children:V(dt,{inherit:!0,url:p,label:`${s} ${o("review")}`,children:s})}),time:V(um,{children:c})})})}),rating:u,hiddenContainer:V(fl.HiddenContainer,{textContainer:V(mm,{children:n})}),actionButton:V(gm,{children:e=>V("span",e?{children:o("show_less")}:{children:o("show_more")})}),info:V(fl.Info,{style:{display:"none"},icon:V(fl.Icon,{children:V(dt,{url:p,label:`${s} ${o("review")}`,children:V(ir,{src:d,alt:`${s} ${o("image")}`})})}),attributes:V(fl.Attributes,{name:V(hm,{children:V(dt,{url:p,label:`${s} ${o("review")}`,children:s})}),time:V(um,{children:c})})})})},vm=Ue`
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
`,fm=He("div")``,xm=He("div")`
    font-family: 'Manrope', sans-serif;
    position: fixed;
    inset: 0px;
    z-index: 999;
`,bm=He("div")`
    position: fixed;
    inset: 0px;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    animation: ${vm} 0.3s ease-out forwards;
`,ym=He("div")`
    position: fixed;
    width: 420px;
    z-index: 2;
    max-width: calc(100% - 40px);
    top: 0px;
    right: 0px;
    bottom: 0px;
    padding: 25px 15px;
    background: ${({theme:e})=>e.widgets.stickySlide.backgroundModal};
    transform: ${({$isOpen:e})=>e?"translateX(0%) translateZ(0px)":"translateX(100%) translateZ(0px)"};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 20px;
    transition: all 0.5s;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 11px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 4px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 4px;
    }
    ${e=>`\n      &::-webkit-scrollbar-thumb {\n          background: ${e.theme.widgets.standard.scrollThumb};\n      }\n      &::-webkit-scrollbar-track {\n          background: ${e.theme.widgets.standard.scrollTrack};\n      }\n  `}
`;He("div")`
    font-size: 27px;
    font-weight: 700;
    color: ${({theme:e})=>e.widgets.stickySlide.colorName};
`;const _m=He("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    width: 100%;
    padding: 24px;
    background: ${({theme:e})=>e.background};
    border-radius: 14px;
`,$m=He(dt)`
    width: 100%;
`,Sm=He("div")`
    display: flex;
    align-items: center;
    gap: 5px;
`,km=He(an)`
    height: 32px;
`;He("div")`
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: ${({theme:e})=>e.widgets.stickySlide.colorName};
    text-transform: capitalize;
`;const Cm=He("div")`
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${({theme:e})=>e.widgets.stickySlide.colorReviewStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}

    ${({$ratingType:e,theme:i})=>"emoji"===e&&`\n            color: ${i.widgets.stickySlide.colorName};\n        `}
`,Nm=He("div")`
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
`,Tm=He("div")`
    display: flex;
    gap: 2px;
`,Rm=He(lt)`
    width: 20px;
    height: 20px;
`,Im=He("div")`
    font-size: 12px;
    line-height: 14px;
    color: ${({theme:e})=>e.widgets.stickySlide.colorSubText};
`,Am=He("div")`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 100%;
`,Lm=He("button")`
    position: absolute;
    background: none;
    top: 10px;
    right: 5px;
    width: 16px;
    height: 16px;
    color: ${({theme:e})=>e.widgets.stickySlide.colorName};
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s;
    &:hover {
        opacity: 1;
    }
    z-index: 3;
`,jm=({isOpen:e,onCloseClick:i,items:t,url:r,name:n,options:o,rating:a,reviewsNumber:l})=>{const{t:s,locale:d}=Qt(),{emojiType:c,ratingType:p,verified:h}=o,u=_e(a);return uo(V(fm,{className:qe,children:V(xm,{className:"reputon-slider-modal",children:[V(bm,{className:"reputon-slider-modal-backdrop",$isOpen:e,onClick:i}),V(ym,{className:"reputon-slider-modal-container",$isOpen:e,children:[V(Lm,{"aria-label":"close modal",className:"reputon-slider-modal-close",onClick:i,type:"button",children:V(lm,{})}),V($m,{url:r,label:`${n} ${s("reviews")}`,children:V(_m,{className:"reputon-slider-modal-header",children:[V(Sm,{className:"reputon-header-top",children:V(km,{className:"reputon-header-logo"})}),V(Cm,{$ratingType:p,className:"reputon-header-bottom",children:[V(Nm,{className:"reputon-header-rating",children:Se(a)}),V(Tm,{className:"reputon-header-stars",children:u.map((e,i)=>V(Rm,{className:"reputon-header-star",fill:e,ratingType:p,emojiType:c},i))}),V(Im,{className:"reputon-header-reviews-counter",children:["(",V(sn,{value:l,locale:d}),")"]})]})]})}),V(Am,{className:"reputon-slider-modal-reviews",children:t?.map((e,i)=>V(wm,{user:{date:e.relativeTimeDescription,name:e.authorName,photoUrl:e.profilePhotoUrl,url:e.authorUrl},options:{emojiType:c,ratingType:p},rating:a,text:e.text,verified:h},i))})]})]})}),document.body)};function Mm({items:e,renderItem:i,options:t}){const{delay:r}=t,[n,o]=Ea({align:"start",loop:!0},[wd({delay:r})]),{isSlideActive:a}=Jo({emblaApi:o,totalSlides:e.length,bufferSize:3}),{containerCss:l}=Xo([{breakpoint:1300,slidesPerView:7},{breakpoint:1200,slidesPerView:6},{breakpoint:1100,slidesPerView:5},{breakpoint:1e3,slidesPerView:4},{breakpoint:900,slidesPerView:3},{breakpoint:768,slidesPerView:2},{breakpoint:490,slidesPerView:1}]);return Yo({emblaApi:o}),Zn()&&V(Ho,{$gap:0,ref:n,children:V(Do,{$responsive:l,children:e.map((e,t)=>V(Fo,{children:a(t)?i({item:e}):null},t))})})}const zm=()=>{const{closeModal:e,isOpen:i,openModal:t,animationEnded:r}=(()=>{const[e,i]=oe(!1),[t,r]=oe(!0),n=se(null);return{isOpen:e,openModal:()=>{n.current&&clearTimeout(n.current),r(!1),setTimeout(()=>{i(!0)},10),document.querySelector("body").style.overflow="hidden"},closeModal:()=>{i(!1),n.current=setTimeout(()=>{document.querySelector("body").style.overflow="unset",r(!0)},500)},animationEnded:t}})(),{isSticky:n,contentIndex:o,delay:a="5",ratingType:l,emojiType:s,hasSolidShadow:d}=Nw(ei),{data:c}=pe(Bi),{business:p,verified:h}=c,{reviews:u,name:m,rating:g,reviewsNumber:w,url:v}=Ui({contentIndex:o,business:p}),f=function(e){return e.reduce((e,i,t)=>t%5==0?[...e,"common_review",i]:[...e,i],[])}(u),x=jn(Number(a),5e3);return V(b,{children:[n&&!r&&V(jm,{items:u,name:m,url:v,rating:g,reviewsNumber:w,options:{emojiType:s,ratingType:l,verified:h},isOpen:i,onCloseClick:e}),V(nh,{onClick:()=>n&&t(),showCloseButton:n,className:"reputon-carousel-holder",tabIndex:0,role:"button","aria-label":"open modal",onKeyPress:()=>n&&t(),hasSolidShadow:d,isShow:!i,children:V(Pm,{className:"reputon-basic-slide-container",children:V(Mm,{options:{delay:x},items:f,renderItem:({item:e})=>"common_review"===e?V(Em,{children:V(Xu,{isEditableName:"all"===o,name:m,rating:g,options:{ratingType:l,emojiType:s},reviewsNumber:w})},"common_review"):V(Em,{children:V(am,{authorName:e.authorName,profilePhotoUrl:e.profilePhotoUrl,rating:e.rating,time:e.relativeTimeDescription,options:{ratingType:l,emojiType:s}})},e.id)})})})]})},Pm=He("div")`
    cursor: pointer;
    width: ${e=>e.theme.compactWidth}px;
`,Em=He("div")`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background: ${e=>e.theme.widgets.stickySlide.background};
    transition: ${e=>e.theme.transition};
    &:hover {
        background: ${e=>e.theme.hasLink&&e.theme.widgets.stickySlide.backgroundHover};
    }
`,Om=()=>{const{data:e}=pe(Bi),{UIWidgetType:i,isSticky:t,contentIndex:r,ratingType:n,emojiType:o,hasSolidShadow:a,trustText:l,positionY:s}=Nw(ei),{show:d,hideWidgets:c}=Lr(),{writeReviewUrl:p,url:h,name:u,rating:m,reviewsNumber:g,reviews:w}=Ui({contentIndex:r,business:e?.business}),v=_e(m),f={[Ah]:V(Mr,{className:Vi("reputon-reviews-holder","reputon-small"),children:V(wu,{isSticky:t,options:{ratingType:n,emojiType:o,hasSolidShadow:a},icons:v,rating:m,reviewsNumber:g,url:h,name:u})}),[Lh]:V(Mr,{className:Vi("reputon-reviews-holder","reputon-star-rating"),children:V(ku,{options:{ratingType:n,emojiType:o},rating:m,name:u,icons:v,reviewsNumber:g,url:h})}),[zh]:V(du,{className:Vi("reputon-reviews-holder","reputon-inline"),children:V(cu,{options:{ratingType:n,emojiType:o,hasSolidShadow:a},icons:v,rating:m,reviewsNumber:g,url:h,name:u})}),[Ph]:V(du,{className:Vi("reputon-reviews-holder","reputon-inline-reviews"),children:V(cu,{options:{ratingType:n,emojiType:o,hasSolidShadow:a,hasAvatarsAndSubtext:!0},icons:v,rating:m,reviewsNumber:g,url:h,name:u,avatars:w.map(({profilePhotoUrl:e})=>e)})}),[Ih]:V(Mr,{className:Vi("reputon-reviews-holder","reputon-basic"),children:V(Wh,{isSticky:t,options:{ratingType:n,emojiType:o,hasSolidShadow:a},isEditableName:"all"===r,name:u,rating:m,icons:v,reviewsNumber:g,url:h})}),[Mh]:V(Mr,{className:Vi("reputon-reviews-holder","reputon-slider"),children:V(zm,{})}),[jh]:d&&V(Fu,{options:{ratingType:n,emojiType:o,position:s,text:l,hasSolidShadow:a},rating:m,name:u,icons:v,reviewsNumber:g,url:h,className:Vi("reputon-reviews-holder","reputon-trust-bar"),onClose:c})},x=[zh,Ph].includes(i),b=i===jh,y=i===Mh;return w?.length||g?!w?.length&&g&&y?f[Ih]:f[i]:x?V(pu,{options:{ratingType:n,emojiType:o,hasSolidShadow:a},url:p,name:u}):b?V(Vu,{options:{ratingType:n,emojiType:o,position:s,text:l,hasSolidShadow:a},rating:m,name:u,icons:v,reviewsNumber:g,url:h,className:Vi("reputon-reviews-holder","reputon-trust-bar"),onClose:c}):V(Rh,{name:u,options:{emojiType:o,ratingType:n,hasSolidShadow:a},showCloseButton:t,variant:i===Ah?"small":"compact",url:p})},Bm=Oi[0],Um=({container:e,legacyOptions:i})=>{const t=(e=>{const i="parallax"===e.getAttribute(xi),t=e.getAttribute(wi),r=e.getAttribute(wi),n=e.getAttribute("data-minimize"),o=e.getAttribute(Pi),a=e?.getAttribute(Ai),l=e?.getAttribute(ji),s=e.getAttribute(Mi),d=e.getAttribute(pi),c=e.getAttribute(yi),p="true"===e.getAttribute(bi),h=e.getAttribute(Si)||"",u=e.getAttribute(ki)||"",m=e.getAttribute(Ci)||"",g=e.getAttribute(Ri);return{type:r,isParallax:i,deprecatedType:t,minimize:n,font:a,delay:e.getAttribute(Ii),ratingType:l,emojiTypeNumber:s,theme:d,contentIndex:c,isSticky:p,cardColor:h,starsColor:u,textColor:m,transparency:g,hasSolidShadow:"true"===e.getAttribute(zi),variant:o,trustText:e.getAttribute("data-trust-text"),positionY:e.getAttribute(fi)}})(e),r=(e=>{if(e)return{theme:e.theme,isSticky:"parallax"===e.position.type,minimize:"small"===e.type?"true":void 0}})(i),n=r?{...t,...r}:t,{isParallax:o,deprecatedType:a,minimize:l,font:s,ratingType:d,emojiTypeNumber:c,theme:p,contentIndex:h,isSticky:u,cardColor:m,starsColor:g,textColor:w,transparency:v,hasSolidShadow:f,type:x,delay:b,variant:y,trustText:_,positionY:$}=n;return{type:x,theme:p,delay:b||"5",contentIndex:"all"===h?"all":Number(h)-1,isSticky:o||u,UIWidgetType:a===ci?Ah:x===ii||"slider"===y?Mh:"trust-bar"===y?jh:l&&Eh.includes(l)?{true:Ah,star:Lh,inline:zh,"inline-reviews":Ph}[l]:Ih,customColors:{cardColor:m,starsColor:g,textColor:w},transparency:v?Number(v):1,font:Ei.includes(s)?s:Ei[0],ratingType:Oi.includes(d)?d:Bm,emojiType:c?Number(c):0,hasSolidShadow:f,trustText:_??"",positionY:$}},Hm=["standard","compact"],Dm="standard",Fm="compact",Vm=e=>{const i=[...e];for(let t=i.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[i[t],i[e]]=[i[e],i[t]]}return i},Wm=e=>({url:e.image?.url||"",authorName:e.authorName,profilePhotoUrl:e.profilePhotoUrl,authorUrl:e.authorUrl,rating:e.rating,date:e.relativeTimeDescription,fading:e.fading,key:e.authorUrl+e.image?.url}),Gm=Ue`
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`,Zm=Ue`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`,qm=He("div",io)`
    ${({$fading:e})=>"in"===e?`\n            animation: ${Zm} 0.6s ease;\n        `:""}

    ${({$fading:e})=>"out"===e?`\n            animation: ${Gm} 0.6s ease;\n        `:""}
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: ${16}px;
    overflow: hidden;
    min-width: 120px;
    background: ${({theme:e})=>e.widgets.gallery.background};
    ${({$fill:e,$fallback:i})=>i?"width: 100%; height: 100%;":"auto"===e?"height: 100%; width: max-content;":e?"width: 100%; height: 100%;":"aspect-ratio: 1;"}
`,Km=He("img",io)`
    display: block;
    cursor: pointer;
    ${({$fill:e})=>"auto"===e?"height: 100%; width: auto;":"flex: 1; width: 100%; height: 100%; object-fit: cover;"}
`,Xm=He("div",io)`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${({$large:e})=>e?"96px":"18%"};
    padding: ${({$large:e})=>e?"24px":"8px"};
    display: flex;
    align-items: center;
    gap: ${({$large:e})=>e?"12px":"4px"};
    border-radius: 0 0 ${16}px ${16}px;
    background: rgba(29, 29, 29, 0.5);
    backdrop-filter: blur(2px);

    @container wrapper (max-width:${Xe}px) {
        height: ${({$large:e})=>e?"46px":"18%"};
        padding: ${({$large:e})=>e?"8px":"4px"};
    }

    @container wrapper (max-width:${Je}px) {
        height: ${({$large:e})=>e?"46px":"25%"};
        padding: ${({$large:e})=>e?"8px":"4px"};
        gap: 4px;
    }
`,Ym=He("div",io)`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    overflow: hidden;

    @container wrapper (max-width:${Xe}px) {
        gap: 0;
    }
`,Jm=He("p",io)`
    font-size: ${({$large:e})=>e?"18px":"12px"};
    line-height: ${({$large:e})=>e?"20px":"14px"};
    font-weight: 600;
    color: ${({theme:e})=>e.widgets.gallery.colorName};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    @container wrapper (max-width:${Xe}px) {
        font-size: ${({$large:e})=>e?"12px":"10px"};
        line-height: ${({$large:e})=>e?"14px":"12px"};
    }
`,Qm=He("p",io)`
    font-size: ${({$large:e})=>e?"14px":"10px"};
    line-height: ${({$large:e})=>e?"19px":"12px"};
    font-weight: 600;
    color: ${({theme:e})=>e.widgets.gallery.colorName};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    @container wrapper (max-width:${Xe}px) {
        font-size: ${({$large:e})=>e?"10px":"8px"};
        line-height: ${({$large:e})=>e?"12px":"10px"};
    }
`,eg=He(fl.RatingIcons)`
    color: ${({theme:e})=>e.widgets.gallery.colorReviewStars};
    gap: ${({$large:e})=>e?"4px":"2px"};
    align-self: center;
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}

    @container wrapper (max-width:${Xe}px) {
        gap: 2px;
    }
`,ig=He(lt)`
    height: ${({$large:e})=>e?"25px":"12px"};
    width: ${({$large:e})=>e?"25px":"12px"};

    @container wrapper (max-width:${Xe}px) {
        height: ${({$large:e})=>e?"12px":"8px"};
        width: ${({$large:e})=>e?"12px":"8px"};
    }
`,tg=He(Ds)`
    color: ${({theme:e})=>e.widgets.gallery.colorReviewStars};
    height: ${({$large:e})=>e?"25px":"12px"};
    width: ${({$large:e})=>e?"25px":"12px"};
    align-self: center;

    @container wrapper (max-width:${Xe}px) {
        height: ${({$large:e})=>e?"12px":"8px"};
        width: ${({$large:e})=>e?"12px":"8px"};
    }
`,rg=He("span")`
    height: ${({$large:e})=>e?"48px":"25px"};
    width: ${({$large:e})=>e?"48px":"25px"};
    display: block;

    @container wrapper (max-width:${Xe}px) {
        height: ${({$large:e})=>e?"25px":"20px"};
        width: ${({$large:e})=>e?"25px":"20px"};
    }
`,ng=({url:e,authorName:i,authorUrl:t,profilePhotoUrl:r,date:n,rating:o,emojiType:a,ratingType:l,fill:s,large:d,fallback:c,onClick:p,fading:h})=>{const{t:u}=Qt(),m=_e(o),g=o?V(eg,{$ratingType:l,$large:d,children:m?.map((e,i)=>V(ig,{ratingType:l,emojiType:a,fill:e,$large:d},i))}):null;return V(qm,{$fading:h,$fill:s,$fallback:c,className:"reputon-gallery-card",children:[e&&V(Km,{$fill:s,src:e,alt:i,onClick:p}),V(Xm,{$large:d,className:"reputon-info-bar",children:[V(dt,{url:t,label:`${i} ${u("review")}`,className:"reputon-avatar",children:V(rg,{$large:d,children:V(ir,{src:r,alt:`${i} ${u("image")}`})})}),V(Ym,{children:[V(dt,{url:t,label:`${i} ${u("review")}`,className:"reputon-name",children:V(Jm,{$large:d,children:i})}),V(Qm,{$large:d,className:"reputon-date",children:n})]}),g,V(tg,{$large:d})]})]})},og=Ue`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
`,ag=He("div")`
    display: flex;
    width: 100%;
    overflow: hidden;
    height: 320px;

    @container wrapper (max-width:${Xe}px) {
        height: 160px;
    }
`,lg=He("div",io)`
    display: flex;
    height: 100%;
    animation: ${og} ${e=>e.$animationDuration}s linear infinite;
`,sg=He("div")`
    display: flex;
    height: 100%;
    gap: 16px;
    margin-right: 20px;

    @container wrapper (max-width:${Xe}px) {
        gap: 8px;
    }
`,dg=He("div")`
    display: flex;
    height: 100%;
    width: auto;
    transition: 0.2s;
    flex-shrink: 0;
    ${({$empty:e})=>e&&"aspect-ratio: 1;"}
`,cg=({reviews:e,emojiType:i,ratingType:t,speed:r=5,onCardClick:n,isModalOpen:o,initReviews:a})=>{const{sliderRef:l,handleMouseEnter:s,handleMouseLeave:d,handleTouchMobileSwiper:c}=sd(),p=de(()=>Vm(e),[]);ae(()=>(window.addEventListener("touchstart",c),()=>{window.removeEventListener("touchstart",c)}),[]),ae(()=>{d(),o&&s()},[o]);const h=Zn(),u=((e,i)=>{const t=e.length>0?e:[...i.map(e=>({image:{url:"",thumbnailUrl:""},...e}))],r=Math.ceil(10/t.length);return Array.from({length:r},()=>t).flat()})(p,a);return h&&V(ag,{className:"reputon-gallery-carousel",children:V(lg,{ref:l,onMouseEnter:s,onMouseLeave:d,className:"reputon-slider",$animationDuration:r*u.length/2,children:Array(2).fill(0).map((e,r)=>V(sg,{children:u.map(e=>{const{url:r,authorName:o,profilePhotoUrl:a,authorUrl:l,rating:s,date:d,fading:c,key:p}=Wm(e);return V(dg,{className:"reputon-slide",$empty:!e.image.url,children:V(ng,{fill:"auto",fallback:!e.image.url,emojiType:i,ratingType:t,onClick:()=>n(e),url:r,authorName:o,profilePhotoUrl:a,authorUrl:l,rating:s,date:d,fading:c})},p)})},r))})})},pg=({flatReviews:e,initReviews:i,isActive:t,visibleCount:r,fallbackReviews:n})=>{const[o,a]=oe([...e].slice(0,r)),l=(s=o.length,d=r,Math.max(0,d-s));var s,d;const c=se([...e]),[p,h]=oe(0),u=se([]),m=de(()=>{return e=n,[...e].sort((e,i)=>{const t=e.images?.length>0;return t===i.images?.length>0?0:t?1:-1});var e},[i]);return ae(()=>{const i=Array.from(new Set(e.map(e=>e.authorUrl||e.authorName))).sort();u.current=i.sort((e,i)=>{const t=o.map(e=>e.authorUrl||e.authorName),r=t.includes(e),n=t.includes(i);return r&&!n?1:!r&&n?-1:0})},[]),ae(()=>{const i=setInterval(()=>{if(e.length<=r)return;if(!t)return;let i;const n=()=>{const e=u.current[p];return c.current.find((t,r)=>{const n=t.authorUrl===e||t.authorName===e;return n&&(i=r),n})};let o=n();if(o||(i=>{const t=e.filter(e=>e.authorUrl===i||e.authorName===i);c.current=Vm([...c.current,...t])})(u.current[p]),o=n(),h(e=>(e+1)%u.current.length),!o)return;null!=i&&c.current.splice(i,1);const l=Math.floor(Math.random()*r);a(e=>{const i=[...e];return i[l]={...i[l],fading:"out"},i}),setTimeout(()=>{a(e=>{const i=[...e];return i[l]={...o,fading:"in"},i})},300)},2e3);return()=>clearInterval(i)},[i,o]),{visible:o,fillerCount:l,sortedFallbackReviews:m}},hg="carousel",ug=e=>{const i=(e=>e<=470?120:e<=820?168:260)(e),t=(e=>e>=820?16:8)(e),r=Math.floor((e+t)/(i+t));return Math.max(1,Math.min(r,5))},mg=He("div",io)`
    display: grid;
    gap: 16px;
    width: 100%;
    grid-template-columns: repeat(${({$columns:e})=>e}, 1fr);

    @container wrapper (max-width: ${Xe}px) {
        gap: 8px;
    }
`,gg=({visibleReviews:e,fallbackReviews:i,containerRef:t,columns:r,fallbackCount:n,renderCard:o,renderFallbackCard:a})=>V(mg,{ref:t,$columns:r,className:"reputon-gallery-grid",children:[e.map(e=>o(e)),Array.from({length:n},(e,t)=>{const r=i[t%i.length];return a(r)})]}),wg=({reviews:e,emojiType:i,ratingType:t,onCardClick:r,isShuffleActive:n,initReviews:o,initReviewsWithImages:a})=>{const{columns:l,visibleCount:s,containerRef:d}=(()=>{const e=se(null),[i,t]=oe(()=>ug(window.innerWidth));return ae(()=>{const i=e.current;if(!i)return;const r=new ResizeObserver(([e])=>{t(ug(e.contentRect.width))});return r.observe(i),()=>r.disconnect()},[]),{columns:i,visibleCount:2*i,containerRef:e}})(),{fillerCount:c,visible:p,sortedFallbackReviews:h}=pg({flatReviews:e,fallbackReviews:o,initReviews:a,isActive:n,visibleCount:s});return V(gg,{containerRef:d,fallbackCount:c,columns:l,visibleReviews:p.slice(0,s),fallbackReviews:h,renderCard:e=>{const{url:n,authorName:o,profilePhotoUrl:a,authorUrl:l,rating:s,date:d,fading:c,key:p}=Wm(e);return V(ng,{emojiType:i,ratingType:t,onClick:()=>r(e),url:n,authorName:o,profilePhotoUrl:a,authorUrl:l,rating:s,date:d,fading:c},p)},renderFallbackCard:e=>{const{url:r,authorName:n,profilePhotoUrl:o,authorUrl:a,rating:l,date:s,fading:d,key:c}=Wm(e);return V(ng,{fallback:!0,emojiType:i,ratingType:t,url:r,authorName:n,profilePhotoUrl:o,authorUrl:a,rating:l,date:s,fading:d},c)}})},vg=He("div",io)`
    display: grid;
    gap: 12px;
    width: 100%;
    aspect-ratio: 768 / 365;
    max-height: 672px;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);

    & > *:first-child {
        grid-row: span 2;
    }

    @container wrapper (max-width: ${Je}px) {
        aspect-ratio: auto;
        max-height: none;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;

        & > * {
            height: auto;
            aspect-ratio: 1;
        }

        & > *:first-child {
            grid-column: span 2;
            grid-row: span 1;
            aspect-ratio: 1;
        }
    }
`,fg=({visibleReviews:e,fallbackReviews:i,fallbackCount:t,renderCard:r,renderFallbackCard:n})=>V(vg,{className:"reputon-gallery-multicard",children:[e.map((e,i)=>r({large:0===i,review:e})),Array.from({length:t},(t,r)=>{const o=i[r%i.length];return n({large:!e.length&&0===r,review:o})})]}),xg=({isShuffleActive:e,emojiType:i,ratingType:t,onCardClick:r,initReviews:n,initReviewsWithImages:o,reviews:a})=>{const{fillerCount:l,visible:s,sortedFallbackReviews:d}=pg({flatReviews:a,initReviews:o,isActive:e,visibleCount:5,fallbackReviews:n});return V(fg,{fallbackCount:l,visibleReviews:s,fallbackReviews:d,renderCard:({review:e,large:n})=>{const{url:o,authorName:a,profilePhotoUrl:l,authorUrl:s,rating:d,date:c,fading:p,key:h}=Wm(e);return V(ng,{large:n,ratingType:t,emojiType:i,onClick:()=>r(e),fill:!0,url:o,authorName:a,profilePhotoUrl:l,authorUrl:s,rating:d,date:c,fading:p},h)},renderFallbackCard:({review:e,large:r})=>{const{url:n,authorName:o,profilePhotoUrl:a,authorUrl:l,rating:s,date:d,fading:c,key:p}=Wm(e);return V(ng,{large:r,fallback:!0,ratingType:t,emojiType:i,fill:!0,url:n,authorName:o,profilePhotoUrl:a,authorUrl:l,rating:s,date:d,fading:c},p)}})},bg=He("div")`
    width: 100%;
    height: ${({$autoHeight:e})=>e?"auto":"100%"};
`;function yg({items:e,renderItem:i,options:t,breakpoints:r,autoHeight:n,currentIndex:o,initialSlideIndex:a,onLastSlide:l,onFirstSlide:s}){const{navigation:d,allowTouchMove:c}=t,[p,h]=Ea({align:"start",draggable:c,startSnap:a??0}),{isSlideActive:u}=Jo({emblaApi:h,totalSlides:e.length}),{containerCss:m}=Xo(r,{totalSlides:e.length});Qo({emblaApi:h,navigation:d}),ea({emblaApi:h,onSlideChange:ce(()=>{t.onSlideChange?.(h?.selectedSnap()??0)},[h,t.onSlideChange])});const g=ce(()=>{if(!h)return;const i=h.selectedSnap();s?.(i>0),l?.(i<e.length-1)},[h,e.length]);ae(()=>{if(h)return g(),h.on("select",g),()=>{h.off("select",g)}},[h,g]);const w=n?{height:"auto"}:void 0;return ae(()=>{void 0!==o&&h&&o>=0&&h?.goTo(o)},[o]),Zn()&&V(bg,{$autoHeight:n,children:V(Ho,{$gap:10,ref:p,style:w,children:V(Do,{$responsive:m,style:w,children:e.map((e,t)=>V(Fo,{children:u(t)?i({item:e}):null},t))})})})}const _g=He("div")`
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: ${e=>"black"===e.theme.theme?"rgba(28, 28, 28, 1)":"#ffffff"};
    padding: 40px;
    overflow: hidden;

    @media (max-width: ${Xe}px) {
        padding: 16px;
    }
`,$g=He("p")`
    font-size: 14px;
    font-weight: 500;
    overflow-y: auto;
    color: ${e=>"black"===e.theme.theme?"#ffffff":"rgba(28, 28, 28, 1)"};
`,Sg=He(fl.RatingIcons)`
    color: ${({theme:e})=>e.widgets.gallery.modal.stars};
    gap: 4px;
    align-items: center;
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.widgets.gallery.modal.hearts};\n        `}
`,kg=He(lt)`
    height: 16px;
    width: 16px;
`,Cg=He(Gs)`
    margin-left: 7px;
`,Ng=He(ir)`
    height: 42px;
    width: 42px;
`,Tg=He("div")`
    display: flex;
    justify-content: space-between;
    gap: 12px;
`,Rg=He("div")`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-evenly;
    overflow: hidden;

    & p {
        color: ${e=>"black"===e.theme.theme?"#ffffff":"rgba(28, 28, 28, 1)"};
        font-size: 14px;
        font-weight: 600;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
`,Ig=He(Ds)`
    height: 16px;
    width: 16px;
`,Ag=He("div")`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
`,Lg=He("div")`
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;

    &:last-child::after {
        ${({$restImages:e})=>!!e&&`\n                    content: ${e?`'+${e}'`:""};\n                    position: absolute;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    color: white;\n                    left: 0;\n                    top: 0;\n                    width: 100%;\n                    height: 100%;\n                    font-size: 26px;\n                    font-weight: 700;\n                    background: rgba(0, 0, 0, 50%);\n                `}
    }
`,jg=He("img")`
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
`,Mg=({rating:e,emojiType:i,ratingType:t,name:r,authorUrl:n,profilePhotoUrl:o,time:a,review:l,verified:s,images:d,onImageClick:c})=>{const{t:p}=Qt(),h=_e(e),u=e?V(Sg,{$ratingType:t,children:[h?.map((e,r)=>V(kg,{ratingType:t,emojiType:i,fill:e},r)),s&&V(Cg,{verified:p("verified")})]}):null,m=d.length>3?d.length-3+1:0;return V(_g,{className:"reputon-popup-info-card",children:[V(Tg,{className:"reputon-info-container",children:[V(dt,{url:n,label:`${r} ${p("review")}`,className:"reputon-avatar",children:V(Ng,{src:o,alt:`${r} ${p("image")}`})}),V(Rg,{className:"reputon-text-container",children:[V("p",{className:"reputon-name",children:r}),V("p",{className:"reputon-date",children:a})]}),V(Ig,{})]}),u,V($g,{className:"reputon-review",children:l}),d.length>0&&V(Ag,{className:"reputon-preview-images",children:d.slice(0,3).map(({thumbnailUrl:e,url:i},t)=>V(Lg,{onClick:()=>c(i),$restImages:m,className:"reputon-preview-image",children:V(jg,{src:e,alt:p("image")})},t))})]})},zg="\n    color: gray;\n    flex-shrink: 0;\n    width: 32px;\n    height: 32px;\n    cursor: pointer;\n    border-radius: 100%;\n    padding: 10px;\n    z-index: 10;\n    & svg {\n        width: 100%;\n        height: 100%;\n    }\n        display: flex;\n    align-items: center;\n    justify-content: center;\n",Pg=He("button")`
    position: absolute;
    left: 12px;
    background: ${e=>"black"===e.theme.theme?"rgba(28, 28, 28, 1)":"#ffffff"};
    ${zg}
`,Eg=He("button")`
    position: absolute;
    right: 12px;
    background: ${e=>"black"===e.theme.theme?"rgba(28, 28, 28, 1)":"#ffffff"};
    ${zg}
    order: 2;
`,Og=He("div")`
    display: grid;
    grid-template-columns: 440px 440px;
    background: ${e=>"black"===e.theme.theme?"rgba(28, 28, 28, 1)":"#ffffff"};
    border-radius: 16px;
    overflow: hidden;
    width: 880px;
    height: 80vh;

    @media (max-width: ${Xe}px) {
        grid-template-rows: 50%;
        grid-template-columns: 100%;
        height: 90vh;
        width: 90vw;
    }
`,Bg=He("div")`
    position: relative;
    display: flex;
    gap: 20px;
    align-items: center;
    width: 100%;
    height: 100%;
    ${e=>`\n            @media (max-width: ${e.theme.media.mobile}px) {\n                gap: 0px;\n            }\n        `};
    margin: 0 auto;
    border-radius: 4px;
    background: ${e=>"black"===e.theme.theme?"rgba(40, 40, 40, 1)":"rgba(233, 233, 233, 0.75)"};

    & img {
        width: 100%;
        max-width: 100%;
    }
`,Ug=He("img")`
    position: absolute;
    width: auto;
    max-width: 99%;
    height: auto;
    max-height: 100%;
    top: 50%;
    left: 50%;
    object-fit: contain;
    transform: translate(-50%, -50%);
`,Hg=He("div")`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,Dg=({open:e,emojiType:i,ratingType:t,verified:r,onClose:n,imageReviews:o,disableClosePopup:a,imageIndex:l,onImageClick:s,reviewInfo:d,isMobile:c,onSlideChange:p,initialSlideIndex:h})=>{const{t:u}=Qt(),[m,g]=oe(!1),[w,v]=oe(!1),f=Zn();return V(Mo,{className:`${qe} gallery-reviews-popup`,open:e,onClose:n,children:V(Og,{children:[f&&V(Bg,{className:"reputon-swiper-container",onClick:a,children:[o.length>1&&m&&V(Pg,{type:"button","aria-label":u("previous_slide"),className:"reputon-swiper-button-prev",onClick:a,children:V(qn,{})}),o.length>1&&w&&V(Eg,{type:"button","aria-label":u("next_slide"),className:"reputon-swiper-button-next",onClick:a,children:V(Kn,{})}),V(yg,{initialSlideIndex:h,currentIndex:l,options:{navigation:{prev:".reputon-google-reviews-widget .reputon-modal .reputon-swiper-button-prev",next:".reputon-google-reviews-widget .reputon-modal .reputon-swiper-button-next"},allowTouchMove:c,onSlideChange:p},items:o,renderItem:({item:e})=>V(Hg,{children:V(Ug,{$isMobile:c,onClick:a,src:e.image?.url,alt:u("review_image"),className:"reputon-swiper-image"})}),onFirstSlide:g,onLastSlide:v})]}),V(Mg,{onImageClick:s,rating:d.rating,emojiType:i,ratingType:t,name:d.authorName,authorUrl:d.authorUrl,profilePhotoUrl:d.profilePhotoUrl,time:d.relativeTimeDescription,review:d.text,verified:r,images:d.images.length>1?d.images:[]})]})})},Fg=({reviews:e,initialIndex:i,open:t,emojiType:r,ratingType:n,verified:o,onClose:a})=>{const[l,s]=oe(i),[d,c]=oe(e[i]),p=window.innerWidth<600;return V(Dg,{initialSlideIndex:i,open:t,emojiType:r,ratingType:n,verified:o,onClose:a,imageReviews:e,disableClosePopup:e=>{e.stopPropagation()},imageIndex:l,onImageClick:i=>{s(e.findIndex(e=>e.image.url===i)),c(e.find(e=>e.image.url===i)||e[0])},reviewInfo:d,isMobile:p,onSlideChange:i=>{c(e[i]),s(i)}})},Vg=He("button")`
    display: flex;
    padding: 10px 15px;
    justify-content: center;
    white-space: nowrap;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    transition: 0.3s ease-out all;
    cursor: pointer;
    font-family: inherit;
    &::after {
        content: attr(data-content);
    }
    &:hover {
        opacity: 0.8;
    }
`,Wg=({className:e,children:i,content:t,...r})=>V(Vg,{"aria-label":t,"data-content":t,type:"button",className:e,...r,children:i}),Gg=Qi.Name,Zg=He(ar)`
    align-self: stretch;
    @container wrapper (max-width:${Ye}px) {
        margin-left: 0px;
        margin-right: 0px;
        flex-direction: column;
        align-items: normal !important;
    }
`,qg=He(ir)`
    border-radius: 100px;
`,Kg=He(Qi.ReviewsText)`
    color: ${e=>e.theme.widgets.gallery.colorReviewsCount};
`,Xg=He(({isEditable:e,content:i,...t})=>V(Gg,{...t,isEditable:e,content:i}))`
    color: ${e=>e.theme.widgets.gallery.colorSellerName};
    & a:hover {
        text-decoration: underline;
    }
`,Yg=He(Qi.Rating)`
    color: ${e=>e.theme.widgets.gallery.colorSellerStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}

    ${({$ratingType:e,theme:i})=>"emoji"===e&&`LightButton\n            color: ${i.widgets.gallery.colorSellerName};\n        `}
`,Jg=He(Wg)`
    color: ${e=>e.theme.widgets.gallery.colorLeaveReview};
    background: ${e=>e.theme.widgets.gallery.backgroundLeaveReview};
    align-self: center;
    @container wrapper (max-width:${Ye}px) {
        width: 100%;
        text-align: center;
    }
`,Qg=He(dt)`
    @container wrapper (max-width:${Ye}px) {
        width: 100%;
    }
`,ew=({imageUrl:e,url:i,name:t,ratingIcons:r,rating:n,reviewsNumber:o,writeReviewUrl:a,options:l})=>{const{t:s,locale:d}=Qt(),{writeReviewEnabled:c,contentIndex:p,ratingType:h,emojiType:u}=l;return V(Zg,{actionButton:c&&a?V(Qg,{url:a,children:V(Jg,{className:"reputon-bt reputon-link reputon-leave-review editable",content:s("write_review")})}):null,contentHeader:V(Qi,{children:V(Qi.Container,{icon:e?V(dt,{url:i,label:`${t} ${s("reviews")}`,children:V(Qi.Icon,{children:V(qg,{src:e,alt:s("business_image")})})}):void 0,content:V(Qi.Content,{name:V(dt,{inherit:!0,url:i,label:`${t} ${s("reviews")}`,children:V(Xg,{isEditable:"all"===p,content:t,children:t})}),rating:V(dt,{url:i,label:`${t} ${s("reviews")}`,children:V(Yg,{$ratingType:h,children:[V(Qi.Count,{children:Se(n)}),V(Qi.RatingIcons,{children:r?.map((e,i)=>V(lt,{ratingType:h,emojiType:u,fill:e},i))})]})}),reviewsText:V(Kg,{children:[V(sn,{value:o,locale:d})," ",s("reviews_on"),V(ln,{$isWide:!0})]})})})})})};Be`
    .${qe}.gallery-reviews-popup .reputon-modal-close {
        right: 8px !important;
        top: 8px !important;
    }
`;const iw=He(Mr)`
    padding: ${40}px;

    @container wrapper (max-width:${Xe}px) {
        padding: 16px;
    }

    ${({$full:e})=>e&&"padding-left: 0; padding-right: 0;"}
`,tw=({container:e,minChildWidth:i,gap:t,containerWidth:r})=>{const n=r||e?.current?.offsetWidth;if(!n)return;let o=Math.floor(n/i);return o=o*i+t*(o-1)>n?o-1:o,o<=0?1:o},rw=He(Ds)`
    width: 17px;
    height: 17px;
`;He("img")`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;const nw=He(Gs)`
    margin-left: 7px;
`;He(Wg)`
    color: ${e=>e.theme.widgets.grid.colorLoadMore};
    background: ${e=>e.theme.widgets.grid.backgroundLoadMore};
`;const ow=He(fl.RatingIcons)`
    color: ${e=>e.theme.widgets.grid.colorReviewStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}
`,aw=He(fl.TextContainer)`
    color: ${e=>e.theme.widgets.grid.colorDescription};
`,lw=He(fl.ShowMoreBtn)`
    color: ${e=>e.theme.widgets.grid.colorShowMore};
`,sw=He(fl.Time)`
    color: ${e=>e.theme.widgets.grid.colorTime};
`,dw=He(fl.Name)`
    color: ${e=>e.theme.widgets.grid.colorName};
`,cw=He(qa)`
    margin-top: 12px;
`,pw=({author:e,rating:i,verified:t,options:r,images:n,text:o,date:a,onImageClick:l})=>{const{name:s,url:d,profilePhotoUrl:c}=e,{fixedReviewsHeight:p,hasShadow:h,photosType:u,ratingType:m,emojiType:g}=r,w=_e(i),{t:v}=Qt(),f=i?V(ow,{$ratingType:m,children:[w?.map((e,i)=>V(lt,{ratingType:m,emojiType:g,fill:e},i)),t&&V(nw,{verified:v("verified")})]}):void 0;return V(fl,{fixedReviewsHeight:p,animation:!0,solidShadow:h,header:V(fl.Header,{logoApp:V(fl.Logo,{children:V(rw,{})}),info:V(fl.InfoTop,{icon:V(fl.Icon,{children:V(dt,{url:d,label:`${s} ${v("review")}`,children:V(ir,{src:c,alt:`${s} ${v("image")}`})})}),attributes:V(fl.Attributes,{name:V(dw,{children:V(dt,{inherit:!0,url:d,label:`${s} ${v("review")}`,children:s})}),time:V(sw,{children:a})})})}),rating:f,hiddenContainer:V(fl.HiddenContainer,{textContainer:V(aw,{children:o}),imagesContainer:"small"===u?V(fl.Images,{images:n?.map(({thumbnailUrl:e})=>e),callbackAfterImageClick:(e,i)=>l(e,i)}):void 0}),actionButton:V(lw,{children:e=>V("span",e?{children:v("show_less")}:{children:v("show_more")})}),imagesBlock:"large"===u?V(cw,{callbackAfterImageClick:(e,i)=>l(e,i),images:n?.map(({thumbnailUrl:e})=>e)}):void 0,mediumImagesBlock:"medium"===u?V(fl.MediumImages,{callbackAfterImageClick:(e,i)=>l(e,i),images:n?.map(({thumbnailUrl:e})=>e)}):void 0,info:V(fl.Info,{style:{display:"none"},icon:V(fl.Icon,{children:V(dt,{url:d,label:`${s} ${v("review")}`,children:V(ir,{src:c,alt:`${s} ${v("image")}`})})}),attributes:V(fl.Attributes,{name:V(dw,{children:V(dt,{url:d,label:`${s} ${v("review")}`,children:s})}),time:V(sw,{children:a})})})})},hw=Qi.Name,uw=He(ar)`
    align-self: stretch;
    @container wrapper (max-width:${Ye}px) {
        margin-left: 0px;
        margin-right: 0px;
        flex-direction: column;
        align-items: normal !important;
    }
`,mw=He(ir)`
    border-radius: 100px;
`,gw=He(Qi.ReviewsText)`
    color: ${e=>e.theme.widgets.grid.colorReviewsCount};
`,ww=He(({isEditable:e,content:i,...t})=>V(hw,{...t,isEditable:e,content:i}))`
    color: ${e=>e.theme.widgets.grid.colorSellerName};
    & a:hover {
        text-decoration: underline;
    }
`,vw=He(Qi.Rating)`
    color: ${e=>e.theme.widgets.grid.colorSellerStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}

    ${({$ratingType:e,theme:i})=>"emoji"===e&&`LightButton\n            color: ${i.widgets.grid.colorSellerName};\n        `}
`,fw=He(Wg)`
    color: ${e=>e.theme.widgets.grid.colorLeaveReview};
    background: ${e=>e.theme.widgets.grid.backgroundLeaveReview};
    align-self: center;
    @container wrapper (max-width:${Ye}px) {
        width: 100%;
        text-align: center;
    }
`,xw=He(dt)`
    @container wrapper (max-width:${Ye}px) {
        width: 100%;
    }
`,bw=({imageUrl:e,url:i,name:t,ratingIcons:r,rating:n,reviewsNumber:o,writeReviewUrl:a,options:l})=>{const{t:s,locale:d}=Qt(),{writeReviewEnabled:c,contentIndex:p,ratingType:h,emojiType:u,solidShadow:m}=l;return V(uw,{solidShadow:m,actionButton:c&&a?V(xw,{url:a,children:V(fw,{className:"reputon-bt reputon-link reputon-leave-review editable",content:s("write_review")})}):null,contentHeader:V(Qi,{children:V(Qi.Container,{icon:e?V(dt,{url:i,label:`${t} ${s("reviews")}`,children:V(Qi.Icon,{children:V(mw,{src:e,alt:s("business_image")})})}):void 0,content:V(Qi.Content,{name:V(dt,{inherit:!0,url:i,label:`${t} ${s("reviews")}`,children:V(ww,{isEditable:"all"===p,content:t,children:t})}),rating:V(dt,{url:i,label:`${t} ${s("reviews")}`,children:V(vw,{$ratingType:h,children:[V(Qi.Count,{children:Se(n)}),V(Qi.RatingIcons,{children:r?.map((e,i)=>V(lt,{ratingType:h,emojiType:u,fill:e},i))})]})}),reviewsText:V(gw,{children:[V(sn,{value:o,locale:d})," ",s("reviews_on"),V(ln,{$isWide:!0})]})})})})})},yw=He("div",io)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    overflow: hidden;
`,_w=He("div",io)`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(${300}px, 1fr));
    @supports (-webkit-hyphens: none) {
        grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
    }
    grid-gap: ${16}px;
    @container wrapper (max-width:${Ye}px) {
        grid-template-columns: repeat(auto-fill, minmax(${300}px, 1fr));
        grid-gap: ${12}px;
    }
`,$w=He(Wg)`
    color: ${({theme:e})=>e.widgets.grid.colorLoadMore};
    background: ${({theme:e})=>e.widgets.grid.backgroundLoadMore};
`,Sw=()=>{const{t:e}=Qt(),{containerRef:i,isNarrow:t}=np(),r=se(null),{data:n,container:o}=pe(Bi);Hi({container:o});const{reviewPhotosType:a,fixedReviewsHeight:l,contentIndex:s,showRating:d,numberOfRows:c,ratingType:p,emojiType:h,solidShadow:u,writeReviewEnabled:m}=Nw(Qe),{business:g,verified:w}=n,{summary:v,reviews:f,writeReviewUrl:x,imageUrl:b,url:y,rating:_,name:$,reviewsNumber:S}=Ui({contentIndex:s,business:g}),{aggregatedImages:k,summaryImages:C}=Mn(f,!!v),{setFullScreenImageOptions:N,handleClosePopup:T,open:R,popupContent:I,initialIndex:A}=zn(k),L=v?[V(Il,{onImageClick:(e,i)=>N(e,i),options:{reviewPhotosType:a,fixedReviewsHeight:l,hasShadow:u},images:C,items:v.items,reviewsNumber:S},"summaryReview"),...f]:f,{canLoadMore:j,handleShowMoreItems:M,showItemsCount:z}=(({container:e,itemsCount:i,numberOfRowsMobile:t=3,numberOfRowsDesktop:r=2,gap:n=16,mobileGap:o=12,minChildWidth:a=300,isNarrow:l})=>{const[s,d]=oe(1),[c,p]=oe(0),[h,u]=oe(!0),m=l?t:r,g=ce(()=>{const t=tw({container:e,minChildWidth:a,gap:l?o:n});t&&(d(t),p(t*m),u(t*m<(i||0)))},[e,i,l]);return le(()=>{g()},[g]),i?{handleShowMoreItems:()=>{p(e=>{const t=e+s*m;return t>=(i||0)&&u(!1),t})},showItemsCount:c,canLoadMore:h}:{}})({container:r,itemsCount:L.length,isNarrow:t,numberOfRowsMobile:c.mobile,numberOfRowsDesktop:c.desktop}),P=!f?.length,E=P&&!!_;return V(Mr,P&&!_?{className:"reputon-reviews-holder reputon-grid",children:V(Ar,{ratingType:p,emojiType:h,solidShadow:u,imageUrl:b,url:y,name:$,writeReviewUrl:x})}:E?{className:"reputon-reviews-holder reputon-grid",children:V(bw,{writeReviewUrl:x,imageUrl:b,url:y,name:$,rating:_,ratingIcons:_e(_),reviewsNumber:S,options:{writeReviewEnabled:m,contentIndex:s,ratingType:p,emojiType:h,solidShadow:u}})}:{className:"reputon-reviews-holder reputon-grid",children:[I&&V(Ua,{initialIndex:A,images:k?.map(({url:e})=>e),open:R,onClose:()=>T()}),V(yw,{ref:i,className:"reputon-grid-container",children:[d&&V(bw,{writeReviewUrl:x,imageUrl:b,url:y,name:$,rating:_,ratingIcons:_e(_),reviewsNumber:S,options:{writeReviewEnabled:m,contentIndex:s,ratingType:p,emojiType:h,solidShadow:u}}),V(_w,{ref:r,className:"reputon-grid-wrapper",children:z&&z>0?L?.slice(0,z).map((e,i)=>{if(v&&0===i)return e;const{authorUrl:t,rating:r,text:n,profilePhotoUrl:o,authorName:s,relativeTimeDescription:d,images:c}=e;return V(pw,{author:{url:t,name:s,profilePhotoUrl:o},rating:r,options:{photosType:a,fixedReviewsHeight:l,hasShadow:u,ratingType:p,emojiType:h},verified:w,images:c,text:n,date:d,onImageClick:(e,i)=>N(e,i)},i)}):null}),j&&V($w,{className:"reputon-load-more editable",onClick:M,children:e("load_more")})]})]})},kw=({container:e})=>{const{font:i,ratingType:t,emojiTypeNumber:r,theme:n,contentIndex:o,photoType:a,showMap:l,cardColor:s,starsColor:d,textColor:c,numberOfRowsMobile:p,numberOfRowsDesktop:h,transparency:u,solidShadow:m}=(e=>{const i=e?.getAttribute(Ai),t=e?.getAttribute(ji);return{font:i,ratingType:t,emojiTypeNumber:e.getAttribute(Mi),theme:e.getAttribute(pi),contentIndex:e.getAttribute(yi),photoType:e.getAttribute("data-photo-type"),showMap:"false"!==e.getAttribute("data-show-map"),cardColor:e.getAttribute(Si)||"",starsColor:e.getAttribute(ki)||"",textColor:e.getAttribute(Ci)||"",numberOfRowsMobile:e.getAttribute(Ni),numberOfRowsDesktop:e.getAttribute(Ti),transparency:e.getAttribute(Ri),solidShadow:"true"===e.getAttribute(zi)}})(e),g=Number(p)||4,w=Number(h)||4;return{type:ai,theme:n,contentIndex:o?"all"===o?"all":Number(o)-1:0,photoType:a,showMap:l,customColors:{cardColor:s,starsColor:d,textColor:c},numberOfRows:{mobile:Math.max(g,0),desktop:Math.max(w,0)},transparency:u?Number(u):1,font:Ei.includes(i)?i:"default",ratingType:Oi.includes(t)?t:"stars",emojiType:r&&Number(r)||0,solidShadow:m}},Cw={[Qe]:({container:e,legacyOptions:i})=>{const t=(e=>{const i="true"===e?.getAttribute(gi),t="true"===e?.getAttribute(hi),r=e?.getAttribute(Ai),n=e?.getAttribute(pi),o=e?.getAttribute(yi),a=e?.getAttribute($i),l=e?.getAttribute(ji),s=e?.getAttribute(Mi),d=e?.getAttribute(Ri),c=e?.getAttribute(Ni),p=e?.getAttribute(Ti);return{showRating:i,showReviewPhotos:t,font:r,theme:n,contentIndex:o,reviewPhotosType:a,ratingType:l,emojiTypeNumber:s,transparency:d,numberOfRowsMobile:c,numberOfRowsDesktop:p,writeReviewEnabled:"true"===e?.getAttribute(ui),fixedReviewsHeight:"false"!==e?.getAttribute(vi),solidShadow:"true"===e?.getAttribute(zi),cardColor:e?.getAttribute(Si)||"",starsColor:e?.getAttribute(ki)||"",textColor:e?.getAttribute(Ci)||""}})(e),r=(e=>{if(!e)return;const i=e.properties.showReviewPhotos;return{theme:e.theme,reviewPhotosType:i?"large":"none",writeReviewEnabled:e.properties.writeReviewEnabled,showRating:e.properties.showRating,fixedReviewsHeight:!0}})(i),n=r?{...t,...r}:t,{font:o,ratingType:a,theme:l,contentIndex:s,reviewPhotosType:d,showRating:c,writeReviewEnabled:p,fixedReviewsHeight:h,cardColor:u,starsColor:m,textColor:g,numberOfRowsMobile:w,numberOfRowsDesktop:v,transparency:f,emojiTypeNumber:x,solidShadow:b}=n;return{type:Qe,theme:l,contentIndex:"all"===s?"all":Number(s)-1,reviewPhotosType:d,showRating:c,writeReviewEnabled:p,fixedReviewsHeight:h,customColors:{cardColor:u,starsColor:m,textColor:g},numberOfRows:{mobile:Number(w)||3,desktop:Number(v)||2},transparency:f?Number(f):1,font:Ei.includes(o)?o:"default",ratingType:Oi.includes(a)?a:"stars",emojiType:x&&Number(x)||0,solidShadow:b}},[ei]:Um,[ci]:Um,[ii]:Um,[ti]:eh,[si]:eh,[ri]:({container:e})=>{const i=e?.getAttribute(Ai),t=e?.getAttribute(ji);return{type:ri,theme:e.getAttribute(pi),contentIndex:"all"===e.getAttribute(yi)?"all":Number(e.getAttribute(yi))-1,reviewPhotosType:e.getAttribute($i)||("true"===e.getAttribute(hi)?"large":"none"),writeReviewEnabled:"true"===e.getAttribute(ui),autoscroll:"true"===e.getAttribute(mi),fixedReviewsHeight:"true"===e.getAttribute(vi),customColors:{cardColor:e.getAttribute(Si)??"",starsColor:e.getAttribute(ki)??"",textColor:e.getAttribute(Ci)??""},transparency:e.getAttribute(Ri)?Number(e.getAttribute(Ri)):1,delay:e.getAttribute(Ii)??"",font:Ei.includes(i)?i:"default",hasShadow:"true"===e.getAttribute(_i),fluidScrolling:"true"===e.getAttribute(Li),ratingType:Oi.includes(t)?t:"stars",emojiType:e.getAttribute(Mi)&&Number(e.getAttribute(Mi))||0,solidShadow:"true"===e.getAttribute(zi)}},[ni]:({container:e,legacyOptions:i})=>{const t=(e=>{const i="true"===e?.getAttribute(hi),t=e?.getAttribute(Ai),r=e?.getAttribute(pi),n=e?.getAttribute(yi),o=e?.getAttribute(ji),a=e?.getAttribute(Mi),l=e?.getAttribute(Ri);return{showReviewPhotos:i,font:t,theme:r,contentIndex:n,ratingType:o,emojiTypeNumber:a,transparency:l,writeReviewEnabled:"true"===e?.getAttribute(ui),cardColor:e?.getAttribute(Si)||"",starsColor:e?.getAttribute(ki)||"",textColor:e?.getAttribute(Ci)||""}})(e),r=(e=>{if(e)return{theme:e.theme,showReviewPhotos:e.properties.showReviewPhotos,writeReviewEnabled:e.properties.writeReviewEnabled}})(i),n=r?{...t,...r}:t,{font:o,ratingType:a,theme:l,contentIndex:s,showReviewPhotos:d,writeReviewEnabled:c,cardColor:p,starsColor:h,textColor:u,transparency:m,emojiTypeNumber:g}=n;return{type:ni,theme:l,contentIndex:"all"===s?"all":Number(s)-1,showReviewPhotos:d,writeReviewEnabled:c,customColors:{cardColor:p,starsColor:h,textColor:u},transparency:m?Number(m):1,font:Ei.includes(o)?o:"default",ratingType:Oi.includes(a)?a:"stars",emojiType:g&&Number(g)||0}},[oi]:({container:e})=>{const{showReviewPhotos:i,showRating:t,font:r,ratingType:n,emojiTypeNumber:o,theme:a,contentIndex:l,reviewPhotosType:s,writeReviewEnabled:d,cardColor:c,starsColor:p,textColor:h,numberOfRowsMobile:u,numberOfRowsDesktop:m,transparency:g,solidShadow:w}=(e=>{const i="true"===e.getAttribute(hi),t="true"===e.getAttribute(gi),r=e?.getAttribute(Ai),n=e?.getAttribute(ji);return{showReviewPhotos:i,showRating:t,font:r,ratingType:n,emojiTypeNumber:e.getAttribute(Mi),theme:e.getAttribute(pi),contentIndex:e.getAttribute(yi),reviewPhotosType:e.getAttribute($i),writeReviewEnabled:"true"===e.getAttribute(ui),cardColor:e.getAttribute(Si)||"",starsColor:e.getAttribute(ki)||"",textColor:e.getAttribute(Ci)||"",numberOfRowsMobile:e.getAttribute(Ni),numberOfRowsDesktop:e.getAttribute(Ti),transparency:e.getAttribute(Ri),solidShadow:"true"===e.getAttribute(zi)}})(e);return{type:oi,theme:a,contentIndex:"all"===l?"all":Number(l)-1,reviewPhotosType:s||(i?"large":"none"),writeReviewEnabled:d,showRating:t,customColors:{cardColor:c,starsColor:p,textColor:h},numberOfRows:{mobile:Number(u)||3,desktop:Number(m)||2},transparency:g?Number(g):1,font:Ei.includes(r)?r:"default",ratingType:Oi.includes(n)?n:"stars",emojiType:o&&Number(o)||0,solidShadow:w}},[ai]:kw,[di]:({container:e})=>{const{showReviewPhotos:i,showRating:t,font:r,ratingType:n,emojiTypeNumber:o,theme:a,contentIndex:l,reviewPhotosType:s,writeReviewEnabled:d,fixedReviewsHeight:c,hasShadow:p,cardColor:h,starsColor:u,textColor:m,transparency:g,speed:w,solidShadow:v,variant:f}=(e=>{const i="true"===e.getAttribute(hi),t="true"===e.getAttribute(gi),r=e?.getAttribute(Ai),n=e?.getAttribute(ji);return{showReviewPhotos:i,showRating:t,font:r,ratingType:n,emojiTypeNumber:e.getAttribute(Mi),theme:e.getAttribute(pi),contentIndex:e.getAttribute(yi),reviewPhotosType:e.getAttribute($i),writeReviewEnabled:"true"===e.getAttribute(ui),fixedReviewsHeight:"false"!==e.getAttribute(vi),hasShadow:"true"===e.getAttribute(_i),cardColor:e.getAttribute(Si)??"",starsColor:e.getAttribute(ki)??"",textColor:e.getAttribute(Ci)??"",transparency:e.getAttribute(Ri),speed:e.getAttribute("data-speed")??"",solidShadow:"true"===e.getAttribute(zi),variant:e.getAttribute(Pi)}})(e);return{type:di,theme:a,contentIndex:"all"===l?"all":Number(l)-1,reviewPhotosType:s||(i?"large":"none"),writeReviewEnabled:d,fixedReviewsHeight:c,hasShadow:p,customColors:{cardColor:h,starsColor:u,textColor:m},transparency:g?Number(g):1,speed:w,font:Ei.includes(r)?r:"default",ratingType:Oi.includes(n)?n:"stars",emojiType:o&&Number(o)||0,solidShadow:v,showRating:t,variant:Hm.includes(f)?f:Hm[0]}},[li]:({container:e})=>{const i=(e=>{const i=e?.getAttribute(Ai),t=e?.getAttribute(pi),r=e?.getAttribute(yi),n=e?.getAttribute(ji),o=e?.getAttribute(Mi),a=e?.getAttribute(Pi);return{font:i,theme:t,contentIndex:r,ratingType:n,emojiTypeNumber:o,variant:a,starsColor:e?.getAttribute(ki)||"",textColor:e?.getAttribute(Ci)||"",cardColor:e?.getAttribute(Si)||""}})(e),t=i,{font:r,ratingType:n,theme:o,contentIndex:a,emojiTypeNumber:l,variant:s,starsColor:d,textColor:c,cardColor:p}=t;return{type:li,theme:o,contentIndex:"all"===a?"all":Number(a)-1,font:Ei.includes(r)?r:"default",ratingType:Oi.includes(n)?n:"stars",emojiType:l&&Number(l)||0,variant:s||"multicard",customColors:{starsColor:d,textColor:c,cardColor:p},transparency:1}},wrapper:({container:e})=>({type:"wrapper",horizontal:e.getAttribute("data-position-horizontal"),vertical:e.getAttribute(fi),isSticky:"true"===e.getAttribute(bi)||"parallax"===e.getAttribute(xi)})},Nw=e=>{const{container:i,legacy_widget_options:t}=pe(Bi);return Cw[e]({container:i,legacyOptions:t})};ze.bind({g:1});const Tw=`.${qe}`,Rw=(function(){const e=He.call({g:1},"div").apply(null,arguments);return function(i){return e(i),null}})`

    ${Tw} * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        line-height: inherit;
        letter-spacing: normal;
    }
    
    ${Tw} svg {
        fill: currentColor;
    }
    
    ${Tw} button {
        border: none;
        background: transparent;
        color: inherit;
        cursor: pointer;
    }

    ${Tw},
    ${Tw} p, 
    ${Tw} h1, 
    ${Tw} h2, 
    ${Tw} ul, 
    ${Tw} ol, 
    ${Tw} dl, 
    ${Tw} h3, 
    ${Tw} h4, 
    ${Tw} h5,
    ${Tw} h6, 
    ${Tw} b, 
    ${Tw} i, 
    ${Tw} span, 
    ${Tw} div, 
    ${Tw} a, 
    ${Tw} input, 
    ${Tw} button,
    ${Tw} img {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        line-height: inherit;
    }

    ${Tw} a:empty, 
    ${Tw} ul:empty, 
    ${Tw} dl:empty, 
    ${Tw} div:empty, 
    ${Tw} section:empty, 
    ${Tw} article:empty, 
    ${Tw} p:empty, 
    ${Tw} h1:empty, 
    ${Tw} h2:empty, 
    ${Tw} h3:empty, 
    ${Tw} h4:empty, 
    ${Tw} h5:empty, 
    ${Tw} h6:empty,
    ${Tw} button:empty {
        display: block;
    }

    ${Tw} a {
        text-decoration: none !important;
        border-bottom: none !important;
        box-shadow: none !important;
        background-image: none !important;
        color: inherit;
        &:active,
        &:focus,
        &:visited,
        &:hover {
            color: inherit;
            outline: none;
            cursor: pointer !important;
        }
        &:after {
            content: none !important;
        }
    };
`,Iw="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap",Aw="#F3F6F9",Lw="#DCE0E2",jw="#9F9F9F",Mw="#404040",zw="#d3d8e7",Pw="#484B53",Ew="#989898",Ow="#c2cee2",Bw="#161616",Uw="#111111",Hw="#282828",Dw="#ffffff",Fw="#FBB000",Vw="#8a79fa",Ww="#F48120",Gw="#8d38ff",Zw="#197bff",qw="#D52E63",Kw={compactWidth:270,transition:"all 0.3s ease-in-out",shadow:"0 2px 5px 0 rgba(0,0,0,.26)",media:{mobile:740}},Xw={light:{theme:"light",closeStickyIcon:Mw,background:Aw,colorLine:Fw,backgroundArrow:Lw,borderArrows:Lw,colorArrow:Mw,hoverStarsColor:Fw,colorGoogleBadge:Mw,heartsColor:qw,solidShadow:Ow,widgets:{carousel:{colorReviewStars:Fw,colorDescription:Mw,colorShowMore:jw,colorName:Mw,colorTime:jw,colorSellerName:Mw,colorSellerStars:Fw,colorReviewsCount:Mw,colorLeaveReview:Mw,backgroundLeaveReview:Dw,compactReview:{verifiedColor:"#D52E634D",colorName:Mw,colorShowMore:jw,colorDescription:"#2E2E2E"},dotted:{center:"#747474",default:"#dce0e2",edge:"#dce0e280"}},dual_row_carousel:{colorReviewStars:Fw,colorDescription:Mw,colorShowMore:jw,colorName:Mw,colorTime:jw,colorSellerName:Mw,colorSellerStars:Fw,colorReviewsCount:Mw,colorLeaveReview:Mw,backgroundLeaveReview:Dw},grid:{colorReviewStars:Fw,colorDescription:Mw,colorShowMore:jw,colorName:Mw,colorTime:jw,colorSellerName:Mw,colorSellerStars:Fw,colorReviewsCount:Mw,colorLeaveReview:Mw,backgroundLeaveReview:Dw,colorLoadMore:Mw,backgroundLoadMore:Aw},stickySlide:{colorName:Mw,colorReviewStars:Ww,colorSubText:Mw,colorDescription:Mw,colorShowMore:jw,colorTime:jw,backgroundModal:Dw,background:Dw,backgroundHover:Aw,colorLine:Ww},standard:{colorReviewStars:Fw,colorDescription:Mw,colorName:Mw,colorTime:jw,colorSellerName:Mw,colorSellerStars:Fw,colorReviewsCount:Mw,background:Aw,backgroundBody:Dw,colorLeaveReview:Mw,backgroundLeaveReview:Dw,scrollThumb:"#DBDBDB",scrollTrack:"#F4F4F4"},compact:{colorSellerName:Mw,colorSellerStars:Ww,colorReviewsCount:Mw,oneLineColor:Mw,background:Dw,backgroundHover:Aw,colorLine:Ww,colorReviewStars:Ww,solidShadow:Ww},"trust-bar":{colorReviewsCount:"#2d2d2db3",background:"#F4F4F4",backgroundHover:Aw,colorReviewStars:"#2D2D2D",solidShadow:"#C2CEE2"},inline:{background:"#F4F4F4",colorReviewStars:"#2D2D2D",colorReviewsCount:"#2D2D2Db3",solidShadow:Ow,avatarBorder:Dw,avatarText:Dw,avatarBackground:"#101827"},locations:{background:Aw,colorReviewStars:Fw,colorName:Mw,colorDescription:Mw,colorRatingText:jw,colorIcons:Mw,colorTime:jw,colorReviewsButton:jw,colorLoadMore:Mw,backgroundLoadMore:Aw,dividerColor:"#e7ebed",scrollThumb:"#e7eaeb",scrollTrack:"#e7ebed30"},gallery:{colorReviewStars:Fw,colorName:Dw,modal:{stars:Fw,hearts:qw},background:"#eaeaea",colorReviewsCount:Mw,colorSellerName:Mw,colorSellerStars:Fw,colorLeaveReview:Mw,backgroundLeaveReview:Dw}},summary:{colorReviewStars:Fw,colorDescription:Bw,colorShowMore:jw,colorName:Hw,noReviewsStarsColor:jw,colorTime:jw,colorLogoGradient1:Gw,colorLogoGradient2:Zw,colorLogoText:Dw,colorAiIcon:Vw,colorBadge:zw,compact:{colorName:"#2E2E2E",colorShowMore:jw,colorDescription:"#2E2E2E"}},noReviewsWidget:{colorDescription:Mw,colorName:Mw,colorIcons:Fw,colorLeaveReview:Mw,backgroundLeaveReview:Dw},...Kw},dark:{theme:"dark",closeStickyIcon:Dw,colorLine:Fw,background:Hw,backgroundArrow:Hw,colorArrow:Dw,borderArrows:Mw,hoverStarsColor:Fw,colorGoogleBadge:Dw,heartsColor:qw,solidShadow:Uw,widgets:{carousel:{colorReviewStars:Fw,colorDescription:Dw,colorShowMore:jw,colorName:Dw,colorTime:jw,colorSellerName:Dw,colorReviewsCount:Dw,colorSellerStars:Fw,colorLeaveReview:Dw,backgroundLeaveReview:Bw,compactReview:{verifiedColor:"#D52E634D",colorName:Dw,colorShowMore:jw,colorDescription:Dw},dotted:{center:"#DCE0E2",default:"#747474",edge:"#74747480"}},dual_row_carousel:{colorReviewStars:Fw,colorDescription:Dw,colorShowMore:jw,colorName:Dw,colorTime:jw,colorSellerName:Dw,colorReviewsCount:Dw,colorSellerStars:Fw,colorLeaveReview:Dw,backgroundLeaveReview:Bw},grid:{colorReviewStars:Fw,colorDescription:Dw,colorShowMore:jw,colorName:Dw,colorTime:jw,colorSellerName:Dw,colorReviewsCount:Dw,colorSellerStars:Fw,colorLeaveReview:Dw,backgroundLeaveReview:Bw,colorLoadMore:Dw,backgroundLoadMore:Hw},standard:{colorReviewStars:Fw,colorDescription:Dw,colorName:Dw,colorTime:jw,background:Hw,backgroundBody:Bw,colorSellerName:Dw,colorReviewsCount:Dw,colorSellerStars:Fw,colorLeaveReview:Dw,backgroundLeaveReview:Bw,scrollThumb:"#313030",scrollTrack:"#1F1F1F"},stickySlide:{colorName:Dw,colorReviewStars:Ww,colorDescription:Dw,colorSubText:Dw,colorShowMore:jw,colorTime:jw,backgroundModal:Bw,background:Hw,backgroundHover:Bw,colorLine:Ww},"trust-bar":{colorReviewsCount:"#ffffffb3",background:"#1F1F1F",colorReviewStars:Dw,backgroundHover:Bw,solidShadow:Uw},compact:{colorSellerName:Dw,colorReviewsCount:Dw,colorSellerStars:Ww,oneLineColor:Dw,background:Hw,backgroundHover:Bw,colorLine:Ww,colorReviewStars:Ww,solidShadow:Ww},inline:{background:"#1F1F1F",colorReviewStars:Dw,colorReviewsCount:"#ffffffb3",solidShadow:Ow,avatarBorder:"#1F1F1F",avatarText:Dw,avatarBackground:"#101827"},locations:{background:Hw,colorReviewStars:Fw,colorName:Dw,colorDescription:Dw,colorIcons:Dw,colorRatingText:jw,colorReviewsButton:jw,colorTime:jw,colorLoadMore:Dw,backgroundLoadMore:Hw,dividerColor:"#313030",scrollThumb:"#313030",scrollTrack:"#1c1c1c30"},gallery:{colorReviewStars:Fw,colorName:Dw,modal:{stars:Fw,hearts:qw},background:"#eaeaea",colorReviewsCount:Dw,colorSellerName:Dw,colorSellerStars:Fw,colorLeaveReview:Dw,backgroundLeaveReview:Bw}},summary:{colorReviewStars:Fw,colorDescription:Dw,colorShowMore:jw,colorName:Dw,noReviewsStarsColor:jw,colorTime:Ew,colorLogoGradient1:Gw,colorLogoGradient2:Zw,colorLogoText:Dw,colorAiIcon:Vw,colorBadge:Pw,compact:{colorName:Dw,colorShowMore:jw,colorDescription:Dw}},noReviewsWidget:{colorDescription:Dw,colorName:Dw,colorIcons:Fw,colorLeaveReview:Dw,backgroundLeaveReview:Bw},...Kw},black:{theme:"black",closeStickyIcon:Dw,colorLine:Dw,background:Hw,backgroundArrow:Hw,colorArrow:Dw,hoverStarsColor:Dw,borderArrows:Dw,colorGoogleBadge:Dw,heartsColor:Dw,solidShadow:Uw,widgets:{carousel:{colorReviewStars:Dw,colorDescription:Dw,colorShowMore:Dw,colorName:Dw,colorTime:Dw,colorSellerName:Dw,colorSellerStars:Dw,colorReviewsCount:Dw,colorLeaveReview:Dw,backgroundLeaveReview:Bw,compactReview:{verifiedColor:Dw,colorName:Dw,colorShowMore:Dw,colorDescription:Dw},dotted:{center:"white",default:"white",edge:"#ffffff"}},dual_row_carousel:{colorReviewStars:Dw,colorDescription:Dw,colorShowMore:Dw,colorName:Dw,colorTime:Dw,colorSellerName:Dw,colorSellerStars:Dw,colorReviewsCount:Dw,colorLeaveReview:Dw,backgroundLeaveReview:Bw},grid:{colorReviewStars:Dw,colorDescription:Dw,colorShowMore:Dw,colorName:Dw,colorTime:Dw,colorSellerName:Dw,colorSellerStars:Dw,colorReviewsCount:Dw,colorLeaveReview:Dw,backgroundLeaveReview:Bw,colorLoadMore:Dw,backgroundLoadMore:Hw},standard:{colorReviewStars:Dw,colorDescription:Dw,colorName:Dw,colorTime:jw,background:Hw,backgroundBody:Bw,colorSellerName:Dw,colorReviewsCount:Dw,colorSellerStars:Dw,colorLeaveReview:Dw,backgroundLeaveReview:Bw,scrollThumb:"#313030",scrollTrack:"#1F1F1F"},stickySlide:{colorName:Dw,colorDescription:Dw,colorReviewStars:Dw,colorSubText:Dw,colorShowMore:Dw,colorTime:jw,backgroundModal:Bw,background:Hw,backgroundHover:Bw,colorLine:Dw},"trust-bar":{colorReviewsCount:"#ffffffaf",background:Hw,colorReviewStars:Dw,backgroundHover:Bw,solidShadow:Uw},compact:{colorSellerName:Dw,colorReviewsCount:Dw,colorSellerStars:Dw,oneLineColor:Dw,background:Hw,backgroundHover:Bw,colorLine:Dw,colorReviewStars:Bw,solidShadow:Uw},inline:{background:"#1F1F1F",colorReviewStars:Dw,colorReviewsCount:Dw,solidShadow:Ow,avatarBackground:Dw,avatarText:"#1F1F1F",avatarBorder:"#1F1F1F"},locations:{background:Hw,colorReviewStars:Dw,colorName:Dw,colorDescription:Dw,colorIcons:Dw,colorRatingText:Dw,colorReviewsButton:Dw,colorTime:Dw,colorLoadMore:Dw,backgroundLoadMore:Hw,dividerColor:"#313030",scrollThumb:"#313030",scrollTrack:"#1c1c1c30"},gallery:{colorReviewStars:Dw,colorName:Dw,modal:{stars:Dw,hearts:Dw},background:"#eaeaea",colorReviewsCount:Dw,colorSellerName:Dw,colorSellerStars:Dw,colorLeaveReview:Dw,backgroundLeaveReview:Bw}},summary:{colorReviewStars:Dw,colorDescription:Dw,colorShowMore:Dw,colorName:Hw,noReviewsStarsColor:jw,colorTime:Dw,colorLogoGradient1:Dw,colorLogoGradient2:Dw,colorLogoText:"#000000",colorAiIcon:Dw,colorBadge:Dw,compact:{colorName:"#2E2E2E",colorShowMore:Dw,colorDescription:Dw}},noReviewsWidget:{colorDescription:Dw,colorName:Dw,colorIcons:Dw,colorLeaveReview:Dw,backgroundLeaveReview:Bw},...Kw},custom:{theme:"custom",closeStickyIcon:Mw,background:Aw,colorLine:Fw,backgroundArrow:Lw,colorArrow:Mw,hoverStarsColor:Fw,borderArrows:Lw,colorGoogleBadge:Mw,heartsColor:qw,solidShadow:Ow,widgets:{carousel:{colorReviewStars:Fw,colorDescription:Mw,colorShowMore:jw,colorName:Mw,colorTime:jw,colorSellerName:Mw,colorSellerStars:Fw,colorReviewsCount:Mw,colorLeaveReview:Mw,backgroundLeaveReview:Dw,compactReview:{verifiedColor:"#D52E634D",colorName:"#2E2E2E",colorShowMore:jw,colorDescription:"#2E2E2E"},dotted:{center:"#747474",default:"#dce0e2",edge:"#dce0e280"}},dual_row_carousel:{colorReviewStars:Fw,colorDescription:Mw,colorShowMore:jw,colorName:Mw,colorTime:jw,colorSellerName:Mw,colorSellerStars:Fw,colorReviewsCount:Mw,colorLeaveReview:Mw,backgroundLeaveReview:Dw},grid:{colorReviewStars:Fw,colorDescription:Mw,colorShowMore:jw,colorName:Mw,colorTime:jw,colorSellerName:Mw,colorSellerStars:Fw,colorReviewsCount:Mw,colorLeaveReview:Mw,backgroundLeaveReview:Dw,colorLoadMore:Mw,backgroundLoadMore:Aw},stickySlide:{colorName:Mw,colorReviewStars:Ww,colorDescription:Mw,colorSubText:Mw,colorShowMore:jw,colorTime:jw,backgroundModal:Dw,background:Dw,backgroundHover:Dw,colorLine:Ww},standard:{colorReviewStars:Fw,colorDescription:Mw,colorName:Mw,colorTime:jw,colorSellerName:Mw,colorSellerStars:Fw,colorReviewsCount:Mw,background:Aw,backgroundBody:Dw,colorLeaveReview:Mw,backgroundLeaveReview:Dw,scrollThumb:"#DBDBDB",scrollTrack:"#F4F4F4"},compact:{colorSellerName:Mw,colorSellerStars:Ww,colorReviewsCount:Mw,oneLineColor:Mw,background:Dw,backgroundHover:Dw,colorLine:Ww,colorReviewStars:Ww,solidShadow:Ww},"trust-bar":{colorReviewsCount:Mw,background:Dw,backgroundHover:Dw,colorReviewStars:Ww,solidShadow:"#C2CEE2"},inline:{background:"#F4F4F4",colorReviewStars:"#2D2D2D",colorReviewsCount:"#2D2D2Db3",solidShadow:Ow,avatarBorder:Dw,avatarText:Dw,avatarBackground:"#101827"},locations:{background:Aw,colorReviewStars:Fw,colorName:Mw,colorDescription:Mw,colorRatingText:jw,colorIcons:Mw,colorReviewsButton:jw,colorTime:Dw,colorLoadMore:Dw,backgroundLoadMore:Hw,dividerColor:"#e7ebed",scrollThumb:"#e7eaEeb",scrollTrack:"#e7ebed30"},gallery:{colorReviewStars:Fw,colorName:Dw,modal:{stars:Fw,hearts:qw},background:"#eaeaea",colorReviewsCount:Mw,colorSellerName:Mw,colorSellerStars:Fw,colorLeaveReview:Mw,backgroundLeaveReview:Dw}},summary:{colorReviewStars:Fw,colorDescription:Bw,colorShowMore:"#9F9F9F",colorName:Hw,noReviewsStarsColor:jw,colorTime:"#9F9F9F",colorLogoGradient1:Gw,colorLogoGradient2:Zw,colorLogoText:Dw,colorAiIcon:Vw,colorBadge:zw,compact:{colorName:"#2E2E2E",colorShowMore:jw,colorDescription:"#2E2E2E"}},noReviewsWidget:{colorDescription:Mw,colorName:Mw,colorIcons:Fw,colorLeaveReview:Mw,backgroundLeaveReview:Dw},...Kw}},Yw=D(Xw.light);var Jw,Qw,ev,iv;Jw=f,Qw=()=>pe(Yw),ev=e=>{for(let i in e)"$"===i[0]&&delete e[i]},iv=`.${qe}`,Ie.p=void 0,Ie.s=iv,Pe=Jw,Ee=Qw,Oe=ev;const tv=({children:e})=>{const{data:i,type:t}=pe(Bi),{theme:r,contentIndex:n,customColors:o,transparency:a,font:l}=Nw(t),{url:s}=Ui({contentIndex:n,business:i?.business}),d=Xw[r],c=(e=>"theme"===e?window.getComputedStyle(document.querySelector("body")).getPropertyValue("font-family")||"inherit":"Manrope, sans-serif")(l);"custom"===d.theme&&((e,i)=>{Ve(e,i)})(d,o),null!=a&&1!==a&&((e,i)=>{Ze(e,i)})(d,a),d.hasLink=!!s,d.fontFamily=c,d.isGoogleFont="default"===l;const p=de(()=>document.reputon_global_styles_added,[]);return document.reputon_global_styles_added=!0,p||(({enabled:e})=>{if(!e)return;if(document.querySelector(`link[href="${Iw}"]`))return;const i=document.createElement("link");i.rel="stylesheet",i.href=Iw,document.head.appendChild(i)})({enabled:d.isGoogleFont}),V(Yw.Provider,{value:d,children:[!p&&V(Rw,{}),e]})},rv=({WidgetComponent:e,container:i,type:t})=>{const[r,n]=oe(),o=`widget-id${Math.floor(1e5*Math.random())}`,a=Xt();return i.setAttribute("initialized",""),ae(()=>{Ce().then(e=>{if(!e)return;const i=be({data:e,locale:a,localeFromBackend:e.language});n(i)})},[]),r?.customCSS&&!document.reputon_custom_css_styles_added&&($e(r?.customCSS),document.reputon_custom_css_styles_added=!0),r&&V(Bi.Provider,{value:{data:r,container:i,type:t,widgetId:o},children:V(tv,{children:V(Jt,{defaultLocale:r?.language,children:V(e,{})})})})},nv=He("div")`
    display: flex;
    flex-direction: column;
    margin: 0 32px;
    @container wrapper (max-width:${Ye}px) {
        margin: 0;
    }
`,ov=He("div")`
    display: flex;
    min-width: 10%;
    gap: 48px;
    @container wrapper (max-width:${Ye}px) {
        gap: 16px;
        flex-direction: column;
    }
`,av=He(rr)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    align-self: center;
    width: 100%;
`,lv=He("div")`
    display: none;
    order: 2;
    @container wrapper (max-width:${Ye}px) {
        justify-content: center;
        display: flex;
        gap: 16px;
        & button {
            display: flex;
        }
    }
`,sv=He("div")`
    display: flex;
    width: 100%;
    overflow: hidden;
    mask-image: ${({$hasShadow:e})=>e&&"linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 5%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0.2) 95%, rgba(0, 0, 0, 0) 100%)"};
    @container wrapper (max-width:${Ye}px) {
        gap: 0;
    }

    @container wrapper (max-width:${Ye}px) {
        mask-image: ${({$hasShadow:e})=>e&&"linear-gradient(90deg,\n          rgba(0, 0, 0, 0) 0%,\n          rgba(0, 0, 0, 0.1) 1%,\n          rgba(0, 0, 0, 1) 6%,\n          rgba(0, 0, 0, 1) 94%,\n          rgba(0, 0, 0, 0.1) 99%,\n          rgba(0, 0, 0, 0) 100%\n        );"};
    }
`,dv=Ue`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`,cv=He("div",io)`
    display: flex;
    animation: ${dv} ${e=>e.$animationDuration}s linear infinite;
`,pv=He("div")`
    display: flex;
    gap: 20px;
    margin-right: 20px;
`,hv=He("div")`
    display: flex;
    height: auto;
    transition: 0.2s;
    flex-shrink: 0;
    width: 350px;
`,uv=He(Ds)`
    width: 17px;
    height: 17px;
`,mv=He(fl.RatingIcons)`
    color: ${({theme:e})=>e.widgets.carousel.colorReviewStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}
`,gv=He(fl.Name)`
    color: ${({theme:e})=>e.widgets.carousel.colorName};
`,wv=He(fl.TextContainer)`
    color: ${e=>e.theme.widgets.carousel.colorDescription};
`,vv=He(fl.ShowMoreBtn)`
    color: ${e=>e.theme.widgets.carousel.colorShowMore};
`,fv=He(fl.Time)`
    color: ${e=>e.theme.widgets.carousel.colorTime};
`,xv=He(Gs)`
    margin-left: 7px;
`,bv=He(qa)`
    margin-top: 15px;
`,yv=({className:e,speed:i,reviews:t,summary:r,summaryImages:n,images:o,reviewsNumber:a})=>{const{t:l}=Qt(),{data:s}=pe(Bi),{fixedReviewsHeight:d,reviewPhotosType:c,hasShadow:p,ratingType:h,emojiType:u,solidShadow:m}=Nw(ri),{verified:g}=s,{sliderRef:w,startAnimation:v,stopAnimation:f,handleMouseEnter:x,handleMouseLeave:b,handleTouchMobileSwiper:y}=sd(),{setFullScreenImageOptions:_,handleClosePopup:$,open:S,popupContent:k,initialIndex:C}=zn(o),N=Zn();return ae(()=>{S&&f()},[S]),ae(()=>(window.addEventListener("touchstart",y),()=>{window.removeEventListener("touchstart",y)}),[]),N&&V(sv,{className:e,$hasShadow:p,children:[k&&V(Ua,{initialIndex:C,images:o?.map(e=>e.url),open:S,onClose:()=>$(v)}),V(cv,{ref:w,onMouseEnter:x,onMouseLeave:b,className:"reputon-slider",$animationDuration:i*t.length/2,children:Array(2).fill(0).map((e,i)=>V(pv,{children:[r&&V(hv,{className:"reputon-slide",children:V(Il,{onImageClick:_,options:{reviewPhotosType:c,fixedReviewsHeight:d,hasShadow:m},reviewsNumber:a,images:n,items:r?.items},"summaryReview")}),t?.map(e=>{const{authorUrl:i,rating:t,text:r,profilePhotoUrl:n,authorName:o,relativeTimeDescription:a,images:s}=e,p=_e(t),w=t?V(mv,{$ratingType:h,children:[p?.map((e,i)=>V(lt,{ratingType:h,emojiType:u,fill:e},i)),g&&V(xv,{verified:l("verified")})]}):null;return V(hv,{className:"reputon-slide",children:V(fl,{fixedReviewsHeight:d,solidShadow:m,header:V(fl.Header,{logoApp:V(fl.Logo,{children:V(uv,{})}),info:V(fl.InfoTop,{icon:V(fl.Icon,{children:V(dt,{url:i,label:`${o} ${l("review")}`,children:V(ir,{src:n,alt:`${o} ${l("image")}`})})}),attributes:V(fl.Attributes,{name:V(gv,{children:V(dt,{inherit:!0,url:i,label:`${o} ${l("review")}`,children:o})}),time:V(fv,{children:a})})})}),rating:w,hiddenContainer:V(fl.HiddenContainer,{textContainer:V(wv,{children:r}),imagesContainer:"small"===c?V(fl.Images,{images:s?.map(({thumbnailUrl:e})=>e),callbackAfterImageClick:_}):null}),mediumImagesBlock:"medium"===c?V(fl.MediumImages,{callbackAfterImageClick:_,images:s?.map(({thumbnailUrl:e})=>e)}):null,actionButton:V(vv,{children:e=>V("span",e?{children:l("show_less")}:{children:l("show_more")})}),imagesBlock:"large"===c?V(bv,{callbackAfterImageClick:_,images:s?.map(({thumbnailUrl:e})=>e)}):null,info:V(fl.Info,{style:{display:"none"},icon:V(fl.Icon,{children:V(dt,{url:i,label:`${o} ${l("review")}`,children:V(ir,{src:n,alt:`${o} ${l("image")}`})})}),attributes:V(fl.Attributes,{name:V(gv,{children:V(dt,{url:i,label:`${o} ${l("review")}`,children:o})}),time:V(fv,{children:a})})})})},e.id)})]},i))})]})},_v=He(ir)`
    border-radius: 100px;
`,$v=He(ln)``,Sv=He("div")`
    background: ${e=>e.theme.background};
    border-radius: 16px;
    padding: 12px;
    display: flex;
    width: fit-content;
    max-width: 280px;
    align-self: center;
    flex-direction: column;
    gap: 12px;
    ${e=>e.$hasSolidShadow&&`\n            border-right: 8px solid ${e.theme.solidShadow};\n            border-bottom: 8px solid ${e.theme.solidShadow};\n        `};
    @container wrapper (max-width:${Ye}px) {
        max-width: none;
        align-self: flex-start;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    @container wrapper (max-width:${Je}px) {
        flex-direction: column;
        align-items: normal;
    }
`,kv=He(Qi.Name)`
    min-width: 0;
    color: ${e=>e.theme.widgets.carousel.colorSellerName};
    &:hover {
        text-decoration: ${e=>e.theme.hasLink?"underline":"none"};
    }
`,Cv=He(Qi.ReviewsText)`
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
    width: max-content;
`,Nv=He(Qi.Rating)`
    color: ${e=>e.theme.widgets.carousel.colorSellerStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}

    ${({$ratingType:e,theme:i})=>"emoji"===e&&`\n            color: ${i.widgets.carousel.colorSellerName};\n        `}
`,Tv=He(Qi.Container)`
    display: flex;
    min-width: 100px;
    width: auto;
    gap: 8px;
    flex-shrink: 1;
    min-width: 0;
`;He("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
    margin-top: 4px;
    font-size: 11px;
    @container wrapper (max-width:${Ye}px) {
        justify-content: center;
    }
`;const Rv=({className:e})=>{const{t:i,locale:t}=Qt(),{data:r}=pe(Bi),{contentIndex:n,writeReviewEnabled:o,emojiType:a,ratingType:l,solidShadow:s}=Nw(ri),{business:d}=r,{writeReviewUrl:c,reviewsNumber:p,url:h,rating:u,icon:m,name:g}=Ui({contentIndex:n,business:d}),w=_e(u);return Zn()&&V(Sv,{$hasSolidShadow:s,className:e,children:[V(Qi,{children:V(Tv,{icon:V(dt,{url:h,label:`${g} ${i("reviews")}`,children:V(Qi.Icon,{children:V(_v,{src:m,alt:i("business_image")})})}),content:V(Qi.Content,{name:V(dt,{inherit:!0,url:h,label:`${g} ${i("reviews")}`,children:V(kv,{$isEditable:"all"===n,$content:g,children:g})}),rating:V(dt,{url:h,label:`${g} ${i("reviews")}`,children:V(Nv,{$ratingType:l,children:[V(Qi.Count,{children:Se(u)}),V(Qi.RatingIcons,{children:w.map((e,i)=>V(lt,{ratingType:l,emojiType:a,fill:e},i))})]})}),reviewsText:V(Cv,{children:[V(sn,{value:p,locale:t})," ",i("reviews_on")?V(b,{children:[i("reviews_on"),V($v,{$isWide:!0})]}):V(b,{children:[i("reviews")," on",V($v,{$isWide:!0})]})]})})})}),o&&c&&V(dt,{className:"reputon-buttons-holder",url:c,label:i("write_review"),children:V(av,{className:"reputon-bt reputon-link reputon-leave-review editable",content:i("write_review")})})]})};function Iv({items:e,renderItem:i,options:t,onSlideChange:r}){const{delay:n,loop:o,navigation:a,autoscroll:l}=t,[s,d]=Ea({align:"start",loop:o},[wd({delay:n,active:l})]),{isSlideActive:c}=Jo({emblaApi:d,totalSlides:e.length});Yo({emblaApi:d}),Qo({emblaApi:d,navigation:a}),ea({emblaApi:d,onSlideChange:r});const{containerCss:p}=Xo([{breakpoint:1920,slidesPerView:4},{breakpoint:1420,slidesPerView:3},{breakpoint:1e3,slidesPerView:2},{breakpoint:570,slidesPerView:1}]);return Zn()&&V(Ho,{$gap:12,ref:s,children:V(Do,{$responsive:p,children:e.map((e,t)=>V(Fo,{children:c(t)?i({item:e,index:t}):null},t))})})}const Av=He("div")`
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    mask-image: ${({$hasShadow:e})=>e&&"linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 5%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0.2) 95%, rgba(0, 0, 0, 0) 100%)"};
    @container wrapper (max-width:${Ye}px) {
        gap: 0px;
        padding: 0;
    }
`,Lv=He(Ds)`
    width: 17px;
    height: 17px;
`,jv=He(fl.RatingIcons)`
    color: ${e=>e.theme.widgets.carousel.colorReviewStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}
`,Mv=He(fl.TextContainer)`
    color: ${e=>e.theme.widgets.carousel.colorDescription};
`,zv=He(fl.ShowMoreBtn)`
    color: ${e=>e.theme.widgets.carousel.colorShowMore};
`,Pv=He(fl.Time)`
    color: ${e=>e.theme.widgets.carousel.colorTime};
`;He("img")`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;const Ev=()=>"\n    position: absolute;\n    top: 50%;\n    z-index: 10;\n\n    flex-shrink: 0;\n    width: 40px;\n    height: 40px;\n    border-radius: 1000px;\n    display: flex;\n    align-items: center !important;\n    justify-content: center !important;\n    cursor: pointer;\n    @container wrapper (max-width:740px) {\n        display: none;\n        position: relative;\n        top: 0;\n        transform: none;\n    }\n",Ov=He("button")`
    transform: translate(-50%, -50%);
    left: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${Ev}
`,Bv=He("button")`
    order: 2;
    transform: translate(50%, -50%);
    right: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${Ev}
`,Uv=He(fl.Name)`
    color: ${e=>e.theme.widgets.carousel.colorName};
`;He(rr)`
    align-self: center;
`;const Hv=He(Gs)`
    margin-left: 7px;
`,Dv=He(qa)`
    margin-top: auto;
`,Fv=({className:e,setFullScreenImageOptions:i,summaryImages:t,isNavigationExists:r})=>{const[n,o]=oe(!0),{t:a}=Qt(),{data:l,widgetId:s}=pe(Bi),{autoscroll:d,fixedReviewsHeight:c,reviewPhotosType:p,contentIndex:h,delay:u,hasShadow:m,emojiType:g,ratingType:w,solidShadow:v}=Nw(ri),f=()=>{o(!1)},x=(e,t)=>{i(e,t),f()},{business:b,verified:y}=l,{summary:_,reviews:$,reviewsNumber:S}=Ui({contentIndex:h,business:b}),k=jn(+u,5e3),C=_?[V(Il,{onImageClick:x,allClosed:n,options:{reviewPhotosType:p,fixedReviewsHeight:c,hasShadow:v},reviewsNumber:S,images:t,items:_?.items,onChangeShowMoreState:f},"summaryReview"),...$]:$;return V(Av,{$hasShadow:m,className:e,children:[r&&!m&&V(Ov,{type:"button","aria-label":a("previous_slide"),className:"reputon-swiper-button-prev",children:V(qn,{})}),r&&!m&&V(Bv,{type:"button","aria-label":a("next_slide"),className:"reputon-swiper-button-next",children:V(Kn,{})}),V(Iv,{options:{navigation:{next:`#${s} .reputon-swiper-button-next`,prev:`#${s} .reputon-swiper-button-prev`},delay:k,loop:!0,autoscroll:d},items:C,onSlideChange:()=>o(!0),renderItem:({item:e,index:i})=>{if(_&&0===i)return e;const{authorUrl:t,rating:r,text:o,profilePhotoUrl:l,authorName:s,relativeTimeDescription:d,images:h}=e,u=_e(r),m=r?V(jv,{$ratingType:w,children:[u?.map((e,i)=>V(lt,{ratingType:w,emojiType:g,fill:e},i)),y&&V(Hv,{verified:a("verified")})]}):null;return V(fl,{allClosed:n,fixedReviewsHeight:c,solidShadow:v,header:V(fl.Header,{logoApp:V(fl.Logo,{children:V(Lv,{})}),info:V(fl.InfoTop,{icon:V(fl.Icon,{children:V(dt,{url:t,label:`${s} review`,children:V(ir,{src:l,alt:`${s} ${a("image")}`})})}),attributes:V(fl.Attributes,{name:V(Uv,{children:V(dt,{inherit:!0,url:t,label:`${s} ${a("review")}`,children:s})}),time:V(Pv,{children:d})})})}),rating:m,hiddenContainer:V(fl.HiddenContainer,{textContainer:V(Mv,{onClick:f,children:o}),imagesContainer:"small"===p?V(fl.Images,{images:h?.map(({thumbnailUrl:e})=>e),callbackAfterImageClick:x}):null}),actionButton:V(zv,{children:e=>V("span",e?{children:a("show_less")}:{onClick:f,children:a("show_more")})}),imagesBlock:"large"===p?V(Dv,{callbackAfterImageClick:x,images:h?.map(({thumbnailUrl:e})=>e)}):null,mediumImagesBlock:"medium"===p?V(fl.MediumImages,{callbackAfterImageClick:x,images:h?.map(({thumbnailUrl:e})=>e)}):null,info:V(fl.Info,{style:{display:"none"},icon:V(fl.Icon,{children:V(dt,{url:t,label:`${s} ${a("review")}`,children:V(ir,{src:l,alt:`${s} ${a("image")}`})})}),attributes:V(fl.Attributes,{name:V(Uv,{children:V(dt,{url:t,label:`${s} ${a("review")}`,children:s})}),time:V(Pv,{children:d})})})})}})]})},Vv=Qi.Name,Wv=He(ar)`
    align-self: stretch;
    @container wrapper (max-width:${Ye}px) {
        margin-left: 0px;
        margin-right: 0px;
        flex-direction: column;
        align-items: normal !important;
    }
`,Gv=He(ir)`
    border-radius: 100px;
`,Zv=He(Qi.ReviewsText)`
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
`,qv=He(({isEditable:e,content:i,...t})=>V(Vv,{...t,isEditable:e,content:i}))`
    color: ${e=>e.theme.widgets.carousel.colorSellerName};
    & a:hover {
        text-decoration: underline;
    }
`,Kv=He(Qi.Rating)`
    color: ${e=>e.theme.widgets.carousel.colorSellerStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}

    ${({$ratingType:e,theme:i})=>"emoji"===e&&`LightButton\n            color: ${i.widgets.carousel.colorSellerName};\n        `}
`,Xv=He(Wg)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    align-self: center;
    @container wrapper (max-width:${Ye}px) {
        width: 100%;
        text-align: center;
    }
`,Yv=He(dt)`
    @container wrapper (max-width:${Ye}px) {
        width: 100%;
    }
`,Jv=({imageUrl:e,url:i,name:t,ratingIcons:r,rating:n,reviewsNumber:o,writeReviewUrl:a,options:l})=>{const{t:s,locale:d}=Qt(),{writeReviewEnabled:c,contentIndex:p,ratingType:h,emojiType:u}=l;return V(Wv,{actionButton:c&&a?V(Yv,{url:a,children:V(Xv,{className:"reputon-bt reputon-link reputon-leave-review editable",content:s("write_review")})}):null,contentHeader:V(Qi,{children:V(Qi.Container,{icon:e?V(dt,{url:i,label:`${t} ${s("reviews")}`,children:V(Qi.Icon,{children:V(Gv,{src:e,alt:s("business_image")})})}):void 0,content:V(Qi.Content,{name:V(dt,{inherit:!0,url:i,label:`${t} ${s("reviews")}`,children:V(qv,{isEditable:"all"===p,content:t,children:t})}),rating:V(dt,{url:i,label:`${t} ${s("reviews")}`,children:V(Kv,{$ratingType:h,children:[V(Qi.Count,{children:Se(n)}),V(Qi.RatingIcons,{children:r?.map((e,i)=>V(lt,{ratingType:h,emojiType:u,fill:e},i))})]})}),reviewsText:V(Zv,{children:[V(sn,{value:o,locale:d})," ",s("reviews_on"),V(ln,{$isWide:!0})]})})})})})},Qv=()=>{const{t:e}=Qt(),{data:i,container:t}=pe(Bi);Hi({container:t});const{contentIndex:r,autoscroll:n,delay:o,fluidScrolling:a,hasShadow:l,emojiType:s,ratingType:d,solidShadow:c}=Nw(ri),{business:p}=i,{reviews:h,summary:u,reviewsNumber:m,writeReviewUrl:g,imageUrl:w,url:v,name:f,rating:x}=Ui({contentIndex:r,business:p}),{isNavigationExists:b}=(()=>{const[e,i]=oe(!0);return{onResize:e=>i(e),isNavigationExists:e}})(),{aggregatedImages:y,summaryImages:_}=Mn(h,!!u),{setFullScreenImageOptions:$,handleClosePopup:S,open:k,popupContent:C,initialIndex:N}=zn(y),T=jn(+o,10),R=a&&n,I=!h?.length,A=I&&!!x;return V(Mr,I&&!x?{className:"reputon-carousel-static-plate reputon-reviews-holder",children:V(Ar,{ratingType:d,emojiType:s,solidShadow:c,writeReviewUrl:g,imageUrl:w,url:v??"",name:f??""})}:A?{className:"reputon-carousel-static-plate reputon-reviews-holder",children:V(Jv,{writeReviewUrl:g,imageUrl:w,url:v,name:f,rating:x,ratingIcons:_e(x),reviewsNumber:m,options:{writeReviewEnabled:!0,contentIndex:r,ratingType:d,emojiType:s}})}:{className:"reputon-carousel-static-plate reputon-reviews-holder",children:[C&&V(Ua,{initialIndex:N,images:y?.map(({url:e})=>e),open:k,onClose:()=>S()}),V(nv,{className:"reputon-carousel-static-plate-container",children:V(ov,{className:"reputon-static-plate-container",children:[V(Rv,{className:"reputon-static-plate"}),b&&!R&&!l&&V(lv,{className:"reputon-bottom-navigation-btns",children:[V(Ov,{type:"button","aria-label":e("previous_slide"),className:"reputon-swiper-button-prev",children:V(qn,{})}),V(Bv,{type:"button","aria-label":e("next_slide"),className:"reputon-swiper-button-next",children:V(Kn,{})})]}),R?V(yv,{summary:u,reviews:h,reviewsNumber:m,speed:T,className:"reputon-carousel-holder",images:y,summaryImages:_}):V(Fv,{setFullScreenImageOptions:$,className:"reputon-carousel-holder",summaryImages:_,isNavigationExists:b})]})})]})},ef=He("div")`
    display: flex;
    align-items: ${e=>e.$fixedReviewsHeight?"stretch":"flex-start"};
    height: ${e=>e.$fixedReviewsHeight?"100%":"auto"};
    gap: 20px;
    width: 100%;
`,tf=He("div")`
    display: flex;
    position: relative;
    flex-grow: 1;
    gap: 12px;
    background: ${e=>e.theme.background};
    padding: 16px 12px;
    border-radius: 40px;
    align-items: center;
    line-height: 1.45;
    ${e=>{const i=e.theme.solidShadow;return e.$hasSolidShadow&&`\n            border-right: 4px solid ${i};\n            border-bottom: 4px solid ${i};\n        `}};
`,rf=He("div")`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`,nf=He("div")`
    min-width: 48px;
    width: 48px;
    height: 48px;
`,of=He("div")`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,af=He("div")`
    max-width: 100%;
    display: flex;
    gap: 8px;
    align-items: center;
`,lf=He("div")`
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,sf=He("div")`
    display: flex;
    gap: 4px;
    align-items: center;
`,df=He("div")`
    display: flex;
    gap: 2px;
    align-items: center;
`,cf=He("div")`
    display: flex;
    position: relative;
    filter: ${e=>"black"===e.theme.theme?"brightness(100)":"none"};
    min-width: 12px;
    height: fit-content;
    span {
        color: ${e=>e.theme.colorGoogleBadge};
        transition:
            opacity 0.2s ease,
            visibility 0.2s ease;
    }
`,pf=He("div")`
    display: flex;
    position: relative;
    min-width: ${e=>8*(e.$imagesPreviewCount-1)+56}px;
    min-height: 56px;
    gap: 1%;
    flex-shrink: 0;
    margin-left: auto;
`,hf=He("div")`
    min-width: max(50%, 54px);
    padding-top: calc(60 * max(50%, 56px) / 60);
    position: absolute;
    border-radius: 16px;
    border: 2px solid ${e=>e.theme.background};
    right: 0;
    top: 0;
    overflow: hidden;
    cursor: pointer;
    &:nth-child(1n) {
        z-index: calc(4 - var(--n));
        right: calc((var(--n) - 2) * 8px);
    }

    &:nth-child(1) {
        --n: 2;
        &::after {
            content: ${({$hideImageCount:e})=>e?`'+${e}'`:""};
            display: flex;
            position: absolute;
            justify-content: center;
            align-items: center;
            color: white;
            z-index: 2;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            font-size: 26px;
            font-weight: 700;
            background: rgba(0, 0, 0, 30%);
        }
    }
    &:nth-child(2) {
        --n: 3;
    }
`,uf=He("div",io)`
    font-size: 12px;
    font-weight: 400;
    overflow: hidden;
    position: relative;
    display: -webkit-box;
    text-align: left;
    color: ${e=>e.theme.widgets.grid.colorDescription};
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${({$openRows:e})=>e||4};
    ${({$isOpen:e,$openRows:i})=>e?"\n                  cursor: pointer;\n                  -webkit-line-clamp: unset;\n              ":`\n                  cursor: pointer;\n                  -webkit-line-clamp: ${i||4};\n              `};
`,mf=He("img")`
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`,gf=D({isOpen:!1,handleShowMore:()=>{},ref:{}}),wf=({hiddenContainer:e,imagesBlock:i,avatar:t,content:r,solidShadow:n,isAICard:o,fixedReviewsHeight:a,className:l,...s})=>{const[d,c]=oe(!1),p=se(null);return V(gf.Provider,{value:{isOpen:d??!1,handleShowMore:()=>{c(e=>!e)},ref:p},children:V(ef,{$fixedReviewsHeight:a??!1,className:Vi(l,"reputon-single-review","reputon-card"),...s,children:V(rf,{className:"reputon-container",children:V(tf,{$hasSolidShadow:n,className:"reputon-top-part",children:[t,r,i]})})})})};wf.Icon=function({className:e,children:i}){return i&&V(nf,{className:Vi(e,"reputon-image"),children:i})},wf.Content=function({className:e,text:i,header:t}){return V(of,{className:Vi(e,"reputon-content"),children:[t,i]})},wf.Header=function({className:e,name:i,icons:t}){return V(af,{className:Vi(e,"reputon-header"),children:[i,t]})},wf.Name=function({children:e,className:i}){return e&&V(lf,{className:Vi(i,"reputon-name"),children:e})},wf.Icons=function({className:e,rating:i,logo:t}){return V(sf,{className:Vi(e,"reputon-icons"),children:[i,t]})},wf.RatingIcons=function({className:e,children:i,title:t}){return i&&V(df,{title:t,className:Vi(e,"reputon-rating-stars"),children:i})},wf.Logo=function({className:e,children:i}){return i&&V(cf,{className:Vi(e,"reputon-review-logo"),children:i})},wf.TextContainer=function({children:e,className:i,onClick:t,openRows:r=2}){const{isOpen:n,ref:o,handleShowMore:a}=pe(gf);return V(uf,{$openRows:r,$isOpen:n,ref:o,className:Vi(i,"reputon-text"),onClick:()=>{t?.(),a()},children:e})},wf.Images=function({images:e,className:i,callbackAfterImageClick:t,isAi:r}){const{t:n}=Qt();return e&&e.length>0&&V(pf,{className:Vi(i,"reputon-review-images"),$imagesPreviewCount:e?.slice(0,2).length,children:e?.slice(0,2).map((i,o)=>V(hf,{className:"reputon-small-images-container",onClick:()=>t?.(i,r),$hideImageCount:e.length>2?e.length-1:void 0,tabIndex:0,role:"button","aria-label":n("review_image"),onKeyPress:()=>{t?.(i,r)},children:V(mf,{src:i,alt:"review image",loading:"lazy",className:"reputon-small-images-media"})},o))})};const vf=He(Ds)`
    width: 12px;
    height: 12px;
`,ff=He(lt)`
    width: 12px;
    height: 12px;
`,xf=He(wf.RatingIcons)`
    color: ${({theme:e})=>e.widgets.dual_row_carousel.colorReviewStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}
`,bf=He(wf.Name)`
    color: ${({theme:e})=>e.widgets.dual_row_carousel.colorName};
`,yf=He(wf.TextContainer)`
    color: ${e=>e.theme.widgets.dual_row_carousel.colorDescription};
`,_f=({author:e,rating:i,options:t,text:r,images:n,onImageClick:o})=>{const{t:a}=Qt(),{name:l,url:s,profilePhotoUrl:d}=e,{fixedReviewsHeight:c,hasShadow:p,photosType:h,ratingType:u,emojiType:m}=t,g=_e(i),w=i?V(xf,{$ratingType:u,children:g?.map((e,i)=>V(ff,{ratingType:u,emojiType:m,fill:e},i))}):null;return V(wf,{fixedReviewsHeight:c,solidShadow:p,avatar:V(wf.Icon,{children:V(dt,{url:s,label:`${l} ${a("review")}`,children:V(ir,{src:d,alt:`${l} ${a("image")}`})})}),content:V(wf.Content,{header:V(wf.Header,{name:V(bf,{children:l}),icons:V(wf.Icons,{rating:w,logo:V(wf.Logo,{children:V(vf,{})})})}),text:V(yf,{children:[r," "]})}),imagesBlock:"small"===h?V(wf.Images,{images:n?.map(({thumbnailUrl:e})=>e),callbackAfterImageClick:o}):null})},$f=He("div")`
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    background: linear-gradient(
        90deg,
        ${e=>e.theme.summary.colorLogoGradient1},
        ${e=>e.theme.summary.colorLogoGradient2}
    );

    &:before {
        content: 'AI';
        color: ${e=>e.theme.summary.colorLogoText};
        position: absolute;
        white-space: nowrap;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-size: 20px;
        font-weight: 500;
    }
`,Sf=He("p")`
    margin-bottom: 6px;
    color: ${e=>e.theme.summary.colorDescription};

    &:last-of-type {
        margin-bottom: 0;
    }
`,kf=He(xl)`
    margin-right: 6px;
    display: inline-block;
`,Cf=He(wf.Name)`
    color: ${e=>e.theme.summary.colorName};
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    background-color: ${e=>e.theme.summary.colorBadge};
    padding: 2px 8px;
    margin-bottom: 2px;
    border-radius: 99px;
    width: fit-content;
    flex-shrink: 0;
    @container wrapper (max-width:${Xe}px) {
        font-size: 9px;
        line-height: 12px;
    }
`,Nf=He(wf.RatingIcons)`
    color: ${e=>e.theme.summary.colorTime};
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    @container wrapper (max-width:${Xe}px) {
        font-size: 9px;
        line-height: 12px;
    }
`,Tf=He(wf.Icons)`
    min-width: 0;
`,Rf=He(wf.TextContainer)`
    color: ${e=>e.theme.widgets.dual_row_carousel.colorDescription};
`,If=He(Da)`
    width: 12px;
    height: 12px;
    @container wrapper (max-width:${Xe}px) {
        width: 10px;
        height: 10px;
    }
`,Af=({options:e,items:i,images:t,onImageClick:r,reviewsNumber:n})=>{const{t:o,locale:a}=Qt(),{fixedReviewsHeight:l,hasShadow:s,reviewPhotosType:d}=e,c=`${o("based_on")} ${sn({value:n,locale:a})} ${o("reviews")}`;return V(wf,{fixedReviewsHeight:l,solidShadow:s,avatar:V(wf.Icon,{children:V($f,{})}),content:V(wf.Content,{header:V(wf.Header,{name:V(Cf,{children:o("ai_summary")}),icons:V(Tf,{rating:V(Nf,{title:c,children:c}),logo:V(wf.Logo,{children:V(If,{})})})}),text:V(Rf,{children:i?.map((e,i)=>V(Sf,{children:[V(kf,{}),`${e}`]},i))})}),imagesBlock:"small"===d?V(wf.Images,{images:t?.map(({thumbnailUrl:e})=>e),callbackAfterImageClick:(e,i)=>r?.(e,i),isAi:!0}):null})},Lf=Qi.Name,jf=He(ar)`
    align-self: stretch;
    @container wrapper (max-width:${Je}px) {
        margin-left: 0px;
        margin-right: 0px;
        flex-direction: column;
        align-items: normal !important;
    }
`,Mf=He(ir)`
    border-radius: 100px;
`,zf=He(Qi.ReviewsText)`
    color: ${e=>e.theme.widgets.dual_row_carousel.colorReviewsCount};
`,Pf=He(({isEditable:e,content:i,...t})=>V(Lf,{...t,isEditable:e,content:i}))`
    color: ${e=>e.theme.widgets.dual_row_carousel.colorSellerName};
    & a:hover {
        text-decoration: underline;
    }
`,Ef=He(Qi.Rating)`
    color: ${e=>e.theme.widgets.dual_row_carousel.colorSellerStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}

    ${({$ratingType:e,theme:i})=>"emoji"===e&&`\n            color: ${i.widgets.dual_row_carousel.colorSellerName};\n        `}
`,Of=He(Wg)`
    color: ${e=>e.theme.widgets.dual_row_carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.dual_row_carousel.backgroundLeaveReview};
    align-self: center;
    @container wrapper (max-width:${Je}px) {
        width: 100%;
        text-align: center;
    }
`,Bf=He(dt)`
    @container wrapper (max-width:${Je}px) {
        width: 100%;
    }
`,Uf=({imageUrl:e,url:i,name:t,ratingIcons:r,rating:n,reviewsNumber:o,writeReviewUrl:a,isShowLeaveReviewButton:l,isEditableBusinessName:s,options:d})=>{const{t:c,locale:p}=Qt(),{ratingType:h,emojiType:u,solidShadow:m}=d;return V(jf,{solidShadow:m,actionButton:l&&a?V(Bf,{url:a,children:V(Of,{className:"reputon-bt reputon-link reputon-leave-review editable",content:c("write_review")})}):null,contentHeader:V(Qi,{children:V(Qi.Container,{icon:e?V(dt,{url:i,label:`${t} ${c("reviews")}`,children:V(Qi.Icon,{children:V(Mf,{src:e,alt:c("business_image")})})}):void 0,content:V(Qi.Content,{name:V(dt,{inherit:!0,url:i,label:`${t} ${c("reviews")}`,children:V(Pf,{isEditable:s,content:t,children:t})}),rating:V(dt,{url:i,label:`${t} ${c("reviews")}`,children:V(Ef,{$ratingType:h,children:[V(Qi.Count,{children:Se(n)}),V(Qi.RatingIcons,{children:r?.map((e,i)=>V(lt,{ratingType:h,emojiType:u,fill:e},i))})]})}),reviewsText:V(zf,{children:[V(sn,{value:o,locale:p})," ",c("reviews_on"),V(ln,{$isWide:!0})]})})})})})},Hf=({LayoutComponent:e,button:i,topSwiper:t,bottomSwiper:r,data:{url:n,name:o,imageUrl:a,rating:l,reviewsNumber:s,writeReviewUrl:d},options:{writeReviewEnabled:c,contentIndex:p,ratingType:h,emojiType:u,solidShadow:m,showRating:g,showButton:w}})=>{const{t:v}=Qt();return V(e,{header:g&&V(Uf,{writeReviewUrl:d,imageUrl:a,url:n??"",name:o,rating:l,ratingIcons:_e(l),reviewsNumber:s,isShowLeaveReviewButton:c&&!!d,isEditableBusinessName:"all"===p,options:{ratingType:h,emojiType:u,solidShadow:m}}),topSwiper:t,bottomSwiper:r,button:w&&V(dt,{className:"reputon-buttons-holder",url:d,label:v("write_review"),style:{alignSelf:"center"},children:i})})},Df=He(Mr,io)`
    padding-left: 0px;
    padding-right: 0px;
    padding-block: 32px;
`,Ff=He("div",io)`
    display: flex;
    flex-direction: column;
    gap: 12px;
`,Vf=He(Wg)`
    margin-top: 8px;
    align-self: center;
    color: ${e=>e.theme.widgets.dual_row_carousel.colorLeaveReview};
    background: ${e=>e.theme.background};
`,Wf=He("div",io)`
    display: flex;
    height: auto;
    transition: 0.2s;
    flex-shrink: 0;
    width: 400px;
    @container wrapper (max-width:${Xe}px) {
        width: 320px;
    }
`,Gf=({header:e,topSwiper:i,bottomSwiper:t,button:r})=>V(Df,{className:"reputon-reviews-holder reputon-dual-row-carousel",children:V(Ff,{className:"reputon-dual-row-carousel-container",children:[e,i,t,r]})}),Zf=He(Mr,io)`
    padding-left: 0px;
    padding-right: 0px;
`,qf=He("div",io)`
    display: flex;
    flex-direction: column;
    gap: 20px;
`,Kf=He(Wg)`
    align-self: center;
    color: ${e=>e.theme.widgets.dual_row_carousel.colorLeaveReview};
    background: ${e=>e.theme.background};
`;He("div",io)`
    display: flex;
    height: auto;
    transition: 0.2s;
    flex-shrink: 0;
    width: 350px;
`;const Xf=({header:e,topSwiper:i,bottomSwiper:t,button:r})=>V(Zf,{className:"reputon-reviews-holder reputon-dual-row-carousel",children:V(qf,{className:"reputon-dual-row-carousel-container",children:[e,i,t,r]})});He("div")`
    display: flex;
    gap: 20px;
    margin-right: 20px;
`;const Yf=He("div")`
    display: flex;
    height: auto;
    transition: 0.2s;
    flex-shrink: 0;
    width: 350px;
`,Jf=He(Ds)`
    width: 17px;
    height: 17px;
`,Qf=He(fl.RatingIcons)`
    color: ${({theme:e})=>e.widgets.dual_row_carousel.colorReviewStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}
`,ex=He(fl.Name)`
    color: ${({theme:e})=>e.widgets.dual_row_carousel.colorName};
`,ix=He(fl.TextContainer)`
    color: ${e=>e.theme.widgets.dual_row_carousel.colorDescription};
`,tx=He(fl.ShowMoreBtn)`
    color: ${e=>e.theme.widgets.dual_row_carousel.colorShowMore};
`,rx=He(fl.Time)`
    color: ${e=>e.theme.widgets.dual_row_carousel.colorTime};
`,nx=He(Gs)`
    margin-left: 7px;
`,ox=He(qa)`
    margin-top: 15px;
`,ax=({author:e,rating:i,verified:t,options:r,images:n,text:o,date:a,onImageClick:l})=>{const{t:s}=Qt(),{name:d,url:c,profilePhotoUrl:p}=e,{fixedReviewsHeight:h,hasShadow:u,photosType:m,ratingType:g,emojiType:w}=r,v=_e(i),f=i?V(Qf,{$ratingType:g,children:[v?.map((e,i)=>V(lt,{ratingType:g,emojiType:w,fill:e},i)),t&&V(nx,{verified:s("verified")})]}):null;return V(fl,{fixedReviewsHeight:h,solidShadow:u,header:V(fl.Header,{logoApp:V(fl.Logo,{children:V(Jf,{})}),info:V(fl.InfoTop,{icon:V(fl.Icon,{children:V(dt,{url:c,label:`${d} ${s("review")}`,children:V(ir,{src:p,alt:`${d} ${s("image")}`})})}),attributes:V(fl.Attributes,{name:V(ex,{children:V(dt,{inherit:!0,url:c,label:`${d} ${s("review")}`,children:d})}),time:V(rx,{children:a})})})}),rating:f,hiddenContainer:V(fl.HiddenContainer,{textContainer:V(ix,{children:o}),imagesContainer:"small"===m?V(fl.Images,{images:n?.map(({thumbnailUrl:e})=>e),callbackAfterImageClick:l}):null}),mediumImagesBlock:"medium"===m?V(fl.MediumImages,{callbackAfterImageClick:l,images:n?.map(({thumbnailUrl:e})=>e)}):null,actionButton:V(tx,{children:e=>V("span",e?{children:s("show_less")}:{children:s("show_more")})}),imagesBlock:"large"===m?V(ox,{callbackAfterImageClick:l,images:n?.map(({thumbnailUrl:e})=>e)}):null,info:V(fl.Info,{style:{display:"none"},icon:V(fl.Icon,{children:V(dt,{url:c,label:`${d} ${s("review")}`,children:V(ir,{src:p,alt:`${d} ${s("image")}`})})}),attributes:V(fl.Attributes,{name:V(ex,{children:V(dt,{url:c,label:`${d} ${s("review")}`,children:d})}),time:V(rx,{children:a})})})})},lx=He("div",io)`
    display: flex;
    width: 100%;
    overflow: hidden;
    mask-image: ${({$hasShadow:e})=>e&&"linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 5%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0.2) 95%, rgba(0, 0, 0, 0) 100%)"};

    @container wrapper (max-width:${Ye}px) {
        mask-image: ${({$hasShadow:e})=>e&&"linear-gradient(90deg,\n          rgba(0, 0, 0, 0) 0%,\n          rgba(0, 0, 0, 0.1) 1%,\n          rgba(0, 0, 0, 1) 6%,\n          rgba(0, 0, 0, 1) 94%,\n          rgba(0, 0, 0, 0.1) 99%,\n          rgba(0, 0, 0, 0) 100%\n        );"};
    }
`,sx=Ue`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`,dx=He("div",io)`
    display: flex;
    animation: ${sx} ${e=>e.$animationDuration}s linear infinite;
`,cx=He("div",io)`
    display: flex;
    gap: ${e=>e.$gap}px;
    margin-right: ${e=>e.$gap}px;
`,px=({className:e,speed:i,reviews:t,summary:r,summaryImages:n,images:o,reviewsNumber:a,gap:l=20,renderCard:s,renderSummary:d,SlideComponent:c})=>{const{data:p}=pe(Bi),{fixedReviewsHeight:h,reviewPhotosType:u,hasShadow:m,ratingType:g,emojiType:w,solidShadow:v}=Nw(di),{verified:f}=p,{sliderRef:x,startAnimation:b,stopAnimation:y,handleMouseEnter:_,handleMouseLeave:$,handleTouchMobileSwiper:S}=sd(),{setFullScreenImageOptions:k,handleClosePopup:C,open:N,popupContent:T,initialIndex:R}=zn(o,()=>y());return ae(()=>(window.addEventListener("touchstart",S),()=>{window.removeEventListener("touchstart",S)}),[]),V(lx,{className:e,$hasShadow:m,children:[T&&V(Ua,{initialIndex:R,images:o?.map(e=>e.url),open:N,onClose:()=>C(b)}),V(dx,{ref:x,onMouseEnter:_,onMouseLeave:$,className:"reputon-slider",$animationDuration:i*t.length/2,children:Array(2).fill(0).map((e,i)=>V(cx,{$gap:l,children:[r&&V(c,{className:"reputon-slide",children:d({onImageClick:k,options:{fixedReviewsHeight:h,hasShadow:v,reviewPhotosType:u},images:n,reviewsNumber:a,items:r?.items})}),t?.map(e=>{const{authorUrl:i,rating:t,text:r,profilePhotoUrl:n,authorName:o,relativeTimeDescription:a,images:l}=e;return V(c,{className:"reputon-slide",children:s({onImageClick:k,options:{fixedReviewsHeight:h,hasShadow:v,emojiType:w,photosType:u,ratingType:g},author:{url:i,name:o,profilePhotoUrl:n},rating:t,text:r,images:l,date:a,verified:f})},e.id)})]},i))})]})},hx=()=>{const{t:e}=Qt(),{data:i,container:t}=pe(Bi);Hi({container:t});const r=Nw(di),{writeReviewEnabled:n,contentIndex:o,speed:a,variant:l,ratingType:s,emojiType:d,solidShadow:c,showRating:p}=r,{business:h}=i,u=Ui({business:h,contentIndex:o}),{writeReviewUrl:m,reviews:g,summary:w,url:v,imageUrl:f,name:x,reviewsNumber:y,rating:_}=u,{aggregatedImages:$,summaryImages:S}=Mn(g,!!w),{topReviews:k,bottomReviews:C}=(e=>{if(e.length<=3)return{topReviews:Array(4).fill(e).flat(1),bottomReviews:Array(4).fill(e).flat(1)};const i=e.filter((e,i)=>i%2==0),t=e.filter((e,i)=>i%2!=0);return{topReviews:i.length>4?i:Array(4).fill(i).flat(1),bottomReviews:t.length>4?t:Array(4).fill(t).flat(1)}})(g),N=jn(+a,10),T=n&&!!m&&!p,R={[Fm]:V(Hf,{LayoutComponent:Gf,topSwiper:V(px,{summary:w??void 0,summaryImages:S,reviews:k,speed:1.5*N,className:"reputon-carousel-holder",images:$,reviewsNumber:y,gap:12,SlideComponent:Wf,renderCard:e=>V(_f,{...e}),renderSummary:e=>V(Af,{...e})}),bottomSwiper:V(px,{reviews:C,speed:N,className:"reputon-carousel-holder",images:$,reviewsNumber:y,gap:12,SlideComponent:Wf,renderCard:e=>V(_f,{...e}),renderSummary:e=>V(Af,{...e})}),button:V(Vf,{className:"reputon-bt reputon-link reputon-leave-review editable",content:e("write_review")}),data:u,options:{...r,showButton:T}}),[Dm]:V(Hf,{LayoutComponent:Xf,topSwiper:V(px,{summary:w??void 0,summaryImages:S,reviews:k,speed:1.5*N,className:"reputon-carousel-holder",images:$,reviewsNumber:y,SlideComponent:Yf,renderCard:e=>V(ax,{...e}),renderSummary:e=>V(Il,{...e})}),bottomSwiper:V(px,{reviews:C,speed:N,className:"reputon-carousel-holder",images:$,reviewsNumber:y,SlideComponent:Yf,renderCard:e=>V(ax,{...e}),renderSummary:e=>V(Il,{...e})}),button:V(Kf,{className:"reputon-bt reputon-link reputon-leave-review editable",content:e("write_review")}),data:u,options:{...r,showButton:T}})},I=!g?.length,A=I&&!!_;return I&&!_?V(Mr,{className:"reputon-reviews-holder reputon-dual-row-carousel",children:V(Ar,{ratingType:s,emojiType:d,writeReviewUrl:m,imageUrl:f,url:v,name:x,solidShadow:c})}):A?V(Mr,{className:"reputon-reviews-holder reputon-dual-row-carousel",children:V(Uf,{writeReviewUrl:m,imageUrl:f,url:v??"",name:x,rating:_,ratingIcons:_e(_),reviewsNumber:y,isShowLeaveReviewButton:n&&!!m,isEditableBusinessName:"all"===o,options:{ratingType:s,emojiType:d,solidShadow:c}})}):V(b,{children:R[l]})},ux=e=>{const i=navigator.language,[t,r]=e.split(":").map(Number),n=new Date;return n.setHours(t),n.setMinutes(r),new Intl.DateTimeFormat(i,{hour:"numeric",minute:"numeric",hour12:i.includes("en-US")}).format(n)},mx=(e,i)=>e?.closed?V("span",{className:"reputon-work-time",children:i("day_off")||"Closed"}):e?.open24h?V("span",{className:"reputon-work-time",children:i("always_on")||"Open 24 hours"}):e?.intervals&&e?.intervals.length>0?e.intervals.map((e,i)=>V("div",{className:"reputon-work-time",children:[ux(e.start)," - ",ux(e.end)]},i)):void 0,gx=({className:e})=>V("svg",{className:e,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:V("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.27748 4.27958C2.64745 3.90681 3.24729 3.90681 3.61726 4.27958L8 8.69552L12.3827 4.27958C12.7527 3.90681 13.3526 3.90681 13.7225 4.27958C14.0925 4.65235 14.0925 5.25674 13.7225 5.62951L11.1962 8.17497L8.66989 10.7204C8.29992 11.0932 7.70008 11.0932 7.33011 10.7204L2.27748 5.62951C1.90751 5.25674 1.90751 4.65235 2.27748 4.27958Z",fill:"currentColor"})}),wx=He("div")`
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 100%;
`,vx=He("div")`
    display: flex;
    font-size: 13px;
    gap: 7px;
    cursor: pointer;
`,fx=He(({className:e})=>V("svg",{className:e,width:"14",height:"15",viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:V("g",{"clip-path":"url(#clip0_241_6421)",children:V("path",{d:"M7.99301 1.33331C4.31301 1.33331 1.33301 4.31998 1.33301 7.99998C1.33301 11.68 4.31301 14.6666 7.99301 14.6666C11.6797 14.6666 14.6663 11.68 14.6663 7.99998C14.6663 4.31998 11.6797 1.33331 7.99301 1.33331ZM7.99967 13.3333C5.05301 13.3333 2.66634 10.9466 2.66634 7.99998C2.66634 5.05331 5.05301 2.66665 7.99967 2.66665C10.9463 2.66665 13.333 5.05331 13.333 7.99998C13.333 10.9466 10.9463 13.3333 7.99967 13.3333ZM8.33301 4.66665H7.33301V8.66665L10.833 10.7666L11.333 9.94665L8.33301 8.16665V4.66665Z",fill:"currentColor"})})}))`
    width: 16px;
    height: 16px;
`,xx=He("div")`
    color: ${e=>e.theme.widgets.locations.colorDescription};
`,bx=He("ul")`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0px 20px 0px 5px;
    margin-top: 3px;
    margin-left: 23px;
    @container wrapper (max-width:${Ye}px) {
        margin-left: 31px;
    }
`,yx=He("div")`
    display: flex;
    gap: 7px;
    color: ${e=>e.theme.widgets.locations.colorDescription};
`,_x=He("li")`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 12px;
    line-height: 20px;
    color: ${e=>e.theme.widgets.locations.colorDescription};
`,$x=He("span")`
    font-weight: ${({$isToday:e})=>e&&600};
`,Sx=He(gx)`
    transform: rotate(${({$isOpen:e})=>e&&180}deg);
`,kx=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],Cx=({isShow:e,openHours:i,open:t,onToggle:r})=>{const{t:n}=Qt(),o=function(){const e=(new Date).getDay();return 0===e?6:e-1}(),a=n(kx[o]),l=i?Object.values(i):[],s=l[o];return e?V(wx,{className:"reputon-item-hours-container",children:[V(vx,{role:"button",tabIndex:0,"aria-label":"collapse hours",onKeyPress:()=>r(t),onClick:()=>r(t),className:"reputon-item-content",children:[V(fx,{className:"reputon-icon"}),V(yx,{className:"reputon-text",children:V("div",{className:"reputon-current-day-name",children:[a,":"]})}),V(xx,{className:"reputon-current-work-time",children:mx(s,e=>n(e))}),V(Sx,{$isOpen:t,className:"reputon-icon"})]}),t&&V(bx,{className:"reputon-hide-list",children:l.map((e,i)=>V(_x,{className:"reputon-hide-item",children:[V($x,{$isToday:i===o,className:"reputon-hide-item-name",children:n(kx[i])}),V("div",{className:"reputon-hide-item-text",children:mx(e,e=>n(e))})]},i))})]}):null},Nx=He("div")`
    background: ${e=>e.theme.widgets.locations.background};
    border-radius: 16px;
    padding: ${({$isWidePaddings:e})=>e?"24px":"20px"};
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 100%;
    ${e=>e.$hasSolidShadow&&`\n            border-right: 8px solid ${e.theme.solidShadow};\n            border-bottom: 8px solid ${e.theme.solidShadow};\n        `};
`,Tx=He("div")`
    background: ${({theme:e})=>e.widgets.locations.background};
    border-radius: 16px;
    padding: 24px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
    ${e=>e.$hasSolidShadow&&`\n            border-right: 8px solid ${e.theme.solidShadow};\n            border-bottom: 8px solid ${e.theme.solidShadow};\n        `};
    @container wrapper (max-width:${900}px) {
        display: flex;
        flex-direction: column;
    }
`,Rx=He("div")`
    background: ${({theme:e})=>e.widgets.locations.background};
    border-radius: 16px;
    padding: 20px;
    height: 100%;
    display: flex;
    gap: 40px;
    flex-direction: row;
    align-items: normal;
    ${e=>e.$hasSolidShadow&&`\n            border-right: 8px solid ${e.theme.solidShadow};\n            border-bottom: 8px solid ${e.theme.solidShadow};\n        `};
    @container wrapper (max-width:${900}px and min-width: ${600}px) {
        gap: 24px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    @container wrapper (max-width:${600}px) {
        display: flex;
        flex-direction: column;
    }
`,Ix=({isOneBusiness:e,showMap:i,children:t,className:r,isLargePhotos:n,solidShadow:o})=>{const a=(({isOneBusiness:e,isLargePhotos:i,showMap:t})=>e&&i?t?"map":"photo":"general")({isOneBusiness:e,isLargePhotos:n,showMap:i});return{map:V(Tx,{$hasSolidShadow:o,className:r,children:t}),photo:V(Rx,{$hasSolidShadow:o,className:r,children:t}),general:V(Nx,{$hasSolidShadow:o,$isWidePaddings:n&&i,className:r,children:t})}[a]},Ax=He("div")`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    min-width: 0;
`,Lx=He("div")`
    color: ${e=>e.theme.widgets.locations.colorName};
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 20px;
    line-height: 27px;
    font-weight: 700;
`,jx=He("div")`
    color: ${e=>e.theme.widgets.locations.colorRatingText};
    display: flex;
    line-height: 21px;
    font-size: 14px;
    align-items: flex-start;
    gap: 8px;
    align-items: center;
`,Mx=He("div")``,zx=He("div")``,Px=He("div")`
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: ${e=>e.theme.widgets.locations.colorIcons};
    line-height: 16px;
    font-size: 14px;
    @container wrapper (max-width:${Ye}px) {
        gap: 12px;
    }
`,Ex=He("div")`
    display: flex;
    align-items: flex-start;
    gap: 8px;
`,Ox=He("div")`
    color: ${e=>e.theme.widgets.locations.colorDescription};
`,Bx="\n    width: 16px;\n    height: 16px;\n",Ux=He(({className:e})=>V("svg",{className:e,width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:V("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6 0.332031C7.5913 0.332031 9.11742 0.964172 10.2426 2.08939C11.3679 3.21461 12 4.74073 12 6.33203C12 8.38136 10.8827 10.0587 9.70533 11.262C9.11712 11.8567 8.47528 12.3959 7.788 12.8727L7.504 13.066L7.37067 13.1547L7.11933 13.3147L6.89533 13.4514L6.618 13.6127C6.42976 13.7201 6.21675 13.7767 6 13.7767C5.78325 13.7767 5.57024 13.7201 5.382 13.6127L5.10467 13.4514L4.758 13.238L4.63 13.1547L4.35667 12.9727C3.61522 12.471 2.9246 11.8981 2.29467 11.262C1.11733 10.058 0 8.38136 0 6.33203C0 4.74073 0.632141 3.21461 1.75736 2.08939C2.88258 0.964172 4.4087 0.332031 6 0.332031ZM6 1.66536C4.76232 1.66536 3.57534 2.15703 2.70017 3.0322C1.825 3.90737 1.33333 5.09435 1.33333 6.33203C1.33333 7.88003 2.18133 9.2387 3.24733 10.3294C3.70569 10.7934 4.20111 11.2192 4.72867 11.6027L5.034 11.82C5.13267 11.8889 5.22756 11.9529 5.31867 12.012L5.57867 12.1787L5.80733 12.318L6 12.4307L6.30333 12.2514L6.548 12.098C6.67822 12.0154 6.81756 11.9227 6.966 11.82L7.27133 11.6027C7.79889 11.2192 8.29431 10.7934 8.75267 10.3294C9.81867 9.23936 10.6667 7.88003 10.6667 6.33203C10.6667 5.09435 10.175 3.90737 9.29983 3.0322C8.42466 2.15703 7.23768 1.66536 6 1.66536ZM6 3.66536C6.70724 3.66536 7.38552 3.94632 7.88562 4.44641C8.38572 4.94651 8.66667 5.62479 8.66667 6.33203C8.66667 7.03928 8.38572 7.71755 7.88562 8.21765C7.38552 8.71775 6.70724 8.9987 6 8.9987C5.29276 8.9987 4.61448 8.71775 4.11438 8.21765C3.61428 7.71755 3.33333 7.03928 3.33333 6.33203C3.33333 5.62479 3.61428 4.94651 4.11438 4.44641C4.61448 3.94632 5.29276 3.66536 6 3.66536ZM6 4.9987C5.64638 4.9987 5.30724 5.13917 5.05719 5.38922C4.80714 5.63927 4.66667 5.97841 4.66667 6.33203C4.66667 6.68565 4.80714 7.02479 5.05719 7.27484C5.30724 7.52489 5.64638 7.66537 6 7.66537C6.35362 7.66537 6.69276 7.52489 6.94281 7.27484C7.19286 7.02479 7.33333 6.68565 7.33333 6.33203C7.33333 5.97841 7.19286 5.63927 6.94281 5.38922C6.69276 5.13917 6.35362 4.9987 6 4.9987Z",fill:"currentColor"})}))`
    ${Bx}
`,Hx=He(({className:e})=>V("svg",{className:e,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:V("path",{d:"M4.33366 1C4.66699 1 6.00033 4 6.00033 4.33333C6.00033 5 5.00033 5.66667 4.66699 6.33333C4.33366 7 5.00033 7.66667 5.66699 8.33333C5.92699 8.59333 7.00033 9.66667 7.66699 9.33333C8.33366 9 9.00033 8 9.66699 8C10.0003 8 13.0003 9.33333 13.0003 9.66667C13.0003 11 12.0003 12 11.0003 12.3333C10.0003 12.6667 9.33366 12.6667 8.00033 12.3333C6.66699 12 5.66699 11.6667 4.00033 10C2.33366 8.33333 2.00033 7.33333 1.66699 6C1.33366 4.66667 1.33366 4 1.66699 3C2.00033 2 3.00033 1 4.33366 1Z",stroke:"currentColor","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"})}))`
    fill: none;
    ${Bx}
`,Dx=Ue`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Fx=He("div")`
    animation: ${e=>e.$animation?`\n                  ${Dx} .5s linear forwards\n              `:"none"};
`,Vx=He("div")`
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 294px;
    flex-shrink: 0;
    border-radius: 16px;
    overflow: hidden;
`,Wx=He("div")`
    padding-top: max(200px, 60%);
    position: relative;
    height: 0;
    flex-shrink: 0;
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    ${({$isOneBusiness:e})=>e&&"width: 420px; padding-top: 280px;"}
    @container wrapper (max-width:${Ye}px) {
        width: 100%;
        padding-top: 221px;
    }
`,Gx=He("div")`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
`,Zx=He("img")`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`,qx=He("div")`
    display: flex;
    width: 100%;
`,Kx=He("img")`
    display: block;
    margin-right: 12px;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    object-fit: cover;
`,Xx=He("div")`
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 0;
`,Yx=({business:e,options:{isOneBusiness:i,photoType:t,showMap:r,language:n,solidShadow:o},actionReviewsButton:a,ratingIcons:l,reviewsListElement:s,collapseHoursElement:d})=>{const{t:c,locale:p}=Qt(),{name:h,rating:u,reviewsNumber:m,address:g,cid:w,phoneNumber:v,url:f,imageUrl:x}=e||{},b=w?`cid=${w}`:`q=${encodeURIComponent(g)}`;return V(Fx,{$animation:!0,className:"reputon-location-container",children:V(Ix,{className:"reputon-location-content",solidShadow:o,isLargePhotos:"large"===t,showMap:r,isOneBusiness:i,children:["large"===t&&(r?V(Vx,{children:V(Gx,{children:V("iframe",{width:"100%",height:"100%",style:{border:0},src:`https://maps.google.com/maps?${b}&hl=${n}&z=15&output=embed`})})}):x&&V(Wx,{$isOneBusiness:i,children:V(Zx,{className:"reputon-location-image",width:"100%",src:x,alt:c("business_image"),loading:"lazy"})})),V(Ax,{className:"reputon-location-content-container",children:[V(qx,{className:"reputon-location-header",children:["small"===t&&x&&V(Kx,{className:"reputon-location-header-image",src:x,alt:c("business_image"),width:"100%",loading:"lazy"}),V(Xx,{className:"reputon-location-header-content",children:[V(dt,{url:f,label:h,style:{width:"100%"},children:V(Lx,{title:h,className:"reputon-location-name",children:h})}),V(jx,{className:"reputon-location-rating",children:[!!u&&V(Mx,{className:"reputon-count-number",children:u.toFixed(1)}),l,m?V(zx,{className:"reputon-reviews-count",children:V(sn,{value:m,locale:p})}):c("no_reviews_yet"),a]})]})]}),s,V(Px,{className:"reputon-location-list",children:[v&&V(Ex,{className:"reputon-item-phone",children:V(dt,{url:`tel:${v}`,label:v,inherit:!0,children:[V(Hx,{className:"reputon-icon"}),V(Ox,{className:"reputon-text",children:v})]})}),g&&V(Ex,{className:"reputon-item-address",children:V(dt,{style:{width:"100%"},inherit:!0,url:f,label:h,children:[V(Ux,{className:"reputon-icon"}),V(Ox,{className:"reputon-text",children:g})]})}),d&&V(Ex,{className:"reputon-item-hours",children:d})]})]})]})})},Jx=He("div")`
    color: ${e=>e.$isNoReviews?"#9F9F9F":e.theme.widgets.locations.colorReviewStars};
    background: transparent;
    display: flex;
    gap: 4px;
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}
`,Qx=He(lt)`
    width: 16px;
    height: 16px;
`,eb=({rating:e,icons:i,ratingType:t,emojiType:r,writeReviewUrl:n,hoveredIcons:o,onEnterIcon:a,onLeaveIcon:l})=>{const{t:s}=Qt();return e?V(Jx,{$ratingType:t,className:"reputon-location-stars-container",children:i?.map((e,i)=>V(Qx,{ratingType:t,emojiType:r,fill:e},i))}):V(dt,{url:n,label:s("write_review"),children:V(Jx,{className:"reputon-location-stars-container",children:o?.map((e,i)=>V(Jx,{$isNoReviews:!0,onMouseEnter:a(i),onMouseLeave:l,$ratingType:t,children:V(Qx,{fill:e,ratingType:t,emojiType:r})},i))})})},ib=He("button")`
    display: flex;
    gap: 4px;
    align-items: center;
    margin-left: 4px;
    cursor: pointer;
    min-width: 0;
    background: none;
`,tb=He("p")`
    color: ${({theme:e})=>e.widgets.locations.colorReviewsButton};
    line-height: 16px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
`,rb=He(gx)`
    flex-shrink: 0;
    color: ${({theme:e})=>e.widgets.locations.colorReviewsButton};
    transform: rotate(${({$isOpen:e})=>e&&180}deg);
`,nb=({isOpen:e,onClick:i,isClosing:t,isShow:r})=>{const{t:n}=Qt(),o=!e||t?n("show_reviews")||"Show reviews":n("hide_reviews")||"Hide reviews";return r?V(ib,{className:"reputon-reviews-button","aria-label":o,$isOpen:e,onClick:i,type:"button",children:[V(tb,{className:"reputon-reviews-button-text",title:o,children:o}),V(rb,{className:"reputon-reviews-button-icon",$isOpen:e})]}):null},ob=Ue`
    0% {
        max-height: 0;
    }
    100% {
        max-height: 240px;
    }
`,ab=Ue`
    0% {
        max-height: 240px;
        margin-bottom: 0;
    }
    100% {
        max-height: 0px;
        margin-bottom: -24px;
    }
`,lb=He("div")`
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: auto;
    animation: ${ob} ${200}ms ease forwards;
    ${({$isClosing:e})=>e&&`\n            animation: ${ab} 200ms ease forwards;\n        `};
    .reputon-top-part {
        padding: 4px 8px 4px 0;
        background: transparent;
        gap: 8px;
    }

    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 99px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 99px;
    }
    ${e=>`\n           &::-webkit-scrollbar-thumb {\n                background: ${e.theme.widgets.locations.scrollThumb};\n            }\n            &::-webkit-scrollbar-track {\n                background: ${e.theme.widgets.locations.scrollTrack};\n            } \n        `}
`,sb=He("div")`
    height: 1px;
    width: 100%;
    background: ${({theme:e})=>e.widgets.locations.dividerColor};
    flex-shrink: 0;
    display: block !important;
`,db=He(Ds)`
    width: 16px;
    height: 16px;
`,cb=He(fl.Icon)`
    width: 24px;
    height: 24px;
    min-width: 24px;
`,pb=He(fl.InfoTop)`
    gap: 4px;
`,hb=He(fl.Name)`
    font-size: 11px;
    line-height: 15px;
    color: ${({theme:e})=>e.widgets.locations.colorName};
`,ub=He(fl.Time)`
    font-size: 11px;
    line-height: 15px;
`,mb=He(fl.TextContainer)`
    font-size: 12px;
    line-height: 16px;
    color: ${({theme:e})=>e.widgets.locations.colorName};
`,gb=He(fl.ShowMoreBtn)`
    margin-top: -4px;
    color: ${({theme:e})=>e.widgets.locations.colorTime};
    span {
        font-size: 12px;
        line-height: 21px;
    }
`,wb=He(Gs)`
    margin-left: 2px;
    width: 12px;
    height: 12px;
    display: flex;
`,vb=He("div")`
    color: ${({theme:e})=>e.widgets.locations.colorReviewStars};
    background: transparent;
    display: flex;
    gap: 2px;
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n                color: ${i.heartsColor};\n            `}
`,fb=He(lt)`
    width: 12px;
    height: 12px;
`,xb=({reviews:e,verified:i,isOpen:t,isClosing:r,ratingType:n,emojiType:o})=>{const{t:a}=Qt();return t&&V(lb,{className:"reputon-reviews-container",$isOpen:t,$isClosing:r,children:e.map((t,r)=>{const{authorUrl:l,rating:s,text:d,profilePhotoUrl:c,authorName:p,relativeTimeDescription:h}=t,u=_e(s),m=s?V(vb,{$ratingType:n,children:[u?.map((e,i)=>V(fb,{fill:e,ratingType:n,emojiType:o},i)),i&&V(wb,{verified:a("verified")})]}):void 0;return V(b,{children:[V(fl,{header:V(fl.Header,{logoApp:V(fl.Logo,{children:V(db,{})}),info:V(pb,{icon:V(cb,{children:V(dt,{url:l,label:`${p} ${a("review")}`,children:V(ir,{src:c,alt:`${p} ${a("image")}`})})}),attributes:V(fl.Attributes,{name:V(hb,{children:V(dt,{inherit:!0,url:l,label:`${p} ${a("review")}`,children:p})}),time:V(ub,{children:h})})})}),rating:m,hiddenContainer:V(fl.HiddenContainer,{textContainer:V(mb,{openRows:3,children:d})}),actionButton:V(gb,{children:e=>V("span",e?{children:a("show_less")}:{children:a("show_more")})})}),r===e.length-1||V(sb,{})]},r)})})},bb=({business:e,options:i})=>{const{isOpen:t,toggleReviewsOpen:r,isClosing:n}=(()=>{const[e,i]=oe(!1),[t,r]=oe(!1),n=se(null);return{isOpen:e,toggleReviewsOpen:()=>{e?(r(!0),n.current=setTimeout(()=>{r(!1),i(!1)},200)):(i(!0),null!==n.current&&clearTimeout(n.current))},isClosing:t}})(),{reviews:o,rating:a}=e,{container:l}=pe(Bi),{ratingType:s,emojiType:d,solidShadow:c,photoType:p,showMap:h}=kw({container:l}),{handleMouseEnterIcon:u,handleMouseLeaveIcon:m,icons:g}=Di(),{open:w,toggleOpen:v}=(()=>{const[e,i]=oe(!1);return{open:e,toggleOpen:e=>i(!e)}})(),f=_e(a);return V(Yx,{business:e,options:{isOneBusiness:1===i.currentBusinesses.length,language:i.language,photoType:p,showMap:h,solidShadow:c},actionReviewsButton:V(nb,{isShow:o?.length>0,onClick:r,isClosing:n,isOpen:t}),ratingIcons:V(eb,{rating:e.rating,icons:f,ratingType:s,emojiType:d,writeReviewUrl:e.writeReviewUrl,hoveredIcons:g,onEnterIcon:u,onLeaveIcon:m}),reviewsListElement:V(xb,{reviews:o,verified:i.verified,isOpen:t,isClosing:n,ratingType:s,emojiType:d}),collapseHoursElement:V(Cx,{isShow:e.openHours&&Object.values(e.openHours).length>0,openHours:e.openHours,open:w,onToggle:v})})},yb=He("div",io)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    overflow: hidden;
`,_b=He("div",io)`
    display: grid;
    width: 100%;
    align-items: start;
    grid-template-columns: repeat(auto-fit, minmax(${380}px, 1fr));
    @supports (-webkit-hyphens: none) {
        grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
    }
    grid-gap: ${24}px;
    @container wrapper (max-width:${Ye}px) {
        grid-template-columns: repeat(auto-fit, minmax(${280}px, 1fr));
    }
`,$b=He(rr)`
    color: ${e=>e.theme.widgets.locations.colorLoadMore};
    background: ${e=>e.theme.widgets.locations.backgroundLoadMore};
`,Sb=()=>{const{t:e}=Qt(),i=se(null),{data:t,container:r}=pe(Bi),{contentIndex:n,numberOfRows:o}=Nw(ai);Hi({container:r});const{business:a,language:l,verified:s}=t,d=(({contentIndex:e,allBusinesses:i})=>"all"===e?i:[i[e]||i[0]])({contentIndex:n,allBusinesses:a}),{containerRef:c,isNarrow:p}=np(),{currentItems:h,canLoadMore:u,handleShowAllItems:m}=(({container:e,items:i,gap:t=24,minChildWidth:r=380,minChildWidthMobile:n=280,numberOfRowsMobile:o=4,numberOfRowsDesktop:a=4,isMobile:l})=>{const[s,d]=oe(0),[c,p]=oe(!0),h=l?o:a,u=l?n:r,m=ce(()=>{const r=i?.length||0,n=tw({container:e,minChildWidth:u,gap:t})||1;d(n*h),p(n*h<(r||0))},[e,i,l]);ae(()=>{m()},[m]);const g=i?.slice(0,s);return{currentItems:g,canLoadMore:!!i?.length&&c,handleShowAllItems:()=>{d(30),p(!1)}}})({container:i,items:d,gap:24,minChildWidth:380,minChildWidthMobile:280,numberOfRowsMobile:o.mobile,numberOfRowsDesktop:o.desktop,isMobile:p});return V(Mr,{className:"reputon-locations reputon-widget",children:V(yb,{ref:c,className:"reputon-locations-container",children:[V(_b,{ref:i,className:"reputon-locations-wrapper",children:h?.map((e,i)=>V(bb,{business:e,options:{currentBusinesses:d,language:l,verified:s}},i))}),u&&V($b,{className:"reputon-see-all editable",onClick:m,content:e("see_all")||"See all"})]})})},kb=He(ar)`
    align-self: stretch;
    @container wrapper (max-width:${Ye}px) {
        margin-left: 0px;
        margin-right: 0px;
        flex-direction: column;
        align-items: normal !important;
    }
`,Cb=He(ir)`
    border-radius: 100px;
`,Nb=Qi.Name,Tb=He(Qi.ReviewsText)`
    color: ${e=>e.theme.widgets.grid.colorReviewsCount};
`,Rb=He(({isEditable:e,content:i,...t})=>V(Nb,{...t,isEditable:e,content:i}))`
    color: ${e=>e.theme.widgets.grid.colorSellerName};
    & a:hover {
        text-decoration: underline;
    }
`,Ib=He(Qi.Rating)`
    color: ${e=>e.theme.widgets.grid.colorSellerStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}

    ${({$ratingType:e,theme:i})=>"emoji"===e&&`\n            color: ${i.widgets.grid.colorSellerName};\n        `}
`,Ab=He(rr)`
    color: ${e=>e.theme.widgets.grid.colorLeaveReview};
    background: ${e=>e.theme.widgets.grid.backgroundLeaveReview};
    align-self: center;
    @container wrapper (max-width:${Ye}px) {
        width: 100%;
        text-align: center;
    }
`,Lb=He(dt)`
    @container wrapper (max-width:${Ye}px) {
        width: 100%;
    }
`,jb=({imageUrl:e,url:i,name:t,rating:r,ratingIcons:n,reviewsNumber:o,writeReviewUrl:a,options:l})=>{const{t:s,locale:d}=Qt(),{writeReviewEnabled:c,contentIndex:p,ratingType:h,emojiType:u,solidShadow:m}=l;return V(kb,{solidShadow:m,actionButton:c&&a?V(Lb,{url:a,label:s("write_review"),children:V(Ab,{className:"reputon-bt reputon-link reputon-leave-review editable",content:s("write_review")})}):null,contentHeader:V(Qi,{children:V(Qi.Container,{icon:e?V(dt,{url:i,label:`${t} ${s("reviews")}`,children:V(Qi.Icon,{children:V(Cb,{src:e,alt:s("business_image")})})}):void 0,content:V(Qi.Content,{name:V(dt,{inherit:!0,url:i,label:`${t} ${s("reviews")}`,children:V(Rb,{isEditable:"all"===p,content:t,children:t})}),rating:V(dt,{url:i,label:`${t} ${s("reviews")}`,children:V(Ib,{$ratingType:h,children:[V(Qi.Count,{children:Se(r)}),V(Qi.RatingIcons,{children:n?.map((e,i)=>V(lt,{ratingType:h,emojiType:u,fill:e},i))})]})}),reviewsText:V(Tb,{children:[V(sn,{value:o,locale:d})," ",s("reviews_on"),V(ln,{$isWide:!0})]})})})})})},Mb=He(Ds)`
    width: 17px;
    height: 17px;
`,zb=He(Gs)`
    margin-left: 7px;
`,Pb=He(qa)`
    margin-top: 12px;
`,Eb=He(fl.RatingIcons)`
    color: ${e=>e.theme.widgets.grid.colorReviewStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}
`,Ob=He(fl.TextContainer)`
    color: ${e=>e.theme.widgets.grid.colorDescription};
`,Bb=He(fl.ShowMoreBtn)`
    color: ${e=>e.theme.widgets.grid.colorShowMore};
`,Ub=He(fl.Time)`
    color: ${e=>e.theme.widgets.grid.colorTime};
`,Hb=He(fl.Name)`
    color: ${e=>e.theme.widgets.grid.colorName};
`,Db=({author:e,rating:i,verified:t,options:r,images:n,text:o,date:a,onImageClick:l})=>{const{name:s,url:d,profilePhotoUrl:c}=e,{photosType:p,ratingType:h,emojiType:u,hasShadow:m}=r,g=_e(i),{t:w}=Qt(),v=i?V(Eb,{$ratingType:h,children:[g?.map((e,i)=>V(lt,{ratingType:h,emojiType:u,fill:e},i)),t&&V(zb,{verified:w("verified")})]}):void 0;return V(fl,{animation:!0,alwaysOpen:!0,solidShadow:m,header:V(fl.Header,{logoApp:V(fl.Logo,{children:V(Mb,{})}),info:V(fl.InfoTop,{icon:V(fl.Icon,{children:V(dt,{url:d,label:`${s} ${w("review")}`,children:V(ir,{src:c,alt:`${s} ${w("image")}`})})}),attributes:V(fl.Attributes,{name:V(Hb,{children:V(dt,{inherit:!0,url:d,label:`${s} ${w("review")}`,children:s})}),time:V(Ub,{children:a})})})}),rating:v,hiddenContainer:V(fl.HiddenContainer,{textContainer:V(Ob,{children:o}),imagesContainer:"small"===p?V(fl.Images,{images:n?.map(({thumbnailUrl:e})=>e),callbackAfterImageClick:l}):void 0}),actionButton:V(Bb,{children:e=>V("span",e?{children:w("show_less")}:{children:w("show_more")})}),imagesBlock:"large"===p?V(Pb,{callbackAfterImageClick:l,images:n?.map(({thumbnailUrl:e})=>e),imageCount:1}):void 0,mediumImagesBlock:"medium"===p?V(fl.MediumImages,{callbackAfterImageClick:l,images:n?.map(({thumbnailUrl:e})=>e)}):void 0,info:V(fl.Info,{style:{display:"none"},icon:V(fl.Icon,{children:V(dt,{url:d,label:`${s} ${w("review")}`,children:V(ir,{src:c,alt:`${s} ${w("image")}`})})}),attributes:V(fl.Attributes,{name:V(Hb,{children:V(dt,{url:d,label:`${s} ${w("review")}`,children:s})}),time:V(Ub,{children:a})})})})},Fb=He("div",io)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    overflow: hidden;
`,Vb=He("div",io)`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 25px;
`,Wb=He("div")`
    display: flex;
    flex-direction: column;
    gap: 15px;
`,Gb=He(rr)`
    color: ${e=>e.theme.widgets.grid.colorLoadMore};
    background: ${e=>e.theme.widgets.grid.backgroundLoadMore};
`,Zb=()=>{const{t:e}=Qt(),i=se(null),{containerRef:t,isNarrow:r}=np(),{data:n,container:o}=pe(Bi);Hi({container:o});const{reviewPhotosType:a,contentIndex:l,showRating:s,numberOfRows:d,ratingType:c,emojiType:p,solidShadow:h,writeReviewEnabled:u}=Nw(oi),{business:m,verified:g}=n,{summary:w,reviews:v,writeReviewUrl:f,imageUrl:x,url:b,rating:y,name:_,reviewsNumber:$}=Ui({contentIndex:l,business:m}),{aggregatedImages:S,summaryImages:k}=Mn(v,!!w),{setFullScreenImageOptions:C,handleClosePopup:N,open:T,popupContent:R,initialIndex:I}=zn(S),A=w?[V(Il,{reviewsNumber:$,items:w.items,onImageClick:(e,i)=>C(e,i),options:{reviewPhotosType:a,hasShadow:h},alwaysOpen:!0,images:k},"summaryReview"),...v]:v,{canLoadMore:L,handleShowMoreItems:j,showItemsCount:M,columnsCount:z}=(({container:e,itemsCount:i,numberOfRowsMobile:t=3,numberOfRowsDesktop:r=2,gap:n=25,minChildWidth:o=300,isNarrow:a})=>{const[l,s]=oe(1),[d,c]=oe(0),[p,h]=oe(!0),u=a?t:r,m=ce(()=>{const t=tw({container:e,minChildWidth:o,gap:n})||1;s(t),c(t*u),h(t*u<(i||0))},[e,i,a]);return ae(()=>{m()},[m]),{handleShowMoreItems:()=>{c(e=>{const t=e+l*u;return t>=(i||0)&&h(!1),t})},showItemsCount:d,canLoadMore:!!i&&p,columnsCount:l}})({container:i,itemsCount:A.length,isNarrow:r,numberOfRowsMobile:d.mobile,numberOfRowsDesktop:d.desktop}),P=!v?.length,E=P&&!!y;return V(Mr,P&&!y?{className:"reputon-masonry reputon-reviews-holder",children:V(Ar,{ratingType:c,emojiType:p,solidShadow:h,name:_,writeReviewUrl:f,imageUrl:x,url:b})}:E?{className:"reputon-masonry reputon-reviews-holder",children:V(jb,{writeReviewUrl:f,imageUrl:x,url:b,name:_,rating:y,ratingIcons:_e(y),reviewsNumber:$,options:{writeReviewEnabled:u,contentIndex:l,ratingType:c,emojiType:p,solidShadow:h}})}:{className:"reputon-masonry reputon-reviews-holder",children:[R&&V(Ua,{initialIndex:I,images:S?.map(({url:e})=>e),open:T,onClose:()=>N()}),V(Fb,{ref:t,className:"reputon-masonry-container",children:[s&&V(jb,{writeReviewUrl:f,imageUrl:x,url:b,name:_,rating:y,ratingIcons:_e(y),reviewsNumber:$,options:{writeReviewEnabled:u,contentIndex:l,ratingType:c,emojiType:p,solidShadow:h}}),V(Vb,{ref:i,className:"reputon-body",children:Array(z).fill(!0).map((e,i)=>{const t=A?.slice(0,M).filter((e,t)=>t%z===i);return V(Wb,{children:t?.map((e,t)=>{if(w&&0===t&&0===i)return e;const{authorUrl:r,rating:n,text:o,profilePhotoUrl:l,authorName:s,relativeTimeDescription:d,images:u}=e;return V(Db,{author:{url:r,name:s,profilePhotoUrl:l},rating:n,options:{photosType:a,ratingType:c,emojiType:p,hasShadow:h},verified:g,images:u,text:o,date:d,onImageClick:C},t)})},i)})}),L&&V(Gb,{className:"reputon-load-more editable",onClick:j,content:e("load_more")})]})]})},qb=He(ar)`
    border-radius: 24px 24px 0 0;
    @container wrapper (max-width:${Ye}px) {
        flex-direction: column;
        align-items: normal;
    }
`,Kb=He(ir)`
    border-radius: 100px;
`,Xb=Qi.Name,Yb=He(Qi.ReviewsText)`
    font-size: 14px;
    color: ${e=>e.theme.widgets.standard.colorReviewsCount};
`,Jb=He(({isEditable:e,content:i,...t})=>f(Xb,{...t,isEditable:e,content:i}))`
    color: ${e=>e.theme.widgets.standard.colorSellerName};
    & a:hover {
        text-decoration: underline;
    }
`;He(ln)``;const Qb=He(Qi.Rating)`
    color: ${e=>e.theme.widgets.standard.colorSellerStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}

    ${({$ratingType:e,theme:i})=>"emoji"===e&&`\n            color: ${i.widgets.standard.colorSellerName};\n        `}
`,ey=He(rr)`
    color: ${e=>e.theme.widgets.standard.colorLeaveReview};
    background: ${e=>e.theme.widgets.standard.backgroundLeaveReview};
    align-self: center;
    @container wrapper (max-width:${Ye}px) {
        width: 100%;
        text-align: center;
    }
`,iy=He(dt)`
    @container wrapper (max-width:${Ye}px) {
        width: 100%;
    }
`,ty=({businessImageUrl:e,businessUrl:i,name:t,rating:r,ratingIcons:n,reviewsNumber:o,writeReviewUrl:a,ratingType:l,emojiType:s,writeReviewEnabled:d,isEditableBusinessName:c})=>{const{t:p,locale:h}=Qt();return V(qb,{actionButton:d&&a?V(iy,{url:a,label:p("write_review"),children:V(ey,{className:"reputon-bt reputon-link reputon-leave-review editable",content:p("write_review")})}):null,contentHeader:V(Qi,{children:V(Qi.Container,{icon:e?V(dt,{url:i,label:`${t} ${p("reviews")}`,children:V(Qi.Icon,{children:V(Kb,{src:e,alt:p("business_image")})})}):void 0,content:V(Qi.Content,{name:V(dt,{inherit:!0,url:i,label:`${t} ${p("reviews")}`,children:V(Jb,{isEditable:c,content:t,children:t})}),rating:V(dt,{url:i,label:`${t} ${p("reviews")}`,children:V(Qb,{$ratingType:l,children:[V(Qi.Count,{children:Se(r)}),V(Qi.RatingIcons,{children:n?.map((e,i)=>V(lt,{ratingType:l,emojiType:s,fill:e},i))})]})}),reviewsText:V(Yb,{children:[V(sn,{value:o,locale:h})," ",p("reviews_on"),V(ln,{$isWide:!0})]})})})})})},ry="reputon-logo-text",ny="reputon-logo-icon",oy=He("div")`
    display: flex;
    gap: 18px;
    background: ${e=>e.theme.widgets.standard.background};
    border-radius: 16px;
    padding: 16px;
    flex-direction: column;
    @container wrapper (max-width:${Ye}px) {
        gap: 16px;
    }
`,ay=He("div")`
    width: 50px;
    height: 50px;
    min-width: 50px;
`,ly=He("div")`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    width: 100%;
`,sy=He("div")`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 0;
`,dy=He("div")`
    color: ${e=>e.theme.widgets.standard.colorName};
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,cy=He("div")`
    font-size: 14px;
    font-weight: 400;
    color: ${e=>e.theme.widgets.standard.colorTime};
    line-height: 21px;
`,py=He("div")`
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${({theme:e})=>e.widgets.standard.colorReviewStars};
`,hy=He("div")`
    display: grid;
    grid-template-columns: repeat(4, 150px);
    gap: 8px;
    height: 150px;
    overflow-x: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    @container wrapper (max-width:${Ye}px) {
        grid-template-columns: repeat(4, 80px);
        height: 80px;
    }
`,uy=He("div")`
    margin-top: 5px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.45;
`,my=He("div")`
    width: 150px;
    height: 150px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    @container wrapper (max-width:${Ye}px) {
        width: 80px;
        height: 80px;
    }
`,gy=He("div")`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    gap: 2px;
    align-items: center;
    white-space: nowrap;
    font-size: 9px;
    width: auto;
    opacity: 0;
    visibility: hidden;
    transition:
        opacity 0.2s ease,
        visibility 0.2s ease;
    z-index: 1;
`,wy=He("div")``,vy=He("div")`
    display: flex;
    justify-content: flex-end;
    position: relative;
    filter: ${e=>"black"===e.theme.theme?"brightness(100)":"none"};
    min-width: 30px;
    span {
        color: ${e=>e.theme.colorGoogleBadge};
        transition:
            opacity 0.2s ease,
            visibility 0.2s ease;
    }
    ${e=>e.$disableHover?"":`\n            @media (hover: hover) and (pointer: fine) {\n                &:hover {\n                    .${ry} {\n                        opacity: 1;\n                        visibility: visible;\n                    }\n                    .${ny} {\n                        opacity: 0;\n                        visibility: visible;\n                    }\n                }\n            }\n        `}
`,fy=({className:e,images:i,text:t,header:r})=>V(oy,{className:Vi(e,"reputon-single-review"),children:[r,i,t]});fy.Icon=({className:e,children:i})=>i?V(ay,{className:Vi(e,"reputon-image"),children:i}):null,fy.Header=({icon:e,rating:i,time:t,className:r,name:n,logoApp:o})=>V(ly,{className:Vi(r,"reputon-content"),children:[e,V(sy,{children:[n,t,i]}),o]}),fy.Name=({className:e,children:i})=>i&&V(dy,{className:Vi(e,"reputon-name"),children:i}),fy.TimeDescription=({className:e,children:i})=>i&&V(cy,{className:Vi(e,"reputon-time"),children:i}),fy.RatingIcons=({className:e,children:i})=>i&&V(py,{className:Vi(e,"reputon-rating-stars"),children:i}),fy.Logo=({className:e,children:i,disableHover:t})=>i&&V(vy,{className:Vi(e,"reputon-review-logo"),$disableHover:t,children:[!t&&V(gy,{className:ry,children:[V("span",{children:"Powered by"}),V(ln,{})]}),V(wy,{className:ny,children:i})]}),fy.Images=({className:e,children:i})=>i&&V(hy,{className:Vi(e,"reputon-images"),children:i}),fy.Image=({className:e,children:i,onClick:t,...r})=>i&&V(my,{onClick:t,className:Vi(e,"reputon-image"),...r,children:i}),fy.ReviewsText=({className:e,children:i})=>i&&V(uy,{className:Vi(e,"reputon-reviews-text"),children:i}),He(Gs)`
    margin-left: 8px;
`;const xy=He(ir)``,by=He("img")`
    @supports (-webkit-hyphens: none) {
        object-fit: cover;
    }
`,yy=He(fy.ReviewsText)`
    color: ${e=>e.theme.widgets.standard.colorDescription};
`,_y=He(fy.RatingIcons)`
    color: ${e=>e.theme.widgets.standard.colorReviewStars};
    ${({$ratingType:e,theme:i})=>"hearts"===e&&`\n            color: ${i.heartsColor};\n        `}
`,$y=He(fy.Name)`
    color: ${e=>e.theme.widgets.standard.colorName};
    & a:hover {
        text-decoration: underline;
    }
`,Sy=He(fy.TimeDescription)`
    color: ${e=>e.theme.widgets.standard.colorTime};
`,ky=He(fy.Image)`
    display: flex;
    -webkit-box-flex: 1;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    & img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:before {
        ${e=>(e.$hideImageCount||0)>0&&`\n            content: '+${e.$hideImageCount}';\n        `};
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        font-weight: bold;
        color: white;
        background: #11111171;
        width: 100%;
        height: 100%;
    }
`,Cy=He(Ds)`
    width: 17px;
    height: 17px;
`,Ny=({author:e,rating:i,verified:t,date:r,images:n,text:o,options:a,onImageClick:l})=>{const{t:s}=Qt(),{showReviewPhotos:d,ratingType:c,emojiType:p}=a,{name:h,url:u,profilePhotoUrl:m}=e,g=_e(i),w=n?.slice(0,4),v=w?.length,f=i?V(_y,{$ratingType:c,children:[g?.map((e,i)=>V(lt,{fill:e,ratingType:c,emojiType:p},i)),t&&V(Gs,{verified:s("verified")})]}):void 0;return V(fy,{header:V(fy.Header,{logoApp:V(fy.Logo,{children:V(Cy,{})}),icon:V(fy.Icon,{children:V(dt,{url:u,label:`${h} ${s("review")}`,children:V(xy,{src:m,alt:`${h} ${s("image")}`})})}),name:V($y,{children:V(dt,{url:u,label:`${h} ${s("review")}`,children:h})}),rating:f,time:V(Sy,{children:r})}),images:V(fy.Images,{children:d&&n?.map(({thumbnailUrl:e},i,t)=>i<4&&V(ky,{$hideImageCount:v===i+1&&t.length>4?t.length-3:void 0,onClick:()=>l(e),tabIndex:0,role:"button","aria-label":s("review_image"),onKeyPress:()=>l(e),children:V(by,{width:"100%",height:"100%",src:e,alt:`${h} ${s("image")}`,loading:"lazy"})},e+i))}),text:V(yy,{children:o})})},Ty=He(fy.Name)`
    color: ${e=>e.theme.summary.colorName};
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    background-color: ${e=>e.theme.summary.colorBadge};
    padding: 2px 8px;
    margin-bottom: 2px;
    border-radius: 99px;
    width: fit-content;
`,Ry=He("div")`
    position: relative;
    min-width: 50px;
    height: 100%;
    border-radius: 100px;
    background: linear-gradient(
        90deg,
        ${e=>e.theme.summary.colorLogoGradient1},
        ${e=>e.theme.summary.colorLogoGradient2}
    );
    &:before {
        content: 'AI';
        color: ${e=>e.theme.summary.colorLogoText};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-size: 20px;
        font-weight: 500;
    }
`,Iy=He(fy.ReviewsText)`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    gap: 7px;
`,Ay=He(fy.TimeDescription)`
    color: ${e=>e.theme.summary.colorTime};
`,Ly=He("p")`
    color: ${e=>e.theme.summary.colorDescription};
`,jy=He(fy.Image)`
    display: flex;
    -webkit-box-flex: 1;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    & img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:before {
        ${e=>(e.$hideImageCount||0)>0&&`\n            content: '+${e.$hideImageCount}';\n        `};
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        font-weight: bold;
        color: white;
        background: #11111171;
        width: 100%;
        height: 100%;
    }
`,My=He("img")`
    @supports (-webkit-hyphens: none) {
        object-fit: cover;
    }
`,zy=He(xl)`
    margin-right: 3px;
    display: inline-block;
`,Py=({onImageClick:e,images:i,items:t,reviewsNumber:r,showPhotos:n})=>{const{t:o,locale:a}=Qt(),l=i?.length;return V(fy,{className:"reputon-summary",header:V(fy.Header,{logoApp:V(fy.Logo,{disableHover:!0,children:V(Da,{})}),icon:V(fy.Icon,{children:V(Ry,{children:" "})}),name:V(Ty,{children:o("ai_summary")}),time:V(Ay,{children:[o("based_on")," ",V(sn,{value:r,locale:a})," ",o("reviews")]})}),text:V(Iy,{children:t.map((e,i)=>V(Ly,{children:[V(zy,{})," ",`${e}`]},i))}),images:V(fy.Images,{children:n&&(i?.length||0)>0&&i?.map(({thumbnailUrl:i},t,r)=>t<4&&V(jy,{$hideImageCount:l===t+1&&r.length>4?r.length-3:void 0,onClick:()=>e(i,!0),tabIndex:0,role:"button","aria-label":o("review_image"),onKeyPress:()=>e(i,!0),children:V(My,{width:"100%",height:"100%",src:i,alt:o("ai_summary"),loading:"lazy"})},i+t))})})},Ey=He("div")`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px 20px;
    overflow-y: auto;
    overflow-x: hidden;
    height: 400px;
    background: ${e=>e.theme.widgets.standard.backgroundBody};
    &::-webkit-scrollbar {
        width: 11px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 4px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 4px;
    }
    ${e=>`\n           &::-webkit-scrollbar-thumb {\n                background: ${e.theme.widgets.standard.scrollThumb};\n            }\n            &::-webkit-scrollbar-track {\n                background: ${e.theme.widgets.standard.scrollTrack};\n            } \n        `}
`,Oy=He("div")`
    border: 1px solid #f0f0f7;
    border-radius: 24px;
    overflow: hidden;
`,By=()=>{const{data:e,container:i}=pe(Bi);Hi({container:i});const{showReviewPhotos:t,contentIndex:r,ratingType:n,emojiType:o,writeReviewEnabled:a}=Nw(ni),{business:l,verified:s}=e,{reviews:d,summary:c,writeReviewUrl:p,reviewsNumber:h,imageUrl:u,name:m,rating:g,url:w}=Ui({contentIndex:r,business:l}),{aggregatedImages:v,summaryImages:f}=Mn(d,!!c),{setFullScreenImageOptions:x,handleClosePopup:b,open:y,popupContent:_,initialIndex:$}=zn(v);return V(Mr,d?.length||g?{className:"reputon-standard reputon-reviews-holder",children:[_&&V(Ua,{initialIndex:$,images:v?.map(({url:e})=>e),open:y,onClose:()=>b()}),V(Oy,{className:"reputon-standard-container",children:[V(ty,{isEditableBusinessName:"all"===r,ratingType:n,emojiType:o,writeReviewEnabled:a,writeReviewUrl:p,businessImageUrl:u,businessUrl:w,name:m,rating:g,ratingIcons:_e(g),reviewsNumber:h}),!!d.length&&V(Ey,{className:"reputon-reviews-body",children:[c&&V(Py,{onImageClick:(e,i)=>x(e,i),images:f,items:c.items,reviewsNumber:h,showPhotos:t}),d.map(({profilePhotoUrl:e,rating:i,authorName:r,relativeTimeDescription:a,images:l,text:d,authorUrl:c,id:p})=>V(Ny,{author:{url:c,name:r,profilePhotoUrl:e},options:{ratingType:n,emojiType:o,showReviewPhotos:t},rating:i,date:a,images:l,text:d,onImageClick:e=>x(e),verified:s},p))]})]})]}:{className:"reputon-standard reputon-reviews-holder",children:V(Ar,{ratingType:n,emojiType:o,imageUrl:u,url:w,name:m,writeReviewUrl:p})})},Uy=({widgetID:e,data:i,options:t,WidgetComponent:r,container:n})=>(i?.customCSS&&!document.reputon_custom_css_styles_added&&($e(i?.customCSS),document.reputon_custom_css_styles_added=!0),i&&r&&V(Bi.Provider,{value:{data:i,type:t.type,legacy_widget_options:t,widgetId:e,container:n},children:V(tv,{children:V(Jt,{defaultLocale:i?.language,children:V(r,{})})})})),Hy={[ei]:Om,[ii]:Om,[ci]:Om,[ti]:Yp,[si]:Yp,[ri]:Qv,[Qe]:Sw,[ni]:By,[oi]:Zb,[ai]:Sb,[di]:hx};document.querySelector(`.${qe}`)&&Ce().then(e=>{e&&(e=>{const i=e.widgets?.filter(e=>e.enabled);i?.forEach(i=>{const{id:t,type:r}=i,n=document.getElementById(`${t}`),o=`initialized-id-${t}`;n&&(n.setAttribute("id",o),n.setAttribute("class",`${qe}`),H(V(Uy,{widgetID:o,data:e,options:i,WidgetComponent:Hy[r],container:n}),n))})})(be({data:e,locale:Xt(),localeFromBackend:e.language}))}),(({widget_name:e,widgets:i})=>{const t=()=>{Object.keys(i).map(t=>{document.querySelectorAll(`body .${e}[data-type=${t}]`).forEach(e=>{e.hasAttribute("initialized")||((e=>{const i=e?.parentElement;i&&(i.style.alignSelf="normal")})(e),H(V(rv,{WidgetComponent:i[t],type:t,container:e}),e))})})};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",()=>{t()}):t()})({widget_name:qe,widgets:{[ti]:Yp,[si]:Yp,[ri]:Qv,[Qe]:Sw,[ii]:Om,[ei]:Om,[ci]:Om,[ni]:By,[oi]:Zb,[ai]:Sb,[di]:hx,[li]:()=>{const{data:e,container:i}=pe(Bi);Hi({container:i});const{contentIndex:t,emojiType:r,ratingType:n,variant:o}=Nw(li),{business:a,verified:l}=e,{reviews:s,writeReviewUrl:d,imageUrl:c,url:p,name:h,rating:u,reviewsNumber:m}=Ui({contentIndex:t,business:a}),{shuffledReviewsWithImages:g,reviewsWithImages:w,flatReviewsWithImages:v}=(e=>{const i=e?.filter(e=>e?.images?.length)||[],t=i.flatMap(e=>e.images.map(i=>({...e,image:i}))),r=i.reduce((e,i)=>Math.max(e,i.images.length),0),n=[];for(let o=0;o<r;o++)i.forEach(e=>{const i=e.images[o];i&&n.push({...e,image:i})});return{shuffledReviewsWithImages:n,reviewsWithImages:i,flatReviewsWithImages:t}})(s),{setPopupOptions:f,handleClosePopup:x,open:b,initialIndex:y,popupContent:_}=(e=>{const[i,t]=oe(!1),[r,n]=oe(null),o=de(()=>r?e?.findIndex(e=>e.image.thumbnailUrl===r.image.thumbnailUrl):-1,[r,e]);return{open:i,popupContent:r,initialIndex:o,setPopupOptions:e=>{t(!0),n(e)},handleClosePopup:()=>{t(!1),n(null)}}})(v),$=!s.length,S=$&&!!u;return $&&!u?V(Mr,{className:`reputon-reviews-holder reputon-${o}`,children:V(Ar,{emojiType:r,ratingType:n,writeReviewUrl:d,imageUrl:c,url:p??"",name:h??""})}):S?V(ew,{writeReviewUrl:d,imageUrl:c,url:p,name:h,rating:u,ratingIcons:_e(u),reviewsNumber:m,options:{writeReviewEnabled:!0,contentIndex:t,ratingType:n,emojiType:r}}):V(iw,{$full:o===hg,className:"reputon-reviews-holder reputon-gallery",children:[_&&V(Fg,{initialIndex:y,reviews:v,open:b,emojiType:r,ratingType:n,verified:l,onClose:x}),"grid"===o&&V(wg,{reviews:g,emojiType:r,ratingType:n,onCardClick:f,isShuffleActive:!b,initReviews:s,initReviewsWithImages:w}),"multicard"===o&&V(xg,{initReviewsWithImages:w,initReviews:s,reviews:g,emojiType:r,ratingType:n,onCardClick:f,isShuffleActive:!b}),o===hg&&V(cg,{reviews:v,initReviews:s,emojiType:r,ratingType:n,onCardClick:f,isModalOpen:b})]})}}})}();

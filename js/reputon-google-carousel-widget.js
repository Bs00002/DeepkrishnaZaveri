!function(){"use strict";var e,t,i,o,r,n,a,s,l,d,c,p,u={},h=[],m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,g=Array.isArray;function w(e,t){for(var i in t)e[i]=t[i];return e}function f(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function v(t,i,o){var r,n,a,s={};for(a in i)"key"==a?r=i[a]:"ref"==a?n=i[a]:s[a]=i[a];if(arguments.length>2&&(s.children=arguments.length>3?e.call(arguments,2):o),"function"==typeof t&&null!=t.defaultProps)for(a in t.defaultProps)void 0===s[a]&&(s[a]=t.defaultProps[a]);return x(t,s,r,n,null)}function x(e,o,r,n,a){var s={type:e,props:o,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==a?++i:a,__i:-1,__u:0};return null==a&&null!=t.vnode&&t.vnode(s),s}function b(e){return e.children}function _(e,t){this.props=e,this.context=t}function y(e,t){if(null==t)return e.__?y(e.__,e.__i+1):null;for(var i;t<e.__k.length;t++)if(null!=(i=e.__k[t])&&null!=i.__e)return i.__e;return"function"==typeof e.type?y(e):null}function $(e){if(e.__P&&e.__d){var i=e.__v,o=i.__e,r=[],n=[],a=w({},i);a.__v=i.__v+1,t.vnode&&t.vnode(a),M(e.__P,a,i,e.__n,e.__P.namespaceURI,32&i.__u?[o]:null,r,null==o?y(i):o,!!(32&i.__u),n),a.__v=i.__v,a.__.__k[a.__i]=a,P(r,a,n),i.__e=i.__=null,a.__e!=o&&k(a)}}function k(e){if(null!=(e=e.__)&&null!=e.__c)return e.__e=e.__c.base=null,e.__k.some(function(t){if(null!=t&&null!=t.__e)return e.__e=e.__c.base=t.__e}),k(e)}function S(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!C.__r++||r!=t.debounceRendering)&&((r=t.debounceRendering)||n)(C)}function C(){try{for(var e,t=1;o.length;)o.length>t&&o.sort(a),e=o.shift(),t=o.length,$(e)}finally{o.length=C.__r=0}}function N(e,t,i,o,r,n,a,s,l,d,c){var p,m,w,f,v,_,$,k=o&&o.__k||h,S=t.length;for(l=function(e,t,i,o,r){var n,a,s,l,d,c=i.length,p=c,u=0;for(e.__k=new Array(r),n=0;n<r;n++)null!=(a=t[n])&&"boolean"!=typeof a&&"function"!=typeof a?("string"==typeof a||"number"==typeof a||"bigint"==typeof a||a.constructor==String?a=e.__k[n]=x(null,a,null,null,null):g(a)?a=e.__k[n]=x(b,{children:a},null,null,null):void 0===a.constructor&&a.__b>0?a=e.__k[n]=x(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[n]=a,l=n+u,a.__=e,a.__b=e.__b+1,s=null,-1!=(d=a.__i=A(a,i,l,p))&&(p--,(s=i[d])&&(s.__u|=2)),null==s||null==s.__v?(-1==d&&(r>c?u--:r<c&&u++),"function"!=typeof a.type&&(a.__u|=4)):d!=l&&(d==l-1?u--:d==l+1?u++:(d>l?u--:u++,a.__u|=4))):e.__k[n]=null;if(p)for(n=0;n<c;n++)null!=(s=i[n])&&!(2&s.__u)&&(s.__e==o&&(o=y(s)),B(s,s));return o}(i,t,k,l,S),p=0;p<S;p++)null!=(w=i.__k[p])&&(m=-1!=w.__i&&k[w.__i]||u,w.__i=p,_=M(e,w,m,r,n,a,s,l,d,c),f=w.__e,w.ref&&m.ref!=w.ref&&(m.ref&&O(m.ref,null,w),c.push(w.ref,w.__c||f,w)),null==v&&null!=f&&(v=f),($=!!(4&w.__u))||m.__k===w.__k?l=R(w,l,e,$):"function"==typeof w.type&&void 0!==_?l=_:f&&(l=f.nextSibling),w.__u&=-7);return i.__e=v,l}function R(e,t,i,o){var r,n;if("function"==typeof e.type){for(r=e.__k,n=0;r&&n<r.length;n++)r[n]&&(r[n].__=e,t=R(r[n],t,i,o));return t}e.__e!=t&&(o&&(t&&e.type&&!t.parentNode&&(t=y(e)),i.insertBefore(e.__e,t||null)),t=e.__e);do{t=t&&t.nextSibling}while(null!=t&&8==t.nodeType);return t}function T(e,t){return t=t||[],null==e||"boolean"==typeof e||(g(e)?e.some(function(e){T(e,t)}):t.push(e)),t}function A(e,t,i,o){var r,n,a,s=e.key,l=e.type,d=t[i],c=null!=d&&!(2&d.__u);if(null===d&&null==s||c&&s==d.key&&l==d.type)return i;if(o>(c?1:0))for(r=i-1,n=i+1;r>=0||n<t.length;)if(null!=(d=t[a=r>=0?r--:n++])&&!(2&d.__u)&&s==d.key&&l==d.type)return a;return-1}function I(e,t,i){"-"==t[0]?e.setProperty(t,null==i?"":i):e[t]=null==i?"":"number"!=typeof i||m.test(t)?i:i+"px"}function L(e,t,i,o,r){var n,a;e:if("style"==t)if("string"==typeof i)e.style.cssText=i;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)i&&t in i||I(e.style,t,"");if(i)for(t in i)o&&i[t]==o[t]||I(e.style,t,i[t])}else if("o"==t[0]&&"n"==t[1])n=t!=(t=t.replace(s,"$1")),a=t.toLowerCase(),t=a in e||"onFocusOut"==t||"onFocusIn"==t?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+n]=i,i?o?i.u=o.u:(i.u=l,e.addEventListener(t,n?c:d,n)):e.removeEventListener(t,n?c:d,n);else{if("http://www.w3.org/2000/svg"==r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=t&&"height"!=t&&"href"!=t&&"list"!=t&&"form"!=t&&"tabIndex"!=t&&"download"!=t&&"rowSpan"!=t&&"colSpan"!=t&&"role"!=t&&"popover"!=t&&t in e)try{e[t]=null==i?"":i;break e}catch(p){}"function"==typeof i||(null==i||!1===i&&"-"!=t[4]?e.removeAttribute(t):e.setAttribute(t,"popover"==t&&1==i?"":i))}}function z(e){return function(i){if(this.l){var o=this.l[i.type+e];if(null==i.t)i.t=l++;else if(i.t<o.u)return;return o(t.event?t.event(i):i)}}}function M(i,o,r,n,a,s,l,d,c,p){var m,v,x,$,k,S,C,R,T,A,I,z,M,P,O,B=o.type;if(void 0!==o.constructor)return null;128&r.__u&&(c=!!(32&r.__u),s=[d=o.__e=r.__e]),(m=t.__b)&&m(o);e:if("function"==typeof B)try{if(R=o.props,T=B.prototype&&B.prototype.render,A=(m=B.contextType)&&n[m.__c],I=m?A?A.props.value:m.__:n,r.__c?C=(v=o.__c=r.__c).__=v.__E:(T?o.__c=v=new B(R,I):(o.__c=v=new _(R,I),v.constructor=B,v.render=D),A&&A.sub(v),v.state||(v.state={}),v.__n=n,x=v.__d=!0,v.__h=[],v._sb=[]),T&&null==v.__s&&(v.__s=v.state),T&&null!=B.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=w({},v.__s)),w(v.__s,B.getDerivedStateFromProps(R,v.__s))),$=v.props,k=v.state,v.__v=o,x)T&&null==B.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),T&&null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(T&&null==B.getDerivedStateFromProps&&R!==$&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(R,I),o.__v==r.__v||!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(R,v.__s,I)){o.__v!=r.__v&&(v.props=R,v.state=v.__s,v.__d=!1),o.__e=r.__e,o.__k=r.__k,o.__k.some(function(e){e&&(e.__=o)}),h.push.apply(v.__h,v._sb),v._sb=[],v.__h.length&&l.push(v);break e}null!=v.componentWillUpdate&&v.componentWillUpdate(R,v.__s,I),T&&null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate($,k,S)})}if(v.context=I,v.props=R,v.__P=i,v.__e=!1,z=t.__r,M=0,T)v.state=v.__s,v.__d=!1,z&&z(o),m=v.render(v.props,v.state,v.context),h.push.apply(v.__h,v._sb),v._sb=[];else do{v.__d=!1,z&&z(o),m=v.render(v.props,v.state,v.context),v.state=v.__s}while(v.__d&&++M<25);v.state=v.__s,null!=v.getChildContext&&(n=w(w({},n),v.getChildContext())),T&&!x&&null!=v.getSnapshotBeforeUpdate&&(S=v.getSnapshotBeforeUpdate($,k)),P=null!=m&&m.type===b&&null==m.key?E(m.props.children):m,d=N(i,g(P)?P:[P],o,r,n,a,s,l,d,c,p),v.base=o.__e,o.__u&=-161,v.__h.length&&l.push(v),C&&(v.__E=v.__=null)}catch(H){if(o.__v=null,c||null!=s)if(H.then){for(o.__u|=c?160:128;d&&8==d.nodeType&&d.nextSibling;)d=d.nextSibling;s[s.indexOf(d)]=null,o.__e=d}else{for(O=s.length;O--;)f(s[O]);j(o)}else o.__e=r.__e,o.__k=r.__k,H.then||j(o);t.__e(H,o,r)}else null==s&&o.__v==r.__v?(o.__k=r.__k,o.__e=r.__e):d=o.__e=function(i,o,r,n,a,s,l,d,c){var p,h,m,w,v,x,b,_=r.props||u,$=o.props,k=o.type;if("svg"==k?a="http://www.w3.org/2000/svg":"math"==k?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),null!=s)for(p=0;p<s.length;p++)if((v=s[p])&&"setAttribute"in v==!!k&&(k?v.localName==k:3==v.nodeType)){i=v,s[p]=null;break}if(null==i){if(null==k)return document.createTextNode($);i=document.createElementNS(a,k,$.is&&$),d&&(t.__m&&t.__m(o,s),d=!1),s=null}if(null==k)_===$||d&&i.data==$||(i.data=$);else{if(s=s&&e.call(i.childNodes),!d&&null!=s)for(_={},p=0;p<i.attributes.length;p++)_[(v=i.attributes[p]).name]=v.value;for(p in _)v=_[p],"dangerouslySetInnerHTML"==p?m=v:"children"==p||p in $||"value"==p&&"defaultValue"in $||"checked"==p&&"defaultChecked"in $||L(i,p,null,v,a);for(p in $)v=$[p],"children"==p?w=v:"dangerouslySetInnerHTML"==p?h=v:"value"==p?x=v:"checked"==p?b=v:d&&"function"!=typeof v||_[p]===v||L(i,p,v,_[p],a);if(h)d||m&&(h.__html==m.__html||h.__html==i.innerHTML)||(i.innerHTML=h.__html),o.__k=[];else if(m&&(i.innerHTML=""),N("template"==o.type?i.content:i,g(w)?w:[w],o,r,n,"foreignObject"==k?"http://www.w3.org/1999/xhtml":a,s,l,s?s[0]:r.__k&&y(r,0),d,c),null!=s)for(p=s.length;p--;)f(s[p]);d||(p="value","progress"==k&&null==x?i.removeAttribute("value"):null!=x&&(x!==i[p]||"progress"==k&&!x||"option"==k&&x!=_[p])&&L(i,p,x,_[p],a),p="checked",null!=b&&b!=i[p]&&L(i,p,b,_[p],a))}return i}(r.__e,o,r,n,a,s,l,c,p);return(m=t.diffed)&&m(o),128&o.__u?void 0:d}function j(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(j))}function P(e,i,o){for(var r=0;r<o.length;r++)O(o[r],o[++r],o[++r]);t.__c&&t.__c(i,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(e){e.call(i)})}catch(o){t.__e(o,i.__v)}})}function E(e){return"object"!=typeof e||null==e||e.__b>0?e:g(e)?e.map(E):w({},e)}function O(e,i,o){try{if("function"==typeof e){var r="function"==typeof e.__u;r&&e.__u(),r&&null==i||(e.__u=e(i))}else e.current=i}catch(n){t.__e(n,o)}}function B(e,i,o){var r,n;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||O(r,null,i)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){t.__e(a,i)}r.base=r.__P=null}if(r=e.__k)for(n=0;n<r.length;n++)r[n]&&B(r[n],i,o||"function"!=typeof e.type);o||f(e.__e),e.__c=e.__=e.__e=void 0}function D(e,t,i){return this.constructor(e,i)}function H(i,o,r){var n,a,s;o==document&&(o=document.documentElement),t.__&&t.__(i,o),n=o.__k,a=[],s=[],M(o,i=o.__k=v(b,null,[i]),n||u,u,o.namespaceURI,n?null:o.firstChild?e.call(o.childNodes):null,a,n?n.__e:o.firstChild,!1,s),P(a,i,s)}function F(e){function t(e){var i,o;return this.getChildContext||(i=new Set,(o={})[t.__c]=this,this.getChildContext=function(){return o},this.componentWillUnmount=function(){i=null},this.shouldComponentUpdate=function(e){this.props.value!=e.value&&i.forEach(function(e){e.__e=!0,S(e)})},this.sub=function(e){i.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){i&&i.delete(e),t&&t.call(e)}}),e.children}return t.__c="__cC"+p++,t.__=e,t.Provider=t.__l=(t.Consumer=function(e,t){return e.children(t)}).contextType=t,t}e=h.slice,t={__e:function(e,t,i,o){for(var r,n,a;t=t.__;)if((r=t.__c)&&!r.__)try{if((n=r.constructor)&&null!=n.getDerivedStateFromError&&(r.setState(n.getDerivedStateFromError(e)),a=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,o||{}),a=r.__d),a)return r.__E=r}catch(s){e=s}throw e}},i=0,_.prototype.setState=function(e,t){var i;i=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=w({},this.state),"function"==typeof e&&(e=e(w({},i),this.props)),e&&w(i,e),null!=e&&this.__v&&(t&&this._sb.push(t),S(this))},_.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),S(this))},_.prototype.render=b,o=[],n="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,a=function(e,t){return e.__v.__b-t.__v.__b},C.__r=0,s=/(PointerCapture)$|Capture$/i,l=0,d=z(!1),c=z(!0),p=0;var U=0;function V(e,i,o,r,n,a){i||(i={});var s,l,d=i;if("ref"in d)for(l in d={},i)"ref"==l?s=i[l]:d[l]=i[l];var c={type:e,props:d,key:o,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--U,__i:-1,__u:0,__source:n,__self:a};if("function"==typeof e&&(s=e.defaultProps))for(l in s)void 0===d[l]&&(d[l]=s[l]);return t.vnode&&t.vnode(c),c}var G,W,Z,q,K=0,X=[],Y=t,J=Y.__b,Q=Y.__r,ee=Y.diffed,te=Y.__c,ie=Y.unmount,oe=Y.__;function re(e,t){Y.__h&&Y.__h(W,e,K||t),K=0;var i=W.__H||(W.__H={__:[],__h:[]});return e>=i.__.length&&i.__.push({}),i.__[e]}function ne(e){return K=1,function(e,t){var i=re(G++,2);if(i.t=e,!i.__c&&(i.__=[fe(void 0,t),function(e){var t=i.__N?i.__N[0]:i.__[0],o=i.t(t,e);t!==o&&(i.__N=[o,i.__[1]],i.__c.setState({}))}],i.__c=W,!W.__f)){var o=function(e,t,o){if(!i.__c.__H)return!0;var n=i.__c.__H.__.filter(function(e){return e.__c});if(n.every(function(e){return!e.__N}))return!r||r.call(this,e,t,o);var a=i.__c.props!==e;return n.some(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(a=!0)}}),r&&r.call(this,e,t,o)||a};W.__f=!0;var r=W.shouldComponentUpdate,n=W.componentWillUpdate;W.componentWillUpdate=function(e,t,i){if(this.__e){var a=r;r=void 0,o(e,t,i),r=a}n&&n.call(this,e,t,i)},W.shouldComponentUpdate=o}return i.__N||i.__}(fe,e)}function ae(e,t){var i=re(G++,3);!Y.__s&&we(i.__H,t)&&(i.__=e,i.u=t,W.__H.__h.push(i))}function se(e){return K=5,le(function(){return{current:e}},[])}function le(e,t){var i=re(G++,7);return we(i.__H,t)&&(i.__=e(),i.__H=t,i.__h=e),i.__}function de(e,t){return K=8,le(function(){return e},t)}function ce(e){var t=W.context[e.__c],i=re(G++,9);return i.c=e,t?(null==i.__&&(i.__=!0,t.sub(W)),t.props.value):e.__}function pe(){for(var e;e=X.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(me),t.__h.some(ge),t.__h=[]}catch(i){t.__h=[],Y.__e(i,e.__v)}}}Y.__b=function(e){W=null,J&&J(e)},Y.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),oe&&oe(e,t)},Y.__r=function(e){Q&&Q(e),G=0;var t=(W=e.__c).__H;t&&(Z===W?(t.__h=[],W.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.some(me),t.__h.some(ge),t.__h=[],G=0)),Z=W},Y.diffed=function(e){ee&&ee(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==X.push(t)&&q===Y.requestAnimationFrame||((q=Y.requestAnimationFrame)||he)(pe)),t.__H.__.some(function(e){e.u&&(e.__H=e.u),e.u=void 0})),Z=W=null},Y.__c=function(e,t){t.some(function(e){try{e.__h.some(me),e.__h=e.__h.filter(function(e){return!e.__||ge(e)})}catch(i){t.some(function(e){e.__h&&(e.__h=[])}),t=[],Y.__e(i,e.__v)}}),te&&te(e,t)},Y.unmount=function(e){ie&&ie(e);var t,i=e.__c;i&&i.__H&&(i.__H.__.some(function(e){try{me(e)}catch(i){t=i}}),i.__H=void 0,t&&Y.__e(t,i.__v))};var ue="function"==typeof requestAnimationFrame;function he(e){var t,i=function(){clearTimeout(o),ue&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(i,35);ue&&(t=requestAnimationFrame(i))}function me(e){var t=W,i=e.__c;"function"==typeof i&&(e.__c=void 0,i()),W=t}function ge(e){var t=W;e.__c=e.__(),W=t}function we(e,t){return!e||e.length!==t.length||t.some(function(t,i){return t!==e[i]})}function fe(e,t){return"function"==typeof t?t(e):t}function ve({timestamp:e,locale:t="en",localeFromBackend:i}){if(!e)return"";const o=1e3*e-Date.now(),r=Math.round(o/1e3),n=new Intl.RelativeTimeFormat([t,i,"en"],{numeric:"auto"}),a=[["year",31536e3],["month",2592e3],["day",86400],["hour",3600],["minute",60],["second",1]];for(const[s,l]of a){const e=Math.round(r/l);if(Math.abs(e)>=1)return n.format(e,s)}return"just now"}let xe="https://grw.reputon.com";function be(e,t=5){if(!e&&0==e)return[];const i=[];let o=e;for(let r=0;r<t;r++)r<Math.floor(Math.abs(e))||o>=.75?i.push("full"):o>=.25&&o<.75?i.push("half"):i.push("none"),o--;return i}const _e=e=>e?.toFixed(1);function ye(e){return e.split("-")[0].toLowerCase()}let $e=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ke=/\/\*[^]*?\*\/|  +/g,Se=/\n+/g,Ce=(e,t)=>{let i="",o="",r="";for(let n in e){let a=e[n];"@"==n[0]?"i"==n[1]?i=n+" "+a+";":"f"==n[1]?o+=Ce(a,n):o+=n+"{"+Ce(a,"k"==n[1]?"":t)+"}":"object"==typeof a?o+=Ce(a,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=a&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=Ce.p?Ce.p(n,a):n+":"+a+";")}return i+(t&&r?t+"{"+r+"}":r)+o},Ne="_goober-reputon",Re={data:""},Te={},Ae=e=>{if("object"==typeof e){let t="";for(let i in e)t+=i+Ae(e[i]);return t}return e};function Ie(e){let t=this||{},i=e.call?e(t.p):e;return((e,t,i,o,r)=>{let n=Ae(e),a=Te[n]||(Te[n]=(e=>{let t=0,i=11;for(;t<e.length;)i=101*i+e.charCodeAt(t++)>>>0;return"go"+i})(n));if(!Te[a]){let t=n!==e?e:(e=>{let t,i,o=[{}];for(;t=$e.exec(e.replace(ke,""));)t[4]?o.shift():t[3]?(i=t[3].replace(Se," ").trim(),o.unshift(o[0][i]=o[0][i]||{})):o[0][t[1]]=t[2].replace(Se," ").trim();return o[0]})(e),o=i?"":`.${a}`,s=Ce.s&&o?`div${Ce.s} ${o}`:o;Te[a]=Ce(r?{[`@keyframes ${a}`]:t}:t,s)}let s=i&&Te.g?Te.g:null;return i&&(Te.g=Te[a]),((e,t,i,o)=>{o?t.data=t.data.replace(o,e):-1===t.data.indexOf(e)&&(t.data=i?e+t.data:t.data+e)})(Te[a],t,o,s),a})(i.unshift?i.raw?(o=i,r=[].slice.call(arguments,1),n=t.p,o.reduce((e,t,i)=>{let o=r[i];if(o&&o.call){let e=o(n),t=(e=>{if(!e||"string"!=typeof e)return;let t=e.match(/(?:^|\s)(go\d+)(?=\s|$)/);return t&&t[1]})(e&&e.props&&e.props.className)||/^go\d+$/.test(e)&&e;o=t?`.${t}`:e&&"object"==typeof e?e.props?"":Ce(e,""):!1===e?"":e}return e+t+(null==o?"":o)},"")):i.reduce((e,i)=>Object.assign(e,i&&i.call?i(t.p):i),{}):i,(e=>{if("object"==typeof window){let t=(e?e.querySelector(`#${Ne}`):window[Ne])||Object.assign(document.createElement("style"),{innerHTML:" ",id:Ne});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||Re})(t.target),t.g,t.o,t.k);var o,r,n}let Le,ze,Me,je=Ie.bind({g:1}),Pe=Ie.bind({k:1});function Ee(e,t){let i=this||{};return function(){let o=arguments;function r(n,a){let s=Object.assign({},n),l=s.className||r.className;i.p=Object.assign({theme:ze&&ze()},s),i.o=/ *go\d+/.test(l),s.className=Ie.apply(i,o)+(l?` ${l}`:""),t&&(s.ref=a);let d=e;return e[0]&&(d=s.as||e,delete s.as),Me&&d[0]&&Me(s),Le(d,s)}return t?t(r):r}}const Oe=e=>{if(!e)return e;const t=e.replace("#",""),i=3===t.length?t.split("").map(e=>e+e).join(""):t;return`${parseInt(i.substring(0,2),16)}, ${parseInt(i.substring(2,4),16)}, ${parseInt(i.substring(4,6),16)}`};function Be(e,t=10){if(!e)return e;const i=e.match(/\d+/g)?.map(Number);if(!i||i.length<3)return e;const[o,r,n]=i;let[a,s,l]=function(e,t,i){e/=255,t/=255,i/=255;const o=Math.max(e,t,i),r=Math.min(e,t,i);let n=0,a=0,s=(o+r)/2;if(o===r)n=a=0;else{const l=o-r;switch(a=s>.5?l/(2-o-r):l/(o+r),o){case e:n=(t-i)/l+(t<i?6:0);break;case t:n=(i-e)/l+2;break;case i:n=(e-t)/l+4}n/=6}return[n,a,s]}(o,r,n);l=Math.min(Math.max(l+t/100,0),1);const[d,c,p]=function(e,t,i){let o,r,n;if(0===t)o=r=n=i;else{const a=(e,t,i)=>(i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e),s=i<.5?i*(1+t):i+t-i*t,l=2*i-s;o=a(l,s,e+1/3),r=a(l,s,e),n=a(l,s,e-1/3)}return[Math.round(255*o),Math.round(255*r),Math.round(255*n)]}(a,s,l);return function(e,t,i){const o=(e<<16|t<<8|i).toString(16);return`#${"0".repeat(6-o.length)}${o}`}(d,c,p)}const De=(e,t)=>{if(!t)return e;const i=e,o={cardColor:Oe(t.cardColor),starsColor:Oe(t.starsColor),textColor:Oe(t.textColor)};t.lighterCardColor=Be(o.cardColor),t.lighterTextColor=Be(o.textColor,-20),t.darkerCardColor=Be(o.cardColor,-10);for(const r in e){const o=e[r];if("object"==typeof o)i[r]=De(o,t);else switch(r){case"background":case"backgroundHover":case"backgroundArrow":case"scrollTrack":i[r]=t.cardColor?t.cardColor:e[r];break;case"colorReviewStars":case"colorSellerStars":case"colorLine":case"heartsColor":i[r]=t.starsColor?t.starsColor:e[r];break;case"colorDescription":case"colorName":case"colorSellerName":case"colorArrow":case"colorLeaveReview":case"colorLoadMore":case"colorReviewsCount":case"oneLineColor":case"colorIcons":case"colorSubText":case"colorGoogleBadge":i[r]=t.textColor?t.textColor:e[r];break;case"backgroundLeaveReview":case"backgroundLoadMore":case"backgroundBody":case"backgroundModal":i[r]=t.lighterCardColor?t.lighterCardColor:e[r];break;case"colorTime":case"colorShowMore":case"colorReviewsButton":case"colorRatingText":i[r]=t.lighterTextColor?t.lighterTextColor:e[r];break;case"colorBadge":case"scrollThumb":case"dividerColor":case"solidShadow":i[r]=t.darkerCardColor?t.darkerCardColor:e[r];break;default:i[r]=o}}return i},He=(e,t)=>e.includes("rgba")?Fe(e):`rgba(${parseInt(e.slice(1,3),16)},${parseInt(e.slice(3,5),16)},${parseInt(e.slice(5,7),16)},${t})`,Fe=e=>{const[t,i,o]=e.match(/\d+/g)?.map(Number)??[];return function(e,t,i){const o=(e<<16|t<<8|i).toString(16);return`#${new Array(Math.abs(o.length-6)).join("0")}${o}`}(t,i,o)},Ue=(e,t)=>{const i=e;for(const o in e){const r=e[o];if("object"==typeof r)i[o]=Ue(r,t);else if("string"==typeof r)switch(o){case"background":case"backgroundHover":case"backgroundArrow":case"backgroundBody":case"backgroundModal":case"solidShadow":i[o]=He(r,t);break;default:i[o]=r}}return i},Ve="reputon-google-reviews-widget",Ge="visibility-reputon-sticky",We=900,Ze=740,qe=550,Ke="grid",Xe="basic",Ye="basic_slide",Je="carousel",Qe="carousel_static_plate",et="standard",tt="masonry",it="locations",ot="gallery",rt="carousel_extended",nt="dual_row_carousel",at="small",st="data-theme",lt="data-show-review-photos",dt="data-write-review",ct="data-autoscroll",pt="data-show-rating",ut="data-type",ht="data-fixed-reviews-height",mt="data-position-vertical",gt="data-position-type",wt="data-sticky",ft="data-content-index",vt="data-has-shadow",xt="data-review-photos-type",bt="data-card-color",_t="data-stars-color",yt="data-text-color",$t="data-number-of-rows-mobile",kt="data-number-of-rows-desktop",St="data-transparency",Ct="data-delay",Nt="data-font",Rt="data-fluid-scrolling",Tt="data-rating-type",At="data-emoji-type",It="data-solid-shadow",Lt="data-variant",zt=["default","theme"],Mt=["stars","emoji","hearts"],jt=F({}),Pt=({contentIndex:e,business:t})=>{const i="all"===e?0:e,o=t[i]||t[0],r=le(()=>"all"===e?(e=>{const{totalReviews:t,totalRating:i,reviews:o,summary:r}=e.reduce((e,t)=>(e.totalRating+=t.rating*t.reviewsNumber,e.totalReviews+=t.reviewsNumber,e.reviews=[...e.reviews,...t.reviews],e.summary=e.summary||t.summary,e),{totalRating:0,totalReviews:0,reviews:[],summary:null});return{rating:i/t,reviewsNumber:t,reviews:o.sort((e,t)=>t.time-e.time),summary:r}})(t):t[i]||t[0],[t,e]);return{index:i,...o,...r}},Et=()=>{const[e,t]=ne(()=>Array(5).fill("none"));return{icons:e,handleMouseEnterIcon:e=>()=>{const i=e+1,o=5-i;t([...Array(i).fill("full"),...Array(o).fill("none")])},handleMouseLeaveIcon:()=>{t(Array(5).fill("none"))}}};function Ot(e){var t,i,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(i=Ot(e[t]))&&(o&&(o+=" "),o+=i)}else for(i in e)e[i]&&(o&&(o+=" "),o+=i);return o}function Bt(){for(var e,t,i=0,o="",r=arguments.length;i<r;i++)(e=arguments[i])&&(t=Ot(e))&&(o&&(o+=" "),o+=t);return o}const Dt=Ee("div")`
    display: flex;
    gap: 10px;
    align-items: center;
    width: 100%;
    max-width: 100%;
`,Ht=Ee("div")`
    min-width: 50px;
    width: 50px;
    height: 50px;
`,Ft=Ee("div")`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    overflow: hidden;
    gap: 3px;
    min-width: 0;
`,Ut=Ee("div")`
    display: flex;
    align-items: center;
`,Vt=Ee("div")`
    font-size: 18px;
    font-weight: 700;
    margin-right: 8px;
    line-height: 21px;
    height: 21px;
`,Gt=Ee("div")`
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
`,Wt=Ee("div")`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
`,Zt=Ee("div")`
    display: flex;
    align-items: center;
    gap: 2px;
    height: 21px;
`,qt=({children:e})=>e;qt.Container=function({icon:e,className:t,content:i}){return V(Dt,{className:Bt(t,"reputon-info"),children:[e,i]})},qt.Icon=({className:e,children:t})=>t?V(Ht,{className:Bt(e,"reputon-image"),children:t}):null,qt.Content=({rating:e,reviewsText:t,className:i,name:o})=>V(Ft,{className:Bt(i,"reputon-content"),children:[o,e,t]}),qt.Name=({className:e,children:t,content:i,isEditable:o})=>t&&V(Gt,{"data-content":i,$isEditable:o,className:Bt(e,"reputon-name"),children:!o&&t}),qt.Rating=({className:e,children:t})=>t?V(Ut,{className:Bt(e,"reputon-rating-stars"),children:t}):null,qt.ReviewsText=({className:e,children:t})=>t&&V(Wt,{className:Bt(e,"reputon-reviews-count"),children:t}),qt.Count=({className:e,children:t})=>t&&V(Vt,{className:Bt(e,"reputon-count-number"),children:t}),qt.RatingIcons=({className:e,children:t})=>t&&V(Zt,{className:Bt(e,"reputon-count-text"),children:t});const Kt=["img/emoji/butterfly.png","img/emoji/flower.png","img/emoji/diamond.png","img/emoji/cake.png","img/emoji/smilingFace.png","img/emoji/christmasTree.png","img/emoji/fire.png","img/emoji/crown.png","img/emoji/shoe.png","img/emoji/snowflake.png","img/emoji/car.png","img/emoji/ribbon.png","img/emoji/pumpkin.png","img/emoji/heartWithArrow.png","img/emoji/rabbitFace.png"],Xt=Ee("span")`
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
        ${({$fill:e,theme:t})=>"none"===e&&"black"===t.theme&&"opacity: 0.2;"}
    }

    & > img:nth-child(2) {
        position: absolute;
        top: 0;
        left: 0;
    }

    ${({$fill:e,theme:t})=>"half"===e&&`\n            & > img {\n                filter: grayscale(1);\n            }\n\n            & > img:nth-child(1) {\n                ${"black"===t.theme&&"opacity: 0.2;"}\n            }\n\n            & > img:nth-child(2) {\n                filter: none;\n                ${"black"===t.theme&&"filter: grayscale(1);"}\n                clip-path: inset(0 50% 0 0);\n            }\n        `}
`,Yt=Ee("img")`
    width: 100%;
    height: 100%;
    object-fit: contain;
`,Jt=({emojiType:e,fill:t,className:i})=>V(Xt,"half"===t?{className:i,$fill:t,children:[V(Yt,{src:`https://cdn.grw.reputon.com/${Kt[e]}`}),V(Yt,{src:`https://cdn.grw.reputon.com/${Kt[e]}`})]}:{className:i,$fill:t,children:V(Yt,{src:`https://cdn.grw.reputon.com/${Kt[e]}`})}),Qt=({fill:e="full",className:t,onHover:i,onUnHover:o})=>({full:V("svg",{className:t,onMouseEnter:i,onMouseLeave:o,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:V("path",{d:"M11.1306 2C9.76798 2 8.59131 2.798 7.99998 3.962C7.40865 2.798 6.23198 2 4.86931 2C2.91598 2 1.33331 3.638 1.33331 5.654C1.33331 7.67 2.54465 9.518 4.10998 11.036C5.67531 12.554 7.99998 14 7.99998 14C7.99998 14 10.2493 12.578 11.89 11.036C13.64 9.392 14.6666 7.676 14.6666 5.654C14.6666 3.632 13.084 2 11.1306 2Z",fill:"currentColor"})}),half:V("svg",{width:"16",height:"16",className:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[V("path",{d:"M10.7969 2.5C12.459 2.5 13.833 3.89316 13.833 5.6543C13.8329 7.48336 12.9117 9.07693 11.2139 10.6719C10.4172 11.4206 9.46554 12.1469 8.70605 12.6895C8.32763 12.9598 7.99941 13.1829 7.7666 13.3379C7.73053 13.3619 7.69635 13.3836 7.66504 13.4043C7.63088 13.3821 7.59347 13.3582 7.55371 13.332C7.31528 13.1754 6.98024 12.9512 6.59766 12.6797C5.82874 12.134 4.88068 11.4096 4.125 10.6768C2.59649 9.19446 1.50012 7.46917 1.5 5.6543C1.5 3.89861 2.87451 2.5 4.53613 2.5C5.69549 2.50005 6.70763 3.17857 7.2207 4.18848L7.66699 5.06641L8.1123 4.18848C8.62533 3.17863 9.63763 2.50018 10.7969 2.5Z",stroke:"currentColor",fill:"none"}),V("path",{d:"M7.66667 3.962C7.07533 2.798 5.89867 2 4.536 2C2.58267 2 1 3.638 1 5.654C1 7.67 2.21133 9.518 3.77667 11.036C5.342 12.554 7.66667 14 7.66667 14V3.962Z",fill:"currentColor"})]}),none:V("svg",{className:t,onMouseEnter:i,onMouseLeave:o,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:V("path",{d:"M10.7969 2.5C12.459 2.5 13.833 3.89316 13.833 5.6543C13.8329 7.48336 12.9117 9.07693 11.2139 10.6719C10.4172 11.4206 9.46554 12.1469 8.70605 12.6895C8.32763 12.9598 7.99941 13.1829 7.7666 13.3379C7.73053 13.3619 7.69635 13.3836 7.66504 13.4043C7.63088 13.3821 7.59347 13.3582 7.55371 13.332C7.31528 13.1754 6.98024 12.9512 6.59766 12.6797C5.82874 12.134 4.88068 11.4096 4.125 10.6768C2.59649 9.19446 1.50012 7.46917 1.5 5.6543C1.5 3.89861 2.87451 2.5 4.53613 2.5C5.69549 2.50005 6.70763 3.17857 7.2207 4.18848L7.66699 5.06641L8.1123 4.18848C8.62533 3.17863 9.63763 2.50018 10.7969 2.5Z",stroke:"currentColor",fill:"none"})})}[e]),ei=({fill:e="full",className:t,onHover:i,onUnHover:o})=>({full:V("svg",{viewBox:"0 0 1792 1792",width:"17",height:"17",fill:"currentColor",className:t,onMouseEnter:i,onMouseLeave:o,children:V("g",{style:"fill: inherit",width:"17",height:"17",children:V("path",{d:"M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"})})}),half:V("svg",{viewBox:"0 0 1792 1792",width:"17",height:"17",fill:"currentColor",className:t,children:V("g",{style:"fill: inherit",width:"17",height:"17",children:V("path",{d:"M1250 957l257-250-356-52-66-10-30-60-159-322v963l59 31 318 168-60-355-12-66zm452-262l-363 354 86 500q5 33-6 51.5t-34 18.5q-17 0-40-12l-449-236-449 236q-23 12-40 12-23 0-34-18.5t-6-51.5l86-500-364-354q-32-32-23-59.5t54-34.5l502-73 225-455q20-41 49-41 28 0 49 41l225 455 502 73q45 7 54 34.5t-24 59.5z"})})}),none:V("svg",{viewBox:"0 0 1792 1792",width:"17",height:"17",fill:"#ccc",className:t,onMouseEnter:i,onMouseLeave:o,children:V("g",{style:"fill: inherit",width:"17",height:"17",children:V("path",{d:"M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"})})})}[e]),ti={stars:({...e})=>V(ei,{...e}),hearts:({...e})=>V(Qt,{...e}),emoji:({...e})=>V(Jt,{...e})},ii=({ratingType:e,...t})=>(ti[e]||ti.stars)({...t}),oi=Ee("a")`
    display: inline-block;
    max-height: 100%;
    ${e=>e.$inherit&&"\n            all: inherit;\n        "};
    &:focus-visible {
        outline: 2px auto !important;
        outline-offset: -2px;
    }
`,ri=({style:e,url:t,children:i,className:o,inherit:r=!1,label:n})=>t?V(oi,{"aria-label":n,$inherit:r,className:Bt(o,"reputon-link"),style:e,href:t,target:"_blank",rel:"noopener noreferrer",children:i}):i,ni={from:"from",google_rating:"Google Reviews",show_more:"Show more",show_less:"Show less",review:"review",reviews:"reviews",verified:"Verified",by:"by",write_review:"Leave a Review",load_more:"Load more",based_on:"Based on",ai_summary:"AI Summary",be_first_review:"Be the first to write review",work_time:"Opening hours",day_off:"Closed",always_on:"Open 24 hours",closed:"Closed",open:"Open",see_all:"See all",monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday",no_reviews_yet:"Be the first to review",reviews_on:"reviews on",hide_reviews:"Hide reviews",show_reviews:"Show reviews",review_image:"Review image",business_image:"Business image",image:"image",previous_slide:"Previous slide",next_slide:"Next slide",powered_by:"Powered by"},ai={from:"desde",google_rating:"Reseñas de Google",show_more:"Mostrar más",show_less:"Muestra menos",review:"reseña",reviews:"reseñas",verified:"Verificado",by:"de",write_review:"Dejar un comentario",load_more:"Сarga más",based_on:"Basado en",ai_summary:"Resumen de IA",be_first_review:"Sé el primero en escribir una reseña",work_time:"Horario de apertura",day_off:"Cerrado",always_on:"Abierto 24 horas",closed:"Cerrado",open:"Abierto",see_all:"Ver todo",monday:"Lunes",tuesday:"Martes",wednesday:"Miércoles",thursday:"Jueves",friday:"Viernes",saturday:"Sábado",sunday:"Domingo",no_reviews_yet:"Sé el primero en escribir una reseña",reviews_on:"reseñas sobre",hide_reviews:"Ocultar reseñas",show_reviews:"Mostrar reseñas",review_image:"Imagen de reseña",business_image:"Imagen de negocio",image:"imagen",previous_slide:"Diapositiva anterior",next_slide:"Siguiente diapositiva",powered_by:"Desarrollado por"},si={from:"de",google_rating:"Avaliações do Google",show_more:"Mostre mais",show_less:"Mostre menos",review:"avaliação",reviews:"avaliações",verified:"Verificado",by:"por",write_review:"Deixe um comentário",load_more:"Carregue mais",based_on:"Com base em",ai_summary:"Resumo de IA",be_first_review:"Seja o primeiro a escrever uma avaliação",work_time:"Horário de funcionamento",day_off:"Fechado",always_on:"Aberto 24 horas",closed:"Fechado",open:"Aberto",see_all:"Ver tudo",monday:"Segunda-feira",tuesday:"Terça-feira",wednesday:"Quarta-feira",thursday:"Quinta-feira",friday:"Sexta-feira",saturday:"Sábado",sunday:"Domingo",no_reviews_yet:"Seja o primeiro a avaliar",reviews_on:"avaliações sobre",hide_reviews:"Ocultar avaliações",show_reviews:"Mostrar avaliações",review_image:"Imagem da avaliação",business_image:"Imagem do negócio",image:"imagem",previous_slide:"Slide anterior",next_slide:"Próximo slide",powered_by:"Desenvolvido por"},li={from:"von",google_rating:"Bewertungen auf Google",show_more:"Mehr anzeigen",show_less:"Weniger anzeigen",review:"Bewertung",reviews:"Bewertungen",verified:"Verifiziert",by:"von",write_review:"Bewertung hinterlassen",load_more:"Mehr laden",based_on:"Basierend auf",ai_summary:"KI-Zusammenfassung",be_first_review:"Schreiben Sie die erste Bewertung",work_time:"Öffnungszeiten",day_off:"Geschlossen",always_on:"24 Stunden geöffnet",closed:"Geschlossen",open:"Geöffnet",see_all:"Alle ansehen",monday:"Montag",tuesday:"Dienstag",wednesday:"Mittwoch",thursday:"Donnerstag",friday:"Freitag",saturday:"Samstag",sunday:"Sonntag",no_reviews_yet:"Schreiben Sie die erste Bewertung",reviews_on:"Bewertungen über",hide_reviews:"Bewertungen ausblenden",show_reviews:"Bewertungen anzeigen",review_image:"Bewertungsbild",business_image:"Geschäftsbild",image:"bild",previous_slide:"Vorherige Folie",next_slide:"Nächste Folie",powered_by:"Unterstützt von"},di={from:"de",google_rating:"Avis sur Google",show_more:"Montrer plus",show_less:"Montrer moins",review:"avis",reviews:"avis",verified:"Vérifié",by:"par",write_review:"Laisser un commentaire",load_more:"Сharger plus",based_on:"Basé sur",ai_summary:"Résumé IA",be_first_review:"Soyez le premier à écrire un avis",work_time:"Heures d'ouverture",day_off:"Fermé",always_on:"Ouvert 24h/24",closed:"Fermé",open:"Ouvert",see_all:"Voir tout",monday:"Lundi",tuesday:"Mardi",wednesday:"Mercredi",thursday:"Jeudi",friday:"Vendredi",saturday:"Samedi",sunday:"Dimanche",no_reviews_yet:"Soyez le premier à donner votre avis",reviews_on:"avis sur",hide_reviews:"Masquer les avis",show_reviews:"Afficher les avis",review_image:"Image de l'avis",business_image:"Image de l'entreprise",image:"image",previous_slide:"Diapositive précédente",next_slide:"Diapositive suivante",powered_by:"Propulsé par"},ci={from:"da",google_rating:"Recensioni su Google",show_more:"Mostra di più",show_less:"Mostra meno",review:"recensione",reviews:"recensioni",verified:"Verificato",by:"di",write_review:"Lascia una recensione",load_more:"Сaricare di più",based_on:"Basato su",ai_summary:"Riepilogo IA",be_first_review:"Sii il primo a scrivere una recensione",work_time:"Orari di apertura",day_off:"Chiuso",always_on:"Aperto 24 ore",closed:"Chiuso",open:"Aperto",see_all:"Vedi tutto",monday:"Lunedì",tuesday:"Martedì",wednesday:"Mercoledì",thursday:"Giovedì",friday:"Venerdì",saturday:"Sabato",sunday:"Domenica",no_reviews_yet:"Sii il primo a recensire",reviews_on:"recensioni su",hide_reviews:"Nascondi recensioni",show_reviews:"Mostra recensioni",review_image:"Immagine della recensione",business_image:"Immagine dell'attività",image:"immagine",previous_slide:"Diapositiva precedente",next_slide:"Diapositiva successiva",powered_by:"Offerto da"},pi={from:"van",google_rating:"Google-beoordelingen",show_more:"Laat meer zien",show_less:"Laat minder zien",review:"beoordeling",reviews:"beoordelingen",verified:"Geverifieerd",by:"door",write_review:"Laat een beoordeling achter",load_more:"Meer laden",based_on:"Gebaseerd op",ai_summary:"AI-samenvatting",be_first_review:"Schrijf als eerste een review",work_time:"Openingstijden",day_off:"Gesloten",always_on:"24 uur per dag open",closed:"Gesloten",open:"Open",see_all:"Alles zien",monday:"Maandag",tuesday:"Dinsdag",wednesday:"Woensdag",thursday:"Donderdag",friday:"Vrijdag",saturday:"Zaterdag",sunday:"Zondag",no_reviews_yet:"Schrijf als eerste een review",reviews_on:"beoordelingen over",hide_reviews:"Verberg beoordelingen",show_reviews:"Toon beoordelingen",review_image:"Beoordelingsafbeelding",business_image:"Bedrijfsafbeelding",image:"afbeelding",previous_slide:"Vorige dia",next_slide:"Volgende dia",powered_by:"Mogelijk gemaakt door"},ui={from:"fra",google_rating:"Anmeldelser på Google",show_more:"Vis mere",show_less:"Vis mindre",review:"anmeldelse",reviews:"anmeldelser",verified:"Bekræftet",by:"af",write_review:"Efterlad en anmeldelse",load_more:"Indlæs mere",based_on:"Baseret på",ai_summary:"AI-resumé",be_first_review:"Vær den første til at skrive anmeldelse",work_time:"Åbningstider",day_off:"Lukket",always_on:"Altid åbent",closed:"Lukket",open:"Åben",see_all:"Se alle",monday:"Mandag",tuesday:"Tirsdag",wednesday:"Onsdag",thursday:"Torsdag",friday:"Fredag",saturday:"Lørdag",sunday:"Søndag",no_reviews_yet:"Vær den første til at anmelde",reviews_on:"anmeldelser om",hide_reviews:"Skjul anmeldelser",show_reviews:"Vis anmeldelser",review_image:"Anmeldelsesbillede",business_image:"Virksomhedsbillede",image:"billede",previous_slide:"Forrige dias",next_slide:"Næste dias",powered_by:"Drevet af"},hi={from:"från",google_rating:"Recensioner på Google",show_more:"Visa mer",show_less:"Visa mindre",review:"recension",reviews:"recensioner",verified:"Verifierad",by:"av",write_review:"Lämna en recension",load_more:"Ladda mer",based_on:"Baserat på",ai_summary:"AI-sammanfattning",be_first_review:"Bli först med att recensera",work_time:"Öppettider",day_off:"Stängt",always_on:"Öppet dygnet runt",closed:"Stängt",open:"Öppet",see_all:"Se alla",monday:"Måndag",tuesday:"Tisdag",wednesday:"Onsdag",thursday:"Torsdag",friday:"Fredag",saturday:"Lördag",sunday:"Söndag",no_reviews_yet:"Bli först med att recensera",reviews_on:"recensioner på",hide_reviews:"Dölj recensioner",show_reviews:"Visa recensioner",review_image:"Recensionsbild",business_image:"Företagsbild",image:"bild",previous_slide:"Föregående bild",next_slide:"Nästa bild",powered_by:"Drivs av"},mi={from:"fra",google_rating:"Anmeldelser på Google",show_more:"Vis mer",show_less:"Vis mindre",review:"anmeldelse",reviews:"anmeldelser",verified:"Bekreftet",by:"av",write_review:"Legg igjen en anmeldelse",load_more:"Last mer",based_on:"Basert på",ai_summary:"AI-sammendrag",be_first_review:"Bli den første til å skrive en anmeldelse",work_time:"Åpningstider",day_off:"Stengt",always_on:"Åpent 24 timer",closed:"Stengt",open:"Åpen",see_all:"Se alle",monday:"Mandag",tuesday:"Tirsdag",wednesday:"Onsdag",thursday:"Torsdag",friday:"Fredag",saturday:"Lørdag",sunday:"Søndag",no_reviews_yet:"Vær den første til å anmelde",reviews_on:"anmeldelser om",hide_reviews:"Skjul anmeldelser",show_reviews:"Vis anmeldelser",review_image:"Anmeldelsesbilde",business_image:"Bedriftsbilde",image:"bilde",previous_slide:"Forrige lysbilde",next_slide:"Neste lysbilde",powered_by:"Drevet av"},gi={from:"od",google_rating:"Recenzje w Google",show_more:"Pokaż więcej",show_less:"Pokaż mniej",review:"ocena",reviews:"opinii",verified:"Zweryfikowany",by:"od",write_review:"Zostaw recenzję",load_more:"Załaduj więcej",based_on:"Na podstawie",ai_summary:"Podsumowanie AI",be_first_review:"Bądź pierwszą osobą, która napisze recenzję",work_time:"Godziny otwarcia",day_off:"Zamknięte",always_on:"Otwarte 24 godziny",closed:"Zamknięte",open:"Otwarte",see_all:"Zobacz wszystko",monday:"Poniedziałek",tuesday:"Wtorek",wednesday:"Środa",thursday:"Czwartek",friday:"Piątek",saturday:"Sobota",sunday:"Niedziela",no_reviews_yet:"Bądź pierwszą osobą, która oceni",reviews_on:"opinie o",hide_reviews:"Ukryj recenzje",show_reviews:"Pokaż recenzje",review_image:"Obraz recenzji",business_image:"Obraz firmy",image:"obraz",previous_slide:"Poprzedni slajd",next_slide:"Następny slajd",powered_by:"Wspierane przez"},wi={from:"itibaren",google_rating:"Google Puanı",show_more:"Daha fazla göster",show_less:"Daha az göster",review:"İnceleme",reviews:"İncelemeler",verified:"Doğrulandı",by:"tarafından",write_review:"İnceleme bırak",load_more:"Daha fazla yükle",based_on:"Dayalı",ai_summary:"Yapay Zeka Özet",be_first_review:"İnceleme yazan ilk kişi siz olun",work_time:"Çalışma saatleri",day_off:"Kapalı",always_on:"24 saat açık",closed:"Kapalı",open:"Açık",see_all:"Hepsini gör",monday:"Pazartesi",tuesday:"Salı",wednesday:"Çarşamba",thursday:"Perşembe",friday:"Cuma",saturday:"Cumartesi",sunday:"Pazar",no_reviews_yet:"İlk değerlendiren siz olun",reviews_on:"hakkında incelemeler",hide_reviews:"İncelemeleri gizle",show_reviews:"İncelemeleri göster",review_image:"İnceleme görseli",business_image:"İşletme görseli",image:"görsel",previous_slide:"Önceki slayt",next_slide:"Sonraki slayt",powered_by:"Destekleyen"},fi={from:"от",google_rating:"Отзывы на Google",show_more:"Показать больше",show_less:"Показать меньше",review:"отзыв",reviews:"отзывов",verified:"Проверено",by:"от",write_review:"Оставить отзыв",load_more:"Загрузить больше",based_on:"На основе",ai_summary:"ИИ-резюме",be_first_review:"Будьте первым, кто напишет отзыв",work_time:"Часы работы",day_off:"Выходной",always_on:"Открыто 24 часа",closed:"Закрыто",open:"Открыто",see_all:"Показать всё",monday:"Понедельник",tuesday:"Вторник",wednesday:"Среда",thursday:"Четверг",friday:"Пятница",saturday:"Суббота",sunday:"Воскресенье",no_reviews_yet:"Будьте первым, кто оставит отзыв",reviews_on:"отзывы на",hide_reviews:"Скрыть отзывы",show_reviews:"Показать отзывы",review_image:"Изображение отзыва",business_image:"Изображение компании",image:"изображение",previous_slide:"Предыдущий слайд",next_slide:"Следующий слайд",powered_by:"Работает на"},vi={from:"від",google_rating:"Відгуки на Google",show_more:"Показати більше",show_less:"Показати менше",review:"відгук",reviews:"відгуків",verified:"Перевірено",by:"від",write_review:"Залишити відгук",load_more:"Завантажити більше",based_on:"На основі",ai_summary:"ШІ-огляд",be_first_review:"Будьте першим, хто залишить відгук",work_time:"Години роботи",day_off:"Зачинено",always_on:"Працюємо цілодобово",closed:"Зачинено",open:"Відчинено",see_all:"Показати все",monday:"Понеділок",tuesday:"Вівторок",wednesday:"Середа",thursday:"Четвер",friday:"П'ятниця",saturday:"Субота",sunday:"Неділя",no_reviews_yet:"Будьте першим, хто залишить відгук",reviews_on:"відгуки на",hide_reviews:"Приховати відгуки",show_reviews:"Показати відгуки",review_image:"Зображення відгуку",business_image:"Зображення компанії",image:"зображення",previous_slide:"Попередній слайд",next_slide:"Наступний слайд",powered_by:"Працює на"},xi={from:"от",google_rating:"Google Ревюта",show_more:"Покажи повече",show_less:"Покажи по-малко",review:"ревю",reviews:"ревюта",verified:"Потвърдено",by:"от",write_review:"Оставете ревю",load_more:"Зареди още",based_on:"Въз основа на",ai_summary:"Обобщение от ИИ",be_first_review:"Бъдете първият, който ще напише отзив",work_time:"Работно време",day_off:"Почивен ден",always_on:"Отворено 24 часа",closed:"Затворено",open:"Отворено",see_all:"Виж всички",monday:"Понеделник",tuesday:"Вторник",wednesday:"Сряда",thursday:"Четвъртък",friday:"Петък",saturday:"Събота",sunday:"Неделя",no_reviews_yet:"Бъдете първият, който ще напише отзив",reviews_on:"ревюта за",hide_reviews:"Скрий ревюта",show_reviews:"Покажи ревюта",review_image:"Изображение на ревю",business_image:"Изображение на компания",image:"изображение",previous_slide:"Предишен слайд",next_slide:"Следващ слайд",powered_by:"Задвижвано от"},bi={from:"από",google_rating:"Αξιολόγηση Google",show_more:"Δείτε περισσότερα",show_less:"Δείξε λιγότερο",review:"κριτική",reviews:"κριτικές",verified:"Επαληθεύτηκε",by:"από τον",write_review:"Αφήστε μια κριτική",load_more:"Φόρτωσε περισσότερα",based_on:"Βασισμένο σε",ai_summary:"Περίληψη ΤΝ",be_first_review:"Γίνε ο πρώτος που θα γράψει κριτική",work_time:"Ώρες λειτουργίας",day_off:"Κλειστό",always_on:"Ανοιχτό 24 ώρες",closed:"Κλειστό",open:"Ανοιχτό",see_all:"Δείτε όλα",monday:"Δευτέρα",tuesday:"Τρίτη",wednesday:"Τετάρτη",thursday:"Πέμπτη",friday:"Παρασκευή",saturday:"Σάββατο",sunday:"Κυριακή",no_reviews_yet:"Γίνετε ο πρώτος που θα κάνει κριτική",reviews_on:"κριτικές για",hide_reviews:"Απόκρυψη κριτικών",show_reviews:"Εμφάνιση κριτικών",review_image:"Εικόνα κριτικής",business_image:"Εικόνα επιχείρησης",image:"εικόνα",previous_slide:"Προηγούμενη διαφάνεια",next_slide:"Επόμενη διαφάνεια",powered_by:"Υποστηρίζεται από"},_i={from:"から",google_rating:"Google 評価",show_more:"もっと見せる",show_less:"表示を減らす",review:"レビュー",reviews:"レビュー一覧",verified:"確認済み",by:"によって",write_review:"レビューを残す",load_more:"もっと読み込む",based_on:"に基づく",ai_summary:"AI概要",be_first_review:"レビューを書くために最初にすること",work_time:"営業時間",day_off:"定休日",always_on:"24時間営業",closed:"閉店",open:"営業中",see_all:"すべて表示",monday:"月曜日",tuesday:"火曜日",wednesday:"水曜日",thursday:"木曜日",friday:"金曜日",saturday:"土曜日",sunday:"日曜日",no_reviews_yet:"最初のレビューを書く",reviews_on:"に関するレビュー",hide_reviews:"レビューを非表示",show_reviews:"レビューを表示",review_image:"レビュー画像",business_image:"ビジネス画像",image:"画像",previous_slide:"前のスライド",next_slide:"次のスライド",powered_by:"提供元"},yi={from:"来自",google_rating:"谷歌评分",show_more:"显示更多",show_less:"显示更少",review:"评论",reviews:"评论列表",verified:"已验证",by:"由",write_review:"发表评论",load_more:"装载更多",based_on:"基于",ai_summary:"AI摘要",be_first_review:"成为第一个写评论的人",work_time:"营业时间",day_off:"休息日",always_on:"24小时营业",closed:"关闭",open:"开放",see_all:"查看全部",monday:"星期一",tuesday:"星期二",wednesday:"星期三",thursday:"星期四",friday:"星期五",saturday:"星期六",sunday:"星期天",no_reviews_yet:"成为第一个评价的人",reviews_on:"关于的评论",hide_reviews:"隐藏评论",show_reviews:"显示评论",review_image:"评论图片",business_image:"商家图片",image:"图片",previous_slide:"上一张幻灯片",next_slide:"下一张幻灯片",powered_by:"技术支持"},$i={from:"od",google_rating:"Googlove ocene",show_more:"Pokaži več",show_less:"Pokaži manj",review:"pregled",reviews:"pregledi",verified:"Preverjeno",by:"od",write_review:"Pusti oceno",load_more:"Naloži več",based_on:"Temelji na",ai_summary:"Povzetek UI",be_first_review:"Bodite prvi, ki bo napisal pregled",work_time:"Odpiralni čas",day_off:"Zaprto",always_on:"Odprto 24 ur",closed:"Zaprto",open:"Odprto",see_all:"Poglej vse",monday:"Ponedeljek",tuesday:"Torek",wednesday:"Sreda",thursday:"Četrtek",friday:"Petek",saturday:"Sobota",sunday:"Nedelja",no_reviews_yet:"Bodite prvi, ki bo ocenil",reviews_on:"mnenj na",hide_reviews:"Skrij ocene",show_reviews:"Prikaži ocene",review_image:"Slika ocene",business_image:"Slika podjetja",image:"slika",previous_slide:"Prejšnji slajd",next_slide:"Naslednji slajd",powered_by:"Omogoča"},ki={from:"من",google_rating:"مراجعات جوجل",show_more:"أظهر المزيد",show_less:"عرض أقل",review:"مراجعة",reviews:"المراجعات",verified:"تم التحقق",by:"بواسطة",write_review:"ترك التعليق",load_more:"تحميل المزيد",based_on:"مرتكز على",ai_summary:"ملخص الذكاء الاصطناعي",be_first_review:"كن أول من يكتب مراجعة",work_time:"ساعات العمل",day_off:"يوم العطلة",always_on:"مفتوح 24 ساعة",closed:"مغلق",open:"مفتوح",see_all:"عرض الكل",monday:"الإثنين",tuesday:"الثلاثاء",wednesday:"الأربعاء",thursday:"الخميس",friday:"الجمعة",saturday:"السبت",sunday:"الأحد",no_reviews_yet:"كن أول من يقيم",reviews_on:"مراجعات حول",hide_reviews:"إخفاء المراجعات",show_reviews:"إظهار المراجعات",review_image:"صورة المراجعة",business_image:"صورة العمل",image:"صورة",previous_slide:"الشريحة السابقة",next_slide:"الشريحة التالية",powered_by:"مدعوم من"},Si={from:"tól",google_rating:"Google Vélemények",show_more:"Mutass többet",show_less:"Mutass kevesebbet",review:"felülvizsgálat",reviews:"vélemények",verified:"Ellenőrzött",by:"által",write_review:"Írjon véleményt",load_more:"Töltsön be többet",based_on:"Alapján",ai_summary:"MI-összefoglaló",be_first_review:"Legyen Ön az első, aki értékelést ír",work_time:"Nyitvatartási idő",day_off:"Zárva",always_on:"Non-stop nyitva",closed:"Zárva",open:"Nyitva",see_all:"Összes megtekintése",monday:"Hétfő",tuesday:"Kedd",wednesday:"Szerda",thursday:"Csütörtök",friday:"Péntek",saturday:"Szombat",sunday:"Vasárnap",no_reviews_yet:"Legyen Ön az első, aki értékelést ír",reviews_on:"vélemények itt",hide_reviews:"Vélemények elrejtése",show_reviews:"Vélemények megjelenítése",review_image:"Véleménykép",business_image:"Üzleti kép",image:"kép",previous_slide:"Előző dia",next_slide:"Következő dia",powered_by:"Működteti"},Ci={from:"alkaen",google_rating:"Google-arvostelut",show_more:"Näytä lisää",show_less:"Näytä vähemmän",review:"arvostelu",reviews:"arvostelut",verified:"Vahvistettu",by:"",write_review:"Jätä arvostelu",load_more:"Lataa lisää",based_on:"Perustuen",ai_summary:"Tekoäly-yhteenveto",be_first_review:"Kirjoita arvostelu ensimmäisenä",work_time:"Aukioloajat",day_off:"Suljettu",always_on:"Avoinna 24 tuntia",closed:"Suljettu",open:"Avoinna",see_all:"Näytä kaikki",monday:"Maanantai",tuesday:"Tiistai",wednesday:"Keskiviikko",thursday:"Torstai",friday:"Perjantai",saturday:"Lauantai",sunday:"Sunnuntai",no_reviews_yet:"Arvostele ensimmäisenä",reviews_on:"arvostelut täällä",hide_reviews:"Piilota arvostelut",show_reviews:"Näytä arvostelut",review_image:"Arvostelukuva",business_image:"Yrityskuva",image:"kuva",previous_slide:"Edellinen dia",next_slide:"Seuraava dia",powered_by:"Palvelun tarjoaa"},Ni={from:"nuo",google_rating:"Google atsiliepimai",show_more:"Rodyti daugiau",show_less:"Rodyti mažiau",review:"atsiliepimą",reviews:"atsiliepimai",verified:"Patvirtinta",by:"pateikė",write_review:"Palikite atsiliepimą",load_more:"Įkelti daugiau",based_on:"Remiantis",ai_summary:"Dirbtinio intelekto santrauka",be_first_review:"Būkite pirmas parašęs atsiliepimą",work_time:"Darbo valandos",day_off:"Nedirba",always_on:"Dirba visą parą",closed:"Uždaryta",open:"Atidaryta",see_all:"Žiūrėti viską",monday:"Pirmadienis",tuesday:"Antradienis",wednesday:"Trečiadienis",thursday:"Ketvirtadienis",friday:"Penktadienis",saturday:"Šeštadienis",sunday:"Sekmadienis",no_reviews_yet:"Būkite pirmas parašęs atsiliepimą",reviews_on:"atsiliepimai apie",hide_reviews:"Slėpti atsiliepimus",show_reviews:"Rodyti atsiliepimus",review_image:"Atsiliepimo nuotrauka",business_image:"Įmonės nuotrauka",image:"nuotrauka",previous_slide:"Ankstesnis skaidrė",next_slide:"Kita skaidrė",powered_by:"Sukurta naudojant"},Ri={from:"frá",google_rating:"Google umsagnir",show_more:"Sýndu meira",show_less:"Sýna minna",review:"endurskoðun",reviews:"umsagnir",verified:"Staðfest",by:"af",write_review:"Skildu eftir umsögn",load_more:"Hlaða meira",based_on:"Byggt á",ai_summary:"Gervigreindaryfirlit",be_first_review:"Vertu fyrst (ur) til að skrifa umsögn",work_time:"Opiðtímar",day_off:"Lokað",always_on:"Opið allan sólarhringinn",closed:"Lokað",open:"Opið",see_all:"Sjá allt",monday:"Mánudagur",tuesday:"Þriðjudagur",wednesday:"Miðvikudagur",thursday:"Fimmtudagur",friday:"Föstudagur",saturday:"Laugardagur",sunday:"Sunnudagur",no_reviews_yet:"Vertu fyrst(ur) til að gefa umsögn",reviews_on:"umsagnir á",hide_reviews:"Fela umsagnir",show_reviews:"Sýna umsagnir",review_image:"Umsagnarmynd",business_image:"Viðskiptamynd",image:"mynd",previous_slide:"Fyrri glæra",next_slide:"Næsta glæra",powered_by:"Knúið af"},Ti={from:"מאת",google_rating:"Google ביקורות",show_more:"להראות יותר",show_less:"הראי פחות",review:"סקירה",reviews:"ביקורות",verified:"מְאוּמָת",by:"לפי",write_review:"השאירו חוות דעת",load_more:"טען עוד",based_on:"מבוסס על",ai_summary:"סיכום בינה מלאכותית",be_first_review:"היה הראשון לכתוב ביקורת",work_time:"שעות פתיחה",day_off:"יום חופשי",always_on:"פתוח 24 שעות",closed:"סגור",open:"פתוח",see_all:"הצג הכל",monday:"יום שני",tuesday:"יום שלישי",wednesday:"יום רביעי",thursday:"יום חמישי",friday:"יום שישי",saturday:"יום שבת",sunday:"יום ראשון",no_reviews_yet:"היה הראשון לכתוב ביקורת",reviews_on:"ביקורות על",hide_reviews:"הסתר ביקורות",show_reviews:"הצג ביקורות",review_image:"תמונת ביקורת",business_image:"תמונת עסק",image:"תמונה",previous_slide:"שקופית קודמת",next_slide:"שקופית הבאה",powered_by:"מופעל על ידי"},Ai={from:"de la",google_rating:"Recenzii Google",show_more:"Arată mai multe",show_less:"Arată mai puțin",review:"recenzie",reviews:"recenzii",verified:"verificat",by:"de",write_review:"Lasă o recenzie",load_more:"Încărcați mai mult",based_on:"Bazat pe",ai_summary:"Rezumat AI",be_first_review:"Fii primul care scrie recenzia",work_time:"Ore de funcționare",day_off:"Închis",always_on:"Deschis 24 de ore",closed:"Închis",open:"Deschis",see_all:"Vezi tot",monday:"Luni",tuesday:"Marți",wednesday:"Miercuri",thursday:"Joi",friday:"Vineri",saturday:"Sâmbătă",sunday:"Duminică",no_reviews_yet:"Fii primul care scrie recenzia",reviews_on:"recenzii pe",hide_reviews:"Ascunde recenziile",show_reviews:"Afișează recenziile",review_image:"Imagine recenzie",business_image:"Imagine afacere",image:"imagine",previous_slide:"Slide-ul anterior",next_slide:"Slide-ul următor",powered_by:"Realizat de"},Ii={from:"od",google_rating:"Google recenze",show_more:"Zobrazit více",show_less:"Zobrazit méně",review:"recenze",reviews:"recenze",verified:"Ověřeno",by:"od",write_review:"Napsat recenzi",load_more:"Načíst více",based_on:"Na základě",ai_summary:"Shrnutí AI",be_first_review:"Buďte první, kdo napíše recenzi",work_time:"Otevírací doba",day_off:"Zavřeno",always_on:"Otevřeno 24 hodin",closed:"Zavřeno",open:"Otevřeno",see_all:"Zobrazit vše",monday:"Pondělí",tuesday:"Úterý",wednesday:"Středa",thursday:"Čtvrtek",friday:"Pátek",saturday:"Sobota",sunday:"Neděle",no_reviews_yet:"Buďte první, kdo napíše recenzi",reviews_on:"recenze na",hide_reviews:"Skrýt recenze",show_reviews:"Zobrazit recenze",review_image:"Obrázek recenze",business_image:"Obrázek firmy",image:"obrázek",previous_slide:"Předchozí snímek",next_slide:"Další snímek",powered_by:"Poháněno"},Li={from:"no",google_rating:"Google atsauksmes",show_more:"Rādīt vairāk",show_less:"Rādīt mazāk",review:"atsauksme",reviews:"atsauksmes",verified:"Pārbaudīts",by:"autors",write_review:"Atstāt atsauksmi",load_more:"Ielādēt vairāk",based_on:"Balstīts uz",ai_summary:"MI kopsavilkums",be_first_review:"Esi pirmais, kurš uzraksta atsauksmi",work_time:"Darba laiks",day_off:"Slēgts",always_on:"Atvērts visu diennakti",closed:"Slēgts",open:"Atvērts",see_all:"Skatīt visu",monday:"Pirmdiena",tuesday:"Otrdiena",wednesday:"Trešdiena",thursday:"Ceturtdiena",friday:"Piektdiena",saturday:"Sestdiena",sunday:"Svētddiena",no_reviews_yet:"Esi pirmais, kurš uzraksta atsauksmi",reviews_on:"atsauksmes par",hide_reviews:"Paslēpt atsauksmes",show_reviews:"Rādīt atsauksmes",review_image:"Atsauksmes attēls",business_image:"Uzņēmuma attēls",image:"attēls",previous_slide:"Iepriekšējā slaids",next_slide:"Nākamais slaids",powered_by:"Darbina"},zi={from:"fra",google_rating:"Anmeldelser på Google",show_more:"Vis mer",show_less:"Vis mindre",review:"anmeldelse",reviews:"anmeldelser",verified:"Bekreftet",by:"av",write_review:"Legg igjen en anmeldelse",load_more:"Last mer",based_on:"Basert på",ai_summary:"AI-sammendrag",be_first_review:"Bli den første til å skrive en anmeldelse",work_time:"Åpningstider",day_off:"Stengt",always_on:"Åpent 24 timer",closed:"Stengt",open:"Åpen",see_all:"Se alle",monday:"Mandag",tuesday:"Tirsdag",wednesday:"Onsdag",thursday:"Torsdag",friday:"Fredag",saturday:"Lørdag",sunday:"Søndag",no_reviews_yet:"Vær den første til å anmelde",reviews_on:"anmeldelser om",hide_reviews:"Skjul anmeldelser",show_reviews:"Vis anmeldelser",review_image:"Anmeldelsesbilde",business_image:"Bedriftsbilde",image:"bilde",previous_slide:"Forrige lysbilde",next_slide:"Neste lysbilde",powered_by:"Drevet av"},Mi={from:"od",google_rating:"Google recenzije",show_more:"Prikaži više",show_less:"Prikaži manje",review:"recenzija",reviews:"recenzije",verified:"Verificirano",by:"od",write_review:"Ostavite recenziju",load_more:"Učitaj više",based_on:"Na temelju",ai_summary:"AI sažetak",be_first_review:"Budite prvi koji će napisati recenziju",work_time:"Radno vrijeme",day_off:"Zatvoreno",always_on:"Otvoreno 24 sata",closed:"Zatvoreno",open:"Otvoreno",see_all:"Pogledaj sve",monday:"Ponedjeljak",tuesday:"Utorak",wednesday:"Srijeda",thursday:"Četvrtak",friday:"Petak",saturday:"Subota",sunday:"Nedjelja",no_reviews_yet:"Budite prvi koji će ocijeniti",reviews_on:"recenzije na",hide_reviews:"Sakrij recenzije",show_reviews:"Prikaži recenzije",review_image:"Slika recenzije",business_image:"Slika tvrtke",image:"slika",previous_slide:"Prethodni slajd",next_slide:"Sljedeći slajd",powered_by:"Pokreće"},ji={from:"од",google_rating:"Google рецензије",show_more:"Прикажи више",show_less:"Прикажи мање",review:"рецензија",reviews:"рецензије",verified:"Верификовано",by:"од",write_review:"Оставите рецензију",load_more:"Учитај више",based_on:"На основу",ai_summary:"AI резиме",be_first_review:"Будите први који ће написати рецензију",work_time:"Радно време",day_off:"Затворено",always_on:"Отворено 24 сата",closed:"Затворено",open:"Отворено",see_all:"Погледај све",monday:"Понедељак",tuesday:"Уторак",wednesday:"Среда",thursday:"Четвртак",friday:"Петак",saturday:"Субота",sunday:"Недеља",no_reviews_yet:"Будите први који ће оценити",reviews_on:"рецензије на",hide_reviews:"Сакриј рецензије",show_reviews:"Прикажи рецензије",review_image:"Слика рецензије",business_image:"Слика фирме",image:"слика",previous_slide:"Претходни слајд",next_slide:"Следећи слајд",powered_by:"Покреће"},Pi={from:"dari",google_rating:"Ulasan Google",show_more:"Tampilkan lebih banyak",show_less:"Tampilkan lebih sedikit",review:"ulasan",reviews:"ulasan",verified:"Terverifikasi",by:"oleh",write_review:"Tulis ulasan",load_more:"Muat lebih banyak",based_on:"Berdasarkan",ai_summary:"Ringkasan AI",be_first_review:"Jadilah yang pertama menulis ulasan",work_time:"Jam buka",day_off:"Tutup",always_on:"Buka 24 jam",closed:"Tutup",open:"Buka",see_all:"Lihat semua",monday:"Senin",tuesday:"Selasa",wednesday:"Rabu",thursday:"Kamis",friday:"Jumat",saturday:"Sabtu",sunday:"Minggu",no_reviews_yet:"Jadilah yang pertama mengulas",reviews_on:"ulasan tentang",hide_reviews:"Sembunyikan ulasan",show_reviews:"Tampilkan ulasan",review_image:"Gambar ulasan",business_image:"Gambar bisnis",image:"gambar",previous_slide:"Slide sebelumnya",next_slide:"Slide berikutnya",powered_by:"Didukung oleh"},Ei={from:"출처",google_rating:"Google 리뷰",show_more:"더 보기",show_less:"접기",review:"리뷰",reviews:"리뷰",verified:"인증됨",by:"작성자",write_review:"리뷰 작성",load_more:"더 불러오기",based_on:"기준",ai_summary:"AI 요약",be_first_review:"첫 번째 리뷰를 작성해 주세요",work_time:"영업시간",day_off:"휴무",always_on:"24시간 영업",closed:"영업 종료",open:"영업 중",see_all:"모두 보기",monday:"월요일",tuesday:"화요일",wednesday:"수요일",thursday:"목요일",friday:"금요일",saturday:"토요일",sunday:"일요일",no_reviews_yet:"첫 번째 리뷰를 작성해 주세요",reviews_on:"에 대한 리뷰",hide_reviews:"리뷰 숨기기",show_reviews:"리뷰 보기",review_image:"리뷰 이미지",business_image:"비즈니스 이미지",image:"이미지",previous_slide:"이전 슬라이드",next_slide:"다음 슬라이드",powered_by:"제공"},Oi={from:"จาก",google_rating:"รีวิว Google",show_more:"แสดงเพิ่มเติม",show_less:"แสดงน้อยลง",review:"รีวิว",reviews:"รีวิว",verified:"ยืนยันแล้ว",by:"โดย",write_review:"เขียนรีวิว",load_more:"โหลดเพิ่มเติม",based_on:"จากทั้งหมด",ai_summary:"สรุปโดย AI",be_first_review:"เป็นคนแรกที่เขียนรีวิว",work_time:"เวลาทำการ",day_off:"ปิดทำการ",always_on:"เปิด 24 ชั่วโมง",closed:"ปิด",open:"เปิด",see_all:"ดูทั้งหมด",monday:"วันจันทร์",tuesday:"วันอังคาร",wednesday:"วันพุธ",thursday:"วันพฤหัสบดี",friday:"วันศุกร์",saturday:"วันเสาร์",sunday:"วันอาทิตย์",no_reviews_yet:"เป็นคนแรกที่รีวิว",reviews_on:"รีวิวบน",hide_reviews:"ซ่อนรีวิว",show_reviews:"แสดงรีวิว",review_image:"รูปรีวิว",business_image:"รูปธุรกิจ",image:"รูปภาพ",previous_slide:"สไลด์ก่อนหน้า",next_slide:"สไลด์ถัดไป",powered_by:"ขับเคลื่อนโดย"},Bi={from:"từ",google_rating:"Đánh giá Google",show_more:"Xem thêm",show_less:"Thu gọn",review:"đánh giá",reviews:"đánh giá",verified:"Đã xác minh",by:"bởi",write_review:"Viết đánh giá",load_more:"Tải thêm",based_on:"Dựa trên",ai_summary:"Tóm tắt AI",be_first_review:"Hãy là người đầu tiên viết đánh giá",work_time:"Giờ mở cửa",day_off:"Đóng cửa",always_on:"Mở cửa 24 giờ",closed:"Đóng cửa",open:"Mở cửa",see_all:"Xem tất cả",monday:"Thứ Hai",tuesday:"Thứ Ba",wednesday:"Thứ Tư",thursday:"Thứ Năm",friday:"Thứ Sáu",saturday:"Thứ Bảy",sunday:"Chủ Nhật",no_reviews_yet:"Hãy là người đầu tiên đánh giá",reviews_on:"đánh giá về",hide_reviews:"Ẩn đánh giá",show_reviews:"Hiện đánh giá",review_image:"Hình ảnh đánh giá",business_image:"Hình ảnh doanh nghiệp",image:"hình ảnh",previous_slide:"Slide trước",next_slide:"Slide tiếp theo",powered_by:"Được hỗ trợ bởi"},Di={from:"dan",google_rating:"Google sharhlari",show_more:"Ko'proq ko'rsatish",show_less:"Kamroq ko'rsatish",review:"sharh",reviews:"sharhlar",verified:"Tasdiqlangan",by:"tomonidan",write_review:"Sharh qoldiring",load_more:"Ko'proq yuklash",based_on:"Asosida",ai_summary:"AI xulosasi",be_first_review:"Birinchi bo'lib sharh yozing",work_time:"Ish vaqti",day_off:"Dam olish kuni",always_on:"24 soat ochiq",closed:"Yopiq",open:"Ochiq",see_all:"Hammasini ko'rish",monday:"Dushanba",tuesday:"Seshanba",wednesday:"Chorshanba",thursday:"Payshanba",friday:"Juma",saturday:"Shanba",sunday:"Yakshanba",no_reviews_yet:"Birinchi bo'lib baholang",reviews_on:"haqida sharhlar",hide_reviews:"Sharhlarni yashirish",show_reviews:"Sharhlarni ko'rsatish",review_image:"Sharh rasmi",business_image:"Biznes rasmi",image:"rasm",previous_slide:"Oldingi slayd",next_slide:"Keyingi slayd",powered_by:"Ishlab chiqaruvchi"},Hi={from:"alates",google_rating:"Google'i arvustused",show_more:"Näita rohkem",show_less:"Näita vähem",review:"arvustus",reviews:"arvustused",verified:"Kinnitatud",by:"autor",write_review:"Jäta arvustus",load_more:"Laadi rohkem",based_on:"Põhineb",ai_summary:"Tehisintellekti kokkuvõte",be_first_review:"Ole esimene, kes kirjutab arvustuse",work_time:"Lahtiolekuajad",day_off:"Suletud",always_on:"Avatud ööpäevaringselt",closed:"Suletud",open:"Avatud",see_all:"Vaata kõiki",monday:"Esmaspäev",tuesday:"Teisipäev",wednesday:"Kolmapäev",thursday:"Neljapäev",friday:"Reede",saturday:"Laupäev",sunday:"Pühapäev",no_reviews_yet:"Ole esimene, kes hindab",reviews_on:"arvustused kohta",hide_reviews:"Peida arvustused",show_reviews:"Näita arvustused",review_image:"Arvustuse pilt",business_image:"Ettevõtte pilt",image:"pilt",previous_slide:"Eelmine slaid",next_slide:"Järgmine slaid",powered_by:"Teenust pakub"},Fi={from:"od",google_rating:"Recenzie Google",show_more:"Zobraziť viac",show_less:"Zobraziť menej",review:"recenzia",reviews:"recenzií",verified:"Overené",by:"od",write_review:"Napísať recenziu",load_more:"Načítať viac",based_on:"Na základe",ai_summary:"Zhrnutie AI",be_first_review:"Buďte prvý, kto napíše recenziu",work_time:"Otváracie hodiny",day_off:"Zatvorené",always_on:"Otvorené 24 hodín",closed:"Zatvorené",open:"Otvorené",see_all:"Zobraziť všetko",monday:"Pondelok",tuesday:"Utorok",wednesday:"Streda",thursday:"Štvrtok",friday:"Piatok",saturday:"Sobota",sunday:"Nedeľa",no_reviews_yet:"Buďte prvý, kto napíše recenziu",reviews_on:"recenzií na",hide_reviews:"Skryť recenzie",show_reviews:"Zobraziť recenzie",review_image:"Obrázok recenzie",business_image:"Obrázok firmy",image:"obrázok",previous_slide:"Predchádzajúci snímok",next_slide:"Ďalší snímok",powered_by:"Poháňané"},Ui={en:ni,es:ai,pt:si,de:li,fr:di,it:ci,nl:pi,da:ui,sv:hi,no:mi,pl:gi,tr:wi,ru:fi,uk:vi,bg:xi,el:bi,ja:_i,zh:yi,sl:$i,ar:ki,hu:Si,fi:Ci,lt:Ni,is:Ri,he:Ti,ro:Ai,cs:Ii,lv:Li,nb:zi,hr:Mi,sr:ji,id:Pi,ko:Ei,th:Oi,vi:Bi,uz:Di,et:Hi,sk:Fi},Vi=Object.freeze(Object.defineProperty({__proto__:null,ar:ki,bg:xi,cs:Ii,da:ui,de:li,default:Ui,el:bi,en:ni,es:ai,et:Hi,fi:Ci,fr:di,he:Ti,hr:Mi,hu:Si,id:Pi,is:Ri,it:ci,ja:_i,ko:Ei,lt:Ni,lv:Li,nb:zi,nl:pi,no:mi,pl:gi,pt:si,ro:Ai,ru:fi,sk:Fi,sl:$i,sr:ji,sv:hi,th:Oi,tr:wi,uk:vi,uz:Di,vi:Bi,zh:yi},Symbol.toStringTag,{value:"Module"}));function Gi(){return Shopify.locale}const Wi=F(null),Zi=({children:e,defaultLocale:t="en"})=>{const i=Gi();return V(Wi.Provider,{value:{t:e=>{let o=i;if(o){const e=ye(o);o=e in Vi?e:void 0}return(Vi[o]||Vi[t])[e]??""},locale:i||t},children:e})},qi=()=>{const e=ce(Wi);if(!e)throw new Error("useTranslation must be used within a LocalizationProvider");return e},Ki=Ee("img")`
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
    height: 100%;
`,Xi=({src:e,className:t,alt:i})=>V(Ki,{className:t,width:"100%",height:"100%",loading:"lazy",alt:i,src:e}),Yi=Ee("button")`
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
`,Ji=({className:e,children:t,content:i,...o})=>V(Yi,{"aria-label":i,"data-content":i,type:"button",className:e,...o,children:t}),Qi=Ee("header")`
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
    padding: 16px;
    border-radius: 24px;
    background: ${e=>e.theme.background};
    ${e=>e.$hasSolidShadow&&`\n            border-right: 8px solid ${e.theme.solidShadow};\n            border-bottom: 8px solid ${e.theme.solidShadow};\n        `};
`,eo=Ee("div")`
    max-width: 100%;
    min-width: 0;
`,to=({contentHeader:e,actionButton:t,solidShadow:i,className:o})=>V(Qi,{$hasSolidShadow:i,className:Bt(o,"reputon-reviews-head"),children:[V(eo,{children:e}),t]}),io=Ee(to)`
    @container wrapper (max-width:${e=>e.theme.media.mobile}px) {
        margin-left: 0px;
        margin-right: 0px;
        flex-direction: column;
        align-items: start;
    }
`,oo=Ee(Xi)`
    width: 50px;
    height: 50px;
    min-width: 50px;
    border-radius: 100px;
`,ro=Ee(qt.Content)`
    gap: 2px;
`,no=Ee(qt.ReviewsText)`
    font-size: 14px;
    line-height: 19px;
    margin-top: 0;
    font-weight: 500px;
    color: ${e=>e.theme.noReviewsWidget.colorDescription};
`,ao=Ee(qt.Name)`
    color: ${e=>e.theme.noReviewsWidget.colorName};
    & a:hover {
        text-decoration: underline;
    }
`,so=Ee(qt.Rating)`
    color: ${e=>e.theme.noReviewsWidget.colorIcons};
`,lo=Ee(Ji)`
    color: ${e=>e.theme.noReviewsWidget.colorLeaveReview};
    background: ${e=>e.theme.noReviewsWidget.backgroundLeaveReview};
    align-self: center;
    @container wrapper (max-width:${e=>e.theme.media.mobile}px) {
        width: 100%;
        text-align: center;
    }
`,co=Ee(ri)`
    @container wrapper (max-width:${e=>e.theme.media.mobile}px) {
        width: 100%;
    }
`,po=Ee("div")`
    width: 17px;
    height: 17px;
    color: ${e=>e.theme.hoverStarsColor};
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}
`,uo=Ee(qt.RatingIcons)`
    gap: 4px;
    color: ${e=>e.theme.noReviewsWidget.colorIcons};
`,ho=({writeReviewUrl:e,imageUrl:t,url:i,name:o,ratingType:r,emojiType:n,solidShadow:a})=>{const{t:s}=qi(),{handleMouseEnterIcon:l,handleMouseLeaveIcon:d,icons:c}=Et();return V(io,{solidShadow:a,actionButton:V(co,{url:e,label:s("write_review"),children:V(lo,{className:"reputon-bt reputon-link reputon-leave-review editable",content:s("write_review")})}),contentHeader:V(qt,{children:V(qt.Container,{icon:t?V(qt.Icon,{children:V(ri,{url:i,label:`${o} ${s("reviews")}`,children:V(oo,{src:t,alt:s("business_image")})})}):void 0,content:V(ro,{name:V(ao,{children:V(ri,{inherit:!0,url:i,label:`${o} ${s("reviews")}`,children:o})}),rating:V(ri,{url:e,label:s("write_review"),children:V(so,{children:V(uo,{children:c.map((e,t)=>V(po,{$ratingType:r,onMouseEnter:l(t),onMouseLeave:d,children:V(ii,{ratingType:r,emojiType:n,fill:e})},t))})})}),reviewsText:V(no,{children:s("no_reviews_yet")||"Be the first to review"})})})})})},mo=Ee(to)`
    padding: 8px;
    ${e=>e.solidShadow&&`\n            border-right: 4px solid ${e.theme.solidShadow};\n            border-bottom: 4px solid ${e.theme.solidShadow};\n        `};
    @container wrapper (max-width:${e=>e.theme.media.mobile}px) {
        margin-left: 0px;
        margin-right: 0px;
        flex-direction: column;
        align-items: start;
    }
`,go=Ee(qt.Icon)`
    width: 32px;
    height: 32px;
    min-width: 32px;
`,wo=Ee(Xi)`
    border-radius: 100px;
`,fo=Ee(qt.Content)`
    gap: 2px;
`,vo=Ee(qt.ReviewsText)`
    font-size: 10px;
    line-height: 14px;
    margin-top: 0;
    font-weight: 500;
    color: ${e=>e.theme.noReviewsWidget.colorDescription};
`,xo=Ee(qt.Name)`
    font-size: 12px;
    line-height: 16px;
    height: 16px;
    color: ${e=>e.theme.noReviewsWidget.colorName};
    & a:hover {
        text-decoration: underline;
    }
`,bo=Ee(qt.Rating)`
    color: ${e=>e.theme.noReviewsWidget.colorIcons};
`,_o=Ee(Ji)`
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
`,yo=Ee(ri)`
    @container wrapper (max-width:${e=>e.theme.media.mobile}px) {
        width: 100%;
    }
`,$o=Ee("div")`
    color: ${e=>e.theme.hoverStarsColor};
    height: 12px;
    line-height: 12px;
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}
`,ko=Ee(qt.RatingIcons)`
    gap: 2px;
    height: 16px;
    color: ${e=>e.theme.summary.noReviewsStarsColor};
`,So=Ee(ii)`
    width: 12px;
    height: 12px;
`,Co=({writeReviewUrl:e,imageUrl:t,url:i,name:o,ratingType:r,emojiType:n,solidShadow:a})=>{const{t:s}=qi(),{handleMouseEnterIcon:l,handleMouseLeaveIcon:d,icons:c}=Et();return V(mo,{solidShadow:a,actionButton:V(yo,{url:e,label:s("write_review"),children:V(_o,{className:"reputon-bt reputon-link reputon-leave-review editable",content:s("write_review")})}),contentHeader:V(qt,{children:V(qt.Container,{icon:t?V(ri,{url:i,label:`${o} ${s("reviews")}`,children:V(go,{children:V(wo,{src:t,alt:s("business_image")})})}):void 0,content:V(fo,{name:V(xo,{children:V(ri,{inherit:!0,url:i,label:`${o} ${s("reviews")}`,children:o})}),rating:V(ri,{url:e,label:s("write_review"),children:V(bo,{children:V(ko,{children:c.map((e,t)=>V($o,{$ratingType:r,onMouseEnter:l(t),onMouseLeave:d,children:V(So,{ratingType:r,emojiType:n,fill:e})},t))})})}),reviewsText:V(vo,{children:s("no_reviews_yet")||"Be the first to review"})})})})})},No=({isCompact:e,...t})=>V(e?Co:ho,{...t}),Ro=Ee("div")`
    --scale: 1;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    font-family: ${({theme:e})=>e.fontFamily};
    border-radius: 2px;
    margin: 0 auto;
    line-height: normal;
    padding: ${({parallax:e,$noPadding:t})=>e||t?"0px":"15px 8px"};
    transform: scale(var(--scale));
    transform-origin: ${e=>`${"right"!==e.positionX?"left":"right"} ${e.positionY}`};
    ${e=>e.parallax&&"\n        position: fixed;\n        z-index: 999;\n      "};
    ${e=>"center"===e.positionX?"left: 50%; transform: scale(var(--scale)) translate(-50%);":e.positionX?`${e.positionX}: 15px;`:""};
    ${e=>e.positionY?`${e.positionY}: 15px;`:""};
    @media (max-width: ${e=>e.theme.media.mobile}px) {
        ${e=>e.parallax&&"\n        --scale: 0.7;\n      "};
    }
`,To=({children:e,className:t,noPadding:i=!1})=>{const{isSticky:o,vertical:r,horizontal:n}=Su("wrapper"),{widgetId:a}=ce(jt),{show:s}=(()=>{const{isSticky:e}=Su(Ye),[t,i]=ne(()=>"hidden"!==window.sessionStorage.getItem(Ge));return{hideWidgets:()=>{window.sessionStorage.setItem(Ge,"hidden"),i(!1)},show:!e||t}})();return(!o||s)&&V(Ro,{id:a,parallax:o,positionY:o?r:void 0,positionX:o?n:void 0,className:t,$noPadding:i,children:e})},Ao=5e3,Io={TOP:"top",IN_CARD:"inCard",LEFT:"left",NONE:"none"},Lo={CAROUSEL:"carousel",ROTATOR:"rotator",CAROUSEL_COMPACT:"carousel_compact"},zo="carousel-fluid",Mo="carousel-fluid-with-header",jo="carousel-fluid-with-left",Po="carousel-fluid-with-in-card",Eo="rotator",Oo="rotator-with-header",Bo="carousel",Do="carousel-header-in-card",Ho="carousel-header-top",Fo="carousel-header-left",Uo="carousel-compact",Vo="carousel-compact-in-card",Go="carousel-compact-top",Wo="carousel-compact-left",Zo="carousel-compact-fluid",qo="carousel-compact-fluid-in-card",Ko="carousel-compact-fluid-top",Xo="carousel-compact-fluid-left",Yo="header",Jo="inCard",Qo="none",er=({className:e})=>V("svg",{fill:"none",viewBox:"0 0 56 19",className:e,children:[V("g",{"clip-path":"url(#clip0_1099_1358)",children:[V("path",{d:"M23.8307 9.90631C23.8307 12.5354 21.7739 14.4728 19.2498 14.4728C16.7257 14.4728 14.6689 12.5354 14.6689 9.90631C14.6689 7.25867 16.7257 5.33984 19.2498 5.33984C21.7739 5.33984 23.8307 7.25867 23.8307 9.90631ZM21.8254 9.90631C21.8254 8.26337 20.6334 7.13926 19.2498 7.13926C17.8663 7.13926 16.6742 8.26337 16.6742 9.90631C16.6742 11.5328 17.8663 12.6734 19.2498 12.6734C20.6334 12.6734 21.8254 11.5307 21.8254 9.90631Z",fill:"#EA4335"}),V("path",{d:"M33.7125 9.90631C33.7125 12.5354 31.6558 14.4728 29.1317 14.4728C26.6075 14.4728 24.5508 12.5354 24.5508 9.90631C24.5508 7.26073 26.6075 5.33984 29.1317 5.33984C31.6558 5.33984 33.7125 7.25867 33.7125 9.90631ZM31.7073 9.90631C31.7073 8.26337 30.5152 7.13926 29.1317 7.13926C27.7481 7.13926 26.5561 8.26337 26.5561 9.90631C26.5561 11.5328 27.7481 12.6734 29.1317 12.6734C30.5152 12.6734 31.7073 11.5307 31.7073 9.90631Z",fill:"#FBBC05"}),V("path",{d:"M43.1838 5.61573V13.814C43.1838 17.1863 41.195 18.5637 38.8438 18.5637C36.6306 18.5637 35.2985 17.0834 34.7962 15.8728L36.542 15.146C36.8529 15.8893 37.6147 16.7663 38.8417 16.7663C40.3467 16.7663 41.2794 15.8378 41.2794 14.0898V13.4331H41.2094C40.7606 13.9869 39.8959 14.4707 38.8047 14.4707C36.5215 14.4707 34.4297 12.4819 34.4297 9.92278C34.4297 7.34514 36.5215 5.33984 38.8047 5.33984C39.8938 5.33984 40.7585 5.82367 41.2094 6.36102H41.2794V5.61779H43.1838V5.61573ZM41.4215 9.92278C41.4215 8.31484 40.3488 7.13926 38.9838 7.13926C37.6003 7.13926 36.4412 8.31484 36.4412 9.92278C36.4412 11.5143 37.6003 12.6734 38.9838 12.6734C40.3488 12.6734 41.4215 11.5143 41.4215 9.92278Z",fill:"#4285F4"}),V("path",{d:"M46.3231 0.8125V14.1949H44.3672V0.8125H46.3231Z",fill:"#34A853"}),V("path",{d:"M53.9457 11.4113L55.5022 12.449C54.9998 13.1922 53.7893 14.4728 51.6975 14.4728C49.1034 14.4728 47.166 12.4675 47.166 9.90631C47.166 7.19073 49.1198 5.33984 51.4731 5.33984C53.8428 5.33984 55.0019 7.22573 55.3807 8.24484L55.5887 8.76367L49.4843 11.2919C49.9516 12.2081 50.6784 12.6754 51.6975 12.6754C52.7187 12.6754 53.4269 12.1731 53.9457 11.4113ZM49.1548 9.76837L53.2354 8.07396C53.011 7.50367 52.3357 7.10631 51.541 7.10631C50.5219 7.10631 49.1034 8.00602 49.1548 9.76837Z",fill:"#EA4335"}),V("path",{d:"M7.26569 8.72179V6.78444H13.7942C13.858 7.12209 13.891 7.5215 13.891 7.95385C13.891 9.40738 13.4936 11.2047 12.213 12.4853C10.9675 13.7824 9.37598 14.4741 7.26775 14.4741C3.3601 14.4741 0.0742188 11.2912 0.0742188 7.38356C0.0742188 3.47591 3.3601 0.292969 7.26775 0.292969C9.42951 0.292969 10.9695 1.1412 12.1266 2.24679L10.7595 3.61385C9.92981 2.83562 8.80569 2.23032 7.26569 2.23032C4.41216 2.23032 2.1804 4.53003 2.1804 7.38356C2.1804 10.2371 4.41216 12.5368 7.26569 12.5368C9.11657 12.5368 10.1707 11.7936 10.846 11.1183C11.3936 10.5706 11.7539 9.78826 11.896 8.71973L7.26569 8.72179Z",fill:"#4285F4"})]}),V("defs",{children:V("clipPath",{id:"clip0_1099_1358",children:V("rect",{width:"56",height:"18.9412",fill:"white",transform:"translate(0 0.195312)"})})})]}),tr=Ee(er)`
    min-width: ${({$isWide:e})=>e?"56px":"27px"};
    margin-left: ${({$isWide:e})=>e&&"4px"};
    height: ${({$isWide:e})=>e?"19px":"9px"};
    max-height: 100%;
    visibility: visible;
    filter: ${e=>"black"===e.theme.theme?"brightness(100)":""};
`,ir=({value:e,locale:t})=>new Intl.NumberFormat(t,{minimumFractionDigits:0,maximumFractionDigits:0}).format(e),or=Ee(to)`
    margin: 0;
    @container wrapper (max-width:${Ze}px) {
        margin: 0px;
        flex-direction: column;
        align-items: normal;
    }
`,rr=Ee(Xi)`
    border-radius: 100px;
`,nr=Ee(qt.ReviewsText)`
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
`,ar=Ee(({$isEditable:e,$content:t,...i})=>V(qt.Name,{...i,isEditable:e,content:t}))`
    color: ${e=>e.theme.widgets.carousel.colorSellerName};
    & a:hover {
        text-decoration: underline;
    }
`,sr=Ee(qt.Rating)`
    color: ${e=>e.theme.widgets.carousel.colorSellerStars};
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}

    ${({$ratingType:e,theme:t})=>"emoji"===e&&`\n            color: ${t.widgets.carousel.colorSellerName};\n        `}
`,lr=Ee(Ji)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    align-self: center;
    @container wrapper (max-width:${Ze}px) {
        width: 100%;
        text-align: center;
    }
`,dr=Ee(ri)`
    @container wrapper (max-width:${Ze}px) {
        width: 100%;
    }
`,cr=({imageUrl:e,url:t,name:i,rating:o,ratingIcons:r,reviewsNumber:n,writeReviewUrl:a,options:s,isEditableName:l})=>{const{t:d,locale:c}=qi(),{hasSolidShadow:p,writeReviewEnabled:u,emojiType:h,ratingType:m}=s;return V(or,{solidShadow:p,actionButton:u&&a&&V(dr,{label:d("write_review"),url:a,children:V(lr,{label:d("write_review"),className:"reputon-bt reputon-link reputon-leave-review editable",content:d("write_review")})}),contentHeader:V(qt,{children:V(qt.Container,{icon:e?V(ri,{url:t,label:`${i} ${d("reviews")}`,children:V(qt.Icon,{children:V(rr,{src:e,alt:d("business_image")})})}):void 0,content:V(qt.Content,{name:V(ri,{inherit:!0,url:t,label:`${i} ${d("reviews")}`,children:V(ar,{$isEditable:l,$content:i,children:i})}),rating:V(ri,{url:t,label:`${i} ${d("reviews")}`,children:V(sr,{$ratingType:m,children:[V(qt.Count,{children:_e(o)}),V(qt.RatingIcons,{children:r?.map((e,t)=>V(ii,{ratingType:m,emojiType:h,fill:e},t))})]})}),reviewsText:V(nr,{children:[V(ir,{value:n,locale:c})," ",d("reviews_on"),V(tr,{$isWide:!0})]})})})})})},pr=Ee(to)`
    margin: 0;
    padding: 8px;
    ${e=>e.solidShadow&&`\n            border-right: 4px solid ${e.theme.solidShadow};\n            border-bottom: 4px solid ${e.theme.solidShadow};\n        `};
    @container wrapper (max-width:${439}px) {
        margin: 0px;
        flex-direction: column;
        align-items: normal;
    }
`,ur=Ee(qt.Icon)`
    width: 32px;
    height: 32px;
    min-width: 32px;
`,hr=Ee(Xi)`
    border-radius: 100px;
`,mr=Ee(qt.Content)`
    gap: 2px;
`,gr=Ee(qt.ReviewsText)`
    font-size: 10px;
    line-height: 14px;
    font-weight: 500;
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
`,wr=Ee(({$isEditable:e,$content:t,...i})=>V(qt.Name,{...i,isEditable:e,content:t}))`
    font-size: 12px;
    line-height: 16px;
    height: 16px;
    color: ${e=>e.theme.widgets.carousel.colorSellerName};
    & a:hover {
        text-decoration: underline;
    }
`,fr=Ee(qt.Rating)`
    align-items: center;
    color: ${e=>e.theme.widgets.carousel.colorSellerStars};
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}

    ${({$ratingType:e,theme:t})=>"emoji"===e&&`\n            color: ${t.widgets.carousel.colorSellerName};\n        `}
`,vr=Ee(qt.Count)`
    font-size: 14px;
    line-height: 16px;
    height: 16px;
`,xr=Ee(qt.RatingIcons)`
    height: 12px;
`,br=Ee(ii)`
    width: 12px;
    height: 12px;
`,_r=Ee(Ji)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    align-self: center;
    font-size: 12px;
    padding: 10px 16px;
    @container wrapper (max-width: ${439}px) {
        width: 100%;
        text-align: center;
    }
`,yr=Ee(ri)`
    @container wrapper (max-width:${439}px) {
        width: 100%;
    }
`,$r=Ee(tr)`
    height: 16px;
    min-width: 48px;
`,kr=({imageUrl:e,url:t,name:i,rating:o,ratingIcons:r,reviewsNumber:n,writeReviewUrl:a,options:s,isEditableName:l})=>{const{t:d,locale:c}=qi(),{hasSolidShadow:p,writeReviewEnabled:u,emojiType:h,ratingType:m}=s;return V(pr,{solidShadow:p,actionButton:u&&a&&V(yr,{label:d("write_review"),url:a,children:V(_r,{label:d("write_review"),className:"reputon-bt reputon-link reputon-leave-review editable",content:d("write_review")})}),contentHeader:V(qt,{children:V(qt.Container,{icon:e?V(ri,{url:t,label:`${i} ${d("reviews")}`,children:V(ur,{children:V(hr,{src:e,alt:d("business_image")})})}):void 0,content:V(mr,{name:V(ri,{inherit:!0,url:t,label:`${i} ${d("reviews")}`,children:V(wr,{$isEditable:l,$content:i,children:i})}),rating:V(ri,{url:t,label:`${i} ${d("reviews")}`,children:V(fr,{$ratingType:m,children:[V(vr,{children:_e(o)}),V(xr,{children:r?.map((e,t)=>V(br,{ratingType:m,emojiType:h,fill:e},t))})]})}),reviewsText:V(gr,{children:[V(ir,{value:n,locale:c})," ",d("reviews_on"),V($r,{$isWide:!0})]})})})})})},Sr=({isCompact:e,...t})=>V(e?kr:cr,{...t});function Cr({summaryCard:e,reviews:t,logoCard:i}){const o=[];return t&&0!==t.length?(i&&o.push("logoCard"),e&&o.push("summaryCard"),[...o,...t]):[]}const Nr=(e,t)=>t/5*(11-e),Rr=(e,t)=>{const i=le(()=>(e=>{if(!e)return[];const t=e?.reduce((e,t)=>t?.images?[...e,...t.images]:e,[]);return t})(e),[e]),o=le(()=>(e=>{const t=[];for(;e.length>=4&&t.length<4||e.length<4&&t.length<e.length;){const i=e[Math.floor(Math.random()*e.length)];t.includes(i)||t.push(i)}return t})(i),[i]),r=le(()=>t?[...o,...i]:[...i],[o,i,t]);return{summaryImages:o,aggregatedImages:r}},Tr=(e,t)=>{const[i,o]=ne(!1),[r,n]=ne(null),a=le(()=>r?.content?r?.isAi?e?.findIndex(e=>e.thumbnailUrl===r.content):e?.findLastIndex(e=>e.thumbnailUrl===r?.content):-1,[r,e]);return{open:i,setFullScreenImageOptions:(e,t=!1)=>{o(!0),n({content:e,isAi:t})},handleClosePopup:e=>{o(!1),e&&e()},popupContent:r,initialIndex:a}},Ar=300,Ir=(e,t)=>(e%t+t)%t,Lr=(e,t)=>"hidden"===t?e<0?-79.5:79.5:3===Math.abs(e)?61.5*Math.sign(e):2===Math.abs(e)?43.5*Math.sign(e):1===Math.abs(e)?23.5*Math.sign(e):0,zr=F(null),Mr=e=>e?.selectedSnap()??0,jr=({children:e})=>{const t=se(void 0),i=se(0),o=se(0),[r,n]=ne(0),a=de(({emblaApi:e})=>{if(t.current=e,!e)return;const r=Mr(e);i.current=r,o.current=r,n(r);const a=()=>{const t=Mr(e),r=((e,t,i)=>{if(i<=0)return t-e;const o=t-e,r=i/2;return o>r?o-i:o<-r?o+i:o})(i.current,t,(e=>e?.slideNodes().length??0)(e));i.current=t,o.current+=r,n(o.current)};return e.on("select",a),()=>{e.off("select",a),t.current===e&&(t.current=void 0)}},[]),s=de(e=>{const i=t.current;if(i&&0!==e){i.plugins().autoplay?.stop();for(let t=0;t<Math.abs(e);t+=1)e>0?i.goToNext():i.goToPrev()}else n(t=>t+e)},[]),l=le(()=>({activeSlide:r,initSwiper:a,goByOffset:s}),[r,s,a]);return V(zr.Provider,{value:l,children:e})},Pr=()=>{const e=ce(zr);if(!e)throw new Error("useDotNavigation must be used within DotNavigationProvider");return e},Er=Ee("button")`
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
        transform ${Ar}ms ease,
        opacity ${Ar}ms ease,
        visibility 0s linear ${({$visible:e})=>e?0:Ar}ms;

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
`,Or=Ee("div")`
    position: relative;
    width: ${131}px;
    height: ${12}px;
`,Br=({renderDotVisual:e})=>{const{activeSlide:t,goByOffset:i}=Pr(),o=Ir(t,13),r=Array.from({length:13},(e,t)=>({id:t}));return V(Or,{children:r.map(t=>{const r=((e,t,i=13)=>{const o=Math.floor(i/2);return Ir(e-t+o,i)-o})(t.id,o),n=(e=>{const t=Math.abs(e);return 0===t?"center":3===t?"edge":t<3?"default":"hidden"})(r),a="hidden"!==n,s="center"===n;return V(Er,{$slot:Lr(r,n),$visible:a,type:"button","aria-label":`Go to slide ${t.id+1}`,"aria-current":s?"true":void 0,tabIndex:a?0:-1,onClick:()=>{i(r)},children:e(n)},t.id)})})},Dr=Ee("span")`
    display: block;
    width: ${({$variant:e})=>{return"edge"===(t=e)?8:"center"===t?19:12;var t}}px;
    height: ${({$variant:e})=>"edge"===e?8:12}px;
    border-radius: 99px;
    background-color: #dce0e2;
    transition:
        width ${Ar}ms ease,
        opacity ${Ar}ms ease,
        background-color ${Ar}ms ease,
        border-radius ${Ar}ms ease;

    ${({$variant:e})=>"edge"===e&&"\n        background-color: #dce0e280;\n    "}

    ${({$variant:e})=>"center"===e&&"\n        background-color: #747474;\n        border-radius: 99px;\n    "}

    ${({$variant:e})=>"hidden"===e&&"\n        opacity: 0;\n    "}
`,Hr=(e=10)=>{const[t,i]=ne(!1);return ae(()=>{setTimeout(()=>{i(!0)},e)},[]),t},Fr=({className:e,...t})=>V("svg",{className:e,...t,width:"12",height:"21",viewBox:"0 0 12 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:V("path",{d:"M11.3609 2.35793C11.7134 2.03208 11.7338 1.48174 11.4063 1.13071C11.081 0.781918 10.5349 0.761697 10.1846 1.08547L0 10.5L10.1846 19.9145C10.5349 20.2383 11.081 20.2181 11.4063 19.8693C11.7338 19.5183 11.7134 18.9679 11.3609 18.6421L2.553 10.5L11.3609 2.35793Z",fill:"currentColor"})}),Ur=({className:e,...t})=>V("svg",{className:e,...t,width:"12",height:"21",viewBox:"0 0 12 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:V("path",{d:"M0.639105 2.35793C0.286604 2.03208 0.266229 1.48174 0.59367 1.13071C0.919025 0.781918 1.4651 0.761697 1.81536 1.08547L12 10.5L1.81536 19.9145C1.4651 20.2383 0.919025 20.2181 0.59367 19.8693C0.266229 19.5183 0.286605 18.9679 0.639105 18.6421L9.447 10.5L0.639105 2.35793Z",fill:"currentColor"})});function Vr(e,t){for(var i in t)e[i]=t[i];return e}function Gr(e,t){for(var i in e)if("__source"!==i&&!(i in t))return!0;for(var o in t)if("__source"!==o&&e[o]!==t[o])return!0;return!1}function Wr(e,t){this.props=e,this.context=t}(Wr.prototype=new _).isPureReactComponent=!0,Wr.prototype.shouldComponentUpdate=function(e,t){return Gr(this.props,e)||Gr(this.state,t)};var Zr=t.__b;t.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Zr&&Zr(e)};var qr="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Kr(e){function t(t){var i=Vr({},t);return delete i.ref,e(i,t.ref||null)}return t.$$typeof=qr,t.render=e,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var Xr=t.__e;t.__e=function(e,t,i,o){if(e.then)for(var r,n=t;n=n.__;)if((r=n.__c)&&r.__c)return null==t.__e&&(t.__e=i.__e,t.__k=i.__k),r.__c(e,t);Xr(e,t,i,o)};var Yr=t.unmount;function Jr(e,t,i){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(e){"function"==typeof e.__c&&e.__c()}),e.__c.__H=null),null!=(e=Vr({},e)).__c&&(e.__c.__P===i&&(e.__c.__P=t),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(e){return Jr(e,t,i)})),e}function Qr(e,t,i){return e&&i&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(e){return Qr(e,t,i)}),e.__c&&e.__c.__P===t&&(e.__e&&i.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=i)),e}function en(){this.__u=0,this.o=null,this.__b=null}function tn(e){var t=e.__&&e.__.__c;return t&&t.__a&&t.__a(e)}function on(){this.i=null,this.l=null}t.unmount=function(e){var t=e.__c;t&&(t.__z=!0),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Yr&&Yr(e)},(en.prototype=new _).__c=function(e,t){var i=t.__c,o=this;null==o.o&&(o.o=[]),o.o.push(i);var r=tn(o.__v),n=!1,a=function(){n||o.__z||(n=!0,i.__R=null,r?r(l):l())};i.__R=a;var s=i.__P;i.__P=null;var l=function(){if(! --o.__u){if(o.state.__a){var e=o.state.__a;o.__v.__k[0]=Qr(e,e.__c.__P,e.__c.__O)}var t;for(o.setState({__a:o.__b=null});t=o.o.pop();)t.__P=s,t.forceUpdate()}};o.__u++||32&t.__u||o.setState({__a:o.__b=o.__v.__k[0]}),e.then(a,a)},en.prototype.componentWillUnmount=function(){this.o=[]},en.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var i=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=Jr(this.__b,i,o.__O=o.__P)}this.__b=null}var r=t.__a&&v(b,null,e.fallback);return r&&(r.__u&=-33),[v(b,null,t.__a?null:e.children),r]};var rn=function(e,t,i){if(++i[1]===i[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(i=e.i;i;){for(;i.length>3;)i.pop()();if(i[1]<i[0])break;e.i=i=i[2]}};function nn(e){return this.getChildContext=function(){return e.context},e.children}function an(e){var t=this,i=e.h;if(t.componentWillUnmount=function(){H(null,t.v),t.v=null,t.h=null},t.h&&t.h!==i&&t.componentWillUnmount(),!t.v){for(var o=t.__v;null!==o&&!o.__m&&null!==o.__;)o=o.__;t.h=i,t.v={nodeType:1,parentNode:i,childNodes:[],__k:{__m:o.__m},contains:function(){return!0},namespaceURI:i.namespaceURI,insertBefore:function(e,i){this.childNodes.push(e),t.h.insertBefore(e,i)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.h.removeChild(e)}}}H(v(nn,{context:t.context},e.__v),t.v)}(on.prototype=new _).__a=function(e){var t=this,i=tn(t.__v),o=t.l.get(e);return o[0]++,function(r){var n=function(){t.props.revealOrder?(o.push(r),rn(t,e,o)):r()};i?i(n):n()}},on.prototype.render=function(e){this.i=null,this.l=new Map;var t=T(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var i=t.length;i--;)this.l.set(t[i],this.i=[1,0,this.i]);return e.children},on.prototype.componentDidUpdate=on.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,i){rn(e,i,t)})};var sn="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,ln=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,dn=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,cn=/[A-Z0-9]/g,pn="undefined"!=typeof document,un=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(e)};_.prototype.isReactComponent=!0,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(_.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var hn=t.event;t.event=function(e){return hn&&(e=hn(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var mn={configurable:!0,get:function(){return this.class}},gn=t.vnode;t.vnode=function(e){"string"==typeof e.type&&function(e){var t=e.props,i=e.type,o={},r=-1==i.indexOf("-");for(var n in t){var a=t[n];if(!("value"===n&&"defaultValue"in t&&null==a||pn&&"children"===n&&"noscript"===i||"class"===n||"className"===n)){var s=n.toLowerCase();"defaultValue"===n&&"value"in t&&null==t.value?n="value":"download"===n&&!0===a?a="":"translate"===s&&"no"===a?a=!1:"o"===s[0]&&"n"===s[1]?"ondoubleclick"===s?n="ondblclick":"onchange"!==s||"input"!==i&&"textarea"!==i||un(t.type)?"onfocus"===s?n="onfocusin":"onblur"===s?n="onfocusout":dn.test(n)&&(n=s):s=n="oninput":r&&ln.test(n)?n=n.replace(cn,"-$&").toLowerCase():null===a&&(a=void 0),"oninput"===s&&o[n=s]&&(n="oninputCapture"),o[n]=a}}"select"==i&&(o.multiple&&Array.isArray(o.value)&&(o.value=T(t.children).forEach(function(e){e.props.selected=-1!=o.value.indexOf(e.props.value)})),null!=o.defaultValue&&(o.value=T(t.children).forEach(function(e){e.props.selected=o.multiple?-1!=o.defaultValue.indexOf(e.props.value):o.defaultValue==e.props.value}))),t.class&&!t.className?(o.class=t.class,Object.defineProperty(o,"className",mn)):t.className&&(o.class=o.className=t.className),e.props=o}(e),e.$$typeof=sn,gn&&gn(e)};var wn=t.__r;t.__r=function(e){wn&&wn(e),e.__c};var fn=t.diffed;t.diffed=function(e){fn&&fn(e);var t=e.props,i=e.__e;null!=i&&"textarea"===e.type&&"value"in t&&t.value!==i.value&&(i.value=null==t.value?"":t.value)};const vn=({className:e})=>V("svg",{xmlns:"http://www.w3.org/2000/svg",className:e,fill:"currentColor",viewBox:"0 0 512 512",children:V("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"})}),xn=Pe`
  from {
    opacity: 0;
  }
  to {
    opacity: .7;
  }

`,bn=Pe`
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
`,_n=Pe`
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
`,yn=Ee("div")``,$n=Ee("div")`
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
`,kn=Ee("div")`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: 0.7;
    animation: ${xn} 0.2s forwards;
`,Sn=Ee("div")`
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    animation: ${_n} 0.3s forwards;
    @media (max-width: 400px) {
        transform: scale(0.8);
        animation: ${bn} 0.3s forwards;
    }
`,Cn=Ee("button")`
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
`,Nn=({open:e,onClose:t,children:i,className:o,removeCloseIcon:r})=>{return e&&((a=v(an,{__v:V(yn,{className:o,children:V($n,{className:"reputon-modal",children:[V(Sn,{className:"reputon-modal-content",children:[!r&&V(Cn,{type:"button","aria-label":"close modal",className:"reputon-modal-close",onClick:t,children:V(vn,{})}),i]}),V(kn,{onClick:t,className:"reputon-modal-backdrop"})]})}),h:n=document.body})).containerInfo=n,a);var n,a},Rn="\n    color: gray;\n    flex-shrink: 0;\n    width: 40px;\n    height: 40px;\n    cursor: pointer;\n    background: none;\n    & svg {\n        width: 100%;\n        height: 100%;\n    }\n",Tn=Ee("button")`
    ${Rn}
`,An=Ee("button")`
    ${Rn}
    order: 2;
`,In=Ee("div")`
    position: relative;
    display: flex;
    gap: 20px;
    align-items: center;
    ${e=>`\n            @media (max-width: ${e.theme.media.mobile}px) {\n                gap: 0px;\n            }\n        `};
    margin: 0 auto;
    border-radius: 4px;
`,Ln=Ee("img")`
    position: absolute;
    width: auto;
    max-width: 99%;
    height: auto;
    max-height: 100%;
    top: 50%;
    left: 50%;
    object-fit: contain;
    transform: translate(-50%, -50%);
`,zn=Ee("div")`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,Mn=Ee("div",Kr)`
    overflow: hidden;
    --slide-spacing: ${e=>e.$gap}px;
    container: swiper-wrapper / inline-size;
    height: 100%;
    width: 100%;
`,jn=Ee("div",Kr)`
    touch-action: pan-y pinch-zoom;
    margin-left: calc(var(--slide-spacing) * -1);
    display: grid;
    height: 100%;
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    ${e=>e.$responsive}
`,Pn=Ee("div")`
    min-width: 0;
    height: auto;
    padding-left: var(--slide-spacing);
`,En=Ee("div",Kr)`
    overflow: hidden;
    width: 100%;
`,On=Ee("div")`
    display: flex;
    touch-action: pan-y pinch-zoom;
    will-change: transform;
`,Bn=Ee("div")`
    flex: 0 0 ${({$widthPercent:e=70})=>`${e}%`};
    min-width: 0;
    padding: 0 8px;
    position: relative;
`,Dn=Ee("div")``,Hn="--slide-size",Fn="100%",Un=(e,t)=>{e=e??[{breakpoint:1e5,slidesPerView:1}];const i=[...e].sort((e,t)=>t.breakpoint-e.breakpoint),{slidesPerView:o}=i[0],r=Math.min(o,t?.totalSlides||1/0),n=1===r?Fn:`calc(${Fn} / ${r})`,a=i.map(({breakpoint:e,slidesPerView:i})=>{const o=Math.min(i,t?.totalSlides||1/0);return`@container swiper-wrapper (max-width: ${e}px) {\n        ${Hn}: ${1===o?Fn:`calc(${Fn} / ${o} + 0.5px)`};\n    }`});return{containerCss:[`${Hn}: ${n};`,...a].join("\n    ")}},Vn=({emblaApi:e})=>{ae(()=>{if(e&&!1!==e.plugins().autoplay.options.active)try{e.plugins().autoplay?.play()}catch(t){}},[e])},Gn=({emblaApi:e,totalSlides:t,bufferSize:i=2})=>{const[o,r]=ne(()=>{const e=new Set;for(let i=0;i<Math.min(7,t);i++)e.add(i);return e}),n=de(()=>{if(!e)return;if(t<=7)return void r(e=>{if(e.size===t)return e;const i=new Set;for(let o=0;o<t;o++)i.add(o);return i});const o=e.slidesInView(),n=new Set;for(const e of o)for(let o=-i;o<=i;o++){const i=((e+o)%t+t)%t;n.add(i)}r(e=>e.size===n.size&&[...n].every(t=>e.has(t))?e:n)},[e,t,i]);return ae(()=>{if(e)return n(),e.on("slidesinview",n),e.on("reinit",n),()=>{e.off("slidesinview",n),e.off("reinit",n)}},[e,n]),{isSlideActive:de(e=>o.has(e),[o])}},Wn=({emblaApi:e,navigation:t})=>{ae(()=>{if(!e||!t)return;const i=document.querySelectorAll(t.next),o=document.querySelectorAll(t.prev),r=()=>{e.plugins().autoplay?.stop(),e.goToNext()},n=()=>{e.plugins().autoplay?.stop(),e.goToPrev()};return i?.forEach(e=>e.addEventListener("click",r)),o?.forEach(e=>e.addEventListener("click",n)),()=>{i?.forEach(e=>e.removeEventListener("click",r)),o?.forEach(e=>e.removeEventListener("click",n))}},[e,t])},Zn=({emblaApi:e,onSlideChange:t})=>{ae(()=>(e?.on("select",t||(()=>{})),()=>e?.off("select",t||(()=>{}))),[e,t])};function qn(e){return function(e){return"[object Object]"===Object.prototype.toString.call(e)}(e)||Array.isArray(e)}function Kn(e,t){const i=Object.keys(e),o=Object.keys(t);return i.length===o.length&&(JSON.stringify(Object.keys(e.breakpoints||{}))===JSON.stringify(Object.keys(t.breakpoints||{}))&&i.every(i=>{const o=e[i],r=t[i];return"function"==typeof o?`${o}`==`${r}`:qn(o)&&qn(r)?Kn(o,r):o===r}))}function Xn(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function Yn(e){return t=>e(Jn(t)?t:t.get())}function Jn(e){return"number"==typeof e}function Qn(e){return"string"==typeof e}function ea(e){return"[object Object]"===Object.prototype.toString.call(e)}function ta(e){return Math.abs(e)}function ia(e){return Math.sign(e)}function oa(e,t){return ta(e-t)}function ra(e){return da(e).map(Number)}function na(e){return e[aa(e)]}function aa(e){return Math.max(0,e.length-1)}function sa(e,t){return t===aa(e)}function la(e,t=0){return Array.from(Array(e-t+1),(e,i)=>t+i)}function da(e){return Object.keys(e)}function ca(e,t){return[e,t].reduce((e,t)=>(da(t).forEach(i=>{const o=e[i],r=t[i],n=ea(o)&&ea(r);e[i]=n?ca(o,r):r}),e),{})}function pa(e,t){return void 0!==t.MouseEvent&&e instanceof t.MouseEvent}function ua(){let e=[];const t={add:function(i,o,r,n={passive:!0}){let a;if("addEventListener"in i)i.addEventListener(o,r,n),a=()=>i.removeEventListener(o,r,n);else{const e=i;e.addListener(r),a=()=>e.removeListener(r)}return e.push(a),t},clear:function(){e=e.filter(e=>e())}};return t}function ha(e,t){const i="rtl"===t,o="y"===e,r=!o&&i?-1:1;return{scroll:o?"y":"x",cross:o?"x":"y",startEdge:o?"top":i?"right":"left",endEdge:o?"bottom":i?"left":"right",nativeScroll:o?"scrollTop":"scrollLeft",getSize:function(e){const{height:t,width:i}=e;return o?t:i},direction:Yn(function(e){return e*r})}}function ma(e=0,t=0){const i=ta(e-t);function o(t){return t<e}function r(e){return e>t}function n(e){return o(e)||r(e)}return{length:i,max:t,min:e,clamp:Yn(function(i){return n(i)?o(i)?e:t:i}),pastAnyBound:Yn(n),pastMaxBound:Yn(r),pastMinBound:Yn(o),removeOffset:Yn(function(e){return i?e-i*Math.ceil((e-t)/i):e})}}function ga(e,t,i){const{clamp:o}=ma(0,e),r=e+1;let n=a(t);function a(e){return i?ta((r+e)%r):o(e)}function s(){return n}function l(){return ga(e,s(),i)}const d={get:s,set:function(e){return n=a(e),d},add:function(e){return l().set(s()+e)},clone:l};return d}function wa(e,t,i,o,r,n,a,s,l,d,c,p,u,h,m,g,w){const{cross:f,direction:v}=t,x=["INPUT","SELECT","TEXTAREA"],b={passive:!1},_=ua(),y=ua(),$=ma(50,225).clamp(u.measure(20)),k={mouse:300,touch:400},S={mouse:500,touch:600},C=h?43:25;let N,R,T=!1,A=0,I=0,L=!1,z=!1,M=!1,j=!1,P=!1;function E(e){return d.byDistance(e,!h).distance}function O(e){if(!p.createEvent("pointerdown",e).emit())return;const t=pa(e,R),a=t&&0!==e.button;P=t,j=h&&t&&!e.buttons&&T,T=oa(o.get(),n.get())>=2,a||function(e){const t=e.nodeName||"";return x.includes(t)}(e.target)||(z=!0,r.pointerDown(e),l.useFriction(0).useDuration(0),o.set(n),A=r.readPoint(e),I=r.readPoint(e,f),function(){const e=P?N:i;y.add(e,"mousemove",B,b).add(e,"mouseup",D)}(),L=!0)}function B(e){if(!p.createEvent("pointermove",e).emit())return D(e);if(!pa(e,R)&&e.touches.length>=2)return D(e);const t=r.readPoint(e),i=r.readPoint(e,f),n=oa(t,A),s=oa(i,I);if(!M&&!P){if(!e.cancelable)return D(e);if(M=n>s,!M)return D(e)}const d=r.pointerMove(e);n>m&&(j=!0),l.useFriction(.3).useDuration(.75),a.start(),o.add(v(d)),e.cancelable&&e.preventDefault()}function D(e){const t=p.createEvent("pointerup",e),i=r.pointerUp(e)*(h?S:k)[P?"mouse":"touch"],o=function(e){const t=c.add(-1*ia(e));return h||ta(e)<$?E(e):g&&d.byDistance(0,!1).index!==c.get()?.5*E(e):d.byIndex(t.get(),0).distance}(v(i)),n=function(e,t){if(0===e||0===t)return 0;if(ta(e)<=ta(t))return 0;const i=oa(ta(e),ta(t));return ta(i/e)}(i,o),a=C-10*n,u=w+n/50;M=!1,z=!1,L=!1,P=!1,y.clear(),l.useDuration(a).useFriction(u),s.distance(o,!h),t.emit()}function H(e){j&&(e.stopPropagation(),e.preventDefault(),j=!1)}return{init:function(t){if(!e)return;N=t.document,R=t,r.init(t);const o=i;_.add(o,"dragstart",e=>e.preventDefault(),b).add(o,"touchmove",e=>L&&B(e),b).add(o,"touchend",e=>L&&D(e)).add(o,"touchstart",O).add(o,"mousedown",O).add(o,"touchcancel",D).add(o,"contextmenu",D).add(o,"click",H,!0)},destroy:function(){_.clear(),y.clear(),L=!1},pointerDown:function(){return z}}}function fa(e){let t,i,o;function r(e){return e.timeStamp}function n(i,o){const r="client"+("x"===(o||e.scroll)?"X":"Y");return(pa(i,t)?i:i.touches[0])[r]}return{init:function(e){t=e},pointerDown:function(e){return i=e,o=e,n(e)},pointerMove:function(e){const t=n(e)-n(o),a=r(e)-r(i)>170;return o=e,a&&(i=e),t},pointerUp:function(e){if(!i||!o)return 0;const t=n(o)-n(i),a=r(e)-r(i),s=r(e)-r(o)>170,l=t/a;return a&&!s&&ta(l)>.1?l:0},readPoint:n}}function va(e,t,i,o,r,n){const a=[t,...o];let s,l,d=[],c=!1;function p(e){return r.getSize(n.getRect(e))}function u(e){const r=i.createEvent("resize",e);if(r.emit())for(const i of e){if(c)return;const e=i.target===t,n=o.indexOf(i.target),a=e?l:d[n];if(ta(p(e?t:o[n])-a)>=.5){r.api.reInit();break}}}return{init:function(i){e&&(l=p(t),d=o.map(p),s=new i.ResizeObserver(u),i.requestAnimationFrame(()=>{a.forEach(e=>s.observe(e))}))},destroy:function(){c=!0,s&&s.disconnect()}}}function xa(e,t,i,o,r){const{pastAnyBound:n,pastMinBound:a,clamp:s}=e,l=r.measure(10),d=r.measure(50),c=ma(.1,.99);let p=!1;function u(){return!p&&!!n(i)&&!!n(t)}return{shouldConstrain:u,constrain:function(r){if(!u())return;const n=a(t)?"min":"max",p=ta(e[n]-t.get()),h=i.minus(t),m=c.clamp(p/d);i.subtract(h*m),!r&&ta(h)<l&&(i.set(s(i)),o.useDuration(25).useBaseFriction())},toggleActive:function(e){p=!e}}}function ba(e,t,i,o){const r=t.min+.1,n=t.max+.1,{pastMinBound:a,pastMaxBound:s}=ma(r,n);return{loop:function(t){if(!function(e){return 1===e?s(i):-1===e&&a(i)}(t))return;const r=e*(-1*t);o.forEach(e=>e.add(r))}}}function _a(e){let t=e||0;function i(e){t+=e}function o(e){return t+e}return{get:function(){return t},set:Yn(function(e){t=e}),add:Yn(i),subtract:Yn(function(e){i(-e)}),plus:Yn(o),minus:Yn(function(e){return o(-e)})}}function ya(e,t,i){let o,r=!1;function n(e){const t=i.createEvent("slideschanged",e);if(t.emit())for(const i of e){if(r)return;if("childList"===i.type){t.api.reInit();break}}}return{init:function(i){e&&(o=new i.MutationObserver(n),o.observe(t,{childList:!0}))},destroy:function(){o&&o.disconnect(),r=!0}}}function $a(e,t,i="px"){const o="x"===e.scroll?function(e){return`translate3d(${e}${i},0px,0px)`}:function(e){return`translate3d(0px,${e}${i},0px)`};let r=null,n=!1,a=!1;function s(e){r!==e&&(r=e,t.style.transform=e)}function l(e){a||n!==e&&(n=e,s(e?o(0):""))}return{set:s,clear:function(){s(""),t.getAttribute("style")||t.removeAttribute("style")},to:Yn(function(t){if(a)return;n||l(!0);const i=function(e){return Math.round(100*e)/100}(e.direction(t));s(o(i))}),get:Yn(o),toggleActive:function(e){a=!e},setIsScrolling:l}}function ka(e,t,i,o,r,n,a,s,l,d,c,p){const u=r?[0,t,-t]:[0],h=o.reduce((e,t,i)=>Object.assign(Object.assign({},e),{[i]:x(i,t)}),{}),m=ga(o.length-1,0,r);let g=l.get(),w=_(),f=w,v=[];function x(t,o){return u.map(r=>({start:o-i[t]-200+r,end:o+e- -200+r}))}function b(e,t,i,n){const a=e.length>0,s=a?e[0]:t,l=m.clone().set(s),d=()=>l.add(i).get();for(l.set(d());l.get()!==s;){const t=l.get(),s=n(t);if(!s&&a)break;s&&e.push(t);const c=d();if(l.set(c),r)continue;const p=!c,u=sa(o,c);if(p&&-1===i)break;if(u&&1===i)break}}function _(){const e=[],t=a.slidesBySnap[n.get()];if(!t)return e;if(!o.length)return e;const i=s.get(),r=l.get(),d=t[Math.floor(t.length/2)],c=(p=Math.max(i,r),u=Math.min(i,r),e=>h[e].some(({start:e,end:t})=>e<p&&t>u));var p,u;return c(d)&&e.push(d),b(e,d,1,c),b(e,d,-1,c),e}function y(e,t){t.forEach(t=>{const i=d[t],o=c.loopPoints[t];r&&o&&o.target()||i.setIsScrolling(e)})}return{optimize:function(e){const t=l.get();(e||t!==g)&&(function(e){w=_(),v=function(e,t){const i=new Set(t);return e.filter(e=>!i.has(e))}(f,w),f=w,g=e}(t),!p.createEvent("scrolloptimize",{slidesInView:w,slidesLeftView:v}).emit()||(y(!0,w),y(!1,v)))}}}function Sa(e,t,i,o,r,n,a,s){const{align:l,axis:d,direction:c,startSnap:p,loop:u,duration:h,dragFree:m,dragThreshold:g,inViewThreshold:w,inViewMargin:f,slidesToScroll:v,skipSnaps:x,containScroll:b,draggable:_,resize:y,slideChanges:$,focus:k}=o,S=s?0:2,C=ha(d,c),{containerRect:N,slideRects:R}=a,T=C.getSize(N),A=function(e){return{measure:function(t){return e*(t/100)}}}(T),I=function(e,t){const i={start:function(){return 0},center:function(e){return o(e)/2},end:o};function o(e){return t-e}return{measure:function(o,r){return Qn(e)?i[e](o):e(t,o,r)}}}(l,T),L=!u&&!!b,z=u||!!b,{slideSizes:M,slideSizesWithGaps:j,startGap:P,endGap:E}=function(e,t,i,o,r,n){const{ownerWindow:a}=n,{getSize:s,startEdge:l,endEdge:d}=e,c=i[0]&&r&&a,p=function(){if(!c)return 0;const e=i[0];return ta(t[l]-e[l])}(),u=function(){if(!c)return 0;const e=a.getComputedStyle(na(o));return parseFloat(e.getPropertyValue(`margin-${d}`))}(),h=i.map(s),m=i.map((e,t,i)=>{const o=!t,r=sa(i,t);return o?h[t]+p:r?h[t]+u:i[t+1][l]-e[l]}).map(ta);return{slideSizes:h,slideSizesWithGaps:m,startGap:p,endGap:u}}(C,N,R,i,z,r),O=function(e,t,i,o,r,n,a,s,l){const{startEdge:d,endEdge:c,direction:p}=e,u=Jn(i);return{groupSlides:function(e){return u?function(e,t){return ra(e).filter(e=>e%t===0).map(i=>e.slice(i,i+t))}(e,i):function(e){return e.length?ra(e).reduce((i,u,h)=>{const m=na(i)||0,g=0===m,w=u===aa(e),f=r[d]-n[m][d],v=r[d]-n[u][c],x=!o&&g?p(a):0,b=ta(v-(!o&&w?p(s):0)-(f+x));return h&&b>t+l&&i.push(u),w&&i.push(e.length),i},[]).map((t,i,o)=>{const r=Math.max(o[i-1]||0);return e.slice(r,t)}):[]}(e)}}}(C,T,v,u,N,R,P,E,S),{snaps:B,snapsAligned:D}=function(e,t,i,o,r){const{startEdge:n,endEdge:a}=e,{groupSlides:s}=r,l=s(o).map(e=>na(e)[a]-e[0][n]).map(ta).map(t.measure),d=o.map(e=>i[n]-e[n]).map(e=>-ta(e));return{snaps:d,snapsAligned:s(d).map(e=>e[0]).map((e,t)=>e+l[t])}}(C,I,N,R,O),H=-na(B)+na(j),{snapsContained:F,scrollContainLimit:U}=function(e,t,i,o,r){const n=ma(-t+e,0),a=i.map((e,t)=>{const{min:o,max:r}=n,a=n.clamp(e),s=!t,d=sa(i,t);return s?r:d||l(o,a)?o:l(r,a)?r:a}).map(e=>parseFloat(e.toFixed(3))),s=function(){const e=a[0],t=na(a);return ma(a.lastIndexOf(e),a.indexOf(t)+1)}();function l(e,t){return!!r&&oa(e,t)<=1}return{snapsContained:function(){if(t<=e+r)return[n.max];if("keepSnaps"===o)return a;const{min:i,max:l}=s;return a.slice(i,l)}(),scrollContainLimit:s}}(T,H,D,b,S),V=L?F:D,{limit:G}=function(e,t,i){const o=t[0];return{limit:ma(i?o-e:na(t),o)}}(H,V,u),W=ga(aa(V),p,u),Z=W.clone(),q=ra(i),K=function(e){const{dragHandler:t,scrollBody:i,scrollBounds:o,options:{loop:r}}=e;r||o.constrain(t.pointerDown()),i.seek()},X=function(e,t){const{scrollBody:i,translate:o,location:r,offsetLocation:n,previousLocation:a,scrollLooper:s,slideLooper:l,dragHandler:d,animation:c,eventHandler:p,scrollBounds:u,scrollOptimizer:h,options:{loop:m}}=e,g=i.settled(),w=!u.shouldConstrain(),f=d.pointerDown(),v=g&&(m||w),x=!v,b=x&&f,_=v&&!f;_&&(h.optimize(_),c.stop());const y=r.get()*t+a.get()*(1-t);n.set(y),m&&(s.loop(i.direction()),l.loop()),o.to(n),h.optimize(),_&&p.createEvent("settle",null).emit(),x&&p.createEvent("scroll",{isDragging:b}).emit()},Y=function(e,t){const i=ua(),o=1e3/60;let r,n=null,a=0,s=0;function l(i){if(!s)return;n||(n=i,e(),e());const d=i-n;for(n=i,a+=d;a>=o;)e(),a-=o;t(a/o),s&&(s=r.requestAnimationFrame(l))}function d(){s&&(r.cancelAnimationFrame(s),n=null,a=0,s=0)}return{init:function(e){const t=e.document;r=e,i.add(t,"visibilitychange",()=>{t.hidden&&(n=null,a=0)})},destroy:function(){d(),i.clear()},start:function(){s||(s=r.requestAnimationFrame(l))},stop:d,update:e,render:t}}(()=>K(ge),e=>X(ge,e)),J=V[W.get()],Q=_a(J),ee=_a(J),te=_a(J),ie=_a(J),oe=$a(C,t),re=i.map(e=>$a(C,e)),ne=function(e){const{max:t,length:i}=e;return{get:Yn(function(e){return i?(e-t)/-i:0})}}(G),ae=function(e,t,i,o,r){let n=0,a=0,s=r,l=.68,d=e.get(),c=0;function p(e){return s=e,h}function u(e){return l=e,h}const h={direction:function(){return a},duration:function(){return s},velocity:function(){return n},seek:function(){const t=o.minus(e);let r=0;return s?(i.set(e),n+=t/s,n*=l,d+=n,e.add(n),r=d-c):(n=0,i.set(o),e.set(o),r=t),a=ia(r),c=d,h},settled:function(){return ta(o.minus(t))<.001},useBaseFriction:function(){return u(.68)},useBaseDuration:function(){return p(r)},useFriction:u,useDuration:p};return h}(Q,te,ee,ie,h),se=function(e,t,i,o,r,n,a){const{groupSlides:s}=r,{min:l,max:d}=o,c=function(){const o=s(n),r=!e||"keepSnaps"===t;return 1===i.length?[n]:r?o:o.slice(l,d).map((e,t,i)=>{const o=!t,r=sa(i,t);return o?la(na(e)):r?la(aa(n),e[0]):e})}(),p=function(){const e={};return c.forEach((t,i)=>{t.forEach(t=>{e[t]=i})}),e}(),u=i.map(a.get),h=i.length;return{slidesBySnap:c,snapBySlide:p,progressBySnap:u,length:h}}(L,b,V,U,O,q,ne),le=function(e,t,i,o,r,n,a,s){const l=ra(o),d=ra(o).reverse(),c=function(){const e=n[0];return h(u(d,e),t,!1)}().concat(function(){const i=e-n[0]-1;return h(u(l,i),-t,!0)}());function p(e,t){return e.reduce((e,t)=>e-o[t],t)}function u(e,t){return e.reduce((e,i)=>p(e,t)>0?[...e,i]:e,[])}function h(o,n,l){const d=function(t){return r.map((o,r)=>({start:o-i[r]+.5+t,end:o+e-.5+t}))}(n);return o.map(e=>{const i=l?0:-t,o=l?t:0,r=l?"end":"start",n=d[e][r];return{index:e,loopPoint:n,slideLocation:_a(-1),translate:s[e],target:()=>a.get()>n?i:o}})}return{canLoop:function(){return c.every(({index:t})=>p(l.filter(e=>e!==t),e)<=.1)},loop:function(){c.forEach(e=>{const{target:t,translate:i,slideLocation:o}=e,r=t();r!==o.get()&&(i.to(r),o.set(r))})},loopPoints:c}}(T,H,M,j,B,V,te,re),de=ka(T,H,j,B,u,W,se,te,ie,re,le,n),ce=function(e,t,i,o,r){const{pastAnyBound:n,removeOffset:a,clamp:s}=o;function l(e){return e.sort((e,t)=>ta(e)-ta(t))[0]}function d(t,o){if(!e)return t;const r=[t,t+i,t-i];if(!o)return l(r);const n=r.filter(e=>ia(e)===o);return n.length?l(n):na(r)-i}return{byDistance:function(i,o){const l=r.plus(i),{index:c,distance:p}=function(i){const o=e?a(i):s(i),{index:r}=t.reduce((e,t,i)=>{const r=ta(d(t-o,0));return r>=e.smallestDisplacement?e:{smallestDisplacement:r,index:i}},{smallestDisplacement:1/0,index:0});return{index:r,distance:o}}(l),u=!e&&n(l);return!o||u?{index:c,distance:i}:{index:c,distance:i+d(t[c]-p,0)}},byIndex:function(e,i){return{index:e,distance:d(t[e]-r.get(),i)}},shortcut:d}}(u,V,H,G,ie),pe=function(e,t,i,o,r,n,a){function s(r){const{index:s,distance:l}=r,d=t.get(),c=s!==d;l&&(n.add(l),o.duration()?e.start():(e.update(),e.render(1),e.update())),c&&(i.set(d),t.set(s),a.createEvent("select",{targetSnap:s,sourceSnap:d}).emit())}return{distance:function(e,t){s(r.byDistance(e,t))},index:function(e,i){const o=t.clone().set(e).get();s(r.byIndex(o,function(e){return e?Jn(e)?e:"forward"===e?-1:1:0}(i)))}}}(Y,W,Z,ae,ce,ie,n),ue=ua(),he=function(e,t,i,o,r){const n=new Set;let a,s=!1;function l(e){const o=[],r=[];for(const i of e){if(s)return;const e=t.indexOf(i.target);i.isIntersecting?(n.add(e),o.push(e)):(n.delete(e),r.push(e))}i.createEvent("slidesinview",{slidesInView:d(),slidesLeftView:r,slidesEnterView:o}).emit()}function d(){return[...n]}return{init:function(i){a=new i.IntersectionObserver(l,{root:e.parentElement,threshold:o,rootMargin:r}),t.forEach(e=>a.observe(e))},destroy:function(){a&&a.disconnect(),s=!0},get:d}}(t,i,n,w,f),me=function(e,t,i,o,r,n,a,s,l){const d={passive:!0,capture:!0};let c=0;function p(e){"Tab"===e.code&&(c=(new Date).getTime())}return{init:function(u){t&&(s.add(u.document,"keydown",p,!1),o.forEach((t,o)=>{s.add(t,"focus",t=>function(t,o){if((new Date).getTime()-c>10)return;if(!l.createEvent("slidefocus",t).emit())return;i[e.nativeScroll]=0;const s=r.snapBySlide[o];Jn(s)&&(a.useDuration(0),n.index(s,0))}(t,o),d)}))}}}(C,k,e,i,se,pe,ae,ue,n),ge={eventHandler:n,containerRect:N,contentSize:H,slideRects:R,nodeHandler:r,animation:Y,slideSizes:M,isSsr:s,axis:C,dragHandler:wa(_,C,e,ie,fa(C),Q,Y,pe,ae,ce,W,n,A,m,g,x,.68),eventStore:ue,percentOfView:A,indexCurrent:W,indexPrevious:Z,limit:G,location:Q,offsetLocation:te,previousLocation:ee,options:o,resizeHandler:va(y,t,n,i,C,r),scrollBody:ae,scrollBounds:xa(G,te,ie,ae,A),scrollLooper:ba(H,G,te,[Q,te,ee,ie]),scrollProgress:ne,scrollSnaps:V,scrollTarget:ce,scrollTo:pe,slideLooper:le,slideFocus:me,slidesHandler:ya($,t,n),slidesInView:he,slideIndexes:q,slidesToScroll:O,slideTranslates:re,scrollSnapList:se,scrollOptimizer:de,translate:oe,target:ie};return ge}const Ca={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,inViewMargin:"0px",breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startSnap:0,active:!0,draggable:!0,resize:!0,focus:!0,slideChanges:!0,ssr:[]};function Na(){let e;function t(e,t){return ca(e,t||{})}return{init:function(t){t&&(e=t)},mergeOptions:t,optionsAtMedia:function(i){if(!e)return i;const o=i.breakpoints||{},r=da(o).filter(t=>e.matchMedia(t).matches).map(e=>o[e]).reduce((e,i)=>t(e,i),{});return t(i,r)},optionsMediaQueries:function(t){return e?t.map(e=>da(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia):[]}}}function Ra(e,t,i){const o=!e,r=Na(),n=function(e){let t=[];return{init:function(i,o){return t=o,o.reduce((t,o)=>(o.init(i,e),Object.assign(Object.assign({},t),{[o.name]:o})),{})},destroy:function(){t=t.filter(e=>e.destroy())}}}(r),a=ua(),s=function(){let e,t={};function i(e){return t[e]||[]}function o(e,o){return t=Object.assign(Object.assign({},t),{[e]:o(i(e))}),r}const r={init:function(t){e=t},clear:function(){t={}},createEvent:function(t,o){return{api:e,emit:()=>function(t,o){const r=function(t,i){return{api:e,type:t,detail:i}}(t,o);return i(t).every(t=>!1!==t(e,r))}(t,o)}},on:function(e,t){return o(e,e=>e.includes(t)?e:[...e,t]),r},off:function(e,t){return o(e,e=>e.filter(e=>e!==t)),r}};return r}(),{mergeOptions:l,optionsAtMedia:d,optionsMediaQueries:c}=r,{on:p,off:u,createEvent:h}=s,m=R;let g,w,f,v,x,b,_=!1,y=l(Ca,Ra.globalOptions),$=l(y),k=[],S={};function C(e,t,i,r){const n=l(e,o?{direction:"ltr"}:{}),a=w.getRects(t,i,r),d=Sa(v,t,i,n,w,s,a,o);return e.loop&&!d.slideLooper.canLoop()?C(l(e,{loop:!1}),t,i,!0):d}function N(t,i){if(_)return;w=function(e){const t=e?e.ownerDocument:null;let i;function o(e){const{offsetTop:t,offsetLeft:i,offsetWidth:o,offsetHeight:r}=e;return{top:t,right:i+o,bottom:t+r,left:i,width:o,height:r}}function r(e,t,i,o){return{offsetLeft:e,offsetTop:t,offsetWidth:i,offsetHeight:o}}return{ownerDocument:t,ownerWindow:t?t.defaultView:null,getNodes:function(t){return e?function(t){const{container:i,slides:o}=t,r=(Qn(i)?e.querySelector(i):i)||e.children[0],n=Qn(o)?r.querySelectorAll(o):o,a=Array.from(n||r.children);return{root:e,container:r,slides:a}}(t):function(e){const t=r(0,0,100,100);let i=0;return{root:t,container:t,slides:e.ssr.map(e=>{const t=r(i,i,e,e);return i+=e,t})}}(t)},getRect:o,getRects:function(t,r,n){if(n&&i)return i;const a=e?t.style:{transform:""},s=a.transform;a.transform="none";const l=o(t),d=r.map(o);return a.transform=s,i={containerRect:l,slideRects:d},i}}}(e);const{ownerWindow:s}=w;r.init(s),y=l(y,t),$=d(y),k=i||k;const p=w.getNodes($);v=p.root,x=p.container,b=p.slides,g=C($,x,b),f=function(e,t,i,o,r,n){const a=$a(t,e,"%");function s(e,t,o){const{direction:r}=ha(e.axis,e.direction),{slides:s,container:l}=i.getNodes(e),{location:d,slideLooper:c,contentSize:p}=n(e,l,s),u=e.loop?c.loopPoints:[],h=r(d),m=a.get(h);return`${t}{transform:${m};}`+u.reduce((i,n)=>{const{index:s}=n,l=ia(n.target()),d=e.ssr[s];if(!l||!d)return i;const c=r(p/d*100*l),u=a.get(c);return i+`${t} ${o}:nth-child(${s+1}){transform:${u};}`},"")}return{getStyles:function(e,t="> *"){if(!o.ssr.length)return"";const i=o.breakpoints||{};return s(o,e,t)+Object.keys(i).reduce((n,a)=>n+`@media ${a}{${s(r(o,i[a]),e,t)}}`,"")}}}(x,g.axis,w,y,l,C),c([y,...k.map(({options:e})=>e)]).forEach(e=>a.add(e,"change",R)),$.active&&(!o&&s&&(g.translate.to(g.location),g.scrollOptimizer.optimize(!0),g.options.loop&&g.slideLooper.loop(),g.animation.init(s),g.resizeHandler.init(s),g.slidesInView.init(s),g.slidesHandler.init(s),g.slideFocus.init(s),g.eventHandler.init(z),x.offsetParent&&b.length&&g.dragHandler.init(s)),S=n.init(z,k))}function R(e,t){const i=s.createEvent("reinit",null),o=L();T(),N(l({startSnap:o},e),t),i.emit()}function T(){g.dragHandler.destroy(),g.resizeHandler.destroy(),g.slidesHandler.destroy(),g.slidesInView.destroy(),g.animation.destroy(),n.destroy(),g.eventStore.clear(),a.clear(),g.translate.clear(),g.slideTranslates.forEach(e=>e.clear())}function A(e,t,i){_||o||$.active&&(g.scrollBody.useBaseFriction().useDuration(!0===t?0:$.duration),g.scrollTo.index(e,i))}function I(e){return g.indexCurrent.add(e).get()}function L(){return I(0)}const z={canGoToNext:function(){return I(1)!==L()},canGoToPrev:function(){return I(-1)!==L()},cloneEngine:function(e){return C(l($,e),x,b,!0)},containerNode:function(){return x},createEvent:h,internalEngine:function(){return g},destroy:function(){if(_)return;if(o)return;const e=s.createEvent("destroy",null);_=!0,a.clear(),T(),e.emit(),s.clear()},on:p,off:u,plugins:function(){return S},previousSnap:function(){return g.indexPrevious.get()},reInit:m,rootNode:function(){return v},goToNext:function(e){A(I(1),e,-1)},goToPrev:function(e){A(I(-1),e,1)},scrollProgress:function(){return g.scrollProgress.get(g.offsetLocation)},goTo:A,selectedSnap:L,slideNodes:function(){return b},slidesInView:function(){return g.slidesInView.get()},snapIndex:I,snapList:function(){return g.scrollSnapList.progressBySnap},ssrStyles:function(e,t){return o?f.getStyles(e,t):""}};return N(t||{},i||[]),z}function Ta(e={},t=[]){Ra.globalOptions=Ta.globalOptions;const i=se(e),o=se(t),r=se(Ra(null,e,t)),[n,a]=ne(),[s,l]=ne(),d=de(()=>{n&&n.reInit(i.current,o.current)},[n]);return ae(()=>{Kn(i.current,e)||(i.current=e,d())},[e,d]),ae(()=>{(function(e,t){if(e.length!==t.length)return!1;const i=Xn(e),o=Xn(t);return i.every((e,t)=>Kn(e,o[t]))})(o.current,t)||(o.current=t,d())},[t,d]),ae(()=>{if(s){Ra.globalOptions=Ta.globalOptions;const e=Ra(s,i.current,o.current);return a(e),()=>e.destroy()}a(void 0)},[s]),[l,n,r.current]}Ra.globalOptions=void 0,Ta.globalOptions=void 0;const Aa=(e,t)=>{const{direction:i}=(()=>{const e=document.documentElement;return{direction:getComputedStyle(e).direction??"ltr"}})();return Ta({...e??{},direction:i},t)},Ia=Ee("div")`
    width: 80vw;
    height: 80dvh;
`;function La({items:e,renderItem:t,options:i}){const{loop:o,navigation:r,allowTouchMove:n}=i,[a,s]=Aa({align:"start",loop:o,draggable:n}),{isSlideActive:l}=Gn({emblaApi:s,totalSlides:e.length}),{containerCss:d}=Un();return Wn({emblaApi:s,navigation:r}),Hr()&&V(Ia,{children:V(Mn,{$gap:10,ref:a,children:V(jn,{$responsive:d,children:e.map((e,i)=>V(Pn,{children:l(i)?t({item:e}):null},i))})})})}const za=({open:e,onClose:t,images:i,initialIndex:o})=>{const{t:r}=qi(),n=o,a=(e=>{if(e.length>=6)return e;const t=[...e];for(;t.length<6;)t.push(...e);return t})([i[n],...i.slice(n+1,i.length),...i.slice(0,n)]),s=Hr(),l=window.innerWidth<600,d=e=>e.stopPropagation();return V(Nn,{className:Ve,open:e,onClose:t,children:s&&V(In,{className:"reputon-swiper-container",onClick:t,children:[V(Tn,{type:"button","aria-label":r("previous_slide"),className:"reputon-swiper-button-prev",onClick:d,children:V(Fr,{})}),V(An,{type:"button","aria-label":r("next_slide"),className:"reputon-swiper-button-next",onClick:d,children:V(Ur,{})}),V(La,{options:{loop:!0,navigation:{prev:".reputon-google-reviews-widget .reputon-modal .reputon-swiper-button-prev",next:".reputon-google-reviews-widget .reputon-modal .reputon-swiper-button-next"},allowTouchMove:l},items:a,renderItem:({item:e})=>V(zn,{children:V(Ln,{$isMobile:l,onClick:d,src:e,alt:r("review_image"),className:"reputon-swiper-image"})})})]})})},Ma=Ee("svg")`
    color: ${e=>e.theme.summary.colorAiIcon};
`,ja=({className:e})=>V(Ma,{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:Bt("reputon-ai-stars",e),children:[V("g",{clipPath:"url(#clip0_58_2936)",children:[V("path",{d:"M16.334 0L18.5967 5.73726L24.334 8L18.5967 10.2627L16.334 16L14.0712 10.2627L8.33398 8L14.0712 5.73726L16.334 0Z",fill:"currentColor"}),V("path",{d:"M6.33398 12L8.03104 16.3029L12.334 18L8.03104 19.6971L6.33398 24L4.63693 19.6971L0.333984 18L4.63693 16.3029L6.33398 12Z",fill:"currentColor"})]}),V("defs",{children:V("clipPath",{id:"clip0_58_2936",children:V("rect",{width:"24",height:"24",fill:"white",transform:"translate(0.666992)"})})})]}),Pa=Ee("div")`
    display: grid;
    width: 100%;
    gap: 4px;

    ${({$isLong:e,$count:t})=>{let i="";switch(t){case 1:i="\n                    \n            grid-auto-rows: 1fr;\n            grid-auto-flow: row;\n            grid-template-columns: 1fr;\n        ;\n                ";break;case 2:case 3:case 4:i="\n                    \n            grid-auto-rows: 1fr;\n            grid-auto-flow: row;\n            grid-template-columns: 1fr 1fr;\n        ;\n                "}return e?"\n            grid-auto-rows: 1fr;\n            grid-auto-flow: column;\n            grid-template-columns: repeat(4, minmax(auto, 100px));\n        ":i}}
`,Ea=Ee("div")`
    height: 100%;
    position: relative;
    ${({$isLong:e,$count:t})=>{let i="";switch(t){case 1:case 4:i="";break;case 2:i=e?"":"\n                          & .reputon-grid-images-inner {\n                              padding-top: calc(200% + 4px);\n                          }\n                      ";break;case 3:i=e?"":"\n                          &:nth-child(1) {\n                              grid-row: span 2;\n                              & .reputon-grid-images-inner {\n                                  padding-top: calc(200% + 4px);\n                              }\n                          }\n                      "}return i}}
`,Oa=Ee("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    width: 100%;
    border-radius: 16px;
    padding-top: 100%;
`,Ba=Ee("div")`
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
`,Da=Ee("div")`
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
`,Ha=({images:e,className:t,callbackAfterImageClick:i,isAi:o,imageCount:r=4})=>{const{t:n}=qi(),a=se(null),s=e?.slice(0,r),l=!1,d=s?.length;return s&&s.length>0&&V(Pa,{className:Bt("reputon-grid-review-images",t),$count:d,$isLong:l,ref:a,children:s.map((t,a)=>V(Ea,{className:"reputon-grid-images-container",$isLong:l,$count:d,children:V(Oa,{className:"reputon-grid-images-inner",children:V(Ba,{className:"reputon-grid-images-media",onClick:()=>{i?.(t,o)},tabIndex:0,role:"button","aria-label":n("review_image"),onKeyPress:()=>{i?.(t,o)},children:V(Da,{className:"reputon-grid-images-image-container",$hideImageCount:s.length===a+1&&e&&e.length>r?e.length-r+1:void 0,children:V("img",{className:"reputon-grid-images-image",loading:"lazy",alt:"review image",src:t})})})})},a))})},Fa=F({isOpen:!1,handleShowMore:()=>{},ref:{},showButton:!1}),Ua=Pe`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Va="reputon-logo-text",Ga="reputon-logo-icon",Wa=Ee("div")`
    display: flex;
    align-items: ${e=>e.$fixedReviewsHeight?"stretch":"flex-start"};
    height: ${e=>e.$fixedReviewsHeight?"100%":"auto"};
    gap: 20px;
    width: 100%;
    animation: ${e=>e.$animation?`\n                  ${Ua} .5s linear forwards\n              `:"none"};
`,Za=Ee("div")`
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
    ${e=>{const t=e.theme.solidShadow;return e.$hasSolidShadow&&`\n            border-right: 8px solid ${t};\n            border-bottom: 8px solid ${t};\n        `}};
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
`,qa=Ee("div")`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`,Ka=Ee("div")`
    max-width: 100%;
    display: flex;
    gap: 10px;
    justify-content: space-between;
`,Xa=Ee("div")`
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
`,Ya=Ee("span")``,Ja=Ee("div")`
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
    ${e=>e.$disableHover?"":`\n            @media (hover: hover) and (pointer: fine) {\n                &:hover {\n                    .${Va} {\n                        opacity: 1;\n                        visibility: visible;\n                    }\n                    .${Ga} {\n                        opacity: 0;\n                        visibility: visible;\n                    }\n                }\n            }\n        `}
`,Qa=Ee("div")`
    display: flex;
    position: relative;
    min-width: ${e=>14*(e.$imagesPreviewCount-1)+70}px;
    min-height: 80px;
    margin-top: auto;
    gap: 1%;
`,es=Ee("div")`
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
            ${({$isOpen:e,$hideImageCount:t})=>!e&&`\n                    content: ${t?`'+${t}'`:""};\n                    position: absolute;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    color: white;\n                    left: 0;\n                    top: 0;\n                    width: 100%;\n                    height: 100%;\n                    font-size: 26px;\n                    font-weight: 700;\n                    background: rgba(0, 0, 0, 30%);\n                `}
        }
    }
    &:nth-child(2) {
        --n: 3;
    }
    &:nth-child(3) {
        --n: 4;
        &::after {
            ${({$isOpen:e,$hideImageCount:t})=>e&&`\n                    content: ${t?`'+${t}'`:""};\n                    position: absolute;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    color: white;\n                    left: 0;\n                    top: 0;\n                    width: 100%;\n                    height: 100%;\n                    font-size: 26px;\n                    font-weight: 700;\n                    background: rgba(0, 0, 0, 30%);\n                `}
        }
    }
`,ts=Ee("div")`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
`,is=Ee("div")`
    font-weight: 600;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
`,os=Ee("div")`
    display: flex;
    flex-direction: column;
    line-height: 1.45;
    overflow: hidden;
`,rs=Ee("div")`
    min-width: 40px;
    width: 40px;
    height: 40px;
`,ns=Ee("div")`
    display: flex;
    gap: 10px;
    overflow: hidden;
`,as=Ee("div")`
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
`,ss=Ee("div")`
    display: flex;
    position: relative;
    justify-content: space-between;
    gap: 16px;
    ${e=>e.$isOpen?"\n                  flex-direction: column;\n              ":""};
`,ls=Ee("div",Kr)`
    overflow: hidden;
    position: relative;
    display: -webkit-box;
    text-align: left;
    color: ${e=>e.theme.widgets.grid.colorDescription};
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${({$openRows:e})=>e||4};
    ${({$isOpen:e,$hasShowMore:t,$openRows:i})=>t?e?"\n                  cursor: pointer;\n                  -webkit-line-clamp: unset;\n              ":`\n                  cursor: pointer;\n                  -webkit-line-clamp: ${i||4};\n              `:e?"\n            -webkit-line-clamp: unset;\n        ":void 0};
`,ds=Ee("div")`
    display: flex;
    gap: 4px;
`,cs=Ee("img")`
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`,ps=({header:e,hiddenContainer:t,imagesBlock:i,actionButton:o,info:r,rating:n,mediumImagesBlock:a,solidShadow:s,allClosed:l,alwaysOpen:d,animation:c,isAICard:p,fixedReviewsHeight:u,className:h,...m})=>{const[g,w]=ne(()=>d),[f,v]=ne(!1),x=se(null);return ae(()=>{d||x.current&&setTimeout(()=>{const e=x.current?.clientHeight,t=x.current?.scrollHeight;e&&t&&v(t>e)},150)},[]),ae(()=>{l&&(d||w(!1))},[l]),V(Fa.Provider,{value:{isOpen:g??!1,handleShowMore:()=>{d||w(e=>!e)},ref:x,showButton:f},children:V(Wa,{$fixedReviewsHeight:u??!1,className:Bt(h,"reputon-single-review","reputon-card"),$animation:c,...m,children:V(qa,{className:"reputon-container",children:[V(Za,{$hasSolidShadow:s,className:"reputon-top-part",children:[e,n,t,f&&o,a,i]}),r]})})})};ps.Header=function({className:e,info:t,logoApp:i}){return V(Ka,{className:Bt(e,"reputon-review-header"),children:[t,i]})},ps.RatingIcons=function({className:e,children:t}){return t&&V(ds,{className:Bt(e,"reputon-rating-stars"),children:t})},ps.Logo=function({className:e,children:t,disableHover:i}){return t&&V(Ja,{className:Bt(e,"reputon-review-logo"),$disableHover:i,children:[!i&&V(Xa,{className:Va,children:[V("span",{children:"Powered by"}),V(tr,{})]}),V(Ya,{className:Ga,children:t})]})},ps.HiddenContainer=function({imagesContainer:e,textContainer:t,className:i}){const{isOpen:o}=ce(Fa);return V(ss,{$isOpen:o,className:Bt(i,"reputon-text-holder"),children:[t,e]})},ps.TextContainer=function({children:e,className:t,onClick:i,openRows:o=4}){const{isOpen:r,ref:n,handleShowMore:a,showButton:s}=ce(Fa);return V(ls,{$openRows:o,$isOpen:r,$hasShowMore:s,ref:n,className:Bt(t,"reputon-text"),onClick:()=>{i?.(),s&&a()},children:e})},ps.Images=function({images:e,className:t,callbackAfterImageClick:i,isAi:o}){const{isOpen:r}=ce(Fa),{t:n}=qi();return e&&e.length>0&&V(Qa,{className:Bt(t,"reputon-review-images"),$isOpen:r,$imagesPreviewCount:e?.slice(0,3).length,children:e?.slice(0,3).map((t,a)=>V(es,{className:"reputon-small-images-container",onClick:()=>i?.(t,o),$hideImageCount:e.length>3?e.length-2:void 0,$isOpen:r,tabIndex:0,role:"button","aria-label":n("review_image"),onKeyPress:()=>{i?.(t,o)},children:V(cs,{src:t,alt:"review image",loading:"lazy",className:"reputon-small-images-media"})},a))})},ps.MediumImages=function({images:e,className:t,callbackAfterImageClick:i,isAi:o}){const{isOpen:r}=ce(Fa),{t:n}=qi();return r?V(Ha,{images:e,callbackAfterImageClick:i}):e&&e.length>0&&V(Qa,{$imagesPreviewCount:3,className:Bt(t,"reputon-review-images"),$isOpen:!0,children:e?.slice(0,3).map((t,r)=>V(es,{className:"reputon-medium-images-container",onClick:()=>i?.(t,o),$hideImageCount:e.length>3?e.length-2:void 0,$isOpen:!0,tabIndex:0,role:"button","aria-label":n("review_image"),onKeyPress:()=>{i?.(t,o)},children:V(cs,{src:t,alt:"review image",loading:"lazy",className:"reputon-medium-images-media"})},r))})},ps.ShowMoreBtn=function({children:e,className:t}){const{handleShowMore:i,isOpen:o}=ce(Fa),{t:r}=qi();return V(as,{role:"button",tabIndex:0,"aria-label":r(o?"show_less":"show_more"),onKeyPress:i,className:Bt(t,"reputon-show-more"),onClick:i,children:e?.(o)})},ps.InfoTop=function({className:e,icon:t,attributes:i}){return V(ns,{className:Bt(e,"reputon-reviewer-info"),children:[t,i]})},ps.Info=function({className:e,icon:t,attributes:i,style:o}){return V(ns,{style:o,className:Bt(e,"reputon-bottom-part"),children:[t,i]})},ps.Icon=function({className:e,children:t}){return t&&V(rs,{className:Bt(e,"reputon-image"),children:t})},ps.Attributes=function({name:e,time:t,className:i}){return V(os,{className:Bt(i,"reputon-attributes"),children:[e,t]})},ps.Name=function({children:e,className:t}){return e&&V(is,{className:Bt(t,"reputon-name"),children:e})},ps.Time=function({children:e,className:t}){return e&&V(ts,{className:Bt(t,"reputon-date"),children:e})};const us=({className:e,style:t})=>V("svg",{viewBox:"0 0 12 10",width:"12",height:"10",fill:"currentColor",className:e,style:t,children:V("g",{children:V("path",{fill:"currentColor","fill-rule":"evenodd",d:"M10.043.554a1 1 0 011.497 1.32l-.083.095-6.272 6.899a1 1 0 01-1.32.083l-.095-.083-3.227-3.5a1 1 0 011.32-1.498l.094.083 2.52 2.793L10.043.554z","clip-rule":"evenodd"})})}),hs=Ee("div")`
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
`,ms=Ee(ps.TextContainer)``,gs=Ee("p")`
    color: ${e=>e.theme.summary.colorDescription};

    &:last-of-type {
        margin-bottom: 0;
    }
`,ws=Ee(ps.ShowMoreBtn)`
    color: ${e=>e.theme.summary.colorShowMore};
`,fs=Ee(ps.Name)`
    color: ${e=>e.theme.summary.colorName};
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    background-color: ${e=>e.theme.summary.colorBadge};
    padding: 2px 8px;
    margin-bottom: 2px;
    border-radius: 99px;
    width: fit-content;
`,vs=Ee(ps.Time)`
    color: ${e=>e.theme.summary.colorTime};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`,xs=Ee(us)`
    margin-right: 6px;
    display: inline-block;
`,bs=Ee(Ha)`
    margin-top: auto;
`,_s=Ee(ps.Header)``,ys=Ee(ps.RatingIcons)`
    margin-top: -8px;
    opacity: 0;
`,$s=({allClosed:e,alwaysOpen:t,reviewsNumber:i,items:o,onChangeShowMoreState:r,options:n,onImageClick:a,images:s})=>{const{t:l,locale:d}=qi(),{reviewPhotosType:c,hasShadow:p,fixedReviewsHeight:u}=n??{},h=V(ys,{children:["full"].map((e,t)=>V(ii,{ratingType:"stars",emojiType:1,fill:"full"},t))});return V(ps,{className:"reputon-summary-review",alwaysOpen:t,allClosed:e,isAICard:!0,fixedReviewsHeight:u,solidShadow:p,header:V(_s,{logoApp:V(ps.Logo,{disableHover:!0,children:V(ja,{})}),info:V(ps.InfoTop,{icon:V(ps.Icon,{children:V(hs,{children:" "})}),attributes:V(ps.Attributes,{name:V(fs,{children:l("ai_summary")}),time:V(vs,{children:[`${l("based_on")}`," ",V(ir,{value:i,locale:d})," ",`${l("reviews")}`]})})})}),rating:h,hiddenContainer:V(ps.HiddenContainer,{imagesContainer:"small"===c?V(ps.Images,{images:s?.map(({thumbnailUrl:e})=>e),callbackAfterImageClick:(e,t)=>a?.(e,t),isAi:!0}):null,textContainer:V(ms,{onClick:r,children:o?.map((e,t)=>V(gs,{children:[V(xs,{}),`${e}`]},t))})}),actionButton:V(ws,{children:e=>V("span",e?{children:l("show_less")}:{onClick:r,children:l("show_more")})}),info:V(ps.Info,{style:{display:"none"},icon:V(ps.Icon,{children:V(hs,{children:" "})}),attributes:V(ps.Attributes,{name:V(fs,{children:l("ai_summary")}),time:V(vs,{children:`${l("based_on")} ${i} ${l("reviews")}`})})}),mediumImagesBlock:"medium"===c?V(ps.MediumImages,{callbackAfterImageClick:(e,t)=>a?.(e,t),images:s?.map(({thumbnailUrl:e})=>e),isAi:!0}):null,imagesBlock:"large"===c?V(bs,{callbackAfterImageClick:(e,t)=>a?.(e,t),images:s?.map(({thumbnailUrl:e})=>e),isAi:!0,imageCount:t?1:4}):null})},ks=e=>{switch(e){case"large":return"large";case"medium":return"medium";case"compact":return"compact";default:return"small"}},Ss=Ee("div")`
    display: none;
    order: 2;
    justify-content: center;
    gap: 16px;

    @container wrapper (max-width:${Ze}px) {
        display: flex;
        & button {
            display: flex;
        }
    }
`,Cs=()=>"\n    position: absolute;\n    top: 50%;\n    z-index: 10;\n\n    flex-shrink: 0;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 1000px;\n    display: flex;\n    align-items: center !important;\n    justify-content: center !important;\n    cursor: pointer;\n    @container wrapper (max-width:740px) {\n        display: none;\n        top: 0;\n        position: relative;\n        transform: none;\n    }\n",Ns=Ee("button")`
    transform: translate(-50%, -50%);
    left: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${Cs}
`,Rs=Ee("button")`
    order: 2;
    transform: translate(50%, -50%);
    right: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${Cs}
`,Ts=({className:e})=>{const{t:t}=qi();return V(Ss,{className:Bt(e,"reputon-bottom-navigation-btns"),children:[V(Ns,{type:"button","aria-label":t("previous_slide"),className:"reputon-swiper-button-prev",children:V(Fr,{})}),V(Rs,{type:"button","aria-label":t("next_slide"),className:"reputon-swiper-button-next",children:V(Ur,{})})]})},As=Ee("div")`
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
`,Is=Ee("div")`
    display: flex;
    gap: 4px;
    align-items: center;
    max-width: 100%;
    flex-direction: column;
`,Ls=Ee("div")`
    min-width: 32px;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 50%;
`,zs=Ee("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    min-width: 0;
`,Ms=Ee(Xi)``,js=Ee("span")`
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: ${e=>e.theme.widgets.carousel.colorSellerName};
`,Ps=Ee("div")`
    display: flex;
    gap: 4px;
    align-items: center;
    color: ${e=>e.theme.widgets.carousel.colorSellerStars};
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}

    ${({$ratingType:e,theme:t})=>"emoji"===e&&`\n            color: ${t.widgets.carousel.colorSellerName};\n        `}
`,Es=Ee("span")`
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
`,Os=Ee("div")`
    display: flex;
    gap: 2px;
    align-items: center;
`,Bs=Ee(ii)`
    width: 12px;
    height: 12px;
`,Ds=Ee("span")`
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
    display: flex;
    align-items: flex-end;
    gap: 4px;
    line-height: 14px;
    font-weight: 500;
    font-size: 10px;
`,Hs=Ee(tr)`
    min-width: 35px;
    height: 12px;
    margin-left: 0;
`,Fs=Ee(ri)`
    width: 100%;
`,Us=Ee(Ji)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    width: 100%;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    padding-inline: 8px;
`,Vs=Ee("div")`
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

    @container wrapper (max-width:${Ze}px) {
        padding: 12px 16px;
    }
`,Gs=Ee("div")`
    min-width: 160px;
    width: 160px;
    height: 160px;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 50%;
    @container wrapper (max-width:${Ze}px) {
        min-width: 120px;
        width: 120px;
        height: 120px;
    }
`,Ws=Ee("div")`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    max-width: 100%;
`,Zs=Ee(Xi)``,qs=Ee("span")`
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    color: ${e=>e.theme.widgets.carousel.colorSellerName};
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    @container wrapper (max-width:${Ze}px) {
        font-size: 20px;
        line-height: 27px;
    }
`,Ks=Ee("div")`
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${e=>e.theme.widgets.carousel.colorSellerStars};
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}

    ${({$ratingType:e,theme:t})=>"emoji"===e&&`\n            color: ${t.widgets.carousel.colorSellerName};\n        `}
`,Xs=Ee("span")`
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    @container wrapper (max-width:${Ze}px) {
        font-size: 22px;
        line-height: 25px;
    }
`,Ys=Ee("div")`
    display: flex;
    gap: 4px;
    align-items: center;
`,Js=Ee(ii)`
    width: 24px;
    height: 24px;
    @container wrapper (max-width:${Ze}px) {
        width: 20px;
        height: 20px;
    }
`,Qs=Ee("span")`
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
    display: flex;
    align-items: center;
    gap: 8px;
    line-height: 26px;
    font-weight: 400;
    font-size: 22px;
    @container wrapper (max-width:${Ze}px) {
        font-size: 20px;
        line-height: 24px;
    }
    @container wrapper (max-width:${qe}px) {
        font-size: 14px;
        line-height: 20px;
    }
`,el=Ee(tr)`
    width: 75px;
    height: 26px;
    @container wrapper (max-width:${Ze}px) {
        width: 69px;
        height: 23px;
    }
`,tl=Ee(ri)`
    width: 100%;
`,il=Ee(Ji)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    width: 100%;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    padding-inline: 20px;
    @container wrapper (max-width:${Ze}px) {
        font-size: 18px;
        line-height: 25px;
        padding-inline: 16px;
    }
`,ol=Ee("div")`
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
`,rl=Ee("div")`
    min-width: 96px;
    width: 96px;
    height: 96px;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 50%;
`,nl=Ee("div")`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    max-width: 100%;
`,al=Ee(Xi)``,sl=Ee("span")`
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    color: ${e=>e.theme.widgets.carousel.colorSellerName};
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    @container wrapper (max-width:${Ze}px) {
        font-size: 20px;
        line-height: 27px;
    }
`,ll=Ee("div")`
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${e=>e.theme.widgets.carousel.colorSellerStars};
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}

    ${({$ratingType:e,theme:t})=>"emoji"===e&&`\n            color: ${t.widgets.carousel.colorSellerName};\n        `}
`,dl=Ee("span")`
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
`,cl=Ee("div")`
    display: flex;
    gap: 4px;
    align-items: center;
`,pl=Ee(ii)`
    width: 24px;
    height: 24px;
`,ul=Ee("span")`
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
    display: flex;
    align-items: center;
    gap: 8px;
    line-height: 26px;
    font-weight: 400;
    font-size: 22px;
    @container wrapper (max-width:${Ze}px) {
        font-size: 20px;
        line-height: 24px;
    }
    @container wrapper (max-width:${qe}px) {
        font-size: 16px;
        line-height: 21px;
    }
`,hl=Ee(tr)`
    width: 75px;
    height: 26px;
`,ml=Ee(ri)`
    width: 100%;
`,gl=Ee(Ji)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    width: 100%;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    padding-inline: 16px;
    @container wrapper (max-width:${Ze}px) {
        font-size: 18px;
        line-height: 25px;
    }
`,wl=Ee("div")`
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

    @container wrapper (max-width:${Ze}px) {
        padding: 12px 8px;
        gap: 8px;
    }
`,fl=Ee("div")`
    display: flex;
    gap: 8px;
    align-items: center;
    max-width: 100%;
`,vl=Ee("div")`
    min-width: 48px;
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 50%;
`,xl=Ee("div")`
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
`,bl=Ee(Xi)``,_l=Ee("span")`
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: ${e=>e.theme.widgets.carousel.colorSellerName};
`,yl=Ee("div")`
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${e=>e.theme.widgets.carousel.colorSellerStars};
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}

    ${({$ratingType:e,theme:t})=>"emoji"===e&&`\n            color: ${t.widgets.carousel.colorSellerName};\n        `}
`,$l=Ee("span")`
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    @container wrapper (max-width:${Ze}px) {
        font-size: 22px;
        line-height: 25px;
    }
`,kl=Ee("div")`
    display: flex;
    gap: 2px;
    align-items: center;
`,Sl=Ee(ii)`
    width: 16px;
    height: 16px;
`,Cl=Ee("span")`
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
    display: flex;
    align-items: center;
    gap: 3px;
    line-height: 17px;
    font-weight: 400;
    font-size: 14px;
`,Nl=Ee(tr)`
    width: 46px;
    height: 16px;
`,Rl=Ee(ri)`
    width: 100%;
`,Tl=Ee(Ji)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    width: 100%;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    padding-inline: 10px;
`,Al=Ee("div")`
    display: flex;
    align-items: stretch;
    /* align-items: ${e=>e.$fixedReviewsHeight?"stretch":"flex-start"}; */
    gap: 20px;
    width: 100%;
    height: 100%;
`,Il=Ee("div")`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`,Ll={large:({options:{isNameEditable:e,ratingType:t,emojiType:i,writeReviewEnabled:o,hasSolidShadow:r},data:{name:n,imageUrl:a,url:s,rating:l,ratingIcons:d,reviewsNumber:c,writeReviewUrl:p}})=>{const{t:u,locale:h}=qi();return V(Vs,{className:"reputon-top-part reputon-reviews-head",$hasSolidShadow:r,children:[V(ri,{url:s,label:`${n} ${u("reviews")}`,children:V(Gs,{className:"reputon-image",children:V(Zs,{className:"reputon-logo",src:a,alt:u("business_image")})})}),V(Ws,{className:"reputon-content",children:[V(ri,{inherit:!0,url:s,label:`${n} ${u("reviews")}`,children:V(qs,{className:"reputon-name",$isEditable:e,content:n,children:n})}),V(ri,{url:s,label:`${n} ${u("reviews")}`,children:V(Ks,{$ratingType:t,className:"reputon-rating-stars",children:[V(Xs,{className:"reputon-count-number",children:_e(l)}),V(Ys,{className:"reputon-count-text",children:d?.map((e,o)=>V(Js,{ratingType:t,emojiType:i,fill:e},o))})]})}),V(Qs,{className:"reputon-reviews-count",children:[V(ir,{value:c,locale:h})," ",u("reviews_on"),V(el,{className:"reputon-reviews-logo",$isWide:!0})]})]}),o&&p&&V(tl,{label:u("write_review"),url:p,children:V(il,{label:u("write_review"),className:"reputon-bt reputon-link reputon-leave-review editable",content:u("write_review")})})]})},medium:({options:{isNameEditable:e,ratingType:t,emojiType:i,writeReviewEnabled:o,hasSolidShadow:r},data:{name:n,imageUrl:a,url:s,rating:l,ratingIcons:d,reviewsNumber:c,writeReviewUrl:p}})=>{const{t:u,locale:h}=qi();return V(ol,{className:"reputon-top-part reputon-reviews-head",$hasSolidShadow:r,children:[V(ri,{url:s,label:`${n} ${u("reviews")}`,children:V(rl,{className:"reputon-image",children:V(al,{className:"reputon-logo",src:a,alt:u("business_image")})})}),V(nl,{className:"reputon-content",children:[V(ri,{inherit:!0,url:s,label:`${n} ${u("reviews")}`,children:V(sl,{className:"reputon-name",$isEditable:e,content:n,children:n})}),V(ri,{url:s,label:`${n} ${u("reviews")}`,children:V(ll,{$ratingType:t,className:"reputon-rating-stars",children:[V(dl,{className:"reputon-count-number",children:_e(l)}),V(cl,{className:"reputon-count-text",children:d?.map((e,o)=>V(pl,{ratingType:t,emojiType:i,fill:e},o))})]})}),V(ul,{className:"reputon-reviews-count",children:[V(ir,{value:c,locale:h})," ",u("reviews_on"),V(hl,{className:"reputon-reviews-logo",$isWide:!0})]})]}),o&&p&&V(ml,{label:u("write_review"),url:p,children:V(gl,{label:u("write_review"),className:"reputon-bt reputon-link reputon-leave-review editable",content:u("write_review")})})]})},small:({options:{isNameEditable:e,ratingType:t,emojiType:i,writeReviewEnabled:o,hasSolidShadow:r},data:{name:n,imageUrl:a,url:s,rating:l,ratingIcons:d,reviewsNumber:c,writeReviewUrl:p}})=>{const{t:u,locale:h}=qi();return V(wl,{className:"reputon-top-part reputon-reviews-head",$hasSolidShadow:r,children:[V(fl,{className:"reputon-info",children:[V(ri,{url:s,label:`${n} ${u("reviews")}`,children:V(vl,{className:"reputon-image",children:V(bl,{className:"reputon-logo",src:a,alt:u("business_image")})})}),V(xl,{className:"reputon-content",children:[V(Rl,{inherit:!0,url:s,label:`${n} ${u("reviews")}`,children:V(_l,{className:"reputon-name",$isEditable:e,content:n,children:n})}),V(ri,{url:s,label:`${n} ${u("reviews")}`,children:V(yl,{$ratingType:t,className:"reputon-rating-stars",children:[V($l,{className:"reputon-count-number",children:_e(l)}),V(kl,{className:"reputon-count-text",children:d?.map((e,o)=>V(Sl,{ratingType:t,emojiType:i,fill:e},o))})]})}),V(Cl,{className:"reputon-reviews-count",children:[V(ir,{value:c,locale:h})," ",u("reviews_on"),V(Nl,{className:"reputon-reviews-logo",$isWide:!0})]})]})]}),o&&p&&V(Rl,{label:u("write_review"),url:p,children:V(Tl,{label:u("write_review"),className:"reputon-bt reputon-link reputon-leave-review editable",content:u("write_review")})})]})},compact:({options:{isNameEditable:e,ratingType:t,emojiType:i,writeReviewEnabled:o,hasSolidShadow:r},data:{name:n,imageUrl:a,url:s,rating:l,ratingIcons:d,reviewsNumber:c,writeReviewUrl:p}})=>{const{t:u,locale:h}=qi();return V(As,{className:"reputon-top-part reputon-reviews-head",$hasSolidShadow:r,children:[V(Is,{className:"reputon-info",children:[V(ri,{url:s,label:`${n} ${u("reviews")}`,children:V(Ls,{className:"reputon-image",children:V(Ms,{className:"reputon-logo",src:a,alt:u("business_image")})})}),V(zs,{className:"reputon-content",children:[V(Fs,{inherit:!0,url:s,label:`${n} ${u("reviews")}`,children:V(js,{className:"reputon-name",$isEditable:e,content:n,children:n})}),V(ri,{url:s,label:`${n} ${u("reviews")}`,children:V(Ps,{$ratingType:t,className:"reputon-rating-stars",children:[V(Es,{className:"reputon-count-number",children:_e(l)}),V(Os,{className:"reputon-count-text",children:d?.map((e,o)=>V(Bs,{ratingType:t,emojiType:i,fill:e},o))})]})}),V(Ds,{className:"reputon-reviews-count",children:[V(ir,{value:c,locale:h})," ",u("reviews_on"),V(Hs,{className:"reputon-reviews-logo",$isWide:!0})]})]})]}),o&&p&&V(Fs,{label:u("write_review"),url:p,children:V(Us,{label:u("write_review"),className:"reputon-bt reputon-link reputon-leave-review editable",content:u("write_review")})})]})}},zl=({className:e,options:t,...i})=>{const o=Ll[t.cardType];return V(Al,{className:Bt(e,"reputon-single-review","reputon-card"),$fixedReviewsHeight:t.fixedReviewsHeight,children:V(Il,{className:"reputon-container",children:V(o,{...i,options:t})})})},Ml=Ee("svg")`
    filter: ${e=>"black"===e.theme.theme?"brightness(100)":"none"};
`,jl=({className:e})=>V(Ml,{viewBox:"0 0 512 512",width:"100%",className:e,children:V("g",{style:"fill: none",height:"100%",width:"100%",fill:"none","fill-rule":"evenodd",children:[V("path",{d:"M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z",fill:"#4285f4"}),V("path",{d:"M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z",fill:"#34a853"}),V("path",{d:"M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z",fill:"#fbbc05"}),V("path",{d:"M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z",fill:"#ea4335"}),V("path",{d:"M20 20h472v472H20V20z"})]})}),Pl=Ee(({className:e})=>V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 585.86 585.7",className:e,children:V("g",{children:[V("path",{d:"M292.91,0c35.61,0,89.68,76.34,89.68,76.34S474.9,60.5,500.05,85.53C525.23,110.87,509.42,203,509.42,203s76.44,54.17,76.44,89.65c0,35.8-76.44,89.65-76.44,89.65s15.81,92.49-9.37,117.52c-25.15,25.34-117.46,9.5-117.46,9.5s-54.07,76.34-89.68,76.34-89.67-76.34-89.67-76.34S111,525.2,85.78,499.86c-25.15-25-9.38-117.52-9.38-117.52S0,328.49,0,292.69C0,257.21,76.4,203,76.4,203S60.63,110.87,85.78,85.53c25.18-25,117.46-9.19,117.46-9.19S257.34,0,292.91,0Z",style:"fill: currentColor;fill-rule: evenodd"}),V("path",{d:"M289.15,296.22l91-91.34a17.36,17.36,0,0,1,24.55,0l24.54,24.66a17.48,17.48,0,0,1,0,24.65L307.88,375.81a7.18,7.18,0,0,1-1.13,1.33l-24.56,24.65a17.38,17.38,0,0,1-24.66,0L233,377.14a6.78,6.78,0,0,1-1.12-1.33l-63.52-63.7a17.29,17.29,0,0,1,0-24.49L192.89,263a17.37,17.37,0,0,1,24.56,0l48.1,48.16h0l.1.16,4.23,4.3,0-.16,49.17,48.81Z",style:"fill:currentColor;  fill-rule: evenodd"})]})}))`
    color: ${e=>"black"===e.theme.theme?"#ffffff":"#518EF8"};
    width: 100%;
    height: 100%;
    & path:last-child {
        color: ${e=>"black"===e.theme.theme?"#000000":"#ffffff"};
    }
`,El=Ee("div")`
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
`,Ol=Ee("div")`
    position: relative;
    width: 17px;
    height: 17px;
    &:hover .reputon-verified-label {
        opacity: 1;
        visibility: visible;
        transform: translateX(7px);
    }
`,Bl=({className:e,verified:t})=>V(Ol,{className:Bt("reputon-verified",e),children:[V(Pl,{className:Bt("reputon-verified-icon")}),V(El,{className:"reputon-verified-label",children:t})]}),Dl=Ee(jl)`
    width: 17px;
    height: 17px;
`,Hl=Ee(ps.RatingIcons)`
    color: ${e=>e.theme.widgets.carousel.colorReviewStars};
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}
`,Fl=Ee(ps.TextContainer)`
    color: ${e=>e.theme.widgets.carousel.colorDescription};
`,Ul=Ee(ps.ShowMoreBtn)`
    color: ${e=>e.theme.widgets.carousel.colorShowMore};
`,Vl=Ee(ps.Time)`
    color: ${e=>e.theme.widgets.carousel.colorTime};
`,Gl=Ee(ps.Name)`
    color: ${e=>e.theme.widgets.carousel.colorName};
`,Wl=Ee(Bl)`
    margin-left: 7px;
`,Zl=Ee(Ha)`
    margin-top: auto;
`,ql=({review:e,allClosed:t,options:i,verified:o,onChangeShowMoreState:r,onImageClick:n})=>{const{t:a}=qi(),{authorUrl:s,rating:l,text:d,profilePhotoUrl:c,authorName:p,relativeTimeDescription:u,images:h}=e,{fixedReviewsHeight:m,hasSolidShadow:g,ratingType:w,emojiType:f,reviewPhotosType:v}=i,x=be(l),b=l?V(Hl,{$ratingType:w,children:[x?.map((e,t)=>V(ii,{ratingType:w,emojiType:f,fill:e},t)),o&&V(Wl,{verified:a("verified")})]}):null;return V(ps,{allClosed:t,fixedReviewsHeight:m,solidShadow:g,header:V(ps.Header,{logoApp:V(ps.Logo,{children:V(Dl,{})}),info:V(ps.InfoTop,{icon:V(ps.Icon,{children:V(ri,{url:s,label:`${p} ${a("review")}`,children:V(Xi,{src:c,alt:`${p} ${a("image")}`})})}),attributes:V(ps.Attributes,{name:V(Gl,{children:V(ri,{inherit:!0,url:s,label:`${p} ${a("review")}`,children:p})}),time:V(Vl,{children:u})})})}),rating:b,hiddenContainer:V(ps.HiddenContainer,{textContainer:V(Fl,{onClick:r,children:d}),imagesContainer:"small"===v?V(ps.Images,{images:h?.map(({thumbnailUrl:e})=>e),callbackAfterImageClick:n}):null}),actionButton:V(Ul,{children:e=>V("span",e?{children:a("show_less")}:{onClick:r,children:a("show_more")})}),mediumImagesBlock:"medium"===v?V(ps.MediumImages,{images:h?.map(({thumbnailUrl:e})=>e),callbackAfterImageClick:n}):null,imagesBlock:"large"===v?V(Zl,{callbackAfterImageClick:n,images:h?.map(({thumbnailUrl:e})=>e)}):null,info:V(ps.Info,{style:{display:"none"},icon:V(ps.Icon,{children:V(ri,{url:s,label:`${p} ${a("review")}`,children:V(Xi,{src:c,alt:`${p} ${a("image")}`})})}),attributes:V(ps.Attributes,{name:V(Gl,{children:V(ri,{url:s,label:`${p} ${a("review")}`,children:p})}),time:V(Vl,{children:u})})})})},Kl=Ee(Dr)`
    background-color: ${({theme:e})=>e.widgets.carousel.dotted.default};
    ${({$variant:e,theme:t})=>"edge"===e&&`\n        background-color: ${t.widgets.carousel.dotted.edge};\n    `}

    ${({$variant:e,theme:t})=>"center"===e&&`\n        background-color: ${t.widgets.carousel.dotted.center};\n    `}
`,Xl=Ee(Ji)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    align-self: center;
`,Yl=({url:e})=>{const{t:t}=qi();return V(ri,{className:"reputon-buttons-holder",url:e,style:{alignSelf:"center",display:"none"},label:t("write_review"),children:V(Xl,{className:"reputon-bt reputon-link reputon-leave-review editable",content:t("write_review")})})},Jl=Ee("div")`
    display: flex;
    flex-direction: column;
    gap: ${e=>e.$gap}px;
    mask-image: ${({$hasShadow:e})=>e&&"linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 5%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0.2) 95%, rgba(0, 0, 0, 0) 100%)"};
    margin: 0 ${e=>e.$inlineMargin}px;
    @container wrapper (max-width:${Ze}px) {
        margin: 0;
    }
`,Ql=({hasShadow:e,carousel:t,deprecatedLeaveReviewButton:i,header:o,gap:r=8,bottomNavigationButtons:n,inlineMargin:a=32,dottedNavigation:s})=>V(Jl,{$inlineMargin:a,$gap:r,$hasShadow:e,className:"reputon-carousel-container",children:[o,t,i,n,s&&V(ed,{children:s})]}),ed=Ee("div")`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,td=Ee("div")`
    display: flex;
    width: 100%;
    overflow: hidden;
    mask-image: ${({$hasShadow:e})=>e&&"linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 5%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0.2) 95%, rgba(0, 0, 0, 0) 100%)"};
    @container wrapper (max-width:${Ze}px) {
        gap: 0;
    }

    @container wrapper (max-width:${Ze}px) {
        mask-image: ${({$hasShadow:e})=>e&&"linear-gradient(90deg,\n          rgba(0, 0, 0, 0) 0%,\n          rgba(0, 0, 0, 0.1) 1%,\n          rgba(0, 0, 0, 1) 6%,\n          rgba(0, 0, 0, 1) 94%,\n          rgba(0, 0, 0, 0.1) 99%,\n          rgba(0, 0, 0, 0) 100%\n        );"};
    }
`,id=Pe`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`,od=Ee("div",Kr)`
    display: flex;
    animation: ${id} ${e=>e.$animationDuration}s linear infinite;
`,rd=Ee("div")`
    display: flex;
    gap: ${e=>e.$gap}px;
    margin-right: ${e=>e.$gap}px;
`,nd=Ee("div")`
    display: flex;
    height: auto;
    transition: 0.2s;
    flex-shrink: 0;
    width: ${({$width:e})=>e}px;
`,ad=({className:e,reviews:t,renderCardItem:i,swiperOptions:o,isPopupOpen:r,gap:n=20,slideWidth:a=350})=>{const{sliderRef:s,startAnimation:l,stopAnimation:d,handleMouseEnter:c,handleMouseLeave:p,handleTouchMobileSwiper:u}=(()=>{const[e,t]=ne(!0),i=se(null),o=se(void 0),r=se(void 0),n=!window.matchMedia("(hover: hover)").matches,a=()=>{void 0!==o.current&&(clearInterval(o.current),o.current=void 0)},s=()=>{void 0!==r.current&&(clearInterval(r.current),r.current=void 0)};ae(()=>{i.current&&(e?d():l())},[e]),ae(()=>()=>{a(),s()},[]);const l=()=>{const e=i.current?.getAnimations()[0];if(!e)return;a(),s();let t=e.playbackRate||1;o.current=setInterval(()=>{if(t-=.1,t<=0)return t=0,e.playbackRate=t,e.pause(),void a();e.playbackRate=t},50)},d=()=>{const e=i.current?.getAnimations()[0];if(!e)return;s(),a();let t=e.playbackRate||0;"paused"===e.playState&&e.play(),r.current=setInterval(()=>{t+=.2,t>.9&&(t=1,s()),e.playbackRate=t},50)};return{sliderRef:i,slowDownAnimation:l,slowUpAnimation:d,stopAnimation:()=>{const e=i.current?.getAnimations()[0];e&&e.pause()},startAnimation:()=>{const e=i.current?.getAnimations()[0];e&&e.play()},handleMouseEnter:()=>{!n&&l()},handleMouseLeave:()=>{!n&&d()},handleTouchMobileSwiper:e=>{i.current&&!i.current.contains(e?.target)?t(!0):t(e=>!e)}}})(),{speed:h,hasShadow:m}=o;return ae(()=>{r?d():l()},[r]),ae(()=>(window.addEventListener("touchstart",u),()=>{window.removeEventListener("touchstart",u)}),[]),V(td,{className:e,$hasShadow:m,children:V(od,{ref:s,onMouseEnter:c,onMouseLeave:p,className:"reputon-slider",$animationDuration:h*t.length/2,children:Array(2).fill(0).map((e,o)=>V(rd,{$gap:n,children:t?.map((e,t)=>V(nd,{$width:a,className:"reputon-slide",children:i({review:e,stopSwiper:d})},t))},o))})})},sd={active:!0,breakpoints:{},delay:4e3,instant:!1,defaultInteraction:!0,stopOnLastSnap:!1,rootNode:null};function ld(e={}){let t,i,o,r=!1,n=!1,a=null,s=null,l=0,d=!1,c=!1,p=!1,u=!1,h=!1,m=b;function g(){return!r&&!n&&t.active}function w(){g()&&(x()?c=!0:(d||i.createEvent("autoplay:play",null).emit(),function(){const{ownerWindow:e}=i.internalEngine().nodeHandler;if(!e)return;const t=(new Date).getTime(),o=i.createEvent("autoplay:timerset",{startTime:t});e.clearTimeout(l),l=e.setTimeout(y,$()),s=t,o.emit()}(),d=!0))}function f(){g()&&(d&&i.createEvent("autoplay:stop",null).emit(),function(){const{ownerWindow:e}=i.internalEngine().nodeHandler;if(!e)return;const t=(new Date).getTime(),o=i.createEvent("autoplay:timerstopped",{stopTime:t});e.clearTimeout(l),l=0,s=null,o.emit()}(),d=!1)}function v(){if(x())return c=d,f();c&&w()}function x(){const{ownerDocument:e}=i.internalEngine().nodeHandler;return!!e&&"hidden"===e.visibilityState}function b(e,t,i){const o=t.type,r=i||o;"slidefocus"===r&&f(),"pointerdown"===r&&f()}function _(e,t,o){const r=t.type,n=o||r;"mouseenter"===n&&(u=!0),"mouseleave"===n&&(u=!1),"pointerdown"===n&&(h=!0),"pointerup"===n&&(h=!1),i.createEvent("autoplay:interaction",{interaction:n,originalEvent:t,isMouseOver:u,isPointerDown:h}).emit()}function y(){const{indexCurrent:e}=i.internalEngine(),o=e.clone().add(1).get(),r=i.snapList().length-1,n=t.stopOnLastSnap&&o===r,s=i.createEvent("autoplay:select",{targetSnap:i.canGoToNext()?o:0,sourceSnap:e.get()});if(i.canGoToNext()?i.goToNext(p):i.goTo(0,p),s.emit(),a=null,n)return f();w()}function $(){return a||o[i.selectedSnap()]}function k(){if(!g())return null;if(!s)return null;const e=(new Date).getTime()-s;return $()-e}return{name:"autoplay",options:e,init:function(a,s){i=a;const{mergeOptions:l,optionsAtMedia:d}=s,c=l(sd,ld.globalOptions),u=l(c,e);if(n=!1,t=d(u),r=i.internalEngine().isSsr,!g())return;if(i.snapList().length<=1)return;p=t.instant,o=function(e,t){const i=e.snapList();return"number"==typeof t?i.map(()=>t):t(i,e)}(i,t.delay),m=t.defaultInteraction?b:_;const{eventStore:h,nodeHandler:w}=i.internalEngine(),{ownerDocument:f}=w,x=function(e,t){const i=e.rootNode();return t&&t(i)||i}(i,t.rootNode);f&&h.add(f,"visibilitychange",v),i.on("pointerdown",m),i.on("pointerup",m),i.on("slidefocus",m),h.add(x,"mouseenter",e=>m(i,e,e.type)),h.add(x,"mouseleave",e=>m(i,e,e.type)),h.add(i.containerNode(),"focusout",e=>m(i,e,"slidefocusout"))},destroy:function(){g()&&(i.off("pointerdown",m).off("pointerup",m).off("slidefocus",m),f(),n=!0,d=!1)},play:function(e){p=null!=e?e:p,w()},stop:function(){d&&f()},reset:function(){d&&w()},pause:function(){d&&(a=k(),f())},isPlaying:function(){return d},timeUntilNext:k}}ld.globalOptions=void 0;const dd=Ee("div")`
    position: relative;
    display: flex;
    width: 100%;
    min-width: 10%;
    align-items: center;
    mask-image: ${({$hasShadow:e})=>e&&"linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 5%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0.2) 95%, rgba(0, 0, 0, 0) 100%)"};
    @container wrapper (max-width:${Ze}px) {
        gap: 0px;
        padding: 0;
    }
`,cd=()=>"\n    position: absolute;\n    top: 50%;\n    z-index: 10;\n\n    flex-shrink: 0;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center !important;\n    justify-content: center !important;\n    border-radius: 1000px;\n    cursor: pointer;\n    @container wrapper (max-width:740px) {\n        display: none;\n        top: 0;\n        position: relative;\n        transform: none;\n    }\n",pd=Ee("button")`
    transform: translate(-50%, -50%);
    left: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${cd}
`,ud=Ee("button")`
    order: 2;
    transform: translate(50%, -50%);
    right: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${cd}
`,hd=[{breakpoint:1700,slidesPerView:4},{breakpoint:1320,slidesPerView:3},{breakpoint:935,slidesPerView:2},{breakpoint:550,slidesPerView:1}],md=({className:e,reviews:t,renderCardItem:i,swiperOptions:o,widgetId:r,gap:n=16,breakpoints:a=hd,onSlidesPerViewChange:s,hasNavigation:l})=>{const{t:d}=qi(),{initSwiper:c}=Pr(),[p,u]=ne(!0),{containerCss:h}=Un(a,{totalSlides:t.length}),{autoscroll:m,speed:g,hasShadow:w}=o,[f,v]=Aa({align:"start",loop:!0,duration:50},[ld({delay:g,active:m})]),{isSlideActive:x}=Gn({emblaApi:v,totalSlides:t.length});Vn({emblaApi:v}),(({emblaApi:e,onSlidesCountChange:t})=>{ae(()=>{if(!e)return;const i=()=>{requestAnimationFrame(()=>{const i=e.rootNode()?.firstElementChild;if(!i)return;const o=getComputedStyle(i).getPropertyValue(Hn),r=function(e){const t=e.match(/\/\s*([\d.]+)/);return t?parseFloat(t[1]):null}(o)??1;t(o==Fn?1:r)})};return i(),e.on("resize",i),()=>{e.off("resize",i)}},[e])})({emblaApi:v,onSlidesCountChange:s}),Wn({emblaApi:v,navigation:{prev:`#${r} .reputon-swiper-button-prev`,next:`#${r} .reputon-swiper-button-next`}}),Zn({emblaApi:v,onSlideChange:()=>{u(!0)}}),ae(()=>c({emblaApi:v}),[v,c,t.length]);const b=()=>{u(!1)};return V(dd,{$hasShadow:w,className:e,children:[l&&V(pd,{type:"button","aria-label":d("previous_slide"),className:"reputon-swiper-button-prev",children:V(Fr,{})}),l&&V(ud,{type:"button","aria-label":d("next_slide"),className:"reputon-swiper-button-next",children:V(Ur,{})}),V(Mn,{$gap:n,ref:f,className:"swiper-horizontal",children:V(jn,{$responsive:h,children:t.map((e,t)=>V(Pn,{children:x(t)?i({review:e,allClosed:p,stopSwiper:b}):null},t))})})]})},gd=({ratingLogoPlace:e,isFluid:t=!1})=>{const[i,o]=ne(!1),{data:r,widgetId:n}=ce(jt),{contentIndex:a,hasShadow:s,writeReviewEnabled:l,emojiType:d,hasSolidShadow:c,autoscroll:p,ratingType:u,reviewPhotosType:h,fixedReviewsHeight:m,delay:g,navigationType:w}=Su(Je),{business:f,verified:v}=r,{writeReviewUrl:x,summary:_,imageUrl:y,url:$,name:k,rating:S,reviewsNumber:C,reviews:N,icon:R}=Pt({contentIndex:a,business:f}),{aggregatedImages:T,summaryImages:A}=Rr(N,!!_),{setFullScreenImageOptions:I,handleClosePopup:L,open:z,popupContent:M,initialIndex:j}=Tr(T),P=l&&!!x,E=Cr({summaryCard:Boolean(_),reviews:N,logoCard:e===Jo}),O=ks(h),B=Nr(+g,10),D=Nr(+g,Ao),H=V(ad,{className:"reputon-carousel-holder",reviews:E,isPopupOpen:z,swiperOptions:{speed:B,hasShadow:s},gap:20,renderCardItem:({review:e,stopSwiper:t})=>"logoCard"===e?V(zl,{data:{imageUrl:R,url:$??"",name:k,rating:S,ratingIcons:be(S),reviewsNumber:C,writeReviewUrl:x},options:{isNameEditable:"all"===a,ratingType:u,emojiType:d,cardType:O,writeReviewEnabled:l,hasSolidShadow:c,fixedReviewsHeight:m}}):"summaryCard"===e?_&&V($s,{items:_?.items,onImageClick:I,options:{reviewPhotosType:h,fixedReviewsHeight:m,hasShadow:c},onChangeShowMoreState:t,reviewsNumber:C,images:A},"summaryReview"):V(ql,{review:e,options:{fixedReviewsHeight:m,hasSolidShadow:c,reviewPhotosType:h,ratingType:u,emojiType:d},verified:v,onChangeShowMoreState:t,onImageClick:(e,t)=>I(e,t)})}),F=V(md,{className:"reputon-carousel-holder",onSlidesPerViewChange:e=>{o(e<E.length&&!s)},hasNavigation:i&&"arrows"===w,widgetId:n,reviews:E,swiperOptions:{autoscroll:p,speed:D,hasShadow:s},gap:20,renderCardItem:({review:e,allClosed:t,stopSwiper:i})=>"logoCard"===e?V(zl,{data:{imageUrl:R,url:$??"",name:k,rating:S,ratingIcons:be(S),reviewsNumber:C,writeReviewUrl:x},options:{isNameEditable:"all"===a,ratingType:u,emojiType:d,cardType:O,writeReviewEnabled:l,hasSolidShadow:c,fixedReviewsHeight:m}}):"summaryCard"===e?_&&V($s,{allClosed:t,items:_?.items,onImageClick:I,options:{reviewPhotosType:h,fixedReviewsHeight:m,hasShadow:c},onChangeShowMoreState:i,reviewsNumber:C,images:A},"summaryReview"):V(ql,{review:e,allClosed:t,options:{fixedReviewsHeight:m,hasSolidShadow:c,reviewPhotosType:h,ratingType:u,emojiType:d},verified:v,onChangeShowMoreState:i,onImageClick:(e,t)=>I(e,t)})});return V(b,{children:[V(jr,{children:V(Ql,{gap:16,hasShadow:s,header:e===Yo&&V(Sr,{writeReviewUrl:x,imageUrl:y,isEditableName:"all"===a,url:$,name:k,rating:S,ratingIcons:be(S),reviewsNumber:C,options:{emojiType:d,hasSolidShadow:c,ratingType:u,writeReviewEnabled:l}}),carousel:t?H:F,deprecatedLeaveReviewButton:P&&V(Yl,{url:x}),bottomNavigationButtons:i&&"arrows"===w&&V(Ts,{}),dottedNavigation:i&&"dotted"===w&&V(Br,{renderDotVisual:e=>V(Kl,{$variant:e})})})}),M&&V(za,{initialIndex:j,images:T?.map(e=>e.url),open:z,onClose:()=>L()})]})},wd=Pe`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,fd="reputon-logo-text",vd="reputon-logo-icon",xd=Ee("div")`
    display: flex;
    align-items: ${e=>e.$fixedReviewsHeight?"stretch":"flex-start"};
    height: ${e=>e.$fixedReviewsHeight?"100%":"auto"};
    gap: 20px;
    width: 100%;
    animation: ${e=>e.$animation?`\n                  ${wd} .5s linear forwards\n              `:"none"};
`,bd=Ee("div")`
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
    ${e=>{const t=e.theme.solidShadow;return e.$hasSolidShadow&&`\n            border-right: 4px solid ${t};\n            border-bottom: 4px solid ${t};\n        `}};
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
`,_d=Ee("div")`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`,yd=Ee("div")`
    max-width: 100%;
    display: flex;
    gap: 8px;
    justify-content: space-between;
`,$d=Ee("div")`
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
`,kd=Ee("span")``,Sd=Ee("div")`
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
    ${e=>e.$disableHover?"":`\n            @media (hover: hover) and (pointer: fine) {\n                &:hover {\n                    .${fd} {\n                        opacity: 1;\n                        visibility: visible;\n                    }\n                    .${vd} {\n                        opacity: 0;\n                        visibility: visible;\n                    }\n                }\n            }\n        `}
`,Cd=Ee("div")`
    display: flex;
    align-self: center;
    gap: 4px;
    position: relative;
    min-width: 40px;
    min-height: 50px;
    ${({$isOpen:e})=>e&&"width: 100%;"}
`,Nd=Ee("div")`
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
            ${({$isOpen:e,$hideImageCount:t})=>!e&&`\n                    content: ${t?`'+${t}'`:""};\n                    position: absolute;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    color: white;\n                    left: 0;\n                    top: 0;\n                    width: 100%;\n                    height: 100%;\n                    font-size: 16px;\n                    font-weight: 700;\n                    background: rgba(0, 0, 0, 30%);\n                `}
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
            ${({$isOpen:e,$hideImageCount:t})=>e&&`\n                    content: ${t?`'+${t-2}'`:""};\n                    position: absolute;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    color: white;\n                    left: 0;\n                    top: 0;\n                    width: 100%;\n                    height: 100%;\n                    font-size: 16px;\n                    font-weight: 700;\n                    background: rgba(0, 0, 0, 30%);\n                `}
        }
    }
`;Ee("div")`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
`;const Rd=Ee("div")`
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 12px;
    line-height: 16px;
    min-width: 0;
    overflow: hidden;
`,Td=Ee("div")`
    display: flex;
    flex-direction: column;
    gap: 4px;
    line-height: 1.45;
    min-width: 0;
`,Ad=Ee("div")`
    min-width: 32px;
    width: 32px;
    height: 32px;
`,Id=Ee("div")`
    display: flex;
    gap: 8px;
    min-width: 0;
`,Ld=Ee("span")`
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
`,zd=Ee("div")`
    display: flex;
    position: relative;
    justify-content: space-between;
    gap: 4px;
    ${e=>e.$isOpen?"\n                  flex-direction: column;\n              ":""};
`,Md=Ee("div",Kr)`
    line-height: 17px;
    font-size: 12px;
    overflow: hidden;
    position: relative;
    display: -webkit-box;
    text-align: left;
    color: ${e=>e.theme.widgets.grid.colorDescription};
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${({$openRows:e})=>e||4};
    ${({$isOpen:e,$hasShowMore:t,$openRows:i})=>t?e?"\n                  cursor: pointer;\n                  -webkit-line-clamp: unset;\n              ":`\n                  cursor: pointer;\n                  -webkit-line-clamp: ${i||4};\n              `:e?"\n            -webkit-line-clamp: unset;\n        ":void 0};
`,jd=Ee("div")`
    display: flex;
    gap: 2px;
`,Pd=Ee("img")`
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`,Ed=F({isOpen:!1,handleShowMore:()=>{},ref:{},showButton:!1}),Od=({header:e,hiddenContainer:t,actionButton:i,rating:o,solidShadow:r,allClosed:n,alwaysOpen:a,animation:s,isAICard:l,fixedReviewsHeight:d,className:c,closeButton:p,...u})=>{const[h,m]=ne(()=>a),[g,w]=ne(!1),f=se(null);return ae(()=>{a||f.current&&setTimeout(()=>{const e=f.current?.clientHeight,t=f.current?.scrollHeight;e&&t&&w(t>e)},150)},[]),ae(()=>{n&&(a||m(!1))},[n]),V(Ed.Provider,{value:{isOpen:h??!1,handleShowMore:()=>{a||m(e=>!e)},ref:f,showButton:g},children:V(xd,{$fixedReviewsHeight:d??!1,className:Bt(c,"reputon-single-review","reputon-card"),$animation:s,...u,children:V(_d,{className:"reputon-container",children:V(bd,{$hasSolidShadow:r,className:"reputon-top-part",children:[e,t,g&&h&&p]})})})})};Od.Header=function({className:e,info:t,logoApp:i}){return V(yd,{className:Bt(e,"reputon-review-header"),children:[t,i]})},Od.RatingIcons=function({className:e,children:t}){return t&&V(jd,{className:Bt(e,"reputon-rating-stars"),children:t})},Od.Logo=function({className:e,children:t,disableHover:i}){const{t:o}=qi();return t&&V(Sd,{className:Bt(e,"reputon-review-logo"),$disableHover:i,children:[!i&&V($d,{className:fd,children:[V("span",{children:o("powered_by")}),V(tr,{})]}),V(kd,{className:vd,children:t})]})},Od.HiddenContainer=function({imagesContainer:e,textContainer:t,className:i}){const{isOpen:o}=ce(Ed);return V(zd,{$isOpen:o,className:Bt(i,"reputon-text-holder"),children:[t,e]})},Od.TextContainer=function({children:e,className:t,onClick:i,openRows:o=4,openBtn:r}){const{isOpen:n,ref:a,handleShowMore:s,showButton:l}=ce(Ed),{btnRef:d,position:c}=(({openRows:e,ref:t,showButton:i})=>{const o=se(null),[r,n]=ne(null);return ae(()=>{if(!i)return;const r=t.current;if(!r)return;const a=document.createRange();a.selectNode(r);const s=Array.from(a.getClientRects());if(s.length<=e&&n(null),!o.current)return;const l=o.current.offsetWidth,d=s[e],c=r.getBoundingClientRect(),p=c.width-l,u=d.right-c.left;n(u>p?p:u)},[e,t,i]),{btnRef:o,position:r}})({openRows:o,ref:a,showButton:l});return V(Md,{$openRows:o,$isOpen:n,$hasShowMore:l,ref:a,className:Bt(t,"reputon-text"),onClick:()=>{i?.(),l&&s()},children:[e,l&&!n&&r?.(d,c)]})},Od.Images=function({images:e,className:t,callbackAfterImageClick:i,isAi:o}){const{isOpen:r}=ce(Ed),{t:n}=qi();return e&&e.length>0&&V(Cd,{className:Bt(t,"reputon-review-images"),$isOpen:r,$imagesPreviewCount:e?.slice(0,3).length,children:e?.slice(0,3).map((t,a)=>V(Nd,{className:"reputon-small-images-container",onClick:()=>i?.(t,o),$hideImageCount:e.length>1?e.length:void 0,$isOpen:r,tabIndex:0,role:"button","aria-label":n("review_image"),onKeyPress:()=>{i?.(t,o)},children:V(Pd,{src:t,alt:"review image",loading:"lazy",className:"reputon-small-images-media"})},a))})},Od.ShowMoreBtn=function({children:e,className:t,onClick:i}){const{handleShowMore:o,isOpen:r}=ce(Ed),{t:n}=qi();return V(Ld,{$isOpen:r,role:"button",tabIndex:0,"aria-label":n(r?"show_less":"show_more"),onKeyPress:e=>{e.stopPropagation(),o(),i?.()},className:Bt(t,"reputon-show-more"),onClick:e=>{e.stopPropagation(),o(),i?.()},children:e})},Od.InfoTop=function({className:e,icon:t,attributes:i}){return V(Id,{className:Bt(e,"reputon-reviewer-info"),children:[t,i]})},Od.Icon=function({className:e,children:t}){return t&&V(Ad,{className:Bt(e,"reputon-image"),children:t})},Od.Attributes=function({name:e,rating:t,className:i}){return V(Td,{className:Bt(i,"reputon-attributes"),children:[e,t]})},Od.Name=function({children:e,className:t}){return e&&V(Rd,{className:Bt(t,"reputon-name"),children:e})};const Bd=Ee(jl)`
    width: 16px;
    height: 16px;
`,Dd=Ee(Od.RatingIcons)`
    color: ${e=>e.theme.widgets.carousel.colorReviewStars};
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}
`,Hd=Ee(Od.TextContainer)`
    color: ${e=>e.theme.widgets.carousel.compactReview.colorDescription};
`,Fd=Ee(Od.ShowMoreBtn)`
    & span {
        color: ${e=>e.theme.widgets.carousel.compactReview.colorShowMore};
    }
`,Ud=Ee(Od.Name)`
    color: ${e=>e.theme.widgets.carousel.compactReview.colorName};
`,Vd=Ee(ii)`
    width: 12px;
    height: 12px;
`,Gd=Ee(Bl)`
    margin-left: 2px;
    width: 12px;
    height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    & svg {
        ${({$ratingType:e,theme:t})=>"hearts"===e&&`color: ${t.widgets.carousel.compactReview.verifiedColor};`}
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
`;Ee(Ha)`
    margin-top: auto;
`;const Wd=Ee("span",Kr)`
    color: inherit;
    position: absolute;
    bottom: 0;
    inset-inline-start: ${({$position:e})=>e||0}px;
    background: ${e=>e.theme.background};
`,Zd=({review:e,allClosed:t,options:i,verified:o,onChangeShowMoreState:r,onImageClick:n})=>{const{t:a}=qi(),{authorUrl:s,rating:l,text:d,profilePhotoUrl:c,authorName:p,images:u}=e,{fixedReviewsHeight:h,hasSolidShadow:m,ratingType:g,emojiType:w,reviewPhotosType:f}=i,v=be(l),x=l?V(Dd,{$ratingType:g,children:[v?.map((e,t)=>V(Vd,{ratingType:g,emojiType:w,fill:e},t)),o&&V(Gd,{$ratingType:g,verified:a("verified")})]}):void 0;return V(Od,{allClosed:t,fixedReviewsHeight:h,solidShadow:m,header:V(Od.Header,{logoApp:V(Od.Logo,{children:V(Bd,{})}),info:V(Od.InfoTop,{icon:V(Od.Icon,{children:V(ri,{url:s,label:`${p} ${a("review")}`,children:V(Xi,{src:c,alt:`${p} ${a("image")}`})})}),attributes:V(Od.Attributes,{name:V(Ud,{children:V(ri,{inherit:!0,url:s,label:`${p} ${a("review")}`,children:p})}),rating:x})})}),hiddenContainer:V(Od.HiddenContainer,{textContainer:V(Hd,{onClick:r,openBtn:(e,t)=>V(Wd,{ref:e,$position:t,className:"reputon-show-more",children:["..."," ",V(Fd,{onClick:r,children:V("span",{children:a("show_more")})})]}),children:d}),imagesContainer:"small"===f?V(Od.Images,{images:u?.map(({thumbnailUrl:e})=>e),callbackAfterImageClick:n}):null}),closeButton:V(Fd,{children:V("span",{children:a("show_less")})})})},qd=Ee("div")`
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
`,Kd=Ee(Od.TextContainer)`
    line-height: 16px;
`,Xd=Ee("p")`
    text-indent: -20px;
    margin-left: 20px;

    color: ${e=>e.theme.summary.compact.colorDescription};

    &:last-of-type {
        margin-bottom: 0;
    }
`,Yd=Ee(Od.Attributes)`
    gap: 2px;
`,Jd=Ee(ja)`
    width: 16px;
    height: 16px;
`,Qd=Ee(Od.Name)`
    color: ${e=>e.theme.summary.compact.colorName};
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    background-color: ${e=>e.theme.summary.colorBadge};
    padding: 0px 4px;
    border-radius: 99px;
    width: fit-content;
`,ec=Ee(Od.RatingIcons)`
    color: ${e=>e.theme.summary.colorTime};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 10px;
    line-height: 14px;
`,tc=Ee(us)`
    margin-right: 6px;
    display: inline-block;
`,ic=Ee("span",Kr)`
    color: inherit;
    position: absolute;
    inset-inline-start: ${({$position:e})=>e||0}px;
    background: ${e=>e.theme.background};
    inset-block-end: 0;
`,oc=Ee(Od.ShowMoreBtn)`
    & span {
        color: ${e=>e.theme.summary.compact.colorShowMore};
    }
`,rc=({allClosed:e,alwaysOpen:t,reviewsNumber:i,items:o,onChangeShowMoreState:r,options:n,onImageClick:a,images:s})=>{const{t:l,locale:d}=qi(),{reviewPhotosType:c,hasShadow:p,fixedReviewsHeight:u}=n??{};return V(Od,{alwaysOpen:t,allClosed:e,fixedReviewsHeight:u,solidShadow:p,header:V(Od.Header,{logoApp:V(Od.Logo,{disableHover:!0,children:V(Jd,{})}),info:V(Od.InfoTop,{icon:V(Od.Icon,{children:V(qd,{children:" "})}),attributes:V(Yd,{name:V(Qd,{children:l("ai_summary")}),rating:V(ec,{children:[`${l("based_on")}`," ",V(ir,{value:i,locale:d})," ",`${l("reviews")}`]})})})}),hiddenContainer:V(Od.HiddenContainer,{textContainer:V(Kd,{onClick:r,openBtn:(e,t)=>V(ic,{ref:e,$position:t,className:"reputon-show-more",children:["..."," ",V(oc,{onClick:r,children:V("span",{children:l("show_more")})})]}),children:o?.map((e,t)=>V(Xd,{children:[V(tc,{}),`${e}`]},t))}),imagesContainer:"small"===c?V(Od.Images,{images:s?.map(({thumbnailUrl:e})=>e),callbackAfterImageClick:(e,t)=>a?.(e,t),isAi:!0}):null}),closeButton:V(oc,{children:V("span",{children:l("show_less")})})})},nc=Ee(Ts)`
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
`,ac=[{breakpoint:2400,slidesPerView:4},{breakpoint:1100,slidesPerView:3},{breakpoint:768,slidesPerView:2},{breakpoint:440,slidesPerView:1}],sc=({ratingLogoPlace:e,isFluid:t=!1})=>{const[i,o]=ne(!1),{data:r,widgetId:n}=ce(jt),{contentIndex:a,hasShadow:s,writeReviewEnabled:l,emojiType:d,hasSolidShadow:c,autoscroll:p,ratingType:u,reviewPhotosType:h,fixedReviewsHeight:m,delay:g,navigationType:w}=Su(Je),{business:f,verified:v}=r,{writeReviewUrl:x,summary:_,imageUrl:y,url:$,name:k,rating:S,reviewsNumber:C,reviews:N,icon:R}=Pt({contentIndex:a,business:f}),{aggregatedImages:T,summaryImages:A}=Rr(N,!!_),{setFullScreenImageOptions:I,handleClosePopup:L,open:z,popupContent:M,initialIndex:j}=Tr(T),P=l&&!!x,E=Cr({summaryCard:Boolean(_),reviews:N,logoCard:e===Jo}),O=ks("compact"),B=Nr(+g,10),D=Nr(+g,Ao),H=V(ad,{slideWidth:214,className:"reputon-carousel-holder",reviews:E,isPopupOpen:z,swiperOptions:{speed:B,hasShadow:s},gap:12,renderCardItem:({review:e,stopSwiper:t})=>"logoCard"===e?V(zl,{data:{imageUrl:R,url:$??"",name:k,rating:S,ratingIcons:be(S),reviewsNumber:C,writeReviewUrl:x},options:{isNameEditable:"all"===a,ratingType:u,emojiType:d,cardType:O,writeReviewEnabled:l,hasSolidShadow:c,fixedReviewsHeight:m}}):"summaryCard"===e?_&&V(rc,{items:_?.items,onImageClick:I,options:{reviewPhotosType:h,fixedReviewsHeight:m,hasShadow:c},onChangeShowMoreState:t,reviewsNumber:C,images:A},"summaryReview"):V(Zd,{review:e,options:{fixedReviewsHeight:m,hasSolidShadow:c,reviewPhotosType:h,ratingType:u,emojiType:d},verified:v,onChangeShowMoreState:t,onImageClick:(e,t)=>I(e,t)})}),F=V(md,{className:"reputon-carousel-holder",onSlidesPerViewChange:e=>{o(e<E.length&&!s)},hasNavigation:!1,widgetId:n,reviews:E,swiperOptions:{autoscroll:p,speed:D,hasShadow:s},gap:12,breakpoints:ac,renderCardItem:({review:e,allClosed:t,stopSwiper:i})=>"logoCard"===e?V(zl,{data:{imageUrl:R,url:$??"",name:k,rating:S,ratingIcons:be(S),reviewsNumber:C,writeReviewUrl:x},options:{isNameEditable:"all"===a,ratingType:u,emojiType:d,cardType:O,writeReviewEnabled:l,hasSolidShadow:c,fixedReviewsHeight:m}}):"summaryCard"===e?_&&V(rc,{allClosed:t,items:_?.items,onImageClick:I,options:{reviewPhotosType:h,fixedReviewsHeight:m,hasShadow:c},onChangeShowMoreState:i,reviewsNumber:C,images:A},"summaryReview"):V(Zd,{review:e,allClosed:t,options:{fixedReviewsHeight:m,hasSolidShadow:c,reviewPhotosType:h,ratingType:u,emojiType:d},verified:v,onChangeShowMoreState:i,onImageClick:(e,t)=>I(e,t)})});return V(b,{children:[V(jr,{children:V(Ql,{inlineMargin:0,gap:12,hasShadow:s,bottomNavigationButtons:i&&"arrows"===w&&V(nc,{}),dottedNavigation:i&&"dotted"===w&&V(Br,{renderDotVisual:e=>V(Kl,{$variant:e})}),header:e===Yo&&V(Sr,{isCompact:!0,writeReviewUrl:x,imageUrl:y,isEditableName:"all"===a,url:$,name:k,rating:S,ratingIcons:be(S),reviewsNumber:C,options:{emojiType:d,hasSolidShadow:c,ratingType:u,writeReviewEnabled:l}}),carousel:t?H:F,deprecatedLeaveReviewButton:P&&V(Yl,{url:x})})}),M&&V(za,{initialIndex:j,images:T?.map(e=>e.url),open:z,onClose:()=>L()})]})},lc=F({isOpen:!1,handleShowMore:()=>{},ref:{},showButton:!1}),dc=Pe`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,cc="reputon-text-logo",pc="reputon-icon-logo",uc=Ee("div",Kr)`
    display: flex;
    align-items: stretch;
    align-items: ${e=>e.$fixedReviewsHeight?"stretch":"flex-start"};
    gap: 20px;
    width: 100%;
    animation: ${e=>e.$animation?`\n                  ${dc} .5s linear forwards\n              `:"none"};
`,hc=Ee("div")`
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
    @container wrapper (max-width:${We}px) {
        padding: 16px;
        gap: 12px;
        min-height: 269px;
    }
    @container wrapper (max-width:${qe}px) {
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
`,mc=Ee("div")`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`,gc=Ee("div")`
    max-width: 100%;
    display: flex;
    gap: 10px;
    justify-content: space-between;
`,wc=Ee("div")`
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
`,fc=Ee("span")``,vc=Ee("div")`
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
    ${e=>e.$disableHover?"":`\n                @media (hover: hover) and (pointer: fine) {\n                    &:hover {\n                        .${cc} {\n                            opacity: 1;\n                            visibility: visible;\n                        }\n                        .${pc} {\n                            opacity: 0;\n                            visibility: visible;\n                        }\n                    }\n                }\n            `}
`,xc=Ee("div")`
    display: flex;
    position: relative;
    min-width: ${e=>20*(e.$imagesPreviewCount-1)+140}px;
    min-height: 156px;
    gap: 1%;
    @container wrapper (max-width:${We}px) {
        min-width: ${e=>10*(e.$imagesPreviewCount-1)+66}px;
        min-height: 77px;
    }
`,bc=Ee("div")`
    min-width: max(33%, 140px);
    padding-top: calc(80 * max(33%, 140px) / 72);
    position: ${e=>e.$isOpen?"relative":"absolute"};
    border-radius: 20px;
    border: 4px solid ${e=>e.theme.background};
    right: 0;
    top: 0;
    overflow: hidden;
    cursor: pointer;
    @container wrapper (max-width:${We}px) {
        min-width: max(33%, 66px);
        padding-top: calc(80 * max(33%, 66px) / 72);
        border: 2px solid ${e=>e.theme.background};
    }
    &:nth-child(1n) {
        z-index: calc(4 - var(--n));
        right: ${e=>e.$isOpen?"0":"calc((var(--n) - 2) * 20px)"};
        @container wrapper (max-width:${We}px) {
            right: ${e=>e.$isOpen?"0":"calc((var(--n) - 2) * 10px)"};
        }
    }

    &:nth-child(1) {
        --n: 2;
        &::after {
            ${({$isOpen:e,$hideImageCount:t})=>!e&&`\n                    content: ${t?`'+${t}'`:""};\n                    position: absolute;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    color: white;\n                    left: 0;\n                    top: 0;\n                    width: 100%;\n                    height: 100%;\n                    font-size: 40px;\n                    font-weight: 700;\n                    background: rgba(0, 0, 0, 30%);\n                    @container wrapper (max-width:900px) {\n                        font-size: 26px;\n                    }\n                `}
        }
    }
    &:nth-child(2) {
        --n: 3;
    }
    &:nth-child(3) {
        --n: 4;
        &::after {
            ${({$isOpen:e,$hideImageCount:t})=>e&&`\n                    content: ${t?`'+${t}'`:""};\n                    position: absolute;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    color: white;\n                    left: 0;\n                    top: 0;\n                    width: 100%;\n                    height: 100%;\n                    font-size: 40px;\n                    font-weight: 700;\n                    background: rgba(0, 0, 0, 30%);\n                    @container wrapper (max-width:900px) {\n                        font-size: 26px;\n                    }\n                `}
        }
    }
`,_c=Ee("div")`
    color: ${e=>e.theme.widgets.carousel.colorTime};
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
    @container wrapper (max-width:${We}px) {
        font-size: 12px;
    }
`,yc=Ee("div")`
    font-weight: 600;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
    white-space: nowrap;
    width: 100%;
    @container wrapper (max-width:${We}px) {
        font-size: 12px;
    }
`,$c=Ee("div")`
    display: flex;
    flex-direction: column;
    line-height: 1.45;
    gap: 4px;
    overflow: hidden;
    @container wrapper (max-width:${qe}px) {
        min-width: 32px;
        gap: 2px;
    }
`,kc=Ee("div")`
    min-width: 48px;
    width: 48px;
    height: 48px;
    @container wrapper (max-width:${We}px) {
        min-width: 32px;
        width: 32px;
        height: 32px;
    }
`,Sc=Ee("div")`
    display: flex;
    gap: 12px;
    overflow: hidden;
    align-items: center;
`,Cc=Ee("div")`
    color: ${e=>e.theme.widgets.carousel.colorShowMore};
    display: inline-block;
    width: fit-content;
    margin-top: -12px;
    @container wrapper (max-width:${We}px) {
        margin-top: -8px;
    }
    & span {
        cursor: pointer;
        color: inherit;
        font-size: 18px;
        line-height: 1.15;
        text-decoration: underline;
        @container wrapper (max-width:${We}px) {
            font-size: 16px;
        }
    }
    & span:hover {
        text-decoration: none;
    }
`,Nc=Ee("div")`
    display: flex;
    position: relative;
    justify-content: space-between;
    gap: 24px;
    ${e=>e.$isOpen?"\n                  flex-direction: column;\n              ":""};
    @container wrapper (max-width:${We}px) {
        gap: 12px;
    }
`,Rc=Ee("div",Kr)`
    overflow: hidden;
    position: relative;
    display: -webkit-box;
    text-align: left;
    color: ${e=>e.theme.widgets.grid.colorDescription};
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${({$openRows:e})=>e||4};
    font-size: 19px;
    line-height: 1.35;
    ${({$isOpen:e,$hasShowMore:t,$openRows:i})=>t?e?"\n                      cursor: pointer;\n                      -webkit-line-clamp: unset;\n                  ":`\n                      cursor: pointer;\n                      -webkit-line-clamp: ${i||4};\n                      /* mask-image: linear-gradient(180deg, black 0%, black 40%, transparent 95%); */\n                  `:e?"\n                -webkit-line-clamp: unset;\n            ":void 0};
    @container wrapper (max-width:${We}px) {
        font-size: 16px;
    }
`,Tc=Ee("div")`
    display: flex;
    gap: 4px;
    align-items: center;
`,Ac=Ee("img")`
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`,Ic=Ee(tr)``,Lc=({header:e,hiddenContainer:t,imagesBlock:i,actionButton:o,info:r,rating:n,mediumImagesBlock:a,hasSolidShadow:s,allClosed:l,alwaysOpen:d,animation:c,isAICard:p,fixedReviewsHeight:u,className:h,...m})=>{const[g,w]=ne(()=>d),[f,v]=ne(!1),x=se(null),b=se(null);return ae(()=>{d||x.current&&setTimeout(()=>{if(!x.current)return;const e=x.current.clientHeight,t=x.current.scrollHeight;v(t>e)},150)},[]),ae(()=>{l&&w(!1)},[l]),V(lc.Provider,{value:{isOpen:g??!1,handleShowMore:()=>{d||w(e=>!e)},ref:x,showButton:f},children:V(uc,{$isOpen:g,ref:b,$fixedReviewsHeight:u,className:Bt(h,"reputon-single-review","reputon-card"),$animation:c,...m,children:V(mc,{className:"reputon-container",children:[V(hc,{$isAICard:p,$hasSolidShadow:s,className:"reputon-top-part",children:[e,n,t,f&&o,a,i]}),r]})})})};Lc.Header=function({className:e,info:t,logoApp:i}){return V(gc,{className:Bt(e,"reputon-review-header"),children:[t,i]})},Lc.RatingIcons=function({className:e,children:t}){return t&&V(Tc,{className:Bt(e,"reputon-rating-stars"),children:t})},Lc.Logo=function({className:e,children:t,disableHover:i}){return t&&V(vc,{className:Bt(e,"reputon-review-logo"),$disableHover:i,children:[!i&&V(wc,{className:Bt(cc),children:[V("span",{children:"Powered by"}),V(Ic,{$isWide:!0})]}),V(fc,{className:Bt(pc),children:t})]})},Lc.HiddenContainer=function({imagesContainer:e,textContainer:t,className:i}){const{isOpen:o}=ce(lc);return V(Nc,{$isOpen:o,className:Bt(i,"reputon-text-holder"),children:[t,e]})},Lc.TextContainer=function({children:e,className:t,onClick:i}){const{isOpen:o,ref:r,handleShowMore:n,showButton:a}=ce(lc);return V(Rc,{$openRows:6,$isOpen:o,$hasShowMore:a,ref:r,className:Bt(t,"reputon-text"),onClick:()=>{i?.(),a&&n()},children:e})},Lc.Images=function({images:e,className:t,callbackAfterImageClick:i,isAi:o}){const{isOpen:r}=ce(lc),{t:n}=qi();return e&&e.length>0&&V(xc,{className:Bt(t,"reputon-review-images"),$isOpen:r,$imagesPreviewCount:e?.slice(0,3).length,children:e?.slice(0,3).map((t,a)=>V(bc,{className:"reputon-small-images-container",onClick:()=>i?.(t,o),$hideImageCount:e.length>3?e.length-2:null,$isOpen:r,tabIndex:0,role:"button","aria-label":n("review_image"),onKeyPress:()=>{i?.(t,o)},children:V(Ac,{src:t,alt:"review image",loading:"lazy",className:"reputon-small-images-media"})},a))})},Lc.ShowMoreBtn=function({children:e,className:t}){const{handleShowMore:i,isOpen:o}=ce(lc),{t:r}=qi();return V(Cc,{role:"button",tabIndex:0,"aria-label":r(o?"show_less":"show_more"),onKeyPress:i,className:Bt(t,"reputon-show-more"),onClick:i,children:e?.(o)})},Lc.InfoTop=function({className:e,icon:t,attributes:i}){return V(Sc,{className:Bt(e,"reputon-reviewer-info"),children:[t,i]})},Lc.Icon=function({className:e,children:t}){return t&&V(kc,{className:Bt(e,"reputon-image"),children:t})},Lc.Attributes=function({name:e,time:t,className:i}){return V($c,{className:Bt(i,"reputon-attributes"),children:[e,t]})},Lc.Name=function({children:e,className:t}){return e&&V(yc,{className:Bt(t,"reputon-name"),children:e})},Lc.Time=function({children:e,className:t}){return e&&V(_c,{className:Bt(t,"reputon-date"),children:e})};const zc=Ee(jl)`
    width: 32px;
    height: 32px;
    @container wrapper (max-width:${Ze}px) {
        width: 20px;
        height: 20px;
    }
`,Mc=Ee(Lc.RatingIcons)`
    color: ${e=>e.theme.widgets.carousel.colorReviewStars};
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}
`,jc=Ee(Lc.TextContainer)`
    color: ${e=>e.theme.widgets.carousel.colorDescription};
`,Pc=Ee(Lc.ShowMoreBtn)`
    color: ${e=>e.theme.widgets.carousel.colorShowMore};
`,Ec=Ee(Lc.Time)`
    color: ${e=>e.theme.widgets.carousel.colorTime};
`,Oc=Ee(ii)`
    width: 24px;
    height: 24px;
    @container wrapper (max-width:${Ze}px) {
        width: 20px;
        height: 20px;
    }
`,Bc=Ee(Lc.Name)`
    color: ${e=>e.theme.widgets.carousel.colorName};
`,Dc=Ee(Bl)`
    width: 24px;
    height: 24px;
    margin-left: 12px;
    @container wrapper (max-width:${Ze}px) {
        width: 20px;
        height: 20px;
    }
`,Hc=({allClosed:e,review:t,options:i,onChangeShowMoreState:o,onImageClick:r})=>{const{t:n}=qi(),{emojiType:a,hasSolidShadow:s,ratingType:l,verified:d,reviewPhotosType:c}=i,{authorUrl:p,rating:u,text:h,profilePhotoUrl:m,authorName:g,relativeTimeDescription:w,images:f}=t,v=be(u),x=u?V(Mc,{$ratingType:l,children:[v?.map((e,t)=>V(Oc,{ratingType:l,emojiType:a,fill:e},t)),d&&V(Dc,{verified:n("verified")})]}):null;return V(Lc,{allClosed:e,fixedReviewsHeight:!1,hasSolidShadow:s,header:V(Lc.Header,{logoApp:V(Lc.Logo,{children:V(zc,{})}),info:V(Lc.InfoTop,{icon:V(ri,{url:p,label:`${g} ${n("review")}`,children:V(Lc.Icon,{children:V(Xi,{src:m,alt:`${g} ${n("image")}`})})}),attributes:V(Lc.Attributes,{name:V(Bc,{children:V(ri,{inherit:!0,url:p,label:`${g} ${n("review")}`,children:g})}),time:V(Ec,{children:w})})})}),rating:x,hiddenContainer:V(Lc.HiddenContainer,{textContainer:V(jc,{onClick:o,children:h}),imagesContainer:"small"===c?V(Lc.Images,{images:f?.map(({thumbnailUrl:e})=>e),callbackAfterImageClick:r}):null}),actionButton:V(Pc,{children:e=>V("span",e?{children:n("show_less")}:{onClick:o,children:n("show_more")})})})},Fc=Ee("div")`
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
`,Uc=Ee(Lc.TextContainer)``,Vc=Ee("p")`
    color: ${e=>e.theme.summary.colorDescription};
`,Gc=Ee(Lc.ShowMoreBtn)`
    color: ${e=>e.theme.summary.colorShowMore};
`,Wc=Ee(Lc.Name)`
    color: ${e=>e.theme.summary.colorName};
    font-weight: 700;
    line-height: 22px;
    background-color: ${e=>e.theme.summary.colorBadge};
    padding: 2px 8px;
    border-radius: 99px;
    width: fit-content;
`,Zc=Ee(Lc.Time)`
    color: ${e=>e.theme.summary.colorTime};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`,qc=Ee(us)`
    margin-right: 6px;
    display: inline-block;
    height: 14px;
    width: 17px;
    @container wrapper (max-width:${Ze}px) {
        height: 11px;
        width: 15px;
    }
`;Ee(ii)`
    width: 24px;
    height: 24px;
    @container wrapper (max-width:${Ze}px) {
        width: 20px;
        height: 20px;
    }
`;const Kc=({allClosed:e,alwaysOpen:t,options:i,onImageClick:o,images:r,onChangeShowMoreState:n,items:a,reviewsNumber:s})=>{const{t:l,locale:d}=qi(),{hasSolidShadow:c,reviewPhotosType:p}=i;return V(Lc,{className:"reputon-summary-review",alwaysOpen:t,allClosed:e,isAICard:!0,hasSolidShadow:c,header:V(Lc.Header,{logoApp:V(Lc.Logo,{disableHover:!0,children:V(ja,{})}),info:V(Lc.InfoTop,{icon:V(Lc.Icon,{children:V(Fc,{children:" "})}),attributes:V(Lc.Attributes,{name:V(Wc,{children:l("ai_summary")}),time:V(Zc,{children:[`${l("based_on")}`," ",V(ir,{value:s,locale:d})," ",`${l("reviews")}`]})})})}),hiddenContainer:V(Lc.HiddenContainer,{imagesContainer:"small"===p?V(Lc.Images,{images:r?.map(({thumbnailUrl:e})=>e),callbackAfterImageClick:o,isAi:!0}):null,textContainer:V(Uc,{onClick:n,children:a.map((e,t)=>V(Vc,{children:[V(qc,{}),`${e}`]},t))})}),actionButton:V(Gc,{children:e=>V("span",e?{children:l("show_less")}:{onClick:n,children:l("show_more")})})})},Xc=Ee(On)`
    @container wrapper (max-width: ${We}px) {
        padding-block: 16px;
    }
    @container wrapper (max-width: ${qe}px) {
        padding-block: 8px;
    }
`,Yc=Ee(En,Kr)`
    padding-block: 40px;
    @container wrapper (max-width: ${We}px) {
        padding-block: 30px;
    }
    @container wrapper (max-width: ${qe}px) {
        padding-block: 20px;
    }
`;Ee("div")`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;const Jc=Ee("div",Kr)`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    min-width: 10%;
`,Qc=Ee("div")`
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
`;Ee("img")`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;const ep=()=>"\n    top: 50%;\n    z-index: 10;\n\n    flex-shrink: 0;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    position: absolute;\n    justify-content: center;\n    border-radius: 1000px;\n    display: flex;\n    align-items: center !important;\n    justify-content: center !important;\n    cursor: pointer;\n    @container wrapper (max-width:740px) {\n        display: none;\n        top: 0;\n        position: relative;\n        transform: none;\n    }\n",tp=Ee("button")`
    transform: translate(-50%, -50%);
    left: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${ep}
`,ip=Ee("button")`
    order: 2;
    transform: translate(50%, -50%);
    right: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${ep}
`;Ee(Ji)`
    align-self: center;
`;const op=({className:e,showNavigationButtons:t,reviews:i,renderCardItem:o,swiperOptions:r,widgetId:n})=>{const{t:a}=qi(),{containerRef:s,isNarrow:l}=(()=>{const e=se(null),[t,i]=ne(!1);var o,r,n;return o=()=>{const t=()=>{if(e.current){const t=e.current?.offsetWidth;i(t<=740)}};let o;return t(),e.current&&(o=new ResizeObserver(()=>{window.requestAnimationFrame(t)}),o.observe(e.current)),()=>{o&&e.current&&o.unobserve(e.current),o?.disconnect()}},r=[e?.current],n=re(G++,4),!Y.__s&&we(n.__H,r)&&(n.__=o,n.u=r,W.__h.push(n)),{isNarrow:t,containerRef:e}})(),{initSwiper:d}=Pr(),[c,p]=ne(!1),u=1===i.length;let h=l?90:70;h=u?100:h;const[m,g]=Aa({align:"center",loop:!0,duration:15,containScroll:!1},[ld({delay:r.speed,active:r.autoscroll,stopOnLastSnap:!1})]);(function({emblaApi:e,options:t}){const i=se(0),o=se([]),r=se([]),{tweenFactorBase:n,scaleMin:a,scaleMax:s,slideWidth:l}={tweenFactorBase:.52,scaleMin:.85,scaleMax:1,slideWidth:70,...t},d=de(()=>{e&&(o.current=e.slideNodes().map(e=>e.firstElementChild))},[e]),c=de(()=>{e&&(i.current=n*e.snapList().length)},[e]),p=de(()=>{if(!e)return;const t=e.internalEngine(),n=e.scrollProgress();e.snapList().forEach((e,d)=>{let c=e-n;t.options.loop&&t.slideLooper.loopPoints.forEach(e=>{const t=e.target();if(d===e.index&&0!==t){const e=Math.sign(t);-1===e&&c>.5&&(c-=1),1===e&&c<-.5&&(c+=1)}});const p=(u=1-Math.abs(c*i.current),Math.min(Math.max(u,0),1));var u;const h=a+p*(s-a),m=-Math.sign(c)*(1-p)*(g=l,Math.round(-.04*g*g+8.1*g-225));var g;const w=o.current[d];if(w){w.style.transform=`translateX(${m.toFixed(1)}%) scale(${h})`,w.style.opacity=p.toString();const e=Math.round(10*p);r.current[d]!==e&&(w.parentElement.style.zIndex=e.toString(),r.current[d]=e)}})},[e,l,a,s]);ae(()=>{if(e)return d(),c(),p(),e.on("reinit",d).on("reinit",c).on("reinit",p).on("scroll",p).on("slidefocus",p),()=>{e.off("reinit",d).off("reinit",c).off("reinit",p).off("scroll",p).off("slidefocus",p)}},[e,d,c,p])})({emblaApi:g,options:{slideWidth:h}}),Vn({emblaApi:g});const{activeIndex:w}=function({emblaApi:e,widgetId:t,navigation:i}){const[o,r]=ne(0);return Zn({emblaApi:e,onSlideChange:de(()=>{e&&r(e.selectedSnap())},[e])}),ae(()=>{if(!e)return;const t=t=>{e.plugins().autoplay?.stop(),"next"===t?e.goToNext():e.goToPrev()},o=()=>t("next"),r=()=>t("prev"),n=document.querySelectorAll(i.next),a=document.querySelectorAll(i.prev);return n.forEach(e=>e.addEventListener("click",o)),a.forEach(e=>e.addEventListener("click",r)),()=>{n.forEach(e=>e.removeEventListener("click",o)),a.forEach(e=>e.removeEventListener("click",r))}},[e,t]),{activeIndex:o}}({emblaApi:g,widgetId:n,navigation:{prev:`#${n} .reputon-swiper-button-prev`,next:`#${n} .reputon-swiper-button-next`}});Zn({emblaApi:g,onSlideChange:de(()=>{p(!0)},[])}),ae(()=>d({emblaApi:g}),[g,d,i.length]);const f=de(()=>{p(!1),g?.plugins().autoplay?.stop()},[g]);return V(Jc,{ref:s,className:`${e}`,children:[i.length>1&&t&&V(tp,{type:"button","aria-label":a("previous_slide"),className:"reputon-swiper-button-prev",children:V(Fr,{})}),i.length>1&&t&&V(ip,{type:"button","aria-label":a("next_slide"),className:"reputon-swiper-button-next",children:V(Ur,{})}),V(Yc,{ref:m,children:V(Xc,{children:i.map((e,t)=>V(Bn,{$widthPercent:h,children:V(Dn,{className:"embla-rotator-inner",children:V(Qc,{$disableEvents:t!==w,$isActive:!u&&t===w,children:o({review:e,allClosed:c,stopSwiper:f})})})},t))})})]})},rp=({ratingLogoPlace:e="none"})=>{const{data:t,widgetId:i}=ce(jt),{contentIndex:o,hasShadow:r,writeReviewEnabled:n,emojiType:a,hasSolidShadow:s,autoscroll:l,ratingType:d,reviewPhotosType:c,delay:p,navigationType:u}=Su(Je),{business:h,verified:m}=t,{writeReviewUrl:g,summary:w,imageUrl:f,url:v,name:x,rating:_,reviewsNumber:y,reviews:$}=Pt({contentIndex:o,business:h}),{aggregatedImages:k,summaryImages:S}=Rr($,!!w),{setFullScreenImageOptions:C,handleClosePopup:N,open:R,popupContent:T,initialIndex:A}=Tr(k),I=n&&!!g,L=((e,t=40)=>{const i=[...e];if(i.length<=1)return i;for(;i.length<t;)i.push(...e);return i})(Cr({summaryCard:Boolean(w),reviews:$}),4),z=1===L.length||r,M=Nr(+p,Ao);return V(b,{children:[V(jr,{children:V(Ql,{gap:8,hasShadow:r,header:e===Yo?V(Sr,{writeReviewUrl:g,imageUrl:f,isEditableName:"all"===o,url:v,name:x,rating:_,ratingIcons:be(_),reviewsNumber:y,options:{emojiType:a,hasSolidShadow:s,ratingType:d,writeReviewEnabled:n}}):null,carousel:V(op,{className:"reputon-carousel-holder",widgetId:i,reviews:L,showNavigationButtons:!z&&"arrows"==u,swiperOptions:{autoscroll:l,speed:M},renderCardItem:({review:e,allClosed:t,stopSwiper:i})=>"summaryCard"===e?w&&V(Kc,{allClosed:t,items:w?.items,onImageClick:C,options:{reviewPhotosType:c,hasSolidShadow:s,emojiType:a,ratingType:d},onChangeShowMoreState:i,reviewsNumber:y,images:S},"summaryReview"):V(Hc,{review:e,allClosed:t,options:{verified:m,hasSolidShadow:s,reviewPhotosType:c,ratingType:d,emojiType:a},onChangeShowMoreState:i,onImageClick:(e,t)=>C(e,t)})}),deprecatedLeaveReviewButton:I?V(Yl,{url:g}):null,dottedNavigation:!z&&"dotted"==u&&V(Br,{renderDotVisual:e=>V(Kl,{$variant:e})}),bottomNavigationButtons:!z&&"arrows"==u&&V(Ts,{})})}),T&&V(za,{initialIndex:A,images:k?.map(e=>e.url),open:R,onClose:()=>N()})]})},np=Ee(Xi)`
    border-radius: 100px;
`,ap=Ee("div")`
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
    @container wrapper (max-width:${Ze}px) {
        max-width: none;
        align-self: flex-start;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    @container wrapper (max-width:${qe}px) {
        flex-direction: column;
        align-items: normal;
    }
`,sp=Ee(({$isEditable:e,$content:t,...i})=>V(qt.Name,{...i,isEditable:e,content:t}))`
    min-width: 0;
    color: ${e=>e.theme.widgets.carousel.colorSellerName};
    &:hover {
        text-decoration: ${e=>e.theme.hasLink?"underline":"none"};
    }
`,lp=Ee(qt.ReviewsText)`
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
    width: max-content;
`,dp=Ee(qt.Rating)`
    color: ${e=>e.theme.widgets.carousel.colorSellerStars};
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}

    ${({$ratingType:e,theme:t})=>"emoji"===e&&`\n            color: ${t.widgets.carousel.colorSellerName};\n        `}
`,cp=Ee(qt.Container)`
    display: flex;
    min-width: 100px;
    width: auto;
    gap: 8px;
    flex-shrink: 1;
    min-width: 0;
`;Ee("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
    margin-top: 4px;
    font-size: 11px;
    @container wrapper (max-width:${Ze}px) {
        justify-content: center;
    }
`;const pp=Ee(Ji)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    align-self: center;
    width: 100%;
`,up=({className:e,isEditableName:t,writeReviewUrl:i,reviewsNumber:o,url:r,rating:n,iconSrc:a,name:s,options:l})=>{const{t:d,locale:c}=qi(),{writeReviewEnabled:p,emojiType:u,ratingType:h,hasSolidShadow:m}=l,g=be(n);return V(ap,{$hasSolidShadow:m,className:e,children:[V(qt,{children:V(cp,{icon:V(ri,{url:r,label:`${s} ${d("reviews")}`,children:V(qt.Icon,{children:V(np,{src:a,alt:d("business_image")})})}),content:V(qt.Content,{name:V(ri,{inherit:!0,url:r,label:`${s} ${d("reviews")}`,children:V(sp,{$isEditable:t,$content:s,children:s})}),rating:V(ri,{url:r,label:`${s} ${d("reviews")}`,children:V(dp,{$ratingType:h,children:[V(qt.Count,{children:_e(n)}),V(qt.RatingIcons,{children:g.map((e,t)=>V(ii,{ratingType:h,emojiType:u,fill:e},t))})]})}),reviewsText:V(lp,{children:[V(ir,{value:o,locale:c})," ",d("reviews_on"),V(tr,{$isWide:!0})]})})})}),p&&i&&V(ri,{className:"reputon-buttons-holder",url:i,label:d("write_review"),children:V(pp,{className:"reputon-bt reputon-link reputon-leave-review editable",content:d("write_review")})})]})},hp=Ee("div")`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 32px;
    @container wrapper (max-width:${Ze}px) {
        margin: 0;
    }
`,mp=Ee("div")`
    display: flex;
    min-width: 10%;
    gap: 48px;
    @container wrapper (max-width: ${Ze}px) {
        gap: 16px;
        flex-direction: column;
    }
`;Ee(Ji)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    align-self: center;
    width: 100%;
`,Ee("div")`
    display: none;
    order: 2;
    @container wrapper (max-width:${Ze}px) {
        justify-content: center;
        display: flex;
        gap: 16px;
        & button {
            display: flex;
        }
    }
`;const gp=()=>"\n    position: absolute;\n    top: 50%;\n    z-index: 10;\n\n    flex-shrink: 0;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center !important;\n    justify-content: center !important;\n    border-radius: 1000px;\n    cursor: pointer;\n    @container wrapper (max-width:740px) {\n        display: none;\n        top: 0;\n        position: relative;\n        transform: none;\n    }\n";Ee("button")`
    transform: translate(-50%, -50%);
    left: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${gp}
`,Ee("button")`
    order: 2;
    transform: translate(50%, -50%);
    right: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${gp}
`;const wp=({infoSeller:e,bottomNavigationButtons:t,carousel:i,dottedNavigation:o,deprecatedLeaveReviewButton:r})=>V(hp,{className:"reputon-carousel-static-plate-container",children:V(mp,{className:"reputon-static-plate-container",children:[e,r,V(vp,{className:"reputon-static-plate-navigation-wrapper",children:[i,o&&V(fp,{className:"reputon-static-plate-navigation-container",children:o})]}),t]})}),fp=Ee("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`,vp=Ee("div")`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`,xp=({isFluid:e=!1})=>{const[t,i]=ne(!1),{data:o,widgetId:r}=ce(jt),{contentIndex:n,hasShadow:a,writeReviewEnabled:s,emojiType:l,hasSolidShadow:d,autoscroll:c,ratingType:p,reviewPhotosType:u,fixedReviewsHeight:h,delay:m,navigationType:g}=Su(Je),{business:w,verified:f}=o,{writeReviewUrl:v,summary:x,url:_,name:y,rating:$,reviewsNumber:k,reviews:S,icon:C}=Pt({contentIndex:n,business:w}),{aggregatedImages:N,summaryImages:R}=Rr(S,!!x),{setFullScreenImageOptions:T,handleClosePopup:A,open:I,popupContent:L,initialIndex:z}=Tr(N),M=s&&!!v,j=Cr({summaryCard:Boolean(x),reviews:S}),P=Nr(+m,10),E=Nr(+m,Ao),O=V(ad,{className:"reputon-carousel-holder",reviews:j,isPopupOpen:I,swiperOptions:{speed:P,hasShadow:a},gap:20,renderCardItem:({review:e,stopSwiper:t})=>"summaryCard"===e?x&&V($s,{items:x?.items,onImageClick:T,options:{reviewPhotosType:u,fixedReviewsHeight:h,hasShadow:d},onChangeShowMoreState:t,reviewsNumber:k,images:R},"summaryReview"):V(ql,{review:e,options:{fixedReviewsHeight:h,hasSolidShadow:d,reviewPhotosType:u,ratingType:p,emojiType:l},verified:f,onChangeShowMoreState:t,onImageClick:(e,t)=>T(e,t)})}),B=V(md,{className:"reputon-carousel-holder",onSlidesPerViewChange:e=>{i(e<j.length&&!a)},hasNavigation:t&&"arrows"==g,widgetId:r,reviews:j,swiperOptions:{autoscroll:c,speed:E,hasShadow:a},gap:20,renderCardItem:({review:e,allClosed:t,stopSwiper:i})=>"summaryCard"===e?x&&V($s,{allClosed:t,items:x?.items,onImageClick:T,options:{reviewPhotosType:u,fixedReviewsHeight:h,hasShadow:d},onChangeShowMoreState:i,reviewsNumber:k,images:R},"summaryReview"):V(ql,{review:e,allClosed:t,options:{fixedReviewsHeight:h,hasSolidShadow:d,reviewPhotosType:u,ratingType:p,emojiType:l},verified:f,onChangeShowMoreState:i,onImageClick:(e,t)=>T(e,t)})});return V(b,{children:[V(jr,{children:V(wp,{bottomNavigationButtons:t&&"arrows"===g&&V(Ts,{}),dottedNavigation:t&&"dotted"===g&&V(Br,{renderDotVisual:e=>V(Kl,{$variant:e})}),infoSeller:V(up,{reviewsNumber:k,iconSrc:C,name:y,rating:$,url:_,writeReviewUrl:v,options:{emojiType:l,ratingType:p,hasSolidShadow:d,writeReviewEnabled:s},isEditableName:"all"===n,className:"reputon-static-plate"}),carousel:e?O:B,deprecatedLeaveReviewButton:M&&V(Yl,{url:v})})}),L&&V(za,{initialIndex:z,images:N?.map(e=>e.url),open:I,onClose:()=>A()})]})},bp=Ee(qt.Icon)`
    min-width: 32px;
    width: 32px;
    height: 32px;
`,_p=Ee(Xi)`
    border-radius: 100px;
`,yp=Ee("div")`
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
`,$p=Ee(({$isEditable:e,$content:t,...i})=>V(qt.Name,{...i,isEditable:e,content:t}))`
    min-width: 0;
    line-height: 16px;
    font-size: 12px;
    color: ${e=>e.theme.widgets.carousel.colorSellerName};
    &:hover {
        text-decoration: ${e=>e.theme.hasLink?"underline":"none"};
    }
`,kp=Ee(qt.ReviewsText)`
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
    width: max-content;
    font-size: 10px;
    line-height: 14px;
`,Sp=Ee(qt.Rating)`
    color: ${e=>e.theme.widgets.carousel.colorSellerStars};
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}

    ${({$ratingType:e,theme:t})=>"emoji"===e&&`\n            color: ${t.widgets.carousel.colorSellerName};\n        `}
`,Cp=Ee(qt.Count)`
    font-size: 14px;
    line-height: 16px;
    height: 16px;
`,Np=Ee(qt.RatingIcons)`
    height: 16px;
`,Rp=Ee(ii)`
    width: 12px;
    height: 12px;
`,Tp=Ee(tr)`
    min-width: 48px;
    height: 16px;
`,Ap=Ee(qt.Container)`
    min-width: 100px;
    width: auto;
    flex-shrink: 1;
    min-width: 0;
`,Ip=Ee(qt.Content)`
    gap: 2px;
`;Ee("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    color: ${e=>e.theme.widgets.carousel.colorReviewsCount};
    margin-top: 4px;
    font-size: 11px;
    @container wrapper (max-width:${Ze}px) {
        justify-content: center;
    }
`;const Lp=Ee(Ji)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    align-self: center;
    width: 100%;
    padding: 8px 10px;
    font-size: 12px;
    line-height: 16px;
`,zp=({className:e,isEditableName:t,writeReviewUrl:i,reviewsNumber:o,url:r,rating:n,iconSrc:a,name:s,options:l})=>{const{t:d,locale:c}=qi(),{writeReviewEnabled:p,emojiType:u,ratingType:h,hasSolidShadow:m}=l,g=be(n);return V(yp,{$hasSolidShadow:m,className:e,children:[V(qt,{children:V(Ap,{icon:V(ri,{url:r,label:`${s} ${d("reviews")}`,children:V(bp,{children:V(_p,{src:a,alt:d("business_image")})})}),content:V(Ip,{name:V(ri,{inherit:!0,url:r,label:`${s} ${d("reviews")}`,children:V($p,{$isEditable:t,$content:s,children:s})}),rating:V(ri,{url:r,label:`${s} ${d("reviews")}`,children:V(Sp,{$ratingType:h,children:[V(Cp,{children:_e(n)}),V(Np,{children:g.map((e,t)=>V(Rp,{ratingType:h,emojiType:u,fill:e},t))})]})}),reviewsText:V(kp,{children:[V(ir,{value:o,locale:c})," ",d("reviews_on"),V(Tp,{$isWide:!0})]})})})}),p&&i&&V(ri,{className:"reputon-buttons-holder",url:i,label:d("write_review"),children:V(Lp,{className:"reputon-bt reputon-link reputon-leave-review editable",content:d("write_review")})})]})},Mp=Ee("div")`
    display: flex;
    flex-direction: column;
    margin: 0;
    gap: 12px;
    padding-bottom: ${e=>e.$hasExtraPadding?"24px":"0"};
`,jp=Ee("div")`
    display: flex;
    min-width: 10%;
    gap: 12px;
    @container wrapper (max-width: ${439}px) {
        gap: 16px;
        flex-direction: column;
    }
`;Ee(Ji)`
    color: ${e=>e.theme.widgets.carousel.colorLeaveReview};
    background: ${e=>e.theme.widgets.carousel.backgroundLeaveReview};
    align-self: center;
    width: 100%;
`,Ee("div")`
    display: none;
    order: 2;
    @container wrapper (max-width:${Ze}px) {
        justify-content: center;
        display: flex;
        gap: 16px;
        & button {
            display: flex;
        }
    }
`;const Pp=()=>"\n    position: absolute;\n    top: 50%;\n    z-index: 10;\n\n    flex-shrink: 0;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center !important;\n    justify-content: center !important;\n    border-radius: 1000px;\n    cursor: pointer;\n    @container wrapper (max-width:740px) {\n        display: none;\n        top: 0;\n        position: relative;\n        transform: none;\n    }\n";Ee("button")`
    transform: translate(-50%, -50%);
    left: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${Pp}
`,Ee("button")`
    order: 2;
    transform: translate(50%, -50%);
    right: 0;
    color: ${e=>e.theme.colorArrow};
    background: ${e=>e.theme.backgroundArrow};
    border: 1px solid ${({theme:e})=>e.borderArrows};
    ${Pp}
`;const Ep=Ee("div")`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(24px);
    display: flex;
    align-items: center;
    justify-content: center;
`,Op=Ee("div")`
    position: relative;
    width: 100%;
`,Bp=({infoSeller:e,bottomNavigationButtons:t,carousel:i,dottedNavigation:o})=>V(Mp,{$hasExtraPadding:!!o,className:"reputon-carousel-static-plate-container",children:[V(jp,{className:"reputon-static-plate-container",children:[e,V(Op,{children:[i,o&&V(Ep,{children:o})]})]}),t]}),Dp=[{breakpoint:2400,slidesPerView:4},{breakpoint:1100,slidesPerView:3},{breakpoint:768,slidesPerView:2},{breakpoint:440,slidesPerView:1}],Hp=({isFluid:e=!1})=>{const[t,i]=ne(!1),{data:o,widgetId:r}=ce(jt),{contentIndex:n,hasShadow:a,writeReviewEnabled:s,emojiType:l,hasSolidShadow:d,autoscroll:c,ratingType:p,reviewPhotosType:u,fixedReviewsHeight:h,delay:m,navigationType:g}=Su(Je),{business:w,verified:f}=o,{writeReviewUrl:v,summary:x,url:_,name:y,rating:$,reviewsNumber:k,reviews:S,icon:C}=Pt({contentIndex:n,business:w}),{aggregatedImages:N,summaryImages:R}=Rr(S,!!x),{setFullScreenImageOptions:T,handleClosePopup:A,open:I,popupContent:L,initialIndex:z}=Tr(N),M=s&&!!v,j=Cr({summaryCard:Boolean(x),reviews:S}),P=Nr(+m,10),E=Nr(+m,Ao),O=V(ad,{className:"reputon-carousel-holder",reviews:j,isPopupOpen:I,swiperOptions:{speed:P,hasShadow:a},gap:12,slideWidth:214,renderCardItem:({review:e,stopSwiper:t})=>"summaryCard"===e?x&&V(rc,{items:x?.items,onImageClick:T,options:{reviewPhotosType:u,fixedReviewsHeight:h,hasShadow:d},onChangeShowMoreState:t,reviewsNumber:k,images:R},"summaryReview"):V(Zd,{review:e,options:{fixedReviewsHeight:h,hasSolidShadow:d,reviewPhotosType:u,ratingType:p,emojiType:l},verified:f,onChangeShowMoreState:t,onImageClick:(e,t)=>T(e,t)})}),B=V(md,{className:"reputon-carousel-holder",onSlidesPerViewChange:e=>{i(e<j.length&&!a)},hasNavigation:!1,widgetId:r,reviews:j,swiperOptions:{autoscroll:c,speed:E,hasShadow:a},gap:12,breakpoints:Dp,renderCardItem:({review:e,allClosed:t,stopSwiper:i})=>"summaryCard"===e?x&&V(rc,{allClosed:t,items:x?.items,onImageClick:T,options:{reviewPhotosType:u,fixedReviewsHeight:h,hasShadow:d},onChangeShowMoreState:i,reviewsNumber:k,images:R},"summaryReview"):V(Zd,{review:e,allClosed:t,options:{fixedReviewsHeight:h,hasSolidShadow:d,reviewPhotosType:u,ratingType:p,emojiType:l},verified:f,onChangeShowMoreState:i,onImageClick:(e,t)=>T(e,t)})});return V(b,{children:[V(jr,{children:V(Bp,{infoSeller:V(zp,{reviewsNumber:k,iconSrc:C,name:y,rating:$,url:_,writeReviewUrl:v,options:{emojiType:l,ratingType:p,hasSolidShadow:d,writeReviewEnabled:s},isEditableName:"all"===n,className:"reputon-static-plate"}),carousel:e?O:B,bottomNavigationButtons:t&&"arrows"===g&&V(nc,{}),dottedNavigation:t&&"dotted"===g&&V(Br,{renderDotVisual:e=>V(Kl,{$variant:e})}),deprecatedLeaveReviewButton:M&&V(Yl,{url:v})})}),L&&V(za,{initialIndex:z,images:N?.map(e=>e.url),open:I,onClose:()=>A()})]})},Fp=()=>{const{data:e,container:t}=ce(jt);(({container:e})=>{e&&(e.style.container="wrapper / inline-size",e.style.width="100%")})({container:t});const{contentIndex:i,ratingType:o,emojiType:r,hasSolidShadow:n,variant:a,UIWidgetType:s,writeReviewEnabled:l}=Su(Je),{business:d}=e,{reviews:c,writeReviewUrl:p,imageUrl:u,url:h,name:m,reviewsNumber:g,rating:w}=Pt({contentIndex:i,business:d}),f={[Bo]:V(gd,{ratingLogoPlace:Qo}),[Ho]:V(gd,{ratingLogoPlace:Yo}),[Do]:V(gd,{ratingLogoPlace:Jo}),[Fo]:V(xp,{}),[zo]:V(gd,{ratingLogoPlace:"none",isFluid:!0}),[Mo]:V(gd,{isFluid:!0,ratingLogoPlace:"header"}),[Po]:V(gd,{ratingLogoPlace:"inCard",isFluid:!0}),[jo]:V(xp,{isFluid:!0}),[Eo]:V(rp,{ratingLogoPlace:Qo}),[Oo]:V(rp,{ratingLogoPlace:Yo}),[Uo]:V(sc,{ratingLogoPlace:Qo}),[Vo]:V(sc,{ratingLogoPlace:Jo}),[Go]:V(sc,{ratingLogoPlace:Yo}),[Wo]:V(Hp,{}),[Zo]:V(sc,{ratingLogoPlace:Qo,isFluid:!0}),[qo]:V(sc,{ratingLogoPlace:Jo,isFluid:!0}),[Ko]:V(sc,{ratingLogoPlace:Yo,isFluid:!0}),[Xo]:V(Hp,{isFluid:!0})},v=!c?.length,x=v&&!!w,b=[Lo.CAROUSEL_COMPACT];return V(To,v&&!w?{className:`reputon-reviews-holder reputon-${a}`,children:V(No,{isCompact:a===Lo.CAROUSEL_COMPACT,emojiType:r,ratingType:o,writeReviewUrl:p,imageUrl:u,url:h??"",name:m??"",solidShadow:n})}:x?{className:`reputon-reviews-holder reputon-${a}`,children:V(Sr,{isCompact:a===Lo.CAROUSEL_COMPACT,writeReviewUrl:p,imageUrl:u,isEditableName:"all"===i,url:h,name:m,rating:w,ratingIcons:be(w),reviewsNumber:g,options:{emojiType:r,hasSolidShadow:n,ratingType:o,writeReviewEnabled:l}})}:{noPadding:b.includes(a),className:`reputon-reviews-holder reputon-${a}`,children:f[s]})},Up=Lo.CAROUSEL,Vp=Io.NONE,Gp=({container:e,legacyOptions:t})=>{const i=(e=>{const t="true"===e?.getAttribute(pt),i="true"===e?.getAttribute(lt),o=e?.getAttribute(ut)===rt,r=e?.getAttribute(Nt),n=e?.getAttribute(st),a=e?.getAttribute(ft),s=e?.getAttribute(xt),l=e?.getAttribute("data-header-type"),d=e?.getAttribute(Tt),c=e?.getAttribute(Lt),p=e?.getAttribute(Ct),u=e?.getAttribute(St),h=e?.getAttribute(At),m=e?.getAttribute("data-navigation-type"),g="true"===e?.getAttribute(dt),w="true"===e?.getAttribute(ct),f="false"!==e?.getAttribute(ht),v="true"===e?.getAttribute(vt),x="true"===e?.getAttribute(Rt);return{showRating:t,showReviewPhoto:i,carouselExtended:o,font:r,theme:n,photoType:s,headerType:l,variant:c,emojiTypeNumber:h,contentIndex:a,hasSolidShadow:"true"===e?.getAttribute(It),writeReviewEnabled:g,autoscroll:w,fixedReviewsHeight:f,cardColor:e?.getAttribute(bt)||"",starsColor:e?.getAttribute(_t)||"",textColor:e?.getAttribute(yt)||"",transparency:u,delay:p,hasShadow:v,fluidScrolling:x,ratingType:d,navigationType:m}})(e),o=(e=>{if(!e)return;const t=e.properties.showRating||"carousel_extended"===e.type,i=e.properties.showReviewPhotos;return{theme:e.theme,writeReviewEnabled:e.properties.writeReviewEnabled,autoscroll:e.properties.autoscroll,delay:e.properties.delay||"5",headerType:t?"top":"none",photoType:i?"large":"none"}})(t),r=o?{...i,...o}:i,{autoscroll:n,fluidScrolling:a,headerType:s,variant:l,theme:d,cardColor:c,contentIndex:p,delay:u,emojiTypeNumber:h,fixedReviewsHeight:m,font:g,hasShadow:w,hasSolidShadow:f,photoType:v,ratingType:x,starsColor:b,textColor:_,transparency:y,writeReviewEnabled:$,navigationType:k}=r,S=n&&a,C=Object.values(Io).includes(s)?s:Vp;return{type:Je,theme:d,UIWidgetType:l===Lo.ROTATOR?C===Io.TOP?Oo:Eo:l===Lo.CAROUSEL_COMPACT&&S?C===Io.TOP?Ko:C===Io.LEFT?Xo:C===Io.IN_CARD?qo:Zo:l===Lo.CAROUSEL_COMPACT?C===Io.TOP?Go:C===Io.LEFT?Wo:C===Io.IN_CARD?Vo:Uo:S?C===Io.TOP?Mo:C===Io.LEFT?jo:C===Io.IN_CARD?Po:zo:C===Io.TOP?Ho:C===Io.LEFT?Fo:C===Io.IN_CARD?Do:Bo,contentIndex:"all"===p?"all":Number(p)-1,reviewPhotosType:v,writeReviewEnabled:$,autoscroll:n,variant:Object.values(Lo).includes(l)?l:Up,headerType:C,fixedReviewsHeight:m,customColors:{cardColor:c,starsColor:b,textColor:_},transparency:y?Number(y):1,delay:u??"5",font:zt.includes(g)?g:"default",hasShadow:w,fluidScrolling:a,ratingType:Mt.includes(x)?x:"stars",emojiType:h&&Number(h)||0,hasSolidShadow:f,navigationType:k??"arrows"}};Ee("div")`
    position: absolute;
    z-index: 2;
    top: ${e=>e.$isSmall||e.$hasSolidShadow?"-2px":"6px"};
    right: ${e=>e.$isSmall||e.$hasSolidShadow?"-2px":"0"};
    width: 20px;
    height: 20px;
    text-align: center;
    transition: ${e=>e.theme.transition};
`,Ee("button")`
    color: ${e=>e.theme.closeStickyIcon};
    background: transparent;
    font-size: ${e=>e.$isSmall?"10px":"12px"};
    opacity: ${e=>e.$isSmall?"0.5":"1"};
`,Ee("div")`
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
`;const Wp=Ee("div")`
    width: ${e=>e.theme.compactWidth}px;
    min-width: 205px;
    transition: ${e=>e.theme.transition};
`,Zp=({content:e,className:t})=>V(Wp,{className:Bt("reputon-container",t),children:e});Ee(jl)`
    width: 100%;
`,Ee(qt.Container)`
    padding: 5px 25px 5px 10px;
`,Ee(Zp)`
    background: ${e=>e.theme.widgets.compact.background};
    &:hover {
        background: ${e=>e.theme.hasLink&&e.theme.widgets.compact.backgroundHover};
    }
`,Ee(qt.Rating)`
    color: ${e=>e.theme.widgets.compact.colorSellerStars};
`,Ee("div")`
    height: 17px;
`,Ee(qt.RatingIcons)`
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}
    gap: 2px;
`,Ee(qt.Name)`
    color: ${e=>e.theme.widgets.compact.colorSellerName};
`,Ee(qt.ReviewsText)`
    color: ${e=>e.theme.widgets.compact.colorReviewsCount};
`;const qp=Ee("div")`
    display: flex;
    padding: 4px 8px;
    gap: 8px;
    align-items: center;
    transition: ${e=>e.theme.transition};
    background: ${e=>e.theme.widgets.compact.background};
    &:hover {
        background: ${e=>e.theme.hasLink&&e.theme.widgets.compact.backgroundHover};
    }
`,Kp=Ee("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
`,Xp=Ee("div")`
    display: flex;
    align-items: center;
    justify-content: center;
`,Yp=Ee("div")`
    color: ${e=>e.theme.widgets.compact.colorSellerStars};
    font-size: 32px;
    font-weight: 900;
    line-height: 37px;
    align-self: center;
`,Jp=Ee("div")`
    color: ${e=>e.theme.widgets.compact.colorSellerStars};
    display: flex;
    gap: 2px;
    height: 10px;
`,Qp=Ee("div")`
    color: ${e=>e.theme.widgets.compact.colorReviewsCount};
    font-size: 9px;
    font-weight: 400;
    line-height: 10px;
    display: flex;
`;Ee("div")`
    margin: 0px 0px 0px 2px;
`,Ee("div")`
    display: flex;
`;const eu=({className:e,icon:t,content:i})=>V(qp,{className:Bt(e,"reputon-container"),children:[t,i]});eu.Content=function({rating:e,ratingIcons:t,reviewsText:i,className:o}){return V(Kp,{className:Bt(o,"reputon-content"),children:[e,t,i]})},eu.Rating=function({children:e,className:t}){return e?V(Yp,{className:Bt(t,"reputon-rating-count"),children:e}):null},eu.RatingIcons=function({className:e,children:t}){return t?V(Jp,{className:Bt(e,"reputon-rating-stars"),children:t}):null},eu.Text=function({className:e,children:t}){return t?V(Qp,{className:Bt(e,"reputon-reviews-count"),children:t}):null},eu.Icon=function({className:e,children:t}){return t?V(Xp,{className:Bt(e,"reputon-image"),children:t}):null},Ee(jl)`
    width: 40px;
    height: 40px;
`,Ee(ii)`
    width: 9px;
    height: 9px;
`,Ee(qt.RatingIcons)`
    color: ${e=>e.theme.widgets.compact.colorSellerStars};
    gap: 2px;
    height: 9px;
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}
`,Ee(eu)`
    padding: 13px 8px;
`,Ee(eu.Content)`
    gap: 2px;
`;const tu="small",iu=["true","star","inline","inline-reviews"];Ee(jl)`
    width: 100%;
`,Ee(qt.Container)`
    padding: 10px;
`,Ee(Zp)`
    background: ${e=>e.theme.widgets.compact.background};
    &:hover {
        background: ${e=>e.theme.hasLink&&e.theme.widgets.compact.backgroundHover};
    }
`,Ee(qt.Rating)`
    color: ${e=>e.theme.widgets.compact.colorSellerStars};
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}

    ${({$ratingType:e,theme:t})=>"emoji"===e&&`\n            color: ${t.widgets.compact.colorSellerName};\n        `}
`;const ou=qt.Name;Ee(({isEditable:e,content:t,...i})=>V(ou,{...i,isEditable:e,content:t}))`
    color: ${e=>e.theme.widgets.compact.colorSellerName};
`,Ee(qt.ReviewsText)`
    color: ${e=>e.theme.widgets.compact.colorReviewsCount};
    font-weight: 600;
`,Ee("div")`
    display: flex;
    align-items: center;
`,Ee("div")`
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
`,Ee("div")`
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
`,Ee("div")`
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
`,Ee("div")`
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        gap: 4px;
    }
`,Ee("div")`
    display: flex;
    gap: 2px;
    align-items: center;
`,Ee(ii)`
    width: 20px;
    height: 20px;
    @media (max-width: 768px) {
        width: 10px;
        height: 10px;
    }
`,Ee("div")`
    font-weight: 700;
    font-size: 20px;
    line-height: 1.35;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`,Ee("div")`
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${({theme:e})=>e.widgets.inline.colorReviewStars};
    ${({$hasMargin:e})=>e&&"margin-right: 8px;"}

    @media (max-width: 768px) {
        margin-right: 0;
        gap: 4px;
    }
`,Ee("div")`
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
`,Ee("span")`
    color: ${({theme:e})=>e.widgets.inline.colorReviewsCount};
    font-size: 16px;
    line-height: 127%;
    font-weight: 600;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        font-size: 11px;
    }
`,Ee("span")`
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
`,Ee(jl)`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    @media (max-width: 768px) {
        width: 16px;
        height: 16px;
    }
`,Ee("div")`
    display: flex;
    align-items: center;
`,Ee(ri)`
    padding: 0px;
`,Ee(To)`
    width: 100%;
`,Ee(jl)`
    width: 40px;
    height: 40px;
`,Ee(ii)`
    width: 8px;
    height: 8px;
`,Ee(eu.Rating)`
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}

    ${({$ratingType:e,theme:t})=>"emoji"===e&&`\n            color: ${t.widgets.grid.colorSellerName};\n        `}
`,Ee(eu.RatingIcons)`
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}

    ${({$ratingType:e,theme:t})=>"emoji"===e&&`\n            color: ${t.widgets.grid.colorSellerName};\n        `}
`,Ee("div")`
    display: flex;
    gap: 8px;
    align-items: center;
`,Ee("div")`
    display: flex;
    gap: 2px;
    align-items: center;
    color: ${({theme:e})=>e.widgets.compact.colorLine};
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}
`,Ee(ii)`
    width: 16px;
    height: 16px;
`,Ee("div")`
    display: flex;
    gap: 4px;
    align-items: center;
`,Ee("div")`
    color: ${({theme:e})=>e.widgets.compact.oneLineColor};
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
`,Ee("div")`
    color: ${({theme:e})=>e.widgets.compact.oneLineColor};
    text-decoration: none;
    font-size: 14px;
    line-height: 19px;
    font-weight: 600;
`,Ee(jl)`
    width: 20px;
    height: 20px;
    flex-shrink: 0;
`,Ee("div")`
    display: flex;
    align-items: center;
`,Ee("div")`
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
`,Ee("div")`
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
`,Ee("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2px;
    margin-left: 4px;
`,Ee("div")`
    margin-right: 8px;
`,Ee("button")`
    position: absolute;
    right: 25px;
    top: 12px;
    padding: 3px;
    width: 26px;
    height: 26px;
`,Ee("div")``,Ee("div")`
    position: fixed;
    width: 100%;
    z-index: 9999;
    ${({$position:e})=>"top"===e?"top: 0;":"bottom: 0;"}
    left: 0;
`,Ee("div")`
    display: flex;
    gap: 2px;
    align-items: center;
    color: ${({theme:e})=>e.widgets["trust-bar"].colorReviewStars};
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}
`,Ee(ii)`
    color: ${({theme:e})=>e.widgets["trust-bar"].colorReviewStars};
    width: 20px;
    height: 20px;
    @media (max-width: 768px) {
        width: 16px;
        height: 16px;
    }
`,Ee("div")`
    display: flex;
    gap: 8px;
    align-items: center;
`,Ee("div")`
    color: ${({theme:e})=>e.widgets["trust-bar"].colorReviewStars};
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`,Ee("div")`
    color: ${({theme:e})=>e.widgets["trust-bar"].colorReviewsCount};
    text-decoration: underline;
    font-size: 16px;
    line-height: 19px;
    font-weight: 600;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`,Ee(jl)`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    @media (max-width: 768px) {
        width: 20px;
        height: 20px;
    }
`,Ee("div")`
    display: flex;
    align-items: center;
`,Ee("div")`
    color: ${({theme:e})=>e.widgets["trust-bar"].colorReviewsCount};
    font-size: 16px;
    line-height: 19px;
    font-weight: 600;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`,Ee(qt.Container)`
    padding: 5px 25px 5px 10px;
    height: 100%;
`,Ee(jl)`
    width: 100%;
`,Ee(qt.Rating)`
    color: ${e=>e.theme.widgets.stickySlide.colorReviewStars};
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}

    ${({$ratingType:e,theme:t})=>"emoji"===e&&`\n            color: ${t.widgets.stickySlide.colorName};\n        `}
`,Ee(qt.Name)`
    color: ${e=>e.theme.widgets.stickySlide.colorName};
`,Ee(qt.ReviewsText)`
    color: ${e=>e.theme.widgets.stickySlide.colorSubText};
    font-weight: 600;
`;const ru=Ee("div")`
    display: flex;
    padding: 10px 20px 10px 10px;
    height: 100%;
    overflow-x: hidden;
    transition: ${e=>e.theme.transition};
`,nu=Ee("div")`
    min-width: 50px;
    width: 50px;
`,au=Ee("div")`
    width: calc(100% - 60px);
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    gap: 2px;
    margin-left: 10px;
`,su=Ee("div")`
    color: ${e=>e.theme.widgets.stickySlide.colorReviewStars};
    display: flex;
    gap: 4px;
`,lu=Ee("div")`
    color: ${e=>e.theme.widgets.stickySlide.colorName};
    max-width: 100%;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 13px;
    font-weight: 600;
`,du=Ee("span")`
    font-weight: 800;
    margin-right: 3px;
`,cu=Ee("div")`
    color: ${e=>e.theme.widgets.stickySlide.colorSubText};
    font-weight: 400;
    font-size: 12px;
`,pu=({className:e,image:t,content:i})=>V(ru,{className:Bt(e,"reputon-single-review"),children:[t,i]});pu.Image=({className:e,children:t})=>t&&V(nu,{className:Bt(e,"reputon-image"),children:t}),pu.Content=({className:e,rating:t,byName:i,date:o})=>V(au,{className:Bt(e,"reputon-content"),children:[t,i,o]}),pu.RatingIcons=({className:e,children:t})=>t&&V(su,{className:Bt(e,"reputon-rating-stars"),children:t}),pu.ByName=({className:e,children:t})=>t&&V(lu,{className:Bt(e,"reputon-rating-text"),children:t}),pu.ReviewHeadline=({className:e,children:t})=>t&&V(du,{className:Bt(e,"reputon-text-headline"),children:t}),pu.Date=({className:e,children:t})=>t&&V(cu,{className:Bt(e,"reputon-date"),children:t}),Ee(pu.RatingIcons)`
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}
`,Ee(ps)`
    .reputon-top-part {
        border-radius: 14px;
    }
`,Ee(ps.RatingIcons)`
    color: ${({theme:e})=>e.widgets.stickySlide.colorReviewStars};
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}
`,Ee(Bl)`
    margin-left: 7px;
`,Ee(jl)`
    width: 17px;
    height: 17px;
`,Ee(ps.Name)`
    color: ${({theme:e})=>e.widgets.stickySlide.colorName};
`,Ee(ps.Time)`
    color: ${({theme:e})=>e.widgets.stickySlide.colorTime};
`,Ee(ps.TextContainer)`
    color: ${({theme:e})=>e.widgets.stickySlide.colorDescription};
`,Ee(ps.ShowMoreBtn)`
    color: ${({theme:e})=>e.widgets.stickySlide.colorShowMore};
`;const uu=Pe`
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
`;Ee("div")``,Ee("div")`
    font-family: 'Manrope', sans-serif;
    position: fixed;
    inset: 0px;
    z-index: 999;
`,Ee("div")`
    position: fixed;
    inset: 0px;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    animation: ${uu} 0.3s ease-out forwards;
`,Ee("div")`
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
`,Ee("div")`
    font-size: 27px;
    font-weight: 700;
    color: ${({theme:e})=>e.widgets.stickySlide.colorName};
`,Ee("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    width: 100%;
    padding: 24px;
    background: ${({theme:e})=>e.background};
    border-radius: 14px;
`,Ee(ri)`
    width: 100%;
`,Ee("div")`
    display: flex;
    align-items: center;
    gap: 5px;
`,Ee(er)`
    height: 32px;
`,Ee("div")`
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: ${({theme:e})=>e.widgets.stickySlide.colorName};
    text-transform: capitalize;
`,Ee("div")`
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${({theme:e})=>e.widgets.stickySlide.colorReviewStars};
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}

    ${({$ratingType:e,theme:t})=>"emoji"===e&&`\n            color: ${t.widgets.stickySlide.colorName};\n        `}
`,Ee("div")`
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
`,Ee("div")`
    display: flex;
    gap: 2px;
`,Ee(ii)`
    width: 20px;
    height: 20px;
`,Ee("div")`
    font-size: 12px;
    line-height: 14px;
    color: ${({theme:e})=>e.widgets.stickySlide.colorSubText};
`,Ee("div")`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 100%;
`,Ee("button")`
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
`,Ee("div")`
    cursor: pointer;
    width: ${e=>e.theme.compactWidth}px;
`,Ee("div")`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background: ${e=>e.theme.widgets.stickySlide.background};
    transition: ${e=>e.theme.transition};
    &:hover {
        background: ${e=>e.theme.hasLink&&e.theme.widgets.stickySlide.backgroundHover};
    }
`;const hu=Mt[0],mu=({container:e,legacyOptions:t})=>{const i=(e=>{const t="parallax"===e.getAttribute(gt),i=e.getAttribute(ut),o=e.getAttribute(ut),r=e.getAttribute("data-minimize"),n=e.getAttribute(Lt),a=e?.getAttribute(Nt),s=e?.getAttribute(Tt),l=e.getAttribute(At),d=e.getAttribute(st),c=e.getAttribute(ft),p="true"===e.getAttribute(wt),u=e.getAttribute(bt)||"",h=e.getAttribute(_t)||"",m=e.getAttribute(yt)||"",g=e.getAttribute(St);return{type:o,isParallax:t,deprecatedType:i,minimize:r,font:a,delay:e.getAttribute(Ct),ratingType:s,emojiTypeNumber:l,theme:d,contentIndex:c,isSticky:p,cardColor:u,starsColor:h,textColor:m,transparency:g,hasSolidShadow:"true"===e.getAttribute(It),variant:n,trustText:e.getAttribute("data-trust-text"),positionY:e.getAttribute(mt)}})(e),o=(e=>{if(e)return{theme:e.theme,isSticky:"parallax"===e.position.type,minimize:"small"===e.type?"true":void 0}})(t),r=o?{...i,...o}:i,{isParallax:n,deprecatedType:a,minimize:s,font:l,ratingType:d,emojiTypeNumber:c,theme:p,contentIndex:u,isSticky:h,cardColor:m,starsColor:g,textColor:w,transparency:f,hasSolidShadow:v,type:x,delay:b,variant:_,trustText:y,positionY:$}=r;return{type:x,theme:p,delay:b||"5",contentIndex:"all"===u?"all":Number(u)-1,isSticky:n||h,UIWidgetType:a===at?tu:x===Ye||"slider"===_?"basic-slide":"trust-bar"===_?"trust-bar":s&&iu.includes(s)?{true:tu,star:"star-rating",inline:"inline","inline-reviews":"inline-reviews"}[s]:"basic",customColors:{cardColor:m,starsColor:g,textColor:w},transparency:f?Number(f):1,font:zt.includes(l)?l:zt[0],ratingType:Mt.includes(d)?d:hu,emojiType:c?Number(c):0,hasSolidShadow:v,trustText:y??"",positionY:$}},gu=["standard","compact"],wu=Pe`
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`,fu=Pe`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;Ee("div",Kr)`
    ${({$fading:e})=>"in"===e?`\n            animation: ${fu} 0.6s ease;\n        `:""}

    ${({$fading:e})=>"out"===e?`\n            animation: ${wu} 0.6s ease;\n        `:""}
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: ${16}px;
    overflow: hidden;
    min-width: 120px;
    background: ${({theme:e})=>e.widgets.gallery.background};
    ${({$fill:e,$fallback:t})=>t?"width: 100%; height: 100%;":"auto"===e?"height: 100%; width: max-content;":e?"width: 100%; height: 100%;":"aspect-ratio: 1;"}
`,Ee("img",Kr)`
    display: block;
    cursor: pointer;
    ${({$fill:e})=>"auto"===e?"height: 100%; width: auto;":"flex: 1; width: 100%; height: 100%; object-fit: cover;"}
`,Ee("div",Kr)`
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

    @container wrapper (max-width:${We}px) {
        height: ${({$large:e})=>e?"46px":"18%"};
        padding: ${({$large:e})=>e?"8px":"4px"};
    }

    @container wrapper (max-width:${qe}px) {
        height: ${({$large:e})=>e?"46px":"25%"};
        padding: ${({$large:e})=>e?"8px":"4px"};
        gap: 4px;
    }
`,Ee("div",Kr)`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    overflow: hidden;

    @container wrapper (max-width:${We}px) {
        gap: 0;
    }
`,Ee("p",Kr)`
    font-size: ${({$large:e})=>e?"18px":"12px"};
    line-height: ${({$large:e})=>e?"20px":"14px"};
    font-weight: 600;
    color: ${({theme:e})=>e.widgets.gallery.colorName};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    @container wrapper (max-width:${We}px) {
        font-size: ${({$large:e})=>e?"12px":"10px"};
        line-height: ${({$large:e})=>e?"14px":"12px"};
    }
`,Ee("p",Kr)`
    font-size: ${({$large:e})=>e?"14px":"10px"};
    line-height: ${({$large:e})=>e?"19px":"12px"};
    font-weight: 600;
    color: ${({theme:e})=>e.widgets.gallery.colorName};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    @container wrapper (max-width:${We}px) {
        font-size: ${({$large:e})=>e?"10px":"8px"};
        line-height: ${({$large:e})=>e?"12px":"10px"};
    }
`,Ee(ps.RatingIcons)`
    color: ${({theme:e})=>e.widgets.gallery.colorReviewStars};
    gap: ${({$large:e})=>e?"4px":"2px"};
    align-self: center;
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}

    @container wrapper (max-width:${We}px) {
        gap: 2px;
    }
`,Ee(ii)`
    height: ${({$large:e})=>e?"25px":"12px"};
    width: ${({$large:e})=>e?"25px":"12px"};

    @container wrapper (max-width:${We}px) {
        height: ${({$large:e})=>e?"12px":"8px"};
        width: ${({$large:e})=>e?"12px":"8px"};
    }
`,Ee(jl)`
    color: ${({theme:e})=>e.widgets.gallery.colorReviewStars};
    height: ${({$large:e})=>e?"25px":"12px"};
    width: ${({$large:e})=>e?"25px":"12px"};
    align-self: center;

    @container wrapper (max-width:${We}px) {
        height: ${({$large:e})=>e?"12px":"8px"};
        width: ${({$large:e})=>e?"12px":"8px"};
    }
`,Ee("span")`
    height: ${({$large:e})=>e?"48px":"25px"};
    width: ${({$large:e})=>e?"48px":"25px"};
    display: block;

    @container wrapper (max-width:${We}px) {
        height: ${({$large:e})=>e?"25px":"20px"};
        width: ${({$large:e})=>e?"25px":"20px"};
    }
`;const vu=Pe`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
`;Ee("div")`
    display: flex;
    width: 100%;
    overflow: hidden;
    height: 320px;

    @container wrapper (max-width:${We}px) {
        height: 160px;
    }
`,Ee("div",Kr)`
    display: flex;
    height: 100%;
    animation: ${vu} ${e=>e.$animationDuration}s linear infinite;
`,Ee("div")`
    display: flex;
    height: 100%;
    gap: 16px;
    margin-right: 20px;

    @container wrapper (max-width:${We}px) {
        gap: 8px;
    }
`,Ee("div")`
    display: flex;
    height: 100%;
    width: auto;
    transition: 0.2s;
    flex-shrink: 0;
    ${({$empty:e})=>e&&"aspect-ratio: 1;"}
`,Ee("div",Kr)`
    display: grid;
    gap: 16px;
    width: 100%;
    grid-template-columns: repeat(${({$columns:e})=>e}, 1fr);

    @container wrapper (max-width: ${We}px) {
        gap: 8px;
    }
`,Ee("div",Kr)`
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

    @container wrapper (max-width: ${qe}px) {
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
`,Ee("div")`
    width: 100%;
    height: ${({$autoHeight:e})=>e?"auto":"100%"};
`,Ee("div")`
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: ${e=>"black"===e.theme.theme?"rgba(28, 28, 28, 1)":"#ffffff"};
    padding: 40px;
    overflow: hidden;

    @media (max-width: ${We}px) {
        padding: 16px;
    }
`,Ee("p")`
    font-size: 14px;
    font-weight: 500;
    overflow-y: auto;
    color: ${e=>"black"===e.theme.theme?"#ffffff":"rgba(28, 28, 28, 1)"};
`,Ee(ps.RatingIcons)`
    color: ${({theme:e})=>e.widgets.gallery.modal.stars};
    gap: 4px;
    align-items: center;
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.widgets.gallery.modal.hearts};\n        `}
`,Ee(ii)`
    height: 16px;
    width: 16px;
`,Ee(Bl)`
    margin-left: 7px;
`,Ee(Xi)`
    height: 42px;
    width: 42px;
`,Ee("div")`
    display: flex;
    justify-content: space-between;
    gap: 12px;
`,Ee("div")`
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
`,Ee(jl)`
    height: 16px;
    width: 16px;
`,Ee("div")`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
`,Ee("div")`
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;

    &:last-child::after {
        ${({$restImages:e})=>!!e&&`\n                    content: ${e?`'+${e}'`:""};\n                    position: absolute;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    color: white;\n                    left: 0;\n                    top: 0;\n                    width: 100%;\n                    height: 100%;\n                    font-size: 26px;\n                    font-weight: 700;\n                    background: rgba(0, 0, 0, 50%);\n                `}
    }
`,Ee("img")`
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
`;const xu="\n    color: gray;\n    flex-shrink: 0;\n    width: 32px;\n    height: 32px;\n    cursor: pointer;\n    border-radius: 100%;\n    padding: 10px;\n    z-index: 10;\n    & svg {\n        width: 100%;\n        height: 100%;\n    }\n        display: flex;\n    align-items: center;\n    justify-content: center;\n";Ee("button")`
    position: absolute;
    left: 12px;
    background: ${e=>"black"===e.theme.theme?"rgba(28, 28, 28, 1)":"#ffffff"};
    ${xu}
`,Ee("button")`
    position: absolute;
    right: 12px;
    background: ${e=>"black"===e.theme.theme?"rgba(28, 28, 28, 1)":"#ffffff"};
    ${xu}
    order: 2;
`,Ee("div")`
    display: grid;
    grid-template-columns: 440px 440px;
    background: ${e=>"black"===e.theme.theme?"rgba(28, 28, 28, 1)":"#ffffff"};
    border-radius: 16px;
    overflow: hidden;
    width: 880px;
    height: 80vh;

    @media (max-width: ${We}px) {
        grid-template-rows: 50%;
        grid-template-columns: 100%;
        height: 90vh;
        width: 90vw;
    }
`,Ee("div")`
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
`,Ee("img")`
    position: absolute;
    width: auto;
    max-width: 99%;
    height: auto;
    max-height: 100%;
    top: 50%;
    left: 50%;
    object-fit: contain;
    transform: translate(-50%, -50%);
`,Ee("div")`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;const bu=Ee("button")`
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
`,_u=({className:e,children:t,content:i,...o})=>V(bu,{"aria-label":i,"data-content":i,type:"button",className:e,...o,children:t}),yu=qt.Name;Ee(to)`
    align-self: stretch;
    @container wrapper (max-width:${Ze}px) {
        margin-left: 0px;
        margin-right: 0px;
        flex-direction: column;
        align-items: normal !important;
    }
`,Ee(Xi)`
    border-radius: 100px;
`,Ee(qt.ReviewsText)`
    color: ${e=>e.theme.widgets.gallery.colorReviewsCount};
`,Ee(({isEditable:e,content:t,...i})=>V(yu,{...i,isEditable:e,content:t}))`
    color: ${e=>e.theme.widgets.gallery.colorSellerName};
    & a:hover {
        text-decoration: underline;
    }
`,Ee(qt.Rating)`
    color: ${e=>e.theme.widgets.gallery.colorSellerStars};
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}

    ${({$ratingType:e,theme:t})=>"emoji"===e&&`LightButton\n            color: ${t.widgets.gallery.colorSellerName};\n        `}
`,Ee(_u)`
    color: ${e=>e.theme.widgets.gallery.colorLeaveReview};
    background: ${e=>e.theme.widgets.gallery.backgroundLeaveReview};
    align-self: center;
    @container wrapper (max-width:${Ze}px) {
        width: 100%;
        text-align: center;
    }
`,Ee(ri)`
    @container wrapper (max-width:${Ze}px) {
        width: 100%;
    }
`,je`
    .${Ve}.gallery-reviews-popup .reputon-modal-close {
        right: 8px !important;
        top: 8px !important;
    }
`,Ee(To)`
    padding: ${40}px;

    @container wrapper (max-width:${We}px) {
        padding: 16px;
    }

    ${({$full:e})=>e&&"padding-left: 0; padding-right: 0;"}
`,Ee(jl)`
    width: 17px;
    height: 17px;
`,Ee("img")`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,Ee(Bl)`
    margin-left: 7px;
`,Ee(_u)`
    color: ${e=>e.theme.widgets.grid.colorLoadMore};
    background: ${e=>e.theme.widgets.grid.backgroundLoadMore};
`,Ee(ps.RatingIcons)`
    color: ${e=>e.theme.widgets.grid.colorReviewStars};
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}
`,Ee(ps.TextContainer)`
    color: ${e=>e.theme.widgets.grid.colorDescription};
`,Ee(ps.ShowMoreBtn)`
    color: ${e=>e.theme.widgets.grid.colorShowMore};
`,Ee(ps.Time)`
    color: ${e=>e.theme.widgets.grid.colorTime};
`,Ee(ps.Name)`
    color: ${e=>e.theme.widgets.grid.colorName};
`,Ee(Ha)`
    margin-top: 12px;
`;const $u=qt.Name;Ee(to)`
    align-self: stretch;
    @container wrapper (max-width:${Ze}px) {
        margin-left: 0px;
        margin-right: 0px;
        flex-direction: column;
        align-items: normal !important;
    }
`,Ee(Xi)`
    border-radius: 100px;
`,Ee(qt.ReviewsText)`
    color: ${e=>e.theme.widgets.grid.colorReviewsCount};
`,Ee(({isEditable:e,content:t,...i})=>V($u,{...i,isEditable:e,content:t}))`
    color: ${e=>e.theme.widgets.grid.colorSellerName};
    & a:hover {
        text-decoration: underline;
    }
`,Ee(qt.Rating)`
    color: ${e=>e.theme.widgets.grid.colorSellerStars};
    ${({$ratingType:e,theme:t})=>"hearts"===e&&`\n            color: ${t.heartsColor};\n        `}

    ${({$ratingType:e,theme:t})=>"emoji"===e&&`LightButton\n            color: ${t.widgets.grid.colorSellerName};\n        `}
`,Ee(_u)`
    color: ${e=>e.theme.widgets.grid.colorLeaveReview};
    background: ${e=>e.theme.widgets.grid.backgroundLeaveReview};
    align-self: center;
    @container wrapper (max-width:${Ze}px) {
        width: 100%;
        text-align: center;
    }
`,Ee(ri)`
    @container wrapper (max-width:${Ze}px) {
        width: 100%;
    }
`,Ee("div",Kr)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    overflow: hidden;
`,Ee("div",Kr)`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(${300}px, 1fr));
    @supports (-webkit-hyphens: none) {
        grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
    }
    grid-gap: ${16}px;
    @container wrapper (max-width:${Ze}px) {
        grid-template-columns: repeat(auto-fill, minmax(${300}px, 1fr));
        grid-gap: ${12}px;
    }
`,Ee(_u)`
    color: ${({theme:e})=>e.widgets.grid.colorLoadMore};
    background: ${({theme:e})=>e.widgets.grid.backgroundLoadMore};
`;const ku={[Ke]:({container:e,legacyOptions:t})=>{const i=(e=>{const t="true"===e?.getAttribute(pt),i="true"===e?.getAttribute(lt),o=e?.getAttribute(Nt),r=e?.getAttribute(st),n=e?.getAttribute(ft),a=e?.getAttribute(xt),s=e?.getAttribute(Tt),l=e?.getAttribute(At),d=e?.getAttribute(St),c=e?.getAttribute($t),p=e?.getAttribute(kt);return{showRating:t,showReviewPhotos:i,font:o,theme:r,contentIndex:n,reviewPhotosType:a,ratingType:s,emojiTypeNumber:l,transparency:d,numberOfRowsMobile:c,numberOfRowsDesktop:p,writeReviewEnabled:"true"===e?.getAttribute(dt),fixedReviewsHeight:"false"!==e?.getAttribute(ht),solidShadow:"true"===e?.getAttribute(It),cardColor:e?.getAttribute(bt)||"",starsColor:e?.getAttribute(_t)||"",textColor:e?.getAttribute(yt)||""}})(e),o=(e=>{if(!e)return;const t=e.properties.showReviewPhotos;return{theme:e.theme,reviewPhotosType:t?"large":"none",writeReviewEnabled:e.properties.writeReviewEnabled,showRating:e.properties.showRating,fixedReviewsHeight:!0}})(t),r=o?{...i,...o}:i,{font:n,ratingType:a,theme:s,contentIndex:l,reviewPhotosType:d,showRating:c,writeReviewEnabled:p,fixedReviewsHeight:u,cardColor:h,starsColor:m,textColor:g,numberOfRowsMobile:w,numberOfRowsDesktop:f,transparency:v,emojiTypeNumber:x,solidShadow:b}=r;return{type:Ke,theme:s,contentIndex:"all"===l?"all":Number(l)-1,reviewPhotosType:d,showRating:c,writeReviewEnabled:p,fixedReviewsHeight:u,customColors:{cardColor:h,starsColor:m,textColor:g},numberOfRows:{mobile:Number(w)||3,desktop:Number(f)||2},transparency:v?Number(v):1,font:zt.includes(n)?n:"default",ratingType:Mt.includes(a)?a:"stars",emojiType:x&&Number(x)||0,solidShadow:b}},[Xe]:mu,[at]:mu,[Ye]:mu,[Je]:Gp,[rt]:Gp,[Qe]:({container:e})=>{const t=e?.getAttribute(Nt),i=e?.getAttribute(Tt);return{type:Qe,theme:e.getAttribute(st),contentIndex:"all"===e.getAttribute(ft)?"all":Number(e.getAttribute(ft))-1,reviewPhotosType:e.getAttribute(xt)||("true"===e.getAttribute(lt)?"large":"none"),writeReviewEnabled:"true"===e.getAttribute(dt),autoscroll:"true"===e.getAttribute(ct),fixedReviewsHeight:"true"===e.getAttribute(ht),customColors:{cardColor:e.getAttribute(bt)??"",starsColor:e.getAttribute(_t)??"",textColor:e.getAttribute(yt)??""},transparency:e.getAttribute(St)?Number(e.getAttribute(St)):1,delay:e.getAttribute(Ct)??"",font:zt.includes(t)?t:"default",hasShadow:"true"===e.getAttribute(vt),fluidScrolling:"true"===e.getAttribute(Rt),ratingType:Mt.includes(i)?i:"stars",emojiType:e.getAttribute(At)&&Number(e.getAttribute(At))||0,solidShadow:"true"===e.getAttribute(It)}},[et]:({container:e,legacyOptions:t})=>{const i=(e=>{const t="true"===e?.getAttribute(lt),i=e?.getAttribute(Nt),o=e?.getAttribute(st),r=e?.getAttribute(ft),n=e?.getAttribute(Tt),a=e?.getAttribute(At),s=e?.getAttribute(St);return{showReviewPhotos:t,font:i,theme:o,contentIndex:r,ratingType:n,emojiTypeNumber:a,transparency:s,writeReviewEnabled:"true"===e?.getAttribute(dt),cardColor:e?.getAttribute(bt)||"",starsColor:e?.getAttribute(_t)||"",textColor:e?.getAttribute(yt)||""}})(e),o=(e=>{if(e)return{theme:e.theme,showReviewPhotos:e.properties.showReviewPhotos,writeReviewEnabled:e.properties.writeReviewEnabled}})(t),r=o?{...i,...o}:i,{font:n,ratingType:a,theme:s,contentIndex:l,showReviewPhotos:d,writeReviewEnabled:c,cardColor:p,starsColor:u,textColor:h,transparency:m,emojiTypeNumber:g}=r;return{type:et,theme:s,contentIndex:"all"===l?"all":Number(l)-1,showReviewPhotos:d,writeReviewEnabled:c,customColors:{cardColor:p,starsColor:u,textColor:h},transparency:m?Number(m):1,font:zt.includes(n)?n:"default",ratingType:Mt.includes(a)?a:"stars",emojiType:g&&Number(g)||0}},[tt]:({container:e})=>{const{showReviewPhotos:t,showRating:i,font:o,ratingType:r,emojiTypeNumber:n,theme:a,contentIndex:s,reviewPhotosType:l,writeReviewEnabled:d,cardColor:c,starsColor:p,textColor:u,numberOfRowsMobile:h,numberOfRowsDesktop:m,transparency:g,solidShadow:w}=(e=>{const t="true"===e.getAttribute(lt),i="true"===e.getAttribute(pt),o=e?.getAttribute(Nt),r=e?.getAttribute(Tt);return{showReviewPhotos:t,showRating:i,font:o,ratingType:r,emojiTypeNumber:e.getAttribute(At),theme:e.getAttribute(st),contentIndex:e.getAttribute(ft),reviewPhotosType:e.getAttribute(xt),writeReviewEnabled:"true"===e.getAttribute(dt),cardColor:e.getAttribute(bt)||"",starsColor:e.getAttribute(_t)||"",textColor:e.getAttribute(yt)||"",numberOfRowsMobile:e.getAttribute($t),numberOfRowsDesktop:e.getAttribute(kt),transparency:e.getAttribute(St),solidShadow:"true"===e.getAttribute(It)}})(e);return{type:tt,theme:a,contentIndex:"all"===s?"all":Number(s)-1,reviewPhotosType:l||(t?"large":"none"),writeReviewEnabled:d,showRating:i,customColors:{cardColor:c,starsColor:p,textColor:u},numberOfRows:{mobile:Number(h)||3,desktop:Number(m)||2},transparency:g?Number(g):1,font:zt.includes(o)?o:"default",ratingType:Mt.includes(r)?r:"stars",emojiType:n&&Number(n)||0,solidShadow:w}},[it]:({container:e})=>{const{font:t,ratingType:i,emojiTypeNumber:o,theme:r,contentIndex:n,photoType:a,showMap:s,cardColor:l,starsColor:d,textColor:c,numberOfRowsMobile:p,numberOfRowsDesktop:u,transparency:h,solidShadow:m}=(e=>{const t=e?.getAttribute(Nt),i=e?.getAttribute(Tt);return{font:t,ratingType:i,emojiTypeNumber:e.getAttribute(At),theme:e.getAttribute(st),contentIndex:e.getAttribute(ft),photoType:e.getAttribute("data-photo-type"),showMap:"false"!==e.getAttribute("data-show-map"),cardColor:e.getAttribute(bt)||"",starsColor:e.getAttribute(_t)||"",textColor:e.getAttribute(yt)||"",numberOfRowsMobile:e.getAttribute($t),numberOfRowsDesktop:e.getAttribute(kt),transparency:e.getAttribute(St),solidShadow:"true"===e.getAttribute(It)}})(e),g=Number(p)||4,w=Number(u)||4;return{type:it,theme:r,contentIndex:n?"all"===n?"all":Number(n)-1:0,photoType:a,showMap:s,customColors:{cardColor:l,starsColor:d,textColor:c},numberOfRows:{mobile:Math.max(g,0),desktop:Math.max(w,0)},transparency:h?Number(h):1,font:zt.includes(t)?t:"default",ratingType:Mt.includes(i)?i:"stars",emojiType:o&&Number(o)||0,solidShadow:m}},[nt]:({container:e})=>{const{showReviewPhotos:t,showRating:i,font:o,ratingType:r,emojiTypeNumber:n,theme:a,contentIndex:s,reviewPhotosType:l,writeReviewEnabled:d,fixedReviewsHeight:c,hasShadow:p,cardColor:u,starsColor:h,textColor:m,transparency:g,speed:w,solidShadow:f,variant:v}=(e=>{const t="true"===e.getAttribute(lt),i="true"===e.getAttribute(pt),o=e?.getAttribute(Nt),r=e?.getAttribute(Tt);return{showReviewPhotos:t,showRating:i,font:o,ratingType:r,emojiTypeNumber:e.getAttribute(At),theme:e.getAttribute(st),contentIndex:e.getAttribute(ft),reviewPhotosType:e.getAttribute(xt),writeReviewEnabled:"true"===e.getAttribute(dt),fixedReviewsHeight:"false"!==e.getAttribute(ht),hasShadow:"true"===e.getAttribute(vt),cardColor:e.getAttribute(bt)??"",starsColor:e.getAttribute(_t)??"",textColor:e.getAttribute(yt)??"",transparency:e.getAttribute(St),speed:e.getAttribute("data-speed")??"",solidShadow:"true"===e.getAttribute(It),variant:e.getAttribute(Lt)}})(e);return{type:nt,theme:a,contentIndex:"all"===s?"all":Number(s)-1,reviewPhotosType:l||(t?"large":"none"),writeReviewEnabled:d,fixedReviewsHeight:c,hasShadow:p,customColors:{cardColor:u,starsColor:h,textColor:m},transparency:g?Number(g):1,speed:w,font:zt.includes(o)?o:"default",ratingType:Mt.includes(r)?r:"stars",emojiType:n&&Number(n)||0,solidShadow:f,showRating:i,variant:gu.includes(v)?v:gu[0]}},[ot]:({container:e})=>{const t=(e=>{const t=e?.getAttribute(Nt),i=e?.getAttribute(st),o=e?.getAttribute(ft),r=e?.getAttribute(Tt),n=e?.getAttribute(At),a=e?.getAttribute(Lt);return{font:t,theme:i,contentIndex:o,ratingType:r,emojiTypeNumber:n,variant:a,starsColor:e?.getAttribute(_t)||"",textColor:e?.getAttribute(yt)||"",cardColor:e?.getAttribute(bt)||""}})(e),i=t,{font:o,ratingType:r,theme:n,contentIndex:a,emojiTypeNumber:s,variant:l,starsColor:d,textColor:c,cardColor:p}=i;return{type:ot,theme:n,contentIndex:"all"===a?"all":Number(a)-1,font:zt.includes(o)?o:"default",ratingType:Mt.includes(r)?r:"stars",emojiType:s&&Number(s)||0,variant:l||"multicard",customColors:{starsColor:d,textColor:c,cardColor:p},transparency:1}},wrapper:({container:e})=>({type:"wrapper",horizontal:e.getAttribute("data-position-horizontal"),vertical:e.getAttribute(mt),isSticky:"true"===e.getAttribute(wt)||"parallax"===e.getAttribute(gt)})},Su=e=>{const{container:t,legacy_widget_options:i}=ce(jt);return ku[e]({container:t,legacyOptions:i})};Ie.bind({g:1});const Cu=`.${Ve}`,Nu=(function(){const e=Ee.call({g:1},"div").apply(null,arguments);return function(t){return e(t),null}})`

    ${Cu} * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        line-height: inherit;
        letter-spacing: normal;
    }
    
    ${Cu} svg {
        fill: currentColor;
    }
    
    ${Cu} button {
        border: none;
        background: transparent;
        color: inherit;
        cursor: pointer;
    }

    ${Cu},
    ${Cu} p, 
    ${Cu} h1, 
    ${Cu} h2, 
    ${Cu} ul, 
    ${Cu} ol, 
    ${Cu} dl, 
    ${Cu} h3, 
    ${Cu} h4, 
    ${Cu} h5,
    ${Cu} h6, 
    ${Cu} b, 
    ${Cu} i, 
    ${Cu} span, 
    ${Cu} div, 
    ${Cu} a, 
    ${Cu} input, 
    ${Cu} button,
    ${Cu} img {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        line-height: inherit;
    }

    ${Cu} a:empty, 
    ${Cu} ul:empty, 
    ${Cu} dl:empty, 
    ${Cu} div:empty, 
    ${Cu} section:empty, 
    ${Cu} article:empty, 
    ${Cu} p:empty, 
    ${Cu} h1:empty, 
    ${Cu} h2:empty, 
    ${Cu} h3:empty, 
    ${Cu} h4:empty, 
    ${Cu} h5:empty, 
    ${Cu} h6:empty,
    ${Cu} button:empty {
        display: block;
    }

    ${Cu} a {
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
`,Ru="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap",Tu="#F3F6F9",Au="#DCE0E2",Iu="#9F9F9F",Lu="#404040",zu="#d3d8e7",Mu="#484B53",ju="#989898",Pu="#c2cee2",Eu="#161616",Ou="#111111",Bu="#282828",Du="#ffffff",Hu="#FBB000",Fu="#8a79fa",Uu="#F48120",Vu="#8d38ff",Gu="#197bff",Wu="#D52E63",Zu={compactWidth:270,transition:"all 0.3s ease-in-out",shadow:"0 2px 5px 0 rgba(0,0,0,.26)",media:{mobile:740}},qu={light:{theme:"light",closeStickyIcon:Lu,background:Tu,colorLine:Hu,backgroundArrow:Au,borderArrows:Au,colorArrow:Lu,hoverStarsColor:Hu,colorGoogleBadge:Lu,heartsColor:Wu,solidShadow:Pu,widgets:{carousel:{colorReviewStars:Hu,colorDescription:Lu,colorShowMore:Iu,colorName:Lu,colorTime:Iu,colorSellerName:Lu,colorSellerStars:Hu,colorReviewsCount:Lu,colorLeaveReview:Lu,backgroundLeaveReview:Du,compactReview:{verifiedColor:"#D52E634D",colorName:Lu,colorShowMore:Iu,colorDescription:"#2E2E2E"},dotted:{center:"#747474",default:"#dce0e2",edge:"#dce0e280"}},dual_row_carousel:{colorReviewStars:Hu,colorDescription:Lu,colorShowMore:Iu,colorName:Lu,colorTime:Iu,colorSellerName:Lu,colorSellerStars:Hu,colorReviewsCount:Lu,colorLeaveReview:Lu,backgroundLeaveReview:Du},grid:{colorReviewStars:Hu,colorDescription:Lu,colorShowMore:Iu,colorName:Lu,colorTime:Iu,colorSellerName:Lu,colorSellerStars:Hu,colorReviewsCount:Lu,colorLeaveReview:Lu,backgroundLeaveReview:Du,colorLoadMore:Lu,backgroundLoadMore:Tu},stickySlide:{colorName:Lu,colorReviewStars:Uu,colorSubText:Lu,colorDescription:Lu,colorShowMore:Iu,colorTime:Iu,backgroundModal:Du,background:Du,backgroundHover:Tu,colorLine:Uu},standard:{colorReviewStars:Hu,colorDescription:Lu,colorName:Lu,colorTime:Iu,colorSellerName:Lu,colorSellerStars:Hu,colorReviewsCount:Lu,background:Tu,backgroundBody:Du,colorLeaveReview:Lu,backgroundLeaveReview:Du,scrollThumb:"#DBDBDB",scrollTrack:"#F4F4F4"},compact:{colorSellerName:Lu,colorSellerStars:Uu,colorReviewsCount:Lu,oneLineColor:Lu,background:Du,backgroundHover:Tu,colorLine:Uu,colorReviewStars:Uu,solidShadow:Uu},"trust-bar":{colorReviewsCount:"#2d2d2db3",background:"#F4F4F4",backgroundHover:Tu,colorReviewStars:"#2D2D2D",solidShadow:"#C2CEE2"},inline:{background:"#F4F4F4",colorReviewStars:"#2D2D2D",colorReviewsCount:"#2D2D2Db3",solidShadow:Pu,avatarBorder:Du,avatarText:Du,avatarBackground:"#101827"},locations:{background:Tu,colorReviewStars:Hu,colorName:Lu,colorDescription:Lu,colorRatingText:Iu,colorIcons:Lu,colorTime:Iu,colorReviewsButton:Iu,colorLoadMore:Lu,backgroundLoadMore:Tu,dividerColor:"#e7ebed",scrollThumb:"#e7eaeb",scrollTrack:"#e7ebed30"},gallery:{colorReviewStars:Hu,colorName:Du,modal:{stars:Hu,hearts:Wu},background:"#eaeaea",colorReviewsCount:Lu,colorSellerName:Lu,colorSellerStars:Hu,colorLeaveReview:Lu,backgroundLeaveReview:Du}},summary:{colorReviewStars:Hu,colorDescription:Eu,colorShowMore:Iu,colorName:Bu,noReviewsStarsColor:Iu,colorTime:Iu,colorLogoGradient1:Vu,colorLogoGradient2:Gu,colorLogoText:Du,colorAiIcon:Fu,colorBadge:zu,compact:{colorName:"#2E2E2E",colorShowMore:Iu,colorDescription:"#2E2E2E"}},noReviewsWidget:{colorDescription:Lu,colorName:Lu,colorIcons:Hu,colorLeaveReview:Lu,backgroundLeaveReview:Du},...Zu},dark:{theme:"dark",closeStickyIcon:Du,colorLine:Hu,background:Bu,backgroundArrow:Bu,colorArrow:Du,borderArrows:Lu,hoverStarsColor:Hu,colorGoogleBadge:Du,heartsColor:Wu,solidShadow:Ou,widgets:{carousel:{colorReviewStars:Hu,colorDescription:Du,colorShowMore:Iu,colorName:Du,colorTime:Iu,colorSellerName:Du,colorReviewsCount:Du,colorSellerStars:Hu,colorLeaveReview:Du,backgroundLeaveReview:Eu,compactReview:{verifiedColor:"#D52E634D",colorName:Du,colorShowMore:Iu,colorDescription:Du},dotted:{center:"#DCE0E2",default:"#747474",edge:"#74747480"}},dual_row_carousel:{colorReviewStars:Hu,colorDescription:Du,colorShowMore:Iu,colorName:Du,colorTime:Iu,colorSellerName:Du,colorReviewsCount:Du,colorSellerStars:Hu,colorLeaveReview:Du,backgroundLeaveReview:Eu},grid:{colorReviewStars:Hu,colorDescription:Du,colorShowMore:Iu,colorName:Du,colorTime:Iu,colorSellerName:Du,colorReviewsCount:Du,colorSellerStars:Hu,colorLeaveReview:Du,backgroundLeaveReview:Eu,colorLoadMore:Du,backgroundLoadMore:Bu},standard:{colorReviewStars:Hu,colorDescription:Du,colorName:Du,colorTime:Iu,background:Bu,backgroundBody:Eu,colorSellerName:Du,colorReviewsCount:Du,colorSellerStars:Hu,colorLeaveReview:Du,backgroundLeaveReview:Eu,scrollThumb:"#313030",scrollTrack:"#1F1F1F"},stickySlide:{colorName:Du,colorReviewStars:Uu,colorDescription:Du,colorSubText:Du,colorShowMore:Iu,colorTime:Iu,backgroundModal:Eu,background:Bu,backgroundHover:Eu,colorLine:Uu},"trust-bar":{colorReviewsCount:"#ffffffb3",background:"#1F1F1F",colorReviewStars:Du,backgroundHover:Eu,solidShadow:Ou},compact:{colorSellerName:Du,colorReviewsCount:Du,colorSellerStars:Uu,oneLineColor:Du,background:Bu,backgroundHover:Eu,colorLine:Uu,colorReviewStars:Uu,solidShadow:Uu},inline:{background:"#1F1F1F",colorReviewStars:Du,colorReviewsCount:"#ffffffb3",solidShadow:Pu,avatarBorder:"#1F1F1F",avatarText:Du,avatarBackground:"#101827"},locations:{background:Bu,colorReviewStars:Hu,colorName:Du,colorDescription:Du,colorIcons:Du,colorRatingText:Iu,colorReviewsButton:Iu,colorTime:Iu,colorLoadMore:Du,backgroundLoadMore:Bu,dividerColor:"#313030",scrollThumb:"#313030",scrollTrack:"#1c1c1c30"},gallery:{colorReviewStars:Hu,colorName:Du,modal:{stars:Hu,hearts:Wu},background:"#eaeaea",colorReviewsCount:Du,colorSellerName:Du,colorSellerStars:Hu,colorLeaveReview:Du,backgroundLeaveReview:Eu}},summary:{colorReviewStars:Hu,colorDescription:Du,colorShowMore:Iu,colorName:Du,noReviewsStarsColor:Iu,colorTime:ju,colorLogoGradient1:Vu,colorLogoGradient2:Gu,colorLogoText:Du,colorAiIcon:Fu,colorBadge:Mu,compact:{colorName:Du,colorShowMore:Iu,colorDescription:Du}},noReviewsWidget:{colorDescription:Du,colorName:Du,colorIcons:Hu,colorLeaveReview:Du,backgroundLeaveReview:Eu},...Zu},black:{theme:"black",closeStickyIcon:Du,colorLine:Du,background:Bu,backgroundArrow:Bu,colorArrow:Du,hoverStarsColor:Du,borderArrows:Du,colorGoogleBadge:Du,heartsColor:Du,solidShadow:Ou,widgets:{carousel:{colorReviewStars:Du,colorDescription:Du,colorShowMore:Du,colorName:Du,colorTime:Du,colorSellerName:Du,colorSellerStars:Du,colorReviewsCount:Du,colorLeaveReview:Du,backgroundLeaveReview:Eu,compactReview:{verifiedColor:Du,colorName:Du,colorShowMore:Du,colorDescription:Du},dotted:{center:"white",default:"white",edge:"#ffffff"}},dual_row_carousel:{colorReviewStars:Du,colorDescription:Du,colorShowMore:Du,colorName:Du,colorTime:Du,colorSellerName:Du,colorSellerStars:Du,colorReviewsCount:Du,colorLeaveReview:Du,backgroundLeaveReview:Eu},grid:{colorReviewStars:Du,colorDescription:Du,colorShowMore:Du,colorName:Du,colorTime:Du,colorSellerName:Du,colorSellerStars:Du,colorReviewsCount:Du,colorLeaveReview:Du,backgroundLeaveReview:Eu,colorLoadMore:Du,backgroundLoadMore:Bu},standard:{colorReviewStars:Du,colorDescription:Du,colorName:Du,colorTime:Iu,background:Bu,backgroundBody:Eu,colorSellerName:Du,colorReviewsCount:Du,colorSellerStars:Du,colorLeaveReview:Du,backgroundLeaveReview:Eu,scrollThumb:"#313030",scrollTrack:"#1F1F1F"},stickySlide:{colorName:Du,colorDescription:Du,colorReviewStars:Du,colorSubText:Du,colorShowMore:Du,colorTime:Iu,backgroundModal:Eu,background:Bu,backgroundHover:Eu,colorLine:Du},"trust-bar":{colorReviewsCount:"#ffffffaf",background:Bu,colorReviewStars:Du,backgroundHover:Eu,solidShadow:Ou},compact:{colorSellerName:Du,colorReviewsCount:Du,colorSellerStars:Du,oneLineColor:Du,background:Bu,backgroundHover:Eu,colorLine:Du,colorReviewStars:Eu,solidShadow:Ou},inline:{background:"#1F1F1F",colorReviewStars:Du,colorReviewsCount:Du,solidShadow:Pu,avatarBackground:Du,avatarText:"#1F1F1F",avatarBorder:"#1F1F1F"},locations:{background:Bu,colorReviewStars:Du,colorName:Du,colorDescription:Du,colorIcons:Du,colorRatingText:Du,colorReviewsButton:Du,colorTime:Du,colorLoadMore:Du,backgroundLoadMore:Bu,dividerColor:"#313030",scrollThumb:"#313030",scrollTrack:"#1c1c1c30"},gallery:{colorReviewStars:Du,colorName:Du,modal:{stars:Du,hearts:Du},background:"#eaeaea",colorReviewsCount:Du,colorSellerName:Du,colorSellerStars:Du,colorLeaveReview:Du,backgroundLeaveReview:Eu}},summary:{colorReviewStars:Du,colorDescription:Du,colorShowMore:Du,colorName:Bu,noReviewsStarsColor:Iu,colorTime:Du,colorLogoGradient1:Du,colorLogoGradient2:Du,colorLogoText:"#000000",colorAiIcon:Du,colorBadge:Du,compact:{colorName:"#2E2E2E",colorShowMore:Du,colorDescription:Du}},noReviewsWidget:{colorDescription:Du,colorName:Du,colorIcons:Du,colorLeaveReview:Du,backgroundLeaveReview:Eu},...Zu},custom:{theme:"custom",closeStickyIcon:Lu,background:Tu,colorLine:Hu,backgroundArrow:Au,colorArrow:Lu,hoverStarsColor:Hu,borderArrows:Au,colorGoogleBadge:Lu,heartsColor:Wu,solidShadow:Pu,widgets:{carousel:{colorReviewStars:Hu,colorDescription:Lu,colorShowMore:Iu,colorName:Lu,colorTime:Iu,colorSellerName:Lu,colorSellerStars:Hu,colorReviewsCount:Lu,colorLeaveReview:Lu,backgroundLeaveReview:Du,compactReview:{verifiedColor:"#D52E634D",colorName:"#2E2E2E",colorShowMore:Iu,colorDescription:"#2E2E2E"},dotted:{center:"#747474",default:"#dce0e2",edge:"#dce0e280"}},dual_row_carousel:{colorReviewStars:Hu,colorDescription:Lu,colorShowMore:Iu,colorName:Lu,colorTime:Iu,colorSellerName:Lu,colorSellerStars:Hu,colorReviewsCount:Lu,colorLeaveReview:Lu,backgroundLeaveReview:Du},grid:{colorReviewStars:Hu,colorDescription:Lu,colorShowMore:Iu,colorName:Lu,colorTime:Iu,colorSellerName:Lu,colorSellerStars:Hu,colorReviewsCount:Lu,colorLeaveReview:Lu,backgroundLeaveReview:Du,colorLoadMore:Lu,backgroundLoadMore:Tu},stickySlide:{colorName:Lu,colorReviewStars:Uu,colorDescription:Lu,colorSubText:Lu,colorShowMore:Iu,colorTime:Iu,backgroundModal:Du,background:Du,backgroundHover:Du,colorLine:Uu},standard:{colorReviewStars:Hu,colorDescription:Lu,colorName:Lu,colorTime:Iu,colorSellerName:Lu,colorSellerStars:Hu,colorReviewsCount:Lu,background:Tu,backgroundBody:Du,colorLeaveReview:Lu,backgroundLeaveReview:Du,scrollThumb:"#DBDBDB",scrollTrack:"#F4F4F4"},compact:{colorSellerName:Lu,colorSellerStars:Uu,colorReviewsCount:Lu,oneLineColor:Lu,background:Du,backgroundHover:Du,colorLine:Uu,colorReviewStars:Uu,solidShadow:Uu},"trust-bar":{colorReviewsCount:Lu,background:Du,backgroundHover:Du,colorReviewStars:Uu,solidShadow:"#C2CEE2"},inline:{background:"#F4F4F4",colorReviewStars:"#2D2D2D",colorReviewsCount:"#2D2D2Db3",solidShadow:Pu,avatarBorder:Du,avatarText:Du,avatarBackground:"#101827"},locations:{background:Tu,colorReviewStars:Hu,colorName:Lu,colorDescription:Lu,colorRatingText:Iu,colorIcons:Lu,colorReviewsButton:Iu,colorTime:Du,colorLoadMore:Du,backgroundLoadMore:Bu,dividerColor:"#e7ebed",scrollThumb:"#e7eaEeb",scrollTrack:"#e7ebed30"},gallery:{colorReviewStars:Hu,colorName:Du,modal:{stars:Hu,hearts:Wu},background:"#eaeaea",colorReviewsCount:Lu,colorSellerName:Lu,colorSellerStars:Hu,colorLeaveReview:Lu,backgroundLeaveReview:Du}},summary:{colorReviewStars:Hu,colorDescription:Eu,colorShowMore:"#9F9F9F",colorName:Bu,noReviewsStarsColor:Iu,colorTime:"#9F9F9F",colorLogoGradient1:Vu,colorLogoGradient2:Gu,colorLogoText:Du,colorAiIcon:Fu,colorBadge:zu,compact:{colorName:"#2E2E2E",colorShowMore:Iu,colorDescription:"#2E2E2E"}},noReviewsWidget:{colorDescription:Lu,colorName:Lu,colorIcons:Hu,colorLeaveReview:Lu,backgroundLeaveReview:Du},...Zu}},Ku=F(qu.light);var Xu,Yu,Ju,Qu;Xu=v,Yu=()=>ce(Ku),Ju=e=>{for(let t in e)"$"===t[0]&&delete e[t]},Qu=`.${Ve}`,Ce.p=void 0,Ce.s=Qu,Le=Xu,ze=Yu,Me=Ju;const eh=({children:e})=>{const{data:t,type:i}=ce(jt),{theme:o,contentIndex:r,customColors:n,transparency:a,font:s}=Su(i),{url:l}=Pt({contentIndex:r,business:t?.business}),d=qu[o],c=(e=>"theme"===e?window.getComputedStyle(document.querySelector("body")).getPropertyValue("font-family")||"inherit":"Manrope, sans-serif")(s);"custom"===d.theme&&((e,t)=>{De(e,t)})(d,n),null!=a&&1!==a&&((e,t)=>{Ue(e,t)})(d,a),d.hasLink=!!l,d.fontFamily=c,d.isGoogleFont="default"===s;const p=le(()=>document.reputon_global_styles_added,[]);return document.reputon_global_styles_added=!0,p||(({enabled:e})=>{if(!e)return;if(document.querySelector(`link[href="${Ru}"]`))return;const t=document.createElement("link");t.rel="stylesheet",t.href=Ru,document.head.appendChild(t)})({enabled:d.isGoogleFont}),V(Ku.Provider,{value:d,children:[!p&&V(Nu,{}),e]})},th=({WidgetComponent:e,container:t,type:i})=>{const[o,r]=ne(),n=`widget-id${Math.floor(1e5*Math.random())}`,a=Gi();return t.setAttribute("initialized",""),ae(()=>{(()=>{if(!Shopify?.shop)return Promise.resolve(void 0);const e=window.reputon_preview_token||"";return e.length>0?(e=>{const t=window.reputon_preview_params||"",i=t.length>0?`?${t}`:"";return fetch(`${xe}/app/api/widget/preview${i}`,{headers:{Authorization:`Bearer ${e}`,"X-Myshopify-Domain":Shopify.shop}}).then(e=>e.ok?e.json():void 0)})(e):(()=>{const e=Shopify?.locale?ye(Shopify?.locale):"",t=window.reputon_widget_google_content_response,i=e||"__default__";if(t&&i in t)return t[i];const o=Shopify.designMode?"&nocache=1":"",r=e?`&lang=${encodeURIComponent(e)}`:"",n=fetch(`${xe}/app/storefront/widget?shop=${Shopify.shop}${r}${o}`).then(e=>e.ok?e.json():void 0);return window.reputon_widget_google_content_response||(window.reputon_widget_google_content_response={}),window.reputon_widget_google_content_response[i]=n,n})()})().then(e=>{if(!e)return;const t=function({data:e,locale:t="en",localeFromBackend:i}){return{...e,business:e.business.map(e=>({...e,reviews:e.reviews.map(e=>({...e,relativeTimeDescription:ve({timestamp:e.time,locale:t,localeFromBackend:i})}))}))}}({data:e,locale:a,localeFromBackend:e.language});r(t)})},[]),o?.customCSS&&!document.reputon_custom_css_styles_added&&((e=>{const t=document.createElement("style");t.setAttribute("reputon-custom-css",""),t.append(e),document.querySelector("head").append(t)})(o?.customCSS),document.reputon_custom_css_styles_added=!0),o&&V(jt.Provider,{value:{data:o,container:t,type:i,widgetId:n},children:V(eh,{children:V(Zi,{defaultLocale:o?.language,children:V(e,{})})})})};(({widget_name:e,widgets:t})=>{const i=()=>{Object.keys(t).map(i=>{document.querySelectorAll(`body .${e}[data-type=${i}]`).forEach(e=>{e.hasAttribute("initialized")||((e=>{const t=e?.parentElement;t&&(t.style.alignSelf="normal")})(e),H(V(th,{WidgetComponent:t[i],type:i,container:e}),e))})})};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",()=>{i()}):i()})({widget_name:Ve,widgets:{[rt]:Fp,[Je]:Fp}})}();

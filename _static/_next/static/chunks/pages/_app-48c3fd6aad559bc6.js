(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3830)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,l=r(7273).Z,o=n(r(7294)),c=r(1003),a=r(7795),s=r(4465),i=r(2692),u=r(8245),f=r(9246),d=r(227),p=r(3468);let h=new Set;function v(e,t,r,n){if(c.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let l=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,o=t+"%"+r+"%"+l;if(h.has(o))return;h.add(o)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function x(e){return"string"==typeof e?e:a.formatUrl(e)}let m=o.default.forwardRef(function(e,t){let r,n;let{href:a,as:h,children:m,prefetch:y,passHref:j,replace:b,shallow:g,scroll:w,locale:_,onClick:k,onMouseEnter:C,onTouchStart:N,legacyBehavior:O=!1}=e,E=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=m,O&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let M=!1!==y,P=o.default.useContext(i.RouterContext),L=o.default.useContext(u.AppRouterContext),z=null!=P?P:L,S=!P,{href:T,as:I}=o.default.useMemo(()=>{if(!P){let e=x(a);return{href:e,as:h?x(h):e}}let[e,t]=c.resolveHref(P,a,!0);return{href:e,as:h?c.resolveHref(P,h):t||e}},[P,a,h]),R=o.default.useRef(T),H=o.default.useRef(I);O&&(n=o.default.Children.only(r));let B=O?n&&"object"==typeof n&&n.ref:t,[D,K,U]=f.useIntersection({rootMargin:"200px"}),A=o.default.useCallback(e=>{(H.current!==I||R.current!==T)&&(U(),H.current=I,R.current=T),D(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[I,B,T,U,D]);o.default.useEffect(()=>{z&&K&&M&&v(z,T,I,{locale:_})},[I,T,K,_,M,null==P?void 0:P.locale,z]);let X={ref:A,onClick(e){O||"function"!=typeof k||k(e),O&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),z&&!e.defaultPrevented&&function(e,t,r,n,l,a,s,i,u,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c.isLocalURL(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:a,locale:i,scroll:s}):t[l?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};u?o.default.startTransition(h):h()}(e,z,T,I,b,g,w,_,S,M)},onMouseEnter(e){O||"function"!=typeof C||C(e),O&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),z&&(M||!S)&&v(z,T,I,{locale:_,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){O||"function"!=typeof N||N(e),O&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),z&&(M||!S)&&v(z,T,I,{locale:_,priority:!0,bypassPrefetchedCheck:!0})}};if(!O||j||"a"===n.type&&!("href"in n.props)){let e=void 0!==_?_:null==P?void 0:P.locale,t=(null==P?void 0:P.isLocaleDomain)&&d.getDomainLocale(I,e,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);X.href=t||p.addBasePath(s.addLocale(I,e,null==P?void 0:P.defaultLocale))}return O?o.default.cloneElement(n,X):o.default.createElement("a",Object.assign({},E,X),r)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:s}=e,i=s||!o,[u,f]=n.useState(!1),d=n.useRef(null),p=n.useCallback(e=>{d.current=e},[]);n.useEffect(()=>{if(o){if(i||u)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:l,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=c.get(n)))return t;let l=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:o,elements:l},a.push(r),c.set(r,t),t}(r);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),c.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!u){let e=l.requestIdleCallback(()=>f(!0));return()=>l.cancelIdleCallback(e)}},[i,r,t,u,d.current]);let h=n.useCallback(()=>{f(!1)},[]);return[p,u,h]};var n=r(7294),l=r(4686);let o="function"==typeof IntersectionObserver,c=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3830:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),l=r(1664),o=r.n(l),c=r(7294),a=r(8357);function s(e){return(0,a.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]})(e)}function i(e){return(0,a.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]})(e)}let u=()=>{let[e,t]=(0,c.useState)(!1),[r,l]=(0,c.useState)("transparent"),[a,u]=(0,c.useState)("white"),f=()=>{t(!e)};return(0,c.useEffect)(()=>{let e=()=>{window.scrollY>=90?(l("#ffffff"),u("#000000")):(l("transparent"),u("#ffffff"))};window.addEventListener("scroll",e)},[]),(0,n.jsx)("div",{style:{backgroundColor:"".concat(r)},className:"fixed left-0 top-0 w-full z-10 ease-in duration-300",children:(0,n.jsxs)("div",{className:"max-w-[1240px] m-auto flex justify-between items-center p-4 text-white",children:[(0,n.jsx)(o(),{href:"/",children:(0,n.jsx)("h1",{style:{color:"".concat(a)},className:"font-bold text-4xl",children:"فتوشات"})}),(0,n.jsxs)("ul",{style:{color:"".concat(a)},className:"hidden sm:flex items-center",children:[(0,n.jsx)("li",{className:"p-4",children:(0,n.jsx)(o(),{href:"/#home",scroll:!1,children:"خانه"})}),(0,n.jsx)("li",{className:"p-4",children:(0,n.jsx)(o(),{href:"/#gallery",scroll:!1,children:"گالری"})}),(0,n.jsx)("li",{className:"p-4",children:(0,n.jsx)(o(),{href:"/work/#works",scroll:!1,children:"کار های من"})}),(0,n.jsx)("li",{className:"p-4",children:(0,n.jsx)(o(),{href:"/contact/#contactus",scroll:!1,children:"ارتباط با من"})})]}),(0,n.jsx)("div",{onClick:f,className:"sm:hidden block z-10",children:e?(0,n.jsx)(s,{size:20}):(0,n.jsx)(i,{style:{color:"".concat(a)},size:20})}),(0,n.jsx)("div",{className:e?"sm:hidden absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300":"sm:hidden absolute top-0 bottom-0 left-0 right-[-100%] flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{onClick:f,className:"p-4 text-4xl hover:text-gray-500",children:(0,n.jsx)(o(),{href:"/#home",scroll:!1,children:"خانه"})}),(0,n.jsx)("li",{onClick:f,className:"p-4 text-4xl hover:text-gray-500",children:(0,n.jsx)(o(),{href:"/#gallery",scroll:!1,children:"گالری"})}),(0,n.jsx)("li",{onClick:f,className:"p-4 text-4xl hover:text-gray-500",children:(0,n.jsx)(o(),{href:"/work/#works",scroll:!1,children:"کار های من"})}),(0,n.jsx)("li",{onClick:f,className:"p-4 text-4xl hover:text-gray-500",children:(0,n.jsx)(o(),{href:"/contact/#contactus",scroll:!1,children:"ارتباط با من"})})]})})]})})};function f(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"font-iranYekan",dir:"rtl",children:[(0,n.jsx)(u,{}),(0,n.jsx)(t,{...r})]})})}r(4744)},4744:function(){},1664:function(e,t,r){e.exports=r(1551)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(l),c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};function s(e){return function(t){return n.createElement(i,c({attr:c({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,c({key:r},t.attr),e(t.child))})}(e.child))}}function i(e){var t=function(t){var r,l=e.attr,o=e.size,s=e.title,i=a(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,i,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==o?n.createElement(o.Consumer,null,function(e){return t(e)}):t(l)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);
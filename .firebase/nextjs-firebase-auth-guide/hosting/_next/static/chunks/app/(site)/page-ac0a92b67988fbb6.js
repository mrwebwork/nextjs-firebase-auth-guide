(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[502],{8555:function(e,t,r){Promise.resolve().then(r.bind(r,704))},704:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var a=r(9268),s=r(6006),i=r(8919),o=r(1404),n=r(4734);let l=(0,n.v0)(o.Z);async function c(e,t){let r=null,a=null;try{r=await (0,n.Xb)(l,e,t)}catch(e){//! Handle errors here
a=e}return{result:r,error:a}}var d=r(5846),u=r.n(d),p=r(6008),f=r(8847);//! Add `use client` to prevent this page from being server side rendered
function m(){let[e,t]=(0,s.useState)(""),[r,o]=(0,s.useState)(""),n=(0,p.useRouter)(),l=async t=>{t.preventDefault();let{result:a,error:s}=await c(e,r);return s?(i.toast.error("Sign up failed, please try again!"),console.log(s)):(console.log(a),i.toast.success("Sign up successful!"),n.push("/admin"))};return(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsxs)("div",{className:"form-wrapper flex flex-col",children:[(0,a.jsx)("div",{className:"py-10",children:(0,a.jsx)("h1",{className:"text-4xl lg:text-5xl text-center font-bold px-2",children:"Sign Up to Firebase Registration Tutorial"})}),(0,a.jsx)(f.Z,{label:"Email",type:"email",id:"email",value:e,setValue:t}),(0,a.jsx)(f.Z,{label:"Password",type:"password",id:"password",value:r,setValue:o}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("button",{className:"btn",onClick:l,type:"submit",children:"Register"}),(0,a.jsx)(u(),{className:"btn-2",href:"/signin",children:"Login to Account"})]})]})})}},8847:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var a=r(9268);function s(e){let{label:t,type:r,id:s,value:i,setValue:o}=e;return(0,a.jsx)("div",{className:"pb-5 flex flex-col items-center",children:(0,a.jsxs)("label",{htmlFor:s,children:[(0,a.jsx)("p",{children:t}),(0,a.jsx)("input",{className:" text-black  h-10  ps-5  px-5 rounded-lg  text-lg  ring-2 ring-inset ring-purple-200 focus:ring-4 focus:ring-purple-300 outline-none bg-gray-100 leading-6 cursor-pointer ",onChange:e=>o(e.target.value),required:!0,value:i,type:r,name:s,id:s,placeholder:"email"===s?"example@email.com":"password"})]})})}r(6006)},1404:function(e,t,r){"use strict";var a=r(1313);let s=0===(0,a.C6)().length?(0,a.ZF)({apiKey:"AIzaSyD2EWtr5Z5r4UGTdsYniJ9mF29zQ8JdCSc",authDomain:"nextjs-firebase-auth-guide.firebaseapp.com",projectId:"nextjs-firebase-auth-guide",storageBucket:"nextjs-firebase-auth-guide.appspot.com",messagingSenderId:"837371036457",appId:"1:837371036457:web:a64322d2d4593578eb6d38",measurementId:"G-GZTMVEDLPP"}):(0,a.C6)()[0];t.Z=s},8919:function(e,t,r){"use strict";let a,s;r.r(t),r.d(t,{CheckmarkIcon:function(){return V},ErrorIcon:function(){return R},LoaderIcon:function(){return U},ToastBar:function(){return ee},ToastIcon:function(){return J},Toaster:function(){return es},default:function(){return ei},resolveValue:function(){return k},toast:function(){return _},useToaster:function(){return H},useToasterStore:function(){return A}});var i,o=r(6006);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",a="",s="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+o+";":a+="f"==i[1]?p(o,i):i+"{"+p(o,"k"==i[1]?"":t)+"}":"object"==typeof o?a+=p(o,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=p.p?p.p(i,o):i+":"+o+";")}return r+(t&&s?t+"{"+s+"}":s)+a},f={},m=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+m(e[r]);return t}return e},g=(e,t,r,a,s)=>{var i;let o=m(e),n=f[o]||(f[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!f[n]){let t=o!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);f[n]=p(s?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&f.g?f.g:null;return r&&(f.g=f[n]),i=f[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),n},h=(e,t,r)=>e.reduce((e,a,s)=>{let i=t[s];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"");function b(e){let t=this||{},r=e.call?e(t.p):e;return g(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}b.bind({g:1});let y,x,v,w=b.bind({k:1});function E(e,t){let r=this||{};return function(){let a=arguments;function s(i,o){let n=Object.assign({},i),l=n.className||s.className;r.p=Object.assign({theme:x&&x()},n),r.o=/ *go\d+/.test(l),n.className=b.apply(r,a)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),y(c,n)}return t?t(s):s}}var j=e=>"function"==typeof e,k=(e,t)=>j(e)?e(t):e,N=(a=0,()=>(++a).toString()),C=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},$=new Map,I=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),z({type:4,toastId:e})},1e3);$.set(e,t)},O=e=>{let t=$.get(e);t&&clearTimeout(t)},T=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&O(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?T(e,{type:1,toast:r}):T(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?I(a):e.toasts.forEach(e=>{I(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},D=[],S={toasts:[],pausedAt:void 0},z=e=>{S=T(S,e),D.forEach(e=>{e(S)})},P={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},A=(e={})=>{let[t,r]=(0,o.useState)(S);(0,o.useEffect)(()=>(D.push(r),()=>{let e=D.indexOf(r);e>-1&&D.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||P[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},F=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||N()}),Z=e=>(t,r)=>{let a=F(t,e,r);return z({type:2,toast:a}),a.id},_=(e,t)=>Z("blank")(e,t);_.error=Z("error"),_.success=Z("success"),_.loading=Z("loading"),_.custom=Z("custom"),_.dismiss=e=>{z({type:3,toastId:e})},_.remove=e=>z({type:4,toastId:e}),_.promise=(e,t,r)=>{let a=_.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(_.success(k(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{_.error(k(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var L=(e,t)=>{z({type:1,toast:{id:e,height:t}})},M=()=>{z({type:5,time:Date.now()})},H=e=>{let{toasts:t,pausedAt:r}=A(e);(0,o.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&_.dismiss(t.id);return}return setTimeout(()=>_.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,o.useCallback)(()=>{r&&z({type:6,time:Date.now()})},[r]),s=(0,o.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:s=8,defaultPosition:i}=r||{},o=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[t]);return{toasts:t,handlers:{updateHeight:L,startPause:M,endPause:a,calculateOffset:s}}},R=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,U=E("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,V=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=E("div")`
  position: absolute;
`,G=E("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=E("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?o.createElement(q,null,t):t:"blank"===r?null:o.createElement(G,null,o.createElement(U,{...a}),"loading"!==r&&o.createElement(B,null,"error"===r?o.createElement(R,{...a}):o.createElement(V,{...a})))},Y=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,K=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,Q=E("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,W=E("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let r=e.includes("top")?1:-1,[a,s]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Y(r),K(r)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=o.memo(({toast:e,position:t,style:r,children:a})=>{let s=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(J,{toast:e}),n=o.createElement(W,{...e.ariaProps},k(e.message,e));return o.createElement(Q,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof a?a({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});i=o.createElement,p.p=void 0,y=i,x=void 0,v=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:a,children:s})=>{let i=o.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return o.createElement("div",{ref:i,className:t,style:r},s)},er=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ea=b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,es=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:s,containerStyle:i,containerClassName:n})=>{let{toasts:l,handlers:c}=H(r);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let i=r.position||t,n=er(i,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return o.createElement(et,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?ea:"",style:n},"custom"===r.type?k(r.message,r):s?s(r):o.createElement(ee,{toast:r,position:i}))}))},ei=_}},function(e){e.O(0,[271,206,487,253,698,744],function(){return e(e.s=8555)}),_N_E=e.O()}]);
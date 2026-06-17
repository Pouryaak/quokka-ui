import{r as e}from"./iframe-B0LassJS.js";import{j as m,r as Me}from"./index-8YRTKl2Q.js";import{u as Le,c as P}from"./index-H1f7Wu5C.js";import{u as ve,P as I,d as Oe}from"./index-BeiLhXI-.js";import{c as qe}from"./index-BoPS-2UZ.js";import{c as Ve}from"./index-_266PJnF.js";import{B as je,R as We,P as Ue}from"./index-cRNFonA6.js";import{P as Ke}from"./index-DLF47qJP.js";import{u as $}from"./index-VGe-NDq1.js";import{u as He}from"./index-Cs0riu9_.js";import{a as fe}from"./index-BvQZ75vD.js";import{c as Be}from"./clsx-B-dksMZM.js";import{t as ze}from"./bundle-mjs-Ct12j0u0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CzFWJezh.js";var se="ToastProvider",[ae,Ye,$e]=qe("Toast"),[ge]=Ve("Toast",[$e]),[Qe,Q]=ge(se),be=t=>{const{__scopeToast:r,label:n="Notification",duration:o=5e3,swipeDirection:a="right",swipeThreshold:p=50,announcerContainer:u,children:g}=t,[b,i]=e.useState(null),[T,w]=e.useState(0),N=e.useRef(!1),S=e.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${se}\`. Expected non-empty \`string\`.`),m.jsx(ae.Provider,{scope:r,children:m.jsx(Qe,{scope:r,label:n,duration:o,swipeDirection:a,swipeThreshold:p,toastCount:T,viewport:b,onViewportChange:i,onToastAdd:e.useCallback(()=>w(E=>E+1),[]),onToastRemove:e.useCallback(()=>w(E=>E-1),[]),isFocusedToastEscapeKeyDownRef:N,isClosePausedRef:S,announcerContainer:u,children:g})})};be.displayName=se;var we="ToastViewport",Xe=["F8"],J="toast.viewportPause",ee="toast.viewportResume",he=e.forwardRef((t,r)=>{const{__scopeToast:n,hotkey:o=Xe,label:a="Notifications ({hotkey})",...p}=t,u=Q(we,n),g=Ye(n),b=e.useRef(null),i=e.useRef(null),T=e.useRef(null),w=e.useRef(null),N=ve(r,w,u.onViewportChange),S=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),E=u.toastCount>0;e.useEffect(()=>{const s=v=>{o.length!==0&&o.every(f=>v[f]||v.code===f)&&w.current?.focus()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[o]),e.useEffect(()=>{const s=b.current,v=w.current;if(E&&s&&v){const d=()=>{if(!u.isClosePausedRef.current){const h=new CustomEvent(J);v.dispatchEvent(h),u.isClosePausedRef.current=!0}},f=()=>{if(u.isClosePausedRef.current){const h=new CustomEvent(ee);v.dispatchEvent(h),u.isClosePausedRef.current=!1}},x=h=>{!s.contains(h.relatedTarget)&&f()},y=()=>{s.contains(document.activeElement)||f()};return s.addEventListener("focusin",d),s.addEventListener("focusout",x),s.addEventListener("pointermove",d),s.addEventListener("pointerleave",y),window.addEventListener("blur",d),window.addEventListener("focus",f),()=>{s.removeEventListener("focusin",d),s.removeEventListener("focusout",x),s.removeEventListener("pointermove",d),s.removeEventListener("pointerleave",y),window.removeEventListener("blur",d),window.removeEventListener("focus",f)}}},[E,u.isClosePausedRef]);const l=e.useCallback(({tabbingDirection:s})=>{const d=g().map(f=>{const x=f.ref.current,y=[x,...lt(x)];return s==="forwards"?y:y.reverse()});return(s==="forwards"?d.reverse():d).flat()},[g]);return e.useEffect(()=>{const s=w.current;if(s){const v=d=>{const f=d.altKey||d.ctrlKey||d.metaKey;if(d.key==="Tab"&&!f){const y=document.activeElement,h=d.shiftKey;if(d.target===s&&h){i.current?.focus();return}const D=l({tabbingDirection:h?"backwards":"forwards"}),q=D.findIndex(A=>A===y);G(D.slice(q+1))?d.preventDefault():h?i.current?.focus():T.current?.focus()}};return s.addEventListener("keydown",v),()=>s.removeEventListener("keydown",v)}},[g,l]),m.jsxs(je,{ref:b,role:"region","aria-label":a.replace("{hotkey}",S),tabIndex:-1,style:{pointerEvents:E?void 0:"none"},children:[E&&m.jsx(te,{ref:i,onFocusFromOutsideViewport:()=>{const s=l({tabbingDirection:"forwards"});G(s)}}),m.jsx(ae.Slot,{scope:n,children:m.jsx(I.ol,{tabIndex:-1,...p,ref:N})}),E&&m.jsx(te,{ref:T,onFocusFromOutsideViewport:()=>{const s=l({tabbingDirection:"backwards"});G(s)}})]})});he.displayName=we;var Te="ToastFocusProxy",te=e.forwardRef((t,r)=>{const{__scopeToast:n,onFocusFromOutsideViewport:o,...a}=t,p=Q(Te,n);return m.jsx(fe,{tabIndex:0,...a,ref:r,style:{position:"fixed"},onFocus:u=>{const g=u.relatedTarget;!p.viewport?.contains(g)&&o()}})});te.displayName=Te;var L="Toast",Ze="toast.swipeStart",Ge="toast.swipeMove",Je="toast.swipeCancel",et="toast.swipeEnd",xe=e.forwardRef((t,r)=>{const{forceMount:n,open:o,defaultOpen:a,onOpenChange:p,...u}=t,[g,b]=Le({prop:o,defaultProp:a??!0,onChange:p,caller:L});return m.jsx(Ke,{present:n||g,children:m.jsx(ot,{open:g,...u,ref:r,onClose:()=>b(!1),onPause:$(t.onPause),onResume:$(t.onResume),onSwipeStart:P(t.onSwipeStart,i=>{i.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:P(t.onSwipeMove,i=>{const{x:T,y:w}=i.detail.delta;i.currentTarget.setAttribute("data-swipe","move"),i.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${T}px`),i.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${w}px`)}),onSwipeCancel:P(t.onSwipeCancel,i=>{i.currentTarget.setAttribute("data-swipe","cancel"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),i.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),i.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:P(t.onSwipeEnd,i=>{const{x:T,y:w}=i.detail.delta;i.currentTarget.setAttribute("data-swipe","end"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),i.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${T}px`),i.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${w}px`),b(!1)})})})});xe.displayName=L;var[tt,rt]=ge(L,{onClose(){}}),ot=e.forwardRef((t,r)=>{const{__scopeToast:n,type:o="foreground",duration:a,open:p,onClose:u,onEscapeKeyDown:g,onPause:b,onResume:i,onSwipeStart:T,onSwipeMove:w,onSwipeCancel:N,onSwipeEnd:S,...E}=t,l=Q(L,n),[s,v]=e.useState(null),d=ve(r,c=>v(c)),f=e.useRef(null),x=e.useRef(null),y=a||l.duration,h=e.useRef(0),_=e.useRef(y),O=e.useRef(0),{onToastAdd:D,onToastRemove:q}=l,A=$(()=>{s?.contains(document.activeElement)&&l.viewport?.focus(),u()}),V=e.useCallback(c=>{!c||c===1/0||(window.clearTimeout(O.current),h.current=new Date().getTime(),O.current=window.setTimeout(A,c))},[A]);e.useEffect(()=>{const c=l.viewport;if(c){const k=()=>{V(_.current),i?.()},R=()=>{const F=new Date().getTime()-h.current;_.current=_.current-F,window.clearTimeout(O.current),b?.()};return c.addEventListener(J,R),c.addEventListener(ee,k),()=>{c.removeEventListener(J,R),c.removeEventListener(ee,k)}}},[l.viewport,y,b,i,V]),e.useEffect(()=>{p&&!l.isClosePausedRef.current&&V(y)},[p,y,l.isClosePausedRef,V]),e.useEffect(()=>(D(),()=>q()),[D,q]);const de=e.useMemo(()=>s?Re(s):null,[s]);return l.viewport?m.jsxs(m.Fragment,{children:[de&&m.jsx(nt,{__scopeToast:n,role:"status","aria-live":o==="foreground"?"assertive":"polite",children:de}),m.jsx(tt,{scope:n,onClose:A,children:Me.createPortal(m.jsx(ae.ItemSlot,{scope:n,children:m.jsx(We,{asChild:!0,onEscapeKeyDown:P(g,()=>{l.isFocusedToastEscapeKeyDownRef.current||A(),l.isFocusedToastEscapeKeyDownRef.current=!1}),children:m.jsx(I.li,{tabIndex:0,"data-state":p?"open":"closed","data-swipe-direction":l.swipeDirection,...E,ref:d,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:P(t.onKeyDown,c=>{c.key==="Escape"&&(g?.(c.nativeEvent),c.nativeEvent.defaultPrevented||(l.isFocusedToastEscapeKeyDownRef.current=!0,A()))}),onPointerDown:P(t.onPointerDown,c=>{c.button===0&&(f.current={x:c.clientX,y:c.clientY})}),onPointerMove:P(t.onPointerMove,c=>{if(!f.current)return;const k=c.clientX-f.current.x,R=c.clientY-f.current.y,F=!!x.current,M=["left","right"].includes(l.swipeDirection),j=["left","up"].includes(l.swipeDirection)?Math.min:Math.max,De=M?j(0,k):0,Fe=M?0:j(0,R),Z=c.pointerType==="touch"?10:2,W={x:De,y:Fe},ue={originalEvent:c,delta:W};F?(x.current=W,U(Ge,w,ue,{discrete:!1})):me(W,l.swipeDirection,Z)?(x.current=W,U(Ze,T,ue,{discrete:!1}),c.target.setPointerCapture(c.pointerId)):(Math.abs(k)>Z||Math.abs(R)>Z)&&(f.current=null)}),onPointerUp:P(t.onPointerUp,c=>{const k=x.current,R=c.target;if(R.hasPointerCapture(c.pointerId)&&R.releasePointerCapture(c.pointerId),x.current=null,f.current=null,k){const F=c.currentTarget,M={originalEvent:c,delta:k};me(k,l.swipeDirection,l.swipeThreshold)?U(et,S,M,{discrete:!0}):U(Je,N,M,{discrete:!0}),F.addEventListener("click",j=>j.preventDefault(),{once:!0})}})})})}),l.viewport)})]}):null}),nt=t=>{const{__scopeToast:r,children:n,...o}=t,a=Q(L,r),[p,u]=e.useState(!1),[g,b]=e.useState(!1);return it(()=>u(!0)),e.useEffect(()=>{const i=window.setTimeout(()=>b(!0),1e3);return()=>window.clearTimeout(i)},[]),g?null:m.jsx(Ue,{asChild:!0,container:a.announcerContainer||void 0,children:m.jsx(fe,{...o,children:p&&m.jsxs(m.Fragment,{children:[a.label," ",n]})})})},st="ToastTitle",ye=e.forwardRef((t,r)=>{const{__scopeToast:n,...o}=t;return m.jsx(I.div,{...o,ref:r})});ye.displayName=st;var at="ToastDescription",Ee=e.forwardRef((t,r)=>{const{__scopeToast:n,...o}=t;return m.jsx(I.div,{...o,ref:r})});Ee.displayName=at;var Ce="ToastAction",Pe=e.forwardRef((t,r)=>{const{altText:n,...o}=t;return n.trim()?m.jsx(Ne,{altText:n,asChild:!0,children:m.jsx(ie,{...o,ref:r})}):(console.error(`Invalid prop \`altText\` supplied to \`${Ce}\`. Expected non-empty \`string\`.`),null)});Pe.displayName=Ce;var ke="ToastClose",ie=e.forwardRef((t,r)=>{const{__scopeToast:n,...o}=t,a=rt(ke,n);return m.jsx(Ne,{asChild:!0,children:m.jsx(I.button,{type:"button",...o,ref:r,onClick:P(t.onClick,a.onClose)})})});ie.displayName=ke;var Ne=e.forwardRef((t,r)=>{const{__scopeToast:n,altText:o,...a}=t;return m.jsx(I.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":o||void 0,...a,ref:r})});function Re(t){const r=[];return Array.from(t.childNodes).forEach(o=>{if(o.nodeType===o.TEXT_NODE&&o.textContent&&r.push(o.textContent),ct(o)){const a=o.ariaHidden||o.hidden||o.style.display==="none",p=o.dataset.radixToastAnnounceExclude==="";if(!a)if(p){const u=o.dataset.radixToastAnnounceAlt;u&&r.push(u)}else r.push(...Re(o))}}),r}function U(t,r,n,{discrete:o}){const a=n.originalEvent.currentTarget,p=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});r&&a.addEventListener(t,r,{once:!0}),o?Oe(a,p):a.dispatchEvent(p)}var me=(t,r,n=0)=>{const o=Math.abs(t.x),a=Math.abs(t.y),p=o>a;return r==="left"||r==="right"?p&&o>n:!p&&a>n};function it(t=()=>{}){const r=$(t);He(()=>{let n=0,o=0;return n=window.requestAnimationFrame(()=>o=window.requestAnimationFrame(r)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(o)}},[r])}function ct(t){return t.nodeType===t.ELEMENT_NODE}function lt(t){const r=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const a=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||a?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)r.push(n.currentNode);return r}function G(t){const r=document.activeElement;return t.some(n=>n===r?!0:(n.focus(),document.activeElement!==r))}var dt=be,ut=he,mt=xe,pt=ye,vt=Ee,ft=Pe,gt=ie;function re(...t){return ze(Be(t))}const bt={"top-right":"top-4 right-4","top-left":"top-4 left-4","bottom-right":"bottom-4 right-4","bottom-left":"bottom-4 left-4"},Se=e.createContext(null),Ae=()=>{const t=e.useContext(Se);if(!t)throw new Error("useToast must be used within <ToastProvider>");return t},oe=new Set,ne=new Set;let wt=0;const Ie=()=>`t_${Date.now().toString(36)}_${(wt++).toString(36)}`,C=Object.assign(t=>{const r=t.id??Ie(),n={id:r,...t};return oe.forEach(o=>o(n)),r},{dismiss(t){ne.forEach(r=>r(t))}}),ht=({variant:t})=>{const r="w-4 h-4 shrink-0";switch(t){case"success":return e.createElement("svg",{className:r,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},e.createElement("path",{d:"M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z",className:"fill-[var(--color-success-muted)]"}),e.createElement("path",{d:"m8.5 12 2.5 2.5L16 9.5",stroke:"var(--color-success)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}));case"warning":return e.createElement("svg",{className:r,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},e.createElement("path",{d:"M12 3 2 21h20L12 3Z",className:"fill-[var(--color-warning-muted)]"}),e.createElement("path",{d:"M12 9v5m0 3h.01",stroke:"var(--color-warning)",strokeWidth:"2",strokeLinecap:"round"}));case"danger":return e.createElement("svg",{className:r,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},e.createElement("circle",{cx:"12",cy:"12",r:"9",className:"fill-[var(--color-danger-muted)]"}),e.createElement("path",{d:"m9 9 6 6M15 9l-6 6",stroke:"var(--color-danger)",strokeWidth:"2",strokeLinecap:"round"}));default:return e.createElement("svg",{className:r,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},e.createElement("circle",{cx:"12",cy:"12",r:"9",className:"fill-[var(--color-info-muted)]"}),e.createElement("path",{d:"M12 8.5h.01M11 11h2v5h-2z",stroke:"var(--color-info)",strokeWidth:"2",strokeLinecap:"round"}))}};function Tt(t){switch(t){case"success":return"border-[var(--color-toast-border)]";case"warning":return"border-[var(--color-toast-border)]";case"danger":return"border-[var(--color-toast-border)]";default:return"border-[var(--color-toast-border)]"}}const ce=({position:t="top-right",duration:r=5e3,maxVisible:n=3,zIndex:o=1050,pauseOnHover:a=!0,pauseOnFocusWithin:p=!0,swipeToDismiss:u=!0,children:g})=>{const[b,i]=e.useState({items:[],queue:[]}),T=e.useCallback(l=>{const s=l.id??Ie(),v={id:s,duration:r,variant:"info",...l};return i(d=>d.items.length<n?{...d,items:[...d.items,v]}:{...d,queue:[...d.queue,v]}),s},[r,n]),w=e.useCallback(l=>{i(s=>{const v=new Set;l?v.add(l):s.items.forEach(h=>v.add(h.id));const d=s.items.filter(h=>!v.has(h.id)),f=n-d.length,x=s.queue.slice(0,Math.max(0,f)),y=s.queue.slice(x.length);return{items:[...d,...x],queue:y}})},[n]),N=e.useCallback(()=>{i({items:[],queue:[]})},[]);e.useEffect(()=>{const l=v=>T(v),s=v=>w(v);return oe.add(l),ne.add(s),()=>{oe.delete(l),ne.delete(s)}},[T,w]);const S=e.useMemo(()=>({state:b,enqueue:T,dismiss:w,clearAll:N,config:{position:t,duration:r,maxVisible:n,zIndex:o,pauseOnHover:a,pauseOnFocusWithin:p,swipeToDismiss:u}}),[b,T,w,N,t,r,n,o,a,p,u]),E=e.useMemo(()=>"right",[]);return e.createElement(Se.Provider,{value:S},e.createElement(dt,{duration:r,swipeDirection:E,label:"Notifications"},g,e.createElement(X,null)))},X=()=>{const{config:t}=Ae();return e.createElement(ut,{className:re("fixed m-0 flex max-h-screen w-[var(--toast-width,360px)] flex-col gap-[var(--toast-gap,0.75rem)] p-0 outline-none",bt[t.position],`z-[${t.zIndex}]`)})},_e=({item:t,onClose:r})=>{const{title:n,description:o,variant:a="info",icon:p,action:u}=t,g=a==="success"?"bg-[var(--color-success)]":a==="warning"?"bg-[var(--color-warning)]":a==="danger"?"bg-[var(--color-danger)]":"bg-[var(--color-info)]";return e.createElement(mt,{className:re("group relative grid w-[var(--toast-width,360px)] grid-cols-[auto,1fr,auto] items-start gap-3","rounded-[var(--radius-md)] border bg-[var(--color-surface)] p-[var(--toast-padding,var(--spacing-4))] shadow-[var(--elevation-3,0_20px_40px_rgba(0,0,0,.18))]","data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]","data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",Tt(a)),onOpenChange:b=>{b||r(t.id)}},e.createElement("span",{className:re("absolute left-0 top-0 h-full w-1 rounded-l-[var(--radius-md)]",g),"aria-hidden":"true"}),e.createElement("div",{className:"mt-[2px]"},p===null?null:p??e.createElement(ht,{variant:a})),e.createElement("div",{className:"min-w-0"},n?e.createElement(pt,{className:"truncate text-[var(--font-size-sm)] font-[var(--font-weight-medium)]"},n):null,o?e.createElement(vt,{className:"mt-1 text-[var(--font-size-sm)] text-[var(--color-text-muted)]"},o):null,u?e.createElement(ft,{altText:u.label,asChild:!0},e.createElement("button",{onClick:u.onClick,className:"mt-2 inline-flex cursor-pointer items-center rounded-[var(--radius-md)] border border-[var(--color-border)] px-2 py-1 text-[var(--font-size-sm)] hover:bg-[var(--color-surface-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]"},u.label)):null),e.createElement(gt,{className:"ml-auto inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-[var(--radius-full)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]","aria-label":"Close"},"✕"))},le=()=>{const{state:t,dismiss:r}=Ae();return e.createElement(e.Fragment,null,t.items.map(n=>e.createElement(_e,{key:n.id,item:n,onClose:r})))};ce.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{position:{required:!1,tsType:{name:"union",raw:'"top-right" | "top-left" | "bottom-right" | "bottom-left"',elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5000",computed:!1}},maxVisible:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1050",computed:!1}},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},pauseOnFocusWithin:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},swipeToDismiss:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};X.__docgenInfo={description:"",methods:[],displayName:"ToastViewport"};_e.__docgenInfo={description:"",methods:[],displayName:"ToastCard",props:{item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  icon?: React.ReactNode | null;
  action?: ToastAction;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:'"success" | "info" | "warning" | "danger"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"duration",value:{name:"number",required:!1}},{key:"icon",value:{name:"union",raw:"React.ReactNode | null",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"null"}],required:!1}},{key:"action",value:{name:"signature",type:"object",raw:`{
  label: string;
  onClick: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]},required:!1}}]}},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};le.__docgenInfo={description:"",methods:[],displayName:"Toaster"};const pe=({children:t,...r})=>e.createElement(ce,{...r},e.createElement("div",{className:"relative"},t),e.createElement(le,null),e.createElement(X,null)),Lt={title:"Feedback/Toast",component:pe,subcomponents:{ToastProvider:ce,ToastViewport:X,Toaster:le},tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'\nGlobal, non-blocking notifications with queueing, variants, live-region a11y, pause-on-hover/focus, and swipe-to-dismiss.\n\n### Key features\n- **Queueing & maxVisible**: keep UI calm while ensuring messages are delivered in order.\n- **Variants**: `success | info | warning | danger` with inline iconography and accent rail.\n- **Programmatic API**: `toast({...})` returns an `id`; `toast.dismiss(id?)` for targeted or mass dismissal.\n- **Accessibility**\n  - Uses Radix Toast primitives.\n  - Live region via Radix provider (labelled "Notifications").\n  - Keyboard support: `Esc` closes focused toast; focus states are visible.\n- **User controls**\n  - `pauseOnHover`, `pauseOnFocusWithin`.\n  - `swipeToDismiss` gestures (via Radix).\n- **Theming**\n  - Relies on CSS variables (e.g., `--color-*`, `--toast-*`) for easy theming.\n- **Performance**\n  - Minimal re-renders; bounded `maxVisible`; simple DOM.\n      '.trim()}}},decorators:[(t,r)=>e.createElement(pe,{position:r.args.position,duration:r.args.duration,maxVisible:r.args.maxVisible,zIndex:r.args.zIndex,pauseOnHover:r.args.pauseOnHover,pauseOnFocusWithin:r.args.pauseOnFocusWithin,swipeToDismiss:r.args.swipeToDismiss},e.createElement(t,null))],argTypes:{position:{control:{type:"select"},options:["top-right","top-left","bottom-right","bottom-left"],description:"Screen corner for the viewport. Affects slide direction and stacking.",table:{category:"Provider"}},duration:{control:{type:"number",min:1e3,step:500},description:"Default auto-dismiss in ms for each toast (overridable per item).",table:{category:"Provider"}},maxVisible:{control:{type:"number",min:1,step:1},description:"Maximum number of toasts shown concurrently; the rest are queued.",table:{category:"Provider"}},zIndex:{control:{type:"number",min:0,step:1},description:"z-index for the toast viewport container.",table:{category:"Provider"}},pauseOnHover:{control:"boolean",description:"Pause timers while hovering any toast.",table:{category:"Provider"}},pauseOnFocusWithin:{control:"boolean",description:"Pause timers while a toast contains focus.",table:{category:"Provider"}},swipeToDismiss:{control:"boolean",description:"Enable swipe gestures to dismiss (platform and Radix dependent).",table:{category:"Provider"}}},args:{position:"top-right",duration:5e3,maxVisible:3,zIndex:1050,pauseOnHover:!0,pauseOnFocusWithin:!0,swipeToDismiss:!0}},K={render:()=>e.createElement("div",{className:"flex gap-3"},e.createElement("button",{className:"rounded-[var(--radius-md)] bg-[var(--color-brand)] px-4 py-2 text-white",onClick:()=>C({title:"Saved",description:"Your changes have been saved.",variant:"success"})},"Show success"),e.createElement("button",{className:"rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-2",onClick:()=>C({title:"Heads up",description:"We’ll deploy changes in 5 minutes.",variant:"info"})},"Show info")),name:"Usage (Basics)",parameters:{docs:{description:{story:"Minimal setup: wrap your app once with `ToastProvider`, render `<Toaster />` near the root, then call `toast(...)` anywhere."},source:{code:`
import { ToastProvider, Toaster, toast } from "@poak-dev/quokka-ui/Toast";

function AppRoot() {
  return (
    <ToastProvider position="top-right" duration={5000} maxVisible={3} zIndex={1050}>
      <App />
      <Toaster />
    </ToastProvider>
  );
}

// Anywhere in your app:
toast({
  title: "Saved",
  description: "Your changes have been saved.",
  variant: "success",
});
        `.trim(),language:"tsx"}}}},H={render:()=>e.createElement("div",null),name:"How to use the API",parameters:{docs:{description:{story:'\n### Programmatic API\n```ts\nimport { toast } from "@poak-dev/quokka-ui/Toast";\n\n// Create\nconst id = toast({\n  title: "Saved",\n  description: "Your changes have been saved.",\n  variant: "success",        // "info" | "warning" | "danger"\n  duration: 5000,            // override provider default\n  icon: null,                // hide icon, or provide a ReactNode\n  action: { label: "Undo", onClick: () => {/* ... */} },\n});\n\n// Dismiss specific / all\ntoast.dismiss(id);\ntoast.dismiss(); // dismiss all visible toasts\n```\n\n### Using the hook\n```tsx\nimport { useToast } from "@poak-dev/quokka-ui/Toast";\n\nfunction ClearAllButton() {\n  const { clearAll } = useToast();\n  return <button onClick={clearAll}>Clear all toasts</button>;\n}\n```\n\n### Theming tokens\n- `--color-success`, `--color-warning`, `--color-danger`, `--color-info`\n- `--color-surface`, `--color-surface-muted`, `--color-text-muted`, `--color-border`\n- `--elevation-3`, `--radius-md`, `--radius-full`\n- `--toast-width` (default `360px`), `--toast-gap`, `--toast-padding`\n\n> **Tip:** Set these at the theme root to brand the component consistently across your app.\n        '.trim()}}}},B={render:()=>e.createElement("div",{className:"grid grid-cols-2 gap-3"},e.createElement("button",{className:"rounded-[var(--radius-md)] bg-[var(--color-brand)] px-4 py-2 text-white",onClick:()=>C({title:"Completed",variant:"success"})},"Success"),e.createElement("button",{className:"rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-2",onClick:()=>C({title:"Information",variant:"info"})},"Info"),e.createElement("button",{className:"rounded-[var(--radius-md)] bg-[var(--color-warning)] text-black px-4 py-2",onClick:()=>C({title:"Check settings",variant:"warning"})},"Warning"),e.createElement("button",{className:"rounded-[var(--radius-md)] bg-[var(--color-danger)] text-white px-4 py-2",onClick:()=>C({title:"Failed to save",variant:"danger"})},"Danger")),parameters:{docs:{description:{story:"Built-in variants: `success`, `info`, `warning`, `danger`. Pass `icon={null}` on a toast item to hide the icon."}}}},z={render:()=>e.createElement("div",{className:"flex gap-3"},e.createElement("button",{className:"rounded-[var(--radius-md)] bg-[var(--color-brand)] px-4 py-2 text-white",onClick:()=>C({title:"Item deleted",description:"Click Undo to restore.",variant:"danger",action:{label:"Undo",onClick:()=>C({title:"Restored",variant:"success"})}})},"Show with action (Undo)"),e.createElement("button",{className:"rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-2",onClick:()=>{const t=C({title:"Processing…",description:"Will auto-dismiss",variant:"info",duration:8e3});setTimeout(()=>C.dismiss(t),2e3)}},"Programmatic dismiss")),parameters:{docs:{description:{story:"Toasts can include a single primary action (e.g., **Undo**). You can also dismiss a specific toast programmatically using its `id`."}}}},Y={render:()=>e.createElement("button",{className:"rounded-[var(--radius-md)] bg-[var(--color-brand)] px-4 py-2 text-white",onClick:()=>{Array.from({length:5}).forEach((t,r)=>C({title:`Queued ${r+1}`,description:"Max visible is 3; others will queue.",variant:["success","info","warning","danger"][r%4],duration:3e3}))}},"Fire 5 toasts"),parameters:{docs:{description:{story:"`maxVisible=3` keeps only three toasts on screen. New ones queue and appear as others close."}}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-3">
      <button className="rounded-[var(--radius-md)] bg-[var(--color-brand)] px-4 py-2 text-white" onClick={() => toast({
      title: "Saved",
      description: "Your changes have been saved.",
      variant: "success"
    })}>
        Show success
      </button>
      <button className="rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-2" onClick={() => toast({
      title: "Heads up",
      description: "We’ll deploy changes in 5 minutes.",
      variant: "info"
    })}>
        Show info
      </button>
    </div>,
  name: "Usage (Basics)",
  parameters: {
    docs: {
      description: {
        story: "Minimal setup: wrap your app once with \`ToastProvider\`, render \`<Toaster />\` near the root, then call \`toast(...)\` anywhere."
      },
      source: {
        code: \`
import { ToastProvider, Toaster, toast } from "@poak-dev/quokka-ui/Toast";

function AppRoot() {
  return (
    <ToastProvider position="top-right" duration={5000} maxVisible={3} zIndex={1050}>
      <App />
      <Toaster />
    </ToastProvider>
  );
}

// Anywhere in your app:
toast({
  title: "Saved",
  description: "Your changes have been saved.",
  variant: "success",
});
        \`.trim(),
        language: "tsx"
      }
    }
  }
}`,...K.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <div />,
  name: "How to use the API",
  parameters: {
    docs: {
      description: {
        story: \`
### Programmatic API
\\\`\\\`\\\`ts
import { toast } from "@poak-dev/quokka-ui/Toast";

// Create
const id = toast({
  title: "Saved",
  description: "Your changes have been saved.",
  variant: "success",        // "info" | "warning" | "danger"
  duration: 5000,            // override provider default
  icon: null,                // hide icon, or provide a ReactNode
  action: { label: "Undo", onClick: () => {/* ... */} },
});

// Dismiss specific / all
toast.dismiss(id);
toast.dismiss(); // dismiss all visible toasts
\\\`\\\`\\\`

### Using the hook
\\\`\\\`\\\`tsx
import { useToast } from "@poak-dev/quokka-ui/Toast";

function ClearAllButton() {
  const { clearAll } = useToast();
  return <button onClick={clearAll}>Clear all toasts</button>;
}
\\\`\\\`\\\`

### Theming tokens
- \\\`--color-success\\\`, \\\`--color-warning\\\`, \\\`--color-danger\\\`, \\\`--color-info\\\`
- \\\`--color-surface\\\`, \\\`--color-surface-muted\\\`, \\\`--color-text-muted\\\`, \\\`--color-border\\\`
- \\\`--elevation-3\\\`, \\\`--radius-md\\\`, \\\`--radius-full\\\`
- \\\`--toast-width\\\` (default \\\`360px\\\`), \\\`--toast-gap\\\`, \\\`--toast-padding\\\`

> **Tip:** Set these at the theme root to brand the component consistently across your app.
        \`.trim()
      }
    }
  }
}`,...H.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-3">
      <button className="rounded-[var(--radius-md)] bg-[var(--color-brand)] px-4 py-2 text-white" onClick={() => toast({
      title: "Completed",
      variant: "success"
    })}>
        Success
      </button>
      <button className="rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-2" onClick={() => toast({
      title: "Information",
      variant: "info"
    })}>
        Info
      </button>
      <button className="rounded-[var(--radius-md)] bg-[var(--color-warning)] text-black px-4 py-2" onClick={() => toast({
      title: "Check settings",
      variant: "warning"
    })}>
        Warning
      </button>
      <button className="rounded-[var(--radius-md)] bg-[var(--color-danger)] text-white px-4 py-2" onClick={() => toast({
      title: "Failed to save",
      variant: "danger"
    })}>
        Danger
      </button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Built-in variants: \`success\`, \`info\`, \`warning\`, \`danger\`. Pass \`icon={null}\` on a toast item to hide the icon."
      }
    }
  }
}`,...B.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-3">
      <button className="rounded-[var(--radius-md)] bg-[var(--color-brand)] px-4 py-2 text-white" onClick={() => toast({
      title: "Item deleted",
      description: "Click Undo to restore.",
      variant: "danger",
      action: {
        label: "Undo",
        onClick: () => toast({
          title: "Restored",
          variant: "success"
        })
      }
    })}>
        Show with action (Undo)
      </button>
      <button className="rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-2" onClick={() => {
      const id = toast({
        title: "Processing…",
        description: "Will auto-dismiss",
        variant: "info",
        duration: 8000
      });
      setTimeout(() => toast.dismiss(id), 2000);
    }}>
        Programmatic dismiss
      </button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Toasts can include a single primary action (e.g., **Undo**). You can also dismiss a specific toast programmatically using its \`id\`."
      }
    }
  }
}`,...z.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <button className="rounded-[var(--radius-md)] bg-[var(--color-brand)] px-4 py-2 text-white" onClick={() => {
    Array.from({
      length: 5
    }).forEach((_, i) => toast({
      title: \`Queued \${i + 1}\`,
      description: "Max visible is 3; others will queue.",
      variant: (["success", "info", "warning", "danger"] as const)[i % 4],
      duration: 3000
    }));
  }}>
      Fire 5 toasts
    </button>,
  parameters: {
    docs: {
      description: {
        story: "\`maxVisible=3\` keeps only three toasts on screen. New ones queue and appear as others close."
      }
    }
  }
}`,...Y.parameters?.docs?.source}}};const Ot=["Usage","API","Variants","WithActionAndDismiss","MaxVisibleAndQueue"];export{H as API,Y as MaxVisibleAndQueue,K as Usage,B as Variants,z as WithActionAndDismiss,Ot as __namedExportsOrder,Lt as default};

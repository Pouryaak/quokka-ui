import{r as e}from"./iframe-B0LassJS.js";import{c as F}from"./index-_266PJnF.js";import{u as D}from"./index-BeiLhXI-.js";import{D as B,a as L,b as G,c as I,h as y,d as q,g as Y,f as K,e as b}from"./index-JYoth5y-.js";import{c as U}from"./index-H1f7Wu5C.js";import{j as s}from"./index-8YRTKl2Q.js";import{c as V}from"./clsx-B-dksMZM.js";import{t as W}from"./bundle-mjs-Ct12j0u0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CmpzIQg5.js";import"./index-Cs0riu9_.js";import"./index-cRNFonA6.js";import"./index-VGe-NDq1.js";import"./index-pjeOVdX6.js";import"./index-DLF47qJP.js";import"./index-CzFWJezh.js";var E="AlertDialog",[$]=F(E,[y]),l=y(),N=t=>{const{__scopeAlertDialog:r,...a}=t,o=l(r);return s.jsx(B,{...o,...a,modal:!0})};N.displayName=E;var Q="AlertDialogTrigger",w=e.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...o}=t,i=l(a);return s.jsx(q,{...i,...o,ref:r})});w.displayName=Q;var H="AlertDialogPortal",C=t=>{const{__scopeAlertDialog:r,...a}=t,o=l(r);return s.jsx(L,{...o,...a})};C.displayName=H;var J="AlertDialogOverlay",T=e.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...o}=t,i=l(a);return s.jsx(G,{...i,...o,ref:r})});T.displayName=J;var R="AlertDialogContent",[X,Z]=$(R),O=e.forwardRef((t,r)=>{const{__scopeAlertDialog:a,children:o,...i}=t,c=l(a),p=e.useRef(null),A=D(r,p),u=e.useRef(null);return s.jsx(X,{scope:a,cancelRef:u,children:s.jsx(I,{role:"alertdialog",...c,...i,ref:A,onOpenAutoFocus:U(i.onOpenAutoFocus,m=>{m.preventDefault(),u.current?.focus({preventScroll:!0})}),onPointerDownOutside:m=>m.preventDefault(),onInteractOutside:m=>m.preventDefault(),children:o})})});O.displayName=R;var ee="AlertDialogTitle",_=e.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...o}=t,i=l(a);return s.jsx(Y,{...i,...o,ref:r})});_.displayName=ee;var te="AlertDialogDescription",S=e.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...o}=t,i=l(a);return s.jsx(K,{...i,...o,ref:r})});S.displayName=te;var re="AlertDialogAction",z=e.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...o}=t,i=l(a);return s.jsx(b,{...i,...o,ref:r})});z.displayName=re;var P="AlertDialogCancel",j=e.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...o}=t,{cancelRef:i}=Z(P,a),c=l(a),p=D(r,i);return s.jsx(b,{...c,...o,ref:p})});j.displayName=P;var ae=N,oe=w,ne=C,ie=T,se=O,le=z,ce=j,pe=_,de=S;function d(...t){return W(V(t))}const k=e.createContext(null),ue=()=>{const t=e.useContext(k);if(!t)throw new Error("AlertDialog subcomponents must be used within <AlertDialog>.");return t},me=`
  fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
  w-[90vw] max-w-[28rem]
  rounded-[var(--radius-md)]
  bg-[var(--color-surface)] text-[var(--color-text-primary)]
  shadow-[var(--elevation-3,0_20px_40px_rgba(0,0,0,.18))]
  outline-none
  data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out
`,n=({variant:t="danger",open:r,onOpenChange:a,children:o})=>{const i=e.useMemo(()=>({variant:t}),[t]);return e.createElement(ae,{open:r,onOpenChange:a},e.createElement(ne,null,e.createElement(ie,{className:d("fixed inset-0 z-[var(--z-overlay,1000)]","bg-[var(--overlay-bg,hsla(220,10%,5%,0.5))]","data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out")}),e.createElement(se,{className:d("z-[calc(var(--z-overlay,1000)+1)]",me)},e.createElement(k.Provider,{value:i},e.createElement("div",{className:"flex max-h-[85vh] flex-col"},o)))))};n.Trigger=oe;n.Title=e.forwardRef(function({className:r,...a},o){return e.createElement(pe,{ref:o,className:d("px-[var(--spacing-5)] pt-[var(--spacing-5)] text-[var(--font-size-xl)] font-[var(--font-weight-bold)]",r),...a})});n.Description=e.forwardRef(function({className:r,...a},o){return e.createElement(de,{ref:o,className:d("px-[var(--spacing-5)] pt-[var(--spacing-2)] text-[var(--font-size-sm)] text-[var(--color-text-muted)]",r),...a})});n.Actions=e.forwardRef(function({className:r,...a},o){return e.createElement("div",{ref:o,className:d("mt-auto flex items-center justify-end gap-[var(--spacing-3)]","p-[var(--spacing-5)] border-t border-[var(--color-border)]","bg-[var(--color-surface)]",r),...a})});n.Cancel=e.forwardRef(function({className:r,...a},o){return e.createElement(ce,{ref:o,className:d("inline-flex items-center justify-center rounded-[var(--radius-md)] px-[var(--spacing-4)] py-[var(--spacing-2)]","font-[var(--font-weight-medium)] cursor-pointer","focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]","bg-[var(--color-surface-muted)] hover:opacity-90 text-[var(--color-text-primary)]","disabled:opacity-50 disabled:cursor-not-allowed",r),...a})});n.Action=e.forwardRef(function({className:r,tone:a,...o},i){const{variant:c}=ue(),p=a??c;return e.createElement(le,{ref:i,className:d("inline-flex items-center justify-center rounded-[var(--radius-md)] px-[var(--spacing-4)] py-[var(--spacing-2)]","font-[var(--font-weight-medium)] cursor-pointer","focus:outline-none focus:ring-2","disabled:opacity-50 disabled:cursor-not-allowed",p==="danger"?["bg-[var(--color-danger)] hover:bg-[var(--color-danger-hover)]","text-[var(--color-danger-foreground)]","focus:ring-[var(--color-danger)]"].join(" "):["bg-[var(--color-surface-muted)] hover:opacity-90","text-[var(--color-text-primary)]","focus:ring-[var(--color-brand)]"].join(" "),r),...o})});n.__docgenInfo={description:"",methods:[],displayName:"AlertDialog",props:{variant:{required:!1,tsType:{name:"union",raw:'"danger" | "neutral"',elements:[{name:"literal",value:'"danger"'},{name:"literal",value:'"neutral"'}]},description:"",defaultValue:{value:'"danger"',computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Se={title:"Overlay/AlertDialog",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:["### Purpose","Use `AlertDialog` when the user must **explicitly confirm or cancel** a high-impact action.","","### A11y contract (WCAG 2.2 AA)","- **Labeling**: Provide `<AlertDialog.Title />` and `<AlertDialog.Description />` so screen readers announce context.","- **Keyboard**: Tab/Shift+Tab cycles inside; **Enter** activates focused action; **Esc** cancels by default.","- **Focus**: Lands on the **primary action** (confirm) or first interactive element; returns to the trigger on close.","","### Tone",'- `variant="danger"` → destructive intent (e.g., Delete). Primary action is styled **red** via your danger tokens.','- `variant="neutral"` → non-destructive (e.g., Archive, Sign out).',"","### Dos & Don'ts","- **Do**: Keep copy short; name the object; state consequences (irreversible, data loss).","- **Do**: Make the primary action label verb-first (Delete, Archive).","- **Don't**: Add unrelated fields or complex forms; use a full **Modal** for that."].join(`
`)}}},argTypes:{variant:{control:{type:"inline-radio"},options:["danger","neutral"],description:"Visual tone for the primary action.",table:{defaultValue:{summary:"danger"}}},open:{control:!1,description:"Controlled open state (stories manage it)."},onOpenChange:{control:!1}},args:{variant:"danger"}},ge=t=>e.createElement("button",{...t,className:"rounded-[var(--radius-md)] px-4 py-2 font-[var(--font-weight-medium)] text-white bg-[var(--color-brand)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]"}),h=t=>e.createElement("button",{...t,className:"rounded-[var(--radius-md)] px-3 py-2 border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]"});function M({buttonTitle:t="Open Alert",variant:r="danger",title:a,description:o,actionLabel:i,cancelLabel:c="Cancel",actionTone:p}){const[A,u]=e.useState(!1);return e.createElement("div",{className:"flex flex-col items-center gap-4"},e.createElement(ge,{onClick:()=>u(!0)},t),e.createElement(n,{open:A,onOpenChange:u,variant:r},e.createElement(n.Title,{className:"px-[var(--spacing-5)] pt-[var(--spacing-5)] text-[var(--font-size-xl)] font-[var(--font-weight-bold)]"},a),e.createElement(n.Description,{className:"px-[var(--spacing-5)] pt-[var(--spacing-2)] text-[var(--font-size-sm)] text-[var(--color-text-muted)]"},o),e.createElement(n.Actions,null,e.createElement(n.Cancel,{asChild:!0},e.createElement(h,null,c)),e.createElement(n.Action,{autoFocus:!0,tone:p},i))))}const g={name:"Destructive (danger)",render:t=>e.createElement(M,{buttonTitle:"Delete",title:"Delete “QK-21”?",description:"This permanently removes all files and settings. You can’t undo this action.",actionLabel:"Delete",...t}),parameters:{docs:{description:{story:"Use `danger` for irreversible actions. The primary button uses your danger tokens; initial focus lands there so Enter confirms."}}}},v={render:t=>e.createElement(M,{variant:"neutral",title:"Archive item?",description:"You can restore it later from Settings → Archive.",actionLabel:"Archive",actionTone:"neutral",...t}),parameters:{docs:{description:{story:"Neutral tone for reversible or low-risk operations (Archive/Move/Sign out)."}}}},f={render:()=>{const[t,r]=e.useState(!1),a=e.createElement("div",{className:"px-[var(--spacing-5)] py-[var(--spacing-4)] space-y-3 max-h-[45vh] overflow-y-auto [scrollbar-gutter:stable]"},Array.from({length:12},(o,i)=>e.createElement("p",{key:i,className:"text-[var(--font-size-sm)] text-[var(--color-text-muted)]"},"• Consequence ",i+1,": Detailed implication to review before confirming.")));return e.createElement("div",{className:"flex flex-col items-center gap-4"},e.createElement(h,{onClick:()=>r(!0)},"Open with long content"),e.createElement(n,{open:t,onOpenChange:r,variant:"danger"},e.createElement(n.Title,{className:"px-[var(--spacing-5)] pt-[var(--spacing-5)] text-[var(--font-size-xl)] font-[var(--font-weight-bold)]"},"Remove organization?"),e.createElement(n.Description,{className:"px-[var(--spacing-5)] pt-[var(--spacing-2)] text-[var(--font-size-sm)] text-[var(--color-text-muted)]"},"Review the implications below before confirming."),a,e.createElement(n.Actions,null,e.createElement(n.Cancel,{asChild:!0},e.createElement(h,null,"Cancel")),e.createElement(n.Action,{autoFocus:!0},"Remove"))))},parameters:{docs:{description:{story:"For lengthy explanations, constrain the content height to ~45vh and allow internal scroll so the decision buttons remain reachable."}}}},x={render:()=>{const[t,r]=e.useState(!1);return e.createElement("div",{className:"flex flex-col items-center gap-4"},e.createElement("button",{onClick:()=>r(!0),className:"group relative overflow-hidden rounded-[var(--radius-md)] px-5 py-2 font-[var(--font-weight-medium)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]"},e.createElement("span",{className:"absolute inset-0 feature-glow opacity-60 group-hover:opacity-80 transition-opacity"}),e.createElement("span",{className:"relative"},"Fancy trigger ✨")),e.createElement(n,{open:t,onOpenChange:r,variant:"danger"},e.createElement(n.Title,{className:"px-[var(--spacing-5)] pt-[var(--spacing-5)] text-[var(--font-size-xl)] font-[var(--font-weight-bold)]"},"Nuke workspace?"),e.createElement(n.Description,{className:"px-[var(--spacing-5)] pt-[var(--spacing-2)] text-[var(--font-size-sm)] text-[var(--color-text-muted)]"},"Export your data first — this action is permanent."),e.createElement(n.Actions,null,e.createElement(n.Cancel,{asChild:!0},e.createElement(h,null,"I’ll export first")),e.createElement(n.Action,{autoFocus:!0},"Do it"))))},parameters:{docs:{description:{story:"`asChild` lets you use any custom button as the trigger without losing accessibility or behavior."}}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Destructive (danger)",
  render: args => <ControlledDemo buttonTitle="Delete" title="Delete “QK-21”?" description="This permanently removes all files and settings. You can’t undo this action." actionLabel="Delete" {...args} />,
  parameters: {
    docs: {
      description: {
        story: "Use \`danger\` for irreversible actions. The primary button uses your danger tokens; initial focus lands there so Enter confirms."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledDemo variant="neutral" title="Archive item?" description="You can restore it later from Settings → Archive." actionLabel="Archive" actionTone="neutral" {...args} />,
  parameters: {
    docs: {
      description: {
        story: "Neutral tone for reversible or low-risk operations (Archive/Move/Sign out)."
      }
    }
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const Body = <div className="px-[var(--spacing-5)] py-[var(--spacing-4)] space-y-3 max-h-[45vh] overflow-y-auto [scrollbar-gutter:stable]">
        {Array.from({
        length: 12
      }, (_, i) => <p key={i} className="text-[var(--font-size-sm)] text-[var(--color-text-muted)]">
            • Consequence {i + 1}: Detailed implication to review before
            confirming.
          </p>)}
      </div>;
    return <div className="flex flex-col items-center gap-4">
        <GhostBtn onClick={() => setOpen(true)}>
          Open with long content
        </GhostBtn>

        <AlertDialog open={open} onOpenChange={setOpen} variant="danger">
          <AlertDialog.Title className="px-[var(--spacing-5)] pt-[var(--spacing-5)] text-[var(--font-size-xl)] font-[var(--font-weight-bold)]">
            Remove organization?
          </AlertDialog.Title>

          <AlertDialog.Description className="px-[var(--spacing-5)] pt-[var(--spacing-2)] text-[var(--font-size-sm)] text-[var(--color-text-muted)]">
            Review the implications below before confirming.
          </AlertDialog.Description>

          {Body}

          <AlertDialog.Actions>
            <AlertDialog.Cancel asChild>
              <GhostBtn>Cancel</GhostBtn>
            </AlertDialog.Cancel>
            <AlertDialog.Action autoFocus>Remove</AlertDialog.Action>
          </AlertDialog.Actions>
        </AlertDialog>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "For lengthy explanations, constrain the content height to ~45vh and allow internal scroll so the decision buttons remain reachable."
      }
    }
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div className="flex flex-col items-center gap-4">
        <button onClick={() => setOpen(true)} className="group relative overflow-hidden rounded-[var(--radius-md)] px-5 py-2 font-[var(--font-weight-medium)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]">
          <span className="absolute inset-0 feature-glow opacity-60 group-hover:opacity-80 transition-opacity" />
          <span className="relative">Fancy trigger ✨</span>
        </button>

        <AlertDialog open={open} onOpenChange={setOpen} variant="danger">
          <AlertDialog.Title className="px-[var(--spacing-5)] pt-[var(--spacing-5)] text-[var(--font-size-xl)] font-[var(--font-weight-bold)]">
            Nuke workspace?
          </AlertDialog.Title>
          <AlertDialog.Description className="px-[var(--spacing-5)] pt-[var(--spacing-2)] text-[var(--font-size-sm)] text-[var(--color-text-muted)]">
            Export your data first — this action is permanent.
          </AlertDialog.Description>

          <AlertDialog.Actions>
            <AlertDialog.Cancel asChild>
              <GhostBtn>I’ll export first</GhostBtn>
            </AlertDialog.Cancel>
            <AlertDialog.Action autoFocus>Do it</AlertDialog.Action>
          </AlertDialog.Actions>
        </AlertDialog>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "\`asChild\` lets you use any custom button as the trigger without losing accessibility or behavior."
      }
    }
  }
}`,...x.parameters?.docs?.source}}};const ze=["Destructive","Neutral","WithLongContent","FancyTrigger"];export{g as Destructive,x as FancyTrigger,v as Neutral,f as WithLongContent,ze as __namedExportsOrder,Se as default};

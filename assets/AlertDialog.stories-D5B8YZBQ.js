import{r as e}from"./iframe-C_g90xlo.js";import{u as D,c as L,a as G,g as I}from"./index-D7GSPBPt.js";import{c as b,R as q,P as $,O as W,W as Y,C as K,T as U,b as V,D as Q,a as E}from"./index-BtezfDVf.js";import{j as s}from"./index-CkBqJvDx.js";import{t as H,c as J}from"./bundle-mjs-BJeS7sC5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-UWjYWlIG.js";import"./index-v4X8a-Ap.js";import"./index-DyJFS1P0.js";import"./index-BbgTdLap.js";import"./index-2I2xUPBQ.js";var N="AlertDialog",[X]=L(N,[b]),l=b(),w=t=>{const{__scopeAlertDialog:r,...a}=t,n=l(r);return s.jsx(q,{...n,...a,modal:!0})};w.displayName=N;var Z="AlertDialogTrigger",C=e.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...n}=t,i=l(a);return s.jsx(U,{...i,...n,ref:r})});C.displayName=Z;var ee="AlertDialogPortal",T=t=>{const{__scopeAlertDialog:r,...a}=t,n=l(r);return s.jsx($,{...n,...a})};T.displayName=ee;var te="AlertDialogOverlay",R=e.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...n}=t,i=l(a);return s.jsx(W,{...i,...n,ref:r})});R.displayName=te;var u="AlertDialogContent",[re,ae]=X(u),ne=I("AlertDialogContent"),O=e.forwardRef((t,r)=>{const{__scopeAlertDialog:a,children:n,...i}=t,p=l(a),c=e.useRef(null),y=D(r,c),m=e.useRef(null);return s.jsx(Y,{contentName:u,titleName:_,docsSlug:"alert-dialog",children:s.jsx(re,{scope:a,cancelRef:m,children:s.jsxs(K,{role:"alertdialog",...p,...i,ref:y,onOpenAutoFocus:G(i.onOpenAutoFocus,g=>{g.preventDefault(),m.current?.focus({preventScroll:!0})}),onPointerDownOutside:g=>g.preventDefault(),onInteractOutside:g=>g.preventDefault(),children:[s.jsx(ne,{children:n}),s.jsx(ie,{contentRef:c})]})})})});O.displayName=u;var _="AlertDialogTitle",S=e.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...n}=t,i=l(a);return s.jsx(V,{...i,...n,ref:r})});S.displayName=_;var P="AlertDialogDescription",j=e.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...n}=t,i=l(a);return s.jsx(Q,{...i,...n,ref:r})});j.displayName=P;var oe="AlertDialogAction",z=e.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...n}=t,i=l(a);return s.jsx(E,{...i,...n,ref:r})});z.displayName=oe;var k="AlertDialogCancel",M=e.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...n}=t,{cancelRef:i}=ae(k,a),p=l(a),c=D(r,i);return s.jsx(E,{...p,...n,ref:c})});M.displayName=k;var ie=({contentRef:t})=>{const r=`\`${u}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${u}\` by passing a \`${P}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${u}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return e.useEffect(()=>{document.getElementById(t.current?.getAttribute("aria-describedby"))||console.warn(r)},[r,t]),null},se=w,le=C,ce=T,pe=R,de=O,ue=z,me=M,ge=S,ve=j;function d(...t){return H(J(t))}const F=e.createContext(null),fe=()=>{const t=e.useContext(F);if(!t)throw new Error("AlertDialog subcomponents must be used within <AlertDialog>.");return t},he=`
  fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
  w-[90vw] max-w-[28rem]
  rounded-[var(--radius-md)]
  bg-[var(--color-surface)] text-[var(--color-text-primary)]
  shadow-[var(--elevation-3,0_20px_40px_rgba(0,0,0,.18))]
  outline-none
  data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out
`,o=({variant:t="danger",open:r,onOpenChange:a,children:n})=>{const i=e.useMemo(()=>({variant:t}),[t]);return e.createElement(se,{open:r,onOpenChange:a},e.createElement(ce,null,e.createElement(pe,{className:d("fixed inset-0 z-[var(--z-overlay,1000)]","bg-[var(--overlay-bg,hsla(220,10%,5%,0.5))]","data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out")}),e.createElement(de,{className:d("z-[calc(var(--z-overlay,1000)+1)]",he)},e.createElement(F.Provider,{value:i},e.createElement("div",{className:"flex max-h-[85vh] flex-col"},n)))))};o.Trigger=le;o.Title=e.forwardRef(function({className:r,...a},n){return e.createElement(ge,{ref:n,className:d("px-[var(--spacing-5)] pt-[var(--spacing-5)] text-[var(--font-size-xl)] font-[var(--font-weight-bold)]",r),...a})});o.Description=e.forwardRef(function({className:r,...a},n){return e.createElement(ve,{ref:n,className:d("px-[var(--spacing-5)] pt-[var(--spacing-2)] text-[var(--font-size-sm)] text-[var(--color-text-muted)]",r),...a})});o.Actions=e.forwardRef(function({className:r,...a},n){return e.createElement("div",{ref:n,className:d("mt-auto flex items-center justify-end gap-[var(--spacing-3)]","p-[var(--spacing-5)] border-t border-[var(--color-border)]","bg-[var(--color-surface)]",r),...a})});o.Cancel=e.forwardRef(function({className:r,...a},n){return e.createElement(me,{ref:n,className:d("inline-flex items-center justify-center rounded-[var(--radius-md)] px-[var(--spacing-4)] py-[var(--spacing-2)]","font-[var(--font-weight-medium)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]","bg-[var(--color-surface-muted)] hover:opacity-90 text-[var(--color-text-primary)]","disabled:opacity-50 disabled:cursor-not-allowed",r),...a})});o.Action=e.forwardRef(function({className:r,tone:a,...n},i){const{variant:p}=fe(),c=a??p;return e.createElement(ue,{ref:i,className:d("inline-flex items-center justify-center rounded-[var(--radius-md)] px-[var(--spacing-4)] py-[var(--spacing-2)]","font-[var(--font-weight-medium)] focus:outline-none focus:ring-2","disabled:opacity-50 disabled:cursor-not-allowed",c==="danger"?["bg-[var(--color-danger)] hover:bg-[var(--color-danger-hover)]","text-[var(--color-danger-foreground)]","focus:ring-[var(--color-danger)]"].join(" "):["bg-[var(--color-surface-muted)] hover:opacity-90","text-[var(--color-text-primary)]","focus:ring-[var(--color-brand)]"].join(" "),r),...n})});o.__docgenInfo={description:"",methods:[],displayName:"AlertDialog",props:{variant:{required:!1,tsType:{name:"union",raw:'"danger" | "neutral"',elements:[{name:"literal",value:'"danger"'},{name:"literal",value:'"neutral"'}]},description:"",defaultValue:{value:'"danger"',computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const _e={title:"Overlay/AlertDialog",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:["### Purpose","Use `AlertDialog` when the user must **explicitly confirm or cancel** a high-impact action.","","### A11y contract (WCAG 2.2 AA)","- **Labeling**: Provide `<AlertDialog.Title />` and `<AlertDialog.Description />` so screen readers announce context.","- **Keyboard**: Tab/Shift+Tab cycles inside; **Enter** activates focused action; **Esc** cancels by default.","- **Focus**: Lands on the **primary action** (confirm) or first interactive element; returns to the trigger on close.","","### Tone",'- `variant="danger"` → destructive intent (e.g., Delete). Primary action is styled **red** via your danger tokens.','- `variant="neutral"` → non-destructive (e.g., Archive, Sign out).',"","### Dos & Don'ts","- **Do**: Keep copy short; name the object; state consequences (irreversible, data loss).","- **Do**: Make the primary action label verb-first (Delete, Archive).","- **Don't**: Add unrelated fields or complex forms; use a full **Modal** for that."].join(`
`)}}},argTypes:{variant:{control:{type:"inline-radio"},options:["danger","neutral"],description:"Visual tone for the primary action.",table:{defaultValue:{summary:"danger"}}},open:{control:!1,description:"Controlled open state (stories manage it)."},onOpenChange:{control:!1}},args:{variant:"danger"}},xe=t=>e.createElement("button",{...t,className:"rounded-[var(--radius-md)] px-4 py-2 font-[var(--font-weight-medium)] text-white bg-[var(--color-brand)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]"}),A=t=>e.createElement("button",{...t,className:"rounded-[var(--radius-md)] px-3 py-2 border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]"});function B({buttonTitle:t="Open Alert",variant:r="danger",title:a,description:n,actionLabel:i,cancelLabel:p="Cancel",actionTone:c}){const[y,m]=e.useState(!1);return e.createElement("div",{className:"flex flex-col items-center gap-4"},e.createElement(xe,{onClick:()=>m(!0)},t),e.createElement(o,{open:y,onOpenChange:m,variant:r},e.createElement(o.Title,{className:"px-[var(--spacing-5)] pt-[var(--spacing-5)] text-[var(--font-size-xl)] font-[var(--font-weight-bold)]"},a),e.createElement(o.Description,{className:"px-[var(--spacing-5)] pt-[var(--spacing-2)] text-[var(--font-size-sm)] text-[var(--color-text-muted)]"},n),e.createElement(o.Actions,null,e.createElement(o.Cancel,{asChild:!0},e.createElement(A,null,p)),e.createElement(o.Action,{autoFocus:!0,tone:c},i))))}const v={name:"Destructive (danger)",render:t=>e.createElement(B,{buttonTitle:"Delete",title:"Delete “QK-21”?",description:"This permanently removes all files and settings. You can’t undo this action.",actionLabel:"Delete",...t}),parameters:{docs:{description:{story:"Use `danger` for irreversible actions. The primary button uses your danger tokens; initial focus lands there so Enter confirms."}}}},f={render:t=>e.createElement(B,{variant:"neutral",title:"Archive item?",description:"You can restore it later from Settings → Archive.",actionLabel:"Archive",actionTone:"neutral",...t}),parameters:{docs:{description:{story:"Neutral tone for reversible or low-risk operations (Archive/Move/Sign out)."}}}},h={render:()=>{const[t,r]=e.useState(!1),a=e.createElement("div",{className:"px-[var(--spacing-5)] py-[var(--spacing-4)] space-y-3 max-h-[45vh] overflow-y-auto [scrollbar-gutter:stable]"},Array.from({length:12},(n,i)=>e.createElement("p",{key:i,className:"text-[var(--font-size-sm)] text-[var(--color-text-muted)]"},"• Consequence ",i+1,": Detailed implication to review before confirming.")));return e.createElement("div",{className:"flex flex-col items-center gap-4"},e.createElement(A,{onClick:()=>r(!0)},"Open with long content"),e.createElement(o,{open:t,onOpenChange:r,variant:"danger"},e.createElement(o.Title,{className:"px-[var(--spacing-5)] pt-[var(--spacing-5)] text-[var(--font-size-xl)] font-[var(--font-weight-bold)]"},"Remove organization?"),e.createElement(o.Description,{className:"px-[var(--spacing-5)] pt-[var(--spacing-2)] text-[var(--font-size-sm)] text-[var(--color-text-muted)]"},"Review the implications below before confirming."),a,e.createElement(o.Actions,null,e.createElement(o.Cancel,{asChild:!0},e.createElement(A,null,"Cancel")),e.createElement(o.Action,{autoFocus:!0},"Remove"))))},parameters:{docs:{description:{story:"For lengthy explanations, constrain the content height to ~45vh and allow internal scroll so the decision buttons remain reachable."}}}},x={render:()=>{const[t,r]=e.useState(!1);return e.createElement("div",{className:"flex flex-col items-center gap-4"},e.createElement("button",{onClick:()=>r(!0),className:"group relative overflow-hidden rounded-[var(--radius-md)] px-5 py-2 font-[var(--font-weight-medium)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]"},e.createElement("span",{className:"absolute inset-0 feature-glow opacity-60 group-hover:opacity-80 transition-opacity"}),e.createElement("span",{className:"relative"},"Fancy trigger ✨")),e.createElement(o,{open:t,onOpenChange:r,variant:"danger"},e.createElement(o.Title,{className:"px-[var(--spacing-5)] pt-[var(--spacing-5)] text-[var(--font-size-xl)] font-[var(--font-weight-bold)]"},"Nuke workspace?"),e.createElement(o.Description,{className:"px-[var(--spacing-5)] pt-[var(--spacing-2)] text-[var(--font-size-sm)] text-[var(--color-text-muted)]"},"Export your data first — this action is permanent."),e.createElement(o.Actions,null,e.createElement(o.Cancel,{asChild:!0},e.createElement(A,null,"I’ll export first")),e.createElement(o.Action,{autoFocus:!0},"Do it"))))},parameters:{docs:{description:{story:"`asChild` lets you use any custom button as the trigger without losing accessibility or behavior."}}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Destructive (danger)",
  render: args => <ControlledDemo buttonTitle="Delete" title="Delete “QK-21”?" description="This permanently removes all files and settings. You can’t undo this action." actionLabel="Delete" {...args} />,
  parameters: {
    docs: {
      description: {
        story: "Use \`danger\` for irreversible actions. The primary button uses your danger tokens; initial focus lands there so Enter confirms."
      }
    }
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledDemo variant="neutral" title="Archive item?" description="You can restore it later from Settings → Archive." actionLabel="Archive" actionTone="neutral" {...args} />,
  parameters: {
    docs: {
      description: {
        story: "Neutral tone for reversible or low-risk operations (Archive/Move/Sign out)."
      }
    }
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const Se=["Destructive","Neutral","WithLongContent","FancyTrigger"];export{v as Destructive,x as FancyTrigger,f as Neutral,h as WithLongContent,Se as __namedExportsOrder,_e as default};

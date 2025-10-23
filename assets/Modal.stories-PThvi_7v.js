import{r as e}from"./iframe-C_g90xlo.js";import{T as E,R as N,P as C,O as z,C as M,a as k,D as O,b as T}from"./index-BtezfDVf.js";import{t as S,c as B}from"./bundle-mjs-BJeS7sC5.js";import{c as R}from"./index-CE2vBQ91.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D7GSPBPt.js";import"./index-CkBqJvDx.js";import"./index-2I2xUPBQ.js";import"./index-UWjYWlIG.js";import"./index-v4X8a-Ap.js";import"./index-DyJFS1P0.js";import"./index-BbgTdLap.js";const D=`
  fixed inset-0 z-[var(--z-overlay,1000)]
  bg-[var(--overlay-bg,hsla(220,10%,5%,0.5))]
  data-[state=open]:animate-fade-in
  data-[state=closed]:animate-fade-out
`,A=`
  fixed left-1/2 top-1/2 z-[calc(var(--z-overlay,1000)+1)]
  -translate-x-1/2 -translate-y-1/2
  bg-[var(--color-surface)] text-[var(--color-text-primary)]
  shadow-[var(--elevation-3,0_20px_40px_rgba(0,0,0,.18))]
  outline-none
  data-[state=open]:animate-zoom-in
  data-[state=closed]:animate-zoom-out
`,V=R(A,{variants:{size:{sm:"w-[90vw] max-w-[28rem] rounded-[var(--radius-md)]",md:"w-[90vw] max-w-[36rem] rounded-[var(--radius-md)]",lg:`
        w-screen h-screen rounded-none
        sm:w-[90vw] sm:max-w-[48rem] sm:h-auto sm:rounded-[var(--radius-lg)]
      `,xl:`
        w-screen h-screen rounded-none
        sm:w-[90vw] sm:max-w-[64rem] sm:h-auto sm:rounded-[var(--radius-lg)]
      `,full:"w-screen h-screen rounded-none"},scrollBehavior:{inside:"",outside:""}},defaultVariants:{size:"md",scrollBehavior:"inside"}});function c(...t){return S(B(t))}const h=({open:t,onOpenChange:r,dismissible:o=!0,size:s="md",scrollBehavior:a="inside",children:g})=>e.createElement(N,{open:t,onOpenChange:r},e.createElement(C,null,e.createElement(z,{className:D}),e.createElement(M,{onEscapeKeyDown:l=>{o||l.preventDefault()},onPointerDownOutside:l=>{o||l.preventDefault()},onInteractOutside:l=>{o||l.preventDefault()},className:V({size:s,scrollBehavior:a})},e.createElement("div",{"data-scroll":a,className:c("flex max-h-[min(85vh,100%)] min-w-0 flex-col",s==="full"?"h-screen":"h-auto")},g)))),I=E,q=e.forwardRef(function({className:r,...o},s){return e.createElement(T,{ref:s,className:c("px-[var(--spacing-5)] pt-[var(--spacing-5)] text-[var(--font-size-xl)] font-[var(--font-weight-bold)]",r),...o})}),W=e.forwardRef(function({className:r,...o},s){return e.createElement(O,{ref:s,className:c("px-[var(--spacing-5)] pt-[var(--spacing-2)] text-[var(--font-size-sm)] text-[var(--color-text-muted)]",r),...o})}),_=e.forwardRef(function({className:r,...o},s){return e.createElement("div",{ref:s,className:c("px-[var(--spacing-5)] py-[var(--spacing-4)]","data-[scroll=inside]:overflow-y-auto data-[scroll=inside]:[scrollbar-gutter:stable]",r),...o})}),G=e.forwardRef(function({className:r,...o},s){return e.createElement("div",{ref:s,className:c("mt-auto flex items-center gap-[var(--spacing-3)]","p-[var(--spacing-5)] border-t border-[var(--color-border)]","data-[scroll=inside]:sticky data-[scroll=inside]:bottom-0 data-[scroll=inside]:bg-[var(--color-surface)]"),...o})}),F=e.forwardRef(function({className:r,...o},s){return e.createElement(k,{ref:s,className:c("absolute right-[var(--spacing-4)] top-[var(--spacing-4)] inline-flex items-center justify-center rounded-[var(--radius-full)] p-[var(--spacing-2)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]",r),...o})}),n=Object.assign(h,{Trigger:I,Content:t=>e.createElement(h,{...t}),Title:q,Description:W,Body:_,Actions:G,Close:F});h.__docgenInfo={description:"",methods:[],displayName:"ModalRoot",props:{open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},dismissible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:'VariantProps["size"]',raw:'VariantProps<typeof contentSizes>["size"]'},description:"",defaultValue:{value:'"md"',computed:!1}},scrollBehavior:{required:!1,tsType:{name:"union",raw:'"inside" | "outside"',elements:[{name:"literal",value:'"inside"'},{name:"literal",value:'"outside"'}]},description:"",defaultValue:{value:'"inside"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ee={title:"Overlay/Modal",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:["A general-purpose modal built on robust overlay primitives.","","## When to use","- Short forms, wizards, or task flows that don’t justify a new page.","- Rich previews or settings where context is helpful.","","## A11y contract (WCAG 2.2 AA)","- **Keyboard**: Tab/Shift+Tab cycles within; **Esc** dismisses when `dismissible`.","- **Focus**: Moves to the first focusable on open; **returns to trigger** on close.","- **Labelling**: Provide `<Modal.Title />` and optional `<Modal.Description />`.","- **Motion**: Respects `prefers-reduced-motion`.","","## Scrolling strategy","- `inside`: Content pane scrolls; actions stay **sticky**. Best for long text.","- `outside`: No inner scroll area; body is locked. Best for short content."].join(`
`)}}},argTypes:{size:{control:{type:"inline-radio"},options:["sm","md","lg","xl","full"],description:"Modal size breakpoint (lg/xl auto full-screen on small viewports).",table:{defaultValue:{summary:"md"}}},dismissible:{control:"boolean",description:"Esc & outside click dismiss",table:{defaultValue:{summary:"true"}}},scrollBehavior:{control:{type:"inline-radio"},options:["inside","outside"],description:"Where scrolling occurs. `inside` keeps actions sticky; `outside` locks page scroll.",table:{defaultValue:{summary:"inside"}}},open:{control:!1,description:"Controlled open state. Stories here manage it to keep triggers visible."},onOpenChange:{control:!1}},args:{size:"md",dismissible:!0,scrollBehavior:"inside"}},w=t=>e.createElement("button",{...t,className:"rounded-[var(--radius-md)] px-4 py-2 font-[var(--font-weight-medium)] text-white bg-[var(--color-brand)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]"}),x=t=>e.createElement("button",{...t,className:"rounded-[var(--radius-md)] px-3 py-2 border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]"});function i({title:t,description:r,size:o="md",dismissible:s=!0,scrollBehavior:a="inside",children:g,showCloseIcon:l=!0}){const[y,d]=e.useState(!1);return e.createElement("div",{className:"flex flex-col items-center gap-4"},e.createElement(w,{onClick:()=>d(!0)},"Open modal"),e.createElement(n,{open:y,onOpenChange:d,size:o,dismissible:s,scrollBehavior:a},e.createElement(n.Title,null,t),r?e.createElement(n.Description,null,r):null,e.createElement(n.Body,null,g),e.createElement(n.Actions,null,e.createElement(x,{onClick:()=>d(!1)},"Cancel"),e.createElement(w,{onClick:()=>d(!1)},"Continue")),l&&e.createElement(n.Close,{"aria-label":"Close"},"✕")))}const m={name:"Default (md, inside, dismissible)",render:t=>e.createElement(i,{title:"Invite collaborators",description:"Share access with your team. You can change permissions later.",...t,size:t.size??"md"},e.createElement("div",{className:"space-y-3"},e.createElement("label",{className:"block"},e.createElement("span",{className:"text-[var(--color-text-muted)] text-[var(--font-size-sm)]"},"Email"),e.createElement("input",{className:"mt-1 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--color-brand)]",placeholder:"name@company.com"})),e.createElement("label",{className:"block"},e.createElement("span",{className:"text-[var(--color-text-muted)] text-[var(--font-size-sm)]"},"Role"),e.createElement("select",{className:"mt-1 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--color-brand)]"},e.createElement("option",null,"Viewer"),e.createElement("option",null,"Editor"),e.createElement("option",null,"Admin"))))),parameters:{docs:{description:{story:"Shows the recommended labeling pattern (Title + optional Description) and a short form. Esc/outside dismiss are enabled (`dismissible`)."}}}},p={render:()=>{const t=({size:r,label:o})=>{const[s,a]=e.useState(!1);return e.createElement("div",{className:"flex flex-col items-center gap-2"},e.createElement(x,{onClick:()=>a(!0)},o),e.createElement(n,{open:s,onOpenChange:a,size:r},e.createElement(n.Title,null,o," modal"),e.createElement(n.Body,null,e.createElement("p",{className:"text-[var(--color-text-muted)]"},"Try resizing the viewport. `lg` and `xl` become full-screen on small screens."),e.createElement("div",{className:"h-40"})),e.createElement(n.Actions,null,e.createElement(x,{onClick:()=>a(!1)},"Close")),e.createElement(n.Close,{"aria-label":"Close"},"✕")))};return e.createElement("div",{className:"grid grid-cols-2 gap-6"},e.createElement(t,{size:"sm",label:"Open sm"}),e.createElement(t,{size:"md",label:"Open md"}),e.createElement(t,{size:"lg",label:"Open lg"}),e.createElement(t,{size:"xl",label:"Open xl"}),e.createElement(t,{size:"full",label:"Open full"}))},parameters:{docs:{description:{story:"Validate how your content reflows across size variants. On mobile, `lg` and `xl` transition to a full-screen presentation."}}}},u={render:()=>{const t=e.createElement("div",{className:"space-y-3 max-h-[45vh] overflow-y-auto [scrollbar-gutter:stable]"},Array.from({length:16},(o,s)=>e.createElement("p",{key:s,className:"text-[var(--font-size-sm)] text-[var(--color-text-muted)]"},"Clause ",s+1,". This line demonstrates ",e.createElement("strong",null,"inside")," ","scroll with sticky actions."))),r=e.createElement("div",{className:"space-y-3"},e.createElement("p",{className:"text-[var(--color-text-muted)]"},"With ",e.createElement("code",null,"outside"),", page scroll is locked while the modal is open. Use this when content is short and doesn’t need its own scroll area."),e.createElement("div",{className:"h-40"}));return e.createElement("div",{className:"grid w-full max-w-[70rem] grid-cols-1 gap-8 md:grid-cols-2"},e.createElement("div",{className:"rounded-[var(--radius-md)] border border-[var(--color-border)] p-4"},e.createElement("h3",{className:"mb-2 text-[var(--font-size-lg)] font-[var(--font-weight-bold)]"},"Inside scroll (sticky actions)"),e.createElement("p",{className:"mb-4 text-[var(--font-size-sm)] text-[var(--color-text-muted)]"},"Content scrolls in an inner area; action bar stays visible."),e.createElement(i,{title:"Terms & Conditions",description:"Scroll the content; actions stay visible.",size:"lg",scrollBehavior:"inside"},t)),e.createElement("div",{className:"rounded-[var(--radius-md)] border border-[var(--color-border)] p-4"},e.createElement("h3",{className:"mb-2 text-[var(--font-size-lg)] font-[var(--font-weight-bold)]"},"Outside scroll (page locked)"),e.createElement("p",{className:"mb-4 text-[var(--font-size-sm)] text-[var(--color-text-muted)]"},"No inner scroller; body is locked while open."),e.createElement(i,{title:"Review summary",description:"Modal content fits; page scroll is locked.",size:"md",scrollBehavior:"outside"},r)))},parameters:{docs:{description:{story:"Choose `inside` for long reading/wizard flows; choose `outside` for shorter interactions with fewer elements."}}}},v={name:"Non-dismissible (Esc/outside disabled)",render:()=>e.createElement(i,{title:"Complete required fields",description:"Finish the form or click Continue.",dismissible:!1,size:"sm"},e.createElement("p",{className:"text-[var(--color-text-muted)]"},"This modal can’t be closed with Esc or by clicking outside. Use for critical flows that require an explicit choice.")),parameters:{docs:{description:{story:"Non-dismissible modals should be rare. Always give a clear primary action, and ensure there’s a safe escape like **Cancel**."}}}},f={name:"Mobile → full-screen behavior",parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Resize the viewport: `lg`/`xl` adapt to a full-screen drawer-like presentation for better ergonomics on mobile."}}},render:()=>e.createElement(i,{title:"Mobile full-screen",description:"On small screens, lg/xl expand to full-screen.",size:"xl"},e.createElement("div",{className:"space-y-3"},e.createElement("p",{className:"text-[var(--color-text-muted)]"},"Keep actions accessible and consider larger touch targets on mobile."),e.createElement("div",{className:"h-40"})))},b={name:"With close icon (top-right)",render:()=>e.createElement(i,{title:"Quick peek",description:"Close with the ✕ icon or actions.",size:"md",showCloseIcon:!0},e.createElement("div",{className:"h-32"})),parameters:{docs:{description:{story:"Good for passive previews. For task flows, rely on explicit actions (Continue/Cancel) to prevent accidental loss."}}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Default (md, inside, dismissible)",
  render: args => <ControlledModal title="Invite collaborators" description="Share access with your team. You can change permissions later." {...args} size={args.size ?? "md"}>
      <div className="space-y-3">
        <label className="block">
          <span className="text-[var(--color-text-muted)] text-[var(--font-size-sm)]">
            Email
          </span>
          <input className="mt-1 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--color-brand)]" placeholder="name@company.com" />
        </label>
        <label className="block">
          <span className="text-[var(--color-text-muted)] text-[var(--font-size-sm)]">
            Role
          </span>
          <select className="mt-1 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--color-brand)]">
            <option>Viewer</option>
            <option>Editor</option>
            <option>Admin</option>
          </select>
        </label>
      </div>
    </ControlledModal>,
  parameters: {
    docs: {
      description: {
        story: "Shows the recommended labeling pattern (Title + optional Description) and a short form. " + "Esc/outside dismiss are enabled (\`dismissible\`)."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Example = ({
      size,
      label
    }: {
      size: "sm" | "md" | "lg" | "xl" | "full";
      label: string;
    }) => {
      const [open, setOpen] = React.useState(false);
      return <div className="flex flex-col items-center gap-2">
          <GhostBtn onClick={() => setOpen(true)}>{label}</GhostBtn>
          <Modal open={open} onOpenChange={setOpen} size={size}>
            <Modal.Title>{label} modal</Modal.Title>
            <Modal.Body>
              <p className="text-[var(--color-text-muted)]">
                Try resizing the viewport. \`lg\` and \`xl\` become full-screen on
                small screens.
              </p>
              <div className="h-40" />
            </Modal.Body>
            <Modal.Actions>
              <GhostBtn onClick={() => setOpen(false)}>Close</GhostBtn>
            </Modal.Actions>
            <Modal.Close aria-label="Close">✕</Modal.Close>
          </Modal>
        </div>;
    };
    return <div className="grid grid-cols-2 gap-6">
        <Example size="sm" label="Open sm" />
        <Example size="md" label="Open md" />
        <Example size="lg" label="Open lg" />
        <Example size="xl" label="Open xl" />
        <Example size="full" label="Open full" />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Validate how your content reflows across size variants. On mobile, \`lg\` and \`xl\` transition to a full-screen presentation."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const InsideContent = <div className="space-y-3 max-h-[45vh] overflow-y-auto [scrollbar-gutter:stable]">
        {Array.from({
        length: 16
      }, (_, i) => <p key={i} className="text-[var(--font-size-sm)] text-[var(--color-text-muted)]">
            Clause {i + 1}. This line demonstrates <strong>inside</strong>{" "}
            scroll with sticky actions.
          </p>)}
      </div>;
    const OutsideContent = <div className="space-y-3">
        <p className="text-[var(--color-text-muted)]">
          With <code>outside</code>, page scroll is locked while the modal is
          open. Use this when content is short and doesn’t need its own scroll
          area.
        </p>
        <div className="h-40" />
      </div>;
    return <div className="grid w-full max-w-[70rem] grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] p-4">
          <h3 className="mb-2 text-[var(--font-size-lg)] font-[var(--font-weight-bold)]">
            Inside scroll (sticky actions)
          </h3>
          <p className="mb-4 text-[var(--font-size-sm)] text-[var(--color-text-muted)]">
            Content scrolls in an inner area; action bar stays visible.
          </p>
          <ControlledModal title="Terms & Conditions" description="Scroll the content; actions stay visible." size="lg" scrollBehavior="inside">
            {InsideContent}
          </ControlledModal>
        </div>

        <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] p-4">
          <h3 className="mb-2 text-[var(--font-size-lg)] font-[var(--font-weight-bold)]">
            Outside scroll (page locked)
          </h3>
          <p className="mb-4 text-[var(--font-size-sm)] text-[var(--color-text-muted)]">
            No inner scroller; body is locked while open.
          </p>
          <ControlledModal title="Review summary" description="Modal content fits; page scroll is locked." size="md" scrollBehavior="outside">
            {OutsideContent}
          </ControlledModal>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Choose \`inside\` for long reading/wizard flows; choose \`outside\` for shorter interactions with fewer elements."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Non-dismissible (Esc/outside disabled)",
  render: () => <ControlledModal title="Complete required fields" description="Finish the form or click Continue." dismissible={false} size="sm">
      <p className="text-[var(--color-text-muted)]">
        This modal can’t be closed with Esc or by clicking outside. Use for
        critical flows that require an explicit choice.
      </p>
    </ControlledModal>,
  parameters: {
    docs: {
      description: {
        story: "Non-dismissible modals should be rare. Always give a clear primary action, and ensure there’s a safe escape like **Cancel**."
      }
    }
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Mobile → full-screen behavior",
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    },
    docs: {
      description: {
        story: "Resize the viewport: \`lg\`/\`xl\` adapt to a full-screen drawer-like presentation for better ergonomics on mobile."
      }
    }
  },
  render: () => <ControlledModal title="Mobile full-screen" description="On small screens, lg/xl expand to full-screen." size="xl">
      <div className="space-y-3">
        <p className="text-[var(--color-text-muted)]">
          Keep actions accessible and consider larger touch targets on mobile.
        </p>
        <div className="h-40" />
      </div>
    </ControlledModal>
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "With close icon (top-right)",
  render: () => <ControlledModal title="Quick peek" description="Close with the ✕ icon or actions." size="md" showCloseIcon>
      <div className="h-32" />
    </ControlledModal>,
  parameters: {
    docs: {
      description: {
        story: "Good for passive previews. For task flows, rely on explicit actions (Continue/Cancel) to prevent accidental loss."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};const te=["Default","Sizes","ScrollInsideVsOutside","NonDismissible","MobileFullscreen","WithCloseIcon"];export{m as Default,f as MobileFullscreen,v as NonDismissible,u as ScrollInsideVsOutside,p as Sizes,b as WithCloseIcon,te as __namedExportsOrder,ee as default};

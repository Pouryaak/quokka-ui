import{e}from"./iframe-B0LassJS.js";import{c}from"./index-B8k91cqS.js";import{t as n}from"./bundle-mjs-Ct12j0u0.js";import{d as w,D as N,f as C,g as T,e as E,a as v,b as B,c as D}from"./index-JYoth5y-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-H1f7Wu5C.js";import"./index-Cs0riu9_.js";import"./index-BeiLhXI-.js";import"./index-8YRTKl2Q.js";import"./index-CzFWJezh.js";import"./index-_266PJnF.js";import"./index-CmpzIQg5.js";import"./index-cRNFonA6.js";import"./index-VGe-NDq1.js";import"./index-pjeOVdX6.js";import"./index-DLF47qJP.js";const L=c("fixed inset-0 z-50 bg-[var(--overlay-bg)] data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out"),R=c(["fixed z-50 flex flex-col bg-surface text-text-primary shadow-lg","focus-visible:outline-none","data-[state=open]:animate-in data-[state=closed]:animate-out"].join(" "),{variants:{side:{top:["inset-x-0 top-0 border-b border-border/40","data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top"].join(" "),bottom:["inset-x-0 bottom-0 border-t border-border/40","data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom"].join(" "),left:["inset-y-0 left-0 h-full border-r border-border/40","data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left"].join(" "),right:["inset-y-0 right-0 h-full border-l border-border/40","data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right"].join(" ")},width:{sm:"",md:"",lg:"",xl:"",full:""}},compoundVariants:[...["top","bottom"].flatMap(r=>[{side:r,width:"sm",className:"h-1/4"},{side:r,width:"md",className:"h-1/3"},{side:r,width:"lg",className:"h-1/2"},{side:r,width:"xl",className:"h-3/4"},{side:r,width:"full",className:"h-screen"}]),...["left","right"].flatMap(r=>[{side:r,width:"sm",className:"w-[min(90vw,24rem)] max-w-sm"},{side:r,width:"md",className:"w-[min(90vw,32rem)] max-w-md"},{side:r,width:"lg",className:"w-[min(90vw,40rem)] max-w-lg"},{side:r,width:"xl",className:"w-[min(90vw,48rem)] max-w-xl"},{side:r,width:"full",className:"w-screen max-w-full"}])],defaultVariants:{side:"right",width:"md"}}),d=({side:r,width:a,...o})=>e.createElement(N,{...o});d.displayName="Sheet";const P=w,p=e.forwardRef(({className:r,side:a,width:o,children:S,...y},b)=>e.createElement(v,null,e.createElement(B,{className:L()}),e.createElement(D,{ref:b,className:n(R({side:a,width:o}),r),...y},S)));p.displayName="Sheet.Content";const u=e.forwardRef(({className:r,...a},o)=>e.createElement(E,{ref:o,className:n("absolute right-4 top-4 rounded-sm p-1 text-text-muted hover:text-text-primary transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",r),...a},e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},e.createElement("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})),e.createElement("span",{className:"sr-only"},"Close")));u.displayName="Sheet.Close";const h=e.forwardRef(({className:r,...a},o)=>e.createElement(T,{ref:o,className:n("px-6 pt-6 text-lg font-bold text-text-primary",r),...a}));h.displayName="Sheet.Title";const x=e.forwardRef(({className:r,...a},o)=>e.createElement(C,{ref:o,className:n("px-6 pt-2 text-sm text-text-muted",r),...a}));x.displayName="Sheet.Description";const f=e.forwardRef(({className:r,...a},o)=>e.createElement("div",{ref:o,className:n("flex-1 overflow-y-auto px-6 py-4",r),...a}));f.displayName="Sheet.Body";const g=e.forwardRef(({className:r,...a},o)=>e.createElement("div",{ref:o,className:n("flex items-center justify-end gap-3 border-t border-border/40 px-6 py-4",r),...a}));g.displayName="Sheet.Footer";const t=Object.assign(d,{Trigger:P,Content:p,Close:u,Title:h,Description:x,Body:f,Footer:g});d.__docgenInfo={description:"",methods:[],displayName:"Sheet",props:{side:{required:!1,tsType:{name:'VariantProps["side"]',raw:'VariantProps<typeof sheetContentStyles>["side"]'},description:""},width:{required:!1,tsType:{name:'VariantProps["width"]',raw:'VariantProps<typeof sheetContentStyles>["width"]'},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Q={title:"Components/Sheet",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A slide-in panel built on Radix Dialog. Supports four sides (top, right, bottom, left), multiple widths, and includes Title, Description, Body, and Footer layout slots."}}}},s={render:()=>e.createElement(t,null,e.createElement(t.Trigger,{className:"rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary cursor-pointer hover:bg-surface-muted/80"},"Open sheet"),e.createElement(t.Content,null,e.createElement(t.Title,null,"Sheet Title"),e.createElement(t.Description,null,"This is a sheet panel that slides in from the right."),e.createElement(t.Body,null,e.createElement("p",{className:"text-sm text-text-muted"},"Sheet content goes here. You can put forms, lists, or any content that benefits from a side panel layout.")),e.createElement(t.Footer,null,e.createElement(t.Close,{className:"rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary cursor-pointer hover:bg-surface-muted/80"},"Cancel"),e.createElement("button",{className:"rounded-md bg-brand px-4 py-2 text-sm text-black cursor-pointer"},"Save")),e.createElement(t.Close,null)))},l={render:()=>e.createElement(t,null,e.createElement(t.Trigger,{className:"rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary cursor-pointer"},"Left sheet"),e.createElement(t.Content,{side:"left"},e.createElement(t.Title,null,"Navigation"),e.createElement(t.Body,null,e.createElement("p",{className:"text-sm text-text-muted"},"Left-side drawer content.")),e.createElement(t.Close,null)))},m={render:()=>e.createElement(t,null,e.createElement(t.Trigger,{className:"rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary cursor-pointer"},"Top sheet"),e.createElement(t.Content,{side:"top"},e.createElement(t.Title,null,"Top Panel"),e.createElement(t.Body,null,e.createElement("p",{className:"text-sm text-text-muted"},"Top drawer content.")),e.createElement(t.Close,null)))},i={render:()=>e.createElement(t,null,e.createElement(t.Trigger,{className:"rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary cursor-pointer"},"Bottom sheet"),e.createElement(t.Content,{side:"bottom"},e.createElement(t.Title,null,"Bottom Panel"),e.createElement(t.Body,null,e.createElement("p",{className:"text-sm text-text-muted"},"Bottom drawer content.")),e.createElement(t.Close,null)))};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <Sheet.Trigger className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary cursor-pointer hover:bg-surface-muted/80">
        Open sheet
      </Sheet.Trigger>
      <Sheet.Content>
        <Sheet.Title>Sheet Title</Sheet.Title>
        <Sheet.Description>
          This is a sheet panel that slides in from the right.
        </Sheet.Description>
        <Sheet.Body>
          <p className="text-sm text-text-muted">
            Sheet content goes here. You can put forms, lists, or any content
            that benefits from a side panel layout.
          </p>
        </Sheet.Body>
        <Sheet.Footer>
          <Sheet.Close className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary cursor-pointer hover:bg-surface-muted/80">
            Cancel
          </Sheet.Close>
          <button className="rounded-md bg-brand px-4 py-2 text-sm text-black cursor-pointer">
            Save
          </button>
        </Sheet.Footer>
        <Sheet.Close />
      </Sheet.Content>
    </Sheet>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <Sheet.Trigger className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary cursor-pointer">
        Left sheet
      </Sheet.Trigger>
      <Sheet.Content side="left">
        <Sheet.Title>Navigation</Sheet.Title>
        <Sheet.Body>
          <p className="text-sm text-text-muted">Left-side drawer content.</p>
        </Sheet.Body>
        <Sheet.Close />
      </Sheet.Content>
    </Sheet>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <Sheet.Trigger className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary cursor-pointer">
        Top sheet
      </Sheet.Trigger>
      <Sheet.Content side="top">
        <Sheet.Title>Top Panel</Sheet.Title>
        <Sheet.Body>
          <p className="text-sm text-text-muted">Top drawer content.</p>
        </Sheet.Body>
        <Sheet.Close />
      </Sheet.Content>
    </Sheet>
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <Sheet.Trigger className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary cursor-pointer">
        Bottom sheet
      </Sheet.Trigger>
      <Sheet.Content side="bottom">
        <Sheet.Title>Bottom Panel</Sheet.Title>
        <Sheet.Body>
          <p className="text-sm text-text-muted">Bottom drawer content.</p>
        </Sheet.Body>
        <Sheet.Close />
      </Sheet.Content>
    </Sheet>
}`,...i.parameters?.docs?.source}}};const U=["Default","Left","Top","Bottom"];export{i as Bottom,s as Default,l as Left,m as Top,U as __namedExportsOrder,Q as default};

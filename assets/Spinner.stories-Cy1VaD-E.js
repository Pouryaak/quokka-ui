import{S as s}from"./Spinner-DN_oH_WJ.js";import{e}from"./iframe-C_g90xlo.js";import"./index-CE2vBQ91.js";import"./bundle-mjs-BJeS7sC5.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Feedback/Spinner",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},thickness:{control:"select",options:["thin","normal","thick"]},decorative:{control:"boolean"},label:{control:"text"}},parameters:{layout:"centered"}},t={args:{size:"md",thickness:"normal",decorative:!1,label:"Loading"}},a={render:()=>e.createElement("div",{className:"flex items-center gap-4 text-text-primary"},e.createElement("div",{className:"flex items-center gap-2"},e.createElement(s,{size:"sm"})," ",e.createElement("span",{className:"text-sm"},"sm")),e.createElement("div",{className:"flex items-center gap-2"},e.createElement(s,{size:"md"})," ",e.createElement("span",{className:"text-base"},"md")),e.createElement("div",{className:"flex items-center gap-2"},e.createElement(s,{size:"lg"})," ",e.createElement("span",{className:"text-lg"},"lg")))},n={render:()=>e.createElement("div",{className:"flex items-center gap-6 text-text-primary"},e.createElement("div",{className:"flex flex-col items-center gap-2"},e.createElement(s,{size:"lg",thickness:"thin"})," ",e.createElement("span",{className:"text-sm"},"thin")),e.createElement("div",{className:"flex flex-col items-center gap-2"},e.createElement(s,{size:"lg",thickness:"normal"})," ",e.createElement("span",{className:"text-sm"},"normal")),e.createElement("div",{className:"flex flex-col items-center gap-2"},e.createElement(s,{size:"lg",thickness:"thick"})," ",e.createElement("span",{className:"text-sm"},"thick")))},r={render:()=>e.createElement("button",{type:"button",className:"inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 font-medium text-on-brand"},"Save",e.createElement(s,{size:"sm",decorative:!0}),e.createElement("span",{className:"sr-only"},"Loading")),parameters:{docs:{description:{story:"Use `decorative` inside composite controls and provide your own SR-only label."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
    thickness: "normal",
    decorative: false,
    label: "Loading"
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4 text-text-primary">
      <div className="flex items-center gap-2">
        <Spinner size="sm" /> <span className="text-sm">sm</span>
      </div>
      <div className="flex items-center gap-2">
        <Spinner size="md" /> <span className="text-base">md</span>
      </div>
      <div className="flex items-center gap-2">
        <Spinner size="lg" /> <span className="text-lg">lg</span>
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6 text-text-primary">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" thickness="thin" />{" "}
        <span className="text-sm">thin</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" thickness="normal" />{" "}
        <span className="text-sm">normal</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" thickness="thick" />{" "}
        <span className="text-sm">thick</span>
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <button type="button" className="inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 font-medium text-on-brand">
      Save
      <Spinner size="sm" decorative />
      <span className="sr-only">Loading</span>
    </button>,
  parameters: {
    docs: {
      description: {
        story: "Use \`decorative\` inside composite controls and provide your own SR-only label."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const d=["Default","Sizes","Thickness","DecorativeInsideButton"];export{r as DecorativeInsideButton,t as Default,a as Sizes,n as Thickness,d as __namedExportsOrder,p as default};

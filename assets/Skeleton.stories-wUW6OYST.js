import{e}from"./iframe-B0LassJS.js";import{c as d}from"./index-B8k91cqS.js";import{t as p}from"./bundle-mjs-Ct12j0u0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";const g=d("animate-pulse rounded-sm bg-surface-muted motion-reduce:animate-none",{variants:{variant:{text:"h-4 w-full",circle:"rounded-full",rectangle:""}},defaultVariants:{variant:"text"}}),a=e.forwardRef(({className:o,variant:c,...m},i)=>e.createElement("div",{ref:i,role:"status","aria-label":"Loading",className:p(g({variant:c}),o),...m},e.createElement("span",{className:"sr-only"},"Loading")));a.displayName="Skeleton";a.__docgenInfo={description:"",methods:[],displayName:"Skeleton"};const w={title:"Components/Skeleton",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A loading placeholder that animates with a pulse. Use `variant` to control shape: `text` for lines, `circle` for avatars, `rectangle` for cards and blocks."}}},argTypes:{variant:{control:"inline-radio",options:["text","circle","rectangle"],table:{category:"Appearance"}},className:{control:"text",description:"Override or extend styles",table:{category:"Appearance"}}},args:{variant:"text"}},r={args:{variant:"text",className:"w-64"}},t={args:{variant:"circle",className:"h-12 w-12"}},s={args:{variant:"rectangle",className:"h-32 w-64"}},n={render:()=>e.createElement("div",{className:"flex w-80 flex-col gap-3 rounded-xl border border-border/40 bg-surface p-4"},e.createElement(a,{variant:"rectangle",className:"h-40 w-full rounded-lg"}),e.createElement(a,{variant:"text",className:"w-3/4"}),e.createElement(a,{variant:"text",className:"w-1/2"}),e.createElement("div",{className:"flex items-center gap-2 pt-2"},e.createElement(a,{variant:"circle",className:"h-8 w-8"}),e.createElement(a,{variant:"text",className:"w-24"})))},l={render:()=>e.createElement("div",{className:"flex w-80 flex-col gap-3"},Array.from({length:5}).map((o,c)=>e.createElement("div",{key:c,className:"flex items-center gap-3"},e.createElement(a,{variant:"circle",className:"h-10 w-10"}),e.createElement("div",{className:"flex flex-1 flex-col gap-1.5"},e.createElement(a,{variant:"text",className:"w-2/3"}),e.createElement(a,{variant:"text",className:"w-1/2"})))))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text",
    className: "w-64"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "circle",
    className: "h-12 w-12"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "rectangle",
    className: "h-32 w-64"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-3 rounded-xl border border-border/40 bg-surface p-4">
      <Skeleton variant="rectangle" className="h-40 w-full rounded-lg" />
      <Skeleton variant="text" className="w-3/4" />
      <Skeleton variant="text" className="w-1/2" />
      <div className="flex items-center gap-2 pt-2">
        <Skeleton variant="circle" className="h-8 w-8" />
        <Skeleton variant="text" className="w-24" />
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-3">
      {Array.from({
      length: 5
    }).map((_, i) => <div key={i} className="flex items-center gap-3">
          <Skeleton variant="circle" className="h-10 w-10" />
          <div className="flex flex-1 flex-col gap-1.5">
            <Skeleton variant="text" className="w-2/3" />
            <Skeleton variant="text" className="w-1/2" />
          </div>
        </div>)}
    </div>
}`,...l.parameters?.docs?.source}}};const E=["Text","Circle","Rectangle","CardExample","ListExample"];export{n as CardExample,t as Circle,l as ListExample,s as Rectangle,r as Text,E as __namedExportsOrder,w as default};

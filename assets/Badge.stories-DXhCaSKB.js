import{B as r}from"./Badge-C2SLFzRI.js";import{e}from"./iframe-B0LassJS.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-Ct12j0u0.js";import"./preload-helper-PPVm8Dsz.js";const f={title:"Components/Badge",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A non-interactive badge for statuses, labels, and counts. Supports solid, outline, and subtle variants across six semantic intents."}}},argTypes:{variant:{control:"inline-radio",options:["solid","outline","subtle"],table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},intent:{control:"inline-radio",options:["neutral","brand","success","danger","warning","info"],table:{category:"Appearance"}},children:{description:"Badge label",table:{category:"Content"}}},args:{variant:"subtle",size:"md",intent:"neutral",children:"Badge"}},t={},s={args:{variant:"solid",intent:"brand",children:"Solid"}},i={args:{variant:"outline",intent:"brand",children:"Outline"}},o={args:{variant:"subtle",intent:"brand",children:"Subtle"}},l={render:a=>e.createElement("div",{className:"flex flex-wrap gap-2"},["neutral","brand","success","danger","warning","info"].map(n=>e.createElement(r,{key:n,...a,intent:n},n)))},c={render:()=>e.createElement("div",{className:"flex flex-col gap-4"},["solid","outline","subtle"].map(a=>e.createElement("div",{key:a,className:"flex flex-wrap items-center gap-2"},e.createElement("span",{className:"w-16 text-xs text-text-muted"},a),["neutral","brand","success","danger","warning","info"].map(n=>e.createElement(r,{key:n,variant:a,intent:n},n)))))},d={render:a=>e.createElement("div",{className:"flex items-center gap-2"},e.createElement(r,{...a,size:"sm"},"Small"),e.createElement(r,{...a,size:"md"},"Medium"),e.createElement(r,{...a,size:"lg"},"Large")),args:{variant:"solid",intent:"brand"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    intent: "brand",
    children: "Solid"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    intent: "brand",
    children: "Outline"
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "subtle",
    intent: "brand",
    children: "Subtle"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-2">
      {(["neutral", "brand", "success", "danger", "warning", "info"] as const).map(intent => <Badge key={intent} {...args} intent={intent}>
          {intent}
        </Badge>)}
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      {(["solid", "outline", "subtle"] as const).map(variant => <div key={variant} className="flex flex-wrap items-center gap-2">
          <span className="w-16 text-xs text-text-muted">{variant}</span>
          {(["neutral", "brand", "success", "danger", "warning", "info"] as const).map(intent => <Badge key={intent} variant={variant} intent={intent}>
              {intent}
            </Badge>)}
        </div>)}
    </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-2">
      <Badge {...args} size="sm">
        Small
      </Badge>
      <Badge {...args} size="md">
        Medium
      </Badge>
      <Badge {...args} size="lg">
        Large
      </Badge>
    </div>,
  args: {
    variant: "solid",
    intent: "brand"
  }
}`,...d.parameters?.docs?.source}}};const x=["Default","Solid","Outline","Subtle","Intents","AllCombinations","Sizes"];export{c as AllCombinations,t as Default,l as Intents,i as Outline,d as Sizes,s as Solid,o as Subtle,x as __namedExportsOrder,f as default};

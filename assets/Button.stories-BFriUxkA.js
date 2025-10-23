import{B as n}from"./Button-DBmr_zz5.js";import{e}from"./iframe-C_g90xlo.js";import"./index-CE2vBQ91.js";import"./bundle-mjs-BJeS7sC5.js";import"./Spinner-DN_oH_WJ.js";import"./preload-helper-PPVm8Dsz.js";const k={title:"Components/Button",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:["A semantic, accessible button that renders as `<button>` for actions or `<a>` for navigation.","","**A11y defaults:**","- Keyboard and screen-reader friendly; visible focus ring.","- `loading` blocks interaction and sets `aria-busy` (link uses `aria-disabled` + `tabIndex=-1`).","- For links, `disabled` mirrors the same behavior as `loading`.","","**When to use:** primary actions, secondary/tertiary actions, and links styled as buttons."].join(`
`)}}},argTypes:{intent:{control:"inline-radio",options:["primary","secondary","ghost"],description:"Visual style",table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],description:"Button size",table:{category:"Appearance"}},children:{description:"Button label",table:{category:"Content"}},startIcon:{control:!1,description:"Left icon",table:{category:"Content"}},endIcon:{control:!1,description:"Right icon",table:{category:"Content"}},loading:{control:"boolean",description:"Shows loading spinner and blocks interaction",table:{category:"Behavior"}},disabled:{control:"boolean",description:"Disables the control",table:{category:"Behavior"}},href:{control:"text",description:"If set, renders as <a>",table:{category:"Behavior"}},target:{control:"text",if:{arg:"href",truthy:!0},table:{category:"Behavior"}},onClick:{action:"clicked",table:{category:"Events"}}},args:{intent:"primary",size:"md",children:"Button",loading:!1,disabled:!1}},t={args:{intent:"primary",children:"Primary"}},a={args:{intent:"secondary",children:"Secondary"}},o={args:{intent:"ghost",children:"Ghost"}},s={render:r=>e.createElement("div",{className:"flex gap-3"},e.createElement(n,{...r,size:"sm"},"Small"),e.createElement(n,{...r,size:"md"},"Medium"),e.createElement(n,{...r,size:"lg"},"Large")),args:{intent:"primary"}},i={args:{...t.args,children:"Button as a Link",href:"https://www.google.com"}},c={args:{children:"Saving",loading:!0}},d={args:{children:"Navigating",loading:!0,href:"#"}},l={args:{children:"Disabled",disabled:!0}},m={args:{children:"Disabled link",disabled:!0,href:"#"}},p=r=>e.createElement("svg",{viewBox:"0 0 24 24",width:"1em",height:"1em","aria-hidden":"true",...r},e.createElement(e.Fragment,null,e.createElement("path",{d:"M5 12h14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),e.createElement("path",{d:"M13 6l6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),g={render:r=>e.createElement("div",{className:"flex items-center gap-3"},e.createElement(n,{...r,startIcon:e.createElement(p,null)},"Start icon"),e.createElement(n,{...r,endIcon:e.createElement(p,null)},"End icon")),args:{intent:"primary",size:"md"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    intent: "primary",
    children: "Primary"
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    intent: "secondary",
    children: "Secondary"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    intent: "ghost",
    children: "Ghost"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-3">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>,
  args: {
    intent: "primary"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Button as a Link",
    href: "https://www.google.com"
  } as ButtonAsAnchorProps
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Saving",
    loading: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Navigating",
    loading: true,
    href: "#"
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Disabled",
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Disabled link",
    disabled: true,
    href: "#"
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-3">
      <Button {...args} startIcon={<Dot />}>
        Start icon
      </Button>
      <Button {...args} endIcon={<Dot />}>
        End icon
      </Button>
    </div>,
  args: {
    intent: "primary",
    size: "md"
  }
}`,...g.parameters?.docs?.source}}};const S=["Primary","Secondary","Ghost","Sizes","AsLink","LoadingButton","LoadingLink","DisabledButton","DisabledLink","WithIcons"];export{i as AsLink,l as DisabledButton,m as DisabledLink,o as Ghost,c as LoadingButton,d as LoadingLink,t as Primary,a as Secondary,s as Sizes,g as WithIcons,S as __namedExportsOrder,k as default};

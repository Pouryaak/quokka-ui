import{A as r}from"./Avatar-DbfbOVy-.js";import{e as a}from"./iframe-B0LassJS.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-Ct12j0u0.js";import"./index-_266PJnF.js";import"./index-8YRTKl2Q.js";import"./index-CzFWJezh.js";import"./index-VGe-NDq1.js";import"./index-Cs0riu9_.js";import"./index-BeiLhXI-.js";import"./preload-helper-PPVm8Dsz.js";const k={title:"Components/Avatar",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"An avatar component built on Radix Avatar. Shows an image with a fallback when the image fails to load or no `src` is provided."}}},argTypes:{size:{control:"inline-radio",options:["sm","md","lg","xl"],table:{category:"Appearance"}},variant:{control:"inline-radio",options:["circle","rounded"],table:{category:"Appearance"}},src:{control:"text",table:{category:"Content"}},alt:{control:"text",table:{category:"Content"}},fallback:{control:"text",description:"Text shown when image fails or isn't provided",table:{category:"Content"}}},args:{size:"md",variant:"circle"}},t={args:{fallback:"John Doe"}},o={render:e=>a.createElement("div",{className:"flex items-center gap-3"},a.createElement(r,{...e,size:"sm",fallback:"JD"}),a.createElement(r,{...e,size:"md",fallback:"JD"}),a.createElement(r,{...e,size:"lg",fallback:"JD"}),a.createElement(r,{...e,size:"xl",fallback:"JD"}))},n={render:e=>a.createElement(r,{...e,variant:"rounded",size:"xl",fallback:"QS"})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    fallback: "John Doe"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-3">
      <Avatar {...args} size="sm" fallback="JD" />
      <Avatar {...args} size="md" fallback="JD" />
      <Avatar {...args} size="lg" fallback="JD" />
      <Avatar {...args} size="xl" fallback="JD" />
    </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Avatar {...args} variant="rounded" size="xl" fallback="QS" />
}`,...n.parameters?.docs?.source}}};const x=["WithFallback","Sizes","Rounded"];export{n as Rounded,o as Sizes,t as WithFallback,x as __namedExportsOrder,k as default};

import{e}from"./iframe-C_g90xlo.js";import{S as t}from"./Select-DV3lu0v6.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-BJeS7sC5.js";import"./index-CkBqJvDx.js";import"./index-2I2xUPBQ.js";import"./index-D7GSPBPt.js";import"./index-CU_uhlYU.js";import"./react-icons.esm-BQB_C1As.js";import"./index-v4X8a-Ap.js";import"./index-DyJFS1P0.js";import"./index-UWjYWlIG.js";import"./index-DyTdLdTh.js";import"./index-CE2vBQ91.js";const C={title:"Components/Select",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:["Accessible select built on Radix UI.","","**Features**","- Outline/subtle variants; sm/md/lg trigger sizes.","- Keyboard nav, typeahead, and ARIA by Radix.","- Highlighted/selected/disabled item styles."].join(`
`)}}},argTypes:{variant:{control:"inline-radio",options:["outline","subtle"],table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},placeholder:{control:"text",table:{category:"Content"}},defaultValue:{control:!1},value:{control:!1},onValueChange:{action:"valueChange"}},args:{variant:"outline",size:"md",placeholder:"Select an option…"}},l=()=>e.createElement(e.Fragment,null,e.createElement(t.Item,{value:"apple"},"Apple"),e.createElement(t.Item,{value:"banana"},"Banana"),e.createElement(t.Item,{value:"blueberry"},"Blueberry"),e.createElement(t.Item,{value:"grapes"},"Grapes"),e.createElement(t.Item,{value:"pineapple",disabled:!0},"Pineapple (disabled)")),n={render:a=>e.createElement(t,{...a,defaultValue:"banana"},e.createElement(l,null))},r={render:a=>e.createElement("div",{className:"flex w-[600px] max-w-full items-start gap-6"},e.createElement("div",{className:"flex w-[280px] flex-col gap-2"},e.createElement("div",{className:"text-sm text-text-muted"},"Outline"),e.createElement(t,{...a,variant:"outline",defaultValue:"banana"},e.createElement(l,null))),e.createElement("div",{className:"flex w-[280px] flex-col gap-2"},e.createElement("div",{className:"text-sm text-text-muted"},"Subtle"),e.createElement(t,{...a,variant:"subtle",defaultValue:"apple"},e.createElement(l,null)))),args:{placeholder:"Select…"},parameters:{docs:{description:{story:"Direct comparison between `outline` and `subtle` trigger styles."}}}},s={render:a=>e.createElement("div",{className:"flex flex-col gap-4 w-[280px]"},e.createElement(t,{...a,size:"sm",defaultValue:"apple"},e.createElement(l,null)),e.createElement(t,{...a,size:"md",defaultValue:"banana"},e.createElement(l,null)),e.createElement(t,{...a,size:"lg",defaultValue:"blueberry"},e.createElement(l,null)))},c={render:a=>e.createElement(t,{...a,defaultValue:"au"},e.createElement(t.Group,null,e.createElement(t.Label,null,"Popular"),e.createElement(t.Item,{value:"us"},"United States"),e.createElement(t.Item,{value:"uk"},"United Kingdom")),e.createElement(t.Group,null,e.createElement(t.Label,null,"All"),e.createElement(t.Item,{value:"au"},"Australia"),e.createElement(t.Item,{value:"ca"},"Canada"),e.createElement(t.Item,{value:"de"},"Germany"),e.createElement(t.Item,{value:"jp"},"Japan")))},m={render:a=>{const[o,u]=e.useState("blueberry");return e.createElement("div",{className:"w-[280px]"},e.createElement(t,{...a,value:o,onValueChange:i=>u(i),placeholder:"Pick fruit"},e.createElement(l,null)),e.createElement("div",{className:"mt-2 text-sm text-text-muted"},"Current: ",o))}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Select {...args} defaultValue="banana">
      <Options />
    </Select>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex w-[600px] max-w-full items-start gap-6">
      <div className="flex w-[280px] flex-col gap-2">
        <div className="text-sm text-text-muted">Outline</div>
        <Select {...args} variant="outline" defaultValue="banana">
          <Options />
        </Select>
      </div>

      <div className="flex w-[280px] flex-col gap-2">
        <div className="text-sm text-text-muted">Subtle</div>
        <Select {...args} variant="subtle" defaultValue="apple">
          <Options />
        </Select>
      </div>
    </div>,
  args: {
    placeholder: "Select…"
  },
  parameters: {
    docs: {
      description: {
        story: "Direct comparison between \`outline\` and \`subtle\` trigger styles."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4 w-[280px]">
      <Select {...args} size="sm" defaultValue="apple">
        <Options />
      </Select>
      <Select {...args} size="md" defaultValue="banana">
        <Options />
      </Select>
      <Select {...args} size="lg" defaultValue="blueberry">
        <Options />
      </Select>
    </div>
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Select {...args} defaultValue="au">
      <Select.Group>
        <Select.Label>Popular</Select.Label>
        <Select.Item value="us">United States</Select.Item>
        <Select.Item value="uk">United Kingdom</Select.Item>
      </Select.Group>
      <Select.Group>
        <Select.Label>All</Select.Label>
        <Select.Item value="au">Australia</Select.Item>
        <Select.Item value="ca">Canada</Select.Item>
        <Select.Item value="de">Germany</Select.Item>
        <Select.Item value="jp">Japan</Select.Item>
      </Select.Group>
    </Select>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState("blueberry");
    return <div className="w-[280px]">
        <Select {...args} value={value} onValueChange={v => setValue(v)} placeholder="Pick fruit">
          <Options />
        </Select>
        <div className="mt-2 text-sm text-text-muted">Current: {value}</div>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const h=["Default","VariantComparison","Sizes","Grouped","Controlled"];export{m as Controlled,n as Default,c as Grouped,s as Sizes,r as VariantComparison,h as __namedExportsOrder,C as default};

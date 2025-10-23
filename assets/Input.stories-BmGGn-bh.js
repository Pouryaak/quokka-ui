import{e}from"./iframe-C_g90xlo.js";import{I as a}from"./Input-DmXxm5g1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CE2vBQ91.js";import"./bundle-mjs-BJeS7sC5.js";const S={title:"Components/Input",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:["Text input with outline/subtle variants, sizes, and built-in a11y wiring.","","**A11y**","- Provide a visible `label` or an `aria-label` when label is omitted.","- `error` shows an error message and sets `aria-invalid` + `aria-errormessage`.","- `helperText` is referenced via `aria-describedby` when no error."].join(`
`)}}},argTypes:{variant:{control:"inline-radio",options:["outline","subtle"],description:"Visual variant",table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],description:"Control size",table:{category:"Appearance"}},label:{control:"text",description:"Visible label text (use `aria-label` if omitted)",table:{category:"Content"}},placeholder:{control:"text",table:{category:"Content"}},helperText:{control:"text",description:"Assistive description shown below the field",table:{category:"Feedback"}},error:{control:"text",description:"Error message (trumps helper text)",table:{category:"Feedback"}},required:{control:"boolean",table:{category:"Behavior"}},disabled:{control:"boolean",table:{category:"Behavior"}},className:{control:!1},onChange:{action:"changed",table:{category:"Events"}}},args:{variant:"outline",size:"md",label:"",placeholder:"you@example.com",helperText:"",error:"",disabled:!1,required:!1}},t={},l={render:r=>e.createElement("div",{className:"flex max-w-md flex-col gap-4"},e.createElement(a,{...r,variant:"outline",label:"Outline",placeholder:"Outline input"}),e.createElement(a,{...r,variant:"subtle",label:"Subtle",placeholder:"Subtle input"})),args:{helperText:"This is helper text"},parameters:{docs:{description:{story:"Compare `outline` and `subtle` variants side by side."}}}},s={render:r=>e.createElement("div",{className:"flex max-w-md flex-col gap-4"},e.createElement(a,{...r,size:"sm",label:"Small",placeholder:"Small"}),e.createElement(a,{...r,size:"md",label:"Medium",placeholder:"Medium"}),e.createElement(a,{...r,size:"lg",label:"Large",placeholder:"Large"})),parameters:{docs:{description:{story:"Small, medium, and large heights & paddings."}}}},n={args:{label:"Username",helperText:"Use 3–16 characters. Only letters and numbers.",placeholder:"yourname"}},o={args:{label:"Username",error:"Username is already taken",placeholder:"yourname"}},i={args:{label:"Full name",required:!0,placeholder:"Jane Doe",helperText:"This field is required."}},c={args:{label:"Disabled",disabled:!0,placeholder:"Cannot type here",helperText:"This field is disabled."}},d={args:{label:"",placeholder:"Search",helperText:"Press Enter to submit","aria-label":"Search"},parameters:{docs:{description:{story:"When omitting a visible label, provide `aria-label` to name the control for screen readers."}}}},p={render:r=>{const[m,u]=e.useState("");return e.createElement("div",{className:"max-w-md"},e.createElement(a,{...r,label:"Controlled value",value:m,onChange:h=>u(h.currentTarget.value),helperText:`Length: ${m.length}`,placeholder:"Type to see length update"}))},args:{variant:"outline"},parameters:{docs:{description:{story:"Fully controlled input with live helper text."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex max-w-md flex-col gap-4">
      <Input {...args} variant="outline" label="Outline" placeholder="Outline input" />
      <Input {...args} variant="subtle" label="Subtle" placeholder="Subtle input" />
    </div>,
  args: {
    helperText: "This is helper text"
  },
  parameters: {
    docs: {
      description: {
        story: "Compare \`outline\` and \`subtle\` variants side by side."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex max-w-md flex-col gap-4">
      <Input {...args} size="sm" label="Small" placeholder="Small" />
      <Input {...args} size="md" label="Medium" placeholder="Medium" />
      <Input {...args} size="lg" label="Large" placeholder="Large" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Small, medium, and large heights & paddings."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    helperText: "Use 3–16 characters. Only letters and numbers.",
    placeholder: "yourname"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    error: "Username is already taken",
    placeholder: "yourname"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Full name",
    required: true,
    placeholder: "Jane Doe",
    helperText: "This field is required."
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled",
    disabled: true,
    placeholder: "Cannot type here",
    helperText: "This field is disabled."
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "",
    placeholder: "Search",
    helperText: "Press Enter to submit",
    "aria-label": "Search"
  } as any,
  parameters: {
    docs: {
      description: {
        story: "When omitting a visible label, provide \`aria-label\` to name the control for screen readers."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState("");
    return <div className="max-w-md">
        <Input {...args} label="Controlled value" value={value} onChange={e => setValue(e.currentTarget.value)} helperText={\`Length: \${value.length}\`} placeholder="Type to see length update" />
      </div>;
  },
  args: {
    variant: "outline"
  },
  parameters: {
    docs: {
      description: {
        story: "Fully controlled input with live helper text."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const T=["Default","OutlineVsSubtle","Sizes","WithHelperText","WithError","Required","Disabled","AriaLabelOnly","Controlled"];export{d as AriaLabelOnly,p as Controlled,t as Default,c as Disabled,l as OutlineVsSubtle,i as Required,s as Sizes,o as WithError,n as WithHelperText,T as __namedExportsOrder,S as default};

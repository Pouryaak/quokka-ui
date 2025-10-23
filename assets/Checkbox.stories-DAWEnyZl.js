import{e}from"./iframe-C_g90xlo.js";import{C as a}from"./Checkbox-Bb23Gesy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CE2vBQ91.js";import"./bundle-mjs-BJeS7sC5.js";const E={title:"Components/Checkbox",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:["Accessible checkbox with outline/subtle variants, sizes, helper/error text, and SSR-safe output.","","**A11y**","- Uses a native `<input type='checkbox'>` for keyboard and screen reader support.","- Error state sets `aria-invalid` + `aria-errormessage`; helper text uses `aria-describedby`.","- Label text is required for accessibility.","","**Design**","- Colors rely on design tokens (brand/surface/border) for dark/light themes.","- Focus ring is visible on keyboard navigation (`:focus-visible`)."].join(`
`)}}},argTypes:{variant:{control:"inline-radio",options:["outline","subtle"],description:"Visual style of the box",table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],description:"Control size",table:{category:"Appearance"}},label:{control:"text",description:"Visible label text",table:{category:"Content"}},helperText:{control:"text",description:"Assistive description below the label",table:{category:"Feedback"}},error:{control:"text",description:"Error message (overrides helper text)",table:{category:"Feedback"}},disabled:{control:"boolean",table:{category:"State"}},required:{control:"boolean",table:{category:"State"}},className:{control:!1},id:{control:!1},onChange:{action:"changed",table:{category:"Events"}}},args:{variant:"outline",size:"md",label:"Subscribe to updates",helperText:"",error:"",disabled:!1,required:!1}},o={},c={render:t=>e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(a,{...t,variant:"outline",label:"Outline"}),e.createElement(a,{...t,variant:"subtle",label:"Subtle"})),parameters:{docs:{description:{story:"Compare `outline` vs `subtle` styles."}}}},l={render:t=>e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(a,{...t,size:"sm",label:"Small"}),e.createElement(a,{...t,size:"md",label:"Medium"}),e.createElement(a,{...t,size:"lg",label:"Large"})),parameters:{docs:{description:{story:"Small, medium, and large hit areas."}}}},i={args:{label:"Accept newsletter",helperText:"You can unsubscribe at any time."}},d={args:{label:"Accept terms",error:"You must accept the terms to continue."}},m={args:{label:"Disabled option",disabled:!0,helperText:"This option is unavailable."}},p={args:{label:"I agree to the Privacy Policy",required:!0},parameters:{docs:{description:{story:"`required` adds semantic constraint; still provide validation UX in forms."}}}},u={render:t=>{const[s,n]=e.useState(!1);return e.createElement("div",{className:"flex max-w-md flex-col gap-2"},e.createElement(a,{...t,label:`Controlled checkbox (${s?"checked":"unchecked"})`,checked:s,onChange:g=>n(g.currentTarget.checked),helperText:"State is managed by the parent."}),e.createElement("div",{className:"text-sm text-text-muted"},"Try clicking label or box."))},args:{helperText:""},parameters:{docs:{description:{story:"Parent controls the `checked` state via `onChange`."}}}},b={render:t=>{const s=[{id:1,name:"Email notifications"},{id:2,name:"Product updates"},{id:3,name:"Beta features"}],[n,g]=e.useState([1]),h=r=>g(x=>x.includes(r)?x.filter(v=>v!==r):[...x,r]);return e.createElement("div",{className:"w-[320px] rounded-xl border border-border/40 bg-surface p-4"},e.createElement("div",{className:"mb-2 text-sm font-medium text-text-primary"},"Preferences"),e.createElement("div",{className:"flex flex-col gap-3"},s.map(r=>e.createElement(a,{key:r.id,...t,label:r.name,checked:n.includes(r.id),onChange:()=>h(r.id),helperText:""}))),e.createElement("div",{className:"mt-3 text-sm text-text-muted"},"Selected: ",n.length,"/",s.length))},args:{variant:"outline",size:"md"},parameters:{docs:{description:{story:"Realistic multiple-checkbox usage with parent-managed state."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <Checkbox {...args} variant="outline" label="Outline" />
      <Checkbox {...args} variant="subtle" label="Subtle" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Compare \`outline\` vs \`subtle\` styles."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <Checkbox {...args} size="sm" label="Small" />
      <Checkbox {...args} size="md" label="Medium" />
      <Checkbox {...args} size="lg" label="Large" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Small, medium, and large hit areas."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Accept newsletter",
    helperText: "You can unsubscribe at any time."
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Accept terms",
    error: "You must accept the terms to continue."
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled option",
    disabled: true,
    helperText: "This option is unavailable."
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "I agree to the Privacy Policy",
    required: true
  },
  parameters: {
    docs: {
      description: {
        story: "\`required\` adds semantic constraint; still provide validation UX in forms."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = React.useState(false);
    return <div className="flex max-w-md flex-col gap-2">
        <Checkbox {...args} label={\`Controlled checkbox (\${checked ? "checked" : "unchecked"})\`} checked={checked} onChange={e => setChecked(e.currentTarget.checked)} helperText="State is managed by the parent." />
        <div className="text-sm text-text-muted">
          Try clicking label or box.
        </div>
      </div>;
  },
  args: {
    helperText: ""
  },
  parameters: {
    docs: {
      description: {
        story: "Parent controls the \`checked\` state via \`onChange\`."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const initial = [{
      id: 1,
      name: "Email notifications"
    }, {
      id: 2,
      name: "Product updates"
    }, {
      id: 3,
      name: "Beta features"
    }];
    const [selected, setSelected] = React.useState<number[]>([1]);
    const toggle = (id: number) => setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
    return <div className="w-[320px] rounded-xl border border-border/40 bg-surface p-4">
        <div className="mb-2 text-sm font-medium text-text-primary">
          Preferences
        </div>
        <div className="flex flex-col gap-3">
          {initial.map(item => <Checkbox key={item.id} {...args} label={item.name} checked={selected.includes(item.id)} onChange={() => toggle(item.id)} helperText="" />)}
        </div>
        <div className="mt-3 text-sm text-text-muted">
          Selected: {selected.length}/{initial.length}
        </div>
      </div>;
  },
  args: {
    variant: "outline",
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "Realistic multiple-checkbox usage with parent-managed state."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};const T=["Default","Variants","Sizes","WithHelperText","WithError","Disabled","Required","Controlled","InList"];export{u as Controlled,o as Default,m as Disabled,b as InList,p as Required,l as Sizes,c as Variants,d as WithError,i as WithHelperText,T as __namedExportsOrder,E as default};

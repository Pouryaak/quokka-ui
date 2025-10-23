import{c as S}from"./index-CE2vBQ91.js";import{e,r as z}from"./iframe-C_g90xlo.js";import{t as b}from"./bundle-mjs-BJeS7sC5.js";import"./preload-helper-PPVm8Dsz.js";const D=S("w-full rounded-md bg-surface shadow-sm disabled:bg-surface-muted disabled:cursor-not-allowed placeholder:text-text-muted/70 text-text-primary",{variants:{variant:{outline:"border border-border",subtle:"border-none bg-surface-muted"},size:{sm:"p-1 text-sm",md:"p-2 text-base",lg:"p-3 text-lg"}},defaultVariants:{variant:"outline",size:"md"}}),r=e.forwardRef(({id:a,label:c,className:v,helperText:f,error:u,size:T,variant:y,required:g,"aria-label":w,...E},N)=>{const x=z.useId(),h=a??`in-${x}`,m=`in-desc-${x}`,p=u||f,t=!!u;return e.createElement("div",{className:b("flex flex-col",v)},c&&e.createElement("label",{htmlFor:h,className:"mb-1 font-medium text-text-primary"},c,g&&e.createElement("span",{className:"text-red-600"}," *")),e.createElement("textarea",{id:h,ref:N,className:b(D({size:T,variant:y}),t?"border-red-500":""),"aria-label":c?void 0:w,"aria-invalid":t||void 0,"aria-errormessage":t?m:void 0,"aria-describedby":!t&&p?m:void 0,required:g,...E}),p&&e.createElement("p",{id:m,className:b("mt-1 text-sm",t?"text-red-600":"text-text-muted")},p))});r.displayName="Textarea";r.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{label:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""}}};const C={title:"Components/Textarea",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:["A multi-line text input component with accessible labels, helper text, and error states.","","**A11y**","- Renders a native `<textarea>` for full accessibility support.","- The `label` prop is optional, but `aria-label` is required to ensure a screen reader name.","- Error state sets `aria-invalid`; helper/error text is linked via `aria-describedby`.","","**Design**","- Height is flexible and can be controlled with the native `rows` attribute.","- Focus rings are visible on keyboard navigation (`:focus-visible`)."].join(`
`)}}},argTypes:{variant:{control:"inline-radio",options:["outline","subtle"],description:"Visual style of the textarea",table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],description:"Controls padding and font size",table:{category:"Appearance"}},label:{control:"text",description:"Visible label text (optional)",table:{category:"Content"}},"aria-label":{control:"text",description:"Accessible name for the input (required)",table:{category:"Content"}},placeholder:{control:"text",description:"Placeholder text",table:{category:"Content"}},helperText:{control:"text",description:"Assistive description below the textarea",table:{category:"Feedback"}},error:{control:"text",description:"Error message (overrides helper text)",table:{category:"Feedback"}},disabled:{control:"boolean",table:{category:"State"}},required:{control:"boolean",table:{category:"State"}},rows:{control:"number",description:"The visible number of text lines",table:{category:"Appearance"}},className:{control:!1}},args:{variant:"outline",size:"md",label:"Your Message","aria-label":"Your Message",placeholder:"Enter your comments here...",helperText:"",error:"",disabled:!1,required:!1}},s={render:a=>e.createElement("div",{className:"w-80"},e.createElement(r,{...a}))},n={args:{"aria-label":"Text area"},render:a=>e.createElement("div",{className:"flex w-80 flex-col gap-4"},e.createElement(r,{...a,size:"sm",placeholder:"Small"}),e.createElement(r,{...a,size:"md",placeholder:"Medium (Default)"}),e.createElement(r,{...a,size:"lg",placeholder:"Large"})),parameters:{docs:{description:{story:"Comparing the `sm`, `md`, and `lg` size variants."}}}},i={args:{error:"This field is required and cannot be empty.",required:!0},render:a=>e.createElement("div",{className:"w-80"},e.createElement(r,{...a}))},o={args:{label:"Detailed Feedback","aria-label":"Detailed Feedback",rows:5,helperText:"The `rows` prop controls the initial height."},render:a=>e.createElement("div",{className:"w-80"},e.createElement(r,{...a}))},l={args:{label:"Disabled Text Area","aria-label":"Disabled Text Area",helperText:"This field cannot be edited.",disabled:!0,value:"You cannot change this text."},render:a=>e.createElement("div",{className:"w-80"},e.createElement(r,{...a}))},d={args:{label:void 0,"aria-label":"Search description",placeholder:"Search description..."},render:a=>e.createElement("div",{className:"w-80"},e.createElement(r,{...a}))};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-80">
      <Textarea {...args} />
    </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Text area"
  },
  render: args => <div className="flex w-80 flex-col gap-4">
      <Textarea {...args} size="sm" placeholder="Small" />
      <Textarea {...args} size="md" placeholder="Medium (Default)" />
      <Textarea {...args} size="lg" placeholder="Large" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Comparing the \`sm\`, \`md\`, and \`lg\` size variants."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    error: "This field is required and cannot be empty.",
    required: true
  },
  render: args => <div className="w-80">
      <Textarea {...args} />
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Detailed Feedback",
    "aria-label": "Detailed Feedback",
    rows: 5,
    helperText: "The \`rows\` prop controls the initial height."
  },
  render: args => <div className="w-80">
      <Textarea {...args} />
    </div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled Text Area",
    "aria-label": "Disabled Text Area",
    helperText: "This field cannot be edited.",
    disabled: true,
    value: "You cannot change this text."
  },
  render: args => <div className="w-80">
      <Textarea {...args} />
    </div>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    "aria-label": "Search description",
    placeholder: "Search description..."
  },
  render: args => <div className="w-80">
      <Textarea {...args} />
    </div>
}`,...d.parameters?.docs?.source}}};const M=["Default","Sizes","WithError","WithMoreRows","Disabled","NoLabel"];export{s as Default,l as Disabled,d as NoLabel,n as Sizes,i as WithError,o as WithMoreRows,M as __namedExportsOrder,C as default};

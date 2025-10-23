import{e}from"./iframe-C_g90xlo.js";import{T as a}from"./Tabs-BYWhA9q6.js";import{P as o,C as T,G as d,R as b}from"./react-icons.esm-BQB_C1As.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-BJeS7sC5.js";import"./index-D7GSPBPt.js";import"./index-CkBqJvDx.js";import"./index-2I2xUPBQ.js";import"./index-CU_uhlYU.js";import"./index-UWjYWlIG.js";import"./index-BbgTdLap.js";import"./index-CE2vBQ91.js";const h={title:"Components/Tabs",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:["Tabs built on Radix with `pill` and `underline` variants and `sm/md/lg` sizes.","Radix provides roles/keyboard; this wrapper controls visuals via tokens."].join(`
`)}}},args:{orientation:"horizontal"}};function t(){return e.createElement(e.Fragment,null,e.createElement(a.Content,{value:"account"},e.createElement("div",{className:"text-text-primary"},"Account panel content")),e.createElement(a.Content,{value:"billing"},e.createElement("div",{className:"text-text-primary"},"Billing panel content")),e.createElement(a.Content,{value:"team"},e.createElement("div",{className:"text-text-primary"},"Team panel content")))}const r={render:n=>e.createElement(a,{defaultValue:"account",...n,className:"w-[480px] max-w-full"},e.createElement(a.List,{variant:"underline"},e.createElement(a.Trigger,{value:"account",variant:"underline"},"Account"),e.createElement(a.Trigger,{value:"billing",variant:"underline"},"Billing"),e.createElement(a.Trigger,{value:"team",variant:"underline"},"Team")),e.createElement(t,null))},l={render:n=>e.createElement("div",{className:"flex w-[820px] max-w-full gap-8"},e.createElement("div",{className:"w-full"},e.createElement("div",{className:"mb-2 text-sm text-text-muted"},"Pill"),e.createElement(a,{defaultValue:"account",...n},e.createElement(a.List,{variant:"pill"},e.createElement(a.Trigger,{value:"account"},"Account"),e.createElement(a.Trigger,{value:"billing"},"Billing"),e.createElement(a.Trigger,{value:"team"},"Team")),e.createElement(t,null))),e.createElement("div",{className:"w-full"},e.createElement("div",{className:"mb-2 text-sm text-text-muted"},"Underline"),e.createElement(a,{defaultValue:"account",...n},e.createElement(a.List,{variant:"underline"},e.createElement(a.Trigger,{variant:"underline",value:"account"},"Account"),e.createElement(a.Trigger,{variant:"underline",value:"billing"},"Billing"),e.createElement(a.Trigger,{variant:"underline",value:"team"},"Team")),e.createElement(t,null))))},s={render:n=>e.createElement(a,{defaultValue:"account",...n,className:"w-[520px] max-w-full"},e.createElement(a.List,{variant:"pill"},e.createElement(a.Trigger,{value:"account",startIcon:e.createElement(o,null)},"Account"),e.createElement(a.Trigger,{value:"billing",endIcon:e.createElement(T,null)},"Billing"),e.createElement(a.Trigger,{value:"launch",startIcon:e.createElement(b,null),endIcon:e.createElement(d,null)},"Launch")),e.createElement(a.Content,{value:"account"},e.createElement("div",{className:"text-text-primary"},"Account panel content")),e.createElement(a.Content,{value:"billing"},e.createElement("div",{className:"text-text-primary"},"Billing panel content")),e.createElement(a.Content,{value:"launch"},e.createElement("div",{className:"text-text-primary"},"Launch panel content"))),parameters:{docs:{description:{story:"Demonstrates `startIcon` and `endIcon` props on `Tabs.Trigger`. Icons are decorative (`aria-hidden`) and size scales with tab size."}}}},i={render:n=>e.createElement("div",{className:"flex w-[720px] max-w-full flex-col gap-6"},e.createElement(a,{defaultValue:"account",...n},e.createElement(a.List,null,e.createElement(a.Trigger,{size:"sm",value:"account"},"Small"),e.createElement(a.Trigger,{size:"sm",value:"billing"},"Small"),e.createElement(a.Trigger,{size:"sm",value:"team"},"Small")),e.createElement(t,null)),e.createElement(a,{defaultValue:"account",...n},e.createElement(a.List,null,e.createElement(a.Trigger,{size:"md",value:"account"},"Medium"),e.createElement(a.Trigger,{size:"md",value:"billing"},"Medium"),e.createElement(a.Trigger,{size:"md",value:"team"},"Medium")),e.createElement(t,null)),e.createElement(a,{defaultValue:"account",...n},e.createElement(a.List,null,e.createElement(a.Trigger,{size:"lg",value:"account"},"Large"),e.createElement(a.Trigger,{size:"lg",value:"billing"},"Large"),e.createElement(a.Trigger,{size:"lg",value:"team"},"Large")),e.createElement(t,null)))},c={render:n=>e.createElement(a,{defaultValue:"account",...n,className:"w-[480px] max-w-full"},e.createElement(a.List,null,e.createElement(a.Trigger,{value:"account"},"Account"),e.createElement(a.Trigger,{value:"billing",disabled:!0},"Billing (disabled)"),e.createElement(a.Trigger,{value:"team"},"Team")),e.createElement(t,null))},u={render:n=>{const[m,g]=e.useState("account");return e.createElement("div",{className:"w-[480px] max-w-full"},e.createElement(a,{value:m,onValueChange:g,...n},e.createElement(a.List,null,e.createElement(a.Trigger,{value:"account"},"Account"),e.createElement(a.Trigger,{value:"billing"},"Billing"),e.createElement(a.Trigger,{value:"team"},"Team")),e.createElement(t,null)),e.createElement("div",{className:"mt-2 text-sm text-text-muted"},"Current: ",m))}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Tabs defaultValue="account" {...args} className="w-[480px] max-w-full">
      <Tabs.List variant="underline">
        <Tabs.Trigger value="account" variant="underline">
          Account
        </Tabs.Trigger>
        <Tabs.Trigger value="billing" variant="underline">
          Billing
        </Tabs.Trigger>
        <Tabs.Trigger value="team" variant="underline">
          Team
        </Tabs.Trigger>
      </Tabs.List>
      <Panels />
    </Tabs>
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex w-[820px] max-w-full gap-8">
      <div className="w-full">
        <div className="mb-2 text-sm text-text-muted">Pill</div>
        <Tabs defaultValue="account" {...args}>
          <Tabs.List variant="pill">
            <Tabs.Trigger value="account">Account</Tabs.Trigger>
            <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
            <Tabs.Trigger value="team">Team</Tabs.Trigger>
          </Tabs.List>
          <Panels />
        </Tabs>
      </div>
      <div className="w-full">
        <div className="mb-2 text-sm text-text-muted">Underline</div>
        <Tabs defaultValue="account" {...args}>
          <Tabs.List variant="underline">
            <Tabs.Trigger variant="underline" value="account">
              Account
            </Tabs.Trigger>
            <Tabs.Trigger variant="underline" value="billing">
              Billing
            </Tabs.Trigger>
            <Tabs.Trigger variant="underline" value="team">
              Team
            </Tabs.Trigger>
          </Tabs.List>
          <Panels />
        </Tabs>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Tabs defaultValue="account" {...args} className="w-[520px] max-w-full">
      <Tabs.List variant="pill">
        <Tabs.Trigger value="account" startIcon={<PersonIcon />}>
          Account
        </Tabs.Trigger>
        <Tabs.Trigger value="billing" endIcon={<CardStackIcon />}>
          Billing
        </Tabs.Trigger>
        <Tabs.Trigger value="launch" startIcon={<RocketIcon />} endIcon={<GearIcon />}>
          Launch
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="account">
        <div className="text-text-primary">Account panel content</div>
      </Tabs.Content>
      <Tabs.Content value="billing">
        <div className="text-text-primary">Billing panel content</div>
      </Tabs.Content>
      <Tabs.Content value="launch">
        <div className="text-text-primary">Launch panel content</div>
      </Tabs.Content>
    </Tabs>,
  parameters: {
    docs: {
      description: {
        story: "Demonstrates \`startIcon\` and \`endIcon\` props on \`Tabs.Trigger\`. Icons are decorative (\`aria-hidden\`) and size scales with tab size."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex w-[720px] max-w-full flex-col gap-6">
      <Tabs defaultValue="account" {...args}>
        <Tabs.List>
          <Tabs.Trigger size="sm" value="account">
            Small
          </Tabs.Trigger>
          <Tabs.Trigger size="sm" value="billing">
            Small
          </Tabs.Trigger>
          <Tabs.Trigger size="sm" value="team">
            Small
          </Tabs.Trigger>
        </Tabs.List>
        <Panels />
      </Tabs>
      <Tabs defaultValue="account" {...args}>
        <Tabs.List>
          <Tabs.Trigger size="md" value="account">
            Medium
          </Tabs.Trigger>
          <Tabs.Trigger size="md" value="billing">
            Medium
          </Tabs.Trigger>
          <Tabs.Trigger size="md" value="team">
            Medium
          </Tabs.Trigger>
        </Tabs.List>
        <Panels />
      </Tabs>
      <Tabs defaultValue="account" {...args}>
        <Tabs.List>
          <Tabs.Trigger size="lg" value="account">
            Large
          </Tabs.Trigger>
          <Tabs.Trigger size="lg" value="billing">
            Large
          </Tabs.Trigger>
          <Tabs.Trigger size="lg" value="team">
            Large
          </Tabs.Trigger>
        </Tabs.List>
        <Panels />
      </Tabs>
    </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Tabs defaultValue="account" {...args} className="w-[480px] max-w-full">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="billing" disabled>
          Billing (disabled)
        </Tabs.Trigger>
        <Tabs.Trigger value="team">Team</Tabs.Trigger>
      </Tabs.List>
      <Panels />
    </Tabs>
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState("account");
    return <div className="w-[480px] max-w-full">
        <Tabs value={value} onValueChange={setValue} {...args}>
          <Tabs.List>
            <Tabs.Trigger value="account">Account</Tabs.Trigger>
            <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
            <Tabs.Trigger value="team">Team</Tabs.Trigger>
          </Tabs.List>
          <Panels />
        </Tabs>
        <div className="mt-2 text-sm text-text-muted">Current: {value}</div>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};const S=["Default","VariantComparison","WithIcons","Sizes","WithDisabled","Controlled"];export{u as Controlled,r as Default,i as Sizes,l as VariantComparison,c as WithDisabled,s as WithIcons,S as __namedExportsOrder,h as default};

import{e}from"./iframe-C_g90xlo.js";import{T as b,F as l}from"./Table-Btftit9P.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CE2vBQ91.js";import"./bundle-mjs-BJeS7sC5.js";const s=(n=8)=>Array.from({length:n},(a,t)=>({id:t+1,name:["Ana","Bao","Chris","Diya","Ezra","Finn","Gita","Hiro"][t%8],role:["Engineer","Designer","PM","QA"][t%4],location:["Lisbon","Sydney","NYC","Berlin"][t%4],salary:65e3+t%8*4500})),y={title:"Components/Table",component:b,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Token-driven table with optional frame, zebra striping, and sticky header. Use controls to toggle visuals."}}},argTypes:{frame:{control:"inline-radio",options:["plain","framed"],description:"Outer wrapper frame style"}}},i={args:{frame:"plain",striped:!1,containerHeight:320,className:void 0,containerClassName:void 0},render:n=>{const a=s(24),t=n.containerHeight?{maxHeight:`${n.containerHeight}px`}:void 0;return e.createElement("div",{style:t},e.createElement(l,{frame:n.frame,containerClassName:"w-[820px] max-w-full"},e.createElement(l.Header,{sticky:n.sticky},e.createElement(l.Row,null,e.createElement(l.Head,null,"ID"),e.createElement(l.Head,null,"Name"),e.createElement(l.Head,null,"Role"),e.createElement(l.Head,null,"Location"),e.createElement(l.Head,null,"Salary"))),e.createElement(l.Body,{striped:n.striped},a.map(r=>e.createElement(l.Row,{key:r.id},e.createElement(l.Cell,null,r.id),e.createElement(l.Cell,null,r.name),e.createElement(l.Cell,null,r.role),e.createElement(l.Cell,null,r.location),e.createElement(l.Cell,null,"$",r.salary.toLocaleString()))))))}},o={render:()=>{const n=s(10);return e.createElement(l,{frame:"framed",className:"w-[720px] max-w-full"},e.createElement(l.Header,null,e.createElement(l.Row,null,e.createElement(l.Head,null,"Name"),e.createElement(l.Head,null,"Role"),e.createElement(l.Head,null,"Location"),e.createElement(l.Head,null,"Salary"))),e.createElement(l.Body,{striped:!0},n.map(a=>e.createElement(l.Row,{key:a.id},e.createElement(l.Cell,null,a.name),e.createElement(l.Cell,null,a.role),e.createElement(l.Cell,null,a.location),e.createElement(l.Cell,{numeric:!0},"$",a.salary.toLocaleString())))))},parameters:{docs:{description:{story:"`striped` adds zebra background on even rows in the body."}}}},c={render:()=>{const n=s(30);return e.createElement(l,{frame:"framed",containerClassName:"max-h-80 w-[720px]"},e.createElement(l.Header,{sticky:!0},e.createElement(l.Row,null,e.createElement(l.Head,null,"ID"),e.createElement(l.Head,null,"Name"),e.createElement(l.Head,null,"Role"),e.createElement(l.Head,null,"Location"),e.createElement(l.Head,null,"Salary"))),e.createElement(l.Body,{striped:!0},n.map(a=>e.createElement(l.Row,{key:a.id},e.createElement(l.Cell,{numeric:!0},a.id),e.createElement(l.Cell,null,a.name),e.createElement(l.Cell,null,a.role),e.createElement(l.Cell,null,a.location),e.createElement(l.Cell,{numeric:!0},"$",a.salary.toLocaleString())))),e.createElement(l.Caption,null,"Sticky header inside a max-height container"))},parameters:{docs:{description:{story:"Header stays visible while scrolling tall content (inside the `overflow-auto` wrapper)."}}}},m={render:()=>{const n=s(5);return e.createElement("div",{className:"flex w-[920px] max-w-full flex-col gap-8"},e.createElement("div",null,e.createElement("div",{className:"mb-2 text-sm text-text-muted"},"Compact"),e.createElement(l,null,e.createElement(l.Header,null,e.createElement(l.Row,{density:"compact"},e.createElement(l.Head,{density:"compact"},"Name"),e.createElement(l.Head,{density:"compact"},"Role"),e.createElement(l.Head,{density:"compact"},"Location"),e.createElement(l.Head,{density:"compact"},"Salary"))),e.createElement(l.Body,null,n.map(a=>e.createElement(l.Row,{key:a.id,density:"compact"},e.createElement(l.Cell,{density:"compact"},a.name),e.createElement(l.Cell,{density:"compact"},a.role),e.createElement(l.Cell,{density:"compact"},a.location),e.createElement(l.Cell,{density:"compact",numeric:!0},"$",a.salary.toLocaleString())))))),e.createElement("div",null,e.createElement("div",{className:"mb-2 text-sm text-text-muted"},"Default"),e.createElement(l,null,e.createElement(l.Header,null,e.createElement(l.Row,null,e.createElement(l.Head,null,"Name"),e.createElement(l.Head,null,"Role"),e.createElement(l.Head,null,"Location"),e.createElement(l.Head,null,"Salary"))),e.createElement(l.Body,null,n.map(a=>e.createElement(l.Row,{key:a.id},e.createElement(l.Cell,null,a.name),e.createElement(l.Cell,null,a.role),e.createElement(l.Cell,null,a.location),e.createElement(l.Cell,{numeric:!0},"$",a.salary.toLocaleString())))))),e.createElement("div",null,e.createElement("div",{className:"mb-2 text-sm text-text-muted"},"Comfortable"),e.createElement(l,null,e.createElement(l.Header,null,e.createElement(l.Row,{density:"comfortable"},e.createElement(l.Head,{density:"comfortable"},"Name"),e.createElement(l.Head,{density:"comfortable"},"Role"),e.createElement(l.Head,{density:"comfortable"},"Location"),e.createElement(l.Head,{density:"comfortable"},"Salary"))),e.createElement(l.Body,null,n.map(a=>e.createElement(l.Row,{key:a.id,density:"comfortable"},e.createElement(l.Cell,{density:"comfortable"},a.name),e.createElement(l.Cell,{density:"comfortable"},a.role),e.createElement(l.Cell,{density:"comfortable"},a.location),e.createElement(l.Cell,{density:"comfortable",numeric:!0},"$",a.salary.toLocaleString())))))))},parameters:{docs:{description:{story:"Compare `compact`, `default`, and `comfortable` paddings."}}}},d={render:()=>e.createElement(l,{className:"w-[560px] max-w-full"},e.createElement(l.Header,null,e.createElement(l.Row,null,e.createElement(l.Head,null,"Metric"),e.createElement(l.Head,null,"Q3"),e.createElement(l.Head,null,"Q4"),e.createElement(l.Head,null,"Δ"))),e.createElement(l.Body,null,e.createElement(l.Row,null,e.createElement(l.Cell,null,"Sessions"),e.createElement(l.Cell,{numeric:!0},"12,842"),e.createElement(l.Cell,{numeric:!0},"14,103"),e.createElement(l.Cell,{numeric:!0},"+1,261")),e.createElement(l.Row,null,e.createElement(l.Cell,null,"Bounce %"),e.createElement(l.Cell,{numeric:!0},"34.2%"),e.createElement(l.Cell,{numeric:!0},"31.8%"),e.createElement(l.Cell,{numeric:!0},"-2.4%")),e.createElement(l.Row,null,e.createElement(l.Cell,null,"Avg. time"),e.createElement(l.Cell,{numeric:!0},"3:12"),e.createElement(l.Cell,{numeric:!0},"3:25"),e.createElement(l.Cell,{numeric:!0},"+0:13"))),e.createElement(l.Caption,null,"Numeric columns use `text-right tabular-nums`."))};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    frame: "plain",
    striped: false,
    containerHeight: 320,
    className: undefined,
    containerClassName: undefined
  },
  render: args => {
    const rows = makeRows(24);
    const containerStyle = args.containerHeight ? {
      maxHeight: \`\${args.containerHeight}px\`
    } : undefined;
    return <div style={containerStyle}>
        <FinalTable frame={args.frame} containerClassName="w-[820px] max-w-full">
          <FinalTable.Header sticky={args.sticky}>
            <FinalTable.Row>
              <FinalTable.Head>ID</FinalTable.Head>
              <FinalTable.Head>Name</FinalTable.Head>
              <FinalTable.Head>Role</FinalTable.Head>
              <FinalTable.Head>Location</FinalTable.Head>
              <FinalTable.Head>Salary</FinalTable.Head>
            </FinalTable.Row>
          </FinalTable.Header>

          <FinalTable.Body striped={args.striped}>
            {rows.map(r => <FinalTable.Row key={r.id}>
                <FinalTable.Cell>{r.id}</FinalTable.Cell>
                <FinalTable.Cell>{r.name}</FinalTable.Cell>
                <FinalTable.Cell>{r.role}</FinalTable.Cell>
                <FinalTable.Cell>{r.location}</FinalTable.Cell>
                <FinalTable.Cell>\${r.salary.toLocaleString()}</FinalTable.Cell>
              </FinalTable.Row>)}
          </FinalTable.Body>
        </FinalTable>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const rows = makeRows(10);
    return <FinalTable frame="framed" className="w-[720px] max-w-full">
        <FinalTable.Header>
          <FinalTable.Row>
            <FinalTable.Head>Name</FinalTable.Head>
            <FinalTable.Head>Role</FinalTable.Head>
            <FinalTable.Head>Location</FinalTable.Head>
            <FinalTable.Head>Salary</FinalTable.Head>
          </FinalTable.Row>
        </FinalTable.Header>
        <FinalTable.Body striped>
          {rows.map(r => <FinalTable.Row key={r.id}>
              <FinalTable.Cell>{r.name}</FinalTable.Cell>
              <FinalTable.Cell>{r.role}</FinalTable.Cell>
              <FinalTable.Cell>{r.location}</FinalTable.Cell>
              <FinalTable.Cell numeric>
                \${r.salary.toLocaleString()}
              </FinalTable.Cell>
            </FinalTable.Row>)}
        </FinalTable.Body>
      </FinalTable>;
  },
  parameters: {
    docs: {
      description: {
        story: "\`striped\` adds zebra background on even rows in the body."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const rows = makeRows(30);
    return <FinalTable frame="framed" containerClassName="max-h-80 w-[720px]">
        <FinalTable.Header sticky>
          <FinalTable.Row>
            <FinalTable.Head>ID</FinalTable.Head>
            <FinalTable.Head>Name</FinalTable.Head>
            <FinalTable.Head>Role</FinalTable.Head>
            <FinalTable.Head>Location</FinalTable.Head>
            <FinalTable.Head>Salary</FinalTable.Head>
          </FinalTable.Row>
        </FinalTable.Header>
        <FinalTable.Body striped>
          {rows.map(r => <FinalTable.Row key={r.id}>
              <FinalTable.Cell numeric>{r.id}</FinalTable.Cell>
              <FinalTable.Cell>{r.name}</FinalTable.Cell>
              <FinalTable.Cell>{r.role}</FinalTable.Cell>
              <FinalTable.Cell>{r.location}</FinalTable.Cell>
              <FinalTable.Cell numeric>
                \${r.salary.toLocaleString()}
              </FinalTable.Cell>
            </FinalTable.Row>)}
        </FinalTable.Body>
        <FinalTable.Caption>
          Sticky header inside a max-height container
        </FinalTable.Caption>
      </FinalTable>;
  },
  parameters: {
    docs: {
      description: {
        story: "Header stays visible while scrolling tall content (inside the \`overflow-auto\` wrapper)."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const rows = makeRows(5);
    return <div className="flex w-[920px] max-w-full flex-col gap-8">
        {/* Compact */}
        <div>
          <div className="mb-2 text-sm text-text-muted">Compact</div>
          <FinalTable>
            <FinalTable.Header>
              <FinalTable.Row density="compact">
                <FinalTable.Head density="compact">Name</FinalTable.Head>
                <FinalTable.Head density="compact">Role</FinalTable.Head>
                <FinalTable.Head density="compact">Location</FinalTable.Head>
                <FinalTable.Head density="compact">Salary</FinalTable.Head>
              </FinalTable.Row>
            </FinalTable.Header>
            <FinalTable.Body>
              {rows.map(r => <FinalTable.Row key={r.id} density="compact">
                  <FinalTable.Cell density="compact">{r.name}</FinalTable.Cell>
                  <FinalTable.Cell density="compact">{r.role}</FinalTable.Cell>
                  <FinalTable.Cell density="compact">
                    {r.location}
                  </FinalTable.Cell>
                  <FinalTable.Cell density="compact" numeric>
                    \${r.salary.toLocaleString()}
                  </FinalTable.Cell>
                </FinalTable.Row>)}
            </FinalTable.Body>
          </FinalTable>
        </div>

        {/* Default */}
        <div>
          <div className="mb-2 text-sm text-text-muted">Default</div>
          <FinalTable>
            <FinalTable.Header>
              <FinalTable.Row>
                <FinalTable.Head>Name</FinalTable.Head>
                <FinalTable.Head>Role</FinalTable.Head>
                <FinalTable.Head>Location</FinalTable.Head>
                <FinalTable.Head>Salary</FinalTable.Head>
              </FinalTable.Row>
            </FinalTable.Header>
            <FinalTable.Body>
              {rows.map(r => <FinalTable.Row key={r.id}>
                  <FinalTable.Cell>{r.name}</FinalTable.Cell>
                  <FinalTable.Cell>{r.role}</FinalTable.Cell>
                  <FinalTable.Cell>{r.location}</FinalTable.Cell>
                  <FinalTable.Cell numeric>
                    \${r.salary.toLocaleString()}
                  </FinalTable.Cell>
                </FinalTable.Row>)}
            </FinalTable.Body>
          </FinalTable>
        </div>

        <div>
          <div className="mb-2 text-sm text-text-muted">Comfortable</div>
          <FinalTable>
            <FinalTable.Header>
              <FinalTable.Row density="comfortable">
                <FinalTable.Head density="comfortable">Name</FinalTable.Head>
                <FinalTable.Head density="comfortable">Role</FinalTable.Head>
                <FinalTable.Head density="comfortable">
                  Location
                </FinalTable.Head>
                <FinalTable.Head density="comfortable">Salary</FinalTable.Head>
              </FinalTable.Row>
            </FinalTable.Header>
            <FinalTable.Body>
              {rows.map(r => <FinalTable.Row key={r.id} density="comfortable">
                  <FinalTable.Cell density="comfortable">
                    {r.name}
                  </FinalTable.Cell>
                  <FinalTable.Cell density="comfortable">
                    {r.role}
                  </FinalTable.Cell>
                  <FinalTable.Cell density="comfortable">
                    {r.location}
                  </FinalTable.Cell>
                  <FinalTable.Cell density="comfortable" numeric>
                    \${r.salary.toLocaleString()}
                  </FinalTable.Cell>
                </FinalTable.Row>)}
            </FinalTable.Body>
          </FinalTable>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Compare \`compact\`, \`default\`, and \`comfortable\` paddings."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <FinalTable className="w-[560px] max-w-full">
      <FinalTable.Header>
        <FinalTable.Row>
          <FinalTable.Head>Metric</FinalTable.Head>
          <FinalTable.Head>Q3</FinalTable.Head>
          <FinalTable.Head>Q4</FinalTable.Head>
          <FinalTable.Head>Δ</FinalTable.Head>
        </FinalTable.Row>
      </FinalTable.Header>
      <FinalTable.Body>
        <FinalTable.Row>
          <FinalTable.Cell>Sessions</FinalTable.Cell>
          <FinalTable.Cell numeric>12,842</FinalTable.Cell>
          <FinalTable.Cell numeric>14,103</FinalTable.Cell>
          <FinalTable.Cell numeric>+1,261</FinalTable.Cell>
        </FinalTable.Row>
        <FinalTable.Row>
          <FinalTable.Cell>Bounce %</FinalTable.Cell>
          <FinalTable.Cell numeric>34.2%</FinalTable.Cell>
          <FinalTable.Cell numeric>31.8%</FinalTable.Cell>
          <FinalTable.Cell numeric>-2.4%</FinalTable.Cell>
        </FinalTable.Row>
        <FinalTable.Row>
          <FinalTable.Cell>Avg. time</FinalTable.Cell>
          <FinalTable.Cell numeric>3:12</FinalTable.Cell>
          <FinalTable.Cell numeric>3:25</FinalTable.Cell>
          <FinalTable.Cell numeric>+0:13</FinalTable.Cell>
        </FinalTable.Row>
      </FinalTable.Body>
      <FinalTable.Caption>
        Numeric columns use \`text-right tabular-nums\`.
      </FinalTable.Caption>
    </FinalTable>
}`,...d.parameters?.docs?.source}}};const H=["Default","Striped","StickyHeaderWithScroll","DensityComparison","NumericAlignment"];export{i as Default,m as DensityComparison,d as NumericAlignment,c as StickyHeaderWithScroll,o as Striped,H as __namedExportsOrder,y as default};

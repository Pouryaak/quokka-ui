import{P as a}from"./Pagination-Brtr3_6I.js";import{e}from"./iframe-B0LassJS.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-Ct12j0u0.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Components/Pagination",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A pagination component with page numbers, previous/next buttons, and ellipsis for large page counts. Fully controlled via `page`, `total`, and `onChange` props."}}},argTypes:{total:{control:"number",table:{category:"Behavior"}},page:{control:"number",table:{category:"Behavior"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}}}},n={render:()=>{const[t,s]=e.useState(1);return e.createElement("div",{className:"flex flex-col items-center gap-3"},e.createElement(a,{total:10,page:t,onChange:s}),e.createElement("span",{className:"text-sm text-text-muted"},"Page ",t," of 10"))}},o={render:()=>{const[t,s]=e.useState(5);return e.createElement(a,{total:20,page:t,onChange:s})}},r={render:()=>e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(a,{total:5,page:1,onChange:()=>{},size:"sm"}),e.createElement(a,{total:5,page:1,onChange:()=>{},size:"md"}),e.createElement(a,{total:5,page:1,onChange:()=>{},size:"lg"}))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = React.useState(1);
    return <div className="flex flex-col items-center gap-3">
        <Pagination total={10} page={page} onChange={setPage} />
        <span className="text-sm text-text-muted">Page {page} of 10</span>
      </div>;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = React.useState(5);
    return <Pagination total={20} page={page} onChange={setPage} />;
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Pagination total={5} page={1} onChange={() => {}} size="sm" />
      <Pagination total={5} page={1} onChange={() => {}} size="md" />
      <Pagination total={5} page={1} onChange={() => {}} size="lg" />
    </div>
}`,...r.parameters?.docs?.source}}};const u=["Default","ManyPages","Sizes"];export{n as Default,o as ManyPages,r as Sizes,u as __namedExportsOrder,d as default};

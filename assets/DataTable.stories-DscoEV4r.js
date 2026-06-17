import{r as l,e}from"./iframe-B0LassJS.js";import{t as P}from"./bundle-mjs-Ct12j0u0.js";import{I as B}from"./Input-BsLE3whf.js";import{P as V}from"./Pagination-Brtr3_6I.js";import{F as m}from"./Table-wN7qB_k8.js";import{B as I}from"./Badge-C2SLFzRI.js";import{A as z}from"./Avatar-DbfbOVy-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./index-_266PJnF.js";import"./index-8YRTKl2Q.js";import"./index-CzFWJezh.js";import"./index-VGe-NDq1.js";import"./index-Cs0riu9_.js";import"./index-BeiLhXI-.js";const H=e.createElement("svg",{width:"14",height:"14",viewBox:"0 0 15 15",fill:"none",className:"ml-1"},e.createElement("path",{d:"M7.5 3.5L4.5 6.5H10.5L7.5 3.5Z",fill:"currentColor"})),W=e.createElement("svg",{width:"14",height:"14",viewBox:"0 0 15 15",fill:"none",className:"ml-1"},e.createElement("path",{d:"M7.5 11.5L4.5 8.5H10.5L7.5 11.5Z",fill:"currentColor"})),F=e.createElement("svg",{width:"14",height:"14",viewBox:"0 0 15 15",fill:"none",className:"ml-1 opacity-0 group-hover:opacity-30"},e.createElement("path",{d:"M7.5 4L5 7H10L7.5 4ZM7.5 11L5 8H10L7.5 11Z",fill:"currentColor"}));function y(a,i){return i.split(".").reduce((d,v)=>d?d[v]:"",a)?.toString()??""}function S({data:a,columns:i,searchable:d=!0,searchPlaceholder:v="Search...",pageSize:E=5,emptyMessage:R="No results found.",className:M}){const[u,L]=l.useState(""),[n,A]=l.useState(null),[o,N]=l.useState("asc"),[p,b]=l.useState(1),q=l.useCallback(t=>{n===t?o==="asc"?N("desc"):o==="desc"&&(A(null),N("asc")):(A(t),N("asc")),b(1)},[n,o]),h=l.useMemo(()=>{if(!u.trim())return a;const t=u.toLowerCase();return a.filter(c=>i.some(r=>{if(r.render){const s=r.render(c);return typeof s=="string"?s.toLowerCase().includes(t):typeof s=="number"?s.toString().includes(t):!1}return y(c,r.key).toLowerCase().includes(t)}))},[a,u,i]),C=l.useMemo(()=>n?[...h].sort((t,c)=>{const r=y(t,n),D=y(c,n),s=r.localeCompare(D,void 0,{numeric:!0,sensitivity:"base"});return o==="asc"?s:-s}):h,[h,n,o]),k=Math.max(1,Math.ceil(C.length/E)),T=C.slice((p-1)*E,p*E);return e.createElement("div",{className:P("space-y-4",M)},d&&e.createElement("div",{className:"flex items-center gap-3"},e.createElement(B,{"aria-label":"Search",placeholder:v,value:u,onChange:t=>{L(t.target.value),b(1)},className:"max-w-xs"}),e.createElement("span",{className:"text-xs text-text-muted"},h.length," of ",a.length," ",a.length===1?"row":"rows")),T.length===0?e.createElement("div",{className:"rounded-xl border border-border/40 bg-surface-muted/30 py-12 text-center"},e.createElement("p",{className:"m-0 text-sm text-text-muted"},R)):e.createElement(m,{frame:"framed",className:"w-full"},e.createElement(m.Header,null,e.createElement(m.Row,null,i.map(t=>e.createElement(m.Head,{key:t.key,className:t.className},t.sortable?e.createElement("button",{className:"inline-flex items-center font-inherit text-inherit cursor-pointer hover:text-text-primary group -mx-1 px-1 rounded",onClick:()=>q(t.key)},t.header,n===t.key?o==="asc"?H:W:F):t.header)))),e.createElement(m.Body,null,T.map((t,c)=>e.createElement(m.Row,{key:c},i.map(r=>e.createElement(m.Cell,{key:r.key,className:r.className},r.render?r.render(t):y(t,r.key))))))),k>1&&e.createElement("div",{className:"flex items-center justify-between"},e.createElement("span",{className:"text-xs text-text-muted"},"Page ",p," of ",k),e.createElement(V,{total:k,page:p,onChange:t=>b(t),size:"sm"})))}S.displayName="DataTable";S.__docgenInfo={description:"",methods:[],displayName:"DataTable",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  header: string;
  sortable?: boolean;
  render?: (item: T) => React.ReactNode;
  className?: string;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"header",value:{name:"string",required:!0}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(item: T) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"className",value:{name:"string",required:!1}}]}}],raw:"Column<T>[]"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search..."',computed:!1}},pageSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"No results found."',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const w=[{name:"Lindsay Walton",email:"lindsay@example.com",role:"Admin",status:"Active",department:"Engineering",initials:"LW"},{name:"Courtney Henry",email:"courtney@example.com",role:"Editor",status:"Active",department:"Design",initials:"CH"},{name:"Tom Cook",email:"tom@example.com",role:"Viewer",status:"Inactive",department:"Marketing",initials:"TC"},{name:"Whitney Francis",email:"whitney@example.com",role:"Editor",status:"Active",department:"Engineering",initials:"WF"},{name:"Leonard Krasner",email:"leonard@example.com",role:"Admin",status:"Active",department:"Sales",initials:"LK"},{name:"Floyd Miles",email:"floyd@example.com",role:"Viewer",status:"Inactive",department:"Design",initials:"FM"},{name:"Emily Selman",email:"emily@example.com",role:"Editor",status:"Active",department:"Marketing",initials:"ES"},{name:"Kristin Watson",email:"kristin@example.com",role:"Admin",status:"Active",department:"Engineering",initials:"KW"},{name:"Emma Dorsey",email:"emma@example.com",role:"Viewer",status:"Inactive",department:"Sales",initials:"ED"},{name:"Alicia Bell",email:"alicia@example.com",role:"Editor",status:"Active",department:"Design",initials:"AB"}],ne={title:"Components/DataTable",component:S,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A full-featured data table with search, sortable columns, pagination, and custom cell rendering. Accepts any data shape and column definitions."}}}},g={args:{data:w,columns:[{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"role",header:"Role"},{key:"department",header:"Department"}],searchPlaceholder:"Search users...",pageSize:5}},f={args:{data:w,columns:[{key:"name",header:"Name",sortable:!0,render:a=>e.createElement("div",{className:"flex items-center gap-3"},e.createElement(z,{fallback:a.initials,size:"sm"}),e.createElement("div",null,e.createElement("div",{className:"text-sm font-medium text-text-primary"},a.name),e.createElement("div",{className:"text-xs text-text-muted"},a.email)))},{key:"role",header:"Role",sortable:!0,render:a=>e.createElement(I,{intent:a.role==="Admin"?"brand":a.role==="Editor"?"info":"neutral",variant:"subtle",size:"sm"},a.role)},{key:"department",header:"Department",sortable:!0},{key:"status",header:"Status",sortable:!0,render:a=>e.createElement("div",{className:"flex items-center gap-2"},e.createElement("span",{className:"h-2 w-2 rounded-full",style:{background:a.status==="Active"?"var(--color-success)":"var(--color-border)"}}),e.createElement("span",{className:"text-sm text-text-primary"},a.status))}],searchPlaceholder:"Search users...",pageSize:5}},x={args:{data:w,columns:[{key:"name",header:"Name"},{key:"role",header:"Role"}],searchPlaceholder:"Search...",emptyMessage:"No users match your criteria."}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    data: users,
    columns: [{
      key: "name",
      header: "Name"
    }, {
      key: "email",
      header: "Email"
    }, {
      key: "role",
      header: "Role"
    }, {
      key: "department",
      header: "Department"
    }],
    searchPlaceholder: "Search users...",
    pageSize: 5
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    data: users,
    columns: [{
      key: "name",
      header: "Name",
      sortable: true,
      render: user => <div className="flex items-center gap-3">
            <Avatar fallback={user.initials} size="sm" />
            <div>
              <div className="text-sm font-medium text-text-primary">{user.name}</div>
              <div className="text-xs text-text-muted">{user.email}</div>
            </div>
          </div>
    }, {
      key: "role",
      header: "Role",
      sortable: true,
      render: user => <Badge intent={user.role === "Admin" ? "brand" : user.role === "Editor" ? "info" : "neutral"} variant="subtle" size="sm">
            {user.role}
          </Badge>
    }, {
      key: "department",
      header: "Department",
      sortable: true
    }, {
      key: "status",
      header: "Status",
      sortable: true,
      render: user => <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{
          background: user.status === "Active" ? "var(--color-success)" : "var(--color-border)"
        }} />
            <span className="text-sm text-text-primary">{user.status}</span>
          </div>
    }],
    searchPlaceholder: "Search users...",
    pageSize: 5
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: users,
    columns: [{
      key: "name",
      header: "Name"
    }, {
      key: "role",
      header: "Role"
    }],
    searchPlaceholder: "Search...",
    emptyMessage: "No users match your criteria."
  }
}`,...x.parameters?.docs?.source}}};const se=["Default","WithCustomRenders","EmptyState"];export{g as Default,x as EmptyState,f as WithCustomRenders,se as __namedExportsOrder,ne as default};

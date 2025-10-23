import{c as N}from"./index-CE2vBQ91.js";import{e}from"./iframe-C_g90xlo.js";import{t as d}from"./bundle-mjs-BJeS7sC5.js";import{B as u}from"./Button-DBmr_zz5.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-DN_oH_WJ.js";const f=N("rounded-xl bg-surface text-text-primary border border-border/40 shadow-sm p-5 transition-shadow duration-200",{variants:{elevated:{true:"shadow-md hover:shadow-lg",false:""}},defaultVariants:{elevated:!1}}),a=({as:t="section",title:r,className:n,children:s,elevated:p,...x})=>{const C=t;return e.createElement(C,{className:d(f({elevated:p}),n),"aria-label":r||void 0,...x},s)};a.displayName="Card";const b=({src:t,alt:r,height:n=180,className:s,children:p})=>e.createElement("div",{className:d("relative -m-5 mb-4 overflow-hidden rounded-t-xl",s)},t?e.createElement("img",{src:t,alt:r??"",className:"block h-[--card-media-h] w-full object-cover",style:{"--card-media-h":`${n}px`},loading:"lazy",decoding:"async"}):e.createElement("div",{className:"block h-[--card-media-h] w-full",style:{"--card-media-h":`${n}px`}},p)),v=({id:t,children:r,className:n,...s})=>e.createElement("div",{id:t,className:d("pb-2 text-lg font-medium leading-6",n),...s},r);v.displayName="Card.Header";const g=({className:t,...r})=>e.createElement("div",{className:d("p-4",t),...r});g.displayName="Card.Body";const y=({className:t,...r})=>e.createElement("div",{className:d("pt-4 flex items-center justify-end gap-3",t),...r});y.displayName="Card.Footer";a.Media=b;a.Header=v;a.Body=g;a.Footer=y;a.__docgenInfo={description:"",methods:[{name:"Media",docblock:null,modifiers:["static"],params:[{name:`{
  src,
  alt,
  height = 180,
  className,
  children,
}: CardMediaProps`,optional:!1,type:{name:"union",raw:`| {
    src: string;
    alt?: string;
    height?: number;
    className?: string;
    children?: never;
  }
| {
    children: React.ReactNode;
    className?: string;
    height?: number;
    src?: never;
    alt?: never;
  }`,elements:[{name:"signature",type:"object",raw:`{
  src: string;
  alt?: string;
  height?: number;
  className?: string;
  children?: never;
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"children",value:{name:"never",required:!1}}]}},{name:"signature",type:"object",raw:`{
  children: React.ReactNode;
  className?: string;
  height?: number;
  src?: never;
  alt?: never;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"src",value:{name:"never",required:!1}},{key:"alt",value:{name:"never",required:!1}}]}}],alias:"CardMediaProps"}}],returns:null},{name:"Header",docblock:null,modifiers:["static"],params:[{name:`{
  id,
  children,
  className,
  ...rest
}: ComponentProps<"div">`,optional:!1,type:{name:"ComponentProps",elements:[{name:"literal",value:'"div"'}],raw:'ComponentProps<"div">',alias:"ComponentProps"}}],returns:null},{name:"Body",docblock:null,modifiers:["static"],params:[{name:'{ className, ...props }: ComponentProps<"div">',optional:!1,type:{name:"ComponentProps",elements:[{name:"literal",value:'"div"'}],raw:'ComponentProps<"div">',alias:"ComponentProps"}}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:'{ className, ...props }: ComponentProps<"div">',optional:!1,type:{name:"ComponentProps",elements:[{name:"literal",value:'"div"'}],raw:'ComponentProps<"div">',alias:"ComponentProps"}}],returns:null}],displayName:"Card",props:{as:{required:!1,tsType:{name:"union",raw:'"div" | "section" | "article"',elements:[{name:"literal",value:'"div"'},{name:"literal",value:'"section"'},{name:"literal",value:'"article"'}]},description:"",defaultValue:{value:'"section"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};v.__docgenInfo={description:"",methods:[],displayName:"Card.Header"};const R={title:"Components/Card",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:["A layout container for grouping related content.","","**Semantics & a11y**","- Renders as a `<section>` by default (configurable via `as`).","- Provide `title` to name the region (SSR-safe via `aria-label`).","- Use `Card.Header` for visual titles, `Card.Body` for content, and `Card.Footer` for actions.","- Use `Card.Media` for a full-bleed top media area (image/video/custom)."].join(`
`)}}},argTypes:{as:{control:"inline-radio",options:["section","article","div"],description:"Semantic container element",table:{category:"Behavior"}},title:{control:"text",description:"Accessible name for the region (SSR-safe)",table:{category:"A11y"}},elevated:{control:"boolean",description:"Increase elevation (shadow)",table:{category:"Appearance"}},className:{control:!1},children:{control:!1}},args:{as:"section",elevated:!1,title:""}},o={render:t=>e.createElement(a,{...t,className:"max-w-md"},e.createElement(a.Media,{src:"https://picsum.photos/800/400",alt:"Random scenic cover",height:200}),e.createElement(a.Header,null,"Project Aurora"),e.createElement(a.Body,null,e.createElement("p",{className:"text-text-muted"},"Full-bleed media sits above content and respects rounded corners.")),e.createElement(a.Footer,null,e.createElement(u,{intent:"primary"},"Open"),e.createElement(u,{intent:"secondary"},"Share")))},l={args:{elevated:!0},render:t=>e.createElement(a,{...t,className:"max-w-md"},e.createElement(a.Header,null,"Elevated card"),e.createElement(a.Body,null,e.createElement("p",{className:"text-text-muted"},"Use sparingly for key content.")),e.createElement(a.Footer,null,e.createElement("button",{className:"rounded-md bg-brand px-3 py-2 text-on-brand"},"Action")))},m={render:t=>e.createElement(a,{...t,className:"max-w-lg"},e.createElement(a.Header,null,"Usage analytics"),e.createElement(a.Body,{className:"space-y-3"},e.createElement("div",{className:"grid grid-cols-3 gap-3"},e.createElement("div",{className:"rounded bg-surface-muted p-3"},e.createElement("div",{className:"text-sm text-text-muted"},"Sessions"),e.createElement("div",{className:"text-xl font-medium text-text-primary"},"12,842")),e.createElement("div",{className:"rounded bg-surface-muted p-3"},e.createElement("div",{className:"text-sm text-text-muted"},"Bounce"),e.createElement("div",{className:"text-xl font-medium text-text-primary"},"34%")),e.createElement("div",{className:"rounded bg-surface-muted p-3"},e.createElement("div",{className:"text-sm text-text-muted"},"Avg. time"),e.createElement("div",{className:"text-xl font-medium text-text-primary"},"3m 12s"))),e.createElement("p",{className:"text-text-muted"},"Cards should scale from simple content to denser layouts without style collapse.")),e.createElement(a.Footer,null,e.createElement("button",{className:"rounded-md bg-surface-muted px-3 py-2 text-text-primary"},"Details"),e.createElement("button",{className:"rounded-md bg-brand px-3 py-2 text-on-brand"},"Export")))},c={render:t=>e.createElement("div",{className:"grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2"},Array.from({length:4}).map((r,n)=>e.createElement(a,{key:n,...t},e.createElement(a.Header,null,"Card ",n+1),e.createElement(a.Body,null,e.createElement("p",{className:"text-text-muted"},"Responsive layout sample."))))),args:{elevated:!1}},i={render:t=>e.createElement(a,{...t,className:"max-w-md"},e.createElement(a.Media,{src:"https://picsum.photos/800/400",alt:"Random scenic cover",height:200}),e.createElement(a.Header,null,"Project Aurora"),e.createElement(a.Body,null,e.createElement("p",{className:"text-text-muted"},"Full-bleed media sits above content and respects rounded corners.")),e.createElement(a.Footer,null,e.createElement(u,{intent:"primary"},"Open"),e.createElement(u,{intent:"secondary"},"Share")))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args} className="max-w-md">
      <Card.Media src="https://picsum.photos/800/400" alt="Random scenic cover" height={200} />
      <Card.Header>Project Aurora</Card.Header>
      <Card.Body>
        <p className="text-text-muted">
          Full-bleed media sits above content and respects rounded corners.
        </p>
      </Card.Body>
      <Card.Footer>
        <Button intent="primary">Open</Button>
        <Button intent="secondary">Share</Button>
      </Card.Footer>
    </Card>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    elevated: true
  },
  render: args => <Card {...args} className="max-w-md">
      <Card.Header>Elevated card</Card.Header>
      <Card.Body>
        <p className="text-text-muted">Use sparingly for key content.</p>
      </Card.Body>
      <Card.Footer>
        <button className="rounded-md bg-brand px-3 py-2 text-on-brand">
          Action
        </button>
      </Card.Footer>
    </Card>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args} className="max-w-lg">
      <Card.Header>Usage analytics</Card.Header>
      <Card.Body className="space-y-3">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded bg-surface-muted p-3">
            <div className="text-sm text-text-muted">Sessions</div>
            <div className="text-xl font-medium text-text-primary">12,842</div>
          </div>
          <div className="rounded bg-surface-muted p-3">
            <div className="text-sm text-text-muted">Bounce</div>
            <div className="text-xl font-medium text-text-primary">34%</div>
          </div>
          <div className="rounded bg-surface-muted p-3">
            <div className="text-sm text-text-muted">Avg. time</div>
            <div className="text-xl font-medium text-text-primary">3m 12s</div>
          </div>
        </div>
        <p className="text-text-muted">
          Cards should scale from simple content to denser layouts without style
          collapse.
        </p>
      </Card.Body>
      <Card.Footer>
        <button className="rounded-md bg-surface-muted px-3 py-2 text-text-primary">
          Details
        </button>
        <button className="rounded-md bg-brand px-3 py-2 text-on-brand">
          Export
        </button>
      </Card.Footer>
    </Card>
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div className="grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
      {Array.from({
      length: 4
    }).map((_, i) => <Card key={i} {...args}>
          <Card.Header>Card {i + 1}</Card.Header>
          <Card.Body>
            <p className="text-text-muted">Responsive layout sample.</p>
          </Card.Body>
        </Card>)}
    </div>,
  args: {
    elevated: false
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args} className="max-w-md">
      <Card.Media src="https://picsum.photos/800/400" alt="Random scenic cover" height={200} />
      <Card.Header>Project Aurora</Card.Header>
      <Card.Body>
        <p className="text-text-muted">
          Full-bleed media sits above content and respects rounded corners.
        </p>
      </Card.Body>
      <Card.Footer>
        <Button intent="primary">Open</Button>
        <Button intent="secondary">Share</Button>
      </Card.Footer>
    </Card>
}`,...i.parameters?.docs?.source}}};const k=["Default","Elevated","ContentHeavy","Grid","WithMediaImage"];export{m as ContentHeavy,o as Default,l as Elevated,c as Grid,i as WithMediaImage,k as __namedExportsOrder,R as default};

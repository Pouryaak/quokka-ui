import{j as n}from"./index-8YRTKl2Q.js";import{useMDXComponents as d}from"./index-DVOTEpK1.js";import{M as l}from"./blocks-BwbVNDdx.js";import"./iframe-B0LassJS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CzFWJezh.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Introduction/Changelog"}),`
`,n.jsx(e.h1,{id:"changelog",children:"Changelog"}),`
`,n.jsx(e.p,{children:"All notable changes to this project will be documented in this file."}),`
`,n.jsx(e.h2,{id:"120---2025-06-16",children:"[1.2.0] - 2025-06-16"}),`
`,n.jsx(e.h3,{id:"added",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Sheet"}),": Slide-in panel (drawer) built on Radix Dialog. Supports four sides (top/right/bottom/left), five widths (sm/md/lg/xl/full), and includes Title, Description, Body, Footer layout slots."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Command (Command Palette)"}),": Keyboard-driven command palette with search filtering, arrow key navigation, item groups, and empty state. Built on Radix Dialog with custom keyboard handling."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Progress"}),": Progress bar built on Radix Progress. Supports value-based and indeterminate modes, three sizes (sm/md/lg), and five intents (brand/success/warning/danger/info)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Slider"}),": Range slider built on Radix Slider. Supports single and multi-thumb configurations, three sizes (sm/md/lg), and full keyboard navigation."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Avatar"}),": User avatar built on Radix Avatar. Shows image with automatic fallback initials, circle/rounded variants, and four sizes (sm/md/lg/xl)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accordion"}),": Expandable sections built on Radix Accordion. Supports single/multiple expansion modes, collapsible behavior, and default/bordered/ghost variants."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Breadcrumbs"}),": Breadcrumb navigation with automatic ",n.jsx(e.code,{children:'aria-current="page"'})," on the last item, customizable separators, and automatic styling for current vs. ancestor items."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Pagination"}),": Page navigation with previous/next buttons, ellipsis for large page counts, three sizes (sm/md/lg), and full keyboard accessibility."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"VisuallyHidden"}),": Re-export of Radix VisuallyHidden for accessible screen-reader-only content."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Slot"}),": Re-export of Radix Slot for polymorphic ",n.jsx(e.code,{children:"asChild"})," component composition."]}),`
`]}),`
`,n.jsx(e.h3,{id:"testing",children:"Testing"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added unit tests for all new components (Vitest + React Testing Library + vitest-axe)."}),`
`,n.jsxs(e.li,{children:["Added ",n.jsx(e.code,{children:"ResizeObserver"})," polyfill to test setup for Slider component compatibility."]}),`
`]}),`
`,n.jsx(e.h2,{id:"110---2025-06-16",children:"[1.1.0] - 2025-06-16"}),`
`,n.jsx(e.h3,{id:"added-1",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Label"}),": Accessible form label built on Radix Label, with ",n.jsx(e.code,{children:"required"})," indicator showing a danger-colored asterisk."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Badge"}),": Non-interactive status badge with 3 variants (solid/outline/subtle) × 6 intents (neutral/brand/success/danger/warning/info)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Skeleton"}),": Loading placeholder with text, circle, and rectangle shape variants and accessible ",n.jsx(e.code,{children:'role="status"'}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Switch"}),": Toggle switch built on Radix Switch, with optional inline label and sm/md/lg sizes."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"RadioGroup"}),": Radio button group built on Radix RadioGroup, with per-item labels, arrow key navigation, and sm/md/lg sizes."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tooltip"}),": Hover/focus tooltip built on Radix Tooltip, with configurable side/align, ",n.jsx(e.code,{children:"TooltipProvider"})," for global delay control, and portal-based rendering."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Popover"}),": Click-triggered popover panel built on Radix Popover, with built-in close button, Escape-to-dismiss, and focus management."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"DropdownMenu"}),": Full dropdown menu built on Radix DropdownMenu, with items, separators, labels, groups, and nested submenus."]}),`
`]}),`
`,n.jsx(e.h3,{id:"changed",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Button"}),": Replaced ",n.jsx(e.code,{children:"disabled:pointer-events-none"})," with ",n.jsx(e.code,{children:"disabled:cursor-not-allowed"})," to match library disabled standard."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tabs"}),": Replaced ",n.jsx(e.code,{children:"disabled:pointer-events-none"})," with ",n.jsx(e.code,{children:"disabled:cursor-not-allowed"})," to match library disabled standard."]}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Added ",n.jsx(e.code,{children:"cursor-pointer"})," to all interactive elements across Button, Select, Tabs, RadioGroup, Switch, Popover, DropdownMenu, AlertDialog, Modal, and Toast components for consistent hover feedback."]}),`
`]}),`
`,n.jsx(e.h3,{id:"testing-1",children:"Testing"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added unit tests for all new components (Vitest + React Testing Library + vitest-axe)."}),`
`]}),`
`,n.jsx(e.h2,{id:"102---2025-10-23",children:"[1.0.2] - 2025-10-23"}),`
`,n.jsx(e.h3,{id:"added-2",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"AlertDialog"}),": Radix-based alert dialog with ",n.jsx(e.code,{children:"danger"})," and ",n.jsx(e.code,{children:"neutral"})," variants, contextual styling, focus management, and a11y."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Modal"}),": Radix-based dialog with animated overlay, centered content, and ",n.jsx(e.code,{children:"inside"})," / ",n.jsx(e.code,{children:"outside"})," scroll behavior."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Toast"}),": Notification system with provider, hook, and variants (",n.jsx(e.code,{children:"success"}),", ",n.jsx(e.code,{children:"info"}),", ",n.jsx(e.code,{children:"warning"}),", ",n.jsx(e.code,{children:"danger"}),"); supports position, duration, and stacking."]}),`
`]}),`
`,n.jsx(e.h3,{id:"documentation",children:"Documentation"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Added Storybook stories for ",n.jsx(e.strong,{children:"AlertDialog"}),", ",n.jsx(e.strong,{children:"Modal"}),", and ",n.jsx(e.strong,{children:"Toast"})," with usage examples."]}),`
`]}),`
`,n.jsx(e.h3,{id:"testing-2",children:"Testing"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added unit tests for all the components (Vitest + React Testing Library)."}),`
`]}),`
`,n.jsx(e.h2,{id:"101---2025-10-03",children:"[1.0.1] - 2025-10-03"}),`
`,n.jsx(e.h3,{id:"added-3",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Documentation"}),': Created a new polished "Welcome" introduction page with a live component showcase.']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Documentation"}),': Added a detailed "Installation" guide.']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Theming"}),": Implemented a custom theme for the Storybook UI, including a logo and brand colors."]}),`
`]}),`
`,n.jsx(e.h2,{id:"100---2025-10-03",children:"[1.0.0] - 2025-10-03"}),`
`,n.jsx(e.h3,{id:"added-4",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"🎉 Initial release of Quokka UI!"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"New Components"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"Button"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"Card"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"Input"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"Checkbox"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"Select"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"Spinner"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"Tabs"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"TextArea"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"Table"})}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Theming"}),": Added support for light and dark modes via CSS variables."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Documentation"}),": Initial version of Storybook documentation site."]}),`
`]})]})}function x(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{x as default};

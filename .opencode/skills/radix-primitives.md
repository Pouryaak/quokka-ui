# Radix UI Primitives — Best Practices

Reference for building components on top of Radix UI primitives. Load this skill whenever you work with Radix components.

## Core Philosophy

Radix primitives are **unstyled, accessible building blocks**. They handle behavior (keyboard, focus, ARIA), you handle appearance (Tailwind + tokens).

<composition_pattern>
## Composition with asChild

All Radix parts that render a DOM element accept `asChild`. When `true`, Radix clones the child element instead of rendering its default element, passing all required props, event handlers, and refs.

**Two critical requirements when using asChild with custom components:**

1. **Your component MUST spread all props** onto its root element:
```tsx
const MyButton = React.forwardRef<HTMLButtonElement, MyButtonProps>(
  (props, forwardedRef) => <button {...props} ref={forwardedRef} />
);
```

2. **Your component MUST forward ref** using `React.forwardRef`:
```tsx
const MyButton = React.forwardRef<HTMLButtonElement, MyButtonProps>(
  (props, forwardedRef) => <button {...props} ref={forwardedRef} />
);
```

Both are always required — don't try to guess which props Radix will pass.

**Composing multiple primitives** (e.g., Tooltip trigger + Dialog trigger on the same button):
```tsx
<Tooltip.Trigger asChild>
  <Dialog.Trigger asChild>
    <MyButton>Open dialog</MyButton>
  </Dialog.Trigger>
</Tooltip.Trigger>
```
</composition_pattern>

<data_attributes>
## Data Attributes for State Styling

Radix uses DOM data attributes to communicate state. Style these, don't manage state yourself:

| Attribute | Meaning | When to use |
|---|---|---|
| `data-state="open"` / `data-state="closed"` | Open/closed state | Accordion, Dialog, Select, Dropdown, Collapsible, Popover |
| `data-state="checked"` / `data-state="unchecked"` | Toggle state | Checkbox, Toggle, Switch, Radio |
| `data-state="on"` / `data-state="off"` | On/off state | Toggle |
| `data-state="active"` / `data-state="inactive"` | Active state | Tab trigger |
| `data-disabled` | Disabled attribute | All interactive parts |
| `data-highlighted` | Keyboard highlighted | Select items, dropdown items |
| `data-[side]` | Popover position (top/bottom/left/right) | Popover, Tooltip, HoverCard content |
| `data-[align]` | Popover alignment (start/center/end) | Popover, Tooltip, HoverCard content |
| `data-orientation="horizontal|vertical"` | Orientation | Tabs, Slider, ScrollArea, Toolbar |

Style in Tailwind using arbitrary variants or attribute selectors in CVA:
```tsx
// In CVA string:
"data-[state=open]:border-brand data-[state=closed]:border-transparent"
"data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"
"data-[highlighted]:bg-surface-muted"

// For complex states, use the data attribute directly:
<Content className={twMerge(
  "base-styles",
  "data-[side=top]:animate-slide-down",
  "data-[side=bottom]:animate-slide-up"
)} />
```
</data_attributes>

<controlled_vs_uncontrolled>
## Controlled vs Uncontrolled

Radix components accept both controlled and uncontrolled props. Never mix them:

**Uncontrolled** (Radix manages state internally):
```tsx
<Select.Root defaultValue="apple">
```
- Use `defaultValue`, `defaultOpen`, `defaultChecked`
- Simple, no state management needed

**Controlled** (you manage state):
```tsx
const [value, setValue] = useState("apple");
<Select.Root value={value} onValueChange={setValue}>
```
- Use `value` + `onValueChange`, `open` + `onOpenChange`, `checked` + `onCheckedChange`
- Required for programmatic control

**Rule:** If you provide `value`, you MUST provide `onValueChange`. If you provide neither, the component is uncontrolled.
</controlled_vs_uncontrolled>

<compound_pattern>
## Compound Component Pattern in Quokka UI

We use `Object.assign` to expose subcomponents. Example from Select:

```tsx
const SelectRoot = ({ children, variant, size, ...props }: SelectProps) => (
  <RadixSelect.Root {...props}>
    <RadixSelect.Trigger className={twMerge(selectTriggerStyles({ variant, size }))}>
      <RadixSelect.Value placeholder={placeholder} />
      <RadixSelect.Icon><CaretSortIcon /></RadixSelect.Icon>
    </RadixSelect.Trigger>
    <RadixSelect.Portal>
      <RadixSelect.Content className={selectContentStyles()}>
        <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  </RadixSelect.Root>
);

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, children, ...props }, ref) => (
    <RadixSelect.Item ref={ref} className={twMerge(selectItemStyles(), className)} {...props}>
      <RadixSelect.ItemIndicator><CheckIcon /></RadixSelect.ItemIndicator>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </RadixSelect.Item>
  )
);
SelectItem.displayName = "Select.Item";

export const Select = Object.assign(SelectRoot, {
  Item: SelectItem,
  Group: RadixSelect.Group,
  Label: RadixSelect.Label,
});
```

Export pattern: `Object.assign(RootComponent, { Item, Group, Label, ... })`.
</compound_pattern>

<portals>
## Portals

Components that overlay content (Dialog, Select, Popover, Tooltip, DropdownMenu, HoverCard, Toast) use portals via `RadixXxx.Portal`. Always wrap content in the Portal to render into `document.body`:

```tsx
<RadixSelect.Portal>
  <RadixSelect.Content>...</RadixSelect.Content>
</RadixSelect.Portal>
```

Without a Portal, z-index and overflow clipping issues will occur.
</portals>

<available_primitives>
## Radix Primitives Available in Quokka UI

These are already installed as dependencies:

| Package | Component | Use case |
|---|---|---|
| `@radix-ui/react-alert-dialog` | AlertDialog | Confirmation dialogs |
| `@radix-ui/react-dialog` | Dialog (used in Modal) | Modal overlays |
| `@radix-ui/react-select` | Select | Dropdown selects |
| `@radix-ui/react-tabs` | Tabs | Tabbed interfaces |
| `@radix-ui/react-toast` | Toast | Notification toasts |

If you need additional Radix primitives, install with `pnpm add @radix-ui/react-<name>`.
</available_primitives>

<common_traps>
## Common Mistakes to Avoid

1. **Not forwarding ref in custom components inside asChild** — breaks focus management
2. **Not spreading props in custom components** — breaks event handlers and ARIA attributes
3. **Mixing controlled and uncontrolled** — causes React warnings
4. **Forgetting Portal** — content gets clipped by parent overflow
5. **Destructuring Radix props before spreading** — loses ARIA/data attributes
6. **Using `<button>` inside a Radix Trigger without asChild** — double-nested buttons break a11y
7. **Wrapping Select.Item in extra divs** — must be direct children of Viewport
</common_traps>

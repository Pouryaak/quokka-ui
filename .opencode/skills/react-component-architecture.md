# React Component Architecture

Reference for building React components in the Quokka UI design system. Load this skill when creating or modifying components.

## Component Blueprint

Every component in Quokka UI follows this exact structure:

```tsx
import React from "react";

export interface ComponentNameProps {
  className?: string;
  children?: React.ReactNode;
}

export const ComponentName = React.forwardRef<HTMLDivElement, ComponentNameProps>(
  (props, ref) => {
    const { className, children, ...rest } = props;

    return (
      <div ref={ref} className={className} {...rest}>
        {children}
      </div>
    );
  }
);
ComponentName.displayName = "ComponentName";
```

<forwardref_rules>
## forwardRef Rules

- Every component that renders a DOM element MUST use `React.forwardRef`.
- The ref type must match the rendered element: `HTMLButtonElement`, `HTMLInputElement`, `HTMLDivElement`, `HTMLAnchorElement`.
- For polymorphic components (button or anchor), use a union type: `HTMLButtonElement | HTMLAnchorElement`.
- Pass ref directly to the root DOM element, not through another component.
- displayName MUST be set immediately after the component definition.
</forwardref_rules>

<props_patterns>
## Props Patterns

### Base props every component should expose:
```tsx
interface ComponentNameProps {
  className?: string;      // always allow className override
  children?: React.ReactNode; // if the component wraps content
}
```

### Extending HTML element props (for simple components):
```tsx
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};
```

### Extending Radix props (for Radix-wrapped components):
```tsx
type SelectProps = RadixSelect.SelectProps & VariantProps<typeof selectStyles> & {
  placeholder?: string;
  className?: string;
};
```

### Discriminated union pattern (when a prop changes the element type):
```tsx
export type ButtonAsButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
  };

export type ButtonAsAnchorProps = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;
```
</props_patterns>

<compound_vs_single>
## Compound vs Single Components

### Single component (simple, one render target):
```
src/components/Button/Button.tsx
src/components/Input/Input.tsx
src/components/Checkbox/Checkbox.tsx
src/components/Spinner/Spinner.tsx
src/components/Textarea/Textarea.tsx
```
Export pattern:
```tsx
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => { ... });
Button.displayName = "Button";
```

### Compound component (multiple subcomponents):
```
src/components/Select/Select.tsx    (SelectRoot + SelectItem + SelectGroup + SelectLabel)
src/components/Tabs/Tabs.tsx        (TabsRoot + TabsList + TabsTrigger + TabsContent)
src/components/Toast/Toast.tsx      (ToastProvider + Toast + ToastTitle + ...)
```
Export pattern:
```tsx
export const Select = Object.assign(SelectRoot, {
  Item: SelectItem,
  Group: SelectGroup,
  Label: SelectLabel,
});
```

Subcomponents that use forwardRef must have displayName set:
```tsx
SelectItem.displayName = "Select.Item";
```
</compound_vs_single>

<state_management>
## State Management in Components

### Use props for state (preferred):
Push state up. Components should be controlled or uncontrolled, never internally managed unless it's a pure UI state (e.g., hover).

### Loading state pattern:
```tsx
interface ButtonProps {
  loading?: boolean;
  disabled?: boolean;
}

const isDisabled = disabled || loading;
<button disabled={isDisabled} aria-busy={loading || undefined}>
```

### Disabled state for non-buttons (links, divs acting as interactive):
```tsx
aria-disabled={isDisabled || undefined}
tabIndex={isDisabled ? -1 : 0}
// Block clicks/keydowns in handlers
```
</state_management>

<accessibility_requirements>
## Accessibility Requirements in Every Component

Every interactive component MUST:

1. **Focus-visible indicator**: visible focus ring using `focus-visible:ring-2 focus-visible:ring-brand`
2. **Disabled state**: `disabled:cursor-not-allowed disabled:opacity-50`
3. **Keyboard activation**: Enter and/or Space for clickable elements
4. **ARIA busy for loading**: `aria-busy={loading || undefined}`
5. **ARIA disabled for non-buttons**: `aria-disabled={isDisabled || undefined}`
6. **Accessible name**: via children, `aria-label`, or `aria-labelledby`
7. **Icons marked decorative**: `<span aria-hidden="true">{icon}</span>`
8. **Screen-reader text** for icon-only buttons: `<span className="sr-only">Label</span>`
</accessibility_requirements>

<sr_only_class>
## Screen-Reader-Only Utility

Quokka UI uses Tailwind's sr-only via the `@tailwindcss/vite` plugin. Add:
```tsx
<span className="sr-only">Loading</span>
```

This hides content visually but keeps it accessible to screen readers.
</sr_only_class>

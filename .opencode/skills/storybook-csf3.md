# Storybook CSF3 Conventions

Reference for writing Storybook stories in Quokka UI. Load this skill when creating or modifying `.stories.tsx` files.

## CSF3 Format

Quokka UI uses Component Story Format 3 (CSF3) — the latest standard. Stories are plain objects, not functions.

<story_structure>
## Story File Structure

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentName } from "./ComponentName";
import React from "react";

const meta = {
  title: "Components/ComponentName",
  component: ComponentName,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "Description line 1.",
          "Description line 2.",
          "",
          "**A11y defaults:**",
          "- Feature 1",
          "- Feature 2",
          "",
          "**When to use:** guidance.",
        ].join("\n"),
      },
    },
  },
  argTypes: {
    // ... documented below
  },
  args: {
    // Default args for ALL stories
  },
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;
```

**Key rules:**
- Always use `satisfies Meta<typeof ComponentName>` (not `as Meta`)
- Always include `tags: ["autodocs"]`
- `title` format: `"Components/<Name>"`
- `layout: "centered"` for standalone components
</story_structure>

<argtypes>
## ArgTypes Documentation

Every prop must be documented in argTypes. Use categories for organization:

```tsx
argTypes: {
  variant: {
    control: "inline-radio",
    options: ["outline", "subtle"],
    description: "Visual style of the component",
    table: { category: "Appearance" },
  },
  size: {
    control: "inline-radio",
    options: ["sm", "md", "lg"],
    description: "Size variant",
    table: { category: "Appearance" },
  },
  children: {
    description: "Button label or content",
    table: { category: "Content" },
  },
  disabled: {
    control: "boolean",
    description: "Disables interaction",
    table: { category: "Behavior" },
  },
  onClick: {
    action: "clicked",
    table: { category: "Events" },
  },
}
```

### Category Convention:
- `"Appearance"` — variant, size, color, intent, rounded
- `"Content"` — children, label, placeholder, icons, prefix, suffix
- `"Behavior"` — disabled, loading, href, target, required, readonly
- `"Events"` — onClick, onChange, onFocus, onBlur, onSubmit
</argtypes>

<required_stories>
## Required Stories Checklist

### Every component MUST have:
- [ ] Default — component with default args
- [ ] Each variant — one story per variant value
- [ ] Sizes — all sizes shown (combined render or individual stories)

### When applicable:
- [ ] Disabled — disabled={true}
- [ ] Loading — loading={true} (Button, etc.)
- [ ] With icons — startIcon + endIcon
- [ ] Error state — error message or invalid state
- [ ] Long content — truncated/overflow behavior
- [ ] Controlled — interactive stories with play functions

### For compound components:
- [ ] Full usage with all subcomponents
- [ ] Individual subcomponent variations
</required_stories>

<story_patterns>
## Common Story Patterns

### Simple story (uses args from meta):
```tsx
export const Primary: Story = {
  args: { variant: "primary", children: "Primary Button" },
};
```

### Render function (complex layouts):
```tsx
export const AllSizes: Story = {
  render: (args) => (
    <div className="flex gap-3 items-center">
      <ComponentName {...args} size="sm">Small</ComponentName>
      <ComponentName {...args} size="md">Medium</ComponentName>
      <ComponentName {...args} size="lg">Large</ComponentName>
    </div>
  ),
};
```

### With play function (interactions):
```tsx
export const WithInteraction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    // assert something after interaction
  },
};
```

### Disabled state:
```tsx
export const Disabled: Story = {
  args: { disabled: true, children: "Disabled" },
};
```

### Loading state:
```tsx
export const Loading: Story = {
  args: { loading: true, children: "Saving..." },
};
```
</story_patterns>

<compound_component_stories>
## Compound Component Stories

For components like Select, Tabs:

```tsx
const meta = {
  title: "Components/Select",
  component: Select,           // The Object.assign export
  subcomponents: {              // Document subcomponents
    "Select.Item": Select.Item,
    "Select.Group": Select.Group,
    "Select.Label": Select.Label,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <Select.Item value="apple">Apple</Select.Item>
      <Select.Item value="banana">Banana</Select.Item>
      <Select.Item value="cherry">Cherry</Select.Item>
    </Select>
  ),
};
```
</compound_component_stories>

<component_description>
## Component Description Guidelines

The `docs.description.component` should follow this template:

```tsx
[
  "A semantic, accessible [component type] that [what it does].",
  "",
  "**A11y defaults:**",
  "- [keyboard feature]",
  "- [ARIA feature]",
  "- [screen reader feature]",
  "",
  "**When to use:** [brief usage guidance].",
].join("\n")
```

Keep it to 5-10 lines. Developers scan this in Storybook.
</component_description>

<dark_mode_stories>
## Dark Mode Stories

No separate dark mode stories needed. Quokka UI tokens handle dark mode automatically. If you need to demo dark mode:

```tsx
export const DarkMode: Story = {
  parameters: {
    themes: {
      default: "dark",
    },
  },
};
```

(This requires `@storybook/addon-themes` which is already installed.)
</dark_mode_stories>

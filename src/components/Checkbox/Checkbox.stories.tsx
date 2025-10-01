// File: src/components/checkbox/Checkbox.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "Accessible checkbox with outline/subtle variants, sizes, helper/error text, and SSR-safe output.",
          "",
          "**A11y**",
          "- Uses a native `<input type='checkbox'>` for keyboard and screen reader support.",
          "- Error state sets `aria-invalid` + `aria-errormessage`; helper text uses `aria-describedby`.",
          "- Label text is required for accessibility.",
          "",
          "**Design**",
          "- Colors rely on design tokens (brand/surface/border) for dark/light themes.",
          "- Focus ring is visible on keyboard navigation (`:focus-visible`).",
        ].join("\n"),
      },
    },
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["outline", "subtle"],
      description: "Visual style of the box",
      table: { category: "Appearance" },
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      description: "Control size",
      table: { category: "Appearance" },
    },
    label: {
      control: "text",
      description: "Visible label text",
      table: { category: "Content" },
    },
    helperText: {
      control: "text",
      description: "Assistive description below the label",
      table: { category: "Feedback" },
    },
    error: {
      control: "text",
      description: "Error message (overrides helper text)",
      table: { category: "Feedback" },
    },
    disabled: {
      control: "boolean",
      table: { category: "State" },
    },
    required: {
      control: "boolean",
      table: { category: "State" },
    },
    className: { control: false },
    id: { control: false },
    onChange: { action: "changed", table: { category: "Events" } },
  },
  args: {
    variant: "outline",
    size: "md",
    label: "Subscribe to updates",
    helperText: "",
    error: "",
    disabled: false,
    required: false,
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

/* — Basics — */
export const Default: Story = {};

/* — Visual variants side-by-side — */
export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Checkbox {...args} variant="outline" label="Outline" />
      <Checkbox {...args} variant="subtle" label="Subtle" />
    </div>
  ),
  parameters: {
    docs: { description: { story: "Compare `outline` vs `subtle` styles." } },
  },
};

/* — Sizes — */
export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Checkbox {...args} size="sm" label="Small" />
      <Checkbox {...args} size="md" label="Medium" />
      <Checkbox {...args} size="lg" label="Large" />
    </div>
  ),
  parameters: {
    docs: { description: { story: "Small, medium, and large hit areas." } },
  },
};

/* — Helper vs Error — */
export const WithHelperText: Story = {
  args: {
    label: "Accept newsletter",
    helperText: "You can unsubscribe at any time.",
  },
};

export const WithError: Story = {
  args: {
    label: "Accept terms",
    error: "You must accept the terms to continue.",
  },
};

/* — Disabled / Required — */
export const Disabled: Story = {
  args: {
    label: "Disabled option",
    disabled: true,
    helperText: "This option is unavailable.",
  },
};

export const Required: Story = {
  args: {
    label: "I agree to the Privacy Policy",
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "`required` adds semantic constraint; still provide validation UX in forms.",
      },
    },
  },
};

/* — Controlled checkbox — */
export const Controlled: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false);
    return (
      <div className="flex max-w-md flex-col gap-2">
        <Checkbox
          {...args}
          label={`Controlled checkbox (${checked ? "checked" : "unchecked"})`}
          checked={checked}
          onChange={(e) => setChecked(e.currentTarget.checked)}
          helperText="State is managed by the parent."
        />
        <div className="text-sm text-text-muted">
          Try clicking label or box.
        </div>
      </div>
    );
  },
  args: { helperText: "" },
  parameters: {
    docs: {
      description: {
        story: "Parent controls the `checked` state via `onChange`.",
      },
    },
  },
};

/* — In a list (common app pattern) — */
export const InList: Story = {
  render: (args) => {
    const initial = [
      { id: 1, name: "Email notifications" },
      { id: 2, name: "Product updates" },
      { id: 3, name: "Beta features" },
    ];
    const [selected, setSelected] = React.useState<number[]>([1]);

    const toggle = (id: number) =>
      setSelected((s) =>
        s.includes(id) ? s.filter((x) => x !== id) : [...s, id]
      );

    return (
      <div className="w-[320px] rounded-xl border border-border/40 bg-surface p-4">
        <div className="mb-2 text-sm font-medium text-text-primary">
          Preferences
        </div>
        <div className="flex flex-col gap-3">
          {initial.map((item) => (
            <Checkbox
              key={item.id}
              {...args}
              label={item.name}
              checked={selected.includes(item.id)}
              onChange={() => toggle(item.id)}
              helperText=""
            />
          ))}
        </div>
        <div className="mt-3 text-sm text-text-muted">
          Selected: {selected.length}/{initial.length}
        </div>
      </div>
    );
  },
  args: { variant: "outline", size: "md" },
  parameters: {
    docs: {
      description: {
        story: "Realistic multiple-checkbox usage with parent-managed state.",
      },
    },
  },
};

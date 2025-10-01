import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "Text input with outline/subtle variants, sizes, and built-in a11y wiring.",
          "",
          "**A11y**",
          "- Provide a visible `label` or an `aria-label` when label is omitted.",
          "- `error` shows an error message and sets `aria-invalid` + `aria-errormessage`.",
          "- `helperText` is referenced via `aria-describedby` when no error.",
        ].join("\n"),
      },
    },
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["outline", "subtle"],
      description: "Visual variant",
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
      description: "Visible label text (use `aria-label` if omitted)",
      table: { category: "Content" },
    },
    placeholder: {
      control: "text",
      table: { category: "Content" },
    },
    helperText: {
      control: "text",
      description: "Assistive description shown below the field",
      table: { category: "Feedback" },
    },
    error: {
      control: "text",
      description: "Error message (trumps helper text)",
      table: { category: "Feedback" },
    },
    required: {
      control: "boolean",
      table: { category: "Behavior" },
    },
    disabled: {
      control: "boolean",
      table: { category: "Behavior" },
    },
    className: { control: false },
    onChange: { action: "changed", table: { category: "Events" } },
  },
  args: {
    variant: "outline",
    size: "md",
    label: "",
    placeholder: "you@example.com",
    helperText: "",
    error: "",
    disabled: false,
    required: false,
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const OutlineVsSubtle: Story = {
  render: (args) => (
    <div className="flex max-w-md flex-col gap-4">
      <Input
        {...args}
        variant="outline"
        label="Outline"
        placeholder="Outline input"
      />
      <Input
        {...args}
        variant="subtle"
        label="Subtle"
        placeholder="Subtle input"
      />
    </div>
  ),
  args: { helperText: "This is helper text" },
  parameters: {
    docs: {
      description: {
        story: "Compare `outline` and `subtle` variants side by side.",
      },
    },
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex max-w-md flex-col gap-4">
      <Input {...args} size="sm" label="Small" placeholder="Small" />
      <Input {...args} size="md" label="Medium" placeholder="Medium" />
      <Input {...args} size="lg" label="Large" placeholder="Large" />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Small, medium, and large heights & paddings." },
    },
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Username",
    helperText: "Use 3–16 characters. Only letters and numbers.",
    placeholder: "yourname",
  },
};

export const WithError: Story = {
  args: {
    label: "Username",
    error: "Username is already taken",
    placeholder: "yourname",
  },
};

export const Required: Story = {
  args: {
    label: "Full name",
    required: true,
    placeholder: "Jane Doe",
    helperText: "This field is required.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
    placeholder: "Cannot type here",
    helperText: "This field is disabled.",
  },
};

export const AriaLabelOnly: Story = {
  args: {
    label: "",
    placeholder: "Search",
    helperText: "Press Enter to submit",
    "aria-label": "Search",
  } as any,
  parameters: {
    docs: {
      description: {
        story:
          "When omitting a visible label, provide `aria-label` to name the control for screen readers.",
      },
    },
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("");
    return (
      <div className="max-w-md">
        <Input
          {...args}
          label="Controlled value"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          helperText={`Length: ${value.length}`}
          placeholder="Type to see length update"
        />
      </div>
    );
  },
  args: { variant: "outline" },
  parameters: {
    docs: {
      description: { story: "Fully controlled input with live helper text." },
    },
  },
};

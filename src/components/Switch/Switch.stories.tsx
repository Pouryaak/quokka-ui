import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";
import React from "react";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An accessible toggle switch built on Radix Switch. Supports controlled and uncontrolled usage, labels, and form integration via `name` and `value` props.",
      },
    },
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      table: { category: "Appearance" },
    },
    label: {
      control: "text",
      description: "Optional visible label",
      table: { category: "Content" },
    },
    disabled: {
      control: "boolean",
      table: { category: "Behavior" },
    },
    defaultChecked: {
      control: "boolean",
      table: { category: "Behavior" },
    },
  },
  args: {
    size: "md",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: { label: "Airplane mode" },
};

export const CheckedByDefault: Story = {
  args: { defaultChecked: true, label: "Notifications" },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Switch {...args} size="sm" label="Small" />
      <Switch {...args} size="md" label="Medium" />
      <Switch {...args} size="lg" label="Large" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch disabled label="Disabled off" />
      <Switch disabled defaultChecked label="Disabled on" />
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <div className="flex flex-col gap-3">
        <Switch
          checked={checked}
          onCheckedChange={setChecked}
          label="Dark mode"
        />
        <span className="text-sm text-text-muted">
          {checked ? "On" : "Off"}
        </span>
      </div>
    );
  },
};

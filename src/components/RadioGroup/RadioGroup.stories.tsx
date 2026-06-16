import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";
import React from "react";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A radio button group built on Radix RadioGroup. Supports controlled/uncontrolled usage, arrow key navigation, and form integration via `name` and `value` props.",
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: "text",
      table: { category: "Behavior" },
    },
    disabled: {
      control: "boolean",
      description: "Disables all items",
      table: { category: "Behavior" },
    },
    orientation: {
      control: "inline-radio",
      options: ["vertical", "horizontal"],
      table: { category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option-1" {...args}>
      <RadioGroup.Item value="option-1" label="Option 1" />
      <RadioGroup.Item value="option-2" label="Option 2" />
      <RadioGroup.Item value="option-3" label="Option 3" />
    </RadioGroup>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      <RadioGroup defaultValue="sm" {...args}>
        <RadioGroup.Item size="sm" value="sm" label="Small" />
        <RadioGroup.Item size="sm" value="sm-2" label="Small" />
      </RadioGroup>
      <RadioGroup defaultValue="md" {...args}>
        <RadioGroup.Item size="md" value="md" label="Medium" />
        <RadioGroup.Item size="md" value="md-2" label="Medium" />
      </RadioGroup>
      <RadioGroup defaultValue="lg" {...args}>
        <RadioGroup.Item size="lg" value="lg" label="Large" />
        <RadioGroup.Item size="lg" value="lg-2" label="Large" />
      </RadioGroup>
    </div>
  ),
};

export const Horizontal: Story = {
  render: (args) => (
    <RadioGroup
      defaultValue="horizontal-1"
      orientation="horizontal"
      className="flex-row gap-4"
      {...args}
    >
      <RadioGroup.Item value="horizontal-1" label="Horizontal 1" />
      <RadioGroup.Item value="horizontal-2" label="Horizontal 2" />
      <RadioGroup.Item value="horizontal-3" label="Horizontal 3" />
    </RadioGroup>
  ),
};

export const WithDisabled: Story = {
  render: (args) => (
    <RadioGroup defaultValue="enabled" {...args}>
      <RadioGroup.Item value="enabled" label="Enabled" />
      <RadioGroup.Item value="disabled" label="Disabled" disabled />
      <RadioGroup.Item value="also-enabled" label="Also enabled" />
    </RadioGroup>
  ),
};

export const FullyDisabled: Story = {
  render: (args) => (
    <RadioGroup defaultValue="a" disabled {...args}>
      <RadioGroup.Item value="a" label="All disabled A" />
      <RadioGroup.Item value="b" label="All disabled B" />
    </RadioGroup>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState("controlled-1");
    return (
      <div className="flex flex-col gap-3">
        <RadioGroup value={value} onValueChange={setValue}>
          <RadioGroup.Item value="controlled-1" label="Option A" />
          <RadioGroup.Item value="controlled-2" label="Option B" />
          <RadioGroup.Item value="controlled-3" label="Option C" />
        </RadioGroup>
        <span className="text-sm text-text-muted">Selected: {value}</span>
      </div>
    );
  },
};

// src/components/Select/Select.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "Accessible select built on Radix UI.",
          "",
          "**Features**",
          "- Outline/subtle variants; sm/md/lg trigger sizes.",
          "- Keyboard nav, typeahead, and ARIA by Radix.",
          "- Highlighted/selected/disabled item styles.",
        ].join("\n"),
      },
    },
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["outline", "subtle"],
      table: { category: "Appearance" },
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      table: { category: "Appearance" },
    },
    placeholder: { control: "text", table: { category: "Content" } },
    defaultValue: { control: false },
    value: { control: false },
    onValueChange: { action: "valueChange" },
  },
  args: {
    variant: "outline",
    size: "md",
    placeholder: "Select an option…",
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

const Options = () => (
  <>
    <Select.Item value="apple">Apple</Select.Item>
    <Select.Item value="banana">Banana</Select.Item>
    <Select.Item value="blueberry">Blueberry</Select.Item>
    <Select.Item value="grapes">Grapes</Select.Item>
    <Select.Item value="pineapple" disabled>
      Pineapple (disabled)
    </Select.Item>
  </>
);

export const Default: Story = {
  render: (args) => (
    <Select {...args} defaultValue="banana">
      <Options />
    </Select>
  ),
};

export const VariantComparison: Story = {
  render: (args) => (
    <div className="flex w-[600px] max-w-full items-start gap-6">
      <div className="flex w-[280px] flex-col gap-2">
        <div className="text-sm text-text-muted">Outline</div>
        <Select {...args} variant="outline" defaultValue="banana">
          <Options />
        </Select>
      </div>

      <div className="flex w-[280px] flex-col gap-2">
        <div className="text-sm text-text-muted">Subtle</div>
        <Select {...args} variant="subtle" defaultValue="apple">
          <Options />
        </Select>
      </div>
    </div>
  ),
  args: {
    placeholder: "Select…",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Direct comparison between `outline` and `subtle` trigger styles.",
      },
    },
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-[280px]">
      <Select {...args} size="sm" defaultValue="apple">
        <Options />
      </Select>
      <Select {...args} size="md" defaultValue="banana">
        <Options />
      </Select>
      <Select {...args} size="lg" defaultValue="blueberry">
        <Options />
      </Select>
    </div>
  ),
};

export const Grouped: Story = {
  render: (args) => (
    <Select {...args} defaultValue="au">
      <Select.Group>
        <Select.Label>Popular</Select.Label>
        <Select.Item value="us">United States</Select.Item>
        <Select.Item value="uk">United Kingdom</Select.Item>
      </Select.Group>
      <Select.Group>
        <Select.Label>All</Select.Label>
        <Select.Item value="au">Australia</Select.Item>
        <Select.Item value="ca">Canada</Select.Item>
        <Select.Item value="de">Germany</Select.Item>
        <Select.Item value="jp">Japan</Select.Item>
      </Select.Group>
    </Select>
  ),
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("blueberry");
    return (
      <div className="w-[280px]">
        <Select
          {...args}
          value={value}
          onValueChange={(v) => setValue(v)}
          placeholder="Pick fruit"
        >
          <Options />
        </Select>
        <div className="mt-2 text-sm text-text-muted">Current: {value}</div>
      </div>
    );
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";
import React from "react";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A range slider built on Radix Slider. Supports single and multi-thumb configurations, keyboard navigation, and form integration.",
      },
    },
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      table: { category: "Appearance" },
    },
    disabled: {
      control: "boolean",
      table: { category: "Behavior" },
    },
    defaultValue: {
      control: "object",
      table: { category: "Behavior" },
    },
    min: {
      control: "number",
      table: { category: "Behavior" },
    },
    max: {
      control: "number",
      table: { category: "Behavior" },
    },
    step: {
      control: "number",
      table: { category: "Behavior" },
    },
  },
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
    size: "md",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-64">
      <Slider {...args} />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex w-64 flex-col gap-6">
      <Slider {...args} size="sm" defaultValue={[30]} />
      <Slider {...args} size="md" defaultValue={[50]} />
      <Slider {...args} size="lg" defaultValue={[70]} />
    </div>
  ),
};

export const Range: Story = {
  render: (args) => (
    <div className="w-64">
      <Slider {...args} defaultValue={[25, 75]} />
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <div className="w-64">
      <Slider {...args} disabled defaultValue={[40]} />
    </div>
  ),
};

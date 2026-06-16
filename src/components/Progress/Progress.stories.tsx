import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress";
import React from "react";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A progress bar built on Radix Progress. Supports value-based and indeterminate states, with size and intent variants.",
      },
    },
  },
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      table: { category: "Behavior" },
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      table: { category: "Appearance" },
    },
    intent: {
      control: "inline-radio",
      options: ["brand", "success", "warning", "danger", "info"],
      table: { category: "Appearance" },
    },
  },
  args: {
    value: 60,
    size: "md",
    intent: "brand",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Intents: Story = {
  render: (args) => (
    <div className="flex w-64 flex-col gap-3">
      <Progress {...args} value={75} intent="brand" />
      <Progress {...args} value={50} intent="success" />
      <Progress {...args} value={30} intent="warning" />
      <Progress {...args} value={90} intent="danger" />
      <Progress {...args} value={65} intent="info" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex w-64 flex-col gap-3">
      <Progress {...args} size="sm" value={50} />
      <Progress {...args} size="md" value={50} />
      <Progress {...args} size="lg" value={50} />
    </div>
  ),
};

export const Indeterminate: Story = {
  render: (args) => (
    <div className="w-64">
      <Progress {...args} value={undefined} />
    </div>
  ),
};

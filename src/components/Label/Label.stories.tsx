import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";
import React from "react";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An accessible form label built on Radix Label. Automatically associates with the nearest form control via `htmlFor`.",
      },
    },
  },
  argTypes: {
    children: { description: "Label text", table: { category: "Content" } },
    htmlFor: {
      control: "text",
      description: "ID of the associated form control",
      table: { category: "Accessibility" },
    },
    required: {
      control: "boolean",
      description: "Shows a required asterisk",
      table: { category: "Appearance" },
    },
  },
  args: {
    children: "Email address",
    required: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
  args: { required: true },
};

export const WithInput: Story = {
  render: (args) => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="demo-email" {...args} />
      <input
        id="demo-email"
        type="email"
        placeholder="you@example.com"
        className="h-10 w-64 rounded-md border border-border bg-surface px-3 text-sm text-text-primary placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      />
    </div>
  ),
  args: { children: "Email address", required: true },
};

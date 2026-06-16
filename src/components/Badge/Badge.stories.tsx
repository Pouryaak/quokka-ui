import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import React from "react";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A non-interactive badge for statuses, labels, and counts. Supports solid, outline, and subtle variants across six semantic intents.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["solid", "outline", "subtle"],
      table: { category: "Appearance" },
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      table: { category: "Appearance" },
    },
    intent: {
      control: "inline-radio",
      options: ["neutral", "brand", "success", "danger", "warning", "info"],
      table: { category: "Appearance" },
    },
    children: {
      description: "Badge label",
      table: { category: "Content" },
    },
  },
  args: {
    variant: "subtle",
    size: "md",
    intent: "neutral",
    children: "Badge",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Solid: Story = {
  args: { variant: "solid", intent: "brand", children: "Solid" },
};

export const Outline: Story = {
  args: { variant: "outline", intent: "brand", children: "Outline" },
};

export const Subtle: Story = {
  args: { variant: "subtle", intent: "brand", children: "Subtle" },
};

export const Intents: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      {(
        ["neutral", "brand", "success", "danger", "warning", "info"] as const
      ).map((intent) => (
        <Badge key={intent} {...args} intent={intent}>
          {intent}
        </Badge>
      ))}
    </div>
  ),
};

export const AllCombinations: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(["solid", "outline", "subtle"] as const).map((variant) => (
        <div key={variant} className="flex flex-wrap items-center gap-2">
          <span className="w-16 text-xs text-text-muted">{variant}</span>
          {(
            [
              "neutral",
              "brand",
              "success",
              "danger",
              "warning",
              "info",
            ] as const
          ).map((intent) => (
            <Badge key={intent} variant={variant} intent={intent}>
              {intent}
            </Badge>
          ))}
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Badge {...args} size="sm">
        Small
      </Badge>
      <Badge {...args} size="md">
        Medium
      </Badge>
      <Badge {...args} size="lg">
        Large
      </Badge>
    </div>
  ),
  args: { variant: "solid", intent: "brand" },
};

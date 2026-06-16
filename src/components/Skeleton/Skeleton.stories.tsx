import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";
import React from "react";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A loading placeholder that animates with a pulse. Use `variant` to control shape: `text` for lines, `circle` for avatars, `rectangle` for cards and blocks.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["text", "circle", "rectangle"],
      table: { category: "Appearance" },
    },
    className: {
      control: "text",
      description: "Override or extend styles",
      table: { category: "Appearance" },
    },
  },
  args: {
    variant: "text",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: { variant: "text", className: "w-64" },
};

export const Circle: Story = {
  args: { variant: "circle", className: "h-12 w-12" },
};

export const Rectangle: Story = {
  args: { variant: "rectangle", className: "h-32 w-64" },
};

export const CardExample: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-3 rounded-xl border border-border/40 bg-surface p-4">
      <Skeleton variant="rectangle" className="h-40 w-full rounded-lg" />
      <Skeleton variant="text" className="w-3/4" />
      <Skeleton variant="text" className="w-1/2" />
      <div className="flex items-center gap-2 pt-2">
        <Skeleton variant="circle" className="h-8 w-8" />
        <Skeleton variant="text" className="w-24" />
      </div>
    </div>
  ),
};

export const ListExample: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton variant="circle" className="h-10 w-10" />
          <div className="flex flex-1 flex-col gap-1.5">
            <Skeleton variant="text" className="w-2/3" />
            <Skeleton variant="text" className="w-1/2" />
          </div>
        </div>
      ))}
    </div>
  ),
};

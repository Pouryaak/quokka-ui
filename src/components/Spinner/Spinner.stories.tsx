import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";
import React from "react";

const meta = {
  title: "Feedback/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    thickness: { control: "select", options: ["thin", "normal", "thick"] },
    decorative: { control: "boolean" },
    label: { control: "text" },
  },
  parameters: { layout: "centered" },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    thickness: "normal",
    decorative: false,
    label: "Loading",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4 text-text-primary">
      <div className="flex items-center gap-2">
        <Spinner size="sm" /> <span className="text-sm">sm</span>
      </div>
      <div className="flex items-center gap-2">
        <Spinner size="md" /> <span className="text-base">md</span>
      </div>
      <div className="flex items-center gap-2">
        <Spinner size="lg" /> <span className="text-lg">lg</span>
      </div>
    </div>
  ),
};

export const Thickness: Story = {
  render: () => (
    <div className="flex items-center gap-6 text-text-primary">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" thickness="thin" />{" "}
        <span className="text-sm">thin</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" thickness="normal" />{" "}
        <span className="text-sm">normal</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" thickness="thick" />{" "}
        <span className="text-sm">thick</span>
      </div>
    </div>
  ),
};

export const DecorativeInsideButton: Story = {
  render: () => (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 font-medium text-on-brand"
    >
      Save
      <Spinner size="sm" decorative />
      <span className="sr-only">Loading</span>
    </button>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Use `decorative` inside composite controls and provide your own SR-only label.",
      },
    },
  },
};

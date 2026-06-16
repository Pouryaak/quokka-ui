import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipProvider } from "./Tooltip";
import React from "react";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <TooltipProvider delayDuration={300}>
        <Story />
      </TooltipProvider>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A tooltip built on Radix Tooltip. Displays on hover/focus. Wrap your app with `TooltipProvider` to control global delay behavior.",
      },
    },
  },
  argTypes: {
    content: {
      control: "text",
      description: "Tooltip text",
      table: { category: "Content" },
    },
    side: {
      control: "inline-radio",
      options: ["top", "right", "bottom", "left"],
      table: { category: "Position" },
    },
    align: {
      control: "inline-radio",
      options: ["start", "center", "end"],
      table: { category: "Position" },
    },
  },
  args: {
    content: "This is a tooltip",
    side: "top",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <button className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary">
        Hover me
      </button>
    </Tooltip>
  ),
};

export const Bottom: Story = {
  render: (args) => (
    <Tooltip {...args} side="bottom" content="Tooltip on bottom">
      <button className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary">
        Bottom
      </button>
    </Tooltip>
  ),
};

export const Left: Story = {
  render: (args) => (
    <Tooltip {...args} side="left" content="Tooltip on left">
      <button className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary">
        Left
      </button>
    </Tooltip>
  ),
};

export const Right: Story = {
  render: (args) => (
    <Tooltip {...args} side="right" content="Tooltip on right">
      <button className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary">
        Right
      </button>
    </Tooltip>
  ),
};

export const LongContent: Story = {
  render: (args) => (
    <Tooltip
      {...args}
      content="This tooltip has longer content to demonstrate text wrapping behavior for more descriptive messages."
    >
      <button className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary">
        Long content
      </button>
    </Tooltip>
  ),
};

export const OnIcon: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Tooltip {...args} content="Settings">
        <button className="rounded-md p-2 text-text-muted hover:bg-surface-muted hover:text-text-primary">
          <svg
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.8914 2.19405C9.132 2.35455 9.5162 2.18385 9.699 1.928L10.2407 2.1005C10.4235 1.84465 10.4031 1.50765 10.1896 1.2741L10.2407 2.1005L10.1876 2.12635L10.0711 2.18185L9.7792 2.3193C9.5272 2.4383 9.33135 2.63305 9.2315 2.8771L9.0688 3.2566L8.8914 2.19405Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </Tooltip>
    </div>
  ),
  args: { content: "Settings" },
};

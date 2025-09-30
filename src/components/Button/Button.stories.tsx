// File: src/components/button/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonAsAnchorProps } from "./Button";
import React from "react";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "A semantic, accessible button that renders as `<button>` for actions or `<a>` for navigation.",
          "",
          "**A11y defaults:**",
          "- Keyboard and screen-reader friendly; visible focus ring.",
          "- `loading` blocks interaction and sets `aria-busy` (link uses `aria-disabled` + `tabIndex=-1`).",
          "- For links, `disabled` mirrors the same behavior as `loading`.",
          "",
          "**When to use:** primary actions, secondary/tertiary actions, and links styled as buttons.",
        ].join("\n"),
      },
    },
  },

  argTypes: {
    intent: {
      control: "inline-radio",
      options: ["primary", "secondary", "ghost"],
      description: "Visual style",
      table: { category: "Appearance" },
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      description: "Button size",
      table: { category: "Appearance" },
    },
    children: { description: "Button label", table: { category: "Content" } },
    startIcon: {
      control: false,
      description: "Left icon",
      table: { category: "Content" },
    },
    endIcon: {
      control: false,
      description: "Right icon",
      table: { category: "Content" },
    },
    loading: {
      control: "boolean",
      description: "Shows loading spinner and blocks interaction",
      table: { category: "Behavior" },
    },
    disabled: {
      control: "boolean",
      description: "Disables the control",
      table: { category: "Behavior" },
    },
    href: {
      control: "text",
      description: "If set, renders as <a>",
      table: { category: "Behavior" },
    },
    target: {
      control: "text",
      if: { arg: "href", truthy: true },
      table: { category: "Behavior" },
    },
    onClick: { action: "clicked", table: { category: "Events" } },
  },
  args: {
    intent: "primary",
    size: "md",
    children: "Button",
    loading: false,
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { intent: "primary", children: "Primary" },
};

export const Secondary: Story = {
  args: { intent: "secondary", children: "Secondary" },
};

export const Ghost: Story = {
  args: { intent: "ghost", children: "Ghost" },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-3">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
  args: { intent: "primary" },
};

export const AsLink: Story = {
  args: {
    ...Primary.args,
    children: "Button as a Link",
    href: "https://www.google.com",
  } as ButtonAsAnchorProps,
};

export const LoadingButton: Story = {
  args: { children: "Saving", loading: true },
};

export const LoadingLink: Story = {
  args: { children: "Navigating", loading: true, href: "#" },
};

export const DisabledButton: Story = {
  args: { children: "Disabled", disabled: true },
};

export const DisabledLink: Story = {
  args: { children: "Disabled link", disabled: true, href: "#" },
};

const Dot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    aria-hidden="true"
    {...props}
  >
    <>
      <path
        d="M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  </svg>
);

export const WithIcons: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      <Button {...args} startIcon={<Dot />}>
        Start icon
      </Button>
      <Button {...args} endIcon={<Dot />}>
        End icon
      </Button>
    </div>
  ),
  args: {
    intent: "primary",
    size: "md",
  },
};

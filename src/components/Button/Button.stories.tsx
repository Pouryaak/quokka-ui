import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonAsAnchorProps } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    intent: {
      control: "select",
      options: ["primary", "secondary", "ghost"],
      description: "The visual style of the button",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the button",
    },
    children: {
      control: "text",
      description: "The content of the button",
    },
    href: {
      control: "text",
      description: "If provided, the button will be an anchor tag",
      if: { arg: "href", truthy: true },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    intent: "primary",
    size: "md",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    intent: "secondary",
    children: "Secondary Button",
  },
};

export const AsLink: Story = {
  args: {
    ...Primary.args,
    children: "Button as a Link",
    href: "https://www.google.com",
  } as ButtonAsAnchorProps,
};

import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import React from "react";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An avatar component built on Radix Avatar. Shows an image with a fallback when the image fails to load or no `src` is provided.",
      },
    },
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg", "xl"],
      table: { category: "Appearance" },
    },
    variant: {
      control: "inline-radio",
      options: ["circle", "rounded"],
      table: { category: "Appearance" },
    },
    src: { control: "text", table: { category: "Content" } },
    alt: { control: "text", table: { category: "Content" } },
    fallback: {
      control: "text",
      description: "Text shown when image fails or isn't provided",
      table: { category: "Content" },
    },
  },
  args: {
    size: "md",
    variant: "circle",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithFallback: Story = {
  args: { fallback: "John Doe" },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      <Avatar {...args} size="sm" fallback="JD" />
      <Avatar {...args} size="md" fallback="JD" />
      <Avatar {...args} size="lg" fallback="JD" />
      <Avatar {...args} size="xl" fallback="JD" />
    </div>
  ),
};

export const Rounded: Story = {
  render: (args) => (
    <Avatar {...args} variant="rounded" size="xl" fallback="QS" />
  ),
};

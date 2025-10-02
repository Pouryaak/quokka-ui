import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";
import React from "react";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "A multi-line text input component with accessible labels, helper text, and error states.",
          "",
          "**A11y**",
          "- Renders a native `<textarea>` for full accessibility support.",
          "- The `label` prop is optional, but `aria-label` is required to ensure a screen reader name.",
          "- Error state sets `aria-invalid`; helper/error text is linked via `aria-describedby`.",
          "",
          "**Design**",
          "- Height is flexible and can be controlled with the native `rows` attribute.",
          "- Focus rings are visible on keyboard navigation (`:focus-visible`).",
        ].join("\n"),
      },
    },
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["outline", "subtle"],
      description: "Visual style of the textarea",
      table: { category: "Appearance" },
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      description: "Controls padding and font size",
      table: { category: "Appearance" },
    },
    label: {
      control: "text",
      description: "Visible label text (optional)",
      table: { category: "Content" },
    },
    "aria-label": {
      control: "text",
      description: "Accessible name for the input (required)",
      table: { category: "Content" },
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
      table: { category: "Content" },
    },
    helperText: {
      control: "text",
      description: "Assistive description below the textarea",
      table: { category: "Feedback" },
    },
    error: {
      control: "text",
      description: "Error message (overrides helper text)",
      table: { category: "Feedback" },
    },
    disabled: {
      control: "boolean",
      table: { category: "State" },
    },
    required: {
      control: "boolean",
      table: { category: "State" },
    },
    rows: {
      control: "number",
      description: "The visible number of text lines",
      table: { category: "Appearance" },
    },
    className: { control: false },
  },
  args: {
    variant: "outline",
    size: "md",
    label: "Your Message",
    "aria-label": "Your Message",
    placeholder: "Enter your comments here...",
    helperText: "",
    error: "",
    disabled: false,
    required: false,
  },
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: (args) => (
    <div className="w-80">
      <Textarea {...args} />
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    "aria-label": "Text area",
  },
  render: (args) => (
    <div className="flex w-80 flex-col gap-4">
      <Textarea {...args} size="sm" placeholder="Small" />
      <Textarea {...args} size="md" placeholder="Medium (Default)" />
      <Textarea {...args} size="lg" placeholder="Large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Comparing the `sm`, `md`, and `lg` size variants.",
      },
    },
  },
};

export const WithError: Story = {
  args: {
    error: "This field is required and cannot be empty.",
    required: true,
  },
  render: (args) => (
    <div className="w-80">
      <Textarea {...args} />
    </div>
  ),
};

export const WithMoreRows: Story = {
  args: {
    label: "Detailed Feedback",
    "aria-label": "Detailed Feedback",
    rows: 5,
    helperText: "The `rows` prop controls the initial height.",
  },
  render: (args) => (
    <div className="w-80">
      <Textarea {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: "Disabled Text Area",
    "aria-label": "Disabled Text Area",
    helperText: "This field cannot be edited.",
    disabled: true,
    value: "You cannot change this text.",
  },
  render: (args) => (
    <div className="w-80">
      <Textarea {...args} />
    </div>
  ),
};

export const NoLabel: Story = {
  args: {
    label: undefined,
    "aria-label": "Search description",
    placeholder: "Search description...",
  },
  render: (args) => (
    <div className="w-80">
      <Textarea {...args} />
    </div>
  ),
};

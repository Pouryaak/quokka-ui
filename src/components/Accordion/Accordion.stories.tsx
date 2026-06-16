import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";
import React from "react";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An accordion built on Radix Accordion. Supports single and multiple expansion modes, with default, bordered, and ghost variants.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" defaultValue="item-1" className="w-80">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It adheres to the WAI-ARIA design pattern.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Is it styled?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It comes with default styles that match the design system.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Is it animated?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It animates open and close with smooth transitions.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

export const Bordered: Story = {
  render: () => (
    <Accordion type="single" defaultValue="item-1" className="w-80">
      <Accordion.Item value="item-1" variant="bordered">
        <Accordion.Trigger>Section 1</Accordion.Trigger>
        <Accordion.Content>Content for section 1.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2" variant="bordered">
        <Accordion.Trigger>Section 2</Accordion.Trigger>
        <Accordion.Content>Content for section 2.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" defaultValue={["a", "b"]} className="w-80">
      <Accordion.Item value="a">
        <Accordion.Trigger>First</Accordion.Trigger>
        <Accordion.Content>First content.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="b">
        <Accordion.Trigger>Second</Accordion.Trigger>
        <Accordion.Content>Second content.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

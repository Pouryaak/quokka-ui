import type { Meta, StoryObj } from "@storybook/react";
import { Sheet } from "./Sheet";
import React from "react";

const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A slide-in panel built on Radix Dialog. Supports four sides (top, right, bottom, left), multiple widths, and includes Title, Description, Body, and Footer layout slots.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary cursor-pointer hover:bg-surface-muted/80">
        Open sheet
      </Sheet.Trigger>
      <Sheet.Content>
        <Sheet.Title>Sheet Title</Sheet.Title>
        <Sheet.Description>
          This is a sheet panel that slides in from the right.
        </Sheet.Description>
        <Sheet.Body>
          <p className="text-sm text-text-muted">
            Sheet content goes here. You can put forms, lists, or any content
            that benefits from a side panel layout.
          </p>
        </Sheet.Body>
        <Sheet.Footer>
          <Sheet.Close className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary cursor-pointer hover:bg-surface-muted/80">
            Cancel
          </Sheet.Close>
          <button className="rounded-md bg-brand px-4 py-2 text-sm text-black cursor-pointer">
            Save
          </button>
        </Sheet.Footer>
        <Sheet.Close />
      </Sheet.Content>
    </Sheet>
  ),
};

export const Left: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary cursor-pointer">
        Left sheet
      </Sheet.Trigger>
      <Sheet.Content side="left">
        <Sheet.Title>Navigation</Sheet.Title>
        <Sheet.Body>
          <p className="text-sm text-text-muted">Left-side drawer content.</p>
        </Sheet.Body>
        <Sheet.Close />
      </Sheet.Content>
    </Sheet>
  ),
};

export const Top: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary cursor-pointer">
        Top sheet
      </Sheet.Trigger>
      <Sheet.Content side="top">
        <Sheet.Title>Top Panel</Sheet.Title>
        <Sheet.Body>
          <p className="text-sm text-text-muted">Top drawer content.</p>
        </Sheet.Body>
        <Sheet.Close />
      </Sheet.Content>
    </Sheet>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary cursor-pointer">
        Bottom sheet
      </Sheet.Trigger>
      <Sheet.Content side="bottom">
        <Sheet.Title>Bottom Panel</Sheet.Title>
        <Sheet.Body>
          <p className="text-sm text-text-muted">Bottom drawer content.</p>
        </Sheet.Body>
        <Sheet.Close />
      </Sheet.Content>
    </Sheet>
  ),
};

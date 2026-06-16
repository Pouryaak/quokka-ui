import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";
import React from "react";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A popover panel built on Radix Popover. Click the trigger to show the panel. Includes built-in close button, focus trap, and Escape-to-close.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary hover:bg-surface-muted/80">
        Open popover
      </Popover.Trigger>
      <Popover.Content>
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-medium text-text-primary">About</h4>
          <p className="text-sm text-text-muted">
            This is a popover with some information. Press Escape or click
            outside to close.
          </p>
        </div>
        <Popover.Close />
      </Popover.Content>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary">
        Edit profile
      </Popover.Trigger>
      <Popover.Content className="w-80">
        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-medium text-text-primary">Edit name</h4>
          <input
            defaultValue="John Doe"
            className="h-9 w-full rounded-md border border-border bg-surface px-3 text-sm text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          />
          <div className="flex justify-end gap-2">
            <Popover.Close className="relative right-auto top-auto rounded-md px-3 py-1.5 text-sm text-text-muted hover:bg-surface-muted">
              Cancel
            </Popover.Close>
            <button className="rounded-md bg-brand px-3 py-1.5 text-sm text-black">
              Save
            </button>
          </div>
        </div>
      </Popover.Content>
    </Popover>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div className="flex flex-col items-center gap-3">
        <Popover open={open} onOpenChange={setOpen}>
          <Popover.Trigger className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary">
            {open ? "Close" : "Open"} popover
          </Popover.Trigger>
          <Popover.Content>
            <p className="text-sm text-text-muted">
              This popover is controlled externally.
            </p>
            <Popover.Close />
          </Popover.Content>
        </Popover>
        <span className="text-sm text-text-muted">
          State: {open ? "Open" : "Closed"}
        </span>
      </div>
    );
  },
};

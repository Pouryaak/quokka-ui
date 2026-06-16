import type { Meta, StoryObj } from "@storybook/react";
import { Command } from "./Command";
import React from "react";

const meta: Meta<typeof Command> = {
  title: "Components/Command",
  component: Command,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A keyboard-driven command palette built on Radix Dialog. Search, navigate with arrow keys, and select with Enter. Provide a `trigger` element to open the palette.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Command
      trigger={
        <Command.Trigger className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary cursor-pointer hover:bg-surface-muted/80">
          Open command palette
        </Command.Trigger>
      }
    >
      <Command.Input placeholder="Type a command..." />
      <Command.List>
        <Command.Group heading="Actions">
          <Command.Item value="new-file">New File</Command.Item>
          <Command.Item value="new-folder">New Folder</Command.Item>
          <Command.Item value="open-project">Open Project</Command.Item>
        </Command.Group>
        <Command.Group heading="Navigation">
          <Command.Item value="go-to-file">Go to File</Command.Item>
          <Command.Item value="go-to-symbol">Go to Symbol</Command.Item>
          <Command.Item value="find-references">Find References</Command.Item>
        </Command.Group>
      </Command.List>
      <Command.Empty>No results found.</Command.Empty>
    </Command>
  ),
};

export const WithEmpty: Story = {
  render: () => (
    <Command
      trigger={
        <Command.Trigger className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary cursor-pointer">
          Search users
        </Command.Trigger>
      }
    >
      <Command.Input placeholder="Search users..." />
      <Command.List>
        <Command.Item value="alice">Alice Johnson</Command.Item>
        <Command.Item value="bob">Bob Smith</Command.Item>
        <Command.Item value="charlie">Charlie Brown</Command.Item>
      </Command.List>
      <Command.Empty>No users found.</Command.Empty>
    </Command>
  ),
};

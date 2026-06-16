import type { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu } from "./DropdownMenu";
import React from "react";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A dropdown menu built on Radix DropdownMenu. Supports items, separators, labels, groups, keyboard navigation, and nested submenus.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary hover:bg-surface-muted/80">
        Open menu
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>Actions</DropdownMenu.Label>
        <DropdownMenu.Item>New Tab</DropdownMenu.Item>
        <DropdownMenu.Item>New Window</DropdownMenu.Item>
        <DropdownMenu.Item disabled>New Incognito Window</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Share</DropdownMenu.Item>
        <DropdownMenu.Item>Print</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary">
        With groups
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Group>
          <DropdownMenu.Label>Account</DropdownMenu.Label>
          <DropdownMenu.Item>Profile</DropdownMenu.Item>
          <DropdownMenu.Item>Settings</DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Label>Team</DropdownMenu.Label>
          <DropdownMenu.Item>Invite users</DropdownMenu.Item>
          <DropdownMenu.Item>New team</DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};

export const Submenus: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger className="rounded-md bg-surface-muted px-4 py-2 text-sm text-text-primary">
        Submenus
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Dashboard</DropdownMenu.Item>
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>More tools</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>Analytics</DropdownMenu.Item>
            <DropdownMenu.Item>Reports</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Export</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Log out</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};

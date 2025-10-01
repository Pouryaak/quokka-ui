import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Tabs } from "./Tabs";
import {
  GearIcon,
  PersonIcon,
  RocketIcon,
  CardStackIcon,
} from "@radix-ui/react-icons";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "Tabs built on Radix with `pill` and `underline` variants and `sm/md/lg` sizes.",
          "Radix provides roles/keyboard; this wrapper controls visuals via tokens.",
        ].join("\n"),
      },
    },
  },
  args: {
    orientation: "horizontal",
  },
};
export default meta;

type Story = StoryObj<typeof Tabs>;

/* Helper: simple panels */
function Panels() {
  return (
    <>
      <Tabs.Content value="account">
        <div className="text-text-primary">Account panel content</div>
      </Tabs.Content>
      <Tabs.Content value="billing">
        <div className="text-text-primary">Billing panel content</div>
      </Tabs.Content>
      <Tabs.Content value="team">
        <div className="text-text-primary">Team panel content</div>
      </Tabs.Content>
    </>
  );
}

/* Default (pill, md) */
export const Default: Story = {
  render: (args) => (
    <Tabs defaultValue="account" {...args} className="w-[480px] max-w-full">
      <Tabs.List variant="underline">
        <Tabs.Trigger value="account" variant="underline">
          Account
        </Tabs.Trigger>
        <Tabs.Trigger value="billing" variant="underline">
          Billing
        </Tabs.Trigger>
        <Tabs.Trigger value="team" variant="underline">
          Team
        </Tabs.Trigger>
      </Tabs.List>
      <Panels />
    </Tabs>
  ),
};

/* Variant comparison */
export const VariantComparison: Story = {
  render: (args) => (
    <div className="flex w-[820px] max-w-full gap-8">
      <div className="w-full">
        <div className="mb-2 text-sm text-text-muted">Pill</div>
        <Tabs defaultValue="account" {...args}>
          <Tabs.List variant="pill">
            <Tabs.Trigger value="account">Account</Tabs.Trigger>
            <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
            <Tabs.Trigger value="team">Team</Tabs.Trigger>
          </Tabs.List>
          <Panels />
        </Tabs>
      </div>
      <div className="w-full">
        <div className="mb-2 text-sm text-text-muted">Underline</div>
        <Tabs defaultValue="account" {...args}>
          <Tabs.List variant="underline">
            <Tabs.Trigger variant="underline" value="account">
              Account
            </Tabs.Trigger>
            <Tabs.Trigger variant="underline" value="billing">
              Billing
            </Tabs.Trigger>
            <Tabs.Trigger variant="underline" value="team">
              Team
            </Tabs.Trigger>
          </Tabs.List>
          <Panels />
        </Tabs>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: (args) => (
    <Tabs defaultValue="account" {...args} className="w-[520px] max-w-full">
      <Tabs.List variant="pill">
        <Tabs.Trigger value="account" startIcon={<PersonIcon />}>
          Account
        </Tabs.Trigger>
        <Tabs.Trigger value="billing" endIcon={<CardStackIcon />}>
          Billing
        </Tabs.Trigger>
        <Tabs.Trigger
          value="launch"
          startIcon={<RocketIcon />}
          endIcon={<GearIcon />}
        >
          Launch
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="account">
        <div className="text-text-primary">Account panel content</div>
      </Tabs.Content>
      <Tabs.Content value="billing">
        <div className="text-text-primary">Billing panel content</div>
      </Tabs.Content>
      <Tabs.Content value="launch">
        <div className="text-text-primary">Launch panel content</div>
      </Tabs.Content>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates `startIcon` and `endIcon` props on `Tabs.Trigger`. Icons are decorative (`aria-hidden`) and size scales with tab size.",
      },
    },
  },
};

/* Sizes */
export const Sizes: Story = {
  render: (args) => (
    <div className="flex w-[720px] max-w-full flex-col gap-6">
      <Tabs defaultValue="account" {...args}>
        <Tabs.List>
          <Tabs.Trigger size="sm" value="account">
            Small
          </Tabs.Trigger>
          <Tabs.Trigger size="sm" value="billing">
            Small
          </Tabs.Trigger>
          <Tabs.Trigger size="sm" value="team">
            Small
          </Tabs.Trigger>
        </Tabs.List>
        <Panels />
      </Tabs>
      <Tabs defaultValue="account" {...args}>
        <Tabs.List>
          <Tabs.Trigger size="md" value="account">
            Medium
          </Tabs.Trigger>
          <Tabs.Trigger size="md" value="billing">
            Medium
          </Tabs.Trigger>
          <Tabs.Trigger size="md" value="team">
            Medium
          </Tabs.Trigger>
        </Tabs.List>
        <Panels />
      </Tabs>
      <Tabs defaultValue="account" {...args}>
        <Tabs.List>
          <Tabs.Trigger size="lg" value="account">
            Large
          </Tabs.Trigger>
          <Tabs.Trigger size="lg" value="billing">
            Large
          </Tabs.Trigger>
          <Tabs.Trigger size="lg" value="team">
            Large
          </Tabs.Trigger>
        </Tabs.List>
        <Panels />
      </Tabs>
    </div>
  ),
};

/* Disabled tab */
export const WithDisabled: Story = {
  render: (args) => (
    <Tabs defaultValue="account" {...args} className="w-[480px] max-w-full">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="billing" disabled>
          Billing (disabled)
        </Tabs.Trigger>
        <Tabs.Trigger value="team">Team</Tabs.Trigger>
      </Tabs.List>
      <Panels />
    </Tabs>
  ),
};

/* Controlled example */
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("account");
    return (
      <div className="w-[480px] max-w-full">
        <Tabs value={value} onValueChange={setValue} {...args}>
          <Tabs.List>
            <Tabs.Trigger value="account">Account</Tabs.Trigger>
            <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
            <Tabs.Trigger value="team">Team</Tabs.Trigger>
          </Tabs.List>
          <Panels />
        </Tabs>
        <div className="mt-2 text-sm text-text-muted">Current: {value}</div>
      </div>
    );
  },
};

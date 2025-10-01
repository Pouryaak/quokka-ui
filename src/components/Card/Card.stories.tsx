import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Button } from "../Button/Button";
import React from "react";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "A layout container for grouping related content.",
          "",
          "**Semantics & a11y**",
          "- Renders as a `<section>` by default (configurable via `as`).",
          "- Provide `title` to name the region (SSR-safe via `aria-label`).",
          "- Use `Card.Header` for visual titles, `Card.Body` for content, and `Card.Footer` for actions.",
          "- Use `Card.Media` for a full-bleed top media area (image/video/custom).",
        ].join("\n"),
      },
    },
  },
  argTypes: {
    as: {
      control: "inline-radio",
      options: ["section", "article", "div"],
      description: "Semantic container element",
      table: { category: "Behavior" },
    },
    title: {
      control: "text",
      description: "Accessible name for the region (SSR-safe)",
      table: { category: "A11y" },
    },
    elevated: {
      control: "boolean",
      description: "Increase elevation (shadow)",
      table: { category: "Appearance" },
    },
    className: { control: false },
    children: { control: false },
  },
  args: {
    as: "section",
    elevated: false,
    title: "",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="max-w-md">
      <Card.Media
        src="https://picsum.photos/800/400"
        alt="Random scenic cover"
        height={200}
      />
      <Card.Header>Project Aurora</Card.Header>
      <Card.Body>
        <p className="text-text-muted">
          Full-bleed media sits above content and respects rounded corners.
        </p>
      </Card.Body>
      <Card.Footer>
        <Button intent="primary">Open</Button>
        <Button intent="secondary">Share</Button>
      </Card.Footer>
    </Card>
  ),
};

export const Elevated: Story = {
  args: { elevated: true },
  render: (args) => (
    <Card {...args} className="max-w-md">
      <Card.Header>Elevated card</Card.Header>
      <Card.Body>
        <p className="text-text-muted">Use sparingly for key content.</p>
      </Card.Body>
      <Card.Footer>
        <button className="rounded-md bg-brand px-3 py-2 text-on-brand">
          Action
        </button>
      </Card.Footer>
    </Card>
  ),
};
export const ContentHeavy: Story = {
  render: (args) => (
    <Card {...args} className="max-w-lg">
      <Card.Header>Usage analytics</Card.Header>
      <Card.Body className="space-y-3">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded bg-surface-muted p-3">
            <div className="text-sm text-text-muted">Sessions</div>
            <div className="text-xl font-medium text-text-primary">12,842</div>
          </div>
          <div className="rounded bg-surface-muted p-3">
            <div className="text-sm text-text-muted">Bounce</div>
            <div className="text-xl font-medium text-text-primary">34%</div>
          </div>
          <div className="rounded bg-surface-muted p-3">
            <div className="text-sm text-text-muted">Avg. time</div>
            <div className="text-xl font-medium text-text-primary">3m 12s</div>
          </div>
        </div>
        <p className="text-text-muted">
          Cards should scale from simple content to denser layouts without style
          collapse.
        </p>
      </Card.Body>
      <Card.Footer>
        <button className="rounded-md bg-surface-muted px-3 py-2 text-text-primary">
          Details
        </button>
        <button className="rounded-md bg-brand px-3 py-2 text-on-brand">
          Export
        </button>
      </Card.Footer>
    </Card>
  ),
};

export const Grid: Story = {
  render: (args) => (
    <div className="grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={i} {...args}>
          <Card.Header>Card {i + 1}</Card.Header>
          <Card.Body>
            <p className="text-text-muted">Responsive layout sample.</p>
          </Card.Body>
        </Card>
      ))}
    </div>
  ),
  args: { elevated: false },
};

export const WithMediaImage: Story = {
  render: (args) => (
    <Card {...args} className="max-w-md">
      <Card.Media
        src="https://picsum.photos/800/400"
        alt="Random scenic cover"
        height={200}
      />
      <Card.Header>Project Aurora</Card.Header>
      <Card.Body>
        <p className="text-text-muted">
          Full-bleed media sits above content and respects rounded corners.
        </p>
      </Card.Body>
      <Card.Footer>
        <Button intent="primary">Open</Button>
        <Button intent="secondary">Share</Button>
      </Card.Footer>
    </Card>
  ),
};

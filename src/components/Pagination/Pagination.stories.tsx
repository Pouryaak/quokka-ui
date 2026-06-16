import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";
import React from "react";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A pagination component with page numbers, previous/next buttons, and ellipsis for large page counts. Fully controlled via `page`, `total`, and `onChange` props.",
      },
    },
  },
  argTypes: {
    total: { control: "number", table: { category: "Behavior" } },
    page: { control: "number", table: { category: "Behavior" } },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      table: { category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = React.useState(1);
    return (
      <div className="flex flex-col items-center gap-3">
        <Pagination total={10} page={page} onChange={setPage} />
        <span className="text-sm text-text-muted">Page {page} of 10</span>
      </div>
    );
  },
};

export const ManyPages: Story = {
  render: () => {
    const [page, setPage] = React.useState(5);
    return <Pagination total={20} page={page} onChange={setPage} />;
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Pagination total={5} page={1} onChange={() => {}} size="sm" />
      <Pagination total={5} page={1} onChange={() => {}} size="md" />
      <Pagination total={5} page={1} onChange={() => {}} size="lg" />
    </div>
  ),
};

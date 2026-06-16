import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs, BreadcrumbItem } from "./Breadcrumbs";
import React from "react";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A breadcrumb navigation component. The last item is auto-styled as the current page with `aria-current=\"page\"`.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Breadcrumbs>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Products</BreadcrumbItem>
      <BreadcrumbItem href="#">Categories</BreadcrumbItem>
      <BreadcrumbItem href="#">Electronics</BreadcrumbItem>
    </Breadcrumbs>
  ),
};

export const CustomSeparator: Story = {
  render: () => (
    <Breadcrumbs separator={<span className="text-text-muted">/</span>}>
      <BreadcrumbItem href="#">Dashboard</BreadcrumbItem>
      <BreadcrumbItem href="#">Settings</BreadcrumbItem>
      <span>Profile</span>
    </Breadcrumbs>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";
import { Badge } from "../Badge/Badge";
import { Avatar } from "../Avatar/Avatar";
import React from "react";

type User = {
  name: string;
  email: string;
  role: string;
  status: string;
  department: string;
  initials: string;
};

const users: User[] = [
  { name: "Lindsay Walton", email: "lindsay@example.com", role: "Admin", status: "Active", department: "Engineering", initials: "LW" },
  { name: "Courtney Henry", email: "courtney@example.com", role: "Editor", status: "Active", department: "Design", initials: "CH" },
  { name: "Tom Cook", email: "tom@example.com", role: "Viewer", status: "Inactive", department: "Marketing", initials: "TC" },
  { name: "Whitney Francis", email: "whitney@example.com", role: "Editor", status: "Active", department: "Engineering", initials: "WF" },
  { name: "Leonard Krasner", email: "leonard@example.com", role: "Admin", status: "Active", department: "Sales", initials: "LK" },
  { name: "Floyd Miles", email: "floyd@example.com", role: "Viewer", status: "Inactive", department: "Design", initials: "FM" },
  { name: "Emily Selman", email: "emily@example.com", role: "Editor", status: "Active", department: "Marketing", initials: "ES" },
  { name: "Kristin Watson", email: "kristin@example.com", role: "Admin", status: "Active", department: "Engineering", initials: "KW" },
  { name: "Emma Dorsey", email: "emma@example.com", role: "Viewer", status: "Inactive", department: "Sales", initials: "ED" },
  { name: "Alicia Bell", email: "alicia@example.com", role: "Editor", status: "Active", department: "Design", initials: "AB" },
];

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A full-featured data table with search, sortable columns, pagination, and custom cell rendering. Accepts any data shape and column definitions.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DataTable<User>>;

export const Default: Story = {
  args: {
    data: users,
    columns: [
      { key: "name", header: "Name" },
      { key: "email", header: "Email" },
      { key: "role", header: "Role" },
      { key: "department", header: "Department" },
    ],
    searchPlaceholder: "Search users...",
    pageSize: 5,
  },
};

export const WithCustomRenders: Story = {
  args: {
    data: users,
    columns: [
      {
        key: "name",
        header: "Name",
        sortable: true,
        render: (user) => (
          <div className="flex items-center gap-3">
            <Avatar fallback={user.initials} size="sm" />
            <div>
              <div className="text-sm font-medium text-text-primary">{user.name}</div>
              <div className="text-xs text-text-muted">{user.email}</div>
            </div>
          </div>
        ),
      },
      {
        key: "role",
        header: "Role",
        sortable: true,
        render: (user) => (
          <Badge intent={user.role === "Admin" ? "brand" : user.role === "Editor" ? "info" : "neutral"} variant="subtle" size="sm">
            {user.role}
          </Badge>
        ),
      },
      { key: "department", header: "Department", sortable: true },
      {
        key: "status",
        header: "Status",
        sortable: true,
        render: (user) => (
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: user.status === "Active" ? "var(--color-success)" : "var(--color-border)" }}
            />
            <span className="text-sm text-text-primary">{user.status}</span>
          </div>
        ),
      },
    ],
    searchPlaceholder: "Search users...",
    pageSize: 5,
  },
};

export const EmptyState: Story = {
  args: {
    data: users,
    columns: [
      { key: "name", header: "Name" },
      { key: "role", header: "Role" },
    ],
    searchPlaceholder: "Search...",
    emptyMessage: "No users match your criteria.",
  },
};

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { DataTable } from "./DataTable";
import React from "react";

type Row = { name: string; email: string; role: string };

const data: Row[] = [
  { name: "Alice", email: "alice@test.com", role: "Admin" },
  { name: "Bob", email: "bob@test.com", role: "Editor" },
  { name: "Charlie", email: "charlie@test.com", role: "Viewer" },
];

const columns = [
  { key: "name", header: "Name", sortable: true },
  { key: "email", header: "Email" },
  { key: "role", header: "Role", sortable: true },
];

describe("DataTable", () => {
  it("renders all rows", () => {
    render(<DataTable data={data} columns={columns} pageSize={3} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("Charlie")).toBeInTheDocument();
  });

  it("shows row count", () => {
    render(<DataTable data={data} columns={columns} />);
    expect(screen.getByText("3 of 3 rows")).toBeInTheDocument();
  });

  it("filters by search", async () => {
    const user = userEvent.setup();
    render(<DataTable data={data} columns={columns} />);
    const input = screen.getByPlaceholderText("Search...");
    await user.type(input, "Bob");
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.queryByText("Alice")).not.toBeInTheDocument();
    expect(screen.getByText("1 of 3 rows")).toBeInTheDocument();
  });

  it("shows empty state", async () => {
    const user = userEvent.setup();
    render(
      <DataTable
        data={data}
        columns={columns}
        emptyMessage="Nothing here"
      />
    );
    const input = screen.getByPlaceholderText("Search...");
    await user.type(input, "zzz");
    expect(screen.getByText("Nothing here")).toBeInTheDocument();
  });

  it("sorts on column header click", async () => {
    const user = userEvent.setup();
    render(<DataTable data={data} columns={columns} pageSize={3} />);
    const nameHeader = screen.getByText("Name");
    await user.click(nameHeader);
    const cells = screen.getAllByRole("cell");
    expect(cells[0].textContent).toContain("Alice");
  });

  it("renders custom render functions", () => {
    const custom = [
      { key: "name", header: "Name", render: (row: Row) => <span data-testid="custom">{row.name.toUpperCase()}</span> },
    ];
    render(<DataTable data={data} columns={custom} />);
    const items = screen.getAllByTestId("custom");
    expect(items[0]).toHaveTextContent("ALICE");
    expect(items).toHaveLength(3);
  });

  it("paginates when data exceeds pageSize", () => {
    render(<DataTable data={data} columns={columns} pageSize={1} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.queryByText("Bob")).not.toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Pagination" })).toBeInTheDocument();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<DataTable data={data} columns={columns} />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});

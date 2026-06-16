import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { Command } from "./Command";
import React from "react";

function TestCommand({
  children,
  defaultOpen = false,
}: {
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <Command
      defaultOpen={defaultOpen}
      trigger={<Command.Trigger>Open</Command.Trigger>}
    >
      {children}
    </Command>
  );
}

describe("Command", () => {
  it("renders trigger element", () => {
    render(
      <TestCommand>
        <Command.Input />
        <Command.List>
          <Command.Item value="test">Test</Command.Item>
        </Command.List>
      </TestCommand>
    );
    expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument();
  });

  it("opens on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <TestCommand>
        <Command.Input placeholder="Search..." />
        <Command.List>
          <Command.Item value="item1">Item 1</Command.Item>
        </Command.List>
      </TestCommand>
    );
    await user.click(screen.getByRole("button", { name: "Open" }));
    await waitFor(() => {
      expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    });
  });

  it("filters items by search", async () => {
    const user = userEvent.setup();
    render(
      <TestCommand defaultOpen>
        <Command.Input placeholder="Search..." />
        <Command.List>
          <Command.Item value="apple">Apple</Command.Item>
          <Command.Item value="banana">Banana</Command.Item>
          <Command.Item value="cherry">Cherry</Command.Item>
        </Command.List>
        <Command.Empty>No results</Command.Empty>
      </TestCommand>
    );
    await waitFor(() => {
      expect(screen.getByText("Apple")).toBeInTheDocument();
    });
    const input = screen.getByPlaceholderText("Search...");
    await user.type(input, "ban");
    expect(screen.queryByText("Apple")).not.toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
    expect(screen.queryByText("Cherry")).not.toBeInTheDocument();
  });

  it("shows empty state when no results", async () => {
    const user = userEvent.setup();
    render(
      <TestCommand defaultOpen>
        <Command.Input placeholder="Search..." />
        <Command.List>
          <Command.Item value="apple">Apple</Command.Item>
        </Command.List>
        <Command.Empty>No results</Command.Empty>
      </TestCommand>
    );
    await waitFor(() => {
      expect(screen.getByText("Apple")).toBeInTheDocument();
    });
    await user.type(screen.getByPlaceholderText("Search..."), "xyz");
    await waitFor(() => {
      expect(screen.getByText("No results")).toBeInTheDocument();
    });
  });

  it("calls onSelect when item is clicked", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <TestCommand defaultOpen>
        <Command.Input placeholder="Search..." />
        <Command.List>
          <Command.Item value="selected" onSelect={onSelect}>
            Click me
          </Command.Item>
        </Command.List>
      </TestCommand>
    );
    await waitFor(() => {
      expect(screen.getByText("Click me")).toBeInTheDocument();
    });
    await user.click(screen.getByText("Click me"));
    expect(onSelect).toHaveBeenCalledWith("selected");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <Command trigger={<Command.Trigger>Open</Command.Trigger>}>
        <Command.Input />
        <Command.List>
          <Command.Item value="a">Option A</Command.Item>
        </Command.List>
        <Command.Empty>Empty</Command.Empty>
      </Command>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});

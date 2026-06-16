import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { DropdownMenu } from "./DropdownMenu";
import React from "react";

describe("DropdownMenu", () => {
  it("renders trigger element", () => {
    render(
      <DropdownMenu>
        <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Item 1</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
    expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument();
  });

  it("shows content on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenu.Trigger>Menu</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Option A</DropdownMenu.Item>
          <DropdownMenu.Item>Option B</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
    await user.click(screen.getByRole("button", { name: "Menu" }));
    await waitFor(() => {
      expect(screen.getByText("Option A")).toBeInTheDocument();
      expect(screen.getByText("Option B")).toBeInTheDocument();
    });
  });

  it("closes on Escape", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Item</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
    await waitFor(() => {
      expect(screen.getByText("Item")).toBeInTheDocument();
    });
    await user.keyboard("{Escape}");
    await waitFor(() => {
      expect(screen.queryByText("Item")).not.toBeInTheDocument();
    });
  });

  it("renders separator", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenu.Trigger>Menu</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>First</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Second</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
    await user.click(screen.getByRole("button", { name: "Menu" }));
    await waitFor(() => {
      const separators = document.querySelectorAll('[role="separator"]');
      expect(separators.length).toBeGreaterThanOrEqual(1);
    });
  });

  it("renders label", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenu.Trigger>Menu</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>Section</DropdownMenu.Label>
          <DropdownMenu.Item>Item</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
    await user.click(screen.getByRole("button", { name: "Menu" }));
    await waitFor(() => {
      expect(screen.getByText("Section")).toBeInTheDocument();
    });
  });

  it("calls onOpenChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <DropdownMenu onOpenChange={onChange}>
        <DropdownMenu.Trigger>Menu</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Item</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
    await user.click(screen.getByRole("button", { name: "Menu" }));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("renders disabled items", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenu.Trigger>Menu</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item disabled>Disabled</DropdownMenu.Item>
          <DropdownMenu.Item>Enabled</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
    await user.click(screen.getByRole("button", { name: "Menu" }));
    await waitFor(() => {
      const disabled = screen.getByText("Disabled");
      expect(disabled).toBeInTheDocument();
      expect(disabled.getAttribute("data-disabled")).toBe("");
    });
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <DropdownMenu>
        <DropdownMenu.Trigger>Accessible</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>Actions</DropdownMenu.Label>
          <DropdownMenu.Item>Option 1</DropdownMenu.Item>
          <DropdownMenu.Item>Option 2</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});

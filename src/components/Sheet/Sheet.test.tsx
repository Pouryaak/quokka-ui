import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { Sheet } from "./Sheet";
import React from "react";

describe("Sheet", () => {
  it("renders trigger element", () => {
    render(
      <Sheet>
        <Sheet.Trigger>Open</Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Title>Title</Sheet.Title>
        </Sheet.Content>
      </Sheet>
    );
    expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument();
  });

  it("shows content on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <Sheet>
        <Sheet.Trigger>Open</Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Title>Sheet Title</Sheet.Title>
          <Sheet.Body>Sheet content</Sheet.Body>
        </Sheet.Content>
      </Sheet>
    );
    await user.click(screen.getByRole("button", { name: "Open" }));
    await waitFor(() => {
      expect(screen.getByText("Sheet Title")).toBeInTheDocument();
      expect(screen.getByText("Sheet content")).toBeInTheDocument();
    });
  });

  it("closes on Escape", async () => {
    const user = userEvent.setup();
    render(
      <Sheet defaultOpen>
        <Sheet.Trigger>Open</Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Title>Test</Sheet.Title>
        </Sheet.Content>
      </Sheet>
    );
    await waitFor(() => {
      expect(screen.getByText("Test")).toBeInTheDocument();
    });
    await user.keyboard("{Escape}");
    await waitFor(() => {
      expect(screen.queryByText("Test")).not.toBeInTheDocument();
    });
  });

  it("closes on close button click", async () => {
    const user = userEvent.setup();
    render(
      <Sheet defaultOpen>
        <Sheet.Trigger>Open</Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Title>Test</Sheet.Title>
          <Sheet.Close />
        </Sheet.Content>
      </Sheet>
    );
    await waitFor(() => {
      expect(screen.getByText("Test")).toBeInTheDocument();
    });
    await user.click(screen.getByRole("button", { name: "Close" }));
    await waitFor(() => {
      expect(screen.queryByText("Test")).not.toBeInTheDocument();
    });
  });

  it("renders with specified side", async () => {
    render(
      <Sheet defaultOpen>
        <Sheet.Trigger>Open</Sheet.Trigger>
        <Sheet.Content side="left">
          <Sheet.Title>Left</Sheet.Title>
        </Sheet.Content>
      </Sheet>
    );
    await waitFor(() => {
      expect(screen.getByText("Left")).toBeInTheDocument();
    });
  });

  it("calls onOpenChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Sheet onOpenChange={onChange}>
        <Sheet.Trigger>Open</Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Title>Test</Sheet.Title>
        </Sheet.Content>
      </Sheet>
    );
    await user.click(screen.getByRole("button", { name: "Open" }));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <Sheet>
        <Sheet.Trigger>Accessible</Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Title>Accessible Sheet</Sheet.Title>
          <Sheet.Description>Sheet description</Sheet.Description>
          <Sheet.Body>Content</Sheet.Body>
          <Sheet.Close />
        </Sheet.Content>
      </Sheet>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});

import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { Popover } from "./Popover";
import React from "react";

describe("Popover", () => {
  it("renders trigger element", () => {
    render(
      <Popover>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>Content</Popover.Content>
      </Popover>
    );
    expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument();
  });

  it("shows content on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <Popover>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>Popover content</Popover.Content>
      </Popover>
    );
    await user.click(screen.getByRole("button", { name: "Open" }));
    await waitFor(() => {
      expect(screen.getByText("Popover content")).toBeInTheDocument();
    });
  });

  it("closes on Escape", async () => {
    const user = userEvent.setup();
    render(
      <Popover defaultOpen>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>Escape test</Popover.Content>
      </Popover>
    );
    await waitFor(() => {
      expect(screen.getByText("Escape test")).toBeInTheDocument();
    });
    await user.keyboard("{Escape}");
    await waitFor(() => {
      expect(screen.queryByText("Escape test")).not.toBeInTheDocument();
    });
  });

  it("closes on close button click", async () => {
    const user = userEvent.setup();
    render(
      <Popover defaultOpen>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>
          Content
          <Popover.Close />
        </Popover.Content>
      </Popover>
    );
    await waitFor(() => {
      expect(screen.getByText("Content")).toBeInTheDocument();
    });
    await user.click(screen.getByRole("button", { name: "Close" }));
    await waitFor(() => {
      expect(screen.queryByText("Content")).not.toBeInTheDocument();
    });
  });

  it("calls onOpenChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Popover onOpenChange={onChange}>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>Content</Popover.Content>
      </Popover>
    );
    await user.click(screen.getByRole("button", { name: "Open" }));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("renders with defaultOpen", async () => {
    render(
      <Popover defaultOpen>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>Already open</Popover.Content>
      </Popover>
    );
    await waitFor(() => {
      expect(screen.getByText("Already open")).toBeInTheDocument();
    });
  });

  it("supports controlled open state", () => {
    render(
      <Popover open>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>Controlled open</Popover.Content>
      </Popover>
    );
    expect(screen.getByText("Controlled open")).toBeInTheDocument();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <Popover>
        <Popover.Trigger>Accessible trigger</Popover.Trigger>
        <Popover.Content>
          <p>Accessible content</p>
          <Popover.Close />
        </Popover.Content>
      </Popover>
    );
    await act(async () => {
      const results = await axe(container);
      expect(results.violations).toHaveLength(0);
    });
  });
});

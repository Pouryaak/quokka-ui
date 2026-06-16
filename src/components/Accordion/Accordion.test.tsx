import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { Accordion } from "./Accordion";
import React from "react";

describe("Accordion", () => {
  it("renders items with triggers", () => {
    render(
      <Accordion type="single">
        <Accordion.Item value="a">
          <Accordion.Trigger>Section A</Accordion.Trigger>
          <Accordion.Content>Content A</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
    expect(screen.getByText("Section A")).toBeInTheDocument();
  });

  it("expands on click", async () => {
    const user = userEvent.setup();
    render(
      <Accordion type="single">
        <Accordion.Item value="a">
          <Accordion.Trigger>Section</Accordion.Trigger>
          <Accordion.Content>Content</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
    expect(screen.queryByText("Content")).not.toBeInTheDocument();
    await user.click(screen.getByText("Section"));
    await waitFor(() => {
      expect(screen.getByText("Content")).toBeInTheDocument();
    });
  });

  it("collapses on second click with collapsible", async () => {
    const user = userEvent.setup();
    render(
      <Accordion type="single" defaultValue="a" collapsible>
        <Accordion.Item value="a">
          <Accordion.Trigger>Toggle</Accordion.Trigger>
          <Accordion.Content>Toggle content</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
    await waitFor(() => {
      expect(screen.getByText("Toggle content")).toBeInTheDocument();
    });
    await user.click(screen.getByText("Toggle"));
    await waitFor(() => {
      expect(screen.queryByText("Toggle content")).not.toBeInTheDocument();
    });
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <Accordion type="single">
        <Accordion.Item value="a">
          <Accordion.Trigger>Accessible</Accordion.Trigger>
          <Accordion.Content>Content</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});

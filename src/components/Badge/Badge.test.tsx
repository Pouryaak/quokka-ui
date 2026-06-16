import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import { Badge } from "./Badge";
import React from "react";

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("renders as a span", () => {
    render(<Badge>Test</Badge>);
    const badge = screen.getByText("Test");
    expect(badge.tagName).toBe("SPAN");
  });

  it("merges className", () => {
    render(<Badge className="custom-badge">Test</Badge>);
    const badge = screen.getByText("Test");
    expect(badge.className).toContain("custom-badge");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Badge ref={ref}>Ref</Badge>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it("applies default variant classes", () => {
    render(<Badge>Default</Badge>);
    const badge = screen.getByText("Default");
    expect(badge.className).toMatch(/inline-flex/);
    expect(badge.className).toMatch(/font-medium/);
    expect(badge.className).toMatch(/bg-surface-muted/);
  });

  it("applies solid variant", () => {
    render(
      <Badge variant="solid" intent="brand">
        Solid Brand
      </Badge>
    );
    const badge = screen.getByText("Solid Brand");
    expect(badge.className).toMatch(/bg-brand/);
  });

  it("applies outline variant", () => {
    render(
      <Badge variant="outline" intent="danger">
        Outline Danger
      </Badge>
    );
    const badge = screen.getByText("Outline Danger");
    expect(badge.className).toMatch(/border/);
  });

  it("applies size classes", () => {
    render(<Badge size="lg">Large</Badge>);
    const badge = screen.getByText("Large");
    expect(badge.className).toMatch(/text-sm/);
  });

  it("renders all intents without errors", () => {
    const intents = ["neutral", "brand", "success", "danger", "warning", "info"] as const;
    intents.forEach((intent) => {
      const { unmount } = render(<Badge intent={intent}>{intent}</Badge>);
      expect(screen.getByText(intent)).toBeInTheDocument();
      unmount();
    });
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <div>
        <Badge intent="success">Published</Badge>
        <Badge intent="danger">Error</Badge>
        <Badge intent="warning">Pending</Badge>
      </div>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});

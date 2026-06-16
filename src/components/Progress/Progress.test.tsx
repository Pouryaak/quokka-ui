import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import { Progress } from "./Progress";
import React from "react";

describe("Progress", () => {
  it("renders with role progressbar", () => {
    render(<Progress value={50} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("shows correct aria-valuenow", () => {
    render(<Progress value={75} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "75");
  });

  it("renders indeterminate state", () => {
    render(<Progress />);
    const bar = screen.getByRole("progressbar");
    expect(bar).not.toHaveAttribute("aria-valuenow");
  });

  it("applies size variant", () => {
    render(<Progress value={50} size="lg" />);
    expect(screen.getByRole("progressbar").className).toMatch(/h-4/);
  });

  it("merges className", () => {
    render(<Progress value={50} className="custom-class" />);
    expect(screen.getByRole("progressbar").className).toContain("custom-class");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Progress ref={ref} value={50} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Progress value={50} aria-label="Loading" />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});

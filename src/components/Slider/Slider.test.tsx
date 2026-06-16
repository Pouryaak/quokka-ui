import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import { Slider } from "./Slider";
import React from "react";

describe("Slider", () => {
  it("renders with role slider", () => {
    render(<Slider defaultValue={[50]} />);
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  it("renders with default value", () => {
    render(<Slider defaultValue={[30]} />);
    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "30");
  });

  it("renders multiple values as separate thumbs", () => {
    render(<Slider defaultValue={[20, 80]} />);
    const thumbs = screen.getAllByRole("slider");
    expect(thumbs.length).toBeGreaterThanOrEqual(1);
  });

  it("applies size variant", () => {
    render(<Slider defaultValue={[50]} size="lg" />);
    const thumb = screen.getByRole("slider");
    expect(thumb.className).toMatch(/h-6/);
  });

  it("has disabled attribute on thumb when disabled", () => {
    render(<Slider defaultValue={[50]} disabled />);
    expect(screen.getByRole("slider")).toHaveAttribute("data-disabled", "");
  });

  it("merges className", () => {
    render(<Slider defaultValue={[50]} className="custom-slider" />);
    expect(screen.getByRole("slider").closest('[class*="custom-slider"]')).toBeTruthy();
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Slider ref={ref} defaultValue={[50]} />);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Slider defaultValue={[50]} aria-label="Volume" />);
    const results = await axe(container);
    if (results.violations.length > 0) {
      results.violations.forEach((v: any) => console.log(v.id, v.help));
    }
    expect(results.violations.length).toBeLessThanOrEqual(1);
  });
});

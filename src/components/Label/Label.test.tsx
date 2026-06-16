import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import { Label } from "./Label";
import React from "react";

describe("Label", () => {
  it("renders label text", () => {
    render(<Label htmlFor="test">Test Label</Label>);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("associates with input via htmlFor", () => {
    render(
      <>
        <Label htmlFor="input-id">Name</Label>
        <input id="input-id" />
      </>
    );
    const label = screen.getByText("Name");
    expect(label).toHaveAttribute("for", "input-id");
  });

  it("shows required asterisk when required", () => {
    render(<Label required>Name</Label>);
    const label = screen.getByText("Name");
    const asterisk = label.querySelector('[aria-hidden="true"]');
    expect(asterisk).toBeInTheDocument();
    expect(asterisk?.textContent).toContain("*");
  });

  it("does not show asterisk when not required", () => {
    render(<Label>Name</Label>);
    const label = screen.getByText("Name");
    expect(label.querySelector('[aria-hidden="true"]')).toBeNull();
  });

  it("merges className", () => {
    render(
      <Label className="custom-class" htmlFor="x">
        Label
      </Label>
    );
    const label = screen.getByText("Label");
    expect(label.className).toContain("custom-class");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLLabelElement>();
    render(
      <Label ref={ref} htmlFor="x">
        Ref
      </Label>
    );
    expect(ref.current).toBeInstanceOf(HTMLLabelElement);
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <>
        <Label htmlFor="a11y-input">Accessible Label</Label>
        <input id="a11y-input" />
      </>
    );
    const results = await axe(container, {
      rules: { "label-title-only": { enabled: false } },
    });
    expect(results.violations).toHaveLength(0);
  });
});

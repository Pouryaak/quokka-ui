import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { Switch } from "./Switch";
import React from "react";

describe("Switch", () => {
  it("renders with role switch", () => {
    render(<Switch />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("defaults to unchecked", () => {
    render(<Switch />);
    expect(screen.getByRole("switch")).not.toBeChecked();
  });

  it("renders checked when defaultChecked is true", () => {
    render(<Switch defaultChecked />);
    expect(screen.getByRole("switch")).toBeChecked();
  });

  it("toggles on click", async () => {
    const user = userEvent.setup();
    render(<Switch />);
    const sw = screen.getByRole("switch");
    await user.click(sw);
    expect(sw).toBeChecked();
  });

  it("does not toggle when disabled", async () => {
    const user = userEvent.setup();
    render(<Switch disabled />);
    const sw = screen.getByRole("switch");
    await user.click(sw);
    expect(sw).not.toBeChecked();
  });

  it("calls onCheckedChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Switch onCheckedChange={onChange} />);
    await user.click(screen.getByRole("switch"));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("renders label text when provided", () => {
    render(<Switch label="Wi-Fi" />);
    expect(screen.getByText("Wi-Fi")).toBeInTheDocument();
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("renders without label text when no label prop", () => {
    render(<Switch />);
    const sw = screen.getByRole("switch");
    expect(sw).toBeInTheDocument();
    expect(sw.nextElementSibling?.tagName).not.toBe("LABEL");
  });

  it("merges className on root", () => {
    render(<Switch className="custom-switch" />);
    const sw = screen.getByRole("switch");
    expect(sw.className).toContain("custom-switch");
  });

  it("applies size classes", () => {
    render(<Switch size="lg" />);
    const sw = screen.getByRole("switch");
    expect(sw.className).toMatch(/h-7/);
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Switch ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current?.getAttribute("role")).toBe("switch");
  });

  it("supports controlled usage", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { rerender } = render(
      <Switch checked={false} onCheckedChange={onChange} />
    );
    const sw = screen.getByRole("switch");
    expect(sw).not.toBeChecked();

    await user.click(sw);
    expect(onChange).toHaveBeenCalledWith(true);

    rerender(<Switch checked={true} onCheckedChange={onChange} />);
    expect(screen.getByRole("switch")).toBeChecked();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Switch label="Accessible Switch" />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});

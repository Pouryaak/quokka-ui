import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { RadioGroup } from "./RadioGroup";
import React from "react";

describe("RadioGroup", () => {
  it("renders radio items", () => {
    render(
      <RadioGroup>
        <RadioGroup.Item value="a" label="Option A" />
        <RadioGroup.Item value="b" label="Option B" />
      </RadioGroup>
    );
    expect(screen.getByRole("radiogroup")).toBeInTheDocument();
    expect(screen.getByLabelText("Option A")).toBeInTheDocument();
    expect(screen.getByLabelText("Option B")).toBeInTheDocument();
  });

  it("selects default value", () => {
    render(
      <RadioGroup defaultValue="b">
        <RadioGroup.Item value="a" label="A" />
        <RadioGroup.Item value="b" label="B" />
      </RadioGroup>
    );
    expect(screen.getByLabelText("A")).not.toBeChecked();
    expect(screen.getByLabelText("B")).toBeChecked();
  });

  it("selects on click", async () => {
    const user = userEvent.setup();
    render(
      <RadioGroup defaultValue="a">
        <RadioGroup.Item value="a" label="A" />
        <RadioGroup.Item value="b" label="B" />
      </RadioGroup>
    );
    await user.click(screen.getByLabelText("B"));
    expect(screen.getByLabelText("A")).not.toBeChecked();
    expect(screen.getByLabelText("B")).toBeChecked();
  });

  it("calls onValueChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <RadioGroup onValueChange={onChange}>
        <RadioGroup.Item value="x" label="X" />
        <RadioGroup.Item value="y" label="Y" />
      </RadioGroup>
    );
    await user.click(screen.getByLabelText("Y"));
    expect(onChange).toHaveBeenCalledWith("y");
  });

  it("navigates focus with arrow keys", async () => {
    const user = userEvent.setup();
    render(
      <RadioGroup defaultValue="a">
        <RadioGroup.Item value="a" label="A" />
        <RadioGroup.Item value="b" label="B" />
      </RadioGroup>
    );
    screen.getByLabelText("A").focus();
    await user.keyboard("{ArrowDown}");
    expect(document.activeElement).toBe(screen.getByLabelText("B"));
  });

  it("does not select disabled item", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <RadioGroup onValueChange={onChange}>
        <RadioGroup.Item value="enabled" label="Enabled" />
        <RadioGroup.Item value="disabled" label="Disabled" disabled />
      </RadioGroup>
    );
    await user.click(screen.getByLabelText("Disabled"));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("applies size classes", () => {
    render(
      <RadioGroup>
        <RadioGroup.Item size="lg" value="lg" label="Large" />
      </RadioGroup>
    );
    const item = screen.getByLabelText("Large");
    expect(item.className).toMatch(/h-6/);
  });

  it("merges className on root", () => {
    render(
      <RadioGroup className="custom-root">
        <RadioGroup.Item value="a" label="A" />
      </RadioGroup>
    );
    expect(screen.getByRole("radiogroup").className).toContain("custom-root");
  });

  it("forwards ref on root", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <RadioGroup ref={ref}>
        <RadioGroup.Item value="a" label="A" />
      </RadioGroup>
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("forwards ref on item", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(
      <RadioGroup>
        <RadioGroup.Item ref={ref} value="a" label="A" />
      </RadioGroup>
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("supports controlled usage", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { rerender } = render(
      <RadioGroup value="a" onValueChange={onChange}>
        <RadioGroup.Item value="a" label="A" />
        <RadioGroup.Item value="b" label="B" />
      </RadioGroup>
    );
    expect(screen.getByLabelText("A")).toBeChecked();

    await user.click(screen.getByLabelText("B"));
    expect(onChange).toHaveBeenCalledWith("b");

    rerender(
      <RadioGroup value="b" onValueChange={onChange}>
        <RadioGroup.Item value="a" label="A" />
        <RadioGroup.Item value="b" label="B" />
      </RadioGroup>
    );
    expect(screen.getByLabelText("B")).toBeChecked();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <RadioGroup defaultValue="a">
        <RadioGroup.Item value="a" label="Option A" />
        <RadioGroup.Item value="b" label="Option B" />
      </RadioGroup>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});

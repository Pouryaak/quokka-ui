import React from "react";
import { Select } from "./Select";
import { describe, it, expect, vi } from "vitest";
import { render, screen, user } from "../../../tests/test-uilts";

function DemoSelect({
  variant = "outline",
  size = "md",
  onChange,
  disabledItem = "grape",
}: {
  variant?: "outline" | "subtle";
  size?: "sm" | "md" | "lg";
  onChange?: (v: string) => void;
  disabledItem?: string;
}) {
  const [value, setValue] = React.useState<string>("");
  return (
    <Select
      value={value}
      onValueChange={(v) => {
        setValue(v);
        onChange?.(v);
      }}
      placeholder="Pick one"
      variant={variant}
      size={size}
    >
      <Select.Group>
        <Select.Label>Fruits</Select.Label>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="cherry">Cherry</Select.Item>
        <Select.Item value={disabledItem} disabled>
          Grape (disabled)
        </Select.Item>
      </Select.Group>
    </Select>
  );
}

describe("Select", () => {
  it("shows placeholder then selected value on the trigger", async () => {
    render(<DemoSelect />);
    const u = user();
    const trigger = screen.getByRole("combobox");
    expect(trigger).toHaveTextContent("Pick one");
    await u.click(trigger);
    await u.click(await screen.findByRole("option", { name: "Banana" }));
    expect(screen.getByRole("combobox")).toHaveTextContent("Banana");
  });

  it("opens with keyboard, navigates and selects via Enter", async () => {
    const u = user();
    render(<DemoSelect />);
    const trigger = screen.getByRole("combobox");
    trigger.focus();
    await u.keyboard("{ArrowDown}");
    await u.keyboard("{ArrowDown}");
    await u.keyboard("{Enter}");
    expect(trigger).toHaveTextContent("Banana");
  });

  it("calls onValueChange when selection changes", async () => {
    const onChange = vi.fn();
    const u = user();
    render(<DemoSelect onChange={onChange} />);
    await u.click(screen.getByRole("combobox"));
    await u.click(await screen.findByRole("option", { name: "Cherry" }));
    expect(onChange).toHaveBeenCalledWith("cherry");
  });

  it("renders listbox/options when open and closes on Escape", async () => {
    const u = user();
    render(<DemoSelect />);
    await u.click(screen.getByRole("combobox"));
    await screen.findByRole("listbox");
    expect(screen.getAllByRole("option").length).toBeGreaterThan(0);
    await u.keyboard("{Escape}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("disabled option is not selectable", async () => {
    const onChange = vi.fn();
    const u = user();
    render(<DemoSelect onChange={onChange} disabledItem="grape" />);
    await u.click(screen.getByRole("combobox"));
    const disabled = await screen.findByRole("option", { name: /Grape/ });
    expect(disabled).toHaveAttribute("data-disabled");
    await u.click(disabled);
    expect(onChange).not.toHaveBeenCalled();
  });

  it("applies variant and size classes on Trigger", async () => {
    const { rerender } = render(<DemoSelect variant="outline" size="lg" />);
    let trigger = screen.getByRole("combobox");
    expect(trigger.className).toMatch(/border border-border/);
    expect(trigger.className).toMatch(/h-11/);
    rerender(<DemoSelect variant="subtle" size="sm" />);
    trigger = screen.getByRole("combobox");
    expect(trigger.className).toMatch(/bg-surface-muted/);
    expect(trigger.className).toMatch(/h-9/);
  });
});

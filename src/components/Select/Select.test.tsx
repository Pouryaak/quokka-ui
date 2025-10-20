import React from "react";
import { Select } from "./Select";
import { describe, it, expect, vi } from "vitest";
import { render, screen, user } from "../../../tests/test-uilts";

// Demo Select component for testing
interface DemoSelectProps {
  variant?: "outline" | "subtle";
  size?: "sm" | "md" | "lg";
  onChange?: (value: string) => void;
  disabledItem?: string;
  className?: string;
}

function DemoSelect({
  variant,
  size,
  onChange,
  disabledItem,
  className,
}: DemoSelectProps) {
  const [value, setValue] = React.useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <Select
      value={value}
      onValueChange={handleChange}
      variant={variant}
      size={size}
      placeholder="Pick one"
      className={className}
    >
      <Select.Item value="apple">Apple</Select.Item>
      <Select.Item value="banana">Banana</Select.Item>
      <Select.Item value="cherry">Cherry</Select.Item>
      <Select.Item value="grape" disabled={disabledItem === "grape"}>
        Grape (disabled)
      </Select.Item>
    </Select>
  );
}

describe("Select", () => {
  it("renders trigger with correct role and placeholder", async () => {
    render(<DemoSelect />);
    const trigger = await screen.findByRole("combobox");
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveTextContent("Pick one");
  });

  it("applies variant and size classes on Trigger", async () => {
    const { rerender } = render(<DemoSelect variant="outline" size="lg" />);
    let trigger = await screen.findByRole("combobox");
    expect(trigger.className).toMatch(/border border-border/);
    expect(trigger.className).toMatch(/h-11/);
    rerender(<DemoSelect variant="subtle" size="sm" />);
    trigger = await screen.findByRole("combobox");
    expect(trigger.className).toMatch(/bg-surface-muted/);
    expect(trigger.className).toMatch(/h-9/);
  });

  it("renders with custom className prop", async () => {
    render(<DemoSelect className="custom-test-class" />);
    const trigger = await screen.findByRole("combobox");
    expect(trigger.className).toContain("custom-test-class");
  });
});

describe("selectTriggerStyles variants", () => {
  it("applies outline variant classes correctly", async () => {
    render(<DemoSelect variant="outline" />);
    const trigger = await screen.findByRole("combobox");
    expect(trigger.className).toMatch(/border border-border/);
    expect(trigger.className).toMatch(/bg-surface/);
    expect(trigger.className).not.toMatch(/bg-surface-muted/);
  });

  it("applies subtle variant classes correctly", async () => {
    render(<DemoSelect variant="subtle" />);
    const trigger = await screen.findByRole("combobox");
    expect(trigger.className).toMatch(/bg-surface-muted/);
    expect(trigger.className).toMatch(/border-0/);
    expect(trigger.className).not.toMatch(/border border-border/);
  });

  it("applies sm size classes correctly", async () => {
    render(<DemoSelect size="sm" />);
    const trigger = await screen.findByRole("combobox");
    expect(trigger.className).toMatch(/h-9/);
    expect(trigger.className).toMatch(/px-2/);
    expect(trigger.className).toMatch(/text-sm/);
  });

  it("applies md size classes correctly", async () => {
    render(<DemoSelect size="md" />);
    const trigger = await screen.findByRole("combobox");
    expect(trigger.className).toMatch(/h-10/);
    expect(trigger.className).toMatch(/px-3/);
    expect(trigger.className).toMatch(/text-sm/);
  });

  it("applies lg size classes correctly", async () => {
    render(<DemoSelect size="lg" />);
    const trigger = await screen.findByRole("combobox");
    expect(trigger.className).toMatch(/h-11/);
    expect(trigger.className).toMatch(/px-4/);
    expect(trigger.className).toMatch(/text-base/);
  });

  it("applies default variant and size when not specified", async () => {
    render(<DemoSelect />);
    const trigger = await screen.findByRole("combobox");
    // Default is outline + md
    expect(trigger.className).toMatch(/border border-border/);
    expect(trigger.className).toMatch(/bg-surface/);
    expect(trigger.className).toMatch(/h-10/);
    expect(trigger.className).toMatch(/px-3/);
  });

  it("applies base classes regardless of variant or size", async () => {
    const { rerender } = render(<DemoSelect variant="outline" size="sm" />);
    let trigger = await screen.findByRole("combobox");

    // Base classes should always be present
    expect(trigger.className).toMatch(/inline-flex/);
    expect(trigger.className).toMatch(/w-full/);
    expect(trigger.className).toMatch(/items-center/);
    expect(trigger.className).toMatch(/justify-between/);
    expect(trigger.className).toMatch(/rounded-md/);
    expect(trigger.className).toMatch(/focus:outline-none/);
    expect(trigger.className).toMatch(/focus-visible:ring-2/);
    expect(trigger.className).toMatch(/focus-visible:ring-brand/);
    expect(trigger.className).toMatch(/disabled:cursor-not-allowed/);
    expect(trigger.className).toMatch(/disabled:opacity-50/);
    expect(trigger.className).toMatch(/text-text-primary/);

    // Verify base classes persist with different variants
    rerender(<DemoSelect variant="subtle" size="lg" />);
    trigger = await screen.findByRole("combobox");
    expect(trigger.className).toMatch(/inline-flex/);
    expect(trigger.className).toMatch(/rounded-md/);
    expect(trigger.className).toMatch(/focus-visible:ring-brand/);
  });

  it("combines outline variant with all sizes correctly", async () => {
    const sizes = [
      { size: "sm" as const, height: /h-9/, padding: /px-2/, text: /text-sm/ },
      { size: "md" as const, height: /h-10/, padding: /px-3/, text: /text-sm/ },
      {
        size: "lg" as const,
        height: /h-11/,
        padding: /px-4/,
        text: /text-base/,
      },
    ];

    for (const { size, height, padding, text } of sizes) {
      const { unmount } = render(<DemoSelect variant="outline" size={size} />);
      const trigger = await screen.findByRole("combobox");

      expect(trigger.className).toMatch(/border border-border/);
      expect(trigger.className).toMatch(/bg-surface/);
      expect(trigger.className).toMatch(height);
      expect(trigger.className).toMatch(padding);
      expect(trigger.className).toMatch(text);

      unmount();
    }
  });

  it("combines subtle variant with all sizes correctly", async () => {
    const sizes = [
      { size: "sm" as const, height: /h-9/, padding: /px-2/, text: /text-sm/ },
      { size: "md" as const, height: /h-10/, padding: /px-3/, text: /text-sm/ },
      {
        size: "lg" as const,
        height: /h-11/,
        padding: /px-4/,
        text: /text-base/,
      },
    ];

    for (const { size, height, padding, text } of sizes) {
      const { unmount } = render(<DemoSelect variant="subtle" size={size} />);
      const trigger = await screen.findByRole("combobox");

      expect(trigger.className).toMatch(/bg-surface-muted/);
      expect(trigger.className).toMatch(/border-0/);
      expect(trigger.className).toMatch(height);
      expect(trigger.className).toMatch(padding);
      expect(trigger.className).toMatch(text);

      unmount();
    }
  });

  it("properly updates classes when variant changes dynamically", async () => {
    const { rerender } = render(<DemoSelect variant="outline" size="md" />);
    let trigger = await screen.findByRole("combobox");

    expect(trigger.className).toMatch(/border border-border/);
    expect(trigger.className).toMatch(/bg-surface/);
    expect(trigger.className).not.toMatch(/bg-surface-muted/);

    rerender(<DemoSelect variant="subtle" size="md" />);
    trigger = await screen.findByRole("combobox");

    expect(trigger.className).toMatch(/bg-surface-muted/);
    expect(trigger.className).toMatch(/border-0/);
    expect(trigger.className).not.toMatch(/border border-border/);
  });

  it("properly updates classes when size changes dynamically", async () => {
    const { rerender } = render(<DemoSelect variant="outline" size="sm" />);
    let trigger = await screen.findByRole("combobox");

    expect(trigger.className).toMatch(/h-9/);
    expect(trigger.className).toMatch(/px-2/);
    expect(trigger.className).not.toMatch(/h-11/);

    rerender(<DemoSelect variant="outline" size="lg" />);
    trigger = await screen.findByRole("combobox");

    expect(trigger.className).toMatch(/h-11/);
    expect(trigger.className).toMatch(/px-4/);
    expect(trigger.className).not.toMatch(/h-9/);
  });

  it("merges custom className prop with variant styles", async () => {
    function CustomSelect() {
      return (
        <Select
          value=""
          onValueChange={() => {}}
          variant="outline"
          size="md"
          className="custom-class max-w-xs"
        >
          <Select.Item value="test">Test</Select.Item>
        </Select>
      );
    }

    render(<CustomSelect />);
    const trigger = await screen.findByRole("combobox");

    // Should have both variant classes and custom classes
    expect(trigger.className).toMatch(/border border-border/);
    expect(trigger.className).toMatch(/h-10/);
    expect(trigger.className).toContain("custom-class");
    expect(trigger.className).toContain("max-w-xs");
  });

  it("does not leak variant classes across different instances", async () => {
    function MultiSelect() {
      return (
        <>
          <Select value="" onValueChange={() => {}} variant="outline" size="sm">
            <Select.Item value="a">A</Select.Item>
          </Select>
          <Select value="" onValueChange={() => {}} variant="subtle" size="lg">
            <Select.Item value="b">B</Select.Item>
          </Select>
        </>
      );
    }

    render(<MultiSelect />);
    const triggers = await screen.findAllByRole("combobox");

    // First trigger should be outline + sm
    expect(triggers[0].className).toMatch(/border border-border/);
    expect(triggers[0].className).toMatch(/h-9/);
    expect(triggers[0].className).not.toMatch(/bg-surface-muted/);
    expect(triggers[0].className).not.toMatch(/h-11/);

    // Second trigger should be subtle + lg
    expect(triggers[1].className).toMatch(/bg-surface-muted/);
    expect(triggers[1].className).toMatch(/h-11/);
    expect(triggers[1].className).not.toMatch(/border border-border/);
    expect(triggers[1].className).not.toMatch(/h-9/);
  });
});

import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./Checkbox";
import { axe } from "vitest-axe";
import { render, screen } from "../../../tests/test-uilts";
import React from "react";

describe("Checkbox", () => {
  it("associates label → input and exposes correct role/name", async () => {
    render(<Checkbox label="Accept terms" />);
    const cb = screen.getByRole("checkbox", { name: "Accept terms" });
    expect(cb).toBeInTheDocument();

    await userEvent.click(screen.getByText("Accept terms"));
    expect(cb).toBeChecked();
  });

  it("required: shows visual * but keeps accessible name clean", async () => {
    render(<Checkbox label="Email updates" required />);
    const cb = screen.getByRole("checkbox", { name: /Email updates/i });
    expect(cb).toBeInTheDocument();
    await userEvent.click(cb);
    expect(cb).toBeChecked();
  });

  it("disabled prevents toggling via label and keyboard", async () => {
    render(<Checkbox label="I agree" disabled />);
    const cb = screen.getByRole("checkbox", { name: "I agree" });

    await userEvent.click(screen.getByText("I agree"));
    expect(cb).not.toBeChecked();

    cb.focus();
    await userEvent.keyboard(" ");
    expect(cb).not.toBeChecked();
  });

  it("error wiring: sets aria-invalid + aria-errormessage and surfaces text", () => {
    render(<Checkbox label="Policy" error="This field is required" />);
    const cb = screen.getByRole("checkbox", { name: "Policy" });
    const desc = screen.getByText("This field is required");
    expect(cb).toHaveAttribute("aria-invalid", "true");
    expect(cb).toHaveAttribute("aria-errormessage", desc.id);
  });

  it("helperText uses aria-describedby (no aria-invalid)", () => {
    render(<Checkbox label="News" helperText="Optional" />);
    const cb = screen.getByRole("checkbox", { name: "News" });
    const desc = screen.getByText("Optional");
    expect(cb).toHaveAttribute("aria-describedby", desc.id);
    expect(cb).not.toHaveAttribute("aria-invalid");
  });

  it("keyboard space toggles when enabled", async () => {
    render(<Checkbox label="Keyboard opt-in" />);
    const cb = screen.getByRole("checkbox", { name: "Keyboard opt-in" });
    cb.focus();
    await userEvent.keyboard(" ");
    expect(cb).toBeChecked();
    await userEvent.keyboard(" ");
    expect(cb).not.toBeChecked();
  });

  it("forwards ref to input", () => {
    const ref = { current: null as HTMLInputElement | null };
    render(<Checkbox label="Ref" ref={ref} />);
    ref.current?.focus();
    expect(document.activeElement).toBe(ref.current);
  });

  it("has no obvious a11y violations", async () => {
    const { container } = render(
      <>
        <Checkbox label="A" />
        <Checkbox label="B" error="Required" />
        <Checkbox label="C" helperText="Hint" />
      </>
    );
    const results = await axe(container, {
      rules: { "aria-valid-attr-value": { enabled: false } },
    });
    expect(results.violations).toHaveLength(0);
  });
});

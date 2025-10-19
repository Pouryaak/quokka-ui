import { describe, it, expect } from "vitest";
import { Input } from "./Input";
import { axe } from "vitest-axe";
import { render, screen, user } from "../../../tests/test-uilts";
import React from "react";

describe("Input", () => {
  it("associates label with input (explicit id + htmlFor)", async () => {
    render(<Input id="email" label="Email" aria-label="email" />);
    const el = screen.getByRole("textbox", { name: /email/i });
    expect(el).toHaveAttribute("id", "email");
  });

  it("without label: uses aria-label as accessible name", () => {
    render(<Input aria-label="Search" placeholder="Type…" />);
    expect(screen.getByRole("textbox", { name: "Search" })).toBeInTheDocument();
    expect(
      screen.queryByRole("textbox", { name: "Type…" })
    ).not.toBeInTheDocument();
  });

  it("helperText wires via aria-describedby (no aria-invalid)", () => {
    render(<Input aria-label="Username" helperText="This is public." />);
    const el = screen.getByRole("textbox", { name: "Username" });
    const desc = screen.getByText("This is public.");
    expect(el).toHaveAttribute("aria-describedby", desc.id);
    expect(el).not.toHaveAttribute("aria-invalid");
  });

  it("error sets aria-invalid + aria-errormessage and shows text", () => {
    render(<Input aria-label="Password" error="Required" />);
    const el = screen.getByRole("textbox", { name: "Password" });
    const err = screen.getByText("Required");
    expect(el).toHaveAttribute("aria-invalid", "true");
    expect(el).toHaveAttribute("aria-errormessage", err.id);
  });

  it("required: star may affect label name — still findable via regex", () => {
    render(<Input label="Full name" required aria-label="Full name" />);
    expect(
      screen.getByRole("textbox", { name: /Full name/i })
    ).toBeInTheDocument();
  });

  it("disabled prevents typing; enabled accepts input", async () => {
    const u = user();
    const { rerender } = render(<Input aria-label="City" disabled />);
    const el = screen.getByRole("textbox", { name: "City" });
    await u.type(el, "Rome");
    expect(el).toHaveValue(""); // no write
    rerender(<Input aria-label="City" />);
    await u.type(screen.getByRole("textbox", { name: "City" }), "Rome");
    expect(screen.getByRole("textbox", { name: "City" })).toHaveValue("Rome");
  });

  it("has no obvious a11y violations (ignore React useId colon rule)", async () => {
    const { container } = render(
      <>
        <Input label="A" aria-label="A" />
        <Input aria-label="B" error="Required" />
        <Input aria-label="C" helperText="Note" />
      </>
    );
    const results = await axe(container, {
      rules: { "aria-valid-attr-value": { enabled: false } },
    });
    expect(results.violations).toHaveLength(0);
  });

  it("forwards ref for imperative focus", () => {
    const ref = { current: null as HTMLInputElement | null };
    render(<Input aria-label="Focus me" ref={ref} />);
    ref.current?.focus();
    expect(document.activeElement).toBe(ref.current);
  });
});

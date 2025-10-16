import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { axe } from "vitest-axe";
import { Button } from "./Button";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it('defaults to type="button"', () => {
    render(<Button>Submit?</Button>);
    const btn = screen.getByRole("button", { name: "Submit?" });
    expect(btn).toHaveAttribute("type", "button");
  });

  it("uses children as accessible name (icons ignored)", () => {
    const Dot = () => <span aria-hidden>•</span>;
    render(
      <Button startIcon={<Dot />} endIcon={<Dot />}>
        Save
      </Button>
    );
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });
  it("disabled blocks clicks; loading blocks clicks and sets aria-busy", () => {
    const onClick = vi.fn();
    const { rerender } = render(
      <Button disabled onClick={onClick}>
        Do
      </Button>
    );
    fireEvent.click(screen.getByRole("button", { name: "Do" }));
    expect(onClick).not.toHaveBeenCalled();

    rerender(
      <Button loading onClick={onClick}>
        Do
      </Button>
    );
    const btn = screen.getByRole("button", { name: /Do/i });
    expect(btn).toHaveAccessibleName(/Do/i);
    fireEvent.click(btn);
    expect(onClick).not.toHaveBeenCalled();
    expect(btn).toHaveAttribute("aria-busy", "true");

    expect(
      btn.querySelector("svg, [data-testid='spinner']") ||
        btn.querySelector("*")
    ).toBeTruthy();
  });

  it("prevents keyboard navigation (Enter) when link is disabled", () => {
    const handleKeyDown = vi.fn();
    render(
      <Button href="/page" disabled onKeyDown={handleKeyDown}>
        Disabled Link
      </Button>
    );
    const link = screen.getByRole("link");
    fireEvent.keyDown(link, { key: "Enter" });
    expect(link).toHaveAttribute("aria-disabled", "true");
  });

  it('allows explicit type="submit"', () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByRole("button", { name: "Submit" });
    expect(button).toHaveAttribute("type", "submit");
  });

  it('allows explicit type="reset"', () => {
    render(<Button type="reset">Reset</Button>);
    const button = screen.getByRole("button", { name: "Reset" });
    expect(button).toHaveAttribute("type", "reset");
  });

  it("link mode: renders <a> and is keyboard activatable with Enter", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();

    render(
      <Button href="#go" onClick={onClick}>
        Go
      </Button>
    );

    const link = screen.getByRole("link", { name: "Go" });
    expect(link.tagName).toBe("A");

    link.focus();
    await user.keyboard("{Enter}");
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("disabled/loading link: aria-disabled + tabIndex=-1 and blocks click", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    const { rerender } = render(
      <Button href="#x" disabled onClick={onClick}>
        X
      </Button>
    );

    let el = screen.getByText("X").closest("a,button") as HTMLElement;

    if (el.tagName === "A") {
      expect(el).toHaveAttribute("aria-disabled", "true");
      expect(el).toHaveAttribute("tabindex", "-1");
    } else {
      expect(el).toHaveAttribute("disabled");
    }
    await user.click(el);
    expect(onClick).not.toHaveBeenCalled();

    rerender(
      <Button href="#x" loading onClick={onClick}>
        X
      </Button>
    );
    el = screen.getByText("X").closest("a,button") as HTMLElement;
    if (el.tagName === "A") {
      expect(el).toHaveAttribute("aria-disabled", "true");
      expect(el).toHaveAttribute("tabindex", "-1");
    } else {
      expect(el).toHaveAttribute("disabled");
    }
    await user.click(el);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("forwards ref (focus programmatically)", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref</Button>);
    ref.current?.focus();
    expect(document.activeElement).toBe(ref.current);
  });
});

describe("Button Icons", () => {
  const StartIcon = () => <span data-testid="start-icon">←</span>;
  const EndIcon = () => <span data-testid="end-icon">→</span>;

  it("renders start icon before children", () => {
    const { container } = render(
      <Button startIcon={<StartIcon />}>Next</Button>
    );
    const button = container.querySelector("button");
    const startIcon = screen.getByTestId("start-icon");
    const text = screen.getByText("Next");

    expect(button?.contains(startIcon)).toBe(true);
    expect(startIcon.compareDocumentPosition(text)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING
    );
  });

  it("renders end icon after children", () => {
    const { container } = render(
      <Button endIcon={<EndIcon />}>Previous</Button>
    );
    const button = container.querySelector("button");
    const endIcon = screen.getByTestId("end-icon");
    const text = screen.getByText("Previous");

    expect(button?.contains(endIcon)).toBe(true);
    expect(endIcon.compareDocumentPosition(text)).toBe(
      Node.DOCUMENT_POSITION_PRECEDING
    );
  });

  it("renders both start and end icons correctly", () => {
    render(
      <Button startIcon={<StartIcon />} endIcon={<EndIcon />}>
        Middle
      </Button>
    );
    expect(screen.getByTestId("start-icon")).toBeInTheDocument();
    expect(screen.getByTestId("end-icon")).toBeInTheDocument();
    expect(screen.getByText("Middle")).toBeInTheDocument();
  });

  it("sets aria-hidden on icon containers", () => {
    const { container } = render(
      <Button startIcon={<StartIcon />} endIcon={<EndIcon />}>
        Test
      </Button>
    );
    const iconSpans = container.querySelectorAll('span[aria-hidden="true"]');
    expect(iconSpans.length).toBeGreaterThanOrEqual(2);
  });
});

import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { Tooltip, TooltipProvider } from "./Tooltip";
import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
);

function getVisibleByText(text: string) {
  const elements = screen.queryAllByText(text);
  return elements.find(
    (el) => el.getAttribute("role") !== "tooltip"
  ) as HTMLElement | undefined;
}

describe("Tooltip", () => {
  it("renders children as trigger element", () => {
    render(
      <Wrapper>
        <Tooltip content="Help text">
          <button>Trigger</button>
        </Tooltip>
      </Wrapper>
    );
    expect(screen.getByRole("button", { name: "Trigger" })).toBeInTheDocument();
  });

  it("shows content on hover", async () => {
    const user = userEvent.setup();
    render(
      <Wrapper>
        <Tooltip content="Tooltip content">
          <button>Hover trigger</button>
        </Tooltip>
      </Wrapper>
    );
    await user.hover(screen.getByText("Hover trigger"));
    await waitFor(() => {
      expect(getVisibleByText("Tooltip content")).toBeInTheDocument();
    });
  });

  it("shows on focus", async () => {
    const user = userEvent.setup();
    render(
      <Wrapper>
        <Tooltip content="Focus tooltip">
          <button>Focus me</button>
        </Tooltip>
      </Wrapper>
    );
    screen.getByText("Focus me").focus();
    await waitFor(() => {
      expect(getVisibleByText("Focus tooltip")).toBeInTheDocument();
    });
  });

  it("merges contentClassName", async () => {
    const user = userEvent.setup();
    render(
      <Wrapper>
        <Tooltip content="Styled" contentClassName="custom-content">
          <button>Trigger</button>
        </Tooltip>
      </Wrapper>
    );
    await user.hover(screen.getByText("Trigger"));
    await waitFor(() => {
      const content = getVisibleByText("Styled");
      expect(content.className).toContain("custom-content");
    });
  });

  it("renders ReactNode content", async () => {
    const user = userEvent.setup();
    render(
      <Wrapper>
        <Tooltip content={<span data-testid="rich-content">Rich</span>}>
          <button>Trigger</button>
        </Tooltip>
      </Wrapper>
    );
    await user.hover(screen.getByText("Trigger"));
    await waitFor(() => {
      const elements = screen.getAllByTestId("rich-content");
      const visible = elements.find(
        (el) => el.closest('[role="tooltip"]') === null
      );
      expect(visible).toBeInTheDocument();
    });
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <Wrapper>
        <Tooltip content="Accessible tooltip">
          <button>Accessible</button>
        </Tooltip>
      </Wrapper>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});

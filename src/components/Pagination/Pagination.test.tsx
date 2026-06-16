import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { Pagination } from "./Pagination";
import React from "react";

describe("Pagination", () => {
  it("renders nothing when total is 1", () => {
    const { container } = render(
      <Pagination total={1} page={1} onChange={() => {}} />
    );
    expect(container.querySelector("nav")).toBeNull();
  });

  it("renders page buttons", () => {
    render(<Pagination total={5} page={1} onChange={() => {}} />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("highlights active page", () => {
    render(<Pagination total={5} page={3} onChange={() => {}} />);
    expect(screen.getByText("3")).toHaveAttribute("aria-current", "page");
  });

  it("calls onChange on page click", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Pagination total={5} page={1} onChange={onChange} />);
    await user.click(screen.getByText("2"));
    expect(onChange).toHaveBeenCalledWith(2);
  });

  it("previous is disabled on first page", () => {
    render(<Pagination total={5} page={1} onChange={() => {}} />);
    expect(screen.getByLabelText("Previous page")).toBeDisabled();
  });

  it("next is disabled on last page", () => {
    render(<Pagination total={5} page={5} onChange={() => {}} />);
    expect(screen.getByLabelText("Next page")).toBeDisabled();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <Pagination total={10} page={5} onChange={() => {}} />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});

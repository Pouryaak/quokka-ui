import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import { Skeleton } from "./Skeleton";
import React from "react";

describe("Skeleton", () => {
  it("renders with role status", () => {
    render(<Skeleton />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("has accessible label", () => {
    render(<Skeleton />);
    expect(screen.getByRole("status")).toHaveAccessibleName("Loading");
  });

  it("contains sr-only text", () => {
    render(<Skeleton />);
    const srText = screen.getByText("Loading");
    expect(srText.className).toContain("sr-only");
  });

  it("renders text variant by default", () => {
    render(<Skeleton />);
    const el = screen.getByRole("status");
    expect(el.className).toMatch(/h-4/);
    expect(el.className).toMatch(/w-full/);
  });

  it("renders circle variant", () => {
    render(<Skeleton variant="circle" className="h-10 w-10" />);
    const el = screen.getByRole("status");
    expect(el.className).toMatch(/rounded-full/);
  });

  it("renders rectangle variant", () => {
    render(<Skeleton variant="rectangle" className="h-32 w-48" />);
    const el = screen.getByRole("status");
    expect(el).toBeInTheDocument();
  });

  it("merges className", () => {
    render(<Skeleton className="custom-class w-64" />);
    const el = screen.getByRole("status");
    expect(el.className).toContain("custom-class");
    expect(el.className).toContain("w-64");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Skeleton ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("has pulse animation class", () => {
    render(<Skeleton />);
    expect(screen.getByRole("status").className).toMatch(/animate-pulse/);
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Skeleton variant="rectangle" className="h-20 w-40" />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});

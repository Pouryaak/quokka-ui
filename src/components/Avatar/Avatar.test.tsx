import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import { Avatar } from "./Avatar";
import React from "react";

describe("Avatar", () => {
  it("renders fallback text", () => {
    render(<Avatar fallback="John Doe" />);
    expect(screen.getByText("JO")).toBeInTheDocument();
  });

  it("renders fallback when no image loads", () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User" fallback="JD" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("applies size variant", () => {
    render(<Avatar size="xl" fallback="XL" />);
    const avatar = screen.getByText("XL").closest('[class*="h-16"]');
    expect(avatar).toBeTruthy();
  });

  it("applies circle variant by default", () => {
    render(<Avatar fallback="C" />);
    const avatar = screen.getByText("C").closest('[class*="rounded-full"]');
    expect(avatar).toBeTruthy();
  });

  it("applies rounded variant", () => {
    render(<Avatar variant="rounded" fallback="R" />);
    const avatar = screen.getByText("R").closest('[class*="rounded-md"]');
    expect(avatar).toBeTruthy();
  });

  it("merges className", () => {
    render(<Avatar fallback="M" className="custom-avatar" />);
    const avatar = screen.getByText("M").closest('[class*="custom-avatar"]');
    expect(avatar).toBeTruthy();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Avatar fallback="OK" />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});

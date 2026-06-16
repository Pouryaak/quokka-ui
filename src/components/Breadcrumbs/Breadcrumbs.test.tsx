import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import { Breadcrumbs, BreadcrumbItem } from "./Breadcrumbs";
import React from "react";

describe("Breadcrumbs", () => {
  it("renders breadcrumb navigation", () => {
    render(
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/products">Products</BreadcrumbItem>
        <span>Current</span>
      </Breadcrumbs>
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
  });

  it("sets aria-current on last item", () => {
    render(
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/page">Page</BreadcrumbItem>
      </Breadcrumbs>
    );
    const lastLink = screen.getByText("Page");
    expect(lastLink).toHaveAttribute("aria-current", "page");
  });

  it("renders links with href", () => {
    render(
      <Breadcrumbs>
        <BreadcrumbItem href="/test">Test</BreadcrumbItem>
      </Breadcrumbs>
    );
    const link = screen.getByRole("link", { name: "Test" });
    expect(link).toHaveAttribute("href", "/test");
  });

  it("merges className on items", () => {
    render(
      <Breadcrumbs>
        <BreadcrumbItem href="/" className="custom-class">
          Home
        </BreadcrumbItem>
      </Breadcrumbs>
    );
    expect(screen.getByText("Home").className).toContain("custom-class");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/page">Page</BreadcrumbItem>
      </Breadcrumbs>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});

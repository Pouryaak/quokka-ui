import { describe, it, expect } from "vitest";
import { Card } from "./Card";
import { render, screen } from "../../../tests/test-uilts";
import React from "react";

describe("Card", () => {
  describe("Rendering", () => {
    it("names the landmark when title is provided", () => {
      render(<Card title="Profile">Content</Card>);
      const region = screen.getByRole("region", { name: "Profile" });
      expect(region).toBeInTheDocument();
    });

    it("renders as the chosen semantic element", () => {
      const { container } = render(<Card as="article">A</Card>);
      expect(container.firstElementChild?.tagName).toBe("ARTICLE");
    });

    it("renders as div when specified", () => {
      const { container } = render(<Card as="div">Content</Card>);
      expect(container.firstElementChild?.tagName).toBe("DIV");
    });

    it("renders children correctly", () => {
      render(
        <Card>
          <div data-testid="child">Test content</div>
        </Card>
      );
      expect(screen.getByTestId("child")).toBeInTheDocument();
      expect(screen.getByText("Test content")).toBeInTheDocument();
    });

    it("merges classes and applies elevated variant", () => {
      const { container } = render(
        <Card elevated className="custom">
          X
        </Card>
      );
      const el = container.firstElementChild!;
      expect(el.className).toMatch(/shadow-md/);
      expect(el.className).toMatch(/hover:shadow-lg/);
      expect(el.className).toMatch(/custom/);
    });

    it("does not set aria-label when title is empty/undefined", () => {
      const { container, rerender } = render(<Card title="">X</Card>);
      let el = container.firstElementChild!;
      expect(el.hasAttribute("aria-label")).toBe(false);

      rerender(<Card>X</Card>);
      el = container.firstElementChild!;
      expect(el.hasAttribute("aria-label")).toBe(false);
    });

    it("renders header content", () => {
      render(
        <Card>
          <Card.Header>Header Title</Card.Header>
        </Card>
      );
      expect(screen.getByText("Header Title")).toBeInTheDocument();
    });
    it("header accepts custom className", () => {
      render(
        <Card>
          <Card.Header className="custom-header">Title</Card.Header>
        </Card>
      );
      const header = screen.getByText("Title");
      expect(header.className).toMatch(/custom-header/);
    });
    it("renders body content", () => {
      render(
        <Card>
          <Card.Body>
            <p>Body content here</p>
          </Card.Body>
        </Card>
      );
      expect(screen.getByText("Body content here")).toBeInTheDocument();
    });
    it("Body accepts custom className", () => {
      render(
        <Card>
          <Card.Body className="custom-body">Content</Card.Body>
        </Card>
      );
      const body = screen.getByText("Content");
      expect(body.className).toMatch(/custom-body/);
    });
    it("forwards additional props", () => {
      render(
        <Card>
          <Card.Body data-testid="body" onClick={() => {}}>
            Content
          </Card.Body>
        </Card>
      );
      expect(screen.getByTestId("body")).toBeInTheDocument();
    });
    it("renders complete card with all subcomponents", () => {
      render(
        <Card title="Complete Card">
          <Card.Media src="https://example.com/image.jpg" alt="Cover" />
          <Card.Header>Card Title</Card.Header>
          <Card.Body>
            <p>Body content</p>
          </Card.Body>
          <Card.Footer>
            <button>Action</button>
          </Card.Footer>
        </Card>
      );

      expect(
        screen.getByRole("region", { name: "Complete Card" })
      ).toBeInTheDocument();
      expect(screen.getByRole("img", { name: "Cover" })).toBeInTheDocument();
      expect(screen.getByText("Card Title")).toBeInTheDocument();
      expect(screen.getByText("Body content")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Action" })
      ).toBeInTheDocument();
    });
    it("handles multiple children in body", () => {
      render(
        <Card>
          <Card.Body>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
            <ul>
              <li>Item 1</li>
            </ul>
          </Card.Body>
        </Card>
      );

      expect(screen.getByText("Paragraph 1")).toBeInTheDocument();
      expect(screen.getByText("Paragraph 2")).toBeInTheDocument();
      expect(screen.getByText("Item 1")).toBeInTheDocument();
    });
  });

  describe("Variants & Styling", () => {
    it("applies base card styles", () => {
      const { container } = render(<Card>Content</Card>);
      const el = container.firstElementChild!;
      expect(el.className).toMatch(/rounded-xl/);
      expect(el.className).toMatch(/bg-surface/);
      expect(el.className).toMatch(/border/);
      expect(el.className).toMatch(/shadow-sm/);
      expect(el.className).toMatch(/p-5/);
    });

    it("merges classes and applies elevated variant", () => {
      const { container } = render(
        <Card elevated className="custom">
          X
        </Card>
      );
      const el = container.firstElementChild!;
      expect(el.className).toMatch(/shadow-md/);
      expect(el.className).toMatch(/hover:shadow-lg/);
      expect(el.className).toMatch(/custom/);
    });

    it("does not apply elevated styles by default", () => {
      const { container } = render(<Card>Content</Card>);
      const el = container.firstElementChild!;
      expect(el.className).not.toMatch(/shadow-md/);
      expect(el.className).not.toMatch(/hover:shadow-lg/);
    });

    it("allows className to override default styles via tailwind-merge", () => {
      const { container } = render(<Card className="p-0 rounded-none">X</Card>);
      const el = container.firstElementChild!;
      expect(el.className).toMatch(/p-0/);
      expect(el.className).toMatch(/rounded-none/);
      expect(el.className).not.toMatch(/p-5/);
      expect(el.className).not.toMatch(/rounded-xl/);
    });

    it("combines elevated with custom className", () => {
      const { container } = render(
        <Card elevated className="bg-red-500">
          X
        </Card>
      );
      const el = container.firstElementChild!;
      expect(el.className).toMatch(/shadow-md/);
      expect(el.className).toMatch(/bg-red-500/);
    });
  });
});

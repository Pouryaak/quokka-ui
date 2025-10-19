import { describe, it, expect } from "vitest";
import { axe } from "vitest-axe";
import { Modal } from "./Modal";
import { render, screen, user } from "../../../tests/test-uilts";
import React from "react";

function DemoModal({
  dismissible = true,
  size = "md",
  scrollBehavior = "inside",
}: {
  dismissible?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  scrollBehavior?: "inside" | "outside";
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open modal</button>
      <Modal
        open={open}
        onOpenChange={setOpen}
        dismissible={dismissible}
        size={size}
        scrollBehavior={scrollBehavior}
      >
        <Modal.Title>Project settings</Modal.Title>
        <Modal.Description>
          Manage project configuration and access.
        </Modal.Description>
        <Modal.Body>
          <p>Body content</p>
          <div style={{ height: 800 }} />
        </Modal.Body>
        <Modal.Actions>
          <Modal.Close>Close</Modal.Close>
          <button onClick={() => setOpen(false)}>Save</button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

describe("Modal", () => {
  it("opens via external button and is labelled/described", async () => {
    const u = user();
    render(<DemoModal />);
    await u.click(screen.getByRole("button", { name: "Open modal" }));

    const dialog = await screen.findByRole("dialog");
    expect(dialog).toHaveAccessibleName("Project settings");
    expect(
      screen.getByText("Manage project configuration and access.")
    ).toBeInTheDocument();
  });

  it("Close button closes the modal", async () => {
    const u = user();
    render(<DemoModal />);
    await u.click(screen.getByRole("button", { name: "Open modal" }));
    await u.click(await screen.findByRole("button", { name: "Close" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("Escape closes when dismissible=true", async () => {
    const u = user();
    render(<DemoModal dismissible />);
    await u.click(screen.getByRole("button", { name: "Open modal" }));
    await screen.findByRole("dialog");
    await u.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("Escape is blocked when dismissible=false", async () => {
    const u = user();
    render(<DemoModal dismissible={false} />);
    await u.click(screen.getByRole("button", { name: "Open modal" }));
    const dialog = await screen.findByRole("dialog");
    await u.keyboard("{Escape}");
    expect(dialog).toBeInTheDocument();
  });

  it("size applies expected container classes (xl)", async () => {
    const u = user();
    render(<DemoModal size="xl" />);
    await u.click(screen.getByRole("button", { name: "Open modal" }));
    const dialog = await screen.findByRole("dialog");
    expect((dialog as HTMLElement).className).toMatch(/max-w-\[64rem\]/);
  });

  it("scrollBehavior flag is wired (inside)", async () => {
    const u = user();
    render(<DemoModal scrollBehavior="inside" />);
    await u.click(screen.getByRole("button", { name: "Open modal" }));
    const wrapper = (await screen.findByRole("dialog")).querySelector(
      "[data-scroll='inside']"
    );
    expect(wrapper).toBeTruthy();
  });

  it("has no obvious a11y violations (ignore React useId colon rule)", async () => {
    const { container } = render(
      <>
        <Modal open onOpenChange={() => {}}>
          <Modal.Title>Title</Modal.Title>
          <Modal.Description>Desc</Modal.Description>
          <Modal.Body>Body</Modal.Body>
          <Modal.Actions>
            <Modal.Close>Close</Modal.Close>
            <button>Save</button>
          </Modal.Actions>
        </Modal>
      </>
    );
    const results = await axe(container, {
      rules: { "aria-valid-attr-value": { enabled: false } },
    });
    expect(results.violations).toHaveLength(0);
  });
});

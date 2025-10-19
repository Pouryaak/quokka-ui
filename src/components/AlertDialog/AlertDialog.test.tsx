import { describe, it, expect, vi } from "vitest";
import { AlertDialog } from "./AlertDialog";
import React from "react";
import { render, screen, user } from "../../../tests/test-uilts";

export function DemoAlertDialog({
  variant = "danger",
  onAction,
}: {
  variant?: "danger" | "neutral";
  onAction?: () => void;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Delete</button>
      <AlertDialog variant={variant} open={open} onOpenChange={setOpen}>
        <AlertDialog.Title>Delete file</AlertDialog.Title>
        <AlertDialog.Description>
          This cannot be undone.
        </AlertDialog.Description>
        <AlertDialog.Actions>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action onClick={onAction}>Confirm</AlertDialog.Action>
        </AlertDialog.Actions>
      </AlertDialog>
    </>
  );
}

describe("AlertDialog", () => {
  it("opens via external button and is labelled/described", async () => {
    const u = user();
    render(<DemoAlertDialog />);

    await u.click(screen.getByRole("button", { name: "Delete" }));

    const dialog = await screen.findByRole("alertdialog");
    expect(dialog).toHaveAccessibleName("Delete file");
    expect(screen.getByText("This cannot be undone.")).toBeInTheDocument();
  });

  it("Cancel closes and returns focus to the external opener", async () => {
    const u = user();
    render(<DemoAlertDialog />);

    const opener = screen.getByRole("button", { name: "Delete" });
    await u.click(opener);

    await u.click(await screen.findByRole("button", { name: "Cancel" }));
    expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();
  });

  it("Action calls handler and closes", async () => {
    const u = user();
    const onAction = vi.fn();
    render(<DemoAlertDialog onAction={onAction} />);

    await u.click(screen.getByRole("button", { name: "Delete" }));
    await u.click(await screen.findByRole("button", { name: "Confirm" }));

    expect(onAction).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();
  });

  it("Escape closes the dialog", async () => {
    const u = user();
    render(<DemoAlertDialog />);

    await u.click(screen.getByRole("button", { name: "Delete" }));
    await screen.findByRole("alertdialog");

    await u.keyboard("{Escape}");

    expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();
  });

  it("Action tone: inherits from variant and can be overridden", async () => {
    const u = user();
    const { rerender } = render(<DemoAlertDialog variant="neutral" />);

    await u.click(screen.getByRole("button", { name: "Delete" }));
    let confirm = await screen.findByRole("button", { name: "Confirm" });
    expect(confirm.className).toMatch(/bg-\[var\(--color-surface-muted\)\]/);

    await u.click(screen.getByRole("button", { name: "Cancel" }));

    rerender(
      <>
        <button onClick={() => {}}>Delete</button>
        <AlertDialog variant="neutral" open onOpenChange={() => {}}>
          <AlertDialog.Title>Delete file</AlertDialog.Title>
          <AlertDialog.Description>
            This cannot be undone.
          </AlertDialog.Description>
          <AlertDialog.Actions>
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
            <AlertDialog.Action tone="danger">Confirm</AlertDialog.Action>
          </AlertDialog.Actions>
        </AlertDialog>
      </>
    );

    confirm = await screen.findByRole("button", { name: "Confirm" });
    expect(confirm.className).toMatch(/bg-\[var\(--color-danger\)\]/);
  });
});

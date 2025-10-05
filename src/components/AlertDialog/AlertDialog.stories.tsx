import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { AlertDialog } from "./AlertDialog";

const meta: Meta<typeof AlertDialog> = {
  title: "Overlay/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "### Purpose",
          "Use `AlertDialog` when the user must **explicitly confirm or cancel** a high-impact action.",
          "",
          "### A11y contract (WCAG 2.2 AA)",
          "- **Labeling**: Provide `<AlertDialog.Title />` and `<AlertDialog.Description />` so screen readers announce context.",
          "- **Keyboard**: Tab/Shift+Tab cycles inside; **Enter** activates focused action; **Esc** cancels by default.",
          "- **Focus**: Lands on the **primary action** (confirm) or first interactive element; returns to the trigger on close.",
          "",
          "### Tone",
          '- `variant="danger"` → destructive intent (e.g., Delete). Primary action is styled **red** via your danger tokens.',
          '- `variant="neutral"` → non-destructive (e.g., Archive, Sign out).',
          "",
          "### Dos & Don'ts",
          "- **Do**: Keep copy short; name the object; state consequences (irreversible, data loss).",
          "- **Do**: Make the primary action label verb-first (Delete, Archive).",
          "- **Don't**: Add unrelated fields or complex forms; use a full **Modal** for that.",
        ].join("\n"),
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "inline-radio" },
      options: ["danger", "neutral"],
      description: "Visual tone for the primary action.",
      table: { defaultValue: { summary: "danger" } },
    },
    open: {
      control: false,
      description: "Controlled open state (stories manage it).",
    },
    onOpenChange: { control: false },
  },
  args: { variant: "danger" },
};
export default meta;

const PrimaryBtn = (p: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...p}
    className={
      "rounded-[var(--radius-md)] px-4 py-2 font-[var(--font-weight-medium)] text-white " +
      "bg-[var(--color-brand)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]"
    }
  />
);
const GhostBtn = (p: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...p}
    className={
      "rounded-[var(--radius-md)] px-3 py-2 border border-[var(--color-border)] " +
      "bg-[var(--color-surface)] hover:bg-[var(--color-surface-muted)] " +
      "focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]"
    }
  />
);

function ControlledDemo({
  buttonTitle = "Open Alert",
  variant = "danger",
  title,
  description,
  actionLabel,
  cancelLabel = "Cancel",
  actionTone,
}: {
  buttonTitle?: string;
  variant?: "danger" | "neutral";
  title: string;
  description: string;
  actionLabel: string;
  cancelLabel?: string;
  actionTone?: "danger" | "neutral";
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex flex-col items-center gap-4">
      <PrimaryBtn onClick={() => setOpen(true)}>{buttonTitle}</PrimaryBtn>

      <AlertDialog open={open} onOpenChange={setOpen} variant={variant}>
        <AlertDialog.Title className="px-[var(--spacing-5)] pt-[var(--spacing-5)] text-[var(--font-size-xl)] font-[var(--font-weight-bold)]">
          {title}
        </AlertDialog.Title>
        <AlertDialog.Description className="px-[var(--spacing-5)] pt-[var(--spacing-2)] text-[var(--font-size-sm)] text-[var(--color-text-muted)]">
          {description}
        </AlertDialog.Description>

        <AlertDialog.Actions>
          <AlertDialog.Cancel asChild>
            <GhostBtn>{cancelLabel}</GhostBtn>
          </AlertDialog.Cancel>
          <AlertDialog.Action autoFocus tone={actionTone}>
            {actionLabel}
          </AlertDialog.Action>
        </AlertDialog.Actions>
      </AlertDialog>
    </div>
  );
}

export const Destructive: StoryObj<typeof AlertDialog> = {
  name: "Destructive (danger)",
  render: (args) => (
    <ControlledDemo
      buttonTitle="Delete"
      title="Delete “QK-21”?"
      description="This permanently removes all files and settings. You can’t undo this action."
      actionLabel="Delete"
      {...args}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Use `danger` for irreversible actions. The primary button uses your danger tokens; initial focus lands there so Enter confirms.",
      },
    },
  },
};

export const Neutral: StoryObj<typeof AlertDialog> = {
  render: (args) => (
    <ControlledDemo
      variant="neutral"
      title="Archive item?"
      description="You can restore it later from Settings → Archive."
      actionLabel="Archive"
      actionTone="neutral"
      {...args}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Neutral tone for reversible or low-risk operations (Archive/Move/Sign out).",
      },
    },
  },
};

export const WithLongContent: StoryObj<typeof AlertDialog> = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    const Body = (
      <div className="px-[var(--spacing-5)] py-[var(--spacing-4)] space-y-3 max-h-[45vh] overflow-y-auto [scrollbar-gutter:stable]">
        {Array.from({ length: 12 }, (_, i) => (
          <p
            key={i}
            className="text-[var(--font-size-sm)] text-[var(--color-text-muted)]"
          >
            • Consequence {i + 1}: Detailed implication to review before
            confirming.
          </p>
        ))}
      </div>
    );

    return (
      <div className="flex flex-col items-center gap-4">
        <GhostBtn onClick={() => setOpen(true)}>
          Open with long content
        </GhostBtn>

        <AlertDialog open={open} onOpenChange={setOpen} variant="danger">
          <AlertDialog.Title className="px-[var(--spacing-5)] pt-[var(--spacing-5)] text-[var(--font-size-xl)] font-[var(--font-weight-bold)]">
            Remove organization?
          </AlertDialog.Title>

          <AlertDialog.Description className="px-[var(--spacing-5)] pt-[var(--spacing-2)] text-[var(--font-size-sm)] text-[var(--color-text-muted)]">
            Review the implications below before confirming.
          </AlertDialog.Description>

          {Body}

          <AlertDialog.Actions>
            <AlertDialog.Cancel asChild>
              <GhostBtn>Cancel</GhostBtn>
            </AlertDialog.Cancel>
            <AlertDialog.Action autoFocus>Remove</AlertDialog.Action>
          </AlertDialog.Actions>
        </AlertDialog>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "For lengthy explanations, constrain the content height to ~45vh and allow internal scroll so the decision buttons remain reachable.",
      },
    },
  },
};

export const FancyTrigger: StoryObj<typeof AlertDialog> = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={() => setOpen(true)}
          className="group relative overflow-hidden rounded-[var(--radius-md)] px-5 py-2 font-[var(--font-weight-medium)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]"
        >
          <span className="absolute inset-0 feature-glow opacity-60 group-hover:opacity-80 transition-opacity" />
          <span className="relative">Fancy trigger ✨</span>
        </button>

        <AlertDialog open={open} onOpenChange={setOpen} variant="danger">
          <AlertDialog.Title className="px-[var(--spacing-5)] pt-[var(--spacing-5)] text-[var(--font-size-xl)] font-[var(--font-weight-bold)]">
            Nuke workspace?
          </AlertDialog.Title>
          <AlertDialog.Description className="px-[var(--spacing-5)] pt-[var(--spacing-2)] text-[var(--font-size-sm)] text-[var(--color-text-muted)]">
            Export your data first — this action is permanent.
          </AlertDialog.Description>

          <AlertDialog.Actions>
            <AlertDialog.Cancel asChild>
              <GhostBtn>I’ll export first</GhostBtn>
            </AlertDialog.Cancel>
            <AlertDialog.Action autoFocus>Do it</AlertDialog.Action>
          </AlertDialog.Actions>
        </AlertDialog>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "`asChild` lets you use any custom button as the trigger without losing accessibility or behavior.",
      },
    },
  },
};

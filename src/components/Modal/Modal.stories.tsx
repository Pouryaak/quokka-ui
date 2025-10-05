import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Overlay/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "A general-purpose modal built on robust overlay primitives.",
          "",
          "## When to use",
          "- Short forms, wizards, or task flows that don’t justify a new page.",
          "- Rich previews or settings where context is helpful.",
          "",
          "## A11y contract (WCAG 2.2 AA)",
          "- **Keyboard**: Tab/Shift+Tab cycles within; **Esc** dismisses when `dismissible`.",
          "- **Focus**: Moves to the first focusable on open; **returns to trigger** on close.",
          "- **Labelling**: Provide `<Modal.Title />` and optional `<Modal.Description />`.",
          "- **Motion**: Respects `prefers-reduced-motion`.",
          "",
          "## Scrolling strategy",
          "- `inside`: Content pane scrolls; actions stay **sticky**. Best for long text.",
          "- `outside`: No inner scroll area; body is locked. Best for short content.",
        ].join("\n"),
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "inline-radio" },
      options: ["sm", "md", "lg", "xl", "full"],
      description:
        "Modal size breakpoint (lg/xl auto full-screen on small viewports).",
      table: { defaultValue: { summary: "md" } },
    },
    dismissible: {
      control: "boolean",
      description: "Esc & outside click dismiss",
      table: { defaultValue: { summary: "true" } },
    },
    scrollBehavior: {
      control: { type: "inline-radio" },
      options: ["inside", "outside"],
      description:
        "Where scrolling occurs. `inside` keeps actions sticky; `outside` locks page scroll.",
      table: { defaultValue: { summary: "inside" } },
    },
    open: {
      control: false,
      description:
        "Controlled open state. Stories here manage it to keep triggers visible.",
    },
    onOpenChange: { control: false },
  },
  args: {
    size: "md",
    dismissible: true,
    scrollBehavior: "inside",
  },
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

function ControlledModal({
  title,
  description,
  size = "md",
  dismissible = true,
  scrollBehavior = "inside",
  children,
  showCloseIcon = true,
}: {
  title: string;
  description?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  dismissible?: boolean;
  scrollBehavior?: "inside" | "outside";
  children?: React.ReactNode;
  showCloseIcon?: boolean;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex flex-col items-center gap-4">
      <PrimaryBtn onClick={() => setOpen(true)}>Open modal</PrimaryBtn>

      <Modal
        open={open}
        onOpenChange={setOpen}
        size={size}
        dismissible={dismissible}
        scrollBehavior={scrollBehavior}
      >
        <Modal.Title>{title}</Modal.Title>
        {description ? (
          <Modal.Description>{description}</Modal.Description>
        ) : null}

        <Modal.Body>{children}</Modal.Body>

        <Modal.Actions>
          <GhostBtn onClick={() => setOpen(false)}>Cancel</GhostBtn>
          <PrimaryBtn onClick={() => setOpen(false)}>Continue</PrimaryBtn>
        </Modal.Actions>

        {showCloseIcon && <Modal.Close aria-label="Close">✕</Modal.Close>}
      </Modal>
    </div>
  );
}

export const Default: StoryObj<typeof Modal> = {
  name: "Default (md, inside, dismissible)",
  render: (args) => (
    <ControlledModal
      title="Invite collaborators"
      description="Share access with your team. You can change permissions later."
      {...args}
      size={args.size ?? "md"}
    >
      <div className="space-y-3">
        <label className="block">
          <span className="text-[var(--color-text-muted)] text-[var(--font-size-sm)]">
            Email
          </span>
          <input
            className="mt-1 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--color-brand)]"
            placeholder="name@company.com"
          />
        </label>
        <label className="block">
          <span className="text-[var(--color-text-muted)] text-[var(--font-size-sm)]">
            Role
          </span>
          <select className="mt-1 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--color-brand)]">
            <option>Viewer</option>
            <option>Editor</option>
            <option>Admin</option>
          </select>
        </label>
      </div>
    </ControlledModal>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Shows the recommended labeling pattern (Title + optional Description) and a short form. " +
          "Esc/outside dismiss are enabled (`dismissible`).",
      },
    },
  },
};

export const Sizes: StoryObj<typeof Modal> = {
  render: () => {
    const Example = ({
      size,
      label,
    }: {
      size: "sm" | "md" | "lg" | "xl" | "full";
      label: string;
    }) => {
      const [open, setOpen] = React.useState(false);
      return (
        <div className="flex flex-col items-center gap-2">
          <GhostBtn onClick={() => setOpen(true)}>{label}</GhostBtn>
          <Modal open={open} onOpenChange={setOpen} size={size}>
            <Modal.Title>{label} modal</Modal.Title>
            <Modal.Body>
              <p className="text-[var(--color-text-muted)]">
                Try resizing the viewport. `lg` and `xl` become full-screen on
                small screens.
              </p>
              <div className="h-40" />
            </Modal.Body>
            <Modal.Actions>
              <GhostBtn onClick={() => setOpen(false)}>Close</GhostBtn>
            </Modal.Actions>
            <Modal.Close aria-label="Close">✕</Modal.Close>
          </Modal>
        </div>
      );
    };

    return (
      <div className="grid grid-cols-2 gap-6">
        <Example size="sm" label="Open sm" />
        <Example size="md" label="Open md" />
        <Example size="lg" label="Open lg" />
        <Example size="xl" label="Open xl" />
        <Example size="full" label="Open full" />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Validate how your content reflows across size variants. On mobile, `lg` and `xl` transition to a full-screen presentation.",
      },
    },
  },
};

export const ScrollInsideVsOutside: StoryObj<typeof Modal> = {
  render: () => {
    const InsideContent = (
      <div className="space-y-3 max-h-[45vh] overflow-y-auto [scrollbar-gutter:stable]">
        {Array.from({ length: 16 }, (_, i) => (
          <p
            key={i}
            className="text-[var(--font-size-sm)] text-[var(--color-text-muted)]"
          >
            Clause {i + 1}. This line demonstrates <strong>inside</strong>{" "}
            scroll with sticky actions.
          </p>
        ))}
      </div>
    );

    const OutsideContent = (
      <div className="space-y-3">
        <p className="text-[var(--color-text-muted)]">
          With <code>outside</code>, page scroll is locked while the modal is
          open. Use this when content is short and doesn’t need its own scroll
          area.
        </p>
        <div className="h-40" />
      </div>
    );

    return (
      <div className="grid w-full max-w-[70rem] grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] p-4">
          <h3 className="mb-2 text-[var(--font-size-lg)] font-[var(--font-weight-bold)]">
            Inside scroll (sticky actions)
          </h3>
          <p className="mb-4 text-[var(--font-size-sm)] text-[var(--color-text-muted)]">
            Content scrolls in an inner area; action bar stays visible.
          </p>
          <ControlledModal
            title="Terms & Conditions"
            description="Scroll the content; actions stay visible."
            size="lg"
            scrollBehavior="inside"
          >
            {InsideContent}
          </ControlledModal>
        </div>

        <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] p-4">
          <h3 className="mb-2 text-[var(--font-size-lg)] font-[var(--font-weight-bold)]">
            Outside scroll (page locked)
          </h3>
          <p className="mb-4 text-[var(--font-size-sm)] text-[var(--color-text-muted)]">
            No inner scroller; body is locked while open.
          </p>
          <ControlledModal
            title="Review summary"
            description="Modal content fits; page scroll is locked."
            size="md"
            scrollBehavior="outside"
          >
            {OutsideContent}
          </ControlledModal>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Choose `inside` for long reading/wizard flows; choose `outside` for shorter interactions with fewer elements.",
      },
    },
  },
};

export const NonDismissible: StoryObj<typeof Modal> = {
  name: "Non-dismissible (Esc/outside disabled)",
  render: () => (
    <ControlledModal
      title="Complete required fields"
      description="Finish the form or click Continue."
      dismissible={false}
      size="sm"
    >
      <p className="text-[var(--color-text-muted)]">
        This modal can’t be closed with Esc or by clicking outside. Use for
        critical flows that require an explicit choice.
      </p>
    </ControlledModal>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Non-dismissible modals should be rare. Always give a clear primary action, and ensure there’s a safe escape like **Cancel**.",
      },
    },
  },
};

export const MobileFullscreen: StoryObj<typeof Modal> = {
  name: "Mobile → full-screen behavior",
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    docs: {
      description: {
        story:
          "Resize the viewport: `lg`/`xl` adapt to a full-screen drawer-like presentation for better ergonomics on mobile.",
      },
    },
  },
  render: () => (
    <ControlledModal
      title="Mobile full-screen"
      description="On small screens, lg/xl expand to full-screen."
      size="xl"
    >
      <div className="space-y-3">
        <p className="text-[var(--color-text-muted)]">
          Keep actions accessible and consider larger touch targets on mobile.
        </p>
        <div className="h-40" />
      </div>
    </ControlledModal>
  ),
};

export const WithCloseIcon: StoryObj<typeof Modal> = {
  name: "With close icon (top-right)",
  render: () => (
    <ControlledModal
      title="Quick peek"
      description="Close with the ✕ icon or actions."
      size="md"
      showCloseIcon
    >
      <div className="h-32" />
    </ControlledModal>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Good for passive previews. For task flows, rely on explicit actions (Continue/Cancel) to prevent accidental loss.",
      },
    },
  },
};

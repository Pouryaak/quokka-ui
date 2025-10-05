// File: Toast.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { ToastProvider, ToastViewport, Toaster, toast } from "./Toast";

const ProviderShell: React.FC<
  React.PropsWithChildren<{
    position: NonNullable<Parameters<typeof ToastProvider>[0]["position"]>;
    duration: number;
    maxVisible: number;
    zIndex: number;
    pauseOnHover: boolean;
    pauseOnFocusWithin: boolean;
    swipeToDismiss: boolean;
  }>
> = ({ children, ...cfg }) => {
  return (
    <ToastProvider {...cfg}>
      <div className="relative">{children}</div>
      <Toaster />
      <ToastViewport />
    </ToastProvider>
  );
};

const meta = {
  title: "Feedback/Toast",
  component: ProviderShell,
  subcomponents: {
    ToastProvider,
    ToastViewport,
    Toaster,
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Global, non-blocking notifications with queueing, variants, live-region a11y, pause-on-hover/focus, and swipe-to-dismiss.

### Key features
- **Queueing & maxVisible**: keep UI calm while ensuring messages are delivered in order.
- **Variants**: \`success | info | warning | danger\` with inline iconography and accent rail.
- **Programmatic API**: \`toast({...})\` returns an \`id\`; \`toast.dismiss(id?)\` for targeted or mass dismissal.
- **Accessibility**
  - Uses Radix Toast primitives.
  - Live region via Radix provider (labelled "Notifications").
  - Keyboard support: \`Esc\` closes focused toast; focus states are visible.
- **User controls**
  - \`pauseOnHover\`, \`pauseOnFocusWithin\`.
  - \`swipeToDismiss\` gestures (via Radix).
- **Theming**
  - Relies on CSS variables (e.g., \`--color-*\`, \`--toast-*\`) for easy theming.
- **Performance**
  - Minimal re-renders; bounded \`maxVisible\`; simple DOM.
      `.trim(),
      },
    },
  },
  decorators: [
    (Story, ctx) => (
      <ProviderShell
        position={ctx.args.position}
        duration={ctx.args.duration}
        maxVisible={ctx.args.maxVisible}
        zIndex={ctx.args.zIndex}
        pauseOnHover={ctx.args.pauseOnHover}
        pauseOnFocusWithin={ctx.args.pauseOnFocusWithin}
        swipeToDismiss={ctx.args.swipeToDismiss}
      >
        <Story />
      </ProviderShell>
    ),
  ],
  argTypes: {
    position: {
      control: { type: "select" },
      options: ["top-right", "top-left", "bottom-right", "bottom-left"],
      description:
        "Screen corner for the viewport. Affects slide direction and stacking.",
      table: { category: "Provider" },
    },
    duration: {
      control: { type: "number", min: 1000, step: 500 },
      description:
        "Default auto-dismiss in ms for each toast (overridable per item).",
      table: { category: "Provider" },
    },
    maxVisible: {
      control: { type: "number", min: 1, step: 1 },
      description:
        "Maximum number of toasts shown concurrently; the rest are queued.",
      table: { category: "Provider" },
    },
    zIndex: {
      control: { type: "number", min: 0, step: 1 },
      description: "z-index for the toast viewport container.",
      table: { category: "Provider" },
    },
    pauseOnHover: {
      control: "boolean",
      description: "Pause timers while hovering any toast.",
      table: { category: "Provider" },
    },
    pauseOnFocusWithin: {
      control: "boolean",
      description: "Pause timers while a toast contains focus.",
      table: { category: "Provider" },
    },
    swipeToDismiss: {
      control: "boolean",
      description:
        "Enable swipe gestures to dismiss (platform and Radix dependent).",
      table: { category: "Provider" },
    },
  },
  args: {
    position: "top-right",
    duration: 5000,
    maxVisible: 3,
    zIndex: 1050,
    pauseOnHover: true,
    pauseOnFocusWithin: true,
    swipeToDismiss: true,
  },
} satisfies Meta<typeof ProviderShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Usage: Story = {
  render: () => (
    <div className="flex gap-3">
      <button
        className="rounded-[var(--radius-md)] bg-[var(--color-brand)] px-4 py-2 text-white"
        onClick={() =>
          toast({
            title: "Saved",
            description: "Your changes have been saved.",
            variant: "success",
          })
        }
      >
        Show success
      </button>
      <button
        className="rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-2"
        onClick={() =>
          toast({
            title: "Heads up",
            description: "We’ll deploy changes in 5 minutes.",
            variant: "info",
          })
        }
      >
        Show info
      </button>
    </div>
  ),
  name: "Usage (Basics)",
  parameters: {
    docs: {
      description: {
        story:
          "Minimal setup: wrap your app once with `ToastProvider`, render `<Toaster />` near the root, then call `toast(...)` anywhere.",
      },
      source: {
        code: `
import { ToastProvider, Toaster, toast } from "@poak-dev/quokka-ui/Toast";

function AppRoot() {
  return (
    <ToastProvider position="top-right" duration={5000} maxVisible={3} zIndex={1050}>
      <App />
      <Toaster />
    </ToastProvider>
  );
}

// Anywhere in your app:
toast({
  title: "Saved",
  description: "Your changes have been saved.",
  variant: "success",
});
        `.trim(),
        language: "tsx",
      },
    },
  },
};

export const API: Story = {
  render: () => <div />,
  name: "How to use the API",
  parameters: {
    docs: {
      description: {
        story: `
### Programmatic API
\`\`\`ts
import { toast } from "@poak-dev/quokka-ui/Toast";

// Create
const id = toast({
  title: "Saved",
  description: "Your changes have been saved.",
  variant: "success",        // "info" | "warning" | "danger"
  duration: 5000,            // override provider default
  icon: null,                // hide icon, or provide a ReactNode
  action: { label: "Undo", onClick: () => {/* ... */} },
});

// Dismiss specific / all
toast.dismiss(id);
toast.dismiss(); // dismiss all visible toasts
\`\`\`

### Using the hook
\`\`\`tsx
import { useToast } from "@poak-dev/quokka-ui/Toast";

function ClearAllButton() {
  const { clearAll } = useToast();
  return <button onClick={clearAll}>Clear all toasts</button>;
}
\`\`\`

### Theming tokens
- \`--color-success\`, \`--color-warning\`, \`--color-danger\`, \`--color-info\`
- \`--color-surface\`, \`--color-surface-muted\`, \`--color-text-muted\`, \`--color-border\`
- \`--elevation-3\`, \`--radius-md\`, \`--radius-full\`
- \`--toast-width\` (default \`360px\`), \`--toast-gap\`, \`--toast-padding\`

> **Tip:** Set these at the theme root to brand the component consistently across your app.
        `.trim(),
      },
    },
  },
};

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-3">
      <button
        className="rounded-[var(--radius-md)] bg-[var(--color-brand)] px-4 py-2 text-white"
        onClick={() => toast({ title: "Completed", variant: "success" })}
      >
        Success
      </button>
      <button
        className="rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-2"
        onClick={() => toast({ title: "Information", variant: "info" })}
      >
        Info
      </button>
      <button
        className="rounded-[var(--radius-md)] bg-[var(--color-warning)] text-black px-4 py-2"
        onClick={() => toast({ title: "Check settings", variant: "warning" })}
      >
        Warning
      </button>
      <button
        className="rounded-[var(--radius-md)] bg-[var(--color-danger)] text-white px-4 py-2"
        onClick={() => toast({ title: "Failed to save", variant: "danger" })}
      >
        Danger
      </button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Built-in variants: `success`, `info`, `warning`, `danger`. Pass `icon={null}` on a toast item to hide the icon.",
      },
    },
  },
};

export const WithActionAndDismiss: Story = {
  render: () => (
    <div className="flex gap-3">
      <button
        className="rounded-[var(--radius-md)] bg-[var(--color-brand)] px-4 py-2 text-white"
        onClick={() =>
          toast({
            title: "Item deleted",
            description: "Click Undo to restore.",
            variant: "danger",
            action: {
              label: "Undo",
              onClick: () => toast({ title: "Restored", variant: "success" }),
            },
          })
        }
      >
        Show with action (Undo)
      </button>
      <button
        className="rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-2"
        onClick={() => {
          const id = toast({
            title: "Processing…",
            description: "Will auto-dismiss",
            variant: "info",
            duration: 8000,
          });
          setTimeout(() => toast.dismiss(id), 2000);
        }}
      >
        Programmatic dismiss
      </button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Toasts can include a single primary action (e.g., **Undo**). You can also dismiss a specific toast programmatically using its `id`.",
      },
    },
  },
};

export const MaxVisibleAndQueue: Story = {
  render: () => (
    <button
      className="rounded-[var(--radius-md)] bg-[var(--color-brand)] px-4 py-2 text-white"
      onClick={() => {
        Array.from({ length: 5 }).forEach((_, i) =>
          toast({
            title: `Queued ${i + 1}`,
            description: "Max visible is 3; others will queue.",
            variant: (["success", "info", "warning", "danger"] as const)[i % 4],
            duration: 3000,
          })
        );
      }}
    >
      Fire 5 toasts
    </button>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "`maxVisible=3` keeps only three toasts on screen. New ones queue and appear as others close.",
      },
    },
  },
};

import * as React from "react";
import * as RadixAlert from "@radix-ui/react-alert-dialog";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...a: any[]) {
  return twMerge(clsx(a));
}

type Variant = "danger" | "neutral";

type Ctx = { variant: Variant };
const AlertDialogCtx = React.createContext<Ctx | null>(null);
const useAlertCtx = () => {
  const ctx = React.useContext(AlertDialogCtx);
  if (!ctx) {
    throw new Error(
      "AlertDialog subcomponents must be used within <AlertDialog>."
    );
  }
  return ctx;
};

export type AlertDialogProps = {
  variant?: Variant;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
};

const panelBase = `
  fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
  w-[90vw] max-w-[28rem]
  rounded-[var(--radius-md)]
  bg-[var(--color-surface)] text-[var(--color-text-primary)]
  shadow-[var(--elevation-3,0_20px_40px_rgba(0,0,0,.18))]
  outline-none
  data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out
`;

export const AlertDialog = ({
  variant = "danger",
  open,
  onOpenChange,
  children,
}: AlertDialogProps) => {
  const value = React.useMemo<Ctx>(() => ({ variant }), [variant]);

  return (
    <RadixAlert.Root open={open} onOpenChange={onOpenChange}>
      <RadixAlert.Portal>
        <RadixAlert.Overlay
          className={cn(
            "fixed inset-0 z-[var(--z-overlay,1000)]",
            "bg-[var(--overlay-bg,hsla(220,10%,5%,0.5))]",
            "data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out"
          )}
        />
        <RadixAlert.Content
          className={cn("z-[calc(var(--z-overlay,1000)+1)]", panelBase)}
        >
          <AlertDialogCtx.Provider value={value}>
            <div className="flex max-h-[85vh] flex-col">{children}</div>
          </AlertDialogCtx.Provider>
        </RadixAlert.Content>
      </RadixAlert.Portal>
    </RadixAlert.Root>
  );
};

AlertDialog.Trigger = RadixAlert.Trigger;

AlertDialog.Title = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof RadixAlert.Title>
>(function Title({ className, ...props }, ref) {
  return (
    <RadixAlert.Title
      ref={ref}
      className={cn(
        "px-[var(--spacing-5)] pt-[var(--spacing-5)] text-[var(--font-size-xl)] font-[var(--font-weight-bold)]",
        className
      )}
      {...props}
    />
  );
});

AlertDialog.Description = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<typeof RadixAlert.Description>
>(function Description({ className, ...props }, ref) {
  return (
    <RadixAlert.Description
      ref={ref}
      className={cn(
        "px-[var(--spacing-5)] pt-[var(--spacing-2)] text-[var(--font-size-sm)] text-[var(--color-text-muted)]",
        className
      )}
      {...props}
    />
  );
});

type ActionsProps = React.HTMLAttributes<HTMLDivElement>;
AlertDialog.Actions = React.forwardRef<HTMLDivElement, ActionsProps>(
  function Actions({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "mt-auto flex items-center justify-end gap-[var(--spacing-3)]",
          "p-[var(--spacing-5)] border-t border-[var(--color-border)]",
          "bg-[var(--color-surface)]",
          className
        )}
        {...props}
      />
    );
  }
);

AlertDialog.Cancel = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof RadixAlert.Cancel>
>(function Cancel({ className, ...props }, ref) {
  return (
    <RadixAlert.Cancel
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-[var(--radius-md)] px-[var(--spacing-4)] py-[var(--spacing-2)]",
        "font-[var(--font-weight-medium)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]",
        "bg-[var(--color-surface-muted)] hover:opacity-90 text-[var(--color-text-primary)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  );
});

type ActionProps = React.ComponentPropsWithoutRef<typeof RadixAlert.Action> & {
  tone?: Variant;
};
AlertDialog.Action = React.forwardRef<HTMLButtonElement, ActionProps>(
  function Action({ className, tone, ...props }, ref) {
    const { variant } = useAlertCtx();
    const toneToUse = tone ?? variant;

    return (
      <RadixAlert.Action
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-[var(--radius-md)] px-[var(--spacing-4)] py-[var(--spacing-2)]",
          "font-[var(--font-weight-medium)] focus:outline-none focus:ring-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          toneToUse === "danger"
            ? [
                "bg-[var(--color-danger)] hover:bg-[var(--color-danger-hover)]",
                "text-[var(--color-danger-foreground)]",
                "focus:ring-[var(--color-danger)]",
              ].join(" ")
            : [
                "bg-[var(--color-surface-muted)] hover:opacity-90",
                "text-[var(--color-text-primary)]",
                "focus:ring-[var(--color-brand)]",
              ].join(" "),
          className
        )}
        {...props}
      />
    );
  }
);

import * as React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import clsx from "clsx";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type ScrollBehavior = "inside" | "outside";

const overlayClass = `
  fixed inset-0 z-[var(--z-overlay,1000)]
  bg-[var(--overlay-bg,hsla(220,10%,5%,0.5))]
  data-[state=open]:animate-fade-in
  data-[state=closed]:animate-fade-out
`;

const contentBase = `
  fixed left-1/2 top-1/2 z-[calc(var(--z-overlay,1000)+1)]
  -translate-x-1/2 -translate-y-1/2
  bg-[var(--color-surface)] text-[var(--color-text-primary)]
  shadow-[var(--elevation-3,0_20px_40px_rgba(0,0,0,.18))]
  outline-none
  data-[state=open]:animate-zoom-in
  data-[state=closed]:animate-zoom-out
`;

const contentSizes = cva(contentBase, {
  variants: {
    size: {
      sm: "w-[90vw] max-w-[28rem] rounded-[var(--radius-md)]",
      md: "w-[90vw] max-w-[36rem] rounded-[var(--radius-md)]",
      lg: `
        w-screen h-screen rounded-none
        sm:w-[90vw] sm:max-w-[48rem] sm:h-auto sm:rounded-[var(--radius-lg)]
      `,
      xl: `
        w-screen h-screen rounded-none
        sm:w-[90vw] sm:max-w-[64rem] sm:h-auto sm:rounded-[var(--radius-lg)]
      `,
      full: "w-screen h-screen rounded-none",
    },
    scrollBehavior: {
      inside: "",
      outside: "",
    },
  },
  defaultVariants: { size: "md", scrollBehavior: "inside" },
});

function cn(...args: any[]) {
  return twMerge(clsx(args));
}

export type ModalRootProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  dismissible?: boolean; // Esc + outside click
  size?: VariantProps<typeof contentSizes>["size"];
  scrollBehavior?: ScrollBehavior;
  children?: React.ReactNode;
};

const ModalRoot = ({
  open,
  onOpenChange,
  dismissible = true,
  size = "md",
  scrollBehavior = "inside",
  children,
}: ModalRootProps) => {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={overlayClass} />
        <RadixDialog.Content
          onEscapeKeyDown={(e) => {
            if (!dismissible) e.preventDefault();
          }}
          onPointerDownOutside={(e) => {
            if (!dismissible) e.preventDefault();
          }}
          onInteractOutside={(e) => {
            if (!dismissible) e.preventDefault();
          }}
          className={contentSizes({ size, scrollBehavior })}
        >
          {/* Layout shell: header/body/actions */}
          <div
            data-scroll={scrollBehavior}
            className={cn(
              "flex max-h-[min(85vh,100%)] min-w-0 flex-col",
              size === "full" ? "h-screen" : "h-auto"
            )}
          >
            {/* Slots are provided via compound components */}
            {children}
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

const ModalTrigger = RadixDialog.Trigger;

const ModalTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Title>
>(function ModalTitle({ className, ...props }, ref) {
  return (
    <RadixDialog.Title
      ref={ref}
      className={cn(
        "px-[var(--spacing-5)] pt-[var(--spacing-5)] text-[var(--font-size-xl)] font-[var(--font-weight-bold)]",
        className
      )}
      {...props}
    />
  );
});

const ModalDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Description>
>(function ModalDescription({ className, ...props }, ref) {
  return (
    <RadixDialog.Description
      ref={ref}
      className={cn(
        "px-[var(--spacing-5)] pt-[var(--spacing-2)] text-[var(--font-size-sm)] text-[var(--color-text-muted)]",
        className
      )}
      {...props}
    />
  );
});

type ModalBodyProps = React.HTMLAttributes<HTMLDivElement>;
const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  function ModalBody({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "px-[var(--spacing-5)] py-[var(--spacing-4)]",
          // When scrollBehavior=inside, make body scroll and keep actions sticky
          "data-[scroll=inside]:overflow-y-auto data-[scroll=inside]:[scrollbar-gutter:stable]",
          className
        )}
        {...props}
      />
    );
  }
);

type ModalActionsProps = React.HTMLAttributes<HTMLDivElement>;
const ModalActions = React.forwardRef<HTMLDivElement, ModalActionsProps>(
  function ModalActions({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "mt-auto flex items-center gap-[var(--spacing-3)]",
          "p-[var(--spacing-5)] border-t border-[var(--color-border)]",
          // Sticky actions for 'inside' scroll
          "data-[scroll=inside]:sticky data-[scroll=inside]:bottom-0 data-[scroll=inside]:bg-[var(--color-surface)]"
        )}
        {...props}
      />
    );
  }
);

type ModalCloseProps = React.ComponentPropsWithoutRef<typeof RadixDialog.Close>;
const ModalClose = React.forwardRef<HTMLButtonElement, ModalCloseProps>(
  function ModalClose({ className, ...props }, ref) {
    return (
      <RadixDialog.Close
        ref={ref}
        className={cn(
          "absolute right-[var(--spacing-4)] top-[var(--spacing-4)] inline-flex items-center justify-center rounded-[var(--radius-full)] p-[var(--spacing-2)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]",
          className
        )}
        {...props}
      />
    );
  }
);

export const Modal = Object.assign(ModalRoot, {
  Trigger: ModalTrigger,
  Content: (props: React.ComponentProps<typeof ModalRoot>) => (
    <ModalRoot {...props} />
  ),
  Title: ModalTitle,
  Description: ModalDescription,
  Body: ModalBody,
  Actions: ModalActions,
  Close: ModalClose,
});

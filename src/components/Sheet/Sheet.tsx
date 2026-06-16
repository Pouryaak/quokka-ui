import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as RadixDialog from "@radix-ui/react-dialog";

const overlayStyles = cva(
  "fixed inset-0 z-50 bg-[var(--overlay-bg)] data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out"
);

const sheetContentStyles = cva(
  [
    "fixed z-50 flex flex-col bg-surface text-text-primary shadow-lg",
    "focus-visible:outline-none",
    "data-[state=open]:animate-in data-[state=closed]:animate-out",
  ].join(" "),
  {
    variants: {
      side: {
        top: [
          "inset-x-0 top-0 border-b border-border/40",
          "data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
        ].join(" "),
        bottom: [
          "inset-x-0 bottom-0 border-t border-border/40",
          "data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
        ].join(" "),
        left: [
          "inset-y-0 left-0 h-full border-r border-border/40",
          "data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
        ].join(" "),
        right: [
          "inset-y-0 right-0 h-full border-l border-border/40",
          "data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
        ].join(" "),
      },
      width: {
        sm: "",
        md: "",
        lg: "",
        xl: "",
        full: "",
      },
    },
    compoundVariants: [
      ...[("top" as const), ("bottom" as const)].flatMap((side) => [
        { side, width: "sm" as const, className: "h-1/4" },
        { side, width: "md" as const, className: "h-1/3" },
        { side, width: "lg" as const, className: "h-1/2" },
        { side, width: "xl" as const, className: "h-3/4" },
        { side, width: "full" as const, className: "h-screen" },
      ]),
      ...[("left" as const), ("right" as const)].flatMap((side) => [
        {
          side,
          width: "sm" as const,
          className: "w-[min(90vw,24rem)] max-w-sm",
        },
        {
          side,
          width: "md" as const,
          className: "w-[min(90vw,32rem)] max-w-md",
        },
        {
          side,
          width: "lg" as const,
          className: "w-[min(90vw,40rem)] max-w-lg",
        },
        {
          side,
          width: "xl" as const,
          className: "w-[min(90vw,48rem)] max-w-xl",
        },
        { side, width: "full" as const, className: "w-screen max-w-full" },
      ]),
    ],
    defaultVariants: {
      side: "right",
      width: "md",
    },
  }
);

type SheetProps = RadixDialog.DialogProps & {
  side?: VariantProps<typeof sheetContentStyles>["side"];
  width?: VariantProps<typeof sheetContentStyles>["width"];
  className?: string;
};

const SheetRoot = ({ side, width, ...props }: SheetProps) => (
  <RadixDialog.Root {...props} />
);
SheetRoot.displayName = "Sheet";

const SheetTrigger = RadixDialog.Trigger;

type SheetContentProps = React.ComponentPropsWithoutRef<
  typeof RadixDialog.Content
> &
  VariantProps<typeof sheetContentStyles> & {
    className?: string;
  };

const SheetContent = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Content>,
  SheetContentProps
>(({ className, side, width, children, ...props }, ref) => (
  <RadixDialog.Portal>
    <RadixDialog.Overlay className={overlayStyles()} />
    <RadixDialog.Content
      ref={ref}
      className={twMerge(sheetContentStyles({ side, width }), className)}
      {...props}
    >
      {children}
    </RadixDialog.Content>
  </RadixDialog.Portal>
));
SheetContent.displayName = "Sheet.Content";

type SheetCloseProps = React.ComponentPropsWithoutRef<
  typeof RadixDialog.Close
> & {
  className?: string;
};

const SheetClose = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Close>,
  SheetCloseProps
>(({ className, ...props }, ref) => (
  <RadixDialog.Close
    ref={ref}
    className={twMerge(
      "absolute right-4 top-4 rounded-sm p-1 text-text-muted hover:text-text-primary transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
      className
    )}
    {...props}
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
    <span className="sr-only">Close</span>
  </RadixDialog.Close>
));
SheetClose.displayName = "Sheet.Close";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Title>,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Title>
>(({ className, ...props }, ref) => (
  <RadixDialog.Title
    ref={ref}
    className={twMerge(
      "px-6 pt-6 text-lg font-bold text-text-primary",
      className
    )}
    {...props}
  />
));
SheetTitle.displayName = "Sheet.Title";

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Description>,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Description>
>(({ className, ...props }, ref) => (
  <RadixDialog.Description
    ref={ref}
    className={twMerge("px-6 pt-2 text-sm text-text-muted", className)}
    {...props}
  />
));
SheetDescription.displayName = "Sheet.Description";

type SheetBodyProps = React.HTMLAttributes<HTMLDivElement>;

const SheetBody = React.forwardRef<HTMLDivElement, SheetBodyProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={twMerge(
        "flex-1 overflow-y-auto px-6 py-4",
        className
      )}
      {...props}
    />
  )
);
SheetBody.displayName = "Sheet.Body";

type SheetFooterProps = React.HTMLAttributes<HTMLDivElement>;

const SheetFooter = React.forwardRef<HTMLDivElement, SheetFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={twMerge(
        "flex items-center justify-end gap-3 border-t border-border/40 px-6 py-4",
        className
      )}
      {...props}
    />
  )
);
SheetFooter.displayName = "Sheet.Footer";

export const Sheet = Object.assign(SheetRoot, {
  Trigger: SheetTrigger,
  Content: SheetContent,
  Close: SheetClose,
  Title: SheetTitle,
  Description: SheetDescription,
  Body: SheetBody,
  Footer: SheetFooter,
});

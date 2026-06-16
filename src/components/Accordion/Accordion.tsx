import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as RadixAccordion from "@radix-ui/react-accordion";

const accordionTriggerStyles = cva(
  [
    "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:text-text-primary",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
    "cursor-pointer",
    "[&[data-state=open]>svg]:rotate-180",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "text-text-primary",
        bordered: "",
        ghost: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const accordionContentStyles = cva(
  [
    "overflow-hidden text-sm text-text-muted",
    "data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "",
        bordered: "",
        ghost: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const accordionItemStyles = cva("border-border/40", {
  variants: {
    variant: {
      default: "border-b",
      bordered: "border rounded-md px-4 mb-2",
      ghost: "",
    },
  },
  defaultVariants: { variant: "default" },
});

type AccordionRootProps = React.ComponentPropsWithoutRef<
  typeof RadixAccordion.Root
> & {
  variant?: VariantProps<typeof accordionItemStyles>["variant"];
};

const AccordionRoot = ({ variant = "default", ...props }: AccordionRootProps) => (
  <RadixAccordion.Root {...props} />
);
AccordionRoot.displayName = "Accordion";

type AccordionItemProps = React.ComponentPropsWithoutRef<
  typeof RadixAccordion.Item
> & {
  variant?: VariantProps<typeof accordionItemStyles>["variant"];
  className?: string;
};

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Item>,
  AccordionItemProps
>(({ className, variant, ...props }, ref) => (
  <RadixAccordion.Item
    ref={ref}
    className={twMerge(accordionItemStyles({ variant }), className)}
    {...props}
  />
));
AccordionItem.displayName = "Accordion.Item";

type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof RadixAccordion.Trigger
> & {
  variant?: VariantProps<typeof accordionTriggerStyles>["variant"];
  className?: string;
};

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Trigger>,
  AccordionTriggerProps
>(({ className, variant, children, ...props }, ref) => (
  <RadixAccordion.Header className="flex">
    <RadixAccordion.Trigger
      ref={ref}
      className={twMerge(accordionTriggerStyles({ variant }), className)}
      {...props}
    >
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 text-text-muted transition-transform duration-200"
        aria-hidden="true"
      >
        <path
          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </RadixAccordion.Trigger>
  </RadixAccordion.Header>
));
AccordionTrigger.displayName = "Accordion.Trigger";

type AccordionContentProps = React.ComponentPropsWithoutRef<
  typeof RadixAccordion.Content
> & {
  variant?: VariantProps<typeof accordionContentStyles>["variant"];
  className?: string;
};

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Content>,
  AccordionContentProps
>(({ className, variant, children, ...props }, ref) => (
  <RadixAccordion.Content
    ref={ref}
    className={twMerge(accordionContentStyles({ variant }), className)}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </RadixAccordion.Content>
));
AccordionContent.displayName = "Accordion.Content";

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});

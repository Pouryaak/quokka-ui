import React from "react";
import { twMerge } from "tailwind-merge";
import * as RadixTabs from "@radix-ui/react-tabs";
import { cva, VariantProps } from "class-variance-authority";

const tabsTriggerStyles = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap font-medium",
    "transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
    "disabled:pointer-events-none disabled:opacity-50",
    "data-[state=inactive]:text-text-muted",
    "gap-1.5",
  ].join(" "),
  {
    variants: {
      variant: {
        pill: [
          "rounded-md",
          "data-[state=active]:bg-brand data-[state=active]:text-white data-[state=active]:shadow-sm",
          "data-[state=inactive]:bg-transparent",
        ].join(" "),
        underline: [
          "rounded-none",
          "border-b-2 border-transparent",
          "data-[state=active]:border-brand data-[state=active]:text-text-primary",
          "data-[state=inactive]:hover:text-text-primary",
        ].join(" "),
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-9 px-3 text-sm",
        lg: "h-10 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "pill",
      size: "md",
    },
  }
);

const tabsListStyles = cva(
  [
    "flex items-center gap-2",
    "overflow-x-auto overscroll-x-contain",
    "scrollbar-none",
  ].join(" "),
  {
    variants: {
      variant: {
        pill: "",
        underline: "border-b border-border/40",
      },
      align: {
        left: "justify-start",
        center: "justify-center",
        right: "justify-end",
      },
    },
    defaultVariants: {
      variant: "pill",
      align: "left",
    },
  }
);

const iconSizeByTabSize = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-4.5 w-4.5",
} as const;

type TriggerOwnProps = {
  startIcon?: React.ReactNode;

  endIcon?: React.ReactNode;
};

type TriggerProps = React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger> &
  VariantProps<typeof tabsTriggerStyles> &
  TriggerOwnProps;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Trigger>,
  TriggerProps
>(
  (
    { className, variant, size = "md", startIcon, endIcon, children, ...props },
    ref
  ) => {
    const iconCls = iconSizeByTabSize[size ?? "md"];

    return (
      <RadixTabs.Trigger
        ref={ref}
        className={twMerge(tabsTriggerStyles({ variant, size }), className)}
        {...props}
      >
        {startIcon ? (
          <span aria-hidden className={twMerge("shrink-0", iconCls)}>
            {startIcon}
          </span>
        ) : null}
        <span>{children}</span>
        {endIcon ? (
          <span aria-hidden className={twMerge("shrink-0", iconCls)}>
            {endIcon}
          </span>
        ) : null}
      </RadixTabs.Trigger>
    );
  }
);
TabsTrigger.displayName = "Tabs.Trigger";

type ListProps = React.ComponentPropsWithoutRef<typeof RadixTabs.List> &
  VariantProps<typeof tabsListStyles>;

const TabsList = React.forwardRef<
  React.ElementRef<typeof RadixTabs.List>,
  ListProps
>(({ className, variant, align, ...props }, ref) => (
  <RadixTabs.List
    ref={ref}
    className={twMerge(tabsListStyles({ variant, align }), className)}
    {...props}
  />
));
TabsList.displayName = "Tabs.List";

const TabsContent = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Content>,
  React.ComponentPropsWithoutRef<typeof RadixTabs.Content>
>(({ className, ...props }, ref) => (
  <RadixTabs.Content
    ref={ref}
    className={twMerge("mt-4 focus-visible:outline-none", className)}
    {...props}
  />
));
TabsContent.displayName = "Tabs.Content";

const TabsRoot = RadixTabs.Root;

export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});

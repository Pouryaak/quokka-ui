import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const badgeStyles = cva(
  "inline-flex items-center font-medium whitespace-nowrap select-none",
  {
    variants: {
      variant: {
        solid: "",
        outline: "border bg-transparent",
        subtle: "border-transparent",
      },
      size: {
        sm: "px-1.5 py-px text-xs rounded-sm",
        md: "px-2 py-0.5 text-xs rounded-sm",
        lg: "px-2.5 py-1 text-sm rounded-md",
      },
      intent: {
        neutral: "",
        brand: "",
        success: "",
        danger: "",
        warning: "",
        info: "",
      },
    },
    compoundVariants: [
      ...(["neutral"] as const).flatMap((intent) => [
        {
          intent,
          variant: "solid" as const,
          className: "bg-surface-muted text-text-primary",
        },
        {
          intent,
          variant: "outline" as const,
          className: "border-border text-text-muted",
        },
        {
          intent,
          variant: "subtle" as const,
          className: "bg-surface-muted text-text-muted",
        },
      ]),
      ...(["brand"] as const).flatMap((intent) => [
        {
          intent,
          variant: "solid" as const,
          className: "bg-brand text-black",
        },
        {
          intent,
          variant: "outline" as const,
          className: "border-brand/40 text-brand",
        },
        {
          intent,
          variant: "subtle" as const,
          className: "bg-brand-muted text-brand",
        },
      ]),
      ...(["success"] as const).flatMap((intent) => [
        {
          intent,
          variant: "solid" as const,
          className: "bg-success text-white",
        },
        {
          intent,
          variant: "outline" as const,
          className: "border-success/40 text-success",
        },
        {
          intent,
          variant: "subtle" as const,
          className: "bg-success-muted text-success",
        },
      ]),
      ...(["danger"] as const).flatMap((intent) => [
        {
          intent,
          variant: "solid" as const,
          className: "bg-danger text-danger-foreground",
        },
        {
          intent,
          variant: "outline" as const,
          className: "border-danger/40 text-danger",
        },
        {
          intent,
          variant: "subtle" as const,
          className: "bg-danger-muted text-danger",
        },
      ]),
      ...(["warning"] as const).flatMap((intent) => [
        {
          intent,
          variant: "solid" as const,
          className: "bg-warning text-black",
        },
        {
          intent,
          variant: "outline" as const,
          className: "border-warning/40 text-warning",
        },
        {
          intent,
          variant: "subtle" as const,
          className: "bg-warning-muted text-warning",
        },
      ]),
      ...(["info"] as const).flatMap((intent) => [
        {
          intent,
          variant: "solid" as const,
          className: "bg-info text-white",
        },
        {
          intent,
          variant: "outline" as const,
          className: "border-info/40 text-info",
        },
        {
          intent,
          variant: "subtle" as const,
          className: "bg-info-muted text-info",
        },
      ]),
    ],
    defaultVariants: {
      variant: "subtle",
      size: "md",
      intent: "neutral",
    },
  }
);

export type BadgeProps = React.ComponentPropsWithRef<"span"> &
  VariantProps<typeof badgeStyles>;

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, intent, ...props }, ref) => (
    <span
      ref={ref}
      className={twMerge(badgeStyles({ variant, size, intent }), className)}
      {...props}
    />
  )
);

Badge.displayName = "Badge";

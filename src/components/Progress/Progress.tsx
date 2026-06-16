import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as RadixProgress from "@radix-ui/react-progress";

const trackStyles = cva(
  "relative w-full overflow-hidden rounded-full bg-surface-muted",
  {
    variants: {
      size: {
        sm: "h-1.5",
        md: "h-2.5",
        lg: "h-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const indicatorStyles = cva(
  "h-full rounded-full transition-all duration-300",
  {
    variants: {
      intent: {
        brand: "bg-brand",
        success: "bg-success",
        warning: "bg-warning",
        danger: "bg-danger",
        info: "bg-info",
      },
    },
    defaultVariants: {
      intent: "brand",
    },
  }
);

export type ProgressProps = React.ComponentPropsWithoutRef<
  typeof RadixProgress.Root
> &
  VariantProps<typeof trackStyles> &
  VariantProps<typeof indicatorStyles> & {
    className?: string;
  };

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, size, intent, ...props }, ref) => (
    <RadixProgress.Root
      ref={ref}
      value={value}
      className={twMerge(trackStyles({ size }), className)}
      {...props}
    >
      <RadixProgress.Indicator
        className={indicatorStyles({ intent })}
        style={{ width: `${value ?? 0}%` }}
      />
    </RadixProgress.Root>
  )
);

Progress.displayName = "Progress";

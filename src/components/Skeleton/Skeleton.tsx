import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const skeletonStyles = cva(
  "animate-pulse rounded-sm bg-surface-muted motion-reduce:animate-none",
  {
    variants: {
      variant: {
        text: "h-4 w-full",
        circle: "rounded-full",
        rectangle: "",
      },
    },
    defaultVariants: {
      variant: "text",
    },
  }
);

export type SkeletonProps = React.ComponentPropsWithRef<"div"> &
  VariantProps<typeof skeletonStyles>;

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      role="status"
      aria-label="Loading"
      className={twMerge(skeletonStyles({ variant }), className)}
      {...props}
    >
      <span className="sr-only">Loading</span>
    </div>
  )
);

Skeleton.displayName = "Skeleton";

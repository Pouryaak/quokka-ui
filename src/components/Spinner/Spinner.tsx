import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const spinnerStyles = cva(
  "inline-flex shrink-0 items-center justify-center align-middle rounded-full border-current border-solid border-t-transparent motion-safe:animate-spin motion-reduce:animate-none",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      thickness: {
        thin: "border",
        normal: "border-2",
        thick: "border-[3px]",
      },
    },
    defaultVariants: {
      size: "md",
      thickness: "normal",
    },
  }
);

export type SpinnerProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof spinnerStyles> & {
    decorative?: boolean;
    label?: string;
  };

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  (
    {
      size,
      thickness,
      decorative = false,
      label = "Loading",
      className,
      ...rest
    },
    ref
  ) => {
    const cls = twMerge(spinnerStyles({ size, thickness }), className);

    const a11yProps = decorative
      ? { "aria-hidden": true as const }
      : {
          role: "status" as const,
          "aria-live": "polite" as const,
          "aria-label": label,
        };

    return <span ref={ref} className={cls} {...a11yProps} {...rest} />;
  }
);

Spinner.displayName = "Spinner";

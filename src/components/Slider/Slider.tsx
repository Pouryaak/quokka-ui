import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as RadixSlider from "@radix-ui/react-slider";

const thumbStyles = cva(
  "block rounded-full border-2 border-brand bg-surface shadow-sm cursor-pointer transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const trackHeights = {
  sm: "h-1.5",
  md: "h-2",
  lg: "h-2.5",
} as const;

export type SliderProps = React.ComponentPropsWithoutRef<
  typeof RadixSlider.Root
> &
  VariantProps<typeof thumbStyles> & {
    className?: string;
  };

export const Slider = React.forwardRef<HTMLSpanElement, SliderProps>(
  ({ className, size, ...props }, ref) => (
    <RadixSlider.Root
      ref={ref}
      className={twMerge(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <RadixSlider.Track
        className={`relative w-full grow overflow-hidden rounded-full bg-surface-muted ${trackHeights[size ?? "md"]}`}
      >
        <RadixSlider.Range className="absolute h-full bg-brand" />
      </RadixSlider.Track>
      <RadixSlider.Thumb className={thumbStyles({ size })} />
    </RadixSlider.Root>
  )
);

Slider.displayName = "Slider";

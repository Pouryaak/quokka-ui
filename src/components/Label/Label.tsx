import React from "react";
import * as RadixLabel from "@radix-ui/react-label";
import { twMerge } from "tailwind-merge";

export type LabelProps = React.ComponentPropsWithoutRef<
  typeof RadixLabel.Root
> & {
  required?: boolean;
};

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, required, ...props }, ref) => (
    <RadixLabel.Root
      ref={ref}
      className={twMerge(
        "text-sm font-medium text-text-primary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none",
        className
      )}
      {...props}
    >
      {children}
      {required && (
        <span aria-hidden="true" className="ml-0.5 text-danger">
          *
        </span>
      )}
    </RadixLabel.Root>
  )
);

Label.displayName = "Label";

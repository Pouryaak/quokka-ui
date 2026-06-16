import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as RadixSwitch from "@radix-ui/react-switch";

const switchRootStyles = cva(
  [
    "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent",
    "transition-colors duration-200",
    "bg-surface-muted",
    "data-[state=checked]:bg-brand",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-10",
        lg: "h-7 w-12",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const switchThumbStyles = cva(
  [
    "block rounded-full bg-white shadow-sm",
    "transition-transform duration-200",
    "data-[state=checked]:translate-x-full",
    "radix-state-unchecked:translate-x-0.5",
  ].join(" "),
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

export type SwitchProps = React.ComponentPropsWithoutRef<
  typeof RadixSwitch.Root
> &
  VariantProps<typeof switchRootStyles> & {
    label?: string;
    className?: string;
  };

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, size, label, id: idProp, ...props }, ref) => {
    const autoId = React.useId();
    const switchId = idProp ?? `switch-${autoId}`;

    const root = (
      <RadixSwitch.Root
        ref={ref}
        id={switchId}
        className={twMerge(switchRootStyles({ size }), className)}
        {...props}
      >
        <RadixSwitch.Thumb
          className={switchThumbStyles({ size })}
        />
      </RadixSwitch.Root>
    );

    if (!label) return root;

    return (
      <div className="flex items-center gap-2">
        {root}
        <label
          htmlFor={switchId}
          className="text-sm font-medium text-text-primary leading-none select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
        >
          {label}
        </label>
      </div>
    );
  }
);

Switch.displayName = "Switch";

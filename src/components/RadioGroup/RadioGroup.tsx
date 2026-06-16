import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";

const radioItemStyles = cva(
  [
    "aspect-square rounded-full border-2 shrink-0",
    "flex items-center justify-center cursor-pointer",
    "transition-colors",
    "border-border bg-surface",
    "hover:border-brand/60",
    "data-[state=checked]:border-brand data-[state=checked]:bg-brand",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
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

const indicatorSizes = {
  sm: "h-1.5 w-1.5",
  md: "h-2 w-2",
  lg: "h-2.5 w-2.5",
} as const;

type RadioGroupRootProps = React.ComponentPropsWithoutRef<
  typeof RadixRadioGroup.Root
> & {
  className?: string;
};

const RadioGroupRoot = React.forwardRef<HTMLDivElement, RadioGroupRootProps>(
  ({ className, ...props }, ref) => (
    <RadixRadioGroup.Root
      ref={ref}
      className={twMerge("flex flex-col gap-2", className)}
      {...props}
    />
  )
);
RadioGroupRoot.displayName = "RadioGroup";

type RadioGroupItemProps = React.ComponentPropsWithoutRef<
  typeof RadixRadioGroup.Item
> &
  VariantProps<typeof radioItemStyles> & {
    label: string;
    className?: string;
  };

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadixRadioGroup.Item>,
  RadioGroupItemProps
>(({ className, size, label, id: idProp, ...props }, ref) => {
  const autoId = React.useId();
  const itemId = idProp ?? `rg-${autoId}`;

  return (
    <div className="flex items-start gap-2">
      <RadixRadioGroup.Item
        ref={ref}
        id={itemId}
        className={twMerge(radioItemStyles({ size }), className)}
        {...props}
      >
        <RadixRadioGroup.Indicator className="flex items-center justify-center">
          <div
            className={`rounded-full bg-white ${indicatorSizes[size ?? "md"]}`}
          />
        </RadixRadioGroup.Indicator>
      </RadixRadioGroup.Item>
      <label
        htmlFor={itemId}
        className="text-sm text-text-primary leading-5 select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
      >
        {label}
      </label>
    </div>
  );
});
RadioGroupItem.displayName = "RadioGroup.Item";

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Item: RadioGroupItem,
});

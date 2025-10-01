import React from "react";
import { twMerge } from "tailwind-merge";
import * as RadixSelect from "@radix-ui/react-select";
import {
  CaretSortIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { cva, VariantProps } from "class-variance-authority";

const selectTriggerStyles = cva(
  [
    "inline-flex w-full items-center justify-between rounded-md",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "text-text-primary",
  ].join(" "),
  {
    variants: {
      variant: {
        outline: "border border-border bg-surface",
        subtle: "border-0 bg-surface-muted",
      },
      size: {
        sm: "h-9 px-2 text-sm",
        md: "h-10 px-3 text-sm",
        lg: "h-11 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  }
);

const selectContentStyles = cva(
  [
    "relative z-50 min-w-[10rem] overflow-hidden rounded-md",
    "border border-border/40 bg-surface text-text-primary shadow-md",
  ].join(" ")
);

type SelectProps = RadixSelect.SelectProps &
  VariantProps<typeof selectTriggerStyles> & {
    placeholder?: string;
    className?: string;
  };

const SelectRoot = ({
  children,
  variant,
  size,
  placeholder = "Select…",
  className,
  ...props
}: SelectProps) => {
  return (
    <RadixSelect.Root {...props}>
      <RadixSelect.Trigger
        className={twMerge(selectTriggerStyles({ variant, size }), className)}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          <CaretSortIcon className="h-4 w-4 opacity-60" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          className={selectContentStyles()}
          position="popper"
          sideOffset={6}
        >
          <RadixSelect.ScrollUpButton className="flex items-center justify-center py-1 text-text-muted">
            <ChevronUpIcon className="h-4 w-4" />
          </RadixSelect.ScrollUpButton>

          <RadixSelect.Viewport className="p-1">
            {children}
          </RadixSelect.Viewport>

          <RadixSelect.ScrollDownButton className="flex items-center justify-center py-1 text-text-muted">
            <ChevronDownIcon className="h-4 w-4" />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

const selectItemStyles = cva(
  [
    "relative flex w-full cursor-default select-none items-center rounded-sm",
    "py-1.5 pl-8 pr-2 text-sm outline-none",
    "data-[highlighted]:bg-surface-muted data-[highlighted]:text-text-primary",
    "data-[state=checked]:font-medium",
    "data-[disabled]:opacity-50 data-[disabled]:pointer-events-none",
  ].join(" ")
);

type SelectItemProps = RadixSelect.SelectItemProps & {
  className?: string;
};

const SelectItem = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Item>,
  SelectItemProps
>(({ className, children, ...props }, ref) => (
  <RadixSelect.Item
    ref={ref}
    className={twMerge(selectItemStyles(), className)}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <RadixSelect.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </RadixSelect.ItemIndicator>
    </span>
    <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
  </RadixSelect.Item>
));
SelectItem.displayName = "Select.Item";

const SelectGroup = RadixSelect.Group;
const SelectLabel = ({
  className,
  ...p
}: React.ComponentProps<typeof RadixSelect.Label>) => (
  <RadixSelect.Label
    className={twMerge(
      "px-2 py-1.5 text-xs font-medium text-text-muted",
      className
    )}
    {...p}
  />
);

export const Select = Object.assign(SelectRoot, {
  Item: SelectItem,
  Group: SelectGroup,
  Label: SelectLabel,
});

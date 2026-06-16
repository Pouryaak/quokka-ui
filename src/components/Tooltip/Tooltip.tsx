import React from "react";
import { twMerge } from "tailwind-merge";
import * as RadixTooltip from "@radix-ui/react-tooltip";

type TooltipProps = RadixTooltip.TooltipProps & {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  contentClassName?: string;
};

export const Tooltip = ({
  content,
  children,
  side = "top",
  align = "center",
  contentClassName,
  ...props
}: TooltipProps) => (
  <RadixTooltip.Root {...props}>
    <RadixTooltip.Trigger asChild>
      {children}
    </RadixTooltip.Trigger>
    <RadixTooltip.Portal>
      <RadixTooltip.Content
        side={side}
        align={align}
        sideOffset={6}
        className={twMerge(
          "z-50 max-w-xs rounded-md border border-border/40 bg-surface px-3 py-1.5 text-sm text-text-primary shadow-lg",
          "animate-in fade-in-0 zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          contentClassName
        )}
      >
        {content}
      </RadixTooltip.Content>
    </RadixTooltip.Portal>
  </RadixTooltip.Root>
);

Tooltip.displayName = "Tooltip";

export const TooltipProvider = RadixTooltip.Provider;

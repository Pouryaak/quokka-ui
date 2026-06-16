import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as RadixAvatar from "@radix-ui/react-avatar";

const avatarStyles = cva(
  "relative flex shrink-0 overflow-hidden bg-surface-muted",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
      },
      variant: {
        circle: "rounded-full",
        rounded: "rounded-md",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "circle",
    },
  }
);

const fallbackTextSize = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg",
} as const;

export type AvatarProps = React.ComponentPropsWithoutRef<
  typeof RadixAvatar.Root
> &
  VariantProps<typeof avatarStyles> & {
    src?: string;
    alt?: string;
    fallback?: string;
    className?: string;
  };

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, size, variant, src, alt, fallback, children, ...props }, ref) => (
    <RadixAvatar.Root
      ref={ref}
      className={twMerge(avatarStyles({ size, variant }), className)}
      {...props}
    >
      {src && <RadixAvatar.Image src={src} alt={alt ?? ""} className="h-full w-full object-cover" />}
      <RadixAvatar.Fallback
        className={`flex h-full w-full items-center justify-center font-medium text-text-muted ${fallbackTextSize[size ?? "md"]}`}
      >
        {fallback ? fallback.slice(0, 2).toUpperCase() : children}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
);

Avatar.displayName = "Avatar";

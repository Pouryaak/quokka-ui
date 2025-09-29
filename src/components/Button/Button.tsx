import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type BaseProps = VariantProps<typeof buttonStyles> & {
  className?: string;
  children: React.ReactNode;
};

export type ButtonAsButtonProps = BaseProps &
  Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "children" | "href"
  > & {
    href?: never;
  };

export type ButtonAsAnchorProps = BaseProps &
  Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "className" | "children"
  > & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      intent: {
        primary: "bg-brand text-text-primary hover:bg-brand/90",
        secondary:
          "bg-surface-muted text-text-primary hover:bg-surface-muted/80",
        ghost: "hover:bg-surface-muted hover:text-text-primary",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-11 px-8 text-lg",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  }
);

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  if ("href" in props) {
    const { intent, size, className, children, href, ...rest } =
      props as ButtonAsAnchorProps;
    const cls = twMerge(buttonStyles({ intent, size }), className);

    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={cls}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const { intent, size, className, children, type, ...rest } =
    props as ButtonAsButtonProps;
  const cls = twMerge(buttonStyles({ intent, size }), className);

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={cls}
      type={type ?? "button"}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

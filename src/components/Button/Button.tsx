import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { Spinner } from "../Spinner/Spinner";

type BaseProps = VariantProps<typeof buttonStyles> & {
  className?: string;
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
};

export type ButtonAsButtonProps = BaseProps &
  Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "children" | "href"
  > & {
    href?: never;
    disabled?: boolean;
  };

export type ButtonAsAnchorProps = BaseProps &
  Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "className" | "children"
  > & {
    href: string;
    disabled?: boolean;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
  {
    variants: {
      intent: {
        primary: "bg-brand text-text-primary hover:bg-brand/80",
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
  const {
    intent,
    size,
    className,
    children,
    startIcon,
    endIcon,
    loading = false,
    ...rest
  } = props as ButtonProps;

  const cls = twMerge(
    buttonStyles({ intent, size }),
    loading ? "cursor-progress" : "",
    className
  );

  const StartIcon = startIcon ? (
    <span aria-hidden="true" className="mr-2">
      {startIcon}
    </span>
  ) : null;
  const EndIcon = endIcon ? (
    <span aria-hidden="true" className="ml-2">
      {endIcon}
    </span>
  ) : null;

  const Content = (
    <>
      {StartIcon}
      <span>{children}</span>
      {EndIcon}
      {loading && (
        <>
          <span aria-hidden="true" className="ml-2 inline-block animate-pulse">
            <Spinner size={size === "sm" ? "sm" : "md"} decorative />
          </span>

          <span className="sr-only">Loading</span>
        </>
      )}
    </>
  );

  if ("href" in (props as ButtonAsAnchorProps)) {
    const { href, onClick, onKeyDown, disabled, ...anchorRest } =
      rest as ButtonAsAnchorProps;

    const isDisabled = Boolean(disabled || loading);

    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
      if (isDisabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      onClick?.(e);
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLAnchorElement> = (
      e
    ) => {
      if (!isDisabled) {
        onKeyDown?.(e);
        return;
      }

      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={cls}
        aria-busy={loading || undefined}
        aria-disabled={isDisabled || undefined}
        tabIndex={isDisabled ? -1 : anchorRest.tabIndex}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...anchorRest}
      >
        {Content}
      </a>
    );
  }

  const { type, disabled, ...buttonRest } = rest as ButtonAsButtonProps;

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={cls}
      type={type ?? "button"}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...buttonRest}
    >
      {Content}
    </button>
  );
});
Button.displayName = "Button";

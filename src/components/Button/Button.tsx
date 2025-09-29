import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type BaseProps = VariantProps<typeof buttonStyles> & {
  children: React.ReactNode;
  className?: string;
};

type ButtonElementProps = ComponentProps<"button"> & {
  href?: never;
};

type LinkElementProps = ComponentProps<"a"> & {
  href: string;
};

type ButtonProps = BaseProps & (ButtonElementProps | LinkElementProps);

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      intent: {
        primary: "bg-brand text-white hover:bg-brand/90",
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

export const Button = ({
  intent,
  size,
  className,
  children,
  ...props
}: ButtonProps) => {
  const isLink = "href" in props && props.href !== undefined;
  const Component = isLink ? "a" : "button";

  const buttonType = !isLink && !("type" in props) ? { type: "button" } : {};

  return (
    <Component
      className={twMerge(buttonStyles({ intent, size, className }))}
      {...props}
    >
      {children}
    </Component>
  );
};

import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const cardStyles = cva(
  "rounded-xl bg-surface text-text-primary border border-border/40 shadow-sm p-5 transition-shadow duration-200",
  {
    variants: {
      elevated: {
        true: "shadow-md hover:shadow-lg",
        false: "",
      },
    },
    defaultVariants: {
      elevated: false,
    },
  }
);

type BaseProps = {
  as?: "div" | "section" | "article";
  title?: string;
};

type CardProps = Omit<ComponentProps<"div">, "children"> &
  VariantProps<typeof cardStyles> &
  BaseProps & {
    children: React.ReactNode;
  };

export const Card = ({
  as = "section",
  title,
  className,
  children,
  elevated,
  ...props
}: CardProps) => {
  const Comp = as;
  return (
    <Comp
      className={twMerge(cardStyles({ elevated }), className)}
      aria-label={title || undefined}
      {...props}
    >
      {children}
    </Comp>
  );
};
Card.displayName = "Card";

type CardMediaProps =
  | {
      src: string;
      alt?: string;
      height?: number;
      className?: string;
      children?: never;
    }
  | {
      children: React.ReactNode;
      className?: string;
      height?: number;
      src?: never;
      alt?: never;
    };
const CardMedia = ({
  src,
  alt,
  height = 180,
  className,
  children,
}: CardMediaProps) => {
  return (
    <div
      className={twMerge(
        "relative -m-5 mb-4 overflow-hidden rounded-t-xl",
        className
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? ""}
          className="block h-[--card-media-h] w-full object-cover"
          style={{ ["--card-media-h" as any]: `${height}px` }}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div
          className="block h-[--card-media-h] w-full"
          style={{ ["--card-media-h" as any]: `${height}px` }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export const CardHeader = ({
  id,
  children,
  className,
  ...rest
}: ComponentProps<"div">) => {
  return (
    <div
      id={id}
      className={twMerge("pb-2 text-lg font-medium leading-6", className)}
      {...rest}
    >
      {children}
    </div>
  );
};
CardHeader.displayName = "Card.Header";

const CardBody = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={twMerge("p-4", className)} {...props} />;
};
CardBody.displayName = "Card.Body";

const CardFooter = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={twMerge("pt-4 flex items-center justify-end gap-3", className)}
      {...props}
    />
  );
};
CardFooter.displayName = "Card.Footer";

Card.Media = CardMedia;
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

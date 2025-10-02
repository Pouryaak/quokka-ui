import { cva, VariantProps } from "class-variance-authority";
import React, { useId } from "react";
import { twMerge } from "tailwind-merge";

const textareaStyles = cva(
  "w-full rounded-md bg-surface shadow-sm disabled:bg-surface-muted disabled:cursor-not-allowed placeholder:text-text-muted/70 text-text-primary",
  {
    variants: {
      variant: {
        outline: "border border-border",
        subtle: "border-none bg-surface-muted",
      },
      size: {
        sm: "p-1 text-sm",
        md: "p-2 text-base",
        lg: "p-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  }
);

export type TextareaProps = React.ComponentPropsWithRef<"textarea"> &
  VariantProps<typeof textareaStyles> & {
    label?: string;
    "aria-label": string;
    className?: string;
    helperText?: string;
    error?: string;
  };

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id: idProp,
      label,
      className,
      helperText,
      error,
      size,
      variant,
      required,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    const autoId = useId();
    const inputId = idProp ?? `in-${autoId}`;
    const descId = `in-desc-${autoId}`;

    const description = error || helperText;
    const hasError = !!error;

    return (
      <div className={twMerge("flex flex-col", className)}>
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1 font-medium text-text-primary"
          >
            {label}
            {required && <span className="text-red-600"> *</span>}
          </label>
        )}

        <textarea
          id={inputId}
          ref={ref}
          className={twMerge(
            textareaStyles({ size, variant }),
            hasError ? "border-red-500" : ""
          )}
          aria-label={label ? undefined : ariaLabel}
          aria-invalid={hasError || undefined}
          aria-errormessage={hasError ? descId : undefined}
          aria-describedby={!hasError && description ? descId : undefined}
          required={required}
          {...props}
        />

        {description && (
          <p
            id={descId}
            className={twMerge(
              "mt-1 text-sm",
              hasError ? "text-red-600" : "text-text-muted"
            )}
          >
            {description}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

import { cva, VariantProps } from "class-variance-authority";
import React, { useId } from "react";
import { twMerge } from "tailwind-merge";

const inputStyles = cva(
  "w-full rounded-md bg-surface shadow-sm disabled:bg-surface-muted disabled:cursor-not-allowed placeholder:text-text-muted/70 text-text-primary",
  {
    variants: {
      variant: {
        outline: "border border-border",
        subtle: "border-none bg-surface-muted",
      },
      size: {
        sm: "p-1 text-sm h-9",
        md: "p-2 text-base h-10",
        lg: "p-3 text-lg h-11",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  }
);

export type InputProps = React.ComponentPropsWithRef<"input"> &
  VariantProps<typeof inputStyles> & {
    label?: string; // Label is now optional
    "aria-label": string;
    className?: string;
    helperText?: string;
    error?: string;
  };

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
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

        <input
          id={inputId}
          ref={ref}
          // visual style
          className={twMerge(
            inputStyles({ size, variant }),
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

Input.displayName = "Input";

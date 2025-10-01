import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const CheckIcon = (props: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.454-12.68a.75.75 0 011.04-.208z"
      clipRule="evenodd"
    />
  </svg>
);

const checkboxStyles = cva(
  [
    "flex items-center justify-center rounded border-2 shrink-0",
    "transition-colors",
    "peer-focus-visible:ring-2 peer-focus-visible:ring-brand peer-focus-visible:ring-offset-2",
    "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
  ].join(" "),
  {
    variants: {
      variant: {
        outline: [
          "bg-surface border-border text-transparent",
          "peer-checked:bg-brand peer-checked:border-brand peer-checked:text-white",
        ].join(" "),
        subtle: [
          "border-transparent bg-surface-muted text-transparent",
          "peer-checked:bg-brand peer-checked:text-white",
        ].join(" "),
      },
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: { variant: "outline", size: "md" },
  }
);

const overlaySize = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
} as const;

const iconSize = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
} as const;

export type CheckboxProps = Omit<React.ComponentPropsWithRef<"input">, "size"> &
  VariantProps<typeof checkboxStyles> & {
    label: string;
    helperText?: string;
    error?: string;
    id?: string;
    className?: string;
  };

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id: idProp,
      label,
      helperText,
      error,
      variant,
      size = "md",
      className,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const autoId = React.useId();
    const inputId = idProp ?? `cb-${autoId}`;
    const descId = `cb-desc-${autoId}`;
    const hasError = typeof error === "string" && error.length > 0;
    const description = hasError ? error : helperText;

    return (
      <div className={twMerge("flex flex-col gap-1", className)}>
        <div className="flex items-start gap-2">
          <div className="relative">
            <input
              ref={ref}
              id={inputId}
              type="checkbox"
              className={`peer absolute inset-0 cursor-pointer opacity-0 ${
                overlaySize[size ?? "md"]
              }`}
              aria-invalid={hasError || undefined}
              aria-errormessage={hasError ? descId : undefined}
              aria-describedby={!hasError && description ? descId : undefined}
              disabled={disabled}
              required={required}
              {...props}
            />

            <div
              className={twMerge(
                checkboxStyles({ variant, size }),
                "peer-checked:[&>svg]:block"
              )}
              aria-hidden="true"
            >
              <CheckIcon className={`${iconSize[size ?? "md"]} hidden`} />
            </div>
          </div>

          <label
            htmlFor={inputId}
            className={twMerge(
              "select-none leading-5 text-text-primary",
              disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"
            )}
          >
            {label}
            {required && <span className="ml-0.5 text-red-600"> *</span>}
          </label>
        </div>

        {(hasError || helperText) && (
          <div
            id={descId}
            className={twMerge(
              "text-sm",
              hasError ? "text-red-600" : "text-text-muted"
            )}
          >
            {hasError ? error : helperText}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const pageButtonStyles = cva(
  [
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
    "cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      active: {
        true: "bg-brand text-black hover:bg-brand/80",
        false: "text-text-primary hover:bg-surface-muted",
      },
      size: {
        sm: "h-8 w-8",
        md: "h-9 w-9",
        lg: "h-10 w-10",
      },
    },
    defaultVariants: {
      active: false,
      size: "md",
    },
  }
);

export type PaginationProps = Omit<React.HTMLAttributes<HTMLElement>, "onChange"> & {
  total: number;
  page: number;
  onChange: (page: number) => void;
  siblings?: number;
  size?: VariantProps<typeof pageButtonStyles>["size"];
  className?: string;
};

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ total, page, onChange, siblings = 1, size = "md", className, ...props }, ref) => {
    const renderPages = () => {
      const pages: (number | "ellipsis")[] = [];
      const rangeStart = Math.max(2, page - siblings);
      const rangeEnd = Math.min(total - 1, page + siblings);

      pages.push(1);

      if (rangeStart > 2) {
        pages.push("ellipsis");
      }

      for (let i = rangeStart; i <= rangeEnd; i++) {
        if (i !== 1 && i !== total) pages.push(i);
      }

      if (rangeEnd < total - 1) {
        pages.push("ellipsis");
      }

      if (total > 1) pages.push(total);

      return pages;
    };

    if (total <= 1) return null;

    return (
      <nav ref={ref} role="navigation" aria-label="Pagination" className={className} {...props}>
        <ul className="flex items-center gap-1 list-none p-0">
          <li>
            <button
              className={twMerge(pageButtonStyles({ size }), "px-2 w-auto")}
              onClick={() => onChange(page - 1)}
              disabled={page <= 1}
              aria-label="Previous page"
            >
              <svg width="14" height="14" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <path
                  d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
              <span className="hidden sm:inline ml-1">Prev</span>
            </button>
          </li>
          {renderPages().map((p, i) => (
            <li key={`${p}-${i}`}>
              {p === "ellipsis" ? (
                <span className={`inline-flex items-center justify-center text-text-muted ${size === "sm" ? "h-8 w-8" : size === "lg" ? "h-10 w-10" : "h-9 w-9"}`}>
                  …
                </span>
              ) : (
                <button
                  className={pageButtonStyles({ active: p === page, size })}
                  onClick={() => onChange(p)}
                  aria-current={p === page ? "page" : undefined}
                  aria-label={`Page ${p}`}
                >
                  {p}
                </button>
              )}
            </li>
          ))}
          <li>
            <button
              className={twMerge(pageButtonStyles({ size }), "px-2 w-auto")}
              onClick={() => onChange(page + 1)}
              disabled={page >= total}
              aria-label="Next page"
            >
              <span className="hidden sm:inline mr-1">Next</span>
              <svg width="14" height="14" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <path
                  d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    );
  }
);

Pagination.displayName = "Pagination";

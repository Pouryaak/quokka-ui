import React from "react";
import { twMerge } from "tailwind-merge";

export type BreadcrumbsProps = React.HTMLAttributes<HTMLElement> & {
  separator?: React.ReactNode;
  className?: string;
};

export const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ className, separator, children, ...props }, ref) => (
    <nav ref={ref} aria-label="Breadcrumb" className={className} {...props}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {React.Children.map(children, (child, i) => {
          const isLast = i === React.Children.count(children) - 1;
          return (
            <>
              <li className="flex items-center gap-1.5">
                {React.isValidElement(child)
                  ? React.cloneElement(child as React.ReactElement<any>, {
                      className: twMerge(
                        isLast
                          ? "text-text-primary font-medium"
                          : "text-text-muted hover:text-text-primary transition-colors",
                        (child as React.ReactElement<any>).props.className
                      ),
                      "aria-current": isLast ? "page" : undefined,
                    })
                  : child}
              </li>
              {!isLast && (
                <li aria-hidden="true" className="text-text-muted/50">
                  {separator ?? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </li>
              )}
            </>
          );
        })}
      </ol>
    </nav>
  )
);

Breadcrumbs.displayName = "Breadcrumbs";

type BreadcrumbItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
};

export const BreadcrumbItem = React.forwardRef<
  HTMLAnchorElement,
  BreadcrumbItemProps
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={twMerge("cursor-pointer", className)}
    {...props}
  />
));

BreadcrumbItem.displayName = "BreadcrumbItem";

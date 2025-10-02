import { cva, VariantProps } from "class-variance-authority";
import React, { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const wrapperStyles = cva("relative w-full overflow-auto", {
  variants: {
    frame: {
      plain: "",
      framed: "rounded-xl border border-border/40 shadow-sm",
    },
  },
  defaultVariants: { frame: "plain" },
});

type TableDOMProps = Omit<ComponentProps<"table">, "frame">;

export type TableProps = TableDOMProps & {
  containerClassName?: string;
  frame?: "plain" | "framed";
};

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    { className, containerClassName, frame = "plain" as const, ...props },
    ref
  ) => (
    <div className={twMerge(wrapperStyles({ frame }), containerClassName)}>
      <table
        ref={ref}
        className={twMerge(
          "w-full caption-bottom text-sm text-text-primary",
          className
        )}
        {...props}
      />
    </div>
  )
);
Table.displayName = "Table";

type TableHeaderProps = ComponentProps<"thead"> & {
  sticky?: boolean;
};

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, sticky, ...props }, ref) => (
    <thead
      ref={ref}
      className={twMerge(
        "[&_tr]:border-b [&_tr]:border-border/40",

        sticky &&
          [
            "[&_th]:sticky [&_th]:top-0 [&_th]:z-10",
            "[&_th]:bg-surface",
            "supports-[backdrop-filter]:[&_th]:bg-surface/55",
            "[&_th]:backdrop-blur-sm supports-[backdrop-filter]:[&_th]:backdrop-saturate-250",
            "[&_th]:border-b [&_th]:border-border/40",
            "[&_th]:shadow-md",
          ].join(" "),
        className
      )}
      {...props}
    />
  )
);
TableHeader.displayName = "Table.Header";

type TableBodyProps = ComponentProps<"tbody"> & {
  striped?: boolean;
};

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, striped, ...props }, ref) => (
    <tbody
      ref={ref}
      className={twMerge(
        "[&_tr]:border-b [&_tr]:border-border/30 [&_tr:last-child]:border-0",
        striped && "[&_tr:nth-child(even)]:bg-surface-muted/40",
        className
      )}
      {...props}
    />
  )
);
TableBody.displayName = "Table.Body";

const rowStyles = cva("border-b transition-colors hover:bg-surface-muted/50", {
  variants: {
    density: {
      compact: "",
      default: "",
      comfortable: "",
    },
  },
  defaultVariants: {
    density: "default",
  },
});

type TableRowProps = ComponentProps<"tr"> & VariantProps<typeof rowStyles>;

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, density, ...props }, ref) => (
    <tr
      ref={ref}
      className={twMerge(rowStyles({ density }), className)}
      {...props}
    />
  )
);
TableRow.displayName = "Table.Row";

const headCellStyles = cva(
  "text-left align-middle font-medium text-text-muted",
  {
    variants: {
      density: {
        compact: "h-9 px-3 text-xs",
        default: "h-12 px-4 text-sm",
        comfortable: "h-14 px-5 text-sm",
      },
    },
    defaultVariants: {
      density: "default",
    },
  }
);

type TableHeadProps = ComponentProps<"th"> &
  VariantProps<typeof headCellStyles>;

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, scope, density, ...props }, ref) => (
    <th
      ref={ref}
      scope={scope ?? "col"}
      className={twMerge(headCellStyles({ density }), className)}
      {...props}
    />
  )
);
TableHead.displayName = "Table.Head";

const cellStyles = cva("align-middle", {
  variants: {
    density: {
      compact: "px-3 py-2 text-sm",
      default: "p-4 text-sm",
      comfortable: "px-5 py-4 text-base",
    },
    numeric: {
      false: "",
      true: "text-right tabular-nums", // align numbers; fixed-width numerals
    },
  },
  defaultVariants: {
    density: "default",
    numeric: false,
  },
});

type TableCellProps = ComponentProps<"td"> & VariantProps<typeof cellStyles>;

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, density, numeric, ...props }, ref) => (
    <td
      ref={ref}
      className={twMerge(cellStyles({ density, numeric }), className)}
      {...props}
    />
  )
);
TableCell.displayName = "Table.Cell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  ComponentProps<"caption">
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={twMerge("mt-2 text-sm text-text-muted", className)}
    {...props}
  />
));
TableCaption.displayName = "Table.Caption";

export type {
  TableHeaderProps,
  TableBodyProps,
  TableRowProps,
  TableHeadProps,
  TableCellProps,
};

export type FinalTableType = React.ForwardRefExoticComponent<
  TableProps & React.RefAttributes<HTMLTableElement>
> & {
  Header: typeof TableHeader;
  Body: typeof TableBody;
  Row: typeof TableRow;
  Head: typeof TableHead;
  Cell: typeof TableCell;
  Caption: typeof TableCaption;
};

export const FinalTable: FinalTableType = Object.assign(Table, {
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  Head: TableHead,
  Cell: TableCell,
  Caption: TableCaption,
});

import React, { useState, useMemo, useCallback } from "react";
import { twMerge } from "tailwind-merge";
import { Input } from "../Input/Input";
import { Pagination } from "../Pagination/Pagination";
import { FinalTable } from "../Table/Table";

export type Column<T> = {
  key: string;
  header: string;
  sortable?: boolean;
  render?: (item: T) => React.ReactNode;
  className?: string;
};

export type DataTableProps<T> = {
  data: T[];
  columns: Column<T>[];
  searchable?: boolean;
  searchPlaceholder?: string;
  pageSize?: number;
  emptyMessage?: string;
  className?: string;
};

const sortAscIcon = (
  <svg width="14" height="14" viewBox="0 0 15 15" fill="none" className="ml-1">
    <path d="M7.5 3.5L4.5 6.5H10.5L7.5 3.5Z" fill="currentColor" />
  </svg>
);

const sortDescIcon = (
  <svg width="14" height="14" viewBox="0 0 15 15" fill="none" className="ml-1">
    <path d="M7.5 11.5L4.5 8.5H10.5L7.5 11.5Z" fill="currentColor" />
  </svg>
);

const sortNoneIcon = (
  <svg width="14" height="14" viewBox="0 0 15 15" fill="none" className="ml-1 opacity-0 group-hover:opacity-30">
    <path d="M7.5 4L5 7H10L7.5 4ZM7.5 11L5 8H10L7.5 11Z" fill="currentColor" />
  </svg>
);

function getNestedValue(obj: any, path: string): string {
  return path.split(".").reduce((o, k) => (o ? o[k] : ""), obj)?.toString() ?? "";
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  searchable = true,
  searchPlaceholder = "Search...",
  pageSize = 5,
  emptyMessage = "No results found.",
  className,
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);

  const handleSort = useCallback(
    (key: string) => {
      if (sortKey === key) {
        if (sortDir === "asc") {
          setSortDir("desc");
        } else if (sortDir === "desc") {
          setSortKey(null);
          setSortDir("asc");
        }
      } else {
        setSortKey(key);
        setSortDir("asc");
      }
      setPage(1);
    },
    [sortKey, sortDir]
  );

  const filtered = useMemo(() => {
    if (!search.trim()) return data;
    const term = search.toLowerCase();
    return data.filter((row) =>
      columns.some((col) => {
        if (col.render) {
          const rendered = col.render(row);
          if (typeof rendered === "string") return rendered.toLowerCase().includes(term);
          if (typeof rendered === "number") return rendered.toString().includes(term);
          return false;
        }
        const val = getNestedValue(row, col.key);
        return val.toLowerCase().includes(term);
      })
    );
  }, [data, search, columns]);

  const sorted = useMemo(() => {
    if (!sortKey) return filtered;
    return [...filtered].sort((a, b) => {
      const aVal = getNestedValue(a, sortKey);
      const bVal = getNestedValue(b, sortKey);
      const cmp = aVal.localeCompare(bVal, undefined, { numeric: true, sensitivity: "base" });
      return sortDir === "asc" ? cmp : -cmp;
    });
  }, [filtered, sortKey, sortDir]);

  const total = Math.max(1, Math.ceil(sorted.length / pageSize));
  const paged = sorted.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className={twMerge("space-y-4", className)}>
      {searchable && (
        <div className="flex items-center gap-3">
          <Input
            aria-label="Search"
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="max-w-xs"
          />
          <span className="text-xs text-text-muted">
            {filtered.length} of {data.length} {data.length === 1 ? "row" : "rows"}
          </span>
        </div>
      )}

      {paged.length === 0 ? (
        <div className="rounded-xl border border-border/40 bg-surface-muted/30 py-12 text-center">
          <p className="m-0 text-sm text-text-muted">{emptyMessage}</p>
        </div>
      ) : (
        <FinalTable frame="framed" className="w-full">
          <FinalTable.Header>
            <FinalTable.Row>
              {columns.map((col) => (
                <FinalTable.Head key={col.key} className={col.className}>
                  {col.sortable ? (
                    <button
                      className="inline-flex items-center font-inherit text-inherit cursor-pointer hover:text-text-primary group -mx-1 px-1 rounded"
                      onClick={() => handleSort(col.key)}
                    >
                      {col.header}
                      {sortKey === col.key
                        ? sortDir === "asc"
                          ? sortAscIcon
                          : sortDescIcon
                        : sortNoneIcon}
                    </button>
                  ) : (
                    col.header
                  )}
                </FinalTable.Head>
              ))}
            </FinalTable.Row>
          </FinalTable.Header>
          <FinalTable.Body>
            {paged.map((row, i) => (
              <FinalTable.Row key={i}>
                {columns.map((col) => (
                  <FinalTable.Cell key={col.key} className={col.className}>
                    {col.render
                      ? col.render(row)
                      : getNestedValue(row, col.key)}
                  </FinalTable.Cell>
                ))}
              </FinalTable.Row>
            ))}
          </FinalTable.Body>
        </FinalTable>
      )}

      {total > 1 && (
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-muted">
            Page {page} of {total}
          </span>
          <Pagination total={total} page={page} onChange={(p) => setPage(p)} size="sm" />
        </div>
      )}
    </div>
  );
}

DataTable.displayName = "DataTable";

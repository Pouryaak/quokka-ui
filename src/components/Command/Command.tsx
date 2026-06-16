import React, { createContext, useContext, useState, useCallback, useRef, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import * as RadixDialog from "@radix-ui/react-dialog";

type CommandContextValue = {
  search: string;
  setSearch: (v: string) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  setOpen: (o: boolean) => void;
};

const CommandCtx = createContext<CommandContextValue | null>(null);
const useCommandCtx = () => {
  const ctx = useContext(CommandCtx);
  if (!ctx) throw new Error("Command subcomponents must be used within <Command>");
  return ctx;
};

type CommandProps = {
  children: React.ReactNode;
  trigger?: React.ReactNode;
  className?: string;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  defaultOpen?: boolean;
};

export const Command = ({
  children,
  trigger,
  className,
  onOpenChange,
  open: controlledOpen,
  defaultOpen = false,
}: CommandProps) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = controlledOpen ?? internalOpen;
  const setOpen = useCallback(
    (o: boolean) => {
      setInternalOpen(o);
      onOpenChange?.(o);
    },
    [onOpenChange]
  );

  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const ctx = useMemo<CommandContextValue>(
    () => ({ search, setSearch, inputRef, setOpen }),
    [search, setOpen]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const items = document.querySelectorAll('[data-command-item]');
      if (items.length === 0) return;
      const current = document.activeElement;
      const currentIndex = Array.from(items).indexOf(current as Element);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % items.length;
        (items[nextIndex] as HTMLElement).focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prevIndex = currentIndex < 0 ? items.length - 1 : (currentIndex - 1 + items.length) % items.length;
        (items[prevIndex] as HTMLElement).focus();
      } else if (e.key === "Enter" && currentIndex >= 0) {
        e.preventDefault();
        (items[currentIndex] as HTMLElement).click();
      }
    },
    []
  );

  return (
    <CommandCtx.Provider value={ctx}>
      <RadixDialog.Root open={open} onOpenChange={setOpen}>
        {trigger}
        <RadixDialog.Portal>
          <RadixDialog.Overlay className="fixed inset-0 z-50 bg-[var(--overlay-bg)] data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out" />
          <RadixDialog.Content
            onKeyDown={handleKeyDown}
            className={twMerge(
              "fixed left-1/2 top-[15%] z-50 w-[min(90vw,32rem)] -translate-x-1/2 rounded-lg border border-border/40 bg-surface shadow-lg focus-visible:outline-none",
              "data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out",
              className
            )}
            onOpenAutoFocus={(e) => {
              e.preventDefault();
              inputRef.current?.focus();
            }}
          >
            {children}
          </RadixDialog.Content>
        </RadixDialog.Portal>
      </RadixDialog.Root>
    </CommandCtx.Provider>
  );
};

Command.displayName = "Command";

type CommandTriggerProps = Omit<React.ComponentPropsWithoutRef<typeof RadixDialog.Trigger>, "asChild"> & {
  className?: string;
};

const CommandTrigger = React.forwardRef<HTMLButtonElement, CommandTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <RadixDialog.Trigger ref={ref} className={twMerge(className)} {...props}>
      {children}
    </RadixDialog.Trigger>
  )
);
CommandTrigger.displayName = "Command.Trigger";
Command.Trigger = CommandTrigger;

type CommandInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const CommandInput = React.forwardRef<HTMLInputElement, CommandInputProps>(
  ({ className, onChange, ...props }, ref) => {
    const { search, setSearch, inputRef: ctxInputRef } = useCommandCtx();

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        onChange?.(e);
      },
      [setSearch, onChange]
    );

    const mergedRef = useCallback(
      (node: HTMLInputElement | null) => {
        (ctxInputRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
      },
      [ref, ctxInputRef]
    );

    return (
      <input
        ref={mergedRef}
        value={search}
        onChange={handleChange}
        className={twMerge(
          "w-full border-b border-border/40 bg-transparent px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none",
          className
        )}
        placeholder="Type a command or search..."
        {...props}
      />
    );
  }
);
CommandInput.displayName = "Command.Input";
Command.Input = CommandInput;

type CommandListProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const CommandList = React.forwardRef<HTMLDivElement, CommandListProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={twMerge("max-h-64 overflow-y-auto p-1", className)}
      {...props}
    />
  )
);
CommandList.displayName = "Command.List";
Command.List = CommandList;

type CommandItemProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
  onSelect?: (value: string) => void;
  className?: string;
};

const CommandItem = React.forwardRef<HTMLDivElement, CommandItemProps>(
  ({ className, value, onSelect, children, ...props }, ref) => {
    const { search } = useCommandCtx();

    if (search && !value.toLowerCase().includes(search.toLowerCase())) {
      return null;
    }

    return (
      <div
        ref={ref}
        role="option"
        tabIndex={0}
        data-command-item=""
        className={twMerge(
          "flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm text-text-primary outline-none transition-colors",
          "focus:bg-surface-muted",
          className
        )}
        onClick={() => onSelect?.(value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onSelect?.(value);
          }
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CommandItem.displayName = "Command.Item";
Command.Item = CommandItem;

type CommandGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  className?: string;
};

const CommandGroup = React.forwardRef<HTMLDivElement, CommandGroupProps>(
  ({ className, heading, children, ...props }, ref) => (
    <div ref={ref} role="group" className={className} {...props}>
      {heading && (
        <div className="px-2 py-1.5 text-xs font-medium text-text-muted">
          {heading}
        </div>
      )}
      {children}
    </div>
  )
);
CommandGroup.displayName = "Command.Group";
Command.Group = CommandGroup;

type CommandEmptyProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const CommandEmpty = React.forwardRef<HTMLDivElement, CommandEmptyProps>(
  ({ className, children, ...props }, ref) => {
    const { search } = useCommandCtx();
    if (!search) return null;
    return (
      <div
        ref={ref}
        className={twMerge("px-4 py-6 text-center text-sm text-text-muted", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CommandEmpty.displayName = "Command.Empty";
Command.Empty = CommandEmpty;

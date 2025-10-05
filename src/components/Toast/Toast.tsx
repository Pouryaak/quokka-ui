import * as React from "react";
import * as RadixToast from "@radix-ui/react-toast";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...a: any[]) {
  return twMerge(clsx(a));
}

export type ToastVariant = "success" | "info" | "warning" | "danger";

export type ToastAction = {
  label: string;
  onClick: () => void;
};

export type ToastItem = {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  icon?: React.ReactNode | null;
  action?: ToastAction;
};

export type ToastProviderProps = {
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  duration?: number;
  maxVisible?: number;
  zIndex?: number;
  pauseOnHover?: boolean;
  pauseOnFocusWithin?: boolean;
  swipeToDismiss?: boolean;
  children?: React.ReactNode;
};

const positionToClasses: Record<
  NonNullable<ToastProviderProps["position"]>,
  string
> = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
};

type State = {
  items: ToastItem[];
  queue: ToastItem[];
};

type Ctx = {
  state: State;
  enqueue: (t: Omit<ToastItem, "id"> & { id?: string }) => string;
  dismiss: (id?: string) => void;
  clearAll: () => void;
  config: Required<
    Pick<
      ToastProviderProps,
      | "position"
      | "duration"
      | "maxVisible"
      | "zIndex"
      | "pauseOnHover"
      | "pauseOnFocusWithin"
      | "swipeToDismiss"
    >
  >;
};

const ToastCtx = React.createContext<Ctx | null>(null);
export const useToast = () => {
  const ctx = React.useContext(ToastCtx);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
};

type Listener = (t: ToastItem) => void;
type DismissListener = (id?: string) => void;
const addListeners = new Set<Listener>();
const dismissListeners = new Set<DismissListener>();

let idCounter = 0;
const nextId = () =>
  `t_${Date.now().toString(36)}_${(idCounter++).toString(36)}`;

export const toast = Object.assign(
  (input: Omit<ToastItem, "id"> & { id?: string }) => {
    const id = input.id ?? nextId();
    const item: ToastItem = { id, ...input };
    addListeners.forEach((fn) => fn(item));
    return id;
  },
  {
    dismiss(id?: string) {
      dismissListeners.forEach((fn) => fn(id));
    },
  }
);

const Icon = ({ variant }: { variant: ToastVariant }) => {
  const common = "w-4 h-4 shrink-0";
  switch (variant) {
    case "success":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
            className="fill-[var(--color-success-muted)]"
          />
          <path
            d="m8.5 12 2.5 2.5L16 9.5"
            stroke="var(--color-success)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "warning":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 3 2 21h20L12 3Z"
            className="fill-[var(--color-warning-muted)]"
          />
          <path
            d="M12 9v5m0 3h.01"
            stroke="var(--color-warning)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "danger":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            className="fill-[var(--color-danger-muted)]"
          />
          <path
            d="m9 9 6 6M15 9l-6 6"
            stroke="var(--color-danger)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "info":
    default:
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            className="fill-[var(--color-info-muted)]"
          />
          <path
            d="M12 8.5h.01M11 11h2v5h-2z"
            stroke="var(--color-info)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
  }
};

function variantClasses(v: ToastVariant | undefined) {
  switch (v) {
    case "success":
      return "border-[var(--color-toast-border)]";
    case "warning":
      return "border-[var(--color-toast-border)]";
    case "danger":
      return "border-[var(--color-toast-border)]";
    case "info":
    default:
      return "border-[var(--color-toast-border)]";
  }
}

export const ToastProvider = ({
  position = "top-right",
  duration = 5000,
  maxVisible = 3,
  zIndex = 1050,
  pauseOnHover = true,
  pauseOnFocusWithin = true,
  swipeToDismiss = true,
  children,
}: ToastProviderProps) => {
  const [state, setState] = React.useState<State>({ items: [], queue: [] });

  const enqueue = React.useCallback(
    (partial: Omit<ToastItem, "id"> & { id?: string }) => {
      const id = partial.id ?? nextId();
      const item: ToastItem = { id, duration, variant: "info", ...partial };
      setState((s) => {
        if (s.items.length < maxVisible) {
          return { ...s, items: [...s.items, item] };
        }
        return { ...s, queue: [...s.queue, item] };
      });
      return id;
    },
    [duration, maxVisible]
  );

  const dismiss = React.useCallback(
    (id?: string) => {
      setState((s) => {
        const idsToRemove = new Set<string>();
        if (id) idsToRemove.add(id);
        else s.items.forEach((i) => idsToRemove.add(i.id));

        const remaining = s.items.filter((i) => !idsToRemove.has(i.id));
        const vacancies = maxVisible - remaining.length;
        const fromQueue = s.queue.slice(0, Math.max(0, vacancies));
        const newQueue = s.queue.slice(fromQueue.length);
        return { items: [...remaining, ...fromQueue], queue: newQueue };
      });
    },
    [maxVisible]
  );

  const clearAll = React.useCallback(() => {
    setState({ items: [], queue: [] });
  }, []);

  React.useEffect(() => {
    const add = (t: ToastItem) => enqueue(t);
    const rm = (id?: string) => dismiss(id);
    addListeners.add(add);
    dismissListeners.add(rm);
    return () => {
      addListeners.delete(add);
      dismissListeners.delete(rm);
    };
  }, [enqueue, dismiss]);

  const ctx: Ctx = React.useMemo(
    () => ({
      state,
      enqueue,
      dismiss,
      clearAll,
      config: {
        position,
        duration,
        maxVisible,
        zIndex,
        pauseOnHover,
        pauseOnFocusWithin,
        swipeToDismiss,
      },
    }),
    [
      state,
      enqueue,
      dismiss,
      clearAll,
      position,
      duration,
      maxVisible,
      zIndex,
      pauseOnHover,
      pauseOnFocusWithin,
      swipeToDismiss,
    ]
  );

  const dir = React.useMemo(() => {
    return "right";
  }, []);

  return (
    <ToastCtx.Provider value={ctx}>
      <RadixToast.Provider
        duration={duration}
        swipeDirection={dir as any}
        label="Notifications"
      >
        {children}
        <ToastViewport />
      </RadixToast.Provider>
    </ToastCtx.Provider>
  );
};

export const ToastViewport = () => {
  const { config } = useToast();
  return (
    <RadixToast.Viewport
      className={cn(
        "fixed m-0 flex max-h-screen w-[var(--toast-width,360px)] flex-col gap-[var(--toast-gap,0.75rem)] p-0 outline-none",
        positionToClasses[config.position],
        `z-[${config.zIndex}]`
      )}
    />
  );
};

export const ToastCard = ({
  item,
  onClose,
}: {
  item: ToastItem;
  onClose: (id: string) => void;
}) => {
  const { title, description, variant = "info", icon, action } = item;

  const accent =
    variant === "success"
      ? "bg-[var(--color-success)]"
      : variant === "warning"
      ? "bg-[var(--color-warning)]"
      : variant === "danger"
      ? "bg-[var(--color-danger)]"
      : "bg-[var(--color-info)]";

  return (
    <RadixToast.Root
      className={cn(
        "group relative grid w-[var(--toast-width,360px)] grid-cols-[auto,1fr,auto] items-start gap-3",
        "rounded-[var(--radius-md)] border bg-[var(--color-surface)] p-[var(--toast-padding,var(--spacing-4))] shadow-[var(--elevation-3,0_20px_40px_rgba(0,0,0,.18))]",
        "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]",
        "data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",
        variantClasses(variant)
      )}
      onOpenChange={(open: boolean) => {
        if (!open) onClose(item.id);
      }}
    >
      <span
        className={cn(
          "absolute left-0 top-0 h-full w-1 rounded-l-[var(--radius-md)]",
          accent
        )}
        aria-hidden="true"
      />

      <div className="mt-[2px]">
        {icon === null ? null : icon ?? <Icon variant={variant} />}
      </div>

      <div className="min-w-0">
        {title ? (
          <RadixToast.Title className="truncate text-[var(--font-size-sm)] font-[var(--font-weight-medium)]">
            {title}
          </RadixToast.Title>
        ) : null}
        {description ? (
          <RadixToast.Description className="mt-1 text-[var(--font-size-sm)] text-[var(--color-text-muted)]">
            {description}
          </RadixToast.Description>
        ) : null}
        {action ? (
          <RadixToast.Action altText={action.label} asChild>
            <button
              onClick={action.onClick}
              className="mt-2 inline-flex items-center rounded-[var(--radius-md)] border border-[var(--color-border)] px-2 py-1 text-[var(--font-size-sm)] hover:bg-[var(--color-surface-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]"
            >
              {action.label}
            </button>
          </RadixToast.Action>
        ) : null}
      </div>

      <RadixToast.Close
        className="ml-auto inline-flex h-6 w-6 items-center justify-center rounded-[var(--radius-full)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]"
        aria-label="Close"
      >
        ✕
      </RadixToast.Close>
    </RadixToast.Root>
  );
};

export const Toaster = () => {
  const { state, dismiss } = useToast();
  return (
    <>
      {state.items.map((t) => (
        <ToastCard key={t.id} item={t} onClose={dismiss} />
      ))}
    </>
  );
};

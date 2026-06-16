import React from "react";
import { twMerge } from "tailwind-merge";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";

type DropdownMenuRootProps = RadixDropdownMenu.DropdownMenuProps & {
  className?: string;
};

const DropdownMenuRoot = (props: DropdownMenuRootProps) => (
  <RadixDropdownMenu.Root {...props} />
);
DropdownMenuRoot.displayName = "DropdownMenu";

type DropdownMenuTriggerProps = React.ComponentPropsWithoutRef<
  typeof RadixDropdownMenu.Trigger
> & {
  className?: string;
};

const DropdownMenuTrigger = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Trigger>,
  DropdownMenuTriggerProps
>(({ className, ...props }, ref) => (
  <RadixDropdownMenu.Trigger
    ref={ref}
    className={twMerge(
      "inline-flex items-center justify-center cursor-pointer",
      className
    )}
    {...props}
  />
));
DropdownMenuTrigger.displayName = "DropdownMenu.Trigger";

type DropdownMenuContentProps = React.ComponentPropsWithoutRef<
  typeof RadixDropdownMenu.Content
> & {
  className?: string;
};

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Content>,
  DropdownMenuContentProps
>(({ className, children, ...props }, ref) => (
  <RadixDropdownMenu.Portal>
    <RadixDropdownMenu.Content
      ref={ref}
      sideOffset={6}
      className={twMerge(
        "z-50 min-w-[10rem] overflow-hidden rounded-md border border-border/40 bg-surface p-1 text-text-primary shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </RadixDropdownMenu.Content>
  </RadixDropdownMenu.Portal>
));
DropdownMenuContent.displayName = "DropdownMenu.Content";

type DropdownMenuItemProps = React.ComponentPropsWithoutRef<
  typeof RadixDropdownMenu.Item
> & {
  className?: string;
};

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Item>,
  DropdownMenuItemProps
>(({ className, ...props }, ref) => (
  <RadixDropdownMenu.Item
    ref={ref}
    className={twMerge(
      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[highlighted]:bg-surface-muted data-[highlighted]:text-text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = "DropdownMenu.Item";

type DropdownMenuSeparatorProps = React.ComponentPropsWithoutRef<
  typeof RadixDropdownMenu.Separator
> & {
  className?: string;
};

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Separator>,
  DropdownMenuSeparatorProps
>(({ className, ...props }, ref) => (
  <RadixDropdownMenu.Separator
    ref={ref}
    className={twMerge("-mx-1 my-1 h-px bg-border/40", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = "DropdownMenu.Separator";

type DropdownMenuLabelProps = React.ComponentPropsWithoutRef<
  typeof RadixDropdownMenu.Label
> & {
  className?: string;
};

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Label>,
  DropdownMenuLabelProps
>(({ className, ...props }, ref) => (
  <RadixDropdownMenu.Label
    ref={ref}
    className={twMerge(
      "px-2 py-1.5 text-xs font-medium text-text-muted",
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = "DropdownMenu.Label";

type DropdownMenuGroupProps = React.ComponentPropsWithoutRef<
  typeof RadixDropdownMenu.Group
>;

const DropdownMenuGroup = RadixDropdownMenu.Group;

type DropdownMenuSubProps = RadixDropdownMenu.DropdownMenuSubProps;

const DropdownMenuSub = (props: DropdownMenuSubProps) => (
  <RadixDropdownMenu.Sub {...props} />
);
DropdownMenuSub.displayName = "DropdownMenu.Sub";

type DropdownMenuSubTriggerProps = React.ComponentPropsWithoutRef<
  typeof RadixDropdownMenu.SubTrigger
> & {
  className?: string;
};

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.SubTrigger>,
  DropdownMenuSubTriggerProps
>(({ className, children, ...props }, ref) => (
  <RadixDropdownMenu.SubTrigger
    ref={ref}
    className={twMerge(
      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[highlighted]:bg-surface-muted data-[highlighted]:text-text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=open]:bg-surface-muted",
      className
    )}
    {...props}
  >
    {children}
    <svg
      width="12"
      height="12"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-auto"
      aria-hidden="true"
    >
      <path
        d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  </RadixDropdownMenu.SubTrigger>
));
DropdownMenuSubTrigger.displayName = "DropdownMenu.SubTrigger";

type DropdownMenuSubContentProps = React.ComponentPropsWithoutRef<
  typeof RadixDropdownMenu.SubContent
> & {
  className?: string;
};

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.SubContent>,
  DropdownMenuSubContentProps
>(({ className, ...props }, ref) => (
  <RadixDropdownMenu.Portal>
    <RadixDropdownMenu.SubContent
      ref={ref}
      sideOffset={2}
      className={twMerge(
        "z-50 min-w-[10rem] overflow-hidden rounded-md border border-border/40 bg-surface p-1 text-text-primary shadow-md",
        className
      )}
      {...props}
    />
  </RadixDropdownMenu.Portal>
));
DropdownMenuSubContent.displayName = "DropdownMenu.SubContent";

export const DropdownMenu = Object.assign(DropdownMenuRoot, {
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  Separator: DropdownMenuSeparator,
  Label: DropdownMenuLabel,
  Group: DropdownMenuGroup,
  Sub: DropdownMenuSub,
  SubTrigger: DropdownMenuSubTrigger,
  SubContent: DropdownMenuSubContent,
});

# Changelog

## 1.2.0

### Added

- **Sheet** — Slide-in panel (drawer) built on Radix Dialog, with configurable side (top/right/bottom/left) and width (sm/md/lg/xl/full)
- **Command** — Keyboard-driven command palette with search filtering, arrow key navigation, groups, and empty state
- **Progress** — Progress bar built on Radix Progress, with value/indeterminate states and intent variants (brand/success/warning/danger/info)
- **Slider** — Range slider built on Radix Slider, with single and multi-thumb support and sm/md/lg sizes
- **Avatar** — Avatar built on Radix Avatar, with image + fallback support, circle/rounded variants, and sm/md/lg/xl sizes
- **Accordion** — Expandable sections built on Radix Accordion, with single/multiple modes and default/bordered/ghost variants
- **Breadcrumbs** — Breadcrumb navigation with auto `aria-current` on last item and customizable separators
- **Pagination** — Page navigation with previous/next buttons, ellipsis for large page counts, and sm/md/lg sizes
- **VisuallyHidden** — Re-export of Radix VisuallyHidden for accessible hidden content
- **Slot** — Re-export of Radix Slot for polymorphic `asChild` composition

### Changed

- Added `ResizeObserver` polyfill to test setup for Slider component compatibility

## 1.1.0

### Added

- **Label** — Accessible form label built on Radix Label, with `required` indicator
- **Badge** — Non-interactive status badge with 3 variants (solid, outline, subtle) and 6 intents (neutral, brand, success, danger, warning, info)
- **Skeleton** — Loading placeholder with text, circle, and rectangle shape variants
- **Switch** — Toggle switch built on Radix Switch, with label support and sm/md/lg sizes
- **RadioGroup** — Radio button group built on Radix RadioGroup, with arrow key navigation and label per item
- **Tooltip** — Hover/focus tooltip built on Radix Tooltip, with configurable side and align
- **Popover** — Click-triggered popover panel built on Radix Popover, with built-in close button and Escape-to-dismiss
- **DropdownMenu** — Full dropdown menu built on Radix DropdownMenu, with items, separators, labels, groups, and nested submenus

### Changed

- Button: Replaced `disabled:pointer-events-none` with `disabled:cursor-not-allowed` per library standard
- Tabs: Replaced `disabled:pointer-events-none` with `disabled:cursor-not-allowed` per library standard

### Fixed

- Added `cursor-pointer` to all interactive elements across Button, Select, Tabs, RadioGroup, Switch, Popover, DropdownMenu, AlertDialog, Modal, and Toast components

## 1.0.1

_Initial release with Button, Card, Input, Checkbox, Select, Spinner, Tabs, Table, Textarea, AlertDialog, Modal, and Toast components._

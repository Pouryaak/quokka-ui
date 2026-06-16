# Accessibility Standards

Reference for building accessible components in Quokka UI. Load this skill when implementing any component that users interact with.

## Core Principle

Accessibility is not additive — it's foundational. Every Quokka UI component starts from Radix primitives (which guarantee ARIA compliance), then we ensure that additional styling and behavior don't break it.

<role_requirements>
## Element Roles

Every interactive element MUST have the correct role. Radix primitives handle this automatically. When building custom interactive elements:

| Element | Appropriate Role | Example |
|---|---|---|
| Clickable button | `role="button"` | `<div role="button" tabIndex={0}>` |
| Navigation links | `<a href>` (implicit) | `<a href="/page">` |
| Toggle/switch | `role="switch"` | `<button role="switch">` |
| Checkbox list | `role="checkbox"` or `<input type="checkbox">` | |
| Radio group | `role="radiogroup"` wrapping `role="radio"` | |
| Tab list | `role="tablist"` wrapping `role="tab"` | |
| Dialog/modal | `role="dialog"` or `role="alertdialog"` | |
| Notification | `role="status"` (polite) or `role="alert"` (assertive) | |
| Menu | `role="menu"` wrapping `role="menuitem"` | |
| Listbox | `role="listbox"` wrapping `role="option"` | |
| Combobox | `role="combobox"` | |
| Tooltip | `role="tooltip"` | |

**Rule:** If an element has an onClick, it needs an accessible role and keyboard handler.
</role_requirements>

<keyboard_nav>
## Keyboard Navigation

| Key | Expected Behavior |
|---|---|
| **Tab** | Moves focus to next interactive element |
| **Shift+Tab** | Moves focus to previous interactive element |
| **Enter** | Activates button/link |
| **Space** | Activates button, toggles checkbox |
| **Escape** | Closes dialog/dropdown/modal |
| **Arrow keys** | Navigate within menus, tabs, selects, sliders |
| **Home/End** | Move to first/last item in list |
| **Arrow Up/Down** | Navigate vertical menus/lists |
| **Arrow Left/Right** | Navigate horizontal tabs/menus |

### Implementation rules:
- Non-button clickable elements (divs, spans) MUST have `tabIndex={0}` and `onKeyDown` for Enter+Space
- Dialogs MUST trap focus and close on Escape
- Dropdowns MUST close on Escape and manage arrow key navigation
- Disabled elements MUST have `tabIndex={-1}` and block keyboard events
</keyboard_nav>

<focus_management>
## Focus Management

### Focus Ring (required on ALL interactive elements):
```css
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2
```
- Uses `focus-visible` (not `focus`) — only shows ring on keyboard focus, not mouse click
- Ring color is `--color-brand` for consistency
- Ring offset creates a gap between element and ring

### Focus Trap (for modals, dialogs):
Radix handles focus trapping automatically via `Dialog.Portal`, `AlertDialog.Portal`, etc. Do NOT implement custom focus trapping.

### Focus Restoration (after closing):
Radix restores focus to the trigger element automatically. No action needed.
</focus_management>

<accessible_names>
## Accessible Names

Every interactive element MUST have an accessible name. Priority order:

1. **Visible text content** (best):
   ```tsx
   <button>Delete</button>
   ```

2. **aria-label** (for icon-only controls):
   ```tsx
   <button aria-label="Close dialog">
     <XIcon aria-hidden="true" />
   </button>
   ```

3. **aria-labelledby** (for elements labeled by another element):
   ```tsx
   <h2 id="dialog-title">Confirm Delete</h2>
   <div role="dialog" aria-labelledby="dialog-title">
   ```

4. **aria-describedby** (for supplementary descriptions):
   ```tsx
   <input aria-describedby="email-help" />
   <p id="email-help">We'll never share your email.</p>
   ```
</accessible_names>

<aria_attributes>
## Key ARIA Attributes

| Attribute | When to Use |
|---|---|
| `aria-label` | Icon-only buttons, elements without visible text |
| `aria-labelledby` | Elements labeled by another element's text |
| `aria-describedby` | Supplementary descriptions for form fields |
| `aria-busy="true"` | Element is loading/processing |
| `aria-disabled="true"` | Non-form element is disabled (used alongside visual disabled state) |
| `aria-expanded` | Disclosure widgets: dropdown, accordion, popover |
| `aria-haspopup` | Element opens a popup: menu, listbox, dialog |
| `aria-selected` | Selected item in a list (tabs, options) |
| `aria-checked` | Checkbox/radio/toggle state |
| `aria-hidden="true"` | Decorative elements (icons, separators) |
| `aria-live="polite"` | Content that updates dynamically (status messages) |
| `aria-live="assertive"` | Urgent notifications (errors, alerts) |
| `aria-modal="true"` | Modal dialog (blocks interaction with rest of page) |
</aria_attributes>

<color_contrast>
## Color Contrast

- Text must have 4.5:1 contrast against background (minimum for AA compliance)
- Large text (18px+ bold or 24px+ regular) needs 3:1 contrast
- Icons and form borders need 3:1 contrast
- Quokka UI tokens are designed with contrast in mind — using existing tokens guarantees compliance
- When creating new tokens, ensure both light and dark variants meet contrast ratios
</color_contrast>

<common_violations>
## Common Accessibility Violations (and Fixes)

| Violation | Fix |
|---|---|
| Button has no accessible name | Add text or `aria-label` |
| Icon-only button not labeled | Add `aria-label` + `aria-hidden` on icon |
| Link has no href (fake button) | Use `<button>` instead, or add `role="button"` |
| Click handler on non-interactive element | Add `role`, `tabIndex={0}`, keyboard handler |
| Color-only information indicator | Add text label or icon |
| Missing focus indicator | Add `focus-visible:ring-*` classes |
| Disabled state not keyboard-accessible | `tabIndex={-1}` and block Enter/Space |
| Missing form labels | Use `<label>` + `htmlFor` or wrap input |
| Dialog without accessible name | `aria-labelledby` pointing to title |
| Live region not working | Use `aria-live="polite"` with dynamic content |
</common_violations>

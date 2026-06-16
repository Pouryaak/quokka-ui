# Testing Patterns

Reference for writing Vitest tests in Quokka UI. Load this skill when writing or reviewing component tests.

## Test Stack

```
Vitest (runner) + React Testing Library (queries) + vitest-axe (a11y) + userEvent (interactions)
```

<setup>
## Test Setup

`tests/setupTests.ts` runs before every test file:
```tsx
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import "vitest-axe/extend-expect";

afterEach(() => cleanup());
```

This means:
- DOM is cleaned up between tests automatically
- jest-dom matchers are available globally
- `toHaveNoViolations()` axe matcher is available
</setup>

<query_priority>
## Query Priority

Always follow this priority when selecting elements. Use the FIRST one that works:

1. **getByRole** (best — tests accessibility and behavior):
   ```tsx
   screen.getByRole("button", { name: "Submit" })
   screen.getByRole("textbox", { name: "Email" })
   screen.getByRole("dialog", { name: "Confirm Delete" })
   screen.getByRole("combobox")
   screen.getByRole("tab", { selected: true })
   ```

2. **getByLabelText** (for form inputs):
   ```tsx
   screen.getByLabelText("Email address")
   ```

3. **getByText** (for non-interactive text):
   ```tsx
   screen.getByText("Welcome back")
   screen.getByText(/welcome/i)
   ```

4. **getByTestId** (last resort — escape hatch):
   ```tsx
   screen.getByTestId("submit-button")
   ```
   Only use `data-testid` when no other query works. Prefer accessible queries.
</query_priority>

<test_structure>
## Test File Structure

```tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import { ComponentName } from "./ComponentName";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("ComponentName", () => {
  // 1. Rendering tests
  describe("rendering", () => {
    it("renders with default props", () => {
      render(<ComponentName>Content</ComponentName>);
      expect(screen.getByRole("...")).toBeInTheDocument();
    });
  });

  // 2. Accessibility tests
  describe("accessibility", () => {
    it("has no axe violations", async () => {
      const { container } = render(<ComponentName>Content</ComponentName>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  // 3. Interaction tests
  describe("interaction", () => {
    it("handles click", async () => {
      const onClick = vi.fn();
      const user = userEvent.setup();
      render(<ComponentName onClick={onClick}>Click</ComponentName>);
      await user.click(screen.getByRole("button"));
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  // 4. State tests
  describe("states", () => {
    it("renders disabled state", () => {
      render(<ComponentName disabled>Content</ComponentName>);
      expect(screen.getByRole("...")).toBeDisabled();
    });
  });
});
```
</test_structure>

<user_event>
## userEvent vs fireEvent

**Always use `userEvent`.** It simulates real user interactions (multiple events, focus changes, etc.):

```tsx
// ✅ Correct — simulates real user behavior
const user = userEvent.setup();
await user.click(button);
await user.type(input, "hello");
await user.keyboard("{Enter}");
await user.tab();

// ❌ Avoid — fires a single synthetic event
fireEvent.click(button);
```

Use `fireEvent` ONLY when testing a raw event handler that `userEvent` can't trigger (rare).
</user_event>

<axe_testing>
## Accessibility Testing with vitest-axe

Every component MUST have axe tests covering:
1. Default state
2. Disabled state (if applicable)
3. Error state (if applicable)
4. Loading state (if applicable)

```tsx
describe("ComponentName accessibility", () => {
  it("has no axe violations in default state", async () => {
    const { container } = render(<ComponentName>Hello</ComponentName>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("has no axe violations when disabled", async () => {
    const { container } = render(<ComponentName disabled>Hello</ComponentName>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

**Portals:** Components rendering into portals (Radix modals, selects, toasts) may need `axe()` called with `document` or a specific container. Use `baseElement` from render:

```tsx
const { baseElement } = render(<Modal open>Content</Modal>);
const results = await axe(baseElement);
expect(results).toHaveNoViolations();
```
</axe_testing>

<common_patterns>
## Common Test Patterns

### Testing disabled state:
```tsx
it("does not fire onClick when disabled", async () => {
  const onClick = vi.fn();
  const user = userEvent.setup();
  render(<Button disabled onClick={onClick}>Click</Button>);
  await user.click(screen.getByRole("button"));
  expect(onClick).not.toHaveBeenCalled();
});
```

### Testing keyboard activation:
```tsx
it("activates with Enter key", async () => {
  const onClick = vi.fn();
  const user = userEvent.setup();
  render(<Button onClick={onClick}>Press</Button>);
  screen.getByRole("button").focus();
  await user.keyboard("{Enter}");
  expect(onClick).toHaveBeenCalledTimes(1);
});
```

### Testing ref forwarding:
```tsx
it("forwards ref", () => {
  const ref = React.createRef<HTMLButtonElement>();
  render(<Button ref={ref}>Focus</Button>);
  ref.current?.focus();
  expect(document.activeElement).toBe(ref.current);
});
```

### Testing accessible name:
```tsx
it("has accessible name from children", () => {
  render(<Button>Save</Button>);
  expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
});

it("has accessible name from aria-label", () => {
  render(<Button aria-label="Close"><XIcon /></Button>);
  expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
});
```

### Testing async behavior:
```tsx
it("shows content after loading", async () => {
  render(<AsyncComponent />);
  expect(screen.getByRole("status")).toBeInTheDocument();
  expect(await screen.findByText("Loaded")).toBeInTheDocument();
});
```
</common_patterns>

<running_tests>
## Running Tests

```bash
pnpm test              # Run all tests
pnpm test -- <file>    # Run specific test file
pnpm test:watch        # Watch mode
pnpm coverage          # Coverage report
```
</running_tests>

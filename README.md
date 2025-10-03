# Quokka UI

> Token-driven React UI components with accessible patterns, SSR-friendly theming, and a clean, extensible API.
> Built with Tailwind v4 + CSS variables. Dark/light by design.

<p align="left">
  <a href="https://www.npmjs.com/package/quokka-ui"><img src="https://img.shields.io/npm/v/quokka-ui.svg?label=quokka-ui&color=%2358cc80" alt="npm version"></a>
  <img src="https://img.shields.io/badge/react-18%2B%20%2F%2019-black?logo=react" alt="react">
  <img src="https://img.shields.io/badge/ssr-friendly-1f2937" alt="ssr friendly">
  <img src="https://img.shields.io/badge/a11y-first-0ea5e9" alt="accessibility">
</p>

---

## Table of contents

- [Why Quokka UI](#why-quokka-ui)
- [Install](#install)
- [Setup](#setup)

  - [1) Base styles & tokens](#1-base-styles--tokens)
  - [2) Dark mode](#2-dark-mode)
  - [3) Tailwind (optional)](#3-tailwind-optional)

- [Usage](#usage)

  - [Button](#button)
  - [Input](#input)
  - [Checkbox](#checkbox)
  - [Select](#select)
  - [Tabs](#tabs)
  - [Table](#table)
  - [Spinner](#spinner)

- [Accessibility](#accessibility)
- [SSR & Theming](#ssr--theming)
- [Tree-shaking](#tree-shaking)
- [Storybook Docs](#storybook-docs)
- [Contributing](#contributing)
- [License](#license)

---

## Why Quokka UI

- **Token-driven** – every color/space/typography unit comes from CSS variables.
- **A11y-first** – native semantics, ARIA where needed, motion-safe patterns, visible focus.
- **SSR-friendly** – no client-only visual flips; dark/light works with a single attribute.
- **Composable** – headless where it matters, lightweight styling via Tailwind utilities.
- **Pragmatic** – minimal API surface, predictable variants, easy to extend.

---

## Install

```bash
npm i @poak-dev/quokka-ui
# or
pnpm add @poak-dev/quokka-ui
# or
yarn add @poak-dev/quokka-ui
```

Peer deps (typical app already has these):

- `react` 18/19
- For some components: `@radix-ui/react-select`, `@radix-ui/react-tabs`, `@radix-ui/react-icons`

---

## Setup

### 1) Base styles & tokens

If you’re using Tailwind v4 (recommended), add the tokens once in your global CSS. If you don’t use Tailwind, you can still copy the same CSS variables.

```css
/* app.css (loaded once in your app) */
@theme {
  --color-brand: hsl(140, 50%, 60%);
  --color-brand-muted: hsl(140, 50%, 95%);
  --color-surface: hsl(0, 0%, 100%);
  --color-surface-muted: hsl(220, 13%, 95%);
  --color-text-primary: hsl(220, 10%, 20%);
  --color-text-muted: hsl(220, 8%, 45%);
  --color-border: hsl(220, 10%, 85%);
}

:root[data-theme="dark"] {
  --color-brand: hsl(140, 45%, 65%);
  --color-brand-muted: hsl(140, 20%, 15%);
  --color-surface: hsl(220, 15%, 10%);
  --color-surface-muted: hsl(220, 15%, 15%);
  --color-text-primary: hsl(220, 15%, 95%);
  --color-text-muted: hsl(220, 10%, 65%);
  --color-border: hsl(220, 10%, 30%);
}

html,
body,
#root {
  height: 100%;
}
body {
  background: var(--color-surface);
  color: var(--color-text-primary);
}
```

If you plan to ship these tokens from the package as `styles.css`, you can also `import 'quokka-ui/styles.css'` once in your app instead of copying.

### 2) Dark mode

Toggle by setting an attribute on the root element:

```tsx
// Example theme toggle
document.documentElement.setAttribute("data-theme", "dark"); // or 'light'
```

Because visuals are pure CSS variables, this works the same in SSR and CSR.

### 3) Tailwind (optional)

Components ship with utility classes. If you want to customize them in-app, enable Tailwind v4.
Minimal Vite setup:

```ts
// vite.config.ts
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({ plugins: [tailwindcss()] });
```

---

## Usage

### Button

```tsx
import { Button } from "quokka-ui";

export function Actions() {
  return (
    <>
      <Button intent="primary">Save</Button>
      <Button intent="secondary">Cancel</Button>
      <Button intent="ghost">More</Button>

      <Button loading>Saving…</Button>
      <Button href="https://example.com">As link</Button>
    </>
  );
}
```

**Props**

| prop        | type                                  | default   | notes                                                        |
| ----------- | ------------------------------------- | --------- | ------------------------------------------------------------ |
| `intent`    | `"primary" \| "secondary" \| "ghost"` | `primary` | visual style                                                 |
| `size`      | `"sm" \| "md" \| "lg"`                | `md`      | control height/padding                                       |
| `loading`   | `boolean`                             | `false`   | disables button, shows spinner + `aria-busy`                 |
| `startIcon` | `ReactNode`                           | —         | decorative icon, hidden from AT                              |
| `endIcon`   | `ReactNode`                           | —         | decorative icon, hidden from AT                              |
| `href`      | `string`                              | —         | renders as `<a>`, uses `aria-disabled` when loading/disabled |

### Input

```tsx
import { Input } from 'quokka-ui';

<Input aria-label="Email" label="Email" placeholder="you@company.com" />
<Input aria-label="Search" variant="subtle" label="Search" helperText="Press / to focus" />
<Input aria-label="Username" label="Username" error="Username is taken" />
```

Key props: `label`, `helperText`, `error`, `variant: 'outline' | 'subtle'`, `size: 'sm'|'md'|'lg'`.

### Checkbox

```tsx
import { Checkbox } from 'quokka-ui';

<Checkbox label="Notify me" />
<Checkbox label="Subscribe" helperText="No spam, unsubscribe anytime." />
<Checkbox label="I agree to the terms" required />
```

Pixel-stable box that doesn’t jump on check. Keyboard + focus ring via the native input.

### Select

Radix-powered, styled trigger/content:

```tsx
import { Select } from "quokka-ui";

<Select defaultValue="apple">
  <Select.Item value="apple">Apple</Select.Item>
  <Select.Item value="orange">Orange</Select.Item>
  <Select.Item value="banana">Banana</Select.Item>
</Select>;
```

### Tabs

```tsx
import { Tabs } from "quokka-ui";

<Tabs defaultValue="account">
  <Tabs.List>
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
    <Tabs.Trigger value="team">Team</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="account">Account panel</Tabs.Content>
  <Tabs.Content value="billing">Billing panel</Tabs.Content>
  <Tabs.Content value="team">Team panel</Tabs.Content>
</Tabs>;
```

Variants: `pill` and `underline` (set per Trigger/List).

### Table

```tsx
import { FinalTable as Table } from "quokka-ui";

<Table frame="framed">
  <Table.Header>
    <Table.Row density="compact">
      <Table.Head>Name</Table.Head>
      <Table.Head>Role</Table.Head>
      <Table.Head>Location</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Ana</Table.Cell>
      <Table.Cell>Engineer</Table.Cell>
      <Table.Cell>Lisbon</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>;
```

Features: zebra rows, sticky header, numeric alignment via `numeric`, density presets.

### Spinner

```tsx
import { Spinner } from 'quokka-ui';

<Spinner />
<Spinner size="sm" />
<Spinner thickness="thick" aria-label="Loading data" />
```

---

## Accessibility

- Buttons/links expose correct roles/states; loading sets `aria-busy`.
- Inputs/checkboxes wire up labels and descriptions (`aria-describedby`).
- Focus states are visible; motion guarded via `prefers-reduced-motion`.
- Radix primitives supply keyboard roving, ARIA, and typeahead where relevant.

See each component’s Storybook docs for a11y notes and edge cases.

---

## SSR & Theming

- Theming is pure CSS variables, toggled with `data-theme` on `<html>`:

  - `document.documentElement.dataset.theme = 'dark'`

- No JS color flips after hydration; SSR output already looks correct.

---

## Tree-shaking

Each component is exported individually. Import only what you use:

```ts
import { Button } from "quokka-ui";
// or deep path if you prefer:
// import { Button } from 'quokka-ui/components/Button';
```

---

## Storybook Docs

Run the local docs to explore props, variants, and a11y:

```bash
pnpm storybook
# http://localhost:6006
```

The landing page (Overview/Introduction) shows live components and theme tokens.

---

## Contributing

1. `pnpm i`
2. `pnpm storybook` to develop components and docs
3. Commit with clear scope: `feat(button): add loading spinner size mapping`
4. Please include unit tests where sensible and accessibility notes in stories.

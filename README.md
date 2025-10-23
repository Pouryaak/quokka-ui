# 🦘 Quokka UI  
**A token-driven React component library focused on accessibility, theming, and developer experience.**

Quokka UI helps you build modern, accessible interfaces with predictable design tokens, Tailwind v4 utilities, and a consistent API.  
Every component is built with **React**, **TypeScript**, and **Radix primitives**, ensuring strong accessibility and composability out of the box.

<p align="left">
  <a href="https://www.npmjs.com/package/quokka-ui"><img src="https://img.shields.io/npm/v/quokka-ui.svg?label=quokka-ui&color=%2358cc80" alt="npm version"></a>
  <img src="https://img.shields.io/badge/react-18%2B%20%2F%2019-black?logo=react" alt="react">
  <img src="https://img.shields.io/badge/ssr-friendly-1f2937" alt="ssr friendly">
  <img src="https://img.shields.io/badge/a11y-first-0ea5e9" alt="accessibility">
</p>

---

## 🚀 Features

- 🎨 **Token-driven design** – built on CSS variables and Tailwind v4 theme tokens for instant dark/light mode.
- ♿ **Accessible by default** – components follow WAI-ARIA standards and use Radix primitives under the hood.
- 🧹 **Composable API** – small, reusable pieces designed for flexibility without sacrificing structure.
- ⚡ **Modern stack** – React + TypeScript + Vite + Tailwind v4 + Radix UI.
- 🧱 **Design system ready** – create consistent themes and component tokens that scale across projects.
- 🥪 **Fully tested** – Vitest + React Testing Library ensure stability and confidence in production.
- 📘 **Storybook docs** – preview, test, and explore every component interactively.

---

## 📦 Installation

```bash
# npm
npm install @poak-dev/quokka-ui

# or yarn
yarn add @poak-dev/quokka-ui

# or pnpm
pnpm add @poak-dev/quokka-ui
```

Then import the base styles and start using components:

```tsx
import '@poak-dev/quokka-ui/dist/index.css';
import { Button } from '@poak-dev/quokka-ui';

export function Example() {
  return <Button variant="solid">Click me</Button>;
}
```

---

## 🧬 Theming

Quokka UI uses **CSS variables** for tokens (color, radius, spacing, etc.) and **Tailwind v4** for utilities.  
Switch themes instantly using a single attribute:

```html
<html data-theme="light">
  <!-- or data-theme="dark" -->
</html>
```

You can override any token directly in your global CSS:

```css
:root {
  --color-brand: #4f46e5;
  --radius-lg: 1rem;
}
```

---

## 🧱 Development

Run locally in dev mode:

```bash
pnpm install
pnpm dev
```

Run Storybook:

```bash
pnpm storybook
```

Run tests:

```bash
pnpm test
```

Build the library:

```bash
pnpm build
```

---

## 🧹 Component Philosophy

Each component is:
- **Headless where it matters** (fully controllable with props)
- **Styled with Tailwind v4 utilities**
- **Accessible by default** via Radix primitives
- **Composable and tree-shakeable** with minimal API surface

---

## 🥪 Example Components

- **Button** – variants, sizes, loading state, icons  
- **Input** – label, description, error text  
- **Modal** – overlay, scroll lock, keyboard a11y  
- **Select** – Radix-powered with keyboard navigation  
- **Toast** – stacked notifications with variants and actions  

(See Storybook for full examples.)

---

## 🔧 Tech Stack

| Category | Stack |
|-----------|-------|
| Framework | React + TypeScript |
| Styling | Tailwind v4 + CSS Variables |
| Accessibility | Radix UI primitives |
| Documentation | Storybook |
| Testing | Vitest + React Testing Library |
| Build | Vite |
| Package | pnpm |

---

## 🤝 Contributing

Contributions and feedback are welcome.  
Fork the repo, create a feature branch, and open a pull request.  

Please ensure your changes follow the existing code style and include relevant tests and Storybook stories.

---

## 📄 License

MIT © 2025 [Pourya Akraminayeri](https://www.linkedin.com/in/pourya-akrami-nayeri-4230ba10b/)


# Tailwind v4 Conventions

Reference for using Tailwind CSS v4 in Quokka UI. Load this skill when styling components.

## Setup

Quokka UI uses the **`@tailwindcss/vite` plugin** (NOT PostCSS Tailwind). There is NO `tailwind.config.js` or `postcss.config.js`. Configuration is entirely CSS-first via the `@theme` directive in `src/index.css`.

<css_first_config>
## CSS-First Configuration (v4)

Tailwind v4 replaces `tailwind.config.js` with CSS. All theme values are defined via the `@theme` directive in `src/index.css`:

```css
@theme {
  --color-brand: hsl(139, 66%, 59%);
  --spacing-4: 1rem;
  --font-size-base: 1rem;
}
```

These become available as Tailwind utilities: `bg-brand`, `p-4`, `text-base`.

**Never create `tailwind.config.js`.** It conflicts with the CSS-first approach.
</css_first_config>

<import_pattern>
## Import Pattern

`src/index.css` imports Tailwind at the bottom:
```css
@import "tailwindcss";
```

This must be the LAST statement after all `@theme` blocks and custom CSS.
</import_pattern>

<dark_mode_v4>
## Dark Mode in Tailwind v4

Quokka UI uses `data-theme` for dark mode (not `prefers-color-scheme`). Dark mode is configured via CSS custom properties, not Tailwind's `darkMode` setting. The `dark:` variant works automatically:

```css
:root[data-theme="dark"] {
  --color-surface: hsl(220, 15%, 10%);
}
```

Tailwind v4's `dark:` variant is active by default and maps to the `prefers-color-scheme: dark` media query. To use `data-theme` with the `dark:` variant, no additional configuration is needed since our tokens swap at the CSS level.
</dark_mode_v4>

<utility_patterns>
## Utility Class Patterns

### Layout:
```
flex, inline-flex, grid                      — display
items-center, justify-between                — alignment
gap-3, gap-x-4, gap-y-2                      — gap (maps to spacing tokens)
p-4, px-3, py-2                              — padding
m-0, mx-auto                                 — margin
w-full, w-64, max-w-sm                        — width
h-9, h-10, h-11                               — height
```

### Typography:
```
text-sm, text-base, text-lg                   — font size
font-medium, font-bold                        — font weight
truncate, line-clamp-2                        — text overflow
text-center, text-left                        — text alignment
```

### Visual:
```
rounded-md, rounded-lg, rounded-full          — border radius
border, border-2                              — border width
border-border, border-brand                   — border color (tokens)
bg-surface, bg-brand, bg-surface-muted        — backgrounds (tokens)
text-text-primary, text-text-muted            — text colors (tokens)
shadow-md, shadow-sm                          — box shadows
opacity-50, opacity-60                        — opacity
```

### Interactive:
```
cursor-pointer, cursor-not-allowed            — cursor
hover:bg-brand/80, hover:bg-surface-muted     — hover states
focus-visible:outline-none                    — remove default outline
focus-visible:ring-2                          — custom focus ring
focus-visible:ring-brand                      — focus ring color (token)
focus-visible:ring-offset-2                   — focus ring offset
transition-colors                             — color transitions
duration-200                                  — transition duration
```

### State:
```
disabled:cursor-not-allowed                   — disabled cursor
disabled:opacity-50                           — disabled appearance
aria-disabled:pointer-events-none             — aria-disabled
aria-disabled:opacity-50                      — aria-disabled appearance
```
</utility_patterns>

<arbitrary_values>
## Arbitrary Values in v4

In v4, arbitrary values use bracket notation directly on utilities:
```
p-[var(--toast-padding)]          — references a CSS variable
w-[var(--toast-width)]            — references a token
z-[var(--z-overlay)]              — for custom z-index tokens
mt-[var(--spacing-8)]             — when spacing token ≠ Tailwind scale
```

Use arbitrary values ONLY for referencing design tokens that don't map to Tailwind's scale. Never use raw values: ❌ `bg-[#3b82f6]` ❌ `w-[360px]`.
</arbitrary_values>

<cva_twmerge>
## CVA + twMerge Integration

Always combine CVA for variants and twMerge for className merging:

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const styles = cva("inline-flex items-center rounded-md", {
  variants: {
    variant: {
      primary: "bg-brand text-text-primary",
      secondary: "bg-surface-muted text-text-primary",
    },
    size: {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-4 text-base",
      lg: "h-11 px-8 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

// In component:
const cls = twMerge(styles({ variant, size }), className);
```

**Rules:**
- CVA handles variant combinations → `styles({ variant, size })`
- twMerge handles user overrides → `twMerge(base, userClassName)`
- Order: twMerge(CVA result, user className) — user className wins conflicts
- Never use clsx directly for variant logic; CVA is the standard
</cva_twmerge>

<no_legacy>
## What Does NOT Exist

These Tailwind v3 concepts are GONE in v4:
- ❌ No `tailwind.config.js`
- ❌ No `postcss.config.js`
- ❌ No `@tailwind base/components/utilities` directives
- ❌ No `@apply` (avoid it in v4)
- ❌ No `theme.extend` (use `@theme` in CSS)
- ❌ No `darkMode: "class"` config (use CSS `@media` or `data-theme`)

Do NOT create any of these files or use these patterns.
</no_legacy>

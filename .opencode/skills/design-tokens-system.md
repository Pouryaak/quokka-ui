# Design Tokens System

Reference for Quokka UI's token-driven design system. Load this skill whenever working with colors, spacing, typography, or theming.

## Token Architecture

Quokka UI uses a three-layer token system:

```
Layer 1: Primitive tokens (CSS variables in @theme block)
  → Defined in src/index.css
  → Values: hsl colors, rem sizes, px radii

Layer 2: Semantic tokens (how tokens are USED)
  → --color-brand (not --color-green-500)
  → Names describe purpose, not value

Layer 3: Component tokens (component-specific overrides)
  → --toast-padding, --toast-gap, --toast-width
  → Scoped to specific components
```

<token_reference>
## Complete Token Reference

### Colors
```
--color-brand              → bg-brand, text-brand        — Primary brand actions
--color-brand-muted        → bg-brand-muted              — Subtle brand backgrounds
--color-surface            → bg-surface                  — Page/card backgrounds
--color-surface-muted      → bg-surface-muted            — Secondary surfaces
--color-text-primary       → text-text-primary           — Primary text
--color-text-muted         → text-text-muted             — Secondary text
--color-border             → border-border               — Default borders
--color-danger             → text-danger, bg-danger      — Destructive actions
--color-danger-hover       → hover:bg-danger-hover       — Destructive hover state
--color-danger-muted       → bg-danger-muted             — Destructive backgrounds
--color-danger-foreground  → text-danger-foreground      — Text on danger bg
--color-success            → (for success indicators)
--color-success-muted      → (for success backgrounds)
--color-info               → (for info indicators)
--color-info-muted         → (for info backgrounds)
--color-warning            → (for warning indicators)
--color-warning-muted      → (for warning backgrounds)
```

### Spacing (map to Tailwind's spacing scale)
```
--spacing-1:  0.25rem (4px)     — Tightest gap
--spacing-2:  0.5rem  (8px)     — Tight gap
--spacing-3:  0.75rem (12px)    — Standard gap
--spacing-4:  1rem    (16px)    — Base padding
--spacing-5:  1.25rem (20px)
--spacing-6:  1.5rem  (24px)    — Section gap
--spacing-8:  2rem    (32px)
--spacing-10: 2.5rem  (40px)
--spacing-12: 3rem    (48px)
--spacing-16: 4rem    (64px)
```

### Typography
```
--font-size-xs:     0.75rem     (12px)
--font-size-sm:     0.875rem    (14px)
--font-size-base:   1rem        (16px)
--font-size-lg:     1.125rem    (18px)
--font-size-xl:     1.25rem     (20px)
--font-size-2xl:    1.5rem      (24px)
--font-size-3xl:    1.875rem    (30px)

--font-weight-regular: 400
--font-weight-medium:  500
--font-weight-bold:    700
```

### Radii
```
--radius-sm:   0.25rem   (4px)
--radius-md:   0.5rem    (8px)
--radius-lg:   0.75rem   (12px)
--radius-full: 9999px    (fully rounded)
```

### Motion
```
--motion-duration-2: 180ms
--motion-ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1)
```

### Layout
```
--z-overlay: 1000        — Modals, dialogs, overlays
--z-toast:  1050          — Toasts (above overlays)
--toast-width: 360px
--toast-gap: var(--spacing-3)
--toast-padding: var(--spacing-4)
--overlay-bg: hsla(220, 10%, 5%, 0.5)
--elevation-3: 0 20px 40px rgba(0,0,0,0.18)
```
</token_reference>

<token_usage_rules>
## Token Usage Rules

### DO:
- Use design tokens for ALL visual properties: `bg-brand`, `text-text-primary`, `border-border`
- Use direct token references when Tailwind doesn't map: `var(--z-overlay)`
- Reference tokens from other tokens: `--toast-gap: var(--spacing-3)`

### DO NOT:
- Use raw hex/hsl/rgb values in components: ❌ `bg-[#3b82f6]` ❌ `bg-hsl(139,66%,59%)`
- Use raw px values: ❌ `p-[12px]` → ✅ `p-3` (maps to --spacing-3)
- Use arbitrary Tailwind values: ❌ `bg-[var(--random-color)]` for one-offs
</token_usage_rules>

<dark_mode>
## Dark Mode

Dark mode is implemented via `:root[data-theme="dark"]` in `src/index.css`. All tokens are redefined in the dark block.

**Components do NOT need dark-mode-specific code.** Token overrides happen automatically at the CSS level. If a component genuinely needs different behavior in dark mode (beyond color swaps), use Tailwind's `dark:` prefix — but this should be rare.

### Adding a new token requires BOTH light and dark values:
```css
@theme {
  --color-new-token: hsl(200, 50%, 50%);
}

:root[data-theme="dark"] {
  --color-new-token: hsl(200, 50%, 70%);
}
```
</dark_mode>

<creating_tokens>
## When to Create a New Token

Create a new token ONLY when:
1. No existing token semantically matches the purpose
2. The value is used in 2+ components (not a one-off)
3. It represents a design decision, not a specific color

**Good tokens:** `--color-success`, `--radius-card`, `--spacing-section`
**Bad tokens:** `--color-header-bg`, `--my-custom-blue`, `--special-padding-1`

For a genuinely new semantic token:
1. Add it under `@theme` in `src/index.css`
2. Add the dark mode override under `:root[data-theme="dark"]`
3. Use `hsl()` for colors, `rem` for sizes
</creating_tokens>

<animation_tokens>
## Animation Tokens

Predefined animations available in `src/index.css`:
- `.animate-fade-in` / `.animate-fade-out` — opacity transitions
- `.animate-zoom-in` / `.animate-zoom-out` — scale+opacity (for dialogs/modals)

All use `--motion-duration-2` (180ms) and `--motion-ease-standard`.
</animation_tokens>

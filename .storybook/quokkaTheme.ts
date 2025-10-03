// // .storybook/quokkaTheme.ts
// import { create } from "storybook/theming";

// const brand = {
//   orange: "#F15A29",
//   brown: "#1cf73c",
//   ink: "#14110F",
//   fog: "#F7F6F5",
// };

// export const quokkaLight = create({
//   base: "light",

//   brandTitle: "Quokka UI",
//   brandUrl: "https://your-domain.com",
//   brandImage: "/brand/qoukka.svg",
//   brandTarget: "_self",

//   colorPrimary: brand.brown,
//   colorSecondary: brand.orange,

//   appBg: "#FFFFFF",
//   appContentBg: "#FFFFFF",
//   appBorderColor: "rgba(0,0,0,0.08)",
//   appBorderRadius: 12,

//   textColor: brand.ink,
//   textInverseColor: "#FFFFFF",

//   fontBase: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI",
//   fontCode: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",

//   barTextColor: "rgba(20,17,15,0.75)",
//   barSelectedColor: brand.orange,
//   barBg: brand.fog,
// });

// export const quokkaDark = create({
//   base: "dark",

//   brandTitle: "Quokka UI",
//   brandUrl: "https://your-domain.com",
//   brandImage: "/brand/qoukka.svg",
//   brandTarget: "_self",

//   colorPrimary: brand.orange,
//   colorSecondary: brand.orange,

//   appBg: "#0B0F14",
//   appContentBg: "#0F141A",
//   appBorderColor: "rgba(255,255,255,0.08)",
//   appBorderRadius: 12,

//   textColor: "#EAE7E5",
//   textInverseColor: "#0B0F14",

//   fontBase: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI",
//   fontCode: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",

//   barTextColor: "rgba(234,231,229,0.8)",
//   barSelectedColor: brand.orange,
//   barBg: "#0F141A",
// });

// .storybook/quokkaTheme.ts
import { create } from "storybook/theming";

/**
 * Match your design tokens:
 * light  -> :root { --color-... }
 * dark   -> :root[data-theme="dark"] { --color-... }
 */
const tokens = {
  light: {
    brand: "hsl(139 66% 59%)", // --color-brand
    brandMuted: "hsl(140 50% 95%)", // --color-brand-muted
    surface: "hsl(0 0% 100%)", // --color-surface
    surfaceMuted: "hsl(220 13% 95%)", // --color-surface-muted
    text: "hsl(220 10% 20%)", // --color-text-primary
    textMuted: "hsl(220 8% 45%)", // --color-text-muted
    border: "hsl(220 10% 85%)", // --color-border
  },
  dark: {
    brand: "hsl(139 47% 51%)",
    brandMuted: "hsl(140 20% 15%)",
    surface: "hsl(220 15% 10%)",
    surfaceMuted: "hsl(220 15% 15%)",
    text: "hsl(220 15% 95%)",
    textMuted: "hsl(220 10% 65%)",
    border: "hsl(220 10% 30%)",
  },
};

/** ---------- Manager (sidebar/topbar) themes ---------- */
export const quokkaLight = create({
  base: "light",

  brandTitle: "Quokka UI",
  brandUrl: "https://your-domain.com",
  brandImage: "/brand/quokka.svg",
  brandTarget: "_self",

  colorPrimary: tokens.light.brand,
  colorSecondary: tokens.light.brand,

  appBg: tokens.light.surface,
  appContentBg: tokens.light.surface,
  appBorderColor: tokens.light.border,
  appBorderRadius: 12,

  textColor: tokens.light.text,
  textInverseColor: "#ffffff",

  fontBase: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI",
  fontCode: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",

  barBg: tokens.light.surfaceMuted,
  barTextColor: tokens.light.textMuted,
  barSelectedColor: tokens.light.brand,
});

export const quokkaDark = create({
  base: "dark",

  brandTitle: "Quokka UI",
  brandUrl: "https://your-domain.com",
  brandImage: "/brand/quokka.svg", // white/mono mark recommended on dark
  brandTarget: "_self",

  colorPrimary: tokens.dark.brand,
  colorSecondary: tokens.dark.brand,

  appBg: tokens.dark.surface,
  appContentBg: tokens.dark.surface,
  appBorderColor: tokens.dark.border,
  appBorderRadius: 12,

  textColor: tokens.dark.text,
  textInverseColor: tokens.dark.surface,

  fontBase: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI",
  fontCode: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",

  barBg: tokens.dark.surfaceMuted,
  barTextColor: tokens.dark.textMuted,
  barSelectedColor: tokens.dark.brand,
});

/** ---------- Docs themes (used by ArgsTable, MDX, etc.) ---------- */
export const quokkaDocsLight = create({
  base: "light",
  brandTitle: "Quokka UI",
  colorPrimary: tokens.light.brand,
  colorSecondary: tokens.light.brand,
  appBg: tokens.light.surface,
  appContentBg: tokens.light.surface,
  appBorderColor: tokens.light.border,
  textColor: tokens.light.text,
  barBg: tokens.light.surfaceMuted,
  barTextColor: tokens.light.textMuted,
  inputBg: tokens.light.surface,
  inputBorder: tokens.light.border,
});

export const quokkaDocsDark = create({
  base: "dark",
  brandTitle: "Quokka UI",
  colorPrimary: tokens.dark.brand,
  colorSecondary: tokens.dark.brand,
  appBg: tokens.dark.surface,
  appContentBg: tokens.dark.surface,
  appBorderColor: tokens.dark.border,
  textColor: tokens.dark.text,
  barBg: tokens.dark.surfaceMuted,
  barTextColor: tokens.dark.textMuted,
  inputBg: tokens.dark.surface,
  inputBorder: tokens.dark.border,
});

/** Helper for preview.ts */
export const getDocsTheme = (mode: "light" | "dark") =>
  mode === "dark" ? quokkaDocsDark : quokkaDocsLight;

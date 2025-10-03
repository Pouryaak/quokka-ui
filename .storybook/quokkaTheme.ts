import { create } from "storybook/theming";

const tokens = {
  light: {
    brand: "hsl(139 66% 59%)",
    brandMuted: "hsl(140 50% 95%)",
    surface: "hsl(0 0% 100%)",
    surfaceMuted: "hsl(220 13% 95%)",
    text: "hsl(220 10% 20%)",
    textMuted: "hsl(220 8% 45%)",
    border: "hsl(220 10% 85%)",
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

export const quokkaLight = create({
  base: "light",

  brandTitle: "Quokka UI",
  brandUrl: "https://pouryaak.github.io/quokka-ui",
  brandImage: "brand/quokka.svg",
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
  brandUrl: "https://pouryaak.github.io/quokka-ui",
  brandImage: "brand/quokka.svg",
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

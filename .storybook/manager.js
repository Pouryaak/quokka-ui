// .storybook/manager.ts
import { addons } from "storybook/manager-api";
import { quokkaLight, quokkaDark } from "./quokkaTheme";

addons.setConfig({
  theme: quokkaDark,
});

// const KEY = "quokka-manager-theme";

// const apply = (mode) =>
//   addons.setConfig({ theme: mode === "dark" ? quokkaDark : quokkaLight });

// const stored = localStorage.getItem(KEY) || null;
// const systemDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;

// apply(stored ?? (systemDark ? "dark" : "light"));

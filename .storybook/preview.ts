import type { Preview } from "@storybook/react-vite";
import {
  withThemeByClassName,
  withThemeByDataAttribute,
} from "@storybook/addon-themes";
import "../src/index.css";
import { themes } from "storybook/theming";
import { getDocsTheme } from "./quokkaTheme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "transparent",
      values: [{ name: "transparent", value: "transparent" }],
    },
  },
  decorators: [
    withThemeByDataAttribute({
      attributeName: "data-theme",
      themes: { light: "light", dark: "dark" },
      defaultTheme: "light",
      parentSelector: "html",
    }),
  ],
};

export default preview;

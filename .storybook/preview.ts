import type { Preview } from "@storybook/react-vite";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../src/index.css";

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
    options: {
      storySort: {
        order: [
          "Introduction",
          ["Welcome", "Installation", "Changelog"],

          "Components",
          [
            "Button",
            "Card",
            "Checkbox",
            "Input",
            "Select",
            "Table",
            "Tabs",
            "Textarea",
          ],

          "Feedback",
          ["Spinner"],
        ],
        method: "alphabetical",
        includeNames: true,
      },
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

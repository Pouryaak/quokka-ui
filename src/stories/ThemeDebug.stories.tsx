// File: src/stories/ThemeDebug.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

function read(name: string) {
  const de = document.documentElement;
  const be = document.body;
  const vDe = getComputedStyle(de).getPropertyValue(name).trim();
  const vBe = getComputedStyle(be).getPropertyValue(name).trim();
  return { vDe, vBe };
}

const ThemeDebug = () => {
  const de = document.documentElement;
  const be = document.body;

  const colorSurface = read("--color-surface");
  const colorBrand = read("--color-brand");

  return (
    <div style={{ padding: 16 }}>
      <h3>Theme Debug</h3>
      <pre style={{ whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
        {JSON.stringify(
          {
            iframeHtmlClass: de.className,
            iframeHtmlDataTheme: de.getAttribute("data-theme"),
            bodyClass: be.className,
            tokens: {
              "--color-surface": colorSurface,
              "--color-brand": colorBrand,
            },
          },
          null,
          2
        )}
      </pre>
      <div
        style={{
          marginTop: 12,
          padding: 12,
          borderRadius: 8,
          background: "var(--color-surface-muted)",
          border: "1px solid var(--color-border)",
        }}
      >
        Probe: bg uses tokens. Toggle the toolbar theme.
      </div>
    </div>
  );
};

export default {
  title: "Dev/Theme Debug",
  component: ThemeDebug,
  parameters: { layout: "centered" },
} satisfies Meta<typeof ThemeDebug>;

export const Debug: StoryObj = {};

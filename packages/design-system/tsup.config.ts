import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["./src/index.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  external: [
    "react",
    "react-dom",
    "@tanstack/react-router",
    "@repo/styled-system",
  ],
  banner: {
    js: "'use client'",
  },
  ...options,
}));

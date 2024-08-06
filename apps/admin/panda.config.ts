import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  jsxFramework: "react",

  include: ["../../packages/design-system/src/**/*.tsx", "./src/**/*.{ts,tsx}"],
  importMap: "@repo/styled-system",
  outdir: "../../packages/styled-system",
});

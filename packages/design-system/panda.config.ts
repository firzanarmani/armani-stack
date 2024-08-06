import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  jsxFramework: "react",

  theme: {
    extend: {},
  },

  include: ["./src/**/*.{ts,tsx}"],
  outdir: "../styled-system",
  outExtension: "js",
});

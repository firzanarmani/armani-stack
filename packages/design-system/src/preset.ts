import { definePreset } from "@pandacss/dev";
import { buttonRecipe } from "./primitives/button.recipe";

export const preset = definePreset({
  name: "@repo/preset",
  theme: {
    recipes: {
      button: buttonRecipe,
    },
  },
});

import { ark } from "@ark-ui/react/factory";
import { styled } from "@repo/styled-system/jsx";
import { button } from "@repo/styled-system/recipes";
import { type ComponentProps } from "react";

export const Button = styled(ark.button, button);
export type ButtonProps = ComponentProps<typeof Button>;

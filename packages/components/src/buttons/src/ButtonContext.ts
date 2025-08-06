import { createContext } from "react";

import type { ButtonProps } from "./Button";
import type { ContextValue } from "react-aria-components";

export const ButtonContext = createContext<ContextValue<Partial<ButtonProps>, HTMLButtonElement>>(
    {}
);

ButtonContext.displayName = "ButtonContext";

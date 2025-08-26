import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { ButtonProps } from "./Button";

export const ButtonContext = createContext<ContextValue<Partial<ButtonProps>, HTMLButtonElement>>(
    {}
);

ButtonContext.displayName = "ButtonContext";

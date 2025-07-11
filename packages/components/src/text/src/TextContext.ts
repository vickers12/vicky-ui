import { createContext } from "react";

import type { TextProps } from "./Text.tsx";
import type { ContextValue } from "react-aria-components";

export const TextContext = createContext<ContextValue<Partial<TextProps>, HTMLSpanElement>>({});

TextContext.displayName = "TextContext";

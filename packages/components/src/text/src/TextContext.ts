import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { TextProps } from "./Text";

export const TextContext = createContext<ContextValue<Partial<TextProps>, HTMLSpanElement>>({});

TextContext.displayName = "TextContext";

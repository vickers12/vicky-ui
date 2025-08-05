import { createContext } from "react";

import type { InlineProps } from "./Inline";
import type { ContextValue } from "react-aria-components";

export const InlineContext = createContext<ContextValue<Partial<InlineProps>, HTMLDivElement>>({});

InlineContext.displayName = "InlineContext";

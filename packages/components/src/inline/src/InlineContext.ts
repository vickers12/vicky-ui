import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { InlineProps } from "./Inline";

export const InlineContext = createContext<ContextValue<Partial<InlineProps>, HTMLDivElement>>({});

InlineContext.displayName = "InlineContext";

import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { StackProps } from "./Stack";

export const StackContext = createContext<ContextValue<Partial<StackProps>, HTMLDivElement>>({});

StackContext.displayName = "StackContext";

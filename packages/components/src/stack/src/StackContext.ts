import { createContext } from "react";

import type { StackProps } from "./Stack";
import type { ContextValue } from "react-aria-components";

export const StackContext = createContext<ContextValue<Partial<StackProps>, HTMLDivElement>>({});

StackContext.displayName = "StackContext";

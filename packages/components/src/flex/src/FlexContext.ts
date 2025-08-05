import { createContext } from "react";

import type { FlexProps } from "./Flex";
import type { ContextValue } from "react-aria-components";

export const FlexContext = createContext<ContextValue<Partial<FlexProps>, HTMLDivElement>>({});

FlexContext.displayName = "FlexContext";

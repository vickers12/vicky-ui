import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { FlexProps } from "./Flex";

export const FlexContext = createContext<ContextValue<Partial<FlexProps>, HTMLDivElement>>({});

FlexContext.displayName = "FlexContext";

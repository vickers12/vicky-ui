import { createContext } from "react";

import type { GridProps } from "./Grid";
import type { ContextValue } from "react-aria-components";

export const GridContext = createContext<ContextValue<Partial<GridProps>, HTMLDivElement>>({});

GridContext.displayName = "GridContext";

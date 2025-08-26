import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { GridProps } from "./Grid";

export const GridContext = createContext<ContextValue<Partial<GridProps>, HTMLDivElement>>({});

GridContext.displayName = "GridContext";

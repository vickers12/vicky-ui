import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { IconProps } from "./Icon";

export const IconContext = createContext<ContextValue<Partial<IconProps>, SVGSVGElement>>({});

IconContext.displayName = "IconContext";

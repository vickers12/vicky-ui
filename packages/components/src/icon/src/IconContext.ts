import { createContext } from "react";

import type { IconProps } from "./Icon";
import type { ContextValue } from "react-aria-components";

export const IconContext = createContext<ContextValue<Partial<IconProps>, SVGSVGElement>>({});

IconContext.displayName = "IconContext";

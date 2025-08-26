import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { HeadingProps } from "./Heading";

export const HeadingContext = createContext<
    ContextValue<Partial<HeadingProps>, HTMLHeadingElement>
>({});

HeadingContext.displayName = "HeadingContext";

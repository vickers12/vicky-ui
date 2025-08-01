import { createContext } from "react";

import type { HeadingProps } from "./Heading.tsx";
import type { ContextValue } from "react-aria-components";

export const HeadingContext = createContext<
    ContextValue<Partial<HeadingProps>, HTMLHeadingElement>
>({});

HeadingContext.displayName = "HeadingContext";

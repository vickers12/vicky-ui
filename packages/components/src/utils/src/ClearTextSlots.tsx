import type { PropsWithChildren } from "react";
import { TextContext as RACTextContext } from "react-aria-components";

import { TextContext } from "../../text";

import { ClearProviders } from "./ClearProviders";

export function ClearTextSlots({ children }: PropsWithChildren) {
    return <ClearProviders values={[RACTextContext, TextContext]}>{children}</ClearProviders>;
}

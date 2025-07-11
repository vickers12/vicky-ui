import type { PropsWithChildren } from "react";
import { TextContext as RACTextContext } from "react-aria-components";
import { ClearProviders } from "./ClearProviders.tsx";
import { TextContext } from "../../text/index.ts";

export function ClearTextSlots({ children }: PropsWithChildren) {
    return <ClearProviders values={[RACTextContext, TextContext]}>{children}</ClearProviders>;
}

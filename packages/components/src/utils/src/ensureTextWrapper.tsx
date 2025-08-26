import type { ReactNode } from "react";

import { Text } from "../../text";

import { isTextOnlyChildren } from "./isTextOnlyChildren";

export function ensureTextWrapper(children: ReactNode, elementType?: string): ReactNode {
    if (children && isTextOnlyChildren(children)) {
        return <Text elementType={elementType}>{children}</Text>;
    }

    return children;
}

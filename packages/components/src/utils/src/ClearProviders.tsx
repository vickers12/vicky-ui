import type { Context, ReactNode } from "react";
import { type ContextValue } from "react-aria-components";

export interface ClearProvidersProps {
    /**
     * The list of providers to clear.
     */

    values: Context<ContextValue<any, any>>[];

    children: ReactNode;
}

/**
 * A component that clears the values of multiple React contexts.
 * This is useful for resetting contexts in a component tree.
 * It wraps the children in each context provider with a `null` value.
 */
export const ClearProviders = ({ values, children }: ClearProvidersProps) => {
    for (const Context of values) {
        children = <Context.Provider value={null}>{children}</Context.Provider>;
    }

    return children;
};

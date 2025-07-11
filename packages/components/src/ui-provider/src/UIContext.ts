import { createContext, useContext } from "react";
import type { UIProviderProps } from "./index.ts";

export const UIContext = createContext<UIProviderProps | null>(null);

export function useUIContext() {
    const context = useContext(UIContext);

    if (context === null) {
        throw new Error("useUIContext must be used within UIProvider");
    }

    return context;
}

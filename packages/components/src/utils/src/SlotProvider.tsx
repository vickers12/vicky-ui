import { Provider } from "react-aria-components";
import type { ComponentProps, FunctionComponent } from "react";

export const SlotProvider = Provider;
export type SlotProviderProps = ComponentProps<typeof SlotProvider>;

/**
 * An easier way to pass contexts to multiple child components without having to nest them.
 */
(SlotProvider as FunctionComponent).displayName = "SlotProvider";

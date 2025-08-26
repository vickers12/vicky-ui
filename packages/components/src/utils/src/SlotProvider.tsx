import type { ComponentProps, FunctionComponent } from "react";
import { Provider } from "react-aria-components";

export const SlotProvider = Provider;
export type SlotProviderProps = ComponentProps<typeof SlotProvider>;

/**
 * An easier way to pass contexts to multiple child components without having to nest them.
 */
(SlotProvider as FunctionComponent).displayName = "SlotProvider";

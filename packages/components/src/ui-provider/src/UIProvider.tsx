import { I18nProvider } from "react-aria-components";
import type { FC, ComponentProps } from "react";
import { UIContext } from "./index";

export interface UIProviderProps extends ComponentProps<typeof I18nProvider> {}

const UIProvider: FC<UIProviderProps> = (props) => {
    const { children, locale } = props;

    return (
        <UIContext.Provider value={props}>
            <I18nProvider locale={locale}>{children}</I18nProvider>
        </UIContext.Provider>
    );
};

/**
 * The main provider for the UI components.
 * It wraps the `I18nProvider` from `react-aria-components`
 * and provides the `UIContext` to its children.
 */
const _UIProvider = UIProvider;
_UIProvider.displayName = "UIProvider";

export { _UIProvider as UIProvider };

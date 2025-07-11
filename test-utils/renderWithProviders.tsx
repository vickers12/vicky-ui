import type { RenderHookOptions, RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import { UIProvider } from "@vicky-ui/components";

import type { RenderResult } from "@testing-library/react";
import { renderHook } from "@testing-library/react";
import type { ReactNode } from "react";

export interface ProviderWrapperOptions {
    locale?: string;
}

const createProviderWrapper = (options?: ProviderWrapperOptions) => {
    const { locale = "en-US" } = options || {};
    return function ProviderWrapper({ children }: { children: ReactNode }) {
        return <UIProvider locale={locale}>{children}</UIProvider>;
    };
};

export const renderWithProviders = (
    ui: React.ReactElement,
    testingLibraryOptions: RenderOptions = {},
    themeOptions?: ProviderWrapperOptions
): RenderResult =>
    render(ui, {
        wrapper: createProviderWrapper(themeOptions),
        ...testingLibraryOptions
    });

function renderHookWithProviders<TProps, TResult>(
    callback: (props: TProps) => TResult,
    renderHookOptions: RenderHookOptions<TProps> = {},
    themeOptions?: ProviderWrapperOptions
): ReturnType<typeof renderHook<TResult, TProps>> {
    return renderHook(callback, {
        wrapper: createProviderWrapper(themeOptions),
        ...renderHookOptions
    });
}

export { act, fireEvent, screen, waitFor } from "@testing-library/react";
export { renderWithProviders as render, renderHookWithProviders as renderHook };

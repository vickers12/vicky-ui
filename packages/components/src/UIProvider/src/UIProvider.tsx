import { MantineProvider } from '@mantine/core';
import { forwardRef } from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

const UIProvider = ({ children }: ProviderProps) => {
  return (
    <MantineProvider>
      {children}
    </MantineProvider>
  );
}

const _UIProvider = forwardRef<HTMLDivElement, ProviderProps>(UIProvider);
_UIProvider.displayName = "UIProvider";

export { _UIProvider as UIProvider };
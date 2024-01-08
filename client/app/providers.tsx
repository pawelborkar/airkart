'use client';
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ICustomNextUIProviderProps, IProvider } from '@/interfaces';
import { Provider } from 'react-redux';
import store from '@/store/store';

export const CustomNextUIProvider = ({ children, themeProps }: ICustomNextUIProviderProps) => {
  return (
    <NextUIProvider>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextUIProvider>
  );
};

export const RTKProvider = ({ children }: IProvider) => {
  return <Provider store={store}>{children}</Provider>;
};

const queryClient = new QueryClient();
export const ReactQueryProvider = ({ children }: IProvider) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children} <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

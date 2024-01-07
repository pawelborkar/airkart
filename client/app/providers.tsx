'use client';
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ICustomNextUIProviderProps, IReactQueryProvidersProps } from '@/interfaces';
import { useRouter } from 'next/navigation';

export const CustomNextUIProvider = ({ children, themeProps }: ICustomNextUIProviderProps) => {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextUIProvider>
  );
};

const queryClient = new QueryClient();
export const ReactQueryProvider = ({ children }: IReactQueryProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children} <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

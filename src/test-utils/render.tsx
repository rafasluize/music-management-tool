import React, { FC, JSXElementConstructor, ReactElement, ReactNode, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { render, RenderOptions } from '@testing-library/react';
import theme from 'styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

const ThemeDS: FC<{ children: ReactNode }> = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export const wrapperRender = (
  component: ReactElement<Element, string | JSXElementConstructor<Element>>,
  options?: RenderOptions<typeof import('@testing-library/dom/types/queries'), HTMLElement>,
) => render(component, { wrapper: ThemeDS, ...options });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const queryRender = (
  component: ReactElement<Element, string | JSXElementConstructor<Element>>,
  defaultValues?: unknown,
  options?: RenderOptions<typeof import('@testing-library/dom/types/queries'), HTMLElement>,
) =>
  render(
    <Suspense fallback={<p>Carregando</p>}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{component}</BrowserRouter>
      </QueryClientProvider>
    </Suspense>,
    { wrapper: ThemeDS, ...options },
  );

export { wrapperRender as render, queryRender };

export default wrapperRender;

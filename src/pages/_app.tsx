import type { AppProps } from 'next/app';
import React from 'react';

import { GlobalStyles } from '../styles/globalStyles.styles';
import { Layout } from '../components/Layout';
import { ThemeProvider } from '../components/ThemeProvider';
import { StoreProvider } from '../store';

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;

import type { AppProps } from 'next/app';
import React from 'react';

import { GlobalStyles } from '../styles/globalStyles.styles';
import { Layout } from '../components/Layout';
import { Theme } from '../components/Theme';
import { StoreProvider } from '../store';

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <StoreProvider>
      <Theme>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </StoreProvider>
  );
};

export default App;

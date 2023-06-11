import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';

import { GlobalStyles } from '../styles/globalStyles.styles';
import { Layout } from '../components/Layout';
import { ThemeProvider } from '../components/ThemeProvider';
import { StoreProvider } from '../store';
import { getProjectName } from '../utils/getProjectName';

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
        />

        <title>{getProjectName()}</title>
      </Head>

      <StoreProvider>
        <ThemeProvider>
          <GlobalStyles />

          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </StoreProvider>
    </React.Fragment>
  );
};

export default App;

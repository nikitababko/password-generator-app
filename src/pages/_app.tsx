import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { GlobalStyles } from '../styles/globalStyles.styles';
import { ThemeProvider } from '../components/ThemeProvider';
import { StoreProvider } from '../store';
import { Loader } from '../components/Loader';
import { getProjectName } from '../utils/getProjectName';

const Layout = dynamic(
  () =>
    import('../components/Layout').then((m) => m.Layout),
  {
    loading: () => <Loader />,
    ssr: false,
  },
);

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

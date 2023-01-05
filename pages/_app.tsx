import type { AppProps } from 'next/app';
import React from 'react';
import { GlobalStyles } from '../styles/globalStyles.styles';
import { Layout } from '../components/Layout';
import { Theme } from '../components/Theme';

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <Theme>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  );
};

export default App;

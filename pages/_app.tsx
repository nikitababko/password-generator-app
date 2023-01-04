import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/globalStyles.styles';
import { Layout } from '../components/Layout';
import { Theme } from '../components/Theme';

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <Theme>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  );
}

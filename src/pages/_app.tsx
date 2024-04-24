import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Script from 'next/script';

import { GlobalStyles } from '../styles/globalStyles.styles';
import { Image } from '../styles/_app.styles';
import { ThemeProvider } from '../components/ThemeProvider';
import { Loader } from '../components/Loader';
import { PROJECT_TITLE } from '../constants';

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

        <title>{PROJECT_TITLE}</title>
      </Head>

      <Script
        id="yandex-metrica"
        dangerouslySetInnerHTML={{
          __html: ` 
             (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; 
            m[i].l=1*new Date(); 
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} 
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) 
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); 

            ym(${process.env.YANDEX_METRICA_COUNTER_NUMBER}, "init", { 
                clickmap:true, 
                trackLinks:true, 
                accurateTrackBounce:true, 
                webvisor:true 
             });    
            `,
        }}
      />

      <noscript>
        <div>
          <Image
            src={`https://mc.yandex.ru/watch/${process.env.YANDEX_METRICA_COUNTER_NUMBER}`}
            alt="yandex-metrica"
            width={0}
            height={0}
          />
        </div>
      </noscript>

      <ThemeProvider>
        <GlobalStyles />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;

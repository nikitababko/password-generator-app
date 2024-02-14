import {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';

import { metaData } from '../constants';
import { roboto } from '../styles/globalStyles.styles';

export default function Document() {
  return (
    <Html
      lang="en"
      translate="no"
      className={roboto.className}
    >
      <Head>
        <meta charSet={metaData.charSet} />

        <meta
          httpEquiv="X-UA-Compatible"
          content="IE=edge"
        />

        <meta name="google" content={metaData.google} />

        <meta name="robots" content={metaData.robots} />

        <meta
          name="classification"
          content={metaData.classification}
        />

        <meta name="rating" content={metaData.rating} />

        <meta name="creator" content={metaData.me} />

        <meta name="author" content={metaData.me} />

        <meta name="Designer" content={metaData.me} />

        <meta
          name="publisher"
          content={metaData.publisher}
        />

        <meta
          name="distribution"
          content={metaData.distribution}
        />

        <meta
          name="application-name"
          content={metaData['application-name']}
        />

        {/* <meta */}
        {/*  name="Abstract" */}
        {/*  content="Password generator for data protection" */}
        {/* /> */}
        <meta name="title" content={metaData.title} />

        <meta
          name="description"
          content={metaData.description}
        />

        <meta name="keywords" content={metaData.keywords} />

        <meta
          property="og:type"
          content={metaData.og.type}
        />

        <meta property="og:url" content={metaData.og.url} />

        <meta
          property="og:title"
          content={metaData.og.title}
        />

        <meta
          property="og:description"
          content={metaData.description}
        />

        <meta
          property="og:image"
          content={metaData.socialImage}
        />

        <meta
          property="twitter:card"
          content={metaData.twitter.card}
        />

        <meta
          property="twitter:url"
          content={metaData.twitter.url}
        />

        <meta
          name="twitter:creator"
          content={metaData.twitter.creator}
        />

        <meta
          property="twitter:title"
          content={metaData.twitter.title}
        />

        <meta
          property="twitter:description"
          content={metaData.description}
        />

        <meta
          property="twitter:image"
          content={metaData.socialImage}
        />

        <meta property="twitter:image:alt" content="Logo" />

        <meta
          name="copyright"
          content={metaData.copyright}
        />

        <link
          rel="shortcut icon"
          href={metaData.linkShortcutIcon}
          type="image/ico"
        />
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}

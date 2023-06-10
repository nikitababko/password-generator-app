import {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';
import { getProjectName } from '../utils/getProjectName';
import { metaDescription } from '../constants';

export default function Document() {
  return (
    <Html lang="en" translate="no">
      <Head>
        <meta charSet="UTF-8" />

        <meta
          httpEquiv="X-UA-Compatible"
          content="IE=edge"
        />

        <meta name="google" content="notranslate" />

        <meta name="robots" content="index,follow" />

        <meta
          name="classification"
          content="application, online-tool, security, password-generator"
        />

        <meta name="rating" content="General" />

        <meta
          name="creator"
          content="Nikita Babko, niki.babko@gmail.com"
        />

        <meta
          name="author"
          content="Nikita Babko, niki.babko@gmail.com"
        />

        <meta
          name="Designer"
          content="Nikita Babko, niki.babko@gmail.com"
        />

        <meta name="publisher" content="The Babko Group" />

        <meta name="distribution" content="global" />

        <meta
          name="application-name"
          content={getProjectName()}
        />

        {/* <meta */}
        {/*  name="Abstract" */}
        {/*  content="Password generator for data protection" */}
        {/* /> */}

        <meta
          name="description"
          content={metaDescription}
        />

        <meta
          name="keywords"
          content="password generator, secure passwords, unique passwords, online security, password strength, password tool, password algorithm, randomization, password customization, data protection, account security, password generator tool"
        />

        <meta property="og:type" content="website" />

        {/* TODO: insert password generator link */}
        {/* <meta property="og:url" content="https://nikitababko.github.io/" /> */}
        <meta
          property="og:title"
          content={getProjectName()}
        />

        <meta
          property="og:description"
          content={metaDescription}
        />

        {/* TODO: insert password generator logo */}
        {/* <meta property="og:image" content="./logo_url" /> */}

        <meta
          property="twitter:card"
          content="summary_large_image"
        />

        {/* TODO: insert password generator link */}
        {/* <meta */}
        {/*  property="twitter:url" */}
        {/*  content="https://nikitababko.github.io/" */}
        {/* /> */}

        <meta
          name="twitter:creator"
          content="@nikitababko"
        />

        <meta
          property="twitter:title"
          content={getProjectName()}
        />

        <meta
          property="twitter:description"
          content={metaDescription}
        />

        {/* TODO: insert password generator logo */}
        {/* <meta property="twitter:image" content="./logo_url" /> */}

        <meta name="copyright" content="Copyright 2023" />
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}

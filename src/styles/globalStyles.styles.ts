import { createGlobalStyle } from 'styled-components';
import '@nikitababko/reset-css';
import { Roboto } from '@next/font/google';

import { getAnimation } from '../utils';

export const roboto = Roboto({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  fallback: [
    'system-ui',
    'arial',
    'ui-monospace',
    'Menlo',
    'Monaco',
    'Cascadia Mono',
    'Segoe UI Mono',
    'Roboto Mono',
    'Oxygen Mono',
    'Ubuntu Monospace',
    'Source Code Pro',
    'Fira Mono',
    'Droid Sans Mono',
    'Courier New',
    'monospace',
  ],
});

export const GlobalStyles = createGlobalStyle`
  html {
    font-family: ${roboto.style.fontFamily};
  }

  * {
    transition: color ${getAnimation()}, background-color ${getAnimation()};
  }
`;

import { createGlobalStyle } from 'styled-components';
import '@nikitababko/reset-css';
import { Roboto } from '@next/font/google';
import { animation } from '../utils/animation';

const roboto = Roboto({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
});

export const GlobalStyles = createGlobalStyle`
  html {
    font-family: ${
      roboto.style.fontFamily
    }, ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;
    font-weight: ${roboto.style.fontWeight};
    font-style: ${roboto.style.fontStyle};
  }

  * {
    transition: color ${animation()}, background-color ${animation()};
  }
`;

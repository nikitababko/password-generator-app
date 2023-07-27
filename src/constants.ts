export const PROJECT_NAME = 'PassGuard';

const DESCRIPTION =
  'Enhance your online security with that powerful password generator. Create highly secure and unique passwords using advanced algorithms and randomization techniques. Customize the length and character combinations to generate robust passwords that protect your sensitive data. Safeguard your online accounts and ensure peace of mind with reliable password generation tool.';

const APP_URL = 'https://passguard.vercel.app/';
const NICK_NAME = '@nikitababko';
const LOGO_SHORTCUT = '/static/logo.ico';
const LOGO_SOCIAL = '/static/logo.png';

export const metaData = {
  charSet: 'UTF-8',
  google: 'notranslate',
  robots: 'index, follow',
  classification:
    'application, online-tool, security, password-generator',
  rating: 'General',
  me: 'Nikita Babko, niki.babko@gmail.com',
  publisher: 'The Babko Group',
  distribution: 'global',
  'application-name': PROJECT_NAME,
  description: DESCRIPTION,
  keywords:
    'password generator, secure passwords, unique passwords, online security, password strength, password tool, password algorithm, randomization, password customization, data protection, account security, password generator tool',
  og: {
    type: 'website',
    title: PROJECT_NAME,
    description: DESCRIPTION,
    url: APP_URL,
  },
  twitter: {
    card: 'summary_large_image',
    creator: NICK_NAME,
    title: PROJECT_NAME,
    url: APP_URL,
  },
  copyright: 'Copyright 2023',
  linkShortcutIcon: LOGO_SHORTCUT,
  socialImage: LOGO_SOCIAL,
};

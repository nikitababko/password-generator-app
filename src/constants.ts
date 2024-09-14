export const PROJECT_NAME = 'PassGuard';
export const PROJECT_TITLE = `Password generator '${PROJECT_NAME}'`;

const DESCRIPTION =
  'Enhance your online security with that powerful password generator. Create highly secure and unique passwords using advanced algorithms and randomization techniques. Customize the length and character combinations to generate robust passwords that protect your sensitive data. Safeguard your online accounts and ensure peace of mind with reliable password generation tool.';

const APP_URL = 'https://passguard.vercel.app/';
const NICK_NAME = '@nikitababko';
const LOGO_SHORTCUT = '/static/logo.ico';

export const metaData = {
  charSet: 'utf8',
  google: 'notranslate',
  robots: 'index, follow',
  classification:
    'application, online-tool, security, password-generator',
  rating: 'General',
  me: 'Nikita Babko, niki.babko@gmail.com',
  publisher: 'The Babko Group',
  distribution: 'global',
  'application-name': PROJECT_TITLE,
  title: PROJECT_TITLE,
  description: DESCRIPTION,
  keywords:
    'password generator, secure passwords, unique passwords, online security, password strength, password tool, password algorithm, randomization, password customization, data protection, account security, password generator tool',
  og: {
    type: 'website',
    title: PROJECT_TITLE,
    description: DESCRIPTION,
    url: APP_URL,
    image: '/static/logo-og.png',
  },
  twitter: {
    card: 'summary_large_image',
    creator: NICK_NAME,
    title: PROJECT_TITLE,
    url: APP_URL,
    image: '/static/logo-twitter.png',
  },
  copyright: 'Copyright 2023',
  linkShortcutIcon: LOGO_SHORTCUT,
} as const;

export const MEDIA_BREAK_POINTS_DESIGN_TOKENS = {
  MEDIA_1023: 1023,
  MEDIA_767: 767,
  MEDIA_479: 479,
  MEDIA_374: 374,
} as const;

export const COLOR_DESIGN_TOKENS = {
  BLUE: '#157AF5',
  BLUE_DARK_TURQUOISE: '#72cce3',
  BLUE_TURQUOISE: '#96dcee',
  BLUE_DARK_SLATE: '#5d6baa',
  BLUE_SLATE: '#808fc7',
  BLUE_LIGHT_SKY: '#DAE6FF',
  BLUE_LIGHT: '#E9F4FE',
  BLACK: '#222222',
  BLACK_LIGHT: '#2E3D54',
  GRAY_LIGHT: '#F0F4F7',
  GRAY_DARK: '#979797',
  GRAY_DIM: '#6B7382',
  YELLOW: '#F5EB71',
  YELLOW_CORN: '#FFFAA8',
  WHITE: '#FFFFFF',
} as const;

export const FONT_SIZES = {
  SM: '22px',
  M: '26px',
  L: '36px',
} as const;

export const LightTheme = {
  titleColor: COLOR_DESIGN_TOKENS.BLACK,
  backgroundColor: COLOR_DESIGN_TOKENS.BLUE_LIGHT,
  foregroundColor: COLOR_DESIGN_TOKENS.WHITE,
  formItemLeftColBackgroundColor:
    COLOR_DESIGN_TOKENS.GRAY_LIGHT,
  selectBackgroundColor: COLOR_DESIGN_TOKENS.WHITE,
  fontColor: COLOR_DESIGN_TOKENS.BLACK,
  fontGenerateButtonColor: COLOR_DESIGN_TOKENS.WHITE,
  borderColor: COLOR_DESIGN_TOKENS.BLACK_LIGHT,
  generateButtonBackgroundColor:
    COLOR_DESIGN_TOKENS.BLACK_LIGHT,
} as const;

export const DarkTheme = {
  titleColor: COLOR_DESIGN_TOKENS.GRAY_LIGHT,
  backgroundColor: COLOR_DESIGN_TOKENS.BLACK_LIGHT,
  foregroundColor: COLOR_DESIGN_TOKENS.GRAY_DARK,
  formItemLeftColBackgroundColor:
    COLOR_DESIGN_TOKENS.GRAY_LIGHT,
  selectBackgroundColor: COLOR_DESIGN_TOKENS.GRAY_LIGHT,
  fontColor: COLOR_DESIGN_TOKENS.WHITE,
  fontGenerateButtonColor: COLOR_DESIGN_TOKENS.WHITE,
  borderColor: COLOR_DESIGN_TOKENS.GRAY_LIGHT,
  generateButtonBackgroundColor:
    MEDIA_BREAK_POINTS_DESIGN_TOKENS.MEDIA_767
      ? COLOR_DESIGN_TOKENS.BLACK
      : COLOR_DESIGN_TOKENS.BLACK_LIGHT,
} as const;

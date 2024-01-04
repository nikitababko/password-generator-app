import type {
  ColorDesignTokensType,
  MediaBreakPointsDesignTokensType,
  ThemeType,
} from './designTokens.types';

export const MEDIA_BREAK_POINTS_DESIGN_TOKENS: MediaBreakPointsDesignTokensType =
  {
    MEDIA_1023: 1023,
    MEDIA_767: 767,
    MEDIA_479: 479,
    MEDIA_374: 374,
  } as const;

// TODO: remove лишние типы и вместо них typeof делать от объекта
export const COLOR_DESIGN_TOKENS: ColorDesignTokensType = {
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

export const FontSizes = {
  SM: '22px',
  M: '26px',
  L: '36px',
} as const;

export const LightTheme: ThemeType = {
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

export const DarkTheme: ThemeType = {
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

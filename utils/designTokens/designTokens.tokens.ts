import {
  ColorDesignTokensType,
  MediaBreakPointsDesignTokensType,
  ThemeType,
} from './designTokens.types';

export const MediaBreakPointsDesignTokens: MediaBreakPointsDesignTokensType =
  {
    media1920: 1920,
    media768: 768,
    media480: 480,
  } as const;

export const ColorDesignTokens: ColorDesignTokensType = {
  BlueDark: '#157AF5',
  BlueLight: '#E9F4FE',
  BlackDark: '#222222',
  BlackLight: '#2E3D54',
  GrayLight: '#F0F4F7',
  GrayDark: '#979797',
  YellowDark: '#FFBB52',
  YellowLight: '#FFECCF',
  White: '#FFFFFF',
} as const;

export const LightTheme: ThemeType = {
  colors: {
    backgroundColor: ColorDesignTokens.BlueLight,
    foregroundColor: ColorDesignTokens.White,
    inputBackgroundColor: ColorDesignTokens.GrayLight,
    fontColor: ColorDesignTokens.BlackDark,
    fontGenerateButtonColor: ColorDesignTokens.White,
    borderColor: ColorDesignTokens.BlackLight,
    themeSwitchBackgroundColor:
      ColorDesignTokens.YellowLight,
    themeSwitchBorderColor: ColorDesignTokens.YellowDark,
    blue: ColorDesignTokens.BlueDark,
    generateButtonBackgroundColor:
      ColorDesignTokens.BlackLight,
  },
  fontSizes: {
    sm: '22px',
    m: '26px',
    l: '36px',
  },
} as const;

export const DarkTheme: ThemeType = {
  colors: {
    backgroundColor: ColorDesignTokens.BlackLight,
    foregroundColor: ColorDesignTokens.GrayDark,
    inputBackgroundColor: ColorDesignTokens.GrayLight,
    fontColor: ColorDesignTokens.White,
    fontGenerateButtonColor: ColorDesignTokens.White,
    borderColor: ColorDesignTokens.GrayLight,
    themeSwitchBackgroundColor:
      ColorDesignTokens.BlackLight,
    themeSwitchBorderColor: ColorDesignTokens.White,
    blue: ColorDesignTokens.BlueDark,
    generateButtonBackgroundColor:
      MediaBreakPointsDesignTokens.media768
        ? ColorDesignTokens.BlackDark
        : ColorDesignTokens.BlackLight,
  },
  fontSizes: {
    sm: '22px',
    m: '26px',
    l: '36px',
  },
} as const;

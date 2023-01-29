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
  BlueMedium: '#DAE6FF',
  BlueLight: '#E9F4FE',
  BlackDark: '#222222',
  BlackLight: '#2E3D54',
  GrayLight: '#F0F4F7',
  GrayDark: '#979797',
  YellowDark: '#F5EB71',
  YellowLight: '#FFFAA8',
  White: '#FFFFFF',
} as const;

export const LightTheme: ThemeType = {
  colors: {
    backgroundColor: ColorDesignTokens.BlueLight,
    foregroundColor: ColorDesignTokens.White,
    formItemLeftColBackgroundColor:
      ColorDesignTokens.GrayLight,
    selectBackgroundColor: ColorDesignTokens.White,
    fontColor: ColorDesignTokens.BlackDark,
    fontGenerateButtonColor: ColorDesignTokens.White,
    borderColor: ColorDesignTokens.BlackLight,
    generateButtonBackgroundColor:
      ColorDesignTokens.BlackLight,
  },
  // TODO: Make common object {...fontSizes, transition}
  fontSizes: {
    sm: '22px',
    m: '26px',
    l: '36px',
  },
  animation: '0.3s ease-in-out',
} as const;

export const DarkTheme: ThemeType = {
  colors: {
    backgroundColor: ColorDesignTokens.BlackLight,
    foregroundColor: ColorDesignTokens.GrayDark,
    formItemLeftColBackgroundColor:
      ColorDesignTokens.GrayLight,
    selectBackgroundColor: ColorDesignTokens.GrayLight,
    fontColor: ColorDesignTokens.White,
    fontGenerateButtonColor: ColorDesignTokens.White,
    borderColor: ColorDesignTokens.GrayLight,
    generateButtonBackgroundColor:
      MediaBreakPointsDesignTokens.media768
        ? ColorDesignTokens.BlackDark
        : ColorDesignTokens.BlackLight,
  },
  // TODO: Make common object {...fontSizes, transition}
  fontSizes: {
    sm: '22px',
    m: '26px',
    l: '36px',
  },
  animation: '0.3s ease-in-out',
} as const;

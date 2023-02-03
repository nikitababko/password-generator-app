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
  Blue: '#157AF5',
  BlueDarkTurquoise: '#72cce3',
  BlueTurquoise: '#96dcee',
  BlueDarkSlate: '#5d6baa',
  BlueSlate: '#808fc7',
  BlueLightSky: '#DAE6FF',
  BlueLight: '#E9F4FE',
  Black: '#222222',
  BlackLight: '#2E3D54',
  GrayLight: '#F0F4F7',
  GrayDark: '#979797',
  GrayDim: '#6B7382',
  Yellow: '#F5EB71',
  YellowCorn: '#FFFAA8',
  White: '#FFFFFF',
} as const;

export const Animation = '0.3s ease-in-out';

export const FontSize = {
  sm: '22px',
  m: '26px',
  l: '36px',
} as const;

export const LightTheme: ThemeType = {
  colors: {
    backgroundColor: ColorDesignTokens.BlueLight,
    foregroundColor: ColorDesignTokens.White,
    formItemLeftColBackgroundColor:
      ColorDesignTokens.GrayLight,
    selectBackgroundColor: ColorDesignTokens.White,
    fontColor: ColorDesignTokens.Black,
    fontGenerateButtonColor: ColorDesignTokens.White,
    borderColor: ColorDesignTokens.BlackLight,
    generateButtonBackgroundColor:
      ColorDesignTokens.BlackLight,
  },
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
        ? ColorDesignTokens.Black
        : ColorDesignTokens.BlackLight,
  },
} as const;

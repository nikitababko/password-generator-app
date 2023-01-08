type MediaBreakPointsDesignTokensKeysType =
  | 'media1920'
  | 'media768'
  | 'media480';
type MediaBreakPointsDesignTokensValuesType =
  | 1920
  | 768
  | 480;
export type MediaBreakPointsDesignTokensType = Record<
  MediaBreakPointsDesignTokensKeysType,
  MediaBreakPointsDesignTokensValuesType
>;

type ColorDesignTokensKeysType =
  | 'BlueDark'
  | 'BlueMedium'
  | 'BlueLight'
  | 'BlackDark'
  | 'BlackLight'
  | 'GrayLight'
  | 'GrayDark'
  | 'YellowDark'
  | 'YellowLight'
  | 'White';
type ColorDesignTokensValuesType =
  | '#157AF5'
  | '#DAE6FF'
  | '#E9F4FE'
  | '#222222'
  | '#2E3D54'
  | '#F0F4F7'
  | '#979797'
  | '#FFBB52'
  | '#FFECCF'
  | '#FFFFFF';
export type ColorDesignTokensType = Record<
  ColorDesignTokensKeysType,
  ColorDesignTokensValuesType
>;

type ThemeColorsKeysType =
  | 'backgroundColor'
  | 'foregroundColor'
  | 'labelBackgroundColor'
  | 'inputBackgroundColor'
  | 'fontColor'
  | 'fontGenerateButtonColor'
  | 'borderColor'
  | 'themeSwitchBackgroundColor'
  | 'themeCircleBorderColor'
  | 'inputBorderColor'
  | 'blue'
  | 'generateButtonBackgroundColor';
type ThemeFontSizesKeysType = 'sm' | 'm' | 'l';
type ThemeFontSizesValuesType = '22px' | '26px' | '36px';
export type ThemeType = {
  colors: Record<
    ThemeColorsKeysType,
    ColorDesignTokensValuesType
  >;
  fontSizes: Record<
    ThemeFontSizesKeysType,
    ThemeFontSizesValuesType
  >;
  transition: (target: string) => string;
};

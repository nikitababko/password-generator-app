export type MediaBreakPointsDesignTokensType = {
  MEDIA_1023: 1023;
  MEDIA_767: 767;
  MEDIA_479: 479;
  MEDIA_374: 374;
};

export type ColorDesignTokensType = {
  BLUE: '#157AF5';
  BLUE_DARK_TURQUOISE: '#72cce3';
  BLUE_TURQUOISE: '#96dcee';
  BLUE_DARK_SLATE: '#5d6baa';
  BLUE_SLATE: '#808fc7';
  BLUE_LIGHT_SKY: '#DAE6FF';
  BLUE_LIGHT: '#E9F4FE';
  BLACK: '#222222';
  BLACK_LIGHT: '#2E3D54';
  GRAY_LIGHT: '#F0F4F7';
  GRAY_DARK: '#979797';
  GRAY_DIM: '#6B7382';
  YELLOW: '#F5EB71';
  YELLOW_CORN: '#FFFAA8';
  WHITE: '#FFFFFF';
};

export type ThemeType = {
  backgroundColor: ColorDesignTokensType[
    | 'BLUE_LIGHT'
    | 'BLACK_LIGHT'];
  foregroundColor: ColorDesignTokensType[
    | 'WHITE'
    | 'GRAY_DARK'];
  formItemLeftColBackgroundColor: ColorDesignTokensType['GRAY_LIGHT'];
  selectBackgroundColor: ColorDesignTokensType[
    | 'WHITE'
    | 'GRAY_LIGHT'];
  fontColor: ColorDesignTokensType['BLACK' | 'WHITE'];
  fontGenerateButtonColor: ColorDesignTokensType['WHITE'];
  borderColor: ColorDesignTokensType[
    | 'BLACK_LIGHT'
    | 'GRAY_LIGHT'];
  generateButtonBackgroundColor: ColorDesignTokensType[
    | 'BLACK_LIGHT'
    | 'BLACK'];
};

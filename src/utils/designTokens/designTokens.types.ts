export type MediaBreakPointsDesignTokensType = {
  media1200: 1200;
  media1024: 1024;
  media768: 768;
  media480: 480;
  media375: 375;
};

export type ColorDesignTokensType = {
  Blue: '#157AF5';
  BlueDarkTurquoise: '#72cce3';
  BlueTurquoise: '#96dcee';
  BlueDarkSlate: '#5d6baa';
  BlueSlate: '#808fc7';
  BlueLightSky: '#DAE6FF';
  BlueLight: '#E9F4FE';
  Black: '#222222';
  BlackLight: '#2E3D54';
  GrayLight: '#F0F4F7';
  GrayDark: '#979797';
  GrayDim: '#6B7382';
  Yellow: '#F5EB71';
  YellowCorn: '#FFFAA8';
  White: '#FFFFFF';
};

export type ThemeType = {
  backgroundColor: ColorDesignTokensType[
    | 'BlueLight'
    | 'BlackLight'];
  foregroundColor: ColorDesignTokensType[
    | 'White'
    | 'GrayDark'];
  formItemLeftColBackgroundColor: ColorDesignTokensType['GrayLight'];
  selectBackgroundColor: ColorDesignTokensType[
    | 'White'
    | 'GrayLight'];
  fontColor: ColorDesignTokensType['Black' | 'White'];
  fontGenerateButtonColor: ColorDesignTokensType['White'];
  borderColor: ColorDesignTokensType[
    | 'BlackLight'
    | 'GrayLight'];
  generateButtonBackgroundColor: ColorDesignTokensType[
    | 'BlackLight'
    | 'Black'];
};

export type MediaBreakPointsDesignTokensType = {
  media1920: 1920;
  media768: 768;
  media480: 480;
};

export type ColorDesignTokensType = {
  BlueDark: '#157AF5';
  BlueMedium: '#DAE6FF';
  BlueLight: '#E9F4FE';
  BlackDark: '#222222';
  BlackLight: '#2E3D54';
  GrayLight: '#F0F4F7';
  GrayDark: '#979797';
  YellowDark: '#F5EB71';
  YellowLight: '#FFFAA8';
  White: '#FFFFFF';
};

export type ThemeType = {
  colors: {
    backgroundColor: ColorDesignTokensType[
      | 'BlueLight'
      | 'BlackLight'];
    foregroundColor: ColorDesignTokensType[
      | 'White'
      | 'GrayDark'];
    labelBackgroundColor: ColorDesignTokensType['GrayLight'];
    inputBackgroundColor: ColorDesignTokensType[
      | 'White'
      | 'GrayLight'];
    inputBorderColor: ColorDesignTokensType['GrayLight'];
    fontColor: ColorDesignTokensType['BlackDark' | 'White'];
    fontGenerateButtonColor: ColorDesignTokensType['White'];
    borderColor: ColorDesignTokensType[
      | 'BlackLight'
      | 'GrayLight'];
    themeSwitchBackgroundColor: ColorDesignTokensType[
      | 'YellowLight'
      | 'BlackLight'];
    themeCircleBorderColor: ColorDesignTokensType[
      | 'YellowDark'
      | 'White'];
    blue: ColorDesignTokensType['BlueDark'];
    generateButtonBackgroundColor: ColorDesignTokensType[
      | 'BlackLight'
      | 'BlackDark'];
  };
  fontSizes: {
    sm: '22px';
    m: '26px';
    l: '36px';
  };
  animation: string;
};

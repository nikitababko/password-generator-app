import type React from 'react';

export type UseMidSectionControllerType = () => {
  handleGeneratePassword: () => void;
  password: string[];
  handleCopy: () => Promise<void>;
  isCopied: boolean;
  isGenerated: boolean;
  generateButtonTranslation: string;
};

export type CopyButtonStylesProps = {
  isCopied: boolean;
};

export type GenerateButtonAnimationType = (
  isGenerated: boolean,
) => React.CSSProperties;

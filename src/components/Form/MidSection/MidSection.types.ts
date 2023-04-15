import type React from 'react';
import type { ReturnUseTranslateType } from '../../../hooks/useTranslate/useTranslate.types';

export type UseMidSectionControllerType = () => {
  handleGeneratePassword: () => void;
  password: string[];
  handleCopy: () => Promise<void>;
  isCopied: boolean;
  isGenerated: boolean;
  t: ReturnUseTranslateType;
};

export type CopyButtonStylesProps = {
  isCopied: boolean;
};

export type GenerateButtonAnimationType = (
  isGenerated: boolean,
) => React.CSSProperties;

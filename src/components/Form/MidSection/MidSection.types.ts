import type React from 'react';
import type { GeneratePasswordType } from '@nikitababko/password-generator/dist/index.types';

import type { ReturnUseTranslateType } from '../../../hooks/useTranslate/useTranslate.types';

export type UseControllerType = () => {
  handleGeneratePassword: () => void;
  password: ReturnType<GeneratePasswordType>;
  handleCopy: () => Promise<void>;
  isCopied: boolean;
  isGenerated: boolean;
  t: ReturnUseTranslateType;
};

export type CopyButtonStylesProps = {
  isCopied: ReturnType<UseControllerType>['isCopied'];
};

export type GenerateButtonAnimationType = (
  isGenerated: ReturnType<UseControllerType>['isGenerated'],
) => React.CSSProperties;

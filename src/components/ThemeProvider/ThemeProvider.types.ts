import type React from 'react';

import type { ThemeType } from '../../utils/designTokens/designTokens.types';

export type Props = {
  children: React.ReactNode;
};

export type UseControllerType = () => {
  theme: ThemeType;
};

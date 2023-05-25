import { author as projectAuthor } from '../../../../package.json';

import type {
  CopyrightType,
  GetCurrentYearType,
  UseControllerType,
} from './BottomSection.types';
import { FOUNDATION_YEAR } from './BottomSection.data';

export const useController: UseControllerType = () => {
  const getCurrentYear: GetCurrentYearType = () => {
    const getFullYear = new Date().getFullYear();

    if (FOUNDATION_YEAR === getFullYear) {
      return '';
    }

    return `- ${getFullYear}`;
  };

  const copyright: CopyrightType = {
    year: `Copyright © ${FOUNDATION_YEAR} ${getCurrentYear()}`,
    name: `${projectAuthor.name}`,
  };

  return {
    copyright,
  };
};

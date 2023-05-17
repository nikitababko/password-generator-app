import type {
  CopyrightType,
  UseControllerType,
  GetCurrentYearType,
} from './BottomSection.types';
import {
  authorName,
  foundationYear,
} from './BottomSection.data';

export const useController: UseControllerType = () => {
  const getCurrentYear: GetCurrentYearType = () => {
    const getFullYear = new Date().getFullYear();

    if (foundationYear === getFullYear) {
      return '';
    }

    return `- ${getFullYear}`;
  };

  const copyright: CopyrightType = {
    year: `Copyright © ${foundationYear} ${getCurrentYear()}`,
    name: `${authorName}`,
  };

  return {
    copyright,
  };
};

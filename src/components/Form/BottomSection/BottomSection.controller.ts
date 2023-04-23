import type { UseControllerType } from './BottomSection.types';
import {
  authorName,
  foundationYear,
} from './BottomSection.data';

export const useController: UseControllerType = () => {
  const getCurrentYear = () => {
    const getFullYear = new Date().getFullYear();

    if (foundationYear === getFullYear) {
      return '';
    }

    return `- ${getFullYear}`;
  };

  const copyright = `Copyright © ${foundationYear} ${getCurrentYear()} ${authorName}`;

  return {
    copyright,
  };
};

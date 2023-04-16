import type { UseBottomSectionControllerType } from './BottomSection.types';
import {
  authorName,
  foundationYear,
} from './BottomSection.data';

export const useBottomSectionController: UseBottomSectionControllerType =
  () => {
    const getCurrentYear = () => {
      const getFullYear = new Date().getFullYear();

      if (foundationYear === getFullYear) {
        return '';
      }

      return `- ${getFullYear}`;
    };

    const getCopyright = `© ${authorName} ${foundationYear} ${getCurrentYear()}`;

    return {
      getCopyright,
    };
  };

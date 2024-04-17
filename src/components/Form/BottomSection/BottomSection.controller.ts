import packageJSON from '../../../../package.json';
import { FOUNDATION_YEAR } from './BottomSection.data';

export const useController = () => {
  const getCurrentYear = () => {
    const getFullYear = new Date().getFullYear();

    if (FOUNDATION_YEAR === getFullYear) {
      return '';
    }

    return `- ${getFullYear}`;
  };

  const copyright = {
    year: `Copyright © ${FOUNDATION_YEAR} ${getCurrentYear()}`,
    name: `${packageJSON.author.name}`,
  };

  return {
    copyright,
  };
};

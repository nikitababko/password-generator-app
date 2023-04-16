import pkg from '../../../package.json';

import type { GetProjectNameType } from './getProjectName.types';

export const getProjectName: GetProjectNameType = () => {
  const value = pkg.name.split('-').slice(0, 2).join(' ');

  return value.charAt(0).toUpperCase() + value.slice(1);
};

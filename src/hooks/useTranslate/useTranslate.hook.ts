import { useAppContext } from '../../store';

import { Translations } from './useTranslate.data';
import { UseTranslateType } from './useTranslate.types';

export const useTranslate: UseTranslateType = () => {
  const [state] = useAppContext();

  return Translations[state.lang];
};

import { useAppContext } from '../../store';

import { Translations } from './useTranslate.data';
import { UseTranslateType } from './useTranslate.types';

export const useTranslate: UseTranslateType = () => {
  const {
    lang: [lang],
  } = useAppContext();

  return Translations[lang];
};

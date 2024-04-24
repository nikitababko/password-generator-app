import { Translations } from './useTranslate.data';
import type { UseTranslateType } from './useTranslate.types';
import { useLangStore } from '../../store';

export const useTranslate: UseTranslateType = () => {
  const lang = useLangStore((state) => state.lang);

  return Translations[lang];
};

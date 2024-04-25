import { Translations } from './useTranslate.data';
import { useLangStore } from '../../store';

export const useTranslate = () => {
  const lang = useLangStore((state) => state.lang);

  return Translations[lang];
};

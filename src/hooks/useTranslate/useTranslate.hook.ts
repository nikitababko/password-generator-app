import { Translations } from './useTranslate.data';
import { useLanguageStore } from '../../store';

export const useTranslate = () => {
  const language = useLanguageStore(
    (state) => state.language,
  );

  return Translations[language];
};

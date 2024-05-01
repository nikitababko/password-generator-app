import { create } from 'zustand';
import type { LanguagesType } from '../hooks/useTranslate/useTranslate.types';

interface LangState {
  language: LanguagesType;
  changeLang: (language: LanguagesType) => void;
}

export const useLanguageStore = create<LangState>(
  (set) => ({
    language: 'en',
    changeLang: (language: LanguagesType) => {
      return set(() => ({ language } as LangState));
    },
  }),
);

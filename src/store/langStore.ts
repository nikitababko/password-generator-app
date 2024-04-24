import { create } from 'zustand';
import type { LanguagesType } from '../hooks/useTranslate/useTranslate.types';

interface LangState {
  lang: LanguagesType;
  changeLang: (lang: LanguagesType) => void;
}

export const useLangStore = create<LangState>((set) => ({
  lang: 'en',
  changeLang: (lang: LanguagesType) => {
    return set(() => ({ lang } as LangState));
  },
}));

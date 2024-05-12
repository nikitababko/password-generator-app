import { useCallback, useMemo } from 'react';
import type { ValueOf } from 'ts-essentials';
import { useLanguageStore } from '../../store';
import { languages } from './Header.data';
import type { ItemType } from '../SelectField/Item/Item.types';
import type { LanguagesType } from '../../hooks/useTranslate/useTranslate.types';
import type { LANGUAGE_CODES } from '../../languageCodes';

export const useController = () => {
  const changeLang = useLanguageStore(
    (state) => state.changeLang,
  );

  const defaultLanguageId = useMemo(() => {
    const languageId = localStorage.getItem('language');
    return languageId ? JSON.parse(languageId)?.id : null;
  }, []);

  const defaultLanguage = useMemo(() => {
    const saveMySettingFromLS = localStorage.getItem(
      'saveMySettings',
    );

    const saveMySettingsFromLSParsed = saveMySettingFromLS
      ? JSON.parse(saveMySettingFromLS)
      : null;

    const getFoundLanguage = (
      languageId: ValueOf<typeof LANGUAGE_CODES>,
    ) => {
      return languages.find((l) => l.id === languageId);
    };

    if (defaultLanguageId && saveMySettingsFromLSParsed) {
      return getFoundLanguage(defaultLanguageId);
    }

    const userPreferredLanguages = navigator.languages;

    if (
      userPreferredLanguages &&
      Array.isArray(userPreferredLanguages) &&
      userPreferredLanguages[0].slice(0, 2)
    ) {
      return getFoundLanguage(
        userPreferredLanguages[0].slice(0, 2),
      );
    }

    return null;
  }, [defaultLanguageId]);

  const handleClick = useCallback(
    (id: ItemType['id'], value: ItemType['value']) => {
      changeLang(id as LanguagesType);

      localStorage.setItem(
        'language',
        JSON.stringify({
          id,
          value,
        }),
      );
    },
    [changeLang],
  );

  return {
    defaultLanguage,
    handleClick,
  };
};

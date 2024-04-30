import { useCallback, useMemo } from 'react';
import { useLangStore } from '../../store';
import { languages } from './Header.data';
import type { ItemType } from '../SelectField/Item/Item.types';
import type { LanguagesType } from '../../hooks/useTranslate/useTranslate.types';

export const useController = () => {
  const changeLang = useLangStore(
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

    if (saveMySettingsFromLSParsed) {
      return defaultLanguageId
        ? languages.find((l) => l.id === defaultLanguageId)
        : null;
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

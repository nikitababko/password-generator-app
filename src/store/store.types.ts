import React from 'react';

import { ThemeType } from '../utils/designTokens/designTokens.types';
import { FormItemsType } from '../components/Form/FormItem/FormItem.types';
import { LanguagesType } from '../hooks/useTranslate/useTranslate.types';

export type StoreProviderProps = {
  children: React.ReactNode;
};

export type StoreContextType = {
  form: [
    FormItemsType[],
    React.Dispatch<React.SetStateAction<FormItemsType[]>>,
  ];
  theme: [
    ThemeType,
    React.Dispatch<React.SetStateAction<ThemeType>>,
  ];
  lang: [
    LanguagesType,
    React.Dispatch<React.SetStateAction<LanguagesType>>,
  ];
};

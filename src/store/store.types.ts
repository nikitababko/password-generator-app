import React from 'react';
import { ThemeType } from '../utils/designTokens/designTokens.types';

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
};

export type FormItemsType = {
  id: number;
  label: string;
  valueExample: string;
  type: 'select' | 'switch';
  value: string | number | boolean;
  options?: {
    id: number;
    label: number;
  }[];
};

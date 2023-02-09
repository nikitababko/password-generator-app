import React from 'react';

export type StoreProviderProps = {
  children: React.ReactNode;
};

export type StoreContextType = {
  form: [
    FormItemsType[],
    React.Dispatch<React.SetStateAction<FormItemsType[]>>,
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

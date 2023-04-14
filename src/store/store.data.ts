import type { FormItemsType } from '../components/Form/FormItem/FormItem.types';
import { LightTheme } from '../utils/designTokens';

import type { StoreInitialStateType } from './store.types';

export const formItemsInitialState = [
  {
    id: 1,
    label: 'passwordLength',
    valueExample: '',
    type: 'select',
    value: 6,
    options: [
      {
        id: 1,
        label: 6,
      },
      {
        id: 2,
        label: 12,
      },
      {
        id: 3,
        label: 18,
      },
      {
        id: 4,
        label: 24,
      },
      {
        id: 5,
        label: 30,
      },
      {
        id: 6,
        label: 36,
      },
      {
        id: 7,
        label: 42,
      },
      {
        id: 8,
        label: 46,
      },
      {
        id: 9,
        label: 52,
      },
      {
        id: 10,
        label: 58,
      },
    ],
  },
  {
    id: 2,
    label: 'includeSymbols',
    valueExample: '!";#$%&\'()*+,-./:;<=>?@[]^_`{|}~',
    type: 'switch',
    value: true,
  },
  {
    id: 3,
    label: 'includeNumbers',
    valueExample: '123456',
    type: 'switch',
    value: false,
  },
  {
    id: 4,
    label: 'includeLowercaseCharacters',
    valueExample: 'abcdefgh',
    type: 'switch',
    value: false,
  },
  {
    id: 5,
    label: 'includeUppercaseCharacters',
    valueExample: 'ABCDEFGH',
    type: 'switch',
    value: false,
  },
  {
    id: 6,
    label: 'excludeSimilarCharacters',
    valueExample: 'e.g. i,l,1,L,o,0,O',
    type: 'switch',
    value: false,
  },
  {
    id: 7,
    label: 'excludeAmbiguousCharacters',
    valueExample: '{}[]()/\'"`~,;:.<>',
    type: 'switch',
    value: false,
  },
  // {
  //   id: 8,
  //   label: 'Save My Preference',
  //   valueExample: '',
  //   type: 'switch',
  //   value: false,
  // },
] satisfies FormItemsType[];

export const storeInitialState: StoreInitialStateType = {
  theme: LightTheme,
  lang: 'en',
  formItems: formItemsInitialState,
};

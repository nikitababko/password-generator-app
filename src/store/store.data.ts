import type { ItemType as FormItemType } from '../components/Form/Item/Item.types';

export const FORM_ITEMS_INITIAL_STATE: FormItemType[] = [
  {
    id: 1,
    label: 'passwordLength',
    valueExample: '',
    type: 'select',
    value: 6,
    selectedOption: {
      id: 1,
      value: 6,
    },
    options: [
      {
        id: 1,
        value: 6,
      },
      {
        id: 2,
        value: 12,
      },
      {
        id: 3,
        value: 18,
      },
      {
        id: 4,
        value: 24,
      },
      {
        id: 5,
        value: 30,
      },
      {
        id: 6,
        value: 36,
      },
      {
        id: 7,
        value: 42,
      },
      {
        id: 8,
        value: 46,
      },
      {
        id: 9,
        value: 52,
      },
      {
        id: 10,
        value: 58,
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
    value: true,
  },
  {
    id: 4,
    label: 'includeLowercaseCharacters',
    valueExample: 'abcdefgh',
    type: 'switch',
    value: true,
  },
  {
    id: 5,
    label: 'includeUppercaseCharacters',
    valueExample: 'ABCDEFGH',
    type: 'switch',
    value: true,
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
  {
    id: 8,
    label: 'saveMySettings',
    valueExample: '',
    type: 'switch',
    value: false,
  },
];

import type { ItemType as FormItemType } from '../components/Form/Item/Item.types';

export const FORM_ITEMS_INITIAL_STATE: FormItemType[] = [
  {
    id: 1,
    label: 'passwordLength',
    valueExample: 'min 1, max 256',
    type: 'number',
    value: 6,
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

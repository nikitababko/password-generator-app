import {
  FormItemDataType,
  SelectData,
} from './FormItem.types';

export const formItemData = [
  {
    id: 1,
    label: 'Password Length:',
    valueExample: '',
    type: 'select',
  },
  {
    id: 2,
    label: 'Include Symbols:',
    valueExample: '!";#$%&\'()*+,-./:;<=>?@[]^_`{|}~',
    type: 'switch',
  },
  {
    id: 3,
    label: 'Include Numbers',
    valueExample: '123456',
    type: 'switch',
  },
  {
    id: 4,
    label: 'Include Lowercase Characters',
    valueExample: 'abcdefgh',
    type: 'switch',
  },
  {
    id: 5,
    label: 'Include Uppercase Characters',
    valueExample: 'ABCDEFGH',
    type: 'switch',
  },
  {
    id: 6,
    label: 'Exclude Similar Characters',
    valueExample: 'e.g. i,l,1,L,o,0,O',
    type: 'switch',
  },
  {
    id: 7,
    label: 'Exclude Ambiguous Characters',
    valueExample: '{}[]()/\'"`~,;:.<>',
    type: 'switch',
  },
  {
    id: 8,
    label: 'Save My Preference',
    valueExample: '',
    type: 'switch',
  },
] satisfies FormItemDataType[];

export const selectData: SelectData[] = [
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
];

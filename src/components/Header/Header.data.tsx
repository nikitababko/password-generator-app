import React from 'react';

import { Icon } from '../Icon';
import type { ItemType as SelectFieldItemType } from '../SelectField/Item/Item.types';

const boxShadow = '0px 0px 5px 3px rgb(34 60 80 / 20%)';

export const data: SelectFieldItemType[] = [
  {
    id: 'en',
    icon: (
      <Icon
        name="FlagUs"
        styles={{
          boxShadow,
        }}
      />
    ),
    label: 'English',
  },
  {
    id: 'ru',
    icon: (
      <Icon
        name="FlagRu"
        styles={{
          boxShadow,
        }}
      />
    ),
    label: 'Русский',
  },
  {
    id: 'zh',
    icon: (
      <Icon
        name="FlagCh"
        styles={{
          boxShadow,
        }}
      />
    ),
    label: '中國人',
  },
  {
    id: 'ko',
    icon: (
      <Icon
        name="FlagKr"
        styles={{
          boxShadow,
        }}
      />
    ),
    label: '한국인',
  },
  {
    id: 'ja',
    icon: (
      <Icon
        name="FlagJp"
        styles={{
          boxShadow,
        }}
      />
    ),
    label: '日本語',
  },
  {
    id: 'fr',
    icon: (
      <Icon
        name="FlagFr"
        styles={{
          boxShadow,
        }}
      />
    ),
    label: 'Français',
  },
  {
    id: 'de',
    icon: (
      <Icon
        name="FlagDe"
        styles={{
          boxShadow,
        }}
      />
    ),
    label: 'Deutsch',
  },
  {
    id: 'id',
    icon: (
      <Icon
        name="FlagIn"
        styles={{
          boxShadow,
        }}
      />
    ),
    label: 'Indonesia',
  },
  {
    id: 'pl',
    icon: (
      <Icon
        name="FlagPl"
        styles={{
          boxShadow,
        }}
      />
    ),
    label: 'Polski',
  },
  {
    id: 'es',
    icon: (
      <Icon
        name="FlagEs"
        styles={{
          boxShadow,
        }}
      />
    ),
    label: 'Español',
  },
  {
    id: 'ka',
    icon: (
      <Icon
        name="FlagGe"
        styles={{
          boxShadow,
        }}
      />
    ),
    label: 'ქართული',
  },
  {
    id: 'ar',
    icon: (
      <Icon
        name="FlagAe"
        styles={{
          boxShadow,
        }}
      />
    ),
    label: 'عرب',
  },
  {
    id: 'hy',
    icon: (
      <Icon
        name="FlagAm"
        styles={{
          boxShadow,
        }}
      />
    ),
    label: 'հայերեն',
  },
  {
    id: 'hi',
    icon: (
      <Icon
        name="FlagIn"
        styles={{
          boxShadow,
        }}
      />
    ),
    label: 'हिन्दी',
  },
  {
    id: 'it',
    icon: (
      <Icon
        name="FlagIt"
        styles={{
          boxShadow,
        }}
      />
    ),
    label: 'Italiano',
  },
];

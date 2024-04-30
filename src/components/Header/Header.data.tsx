import React from 'react';

import { Icon } from '../Icon';
import type { ItemType as SelectFieldItemType } from '../SelectField/Item/Item.types';

const BOX_SHADOW = '0px 0px 5px 3px rgb(34 60 80 / 20%)';

export const languages: SelectFieldItemType[] = [
  {
    id: 'en',
    icon: (
      <Icon
        name="FlagUs"
        styles={{
          boxShadow: BOX_SHADOW,
        }}
      />
    ),
    value: 'English',
  },
  {
    id: 'ru',
    icon: (
      <Icon
        name="FlagRu"
        styles={{
          boxShadow: BOX_SHADOW,
        }}
      />
    ),
    value: 'Русский',
  },
  {
    id: 'zh',
    icon: (
      <Icon
        name="FlagCh"
        styles={{
          boxShadow: BOX_SHADOW,
        }}
      />
    ),
    value: '中國人',
  },
  {
    id: 'ko',
    icon: (
      <Icon
        name="FlagKr"
        styles={{
          boxShadow: BOX_SHADOW,
        }}
      />
    ),
    value: '한국인',
  },
  {
    id: 'ja',
    icon: (
      <Icon
        name="FlagJp"
        styles={{
          boxShadow: BOX_SHADOW,
        }}
      />
    ),
    value: '日本語',
  },
  {
    id: 'fr',
    icon: (
      <Icon
        name="FlagFr"
        styles={{
          boxShadow: BOX_SHADOW,
        }}
      />
    ),
    value: 'Français',
  },
  {
    id: 'de',
    icon: (
      <Icon
        name="FlagDe"
        styles={{
          boxShadow: BOX_SHADOW,
        }}
      />
    ),
    value: 'Deutsch',
  },
  {
    id: 'id',
    icon: (
      <Icon
        name="FlagIn"
        styles={{
          boxShadow: BOX_SHADOW,
        }}
      />
    ),
    value: 'Indonesia',
  },
  {
    id: 'pl',
    icon: (
      <Icon
        name="FlagPl"
        styles={{
          boxShadow: BOX_SHADOW,
        }}
      />
    ),
    value: 'Polski',
  },
  {
    id: 'es',
    icon: (
      <Icon
        name="FlagEs"
        styles={{
          boxShadow: BOX_SHADOW,
        }}
      />
    ),
    value: 'Español',
  },
  {
    id: 'ka',
    icon: (
      <Icon
        name="FlagGe"
        styles={{
          boxShadow: BOX_SHADOW,
        }}
      />
    ),
    value: 'ქართული',
  },
  {
    id: 'ar',
    icon: (
      <Icon
        name="FlagAe"
        styles={{
          boxShadow: BOX_SHADOW,
        }}
      />
    ),
    value: 'عرب',
  },
  {
    id: 'hy',
    icon: (
      <Icon
        name="FlagAm"
        styles={{
          boxShadow: BOX_SHADOW,
        }}
      />
    ),
    value: 'հայերեն',
  },
  {
    id: 'hi',
    icon: (
      <Icon
        name="FlagIn"
        styles={{
          boxShadow: BOX_SHADOW,
        }}
      />
    ),
    value: 'हिन्दी',
  },
  {
    id: 'it',
    icon: (
      <Icon
        name="FlagIt"
        styles={{
          boxShadow: BOX_SHADOW,
        }}
      />
    ),
    value: 'Italiano',
  },
];

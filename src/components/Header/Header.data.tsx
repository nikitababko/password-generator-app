import React from 'react';

import { Icon } from '../Icon';
import type { ItemType as SelectFieldItemType } from '../SelectField/Item/Item.types';

const BOX_SHADOW = '0px 0px 5px 3px rgb(34 60 80 / 20%)';

export const data: SelectFieldItemType[] = [
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
    label: 'English',
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
    label: 'Русский',
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
    label: '中國人',
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
    label: '한국인',
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
    label: '日本語',
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
    label: 'Français',
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
    label: 'Deutsch',
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
    label: 'Indonesia',
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
    label: 'Polski',
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
    label: 'Español',
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
    label: 'ქართული',
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
    label: 'عرب',
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
    label: 'հայերեն',
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
    label: 'हिन्दी',
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
    label: 'Italiano',
  },
];

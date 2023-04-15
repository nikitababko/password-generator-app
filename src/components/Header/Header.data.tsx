import React from 'react';

import type { SelectFieldItemType } from '../SelectField/SelectField.types';
import { Icon } from '../Icon';

const boxShadow = '0px 0px 5px 3px rgb(34 60 80 / 20%)';

export const data: SelectFieldItemType[] = [
  {
    id: 'en',
    icon: (
      <Icon
        name="FlagUs"
        style={{
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
        style={{
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
        style={{
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
        style={{
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
        style={{
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
        style={{
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
        style={{
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
        style={{
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
        style={{
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
        style={{
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
        style={{
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
        style={{
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
        style={{
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
        style={{
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
        style={{
          boxShadow,
        }}
      />
    ),
    label: 'Italiano',
  },
];

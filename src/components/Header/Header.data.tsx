import React from 'react';

import { css } from 'styled-components';
import { Icon } from '../Icon';
import type { ItemType as SelectFieldItemType } from '../SelectField/Item/Item.types';
import { LANGUAGE_CODES } from '../../languageCodes';

const BOX_SHADOW = '0px 0px 5px 3px rgb(34 60 80 / 20%)';

export const languages: SelectFieldItemType[] = [
  {
    id: LANGUAGE_CODES.EN,
    icon: (
      <Icon
        name="FlagUs"
        width={22}
        height={17}
        styles={css`
          box-shadow: ${BOX_SHADOW};
        `}
      />
    ),
    value: 'English',
  },
  {
    id: LANGUAGE_CODES.RU,
    icon: (
      <Icon
        name="FlagRu"
        width={22}
        height={17}
        styles={css`
          box-shadow: ${BOX_SHADOW};
        `}
      />
    ),
    value: 'Русский',
  },
  {
    id: LANGUAGE_CODES.ZH,
    icon: (
      <Icon
        name="FlagCh"
        width={22}
        height={17}
        styles={css`
          box-shadow: ${BOX_SHADOW};
        `}
      />
    ),
    value: '中國人',
  },
  {
    id: LANGUAGE_CODES.KO,
    icon: (
      <Icon
        name="FlagKr"
        width={22}
        height={17}
        styles={css`
          box-shadow: ${BOX_SHADOW};
        `}
      />
    ),
    value: '한국인',
  },
  {
    id: LANGUAGE_CODES.JA,
    icon: (
      <Icon
        name="FlagJp"
        width={22}
        height={17}
        styles={css`
          box-shadow: ${BOX_SHADOW};
        `}
      />
    ),
    value: '日本語',
  },
  {
    id: LANGUAGE_CODES.FR,
    icon: (
      <Icon
        name="FlagFr"
        width={22}
        height={17}
        styles={css`
          box-shadow: ${BOX_SHADOW};
        `}
      />
    ),
    value: 'Français',
  },
  {
    id: LANGUAGE_CODES.DE,
    icon: (
      <Icon
        name="FlagDe"
        width={22}
        height={17}
        styles={css`
          box-shadow: ${BOX_SHADOW};
        `}
      />
    ),
    value: 'Deutsch',
  },
  {
    id: LANGUAGE_CODES.ID,
    icon: (
      <Icon
        name="FlagIn"
        width={22}
        height={17}
        styles={css`
          box-shadow: ${BOX_SHADOW};
        `}
      />
    ),
    value: 'Indonesia',
  },
  {
    id: LANGUAGE_CODES.PL,
    icon: (
      <Icon
        name="FlagPl"
        width={22}
        height={17}
        styles={css`
          box-shadow: ${BOX_SHADOW};
        `}
      />
    ),
    value: 'Polski',
  },
  {
    id: LANGUAGE_CODES.ES,
    icon: (
      <Icon
        name="FlagEs"
        width={22}
        height={17}
        styles={css`
          box-shadow: ${BOX_SHADOW};
        `}
      />
    ),
    value: 'Español',
  },
  {
    id: LANGUAGE_CODES.KA,
    icon: (
      <Icon
        name="FlagGe"
        width={22}
        height={17}
        styles={css`
          box-shadow: ${BOX_SHADOW};
        `}
      />
    ),
    value: 'ქართული',
  },
  {
    id: LANGUAGE_CODES.AR,
    icon: (
      <Icon
        name="FlagAe"
        width={22}
        height={17}
        styles={css`
          box-shadow: ${BOX_SHADOW};
        `}
      />
    ),
    value: 'عرب',
  },
  {
    id: LANGUAGE_CODES.HY,
    icon: (
      <Icon
        name="FlagAm"
        width={22}
        height={17}
        styles={css`
          box-shadow: ${BOX_SHADOW};
        `}
      />
    ),
    value: 'հայերեն',
  },
  {
    id: LANGUAGE_CODES.HI,
    icon: (
      <Icon
        name="FlagIn"
        width={22}
        height={17}
        styles={css`
          box-shadow: ${BOX_SHADOW};
        `}
      />
    ),
    value: 'हिन्दी',
  },
  {
    id: LANGUAGE_CODES.IT,
    icon: (
      <Icon
        name="FlagIt"
        width={22}
        height={17}
        styles={css`
          box-shadow: ${BOX_SHADOW};
        `}
      />
    ),
    value: 'Italiano',
  },
];

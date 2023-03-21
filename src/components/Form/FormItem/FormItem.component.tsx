import React from 'react';

import { SelectField } from '../../SelectField';
import { Switch } from '../../Switch';
import { useTranslate } from '../../../hooks';
import { TranslationsValuesType } from '../../../hooks/useTranslate/useTranslate.types';

import {
  Container,
  Label,
  LeftCol,
  ValueExample,
} from './FormItem.styles';
import { FormItemProps } from './FormItem.types';

export const FormItem: React.FC<FormItemProps> = ({
  item,
  callback,
}) => {
  const t = useTranslate();

  return (
    <Container>
      <LeftCol>
        <Label>
          {t[item.label as keyof TranslationsValuesType]}
        </Label>
        <ValueExample>{item.valueExample}</ValueExample>
      </LeftCol>
      {item.type === 'select' ? (
        <SelectField
          data={item.options}
          styles={{
            maxWidth: '90px',
            // TODO: add backgroundColorType
            // backgroundColor: ColorDesignTokens.BlackLight,
          }}
          callback={(id, value) => callback(item.id, value)}
        />
      ) : (
        <Switch
          value={item.value as boolean}
          id={item.id}
          callback={callback}
        />
      )}
    </Container>
  );
};

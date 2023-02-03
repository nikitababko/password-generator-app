import React from 'react';

import { SelectField } from '../../SelectField';

import {
  Container,
  Label,
  LeftCol,
  ValueExample,
} from './FormItem.styles';
import { FormItemProps } from './FormItem.types';
import { Switch } from '../../Switch';
import { selectData } from './FormItem.data';

export const FormItem: React.FC<FormItemProps> = ({
  item,
}) => {
  return (
    <Container>
      <LeftCol>
        <Label>{item.label}</Label>
        <ValueExample>{item.valueExample}</ValueExample>
      </LeftCol>
      {item.type === 'select' ? (
        <SelectField
          data={selectData}
          styles={{
            maxWidth: '90px',
            // TODO: add backgroundColorType
            // backgroundColor: ColorDesignTokens.BlackLight,
          }}
          callback={() => null}
        />
      ) : (
        <Switch />
      )}
    </Container>
  );
};
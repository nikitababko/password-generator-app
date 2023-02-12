import React from 'react';

import { SelectField } from '../../SelectField';
import { Switch } from '../../Switch';

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
  return (
    <Container>
      <LeftCol>
        <Label>{item.label}</Label>
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

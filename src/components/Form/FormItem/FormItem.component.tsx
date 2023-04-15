import React from 'react';

import { SelectField } from '../../SelectField';
import { Switch } from '../../Switch';
import type { TranslationsValuesType } from '../../../hooks/useTranslate/useTranslate.types';

import {
  Container,
  Info,
  Label,
  LeftCol,
  RightCol,
  ValueExample,
} from './FormItem.styles';
import type { FormItemProps } from './FormItem.types';
import { useFormItemController } from './FormItem.controller';

export const FormItem: React.FC<FormItemProps> = ({
  item,
  callback,
  isDisabled,
}) => {
  const {
    valueExampleIsVisible,
    handleClick,
    isPasswordLengthRow,
    t,
  } = useFormItemController(item.id);

  return (
    <Container>
      <LeftCol
        onClick={handleClick}
        isPasswordLengthRow={isPasswordLengthRow}
      >
        {!isPasswordLengthRow && <Info>i</Info>}

        <Label
          valueExampleIsVisible={valueExampleIsVisible}
        >
          {t[item.label as keyof TranslationsValuesType]}
        </Label>

        <ValueExample
          valueExampleIsVisible={valueExampleIsVisible}
        >
          {item.valueExample}
        </ValueExample>
      </LeftCol>

      <RightCol>
        {item.type === 'select' ? (
          <SelectField
            data={item.options}
            styles={{
              width: '90px',
              // TODO: add backgroundColorType
              // backgroundColor: ColorDesignTokens.BlackLight,
            }}
            callback={(id, value) =>
              callback(item.id, value)
            }
          />
        ) : (
          <Switch
            value={item.value as boolean}
            id={item.id}
            callback={callback}
            isDisabled={isDisabled}
          />
        )}
      </RightCol>
    </Container>
  );
};

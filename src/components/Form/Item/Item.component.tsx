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
} from './Item.styles';
import type { ItemProps } from './Item.types';
import { useItemController } from './Item.controller';

export const Item: React.FC<ItemProps> = ({
  item,
  callback,
  isDisabled,
}) => {
  const {
    valueExampleIsVisible,
    handleClick,
    isPasswordLengthRow,
    t,
  } = useItemController(item.id);

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

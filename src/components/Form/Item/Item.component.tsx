import React from 'react';
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
import { useController } from './Item.controller';
import type { ItemProps } from './Item.types';
import { NumberField } from '../../NumberField';

const Item: React.FC<ItemProps> = React.memo<ItemProps>(
  ({ item, onChange, isDisabled }) => {
    const {
      valueExampleIsVisible,
      handleClick,
      isFormItemPasswordLength,
      t,
      isFormItemSaveMySettings,
    } = useController(item);

    return (
      <Container data-testid="FormItemContainer">
        <LeftCol
          onClick={handleClick}
          isFormItemPasswordLength={
            isFormItemPasswordLength
          }
          isFormItemSaveMySettings={
            isFormItemSaveMySettings
          }
        >
          {!isFormItemSaveMySettings &&
            !isFormItemPasswordLength && <Info>i</Info>}

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
          {item.type === 'number' ? (
            <NumberField
              id={item.id}
              value={item.value as number}
              onChange={onChange}
            />
          ) : (
            <Switch
              id={item.id}
              value={item.value as boolean}
              onChange={onChange}
              isDisabled={isDisabled}
            />
          )}
        </RightCol>
      </Container>
    );
  },
);

Item.displayName = 'Item';
export { Item };

import React from 'react';
import { useController } from './NumberField.controller';
import {
  ChevronsWrapper,
  Container,
  Input,
} from './NumberField.styles';
import { Icon } from '../Icon';
import type { Props } from './NumberField.types';

export const NumberField: React.FC<Props> = React.memo(
  ({ id, value: externalValue, onChange }) => {
    const { value, handleOnChange, setValue } =
      useController({
        id,
        externalValue,
        onChange,
      });

    return (
      <Container>
        <Input
          data-testid="NumberFieldInput"
          type="text"
          value={String(value)}
          onChange={handleOnChange}
        />

        <ChevronsWrapper>
          <Icon
            data-testid="NumberFieldArrowUp"
            onClick={() =>
              setValue((previousState) =>
                previousState < 256
                  ? previousState + 1
                  : previousState,
              )
            }
            name="ChevronUp"
            width={20}
            height={20}
          />

          <Icon
            onClick={() =>
              setValue((previousState) =>
                previousState > 1
                  ? previousState - 1
                  : previousState,
              )
            }
            data-testid="NumberFieldArrowDown"
            name="ChevronDown"
            width={20}
            height={20}
          />
        </ChevronsWrapper>
      </Container>
    );
  },
);

import React from 'react';

import { Icon } from '../Icon';

import {
  ChevronWrapper,
  Container,
  Content,
} from './SelectField.styles';
import type { Props } from './SelectField.types';
import { Item } from './Item';
import { DropDown } from './DropDown';
import { useController } from './SelectField.controller';

// eslint-disable-next-line react/display-name
export const SelectField: React.FC<Props> = React.memo(
  ({ options = [], styles, callback, defaultOption }) => {
    const {
      isOpen,
      setIsOpen,
      selectedItem,
      setSelectedItem,
      handleClick,
      ref,
    } = useController(options);

    return (
      <Container ref={ref} styles={styles}>
        <Content onClick={handleClick}>
          <Item item={selectedItem} />

          <ChevronWrapper isOpen={isOpen}>
            <Icon
              name="ChevronDown"
              width={24}
              height={24}
            />
          </ChevronWrapper>
        </Content>

        <DropDown
          options={options}
          isOpen={isOpen}
          setSelectedItem={setSelectedItem}
          setIsOpen={setIsOpen}
          selectedItem={selectedItem}
          callback={callback}
          defaultOption={defaultOption}
        />
      </Container>
    );
  },
);

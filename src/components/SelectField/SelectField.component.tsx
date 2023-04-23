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

export const SelectField: React.FC<Props> = ({
  data = [],
  styles,
  callback,
}) => {
  const {
    isOpen,
    setIsOpen,
    selectedItem,
    setSelectedItem,
    handleClick,
    ref,
  } = useController(data);

  return (
    <Container ref={ref} styles={styles}>
      <Content onClick={handleClick}>
        <Item item={selectedItem} />

        <ChevronWrapper isOpen={isOpen}>
          <Icon name="ChevronDown" width={24} height={24} />
        </ChevronWrapper>
      </Content>

      <DropDown
        data={data}
        isOpen={isOpen}
        setSelectedItem={setSelectedItem}
        setIsOpen={setIsOpen}
        selectedItem={selectedItem}
        callback={callback}
      />
    </Container>
  );
};

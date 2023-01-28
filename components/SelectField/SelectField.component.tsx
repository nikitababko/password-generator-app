import React from 'react';

import { Icon } from '../Icon';

import {
  ChevronWrapper,
  Container,
  Content,
} from './SelectField.styles';
import { SelectFieldProps } from './SelectField.types';
import { SelectFieldItem } from './SelectFieldItem';
import { DropDown } from './SelectFieldDropDown';
import { useSelectFieldController } from './SelectField.controller';
import { firstItem } from './SelectField.data';

export const SelectField: React.FC<SelectFieldProps> = ({
  data,
}) => {
  const {
    isOpen,
    setIsOpen,
    selectedItem,
    setSelectedItem,
    handleClick,
    ref,
  } = useSelectFieldController(data[firstItem]);

  return (
    <Container ref={ref}>
      <Content onClick={handleClick}>
        <SelectFieldItem item={selectedItem} />
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
      />
    </Container>
  );
};

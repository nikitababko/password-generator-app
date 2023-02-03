import React from 'react';

import { SelectFieldItem } from '../SelectFieldItem';
import { Icon } from '../../Icon';

import { SelectFieldDropDownProps } from './SelectFieldDropDown.types';
import { Container } from './SelectFieldDropDown.styles';

export const DropDown: React.FC<
  SelectFieldDropDownProps
> = ({
  data,
  setSelectedItem,
  setIsOpen,
  isOpen,
  selectedItem,
}) => {
  return (
    <Container isOpen={isOpen}>
      {data.map((selectFieldItem) => (
        <SelectFieldItem
          key={selectFieldItem.id}
          item={selectFieldItem}
          setSelectedItem={setSelectedItem}
          setIsOpen={setIsOpen}
          isDropDownItem={true}
          selectedItemEqualToItem={
            selectFieldItem.id === selectedItem.id
          }
        >
          <Icon name="CheckMark" width={15} height={16} />
        </SelectFieldItem>
      ))}
    </Container>
  );
};

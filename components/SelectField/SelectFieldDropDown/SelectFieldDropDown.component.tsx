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
      {data.map((item) => (
        <SelectFieldItem
          key={item.id}
          item={item}
          setSelectedItem={setSelectedItem}
          setIsOpen={setIsOpen}
          isDropDownItem={true}
          selectedItemEqualToItem={
            item.id === selectedItem.id
          }
        >
          <Icon name="CheckMark" width={15} height={16} />
        </SelectFieldItem>
      ))}
    </Container>
  );
};

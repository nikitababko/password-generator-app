import React from 'react';

import { SelectFieldItem } from '../SelectFieldItem';
import { Icon } from '../../Icon';

import type { DropDownProps } from './DropDown.types';
import { Container } from './DropDown.styles';

export const DropDown: React.FC<DropDownProps> = ({
  data,
  setSelectedItem,
  setIsOpen,
  isOpen,
  selectedItem,
  callback,
}) => {
  return (
    <Container isOpen={isOpen}>
      {data?.map((selectFieldItem) => (
        <SelectFieldItem
          key={selectFieldItem.id}
          item={selectFieldItem}
          setSelectedItem={setSelectedItem}
          setIsOpen={setIsOpen}
          isDropDownItem
          selectedItemEqualToItem={
            selectFieldItem.id === selectedItem.id
          }
          callback={callback}
        >
          <Icon name="CheckMark" width={15} height={16} />
        </SelectFieldItem>
      ))}
    </Container>
  );
};

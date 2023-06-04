import React from 'react';

import { Icon } from '../../Icon';
import { Item } from '../Item';

import type { Props } from './DropDown.types';
import { Container } from './DropDown.styles';

export const DropDown: React.FC<Props> = ({
  data,
  setSelectedItem,
  setIsOpen,
  isOpen,
  selectedItem,
  callback,
}) => {
  return (
    <Container
      data-testid="DropDownContainer"
      isOpen={isOpen}
    >
      {data?.map((selectFieldItem) => (
        <Item
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
        </Item>
      ))}
    </Container>
  );
};

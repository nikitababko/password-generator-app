import React from 'react';

import { SelectFieldItemProps } from './SelectFieldItem.types';
import {
  Children,
  Container,
  Label,
} from './SelectFieldItem.styles';
import { useItemController } from './SelectFieldItem.controller';

export const SelectFieldItem: React.FC<
  SelectFieldItemProps
> = ({
  item,
  setSelectedItem,
  setIsOpen,
  isDropDownItem,
  selectedItemEqualToItem,
  children,
}) => {
  const { handleClick } = useItemController(
    item,
    setSelectedItem,
    setIsOpen,
  );

  return (
    <Container
      itemId={item.id}
      onClick={handleClick}
      isDropDownItem={isDropDownItem}
      selectedItemEqualToItem={selectedItemEqualToItem}
    >
      {item?.icon}

      <Label>{item?.label}</Label>

      {selectedItemEqualToItem && (
        <Children>{children}</Children>
      )}
    </Container>
  );
};

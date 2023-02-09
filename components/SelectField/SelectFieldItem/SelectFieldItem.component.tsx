import React from 'react';

import { SelectFieldItemProps } from './SelectFieldItem.types';
import {
  Children,
  Container,
  Label,
} from './SelectFieldItem.styles';
import { useSelectFieldItemController } from './SelectFieldItem.controller';

export const SelectFieldItem: React.FC<
  SelectFieldItemProps
> = ({
  item,
  setSelectedItem,
  setIsOpen,
  isDropDownItem,
  selectedItemEqualToItem,
  children,
  callback,
}) => {
  const { handleClick } = useSelectFieldItemController(
    item,
    setSelectedItem,
    setIsOpen,
    callback,
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

      {children && (
        <Children
          selectedItemEqualToItem={selectedItemEqualToItem}
        >
          {children}
        </Children>
      )}
    </Container>
  );
};

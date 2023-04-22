import React from 'react';

import type { ItemProps } from './Item.types';
import { Children, Container, Label } from './Item.styles';
import { useItemController } from './Item.controller';

export const Item: React.FC<ItemProps> = ({
  item,
  setSelectedItem,
  setIsOpen,
  isDropDownItem,
  selectedItemEqualToItem,
  children,
  callback,
}) => {
  const { handleClick } = useItemController(
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

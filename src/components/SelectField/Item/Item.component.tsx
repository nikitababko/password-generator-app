import React from 'react';

import type { Props } from './Item.types';
import { Children, Container, Label } from './Item.styles';
import { useController } from './Item.controller';

export const Item: React.FC<Props> = ({
  item,
  setSelectedItem,
  setIsOpen,
  isDropDownItem,
  selectedItemEqualToItem,
  children,
  callback,
}) => {
  const { handleClick } = useController({
    item,
    setSelectedItem,
    setIsOpen,
    callback,
  });

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

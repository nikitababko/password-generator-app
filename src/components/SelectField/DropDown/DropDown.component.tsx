import React from 'react';

import { Icon } from '../../Icon';
import { Item } from '../Item';

import type { Props } from './DropDown.types';
import { Container } from './DropDown.styles';

export const DropDown: React.FC<Props> = ({
  options,
  setSelectedItem,
  setIsOpen,
  isOpen,
  selectedItem,
  callback,
  defaultOption,
}) => {
  return (
    <Container
      data-testid="DropDownContainer"
      isOpen={isOpen}
    >
      {options?.map((option) => (
        <Item
          key={option.id}
          item={option}
          setSelectedItem={setSelectedItem}
          setIsOpen={setIsOpen}
          isDropDownItem
          selectedItemEqualToItem={
            option.id === selectedItem.id
          }
          callback={callback}
          defaultOption={defaultOption}
        >
          <Icon name="CheckMark" width={15} height={16} />
        </Item>
      ))}
    </Container>
  );
};

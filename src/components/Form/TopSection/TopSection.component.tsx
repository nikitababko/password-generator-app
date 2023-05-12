import React from 'react';

import { Item } from '../Item';

import { Container } from './TopSection.styles';
import { useController } from './TopSection.controller';

export const TopSection: React.FC = () => {
  const { handleClick, formItems, isDisabledItem } =
    useController();

  return (
    <Container data-testid="TopSectionContainer">
      {formItems?.map((formItem) => (
        <Item
          key={formItem.id}
          item={formItem}
          callback={handleClick}
          isDisabled={isDisabledItem(formItem.id)}
        />
      ))}
    </Container>
  );
};

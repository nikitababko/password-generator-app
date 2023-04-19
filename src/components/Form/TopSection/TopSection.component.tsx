import React from 'react';

import { Item } from '../Item';

import { Container } from './TopSection.styles';
import { useTopSectionController } from './TopSection.controller';

export const TopSection: React.FC = () => {
  const { handleClick, formItems, isDisabledItem } =
    useTopSectionController();

  return (
    <Container>
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

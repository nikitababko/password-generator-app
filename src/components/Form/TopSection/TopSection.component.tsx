import React from 'react';

import { FormItem } from '../FormItem';

import { Container } from './TopSection.styles';
import { useTopSectionController } from './TopSection.controller';

export const TopSection: React.FC = () => {
  const { handleClick, formItems, isLastActiveFormItemId } =
    useTopSectionController();

  return (
    <Container>
      {formItems?.map((formItem) => (
        <FormItem
          key={formItem.id}
          item={formItem}
          callback={(id, value) => handleClick(id, value)}
          isDisabled={
            isLastActiveFormItemId === formItem.id
          }
        />
      ))}
    </Container>
  );
};

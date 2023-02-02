import React from 'react';

import { Container } from './Form.styles';
import { FormItem } from './FormItem';
import { formItemData } from './FormItem/FormItem.data';

export const Form: React.FC = () => {
  return (
    <Container>
      {formItemData.map((formItem) => (
        <FormItem key={formItem.id} item={formItem} />
      ))}
    </Container>
  );
};

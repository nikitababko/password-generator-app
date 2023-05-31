import React from 'react';
import { render, screen } from '@testing-library/react';

import { Item } from './Item.component';

describe('Item', () => {
  it('render', () => {
    render(
      <Item
        item={{
          id: 1,
          label: 6,
        }}
      />,
    );

    expect(screen.getByRole('option')).toBeInTheDocument();
  });
});

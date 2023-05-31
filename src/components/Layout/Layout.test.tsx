import React from 'react';
import { render, screen } from '@testing-library/react';

import { Layout } from './Layout.component';

describe('Layout', () => {
  it('render', () => {
    render(<Layout>children</Layout>);

    expect(
      screen.getByTestId('LayoutContainer'),
    ).toBeInTheDocument();
  });
});

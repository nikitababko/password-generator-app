import React from 'react';
import '@testing-library/jest-dom';
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

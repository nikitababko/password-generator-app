import React from 'react';
import { render, screen } from '@testing-library/react';

import { ThemeToggle } from './ThemeToggle.component';

describe('ThemeToggle', () => {
  it('render', () => {
    render(<ThemeToggle />);

    expect(
      screen.getByTestId('ThemeToggle'),
    ).toBeInTheDocument();
  });
});

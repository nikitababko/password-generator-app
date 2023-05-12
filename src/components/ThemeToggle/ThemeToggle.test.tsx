import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { ThemeToggle } from './ThemeToggle.component';

describe('ThemeToggle', () => {
  it('render', () => {
    render(<ThemeToggle />);

    expect(screen.getByRole('switch')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';

import { Header } from './Header.component';

describe('Header', () => {
  it('render', () => {
    render(<Header />);

    expect(screen.getByRole('banner')).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toBeInTheDocument();

    expect(screen.getByRole('switch')).toBeInTheDocument();

    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });
});

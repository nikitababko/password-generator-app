import React from 'react';
import { render, screen } from '@testing-library/react';

import { Loader } from './Loader.component';

describe('Loader', () => {
  it('render', () => {
    render(<Loader />);

    expect(
      screen.getByRole('progressbar'),
    ).toBeInTheDocument();
  });
});

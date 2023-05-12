import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Content } from './Content.component';

describe('Content', () => {
  it('render', () => {
    render(<Content />);

    expect(
      screen.getByTestId('ContentContainer'),
    ).toBeInTheDocument();
  });
});

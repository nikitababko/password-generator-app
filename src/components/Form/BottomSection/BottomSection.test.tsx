import React from 'react';
import { render, screen } from '@testing-library/react';

import { BottomSection } from './BottomSection.component';

describe('BottomSection', () => {
  it('render', () => {
    render(<BottomSection />);

    expect(
      screen.getByRole('contentinfo'),
    ).toBeInTheDocument();
  });
});

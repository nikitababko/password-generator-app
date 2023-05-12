import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { BottomSection } from './BottomSection.component';

describe('BottomSection', () => {
  it('render', () => {
    render(<BottomSection />);

    expect(
      screen.getByTestId('BottomSectionContainer'),
    ).toBeInTheDocument();
  });
});

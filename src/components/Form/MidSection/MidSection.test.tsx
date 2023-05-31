import React from 'react';
import {
  render,
  renderHook,
  screen,
} from '@testing-library/react';

import { MidSection } from './MidSection.component';
import { useController } from './MidSection.controller';

describe('MidSection', () => {
  it('render', () => {
    const { result } = renderHook(() => useController());

    render(<MidSection />);

    expect(
      screen.getByTestId('MidSectionContainer'),
    ).toBeInTheDocument();

    expect(
      screen.getByText(result.current.t.generate),
    ).toBeInTheDocument();

    expect(
      screen.getByTestId('MidSectionCopyButton'),
    ).toBeInTheDocument();
  });
});

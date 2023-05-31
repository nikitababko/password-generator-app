import React from 'react';
import {
  render,
  renderHook,
  screen,
} from '@testing-library/react';

import { useController } from './TopSection.controller';
import { TopSection } from './TopSection.component';

describe('TopSection', () => {
  it('render', () => {
    const { result } = renderHook(() => useController());

    render(<TopSection />);

    expect(
      screen.getByTestId('TopSectionContainer'),
    ).toBeInTheDocument();

    expect(
      screen.getAllByTestId('FormItemContainer'),
    ).toHaveLength(result.current.formItems.length);
  });
});

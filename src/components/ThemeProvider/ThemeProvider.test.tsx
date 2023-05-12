import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from './ThemeProvider.component';

describe('ThemeProvider', () => {
  it('render', () => {
    render(
      <ThemeProvider>
        <div data-testid="ThemeProviderChildren">
          Children
        </div>
      </ThemeProvider>,
    );

    expect(
      screen.getByTestId('ThemeProviderChildren'),
    ).toBeInTheDocument();
  });
});

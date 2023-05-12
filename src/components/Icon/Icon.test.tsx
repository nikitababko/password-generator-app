import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Icon } from './Icon.component';

describe('Icon', () => {
  it('render', () => {
    const size = {
      width: 16,
      height: 28,
    };

    render(
      <Icon
        name="CheckMark"
        width={size.width}
        height={size.height}
      />,
    );

    const element = screen.getByRole('img');

    expect(element).toBeInTheDocument();

    expect(getComputedStyle(element).width).toBe(
      `${size.width}px`,
    );

    expect(getComputedStyle(element).height).toBe(
      `${size.height}px`,
    );
  });
});

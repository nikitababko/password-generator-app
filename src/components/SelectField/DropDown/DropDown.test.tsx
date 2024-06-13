import React from 'react';
import { render, screen } from '@testing-library/react';

import { DropDown } from './DropDown.component';
import { languages } from '../../Header/Header.data';

describe('DropDown', () => {
  it('render', () => {
    render(
      <DropDown
        options={languages}
        isOpen
        setIsOpen={() => null}
        selectedItem={{
          id: 1,
          value: 6,
        }}
        setSelectedItem={() => null}
      />,
    );

    expect(
      screen.getByTestId('DropDownContainer'),
    ).toBeInTheDocument();
  });
});

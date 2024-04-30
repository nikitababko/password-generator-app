import React from 'react';
import { render, screen } from '@testing-library/react';

import { FORM_ITEMS_INITIAL_STATE } from '../../../store/store.data';

import { DropDown } from './DropDown.component';

describe('DropDown', () => {
  it('render', () => {
    render(
      <DropDown
        options={FORM_ITEMS_INITIAL_STATE[0].options}
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

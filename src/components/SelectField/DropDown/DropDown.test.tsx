import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { formItemsInitialState } from '../../../store/store.data';

import { DropDown } from './DropDown.component';

describe('DropDown', () => {
  it('render', () => {
    render(
      <DropDown
        data={formItemsInitialState[0].options}
        isOpen
        setIsOpen={() => null}
        selectedItem={{
          id: 1,
          label: 6,
        }}
        setSelectedItem={() => null}
      />,
    );

    expect(
      screen.getByTestId('DropDown'),
    ).toBeInTheDocument();
  });
});

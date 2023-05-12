import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { SelectField } from './SelectField.component';

import { formItemsInitialState } from '../../store/store.data';

describe('SelectField', () => {
  it('render', () => {
    render(
      <SelectField
        data={formItemsInitialState[0].options}
      />,
    );

    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });
});

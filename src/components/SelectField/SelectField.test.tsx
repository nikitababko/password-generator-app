import React from 'react';
import { render, screen } from '@testing-library/react';

import { SelectField } from './SelectField.component';

import { FORM_ITEMS_INITIAL_STATE } from '../../store/store.data';

describe('SelectField', () => {
  it('render', () => {
    render(
      <SelectField
        data={FORM_ITEMS_INITIAL_STATE[0].options}
      />,
    );

    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });
});

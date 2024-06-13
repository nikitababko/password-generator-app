import React from 'react';
import { render, screen } from '@testing-library/react';

import { SelectField } from './SelectField.component';
import { languages } from '../Header/Header.data';

describe('SelectField', () => {
  it('render', () => {
    render(<SelectField options={languages} />);

    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });
});

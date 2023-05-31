import React from 'react';
import { render, screen } from '@testing-library/react';

import { Form } from './Form.component';

describe('Form', () => {
  it('render', () => {
    render(<Form />);

    expect(screen.getByRole('form')).toBeInTheDocument();
  });
});

import React from 'react';
import {
  render,
  renderHook,
  screen,
} from '@testing-library/react';

import { Item } from './Item.component';
import { useController } from './Item.controller';
import { useFormStore } from '../../../store/formState';
import { FORM_ITEMS_INITIAL_STATE } from '../../../store/store.data';

describe('FormItem', () => {
  it('render', () => {
    const {
      result: { current },
    } = renderHook(() =>
      useFormStore((state) => state.formItems),
    );

    const { result } = renderHook(() =>
      useController(FORM_ITEMS_INITIAL_STATE[1]),
    );

    render(
      <Item
        item={current[1]}
        onChange={() => null}
        isDisabled
      />,
    );

    expect(
      screen.getByTestId('FormItemContainer'),
    ).toBeInTheDocument();

    expect(
      screen.getByText(result.current.t.includeSymbols),
    ).toBeInTheDocument();

    expect(
      screen.getByText(result.current.t.includeSymbols),
    ).toBeInTheDocument();
  });
});

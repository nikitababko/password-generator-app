import React from 'react';
import {
  render,
  renderHook,
  screen,
} from '@testing-library/react';

import { Item } from './Item.component';
import { useController } from './Item.controller';
import { useFormStore } from '../../../store/formState';

describe('FormItem', () => {
  it('render', () => {
    const {
      result: { current },
    } = renderHook(() =>
      useFormStore((state) => state.formItems),
    );

    const { result } = renderHook(() => useController(2));

    render(
      <Item
        item={current[1]}
        callback={() => null}
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

import React from 'react';
import '@testing-library/jest-dom';
import {
  render,
  renderHook,
  screen,
} from '@testing-library/react';

import { useAppContext } from '../../../store';

import { Item } from './Item.component';
import { useController } from './Item.controller';

describe('FormItem', () => {
  it('render', () => {
    const {
      result: {
        current: [state],
      },
    } = renderHook(() => useAppContext());

    const { result } = renderHook(() => useController(2));

    render(
      <Item
        item={state.formItems[1]}
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

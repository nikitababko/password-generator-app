import React, { useState } from 'react';
import '@testing-library/jest-dom';
import {
  render,
  renderHook,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Switch } from './Switch.component';
import type { Props } from './Switch.types';

describe('Switch', () => {
  const { result } = renderHook(() => {
    const [state, setState] = useState<{
      id: Props['id'];
      value: Props['value'];
    }>({ id: 1, value: false });

    return {
      state,
      setState,
    };
  });

  const TestSwitchData = {
    id: 4,
    value: false,
  };

  it('render', async () => {
    render(
      <Switch
        id={TestSwitchData.id}
        value={TestSwitchData.value}
        isDisabled={false}
        callback={(id, value) =>
          result.current.setState({ id, value })
        }
      />,
    );

    const SwitchElement = screen.getByRole('switch');

    expect(SwitchElement).toBeInTheDocument();
    await userEvent.click(SwitchElement);

    expect(result.current.state.id).toEqual(
      TestSwitchData.id,
    );
    expect(result.current.state.value).toEqual(true);
  });
});

import React, { useRef, useState } from 'react';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { useOnClickOutside } from './useOnClickOutside.hook';

const TestComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const reference = useRef<HTMLDivElement>(null);
  useOnClickOutside(reference, () => setIsOpen(false));

  return (
    <div>
      <div ref={reference}>
        <button onClick={() => setIsOpen(true)}>
          Open
        </button>

        {isOpen && <div>Conditional block</div>}
      </div>

      <div>Close</div>
    </div>
  );
};

describe('useOnClickOutside', () => {
  it('render', async () => {
    render(<TestComponent />);

    const Open = screen.getByText('Open');

    expect(Open).toBeInTheDocument();

    await userEvent.click(Open);

    const ConditionalBlock = screen.getByText(
      'Conditional block',
    );

    expect(ConditionalBlock).toBeInTheDocument();

    const Close = screen.getByText('Close');

    await userEvent.click(Close);

    expect(ConditionalBlock).not.toBeInTheDocument();
  });
});

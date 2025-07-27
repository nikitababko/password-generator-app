import React from 'react';

import { PROJECT_NAME } from '../../../constants';

import { Container } from './BottomSection.styles';
import { useController } from './BottomSection.controller';

export const BottomSection: React.FC = () => {
  const { copyright } = useController();

  return (
    <Container>
      <div>
        <span data-testid="CopyrightYear">
          {copyright.year}{' '}
        </span>

        <a
          href="https://nikitababko.com"
          target="_blank"
          rel="noreferrer"
        >
          {copyright.name}
        </a>
      </div>

      <span>{PROJECT_NAME}</span>
    </Container>
  );
};

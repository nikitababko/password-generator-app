import React from 'react';

import { Border, Container } from './Form.styles';
import { TopSection } from './TopSection';
import { MidSection } from './MidSection';
import { BottomSection } from './BottomSection';

export const Form: React.FC = () => {
  return (
    <Container>
      <TopSection />

      <Border />

      <MidSection />

      <BottomSection />
    </Container>
  );
};

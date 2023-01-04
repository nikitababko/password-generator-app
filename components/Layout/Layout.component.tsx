import React from 'react';
import { Container } from './Layout.styles';
import { LayoutProps } from './Layout.types';

export const Layout: React.FC<LayoutProps> = ({
  children,
}) => <Container>{children}</Container>;

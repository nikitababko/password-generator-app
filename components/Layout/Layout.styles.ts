import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: ${({ theme }) => {
    return theme.colors.backgroundColor;
  }};
`;

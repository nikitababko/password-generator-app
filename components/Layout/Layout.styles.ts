import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  padding: 36px 40px;
  background: ${({ theme }) => {
    return theme.colors.backgroundColor;
  }};
`;

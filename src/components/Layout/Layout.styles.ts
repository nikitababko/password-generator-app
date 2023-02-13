import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 36px 40px;
  background: ${({ theme }) => {
    return theme.backgroundColor;
  }};
`;

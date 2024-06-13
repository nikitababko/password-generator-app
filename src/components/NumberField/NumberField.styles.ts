import styled from 'styled-components';
import { COLOR_DESIGN_TOKENS } from '../../constants';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 4px 12px;
  width: 100px;
  height: 45px;
  background-color: ${({ theme }) => {
    return theme.selectBackgroundColor;
  }};
  border: 1px solid ${COLOR_DESIGN_TOKENS.BLUE_LIGHT_SKY};
  border-radius: 6px;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;
`;

export const ChevronsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

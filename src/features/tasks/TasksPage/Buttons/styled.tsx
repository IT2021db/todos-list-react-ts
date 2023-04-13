import styled, { css } from "styled-components";

export const Buttons = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.color.teal};
  border: none;
  margin: 0 0 0 20px;
  transition: color 0.3s;
  cursor: pointer;
 

  ${({ disabled }) => disabled && css`
  color: ${({ theme }) => theme.color.silver};
  cursor: default;
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
    display: flex;
    margin: auto;
    padding: 5px;
  }
`;
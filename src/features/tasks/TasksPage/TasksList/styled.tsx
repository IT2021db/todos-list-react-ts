import styled, { css } from "styled-components";

export const List = styled.ul`
  margin: 0;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  list-style: none;
  word-break: break-all;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.alto};

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;
//specify prop types for components
interface ContentProps {
  done: boolean;
}
interface ButtonProps {
  toggleDone?: boolean;
  remove?: boolean;
}
export const Content = styled.span<ContentProps>`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button<ButtonProps>`
  border: none;
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: ${({ theme }) => theme.color.forestGreen};

      &:hover {
        filter: brightness(110%);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.color.cardinal};

      &:hover {
        filter: brightness(120%);
      }
    `}
`;

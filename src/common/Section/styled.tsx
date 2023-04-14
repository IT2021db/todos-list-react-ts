import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  margin-bottom: 10px;
`;

export const Header = styled.header`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.alto};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
    padding-bottom: 15px;
  }
`;

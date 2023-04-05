import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 20px;

        @media (max-width: 767px) {
            grid-template-columns: 1fr;
        }
    `;

export const Button = styled.button`
    padding: 10px;
    background-color: ${({ theme }) => theme.color.teal};;
    color: ${({ theme }) => theme.color.white};
    border: none;
    cursor: pointer;

    &:hover{
        filter: brightness(120%);
         transform: scale(1.1);
         transition: 1s;
    }

    &:active{
        filter: brightness(150%);
    }
`;





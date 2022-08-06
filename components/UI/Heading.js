import styled from "styled-components";

export const Heading = styled.h1`
    position: relative;
    padding: 1em 0;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.accentOrange};

    /* &:after {
        background: ${({ theme }) => theme.colors.darkgrey};
        content: "";
        display: block;
        width: 50ch;
        height: 1px;
        left: 110%;
        top: 50%;
        position: absolute;
        @media (max-width: 1080px) {
            width: 200px;
        }
    } */

`;
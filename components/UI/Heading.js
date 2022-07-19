import styled from "styled-components";

export const Heading = styled.h1`
    position: relative;
    font-size: 2rem;
    padding: 1rem 0;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.accentOrange};

    &:after {
        background: ${({ theme }) => theme.colors.darkgrey};
        content: "";
        display: block;
        width: 600px;
        height: 1px;
        left: 110%;
        top: 50%;
        position: absolute;
    }
`;
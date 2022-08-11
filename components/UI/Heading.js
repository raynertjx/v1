import styled from "styled-components";

export const Heading = styled.h1`
    font-size: clamp(2rem, 5vw, 2.25rem);
    font-weight: 600;
    padding: 1.5em 0;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.accentOrange};
`;
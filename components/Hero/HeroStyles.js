import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.fontColor}
`;

export const IntroHeader = styled.h3`
    color: ${({ theme }) => theme.colors.accentOrange};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 1.2rem;
    margin: 0 4px;
`;

export const NameHeader = styled.h2`
    font-size: 6rem;
    padding-bottom: 1rem;
`;

export const Intro = styled.p`
    font-size: 1.5rem;
    margin: 0 4px;
`;

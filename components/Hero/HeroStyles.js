import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
`;

export const IntroHeader = styled.h3`
    color: ${({ theme }) => theme.colors.accentOrange};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 1.4rem;
    margin: 0 4px;
`;

export const NameHeader = styled.h2`
    font-size: 6.5rem;
    padding-bottom: 1rem;
    span {
        font-size: 4rem;
    }
`;

export const Intro = styled.div`
    color: #b2b2b2;
    p {
        font-size: 1.75rem;
        margin: 0 4px;
    }
`;

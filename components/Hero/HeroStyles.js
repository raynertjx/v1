import styled from "styled-components";

export const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
`;

export const IntroHeader = styled.h3`
    color: ${({ theme }) => theme.colors.accentOrange};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: clamp(0.9rem, 5vw, 1.5rem);
`;

export const NameHeader = styled.h2`
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(4rem, 10vw, 7rem);
    margin-left: -0.06em;
    span {
        font-size: clamp(2rem, 8vw, 4rem);
    }
`;

export const Intro = styled.div`
    color: #b2b2b2;
    p {
        font-size: clamp(1rem, 4vw, 1.75rem);
    }
`;

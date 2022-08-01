import styled from "styled-components";
import { Section } from "../UI/Section";

export const HeroSection = styled(Section)`
    min-height: 100vh;
`;

export const IntroHeader = styled.h3`
    color: ${({ theme }) => theme.colors.accentOrange};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: clamp(1rem, 3vw, 1.4rem);
    margin-left: 2px;
`;

export const NameHeader = styled.h2`
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(3.5rem, 12vw, 6.5rem);
    span {
        font-size: clamp(2rem, 8vw, 4rem);
    }
`;

export const Intro = styled.div`
    color: #b2b2b2;
    p {
        font-size: clamp(1rem, 3.5vw, 1.75rem);
        margin: 0 6px;
    }
`;

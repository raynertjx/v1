import styled from "styled-components";
import { Section } from "../UI/Section";

export const HeroSection = styled(Section)`
    min-height: 100vh;
`;

export const IntroHeader = styled.h3`
    color: ${({ theme }) => theme.colors.accentOrange};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 1.4rem;
    margin: 0 6px;
`;

export const NameHeader = styled.h2`
    color: ${({ theme }) => theme.colors.white};
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
        margin: 0 6px;
    }
`;

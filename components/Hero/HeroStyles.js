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
    font-size: clamp(1rem, 4vw, 1.75rem);
`; 

export const NameHeader = styled.h2`
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(3.5rem, 13vw, 6rem);
    font-weight: 700;
    margin-left: -0.06em;
    span {
        font-size: clamp(2rem, 8vw, 4rem);
    }
`;

export const Intro = styled.div`
    color: #b2b2b2;
    p {
        font-size: clamp(1.5rem, 4vw, 1.75rem);
        padding-bottom: 1em;
    }
`;

export const MoreBtn = styled.a`
    font-family: ${(props) => props.theme.fonts.mono};
    color: ${(props) => props.theme.colors.accentOrange};
    cursor: pointer;
    background: transparent;
    padding: 0.75em 2em;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colors.accentOrange};
    transition: 0.3s ease-in-out;
    :hover, :focus {
        box-shadow: inset 0 0 100px 200px rgba(255, 140, 0, 0.1);
    }
`;
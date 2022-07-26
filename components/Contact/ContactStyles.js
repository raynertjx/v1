import styled from "styled-components";
import { Section } from "../UI/Section";

export const ContactHeading = styled.h1`
    padding: 1em 0;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.accentOrange};
`

export const ContactSection = styled(Section)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContactPara = styled.p`
    text-align: center;
    max-width: 45ch;
    padding-bottom: 2rem;
`;

export const ContactBtn = styled.a`
    font-family: ${(props) => props.theme.fonts.mono};
    color: ${(props) => props.theme.colors.accentOrange};
    cursor: pointer;
    background: transparent;
    padding: 1em;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colors.accentOrange};
    transition: 300ms ease-in-out;
    &:hover {
        box-shadow: inset 0 0 100px 200px rgba(255, 140, 0, 0.1);
    }
`;

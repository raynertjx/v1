import styled from "styled-components";

export const ContactSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 600px;
    color: ${({ theme }) => theme.colors.white};
`;

export const ContactPara = styled.p`
    text-align: center;
    max-width: 45ch;
    padding-bottom: 3em;
`;

export const ContactBtn = styled.a`
    font-family: ${(props) => props.theme.fonts.mono};
    color: ${(props) => props.theme.colors.accentOrange};
    cursor: pointer;
    background: transparent;
    padding: 0.75em 2em;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colors.accentOrange};
    transition: 300ms ease-in-out;
    :hover, :focus {
        box-shadow: inset 0 0 100px 200px rgba(255, 140, 0, 0.1);
    }
`;

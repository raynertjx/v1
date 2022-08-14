import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
`;

export const FooterDiv = styled.div`
    font-size: 0.8rem;
    padding-bottom: 1em;
    a {
        &:hover {
            transition: color 0.3s ease-in-out;
            color: ${(props) => props.theme.colors.accentOrange};
        }
    }
`;

export const SocialsDiv = styled.div`
    display: flex;
    gap: 2em;
    svg {
        width: 20px;
        height: 20px;
        cursor: pointer;
        transition: 0.3s ease-out;
        :hover {
            color: ${(props) => props.theme.colors.accentOrange};
        }
    }
`;

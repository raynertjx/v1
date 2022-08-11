import styled from "styled-components";

export const FooterDiv = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 1.5rem;
    font-size: 0.8rem;
    a {
        &:hover {
            transition: color 0.3s ease-in-out; 
            color: ${(props) => props.theme.colors.accentOrange};
        }
    }
`;

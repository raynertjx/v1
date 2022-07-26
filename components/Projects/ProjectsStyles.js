import { Section } from "../UI/Section";
import styled from "styled-components";

export const ProjectSection = styled(Section)`
    margin: 0 auto;
` 
export const ProjectList = styled.ul``;
export const ProjectItem = styled.li`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    border-radius: 5px;
    ul {
        list-style-type: none;
        display: flex;
        justify-content: flex-end;
    }
`;

export const ProjectImage = styled.div`
    grid-area: 1 / 1 / -1 / 8;
    z-index: 1;
`;
export const ProjectContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    grid-area: 1 / 7 / -1 / -1;
    text-align: right;
    align-self: center;
    h2 {
        color: ${(props) => props.theme.colors.white}
    }
    p {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 10px;
        padding: 1.5rem;
        background: #414141;
        position: relative;
        z-index: 2;
    }
    ul {
        color: ${(props) => props.theme.colors.accentOrange};
        font-family: ${(props) => props.theme.fonts.mono};
        font-size: 0.75rem;
        gap: 1rem;
    }

    div {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
    }
    svg {
        width: 20px;
        height: 20px;
        cursor: pointer;   
        transition: 300ms ease-out;
        &:hover {
            color: ${(props) => props.theme.colors.accentOrange}
        } 
        
}
`;

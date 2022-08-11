import styled from "styled-components";

export const ProjectSection = styled.section`
    max-width: 1200px;
`;
export const ProjectList = styled.ul`
    list-style-type: none;
`;
export const ProjectItem = styled.li`
    @media (max-width: 768px) {
        padding: 1em;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 10px;
        background: #414141;
        border-radius: 5px;
    }
    @media (min-width: 769px) {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        align-items: center;
    }
`;

export const ProjectImage = styled.div`
    grid-area: 1 / 1 / -1 / 8;
    span {
        border-radius: 5px;
    }
`;
export const ProjectContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    grid-area: 1 / 7 / -1 / -1;
    padding: 1em;
    align-self: center;

    h2 {
        color: ${(props) => props.theme.colors.white};
    }

    @media (min-width: 769px) {
        text-align: right;
        p {
            z-index: 2;
            grid-area: 1 / 7 / -1 / -1;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 10px;
            background: #414141;
            border-radius: 5px;
            padding: 1.5em;
        }

        ul,
        div {
            justify-content: flex-end;
        }
    }

    ul {
        list-style-type: none;
        display: flex;
        color: ${(props) => props.theme.colors.accentOrange};
        font-size: 0.75rem;
        gap: 1em;
    }

    div {
        display: flex;
        gap: 1rem;
    }
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

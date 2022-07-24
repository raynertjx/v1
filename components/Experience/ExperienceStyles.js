import styled, { css } from "styled-components";

export const Tabs = styled.div`
    display: flex;
    gap: 2rem;
    height: 20vh;
`;

export const TabList = styled.ul`
    display: flex;
    flex-direction: column;
`;

export const TabItem = styled.li`
    cursor: pointer;
    list-style-type: none;
    padding: 0.5rem;
    color: ${(props) => (props.active ? "orange" : "")};

    &:hover {
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
        color: ${props => props.theme.colors.accentOrange}
    }
`;

export const TabContent = styled.div``;

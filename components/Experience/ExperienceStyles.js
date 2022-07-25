import styled, { keyframes, css } from "styled-components";

export const Tabs = styled.div`
    display: flex;
    padding: 2girem 0;
    gap: 2rem;
    height: 20vh;
`;

export const TabList = styled.ul`
    display: flex;
    flex-direction: column;
`;

export const TabItem = styled.li`
    text-align: left;
    white-space: nowrap;
    cursor: pointer;
    font-size: 0.75rem;
    list-style-type: none;
    font-family: ${(props) => props.theme.fonts.mono};
    padding: 1rem 2rem;
    color: ${(props) => (props.active ? props.theme.colors.accentOrange : "")};
    position: relative;

    transition: 300ms ease-in-out;

    &:hover {
        box-shadow: inset 0 0 100px 200px rgba(255, 255, 255, 0.05);
        color: ${(props) => props.theme.colors.accentOrange};
    }

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 2px;
        background: ${(props) =>
            props.active
                ? props.theme.colors.accentOrange
                : props.theme.colors.darkgrey};
        transition: 300ms ease-in-out;
    }
`;

const fadein = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }`;

export const TabContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    animation: ${(props) =>
        props.fade &&
        css`
            ${fadein} 400ms ease-in-out
        `};
    h3 {
        color: ${(props) => props.theme.colors.white}
    }
    h3 > span {
        color: ${(props) => props.theme.colors.accentOrange};
    }
    h5 {
        font-family: ${(props) => props.theme.fonts.mono};
    }
    ul {
        padding: 0;
        margin: 0;
    }
    li {
        display: flex;
        gap: 1rem;
        padding: 0.5rem 0rem;
        &:before {
            content: "▹";
            position: relative;
            bottom: 1px;
            color: ${(props) => props.theme.colors.accentOrange};
        }
    }
`;

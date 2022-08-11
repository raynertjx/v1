import styled, { keyframes, css } from "styled-components";

export const ExperienceSection = styled.section`
    max-width: 900px;
`;

export const Tabs = styled.div`
    display: flex;
    padding: 1em 0;
    gap: 2rem;
    height: 20vh;
    flex-direction: column;
    @media (min-width: 600px) {
        flex-direction: row;
    }
`;

export const TabList = styled.ul`
    display: flex;

    @media (min-width: 600px) {
        flex-direction: column;
    }
`;

export const TabItem = styled.li`
    text-align: left;
    white-space: nowrap;
    cursor: pointer;
    font-size: 0.8rem;
    list-style-type: none;
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
        bottom: 0;
        height: 2px;
        width: 100%;
        background: ${(props) =>
            props.active
                ? props.theme.colors.accentOrange
                : props.theme.colors.darkgrey};
        transition: 300ms ease-in-out;

        @media (min-width: 600px) {
            top: 0;
            height: 100%;
            width: 2px;
        }
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
        font-size: 1.25rem;
        color: ${(props) => props.theme.colors.white};
    }
    h3 > span {
        color: ${(props) => props.theme.colors.accentOrange};
    }
    h4, li {
        color: ${(props) => props.theme.colors.lightgrey};
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
            bottom: 1px;
            color: ${(props) => props.theme.colors.accentOrange};
        }
    }
`;

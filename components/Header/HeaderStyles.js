import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    position: fixed;
    display: flex;
    height: 65px;
    top: ${(props) => (props.visible ? "0" : "-65px")};
    justify-content: space-between;
    align-items: center;
    padding: 2.5em 5em;
    color: ${({ theme }) => theme.colors.fontColor};
    font-weight: 500;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 1.25rem;

    transition: top 0.6s;

    ul {
        list-style-type: none;
        display: flex;
        gap: 2.5em;
    }
`;

export const NavItem = styled.li`
    text-decoration: none;
    position: relative;
    transition: color 175ms linear;

    &:hover {
        color: ${({ theme }) => theme.colors.accentOrange};
    }

    &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.accentOrange};

        transform: scaleX(0);
        transform-origin: right;
        transition: transform 175ms ease-in;
    }

    &:hover:after {
        transform-origin: left;
        transform: scaleX(1);
    }
`;

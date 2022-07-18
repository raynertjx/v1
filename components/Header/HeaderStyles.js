import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 5rem 0rem 5rem;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.fontColor};
    font-family: ${({ theme }) => theme.fonts.mono};

    a {
        font-size: 1.1rem;
    }

    ul {
        list-style-type: none;
        display: flex;
        gap: 3rem;
    }
`;

export const NavItem = styled.li`
    text-decoration: none;
    position: relative;
    font-size: 1.1rem;

    &:hover {
        color: ${({ theme }) => theme.colors.accentOrange};
        transition: transform 300ms linear;
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
        transition: transform 300ms ease-in;
    }

    &:hover:after {
        transform-origin: left;
        transform: scaleX(1);
    }
`;

import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    position: fixed;
    display: flex;
    height: 60px;
    top: ${props => props.visible ? '0' : '-60px'};
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem 1rem 5rem;
    color: ${({ theme }) => theme.colors.fontColor};
    font-family: ${({ theme }) => theme.fonts.mono};

    transition: top 0.6s;

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

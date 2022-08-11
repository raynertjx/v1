import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    position: fixed;
    z-index: 100;
    display: flex;
    height: 65px;
    top: ${(props) => (props.visible ? "0" : `calc(-65px - 2.5em)`)};
    justify-content: space-between;
    align-items: center;
    background-color: rgba(45, 45, 45, 0.8);
    backdrop-filter: blur(15px);
    color: ${({ theme }) => theme.colors.fontColor};
    font-weight: 500;
    font-size: 1.25rem;
    transition: top 0.3s ease-in-out;
    padding: 2.5em 4vw;

    div {
        font-size: 1.25rem;
        font-weight: 600;
    }

    ul {
        list-style-type: none;
        display: flex;
        gap: 2.5em;

        @media (max-width: 768px) {
            display: flex;
            height: 100vh;
            font-size: 1.5rem;
            position: fixed;
            inset: ${(props) => (props.expandNav ? "0 0 0 30%" : "0 0 0 100%")};
            background: #373737;
            flex-direction: column;
            padding: min(30vh, 10rem) 3em;
            z-index: 100;
            transition: inset 0.2s ease-in-out;
            -webkit-box-shadow: -7px 0px 25px 0px rgba(0, 0, 0, 0.35);
            box-shadow: -7px 0px 25px 0px rgba(0, 0, 0, 0.35);
        }
    }
`;

export const NavItem = styled.li`
    text-decoration: none;
    position: relative;
    transition: color 175ms linear;

    &:hover, &:active {
        color: ${({ theme }) => theme.colors.accentOrange};
    }

    @media (min-width: 769px) {
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
    }
`;

export const HamburgerDiv = styled.div`
    display: none;
    @media (max-width: 768px) {
        position: absolute;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        aspect-ratio: 1;
        right: 2rem;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        div {
            width: 2.5rem;
            height: 2px;
            border-radius: 3px;
            transition: all 0.3s ease-in-out;
            background: ${({ theme }) => theme.colors.accentOrange};
            ${(props) => {
                if (props.expandNav)
                    return `
                        background: transparent;
                        box-shadow: none;
                    `;
            }}

            &:before,
            &:after {
                content: "";
                position: absolute;
                width: 2.5rem;
                height: 2px;
                border-radius: 3px;
                background: ${({ theme }) => theme.colors.accentOrange};
                transition: all 0.2s ease-in-out;
            }

            &:before {
                transform: translateY(-9px);
                ${(props) => {
                    if (props.expandNav)
                        return `
                        transform: rotate(45deg) translate(2px, -2px);
                    `;
                }}
            }

            &:after {
                transform: translateY(9px);
                ${(props) => {
                    if (props.expandNav)
                        return `
                        transform: rotate(-45deg) translate(2px, 2px);
                    `;
                }}
            }
        }
    }
`;

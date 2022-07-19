import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const Header = styled.h1`
    position: relative;
    font-size: 2.5rem;
    padding: 1rem 0;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.accentOrange};

    &:after {
        /* background: ${({ theme }) => theme.colors.lightgrey}; */
        background: #595959;
        content: "";
        display: block;
        width: 600px;
        height: 1px;
        left: 110%;
        top: 50%;
        position: absolute;
    }
`;

export const Info = styled.div`
    p {
        color: ${({ theme }) => theme.colors.lightgrey};
        font-size: 1.3rem;
        padding: 1rem 0;
    }
`;

export const List = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem 2rem;
    font-size: 1.3rem;
    font-family: ${({ theme }) => theme.fonts.mono};
    padding: 1rem 0;

    li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`;

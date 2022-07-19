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
    padding: 2rem 0;
    font-family: ${({theme}) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.accentOrange};

    /* &:after {
        background: ${({ theme }) => theme.colors.fontColor};
        content: "";
        display: block;
        width: 400px;
        height: 0.5px;
        left: 110%;
        top: 50%;
        position: absolute;
    } */
`;

export const Info = styled.div`
p {
    width: 90%;
    font-size: 1.1rem;
}
`

export const List = styled.ul``
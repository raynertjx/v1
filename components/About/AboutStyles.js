import styled from "styled-components";

export const Info = styled.div`
    p {
        color: ${({ theme }) => theme.colors.lightgrey};
        font-size: 1.3rem;
        padding: 1rem 0;
        font-family: ${({theme})=> theme.fonts.sans}
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

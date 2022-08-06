import styled from "styled-components";

export const AboutSection = styled.section`
    max-width: 1000px;
`

export const Info = styled.div`
    p {
        color: ${({ theme }) => theme.colors.lightgrey};
        font-size: 1.2rem;
        padding: 1rem 0;
        max-width: 75ch;
    }
`;

export const List = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 200px));
    gap: 0.5rem 1rem;
    font-size: 1.1rem;
    font-family: ${({ theme }) => theme.fonts.mono};
    padding: 1rem 0;

    li {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`;


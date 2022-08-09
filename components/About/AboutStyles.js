import styled from "styled-components";

export const AboutSection = styled.section`
    max-width: 1000px;
    color: ${({ theme }) => theme.colors.white};
`;

export const Info = styled.div`
    p {
        font-size: 1.25rem;
        padding-bottom: 2em;
        max-width: 70ch;
    }
`;

export const List = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 200px));
    gap: 0.5rem 1rem;
    font-size: 1.1rem;
    font-family: ${({ theme }) => theme.fonts.mono};

    li {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`;

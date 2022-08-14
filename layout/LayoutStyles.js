import styled from "styled-components";

export const Blur = styled.div`
    ${(props) => {
        if (props.expandNav)
            return `
                position: relative;
                z-index: -1;
                filter: blur(5px);
            `;
    }}
    transition: filter 0.2s ease-in-out;
`;

export const Container = styled.main`
    width: 100%;
    max-width: 60em;
    margin: 0px auto;
    padding: 0 4vw;

    @media (min-width: 769px) {
        padding: 0 8vw;
    }
    @media (min-width: 1024px) {
        padding: 0;
    }
`;

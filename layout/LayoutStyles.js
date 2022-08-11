import styled from "styled-components";

export const Blur = styled.div`
    ${(props) => {
        if (props.expandNav)
            return `
                position: relative;
                z-index: -1;
                filter: blur(10px);
            `;
    }}
    transition: filter 0.2s ease-in-out;
`;

export const Container = styled.main`
    width: 100%;
    max-width: 65em;
    margin: 0px auto;

    @media (max-width: 1135px) {
        padding: 0 4vw;
    }

    /* @media (min-width: 768px) {
        padding: 0 4vw;
    } */
`;

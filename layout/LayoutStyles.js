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

    @media (max-width: 1135px) {
        padding: 0 4vw;
    }
`;

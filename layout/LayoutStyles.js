import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 60rem;
    margin: 0px auto;
    padding: 0 2em;

    @media (min-width: 768px) {
        padding: 0 4em;
    }
    
    @media (min-width: 1024px) {
        padding: 0;
    }
    

`;

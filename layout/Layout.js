import React from "react";
import { Container } from "./LayoutStyles";

const Layout = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default Layout;

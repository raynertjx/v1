import React from "react";
import { Container, Blur } from "./LayoutStyles";

const Layout = (props) => {
    return (
        <Blur expandNav={props.expandNav}>
            <Container>{props.children}</Container>
        </Blur>
    );
};

export default Layout;

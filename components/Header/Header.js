import React, { useEffect, useState } from "react";
import { Container, NavItem } from "./HeaderStyles";

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 25);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    return (
        <Container visible={visible}>
            <a>raynertjx</a>
            <nav>
                <ul>
                    <NavItem>
                        <a href="">About</a>
                    </NavItem>
                    <NavItem>
                        <a href="">Experience</a>
                    </NavItem>
                    <NavItem>
                        <a href="">Projects</a>
                    </NavItem>
                    <NavItem>
                        <a href="">Contact</a>
                    </NavItem>
                </ul>
            </nav>
        </Container>
    );
};

export default Header;

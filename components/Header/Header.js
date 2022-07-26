import React, { useEffect, useState } from "react";
import { Container, NavItem } from "./HeaderStyles";
import Link from "next/link";

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
            <Link href="#hero">raynertjx</Link>
            <nav>
                <ul>
                    <NavItem>
                        <Link href="#about">About</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="#experience">Experience</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="#projects">Projects</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="#contact">Contact</Link>
                    </NavItem>
                </ul>
            </nav>
        </Container>
    );
};

export default Header;

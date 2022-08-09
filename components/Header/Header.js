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
            <div>
                <Link href="#hero">raynertjx.</Link>
            </div>
            <nav>
                <ul>
                    <NavItem>
                        <Link href="#about">about.</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="#experience">experience.</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="#projects">projects.</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="#contact">contact.</Link>
                    </NavItem>
                </ul>
            </nav>
        </Container>
    );
};

export default Header;

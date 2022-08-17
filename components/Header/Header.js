import React, { useEffect, useState, useCallback } from "react";
import { Container, NavItem, HamburgerDiv, HamburgerIcon } from "./HeaderStyles";
import Link from "next/link";
import Reveal from "react-awesome-reveal";
import { fadeDown, fadeUp } from "../../styles/animations";

const Header = (props) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = useCallback(() => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 25);
        setPrevScrollPos(currentScrollPos);
    }, [prevScrollPos]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    return (
        <Container visible={visible} expandNav={props.expandNav}>
            <Reveal keyframes={fadeDown} duration={500} triggerOnce>
                <div>
                    <Link href="#hero">raynertoh.</Link>
                </div>
            </Reveal>
            <HamburgerDiv>
                <Reveal keyframes={fadeDown} duration={500} delay={250} triggerOnce>
                    <HamburgerIcon expandNav={props.expandNav} onClick={() => props.setExpandNav(!props.expandNav)}></HamburgerIcon>
                </Reveal>
            </HamburgerDiv>
            <nav>
                <ul>
                    <Reveal
                        keyframes={fadeDown}
                        duration={500}
                        delay={200}
                        damping={0.3}
                        triggerOnce
                        cascade
                    >
                        <NavItem onClick={() => props.setExpandNav(false)}>
                            <Link href="#about">about.</Link>
                        </NavItem>
                        <NavItem onClick={() => props.setExpandNav(false)}>
                            <Link href="#experience">experience.</Link>
                        </NavItem>
                        <NavItem onClick={() => props.setExpandNav(false)}>
                            <Link href="#projects">projects.</Link>
                        </NavItem>
                        <NavItem onClick={() => props.setExpandNav(false)}>
                            <Link href="#contact">contact.</Link>
                        </NavItem>
                    </Reveal>
                </ul>
            </nav>
        </Container>
    );
};

export default Header;

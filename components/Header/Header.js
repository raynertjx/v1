import React, { useEffect, useState, useContext } from "react";
import { Container, NavItem, HamburgerDiv } from "./HeaderStyles";
import Link from "next/link";
import { NavContext } from "../../pages/index";

const Header = (props) => {
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
        <Container visible={visible} expandNav={props.expandNav}>
            <div>
                <Link href="#hero">raynertjx.</Link>
            </div>
            <HamburgerDiv expandNav={props.expandNav}>
                <div onClick={() => props.setExpandNav(!props.expandNav)}></div>
            </HamburgerDiv>
            <nav>
                <ul>
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
                </ul>
            </nav>
        </Container>
    );
};

export default Header;

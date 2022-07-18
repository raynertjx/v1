import { Container, NavItem } from "./HeaderStyles";

const Header = () => {
    return (
        <Container>
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

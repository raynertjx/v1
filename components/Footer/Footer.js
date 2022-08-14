import { FooterContainer, FooterDiv, SocialsDiv } from "./FooterStyles";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const Footer = () => {
    return (
        <FooterContainer>
            <SocialsDiv>
                <a href="https://github.com/raynertjx" target="_blank">
                    <FiGithub />
                </a>
                <a href="https://twitter.com/raynertjx" target="_blank">
                    <FiTwitter />
                </a>
                <a
                    href="https://www.linkedin.com/in/rayner-toh-90a3b11b4/"
                    target="_blank"
                >
                    <FiLinkedin />
                </a>
            </SocialsDiv>
            <FooterDiv>
                <a href="https://github.com/raynertjx/portfolio" target="_blank">
                    Designed & Built by Rayner Toh
                </a>
            </FooterDiv>
        </FooterContainer>
    );
};

export default Footer;

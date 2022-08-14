import React from "react";
import { ContactPara, ContactBtn, ContactSection } from "./ContactStyles";
import { Heading } from "../UI/Heading";
import Reveal from "react-awesome-reveal";
import { fadeUp } from "../../styles/animations";

const Contact = () => {
    return (
        <ContactSection id="contact">
            <Reveal keyframes={fadeUp} fraction={0.5} triggerOnce>
                <Heading>contact.</Heading>
                <ContactPara>
                    I'm always open to new opportunities, so my inbox is always
                    open. Furthermore, if you have a question or just want to
                    say hello, I'll do my best to get back to you!
                </ContactPara>
                <ContactBtn href="mailto:rayner742@gmail.com" target="_blank">
                    Say Hello
                </ContactBtn>
            </Reveal>
        </ContactSection>
    );
};

export default Contact;

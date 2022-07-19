import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { Section, Header, Info, List } from "./AboutStyles";
import { AboutParagraphs, AboutSkills } from "../../lib/constants";

const About = () => {
    return (
        <Section>
            <Header>About Me</Header>
            <Info>
                {AboutParagraphs.map((para) => (
                    <p>{para}</p>
                ))}
            </Info>
            <List>
                {AboutSkills.map((skill) => (
                    <li><AiOutlineCaretRight />{skill}</li>
                ))}
            </List>
        </Section>
    );
};

export default About;

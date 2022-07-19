import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { Info, List } from "./AboutStyles";
import { Heading } from "../UI/Heading";
import { Section } from "../UI/Section";
import { AboutParagraphs, AboutSkills } from "../../lib/constants";

const About = () => {
    return (
        <Section>
            <Heading>About Me</Heading>
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

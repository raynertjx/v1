import React from "react";
import { IconContext } from "react-icons/lib";
import { Info, List } from "./AboutStyles";
import { Heading } from "../UI/Heading";
import { Section } from "../UI/Section";
import { AboutParagraphs, AboutSkills } from "../../lib/constants";
import { TbCaretRight } from "react-icons/tb";
import { darkTheme } from "../../styles/theme";

const About = () => {
    return (
        <Section>
            <Heading>About Me</Heading>
            <Info>
                {AboutParagraphs.map((para) => (
                    <p key={para.id}>{para.text}</p>
                ))}
            </Info>
            <List>
                <IconContext.Provider value={{color: darkTheme.colors.accentOrange}}>
                    {AboutSkills.map((skill) => (
                        <li key={skill.id}><TbCaretRight />{skill.title}</li>
                    ))}
                </IconContext.Provider>
            </List>
        </Section>
    );
};

export default About;

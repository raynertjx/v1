import React from "react";
import { IconContext } from "react-icons/lib";
import { Info, List } from "./AboutStyles";
import { Heading } from "../UI/Heading";
import { AboutSection } from "./AboutStyles";
import { AboutParagraphs, AboutSkills } from "./AboutConstants";
import { TbCaretRight } from "react-icons/tb";
import { darkTheme } from "../../styles/theme";
import Reveal from "react-awesome-reveal";
import { fadeUp } from "../../styles/animations";


const About = () => {
    return (
        <AboutSection id="about">
            <Reveal keyframes={fadeUp} fraction={0.5} triggerOnce>
                <Heading>about me.</Heading>
                <Info>
                    {AboutParagraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </Info>
                <List>
                    <IconContext.Provider
                        value={{ color: darkTheme.colors.accentOrange }}
                    >
                        {AboutSkills.map((skill, i) => (
                            <li key={i}>
                                <TbCaretRight />
                                {skill}
                            </li>
                        ))}
                    </IconContext.Provider>
                </List>
            </Reveal>
        </AboutSection>
    );
};

export default About;

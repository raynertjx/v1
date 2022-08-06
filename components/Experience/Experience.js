import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import { Heading } from "../UI/Heading";
// import { Section } from "../UI/Section";
import { ExperienceSection } from "./ExperienceStyles";
import { TabList, TabItem, TabContent, Tabs } from "./ExperienceStyles";
import { Jobs } from "../../lib/constants";
import { TbCaretRight } from "react-icons/tb";
import { darkTheme } from "../../styles/theme";

const Experience = () => {
    const [selectedBtnId, setSelectedBtnId] = useState(0);
    const [fadeIn, setFadeIn] = useState(false);

    return (
        <ExperienceSection id="experience">
            <Heading>Experience</Heading>
            <Tabs>
                <TabList>
                    {Jobs.map((item) => (
                        <TabItem
                            active={item.id === selectedBtnId}
                            onClick={() => {
                                setSelectedBtnId(item.id);
                                setFadeIn(true);
                            }}
                            key={item.id}
                            id={item.id}
                        >
                            {item.place}
                        </TabItem>
                    ))}
                </TabList>
                <TabContent
                    fade={fadeIn}
                    onAnimationEnd={() => setFadeIn(false)}
                    icon={<TbCaretRight/>}
                >
                    <h3>{Jobs[selectedBtnId].role} <span>@ {Jobs[selectedBtnId].place}</span></h3>
                    <h5>{Jobs[selectedBtnId].date}</h5>
                    <IconContext.Provider value={{color: darkTheme.colors.accentOrange}}>
                        <ul>
                            {Jobs[selectedBtnId].content.map((item) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                    </IconContext.Provider>
                </TabContent>
            </Tabs>
        </ExperienceSection>
    );
};

export default Experience;

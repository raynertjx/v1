import React, { useEffect, useState } from "react";
import { Heading } from "../UI/Heading";
import { Section } from "../UI/Section";
import { TabList, TabItem, TabContent, Tabs } from "./ExperienceStyles";
import { Jobs } from "../../lib/constants";

const Experience = () => {
    const [selectedBtnId, setSelectedBtnId] = useState(0);

    return (
        <Section>
            <Heading>Experience</Heading>
            <Tabs>
                <TabList>
                    {Jobs.map((item) => (
                        <TabItem
                            active={item.id === selectedBtnId}
                            onClick={() => setSelectedBtnId(item.id)}
                            key={item.id}
                            id={item.id}
                        >
                            {item.button_title}
                        </TabItem>
                    ))}
                </TabList>
                <TabContent>
                    <h3>{Jobs[selectedBtnId].job_title}</h3>
                    <h4>{Jobs[selectedBtnId].job_date}</h4>
                    <ul>
                        {Jobs[selectedBtnId].job_content.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </TabContent>
            </Tabs>
        </Section>
    );
};

export default Experience;

import React, { useEffect, useState } from "react";
import { Heading } from "../UI/Heading";
import { Section } from "../UI/Section";
import { TabList, ContentDiv } from "./ExperienceStyles";
import { Jobs } from "../../lib/constants";

const Experience = () => {
    const [selectedBtnId, setSelectedBtnId] = useState("m1");
    const [selectedJob, setSelectedJob] = useState();
    useEffect(() => {
        const job = Jobs.find((item) => item.id === selectedBtnId);
        setSelectedJob(job);
    }, [selectedBtnId]);

    const buttonClickHandler = (e) => {
        setSelectedBtnId(e.target.id);
    };

    return (
        <Section>
            <Heading>Experience</Heading>
            <div>
                <TabList>
                    {Jobs.map((item) => (
                        <button onClick={buttonClickHandler} key={item.id} id={item.id}>
                            {item.button_title}
                        </button>
                    ))}
                </TabList>
                <ContentDiv>
                        {/* <h3>{selectedJob.job_title}</h3>
                        <p>{selectedJob.job_date}</p> */}
                </ContentDiv>
            </div>
        </Section>
    );
};

export default Experience;

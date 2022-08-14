import React from "react";
import { Heading } from "../UI/Heading";
import Image from "next/image";
import {
    ProjectList,
    ProjectItem,
    ProjectImage,
    ProjectContent,
    ProjectSection,
} from "./ProjectsStyles";
import { projects } from "./ProjectsConstants";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Reveal from "react-awesome-reveal";
import { fadeUp } from "../../styles/animations";

const Projects = () => {
    return (
        <ProjectSection id="projects">
            <Reveal keyframes={fadeUp} fraction={0.5} triggerOnce>
                <Heading>projects.</Heading>
                <ProjectList>
                    {projects.map((proj, i) => (
                        <ProjectItem key={i}>
                            <ProjectImage>
                                <Image src={proj.img} alt="Help A Neighbour Out Image" />
                            </ProjectImage>
                            <ProjectContent img={proj.img}>
                                <h2>{proj.title}</h2>
                                <p>{proj.desc}</p>
                                <ul>
                                    {proj.skills.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <div>
                                    <a href={proj.github_link} target="_blank" rel="noreferrer">
                                        <FiGithub />
                                    </a>
                                    <a href={proj.deployment_link} target="_blank" rel="noreferrer">
                                        <FiExternalLink />
                                    </a>
                                </div>
                            </ProjectContent>
                        </ProjectItem>
                    ))}
                </ProjectList>
            </Reveal>
        </ProjectSection>
    );
};

export default Projects;

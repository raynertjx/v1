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

const Projects = () => {
    return (
        <ProjectSection id="projects">
            <Heading>projects.</Heading>
            <ProjectList>
                {projects.map((proj) => (
                    <ProjectItem>
                        <ProjectImage>
                            <Image src={proj.img} />
                        </ProjectImage>
                        <ProjectContent img={proj.img}>
                            <h2>{proj.title}</h2>
                            <p>{proj.desc}</p>
                            <ul>
                                {proj.skills.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                            <div>
                                <a href={proj.github_link} target="_blank">
                                    <FiGithub />
                                </a>
                                <a href={proj.deployment_link} target="_blank">
                                    <FiExternalLink />
                                </a>
                            </div>
                        </ProjectContent>
                    </ProjectItem>
                ))}
            </ProjectList>
        </ProjectSection>
    );
};

export default Projects;

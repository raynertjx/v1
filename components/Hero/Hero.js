import { HeroDesc } from "../../lib/constants";
import { Section, IntroHeader, NameHeader, Intro } from "./HeroStyles";

const Hero = () => {
    return (
        <Section>
            <IntroHeader>Hi, my name is</IntroHeader>
            <NameHeader>Rayner Toh.</NameHeader>
            <Intro>{HeroDesc}</Intro>
        </Section>
    );
};

export default Hero;

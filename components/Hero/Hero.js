import { HeroDesc1, HeroDesc2 } from "../../lib/constants";
import { Section, IntroHeader, NameHeader, Intro } from "./HeroStyles";

const Hero = () => {
    return (
        <Section>
            <IntroHeader>Hi, my name is</IntroHeader>
            <NameHeader>
                Rayner Toh<span>.</span>
            </NameHeader>
            <Intro>
                <p>{HeroDesc1}</p>
            </Intro>
        </Section>
    );
};

export default Hero;

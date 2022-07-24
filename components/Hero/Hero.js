import { HeroDesc1 } from "../../lib/constants";
import { HeroSection, IntroHeader, NameHeader, Intro } from "./HeroStyles";

const Hero = () => {
    return (
        <HeroSection>
            <IntroHeader>Hi, my name is</IntroHeader>
            <NameHeader>
                Rayner Toh<span>.</span>
            </NameHeader>
            <Intro>
                <p>{HeroDesc1}</p>
            </Intro>
        </HeroSection>
    );
};

export default Hero;

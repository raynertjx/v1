import { HeroDesc1 } from "../../lib/constants";
import { HeroSection, IntroHeader, NameHeader, Intro, MoreBtn } from "./HeroStyles";

const Hero = () => {
    return (
        <HeroSection id="hero">
            <IntroHeader>Hi there! My name is</IntroHeader>
            <NameHeader>
                Rayner Toh<span>.</span>
            </NameHeader>
            <Intro>
                <p>{HeroDesc1}</p>
            </Intro>
            <MoreBtn href="#about">Find Out More</MoreBtn>
        </HeroSection>
    );
};

export default Hero;

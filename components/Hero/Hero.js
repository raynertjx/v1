import { HeroDesc1 } from "./HeroConstants";
import {
    HeroSection,
    IntroHeader,
    NameHeader,
    Intro,
    MoreBtn,
} from "./HeroStyles";
import Reveal from "react-awesome-reveal";
import { fadeUp } from "../../styles/animations";

const Hero = () => {
    return (
        <HeroSection id="hero">
            <Reveal
                keyframes={fadeUp}
                duration={500}
                delay={800}
                damping={0.3}
                triggerOnce
                cascade
            >
                <IntroHeader>Hi there! My name is</IntroHeader>
                <NameHeader>
                    Rayner Toh<span>.</span>
                </NameHeader>
                <Intro>
                    <p>{HeroDesc1}</p>
                </Intro>
                <MoreBtn href="#about">Find Out More</MoreBtn>
            </Reveal>
        </HeroSection>
    );
};

export default Hero;

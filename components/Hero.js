import { HeroDesc } from "../lib/constants";
import classes from "./Hero.module.css";
import styled from 'styled-components';

const Header1 = styled.h1`
    color: var(--font-color)
`

const Hero = () => {
    return (
        <section className={classes["hero-container"]}>
            <div className={classes.inner}>
                <h4 className={classes["hi-sentence"]}>Hi, my name is</h4>
                <Header1>Rayner Toh.</Header1>
                <h1>I love building things for the web.</h1>
                <p>{HeroDesc}</p>
            </div>
        </section>
    );
};

export default Hero;

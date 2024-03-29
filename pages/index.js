import Head from "next/head";
import Image from "next/image";
import Layout from "../layout/Layout";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";

export default function Home() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isNavExpanded ? "hidden" : "auto";
    }, [isNavExpanded])

    return (
        <>
        <Head>
            <title>Rayner Toh</title>
            <meta name='description' content='Hi, my name is Rayner! I&apos;m a Year 1 Computer Science undergraduate at the National University of Singapore.' />
        </Head>
            <Header expandNav={isNavExpanded} setExpandNav={setIsNavExpanded}/>
            <Layout expandNav={isNavExpanded}>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
                <Footer />
            </Layout>
        </>
    );
}

import Head from "next/head";
import Image from "next/image";
import Layout from "../layout/layout";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Layout>
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

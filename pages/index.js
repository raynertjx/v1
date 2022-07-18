import Head from "next/head";
import Image from "next/image";
import Layout from "../layout/layout";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import About from "../components/About/About";

export default function Home() {
    return (
        <>
            <Header />
            <Layout>
                <Hero />
                <About />
            </Layout>
        </>
    );
}

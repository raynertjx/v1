import Head from "next/head";
import Image from "next/image";
import Layout from "../layout/layout";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";

export default function Home() {
    return (
        <>
            <Header />
            <Layout>
                <Hero />
            </Layout>
        </>
    );
}

import Head from 'next/head'
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const page = {
    title: "Programming Guides",
    description: "Easy to follow guides on complex topics written and maintained by the community"
}

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header page={page}/>

            <Main/>

            <Footer/>
        </div>
    )
}

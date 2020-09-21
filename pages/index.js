import Head from 'next/head'
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const page = {
    title: "Programming Guides",
    description: "Easy to follow guides on complex topics written and maintained by the community"
}

const posts = [
    {
        id: 1,
        title: "Proxy servers",
        description: "How do proxy servers work and what are forward and reverse proxies?",
        authorName: "NamDQ",
        authorAvatar: "https://material-ui.com/static/images/avatar/1.jpg",
        createDate: "July 24, 2020"
    },
    {
        id: 2,
        title: "CI and CD",
        description: "Learn the basics of CI/CD and how to implement that with GitHub Actions.",
        authorName: "NamDQ",
        authorAvatar: "https://material-ui.com/static/images/avatar/1.jpg",
        createDate: "July 24, 2020"
    },
    {
        id: 3,
        title: "SSO - Single Sign On",
        description: "Learn the basics of SAML and anderstand how does Single Sign On work.",
        authorName: "NamDQ",
        authorAvatar: "https://material-ui.com/static/images/avatar/1.jpg",
        createDate: "July 24, 2020"
    },
    {
        id: 4,
        title: "SSO - Single Sign On",
        description: "Learn the basics of SAML and anderstand how does Single Sign On work.",
        authorName: "NamDQ",
        authorAvatar: "https://material-ui.com/static/images/avatar/1.jpg",
        createDate: "July 24, 2020"
    }
]

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header page={page}/>

            <Main posts={posts}/>

            <Footer/>
        </div>
    )
}

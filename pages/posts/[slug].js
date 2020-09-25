import React from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import {posts} from "../../constants/Posts";

export async function getStaticPaths() {
    const paths = posts.map((post) => ({
        params: {slug: post.slug},
    }))

    return {paths, fallback: false}
}

export async function getStaticProps({params}) {
    const result = posts.find((post) => post.slug === params.slug);
    return {
        props: {post: result}
    }
}

function Post(props) {
    const post = props.post;

    return (
        <div>
            <Head>
                <title>{post.title}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header page={post}/>

            <Content post={post}/>

            <Footer/>
        </div>
    )
}

export default Post;
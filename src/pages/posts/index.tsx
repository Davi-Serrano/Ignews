import { GetStaticProps } from "next";
import Head from "next/head"
import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client"

import styles from "./styles.module.scss"


export default function Posts(){
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>12 de março</time> 
                        <strong>Creating a monogoosse with Lerma</strong>  
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing el</p>
                    </a>
                    <a href="#">
                        <time>12 de março</time> 
                        <strong>Creating a monogoosse with Lerma</strong>  
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing el</p>
                    </a>
                    <a href="#">
                        <time>12 de março</time> 
                        <strong>Creating a monogoosse with Lerma</strong>  
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing el</p>
                    </a>
                    <a href="#">
                        <time>12 de março</time> 
                        <strong>Creating a monogoosse with Lerma</strong>  
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing el</p>
                    </a>
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ()=>{
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'publication')
    ],{
        fetch: ['publication', 'publication.content'],
        pageSize: 100,
    })

    console.log(response)

    return{
        props: {}
    }
}
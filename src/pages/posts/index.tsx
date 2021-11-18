import Head from "next/head"
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
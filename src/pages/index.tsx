import Head from "next/head"
import { SubscribeButton } from "../components/SubscribeButton"

import styles from "./home.module.scss"
export default function Home() {
  return (
    <>
     <Head>
       <title>  Inicio | Ig.News </title>
     </Head>
     
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
          <span>Hey, Welcome</span>
          <h1>News About the <span>React</span> word.</h1>

          <p>
            Get acess to all the publications <br />
            <span>For 9.98 month</span>
          </p>

          <SubscribeButton />
      </section>  

      <img src="/images/Avatar.svg" alt="Avatar" />
    </main>
    </>
  )
}

import Head from "next/head"

import styles from "../styles/home.module.scss"

export default function Home() {
  return (
    <>
     <Head>
       <title>  Inicio | Ig.News </title>
     </Head>
     
    <h1 className={styles.titles}>
     
      Hellow <span>Word</span> 
    </h1>
    </>
  )
}

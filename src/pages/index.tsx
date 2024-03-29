import { GetStaticProps} from "next"

import Head from "next/head"

import { SubscribeButton } from "../components/SubscribeButton"
import { stripe } from "../services/stripe"

import styles from "./home.module.scss"

interface HomeProps {
      product: {
        priceId: string,
        amount: string
      }

}

export default function Home({ product }: HomeProps) {

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
              <span>For {product.amount} month</span>
            </p>

            <SubscribeButton />
        </section>  

        <img src="/images/Avatar.svg" alt="Avatar" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
    const price = await stripe.prices.retrieve('price_1JwEI9JXfOC1CeXhtTmnvINg', {
       expand: ['product']
    })

    const product = {
      priceId: price.id,
      amount: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD', 
      }).format(price.unit_amount / 100),
    };
  
  return{
        props: {
          product,
        },
        revalidate: 60 * 60 * 24 // 24hours
      }
}

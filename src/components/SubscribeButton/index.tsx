import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import { getStripesJs } from "../../services/stripe.js";
import styles from "./styles.module.scss"

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton(){

    const [session] = useSession()
    const router = useRouter();


    async function handleSubscribe(){
        if(!session){
            signIn('github')
            return;
        }

        if(session.activeSubscription){
            router.push('/posts');
            return;

        }
        
        try{
            const response = await api.post('/auth/subscribe')
            
            const { sessionId } = response.data;

            const stripe = await getStripesJs()

            await stripe.redirectToCheckout({sessionId})

        } catch(err){
            alert(err.message);
        }

    }
   
   
    return(
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubscribe}
       >
           Subscribe Now
        </button>  
    );
}
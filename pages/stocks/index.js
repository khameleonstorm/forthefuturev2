import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import styles from "./stocks.module.css"
import InvestmentCard from "../../components/InvestmentCard";
import { plans2 } from "../../utils/text"
import { useState } from "react";
import Fashion from "../../components/Fashion"
import Contact from "../../components/Contact"
import ReactPlayer from 'react-player'



export default function Index() {
  const [plans, setPlans] = useState(plans2)


  return (
    <div className={styles.container}>
      <Navbar showAuth={true}/>
        <div className={styles.hero}>
          <div className={styles.video}>
            <ReactPlayer 
              width="100%"
              height="100%"
              playing="true" 
              volume="0" 
              muted="true"
              loop="true"
              playsinline="true"
              url="https://firebasestorage.googleapis.com/v0/b/thefuture-b0f19.appspot.com/o/FashionBG.webm?alt=media&token=c3aa2de2-bfb7-48cd-b8bc-aba813d54682"
            />
          </div>
          <div className={styles.wrap}>
          <h1>Invest In <span>Gold.</span> Fashion Utils &<span> ETFs</span></h1>
            <div className={styles.arrow}></div>
          </div>
        </div>
        <div className={styles.text}>
          <h2>Benefits and pricing For Gold & ETFs</h2>
        </div>
        <InvestmentCard plans={plans} stock={true}/>
        <Fashion />
        <Footer />
        <Contact />
    </div>
  )
}

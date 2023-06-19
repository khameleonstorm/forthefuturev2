import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import styles from "./stocks.module.css"
import InvestmentCard from "../../components/InvestmentCard";
import { plans2 } from "../../utils/text"
import { useState } from "react";
import Fashion from "../../components/Fashion"
import Contact from "../../components/Contact"


export default function Index() {
  const [plans, setPlans] = useState(plans2)


  return (
    <div className={styles.container}>
      <Navbar showAuth={true}/>
        <div className={styles.hero}>
          <div className={styles.video}>
          <video autoPlay muted loop playsInline src="/assets/fashionBG.mp4">
                <source src="/assets/fashionBG.mp4" type="video/mp4"/>
                <source src="/assets/fashionBG.mov" type="video/mov"/>
                <source src="/assets/fashionBG.webm" type="video/webm"/>
            </video>
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

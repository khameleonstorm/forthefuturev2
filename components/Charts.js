import Script from "next/script"
import styles from "./Charts.module.css"
import { renderChart } from "../utils/text"
import Image from "next/image"


export default function Charts() {


  return (
    <div className={styles.container}>
      <div className={`tradingview-widget-container ${styles.tv}`} >
        <div id="tradingview_70c8b" style={{width: '100%', position: "relative"}}>
          <Script  src="https://s3.tradingview.com/tv.js" onLoad={renderChart}/>
        </div>
      </div>
      <div className={styles.nft}>
        <div className={styles.text}>
          <h2>NFTs Coming Soon!</h2>
        </div>
        <div className={styles.img}>
          <Image priority src="/assets/invisible.gif" alt="nft" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  )
}



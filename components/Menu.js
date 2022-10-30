import Link from "next/link"
import styles from "./Menu.module.css"

export default function Menu({black, navbg}) {
  return (
    <div className={black || navbg ? styles.container2 : styles.container} >
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <span></span>
      </div>
      <div className={styles.links}>
        <Link href="/rentHome">Rent a home</Link>
        <span></span>
      </div>
      <div className={styles.links}>
        <Link href="/buyHome">Buy a home</Link>
        <span></span>
      </div>
      <div className={styles.links}>
        <Link href="/invest">Cryptocurrency</Link>
        <span></span>
      </div>
      <div className={styles.links}>
        <Link href="/stocks">Stocks</Link>
        <span></span>
      </div>
      <div className={styles.links}>
        <Link href="/about">About</Link>
        <span></span>
      </div>
    </div>
  )
}
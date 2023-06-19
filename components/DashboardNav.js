import styles from './DashboardNav.module.css';
import Image from "next/image"
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from 'next/link';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { HiOutlineLogout } from "react-icons/hi";
import { useLogout } from "../hooks/useLogout"

export default function DashboardNav({modal, details}) {
  const { logout } = useLogout()
  const [menu, setMenu] = useState(false)

  const handleClick = () => {
    if (menu) {
      setMenu(false)
    }
    if (!menu) {
      setMenu(true)
    }
  }
  const handleContact = () => {
    const input = prompt("Are you sure you want to contact me?", "Type 'yes' for confirmation")
    if (input = "yes") {
      window.location.assign("https://wa.me/message/TFU7HVOSZ5NRK1")
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.hello}>
        <p>Hello! </p>
        <p>{details.displayName}</p>
      </div>
      <div className={styles.logo}>
        <div className={styles.image}>
          <Image priority src={details.photoURL ? details.photoURL : '/assets/future.jpg'} layout="fill" objectFit="cover" alt="Avatar!" />
        </div>
        <MdKeyboardArrowDown size="1.3em" style={{cursor: 'pointer'}} onClick={handleClick}/>
        {menu && 
          <div className={styles.menu} onClick={handleClick}>
            <Link href="/rentHome">Rent a home</Link>
            <Link href="/buyHome">Buy a home</Link>
            <Link href="/invest">Cryptocurrency</Link>
            <a onClick={() => modal(true)}>Withdraw</a>
            <a onClick={handleContact}>Contact</a>
            <Button variant="outlined" color="error" size="small" style={{fontSize: "0.7rem"}} onClick={logout}> Logout <HiOutlineLogout size="1.3em"
            style={{marginLeft: "1rem"}}
            /></Button>
          </div>
        }
      </div>
    </div>
  )
}

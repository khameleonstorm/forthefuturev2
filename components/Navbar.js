import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logoW from "../public/assets/logoW.svg"
import logo from "../public/assets/logo.svg"
import Menu from "./Menu";
import Image from "next/image"
import Link from "next/link"
import useAuth from "../hooks/useAuth";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useLogout } from "../hooks/useLogout"
import Button from '@mui/material/Button';
import { HiOutlineLogout } from "react-icons/hi";
import NonSSRWrapper from "../utils/nossr";



export default function Navbar({showAuth, black}) {
  const { user } = useAuth()
  const [navbg, setNavbg] = useState(false)
  const { logout } = useLogout()
  const [menu, setMenu] = useState(false)

  const handleNavbg = () => {
    if (window.scrollY >=  100) {
      setNavbg(true)  
    } else {
      setNavbg(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleNavbg)
  }, [])

  const handleClick = () => {
    if (menu) {
      setMenu(false)
    }
    if (!menu) {
      setMenu(true)
    }
  }



  return ( 
    <NonSSRWrapper>
      <div className={navbg ? styles.nav2 : styles.nav}>
        <nav>
          <div className={styles.logo}>     
              <Link href="/">
                <a>
                    <Image 
                    src={black || navbg ? logo : logoW} 
                    alt="logo"
                    />
                </a>
              </Link>     
          </div>

          {!user &&
          <>
          {showAuth &&
            <div className={navbg || black ? styles.signup2 : styles.signup}>
              <Link href="/signup">Sign up</Link>
              <span></span>
              <Link href="/login">Login</Link>
            </div>
          }
          </>
          }

          <Menu black={black} navbg={navbg}/>

          {user && 
            <div className={styles.profile}>
              <div className={styles.image}><Image src={user.photoURL} width={35} height={35} alt="Avatar!"/></div>
              <MdKeyboardArrowDown size="1.4em" style={(black || navbg) ? {cursor: 'pointer'}: {cursor: 'pointer', color: "white"}} onClick={handleClick}/>
              {menu && 
                <div className={styles.menu} onClick={handleClick}>
                  <Link href="/dashboard">Dashboard</Link>
                  <Link href="/rentHome">Rent a home</Link>
                  <Link href="/buyHome">Buy a home</Link>
                  <Link href="/invest">Cryptocurrency</Link>
                  <Link href="/stocks">Gold & Jewelry </Link>
                  <Link href="/about">Company</Link>
                  <Button variant="outlined" color="error" size="small" style={{fontSize: "0.7rem"}} onClick={logout}> Logout <HiOutlineLogout size="1.3em"
                  style={{marginLeft: "1rem"}}
                  /></Button>
                </div>
              }
            </div>
          }

          {!user && 
            <div className={styles.profile}>
              <MdKeyboardArrowDown size="1.4em" style={(black || navbg) ? {cursor: 'pointer'}: {cursor: 'pointer', color: "white"}} onClick={handleClick}/>
              {menu && 
                <div className={styles.menu} onClick={handleClick}>
                  <Link href="/rentHome">Rent a home</Link>
                  <Link href="/buyHome">Buy a home</Link>
                  <Link href="/invest">Cryptocurrency</Link>
                  <Link href="/stocks">Gold & Jewelry </Link>
                  <Link href="/about">Company</Link>
                  <Button variant="outlined" color="error" size="small" style={{fontSize: "0.7rem"}} onClick={logout}> Logout <HiOutlineLogout size="1.3em"
                  style={{marginLeft: "1rem"}}
                  /></Button>
                </div>
              }
            </div>
          }

        </nav>
      </div>
    </NonSSRWrapper>
  )
}

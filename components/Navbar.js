import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
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



  return ( 
    <NonSSRWrapper>
      <div className={styles.nav} >
          <div className={styles.logo}>     
              <Link href="/">
                <a>
                    <Image 
                    src={logo} 
                    alt="logo"
                    width="100"
                    height="40"
                    objectFit="contain"
                    />
                </a>
              </Link>     
          </div>

          <Menu black={true}/>

          {user && 
            <div className={styles.profile} onClick={() => setMenu(!menu)}>
              <div className={styles.image}><Image src={user.photoURL} width={35} height={35} objectFit="cover" alt="Avatar!"/></div>
              <MdKeyboardArrowDown size="2em"/>
              {menu && 
                <div className={styles.menu}>
                  <Link href="/dashboard">Dashboard</Link>
                  <Link href="/rentHome">Rent a home</Link>
                  <Link href="/buyHome">Buy a home</Link>
                  <Link href="/invest">Invest</Link>
                  <Link href="/stocks">Stocks</Link>
                  <Link href="/about">Company</Link>
                  <Button variant="outlined" color="error" size="small" style={{fontSize: "1rem"}} onClick={logout}> Logout <HiOutlineLogout size="1.5em"
                  style={{marginLeft: "1rem"}}
                  /></Button>
                </div>
              }
            </div>
          }

          {!user && 
            <div className={styles.profile}>
              <MdKeyboardArrowDown size="2em" onClick={() => setMenu(!menu)}/>
              {menu && 
                <div className={styles.menu}>
                  <Link href="/rentHome">Rent a home</Link>
                  <Link href="/buyHome">Buy a home</Link>
                  <Link href="/invest">Invest</Link>
                  <Link href="/about">Company</Link>
                </div>
              }
              {!user &&
              <>
                {showAuth &&
                  <div className={styles.signup} >
                    <Link href="/signup">Create Account</Link>
                  </div>
                }
              </>
              }
            </div>
          }
      </div>
    </NonSSRWrapper>
  )
}

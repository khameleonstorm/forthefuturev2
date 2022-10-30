import styles from './SideNav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdHistoryToggleOff } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { RiExchangeFundsLine } from "react-icons/ri";
import { RiFundsFill } from "react-icons/ri";
import { RiUser3Fill } from "react-icons/ri";
import { HiHome } from "react-icons/hi";
import logo from "../public/assets/logoW.svg"

export default function SideNav({view, dashboard, profile, history, funding}) {


  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
           <Image src={logo} height={25} width={70} alt="logo" />
          </a>        
        </Link>
      </div>
      <div className={styles.menu}>
        <a onClick={() => view("dashboard")}><div><MdOutlineDashboardCustomize size="1em" /><span>Dashboard</span></div></a>
        <a onClick={() => view("profile")}><div><RiContactsLine size="1em" /><span>Profile</span></div></a>
        <a onClick={() => view("funding")}><div><RiExchangeFundsLine size="1em" /><span>Funding</span></div></a>
        <a onClick={() => view("history")}><div><MdHistoryToggleOff size="1em" /><span>History</span></div></a>
      </div>
      <div className={styles.menu2}>
        <a onClick={() => view("dashboard")}><div style={dashboard ? {color: "#00e99b"} : {color: "black"}}><HiHome /></div></a>
        <a onClick={() => view("profile")}><div style={profile ? {color: "#00e99b"} : {color: "black"}}><RiUser3Fill  /></div></a>
        <a onClick={() => view("funding")}><div style={funding ? {color: "#00e99b"} : {color: "black"}}><RiFundsFill /></div></a>
        <a onClick={() => view("history")}><div style={history ? {color: "#00e99b"} : {color: "black"}}><MdNotificationsActive  /></div></a>
      </div>
    </div>
  )
}

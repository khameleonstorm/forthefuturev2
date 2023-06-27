import BalCard from '../../components/BalCard'
import Charts from '../../components/Charts'
import DashboardNav from '../../components/DashboardNav'
import SideNav from '../../components/SideNav'
import styles from "./dashboard.module.css"
import { collection, onSnapshot, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import { useState, useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import Modal from '../../components/Modal'
import { useRouter } from "next/router"
import Profile from '../../components/Profile'
import Funding from '../../components/Funding'
import History from '../../components/History'
import MoonLoader from "react-spinners/MoonLoader"



export default function Index() {
  const router = useRouter()
  const { user } = useAuth()
  const [userDetails, setUserDetails] = useState([])
  const [modal, setModal] = useState(false)
  const [profile, setProfile] = useState(false)
  const [funding, setFunding] = useState(false)
  const [history, setHistory] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [dashboard, setDashboard] = useState(true)

      
  useEffect(() => {
    const chatDiv = document?.getElementById('tidio-chat')
    if(chatDiv) chatDiv.style.display = 'none'

    return () => {
      if(chatDiv) chatDiv.style.display = 'block'
    }
  }, [])

  useEffect(()=>{   
    if(user){
      if(user.email === "admin@gmail.com"){
        router.push("/admin")
      }
      const q = query(collection(db, "profile"), where("email", "==", user.email))

      onSnapshot(q, 
        (snapshot) => {
          // looping through snapshot to get each individual doc
          snapshot.forEach(doc => {
            setUserDetails({ ...doc.data(), id: doc.id})
          })
          setIsLoading(false)
      })


    } else{
      router.push('/login')
    }
  }, [user, router, userDetails])

const view = (event) =>{
  if (event === "dashboard") {
    setDashboard(true)
    setProfile(false)
    setModal(false)
    setHistory(false)
    setFunding(false)
  }

  if (event === "profile") {
    setProfile(true)
    setDashboard(false)
    setModal(false)
    setHistory(false)
    setFunding(false)
  }

  if (event === "funding") {
    setFunding(true)
    setProfile(false)
    setDashboard(false)
    setModal(false)
    setHistory(false)
  }

  if (event === "history") {
    setHistory(true)
    setProfile(false)
    setDashboard(false)
    setModal(false)
    setFunding(false)
  }
}

if(isLoading){
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}>
        <MoonLoader color="#1649ff" />
      </div>
    </div>
  )
}

if(!isLoading){
  return (
  <div className={styles.container}>
    {modal && <Modal modal={setModal}/>}
    <div className={styles.sidebar}>
      <SideNav dashboard={dashboard} profile={profile} history={history} funding={funding} view={view}/>
    </div>
    <div className={styles.main}>
      {dashboard &&
        <>
          <DashboardNav modal={setModal} details={userDetails}/>
          <BalCard bal={userDetails.bal} />
          <Charts />
        </>
      }
      {profile && 
        <Profile details={userDetails} bal={userDetails.bal} view={view}/>
      }

      {funding &&
        <>
          <DashboardNav modal={setModal} details={userDetails}/>
          <Funding view={view}/>
        </>
      }

      {history &&
        <>
          <DashboardNav modal={setModal} details={userDetails}/>
          <History/>
        </>
      }
    </div>
  </div>
  )
}

}
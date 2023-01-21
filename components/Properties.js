import React, { useEffect, useState } from 'react'
import Image from "next/image"
import styles from "./Properties.module.css"
import Link from 'next/link'
import millify from "millify"
import useAuth from '../hooks/useAuth'
import { useFirestore } from '../hooks/useFirestore'
import { useRouter } from "next/router"
import Message from './Message'
import { collection, onSnapshot, query, where, doc, setDoc } from "firebase/firestore"
import { db } from "../firebase/config"




export default function Properties({props, error, rent}) {
  const router = useRouter()
  const createdAt = new Date().toLocaleString()
  const { addDocument } = useFirestore("history")
  const { user } = useAuth()
  const [message, setMessage] = useState(false)
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)
  const [userDetails, setUserDetails] = useState([])


  useEffect(()=>{
    if(user){
      const q = query(collection(db, "profile"), where("email", "==", user.email))

      onSnapshot(q, 
        (snapshot) => {
          // looping through snapshot to get each individual doc
          snapshot.forEach(doc => {
            setUserDetails({ ...doc.data(), id: doc.id})
          })
        },
        (error) => {
          // setError("could not fetch data frm the database...")
        })
    }
  }, [user])


    const handleRent = (amount, desc) => {
      if (user) {
        if (amount < userDetails.bal[1].deposit) {
          setSuccess(true) 
          setFailed(false)
          addDocument({ title: "Rent", amount, desc, createdAt, email: user.email, pending: false })
          setMessage(true)
          
          let cal = userDetails.bal[1].deposit - amount
          const { bal: [crypto, real_estate, jewelry, stock] } = userDetails
          const RE = {...real_estate, deposit: cal}
          let newBal = [crypto, RE, jewelry, stock]

          const newData = {...userDetails, bal: [...newBal]}
          const docRef = doc(db, "profile", user.email)
          setDoc(docRef, newData)

        }

        if(amount > userDetails.bal[1].deposit) {
          setFailed(true)
          setSuccess(false)
          setMessage(true)
          addDocument({ title: "Rent", amount, desc, createdAt, email: user.email, pending: "failed" })
        }

        
      } else {
        router.push("/login")
      }
      
    }

    const handleBuy = (amount, desc) => {
      if (user) {
        if (amount < userDetails.bal[1].deposit) {
          setSuccess(true) 
          setFailed(false)
          addDocument({ title: "Buy", amount, desc, createdAt, email: user.email, pending: false })
          setMessage(true)

          let cal = userDetails.bal[1].deposit - amount
          const { bal: [crypto, real_estate, jewelry, stock] } = userDetails
          const RE = {...real_estate, deposit: cal}
          let newBal = [crypto, RE, jewelry, stock]

          const newData = {...userDetails, bal: [...newBal]}
          const docRef = doc(db, "profile", user.email)
          setDoc(docRef, newData)
        }

        if(amount > userDetails.bal[1].deposit) {
          setFailed(true)
          setSuccess(false)
          setMessage(true)
          addDocument({ title: "Buy", amount, desc, createdAt, email: user.email, pending: "failed" })
        }
        
      } else {
        router.push("/login")
      }
      
    }



  return (
      <div className={styles.container}>
        {message && <Message success={success} failed={failed}  setMessage={setMessage}/>}
        {(!error && props.length > 1) && <h1>Properties <span>For </span>{rent ? "Rent" : "Sale"}</h1>}
        {!(!error && props.length > 1) && 
        <div className={styles.error}>
          <div>
            <Image priority src="/assets/eyes.gif" layout='fill' objectFit='contain' alt="eyes"/>
          </div>
          <p>Could not fetch data from database...</p>
        </div>}
        <div className={styles.content} >
            {(props && !error) && props.map(prop => 
              <div className={styles.box} key={prop.property_id}>
                    <div className={styles.img}>
                      <Image loading="eager" width={300} height={230} src={prop.primary_photo.href ? prop.primary_photo.href : prop.photos[0].href} alt={prop.description.type} />
                    </div>
                    <div className={styles.text}>
                      {!rent && <h3>${millify( prop.list_price || prop.list_price_max || prop.list_price_min )}</h3>}
                      {rent && <h3>${millify( prop.list_price || prop.list_price_max || prop.list_price_min )}<span>/M</span></h3>}
                        <h4>
                        {prop.description.type}
                        <span>Beds: {prop.description.beds_max || prop.description.beds_min || prop.description.beds} Sqft: {prop.description.sqft_max || prop.description.sqft_min || prop.description.sqft}
                        </span>
                      </h4>
                      <p>{prop.permalink.substring(0, 35)}...</p>
                      <div className={styles.buttons}>
                        {rent &&
                        <Link href={`/rentHome/${prop.property_id}`}>
                          <button className={styles.button}>View</button>
                        </Link>
                        }
                        {!rent &&
                        <Link href={`/buyHome/${prop.property_id}`}>
                          <button className={styles.button}>View</button>
                        </Link>
                        }
                        <button className={styles.button2} onClick={rent ? 
                          
                          () => handleRent( prop.list_price || prop.list_price_max || prop.list_price_min , prop.permalink) : 
                          () => handleBuy( prop.list_price || prop.list_price_max || prop.list_price_min , prop.permalink)}
                        >
                        {rent ? "Rent" : "Buy"}
                        </button>
                      </div>
                    </div>
                </div>
            )}
          </div>
      </div>
  )
}

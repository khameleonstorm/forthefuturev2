import Image from "next/image"
import styles from "./Fashion.module.css"
import millify from 'millify'
import { useEffect, useState } from "react"
import useAuth from '../hooks/useAuth'
import { useFirestore } from '../hooks/useFirestore'
import { useRouter } from "next/router"
import Message from './Message'
import { collection, onSnapshot, query, where, doc, setDoc } from "firebase/firestore"
import { db } from "../firebase/config"


export default function Fashion() {
  const [ready, setReady] = useState(false)
  const amount = []
  const nums = []
  const router = useRouter()
  const createdAt = new Date().toLocaleString()
  const { addDocument } = useFirestore("history")
  const { user } = useAuth()
  const [message, setMessage] = useState(false)
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)
  const [userDetails, setUserDetails] = useState([])


  
  for (let i = 1; i < 60; i++) {
    nums.push(i)
  }

  for (let i = 1; i < 61; i++) {
    amount.push(Math.floor(Math.random() * (10000 + i)) + 2000)
  }

  useEffect(()=>{
    setReady(true)
    if(user){
      const q = query(collection(db, "profile"), where("email", "==", user.email))

      onSnapshot(q, 
        (snapshot) => {
          // looping through snapshot to get each individual doc
          snapshot.forEach(doc => {
            setUserDetails({ ...doc.data(), id: doc.id})
          })
        })
    }
  }, [user])


    const handleBuy = (desc) => {
      if (user) {
        const price = Number(window.prompt("Enter investment amount", ""))
        if (price > 0) {
          if (price < userDetails.bal[2].deposit) {
            setSuccess(true) 
            setFailed(false)
            setMessage(true)
            addDocument({ title: "Gold", amount: price, desc, createdAt, email: user.email, pending: true })
            
            let cal = userDetails.bal[2].deposit - price
            const { bal: [crypto, real_estate, jewelry, stock] } = userDetails
            const gld = {...jewelry, deposit: cal}
            let newBal = [crypto, real_estate, gld, stock]
  
            const newData = {...userDetails, bal: [...newBal]}
            const docRef = doc(db, "profile", user.email)
            setDoc(docRef, newData)
  
          }
  
          if(price > userDetails.bal[2].deposit) {
            setFailed(true)
            setSuccess(false)
            setMessage(true)
            addDocument({ title: "Gold", amount: price, desc, createdAt, email: user.email, pending: 'failed' })
          }  
          
        } else {
          window.alert("Please enter a valid amount")
        }
        
      } else {
        router.push("/login")
      }
      
    }




  return (ready &&
    <div className={styles.container}>
      {message && <Message success={success} failed={failed} setMessage={setMessage}/>}
      <h1>Gold & Diamond <span>Utils</span>.</h1>
      <div className={styles.content} >
          {nums.map(num => 
            <div className={styles.box} key={num}>
              <div className={styles.img}>
                <Image 
                  loading="eager"
                  layout="fill"
                  objectFit="cover" 
                  src={`/assets/jewelry/${num}.jfif`} alt="diamonds" 
                />
              </div>
              <div className={styles.price}>
                <h2>${ready ? millify(amount[num]) : millify(5490)}</h2>
                <a onClick={() => handleBuy("Jewelry with accumulative value")}>Buy</a>
              </div>
            </div>
          )}
        </div>
    </div>
  )
}


import { FaRegTimesCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import styles from "./InvestmentCard.module.css";
import useAuth from '../hooks/useAuth'
import { useFirestore } from '../hooks/useFirestore'
import { useRouter } from "next/router"
import Message from './Message'
import { collection, onSnapshot, query, where, doc, setDoc } from "firebase/firestore"
import { db } from "../firebase/config"
import { useEffect, useState } from "react"


export default function InvestmentCard({plans, stock}) {
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


    const handleInvest = (desc, title) => {
      if (user) {
        const amount = Number(window.prompt("Enter investment amount", ""))
        if (amount < userDetails.bal[0].deposit) {
          setSuccess(true) 
          setFailed(false)
          setMessage(true)
          addDocument({ title: `${title} Investment`, amount, desc, createdAt, email: user.email, pending: true })
          
          let cal = userDetails.bal[0].deposit - amount
          const { bal: [crypto, real_estate, jewelry, stock] } = userDetails
          const cyp = {...crypto, deposit: cal}
          let newBal = [cyp, real_estate, jewelry, stock]

          const newData = {...userDetails, bal: [...newBal]}
          const docRef = doc(db, "profile", user.email)
          setDoc(docRef, newData)

        } else {
          window.alert("request could not be fulfilled, please try again later")
        }

        if(amount > userDetails.bal[0].deposit) {
          setFailed(true)
          setSuccess(false)
          setMessage(true)
          addDocument({ title: `${title} Investment`, amount, desc, createdAt, email: user.email, pending: "failed" })
        }

        if(stock){
          if (amount < userDetails.bal[3].deposit) {
            setSuccess(true) 
            setFailed(false)
            setMessage(true)
            addDocument({ title: `${title} Investment`, amount, desc, createdAt, email: user.email, pending: true })
            
            let cal = userDetails.bal[3].deposit - amount
            const { bal: [crypto, real_estate, jewelry, stock] } = userDetails
            const stk = {...stock, deposit: cal}
            let newBal = [crypto, real_estate, jewelry, stk]
  
            const newData = {...userDetails, bal: [...newBal]}
            const docRef = doc(db, "profile", user.email)
            setDoc(docRef, newData)
  
          } else {
            window.alert("request could not be fulfilled, please try again later")
          }

          if(amount > userDetails.bal[3].deposit){
            setFailed(true)
            setSuccess(false)
            setMessage(true)
            addDocument({ title: `${title} Investment`, amount, desc, createdAt, email: user.email, pending: "failed" })
          }
        }

        
      } else {
        router.push("/login")
      }
    }






  return (
    <>
      <div className={styles.container}>
      {message && <Message success={success} failed={failed} setMessage={setMessage}/>}
      {plans.map(plan  =>
        <div className={styles.card} key={plan.id}>
          <div className={styles.content3} style={{ background: plan.background}}>
          </div>
          <div className={styles.content1}>
            <h2>{plan.title}</h2>
            <h3>{plan.amount}</h3>
            <p>{plan.desc}</p>
            <span></span>
          </div>
          <div className={styles.content2}>
          {plan.falsepoints.map(falsepoint => <div key={falsepoint} className={styles.fact1}><span><FaRegTimesCircle /><p>{falsepoint}</p></span></div>) }
          {plan.truepoints.map(truepoint => <div key={truepoint} className={styles.fact2}><span><FaRegCheckCircle /><p>{truepoint}</p></span></div>) }
          </div>
          <button onClick={() => handleInvest(plan.desc, plan.title)}>Invest</button>
        </div>
      )}
    </div>
    </>
  )
}

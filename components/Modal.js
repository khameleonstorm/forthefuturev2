import { useState, useEffect } from 'react';
import styles from "./Modal.module.css";
import { MdOutlineClose } from "react-icons/md";
import Message from './Message'
import useAuth from '../hooks/useAuth'
import { useFirestore } from '../hooks/useFirestore'
import { collection, onSnapshot, query, where, doc, setDoc } from "firebase/firestore"
import { db } from "../firebase/config"
import NonSSRWrapper from "../utils/nossr"


export default function Modal({modal}) {
  const [address, setAddress] = useState("")
  const [amount, setAmount] = useState("")
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
        })
    }
  }, [user])

  

  const handleSubmit = (e) => {
    e.preventDefault()

    if (amount !== null && address !== null) {
      if (amount < userDetails.bal[0].withdraw) {
        let cal = userDetails.bal[0].withdraw - amount
        const { bal: [crypto, real_estate, jewelry, stock] } = userDetails
        const crp = {...crypto, withdraw: cal}
        let newBal = [crp, real_estate, jewelry, stock]

        const newData = {...userDetails, bal: [...newBal]}
        const docRef = doc(db, "profile", user.email)
        setDoc(docRef, newData)
        setAddress('')
        setAmount('')
        setSuccess(true) 
        setFailed(false)
        setMessage(true)
        addDocument({ title: "Withdraw", amount, createdAt, email: user.email, pending: false })
      }

      if(amount > userDetails.bal[0].withdraw) {
        setFailed(true)
        setSuccess(false)
        setMessage(true)
        setAddress('')
        setAmount('')
        addDocument({ title: "Withdraw", amount, createdAt, email: user.email, pending: "failed" })
      }
    }
  }
  

  return (
    <NonSSRWrapper>
      <div className={styles.container}>
        {message && <Message success={success} failed={failed}  setMessage={setMessage}/>}
        <MdOutlineClose size="1.5em" onClick={() => modal(false)}  style={{color: "whitesmoke", position: "absolute", top: "10px", right: "10px", cursor: "pointer"}}/>
        <form onSubmit={handleSubmit}>
          <h2>Withdraw</h2>
          <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" placeholder='Enter Bitcoin wallet address'/>
          <div className={styles.flex}>
            <input onChange={(e) => setAmount(e.target.value)} value={amount} type="number" placeholder="USD" />
            <button>Submit</button>
          </div>
        </form>
              
      </div>
    </NonSSRWrapper>
  )
}

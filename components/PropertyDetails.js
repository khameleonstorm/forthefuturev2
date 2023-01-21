import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import millify from "millify";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// importing styles from
import styles from "./PropertyDetails.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import { useFirestore } from '../hooks/useFirestore'
import { useRouter } from "next/router"
import Message from './Message'
import { collection, onSnapshot, query, where, doc, setDoc } from "firebase/firestore"
import { db } from "../firebase/config"








export default function PropertyDetails({details}) {
  const router = useRouter()
  const createdAt = new Date().toLocaleString()
  const { addDocument } = useFirestore("history")
  const { user } = useAuth()
  const [message, setMessage] = useState(false)
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)
  const [userDetails, setUserDetails] = useState([])
  const PropertyDetails = details.data


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





  return (PropertyDetails &&
    <div  className={styles.container}>
       {message && <Message success={success} failed={failed}  setMessage={setMessage}/>}
      <h2>More Details, <span>More</span> Satisfaction. </h2>
      <Swiper
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          speed={700}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className={styles.mySwiper}
        >
          {PropertyDetails.photos.map(Detail =>
             <div className={styles.photos} key={Detail.href}>
                <SwiperSlide key={Detail.href} className={styles.swiperslides}>
                  <Image key={Detail.href} src={Detail.href} alt={Detail.type} layout="fill" objectFit="cover"/>
                </SwiperSlide>
            </div>
            )}
        </Swiper>
          <div className={styles.text}>
            <h2><span>${millify( PropertyDetails.list_price || PropertyDetails.list_price_max || PropertyDetails.list_price_min)}{(PropertyDetails.status === "for_rent") && <p>/Monthly</p>}</span>
            <span>{PropertyDetails.description.sqft || PropertyDetails.description.sqft_max || PropertyDetails.description.sqft_min}<p>sqft</p></span>
            <span>{PropertyDetails.description.beds || PropertyDetails.description.beds_max || PropertyDetails.description.beds_min}<p>bd</p></span>
            <span>{PropertyDetails.description.baths || PropertyDetails.description.baths_max || PropertyDetails.description.baths_min}<p>bth</p></span>
            </h2>
            <p className={styles.date}>{PropertyDetails.list_date} <span> {PropertyDetails.status}</span></p>
            <p>{PropertyDetails.description.text}</p>

            <div className={styles.tags}>
              {PropertyDetails.tags.map(tag => <p key={tag}>{tag}</p>)}
            </div>
            {(PropertyDetails.status === "for_rent")  && <button className={styles.button} 
            onClick={ 
              () => handleRent( PropertyDetails.list_price || PropertyDetails.list_price_max || PropertyDetails.list_price_min, 
                PropertyDetails.permalink)}
            >
              Rent
            </button>}
            {!(PropertyDetails.status === "for_rent")  && <button className={styles.button}
            onClick={ 
              () => handleBuy( PropertyDetails.list_price || PropertyDetails.list_price_max || PropertyDetails.list_price_min, 
                PropertyDetails.permalink)}
            >
              Buy
              </button>}
          </div>
    </div>
  )
}

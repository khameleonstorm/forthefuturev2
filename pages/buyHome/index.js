import React from 'react'
import styles from "./buyHome.module.css"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { FaSearchLocation } from "react-icons/fa"
import Properties from '../../components/Properties'
import { useState, useEffect } from "react"
import Contact from "../../components/Contact"


export default function Index({properties, error}) {
  const [inputValue, setInputValue] = useState('')
  const [props, setProps] = useState([])


  useEffect(() => {
    if(properties.status === 200){
      setProps(properties.data.results)
      console.log(properties)
    }
  }, [properties])

  const handleChange = (e) => {
    setInputValue(e.target.value)
  
    if(properties.status === 200){
      setProps(properties.data.results.filter(property => {
        return property.permalink.toLowerCase().includes(inputValue.toLowerCase())
      }))
    }
  };


  return (
    <div className={styles.container}>
      <Navbar showAuth={true}/>
      <div className={styles.hero}>
        <form className={styles.form}>
          <h1>Find <span>Your</span> Preference</h1>
          <div className={styles.input}>
            <input type="text" maxLength={15} placeholder="Address, City, State, or ZIP Code" onChange={handleChange}/>
            <FaSearchLocation size="1.1em" style={{position: 'absolute', top: 'center', right: '10px', color: 'rgb(0, 132, 124, 0.6)'}}/>
          </div>
        </form>
      </div>
      {!(props.lenght === 0) && <Properties props={props} error={error} rent={false}/>}
      <Footer />
      <Contact />
    </div>
  )
}



export async function getStaticProps() {

  let properties = '';
  let error = '';

  try {
    const res = await fetch("https://us-real-estate.p.rapidapi.com/for-sale", {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.NEW_KEY,
        'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
      }
    })
    properties = await res.json();
  } catch (err) {
    error = err.message;
  }

  return {
    props: { properties, error}
  }
}
import styles from "./rentHome.module.css"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { FaSearchLocation } from "react-icons/fa"
import Properties from '../../components/Properties'
import { useState, useEffect } from "react"
import { locs } from "../../utils/text"
import { BiFilter } from "react-icons/bi"
import { useRouter } from 'next/router'
import WhatsAppBtn from "../../components/WhatsAppBtn"

export default function Index({properties, error}) {
  const [inputValue, setInputValue] = useState('')
  const [props, setProps] = useState([])
  const router = useRouter()


  useEffect(() => {
    if(properties.status === 200){
      setProps(properties.data.results)
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

  
  const filterUrl = async (e) => {
    const city = e.target.value;
    const path = router.pathname;
    if (city) {   
      router.query = city;
      router.push({pathname: path, query: city}).then(() => router.reload())
    }
  }

  return (
      <div className={styles.container}>
        <Navbar showAuth={true}/>
        <div className={styles.hero}>
          <form className={styles.form}>
            <h1>Find <span>Your</span> Preference</h1>
            <div className={styles.input}>
              <input type="text" maxLength={15} placeholder="Address, City, State, or ZIP Code" onChange={handleChange}/>
              <FaSearchLocation size="1.1em" style={{position: 'absolute', top: 'center', right: '10px', color: 'rgb(0, 0, 0, 0.3)'}}/>
            </div>

            <div className={styles.filter}>
              <select defaultValue={"City"} onChange={filterUrl} >
                  {locs.map((loc => 
                    <option key={loc.city} value={`city=${loc.city}&state_code=${loc.state}`}>{loc.city}</option>
                  ))
                  }
              </select>
              <BiFilter size="2em" style={{color: 'rgb(231, 231, 231)'}}/>
            </div>
          </form>
        </div>
        {props && <Properties props={props} error={error} rent={true}/>}
        <Footer />
        <WhatsAppBtn />
      </div>
  )
}


export async function getServerSideProps({query, res}) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=608400, stale-while-revalidate=59'
  )

  const city = query.city || "Mobile"
  const state_code = query.state_code || "AL"

  let properties = '';
  let error = '';

  try {
    const res = await fetch(`https://us-real-estate.p.rapidapi.com/for-rent?city=${city}&state_code=${state_code}&limit=18`, {
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
  };
}


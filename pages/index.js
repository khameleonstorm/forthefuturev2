// import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import SectionOne from '../components/SectionOne'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { plans, texts } from '../utils/text' 
import WhatsAppBtn from '../components/WhatsAppBtn'
import InvestmentCard from '../components/InvestmentCard'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>For the future, Real Estate and Cryptocurrency</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar showAuth={true}/>
      <Hero />
      <SectionOne data={texts[0]}/>
      <SectionOne data={texts[1]} reversed={true}/>
      <SectionOne data={texts[2]}/>
      <SectionOne data={texts[3]} reversed={true}/>
      <InvestmentCard plans={plans}/>
      <Footer />
      <WhatsAppBtn />
    </div>
  )
}

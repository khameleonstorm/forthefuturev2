// import { useEffect, useState } from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import SectionOne from '../components/SectionOne'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>For the future, Real Estate and Cryptocurrency</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar showAuth={true} black={false}/>
      <Hero />
      <SectionOne />
      <Footer />
      <Contact />
    </div>
  )
}

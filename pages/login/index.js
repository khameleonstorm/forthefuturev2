import styles from "./login.module.css"
import Navbar from "../../components/Navbar"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { useLogin } from "../../hooks/useLogin"
import { useRouter } from "next/router"
import { auth } from "../../firebase/config"

export default function Index() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, isPending, login } = useLogin()
  const black = useRef(true)
  const router = useRouter()
  const [isUser, setIsUser] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged(USER => {
      if(USER === null){
        setIsUser(true)
      }else {
        router.push("/dashboard")
      }
    })
  }, [router])


  const handleSubmit = (e) => {
    e.preventDefault()

    if(!error) {
      login(email, password)
      setPassword('')
      setEmail('')
    } else{
      setPassword('')
      setEmail('')
    }
  }
  


  return (isUser &&
    <div className={styles.Login}>
      <Navbar black={black}/>
      <div className={styles.LoginContainer}>
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          {error && <div className="small-error">{error.substring(0, 35)}...</div>}
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
          {!isPending && <input type="submit" className={styles.submit} value='Login'/>}
          {isPending && <input type="submit" className={styles.submit} value='Please wait...' style={{background: "#44AFAF"}} disabled/>}
          <Link href='/forgotPassword'>forgot Password?</Link>
          <p>If you don&apos;t have an account? <Link href='/signup'>Sign Up</Link></p>
        </form>
      </div>
    </div>
  )
}

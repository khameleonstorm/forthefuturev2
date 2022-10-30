import styles from "./forgotPassword.module.css"
import Navbar from "../../components/Navbar"
import Link from "next/link"
import { useState } from "react"
import useResetPassword from "../../hooks/useResetPassword"

export default function Index() {
  const [email, setEmail] = useState('')
  const { errorMessage, resetMessage, resetPassword, isPending } = useResetPassword()


  const handleSubmit = (e) => {
    e.preventDefault()

    resetPassword(email)
  }

  return (
    <div className={styles.FP}>
      <Navbar black={true}/>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h2>Enter Your Email</h2>
          {(errorMessage && !resetMessage) && <div className="small-error">{errorMessage}</div>}
          {(!errorMessage && resetMessage) && <div style={{color: "#44AFAF", paddingBottom: "5px"}}>{resetMessage}</div>}
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
          {(!isPending && !resetMessage) && <input type="submit" className={styles.submit} value='Reset'/>}
          {(!errorMessage && resetMessage) && <input disabled type="submit" className={styles.submit} value='Success!' style={{background: "#44AFAF"}} /> }
          <Link href='/login'>Back to Login</Link>
        </form>
      </div>
    </div>
  )
}

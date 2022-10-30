import styles from "./signup.module.css"
import Navbar from "../../components/Navbar"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useSignup } from "../../hooks/useSignup"
import useAuth from "../../hooks/useAuth"
import { useRouter } from "next/router"

export default function Index() {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [imgError, setImgError] = useState(null)
  const [image, setImage] = useState(null)
  const { error, isPending, signUp } = useSignup()
  const { user } = useAuth()
  const router = useRouter()


  
  useEffect(() => {
    if(user){
      router.push("/dashboard")
    }
  }, [user, router])


  // handle image input field
  const handleImage = (e) => {
    setImgError(null)
    console.log(e.target.files)
    if (!e.target.files[0]) {
      setImgError("File can't be empty")
      return
    }
    if (e.target.files[0].size > 5000000) {
      setImgError("File size is too large")
      return
    }

    setImage(e.target.files[0])
    setImgError(null)
  }


  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!error && !imgError) {
      signUp(email, password, displayName, image)
      console.log(email, password, displayName, image)
    } else{
      setDisplayName('')
      setPassword('')
      setEmail('')
      setImage(null)
      setImgError(null)
    }
  }


  return (
    <div className={styles.signup}>
      <Navbar black={true}/>
      <div className={styles.signupContainer}>
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          {error && <div className="small-error">{error.substring(0, 35)}</div>}
          <input type="text" placeholder="Username" value={displayName} maxLength={15} onChange={e => setDisplayName(e.target.value)} required/>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
          <input className={styles.customFileInput} type="file" accept="image/png, image/jpg, image/gif, image/jpeg"
          required
          onChange={handleImage}
           />
           {imgError && <p className="small-error"style={{marginTop: "-30px", color: "red"}}>{imgError}</p>}
          {!isPending && <input type="submit" className={styles.submit} value='Submit'/>}
          {isPending && <input type="submit" className={styles.submit} disabled value='Please wait...' style={{background: "#44AFAF"}}/>}
          <p>Already have an account? <Link href='/login'>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

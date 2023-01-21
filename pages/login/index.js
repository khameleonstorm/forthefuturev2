import styles from './login.module.css';
import Navbar from '../../components/Navbar';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { useState } from 'react';
import {MdVisibilityOff, MdVisibility} from "react-icons/md"
import useAuth from '../../hooks/useAuth';
import { useEffect } from 'react';
import { PulseLoader } from 'react-spinners';
import { useRouter } from 'next/router' 
import { useLogin } from '../../hooks/useLogin';
import Link from 'next/link';


export default function Login() {
  const { user } = useAuth()
  const { login, isPending, error } = useLogin()
  const router = useRouter()
  const [formError, setFormError] = useState({
    email: null,
    password: null,
  })
  const [values, setValues] = useState({
    password: '',
    email: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setFormError({ ...formError, [prop]: null })
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  // handling login
  const handleLogin = (e) => {
    e.preventDefault()
    const data = {
      email: values.email,
      password: values.password,
    }
    
    if(values.email === "" || !values.email.includes("@") || values.email.length < 5) {
      setFormError({...formError, email: "Email is invalid"});
      return
    }
    if(values.password.length < 6) {
      setFormError({...formError, password: "Invalid Password"});
      return
    }

    login(data.email, data.password)
  }

  useEffect(() => {
    if(user) {
      router.push('/')
    }
  }, [user, router])


  return ((!user) &&
    <div className={styles.container}>
      <Navbar black={true}/>
      <form className={styles.form} onSubmit={handleLogin}>
        <h1>Welcome Back!</h1>
        <TextField 
        id="email" 
        label="Email" 
        variant="outlined" 
        autoComplete = 'off' 
        onChange={handleChange('email')}
        {...(formError.email && {error: true, helperText: formError.email})}/>

        {/* password input and event */}
        <FormControl sx={{ width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            autoComplete = 'off'
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            {...(formError.password && {error: true, helperText: formError.password})}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                {values.showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        {!isPending && <button className={styles.btn}>Login</button>}
        {isPending && <button disabled className={styles.btn} style={{opacity: "50%"}}><PulseLoader color='#000000' size={10}/> </button>}
        {error && <p className={styles.error}>{error}</p>}
        
      <Link href="/signup" className={styles.link}>No Account?</Link>
      <Link href="/forgotPassword" className={styles.link2}>Forgot Password?</Link>
      </form>
    </div>
  )
}

import { useState, useEffect } from "react"
import { auth, db, storage } from "../firebase/config"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import useAuth from "./useAuth"
import { useRouter } from "next/router"


export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuth()
    const navigate = useRouter()
    const createdAt = new Date().toLocaleString()

    const signUp = async(email, password, displayName, file) => {
        setError(null)
        setIsPending(true)

        try {

            // sign up user
            const res = await createUserWithEmailAndPassword(auth, email, password)
            console.log(res.user)

            if (!res) {
              throw new Error("Sorry, can't create an account")
            }
            
            const imageRef = ref(storage, `images/${res.user.uid}/${file.name}`)

            // Upload the file and metadata

            const uploadTask = uploadBytesResumable(imageRef, file);

            uploadTask.on('state_changed', 
              (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                  case 'paused':
                    console.log('Upload is paused');
                    break;
                  case 'running':
                    console.log('Upload is running');
                    break;
                
                  default:
                    console.log("Uploading..")
                    break;
                }
              }, 
              (error) => {
                // Handle unsuccessful uploads
                setError(error.message)
              },
              () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const imageUrl = downloadURL
                    console.log('File available at', downloadURL);
                    console.log('File url', imageRef);

                    // update user profile
                    updateProfile(res.user, { displayName, photoURL: imageUrl })

                    // usetting profile doc
                    const docRef = doc(db, "profile", res.user.email)
                    setDoc(docRef, {
                      online: true, 
                      displayName, 
                      uid: res.user.uid, 
                      email: res.user.email,
                      photoURL: imageUrl,
                      createdAt,
                      bal: [                       
                        {deposit: 0, profit: 0, withdraw: 0, id: 1, title: "Crypto"},
                        {deposit: 0, profit: 0, withdraw: 0, id: 2, title: "Real Estate"},
                        {deposit: 0, profit: 0, withdraw: 0, id: 3, title: "Jewelry"},
                        {deposit: 0, profit: 0, withdraw: 0, id: 4, title: "Stock"}
                      ]
                    })

                })
              }
            )

            // dispatch login case
            dispatch({type: "LOGIN", payload: res.user})
            console.log(res.user)

            if(!isCancelled){
                setIsPending(false)
                setError(null)
            }
            
            navigate.push('/dashboard')

        } catch (err) {
            if(!isCancelled){
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }

    }

    useEffect(() => {
      return () => setIsCancelled(true)
    }, [])


    return { error, isPending, signUp }
}

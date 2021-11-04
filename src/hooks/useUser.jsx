import { useState, useEffect } from 'react'
import { auth, db } from '../firebase/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

const useUser = () => {
  const [isLoged, setIsLoged] = useState(false)
  const [error, setError] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user)
        setIsLoged(true)
        console.log('user', user)
      } else {
        setUser(null)
        setIsLoged(false)
      }
    })
  }, [])

  const handleCreateUserWithEmailAndPassword = async (email, password, username) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      setUser(user)
      setIsLoged(true)
      setError(false)
      await setDoc(doc(db, 'users', user.uid),
        { userId: user.uid, email: user.email, displayName: username, photoURL: user.photoURL, createdAt: new Date() })
    } catch (error) {
      console.log('error', error)
      setIsLoged(false)
      setError(true)
    }
  }

  const handleSignInWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      setUser(user)
      setIsLoged(true)
    } catch (error) {
      console.warn('error', error)
      setIsLoged(false)
    }
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser(null)
      setIsLoged(false)
    }).catch((error) => {
      console.log(error)
      setUser(null)
      setIsLoged(false)
    })
  }
  return { user, error, isLoged, handleCreateUserWithEmailAndPassword, handleSignInWithEmailAndPassword, handleSignOut }
}

export default useUser

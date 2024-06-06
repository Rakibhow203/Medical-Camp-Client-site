/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,

  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,


} from 'firebase/auth'


import axios from 'axios'
import auth from '../firebase';



export const AuthContext = createContext(null)



const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider()




const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = async () => {
    setLoading(true)
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/logout`, {
      withCredentials: true,
    })
    console.log(data)
    return signOut(auth)
  }

  const updateUserProfile = (name, photo) => {
    return updateUserProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log('CurrentUser-->', currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile, githubLogin,

  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
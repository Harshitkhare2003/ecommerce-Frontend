import {
  createContext,
  useState,
  useEffect,
} from "react"

import { auth } from "../firebase"

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"

export const AuthContext =
  createContext()

function AuthProvider({
  children,
}) {

  // User State
  const [user, setUser] =
    useState(null)

  // Loading State
  const [loading, setLoading] =
    useState(true)

  // Signup
  const signup = async (
    email,
    password
  ) => {
    return createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
  }

  // Login
  const login = async (
    email,
    password
  ) => {
    return signInWithEmailAndPassword(
      auth,
      email,
      password
    )
  }

  // Logout
  const logout = async () => {
    return signOut(auth)
  }

  // Firebase Auth Listener
  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {

          console.log(
            "Current User:",
            currentUser
          )

          setUser(currentUser)

          setLoading(false)
        }
      )

    return () =>
      unsubscribe()

  }, [])

  // Context Value
  const value = {
    user,
    signup,
    login,
    logout,
  }

  return (
    <AuthContext.Provider
      value={value}
    >

      {/* Wait until auth loads */}
      {!loading && children}

    </AuthContext.Provider>
  )
}

export default AuthProvider
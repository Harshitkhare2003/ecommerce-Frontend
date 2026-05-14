import {
  createContext,
  useState,
  useEffect,
} from "react"

import {
  auth,
} from "../firebase"

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
  const [user, setUser] =
    useState(null)

  const [loading, setLoading] =
    useState(true)

  // Signup
  const signup = (
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
  const login = (
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
  const logout = () => {
    return signOut(auth)
  }

  // User Listener
  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {
          setUser(currentUser)
          setLoading(false)
        }
      )

    return unsubscribe
  }, [])

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
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
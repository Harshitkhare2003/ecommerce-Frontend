import { Navigate } from "react-router-dom"

import { useContext } from "react"

import { AuthContext } from "../context/AuthContext"

function ProtectedRoute({
  children,
}) {
  const { user } =
    useContext(AuthContext)

  // Agar login nahi
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
      />
    )
  }

  // Login hai
  return children
}

export default ProtectedRoute
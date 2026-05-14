import {
  useState,
  useContext,
} from "react"

import {
  useNavigate,
} from "react-router-dom"

import { AuthContext } from "../context/AuthContext"

function Login() {
  const {
    login,
    signup,
  } = useContext(AuthContext)

  const navigate =
    useNavigate()

  // Toggle
  const [isLogin, setIsLogin] =
    useState(true)

  // Inputs
  const [name, setName] =
    useState("")

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("")

  // States
  const [error, setError] =
    useState("")

  const [loading, setLoading] =
    useState(false)

  // Show Password
  const [
    showPassword,
    setShowPassword,
  ] = useState(false)

  // Password Validation
  const validatePassword = (
    pass
  ) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

    return regex.test(pass)
  }

  // Submit
  const handleSubmit = async (
    e
  ) => {
    e.preventDefault()

    setError("")

    // Validation
    if (
      !email ||
      !password
    ) {
      return setError(
        "Please fill all fields"
      )
    }

    if (
      !validatePassword(
        password
      )
    ) {
      return setError(
        "Password must contain uppercase, lowercase, number & 8 characters"
      )
    }

    if (
      !isLogin &&
      password !==
        confirmPassword
    ) {
      return setError(
        "Passwords do not match"
      )
    }

    try {
      setLoading(true)

      // LOGIN
      if (isLogin) {
        await login(
          email,
          password
        )
      }

      // SIGNUP
      else {
        await signup(
          email,
          password
        )
      }

      navigate("/")
    } catch (err) {
      setError(err.message)
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-10">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-2">
          {isLogin
            ? "Welcome Back 👋"
            : "Create Account 🚀"}
        </h1>

        <p className="text-center text-gray-500 mb-8">
          {isLogin
            ? "Login to continue shopping"
            : "Signup to start shopping"}
        </p>

        {/* Error */}
        {error && (
          <div className="bg-red-100 text-red-600 px-4 py-3 rounded-xl mb-5 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Name */}
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              className="w-full border p-4 rounded-xl outline-none"
            />
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full border p-4 rounded-xl outline-none"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="w-full border p-4 rounded-xl outline-none"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="absolute right-4 top-4"
            >
              {showPassword
                ? "🙈"
                : "👁️"}
            </button>
          </div>

          {/* Confirm Password */}
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={
                confirmPassword
              }
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
              className="w-full border p-4 rounded-xl outline-none"
            />
          )}

          {/* Forgot Password */}
          {isLogin && (
            <div className="text-right">
              <button
                type="button"
                className="text-blue-500 text-sm hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 rounded-xl text-lg hover:bg-gray-800 transition"
          >
            {loading
              ? "Please Wait..."
              : isLogin
              ? "Login"
              : "Sign Up"}
          </button>
        </form>

        {/* Toggle */}
        <div className="text-center mt-8">
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <button
                onClick={() =>
                  setIsLogin(
                    false
                  )
                }
                className="text-blue-500 font-semibold hover:underline"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={() =>
                  setIsLogin(
                    true
                  )
                }
                className="text-blue-500 font-semibold hover:underline"
              >
                Login
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  )
}

export default Login
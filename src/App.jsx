import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom"

import {
  useContext,
  useState,
} from "react"

import Home from "./pages/Home"
import Cart from "./pages/Cart"
import About from "./pages/About"
import Wishlist from "./pages/Wishlist"
import Login from "./pages/Login"
import Checkout from "./pages/Checkout"

import { CartContext } from "./context/CartContext"

import { AuthContext } from "./context/AuthContext"

function App() {

  // Cart
  const { cartCount } =
    useContext(CartContext)

  // Auth
  const { user, logout } =
    useContext(AuthContext)

  // Search
  const [search, setSearch] =
    useState("")

  return (
    <BrowserRouter>

      {/* Header */}
      <header className="bg-black text-white px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold">
            🛒 Shop
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="flex gap-6 text-lg items-center">

          <Link
            to="/"
            className="hover:text-gray-300 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-gray-300 transition"
          >
            About
          </Link>

          <Link
            to="/wishlist"
            className="hover:text-gray-300 transition"
          >
            Wishlist
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative hover:text-gray-300 transition"
          >
            Cart

            <span className="absolute -top-3 -right-5 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {cartCount}
            </span>
          </Link>

          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="px-4 py-2 rounded-xl text-black outline-none w-56"
          />

          {/* Login Logout */}
          <div className="flex items-center gap-4">

            {user ? (
              <>
                <Link
                  to="/checkout"
                  className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition"
                >
                  Checkout
                </Link>

                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:bg-gray-200 transition"
                >
                  Login
                </Link>

                <Link
                  to="/checkout"
                  className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition"
                >
                  Checkout
                </Link>
              </>
            )}

          </div>

        </nav>
      </header>

      {/* Routes */}
      <Routes>

        <Route
          path="/"
          element={
            <Home search={search} />
          }
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App
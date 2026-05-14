

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
import ProductDetails from "./pages/ProductDetails"
import Wishlist from "./pages/Wishlist"
import Login from "./pages/Login"
import Checkout from "./pages/Checkout"

import { CartContext } from "./context/CartContext"
import { AuthContext } from "./context/AuthContext"

import Footer from "./components/Footer"

import ProtectedRoute from "./components/ProtectedRoute"

import OrderSuccess from "./pages/OrderSuccess"

import Admin from "./pages/Admin"
function App() {
  // Cart
  const { cartCount } =
    useContext(CartContext)

  // Auth
  const { user, logout } =
    useContext(AuthContext)

  // Mobile Menu
  const [menuOpen, setMenuOpen] =
    useState(false)

  // Search
  const [search, setSearch] =
    useState("")

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-100">
        {/* Header */}
        <header className="bg-black text-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            {/* Logo */}
            <Link to="/">
              <h1 className="text-3xl font-bold hover:scale-105 transition">
                🛒 Shop
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 text-lg items-center">
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
                  setSearch(e.target.value)
                }
                className="px-4 py-2 rounded-lg text-black outline-none w-56"
              />

              {/* Login Logout */}
              {user ? (
                <button
                  onClick={logout}
                  className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  Login
                </Link>
              )}
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              className="md:hidden text-3xl"
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-gray-900 px-6 py-5 flex flex-col gap-5 text-lg">
              <Link
                to="/"
                onClick={() =>
                  setMenuOpen(false)
                }
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() =>
                  setMenuOpen(false)
                }
              >
                About
              </Link>

              <Link
                to="/wishlist"
                onClick={() =>
                  setMenuOpen(false)
                }
              >
                Wishlist
              </Link>

              <Link
                to="/cart"
                onClick={() =>
                  setMenuOpen(false)
                }
              >
                Cart ({cartCount})
              </Link>

              {/* Mobile Search */}
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="px-4 py-2 rounded-lg text-black outline-none"
              />

              {/* Mobile Login Logout */}
              {user ? (
                <button
                  onClick={() => {
                    logout()
                    setMenuOpen(false)
                  }}
                  className="bg-red-500 px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="bg-white text-black px-4 py-2 rounded-lg text-center"
                >
                  Login
                </Link>
              )}
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-1">
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
              path="/product/:id"
              element={<ProductDetails />}
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
  element={
    <ProtectedRoute>
      <Checkout />
    </ProtectedRoute>
  }
/>

<Route
  path="/success"
  element={<OrderSuccess />}
/>

<Route
  path="/admin"
  element={<Admin />}
/>

          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
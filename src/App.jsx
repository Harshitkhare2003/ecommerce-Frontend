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
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

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
  const [menuOpen, setMenuOpen] =
    useState(false)

  return (
    <BrowserRouter>

      {/* Header */}
      <header className="bg-black text-white px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center gap-4">

          <Link to="/" className="flex-shrink-0">
            <h1 className="text-3xl font-bold">
              🛒 Shop
            </h1>
          </Link>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="ml-auto md:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 hover:bg-white/10 transition"
            aria-label="Open mobile menu"
            aria-expanded={menuOpen}
          >
            <span className="block h-0.5 w-6 bg-white mb-1"></span>
            <span className="block h-0.5 w-6 bg-white mb-1"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
          </button>

          <nav className="hidden md:flex items-center gap-4 text-lg flex-shrink-0">
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

            <Link
              to="/contact"
              className="hover:text-gray-300 transition"
            >
              Contact
            </Link>

            <Link
              to="/cart"
              className="relative hover:text-gray-300 transition"
            >
              Cart

              <span className="absolute -top-3 -right-5 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cartCount}
              </span>
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="w-56 px-4 py-2 rounded-xl text-black outline-none"
            />

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
        </div>

        <div className={`${menuOpen ? "block" : "hidden"} md:hidden mt-4 rounded-xl border border-white/10 bg-black/95 px-4 py-4 shadow-xl`}>
          <nav className="flex flex-col gap-3 text-lg">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-300 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-300 transition"
            >
              About
            </Link>

            <Link
              to="/wishlist"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-300 transition"
            >
              Wishlist
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-300 transition"
            >
              Contact
            </Link>

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="relative hover:text-gray-300 transition"
            >
              Cart

              <span className="absolute -top-3 -right-5 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cartCount}
              </span>
            </Link>
          </nav>

          <div className="mt-4 flex flex-col gap-3">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 rounded-xl text-black outline-none"
            />

            {user ? (
              <>
                <Link
                  to="/checkout"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center bg-green-500 text-white px-4 py-3 rounded-xl hover:bg-green-600 transition"
                >
                  Checkout
                </Link>

                <button
                  onClick={() => {
                    logout()
                    setMenuOpen(false)
                  }}
                  className="block w-full bg-red-500 text-white px-4 py-3 rounded-xl hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center bg-white text-black px-4 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
                >
                  Login
                </Link>

                <Link
                  to="/checkout"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center bg-green-500 text-white px-4 py-3 rounded-xl hover:bg-green-600 transition"
                >
                  Checkout
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Routes */}
      <Routes>

        <Route
          path="/"
          element={
            <Home search={search} setSearch={setSearch} />
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
          path="/contact"
          element={<Contact />}
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

      <Footer />

    </BrowserRouter>
  )
}

export default App
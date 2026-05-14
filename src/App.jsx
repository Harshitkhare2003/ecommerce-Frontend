import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom"

import Home from "./pages/Home"
import Cart from "./pages/Cart"
import About from "./pages/About"
import ProductDetails from "./pages/ProductDetails"
import Wishlist from "./pages/Wishlist"

import { useContext, useState } from "react"
import { CartContext } from "./context/CartContext"

function App() {
  const { cart } = useContext(CartContext)

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-black text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            {/* Logo */}
            <h1 className="text-3xl font-bold">
              🛒 Shop
            </h1>

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

              <Link
                to="/cart"
                className="relative hover:text-gray-300 transition"
              >
                Cart

                <span className="absolute -top-3 -right-5 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {cart.length}
                </span>
              </Link>

              {/* Search */}
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 rounded-lg text-black outline-none"
              />
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
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>

              <Link
                to="/wishlist"
                onClick={() => setMenuOpen(false)}
              >
                Wishlist
              </Link>

              <Link
                to="/cart"
                onClick={() => setMenuOpen(false)}
              >
                Cart ({cart.length})
              </Link>

              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 rounded-lg text-black outline-none"
              />
            </div>
          )}
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/about" element={<About />} />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/wishlist"
            element={<Wishlist />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
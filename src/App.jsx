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
    className="px-4 py-2 rounded-xl text-black outline-none w-56"
  />

  {/* Login Logout */}
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
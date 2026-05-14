function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold">
            🛒 Shop
          </h2>

          <p className="text-gray-400 mt-4">
            Modern E-Commerce Website built with React, Tailwind and Firebase.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Home</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>About</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-400">
            Indore, Madhya Pradesh
          </p>

          <p className="text-gray-400 mt-2">
            khareharshit2003@gmail.com
          </p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-5">
        © 2026 Harshit Khare. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
import toast from "react-hot-toast"

import { Link } from "react-router-dom"

import { useContext } from "react"

import { CartContext } from "../context/CartContext"

import { WishlistContext } from "../context/WishlistContext"

function ProductCard({
  product,
  darkMode,
}) {
  // Cart
  const { addToCart } =
    useContext(CartContext)

  // Wishlist
  const {
    wishlist,
    addToWishlist,
  } = useContext(WishlistContext)

  // Check Wishlist
  const isWishlisted = wishlist.find(
    (item) => item.id === product.id
  )

  return (
    <div
      className={`rounded-3xl shadow-xl overflow-hidden transition duration-300 hover:scale-105 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
    >
      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="h-72 w-full object-cover p-4"
        />
      </Link>

      {/* Product Info */}
      <div className="p-5">
        <h2 className="text-xl font-bold line-clamp-2 min-h-[60px]">
          {product.name}
        </h2>

        <p className="text-green-600 text-2xl font-semibold mt-2">
          ${product.price}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          
          {/* Add To Cart */}
          <button
            onClick={() => {
              addToCart({
                ...product,
                quantity: 1,
              })

              toast.success(
                "Added to Cart"
              )
            }}
            className="flex-1 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition duration-300"
          >
            Add to Cart
          </button>

          {/* Wishlist */}
          <button
            onClick={() => {
              addToWishlist(product)

              toast.success(
                "Added to Wishlist"
              )
            }}
            className={`px-5 rounded-xl text-2xl transition duration-300 ${
              isWishlisted
                ? "bg-red-500 text-white"
                : "bg-gray-200"
            }`}
          >
            ❤️
          </button>

        </div>
      </div>
    </div>
  )
}

export default ProductCard
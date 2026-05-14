import { useContext } from "react"
import { WishlistContext } from "../context/WishlistContext"

function ProductCard({ product, addToCart, darkMode }) {
  const { addToWishlist, removeFromWishlist, wishlist } = useContext(WishlistContext)

  return (
    <div
      className={`rounded-2xl shadow-lg p-5 hover:scale-105 transition duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white"
      }`}
    >
      <img
        className="rounded-xl h-64 w-full object-cover"
        src={product.image}
        alt={product.name}
      />

      <h3 className="text-2xl font-semibold mt-4">
        {product.name}
      </h3>

      <p className="text-gray-500">${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-black text-white px-5 py-2 rounded-lg w-full"
      >
        Add to Cart
      </button>
      <button
  onClick={() => addToWishlist(product)}
  className="mt-2 border border-black px-5 py-2 rounded-lg w-full"
>
  ❤️ Wishlist
</button>
    </div>
  )
}

export default ProductCard
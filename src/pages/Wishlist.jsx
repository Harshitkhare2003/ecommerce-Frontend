import { useContext } from "react"
import { WishlistContext } from "../context/WishlistContext"

function Wishlist() {
  const { wishlist, removeFromWishlist } =
    useContext(WishlistContext)

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-10">
        ❤️ Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">
          Wishlist is empty
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg p-5"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl h-64 w-full object-cover"
              />

              <h2 className="text-2xl font-bold mt-4">
                {product.name}
              </h2>

              <p className="text-gray-500">
                ${product.price}
              </p>

              <button
                onClick={() =>
                  removeFromWishlist(product.id)
                }
                className="mt-4 bg-red-500 text-white px-5 py-2 rounded-lg w-full"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlist
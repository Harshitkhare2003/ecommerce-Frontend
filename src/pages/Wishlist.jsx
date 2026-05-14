import { useContext } from "react"

import { WishlistContext } from "../context/WishlistContext"

import { CartContext } from "../context/CartContext"

import { useNavigate } from "react-router-dom"

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useContext(WishlistContext)

  const { addToCart } =
    useContext(CartContext)

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* Heading */}
      <div className="flex justify-between items-center mb-10 flex-wrap gap-5">
        <h1 className="text-4xl font-bold">
          Wishlist ❤️
        </h1>

        <div className="bg-black text-white px-5 py-3 rounded-xl text-lg font-semibold">
          Items ({wishlist.length})
        </div>
      </div>

      {/* Empty Wishlist */}
      {wishlist.length === 0 ? (
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-5">
            Wishlist is Empty 😢
          </h2>

          <p className="text-gray-500 text-lg">
            Save products to wishlist.
          </p>

          <button
            onClick={() =>
              navigate("/")
            }
            className="mt-8 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition"
          >
            Explore Products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="h-72 w-full object-cover"
              />

              {/* Info */}
              <div className="p-5">
                <p className="text-sm text-gray-500 capitalize mb-2">
                  {item.category}
                </p>

                <h2 className="text-2xl font-bold line-clamp-2 min-h-[64px]">
                  {item.name}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-3">
                  <span className="bg-yellow-400 text-black px-2 py-1 rounded-lg text-sm font-semibold">
                    ⭐ 4.5
                  </span>

                  <span className="text-gray-500 text-sm">
                    (120 Reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-center gap-3">
                  <p className="text-green-600 text-2xl font-bold">
                    ${item.price}
                  </p>

                  <p className="text-gray-400 line-through">
                    $
                    {(
                      item.price + 40
                    ).toFixed(2)}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 mt-5">
                  {/* Add To Cart */}
                  <button
                    onClick={() =>
                      addToCart({
                        ...item,
                        quantity: 1,
                      })
                    }
                    className="bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
                  >
                    Add To Cart
                  </button>

                  {/* Remove */}
                  <button
                    onClick={() =>
                      removeFromWishlist(
                        item.id
                      )
                    }
                    className="bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlist
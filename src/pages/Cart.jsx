import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function Cart() {
  const { cart, removeFromCart } =
    useContext(CartContext)

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  )

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-10">
        🛒 Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">
          Your cart is empty
        </p>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5">
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl shadow-lg flex gap-5 items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <h2 className="text-2xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-gray-500">
                    ${item.price}
                  </p>
                </div>

                <button
                  onClick={() =>
                    removeFromCart(index)
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white p-8 rounded-2xl shadow-lg h-fit">
            <h2 className="text-3xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between text-xl mb-4">
              <span>Total</span>

              <span>${total}</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-xl mt-5">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
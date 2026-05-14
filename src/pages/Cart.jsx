import {
  useContext,
  useState,
  useEffect,
} from "react"

import { useNavigate } from "react-router-dom"

import { CartContext } from "../context/CartContext"

function Cart() {
  const {
    cart,
    removeFromCart,
    totalPrice,
  } = useContext(CartContext)

  const navigate = useNavigate()

  const [cartItems, setCartItems] =
    useState([])

  // Load Cart
  useEffect(() => {
    setCartItems(cart)
  }, [cart])

  // Increase Quantity
  const increaseQty = (index) => {
    const updatedCart = [...cartItems]

    updatedCart[index].quantity += 1

    setCartItems(updatedCart)

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    )
  }

  // Decrease Quantity
  const decreaseQty = (index) => {
    const updatedCart = [...cartItems]

    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1
    }

    setCartItems(updatedCart)

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    )
  }

  // Total
  const finalTotal = cartItems.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  )

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      {/* Heading */}
      <div className="flex justify-between items-center mb-10 flex-wrap gap-5">
        <h1 className="text-4xl font-bold">
          Shopping Cart 🛒
        </h1>

        <div className="bg-black text-white px-5 py-3 rounded-xl text-lg font-semibold">
          Items ({cartItems.length})
        </div>
      </div>

      {/* Empty Cart */}
      {cartItems.length === 0 ? (
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-5">
            Your Cart is Empty 😢
          </h2>

          <p className="text-gray-500 text-lg">
            Add some products to continue shopping.
          </p>

          <button
            onClick={() =>
              navigate("/")
            }
            className="mt-8 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map(
              (item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg p-5 flex flex-col md:flex-row gap-6 items-center"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-40 h-40 object-contain"
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold">
                      {item.name}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      Size:{" "}
                      {item.size ||
                        "Default"}
                    </p>

                    <p className="text-gray-500">
                      Color:{" "}
                      {item.color ||
                        "Default"}
                    </p>

                    <p className="text-green-600 text-2xl font-bold mt-3">
                      $
                      {(
                        item.price *
                        item.quantity
                      ).toFixed(2)}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-5 mt-5">
                      <button
                        onClick={() =>
                          decreaseQty(
                            index
                          )
                        }
                        className="bg-black text-white px-4 py-2 rounded-lg"
                      >
                        -
                      </button>

                      <span className="text-2xl font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQty(
                            index
                          )
                        }
                        className="bg-black text-white px-4 py-2 rounded-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() =>
                      removeFromCart(
                        index
                      )
                    }
                    className="bg-red-500 text-white px-5 py-3 rounded-xl hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              )
            )}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-3xl shadow-xl p-8 h-fit sticky top-28">
            <h2 className="text-3xl font-bold mb-8">
              Order Summary
            </h2>

            <div className="space-y-5 text-lg">
              <div className="flex justify-between">
                <span>Total Items</span>

                <span>
                  {cartItems.length}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Subtotal</span>

                <span>
                  $
                  {finalTotal.toFixed(
                    2
                  )}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>

                <span>Free</span>
              </div>

              <hr />

              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>

                <span>
                  $
                  {finalTotal.toFixed(
                    2
                  )}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-5">
              {/* Checkout */}
              <button
                onClick={() =>
                  navigate(
                    "/checkout"
                  )
                }
                className="bg-black text-white py-4 rounded-xl text-lg hover:bg-gray-800 transition"
              >
                Proceed to Checkout
              </button>

              {/* Continue Shopping */}
              <button
                onClick={() =>
                  navigate("/")
                }
                className="border border-black py-4 rounded-xl text-lg hover:bg-black hover:text-white transition"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
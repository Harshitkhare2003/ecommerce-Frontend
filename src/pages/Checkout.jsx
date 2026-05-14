import {
  useContext,
  useState,
} from "react"

import { useNavigate } from "react-router-dom"

import toast from "react-hot-toast"

import { CartContext } from "../context/CartContext"

import {
  collection,
  addDoc,
} from "firebase/firestore"

import {
  db,
  auth,
} from "../firebase"

function Checkout() {
  const navigate = useNavigate()

  const {
    cart,
    clearCart,
  } = useContext(CartContext)

  const [formData, setFormData] =
    useState({
      name: "",
      address: "",
      city: "",
      phone: "",
    })

  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  )

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    })
  }

  // Save Order To Firestore
  const handleOrder = async (
    e
  ) => {
    e.preventDefault()

    if (
      !formData.name ||
      !formData.address ||
      !formData.city ||
      !formData.phone
    ) {
      toast.error(
        "Please fill all fields"
      )

      return
    }

    try {
      // Save Order
      await addDoc(
        collection(db, "orders"),
        {
          userEmail:
            auth.currentUser
              ?.email,

          customer:
            formData,

          products: cart,

          total:
            totalPrice,

          createdAt:
            new Date(),
        }
      )

      toast.success(
        "Order Placed Successfully"
      )

      clearCart()

      navigate("/success")
    } catch (error) {
      toast.error(
        "Failed to place order"
      )

      console.log(error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Checkout 💳
        </h1>

        <form
          onSubmit={handleOrder}
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl outline-none"
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={
              formData.address
            }
            onChange={handleChange}
            className="w-full border p-4 rounded-xl outline-none"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl outline-none"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl outline-none"
          />

          <div className="bg-gray-100 p-5 rounded-xl">
            <h2 className="text-2xl font-bold">
              Total:
            </h2>

            <p className="text-3xl text-green-600 font-bold mt-2">
              $
              {totalPrice.toFixed(
                2
              )}
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-xl text-lg hover:bg-gray-800 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  )
}

export default Checkout
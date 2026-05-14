import { Link } from "react-router-dom"

function OrderSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-lg w-full">
        <h1 className="text-5xl mb-4">
          🎉
        </h1>

        <h2 className="text-4xl font-bold mb-4">
          Order Placed Successfully!
        </h2>

        <p className="text-gray-600 mb-8">
          Thank you for shopping with us.
        </p>

        <Link
          to="/"
          className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}

export default OrderSuccess
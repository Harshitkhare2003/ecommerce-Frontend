import { Link } from "react-router-dom"

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-6">
          Have questions or need help with your order? Reach out and we’ll get back to you shortly.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold mb-3">Store Location</h2>
            <p className="text-gray-600">Indore, Madhya Pradesh</p>
          </div>

          <div className="rounded-3xl border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold mb-3">Email</h2>
            <p className="text-gray-600">khareharshit2003@gmail.com</p>
          </div>
        </div>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-block bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact

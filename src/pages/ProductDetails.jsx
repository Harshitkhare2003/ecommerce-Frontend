import {
  useEffect,
  useState,
  useContext,
} from "react"

import { useParams } from "react-router-dom"

import { CartContext } from "../context/CartContext"

function ProductDetails() {
  const { id } = useParams()

  const { addToCart, cart } =
    useContext(CartContext)

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [selectedImage, setSelectedImage] =
    useState("")

  // Quantity
  const [quantity, setQuantity] = useState(1)

  // Size Selection
  const [size, setSize] = useState("M")

  // Color Selection
  const [color, setColor] = useState("Black")

  // Success Message
  const [success, setSuccess] = useState(false)

  // Fetch Product
  useEffect(() => {
    fetch(
      `https://fakestoreapi.com/products/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setProduct(data)
        setSelectedImage(data.image)
        setLoading(false)
      })
      .catch(() => {
        setError("Failed to fetch product")
        setLoading(false)
      })
  }, [id])

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-4xl font-bold">
        Loading Product...
      </div>
    )
  }

  // Error
  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center text-3xl text-red-500 font-bold">
        {error}
      </div>
    )
  }

  // Quantity Functions
  const increaseQty = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  // Total Price
  const totalPrice = (
    product.price * quantity
  ).toFixed(2)

  // Add To Cart
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      quantity,
      size,
      color,
    })

    setSuccess(true)

    setTimeout(() => {
      setSuccess(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* Cart */}
      <div className="flex justify-end mb-8">
        <div className="bg-black text-white px-5 py-3 rounded-xl text-lg font-semibold">
          Cart ({cart.length})
        </div>
      </div>

      {/* Product */}
      <div className="bg-white rounded-3xl shadow-xl p-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div>
          <div className="overflow-hidden rounded-2xl bg-gray-100 p-5">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full h-[500px] object-contain transition duration-500 hover:scale-125 cursor-zoom-in"
            />
          </div>

          {/* Thumbnail */}
          <div className="flex gap-4 mt-5">
            <img
              src={product.image}
              alt={product.title}
              onClick={() =>
                setSelectedImage(product.image)
              }
              className="w-24 h-24 object-contain rounded-xl border cursor-pointer hover:scale-105 transition"
            />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <p className="text-gray-500 text-lg mb-2 capitalize">
            {product.category}
          </p>

          <h1 className="text-5xl font-bold mb-6">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-lg font-semibold">
              ⭐ {product.rating?.rate}
            </span>

            <span className="text-gray-500">
              ({product.rating?.count} reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Size */}
          <div className="mb-6">
            <h3 className="font-bold text-xl mb-3">
              Select Size
            </h3>

            <div className="flex gap-3 flex-wrap">
              {["S", "M", "L", "XL"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() =>
                      setSize(item)
                    }
                    className={`px-5 py-2 rounded-lg border ${
                      size === item
                        ? "bg-black text-white"
                        : "bg-white"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Color */}
          <div className="mb-6">
            <h3 className="font-bold text-xl mb-3">
              Select Color
            </h3>

            <div className="flex gap-3 flex-wrap">
              {[
                "Black",
                "Blue",
                "Red",
                "Green",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    setColor(item)
                  }
                  className={`px-5 py-2 rounded-lg border ${
                    color === item
                      ? "bg-black text-white"
                      : "bg-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-3">
              Quantity
            </h3>

            <div className="flex items-center gap-5">
              <button
                onClick={decreaseQty}
                className="bg-black text-white px-4 py-2 rounded-lg"
              >
                -
              </button>

              <span className="text-2xl font-bold">
                {quantity}
              </span>

              <button
                onClick={increaseQty}
                className="bg-black text-white px-4 py-2 rounded-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Price */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-green-600">
              Total: ${totalPrice}
            </h2>
          </div>

          {/* Success Message */}
          {success && (
            <div className="bg-green-500 text-white px-5 py-3 rounded-xl mb-6">
              Product Added To Cart ✅
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-5 flex-wrap">
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-8 py-4 rounded-xl text-lg hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>

            <button className="border border-black px-8 py-4 rounded-xl text-lg hover:bg-black hover:text-white transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
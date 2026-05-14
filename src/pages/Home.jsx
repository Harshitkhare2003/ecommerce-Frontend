import {
  useState,
  useContext,
  useEffect,
} from "react"

import ProductCard from "../components/ProductCard"

import { CartContext } from "../context/CartContext"

function Home({ search, setSearch }) {
  const { cart } =
    useContext(CartContext)

  const [products, setProducts] =
    useState([])

  const [loading, setLoading] =
    useState(true)

  const [error, setError] =
    useState("")

  const [darkMode, setDarkMode] =
    useState(false)

  // Category Filter
  const [category, setCategory] =
    useState("all")

  // Price Sort
  const [sort, setSort] =
    useState("")

  // Fetch API
  useEffect(() => {
    fetch(
      "https://fakestoreapi.com/products"
    )
      .then((response) =>
        response.json()
      )
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => {
        setError(
          "Failed to fetch products"
        )

        setLoading(false)
      })
  }, [])

  // Search Filter
  let filteredProducts =
    products.filter((product) =>
      product.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    )

  // Category Filter
  if (category !== "all") {
    filteredProducts =
      filteredProducts.filter(
        (product) =>
          product.category ===
          category
      )
  }

  // Price Sort
  if (sort === "low") {
    filteredProducts.sort(
      (a, b) =>
        a.price - b.price
    )
  }

  if (sort === "high") {
    filteredProducts.sort(
      (a, b) =>
        b.price - a.price
    )
  }

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-black text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      {/* Hero Section */}
      <section
        className="h-[80vh] flex items-center justify-center text-center px-6 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Biggest Sale of the Year 🔥
          </h1>

          <p className="text-gray-300 text-lg md:text-2xl mt-6">
            Discover premium products with amazing discounts and modern styles.
          </p>

          <button className="mt-8 bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 hover:bg-gray-200 transition duration-300">
            Shop Now
          </button>
        </div>
      </section>

      {/* Products */}
      <section className="p-10">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-10">
          <h2 className="text-4xl font-bold">
            Featured Products
          </h2>

          <div className="flex gap-4 items-center">
            {/* Dark Mode */}
            <button
              onClick={() =>
                setDarkMode(
                  !darkMode
                )
              }
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              {darkMode
                ? "Light"
                : "Dark"}
            </button>

            {/* Cart */}
            <div className="bg-white text-black px-4 py-2 rounded-lg font-semibold shadow">
              Cart ({cart.length})
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="w-full max-w-2xl px-5 py-4 rounded-2xl border outline-none text-black shadow-lg"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">

          {/* Category Filter */}
          <select
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
            className="border p-3 rounded-xl text-black"
          >
            <option value="all">
              All Categories
            </option>

            <option value="men's clothing">
              Men's Clothing
            </option>

            <option value="women's clothing">
              Women's Clothing
            </option>

            <option value="electronics">
              Electronics
            </option>

            <option value="jewelery">
              Jewelery
            </option>
          </select>

          {/* Price Sort */}
          <select
            value={sort}
            onChange={(e) =>
              setSort(
                e.target.value
              )
            }
            className="border p-3 rounded-xl text-black"
          >
            <option value="">
              Sort By
            </option>

            <option value="low">
              Price Low to High
            </option>

            <option value="high">
              Price High to Low
            </option>
          </select>

        </div>

        {/* Loading */}
        {loading && (
          <h2 className="text-center text-3xl font-bold">
            Loading Products...
          </h2>
        )}

        {/* Error */}
        {error && (
          <h2 className="text-center text-red-500 text-2xl font-bold">
            {error}
          </h2>
        )}

        {/* Product Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  product={{
                    id: product.id,
                    name:
                      product.title,
                    price:
                      product.price,
                    image:
                      product.image,
                    category:
                      product.category,
                    rating:
                      product.rating,
                  }}
                  darkMode={
                    darkMode
                  }
                />
              )
            )}
          </div>
        )}
      </section>
    </div>
  )
}

export default Home
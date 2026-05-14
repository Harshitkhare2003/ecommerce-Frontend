import {
  createContext,
  useState,
  useEffect,
} from "react"

export const CartContext =
  createContext()

function CartProvider({
  children,
}) {
  // LocalStorage Data
  const [cart, setCart] =
    useState(() => {
      const savedCart =
        localStorage.getItem(
          "cart"
        )

      return savedCart
        ? JSON.parse(savedCart)
        : []
    })

  // Save To LocalStorage
  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    )
  }, [cart])

  // Add To Cart
  const addToCart = (
    product
  ) => {
    // Prevent invalid quantity
    if (
      product.quantity &&
      product.quantity <= 0
    ) {
      return
    }

    // Check existing item
    const existingProduct =
      cart.find(
        (item) =>
          item.id ===
            product.id &&
          item.size ===
            product.size &&
          item.color ===
            product.color
      )

    if (existingProduct) {
      // Update quantity
      const updatedCart =
        cart.map((item) =>
          item.id ===
            product.id &&
          item.size ===
            product.size &&
          item.color ===
            product.color
            ? {
                ...item,
                quantity:
                  (item.quantity ||
                    1) +
                  (product.quantity ||
                    1),
              }
            : item
        )

      setCart(updatedCart)
    } else {
      // Add new product
      setCart([
        ...cart,
        {
          ...product,
          quantity:
            product.quantity ||
            1,
        },
      ])
    }
  }

  // Remove Product
  const removeFromCart = (
    index
  ) => {
    const updatedCart =
      cart.filter(
        (_, i) => i !== index
      )

    setCart(updatedCart)
  }

  // Increase Quantity
  const increaseQuantity = (
    index
  ) => {
    const updatedCart = [
      ...cart,
    ]

    updatedCart[index]
      .quantity += 1

    setCart(updatedCart)
  }

  // Decrease Quantity
  const decreaseQuantity = (
    index
  ) => {
    const updatedCart = [
      ...cart,
    ]

    if (
      updatedCart[index]
        .quantity > 1
    ) {
      updatedCart[index]
        .quantity -= 1
    }

    setCart(updatedCart)
  }

  // Clear Cart
  const clearCart = () => {
    setCart([])
  }

  // Total Cart Items
  const cartCount =
    cart.reduce(
      (total, item) =>
        total +
        (item.quantity || 1),
      0
    )

  // Total Price
  const totalPrice =
    cart.reduce(
      (total, item) =>
        total +
        item.price *
          (item.quantity || 1),
      0
    )

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
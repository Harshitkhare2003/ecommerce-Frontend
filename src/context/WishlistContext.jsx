import {
  createContext,
  useState,
  useEffect,
} from "react"

export const WishlistContext =
  createContext()

function WishlistProvider({
  children,
}) {
  const [wishlist, setWishlist] =
    useState(() => {
      const savedWishlist =
        localStorage.getItem(
          "wishlist"
        )

      return savedWishlist
        ? JSON.parse(savedWishlist)
        : []
    })

  // Save LocalStorage
  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    )
  }, [wishlist])

  // Add Wishlist
  const addToWishlist = (
    product
  ) => {
    const exists = wishlist.find(
      (item) =>
        item.id === product.id
    )

    if (!exists) {
      setWishlist([
        ...wishlist,
        product,
      ])
    }
  }

  // Remove Wishlist
  const removeFromWishlist = (
    id
  ) => {
    const updatedWishlist =
      wishlist.filter(
        (item) => item.id !== id
      )

    setWishlist(updatedWishlist)
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider
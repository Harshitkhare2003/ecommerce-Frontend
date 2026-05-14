import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"

import "./index.css"

import CartProvider from "./context/CartContext"
import WishlistProvider from "./context/WishlistContext"
import AuthProvider from "./context/AuthContext"

import { Toaster } from "react-hot-toast"

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>

          <Toaster
            position="top-right"
            reverseOrder={false}
          />

          <App />

        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  </React.StrictMode>
)
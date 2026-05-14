import {
  useEffect,
  useState,
} from "react"

import {
  collection,
  getDocs,
} from "firebase/firestore"

import { db } from "../firebase"

function Admin() {
  const [orders, setOrders] =
    useState([])

  // Fetch Orders
  useEffect(() => {
    const fetchOrders =
      async () => {
        const querySnapshot =
          await getDocs(
            collection(
              db,
              "orders"
            )
          )

        const orderData = []

        querySnapshot.forEach(
          (doc) => {
            orderData.push({
              id: doc.id,
              ...doc.data(),
            })
          }
        )

        setOrders(orderData)
      }

    fetchOrders()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Admin Orders 📦
      </h1>

      <div className="grid gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-6 rounded-2xl shadow"
          >
            <h2 className="text-2xl font-bold mb-2">
              {
                order.customer
                  .name
              }
            </h2>

            <p>
              📧{" "}
              {
                order.userEmail
              }
            </p>

            <p>
              📍{" "}
              {
                order.customer
                  .address
              }
            </p>

            <p>
              📱{" "}
              {
                order.customer
                  .phone
              }
            </p>

            <p className="text-green-600 font-bold mt-3">
              Total: $
              {order.total}
            </p>

            <div className="mt-4">
              <h3 className="font-bold mb-2">
                Products:
              </h3>

              {order.products.map(
                (
                  product,
                  index
                ) => (
                  <div
                    key={index}
                    className="border-b py-2"
                  >
                    <p>
                      {
                        product.name
                      }
                    </p>

                    <p>
                      Qty:
                      {
                        product.quantity
                      }
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Admin
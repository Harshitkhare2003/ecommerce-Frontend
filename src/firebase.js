// import { initializeApp } from "firebase/app"

// import { getAuth } from "firebase/auth"

// const firebaseConfig = {
//   apiKey: "AIzaSyBLWZws4Vy7tw1tGKjUTFQntjvKjzOUjuA",

//   authDomain:
//     "ecommerce-frontend-d0022.firebaseapp.com",

//   projectId:
//     "ecommerce-frontend-d0022",

//   storageBucket:
//     "ecommerce-frontend-d0022.firebasestorage.app",

//   messagingSenderId:
//     "977285402725",

//   appId:
//     "1:977285402725:web:0a9ddf0b5ceba2d69c368c",
// }

// const app =
//   initializeApp(firebaseConfig)

// export const auth =
//   getAuth(app)

import { initializeApp } from "firebase/app"

import {
  getAuth,
} from "firebase/auth"

import {
  getFirestore,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey:
    "AIzaSyBLWZws4Vy7tw1tGKjUTFQntjvKjzOUjuA",

  authDomain:
    "ecommerce-frontend-d0022.firebaseapp.com",

  projectId:
    "ecommerce-frontend-d0022",

  storageBucket:
    "ecommerce-frontend-d0022.firebasestorage.app",

  messagingSenderId:
    "977285402725",

  appId:
    "1:977285402725:web:0a9ddf0b5ceba2d69c368c",
}

const app =
  initializeApp(firebaseConfig)

export const auth =
  getAuth(app)

export const db =
  getFirestore(app)
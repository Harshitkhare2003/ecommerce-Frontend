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
    import.meta.env.VITE_FIREBASE_API_KEY ||
    "AIzaSyBLWZws4Vy7tw1tGKjUTFQntjvKjzOUjuA",

  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ||
    "ecommerce-frontend-d0022.firebaseapp.com",

  projectId:
    import.meta.env.VITE_FIREBASE_PROJECT_ID ||
    "ecommerce-frontend-d0022",

  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ||
    "ecommerce-frontend-d0022.firebasestorage.app",

  messagingSenderId:
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ||
    "977285402725",

  appId:
    import.meta.env.VITE_FIREBASE_APP_ID ||
    "1:977285402725:web:0a9ddf0b5ceba2d69c368c",
}

const app =
  initializeApp(firebaseConfig)

export const auth =
  getAuth(app)

export const db =
  getFirestore(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyAjxa_Tb5_YG07esB1DBJMTARct38Cjj1M',
  authDomain: 'house-marketplace-app-ea4c6.firebaseapp.com',
  projectId: 'house-marketplace-app-ea4c6',
  storageBucket: 'house-marketplace-app-ea4c6.appspot.com',
  messagingSenderId: '1019023848667',
  appId: '1:1019023848667:web:b6a098401aecb7078b08fe',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()

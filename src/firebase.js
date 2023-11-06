// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA9vnIbNC2nJ5Ib5rVPYO6QrLUk2DCpUqA',
  authDomain: 'midnight-app-5c0c0.firebaseapp.com',
  projectId: 'midnight-app-5c0c0',
  storageBucket: 'midnight-app-5c0c0.appspot.com',
  messagingSenderId: '475974005919',
  appId: '1:475974005919:web:821e10c0b1ef63506adeaa',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

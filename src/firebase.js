// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAng6rImfylQWx21MbLoXOcgEI3laVpBJA",
  authDomain: "medical-camp-2a6bb.firebaseapp.com",
  projectId: "medical-camp-2a6bb",
  storageBucket: "medical-camp-2a6bb.appspot.com",
  messagingSenderId: "194211858704",
  appId: "1:194211858704:web:31959976aa8d001820fd95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
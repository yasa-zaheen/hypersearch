import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZu3O2FM1bz9-jn35ewk1akBIhIVXB8Pg",
  authDomain: "hypersearch-33c50.firebaseapp.com",
  projectId: "hypersearch-33c50",
  storageBucket: "hypersearch-33c50.appspot.com",
  messagingSenderId: "723601685408",
  appId: "1:723601685408:web:9672642291e3bb245cc2c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

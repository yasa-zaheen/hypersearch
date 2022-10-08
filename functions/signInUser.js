import { auth, db } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function signInUser() {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((results) => {
      console.log(results.user);
      console.log("User signed in");
      setDoc(doc(db, "users", user.uid), {}, { merge: true }).then(() => {});
    })
    .catch((error) => {
      console.log("User not signed in");
      console.log(error);
    });
}

export default signInUser;

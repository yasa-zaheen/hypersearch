import { auth, db } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function signInUser() {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((results) => {
      const user = results.user;
      setDoc(doc(db, "users", user.uid), {}, { merge: true }).then(() => {});
    })
    .catch((error) => {
      console.log(error);
    });
}

export default signInUser;

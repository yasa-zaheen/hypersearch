import { auth, db } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function signInUser() {
  const provider = new GoogleAuthProvider();

  signInWithRedirect(auth, provider)
    .then((results) => {
      const user = results.user;
      setDoc(doc(db, "users", user.uid), {}, { merge: true }).then(() => {});
    })
    .catch((error) => {
      console.log(error);
    });
}

export default signInUser;

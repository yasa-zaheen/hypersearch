import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function signOutUser() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}

export default signOutUser;

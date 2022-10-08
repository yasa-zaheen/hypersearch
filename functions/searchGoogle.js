import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function searchGoogle(e, router, inputBoxValue, user) {
  e.preventDefault();

  if (inputBoxValue === "") return;

  router.push(`/search?q=${inputBoxValue}`);

  addDoc(collection(db, `users/${user.uid}/searches`), {
    q: inputBoxValue,
    time: serverTimestamp(),
  });
}

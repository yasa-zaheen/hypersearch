import Head from "next/head";
import { useRouter } from "next/router";

import TextButton from "../components/TextButton";

import { auth } from "../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

function signIn() {
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.push("/");
    }
  });

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <Head>
        <title>sign in</title>
      </Head>
      <p className="text-3xl font-bold mb-4">welcome to hypersearch</p>
      <TextButton
        onClick={signInWithGoogle}
        text="Sign in with google"
        backgroundColor="#5603ad"
        color="#ffffff"
      />
    </div>
  );
}

export default signIn;

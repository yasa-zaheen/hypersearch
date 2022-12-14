import Head from "next/head";
import { useRouter } from "next/router";

import TextButton from "../components/TextButton";

import signInUser from "../functions/signInUser";
import useAuthState from "../hooks/useAuthState";

function SignIn() {
  const user = useAuthState();
  const router = useRouter();

  user ? router.push("/") : null;

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <Head>
        <title>sign in</title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7299531318569051"
          crossorigin="anonymous"
        ></script>
      </Head>
      <p className="text-3xl font-bold mb-4">welcome to hypersearch</p>
      <TextButton
        onClick={signInUser}
        text="Sign in with google"
        backgroundColor="#5603ad"
        color="#ffffff"
      />
    </div>
  );
}

export default SignIn;

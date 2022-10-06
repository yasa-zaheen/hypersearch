import Head from "next/head";

import TextButton from "../components/TextButton";

function signIn() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <Head>
        <title>sign in</title>
      </Head>
      <p className="text-3xl font-bold mb-4">welcome to hypersearch</p>
      <TextButton
        text="Sign in with google"
        backgroundColor="#5603ad"
        color="#ffffff"
      />
    </div>
  );
}

export default signIn;

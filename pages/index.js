import { useState } from "react";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import searchGoogle from "../functions/searchGoogle";
import signOutUser from "../functions/signOutUser";

import useAuthState from "../hooks/useAuthState";

import InputBox from "../components/InputBox";
import IconButton from "../components/IconButton";
import TextButton from "../components/TextButton";
import Avatar from "../components/Avatar";

import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const user = useAuthState();
  const [inputBoxValue, setInputBoxValue] = useState("");

  const router = useRouter();

  return (
    <div className="px-4 py-4 h-screen w-full flex items-center justify-center">
      <Head>
        <title>hypersearch</title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7299531318569051"
          crossorigin="anonymous"
        ></script>
      </Head>

      <div className="flex space-x-4 absolute top-4 right-4">
        {user ? (
          <div className="flex items-center space-x-4">
            <TextButton text="Sign out" onClick={signOutUser} />
            <Avatar src={user.photoURL} />
          </div>
        ) : (
          <Link href="/signIn">
            <TextButton text="Sign in" />
          </Link>
        )}
      </div>

      <form className="flex items-center justify-center w-3/4 space-x-2">
        <InputBox value={inputBoxValue} setValue={setInputBoxValue} />
        <IconButton
          Icon={ArrowRightCircleIcon}
          onClick={(e) => {
            searchGoogle(e, router, inputBoxValue, user);
          }}
        />
      </form>
    </div>
  );
}

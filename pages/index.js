import { useState } from "react";

import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import InputBox from "../components/InputBox";
import IconButton from "../components/IconButton";
import TextButton from "../components/TextButton";
import Avatar from "../components/Avatar";

import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [user, setUser] = useState(null);
  const [inputBoxValue, setInputBoxValue] = useState("");

  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  const search = (e) => {
    e.preventDefault();

    if (inputBoxValue === "") return;

    router.push(`/search?q=${inputBoxValue}`);
  };

  const signOutWithGoogle = () => {
    signOut(auth).then(() => {
      console.log("User signed out");
    });
  };

  return (
    <div className="px-4 py-4 h-screen w-full flex items-center justify-center">
      <Head>
        <title>hypersearch</title>
      </Head>

      <div className="flex space-x-4 absolute top-4 right-4">
        {user ? (
          <div className="flex items-center space-x-4">
            <TextButton text="Sign out" onClick={signOutWithGoogle} />
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
        <IconButton Icon={ArrowRightCircleIcon} onClick={search} />
      </form>
    </div>
  );
}

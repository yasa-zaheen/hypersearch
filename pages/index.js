import { useState } from "react";
import { useRouter } from "next/router";

import Head from "next/head";

import InputBox from "../components/InputBox";
import IconButton from "../components/IconButton";

import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [inputBoxValue, setInputBoxValue] = useState("");
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();

    if (inputBoxValue === "") return;

    router.push(`/search?q=${inputBoxValue}`);
  };

  return (
    <div className="px-4 py-4 h-screen w-full flex items-center justify-center">
      <Head>
        <title>hypersearch</title>
      </Head>

      <form className="flex items-center justify-center w-3/4 space-x-2">
        <InputBox value={inputBoxValue} setValue={setInputBoxValue} />
        <IconButton Icon={ArrowRightCircleIcon} onClick={search} />
      </form>
    </div>
  );
}
